export function createLessonJournalHeaderModel({
  formatLessonTimeRange,
  lesson = {},
  studentCount = 0
}) {
  return {
    className: lesson.className,
    metaText: `${lesson.date} · ${formatLessonTimeRange(lesson)} · ${studentCount}명`,
    // 수업 주제가 없으면 아무것도 보이지 않는다. "수업일지" 같은 자리채움 글씨는 두지 않는다.
    topic: lesson.lessonTopic || ""
  };
}
