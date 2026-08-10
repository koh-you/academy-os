export function selectGeneratedLessonPlanRows(
  rows = [],
  currentExamCycle = ""
) {
  return rows.filter(
    (row) =>
      !row.isExcluded &&
      (row.examCycle || currentExamCycle) === currentExamCycle
  );
}
