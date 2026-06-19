/* eslint-disable prettier/prettier */
import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
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

const locationData = {
  depok: {
    name: "Depok",
    slug: "depok",
    description: "Melayani jasa las profesional di seluruh wilayah Kota Depok termasuk Margonda, Sawangan, Bojongsari, Cinere, Cimanggis, dan sekitarnya.",
    areas: ["Margonda", "Sawangan", "Bojongsari", "Cinere", "Cimanggis", "Beji", "Pancoran Mas", "Limo"],
    highlight: "Berlokasi di Bojongsari, kami melayani seluruh Kota Depok dengan waktu tempuh maksimal 30 menit.",
  },
  pamulang: {
    name: "Pamulang",
    slug: "pamulang",
    description: "Jasa las terpercaya untuk area Pamulang dan sekitarnya. Melayani perumahan, ruko, dan proyek komersial di Pamulang 1, Pamulang 2, Pondok Benda.",
    areas: ["Pamulang 1", "Pamulang 2", "Pondok Benda", "Benda Baru", "Kedaung", "Bambu Apus"],
    highlight: "Area Pamulang adalah salah satu zona layanan utama kami dengan banyak project selesai di perumahan sekitar.",
  },
  bsd: {
    name: "BSD",
    slug: "bsd",
    description: "Melayani kawasan BSD City, Serpong, dan Tangerang Selatan. Spesialis kanopi, pagar, dan tralis untuk rumah modern di cluster BSD.",
    areas: ["BSD City", "Serpong", "Serpong Utara", "Alam Sutera", "Gading Serpong", "Foresta"],
    highlight: "Berpengalaman mengerjakan project di berbagai cluster BSD dengan desain modern dan minimalis.",
  },
  ciputat: {
    name: "Ciputat",
    slug: "ciputat",
    description: "Layanan jasa las untuk wilayah Ciputat, Ciputat Timur, dan sekitarnya. Dari perbaikan ringan hingga pembuatan baru.",
    areas: ["Ciputat", "Ciputat Timur", "Pisangan", "Sawah Baru", "Jombang", "Serua"],
    highlight: "Melayani area Ciputat dengan cepat berkat lokasi workshop yang strategis di Bojongsari.",
  },
};

function LocationPage() {
  const { location } = useParams();
  const data = locationData[location];

  if (!data) return <Navigate to="/" />;

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/6281212154019?text=Halo, saya dari ${data.name} ingin konsultasi jasa las`,
      "_blank"
    );
  };

  const title = `Jasa Las ${data.name} - Kanopi, Pagar, Tralis | Indian Jaya`;
  const metaDesc = `Bengkel las terpercaya di ${data.name}. Jasa las kanopi, pagar, tralis, stainless. Free survey & pemasangan. Hubungi 081212154019`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDesc} />
        <meta name="keywords" content={`jasa las ${data.name.toLowerCase()}, bengkel las ${data.name.toLowerCase()}, tukang las ${data.name.toLowerCase()}, las kanopi ${data.name.toLowerCase()}`} />
        <link rel="canonical" href={`https://indianjayalas.com/jasa-las-${data.slug}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content={`https://indianjayalas.com/jasa-las-${data.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Indian Jaya Las",
            description: metaDesc,
            areaServed: {
              "@type": "City",
              name: data.name,
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "JL. Bambu Kuning RT 006 RW 001",
              addressLocality: "Pondok Petir, Bojongsari",
              addressRegion: "Kota Depok",
              postalCode: "16517",
              addressCountry: "ID",
            },
            telephone: "+6281212154019",
            url: `https://indianjayalas.com/jasa-las-${data.slug}`,
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: `Jasa Las di ${data.name}`,
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Las Kanopi" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Las Pagar" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Las Tralis" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Las Stainless" } },
              ],
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
          route: "https://wa.me/6281212154019",
          label: "Hubungi Kami",
          color: "info",
        }}
        sticky
      />

      <MKBox component="main" id="main-content">

      <Breadcrumb items={[
        { name: "Beranda", path: "/", url: "https://indianjayalas.com/" },
        { name: `Jasa Las ${data.name}`, path: `/jasa-las-${data.slug}`, url: `https://indianjayalas.com/jasa-las-${data.slug}` },
      ]} />

      {/* Hero */}
      <MKBox
        minHeight="40vh"
        width="100%"
        sx={{
          backgroundColor: "#1A73E8",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12} lg={8} textAlign="center">
              <MKTypography variant="h1" color="white" mb={1} sx={{ fontSize: { xs: "2rem", md: "3rem" } }}>
                Jasa Las Profesional di {data.name}
              </MKTypography>
              <MKTypography variant="h6" color="white" mt={1} mb={3} opacity={0.9}>
                Kanopi, Pagar, Tralis & Stainless — Free Survey & Pemasangan
              </MKTypography>
              <MKButton color="success" size="large" onClick={handleWhatsApp}>
                Hubungi Kami di {data.name}
              </MKButton>
            </Grid>
          </Grid>
        </Container>
      </MKBox>

      <Card sx={{ p: { xs: 2, md: 4 }, mx: { xs: 2, lg: 3 }, mt: -4, mb: 4 }}>
        <Container>
          {/* Deskripsi Unik */}
          <MKBox py={4}>
            <MKTypography variant="h2" mb={2}>
              Bengkel Las Terpercaya di {data.name}
            </MKTypography>
            <MKTypography variant="body1" color="text" mb={2}>
              {data.description}
            </MKTypography>
            <MKTypography variant="body1" color="text" fontWeight="bold">
              {data.highlight}
            </MKTypography>
          </MKBox>

          {/* Area Coverage */}
          <MKBox py={3}>
            <MKTypography variant="h3" mb={2}>
              Area Layanan di {data.name}
            </MKTypography>
            <Grid container spacing={1}>
              {data.areas.map((area) => (
                <Grid item xs={6} md={3} key={area}>
                  <MKTypography variant="body2" color="text">✓ {area}</MKTypography>
                </Grid>
              ))}
            </Grid>
          </MKBox>

          {/* Layanan */}
          <MKBox py={3}>
            <MKTypography variant="h3" mb={2}>
              Layanan Kami di {data.name}
            </MKTypography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <MKBox component={Link} to="/las-kanopi" sx={{ textDecoration: "none" }}>
                  <MKTypography variant="h5" color="info">🏠 Las Kanopi</MKTypography>
                  <MKTypography variant="body2" color="text">Kanopi baja ringan, hollow, atap alderon & spandek</MKTypography>
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox component={Link} to="/las-pagar" sx={{ textDecoration: "none" }}>
                  <MKTypography variant="h5" color="info">🚪 Las Pagar</MKTypography>
                  <MKTypography variant="body2" color="text">Pagar minimalis, hollow, besi tempa</MKTypography>
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox component={Link} to="/las-tralis" sx={{ textDecoration: "none" }}>
                  <MKTypography variant="h5" color="info">🔒 Las Tralis</MKTypography>
                  <MKTypography variant="body2" color="text">Tralis jendela & pintu untuk keamanan rumah</MKTypography>
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox component={Link} to="/las-stainless" sx={{ textDecoration: "none" }}>
                  <MKTypography variant="h5" color="info">✨ Las Stainless</MKTypography>
                  <MKTypography variant="body2" color="text">Railing, pagar & kanopi stainless anti karat</MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>

          {/* CTA */}
          <MKBox bgColor="primary" borderRadius="lg" p={4} mt={4} textAlign="center">
            <MKTypography variant="h4" color="white" mb={2}>
              Butuh Jasa Las di {data.name}?
            </MKTypography>
            <MKTypography variant="body1" color="white" mb={3}>
              Free survey, gratis konsultasi. Hubungi kami sekarang!
            </MKTypography>
            <MKButton color="success" size="large" onClick={handleWhatsApp}>
              WhatsApp Sekarang
            </MKButton>
          </MKBox>

          {/* Area Layanan Lain */}
          <MKBox py={4} mt={4}>
            <MKTypography variant="h3" mb={2}>Area Layanan Lainnya</MKTypography>
            <Grid container spacing={2}>
              {Object.values(locationData)
                .filter((loc) => loc.slug !== data.slug)
                .map((loc) => (
                  <Grid item xs={6} md={3} key={loc.slug}>
                    <MKTypography component={Link} to={`/jasa-las-${loc.slug}`} color="info" variant="body2">
                      Jasa Las {loc.name}
                    </MKTypography>
                  </Grid>
                ))}
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
        sx={{ cursor: "pointer", borderRadius: "50%" }}
        onClick={handleWhatsApp}
      >
        <img src="/wa.png" alt="WhatsApp" width="60" height="60" loading="lazy" decoding="async" style={{ width: "60px", height: "60px" }} />
      </MKBox>
      </MKBox>
    </>
  );
}

export { locationData };
export default LocationPage;
