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
      title: "Estimasi Biaya Jasa Las: Satuan dan Spesifikasi",
      excerpt: "Kisaran anggaran kanopi dan pagar, perbedaan m dengan m², serta informasi yang perlu disiapkan untuk meminta penawaran.",
      date: "9 Januari 2026",
      image: bgImage,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Blog & Artikel Las - Tips, Harga, dan Panduan Lengkap | Indian Jaya Las</title>
        <meta
          name="description"
          content="Blog dan artikel seputar jasa las, harga kanopi, pagar, tralis, tips memilih tukang las, dan panduan lengkap untuk proyek las Anda."
        />
        <meta
          name="keywords"
          content="blog las, artikel kanopi, harga las 2026, tips memilih tukang las, panduan las"
        />
        <link rel="canonical" href="https://indianjayalas.com/blog" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "@id": "https://indianjayalas.com/blog#blog",
            url: "https://indianjayalas.com/blog",
            name: "Blog & Artikel Seputar Jasa Las",
            description: "Panduan Spesifikasi dan Estimasi Anggaran",
            inLanguage: "id-ID",
            publisher: { "@type": "Organization", name: "Indian Jaya Las", url: "https://indianjayalas.com" },
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
          { name: "Blog", route: "/blog" },
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
            <MKTypography
              variant="h6"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={2}
            >
              Panduan Spesifikasi dan Estimasi Anggaran
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
                    width="1200"
                    height="800"
                    loading="lazy"
                    decoding="async"
                    sx={{ width: "100%", height: 200, objectFit: "cover" }}
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
      </MKBox>
    </>
  );
}

export default BlogIndex;
