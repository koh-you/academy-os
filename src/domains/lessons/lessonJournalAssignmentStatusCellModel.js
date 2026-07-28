export function createLessonJournalAssignmentStatusCellModel({
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
    pendingHomeworkFollowupText: pendingHomeworkFollowup?.text ?? "",
    selectedHomeworkFollowupMethod,
    showHomeworkFollowupActions:
      journalEditMode &&
      Boolean(previousHomeworkTitle) &&
      homeworkFollowupOptions.length > 0
  };
}
