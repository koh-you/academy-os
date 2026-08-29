import assert from "node:assert/strict";
import {
  getLessonModalUiType,
  isClosureMakeupLesson
} from "../src/domains/lessons/newStudentMakeup.js";
import {
  buildClosureMakeupNotificationJobs,
  buildClosureMakeupNoticeBody,
  createClosureMakeupNotificationDrafts,
  formatClosureMakeupReservationSummary
} from "../src/domains/notifications/closureMakeupNotification.js";

const lesson = {
  className: "월수금 4-7반 · 휴강 보충",
  date: "2026-08-30",
  endTime: "17:00",
  lessonId: "lesson-closure-group",
  lessonTopic: "휴강 보충",
  lessonType: "makeup",
  startTime: "14:00",
  studentIds: ["student-1"]
};
const student = {
  name: "테스트학생",
  parentPhone: "01000000001",
  studentId: "student-1",
  studentPhone: "01000000002"
};

assert.equal(isClosureMakeupLesson(lesson), true);
assert.equal(getLessonModalUiType(lesson), "closureMakeup");
assert.equal(getLessonModalUiType({
  ...lesson,
  lessonTopic: "수동 보충 일정",
  sourceLabel: "8.28 월수금 7-10반 휴강 보충"
}), "closureMakeup", "기존 별도 휴강보충 일정도 새 UI 유형으로 연다");
assert.match(buildClosureMakeupNoticeBody({ lesson, student, target: "student" }), /2026-08-30 14:00~17:00/);
const editableDrafts = createClosureMakeupNotificationDrafts({ lesson });
editableDrafts.studentScheduleNotificationDraft = "{{학생명}} 학생 맞춤 휴강보충 안내";

const jobs = buildClosureMakeupNotificationJobs({
  academyName: "으뜸수학 고태영T",
  audiences: ["parent", "student"],
  includeStudentReminder: true,
  lesson,
  messageDrafts: editableDrafts,
  now: new Date("2026-08-29T01:10:00.000Z"),
  students: [student, { studentId: "not-selected", name: "미선택" }]
});
assert.equal(jobs.length, 3);
assert.deepEqual(jobs.map((job) => job.target), ["parent", "student", "student"]);
assert.deepEqual(jobs.map((job) => job.scheduledAt), [
  "2026-08-29T02:00:00.000Z",
  "2026-08-29T02:00:00.000Z",
  "2026-08-30T02:00:00.000Z"
]);
assert.deepEqual(jobs.map((job) => job.notificationJobId), [
  "closure_makeup_parent_lesson-closure-group_student-1",
  "closure_makeup_student_lesson-closure-group_student-1",
  "closure_makeup_student_reminder_lesson-closure-group_student-1"
]);
assert.ok(jobs.every((job) => job.result.closureMakeup === true));
assert.equal(new Set(jobs.map((job) => job.notificationJobId)).size, jobs.length);
assert.equal(jobs[1].previewBody, "테스트학생 학생 맞춤 휴강보충 안내");
assert.equal(
  buildClosureMakeupNotificationJobs({ lesson: { ...lesson, lessonType: "class" }, students: [student] }).length,
  0
);
assert.equal(
  buildClosureMakeupNotificationJobs({
    audiences: ["parent", "student"],
    lesson,
    now: new Date("2026-08-30T03:00:00.000Z"),
    students: [student]
  }).length,
  2,
  "당일 11시가 지난 뒤에는 과거 reminder를 만들지 않는다"
);
assert.equal(
  formatClosureMakeupReservationSummary([{ status: "scheduled" }, { status: "failed" }]),
  " · 휴강 보충 알림 1건 예약, 1건 확인 필요"
);

console.log("closure makeup recognition and idempotent three-part notification jobs passed");
