export function createLessonJournalReservationControlModel({
  defaultScheduleHintText = "",
  delayedScheduleLabel = "",
  formatManualScheduledAt,
  hasApplyHandler = false,
  hasDraftChanges = false,
  hasRefreshHandler = false,
  isDelayedScheduleExpired = false,
  isNextDay11amScheduleExpired = false,
  nextDay11amScheduleLabel = "",
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
      : notificationPlanMode === "nextDay11am"
        ? `${isNextDay11amScheduleExpired ? "다음날 11시 예약 시간 지남" : "다음날 11시 예약"} · ${nextDay11amScheduleLabel}`
        : notificationPlanMode === "manual"
          ? `수동 예약 · ${notificationPlanScheduledAt ? formatManualScheduledAt(notificationPlanScheduledAt) : "시각 미정"}`
          : defaultScheduleHintText;
  // 평소에는 "알림톡 예약"으로 조용히 있다가, Solapi 쪽과 어긋나 업데이트가 필요해지면
  // 이름이 "알림톡 예약 업데이트"로 바뀌고 danger 톤으로 눈에 띈다.
  const solapiApplyNeedsUpdate = syncStatus.state === "needs" && notificationPlanMode !== "none";
  const solapiApplyButtonLabel =
    reservationApplyState === "applying"
      ? "알림톡 반영 중"
      : notificationPlanMode === "none"
        ? "알림톡 취소 반영"
        : solapiApplyNeedsUpdate
          ? "알림톡 예약 업데이트"
          : "알림톡 예약";
  const solapiApplyButtonTone = solapiApplyNeedsUpdate ? "danger" : "default";
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
    solapiApplyButtonTone,
    solapiResultRefreshTitle
  };
}
