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
  { lesson: updateLesson, status: "update" }
];
const inputSnapshot = structuredClone(planItems);
const lessonsToSave = selectGeneratedLessonsToSave(planItems);
assert.deepEqual(lessonsToSave, [createLesson, updateLesson]);
assert.equal(lessonsToSave[0], createLesson);
assert.equal(lessonsToSave[1], updateLesson);
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
const modulePath =
  'from "../domains/lessons/generatedLessonSaveSelector.js"';
assert.equal(appSource.split(modulePath).length - 1, 1);
assert.equal(
  helperSource.split("export function selectGeneratedLessonsToSave(")
    .length - 1,
  1
);
assert.equal(
  appSource.split("selectGeneratedLessonsToSave(planItems)").length - 1,
  1
);
assert.equal(
  appSource.split("saveGeneratedLessonsFromPlan(").length - 1,
  5
);

const adapterStart = appSource.indexOf(
  "function saveGeneratedLessonsFromPlan(planItems)"
);
const adapterEnd = appSource.indexOf(
  "\n  function handleApplyGeneratedLessons()",
  adapterStart
);
assert.ok(adapterStart >= 0 && adapterEnd > adapterStart);
const adapterSource = appSource.slice(adapterStart, adapterEnd);
const selectorIndex = adapterSource.indexOf(
  "const lessonsToSave = selectGeneratedLessonsToSave(planItems)"
);
const saveIndex = adapterSource.indexOf(
  "saveGeneratedLessons(lessonsToSave)",
  selectorIndex
);
assert.ok(selectorIndex >= 0 && saveIndex > selectorIndex);
assert.ok(!adapterSource.includes(".filter("));
assert.ok(!adapterSource.includes(".map("));

const saveStart = appSource.indexOf(
  "function saveGeneratedLessons(lessonsToSave)"
);
const saveEnd = appSource.indexOf(
  "\n  function saveGeneratedLessonsFromPlan(",
  saveStart
);
assert.ok(saveStart >= 0 && saveEnd > saveStart);
const saveSource = appSource.slice(saveStart, saveEnd);
const orderedEffects = [
  "if (lessonsToSave.length === 0) return",
  "mergeGeneratedLessonsIntoState(lessonsToSave)",
  "setGeneratedLessonSaveStatus(",
  "createGeneratedLessonSavingStatus(lessonsToSave)",
  "postJsonWithTimeout(",
  '"/api/lessons/bulk"',
  "20000",
  ".then((result)",
  "mergeGeneratedLessonsIntoState(result.lessons)",
  "createGeneratedLessonSavedStatus(lessonsToSave)",
  ".catch((error)",
  "createGeneratedLessonFailedStatus(lessonsToSave, error.message)"
];
let previousIndex = -1;
for (const boundary of orderedEffects) {
  const boundaryIndex = saveSource.indexOf(boundary, previousIndex + 1);
  assert.ok(
    boundaryIndex > previousIndex,
    `generated lesson save effect order changed: ${boundary}`
  );
  previousIndex = boundaryIndex;
}

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
    `generated lesson selector closeout crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log("generated lesson save selector boundary closeout passed");
