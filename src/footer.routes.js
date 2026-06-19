// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logo from "assets/images/logo-optimized.webp";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Indian Jaya Las",
    image: logo,
    route: "/",
  },
  socials: [],
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
        { name: "081212154019", href: "https://wa.me/6281212154019" },
        { name: "081380004166", href: "https://wa.me/6281380004166" },
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
        href="https://indianjayalas.com"
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
