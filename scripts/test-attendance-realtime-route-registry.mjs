import assert from "node:assert/strict";
import { EventEmitter } from "node:events";
import { createAttendanceRealtimeRouteRegistry } from "../src/shared/server/attendanceRealtimeRouteRegistry.js";

function createFixture({ auth = { kind: "teacher", tenantId: "tenant-a" }, date = "2026-09-14", subscribe } = {}) {
  const request = new EventEmitter();
  request.method = "GET";
  request.__auth = auth;
  request.__tenantId = auth.tenantId;
  const response = {
    body: "",
    headers: null,
    status: null,
    end(value = "") { this.body += value; },
    write(value) { this.body += value; },
    writeHead(status, headers) { this.status = status; this.headers = headers; }
  };
  const registry = createAttendanceRealtimeRouteRegistry({ subscribeToAttendanceChanges: subscribe });
  return {
    registry,
    request,
    response,
    requestUrl: new URL(`http://localhost/api/lesson-records/realtime?date=${date}`)
  };
}

let receivedScope;
let onChange;
let unsubscribeCount = 0;
const fixture = createFixture({
  subscribe(scope) {
    receivedScope = scope;
    onChange = scope.onChange;
    return () => { unsubscribeCount += 1; };
  }
});
assert.equal(await fixture.registry.dispatch(fixture), true);
assert.equal(fixture.response.status, 200);
assert.equal(fixture.response.headers["Content-Type"], "text/event-stream; charset=utf-8");
assert.deepEqual(
  { date: receivedScope.date, tenantId: receivedScope.tenantId },
  { date: "2026-09-14", tenantId: "tenant-a" }
);
assert.match(fixture.response.body, /event: ready/);
onChange({ eventType: "UPDATE", record: { private_note: "must not leak" } });
assert.match(fixture.response.body, /event: change/);
assert.doesNotMatch(fixture.response.body, /private_note|must not leak|tenant-a/);
fixture.request.emit("close");
assert.equal(unsubscribeCount, 1);

const nonTeacher = createFixture({ auth: { kind: "kiosk", tenantId: "tenant-a" }, subscribe() {} });
assert.equal(await nonTeacher.registry.dispatch(nonTeacher), true);
assert.equal(nonTeacher.response.status, 403);

const invalidDate = createFixture({ date: "all", subscribe() {} });
await invalidDate.registry.dispatch(invalidDate);
assert.equal(invalidDate.response.status, 422);

const unavailable = createFixture();
await unavailable.registry.dispatch(unavailable);
assert.equal(unavailable.response.status, 503);
assert.match(unavailable.response.body, /realtime_unavailable/);

const unrelated = createFixture({ subscribe() {} });
unrelated.requestUrl = new URL("http://localhost/api/lesson-records");
assert.equal(await unrelated.registry.dispatch(unrelated), false);

console.log("attendance realtime SSE route auth, scope, redaction, and cleanup contracts passed");
