const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

// Directories to process
const dirs = ["src/assets/images", "public"];

// Convert images to WebP
async function convertToWebP() {
  console.log("🖼️  Starting image conversion to WebP...\n");

  let totalConverted = 0;
  let totalSavings = 0;

  for (const dir of dirs) {
    const dirPath = path.join(__dirname, "..", dir);

    if (!fs.existsSync(dirPath)) {
      console.log(`⚠️  Directory not found: ${dir}`);
      continue;
    }

    console.log(`📁 Processing directory: ${dir}`);

    try {
      const files = await readdir(dirPath);
      const imageFiles = files.filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

      if (imageFiles.length === 0) {
        console.log(`   ℹ️  No images found in ${dir}\n`);
        continue;
      }

      console.log(`   Found ${imageFiles.length} images to convert...`);

      let converted = 0;
      for (const file of imageFiles) {
        const inputPath = path.join(dirPath, file);
        const outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, ".webp");

        // Skip if WebP already exists
        if (fs.existsSync(outputPath)) {
          console.log(`   ⏭️  Skipped ${file} (WebP already exists)`);
          continue;
        }

        try {
          const originalStats = await stat(inputPath);
          const originalSize = originalStats.size;

          // Convert to WebP
          await sharp(inputPath)
            .webp({
              quality: 85,
              effort: 6, // Compression effort (0-6, higher = better but slower)
            })
            .toFile(outputPath);

          const webpStats = await stat(outputPath);
          const webpSize = webpStats.size;
          const savings = ((originalSize - webpSize) / originalSize) * 100;

          console.log(
            `   ✅ ${file} → ${path.basename(outputPath)} (${(originalSize / 1024).toFixed(
              1
            )}KB → ${(webpSize / 1024).toFixed(1)}KB, ${savings.toFixed(1)}% smaller)`
          );

          converted++;
          totalConverted++;
          totalSavings += originalSize - webpSize;
        } catch (err) {
          console.log(`   ⚠️  Failed to convert ${file}: ${err.message}`);
        }
      }

      console.log(`   ✅ Converted ${converted}/${imageFiles.length} images\n`);
    } catch (error) {
      console.error(`   ❌ Error processing ${dir}:`, error.message);
    }
  }

  console.log("✨ Image conversion complete!\n");
  console.log(`📊 Summary:`);
  console.log(`   • Total images converted: ${totalConverted}`);
  console.log(`   • Total space saved: ${(totalSavings / 1024 / 1024).toFixed(2)} MB`);
  console.log(
    `   • Average savings: ${
      totalConverted > 0 ? ((totalSavings / totalConverted / 1024) * 100) / 100 : 0
    } KB per image\n`
  );
  console.log("📝 Next steps:");
  console.log("   1. Update image imports in your code:");
  console.log('      import bgImage from "assets/images/las.webp"');
  console.log("   2. For browser compatibility, use <picture> tag:");
  console.log("      <picture>");
  console.log('        <source srcset="image.webp" type="image/webp">');
  console.log('        <img src="image.jpg" alt="fallback">');
  console.log("      </picture>");
  console.log("   3. Keep original JPG files as fallback for older browsers");
  console.log("   4. Test in development: npm start");
  console.log("   5. Build and deploy: npm run build && git push\n");
}

convertToWebP().catch((error) => {
  console.error("❌ Fatal error:", error);
  process.exit(1);
});
