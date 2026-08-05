import assert from "node:assert/strict";
import {
  fromClassTemplateRow,
  fromLessonRow,
  fromStudentRow,
  toClassTemplateRow,
  toLessonRow,
  toStudentRow
} from "../src/shared/persistence/coreIdentityRowMappers.js";

function assertIsoTimestamp(value) {
  assert.equal(new Date(value).toISOString(), value);
}

const studentRow = toStudentRow({
  studentId: "student_mapper_1",
  name: "매퍼 학생",
  loginId: "mapper-student",
  schoolName: "",
  grade: "중2",
  birthYear: "2012",
  studentPhone: undefined,
  parentPhone: "01022223333",
  defaultClassTemplateId: "template_mapper",
  textbook: "개념서",
  specialNote: "",
  scheduleOverride: { 월: "17:00-19:00" },
  withdrawalReason: "",
  withdrawalComment: "이사",
  withdrawnAt: ""
});
assert.equal(studentRow.school_name, null);
assert.equal(studentRow.student_phone, null);
assert.equal(studentRow.birth_year, 2012);
assert.equal(studentRow.pin, "1234");
assert.equal(studentRow.status, "active");
assert.equal(studentRow.withdrawal_reason, null);
assert.equal(studentRow.withdrawal_comment, "이사");
assert.equal(studentRow.withdrawn_at, null);
assertIsoTimestamp(studentRow.updated_at);

const studentDomain = fromStudentRow({ ...studentRow, unknown_db_column: "drop-me" });
assert.equal(studentDomain.studentId, "student_mapper_1");
assert.equal(studentDomain.schoolName, "");
assert.equal(studentDomain.studentPhone, "");
assert.deepEqual(studentDomain.scheduleOverride, { 월: "17:00-19:00" });
assert.equal(studentDomain.updatedAt, studentRow.updated_at);
assert.equal("unknownDbColumn" in studentDomain, false);

const studentFallbackRow = toStudentRow(
  { studentId: "student_legacy", name: "레거시", loginId: "legacy" },
  { includeWithdrawalDetails: false, includeWithdrawnAt: false }
);
assert.equal("withdrawal_reason" in studentFallbackRow, false);
assert.equal("withdrawal_comment" in studentFallbackRow, false);
assert.equal("withdrawn_at" in studentFallbackRow, false);

const classRow = toClassTemplateRow({
  classTemplateId: "template_mapper",
  name: "월수금",
  days: ["월", "수", "금"],
  startTime: "7:05",
  endTime: "29:90"
});
assert.equal(classRow.start_time, "07:05");
assert.equal(classRow.end_time, "23:59");
assert.equal(classRow.color, "#17213a");
assert.equal(classRow.status, "active");
assertIsoTimestamp(classRow.updated_at);
assert.deepEqual(fromClassTemplateRow({ ...classRow, extra_column: true }), {
  classTemplateId: "template_mapper",
  name: "월수금",
  days: ["월", "수", "금"],
  startTime: "07:05",
  endTime: "23:59",
  color: "#17213a",
  status: "active"
});

const lessonRow = toLessonRow({
  lessonId: "lesson_mapper_1",
  classTemplateId: "template_mapper",
  className: "월수금",
  date: "2026-08-05",
  startTime: "7:05",
  endTime: "09:00",
  studentIds: ["student_mapper_1"],
  lessonType: "specialLecture",
  lessonTopic: "함수 특강",
  sourceMakeupTaskId: "",
  sourceSchoolEventId: "event_mapper",
  sourceLabel: "여름 특강",
  lessonTrackId: "track_mapper",
  lessonTrackType: "specialLecture",
  specialLectureGuideId: "guide_mapper",
  specialLectureSessionId: "session_mapper",
  specialLectureSessionIndex: "2",
  specialLectureStudentSchedules: [
    {
      student_id: "student_mapper_1",
      start_time: "7:15",
      end_time: "08:45",
      schedule_type: "adjusted",
      override_reason: "개별 시간"
    },
    { student_id: "", start_time: "08:00", end_time: "09:00" }
  ]
});
assert.equal(lessonRow.start_time, "07:05");
assert.equal(lessonRow.source_makeup_task_id, null);
assert.equal(lessonRow.special_lecture_session_index, 2);
assert.deepEqual(lessonRow.special_lecture_student_schedules, [
  {
    studentId: "student_mapper_1",
    startTime: "07:15",
    endTime: "08:45",
    scheduleType: "adjusted",
    overrideReason: "개별 시간"
  }
]);
assertIsoTimestamp(lessonRow.updated_at);

const lessonDomain = fromLessonRow({
  ...lessonRow,
  special_lecture_student_schedules: [
    {
      student_id: "student_mapper_1",
      start_time: "7:15",
      end_time: "08:45",
      schedule_type: "adjusted",
      override_reason: "개별 시간"
    }
  ],
  unknown_db_column: "drop-me"
});
assert.equal(lessonDomain.lessonId, "lesson_mapper_1");
assert.equal(lessonDomain.startTime, "07:05");
assert.equal(lessonDomain.updatedAt, lessonRow.updated_at);
assert.deepEqual(lessonDomain.specialLectureStudentSchedules, [
  {
    studentId: "student_mapper_1",
    startTime: "07:15",
    endTime: "08:45",
    scheduleType: "adjusted",
    overrideReason: "개별 시간"
  }
]);
assert.equal("unknownDbColumn" in lessonDomain, false);

const legacyLessonRow = toLessonRow(
  {
    lessonId: "lesson_legacy",
    className: "레거시 수업",
    date: "2026-08-06",
    startTime: "17:00",
    endTime: "19:00"
  },
  { includeScheduleMetadata: false }
);
for (const field of [
  "lesson_type",
  "lesson_topic",
  "source_makeup_task_id",
  "source_school_event_id",
  "source_label",
  "lesson_track_id",
  "lesson_track_type",
  "special_lecture_guide_id",
  "special_lecture_session_id",
  "special_lecture_session_index",
  "special_lecture_student_schedules"
]) {
  assert.equal(field in legacyLessonRow, false, `${field} must stay excluded from the schema fallback row`);
}

const lessonWithoutScheduleColumn = fromLessonRow({
  lesson_id: "lesson_without_schedule_column",
  class_name: "기본 수업",
  lesson_date: "2026-08-07",
  start_time: "17:00",
  end_time: "19:00",
  status: "scheduled"
});
assert.equal("specialLectureStudentSchedules" in lessonWithoutScheduleColumn, false);

console.log("core identity row mapper round-trip, null, legacy, version, and unknown-field contracts passed");
