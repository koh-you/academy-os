import { AsyncOperationStatus } from "../../shared/components/AsyncOperationStatus.jsx";
import { KakaoAlimtalkPreview } from "../../shared/components/KakaoAlimtalkPreview.jsx";
import { NotificationSendConfirmModal } from "./NotificationSendConfirmModal.jsx";

export function NotificationComposerPanel({
  dispatchMessage,
  dispatchState = "idle",
  isPolishingNotice,
  isSendingNotice,
  noticeBody,
  noticeMessageTemplates,
  noticeRecipientCount,
  noticeSendConfirmMode = "",
  noticeTemplateId,
  noticeText,
  noticeTitle,
  onApplyTemplate,
  onBodyChange,
  onCloseSendConfirm,
  onOpenSendConfirm,
  onPolishNotice,
  onScheduleDateChange,
  onScheduleNotice,
  onScheduleTimeChange,
  onSendNoticeNow,
  onTitleChange,
  parentRecipientCount = 0,
  scheduleDate,
  scheduledAt,
  scheduledAtLabel = "",
  scheduleTime,
  studentRecipientCount = 0
}) {
  // 확정 버튼은 기존 발송·예약 함수를 그대로 호출하고, 그 처리가 끝난 뒤에만 확인 모달을 닫는다.
  function confirmSendNotice() {
    const run = noticeSendConfirmMode === "scheduled" ? onScheduleNotice : onSendNoticeNow;
    return Promise.resolve(run()).finally(() => onCloseSendConfirm());
  }

  return (
    <div className="noticeWritePanel">
      <label>
        템플릿
        <select value={noticeTemplateId} onChange={(event) => onApplyTemplate(event.target.value)}>
          <option value="">직접 작성</option>
          {noticeMessageTemplates.map((template) => (
            <option key={template.id} value={template.id}>{template.label}</option>
          ))}
        </select>
      </label>
      <label>
        제목
        <input value={noticeTitle} onChange={(event) => onTitleChange(event.target.value)} placeholder="예: 휴원 안내, 보강 안내" />
      </label>
      <label>
        본문
        <textarea value={noticeBody} onChange={(event) => onBodyChange(event.target.value)} rows="10" placeholder="보낼 공지 내용을 입력하세요." />
      </label>
      <div className="noticeScheduleGrid">
        <label>
          예약일
          <input type="date" value={scheduleDate} onChange={(event) => onScheduleDateChange(event.target.value)} />
        </label>
        <label>
          예약시간
          <input type="time" value={scheduleTime} onChange={(event) => onScheduleTimeChange(event.target.value)} />
        </label>
      </div>
      <div className="noticePreviewBox">
        <strong>미리보기</strong>
        <KakaoAlimtalkPreview text={noticeText || "제목과 본문을 입력하면 이곳에 발송 문구가 표시됩니다."} />
      </div>
      <div className="noticeSendFooter">
        {dispatchMessage ? (
          <AsyncOperationStatus
            className="noticeDispatchMessage"
            description={dispatchMessage}
            label="공지 발송"
            state={dispatchState}
          />
        ) : null}
        <div className="noticeSendActions">
          <button className="softButton" disabled={!noticeBody.trim() || isPolishingNotice} onClick={onPolishNotice} type="button">
            {isPolishingNotice ? "AI 수정 중" : "AI 수정"}
          </button>
          <button
            className="softButton"
            disabled={!noticeText || !noticeRecipientCount || !scheduledAt || isSendingNotice}
            onClick={() => onOpenSendConfirm("scheduled")}
            type="button"
          >
            예약 발송
          </button>
          <button
            className="primaryButton"
            disabled={!noticeText || !noticeRecipientCount || isSendingNotice}
            onClick={() => onOpenSendConfirm("immediate")}
            type="button"
          >
            {isSendingNotice ? "처리 중..." : "즉시 발송"}
          </button>
        </div>
      </div>
      {noticeSendConfirmMode ? (
        <NotificationSendConfirmModal
          dispatchMessage={dispatchMessage}
          isSending={isSendingNotice}
          mode={noticeSendConfirmMode}
          noticeText={noticeText}
          onClose={onCloseSendConfirm}
          onConfirm={confirmSendNotice}
          parentRecipientCount={parentRecipientCount}
          recipientCount={noticeRecipientCount}
          scheduledAtLabel={scheduledAtLabel}
          studentRecipientCount={studentRecipientCount}
        />
      ) : null}
    </div>
  );
}
