import { getLessonModalSaveSnapshot } from "./lessonModalSaveSnapshot.js";

export function verifyLessonModalSaveResults({
  expectedLessons = [],
  persistedLessons = []
}) {
  return expectedLessons.map((expectedLesson) => {
    const persistedLesson = persistedLessons.find(
      (lesson) => lesson.lessonId === expectedLesson.lessonId
    );
    if (!persistedLesson) {
      throw new Error(`저장 후 수업일지를 찾지 못했습니다: ${expectedLesson.className}`);
    }
    if (
      getLessonModalSaveSnapshot(persistedLesson) !==
      getLessonModalSaveSnapshot(expectedLesson)
    ) {
      throw new Error(`저장 후 Supabase 값이 일치하지 않습니다: ${expectedLesson.className}`);
    }
    return persistedLesson;
  });
}
