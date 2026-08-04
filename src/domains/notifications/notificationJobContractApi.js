import {
  parseVersionedWriteRequest,
  parseVersionedWriteResponse
} from "../../shared/contracts/versionedWriteRouteContracts.js";

export async function persistNotificationJobContractRequest({
  notificationJob,
  request,
  requestArgs = []
} = {}) {
  const payload = parseVersionedWriteRequest("POST", "/api/notification-jobs", {
    notificationJob
  });
  const result = await request("/api/notification-jobs", payload, ...requestArgs);
  return parseVersionedWriteResponse("POST", "/api/notification-jobs", result);
}

export async function reserveNotificationJobContractRequest({
  forceDryRun,
  notificationJob,
  reason,
  request,
  requestArgs = []
} = {}) {
  const payload = parseVersionedWriteRequest("POST", "/api/notification-jobs/reserve", {
    ...(forceDryRun === undefined ? {} : { forceDryRun }),
    notificationJob,
    ...(reason === undefined ? {} : { reason })
  });
  const result = await request("/api/notification-jobs/reserve", payload, ...requestArgs);
  return parseVersionedWriteResponse("POST", "/api/notification-jobs/reserve", result);
}

export async function cancelNotificationJobContractRequest({
  cancelSolapi,
  notificationJobId,
  reason,
  request,
  requestArgs = []
} = {}) {
  const payload = parseVersionedWriteRequest("POST", "/api/notification-jobs/cancel", {
    ...(cancelSolapi === undefined ? {} : { cancelSolapi }),
    notificationJobId,
    ...(reason === undefined ? {} : { reason })
  });
  const result = await request("/api/notification-jobs/cancel", payload, ...requestArgs);
  return {
    ...result,
    ...parseVersionedWriteResponse("POST", "/api/notification-jobs/cancel", result)
  };
}

export async function reconcileNotificationJobsContractRequest({
  payload,
  request,
  requestArgs = []
} = {}) {
  const canonicalPayload = parseVersionedWriteRequest(
    "POST",
    "/api/notification-jobs/reconcile-solapi",
    payload
  );
  const result = await request(
    "/api/notification-jobs/reconcile-solapi",
    canonicalPayload,
    ...requestArgs
  );
  return parseVersionedWriteResponse(
    "POST",
    "/api/notification-jobs/reconcile-solapi",
    result
  );
}

export async function reserveNotificationJobsContractRequest({
  concurrency,
  forceDryRun,
  notificationJobs,
  reason,
  request,
  requestArgs = []
} = {}) {
  const payload = parseVersionedWriteRequest("POST", "/api/notification-jobs/reserve-bulk", {
    ...(concurrency === undefined ? {} : { concurrency }),
    ...(forceDryRun === undefined ? {} : { forceDryRun }),
    notificationJobs,
    ...(reason === undefined ? {} : { reason })
  });
  const result = await request("/api/notification-jobs/reserve-bulk", payload, ...requestArgs);
  return parseVersionedWriteResponse("POST", "/api/notification-jobs/reserve-bulk", result);
}
