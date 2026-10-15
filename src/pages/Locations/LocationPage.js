/* eslint-disable prettier/prettier */
import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import Breadcrumb from "components/Breadcrumb";
import footerRoutes from "footer.routes";

const locationData = {
  depok: {
    name: "Depok",
    slug: "depok",
    description: "Melayani jasa las profesional di seluruh wilayah Kota Depok termasuk Margonda, Sawangan, Bojongsari, Cinere, Cimanggis, dan sekitarnya.",
    areas: ["Margonda", "Sawangan", "Bojongsari", "Cinere", "Cimanggis", "Beji", "Pancoran Mas", "Limo"],
    highlight: "Workshop kami berada di Pondok Petir, Bojongsari, Depok. Kirim pin lokasi serta foto akses agar kebutuhan survei dan pengiriman dapat dibahas; waktu tempuh tidak dijanjikan.",
  },
  pamulang: {
    name: "Pamulang",
    slug: "pamulang",
    description: "Jasa las untuk kebutuhan rumah untuk area Pamulang dan sekitarnya. Melayani perumahan, ruko, dan proyek komersial di Pamulang 1, Pamulang 2, Pondok Benda.",
    areas: ["Pamulang 1", "Pamulang 2", "Pondok Benda", "Benda Baru", "Kedaung", "Bambu Apus"],
    highlight: "Untuk kebutuhan di Pamulang, layanan dibahas dari workshop Pondok Petir, Bojongsari, bukan cabang di Pamulang. Sertakan lebar jalan masuk, lokasi pemasangan, dan foto area untuk merencanakan kunjungan.",
  },
  bsd: {
    name: "BSD",
    slug: "bsd",
    description: "Melayani kawasan BSD City, Serpong, dan Tangerang Selatan. Spesialis kanopi, pagar, dan tralis untuk rumah modern di cluster BSD.",
    areas: ["BSD City", "Serpong", "Serpong Utara", "Alam Sutera", "Gading Serpong", "Foresta"],
    highlight: "Jika lokasi berada di cluster BSD, informasikan aturan akses pekerja, jam kerja yang diizinkan, dan izin pengiriman sebelum menjadwalkan survei.",
  },
  ciputat: {
    name: "Ciputat",
    slug: "ciputat",
    description: "Layanan jasa las untuk wilayah Ciputat, Ciputat Timur, dan sekitarnya. Dari perbaikan ringan hingga pembuatan baru.",
    areas: ["Ciputat", "Ciputat Timur", "Pisangan", "Sawah Baru", "Jombang", "Serua"],
    highlight: "Kirim alamat lengkap dan foto bagian yang akan dibuat atau diperbaiki di Ciputat; jadwal kunjungan dari workshop Pondok Petir perlu dikonfirmasi.",
  },
  "jakarta-selatan": {
    name: "Jakarta Selatan",
    slug: "jakarta-selatan",
    description: "Bengkel las profesional melayani seluruh Jakarta Selatan: Pasar Minggu, Lebak Bulus, Cilandak, Jagakarsa, Kebayoran, Pondok Indah, Mampang, Tebet, Setiabudi, Pancoran, dan sekitarnya.",
    areas: ["Pasar Minggu", "Lebak Bulus", "Cilandak", "Jagakarsa", "Kebayoran Lama", "Kebayoran Baru", "Pondok Indah", "Mampang Prapatan", "Tebet", "Pancoran"],
    highlight: "Untuk lokasi Jakarta Selatan, bahas akses kendaraan, parkir, dan ketentuan kerja bangunan. Waktu kunjungan bergantung pada alamat serta ketersediaan jadwal.",
  },
  bogor: {
    name: "Bogor",
    slug: "bogor",
    description: "Jasa las di Bogor Kota, Bogor Barat, Bogor Timur, Bogor Utara, Bogor Selatan, Cibinong, dan sekitarnya. Melayani rumah, ruko, dan proyek komersial.",
    areas: ["Bogor Kota", "Bogor Barat", "Bogor Timur", "Bogor Utara", "Bogor Selatan", "Cibinong", "Cileungsi", "Tajur", "Dramaga", "Ciomas"],
    highlight: "Untuk alamat Bogor, sertakan kecamatan dan pin lokasi agar jangkauan kunjungan, biaya pengiriman, serta kebutuhan survei dapat dikonfirmasi.",
  },
  bekasi: {
    name: "Bekasi",
    slug: "bekasi",
    description: "Bengkel las untuk kebutuhan rumah untuk Bekasi Kota, Bekasi Barat, Bekasi Timur, Bekasi Selatan, Bekasi Utara, Pondok Gede, Jatiasih, dan area industri di sekitar Bekasi.",
    areas: ["Bekasi Kota", "Bekasi Barat", "Bekasi Timur", "Bekasi Selatan", "Bekasi Utara", "Pondok Gede", "Jatiasih", "Bantar Gebang", "Rawalumbu", "Jatisampurna"],
    highlight: "Untuk alamat Bekasi, konfirmasikan kelayakan kunjungan dari workshop Pondok Petir sebelum menetapkan jadwal. Cantumkan jenis pekerjaan dan kebutuhan akses lokasi.",
  },
  tangerang: {
    name: "Tangerang",
    slug: "tangerang",
    description: "Layanan jasa las lengkap untuk Tangerang Kota, Tangerang Selatan, Ciledug, Karawaci, Cipondoh, Pinang, dan sekitarnya. Spesialis pagar dan kanopi minimalis.",
    areas: ["Tangerang Kota", "Ciledug", "Karawaci", "Cipondoh", "Pinang", "Batuceper", "Neglasari", "Benda", "Larangan", "Periuk"],
    highlight: "Sebutkan alamat dan kecamatan di Tangerang agar lokasi tidak tertukar dengan Tangerang Selatan; biaya serta jadwal survei perlu disepakati.",
  },
  sawangan: {
    name: "Sawangan",
    slug: "sawangan",
    description: "Jasa las area Sawangan, Pengasinan, Bedahan, Kedaung, Cinangka, Pasir Putih — dekat dengan workshop utama kami di Bojongsari.",
    areas: ["Sawangan Baru", "Sawangan Lama", "Pengasinan", "Bedahan", "Kedaung", "Cinangka", "Pasir Putih"],
    highlight: "Workshop berada di Pondok Petir, Bojongsari. Untuk perbaikan di Sawangan, kirim foto kerusakan dan tanyakan jadwal yang tersedia; kedatangan hari yang sama tidak dijanjikan.",
  },
  parung: {
    name: "Parung",
    slug: "parung",
    description: "Melayani jasa las di Parung, Kemang, Ciseeng, Bojong Gede, dan sekitarnya. Kanopi, pagar, tralis dengan harga terjangkau.",
    areas: ["Parung", "Kemang", "Ciseeng", "Bojong Gede", "Tajur Halang", "Gunung Sindur", "Rumpin"],
    highlight: "Untuk kebutuhan di Parung dan sekitarnya, kirim pin lokasi serta ukuran awal. Biaya mengikuti spesifikasi, akses, dan hasil survei, bukan tarif wilayah yang seragam.",
  },
  cinere: {
    name: "Cinere",
    slug: "cinere",
    description: "Jasa las khusus area Cinere, Limo, Gandul dan Pangkalan Jati. Melayani perumahan dan cluster di kawasan Cinere.",
    areas: ["Cinere", "Limo", "Gandul", "Pangkalan Jati"],
    highlight: "Jika lokasi di Cinere memiliki aturan perumahan, sampaikan izin pekerja dan jam bongkar muat sebelum menjadwalkan pemasangan.",
  },
};

function LocationPage() {
  const { locationSlug = "" } = useParams();
  const location = locationSlug.startsWith("jasa-las-") ? locationSlug.slice(9) : "";
  const data = Object.prototype.hasOwnProperty.call(locationData, location) ? locationData[location] : null;

  if (!data) return <Navigate to="/" />;

  const handleWhatsApp = () => {
    if (typeof window.gtag === "function") window.gtag("event", "whatsapp_click", { event_category: "conversion" });
    window.open(
      `https://wa.me/6281212154019?text=Halo, saya dari ${data.name} ingin konsultasi jasa las`,
      "_blank"
    );
  };

  const title = `Jasa Las ${data.name} - Kanopi, Pagar, Tralis | Indian Jaya`;
  const metaDesc = `Jasa las untuk area ${data.name} dari workshop Pondok Petir, Bojongsari. Bahas kanopi, pagar, tralis, biaya, dan jadwal survei melalui WhatsApp.`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDesc} />
        <meta name="keywords" content={`jasa las ${data.name.toLowerCase()}, bengkel las ${data.name.toLowerCase()}, tukang las ${data.name.toLowerCase()}, las kanopi ${data.name.toLowerCase()}`} />
        <link rel="canonical" href={`https://indianjayalas.com/jasa-las-${data.slug}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content={`https://indianjayalas.com/jasa-las-${data.slug}`} />
        <meta property="og:image" content="https://indianjayalas.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={metaDesc} />
        <meta property="twitter:image" content="https://indianjayalas.com/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Indian Jaya Las",
            description: metaDesc,
            areaServed: {
              "@type": "City",
              name: data.name,
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "JL. Bambu Kuning RT 006 RW 001",
              addressLocality: "Pondok Petir, Bojongsari",
              addressRegion: "Kota Depok",
              addressCountry: "ID",
            },
            telephone: "+6281212154019",
            url: `https://indianjayalas.com/jasa-las-${data.slug}`,
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: `Jasa Las di ${data.name}`,
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Las Kanopi" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Las Pagar" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Las Tralis" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Las Stainless" } },
              ],
            },
          })}
        </script>
      </Helmet>

      <DefaultNavbar
        brand="Indian Jaya Las"
        routes={[
          { name: "Beranda", route: "/" },
          { name: "Las Kanopi", route: "/las-kanopi" },
          { name: "Las Pagar", route: "/las-pagar" },
          { name: "Las Tralis", route: "/las-tralis" },
          { name: "Las Stainless", route: "/las-stainless" },
          { name: "Las Panggilan", route: "/las-panggilan" },
        ]}
        action={{
          type: "external",
          route: "https://wa.me/6281212154019",
          label: "Hubungi Kami",
          color: "info",
        }}
        sticky
      />

      <MKBox component="main" id="main-content">

      <Breadcrumb items={[
        { name: "Beranda", path: "/", url: "https://indianjayalas.com/" },
        { name: `Jasa Las ${data.name}`, path: `/jasa-las-${data.slug}`, url: `https://indianjayalas.com/jasa-las-${data.slug}` },
      ]} />

      {/* Hero */}
      <MKBox
        minHeight="40vh"
        width="100%"
        sx={{
          backgroundColor: "#1A73E8",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12} lg={8} textAlign="center">
              <MKTypography variant="h1" color="white" mb={1} sx={{ fontSize: { xs: "2rem", md: "3rem" } }}>
                Jasa Las Profesional di {data.name}
              </MKTypography>
              <MKTypography variant="h6" color="white" mt={1} mb={3} opacity={0.9}>
                Kanopi, Pagar, Tralis & Stainless — Konfirmasi Spesifikasi dan Jadwal
              </MKTypography>
              <MKButton color="success" size="large" onClick={handleWhatsApp}>
                Konsultasi untuk Area {data.name}
              </MKButton>
            </Grid>
          </Grid>
        </Container>
      </MKBox>

      <Card sx={{ p: { xs: 2, md: 4 }, mx: { xs: 2, lg: 3 }, mt: -4, mb: 4 }}>
        <Container>
          {/* Deskripsi Unik */}
          <MKBox py={4}>
            <MKTypography variant="h2" mb={2}>
              Layanan untuk {data.name} dari Workshop Pondok Petir
            </MKTypography>
            <MKTypography variant="body1" color="text" mb={2}>
              {data.description}
            </MKTypography>
            <MKTypography variant="body1" color="text" fontWeight="bold">
              {data.highlight}
            </MKTypography>
          </MKBox>

          {/* Area Coverage */}
          <MKBox py={3}>
            <MKTypography variant="h3" mb={2}>
              Area Layanan di {data.name}
            </MKTypography>
            <Grid container spacing={1}>
              {data.areas.map((area) => (
                <Grid item xs={6} md={3} key={area}>
                  <MKTypography variant="body2" color="text">✓ {area}</MKTypography>
                </Grid>
              ))}
            </Grid>
          </MKBox>

          {/* Layanan */}
          <MKBox py={3}>
            <MKTypography variant="h3" mb={2}>
              Layanan Kami di {data.name}
            </MKTypography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <MKBox component={Link} to="/las-kanopi" sx={{ textDecoration: "none" }}>
                  <MKTypography variant="h5" color="info">🏠 Las Kanopi</MKTypography>
                  <MKTypography variant="body2" color="text">Kanopi baja ringan, hollow, atap alderon & spandek</MKTypography>
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox component={Link} to="/las-pagar" sx={{ textDecoration: "none" }}>
                  <MKTypography variant="h5" color="info">🚪 Las Pagar</MKTypography>
                  <MKTypography variant="body2" color="text">Pagar minimalis, hollow, besi tempa</MKTypography>
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox component={Link} to="/las-tralis" sx={{ textDecoration: "none" }}>
                  <MKTypography variant="h5" color="info">🔒 Las Tralis</MKTypography>
                  <MKTypography variant="body2" color="text">Tralis jendela & pintu untuk keamanan rumah</MKTypography>
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox component={Link} to="/las-stainless" sx={{ textDecoration: "none" }}>
                  <MKTypography variant="h5" color="info">✨ Las Stainless</MKTypography>
                  <MKTypography variant="body2" color="text">Railing, pagar & kanopi stainless sesuai pilihan grade</MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>

          {/* CTA */}
          <MKBox bgColor="primary" borderRadius="lg" p={4} mt={4} textAlign="center">
            <MKTypography variant="h4" color="white" mb={2}>
              Butuh Jasa Las di {data.name}?
            </MKTypography>
            <MKTypography variant="body1" color="white" mb={3}>
              Kirim ukuran awal, foto area, model yang diinginkan, serta alamat. Konfirmasikan biaya dan jadwal survei sebelum memesan.
            </MKTypography>
            <MKButton color="success" size="large" onClick={handleWhatsApp}>
              WhatsApp Sekarang
            </MKButton>
          </MKBox>

          {/* Area Layanan Lain */}
          <MKBox py={4} mt={4}>
            <MKTypography variant="h3" mb={2}>Area Layanan Lainnya</MKTypography>
            <Grid container spacing={2}>
              {Object.values(locationData)
                .filter((loc) => loc.slug !== data.slug)
                .map((loc) => (
                  <Grid item xs={6} md={3} key={loc.slug}>
                    <MKTypography component={Link} to={`/jasa-las-${loc.slug}`} color="info" variant="body2">
                      Jasa Las {loc.name}
                    </MKTypography>
                  </Grid>
                ))}
            </Grid>
          </MKBox>
        </Container>
      </Card>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>

      {/* Floating WhatsApp */}
      <MKBox
        position="fixed"
        bottom="20px"
        right={{ xs: "20px", lg: "40px" }}
        zIndex="1000"
        sx={{ cursor: "pointer", borderRadius: "50%" }}
        onClick={handleWhatsApp}
      >
        <img src="/wa.png" alt="WhatsApp" width="60" height="60" loading="lazy" decoding="async" style={{ width: "60px", height: "60px" }} />
      </MKBox>
      </MKBox>
    </>
  );
}

export { locationData };
export default LocationPage;
