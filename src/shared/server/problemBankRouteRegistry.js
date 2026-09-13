// @ts-check
// 문제은행(오답은행) 라우트. 전부 교사 세션이 필요하다(읽기는 ops read 토큰도 정책상 통과).

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const problemBankRouteSignatures = Object.freeze([
  Object.freeze({ method: "GET", path: "/api/problem-bank/books" }),
  Object.freeze({ method: "GET", path: "/api/problem-bank/book" }),
  Object.freeze({ method: "POST", path: "/api/problem-bank/book" }),
  Object.freeze({ method: "DELETE", path: "/api/problem-bank/book" }),
  Object.freeze({ method: "POST", path: "/api/problem-bank/item-images" }),
  Object.freeze({ method: "POST", path: "/api/problem-bank/import" }),
  Object.freeze({ method: "POST", path: "/api/problem-bank/images" }),
  Object.freeze({ method: "GET", path: "/api/problem-bank/attempts" }),
  Object.freeze({ method: "POST", path: "/api/problem-bank/attempts" })
]);

/**
 * @param {Object} deps
 * @param {(request: *) => *} deps.getTeacherSession
 * @param {() => Promise<*>} deps.listProblemBankBooks
 * @param {(bookId: string) => Promise<*>} deps.getProblemBankBook
 * @param {(bookId: string, patch: *) => Promise<*>} deps.updateProblemBankBook
 * @param {(bookId: string) => Promise<*>} deps.deleteProblemBankBook
 * @param {(itemIds: string[]) => Promise<*>} deps.resolveProblemBankItemImages
 * @param {(manifest: *) => Promise<*>} deps.importProblemBankManifest
 * @param {(bookId: string, files: *[]) => Promise<*>} deps.uploadProblemBankImages
 * @param {(query: { bookId?: string, studentId?: string }) => Promise<*>} deps.listProblemBankAttempts
 * @param {(entries: *[]) => Promise<*>} deps.saveProblemBankAttempts
 * @param {(dataUrl: string) => { buffer: *, mimeType: string }} deps.parseDataUrl
 * @param {(request: *, options?: { limitBytes?: number }) => Promise<Record<string, *>>} deps.readJsonBody
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @returns {RouteRegistry}
 */
export function createProblemBankRouteRegistry({
  getTeacherSession,
  listProblemBankBooks,
  getProblemBankBook,
  updateProblemBankBook,
  deleteProblemBankBook,
  resolveProblemBankItemImages,
  importProblemBankManifest,
  uploadProblemBankImages,
  listProblemBankAttempts,
  saveProblemBankAttempts,
  parseDataUrl,
  readJsonBody,
  sendJson
}) {
  function sendError(request, response, error) {
    sendJson(request, response, Number(error?.statusCode) || 500, {
      ok: false,
      error: error?.message || "문제은행 요청을 처리하지 못했습니다.",
      ...(error?.code ? { code: error.code } : {})
    });
  }

  /** @param {RouteDispatchContext} context */
  async function dispatch({ request, response, requestUrl }) {
    const { pathname } = requestUrl;
    if (!pathname.startsWith("/api/problem-bank/")) return false;

    const teacherSession = getTeacherSession(request);
    if (!teacherSession) {
      sendJson(request, response, 401, { ok: false, error: "교사 세션 인증이 필요합니다." });
      return true;
    }

    try {
      if (request.method === "GET" && pathname === "/api/problem-bank/books") {
        sendJson(request, response, 200, { ok: true, books: await listProblemBankBooks() });
        return true;
      }
      if (request.method === "GET" && pathname === "/api/problem-bank/book") {
        const bookId = requestUrl.searchParams.get("bookId") ?? "";
        sendJson(request, response, 200, { ok: true, ...(await getProblemBankBook(bookId)) });
        return true;
      }
      if (request.method === "POST" && pathname === "/api/problem-bank/book") {
        const payload = await readJsonBody(request);
        const book = await updateProblemBankBook(payload.bookId, payload.patch ?? {});
        sendJson(request, response, 200, { ok: true, book });
        return true;
      }
      if (request.method === "DELETE" && pathname === "/api/problem-bank/book") {
        const bookId = requestUrl.searchParams.get("bookId") ?? "";
        const result = await deleteProblemBankBook(bookId);
        sendJson(request, response, 200, { ok: true, ...result });
        return true;
      }
      if (request.method === "POST" && pathname === "/api/problem-bank/item-images") {
        const payload = await readJsonBody(request);
        const regions = await resolveProblemBankItemImages(payload.itemIds);
        sendJson(request, response, 200, { ok: true, regions });
        return true;
      }
      if (request.method === "POST" && pathname === "/api/problem-bank/import") {
        const payload = await readJsonBody(request, { limitBytes: 12 * 1024 * 1024 });
        const result = await importProblemBankManifest(payload.manifest);
        sendJson(request, response, 200, { ok: true, ...result });
        return true;
      }
      if (request.method === "POST" && pathname === "/api/problem-bank/images") {
        const payload = await readJsonBody(request, { limitBytes: 28 * 1024 * 1024 });
        const files = (Array.isArray(payload.files) ? payload.files : []).map((entry) => {
          const parsed = parseDataUrl(entry?.dataUrl);
          return { file: entry?.file, buffer: parsed.buffer, mimeType: parsed.mimeType };
        });
        const result = await uploadProblemBankImages(payload.bookId, files);
        sendJson(request, response, 200, { ok: true, ...result });
        return true;
      }
      if (request.method === "GET" && pathname === "/api/problem-bank/attempts") {
        const attempts = await listProblemBankAttempts({
          bookId: requestUrl.searchParams.get("bookId") ?? "",
          studentId: requestUrl.searchParams.get("studentId") ?? ""
        });
        sendJson(request, response, 200, { ok: true, attempts });
        return true;
      }
      if (request.method === "POST" && pathname === "/api/problem-bank/attempts") {
        const payload = await readJsonBody(request);
        const result = await saveProblemBankAttempts(payload.entries);
        sendJson(request, response, 200, { ok: true, ...result });
        return true;
      }
    } catch (error) {
      sendError(request, response, error);
      return true;
    }
    return false;
  }

  return Object.freeze({ dispatch, routeSignatures: problemBankRouteSignatures });
}
