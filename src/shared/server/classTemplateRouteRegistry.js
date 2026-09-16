// @ts-check

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const classTemplateRouteSignatures = Object.freeze([
  Object.freeze({ method: "GET", path: "/api/classes" }),
  Object.freeze({ method: "POST", path: "/api/classes" })
]);

/**
 * @param {Object} deps
 * @param {() => Promise<*>} deps.listClassTemplates
 * @param {(request: *) => Promise<Record<string, *>>} deps.readJsonBody
 * @param {(input: Record<string, *>) => Promise<*>} deps.saveClassTemplate
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @returns {RouteRegistry}
 */
export function createClassTemplateRouteRegistry({ listClassTemplates, readJsonBody, saveClassTemplate, sendJson }) {
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

    // 반 개설(classTemplateId 없음) / 수정(있음). 반관리 화면에서 쓴다.
    if (request.method === "POST" && requestUrl.pathname === "/api/classes") {
      try {
        const payload = await readJsonBody(request);
        const result = await saveClassTemplate(payload.classTemplate ?? payload);
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, Number(error.statusCode) || 500, {
          ok: false,
          error: error.message,
          ...(error.code ? { code: error.code } : {})
        });
      }
      return true;
    }

    return false;
  }

  return Object.freeze({ dispatch, routeSignatures: classTemplateRouteSignatures });
}
