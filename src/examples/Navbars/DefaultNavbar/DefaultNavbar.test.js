import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "assets/theme";
import DefaultNavbar from "./index";

test("navigation avoids viewport layout reads and closes on a desktop breakpoint change", () => {
  const originalWidth = Object.getOwnPropertyDescriptor(window, "innerWidth");
  const width = jest.fn(() => 390);
  Object.defineProperty(window, "innerWidth", { configurable: true, get: width });
  const originalMatchMedia = window.matchMedia;
  const listeners = new Set();
  window.matchMedia = jest.fn(() => ({
    addEventListener: (_, listener) => listeners.add(listener),
    removeEventListener: (_, listener) => listeners.delete(listener),
  }));
  try {
    const { unmount } = render(
      <MemoryRouter><ThemeProvider theme={theme}>
        <DefaultNavbar routes={[{ name: "Kontak", icon: "phone", href: "#kontak" }]} />
      </ThemeProvider></MemoryRouter>
    );
    expect(width).not.toHaveBeenCalled();
    const toggle = screen.getByRole("button", { name: "Buka menu navigasi" });
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    fireEvent(window, new Event("resize"));
    expect(width).not.toHaveBeenCalled();
    // A breakpoint transition closes the menu without querying layout.
    act(() => listeners.forEach((listener) => listener({ matches: true })));
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    unmount();
    expect(listeners.size).toBe(0);
  } finally {
    Object.defineProperty(window, "innerWidth", originalWidth);
    window.matchMedia = originalMatchMedia;
  }
});
