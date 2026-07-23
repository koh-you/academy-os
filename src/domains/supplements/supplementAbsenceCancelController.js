import { cancelSupplementAbsenceSourceAction } from "./supplementTaskActions.js";

export function createSupplementAbsenceCancelHandler({
  beginTaskAction,
  finishTaskAction,
  hasBusyTask,
  logError = (...args) => console.error(...args),
  onCancelAbsenceSource,
  onClose,
  showFeedback
}) {
  return async function handleCancelAbsenceSourceTask(task) {
    if (!task || hasBusyTask) return;
    beginTaskAction(task.makeupTaskId, "cancelAbsence");
    try {
      return await cancelSupplementAbsenceSourceAction({
        cancelSource: (payload) => onCancelAbsenceSource?.(payload),
        onClose: () => onClose?.(),
        onFeedback: ({ message, title, tone }) => showFeedback(title, message, tone),
        task
      });
    } catch (error) {
      logError("Failed to cancel absence source", error);
      return undefined;
    } finally {
      finishTaskAction();
    }
  };
}

export function createSupplementCancellationHandler({
  beginTaskAction,
  clearConfirmation,
  finishTaskAction,
  getCancellation,
  hasBusyTask,
  logError = (...args) => console.error(...args),
  onCancelAbsenceMakeup,
  onCancelAbsenceSource,
  onClose,
  showFeedback
}) {
  return async function handleConfirmSupplementCancellation() {
    const cancellation = getCancellation();
    const task = cancellation?.task;
    const mode = cancellation?.mode;
    if (!task || !mode || hasBusyTask) return undefined;

    const keepsSourceAbsence = mode === "cancelMakeupKeepAbsence";
    beginTaskAction(task.makeupTaskId, keepsSourceAbsence ? "cancelMakeup" : "cancelAbsence");

    try {
      if (keepsSourceAbsence) {
        showFeedback(
          "보강만 취소 중",
          "보강 항목·연결 수업일지·미발송 예약을 취소하고 원 결석기록 보존 여부를 확인합니다.",
          "saving"
        );
        const result = await onCancelAbsenceMakeup?.(task);
        clearConfirmation();
        showFeedback(
          "보강 취소 완료 · 결석기록 유지",
          `원 수업일지의 결석 상태와 사유는 그대로 유지했습니다. 미발송 알림톡 예약 ${result?.canceledNotificationJobCount ?? 0}건을 취소했습니다.`
        );
        onClose?.();
        return result;
      }

      return await cancelSupplementAbsenceSourceAction({
        cancelSource: (payload) => onCancelAbsenceSource?.(payload),
        onClose: () => {
          clearConfirmation();
          onClose?.();
        },
        onFeedback: ({ message, title, tone }) => showFeedback(title, message, tone),
        task
      });
    } catch (error) {
      logError("Failed to cancel supplement or absence source", error);
      if (keepsSourceAbsence) {
        showFeedback(
          "보강 취소 실패",
          error?.message || "보강을 취소하지 못했습니다. 원 결석기록과 예약 상태를 다시 확인해 주세요.",
          "failed"
        );
      }
      return undefined;
    } finally {
      finishTaskAction();
    }
  };
}
