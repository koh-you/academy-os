import React from "react";
import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";

export function LessonModalActions({
  closureMakeupEnabled,
  isEditing,
  isSaved,
  isSaving,
  lessonType,
  notificationEnabled,
  onClose,
  onDelete = null,
  onSave,
  saveMessage,
  saveState
}) {
  const saveButtonLabel = isSaving
    ? "저장 중..."
    : isSaved
      ? "✅ 저장 완료"
      : `✅ ${
          isEditing
            ? "수업 수정 저장"
            : lessonType === "closure" && closureMakeupEnabled
              ? "휴강 · 보충 수업일지 등록"
              : lessonType === "newStudentMakeup" && notificationEnabled
                ? "신입생 보강 등록 후 알림톡 예약"
                : "수업 등록"
        }`;

  return (
    <>
      <div className="lessonModalSaveStatus" aria-live="polite">
        <InlineSaveStatus label="수업일지" saveState={saveState} />
        <span>{saveMessage}</span>
      </div>

      <div className={`lessonModalActions${onDelete ? " hasDeleteAction" : ""}`}>
        {onDelete ? (
          <button
            className="dangerSoftButton lessonModalDeleteButton"
            disabled={isSaving}
            onClick={onDelete}
            type="button"
          >
            수업 취소
          </button>
        ) : null}
        <button
          className="softButton lessonModalCancelButton"
          disabled={isSaving}
          onClick={onClose}
          type="button"
        >
          {isSaved ? "달력에서 확인" : "취소"}
        </button>
        <button
          className="primaryButton full"
          disabled={isSaving || isSaved}
          onClick={onSave}
          type="button"
        >
          {saveButtonLabel}
        </button>
      </div>
    </>
  );
}
