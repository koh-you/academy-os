export function selectGeneratedLessonPlanItemsByKey(
  planItems = [],
  generatedKey
) {
  return planItems.filter(
    (item) => item.generatedKey === generatedKey
  );
}
