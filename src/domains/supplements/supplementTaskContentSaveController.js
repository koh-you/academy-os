import { saveSupplementTaskContentAction } from "./supplementTaskActions.js";
import { createPersistableSupplementTask } from "./supplementTaskDraft.js";

export function createSupplementTaskContentSaveHandler({
  beginTaskAction,
  buildTaskWithDraft,
  finishTaskAction,
  getTaskSaveStatus,
  hasBusyTask,
  logError = (...args) => console.error(...args),
  markTaskDraftSaved,
  onSaveTask,
  setTaskSaveStatusPatch,
  showFeedback
}) {
  return async function handleSaveTask(task) {
    if (!task?.makeupTaskId || hasBusyTask) return;
    const taskWithDraft = createPersistableSupplementTask(buildTaskWithDraft(task));
    beginTaskAction(task.makeupTaskId, "content");
    try {
      return await saveSupplementTaskContentAction({
        currentLessonStatus: getTaskSaveStatus(task.makeupTaskId).lesson,
        onFeedback: ({ message, title, tone }) => showFeedback(title, message, tone),
        onMarkSaved: (nextTask) => markTaskDraftSaved(task.makeupTaskId, nextTask),
        onSaveStatus: (patch) => setTaskSaveStatusPatch(task.makeupTaskId, patch),
        saveTask: (payload) => onSaveTask?.(payload),
        task,
        taskWithDraft
      });
    } catch (error) {
      logError("Failed to save supplement task", error);
      return undefined;
    } finally {
      finishTaskAction();
    }
  };
}
