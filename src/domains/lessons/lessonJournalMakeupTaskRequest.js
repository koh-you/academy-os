export function createLessonJournalMakeupTaskRequests({
  currentTasks = [],
  idSeed,
  taskDrafts = [],
  timestamps = [],
  today = ""
} = {}) {
  return taskDrafts.map((task, index) => {
    const existingTask = currentTasks.find((item) => (
      item.studentId === task.studentId &&
      item.sourceId === task.sourceId &&
      item.taskType === task.taskType
    ));
    return existingTask
      ? {
          ...existingTask,
          ...task,
          makeupTaskId: existingTask.makeupTaskId,
          status: existingTask.status === "done" ? "scheduled" : existingTask.status,
          touchedAt: timestamps[index]
        }
      : {
          makeupTaskId: `makeup_${idSeed}_${task.studentId}_${index}`,
          status: "draft",
          scheduledDate: today,
          scheduledTime: "",
          notificationDraft: "",
          attemptCount: 0,
          childHomeworkIds: [],
          createdAt: timestamps[index],
          ...task
        };
  });
}
