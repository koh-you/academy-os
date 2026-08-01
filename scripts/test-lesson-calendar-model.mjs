import assert from "node:assert/strict";
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
    sourceLabel: "고1 중간",
    date: "2026-07-16",
    startTime: "15:00",
    studentIds: ["student-1"]
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
assert.equal(allModel.calendarDays[1].lessons[1].label, "15:00 시험대비 · 고1 중간");
assert.equal(allModel.calendarDays[2].lessons[0].className, "lessonPill specialLectureLessonPill");
assert.equal(allModel.calendarDays[2].lessons[0].label, "16:00 특강반 (1명)");

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

assert.deepEqual(
  lessons.map((lesson) => lesson.lessonId),
  ["regular", "pre-exam", "closure", "makeup", "exam-prep", "special", "legacy"],
  "view model creation must not mutate the source lesson order"
);

console.log("lesson calendar month shift, filtering, month count, day sorting, and pill model passed");
