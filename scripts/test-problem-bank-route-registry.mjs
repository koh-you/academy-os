import assert from "node:assert/strict";
import {
  createProblemBankRouteRegistry,
  problemBankRouteSignatures
} from "../src/shared/server/problemBankRouteRegistry.js";

const sends = [];
const calls = [];
let teacherSession = { teacherId: "teacher-1" };
let rawBody = {};
let readOptions = null;

const registry = createProblemBankRouteRegistry({
  getTeacherSession: () => teacherSession,
  listProblemBankBooks: async () => {
    calls.push("listBooks");
    return [{ bookId: "pbk_1", title: "RPM", units: [] }];
  },
  updateProblemBankBook: async (bookId, patch) => {
    calls.push(`update:${bookId}:${JSON.stringify(patch)}`);
    return { bookId, ...patch };
  },
  deleteProblemBankBook: async (bookId) => {
    calls.push(`delete:${bookId}`);
    return { bookId, deletedAttempts: 2, deletedImages: 3 };
  },
  getProblemBankBook: async (bookId) => {
    calls.push(`getBook:${bookId}`);
    if (!bookId) {
      const error = new Error("교재 ID가 필요합니다.");
      error.statusCode = 400;
      throw error;
    }
    return { book: { bookId }, units: [], items: [] };
  },
  resolveProblemBankItemImages: async (itemIds) => {
    calls.push(`images:${itemIds.join(",")}`);
    return itemIds.map((itemId) => ({ itemId, kind: "body", url: `signed://${itemId}` }));
  },
  importProblemBankManifest: async (manifest) => {
    calls.push(`import:${manifest.book.book_id}`);
    return { bookId: manifest.book.book_id, itemCount: manifest.items.length };
  },
  uploadProblemBankImages: async (bookId, files) => {
    calls.push(`upload:${bookId}:${files.map((file) => `${file.file}/${file.mimeType}/${file.buffer.toString()}`).join("|")}`);
    return { bookId, uploaded: files.map((file) => file.file) };
  },
  listProblemBankAttempts: async (query) => {
    calls.push(`attempts:${query.bookId}:${query.studentId}`);
    return [];
  },
  saveProblemBankAttempts: async (entries) => {
    calls.push(`save:${entries.length}`);
    return { attempts: entries, cleared: [] };
  },
  parseDataUrl: (dataUrl) => ({ buffer: Buffer.from(String(dataUrl).split(",")[1] ?? "", "base64"), mimeType: "image/jpeg" }),
  readJsonBody: async (request, options) => {
    readOptions = options ?? null;
    return rawBody;
  },
  sendJson: (request, response, statusCode, body) => sends.push({ statusCode, body })
});

function makeRequest(method, path) {
  return { request: { method }, response: {}, requestUrl: new URL(`http://localhost${path}`) };
}

assert.deepEqual(problemBankRouteSignatures.map((signature) => `${signature.method} ${signature.path}`), [
  "GET /api/problem-bank/books",
  "GET /api/problem-bank/book",
  "POST /api/problem-bank/book",
  "DELETE /api/problem-bank/book",
  "POST /api/problem-bank/item-images",
  "POST /api/problem-bank/import",
  "POST /api/problem-bank/images",
  "GET /api/problem-bank/attempts",
  "POST /api/problem-bank/attempts"
]);
assert.equal(registry.routeSignatures, problemBankRouteSignatures);

// 다른 경로는 건드리지 않는다.
assert.equal(await registry.dispatch(makeRequest("GET", "/api/students")), false);

// 세션 없으면 401.
teacherSession = null;
assert.equal(await registry.dispatch(makeRequest("GET", "/api/problem-bank/books")), true);
assert.equal(sends.at(-1).statusCode, 401);
teacherSession = { teacherId: "teacher-1" };

assert.equal(await registry.dispatch(makeRequest("GET", "/api/problem-bank/books")), true);
assert.deepEqual(sends.at(-1), { statusCode: 200, body: { ok: true, books: [{ bookId: "pbk_1", title: "RPM", units: [] }] } });

assert.equal(await registry.dispatch(makeRequest("GET", "/api/problem-bank/book?bookId=pbk_1")), true);
assert.equal(sends.at(-1).body.book.bookId, "pbk_1");
assert.equal(await registry.dispatch(makeRequest("GET", "/api/problem-bank/book")), true);
assert.equal(sends.at(-1).statusCode, 400);
assert.equal(sends.at(-1).body.ok, false);

rawBody = { bookId: "pbk_1", patch: { title: "RPM 새 제목", folderPath: "중3 / RPM" } };
assert.equal(await registry.dispatch(makeRequest("POST", "/api/problem-bank/book")), true);
assert.deepEqual(sends.at(-1).body, { ok: true, book: { bookId: "pbk_1", title: "RPM 새 제목", folderPath: "중3 / RPM" } });
assert.equal(await registry.dispatch(makeRequest("DELETE", "/api/problem-bank/book?bookId=pbk_1")), true);
assert.deepEqual(sends.at(-1).body, { ok: true, bookId: "pbk_1", deletedAttempts: 2, deletedImages: 3 });
assert.ok(calls.includes("delete:pbk_1"));

rawBody = { itemIds: ["pbk_1-0001", "pbk_1-0002"] };
assert.equal(await registry.dispatch(makeRequest("POST", "/api/problem-bank/item-images")), true);
assert.deepEqual(sends.at(-1).body.regions.map((region) => region.url), ["signed://pbk_1-0001", "signed://pbk_1-0002"]);

rawBody = { manifest: { book: { book_id: "pbk_abc" }, items: [{}, {}] } };
assert.equal(await registry.dispatch(makeRequest("POST", "/api/problem-bank/import")), true);
assert.deepEqual(sends.at(-1).body, { ok: true, bookId: "pbk_abc", itemCount: 2 });
assert.equal(readOptions.limitBytes, 12 * 1024 * 1024);

rawBody = { bookId: "pbk_abc", files: [{ file: "items/pbk_abc-0001.jpg", dataUrl: "data:image/jpeg;base64,aGVsbG8=" }] };
assert.equal(await registry.dispatch(makeRequest("POST", "/api/problem-bank/images")), true);
assert.deepEqual(sends.at(-1).body, { ok: true, bookId: "pbk_abc", uploaded: ["items/pbk_abc-0001.jpg"] });
assert.ok(calls.includes("upload:pbk_abc:items/pbk_abc-0001.jpg/image/jpeg/hello"));
assert.equal(readOptions.limitBytes, 28 * 1024 * 1024);

assert.equal(await registry.dispatch(makeRequest("GET", "/api/problem-bank/attempts?bookId=pbk_1&studentId=s1")), true);
assert.ok(calls.includes("attempts:pbk_1:s1"));

rawBody = { entries: [{ studentId: "s1", bookId: "pbk_1", itemId: "pbk_1-0001", round: 1, result: "wrong" }] };
assert.equal(await registry.dispatch(makeRequest("POST", "/api/problem-bank/attempts")), true);
assert.equal(sends.at(-1).body.attempts.length, 1);
assert.ok(calls.includes("save:1"));

console.log("problem bank route registry fixtures passed");
