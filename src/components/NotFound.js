import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// HTTP requests use public/404.html; this handles navigation inside the SPA.
export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Halaman Tidak Ditemukan | Indian Jaya Las</title>
        <meta name="robots" content="noindex, follow" />
        <meta
          name="description"
          content="Halaman yang Anda cari tidak tersedia. Temukan layanan las kanopi, pagar, dan informasi Indian Jaya Las melalui tautan berikut."
        />
      </Helmet>
      <main
        id="main-content"
        style={{ maxWidth: "720px", margin: "0 auto", padding: "80px 24px", minHeight: "100vh" }}
      >
        <p>Indian Jaya Las · 404</p>
        <h1>Halaman Tidak Ditemukan</h1>
        <p>
          Alamat yang Anda buka tidak tersedia atau mungkin sudah dipindahkan. Periksa kembali
          alamatnya, atau gunakan tautan berikut untuk menemukan layanan kami.
        </p>
        <nav aria-label="Pilihan halaman">
          <ul>
            <li>
              <Link to="/">Kembali ke Beranda</Link>
            </li>
            <li>
              <Link to="/las-kanopi">Las Kanopi</Link>
            </li>
            <li>
              <Link to="/las-pagar">Las Pagar</Link>
            </li>
            <li>
              <Link to="/blog">Blog dan Informasi Jasa Las</Link>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
}
