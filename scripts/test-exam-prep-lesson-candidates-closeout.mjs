import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { lessonCalendarColors } from "../src/app/appConfig.js";
import { getExamPrepGeneratedKeyForDate } from "../src/domains/lessons/generatedExamPrepKeyBuilder.js";
import { createExamPeriodSundayDateSelector } from "../src/domains/lessons/examPeriodSundayDateSelector.js";
import { createExamPrepLessonCandidateBuilder } from "../src/domains/lessons/examPrepLessonCandidateBuilder.js";
import { parseDateRangeText } from "../src/domains/schoolCalendar/schoolCalendarUtils.js";

function toKoreaDateString(date) {
  return `${date.getFullYear()}-${String(
    date.getMonth() + 1
  ).padStart(2, "0")}-${String(
    date.getDate()
  ).padStart(2, "0")}`;
}

function examCycleLabel(examCycle) {
  const [, semester, phase] =
    String(examCycle).match(
      /^20\d{2}-(1|2)-(mid|final)$/
    ) ?? [];
  if (!semester || !phase) return examCycle;
  return `${semester}학기 ${
    phase === "mid" ? "중간고사" : "기말고사"
  }`;
}

const getSundayDatesForExamPeriod =
  createExamPeriodSundayDateSelector({
    toKoreaDateString
  });
const buildExamPrepLessonCandidates =
  createExamPrepLessonCandidateBuilder({
    examCycleLabel,
    getExamPrepGeneratedKeyForDate,
    getStandardLessonColor(lesson = {}) {
      return lesson.lessonType === "examPrep"
        ? lessonCalendarColors.examPrep
        : lessonCalendarColors.regular;
    },
    getSundayDatesForExamPeriod,
    parseDateRangeText
  });

const rows = [
  {
    examPrepId: "exam_prep_TARGET_ALPHA",
    schoolName: "가상고",
    examCycle: "2026-2-mid",
    examPeriod:
      "2026-08-12 ~ 2026-08-14"
  },
  {
    examPrepId:
      "exam_prep_CONTROL_DUPLICATE_ALPHA",
    schoolName: "가상고",
    examCycle: "2026-2-mid",
    examPeriod:
      "2026-08-12 ~ 2026-08-14"
  },
  {
    examPrepId: "exam_prep_TARGET_BETA",
    schoolName: "나무중",
    examCycle: "2026-2-final",
    examPeriod:
      "2026-08-12 ~ 2026-08-14"
  }
];
const rowsSnapshot = structuredClone(rows);
const candidates =
  buildExamPrepLessonCandidates(rows);

assert.deepEqual(
  candidates.map((candidate) => ({
    generatedKey: candidate.generatedKey,
    label: candidate.label,
    reason: candidate.reason,
    lessonId: candidate.lesson.lessonId,
    sourceLabel:
      candidate.lesson.sourceLabel,
    date: candidate.lesson.date,
    color: candidate.lesson.color,
    studentIds:
      candidate.lesson.studentIds
  })),
  [
    "2026-07-19",
    "2026-07-26",
    "2026-08-02",
    "2026-08-09"
  ].map((date) => ({
    generatedKey:
      `generated:exam_prep:${date}`,
    label: `${date} 시험대비`,
    reason:
      "가상고, 나무중 시험기간 전 시험대비",
    lessonId: `lesson_exam_prep_${date}`,
    sourceLabel:
      "가상고 2학기 중간고사 · 나무중 2학기 기말고사",
    date,
    color: "#bae6fd",
    studentIds: []
  }))
);
assert.deepEqual(rows, rowsSnapshot);
assert.deepEqual(
  buildExamPrepLessonCandidates(),
  []
);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const builderSource = await readFile(
  new URL(
    "../src/domains/lessons/examPrepLessonCandidateBuilder.js",
    import.meta.url
  ),
  "utf8"
);
assert.equal(
  appSource.split(
    'from "../domains/lessons/examPrepLessonCandidateBuilder.js"'
  ).length - 1,
  1
);
assert.equal(
  appSource.split(
    "createExamPrepLessonCandidateBuilder({"
  ).length - 1,
  1
);
assert.equal(
  appSource.split(
    "buildExamPrepLessonCandidates(rows)"
  ).length - 1,
  1
);
assert.equal(
  appSource.split(
    "function buildExamPrepLessonCandidates("
  ).length - 1,
  0
);
assert.equal(
  builderSource.split(
    "export function createExamPrepLessonCandidateBuilder("
  ).length - 1,
  1
);
assert.equal(
  builderSource.split(
    "return function buildExamPrepLessonCandidates("
  ).length - 1,
  1
);

const appBoundaries = [
  "const getSundayDatesForExamPeriod =",
  "const buildExamPrepLessonCandidates =",
  "createExamPrepLessonCandidateBuilder({",
  "getSundayDatesForExamPeriod,",
  "function toKoreaDateString(date)",
  "function buildGeneratedLessonPlan(",
  "candidates.push(...buildExamPrepLessonCandidates(rows))",
  "return candidates.map((candidate) => {"
];
let previousIndex = -1;
for (const boundary of appBoundaries) {
  const boundaryIndex = appSource.indexOf(
    boundary,
    previousIndex + 1
  );
  assert.ok(
    boundaryIndex > previousIndex,
    `candidate closeout App order changed: ${boundary}`
  );
  previousIndex = boundaryIndex;
}
for (const moduleBoundary of [
  "const dateMap = new Map()",
  "parseDateRangeText(",
  "getSundayDatesForExamPeriod(",
  "getExamPrepGeneratedKeyForDate(date)",
  "entry.blocks.some(",
  "return [...dateMap.values()].map(",
  "examCycleLabel(",
  "getStandardLessonColor({",
  'lessonType: "examPrep"'
]) {
  assert.ok(
    builderSource.includes(moduleBoundary),
    `missing candidate closeout module boundary: ${moduleBoundary}`
  );
}
for (const forbiddenEffect of [
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
    !builderSource.includes(forbiddenEffect),
    `examPrep candidate closeout crossed a side effect: ${forbiddenEffect}`
  );
}

console.log(
  "examPrep lesson candidate builder boundary closeout passed"
);
