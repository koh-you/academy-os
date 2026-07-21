export function SupplementTaskActionBar({
  hasScheduleDraft,
  isContentBusy,
  isLocalDraftTask,
  isPassBusy,
  isScheduleBusy,
  isTaskBusy,
  linkedLessonId,
  onPass,
  onSave,
  onSchedule
}) {
  return (
    <div className="modalActions supplementSplitActions supplementTaskActions">
      <button className="softButton primarySoft" disabled={isTaskBusy} onClick={onSave} type="button">
        {isContentBusy ? "저장 중" : "보충 내용·알림톡 저장"}
      </button>
      <button className="softButton scheduleApplyButton" disabled={isTaskBusy || !hasScheduleDraft} onClick={onSchedule} type="button">
        {isScheduleBusy ? "일정 저장 중" : linkedLessonId ? "수업일지 일정 변경" : "수업일지 일정 만들기"}
      </button>
      {!isLocalDraftTask ? (
        <button className="passButton" disabled={isTaskBusy} onClick={onPass} title="보충 완료 처리" type="button">
          {isPassBusy ? "처리 중" : "보충 완료 처리"}
        </button>
      ) : null}
    </div>
  );
}
