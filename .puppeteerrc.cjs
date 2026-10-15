const path = require('path');

module.exports = {
  // Keep the pinned browser with the install, not in a developer's home cache.
  cacheDirectory: path.join(__dirname, 'node_modules', '.cache', 'puppeteer'),
  chrome: { skipDownload: false },
  'chrome-headless-shell': { skipDownload: true },
};
