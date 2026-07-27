import assert from "node:assert/strict";
import {
  getSpecialLectureStudentSyncOperation,
  getSpecialLectureStudentSyncProtectionReasons,
  isSpecialLectureStudentScheduleSynced,
  mergeSpecialLectureStudentSchedule
} from "../src/domains/specialLectures/specialLecturePlanSync.js";

const shinId = "student_shin";
const kimId = "student_kim";
const lesson = {
  lessonId: "lesson_special_04",
  date: "2026-07-29",
  className: "고1 클리닉",
  status: "scheduled",
  studentIds: [shinId, kimId],
  specialLectureStudentSchedules: [
    {
      studentId: shinId,
      startTime: "13:00",
      endTime: "15:00",
      scheduleType: "adjusted",
      overrideReason: "이전 시간"
    },
    {
      studentId: kimId,
      startTime: "13:00",
      endTime: "16:00",
      scheduleType: "official",
      overrideReason: ""
    }
  ]
};
const shinExpectedSchedule = {
  studentId: shinId,
  startTime: "13:00",
  endTime: "16:00",
  scheduleType: "official",
  overrideReason: ""
};
const kimAbsenceRecord = {
  lessonId: lesson.lessonId,
  studentId: kimId,
  attendanceStatus: "absent",
  attendanceReason: "여행"
};
const kimPendingJob = {
  lessonId: lesson.lessonId,
  studentId: kimId,
  status: "scheduled"
};
const sharedProtectionInput = {
  lesson,
  lessonDate: lesson.date,
  studentId: shinId,
  records: [kimAbsenceRecord],
  notificationJobs: [kimPendingJob],
  pendingNotificationStatuses: new Set(["draft", "queued", "scheduled", "pending_send"]),
  todayDateKey: "2026-07-27"
};

assert.equal(
  getSpecialLectureStudentSyncOperation({
    lesson,
    studentId: shinId,
    expectedSchedule: shinExpectedSchedule
  }),
  "update",
  "신초봄의 기존 시간과 확정 시간이 다르면 학생별 시간 변경이어야 합니다."
);

assert.deepEqual(
  getSpecialLectureStudentSyncProtectionReasons({
    ...sharedProtectionInput,
    expectedSchedule: shinExpectedSchedule
  }),
  [],
  "김연우의 결석·대기 알림은 신초봄의 학생별 시간 변경을 차단하면 안 됩니다."
);

const mergedLesson = mergeSpecialLectureStudentSchedule({
  lesson,
  studentId: shinId,
  expectedSchedule: shinExpectedSchedule
});
assert.equal(
  isSpecialLectureStudentScheduleSynced({
    lesson: mergedLesson,
    studentId: shinId,
    expectedSchedule: shinExpectedSchedule
  }),
  true,
  "병합 뒤 신초봄 학생별 시간은 확정 계획과 일치해야 합니다."
);
assert.deepEqual(
  mergedLesson.specialLectureStudentSchedules.find((schedule) => schedule.studentId === kimId),
  lesson.specialLectureStudentSchedules.find((schedule) => schedule.studentId === kimId),
  "신초봄 시간을 바꿔도 김연우 학생별 시간은 그대로 보존해야 합니다."
);
assert.deepEqual(
  mergedLesson.studentIds,
  lesson.studentIds,
  "학생별 시간 변경은 기존 수업 명단을 바꾸면 안 됩니다."
);
assert.equal(mergedLesson.className, lesson.className, "학생별 시간 변경은 수업의 다른 필드를 바꾸면 안 됩니다.");

assert.deepEqual(
  getSpecialLectureStudentSyncProtectionReasons({
    ...sharedProtectionInput,
    expectedSchedule: shinExpectedSchedule,
    records: [{
      lessonId: lesson.lessonId,
      studentId: shinId,
      attendanceStatus: "absent"
    }]
  }),
  [],
  "대상 학생 기록이 있어도 명단을 유지하는 시간 변경은 기록을 삭제하지 않으므로 허용해야 합니다."
);

assert.deepEqual(
  getSpecialLectureStudentSyncProtectionReasons({
    ...sharedProtectionInput,
    expectedSchedule: null,
    records: [{
      lessonId: lesson.lessonId,
      studentId: shinId,
      attendanceStatus: "absent"
    }],
    notificationJobs: []
  }),
  ["해당 학생 기록"],
  "대상 학생을 명단에서 제거하면 서버가 그 학생 기록을 삭제하므로 반드시 차단해야 합니다."
);

assert.deepEqual(
  getSpecialLectureStudentSyncProtectionReasons({
    ...sharedProtectionInput,
    expectedSchedule: shinExpectedSchedule,
    records: [],
    notificationJobs: [{
      lessonId: lesson.lessonId,
      studentId: shinId,
      status: "scheduled"
    }]
  }),
  ["해당 학생 대기 알림"],
  "대상 학생의 예약 문구가 있으면 시간 변경으로 문구가 낡을 수 있으므로 차단해야 합니다."
);

assert.deepEqual(
  getSpecialLectureStudentSyncProtectionReasons({
    ...sharedProtectionInput,
    expectedSchedule: shinExpectedSchedule,
    lessonDate: "2026-07-27",
    records: [],
    notificationJobs: []
  }),
  ["오늘·과거 수업"],
  "오늘과 과거 수업은 학생별 변경도 자동 반영하지 않아야 합니다."
);

assert.deepEqual(
  getSpecialLectureStudentSyncProtectionReasons({
    ...sharedProtectionInput,
    expectedSchedule: shinExpectedSchedule,
    lesson: { ...lesson, status: "completed" },
    records: [],
    notificationJobs: []
  }),
  ["완료 수업"],
  "완료 수업은 미래 날짜여도 자동 반영하지 않아야 합니다."
);

console.log("Special lecture per-student plan sync contract passed.");
