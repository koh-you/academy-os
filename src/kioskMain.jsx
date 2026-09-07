// 출결 태블릿(attendance.html) 전용 진입점.
// 교사용 App.jsx 를 import 하지 않는 것이 이 파일의 존재 이유다 — 그래야 태블릿이
// 앱 전체가 아니라 출결 화면만 내려받는다. 여기에 교사 화면을 import 하지 말 것.
import React from "react";
import { createRoot } from "react-dom/client";
import { AttendanceKioskApp } from "./kiosk/AttendanceKioskApp.jsx";
import { AppErrorBoundary } from "./shared/runtime/AppErrorBoundary.jsx";
import { installGlobalClientErrorHandlers } from "./shared/runtime/clientErrorReporter.js";
import "./app/App.tokens.css";
// CSS 는 아직 통짜 App.css 다(348 KB). 키오스크 규칙만 떼는 것은 별도 작업으로 남긴다 —
// 줄 번호로 자르면 규칙을 흘리기 쉽고, 공용 프리미티브(.modalCard, .primaryButton 등)까지
// 같이 따라와야 한다. JS 를 먼저 분리해 큰 비용을 걷어내고 CSS 는 그다음에 다룬다.
import "./app/App.css";

installGlobalClientErrorHandlers();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppErrorBoundary>
      <AttendanceKioskApp />
    </AppErrorBoundary>
  </React.StrictMode>
);
