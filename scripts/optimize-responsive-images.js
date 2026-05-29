const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [255, 325, 454, 700];
const inputDir = path.join(__dirname, '../src/assets/images');
const outputDir = path.join(__dirname, '../src/assets/images/optimized');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory() && entry.name !== 'optimized') {
      await processDirectory(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.webp')) {
      const baseName = path.basename(entry.name, '.webp');
      
      for (const size of sizes) {
        const outputPath = path.join(outputDir, `${baseName}-${size}w.webp`);
        
        await sharp(fullPath)
          .resize(size, size, { fit: 'cover' })
          .webp({ quality: 85, effort: 6 })
          .toFile(outputPath);
        
        console.log(`✓ ${baseName}-${size}w.webp`);
      }
    }
  }
}

processDirectory(inputDir).then(() => {
  console.log('\n✓ All images optimized');
}).catch(console.error);
