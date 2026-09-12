export function createLessonJournalNotificationBarModel({
  canApplySolapiReservation = false,
  checkoutMissingStudents = [],
  hasSolapiResultRefreshTarget = false,
  reservationApplyState = "idle",
  solapiResultRefreshState = "idle"
}) {
  return {
    checkoutMissingCount: checkoutMissingStudents.length,
    checkoutMissingTitle: checkoutMissingStudents.map((student) => student.name).join(", "),
    refreshButtonLabel: solapiResultRefreshState === "loading" ? "확인 중" : "발송 결과",
    showApplyAction: canApplySolapiReservation || reservationApplyState === "applying",
    showRefreshAction: hasSolapiResultRefreshTarget
  };
}
