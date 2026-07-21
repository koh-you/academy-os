export function SupplementNotificationControlModal({
  blockReason,
  canCancel,
  canReserve,
  config,
  display,
  feedback,
  hasHistoricalJob,
  isBusy,
  jobStatusLabel,
  onCancel,
  onClose,
  onReserve,
  preview,
  previewLabel,
  recipientLabel,
  savedDraftDiffers,
  scheduleLabel,
  scheduledAtLabel,
  studentName
}) {
  return (
    <div className="supplementNotificationControlBackdrop" role="presentation">
      <section
        aria-labelledby="supplement-notification-control-title"
        aria-modal="true"
        className="supplementNotificationControlModal"
        role="dialog"
      >
        <div className="supplementNotificationControlHeader">
          <div>
            <span className={`supplementNotificationControlState ${display.tone}`}>
              <i aria-hidden="true" />
              {display.label}
            </span>
            <h3 id="supplement-notification-control-title">{config.label}</h3>
            <p>{studentName} · {scheduleLabel}</p>
          </div>
          <button className="iconButton" disabled={isBusy} onClick={onClose} type="button">×</button>
        </div>
        <div className="supplementNotificationControlFacts">
          <span>수신 대상</span>
          <strong>{config.targetLabel} · {recipientLabel}</strong>
          <span>{hasHistoricalJob ? "이전 예약 시각" : "예약 시각"}</span>
          <strong>{scheduledAtLabel}</strong>
          <span>Solapi 상태</span>
          <strong>{jobStatusLabel}</strong>
        </div>
        <div className="supplementNotificationControlPreview">
          <strong>{previewLabel}</strong>
          {hasHistoricalJob ? (
            <small>취소·실패한 과거 문구는 재사용하지 않고, 현재 저장된 보충 내용으로 다시 만들었습니다.</small>
          ) : null}
          <pre>{preview || "저장된 알림톡 문구가 없습니다."}</pre>
          {savedDraftDiffers ? (
            <small className="savedDraftDiffers">저장한 수정본이 현재 Solapi 예약 문구와 다릅니다. 기존 예약을 취소한 뒤 다시 예약해야 수정본이 반영됩니다.</small>
          ) : null}
        </div>
        {blockReason && !canCancel ? (
          <p className="supplementNotificationControlBlock">{blockReason}</p>
        ) : null}
        {feedback ? (
          <p className={`supplementNotificationControlFeedback ${feedback.tone}`}>
            {feedback.message}
          </p>
        ) : null}
        <div className="modalActions supplementNotificationControlActions">
          <button className="softButton" disabled={isBusy} onClick={onClose} type="button">닫기</button>
          {canCancel ? (
            <button className="dangerSoftButton" disabled={isBusy} onClick={onCancel} type="button">
              {isBusy ? "취소 중" : "Solapi 예약 취소"}
            </button>
          ) : null}
          {canReserve ? (
            <button className="primaryButton" disabled={isBusy} onClick={onReserve} type="button">
              {isBusy ? "예약 중" : "Solapi 예약"}
            </button>
          ) : null}
        </div>
      </section>
    </div>
  );
}
