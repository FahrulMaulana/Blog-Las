const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');
const { JSDOM } = require('jsdom');

const root = path.resolve(__dirname, '..');
function testSitemap() {
  const fixture = fs.mkdtempSync(path.join(os.tmpdir(), 'las-sitemap-test-'));
  try {
    for (const dir of ['scripts', 'build', 'public']) fs.mkdirSync(path.join(fixture, dir));
    const script = path.join(fixture, 'scripts/generate-sitemap.js');
    fs.copyFileSync(path.join(__dirname, 'generate-sitemap.js'), script);
    execFileSync(process.execPath, [script]);
    const xml = fs.readFileSync(path.join(fixture, 'build/sitemap.xml'), 'utf8');
    assert.ok(!xml.includes('<lastmod>'), 'Unknown content modification dates must be omitted, not replaced with build dates');
    assert.strictEqual(fs.readFileSync(path.join(fixture, 'public/sitemap.xml'), 'utf8'), xml);
    const doc = new JSDOM(xml, { contentType: 'text/xml' }).window.document;
    assert.strictEqual(doc.querySelectorAll('url').length, 19);
    assert.strictEqual(doc.querySelector('loc').textContent, 'https://indianjayalas.com/');
    execFileSync(process.execPath, [script]);
    assert.strictEqual(fs.readFileSync(path.join(fixture, 'build/sitemap.xml'), 'utf8'), xml);
    console.log('PASS sitemap: 19 URLs, no invented lastmod, matching public/build output, repeatable generation');
  } finally { fs.rmSync(fixture, { recursive: true, force: true }); }
}
function testHomepage() {
  const doc = new JSDOM(fs.readFileSync(path.join(root, 'build/index.html'), 'utf8')).window.document;
  const schemas = [...doc.querySelectorAll('script[type="application/ld+json"]')].map(node => JSON.parse(node.textContent));
  const business = schemas.find(schema => schema['@type'] === 'LocalBusiness');
  assert.ok(business, 'Homepage must retain LocalBusiness schema');
  assert.ok(!('aggregateRating' in business), 'Unsupported aggregateRating must be removed');
  assert.ok(!('geo' in business), 'Unverified coordinates must be removed');
  assert.strictEqual(business.telephone, '081212154019');
  assert.deepStrictEqual(business.address, {
    '@type': 'PostalAddress', streetAddress: 'JL.BAMBU KUNING RT 006 RW 001 PONDOK PETIR',
    addressLocality: 'Bojongsari', addressRegion: 'Depok', postalCode: '16516', addressCountry: 'ID',
  });
  const expected = new Map([
    ['Depok', '/jasa-las-depok'], ['Pamulang', '/jasa-las-pamulang'], ['BSD', '/jasa-las-bsd'],
    ['Ciputat', '/jasa-las-ciputat'], ['Sawangan', '/jasa-las-sawangan'], ['Cinere', '/jasa-las-cinere'],
    ['Jakarta Selatan', '/jasa-las-jakarta-selatan'],
  ]);
  const area = doc.querySelector('#area-layanan');
  const links = [...area.querySelectorAll('a[href^="/"]')];
  assert.strictEqual(links.length, expected.size, 'Only existing exact-match location routes should be linked');
  for (const link of links) {
    const href = expected.get(link.textContent.trim());
    assert.strictEqual(link.getAttribute('href'), href);
    assert.ok(fs.existsSync(path.join(root, 'build', href, 'index.html')), `Missing route artifact ${href}`);
  }
  for (const label of ['Serpong', 'Bojongsari', 'Lenteng Agung', 'Jagakarsa', 'Tangerang Selatan']) {
    assert.ok(area.textContent.includes(label), `Preserve unlinked service area ${label}`);
    assert.ok(!links.some(link => link.textContent.trim() === label));
  }
  assert.ok(doc.querySelector('a[aria-label="Chat WhatsApp Indian Jaya"][href="https://wa.me/6281212154019"]'));
  console.log('PASS homepage artifact: honest JSON-LD, retained address/phone, 7 valid area links, 5 unlinked names, WhatsApp retained');
}
if (process.argv.includes('--homepage')) testHomepage();
else { testSitemap(); if (!process.argv.includes('--sitemap')) testHomepage(); }
