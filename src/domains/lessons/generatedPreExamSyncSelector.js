export function selectGeneratedPreExamLessonsToSync(planItems = []) {
  return planItems.filter(
    (item) =>
      item.lesson?.lessonType === "preExam" &&
      (item.status === "create" || item.status === "update")
  );
}
