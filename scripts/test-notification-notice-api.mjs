import assert from "node:assert/strict";
import {
  persistNoticeJobRequest,
  reserveNoticeJobRequest
} from "../src/domains/notifications/notificationNoticeApi.js";

const notificationJob = {
  notificationJobId: "notice-fixed",
  notificationType: "notice_parent",
  status: "scheduled"
};

const persistCalls = [];
const persistResult = await persistNoticeJobRequest({
  notificationJob,
  request: async (...args) => {
    persistCalls.push(args);
    return { notificationJob };
  }
});

assert.equal(persistResult, undefined);
assert.deepEqual(persistCalls, [[
  "/api/notification-jobs",
  { notificationJob },
  15000,
  "발송 기록 저장 요청이 15초를 넘었습니다. 새로고침 후 기록 반영 여부를 확인해 주세요."
]]);

const reservedJob = {
  ...notificationJob,
  provider: "solapi",
  providerGroupId: "group-fixed"
};
const reserveCalls = [];
const reserveResult = await reserveNoticeJobRequest({
  notificationJob,
  request: async (...args) => {
    reserveCalls.push(args);
    return { notificationJob: reservedJob };
  }
});

assert.equal(reserveResult, reservedJob);
assert.deepEqual(reserveCalls, [[
  "/api/notification-jobs/reserve",
  { notificationJob, reason: "공지 Solapi 예약" },
  45000,
  "Solapi 예약 요청이 45초를 넘었습니다. 실제 예약 여부는 발송 기록 또는 Solapi에서 확인해 주세요."
]]);

const fallbackResult = await reserveNoticeJobRequest({
  notificationJob,
  request: async () => ({})
});
assert.equal(fallbackResult, notificationJob);

const reserveError = new Error("fixture reserve failure");
await assert.rejects(
  reserveNoticeJobRequest({
    notificationJob,
    request: async () => {
      throw reserveError;
    }
  }),
  (error) => error === reserveError
);

console.log("notification notice API adapters fixture passed");
