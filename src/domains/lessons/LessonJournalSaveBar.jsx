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
  saveState,
  statusPills = null
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

  // 저장 메시지가 Solapi 상태 pill 과 같은 문구면(라이브 예약 상태를 대신 보여주는 경우) 한 줄에 두 번 쓰지 않는다.
  const stickyMessage = model.message === reservationSyncStatus?.label ? "" : model.message;

  // 왼쪽: 수업일지 저장 상태 + 발송 상태 pill 들. 오른쪽: 알림톡 예약 · 편집/변경 저장 · ⋮.
  return (
    <StickySaveBar
      className="lessonJournalStickySaveBar"
      label="수업일지"
      message={stickyMessage}
      saveState={model.saveState}
      statusExtras={statusPills}
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
