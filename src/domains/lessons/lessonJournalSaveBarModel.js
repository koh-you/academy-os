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
  const effectiveSaveState = shouldUseLiveReservationStatus ? reservationSaveState : saveState;
  const effectiveMessage = shouldUseLiveReservationStatus ? reservationSyncStatus.label : message;
  // 2026-09-19 · 하단바 상태 영역은 pill 을 숨기고 message 만 쓴다. 헤더 pill(6종 라벨)로는 전달되지 않는
  // 정보 — 저장 실패 사유·부분 저장된 원천 목록(failed), '저장 전 변경 N건' 카운터(dirty) — 만 보인다.
  // saving/saved 문구는 헤더 pill 이 이미 말하므로 여기 다시 쓰지 않는다(#338 중복 금지). 실시간 예약 상태
  // 라벨은 헤더의 Solapi pill 과 같은 문구라 제외하고, 라벨만 있는 "저장 실패" 나 기록 상태가 실패로 남은 채
  // 들어온 "변경 취소" 류 안내도 pill 과 겹치거나 사유가 없으므로 보이지 않는다.
  const describesFailure = effectiveMessage !== "저장 실패" && /저장 실패|부분 저장/.test(effectiveMessage);
  const describesPendingChanges = effectiveMessage.includes("저장 전 변경");
  const showMessage =
    !shouldUseLiveReservationStatus &&
    ((effectiveSaveState === "failed" && describesFailure) ||
      (effectiveSaveState === "dirty" && describesPendingChanges));

  return {
    buttonDisabled: isEditMode && (!hasDraftChanges || isSaving),
    buttonLabel: isEditMode ? (isSaving ? "저장 중" : "변경 저장") : "편집",
    cancelDisabled: isSaving,
    message: effectiveMessage,
    saveState: effectiveSaveState,
    shouldShow: true,
    showMessage
  };
}
