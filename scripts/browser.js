const fs = require('fs');
const puppeteer = require('puppeteer');

async function launchBrowser() {
  // No system Chrome fallback: build and tests use the lockfile-pinned browser.
  const executablePath = puppeteer.executablePath();
  if (!fs.existsSync(executablePath)) {
    throw new Error(`Pinned Chrome missing at ${executablePath}. Run npm run browser:install.`);
  }
  const browser = await puppeteer.launch({
    headless: true,
    executablePath,
    args: ['--no-sandbox', '--disable-dev-shm-usage'],
  });
  console.log(`Browser: ${await browser.version()} (${executablePath})`);
  return browser;
}

module.exports = { launchBrowser };
