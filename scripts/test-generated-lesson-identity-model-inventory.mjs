import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  compactCalendarLabel,
  normalizeSchoolName
} from "../src/domains/schoolCalendar/schoolCalendarUtils.js";
import { createGeneratedLessonIdentityModel } from "../src/domains/lessons/generatedLessonIdentityModel.js";

function normalizeExistingGradeLabel(grade = "") {
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

function addExistingDaysInKorea(dateString, days) {
  const base = new Date(`${dateString}T00:00:00+09:00`);
  base.setUTCDate(base.getUTCDate() + days);
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(base);
}

function getExistingExamPrepGeneratedKeyForDate(date = "") {
  return date ? `generated:exam_prep:${date}` : "";
}

function getExistingGeneratedLessonKey(lesson = {}) {
  const sourceId = lesson.sourceSchoolEventId || "";
  if (sourceId.startsWith("generated:")) return sourceId;
  if (lesson.lessonType === "preExam" && sourceId) {
    return `generated:pre_exam:${sourceId}`;
  }
  if (lesson?.lessonType === "examPrep") {
    return getExistingExamPrepGeneratedKeyForDate(lesson.date);
  }
  return "";
}

function getExistingPreExamCompatibilityKey(lesson = {}) {
  if (lesson.lessonType !== "preExam") return "";
  const sourceExamDate =
    lesson.sourceExamDate ||
    addExistingDaysInKorea(lesson.date, 1);
  const [schoolName = "", grade = ""] = String(
    lesson.className || ""
  )
    .replace(/\s*직전수업\s*$/, "")
    .split(/\s+/);
  const schoolKey = normalizeSchoolName(schoolName);
  const gradeKey = compactCalendarLabel(
    normalizeExistingGradeLabel(grade)
  );
  if (!schoolKey || !gradeKey || !sourceExamDate) return "";
  return `preExam|${schoolKey}|${gradeKey}|${sourceExamDate}`;
}

function getExistingGeneratedLessonIdentityKeys(lesson = {}) {
  const examPrepKeys =
    lesson?.lessonType === "examPrep"
      ? [
          getExistingExamPrepGeneratedKeyForDate(
            lesson.date
          )
        ]
      : [];
  return [
    ...new Set(
      [
        getExistingGeneratedLessonKey(lesson),
        getExistingPreExamCompatibilityKey(lesson),
        ...examPrepKeys
      ].filter(Boolean)
    )
  ];
}

const extractedIdentityModel =
  createGeneratedLessonIdentityModel({
    addDaysInKorea: addExistingDaysInKorea,
    isExamPrepLesson: (lesson = {}) =>
      lesson?.lessonType === "examPrep",
    normalizeGradeLabel: normalizeExistingGradeLabel
  });

const preExamTarget = {
  lessonType: "preExam",
  sourceSchoolEventId: "event_TARGET_PRE_EXAM",
  sourceExamDate: "2026-08-05",
  className: "가상여자고등학교 고2 직전수업",
  date: "2026-08-04"
};
const preExamSnapshot = structuredClone(preExamTarget);
assert.equal(
  getExistingGeneratedLessonKey(preExamTarget),
  "generated:pre_exam:event_TARGET_PRE_EXAM"
);
assert.equal(
  getExistingPreExamCompatibilityKey(preExamTarget),
  "preExam|가상여고|고2|2026-08-05"
);
assert.deepEqual(
  getExistingGeneratedLessonIdentityKeys(preExamTarget),
  [
    "generated:pre_exam:event_TARGET_PRE_EXAM",
    "preExam|가상여고|고2|2026-08-05"
  ]
);
assert.deepEqual(
  extractedIdentityModel.getGeneratedLessonIdentityKeys(
    preExamTarget
  ),
  getExistingGeneratedLessonIdentityKeys(preExamTarget)
);

const fallbackDateTarget = {
  lessonType: "preExam",
  sourceSchoolEventId: "event_TARGET_FALLBACK_DATE",
  className: "가상중학교 중3 직전수업",
  date: "2026-08-06"
};
assert.equal(
  getExistingPreExamCompatibilityKey(fallbackDateTarget),
  "preExam|가상중|중3|2026-08-07"
);
assert.equal(
  extractedIdentityModel.getPreExamCompatibilityKey(
    fallbackDateTarget
  ),
  "preExam|가상중|중3|2026-08-07"
);

const examPrepTarget = {
  lessonType: "examPrep",
  sourceSchoolEventId: "",
  date: "2026-08-09"
};
assert.equal(
  getExistingGeneratedLessonKey(examPrepTarget),
  "generated:exam_prep:2026-08-09"
);
assert.deepEqual(
  getExistingGeneratedLessonIdentityKeys(examPrepTarget),
  ["generated:exam_prep:2026-08-09"]
);
assert.deepEqual(
  extractedIdentityModel.getGeneratedLessonIdentityKeys(
    examPrepTarget
  ),
  ["generated:exam_prep:2026-08-09"]
);

const generatedSourceTarget = {
  lessonType: "examPrep",
  sourceSchoolEventId:
    "generated:exam_prep:2026-08-10",
  date: "2026-08-10"
};
assert.deepEqual(
  getExistingGeneratedLessonIdentityKeys(
    generatedSourceTarget
  ),
  ["generated:exam_prep:2026-08-10"]
);
assert.equal(
  getExistingPreExamCompatibilityKey({
    lessonType: "preExam",
    sourceExamDate: "2026-08-11",
    className: "학교만 직전수업"
  }),
  ""
);
assert.deepEqual(preExamTarget, preExamSnapshot);

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
const identityBoundaries = [
  "export function createGeneratedLessonIdentityModel({",
  "function getGeneratedLessonKey(lesson = {})",
  "const sourceId = lesson.sourceSchoolEventId ||",
  'if (sourceId.startsWith("generated:")) return sourceId',
  'if (lesson.lessonType === "preExam" && sourceId)',
  "if (isExamPrepLesson(lesson))",
  "return getExamPrepGeneratedKeyForDate(lesson.date)",
  "function getPreExamCompatibilityKey(lesson = {})",
  'if (lesson.lessonType !== "preExam") return ""',
  "lesson.sourceExamDate ||",
  "addDaysInKorea(lesson.date, 1)",
  '.replace(/\\s*직전수업\\s*$/, "")',
  "const schoolKey = normalizeSchoolName(schoolName)",
  "const gradeKey = compactCalendarLabel(",
  "normalizeGradeLabel(grade)",
  'return `preExam|${schoolKey}|${gradeKey}|${sourceExamDate}`',
  "function getGeneratedLessonIdentityKeys(lesson = {})",
  "const examPrepKeys = isExamPrepLesson(lesson)",
  "getGeneratedLessonKey(lesson)",
  "getPreExamCompatibilityKey(lesson)",
  "return {",
  "getGeneratedLessonIdentityKeys,",
  "getGeneratedLessonKey,",
  "getPreExamCompatibilityKey"
];
let previousIndex = -1;
for (const boundary of identityBoundaries) {
  const boundaryIndex = helperSource.indexOf(
    boundary,
    previousIndex + 1
  );
  assert.ok(
    boundaryIndex > previousIndex,
    `generated lesson identity order changed: ${boundary}`
  );
  previousIndex = boundaryIndex;
}
for (const forbiddenEffect of [
  "fetch(",
  "postJson",
  "/api/",
  "setLessons",
  "setExamPrepRows",
  "persistExamPrepRows",
  "localStorage",
  "Supabase",
  "Solapi"
]) {
  assert.ok(
    !helperSource.includes(forbiddenEffect),
    `generated lesson identity crossed a side effect: ${forbiddenEffect}`
  );
}
for (const appBoundary of [
  'from "../domains/lessons/generatedLessonIdentityModel.js"',
  "const {",
  "getGeneratedLessonIdentityKeys,",
  "getGeneratedLessonKey",
  "} = createGeneratedLessonIdentityModel({",
  "addDaysInKorea,",
  "isExamPrepLesson,",
  "normalizeGradeLabel"
]) {
  assert.ok(
    appSource.includes(appBoundary),
    `missing generated lesson identity App injection: ${appBoundary}`
  );
}

console.log(
  "generated lesson identity model inventory TARGET/CONTROL fixtures passed"
);
