import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { selectGeneratedLessonPlanItemsByKey } from "../src/domains/lessons/generatedLessonTargetSelector.js";

const firstTarget = {
  generatedKey: "generated_TARGET_SHARED",
  lesson: {
    lessonId: "lesson_TARGET_FIRST"
  }
};
const otherKeyControl = {
  generatedKey: "generated_CONTROL_OTHER",
  lesson: {
    lessonId: "lesson_CONTROL_OTHER"
  }
};
const secondTarget = {
  generatedKey: "generated_TARGET_SHARED",
  lesson: {
    lessonId: "lesson_TARGET_SECOND"
  }
};
const missingKeyControl = {
  lesson: {
    lessonId: "lesson_CONTROL_MISSING_KEY"
  }
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
const modulePath =
  'from "../domains/lessons/generatedLessonTargetSelector.js"';
assert.equal(appSource.split(modulePath).length - 1, 1);
assert.equal(
  appSource.split(
    "selectGeneratedLessonPlanItemsByKey("
  ).length - 1,
  1
);
assert.equal(
  helperSource.split(
    "export function selectGeneratedLessonPlanItemsByKey("
  ).length - 1,
  1
);

const handlerStart = appSource.indexOf(
  "  function handleApplyGeneratedLesson(generatedKey) {"
);
const handlerEnd = appSource.indexOf(
  "  function handleRetryGeneratedLessonSave()",
  handlerStart
);
assert.ok(handlerStart >= 0 && handlerEnd > handlerStart);
const handlerSource = appSource.slice(handlerStart, handlerEnd);
const handlerBoundaries = [
  "function handleApplyGeneratedLesson(generatedKey)",
  "saveGeneratedLessonsFromPlan(",
  "selectGeneratedLessonPlanItemsByKey(",
  "generatedLessonPlan,",
  "generatedKey"
];
let previousHandlerIndex = -1;
for (const boundary of handlerBoundaries) {
  const boundaryIndex = handlerSource.indexOf(
    boundary,
    previousHandlerIndex + 1
  );
  assert.ok(
    boundaryIndex > previousHandlerIndex,
    `generated lesson target handler order changed: ${boundary}`
  );
  previousHandlerIndex = boundaryIndex;
}
assert.equal(
  handlerSource.split("saveGeneratedLessonsFromPlan(").length - 1,
  1
);
assert.equal(
  handlerSource.split(
    "selectGeneratedLessonPlanItemsByKey("
  ).length - 1,
  1
);
for (const forbiddenHandlerEffect of [
  "generatedLessonPlan.filter(",
  "saveGeneratedLessons(",
  "fetch(",
  "postJson",
  "/api/",
  "setLessons(",
  "setGeneratedLessonSaveStatus("
]) {
  assert.ok(
    !handlerSource.includes(forbiddenHandlerEffect),
    `generated lesson target handler crossed its save boundary: ${forbiddenHandlerEffect}`
  );
}

for (const selectorBoundary of [
  "return planItems.filter(",
  "(item) => item.generatedKey === generatedKey"
]) {
  assert.ok(
    helperSource.includes(selectorBoundary),
    `missing generated lesson target selector boundary: ${selectorBoundary}`
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
    `generated lesson target closeout crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log(
  "generated lesson target selector boundary closeout passed"
);
