function getLessonCalendarDisplayPriority(lesson = {}) {
  if (lesson.lessonType === "specialLecture" || lesson.lessonTrackType === "specialLecture") return 0;
  if (["preExam", "examPrep", "exam"].includes(lesson.lessonType)) return 1;
  if (lesson.lessonType === "makeup") return 2;
  if (lesson.lessonType === "closure") return 3;
  return 4;
}

export function compareLessonCalendarDisplayOrder(left = {}, right = {}, sortLessons) {
  const timeOrder = typeof sortLessons === "function"
    ? Number(sortLessons(left, right)) || 0
    : String(left.startTime ?? "").localeCompare(String(right.startTime ?? ""));
  if (timeOrder !== 0) return timeOrder;

  const priorityOrder = getLessonCalendarDisplayPriority(left) - getLessonCalendarDisplayPriority(right);
  if (priorityOrder !== 0) return priorityOrder;

  return String(left.className ?? "").localeCompare(String(right.className ?? ""), "ko") ||
    String(left.lessonId ?? "").localeCompare(String(right.lessonId ?? ""));
}
