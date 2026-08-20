// @ts-check

/**
 * @param {Object} deps
 * @param {(date: string) => { startIso: string, endIso: string }} deps.getKoreaDayUtcRange
 * @param {(ids: string[]) => Promise<Object[]>} deps.listNotificationJobsByIds
 * @param {(options: Object) => Promise<{ notificationJobs: Object[], source: string }>} deps.listNotificationJobs
 * @param {(options: Object) => Promise<{ groups: Object[] }>} deps.listSolapiGroups
 * @param {(options: Object) => Promise<{ messages: Object[] }>} deps.listSolapiMessages
 * @param {(notificationJob: Object) => Promise<{ notificationJob: Object }>} deps.upsertNotificationJob
 * @param {(options: Object) => Promise<{ record: Object|null }>} deps.patchLessonStudentRecordNotificationStatus
 * @param {Set<string>} deps.lessonCommentNotificationTypes
 * @param {(result: *) => string} deps.getProviderMessageId
 * @param {(job: Object) => string} deps.getSolapiProviderReference
 * @param {(jobs: Object[], options: Object) => Object[]} deps.selectDueSolapiAutoReconcileJobs
 * @param {number} deps.defaultSolapiAutoReconcileGraceMs
 * @param {number} deps.defaultSolapiAutoReconcileLookbackMs
 * @param {number} deps.defaultSolapiAutoReconcileRetryMs
 * @param {(name: string, fallbackValue: number) => number} deps.getPositiveNumberEnv
 */
export function createNotificationSolapiReconcileService({
  getKoreaDayUtcRange,
  listNotificationJobsByIds,
  listNotificationJobs,
  listSolapiGroups,
  listSolapiMessages,
  upsertNotificationJob,
  patchLessonStudentRecordNotificationStatus,
  lessonCommentNotificationTypes,
  getProviderMessageId,
  getSolapiProviderReference,
  selectDueSolapiAutoReconcileJobs,
  defaultSolapiAutoReconcileGraceMs,
  defaultSolapiAutoReconcileLookbackMs,
  defaultSolapiAutoReconcileRetryMs,
  getPositiveNumberEnv
}) {
  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function withSolapiRetry(action, { attempts = 3, delayMs = 350 } = {}) {
    let lastError = null;
    for (let attempt = 1; attempt <= attempts; attempt += 1) {
      try {
        return await action();
      } catch (error) {
        lastError = error;
        if (attempt < attempts) await wait(delayMs * attempt);
      }
    }
    throw lastError;
  }

  function getNotificationJobSolapiGroupId(job = {}) {
    return (
      getSolapiProviderReference(job) ||
      job.providerMessageId ||
      getProviderMessageId(job.result) ||
      getProviderMessageId(job.result?.result) ||
      job.result?.groupId ||
      job.result?.result?.groupId ||
      ""
    );
  }

  function normalizeSolapiStatus(value = "") {
    return String(value ?? "").trim().toUpperCase();
  }

  function isSolapiCanceledStatus(value = "") {
    const status = normalizeSolapiStatus(value);
    return status === "CANCELED" || status === "CANCELLED" || status.includes("CANCEL");
  }

  function isSolapiFailedStatus(value = "") {
    const status = normalizeSolapiStatus(value);
    return status === "FAILED" || status === "FAIL" || status.includes("FAIL") || status.includes("ERROR");
  }

  function isSolapiCompleteStatus(value = "") {
    const status = normalizeSolapiStatus(value);
    return status === "COMPLETE" || status === "COMPLETED" || status === "DONE" || status.includes("COMPLETE");
  }

  function getSolapiPrimaryMessage(messages = [], job = {}) {
    const recipient = String(job.recipient || job.payload?.recipient || "").replace(/\D/g, "");
    if (recipient) {
      const matched = messages.find((message) => String(message.to || "").replace(/\D/g, "") === recipient);
      if (matched) return matched;
    }
    return messages.find((message) => String(message.statusCode || "") === "4000") ?? messages[0] ?? null;
  }

  function getSolapiStatusDetail({ group, message } = {}) {
    const statusCode = String(message?.statusCode || "").trim();
    const messageStatus = String(message?.status || "").trim();
    const groupStatus = String(group?.status || "").trim();
    const reason = String(message?.reason || "").trim();
    return [statusCode ? `statusCode ${statusCode}` : "", reason, messageStatus || groupStatus]
      .filter(Boolean)
      .join(" · ");
  }

  function getReconciledSolapiJobState(job = {}, group = null, messages = [], now = new Date()) {
    const message = getSolapiPrimaryMessage(messages, job);
    const statusCode = String(message?.statusCode || "").trim();
    const detail = getSolapiStatusDetail({ group, message });

    if (statusCode === "4000") {
      return { error: "", message, shouldUpdate: job.status !== "sent", status: "sent" };
    }
    if (isSolapiCanceledStatus(group?.status) || isSolapiCanceledStatus(message?.status)) {
      return { error: detail || "Solapi 취소", message, shouldUpdate: job.status !== "canceled", status: "canceled" };
    }
    if (isSolapiFailedStatus(group?.status) || isSolapiFailedStatus(message?.status)) {
      return { error: detail || "Solapi 실패", message, shouldUpdate: job.status !== "failed" || job.error !== detail, status: "failed" };
    }
    if (isSolapiCompleteStatus(group?.status) || isSolapiCompleteStatus(message?.status) || group?.dateCompleted || message?.dateReported) {
      const error = detail || "Solapi 완료 상태 확인 필요";
      return { error, message, shouldUpdate: job.status !== "send_unconfirmed" || job.error !== error, status: "send_unconfirmed" };
    }

    const scheduledTime = job.scheduledAt ? new Date(job.scheduledAt).getTime() : NaN;
    if (Number.isFinite(scheduledTime) && now.getTime() > scheduledTime) {
      const error = detail || "Solapi 발송결과 확인 필요";
      return { error, message, shouldUpdate: job.status !== "send_unconfirmed" || job.error !== error, status: "send_unconfirmed" };
    }

    return { error: detail, message, shouldUpdate: false, status: job.status || "scheduled" };
  }

  function getLessonRecordStatusForSolapiResult(status, error = "") {
    if (status === "sent") return "발송 완료";
    if (status === "send_unconfirmed") return error ? `발송 확인 필요 · ${error}` : "발송 확인 필요";
    if (status === "failed") return error ? `발송 실패 · ${error}` : "발송 실패";
    if (status === "canceled") return "취소";
    return "";
  }

  async function reconcileSolapiNotificationJobs({
    candidateJobs = null,
    date = "",
    lessonId = "",
    limit = 500,
    notificationJobIds = [],
    reconciledSource = "manual-send-result",
    scheduledFrom = "",
    scheduledTo = "",
    now = new Date()
  } = {}) {
    const targetJobIds = Array.isArray(notificationJobIds)
      ? notificationJobIds.map((item) => String(item || "").trim()).filter(Boolean)
      : [];
    const hasCandidateJobs = Array.isArray(candidateJobs);
    if (!hasCandidateJobs && !date && !lessonId && !scheduledFrom && !scheduledTo && targetJobIds.length === 0) {
      throw new Error("조회할 알림톡 예약 ID, 수업일 또는 수업 ID가 필요합니다.");
    }
    const { startIso, endIso } = targetJobIds.length ? { startIso: "", endIso: "" } : getKoreaDayUtcRange(date);
    const targetJobs = hasCandidateJobs
      ? candidateJobs
      : targetJobIds.length
        ? await listNotificationJobsByIds(targetJobIds)
        : (await listNotificationJobs({
            lessonId,
            limit,
            scheduledFrom: scheduledFrom || startIso,
            scheduledTo: scheduledTo || endIso,
            status: "scheduled,send_unconfirmed"
          })).notificationJobs ?? [];
    const targetJobIdSet = new Set(targetJobIds);
    const targetStatuses = new Set(["scheduled", "send_unconfirmed"]);
    const reconciledAt = now instanceof Date ? now : new Date(now);
    if (Number.isNaN(reconciledAt.getTime())) throw new Error("now must be a valid date value.");
    const candidates = targetJobs.filter((job) =>
      job.provider === "solapi" &&
      targetStatuses.has(job.status) &&
      getNotificationJobSolapiGroupId(job) &&
      (targetJobIdSet.size === 0 || targetJobIdSet.has(job.notificationJobId))
    );
    const checked = [];
    const notificationJobs = [];
    const records = [];
    const solapiLookupCache = new Map();

    async function getSolapiLookup(groupId) {
      if (!solapiLookupCache.has(groupId)) {
        solapiLookupCache.set(groupId, withSolapiRetry(async () => {
          const [groupsResult, messagesResult] = await Promise.all([
            listSolapiGroups({ groupId, limit: 1 }),
            listSolapiMessages({ groupId, limit: 50 })
          ]);
          return {
            group: groupsResult.groups?.[0] ?? null,
            messages: messagesResult.messages ?? []
          };
        }));
      }
      return solapiLookupCache.get(groupId);
    }

    for (const job of candidates) {
      const groupId = getNotificationJobSolapiGroupId(job);
      try {
        if (checked.length > 0) await wait(80);
        const { group, messages } = await getSolapiLookup(groupId);
        const reconciled = getReconciledSolapiJobState(job, group, messages, reconciledAt);
        checked.push({
          group,
          groupId,
          message: reconciled.message,
          notificationJobId: job.notificationJobId,
          status: reconciled.status,
          updated: reconciled.shouldUpdate
        });
        const shouldPersistCheckedResult =
          reconciled.shouldUpdate || reconciledSource === "automatic-after-5-minutes";
        if (!shouldPersistCheckedResult) continue;

        const updatedJob = {
          ...job,
          error: reconciled.error,
          result: {
            ...(job.result && typeof job.result === "object" ? job.result : {}),
            solapiGroup: group,
            solapiMessages: messages,
            solapiReconciledAt: reconciledAt.toISOString(),
            solapiReconciledSource: reconciledSource
          },
          status: reconciled.status,
          updatedAt: reconciledAt.toISOString()
        };
        const savedJob = await upsertNotificationJob(updatedJob);
        notificationJobs.push(savedJob.notificationJob ?? updatedJob);

        const recordStatus = getLessonRecordStatusForSolapiResult(reconciled.status, reconciled.error);
        if (
          reconciled.shouldUpdate &&
          lessonCommentNotificationTypes.has(job.notificationType) &&
          job.lessonId &&
          job.studentId &&
          recordStatus
        ) {
          try {
            const patchResult = await patchLessonStudentRecordNotificationStatus({
              lessonId: job.lessonId,
              lessonStudentRecordId: job.lessonStudentRecordId,
              studentId: job.studentId,
              ...(job.notificationType === "student_comment"
                ? { studentCommentSendStatus: recordStatus }
                : { teacherCommentSendStatus: recordStatus })
            });
            if (patchResult.record) records.push(patchResult.record);
          } catch (recordError) {
            checked[checked.length - 1].recordError = recordError.message;
          }
        }
      } catch (error) {
        checked.push({
          error: error.message,
          groupId,
          notificationJobId: job.notificationJobId,
          status: "failed_to_check",
          updated: false
        });
      }
    }

    return {
      checked,
      checkedCount: checked.length,
      notificationJobs,
      records,
      source: "solapi",
      updatedCount: notificationJobs.length
    };
  }

  let automaticSolapiReconcileRunning = false;

  async function reconcileDueSolapiNotificationJobs({ now = new Date(), limit = 0 } = {}) {
    if (automaticSolapiReconcileRunning) {
      return {
        checkedCount: 0,
        candidateCount: 0,
        skipped: "already_running",
        source: "solapi-auto-reconcile",
        updatedCount: 0
      };
    }
    automaticSolapiReconcileRunning = true;
    try {
      const reconciledAt = now instanceof Date ? now : new Date(now);
      const nowTime = reconciledAt.getTime();
      if (Number.isNaN(nowTime)) throw new Error("now must be a valid date value.");
      const graceMs = getPositiveNumberEnv(
        "SOLAPI_AUTO_RECONCILE_GRACE_MS",
        defaultSolapiAutoReconcileGraceMs
      );
      const retryMs = getPositiveNumberEnv(
        "SOLAPI_AUTO_RECONCILE_RETRY_MS",
        defaultSolapiAutoReconcileRetryMs
      );
      const lookbackMs = getPositiveNumberEnv(
        "SOLAPI_AUTO_RECONCILE_LOOKBACK_MS",
        defaultSolapiAutoReconcileLookbackMs
      );
      const safeLimit = Math.max(
        1,
        Number(limit) ||
          getPositiveNumberEnv("SOLAPI_AUTO_RECONCILE_LIMIT", 50)
      );
      const listed = await listNotificationJobs({
        limit: Math.min(1000, Math.max(200, safeLimit * 10)),
        scheduledFrom: new Date(nowTime - lookbackMs).toISOString(),
        scheduledTo: new Date(nowTime - graceMs + 1).toISOString(),
        status: "scheduled,send_unconfirmed"
      });
      const candidates = selectDueSolapiAutoReconcileJobs(listed.notificationJobs ?? [], {
        graceMs,
        limit: safeLimit,
        lookbackMs,
        now: reconciledAt,
        retryMs
      });
      if (!candidates.length) {
        return {
          checkedCount: 0,
          candidateCount: 0,
          source: listed.source,
          updatedCount: 0
        };
      }
      const result = await reconcileSolapiNotificationJobs({
        candidateJobs: candidates,
        reconciledSource: "automatic-after-5-minutes",
        now: reconciledAt
      });
      return {
        ...result,
        candidateCount: candidates.length
      };
    } finally {
      automaticSolapiReconcileRunning = false;
    }
  }

  return Object.freeze({ reconcileDueSolapiNotificationJobs, reconcileSolapiNotificationJobs });
}
