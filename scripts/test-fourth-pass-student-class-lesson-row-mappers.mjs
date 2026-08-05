import assert from "node:assert/strict";
import {
  fromClassTemplateRow,
  fromLessonRow,
  fromStudentRow,
  toClassTemplateRow,
  toLessonRow,
  toStudentRow
} from "../src/shared/data/studentClassLessonRowMappers.js";

const isoTimestampPattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

const studentRow = toStudentRow({
  studentId: "student-1",
  name: "학생",
  loginId: "student-login",
  birthYear: "2012",
  scheduleOverride: "",
  withdrawnAt: "2026-08-01",
  withdrawalReason: "reason",
  withdrawalComment: "comment",
  unknownDomainField: "drop"
});
assert.match(studentRow.updated_at, isoTimestampPattern);
assert.equal(studentRow.pin, "1234");
assert.equal(studentRow.status, "active");
assert.equal(studentRow.birth_year, 2012);
assert.equal(studentRow.schedule_override, null);
assert.equal("unknownDomainField" in studentRow, false);

const fallbackStudentRow = toStudentRow(
  {
    studentId: "student-2",
    name: "학생2",
    loginId: "student-login-2",
    withdrawnAt: "2026-08-02",
    withdrawalReason: "reason",
    withdrawalComment: "comment"
  },
  { includeWithdrawalDetails: false, includeWithdrawnAt: false }
);
assert.equal("withdrawn_at" in fallbackStudentRow, false);
assert.equal("withdrawal_reason" in fallbackStudentRow, false);
assert.equal("withdrawal_comment" in fallbackStudentRow, false);

assert.deepEqual(
  fromStudentRow({
    student_id: "student-1",
    name: "학생",
    login_id: "student-login",
    pin: "9999",
    status: "active",
    school_name: null,
    updated_at: "2026-08-05T00:00:00.000Z",
    unknown_db_column: "drop"
  }),
  {
    studentId: "student-1",
    name: "학생",
    loginId: "student-login",
    pin: "9999",
    status: "active",
    schoolName: "",
    grade: "",
    birthYear: "",
    studentPhone: "",
    parentPhone: "",
    defaultClassTemplateId: "",
    textbook: "",
    specialNote: "",
    scheduleOverride: "",
    withdrawalComment: "",
    withdrawalReason: "",
    withdrawnAt: "",
    updatedAt: "2026-08-05T00:00:00.000Z"
  }
);

const classTemplateRow = toClassTemplateRow({
  classTemplateId: "class-1",
  name: "월수금",
  days: ["월", "수", "금"],
  startTime: "7:05 extra",
  endTime: "29:99"
});
assert.equal(classTemplateRow.start_time, "07:05");
assert.equal(classTemplateRow.end_time, "23:59");
assert.equal(classTemplateRow.color, "#17213a");
assert.equal(classTemplateRow.status, "active");
assert.match(classTemplateRow.updated_at, isoTimestampPattern);
assert.deepEqual(
  fromClassTemplateRow({
    class_template_id: "class-1",
    name: "월수금",
    days: null,
    start_time: "7:05",
    end_time: null,
    color: "#fff",
    status: "active",
    updated_at: "drop",
    unknown_db_column: "drop"
  }),
  {
    classTemplateId: "class-1",
    name: "월수금",
    days: [],
    startTime: "07:05",
    endTime: "",
    color: "#fff",
    status: "active"
  }
);

const lessonRow = toLessonRow({
  lessonId: "lesson-1",
  classTemplateId: "",
  className: "특강",
  date: "2026-08-05",
  startTime: "9:05",
  endTime: "11:00",
  lessonType: "specialLecture",
  specialLectureSessionIndex: "2",
  specialLectureStudentSchedules: [
    {
      student_id: "student-1",
      start_time: "9:15",
      end_time: "10:45",
      schedule_type: "adjusted",
      override_reason: "legacy"
    },
    { student_id: "incomplete", start_time: "9:15" }
  ],
  unknownDomainField: "drop"
});
assert.equal(lessonRow.class_template_id, null);
assert.equal(lessonRow.start_time, "09:05");
assert.equal(lessonRow.status, "scheduled");
assert.equal(lessonRow.special_lecture_session_index, 2);
assert.deepEqual(lessonRow.special_lecture_student_schedules, [
  {
    studentId: "student-1",
    startTime: "09:15",
    endTime: "10:45",
    scheduleType: "adjusted",
    overrideReason: "legacy"
  }
]);
assert.match(lessonRow.updated_at, isoTimestampPattern);
assert.equal("unknownDomainField" in lessonRow, false);

const fallbackLessonRow = toLessonRow(
  { lessonId: "lesson-2", className: "정규", date: "2026-08-06" },
  { includeScheduleMetadata: false }
);
for (const column of [
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
  assert.equal(column in fallbackLessonRow, false, `${column} must be omitted by the schema fallback`);
}

assert.deepEqual(
  fromLessonRow({
    lesson_id: "lesson-1",
    class_template_id: null,
    class_name: "특강",
    lesson_date: "2026-08-05",
    start_time: "9:05",
    end_time: "11:00",
    color: "#111",
    student_ids: null,
    special_lecture_student_schedules: [
      { student_id: "student-1", start_time: "9:15", end_time: "10:45", schedule_type: "adjusted" }
    ],
    status: "scheduled",
    updated_at: "2026-08-05T00:00:00.000Z",
    unknown_db_column: "drop"
  }),
  {
    lessonId: "lesson-1",
    classTemplateId: "",
    className: "특강",
    date: "2026-08-05",
    startTime: "09:05",
    endTime: "11:00",
    color: "#111",
    studentIds: [],
    lessonType: "",
    lessonTopic: "",
    sourceMakeupTaskId: "",
    sourceSchoolEventId: "",
    sourceLabel: "",
    lessonTrackId: "",
    lessonTrackType: "",
    specialLectureGuideId: "",
    specialLectureSessionId: "",
    specialLectureSessionIndex: null,
    specialLectureStudentSchedules: [
      { studentId: "student-1", startTime: "09:15", endTime: "10:45", scheduleType: "adjusted", overrideReason: null }
    ],
    status: "scheduled",
    updatedAt: "2026-08-05T00:00:00.000Z"
  }
);

console.log("fourth-pass student/class/lesson row mappers passed · 6 pure mappers · legacy/default/options preserved");
