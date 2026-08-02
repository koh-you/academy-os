import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [appSource, registrySource, hubSource, detailSource, panelsSource] = await Promise.all([
  readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/app/lazyTeacherViewComponents.js", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/lessons/TeacherLessonHubV2.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/lessons/LessonJournalDetail.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/lessons/LessonNestedPanels.jsx", import.meta.url), "utf8")
]);

for (const componentName of ["PreparationMemoModal", "SupplementMakeupLessonDetail"]) {
  assert.equal(panelsSource.includes(`export function ${componentName}(`), true);
  assert.equal(appSource.includes(`function ${componentName}(`), false);
  assert.equal(registrySource.includes('() => import("../domains/lessons/LessonNestedPanels.jsx")'), true);
  assert.equal(registrySource.includes(`"${componentName}"`), true);
}

const runtimeMatch = appSource.match(/const lessonNestedPanelRuntime = Object\.freeze\(\{([\s\S]*?)\n\}\);/);
assert.ok(runtimeMatch, "nested lesson panel runtime must remain App-owned");
const runtimeKeys = runtimeMatch[1].split(",").map((value) => value.trim()).filter(Boolean).sort();
assert.deepEqual(runtimeKeys, [
  "createEmptyRecord",
  "createLessonStudentRecordId",
  "findLessonStudentRecord",
  "followUpTypeLabel",
  "formatKoreaTimeLabel",
  "formatKoreanDateTime",
  "getActiveLessonStudents",
  "getLessonContent",
  "getLessonHomework",
  "getSaveButtonLabel",
  "getSupplementScheduleChangeDetailSeed",
  "getSupplementTaskSourceLabel",
  "normalizeTimeInput"
].sort());

for (const source of [hubSource, detailSource]) {
  assert.equal(source.includes("nestedPanels,"), true);
  assert.equal(source.includes("runtime={nestedPanels}"), true);
}
assert.equal(appSource.includes("PreparationMemoModal: lazyTeacherViewComponents.PreparationMemoModal"), true);
assert.equal(appSource.includes("SupplementMakeupLessonDetail: lazyTeacherViewComponents.SupplementMakeupLessonDetail"), true);
assert.equal(appSource.includes("nestedPanels: lessonNestedPanelRuntime"), true);
assert.equal(panelsSource.includes("onScheduleTask({"), true);
assert.equal(panelsSource.includes("onPassTask({"), true);
assert.equal(panelsSource.includes("onSaveRecord(recordId, lesson, student"), true);
assert.equal(panelsSource.includes("skipNotificationRefresh: true"), true);

for (const forbidden of [
  'from "../../app/App.jsx"',
  'from "../../app/TeacherViewOutlet.js"',
  "fetch(",
  "postJson",
  "localStorage",
  "Supabase",
  '"/api/'
]) {
  assert.equal(panelsSource.includes(forbidden), false, `nested lesson panels must not own ${forbidden}`);
}

console.log("nested lesson panel runtime, persistence callback, and lazy boundary fixtures passed");
