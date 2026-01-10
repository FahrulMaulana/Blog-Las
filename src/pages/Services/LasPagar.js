/* eslint-disable prettier/prettier */
import React from "react";
import { Helmet } from "react-helmet-async";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";

// Images
import pagarImage from "assets/images/pagar/pagar1.jpg";

function LasPagar() {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/081212154019?text=Halo, saya ingin konsultasi tentang jasa las pagar",
      "_blank"
    );
  };

  return (
    <>
      <Helmet>
        <title>Jasa Las Pagar Besi Hollow & Minimalis Depok | Indian Jaya Las</title>
        <meta
          name="description"
          content="Jasa las pagar besi hollow minimalis di Depok, Pamulang, BSD. Pagar rumah, pagar besi, pagar hollow kuat & estetis. Free survey. Telp 081212154019"
        />
        <meta
          name="keywords"
          content="jasa las pagar depok, pagar besi minimalis, pagar hollow, harga pagar per meter, tukang pagar terdekat, pagar rumah minimalis"
        />
        <link rel="canonical" href="https://indiajaya.tech/las-pagar" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://indiajaya.tech/las-pagar" />
        <meta property="og:title" content="Jasa Las Pagar Besi Hollow & Minimalis Depok" />
        <meta
          property="og:description"
          content="Jasa las pagar profesional. Free survey & pemasangan. Area Depok, Pamulang, BSD."
        />
        <meta property="og:image" content="https://indiajaya.tech/pagar-preview.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Jasa Las Pagar",
            provider: {
              "@type": "LocalBusiness",
              name: "Indian Jaya Las",
              address: {
                "@type": "PostalAddress",
                streetAddress: "JL.BAMBU KUNING RT 006 RW 001 PONDOK PETIR",
                addressLocality: "Bojongsari",
                addressRegion: "Depok",
                postalCode: "16516",
                addressCountry: "ID",
              },
              telephone: "081212154019",
            },
            areaServed: ["Depok", "Pamulang", "BSD", "Ciputat", "Serpong"],
            description: "Jasa pembuatan pagar besi hollow minimalis berkualitas tinggi",
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
          route: "https://wa.me/081212154019",
          label: "Hubungi Kami",
          color: "info",
        }}
        sticky
      />

      <MKBox
        minHeight="50vh"
        width="100%"
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${pagarImage})`,
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
              Jasa Las Pagar Besi Hollow Minimalis Depok & Tangerang Selatan
            </MKTypography>
            <MKTypography
              variant="h6"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={2}
            >
              Pagar Berkualitas, Kuat & Estetis - Free Survey & Pemasangan
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
            <Grid item xs={12} lg={8}>
              <MKTypography variant="h2" mb={3}>
                Pagar Rumah Berkualitas untuk Keamanan & Estetika
              </MKTypography>

              <MKTypography variant="body1" color="text" mb={2}>
                Pagar adalah elemen penting untuk keamanan dan privasi rumah Anda.{" "}
                <strong>Indian Jaya Las</strong> menyediakan jasa pembuatan pagar besi hollow dengan
                desain minimalis modern yang tidak hanya kuat, tetapi juga menambah nilai estetika
                rumah Anda.
              </MKTypography>

              <MKTypography variant="h3" mt={4} mb={2}>
                Jenis Pagar yang Kami Tawarkan
              </MKTypography>
              <MKBox component="ul" sx={{ pl: 3 }}>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    <strong>Pagar Besi Hollow</strong> - Kuat, tahan lama, dan ekonomis
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    <strong>Pagar Minimalis Modern</strong> - Desain simpel dan elegan
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    <strong>Pagar Kombinasi Besi & Kayu</strong> - Estetika alami
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    <strong>Pagar Besi Tempa</strong> - Artistik dan eksklusif
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
                      ✓ Free Survey
                    </MKTypography>
                    <MKTypography variant="body2" color="white">
                      Gratis pengukuran dan konsultasi ke lokasi
                    </MKTypography>
                  </MKBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKBox bgColor="info" color="white" borderRadius="md" p={2} mb={2}>
                    <MKTypography variant="h6" color="white" mb={1}>
                      ✓ Free Pemasangan
                    </MKTypography>
                    <MKTypography variant="body2" color="white">
                      Gratis jasa instalasi profesional
                    </MKTypography>
                  </MKBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKBox bgColor="warning" color="white" borderRadius="md" p={2} mb={2}>
                    <MKTypography variant="h6" color="white" mb={1}>
                      ✓ Desain Custom
                    </MKTypography>
                    <MKTypography variant="body2" color="white">
                      Sesuaikan desain dengan keinginan Anda
                    </MKTypography>
                  </MKBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKBox bgColor="error" color="white" borderRadius="md" p={2} mb={2}>
                    <MKTypography variant="h6" color="white" mb={1}>
                      ✓ Garansi Kualitas
                    </MKTypography>
                    <MKTypography variant="body2" color="white">
                      Material berkualitas dengan garansi
                    </MKTypography>
                  </MKBox>
                </Grid>
              </Grid>

              <MKTypography variant="h3" mt={4} mb={2}>
                Estimasi Harga Las Pagar Per Meter (2026)
              </MKTypography>
              <MKBox
                component="table"
                width="100%"
                sx={{
                  border: "1px solid #ddd",
                  borderCollapse: "collapse",
                  "& td, & th": { border: "1px solid #ddd", padding: "12px" },
                  "& th": { backgroundColor: "#f8f9fa", fontWeight: "bold" },
                }}
              >
                <thead>
                  <tr>
                    <th>
                      <MKTypography variant="body2" fontWeight="bold">
                        Jenis Pagar
                      </MKTypography>
                    </th>
                    <th>
                      <MKTypography variant="body2" fontWeight="bold">
                        Harga Per Meter
                      </MKTypography>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <MKTypography variant="body2">Pagar Hollow Minimalis</MKTypography>
                    </td>
                    <td>
                      <MKTypography variant="body2">Rp 250.000 - Rp 350.000</MKTypography>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <MKTypography variant="body2">Pagar Besi Tempa</MKTypography>
                    </td>
                    <td>
                      <MKTypography variant="body2">Rp 400.000 - Rp 600.000</MKTypography>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <MKTypography variant="body2">Pagar Kombinasi (Besi + Kayu)</MKTypography>
                    </td>
                    <td>
                      <MKTypography variant="body2">Rp 350.000 - Rp 500.000</MKTypography>
                    </td>
                  </tr>
                </tbody>
              </MKBox>

              <MKTypography variant="body2" color="text" mt={2} fontStyle="italic">
                *Harga dapat berubah sewaktu-waktu tergantung ketersediaan material. Hubungi kami
                untuk penawaran terbaik.
              </MKTypography>

              <MKTypography variant="h3" mt={4} mb={2}>
                Cara Pesan Pagar Custom
              </MKTypography>
              <MKBox component="ol" sx={{ pl: 3 }}>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    Hubungi kami via WhatsApp di <strong>081212154019</strong>
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    Konsultasikan desain dan budget yang Anda inginkan
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    Tim kami akan survey ke lokasi (GRATIS)
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    Estimasi harga dan waktu pengerjaan akan diberikan
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    Pengerjaan dimulai sesuai kesepakatan
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    Pemasangan selesai, bayar sesuai kesepakatan
                  </MKTypography>
                </li>
              </MKBox>

              <MKTypography variant="h3" mt={4} mb={2}>
                Area Layanan
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
            </Grid>

            <Grid item xs={12} lg={4}>
              <MKBox
                bgColor="info"
                borderRadius="lg"
                p={3}
                mb={3}
                sx={{ position: "sticky", top: 100 }}
              >
                <MKTypography variant="h5" color="white" mb={2} textAlign="center">
                  Konsultasi Gratis
                </MKTypography>
                <MKTypography variant="body2" color="white" mb={2} textAlign="center">
                  Hubungi kami sekarang untuk survey dan penawaran terbaik
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
              Siap Pasang Pagar di Rumah Anda?
            </MKTypography>
            <MKTypography variant="body1" color="white" mb={3}>
              Dapatkan penawaran terbaik dan gratis survey. Konsultasi sekarang!
            </MKTypography>
            <MKButton color="success" size="large" onClick={handleWhatsApp}>
              Hubungi Kami Sekarang
            </MKButton>
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
        sx={{ cursor: "pointer", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "50%" }}
        onClick={handleWhatsApp}
      >
        <img
          src="/wa.png"
          alt="WhatsApp Indian Jaya Las"
          style={{ width: "60px", height: "60px" }}
        />
      </MKBox>
    </>
  );
}

export default LasPagar;
