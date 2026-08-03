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
  },
  setSaveStates: successHarness.setSaveStates
});
const successPromise = successController.save([
  { examPrepId: "row-1", scope: "1단원" },
  { examPrepId: "row-1", scope: "2단원" },
  { examPrepId: "row-2", scope: "3단원" }
]);
assert.deepEqual(successHarness.getCurrent(), {
  untouched: "saved",
  "row-1": "saving",
  "row-2": "saving"
});
await successPromise;
assert.deepEqual(successRequests, [[
  { examPrepId: "row-1", scope: "2단원" },
  { examPrepId: "row-2", scope: "3단원" }
]]);
assert.deepEqual(successHarness.getCurrent(), {
  untouched: "saved",
  "row-1": "saved",
  "row-2": "saved"
});
await successController.save([{ examPrepId: "row-1", scope: "2단원" }]);
assert.equal(successRequests.length, 1, "이미 저장된 동일 값은 다시 요청하지 않아야 합니다.");

const overlapHarness = createStateHarness();
const overlapRequests = [];
const overlapDeferreds = [createDeferred(), createDeferred()];
const overlapController = createExamPrepRowSaveController({
  request: (rows) => {
    overlapRequests.push(rows);
    return overlapDeferreds[overlapRequests.length - 1].promise;
  },
  setSaveStates: overlapHarness.setSaveStates
});
const overlapDrain = overlapController.save([{ examPrepId: "row-overlap", scope: "이전" }]);
overlapController.save([{ examPrepId: "row-overlap", scope: "중간" }]);
overlapController.save([{ examPrepId: "row-overlap", scope: "최신" }]);
assert.equal(overlapRequests.length, 1, "첫 요청 중에는 후속 요청을 동시에 보내면 안 됩니다.");
assert.equal(overlapHarness.getCurrent()["row-overlap"], "saving");

overlapDeferreds[0].resolve();
await overlapDeferreds[0].promise;
await Promise.resolve();
assert.equal(overlapRequests.length, 2);
assert.deepEqual(overlapRequests[1], [{ examPrepId: "row-overlap", scope: "최신" }]);
assert.equal(overlapHarness.getCurrent()["row-overlap"], "saving");

overlapDeferreds[1].resolve();
assert.deepEqual(await overlapDrain, { ok: true });
assert.equal(overlapHarness.getCurrent()["row-overlap"], "saved");

const failureHarness = createStateHarness();
const failureDeferreds = [createDeferred(), createDeferred()];
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
assert.equal(failureRequests.length, 2, "실패 중 들어온 최신 입력은 후속 요청으로 보존해야 합니다.");
assert.deepEqual(failureRequests[1], [{ examPrepId: "row-failed", scope: "최신" }]);
assert.equal(failureHarness.getCurrent()["row-failed"], "saving");

failureDeferreds[1].resolve();
const failureResult = await failureDrain;
assert.equal(failureResult.ok, false);
assert.equal(failureHarness.getCurrent()["row-failed"], "saved");

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
