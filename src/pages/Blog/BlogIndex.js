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

function BlogIndex() {
  const articles = [
    {
      slug: "harga-jasa-las-terbaru-2026",
      title: "Harga Jasa Las Terbaru 2026 - Update Lengkap Semua Layanan",
      excerpt: "Daftar lengkap harga jasa las terbaru tahun 2026 untuk kanopi, pagar, tralis, dan stainless steel. Update harga material dan jasa pemasangan.",
      date: "9 Januari 2026",
      image: bgImage,
    },
    {
      slug: "harga-kanopi-per-meter-tangerang-selatan",
      title: "Harga Kanopi Per Meter di Tangerang Selatan & Depok 2026",
      excerpt: "Panduan lengkap harga kanopi per meter untuk wilayah Tangerang Selatan, Depok, dan sekitarnya. Perbandingan material dan tips hemat budget.",
      date: "9 Januari 2026",
      image: bgImage,
    },
    {
      slug: "model-kanopi-minimalis-terbaru",
      title: "10 Model Kanopi Minimalis Terbaru 2026 yang Paling Diminati",
      excerpt: "Inspirasi desain kanopi minimalis modern untuk rumah Anda. Dari baja ringan hingga polycarbonate, temukan model yang cocok.",
      date: "9 Januari 2026",
      image: bgImage,
    },
    {
      slug: "tips-memilih-tukang-las-profesional",
      title: "7 Tips Memilih Tukang Las Profesional dan Terpercaya",
      excerpt: "Panduan lengkap memilih jasa las yang berkualitas. Cek pengalaman, portofolio, harga, hingga garansi yang ditawarkan.",
      date: "9 Januari 2026",
      image: bgImage,
    },
    {
      slug: "perbandingan-pagar-besi-vs-hollow",
      title: "Perbandingan Pagar Besi vs Hollow: Mana yang Lebih Baik?",
      excerpt: "Analisis lengkap kelebihan dan kekurangan pagar besi solid vs hollow. Dari segi harga, kekuatan, hingga perawatan.",
      date: "9 Januari 2026",
      image: bgImage,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Blog & Artikel Las - Tips, Harga, dan Panduan Lengkap | Indian Jaya Las</title>
        <meta name="description" content="Blog dan artikel seputar jasa las, harga kanopi, pagar, tralis, tips memilih tukang las, dan panduan lengkap untuk proyek las Anda." />
        <meta name="keywords" content="blog las, artikel kanopi, harga las 2026, tips memilih tukang las, panduan las" />
        <link rel="canonical" href="https://indiajaya.tech/blog" />
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

      <MKBox
        minHeight="40vh"
        width="100%"
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={8} justifyContent="center" mx="auto">
            <MKTypography variant="h1" color="white" textAlign="center">
              Blog & Artikel Seputar Jasa Las
            </MKTypography>
            <MKTypography variant="h6" color="white" textAlign="center" px={{ xs: 6, lg: 12 }} mt={2}>
              Tips, Panduan, dan Update Harga Terbaru
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>

      <Card sx={{ p: 2, mx: { xs: 2, lg: 3 }, mt: -8, mb: 4 }}>
        <Container sx={{ mt: 6 }}>
          <Grid container spacing={3}>
            {articles.map((article) => (
              <Grid item xs={12} md={6} lg={4} key={article.slug}>
                <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <MKBox
                    component="img"
                    src={article.image}
                    alt={article.title}
                    width="100%"
                    height="200px"
                    sx={{ objectFit: "cover" }}
                  />
                  <MKBox p={3} flexGrow={1} display="flex" flexDirection="column">
                    <MKTypography variant="caption" color="text" mb={1}>
                      {article.date}
                    </MKTypography>
                    <MKTypography variant="h5" mb={2}>
                      {article.title}
                    </MKTypography>
                    <MKTypography variant="body2" color="text" mb={3} flexGrow={1}>
                      {article.excerpt}
                    </MKTypography>
                    <MKButton
                      component={Link}
                      to={`/blog/${article.slug}`}
                      variant="text"
                      color="info"
                      fullWidth
                    >
                      Baca Selengkapnya →
                    </MKButton>
                  </MKBox>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Card>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default BlogIndex;
