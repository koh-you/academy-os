export function createLessonJournalHeaderModel({
  formatLessonTimeRange,
  lesson = {},
  studentCount = 0
}) {
  return {
    className: lesson.className,
    metaText: `${lesson.date} · ${formatLessonTimeRange(lesson)} · ${studentCount}명`,
    topic: lesson.lessonTopic || "수업일지"
  };
}
