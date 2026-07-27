import assert from "node:assert/strict";
import {
  getLessonClosureBlockingNotificationJobs,
  getLessonClosureRoster,
  getLessonClosureSourceSnapshot,
  getCountableAttendanceRecords,
  isLessonClosureConversion,
  isLessonTypeChoiceDisabled,
  shouldIgnoreLessonAttendance
} from "../src/domains/lessons/lessonClosure.js";

const specialLecture = {
  lessonId: "lesson_special_04",
  className: "2026 고1 공통수학2 유형 문제풀이",
  classTemplateId: "",
  date: "2026-07-28",
  startTime: "13:00",
  endTime: "16:00",
  lessonType: "specialLecture",
  lessonTrackId: "special-track",
  lessonTrackType: "specialLecture",
  specialLectureGuideId: "guide-1",
  specialLectureSessionId: "session-04",
  specialLectureSessionIndex: 4,
  specialLectureStudentSchedules: {
    student_a: { startTime: "13:00", endTime: "15:00" }
  },
  status: "scheduled",
  studentIds: ["student_a", "student_withdrawn"]
};

assert.equal(isLessonClosureConversion(specialLecture, "closure"), true);
assert.equal(isLessonTypeChoiceDisabled({
  initialLesson: specialLecture,
  isFormLocked: false,
  nextLessonType: "closure"
}), false, "미래 특강도 날짜가 아니라 최신 위험상태 점검 후 휴강을 선택할 수 있어야 한다.");
assert.equal(isLessonTypeChoiceDisabled({
  initialLesson: { ...specialLecture, lessonType: "closure" },
  isFormLocked: false,
  nextLessonType: "class"
}), true, "저장된 휴강을 다른 수업 유형으로 되돌리는 동작은 계속 잠근다.");

assert.deepEqual(
  getLessonClosureRoster(specialLecture, ["student_a"]),
  ["student_a", "student_withdrawn"],
  "휴강 전환은 현재 활성 필터와 무관하게 원 수업 명단 전체를 보존해야 한다."
);

const blockingJobs = getLessonClosureBlockingNotificationJobs([
  { lessonId: specialLecture.lessonId, notificationJobId: "scheduled", status: "scheduled" },
  { lessonId: specialLecture.lessonId, notificationJobId: "unconfirmed", status: "send_unconfirmed" },
  { lessonId: specialLecture.lessonId, notificationJobId: "sent", status: "sent" },
  { lessonId: "another", notificationJobId: "other", status: "scheduled" }
], specialLecture.lessonId);
assert.deepEqual(blockingJobs.map((job) => job.notificationJobId), ["scheduled", "unconfirmed"]);

assert.equal(shouldIgnoreLessonAttendance({ ...specialLecture, lessonType: "closure" }), true);
assert.equal(shouldIgnoreLessonAttendance(specialLecture), false);

const countableRecords = getCountableAttendanceRecords([
  {
    attendanceStatus: "absent",
    lesson: { ...specialLecture, lessonType: "closure" }
  },
  {
    attendanceStatus: "present",
    lesson: { ...specialLecture, lessonId: "lesson_regular", lessonType: "class" }
  }
]);
assert.equal(countableRecords.length, 1);
assert.equal(countableRecords[0].attendanceStatus, "present");

const closureDraft = {
  ...specialLecture,
  lessonType: "closure",
  lessonTopic: "휴강"
};
const sourceSnapshot = JSON.parse(getLessonClosureSourceSnapshot(closureDraft));
assert.equal(sourceSnapshot.lessonTrackId, specialLecture.lessonTrackId);
assert.equal(sourceSnapshot.specialLectureSessionId, specialLecture.specialLectureSessionId);
assert.deepEqual(sourceSnapshot.specialLectureStudentSchedules, specialLecture.specialLectureStudentSchedules);
assert.deepEqual(sourceSnapshot.studentIds, ["student_a", "student_withdrawn"]);

console.log("lesson closure tests passed");
