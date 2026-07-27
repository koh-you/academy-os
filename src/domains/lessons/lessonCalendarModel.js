export const lessonCalendarFilterOptions = [
  { id: "all", label: "전체" },
  { id: "regular", label: "정규수업" },
  { id: "preExam", label: "직전수업" },
  { id: "closure", label: "휴강" },
  { id: "makeup", label: "보충수업" },
  { id: "examPrep", label: "시험대비" },
  { id: "specialLecture", label: "특강" }
];

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
  sortLessons
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
