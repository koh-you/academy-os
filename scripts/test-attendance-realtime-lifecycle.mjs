import assert from "node:assert/strict";
import {
  attendanceRealtimeEvents,
  attendanceRealtimeTable,
  isAttendanceRealtimeEvent,
  startAttendanceRealtimeLifecycle
} from "../src/domains/lessons/attendanceRealtimeLifecycle.js";

class FakeTarget {
  constructor() {
    this.listeners = new Map();
    this.visibilityState = "visible";
    this.navigator = { onLine: true };
  }
  addEventListener(name, callback) {
    const listeners = this.listeners.get(name) ?? new Set();
    listeners.add(callback);
    this.listeners.set(name, listeners);
  }
  removeEventListener(name, callback) { this.listeners.get(name)?.delete(callback); }
  dispatch(name) { for (const callback of this.listeners.get(name) ?? []) callback(); }
}

assert.equal(attendanceRealtimeTable, "lesson_student_records");
assert.deepEqual(attendanceRealtimeEvents, ["INSERT", "UPDATE", "DELETE"]);
assert.equal(isAttendanceRealtimeEvent({ table: attendanceRealtimeTable, eventType: "UPDATE" }), true);
assert.equal(isAttendanceRealtimeEvent({ table: "notification_jobs", eventType: "UPDATE" }), false);
assert.equal(isAttendanceRealtimeEvent({ table: attendanceRealtimeTable, eventType: "TRUNCATE" }), false);

const documentTarget = new FakeTarget();
const windowTarget = new FakeTarget();
let pollingStarts = 0;
let pollingStops = 0;
let subscriptionStops = 0;
let subscriptionOptions;
const refreshReasons = [];
const cleanup = startAttendanceRealtimeLifecycle({
  createSubscription(options) {
    subscriptionOptions = options;
    return () => { subscriptionStops += 1; };
  },
  documentTarget,
  onSourceRefresh: async (reason) => { refreshReasons.push(reason); },
  startPolling() {
    pollingStarts += 1;
    return () => { pollingStops += 1; };
  },
  windowTarget
});

assert.equal(pollingStarts, 1, "polling starts alongside the realtime subscription");
assert.equal(subscriptionOptions.table, "lesson_student_records");
assert.deepEqual(subscriptionOptions.events, ["INSERT", "UPDATE", "DELETE"]);
subscriptionOptions.onStatus("SUBSCRIBED");
await Promise.resolve();
assert.equal(
  pollingStops,
  0,
  "a subscribed transport cannot disable polling before event delivery is proven"
);
assert.deepEqual(refreshReasons, ["realtime-subscribed"]);

const event = {
  eventType: "UPDATE",
  new: { id: "record-1", updated_at: "2026-09-14T08:00:00.000Z" },
  table: "lesson_student_records"
};
subscriptionOptions.onEvent(event);
await Promise.resolve();
subscriptionOptions.onEvent(event);
await Promise.resolve();
assert.deepEqual(refreshReasons, ["realtime-subscribed", "realtime-event"], "duplicate events refresh once");

subscriptionOptions.onStatus("CHANNEL_ERROR");
assert.equal(pollingStarts, 1, "channel errors keep the existing polling fallback active");
documentTarget.visibilityState = "hidden";
documentTarget.dispatch("visibilitychange");
assert.equal(refreshReasons.length, 2, "hidden tabs do not refresh");
documentTarget.visibilityState = "visible";
documentTarget.dispatch("visibilitychange");
await Promise.resolve();
assert.equal(refreshReasons.at(-1), "resume", "tab resume re-reads the API source");

windowTarget.navigator.onLine = false;
windowTarget.dispatch("offline");
windowTarget.navigator.onLine = true;
windowTarget.dispatch("online");
await Promise.resolve();
assert.equal(refreshReasons.at(-1), "online", "online recovery re-reads the API source");

cleanup();
assert.equal(pollingStops, 1, "cleanup stops the polling fallback");
const refreshCountAfterCleanup = refreshReasons.length;
windowTarget.dispatch("focus");
subscriptionOptions.onEvent({ ...event, new: { id: "record-2" } });
await Promise.resolve();
assert.equal(refreshReasons.length, refreshCountAfterCleanup, "cleanup blocks later refreshes");
assert.equal(subscriptionStops >= 1, true);

console.log("attendance realtime lifecycle and polling fallback contracts passed");
