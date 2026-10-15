const fs = require('fs');
const path = require('path');
const assert = require('assert');
const { JSDOM } = require('jsdom');
const root = path.resolve(__dirname, '../build');
const urls = [...fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8').matchAll(/<loc>(.*?)<\/loc>/g)].map(x => x[1]);
const vercel = require('../vercel.json');
for (const url of urls) {
  const route = new URL(url).pathname;
  if (route !== '/') assert.ok(vercel.rewrites.some(rule => rule.source === route && rule.destination === route + '/index.html'), `Missing HTML-first rewrite ${route}`);
}
const titles = new Set(), descriptions = new Set();
for (const url of urls) {
  const route = new URL(url).pathname;
  const file = path.join(root, route, 'index.html');
  assert.ok(fs.existsSync(file), `Missing generated route HTML: ${route}`);
  const doc = new JSDOM(fs.readFileSync(file, 'utf8')).window.document;
  assert.deepStrictEqual([...doc.querySelectorAll('link[rel="canonical"]')].map(x => x.href), [url], route);
  assert.strictEqual(doc.querySelectorAll('title').length, 1, route);
  assert.strictEqual(doc.querySelectorAll('meta[name="description"]').length, 1, route);
  const title = doc.title, description = doc.querySelector('meta[name="description"]').content;
  assert.ok(title && !titles.has(title), `Missing/duplicate title ${route}`);
  assert.ok(description && !descriptions.has(description), `Missing/duplicate description ${route}`);
  titles.add(title); descriptions.add(description);
  assert.ok(doc.querySelector('#root[data-prerendered="true"] h1'), `Missing marked rendered content ${route}`);
  assert.ok(![...doc.querySelectorAll('script')].some(node => node.textContent.includes('replaceChildren()')), `Unsafe inline snapshot reset ${route}`);
  const schemas = [...doc.querySelectorAll('script[type="application/ld+json"]')].map(node => JSON.parse(node.textContent));
  assert.ok(schemas.length, `Missing JSON-LD ${route}`);
  if (route === '/blog') assert.ok(schemas.some(schema => schema['@type'] === 'Blog' && schema.url === url), 'Blog schema must describe its canonical URL');
  console.log(`PASS ${route}: rendered HTML, single self canonical, unique title/description, schema`);
}
console.log(`PASS ${urls.length} sitemap URLs match generated artifacts`);
require('./test-seo-cleanup');
