import assert from "node:assert/strict";
import { sendNoticeNowAction } from "../src/domains/notifications/notificationNoticeActions.js";

const recipients = [
  { audience: "parent", student: { studentId: "sent", name: "성공학생" } },
  { audience: "student", student: { studentId: "dry-run", name: "드라이학생" } },
  { audience: "parent", student: { studentId: "timeout", name: "지연학생" } },
  { audience: "student", student: { studentId: "failed", name: "실패학생" } }
];
const dispatchMessages = [];
const sendingStates = [];
const historyStates = [];
const filters = [];
const sentPayloadIds = [];
const persistedJobs = [];
let refreshCount = 0;

await sendNoticeNowAction({
  buildJob: (recipient, mode) => ({
    notificationJobId: `job-${recipient.student.studentId}`,
    payload: { studentId: recipient.student.studentId },
    recipient: recipient.student.studentId,
    status: "draft",
    mode
  }),
  isRequestTimeoutError: (error) => error.code === "REQUEST_TIMEOUT",
  isSending: false,
  noticeRecipients: recipients,
  noticeText: "고정 공지",
  persistJob: async (job) => {
    persistedJobs.push(job);
    if (["dry-run", "failed"].includes(job.payload.studentId)) {
      throw new Error("fixture record failure");
    }
  },
  refreshJobs: () => {
    refreshCount += 1;
  },
  sendNotification: async (payload) => {
    sentPayloadIds.push(payload.studentId);
    if (payload.studentId === "sent") {
      return { provider: "solapi", result: { dryRun: false, groupId: "group-sent" } };
    }
    if (payload.studentId === "dry-run") {
      return { result: { dryRun: true } };
    }
    if (payload.studentId === "timeout") {
      const error = new Error("fixture timeout");
      error.code = "REQUEST_TIMEOUT";
      throw error;
    }
    throw new Error("fixture failure");
  },
  setDispatchMessage: (message) => dispatchMessages.push(message),
  setIsHistoryOpen: (value) => historyStates.push(value),
  setIsSending: (value) => sendingStates.push(value),
  setJobFilter: (value) => filters.push(value)
});

assert.deepEqual(sentPayloadIds, ["sent", "dry-run", "timeout", "failed"]);
assert.deepEqual(sendingStates, [true, false]);
assert.deepEqual(
  dispatchMessages.slice(0, 5),
  [
    "공지 즉시 발송 중: 0/4건 요청 시작",
    "공지 즉시 발송 중: 1/4건 · 성공학생 학부모",
    "공지 즉시 발송 중: 2/4건 · 드라이학생 학생",
    "공지 즉시 발송 중: 3/4건 · 지연학생 학부모",
    "공지 즉시 발송 중: 4/4건 · 실패학생 학생"
  ]
);
assert.equal(
  dispatchMessages.at(-1),
  "공지 발송 처리 완료: 성공 2건, 확인 필요 1건, 실패 1건, 기록 저장 실패 2건"
);
assert.deepEqual(
  persistedJobs.map((job) => ({
    error: job.error,
    id: job.payload.studentId,
    provider: job.provider,
    result: job.result,
    status: job.status
  })),
  [
    {
      error: undefined,
      id: "sent",
      provider: "solapi",
      result: { dryRun: false, groupId: "group-sent" },
      status: "sent"
    },
    {
      error: undefined,
      id: "dry-run",
      provider: "solapi",
      result: { dryRun: true },
      status: "dry_run"
    },
    {
      error: "fixture timeout",
      id: "timeout",
      provider: undefined,
      result: undefined,
      status: "send_unconfirmed"
    },
    {
      error: "fixture failure",
      id: "failed",
      provider: undefined,
      result: undefined,
      status: "failed"
    }
  ]
);
assert.deepEqual(filters, ["pending"]);
assert.deepEqual(historyStates, [true]);
assert.equal(refreshCount, 1);

const guardEvents = [];
await sendNoticeNowAction({
  isSending: true,
  noticeRecipients: recipients,
  noticeText: "고정 공지",
  setDispatchMessage: () => guardEvents.push("message"),
  setIsSending: () => guardEvents.push("sending")
});
await sendNoticeNowAction({
  isSending: false,
  noticeRecipients: [],
  noticeText: "고정 공지",
  setDispatchMessage: () => guardEvents.push("message"),
  setIsSending: () => guardEvents.push("sending")
});
assert.deepEqual(guardEvents, []);

const buildFailureSendingStates = [];
await assert.rejects(
  sendNoticeNowAction({
    buildJob: () => {
      throw new Error("fixture build failure");
    },
    isSending: false,
    noticeRecipients: [recipients[0]],
    noticeText: "고정 공지",
    setDispatchMessage: () => {},
    setIsSending: (value) => buildFailureSendingStates.push(value)
  }),
  /fixture build failure/
);
assert.deepEqual(buildFailureSendingStates, [true, false]);

console.log("notification notice immediate action fixture passed");
