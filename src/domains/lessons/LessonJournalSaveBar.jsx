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
  onCancelEdit,
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

  // 상태 pill 은 헤더 우상단이 그린다. 여기서는 failed/dirty 일 때의 메시지 텍스트와
  // 액션(알림톡 예약 · [편집 취소] · 편집/변경 저장 · ⋮)만 둔다.
  return (
    <StickySaveBar
      className="lessonJournalStickySaveBar"
      hideStatusPill
      label="수업일지"
      message={model.showMessage ? model.message : ""}
      saveState={model.saveState}
    >
      {reservationAction}
      {isEditMode ? (
        <button
          className="softButton"
          disabled={model.cancelDisabled}
          onClick={onCancelEdit}
          type="button"
        >
          편집 취소
        </button>
      ) : null}
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
