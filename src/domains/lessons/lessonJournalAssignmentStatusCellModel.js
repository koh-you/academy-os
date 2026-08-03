export function createLessonJournalAssignmentStatusCellModel({
  homeworkFollowupConfirmationState = "idle",
  homeworkFollowupOptions = [],
  journalEditMode = false,
  previousHomeworkFollowup = null,
  previousHomeworkTitle = "",
  selectedHomeworkFollowupMethod = ""
}) {
  const pendingHomeworkFollowup = previousHomeworkFollowup?.method === "next_lesson"
    ? previousHomeworkFollowup
    : null;

  return {
    homeworkFollowupConfirmationDisabled: homeworkFollowupConfirmationState === "saving",
    homeworkFollowupConfirmationLabel:
      homeworkFollowupConfirmationState === "saving"
        ? "확인 저장 중"
        : homeworkFollowupConfirmationState === "failed"
          ? "다시 확인"
          : "확인 완료",
    pendingHomeworkFollowupText: pendingHomeworkFollowup?.text ?? "",
    selectedHomeworkFollowupMethod,
    showHomeworkFollowupActions:
      journalEditMode &&
      Boolean(previousHomeworkTitle) &&
      homeworkFollowupOptions.length > 0
  };
}
