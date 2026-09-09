import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/App.jsx";
import { AppErrorBoundary } from "./shared/runtime/AppErrorBoundary.jsx";
import { installGlobalClientErrorHandlers } from "./shared/runtime/clientErrorReporter.js";
import { RuntimeModeBanner } from "./shared/runtime/RuntimeModeBanner.jsx";
import { resetCacheForAccount } from "./shared/utils/accountScopedCache.js";
import { storageKeys } from "./app/appConfig.js";
import "./app/App.tokens.css";
import "./app/App.css";

installGlobalClientErrorHandlers();

// 계정이 바뀌었으면 이전 계정의 화면 캐시를 지우고 시작한다. React 가 마운트되기 전에
// 해야 useStoredState 가 옛 값을 집어들지 않는다(accountScopedCache.js 참고).
function currentTeacherIdFromStorage() {
  try {
    const raw = window.localStorage.getItem(storageKeys.teacherSession);
    return raw ? (JSON.parse(raw)?.teacherId ?? "") : "";
  } catch {
    return "";
  }
}

if (typeof window !== "undefined") {
  const cachedStateKeys = Object.entries(storageKeys)
    .filter(([name]) => name !== "teacherSession")
    .map(([, key]) => key);
  resetCacheForAccount(window.localStorage, currentTeacherIdFromStorage(), cachedStateKeys);
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RuntimeModeBanner />
    <AppErrorBoundary>
      <App />
    </AppErrorBoundary>
  </React.StrictMode>
);
