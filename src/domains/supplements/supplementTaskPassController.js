import { passSupplementTaskAction } from "./supplementTaskActions.js";
import { createPersistableSupplementTask } from "./supplementTaskDraft.js";

export function createSupplementTaskPassHandler({
  beginTaskAction,
  buildTaskWithDraft,
  closePassConfirmation,
  finishTaskAction,
  hasBusyTask,
  logError = (...args) => console.error(...args),
  onClose,
  onPassTask,
  showFeedback,
  studentName
}) {
  return async function handlePassTask(task) {
    if (!task?.makeupTaskId || hasBusyTask) return;
    if (task.isLocalDraftTask) {
      showFeedback(
        "보충 완료 처리 전 저장 필요",
        "보충 생성 화면에서는 먼저 보충 내용 저장을 눌러 보충 항목을 생성해야 합니다.",
        "failed"
      );
      return;
    }
    if (task.status === "done") {
      showFeedback("이미 보충 완료 처리됨", "이미 완료된 보충 항목입니다. 목록에서 새로고침 후에도 제외됩니다.");
      return;
    }
    const taskWithDraft = createPersistableSupplementTask(buildTaskWithDraft(task));
    beginTaskAction(task.makeupTaskId, "pass");
    try {
      return await passSupplementTaskAction({
        onClose: () => onClose?.(),
        onFeedback: ({ message, title, tone }) => showFeedback(title, message, tone),
        onResetConfirmation: closePassConfirmation,
        passTask: (payload) => onPassTask?.(payload),
        studentName,
        taskWithDraft
      });
    } catch (error) {
      logError("Failed to pass supplement task", error);
      return undefined;
    } finally {
      finishTaskAction();
    }
  };
}
