import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const [
  inlineStatusSource,
  stickySaveBarSource,
  appSource,
  reportModalSource,
  lessonModalSource,
  lessonModalStateSource,
  lessonNestedPanelsSource,
  studentLifecycleSource,
  studentProfileSource,
  planningToolSource,
  specialLectureSource,
  supplementControlSource,
  supplementActionSource,
  examAnalysisSource,
  supplementTaskActionBarSource
] = await Promise.all([
  read("src/shared/components/InlineSaveStatus.jsx"),
  read("src/shared/components/StickySaveBar.jsx"),
  read("src/app/App.jsx"),
  read("src/domains/reports/ReportModal.jsx"),
  read("src/domains/lessons/LessonModal.jsx"),
  read("src/domains/lessons/lessonModalSaveState.js"),
  read("src/domains/lessons/LessonNestedPanels.jsx"),
  read("src/domains/students/StudentLifecycleOverlays.jsx"),
  read("src/domains/students/StudentProfileModal.jsx"),
  read("src/domains/teacher/PlanningToolCenters.jsx"),
  read("src/domains/specialLectures/SpecialLectureApplicationPanel.jsx"),
  read("src/domains/supplements/SupplementNotificationControlModal.jsx"),
  read("src/domains/supplements/supplementTaskActions.js"),
  read("src/domains/exams/ExamAnalysisPipelineCenter.jsx"),
  read("src/domains/supplements/SupplementTaskActionBar.jsx")
]);

const commonStates = ["idle", "dirty", "saving", "verifying", "saved", "failed"];
for (const state of commonStates) {
  assert.ok(inlineStatusSource.includes(`${state}:`), `missing common modal save state: ${state}`);
}
assert.ok(inlineStatusSource.includes('return Object.prototype.hasOwnProperty.call(saveStateLabels, saveState) ? saveState : "idle"'));
assert.ok(stickySaveBarSource.includes("<InlineSaveStatus label={label} saveState={saveState} />"));

for (const contract of [
  'state: "saving"',
  'state: "verifying"',
  'state: "saved"',
  'state: "failed"',
  '<InlineSaveStatus label="월 정규수업" saveState={saveStatus.state} />'
]) {
  assert.ok(appSource.includes(contract), `monthly lesson modal state contract missing: ${contract}`);
}
for (const contract of [
  '<InlineSaveStatus label="보고서" saveState={saveState.state} />',
  'const isSaving = saveState.state === "saving"'
]) {
  assert.ok(reportModalSource.includes(contract), `report modal state contract missing: ${contract}`);
}
assert.ok(lessonModalStateSource.includes('return currentState === "failed" ? "dirty" : currentState'));
for (const state of ["saving", "saved", "failed"]) {
  assert.ok(lessonModalStateSource.includes(`state: "${state}"`), `lesson modal state missing: ${state}`);
}
assert.ok(lessonModalSource.includes("setSaveState(nextSaveState.state)"));
assert.ok(lessonNestedPanelsSource.includes('const [passSaveState, setPassSaveState] = useState({ message: "", mode: "", state: "idle" })'));
assert.ok(lessonNestedPanelsSource.includes('const [scheduleSaveState, setScheduleSaveState] = useState({ message: "", state: "idle" })'));

for (const source of [studentLifecycleSource, studentProfileSource, planningToolSource, specialLectureSource]) {
  assert.ok(source.includes('"saving"'));
  assert.ok(source.includes('"saved"'));
  assert.ok(source.includes('"failed"'));
}
assert.ok(studentLifecycleSource.includes('<InlineSaveStatus label="학생 상태·미래 수업 명단" saveState="saving" />'));
assert.ok(studentProfileSource.includes('<InlineSaveStatus label="기본정보" saveState={effectiveProfileSaveState} />'));
assert.ok(planningToolSource.includes('closeDisabled={rosterSaveState === "saving"}'));
assert.ok(specialLectureSource.includes("<StickySaveBar"));
assert.ok(specialLectureSource.includes("saveState={planSaveState.state}"));

// Provider/process feedback is intentionally not normalized into database save completion.
assert.ok(supplementControlSource.includes("supplementNotificationControlFeedback ${feedback.tone}"));
assert.equal(supplementControlSource.includes("InlineSaveStatus"), false);
for (const contract of [
  "if (result?.notificationFailed)",
  'lesson: "synced"',
  'makeupTask: "saved"',
  'studentReminder: result.supplementReminderStatus || "failed"'
]) {
  assert.ok(supplementActionSource.includes(contract), `supplement composite state contract missing: ${contract}`);
}
assert.ok(examAnalysisSource.includes('const outputStickySaveState = outputStatus.state === "success" ? "saved" : outputStatus.state'));
assert.ok(examAnalysisSource.includes('saveState={reviewStatus.state === "success" ? "saved" : reviewStatus.state}'));

// These are contextual action bars, not final modal footers.
assert.ok(supplementTaskActionBarSource.includes('className="modalActions supplementSplitActions supplementTaskActions"'));
assert.ok(lessonNestedPanelsSource.includes('className="modalActions supplementSplitActions"'));

console.log("modal save-state audit passed · common vocabulary 6 · composite exceptions 3 · contextual action bars 2");
