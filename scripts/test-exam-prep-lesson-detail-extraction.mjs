import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const appSource = await readFile(new URL("src/app/App.jsx", root), "utf8");
const detailSource = await readFile(new URL("src/domains/lessons/ExamPrepLessonDetail.jsx", root), "utf8");
const teacherLessonHubSource = await readFile(new URL("src/domains/lessons/TeacherLessonHubV2.jsx", root), "utf8");
const lessonJournalDetailSource = await readFile(new URL("src/domains/lessons/LessonJournalDetail.jsx", root), "utf8");

assert.ok(
  !/function ExamPrepLessonDetail\(/.test(appSource),
  "App.jsx must not keep a local ExamPrepLessonDetail definition"
);
assert.match(
  appSource,
  /import \{ ExamPrepLessonDetail \} from "\.\.\/domains\/lessons\/ExamPrepLessonDetail\.jsx";/,
  "App.jsx must import ExamPrepLessonDetail from its extracted domain file"
);

assert.match(detailSource, /export function ExamPrepLessonDetail\(\{/, "extracted file must export the component");
assert.ok(
  !/from ["'].*\/app\/App\.jsx["']/.test(detailSource),
  "extracted component must not import back from App.jsx (no import cycle)"
);

const preservedContractSnippets = [
  ["ScheduleModalComponent", "schedule edit modal component prop"],
  ["isScheduleEditorOpen", "schedule modal open/close local state"],
  ["onClick={() => onDeleteLesson(lesson.lessonId)}", "delete-lesson callback identity"],
  ["onSave={onSaveExamPrepSchedule}", "exam-prep schedule save callback"],
  ["onSaveRecord={onSaveRecord}", "lesson record save callback"],
  ["<Suspense fallback=", "Suspense boundary around ExamPrepContentEditor"],
  ["<ExamPrepContentEditor", "ExamPrepContentEditor usage"],
  ["rosterView === \"school\"", "time/school roster sort toggle"],
  ["examPrepSourceChip", "connected exam-source info rendering"],
  ["className=\"ghostButton\"", "schedule-edit button class"],
  ["className=\"dangerButton\"", "delete-schedule button class"]
];
for (const [snippet, label] of preservedContractSnippets) {
  assert.ok(detailSource.includes(snippet), `extracted component must preserve: ${label} (missing "${snippet}")`);
}

assert.ok(
  teacherLessonHubSource.includes("createEmptyRecord={nestedPanels.createEmptyRecord}"),
  "TeacherLessonHubV2 call site must pass createEmptyRecord (new prop, needed since the component left App.jsx's closure scope)"
);
assert.ok(
  lessonJournalDetailSource.includes("createEmptyRecord={createEmptyRecord}"),
  "LessonJournalDetail call site must pass createEmptyRecord (new prop, needed since the component left App.jsx's closure scope)"
);

const teacherHubPropNames = [...teacherLessonHubSource.matchAll(/<ExamPrepLessonDetail\b[\s\S]*?\/>/g)][0][0]
  .match(/\n\s+(\w+)=/g)
  .map((line) => line.trim().replace(/=$/, ""));
assert.deepEqual(
  [...teacherHubPropNames].sort(),
  [
    "createEmptyRecord",
    "examPrepScheduleLessons",
    "lesson",
    "onDeleteLesson",
    "onSaveExamPrepSchedule",
    "onSaveRecord",
    "persistedLessons",
    "records",
    "ScheduleModalComponent",
    "students",
    "templates"
  ].sort(),
  "TeacherLessonHubV2's full-featured call site must pass exactly the same prop set as before plus the one disclosed addition (createEmptyRecord)"
);

console.log("exam prep lesson detail extraction: no App back-reference, preserved contract snippets, and exact call-site prop sets verified");
