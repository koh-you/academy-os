import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalCommentSendPayload } from "../src/domains/lessons/lessonJournalCommentSendPayload.js";

const parentRecord = {
  lessonStudentRecordId: "lsr_parent_target",
  studentComment: "학생 CONTROL",
  teacherComment: "학부모 저장 CONTROL"
};
const parentScheduledTarget = createLessonJournalCommentSendPayload({
  draftComment: "학부모 최종 TARGET",
  field: "teacherComment",
  forceDryRun: false,
  forceTestRecipient: false,
  generatedPreviewText: "학부모 미리보기 TARGET",
  isManualResendAvailable: false,
  record: parentRecord,
  sendDelayMinutes: 30,
  sendTiming: "scheduled"
});

assert.deepEqual(parentScheduledTarget, {
  options: {
    delayMinutes: 30,
    forceDryRun: false,
    forceTestRecipient: false,
    manualCommentBody: "학부모 최종 TARGET",
    manualPreviewBody: "학부모 미리보기 TARGET",
    resendReason: "",
    sendTiming: "scheduled"
  },
  record: {
    lessonStudentRecordId: "lsr_parent_target",
    studentComment: "학생 CONTROL",
    teacherComment: "학부모 최종 TARGET"
  }
});
assert.equal(parentRecord.teacherComment, "학부모 저장 CONTROL");

const studentResendTarget = createLessonJournalCommentSendPayload({
  draftComment: "학생 최종 TARGET",
  field: "studentComment",
  forceDryRun: true,
  forceTestRecipient: true,
  generatedPreviewText: "학생 미리보기 TARGET",
  isManualResendAvailable: true,
  record: {
    studentComment: "학생 저장 CONTROL",
    teacherComment: "학부모 CONTROL"
  },
  sendDelayMinutes: 0,
  sendTiming: "now"
});
assert.deepEqual(studentResendTarget.options, {
  delayMinutes: 0,
  forceDryRun: true,
  forceTestRecipient: true,
  manualCommentBody: "학생 최종 TARGET",
  manualPreviewBody: "학생 미리보기 TARGET",
  resendReason: "예약 시간 경과 후 수동 재발송",
  sendTiming: "now"
});
assert.equal(studentResendTarget.record.studentComment, "학생 최종 TARGET");
assert.equal(studentResendTarget.record.teacherComment, "학부모 CONTROL");

const defaultControl = createLessonJournalCommentSendPayload({
  field: "studentComment"
});
assert.deepEqual(defaultControl.options, {
  delayMinutes: 0,
  forceDryRun: false,
  forceTestRecipient: false,
  manualCommentBody: "",
  manualPreviewBody: "",
  resendReason: "",
  sendTiming: "scheduled"
});
assert.deepEqual(defaultControl.record, {
  studentComment: ""
});

const modalSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalCommentComposer.jsx", import.meta.url),
  "utf8"
);
const payloadSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalCommentSendPayload.js", import.meta.url),
  "utf8"
);

for (const binding of [
  "createLessonJournalCommentSendPayload({",
  "if (hasUnsavedDraft) return",
  "onSendComment(lesson, student, payload.record, audience, payload.options)"
]) {
  assert.ok(modalSource.includes(binding), `missing comment send payload binding: ${binding}`);
}
for (const retainedAction of [
  "polishLessonJournalCommentDraft({",
  "saveLessonJournalCommentDraft({",
  "onSendComment("
]) {
  assert.ok(modalSource.includes(retainedAction), `comment action boundary missing: ${retainedAction}`);
}
assert.ok(
  !modalSource.includes("manualCommentBody: draftComment"),
  "CommentComposerModal must not retain the extracted send options"
);
for (const forbiddenDependency of [
  "fetch(",
  "postJson",
  "/api/",
  "notification_jobs",
  "Solapi",
  "useState",
  "useEffect",
  "onSendComment"
]) {
  assert.ok(
    !payloadSource.includes(forbiddenDependency),
    `comment send payload must stay pure: ${forbiddenDependency}`
  );
}

console.log("lesson journal comment send payload TARGET/CONTROL fixtures passed");
