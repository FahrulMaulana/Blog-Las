/* eslint-disable prettier/prettier */
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

import React, { useRef, lazy, Suspense, useEffect } from "react";
import { Helmet } from "react-helmet-async";

// @mui material components
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// @mui icons
import CallIcon from "@mui/icons-material/Call";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ConstructionIcon from "@mui/icons-material/Construction";
import CheckIcon from "@mui/icons-material/Check";
import HandshakeIcon from "@mui/icons-material/Handshake";
// import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import StarIcon from "@mui/icons-material/Star";
import EngineeringIcon from "@mui/icons-material/Engineering";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultFooter from "examples/Footers/DefaultFooter";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Presentation page sections - Priority Load
// import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";

// Lazy Load untuk sections yang tidak critical
const DesignBlocks = lazy(() => import("pages/Presentation/sections/DesignBlocks"));
const Download = lazy(() => import("pages/Presentation/sections/Download"));
const Testimonials = lazy(() => import("pages/Presentation/sections/Testimonials"));
const BuiltByDevelopers = lazy(() => import("./components/BuiltByDevelopers"));

// Routes
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/las.webp";
import kanopiIcon from "assets/images/kanopi11.webp";
import pagarIcon from "assets/images/pagar/pagar1.jpg";
import teralisIcon from "assets/images/teralis/teralis.jpg";
import tanggaIcon from "assets/images/tangga/tangga1.jpg";

function Presentation() {
  const homeRef = useRef(null);
  const layananRef = useRef(null);
  const benefitRef = useRef(null);
  const tentangKamiRef = useRef(null);
  const produkRef = useRef(null);
  const prosesRef = useRef(null);
  const testiRef = useRef(null);
  const kontakRef = useRef(null);
  const areaRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    // Tidak perlu visibility state karena semua langsung visible
  }, []);

  const handleScroll = (ref) => {
    if (ref && ref.current) {
      console.log("Scrolling to:", ref.current);
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Ref is null or undefined", ref);
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Bengkel Las Indian Jaya - Jasa Las Kanopi, Pagar, Tralis Depok & Tangerang Selatan
        </title>
        <meta
          name="description"
          content="Bengkel Las Indian Jaya melayani jasa las kanopi, pagar, tralis, stainless di Depok, Pamulang, BSD, Ciputat. Free survey & pemasangan. Hubungi 081212154019"
        />
        <meta
          name="keywords"
          content="bengkel las depok, jasa las pamulang, las kanopi depok, las pagar tangerang selatan, tukang las terdekat, bengkel las panggilan, indian jaya las"
        />
        <link rel="canonical" href="https://indiajaya.tech/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://indiajaya.tech/" />
        <meta property="og:title" content="Bengkel Las Indian Jaya - Depok & Tangerang Selatan" />
        <meta
          property="og:description"
          content="Jasa las profesional untuk kanopi, pagar, tralis, stainless. Free survey & pemasangan."
        />
        <meta property="og:image" content="https://indiajaya.tech/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://indiajaya.tech/" />
        <meta
          property="twitter:title"
          content="Bengkel Las Indian Jaya - Depok & Tangerang Selatan"
        />
        <meta
          property="twitter:description"
          content="Jasa las profesional untuk kanopi, pagar, tralis, stainless."
        />
        <meta property="twitter:image" content="https://indiajaya.tech/og-image.jpg" />

        {/* JSON-LD LocalBusiness Schema with Aggregate Rating */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Indian Jaya Las",
            image: "https://indiajaya.tech/logo.jpg",
            description:
              "Bengkel las profesional melayani jasa pembuatan dan pemasangan kanopi, pagar, tralis, dan stainless steel di Depok dan Tangerang Selatan",
            address: {
              "@type": "PostalAddress",
              streetAddress: "JL.BAMBU KUNING RT 006 RW 001 PONDOK PETIR",
              addressLocality: "Bojongsari",
              addressRegion: "Depok",
              postalCode: "16516",
              addressCountry: "ID",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "-6.3906",
              longitude: "106.7525",
            },
            url: "https://indiajaya.tech",
            telephone: "081212154019",
            priceRange: "$$",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "2000",
              bestRating: "5",
              worstRating: "1",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "08:00",
                closes: "17:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Sunday",
                opens: "08:00",
                closes: "14:00",
              },
            ],
            areaServed: [
              { "@type": "City", name: "Depok" },
              { "@type": "City", name: "Pamulang" },
              { "@type": "City", name: "BSD" },
              { "@type": "City", name: "Ciputat" },
              { "@type": "City", name: "Serpong" },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Layanan Las",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Jasa Las Kanopi",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Jasa Las Pagar",
                  },
                },
              ],
            },
          })}
        </script>
      </Helmet>

      <DefaultNavbar
        routes={[
          { name: "Beranda", route: () => handleScroll(homeRef) },
          { name: "Layanan", route: () => handleScroll(layananRef) },
          { name: "Tentang Kami", route: () => handleScroll(tentangKamiRef) },
          { name: "Portfolio", route: () => handleScroll(produkRef) },
          { name: "Proses Kerja", route: () => handleScroll(prosesRef) },
          { name: "Testimoni", route: () => handleScroll(testiRef) },
          { name: "Kontak", route: () => handleScroll(kontakRef) },
        ]}
        action={{
          type: "external",
          route: "https://wa.me/081212154019",
          label: "Hubungi Kami",
          color: "info",
        }}
        sticky
      />

      {/* Hero Section - Modern Professional Design */}
      <MKBox
        ref={homeRef}
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: { xs: "scroll", md: "fixed" },
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          pt: { xs: 12, md: 0 },
          pb: { xs: 6, md: 0 },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%)",
          },
        }}
      >
        <Container sx={{ position: "relative", zIndex: 2 }}>
          <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
            <Grid item xs={12} lg={7}>
              {/* Badge */}
              {/* <MKBox
                display="inline-block"
                bgColor="#2196F3"
                color="white"
                borderRadius="xl"
                px={{ xs: 2, md: 3 }}
                py={1}
                mb={{ xs: 2, md: 3 }}
                sx={{
                  animation: "fadeInDown 1s ease-out",
                  "@keyframes fadeInDown": {
                    "0%": { opacity: 0, transform: "translateY(-20px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                  },
                }}
              >
                <MKTypography variant="button" color="white" fontWeight="bold" sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}>
                  Terpercaya Sejak 2015 | 1000+ Project Selesai
                </MKTypography>
              </MKBox> */}

              {/* Main Heading */}
              <MKTypography
                variant="h1"
                color="white"
                mb={2}
                sx={{
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
                  fontWeight: 800,
                  lineHeight: 1.2,
                  textShadow: "2px 4px 8px rgba(0,0,0,0.3)",
                  animation: "fadeInLeft 1s ease-out 0.2s backwards",
                  "@keyframes fadeInLeft": {
                    "0%": { opacity: 0, transform: "translateX(-30px)" },
                    "100%": { opacity: 1, transform: "translateX(0)" },
                  },
                }}
              >
                Bengkel Las Profesional <br />
                <MKBox component="span" sx={{ color: "#2196F3" }}>
                  Indian Jaya
                </MKBox>
              </MKTypography>

              {/* Subheading */}
              <MKTypography
                variant="h5"
                color="white"
                fontWeight="regular"
                mb={{ xs: 2, md: 3 }}
                sx={{
                  opacity: 0.95,
                  lineHeight: 1.6,
                  fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                  animation: "fadeInLeft 1s ease-out 0.4s backwards",
                }}
              >
                Jasa Las Kanopi, Pagar, Tralis & Stainless di Depok, Pamulang, BSD & Sekitarnya
              </MKTypography>

              {/* Features List */}
              <Grid container spacing={2} mb={{ xs: 3, md: 4 }}>
                {[
                  "✓ Free Survey & Konsultasi",
                  "✓ Free Pemasangan",
                  "✓ Free Ongkir Jabodetabek",
                  "✓ Garansi Kualitas",
                ].map((feature, index) => (
                  <Grid item xs={6} key={index}>
                    <MKTypography
                      variant="body1"
                      color="white"
                      fontWeight="medium"
                      sx={{
                        fontSize: { xs: "0.875rem", md: "1rem" },
                        animation: `fadeIn 1s ease-out ${0.6 + index * 0.1}s backwards`,
                        "@keyframes fadeIn": {
                          "0%": { opacity: 0 },
                          "100%": { opacity: 1 },
                        },
                      }}
                    >
                      {feature}
                    </MKTypography>
                  </Grid>
                ))}
              </Grid>

              {/* CTA Buttons */}
              <MKBox
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                gap={2}
                sx={{
                  animation: "fadeInUp 1s ease-out 0.8s backwards",
                  "@keyframes fadeInUp": {
                    "0%": { opacity: 0, transform: "translateY(20px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                  },
                }}
              >
                <MKBox
                  component="a"
                  href="https://wa.me/081212154019?text=Halo, saya ingin konsultasi tentang jasa las"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    px: { xs: 3, md: 4 },
                    py: { xs: 1.5, md: 2 },
                    borderRadius: "xl",
                    background: "linear-gradient(135deg, #2196F3 0%, #1976D2 100%)",
                    color: "#ffffff",
                    fontWeight: "bold",
                    fontSize: { xs: "0.95rem", md: "1.1rem" },
                    textDecoration: "none",
                    transition: "all 0.3s",
                    boxShadow: "0 4px 15px rgba(33, 150, 243, 0.4)",
                    textShadow: "0 1px 2px rgba(0,0,0,0.1)",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 6px 20px rgba(33, 150, 243, 0.6)",
                    },
                  }}
                >
                  <MKBox component="span" mr={1}>
                    💬
                  </MKBox>
                  Chat WhatsApp Sekarang
                </MKBox>

                <MKBox
                  component="a"
                  href="tel:081212154019"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    px: { xs: 3, md: 4 },
                    py: { xs: 1.5, md: 2 },
                    borderRadius: "xl",
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    border: "2px solid rgba(255,255,255,0.3)",
                    color: "#ffffff",
                    fontWeight: "bold",
                    fontSize: { xs: "0.95rem", md: "1.1rem" },
                    textDecoration: "none",
                    transition: "all 0.3s",
                    textShadow: "0 1px 2px rgba(0,0,0,0.2)",
                    "&:hover": {
                      background: "rgba(255,255,255,0.2)",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  <MKBox component="span" mr={1}>
                    📞
                  </MKBox>
                  Telepon Langsung
                </MKBox>
              </MKBox>
            </Grid>

            {/* Right Side - Stats Cards */}
            <Grid item xs={12} lg={5}>
              <Grid container spacing={{ xs: 2, md: 2 }}>
                {[
                  {
                    icon: (
                      <ConstructionIcon
                        sx={{ fontSize: { xs: "3rem", md: "4rem" }, color: "white" }}
                      />
                    ),
                    number: "1000+",
                    label: "Project Selesai",
                    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  },
                  {
                    icon: (
                      <StarIcon sx={{ fontSize: { xs: "3rem", md: "4rem" }, color: "white" }} />
                    ),
                    number: "4.9/5",
                    label: "Rating Pelanggan",
                    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                  },
                  {
                    icon: (
                      <EngineeringIcon
                        sx={{ fontSize: { xs: "3rem", md: "4rem" }, color: "white" }}
                      />
                    ),
                    number: "10+",
                    label: "Tahun Pengalaman",
                    gradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
                  },
                  {
                    icon: (
                      <LocalShippingIcon
                        sx={{ fontSize: { xs: "3rem", md: "4rem" }, color: "white" }}
                      />
                    ),
                    number: "FREE",
                    label: "Ongkir & Survey",
                    gradient: "linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%)",
                  },
                ].map((stat, index) => (
                  <Grid item xs={6} key={index}>
                    <MKBox
                      borderRadius="2xl"
                      p={{ xs: 2.5, md: 4 }}
                      textAlign="center"
                      sx={{
                        position: "relative",
                        backdropFilter: "blur(20px) saturate(180%)",
                        background: "rgba(255, 255, 255, 0.15)",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        animation: `fadeInRight 1s ease-out ${0.6 + index * 0.1}s backwards`,
                        overflow: "hidden",
                        minHeight: { xs: "160px", md: "200px" },
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: stat.gradient,
                          opacity: 0,
                          transition: "opacity 0.4s ease",
                          zIndex: 0,
                        },
                        "&:hover": {
                          transform: "translateY(-8px) scale(1.02)",
                          boxShadow: "0 16px 48px rgba(0, 0, 0, 0.3)",
                          background: "rgba(255, 255, 255, 0.25)",
                          border: "1px solid rgba(255, 255, 255, 0.5)",
                          "&::before": {
                            opacity: 0.1,
                          },
                        },
                        "@keyframes fadeInRight": {
                          "0%": { opacity: 0, transform: "translateX(30px)" },
                          "100%": { opacity: 1, transform: "translateX(0)" },
                        },
                      }}
                    >
                      <MKBox sx={{ position: "relative", zIndex: 1 }}>
                        {/* Icon with Glow Effect */}
                        <MKBox
                          sx={{
                            mb: { xs: 1.5, md: 2 },
                            color: "rgba(255,255,255,0.95)",
                            transform: { xs: "scale(1.5)", md: "scale(2)" },
                            filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
                            willChange: "transform, filter",
                            transition: "all 0.3s",
                            ".MuiBox-root:hover &": {
                              transform: {
                                xs: "scale(1.7) rotate(5deg)",
                                md: "scale(2.3) rotate(5deg)",
                              },
                              filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.3))",
                            },
                          }}
                        >
                          {stat.icon}
                        </MKBox>

                        {/* Number */}
                        <MKTypography
                          variant="h1"
                          fontWeight="bold"
                          sx={{
                            color: "rgba(255,255,255,0.95)",
                            textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                            mb: { xs: 0.5, md: 1 },
                            letterSpacing: "-0.5px",
                            fontSize: { xs: "1.75rem", md: "3rem" },
                          }}
                        >
                          {stat.number}
                        </MKTypography>

                        {/* Label */}
                        <MKTypography
                          variant="body1"
                          sx={{
                            color: "rgba(255,255,255,0.95)",
                            textShadow: "0 1px 3px rgba(0,0,0,0.2)",
                            fontWeight: "medium",
                            fontSize: { xs: "0.75rem", md: "1rem" },
                          }}
                        >
                          {stat.label}
                        </MKTypography>
                      </MKBox>

                      {/* Decorative Corner Element */}
                      <MKBox
                        sx={{
                          position: "absolute",
                          top: -20,
                          right: -20,
                          width: "80px",
                          height: "80px",
                          borderRadius: "50%",
                          background: "rgba(255,255,255,0.1)",
                          filter: "blur(20px)",
                          zIndex: 0,
                        }}
                      />
                    </MKBox>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>

        {/* Decorative Elements */}
        <MKBox
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "100px",
            background: "linear-gradient(180deg, transparent 0%, #1b1c1dff 100%)",
          }}
        />
      </MKBox>

      {/* Layanan Kami Section */}
      <MKBox
        ref={layananRef}
        component="section"
        py={8}
        pb={15}
        sx={{
          backgroundColor: "#f8f9fa",
        }}
      >
        <Container>
          <Grid container spacing={3} mb={6}>
            <Grid item xs={12} textAlign="center">
              <MKTypography variant="h2" mb={2} fontWeight="bold">
                Layanan Las Kami
              </MKTypography>
              <MKTypography variant="body1" color="text" mb={4}>
                Kami menyediakan berbagai jasa las berkualitas tinggi untuk kebutuhan rumah dan
                komersial Anda
              </MKTypography>
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            {[
              {
                title: "Las Kanopi",
                description:
                  "Kanopi besi hollow, baja ringan, dan stainless dengan berbagai desain modern dan klasik",
                link: "/las-kanopi",
                icon: kanopiIcon,
                color: "#667eea",
              },
              {
                title: "Las Pagar",
                description:
                  "Pagar minimalis, klasik, dan modern dengan material berkualitas dan desain custom",
                link: "/las-pagar",
                icon: pagarIcon,
                color: "#4facfe",
              },
              {
                title: "Las Tralis",
                description:
                  "Tralis jendela dan pintu dengan berbagai motif untuk keamanan rumah Anda",
                link: "/las-tralis",
                icon: teralisIcon,
                color: "#1e3c72",
              },
              {
                title: "Las Stainless",
                description:
                  "Tangga stainless, railing, dan ornamen dengan finishing premium dan tahan lama",
                link: "/las-stainless",
                icon: tanggaIcon,
                color: "#3a7bd5",
              },
            ].map((service, index) => (
              <Grid item xs={12} md={6} lg={3} key={index}>
                <MKBox
                  component="a"
                  href={service.link}
                  sx={{
                    display: "block",
                    textDecoration: "none",
                    height: "100%",
                  }}
                >
                  <MKBox
                    borderRadius="xl"
                    p={4}
                    textAlign="center"
                    sx={{
                      height: "100%",
                      background: "white",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "4px",
                        background: `linear-gradient(90deg, ${service.color}, ${service.color}dd)`,
                        transform: "scaleX(0)",
                        transition: "transform 0.3s ease",
                      },
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                        "&::before": {
                          transform: "scaleX(1)",
                        },
                      },
                    }}
                  >
                    <MKBox
                      sx={{
                        width: "100%",
                        height: "150px",
                        mb: 2,
                        borderRadius: "lg",
                        overflow: "hidden",
                        transition: "transform 0.3s ease",
                        "a:hover &": {
                          transform: "scale(1.05)",
                        },
                      }}
                    >
                      <img
                        src={service.icon}
                        alt={service.title}
                        width="400"
                        height="300"
                        loading="lazy"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </MKBox>
                    <MKTypography variant="h5" fontWeight="bold" mb={2} color="dark">
                      {service.title}
                    </MKTypography>
                    <MKTypography variant="body2" color="text" mb={3}>
                      {service.description}
                    </MKTypography>
                    <MKTypography
                      variant="button"
                      fontWeight="bold"
                      sx={{
                        color: service.color,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      Lihat Detail →
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </MKBox>

      {/* Information Section - Full Width */}
      <MKBox ref={benefitRef}>
        <Information />
      </MKBox>

      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: 4,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <div ref={tentangKamiRef}>
          <Container sx={{ mt: 6 }}>
            <Suspense
              fallback={
                <MKBox py={6} textAlign="center">
                  <MKTypography variant="body2">Loading...</MKTypography>
                </MKBox>
              }
            >
              <BuiltByDevelopers />
            </Suspense>
          </Container>
        </div>

        <div ref={produkRef}>
          <Suspense
            fallback={
              <MKBox py={6} textAlign="center">
                <MKTypography variant="body2">Loading...</MKTypography>
              </MKBox>
            }
          >
            <DesignBlocks />
          </Suspense>
        </div>

        {/* Proses Kerja Section */}
        <Container
          ref={prosesRef}
          sx={{
            mt: 8,
            mb: 8,
          }}
        >
          <Grid container spacing={3} mb={6}>
            <Grid item xs={12} textAlign="center">
              <MKTypography variant="h2" mb={2} fontWeight="bold">
                Proses Kerja Kami
              </MKTypography>
              <MKTypography variant="body1" color="text" mb={4}>
                Kami memastikan setiap project dikerjakan dengan profesional dan tepat waktu
              </MKTypography>
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            {[
              {
                step: "01",
                title: "Konsultasi & Survey",
                description:
                  "Tim kami akan datang untuk survey lokasi dan konsultasi kebutuhan Anda secara GRATIS",
                icon: <CallIcon />,
                color: "#2196F3",
              },
              {
                step: "02",
                title: "Desain & Estimasi",
                description:
                  "Kami memberikan desain dan estimasi biaya yang transparan sesuai budget Anda",
                icon: <DesignServicesIcon />,
                color: "#4CAF50",
              },
              {
                step: "03",
                title: "Pengerjaan",
                description:
                  "Pengerjaan dilakukan oleh tukang las berpengalaman dengan material berkualitas",
                icon: <EngineeringIcon />,
                color: "#FF9800",
              },
              {
                step: "04",
                title: "Quality Check",
                description: "Pengecekan kualitas dan finishing untuk memastikan hasil maksimal",
                icon: <CheckIcon />,
                color: "#9C27B0",
              },
              {
                step: "05",
                title: "Serah Terima",
                description:
                  "Project selesai dengan garansi dan layanan after-sales yang memuaskan",
                icon: <HandshakeIcon />,
                color: "#F44336",
              },
            ].map((process, index) => (
              <Grid item xs={12} md={6} lg={2.4} key={index}>
                <MKBox
                  borderRadius="xl"
                  p={3}
                  textAlign="center"
                  sx={{
                    height: "100%",
                    background: "white",
                    border: "2px solid #f0f0f0",
                    position: "relative",
                    "&:hover": {
                      transform: "translateY(-5px) scale(1.02)",
                      borderColor: process.color,
                      boxShadow: `0 8px 30px ${process.color}40`,
                    },
                  }}
                >
                  {/* Step Number */}
                  <MKBox
                    sx={{
                      position: "absolute",
                      top: -15,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${process.color}, ${process.color}dd)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      boxShadow: `0 4px 15px ${process.color}60`,
                    }}
                  >
                    {process.step}
                  </MKBox>

                  <MKBox
                    sx={{
                      fontSize: "3rem",
                      mt: 3,
                      mb: 2,
                    }}
                  >
                    {process.icon}
                  </MKBox>

                  <MKTypography variant="h6" fontWeight="bold" mb={1.5} color="dark">
                    {process.title}
                  </MKTypography>

                  <MKTypography variant="body2" color="text">
                    {process.description}
                  </MKTypography>
                </MKBox>
              </Grid>
            ))}
          </Grid>

          {/* CTA After Process */}
          <MKBox textAlign="center" mt={6}>
            <MKTypography variant="h5" mb={3} fontWeight="medium">
              Siap Memulai Project Anda?
            </MKTypography>
            <MKBox
              component="a"
              href="https://wa.me/081212154019?text=Halo, saya ingin konsultasi tentang jasa las"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                px: 5,
                py: 2.5,
                borderRadius: "xl",
                background: "linear-gradient(135deg, #2196F3 0%, #1976D2 100%)",
                color: "#ffffff",
                fontWeight: "bold",
                fontSize: "1.1rem",
                textDecoration: "none",
                transition: "all 0.3s",
                boxShadow: "0 4px 15px rgba(33, 150, 243, 0.4)",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 6px 25px rgba(33, 150, 243, 0.6)",
                },
              }}
            >
              <MKBox component="span" mr={1}>
                💬
              </MKBox>
              Konsultasi Gratis Sekarang
            </MKBox>
          </MKBox>
        </Container>

        <div ref={testiRef}>
          <Suspense
            fallback={
              <MKBox py={6} textAlign="center">
                <MKTypography variant="body2">Loading...</MKTypography>
              </MKBox>
            }
          >
            <Testimonials />
          </Suspense>
        </div>

        <div ref={kontakRef}>
          <Suspense
            fallback={
              <MKBox py={6} textAlign="center">
                <MKTypography variant="body2">Loading...</MKTypography>
              </MKBox>
            }
          >
            <Download />
          </Suspense>
        </div>

        {/* Area Layanan Section */}
        <Container
          ref={areaRef}
          sx={{
            mt: 8,
            mb: 6,
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} textAlign="center" mb={4}>
              <MKTypography variant="h2" mb={2}>
                Area Layanan Kami
              </MKTypography>
              <MKTypography variant="body1" color="text">
                Melayani seluruh wilayah Depok, Tangerang Selatan, dan Jakarta Selatan
              </MKTypography>
            </Grid>

            <Grid item xs={12} md={6}>
              <MKBox>
                <MKTypography variant="h5" mb={3}>
                  Wilayah Layanan
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
                    "Jakarta Selatan",
                    "Tangerang Selatan",
                  ].map((area) => (
                    <Grid item xs={6} md={4} key={area}>
                      <MKBox
                        bgColor="grey-100"
                        borderRadius="md"
                        p={1.5}
                        textAlign="center"
                        sx={{
                          "&:hover": {
                            backgroundColor: "info.main",
                            color: "white",
                            transform: "translateY(-3px) scale(1)",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                          },
                        }}
                      >
                        <MKTypography variant="body2" fontWeight="bold">
                          {area}
                        </MKTypography>
                      </MKBox>
                    </Grid>
                  ))}
                </Grid>
              </MKBox>
            </Grid>

            <Grid item xs={12} md={6}>
              <MKBox>
                <MKTypography variant="h5" mb={3}>
                  Lokasi Bengkel
                </MKTypography>
                <MKBox
                  component="iframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3234567890!2d106.7525!3d-6.3906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjMnMjYuMiJTIDEwNsKwNDUnMDkuMCJF!5e0!3m2!1sen!2sid!4v1234567890"
                  width="100%"
                  height="300"
                  sx={{ border: 0, borderRadius: "lg" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <MKTypography variant="body2" color="text" mt={2}>
                  <strong>Alamat:</strong> JL.BAMBU KUNING RT 006 RW 001 PONDOK PETIR BOJONGSARI
                  KOTA DEPOK
                  <br />
                  <strong>Telepon:</strong>{" "}
                  <a href="tel:081212154019" style={{ color: "inherit" }}>
                    081212154019
                  </a>
                  <br />
                  <strong>Jam Buka:</strong> Senin - Sabtu: 08.00 - 17.00 WIB
                </MKTypography>
              </MKBox>
            </Grid>
          </Grid>
        </Container>
        {/* 
        <div ref={kontakRef}>
          <Suspense fallback={<MKBox py={6} textAlign="center"><MKTypography variant="body2">Loading...</MKTypography></MKBox>}>
            <Download />
          </Suspense>
        </div> */}
      </Card>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>

      <MKBox
        position="fixed"
        bottom={{ xs: "35px", lg: "40px" }}
        right={{ xs: "25px", lg: "50px" }}
        zIndex="1000"
        sx={{
          cursor: "pointer",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.)",
          borderRadius: "50%",
        }}
        onClick={() => window.open("https://wa.me/081212154019", "_blank")}
      >
        <img
          src="/wa.png"
          alt="WhatsApp Logo"
          style={{ width: "60px", height: "60px" }}
          loading="lazy"
        />
      </MKBox>
    </>
  );
}

export default Presentation;
