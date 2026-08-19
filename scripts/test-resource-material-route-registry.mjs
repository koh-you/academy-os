import assert from "node:assert/strict";
import {
  createResourceMaterialRouteRegistry,
  resourceMaterialRouteSignatures
} from "../src/shared/server/resourceMaterialRouteRegistry.js";

const events = [];
const sends = [];
let rawBody = {};
let teacherSession = { teacherId: "teacher-1" };
let portalSession = null;
let listResult = { source: "supabase", resourceMaterials: [] };
let saveFileResult = { source: "supabase", material: { materialId: "material-1" }, verified: true };
let deleteFileResult = { source: "supabase", material: { materialId: "material-1" }, verified: true };
let upsertResult = { source: "supabase", material: { materialId: "material-1" }, verified: true };
let deleteResult = { source: "supabase", materialId: "material-1", verified: true };
let openUrlResult = "https://storage.example.com/signed";
let readJsonBodyOptions = null;
let saveFileArgs = null;
let deleteFileArgs = null;
let routeError = null;

const parsedFile = { buffer: Buffer.from("file-bytes"), mimeType: "application/pdf" };

const registry = createResourceMaterialRouteRegistry({
  createFileDigest: (buffer) => `digest:${buffer.toString()}`,
  createResourceMaterialStorageOperations: () => ({ marker: "storage-operations" }),
  deleteResourceMaterial: async (materialId, options) => {
    events.push("delete");
    if (routeError?.stage === "delete") throw routeError.error;
    assert.equal(materialId, "material-1");
    assert.deepEqual(options, { expectedUpdatedAt: "2026-08-01T00:00:00.000Z" });
    return deleteResult;
  },
  deleteResourceMaterialWithFile: async (args) => {
    events.push("deleteFile");
    deleteFileArgs = args;
    if (routeError?.stage === "deleteFile") throw routeError.error;
    return deleteFileResult;
  },
  getTeacherOrPortalSession: () => ({ portalSession, teacherSession }),
  getTeacherSession: () => teacherSession,
  listResourceMaterials: async () => {
    events.push("list");
    if (routeError?.stage === "list") throw routeError.error;
    return listResult;
  },
  parseVersionedWriteRequest: (method, path, body) => {
    events.push("parseVersioned");
    return body;
  },
  parseDataUrl: (dataUrl) => {
    events.push("parseDataUrl");
    return parsedFile;
  },
  readJsonBody: async (request, options) => {
    events.push("read");
    readJsonBodyOptions = options ?? null;
    return rawBody;
  },
  resolveResourceMaterialOpenUrl: async (materialId, sessions) => {
    events.push("resolveOpenUrl");
    if (routeError?.stage === "resolveOpenUrl") throw routeError.error;
    assert.equal(materialId, "material-1");
    assert.deepEqual(sessions, { portalSession, teacherSession });
    return openUrlResult;
  },
  saveResourceMaterialFile: async (args) => {
    events.push("saveFile");
    saveFileArgs = args;
    if (routeError?.stage === "saveFile") throw routeError.error;
    return saveFileResult;
  },
  sendJson: (request, response, statusCode, body) => {
    sends.push({ body, request, response, statusCode });
  },
  upsertResourceMaterial: async (material) => {
    events.push("upsert");
    if (routeError?.stage === "upsert") throw routeError.error;
    return upsertResult;
  }
});

function route(method, path, searchParams = {}) {
  const requestUrl = new URL(path, "http://127.0.0.1");
  Object.entries(searchParams).forEach(([key, value]) => requestUrl.searchParams.set(key, value));
  return {
    request: { method },
    response: { path },
    requestUrl
  };
}

assert.equal(Object.isFrozen(registry), true);
assert.equal(Object.isFrozen(resourceMaterialRouteSignatures), true);
assert.equal(resourceMaterialRouteSignatures.every(Object.isFrozen), true);
assert.deepEqual(resourceMaterialRouteSignatures, [
  { method: "GET", path: "/api/resource-materials" },
  { method: "POST", path: "/api/resource-material-files" },
  { method: "DELETE", path: "/api/resource-material-files" },
  { method: "GET", path: "/api/resource-material-files/open" },
  { method: "POST", path: "/api/resource-materials" },
  { method: "DELETE", path: "/api/resource-materials" }
]);

assert.equal(await registry.dispatch(route("GET", "/unknown")), false);
assert.deepEqual(events, []);

events.length = 0;
assert.equal(await registry.dispatch(route("GET", "/api/resource-materials")), true);
assert.deepEqual(events, ["list"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...listResult });

events.length = 0;
rawBody = { file: { dataUrl: "data:application/pdf;base64,xxx", fileName: "a.pdf" }, material: { title: "자료" } };
assert.equal(await registry.dispatch(route("POST", "/api/resource-material-files")), true);
assert.deepEqual(events, ["read", "parseVersioned", "parseDataUrl", "saveFile"]);
assert.deepEqual(readJsonBodyOptions, { limitBytes: 28 * 1024 * 1024 });
assert.deepEqual(saveFileArgs, {
  digest: "digest:file-bytes",
  file: {
    buffer: parsedFile.buffer,
    fileName: "a.pdf",
    mimeType: "application/pdf",
    size: parsedFile.buffer.length
  },
  material: { title: "자료", createdBy: "teacher-1" },
  operations: { marker: "storage-operations" }
});
assert.deepEqual(sends.at(-1).body, { ok: true, ...saveFileResult });

teacherSession = null;
events.length = 0;
assert.equal(await registry.dispatch(route("POST", "/api/resource-material-files")), true);
assert.deepEqual(events, []);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "교사 세션 인증이 필요합니다." });
assert.equal(sends.at(-1).statusCode, 401);
teacherSession = { teacherId: "teacher-1" };

events.length = 0;
rawBody = { material: { materialId: "material-1" } };
assert.equal(await registry.dispatch(route("DELETE", "/api/resource-material-files")), true);
assert.deepEqual(events, ["read", "parseVersioned", "deleteFile"]);
assert.deepEqual(deleteFileArgs, { material: rawBody.material, operations: { marker: "storage-operations" } });
assert.deepEqual(sends.at(-1).body, { ok: true, ...deleteFileResult });

events.length = 0;
assert.equal(
  await registry.dispatch(route("GET", "/api/resource-material-files/open", { id: "material-1" })),
  true
);
assert.deepEqual(events, ["resolveOpenUrl"]);
assert.deepEqual(sends.at(-1).body, { ok: true, signedUrl: openUrlResult });

events.length = 0;
assert.equal(await registry.dispatch(route("GET", "/api/resource-material-files/open")), true);
assert.deepEqual(events, []);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "열람할 자료 ID가 필요합니다." });
assert.equal(sends.at(-1).statusCode, 400);

teacherSession = null;
portalSession = null;
events.length = 0;
assert.equal(
  await registry.dispatch(route("GET", "/api/resource-material-files/open", { id: "material-1" })),
  true
);
assert.deepEqual(events, []);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "자료 열람 세션 인증이 필요합니다. 다시 로그인해 주세요." });
assert.equal(sends.at(-1).statusCode, 401);
teacherSession = { teacherId: "teacher-1" };

events.length = 0;
rawBody = { material: { materialId: "material-1", title: "새 자료" } };
assert.equal(await registry.dispatch(route("POST", "/api/resource-materials")), true);
assert.deepEqual(events, ["read", "parseVersioned", "upsert"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...upsertResult });

events.length = 0;
assert.equal(
  await registry.dispatch(route("DELETE", "/api/resource-materials", { id: "material-1", expectedUpdatedAt: "2026-08-01T00:00:00.000Z" })),
  true
);
assert.deepEqual(events, ["delete"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...deleteResult });

events.length = 0;
assert.equal(await registry.dispatch(route("DELETE", "/api/resource-materials")), true);
assert.deepEqual(events, []);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "삭제할 자료 ID가 필요합니다." });

routeError = {
  stage: "delete",
  error: Object.assign(new Error("삭제 실패"), {
    code: "RESOURCE_MATERIAL_CONFLICT",
    currentMaterial: { materialId: "material-1", title: "충돌 자료" },
    statusCode: 409
  })
};
assert.equal(
  await registry.dispatch(route("DELETE", "/api/resource-materials", { id: "material-1" })),
  true
);
assert.deepEqual(sends.at(-1).body, {
  ok: false,
  error: "삭제 실패",
  code: "RESOURCE_MATERIAL_CONFLICT",
  currentMaterial: { materialId: "material-1", title: "충돌 자료" }
});
assert.equal(sends.at(-1).statusCode, 409);

routeError = { stage: "list", error: new Error("source failed") };
assert.equal(await registry.dispatch(route("GET", "/api/resource-materials")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "source failed" });
assert.equal(sends.at(-1).statusCode, 500);

console.log("resource material route registry list, upload, delete, open, upsert, delete, and error contracts passed");
