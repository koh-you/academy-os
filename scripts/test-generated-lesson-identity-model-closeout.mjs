import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createGeneratedLessonIdentityModel } from "../src/domains/lessons/generatedLessonIdentityModel.js";

function normalizeGradeLabel(grade = "") {
  const value = String(grade).trim();
  if (value.includes("1")) {
    return value.includes("중") ? "중1" : "고1";
  }
  if (value.includes("2")) {
    return value.includes("중") ? "중2" : "고2";
  }
  if (value.includes("3")) {
    return value.includes("중") ? "중3" : "고3";
  }
  return value;
}

function addDaysInKorea(dateString, days) {
  const base = new Date(`${dateString}T00:00:00+09:00`);
  base.setUTCDate(base.getUTCDate() + days);
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(base);
}

const identityModel = createGeneratedLessonIdentityModel({
  addDaysInKorea,
  isExamPrepLesson: (lesson = {}) =>
    lesson?.lessonType === "examPrep",
  normalizeGradeLabel
});
const preExamTarget = {
  lessonType: "preExam",
  sourceSchoolEventId: "event_TARGET_PRE_EXAM",
  sourceExamDate: "2026-08-05",
  className: "가상여자고등학교 고2 직전수업",
  date: "2026-08-04"
};
const inputSnapshot = structuredClone(preExamTarget);

assert.deepEqual(
  identityModel.getGeneratedLessonIdentityKeys(
    preExamTarget
  ),
  [
    "generated:pre_exam:event_TARGET_PRE_EXAM",
    "preExam|가상여고|고2|2026-08-05"
  ]
);
assert.equal(
  identityModel.getPreExamCompatibilityKey({
    lessonType: "preExam",
    sourceSchoolEventId: "event_TARGET_FALLBACK",
    className: "가상중학교 중3 직전수업",
    date: "2026-08-06"
  }),
  "preExam|가상중|중3|2026-08-07"
);
assert.deepEqual(
  identityModel.getGeneratedLessonIdentityKeys({
    lessonType: "examPrep",
    date: "2026-08-09"
  }),
  ["generated:exam_prep:2026-08-09"]
);
assert.deepEqual(
  identityModel.getGeneratedLessonIdentityKeys({
    lessonType: "examPrep",
    sourceSchoolEventId:
      "generated:exam_prep:2026-08-10",
    date: "2026-08-10"
  }),
  ["generated:exam_prep:2026-08-10"]
);
assert.equal(
  identityModel.getPreExamCompatibilityKey({
    lessonType: "preExam",
    sourceExamDate: "2026-08-11",
    className: "학교만 직전수업"
  }),
  ""
);
assert.deepEqual(preExamTarget, inputSnapshot);

const appSource = (await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
)).replace(/\r\n/g, "\n");
const helperSource = (await readFile(
  new URL(
    "../src/domains/lessons/generatedLessonIdentityModel.js",
    import.meta.url
  ),
  "utf8"
)).replace(/\r\n/g, "\n");
const modulePath =
  'from "../domains/lessons/generatedLessonIdentityModel.js"';
assert.equal(appSource.split(modulePath).length - 1, 1);
assert.equal(
  appSource.split(
    "createGeneratedLessonIdentityModel({"
  ).length - 1,
  1
);
assert.equal(
  helperSource.split(
    "export function createGeneratedLessonIdentityModel("
  ).length - 1,
  1
);

const injectionStart = appSource.indexOf(
  "const {\n  getGeneratedLessonIdentityKeys,"
);
const injectionEnd = appSource.indexOf(
  "const getStudentsForSchoolCalendarEvent =",
  injectionStart
);
assert.ok(
  injectionStart >= 0 &&
    injectionEnd > injectionStart
);
const injectionSource = appSource.slice(
  injectionStart,
  injectionEnd
);
const injectionBoundaries = [
  "getGeneratedLessonIdentityKeys,",
  "getGeneratedLessonKey",
  "} = createGeneratedLessonIdentityModel({",
  "addDaysInKorea,",
  "isExamPrepLesson,",
  "normalizeGradeLabel"
];
let previousInjectionIndex = -1;
for (const boundary of injectionBoundaries) {
  const boundaryIndex = injectionSource.indexOf(
    boundary,
    previousInjectionIndex + 1
  );
  assert.ok(
    boundaryIndex > previousInjectionIndex,
    `generated identity injection order changed: ${boundary}`
  );
  previousInjectionIndex = boundaryIndex;
}

for (const consumerBoundary of [
  "getIdentityKeys: getGeneratedLessonIdentityKeys",
  "const generatedKey = getGeneratedLessonKey(lesson)",
  "const lessonKeys = new Set(getGeneratedLessonIdentityKeys(lesson))",
  "getGeneratedLessonIdentityKeys(item).some((key) => lessonKeys.has(key))",
  "const candidateKeys = new Set([candidate.generatedKey, ...getGeneratedLessonIdentityKeys(candidate.lesson)].filter(Boolean))",
  "getGeneratedLessonIdentityKeys(lesson).some((key) => candidateKeys.has(key))"
]) {
  assert.ok(
    appSource.includes(consumerBoundary),
    `missing generated identity App consumer: ${consumerBoundary}`
  );
}

const helperBoundaries = [
  'import { getExamPrepGeneratedKeyForDate } from "./generatedExamPrepKeyBuilder.js"',
  "compactCalendarLabel,",
  "normalizeSchoolName",
  "function getGeneratedLessonKey(",
  "function getPreExamCompatibilityKey(",
  "function getGeneratedLessonIdentityKeys(",
  "getGeneratedLessonKey(lesson)",
  "getPreExamCompatibilityKey(lesson)",
  "return {",
  "getGeneratedLessonIdentityKeys,",
  "getGeneratedLessonKey,",
  "getPreExamCompatibilityKey"
];
let previousHelperIndex = -1;
for (const boundary of helperBoundaries) {
  const boundaryIndex = helperSource.indexOf(
    boundary,
    previousHelperIndex + 1
  );
  assert.ok(
    boundaryIndex > previousHelperIndex,
    `generated identity model order changed: ${boundary}`
  );
  previousHelperIndex = boundaryIndex;
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
  "Date.now",
  "Promise.all"
]) {
  assert.ok(
    !helperSource.includes(forbiddenHelperEffect),
    `generated lesson identity closeout crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log(
  "generated lesson identity model boundary closeout passed"
);
