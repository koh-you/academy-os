import assert from "node:assert/strict";
import {
  createAcademyReminderId,
  fromAcademyReminderRow,
  fromExamPrepRow,
  fromSchoolEventRow,
  fromTestAttemptRow,
  fromTestSessionRow,
  getDefaultExamCycleForDate,
  normalizeAcademyReminderStatus,
  toAcademyReminderRow,
  toExamPrepRow,
  toSchoolEventRow,
  toTestAttemptRow,
  toTestSessionRow
} from "../src/shared/persistence/learningCalendarRowMappers.js";

const isoPattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

const testSessionRow = toTestSessionRow({
  testSessionId: "session-1",
  problemBookId: "book-1",
  testDate: "2026-08-05",
  classTemplateId: "class-1",
  className: "중3",
  testKind: "weekly",
  testTitle: "주간 테스트",
  subject: "수학",
  unit: "이차방정식",
  totalQuestions: "19.6",
  passCorrectCount: -2,
  source: "teacher",
  memo: "확인",
  createdAt: "2026-08-05T00:00:00.000Z"
});
assert.equal(testSessionRow.total_questions, 20);
assert.equal(testSessionRow.pass_correct_count, 0);
assert.equal(testSessionRow.created_at, "2026-08-05T00:00:00.000Z");
assert.match(testSessionRow.updated_at, isoPattern);
assert.equal(toTestSessionRow({ testSessionId: "s", testDate: "2026-08-05", totalQuestions: "bad" }).total_questions, null);
assert.equal(toTestSessionRow({ testSessionId: "s", testDate: "2026-08-05" }).test_kind, "daily");
assert.equal(toTestSessionRow({ testSessionId: "s", testDate: "2026-08-05" }).test_title, "시험지명 미입력");

const mappedSession = fromTestSessionRow({ ...testSessionRow, unknown_db_column: "drop-me" });
assert.equal(mappedSession.testSessionId, "session-1");
assert.equal(mappedSession.totalQuestions, 20);
assert.equal(mappedSession.unknown_db_column, undefined);

const takenAttemptRow = toTestAttemptRow({
  testAttemptId: "attempt-1",
  testSessionId: "session-1",
  studentId: "student-1",
  status: "taken",
  correctCount: "12.7",
  passStatus: "pass",
  memo: "통과"
});
assert.equal(takenAttemptRow.status, "taken");
assert.equal(takenAttemptRow.correct_count, 13);
assert.match(takenAttemptRow.created_at, isoPattern);
assert.match(takenAttemptRow.updated_at, isoPattern);
const absentAttemptRow = toTestAttemptRow({
  testAttemptId: "attempt-2",
  testSessionId: "session-1",
  studentId: "student-2",
  status: "not_taken",
  correctCount: 10,
  notTakenReason: "결석"
});
assert.equal(absentAttemptRow.correct_count, null);
assert.equal(absentAttemptRow.not_taken_reason, "결석");
const mappedAttempt = fromTestAttemptRow({ ...takenAttemptRow, unknown_db_column: "drop-me" });
assert.equal(mappedAttempt.correctCount, 13);
assert.equal(mappedAttempt.unknown_db_column, undefined);

assert.equal(getDefaultExamCycleForDate("2026-01-01"), "2026-1-mid");
assert.equal(getDefaultExamCycleForDate("2026-06-01"), "2026-1-final");
assert.equal(getDefaultExamCycleForDate("2026-09-01"), "2026-2-mid");
assert.equal(getDefaultExamCycleForDate("2026-11-01"), "2026-2-final");

const examPrepRow = toExamPrepRow({
  examPrepId: "prep_2026-2-final_school_grade_math",
  schoolName: "창동고",
  grade: "고1",
  subject: "수학",
  textbook: "공통수학",
  publisher: "출판사",
  examTerm: "ignored-by-id",
  examPeriod: "2026-11-02~11-06",
  mathExamDate: "2026-11-04",
  scope: "1단원",
  subTextbook: "부교재",
  review: "총평",
  revisedReview: "확정 총평",
  memo: "메모",
  mathExamDates: [{ date: "2026-11-04", subject: "수학" }],
  specialNote: "특이사항",
  source: "teacher",
  reviewAiStatus: "confirmed"
});
assert.equal(examPrepRow.exam_cycle, "2026-2-final");
assert.equal(examPrepRow.exam_term, "2026-2-final");
assert.equal(examPrepRow.sub_materials, "부교재");
assert.match(examPrepRow.updated_at, isoPattern);

const mappedExamPrep = fromExamPrepRow({
  ...examPrepRow,
  sub_textbook: "legacy 부교재",
  created_at: "2026-08-05T00:00:00.000Z",
  unknown_db_column: "drop-me"
});
assert.equal(mappedExamPrep.examCycle, "2026-2-final");
assert.equal(mappedExamPrep.examTerm, "2026-2-final");
assert.equal(mappedExamPrep.subTextbook, "legacy 부교재");
assert.equal(mappedExamPrep.unknown_db_column, undefined);
assert.equal(toExamPrepRow({ examPrepId: "legacy_2025_mid_school", examCycle: "2026-2-final" }).exam_cycle, "2025-1-mid");

const schoolEventRow = toSchoolEventRow({
  eventId: "event-1",
  schoolName: "창동고",
  title: "시험기간",
  type: "examPeriod",
  date: "2026-11-02",
  endDate: "2026-11-06",
  mathSubjectByDate: { "2026-11-04": "수학" },
  memo: "교사 메모",
  color: "blue",
  grade: "고1",
  examCycle: "2026-2-final",
  examSubject: "수학",
  customDomainMetadata: { preserved: true }
});
assert.equal(schoolEventRow.event_type, "exam_period");
assert.equal(schoolEventRow.app_event_type, "examPeriod");
assert.equal(schoolEventRow.event_payload.customDomainMetadata.preserved, true);
assert.match(schoolEventRow.updated_at, isoPattern);
assert.equal(toSchoolEventRow({ schoolEventId: "event-2", schoolName: "학교", title: "개학", eventType: "opening", startDate: "2026-08-17" }).app_event_type, "opening");

const mappedSchoolEvent = fromSchoolEventRow({
  ...schoolEventRow,
  created_at: "2026-08-05T00:00:00.000Z",
  unknown_db_column: "drop-me"
});
assert.equal(mappedSchoolEvent.type, "examPeriod");
assert.equal(mappedSchoolEvent.date, "2026-11-02");
assert.equal(mappedSchoolEvent.customDomainMetadata.preserved, true);
assert.equal(mappedSchoolEvent.unknown_db_column, undefined);

assert.throws(() => toAcademyReminderRow({ title: "날짜 없음" }), /알림 날짜가 필요합니다/);
assert.throws(() => toAcademyReminderRow({ reminderDate: "2026-08-05", title: "  " }), /알림 제목이 필요합니다/);
assert.equal(normalizeAcademyReminderStatus("done"), "done");
assert.equal(normalizeAcademyReminderStatus("unexpected"), "pending");
assert.match(createAcademyReminderId(), /^reminder_\d+_[a-z0-9]{6}$/);

const reminderRow = toAcademyReminderRow({
  reminderId: "reminder-1",
  reminderType: "class_notice",
  title: " 반 안내 ",
  reminderDate: "2026-08-05",
  reminderTime: "25:70",
  studentId: "student-1",
  lessonId: "lesson-1",
  schoolEventId: "school-event-1",
  content: "안내 내용",
  status: "invalid",
  priority: "invalid",
  slackNotify: false,
  source: "teacher",
  sourcePayload: { classTemplateId: "class-1" },
  completedAt: "2026-08-05T01:00:00.000Z"
});
assert.equal(reminderRow.reminder_type, "custom");
assert.equal(reminderRow.source_payload.reminderType, "class_notice");
assert.equal(reminderRow.source_payload.classTemplateId, "class-1");
assert.equal(reminderRow.title, "반 안내");
assert.equal(reminderRow.reminder_time, "23:59");
assert.equal(reminderRow.status, "pending");
assert.equal(reminderRow.priority, "normal");
assert.equal(reminderRow.slack_notify, false);
assert.equal(reminderRow.completed_at, "2026-08-05T01:00:00.000Z");
assert.match(reminderRow.updated_at, isoPattern);
assert.equal(toAcademyReminderRow({ reminderId: "r2", type: "student", date: "2026-08-05", title: "학생 상담" }).reminder_type, "student_consultation");
assert.equal(toAcademyReminderRow({ reminderId: "r3", type: "parent", date: "2026-08-05", title: "학부모 상담" }).reminder_type, "parent_consultation");
assert.equal(toAcademyReminderRow({ reminderId: "r4", date: "2026-08-05", title: "완료 없음" }, { includeCompletedAt: false }).completed_at, undefined);

const mappedReminder = fromAcademyReminderRow({
  ...reminderRow,
  created_at: "2026-08-05T00:00:00.000Z",
  unknown_db_column: "drop-me"
});
assert.equal(mappedReminder.reminderType, "class_notice");
assert.equal(mappedReminder.time, "23:59");
assert.equal(mappedReminder.slackNotify, false);
assert.equal(mappedReminder.unknown_db_column, undefined);

console.log("learning/calendar row mappers passed · tests/exam prep/school events/academy reminders 10 mappers");
