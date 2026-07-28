import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

function selectExistingGeneratedLessonsToSave(planItems = []) {
  return planItems
    .filter((item) => item.status === "create" || item.status === "update")
    .map((item) => item.lesson);
}

const createLesson = {
  lessonId: "lesson_TARGET_CREATE",
  marker: "TARGET_CREATE"
};
const updateLesson = {
  lessonId: "lesson_TARGET_UPDATE",
  marker: "TARGET_UPDATE"
};
const persistedLesson = {
  lessonId: "lesson_CONTROL_PERSISTED",
  marker: "CONTROL_PERSISTED"
};
const suppressedLesson = {
  lessonId: "lesson_CONTROL_SUPPRESSED",
  marker: "CONTROL_SUPPRESSED"
};
const planItems = [
  {
    generatedKey: "generated_TARGET_CREATE",
    lesson: createLesson,
    status: "create"
  },
  {
    generatedKey: "generated_CONTROL_PERSISTED",
    lesson: persistedLesson,
    status: "persisted"
  },
  {
    generatedKey: "generated_TARGET_UPDATE",
    lesson: updateLesson,
    status: "update"
  },
  {
    generatedKey: "generated_CONTROL_SUPPRESSED",
    lesson: suppressedLesson,
    status: "suppressed"
  },
  {
    generatedKey: "generated_CONTROL_MISSING",
    lesson: { lessonId: "lesson_CONTROL_MISSING" }
  }
];
const inputSnapshot = structuredClone(planItems);
const lessonsToSave = selectExistingGeneratedLessonsToSave(planItems);

assert.deepEqual(lessonsToSave, [createLesson, updateLesson]);
assert.equal(lessonsToSave[0], createLesson);
assert.equal(lessonsToSave[1], updateLesson);
assert.deepEqual(planItems, inputSnapshot);
assert.deepEqual(selectExistingGeneratedLessonsToSave([]), []);
assert.deepEqual(selectExistingGeneratedLessonsToSave(), []);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const functionStart = appSource.indexOf(
  "function saveGeneratedLessonsFromPlan(planItems)"
);
const functionEnd = appSource.indexOf(
  "\n  function handleApplyGeneratedLessons()",
  functionStart
);
assert.ok(functionStart >= 0 && functionEnd > functionStart);
const functionSource = appSource.slice(functionStart, functionEnd);
for (const selectorBoundary of [
  "const lessonsToSave = planItems",
  '.filter((item) => item.status === "create" || item.status === "update")',
  ".map((item) => item.lesson)",
  "saveGeneratedLessons(lessonsToSave)"
]) {
  assert.ok(
    functionSource.includes(selectorBoundary),
    `missing generated lesson selector boundary: ${selectorBoundary}`
  );
}
assert.ok(!functionSource.includes("postJsonWithTimeout("));
assert.ok(!functionSource.includes("setLessons("));
assert.ok(!functionSource.includes("setGeneratedLessonSaveStatus("));

assert.equal(
  appSource.split("saveGeneratedLessonsFromPlan(").length - 1,
  5
);
for (const AppOwnedCaller of [
  "saveGeneratedLessonsFromPlan(generatedLessonPlan)",
  "saveGeneratedLessonsFromPlan(generatedLessonPlan.filter(",
  "saveGeneratedLessonsFromPlan(preExamLessonsToSync)"
]) {
  assert.ok(
    appSource.includes(AppOwnedCaller),
    `missing App-owned generated lesson save caller: ${AppOwnedCaller}`
  );
}

const saveFunctionStart = appSource.indexOf(
  "function saveGeneratedLessons(lessonsToSave)"
);
const saveFunctionEnd = appSource.indexOf(
  "\n  function saveGeneratedLessonsFromPlan(",
  saveFunctionStart
);
assert.ok(saveFunctionStart >= 0 && saveFunctionEnd > saveFunctionStart);
const saveFunctionSource = appSource.slice(
  saveFunctionStart,
  saveFunctionEnd
);
for (const sideEffectBoundary of [
  "mergeGeneratedLessonsIntoState(lessonsToSave)",
  "setGeneratedLessonSaveStatus({",
  '"/api/lessons/bulk"',
  "postJsonWithTimeout(",
  ".then((result)",
  ".catch((error)"
]) {
  assert.ok(
    saveFunctionSource.includes(sideEffectBoundary),
    `missing App-owned generated lesson save effect: ${sideEffectBoundary}`
  );
}

console.log(
  "generated lesson save selector inventory TARGET/CONTROL fixtures passed"
);
