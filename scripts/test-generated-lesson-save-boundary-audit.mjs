import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { selectGeneratedLessonsToSave } from "../src/domains/lessons/generatedLessonSaveSelector.js";
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
for (const modulePath of [
  'from "../domains/lessons/generatedLessonSaveSelector.js"',
  'from "../domains/lessons/generatedLessonState.js"'
]) {
  assert.equal(appSource.split(modulePath).length - 1, 1);
}
assert.equal(selectorSource.split("export function ").length - 1, 1);
assert.equal(stateSource.split("export function ").length - 1, 1);
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
  "setGeneratedLessonSaveStatus({",
  'state: "saving"',
  "postJsonWithTimeout(",
  '"/api/lessons/bulk"',
  "20000",
  ".then((result)",
  "if (Array.isArray(result.lessons) && result.lessons.length > 0)",
  "mergeGeneratedLessonsIntoState(result.lessons)",
  'state: "saved"',
  ".catch((error)",
  'state: "failed"'
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

for (const helperSource of [selectorSource, stateSource]) {
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

for (const nextCandidate of [
  "lessons: lessonsToSave,",
  "message: `자동 수업 ${lessonsToSave.length}건 저장 중...`,",
  'state: "saving"',
  "lessons: [],",
  "message: `자동 수업 ${lessonsToSave.length}건 저장 완료`,",
  'state: "saved"',
  "message: `자동 수업 저장 실패 · ${error.message}`,",
  'state: "failed"'
]) {
  assert.ok(
    boundarySource.includes(nextCandidate),
    `generated lesson save status candidate changed: ${nextCandidate}`
  );
}

console.log("generated lesson save boundary aggregate audit passed");
