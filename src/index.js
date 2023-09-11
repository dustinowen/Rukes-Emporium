import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "tailwindcss/tailwind.css";
// import { BrowserRouter as Router } from "react-router-dom";
// import Auth0ProviderWithNavigate from "./components/Auth/AuthProvider"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Router>
  // <Auth0ProviderWithNavigate>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // </Auth0ProviderWithNavigate>
  // </Router>
);
