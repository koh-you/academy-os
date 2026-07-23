export function NotificationComposerPanel({
  dispatchMessage,
  isPolishingNotice,
  isSendingNotice,
  noticeBody,
  noticeMessageTemplates,
  noticeRecipientCount,
  noticeTemplateId,
  noticeText,
  noticeTitle,
  onApplyTemplate,
  onBodyChange,
  onPolishNotice,
  onScheduleDateChange,
  onScheduleNotice,
  onScheduleTimeChange,
  onSendNoticeNow,
  onTitleChange,
  scheduleDate,
  scheduledAt,
  scheduleTime
}) {
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
        <p>{noticeText || "제목과 본문을 입력하면 이곳에 발송 문구가 표시됩니다."}</p>
      </div>
      <div className="noticeSendActions">
        <button className="softButton" disabled={!noticeBody.trim() || isPolishingNotice} onClick={onPolishNotice} type="button">
          {isPolishingNotice ? "AI 수정 중" : "AI 수정"}
        </button>
        <button
          className="softButton"
          disabled={!noticeText || !noticeRecipientCount || !scheduledAt || isSendingNotice}
          onClick={onScheduleNotice}
          type="button"
        >
          예약 발송
        </button>
        <button
          className="sendButton"
          disabled={!noticeText || !noticeRecipientCount || isSendingNotice}
          onClick={onSendNoticeNow}
          type="button"
        >
          {isSendingNotice ? "처리 중..." : "즉시 발송"}
        </button>
      </div>
      {dispatchMessage ? <p className="inlineNotice noticeDispatchMessage">{dispatchMessage}</p> : null}
    </div>
  );
}
