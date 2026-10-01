import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { lessonCalendarColors } from "../src/app/appConfig.js";
import { getExamPrepGeneratedKeyForDate } from "../src/domains/lessons/generatedExamPrepKeyBuilder.js";
import { createExamPeriodSundayDateSelector } from "../src/domains/lessons/examPeriodSundayDateSelector.js";
import { isExamPrepSchoolExcluded } from "../src/domains/lessons/examPrepSchoolPlan.js";
import { parseDateRangeText } from "../src/domains/schoolCalendar/schoolCalendarUtils.js";

function toExistingKoreaDateString(date) {
  return `${date.getFullYear()}-${String(
    date.getMonth() + 1
  ).padStart(2, "0")}-${String(
    date.getDate()
  ).padStart(2, "0")}`;
}

function existingExamCycleLabel(examCycle) {
  const [, semester, phase] =
    String(examCycle).match(
      /^20\d{2}-(1|2)-(mid|final)$/
    ) ?? [];
  if (!semester || !phase) return examCycle;
  return `${semester}학기 ${
    phase === "mid" ? "중간고사" : "기말고사"
  }`;
}

function getExistingStandardLessonColor(
  lesson = {}
) {
  return lesson.lessonType === "examPrep"
    ? lessonCalendarColors.examPrep
    : lessonCalendarColors.regular;
}

const getExistingSundayDatesForExamPeriod =
  createExamPeriodSundayDateSelector({
    toKoreaDateString:
      toExistingKoreaDateString
  });

// 2026-10-01 · 학교별 제외가 더해져 복제 구현도 같은 인자·같은 필터를 갖는다.
function buildExistingExamPrepLessonCandidates(
  rows = [],
  schoolExclusions = []
) {
  const dateMap = new Map();
  rows.forEach((row) => {
    const period = parseDateRangeText(
      row.examPeriod
    );
    if (!period.date) return;
    getExistingSundayDatesForExamPeriod(
      period
    ).forEach((date) => {
      const key =
        getExamPrepGeneratedKeyForDate(date);
      const block = {
        schoolName:
          row.schoolName || "학교 미입력",
        examCycle: row.examCycle || "",
        examPrepId: row.examPrepId,
        periodText: row.examPeriod
      };
      if (!dateMap.has(key)) {
        dateMap.set(key, {
          date,
          key,
          blocks: []
        });
      }
      const entry = dateMap.get(key);
      if (
        isExamPrepSchoolExcluded(
          schoolExclusions,
          key,
          block.schoolName
        )
      ) {
        return;
      }
      if (
        !entry.blocks.some(
          (item) =>
            item.schoolName ===
              block.schoolName &&
            item.examCycle === block.examCycle
        )
      ) {
        entry.blocks.push(block);
      }
    });
  });
  return [...dateMap.values()]
    .filter((entry) => entry.blocks.length > 0)
    .map(
    (entry) => {
      const schoolNames = entry.blocks
        .map((block) => block.schoolName)
        .join(", ");
      return {
        generatedKey: entry.key,
        label: `${entry.date} 시험대비`,
        reason:
          `${schoolNames} 시험기간 전 시험대비`,
        lesson: {
          lessonId:
            `lesson_exam_prep_${entry.date}`,
          classTemplateId: "",
          className: "시험대비",
          lessonType: "examPrep",
          lessonTopic: "시험대비",
          sourceSchoolEventId: entry.key,
          sourceLabel: entry.blocks
            .map(
              (block) =>
                `${block.schoolName} ${
                  existingExamCycleLabel(
                    block.examCycle
                  )
                }`
            )
            .join(" · "),
          date: entry.date,
          dayOfWeek: "sun",
          startTime: "13:00",
          endTime: "18:00",
          color:
            getExistingStandardLessonColor({
              lessonType: "examPrep"
            }),
          teacherId: "instructor_owner_001",
          studentIds: [],
          status: "scheduled",
          generatedKey: entry.key
        }
      };
    }
  );
}

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
const expectedCandidates = expectedDates.map(
  (date) => {
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
  }
);

assert.deepEqual(
  buildExistingExamPrepLessonCandidates(rows),
  expectedCandidates
);
assert.deepEqual(rows, rowsSnapshot);
assert.deepEqual(
  buildExistingExamPrepLessonCandidates([]),
  []
);

const fallbackCandidate =
  buildExistingExamPrepLessonCandidates([
    {
      examPrepId:
        "exam_prep_TARGET_FALLBACK",
      schoolName: "",
      examCycle: "custom-cycle",
      examPeriod:
        "2026-08-16 ~ 2026-08-16"
    }
  ]).at(-1);
assert.equal(
  fallbackCandidate.lesson.sourceLabel,
  "학교 미입력 custom-cycle"
);
assert.equal(
  fallbackCandidate.reason,
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
const helperSource = await readFile(
  new URL(
    "../src/domains/lessons/examPrepLessonCandidateBuilder.js",
    import.meta.url
  ),
  "utf8"
);
const helperBoundaries = [
  "export function createExamPrepLessonCandidateBuilder({",
  "return function buildExamPrepLessonCandidates(",
  "const dateMap = new Map()",
  "rows.forEach((row) => {",
  "parseDateRangeText(",
  "row.examPeriod",
  "if (!period.date) return",
  "getSundayDatesForExamPeriod(",
  "getExamPrepGeneratedKeyForDate(date)",
  'row.schoolName || "학교 미입력"',
  "examCycle: row.examCycle || \"\"",
  "if (!dateMap.has(key))",
  // 2026-10-01 · 학교별 제외를 후보 단계에서 적용한다. 제외 판정은 block 을 담기 전에 오고,
  // 모든 학교가 빠진 날짜는 수업을 만들지 않으므로 .map 앞에 .filter 가 끼어든다
  // (examPrepSchoolPlan 주석 참고).
  "isExamPrepSchoolExcluded(",
  "schoolExclusions,",
  "entry.blocks.some(",
  "item.schoolName ===",
  "block.schoolName",
  "item.examCycle ===",
  "block.examCycle",
  "entry.blocks.push(block)",
  // 2026-10-01 · 학교별 제외를 후보 단계에서 적용한다. 제외 판정은 block 을 담기 전에 오고,
  // 모든 학교가 빠진 날짜는 수업을 만들지 않으므로 .map 앞에 .filter 가 끼어든다
  // (examPrepSchoolPlan 주석 참고).
  "return [...dateMap.values()]",
  ".filter((entry) => entry.blocks.length > 0)",
  "generatedKey: entry.key",
  "label: `${entry.date} 시험대비`",
  "`${schoolNames} 시험기간 전 시험대비`",
  '`lesson_exam_prep_${entry.date}`',
  'lessonType: "examPrep"',
  "sourceSchoolEventId: entry.key",
  "examCycleLabel(",
  "block.examCycle",
  'dayOfWeek: "sun"',
  'startTime: "13:00"',
  'endTime: "18:00"',
  "getStandardLessonColor({",
  "getSessionTeacherId(),",
  "studentIds,",
  'status: "scheduled"',
  "generatedKey: entry.key"
];
let previousIndex = -1;
for (const boundary of helperBoundaries) {
  const boundaryIndex = helperSource.indexOf(
    boundary,
    previousIndex + 1
  );
  assert.ok(
    boundaryIndex > previousIndex,
    `examPrep candidate order changed: ${boundary}`
  );
  previousIndex = boundaryIndex;
}
assert.equal(
  appSource.split(
    "function buildExamPrepLessonCandidates("
  ).length - 1,
  0
);
assert.equal(
  appSource.split(
    "createExamPrepLessonCandidateBuilder({"
  ).length - 1,
  1
);
assert.equal(
  appSource.split(
    "buildExamPrepLessonCandidates(rows, students, safeControls.examPrepSchoolExclusions)"
  ).length - 1,
  1
);
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
    !helperSource.includes(forbiddenEffect),
    `examPrep candidate builder crossed a side effect: ${forbiddenEffect}`
  );
}

console.log(
  "examPrep lesson candidates inventory TARGET/CONTROL fixtures passed"
);
