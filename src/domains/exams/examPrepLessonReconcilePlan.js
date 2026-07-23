export function createExamPrepLessonReconcilePlan({
  buildCandidates,
  getIdentityKeys,
  isExamPrepLesson,
  lessons = [],
  nextExamPrepRows = []
}) {
  const examPrepCandidates = buildCandidates(nextExamPrepRows);
  const candidateByIdentityKey = new Map();
  examPrepCandidates.forEach((item) => {
    [item.lesson.lessonId, item.generatedKey, ...getIdentityKeys(item.lesson)]
      .filter(Boolean)
      .forEach((key) => candidateByIdentityKey.set(key, item.lesson));
  });

  const lessonsToSave = [];
  const lessonIdsToDelete = [];
  lessons.filter(isExamPrepLesson).forEach((lesson) => {
    const nextLesson = [lesson.lessonId, ...getIdentityKeys(lesson)]
      .map((key) => candidateByIdentityKey.get(key))
      .find(Boolean);
    if (!nextLesson) {
      lessonIdsToDelete.push(lesson.lessonId);
      return;
    }

    const mergedLesson = { ...lesson, ...nextLesson, lessonId: lesson.lessonId };
    if (JSON.stringify(mergedLesson) !== JSON.stringify(lesson)) {
      lessonsToSave.push(mergedLesson);
    }
  });

  return { lessonIdsToDelete, lessonsToSave };
}

export function applyExamPrepLessonReconcilePlan(lessons = [], plan = {}) {
  const deletedIds = new Set(plan.lessonIdsToDelete ?? []);
  const next = lessons.filter((lesson) => !deletedIds.has(lesson.lessonId));
  (plan.lessonsToSave ?? []).forEach((lesson) => {
    const index = next.findIndex((item) => item.lessonId === lesson.lessonId);
    if (index >= 0) next[index] = { ...next[index], ...lesson };
    else next.push(lesson);
  });
  return next;
}
