import assert from "node:assert/strict";
import { createAttendanceSupabaseRealtimeProvider } from "../src/shared/server/attendanceSupabaseRealtimeProvider.js";

assert.equal(createAttendanceSupabaseRealtimeProvider({ enabled: false }), undefined);
assert.equal(createAttendanceSupabaseRealtimeProvider({ enabled: true, serviceRoleKey: "", supabaseUrl: "x" }), undefined);

const calls = { channels: [], removed: [] };
const logEntries = [];
function createSupabaseClient(url, key, options) {
  assert.equal(url, "https://fixture.supabase.test");
  assert.equal(key, "fixture-service-role");
  assert.deepEqual(options.auth, { autoRefreshToken: false, persistSession: false });
  return {
    realtime: { setAuth(value) { assert.equal(value, "fixture-service-role"); } },
    channel(name, channelOptions) {
      const fixture = {
        callback: null,
        filter: null,
        name,
        channelOptions,
        statusCallback: null,
        on(_type, filter, callback) { this.filter = filter; this.callback = callback; return this; },
        subscribe(callback) { this.statusCallback = callback; return this; }
      };
      calls.channels.push(fixture);
      return fixture;
    },
    removeChannel(channel) { calls.removed.push(channel); return Promise.resolve(); }
  };
}

const provider = createAttendanceSupabaseRealtimeProvider({
  createSupabaseClient,
  enabled: true,
  logger: { info: (...args) => logEntries.push(args) },
  serviceRoleKey: "fixture-service-role",
  supabaseUrl: "https://fixture.supabase.test"
});
const changesA = [];
const changesB = [];
const statuses = [];
const stopA = provider.subscribeToAttendanceChanges({
  onChange: (change) => changesA.push(change), onStatus: (status) => statuses.push(status), tenantId: "tenant-a"
});
const stopB = provider.subscribeToAttendanceChanges({ onChange: (change) => changesB.push(change), tenantId: "tenant-a" });
assert.equal(calls.channels.length, 1);
assert.deepEqual(calls.channels[0].filter, {
  event: "lesson_student_records_changed"
});
assert.deepEqual(calls.channels[0].channelOptions, { config: { private: true } });
calls.channels[0].statusCallback("SUBSCRIBED");
assert.deepEqual(statuses, ["SUBSCRIBED"]);
calls.channels[0].callback({
  event: "lesson_student_records_changed",
  payload: {
    payload: { private_note: "never forward" },
    type: "UPDATE"
  },
  type: "broadcast"
});
assert.deepEqual(changesA, [{ eventType: "UPDATE", table: "lesson_student_records" }]);
assert.deepEqual(changesB, changesA);
assert.doesNotMatch(JSON.stringify(changesA), /private_note|never forward/);
calls.channels[0].callback({
  payload: { payload: { eventType: "DELETE", old: { private_note: "still never forward" } } }
});
assert.deepEqual(changesA.at(-1), { eventType: "DELETE", table: "lesson_student_records" });
assert.deepEqual(changesB, changesA);
assert.doesNotMatch(JSON.stringify(changesA), /private_note|never forward/);
calls.channels[0].callback({
  payload: { event_type: "INSERT", record: { private_note: "snake case stays private" } },
  type: "broadcast"
});
assert.deepEqual(changesA.at(-1), { eventType: "INSERT", table: "lesson_student_records" });
assert.doesNotMatch(JSON.stringify(changesA), /private_note|snake case stays private/);
calls.channels[0].callback({
  event: "lesson_student_records_changed",
  payload: { data: { type: "UPDATE", record: { private_note: "deep row stays private" } } },
  type: "broadcast"
});
assert.deepEqual(changesA.at(-1), { eventType: "UPDATE", table: "lesson_student_records" });
assert.doesNotMatch(JSON.stringify(changesA), /private_note|deep row stays private/);
assert.equal(logEntries.some(([, payload]) => payload.includes('"stage":"listener_added"')), true);
assert.equal(logEntries.some(([, payload]) => payload.includes('"stage":"channel_status"')), true);
assert.equal(logEntries.some(([, payload]) => payload.includes('"stage":"broadcast_received"')), true);
assert.equal(logEntries.some(([, payload]) => payload.includes("tenant")), false, "diagnostics redact tenant identity");
stopA();
assert.equal(calls.removed.length, 0);
stopB();
assert.equal(calls.removed.length, 1);
assert.equal(logEntries.some(([, payload]) => payload.includes('"stage":"listener_removed"')), true);

provider.subscribeToAttendanceChanges({ onChange() {}, tenantId: "tenant-b" });
assert.equal(calls.channels.length, 2);
console.log("attendance Supabase provider scope, fan-out, redaction, status, and cleanup contracts passed");
