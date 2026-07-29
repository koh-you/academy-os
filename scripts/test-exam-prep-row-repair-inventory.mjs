import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { getExamPrepIdFromDerivedMathEvent } from "../src/domains/lessons/derivedMathEventExamPrepIdSelector.js";
import { createPreExamMathLabelInference } from "../src/domains/lessons/preExamMathLabelInference.js";
import { safeIdPart } from "../src/shared/utils/id.js";

function normalizeExistingGradeLabel(grade = "") {
  const value = String(grade).trim();
  if (value.includes("1")) return value.includes("중") ? "중1" : "고1";
  if (value.includes("2")) return value.includes("중") ? "중2" : "고2";
  if (value.includes("3")) return value.includes("중") ? "중3" : "고3";
  return value;
}

function normalizeExistingMathSubject(subject = "") {
  const value = String(subject || "").trim();
  if (!value) return "수학";
  if (
    value === "공통수학1" ||
    value === "공통수학2"
  ) {
    return "수학";
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

function createExistingMathExamEntry(row = {}, index = 0) {
  const baseId = safeIdPart(
    row.examPrepId ||
      `${row.schoolName}_${row.grade}_${row.subject}`
  );
  return {
    id: `math_${baseId}_${index}`,
    date: row.mathExamDate || "",
    grade: row.grade || "",
    subject: normalizeExistingMathSubject(row.subject),
    label: ""
  };
}

function normalizeExistingMathExamEntries(
  row = {},
  { includeBlank = false } = {}
) {
  const entries = Array.isArray(row.mathExamDates)
    ? row.mathExamDates
    : [];
  const normalized = entries
    .map((entry, index) => ({
      id:
        entry.id ||
        `math_${safeIdPart(
          row.examPrepId || row.schoolName || "exam"
        )}_${index}`,
      date: entry.date || "",
      grade: entry.grade || row.grade || "",
      subject:
        entry.subject ||
        normalizeExistingMathSubject(row.subject),
      label: entry.label || "",
      sourceSchoolEventId:
        entry.sourceSchoolEventId || ""
    }))
    .filter(
      (entry) =>
        includeBlank || entry.date || entry.label
    );
  if (normalized.length) return normalized;
  if (row.mathExamDate) {
    return [createExistingMathExamEntry(row, 0)];
  }
  return [];
}

function syncExistingPrimaryMathExamDate(entries = []) {
  return entries.find((entry) => entry.date)?.date || "";
}

const inferExistingMathExamLabelFromPreExamLesson =
  createPreExamMathLabelInference({
    normalizeGradeLabel:
      normalizeExistingGradeLabel
  });

function repairExistingExamPrepRowsFromPersistedPreExamLessons(
  rows = [],
  lessons = []
) {
  const preExamLessons = lessons.filter(
    (lesson) =>
      lesson.lessonType === "preExam" &&
      lesson.date &&
      String(
        lesson.sourceSchoolEventId || ""
      ).startsWith("derived_math_")
  );
  if (!rows.length || !preExamLessons.length) return rows;

  return rows.map((row) => {
    const sourceLessons = preExamLessons.filter(
      (lesson) =>
        getExamPrepIdFromDerivedMathEvent(
          lesson.sourceSchoolEventId,
          [row]
        ) === row.examPrepId
    );
    if (!sourceLessons.length) return row;

    let didRepair = false;
    const entries = normalizeExistingMathExamEntries(
      row,
      { includeBlank: true }
    ).filter(
      (entry) =>
        entry.date ||
        entry.label ||
        entry.subject ||
        entry.grade ||
        entry.sourceSchoolEventId
    );

    sourceLessons.forEach((lesson) => {
      const examDate =
        lesson.sourceExamDate ||
        addExistingDaysInKorea(lesson.date, 1);
      if (!examDate) return;
      const sourceEventId =
        lesson.sourceSchoolEventId || "";
      const entryId =
        sourceEventId.replace(
          `derived_math_${row.examPrepId}_`,
          ""
        ) ||
        `math_${safeIdPart(
          row.examPrepId || "exam"
        )}_${safeIdPart(examDate)}`;
      const existingIndex = entries.findIndex(
        (entry) =>
          (sourceEventId &&
            entry.sourceSchoolEventId ===
              sourceEventId) ||
          (entry.date === examDate &&
            normalizeExistingGradeLabel(
              entry.grade || row.grade
            ) ===
              normalizeExistingGradeLabel(row.grade))
      );
      const previousEntry =
        existingIndex >= 0
          ? entries[existingIndex]
          : null;
      const nextEntry = {
        ...(previousEntry ?? {}),
        id: previousEntry?.id || entryId,
        date: previousEntry?.date || examDate,
        grade:
          previousEntry?.grade || row.grade || "",
        subject:
          previousEntry?.subject ||
          normalizeExistingMathSubject(row.subject),
        label:
          previousEntry?.label ||
          inferExistingMathExamLabelFromPreExamLesson(
            lesson,
            row
          ),
        sourceSchoolEventId:
          previousEntry?.sourceSchoolEventId ||
          sourceEventId
      };
      if (existingIndex >= 0) {
        if (
          JSON.stringify(entries[existingIndex]) !==
          JSON.stringify(nextEntry)
        ) {
          entries[existingIndex] = nextEntry;
          didRepair = true;
        }
        return;
      }
      entries.push(nextEntry);
      didRepair = true;
    });

    if (!didRepair) return row;
    const nextEntries = entries.filter(
      (entry) => entry.date || entry.label
    );
    const nextMathExamDate =
      row.mathExamDate ||
      syncExistingPrimaryMathExamDate(nextEntries);
    return {
      ...row,
      mathExamDate: nextMathExamDate,
      mathExamDates: nextEntries
    };
  });
}

const targetRow = {
  examPrepId: "exam_prep_TARGET",
  schoolName: "가상고",
  grade: "고2",
  subject: "공통수학1",
  mathExamDate: "",
  mathExamDates: [
    {
      id: "teacher-entry",
      date: "2026-08-12",
      grade: "고2",
      subject: "수학",
      label: "교사확정",
      sourceSchoolEventId:
        "derived_math_exam_prep_TARGET_existing"
    }
  ]
};
const fillRow = {
  examPrepId: "exam_prep_FILL",
  schoolName: "가상중",
  grade: "중3",
  subject: "공통수학2",
  mathExamDate: "",
  mathExamDates: [
    {
      id: "existing-fill",
      date: "",
      grade: "",
      subject: "",
      label: "교사라벨",
      sourceSchoolEventId:
        "derived_math_exam_prep_FILL_math_0"
    }
  ]
};
const unrelatedRow = {
  examPrepId: "exam_prep_CONTROL",
  schoolName: "다른고",
  grade: "고1",
  subject: "수학",
  mathExamDate: "2026-08-30",
  mathExamDates: []
};
const rows = [targetRow, fillRow, unrelatedRow];
const lessons = [
  {
    lessonType: "preExam",
    date: "2026-08-11",
    sourceExamDate: "2026-08-12",
    sourceSchoolEventId:
      "derived_math_exam_prep_TARGET_existing",
    className: "가상고 고2 미적분 직전수업"
  },
  {
    lessonType: "preExam",
    date: "2026-08-12",
    sourceExamDate: "2026-08-13",
    sourceSchoolEventId:
      "derived_math_exam_prep_TARGET_math_new",
    className:
      "가상고 고2 확률과 통계 직전수업"
  },
  {
    lessonType: "preExam",
    date: "2026-08-20",
    sourceSchoolEventId:
      "derived_math_exam_prep_FILL_math_0",
    className: "가상중 중3 대수 직전수업"
  },
  {
    lessonType: "regular",
    date: "2026-08-20",
    sourceSchoolEventId:
      "derived_math_exam_prep_CONTROL_ignored"
  }
];
const rowsSnapshot = structuredClone(rows);
const lessonsSnapshot = structuredClone(lessons);
const repaired =
  repairExistingExamPrepRowsFromPersistedPreExamLessons(
    rows,
    lessons
  );

assert.notEqual(repaired, rows);
assert.notEqual(repaired[0], targetRow);
assert.notEqual(repaired[1], fillRow);
assert.equal(repaired[2], unrelatedRow);
assert.equal(repaired[0].mathExamDate, "2026-08-12");
assert.deepEqual(repaired[0].mathExamDates, [
  {
    id: "teacher-entry",
    date: "2026-08-12",
    grade: "고2",
    subject: "수학",
    label: "교사확정",
    sourceSchoolEventId:
      "derived_math_exam_prep_TARGET_existing"
  },
  {
    id: "math_new",
    date: "2026-08-13",
    grade: "고2",
    subject: "수학",
    label: "확률과 통계",
    sourceSchoolEventId:
      "derived_math_exam_prep_TARGET_math_new"
  }
]);
assert.equal(repaired[1].mathExamDate, "2026-08-21");
assert.deepEqual(repaired[1].mathExamDates, [
  {
    id: "existing-fill",
    date: "2026-08-21",
    grade: "중3",
    subject: "수학",
    label: "교사라벨",
    sourceSchoolEventId:
      "derived_math_exam_prep_FILL_math_0"
  }
]);
assert.deepEqual(rows, rowsSnapshot);
assert.deepEqual(lessons, lessonsSnapshot);
assert.equal(
  repairExistingExamPrepRowsFromPersistedPreExamLessons(
    rows,
    []
  ),
  rows
);
assert.equal(
  repairExistingExamPrepRowsFromPersistedPreExamLessons(
    rows,
    [
      {
        lessonType: "preExam",
        date: "",
        sourceSchoolEventId:
          "derived_math_exam_prep_TARGET_ignored"
      }
    ]
  ),
  rows
);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const repairBoundaries = [
  "function repairExamPrepRowsFromPersistedPreExamLessons(rows = [], lessons = [])",
  "const preExamLessons = lessons.filter((lesson) =>",
  'lesson.lessonType === "preExam"',
  "lesson.date",
  'String(lesson.sourceSchoolEventId || "").startsWith("derived_math_")',
  "if (!rows.length || !preExamLessons.length) return rows",
  "return rows.map((row) => {",
  "const sourceLessons = preExamLessons.filter((lesson) =>",
  "getExamPrepIdFromDerivedMathEvent(lesson.sourceSchoolEventId, [row]) === row.examPrepId",
  "if (!sourceLessons.length) return row",
  "let didRepair = false",
  "normalizeMathExamEntries(row, { includeBlank: true })",
  "sourceLessons.forEach((lesson) => {",
  "lesson.sourceExamDate || addDaysInKorea(lesson.date, 1)",
  "sourceEventId.replace(`derived_math_${row.examPrepId}_`, \"\")",
  "const existingIndex = entries.findIndex((entry) =>",
  "const nextEntry = {",
  "id: previousEntry?.id || entryId",
  "date: previousEntry?.date || examDate",
  "grade: previousEntry?.grade || row.grade || \"\"",
  "subject: previousEntry?.subject || normalizeMathSubject(row.subject)",
  "label: previousEntry?.label || inferMathExamLabelFromPreExamLesson(lesson, row)",
  "sourceSchoolEventId: previousEntry?.sourceSchoolEventId || sourceEventId",
  "if (!didRepair) return row",
  "const nextEntries = entries.filter((entry) => entry.date || entry.label)",
  "row.mathExamDate || syncPrimaryMathExamDate(nextEntries)",
  "mathExamDates: nextEntries"
];
let previousIndex = -1;
for (const boundary of repairBoundaries) {
  const boundaryIndex = appSource.indexOf(
    boundary,
    previousIndex + 1
  );
  assert.ok(
    boundaryIndex > previousIndex,
    `examPrep row repair order changed: ${boundary}`
  );
  previousIndex = boundaryIndex;
}
assert.equal(
  appSource.split(
    "function repairExamPrepRowsFromPersistedPreExamLessons("
  ).length - 1,
  1
);

console.log(
  "examPrep row repair inventory TARGET/CONTROL fixtures passed"
);
