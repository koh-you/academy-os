export function createLessonJournalReminderPanelModel(reminderCount = 0) {
  return {
    countLabel: `${reminderCount}건`,
    isVisible: reminderCount > 0
  };
}
