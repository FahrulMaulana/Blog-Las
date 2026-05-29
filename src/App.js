/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect, lazy, Suspense } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// React Helmet Async
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "components/ErrorBoundary";

// Material Kit 2 React themes
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";

// Lazy load service and blog pages
const LasKanopi = lazy(() => import("pages/Services/LasKanopi"));
const LasPagar = lazy(() => import("pages/Services/LasPagar"));
const LasTralis = lazy(() => import("pages/Services/LasTralis"));
const LasStainless = lazy(() => import("pages/Services/LasStainless"));
const LasPanggilan = lazy(() => import("pages/Services/LasPanggilan"));
const BlogIndex = lazy(() => import("pages/Blog/BlogIndex"));
const HargaJasaLasTerbaru2026 = lazy(() => import("pages/Blog/HargaJasaLasTerbaru2026"));

// Material Kit 2 React routes
import routes from "routes";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ErrorBoundary>
          <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
            <Routes>
              {getRoutes(routes)}
              <Route path="/" element={<Presentation />} />
              <Route path="/las-kanopi" element={<LasKanopi />} />
              <Route path="/las-pagar" element={<LasPagar />} />
              <Route path="/las-tralis" element={<LasTralis />} />
              <Route path="/las-stainless" element={<LasStainless />} />
              <Route path="/las-panggilan" element={<LasPanggilan />} />
              <Route path="/blog" element={<BlogIndex />} />
              <Route
                path="/blog/harga-jasa-las-terbaru-2026"
                element={<HargaJasaLasTerbaru2026 />}
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </ThemeProvider>
    </HelmetProvider>
  );
}
