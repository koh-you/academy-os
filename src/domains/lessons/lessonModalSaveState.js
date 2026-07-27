export const lessonModalInitialSaveMessage =
  "수정 내용은 저장 버튼을 눌러야 Supabase에 반영됩니다.";

export function getLessonModalSaveStateAfterDraftChange(currentState) {
  return currentState === "failed" ? "dirty" : currentState;
}

export function getLessonModalSaveMessageAfterDraftChange({
  currentMessage,
  saveState
}) {
  return saveState === "failed"
    ? "입력 내용을 수정했습니다. 저장 버튼을 다시 눌러 주세요."
    : currentMessage;
}

export function createLessonModalValidationFailureSaveState(message) {
  return {
    message,
    state: "failed"
  };
}

export function createLessonModalSavingSaveState({
  closureMakeupEnabled,
  lessonType
}) {
  return {
    message:
      lessonType === "closure" && closureMakeupEnabled
        ? "휴강과 연결 보충 수업일지 저장 중"
        : "수업일지 저장 중",
    state: "saving"
  };
}

export function createLessonModalSavedSaveState(result) {
  return {
    message: result?.message || "수업일지 저장 완료",
    state: "saved"
  };
}

export function createLessonModalFailedSaveState(error) {
  return {
    message: `저장 실패 · ${error?.message || "입력 내용은 그대로 유지됩니다."}`,
    state: "failed"
  };
}
