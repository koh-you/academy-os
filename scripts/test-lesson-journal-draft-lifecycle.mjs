import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalDraftLifecycleInitialState } from "../src/domains/lessons/useLessonJournalDraftLifecycle.js";

const lessonAState = {
  ...createLessonJournalDraftLifecycleInitialState(),
  journalEditMode: true,
  journalHomeworkDrafts: {
    "lesson_A:student_TARGET:previous": {
      studentId: "student_TARGET",
      title: "TARGET 지난 숙제"
    }
  },
  journalMakeupTaskDrafts: {
    "lesson_A:student_TARGET": {
      makeupTaskId: "makeup_TARGET"
    }
  },
  journalManualSaveMessage: "수업일지 · 저장 필요",
  journalRecordDrafts: {
    "lesson_A:student_TARGET": {
      lessonId: "lesson_A",
      lessonMemo: "TARGET draft"
    }
  }
};
const lessonASnapshot = structuredClone(lessonAState);
const lessonBState = createLessonJournalDraftLifecycleInitialState();

assert.deepEqual(lessonBState, {
  journalEditMode: false,
  journalHomeworkDrafts: {},
  journalMakeupTaskDrafts: {},
  journalManualSaveMessage: "",
  journalRecordDrafts: {}
});
assert.deepEqual(lessonAState, lessonASnapshot);
assert.notEqual(lessonBState.journalHomeworkDrafts, lessonAState.journalHomeworkDrafts);
assert.notEqual(lessonBState.journalMakeupTaskDrafts, lessonAState.journalMakeupTaskDrafts);
assert.notEqual(lessonBState.journalRecordDrafts, lessonAState.journalRecordDrafts);

const secondInitialState = createLessonJournalDraftLifecycleInitialState();
assert.notEqual(secondInitialState.journalHomeworkDrafts, lessonBState.journalHomeworkDrafts);
assert.notEqual(secondInitialState.journalMakeupTaskDrafts, lessonBState.journalMakeupTaskDrafts);
assert.notEqual(secondInitialState.journalRecordDrafts, lessonBState.journalRecordDrafts);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const lifecycleSource = await readFile(
  new URL("../src/domains/lessons/useLessonJournalDraftLifecycle.js", import.meta.url),
  "utf8"
);
const detailStart = appSource.indexOf("function LessonJournalDetail(");
const detailEnd = appSource.indexOf("\nfunction ", detailStart + 1);
const detailSource = appSource.slice(detailStart, detailEnd);
const localStateBoundaryEnd = detailSource.indexOf("const commentAiProvider");
const localStateBoundary = detailSource.slice(0, localStateBoundaryEnd);

for (const binding of [
  'import { useLessonJournalDraftLifecycle } from "../domains/lessons/useLessonJournalDraftLifecycle.js"',
  "} = useLessonJournalDraftLifecycle(lesson.lessonId);",
  "journalEditMode,",
  "journalHomeworkDrafts,",
  "journalMakeupTaskDrafts,",
  "journalManualSaveMessage,",
  "journalRecordDrafts,",
  "setJournalEditMode,",
  "setJournalHomeworkDrafts,",
  "setJournalMakeupTaskDrafts,",
  "setJournalManualSaveMessage,",
  "setJournalRecordDrafts"
]) {
  assert.ok(appSource.includes(binding), `missing App lifecycle binding: ${binding}`);
}
for (const removedLocalState of [
  "const [journalEditMode, setJournalEditMode] = useState(false)",
  "const [journalRecordDrafts, setJournalRecordDrafts] = useState({})",
  "const [journalHomeworkDrafts, setJournalHomeworkDrafts] = useState({})",
  "const [journalMakeupTaskDrafts, setJournalMakeupTaskDrafts] = useState({})",
  'const [journalManualSaveMessage, setJournalManualSaveMessage] = useState("")'
]) {
  assert.ok(!localStateBoundary.includes(removedLocalState), `App must not retain draft lifecycle state: ${removedLocalState}`);
}
for (const hookContract of [
  "export function createLessonJournalDraftLifecycleInitialState()",
  "export function useLessonJournalDraftLifecycle(lessonId)",
  "const [journalEditMode, setJournalEditMode] = useState(false)",
  "const [journalRecordDrafts, setJournalRecordDrafts] = useState({})",
  "const [journalHomeworkDrafts, setJournalHomeworkDrafts] = useState({})",
  "const [journalMakeupTaskDrafts, setJournalMakeupTaskDrafts] = useState({})",
  'const [journalManualSaveMessage, setJournalManualSaveMessage] = useState("")',
  "const initialState = createLessonJournalDraftLifecycleInitialState()",
  "setJournalEditMode(initialState.journalEditMode)",
  "setJournalRecordDrafts(initialState.journalRecordDrafts)",
  "setJournalHomeworkDrafts(initialState.journalHomeworkDrafts)",
  "setJournalMakeupTaskDrafts(initialState.journalMakeupTaskDrafts)",
  "setJournalManualSaveMessage(initialState.journalManualSaveMessage)",
  "}, [lessonId]);"
]) {
  assert.ok(lifecycleSource.includes(hookContract), `missing lifecycle hook contract: ${hookContract}`);
}
for (const reservationBoundary of [
  'const [reservationApplyState, setReservationApplyState] = useState("idle")',
  'const [solapiResultRefreshState, setSolapiResultRefreshState] = useState("idle")',
  'setReservationApplyState("idle")',
  'setSolapiResultRefreshState("idle")'
]) {
  assert.ok(detailSource.includes(reservationBoundary), `reservation state must remain in App: ${reservationBoundary}`);
  assert.ok(!lifecycleSource.includes(reservationBoundary), `draft hook must not own reservation state: ${reservationBoundary}`);
}
for (const forbiddenSideEffect of [
  "fetch(",
  "postJson",
  "/api/",
  "Supabase",
  "localStorage",
  "notificationJobs",
  "Solapi"
]) {
  assert.ok(!lifecycleSource.includes(forbiddenSideEffect), `draft lifecycle hook must stay local: ${forbiddenSideEffect}`);
}

console.log("lesson journal draft lifecycle lesson A→B TARGET/CONTROL fixtures passed");
