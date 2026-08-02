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

export function createSupplementNotificationBulkCancelHandler({
  controls = [],
  notificationControlBusy,
  notificationControlTask,
  onCancelNotification,
  setNotificationControlBusy,
  setNotificationControlFeedback,
  setTaskSaveStatusPatch
}) {
  return async function handleNotificationBulkCancel() {
    const cancelableControls = controls.filter((control) => control.canCancel && control.job);
    if (!notificationControlTask || notificationControlBusy || !cancelableControls.length) return;

    setNotificationControlBusy(true);
    setNotificationControlFeedback({
      message: `취소 가능한 Solapi 예약 ${cancelableControls.length}건을 일괄 취소하고 있습니다.`,
      tone: "saving"
    });
    const statusPatch = {};
    const failures = [];
    try {
      for (const control of cancelableControls) {
        try {
          await onCancelNotification(control.job);
          statusPatch[control.config.statusField] = "canceled";
        } catch (error) {
          failures.push(`${control.config.label}: ${error?.message || "취소 실패"}`);
          statusPatch[control.config.statusField] = "failed";
        }
      }
      setTaskSaveStatusPatch(notificationControlTask.makeupTaskId, statusPatch);
      setNotificationControlFeedback(failures.length ? {
        message: `일부 예약을 취소하지 못했습니다. ${failures.join(" / ")}`,
        tone: "failed"
      } : {
        message: `Solapi 예약 ${cancelableControls.length}건을 모두 취소했습니다.`,
        tone: "success"
      });
      return { canceledCount: cancelableControls.length - failures.length, failedCount: failures.length };
    } finally {
      setNotificationControlBusy(false);
    }
  };
}
