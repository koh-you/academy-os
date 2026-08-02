import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  attendanceDateRolloverIntervalMs,
  attendanceSyncIntervalMs,
  startAttendanceDateRolloverLifecycle,
  startAttendanceSyncLifecycle
} from "../src/domains/lessons/useAttendanceRecordSync.js";

class FakeEventTarget {
  constructor() {
    this.listeners = new Map();
    this.visibilityState = "visible";
  }

  addEventListener(name, listener) {
    const listeners = this.listeners.get(name) ?? new Set();
    listeners.add(listener);
    this.listeners.set(name, listeners);
  }

  dispatch(name) {
    for (const listener of this.listeners.get(name) ?? []) {
      listener();
    }
  }

  listenerCount(name) {
    return this.listeners.get(name)?.size ?? 0;
  }

  removeEventListener(name, listener) {
    this.listeners.get(name)?.delete(listener);
  }
}

class FakeWindowTarget extends FakeEventTarget {
  constructor() {
    super();
    this.clearedIntervalIds = [];
    this.intervals = new Map();
    this.nextIntervalId = 1;
  }

  clearInterval(intervalId) {
    this.clearedIntervalIds.push(intervalId);
    this.intervals.delete(intervalId);
  }

  runInterval(intervalId) {
    this.intervals.get(intervalId)?.callback();
  }

  setInterval(callback, delay) {
    const intervalId = this.nextIntervalId;
    this.nextIntervalId += 1;
    this.intervals.set(intervalId, { callback, delay });
    return intervalId;
  }
}

function createDeferred() {
  let resolve;
  const promise = new Promise((nextResolve) => {
    resolve = nextResolve;
  });
  return { promise, resolve };
}

const documentTarget = new FakeEventTarget();
const windowTarget = new FakeWindowTarget();
const firstRun = createDeferred();
const disposedChecks = [];
let runCount = 0;
const cleanup = startAttendanceSyncLifecycle({
  documentTarget,
  runSync: async (isDisposed) => {
    runCount += 1;
    disposedChecks.push(isDisposed);
    if (runCount === 1) await firstRun.promise;
  },
  windowTarget
});

await Promise.resolve();
assert.equal(runCount, 1, "lifecycle must sync immediately");
assert.equal(windowTarget.listenerCount("focus"), 1);
assert.equal(documentTarget.listenerCount("visibilitychange"), 1);
assert.equal(windowTarget.intervals.size, 1);
const [[intervalId, interval]] = windowTarget.intervals.entries();
assert.equal(interval.delay, attendanceSyncIntervalMs);

windowTarget.dispatch("focus");
windowTarget.runInterval(intervalId);
assert.equal(runCount, 1, "in-flight sync must block duplicate triggers");

firstRun.resolve();
await firstRun.promise;
await Promise.resolve();
documentTarget.visibilityState = "hidden";
windowTarget.dispatch("focus");
documentTarget.dispatch("visibilitychange");
windowTarget.runInterval(intervalId);
assert.equal(runCount, 1, "hidden document must not sync");

documentTarget.visibilityState = "visible";
documentTarget.dispatch("visibilitychange");
await Promise.resolve();
assert.equal(runCount, 2, "visible document event must sync");

windowTarget.runInterval(intervalId);
await Promise.resolve();
assert.equal(runCount, 3, "interval must sync after the previous run completes");

assert.equal(disposedChecks[0](), false);
cleanup();
assert.equal(disposedChecks[0](), true);
assert.deepEqual(windowTarget.clearedIntervalIds, [intervalId]);
assert.equal(windowTarget.listenerCount("focus"), 0);
assert.equal(documentTarget.listenerCount("visibilitychange"), 0);
windowTarget.dispatch("focus");
documentTarget.dispatch("visibilitychange");
assert.equal(runCount, 3, "cleanup must stop all triggers");

const rolloverDocument = new FakeEventTarget();
const rolloverWindow = new FakeWindowTarget();
const loadedDateRef = { current: "2026-08-01" };
let currentDate = "2026-08-01";
let isReady = true;
let reloadCount = 0;
let cleanupRollover = startAttendanceDateRolloverLifecycle({
  documentTarget: rolloverDocument,
  getCurrentDate: () => currentDate,
  isReady,
  loadedDateRef,
  onReloadRequested: () => { reloadCount += 1; },
  windowTarget: rolloverWindow
});
const [[rolloverIntervalId, rolloverInterval]] = rolloverWindow.intervals.entries();
assert.equal(rolloverInterval.delay, attendanceDateRolloverIntervalMs);
rolloverWindow.dispatch("focus");
assert.equal(reloadCount, 0, "ready data for the current date must not reload");
currentDate = "2026-08-02";
rolloverDocument.dispatch("visibilitychange");
assert.equal(reloadCount, 1, "date rollover must request hydration reload");
assert.equal(loadedDateRef.current, "2026-08-02");
cleanupRollover();
rolloverWindow.runInterval(rolloverIntervalId);
assert.equal(reloadCount, 1, "cleanup must stop rollover triggers");

isReady = false;
cleanupRollover = startAttendanceDateRolloverLifecycle({
  documentTarget: rolloverDocument,
  getCurrentDate: () => currentDate,
  isReady,
  loadedDateRef,
  onReloadRequested: () => { reloadCount += 1; },
  windowTarget: rolloverWindow
});
rolloverWindow.dispatch("focus");
assert.equal(reloadCount, 2, "failed same-date hydration must remain retryable");
cleanupRollover();

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const hookSource = await readFile(
  new URL("../src/domains/lessons/useAttendanceRecordSync.js", import.meta.url),
  "utf8"
);
for (const expected of [
  "useAttendanceRecordSync({",
  "useAttendanceDateRollover({",
  "startAttendanceSyncLifecycle({",
  "startAttendanceDateRolloverLifecycle({",
  "syncAttendanceRecordsAction({",
  "windowTarget.setInterval(",
  'windowTarget.addEventListener("focus"',
  'documentTarget.addEventListener("visibilitychange"',
  "windowTarget.clearInterval(intervalId)",
  'windowTarget.removeEventListener("focus"',
  'documentTarget.removeEventListener("visibilitychange"'
]) {
  assert.equal(hookSource.includes(expected), true, `missing sync hook boundary: ${expected}`);
}
assert.equal(appSource.includes("useAttendanceRecordSync({"), true);
assert.equal(appSource.includes("useAttendanceDateRollover({"), true);
for (const movedBoundary of [
  "async function syncAttendanceRecords()",
  "window.setInterval(syncAttendanceRecords, 7_000)",
  'window.addEventListener("focus", syncAttendanceRecords)',
  'document.addEventListener("visibilitychange", syncAttendanceRecords)',
  "function refreshAttendanceDataIfDateChanged()",
  "setAttendanceReloadKey((current) => current + 1)"
]) {
  assert.equal(appSource.includes(movedBoundary), false, `App must not keep ${movedBoundary}`);
}
for (const forbidden of [
  "postJson",
  "/api/attendance/",
  "notification_jobs",
  "Supabase",
  "Solapi"
]) {
  assert.equal(hookSource.includes(forbidden), false, `sync hook must not own ${forbidden}`);
}

console.log("attendance sync hook lifecycle fixtures passed");
