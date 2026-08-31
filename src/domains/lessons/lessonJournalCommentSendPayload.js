export function createLessonJournalCommentSendPayload({
  draftComment = "",
  field,
  forceDryRun = false,
  forceTestRecipient = false,
  generatedPreviewText = "",
  record = {},
  sendTiming = "now"
} = {}) {
  return {
    options: {
      forceDryRun,
      forceTestRecipient,
      manualCommentBody: draftComment,
      manualPreviewBody: generatedPreviewText,
      sendTiming
    },
    record: {
      ...record,
      [field]: draftComment
    }
  };
}
