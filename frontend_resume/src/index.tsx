import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import IThemeContextProvider from "./context/theme.context";
import { BrowserRouter } from "react-router-dom";
import "./global.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <IThemeContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </IThemeContextProvider>
);
