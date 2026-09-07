import assert from "node:assert/strict";
import { readdir, stat } from "node:fs/promises";
import { resolve } from "node:path";

const assetsDirectory = resolve("dist", "assets");
const assetNames = await readdir(assetsDirectory);
const mainJavaScript = assetNames.find((name) => /^main-[^.]+\.js$/.test(name));
assert.ok(mainJavaScript, "production build must emit one hashed main JavaScript entry");

const mainBytes = (await stat(resolve(assetsDirectory, mainJavaScript))).size;
// 950 KB: +2,000 bytes over the previous 948 KB cap for the exam prep lesson
// attendance readout (kiosk attendance badges + roster summary). The 948 KB cap
// sat 60 bytes from full, so any main-bundle addition tripped it.
// Previously: 948 KB covered +500 bytes for the blog studio menu, lazy import and view/transport adapter.
// Editor, prompt, import and persistence controller stay in lazy chunks.
assert.ok(
  mainBytes <= 950_000,
  `initial main JavaScript exceeded the 0.950 MB 3-7 budget: ${mainBytes.toLocaleString()} bytes`
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
