import { readAppWithLessonJournalSource } from "./lessonJournalTestSource.mjs";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalAssignmentStatusCellModel } from "../src/domains/lessons/lessonJournalAssignmentStatusCellModel.js";

// 2026-09-19 · readLabel: 읽기 모드에서 비활성 select 대신 보여주는 라벨(docs/ui-row-actions.md R1).
assert.deepEqual(
  createLessonJournalAssignmentStatusCellModel({
    assignmentStatusOptions: [
      { value: "", label: "선택" },
      { value: "not_done", label: "미완료" }
    ],
    assignmentStatusValue: "not_done",
    homeworkFollowupOptions: [
      { id: "stay_after", label: "남아서 하고 가기" },
      { id: "next_lesson", label: "다음시간까지" }
    ],
    journalEditMode: true,
    previousHomeworkTitle: "지난 숙제",
    selectedHomeworkFollowupMethod: "next_lesson"
  }),
  {
    readLabel: "미완료",
    selectedHomeworkFollowupMethod: "next_lesson",
    showHomeworkFollowupActions: true
  }
);

assert.deepEqual(
  createLessonJournalAssignmentStatusCellModel({
    assignmentStatusOptions: [{ value: "", label: "선택" }],
    assignmentStatusValue: "",
    homeworkFollowupOptions: [{ id: "stay_after", label: "남아서 하고 가기" }],
    journalEditMode: false,
    previousHomeworkTitle: "지난 숙제",
    selectedHomeworkFollowupMethod: "stay_after"
  }),
  {
    readLabel: "선택 전",
    selectedHomeworkFollowupMethod: "stay_after",
    showHomeworkFollowupActions: false
  }
);
assert.equal(
  createLessonJournalAssignmentStatusCellModel({ assignmentStatusValue: "legacy" }).readLabel,
  "legacy",
  "옵션에 없는 값은 원문을 그대로 보여준다"
);

const missingHomeworkControl = createLessonJournalAssignmentStatusCellModel({
  homeworkFollowupOptions: [{ id: "arrival_makeup", label: "등원보충" }],
  journalEditMode: true,
  previousHomeworkTitle: ""
});
assert.equal(missingHomeworkControl.showHomeworkFollowupActions, false);

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
  "숙제보충 처리 방식",
  // 2026-09-19 · 읽기 모드는 select 를 그리지 않고 라벨 텍스트만 둔다.
  "{journalEditMode ? (",
  "{model.readLabel}",
  "assignmentStatusReadValue"
]) {
  assert.ok(componentSource.includes(contract), `missing assignment status cell contract: ${contract}`);
}
assert.ok(!componentSource.includes("disabled={!journalEditMode}"), "읽기 모드에 비활성 select 를 행마다 깔지 않는다");
assert.ok(!componentSource.includes("확인할 숙제"), "pending homework followup must move to the lesson memo");
for (const forbiddenSideEffect of ["fetch(", "postJson", "/api/", "useState", "useEffect"]) {
  assert.ok(!componentSource.includes(forbiddenSideEffect), `assignment status cell must stay callback-only: ${forbiddenSideEffect}`);
}

console.log("lesson journal assignment status cell TARGET/CONTROL fixtures passed");
