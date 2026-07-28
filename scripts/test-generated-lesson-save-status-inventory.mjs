import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  createGeneratedLessonFailedStatus,
  createGeneratedLessonSavedStatus,
  createGeneratedLessonSavingStatus
} from "../src/domains/lessons/generatedLessonSaveStatus.js";

function createExistingGeneratedLessonSavingStatus(lessons = []) {
  return {
    lessons,
    message: `자동 수업 ${lessons.length}건 저장 중...`,
    state: "saving"
  };
}

function createExistingGeneratedLessonSavedStatus(lessons = []) {
  return {
    lessons: [],
    message: `자동 수업 ${lessons.length}건 저장 완료`,
    state: "saved"
  };
}

function createExistingGeneratedLessonFailedStatus(
  lessons = [],
  errorMessage = ""
) {
  return {
    lessons,
    message: `자동 수업 저장 실패 · ${errorMessage}`,
    state: "failed"
  };
}

const lessons = [
  {
    lessonId: "lesson_TARGET",
    marker: "TARGET"
  },
  {
    lessonId: "lesson_CONTROL",
    marker: "CONTROL"
  }
];
const inputSnapshot = structuredClone(lessons);
const savingStatus = createExistingGeneratedLessonSavingStatus(lessons);
const savedStatus = createExistingGeneratedLessonSavedStatus(lessons);
const failedStatus = createExistingGeneratedLessonFailedStatus(
  lessons,
  "TARGET_ERROR"
);
const extractedSavingStatus =
  createGeneratedLessonSavingStatus(lessons);
const extractedSavedStatus = createGeneratedLessonSavedStatus(lessons);
const extractedFailedStatus = createGeneratedLessonFailedStatus(
  lessons,
  "TARGET_ERROR"
);

assert.deepEqual(savingStatus, {
  lessons,
  message: "자동 수업 2건 저장 중...",
  state: "saving"
});
assert.equal(savingStatus.lessons, lessons);
assert.deepEqual(extractedSavingStatus, savingStatus);
assert.equal(extractedSavingStatus.lessons, lessons);
assert.deepEqual(savedStatus, {
  lessons: [],
  message: "자동 수업 2건 저장 완료",
  state: "saved"
});
assert.notEqual(savedStatus.lessons, lessons);
assert.deepEqual(extractedSavedStatus, savedStatus);
assert.notEqual(extractedSavedStatus.lessons, lessons);
assert.deepEqual(failedStatus, {
  lessons,
  message: "자동 수업 저장 실패 · TARGET_ERROR",
  state: "failed"
});
assert.equal(failedStatus.lessons, lessons);
assert.deepEqual(extractedFailedStatus, failedStatus);
assert.equal(extractedFailedStatus.lessons, lessons);
assert.deepEqual(lessons, inputSnapshot);
assert.deepEqual(createExistingGeneratedLessonSavingStatus(), {
  lessons: [],
  message: "자동 수업 0건 저장 중...",
  state: "saving"
});
assert.deepEqual(createExistingGeneratedLessonSavedStatus(), {
  lessons: [],
  message: "자동 수업 0건 저장 완료",
  state: "saved"
});
assert.deepEqual(createExistingGeneratedLessonFailedStatus(), {
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
const functionStart = appSource.indexOf(
  "function saveGeneratedLessons(lessonsToSave)"
);
const functionEnd = appSource.indexOf(
  "\n  function saveGeneratedLessonsFromPlan(",
  functionStart
);
assert.ok(functionStart >= 0 && functionEnd > functionStart);
const functionSource = appSource.slice(functionStart, functionEnd);
for (const statusBoundary of [
  "setGeneratedLessonSaveStatus(",
  "createGeneratedLessonSavingStatus(lessonsToSave)",
  "createGeneratedLessonSavedStatus(lessonsToSave)",
  "createGeneratedLessonFailedStatus(lessonsToSave, error.message)"
]) {
  assert.ok(
    functionSource.includes(statusBoundary),
    `missing generated lesson save status boundary: ${statusBoundary}`
  );
}
assert.equal(
  functionSource.split("setGeneratedLessonSaveStatus(").length - 1,
  3
);

const savingIndex = functionSource.indexOf(
  "createGeneratedLessonSavingStatus(lessonsToSave)"
);
const requestIndex = functionSource.indexOf(
  "postJsonWithTimeout(",
  savingIndex
);
const savedIndex = functionSource.indexOf(
  "createGeneratedLessonSavedStatus(lessonsToSave)",
  requestIndex
);
const catchIndex = functionSource.indexOf(".catch((error)", savedIndex);
const failedIndex = functionSource.indexOf(
  "createGeneratedLessonFailedStatus(lessonsToSave, error.message)",
  catchIndex
);
assert.ok(
  savingIndex >= 0 &&
    requestIndex > savingIndex &&
    savedIndex > requestIndex &&
    catchIndex > savedIndex &&
    failedIndex > catchIndex
);
for (const helperRule of [
  "export function createGeneratedLessonSavingStatus(lessons = [])",
  "message: `자동 수업 ${lessons.length}건 저장 중...`",
  'state: "saving"',
  "export function createGeneratedLessonSavedStatus(lessons = [])",
  "lessons: []",
  "message: `자동 수업 ${lessons.length}건 저장 완료`",
  'state: "saved"',
  "export function createGeneratedLessonFailedStatus(",
  "message: `자동 수업 저장 실패 · ${errorMessage}`",
  'state: "failed"'
]) {
  assert.ok(
    helperSource.includes(helperRule),
    `missing extracted generated lesson status rule: ${helperRule}`
  );
}

console.log(
  "generated lesson save status inventory TARGET/CONTROL fixtures passed"
);
