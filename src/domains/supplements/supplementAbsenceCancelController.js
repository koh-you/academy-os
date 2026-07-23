import { cancelSupplementAbsenceSourceAction } from "./supplementTaskActions.js";

export function createSupplementAbsenceCancelHandler({
  beginTaskAction,
  finishTaskAction,
  hasBusyTask,
  logError = (...args) => console.error(...args),
  onCancelAbsenceSource,
  onClose,
  showFeedback
}) {
  return async function handleCancelAbsenceSourceTask(task) {
    if (!task || hasBusyTask) return;
    beginTaskAction(task.makeupTaskId, "cancelAbsence");
    try {
      return await cancelSupplementAbsenceSourceAction({
        cancelSource: (payload) => onCancelAbsenceSource?.(payload),
        onClose: () => onClose?.(),
        onFeedback: ({ message, title, tone }) => showFeedback(title, message, tone),
        task
      });
    } catch (error) {
      logError("Failed to cancel absence source", error);
      return undefined;
    } finally {
      finishTaskAction();
    }
  };
}
