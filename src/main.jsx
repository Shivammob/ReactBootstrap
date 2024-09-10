import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/style.scss";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);
