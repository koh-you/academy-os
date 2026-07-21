import assert from "node:assert/strict";
import {
  cancelNotificationJobRequest,
  cancelNotificationJobsRequest,
  persistFailedNotificationJobRequest,
  reserveNotificationJobRequest
} from "../src/domains/notifications/notificationJobApi.js";

const draftJob = {
  notificationJobId: "supplement-student-1",
  notificationType: "student_reminder",
  status: "scheduled"
};

const reserveCalls = [];
const reserveState = [];
const scheduledJob = { ...draftJob, provider: "solapi", result: { groupId: "group-1" } };
const reserveResult = await reserveNotificationJobRequest({
  notificationJob: draftJob,
  reason: "보충관리 학생 11시 알림톡 예약",
  onNotificationJob: (job) => reserveState.push(job),
  request: async (path, body) => {
    reserveCalls.push({ path, body });
    return { notificationJob: scheduledJob };
  }
});

assert.equal(reserveCalls.length, 1);
assert.deepEqual(reserveCalls[0], {
  path: "/api/notification-jobs/reserve",
  body: { notificationJob: draftJob, reason: "보충관리 학생 11시 알림톡 예약" }
});
assert.equal(reserveResult, scheduledJob);
assert.deepEqual(reserveState, [scheduledJob]);

const failureCalls = [];
const failureState = [];
const failedJob = await reserveNotificationJobRequest({
  notificationJob: draftJob,
  onNotificationJob: (job) => failureState.push(job),
  now: () => "2026-07-21T12:34:56.000Z",
  request: async (path, body) => {
    failureCalls.push({ path, body });
    if (path === "/api/notification-jobs/reserve") throw new Error("fixture failure");
    return { notificationJob: body.notificationJob };
  }
});

await Promise.resolve();
assert.equal(failedJob.status, "failed");
assert.equal(failedJob.provider, "academy-os");
assert.equal(failedJob.error, "Solapi 예약 실패: fixture failure");
assert.equal(failedJob.updatedAt, "2026-07-21T12:34:56.000Z");
assert.deepEqual(failureState, [failedJob]);
assert.equal(failureCalls[1].path, "/api/notification-jobs");
assert.equal(failureCalls[1].body.notificationJob, failedJob);

const missingRecipientCalls = [];
const missingRecipientState = [];
const missingRecipientJob = persistFailedNotificationJobRequest({
  errorMessage: "수신 연락처가 없습니다.",
  notificationJob: draftJob,
  now: () => "2026-07-21T13:00:00.000Z",
  onNotificationJob: (job) => missingRecipientState.push(job),
  request: async (path, body) => {
    missingRecipientCalls.push({ path, body });
    return { notificationJob: body.notificationJob };
  }
});

await Promise.resolve();
assert.equal(missingRecipientJob.error, "수신 연락처가 없습니다.");
assert.equal(missingRecipientJob.provider, "academy-os");
assert.equal(missingRecipientJob.status, "failed");
assert.equal(missingRecipientJob.updatedAt, "2026-07-21T13:00:00.000Z");
assert.deepEqual(missingRecipientState, [missingRecipientJob]);
assert.deepEqual(missingRecipientCalls, [{
  path: "/api/notification-jobs",
  body: { notificationJob: missingRecipientJob }
}]);

const cancelCalls = [];
const cancelState = [];
const canceledJob = { ...scheduledJob, status: "canceled" };
const cancelResult = await cancelNotificationJobRequest({
  notificationJob: scheduledJob,
  reason: "보충관리 개별 알림톡 예약 취소",
  onNotificationJob: (job) => cancelState.push(job),
  request: async (path, body) => {
    cancelCalls.push({ path, body });
    return { notificationJob: canceledJob };
  }
});

assert.deepEqual(cancelCalls, [{
  path: "/api/notification-jobs/cancel",
  body: {
    notificationJobId: "supplement-student-1",
    reason: "보충관리 개별 알림톡 예약 취소"
  }
}]);
assert.deepEqual(cancelState, [canceledJob]);
assert.equal(cancelResult.notificationJob, canceledJob);

const batchCancelCalls = [];
const batchCanceledJobs = await cancelNotificationJobsRequest({
  cancelNotificationJob: async (job, reason) => {
    batchCancelCalls.push({ job, reason });
    return { notificationJob: job.keepResult === false ? null : { ...job, status: "canceled" } };
  },
  notificationJobs: [
    { notificationJobId: "student-schedule" },
    { notificationJobId: "parent-schedule", keepResult: false }
  ],
  reason: "보충 일정 안내 예약 갱신"
});

assert.deepEqual(batchCancelCalls.map(({ job, reason }) => [job.notificationJobId, reason]), [
  ["student-schedule", "보충 일정 안내 예약 갱신"],
  ["parent-schedule", "보충 일정 안내 예약 갱신"]
]);
assert.deepEqual(batchCanceledJobs, [{ notificationJobId: "student-schedule", status: "canceled" }]);
assert.deepEqual(await cancelNotificationJobsRequest({ notificationJobs: [] }), []);

await assert.rejects(
  cancelNotificationJobRequest({ notificationJob: {}, request: async () => ({}) }),
  /취소할 알림톡 예약 ID가 없습니다/
);

console.log("notification job API orchestration: deterministic contract passed");
