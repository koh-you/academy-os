import { OverflowMenu } from "../../shared/components/OverflowMenu.jsx";
import { StickySaveBar } from "../../shared/components/StickySaveBar.jsx";
import { createLessonJournalSaveBarModel } from "./lessonJournalSaveBarModel.js";
import "./lessonJournalSaveBar.css";

export function LessonJournalSaveBar({
  hasDraftChanges,
  isEditMode,
  manualSaveMessage,
  menuItems = [],
  message,
  onEdit,
  onSave,
  reservationAction = null,
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

  // 상태 배지는 헤더 우상단이 그린다. 여기서는 액션(알림톡 예약 · 편집/변경 저장 · ⋮)만 둔다.
  return (
    <StickySaveBar
      className="lessonJournalStickySaveBar"
      label="수업일지"
      message={model.message}
      saveState={model.saveState}
    >
      {reservationAction}
      <button
        className="primaryButton"
        disabled={model.buttonDisabled}
        onClick={isEditMode ? onSave : onEdit}
        type="button"
      >
        {model.buttonLabel}
      </button>
      <OverflowMenu icon="⋮" items={menuItems} label="수업일지 추가 작업" placement="top" />
    </StickySaveBar>
  );
}
