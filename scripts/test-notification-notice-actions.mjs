import assert from "node:assert/strict";
import {
  reconcileNoticeResultsAction,
  scheduleNoticeAction,
  sendNoticeNowAction
} from "../src/domains/notifications/notificationNoticeActions.js";

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

const pastScheduleMessages = [];
const pastScheduleBusyStates = [];
await scheduleNoticeAction({
  isSchedulePast: () => true,
  isSending: false,
  noticeRecipients: [recipients[0]],
  noticeText: "고정 공지",
  scheduledAt: "2026-07-20T09:00:00.000Z",
  setDispatchMessage: (message) => pastScheduleMessages.push(message),
  setIsSending: (value) => pastScheduleBusyStates.push(value)
});
assert.deepEqual(pastScheduleMessages, [
  "예약 시각이 이미 지났습니다. 새 예약 시각을 선택하거나 즉시 발송을 사용해 주세요."
]);
assert.deepEqual(pastScheduleBusyStates, []);

const scheduleMessages = [];
const scheduleBusyStates = [];
const scheduleFilters = [];
const scheduleHistoryStates = [];
const reservedJobIds = [];
const upsertedJobs = [];
const persistedFailedJobs = [];
const reportedErrors = [];
let scheduleRefreshCount = 0;
const scheduleRecipients = recipients.slice(0, 3);

await scheduleNoticeAction({
  buildJob: (recipient, mode) => ({
    notificationJobId: `scheduled-${recipient.student.studentId}`,
    payload: { studentId: recipient.student.studentId },
    status: "scheduled",
    mode
  }),
  formatScheduledAt: (value) => `표시:${value}`,
  isSchedulePast: () => false,
  isSending: false,
  noticeRecipients: scheduleRecipients,
  noticeText: "고정 공지",
  now: () => "2026-07-23T11:00:00.000Z",
  persistJob: async (job) => {
    persistedFailedJobs.push(job);
    throw new Error("fixture persist failure");
  },
  refreshJobs: () => {
    scheduleRefreshCount += 1;
  },
  reportError: (error) => reportedErrors.push(error.message),
  reserveJob: async (job) => {
    reservedJobIds.push(job.notificationJobId);
    if (job.payload.studentId === "dry-run") throw new Error("fixture reserve failure");
    return { ...job, provider: "solapi", providerGroupId: `group-${job.payload.studentId}` };
  },
  scheduledAt: "2026-07-30T09:00:00.000Z",
  setDispatchMessage: (message) => scheduleMessages.push(message),
  setIsHistoryOpen: (value) => scheduleHistoryStates.push(value),
  setIsSending: (value) => scheduleBusyStates.push(value),
  setJobFilter: (value) => scheduleFilters.push(value),
  upsertLocalJob: (job) => upsertedJobs.push(job)
});

assert.deepEqual(reservedJobIds, ["scheduled-sent", "scheduled-dry-run", "scheduled-timeout"]);
assert.deepEqual(scheduleBusyStates, [true, false]);
assert.deepEqual(scheduleMessages, [
  "Solapi 공지 예약 중: 0/3건",
  "Solapi 공지 예약 중: 1/3건",
  "Solapi 공지 예약 중: 2/3건",
  "Solapi 공지 예약 중: 3/3건",
  "표시:2026-07-30T09:00:00.000Z Solapi 공지 예약 완료: 성공 2건, 실패 1건"
]);
assert.deepEqual(
  upsertedJobs.map((job) => ({
    error: job.error,
    id: job.notificationJobId,
    provider: job.provider,
    status: job.status,
    updatedAt: job.updatedAt
  })),
  [
    {
      error: undefined,
      id: "scheduled-sent",
      provider: "solapi",
      status: "scheduled",
      updatedAt: undefined
    },
    {
      error: "Solapi 예약 실패: fixture reserve failure",
      id: "scheduled-dry-run",
      provider: undefined,
      status: "failed",
      updatedAt: "2026-07-23T11:00:00.000Z"
    },
    {
      error: undefined,
      id: "scheduled-timeout",
      provider: "solapi",
      status: "scheduled",
      updatedAt: undefined
    }
  ]
);
assert.equal(persistedFailedJobs.length, 1);
assert.equal(persistedFailedJobs[0], upsertedJobs[1]);
assert.deepEqual(reportedErrors, ["fixture persist failure"]);
assert.deepEqual(scheduleFilters, ["failed"]);
assert.deepEqual(scheduleHistoryStates, [true]);
assert.equal(scheduleRefreshCount, 1);

const successfulScheduleFilters = [];
await scheduleNoticeAction({
  buildJob: (recipient) => ({ notificationJobId: recipient.student.studentId }),
  formatScheduledAt: () => "예약시각",
  isSchedulePast: () => false,
  isSending: false,
  noticeRecipients: [recipients[0]],
  noticeText: "고정 공지",
  refreshJobs: () => {},
  reserveJob: async (job) => job,
  scheduledAt: "2026-07-30T09:00:00.000Z",
  setDispatchMessage: () => {},
  setIsHistoryOpen: () => {},
  setIsSending: () => {},
  setJobFilter: (value) => successfulScheduleFilters.push(value),
  upsertLocalJob: () => {}
});
assert.deepEqual(successfulScheduleFilters, ["scheduled"]);

const reconcileRequests = [];
const reconcileStates = [];
const reconcileFilters = [];
const reconcileHistoryStates = [];
let reconcileRefreshCount = 0;
await reconcileNoticeResultsAction({
  isLoading: false,
  now: () => "2026-07-23T12:34:56.000Z",
  reconcileResults: async (payload) => {
    reconcileRequests.push(payload);
    return {
      checkedCount: 1,
      updatedCount: 0,
      checked: [
        { notificationJobId: "notice-1", status: "failed_to_check" },
        { notificationJobId: "notice-2", status: "scheduled" }
      ]
    };
  },
  refreshJobs: () => {
    reconcileRefreshCount += 1;
  },
  resultTargetCount: 2,
  setIsHistoryOpen: (value) => reconcileHistoryStates.push(value),
  setJobFilter: (value) => reconcileFilters.push(value),
  setSyncState: (value) => reconcileStates.push(value),
  syncCheckedAt: "2026-07-22T10:00:00.000Z",
  targetIds: ["notice-1", "notice-2"]
});
assert.deepEqual(reconcileRequests, [
  { notificationJobIds: ["notice-1", "notice-2"] }
]);
assert.deepEqual(reconcileStates, [
  {
    checkedAt: "2026-07-22T10:00:00.000Z",
    state: "loading",
    message: "Solapi 예약 2건을 조회하고 OS 기록과 대조하는 중입니다."
  },
  {
    checkedAt: "2026-07-23T12:34:56.000Z",
    state: "partial",
    message: "Solapi 결과 대조 완료: 대상 2건 · 조회 1건 · OS 반영 0건 · 조회 실패 1건"
  }
]);
assert.deepEqual(reconcileFilters, ["pending"]);
assert.deepEqual(reconcileHistoryStates, [true]);
assert.equal(reconcileRefreshCount, 1);

const successfulReconcileStates = [];
const successfulReconcileFilters = [];
await reconcileNoticeResultsAction({
  isLoading: false,
  now: () => "2026-07-23T13:00:00.000Z",
  reconcileResults: async () => ({
    checkedCount: 1,
    updatedCount: 1,
    checked: [{ notificationJobId: "notice-updated", status: "sent" }]
  }),
  refreshJobs: () => {},
  resultTargetCount: 0,
  setIsHistoryOpen: () => {},
  setJobFilter: (value) => successfulReconcileFilters.push(value),
  setSyncState: (value) => successfulReconcileStates.push(value),
  syncCheckedAt: "",
  targetIds: ["notice-updated"]
});
assert.deepEqual(successfulReconcileStates[1], {
  checkedAt: "2026-07-23T13:00:00.000Z",
  state: "saved",
  message: "Solapi 결과 대조 완료: 대상 1건 · 조회 1건 · OS 반영 1건"
});
assert.deepEqual(successfulReconcileFilters, ["pending"]);

let failedReconcileState = {
  checkedAt: "2026-07-22T10:00:00.000Z",
  state: "idle",
  message: ""
};
await reconcileNoticeResultsAction({
  isLoading: false,
  reconcileResults: async () => {
    throw new Error("fixture reconcile failure");
  },
  setSyncState: (value) => {
    failedReconcileState = typeof value === "function" ? value(failedReconcileState) : value;
  },
  syncCheckedAt: failedReconcileState.checkedAt,
  targetIds: ["notice-failed"]
});
assert.deepEqual(failedReconcileState, {
  checkedAt: "2026-07-22T10:00:00.000Z",
  state: "failed",
  message: "Solapi 결과 대조 실패: fixture reconcile failure"
});

let reconcileGuardCallCount = 0;
const guardSetter = () => {
  reconcileGuardCallCount += 1;
};
await reconcileNoticeResultsAction({
  isLoading: false,
  reconcileResults: async () => {},
  setSyncState: guardSetter,
  targetIds: []
});
await reconcileNoticeResultsAction({
  isLoading: true,
  reconcileResults: async () => {},
  setSyncState: guardSetter,
  targetIds: ["notice-loading"]
});
await reconcileNoticeResultsAction({
  isLoading: false,
  reconcileResults: null,
  setSyncState: guardSetter,
  targetIds: ["notice-missing-callback"]
});
assert.equal(reconcileGuardCallCount, 0);

console.log("notification notice immediate scheduled and reconcile action fixtures passed");
