export function formatNotificationJobStatusLabel({
  formatTimeLabel,
  isSchedulePast,
  job
}) {
  if (!job) return "없음";
  if (job.status === "scheduled") {
    const scheduledLabel = formatTimeLabel(job.scheduledAt);
    return isSchedulePast(job.scheduledAt)
      ? `예약 시각 지남 · 확인 필요 · ${scheduledLabel || "예약시각 없음"}`
      : `예약 중 · ${scheduledLabel}`;
  }
  if (job.status === "sent") return "발송 완료";
  if (job.status === "dry_run") return "테스트 기록";
  if (job.status === "send_unconfirmed") {
    return `발송 확인 필요${job.error ? ` · ${job.error}` : ""}`;
  }
  if (job.status === "pending_send") return "발송 대기";
  if (job.status === "failed") {
    return `실패${job.error ? ` · ${job.error}` : ""}`;
  }
  if (job.status === "canceled") return "취소";
  if (job.status === "draft") return "초안";
  return job.status || "확인 필요";
}
