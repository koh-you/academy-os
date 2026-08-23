import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { Modal } from "../../shared/components/Modal.jsx";
import { SectionHeader } from "../../shared/components/SectionHeader.jsx";

export function LessonJournalPreparationMemoView({
  checkedMemoAtLabel = "",
  draftMemo,
  draftParentVisible,
  draftStudentVisible,
  homeworkFollowup,
  homeworkFollowupCheckError,
  homeworkFollowupCheckState,
  isClosingAfterSave,
  lesson,
  localSaveError,
  model,
  onCheckPriorMemo,
  onCheckHomeworkFollowup,
  onClose,
  onSave,
  onUpdateDraft,
  saveButtonLabel,
  saveState,
  student
}) {
  const {
    canCheckPriorMemo,
    checkedMemoAt,
    checkedMemoDate,
    hasCheckedPriorMemo,
    priorMemoEyebrow,
    priorMemoKind,
    priorMemoTitle,
    visiblePriorLessonLabel,
    visiblePriorMemo
  } = model;

  return (
    <Modal
      className="preparationMemoModal"
      title={`${student.name} 수업메모`}
      subtitle={`${lesson.date} · ${lesson.className}`}
      onClose={onClose}
    >
      <div className="prepMemoColumns">
        <section className={["prepMemoPrevious", priorMemoKind === "reference" ? "referenceOnly" : ""].filter(Boolean).join(" ")}>
          <SectionHeader
            actions={canCheckPriorMemo ? (
              <label className="prepMemoAcknowledgeLine">
                <input
                  checked={false}
                  disabled={saveState === "saving"}
                  onChange={(event) => {
                    if (event.target.checked) onCheckPriorMemo();
                  }}
                  type="checkbox"
                />
                확인 후 숨기기
              </label>
            ) : null}
            density="slim"
            eyebrow={priorMemoEyebrow}
            title={priorMemoTitle}
          />
          {hasCheckedPriorMemo && !visiblePriorMemo ? (
            <div className="prepMemoCheckedState">
              <strong>✓ 이전 수업메모 확인 완료</strong>
              <span>{checkedMemoDate ? `${checkedMemoDate}까지의 메모는 다시 표시하지 않습니다.` : "확인한 이전 메모는 다시 표시하지 않습니다."}</span>
              {checkedMemoAt ? <small>{checkedMemoAtLabel}</small> : null}
            </div>
          ) : null}
          {visiblePriorMemo ? (
            <>
              <span>{visiblePriorLessonLabel}</span>
              <pre>{visiblePriorMemo}</pre>
            </>
          ) : (
            !hasCheckedPriorMemo ? <EmptyState className="emptyState compact">이전 수업메모가 없습니다.</EmptyState> : null
          )}
        </section>
        <section className="prepMemoDraft">
          {homeworkFollowup?.text || homeworkFollowupCheckState === "saved" ? (
            <div className={`prepMemoHomeworkFollowup ${homeworkFollowupCheckState}`}>
              <strong>확인할 숙제</strong>
              {homeworkFollowup?.text ? <p>{homeworkFollowup.text}</p> : null}
              {homeworkFollowup?.text ? (
                <label className="prepMemoHomeworkFollowupCheck">
                  <input
                    checked={false}
                    disabled={homeworkFollowupCheckState === "saving"}
                    onChange={(event) => {
                      if (event.target.checked) onCheckHomeworkFollowup();
                    }}
                    type="checkbox"
                  />
                  {homeworkFollowupCheckState === "saving" ? "확인 저장 중" : "확인 완료"}
                </label>
              ) : (
                <span className="prepMemoHomeworkFollowupSaved">✓ 확인 완료 · 이후 수업일지에 다시 표시하지 않습니다.</span>
              )}
              {homeworkFollowupCheckError ? <span className="saveState save-failed">{homeworkFollowupCheckError}</span> : null}
            </div>
          ) : null}
          <label>
            강사용 메모
            <textarea
              value={draftMemo}
              onChange={(event) => onUpdateDraft("preparationMemo", event.target.value)}
              placeholder="다음 시간에 꼭 기억해야 할 내용, 질문, 자료, 보충 포인트를 적어주세요."
            />
          </label>
          <div className="prepMemoIncludeBox">
            <strong>알림톡 작성창에서 가져오기</strong>
            <label className="checkboxLine">
              <input
                checked={draftStudentVisible}
                onChange={(event) => onUpdateDraft("prepStudentVisible", event.target.checked)}
                type="checkbox"
              />
              학생 알림톡 작성창에 메모 가져오기
            </label>
            <label className="checkboxLine">
              <input
                checked={draftParentVisible}
                onChange={(event) => onUpdateDraft("prepParentVisible", event.target.checked)}
                type="checkbox"
              />
              학부모 알림톡 작성창에 메모 가져오기
            </label>
            <p className="muted">
              수업메모를 저장해도 저장된 학생·학부모 최종 문구와 기존 예약 본문은 바뀌지 않습니다. 체크한 대상의 알림톡 작성창을 열 때 이 메모를 local draft로 가져오며, `최종 문구 저장` 후 `Solapi 예약 업데이트`를 눌러야 실제 예약 본문이 변경됩니다.
            </p>
          </div>
          <div className="prepMemoSaveBar">
            <button
              className={`primaryButton journalSave-${saveState}`}
              disabled={saveState === "saving" || isClosingAfterSave}
              onClick={onSave}
              type="button"
            >
              {saveButtonLabel}
            </button>
            {localSaveError ? <span className="saveState save-failed">{localSaveError}</span> : null}
          </div>
        </section>
      </div>
    </Modal>
  );
}
