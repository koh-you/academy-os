import { useState } from "react";

export function createSupplementNotificationControlSelection(task = {}, controlType = "studentSchedule") {
  return { controlType, taskId: task.makeupTaskId };
}

export function useSupplementNotificationControlState() {
  const [notificationControl, setNotificationControl] = useState(null);
  const [notificationControlBusy, setNotificationControlBusy] = useState(false);
  const [notificationControlFeedback, setNotificationControlFeedback] = useState(null);

  function openNotificationControl(task, controlType) {
    setNotificationControl(createSupplementNotificationControlSelection(task, controlType));
    setNotificationControlFeedback(null);
  }

  function closeNotificationControl() {
    if (notificationControlBusy) return false;
    setNotificationControl(null);
    setNotificationControlFeedback(null);
    return true;
  }

  return {
    closeNotificationControl,
    notificationControl,
    notificationControlBusy,
    notificationControlFeedback,
    openNotificationControl,
    setNotificationControlBusy,
    setNotificationControlFeedback
  };
}
