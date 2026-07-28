import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalReservationSyncStatus } from "../src/domains/lessons/lessonJournalReservationSyncModel.js";

const dependencies = {
  getPayloadFingerprint: (payload) =>
    [payload.recipient, payload.scheduledDate, payload.previousHomework].join("|"),
  getProviderReference: (job) => job.providerReference || "",
  isAssignmentStatusUnrecorded: (status) => status === "not_entered"
};
const createStatus = (overrides = {}) =>
  createLessonJournalReservationSyncStatus({
    ...dependencies,
    ...overrides
  });

let expectedItemsCallCount = 0;
assert.deepEqual(
  createStatus({
    applyState: "applying",
    getExpectedItems: () => {
      expectedItemsCallCount += 1;
      throw new Error("early branch must not build expected items");
    }
  }),
  {
    detail: "Solapi 실제 예약/취소를 반영하는 중입니다.",
    state: "applying",
    label: "Solapi 반영 중"
  }
);
assert.equal(expectedItemsCallCount, 0);
assert.deepEqual(createStatus({ applyState: "failed" }), {
  detail: "예약 확인에서 실패 항목을 확인한 뒤 다시 반영하세요.",
  state: "failed",
  label: "Solapi 반영 실패"
});
assert.deepEqual(createStatus({ hasDraftChanges: true }), {
  detail: "먼저 수업일지 변경 저장을 눌러 최신 저장본을 확정하세요.",
  state: "blocked",
  label: "수업일지 저장 필요"
});
assert.deepEqual(createStatus({ notificationPlanMode: "none" }), {
  detail: "현재 활성 Solapi 예약이 없습니다.",
  state: "synced",
  label: "Solapi 예약 없음"
});
assert.deepEqual(
  createStatus({
    activeJobs: [{ notificationJobId: "job_TARGET" }],
    notificationPlanMode: "none"
  }),
  {
    detail: "활성 예약 1건을 취소 반영해야 합니다.",
    state: "needs",
    label: "Solapi 취소 반영 필요"
  }
);
assert.deepEqual(createStatus({ notificationPlanMode: "manual" }), {
  detail: "수동 예약 시각이 없습니다.",
  state: "failed",
  label: "예약 시각 없음"
});
assert.deepEqual(
  createStatus({
    hasResultRefreshTarget: true,
    isScheduleExpired: true
  }),
  {
    detail: "예약 시각이 지났습니다. 새 예약이 아니라 Solapi 발송결과를 OS 상태에 반영하세요.",
    state: "resultDue",
    label: "발송결과 확인 필요"
  }
);
assert.deepEqual(
  createStatus({
    failedResultCount: 2,
    isScheduleExpired: true
  }),
  {
    detail: "Solapi 발송 실패 2건이 반영되었습니다. 예약 확인에서 실패 내용을 확인하세요.",
    state: "failed",
    label: "발송 실패 2건"
  }
);
assert.deepEqual(
  createStatus({
    completedResultCount: 2,
    isScheduleExpired: true
  }),
  {
    detail: "Solapi 발송 완료 2건이 OS 상태에 반영되었습니다.",
    state: "synced",
    label: "발송 결과 반영 완료"
  }
);
assert.deepEqual(createStatus({ isScheduleExpired: true }), {
  detail: "기본 예약 시각이 지나 수동 예약으로 다시 잡아야 합니다.",
  state: "failed",
  label: "예약 시간 지남"
});
assert.deepEqual(
  createStatus({
    activeJobs: [{ notificationJobId: "job_CONTROL" }],
    getExpectedItems: () => []
  }),
  {
    detail: "발송 대상은 없지만 활성 예약 1건이 남아 있습니다.",
    state: "needs",
    label: "Solapi 취소 반영 필요"
  }
);
assert.deepEqual(createStatus({ getExpectedItems: () => [] }), {
  detail: "현재 발송 대상이 없습니다.",
  state: "synced",
  label: "Solapi 예약 대상 없음"
});

const expectedItems = [
  { notificationJobId: "job_TARGET", fingerprint: "fingerprint_TARGET" },
  { notificationJobId: "job_MISSING", fingerprint: "fingerprint_MISSING" }
];
const activeJobs = [
  {
    notificationJobId: "job_TARGET",
    payload: { reservationFingerprint: "fingerprint_CHANGED" },
    provider: "solapi",
    providerReference: "group_TARGET",
    status: "scheduled"
  },
  {
    notificationJobId: "job_EXTRA",
    payload: { reservationFingerprint: "fingerprint_EXTRA" },
    provider: "solapi",
    providerReference: "group_EXTRA",
    status: "scheduled"
  }
];
const expectedItemsSnapshot = structuredClone(expectedItems);
const activeJobsSnapshot = structuredClone(activeJobs);
assert.deepEqual(
  createStatus({
    activeJobs,
    getExpectedItems: () => expectedItems
  }),
  {
    detail: "누락 1건 · 남은 예약 1건 · 내용 변경 1건",
    state: "needs",
    label: "Solapi 예약 업데이트 필요"
  }
);
assert.deepEqual(expectedItems, expectedItemsSnapshot);
assert.deepEqual(activeJobs, activeJobsSnapshot);

const matchingExpectedItems = [
  {
    notificationJobId: "job_MATCH",
    fingerprint: "01012345678|2026-07-29T09:00:00.000Z|"
  }
];
const matchingActiveJobs = [
  {
    notificationJobId: "job_MATCH",
    payload: {
      assignmentStatus: "not_entered",
      previousHomework: "이 값은 fingerprint에서 비워짐"
    },
    provider: "solapi",
    providerReference: "group_MATCH",
    recipient: "01012345678",
    scheduledAt: "2026-07-29T09:00:00.000Z",
    status: "scheduled"
  }
];
assert.deepEqual(
  createStatus({
    activeJobs: matchingActiveJobs,
    getExpectedItems: () => matchingExpectedItems
  }),
  {
    detail: "저장된 최종본 기준 Solapi 예약 1건이 맞습니다.",
    state: "synced",
    label: "Solapi 반영 완료"
  }
);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const modelSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalReservationSyncModel.js", import.meta.url),
  "utf8"
);
const detailStart = appSource.indexOf("function LessonJournalDetail(");
const detailEnd = appSource.indexOf("\nfunction PreparationMemoModal(", detailStart);
const detailSource = appSource.slice(detailStart, detailEnd);

for (const binding of [
  'import { createLessonJournalReservationSyncStatus } from "../domains/lessons/lessonJournalReservationSyncModel.js"',
  "const solapiReservationSyncStatus = createLessonJournalReservationSyncStatus({",
  "activeJobs: activeLessonReservationJobs,",
  "applyState: reservationApplyState,",
  "getExpectedItems: getExpectedSolapiReservationItems,",
  "getPayloadFingerprint: getLessonReservationPayloadFingerprint,",
  "getProviderReference: getNotificationJobProviderReference,",
  "isAssignmentStatusUnrecorded,",
  "isScheduleExpired:",
  "notificationPlanScheduledAt: lessonNotificationPlan?.scheduledAt"
]) {
  assert.ok(appSource.includes(binding), `missing App sync-model binding: ${binding}`);
}
assert.ok(!detailSource.includes("function getSolapiReservationSyncStatus()"));
for (const AppOwnedBoundary of [
  "function getExpectedSolapiReservationItems()",
  "async function refreshReservationAudit()",
  "async function applySolapiReservationPlan()",
  "async function refreshSolapiSendResults()"
]) {
  assert.ok(detailSource.includes(AppOwnedBoundary), `reservation boundary must remain in App: ${AppOwnedBoundary}`);
  assert.ok(!modelSource.includes(AppOwnedBoundary), `sync model must not own action: ${AppOwnedBoundary}`);
}
for (const forbiddenSideEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "getJsonWithTimeout",
  "/api/",
  "Supabase",
  "localStorage",
  "notificationJobs",
  "new Date"
]) {
  assert.ok(!modelSource.includes(forbiddenSideEffect), `sync model must stay pure: ${forbiddenSideEffect}`);
}

console.log("lesson journal reservation sync status TARGET/CONTROL fixtures passed");
