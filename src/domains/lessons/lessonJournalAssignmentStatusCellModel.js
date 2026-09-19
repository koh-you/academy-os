export function createLessonJournalAssignmentStatusCellModel({
  assignmentStatusOptions = [],
  assignmentStatusValue = "",
  homeworkFollowupOptions = [],
  journalEditMode = false,
  previousHomeworkTitle = "",
  selectedHomeworkFollowupMethod = ""
}) {
  // 읽기 모드 라벨. 값이 없으면 select 의 "선택" 대신 "선택 전"(학생 포털 이력과 같은 문구).
  const readLabel = assignmentStatusValue
    ? assignmentStatusOptions.find((option) => option.value === assignmentStatusValue)?.label ?? assignmentStatusValue
    : "선택 전";
  return {
    readLabel,
    selectedHomeworkFollowupMethod,
    showHomeworkFollowupActions:
      journalEditMode &&
      Boolean(previousHomeworkTitle) &&
      homeworkFollowupOptions.length > 0
  };
}
