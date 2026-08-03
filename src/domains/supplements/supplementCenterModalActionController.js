export function createSupplementCenterModalActionHandlers({
  clearPendingCandidateTask,
  getSupplementActionKey,
  onCancelAbsenceMakeup,
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
      setSupplementRowAction(
        nextTask,
        "saved",
        result?.notificationFailed ? "일정 저장 완료 · 알림 예약 실패" : "수업일지 일정 저장 완료"
      );
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

  async function handleCancelAbsenceMakeupFromModal(task) {
    setSupplementRowAction(task, "saving", "보강만 취소 중 · 결석기록 유지");
    try {
      const result = await onCancelAbsenceMakeup?.(task);
      const canceledTask = result?.makeupTask ?? task;
      setSupplementRowAction(canceledTask, "saved", "보강 취소 완료 · 원 결석기록 유지");
      return result;
    } catch (error) {
      setSupplementRowAction(
        task,
        "failed",
        error?.message || "보강 취소 실패 · 원 결석기록을 다시 확인해 주세요."
      );
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
    handleCancelAbsenceMakeupFromModal,
    handleCancelAbsenceSourceFromModal,
    handlePassSupplementTaskFromModal,
    handleSaveSupplementTaskFromModal,
    handleScheduleSupplementTaskFromModal
  };
}

export function createSupplementCenterPassConfirmationHandler({
  logError = (...args) => console.error(...args),
  onPassTask,
  passConfirmTask,
  setPassActionError,
  setPassBusyTaskId,
  setPassConfirmTask,
  setSupplementRowAction
}) {
  return async function confirmPassTask() {
    if (!passConfirmTask) return;
    setPassBusyTaskId(passConfirmTask.makeupTaskId || passConfirmTask.sourceId || "");
    setPassActionError("");
    setSupplementRowAction(passConfirmTask, "saving", "보충 완료 처리 중");
    try {
      await onPassTask(passConfirmTask);
      setSupplementRowAction(passConfirmTask, "saved", "보충 완료 처리 완료");
      setPassConfirmTask(null);
    } catch (error) {
      logError("Failed to pass supplement task", error);
      setSupplementRowAction(passConfirmTask, "failed", error?.message || "보충 완료 처리 실패");
      setPassActionError(error?.message || "보충 완료 처리에 실패했습니다.");
    } finally {
      setPassBusyTaskId("");
    }
  };
}
