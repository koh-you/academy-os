import { createLessonJournalMakeupTaskId } from "./lessonJournalMakeupTaskPersistence.js";

export function createLessonJournalMakeupTaskRequests({
  currentTasks = [],
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
          makeupTaskId: createLessonJournalMakeupTaskId(task),
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
