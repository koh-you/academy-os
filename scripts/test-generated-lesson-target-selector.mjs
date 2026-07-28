import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { selectGeneratedLessonPlanItemsByKey } from "../src/domains/lessons/generatedLessonTargetSelector.js";

const firstTarget = {
  generatedKey: "generated_TARGET_SHARED",
  lesson: {
    lessonId: "lesson_TARGET_FIRST"
  },
  status: "create"
};
const otherKeyControl = {
  generatedKey: "generated_CONTROL_OTHER",
  lesson: {
    lessonId: "lesson_CONTROL_OTHER"
  },
  status: "update"
};
const secondTarget = {
  generatedKey: "generated_TARGET_SHARED",
  lesson: {
    lessonId: "lesson_TARGET_SECOND"
  },
  status: "update"
};
const missingKeyControl = {
  lesson: {
    lessonId: "lesson_CONTROL_MISSING_KEY"
  },
  status: "create"
};
const planItems = [
  firstTarget,
  otherKeyControl,
  secondTarget,
  missingKeyControl
];
const inputSnapshot = structuredClone(planItems);
const selected = selectGeneratedLessonPlanItemsByKey(
  planItems,
  "generated_TARGET_SHARED"
);

assert.deepEqual(selected, [firstTarget, secondTarget]);
assert.equal(selected[0], firstTarget);
assert.equal(selected[1], secondTarget);
assert.deepEqual(planItems, inputSnapshot);
assert.deepEqual(
  selectGeneratedLessonPlanItemsByKey(
    planItems,
    "generated_CONTROL_UNKNOWN"
  ),
  []
);
assert.deepEqual(
  selectGeneratedLessonPlanItemsByKey(planItems, undefined),
  [missingKeyControl]
);
assert.deepEqual(selectGeneratedLessonPlanItemsByKey(), []);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const helperSource = await readFile(
  new URL(
    "../src/domains/lessons/generatedLessonTargetSelector.js",
    import.meta.url
  ),
  "utf8"
);
for (const appBoundary of [
  'import { selectGeneratedLessonPlanItemsByKey } from "../domains/lessons/generatedLessonTargetSelector.js"',
  "function handleApplyGeneratedLesson(generatedKey)",
  "saveGeneratedLessonsFromPlan(",
  "selectGeneratedLessonPlanItemsByKey(",
  "generatedLessonPlan,",
  "generatedKey"
]) {
  assert.ok(
    appSource.includes(appBoundary),
    `missing generated lesson target App boundary: ${appBoundary}`
  );
}
const handlerStart = appSource.indexOf(
  "  function handleApplyGeneratedLesson(generatedKey) {"
);
const handlerEnd = appSource.indexOf(
  "  function handleRetryGeneratedLessonSave()",
  handlerStart
);
assert.ok(handlerStart >= 0 && handlerEnd > handlerStart);
const handlerSource = appSource.slice(handlerStart, handlerEnd);
assert.ok(!handlerSource.includes("generatedLessonPlan.filter("));
assert.ok(!handlerSource.includes("saveGeneratedLessons("));
assert.equal(
  handlerSource.split("saveGeneratedLessonsFromPlan(").length - 1,
  1
);
assert.equal(
  handlerSource.split("selectGeneratedLessonPlanItemsByKey(").length - 1,
  1
);

for (const helperBoundary of [
  "export function selectGeneratedLessonPlanItemsByKey(",
  "return planItems.filter(",
  "(item) => item.generatedKey === generatedKey"
]) {
  assert.ok(
    helperSource.includes(helperBoundary),
    `missing generated lesson target selector: ${helperBoundary}`
  );
}
for (const forbiddenHelperEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "/api/",
  "saveGeneratedLessons",
  "setLessons",
  "setExamPrepRows",
  "persistExamPrepRows",
  "localStorage",
  "Supabase",
  "Solapi",
  "new Date",
  "Date.now",
  "Promise.all"
]) {
  assert.ok(
    !helperSource.includes(forbiddenHelperEffect),
    `generated lesson target selector crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log(
  "generated lesson target selector TARGET/CONTROL extraction fixtures passed"
);
