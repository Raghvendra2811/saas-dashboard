import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ColorModeProvider } from "./theme/themeContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
