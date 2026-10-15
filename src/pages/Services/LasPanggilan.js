/* eslint-disable prettier/prettier */
import React from "react";
import { Link } from "react-router-dom";
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
import lasImage from "assets/images/las.jpg";

function LasPanggilan() {
  const handleWhatsApp = () => {
    if (typeof window.gtag === "function") window.gtag("event", "whatsapp_click", { event_category: "conversion" });
    window.open(
      "https://wa.me/6281212154019?text=Halo, saya ingin panggil tukang las ke lokasi",
      "_blank"
    );
  };

  return (
    <>
      <Helmet>
        <title>Jasa Las Panggilan Depok & Pamulang | Indian Jaya Las</title>
        <meta
          name="description"
          content="Jasa las panggilan untuk perbaikan pagar, kanopi, dan tralis di Depok dan Pamulang. Kirim foto kerusakan dan alamat untuk konfirmasi biaya serta jadwal."
        />
        <meta
          name="keywords"
          content="jasa las panggilan depok, tukang las terdekat, jadwal las panggilan, bengkel las panggilan, las keliling depok"
        />
        <link rel="canonical" href="https://indianjayalas.com/las-panggilan" />

        <meta property="og:title" content="Jasa Las Panggilan Depok & Pamulang" />
        <meta
          property="og:description"
          content="Kirim foto kerusakan dan alamat untuk membahas kelayakan perbaikan, biaya, serta jadwal kunjungan."
        />
        <meta property="og:url" content="https://indianjayalas.com/las-panggilan" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Jasa Las Panggilan",
            provider: {
              "@type": "LocalBusiness",
              name: "Indian Jaya Las",
              telephone: "081212154019",
              address: {
                "@type": "PostalAddress",
                streetAddress: "JL.BAMBU KUNING RT 006 RW 001 PONDOK PETIR",
                addressLocality: "Bojongsari",
                addressRegion: "Depok",
                addressCountry: "ID",
              },
            },
            areaServed: ["Depok", "Pamulang", "BSD", "Ciputat", "Serpong"],
            description:
              "Jasa las panggilan ke rumah untuk perbaikan dan pembuatan berbagai produk las",
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: "https://wa.me/6281212154019",
              servicePhone: "081212154019",
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
        { name: "Las Panggilan", path: "/las-panggilan", url: "https://indianjayalas.com/las-panggilan" },
      ]} />

      <MKBox
        minHeight="50vh"
        width="100%"
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${lasImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={8} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              textAlign="center"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: { fontSize: size["3xl"] },
              })}
            >
              Jasa Las Panggilan untuk Perbaikan di Depok
            </MKTypography>
            <MKTypography
              variant="h6"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={2}
            >
              Kelayakan Pekerjaan, Biaya, dan Jadwal Dikonfirmasi Terlebih Dahulu
            </MKTypography>
            <MKButton color="success" size="large" sx={{ mt: 4 }} onClick={handleWhatsApp}>
              Panggil Tukang Las Sekarang
            </MKButton>
          </Grid>
        </Container>
      </MKBox>

      <Card sx={{ p: 2, mx: { xs: 2, lg: 3 }, mt: -8, mb: 4 }}>
        <Container>
          <Grid container spacing={3} sx={{ mt: 6 }}>
            <Grid item xs={12} lg={8}>
              <MKTypography variant="h2" mb={3}>
                Periksa Kebutuhan Perbaikan Sebelum Memesan
              </MKTypography>

              <MKTypography variant="body1" mb={2}>
                <strong>Indian Jaya Las</strong> menyediakan layanan las panggilan untuk berbagai
                kebutuhan perbaikan di lokasi Anda. Kirim foto dekat kerusakan dan foto keseluruhan
                agar kebutuhan material, alat, dan kelayakan pengerjaan di lokasi dapat dibahas.
                Jadwal kedatangan perlu dikonfirmasi, bukan layanan darurat yang selalu tersedia.
              </MKTypography>

              <MKTypography variant="h3" mt={4} mb={2}>Siapkan Lokasi untuk Penilaian Perbaikan</MKTypography>
              <MKTypography variant="body1" color="text" mb={2}>Kirim alamat atau pin lokasi, foto dekat kerusakan, foto keseluruhan, ukuran perkiraan, dan kebutuhan waktu. Jelaskan akses listrik serta kondisi area kerja. Hindari memakai bagian yang longgar atau berisiko roboh; kelayakan tambal atau penggantian material perlu diperiksa sebelum pengelasan.</MKTypography>
              <MKTypography variant="body1" color="text" mb={3}>
                Untuk kebutuhan terkait, lihat <Link to="/las-kanopi">pilihan pembuatan kanopi baru</Link>.
                Workshop berada di Pondok Petir, Bojongsari. Bahas lokasi dan akses melalui halaman{" "}
                <Link to="/jasa-las-depok">layanan Depok</Link> atau{" "}
                <Link to="/jasa-las-pamulang">layanan Pamulang</Link>; jadwal survei dikonfirmasi terlebih dahulu.
              </MKTypography>

              <MKTypography variant="h3" mt={4} mb={2}>
                Layanan Las Panggilan Kami
              </MKTypography>
              <MKBox component="ul" sx={{ pl: 3 }}>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    <strong>Perbaikan Pagar & Tralis</strong> - Las patah, karat, atau rusak
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    <strong>Perbaikan Kanopi</strong> - Bocor, patah, atau modifikasi
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    <strong>Pembuatan Custom</strong> - Rak, meja, tangga, dll
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    <strong>Perbaikan Mendesak</strong> - Tanyakan ketersediaan jadwal sebelum memesan
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    <strong>Modifikasi & Renovasi</strong> - Ubah desain sesuai keinginan
                  </MKTypography>
                </li>
              </MKBox>

              <MKTypography variant="h3" mt={4} mb={2}>
                Keunggulan Las Panggilan Kami
              </MKTypography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <MKBox bgColor="success" color="white" borderRadius="md" p={2} mb={2}>
                    <MKTypography variant="h6" color="white" mb={1}>
                      Jadwal Kunjungan
                    </MKTypography>
                    <MKTypography variant="body2" color="white">
                      Konfirmasikan ketersediaan jadwal sesuai alamat dan pekerjaan
                    </MKTypography>
                  </MKBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKBox bgColor="info" color="white" borderRadius="md" p={2} mb={2}>
                    <MKTypography variant="h6" color="white" mb={1}>
                      Kebutuhan Alat
                    </MKTypography>
                    <MKTypography variant="body2" color="white">
                      Bahas akses listrik dan area kerja sebelum kunjungan
                    </MKTypography>
                  </MKBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKBox bgColor="warning" color="white" borderRadius="md" p={2} mb={2}>
                    <MKTypography variant="h6" color="white" mb={1}>
                      Kondisi Material
                    </MKTypography>
                    <MKTypography variant="body2" color="white">
                      Foto karat dan sambungan membantu menilai kebutuhan penggantian
                    </MKTypography>
                  </MKBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKBox bgColor="error" color="white" borderRadius="md" p={2} mb={2}>
                    <MKTypography variant="h6" color="white" mb={1}>
                      💰 Harga Transparan
                    </MKTypography>
                    <MKTypography variant="body2" color="white">
                      Estimasi biaya jelas sebelum pengerjaan
                    </MKTypography>
                  </MKBox>
                </Grid>
              </Grid>

              <MKTypography variant="h3" mt={4} mb={2}>
                Estimasi Biaya Las Panggilan (2026)
              </MKTypography>
              <MKBox
                component="table"
                width="100%"
                sx={{
                  border: "1px solid #ddd",
                  borderCollapse: "collapse",
                  "& td, & th": { border: "1px solid #ddd", padding: "12px" },
                }}
              >
                <thead>
                  <tr>
                    <th>
                      <MKTypography variant="body2" fontWeight="bold">
                        Jenis Pekerjaan
                      </MKTypography>
                    </th>
                    <th>
                      <MKTypography variant="body2" fontWeight="bold">
                        Estimasi Biaya
                      </MKTypography>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <MKTypography variant="body2">Biaya Panggil (Depok & sekitar)</MKTypography>
                    </td>
                    <td>
                      <MKTypography variant="body2">Rp 50.000 - Rp 100.000</MKTypography>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <MKTypography variant="body2">Perbaikan Kecil (per titik)</MKTypography>
                    </td>
                    <td>
                      <MKTypography variant="body2">Rp 50.000 - Rp 150.000</MKTypography>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <MKTypography variant="body2">Perbaikan Sedang</MKTypography>
                    </td>
                    <td>
                      <MKTypography variant="body2">Rp 150.000 - Rp 300.000</MKTypography>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <MKTypography variant="body2">Pekerjaan Per Jam</MKTypography>
                    </td>
                    <td>
                      <MKTypography variant="body2">Rp 100.000 - Rp 150.000/jam</MKTypography>
                    </td>
                  </tr>
                </tbody>
              </MKBox>

              <MKTypography variant="body2" color="text" mt={2} fontStyle="italic">
                *Kisaran ini bukan penawaran final. Biaya bergantung pada kondisi material, jumlah titik, akses, spesifikasi, dan survei. Konfirmasikan biaya panggil, material pengganti, serta finishing sebelum menyetujui pekerjaan.
              </MKTypography>

              <MKTypography variant="h3" mt={4} mb={2}>
                Area Layanan Las Panggilan
              </MKTypography>
              <Grid container spacing={2}>
                {[
                  "Depok",
                  "Pamulang",
                  "BSD",
                  "Ciputat",
                  "Serpong",
                  "Bojongsari",
                  "Sawangan",
                  "Cinere",
                  "Lenteng Agung",
                  "Jagakarsa",
                ].map((area) => (
                  <Grid item xs={6} md={3} key={area}>
                    <MKBox bgColor="grey-100" borderRadius="md" p={1.5} textAlign="center">
                      <MKTypography variant="body2" fontWeight="bold">
                        {area}
                      </MKTypography>
                    </MKBox>
                  </Grid>
                ))}
              </Grid>

              <MKTypography variant="h3" mt={4} mb={2}>
                Cara Pesan Las Panggilan
              </MKTypography>
              <MKBox component="ol" sx={{ pl: 3 }}>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    Hubungi kami via WhatsApp di <strong>081212154019</strong>
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    Jelaskan kebutuhan dan lokasi Anda
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    Tim kami akan estimasi biaya dan waktu kedatangan
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    Kunjungan dilakukan setelah jadwal dan kebutuhan alat disepakati
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    Pekerjaan selesai, bayar sesuai kesepakatan
                  </MKTypography>
                </li>
              </MKBox>
            </Grid>

            <Grid item xs={12} lg={4}>
              <MKBox
                bgColor="error"
                borderRadius="lg"
                p={3}
                mb={3}
                sx={{ position: "sticky", top: 100 }}
              >
                <MKTypography variant="h5" color="white" mb={2} textAlign="center">
                  Panggil Sekarang!
                </MKTypography>
                <MKTypography variant="body2" color="white" mb={2} textAlign="center">
                  Kirim foto kerusakan dan alamat untuk mengecek jadwal
                </MKTypography>
                <MKButton color="success" fullWidth size="large" onClick={handleWhatsApp}>
                  Chat WhatsApp
                </MKButton>
                <MKBox textAlign="center" mt={2}>
                  <MKTypography variant="h6" color="white">
                    081212154019
                  </MKTypography>
                </MKBox>
              </MKBox>

              <MKBox bgColor="white" borderRadius="lg" p={3} sx={{ border: "2px solid #e0e0e0" }}>
                <MKTypography variant="h6" mb={2}>
                  Konfirmasi Jadwal
                </MKTypography>
                <MKTypography variant="body2" color="text">
                  Ketersediaan kunjungan dan waktu pengerjaan disepakati melalui WhatsApp. Jangan mengandalkan kunjungan langsung tanpa konfirmasi.
                </MKTypography>
              </MKBox>
            </Grid>
          </Grid>

          <MKBox bgColor="primary" borderRadius="lg" p={4} mt={6} textAlign="center">
            <MKTypography variant="h4" color="white" mb={2}>
              Butuh Tukang Las Sekarang?
            </MKTypography>
            <MKTypography variant="body1" color="white" mb={3}>
              Jangan ragu! Hubungi kami dan tukang las profesional siap membantu Anda.
            </MKTypography>
            <MKButton color="success" size="large" onClick={handleWhatsApp}>
              Panggil Tukang Las
            </MKButton>
          </MKBox>

          {/* Layanan Lainnya - Internal Links */}
          <MKBox py={4} mt={4}>
            <MKTypography variant="h3" mb={2}>Layanan Lainnya</MKTypography>
            <Grid container spacing={2}>
              <Grid item xs={6} md={3}><MKTypography component={Link} to="/las-kanopi" color="info" variant="body2">Jasa Las Kanopi</MKTypography></Grid>
              <Grid item xs={6} md={3}><MKTypography component={Link} to="/las-pagar" color="info" variant="body2">Jasa Las Pagar</MKTypography></Grid>
              <Grid item xs={6} md={3}><MKTypography component={Link} to="/las-tralis" color="info" variant="body2">Jasa Las Tralis</MKTypography></Grid>
              <Grid item xs={6} md={3}><MKTypography component={Link} to="/las-stainless" color="info" variant="body2">Jasa Las Stainless</MKTypography></Grid>
            </Grid>
          </MKBox>
        </Container>
      </Card>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>

      <MKBox
        position="fixed"
        bottom="20px"
        right={{ xs: "20px", lg: "40px" }}
        zIndex="1000"
        sx={{ cursor: "pointer", borderRadius: "50%" }}
        onClick={handleWhatsApp}
      >
        <img
          src="/wa.png"
          alt="WhatsApp"
          width="60"
          height="60"
          loading="lazy"
          decoding="async"
          style={{ width: "60px", height: "60px" }}
        />
      </MKBox>
      </MKBox>
    </>
  );
}

export default LasPanggilan;
