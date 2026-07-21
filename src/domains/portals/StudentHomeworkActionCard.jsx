import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";

export function StudentHomeworkActionCard({
  completed = false,
  homework,
  onComplete,
  saveState = { message: "", state: "idle" },
  statusLabel = "검사 전",
  statusTone = "pending",
  writeEnabled = false
}) {
  const normalizedSaveState = typeof saveState === "string"
    ? saveState
    : saveState?.state ?? "idle";
  const saveMessage = typeof saveState === "object" ? saveState?.message ?? "" : "";
  const isSaving = normalizedSaveState === "saving";

  return (
    <article className="homeworkActionCard">
      <div>
        <strong>{homework.title}</strong>
        <p>{homework.assignedDate} → {homework.dueDate}</p>
        <small>{completed ? "완료 처리됨" : "완료 전"}</small>
        <span className={`homeworkStatusBadge ${statusTone}`}>{statusLabel}</span>
      </div>
      <div className="studentHomeworkActionControls">
        <button
          className={completed ? "softButton" : "primaryButton"}
          disabled={completed || isSaving || !writeEnabled}
          onClick={() => onComplete?.(homework.homeworkId)}
          type="button"
        >
          {isSaving ? "저장 중..." : completed ? "완료 체크됨" : "완료 체크"}
        </button>
        {!writeEnabled ? (
          <small className="studentHomeworkPreviewNotice">강사 미리보기에서는 변경되지 않습니다.</small>
        ) : normalizedSaveState !== "idle" ? (
          <div className={`studentHomeworkSaveFeedback ${normalizedSaveState}`} aria-live="polite" role="status">
            <InlineSaveStatus label="숙제 완료" saveState={normalizedSaveState} />
            {saveMessage ? <span>{saveMessage}</span> : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
