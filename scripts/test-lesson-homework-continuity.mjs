import assert from "node:assert/strict";
import {
  hasPersistedLessonProgress,
  selectLinkedPreviousHomework
} from "../src/domains/lessons/lessonHomeworkContinuity.js";

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
