import assert from "node:assert/strict";
import {
  findPreviousLessonsForStudent,
  hasPersistedLessonProgress,
  selectLinkedPreviousHomework
} from "../src/domains/lessons/lessonHomeworkContinuity.js";

const currentSaturdayLesson = {
  classTemplateId: "template_tt_sat_front",
  date: "2026-09-12",
  lessonId: "lesson_current_saturday",
  startTime: "10:00",
  studentIds: ["student_individual_schedule"]
};
const recentAbsentWednesday = {
  classTemplateId: "template_mwf_evening",
  date: "2026-09-09",
  lessonId: "lesson_recent_absent",
  startTime: "19:00",
  studentIds: ["student_individual_schedule"]
};
const attendedPreviousSaturday = {
  classTemplateId: "template_tt_sat_front",
  date: "2026-09-05",
  lessonId: "lesson_attended_previous",
  startTime: "10:00",
  studentIds: ["student_individual_schedule"]
};
const continuityLessons = [currentSaturdayLesson, recentAbsentWednesday, attendedPreviousSaturday];
assert.equal(
  findPreviousLessonsForStudent(
    continuityLessons,
    currentSaturdayLesson,
    "student_individual_schedule",
    {
      records: [{
        attendanceStatus: "late",
        lessonId: attendedPreviousSaturday.lessonId,
        studentId: "student_individual_schedule"
      }]
    }
  )[0]?.lessonId,
  attendedPreviousSaturday.lessonId,
  "개별 시간표 학생은 더 최근의 결석 회차가 아니라 실제 출석한 직전 수업을 사용해야 합니다."
);

const studentId = "student_mwf710";
const regularFriday = { date: "2026-08-07", lessonId: "lesson_regular_friday" };
const unusedSundayMakeup = { date: "2026-08-09", lessonId: "lesson_unused_makeup" };
const fridayHomework = {
  homeworkId: "homework_friday_next",
  homeworkType: "next",
  lessonId: regularFriday.lessonId,
  studentId,
  title: "8월 7일 다음 숙제"
};

const skippedUnusedMakeup = selectLinkedPreviousHomework({
  homeworks: [fridayHomework],
  previousLessons: [unusedSundayMakeup, regularFriday],
  records: [],
  studentId
});
assert.equal(skippedUnusedMakeup?.title, "8월 7일 다음 숙제");
assert.equal(skippedUnusedMakeup?.linkedFromLessonId, regularFriday.lessonId);
assert.equal(skippedUnusedMakeup?.homeworkType, "previous");

const attendedMakeupWithoutHomework = selectLinkedPreviousHomework({
  homeworks: [fridayHomework],
  previousLessons: [unusedSundayMakeup, regularFriday],
  records: [{
    attendanceStatus: "present",
    lessonId: unusedSundayMakeup.lessonId,
    studentId
  }],
  studentId
});
assert.equal(attendedMakeupWithoutHomework, null, "실제 진행한 중간 수업은 더 이전 숙제로 건너뛰지 않아야 합니다.");

const makeupHomework = {
  homeworkId: "homework_makeup_next",
  homeworkType: "next",
  lessonId: unusedSundayMakeup.lessonId,
  studentId,
  title: "8월 9일 다음 숙제"
};
const attendedMakeupWithHomework = selectLinkedPreviousHomework({
  homeworks: [fridayHomework, makeupHomework],
  previousLessons: [unusedSundayMakeup, regularFriday],
  records: [{ attendanceStatus: "present", lessonId: unusedSundayMakeup.lessonId, studentId }],
  studentId
});
assert.equal(attendedMakeupWithHomework?.title, "8월 9일 다음 숙제");

const unknownProgressKeepsConservativeBoundary = selectLinkedPreviousHomework({
  homeworks: [fridayHomework],
  previousLessons: [unusedSundayMakeup, regularFriday],
  studentId
});
assert.equal(unknownProgressKeepsConservativeBoundary, null, "진행 원천이 없으면 기존의 최근 수업 경계를 유지해야 합니다.");

assert.equal(hasPersistedLessonProgress([{ lessonId: "lesson", attendanceStatus: "pending" }], "lesson"), false);
assert.equal(hasPersistedLessonProgress([{ lessonId: "lesson", lessonProgress: "함수 진도" }], "lesson"), true);
assert.equal(hasPersistedLessonProgress([{ lessonId: "lesson", assignmentStatus: "complete" }], "lesson"), true);

console.log("lesson homework continuity tests passed");
