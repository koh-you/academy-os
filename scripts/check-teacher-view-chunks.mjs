import assert from "node:assert/strict";
import { readdir, stat } from "node:fs/promises";
import { resolve } from "node:path";

const assetsDirectory = resolve("dist", "assets");
const assetNames = await readdir(assetsDirectory);
const mainJavaScript = assetNames.find((name) => /^main-[^.]+\.js$/.test(name));
assert.ok(mainJavaScript, "production build must emit one hashed main JavaScript entry");

const mainBytes = (await stat(resolve(assetsDirectory, mainJavaScript))).size;
// 947.5 KB: raised from 946 KB for the 시험지 목록 tab wiring (models/actions +
// TeacherViewOutlet materials props). The panel, model and unit catalogue all
// live in the lazy LearningSupportCenters chunk; only the adapter plumbing adds
// to main. Deliberate, diff-visible bump.
assert.ok(
  mainBytes <= 947_500,
  `initial main JavaScript exceeded the 0.9475 MB 3-7 budget: ${mainBytes.toLocaleString()} bytes`
);

const expectedLazyChunks = [
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
