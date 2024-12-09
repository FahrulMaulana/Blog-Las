/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function BuiltByDevelopers() {
  const bgImage =
    "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg";

  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={10} sx={{ ml: { xs: 0, lg: 5 }, textAlign: "justify" }}>
          <MKTypography variant="h1" color="white" mb={1}>
            Tentang Kami
          </MKTypography>
          <MKTypography variant="body2" color="white" opacity={0.8} mb={2}>
            Bengkel Las India Jaya adalah mitra terpercaya Anda dalam jasa las berkualitas yang
            telah berdiri selama lebih dari 15 tahun. Berlokasi di Jl. Bambu Kuning RT 006 RW 001,
            Pondok Petir, Bojongsari, Kota Depok, kami telah menjadi pilihan utama bagi masyarakat
            sekitar dalam memenuhi kebutuhan las, konstruksi, dan pembuatan produk berbahan dasar
            logam. Dengan pengalaman yang kami miliki, kami telah melayani lebih dari 2.000
            pelanggan dari berbagai kalangan, mulai dari individu hingga perusahaan. Kami menawarkan
            berbagai layanan, seperti pembuatan pagar, kanopi, teralis, tangga, hingga pekerjaan las
            khusus yang disesuaikan dengan kebutuhan Anda
          </MKTypography>
          <MKTypography
            component="a"
            href="https://www.creative-tim.com/learning-lab/react/overview/material-kit/"
            target="_blank"
            rel="noreferrer"
            variant="body2"
            color="white"
            fontWeight="regular"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", lg: "flex-start" },
              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translateX(3px)`,
                transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
              },
              "&:hover .material-icons-round, &:focus .material-icons-round": {
                transform: `translateX(6px)`,
              },
            }}
          ></MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
