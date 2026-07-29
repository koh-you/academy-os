import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createPersistedPreExamRowRepair } from "../src/domains/lessons/persistedPreExamRowRepair.js";

const repairExamPrepRowsFromPersistedPreExamLessons =
  createPersistedPreExamRowRepair({
    addDaysInKorea() {
      return "2026-08-11";
    },
    getExamPrepIdFromDerivedMathEvent(
      sourceSchoolEventId,
      rows
    ) {
      return sourceSchoolEventId.includes(
        rows[0].examPrepId
      )
        ? rows[0].examPrepId
        : "";
    },
    inferMathExamLabelFromPreExamLesson() {
      return "미적분";
    },
    normalizeGradeLabel(grade) {
      return grade;
    },
    normalizeMathExamEntries() {
      return [];
    },
    normalizeMathSubject() {
      return "수학";
    },
    safeIdPart(value) {
      return String(value);
    },
    syncPrimaryMathExamDate(entries) {
      return entries[0]?.date || "";
    }
  });

const targetRow = {
  examPrepId: "exam_prep_TARGET",
  grade: "고2",
  subject: "수학",
  mathExamDate: "",
  mathExamDates: []
};
const controlRow = {
  examPrepId: "exam_prep_CONTROL",
  grade: "고1",
  subject: "수학",
  mathExamDate: "2026-08-30",
  mathExamDates: []
};
const rows = [targetRow, controlRow];
const lessons = [
  {
    lessonType: "preExam",
    date: "2026-08-10",
    sourceSchoolEventId:
      "derived_math_exam_prep_TARGET_math_0"
  }
];
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
assert.deepEqual(repaired[0].mathExamDates, [
  {
    id: "math_0",
    date: "2026-08-11",
    grade: "고2",
    subject: "수학",
    label: "미적분",
    sourceSchoolEventId:
      "derived_math_exam_prep_TARGET_math_0"
  }
]);
assert.equal(repaired[0].mathExamDate, "2026-08-11");
assert.deepEqual(rows, rowsSnapshot);
assert.deepEqual(lessons, lessonsSnapshot);
assert.equal(
  repairExamPrepRowsFromPersistedPreExamLessons(
    rows,
    []
  ),
  rows
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
  appSource.split(
    "repairExamPrepRowsFromPersistedPreExamLessons("
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
const injectionBoundaries = [
  "const repairExamPrepRowsFromPersistedPreExamLessons =",
  "createPersistedPreExamRowRepair({",
  "addDaysInKorea,",
  "getExamPrepIdFromDerivedMathEvent,",
  "inferMathExamLabelFromPreExamLesson,",
  "normalizeGradeLabel,",
  "normalizeMathExamEntries,",
  "normalizeMathSubject,",
  "safeIdPart,",
  "syncPrimaryMathExamDate"
];
let previousIndex = -1;
for (const boundary of injectionBoundaries) {
  const boundaryIndex = appSource.indexOf(
    boundary,
    previousIndex + 1
  );
  assert.ok(
    boundaryIndex > previousIndex,
    `persisted preExam repair injection order changed: ${boundary}`
  );
  previousIndex = boundaryIndex;
}
for (const persistenceBoundary of [
  "const repairedRows = repairExamPrepRowsFromPersistedPreExamLessons(current, lessons)",
  "selectChangedGeneratedLessonPlanRows(",
  "persistExamPrepRows(changedRows)",
  "return changedRows.length > 0 ? repairedRows : current"
]) {
  assert.ok(
    appSource.includes(persistenceBoundary),
    `missing App-owned repair persistence boundary: ${persistenceBoundary}`
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
    `persisted preExam repair closeout crossed a side effect: ${forbiddenEffect}`
  );
}

console.log(
  "persisted preExam row repair boundary closeout passed"
);
