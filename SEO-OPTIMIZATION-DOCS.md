# 📋 DOKUMENTASI OPTIMASI SEO WEBSITE INDIAN JAYA LAS

## 🎯 RINGKASAN PERUBAHAN

Website Indian Jaya Las telah dioptimasi secara menyeluruh untuk SEO, performa, dan struktur. Berikut adalah detail lengkap perubahan yang telah dilakukan.

---

## ✅ 1. ARCHITECTURE FIX - SSR/PRERENDERING

### Yang Dilakukan:

- ✓ Menginstal **react-snap** untuk prerendering
- ✓ Menginstal **react-helmet-async** untuk meta tags management
- ✓ Konfigurasi react-snap di `package.json`
- ✓ HTML statis akan di-generate untuk semua halaman penting

### File yang Dimodifikasi:

- `package.json` - Menambahkan react-snap dan konfigurasi prerendering
- `src/App.js` - Menambahkan HelmetProvider wrapper
- `src/pages/Presentation/index.js` - Menambahkan Helmet dengan meta tags lengkap

### Cara Kerja:

Saat build (`npm run build`), react-snap akan:

1. Membuka setiap halaman dengan headless browser
2. Mengambil HTML yang sudah di-render
3. Menyimpan sebagai file HTML statis
4. Google dapat membaca konten tanpa menjalankan JavaScript

---

## ✅ 2. TECHNICAL SEO FIX

### robots.txt

**Lokasi:** `public/robots.txt`

```
User-agent: *
Allow: /
Sitemap: https://indiajaya.tech/sitemap.xml
```

### sitemap.xml

**Lokasi:** `public/sitemap.xml`

- Berisi semua halaman website (homepage + 5 service pages)
- Update otomatis saat build dengan script `scripts/generate-sitemap.js`

### Meta Tags (Setiap Halaman)

Semua halaman memiliki:

- ✓ Title tag dinamis & SEO-friendly
- ✓ Meta description unik per halaman
- ✓ Meta keywords
- ✓ Canonical URL
- ✓ Open Graph tags (Facebook)
- ✓ Twitter Card tags
- ✓ JSON-LD structured data (LocalBusiness & Service schema)

### Performance Optimizations

- ✓ Preconnect ke Google Fonts
- ✓ DNS prefetch
- ✓ Font display=swap untuk faster rendering
- ✓ Async loading untuk Font Awesome
- ✓ Lazy loading images (native HTML loading="lazy")

---

## ✅ 3. STRUCTURED PAGE SYSTEM

### Halaman Service yang Dibuat:

#### 1. `/las-kanopi`

**File:** `src/pages/Services/LasKanopi.js`
**Konten:**

- H1: "Jasa Las Kanopi Profesional di Depok & Tangerang Selatan"
- Deskripsi lengkap 700+ kata
- Jenis material kanopi (Baja Ringan, Hollow, Alderon, Polycarbonate, Galvalum)
- Keunggulan (Free Survey, Free Pemasangan, Free Ongkir, Garansi)
- Tabel harga per meter
- Area layanan (8 wilayah)
- CTA WhatsApp

#### 2. `/las-pagar`

**File:** `src/pages/Services/LasPagar.js`
**Konten:**

- H1: "Jasa Las Pagar Besi Hollow Minimalis Depok"
- Jenis pagar (Hollow, Minimalis, Kombinasi, Tempa)
- Harga per meter
- Area layanan

#### 3. `/las-tralis`

**File:** `src/pages/Services/LasTralis.js`
**Konten:**

- H1: "Jasa Las Tralis Jendela & Pintu Depok"
- Jenis tralis (Minimalis, Motif, Jendela, Pintu)
- Harga per meter

#### 4. `/las-stainless`

**File:** `src/pages/Services/LasStainless.js`
**Konten:**

- H1: "Jasa Las Stainless Steel Depok & Tangerang Selatan"
- Produk stainless (Pagar, Railing, Kanopi, Pintu, Balkon)
- Keunggulan stainless (Anti karat, Awet, Premium, Minim perawatan)
- Harga per meter

#### 5. `/las-panggilan`

**File:** `src/pages/Services/LasPanggilan.js`
**Konten:**

- H1: "Jasa Las Panggilan Depok 24 Jam - Tukang Las Terdekat"
- Layanan darurat & perbaikan
- Keunggulan (Cepat datang, Peralatan lengkap, Berpengalaman, Harga transparan)
- Estimasi biaya panggilan
- Cara pesan
- 10 area layanan

### Routing

**File:** `src/App.js`

```jsx
<Route path="/las-kanopi" element={<LasKanopi />} />
<Route path="/las-pagar" element={<LasPagar />} />
<Route path="/las-tralis" element={<LasTralis />} />
<Route path="/las-stainless" element={<LasStainless />} />
<Route path="/las-panggilan" element={<LasPanggilan />} />
```

---

## ✅ 4. HOMEPAGE OPTIMIZATION

### File: `src/pages/Presentation/index.js`

**SEO Meta Tags Ditambahkan:**

- Title: "Bengkel Las Indian Jaya - Jasa Las Kanopi, Pagar, Tralis Depok & Tangerang Selatan"
- Meta description 160 karakter
- Keywords targeted
- OG tags & Twitter cards
- JSON-LD LocalBusiness schema lengkap dengan:
  - Nama, alamat, telepon
  - Koordinat geo
  - Jam operasional
  - Area served
  - Catalog layanan
  - Aggregate rating

**Struktur Konten:**

- Hero section dengan H1 keyword-rich
- Benefit section (4 keunggulan)
- Tentang Kami
- Produk/layanan showcase
- Testimoni
- Kontak & CTA
- Floating WhatsApp button

---

## ✅ 5. KEYWORD INTEGRATION

### Primary Keywords (Diintegrasikan di semua halaman):

- bengkel las depok
- jasa las pamulang
- bengkel las panggilan
- las kanopi depok
- las pagar tangerang selatan
- tukang las terdekat

### Secondary Keywords:

- harga las kanopi per meter
- kanopi minimalis
- pagar besi hollow
- tralis jendela
- stainless steel
- las darurat

### Penempatan:

- ✓ Title tags
- ✓ Meta descriptions
- ✓ H1 headings
- ✓ H2/H3 subheadings
- ✓ Body content (natural)
- ✓ Alt text images
- ✓ Internal linking
- ✓ URL structure

---

## ✅ 6. SCHEMA MARKUP (JSON-LD)

### LocalBusiness Schema

**Lokasi:** Homepage

```json
{
  "@type": "LocalBusiness",
  "name": "Indian Jaya Las",
  "address": {...},
  "geo": {...},
  "telephone": "081212154019",
  "openingHours": [...],
  "areaServed": [...],
  "hasOfferCatalog": {...}
}
```

### Service Schema

**Lokasi:** Setiap halaman service

```json
{
  "@type": "Service",
  "name": "Jasa Las [Nama]",
  "provider": {...},
  "areaServed": [...],
  "offers": {...}
}
```

---

## ✅ 7. PERFORMANCE OPTIMIZATION

### Teknik yang Digunakan:

1. **Font Optimization**
   - Preconnect ke Google Fonts
   - font-display: swap
2. **Script Loading**
   - Async loading untuk non-critical scripts
3. **Image Optimization**
   - Native lazy loading (loading="lazy")
   - WebP format untuk modern browsers
4. **Code Splitting**
   - React.lazy() untuk dynamic imports
   - Route-based code splitting
5. **Caching**
   - Service Worker via react-snap
   - Static asset caching

### Target PageSpeed:

- Mobile: 75+
- Desktop: 90+

---

## ✅ 8. MOBILE OPTIMIZATION

### Responsive Design:

- ✓ Mobile-first approach
- ✓ Breakpoints: xs, sm, md, lg, xl
- ✓ Touch-friendly buttons (min 44x44px)
- ✓ Readable font sizes (min 16px)
- ✓ Proper spacing untuk finger tapping

### Mobile UX:

- Floating WhatsApp button (sticky)
- Click-to-call phone numbers
- Simplified navigation
- Fast loading (prerendered)

---

## ✅ 9. INTERNAL LINKING

### Navigation Structure:

```
Homepage
├── Las Kanopi
├── Las Pagar
├── Las Tralis
├── Las Stainless
└── Las Panggilan
```

### Link Types:

- Navbar links (semua halaman)
- Service cards (homepage → service pages)
- CTA buttons (cross-page linking)
- Footer links

---

## ✅ 10. LOCAL SEO

### NAP Consistency:

**Name:** Indian Jaya Las
**Address:** JL.BAMBU KUNING RT 006 RW 001 PONDOK PETIR BOJONGSARI KOTA DEPOK
**Phone:** 081212154019

Konsisten di:

- ✓ Homepage
- ✓ Semua service pages
- ✓ Footer
- ✓ Schema markup
- ✓ Meta tags

### Area Served:

Disebutkan di setiap halaman:

- Depok
- Pamulang
- BSD
- Ciputat
- Serpong
- Bojongsari
- Sawangan
- Cinere
- Lenteng Agung
- Jagakarsa

### Google Maps:

- Koordinat: -6.3906, 106.7525
- Embedded di homepage (bisa ditambahkan)

---

## 📦 FILES YANG DIBUAT/DIMODIFIKASI

### Files Baru:

```
src/pages/Services/LasKanopi.js
src/pages/Services/LasPagar.js
src/pages/Services/LasTralis.js
src/pages/Services/LasStainless.js
src/pages/Services/LasPanggilan.js
scripts/generate-sitemap.js
public/sitemap.xml (updated)
```

### Files Dimodifikasi:

```
src/App.js
src/pages/Presentation/index.js
public/index.html
public/robots.txt
package.json
```

---

## 🚀 CARA DEPLOY

### 1. Install Dependencies (sudah dilakukan):

```bash
npm install
```

### 2. Build untuk Production:

```bash
npm run build
```

Proses ini akan:

- Build React app
- Jalankan react-snap untuk prerendering
- Generate sitemap.xml otomatis
- Minify HTML, CSS, JS
- Output ke folder `build/`

### 3. Deploy ke Server:

Upload folder `build/` ke hosting Anda atau gunakan:

```bash
# Via genezio (sudah ada genezio.yaml)
genezio deploy

# Atau manual upload ke server
```

### 4. Verifikasi:

- Cek https://indiajaya.tech
- Test di Google Search Console
- Submit sitemap
- Test di PageSpeed Insights

---

## 📊 MONITORING & TRACKING

### Google Search Console:

1. Tambahkan property
2. Verifikasi ownership
3. Submit sitemap.xml
4. Monitor impressions & clicks

### Google Analytics:

Tambahkan tracking code di `public/index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_MEASUREMENT_ID");
</script>
```

### Tools untuk Monitor:

- Google Search Console (ranking, impressions)
- Google Analytics (traffic, behavior)
- PageSpeed Insights (performance)
- Mobile-Friendly Test
- Rich Results Test (untuk schema)

---

## 🎯 EXPECTED RESULTS

### Timeline:

- **Week 1-2:** Google mulai index halaman baru
- **Week 2-4:** Muncul di hasil pencarian lokal
- **Week 4-8:** Ranking mulai naik untuk keywords targeted
- **Month 2-3:** Traffic organik meningkat signifikan
- **Month 3-6:** Stabil di halaman 1 untuk keywords lokal

### Target Keywords Ranking:

- "bengkel las depok" → Target: Top 3
- "jasa las kanopi pamulang" → Target: Top 5
- "tukang las terdekat depok" → Target: Top 3
- "las panggilan tangerang selatan" → Target: Top 5
- "harga kanopi per meter depok" → Target: Top 10

---

## 🔧 NEXT STEPS (OPTIONAL IMPROVEMENTS)

### 1. Blog System:

Buat folder `/blog` dengan artikel:

- "Harga Jasa Las Terbaru 2026"
- "Harga Kanopi Per Meter di Tangerang Selatan"
- "Model Kanopi Minimalis Terbaru"
- "Tips Memilih Tukang Las"
- "Perbandingan Pagar Besi vs Hollow"

### 2. Google My Business:

- Klaim listing
- Upload foto produk
- Minta review pelanggan
- Post updates rutin

### 3. Backlinks:

- Listing di direktori lokal
- Kolaborasi dengan arsitek/kontraktor
- Guest posting di blog terkait

### 4. Content Expansion:

- Video tutorial
- Galeri foto lebih banyak
- Case studies
- FAQ section

### 5. Advanced Analytics:

- Heatmap (Hotjar)
- A/B testing
- Conversion tracking

---

## 📞 SUPPORT

Jika ada pertanyaan atau butuh modifikasi lebih lanjut, silakan kontak developer atau dokumentasikan perubahan yang diinginkan.

---

## ✅ CHECKLIST AKHIR

- [x] SSR/Prerendering configured
- [x] Meta tags lengkap di semua halaman
- [x] robots.txt updated
- [x] sitemap.xml generated
- [x] 5 halaman service dibuat
- [x] Schema markup implemented
- [x] Homepage optimized
- [x] Internal linking setup
- [x] Keywords integrated
- [x] Mobile responsive
- [x] Performance optimized
- [x] Floating WhatsApp button
- [x] Area served defined
- [x] NAP consistency
- [ ] Google Search Console verification (manual)
- [ ] Google Analytics setup (manual)
- [ ] Google My Business claim (manual)
- [ ] First deployment & test

---

**Dokumentasi dibuat:** 9 Januari 2026
**Status:** ✅ Ready for Production Deploy
