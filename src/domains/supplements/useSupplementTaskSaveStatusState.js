import { useState } from "react";
import { mergeSupplementTaskSaveStatus } from "./supplementTaskDraft.js";

export function getSupplementTaskSaveStatus(taskSaveStatus = {}, taskId = "") {
  return taskSaveStatus[taskId] ?? {};
}

export function useSupplementTaskSaveStatusState() {
  const [taskSaveStatus, setTaskSaveStatus] = useState({});

  function getTaskSaveStatus(taskId) {
    return getSupplementTaskSaveStatus(taskSaveStatus, taskId);
  }

  function setTaskSaveStatusPatch(taskId, patch) {
    setTaskSaveStatus((current) => mergeSupplementTaskSaveStatus(current, taskId, patch));
  }

  return {
    getTaskSaveStatus,
    setTaskSaveStatusPatch
  };
}
