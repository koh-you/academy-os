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
const modulePath =
  'from "../domains/lessons/generatedExamPrepKeyBuilder.js"';
assert.equal(appSource.split(modulePath).length - 1, 1);
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

const keyStart = appSource.indexOf(
  "function getGeneratedLessonKey("
);
const keyEnd = appSource.indexOf(
  "function getPreExamCompatibilityKey(",
  keyStart
);
assert.ok(keyStart >= 0 && keyEnd > keyStart);
const keySource = appSource.slice(keyStart, keyEnd);
const keyBoundaries = [
  "const sourceId = lesson.sourceSchoolEventId ||",
  'if (sourceId.startsWith("generated:")) return sourceId',
  'if (lesson.lessonType === "preExam" && sourceId)',
  "if (isExamPrepLesson(lesson)) return getExamPrepGeneratedKeyForDate(lesson.date)",
  'return ""'
];
let previousKeyIndex = -1;
for (const boundary of keyBoundaries) {
  const boundaryIndex = keySource.indexOf(
    boundary,
    previousKeyIndex + 1
  );
  assert.ok(
    boundaryIndex > previousKeyIndex,
    `generated lesson key consumer order changed: ${boundary}`
  );
  previousKeyIndex = boundaryIndex;
}

const identityStart = appSource.indexOf(
  "function getGeneratedLessonIdentityKeys("
);
const identityEnd = appSource.indexOf(
  "function getGeneratedLessonPlanItemKey(",
  identityStart
);
assert.ok(
  identityStart >= 0 &&
    identityEnd > identityStart
);
const identitySource = appSource.slice(
  identityStart,
  identityEnd
);
for (const identityBoundary of [
  "const examPrepKeys = isExamPrepLesson(lesson)",
  "getExamPrepGeneratedKeyForDate(lesson.date)",
  "return [...new Set("
]) {
  assert.ok(
    identitySource.includes(identityBoundary),
    `missing generated identity key consumer: ${identityBoundary}`
  );
}

const candidateStart = appSource.indexOf(
  "function buildExamPrepLessonCandidates("
);
const candidateEnd = appSource.indexOf(
  "function buildGeneratedLessonPlan(",
  candidateStart
);
assert.ok(
  candidateStart >= 0 &&
    candidateEnd > candidateStart
);
const candidateSource = appSource.slice(
  candidateStart,
  candidateEnd
);
const candidateBoundaries = [
  "getSundayDatesForExamPeriod(period).forEach((date) => {",
  "const key = getExamPrepGeneratedKeyForDate(date)",
  "if (!dateMap.has(key))",
  "return [...dateMap.values()].map("
];
let previousCandidateIndex = -1;
for (const boundary of candidateBoundaries) {
  const boundaryIndex = candidateSource.indexOf(
    boundary,
    previousCandidateIndex + 1
  );
  assert.ok(
    boundaryIndex > previousCandidateIndex,
    `exam-prep candidate key consumer order changed: ${boundary}`
  );
  previousCandidateIndex = boundaryIndex;
}

for (const helperBoundary of [
  'export function getExamPrepGeneratedKeyForDate(date = "")',
  'return date ? `generated:exam_prep:${date}` : ""'
]) {
  assert.ok(
    helperSource.includes(helperBoundary),
    `missing generated exam-prep key boundary: ${helperBoundary}`
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
    `generated exam-prep key closeout crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log(
  "generated exam-prep key builder boundary closeout passed"
);
