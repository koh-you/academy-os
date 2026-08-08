import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  createLessonJournalPreparationMemoModel,
  getLessonStudentRecordDate,
  getLessonStudentRecordIdentity,
  selectLessonJournalHomeworkFollowupContext
} from "../src/domains/lessons/lessonJournalPreparationMemoModel.js";

const previousFollowupRecord = {
  lessonStudentRecordId: "lsr_regular_2026-07-20_student_target",
  homeworkFollowupMethod: "next_lesson",
  homeworkFollowupText: "TARGET 오답 5문제"
};
const followupContext = selectLessonJournalHomeworkFollowupContext({
  getHomeworkFollowup: (record) => record.homeworkFollowupMethod
    ? { method: record.homeworkFollowupMethod, text: record.homeworkFollowupText }
    : null,
  previousRecord: previousFollowupRecord,
  referenceRecord: {
    homeworkFollowupMethod: "next_lesson",
    homeworkFollowupText: "CONTROL 숙제"
  }
});
assert.deepEqual(followupContext, {
  followup: { method: "next_lesson", text: "TARGET 오답 5문제" },
  sourceRecord: previousFollowupRecord
});
assert.deepEqual(
  selectLessonJournalHomeworkFollowupContext({
    getHomeworkFollowup: (record) => record.followup ?? null,
    previousRecord: { followup: { method: "stay_after", text: "당일 보충" } },
    referenceRecord: { followup: { method: "next_lesson", text: "REFERENCE 확인" } }
  }).followup,
  { method: "next_lesson", text: "REFERENCE 확인" }
);

const previousTarget = createLessonJournalPreparationMemoModel({
  currentRecord: {},
  localCheckedMemo: {},
  previousLesson: { date: "2026-07-20", className: "중3 TARGET" },
  previousRecord: {
    lessonStudentRecordId: "lsr_regular_2026-07-20_student_target",
    preparationMemo: "  직전 메모 TARGET  "
  },
  referenceLesson: { date: "2026-07-18", className: "이전 반 CONTROL" },
  referenceRecord: {
    lessonStudentRecordId: "lsr_regular_2026-07-18_student_target",
    preparationMemo: "참고 메모 CONTROL"
  }
});

assert.deepEqual(
  {
    canCheckPriorMemo: previousTarget.canCheckPriorMemo,
    hasCheckedPriorMemo: previousTarget.hasCheckedPriorMemo,
    priorMemoKind: previousTarget.priorMemoKind,
    priorMemoSourceDate: previousTarget.priorMemoSourceDate,
    priorMemoSourceRecordId: previousTarget.priorMemoSourceRecordId,
    priorMemoTitle: previousTarget.priorMemoTitle,
    visiblePriorLessonLabel: previousTarget.visiblePriorLessonLabel,
    visiblePriorMemo: previousTarget.visiblePriorMemo
  },
  {
    canCheckPriorMemo: true,
    hasCheckedPriorMemo: false,
    priorMemoKind: "previous",
    priorMemoSourceDate: "2026-07-20",
    priorMemoSourceRecordId: "lsr_regular_2026-07-20_student_target",
    priorMemoTitle: "직전 수업메모",
    visiblePriorLessonLabel: "2026-07-20 · 중3 TARGET",
    visiblePriorMemo: "직전 메모 TARGET"
  }
);

const referenceTarget = createLessonJournalPreparationMemoModel({
  currentRecord: {},
  localCheckedMemo: {},
  previousRecord: { preparationMemo: "   " },
  referenceRecord: {
    lessonStudentRecordId: "lsr_regular_2026-07-18_student_target",
    preparationMemo: "참고 메모 TARGET"
  }
});

assert.equal(referenceTarget.priorMemoKind, "reference");
assert.equal(referenceTarget.priorMemoEyebrow, "REFERENCE");
assert.equal(referenceTarget.priorMemoTitle, "최근 참고 메모");
assert.equal(referenceTarget.priorMemoSourceDate, "2026-07-18");
assert.equal(
  referenceTarget.priorMemoSourceRecordId,
  "lsr_regular_2026-07-18_student_target"
);
assert.equal(referenceTarget.visiblePriorLessonLabel, "최근 참고 수업");
assert.equal(referenceTarget.visiblePriorMemo, "참고 메모 TARGET");

const checkedControl = createLessonJournalPreparationMemoModel({
  acknowledgedMemoCutoff: {
    prepMemoCheckedAt: "2026-07-21T01:00:00.000Z",
    prepMemoCheckedSourceDate: "2026-07-20"
  },
  currentRecord: {
    prepMemoCheckedSourceDate: "2026-07-20"
  },
  localCheckedMemo: {
    checkedAt: "",
    sourceDate: "",
    sourceRecordId: ""
  },
  previousLesson: { date: "2026-07-20", className: "중3 CONTROL" },
  previousRecord: {
    lessonStudentRecordId: "lsr_regular_2026-07-20_student_control",
    preparationMemo: "숨겨질 메모 CONTROL"
  }
});

assert.equal(checkedControl.isPriorMemoChecked, true);
assert.equal(checkedControl.visiblePriorMemo, "");
assert.equal(checkedControl.canCheckPriorMemo, false);
assert.equal(checkedControl.hasCheckedPriorMemo, true);
assert.equal(checkedControl.checkedMemoDate, "2026-07-20");
assert.equal(checkedControl.checkedMemoAt, "2026-07-21T01:00:00.000Z");

assert.deepEqual(createLessonJournalPreparationMemoModel(), {
  canCheckPriorMemo: false,
  checkedMemoAt: "",
  checkedMemoDate: "",
  hasCheckedPriorMemo: false,
  isPriorMemoChecked: false,
  priorMemoEyebrow: "PREVIOUS",
  priorMemoKind: "",
  priorMemoSourceDate: "",
  priorMemoSourceRecordId: "",
  priorMemoTitle: "직전 수업메모",
  visiblePreviousMemo: "",
  visiblePriorLessonLabel: "최근 참고 수업",
  visiblePriorMemo: "",
  visibleReferenceMemo: ""
});

assert.equal(
  getLessonStudentRecordIdentity({
    lessonId: "lesson_regular_2026-07-18",
    studentId: "student_target"
  }),
  "lsr_regular_2026-07-18_student_target"
);
assert.equal(
  getLessonStudentRecordDate({
    lessonStudentRecordId: "lsr_regular_2026-07-18_student_target"
  }),
  "2026-07-18"
);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const nestedPanelsSource = await readFile(
  new URL("../src/domains/lessons/LessonNestedPanels.jsx", import.meta.url),
  "utf8"
);
const modelSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalPreparationMemoModel.js", import.meta.url),
  "utf8"
);
const modalStart = nestedPanelsSource.indexOf("function PreparationMemoModal({");
const modalSource = nestedPanelsSource.slice(modalStart);

for (const appContract of [
  "createLessonJournalPreparationMemoModel({",
  "function saveMemo()",
  "function checkPriorMemo()",
  "function checkHomeworkFollowup()",
  "return onSaveRecord(recordId, lesson, student",
  "onClose={closeMemo}"
]) {
  assert.ok(modalSource.includes(appContract), `missing preparation memo App contract: ${appContract}`);
}
assert.ok(
  !modalSource.includes("const previousMemo = previousRecord?.preparationMemo"),
  "PreparationMemoModal must not retain the extracted prior memo calculation"
);
assert.ok(
  !appSource.includes("function getLessonStudentRecordIdentity("),
  "App must not retain the extracted record identity helper"
);
assert.ok(
  !appSource.includes("function getLessonStudentRecordDate("),
  "App must not retain the extracted record date helper"
);
for (const forbiddenSideEffect of [
  "fetch(",
  "postJson",
  "/api/",
  "useState",
  "useEffect",
  "notification_jobs",
  "Solapi"
]) {
  assert.ok(
    !modelSource.includes(forbiddenSideEffect),
    `preparation memo model must stay pure: ${forbiddenSideEffect}`
  );
}

console.log("lesson journal preparation memo TARGET/CONTROL fixtures passed");
