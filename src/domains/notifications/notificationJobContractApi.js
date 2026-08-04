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
