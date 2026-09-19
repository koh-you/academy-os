// @ts-check

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const appCoreReadRouteSignatures = Object.freeze([
  Object.freeze({ method: "GET", path: "/api/app-state" }),
  Object.freeze({ method: "GET", path: "/api/special-lecture-guides" })
]);

/** `?keys=a,b` — 저장 뒤 재조회처럼 필요한 키만 읽을 때. 없으면 전체(부트스트랩). */
export function parseAppStateKeysParam(requestUrl) {
  const raw = requestUrl.searchParams.get("keys");
  if (raw === null) return null;
  return raw.split(",").map((key) => key.trim()).filter(Boolean);
}

/**
 * @param {Object} deps
 * @param {(options?: { keys?: string[]|null }) => Promise<*>} deps.listAppState
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @returns {RouteRegistry}
 */
export function createAppCoreReadRouteRegistry({ listAppState, sendJson }) {
  /** @param {RouteDispatchContext} context */
  async function dispatch({ request, response, requestUrl }) {
    if (request.method !== "GET") return false;
    if (requestUrl.pathname === "/api/app-state") {
      try {
        const keys = parseAppStateKeysParam(requestUrl);
        const result = await listAppState(keys ? { keys } : undefined);
        const { stateRows, ...summary } = result;
        sendJson(request, response, 200, {
          ok: true,
          ...summary,
          ...(requestUrl.searchParams.get("includeRows") === "true" ? { stateRows } : {})
        });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }
    if (requestUrl.pathname === "/api/special-lecture-guides") {
      try {
        const result = await listAppState();
        const hasSpecialLectureGuides = Array.isArray(result.states?.specialLectureGuides);
        const specialLectureGuides = hasSpecialLectureGuides
          ? result.states.specialLectureGuides
          : [];
        sendJson(request, response, 200, {
          hasSpecialLectureGuides,
          ok: true,
          source: result.source,
          specialLectureGuides
        });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }
    return false;
  }

  return Object.freeze({ dispatch, routeSignatures: appCoreReadRouteSignatures });
}
