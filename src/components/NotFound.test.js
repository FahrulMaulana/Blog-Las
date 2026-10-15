/* eslint-env jest, node */
import React from "react";
import { render, screen, waitFor, cleanup } from "@testing-library/react";
import { MemoryRouter, useLocation } from "react-router-dom";
import App from "../App";
import fs from "fs";
import path from "path";

jest.mock("layouts/pages/presentation", () => () => <h1>Home page</h1>);
jest.mock("pages/Locations/LocationPage", () => () => <h1>Location page</h1>);
jest.mock("routes", () => []);

const root = path.resolve(__dirname, "../..");
const config = JSON.parse(fs.readFileSync(path.join(root, "vercel.json"), "utf8"));
const publishedPaths = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"))
  .reactSnap.include;

function CurrentPath() {
  const { pathname, search } = useLocation();
  return <output data-testid="current-url">{pathname + search}</output>;
}

function visit(url) {
  document.scrollingElement = document.documentElement;
  return render(
    <MemoryRouter initialEntries={[url]}>
      <App />
      <CurrentPath />
    </MemoryRouter>
  );
}

afterEach(cleanup);

test.each(["/unknown-page?ref=test", "/jasa-las-unknown", "/blog/missing/article"])(
  "unknown client route %s displays useful 404 without changing URL",
  async (url) => {
    visit(url);
    expect(await screen.findByRole("heading", { name: /halaman tidak ditemukan/i })).toBeTruthy();
    expect(screen.getByTestId("current-url").textContent).toBe(url);
    expect(screen.getByRole("link", { name: /kembali ke beranda/i }).getAttribute("href")).toBe(
      "/"
    );
    expect(screen.getByRole("link", { name: /las kanopi/i }).getAttribute("href")).toBe(
      "/las-kanopi"
    );
    await waitFor(() => {
      expect(document.title).toMatch(/404/);
      expect(document.querySelector('meta[name="robots"]').content).toBe("noindex, follow");
    });
  }
);

test.each(publishedPaths.filter((url) => url.startsWith("/jasa-las-")))(
  "published location %s remains routed to LocationPage",
  async (url) => {
    visit(url);
    expect(await screen.findByRole("heading", { name: "Location page" })).toBeTruthy();
    expect(screen.getByTestId("current-url").textContent).toBe(url);
  }
);

test("static deployment disables CRA's implicit SPA fallback and only rewrites published pages", () => {
  expect(config.framework).toBeNull();
  expect(config.rewrites).toHaveLength(publishedPaths.length - 1);
  expect(config.rewrites.map((rule) => rule.source).sort()).toEqual(
    publishedPaths.filter((url) => url !== "/").sort()
  );
  for (const rule of config.rewrites) {
    expect(rule.destination).toBe(`${rule.source}/index.html`);
  }
});

test("www host permanently redirects every path to non-www without overriding query parameters", () => {
  expect(config.redirects).toEqual([
    {
      source: "/:path*",
      has: [{ type: "host", value: "www.indianjayalas.com" }],
      destination: "https://indianjayalas.com/:path*",
      permanent: true,
    },
  ]);
});

test("native static 404 is useful without JavaScript and cannot be indexed", () => {
  const file = path.join(root, "public/404.html");
  expect(fs.existsSync(file)).toBe(true);
  const html = fs.readFileSync(file, "utf8");
  const document404 = new DOMParser().parseFromString(html, "text/html");
  expect(document404.documentElement.lang).toBe("id");
  expect(document404.title).toMatch(/404/);
  expect(document404.querySelector('meta[name="robots"]').content).toBe("noindex, follow");
  expect(document404.querySelector("h1").textContent).toMatch(/halaman tidak ditemukan/i);
  expect([...document404.querySelectorAll("a")].map((link) => link.getAttribute("href"))).toEqual(
    expect.arrayContaining(["/", "/las-kanopi", "/las-pagar", "/blog"])
  );
  expect(document404.querySelector('meta[http-equiv="refresh"]')).toBeNull();
  expect(document404.querySelector("script")).toBeNull();
});
