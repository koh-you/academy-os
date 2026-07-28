import { StickySaveBar } from "../../shared/components/StickySaveBar.jsx";
import { createLessonJournalSaveBarModel } from "./lessonJournalSaveBarModel.js";

export function LessonJournalSaveBar({
  hasDraftChanges,
  isEditMode,
  manualSaveMessage,
  message,
  onSave,
  saveState
}) {
  const model = createLessonJournalSaveBarModel({
    hasDraftChanges,
    isEditMode,
    manualSaveMessage,
    saveState
  });

  if (!model.shouldShow) return null;

  return (
    <StickySaveBar
      className="lessonJournalStickySaveBar"
      label="수업일지"
      message={message}
      saveState={saveState}
    >
      <button
        className="saveDraftButton"
        disabled={model.buttonDisabled}
        onClick={onSave}
        type="button"
      >
        {model.buttonLabel}
      </button>
    </StickySaveBar>
  );
}
