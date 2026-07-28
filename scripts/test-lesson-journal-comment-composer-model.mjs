import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  createLessonJournalCommentAudienceModel,
  createLessonJournalCommentComposerModel
} from "../src/domains/lessons/lessonJournalCommentComposerModel.js";

const dependencies = {
  getAudienceStatus: (notificationStatus, audience) => ({
    ...(notificationStatus ?? {}),
    allowRealRecipients: audience === "student"
      ? Boolean(notificationStatus?.allowRealStudentRecipients)
      : Boolean(
        notificationStatus?.allowRealParentRecipients ??
        notificationStatus?.allowRealRecipients
      )
  }),
  isLessonScheduleExpired: (lesson, delayMinutes) =>
    lesson.expiredDelays?.includes(delayMinutes) ?? false,
  normalizeSaveState: (state) =>
    ["idle", "dirty", "saving", "saved", "failed"].includes(state)
      ? state
      : "idle"
};

const parentAudience = createLessonJournalCommentAudienceModel({
  audience: "parent",
  record: {
    teacherComment: "학부모 TARGET",
    teacherCommentAiStatus: "AI 완료"
  }
});
assert.deepEqual(parentAudience, {
  aiStatus: "AI 완료",
  comment: "학부모 TARGET",
  field: "teacherComment",
  isParent: true
});

const studentAudience = createLessonJournalCommentAudienceModel({
  audience: "student",
  record: {
    studentComment: "학생 TARGET",
    studentCommentAiStatus: "AI 대기"
  }
});
assert.deepEqual(studentAudience, {
  aiStatus: "AI 대기",
  comment: "학생 TARGET",
  field: "studentComment",
  isParent: false
});

const parentDefaultTarget = createLessonJournalCommentComposerModel({
  audience: "parent",
  audienceModel: parentAudience,
  draftSaveState: "idle",
  hasUnsavedDraft: true,
  initialSendTiming: "default",
  integrationStatus: {
    notifications: {
      allowRealParentRecipients: true,
      dryRun: false,
      missing: ["SOLAPI_KEY"]
    }
  },
  lesson: { expiredDelays: [] },
  record: {
    teacherCommentSendStatus: "예약 중",
    notificationMutedParent: false
  },
  saveState: "saved",
  student: {
    name: "TARGET 학생",
    parentPhone: "010-parent",
    studentPhone: "010-student"
  },
  dependencies
});

assert.deepEqual(
  {
    actionLabel: parentDefaultTarget.actionLabel,
    canSendNowToRealRecipient: parentDefaultTarget.canSendNowToRealRecipient,
    forceTestRecipient: parentDefaultTarget.forceTestRecipient,
    planMode: parentDefaultTarget.planMode,
    sendTiming: parentDefaultTarget.sendTiming,
    title: parentDefaultTarget.title,
    visibleDraftSaveState: parentDefaultTarget.visibleDraftSaveState
  },
  {
    actionLabel: "예약 발송",
    canSendNowToRealRecipient: true,
    forceTestRecipient: false,
    planMode: "default",
    sendTiming: "scheduled",
    title: "TARGET 학생 학부모 알림톡",
    visibleDraftSaveState: "dirty"
  }
);

const studentExpiredTarget = createLessonJournalCommentComposerModel({
  audience: "student",
  audienceModel: studentAudience,
  draftSaveState: "saving",
  initialSendTiming: "delay30",
  integrationStatus: {
    notifications: {
      allowRealStudentRecipients: false,
      dryRun: false
    }
  },
  lesson: { expiredDelays: [30] },
  record: {},
  student: {
    name: "TARGET 학생",
    parentPhone: "010-parent",
    studentPhone: "010-student"
  },
  dependencies
});

assert.equal(studentExpiredTarget.isManualResendAvailable, true);
assert.equal(studentExpiredTarget.sendDelayMinutes, 30);
assert.equal(studentExpiredTarget.sendTiming, "now");
assert.equal(studentExpiredTarget.actionLabel, "수동 재발송");
assert.equal(studentExpiredTarget.forceTestRecipient, true);
assert.equal(studentExpiredTarget.visibleDraftSaveState, "saving");

const noSendControl = createLessonJournalCommentComposerModel({
  audienceModel: parentAudience,
  initialSendTiming: "none",
  integrationStatus: { notifications: {} },
  lesson: { expiredDelays: [] },
  student: { name: "CONTROL 학생" },
  dependencies
});
assert.equal(noSendControl.planMode, "none");
assert.equal(noSendControl.sendTiming, "none");
assert.equal(noSendControl.actionLabel, "발송 안 함");

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const modelSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalCommentComposerModel.js", import.meta.url),
  "utf8"
);
const modalStart = appSource.indexOf("function CommentComposerModal({");
const modalEnd = appSource.indexOf("function ReportModal({", modalStart);
const modalSource = appSource.slice(modalStart, modalEnd);

for (const modelBinding of [
  "createLessonJournalCommentAudienceModel({",
  "createLessonJournalCommentComposerModel({",
  "getAudienceStatus: getAlimtalkAudienceStatus",
  "isLessonScheduleExpired: isLessonAlimtalkScheduleExpired"
]) {
  assert.ok(modalSource.includes(modelBinding), `missing comment model binding: ${modelBinding}`);
}
for (const retainedAction of [
  "async function handlePolishClick()",
  "async function handleSaveDraftClick()",
  "function handleSendClick()",
  "requestPolish: onPolishComment",
  "saveRecord: onSaveRecord",
  "onSendComment("
]) {
  assert.ok(modalSource.includes(retainedAction), `comment action must remain in App: ${retainedAction}`);
}
assert.ok(
  !modalSource.includes('const actionLabel ='),
  "CommentComposerModal must not retain the extracted action label calculation"
);
assert.ok(
  !modalSource.includes('const currentPlanLabel ='),
  "CommentComposerModal must not retain the extracted plan label calculation"
);
for (const forbiddenSideEffect of [
  "fetch(",
  "postJson",
  "/api/",
  "useState",
  "useEffect",
  "notification_jobs",
  "onSendComment",
  "onSaveRecord"
]) {
  assert.ok(
    !modelSource.includes(forbiddenSideEffect),
    `comment composer model must stay pure: ${forbiddenSideEffect}`
  );
}

console.log("lesson journal comment composer TARGET/CONTROL fixtures passed");
