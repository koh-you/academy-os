import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { selectChangedGeneratedLessonPlanRows } from "../src/domains/lessons/generatedLessonRepairSelectors.js";

const sameCurrentControl = {
  examPrepId: "exam_CONTROL_SAME",
  schoolName: "가상고",
  dates: ["2026-08-01"]
};
const sameRepairedControl = structuredClone(sameCurrentControl);
const changedCurrentControl = {
  examPrepId: "exam_TARGET_CHANGED",
  schoolName: "가상중",
  schedule: {
    startTime: "13:00"
  }
};
const changedRepairedTarget = {
  examPrepId: "exam_TARGET_CHANGED",
  schoolName: "가상중",
  schedule: {
    startTime: "14:00"
  }
};
const appendedTarget = {
  examPrepId: "exam_TARGET_APPENDED",
  schoolName: "추가고"
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
const changedRows = selectChangedGeneratedLessonPlanRows(
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
  selectChangedGeneratedLessonPlanRows(
    [sameRepairedControl],
    [sameCurrentControl, changedCurrentControl]
  ),
  []
);
assert.deepEqual(selectChangedGeneratedLessonPlanRows(), []);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const helperSource = await readFile(
  new URL(
    "../src/domains/lessons/generatedLessonRepairSelectors.js",
    import.meta.url
  ),
  "utf8"
);
for (const appBoundary of [
  'import { selectChangedGeneratedLessonPlanRows } from "../domains/lessons/generatedLessonRepairSelectors.js"',
  'session?.role !== "teacher" || !isAppStateReady',
  "setExamPrepRows((current) => {",
  "repairExamPrepRowsFromPersistedPreExamLessons(current, lessons)",
  "selectChangedGeneratedLessonPlanRows(",
  "repairedRows,",
  "current",
  "persistExamPrepRows(changedRows)",
  "return changedRows.length > 0 ? repairedRows : current",
  "[isAppStateReady, lessons, session?.role, setExamPrepRows]"
]) {
  assert.ok(
    appSource.includes(appBoundary),
    `missing generated lesson repair App boundary: ${appBoundary}`
  );
}
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
assert.ok(!effectSource.includes("repairedRows.filter("));
assert.equal(
  effectSource.split(
    "selectChangedGeneratedLessonPlanRows("
  ).length - 1,
  1
);
assert.equal(
  effectSource.split("persistExamPrepRows(changedRows)").length - 1,
  1
);

for (const helperBoundary of [
  "export function selectChangedGeneratedLessonPlanRows(",
  "return repairedRows.filter(",
  "JSON.stringify(row) !== JSON.stringify(currentRows[index])"
]) {
  assert.ok(
    helperSource.includes(helperBoundary),
    `missing generated lesson repair selector: ${helperBoundary}`
  );
}
for (const forbiddenHelperEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "/api/",
  "setExamPrepRows",
  "persistExamPrepRows",
  "setLessons",
  "localStorage",
  "Supabase",
  "Solapi",
  "new Date",
  "Date.now",
  "Promise.all"
]) {
  assert.ok(
    !helperSource.includes(forbiddenHelperEffect),
    `generated lesson repair selector crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log(
  "generated lesson repair delta selector TARGET/CONTROL extraction fixtures passed"
);
