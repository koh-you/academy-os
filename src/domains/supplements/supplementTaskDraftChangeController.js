import { createSupplementDraftSaveStatusPatch } from "./supplementTaskDraft.js";

export function createSupplementTaskDraftChangeHandler({
  getTaskSaveStatus,
  setTaskSaveStatusPatch,
  updateTaskDraftValues
}) {
  return function updateTaskDraft(task, field, value) {
    if (!task?.makeupTaskId) return;
    updateTaskDraftValues(task, field, value);
    setTaskSaveStatusPatch(
      task.makeupTaskId,
      createSupplementDraftSaveStatusPatch(field, getTaskSaveStatus(task.makeupTaskId))
    );
  };
}
