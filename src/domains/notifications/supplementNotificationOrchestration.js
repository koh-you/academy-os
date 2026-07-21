export async function reserveSupplementScheduleNoticeJobRequest({
  formatScheduledAt,
  missingMessagePrefix,
  normalizeRecipient,
  notificationJob,
  persistFailure,
  reserveNotificationJob
} = {}) {
  const recipient = normalizeRecipient(notificationJob?.recipient || "");
  if (!recipient) {
    return persistFailure(notificationJob, missingMessagePrefix, "수신 연락처가 없습니다.");
  }

  const reservedJob = await reserveNotificationJob(
    notificationJob,
    "보충관리 학생·학부모 다음 정각 안내 예약"
  );
  const scheduledLabel = formatScheduledAt(reservedJob?.scheduledAt || notificationJob.scheduledAt);
  const isReserved = reservedJob?.status === "scheduled" || reservedJob?.status === "dry_run";
  const isScheduleChange = notificationJob.payload?.noticeKind === "supplement_schedule_change";
  const noticeKindLabel = isScheduleChange ? "변경 안내" : "확정 안내";
  const noticeLabel = `${notificationJob.target === "parent" ? "학부모 보충 일정" : "학생 보충 일정"} ${noticeKindLabel}`;

  return {
    notificationJob: reservedJob,
    skipped: false,
    status: isReserved ? "scheduled" : reservedJob?.status || "resultDue",
    message: isReserved
      ? `${noticeLabel} 예약 완료 · ${scheduledLabel}`
      : reservedJob?.error || `${noticeLabel} 예약 상태를 확인하세요.`
  };
}
