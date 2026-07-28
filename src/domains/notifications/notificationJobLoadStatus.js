export function createNotificationJobsReadyStatus({
  count = 0,
  lessonId = "",
  scope = "active"
} = {}) {
  return {
    state: "ready",
    message: lessonId
      ? `현재 수업 알림 ${count}건을 확인했습니다.`
      : scope === "history"
        ? `최근 알림 기록 ${count}건을 불러왔습니다.`
        : `처리 중·확인 필요 알림 ${count}건을 불러왔습니다.`
  };
}
