const fs = require('fs');
const path = require('path');

const baseUrl = 'https://indiajaya.tech';
const today = new Date().toISOString().split('T')[0];

const pages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/las-kanopi', priority: '0.9', changefreq: 'monthly' },
  { url: '/las-pagar', priority: '0.9', changefreq: 'monthly' },
  { url: '/las-tralis', priority: '0.9', changefreq: 'monthly' },
  { url: '/las-stainless', priority: '0.9', changefreq: 'monthly' },
  { url: '/las-panggilan', priority: '0.9', changefreq: 'monthly' },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${pages.map(page => `    <url>
        <loc>${baseUrl}${page.url}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
    </url>`).join('\n')}
</urlset>`;

const buildPath = path.join(__dirname, '..', 'build', 'sitemap.xml');
const publicPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

// Write to build folder
fs.writeFileSync(buildPath, sitemap);
console.log('✓ Sitemap generated at', buildPath);

// Also update public folder
fs.writeFileSync(publicPath, sitemap);
console.log('✓ Sitemap updated at', publicPath);
