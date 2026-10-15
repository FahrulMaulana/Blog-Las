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
      items: [
        { name: "Home", href: "/#home" },
        { name: "Produk", href: "/#portfolio" },
        { name: "Kontak", href: "/#kontak" },
      ],
    },
    {
      name: "Layanan Kami :",
      items: [
        { name: "Kanopi", route: "/las-kanopi" },
        { name: "Pagar", route: "/las-pagar" },
        { name: "Tangga", href: "/#portfolio" },
        { name: "Teralis", route: "/las-tralis" },
        { name: "Kusen Alumunium", href: "/#kontak" },
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
          href: "https://www.google.com/maps/search/?api=1&query=JL.Bambu%20Kuning%20RT%20006%20RW%20001%20Pondok%20Petir%20Bojongsari%20Kota%20Depok",
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
