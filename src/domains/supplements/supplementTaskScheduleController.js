import {
  applySupplementScheduleAction,
  requestSupplementScheduleAction
} from "./supplementTaskActions.js";
import { createPersistableSupplementTask } from "./supplementTaskDraft.js";

export function createSupplementTaskScheduleHandlers({
  beginTaskAction,
  buildTaskWithDraft,
  closeScheduleConfirmation,
  finishTaskAction,
  getImmediateNoticeStatus,
  hasBusyTask,
  logError = (...args) => console.error(...args),
  markTaskDraftSaved,
  onScheduleTask,
  openScheduleConfirmation,
  setTaskSaveStatusPatch,
  showFeedback
}) {
  async function handleApplyScheduleTask(task) {
    if (!task?.makeupTaskId || hasBusyTask) return;
    const taskWithDraft = createPersistableSupplementTask(buildTaskWithDraft(task));
    if (!taskWithDraft.scheduledDate || !taskWithDraft.scheduledTime) {
      showFeedback("수업일지 일정 만들기 실패", "배정일과 시간을 먼저 입력해야 합니다.", "failed");
      setTaskSaveStatusPatch(task.makeupTaskId, { lesson: "failed" });
      return;
    }

    beginTaskAction(task.makeupTaskId, "schedule");
    try {
      return await applySupplementScheduleAction({
        getImmediateNoticeStatus,
        onFeedback: ({ message, title, tone }) => showFeedback(title, message, tone),
        onMarkSaved: (nextTask) => markTaskDraftSaved(task.makeupTaskId, nextTask),
        onResetConfirmation: closeScheduleConfirmation,
        onSaveStatus: (patch) => setTaskSaveStatusPatch(task.makeupTaskId, patch),
        scheduleTask: (payload) => onScheduleTask?.(payload),
        task,
        taskWithDraft
      });
    } catch (error) {
      logError("Failed to apply supplement schedule", error);
      return undefined;
    } finally {
      finishTaskAction();
    }
  }

  function requestApplyScheduleTask(task) {
    if (!task?.makeupTaskId || hasBusyTask) return;
    const taskWithDraft = createPersistableSupplementTask(buildTaskWithDraft(task));
    requestSupplementScheduleAction({
      onFeedback: ({ message, title, tone }) => showFeedback(title, message, tone),
      onOpenConfirmation: openScheduleConfirmation,
      onSaveStatus: (patch) => setTaskSaveStatusPatch(task.makeupTaskId, patch),
      onSchedule: handleApplyScheduleTask,
      task,
      taskWithDraft
    });
  }

  return { handleApplyScheduleTask, requestApplyScheduleTask };
}
