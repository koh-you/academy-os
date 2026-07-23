export function createSupplementConfirmationSubmitHandlers({
  getConfirmedScheduleTask,
  handleApplyScheduleTask,
  handlePassTask,
  passConfirmTask
}) {
  function confirmPassTask() {
    if (!passConfirmTask) return;
    handlePassTask(passConfirmTask);
  }

  function confirmScheduleTask(updateStudentReminder, noticePatch = {}) {
    const confirmedTask = getConfirmedScheduleTask(updateStudentReminder, noticePatch);
    if (!confirmedTask) return;
    handleApplyScheduleTask(confirmedTask);
  }

  return { confirmPassTask, confirmScheduleTask };
}
