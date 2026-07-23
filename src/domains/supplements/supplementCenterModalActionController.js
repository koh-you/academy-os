export function createSupplementCenterModalActionHandlers({
  clearPendingCandidateTask,
  getSupplementActionKey,
  onCancelAbsenceSource,
  onPassTask,
  onSaveTask,
  onScheduleTask,
  setPendingCandidateTask,
  setSupplementRowAction
}) {
  async function handleSaveSupplementTaskFromModal(task) {
    setSupplementRowAction(task, "saving", "보충 내용 저장 중");
    try {
      const savedTask = await onSaveTask(task);
      const nextTask = savedTask ?? task;
      clearPendingCandidateTask(nextTask);
      setSupplementRowAction(nextTask, "saved", "보충 내용 저장 완료");
      return savedTask;
    } catch (error) {
      setSupplementRowAction(task, "failed", error?.message || "보충 내용 저장 실패");
      throw error;
    }
  }

  async function handleScheduleSupplementTaskFromModal(task) {
    setSupplementRowAction(task, "saving", "수업일지 일정 저장 중");
    try {
      const result = await onScheduleTask(task);
      const nextTask = result?.makeupTask ?? task;
      clearPendingCandidateTask(nextTask);
      setSupplementRowAction(nextTask, "saved", "수업일지 일정 저장 완료");
      return result;
    } catch (error) {
      setSupplementRowAction(task, "failed", error?.message || "수업일지 일정 저장 실패");
      throw error;
    }
  }

  async function handleCancelAbsenceSourceFromModal(task) {
    setSupplementRowAction(task, "saving", "결석 처리 취소 중");
    try {
      const savedRecord = await onCancelAbsenceSource?.(task);
      setPendingCandidateTask((current) =>
        current && getSupplementActionKey(current) === getSupplementActionKey(task) ? null : current
      );
      setSupplementRowAction(task, "saved", "결석 처리 취소 완료");
      return savedRecord;
    } catch (error) {
      setSupplementRowAction(task, "failed", error?.message || "결석 처리 취소 실패");
      throw error;
    }
  }

  async function handlePassSupplementTaskFromModal(task) {
    setSupplementRowAction(task, "saving", "보충 완료 처리 중");
    try {
      const savedTask = await onPassTask(task);
      const nextTask = savedTask ?? task;
      clearPendingCandidateTask(nextTask);
      setSupplementRowAction(nextTask, "saved", "보충 완료 처리 완료");
      return savedTask;
    } catch (error) {
      setSupplementRowAction(task, "failed", error?.message || "보충 완료 처리 실패");
      throw error;
    }
  }

  return {
    handleCancelAbsenceSourceFromModal,
    handlePassSupplementTaskFromModal,
    handleSaveSupplementTaskFromModal,
    handleScheduleSupplementTaskFromModal
  };
}
