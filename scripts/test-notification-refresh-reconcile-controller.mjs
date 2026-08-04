import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  createNotificationJobsDateRange,
  createNotificationJobsRefreshController
} from "../src/domains/notifications/notificationJobsRefreshController.js";
import { createNotificationJobsReconcileController } from "../src/domains/notifications/notificationJobsReconcileController.js";

function createDeferred() {
  let reject;
  let resolve;
  const promise = new Promise((nextResolve, nextReject) => {
    resolve = nextResolve;
    reject = nextReject;
  });
  return { promise, reject, resolve };
}

assert.deepEqual(createNotificationJobsDateRange("invalid"), {
  scheduledFrom: "",
  scheduledTo: ""
});
assert.deepEqual(createNotificationJobsDateRange("2026-08-02"), {
  scheduledFrom: "2026-08-01T15:00:00.000Z",
  scheduledTo: "2026-08-02T15:00:00.000Z"
});

const firstHistory = createDeferred();
const secondHistory = createDeferred();
const refreshRequests = [];
const jobUpdates = [];
const statusUpdates = [];
const refreshController = createNotificationJobsRefreshController({
  onJobs: (update) => jobUpdates.push(update),
  onStatus: (status) => statusUpdates.push(status),
  request: async (url, timeout, timeoutMessage) => {
    refreshRequests.push({ timeout, timeoutMessage, url });
    return refreshRequests.length === 1 ? firstHistory.promise : secondHistory.promise;
  }
});

const firstPromise = refreshController.refresh({ date: "2026-08-01", scope: "history" });
const duplicatePromise = refreshController.refresh({ date: "2026-08-01", scope: "history" });
assert.equal(firstPromise, duplicatePromise, "same in-flight query must share one promise");
assert.equal(refreshRequests.length, 1);
assert.equal(refreshRequests[0].timeout, 12000);
assert.match(refreshRequests[0].url, /scheduledFrom=2026-07-31T15%3A00%3A00.000Z/);

const secondPromise = refreshController.refresh({ date: "2026-08-02", scope: "history" });
assert.equal(refreshRequests.length, 2, "newer history query must start independently");
secondHistory.resolve({
  ok: true,
  notificationJobs: [{ notificationJobId: "newer" }]
});
await secondPromise;
firstHistory.resolve({
  ok: true,
  notificationJobs: [{ notificationJobId: "stale" }]
});
const firstResult = await firstPromise;
assert.equal(firstResult.stale, true, "older history response must be ignored");
assert.deepEqual(jobUpdates, [{
  notificationJobs: [{ notificationJobId: "newer" }],
  replace: false
}]);
assert.equal(statusUpdates.at(-1).state, "ready");

const invalidated = createDeferred();
const invalidatedUpdates = [];
const invalidationController = createNotificationJobsRefreshController({
  onJobs: (update) => invalidatedUpdates.push(update),
  onStatus: () => {},
  request: async () => invalidated.promise
});
const invalidatedPromise = invalidationController.refresh({ lessonId: "lesson_1", scope: "lesson" });
invalidationController.invalidate("lesson");
invalidated.resolve({ ok: true, notificationJobs: [{ notificationJobId: "late" }] });
assert.equal((await invalidatedPromise).stale, true);
assert.deepEqual(invalidatedUpdates, []);

const reconcileDeferred = createDeferred();
let reconcileRequestCount = 0;
const reconcileResults = [];
const reconcileController = createNotificationJobsReconcileController({
  onResult: (result) => reconcileResults.push(result),
  request: async (url, payload, timeout) => {
    reconcileRequestCount += 1;
    assert.equal(url, "/api/notification-jobs/reconcile-solapi");
    assert.deepEqual(payload.notificationJobIds, ["job_1"]);
    assert.equal(timeout, 90000);
    return reconcileDeferred.promise;
  }
});
const reconcilePromise = reconcileController.reconcile({ notificationJobIds: ["job_1"] });
const duplicateReconcilePromise = reconcileController.reconcile({ notificationJobIds: ["job_1"] });
assert.equal(reconcilePromise, duplicateReconcilePromise);
await new Promise((resolve) => setImmediate(resolve));
assert.equal(reconcileRequestCount, 1, "same reconcile payload must be single-flight");
reconcileDeferred.resolve({
  checked: [{ notificationJobId: "job_1", status: "sent" }],
  checkedCount: 1,
  notificationJobs: [{ notificationJobId: "job_1" }],
  records: [],
  source: "solapi",
  updatedCount: 1
});
await reconcilePromise;
assert.equal(reconcileResults.length, 1);

const [appSource, refreshSource, reconcileSource] = await Promise.all([
  readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/notifications/notificationJobsRefreshController.js", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/notifications/notificationJobsReconcileController.js", import.meta.url), "utf8")
]);
for (const expected of [
  "createNotificationJobsRefreshController",
  "notificationJobsRefreshControllerRef",
  'invalidate("active")',
  'invalidate("history")',
  'invalidate("lesson")',
  "createNotificationJobsReconcileController",
  "notificationJobsReconcileControllerRef"
]) {
  assert.equal(appSource.includes(expected), true, `missing App notification adapter: ${expected}`);
}
for (const expected of [
  "inFlightBySignature",
  "latestRequestByChannel",
  "latestRequestByChannel.get(channel) !== requestId",
  "disposed"
]) {
  assert.equal(refreshSource.includes(expected), true, `missing refresh guard: ${expected}`);
}
assert.equal(reconcileSource.includes("inFlightByPayload"), true);
for (const forbidden of ["send", "reserve", "cancelNotificationJob", "dispatch"]) {
  assert.equal(refreshSource.includes(forbidden), false, `refresh controller must not own ${forbidden}`);
}

console.log("notification refresh stale-response and reconcile single-flight fixtures passed");
