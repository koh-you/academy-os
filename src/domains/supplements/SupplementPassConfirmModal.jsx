import { Modal } from "../../shared/components/Modal.jsx";

export function SupplementPassConfirmModal({ errorMessage = "", getTypeLabel, isBusy = false, onCancel, onConfirm, studentName, task }) {
  const targetLabel = task.taskType === "homework_makeup"
    ? task.supplementHomeworkNote || task.sourceLabel || task.reason || "보충 항목"
    : task.sourceLabel || task.reason || "보충 항목";
  return (
    <Modal
      className="supplementPassConfirmModal"
      title="보충 완료 처리 확인"
      subtitle="완료 처리하면 보충관리 후보에서 제외되고, 최근 보충내역에서 다시 복귀할 수 있습니다."
      onClose={onCancel}
    >
      <div className="supplementPassConfirmBody">
        <p>
          <strong>{studentName}</strong> 학생의 보충 항목을 완료 처리할까요?
        </p>
        <dl className="supplementPassConfirmSummary">
          <div>
            <dt>구분</dt>
            <dd>{getTypeLabel(task.taskType)}</dd>
          </div>
          <div>
            <dt>항목</dt>
            <dd>{targetLabel}</dd>
          </div>
          <div>
            <dt>일정</dt>
            <dd>{task.scheduledDate || "미확정"} {task.scheduledTime || ""}</dd>
          </div>
        </dl>
        {errorMessage ? <div className="supplementPassError">{errorMessage}</div> : null}
      </div>
      <div className="modalActions confirmActions">
        <button className="softButton" disabled={isBusy} onClick={onCancel} type="button">
          취소
        </button>
        <button className="passButton" disabled={isBusy} onClick={onConfirm} type="button">
          {isBusy ? "처리 중" : "보충 완료 처리"}
        </button>
      </div>
    </Modal>
  );
}
