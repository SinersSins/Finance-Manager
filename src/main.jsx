import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { TotalProvider } from "./context/totalContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TotalProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TotalProvider>
  </StrictMode>
);
