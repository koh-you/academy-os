import { applySupplementNotificationControlAction } from "./supplementTaskActions.js";

export function createSupplementNotificationControlActionHandler({
  notificationControl,
  notificationControlBusy,
  notificationControlConfig,
  notificationControlJob,
  notificationControlTask,
  onCancelNotification,
  onReserveNotification,
  setNotificationControlBusy,
  setNotificationControlFeedback,
  setTaskSaveStatusPatch
}) {
  return async function handleNotificationControlAction(action) {
    if (!notificationControlTask || !notificationControl || notificationControlBusy) return;
    setNotificationControlBusy(true);
    try {
      return await applySupplementNotificationControlAction({
        action,
        controlType: notificationControl.controlType,
        notificationJob: notificationControlJob,
        onCancelNotification: (job) => onCancelNotification?.(job),
        onFeedback: setNotificationControlFeedback,
        onReserveNotification: (task, controlType) => onReserveNotification?.(task, controlType),
        onSaveStatus: (patch) => setTaskSaveStatusPatch(notificationControlTask.makeupTaskId, patch),
        statusField: notificationControlConfig.statusField,
        task: notificationControlTask
      });
    } finally {
      setNotificationControlBusy(false);
    }
  };
}
