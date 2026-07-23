import assert from "node:assert/strict";
import {
  applyNoticeTemplateAction,
  cancelNoticeJobAction,
  createCancelNoticeJobBinding,
  createReconcileNoticeResultsBinding,
  deleteNoticeJobAction,
  polishNoticeMessageAction,
  reconcileNoticeResultsAction,
  refreshNoticeJobsInBackgroundAction,
  scheduleNoticeAction,
  selectNoticeHistoryFilterAction,
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

const bindingReconcileStates = [];
const bindingReconcile = createReconcileNoticeResultsBinding({
  isLoading: false,
  now: () => "2026-07-23T14:00:00.000Z",
  reconcileResults: async ({ notificationJobIds }) => ({
    checked: [],
    checkedCount: notificationJobIds.length,
    updatedCount: 0
  }),
  refreshJobs: () => {},
  resultTargetCount: 0,
  setIsHistoryOpen: () => {},
  setJobFilter: () => {},
  setSyncState: (value) => bindingReconcileStates.push(value),
  syncCheckedAt: "",
  targetIds: ["notice-bound"]
});
await bindingReconcile();
assert.deepEqual(bindingReconcileStates, [
  {
    checkedAt: "",
    state: "loading",
    message: "Solapi 예약 1건을 조회하고 OS 기록과 대조하는 중입니다."
  },
  {
    checkedAt: "2026-07-23T14:00:00.000Z",
    state: "saved",
    message: "Solapi 결과 대조 완료: 대상 1건 · 조회 1건 · OS 반영 0건"
  }
]);

const polishPayloads = [];
const polishMessages = [];
const polishBusyStates = [];
const polishedBodies = [];
await polishNoticeMessageAction({
  aiModel: "fixture-model",
  aiPrompt: "fixture-prompt",
  aiProvider: "fixture-provider",
  isPolishing: false,
  noticeBody: "원문 공지",
  noticeTitle: "  공지 제목  ",
  polishMessage: async (payload) => {
    polishPayloads.push(payload);
    return { polishedText: "다듬은 공지" };
  },
  setDispatchMessage: (value) => polishMessages.push(value),
  setIsPolishing: (value) => polishBusyStates.push(value),
  setNoticeBody: (value) => polishedBodies.push(value),
  today: "2026-07-23"
});
assert.deepEqual(polishPayloads, [{
  aiProvider: "fixture-provider",
  aiModel: "fixture-model",
  aiPrompt: "fixture-prompt",
  audience: "parent",
  lessonName: "공지 제목",
  lessonDate: "2026-07-23",
  rawText: "원문 공지",
  studentName: "수신자",
  schoolName: "",
  grade: "",
  lessonMaterial: "",
  lessonContent: "",
  attendanceStatus: "",
  homeworkStatus: "",
  assignmentStatus: ""
}]);
assert.deepEqual(polishMessages, ["", "공지 문구를 AI로 다듬었습니다."]);
assert.deepEqual(polishBusyStates, [true, false]);
assert.deepEqual(polishedBodies, ["다듬은 공지"]);

const fallbackBodies = [];
await polishNoticeMessageAction({
  isPolishing: false,
  noticeBody: "fallback 원문",
  noticeTitle: "",
  polishMessage: async () => ({}),
  setDispatchMessage: () => {},
  setIsPolishing: () => {},
  setNoticeBody: (value) => fallbackBodies.push(value)
});
assert.deepEqual(fallbackBodies, ["fallback 원문"]);

const failedPolishMessages = [];
const failedPolishBusyStates = [];
await polishNoticeMessageAction({
  isPolishing: false,
  noticeBody: "실패 원문",
  noticeTitle: "",
  polishMessage: async () => {
    throw new Error("fixture action failure");
  },
  setDispatchMessage: (value) => failedPolishMessages.push(value),
  setIsPolishing: (value) => failedPolishBusyStates.push(value),
  setNoticeBody: () => {
    throw new Error("failure must not update body");
  }
});
assert.deepEqual(failedPolishMessages, ["", "AI 수정 실패: fixture action failure"]);
assert.deepEqual(failedPolishBusyStates, [true, false]);

let polishGuardCallCount = 0;
const polishGuardSetter = () => {
  polishGuardCallCount += 1;
};
await polishNoticeMessageAction({
  isPolishing: false,
  noticeBody: "   ",
  polishMessage: polishGuardSetter,
  setDispatchMessage: polishGuardSetter,
  setIsPolishing: polishGuardSetter
});
await polishNoticeMessageAction({
  isPolishing: true,
  noticeBody: "중복 요청",
  polishMessage: polishGuardSetter,
  setDispatchMessage: polishGuardSetter,
  setIsPolishing: polishGuardSetter
});
assert.equal(polishGuardCallCount, 0);

const deleteConfirmationMessages = [];
const deleteRequests = [];
const deleteBusyStates = [];
const deleteJobStates = [];
let deleteRefreshCount = 0;
await deleteNoticeJobAction({
  canDeleteJob: () => true,
  confirmAction: (message) => {
    deleteConfirmationMessages.push(message);
    return true;
  },
  deleteJob: async (notificationJobId) => {
    deleteRequests.push(notificationJobId);
  },
  deletingJobId: "",
  job: {
    notificationJobId: "notice-delete-draft",
    status: "draft"
  },
  refresh: async () => {
    deleteRefreshCount += 1;
  },
  setDeletingJobId: (value) => deleteBusyStates.push(value),
  setJobAction: (value) => deleteJobStates.push(value)
});
assert.deepEqual(deleteConfirmationMessages, [
  "이 발송 전 공지 기록 1건을 Academy OS에서 삭제할까요? 삭제한 기록은 복구할 수 없습니다."
]);
assert.deepEqual(deleteRequests, ["notice-delete-draft"]);
assert.deepEqual(deleteBusyStates, ["notice-delete-draft", ""]);
assert.deepEqual(deleteJobStates, [
  {
    message: "발송하지 않은 공지 기록을 삭제하는 중입니다.",
    state: "saving"
  },
  {
    message: "발송하지 않은 공지 기록 1건을 삭제했습니다.",
    state: "saved"
  }
]);
assert.equal(deleteRefreshCount, 1);

const pastDeleteConfirmationMessages = [];
const pastDeleteJobStates = [];
await deleteNoticeJobAction({
  canDeleteJob: () => true,
  confirmAction: (message) => {
    pastDeleteConfirmationMessages.push(message);
    return true;
  },
  deleteJob: async () => {},
  deletingJobId: "",
  job: {
    notificationJobId: "notice-delete-unconfirmed",
    status: "send_unconfirmed"
  },
  setDeletingJobId: () => {},
  setJobAction: (value) => pastDeleteJobStates.push(value)
});
assert.deepEqual(pastDeleteConfirmationMessages, [
  "이 '확인 필요' 알림 이력 1건을 Academy OS에서 삭제할까요? 과거 Solapi 발송 결과는 변경되지 않으며 삭제한 OS 이력은 복구할 수 없습니다."
]);
assert.deepEqual(pastDeleteJobStates, [
  {
    message: "확인 필요 알림 이력을 삭제하는 중입니다.",
    state: "saving"
  },
  {
    message: "확인 필요 알림 이력 1건을 삭제했습니다.",
    state: "saved"
  }
]);

const failedDeleteBusyStates = [];
const failedDeleteJobStates = [];
let failedDeleteRefreshCount = 0;
await deleteNoticeJobAction({
  canDeleteJob: () => true,
  confirmAction: () => true,
  deleteJob: async () => {
    throw new Error("fixture delete failure");
  },
  deletingJobId: "",
  job: {
    notificationJobId: "notice-delete-failed",
    status: "draft"
  },
  refresh: async () => {
    failedDeleteRefreshCount += 1;
  },
  setDeletingJobId: (value) => failedDeleteBusyStates.push(value),
  setJobAction: (value) => failedDeleteJobStates.push(value)
});
assert.deepEqual(failedDeleteBusyStates, ["notice-delete-failed", ""]);
assert.deepEqual(failedDeleteJobStates, [
  {
    message: "발송하지 않은 공지 기록을 삭제하는 중입니다.",
    state: "saving"
  },
  {
    message: "알림 이력 삭제 실패: fixture delete failure",
    state: "failed"
  }
]);
assert.equal(failedDeleteRefreshCount, 0);

let deleteGuardCallCount = 0;
const deleteGuardCallback = () => {
  deleteGuardCallCount += 1;
};
await deleteNoticeJobAction({
  canDeleteJob: () => false,
  confirmAction: deleteGuardCallback,
  deleteJob: deleteGuardCallback,
  deletingJobId: "",
  job: { notificationJobId: "notice-not-deletable", status: "sent" },
  setDeletingJobId: deleteGuardCallback,
  setJobAction: deleteGuardCallback
});
await deleteNoticeJobAction({
  canDeleteJob: () => true,
  confirmAction: deleteGuardCallback,
  deleteJob: deleteGuardCallback,
  deletingJobId: "notice-busy",
  job: { notificationJobId: "notice-busy-target", status: "draft" },
  setDeletingJobId: deleteGuardCallback,
  setJobAction: deleteGuardCallback
});
assert.equal(deleteGuardCallCount, 0);

const canceledDeleteEvents = [];
await deleteNoticeJobAction({
  canDeleteJob: () => true,
  confirmAction: () => false,
  deleteJob: () => canceledDeleteEvents.push("delete"),
  deletingJobId: "",
  job: { notificationJobId: "notice-delete-canceled", status: "draft" },
  setDeletingJobId: () => canceledDeleteEvents.push("busy"),
  setJobAction: () => canceledDeleteEvents.push("state")
});
assert.deepEqual(canceledDeleteEvents, []);

const cancelConfirmationMessages = [];
const cancelRequests = [];
const cancelBusyStates = [];
const cancelJobStates = [];
const cancelFilters = [];
const cancelHistoryStates = [];
const canceledLocalJobs = [];
let cancelRefreshCount = 0;
const cancelTargetJob = {
  notificationJobId: "notice-cancel-solapi",
  status: "scheduled"
};
const canceledJob = {
  ...cancelTargetJob,
  status: "canceled"
};
await cancelNoticeJobAction({
  canCancelJob: () => true,
  cancelJob: async (...args) => {
    cancelRequests.push(args);
    return {
      notificationJob: canceledJob,
      solapiCancellation: { groupId: "fixture-group" }
    };
  },
  confirmAction: (message) => {
    cancelConfirmationMessages.push(message);
    return true;
  },
  deletingJobId: "",
  job: cancelTargetJob,
  refreshJobs: () => {
    cancelRefreshCount += 1;
  },
  setDeletingJobId: (value) => cancelBusyStates.push(value),
  setIsHistoryOpen: (value) => cancelHistoryStates.push(value),
  setJobAction: (value) => cancelJobStates.push(value),
  setJobFilter: (value) => cancelFilters.push(value),
  upsertLocalJob: (job) => canceledLocalJobs.push(job)
});
assert.deepEqual(cancelConfirmationMessages, [
  "이 알림톡 예약 1건을 취소할까요? Solapi 실제 예약도 함께 취소하며, 취소 이력은 남습니다."
]);
assert.deepEqual(cancelRequests, [[cancelTargetJob, "알림관리에서 예약 취소"]]);
assert.deepEqual(cancelBusyStates, ["notice-cancel-solapi", ""]);
assert.deepEqual(cancelJobStates, [
  {
    message: "Solapi 실제 예약과 Academy OS 기록을 함께 취소하는 중입니다.",
    state: "saving"
  },
  {
    message: "Solapi 실제 예약과 Academy OS 기록을 함께 취소했습니다.",
    state: "saved"
  }
]);
assert.deepEqual(canceledLocalJobs, [canceledJob]);
assert.deepEqual(cancelFilters, ["draft"]);
assert.deepEqual(cancelHistoryStates, [true]);
assert.equal(cancelRefreshCount, 1);

const bindingCancelRequests = [];
const bindingCanceledJobs = [];
const bindingCancelTarget = {
  notificationJobId: "notice-cancel-binding",
  status: "scheduled"
};
const cancelNotificationJob = createCancelNoticeJobBinding({
  canCancelJob: () => true,
  cancelJob: async (...args) => {
    bindingCancelRequests.push(args);
    return {
      notificationJob: {
        ...bindingCancelTarget,
        status: "canceled"
      },
      solapiCancellation: { groupId: "fixture-binding-group" }
    };
  },
  confirmAction: () => true,
  deletingJobId: "",
  refreshJobs: () => {},
  setDeletingJobId: () => {},
  setIsHistoryOpen: () => {},
  setJobAction: () => {},
  setJobFilter: () => {},
  upsertLocalJob: (job) => bindingCanceledJobs.push(job)
});
await cancelNotificationJob(bindingCancelTarget);
assert.deepEqual(bindingCancelRequests, [[bindingCancelTarget, "알림관리에서 예약 취소"]]);
assert.deepEqual(bindingCanceledJobs, [{
  ...bindingCancelTarget,
  status: "canceled"
}]);

const osOnlyCancelStates = [];
await cancelNoticeJobAction({
  canCancelJob: () => true,
  cancelJob: async () => ({
    notificationJob: {
      notificationJobId: "notice-cancel-os-only",
      status: "canceled"
    },
    solapiCancellation: null
  }),
  confirmAction: () => true,
  deletingJobId: "",
  job: {
    notificationJobId: "notice-cancel-os-only",
    status: "scheduled"
  },
  refreshJobs: () => {},
  setDeletingJobId: () => {},
  setIsHistoryOpen: () => {},
  setJobAction: (value) => osOnlyCancelStates.push(value),
  setJobFilter: () => {},
  upsertLocalJob: () => {}
});
assert.deepEqual(osOnlyCancelStates.at(-1), {
  message: "Academy OS 예약을 취소했습니다. Solapi 예약 그룹이 없는 알림입니다.",
  state: "saved"
});

const failedCancelBusyStates = [];
const failedCancelJobStates = [];
const failedCancelSideEffects = [];
await cancelNoticeJobAction({
  canCancelJob: () => true,
  cancelJob: async () => ({
    notificationJob: {
      notificationJobId: "notice-cancel-invalid",
      status: "scheduled"
    }
  }),
  confirmAction: () => true,
  deletingJobId: "",
  job: {
    notificationJobId: "notice-cancel-invalid",
    status: "scheduled"
  },
  refreshJobs: () => failedCancelSideEffects.push("refresh"),
  setDeletingJobId: (value) => failedCancelBusyStates.push(value),
  setIsHistoryOpen: () => failedCancelSideEffects.push("history"),
  setJobAction: (value) => failedCancelJobStates.push(value),
  setJobFilter: () => failedCancelSideEffects.push("filter"),
  upsertLocalJob: () => failedCancelSideEffects.push("upsert")
});
assert.deepEqual(failedCancelBusyStates, ["notice-cancel-invalid", ""]);
assert.deepEqual(failedCancelJobStates, [
  {
    message: "Solapi 실제 예약과 Academy OS 기록을 함께 취소하는 중입니다.",
    state: "saving"
  },
  {
    message: "알림톡 예약 취소 실패: OS 취소 상태를 확인하지 못했습니다.",
    state: "failed"
  }
]);
assert.deepEqual(failedCancelSideEffects, []);

const missingCancelJobStates = [];
await cancelNoticeJobAction({
  canCancelJob: () => true,
  cancelJob: null,
  confirmAction: () => true,
  deletingJobId: "",
  job: {
    notificationJobId: "notice-cancel-missing",
    status: "scheduled"
  },
  setDeletingJobId: () => {},
  setJobAction: (value) => missingCancelJobStates.push(value)
});
assert.deepEqual(missingCancelJobStates.at(-1), {
  message: "알림톡 예약 취소 실패: Solapi 실제 예약 취소 경로가 연결되어 있지 않습니다.",
  state: "failed"
});

let cancelGuardCallCount = 0;
const cancelGuardCallback = () => {
  cancelGuardCallCount += 1;
};
await cancelNoticeJobAction({
  canCancelJob: () => false,
  cancelJob: cancelGuardCallback,
  confirmAction: cancelGuardCallback,
  deletingJobId: "",
  job: { notificationJobId: "notice-not-cancelable", status: "sent" },
  setDeletingJobId: cancelGuardCallback,
  setJobAction: cancelGuardCallback
});
await cancelNoticeJobAction({
  canCancelJob: () => true,
  cancelJob: cancelGuardCallback,
  confirmAction: cancelGuardCallback,
  deletingJobId: "notice-cancel-busy",
  job: { notificationJobId: "notice-cancel-busy-target", status: "scheduled" },
  setDeletingJobId: cancelGuardCallback,
  setJobAction: cancelGuardCallback
});
assert.equal(cancelGuardCallCount, 0);

const rejectedCancelEvents = [];
await cancelNoticeJobAction({
  canCancelJob: () => true,
  cancelJob: () => rejectedCancelEvents.push("cancel"),
  confirmAction: () => false,
  deletingJobId: "",
  job: { notificationJobId: "notice-cancel-rejected", status: "scheduled" },
  setDeletingJobId: () => rejectedCancelEvents.push("busy"),
  setJobAction: () => rejectedCancelEvents.push("state")
});
assert.deepEqual(rejectedCancelEvents, []);

let backgroundRefreshCount = 0;
const successfulBackgroundMessages = [];
refreshNoticeJobsInBackgroundAction({
  refreshJobs: async () => {
    backgroundRefreshCount += 1;
  },
  setDispatchMessage: (value) => successfulBackgroundMessages.push(value)
});
await Promise.resolve();
assert.equal(backgroundRefreshCount, 1);
assert.deepEqual(successfulBackgroundMessages, []);

const failedBackgroundUpdaters = [];
refreshNoticeJobsInBackgroundAction({
  refreshJobs: async () => {
    throw new Error("fixture refresh failure");
  },
  setDispatchMessage: (value) => failedBackgroundUpdaters.push(value)
});
await Promise.resolve();
await Promise.resolve();
assert.equal(failedBackgroundUpdaters.length, 1);
assert.equal(
  failedBackgroundUpdaters[0]("기존 완료 문구"),
  "기존 완료 문구 발송 기록 새로고침 실패: fixture refresh failure"
);
assert.equal(
  failedBackgroundUpdaters[0](""),
  "처리는 완료됐습니다. 발송 기록 새로고침 실패: fixture refresh failure"
);

const missingBackgroundMessages = [];
refreshNoticeJobsInBackgroundAction({
  refreshJobs: null,
  setDispatchMessage: (value) => missingBackgroundMessages.push(value)
});
await Promise.resolve();
assert.deepEqual(missingBackgroundMessages, []);

assert.throws(
  () =>
    refreshNoticeJobsInBackgroundAction({
      refreshJobs: () => {
        throw new Error("fixture synchronous refresh failure");
      },
      setDispatchMessage: () => {
        throw new Error("synchronous failure must not reach async feedback");
      }
    }),
  /fixture synchronous refresh failure/
);

const templateFixtures = [
  {
    id: "notice",
    title: "공지 안내",
    body: "공지 원문"
  },
  {
    id: "specialLecture",
    title: "특강 안내",
    body: "특강 원문"
  }
];
const templateEvents = [];
applyNoticeTemplateAction({
  setNoticeBody: (value) => templateEvents.push(["body", value]),
  setNoticeKind: (value) => templateEvents.push(["kind", value]),
  setNoticeSpecialLectureMeta: (value) => templateEvents.push(["meta", value]),
  setNoticeTemplateId: (value) => templateEvents.push(["template", value]),
  setNoticeTitle: (value) => templateEvents.push(["title", value]),
  templateId: "notice",
  templates: templateFixtures
});
assert.deepEqual(templateEvents, [
  ["template", "notice"],
  ["kind", "general"],
  ["meta", null],
  ["title", "공지 안내"],
  ["body", "공지 원문"]
]);

const specialTemplateEvents = [];
applyNoticeTemplateAction({
  setNoticeBody: (value) => specialTemplateEvents.push(["body", value]),
  setNoticeKind: (value) => specialTemplateEvents.push(["kind", value]),
  setNoticeSpecialLectureMeta: (value) => specialTemplateEvents.push(["meta", value]),
  setNoticeTemplateId: (value) => specialTemplateEvents.push(["template", value]),
  setNoticeTitle: (value) => specialTemplateEvents.push(["title", value]),
  templateId: "specialLecture",
  templates: templateFixtures
});
assert.deepEqual(specialTemplateEvents, [
  ["template", "specialLecture"],
  ["kind", "special_lecture"],
  ["meta", null],
  ["title", "특강 안내"],
  ["body", "특강 원문"]
]);

const missingTemplateEvents = [];
applyNoticeTemplateAction({
  setNoticeBody: (value) => missingTemplateEvents.push(["body", value]),
  setNoticeKind: (value) => missingTemplateEvents.push(["kind", value]),
  setNoticeSpecialLectureMeta: (value) => missingTemplateEvents.push(["meta", value]),
  setNoticeTemplateId: (value) => missingTemplateEvents.push(["template", value]),
  setNoticeTitle: (value) => missingTemplateEvents.push(["title", value]),
  templateId: "missing",
  templates: templateFixtures
});
assert.deepEqual(missingTemplateEvents, [
  ["template", "missing"],
  ["kind", "general"],
  ["meta", null]
]);

const historyFilterEvents = [];
selectNoticeHistoryFilterAction({
  nextFilter: "failed",
  setActiveWorkspace: (value) => historyFilterEvents.push(["workspace", value]),
  setIsHistoryOpen: (value) => historyFilterEvents.push(["open", value]),
  setJobFilter: (value) => historyFilterEvents.push(["filter", value])
});
assert.deepEqual(historyFilterEvents, [
  ["filter", "failed"],
  ["workspace", "history"],
  ["open", true]
]);

console.log("notification notice actions including background refresh template and filter fixtures passed");
