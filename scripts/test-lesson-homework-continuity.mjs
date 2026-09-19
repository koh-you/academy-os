import assert from "node:assert/strict";
import {
  createStudentAttendanceIndex,
  findPreviousLessonsForStudent,
  hasPersistedLessonProgress,
  hasStudentAttendedLesson,
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

// 출석 색인: 기록 배열로 판정한 것과 정확히 같은 답을 O(1) 로 낸다.
// 수업일지가 학생마다 대여섯 번 직전 수업을 찾을 때 기록 전체를 다시 훑지 않게 하는 장치다.
{
  const indexedRecords = [
    { attendanceStatus: "present", lessonId: "L1", studentId: "s1" },
    { attendanceStatus: "late", lessonId: "L2", studentId: "s1" },
    { attendanceStatus: "absent", checkInAt: "2026-09-19T07:00:00.000Z", lessonId: "L3", studentId: "s1" },
    { attendanceStatus: "absent", lessonId: "L4", studentId: "s1" },
    { attendanceStatus: "pending", checkInTime: "16:00", lessonId: "L5", studentId: "s1" },
    { attendanceStatus: "present", lessonId: "L1", studentId: "s2" },
    null
  ];
  const index = createStudentAttendanceIndex(indexedRecords);
  for (const [lessonId, studentId] of [["L1", "s1"], ["L2", "s1"], ["L3", "s1"], ["L4", "s1"], ["L5", "s1"], ["L1", "s2"], ["L2", "s2"], ["missing", "s1"]]) {
    assert.equal(
      index.has(`${lessonId} :: ${studentId}`),
      hasStudentAttendedLesson(indexedRecords, lessonId, studentId),
      `attendance index must agree with hasStudentAttendedLesson for ${lessonId}/${studentId}`
    );
  }
  const indexedLessons = ["L1", "L2", "L3", "L4", "L5", "L6"].map((lessonId, position) => ({
    classTemplateId: "template_mwf_evening",
    date: `2026-09-0${position + 1}`,
    lessonId,
    startTime: "19:00",
    studentIds: ["s1"]
  }));
  const currentIndexedLesson = { classTemplateId: "template_mwf_evening", date: "2026-09-10", lessonId: "L-now", startTime: "19:00", studentIds: ["s1"] };
  const viaRecords = findPreviousLessonsForStudent(indexedLessons, currentIndexedLesson, "s1", { records: indexedRecords });
  const viaIndex = findPreviousLessonsForStudent(indexedLessons, currentIndexedLesson, "s1", { attendanceIndex: index });
  assert.deepEqual(viaIndex.map((lesson) => lesson.lessonId), viaRecords.map((lesson) => lesson.lessonId));
  assert.deepEqual(viaRecords.map((lesson) => lesson.lessonId), ["L5", "L3", "L2", "L1"], "L4(결석)·L6(기록 없음)은 빠져야 한다");
  // 색인이 오면 기록 배열은 무시된다(같은 답을 두 번 내지 않는다).
  assert.deepEqual(
    findPreviousLessonsForStudent(indexedLessons, currentIndexedLesson, "s1", { attendanceIndex: index, records: [] }).map((lesson) => lesson.lessonId),
    ["L5", "L3", "L2", "L1"]
  );
  // 색인도 기록도 없으면 출석 검증 없이 모두 후보다(기존 동작).
  assert.equal(findPreviousLessonsForStudent(indexedLessons, currentIndexedLesson, "s1").length, 6);
}

console.log("lesson homework continuity tests passed");
