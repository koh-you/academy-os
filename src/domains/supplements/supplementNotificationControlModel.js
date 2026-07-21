import {
  getSupplementNotificationDraftFieldForControl,
  isSupplementTeacherEditedField
} from "./supplementTaskDraft.js";

export const supplementNotificationControlConfigs = {
  studentSchedule: { label: "학생 알림톡", targetLabel: "학생", statusField: "studentChangeNotice" },
  parentSchedule: { label: "학부모 알림톡", targetLabel: "학부모", statusField: "parentChangeNotice" },
  studentReminder: { label: "당일 학생 11시 알림톡", targetLabel: "학생", statusField: "studentReminder" }
};

export function createSupplementNotificationControlViewModel({
  controlType = "",
  currentPreview = "",
  hasUnsavedChanges = false,
  job = null,
  student = null,
  task = null
} = {}, dependencies = {}) {
  const { canCancelJob, normalizeMessage } = dependencies;
  const config = supplementNotificationControlConfigs[controlType] ?? null;
  const draftField = getSupplementNotificationDraftFieldForControl(controlType);
  const hasEmptyFinalDraft = Boolean(
    task &&
    isSupplementTeacherEditedField(task, draftField) &&
    !String(task[draftField] ?? "").trim()
  );
  const blockReason = !task?.linkedLessonId
    ? "수업일지 일정을 먼저 만들어야 알림톡을 예약할 수 있습니다."
    : hasUnsavedChanges
      ? "수정 중인 보충 내용·일정을 먼저 저장해야 현재 원본으로 알림톡을 예약할 수 있습니다."
      : hasEmptyFinalDraft
        ? "선생님 최종 알림톡 문구가 비어 있습니다. 문구를 입력하고 저장한 뒤 예약해 주세요."
        : !task.scheduledDate || !task.scheduledTime
          ? "저장된 보충 날짜와 시간이 없습니다."
          : "";
  const hasHistoricalJob = Boolean(job && ["canceled", "failed"].includes(job.status));
  const preview = task && controlType
    ? hasHistoricalJob
      ? currentPreview
      : job?.previewBody || currentPreview
    : "";
  const previewLabel = job?.status === "sent"
    ? "발송된 문구"
    : hasHistoricalJob
      ? "다시 예약할 현재 문구"
      : job
        ? "현재 예약 문구"
        : "예약할 현재 문구";
  const canCancel = Boolean(job && canCancelJob(job));

  return {
    blockReason,
    canCancel,
    canReserve: Boolean(task && !blockReason && (!job || ["canceled", "failed"].includes(job.status))),
    config,
    hasHistoricalJob,
    preview,
    previewLabel,
    recipient: task && controlType
      ? controlType === "parentSchedule" ? student?.parentPhone ?? "" : student?.studentPhone ?? ""
      : "",
    savedDraftDiffers: Boolean(
      canCancel &&
      normalizeMessage(job?.previewBody || "").trim() !== normalizeMessage(currentPreview || "").trim()
    )
  };
}
