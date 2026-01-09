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
import bgImage from "assets/images/las.jpg";

function LasTralis() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/081212154019?text=Halo, saya ingin konsultasi tentang jasa las tralis", "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Jasa Las Tralis Jendela & Pintu Depok | Indian Jaya Las</title>
        <meta name="description" content="Jasa las tralis jendela & pintu di Depok, Pamulang, BSD. Tralis minimalis, motif, dan custom. Keamanan maksimal. Free survey. Telp 081212154019" />
        <meta name="keywords" content="jasa las tralis depok, tralis jendela, tralis pintu, tralis minimalis, harga tralis per meter" />
        <link rel="canonical" href="https://indiajaya.tech/las-tralis" />
        
        <meta property="og:title" content="Jasa Las Tralis Jendela & Pintu Depok" />
        <meta property="og:description" content="Jasa las tralis profesional untuk keamanan rumah Anda" />
        <meta property="og:url" content="https://indiajaya.tech/las-tralis" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Jasa Las Tralis",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Indian Jaya Las",
              "telephone": "081212154019"
            }
          })}
        </script>
      </Helmet>

      <DefaultNavbar brand="Indian Jaya Las" routes={[
          { name: "Beranda", route: "/" },
          { name: "Las Kanopi", route: "/las-kanopi" },
          { name: "Las Pagar", route: "/las-pagar" },
          { name: "Las Tralis", route: "/las-tralis" },
          { name: "Las Stainless", route: "/las-stainless" },
          { name: "Las Panggilan", route: "/las-panggilan" },
        ]}
        action={{ type: "external", route: "https://wa.me/081212154019", label: "Hubungi Kami", color: "info" }}
        sticky
      />

      <MKBox minHeight="50vh" width="100%" sx={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center", display: "grid", placeItems: "center" }}>
        <Container>
          <Grid container item xs={12} lg={8} justifyContent="center" mx="auto">
            <MKTypography variant="h1" color="white" textAlign="center" sx={({ breakpoints, typography: { size } }) => ({ [breakpoints.down("md")]: { fontSize: size["3xl"] } })}>
              Jasa Las Tralis Jendela & Pintu Depok
            </MKTypography>
            <MKTypography variant="h6" color="white" textAlign="center" px={{ xs: 6, lg: 12 }} mt={2}>
              Keamanan Maksimal dengan Desain Estetis - Free Survey
            </MKTypography>
            <MKButton color="success" size="large" sx={{ mt: 4 }} onClick={handleWhatsApp}>Konsultasi Gratis</MKButton>
          </Grid>
        </Container>
      </MKBox>

      <Card sx={{ p: 2, mx: { xs: 2, lg: 3 }, mt: -8, mb: 4 }}>
        <Container>
          <Grid container spacing={3} sx={{ mt: 6 }}>
            <Grid item xs={12} lg={8}>
              <MKTypography variant="h2" mb={3}>Tralis Berkualitas untuk Keamanan Rumah</MKTypography>
              <MKTypography variant="body1" mb={2}>
                Tralis atau terali besi adalah pengaman jendela dan pintu yang wajib dimiliki setiap rumah. <strong>Indian Jaya Las</strong> menyediakan berbagai desain tralis, dari yang minimalis hingga motif artistik.
              </MKTypography>

              <MKTypography variant="h3" mt={4} mb={2}>Jenis Tralis</MKTypography>
              <MKBox component="ul" sx={{ pl: 3 }}>
                <li><MKTypography variant="body1" mb={1}><strong>Tralis Minimalis</strong> - Sederhana dan modern</MKTypography></li>
                <li><MKTypography variant="body1" mb={1}><strong>Tralis Motif</strong> - Artistik dan dekoratif</MKTypography></li>
                <li><MKTypography variant="body1" mb={1}><strong>Tralis Jendela</strong> - Standar keamanan tinggi</MKTypography></li>
                <li><MKTypography variant="body1" mb={1}><strong>Tralis Pintu</strong> - Pengaman pintu utama</MKTypography></li>
              </MKBox>

              <MKTypography variant="h3" mt={4} mb={2}>Harga Tralis Per Meter (2026)</MKTypography>
              <MKBox component="table" width="100%" sx={{ border: "1px solid #ddd", borderCollapse: "collapse", "& td, & th": { border: "1px solid #ddd", padding: "12px" } }}>
                <thead>
                  <tr>
                    <th><MKTypography variant="body2" fontWeight="bold">Jenis Tralis</MKTypography></th>
                    <th><MKTypography variant="body2" fontWeight="bold">Harga Per Meter</MKTypography></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><MKTypography variant="body2">Tralis Minimalis</MKTypography></td>
                    <td><MKTypography variant="body2">Rp 180.000 - Rp 250.000</MKTypography></td>
                  </tr>
                  <tr>
                    <td><MKTypography variant="body2">Tralis Motif</MKTypography></td>
                    <td><MKTypography variant="body2">Rp 250.000 - Rp 400.000</MKTypography></td>
                  </tr>
                </tbody>
              </MKBox>
            </Grid>

            <Grid item xs={12} lg={4}>
              <MKBox bgColor="info" borderRadius="lg" p={3} sx={{ position: "sticky", top: 100 }}>
                <MKTypography variant="h5" color="white" mb={2} textAlign="center">Hubungi Kami</MKTypography>
                <MKButton color="success" fullWidth onClick={handleWhatsApp}>Chat WhatsApp</MKButton>
                <MKBox textAlign="center" mt={2}>
                  <MKTypography variant="h6" color="white">081212154019</MKTypography>
                </MKBox>
              </MKBox>
            </Grid>
          </Grid>
        </Container>
      </Card>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>

      <MKBox position="fixed" bottom="20px" right={{ xs: "20px", lg: "40px" }} zIndex="1000" sx={{ cursor: "pointer", borderRadius: "50%" }} onClick={handleWhatsApp}>
        <img src="/wa.png" alt="WhatsApp" style={{ width: "60px", height: "60px" }} />
      </MKBox>
    </>
  );
}

export default LasTralis;
