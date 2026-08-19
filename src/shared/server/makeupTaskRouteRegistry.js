// @ts-check

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const makeupTaskRouteSignatures = Object.freeze([
  Object.freeze({ method: "GET", path: "/api/makeup-tasks" }),
  Object.freeze({ method: "POST", path: "/api/makeup-tasks" }),
  Object.freeze({ method: "POST", path: "/api/makeup-tasks/bulk" }),
  Object.freeze({ method: "DELETE", path: "/api/makeup-tasks" })
]);

/**
 * @param {Object} deps
 * @param {() => Promise<*>} deps.deleteAllMakeupTasks
 * @param {(taskId: string) => Promise<*>} deps.deleteMakeupTask
 * @param {() => Promise<*>} deps.listMakeupTasks
 * @param {(request: *) => Promise<Record<string, *>>} deps.readJsonBody
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @param {(task: *) => Promise<*>} deps.upsertMakeupTask
 * @param {(tasks: *[]) => Promise<*>} deps.upsertMakeupTasks
 * @returns {RouteRegistry}
 */
export function createMakeupTaskRouteRegistry({
  deleteAllMakeupTasks,
  deleteMakeupTask,
  listMakeupTasks,
  readJsonBody,
  sendJson,
  upsertMakeupTask,
  upsertMakeupTasks
}) {
  /** @param {RouteDispatchContext} context */
  async function dispatch({ request, response, requestUrl }) {
    if (request.method === "GET" && requestUrl.pathname === "/api/makeup-tasks") {
      try {
        const result = await listMakeupTasks();
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/makeup-tasks") {
      try {
        const payload = await readJsonBody(request);
        const result = await upsertMakeupTask(payload.makeupTask ?? payload.task ?? payload);
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/makeup-tasks/bulk") {
      try {
        const payload = await readJsonBody(request);
        const result = await upsertMakeupTasks(payload.makeupTasks ?? payload.tasks ?? []);
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "DELETE" && requestUrl.pathname === "/api/makeup-tasks") {
      try {
        const taskId = requestUrl.searchParams.get("id");
        const deleteAll = requestUrl.searchParams.get("all") === "true";
        const result = deleteAll ? await deleteAllMakeupTasks() : await deleteMakeupTask(taskId);
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    return false;
  }

  return Object.freeze({ dispatch, routeSignatures: makeupTaskRouteSignatures });
}
