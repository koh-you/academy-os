import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/App.jsx";
import { AppErrorBoundary } from "./shared/runtime/AppErrorBoundary.jsx";
import { installGlobalClientErrorHandlers } from "./shared/runtime/clientErrorReporter.js";
import { RuntimeModeBanner } from "./shared/runtime/RuntimeModeBanner.jsx";
import "./app/App.tokens.css";
import "./app/App.css";

installGlobalClientErrorHandlers();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RuntimeModeBanner />
    <AppErrorBoundary>
      <App />
    </AppErrorBoundary>
  </React.StrictMode>
);
