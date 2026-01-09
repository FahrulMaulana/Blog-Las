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
import bgImage from "assets/images/kusen/kusen3.jpg";

function LasStainless() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/081212154019?text=Halo, saya ingin konsultasi tentang jasa las stainless", "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Jasa Las Stainless Steel Depok - Pagar, Railing, Kanopi | Indian Jaya Las</title>
        <meta name="description" content="Jasa las stainless steel di Depok & Tangerang Selatan. Pagar stainless, railing tangga, kanopi stainless. Anti karat, awet. Telp 081212154019" />
        <meta name="keywords" content="jasa las stainless depok, pagar stainless, railing tangga stainless, harga stainless per meter" />
        <link rel="canonical" href="https://indiajaya.tech/las-stainless" />
        
        <meta property="og:title" content="Jasa Las Stainless Steel Depok" />
        <meta property="og:description" content="Jasa las stainless profesional. Anti karat, tahan lama." />
        <meta property="og:url" content="https://indiajaya.tech/las-stainless" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Jasa Las Stainless Steel",
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

      <MKBox minHeight="50vh" width="100%" sx={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Container>
          <Grid container item xs={12} lg={8} justifyContent="center" mx="auto">
            <MKTypography variant="h1" color="white" textAlign="center" sx={({ breakpoints, typography: { size } }) => ({ [breakpoints.down("md")]: { fontSize: size["3xl"] } })}>
              Jasa Las Stainless Steel Depok & Tangerang Selatan
            </MKTypography>
            <MKTypography variant="h6" color="white" textAlign="center" px={{ xs: 6, lg: 12 }} mt={2}>
              Material Premium Anti Karat untuk Hasil Maksimal
            </MKTypography>
            <MKBox width="100%" display="flex" justifyContent="center" mt={4}>
              <MKButton color="success" size="large" onClick={handleWhatsApp}>Konsultasi Gratis</MKButton>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>

      <Card sx={{ p: 2, mx: { xs: 2, lg: 3 }, mt: -8, mb: 4 }}>
        <Container>
          <Grid container spacing={3} sx={{ mt: 6 }}>
            <Grid item xs={12} lg={8}>
              <MKTypography variant="h2" mb={3}>Stainless Steel - Material Premium untuk Rumah Modern</MKTypography>
              <MKTypography variant="body1" mb={2}>
                Stainless steel adalah material premium yang tahan karat, awet puluhan tahun, dan memiliki tampilan mengkilap yang elegan. <strong>Indian Jaya Las</strong> ahli dalam pembuatan berbagai produk stainless steel untuk rumah dan komersial.
              </MKTypography>

              <MKTypography variant="h3" mt={4} mb={2}>Produk Stainless Steel Kami</MKTypography>
              <MKBox component="ul" sx={{ pl: 3 }}>
                <li><MKTypography variant="body1" mb={1}><strong>Pagar Stainless</strong> - Elegan dan tahan lama</MKTypography></li>
                <li><MKTypography variant="body1" mb={1}><strong>Railing Tangga Stainless</strong> - Modern dan aman</MKTypography></li>
                <li><MKTypography variant="body1" mb={1}><strong>Kanopi Rangka Stainless</strong> - Premium quality</MKTypography></li>
                <li><MKTypography variant="body1" mb={1}><strong>Pintu & Jendela Stainless</strong> - Anti karat maksimal</MKTypography></li>
                <li><MKTypography variant="body1" mb={1}><strong>Balkon Stainless</strong> - Estetik dan kuat</MKTypography></li>
              </MKBox>

              <MKTypography variant="h3" mt={4} mb={2}>Keunggulan Stainless Steel</MKTypography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <MKBox bgColor="success" color="white" borderRadius="md" p={2} mb={2}>
                    <MKTypography variant="h6" color="white" mb={1}>✓ Anti Karat</MKTypography>
                    <MKTypography variant="body2" color="white">Tidak berkarat meski terkena air & cuaca ekstrem</MKTypography>
                  </MKBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKBox bgColor="info" color="white" borderRadius="md" p={2} mb={2}>
                    <MKTypography variant="h6" color="white" mb={1}>✓ Awet Puluhan Tahun</MKTypography>
                    <MKTypography variant="body2" color="white">Investasi jangka panjang yang menguntungkan</MKTypography>
                  </MKBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKBox bgColor="warning" color="white" borderRadius="md" p={2} mb={2}>
                    <MKTypography variant="h6" color="white" mb={1}>✓ Tampilan Premium</MKTypography>
                    <MKTypography variant="body2" color="white">Mengkilap dan elegan</MKTypography>
                  </MKBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKBox bgColor="error" color="white" borderRadius="md" p={2} mb={2}>
                    <MKTypography variant="h6" color="white" mb={1}>✓ Minim Perawatan</MKTypography>
                    <MKTypography variant="body2" color="white">Cukup lap bersih saja</MKTypography>
                  </MKBox>
                </Grid>
              </Grid>

              <MKTypography variant="h3" mt={4} mb={2}>Estimasi Harga Stainless Steel Per Meter (2026)</MKTypography>
              <MKBox component="table" width="100%" sx={{ border: "1px solid #ddd", borderCollapse: "collapse", "& td, & th": { border: "1px solid #ddd", padding: "12px" }, "& th": { backgroundColor: "#f8f9fa", fontWeight: "bold" } }}>
                <thead>
                  <tr>
                    <th><MKTypography variant="body2" fontWeight="bold">Produk Stainless</MKTypography></th>
                    <th><MKTypography variant="body2" fontWeight="bold">Harga Per Meter</MKTypography></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><MKTypography variant="body2">Pagar Stainless</MKTypography></td>
                    <td><MKTypography variant="body2">Rp 500.000 - Rp 800.000</MKTypography></td>
                  </tr>
                  <tr>
                    <td><MKTypography variant="body2">Railing Tangga Stainless</MKTypography></td>
                    <td><MKTypography variant="body2">Rp 450.000 - Rp 700.000</MKTypography></td>
                  </tr>
                  <tr>
                    <td><MKTypography variant="body2">Balkon Stainless</MKTypography></td>
                    <td><MKTypography variant="body2">Rp 600.000 - Rp 900.000</MKTypography></td>
                  </tr>
                  <tr>
                    <td><MKTypography variant="body2">Kanopi Rangka Stainless</MKTypography></td>
                    <td><MKTypography variant="body2">Rp 550.000 - Rp 850.000</MKTypography></td>
                  </tr>
                </tbody>
              </MKBox>

              <MKTypography variant="body2" color="text" mt={2} fontStyle="italic">
                *Harga material premium stainless steel dapat berubah sesuai grade dan finishing yang dipilih.
              </MKTypography>

              <MKTypography variant="h3" mt={4} mb={2}>Cara Pesan Produk Stainless Custom</MKTypography>
              <MKBox component="ol" sx={{ pl: 3 }}>
                <li><MKTypography variant="body1" mb={1}>Hubungi kami via WhatsApp di <strong>081212154019</strong></MKTypography></li>
                <li><MKTypography variant="body1" mb={1}>Konsultasikan kebutuhan dan pilihan desain</MKTypography></li>
                <li><MKTypography variant="body1" mb={1}>Tim kami akan survey ke lokasi (GRATIS)</MKTypography></li>
                <li><MKTypography variant="body1" mb={1}>Pilih grade stainless dan finishing yang sesuai</MKTypography></li>
                <li><MKTypography variant="body1" mb={1}>Pengerjaan oleh ahli las stainless bersertifikat</MKTypography></li>
                <li><MKTypography variant="body1" mb={1}>Pemasangan rapi dan garansi kualitas</MKTypography></li>
              </MKBox>

              <MKTypography variant="h3" mt={4} mb={2}>Area Layanan Las Stainless</MKTypography>
              <Grid container spacing={2}>
                {["Depok", "Pamulang", "BSD", "Ciputat", "Serpong", "Bojongsari", "Sawangan", "Cinere", "Lenteng Agung", "Jagakarsa"].map(area => (
                  <Grid item xs={6} md={3} key={area}>
                    <MKBox bgColor="grey-100" borderRadius="md" p={1.5} textAlign="center">
                      <MKTypography variant="body2" fontWeight="bold">{area}</MKTypography>
                    </MKBox>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12} lg={4}>
              <MKBox bgColor="info" borderRadius="lg" p={3} mb={3} sx={{ position: "sticky", top: 100 }}>
                <MKTypography variant="h5" color="white" mb={2} textAlign="center">Konsultasi Gratis</MKTypography>
                <MKTypography variant="body2" color="white" mb={2} textAlign="center">
                  Hubungi kami untuk survey dan penawaran terbaik
                </MKTypography>
                <MKButton color="success" fullWidth size="large" onClick={handleWhatsApp}>Chat WhatsApp</MKButton>
                <MKBox textAlign="center" mt={2}>
                  <MKTypography variant="h6" color="white">081212154019</MKTypography>
                </MKBox>
              </MKBox>

              <MKBox bgColor="white" borderRadius="lg" p={3} sx={{ border: "2px solid #e0e0e0" }}>
                <MKTypography variant="h6" mb={2}>Jam Operasional</MKTypography>
                <MKTypography variant="body2" color="text">
                  Senin - Sabtu: 08.00 - 17.00 WIB<br />
                  Minggu: 08.00 - 14.00 WIB
                </MKTypography>
              </MKBox>
            </Grid>
          </Grid>

          {/* CTA Section */}
          <MKBox bgColor="primary" borderRadius="lg" p={4} mt={6} textAlign="center">
            <MKTypography variant="h4" color="white" mb={2}>
              Upgrade Rumah dengan Stainless Steel Premium
            </MKTypography>
            <MKTypography variant="body1" color="white" mb={3}>
              Investasi jangka panjang untuk rumah Anda. Konsultasi gratis sekarang!
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

      <MKBox position="fixed" bottom="20px" right={{ xs: "20px", lg: "40px" }} zIndex="1000" sx={{ cursor: "pointer", borderRadius: "50%" }} onClick={handleWhatsApp}>
        <img src="/wa.png" alt="WhatsApp" style={{ width: "60px", height: "60px" }} />
      </MKBox>
    </>
  );
}

export default LasStainless;
