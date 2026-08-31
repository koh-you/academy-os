import assert from "node:assert/strict";
import {
  buildExamPeriodSundayScheduleModel,
  hasExamPeriodSundaySchedule
} from "../src/domains/lessons/examPeriodSundaySchedule.js";

const isExamPrepLesson = (lesson) => lesson?.lessonType === "examPrep";

const students = [
  { name: "김가람", schoolName: "상계중", studentId: "student-1" },
  { name: "박나래", schoolName: "정의여고", studentId: "student-2" },
  { name: "이도윤", schoolName: "상계중", studentId: "student-3" }
];

const lessons = [
  {
    date: "2026-08-16",
    endTime: "18:00",
    lessonId: "sunday-1",
    lessonType: "examPrep",
    sourceLabel: "상계중 2학기 중간고사 · 정의여고 2학기 중간고사",
    startTime: "13:00",
    studentIds: ["student-1", "student-2", "student-3"],
    specialLectureStudentSchedules: [
      { endTime: "15:00", scheduleType: "adjusted", startTime: "13:30", studentId: "student-2" }
    ]
  },
  {
    date: "2026-08-23",
    endTime: "18:00",
    lessonId: "sunday-2",
    lessonType: "examPrep",
    sourceLabel: "상계중 2학기 중간고사",
    startTime: "13:00",
    studentIds: ["student-1", "student-3"]
  },
  {
    date: "2026-08-17",
    endTime: "20:00",
    lessonId: "monday-regular",
    lessonType: "class",
    startTime: "17:00",
    studentIds: ["student-1"]
  },
  {
    date: "2026-08-16",
    endTime: "18:00",
    lessonId: "sunday-non-prep",
    lessonType: "class",
    startTime: "10:00",
    studentIds: ["student-2"]
  }
];

assert.equal(hasExamPeriodSundaySchedule({ isExamPrepLesson, lessons }), true);
assert.equal(hasExamPeriodSundaySchedule({ isExamPrepLesson, lessons: [] }), false);
assert.equal(
  hasExamPeriodSundaySchedule({ isExamPrepLesson, lessons: lessons.filter((lesson) => lesson.lessonId !== "sunday-1" && lesson.lessonId !== "sunday-2") }),
  false,
  "non-Sunday and non-examPrep lessons must not count"
);

const model = buildExamPeriodSundayScheduleModel({ isExamPrepLesson, lessons, students });

assert.equal(model.totalSessions, 2, "only the two Sunday examPrep lessons count as sessions");
assert.equal(model.totalStudents, 3, "distinct students across both Sundays");
assert.deepEqual(model.dates.map((day) => day.date), ["2026-08-16", "2026-08-23"], "dates stay in chronological order");

const firstDay = model.dates[0];
assert.equal(firstDay.dateLabel, "8.16(일)");
assert.equal(firstDay.studentCount, 3);
assert.equal(firstDay.lessons.length, 1);
assert.equal(firstDay.lessons[0].timeLabel, "13:00-18:00");
assert.equal(firstDay.lessons[0].sourceLabel, "상계중 2학기 중간고사 · 정의여고 2학기 중간고사");
assert.deepEqual(
  firstDay.lessons[0].schoolGroups.map((group) => [group.label, group.students.map((student) => student.name)]),
  [["상계중", ["김가람", "이도윤"]], ["정의여고", ["박나래"]]],
  "students group by school, sorted in Korean order"
);

const secondDay = model.dates[1];
assert.equal(secondDay.dateLabel, "8.23(일)");
assert.equal(secondDay.studentCount, 2);

const emptyModel = buildExamPeriodSundayScheduleModel({ isExamPrepLesson, lessons: [], students });
assert.deepEqual(emptyModel.dates, []);
assert.equal(emptyModel.totalSessions, 0);
assert.equal(emptyModel.totalStudents, 0);

console.log("exam period Sunday schedule model passed · sessions 2 · dates 2 · school grouping verified");
