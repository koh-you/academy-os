import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

function getExistingExamPrepGeneratedKeyForDate(date = "") {
  return date ? `generated:exam_prep:${date}` : "";
}

assert.equal(
  getExistingExamPrepGeneratedKeyForDate("2026-08-09"),
  "generated:exam_prep:2026-08-09"
);
assert.equal(
  getExistingExamPrepGeneratedKeyForDate("2026-12-31"),
  "generated:exam_prep:2026-12-31"
);
assert.equal(
  getExistingExamPrepGeneratedKeyForDate(" "),
  "generated:exam_prep: "
);
assert.equal(getExistingExamPrepGeneratedKeyForDate(""), "");
assert.equal(getExistingExamPrepGeneratedKeyForDate(), "");
assert.equal(getExistingExamPrepGeneratedKeyForDate(null), "");

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const builderStart = appSource.indexOf(
  'function getExamPrepGeneratedKeyForDate(date = "")'
);
const builderEnd = appSource.indexOf(
  "function getGeneratedLessonKey(",
  builderStart
);
assert.ok(builderStart >= 0 && builderEnd > builderStart);
const builderSource = appSource.slice(
  builderStart,
  builderEnd
);
const builderBoundaries = [
  'function getExamPrepGeneratedKeyForDate(date = "")',
  "return date ? `generated:exam_prep:${date}` : \"\""
];
let previousIndex = -1;
for (const boundary of builderBoundaries) {
  const boundaryIndex = builderSource.indexOf(
    boundary,
    previousIndex + 1
  );
  assert.ok(
    boundaryIndex > previousIndex,
    `generated exam-prep key builder order changed: ${boundary}`
  );
  previousIndex = boundaryIndex;
}
assert.equal(
  appSource.split(
    "getExamPrepGeneratedKeyForDate("
  ).length - 1,
  4
);
for (const consumerBoundary of [
  "if (isExamPrepLesson(lesson)) return getExamPrepGeneratedKeyForDate(lesson.date)",
  "getExamPrepGeneratedKeyForDate(lesson.date)",
  "const key = getExamPrepGeneratedKeyForDate(date)"
]) {
  assert.ok(
    appSource.includes(consumerBoundary),
    `missing generated exam-prep key consumer: ${consumerBoundary}`
  );
}
assert.ok(!builderSource.includes("fetch("));
assert.ok(!builderSource.includes("/api/"));
assert.ok(!builderSource.includes("postJson"));
assert.ok(!builderSource.includes("setLessons"));

console.log(
  "generated exam-prep key builder inventory TARGET/CONTROL fixtures passed"
);
