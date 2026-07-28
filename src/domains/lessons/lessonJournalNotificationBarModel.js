export function createLessonJournalNotificationBarModel({
  canApplySolapiReservation,
  checkoutMissingStudents = [],
  hasSolapiResultRefreshTarget,
  journalEditMode,
  reservationApplyState,
  solapiResultRefreshState
}) {
  return {
    checkoutMissingCount: checkoutMissingStudents.length,
    checkoutMissingTitle: checkoutMissingStudents.map((student) => student.name).join(", "),
    refreshButtonLabel: solapiResultRefreshState === "loading" ? "확인 중" : "발송 결과",
    showApplyAction: canApplySolapiReservation || reservationApplyState === "applying",
    showEditAction: !journalEditMode,
    showRefreshAction: hasSolapiResultRefreshTarget
  };
}
