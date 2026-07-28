export function createLessonJournalSaveBarModel({
  hasDraftChanges = false,
  isEditMode = false,
  manualSaveMessage = "",
  saveState = "idle"
}) {
  const isSaving = saveState === "saving";

  return {
    buttonDisabled: !isEditMode || !hasDraftChanges || isSaving,
    buttonLabel: isSaving ? "저장 중" : "변경 저장",
    shouldShow: isEditMode || Boolean(manualSaveMessage)
  };
}
