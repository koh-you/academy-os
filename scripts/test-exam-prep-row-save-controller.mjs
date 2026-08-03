import assert from "node:assert/strict";
import { createExamPrepRowSaveController } from "../src/domains/exams/examPrepRowSaveController.js";

function createDeferred() {
  let resolve;
  let reject;
  const promise = new Promise((resolvePromise, rejectPromise) => {
    resolve = resolvePromise;
    reject = rejectPromise;
  });
  return { promise, reject, resolve };
}

function createStateHarness(initial = {}) {
  let current = initial;
  return {
    getCurrent: () => current,
    setSaveStates: (updater) => {
      current = updater(current);
    }
  };
}

function createVerifiedResult(rows, version) {
  return {
    conflicts: [],
    examPrepRows: rows.map((row) => ({ ...row, updatedAt: version })),
    failures: [],
    source: "supabase",
    verified: true
  };
}

const emptyHarness = createStateHarness();
let emptyRequestCount = 0;
const emptyController = createExamPrepRowSaveController({
  request: async () => {
    emptyRequestCount += 1;
  },
  setSaveStates: emptyHarness.setSaveStates
});
await emptyController.save([null, undefined, {}]);
assert.equal(emptyRequestCount, 0);
assert.deepEqual(emptyHarness.getCurrent(), {});

const successHarness = createStateHarness({ untouched: "saved" });
const successRequests = [];
const successController = createExamPrepRowSaveController({
  request: async (rows) => {
    successRequests.push(rows);
    return createVerifiedResult(rows, "version-2");
  },
  setSaveStates: successHarness.setSaveStates
});
const successPromise = successController.save([
  { examPrepId: "row-1", scope: "1단원", updatedAt: "version-1" },
  { examPrepId: "row-1", scope: "2단원", updatedAt: "version-1" },
  { examPrepId: "row-2", scope: "3단원", updatedAt: "version-1" }
]);
assert.deepEqual(successHarness.getCurrent(), {
  untouched: "saved",
  "row-1": "saving",
  "row-2": "saving"
});
await successPromise;
assert.deepEqual(successRequests, [[
  { examPrepId: "row-1", scope: "2단원", updatedAt: "version-1" },
  { examPrepId: "row-2", scope: "3단원", updatedAt: "version-1" }
]]);
assert.deepEqual(successHarness.getCurrent(), {
  untouched: "saved",
  "row-1": "saved",
  "row-2": "saved"
});
await successController.save([{ examPrepId: "row-1", scope: "2단원", updatedAt: "version-2" }]);
assert.equal(successRequests.length, 1, "이미 저장된 동일 값은 다시 요청하지 않아야 합니다.");

const overlapHarness = createStateHarness();
const overlapRequests = [];
const overlapDeferreds = [createDeferred(), createDeferred()];
const overlapPersisted = [];
const overlapController = createExamPrepRowSaveController({
  onPersisted: (result) => overlapPersisted.push(result),
  request: (rows) => {
    overlapRequests.push(rows);
    return overlapDeferreds[overlapRequests.length - 1].promise;
  },
  setSaveStates: overlapHarness.setSaveStates
});
const overlapDrain = overlapController.save([{ examPrepId: "row-overlap", scope: "이전", updatedAt: "version-1" }]);
overlapController.save([{ examPrepId: "row-overlap", scope: "중간", updatedAt: "version-1" }]);
overlapController.save([{ examPrepId: "row-overlap", scope: "최신", updatedAt: "version-1" }]);
assert.equal(overlapRequests.length, 1, "첫 요청 중에는 후속 요청을 동시에 보내면 안 됩니다.");
assert.equal(overlapHarness.getCurrent()["row-overlap"], "saving");

overlapDeferreds[0].resolve(createVerifiedResult(overlapRequests[0], "version-2"));
await overlapDeferreds[0].promise;
await Promise.resolve();
assert.equal(overlapRequests.length, 2);
assert.deepEqual(overlapRequests[1], [{ examPrepId: "row-overlap", scope: "최신", updatedAt: "version-2" }]);
assert.equal(overlapHarness.getCurrent()["row-overlap"], "saving");
assert.deepEqual(overlapPersisted[0], {
  hasPendingChanges: true,
  row: { examPrepId: "row-overlap", scope: "이전", updatedAt: "version-2" }
});

overlapDeferreds[1].resolve(createVerifiedResult(overlapRequests[1], "version-3"));
assert.deepEqual(await overlapDrain, { ok: true });
assert.equal(overlapHarness.getCurrent()["row-overlap"], "saved");
assert.equal(overlapPersisted[1].hasPendingChanges, false);
assert.equal(overlapPersisted[1].row.updatedAt, "version-3");

const failureHarness = createStateHarness();
const failureDeferreds = [createDeferred()];
const failureRequests = [];
const failure = new Error("저장 실패 fixture");
let observedError = null;
const failureController = createExamPrepRowSaveController({
  onError: (error) => {
    observedError = error;
  },
  request: (rows) => {
    failureRequests.push(rows);
    return failureDeferreds[failureRequests.length - 1].promise;
  },
  setSaveStates: failureHarness.setSaveStates
});
const failureDrain = failureController.save([{ examPrepId: "row-failed", scope: "이전" }]);
failureController.save([{ examPrepId: "row-failed", scope: "최신" }]);
failureDeferreds[0].reject(failure);
await assert.rejects(failureDeferreds[0].promise, failure);
await Promise.resolve();
assert.equal(observedError, failure);
const failureResult = await failureDrain;
assert.equal(failureResult.ok, false);
assert.equal(failureRequests.length, 1, "결과를 모르는 실패 뒤에는 최신 입력을 자동 재전송하면 안 됩니다.");
assert.equal(failureHarness.getCurrent()["row-failed"], "failed");

const conflictHarness = createStateHarness();
const conflictErrors = [];
const conflictController = createExamPrepRowSaveController({
  onError: (error) => conflictErrors.push(error),
  request: async () => ({
    conflicts: [{
      code: "EXAM_PREP_ROW_CONFLICT",
      examPrepId: "row-conflict",
      message: "다른 화면에서 먼저 변경되었습니다."
    }],
    examPrepRows: [],
    failures: [],
    source: "supabase",
    verified: false
  }),
  setSaveStates: conflictHarness.setSaveStates
});
const conflictResult = await conflictController.save([
  { examPrepId: "row-conflict", scope: "현재 화면 입력", updatedAt: "version-1" }
]);
assert.equal(conflictResult.ok, false);
assert.equal(conflictHarness.getCurrent()["row-conflict"], "failed");
assert.equal(conflictErrors[0].code, "EXAM_PREP_ROW_CONFLICT");

const terminalFailureHarness = createStateHarness();
const terminalFailureController = createExamPrepRowSaveController({
  request: async () => {
    throw failure;
  },
  setSaveStates: terminalFailureHarness.setSaveStates
});
const terminalFailureResult = await terminalFailureController.save([
  { examPrepId: "row-terminal-failed" }
]);
assert.equal(terminalFailureResult.ok, false);
assert.equal(terminalFailureHarness.getCurrent()["row-terminal-failed"], "failed");

console.log("exam prep row save controller serialization fixtures passed");
