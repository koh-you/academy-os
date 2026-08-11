import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { mergeGeneratedLessonLists } from "../src/domains/lessons/generatedLessonState.js";

function mergeExistingGeneratedLessonLists(
  currentLessons = [],
  lessonsToSave = []
) {
  const next = [...currentLessons];
  lessonsToSave.forEach((lesson) => {
    const index = next.findIndex(
      (item) => item.lessonId === lesson.lessonId
    );
    if (index >= 0) next[index] = { ...next[index], ...lesson };
    else next.push(lesson);
  });
  return next;
}

const currentTarget = {
  lessonId: "lesson_TARGET",
  baseField: "BASE",
  marker: "TARGET_OLD"
};
const currentControl = {
  lessonId: "lesson_CONTROL",
  marker: "CONTROL"
};
const firstTargetPatch = {
  lessonId: "lesson_TARGET",
  firstPatch: "FIRST",
  marker: "TARGET_FIRST"
};
const newTarget = {
  lessonId: "lesson_NEW",
  firstNewField: "NEW_FIRST",
  marker: "NEW_FIRST"
};
const secondTargetPatch = {
  lessonId: "lesson_TARGET",
  secondPatch: "SECOND",
  marker: "TARGET_FINAL"
};
const secondNewPatch = {
  lessonId: "lesson_NEW",
  secondNewField: "NEW_SECOND",
  marker: "NEW_FINAL"
};
const currentLessons = [currentTarget, currentControl];
const lessonsToSave = [
  firstTargetPatch,
  newTarget,
  secondTargetPatch,
  secondNewPatch
];
const currentSnapshot = structuredClone(currentLessons);
const saveSnapshot = structuredClone(lessonsToSave);
const nextLessons = mergeExistingGeneratedLessonLists(
  currentLessons,
  lessonsToSave
);
const extractedNextLessons = mergeGeneratedLessonLists(
  currentLessons,
  lessonsToSave
);

assert.deepEqual(nextLessons, [
  {
    lessonId: "lesson_TARGET",
    baseField: "BASE",
    firstPatch: "FIRST",
    secondPatch: "SECOND",
    marker: "TARGET_FINAL"
  },
  currentControl,
  {
    lessonId: "lesson_NEW",
    firstNewField: "NEW_FIRST",
    secondNewField: "NEW_SECOND",
    marker: "NEW_FINAL"
  }
]);
assert.notEqual(nextLessons, currentLessons);
assert.deepEqual(extractedNextLessons, nextLessons);
assert.notEqual(extractedNextLessons, currentLessons);
assert.equal(nextLessons[1], currentControl);
assert.equal(extractedNextLessons[1], currentControl);
assert.deepEqual(currentLessons, currentSnapshot);
assert.deepEqual(lessonsToSave, saveSnapshot);
const emptyResult = mergeExistingGeneratedLessonLists(currentLessons, []);
assert.notEqual(emptyResult, currentLessons);
assert.deepEqual(emptyResult, currentLessons);
assert.equal(emptyResult[0], currentTarget);
assert.equal(emptyResult[1], currentControl);

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
const functionStart = appSource.indexOf(
  "function mergeGeneratedLessonsIntoState(lessonsToSave)"
);
const functionEnd = appSource.indexOf(
  "\n  function saveGeneratedLessons(lessonsToSave)",
  functionStart
);
assert.ok(functionStart >= 0 && functionEnd > functionStart);
const functionSource = appSource.slice(functionStart, functionEnd);
for (const mergeBoundary of [
  "setLessons((current) => mergeGeneratedLessonLists(current, lessonsToSave))"
]) {
  assert.ok(
    functionSource.includes(mergeBoundary),
    `missing generated lesson state merge boundary: ${mergeBoundary}`
  );
}
assert.ok(!functionSource.includes("postJsonWithTimeout("));
assert.ok(!functionSource.includes("setGeneratedLessonSaveStatus("));
assert.ok(!functionSource.includes("lessonsToSave.forEach("));
for (const helperRule of [
  "export function mergeGeneratedLessonLists(",
  "const nextLessons = [...currentLessons]",
  "lessonsToSave.forEach((lesson) => {",
  "const index = nextLessons.findIndex(",
  "(item) => item.lessonId === lesson.lessonId",
  "nextLessons[index] = { ...nextLessons[index], ...lesson }",
  "nextLessons.push(lesson)",
  "return nextLessons"
]) {
  assert.ok(
    helperSource.includes(helperRule),
    `missing extracted generated lesson merge rule: ${helperRule}`
  );
}
assert.equal(
  appSource.split("mergeGeneratedLessonsIntoState(").length - 1,
  4
);

const saveStart = appSource.indexOf(
  "function saveGeneratedLessons(lessonsToSave)"
);
const saveEnd = appSource.indexOf(
  "\n  function saveGeneratedLessonsFromPlan(",
  saveStart
);
assert.ok(saveStart >= 0 && saveEnd > saveStart);
const saveSource = appSource.slice(saveStart, saveEnd);
for (const AppOwnedEffect of [
  "mergeGeneratedLessonsIntoState(lessonsToSave)",
  "setGeneratedLessonSaveStatus(",
  '"/api/lessons/bulk"',
  "mergeGeneratedLessonsIntoState(result.lessons)"
]) {
  assert.ok(
    saveSource.includes(AppOwnedEffect),
    `missing App-owned generated lesson effect: ${AppOwnedEffect}`
  );
}

console.log(
  "generated lesson state merge inventory TARGET/CONTROL fixtures passed"
);
