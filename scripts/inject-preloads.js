const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '../build');
const indexPath = path.join(buildDir, 'index.html');

// Read the built index.html
let html = fs.readFileSync(indexPath, 'utf8');

// Find all JS files
const jsFiles = fs.readdirSync(path.join(buildDir, 'static/js'))
  .filter(f => f.endsWith('.js') && !f.endsWith('.map'));

// Find critical chunks
const runtime = jsFiles.find(f => f.startsWith('runtime'));
const main = jsFiles.find(f => f.startsWith('main'));
const reactChunk = jsFiles.find(f => f.startsWith('react-') && f.includes('2594363e'));

// Build preload tags
const preloads = [
  runtime && `<link rel="preload" href="/static/js/${runtime}" as="script">`,
  reactChunk && `<link rel="preload" href="/static/js/${reactChunk}" as="script">`,
  main && `<link rel="preload" href="/static/js/${main}" as="script">`,
].filter(Boolean).join('');

// Replace modulepreload with actual preload tags
html = html.replace(
  /<link rel="modulepreload" href="\/static\/js\/runtime\.js"\/><link rel="modulepreload" href="\/static\/js\/react\.js"\/><link rel="modulepreload" href="\/static\/js\/main\.js"\/>/,
  preloads
);

// Write back
fs.writeFileSync(indexPath, html);
console.log('✓ Injected preload tags for:', { runtime, reactChunk, main });
