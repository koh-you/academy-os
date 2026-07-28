import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  createGeneratedLessonFailedStatus,
  createGeneratedLessonSavedStatus,
  createGeneratedLessonSavingStatus
} from "../src/domains/lessons/generatedLessonSaveStatus.js";

const lessons = [
  { lessonId: "lesson_TARGET", marker: "TARGET" },
  { lessonId: "lesson_CONTROL", marker: "CONTROL" }
];
const inputSnapshot = structuredClone(lessons);
const savingStatus = createGeneratedLessonSavingStatus(lessons);
const savedStatus = createGeneratedLessonSavedStatus(lessons);
const failedStatus = createGeneratedLessonFailedStatus(
  lessons,
  "TARGET_ERROR"
);

assert.deepEqual(savingStatus, {
  lessons,
  message: "자동 수업 2건 저장 중...",
  state: "saving"
});
assert.equal(savingStatus.lessons, lessons);
assert.deepEqual(savedStatus, {
  lessons: [],
  message: "자동 수업 2건 저장 완료",
  state: "saved"
});
assert.notEqual(savedStatus.lessons, lessons);
assert.deepEqual(failedStatus, {
  lessons,
  message: "자동 수업 저장 실패 · TARGET_ERROR",
  state: "failed"
});
assert.equal(failedStatus.lessons, lessons);
assert.deepEqual(lessons, inputSnapshot);
assert.deepEqual(createGeneratedLessonSavingStatus(), {
  lessons: [],
  message: "자동 수업 0건 저장 중...",
  state: "saving"
});
assert.deepEqual(createGeneratedLessonSavedStatus(), {
  lessons: [],
  message: "자동 수업 0건 저장 완료",
  state: "saved"
});
assert.deepEqual(createGeneratedLessonFailedStatus(), {
  lessons: [],
  message: "자동 수업 저장 실패 · ",
  state: "failed"
});

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const helperSource = await readFile(
  new URL(
    "../src/domains/lessons/generatedLessonSaveStatus.js",
    import.meta.url
  ),
  "utf8"
);
for (const appBoundary of [
  'from "../domains/lessons/generatedLessonSaveStatus.js"',
  "setGeneratedLessonSaveStatus(",
  "createGeneratedLessonSavingStatus(lessonsToSave)",
  "postJsonWithTimeout(",
  "createGeneratedLessonSavedStatus(lessonsToSave)",
  ".catch((error)",
  "createGeneratedLessonFailedStatus(lessonsToSave, error.message)"
]) {
  assert.ok(
    appSource.includes(appBoundary),
    `missing App-owned generated lesson status boundary: ${appBoundary}`
  );
}
for (const forbiddenHelperEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "/api/",
  "setLessons",
  "setGeneratedLessonSaveStatus",
  "localStorage",
  "Supabase",
  "Solapi",
  "new Date",
  "Date.now",
  "Promise.all"
]) {
  assert.ok(
    !helperSource.includes(forbiddenHelperEffect),
    `generated lesson save status helper crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log("generated lesson save status TARGET/CONTROL fixtures passed");
