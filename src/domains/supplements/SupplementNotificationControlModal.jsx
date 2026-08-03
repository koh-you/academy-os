import { Modal, ModalFooter } from "../../shared/components/Modal.jsx";

function SupplementNotificationControlCard({ control, isBusy, onReserve }) {
  return (
    <article className="supplementNotificationControlCard">
      <div className="supplementNotificationControlCardHeader">
        <div>
          <span className={`supplementNotificationControlState ${control.display.tone}`}>
            <i aria-hidden="true" />
            {control.display.label}
          </span>
          <h4>{control.config.label}</h4>
        </div>
        {control.canReserve ? (
          <button className="softButton" disabled={isBusy} onClick={() => onReserve(control.controlType)} type="button">
            개별 예약
          </button>
        ) : null}
      </div>
      <div className="supplementNotificationControlFacts">
        <span>수신 대상</span>
        <strong>{control.config.targetLabel} · {control.recipientLabel}</strong>
        <span>{control.hasHistoricalJob ? "이전 예약 시각" : "예약 시각"}</span>
        <strong>{control.scheduledAtLabel}</strong>
        <span>Academy OS</span>
        <strong>{control.jobStatusLabel}</strong>
        <span>Solapi 그룹</span>
        <strong>{control.providerReferenceLabel}</strong>
      </div>
      <div className="supplementNotificationControlPreview">
        <strong>{control.previewLabel}</strong>
        <pre>{control.preview || "저장된 알림톡 문구가 없습니다."}</pre>
        {control.savedDraftDiffers ? (
          <small className="savedDraftDiffers">저장한 최종본이 현재 예약 문구와 다릅니다. 기존 예약을 취소한 뒤 다시 예약해야 반영됩니다.</small>
        ) : null}
      </div>
      {control.blockReason ? (
        <p className="supplementNotificationControlBlock">{control.blockReason}</p>
      ) : null}
    </article>
  );
}

export function SupplementNotificationControlModal({
  controls,
  feedback,
  isBusy,
  onCancelAll,
  onClose,
  onReserve,
  scheduleLabel,
  studentName
}) {
  const cancelableCount = controls.filter((control) => control.canCancel).length;
  return (
    <Modal
      backdropClassName="supplementNotificationControlBackdrop"
      className="supplementNotificationControlModal wide"
      closeAriaLabel="알림 제어 닫기"
      closeDisabled={isBusy}
      onClose={onClose}
      subtitle={`${studentName} · ${scheduleLabel}`}
      title="Solapi 예약·취소 3종 확인"
    >
      <p className="supplementNotificationBulkGuide">
        학생·학부모·당일 학생 예약을 한 화면에서 확인합니다. 일괄 취소는 현재 취소 가능한 예약만 처리합니다.
      </p>
      <div className="supplementNotificationControlCards">
        {controls.map((control) => (
          <SupplementNotificationControlCard
            control={control}
            isBusy={isBusy}
            key={control.controlType}
            onReserve={onReserve}
          />
        ))}
      </div>
      {feedback ? (
        <p className={`supplementNotificationControlFeedback ${feedback.tone}`}>
          {feedback.message}
        </p>
      ) : null}
      <ModalFooter className="supplementNotificationControlActions" tone="danger">
        <button className="softButton" disabled={isBusy} onClick={onClose} type="button">닫기</button>
        {cancelableCount ? (
          <button className="dangerSoftButton" disabled={isBusy} onClick={onCancelAll} type="button">
            {isBusy ? "일괄 취소 중" : `취소 가능한 예약 ${cancelableCount}건 일괄 취소`}
          </button>
        ) : null}
      </ModalFooter>
    </Modal>
  );
}
