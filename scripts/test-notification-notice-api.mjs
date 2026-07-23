import assert from "node:assert/strict";
import {
  deleteNoticeJobRequest,
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

const deleteCalls = [];
const deleteResultFixture = {
  ok: true,
  deletedNotificationJobIds: ["notice-delete-fixed"]
};
const deleteResult = await deleteNoticeJobRequest({
  notificationJobId: "notice-delete-fixed",
  request: async (...args) => {
    deleteCalls.push(args);
    return {
      ok: true,
      json: async () => deleteResultFixture
    };
  },
  resolveApiUrl: (path) => `https://fixture.test${path}`
});
assert.equal(deleteResult, deleteResultFixture);
assert.deepEqual(deleteCalls, [[
  "https://fixture.test/api/notification-jobs?id=notice-delete-fixed",
  { method: "DELETE" }
]]);

await assert.rejects(
  deleteNoticeJobRequest({
    notificationJobId: "notice-delete-error",
    request: async () => ({
      ok: false,
      status: 503,
      json: async () => ({ ok: false })
    }),
    resolveApiUrl: (path) => path
  }),
  /삭제 실패: 503/
);

await assert.rejects(
  deleteNoticeJobRequest({
    notificationJobId: "notice-delete-missing",
    request: async () => ({
      ok: true,
      json: async () => ({
        ok: true,
        deletedNotificationJobIds: ["different-job"]
      })
    }),
    resolveApiUrl: (path) => path
  }),
  /Supabase에서 삭제된 알림 이력을 확인하지 못했습니다./
);

console.log("notification notice API adapters including AI polish and delete fixtures passed");
