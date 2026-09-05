import assert from "node:assert/strict";
import {
  createTestPaperFileRouteRegistry,
  testPaperFileRouteSignatures
} from "../src/shared/server/testPaperFileRouteRegistry.js";

const events = [];
const sends = [];
let rawBody = {};
let teacherSession = { teacherId: "teacher-1" };
let saveResult = { fileName: "a.pdf", fileReference: "test-paper-storage://test-papers/a.pdf", watermarked: true };
let deleteResult = { deleted: true };
let openUrlResult = "https://storage.example.com/signed";
let readJsonBodyOptions = null;
let saveArgs = null;
let deleteArgs = null;
let openArgs = null;
let routeError = null;

const parsedFile = { buffer: Buffer.from("file-bytes"), mimeType: "application/pdf" };

const registry = createTestPaperFileRouteRegistry({
  createFileDigest: (buffer) => `digest:${buffer.toString()}`,
  createTestPaperStorageOperations: () => ({ marker: "storage-operations" }),
  deleteTestPaperFile: async (args) => {
    events.push("delete");
    deleteArgs = args;
    if (routeError?.stage === "delete") throw routeError.error;
    return deleteResult;
  },
  getTeacherSession: () => teacherSession,
  parseDataUrl: () => {
    events.push("parseDataUrl");
    return parsedFile;
  },
  readJsonBody: async (request, options) => {
    events.push("read");
    readJsonBodyOptions = options ?? null;
    return rawBody;
  },
  resolveTestPaperOpenUrl: async (args) => {
    events.push("resolveOpenUrl");
    openArgs = args;
    if (routeError?.stage === "resolveOpenUrl") throw routeError.error;
    return openUrlResult;
  },
  saveTestPaperFile: async (args) => {
    events.push("save");
    saveArgs = args;
    if (routeError?.stage === "save") throw routeError.error;
    return saveResult;
  },
  sendJson: (request, response, statusCode, body) => {
    sends.push({ body, statusCode });
  }
});

function route(method, path, searchParams = {}) {
  const requestUrl = new URL(path, "http://127.0.0.1");
  Object.entries(searchParams).forEach(([key, value]) => requestUrl.searchParams.set(key, value));
  return { request: { method }, response: {}, requestUrl };
}

assert.equal(Object.isFrozen(registry), true);
assert.equal(Object.isFrozen(testPaperFileRouteSignatures), true);
assert.equal(testPaperFileRouteSignatures.every(Object.isFrozen), true);
assert.deepEqual(testPaperFileRouteSignatures, [
  { method: "POST", path: "/api/test-paper-files" },
  { method: "DELETE", path: "/api/test-paper-files" },
  { method: "GET", path: "/api/test-paper-files/open" }
]);

// 등록되지 않은 경로/메서드는 처리하지 않는다
assert.equal(await registry.dispatch(route("GET", "/unknown")), false);
assert.deepEqual(events, []);

// --- POST 업로드 ---
events.length = 0;
rawBody = { file: { dataUrl: "data:application/pdf;base64,xxx", fileName: "a.pdf" }, watermark: true };
assert.equal(await registry.dispatch(route("POST", "/api/test-paper-files")), true);
assert.deepEqual(events, ["read", "parseDataUrl", "save"]);
assert.deepEqual(readJsonBodyOptions, { limitBytes: 28 * 1024 * 1024 });
assert.deepEqual(saveArgs, {
  digest: "digest:file-bytes",
  file: { buffer: parsedFile.buffer, fileName: "a.pdf", mimeType: "application/pdf", size: parsedFile.buffer.length },
  watermark: true,
  operations: { marker: "storage-operations" }
});
assert.deepEqual(sends.at(-1).body, { ok: true, ...saveResult });

// watermark 를 안 보내면 false 로 취급한다
events.length = 0;
rawBody = { file: { dataUrl: "data:application/pdf;base64,xxx", fileName: "a.pdf" } };
await registry.dispatch(route("POST", "/api/test-paper-files"));
assert.equal(saveArgs.watermark, false);

// 교사 세션이 없으면 401
teacherSession = null;
events.length = 0;
assert.equal(await registry.dispatch(route("POST", "/api/test-paper-files")), true);
assert.deepEqual(events, []);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "교사 세션 인증이 필요합니다." });
assert.equal(sends.at(-1).statusCode, 401);
teacherSession = { teacherId: "teacher-1" };

// 저장 실패 시 statusCode/코드를 그대로 전달한다
events.length = 0;
const conflictError = new Error("허용되지 않은 시험지 Storage bucket입니다.");
conflictError.statusCode = 400;
conflictError.code = "TEST_PAPER_STORAGE_REFERENCE_INVALID";
routeError = { error: conflictError, stage: "save" };
await registry.dispatch(route("POST", "/api/test-paper-files"));
assert.equal(sends.at(-1).statusCode, 400);
assert.equal(sends.at(-1).body.code, "TEST_PAPER_STORAGE_REFERENCE_INVALID");
routeError = null;

// --- DELETE ---
events.length = 0;
assert.equal(await registry.dispatch(route("DELETE", "/api/test-paper-files", { ref: "test-paper-storage://test-papers/a.pdf" })), true);
assert.deepEqual(events, ["delete"]);
assert.deepEqual(deleteArgs, { fileUrl: "test-paper-storage://test-papers/a.pdf", operations: { marker: "storage-operations" } });
assert.deepEqual(sends.at(-1).body, { ok: true, ...deleteResult });

teacherSession = null;
events.length = 0;
await registry.dispatch(route("DELETE", "/api/test-paper-files"));
assert.equal(sends.at(-1).statusCode, 401);
teacherSession = { teacherId: "teacher-1" };

// --- GET open ---
events.length = 0;
assert.equal(await registry.dispatch(route("GET", "/api/test-paper-files/open", { ref: "test-paper-storage://test-papers/a.pdf" })), true);
assert.deepEqual(events, ["resolveOpenUrl"]);
assert.deepEqual(openArgs, { fileUrl: "test-paper-storage://test-papers/a.pdf", operations: { marker: "storage-operations" } });
assert.deepEqual(sends.at(-1).body, { ok: true, signedUrl: openUrlResult });

// ref 가 없으면 400
events.length = 0;
await registry.dispatch(route("GET", "/api/test-paper-files/open"));
assert.deepEqual(events, []);
assert.equal(sends.at(-1).statusCode, 400);

teacherSession = null;
events.length = 0;
await registry.dispatch(route("GET", "/api/test-paper-files/open", { ref: "x" }));
assert.equal(sends.at(-1).statusCode, 401);
teacherSession = { teacherId: "teacher-1" };

console.log("test-paper-file-route-registry: 모든 assertion 통과");
