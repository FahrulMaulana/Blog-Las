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

// Images
import kanopiImage from "assets/images/kanopi11.jpg";

function LasKanopi() {
  const handleWhatsApp = () => {
    if (typeof window.gtag === "function") window.gtag("event", "whatsapp_click", { event_category: "conversion" });
    window.open(
      "https://wa.me/6281212154019?text=Halo, saya ingin konsultasi tentang jasa las kanopi",
      "_blank"
    );
  };

  return (
    <>
      <Helmet>
        <title>Jasa Las Kanopi Depok & Tangsel - Indian Jaya Las</title>
        <meta
          name="description"
          content="Jasa las kanopi profesional di Depok, Pamulang, BSD, Ciputat. Survei dan pemasangan sesuai kesepakatan. Kanopi baja ringan, hollow, atap alderon. Hubungi 081212154019"
        />
        <meta
          name="keywords"
          content="jasa las kanopi depok, las kanopi pamulang, kanopi baja ringan, harga kanopi per meter, kanopi minimalis, tukang kanopi terdekat"
        />
        <link rel="canonical" href="https://indianjayalas.com/las-kanopi" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://indianjayalas.com/las-kanopi" />
        <meta
          property="og:title"
          content="Jasa Las Kanopi Depok & Tangerang Selatan - Indian Jaya Las"
        />
        <meta
          property="og:description"
          content="Jasa las kanopi profesional. Survei dan pemasangan sesuai kesepakatan. Area Depok, Pamulang, BSD, Ciputat."
        />
        <meta property="og:image" content="https://indianjayalas.com/kanopi-preview.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://indianjayalas.com/las-kanopi" />
        <meta property="twitter:title" content="Jasa Las Kanopi Depok & Tangerang Selatan" />
        <meta
          property="twitter:description"
          content="Jasa las kanopi profesional. Survei dan pemasangan sesuai kesepakatan."
        />
        <meta property="twitter:image" content="https://indianjayalas.com/kanopi-preview.jpg" />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Jasa Las Kanopi",
            provider: {
              "@type": "LocalBusiness",
              name: "Indian Jaya Las",
              address: {
                "@type": "PostalAddress",
                streetAddress: "JL.BAMBU KUNING RT 006 RW 001 PONDOK PETIR",
                addressLocality: "Bojongsari",
                addressRegion: "Depok",

                addressCountry: "ID",
              },
              telephone: "081212154019",
              url: "https://indianjayalas.com",
              priceRange: "$$",
            },
            areaServed: [
              "Depok",
              "Pamulang",
              "BSD",
              "Ciputat",
              "Serpong",
              "Bojongsari",
              "Sawangan",
              "Cinere",
            ],
            description:
              "Jasa pembuatan dan pemasangan kanopi; spesifikasi rangka, atap, dan biaya dikonfirmasi setelah survei.",

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
        { name: "Las Kanopi", path: "/las-kanopi", url: "https://indianjayalas.com/las-kanopi" },
      ]} />

      <MKBox
        minHeight="50vh"
        width="100%"
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${kanopiImage})`,
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
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Jasa Las Kanopi Profesional di Depok & Tangerang Selatan
            </MKTypography>
            <MKTypography
              variant="h6"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={2}
            >
              Kanopi Berkualitas, Survei & Spesifikasi Pemasangan - Melayani Depok, Pamulang, BSD, Ciputat
              & Sekitarnya
            </MKTypography>
            <MKButton color="success" size="large" sx={{ mt: 4 }} onClick={handleWhatsApp}>
              Konsultasi Gratis via WhatsApp
            </MKButton>
          </Grid>
        </Container>
      </MKBox>

      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.9),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Container>
          <Grid container spacing={3} sx={{ mt: 6 }}>
            {/* Main Content */}
            <Grid item xs={12} lg={8}>
              <MKTypography variant="h2" mb={3}>
                Kenapa Memilih Jasa Las Kanopi Indian Jaya?
              </MKTypography>

              <MKTypography variant="body1" color="text" mb={2}>
                <strong>Indian Jaya Las</strong> berlokasi di Pondok Petir, Bojongsari, Depok.
                Untuk merencanakan kanopi, tentukan area yang ingin ditutup, kebutuhan cahaya,
                serta jalur pembuangan air sebelum membandingkan pilihan rangka dan atap.
              </MKTypography>

              <MKTypography variant="body1" color="text" mb={2}>
                Kanopi berfungsi sebagai pelindung kendaraan, teras, dan area outdoor dari panas dan
                hujan. Dengan desain yang tepat, kanopi juga dapat meningkatkan nilai estetika rumah
                Anda.
              </MKTypography>

              <MKTypography variant="h3" mt={4} mb={2}>Sebelum Meminta Penawaran Kanopi</MKTypography>
              <MKTypography variant="body1" color="text" mb={2}>Kirim panjang × lebar area, tinggi pemasangan, foto dinding atau tumpuan, dan pilihan atap. Tanyakan ukuran serta ketebalan rangka, arah kemiringan, talang, sambungan, dan sistem cat. Ukuran awal membantu diskusi; kelayakan tumpuan tetap perlu diperiksa saat survei.</MKTypography>
              <MKTypography variant="body1" color="text" mb={3}>
                Untuk kebutuhan terkait, lihat <Link to="/las-pagar">pagar untuk area depan rumah</Link>.
                Baca <Link to="/blog/harga-jasa-las-terbaru-2026">panduan estimasi biaya dan satuan pengukuran</Link>{" "}
                untuk membandingkan spesifikasi, atau buka <Link to="/blog">blog panduan las</Link>.
                Workshop berada di Pondok Petir, Bojongsari. Bahas lokasi dan akses melalui halaman{" "}
                <Link to="/jasa-las-depok">layanan Depok</Link> atau{" "}
                <Link to="/jasa-las-pamulang">layanan Pamulang</Link>; jadwal survei dikonfirmasi terlebih dahulu.
              </MKTypography>

              <MKTypography variant="h3" mt={4} mb={2}>
                Jenis Material Kanopi yang Kami Sediakan
              </MKTypography>

              <MKBox component="ul" sx={{ pl: 3 }}>
                <li>
                  <MKTypography variant="body1" color="text" mb={1}>
                    <strong>Kanopi Baja Ringan</strong> - Tanyakan ukuran profil, ketebalan,
                    pelapisan, dan jarak tumpuan yang sesuai bentang
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" color="text" mb={1}>
                    <strong>Kanopi Hollow</strong> - Kuat, ekonomis, cocok untuk berbagai desain
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" color="text" mb={1}>
                    <strong>Atap Alderon / Spandek</strong> - Bandingkan ketebalan, kebutuhan
                    cahaya, suara hujan, kemiringan, dan sambungan atap
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" color="text" mb={1}>
                    <strong>Atap Polycarbonate</strong> - Transparan, modern, cocok untuk area
                    semi-outdoor
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" color="text" mb={1}>
                    <strong>Atap Galvalum</strong> - Hemat biaya, tahan lama
                  </MKTypography>
                </li>
              </MKBox>

              <MKTypography variant="h3" mt={4} mb={2}>
                Keunggulan Layanan Kami
              </MKTypography>

              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <MKBox bgColor="success" color="white" borderRadius="md" p={2} mb={2}>
                    <MKTypography variant="h6" color="white" mb={1}>
                      ✓ Rencana Survei
                    </MKTypography>
                    <MKTypography variant="body2" color="white">
                      Sepakati jadwal dan ketentuan pengukuran di lokasi
                    </MKTypography>
                  </MKBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKBox bgColor="info" color="white" borderRadius="md" p={2} mb={2}>
                    <MKTypography variant="h6" color="white" mb={1}>
                      ✓ Lingkup Pemasangan
                    </MKTypography>
                    <MKTypography variant="body2" color="white">
                      Konfirmasikan pekerjaan instalasi dalam penawaran
                    </MKTypography>
                  </MKBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKBox bgColor="warning" color="white" borderRadius="md" p={2} mb={2}>
                    <MKTypography variant="h6" color="white" mb={1}>
                      ✓ Pengiriman
                    </MKTypography>
                    <MKTypography variant="body2" color="white">
                      Konfirmasikan biaya kirim sesuai alamat pemasangan
                    </MKTypography>
                  </MKBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKBox bgColor="error" color="white" borderRadius="md" p={2} mb={2}>
                    <MKTypography variant="h6" color="white" mb={1}>
                      ✓ Pemeriksaan Hasil
                    </MKTypography>
                    <MKTypography variant="body2" color="white">
                      Sepakati pemeriksaan hasil saat serah terima
                    </MKTypography>
                  </MKBox>
                </Grid>
              </Grid>

              <MKTypography variant="h3" mt={4} mb={2}>
                Kisaran Estimasi Las Kanopi per m²
              </MKTypography>

              <MKBox
                component="table"
                width="100%"
                sx={{
                  border: "1px solid #ddd",
                  borderCollapse: "collapse",
                  "& td, & th": {
                    border: "1px solid #ddd",
                    padding: "12px",
                  },
                  "& th": {
                    backgroundColor: "#f8f9fa",
                    fontWeight: "bold",
                  },
                }}
              >
                <thead>
                  <tr>
                    <th>
                      <MKTypography variant="body2" fontWeight="bold">
                        Jenis Kanopi
                      </MKTypography>
                    </th>
                    <th>
                      <MKTypography variant="body2" fontWeight="bold">
                        Estimasi per m²
                      </MKTypography>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <MKTypography variant="body2">Kanopi Baja Ringan + Alderon</MKTypography>
                    </td>
                    <td>
                      <MKTypography variant="body2">Rp 350.000 - Rp 450.000</MKTypography>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <MKTypography variant="body2">Kanopi Hollow + Spandek</MKTypography>
                    </td>
                    <td>
                      <MKTypography variant="body2">Rp 280.000 - Rp 380.000</MKTypography>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <MKTypography variant="body2">Kanopi Polycarbonate</MKTypography>
                    </td>
                    <td>
                      <MKTypography variant="body2">Rp 450.000 - Rp 600.000</MKTypography>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <MKTypography variant="body2">Kanopi Baja Ringan + Galvalum</MKTypography>
                    </td>
                    <td>
                      <MKTypography variant="body2">Rp 300.000 - Rp 400.000</MKTypography>
                    </td>
                  </tr>
                </tbody>
              </MKBox>

              <MKTypography variant="body2" color="text" mt={2} fontStyle="italic">
                *Kisaran ini untuk perkiraan anggaran, bukan penawaran mengikat. Luas dihitung
                dalam m² (panjang × lebar), bukan meter lari. Biaya final bergantung pada ketebalan
                rangka, jenis atap, bentang, talang, finishing, akses, dan hasil survei.
                Konfirmasikan apakah pembongkaran, pengiriman, dan pemasangan termasuk.
              </MKTypography>

              <MKTypography variant="h3" mt={4} mb={2}>
                Area Layanan Las Kanopi
              </MKTypography>

              <MKTypography variant="body1" color="text" mb={2}>
                Kami melayani pembuatan dan pemasangan kanopi di seluruh wilayah:
              </MKTypography>

              <Grid container spacing={2}>
                <Grid item xs={6} md={3}>
                  <MKBox bgColor="grey-100" borderRadius="md" p={1.5} textAlign="center">
                    <MKTypography variant="body2" fontWeight="bold">
                      Depok
                    </MKTypography>
                  </MKBox>
                </Grid>
                <Grid item xs={6} md={3}>
                  <MKBox bgColor="grey-100" borderRadius="md" p={1.5} textAlign="center">
                    <MKTypography variant="body2" fontWeight="bold">
                      Pamulang
                    </MKTypography>
                  </MKBox>
                </Grid>
                <Grid item xs={6} md={3}>
                  <MKBox bgColor="grey-100" borderRadius="md" p={1.5} textAlign="center">
                    <MKTypography variant="body2" fontWeight="bold">
                      BSD
                    </MKTypography>
                  </MKBox>
                </Grid>
                <Grid item xs={6} md={3}>
                  <MKBox bgColor="grey-100" borderRadius="md" p={1.5} textAlign="center">
                    <MKTypography variant="body2" fontWeight="bold">
                      Ciputat
                    </MKTypography>
                  </MKBox>
                </Grid>
                <Grid item xs={6} md={3}>
                  <MKBox bgColor="grey-100" borderRadius="md" p={1.5} textAlign="center">
                    <MKTypography variant="body2" fontWeight="bold">
                      Serpong
                    </MKTypography>
                  </MKBox>
                </Grid>
                <Grid item xs={6} md={3}>
                  <MKBox bgColor="grey-100" borderRadius="md" p={1.5} textAlign="center">
                    <MKTypography variant="body2" fontWeight="bold">
                      Bojongsari
                    </MKTypography>
                  </MKBox>
                </Grid>
                <Grid item xs={6} md={3}>
                  <MKBox bgColor="grey-100" borderRadius="md" p={1.5} textAlign="center">
                    <MKTypography variant="body2" fontWeight="bold">
                      Sawangan
                    </MKTypography>
                  </MKBox>
                </Grid>
                <Grid item xs={6} md={3}>
                  <MKBox bgColor="grey-100" borderRadius="md" p={1.5} textAlign="center">
                    <MKTypography variant="body2" fontWeight="bold">
                      Cinere
                    </MKTypography>
                  </MKBox>
                </Grid>
              </Grid>
            </Grid>

            {/* Sidebar */}
            <Grid item xs={12} lg={4}>
              <MKBox
                bgColor="info"
                borderRadius="lg"
                p={3}
                mb={3}
                sx={{ position: "sticky", top: 100 }}
              >
                <MKTypography variant="h5" component="h4" color="white" mb={2} textAlign="center">
                  Konsultasi Gratis
                </MKTypography>
                <MKTypography variant="body2" color="white" mb={2} textAlign="center">
                  Hubungi kami sekarang untuk survey dan penawaran sesuai spesifikasi
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
                  Jam Operasional
                </MKTypography>
                <MKTypography variant="body2" color="text">
                  Senin - Sabtu: 08.00 - 17.00 WIB
                  <br />
                  Minggu: 08.00 - 14.00 WIB
                </MKTypography>
              </MKBox>
            </Grid>
          </Grid>

          {/* CTA Section */}
          <MKBox bgColor="primary" borderRadius="lg" p={4} mt={6} textAlign="center">
            <MKTypography variant="h4" color="white" mb={2}>
              Siap Pasang Kanopi di Rumah Anda?
            </MKTypography>
            <MKTypography variant="body1" color="white" mb={3}>
              Kirim ukuran dan foto lokasi untuk membahas penawaran serta jadwal survei.
            </MKTypography>
            <MKButton color="success" size="large" onClick={handleWhatsApp}>
              Hubungi Kami Sekarang
            </MKButton>
          </MKBox>

          {/* Layanan Lainnya - Internal Links */}
          <MKBox py={4} mt={4}>
            <MKTypography variant="h3" mb={2}>Layanan Lainnya</MKTypography>
            <Grid container spacing={2}>
              <Grid item xs={6} md={3}><MKTypography component={Link} to="/las-pagar" color="info" variant="body2">Jasa Las Pagar</MKTypography></Grid>
              <Grid item xs={6} md={3}><MKTypography component={Link} to="/las-tralis" color="info" variant="body2">Jasa Las Tralis</MKTypography></Grid>
              <Grid item xs={6} md={3}><MKTypography component={Link} to="/las-stainless" color="info" variant="body2">Jasa Las Stainless</MKTypography></Grid>
              <Grid item xs={6} md={3}><MKTypography component={Link} to="/las-panggilan" color="info" variant="body2">Jasa Las Panggilan</MKTypography></Grid>
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
        sx={{
          cursor: "pointer",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "50%",
        }}
        onClick={handleWhatsApp}
      >
        <img
          src="/wa.png"
          alt="WhatsApp Indian Jaya Las"
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

export default LasKanopi;
