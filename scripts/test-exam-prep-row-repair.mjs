import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createPersistedPreExamRowRepair } from "../src/domains/lessons/persistedPreExamRowRepair.js";

const calls = [];
const repairExamPrepRowsFromPersistedPreExamLessons =
  createPersistedPreExamRowRepair({
    addDaysInKorea(date, days) {
      calls.push(["addDaysInKorea", date, days]);
      return "2026-08-11";
    },
    getExamPrepIdFromDerivedMathEvent(
      sourceSchoolEventId,
      rows
    ) {
      calls.push([
        "getExamPrepIdFromDerivedMathEvent",
        sourceSchoolEventId,
        rows
      ]);
      return sourceSchoolEventId.includes(
        rows[0].examPrepId
      )
        ? rows[0].examPrepId
        : "";
    },
    inferMathExamLabelFromPreExamLesson(
      lesson,
      row
    ) {
      calls.push([
        "inferMathExamLabelFromPreExamLesson",
        lesson,
        row
      ]);
      return "미적분";
    },
    normalizeGradeLabel(grade) {
      calls.push(["normalizeGradeLabel", grade]);
      return grade;
    },
    normalizeMathExamEntries(row, options) {
      calls.push([
        "normalizeMathExamEntries",
        row,
        options
      ]);
      return [];
    },
    normalizeMathSubject(subject) {
      calls.push(["normalizeMathSubject", subject]);
      return "수학";
    },
    safeIdPart(value) {
      calls.push(["safeIdPart", value]);
      return String(value).replaceAll(" ", "-");
    },
    syncPrimaryMathExamDate(entries) {
      calls.push([
        "syncPrimaryMathExamDate",
        entries
      ]);
      return entries[0]?.date || "";
    }
  });

const targetRow = {
  examPrepId: "exam_prep_TARGET",
  schoolName: "가상고",
  grade: "고2",
  subject: "공통수학1",
  mathExamDate: "",
  mathExamDates: []
};
const controlRow = {
  examPrepId: "exam_prep_CONTROL",
  schoolName: "다른고",
  grade: "고1",
  subject: "수학",
  mathExamDate: "2026-08-30",
  mathExamDates: []
};
const rows = [targetRow, controlRow];
const lesson = {
  lessonType: "preExam",
  date: "2026-08-10",
  sourceSchoolEventId:
    "derived_math_exam_prep_TARGET_math_0",
  className: "가상고 고2 미적분 직전수업"
};
const lessons = [lesson];
const rowsSnapshot = structuredClone(rows);
const lessonsSnapshot = structuredClone(lessons);
const repaired =
  repairExamPrepRowsFromPersistedPreExamLessons(
    rows,
    lessons
  );

assert.notEqual(repaired, rows);
assert.notEqual(repaired[0], targetRow);
assert.equal(repaired[1], controlRow);
assert.deepEqual(repaired[0], {
  ...targetRow,
  mathExamDate: "2026-08-11",
  mathExamDates: [
    {
      id: "math_0",
      date: "2026-08-11",
      grade: "고2",
      subject: "수학",
      label: "미적분",
      sourceSchoolEventId:
        "derived_math_exam_prep_TARGET_math_0"
    }
  ]
});
assert.deepEqual(rows, rowsSnapshot);
assert.deepEqual(lessons, lessonsSnapshot);
assert.equal(
  repairExamPrepRowsFromPersistedPreExamLessons(
    rows,
    []
  ),
  rows
);
assert.ok(
  calls.some(
    ([name]) =>
      name === "normalizeMathExamEntries"
  )
);
assert.ok(
  calls.some(
    ([name]) =>
      name ===
      "inferMathExamLabelFromPreExamLesson"
  )
);
assert.ok(
  calls.some(
    ([name]) =>
      name === "syncPrimaryMathExamDate"
  )
);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const repairSource = await readFile(
  new URL(
    "../src/domains/lessons/persistedPreExamRowRepair.js",
    import.meta.url
  ),
  "utf8"
);
assert.equal(
  appSource.split(
    'from "../domains/lessons/persistedPreExamRowRepair.js"'
  ).length - 1,
  1
);
assert.equal(
  appSource.split(
    "createPersistedPreExamRowRepair({"
  ).length - 1,
  1
);
assert.equal(
  repairSource.split(
    "export function createPersistedPreExamRowRepair("
  ).length - 1,
  1
);
assert.equal(
  appSource.split(
    "function repairExamPrepRowsFromPersistedPreExamLessons("
  ).length - 1,
  0
);
for (const appBoundary of [
  "const repairExamPrepRowsFromPersistedPreExamLessons =",
  "addDaysInKorea,",
  "getExamPrepIdFromDerivedMathEvent,",
  "inferMathExamLabelFromPreExamLesson,",
  "normalizeGradeLabel,",
  "normalizeMathExamEntries,",
  "normalizeMathSubject,",
  "safeIdPart,",
  "syncPrimaryMathExamDate",
  "const repairedRows = repairExamPrepRowsFromPersistedPreExamLessons(current, lessons)",
  "persistExamPrepRows(changedRows)"
]) {
  assert.ok(
    appSource.includes(appBoundary),
    `missing extracted persisted repair App boundary: ${appBoundary}`
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
    !repairSource.includes(forbiddenEffect),
    `persisted preExam repair crossed a side effect: ${forbiddenEffect}`
  );
}

console.log(
  "persisted preExam row repair extraction TARGET/CONTROL fixtures passed"
);
