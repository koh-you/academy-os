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
const expectedDates = [
  "2026-07-19",
  "2026-07-26",
  "2026-08-02",
  "2026-08-09"
];
const candidates =
  buildExamPrepLessonCandidates(rows);

assert.deepEqual(
  candidates.map(
    ({
      generatedKey,
      label,
      reason,
      lesson
    }) => ({
      generatedKey,
      label,
      reason,
      lesson
    })
  ),
  expectedDates.map((date) => {
    const generatedKey =
      `generated:exam_prep:${date}`;
    return {
      generatedKey,
      label: `${date} 시험대비`,
      reason:
        "가상고, 나무중 시험기간 전 시험대비",
      lesson: {
        lessonId: `lesson_exam_prep_${date}`,
        classTemplateId: "",
        className: "시험대비",
        lessonType: "examPrep",
        lessonTopic: "시험대비",
        sourceSchoolEventId: generatedKey,
        sourceLabel:
          "가상고 2학기 중간고사 · 나무중 2학기 기말고사",
        date,
        dayOfWeek: "sun",
        startTime: "13:00",
        endTime: "18:00",
        color: "#bae6fd",
        teacherId: "instructor_owner_001",
        studentIds: [],
        status: "scheduled",
        generatedKey
      }
    };
  })
);
assert.deepEqual(rows, rowsSnapshot);
assert.deepEqual(
  buildExamPrepLessonCandidates(),
  []
);
assert.deepEqual(
  buildExamPrepLessonCandidates([
    null,
    {},
    {
      examPrepId:
        "exam_prep_INVALID_PERIOD",
      examPeriod: "날짜 미입력"
    }
  ]),
  []
);

const fallbackCandidates =
  buildExamPrepLessonCandidates([
    {
      examPrepId:
        "exam_prep_TARGET_FALLBACK",
      examCycle: "custom-cycle",
      examPeriod:
        "2026-08-16 ~ 2026-08-16"
    }
  ]);
assert.equal(
  fallbackCandidates.at(-1).lesson.sourceLabel,
  "학교 미입력 custom-cycle"
);
assert.equal(
  fallbackCandidates.at(-1).reason,
  "학교 미입력 시험기간 전 시험대비"
);

const appSource = [
  await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
  ),
  await readFile(
    new URL("../src/domains/lessons/generatedLessonPlanBuilder.js", import.meta.url),
    "utf8"
  )
].join("\n");
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
    "function buildExamPrepLessonCandidates("
  ).length - 1,
  0
);
assert.equal(
  appSource.split(
    "buildExamPrepLessonCandidates(rows)"
  ).length - 1,
  1
);
assert.equal(
  builderSource.split(
    "export function createExamPrepLessonCandidateBuilder("
  ).length - 1,
  1
);
for (const appBoundary of [
  "const buildExamPrepLessonCandidates =",
  "examCycleLabel,",
  "getExamPrepGeneratedKeyForDate,",
  "getStandardLessonColor,",
  "getSundayDatesForExamPeriod,",
  "parseDateRangeText",
  "candidates.push(...buildExamPrepLessonCandidates(rows))"
]) {
  assert.ok(
    appSource.includes(appBoundary),
    `missing candidate builder App boundary: ${appBoundary}`
  );
}
for (const moduleBoundary of [
  "return function buildExamPrepLessonCandidates(",
  "const dateMap = new Map()",
  "getSundayDatesForExamPeriod(",
  "getExamPrepGeneratedKeyForDate(date)",
  "entry.blocks.some(",
  "examCycleLabel(",
  "getStandardLessonColor({",
  'lessonType: "examPrep"'
]) {
  assert.ok(
    builderSource.includes(moduleBoundary),
    `missing candidate builder module boundary: ${moduleBoundary}`
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
    `examPrep candidate builder crossed a side effect: ${forbiddenEffect}`
  );
}

console.log(
  "examPrep lesson candidates extraction TARGET/CONTROL fixtures passed"
);
