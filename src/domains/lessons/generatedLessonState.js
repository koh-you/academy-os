export function mergeGeneratedLessonLists(
  currentLessons = [],
  lessonsToSave = []
) {
  const nextLessons = [...currentLessons];
  lessonsToSave.forEach((lesson) => {
    const index = nextLessons.findIndex(
      (item) => item.lessonId === lesson.lessonId
    );
    if (index >= 0) {
      nextLessons[index] = { ...nextLessons[index], ...lesson };
    } else {
      nextLessons.push(lesson);
    }
  });
  return nextLessons;
}
