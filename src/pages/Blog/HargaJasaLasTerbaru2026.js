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

function HargaJasaLasTerbaru2026() {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/6281212154019?text=Halo, saya ingin konsultasi tentang harga jasa las",
      "_blank"
    );
  };

  return (
    <>
      <Helmet>
        <title>Estimasi Biaya Jasa Las & Satuan Harga | Indian Jaya Las</title>
        <meta
          name="description"
          content="Panduan estimasi anggaran kanopi dan pagar: pahami satuan m dan m², spesifikasi material, finishing, serta data untuk penawaran setelah survei."
        />
        <meta
          name="keywords"
          content="harga jasa las 2026, harga kanopi per meter, harga pagar besi, harga tralis, biaya las stainless"
        />
        <link rel="canonical" href="https://indianjayalas.com/blog/harga-jasa-las-terbaru-2026" />

        <meta property="og:title" content="Estimasi Biaya Jasa Las: Satuan dan Spesifikasi" />
        <meta
          property="og:description"
          content="Kisaran anggaran awal, satuan pengukuran, serta faktor penawaran jasa las."
        />
        <meta property="og:url" content="https://indianjayalas.com/blog/harga-jasa-las-terbaru-2026" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Estimasi Biaya Jasa Las: Satuan dan Spesifikasi",
            author: {
              "@type": "Organization",
              name: "Indian Jaya Las",
            },
            datePublished: "2026-01-09",
            dateModified: "2026-01-09",
            publisher: {
              "@type": "Organization",
              name: "Indian Jaya Las",
              logo: {
                "@type": "ImageObject",
                url: "https://indianjayalas.com/logo.jpg",
              },
            },
          })}
        </script>
      </Helmet>

      <DefaultNavbar
        brand="Indian Jaya Las"
        routes={[
          { name: "Beranda", route: "/" },
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
            <MKTypography
              variant="h1"
              color="white"
              textAlign="center"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: { fontSize: size["3xl"] },
              })}
            >
              Estimasi Biaya Jasa Las: Satuan dan Spesifikasi
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={2}
            >
              Panduan Anggaran Awal untuk Kanopi dan Pagar
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>

      <Card sx={{ p: 2, mx: { xs: 2, lg: 3 }, mt: -8, mb: 4 }}>
        <Container>
          <Grid container spacing={3} sx={{ mt: 6 }}>
            <Grid item xs={12} lg={8}>
              <MKTypography variant="body2" color="text" mb={2}>
                <em>Dipublish: 9 Januari 2026 | Kategori: Harga & Tips</em>
              </MKTypography>

              <MKTypography variant="body1" color="text" mb={3}>
                Angka di bawah adalah kisaran estimasi untuk membantu diskusi anggaran, bukan
                daftar harga final atau bukti pembaruan harga pasar. Penawaran bergantung pada
                ukuran, spesifikasi, kondisi lokasi, dan hasil survei. Pastikan material, pemasangan,
                pengiriman, pembongkaran, serta finishing dijelaskan dalam penawaran tertulis.
              </MKTypography>

              <MKTypography variant="h3" mb={2}>
                Estimasi Kanopi per m²
              </MKTypography>

              <MKTypography variant="body1" color="text" mb={2}>
                Untuk kanopi, m² menunjukkan luas panjang × lebar, bukan panjang saja.
                Samakan jenis dan ketebalan atap serta rangka sebelum membandingkan kisaran berikut:
              </MKTypography>

              <MKBox
                component="table"
                width="100%"
                sx={{
                  border: "1px solid #ddd",
                  borderCollapse: "collapse",
                  "& td, & th": { border: "1px solid #ddd", padding: "12px" },
                  "& th": { backgroundColor: "#f8f9fa" },
                }}
                mb={3}
              >
                <thead>
                  <tr>
                    <th>
                      <MKTypography variant="body2" fontWeight="bold">
                        Jenis Kanopi
                      </MKTypography>
                    </th>
                    <th>
                      <MKTypography variant="body2" fontWeight="bold">
                        Estimasi per m²
                      </MKTypography>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <MKTypography variant="body2">Kanopi Baja Ringan + Alderon</MKTypography>
                    </td>
                    <td>
                      <MKTypography variant="body2">Rp 350.000 - Rp 450.000</MKTypography>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <MKTypography variant="body2">Kanopi Hollow + Spandek</MKTypography>
                    </td>
                    <td>
                      <MKTypography variant="body2">Rp 280.000 - Rp 380.000</MKTypography>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <MKTypography variant="body2">Kanopi Polycarbonate</MKTypography>
                    </td>
                    <td>
                      <MKTypography variant="body2">Rp 450.000 - Rp 600.000</MKTypography>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <MKTypography variant="body2">Kanopi Baja Ringan + Galvalum</MKTypography>
                    </td>
                    <td>
                      <MKTypography variant="body2">Rp 300.000 - Rp 400.000</MKTypography>
                    </td>
                  </tr>
                </tbody>
              </MKBox>

              <MKTypography variant="h3" mb={2}>
                Estimasi Pagar — Konfirmasikan Satuan
              </MKTypography>

              <MKBox
                component="table"
                width="100%"
                sx={{
                  border: "1px solid #ddd",
                  borderCollapse: "collapse",
                  "& td, & th": { border: "1px solid #ddd", padding: "12px" },
                  "& th": { backgroundColor: "#f8f9fa" },
                }}
                mb={3}
              >
                <thead>
                  <tr>
                    <th>
                      <MKTypography variant="body2" fontWeight="bold">
                        Jenis Pagar
                      </MKTypography>
                    </th>
                    <th>
                      <MKTypography variant="body2" fontWeight="bold">
                        Estimasi (satuan dikonfirmasi)
                      </MKTypography>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <MKTypography variant="body2">Pagar Hollow Minimalis</MKTypography>
                    </td>
                    <td>
                      <MKTypography variant="body2">Rp 250.000 - Rp 350.000</MKTypography>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <MKTypography variant="body2">Pagar Besi Tempa</MKTypography>
                    </td>
                    <td>
                      <MKTypography variant="body2">Rp 400.000 - Rp 600.000</MKTypography>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <MKTypography variant="body2">Pagar Kombinasi</MKTypography>
                    </td>
                    <td>
                      <MKTypography variant="body2">Rp 350.000 - Rp 500.000</MKTypography>
                    </td>
                  </tr>
                </tbody>
              </MKBox>

              <MKTypography variant="h3" mb={2}>Siapkan Pertanyaan untuk Penawaran</MKTypography>
              <MKTypography variant="body1" color="text" mb={3}>
                Tanyakan ukuran profil dan ketebalan material, pilihan atap serta talang untuk
                kanopi, sistem buka pagar, lapisan antikarat, dan cat akhir. Kirim ukuran awal,
                foto tumpuan atau tiang, contoh model, alamat, dan kondisi akses melalui WhatsApp.
                Workshop berada di Pondok Petir, Bojongsari; lihat informasi kunjungan untuk{" "}
                <Link to="/jasa-las-depok">Depok</Link> dan{" "}
                <Link to="/jasa-las-pamulang">Pamulang</Link>. Jadwal serta biaya survei dikonfirmasi dahulu.
              </MKTypography>

              <MKTypography variant="h3" mb={2}>
                Faktor yang Mempengaruhi Harga
              </MKTypography>

              <MKBox component="ol" sx={{ pl: 3 }} mb={3}>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    <strong>Jenis Material</strong> - Material premium seperti stainless atau
                    polycarbonate lebih mahal
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    <strong>Ukuran & Kompleksitas</strong> - Desain rumit dan ukuran besar
                    memerlukan biaya lebih
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    <strong>Lokasi Pemasangan</strong> - Area yang sulit dijangkau bisa menambah
                    biaya
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    <strong>Finishing</strong> - Cat anti karat dan finishing khusus menambah harga
                  </MKTypography>
                </li>
              </MKBox>

              <MKTypography variant="h3" mb={2}>
                Tips Menghemat Budget Las
              </MKTypography>

              <MKBox component="ul" sx={{ pl: 3 }} mb={3}>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    Pilih material sesuai kebutuhan dan budget
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    Bandingkan harga dari beberapa bengkel las
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    Pastikan biaya survei, pemasangan, dan pengiriman tercantum
                  </MKTypography>
                </li>
                <li>
                  <MKTypography variant="body1" mb={1}>
                    Bandingkan penawaran dengan dimensi, ketebalan, dan finishing yang sama
                  </MKTypography>
                </li>
              </MKBox>

              <MKBox bgColor="info" borderRadius="lg" p={3} mt={4}>
                <MKTypography variant="h5" color="white" mb={2}>
                  Konsultasi Gratis!
                </MKTypography>
                <MKTypography variant="body2" color="white" mb={2}>
                  Kirim ukuran awal, foto lokasi, pilihan model, dan alamat untuk membahas estimasi bersyarat.
                </MKTypography>
                <MKButton color="success" onClick={handleWhatsApp}>
                  Chat WhatsApp
                </MKButton>
              </MKBox>

              <MKBox
                mt={4}
                p={3}
                sx={{ backgroundColor: "#f8f9fa", borderLeft: "4px solid #1976d2" }}
              >
                <MKTypography variant="body2" color="text">
                  <strong>Catatan:</strong> Kisaran bukan penawaran mengikat. Untuk pagar, konfirmasikan apakah biaya per
                  m panjang dengan tinggi tertentu atau per m² bidang. Untuk penawaran yang dapat
                  dibandingkan, minta rincian profil, ketebalan, engsel atau rel, finishing, serta
                  lingkup kerja setelah survei.
                </MKTypography>
              </MKBox>
            </Grid>

            <Grid item xs={12} lg={4}>
              <MKBox
                bgColor="white"
                borderRadius="lg"
                p={3}
                sx={{ border: "2px solid #e0e0e0", position: "sticky", top: 100 }}
              >
                <MKTypography variant="h6" mb={2}>
                  Artikel Terkait
                </MKTypography>
                <MKBox
                  component={Link}
                  to="/las-pagar"
                  sx={{ textDecoration: "none" }}
                >
                  <MKTypography variant="body2" color="info" mb={2}>
                    → Spesifikasi Pagar dan Persiapan Penawaran
                  </MKTypography>
                </MKBox>
                <MKBox
                  component={Link}
                  to="/las-panggilan"
                  sx={{ textDecoration: "none" }}
                >
                  <MKTypography variant="body2" color="info" mb={2}>
                    → Penilaian Kebutuhan Perbaikan Las
                  </MKTypography>
                </MKBox>
                <MKBox component={Link} to="/las-kanopi" sx={{ textDecoration: "none" }}>
                  <MKTypography variant="body2" color="info">
                    → Lihat Layanan Las Kanopi Kami
                  </MKTypography>
                </MKBox>
              </MKBox>
            </Grid>
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

export default HargaJasaLasTerbaru2026;
