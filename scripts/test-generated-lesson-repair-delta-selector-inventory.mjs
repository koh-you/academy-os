import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

function selectExistingChangedGeneratedLessonPlanRows(
  repairedRows = [],
  currentRows = []
) {
  return repairedRows.filter(
    (row, index) =>
      JSON.stringify(row) !== JSON.stringify(currentRows[index])
  );
}

const sameCurrentControl = {
  examPrepId: "exam_CONTROL_SAME",
  schoolName: "가상고",
  dates: ["2026-08-01"]
};
const sameRepairedControl = structuredClone(sameCurrentControl);
const changedCurrentControl = {
  examPrepId: "exam_TARGET_CHANGED",
  schoolName: "가상중",
  dates: ["2026-08-02"],
  schedule: {
    startTime: "13:00"
  }
};
const changedRepairedTarget = {
  examPrepId: "exam_TARGET_CHANGED",
  schoolName: "가상중",
  dates: ["2026-08-02"],
  schedule: {
    startTime: "14:00"
  }
};
const appendedTarget = {
  examPrepId: "exam_TARGET_APPENDED",
  schoolName: "추가고",
  dates: ["2026-08-03"]
};
const currentRows = [
  sameCurrentControl,
  changedCurrentControl
];
const repairedRows = [
  sameRepairedControl,
  changedRepairedTarget,
  appendedTarget
];
const currentSnapshot = structuredClone(currentRows);
const repairedSnapshot = structuredClone(repairedRows);
const changedRows =
  selectExistingChangedGeneratedLessonPlanRows(
    repairedRows,
    currentRows
  );

assert.deepEqual(changedRows, [
  changedRepairedTarget,
  appendedTarget
]);
assert.equal(changedRows[0], changedRepairedTarget);
assert.equal(changedRows[1], appendedTarget);
assert.deepEqual(currentRows, currentSnapshot);
assert.deepEqual(repairedRows, repairedSnapshot);
assert.deepEqual(
  selectExistingChangedGeneratedLessonPlanRows(
    [sameRepairedControl],
    [sameCurrentControl, changedCurrentControl]
  ),
  []
);
assert.deepEqual(
  selectExistingChangedGeneratedLessonPlanRows(),
  []
);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const repairAnchor = appSource.indexOf(
  "repairExamPrepRowsFromPersistedPreExamLessons(current, lessons)"
);
const effectStart = appSource.lastIndexOf(
  "  useEffect(() => {",
  repairAnchor
);
const effectEnd = appSource.indexOf(
  "  const generatedLessonPlan = useMemo(",
  repairAnchor
);
assert.ok(
  effectStart >= 0 &&
    repairAnchor > effectStart &&
    effectEnd > repairAnchor
);
const effectSource = appSource.slice(effectStart, effectEnd);
const boundaries = [
  'session?.role !== "teacher" || !isAppStateReady',
  "setExamPrepRows((current) => {",
  "const repairedRows =",
  "repairExamPrepRowsFromPersistedPreExamLessons(current, lessons)",
  "const changedRows = repairedRows.filter(",
  "(row, index) => JSON.stringify(row) !== JSON.stringify(current[index])",
  "if (changedRows.length > 0)",
  "persistExamPrepRows(changedRows)",
  "return changedRows.length > 0 ? repairedRows : current",
  "[isAppStateReady, lessons, session?.role, setExamPrepRows]"
];
let previousIndex = -1;
for (const boundary of boundaries) {
  const boundaryIndex = effectSource.indexOf(
    boundary,
    previousIndex + 1
  );
  assert.ok(
    boundaryIndex > previousIndex,
    `generated lesson repair effect order changed: ${boundary}`
  );
  previousIndex = boundaryIndex;
}
assert.equal(
  effectSource.split("persistExamPrepRows(changedRows)").length - 1,
  1
);

console.log(
  "generated lesson repair delta selector inventory TARGET/CONTROL fixtures passed"
);
