// @ts-check

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const portalWriteRouteSignatures = Object.freeze([
  Object.freeze({ method: "POST", path: "/api/portal-state" }),
  Object.freeze({ method: "POST", path: "/api/portal-homeworks/complete" }),
  Object.freeze({ method: "POST", path: "/api/portal-questions" }),
  Object.freeze({ method: "POST", path: "/api/portal-exam-post-submissions" })
]);

/**
 * @param {Object} deps
 * @param {(session: *, homeworkId: string) => Promise<*>} deps.completePortalHomework
 * @param {(request: *) => *} deps.getPortalSession
 * @param {(session: *, payload: *) => Promise<*>} deps.mutatePortalQuestion
 * @param {(request: *) => Promise<Record<string, *>>} deps.readJsonBody
 * @param {(session: *, payload: *) => Promise<*>} deps.savePortalExamPostSubmission
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @param {(session: *, states: *) => Promise<*>} deps.upsertPortalState
 * @returns {RouteRegistry}
 */
export function createPortalWriteRouteRegistry({
  completePortalHomework,
  getPortalSession,
  mutatePortalQuestion,
  readJsonBody,
  savePortalExamPostSubmission,
  sendJson,
  upsertPortalState
}) {
  const actions = new Map([
    ["/api/portal-state", {
      errorStatus: () => 500,
      run: (session, payload) => upsertPortalState(session, payload.states ?? payload)
    }],
    ["/api/portal-homeworks/complete", {
      errorStatus: (error) => Number(error.statusCode) || 500,
      run: (session, payload) => completePortalHomework(session, payload.homeworkId)
    }],
    ["/api/portal-questions", {
      errorStatus: (error) => Number(error.statusCode) || 500,
      run: (session, payload) => mutatePortalQuestion(session, payload)
    }],
    ["/api/portal-exam-post-submissions", {
      errorStatus: (error) => Number(error.statusCode) || 500,
      run: (session, payload) => savePortalExamPostSubmission(session, payload)
    }]
  ]);

  /** @param {RouteDispatchContext} context */
  async function dispatch({ request, response, requestUrl }) {
    if (request.method !== "POST") return false;
    const action = actions.get(requestUrl.pathname);
    if (!action) return false;
    try {
      const portalSession = getPortalSession(request);
      if (!portalSession) {
        sendJson(request, response, 401, { ok: false, error: "학생 세션 인증이 필요합니다." });
        return true;
      }
      const payload = await readJsonBody(request);
      const result = await action.run(portalSession, payload);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, action.errorStatus(error), { ok: false, error: error.message });
    }
    return true;
  }

  return Object.freeze({ dispatch, routeSignatures: portalWriteRouteSignatures });
}
