import { StickySaveBar } from "../../shared/components/StickySaveBar.jsx";
import { createLessonJournalSaveBarModel } from "./lessonJournalSaveBarModel.js";

export function LessonJournalSaveBar({
  hasDraftChanges,
  isEditMode,
  manualSaveMessage,
  message,
  onSave,
  reservationSyncStatus,
  saveState
}) {
  const model = createLessonJournalSaveBarModel({
    hasDraftChanges,
    isEditMode,
    manualSaveMessage,
    message,
    reservationSyncStatus,
    saveState
  });

  if (!model.shouldShow) return null;

  return (
    <StickySaveBar
      className="lessonJournalStickySaveBar"
      label="수업일지"
      message={model.message}
      saveState={model.saveState}
    >
      <button
        className="primaryButton"
        disabled={model.buttonDisabled}
        onClick={onSave}
        type="button"
      >
        {model.buttonLabel}
      </button>
    </StickySaveBar>
  );
}
