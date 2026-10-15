import React from "react";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "assets/theme";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import DesignBlocks from "./sections/DesignBlocks";
import BuiltByDevelopers from "./components/BuiltByDevelopers";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import { fireEvent } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import Presentation from "./index";

test("homepage exposes map directions without waiting and floating contact is a real link", async () => {
  window.innerWidth = 1280;
  renderSite(<HelmetProvider><Presentation /></HelmetProvider>);
  const maps = screen.getByRole("link", { name: "Buka alamat bengkel di Google Maps" });
  expect(maps.href).toContain("https://www.google.com/maps/search/?api=1&query=");
  expect(decodeURIComponent(maps.href)).toContain("Pondok Petir Bojongsari Kota Depok");
  expect(screen.queryByText("Loading map...")).not.toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Chat WhatsApp Indian Jaya" })).toHaveAttribute("href", "https://wa.me/6281212154019");
  expect(await screen.findByRole("heading", { name: "Tentang Kami", level: 2 })).toBeInTheDocument();
});

test("about uses a section heading and consistent business name", () => {
  renderSite(<BuiltByDevelopers />);
  expect(screen.getByRole("heading", { level: 2, name: "Tentang Kami" })).toBeInTheDocument();
  expect(screen.getByText(/Bengkel Las Indian Jaya adalah/)).toBeInTheDocument();
});

test("mobile navigation is keyboard operable, announces state and closes after selection", () => {
  window.innerWidth = 390;
  renderSite(<DefaultNavbar routes={[{ name: "Kontak", href: "#kontak" }]} />);
  const toggle = screen.getByRole("button", { name: "Buka menu navigasi" });
  expect(toggle).toHaveAttribute("aria-expanded", "false");
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute("aria-expanded", "true");
  fireEvent.click(within(document.getElementById("mobile-navigation")).getByRole("link", { name: "Kontak" }));
  expect(toggle).toHaveAttribute("aria-expanded", "false");
  fireEvent.click(toggle);
  fireEvent.keyDown(toggle, { key: "Escape" });
  expect(toggle).toHaveAttribute("aria-expanded", "false");
});

test("portfolio photos have descriptions and open the actual image instead of home", () => {
  renderSite(<DesignBlocks />);
  const photo = screen.getByRole("img", { name: "Contoh produk Kanopi Indian Jaya 1" });
  expect(photo.closest("a")).toHaveAttribute("href", photo.getAttribute("src"));
  expect(photo.closest("a")).not.toHaveAttribute("href", "/");
  for (const image of screen.getAllByRole("img")) {
    expect(image).not.toHaveAttribute("alt", "");
  }
});

function renderSite(ui) {
  return render(<MemoryRouter><ThemeProvider theme={theme}>{ui}</ThemeProvider></MemoryRouter>);
}

test("footer navigation and workshop address lead to useful destinations", () => {
  renderSite(<DefaultFooter content={footerRoutes} />);
  expect(screen.getByRole("link", { name: "Produk" })).toHaveAttribute("href", "/#portfolio");
  expect(screen.getByRole("link", { name: "Kanopi" })).toHaveAttribute("href", "/las-kanopi");
  const address = screen.getByRole("link", { name: /JL.Bambu Kuning/i });
  expect(address.href).toBe("https://www.google.com/maps/search/?api=1&query=JL.Bambu%20Kuning%20RT%20006%20RW%20001%20Pondok%20Petir%20Bojongsari%20Kota%20Depok");
  for (const label of ["Home", "Kontak", "Pagar", "Tangga", "Teralis", "Kusen Alumunium"]) {
    expect(screen.getByRole("link", { name: label })).toHaveAttribute("href");
  }
});
