# Laporan Audit SEO — indianjayalas.com

**Tanggal:** 19 Juni 2026  
**Skor Kesehatan:** 4/10  
**Status:** Masalah Kritis Ditemukan

---

## Executive Summary

Website bengkel las lokal ini sudah memiliki banyak best practice SEO (schema, meta tags, keyword targeting, performance optimization), tapi **semuanya tidak berguna** selama konten tidak bisa dirender oleh Google. Site adalah React SPA (client-side rendered) tanpa prerendering — artinya Googlebot hanya melihat noscript fallback.

---

## Daftar Issue & Cara Fix

### 🚨 CRITICAL — Harus Diperbaiki Segera

---

#### 1. SPA Tanpa Prerendering — Google Tidak Bisa Lihat Konten

**Problem:** Semua halaman hanya menampilkan ini ke Google:
```
<h1>Bengkel Las Indian Jaya</h1>
<p>Anda perlu mengaktifkan JavaScript untuk menjalankan aplikasi ini.</p>
```

Title, meta description, schema JSON-LD, heading, konten — semuanya invisible.

**Fix — Pasang `react-snap`:**

```bash
npm install react-snap --save-dev
```

Update `package.json`:
```json
{
  "scripts": {
    "postbuild": "react-snap && node scripts/generate-sitemap.js && node scripts/inject-preloads.js"
  },
  "reactSnap": {
    "source": "build",
    "inlineCss": true,
    "puppeteerArgs": ["--no-sandbox"],
    "include": [
      "/",
      "/las-kanopi",
      "/las-pagar",
      "/las-tralis",
      "/las-stainless",
      "/las-panggilan",
      "/blog",
      "/blog/harga-jasa-las-terbaru-2026"
    ]
  }
}
```

Update `src/index.js` — ganti `ReactDOM.render` / `createRoot` dengan `hydrate`:
```js
import { hydrateRoot, createRoot } from "react-dom/client";

const container = document.getElementById("root");
if (container.hasChildNodes()) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
```

**Alternatif (lebih cepat tapi biaya bulanan):** Gunakan prerender.io — tambahkan middleware di Vercel.

---

#### 2. Google Search Console Belum Diverifikasi

**Problem:** Meta tag verifikasi dikomentari di `public/index.html`.

**Fix — `public/index.html`:**
```html
<!-- Uncomment dan isi kode verifikasi dari GSC -->
<meta name="google-site-verification" content="KODE_VERIFIKASI_KAMU" />
```

Langkah:
1. Buka https://search.google.com/search-console
2. Tambahkan property `https://indianjayalas.com`
3. Pilih metode "HTML tag"
4. Copy kode, paste di index.html
5. Deploy, lalu klik Verify

---

### 🔴 HIGH IMPACT

---

#### 3. Sitemap Tidak Lengkap

**Problem:** `/blog` dan `/blog/harga-jasa-las-terbaru-2026` tidak ada di sitemap.

**Fix — `public/sitemap.xml` — tambahkan:**
```xml
    <url>
        <loc>https://indianjayalas.com/blog</loc>
        <lastmod>2026-06-19</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://indianjayalas.com/blog/harga-jasa-las-terbaru-2026</loc>
        <lastmod>2026-06-19</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
```

Juga update `scripts/generate-sitemap.js` agar otomatis include blog pages.

---

#### 4. WhatsApp Link Format Salah

**Problem:** `https://wa.me/081212154019` — format wa.me butuh kode negara tanpa 0.

**Fix — Cari dan replace di seluruh project:**

| File | Dari | Ke |
|------|------|----|
| `src/routes.js` | `https://wa.me/081212154019` | `https://wa.me/6281212154019` |
| Semua halaman Services | `https://wa.me/081212154019` | `https://wa.me/6281212154019` |
| `src/footer.routes.js` | `https://wa.me/081212154019` | `https://wa.me/6281212154019` |
| `src/footer.routes.js` | `https://wa.me/081380004166` | `https://wa.me/6281380004166` |

---

#### 5. OG Image & Logo Tidak Exist

**Problem:** Schema dan OG tags mereferensikan file yang tidak ada:
- `https://indianjayalas.com/og-image.jpg` ❌
- `https://indianjayalas.com/logo.jpg` ❌
- `https://indianjayalas.com/kanopi-preview.jpg` ❌

**Fix:**
1. Buat gambar `og-image.jpg` (1200x630px) — foto workshop/hasil kerja dengan text overlay nama bisnis
2. Buat `logo.jpg` — logo bisnis
3. Taruh di folder `public/`
4. Deploy

---

### 🟡 MEDIUM IMPACT — Quick Wins

---

#### 6. Multiple H1 di Homepage

**Problem:** Ada 2 element `variant="h1"` di `src/pages/Presentation/index.js` (line 297 dan 532).

**Fix — `src/pages/Presentation/index.js` line 532:**
```jsx
// DARI:
variant="h1"

// KE:
variant="h2"
```

Hanya hero section yang boleh H1.

---

#### 7. Title Tags Terlalu Panjang (Terpotong di Google)

**Fix — Update Helmet di masing-masing halaman:**

| Halaman | Sekarang | Rekomendasi (max 60 char) |
|---------|----------|---------------------------|
| Homepage | Bengkel Las Indian Jaya - Jasa Las Kanopi, Pagar, Tralis Depok & Tangerang Selatan | `Bengkel Las Indian Jaya \| Kanopi, Pagar, Tralis Depok` |
| Las Kanopi | Jasa Las Kanopi Depok & Tangerang Selatan - Harga Terjangkau \| Indian Jaya Las | `Jasa Las Kanopi Depok & Tangsel - Indian Jaya Las` |
| Blog Harga | Harga Jasa Las Terbaru 2026 - Kanopi, Pagar, Tralis, Stainless \| Indian Jaya Las | `Harga Jasa Las 2026 Update - Indian Jaya Las` |

---

#### 8. Internal Linking Lemah

**Problem:** Halaman service tidak saling link. Homepage hanya scroll ke section, bukan link ke dedicated pages.

**Fix — Tambahkan di setiap halaman service (`LasKanopi.js`, `LasPagar.js`, dll):**

```jsx
import { Link } from "react-router-dom";

// Tambahkan section "Layanan Lainnya" sebelum footer:
<MKBox py={4}>
  <MKTypography variant="h3">Layanan Lainnya</MKTypography>
  <Link to="/las-pagar">Jasa Las Pagar</Link>
  <Link to="/las-tralis">Jasa Las Tralis</Link>
  <Link to="/las-stainless">Jasa Las Stainless</Link>
  <Link to="/las-panggilan">Jasa Las Panggilan</Link>
</MKBox>
```

**Di homepage** — ubah service cards dari scroll-only ke link halaman:
```jsx
import { Link } from "react-router-dom";

// Wrap service card dengan Link:
<MKBox component={Link} to="/las-kanopi">
  {/* card content */}
</MKBox>
```

---

#### 9. Social Media Links Kosong di Footer

**Problem:** `src/footer.routes.js` — icons Facebook, Twitter, YouTube ada tapi link dikomentari.

**Fix — Pilih salah satu:**

**Opsi A** — Isi dengan link aktual:
```js
socials: [
  {
    icon: <FacebookIcon />,
    link: "https://www.facebook.com/indianjayalas",
  },
  // ...
],
```

**Opsi B** — Hapus socials jika belum punya akun:
```js
socials: [],
```

---

#### 10. Tambahkan Breadcrumb + Schema

**Fix — Buat component `Breadcrumb.js`:**

```jsx
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Breadcrumb({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <nav aria-label="Breadcrumb">
        {items.map((item, i) => (
          <span key={i}>
            {i < items.length - 1 ? (
              <Link to={item.path}>{item.name}</Link>
            ) : (
              <span>{item.name}</span>
            )}
            {i < items.length - 1 && " › "}
          </span>
        ))}
      </nav>
    </>
  );
}

export default Breadcrumb;
```

Pakai di halaman service:
```jsx
<Breadcrumb items={[
  { name: "Beranda", path: "/", url: "https://indianjayalas.com/" },
  { name: "Las Kanopi", path: "/las-kanopi", url: "https://indianjayalas.com/las-kanopi" },
]} />
```

---

### 🟢 LONG-TERM — Rencana Jangka Panjang

---

#### 11. Buat Lebih Banyak Blog Content

Target keywords long-tail:
- "harga kanopi per meter 2026 depok"
- "tips memilih pagar minimalis"
- "perbedaan baja ringan vs hollow"
- "biaya las panggilan per hari"
- "kanopi alderon vs spandek"

Buat minimal 1 artikel/bulan.

---

#### 12. Daftarkan Google Business Profile

1. Buka https://business.google.com
2. Daftarkan "Indian Jaya Las"
3. Isi alamat, jam buka, foto workshop
4. Minta review dari pelanggan
5. Link GMB ke website

---

#### 13. Buat Halaman Area Layanan

Dedicated pages untuk masing-masing area:
- `/jasa-las-depok`
- `/jasa-las-pamulang`
- `/jasa-las-bsd`
- `/jasa-las-ciputat`

Setiap halaman targetkan keyword lokal spesifik.

---

#### 14. AggregateRating — Pastikan Akurat

**Problem:** Schema mencantumkan `reviewCount: "2000"` dan `ratingValue: "4.9"`. Jika ini tidak berdasarkan review nyata, Google bisa memberikan manual action (penalty).

**Fix:** Sesuaikan angka dengan review aktual di Google Business Profile atau platform review lain.

---

## Checklist Implementasi

Urutkan pengerjaan sesuai prioritas:

- [x] 🚨 Install react-snap & setup prerendering
- [ ] 🚨 Verifikasi Google Search Console (butuh akses GSC)
- [x] 🔴 Update sitemap (tambah blog + location pages)
- [x] 🔴 Fix format WhatsApp link (tambah 62)
- [ ] 🔴 Buat & upload og-image.jpg dan logo.jpg (butuh file gambar)
- [x] 🟡 Fix multiple H1 (line 532 → h2)
- [x] 🟡 Trim title tags ke max 60 karakter
- [x] 🟡 Tambah internal links antar halaman service
- [x] 🟡 Fix/hapus social media links kosong
- [x] 🟡 Tambah breadcrumb component + schema
- [x] 🟢 Buat halaman area layanan (programmatic SEO — /jasa-las-depok, /jasa-las-pamulang, /jasa-las-bsd, /jasa-las-ciputat)
- [ ] 🟢 Buat blog content baru (1x/bulan)
- [ ] 🟢 Daftar Google Business Profile
- [ ] 🟢 Validasi AggregateRating dengan data nyata

---

## Yang Sudah Bagus ✅

- Performance optimization (code splitting, lazy loading, gzip, WebP)
- Security headers (HSTS, X-Frame-Options, etc.)
- Schema markup (LocalBusiness, Service, BlogPosting)
- Meta descriptions unik per halaman
- Keyword targeting per halaman
- Canonical tags per halaman (via Helmet)
- robots.txt proper
- Image lazy loading
- Font optimization (preload, font-display: swap)
- Mobile responsive

---

*Laporan ini dibuat berdasarkan source code audit. Untuk validasi schema markup secara live, gunakan [Google Rich Results Test](https://search.google.com/test/rich-results) setelah prerendering diimplementasikan.*
