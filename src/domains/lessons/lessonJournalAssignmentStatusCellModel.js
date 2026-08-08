export function createLessonJournalAssignmentStatusCellModel({
  homeworkFollowupOptions = [],
  journalEditMode = false,
  previousHomeworkTitle = "",
  selectedHomeworkFollowupMethod = ""
}) {
  return {
    selectedHomeworkFollowupMethod,
    showHomeworkFollowupActions:
      journalEditMode &&
      Boolean(previousHomeworkTitle) &&
      homeworkFollowupOptions.length > 0
  };
}
