import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const teacherViewOutletSource = await readFile(new URL("../src/app/TeacherViewOutlet.js", import.meta.url), "utf8");

function countMatches(pattern) {
  return [...appSource.matchAll(pattern)].length;
}

assert.equal(
  countMatches(/function TeacherLessonHubV2\b/g),
  1,
  "the active teacher lesson hub definition must remain"
);
assert.equal(
  [...teacherViewOutletSource.matchAll(/Component: components\.TeacherLessonHubV2\b/g)].length,
  1,
  "the active teacher lesson hub entry point must remain"
);

for (const legacyName of [
  "TeacherLessonHub",
  "TeacherMonthCalendar",
  "LessonHub",
  "MonthCalendar",
  "LessonDetail"
]) {
  assert.equal(
    countMatches(new RegExp(`function ${legacyName}\\b`, "g")),
    0,
    `${legacyName} legacy definition must stay removed`
  );
}

assert.equal(
  countMatches(/function HomeworkCell\b/g),
  0,
  "the helper used only by the removed legacy detail must stay removed"
);
assert.equal(
  countMatches(/function LessonModal\b/g),
  1,
  "the active lesson create/edit modal must remain"
);
assert.equal(
  countMatches(/function ReportModal\b/g),
  1,
  "the active report modal must remain"
);

console.log("lesson hub active entry and legacy removal boundary passed");
