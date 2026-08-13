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
  endTime: "20:00",
  lessonId: "lesson-tuesday",
  lessonType: "class",
  startTime: "17:00",
  studentIds: [student.studentId]
};
const overlappingDefaultLesson = {
  ...tuesdayLesson,
  endTime: "19:00",
  startTime: "16:00"
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
assert.equal(
  isStudentScheduledForLesson(overlappingDefaultLesson, student),
  true,
  "기본 소속 반에서는 개별 시간이 반 시간과 일부 겹쳐도 명단을 유지한다"
);
assert.deepEqual(getEffectiveLessonStudentIds(overlappingDefaultLesson, [student]), [student.studentId]);
assert.equal(getStudentScheduleForLesson(overlappingDefaultLesson, student)?.startTime, "17:00");
assert.equal(isStudentScheduledForLesson(mondayLesson, student), false);
assert.equal(getStudentScheduleForLesson(fridayMakeupLesson, student), null, "보강은 같은 요일의 프로필 정규 시간으로 덮어쓰지 않는다");
assert.deepEqual(applyStudentScheduleToLesson(fridayMakeupLesson, student), fridayMakeupLesson);

const saturdayHostLesson = {
  classTemplateId: "template_tt_sat_back",
  date: "2026-08-08",
  endTime: "16:00",
  lessonId: "lesson-saturday-host",
  lessonType: "class",
  startTime: "13:00",
  studentIds: ["park-jihyun"]
};
const park = {
  defaultClassTemplateId: "template_mwf_7_10",
  scheduleOverride: "수 19:00-22:00 / 토 13:00-16:00",
  studentId: "park-jihyun"
};
assert.equal(getStudentScheduleForLesson(saturdayHostLesson, park)?.scheduleType, "profile");
assert.equal(applyStudentScheduleToLesson(saturdayHostLesson, park).studentScheduleLabel, "13:00-16:00");

console.log("student schedule timezone fixture passed");
