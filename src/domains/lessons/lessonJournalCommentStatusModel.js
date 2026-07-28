export function getLessonJournalDisplayCommentSendStatus({
  isSchedulePast,
  normalizeStatus,
  parseScheduleLabel,
  sendStatus = ""
}) {
  const normalizedStatus = normalizeStatus(sendStatus);
  if (!normalizedStatus.includes("예약 중")) return normalizedStatus;
  const scheduledDate = parseScheduleLabel(normalizedStatus);
  if (!scheduledDate || !isSchedulePast(scheduledDate)) return normalizedStatus;
  return `예약 시각 지남 · 확인 필요 · ${normalizedStatus.replace(/^예약 중\s*·\s*/, "")}`;
}

export function getLessonJournalCommentSendState({
  getDisplayStatus,
  sendStatus = ""
}) {
  const normalizedStatus = getDisplayStatus(sendStatus);
  if (!normalizedStatus) return "";
  if (normalizedStatus === "내용 없음") return "";
  if (
    normalizedStatus.includes("확인 필요") ||
    normalizedStatus.includes("시각 지남")
  ) {
    return "failed";
  }
  if (normalizedStatus.includes("실패")) return "failed";
  if (
    normalizedStatus.includes("발송 중") ||
    normalizedStatus.includes("예약 중")
  ) {
    return "pending";
  }
  if (
    normalizedStatus.includes("완료") ||
    normalizedStatus.includes("기록됨")
  ) {
    return "sent";
  }
  return "draft";
}

export function getLessonJournalCommentButtonState({
  comment = "",
  getSendState,
  normalizeText,
  sendStatus = ""
}) {
  const sendState = getSendState(sendStatus);
  if (sendState) return sendState;
  return normalizeText(comment) ? "draft" : "empty";
}

export function getLessonJournalCommentStatusLabel({
  comment = "",
  getDisplayStatus,
  getSendState,
  normalizeText,
  sendStatus = ""
}) {
  const displayStatus = getDisplayStatus(sendStatus);
  const sendState = getSendState(displayStatus);
  if (sendState === "failed") return displayStatus || "발송 실패";
  if (sendState === "pending") return displayStatus;
  if (sendState === "sent") return displayStatus;
  return normalizeText(comment) ? "작성됨 · 발송 전" : "미작성";
}
