import { readAppWithLessonJournalSource } from "./lessonJournalTestSource.mjs";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalAssignmentStatusCellModel } from "../src/domains/lessons/lessonJournalAssignmentStatusCellModel.js";

assert.deepEqual(
  createLessonJournalAssignmentStatusCellModel({
    homeworkFollowupOptions: [
      { id: "stay_after", label: "남아서 하고 가기" },
      { id: "next_lesson", label: "다음시간까지" }
    ],
    journalEditMode: true,
    previousHomeworkFollowup: { method: "next_lesson", text: "TARGET 오답 5문제" },
    previousHomeworkTitle: "지난 숙제",
    selectedHomeworkFollowupMethod: "next_lesson"
  }),
  {
    homeworkFollowupConfirmationDisabled: false,
    homeworkFollowupConfirmationLabel: "확인 완료",
    pendingHomeworkFollowupText: "TARGET 오답 5문제",
    selectedHomeworkFollowupMethod: "next_lesson",
    showHomeworkFollowupActions: true
  }
);

assert.deepEqual(
  createLessonJournalAssignmentStatusCellModel({
    homeworkFollowupOptions: [{ id: "stay_after", label: "남아서 하고 가기" }],
    journalEditMode: false,
    previousHomeworkFollowup: { method: "stay_after", text: "CONTROL 숙제" },
    previousHomeworkTitle: "지난 숙제",
    selectedHomeworkFollowupMethod: "stay_after"
  }),
  {
    homeworkFollowupConfirmationDisabled: false,
    homeworkFollowupConfirmationLabel: "확인 완료",
    pendingHomeworkFollowupText: "",
    selectedHomeworkFollowupMethod: "stay_after",
    showHomeworkFollowupActions: false
  }
);

const missingHomeworkControl = createLessonJournalAssignmentStatusCellModel({
  homeworkFollowupOptions: [{ id: "arrival_makeup", label: "등원보충" }],
  journalEditMode: true,
  previousHomeworkTitle: ""
});
assert.equal(missingHomeworkControl.showHomeworkFollowupActions, false);
assert.deepEqual(
  createLessonJournalAssignmentStatusCellModel({
    homeworkFollowupConfirmationState: "saving",
    previousHomeworkFollowup: { method: "next_lesson", text: "저장 중 숙제" }
  }),
  {
    homeworkFollowupConfirmationDisabled: true,
    homeworkFollowupConfirmationLabel: "확인 저장 중",
    pendingHomeworkFollowupText: "저장 중 숙제",
    selectedHomeworkFollowupMethod: "",
    showHomeworkFollowupActions: false
  }
);
assert.equal(
  createLessonJournalAssignmentStatusCellModel({ homeworkFollowupConfirmationState: "failed" })
    .homeworkFollowupConfirmationLabel,
  "다시 확인"
);

const appSource = await readAppWithLessonJournalSource(import.meta.url);
const componentSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalAssignmentStatusCell.jsx", import.meta.url),
  "utf8"
);
const rowSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalStudentRow.jsx", import.meta.url),
  "utf8"
);
const journalStart = appSource.indexOf("function LessonJournalDetail({");
const journalEnd = appSource.indexOf("function CommentComposerModal({", journalStart);
const journalSource = appSource.slice(journalStart, journalEnd);

assert.match(journalSource, /<LessonJournalStudentRow/);
assert.match(journalSource, /assignmentStatusAriaLabel: `\$\{student\.name\} 숙제 상태`/);
assert.match(rowSource, /<LessonJournalAssignmentStatusCell/);
assert.match(journalSource, /handleAssignmentStatusChange\(student, record, effectivePreviousHomework, value\)/);
assert.match(journalSource, /applyHomeworkFollowupMethod\(student, record, effectivePreviousHomework, method\)/);
assert.doesNotMatch(journalSource, /className="assignmentStatusCell"/);
for (const contract of [
  "aria-label={assignmentStatusAriaLabel}",
  "assignmentStatusOptions.map",
  "onAssignmentStatusChange(event.target.value)",
  "onApplyHomeworkFollowupMethod(method.id)",
  "onConfirmHomeworkFollowup",
  "숙제 확인 완료",
  "숙제보충 처리 방식",
  "확인할 숙제"
]) {
  assert.ok(componentSource.includes(contract), `missing assignment status cell contract: ${contract}`);
}
for (const forbiddenSideEffect of ["fetch(", "postJson", "/api/", "useState", "useEffect"]) {
  assert.ok(!componentSource.includes(forbiddenSideEffect), `assignment status cell must stay callback-only: ${forbiddenSideEffect}`);
}

console.log("lesson journal assignment status cell TARGET/CONTROL fixtures passed");
