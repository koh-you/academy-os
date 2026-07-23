export async function sendNoticeNowAction({
  buildJob,
  isRequestTimeoutError,
  isSending,
  noticeRecipients = [],
  noticeText,
  persistJob,
  refreshJobs,
  sendNotification,
  setDispatchMessage,
  setIsHistoryOpen,
  setIsSending,
  setJobFilter
}) {
  if (!noticeText || noticeRecipients.length === 0 || isSending) return;
  setIsSending(true);
  setDispatchMessage(`공지 즉시 발송 중: 0/${noticeRecipients.length}건 요청 시작`);
  let sentCount = 0;
  let pendingCount = 0;
  let failedCount = 0;
  let recordFailedCount = 0;
  try {
    for (const [index, recipient] of noticeRecipients.entries()) {
      const notificationJob = buildJob(recipient, "immediate");
      const audienceLabel = recipient.audience === "student" ? "학생" : "학부모";
      setDispatchMessage(
        `공지 즉시 발송 중: ${index + 1}/${noticeRecipients.length}건 · ${recipient.student.name} ${audienceLabel}`
      );
      try {
        const result = await sendNotification(notificationJob.payload);
        sentCount += 1;
        try {
          await persistJob({
            ...notificationJob,
            status: result.result?.dryRun ? "dry_run" : "sent",
            provider: result.provider ?? "solapi",
            result: result.result ?? null
          });
        } catch (recordError) {
          recordFailedCount += 1;
        }
      } catch (error) {
        const timedOut = isRequestTimeoutError(error);
        if (timedOut) pendingCount += 1;
        else failedCount += 1;
        try {
          await persistJob({
            ...notificationJob,
            status: timedOut ? "send_unconfirmed" : "failed",
            error: error.message
          });
        } catch (recordError) {
          recordFailedCount += 1;
        }
      }
    }
    setDispatchMessage(
      `공지 발송 처리 완료: 성공 ${sentCount}건${pendingCount ? `, 확인 필요 ${pendingCount}건` : ""}${failedCount ? `, 실패 ${failedCount}건` : ""}${recordFailedCount ? `, 기록 저장 실패 ${recordFailedCount}건` : ""}`
    );
    setJobFilter(pendingCount ? "pending" : failedCount ? "failed" : "sent");
    setIsHistoryOpen(true);
    refreshJobs();
  } finally {
    setIsSending(false);
  }
}

export async function scheduleNoticeAction({
  buildJob,
  formatScheduledAt,
  isSchedulePast,
  isSending,
  noticeRecipients = [],
  noticeText,
  now,
  persistJob,
  refreshJobs,
  reportError,
  reserveJob,
  scheduledAt,
  setDispatchMessage,
  setIsHistoryOpen,
  setIsSending,
  setJobFilter,
  upsertLocalJob
}) {
  if (!noticeText || noticeRecipients.length === 0 || !scheduledAt || isSending) return;
  if (isSchedulePast(scheduledAt, 0)) {
    setDispatchMessage(
      "예약 시각이 이미 지났습니다. 새 예약 시각을 선택하거나 즉시 발송을 사용해 주세요."
    );
    return;
  }
  setIsSending(true);
  setDispatchMessage(`Solapi 공지 예약 중: 0/${noticeRecipients.length}건`);
  let savedCount = 0;
  let failedCount = 0;
  try {
    const jobs = noticeRecipients.map((recipient) => buildJob(recipient, "scheduled"));
    for (const [index, notificationJob] of jobs.entries()) {
      setDispatchMessage(`Solapi 공지 예약 중: ${index + 1}/${jobs.length}건`);
      try {
        const reservedJob = await reserveJob(notificationJob);
        upsertLocalJob(reservedJob);
        savedCount += 1;
      } catch (error) {
        const failedJob = {
          ...notificationJob,
          status: "failed",
          error: `Solapi 예약 실패: ${error.message}`,
          updatedAt: now()
        };
        upsertLocalJob(failedJob);
        try {
          await persistJob(failedJob);
        } catch (persistError) {
          reportError(persistError);
        }
        failedCount += 1;
      }
    }
    setDispatchMessage(
      `${formatScheduledAt(scheduledAt)} Solapi 공지 예약 완료: 성공 ${savedCount}건${failedCount ? `, 실패 ${failedCount}건` : ""}`
    );
    setJobFilter(failedCount ? "failed" : "scheduled");
    setIsHistoryOpen(true);
    refreshJobs();
  } finally {
    setIsSending(false);
  }
}
