import assert from "node:assert/strict";
import { reserveSupplementScheduleNoticeJobRequest } from "../src/domains/notifications/supplementNotificationOrchestration.js";

const baseJob = {
  notificationJobId: "student-schedule",
  recipient: "010-1111-2222",
  scheduledAt: "2026-07-22T06:00:00.000Z",
  target: "student",
  payload: { noticeKind: "supplement_schedule_confirm" }
};

const reserveCalls = [];
const scheduledResult = await reserveSupplementScheduleNoticeJobRequest({
  formatScheduledAt: (value) => `KST:${value}`,
  missingMessagePrefix: "학생 보충 일정 안내 예약 실패",
  normalizeRecipient: (value) => value.replace(/\D/g, ""),
  notificationJob: baseJob,
  persistFailure: () => assert.fail("valid recipient must not persist a local failure"),
  reserveNotificationJob: async (job, reason) => {
    reserveCalls.push({ job, reason });
    return { ...job, status: "scheduled" };
  }
});

assert.deepEqual(reserveCalls, [{
  job: baseJob,
  reason: "보충관리 학생·학부모 다음 정각 안내 예약"
}]);
assert.equal(scheduledResult.status, "scheduled");
assert.equal(scheduledResult.message, "학생 보충 일정 확정 안내 예약 완료 · KST:2026-07-22T06:00:00.000Z");

const parentChangeResult = await reserveSupplementScheduleNoticeJobRequest({
  formatScheduledAt: () => "7/22 15:00",
  missingMessagePrefix: "학부모 보충 일정 안내 예약 실패",
  normalizeRecipient: (value) => value,
  notificationJob: {
    ...baseJob,
    target: "parent",
    payload: { noticeKind: "supplement_schedule_change" }
  },
  persistFailure: () => assert.fail("valid recipient must not persist a local failure"),
  reserveNotificationJob: async (job) => ({ ...job, status: "dry_run" })
});
assert.equal(parentChangeResult.status, "scheduled");
assert.equal(parentChangeResult.message, "학부모 보충 일정 변경 안내 예약 완료 · 7/22 15:00");

const providerFailure = await reserveSupplementScheduleNoticeJobRequest({
  formatScheduledAt: () => "",
  missingMessagePrefix: "학생 보충 일정 안내 예약 실패",
  normalizeRecipient: (value) => value,
  notificationJob: baseJob,
  persistFailure: () => assert.fail("valid recipient must not persist a local failure"),
  reserveNotificationJob: async (job) => ({ ...job, status: "failed", error: "provider failure" })
});
assert.equal(providerFailure.status, "failed");
assert.equal(providerFailure.message, "provider failure");

const missingRecipientResult = await reserveSupplementScheduleNoticeJobRequest({
  formatScheduledAt: () => "",
  missingMessagePrefix: "학생 보충 일정 안내 예약 실패",
  normalizeRecipient: () => "",
  notificationJob: { ...baseJob, recipient: "" },
  persistFailure: (job, prefix, error) => ({ job, prefix, error }),
  reserveNotificationJob: () => assert.fail("missing recipient must not reserve")
});
assert.equal(missingRecipientResult.prefix, "학생 보충 일정 안내 예약 실패");
assert.equal(missingRecipientResult.error, "수신 연락처가 없습니다.");

console.log("supplement notification orchestration: deterministic contract passed");
