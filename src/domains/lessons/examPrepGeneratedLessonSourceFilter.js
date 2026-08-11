export function filterStaleGeneratedExamPrepLessons({ lessons = [], planItems = [] } = {}) {
  const activeKeys = new Set(planItems
    .filter((item) => item.lesson?.lessonType === "examPrep" && item.status !== "skipped")
    .flatMap((item) => [item.generatedKey, item.lesson?.generatedKey, item.lesson?.sourceSchoolEventId, item.lesson?.lessonId])
    .filter(Boolean));
  return lessons.filter((lesson) => {
    const isGeneratedExamPrep = lesson.lessonType === "examPrep" && (
      String(lesson.generatedKey || "").startsWith("generated:exam_prep:") ||
      String(lesson.sourceSchoolEventId || "").startsWith("generated:exam_prep:") ||
      String(lesson.lessonId || "").startsWith("lesson_exam_prep_")
    );
    if (!isGeneratedExamPrep) return true;
    return [lesson.generatedKey, lesson.sourceSchoolEventId, lesson.lessonId].some((key) => activeKeys.has(key));
  });
}
