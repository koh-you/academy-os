import assert from "node:assert/strict";
import { EventEmitter } from "node:events";
import {
  createHttpRouteAdapter,
  getCorsOrigin,
  getRequestHeader,
  parseAllowedOrigins,
  readJsonBody,
  sendJson
} from "../src/shared/server/httpRouteAdapter.js";

class FakeRequest extends EventEmitter {
  constructor({ headers = {} } = {}) {
    super();
    this.headers = headers;
    this.destroyed = false;
  }

  destroy() {
    this.destroyed = true;
  }
}

function readChunks(chunks, options) {
  const request = new FakeRequest();
  const result = readJsonBody(request, options);
  queueMicrotask(() => {
    for (const chunk of chunks) request.emit("data", chunk);
    request.emit("end");
  });
  return { request, result };
}

assert.deepEqual(parseAllowedOrigins(" https://one.test,https://two.test, "), [
  "https://one.test",
  "https://two.test"
]);
assert.deepEqual(parseAllowedOrigins(undefined), ["*"]);
assert.deepEqual(parseAllowedOrigins(""), []);

assert.equal(getRequestHeader({ headers: { authorization: "Bearer lower" } }, "Authorization"), "Bearer lower");
assert.equal(getRequestHeader({ headers: { Authorization: "Bearer exact" } }, "Authorization"), "Bearer exact");
assert.equal(getRequestHeader({ headers: {} }, "Authorization"), "");

assert.equal(getCorsOrigin({ headers: { origin: "https://one.test" } }, ["*"]), "*");
assert.equal(
  getCorsOrigin({ headers: { origin: "https://two.test" } }, ["https://one.test", "https://two.test"]),
  "https://two.test"
);
assert.equal(
  getCorsOrigin({ headers: { origin: "https://unknown.test" } }, ["https://one.test", "https://two.test"]),
  "https://one.test"
);
assert.equal(getCorsOrigin({ headers: {} }, []), "*");

assert.deepEqual(await readChunks([], {}).result, {});
assert.deepEqual(await readChunks(["{\"value\":" , "7}"], {}).result, { value: 7 });
const koreanBody = Buffer.from(JSON.stringify({ title: "RPM ~477번, 개념원리" }));
const koreanMarkerIndex = koreanBody.indexOf(Buffer.from("번"));
assert.ok(koreanMarkerIndex >= 0);
assert.deepEqual(
  await readChunks([
    koreanBody.subarray(0, koreanMarkerIndex + 1),
    koreanBody.subarray(koreanMarkerIndex + 1, koreanMarkerIndex + 2),
    koreanBody.subarray(koreanMarkerIndex + 2)
  ], {}).result,
  { title: "RPM ~477번, 개념원리" }
);
await assert.rejects(readChunks(["{"], {}).result, /JSON 형식이 올바르지 않습니다/);
const oversized = readChunks(["{\"value\":\"12345\"}"], { limitBytes: 8 });
await assert.rejects(oversized.result, /요청 본문이 너무 큽니다/);
assert.equal(oversized.request.destroyed, true);

const response = {
  body: "",
  headers: null,
  statusCode: null,
  end(body) {
    this.body = body;
  },
  writeHead(statusCode, headers) {
    this.statusCode = statusCode;
    this.headers = headers;
  }
};
sendJson(
  { headers: { origin: "https://two.test" } },
  response,
  202,
  { ok: true },
  { allowedOrigins: ["https://one.test", "https://two.test"] }
);
assert.equal(response.statusCode, 202);
assert.equal(response.headers["Access-Control-Allow-Origin"], "https://two.test");
assert.equal(response.headers["Access-Control-Allow-Headers"], "Content-Type,Tally-Signature,Authorization,X-Kiosk-Token");
assert.equal(response.headers["Access-Control-Allow-Methods"], "GET,POST,DELETE,OPTIONS");
assert.equal(response.headers["Content-Type"], "application/json; charset=utf-8");
assert.equal(response.body, "{\"ok\":true}");

const adapter = createHttpRouteAdapter({ allowedOrigins: ["https://one.test"] });
assert.equal(Object.isFrozen(adapter), true);
const preflightResponse = { ...response, body: "", headers: null, statusCode: null };
adapter.sendJson({ headers: {} }, preflightResponse, 204, {});
assert.equal(preflightResponse.statusCode, 204);
assert.equal(preflightResponse.headers["Access-Control-Allow-Origin"], "https://one.test");
assert.equal(preflightResponse.body, "{}");

console.log("HTTP route adapter UTF-8 body, limit, CORS, header, response, and preflight contracts passed");
