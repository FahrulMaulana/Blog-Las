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

import App from "App";
import { hydrateRoot, createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const container = document.getElementById("root");

if (container.hasChildNodes()) {
  hydrateRoot(
    container,
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
} else {
  createRoot(container).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

// Register service worker for PWA capabilities
// Note: Uncomment after setting up workbox in CRA or migrating to Next.js
// serviceWorkerRegistration.register();
