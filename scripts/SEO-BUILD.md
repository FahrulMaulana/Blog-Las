# Reproducible SEO build

Use Node 22.x (the package engine selects Node 22 on Vercel) and npm 10.
The committed package-lock.json is required. Vercel uses
`npm ci --legacy-peer-deps`, then `npm run build`; do not omit devDependencies
in the build environment.

```sh
npm ci --legacy-peer-deps
CI=true npm test -- --watchAll=false --runInBand
npm run build
npm run test:seo
```

Puppeteer is pinned to 24.37.5. Its install hook downloads its matching
Chrome for Testing; `.puppeteerrc.cjs` stores it inside
`node_modules/.cache/puppeteer`. Postbuild explicitly runs
`npm run browser:install` as well, so a restored dependency cache without a
browser is repaired before rendering. Do not set PUPPETEER_SKIP_DOWNLOAD or
PUPPETEER_EXECUTABLE_PATH in CI. Build and browser tests share
`scripts/browser.js`; neither uses `/usr/bin/google-chrome` or CHROME_BIN.
Browser download network access is required. Do not deploy the browser cache
as site output: only `build/` is published.

The Linux runner must provide Chrome's native shared libraries. On a minimal
Debian/Ubuntu runner, provision those during runner setup (with appropriate
privileges), for example `npx puppeteer browsers install chrome --install-deps`.
Ordinary Vercel builds run the browser at build time, not in a serverless function.
A Linux local clean build does not certify the remote Vercel image or its
network policy; a deployment should fail rather than silently skip prerendering.

Postbuild renders each sitemap URL and validates every HTML artifact. The
browser regression suite checks every sitemap route, parsed JSON-LD with no
/blog exception, unique metadata, runtime pageerrors, readable snapshots when
app scripts are blocked, and the mobile WhatsApp link. Static DOM snapshots
are marked and replaced only when the application entrypoint is ready;
they are not React SSR hydration markup.
