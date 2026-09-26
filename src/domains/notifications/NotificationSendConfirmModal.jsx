import { AsyncOperationStatus } from "../../shared/components/AsyncOperationStatus.jsx";
import { KakaoAlimtalkPreview } from "../../shared/components/KakaoAlimtalkPreview.jsx";
import { Modal, ModalFooter } from "../../shared/components/Modal.jsx";

// 즉시/예약 발송 전 확인 단계. 확정 버튼은 기존 발송·예약 함수를 그대로 호출하고,
// 발송 중에는 닫기를 막아 초안과 진행 상태를 유지한다.
export function NotificationSendConfirmModal({
  dispatchMessage = "",
  isSending = false,
  mode = "immediate",
  noticeText = "",
  onClose,
  onConfirm,
  parentRecipientCount = 0,
  recipientCount = 0,
  scheduledAtLabel = "",
  studentRecipientCount = 0
}) {
  const isScheduled = mode === "scheduled";
  const title = isScheduled ? "예약 발송 확인" : "즉시 발송 확인";
  const confirmLabel = isScheduled ? `${recipientCount}건 예약` : `${recipientCount}건 지금 발송`;
  return (
    <Modal
      className="noticeSendConfirmModal"
      closeDisabled={isSending}
      onClose={onClose}
      scrollable
      subtitle={isScheduled
        ? "확정하면 아래 시각에 Solapi 알림톡 예약이 등록됩니다."
        : "확정하면 선택한 수신자에게 알림톡이 바로 발송됩니다."}
      title={title}
    >
      <div className="noticeSendConfirmSummary">
        <strong>수신 {recipientCount}건 · 학부모 {parentRecipientCount}명 · 학생 {studentRecipientCount}명</strong>
        {isScheduled ? <span>예약 시각 {scheduledAtLabel || "미지정"}</span> : null}
      </div>
      <div className="noticePreviewBox">
        <strong>발송 문구</strong>
        <KakaoAlimtalkPreview text={noticeText} />
      </div>
      {isSending && dispatchMessage ? (
        <AsyncOperationStatus
          description={dispatchMessage}
          label={isScheduled ? "공지 예약" : "공지 발송"}
          state="loading"
        />
      ) : null}
      <ModalFooter>
        <button className="softButton" disabled={isSending} onClick={onClose} type="button">취소</button>
        <button className="primaryButton" disabled={isSending} onClick={onConfirm} type="button">
          {isSending ? "처리 중..." : confirmLabel}
        </button>
      </ModalFooter>
    </Modal>
  );
}
