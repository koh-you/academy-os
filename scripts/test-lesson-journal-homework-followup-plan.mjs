import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalHomeworkFollowupPlan } from "../src/domains/lessons/lessonJournalHomeworkFollowupPlan.js";

function createFollowupHarness() {
  const calls = [];
  return {
    calls,
    getFollowupPatch(...args) {
      calls.push(["followup", ...args]);
      if (args.length === 1) {
        return {
          homeworkFollowupMethod: "",
          homeworkFollowupSourceHomeworkId: "",
          homeworkFollowupText: "",
          preparationMemo: "기존 준비 메모"
        };
      }
      return {
        homeworkFollowupMethod: args[1],
        homeworkFollowupSourceHomeworkId: args[2].homeworkId,
        homeworkFollowupText: args[2].title || args[2].sourceLabel,
        preparationMemo: "기존 준비 메모"
      };
    },
    normalizeAssignmentStatus(value) {
      calls.push(["normalize", value]);
      return `normalized:${value}`;
    }
  };
}

const lesson = {
  date: "2026-07-30",
  lessonId: "lesson_TARGET"
};
const student = {
  studentId: "student_TARGET"
};
const baseRecord = {
  assignmentStatus: "not_done",
  incompleteHomework: "legacy_status",
  prepParentVisible: true,
  prepStudentVisible: false
};
const previousHomework = {
  assignedDate: "2026-07-20",
  dueDate: "2026-07-27",
  homeworkId: "homework_TARGET",
  lessonId: "lesson_SOURCE",
  sourceLabel: "CONTROL fallback",
  title: "TARGET 숙제"
};
const arrivalInputs = structuredClone({ baseRecord, lesson, previousHomework, student });
const arrivalHarness = createFollowupHarness();
const arrivalPlan = createLessonJournalHomeworkFollowupPlan({
  baseRecord,
  getFollowupPatch: arrivalHarness.getFollowupPatch,
  lesson,
  method: "arrival_makeup",
  normalizeAssignmentStatus: arrivalHarness.normalizeAssignmentStatus,
  previousHomework,
  student
});

assert.deepEqual(arrivalPlan, {
  makeupTask: {
    taskType: "homework_makeup",
    studentId: "student_TARGET",
    sourceId: "homework_TARGET",
    sourceHomeworkId: "homework_TARGET",
    sourceLessonId: "lesson_SOURCE",
    sourceDate: "2026-07-20",
    sourceDueDate: "2026-07-27",
    sourceLabel: "TARGET 숙제",
    reason: "등원보충 필요 숙제",
    supplementHomeworkNote: "TARGET 숙제",
    supplementMethod: "arrival_makeup"
  },
  message: "수업일지 · 등원보충 초안 · 변경 저장 후 Supabase 반영",
  recordPatch: {
    assignmentStatus: "normalized:not_done",
    incompleteHomework: "normalized:not_done",
    teacherCommentSendStatus: "",
    studentCommentSendStatus: "",
    needsMakeup: true,
    homeworkFollowupMethod: "",
    homeworkFollowupSourceHomeworkId: "",
    homeworkFollowupText: "",
    preparationMemo: "기존 준비 메모",
    prepParentVisible: true,
    prepStudentVisible: false
  },
  removeMakeupTask: false
});
assert.deepEqual(arrivalHarness.calls, [
  ["followup", baseRecord],
  ["normalize", "not_done"],
  ["normalize", "not_done"]
]);
assert.deepEqual({ baseRecord, lesson, previousHomework, student }, arrivalInputs);

const fallbackHarness = createFollowupHarness();
const fallbackPlan = createLessonJournalHomeworkFollowupPlan({
  baseRecord: {
    assignmentStatus: "",
    prepParentVisible: true,
    prepStudentVisible: true
  },
  getFollowupPatch: fallbackHarness.getFollowupPatch,
  lesson,
  method: "arrival_makeup",
  normalizeAssignmentStatus: fallbackHarness.normalizeAssignmentStatus,
  previousHomework: {
    homeworkId: "homework_FALLBACK",
    sourceLabel: ""
  },
  student
});
assert.equal(fallbackPlan.makeupTask.sourceLabel, "지난 숙제");
assert.equal(fallbackPlan.makeupTask.supplementHomeworkNote, "지난 숙제");
assert.equal(fallbackPlan.makeupTask.sourceLessonId, "lesson_TARGET");
assert.equal(fallbackPlan.makeupTask.sourceDate, "2026-07-30");
assert.equal(fallbackPlan.makeupTask.sourceDueDate, "2026-07-30");

const nextLessonBaseRecord = {
  assignmentStatus: null,
  incompleteHomework: "not_checked",
  prepParentVisible: false,
  prepStudentVisible: false
};
const nextLessonHomework = {
  homeworkId: "homework_CONTROL",
  sourceLabel: "CONTROL 숙제"
};
const nextLessonHarness = createFollowupHarness();
const nextLessonPlan = createLessonJournalHomeworkFollowupPlan({
  baseRecord: nextLessonBaseRecord,
  getFollowupPatch: nextLessonHarness.getFollowupPatch,
  lesson,
  method: "next_lesson",
  normalizeAssignmentStatus: nextLessonHarness.normalizeAssignmentStatus,
  previousHomework: nextLessonHomework,
  student
});
assert.deepEqual(nextLessonPlan, {
  makeupTask: null,
  message: "수업일지 · 다음 정규수업 확인 문구를 오늘 알림톡에 반영합니다.",
  recordPatch: {
    assignmentStatus: "normalized:not_checked",
    incompleteHomework: "normalized:not_checked",
    teacherCommentSendStatus: "",
    studentCommentSendStatus: "",
    needsMakeup: false,
    homeworkFollowupMethod: "next_lesson",
    homeworkFollowupSourceHomeworkId: "homework_CONTROL",
    homeworkFollowupText: "CONTROL 숙제",
    preparationMemo: "기존 준비 메모",
    prepParentVisible: true,
    prepStudentVisible: true
  },
  removeMakeupTask: true
});
assert.deepEqual(nextLessonHarness.calls, [
  ["followup", nextLessonBaseRecord],
  ["normalize", "not_checked"],
  ["normalize", "not_checked"],
  ["followup", nextLessonBaseRecord, "next_lesson", nextLessonHomework]
]);

const stayAfterHarness = createFollowupHarness();
const stayAfterPlan = createLessonJournalHomeworkFollowupPlan({
  baseRecord,
  getFollowupPatch: stayAfterHarness.getFollowupPatch,
  lesson,
  method: "stay_after",
  normalizeAssignmentStatus: stayAfterHarness.normalizeAssignmentStatus,
  previousHomework,
  student
});
assert.equal(
  stayAfterPlan.message,
  "수업일지 · 수업 후 보충 문구를 오늘 알림톡에 반영합니다."
);
assert.equal(stayAfterPlan.recordPatch.homeworkFollowupMethod, "stay_after");
assert.equal(stayAfterPlan.removeMakeupTask, true);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const modelSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalHomeworkFollowupPlan.js", import.meta.url),
  "utf8"
);
const detailStart = appSource.indexOf("function LessonJournalDetail(");
const detailEnd = appSource.indexOf("\nfunction PreparationMemoModal(", detailStart);
const detailSource = appSource.slice(detailStart, detailEnd);
const actionStart = detailSource.indexOf("function applyHomeworkFollowupMethod(");
const actionEnd = detailSource.indexOf("\n  function getHomeworkDraftKey(", actionStart);
const actionSource = detailSource.slice(actionStart, actionEnd);

for (const binding of [
  'import { createLessonJournalHomeworkFollowupPlan } from "../domains/lessons/lessonJournalHomeworkFollowupPlan.js"',
  "if (!journalEditMode || !previousHomework) return",
  "const plan = createLessonJournalHomeworkFollowupPlan({",
  "getFollowupPatch: getHomeworkFollowupPatch,",
  "normalizeAssignmentStatus: normalizeAssignmentStatusValue,",
  "setJournalMakeupTaskDrafts((current) => ({",
  "removeJournalMakeupTaskDraft(student)",
  "updateJournalRecordDraftPatch(student, baseRecord, plan.recordPatch)",
  "setJournalManualSaveMessage(plan.message)"
]) {
  assert.ok(appSource.includes(binding), `missing homework-followup binding: ${binding}`);
}
assert.ok(!actionSource.includes('taskType: "homework_makeup"'));
assert.ok(!actionSource.includes('method === "next_lesson"'));

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
  "updateJournalRecordDraftPatch"
]) {
  assert.ok(!modelSource.includes(forbiddenSideEffect), `homework followup plan must stay pure: ${forbiddenSideEffect}`);
}

console.log("lesson journal homework followup TARGET/CONTROL plan fixtures passed");
