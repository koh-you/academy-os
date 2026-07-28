import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  createLessonJournalCommentAudienceModel,
  createLessonJournalCommentComposerModel
} from "../src/domains/lessons/lessonJournalCommentComposerModel.js";

const dependencies = {
  getAudienceStatus: (status, audience) => ({
    ...(status ?? {}),
    allowRealRecipients: audience === "parent"
      ? Boolean(status?.allowRealParentRecipients)
      : Boolean(status?.allowRealStudentRecipients)
  }),
  isLessonScheduleExpired: (lesson, delayMinutes) =>
    lesson.expiredDelays?.includes(delayMinutes) ?? false,
  normalizeSaveState: (state) => state
};

const parentTarget = createLessonJournalCommentComposerModel({
  audience: "parent",
  audienceModel: createLessonJournalCommentAudienceModel({
    audience: "parent",
    record: { teacherComment: "학부모 TARGET" }
  }),
  hasUnsavedDraft: true,
  integrationStatus: {
    notifications: {
      allowRealParentRecipients: true,
      dryRun: false
    }
  },
  lesson: { expiredDelays: [] },
  student: {
    name: "TARGET 학생",
    parentPhone: "010-parent"
  },
  dependencies
});
const noSendControl = createLessonJournalCommentComposerModel({
  audience: "student",
  audienceModel: createLessonJournalCommentAudienceModel({
    audience: "student",
    record: { studentComment: "학생 CONTROL" }
  }),
  initialSendTiming: "none",
  integrationStatus: {
    notifications: {
      allowRealStudentRecipients: false,
      dryRun: false
    }
  },
  lesson: { expiredDelays: [] },
  student: {
    name: "CONTROL 학생",
    studentPhone: "010-student"
  },
  dependencies
});

assert.equal(parentTarget.isParent, true);
assert.equal(parentTarget.visibleDraftSaveState, "dirty");
assert.equal(parentTarget.canSendNowToRealRecipient, true);
assert.equal(noSendControl.planMode, "none");
assert.equal(noSendControl.actionLabel, "발송 안 함");
assert.equal(noSendControl.forceTestRecipient, true);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const viewSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalCommentComposerView.jsx", import.meta.url),
  "utf8"
);
const modalStart = appSource.indexOf("function CommentComposerModal({");
const modalEnd = appSource.indexOf("function ReportModal({", modalStart);
const modalSource = appSource.slice(modalStart, modalEnd);

for (const appContract of [
  "<LessonJournalCommentComposerView",
  "model={commentComposerModel}",
  "onChangeDraft={setDraftComment}",
  "onClose={handleClose}",
  "onPolish={handlePolishClick}",
  "onSave={handleSaveDraftClick}",
  "onSend={handleSendClick}",
  "onToggleSource={toggleSource}"
]) {
  assert.ok(modalSource.includes(appContract), `missing comment composer view binding: ${appContract}`);
}
for (const retainedControllerContract of [
  "async function handlePolishClick()",
  "async function handleSaveDraftClick()",
  "function handleSendClick()",
  "requestPolish: onPolishComment",
  "saveRecord: onSaveRecord",
  "onSendComment("
]) {
  assert.ok(
    modalSource.includes(retainedControllerContract),
    `comment composer controller must remain in App: ${retainedControllerContract}`
  );
}
assert.ok(
  !modalSource.includes('className="commentComposerGrid"'),
  "CommentComposerModal must not retain the extracted view markup"
);

for (const viewContract of [
  'className="commentComposerModal"',
  'className="commentComposerGrid"',
  'className="commentDraftPanel"',
  "SectionHeader",
  'aria-controls="comment-source-preview"',
  "aria-expanded={isSourceOpen}",
  'id="comment-source-preview"',
  'aria-label={isParent ? "학부모 최종 알림톡 문구" : "학생 최종 알림톡 문구"}',
  "onClick={onToggleSource}",
  "onChange={(event) => onChangeDraft(event.target.value)}",
  "onClick={onPolish}",
  "onClick={onSave}",
  "onClick={onSend}",
  'disabled={!hasUnsavedDraft || draftSaveState === "saving"}',
  'disabled={hasUnsavedDraft || isNotificationMuted || (planMode === "none" && !isManualResendAvailable)}',
  'className="commentPreviewPanel"',
  "{generatedPreviewText}"
]) {
  assert.ok(viewSource.includes(viewContract), `missing comment composer view contract: ${viewContract}`);
}
assert.ok(
  viewSource.indexOf('className="commentDraftPanel"') <
    viewSource.indexOf('className="commentPreviewPanel"'),
  "comment draft panel must stay before the preview panel"
);
assert.ok(!viewSource.includes("currentSchedulePlan"));
assert.ok(!viewSource.includes("alimtalkSafetyBox"));
assert.ok(!viewSource.includes("발송 수신 기준:"));
for (const forbiddenSideEffect of [
  "fetch(",
  "postJson",
  "/api/",
  "useState",
  "useEffect",
  "notification_jobs",
  "onPolishComment",
  "onSaveRecord",
  "onSendComment"
]) {
  assert.ok(
    !viewSource.includes(forbiddenSideEffect),
    `comment composer view must stay callback-only: ${forbiddenSideEffect}`
  );
}

console.log("lesson journal comment composer view TARGET/CONTROL fixtures passed");
