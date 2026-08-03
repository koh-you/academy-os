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
  let capturedFailureContext = null;

  return {
    events,
    getCapturedError: () => capturedError,
    getCapturedFailureContext: () => capturedFailureContext,
    dependencies: {
      persistJournalRows: async () => {
        events.push("journalRows");
        if (failAt === "journalRows") throw new Error("기록·숙제 TARGET 실패");
        return { homeworkCount, recordCount };
      },
      persistMakeupTasks: async () => {
        events.push("makeupTasks");
        if (failAt === "makeupTasks") throw new Error("등원보충 TARGET 실패");
        return makeupTaskCount;
      },
      onFailure: (error, context) => {
        events.push("failure");
        capturedError = error;
        capturedFailureContext = context;
      }
    }
  };
}

const successHarness = createStageHarness();
assert.deepEqual(
  await executeLessonJournalDraftPersistence({
    ...successHarness.dependencies
  }),
  {
    ok: true,
    message: "수업일지 · 저장 완료 · 숙제 2건 · 수업기록 3건 · 등원보충 1건"
  }
);
assert.deepEqual(successHarness.events, ["journalRows", "makeupTasks"]);
assert.equal(successHarness.getCapturedError(), null);

const emptyControlHarness = createStageHarness({
  homeworkCount: 0,
  makeupTaskCount: 0,
  recordCount: 0
});
assert.deepEqual(
  await executeLessonJournalDraftPersistence({
    ...emptyControlHarness.dependencies
  }),
  {
    ok: true,
    message: "수업일지 · 저장 완료 · 변경 없음"
  }
);
assert.deepEqual(emptyControlHarness.events, ["journalRows", "makeupTasks"]);

const homeworkFailureHarness = createStageHarness({ failAt: "journalRows" });
assert.deepEqual(
  await executeLessonJournalDraftPersistence({
    ...homeworkFailureHarness.dependencies
  }),
  {
    ok: false,
    message: "수업일지 · 저장 실패 · 기록·숙제 TARGET 실패"
  }
);
assert.deepEqual(homeworkFailureHarness.events, ["journalRows", "failure"]);
assert.equal(homeworkFailureHarness.getCapturedError()?.message, "기록·숙제 TARGET 실패");
assert.deepEqual(homeworkFailureHarness.getCapturedFailureContext(), { journalRowsCompleted: false });

const makeupFailureHarness = createStageHarness({ failAt: "makeupTasks" });
assert.deepEqual(
  await executeLessonJournalDraftPersistence({
    ...makeupFailureHarness.dependencies
  }),
  {
    ok: false,
    message: "수업일지 · 부분 저장 · 숙제 2건 · 수업기록 3건 · 저장 실패 · 등원보충 TARGET 실패"
  }
);
assert.deepEqual(makeupFailureHarness.events, ["journalRows", "makeupTasks", "failure"]);
assert.deepEqual(makeupFailureHarness.getCapturedFailureContext(), { journalRowsCompleted: true });

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const controllerSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalDraftPersistenceController.js", import.meta.url),
  "utf8"
);
const rowsActionSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalRowsSaveAction.js", import.meta.url),
  "utf8"
);
const handlerStart = appSource.indexOf("async function handleSaveLessonJournalDrafts(");
const handlerEnd = appSource.indexOf("async function handleSaveRecord(", handlerStart);
const handlerSource = appSource.slice(handlerStart, handlerEnd);

for (const injectedBoundary of [
  "executeLessonJournalDraftPersistence({",
  "persistJournalRows: async () =>",
  "persistMakeupTasks: async () =>",
  "onFailure: (error, { journalRowsCompleted } = {}) =>"
]) {
  assert.ok(handlerSource.includes(injectedBoundary), `missing App persistence injection: ${injectedBoundary}`);
}
assert.ok(
  controllerSource.indexOf("await persistJournalRows()") <
    controllerSource.indexOf("await persistMakeupTasks()"),
  "controller must persist the atomic record/homework plan before makeup tasks"
);
for (const appOwnedSideEffect of [
  "saveLessonJournalRowsAction({",
  "saveLessonJournalMakeupTasksWithVerification(",
  "request: postJsonWithTimeout",
  "homeworksRef.current = nextHomeworks",
  "recordsRef.current = nextRecords",
  "setSaveStates("
]) {
  assert.ok(handlerSource.includes(appOwnedSideEffect), `side effect must remain injected by App: ${appOwnedSideEffect}`);
  assert.ok(!controllerSource.includes(appOwnedSideEffect), `controller must not own App side effect: ${appOwnedSideEffect}`);
}
assert.ok(
  rowsActionSource.includes('"/api/lesson-journal/rows/save"'),
  "dynamic row save action must retain the atomic endpoint"
);

console.log("lesson journal persistence controller TARGET/CONTROL fixtures passed");
