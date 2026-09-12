import { StickySaveBar } from "../../shared/components/StickySaveBar.jsx";
import { createLessonJournalSaveBarModel } from "./lessonJournalSaveBarModel.js";
import "./lessonJournalSaveBar.css";

export function LessonJournalSaveBar({
  hasDraftChanges,
  isEditMode,
  lessonActions = null,
  manualSaveMessage,
  message,
  notificationActions = null,
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
      {lessonActions ? (
        <div aria-label="수업 작업" className="lessonJournalBarGroup" role="group">
          {lessonActions}
        </div>
      ) : null}
      {notificationActions ? (
        <div aria-label="알림톡 작업" className="lessonJournalBarGroup" role="group">
          {notificationActions}
        </div>
      ) : null}
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
