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
import bgImage from "assets/images/teralis/teralis4.jpg";

function LasTralis() {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/081212154019?text=Halo, saya ingin konsultasi tentang jasa las tralis",
      "_blank"
    );
  };

  return (
    <>
      <Helmet>
        <title>Jasa Las Tralis Jendela & Pintu Depok | Indian Jaya Las</title>
        <meta
          name="description"
          content="Jasa las tralis jendela & pintu di Depok, Pamulang, BSD. Tralis minimalis, motif, dan custom. Keamanan maksimal. Free survey. Telp 081212154019"
        />
        <meta
          name="keywords"
          content="jasa las tralis depok, tralis jendela, tralis pintu, tralis minimalis, harga tralis per meter"
        />
        <link rel="canonical" href="https://indiajaya.tech/las-tralis" />

        <meta property="og:title" content="Jasa Las Tralis Jendela & Pintu Depok" />
        <meta
          property="og:description"
          content="Jasa las tralis profesional untuk keamanan rumah Anda"
        />
        <meta property="og:url" content="https://indiajaya.tech/las-tralis" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Jasa Las Tralis",
            provider: {
              "@type": "LocalBusiness",
              name: "Indian Jaya Las",
              telephone: "081212154019",
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
              Jasa Las Tralis Jendela & Pintu Depok
            </MKTypography>
            <MKTypography
              variant="h6"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={2}
            >
              Keamanan Maksimal dengan Desain Estetis - Free Survey
            </MKTypography>
            <MKBox width="100%" display="flex" justifyContent="center" mt={4}>
              <MKButton color="success" size="large" onClick={handleWhatsApp}>
                Konsultasi Gratis
              </MKButton>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>

      <Card sx={{ p: 2, mx: { xs: 2, lg: 3 }, mt: -8, mb: 4 }}>
        <Container>
          <Grid container spacing={3} sx={{ mt: 6 }}>
            <Grid item xs={12} lg={8}>
              <MKTypography variant="h2" mb={3}>
                Tralis Berkualitas untuk Keamanan Rumah
              </MKTypography>

              <MKTypography variant="body1" mb={2}>
                Tralis atau terali besi adalah pengaman jendela dan pintu yang wajib dimiliki setiap
                rumah. <strong>Indian Jaya Las</strong> menyediakan berbagai desain tralis, dari
                yang minimalis hingga motif artistik untuk melengkapi keamanan dan estetika rumah
                Anda.
              </MKTypography>

              <MKTypography variant="body1" color="text" mb={2}>
                Dengan material berkualitas dan pemasangan profesional, tralis kami menjamin
                keamanan maksimal tanpa mengurangi nilai estetika rumah Anda.
              </MKTypography>

              <MKTypography variant="h3" mt={4} mb={2}>
                Jenis Tralis yang Kami Tawarkan
              </MKTypography>
              <MKBox component="ul" sx={{ pl: 3 }}>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    <strong>Tralis Minimalis</strong> - Sederhana, modern, cocok untuk rumah
                    minimalis
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    <strong>Tralis Motif</strong> - Artistik dan dekoratif dengan berbagai pola
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    <strong>Tralis Jendela</strong> - Standar keamanan tinggi untuk semua jenis
                    jendela
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    <strong>Tralis Pintu</strong> - Pengaman pintu utama dan pintu belakang
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    <strong>Tralis Custom</strong> - Desain sesuai keinginan Anda
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
                      🔒 Keamanan Maksimal
                    </MKTypography>
                    <MKTypography variant="body2" color="white">
                      Material kuat dan pemasangan kokoh
                    </MKTypography>
                  </MKBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKBox bgColor="info" color="white" borderRadius="md" p={2} mb={2}>
                    <MKTypography variant="h6" color="white" mb={1}>
                      🎨 Desain Custom
                    </MKTypography>
                    <MKTypography variant="body2" color="white">
                      Sesuaikan dengan gaya rumah Anda
                    </MKTypography>
                  </MKBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKBox bgColor="warning" color="white" borderRadius="md" p={2} mb={2}>
                    <MKTypography variant="h6" color="white" mb={1}>
                      ⚡ Pemasangan Cepat
                    </MKTypography>
                    <MKTypography variant="body2" color="white">
                      Tim profesional berpengalaman
                    </MKTypography>
                  </MKBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKBox bgColor="error" color="white" borderRadius="md" p={2} mb={2}>
                    <MKTypography variant="h6" color="white" mb={1}>
                      💰 Harga Terjangkau
                    </MKTypography>
                    <MKTypography variant="body2" color="white">
                      Kualitas premium dengan harga kompetitif
                    </MKTypography>
                  </MKBox>
                </Grid>
              </Grid>

              <MKTypography variant="h3" mt={4} mb={2}>
                Estimasi Harga Tralis Per Meter (2026)
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
                        Jenis Tralis
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
                      <MKTypography variant="body2">Tralis Minimalis</MKTypography>
                    </td>
                    <td>
                      <MKTypography variant="body2">Rp 180.000 - Rp 250.000</MKTypography>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <MKTypography variant="body2">Tralis Motif</MKTypography>
                    </td>
                    <td>
                      <MKTypography variant="body2">Rp 250.000 - Rp 400.000</MKTypography>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <MKTypography variant="body2">Tralis Custom Eksklusif</MKTypography>
                    </td>
                    <td>
                      <MKTypography variant="body2">Rp 400.000 - Rp 600.000</MKTypography>
                    </td>
                  </tr>
                </tbody>
              </MKBox>

              <MKTypography variant="body2" color="text" mt={2} fontStyle="italic">
                *Harga dapat berubah sewaktu-waktu tergantung ketersediaan material dan kompleksitas
                desain.
              </MKTypography>

              <MKTypography variant="h3" mt={4} mb={2}>
                Cara Pesan Tralis Custom
              </MKTypography>
              <MKBox component="ol" sx={{ pl: 3 }}>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    Hubungi kami via WhatsApp di <strong>081212154019</strong>
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    Konsultasikan kebutuhan dan desain yang diinginkan
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    Tim kami akan survey ke lokasi (GRATIS)
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    Dapatkan estimasi harga dan waktu pengerjaan
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    Pengerjaan dan pemasangan oleh teknisi ahli
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    Selesai dan siap digunakan
                  </MKTypography>
                </li>
              </MKBox>

              <MKTypography variant="h3" mt={4} mb={2}>
                Area Layanan Tralis
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
                  Hubungi kami untuk survey dan penawaran terbaik
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
              Butuh Tralis untuk Keamanan Rumah?
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
        sx={{ cursor: "pointer", borderRadius: "50%" }}
        onClick={handleWhatsApp}
      >
        <img src="/wa.png" alt="WhatsApp" style={{ width: "60px", height: "60px" }} />
      </MKBox>
    </>
  );
}

export default LasTralis;
