import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";
import { ModalFooter } from "../../shared/components/Modal.jsx";
import { getLessonModalRosterNotice } from "./lessonModalDraftModel.js";

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
  saveState,
  selectedStudentCount = 0
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
  // 2026-09-26 · 기본 선택이 전원에서 0명으로 바뀌었다. 명단이 비어 있다는 사실을 저장 경계 문구 옆에 알리되,
  // 1명 이상이 필요한 유형(신입생 보강·휴강 보충)에서는 "0명으로 저장됩니다" 가 아니라 저장이 막힌다고 말해야 한다.
  // 판정은 getLessonModalValidationError 와 같은 lessonModalRosterRequiredTypes 를 본다(문구가 갈라지지 않는다).
  const emptyRosterNotice = getLessonModalRosterNotice({
    lessonType,
    saveState,
    selectedStudentCount
  });

  // 2026-09-26 · 상태바와 액션을 공용 ModalFooter 하나로 묶어 모달 하단에 고정한다(본문만 스크롤).
  // 순서는 docs/ui-principles.md §3: [파괴적 왼쪽 끝] … [soft 취소] [primary 확정].
  return (
    <ModalFooter className="lessonModalFooter">
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

      <div className="lessonModalSaveStatus" aria-live="polite">
        {/* 2026-09-19 · 이 모달이 저장하는 건 수업 일정(lessons)이다. 수업일지(학생 기록)와 용어를 구분한다. */}
        <InlineSaveStatus label="수업 일정" saveState={saveState} />
        <span>{saveMessage}</span>
        {emptyRosterNotice ? <span className="lessonModalEmptyRosterNotice">{emptyRosterNotice}</span> : null}
      </div>

      <div className="lessonModalActions">
        <button
          className="softButton lessonModalCancelButton"
          disabled={isSaving}
          onClick={onClose}
          type="button"
        >
          {isSaved ? "달력에서 확인" : "취소"}
        </button>
        <button
          className="primaryButton lessonModalSaveButton"
          disabled={isSaving || isSaved}
          onClick={onSave}
          type="button"
        >
          {saveButtonLabel}
        </button>
      </div>
    </ModalFooter>
  );
}
