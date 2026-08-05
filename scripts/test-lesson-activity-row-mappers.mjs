import assert from "node:assert/strict";
import {
  fromAttendanceEventRow,
  fromHomeworkRow,
  fromLessonRecordRow,
  fromMakeupTaskRow,
  parseJsonNote,
  toAttendanceEventRow,
  toHomeworkRow,
  toLessonRecordRow,
  toMakeupTaskRow
} from "../src/shared/persistence/lessonActivityRowMappers.js";

const isoPattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

const lessonRecord = {
  lessonStudentRecordId: "record-1",
  lessonId: "lesson-1",
  studentId: "student-1",
  attendanceStatus: "late",
  attendanceReason: "교통",
  lateMinutes: "7",
  checkInAt: "2026-08-05T09:07:00.000Z",
  checkInTime: "18:07",
  checkOutAt: "2026-08-05T10:30:00.000Z",
  checkOutTime: "19:30",
  previousHomework: "p.10",
  nextHomework: "p.20",
  incompleteHomework: "2문제",
  lessonProgress: "방정식",
  lessonMaterial: "교재 A",
  lessonContent: "일차방정식",
  assignmentStatus: "assigned",
  homeworkFollowupMethod: "next_lesson",
  homeworkFollowupText: "오답 확인",
  homeworkFollowupSourceHomeworkId: "homework-0",
  preparationMemo: "자 준비",
  prepMemoCheckedAt: "2026-08-05T08:00:00.000Z",
  prepMemoCheckedSourceDate: "2026-08-04",
  prepMemoCheckedSourceRecordId: "record-0",
  prepStudentNotice: "학생 안내",
  prepStudentVisible: true,
  prepParentVisible: false,
  prepParentNotice: "학부모 안내",
  prepStudentAiStatus: "confirmed",
  prepParentAiStatus: "draft",
  behaviorTag: "집중",
  homeworkStatus: "partial",
  needsMakeup: true,
  needsRetest: false,
  teacherComment: "교사 메모",
  studentComment: "학생 코멘트",
  teacherCommentAiStatus: "confirmed",
  studentCommentAiStatus: "draft",
  teacherCommentSendStatus: "saved",
  studentCommentSendStatus: "pending",
  notificationMutedParent: true,
  notificationMutedStudent: false,
  notificationMutedReason: "요청"
};

const fullLessonRow = toLessonRecordRow(lessonRecord);
assert.equal(fullLessonRow.lesson_student_record_id, "record-1");
assert.equal(fullLessonRow.late_minutes, 7);
assert.equal(fullLessonRow.progress_note, "방정식");
assert.equal(fullLessonRow.prep_memo_checked_source_record_id, "record-0");
assert.equal(fullLessonRow.prep_student_visible, true);
assert.equal(fullLessonRow.notification_muted_parent, true);
assert.equal(fullLessonRow.check_out_time, "19:30");
assert.match(fullLessonRow.updated_at, isoPattern);

const baseLessonRow = toLessonRecordRow(lessonRecord, { includeExtendedFields: false });
assert.equal(baseLessonRow.lesson_material, undefined);
assert.equal(baseLessonRow.check_in_at, undefined);
assert.equal(baseLessonRow.progress_note, "방정식");

const noAttendanceLessonRow = toLessonRecordRow(lessonRecord, { includeAttendanceTimeFields: false });
assert.equal(noAttendanceLessonRow.lesson_material, "교재 A");
assert.equal(noAttendanceLessonRow.check_in_at, undefined);

const noPrepAuditRow = toLessonRecordRow({
  lessonStudentRecordId: "record-2",
  lessonId: "lesson-2",
  studentId: "student-2"
});
assert.equal(noPrepAuditRow.prep_memo_checked_at, undefined);

const mappedLessonRecord = fromLessonRecordRow({
  ...fullLessonRow,
  unknown_db_column: "drop-me"
});
assert.equal(mappedLessonRecord.lessonStudentRecordId, "record-1");
assert.equal(mappedLessonRecord.lessonProgress, "방정식");
assert.equal(mappedLessonRecord.progress, "방정식");
assert.equal(mappedLessonRecord.prepStudentVisible, true);
assert.equal(mappedLessonRecord.unknown_db_column, undefined);

for (const [teacherStatus, expected] of [
  ["assigned", "unverified"],
  ["overdue", "missing"],
  ["verified", "verified"],
  ["partial", "partial"],
  ["missing", "missing"],
  ["unexpected", "unverified"]
]) {
  assert.equal(toHomeworkRow({ homeworkId: "homework-1", studentId: "student-1", title: "숙제", teacherStatus }).teacher_status, expected);
}

const homeworkRow = toHomeworkRow({
  homeworkId: "homework-1",
  lessonId: "lesson-1",
  studentId: "student-1",
  homeworkType: "lesson",
  title: "숙제",
  subject: "수학",
  assignedDate: "2026-08-05",
  dueDate: "2026-08-06",
  studentStatus: "done",
  teacherStatus: "verified",
  status: "verified",
  totalProblems: "12",
  assignmentStatus: "complete",
  incompleteHomework: "",
  checkedAt: "2026-08-06T09:00:00.000Z",
  verifiedAt: "2026-08-06T09:01:00.000Z",
  linkedFromLessonId: "lesson-0",
  linkedFromDate: "2026-08-04"
});
assert.equal(homeworkRow.total_problems, 12);
assert.equal(homeworkRow.incomplete_homework, null);
assert.match(homeworkRow.updated_at, isoPattern);
assert.equal(toHomeworkRow({ homeworkId: "homework-2", studentId: "student-1", title: "숙제", totalProblems: "" }).total_problems, null);
assert.equal(toHomeworkRow({ homeworkId: "homework-3", studentId: "student-1", title: "숙제" }, { includeExtendedFields: false }).status, undefined);

const mappedHomework = fromHomeworkRow({ ...homeworkRow, unknown_db_column: "drop-me" });
assert.equal(mappedHomework.totalProblems, 12);
assert.equal(mappedHomework.status, "verified");
assert.equal(mappedHomework.unknown_db_column, undefined);
assert.equal(fromHomeworkRow({ homework_id: "h2", student_id: "s", title: "숙제", teacher_status: "verified" }).status, "verified");
assert.equal(fromHomeworkRow({ homework_id: "h3", student_id: "s", title: "숙제", teacher_status: "missing" }).status, "assigned");

assert.deepEqual(parseJsonNote(""), {});
assert.deepEqual(parseJsonNote("not-json"), {});
assert.deepEqual(parseJsonNote("[]"), []);
assert.deepEqual(parseJsonNote("null"), {});

const makeupRow = toMakeupTaskRow({
  makeupTaskId: "makeup-1",
  type: "homework_makeup",
  studentId: "student-1",
  sourceHomeworkId: "homework-1",
  title: "오답 보충",
  dueDate: "2026-08-07",
  scheduledTime: "18:00",
  status: "done",
  customDomainMetadata: { preserved: true }
});
assert.equal(makeupRow.type, "homework_makeup");
assert.equal(makeupRow.source_homework_id, "homework-1");
assert.equal(makeupRow.due_date, "2026-08-07");
assert.equal(makeupRow.status, "resolved");
assert.match(makeupRow.updated_at, isoPattern);
assert.equal(JSON.parse(makeupRow.note).customDomainMetadata.preserved, true);

for (const [domainStatus, dbStatus] of [
  ["resolved", "resolved"],
  ["scheduled", "scheduled"],
  ["canceled", "canceled"],
  ["draft", "open"]
]) {
  assert.equal(toMakeupTaskRow({ makeupTaskId: "m", studentId: "s", status: domainStatus }).status, dbStatus);
}

const mappedMakeup = fromMakeupTaskRow({
  ...makeupRow,
  created_at: "2026-08-05T00:00:00.000Z",
  unknown_db_column: "drop-me"
});
assert.equal(mappedMakeup.makeupTaskId, "makeup-1");
assert.equal(mappedMakeup.status, "done");
assert.equal(mappedMakeup.customDomainMetadata.preserved, true);
assert.equal(mappedMakeup.unknown_db_column, undefined);
assert.equal(fromMakeupTaskRow({ makeup_task_id: "m2", student_id: "s", status: "scheduled", note: "{}" }).status, "scheduled");
assert.equal(fromMakeupTaskRow({ makeup_task_id: "m3", student_id: "s", status: "canceled", note: "{}" }).status, "canceled");
assert.equal(fromMakeupTaskRow({ makeup_task_id: "m4", student_id: "s", status: "open", note: "{}" }).status, "draft");

const attendanceRow = toAttendanceEventRow({
  attendanceEventId: "event-1",
  lessonId: "lesson-1",
  studentId: "student-1",
  lessonStudentRecordId: "record-1",
  eventType: "checkout",
  source: "kiosk",
  attendanceStatus: "present",
  checkedAt: "2026-08-05T10:30:00.000Z",
  checkInAt: "2026-08-05T09:00:00.000Z",
  checkInTime: "18:00",
  checkOutAt: "2026-08-05T10:30:00.000Z",
  checkOutTime: "19:30",
  attendanceReason: "",
  lateMinutes: "5",
  actorId: "kiosk-1",
  recordBefore: { attendanceStatus: "pending" },
  recordAfter: { attendanceStatus: "present" },
  alimtalkStatus: "queued",
  alimtalkResult: { jobId: "job-1" },
  error: ""
});
assert.equal(attendanceRow.event_type, "checkout");
assert.equal(attendanceRow.late_minutes, 5);
assert.equal(attendanceRow.attendance_reason, null);
assert.equal(attendanceRow.updated_at, undefined);
assert.deepEqual(attendanceRow.record_after, { attendanceStatus: "present" });
assert.equal(toAttendanceEventRow({ attendanceEventId: "event-2", lateMinutes: "" }).late_minutes, null);
assert.equal(toAttendanceEventRow({ attendanceEventId: "event-3" }).event_type, "checkin");
assert.equal(toAttendanceEventRow({ attendanceEventId: "event-3" }).source, "unknown");

const mappedAttendance = fromAttendanceEventRow({
  ...attendanceRow,
  created_at: "2026-08-05T10:31:00.000Z",
  unknown_db_column: "drop-me"
});
assert.equal(mappedAttendance.attendanceEventId, "event-1");
assert.equal(mappedAttendance.lateMinutes, 5);
assert.equal(mappedAttendance.createdAt, "2026-08-05T10:31:00.000Z");
assert.equal(mappedAttendance.unknown_db_column, undefined);

console.log("lesson activity row mappers passed · lesson record/homework/makeup/attendance 8 mappers");
