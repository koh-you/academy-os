import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { selectChangedGeneratedLessonPlanRows } from "../src/domains/lessons/generatedLessonRepairSelectors.js";

const sameCurrentControl = {
  examPrepId: "exam_CONTROL_SAME",
  schedule: {
    startTime: "13:00"
  }
};
const sameRepairedControl = structuredClone(sameCurrentControl);
const changedCurrentControl = {
  examPrepId: "exam_TARGET_CHANGED",
  schedule: {
    startTime: "14:00"
  }
};
const changedRepairedTarget = {
  examPrepId: "exam_TARGET_CHANGED",
  schedule: {
    startTime: "15:00"
  }
};
const appendedTarget = {
  examPrepId: "exam_TARGET_APPENDED",
  schedule: {
    startTime: "16:00"
  }
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
const modulePath =
  'from "../domains/lessons/generatedLessonRepairSelectors.js"';
assert.equal(appSource.split(modulePath).length - 1, 1);
assert.equal(
  appSource.split(
    "selectChangedGeneratedLessonPlanRows("
  ).length - 1,
  1
);
assert.equal(
  helperSource.split(
    "export function selectChangedGeneratedLessonPlanRows("
  ).length - 1,
  1
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
const effectBoundaries = [
  'if (session?.role !== "teacher" || !isAppStateReady) return',
  "setExamPrepRows((current) => {",
  "const repairedRows =",
  "repairExamPrepRowsFromPersistedPreExamLessons(current, lessons)",
  "const changedRows =",
  "selectChangedGeneratedLessonPlanRows(",
  "repairedRows,",
  "current",
  "if (changedRows.length > 0)",
  "persistExamPrepRows(changedRows)",
  "return changedRows.length > 0 ? repairedRows : current",
  "}, [isAppStateReady, lessons, session?.role, setExamPrepRows]);"
];
let previousEffectIndex = -1;
for (const boundary of effectBoundaries) {
  const boundaryIndex = effectSource.indexOf(
    boundary,
    previousEffectIndex + 1
  );
  assert.ok(
    boundaryIndex > previousEffectIndex,
    `generated lesson repair effect order changed: ${boundary}`
  );
  previousEffectIndex = boundaryIndex;
}
assert.ok(!effectSource.includes("repairedRows.filter("));
assert.equal(
  effectSource.split("persistExamPrepRows(changedRows)").length - 1,
  1
);

for (const selectorBoundary of [
  "return repairedRows.filter(",
  "JSON.stringify(row) !== JSON.stringify(currentRows[index])"
]) {
  assert.ok(
    helperSource.includes(selectorBoundary),
    `missing generated lesson repair selector boundary: ${selectorBoundary}`
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
    `generated lesson repair closeout crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log(
  "generated lesson repair delta selector boundary closeout passed"
);
