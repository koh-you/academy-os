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
