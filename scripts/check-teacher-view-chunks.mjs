import assert from "node:assert/strict";
import { readdir, stat } from "node:fs/promises";
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
assert.ok(
  mainBytes <= 949_000,
  `initial main JavaScript exceeded the 0.949 MB 3-7 budget: ${mainBytes.toLocaleString()} bytes`
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
  `teacher view chunk budget passed · main ${(mainBytes / 1000).toFixed(2)} kB · lazy ${expectedLazyChunks.length}/12`
);
