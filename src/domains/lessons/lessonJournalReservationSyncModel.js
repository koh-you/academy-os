export function createLessonJournalReservationSyncStatus({
  activeJobs = [],
  applyState = "idle",
  completedResultCount = 0,
  failedResultCount = 0,
  getExpectedItems = () => [],
  getPayloadFingerprint,
  getProviderReference,
  hasDraftChanges = false,
  hasResultRefreshTarget = false,
  isAssignmentStatusUnrecorded,
  isScheduleExpired = false,
  notificationPlanMode = "default",
  notificationPlanScheduledAt = ""
}) {
  if (applyState === "applying") {
    return { detail: "Solapi 실제 예약/취소를 반영하는 중입니다.", state: "applying", label: "Solapi 반영 중" };
  }
  if (applyState === "failed") {
    return { detail: "예약 확인에서 실패 항목을 확인한 뒤 다시 반영하세요.", state: "failed", label: "Solapi 반영 실패" };
  }
  if (hasDraftChanges) {
    return { detail: "먼저 수업일지 변경 저장을 눌러 최신 저장본을 확정하세요.", state: "blocked", label: "수업일지 저장 필요" };
  }
  if (notificationPlanMode === "none") {
    return activeJobs.length
      ? { detail: `활성 예약 ${activeJobs.length}건을 취소 반영해야 합니다.`, state: "needs", label: "Solapi 취소 반영 필요" }
      : { detail: "현재 활성 Solapi 예약이 없습니다.", state: "synced", label: "Solapi 예약 없음" };
  }
  if (notificationPlanMode === "manual" && !notificationPlanScheduledAt) {
    return { detail: "수동 예약 시각이 없습니다.", state: "failed", label: "예약 시각 없음" };
  }
  if (notificationPlanMode !== "manual" && isScheduleExpired) {
    if (hasResultRefreshTarget) {
      return {
        detail: "예약 시각이 지났습니다. 새 예약이 아니라 Solapi 발송결과를 OS 상태에 반영하세요.",
        state: "resultDue",
        label: "발송결과 확인 필요"
      };
    }
    if (failedResultCount) {
      return {
        detail: `Solapi 발송 실패 ${failedResultCount}건이 반영되었습니다. 예약 확인에서 실패 내용을 확인하세요.`,
        state: "failed",
        label: `발송 실패 ${failedResultCount}건`
      };
    }
    if (completedResultCount) {
      return {
        detail: `Solapi 발송 완료 ${completedResultCount}건이 OS 상태에 반영되었습니다.`,
        state: "synced",
        label: "발송 결과 반영 완료"
      };
    }
    return { detail: "기본 예약 시각이 지나 수동 예약으로 다시 잡아야 합니다.", state: "failed", label: "예약 시간 지남" };
  }
  const expectedItems = getExpectedItems();
  if (!expectedItems.length) {
    return activeJobs.length
      ? { detail: `발송 대상은 없지만 활성 예약 ${activeJobs.length}건이 남아 있습니다.`, state: "needs", label: "Solapi 취소 반영 필요" }
      : { detail: "현재 발송 대상이 없습니다.", state: "synced", label: "Solapi 예약 대상 없음" };
  }

  const expectedIds = new Set(expectedItems.map((item) => item.notificationJobId));
  const activeById = new Map(activeJobs.map((job) => [job.notificationJobId, job]));
  const missingCount = expectedItems.filter((item) => !activeById.has(item.notificationJobId)).length;
  const extraCount = activeJobs.filter((job) => !expectedIds.has(job.notificationJobId)).length;
  const staleCount = expectedItems.filter((item) => {
    const job = activeById.get(item.notificationJobId);
    if (!job) return false;
    if (job.status !== "scheduled") return true;
    if (job.provider !== "solapi" || !getProviderReference(job)) return true;
    const payloadFingerprint = String(job.payload?.reservationFingerprint ?? "") || getPayloadFingerprint({
      ...(job.payload ?? {}),
      previousHomework: isAssignmentStatusUnrecorded(job.payload?.assignmentStatus)
        ? ""
        : job.payload?.previousHomework ?? "",
      recipient: job.recipient,
      scheduledDate: job.scheduledAt || job.payload?.scheduledDate || ""
    });
    return payloadFingerprint !== item.fingerprint;
  }).length;
  if (missingCount || extraCount || staleCount) {
    return {
      detail: [`누락 ${missingCount}건`, `남은 예약 ${extraCount}건`, `내용 변경 ${staleCount}건`].join(" · "),
      state: "needs",
      label: "Solapi 예약 업데이트 필요"
    };
  }
  return { detail: `저장된 최종본 기준 Solapi 예약 ${expectedItems.length}건이 맞습니다.`, state: "synced", label: "Solapi 반영 완료" };
}
