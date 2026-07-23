import assert from "node:assert/strict";
import { createNotificationHistoryViewModel } from "../src/domains/notifications/notificationCenterModel.js";

const futureAt = "2026-08-01T09:00:00.000Z";
const pastAt = "2026-07-01T09:00:00.000Z";
const localNoticeJobs = [
  { notificationJobId: "local-only", status: "draft" },
  { notificationJobId: "remote-wins", status: "failed" }
];
const notificationJobs = [
  { notificationJobId: "remote-wins", status: "sent" },
  { notificationJobId: "future", status: "scheduled", scheduledAt: futureAt },
  { notificationJobId: "past", status: "scheduled", scheduledAt: pastAt },
  {
    notificationJobId: "confirm",
    provider: "solapi",
    providerGroupId: "group-confirm",
    status: "send_unconfirmed"
  },
  { notificationJobId: "failed", status: "failed" },
  { notificationJobId: "canceled", status: "canceled" }
];
const dependencies = {
  canCancelJob: (job) => job.status === "scheduled",
  getProviderReference: (job) => job.providerGroupId || "",
  isSchedulePast: (value) => value === pastAt
};

const pendingModel = createNotificationHistoryViewModel({
  ...dependencies,
  jobFilter: "pending",
  localNoticeJobs,
  notificationJobs
});

assert.deepEqual(
  pendingModel.managedNotificationJobs.map((job) => job.notificationJobId),
  ["local-only", "remote-wins", "future", "past", "confirm", "failed", "canceled"]
);
assert.deepEqual(pendingModel.scheduledJobs.map((job) => job.notificationJobId), ["future"]);
assert.deepEqual(pendingModel.pastScheduledJobs.map((job) => job.notificationJobId), ["past"]);
assert.deepEqual(pendingModel.pendingJobs.map((job) => job.notificationJobId), ["confirm", "past"]);
assert.deepEqual(pendingModel.filteredNotificationJobs, pendingModel.pendingJobs);
assert.deepEqual(pendingModel.solapiResultTargets.map((job) => job.notificationJobId), ["confirm"]);
assert.equal(pendingModel.filterLabel, "확인 필요");

const fallbackModel = createNotificationHistoryViewModel({
  ...dependencies,
  jobFilter: "unknown",
  localNoticeJobs: Array.from({ length: 45 }, (_, index) => ({
    notificationJobId: `local-${index}`,
    status: "draft"
  }))
});

assert.equal(fallbackModel.filteredNotificationJobs.length, 40);
assert.equal(fallbackModel.filterLabel, "최근 알림");
assert.deepEqual(pendingModel.sentJobs.map((job) => job.notificationJobId), ["remote-wins"]);
assert.deepEqual(pendingModel.failedJobs.map((job) => job.notificationJobId), ["failed"]);
assert.deepEqual(pendingModel.archivedJobs.map((job) => job.notificationJobId), ["local-only", "canceled"]);

console.log("notification center history model fixture passed");
