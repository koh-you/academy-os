import { getSupplementStudentReminderScheduledAt, isSupplementStudentReminderTask } from "../notifications/supplementJobBuilders.js";
import { canCancelNotificationJob, getSupplementStudentReminderJob } from "../notifications/notificationJobSelectors.js";

const supplementSaveStatusLabels = {
  changed: "저장 필요",
  empty: "아직 없음",
  failed: "저장 실패",
  idle: "대기",
  noScheduleChange: "변경 없음",
  notApplied: "반영 안 함",
  ready: "일정 만들 수 있음",
  reserveReady: "예약 예정",
  resultDue: "발송 결과 확인 필요",
  saved: "저장 완료",
  scheduled: "예약 완료",
  scheduleInputNeeded: "시간 필요",
  saving: "저장 중",
  canceled: "취소됨",
  synced: "반영 완료"
};

export function getSupplementSaveStatusLabel(status) {
  return supplementSaveStatusLabels[status] || supplementSaveStatusLabels.idle;
}

export function getSupplementNotificationControlDisplay(job = null, { formatJobStatus, isSchedulePast } = {}) {
  if (!job) return { label: "예약 없음", tone: "off" };
  if (canCancelNotificationJob(job)) {
    const isPast = isSchedulePast(job.scheduledAt, 0);
    return { label: isPast ? "예약 시각 확인" : "예약됨", tone: isPast ? "warning" : "on" };
  }
  if (job.status === "sent") return { label: "발송 완료", tone: "done" };
  if (job.status === "canceled") return { label: "취소됨", tone: "off" };
  if (job.status === "failed") return { label: "예약 실패", tone: "failed" };
  if (["send_unconfirmed", "dry_run"].includes(job.status)) return { label: "확인 필요", tone: "warning" };
  return { label: formatJobStatus(job), tone: "off" };
}

export function getSupplementStudentReminderSaveStatus(task = {}, notificationJobs = [], { isSchedulePast } = {}) {
  if (!isSupplementStudentReminderTask(task)) return "notApplied";
  if (!task.scheduledDate) return "empty";
  const scheduledAt = getSupplementStudentReminderScheduledAt(task);
  const job = getSupplementStudentReminderJob(task, notificationJobs);
  if (job?.status === "scheduled") return isSchedulePast(job.scheduledAt, 0) ? "resultDue" : "scheduled";
  if (job?.status === "dry_run") return "scheduled";
  if (job?.status === "sent") return "synced";
  if (job?.status === "send_unconfirmed") return "resultDue";
  if (job?.status === "failed") return "failed";
  if (job?.status === "canceled") return "canceled";
  if (scheduledAt && isSchedulePast(scheduledAt, 0)) return "resultDue";
  return "ready";
}

export function getSupplementImmediateNoticeSaveStatus(status, skipped = false) {
  if (skipped) return "notApplied";
  if (status === "sent" || status === "dry_run") return "synced";
  if (status === "send_unconfirmed") return "resultDue";
  if (status === "failed") return "failed";
  return status || "idle";
}
