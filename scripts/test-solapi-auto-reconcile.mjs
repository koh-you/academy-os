import assert from "node:assert/strict";
import {
  defaultSolapiAutoReconcileGraceMs,
  getSolapiProviderReference,
  selectDueSolapiAutoReconcileJobs
} from "../api/lib/solapiAutoReconcile.js";

const now = new Date("2026-07-29T03:00:00.000Z");
const fiveMinutesAgo = new Date(now.getTime() - defaultSolapiAutoReconcileGraceMs).toISOString();
const fourMinutesAgo = new Date(now.getTime() - 4 * 60 * 1000).toISOString();
const tenMinutesAgo = new Date(now.getTime() - 10 * 60 * 1000).toISOString();

const jobs = [
  {
    notificationJobId: "due-scheduled",
    provider: "solapi",
    providerMessageId: "group_due",
    scheduledAt: fiveMinutesAgo,
    status: "scheduled"
  },
  {
    notificationJobId: "due-unconfirmed",
    provider: "solapi",
    result: {
      response: { groupInfo: { groupId: "group_unconfirmed" } },
      solapiReconciledAt: tenMinutesAgo
    },
    scheduledAt: tenMinutesAgo,
    status: "send_unconfirmed"
  },
  {
    notificationJobId: "too-early",
    provider: "solapi",
    providerMessageId: "group_early",
    scheduledAt: fourMinutesAgo,
    status: "scheduled"
  },
  {
    notificationJobId: "retry-throttled",
    provider: "solapi",
    providerMessageId: "group_throttled",
    result: { solapiReconciledAt: fourMinutesAgo },
    scheduledAt: tenMinutesAgo,
    status: "send_unconfirmed"
  },
  {
    notificationJobId: "missing-provider-reference",
    provider: "solapi",
    scheduledAt: tenMinutesAgo,
    status: "scheduled"
  },
  {
    notificationJobId: "already-sent",
    provider: "solapi",
    providerMessageId: "group_sent",
    scheduledAt: tenMinutesAgo,
    status: "sent"
  },
  {
    notificationJobId: "not-solapi",
    provider: "academy-os",
    providerMessageId: "group_other",
    scheduledAt: tenMinutesAgo,
    status: "scheduled"
  }
];

assert.equal(
  getSolapiProviderReference({
    result: { result: { response: { groupInfo: { groupId: "nested_group" } } } }
  }),
  "nested_group"
);

assert.deepEqual(
  selectDueSolapiAutoReconcileJobs(jobs, { now }).map((job) => job.notificationJobId),
  ["due-unconfirmed", "due-scheduled"]
);

assert.deepEqual(
  selectDueSolapiAutoReconcileJobs(jobs, { limit: 1, now }).map((job) => job.notificationJobId),
  ["due-unconfirmed"]
);

assert.deepEqual(
  selectDueSolapiAutoReconcileJobs([
    {
      notificationJobId: "outside-lookback",
      provider: "solapi",
      providerMessageId: "group_old",
      scheduledAt: new Date(now.getTime() - 49 * 60 * 60 * 1000).toISOString(),
      status: "send_unconfirmed"
    }
  ], { now }),
  []
);

console.log("solapi auto reconcile policy tests passed");
