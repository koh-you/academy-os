export function createLessonJournalSaveBarModel({
  hasDraftChanges = false,
  isEditMode = false,
  manualSaveMessage = "",
  message = "",
  reservationSyncStatus = null,
  saveState = "idle"
}) {
  const isSaving = saveState === "saving";
  const hasCompletedSolapiMessage = /^Solapi (?:예약|취소) 반영 완료$/.test(manualSaveMessage);
  const shouldUseLiveReservationStatus = Boolean(
    hasCompletedSolapiMessage &&
    reservationSyncStatus?.state &&
    reservationSyncStatus.state !== "synced"
  );
  const reservationSaveState = reservationSyncStatus?.state === "failed"
    ? "failed"
    : reservationSyncStatus?.state === "applying"
      ? "saving"
      : "dirty";

  return {
    buttonDisabled: isEditMode && (!hasDraftChanges || isSaving),
    buttonLabel: isEditMode ? (isSaving ? "저장 중" : "변경 저장") : "편집",
    message: shouldUseLiveReservationStatus ? reservationSyncStatus.label : message,
    saveState: shouldUseLiveReservationStatus ? reservationSaveState : saveState,
    shouldShow: true
  };
}
