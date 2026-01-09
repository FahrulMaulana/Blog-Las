/* eslint-disable prettier/prettier */
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import bgImage from "assets/images/bg-about-us.jpg";

function HargaJasaLasTerbaru2026() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/081212154019?text=Halo, saya ingin konsultasi tentang harga jasa las", "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Harga Jasa Las Terbaru 2026 - Kanopi, Pagar, Tralis, Stainless | Indian Jaya Las</title>
        <meta name="description" content="Daftar lengkap harga jasa las terbaru 2026 untuk kanopi, pagar, tralis, dan stainless steel. Update harga material dan jasa pemasangan di Depok & Tangerang Selatan." />
        <meta name="keywords" content="harga jasa las 2026, harga kanopi per meter, harga pagar besi, harga tralis, biaya las stainless" />
        <link rel="canonical" href="https://indiajaya.tech/blog/harga-jasa-las-terbaru-2026" />
        
        <meta property="og:title" content="Harga Jasa Las Terbaru 2026 - Update Lengkap" />
        <meta property="og:description" content="Daftar lengkap harga jasa las terbaru tahun 2026" />
        <meta property="og:url" content="https://indiajaya.tech/blog/harga-jasa-las-terbaru-2026" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Harga Jasa Las Terbaru 2026 - Update Lengkap Semua Layanan",
            "author": {
              "@type": "Organization",
              "name": "Indian Jaya Las"
            },
            "datePublished": "2026-01-09",
            "dateModified": "2026-01-09",
            "publisher": {
              "@type": "Organization",
              "name": "Indian Jaya Las",
              "logo": {
                "@type": "ImageObject",
                "url": "https://indiajaya.tech/logo.jpg"
              }
            }
          })}
        </script>
      </Helmet>

      <DefaultNavbar
        brand="Indian Jaya Las"
        routes={[
          { name: "Beranda", route: "/" },
          { name: "Blog", route: "/blog" },
        ]}
        action={{
          type: "external",
          route: "https://wa.me/081212154019",
          label: "Hubungi Kami",
          color: "info",
        }}
        sticky
      />

      <MKBox minHeight="40vh" width="100%" sx={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center", display: "grid", placeItems: "center" }}>
        <Container>
          <Grid container item xs={12} lg={8} justifyContent="center" mx="auto">
            <MKTypography variant="h1" color="white" textAlign="center" sx={({ breakpoints, typography: { size } }) => ({ [breakpoints.down("md")]: { fontSize: size["3xl"] } })}>
              Harga Jasa Las Terbaru 2026
            </MKTypography>
            <MKTypography variant="body1" color="white" textAlign="center" px={{ xs: 6, lg: 12 }} mt={2}>
              Update Lengkap Harga Kanopi, Pagar, Tralis, dan Stainless Steel
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>

      <Card sx={{ p: 2, mx: { xs: 2, lg: 3 }, mt: -8, mb: 4 }}>
        <Container>
          <Grid container spacing={3} sx={{ mt: 6 }}>
            <Grid item xs={12} lg={8}>
              <MKTypography variant="body2" color="text" mb={2}>
                <em>Dipublish: 9 Januari 2026 | Kategori: Harga & Tips</em>
              </MKTypography>

              <MKTypography variant="body1" color="text" mb={3}>
                Merencanakan proyek las untuk rumah Anda? Mengetahui harga jasa las terbaru sangat penting untuk mempersiapkan budget yang tepat. Artikel ini memberikan informasi lengkap harga jasa las tahun 2026 untuk berbagai jenis layanan, mulai dari kanopi, pagar, tralis, hingga stainless steel.
              </MKTypography>

              <MKTypography variant="h3" mb={2}>Harga Las Kanopi Per Meter 2026</MKTypography>
              
              <MKTypography variant="body1" color="text" mb={2}>
                Kanopi adalah salah satu produk las paling populer untuk melindungi kendaraan dan teras rumah. Berikut update harga terbaru:
              </MKTypography>

              <MKBox component="table" width="100%" sx={{ border: "1px solid #ddd", borderCollapse: "collapse", "& td, & th": { border: "1px solid #ddd", padding: "12px" }, "& th": { backgroundColor: "#f8f9fa" } }} mb={3}>
                <thead>
                  <tr>
                    <th><MKTypography variant="body2" fontWeight="bold">Jenis Kanopi</MKTypography></th>
                    <th><MKTypography variant="body2" fontWeight="bold">Harga Per M²</MKTypography></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><MKTypography variant="body2">Kanopi Baja Ringan + Alderon</MKTypography></td>
                    <td><MKTypography variant="body2">Rp 350.000 - Rp 450.000</MKTypography></td>
                  </tr>
                  <tr>
                    <td><MKTypography variant="body2">Kanopi Hollow + Spandek</MKTypography></td>
                    <td><MKTypography variant="body2">Rp 280.000 - Rp 380.000</MKTypography></td>
                  </tr>
                  <tr>
                    <td><MKTypography variant="body2">Kanopi Polycarbonate</MKTypography></td>
                    <td><MKTypography variant="body2">Rp 450.000 - Rp 600.000</MKTypography></td>
                  </tr>
                  <tr>
                    <td><MKTypography variant="body2">Kanopi Baja Ringan + Galvalum</MKTypography></td>
                    <td><MKTypography variant="body2">Rp 300.000 - Rp 400.000</MKTypography></td>
                  </tr>
                </tbody>
              </MKBox>

              <MKTypography variant="h3" mb={2}>Harga Las Pagar Per Meter 2026</MKTypography>
              
              <MKBox component="table" width="100%" sx={{ border: "1px solid #ddd", borderCollapse: "collapse", "& td, & th": { border: "1px solid #ddd", padding: "12px" }, "& th": { backgroundColor: "#f8f9fa" } }} mb={3}>
                <thead>
                  <tr>
                    <th><MKTypography variant="body2" fontWeight="bold">Jenis Pagar</MKTypography></th>
                    <th><MKTypography variant="body2" fontWeight="bold">Harga Per Meter</MKTypography></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><MKTypography variant="body2">Pagar Hollow Minimalis</MKTypography></td>
                    <td><MKTypography variant="body2">Rp 250.000 - Rp 350.000</MKTypography></td>
                  </tr>
                  <tr>
                    <td><MKTypography variant="body2">Pagar Besi Tempa</MKTypography></td>
                    <td><MKTypography variant="body2">Rp 400.000 - Rp 600.000</MKTypography></td>
                  </tr>
                  <tr>
                    <td><MKTypography variant="body2">Pagar Kombinasi</MKTypography></td>
                    <td><MKTypography variant="body2">Rp 350.000 - Rp 500.000</MKTypography></td>
                  </tr>
                </tbody>
              </MKBox>

              <MKTypography variant="h3" mb={2}>Faktor yang Mempengaruhi Harga</MKTypography>
              
              <MKBox component="ol" sx={{ pl: 3 }} mb={3}>
                <li><MKTypography variant="body1" mb={1}><strong>Jenis Material</strong> - Material premium seperti stainless atau polycarbonate lebih mahal</MKTypography></li>
                <li><MKTypography variant="body1" mb={1}><strong>Ukuran & Kompleksitas</strong> - Desain rumit dan ukuran besar memerlukan biaya lebih</MKTypography></li>
                <li><MKTypography variant="body1" mb={1}><strong>Lokasi Pemasangan</strong> - Area yang sulit dijangkau bisa menambah biaya</MKTypography></li>
                <li><MKTypography variant="body1" mb={1}><strong>Finishing</strong> - Cat anti karat dan finishing khusus menambah harga</MKTypography></li>
              </MKBox>

              <MKTypography variant="h3" mb={2}>Tips Menghemat Budget Las</MKTypography>
              
              <MKBox component="ul" sx={{ pl: 3 }} mb={3}>
                <li><MKTypography variant="body1" mb={1}>Pilih material sesuai kebutuhan dan budget</MKTypography></li>
                <li><MKTypography variant="body1" mb={1}>Bandingkan harga dari beberapa bengkel las</MKTypography></li>
                <li><MKTypography variant="body1" mb={1}>Manfaatkan promo free survey dan pemasangan</MKTypography></li>
                <li><MKTypography variant="body1" mb={1}>Pesan dalam jumlah banyak untuk harga lebih murah</MKTypography></li>
              </MKBox>

              <MKBox bgColor="info" borderRadius="lg" p={3} mt={4}>
                <MKTypography variant="h5" color="white" mb={2}>
                  Konsultasi Gratis!
                </MKTypography>
                <MKTypography variant="body2" color="white" mb={2}>
                  Dapatkan estimasi harga akurat untuk proyek las Anda. Hubungi kami sekarang!
                </MKTypography>
                <MKButton color="success" onClick={handleWhatsApp}>
                  Chat WhatsApp
                </MKButton>
              </MKBox>

              <MKBox mt={4} p={3} sx={{ backgroundColor: "#f8f9fa", borderLeft: "4px solid #1976d2" }}>
                <MKTypography variant="body2" color="text">
                  <strong>Catatan:</strong> Harga dapat berubah sewaktu-waktu tergantung harga material di pasaran. Untuk harga pasti, silakan hubungi kami untuk survey dan penawaran langsung.
                </MKTypography>
              </MKBox>
            </Grid>

            <Grid item xs={12} lg={4}>
              <MKBox bgColor="white" borderRadius="lg" p={3} sx={{ border: "2px solid #e0e0e0", position: "sticky", top: 100 }}>
                <MKTypography variant="h6" mb={2}>Artikel Terkait</MKTypography>
                <MKBox component={Link} to="/blog/harga-kanopi-per-meter-tangerang-selatan" sx={{ textDecoration: "none" }}>
                  <MKTypography variant="body2" color="info" mb={2}>
                    → Harga Kanopi Per Meter di Tangerang Selatan
                  </MKTypography>
                </MKBox>
                <MKBox component={Link} to="/blog/tips-memilih-tukang-las-profesional" sx={{ textDecoration: "none" }}>
                  <MKTypography variant="body2" color="info" mb={2}>
                    → Tips Memilih Tukang Las Profesional
                  </MKTypography>
                </MKBox>
                <MKBox component={Link} to="/las-kanopi" sx={{ textDecoration: "none" }}>
                  <MKTypography variant="body2" color="info">
                    → Lihat Layanan Las Kanopi Kami
                  </MKTypography>
                </MKBox>
              </MKBox>
            </Grid>
          </Grid>
        </Container>
      </Card>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default HargaJasaLasTerbaru2026;
