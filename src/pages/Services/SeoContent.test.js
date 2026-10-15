/* eslint-disable prettier/prettier */
/* eslint-env jest */
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@mui/material/styles";
import theme from "assets/theme";
import LasKanopi from "./LasKanopi";
import LasPagar from "./LasPagar";
import LasTralis from "./LasTralis";
import LasStainless from "./LasStainless";
import LasPanggilan from "./LasPanggilan";
import BlogIndex from "../Blog/BlogIndex";
import Article from "../Blog/HargaJasaLasTerbaru2026";
import LocationPage, { locationData } from "../Locations/LocationPage";

HelmetProvider.canUseDOM = false;

function renderPage(Component, path = "/", location = false) {
  const context = {};
  const html = renderToStaticMarkup(
    <HelmetProvider context={context}>
      <MemoryRouter initialEntries={[path]}><ThemeProvider theme={theme}>
        {location ? <Routes><Route path="/:locationSlug" element={<Component />} /></Routes> : <Component />}
      </ThemeProvider></MemoryRouter>
    </HelmetProvider>
  );
  return { html, metadata: context.helmet };
}

const unavailable = ["harga-kanopi-per-meter-tangerang-selatan", "model-kanopi-minimalis-terbaru", "perbandingan-pagar-besi-vs-hollow", "tips-memilih-tukang-las-profesional"];

test("kanopi connects visitors to the published price guide and blog index", () => {
  const { html } = renderPage(LasKanopi);
  expect(html).toContain('href="/blog/harga-jasa-las-terbaru-2026"');
  expect(html).toContain('href="/blog"');
  expect(html).toContain("Estimasi per m²");
});

test.each([LasKanopi, LasPagar, LasTralis, LasStainless, LasPanggilan])("service %p provides conditional specifications and primary area links", (Component) => {
  const { html, metadata } = renderPage(Component);
  expect(html).toContain('href="/jasa-las-depok"');
  expect(html).toContain('href="/jasa-las-pamulang"');
  expect(html).toMatch(/ketebalan|material/);
  expect(html).toMatch(/survei/);
  expect(html + metadata.title.toString() + metadata.meta.toString() + metadata.script.toString()).not.toMatch(/bersertifikat|bersertifikasi|24 jam|24 Jam|ribuan pelanggan|kualitas terbaik|garansi kualitas/i);
  expect(html).toContain('src="/wa.png"');
  expect(metadata.link.toString()).toContain('rel="canonical"');
});

test("stainless copy does not promise immunity to corrosion in extreme weather", () => {
  const { html } = renderPage(LasStainless);
  expect(html).not.toMatch(/Tidak berkarat meski terkena air|cuaca ekstrem/);
});

test.each([BlogIndex, Article])("published blog content does not advertise unavailable articles", (Component) => {
  const { html } = renderPage(Component);
  unavailable.forEach((slug) => expect(html).not.toContain(`/blog/${slug}`));
});

test.each(Object.keys(locationData))("%s identifies the actual workshop without travel or certification claims", (slug) => {
  const { html, metadata } = renderPage(LocationPage, `/jasa-las-${slug}`, true);
  expect(html).toContain("Pondok Petir");
  expect(html).toContain("Bojongsari");
  expect(html + metadata.meta.toString()).not.toMatch(/30 menit|same-day|bersertifikasi|nomor satu/);
  expect(metadata.script.toString()).toContain("+6281212154019");
  expect(metadata.script.toString()).not.toContain("+628****4019");
});
