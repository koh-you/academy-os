import { useState } from "react";

export function createSupplementTaskActionKey(taskId = "", action = "") {
  return `${taskId}:${action}`;
}

export function isSupplementTaskActionBusy(busyTaskId = "", taskId = "", action = "") {
  return busyTaskId === createSupplementTaskActionKey(taskId, action);
}

export function isSupplementTaskBusy(busyTaskId = "", taskId = "") {
  return busyTaskId.startsWith(`${taskId}:`);
}

export function useSupplementTaskBusyState() {
  const [busyTaskId, setBusyTaskId] = useState("");

  function beginTaskAction(taskId, action) {
    setBusyTaskId(createSupplementTaskActionKey(taskId, action));
  }

  function finishTaskAction() {
    setBusyTaskId("");
  }

  function isTaskActionBusy(taskId, action) {
    return isSupplementTaskActionBusy(busyTaskId, taskId, action);
  }

  function isTaskBusy(taskId) {
    return isSupplementTaskBusy(busyTaskId, taskId);
  }

  return {
    beginTaskAction,
    finishTaskAction,
    hasBusyTask: Boolean(busyTaskId),
    isTaskActionBusy,
    isTaskBusy
  };
}
