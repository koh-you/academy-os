import { useEffect, useState } from "react";
import {
  buildSupplementTaskWithDraft,
  createSupplementTaskDraft,
  getSupplementTaskSourceVersion,
  syncSupplementTaskDraftEntries,
  updateSupplementTaskDraftEntry
} from "./supplementTaskDraft.js";

export function useSupplementTaskDraftController({ dependencies, notificationTemplates, student, tasks }) {
  const [taskDrafts, setTaskDrafts] = useState({});
  const taskDraftSyncKey = tasks.map((task) => `${task.makeupTaskId}:${getSupplementTaskSourceVersion(task)}`).join("||");

  useEffect(() => {
    setTaskDrafts((current) => syncSupplementTaskDraftEntries({
      current,
      notificationTemplates,
      student,
      tasks
    }, dependencies));
  }, [dependencies, notificationTemplates, student, taskDraftSyncKey, tasks]);

  function getTaskDraftState(task) {
    return taskDrafts[task.makeupTaskId] ?? {
      dirty: false,
      editedFields: [],
      sourceVersion: getSupplementTaskSourceVersion(task),
      values: createSupplementTaskDraft(task, student, notificationTemplates, dependencies)
    };
  }

  function updateTaskDraftValues(task, field, value) {
    if (!task?.makeupTaskId) return;
    setTaskDrafts((current) => ({
      ...current,
      [task.makeupTaskId]: updateSupplementTaskDraftEntry({
        existing: current[task.makeupTaskId],
        field,
        notificationTemplates,
        student,
        task,
        value
      }, dependencies)
    }));
  }

  function markTaskDraftSaved(taskId, savedTask) {
    const sourceVersion = getSupplementTaskSourceVersion(savedTask);
    setTaskDrafts((current) => ({
      ...current,
      [taskId]: {
        dirty: false,
        editedFields: [],
        sourceVersion,
        values: createSupplementTaskDraft(savedTask, student, notificationTemplates, dependencies)
      }
    }));
  }

  function buildTaskWithDraft(task) {
    return buildSupplementTaskWithDraft({
      notificationTemplates,
      student,
      task,
      taskDraftState: getTaskDraftState(task)
    }, dependencies);
  }

  return { buildTaskWithDraft, getTaskDraftState, markTaskDraftSaved, updateTaskDraftValues };
}
