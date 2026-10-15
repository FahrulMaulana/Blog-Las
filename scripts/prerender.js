/* Render the actual production app, using sitemap URLs as the crawl contract.
 * Never invokes npm/build: this is the final, non-recursive postbuild step.
 */
const fs = require('fs');
const path = require('path');
const http = require('http');
const assert = require('assert');
const { launchBrowser } = require('./browser');
const root = path.resolve(__dirname, '../build');
(async () => {
  const shell = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const urls = [...fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8').matchAll(/<loc>(.*?)<\/loc>/g)].map(x => x[1]);
  // Always serve the untouched shell while rendering, not earlier snapshots.
  const server = http.createServer((req, res) => {
    const pathname = new URL(req.url, 'http://localhost').pathname;
    const file = path.join(root, pathname);
    if (fs.existsSync(file) && fs.statSync(file).isFile() && !file.endsWith('.html')) {
      res.setHeader('Content-Type', file.endsWith('.js') ? 'application/javascript' : file.endsWith('.css') ? 'text/css' : 'application/octet-stream');
      fs.createReadStream(file).pipe(res);
    } else { res.setHeader('Content-Type', 'text/html'); res.end(shell); }
  });
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  let browser;
  try {
    browser = await launchBrowser();
    const page = await browser.newPage();
    const origin = `http://127.0.0.1:${server.address().port}`;
    await page.setRequestInterception(true);
    page.on('request', req => req.url().startsWith(origin) || req.url().startsWith('data:') ? req.continue() : req.abort());
    const errors = [];
    page.on('pageerror', e => errors.push(String(e)));
    for (const url of urls) {
      const route = new URL(url).pathname;
      await page.goto(origin + route, {waitUntil: 'networkidle0'});
      await page.waitForSelector('#root h1');
      await page.waitForFunction(expected => document.querySelector('link[rel="canonical"]')?.href === expected, {}, url);
      assert.strictEqual(new URL(page.url()).pathname, route, `Unexpected redirect: ${route}`);
      assert.deepStrictEqual(errors, [], `Runtime errors: ${route}`);
      const html = await page.evaluate(() => {
        const clone = document.documentElement.cloneNode(true);
        // Mark browser snapshots (not React SSR) for replacement at app startup.
        clone.querySelector('#root').setAttribute('data-prerendered', 'true');
        return '<!DOCTYPE html>\n' + clone.outerHTML;
      });
      const target = path.join(root, route, 'index.html');
      fs.mkdirSync(path.dirname(target), {recursive: true});
      fs.writeFileSync(target, html);
      console.log(`Rendered ${route} -> ${path.relative(root, target)}`);
    }
  } finally {
    if (browser) await browser.close();
    await new Promise(r => server.close(r));
  }
})().catch(e => { console.error(e); process.exitCode = 1; });
