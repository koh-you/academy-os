export function createLessonJournalCommentSendPayload({
  draftComment = "",
  field,
  forceDryRun = false,
  forceTestRecipient = false,
  generatedPreviewText = "",
  isManualResendAvailable = false,
  record = {},
  sendDelayMinutes = 0,
  sendTiming = "scheduled"
} = {}) {
  return {
    options: {
      delayMinutes: sendDelayMinutes,
      forceDryRun,
      forceTestRecipient,
      manualCommentBody: draftComment,
      manualPreviewBody: generatedPreviewText,
      resendReason: isManualResendAvailable
        ? "예약 시간 경과 후 수동 재발송"
        : "",
      sendTiming
    },
    record: {
      ...record,
      [field]: draftComment
    }
  };
}
