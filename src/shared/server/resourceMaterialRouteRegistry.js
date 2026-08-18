// @ts-check

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const resourceMaterialRouteSignatures = Object.freeze([
  Object.freeze({ method: "GET", path: "/api/resource-materials" }),
  Object.freeze({ method: "POST", path: "/api/resource-material-files" }),
  Object.freeze({ method: "DELETE", path: "/api/resource-material-files" }),
  Object.freeze({ method: "GET", path: "/api/resource-material-files/open" }),
  Object.freeze({ method: "POST", path: "/api/resource-materials" }),
  Object.freeze({ method: "DELETE", path: "/api/resource-materials" })
]);

/**
 * @param {Object} deps
 * @param {(buffer: *) => string} deps.createFileDigest
 * @param {() => *} deps.createResourceMaterialStorageOperations
 * @param {(materialId: string, options: { expectedUpdatedAt: string }) => Promise<*>} deps.deleteResourceMaterial
 * @param {(payload: { material: *, operations: * }) => Promise<*>} deps.deleteResourceMaterialWithFile
 * @param {(request: *) => *} deps.getTeacherOrPortalSession
 * @param {(request: *) => *} deps.getTeacherSession
 * @param {() => Promise<*>} deps.listResourceMaterials
 * @param {(method: string, path: string, body: *) => *} deps.parseVersionedWriteRequest
 * @param {(dataUrl: string) => { buffer: *, mimeType: string }} deps.parseDataUrl
 * @param {(request: *, options?: { limitBytes?: number }) => Promise<Record<string, *>>} deps.readJsonBody
 * @param {(materialId: string, sessions: { portalSession: *, teacherSession: * }) => Promise<string>} deps.resolveResourceMaterialOpenUrl
 * @param {(payload: { digest: string, file: *, material: *, operations: * }) => Promise<*>} deps.saveResourceMaterialFile
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @param {(material: *) => Promise<*>} deps.upsertResourceMaterial
 * @returns {RouteRegistry}
 */
export function createResourceMaterialRouteRegistry({
  createFileDigest,
  createResourceMaterialStorageOperations,
  deleteResourceMaterial,
  deleteResourceMaterialWithFile,
  getTeacherOrPortalSession,
  getTeacherSession,
  listResourceMaterials,
  parseVersionedWriteRequest,
  parseDataUrl,
  readJsonBody,
  resolveResourceMaterialOpenUrl,
  saveResourceMaterialFile,
  sendJson,
  upsertResourceMaterial
}) {
  /** @param {RouteDispatchContext} context */
  async function dispatch({ request, response, requestUrl }) {
    if (request.method === "GET" && requestUrl.pathname === "/api/resource-materials") {
      try {
        const result = await listResourceMaterials();
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/resource-material-files") {
      try {
        const teacherSession = getTeacherSession(request);
        if (!teacherSession) {
          sendJson(request, response, 401, { ok: false, error: "교사 세션 인증이 필요합니다." });
          return true;
        }
        const payload = parseVersionedWriteRequest(
          request.method,
          requestUrl.pathname,
          await readJsonBody(request, { limitBytes: 28 * 1024 * 1024 })
        );
        const parsedFile = parseDataUrl(payload.file?.dataUrl);
        const digest = createFileDigest(parsedFile.buffer);
        const result = await saveResourceMaterialFile({
          digest,
          file: {
            buffer: parsedFile.buffer,
            fileName: payload.file?.fileName,
            mimeType: parsedFile.mimeType,
            size: parsedFile.buffer.length
          },
          material: {
            ...(payload.material ?? {}),
            createdBy: teacherSession.teacherId
          },
          operations: createResourceMaterialStorageOperations()
        });
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, Number(error.statusCode) || 500, {
          ok: false,
          error: error.message,
          ...(error.code ? { code: error.code } : {}),
          ...(error.field ? { field: error.field } : {}),
          ...(error.currentMaterial !== undefined ? { currentMaterial: error.currentMaterial } : {})
        });
      }
      return true;
    }

    if (request.method === "DELETE" && requestUrl.pathname === "/api/resource-material-files") {
      try {
        const teacherSession = getTeacherSession(request);
        if (!teacherSession) {
          sendJson(request, response, 401, { ok: false, error: "교사 세션 인증이 필요합니다." });
          return true;
        }
        const payload = parseVersionedWriteRequest(
          request.method,
          requestUrl.pathname,
          await readJsonBody(request)
        );
        const result = await deleteResourceMaterialWithFile({
          material: payload.material,
          operations: createResourceMaterialStorageOperations()
        });
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, Number(error.statusCode) || 500, {
          ok: false,
          error: error.message,
          ...(error.code ? { code: error.code } : {}),
          ...(error.field ? { field: error.field } : {}),
          ...(error.currentMaterial !== undefined ? { currentMaterial: error.currentMaterial } : {})
        });
      }
      return true;
    }

    if (request.method === "GET" && requestUrl.pathname === "/api/resource-material-files/open") {
      try {
        const { portalSession, teacherSession } = getTeacherOrPortalSession(request);
        if (!teacherSession && !portalSession) {
          sendJson(request, response, 401, { ok: false, error: "자료 열람 세션 인증이 필요합니다. 다시 로그인해 주세요." });
          return true;
        }
        const materialId = requestUrl.searchParams.get("id") || "";
        if (!materialId) {
          sendJson(request, response, 400, { ok: false, error: "열람할 자료 ID가 필요합니다." });
          return true;
        }
        const signedUrl = await resolveResourceMaterialOpenUrl(materialId, { portalSession, teacherSession });
        sendJson(request, response, 200, { ok: true, signedUrl });
      } catch (error) {
        sendJson(request, response, Number(error.statusCode) || 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/resource-materials") {
      try {
        const payload = parseVersionedWriteRequest(
          request.method,
          requestUrl.pathname,
          await readJsonBody(request)
        );
        const result = await upsertResourceMaterial(payload.material);
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, Number(error.statusCode) || 500, {
          ok: false,
          error: error.message,
          ...(error.code ? { code: error.code } : {}),
          ...(error.field ? { field: error.field } : {}),
          ...(error.currentMaterial !== undefined ? { currentMaterial: error.currentMaterial } : {})
        });
      }
      return true;
    }

    if (request.method === "DELETE" && requestUrl.pathname === "/api/resource-materials") {
      try {
        const materialId = requestUrl.searchParams.get("id");
        if (!materialId) throw new Error("삭제할 자료 ID가 필요합니다.");
        const result = await deleteResourceMaterial(materialId, {
          expectedUpdatedAt: requestUrl.searchParams.get("expectedUpdatedAt") || ""
        });
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, Number(error.statusCode) || 500, {
          ok: false,
          error: error.message,
          ...(error.code ? { code: error.code } : {}),
          ...(error.currentMaterial !== undefined ? { currentMaterial: error.currentMaterial } : {})
        });
      }
      return true;
    }

    return false;
  }

  return Object.freeze({ dispatch, routeSignatures: resourceMaterialRouteSignatures });
}
