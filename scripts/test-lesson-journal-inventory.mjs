import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");

function section(source, start, end) {
  const startIndex = source.indexOf(start);
  const endIndex = source.indexOf(end, startIndex + start.length);
  assert.ok(startIndex >= 0, `missing section start: ${start}`);
  assert.ok(endIndex > startIndex, `missing section end: ${end}`);
  return source.slice(startIndex, endIndex);
}

const journalSource = section(
  appSource,
  "function LessonJournalDetail({",
  "function CommentComposerModal({"
);

for (const inputContract of [
  "allRecords = []",
  "homeworks = []",
  "lessonNotificationPlan = { mode: \"default\" }",
  "makeupTasks = []",
  "notificationJobs = []",
  "onSaveLessonJournalDrafts",
  "onSaveRecord",
  "onUpdateHomework",
  "onUpdateMakeupTask",
  "onApplyLessonNotificationPlan",
  "onReconcileSolapiNotificationResults",
  "onCancelNotificationJob",
  "testAttempts = []",
  "testSessions = []"
]) {
  assert.ok(journalSource.includes(inputContract), `missing journal input contract: ${inputContract}`);
}

for (const localState of [
  "journalEditMode",
  "journalRecordDrafts",
  "journalHomeworkDrafts",
  "journalMakeupTaskDrafts",
  "journalManualSaveMessage",
  "commentModal",
  "prepMemoModal",
  "reservationAudit",
  "reservationInspectMode",
  "reservationApplyState",
  "solapiResultRefreshState",
  "cancelingReservationJobId"
]) {
  assert.ok(journalSource.includes(localState), `missing journal local state: ${localState}`);
}

for (const draftContract of [
  "const journalRecordDraftCount = Object.keys(journalRecordDrafts).length",
  "const journalHomeworkDraftCount = Object.keys(journalHomeworkDrafts).length",
  "const journalMakeupTaskDraftCount = Object.keys(journalMakeupTaskDrafts).length",
  "const hasJournalDraftChanges =",
  "const journalStickySaveState =",
  "const journalStickySaveMessage =",
  "async function saveJournalDrafts()",
  "Object.values(journalRecordDrafts)",
  "Object.values(journalHomeworkDrafts)",
  "Object.values(journalMakeupTaskDrafts)",
  "if (!saved?.ok)",
  "수정본 유지"
]) {
  assert.ok(journalSource.includes(draftContract), `missing journal draft contract: ${draftContract}`);
}

for (const directSideEffect of [
  "/api/notification-jobs?date=",
  "onCancelNotificationJob?.(",
  "onApplyLessonNotificationPlan(lesson.lessonId)",
  "onReconcileSolapiNotificationResults?.("
]) {
  assert.ok(journalSource.includes(directSideEffect), `missing journal side-effect boundary: ${directSideEffect}`);
}

for (const removedDirectProviderBoundary of [
  "/api/solapi/groups?date=",
  "/api/solapi/messages?date=",
  'postJson("/api/solapi/groups/cancel"',
  "cancelingSolapiGroupId"
]) {
  assert.ok(
    !journalSource.includes(removedDirectProviderBoundary),
    `restored removed direct provider boundary: ${removedDirectProviderBoundary}`
  );
}

for (const specializedBoundary of [
  "<SupplementMakeupLessonDetail",
  "<ExamPrepLessonDetail",
  "if (isSupplementMakeupLesson)",
  "if (isExamPrepLessonCurrent)"
]) {
  assert.ok(journalSource.includes(specializedBoundary), `missing specialized detail boundary: ${specializedBoundary}`);
}

const saveHandlerSource = section(
  appSource,
  "async function handleSaveLessonJournalDrafts",
  "async function handleSaveRecord"
);
for (const persistenceContract of [
  "saveLessonJournalHomeworksWithVerification",
  "saveLessonJournalMakeupTasksWithVerification",
  'postJson("/api/lesson-records/bulk"',
  'recordResult.source !== "supabase"',
  "hasMatchingVerifiedLessonRecordFields",
  "completedSources.push",
  "부분 저장",
  "setSaveStates"
]) {
  assert.ok(saveHandlerSource.includes(persistenceContract), `missing journal persistence: ${persistenceContract}`);
}

for (const reservedNextUnit of [
  "const lessonJournalSaveStatus = (() =>",
  "const journalRecordDraftCount =",
  "const journalStickySaveState =",
  "const journalStickySaveMessage ="
]) {
  assert.ok(journalSource.includes(reservedNextUnit), `missing 17A-1 source: ${reservedNextUnit}`);
}

console.log("LessonJournalDetail roadmap 17 inventory boundary passed");
