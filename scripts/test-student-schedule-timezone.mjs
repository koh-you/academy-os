import assert from "node:assert/strict";

process.env.TZ = "UTC";

const {
  applyStudentScheduleToLesson,
  getEffectiveLessonStudentIds,
  getStudentScheduleForLesson,
  isStudentScheduledForLesson
} = await import("../src/shared/utils/studentSchedule.js");

const student = {
  defaultClassTemplateId: "template_tt_sat_front",
  scheduleOverride: "화목 17:00-20:00 / 토 10:00-13:00",
  studentId: "student-1"
};
const tuesdayLesson = {
  classTemplateId: "template_tt_sat_front",
  date: "2026-08-04",
  lessonId: "lesson-tuesday",
  lessonType: "class",
  studentIds: [student.studentId]
};
const mondayLesson = {
  ...tuesdayLesson,
  date: "2026-08-03",
  lessonId: "lesson-monday"
};
const fridayMakeupLesson = {
  className: "결석 보강 · 강민준",
  date: "2026-08-07",
  endTime: "14:00",
  lessonId: "lesson-friday-makeup",
  lessonType: "makeup",
  startTime: "13:00",
  studentIds: [student.studentId]
};

assert.equal(
  isStudentScheduledForLesson(tuesdayLesson, student),
  true,
  "Render UTC에서도 서울 달력의 화요일을 월요일로 바꾸지 않는다"
);
assert.deepEqual(getEffectiveLessonStudentIds(tuesdayLesson, [student]), [student.studentId]);
assert.equal(isStudentScheduledForLesson(mondayLesson, student), false);
assert.equal(getStudentScheduleForLesson(fridayMakeupLesson, student), null, "보강은 같은 요일의 프로필 정규 시간으로 덮어쓰지 않는다");
assert.deepEqual(applyStudentScheduleToLesson(fridayMakeupLesson, student), fridayMakeupLesson);

console.log("student schedule timezone fixture passed");
