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

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";

// Images
import bgBack from "assets/images/rotating-card-bg-back.jpeg";
import bgFront from "assets/images/rotating-card-bg-front.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="phone"
                title={
                  <>
                    Indian jaya
                    <br />
                    081212154019
                  </>
                }
                description="                                                                                          "
              />
              <RotatingCardBack
                image={bgBack}
                title="Hubungi Kami"
                // description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                action={{
                  type: "internal",
                  route: "https://wa.me/081212154019",
                  label: "Klik Disini",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Free Pemasangan"
                  description="Gratis jasa pemasangan produk yang telah dipesan oleh konsumen."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="Free Survey"
                  description="Gratis untuk survei menuju lokasi konsumen dalam mengukur produk yang dipesan
."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Free Ongkir"
                  description="Gratis untuk jasa pengiriman area Jabodetabek."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Free Gambar Kerja"
                  description="Gratis untuk biaya gambar kerja sebagai gambaran produk untuk Konsumen."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
