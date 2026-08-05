import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const teacherViewOutletSource = await readFile(new URL("../src/app/TeacherViewOutlet.js", import.meta.url), "utf8");
const lazyTeacherViewSource = await readFile(new URL("../src/app/lazyTeacherViewComponents.js", import.meta.url), "utf8");
const teacherLessonHubSource = await readFile(new URL("../src/domains/lessons/TeacherLessonHubV2.jsx", import.meta.url), "utf8");
const lessonModalSource = await readFile(new URL("../src/domains/lessons/LessonModal.jsx", import.meta.url), "utf8");
const reportModalSource = await readFile(new URL("../src/domains/reports/ReportModal.jsx", import.meta.url), "utf8");
const lessonHubBoundarySource = `${appSource}\n${teacherLessonHubSource}`;

function countMatches(pattern, source = appSource) {
  return [...source.matchAll(pattern)].length;
}

assert.equal(
  countMatches(/function TeacherLessonHubV2\b/g, lessonHubBoundarySource),
  1,
  "the active teacher lesson hub definition must remain"
);
assert.equal(appSource.includes("function TeacherLessonHubV2("), false, "the active teacher lesson hub must stay extracted from App");
assert.equal(appSource.includes('import { lazyTeacherViewComponents } from "./lazyTeacherViewComponents.js"'), true);
assert.equal(lazyTeacherViewSource.includes('import("../domains/lessons/TeacherLessonHubV2.jsx")'), true);
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
    countMatches(new RegExp(`function ${legacyName}\\b`, "g"), lessonHubBoundarySource),
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
  countMatches(/function LessonModal\b/g, lessonModalSource),
  1,
  "the active lesson create/edit modal must remain"
);
assert.equal(appSource.includes("function LessonModal("), false, "the active lesson modal must stay extracted from App");
assert.equal(appSource.includes('import("../domains/lessons/LessonModal.jsx")'), true);
assert.equal(
  countMatches(/export function ReportModal\b/g, reportModalSource),
  1,
  "the active report modal must remain"
);
assert.equal(countMatches(/<ReportModal\b/g), 1, "App must retain one report modal render entry");
assert.equal(appSource.includes('import("../domains/reports/ReportModal.jsx")'), true);

console.log("lesson hub active entry and legacy removal boundary passed");
