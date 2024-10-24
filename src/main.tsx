import { BrowserRouter } from "react-router-dom";

import "@/styles/globals.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { Provider } from "./provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
