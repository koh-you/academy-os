// 출결 태블릿(attendance.html) 전용 진입점.
// 교사용 App.jsx 를 import 하지 않는 것이 이 파일의 존재 이유다 — 그래야 태블릿이
// 앱 전체가 아니라 출결 화면만 내려받는다. 여기에 교사 화면을 import 하지 말 것.
import React from "react";
import { createRoot } from "react-dom/client";
import { AttendanceKioskApp } from "./kiosk/AttendanceKioskApp.jsx";
import { AppErrorBoundary } from "./shared/runtime/AppErrorBoundary.jsx";
import { installGlobalClientErrorHandlers } from "./shared/runtime/clientErrorReporter.js";
import { enableKioskDeviceToken } from "./shared/utils/apiClient.js";
import "./app/App.tokens.css";
// 교사용 통짜 App.css(400 KB) 대신 출결 화면에 실제로 닿는 규칙만 받는다(10 KB).
// attendanceKiosk.css 는 App.css 에서 셀렉터 기준으로 뽑아낸 생성물이다 —
// 직접 고치지 말고 `node scripts/build-kiosk-css.mjs` 로 다시 만든다.
// 여기서 App.css 를 import 하면 분리가 원상복구된다(test:kiosk-css-sync 가 막는다).
import "./kiosk/attendanceKiosk.css";

installGlobalClientErrorHandlers();
// 이 진입점만 X-Kiosk-Token 을 보낸다. 교사 앱은 보내지 않는다(apiClient.js 참고).
enableKioskDeviceToken();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppErrorBoundary>
      <AttendanceKioskApp />
    </AppErrorBoundary>
  </React.StrictMode>
);
