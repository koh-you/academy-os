export function createLessonNotificationJobBatch({
  buildJob,
  isClosureLesson,
  lesson,
  mode,
  scheduledDate,
  students
}) {
  if (isClosureLesson(lesson)) return [];
  return students
    .flatMap((student) => [
      buildJob(lesson, student, "parent", scheduledDate, mode),
      buildJob(lesson, student, "student", scheduledDate, mode)
    ])
    .filter(Boolean);
}
