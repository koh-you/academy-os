export function createLessonJournalReservationControlModel({
  defaultScheduleHintText = "",
  delayedScheduleLabel = "",
  formatManualScheduledAt,
  hasApplyHandler = false,
  hasDraftChanges = false,
  hasRefreshHandler = false,
  isDelayedScheduleExpired = false,
  notificationPlanMode = "default",
  notificationPlanScheduledAt = "",
  reservationApplyState = "idle",
  resultRefreshState = "idle",
  resultRefreshTargetCount = 0,
  syncStatus = {}
}) {
  const notificationPlanSummaryText = notificationPlanMode === "none"
    ? "알림톡 없음"
    : notificationPlanMode === "delay30"
      ? `${isDelayedScheduleExpired ? "30분 지연 시간 지남" : "30분 지연"} · ${delayedScheduleLabel}`
      : notificationPlanMode === "manual"
        ? `수동 예약 · ${notificationPlanScheduledAt ? formatManualScheduledAt(notificationPlanScheduledAt) : "시각 미정"}`
        : defaultScheduleHintText;
  const solapiApplyButtonLabel =
    reservationApplyState === "applying"
      ? "Solapi 반영 중"
      : notificationPlanMode === "none"
        ? "Solapi 취소 반영"
        : syncStatus.state === "needs"
          ? "Solapi 예약 업데이트"
          : "Solapi 예약 반영";
  const canApplySolapiReservation =
    hasApplyHandler &&
    !hasDraftChanges &&
    reservationApplyState !== "applying" &&
    syncStatus.state !== "resultDue" &&
    (syncStatus.state === "needs" || reservationApplyState === "failed");
  const canRefreshSolapiResults =
    hasRefreshHandler &&
    !hasDraftChanges &&
    resultRefreshState !== "loading" &&
    resultRefreshTargetCount > 0;
  const solapiResultRefreshTitle = resultRefreshTargetCount
    ? `Solapi 발송 원천 ${resultRefreshTargetCount}건을 OS 상태에 반영합니다.`
    : "지난 예약의 Solapi 발송결과를 OS 상태에 반영합니다.";

  return {
    canApplySolapiReservation,
    canRefreshSolapiResults,
    notificationPlanSummaryText,
    solapiApplyButtonLabel,
    solapiResultRefreshTitle
  };
}
