import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import * as atatus from "atatus-spa";

atatus.config("e59dc2c44b3a40e797784b1a09e2457e").install();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

atatus.notify(new Error("Test Atatus Setup"));
