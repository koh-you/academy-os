import { Modal, ModalFooter } from "../../shared/components/Modal.jsx";

export function SupplementCancellationConfirmModal({
  isBusy = false,
  mode,
  onCancel,
  onConfirm,
  studentName,
  task
}) {
  const keepsSourceAbsence = mode === "cancelMakeupKeepAbsence";
  const closesUnsavedMakeupCandidate = keepsSourceAbsence && Boolean(task?.isLocalDraftTask);
  return (
    <Modal
      className="supplementPassConfirmModal supplementCancellationConfirmModal"
      title={keepsSourceAbsence ? "보강만 취소할까요?" : "결석 기록을 취소할까요?"}
      subtitle={keepsSourceAbsence
        ? closesUnsavedMakeupCandidate
          ? "보강 후보를 닫고 원 수업일지의 결석기록은 그대로 유지합니다."
          : "보강 일정은 취소하지만 원 수업일지의 결석기록은 그대로 유지합니다."
        : "원 수업일지의 결석 자체를 대기 상태로 되돌리는 별도 기능입니다."}
      onClose={onCancel}
    >
      <div className="supplementPassConfirmBody">
        <p>
          <strong>{studentName}</strong> 학생의 {keepsSourceAbsence ? "결석보강만" : "원 결석기록을"} 취소할까요?
        </p>
        <dl className="supplementPassConfirmSummary supplementCancellationSummary">
          <div>
            <dt>원 결석기록</dt>
            <dd className={keepsSourceAbsence ? "preserved" : "changed"}>
              {keepsSourceAbsence ? "결석 상태·사유 그대로 유지" : "결석 → 대기 상태로 변경"}
            </dd>
          </div>
          <div>
            <dt>보강 항목</dt>
            <dd>{keepsSourceAbsence
              ? closesUnsavedMakeupCandidate ? "취소 이력을 저장하고 후보 닫음" : "취소 내역으로 보존"
              : "미저장 초안 닫기"}</dd>
          </div>
          <div>
            <dt>보강 일정</dt>
            <dd>
              {closesUnsavedMakeupCandidate
                ? "아직 생성된 보강 수업일지 없음"
                : `${task.scheduledDate || "미확정"} ${task.scheduledTime || ""}`}
              {!closesUnsavedMakeupCandidate && keepsSourceAbsence && task.linkedLessonId ? " · 연결 수업일지 취소" : ""}
            </dd>
          </div>
          <div>
            <dt>알림톡</dt>
            <dd>
              {keepsSourceAbsence
                ? closesUnsavedMakeupCandidate
                  ? "새 예약·발송 없이 후보만 닫음"
                  : "미발송 학생·학부모·당일 예약 취소"
                : "발송·예약을 새로 만들지 않음"}
            </dd>
          </div>
        </dl>
        <div className={`supplementCancellationNotice ${keepsSourceAbsence ? "preserved" : "changed"}`}>
          <strong>{keepsSourceAbsence ? "결석기록 유지" : "결석기록 변경"}</strong>
          <span>
            {keepsSourceAbsence
              ? "완료 전 Supabase에서 원 결석 상태와 사유가 바뀌지 않았는지 다시 확인합니다."
              : "이 동작은 보강만 취소하는 기능이 아닙니다. 원 결석을 잘못 입력했을 때만 사용하세요."}
          </span>
        </div>
      </div>
      <ModalFooter className="confirmActions" tone="danger">
        <button className="softButton" disabled={isBusy} onClick={onCancel} type="button">
          돌아가기
        </button>
        <button className="dangerSoftButton" disabled={isBusy} onClick={onConfirm} type="button">
          {isBusy
            ? keepsSourceAbsence ? "보강 취소 중" : "결석 취소 중"
            : keepsSourceAbsence ? "보강만 취소" : "결석 기록 취소"}
        </button>
      </ModalFooter>
    </Modal>
  );
}
