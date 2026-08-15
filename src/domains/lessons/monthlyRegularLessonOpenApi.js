import { getMonthlyRegularLessonOpenSnapshot } from "./monthlyRegularLessonOpen.js";
import { getJsonWithTimeout, postJsonWithTimeout } from "../../shared/utils/apiClient.js";

/**
 * Owns the per-class bulk save + Supabase requery verification for opening
 * a month of regular lessons, including the retry-verify fallback when a
 * bulk save call itself errors or times out. Progress is reported through
 * onStatus so App.jsx's setMonthlyRegularLessonOpenStatus stays the single
 * owner of that state. Returns the raw persisted lesson list on success;
 * App.jsx applies filterActiveLessons/normalizeLessonCalendarRules and
 * setLessons itself, since those are shared with other handlers.
 */
export async function openMonthlyRegularLessonsAction(plan, { onStatus }) {
  const verifySavedLessons = async () => {
    const verification = await getJsonWithTimeout(
      `/api/lessons?includeCanceled=true&verify=monthly-regular-open-${Date.now()}`,
      30000,
      "월 정규수업 저장 확인이 30초를 넘었습니다. 새로고침 후 달력을 먼저 확인해 주세요."
    );
    if (!verification.ok || verification.source !== "supabase" || !Array.isArray(verification.lessons)) {
      throw new Error(verification.error || "Supabase에서 월 정규수업 저장 결과를 다시 확인하지 못했습니다.");
    }
    const persistedById = new Map(verification.lessons.map((lesson) => [lesson.lessonId, lesson]));
    const missingLessons = plan.lessonsToCreate.filter((lesson) => {
      const persisted = persistedById.get(lesson.lessonId);
      return !persisted || getMonthlyRegularLessonOpenSnapshot(persisted) !== getMonthlyRegularLessonOpenSnapshot(lesson);
    });
    return { missingLessons, persistedLessons: verification.lessons };
  };

  onStatus({ message: `정규수업 ${plan.rows.length}개 반 · ${plan.lessonsToCreate.length}회차를 반별로 저장 중입니다.`, state: "saving" });
  try {
    for (const [index, row] of plan.rows.entries()) {
      if (!row.lessons.length) continue;
      onStatus({
        message: `${plan.monthKey} 정규수업 저장 중: ${index + 1}/${plan.rows.length} · ${row.className} ${row.lessons.length}회차`,
        state: "saving"
      });
      const saveResult = await postJsonWithTimeout(
        "/api/lessons/bulk",
        { lessons: row.lessons },
        45000,
        "반별 정규수업 저장이 45초를 넘었습니다. Supabase 반영 여부를 먼저 확인합니다."
      );
      if (!saveResult.ok || saveResult.source !== "supabase") {
        throw new Error(saveResult.error || `${row.className} 정규수업을 Supabase에 저장하지 못했습니다.`);
      }
    }
    onStatus({ message: "Supabase 저장 후 반영 내용을 다시 확인 중입니다.", state: "verifying" });
    const verification = await verifySavedLessons();
    if (verification.missingLessons.length) {
      throw new Error(`Supabase 재조회에서 ${verification.missingLessons.length}회차가 일치하지 않습니다.`);
    }
    onStatus({
      message: `${plan.monthKey} 정규수업 ${plan.rows.length}개 반 · ${plan.lessonsToCreate.length}회차를 열고 Supabase 재조회까지 확인했습니다. 알림톡·출결·숙제·수업기록은 생성하지 않았습니다.`,
      state: "saved"
    });
    return { rawPersistedLessons: verification.persistedLessons };
  } catch (error) {
    try {
      const verification = await verifySavedLessons();
      if (!verification.missingLessons.length) {
        onStatus({
          message: `${plan.monthKey} 정규수업은 응답 지연이 있었지만 Supabase 재조회에서 ${plan.lessonsToCreate.length}회차 전체 반영을 확인했습니다.`,
          state: "saved"
        });
        return { rawPersistedLessons: verification.persistedLessons };
      }
      onStatus({
        message: `저장 응답 지연/실패 뒤 Supabase를 확인했습니다. ${plan.lessonsToCreate.length - verification.missingLessons.length}회차는 반영됐고 ${verification.missingLessons.length}회차는 아직 없습니다. 잠시 뒤 새로고침 후 남은 회차만 다시 열어 주세요.`,
        state: "failed"
      });
    } catch (verificationError) {
      onStatus({ message: `월 정규수업 열기 실패: ${error.message} · 저장 결과 확인도 실패했습니다: ${verificationError.message}`, state: "failed" });
    }
    throw error;
  }
}
