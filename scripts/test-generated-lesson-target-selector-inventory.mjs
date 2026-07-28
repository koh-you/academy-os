import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

function selectExistingGeneratedLessonPlanItemsByKey(
  planItems = [],
  generatedKey
) {
  return planItems.filter(
    (item) => item.generatedKey === generatedKey
  );
}

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
const differentCaseControl = {
  generatedKey: "GENERATED_TARGET_SHARED",
  lesson: {
    lessonId: "lesson_CONTROL_DIFFERENT_CASE"
  },
  status: "create"
};
const planItems = [
  firstTarget,
  otherKeyControl,
  secondTarget,
  missingKeyControl,
  differentCaseControl
];
const inputSnapshot = structuredClone(planItems);
const selected = selectExistingGeneratedLessonPlanItemsByKey(
  planItems,
  "generated_TARGET_SHARED"
);

assert.deepEqual(selected, [firstTarget, secondTarget]);
assert.equal(selected[0], firstTarget);
assert.equal(selected[1], secondTarget);
assert.deepEqual(planItems, inputSnapshot);
assert.deepEqual(
  selectExistingGeneratedLessonPlanItemsByKey(
    planItems,
    "generated_CONTROL_UNKNOWN"
  ),
  []
);
assert.deepEqual(
  selectExistingGeneratedLessonPlanItemsByKey(planItems, undefined),
  [missingKeyControl]
);
assert.deepEqual(
  selectExistingGeneratedLessonPlanItemsByKey(),
  []
);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
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
const boundaries = [
  "function handleApplyGeneratedLesson(generatedKey)",
  "saveGeneratedLessonsFromPlan(",
  "generatedLessonPlan.filter(",
  "(item) => item.generatedKey === generatedKey"
];
let previousIndex = -1;
for (const boundary of boundaries) {
  const boundaryIndex = handlerSource.indexOf(
    boundary,
    previousIndex + 1
  );
  assert.ok(
    boundaryIndex > previousIndex,
    `generated lesson target handler order changed: ${boundary}`
  );
  previousIndex = boundaryIndex;
}
assert.equal(
  handlerSource.split("saveGeneratedLessonsFromPlan(").length - 1,
  1
);
assert.equal(
  handlerSource.split("generatedLessonPlan.filter(").length - 1,
  1
);
assert.ok(!handlerSource.includes("saveGeneratedLessons("));
assert.ok(!handlerSource.includes("fetch("));
assert.ok(!handlerSource.includes("/api/"));

console.log(
  "generated lesson target selector inventory TARGET/CONTROL fixtures passed"
);
