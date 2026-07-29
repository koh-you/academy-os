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
  0,
  "generated lesson plan item key dead helper should be removed"
);
const identityInjection = appSource.indexOf(
  "} = createGeneratedLessonIdentityModel({"
);
const nextHelper = appSource.indexOf(
  "const getStudentsForSchoolCalendarEvent =",
  identityInjection
);
assert.ok(
  identityInjection >= 0 &&
    nextHelper > identityInjection
);

console.log(
  "generated lesson plan item key dead helper inventory fixtures passed"
);
