import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { mergeGeneratedLessonLists } from "../src/domains/lessons/generatedLessonState.js";

const currentTarget = {
  lessonId: "lesson_TARGET",
  baseField: "BASE",
  marker: "TARGET_OLD"
};
const currentControl = {
  lessonId: "lesson_CONTROL",
  marker: "CONTROL"
};
const targetPatch = {
  lessonId: "lesson_TARGET",
  patchField: "PATCH",
  marker: "TARGET_NEW"
};
const newTarget = {
  lessonId: "lesson_NEW",
  marker: "NEW"
};
const currentLessons = [currentTarget, currentControl];
const lessonsToSave = [targetPatch, newTarget];
const inputSnapshot = structuredClone({ currentLessons, lessonsToSave });
const nextLessons = mergeGeneratedLessonLists(
  currentLessons,
  lessonsToSave
);
assert.deepEqual(nextLessons, [
  {
    lessonId: "lesson_TARGET",
    baseField: "BASE",
    patchField: "PATCH",
    marker: "TARGET_NEW"
  },
  currentControl,
  newTarget
]);
assert.equal(nextLessons[1], currentControl);
assert.equal(nextLessons[2], newTarget);
assert.deepEqual({ currentLessons, lessonsToSave }, inputSnapshot);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const helperSource = await readFile(
  new URL(
    "../src/domains/lessons/generatedLessonState.js",
    import.meta.url
  ),
  "utf8"
);
const modulePath = 'from "../domains/lessons/generatedLessonState.js"';
assert.equal(appSource.split(modulePath).length - 1, 1);
assert.equal(
  helperSource.split("export function mergeGeneratedLessonLists(").length - 1,
  1
);
assert.equal(
  appSource.split(
    "mergeGeneratedLessonLists(current, lessonsToSave)"
  ).length - 1,
  1
);
assert.equal(
  appSource.split("mergeGeneratedLessonsIntoState(").length - 1,
  4
);

const wrapperStart = appSource.indexOf(
  "function mergeGeneratedLessonsIntoState(lessonsToSave)"
);
const wrapperEnd = appSource.indexOf(
  "\n  function saveGeneratedLessons(lessonsToSave)",
  wrapperStart
);
assert.ok(wrapperStart >= 0 && wrapperEnd > wrapperStart);
const wrapperSource = appSource.slice(wrapperStart, wrapperEnd);
assert.ok(
  wrapperSource.includes(
    "setLessons((current) => mergeGeneratedLessonLists(current, lessonsToSave))"
  )
);
assert.ok(!wrapperSource.includes("lessonsToSave.forEach("));
assert.ok(!wrapperSource.includes("findIndex("));

const saveStart = appSource.indexOf(
  "function saveGeneratedLessons(lessonsToSave)"
);
const saveEnd = appSource.indexOf(
  "\n  function saveGeneratedLessonsFromPlan(",
  saveStart
);
assert.ok(saveStart >= 0 && saveEnd > saveStart);
const saveSource = appSource.slice(saveStart, saveEnd);
const optimisticIndex = saveSource.indexOf(
  "mergeGeneratedLessonsIntoState(lessonsToSave)"
);
const savingIndex = saveSource.indexOf(
  "createGeneratedLessonSavingStatus(lessonsToSave)",
  optimisticIndex
);
const requestIndex = saveSource.indexOf(
  "postJsonWithTimeout(",
  savingIndex
);
const endpointIndex = saveSource.indexOf(
  '"/api/lessons/bulk"',
  requestIndex
);
const resultGuardIndex = saveSource.indexOf(
  "if (Array.isArray(result.lessons) && result.lessons.length > 0)",
  endpointIndex
);
const resultMergeIndex = saveSource.indexOf(
  "mergeGeneratedLessonsIntoState(result.lessons)",
  resultGuardIndex
);
const savedIndex = saveSource.indexOf(
  "createGeneratedLessonSavedStatus(lessonsToSave)",
  resultMergeIndex
);
const failedIndex = saveSource.indexOf(
  "createGeneratedLessonFailedStatus(lessonsToSave, error.message)",
  savedIndex
);
assert.ok(
  optimisticIndex >= 0 &&
    savingIndex > optimisticIndex &&
    requestIndex > savingIndex &&
    endpointIndex > requestIndex &&
    resultGuardIndex > endpointIndex &&
    resultMergeIndex > resultGuardIndex &&
    savedIndex > resultMergeIndex &&
    failedIndex > savedIndex
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
    `generated lesson state closeout crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log("generated lesson state merge boundary closeout passed");
