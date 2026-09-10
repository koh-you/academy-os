// @ts-check

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const testPaperFileRouteSignatures = Object.freeze([
  Object.freeze({ method: "POST", path: "/api/test-paper-files" }),
  Object.freeze({ method: "DELETE", path: "/api/test-paper-files" }),
  Object.freeze({ method: "GET", path: "/api/test-paper-files/open" }),
  Object.freeze({ method: "POST", path: "/api/test-paper-files/watermark" })
]);

/**
 * @param {Object} deps
 * @param {(buffer: *) => string} deps.createFileDigest
 * @param {() => *} deps.createTestPaperStorageOperations
 * @param {(payload: { digest: string, file: *, watermark?: boolean, operations: * }) => Promise<*>} deps.saveTestPaperFile
 * @param {(payload: { fileUrl: string, operations: * }) => Promise<*>} deps.deleteTestPaperFile
 * @param {(payload: { fileUrl: string, operations: * }) => Promise<string>} deps.resolveTestPaperOpenUrl
 * @param {(payload: { file: *, opacity?: number, operations: * }) => Promise<*>} deps.watermarkTestPaperBuffer
 * @param {(request: *) => *} deps.getTeacherSession
 * @param {(dataUrl: string) => { buffer: *, mimeType: string }} deps.parseDataUrl
 * @param {(request: *, options?: { limitBytes?: number }) => Promise<Record<string, *>>} deps.readJsonBody
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @returns {RouteRegistry}
 */
export function createTestPaperFileRouteRegistry({
  createFileDigest,
  createTestPaperStorageOperations,
  deleteTestPaperFile,
  getTeacherSession,
  parseDataUrl,
  readJsonBody,
  resolveTestPaperOpenUrl,
  saveTestPaperFile,
  sendJson,
  watermarkTestPaperBuffer
}) {
  /** @param {RouteDispatchContext} context */
  async function dispatch({ request, response, requestUrl }) {
    if (request.method === "POST" && requestUrl.pathname === "/api/test-paper-files") {
      try {
        const teacherSession = getTeacherSession(request);
        if (!teacherSession) {
          sendJson(request, response, 401, { ok: false, error: "교사 세션 인증이 필요합니다." });
          return true;
        }
        const payload = await readJsonBody(request, { limitBytes: 28 * 1024 * 1024 });
        const parsedFile = parseDataUrl(payload.file?.dataUrl);
        const digest = createFileDigest(parsedFile.buffer);
        const result = await saveTestPaperFile({
          digest,
          file: {
            buffer: parsedFile.buffer,
            fileName: payload.file?.fileName,
            mimeType: parsedFile.mimeType,
            size: parsedFile.buffer.length
          },
          watermark: Boolean(payload.watermark),
          operations: createTestPaperStorageOperations()
        });
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

    // 시험지 목록에 등록하지 않고 PDF 한 장만 워터마크를 찍어 되받는 경로.
    // Storage 를 전혀 거치지 않으므로 파일이 서버에 남지 않는다.
    if (request.method === "POST" && requestUrl.pathname === "/api/test-paper-files/watermark") {
      try {
        const teacherSession = getTeacherSession(request);
        if (!teacherSession) {
          sendJson(request, response, 401, { ok: false, error: "교사 세션 인증이 필요합니다." });
          return true;
        }
        const payload = await readJsonBody(request, { limitBytes: 28 * 1024 * 1024 });
        const parsedFile = parseDataUrl(payload.file?.dataUrl);
        const result = await watermarkTestPaperBuffer({
          file: {
            buffer: parsedFile.buffer,
            fileName: payload.file?.fileName,
            mimeType: parsedFile.mimeType,
            size: parsedFile.buffer.length
          },
          opacity: payload.opacity,
          operations: createTestPaperStorageOperations()
        });
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

    if (request.method === "DELETE" && requestUrl.pathname === "/api/test-paper-files") {
      try {
        const teacherSession = getTeacherSession(request);
        if (!teacherSession) {
          sendJson(request, response, 401, { ok: false, error: "교사 세션 인증이 필요합니다." });
          return true;
        }
        const fileUrl = requestUrl.searchParams.get("ref") || "";
        const result = await deleteTestPaperFile({ fileUrl, operations: createTestPaperStorageOperations() });
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

    if (request.method === "GET" && requestUrl.pathname === "/api/test-paper-files/open") {
      try {
        const teacherSession = getTeacherSession(request);
        if (!teacherSession) {
          sendJson(request, response, 401, { ok: false, error: "교사 세션 인증이 필요합니다." });
          return true;
        }
        const fileUrl = requestUrl.searchParams.get("ref") || "";
        if (!fileUrl) {
          sendJson(request, response, 400, { ok: false, error: "열람할 시험지 파일 참조가 필요합니다." });
          return true;
        }
        const signedUrl = await resolveTestPaperOpenUrl({ fileUrl, operations: createTestPaperStorageOperations() });
        sendJson(request, response, 200, { ok: true, signedUrl });
      } catch (error) {
        sendJson(request, response, Number(error.statusCode) || 500, { ok: false, error: error.message });
      }
      return true;
    }

    return false;
  }

  return Object.freeze({ dispatch, routeSignatures: testPaperFileRouteSignatures });
}
