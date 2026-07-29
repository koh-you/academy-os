export const defaultSolapiAutoReconcileGraceMs = 5 * 60 * 1000;
export const defaultSolapiAutoReconcileRetryMs = 5 * 60 * 1000;
export const defaultSolapiAutoReconcileLookbackMs = 48 * 60 * 60 * 1000;

const autoReconcileStatuses = new Set(["scheduled", "send_unconfirmed"]);

function toTimestamp(value) {
  if (value instanceof Date) return value.getTime();
  if (typeof value === "number") return Number.isFinite(value) ? value : NaN;
  if (!value) return NaN;
  return new Date(value).getTime();
}

function firstText(values = []) {
  return values
    .map((value) => String(value ?? "").trim())
    .find(Boolean) ?? "";
}

export function getSolapiProviderReference(job = {}) {
  return firstText([
    job.providerMessageId,
    job.result?.groupId,
    job.result?.result?.groupId,
    job.result?.response?.groupInfo?.groupId,
    job.result?.response?.groupInfo?._id,
    job.result?.response?.groupId,
    job.result?.response?.group_id,
    job.result?.result?.response?.groupInfo?.groupId,
    job.result?.result?.response?.groupInfo?._id,
    job.result?.result?.response?.groupId,
    job.result?.result?.response?.group_id
  ]);
}

export function getLastSolapiReconciledAt(job = {}) {
  return firstText([
    job.result?.solapiReconciledAt,
    job.result?.result?.solapiReconciledAt
  ]);
}

export function selectDueSolapiAutoReconcileJobs(
  jobs = [],
  {
    graceMs = defaultSolapiAutoReconcileGraceMs,
    limit = 50,
    lookbackMs = defaultSolapiAutoReconcileLookbackMs,
    now = new Date(),
    retryMs = defaultSolapiAutoReconcileRetryMs
  } = {}
) {
  const nowTime = toTimestamp(now);
  if (!Number.isFinite(nowTime)) throw new Error("now must be a valid date value.");
  const safeGraceMs = Math.max(0, Number(graceMs) || 0);
  const safeRetryMs = Math.max(0, Number(retryMs) || 0);
  const safeLookbackMs = Math.max(safeGraceMs, Number(lookbackMs) || 0);
  const safeLimit = Math.max(1, Number(limit) || 50);
  const dueBefore = nowTime - safeGraceMs;
  const oldestScheduledTime = nowTime - safeLookbackMs;

  return (Array.isArray(jobs) ? jobs : [])
    .filter((job) => {
      if (job?.provider !== "solapi" || !autoReconcileStatuses.has(job.status)) return false;
      if (!getSolapiProviderReference(job)) return false;
      const scheduledTime = toTimestamp(job.scheduledAt);
      if (!Number.isFinite(scheduledTime) || scheduledTime > dueBefore || scheduledTime < oldestScheduledTime) {
        return false;
      }
      const lastReconciledTime = toTimestamp(getLastSolapiReconciledAt(job));
      return !Number.isFinite(lastReconciledTime) || nowTime - lastReconciledTime >= safeRetryMs;
    })
    .sort((left, right) => {
      const scheduledDifference = toTimestamp(left.scheduledAt) - toTimestamp(right.scheduledAt);
      if (scheduledDifference !== 0) return scheduledDifference;
      return String(left.notificationJobId ?? "").localeCompare(String(right.notificationJobId ?? ""));
    })
    .slice(0, safeLimit);
}
