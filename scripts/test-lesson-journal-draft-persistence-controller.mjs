import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { executeLessonJournalDraftPersistence } from "../src/domains/lessons/lessonJournalDraftPersistenceController.js";

function createStageHarness({
  homeworkCount = 2,
  makeupTaskCount = 1,
  recordCount = 3,
  failAt = ""
} = {}) {
  const events = [];
  let capturedError = null;

  return {
    events,
    getCapturedError: () => capturedError,
    dependencies: {
      persistHomeworks: async () => {
        events.push("homeworks");
        if (failAt === "homeworks") throw new Error("숙제 TARGET 실패");
        return homeworkCount;
      },
      persistMakeupTasks: async () => {
        events.push("makeupTasks");
        if (failAt === "makeupTasks") throw new Error("등원보충 TARGET 실패");
        return makeupTaskCount;
      },
      persistRecords: async () => {
        events.push("records");
        if (failAt === "records") throw new Error("수업기록 TARGET 실패");
        return recordCount;
      },
      onFailure: (error) => {
        events.push("failure");
        capturedError = error;
      }
    }
  };
}

const successHarness = createStageHarness();
assert.deepEqual(
  await executeLessonJournalDraftPersistence({
    hasRecords: true,
    ...successHarness.dependencies
  }),
  {
    ok: true,
    message: "수업일지 · 저장 완료 · 숙제 2건 · 등원보충 1건 · 수업기록 3건"
  }
);
assert.deepEqual(successHarness.events, ["homeworks", "makeupTasks", "records"]);
assert.equal(successHarness.getCapturedError(), null);

const emptyControlHarness = createStageHarness({
  homeworkCount: 0,
  makeupTaskCount: 0,
  recordCount: 99
});
assert.deepEqual(
  await executeLessonJournalDraftPersistence({
    hasRecords: false,
    ...emptyControlHarness.dependencies
  }),
  {
    ok: true,
    message: "수업일지 · 저장 완료 · 변경 없음"
  }
);
assert.deepEqual(emptyControlHarness.events, ["homeworks", "makeupTasks"]);

const homeworkFailureHarness = createStageHarness({ failAt: "homeworks" });
assert.deepEqual(
  await executeLessonJournalDraftPersistence({
    hasRecords: true,
    ...homeworkFailureHarness.dependencies
  }),
  {
    ok: false,
    message: "수업일지 · 저장 실패 · 숙제 TARGET 실패"
  }
);
assert.deepEqual(homeworkFailureHarness.events, ["homeworks", "failure"]);
assert.equal(homeworkFailureHarness.getCapturedError()?.message, "숙제 TARGET 실패");

const makeupFailureHarness = createStageHarness({ failAt: "makeupTasks" });
assert.deepEqual(
  await executeLessonJournalDraftPersistence({
    hasRecords: true,
    ...makeupFailureHarness.dependencies
  }),
  {
    ok: false,
    message: "수업일지 · 부분 저장 · 숙제 2건 · 저장 실패 · 등원보충 TARGET 실패"
  }
);
assert.deepEqual(makeupFailureHarness.events, ["homeworks", "makeupTasks", "failure"]);

const recordFailureHarness = createStageHarness({ failAt: "records" });
assert.deepEqual(
  await executeLessonJournalDraftPersistence({
    hasRecords: true,
    ...recordFailureHarness.dependencies
  }),
  {
    ok: false,
    message: "수업일지 · 부분 저장 · 숙제 2건 · 등원보충 1건 · 저장 실패 · 수업기록 TARGET 실패"
  }
);
assert.deepEqual(recordFailureHarness.events, ["homeworks", "makeupTasks", "records", "failure"]);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const controllerSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalDraftPersistenceController.js", import.meta.url),
  "utf8"
);
const recordApiSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalRecordBulkApi.js", import.meta.url),
  "utf8"
);
const handlerStart = appSource.indexOf("async function handleSaveLessonJournalDrafts(");
const handlerEnd = appSource.indexOf("async function handleSaveRecord(", handlerStart);
const handlerSource = appSource.slice(handlerStart, handlerEnd);

for (const injectedBoundary of [
  "executeLessonJournalDraftPersistence({",
  "persistHomeworks: async () =>",
  "persistMakeupTasks: async () =>",
  "persistRecords: async () =>",
  "onFailure: (error) =>"
]) {
  assert.ok(handlerSource.includes(injectedBoundary), `missing App persistence injection: ${injectedBoundary}`);
}
assert.ok(
  controllerSource.indexOf("await persistHomeworks()") <
    controllerSource.indexOf("await persistMakeupTasks()"),
  "controller must persist homeworks before makeup tasks"
);
assert.ok(
  controllerSource.indexOf("await persistMakeupTasks()") <
    controllerSource.indexOf("await persistRecords()"),
  "controller must persist makeup tasks before records"
);
for (const appOwnedSideEffect of [
  "saveLessonJournalHomeworksWithVerification(",
  "saveLessonJournalMakeupTasksWithVerification(",
  "saveLessonJournalRecordsWithVerification({",
  "request: postJson",
  "homeworksRef.current = nextHomeworks",
  "recordsRef.current = nextRecords",
  "setSaveStates("
]) {
  assert.ok(handlerSource.includes(appOwnedSideEffect), `side effect must remain injected by App: ${appOwnedSideEffect}`);
  assert.ok(!controllerSource.includes(appOwnedSideEffect), `controller must not own App side effect: ${appOwnedSideEffect}`);
}
assert.ok(
  recordApiSource.includes('request("/api/lesson-records/bulk", { records })'),
  "injected record API adapter must retain the bulk route"
);

console.log("lesson journal persistence controller TARGET/CONTROL fixtures passed");
