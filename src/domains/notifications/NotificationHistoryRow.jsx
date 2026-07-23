export function NotificationHistoryRow({
  canCancelJob,
  canDeleteJob,
  deletingJobId,
  formatJobStatus,
  formatTimeLabel,
  getJobLabel,
  getProviderReference,
  getStatusClass,
  getStatusLabel,
  job,
  onCancelJob,
  onDeleteJob,
  studentName
}) {
  const isActionPending = deletingJobId === job.notificationJobId;
  const canCancel = canCancelJob(job);
  const canDelete = canDeleteJob(job);
  const providerReference = getProviderReference(job);

  return (
    <article className="notificationTableRow">
      <span className={`statusPill status-${getStatusClass(job)}`}>{formatJobStatus(job) || getStatusLabel(job.status)}</span>
      <span className="notificationJobTypeCell">
        <strong>{getJobLabel(job.notificationType)}</strong>
        {providerReference ? <small>Solapi {providerReference}</small> : null}
      </span>
      <span>{studentName(job.studentId, job.payload)}</span>
      <span>{job.scheduledAt ? formatTimeLabel(job.scheduledAt) : job.createdAt ? formatTimeLabel(job.createdAt) : "-"}</span>
      <span>{job.recipient || "번호 없음"}</span>
      <p>
        {job.error ? `오류: ${job.error}` : job.previewBody || job.payload?.message || "미리보기 없음"}
      </p>
      <span className="notificationJobActions">
        {canCancel ? (
          <button
            className="dangerSoftButton compact"
            disabled={isActionPending}
            onClick={() => onCancelJob(job)}
            type="button"
          >
            {isActionPending ? "취소 중" : "예약 취소"}
          </button>
        ) : null}
        {canDelete ? (
          <button
            className="dangerSoftButton compact"
            disabled={isActionPending}
            onClick={() => onDeleteJob(job)}
            type="button"
          >
            {isActionPending ? "삭제 중" : "삭제"}
          </button>
        ) : null}
        {!canCancel && !canDelete ? <small>보관</small> : null}
      </span>
    </article>
  );
}
