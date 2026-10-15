/* Public browser/build regression seam; no analytics or remote requests. */
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const http = require('http');
const { launchBrowser } = require('./browser');
const root = path.resolve(__dirname, '../build');
const routes = [...fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8').matchAll(/<loc>(.*?)<\/loc>/g)].map(x => new URL(x[1]).pathname);
(async () => {
  const server = http.createServer((req, res) => {
    const pathname = decodeURI(req.url.split('?')[0]);
    let file = path.join(root, pathname);
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
    if (!fs.existsSync(file)) file = path.join(root, 'index.html');
    res.setHeader('Content-Type', file.endsWith('.js') ? 'application/javascript' : file.endsWith('.css') ? 'text/css' : file.endsWith('.html') ? 'text/html' : 'application/octet-stream');
    fs.createReadStream(file).pipe(res);
  });
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  let browser;
  try {
    browser = await launchBrowser();
    const page = await browser.newPage();
    const origin = `http://127.0.0.1:${server.address().port}`;
    await page.setRequestInterception(true);
    page.on('request', req => req.url().startsWith(origin) || req.url().startsWith('data:') ? req.continue() : req.abort());
    // If app JavaScript fails to load, snapshots must remain readable.
    const staticPage = await browser.newPage();
    await staticPage.setRequestInterception(true);
    staticPage.on('request', req => req.resourceType() === 'script' || !req.url().startsWith(origin) ? req.abort() : req.continue());
    await staticPage.goto(origin + '/', {waitUntil: 'networkidle0'});
    assert.ok(await staticPage.$('#root[data-prerendered="true"] h1'), 'Snapshot survives blocked app scripts');
    await staticPage.close();
    console.log('PASS snapshot remains readable with app scripts blocked');
    const evidence = [];
    const errors = [];
    page.on('pageerror', error => errors.push(String(error)));
    for (const route of routes) {
      await page.goto(origin + route, {waitUntil: 'networkidle0'});
      await page.waitForSelector('#root:not([data-prerendered]) h1');
      await new Promise(r => setTimeout(r, 300));
      const item = await page.evaluate(() => ({pathname: location.pathname, titles: [...document.querySelectorAll('title')].map(x => x.textContent), canonical: [...document.querySelectorAll('link[rel="canonical"]')].map(x => x.href), descriptions: [...document.querySelectorAll('meta[name="description"]')].map(x => x.content), h1: [...document.querySelectorAll('h1')].map(x => x.textContent), schema: [...document.querySelectorAll('script[type="application/ld+json"]')].map(x => JSON.parse(x.textContent))}));
      console.log(JSON.stringify({route, ...item}));
      evidence.push({route, ...item});
      assert.strictEqual(item.pathname, route, 'route must not redirect');
      assert.deepStrictEqual(item.canonical, ['https://indianjayalas.com' + route]);
      assert.strictEqual(item.descriptions.length, 1);
      assert.strictEqual(item.titles.length, 1);
      assert.ok(item.schema.length, `Missing JSON-LD ${route}`);
      if (route === '/blog') assert.ok(item.schema.some(schema => schema['@type'] === 'Blog' && schema.url === 'https://indianjayalas.com/blog'));
      assert.deepStrictEqual(errors, [], `Runtime page errors ${route}`);
    }
    assert.strictEqual(new Set(evidence.map(x => x.titles[0])).size, evidence.length);
    assert.strictEqual(new Set(evidence.map(x => x.descriptions[0])).size, evidence.length);
    await page.setViewport({width: 390, height: 844});
    await page.goto(origin + '/', {waitUntil: 'networkidle0'});
    const mobile = await page.evaluate(() => {
      const img = document.querySelector('img[alt="WhatsApp Logo"]');
      const target = img.closest('a,button') || img.parentElement;
      const rect = target.getBoundingClientRect();
      const hit = document.elementFromPoint(rect.x + rect.width / 2, rect.y + rect.height / 2);
      window.__waOpened = '';
      window.open = url => { window.__waOpened = url; };
      target.addEventListener('click', event => { if (target.href) { event.preventDefault(); window.__waOpened = target.href; } }, {once: true});
      target.click();
      return {width: innerWidth, overflow: document.documentElement.scrollWidth > innerWidth, display: getComputedStyle(target).display, rect: {x: rect.x, y: rect.y, width: rect.width, height: rect.height}, hit: target.contains(hit), opened: window.__waOpened};
    });
    console.log(JSON.stringify({mobile}));
    assert.strictEqual(mobile.overflow, false);
    assert.notStrictEqual(mobile.display, 'none');
    assert.ok(mobile.rect.width > 0 && mobile.hit, 'WA visible and hit-testable');
    assert.ok(mobile.opened.includes('wa.me/6281212154019'), 'WA click opens intended chat');
    assert.deepStrictEqual(errors, [], 'Runtime page errors including mobile');
    console.log(`PASS ${evidence.length} sitemap rendered routes, single self canonical/description/title, unique metadata, parsed JSON-LD on every route, zero runtime pageerrors and mobile WA`);
  } finally {
    if (browser) await browser.close();
    await new Promise(r => server.close(r));
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
