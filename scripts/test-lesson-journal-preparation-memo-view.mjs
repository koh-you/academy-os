import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalPreparationMemoModel } from "../src/domains/lessons/lessonJournalPreparationMemoModel.js";

const visibleTarget = createLessonJournalPreparationMemoModel({
  currentRecord: {},
  localCheckedMemo: {},
  previousLesson: { date: "2026-07-20", className: "중3 TARGET" },
  previousRecord: {
    lessonStudentRecordId: "lsr_regular_2026-07-20_student_target",
    preparationMemo: "직전 메모 TARGET"
  }
});
const checkedControl = createLessonJournalPreparationMemoModel({
  currentRecord: { prepMemoCheckedSourceDate: "2026-07-20" },
  localCheckedMemo: {
    checkedAt: "2026-07-21T01:00:00.000Z",
    sourceDate: "2026-07-20",
    sourceRecordId: "lsr_regular_2026-07-20_student_control"
  },
  previousLesson: { date: "2026-07-20", className: "중3 CONTROL" },
  previousRecord: {
    lessonStudentRecordId: "lsr_regular_2026-07-20_student_control",
    preparationMemo: "숨겨질 메모 CONTROL"
  }
});

assert.equal(visibleTarget.canCheckPriorMemo, true);
assert.equal(visibleTarget.visiblePriorMemo, "직전 메모 TARGET");
assert.equal(checkedControl.hasCheckedPriorMemo, true);
assert.equal(checkedControl.visiblePriorMemo, "");

const nestedPanelsSource = await readFile(
  new URL("../src/domains/lessons/LessonNestedPanels.jsx", import.meta.url),
  "utf8"
);
const viewSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalPreparationMemoView.jsx", import.meta.url),
  "utf8"
);
const modalStart = nestedPanelsSource.indexOf("function PreparationMemoModal({");
const modalSource = nestedPanelsSource.slice(modalStart);

for (const appContract of [
  "<LessonJournalPreparationMemoView",
  "model={preparationMemoModel}",
  "onCheckPriorMemo={checkPriorMemo}",
  "onClose={closeMemo}",
  "onSave={saveMemo}",
  "onUpdateDraft={updateDraft}",
  'saveButtonLabel={isClosingAfterSave ? "저장 중" : getSaveButtonLabel(saveState)}'
]) {
  assert.ok(modalSource.includes(appContract), `missing preparation memo view binding: ${appContract}`);
}
for (const retainedControllerContract of [
  "function saveMemo()",
  "function checkPriorMemo()",
  "function closeMemo()",
  "return onSaveRecord(recordId, lesson, student"
]) {
  assert.ok(
    modalSource.includes(retainedControllerContract),
    `preparation memo controller must remain in the nested panel: ${retainedControllerContract}`
  );
}
assert.ok(
  !modalSource.includes('className="prepMemoColumns"'),
  "PreparationMemoModal must not retain the extracted view markup"
);

for (const viewContract of [
  'className="preparationMemoModal"',
  'className="prepMemoColumns"',
  "SectionHeader",
  'density="slim"',
  '"prepMemoPrevious"',
  "canCheckPriorMemo ?",
  "hasCheckedPriorMemo && !visiblePriorMemo",
  "visiblePriorMemo ?",
  'onUpdateDraft("preparationMemo", event.target.value)',
  'onUpdateDraft("prepStudentVisible", event.target.checked)',
  'onUpdateDraft("prepParentVisible", event.target.checked)',
  "onCheckPriorMemo()",
  "onClick={onSave}",
  "{saveButtonLabel}"
]) {
  assert.ok(viewSource.includes(viewContract), `missing preparation memo view contract: ${viewContract}`);
}
assert.ok(
  viewSource.indexOf('"prepMemoPrevious"') <
    viewSource.indexOf('className="prepMemoDraft"'),
  "prior memo panel must stay before the draft panel"
);
for (const forbiddenSideEffect of [
  "fetch(",
  "postJson",
  "/api/",
  "useState",
  "useEffect",
  "notification_jobs",
  "onSaveRecord"
]) {
  assert.ok(
    !viewSource.includes(forbiddenSideEffect),
    `preparation memo view must stay callback-only: ${forbiddenSideEffect}`
  );
}

console.log("lesson journal preparation memo view TARGET/CONTROL fixtures passed");
