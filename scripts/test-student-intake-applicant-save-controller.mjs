import assert from "node:assert/strict";
import { createStudentIntakeApplicantSaveController } from "../src/domains/students/studentIntakeApplicantSaveController.js";

function createDeferred() {
  let resolve;
  let reject;
  const promise = new Promise((resolvePromise, rejectPromise) => {
    resolve = resolvePromise;
    reject = rejectPromise;
  });
  return { promise, reject, resolve };
}

function createStateHarness() {
  let current = {};
  return {
    getCurrent: () => current,
    setSaveStates: (updater) => {
      current = updater(current);
    }
  };
}

const emptyHarness = createStateHarness();
let emptyRequests = 0;
const emptyController = createStudentIntakeApplicantSaveController({
  request: async () => {
    emptyRequests += 1;
  },
  setSaveStates: emptyHarness.setSaveStates
});
await emptyController.save(null);
assert.equal(emptyRequests, 0);

const overlapHarness = createStateHarness();
const overlapDeferreds = [createDeferred(), createDeferred()];
const overlapRequests = [];
const persistedResults = [];
const overlapController = createStudentIntakeApplicantSaveController({
  onPersisted: (result) => persistedResults.push(result),
  request: (applicant) => {
    overlapRequests.push(applicant);
    return overlapDeferreds[overlapRequests.length - 1].promise;
  },
  setSaveStates: overlapHarness.setSaveStates
});

const firstDraft = {
  applicantId: "intake-overlap",
  currentLearningProcess: "첫 입력",
  updatedAt: "version-1"
};
const drainPromise = overlapController.save(firstDraft);
overlapController.save({ ...firstDraft, currentLearningProcess: "중간 입력" });
overlapController.save({ ...firstDraft, currentLearningProcess: "최신 입력" });
assert.equal(overlapRequests.length, 1, "첫 저장 중에는 같은 후보 요청을 겹쳐 보내면 안 됩니다.");
assert.equal(overlapHarness.getCurrent()[firstDraft.applicantId], "saving");

overlapDeferreds[0].resolve({ ...firstDraft, updatedAt: "version-2" });
await overlapDeferreds[0].promise;
await Promise.resolve();
assert.equal(overlapRequests.length, 2);
assert.equal(overlapRequests[1].currentLearningProcess, "최신 입력");
assert.equal(overlapRequests[1].updatedAt, "version-2");
assert.equal(persistedResults[0].hasPendingChanges, true);
assert.equal(persistedResults[0].pendingApplicant.currentLearningProcess, "최신 입력");
assert.equal(persistedResults[0].pendingApplicant.updatedAt, "version-2");

overlapDeferreds[1].resolve({ ...overlapRequests[1], updatedAt: "version-3" });
assert.deepEqual(await drainPromise, { ok: true });
assert.equal(overlapHarness.getCurrent()[firstDraft.applicantId], "saved");
assert.equal(persistedResults[1].hasPendingChanges, false);
assert.deepEqual(await overlapController.waitForIdle(firstDraft.applicantId), { ok: true });

const failureHarness = createStateHarness();
const failureDeferred = createDeferred();
const failureRequests = [];
const failureErrors = [];
const failureController = createStudentIntakeApplicantSaveController({
  onError: (error) => failureErrors.push(error),
  request: (applicant) => {
    failureRequests.push(applicant);
    return failureDeferred.promise;
  },
  setSaveStates: failureHarness.setSaveStates
});
const failureDrain = failureController.save({
  applicantId: "intake-failed",
  memo: "저장 요청 A",
  updatedAt: "version-1"
});
failureController.save({
  applicantId: "intake-failed",
  memo: "보존할 후속 입력 B",
  updatedAt: "version-1"
});
const unknownOutcome = new Error("응답 불명 fixture");
failureDeferred.reject(unknownOutcome);
await assert.rejects(failureDeferred.promise, unknownOutcome);
await Promise.resolve();
const failureResult = await failureDrain;
assert.equal(failureResult.ok, false);
assert.equal(failureResult.error, unknownOutcome);
assert.equal(failureRequests.length, 1, "결과 불명 실패 뒤 후속 입력을 자동 재전송하면 안 됩니다.");
assert.equal(failureHarness.getCurrent()["intake-failed"], "failed");
assert.equal(failureErrors[0], unknownOutcome);

console.log("student intake applicant save controller serialization fixtures passed");
