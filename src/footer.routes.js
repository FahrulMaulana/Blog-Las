// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logo from "assets/images/logo.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Indian Jaya Las",
    image: logo,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      // link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: <TwitterIcon />,
      // link: "https://twitter.com/creativetim",
    },
    {
      icon: <YouTubeIcon />,
      // link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
  menus: [
    {
      name: "Informasi Kami :",
      items: [{ name: "Home" }, { name: "Produk" }, { name: "Kontak" }],
    },
    {
      name: "Layanan Kami :",
      items: [
        { name: "Kanopi" },
        { name: "Pagar" },
        { name: "Tangga" },
        { name: "Teralis" },
        { name: "Kusen Alumuniumium" },
        // { name: "bits & snippets", href: "https://www.creative-tim.com/bits" },
        // { name: "affiliate program", href: "https://www.creative-tim.com/affiliates/new" },
      ],
    },
    {
      name: "Kontak Kami :",
      items: [
        { name: "081212154019", href: "https://wa.me/081212154019" },
        { name: "081380004166", href: "https://wa.me/081380004166" },
      ],
    },
    {
      name: "Alamat",
      items: [
        {
          name: "JL.Bambu Kuning RT 006 RW 001 Pondok Petir Bojongsari Kota Depok.",
          href: "https://www.creative-tim.com/terms",
        },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date}{" "}
      <MKTypography
        component="a"
        // href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Indian Jaya
      </MKTypography>
      .
    </MKTypography>
  ),
};
