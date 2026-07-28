export function selectGeneratedLessonPlanRows(
  rows = [],
  currentExamCycle = ""
) {
  return rows.filter(
    (row) =>
      (row.examCycle || currentExamCycle) === currentExamCycle
  );
}
