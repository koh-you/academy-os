import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import { resolve } from "node:path";

const assetsDirectory = resolve("dist", "assets");
const assetNames = await readdir(assetsDirectory);
const mainJavaScript = assetNames.find((name) => /^main-[^.]+\.js$/.test(name));
assert.ok(mainJavaScript, "production build must emit one hashed main JavaScript entry");

const mainBytes = (await stat(resolve(assetsDirectory, mainJavaScript))).size;
// 948 KB: +500 bytes for the blog studio menu, lazy import and view/transport adapter.
// Editor, prompt, import and persistence controller stay in lazy chunks.
//
// 2026-09-07 · 949 KB (+1,000): 태블릿별 키오스크 토큰 해석(kioskToken.js, 실측 +624 bytes).
// apiClient 가 main 에 있어야 해서 lazy 청크로 뺄 수 없다. 이 모듈의 부피는 대부분
// localStorage/history 실패 처리인데, 그게 빠지면 태블릿이 토큰을 잃는 경로가 생긴다.
// 직전 baseline 이 947,940 이라 남은 여유가 60 bytes 뿐이었다 — 다음에 main 을 키우는
// 작업은 예산을 또 올리기 전에 lazy 청크로 뺄 수 있는지 먼저 확인할 것.
//
// 2026-09-07 · 760 KB 로 내림: 출결 태블릿을 별도 진입점(kioskMain.jsx)으로 분리하면서
// React 등 공용 코드가 별도 청크로 빠져 main 이 726 KB 로 줄었다. 실측 + 여유 34 KB.
assert.ok(
  mainBytes <= 760_000,
  `initial main JavaScript exceeded the 0.76 MB budget: ${mainBytes.toLocaleString()} bytes`
);

// 출결 태블릿이 받는 JavaScript 총량.
// 태블릿은 번호 4자리만 찍는 화면인데 예전에는 앱 전체(948 KB)를 받고 나서야 첫 화면을
// 그렸다. 진입점을 분리해 걷어냈고, 여기서 다시 커지는 것을 막는다.
const attendanceHtml = await readFile(resolve("dist", "attendance.html"), "utf8");
const attendanceScripts = [...attendanceHtml.matchAll(/\/assets\/([^"']+\.js)/g)].map((match) => match[1]);
assert.ok(attendanceScripts.length > 0, "attendance.html 이 참조하는 JavaScript 를 찾지 못했다");
assert.ok(
  !attendanceScripts.some((name) => /^main-/.test(name)),
  `출결 태블릿이 교사용 main 번들을 받고 있다: ${attendanceScripts.join(", ")}`
);
const attendanceBytes = (
  await Promise.all(attendanceScripts.map((name) => stat(resolve(assetsDirectory, name))))
).reduce((total, entry) => total + entry.size, 0);
assert.ok(
  attendanceBytes <= 260_000,
  `출결 태블릿 JavaScript 가 예산을 넘었다: ${attendanceBytes.toLocaleString()} bytes (${attendanceScripts.join(", ")})`
);

// 출결 태블릿이 받는 CSS 총량.
// JS 를 걷어낸 뒤에도 태블릿은 교사용 통짜 App.css(347 KB)를 그대로 받고 있었다.
// 이제 출결 화면에 실제로 닿는 규칙만 뽑은 attendanceKiosk.css(8 KB)를 받는다.
// kioskMain.jsx 에서 App.css 를 다시 import 하면 여기서 걸린다.
const attendanceStyles = [...attendanceHtml.matchAll(/\/assets\/([^"']+\.css)/g)].map((match) => match[1]);
assert.ok(attendanceStyles.length > 0, "attendance.html 이 참조하는 CSS 를 찾지 못했다");
assert.ok(
  !attendanceStyles.some((name) => /^main-/.test(name)),
  `출결 태블릿이 교사용 main CSS 를 받고 있다: ${attendanceStyles.join(", ")}`
);
const attendanceStyleBytes = (
  await Promise.all(attendanceStyles.map((name) => stat(resolve(assetsDirectory, name))))
).reduce((total, entry) => total + entry.size, 0);
// 실측 9,648 bytes(공용 토큰 1.7 KB + 출결 전용 7.9 KB) + 여유.
assert.ok(
  attendanceStyleBytes <= 16_000,
  `출결 태블릿 CSS 가 예산을 넘었다: ${attendanceStyleBytes.toLocaleString()} bytes (${attendanceStyles.join(", ")})`
);

const expectedLazyChunks = [
  "BlogContentStudio",
  "DashboardAuxiliaryPanels",
  "ExamAnalysisPipelineCenter",
  "ExamPrepCenter",
  "LearningSupportCenters",
  "LessonNestedPanels",
  "PlanningToolCenters",
  "SettingsCenter",
  "NotificationCenter",
  "SettlementWorkspace",
  "StudentManager",
  "SupplementCenter",
  "TeacherLessonHubV2"
];
for (const chunkName of expectedLazyChunks) {
  assert.ok(
    assetNames.some((name) => name.startsWith(`${chunkName}-`) && name.endsWith(".js")),
    `${chunkName} must remain outside the initial main JavaScript entry`
  );
}

console.log(
  `teacher view chunk budget passed · main ${(mainBytes / 1000).toFixed(2)} kB · ` +
  `lazy ${expectedLazyChunks.length} · ` +
  `태블릿 JS ${(attendanceBytes / 1000).toFixed(1)} kB + CSS ${(attendanceStyleBytes / 1000).toFixed(1)} kB`
);
