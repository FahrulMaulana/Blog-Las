const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Images displayed at 255x255
const gallery255 = [
  'src/assets/images/kanopi11.webp',
  'src/assets/images/kanopi12.webp',
  'src/assets/images/kanopi13.webp',
  'src/assets/images/kanopi14.webp',
  'src/assets/images/pagar/pagar4.webp',
  'src/assets/images/pagar/pagar7.webp',
  'src/assets/images/pagar/pagar8.webp',
  'src/assets/images/tangga/tangga1.webp',
  'src/assets/images/teralis/teralis.webp',
];

// Images displayed at 325x150
const service325 = [
  'src/assets/images/pagar/pagar1.webp',
];

async function optimizeImage(filePath, width, height = width) {
  const fullPath = path.join(__dirname, '..', filePath);
  
  await sharp(fullPath)
    .resize(width, height, { fit: 'cover' })
    .webp({ quality: 82, effort: 6 })
    .toFile(fullPath + '.tmp');
  
  fs.renameSync(fullPath + '.tmp', fullPath);
  console.log(`✓ ${filePath} → ${width}x${height}`);
}

async function run() {
  console.log('Resizing gallery images to 255x255...');
  for (const img of gallery255) {
    await optimizeImage(img, 255);
  }
  
  console.log('\nResizing service images to 325x150...');
  for (const img of service325) {
    await optimizeImage(img, 325, 150);
  }
  
  console.log('\n✓ All images optimized!');
}

run().catch(console.error);
