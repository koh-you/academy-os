import { verifyLessonModalSaveResults } from "./lessonModalSaveVerification.js";

export async function saveLessonModalLessonsWithVerification({
  lessonDrafts = [],
  onProgress = null,
  readLessons,
  saveLessons
}) {
  const expectedLessons = lessonDrafts.filter(
    (lesson) => lesson?.lessonId && lesson?.date
  );
  if (!expectedLessons.length) {
    throw new Error("저장할 수업일지가 없습니다.");
  }

  const saveResult = await saveLessons(expectedLessons);
  if (saveResult.source !== "supabase") {
    throw new Error("수업일지가 Supabase가 아닌 임시 원천에 저장되어 완료할 수 없습니다.");
  }

  onProgress?.("saving", "Supabase 반영 확인 중");
  const verification = await readLessons();
  if (verification.source !== "supabase") {
    throw new Error("저장 결과를 Supabase에서 다시 확인하지 못했습니다.");
  }

  const persistedLessons = Array.isArray(verification.lessons)
    ? verification.lessons
    : [];
  const verifiedLessons = verifyLessonModalSaveResults({
    expectedLessons,
    persistedLessons
  });

  return { persistedLessons, verifiedLessons };
}
