import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { selectGeneratedLessonPlanRows } from "../src/domains/lessons/generatedLessonPlanSelectors.js";

function selectExistingGeneratedLessonPlanRows(
  rows = [],
  currentExamCycle = ""
) {
  return rows.filter(
    (row) =>
      (row.examCycle || currentExamCycle) === currentExamCycle
  );
}

const currentCycle = "2026-2-final";
const explicitTarget = {
  examPrepId: "exam_TARGET_EXPLICIT",
  examCycle: currentCycle,
  marker: "TARGET_EXPLICIT"
};
const previousControl = {
  examPrepId: "exam_CONTROL_PREVIOUS",
  examCycle: "2026-2-mid",
  marker: "CONTROL_PREVIOUS"
};
const missingCycleTarget = {
  examPrepId: "exam_TARGET_MISSING",
  marker: "TARGET_MISSING"
};
const futureControl = {
  examPrepId: "exam_CONTROL_FUTURE",
  examCycle: "2027-1-mid",
  marker: "CONTROL_FUTURE"
};
const emptyCycleTarget = {
  examPrepId: "exam_TARGET_EMPTY",
  examCycle: "",
  marker: "TARGET_EMPTY"
};
const rows = [
  explicitTarget,
  previousControl,
  missingCycleTarget,
  futureControl,
  emptyCycleTarget
];
const inputSnapshot = structuredClone(rows);
const selectedRows = selectExistingGeneratedLessonPlanRows(
  rows,
  currentCycle
);
const extractedRows = selectGeneratedLessonPlanRows(rows, currentCycle);

assert.deepEqual(selectedRows, [
  explicitTarget,
  missingCycleTarget,
  emptyCycleTarget
]);
assert.deepEqual(extractedRows, selectedRows);
assert.equal(extractedRows[0], explicitTarget);
assert.equal(extractedRows[1], missingCycleTarget);
assert.equal(extractedRows[2], emptyCycleTarget);
assert.equal(selectedRows[0], explicitTarget);
assert.equal(selectedRows[1], missingCycleTarget);
assert.equal(selectedRows[2], emptyCycleTarget);
assert.deepEqual(rows, inputSnapshot);
assert.deepEqual(
  selectExistingGeneratedLessonPlanRows(rows, "2026-2-mid"),
  [previousControl, missingCycleTarget, emptyCycleTarget]
);
assert.deepEqual(selectExistingGeneratedLessonPlanRows([], currentCycle), []);
assert.deepEqual(selectExistingGeneratedLessonPlanRows(), []);

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
const selectorStart = appSource.indexOf(
  "const generatedLessonPlanRows = useMemo("
);
const selectorEnd = appSource.indexOf(
  "  useEffect(() => {",
  selectorStart
);
assert.ok(selectorStart >= 0 && selectorEnd > selectorStart);
const selectorSource = appSource.slice(selectorStart, selectorEnd);
for (const selectorBoundary of [
  "const generatedLessonPlanRows = useMemo(",
  "() => selectGeneratedLessonPlanRows(examPrepRows, currentExamCycle)",
  "[examPrepRows]"
]) {
  assert.ok(
    selectorSource.includes(selectorBoundary),
    `missing generated lesson plan row selector boundary: ${selectorBoundary}`
  );
}
for (const helperBoundary of [
  "export function selectGeneratedLessonPlanRows(",
  "rows = []",
  'currentExamCycle = ""',
  "return rows.filter(",
  "(row.examCycle || currentExamCycle) === currentExamCycle"
]) {
  assert.ok(
    helperSource.includes(helperBoundary),
    `missing extracted generated lesson row selector: ${helperBoundary}`
  );
}
for (const forbiddenEffect of [
  "setExamPrepRows(",
  "persistExamPrepRows(",
  "setLessons(",
  "postJson",
  "/api/"
]) {
  assert.ok(
    !selectorSource.includes(forbiddenEffect),
    `generated lesson row selector crossed an effect: ${forbiddenEffect}`
  );
}

const planStart = appSource.indexOf(
  "const generatedLessonPlan = useMemo("
);
const planEnd = appSource.indexOf(
  "  function updateGeneratedLessonControls(",
  planStart
);
assert.ok(planStart >= 0 && planEnd > planStart);
const planSource = appSource.slice(planStart, planEnd);
for (const consumerBoundary of [
  "buildGeneratedLessonPlan({",
  "[generatedLessonControls, generatedLessonPlanRows, lessons, students]"
]) {
  assert.ok(
    planSource.includes(consumerBoundary),
    `missing generated lesson plan row consumer: ${consumerBoundary}`
  );
}

console.log(
  "generated lesson plan row selector inventory TARGET/CONTROL fixtures passed"
);
