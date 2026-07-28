import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { saveLessonJournalCommentDraft } from "../src/domains/lessons/lessonJournalCommentSaveController.js";

const lesson = {
  className: "중3 TARGET",
  lessonId: "lesson_target"
};
const student = {
  name: "TARGET 학생",
  studentId: "student_target"
};
const record = {
  lessonStudentRecordId: "legacy_id",
  studentComment: "학생 CONTROL",
  studentCommentSendStatus: "발송 완료",
  teacherComment: "학부모 CONTROL",
  teacherCommentSendStatus: "예약 중"
};
const calls = [];
const success = await saveLessonJournalCommentDraft({
  createEmptyRecord: (targetLesson, targetStudent) => ({
    className: targetLesson.className,
    emptyStudentName: targetStudent.name,
    teacherComment: "empty CONTROL"
  }),
  createRecordId: (lessonId, studentId) => `lsr_${lessonId}_${studentId}`,
  draftComment: "학부모 최종 TARGET",
  field: "teacherComment",
  lesson,
  now: () => "2026-07-28T00:00:00.000Z",
  record,
  saveRecord: async (...args) => {
    calls.push(args);
    return true;
  },
  student
});

assert.equal(success.ok, true);
assert.equal(success.recordId, "lsr_lesson_target_student_target");
assert.deepEqual(
  {
    lessonId: success.recordToSave.lessonId,
    lessonStudentRecordId: success.recordToSave.lessonStudentRecordId,
    studentComment: success.recordToSave.studentComment,
    studentCommentSendStatus: success.recordToSave.studentCommentSendStatus,
    studentId: success.recordToSave.studentId,
    teacherComment: success.recordToSave.teacherComment,
    teacherCommentSendStatus: success.recordToSave.teacherCommentSendStatus,
    updatedAt: success.recordToSave.updatedAt,
    updatedBy: success.recordToSave.updatedBy
  },
  {
    lessonId: "lesson_target",
    lessonStudentRecordId: "lsr_lesson_target_student_target",
    studentComment: "학생 CONTROL",
    studentCommentSendStatus: "발송 완료",
    studentId: "student_target",
    teacherComment: "학부모 최종 TARGET",
    teacherCommentSendStatus: "",
    updatedAt: "2026-07-28T00:00:00.000Z",
    updatedBy: "instructor_owner_001"
  }
);
assert.equal(calls.length, 1);
assert.equal(calls[0][0], "lsr_lesson_target_student_target");
assert.equal(calls[0][1], lesson);
assert.equal(calls[0][2], student);
assert.equal(calls[0][3], success.recordToSave);
assert.deepEqual(calls[0][4], {
  skipNotificationRefresh: true,
  skipRelatedHomeworks: true,
  verifyFields: ["teacherComment"]
});
assert.equal(record.teacherComment, "학부모 CONTROL");
assert.equal(record.teacherCommentSendStatus, "예약 중");

const failed = await saveLessonJournalCommentDraft({
  createEmptyRecord: () => ({}),
  createRecordId: () => "lsr_failed",
  draftComment: "학생 TARGET",
  field: "studentComment",
  lesson,
  now: () => "2026-07-28T01:00:00.000Z",
  record: {
    studentCommentSendStatus: "예약 중",
    teacherCommentSendStatus: "발송 완료"
  },
  saveRecord: async (_recordId, _lesson, _student, recordToSave, options) => {
    assert.equal(recordToSave.studentComment, "학생 TARGET");
    assert.equal(recordToSave.studentCommentSendStatus, "");
    assert.equal(recordToSave.teacherCommentSendStatus, "발송 완료");
    assert.deepEqual(options.verifyFields, ["studentComment"]);
    return false;
  },
  student
});
assert.equal(failed.ok, false);

const missingCallbackControl = await saveLessonJournalCommentDraft({
  createEmptyRecord: () => ({}),
  createRecordId: () => "lsr_control",
  field: "studentComment",
  lesson,
  student
});
assert.equal(missingCallbackControl.ok, true);

const modalSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalCommentComposer.jsx", import.meta.url),
  "utf8"
);
const controllerSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalCommentSaveController.js", import.meta.url),
  "utf8"
);

for (const binding of [
  "saveLessonJournalCommentDraft({",
  "createEmptyRecord,",
  "createRecordId,",
  "saveRecord: onSaveRecord",
  'setDraftSaveState("saving")',
  'setDraftSaveState("failed")',
  "markDraftSaved(draftComment)"
]) {
  assert.ok(modalSource.includes(binding), `missing comment save controller binding: ${binding}`);
}
for (const retainedAction of [
  "polishLessonJournalCommentDraft({",
  "function handleSendClick()",
  "onSendComment("
]) {
  assert.ok(modalSource.includes(retainedAction), `non-save action must remain in the domain shell: ${retainedAction}`);
}
assert.ok(
  !modalSource.includes("const recordToSave = {"),
  "CommentComposerModal must not retain the extracted save payload"
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
    !controllerSource.includes(forbiddenDependency),
    `comment save controller must stay injected and isolated: ${forbiddenDependency}`
  );
}

console.log("lesson journal comment save controller TARGET/CONTROL fixtures passed");
