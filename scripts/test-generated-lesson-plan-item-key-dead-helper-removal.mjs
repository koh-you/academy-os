import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appSource = (await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
)).replace(/\r\n/g, "\n");
assert.equal(
  appSource.split(
    "getGeneratedLessonPlanItemKey"
  ).length - 1,
  0
);

const injectionStart = appSource.indexOf(
  "const {\n  getGeneratedLessonIdentityKeys,"
);
const injectionCall = appSource.indexOf(
  "} = createGeneratedLessonIdentityModel({",
  injectionStart
);
const injectionEnd = appSource.indexOf(
  "});",
  injectionCall
);
const nextHelper = appSource.indexOf(
  "function getStudentsForSchoolCalendarEvent(",
  injectionEnd
);
assert.ok(
  injectionStart >= 0 &&
    injectionCall > injectionStart &&
    injectionEnd > injectionCall &&
    nextHelper > injectionEnd
);
const betweenSource = appSource.slice(
  injectionEnd + 3,
  nextHelper
);
assert.equal(betweenSource.trim(), "");

for (const preservedBoundary of [
  "getGeneratedLessonIdentityKeys,",
  "getGeneratedLessonKey",
  "addDaysInKorea,",
  "isExamPrepLesson,",
  "normalizeGradeLabel",
  "function getStudentsForSchoolCalendarEvent(students = [], event = {})",
  "const eventGrade = normalizeGradeLabel(event.grade || \"\")"
]) {
  assert.ok(
    appSource.includes(preservedBoundary),
    `missing boundary after dead helper removal: ${preservedBoundary}`
  );
}

console.log(
  "generated lesson plan item key dead helper removal passed"
);
