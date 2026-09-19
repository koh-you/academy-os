import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/App.jsx";
import { AppErrorBoundary } from "./shared/runtime/AppErrorBoundary.jsx";
import { installGlobalClientErrorHandlers } from "./shared/runtime/clientErrorReporter.js";
import { RuntimeModeBanner } from "./shared/runtime/RuntimeModeBanner.jsx";
import { createCacheOwnerId, resetCacheForAccount } from "./shared/utils/accountScopedCache.js";
import { accountScopedCacheKeys, storageKeys } from "./app/appConfig.js";
import { readStoredTeacherSession } from "./app/useAppSession.js";
import "./app/App.tokens.css";
import "./app/App.css";

installGlobalClientErrorHandlers();

// 계정이 바뀌었으면 이전 계정의 화면 캐시를 지우고 시작한다. React 가 마운트되기 전에
// 해야 useStoredState 가 옛 값을 집어들지 않는다(accountScopedCache.js 참고).
// 주인 식별자는 App 의 계정 전환 effect 와 같은 재료(세션 + 원장이 보는 선생님)로
// 같은 함수가 만든다. 다르게 만들면 매 로드마다 서로의 캐시를 지운다.
function storedViewTenantId() {
  try {
    const raw = window.localStorage.getItem(storageKeys.viewTenantId);
    return raw ? String(JSON.parse(raw) ?? "") : "";
  } catch {
    return "";
  }
}

if (typeof window !== "undefined") {
  const storedSession = readStoredTeacherSession({
    documentTarget: document,
    storageKey: storageKeys.teacherSession,
    windowTarget: window
  });
  const cacheOwnerId = createCacheOwnerId({
    teacherId: storedSession?.teacherId,
    teacherRole: storedSession?.teacherRole,
    viewTenantId: storedViewTenantId()
  });
  resetCacheForAccount(window.localStorage, cacheOwnerId, accountScopedCacheKeys);
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RuntimeModeBanner />
    <AppErrorBoundary>
      <App />
    </AppErrorBoundary>
  </React.StrictMode>
);
