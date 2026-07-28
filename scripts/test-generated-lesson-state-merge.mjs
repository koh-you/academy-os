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
const nextLessons = mergeGeneratedLessonLists(
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
assert.equal(nextLessons[1], currentControl);
assert.notEqual(nextLessons, currentLessons);
assert.deepEqual(currentLessons, currentSnapshot);
assert.deepEqual(lessonsToSave, saveSnapshot);
const emptyResult = mergeGeneratedLessonLists(currentLessons, []);
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
for (const appBoundary of [
  'import { mergeGeneratedLessonLists } from "../domains/lessons/generatedLessonState.js"',
  "function mergeGeneratedLessonsIntoState(lessonsToSave)",
  "setLessons((current) => mergeGeneratedLessonLists(current, lessonsToSave))",
  "mergeGeneratedLessonsIntoState(lessonsToSave)",
  "mergeGeneratedLessonsIntoState(result.lessons)",
  '"/api/lessons/bulk"'
]) {
  assert.ok(
    appSource.includes(appBoundary),
    `missing App-owned generated lesson state boundary: ${appBoundary}`
  );
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
    `generated lesson state helper crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log("generated lesson state merge TARGET/CONTROL fixtures passed");
