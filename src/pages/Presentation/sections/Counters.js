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
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={15}
              suffix=" Tahun"
              title="Berpengalaman"
              description="Dengan lebih dari 15 tahun pengalaman, kami telah melayani berbagai kebutuhan pelanggan dengan hasil yang memuaskan dan kualitas terbaik."
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={100}
              suffix=".000"
              title="Mulai Dari"
              description="Kami menawarkan layanan dengan harga terjangkau, mulai dari hanya Rp 100.000, tanpa mengurangi kualitas dan ketelitian pengerjaan."
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={3}
              title="Estimasi"
              suffix=" Hari"
              description="Cepat dan tepat waktu! Kami dapat menyelesaikan pekerjaan Anda hanya dalam waktu 3 hari, tergantung pada tingkat kerumitan proyek."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
