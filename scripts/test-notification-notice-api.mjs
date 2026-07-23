import assert from "node:assert/strict";
import {
  persistNoticeJobRequest,
  polishNoticeMessageRequest,
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

const polishPayload = {
  aiProvider: "fixture-provider",
  aiModel: "fixture-model",
  rawText: "원문"
};
const polishCalls = [];
const polishResultFixture = {
  ok: true,
  polishedText: "다듬은 문구"
};
const polishResult = await polishNoticeMessageRequest({
  payload: polishPayload,
  request: async (...args) => {
    polishCalls.push(args);
    return {
      ok: true,
      json: async () => polishResultFixture
    };
  },
  resolveApiUrl: (path) => `https://fixture.test${path}`
});
assert.equal(polishResult, polishResultFixture);
assert.deepEqual(polishCalls, [[
  "https://fixture.test/api/ai/comment-polish",
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(polishPayload)
  }
]]);

await assert.rejects(
  polishNoticeMessageRequest({
    payload: polishPayload,
    request: async () => ({
      ok: false,
      json: async () => ({ ok: false, error: "fixture polish failure" })
    }),
    resolveApiUrl: (path) => path
  }),
  /fixture polish failure/
);

await assert.rejects(
  polishNoticeMessageRequest({
    payload: polishPayload,
    request: async () => ({
      ok: true,
      json: async () => ({ ok: false })
    }),
    resolveApiUrl: (path) => path
  }),
  /공지 AI 수정에 실패했습니다./
);

console.log("notification notice API adapters including AI polish fixture passed");
