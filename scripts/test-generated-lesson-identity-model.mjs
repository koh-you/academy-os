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
assert.equal(
  identityModel.getGeneratedLessonKey(preExamTarget),
  "generated:pre_exam:event_TARGET_PRE_EXAM"
);
assert.equal(
  identityModel.getPreExamCompatibilityKey(preExamTarget),
  "preExam|가상여고|고2|2026-08-05"
);
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

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const helperSource = await readFile(
  new URL(
    "../src/domains/lessons/generatedLessonIdentityModel.js",
    import.meta.url
  ),
  "utf8"
);
assert.equal(
  appSource.split(
    'from "../domains/lessons/generatedLessonIdentityModel.js"'
  ).length - 1,
  1
);
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
for (const appBoundary of [
  "getGeneratedLessonIdentityKeys,",
  "getGeneratedLessonKey",
  "} = createGeneratedLessonIdentityModel({",
  "addDaysInKorea,",
  "isExamPrepLesson,",
  "normalizeGradeLabel"
]) {
  assert.ok(
    appSource.includes(appBoundary),
    `missing generated lesson identity App boundary: ${appBoundary}`
  );
}
for (const helperBoundary of [
  'import { getExamPrepGeneratedKeyForDate } from "./generatedExamPrepKeyBuilder.js"',
  "compactCalendarLabel,",
  "normalizeSchoolName",
  "function getGeneratedLessonKey(",
  "function getPreExamCompatibilityKey(",
  "function getGeneratedLessonIdentityKeys(",
  "getPreExamCompatibilityKey(lesson)",
  "return {"
]) {
  assert.ok(
    helperSource.includes(helperBoundary),
    `missing generated lesson identity helper boundary: ${helperBoundary}`
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
  "Date.now",
  "Promise.all"
]) {
  assert.ok(
    !helperSource.includes(forbiddenHelperEffect),
    `generated lesson identity model crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log(
  "generated lesson identity model TARGET/CONTROL extraction fixtures passed"
);
