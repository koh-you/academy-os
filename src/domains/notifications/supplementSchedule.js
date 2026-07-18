export function isSupplementScheduleForLessonComment(task = {}, lesson = null) {
  if (!["homework_makeup", "absence_makeup"].includes(task.taskType)) return false;
  if (task.status !== "scheduled") return false;
  if (task.supplementProcessStatus === "completed") return false;

  const sourceLessonId = String(task.sourceLessonId ?? "").trim();
  const currentLessonId = String(lesson?.lessonId ?? "").trim();
  return Boolean(sourceLessonId && currentLessonId && sourceLessonId === currentLessonId);
}
