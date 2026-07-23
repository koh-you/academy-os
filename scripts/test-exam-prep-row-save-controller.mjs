import assert from "node:assert/strict";
import { persistExamPrepRowsWithState } from "../src/domains/exams/examPrepRowSaveController.js";

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
await persistExamPrepRowsWithState({
  request: async () => {
    emptyRequestCount += 1;
  },
  requestIdsByRow: {},
  rowsToPersist: [null, undefined],
  setSaveStates: emptyHarness.setSaveStates
});
assert.equal(emptyRequestCount, 0);
assert.deepEqual(emptyHarness.getCurrent(), {});

const successHarness = createStateHarness({ untouched: "saved" });
const successRequestIds = {};
let savedRows = null;
const successPromise = persistExamPrepRowsWithState({
  request: async (rows) => {
    savedRows = rows;
  },
  requestIdsByRow: successRequestIds,
  rowsToPersist: [
    { examPrepId: "row-1", scope: "1단원" },
    { examPrepId: "row-1", scope: "2단원" },
    { examPrepId: "row-2", scope: "3단원" }
  ],
  setSaveStates: successHarness.setSaveStates
});
assert.deepEqual(successHarness.getCurrent(), {
  untouched: "saved",
  "row-1": "saving",
  "row-2": "saving"
});
await successPromise;
assert.equal(savedRows.length, 3);
assert.deepEqual(successRequestIds, { "row-1": 1, "row-2": 1 });
assert.deepEqual(successHarness.getCurrent(), {
  untouched: "saved",
  "row-1": "saved",
  "row-2": "saved"
});

const overlapHarness = createStateHarness();
const overlapRequestIds = {};
const firstDeferred = createDeferred();
const secondDeferred = createDeferred();
const firstSave = persistExamPrepRowsWithState({
  request: () => firstDeferred.promise,
  requestIdsByRow: overlapRequestIds,
  rowsToPersist: [{ examPrepId: "row-overlap", scope: "이전" }],
  setSaveStates: overlapHarness.setSaveStates
});
const secondSave = persistExamPrepRowsWithState({
  request: () => secondDeferred.promise,
  requestIdsByRow: overlapRequestIds,
  rowsToPersist: [{ examPrepId: "row-overlap", scope: "최신" }],
  setSaveStates: overlapHarness.setSaveStates
});
assert.deepEqual(overlapRequestIds, { "row-overlap": 2 });
assert.equal(overlapHarness.getCurrent()["row-overlap"], "saving");
firstDeferred.resolve();
await firstSave;
assert.equal(overlapHarness.getCurrent()["row-overlap"], "saving");
secondDeferred.resolve();
await secondSave;
assert.equal(overlapHarness.getCurrent()["row-overlap"], "saved");

const failureHarness = createStateHarness();
const failure = new Error("저장 실패 fixture");
let observedError = null;
await persistExamPrepRowsWithState({
  onError: (error) => {
    observedError = error;
  },
  request: async () => {
    throw failure;
  },
  requestIdsByRow: {},
  rowsToPersist: [{ examPrepId: "row-failed" }],
  setSaveStates: failureHarness.setSaveStates
});
assert.equal(observedError, failure);
assert.equal(failureHarness.getCurrent()["row-failed"], "failed");

console.log("exam prep row save controller fixtures passed");
