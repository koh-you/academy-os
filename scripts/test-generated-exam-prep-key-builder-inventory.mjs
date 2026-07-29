import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { getExamPrepGeneratedKeyForDate } from "../src/domains/lessons/generatedExamPrepKeyBuilder.js";

function getExistingExamPrepGeneratedKeyForDate(date = "") {
  return date ? `generated:exam_prep:${date}` : "";
}

assert.equal(
  getExistingExamPrepGeneratedKeyForDate("2026-08-09"),
  "generated:exam_prep:2026-08-09"
);
assert.equal(
  getExamPrepGeneratedKeyForDate("2026-08-09"),
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
const helperSource = await readFile(
  new URL(
    "../src/domains/lessons/generatedExamPrepKeyBuilder.js",
    import.meta.url
  ),
  "utf8"
);
const identitySource = await readFile(
  new URL(
    "../src/domains/lessons/generatedLessonIdentityModel.js",
    import.meta.url
  ),
  "utf8"
);
const candidateSource = await readFile(
  new URL(
    "../src/domains/lessons/examPrepLessonCandidateBuilder.js",
    import.meta.url
  ),
  "utf8"
);
const builderBoundaries = [
  'export function getExamPrepGeneratedKeyForDate(date = "")',
  "return date ? `generated:exam_prep:${date}` : \"\""
];
let previousIndex = -1;
for (const boundary of builderBoundaries) {
  const boundaryIndex = helperSource.indexOf(
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
  0
);
assert.equal(
  candidateSource.split(
    "getExamPrepGeneratedKeyForDate("
  ).length - 1,
  1
);
assert.equal(
  identitySource.split(
    "getExamPrepGeneratedKeyForDate("
  ).length - 1,
  2
);
assert.ok(
  appSource.includes(
    'from "../domains/lessons/generatedExamPrepKeyBuilder.js"'
  )
);
assert.ok(
  appSource.includes(
    "getExamPrepGeneratedKeyForDate,"
  )
);
assert.ok(
  candidateSource.includes(
    "getExamPrepGeneratedKeyForDate(date)"
  )
);
for (const consumerBoundary of [
  "return getExamPrepGeneratedKeyForDate(lesson.date)",
  "getExamPrepGeneratedKeyForDate(lesson.date)"
]) {
  assert.ok(
    identitySource.includes(consumerBoundary),
    `missing generated exam-prep key consumer: ${consumerBoundary}`
  );
}
assert.ok(
  candidateSource.includes(
    "getExamPrepGeneratedKeyForDate(date)"
  )
);
assert.ok(!helperSource.includes("fetch("));
assert.ok(!helperSource.includes("/api/"));
assert.ok(!helperSource.includes("postJson"));
assert.ok(!helperSource.includes("setLessons"));

console.log(
  "generated exam-prep key builder inventory TARGET/CONTROL fixtures passed"
);
