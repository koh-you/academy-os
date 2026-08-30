import { getExamPrepSourceItems } from "./examPrepLessonPresentation.js";

export const lessonCalendarFilterOptions = [
  { id: "all", label: "전체" },
  { id: "regular", label: "정규수업" },
  { id: "preExam", label: "직전수업" },
  { id: "closure", label: "휴강" },
  { id: "makeup", label: "보충수업" },
  { id: "examPrep", label: "시험대비" },
  { id: "specialLecture", label: "특강" }
];

export function getLessonsForDate(lessons = [], date = "", sortFn) {
  return lessons.filter((lesson) => lesson.date === date).sort(sortFn);
}

export function shiftLessonCalendarMonth(dateString = "", monthOffset = 0) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(dateString));
  const offset = Number(monthOffset);
  if (!match || !Number.isInteger(offset)) return dateString;

  const [, yearText, monthText, dayText] = match;
  const year = Number(yearText);
  const monthIndex = Number(monthText) - 1;
  const day = Number(dayText);
  const sourceLastDay = new Date(Date.UTC(year, monthIndex + 1, 0)).getUTCDate();
  if (monthIndex < 0 || monthIndex > 11 || day < 1 || day > sourceLastDay) return dateString;

  const targetMonth = new Date(Date.UTC(year, monthIndex + offset, 1));
  const targetYear = targetMonth.getUTCFullYear();
  const targetMonthIndex = targetMonth.getUTCMonth();
  const targetLastDay = new Date(Date.UTC(targetYear, targetMonthIndex + 1, 0)).getUTCDate();
  const targetDay = Math.min(day, targetLastDay);
  return `${targetYear}-${String(targetMonthIndex + 1).padStart(2, "0")}-${String(targetDay).padStart(2, "0")}`;
}

function matchesLessonTypeFilter(lesson, lessonTypeFilter, isExamPrepLesson) {
  if (lessonTypeFilter === "all") return true;
  if (lessonTypeFilter === "regular") {
    return (
      !["preExam", "closure", "makeup", "specialLecture"].includes(lesson.lessonType) &&
      !isExamPrepLesson(lesson)
    );
  }
  if (lessonTypeFilter === "examPrep") return isExamPrepLesson(lesson);
  return lesson.lessonType === lessonTypeFilter;
}

function createLessonPillModel({
  getLessonStudentIds,
  isExamPrepLesson,
  lesson,
  selectedLessonId
}) {
  const isExamPrepType = isExamPrepLesson(lesson);
  const className = [
    "lessonPill",
    lesson.lessonId === selectedLessonId ? "active" : "",
    lesson.lessonType === "preExam" ? "preExamLessonPill" : "",
    lesson.lessonType === "closure" ? "closureLessonPill" : "",
    lesson.lessonType === "makeup" ? "makeupLessonPill" : "",
    isExamPrepType ? "examPrepLessonPill" : "",
    lesson.lessonType === "specialLecture" ? "specialLectureLessonPill" : ""
  ].filter(Boolean).join(" ");
  const nameLabel = lesson.lessonType === "closure" ? `휴강 · ${lesson.className}` : lesson.className;
  const suffixLabel = lesson.lessonType === "closure"
    ? ""
    : isExamPrepType
      ? lesson.sourceLabel
        ? ` · ${lesson.sourceLabel}`
        : ""
      : ` (${getLessonStudentIds(lesson).length}명)`;

  return {
    className,
    examPrepSummary: isExamPrepType
      ? {
          schoolLabels: getExamPrepSourceItems(lesson),
          studentCount: getLessonStudentIds(lesson).length
        }
      : null,
    label: `${lesson.startTime} ${nameLabel}${suffixLabel}`,
    lesson
  };
}

export function createLessonCalendarViewModel({
  days = [],
  getLessonStudentIds,
  isExamPrepLesson,
  isLegacyExamPrepLesson,
  lessons = [],
  lessonTypeFilter = "all",
  selectedDate = "",
  selectedLessonId = "",
  sortLessons,
  today = ""
}) {
  const visibleLessons = lessons.filter(
    (lesson) =>
      !isLegacyExamPrepLesson(lesson) &&
      matchesLessonTypeFilter(lesson, lessonTypeFilter, isExamPrepLesson)
  );
  const selectedMonth = selectedDate.slice(0, 7);
  const visibleLessonCount = visibleLessons.filter(
    (lesson) => lesson.date.slice(0, 7) === selectedMonth
  ).length;
  const calendarDays = days.map((day) => ({
    ...day,
    isSelected: selectedDate === day.date,
    isToday: Boolean(today) && today === day.date,
    lessons: visibleLessons
      .filter((lesson) => lesson.date === day.date)
      .sort(sortLessons)
      .map((lesson) =>
        createLessonPillModel({
          getLessonStudentIds,
          isExamPrepLesson,
          lesson,
          selectedLessonId
        })
      )
  }));

  return {
    calendarDays,
    filterOptions: lessonCalendarFilterOptions,
    visibleLessonCount,
    visibleLessons
  };
}
