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

// @mui material components
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultFooter from "examples/Footers/DefaultFooter";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Download from "pages/Presentation/sections/Download";
import Information from "pages/Presentation/sections/Information";
import Testimonials from "pages/Presentation/sections/Testimonials";

// Routes
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/las.jpg";
import BuiltByDevelopers from "./components/BuiltByDevelopers";
import React, { useRef } from "react";

function Presentation() {
  const homeRef = useRef(null);
  const benefitRef = useRef(null);
  const tentangKamiRef = useRef(null);
  const produkRef = useRef(null);
  const kontakRef = useRef(null);
  const testiRef = useRef(null);

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
      <DefaultNavbar
        routes={[
          { name: "Beranda", route: () => handleScroll(homeRef) },
          { name: "Kenapa Kami ?", route: () => handleScroll(benefitRef) },
          { name: "Tentang Kami", route: () => handleScroll(tentangKamiRef) },
          { name: "Produk", route: () => handleScroll(produkRef) },
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

      <MKBox
        ref={homeRef}
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              <br />
              Bengkel Las
              <br />
              Indian Jaya{" "}
            </MKTypography>
            <MKTypography
              variant="body2"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              JL.BAMBU KUNING RT 006 RW 001 PONDOK PETIR BOJONGSARI KOTA DEPOK.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>

      <Card
        // ref={benefitRef}
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <div ref={benefitRef}>
          <Information />
        </div>

        <div ref={tentangKamiRef}>
        <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container>
        </div>


        <div ref={produkRef}>
          <DesignBlocks />
        </div>

        <div ref={testiRef}>
        <Testimonials />
        </div>

        <div ref={kontakRef}>
          <Download />
        </div>
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
        />
      </MKBox>
    </>
  );
}

export default Presentation;
