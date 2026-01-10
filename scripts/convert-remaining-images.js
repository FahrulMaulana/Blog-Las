const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertImages() {
  const dirs = [
    'src/assets/images/pagar',
    'src/assets/images/tangga',
    'src/assets/images/teralis',
    'src/assets/images'
  ];
  
  let totalSaved = 0;
  let count = 0;
  
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;
    
    console.log(`\n📁 Processing: ${dir}`);
    
    const files = fs.readdirSync(dir)
      .filter(f => /\.(jpg|jpeg|png)$/i.test(f))
      .filter(f => !f.includes('small-logos') && !f.includes('ct-dark'));
    
    for (const file of files) {
      const input = path.join(dir, file);
      const output = input.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      
      if (fs.existsSync(output)) {
        console.log(`⏭️  Skip: ${file} (WebP exists)`);
        continue;
      }
      
      const statsBefore = fs.statSync(input);
      
      await sharp(input)
        .resize(800, 800, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 75, effort: 6 })
        .toFile(output);
      
      const statsAfter = fs.statSync(output);
      const saved = statsBefore.size - statsAfter.size;
      totalSaved += saved;
      count++;
      
      const pct = ((saved / statsBefore.size) * 100).toFixed(1);
      console.log(`✅ ${file} → ${(statsBefore.size / 1024).toFixed(1)}KB → ${(statsAfter.size / 1024).toFixed(1)}KB (${pct}% smaller)`);
    }
  }
  
  console.log(`\n🎉 Total: ${count} images, ${(totalSaved / 1024 / 1024).toFixed(2)} MB saved`);
}

convertImages().catch(console.error);
