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
    isLessonNotificationOff: parentDefaultTarget.isLessonNotificationOff,
    sendTiming: parentDefaultTarget.sendTiming,
    title: parentDefaultTarget.title,
    visibleDraftSaveState: parentDefaultTarget.visibleDraftSaveState
  },
  {
    actionLabel: "즉시 발송",
    canSendNowToRealRecipient: true,
    forceTestRecipient: false,
    isLessonNotificationOff: false,
    sendTiming: "now",
    title: "TARGET 학생 학부모 알림톡",
    visibleDraftSaveState: "dirty"
  }
);

for (const modeLabel of ["delay30", "nextDay11am", "manual", "anything-else"]) {
  const target = createLessonJournalCommentComposerModel({
    audience: "student",
    audienceModel: studentAudience,
    initialSendTiming: modeLabel,
    integrationStatus: { notifications: {} },
    record: {},
    student: { name: "TARGET 학생" },
    dependencies
  });
  assert.equal(target.sendTiming, "now", `${modeLabel} must always send immediately`);
  assert.equal(target.actionLabel, "즉시 발송", `${modeLabel} must show the immediate-send label`);
  assert.equal(target.isLessonNotificationOff, false, modeLabel);
}

const noSendControl = createLessonJournalCommentComposerModel({
  audienceModel: parentAudience,
  initialSendTiming: "none",
  integrationStatus: { notifications: {} },
  student: { name: "CONTROL 학생" },
  dependencies
});
assert.equal(noSendControl.isLessonNotificationOff, true);
assert.equal(noSendControl.sendTiming, "none");
assert.equal(noSendControl.actionLabel, "발송 안 함");

const mutedControl = createLessonJournalCommentComposerModel({
  audience: "parent",
  audienceModel: parentAudience,
  initialSendTiming: "default",
  integrationStatus: { notifications: {} },
  record: { notificationMutedParent: true },
  student: { name: "CONTROL 학생" },
  dependencies
});
assert.equal(mutedControl.isNotificationMuted, true);
assert.equal(mutedControl.actionLabel, "알림 제외");
assert.equal(mutedControl.sendTiming, "now", "mute is a separate concern from send timing");

const modalSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalCommentComposer.jsx", import.meta.url),
  "utf8"
);
const modelSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalCommentComposerModel.js", import.meta.url),
  "utf8"
);

for (const modelBinding of [
  "createLessonJournalCommentAudienceModel({",
  "createLessonJournalCommentComposerModel({",
  "getAudienceStatus,",
  "normalizeSaveState,"
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
  assert.ok(modalSource.includes(retainedAction), `comment action must remain in the domain shell: ${retainedAction}`);
}
assert.ok(
  !modalSource.includes('const actionLabel ='),
  "CommentComposerModal must not retain the extracted action label calculation"
);
assert.ok(
  !modalSource.includes('const currentPlanLabel ='),
  "CommentComposerModal must not retain the extracted plan label calculation"
);
assert.ok(
  !modalSource.includes("isLessonScheduleExpired"),
  "CommentComposerModal no longer needs the lesson-plan schedule dependency — the send button is always immediate"
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
