export function createLessonJournalNotificationCommentCellModel({
  commentState = "empty",
  isLessonNotificationOff = false,
  isNotificationMuted = false
}) {
  const normalizedCommentState = commentState || "empty";
  const isNotificationOff = isLessonNotificationOff || isNotificationMuted;

  return {
    muteButtonClassName: [
      "notificationMuteButton",
      isNotificationMuted ? "active" : "",
      isLessonNotificationOff && !isNotificationMuted ? "planOff" : ""
    ].filter(Boolean).join(" "),
    muteButtonLabel: isNotificationMuted ? "제외 해제" : "알림 제외",
    muteButtonTitle: isLessonNotificationOff ? "현재 수업 발송 계획이 알림톡 없음입니다." : "",
    openButtonClassName:
      `commentOpenButton comment-${normalizedCommentState}${isNotificationOff ? " notification-off" : ""}`,
    statusClassName: `commentStatusText comment-${normalizedCommentState}`
  };
}
