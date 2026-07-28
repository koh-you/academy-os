import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { selectGeneratedLessonPlanRows } from "../src/domains/lessons/generatedLessonPlanSelectors.js";

const currentCycle = "2026-2-final";
const explicitTarget = {
  examPrepId: "exam_TARGET_EXPLICIT",
  examCycle: currentCycle
};
const previousControl = {
  examPrepId: "exam_CONTROL_PREVIOUS",
  examCycle: "2026-2-mid"
};
const missingCycleTarget = {
  examPrepId: "exam_TARGET_MISSING"
};
const futureControl = {
  examPrepId: "exam_CONTROL_FUTURE",
  examCycle: "2027-1-mid"
};
const emptyCycleTarget = {
  examPrepId: "exam_TARGET_EMPTY",
  examCycle: ""
};
const rows = [
  explicitTarget,
  previousControl,
  missingCycleTarget,
  futureControl,
  emptyCycleTarget
];
const inputSnapshot = structuredClone(rows);
const selectedRows = selectGeneratedLessonPlanRows(rows, currentCycle);

assert.deepEqual(selectedRows, [
  explicitTarget,
  missingCycleTarget,
  emptyCycleTarget
]);
assert.equal(selectedRows[0], explicitTarget);
assert.equal(selectedRows[1], missingCycleTarget);
assert.equal(selectedRows[2], emptyCycleTarget);
assert.deepEqual(rows, inputSnapshot);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const helperSource = await readFile(
  new URL(
    "../src/domains/lessons/generatedLessonPlanSelectors.js",
    import.meta.url
  ),
  "utf8"
);
const modulePath =
  'from "../domains/lessons/generatedLessonPlanSelectors.js"';
assert.equal(appSource.split(modulePath).length - 1, 1);
assert.equal(
  helperSource.split("export function selectGeneratedLessonPlanRows(")
    .length - 1,
  1
);
assert.equal(
  appSource.split(
    "selectGeneratedLessonPlanRows(examPrepRows, currentExamCycle)"
  ).length - 1,
  1
);

const selectorStart = appSource.indexOf(
  "const generatedLessonPlanRows = useMemo("
);
const repairStart = appSource.indexOf("  useEffect(() => {", selectorStart);
const planStart = appSource.indexOf(
  "const generatedLessonPlan = useMemo(",
  repairStart
);
const planEnd = appSource.indexOf(
  "  function updateGeneratedLessonControls(",
  planStart
);
assert.ok(
  selectorStart >= 0 &&
    repairStart > selectorStart &&
    planStart > repairStart &&
    planEnd > planStart
);

const selectorSource = appSource.slice(selectorStart, repairStart);
assert.ok(
  selectorSource.includes(
    "() => selectGeneratedLessonPlanRows(examPrepRows, currentExamCycle)"
  )
);
assert.ok(selectorSource.includes("[examPrepRows]"));
assert.ok(!selectorSource.includes(".filter("));
assert.ok(!selectorSource.includes("setExamPrepRows("));

const repairSource = appSource.slice(repairStart, planStart);
const repairBoundaries = [
  'session?.role !== "teacher" || !isAppStateReady',
  "setExamPrepRows((current) => {",
  "repairExamPrepRowsFromPersistedPreExamLessons(current, lessons)",
  "persistExamPrepRows(changedRows)",
  "return changedRows.length > 0 ? repairedRows : current",
  "[isAppStateReady, lessons, session?.role, setExamPrepRows]"
];
let previousRepairIndex = -1;
for (const boundary of repairBoundaries) {
  const boundaryIndex = repairSource.indexOf(
    boundary,
    previousRepairIndex + 1
  );
  assert.ok(
    boundaryIndex > previousRepairIndex,
    `generated lesson repair/persist order changed: ${boundary}`
  );
  previousRepairIndex = boundaryIndex;
}

const planSource = appSource.slice(planStart, planEnd);
assert.ok(
  planSource.includes(
    "buildGeneratedLessonPlan({ rows: generatedLessonPlanRows, lessons, students, controls: generatedLessonControls })"
  )
);
assert.ok(
  planSource.includes(
    "[generatedLessonControls, generatedLessonPlanRows, lessons, students]"
  )
);

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
    `generated lesson plan selector closeout crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log("generated lesson plan row selector boundary closeout passed");
