export function selectGeneratedLessonsToSave(planItems = []) {
  return planItems
    .filter((item) => item.status === "create" || item.status === "update")
    .map((item) => item.lesson);
}
