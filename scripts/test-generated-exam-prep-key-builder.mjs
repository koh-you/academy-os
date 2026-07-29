import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { getExamPrepGeneratedKeyForDate } from "../src/domains/lessons/generatedExamPrepKeyBuilder.js";

assert.equal(
  getExamPrepGeneratedKeyForDate("2026-08-09"),
  "generated:exam_prep:2026-08-09"
);
assert.equal(
  getExamPrepGeneratedKeyForDate("2026-12-31"),
  "generated:exam_prep:2026-12-31"
);
assert.equal(
  getExamPrepGeneratedKeyForDate(" "),
  "generated:exam_prep: "
);
assert.equal(getExamPrepGeneratedKeyForDate(""), "");
assert.equal(getExamPrepGeneratedKeyForDate(), "");
assert.equal(getExamPrepGeneratedKeyForDate(null), "");

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const helperSource = await readFile(
  new URL(
    "../src/domains/lessons/generatedExamPrepKeyBuilder.js",
    import.meta.url
  ),
  "utf8"
);
assert.equal(
  appSource.split(
    'from "../domains/lessons/generatedExamPrepKeyBuilder.js"'
  ).length - 1,
  1
);
assert.equal(
  appSource.split(
    "getExamPrepGeneratedKeyForDate("
  ).length - 1,
  3
);
assert.equal(
  helperSource.split(
    "export function getExamPrepGeneratedKeyForDate("
  ).length - 1,
  1
);
for (const consumerBoundary of [
  "if (isExamPrepLesson(lesson)) return getExamPrepGeneratedKeyForDate(lesson.date)",
  "getExamPrepGeneratedKeyForDate(lesson.date)",
  "const key = getExamPrepGeneratedKeyForDate(date)"
]) {
  assert.ok(
    appSource.includes(consumerBoundary),
    `missing generated exam-prep key App consumer: ${consumerBoundary}`
  );
}
assert.ok(
  !appSource.includes(
    'function getExamPrepGeneratedKeyForDate(date = "")'
  )
);
for (const helperBoundary of [
  'export function getExamPrepGeneratedKeyForDate(date = "")',
  'return date ? `generated:exam_prep:${date}` : ""'
]) {
  assert.ok(
    helperSource.includes(helperBoundary),
    `missing generated exam-prep key helper boundary: ${helperBoundary}`
  );
}
for (const forbiddenHelperEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "/api/",
  "setLessons",
  "setExamPrepRows",
  "persistExamPrepRows",
  "localStorage",
  "Supabase",
  "Solapi",
  "new Date",
  "Date.now",
  "Promise.all"
]) {
  assert.ok(
    !helperSource.includes(forbiddenHelperEffect),
    `generated exam-prep key builder crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log(
  "generated exam-prep key builder TARGET/CONTROL extraction fixtures passed"
);
