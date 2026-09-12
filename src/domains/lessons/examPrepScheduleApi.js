import { rebaseExamPrepScheduleChange } from "./examPrepSchedulePlan.js";

export async function saveExamPrepSchedulePlanRequest({ auditId, changes, request }) {
  if (typeof request !== "function") throw new Error("시험대비 일정 저장 요청 함수가 필요합니다.");
  return request("/api/exam-prep-schedule/save", { auditId, changes });
}

/**
 * 시험대비 일정 저장. 버전 충돌이면 서버가 돌려준 최신 수업 위에 같은 편집을 다시 얹어
 * 한 번만 재시도한다.
 *
 * 편집은 "이 학생들의 시간을 이걸로" 라는 의도라, 원본이 바뀌었어도 최신 원본에 그대로
 * 다시 적용하는 게 원장님이 저장을 한 번 더 누르는 것과 같은 결과다. 예전엔 충돌이 나면
 * 실패만 띄워서, 원본이 한 번 어긋나면 새로고침 말고는 빠져나갈 길이 없었다
 * (2026-09-12 "자주 발생" 보고). 어긋나는 이유는 대개 태블릿 출결이 명단을 바꿨거나,
 * 자동 생성 수업을 처음 저장할 때 서버 updatedAt 을 받아두지 않아서였다.
 *
 * onLessonRefreshed 는 서버 최신본을 화면 상태에 반영하는 콜백. 재시도가 또 실패해도
 * 최신본은 반영해 두므로, 그 다음 저장은 맞는 원본으로 나간다.
 */
export async function saveExamPrepScheduleWithConflictRecovery({
  createAuditId = () => `exam-prep-schedule-${Date.now()}`,
  onLessonRefreshed,
  plan,
  request
}) {
  const send = (changes) => saveExamPrepSchedulePlanRequest({ auditId: createAuditId(), changes, request });
  try {
    return await send(plan.changes);
  } catch (error) {
    const currentLesson = error?.result?.currentLesson;
    if (!currentLesson?.lessonId) throw error;
    onLessonRefreshed?.(currentLesson);
    const rebasedChanges = plan.changes
      .map((change) => rebaseExamPrepScheduleChange(change, currentLesson, plan))
      .filter(Boolean);
    if (!rebasedChanges.length) {
      throw new Error("최신 수업 명단에는 선택한 학생이 없습니다. 최신 원본을 불러왔으니 대상을 다시 확인해 주세요.");
    }
    try {
      return await send(rebasedChanges);
    } catch (retryError) {
      const retryLesson = retryError?.result?.currentLesson;
      if (retryLesson?.lessonId) onLessonRefreshed?.(retryLesson);
      throw new Error(`${retryError.message} 최신 원본을 불러왔습니다. 이후 일정에 저장을 다시 눌러 주세요.`);
    }
  }
}
