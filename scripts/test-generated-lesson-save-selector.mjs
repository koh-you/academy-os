import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { selectGeneratedLessonsToSave } from "../src/domains/lessons/generatedLessonSaveSelector.js";

const createLesson = {
  lessonId: "lesson_TARGET_CREATE",
  marker: "TARGET_CREATE"
};
const updateLesson = {
  lessonId: "lesson_TARGET_UPDATE",
  marker: "TARGET_UPDATE"
};
const controlLesson = {
  lessonId: "lesson_CONTROL",
  marker: "CONTROL"
};
const planItems = [
  { lesson: createLesson, status: "create" },
  { lesson: controlLesson, status: "persisted" },
  { lesson: updateLesson, status: "update" },
  { lesson: controlLesson, status: "suppressed" }
];
const inputSnapshot = structuredClone(planItems);
const lessonsToSave = selectGeneratedLessonsToSave(planItems);

assert.deepEqual(lessonsToSave, [createLesson, updateLesson]);
assert.equal(lessonsToSave[0], createLesson);
assert.equal(lessonsToSave[1], updateLesson);
assert.deepEqual(selectGeneratedLessonsToSave(), []);
assert.deepEqual(planItems, inputSnapshot);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const helperSource = await readFile(
  new URL(
    "../src/domains/lessons/generatedLessonSaveSelector.js",
    import.meta.url
  ),
  "utf8"
);
for (const appBoundary of [
  'import { selectGeneratedLessonsToSave } from "../domains/lessons/generatedLessonSaveSelector.js"',
  "function saveGeneratedLessonsFromPlan(planItems)",
  "const lessonsToSave = selectGeneratedLessonsToSave(planItems)",
  "saveGeneratedLessons(lessonsToSave)",
  "mergeGeneratedLessonsIntoState(lessonsToSave)",
  "setGeneratedLessonSaveStatus({",
  '"/api/lessons/bulk"',
  "postJsonWithTimeout("
]) {
  assert.ok(
    appSource.includes(appBoundary),
    `missing generated lesson selector App boundary: ${appBoundary}`
  );
}
assert.ok(
  !appSource
    .slice(
      appSource.indexOf("function saveGeneratedLessonsFromPlan(planItems)"),
      appSource.indexOf(
        "\n  function handleApplyGeneratedLessons()",
        appSource.indexOf("function saveGeneratedLessonsFromPlan(planItems)")
      )
    )
    .includes('.filter((item) => item.status === "create"')
);
for (const forbiddenHelperEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "/api/",
  "setLessons",
  "setGeneratedLessonSaveStatus",
  "localStorage",
  "Supabase",
  "Solapi",
  "new Date",
  "Date.now",
  "Promise.all"
]) {
  assert.ok(
    !helperSource.includes(forbiddenHelperEffect),
    `generated lesson selector crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log("generated lesson save selector TARGET/CONTROL fixtures passed");
