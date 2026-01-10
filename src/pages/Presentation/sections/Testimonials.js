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

import { useEffect, useRef, useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Information() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px 200px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const testimonials = [
    {
      name: "Ujang Suryana",
      role: "Pemilik Rumah",
      date: "1 minggu yang lalu",
      review:
        "Bengkel Las India Jaya selalu memberikan hasil yang memuaskan. Saya sering memesan berbagai produk las dari mereka, dan setiap kali hasilnya selalu bagus. Terakhir, saya memesan pagar dan sangat puas dengan kekokohan serta desainnya. Harganya juga terjangkau untuk kualitas yang diberikan. Sangat merekomendasikan bengkel ini!",
      rating: 5,
      avatar: "👨",
      color: "#2196F3",
    },
    {
      name: "Bagus Subakir",
      role: "Kontraktor",
      date: "1 bulan yang lalu",
      review:
        "Sudah lebih dari 15 tahun Bengkel Las India Jaya ada di sekitar sini, dan saya sudah sering memesan berbagai produk las dari mereka. Teralis yang saya pesan terakhir ini sangat kuat dan desainnya elegan. Harganya juga terjangkau untuk kualitas yang diberikan. Saya tidak ragu merekomendasikan mereka ke teman-teman saya!",
      rating: 5,
      avatar: "👨‍💼",
      color: "#4CAF50",
    },
    {
      name: "Rahmat Hidayat",
      role: "Pengusaha",
      date: "1 minggu yang lalu",
      review:
        "Layanan dari India Jaya benar-benar luar biasa! Saya membuat kanopi untuk garasi, dan hasilnya lebih dari ekspektasi. Timnya sangat profesional, ramah, dan detail dalam pekerjaannya. Saya sudah menjadi pelanggan setia selama bertahun-tahun, dan mereka selalu konsisten memberikan hasil terbaik. Terima kasih, India Jaya!",
      rating: 5,
      avatar: "👔",
      color: "#FF9800",
    },
    {
      name: "Agus Setiawan",
      role: "Developer Property",
      date: "3 minggu yang lalu",
      review:
        "Saya sangat puas dengan hasil kerja Bengkel Las India Jaya. Saya memesan pagar untuk rumah, dan hasilnya sangat rapi serta kokoh. Proses pengerjaannya juga cepat, dan mereka sangat komunikatif dalam menyesuaikan desain sesuai keinginan saya. Lokasinya strategis di Pondok Petir, jadi mudah diakses. Highly recommended!",
      rating: 5,
      avatar: "🏗️",
      color: "#9C27B0",
    },
  ];

  return (
    <MKBox
      ref={sectionRef}
      component="section"
      py={10}
      sx={{
        background: "linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <Container>
        {/* Header Section */}
        <Grid
          container
          item
          xs={12}
          lg={8}
          justifyContent="center"
          sx={{
            mx: "auto",
            textAlign: "center",
            mb: 8,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(-20px)",
            transition: "all 0.5s ease-out",
          }}
        >
          {/* <MKBox
            display="inline-block"
            bgColor="info"
            color="white"
            borderRadius="lg"
            px={2}
            py={0.5}
            mb={2}
            sx={{ opacity: 0.9 }}
          >
            <MKTypography variant="button" color="white" fontWeight="bold">
              asdTESTIMONI
            </MKTypography>
          </MKBox> */}

          <MKTypography
            variant="h2"
            fontWeight="bold"
            mb={1}
            sx={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "scale(1)" : "scale(0.95)",
              transition: "all 0.3s ease-out 0.1s",
            }}
          >
            Apa Kata Mereka?
          </MKTypography>

          {/* <MKTypography variant="h4" mb={2}>
            Telah Dipercaya Oleh{" "}
            <MKTypography
              component="span"
              variant="h4"
              sx={{
                background: "linear-gradient(135deg, #2196F3 0%, #1976D2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bold",
              }}
            >
              2.000+ Customer
            </MKTypography>
          </MKTypography> */}

          <MKTypography
            variant="body1"
            color="text"
            sx={{
              opacity: isVisible ? 1 : 0,
              transition: "opacity 0.3s ease-out 0.15s",
            }}
          >
            Selama pengalaman 15 tahun ini kami telah mengerjakan berbagai macam project dan
            melayani lebih dari 2000+ customer dengan hasil yang memuaskan.
          </MKTypography>
        </Grid>

        {/* Testimonials Grid */}
        <Grid
          container
          spacing={3}
          sx={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.4s ease-out 0.2s",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
              <MKBox
                borderRadius="2xl"
                p={4}
                sx={{
                  background: "white",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.08)",
                  position: "relative",
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: `linear-gradient(90deg, ${testimonial.color}, ${testimonial.color}dd)`,
                  },
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 50px rgba(0,0,0,0.12)",
                  },
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(-15px)",
                  transition: `all 0.4s ease-out ${
                    0.25 + index * 0.08
                  }s, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)`,
                }}
              >
                {/* Quote Icon */}
                <MKBox
                  sx={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    fontSize: "4rem",
                    color: testimonial.color,
                    opacity: 0.1,
                    fontWeight: "bold",
                  }}
                >
                  &quot;
                </MKBox>

                {/* Rating Stars */}
                <MKBox display="flex" gap={0.5} mb={2}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} sx={{ color: "#FFD700", fontSize: "1.5rem" }}>
                      star
                    </Icon>
                  ))}
                </MKBox>

                {/* Review Text */}
                <MKTypography
                  variant="body1"
                  color="text"
                  mb={3}
                  sx={{
                    lineHeight: 1.8,
                    fontStyle: "italic",
                    flex: 1,
                  }}
                >
                  &quot;{testimonial.review}&quot;
                </MKTypography>

                {/* Reviewer Info */}
                <MKBox display="flex" alignItems="center" gap={2}>
                  {/* Avatar */}
                  <MKBox
                    sx={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${testimonial.color}, ${testimonial.color}dd)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2rem",
                      boxShadow: `0 4px 15px ${testimonial.color}40`,
                    }}
                  >
                    {testimonial.avatar}
                  </MKBox>

                  {/* Name and Date */}
                  <MKBox>
                    <MKTypography variant="h6" fontWeight="bold" mb={0.5}>
                      {testimonial.name}
                    </MKTypography>
                    <MKTypography
                      variant="button"
                      color={testimonial.color}
                      fontWeight="medium"
                      display="block"
                    >
                      {testimonial.role}
                    </MKTypography>
                    <MKTypography variant="caption" color="text">
                      {testimonial.date}
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Grid>
          ))}
        </Grid>

        {/* Trust Badges */}
        {/* <MKBox mt={8} textAlign="center">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={6} md={3}>
              <MKBox
                p={3}
                borderRadius="xl"
                sx={{
                  background: "white",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  transition: "all 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <MKTypography variant="h2" fontWeight="bold" color="info" mb={1}>
                  15+
                </MKTypography>
                <MKTypography variant="body2" color="text" fontWeight="medium">
                  Tahun Pengalaman
                </MKTypography>
              </MKBox>
            </Grid>
            <Grid item xs={6} md={3}>
              <MKBox
                p={3}
                borderRadius="xl"
                sx={{
                  background: "white",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  transition: "all 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <MKTypography variant="h2" fontWeight="bold" color="success" mb={1}>
                  2000+
                </MKTypography>
                <MKTypography variant="body2" color="text" fontWeight="medium">
                  Pelanggan Puas
                </MKTypography>
              </MKBox>
            </Grid>
            <Grid item xs={6} md={3}>
              <MKBox
                p={3}
                borderRadius="xl"
                sx={{
                  background: "white",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  transition: "all 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <MKTypography variant="h2" fontWeight="bold" color="warning" mb={1}>
                  4.9
                </MKTypography>
                <MKTypography variant="body2" color="text" fontWeight="medium">
                  Rating Google
                </MKTypography>
              </MKBox>
            </Grid>
            <Grid item xs={6} md={3}>
              <MKBox
                p={3}
                borderRadius="xl"
                sx={{
                  background: "white",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  transition: "all 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <MKTypography variant="h2" fontWeight="bold" color="error" mb={1}>
                  100%
                </MKTypography>
                <MKTypography variant="body2" color="text" fontWeight="medium">
                  Garansi Kualitas
                </MKTypography>
              </MKBox>
            </Grid>
          </Grid>
        </MKBox> */}
      </Container>
    </MKBox>
  );
}

export default Information;
