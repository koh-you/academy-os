import assert from "node:assert/strict";
import {
  getLessonModalUiType,
  isNewStudentMakeupLesson
} from "../src/domains/lessons/newStudentMakeup.js";
import {
  buildNewStudentMakeupNotificationJobs,
  buildNewStudentMakeupNoticeBody,
  formatNewStudentMakeupReservationSummary
} from "../src/domains/lessons/newStudentMakeupNotification.js";

const lesson = {
  className: "신입생 보강",
  date: "2026-08-07",
  endTime: "17:00",
  lessonId: "lesson-new-1",
  lessonTopic: "",
  lessonType: "makeup",
  startTime: "13:00",
  studentIds: ["student-1"]
};
const student = {
  name: "테스트학생",
  parentPhone: "01000000001",
  studentId: "student-1",
  studentPhone: "01000000002"
};

assert.equal(isNewStudentMakeupLesson(lesson), true);
assert.equal(getLessonModalUiType(lesson), "newStudentMakeup");
assert.equal(isNewStudentMakeupLesson({ ...lesson, className: "결석 보강", lessonTopic: "결석 보강 일정" }), false);
assert.match(buildNewStudentMakeupNoticeBody({ lesson, student, target: "student" }), /2026-08-07 13:00~17:00/);

const jobs = buildNewStudentMakeupNotificationJobs({
  academyName: "으뜸수학 고태영T",
  audiences: ["parent", "student"],
  lesson,
  now: new Date("2026-08-05T01:10:00.000Z"),
  students: [student, { studentId: "not-selected", name: "미선택" }]
});
assert.equal(jobs.length, 2);
assert.deepEqual(jobs.map((job) => job.target), ["parent", "student"]);
assert.equal(jobs[0].lessonId, lesson.lessonId);
assert.equal(jobs[0].scheduledAt, "2026-08-05T02:00:00.000Z");
assert.equal(jobs[0].notificationJobId, "new_student_makeup_parent_lesson-new-1_student-1");
assert.equal(jobs[1].notificationJobId, "new_student_makeup_student_lesson-new-1_student-1");
assert.equal(jobs[0].result.newStudentMakeup, true);
assert.equal(buildNewStudentMakeupNotificationJobs({ lesson: { ...lesson, lessonType: "class" }, students: [student] }).length, 0);

assert.equal(
  formatNewStudentMakeupReservationSummary([{ status: "scheduled" }, { status: "sent" }]),
  " · 알림톡 2건 다음 정각 예약 완료"
);
assert.equal(
  formatNewStudentMakeupReservationSummary([{ status: "dry_run" }, { status: "dry_run" }]),
  " · 알림톡 2건 안전 모드 기록 완료"
);
assert.equal(
  formatNewStudentMakeupReservationSummary([{ status: "scheduled" }, { status: "failed" }]),
  " · 알림톡 1건 예약, 1건 확인 필요"
);
assert.equal(formatNewStudentMakeupReservationSummary([]), " · 알림톡 0건 다음 정각 예약 완료");

console.log("new student makeup lesson recognition and idempotent notification jobs passed");
