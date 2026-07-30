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
assert.deepEqual(
  selectGeneratedLessonPlanRows(rows, "2026-2-mid"),
  [previousControl, missingCycleTarget, emptyCycleTarget]
);
assert.deepEqual(selectGeneratedLessonPlanRows([], currentCycle), []);
assert.deepEqual(selectGeneratedLessonPlanRows(), []);

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
for (const appBoundary of [
  'import { selectGeneratedLessonPlanRows } from "../domains/lessons/generatedLessonPlanSelectors.js"',
  "const generatedLessonPlanRows = useMemo(",
  "() => selectGeneratedLessonPlanRows(examPrepRows, currentExamCycle)",
  "[examPrepRows]",
  "buildGeneratedLessonPlan({",
  "[generatedLessonControls, generatedLessonPlanRows, lessons, students]"
]) {
  assert.ok(
    appSource.includes(appBoundary),
    `missing generated lesson plan selector App boundary: ${appBoundary}`
  );
}
const selectorStart = appSource.indexOf(
  "const generatedLessonPlanRows = useMemo("
);
const selectorEnd = appSource.indexOf("  useEffect(() => {", selectorStart);
assert.ok(selectorStart >= 0 && selectorEnd > selectorStart);
const selectorSource = appSource.slice(selectorStart, selectorEnd);
assert.ok(!selectorSource.includes("examPrepRows.filter("));
assert.ok(!selectorSource.includes("setExamPrepRows("));
assert.ok(!selectorSource.includes("persistExamPrepRows("));

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
    `generated lesson plan selector crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log(
  "generated lesson plan row selector TARGET/CONTROL extraction fixtures passed"
);
