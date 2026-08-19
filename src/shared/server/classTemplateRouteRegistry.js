// @ts-check

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const classTemplateRouteSignatures = Object.freeze([
  Object.freeze({ method: "GET", path: "/api/classes" })
]);

/**
 * @param {Object} deps
 * @param {() => Promise<*>} deps.listClassTemplates
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @returns {RouteRegistry}
 */
export function createClassTemplateRouteRegistry({ listClassTemplates, sendJson }) {
  /** @param {RouteDispatchContext} context */
  async function dispatch({ request, response, requestUrl }) {
    if (request.method === "GET" && requestUrl.pathname === "/api/classes") {
      try {
        const result = await listClassTemplates();
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    return false;
  }

  return Object.freeze({ dispatch, routeSignatures: classTemplateRouteSignatures });
}
