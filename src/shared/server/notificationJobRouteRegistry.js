// @ts-check

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const notificationJobRouteSignatures = Object.freeze([
  Object.freeze({ method: "GET", path: "/api/notification-jobs" }),
  Object.freeze({ method: "POST", path: "/api/notification-jobs/cancel" }),
  Object.freeze({ method: "POST", path: "/api/notification-jobs/reserve" }),
  Object.freeze({ method: "POST", path: "/api/notification-jobs/reconcile-solapi" }),
  Object.freeze({ method: "POST", path: "/api/notification-jobs" }),
  Object.freeze({ method: "DELETE", path: "/api/notification-jobs" }),
  Object.freeze({ method: "POST", path: "/api/notification-jobs/dispatch-due" }),
  Object.freeze({ method: "POST", path: "/api/notification-jobs/readiness-check" }),
  Object.freeze({ method: "POST", path: "/api/notification-jobs/reserve-bulk" })
]);

/**
 * @param {Object} deps
 * @param {(notificationJobId: string, reason: string) => Promise<*>} deps.cancelNotificationJob
 * @param {(groupId: string) => Promise<*>} deps.cancelSolapiReservationGroup
 * @param {(notificationJobId: string) => Promise<*>} deps.deleteNotificationJob
 * @param {(options: *) => Promise<*>} deps.dispatchDueNotificationJobs
 * @param {(options: *) => Promise<*>} deps.checkNotificationReadiness
 * @param {(request: *, payload: *) => { configured: boolean, ok: boolean }} deps.getDispatchAuthState
 * @param {(notificationJobId: string) => Promise<*>} deps.getNotificationJob
 * @param {(requestUrl: *) => Record<string, *>} deps.getNotificationJobQueryFilters
 * @param {(result: *) => *} deps.getProviderMessageId
 * @param {(options: *) => Promise<*>} deps.listNotificationJobs
 * @param {(method: string, pathname: string, body: *) => *} deps.parseVersionedWriteRequest
 * @param {(request: *) => Promise<Record<string, *>>} deps.readJsonBody
 * @param {(options: *) => Promise<*>} deps.reconcileSolapiNotificationJobs
 * @param {(notificationJob: *, options: *) => Promise<*>} deps.reserveNotificationJobInSolapi
 * @param {(notificationJobs: *[], options: *) => Promise<*>} deps.reserveNotificationJobsInSolapi
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @param {(job: *) => *} deps.summarizeNotificationJobForList
 * @param {(notificationJob: *) => Promise<*>} deps.upsertNotificationJob
 * @returns {RouteRegistry}
 */
export function createNotificationJobRouteRegistry({
  cancelNotificationJob,
  cancelSolapiReservationGroup,
  deleteNotificationJob,
  dispatchDueNotificationJobs,
  checkNotificationReadiness,
  getDispatchAuthState,
  getNotificationJob,
  getNotificationJobQueryFilters,
  getProviderMessageId,
  listNotificationJobs,
  parseVersionedWriteRequest,
  readJsonBody,
  reconcileSolapiNotificationJobs,
  reserveNotificationJobInSolapi,
  reserveNotificationJobsInSolapi,
  sendJson,
  summarizeNotificationJobForList,
  upsertNotificationJob
}) {
  /** @param {RouteDispatchContext} context */
  async function dispatch({ request, response, requestUrl }) {
    if (request.method === "GET" && requestUrl.pathname === "/api/notification-jobs") {
      try {
        const notificationJobFilters = getNotificationJobQueryFilters(requestUrl);
        const result = await listNotificationJobs({ limit: requestUrl.searchParams.get("limit") || 300, ...notificationJobFilters });
        const includeResult = requestUrl.searchParams.get("includeResult") === "true";
        sendJson(request, response, 200, {
          ok: true,
          ...result,
          notificationJobs: includeResult
            ? result.notificationJobs
            : (result.notificationJobs ?? []).map(summarizeNotificationJobForList)
        });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/notification-jobs/cancel") {
      try {
        const payload = parseVersionedWriteRequest(
          request.method,
          requestUrl.pathname,
          await readJsonBody(request)
        );
        const notificationJobId = payload.notificationJobId;
        const reason = payload.reason || "선생님 예약 취소";
        const existing = await getNotificationJob(notificationJobId);
        const job = existing.notificationJob;
        if (!job) throw new Error("취소할 알림톡 예약을 찾지 못했습니다.");
        const providerGroupId =
          job.providerMessageId ||
          getProviderMessageId(job.result) ||
          getProviderMessageId(job.result?.result) ||
          job.result?.groupId ||
          job.result?.result?.groupId ||
          "";
        let solapiCancellation = null;
        if (payload.cancelSolapi !== false && job.provider === "solapi" && providerGroupId) {
          solapiCancellation = await cancelSolapiReservationGroup(providerGroupId);
        }
        const result = await cancelNotificationJob(notificationJobId, reason);
        sendJson(request, response, 200, { ok: true, ...result, solapiCancellation });
      } catch (error) {
        sendJson(request, response, Number(error.statusCode) || 500, {
          ok: false,
          error: error.message,
          ...(error.code ? { code: error.code } : {}),
          ...(error.field !== undefined ? { field: error.field } : {})
        });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/notification-jobs/reserve") {
      try {
        const payload = parseVersionedWriteRequest(
          request.method,
          requestUrl.pathname,
          await readJsonBody(request)
        );
        const result = await reserveNotificationJobInSolapi(payload.notificationJob, {
          forceDryRun: Boolean(payload.forceDryRun),
          reason: payload.reason || "수업일지 예약"
        });
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, Number(error.statusCode) || 500, {
          ok: false,
          error: error.message,
          ...(error.code ? { code: error.code } : {}),
          ...(error.field ? { field: error.field } : {})
        });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/notification-jobs/reconcile-solapi") {
      try {
        const payload = parseVersionedWriteRequest(
          request.method,
          requestUrl.pathname,
          await readJsonBody(request)
        );
        const result = await reconcileSolapiNotificationJobs({
          date: payload.date,
          lessonId: payload.lessonId,
          limit: payload.limit || 500,
          notificationJobIds: payload.notificationJobIds,
          scheduledFrom: payload.scheduledFrom,
          scheduledTo: payload.scheduledTo
        });
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, Number(error.statusCode) || 500, {
          ok: false,
          error: error.message,
          ...(error.code ? { code: error.code } : {}),
          ...(error.field !== undefined ? { field: error.field } : {})
        });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/notification-jobs") {
      try {
        const payload = parseVersionedWriteRequest(
          request.method,
          requestUrl.pathname,
          await readJsonBody(request)
        );
        const result = await upsertNotificationJob(payload.notificationJob);
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, Number(error.statusCode) || 500, {
          ok: false,
          error: error.message,
          ...(error.code ? { code: error.code } : {}),
          ...(error.field ? { field: error.field } : {})
        });
      }
      return true;
    }

    if (request.method === "DELETE" && requestUrl.pathname === "/api/notification-jobs") {
      try {
        const notificationJobId = requestUrl.searchParams.get("id");
        if (!notificationJobId) throw new Error("삭제할 알림톡 기록 ID가 필요합니다.");
        const result = await deleteNotificationJob(notificationJobId);
        if (!result.deletedNotificationJobIds?.includes(notificationJobId)) {
          sendJson(request, response, 409, {
            ok: false,
            error: "삭제 가능한 알림 이력이 아니거나 이미 삭제된 기록입니다."
          });
          return true;
        }
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/notification-jobs/dispatch-due") {
      try {
        const rawPayload = await readJsonBody(request);
        const dispatchAuth = getDispatchAuthState(request, rawPayload);
        const hasSensitiveOverride = Boolean(rawPayload.now || rawPayload.dispatchToken || rawPayload.forceDryRun);
        if (dispatchAuth.configured && hasSensitiveOverride && !dispatchAuth.ok) {
          sendJson(request, response, 401, { ok: false, error: "Invalid notification dispatch token." });
          return true;
        }
        const payload = parseVersionedWriteRequest(request.method, requestUrl.pathname, rawPayload);
        const result = await dispatchDueNotificationJobs({
          allowManualStatuses: dispatchAuth.ok,
          forceDryRun: dispatchAuth.ok ? payload.forceDryRun : false,
          limit: payload.limit,
          now: dispatchAuth.ok && payload.now ? payload.now : new Date().toISOString()
        });
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, Number(error.statusCode) || 500, {
          ok: false,
          error: error.message,
          ...(error.code ? { code: error.code } : {}),
          ...(error.field !== undefined ? { field: error.field } : {})
        });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/notification-jobs/readiness-check") {
      try {
        const payload = parseVersionedWriteRequest(
          request.method,
          requestUrl.pathname,
          await readJsonBody(request)
        );
        const result = await checkNotificationReadiness({
          notifySlack: payload.notifySlack,
          now: payload.now,
          windowMinutes: payload.windowMinutes
        });
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, Number(error.statusCode) || 500, {
          ok: false,
          error: error.message,
          ...(error.code ? { code: error.code } : {}),
          ...(error.field !== undefined ? { field: error.field } : {})
        });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/notification-jobs/reserve-bulk") {
      try {
        const payload = parseVersionedWriteRequest(
          request.method,
          requestUrl.pathname,
          await readJsonBody(request)
        );
        const result = await reserveNotificationJobsInSolapi(payload.notificationJobs, {
          concurrency: payload.concurrency || 4,
          forceDryRun: Boolean(payload.forceDryRun),
          reason: payload.reason || "수업일지 일괄 예약"
        });
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, Number(error.statusCode) || 500, {
          ok: false,
          error: error.message,
          ...(error.code ? { code: error.code } : {}),
          ...(error.field !== undefined ? { field: error.field } : {})
        });
      }
      return true;
    }

    return false;
  }

  return Object.freeze({ dispatch, routeSignatures: notificationJobRouteSignatures });
}
