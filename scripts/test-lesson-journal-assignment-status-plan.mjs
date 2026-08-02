import { readAppWithLessonJournalSource } from "./lessonJournalTestSource.mjs";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalAssignmentStatusPlan } from "../src/domains/lessons/lessonJournalAssignmentStatusPlan.js";

function createHarness({ optionMethods = [] } = {}) {
  const calls = [];
  return {
    calls,
    getFollowupOptions(value) {
      calls.push(["options", value]);
      return optionMethods;
    },
    getFollowupPatch(...args) {
      calls.push(["patch", ...args]);
      return args.length === 1
        ? {
            homeworkFollowupMethod: "",
            homeworkFollowupSourceHomeworkId: "",
            homeworkFollowupText: "",
            preparationMemo: "CONTROL 준비 메모"
          }
        : {
            homeworkFollowupMethod: args[1],
            homeworkFollowupSourceHomeworkId: args[2].homeworkId,
            homeworkFollowupText: args[2].title || args[2].sourceLabel,
            preparationMemo: "CONTROL 준비 메모"
          };
    },
    normalizeAssignmentStatus(value) {
      calls.push(["normalize", value]);
      return String(value).trim().toLowerCase();
    }
  };
}

const baseRecord = {
  assignmentStatus: "not_done",
  preparationMemo: "CONTROL 준비 메모"
};
const previousHomework = {
  homeworkId: "homework_TARGET",
  sourceLabel: "TARGET 원천 숙제",
  title: "TARGET 숙제"
};
const targetInputs = structuredClone({ baseRecord, previousHomework });
const uncheckedHarness = createHarness({
  optionMethods: [{ id: "next_lesson" }]
});
const uncheckedPlan = createLessonJournalAssignmentStatusPlan({
  baseRecord,
  getFollowupOptions: uncheckedHarness.getFollowupOptions,
  getFollowupPatch: uncheckedHarness.getFollowupPatch,
  normalizeAssignmentStatus: uncheckedHarness.normalizeAssignmentStatus,
  previousHomework,
  value: " NOT_CHECKED "
});

assert.deepEqual(uncheckedPlan, {
  message: "수업일지 · 미검사는 다음 정규수업 확인 문구를 오늘 알림톡에 반영합니다.",
  recordUpdate: {
    kind: "patch",
    patch: {
      assignmentStatus: "not_checked",
      incompleteHomework: "not_checked",
      needsMakeup: false,
      homeworkFollowupMethod: "next_lesson",
      homeworkFollowupSourceHomeworkId: "homework_TARGET",
      homeworkFollowupText: "TARGET 숙제",
      preparationMemo: "CONTROL 준비 메모",
      prepParentVisible: true,
      prepStudentVisible: true,
      teacherCommentSendStatus: "",
      studentCommentSendStatus: ""
    }
  },
  removeMakeupTask: true
});
assert.deepEqual(uncheckedHarness.calls, [
  ["normalize", " NOT_CHECKED "],
  ["patch", baseRecord, "next_lesson", previousHomework]
]);
assert.deepEqual({ baseRecord, previousHomework }, targetInputs);

const sourceLabelHarness = createHarness();
const sourceLabelPlan = createLessonJournalAssignmentStatusPlan({
  baseRecord,
  getFollowupOptions: sourceLabelHarness.getFollowupOptions,
  getFollowupPatch: sourceLabelHarness.getFollowupPatch,
  normalizeAssignmentStatus: sourceLabelHarness.normalizeAssignmentStatus,
  previousHomework: {
    homeworkId: "homework_SOURCE_LABEL",
    sourceLabel: "TARGET source label",
    title: ""
  },
  value: "not_checked"
});
assert.equal(sourceLabelPlan.recordUpdate.patch.homeworkFollowupText, "TARGET source label");
assert.deepEqual(sourceLabelHarness.calls.map(([name]) => name), ["normalize", "patch"]);

const emptyHomeworkHarness = createHarness({
  optionMethods: [{ id: "next_lesson" }]
});
const emptyHomeworkPlan = createLessonJournalAssignmentStatusPlan({
  baseRecord,
  getFollowupOptions: emptyHomeworkHarness.getFollowupOptions,
  getFollowupPatch: emptyHomeworkHarness.getFollowupPatch,
  normalizeAssignmentStatus: emptyHomeworkHarness.normalizeAssignmentStatus,
  previousHomework: null,
  value: "not_checked"
});
assert.deepEqual(emptyHomeworkPlan, {
  message: "",
  recordUpdate: {
    field: "assignmentStatus",
    kind: "field",
    value: "not_checked"
  },
  removeMakeupTask: true
});
assert.deepEqual(emptyHomeworkHarness.calls, [
  ["normalize", "not_checked"],
  ["options", "not_checked"]
]);

const completedHarness = createHarness();
const completedPlan = createLessonJournalAssignmentStatusPlan({
  baseRecord,
  getFollowupOptions: completedHarness.getFollowupOptions,
  getFollowupPatch: completedHarness.getFollowupPatch,
  normalizeAssignmentStatus: completedHarness.normalizeAssignmentStatus,
  previousHomework,
  value: "completed"
});
assert.deepEqual(completedPlan, {
  message: "",
  recordUpdate: {
    kind: "patch",
    patch: {
      assignmentStatus: "completed",
      incompleteHomework: "completed",
      homeworkFollowupMethod: "",
      homeworkFollowupSourceHomeworkId: "",
      homeworkFollowupText: "",
      preparationMemo: "CONTROL 준비 메모"
    }
  },
  removeMakeupTask: true
});
assert.deepEqual(completedHarness.calls, [
  ["normalize", "completed"],
  ["options", "completed"],
  ["patch", baseRecord]
]);

const selectionHarness = createHarness({
  optionMethods: [
    { id: "stay_after" },
    { id: "arrival_makeup" },
    { id: "next_lesson" }
  ]
});
const selectionPlan = createLessonJournalAssignmentStatusPlan({
  baseRecord,
  getFollowupOptions: selectionHarness.getFollowupOptions,
  getFollowupPatch: selectionHarness.getFollowupPatch,
  normalizeAssignmentStatus: selectionHarness.normalizeAssignmentStatus,
  previousHomework,
  value: "not_done"
});
assert.deepEqual(selectionPlan, {
  message: "",
  recordUpdate: {
    field: "assignmentStatus",
    kind: "field",
    value: "not_done"
  },
  removeMakeupTask: true
});
assert.deepEqual(selectionHarness.calls, [
  ["normalize", "not_done"],
  ["options", "not_done"]
]);

const appSource = await readAppWithLessonJournalSource(import.meta.url);
const modelSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalAssignmentStatusPlan.js", import.meta.url),
  "utf8"
);
const detailStart = appSource.indexOf("function LessonJournalDetail(");
const detailEnd = appSource.indexOf("\nfunction PreparationMemoModal(", detailStart);
const detailSource = appSource.slice(detailStart, detailEnd);
const actionStart = detailSource.indexOf("function handleAssignmentStatusChange(");
const actionEnd = detailSource.indexOf("\n  function updateJournalRecordDraftPatch(", actionStart);
const actionSource = detailSource.slice(actionStart, actionEnd);

for (const binding of [
  'import { createLessonJournalAssignmentStatusPlan } from "../domains/lessons/lessonJournalAssignmentStatusPlan.js"',
  "const plan = createLessonJournalAssignmentStatusPlan({",
  "getFollowupOptions: getHomeworkFollowupOptionsForAssignmentStatus,",
  "getFollowupPatch: getHomeworkFollowupPatch,",
  "normalizeAssignmentStatus: normalizeAssignmentStatusValue,",
  "removeJournalMakeupTaskDraft(student)",
  "updateJournalRecordDraftPatch(student, baseRecord, plan.recordUpdate.patch)",
  "updateJournalRecordDraft(",
  "setJournalManualSaveMessage(plan.message)"
]) {
  assert.ok(appSource.includes(binding), `missing assignment-status plan binding: ${binding}`);
}
assert.ok(!actionSource.includes('normalizedValue === "not_checked"'));
assert.ok(!actionSource.includes("getHomeworkFollowupOptionsForAssignmentStatus(normalizedValue)"));

for (const forbiddenSideEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "getJsonWithTimeout",
  "new Date",
  "/api/",
  "localStorage",
  "setJournal",
  "removeJournalMakeupTaskDraft",
  "updateJournalRecordDraft"
]) {
  assert.ok(!modelSource.includes(forbiddenSideEffect), `assignment-status plan must stay pure: ${forbiddenSideEffect}`);
}

console.log("lesson journal assignment status TARGET/CONTROL plan fixtures passed");
