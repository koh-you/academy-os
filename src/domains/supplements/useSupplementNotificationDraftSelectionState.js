import { useState } from "react";

export function getActiveSupplementNotificationDraftField(
  activeFields = {},
  taskId,
  fallbackField
) {
  return activeFields[taskId] || fallbackField;
}

export function selectSupplementNotificationDraftField(activeFields = {}, taskId, field) {
  return {
    ...activeFields,
    [taskId]: field
  };
}

export function useSupplementNotificationDraftSelectionState() {
  const [activeNotificationDraftFields, setActiveNotificationDraftFields] = useState({});

  function getActiveNotificationDraftField(taskId, fallbackField) {
    return getActiveSupplementNotificationDraftField(
      activeNotificationDraftFields,
      taskId,
      fallbackField
    );
  }

  function selectNotificationDraftField(taskId, field) {
    setActiveNotificationDraftFields((current) =>
      selectSupplementNotificationDraftField(current, taskId, field)
    );
  }

  return {
    getActiveNotificationDraftField,
    selectNotificationDraftField
  };
}
