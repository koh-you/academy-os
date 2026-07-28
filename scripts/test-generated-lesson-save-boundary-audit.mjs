import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { selectGeneratedLessonsToSave } from "../src/domains/lessons/generatedLessonSaveSelector.js";
import {
  createGeneratedLessonFailedStatus,
  createGeneratedLessonSavedStatus,
  createGeneratedLessonSavingStatus
} from "../src/domains/lessons/generatedLessonSaveStatus.js";
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
const planItems = [
  { lesson: targetPatch, status: "update" },
  { lesson: currentControl, status: "persisted" },
  { lesson: newTarget, status: "create" }
];
const currentLessons = [currentTarget, currentControl];
const inputSnapshot = structuredClone({ currentLessons, planItems });
const lessonsToSave = selectGeneratedLessonsToSave(planItems);
const nextLessons = mergeGeneratedLessonLists(
  currentLessons,
  lessonsToSave
);
const savingStatus = createGeneratedLessonSavingStatus(lessonsToSave);
const savedStatus = createGeneratedLessonSavedStatus(lessonsToSave);
const failedStatus = createGeneratedLessonFailedStatus(
  lessonsToSave,
  "TARGET_ERROR"
);

assert.deepEqual(lessonsToSave, [targetPatch, newTarget]);
assert.equal(lessonsToSave[0], targetPatch);
assert.equal(lessonsToSave[1], newTarget);
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
assert.equal(savingStatus.lessons, lessonsToSave);
assert.equal(savingStatus.state, "saving");
assert.deepEqual(savedStatus.lessons, []);
assert.equal(savedStatus.state, "saved");
assert.equal(failedStatus.lessons, lessonsToSave);
assert.equal(failedStatus.state, "failed");
assert.deepEqual({ currentLessons, planItems }, inputSnapshot);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const selectorSource = await readFile(
  new URL(
    "../src/domains/lessons/generatedLessonSaveSelector.js",
    import.meta.url
  ),
  "utf8"
);
const stateSource = await readFile(
  new URL(
    "../src/domains/lessons/generatedLessonState.js",
    import.meta.url
  ),
  "utf8"
);
const statusSource = await readFile(
  new URL(
    "../src/domains/lessons/generatedLessonSaveStatus.js",
    import.meta.url
  ),
  "utf8"
);
for (const modulePath of [
  'from "../domains/lessons/generatedLessonSaveSelector.js"',
  'from "../domains/lessons/generatedLessonSaveStatus.js"',
  'from "../domains/lessons/generatedLessonState.js"'
]) {
  assert.equal(appSource.split(modulePath).length - 1, 1);
}
assert.equal(selectorSource.split("export function ").length - 1, 1);
assert.equal(stateSource.split("export function ").length - 1, 1);
assert.equal(statusSource.split("export function ").length - 1, 3);
assert.equal(
  appSource.split("selectGeneratedLessonsToSave(planItems)").length - 1,
  1
);
assert.equal(
  appSource.split(
    "mergeGeneratedLessonLists(current, lessonsToSave)"
  ).length - 1,
  1
);

const mergeStart = appSource.indexOf(
  "function mergeGeneratedLessonsIntoState(lessonsToSave)"
);
const saveEnd = appSource.indexOf(
  "\n  function saveGeneratedLessonsFromPlan(",
  mergeStart
);
assert.ok(mergeStart >= 0 && saveEnd > mergeStart);
const boundarySource = appSource.slice(mergeStart, saveEnd);
const orderedBoundaries = [
  "setLessons((current) => mergeGeneratedLessonLists(current, lessonsToSave))",
  "function saveGeneratedLessons(lessonsToSave)",
  "if (lessonsToSave.length === 0) return",
  "mergeGeneratedLessonsIntoState(lessonsToSave)",
  "setGeneratedLessonSaveStatus(",
  "createGeneratedLessonSavingStatus(lessonsToSave)",
  "postJsonWithTimeout(",
  '"/api/lessons/bulk"',
  "20000",
  ".then((result)",
  "if (Array.isArray(result.lessons) && result.lessons.length > 0)",
  "mergeGeneratedLessonsIntoState(result.lessons)",
  "createGeneratedLessonSavedStatus(lessonsToSave)",
  ".catch((error)",
  "createGeneratedLessonFailedStatus(lessonsToSave, error.message)"
];
let previousIndex = -1;
for (const boundary of orderedBoundaries) {
  const boundaryIndex = boundarySource.indexOf(boundary, previousIndex + 1);
  assert.ok(
    boundaryIndex > previousIndex,
    `generated lesson save aggregate order changed: ${boundary}`
  );
  previousIndex = boundaryIndex;
}
assert.ok(!boundarySource.includes("lessonsToSave.forEach("));
assert.ok(!boundarySource.includes(".filter((item) => item.status"));

for (const helperSource of [selectorSource, stateSource, statusSource]) {
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
      `generated lesson save aggregate helper crossed a side effect: ${forbiddenHelperEffect}`
    );
  }
}

console.log("generated lesson save boundary aggregate audit passed");
