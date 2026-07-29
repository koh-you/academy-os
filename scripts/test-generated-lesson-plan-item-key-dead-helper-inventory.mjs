import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

function getExistingGeneratedLessonPlanItemKey(
  item = {},
  getGeneratedLessonKey
) {
  return (
    item.generatedKey ||
    getGeneratedLessonKey(item.lesson)
  );
}

const fallbackCalls = [];
const getGeneratedLessonKey = (lesson) => {
  fallbackCalls.push(lesson);
  return lesson?.sourceSchoolEventId
    ? `generated:pre_exam:${lesson.sourceSchoolEventId}`
    : "";
};
const explicitItem = {
  generatedKey: "generated:TARGET_EXPLICIT",
  lesson: {
    sourceSchoolEventId: "CONTROL_IGNORED"
  }
};
const fallbackLesson = {
  sourceSchoolEventId: "TARGET_FALLBACK"
};
const fallbackItem = {
  lesson: fallbackLesson
};
const inputSnapshot = structuredClone([
  explicitItem,
  fallbackItem
]);

assert.equal(
  getExistingGeneratedLessonPlanItemKey(
    explicitItem,
    getGeneratedLessonKey
  ),
  "generated:TARGET_EXPLICIT"
);
assert.deepEqual(fallbackCalls, []);
assert.equal(
  getExistingGeneratedLessonPlanItemKey(
    fallbackItem,
    getGeneratedLessonKey
  ),
  "generated:pre_exam:TARGET_FALLBACK"
);
assert.deepEqual(fallbackCalls, [fallbackLesson]);
assert.equal(
  getExistingGeneratedLessonPlanItemKey(
    {},
    getGeneratedLessonKey
  ),
  ""
);
assert.deepEqual(
  [explicitItem, fallbackItem],
  inputSnapshot
);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const functionName =
  "getGeneratedLessonPlanItemKey";
assert.equal(
  appSource.split(functionName).length - 1,
  1,
  "generated lesson plan item key should have no App caller"
);
const helperStart = appSource.indexOf(
  "function getGeneratedLessonPlanItemKey(item = {})"
);
const helperEnd = appSource.indexOf(
  "function getStudentsForSchoolCalendarEvent(",
  helperStart
);
assert.ok(helperStart >= 0 && helperEnd > helperStart);
const helperSource = appSource.slice(
  helperStart,
  helperEnd
);
for (const helperBoundary of [
  "function getGeneratedLessonPlanItemKey(item = {})",
  "return item.generatedKey || getGeneratedLessonKey(item.lesson)"
]) {
  assert.ok(
    helperSource.includes(helperBoundary),
    `missing generated lesson plan item key boundary: ${helperBoundary}`
  );
}
for (const forbiddenEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "/api/",
  "setLessons",
  "setExamPrepRows",
  "persistExamPrepRows",
  "localStorage",
  "Supabase",
  "Solapi"
]) {
  assert.ok(
    !helperSource.includes(forbiddenEffect),
    `dead generated lesson plan item helper crossed a side effect: ${forbiddenEffect}`
  );
}

console.log(
  "generated lesson plan item key dead helper inventory fixtures passed"
);
