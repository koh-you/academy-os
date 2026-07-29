export function selectChangedGeneratedLessonPlanRows(
  repairedRows = [],
  currentRows = []
) {
  return repairedRows.filter(
    (row, index) =>
      JSON.stringify(row) !== JSON.stringify(currentRows[index])
  );
}
