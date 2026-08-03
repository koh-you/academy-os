import assert from "node:assert/strict";
import {
  confirmLessonJournalHomeworkFollowup,
  createConfirmedHomeworkFollowupRecord
} from "../src/domains/lessons/lessonJournalHomeworkFollowupConfirmation.js";

const sourceRecord = {
  lessonStudentRecordId: "lsr_lesson_previous_student_1",
  lessonId: "lesson_previous",
  studentId: "student_1",
  assignmentStatus: "not_checked",
  homeworkFollowupMethod: "next_lesson",
  homeworkFollowupSourceHomeworkId: "homework_previous",
  homeworkFollowupText: "TARGET 오답 5문제",
  preparationMemo: "준비물 챙기기\n다음 수업 확인: TARGET 오답 5문제",
  teacherComment: "CONTROL 코멘트",
  updatedAt: "2026-08-01T10:00:00.000Z"
};

const clearedRecord = createConfirmedHomeworkFollowupRecord(
  sourceRecord,
  () => "2026-08-03T12:00:00.000Z"
);
assert.equal(clearedRecord.homeworkFollowupMethod, "");
assert.equal(clearedRecord.homeworkFollowupSourceHomeworkId, "");
assert.equal(clearedRecord.homeworkFollowupText, "");
assert.equal(clearedRecord.preparationMemo, "준비물 챙기기");
assert.equal(clearedRecord.teacherComment, "CONTROL 코멘트");
assert.equal(clearedRecord.updatedAt, "2026-08-03T12:00:00.000Z");

let capturedRequest = null;
const confirmed = await confirmLessonJournalHomeworkFollowup({
  currentRecords: [{ ...sourceRecord, teacherComment: "최신 CONTROL 코멘트" }],
  sourceRecord,
  request: async (path, body, timeout, timeoutMessage) => {
    capturedRequest = { body, path, timeout, timeoutMessage };
    const after = body.recordChanges[0].after;
    return {
      auditId: body.auditId,
      homeworks: [],
      records: [{ ...after, updatedAt: "2026-08-03T12:00:01.000Z" }],
      source: "supabase",
      verified: true
    };
  }
});

assert.equal(capturedRequest.path, "/api/lesson-journal/rows/save");
assert.equal(capturedRequest.timeout, 30000);
assert.equal(capturedRequest.body.homeworkChanges.length, 0);
assert.equal(capturedRequest.body.recordChanges.length, 1);
assert.equal(capturedRequest.body.recordChanges[0].before.homeworkFollowupText, "TARGET 오답 5문제");
assert.equal(capturedRequest.body.recordChanges[0].after.homeworkFollowupText, "");
assert.equal(capturedRequest.body.recordChanges[0].after.teacherComment, "최신 CONTROL 코멘트");
assert.equal(confirmed.record.homeworkFollowupMethod, "");
assert.equal(confirmed.record.homeworkFollowupText, "");

await assert.rejects(
  () => confirmLessonJournalHomeworkFollowup({
    currentRecords: [sourceRecord],
    sourceRecord,
    request: async (path, body) => ({
      auditId: body.auditId,
      homeworks: [],
      records: [{ ...sourceRecord, homeworkFollowupText: "다른 화면 최신값" }],
      source: "supabase",
      verified: true
    })
  }),
  /Supabase 재조회/
);

console.log("lesson journal homework followup confirmation CAS and readback fixtures passed");
