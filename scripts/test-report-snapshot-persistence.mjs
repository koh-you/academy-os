import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  areReportSnapshotsEqual,
  createReportSnapshot,
  isReportSnapshotRetryMatch,
  saveReportSnapshotWithVerification
} from "../src/domains/reports/reportSnapshotPersistence.js";
import { saveReportSnapshotAction } from "../src/domains/reports/reportSnapshotAction.js";

function createSnapshot(overrides = {}) {
  return {
    body: "안전 보고서 본문",
    createdAt: "2026-08-03T15:00:00.000Z",
    lessonId: "lesson-safe-report",
    reportId: "report-safe-001",
    status: "snapshot_saved",
    studentId: "student-safe-report",
    title: "안전 보고서",
    ...overrides
  };
}

function createStore(initialSnapshots = [], options = {}) {
  let snapshots = structuredClone(initialSnapshots);
  let updatedAt = initialSnapshots.length ? "2026-08-03T14:00:00.000Z" : null;
  let writeCount = 0;
  let unknownThrown = false;
  return {
    get snapshots() {
      return structuredClone(snapshots);
    },
    get writeCount() {
      return writeCount;
    },
    operations: {
      read: async () => ({
        source: options.source ?? "supabase",
        stateRows: updatedAt ? [{ key: "reportSnapshots", updatedAt }] : [],
        states: { reportSnapshots: structuredClone(snapshots) }
      }),
      write: async (states, { expectedUpdatedAt } = {}) => {
        writeCount += 1;
        if (options.conflict || expectedUpdatedAt?.reportSnapshots !== updatedAt) {
          const error = new Error("다른 화면에서 먼저 저장되었습니다.");
          error.code = "APP_STATE_CONFLICT";
          error.statusCode = 409;
          throw error;
        }
        snapshots = structuredClone(states.reportSnapshots);
        updatedAt = `2026-08-03T15:00:0${writeCount}.000Z`;
        if (options.unknownResultOnce && !unknownThrown) {
          unknownThrown = true;
          throw new Error("응답 유실");
        }
        if (options.dropSavedSnapshot) snapshots = structuredClone(initialSnapshots);
      }
    }
  };
}

const created = createReportSnapshot({
  now: () => new Date("2026-08-03T15:00:00.000Z"),
  randomUUID: () => "stable-token",
  report: {
    body: "안전 보고서 본문",
    lesson: { lessonId: "lesson-safe-report" },
    student: { studentId: "student-safe-report" },
    title: "안전 보고서"
  }
});
assert.equal(created.reportId, "report_20260803150000000_student-safe-report_stable-token");
assert.ok(isReportSnapshotRetryMatch(created, {
  body: created.body,
  lessonId: created.lessonId,
  studentId: created.studentId,
  title: created.title
}));

const existing = createSnapshot({ reportId: "report-existing", title: "기존 보고서" });
const target = createSnapshot();
const successfulStore = createStore([existing]);
const saved = await saveReportSnapshotWithVerification({
  operations: successfulStore.operations,
  snapshot: target
});
assert.equal(saved.verified, true);
assert.equal(saved.recovered, false);
assert.equal(successfulStore.writeCount, 1);
assert.deepEqual(saved.reportSnapshots.map((item) => item.reportId), [target.reportId, existing.reportId]);
assert.ok(areReportSnapshotsEqual(saved.snapshot, target));

const unknownStore = createStore([existing], { unknownResultOnce: true });
await assert.rejects(
  saveReportSnapshotWithVerification({ operations: unknownStore.operations, snapshot: target }),
  /응답 유실/
);
const recovered = await saveReportSnapshotWithVerification({
  operations: unknownStore.operations,
  snapshot: target
});
assert.equal(recovered.recovered, true);
assert.equal(unknownStore.writeCount, 1, "unknown-result retry must not append or write twice");
assert.equal(unknownStore.snapshots.filter((item) => item.reportId === target.reportId).length, 1);

const conflictStore = createStore([existing], { conflict: true });
await assert.rejects(
  saveReportSnapshotWithVerification({ operations: conflictStore.operations, snapshot: target }),
  (error) => error.code === "APP_STATE_CONFLICT"
);
assert.deepEqual(conflictStore.snapshots, [existing]);

const duplicateStore = createStore([{ ...target, body: "다른 본문" }]);
await assert.rejects(
  saveReportSnapshotWithVerification({ operations: duplicateStore.operations, snapshot: target }),
  (error) => error.code === "REPORT_SNAPSHOT_CONFLICT"
);
assert.equal(duplicateStore.writeCount, 0);

const mismatchStore = createStore([existing], { dropSavedSnapshot: true });
await assert.rejects(
  saveReportSnapshotWithVerification({ operations: mismatchStore.operations, snapshot: target }),
  (error) => error.code === "REPORT_SNAPSHOT_VERIFICATION_FAILED"
);

const fallbackStore = createStore([], { source: "fallback" });
await assert.rejects(
  saveReportSnapshotWithVerification({ operations: fallbackStore.operations, snapshot: target }),
  (error) => error.code === "REPORT_SNAPSHOT_SOURCE_UNAVAILABLE"
);

const originalFetch = globalThis.fetch;
const actionMutationMap = new Map();
const actionRequests = [];
const appliedSnapshots = [];
const actionStates = [];
let loseFirstResponse = true;
globalThis.fetch = async (_url, options) => {
  const snapshot = JSON.parse(options.body).snapshot;
  actionRequests.push(snapshot);
  if (loseFirstResponse) {
    loseFirstResponse = false;
    throw new Error("응답 유실");
  }
  return {
    json: async () => ({
      ok: true,
      recovered: true,
      reportSnapshots: [snapshot],
      snapshot,
      source: "supabase",
      verified: true
    }),
    ok: true,
    status: 200
  };
};
try {
  const actionReport = {
    body: "action 재시도 본문",
    lessonId: "lesson-action-report",
    studentId: "student-action-report",
    title: "action 재시도 보고서"
  };
  const firstActionResult = await saveReportSnapshotAction({
    mutationMap: actionMutationMap,
    onApply: (snapshots) => appliedSnapshots.push(snapshots),
    onState: (state) => actionStates.push(state),
    report: actionReport,
    sessionToken: "safe-session"
  });
  assert.equal(firstActionResult.ok, false);
  assert.equal(appliedSnapshots.length, 0, "failed request must not update App snapshot source");
  const retryActionResult = await saveReportSnapshotAction({
    mutationMap: actionMutationMap,
    onApply: (snapshots) => appliedSnapshots.push(snapshots),
    onState: (state) => actionStates.push(state),
    report: actionReport,
    sessionToken: "safe-session"
  });
  assert.equal(retryActionResult.ok, true);
  assert.equal(actionRequests[0].reportId, actionRequests[1].reportId, "unknown-result retry must reuse report ID");
  assert.equal(appliedSnapshots.length, 1);
  assert.equal(actionStates.at(-1).state, "saved");
} finally {
  globalThis.fetch = originalFetch;
}

const read = (path) => readFile(new URL(path, import.meta.url), "utf8");
const [actionSource, appSource, apiSource, modalSource, reportRouteSource, serverSource, safeServerSource, sessionGuardSource] = await Promise.all([
  read("../src/domains/reports/reportSnapshotAction.js"),
  read("../src/app/App.jsx"),
  read("../src/domains/reports/reportSnapshotApi.js"),
  read("../src/domains/reports/ReportModal.jsx"),
  read("../src/shared/server/reportSnapshotRouteRegistry.js"),
  read("../api/server.js"),
  read("./safe-local-api.mjs"),
  read("../src/shared/server/sessionRouteGuard.js")
]);
const sharedStateSource = appSource.slice(
  appSource.indexOf("const sharedAppState = useMemo(() => ({"),
  appSource.indexOf("const initialSharedAppStateRef")
);
const safeReportServerSource = safeServerSource.slice(
  safeServerSource.indexOf('if (request.method === "POST" && requestUrl.pathname === "/api/report-snapshots")'),
  safeServerSource.indexOf('if (request.method === "GET" && requestUrl.pathname === "/api/integrations/status")')
);
assert.ok(!sharedStateSource.includes("reportSnapshots"), "report snapshots must not use shared autosave");
for (const boundary of [
  "reportSnapshotMutationRef",
  "saveReportSnapshotAction",
  "onApply: setReportSnapshots",
  "snapshotSaveState",
  "보고서 저장 기능을 불러오지 못했습니다. 다시 시도해 주세요.",
]) {
  assert.ok(appSource.includes(boundary), `missing App report snapshot boundary: ${boundary}`);
}
for (const boundary of [
  'apiUrl("/api/report-snapshots")',
  "Authorization: `Bearer ${sessionToken}`",
  'parseVersionedWriteRequest("POST", "/api/report-snapshots"',
  'parseVersionedWriteResponse("POST", "/api/report-snapshots"',
  'parsedResult.source !== "supabase"',
  "areReportSnapshotsEqual"
]) {
  assert.ok(apiSource.includes(boundary), `missing report snapshot client boundary: ${boundary}`);
}
for (const boundary of [
  "currentMutation?.promise",
  "isReportSnapshotRetryMatch",
  "mutationMap.set(retryKey, { promise: null, snapshot })",
  "onApply?.(result.reportSnapshots)",
  "Supabase 저장 및 재조회 확인 완료"
]) {
  assert.ok(actionSource.includes(boundary), `missing report snapshot action boundary: ${boundary}`);
}
for (const boundary of [
  'requestUrl.pathname !== "/api/report-snapshots"',
  "getTeacherSession(request)",
  "parseVersionedWriteRequest(",
  "saveReportSnapshotWithVerification",
  "read: listAppState",
  "upsertAppState(states, options)"
]) {
  assert.ok(reportRouteSource.includes(boundary), `missing report snapshot server boundary: ${boundary}`);
}
assert.ok(serverSource.includes("createReportSnapshotRouteRegistry({"));
assert.ok(serverSource.includes("await dispatchReportSnapshotRoute({ request, response, requestUrl })"));
assert.ok(sessionGuardSource.includes("function verifyTeacherSessionToken"));
assert.ok(safeReportServerSource.includes('requestUrl.pathname === "/api/report-snapshots"'));
assert.ok(safeReportServerSource.includes("parseVersionedWriteRequest("));
assert.ok(modalSource.includes("closeDisabled={isSaving}"));
assert.ok(modalSource.includes("<ModalFooter>"));
assert.ok(modalSource.includes("reportSnapshotSaveFeedback"));
assert.ok(modalSource.includes("disabled={isSaving}"));

console.log("report snapshot explicit CAS, readback, retry, authentication, and UI fixtures passed");
