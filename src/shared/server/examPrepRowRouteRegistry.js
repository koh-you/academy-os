// @ts-check

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const examPrepRowRouteSignatures = Object.freeze([
  Object.freeze({ method: "GET", path: "/api/exam-prep-rows" }),
  Object.freeze({ method: "POST", path: "/api/exam-prep-rows" }),
  Object.freeze({ method: "POST", path: "/api/exam-prep-rows/bulk" }),
  Object.freeze({ method: "DELETE", path: "/api/exam-prep-rows" })
]);

/**
 * @param {Object} deps
 * @param {() => string} deps.createAuditId
 * @param {() => Promise<*>} deps.deleteDuplicateExamPrepRows
 * @param {(examPrepId: string, options: { auditId: string }) => Promise<*>} deps.deleteExamPrepRow
 * @param {() => Promise<*>} deps.listExamPrepRows
 * @param {(message: string, payload: *, options?: { isError?: boolean }) => void} deps.logAudit
 * @param {(request: *) => Promise<Record<string, *>>} deps.readJsonBody
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @param {(row: *, options: { allowRestore: boolean }) => Promise<*>} deps.upsertExamPrepRow
 * @param {(rows: *[], options: { allowRestore: boolean }) => Promise<*>} deps.upsertExamPrepRows
 * @returns {RouteRegistry}
 */
export function createExamPrepRowRouteRegistry({
  createAuditId,
  deleteDuplicateExamPrepRows,
  deleteExamPrepRow,
  listExamPrepRows,
  logAudit,
  readJsonBody,
  sendJson,
  upsertExamPrepRow,
  upsertExamPrepRows
}) {
  /** @param {RouteDispatchContext} context */
  async function dispatch({ request, response, requestUrl }) {
    if (request.method === "GET" && requestUrl.pathname === "/api/exam-prep-rows") {
      try {
        const result = await listExamPrepRows();
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/exam-prep-rows") {
      try {
        const payload = await readJsonBody(request);
        const result = await upsertExamPrepRow(
          payload.examPrepRow ?? payload.row ?? payload,
          { allowRestore: payload.allowRestore === true }
        );
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, Number(error.statusCode) || 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/exam-prep-rows/bulk") {
      try {
        const payload = await readJsonBody(request);
        const result = await upsertExamPrepRows(
          payload.examPrepRows ?? payload.rows ?? [],
          { allowRestore: payload.allowRestore === true }
        );
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "DELETE" && requestUrl.pathname === "/api/exam-prep-rows") {
      try {
        const deleteDuplicates = requestUrl.searchParams.get("duplicates") === "true";
        const confirmed = requestUrl.searchParams.get("confirm") === "true";
        const examPrepId = requestUrl.searchParams.get("id");
        const auditId = requestUrl.searchParams.get("auditId") || createAuditId();
        if (!confirmed) throw new Error("시험정보 삭제는 confirm=true가 필요합니다.");
        if (deleteDuplicates && examPrepId) {
          throw new Error("단일 시험정보 삭제와 중복 일괄 삭제를 같은 요청에서 실행할 수 없습니다.");
        }
        const result = deleteDuplicates
          ? await deleteDuplicateExamPrepRows()
          : await deleteExamPrepRow(examPrepId, { auditId });
        if (!deleteDuplicates) {
          logAudit("[exam-prep-delete-audit]", result.audit);
        }
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        if (error.audit?.operation === "delete_exam_prep_row") {
          logAudit("[exam-prep-delete-audit]", error.audit, { isError: true });
        }
        sendJson(request, response, error.audit ? 409 : 500, {
          ok: false,
          error: error.message,
          ...(error.audit ? { audit: error.audit } : {})
        });
      }
      return true;
    }

    return false;
  }

  return Object.freeze({ dispatch, routeSignatures: examPrepRowRouteSignatures });
}
