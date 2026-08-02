import { readAppWithLessonJournalSource } from "./lessonJournalTestSource.mjs";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appSource = await readAppWithLessonJournalSource(import.meta.url);
const rowSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalStudentRow.jsx", import.meta.url),
  "utf8"
);
const journalStart = appSource.indexOf("function LessonJournalDetail({");
const journalEnd = appSource.indexOf("function CommentComposerModal({", journalStart);
const journalSource = appSource.slice(journalStart, journalEnd);

assert.equal(
  (journalSource.match(/<LessonJournalStudentRow/g) ?? []).length,
  1,
  "LessonJournalDetail must delegate student row composition"
);
for (const groupedProp of [
  "assignmentStatusCellProps={{",
  "attendanceButtonProps={{",
  "editableFieldsProps={{",
  "parentNotificationCommentProps={{",
  "prepMemoButtonProps={{",
  "studentIdentityProps={{",
  "studentNotificationCommentProps={{"
]) {
  assert.ok(journalSource.includes(groupedProp), `missing App-owned student row prop group: ${groupedProp}`);
}

for (const preservedCallback of [
  "applyHomeworkFollowupMethod(student, record, effectivePreviousHomework, method)",
  "handleAssignmentStatusChange(student, record, effectivePreviousHomework, value)",
  "updateJournalHomeworkDraft(student, homeworkType, value)",
  "updateJournalRecordDraft(student, record, field, value)",
  'openCommentComposer("parent", student, record, effectivePreviousHomework, effectiveNextHomework)',
  'onToggleStudentNotificationMute?.(lesson, student, "parent")',
  'openCommentComposer("student", student, record, effectivePreviousHomework, effectiveNextHomework)',
  'onToggleStudentNotificationMute?.(lesson, student, "student")'
]) {
  assert.ok(journalSource.includes(preservedCallback), `missing App-owned row callback: ${preservedCallback}`);
}

const expectedCellOrder = [
  "<LessonJournalStudentIdentity",
  "<LessonJournalPrepMemoButton",
  "<LessonJournalAttendanceButton",
  "<LessonJournalEditableFields",
  "<LessonJournalAssignmentStatusCell",
  "<LessonJournalNotificationCommentCell {...parentNotificationCommentProps}",
  "<LessonJournalNotificationCommentCell {...studentNotificationCommentProps}"
];
let previousIndex = -1;
for (const cellSource of expectedCellOrder) {
  const cellIndex = rowSource.indexOf(cellSource);
  assert.ok(cellIndex > previousIndex, `student row cell order changed at: ${cellSource}`);
  previousIndex = cellIndex;
}

assert.match(rowSource, /className="journalRow"/);
for (const forbiddenSideEffect of ["fetch(", "postJson", "/api/", "useState", "useEffect"]) {
  assert.ok(!rowSource.includes(forbiddenSideEffect), `student row must stay presentational: ${forbiddenSideEffect}`);
}

console.log("lesson journal student row composition boundary passed");
