import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const appSource = fs.readFileSync(path.join(root, "src", "app", "App.jsx"), "utf8");
const coreDataSource = fs.readFileSync(path.join(root, "api", "routes", "coreData.js"), "utf8");

function section(source, start, end) {
  const startIndex = source.indexOf(start);
  const endIndex = source.indexOf(end, startIndex + start.length);
  assert.ok(startIndex >= 0, `missing section start: ${start}`);
  assert.ok(endIndex > startIndex, `missing section end: ${end}`);
  return source.slice(startIndex, endIndex);
}

function assertOrdered(source, values) {
  let cursor = -1;
  for (const value of values) {
    const next = source.indexOf(value, cursor + 1);
    assert.ok(next > cursor, `missing or out-of-order contract: ${value}`);
    cursor = next;
  }
}

const saveBoundary = section(
  appSource,
  "async function saveLessonModalLessons",
  "async function handleOpenMonthlyRegularLessons"
);
assertOrdered(saveBoundary, [
  "saveLessonModalLessonsWithVerification({",
  "lessonDrafts",
  "onProgress",
  "saveLessons: (expectedLessons) => postJsonWithTimeout(",
  '"/api/lessons/bulk"',
  "readLessons: () => getJsonWithTimeout(",
  '`/api/lessons?verify=lesson-modal-${Date.now()}`',
  "setLessons(filterActiveLessons(persistedLessons))",
  "return verifiedLessons"
]);

const addBoundary = section(appSource, "async function handleAddLesson", "async function handleUpdateLesson");
for (const value of [
  "const lessonsToSave = buildNewLessonModalLessons({",
  "resolveDayKey: getDayKey",
  "resolveLessonColor: getStandardLessonColor",
  "const [lesson] = lessonsToSave",
  "const verifiedLessons = await saveLessonModalLessons(lessonsToSave, onProgress)"
]) {
  assert.ok(addBoundary.includes(value), `missing add contract: ${value}`);
}

const updateBoundary = section(appSource, "async function handleUpdateLesson", "function handleDeleteLesson");
assertOrdered(updateBoundary, [
  "isLessonClosureConversion(editingLesson, formValues.lessonType)",
  "`/api/lessons/closure-preflight?lessonId=",
  "getLessonClosureSourceSnapshot(preflight.lesson)",
  "getLessonClosureRoster(latestSourceLesson, editableStudentIds)",
  "buildUpdatedLessonModalLessons({",
  "resolveDayKey: getDayKey",
  "resolveLessonColor: getStandardLessonColor",
  "await saveLessonModalLessons(lessonsToSave, onProgress)",
  "markGeneratedLessonManualOverride(editingLesson)"
]);

const serverBulkBoundary = section(
  coreDataSource,
  "export async function upsertLessons",
  "export async function syncSpecialLectureLessonStudentSchedule"
);
assertOrdered(serverBulkBoundary, [
  "await assertLessonClosureConversionAllowed(lesson)",
  'upsertRows("lessons"',
  '{ onConflict: "lesson_id" }',
  // 2026-09-19: 수업별 순차 정리(2N 왕복) 대신 묶음 정리 한 번. 규칙은 upsertLesson 의 수업별
  // 정리와 같고 test-lesson-bulk-roster-cleanup 이 동작으로 검사한다.
  'cleanupRemovedLessonStudentsForLessons(savedLessons, "수업 명단에서 제외됨")',
  "return { source: databaseSource, lessons: savedLessons }"
]);

console.log("lesson modal save orchestration and server side-effect boundary passed");
