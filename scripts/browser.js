const puppeteer = require('puppeteer-core');
const chromium = require('@sparticuz/chromium');

async function launchBrowser() {
  // Use the lockfile-pinned serverless binary and its bundled libraries on both
  // Vercel and local QA. Never fall back to system Chrome or a browser download.
  const executablePath = await chromium.executablePath();
  const browser = await puppeteer.launch({
    headless: 'shell',
    executablePath,
    args: chromium.args,
  });
  console.log(`Browser: ${await browser.version()} (${executablePath})`);
  return browser;
}

if (require.main === module) {
  // Keep browser:install as an offline extraction + real launch smoke test.
  launchBrowser()
    .then((browser) => browser.close())
    .catch((error) => {
      console.error(error);
      process.exitCode = 1;
    });
}

module.exports = { launchBrowser };
