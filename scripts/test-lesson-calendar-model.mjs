import assert from "node:assert/strict";
import { compareLessonCalendarDisplayOrder } from "../src/domains/lessons/lessonCalendarDisplayOrder.js";
import {
  createExamPrepStudentRows,
  getExamPrepSourceItems,
  groupExamPrepStudentsBySchool,
  groupExamPrepStudentsByTime
} from "../src/domains/lessons/examPrepLessonPresentation.js";
import {
  createLessonCalendarViewModel,
  lessonCalendarFilterOptions,
  shiftLessonCalendarMonth
} from "../src/domains/lessons/lessonCalendarModel.js";

assert.equal(shiftLessonCalendarMonth("2026-08-01", 1), "2026-09-01");
assert.equal(shiftLessonCalendarMonth("2026-08-01", -1), "2026-07-01");
assert.equal(shiftLessonCalendarMonth("2026-01-31", 1), "2026-02-28");
assert.equal(shiftLessonCalendarMonth("2024-01-31", 1), "2024-02-29");
assert.equal(shiftLessonCalendarMonth("2026-03-31", -1), "2026-02-28");
assert.equal(shiftLessonCalendarMonth("invalid", 1), "invalid");
assert.equal(shiftLessonCalendarMonth("2026-02-31", 1), "2026-02-31");

const lessons = [
  {
    lessonId: "regular",
    lessonType: "class",
    className: "정규반",
    date: "2026-07-15",
    startTime: "09:00",
    studentIds: ["student-1", "student-2"]
  },
  {
    lessonId: "pre-exam",
    lessonType: "preExam",
    className: "직전반",
    date: "2026-07-15",
    startTime: "08:00",
    studentIds: ["student-1"]
  },
  {
    lessonId: "closure",
    lessonType: "closure",
    className: "휴강반",
    date: "2026-07-15",
    startTime: "11:00",
    studentIds: ["student-1"]
  },
  {
    lessonId: "makeup",
    lessonType: "makeup",
    className: "보충반",
    date: "2026-07-16",
    startTime: "13:00",
    studentIds: []
  },
  {
    lessonId: "exam-prep",
    lessonType: "examPrep",
    className: "시험대비",
    sourceLabel: "상계중 2학기 중간고사 · 정의여고 2학기 중간고사",
    date: "2026-07-16",
    startTime: "15:00",
    endTime: "18:00",
    studentIds: ["student-1", "student-2", "student-3"],
    specialLectureStudentSchedules: [
      { studentId: "student-2", startTime: "13:30", endTime: "15:00", scheduleType: "adjusted" }
    ]
  },
  {
    lessonId: "special",
    lessonType: "specialLecture",
    className: "특강반",
    date: "2026-08-01",
    startTime: "16:00",
    studentIds: ["student-3"]
  },
  {
    lessonId: "legacy",
    lessonType: "examSundayMakeup",
    className: "과거 시험대비",
    date: "2026-07-15",
    startTime: "07:00",
    studentIds: []
  }
];
const days = [
  { date: "2026-07-15", dayNumber: "15", inMonth: true },
  { date: "2026-07-16", dayNumber: "16", inMonth: true },
  { date: "2026-08-01", dayNumber: "1", inMonth: false }
];
const dependencies = {
  getLessonStudentIds: (lesson) => lesson.studentIds ?? [],
  isExamPrepLesson: (lesson) => lesson.lessonType === "examPrep",
  isLegacyExamPrepLesson: (lesson) => lesson.lessonType === "examSundayMakeup",
  sortLessons: (left, right) => left.startTime.localeCompare(right.startTime)
};

function createModel(lessonTypeFilter = "all") {
  return createLessonCalendarViewModel({
    ...dependencies,
    days,
    lessons,
    lessonTypeFilter,
    selectedDate: "2026-07-15",
    selectedLessonId: "regular"
  });
}

assert.deepEqual(
  lessonCalendarFilterOptions.map((option) => option.id),
  ["all", "regular", "preExam", "closure", "makeup", "examPrep", "specialLecture"]
);

const allModel = createModel();
assert.deepEqual(
  allModel.visibleLessons.map((lesson) => lesson.lessonId),
  ["regular", "pre-exam", "closure", "makeup", "exam-prep", "special"]
);
assert.equal(allModel.visibleLessonCount, 5);
assert.equal(allModel.calendarDays[0].isSelected, true);
assert.deepEqual(
  allModel.calendarDays[0].lessons.map((pill) => pill.lesson.lessonId),
  ["pre-exam", "regular", "closure"]
);
assert.equal(allModel.calendarDays[0].lessons[1].className, "lessonPill active");
assert.equal(allModel.calendarDays[0].lessons[1].label, "09:00 정규반 (2명)");
assert.equal(allModel.calendarDays[0].lessons[2].label, "11:00 휴강 · 휴강반");
assert.equal(allModel.calendarDays[1].lessons[1].className, "lessonPill examPrepLessonPill");
assert.equal(allModel.calendarDays[1].lessons[1].label, "15:00 시험대비 · 상계중 2학기 중간고사 · 정의여고 2학기 중간고사");
assert.deepEqual(allModel.calendarDays[1].lessons[1].examPrepSummary, {
  schoolLabels: ["상계중 2학기 중간고사", "정의여고 2학기 중간고사"],
  studentCount: 3
});
assert.equal(allModel.calendarDays[2].lessons[0].className, "lessonPill specialLectureLessonPill");
assert.equal(allModel.calendarDays[2].lessons[0].label, "16:00 특강반 (1명)");

const sameTimeLessons = [
  { lessonId: "makeup-b", lessonType: "makeup", className: "결석 보강 · 홍길동", startTime: "13:00" },
  { lessonId: "regular", lessonType: "class", className: "정규반", startTime: "13:00" },
  { lessonId: "special", lessonType: "specialLecture", className: "개별 진도 클리닉", startTime: "13:00" },
  { lessonId: "makeup-a", lessonType: "makeup", className: "결석 보강 · 강민준", startTime: "13:00" },
  { lessonId: "earlier", lessonType: "class", className: "이른 정규반", startTime: "12:00" }
];
assert.deepEqual(
  [...sameTimeLessons]
    .sort((left, right) => compareLessonCalendarDisplayOrder(left, right, dependencies.sortLessons))
    .map((lesson) => lesson.lessonId),
  ["earlier", "special", "makeup-a", "makeup-b", "regular"],
  "calendar keeps chronological order and groups same-time special lessons before makeup and regular lessons"
);

const expectedByFilter = {
  regular: ["regular"],
  preExam: ["pre-exam"],
  closure: ["closure"],
  makeup: ["makeup"],
  examPrep: ["exam-prep"],
  specialLecture: ["special"]
};
for (const [filter, expectedLessonIds] of Object.entries(expectedByFilter)) {
  assert.deepEqual(
    createModel(filter).visibleLessons.map((lesson) => lesson.lessonId),
    expectedLessonIds,
    `${filter} filter must preserve its lesson category`
  );
}

const examPrepLesson = lessons.find((lesson) => lesson.lessonId === "exam-prep");
const examPrepStudents = [
  { studentId: "student-1", name: "김가람", schoolName: "상계중" },
  { studentId: "student-2", name: "박나래", schoolName: "정의여고" },
  { studentId: "student-3", name: "이도윤", schoolName: "상계중" }
];
const examPrepRows = createExamPrepStudentRows(examPrepLesson, examPrepStudents);
assert.deepEqual(
  examPrepRows.map((row) => [row.name, row.schoolName, row.timeLabel, row.hasIndividualTime]),
  [
    ["박나래", "정의여고", "13:30-15:00", true],
    ["김가람", "상계중", "15:00-18:00", false],
    ["이도윤", "상계중", "15:00-18:00", false]
  ],
  "exam prep students use individual times first and otherwise retain the lesson time"
);
assert.deepEqual(
  groupExamPrepStudentsByTime(examPrepRows).map((group) => [group.label, group.students.map((student) => student.name)]),
  [["13:30-15:00", ["박나래"]], ["15:00-18:00", ["김가람", "이도윤"]]]
);
assert.deepEqual(
  groupExamPrepStudentsBySchool(examPrepRows).map((group) => [group.label, group.students.map((student) => student.name)]),
  [["상계중", ["김가람", "이도윤"]], ["정의여고", ["박나래"]]]
);
assert.deepEqual(getExamPrepSourceItems(examPrepLesson), ["상계중 2학기 중간고사", "정의여고 2학기 중간고사"]);

assert.deepEqual(
  lessons.map((lesson) => lesson.lessonId),
  ["regular", "pre-exam", "closure", "makeup", "exam-prep", "special", "legacy"],
  "view model creation must not mutate the source lesson order"
);

console.log("lesson calendar month shift, filtering, month count, day sorting, and pill model passed");
