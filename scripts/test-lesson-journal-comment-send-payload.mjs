import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalCommentSendPayload } from "../src/domains/lessons/lessonJournalCommentSendPayload.js";

const parentRecord = {
  lessonStudentRecordId: "lsr_parent_target",
  studentComment: "학생 CONTROL",
  teacherComment: "학부모 저장 CONTROL"
};
const parentImmediateTarget = createLessonJournalCommentSendPayload({
  draftComment: "학부모 최종 TARGET",
  field: "teacherComment",
  forceDryRun: false,
  forceTestRecipient: false,
  generatedPreviewText: "학부모 미리보기 TARGET",
  record: parentRecord,
  sendTiming: "now"
});

assert.deepEqual(parentImmediateTarget, {
  options: {
    forceDryRun: false,
    forceTestRecipient: false,
    manualCommentBody: "학부모 최종 TARGET",
    manualPreviewBody: "학부모 미리보기 TARGET",
    sendTiming: "now"
  },
  record: {
    lessonStudentRecordId: "lsr_parent_target",
    studentComment: "학생 CONTROL",
    teacherComment: "학부모 최종 TARGET"
  }
});
assert.equal(parentRecord.teacherComment, "학부모 저장 CONTROL");

const studentDryRunTarget = createLessonJournalCommentSendPayload({
  draftComment: "학생 최종 TARGET",
  field: "studentComment",
  forceDryRun: true,
  forceTestRecipient: true,
  generatedPreviewText: "학생 미리보기 TARGET",
  record: {
    studentComment: "학생 저장 CONTROL",
    teacherComment: "학부모 CONTROL"
  },
  sendTiming: "now"
});
assert.deepEqual(studentDryRunTarget.options, {
  forceDryRun: true,
  forceTestRecipient: true,
  manualCommentBody: "학생 최종 TARGET",
  manualPreviewBody: "학생 미리보기 TARGET",
  sendTiming: "now"
});
assert.equal(studentDryRunTarget.record.studentComment, "학생 최종 TARGET");
assert.equal(studentDryRunTarget.record.teacherComment, "학부모 CONTROL");

const noSendControl = createLessonJournalCommentSendPayload({
  field: "studentComment",
  sendTiming: "none"
});
assert.deepEqual(noSendControl.options, {
  forceDryRun: false,
  forceTestRecipient: false,
  manualCommentBody: "",
  manualPreviewBody: "",
  sendTiming: "none"
});

const defaultControl = createLessonJournalCommentSendPayload({
  field: "studentComment"
});
assert.deepEqual(defaultControl.options, {
  forceDryRun: false,
  forceTestRecipient: false,
  manualCommentBody: "",
  manualPreviewBody: "",
  sendTiming: "now"
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
assert.ok(
  !payloadSource.includes("delayMinutes") && !payloadSource.includes("resendReason"),
  "comment send payload no longer carries a schedule delay or resend framing — the send button is always immediate"
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
