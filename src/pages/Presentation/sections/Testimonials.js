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
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";
import Carousel from "react-material-ui-carousel";

// Material Kit 2 React examples
// import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Telah Dipercaya Oleh</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            2.000+ Customer
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Selama pengalaman 15 Tahun ini kami telah mengerjakan berbagai macam project dan telah
            melayani 2000+ Costumer.
          </MKTypography>
        </Grid>
        {/* <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Ahmad Subakir"
              date="1 day ago"
              review="Sudah lebih dari 15 tahun Bengkel Las India Jaya ada di sekitar sini, dan saya sudah sering memesan berbagai produk las dari mereka. Teralis yang saya pesan terakhir ini sangat kuat dan desainnya elegan. Harganya juga terjangkau untuk kualitas yang diberikan. Saya tidak ragu merekomendasikan mereka ke teman-teman saya!"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Rahmat Hidayat"
              date="1 week ago"
              review="Layanan dari India Jaya benar-benar luar biasa! Saya membuat kanopi untuk garasi, dan hasilnya lebih dari ekspektasi. Timnya sangat profesional, ramah, dan detail dalam pekerjaannya. Saya sudah menjadi pelanggan setia selama bertahun-tahun, dan mereka selalu konsisten memberikan hasil terbaik. Terima kasih, India Jaya!"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Agus Setiawan"
              date="3 weeks ago"
              review="Saya sangat puas dengan hasil kerja Bengkel Las India Jaya. Saya memesan pagar untuk rumah, dan hasilnya sangat rapi serta kokoh. Proses pengerjaannya juga cepat, dan mereka sangat komunikatif dalam menyesuaikan desain sesuai keinginan saya. Lokasinya strategis di Pondok Petir, jadi mudah diakses. Highly recommended!."
              rating={5}
            />
          </Grid>
        </Grid> */}
        <Carousel autoPlay={true} interval={2000}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Ujang Suryana"
              date="1 minggu yang lalu"
              review="Bengkel Las India Jaya selalu memberikan hasil yang memuaskan. Saya sering memesan berbagai produk las dari mereka, dan setiap kali hasilnya selalu bagus. Terakhir, saya memesan pagar dan sangat puas dengan kekokohan serta desainnya. Harganya juga terjangkau untuk kualitas yang diberikan. Sangat merekomendasikan bengkel ini!"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Bagus Subakir"
              date="1 bulan yang lalu"
              review="Sudah lebih dari 15 tahun Bengkel Las India Jaya ada di sekitar sini, dan saya sudah sering memesan berbagai produk las dari mereka. Teralis yang saya pesan terakhir ini sangat kuat dan desainnya elegan. Harganya juga terjangkau untuk kualitas yang diberikan. Saya tidak ragu merekomendasikan mereka ke teman-teman saya!"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Rahmat Hidayat"
              date="1 minggu yang lalu"
              review="Layanan dari India Jaya benar-benar luar biasa! Saya membuat kanopi untuk garasi, dan hasilnya lebih dari ekspektasi. Timnya sangat profesional, ramah, dan detail dalam pekerjaannya. Saya sudah menjadi pelanggan setia selama bertahun-tahun, dan mereka selalu konsisten memberikan hasil terbaik. Terima kasih, India Jaya!"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Agus Setiawan"
              date="3 minggu yang lalu"
              review="Saya sangat puas dengan hasil kerja Bengkel Las India Jaya. Saya memesan pagar untuk rumah, dan hasilnya sangat rapi serta kokoh. Proses pengerjaannya juga cepat, dan mereka sangat komunikatif dalam menyesuaikan desain sesuai keinginan saya. Lokasinya strategis di Pondok Petir, jadi mudah diakses. Highly recommended!."
              rating={5}
            />
          </Grid>
        </Carousel>
        {/* <Divider sx={{ my: 6 }} />
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={appleLogo} alt="Apple" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={facebookLogo} alt="Facebook" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={nasaLogo} alt="Nasa" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={vodafoneLogo} alt="Vodafone" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={digitalOceanLogo}
              alt="DigitalOcean"
              width="100%"
              opacity={0.6}
            />
          </Grid>
        </Grid> */}
      </Container>
    </MKBox>
  );
}

export default Information;
