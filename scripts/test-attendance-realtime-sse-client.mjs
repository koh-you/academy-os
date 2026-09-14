import assert from "node:assert/strict";
import { setApiAuthToken, setViewTenantId } from "../src/shared/utils/apiClient.js";
import { createAttendanceRealtimeSubscriptionFactory } from "../src/domains/lessons/attendanceRealtimeSseClient.js";

setApiAuthToken("fixture-teacher-token");
setViewTenantId("tenant-view");
const encoder = new TextEncoder();
const chunks = [
  "event: ready\ndata: {\"ok\":true}\n\nevent: cha",
  "nge\ndata: {\"eventType\":\"UPDATE\",\"table\":\"lesson_student_records\"}\n\n",
  "event: status\ndata: {\"status\":\"CHANNEL_ERROR\"}\n\n"
].map((value) => encoder.encode(value));
let request;
const stream = new ReadableStream({ start(controller) { for (const chunk of chunks) controller.enqueue(chunk); controller.close(); } });
const factory = createAttendanceRealtimeSubscriptionFactory({
  date: "2026-09-14",
  fetchImpl: async (url, options) => { request = { options, url }; return new Response(stream); },
  realtimeEnabled: true
});
const events = [];
const statuses = [];
const stop = factory({ onEvent: (event) => events.push(event), onStatus: (status) => statuses.push(status) });
await new Promise((resolve) => setTimeout(resolve, 0));
assert.match(request.url, /\/api\/lesson-records\/realtime\?date=2026-09-14$/);
assert.equal(request.options.headers.Authorization, "Bearer fixture-teacher-token");
assert.equal(request.options.headers["X-View-Tenant-Id"], "tenant-view");
assert.deepEqual(events, [{ eventType: "UPDATE", table: "lesson_student_records" }]);
assert.deepEqual(statuses, ["SUBSCRIBED", "CHANNEL_ERROR", "CLOSED"]);
stop();
assert.equal(request.options.signal.aborted, true);

const errors = [];
const unavailable = createAttendanceRealtimeSubscriptionFactory({
  date: "2026-09-14", fetchImpl: async () => new Response("", { status: 503 }), realtimeEnabled: true
});
unavailable({ onEvent() {}, onStatus: (status) => errors.push(status) });
await new Promise((resolve) => setTimeout(resolve, 0));
assert.deepEqual(errors, ["CHANNEL_ERROR"]);
assert.equal(createAttendanceRealtimeSubscriptionFactory({ date: "2026-09-14", realtimeEnabled: false }), undefined);
setApiAuthToken("");
setViewTenantId("");
console.log("attendance realtime authenticated SSE parsing, failure, and cleanup contracts passed");
