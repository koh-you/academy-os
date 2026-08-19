// @ts-check

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const solapiRouteSignatures = Object.freeze([
  Object.freeze({ method: "GET", path: "/api/solapi/messages" }),
  Object.freeze({ method: "GET", path: "/api/solapi/groups" }),
  Object.freeze({ method: "POST", path: "/api/solapi/groups/cancel" })
]);

/**
 * @param {Object} deps
 * @param {(groupId: string) => Promise<*>} deps.cancelSolapiReservationGroup
 * @param {(dateText?: string) => { startIso: string, endIso: string }} deps.getKoreaDayUtcRange
 * @param {(options: *) => Promise<*>} deps.listSolapiGroups
 * @param {(options: *) => Promise<*>} deps.listSolapiMessages
 * @param {(request: *) => Promise<Record<string, *>>} deps.readJsonBody
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @returns {RouteRegistry}
 */
export function createSolapiRouteRegistry({
  cancelSolapiReservationGroup,
  getKoreaDayUtcRange,
  listSolapiGroups,
  listSolapiMessages,
  readJsonBody,
  sendJson
}) {
  /** @param {RouteDispatchContext} context */
  async function dispatch({ request, response, requestUrl }) {
    if (request.method === "GET" && requestUrl.pathname === "/api/solapi/messages") {
      try {
        const { startIso, endIso } = getKoreaDayUtcRange(requestUrl.searchParams.get("date") || "");
        const result = await listSolapiMessages({
          endDate: requestUrl.searchParams.get("endDate") || endIso,
          groupId: requestUrl.searchParams.get("groupId") || "",
          limit: requestUrl.searchParams.get("limit") || 100,
          messageId: requestUrl.searchParams.get("messageId") || "",
          startDate: requestUrl.searchParams.get("startDate") || startIso,
          statusCode: requestUrl.searchParams.get("statusCode") || "",
          to: requestUrl.searchParams.get("to") || "",
          type: requestUrl.searchParams.get("type") || "ATA"
        });
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "GET" && requestUrl.pathname === "/api/solapi/groups") {
      try {
        const { startIso, endIso } = getKoreaDayUtcRange(requestUrl.searchParams.get("date") || "");
        const result = await listSolapiGroups({
          endDate: requestUrl.searchParams.get("endDate") || endIso,
          groupId: requestUrl.searchParams.get("groupId") || "",
          limit: requestUrl.searchParams.get("limit") || 100,
          startDate: requestUrl.searchParams.get("startDate") || startIso
        });
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/solapi/groups/cancel") {
      try {
        const payload = await readJsonBody(request);
        const groupId = payload.groupId || payload.id;
        if (!groupId) throw new Error("취소할 Solapi groupId가 필요합니다.");
        const result = await cancelSolapiReservationGroup(groupId);
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    return false;
  }

  return Object.freeze({ dispatch, routeSignatures: solapiRouteSignatures });
}
