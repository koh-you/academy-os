import { useState } from "react";

export function createConfirmedSupplementScheduleTask(task, updateStudentReminder, noticePatch = {}) {
  if (!task) return null;
  return {
    ...task,
    ...noticePatch,
    skipStudentReminder: !updateStudentReminder
  };
}

export function useSupplementConfirmationState() {
  const [passConfirmTask, setPassConfirmTask] = useState(null);
  const [scheduleConfirmTask, setScheduleConfirmTask] = useState(null);

  function openPassConfirmation(task) {
    setPassConfirmTask(task);
  }

  function closePassConfirmation() {
    setPassConfirmTask(null);
  }

  function openScheduleConfirmation(task) {
    setScheduleConfirmTask(task);
  }

  function closeScheduleConfirmation() {
    setScheduleConfirmTask(null);
  }

  function getConfirmedScheduleTask(updateStudentReminder, noticePatch = {}) {
    return createConfirmedSupplementScheduleTask(
      scheduleConfirmTask,
      updateStudentReminder,
      noticePatch
    );
  }

  return {
    closePassConfirmation,
    closeScheduleConfirmation,
    getConfirmedScheduleTask,
    openPassConfirmation,
    openScheduleConfirmation,
    passConfirmTask,
    scheduleConfirmTask
  };
}
