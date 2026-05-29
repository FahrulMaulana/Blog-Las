# 🚀 CARA DEPLOY WEBSITE INDIAN JAYA LAS

## 📋 Prerequisites

Pastikan Anda sudah menginstall:

- Node.js (v14 atau lebih baru)
- npm atau yarn
- Git (optional)

## 🛠️ Setup & Installation

```bash
# 1. Clone atau masuk ke folder project
cd /home/jebel/Kerja/Blog-Las

# 2. Install dependencies
npm install

# 3. Test di local (development mode)
npm start

# Website akan buka di http://localhost:3000
```

## 🏗️ Build untuk Production

```bash
# Build production-ready files
npm run build

# Proses ini akan:
# - Compile React app
# - Minify JS, CSS, HTML
# - Optimize images
# - Run react-snap untuk prerendering
# - Generate sitemap.xml
# - Output ke folder build/
```

### Build Output:

```
build/
├── index.html (prerendered)
├── las-kanopi/index.html (prerendered)
├── las-pagar/index.html (prerendered)
├── las-tralis/index.html (prerendered)
├── las-stainless/index.html (prerendered)
├── las-panggilan/index.html (prerendered)
├── sitemap.xml
├── robots.txt
├── static/
│   ├── js/
│   ├── css/
│   └── media/
└── ...
```

## 🚀 Deploy Options

### Option 1: Deploy via Genezio (Recommended)

```bash
# Login ke genezio
genezio login

# Deploy
genezio deploy

# Website akan live di: https://indianjayalas.com
```

### Option 2: Manual Upload ke Hosting

1. Build project:

   ```bash
   npm run build
   ```

2. Upload folder `build/` ke server Anda via:

   - FTP/SFTP
   - cPanel File Manager
   - SSH

3. Pastikan web server pointing ke folder `build/`

### Option 3: Deploy ke Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=build
```

### Option 4: Deploy ke Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Login & deploy
vercel --prod
```

## ✅ Post-Deployment Checklist

### 1. Verifikasi Website Live

- [ ] Buka https://indianjayalas.com
- [ ] Test semua halaman:
  - [ ] Homepage (/)
  - [ ] /las-kanopi
  - [ ] /las-pagar
  - [ ] /las-tralis
  - [ ] /las-stainless
  - [ ] /las-panggilan

### 2. Test SEO

- [ ] View Page Source - pastikan HTML terlihat lengkap
- [ ] Check https://indianjayalas.com/sitemap.xml
- [ ] Check https://indianjayalas.com/robots.txt

### 3. Test Performance

- [ ] Google PageSpeed Insights: https://pagespeed.web.dev/
  - Target: Mobile 75+, Desktop 90+
- [ ] Mobile-Friendly Test: https://search.google.com/test/mobile-friendly

### 4. Google Search Console

```
1. Buka: https://search.google.com/search-console
2. Add Property: https://indianjayalas.com
3. Verify ownership (via DNS/HTML file/Meta tag)
4. Submit Sitemap: https://indianjayalas.com/sitemap.xml
5. Request indexing untuk semua halaman
```

### 5. Google Analytics (Optional)

```
1. Create GA4 property
2. Get Measurement ID
3. Add to public/index.html:
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

### 6. Google My Business

```
1. Claim listing di: https://business.google.com
2. Verify business
3. Add photos
4. Complete profile
5. Get reviews
```

## 🔧 Troubleshooting

### Build Error: "Module not found"

```bash
# Clear cache dan rebuild
rm -rf node_modules
npm install
npm run build
```

### Prerendering Gagal

```bash
# Disable react-snap temporarily
# Edit package.json:
"build": "react-scripts build"
# Instead of:
"build": "react-scripts build && react-snap"
```

### Website Tidak Muncul di Google

1. Cek robots.txt tidak memblok
2. Submit sitemap di Search Console
3. Request indexing manual
4. Tunggu 1-2 minggu

### Images Tidak Muncul

- Pastikan path image benar
- Check console browser untuk errors
- Gunakan relative path, bukan absolute

## 📊 Monitor Performance

### Tools:

- **Google Search Console** - Indexing & ranking
- **Google Analytics** - Traffic & behavior
- **PageSpeed Insights** - Performance
- **GTmetrix** - Detailed performance

### Metrics to Track:

- Organic traffic
- Keyword rankings
- Page load time
- Bounce rate
- Conversion rate (WhatsApp clicks)

## 🔄 Update Website

```bash
# 1. Make changes to code
# 2. Test locally
npm start

# 3. Build
npm run build

# 4. Deploy
genezio deploy
# atau upload build/ folder
```

## 📞 Support

Jika ada masalah:

1. Check dokumentasi lengkap: `SEO-OPTIMIZATION-DOCS.md`
2. Check deployment summary: `DEPLOYMENT-SUMMARY.md`
3. Review error logs
4. Contact developer

## 🎯 Expected Timeline

| Week | Action                      | Expected Result        |
| ---- | --------------------------- | ---------------------- |
| 1    | Deploy + Submit to GSC      | Website indexed        |
| 2    | Monitor indexing            | All pages indexed      |
| 3-4  | Start appearing in searches | First organic traffic  |
| 4-8  | Rankings improve            | Traffic increases 2-3x |
| 8-12 | Stable rankings             | Consistent leads       |

## ✨ Maintenance

### Weekly:

- [ ] Monitor Search Console errors
- [ ] Check website uptime
- [ ] Respond to WhatsApp inquiries

### Monthly:

- [ ] Review Analytics data
- [ ] Check keyword rankings
- [ ] Update pricing if needed
- [ ] Add new photos

### Quarterly:

- [ ] Review & update content
- [ ] Check competitor websites
- [ ] Improve based on data

---

**Ready to Deploy?** Run `npm run build` dan deploy! 🚀

**Questions?** Check `SEO-OPTIMIZATION-DOCS.md` untuk detail lengkap.
