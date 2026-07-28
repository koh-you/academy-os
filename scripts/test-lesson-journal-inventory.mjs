import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const saveViewModelSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalSaveViewModel.js", import.meta.url),
  "utf8"
);
const reservationAuditModelSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalReservationAuditModel.js", import.meta.url),
  "utf8"
);
const previousMemoSelectorSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalPreviousMemoSelector.js", import.meta.url),
  "utf8"
);
const journalHeaderSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalHeader.jsx", import.meta.url),
  "utf8"
);
const journalHeaderModelSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalHeaderModel.js", import.meta.url),
  "utf8"
);
const closureNoticeSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalClosureNotice.jsx", import.meta.url),
  "utf8"
);
const closureNoticeModelSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalClosureNoticeModel.js", import.meta.url),
  "utf8"
);

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
  "createLessonJournalSaveViewModel({",
  "draftChangeCount: journalDraftChangeCount",
  "hasDraftChanges: hasJournalDraftChanges",
  "stickySaveMessage: journalStickySaveMessage",
  "stickySaveState: journalStickySaveState",
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

for (const extractedSaveContract of [
  "recordSaveStates.includes(\"saving\")",
  "recordSaveStates.includes(\"dirty\")",
  "recordSaveStates.includes(\"failed\")",
  "Object.keys(recordDrafts ?? {}).length",
  "Object.keys(homeworkDrafts ?? {}).length",
  "Object.keys(makeupTaskDrafts ?? {}).length",
  "저장 전 변경 ${draftChangeCount}건"
]) {
  assert.ok(
    saveViewModelSource.includes(extractedSaveContract),
    `missing extracted 17A-1 contract: ${extractedSaveContract}`
  );
}

for (const extractedReservationContract of [
  "scheduledParentCount",
  "scheduledStudentCount",
  "orphanScheduledJobs",
  "issueReservationJobs",
  "visibleReservationStudents",
  "reservationInspectMode === \"issues\""
]) {
  assert.ok(
    reservationAuditModelSource.includes(extractedReservationContract),
    `missing extracted 17A-2 contract: ${extractedReservationContract}`
  );
}
assert.ok(
  journalSource.includes("createLessonJournalReservationAuditModel({"),
  "LessonJournalDetail must compose the extracted reservation audit model"
);

for (const extractedPreviousMemoContract of [
  "const acknowledgedMemoCutoff =",
  "const previousLessonRecordInCurrentGroup =",
  "const referenceMemoRecord =",
  "referenceRecord: visiblePreviousMemoRecord ? null : referenceMemoRecord ?? null"
]) {
  assert.ok(
    previousMemoSelectorSource.includes(extractedPreviousMemoContract),
    `missing extracted 17A-3 contract: ${extractedPreviousMemoContract}`
  );
}
assert.ok(
  journalSource.includes("selectPreviousLessonMemoContext({"),
  "LessonJournalDetail must compose the extracted previous memo selector"
);
assert.ok(
  !journalSource.includes("function getPreviousLessonMemoContext(student)"),
  "LessonJournalDetail must not retain the previous memo selector implementation"
);
assert.ok(journalSource.includes("<LessonJournalHeader"), "LessonJournalDetail must compose the extracted header");
assert.ok(
  !journalSource.includes('<header className="pageTop lessonJournalHeader">'),
  "LessonJournalDetail must not retain the header markup"
);
for (const extractedHeaderContract of [
  "createLessonJournalHeaderModel",
  "onClick={onBack}",
  "onClick={onOpenExamPrep}",
  "onClick={() => onEditLesson(lesson)}",
  "onClick={() => onDeleteLesson(lesson.lessonId)}"
]) {
  assert.ok(
    `${journalHeaderSource}\n${journalHeaderModelSource}`.includes(extractedHeaderContract),
    `missing extracted 17B-1 contract: ${extractedHeaderContract}`
  );
}
assert.ok(
  journalSource.includes("<LessonJournalClosureNotice"),
  "LessonJournalDetail must compose the extracted closure notice"
);
assert.ok(
  !journalSource.includes("<section className={`panel closureJournalNotice"),
  "LessonJournalDetail must not retain the closure notice markup"
);
for (const extractedClosureContract of [
  "createLessonJournalClosureNoticeModel",
  "휴강 보충 수업일지",
  "연결 보충 없음",
  "원 휴강 연결 확인 필요",
  "이 일정 생성만으로 알림톡·문자는 발송되거나 예약되지 않습니다."
]) {
  assert.ok(
    `${closureNoticeSource}\n${closureNoticeModelSource}`.includes(extractedClosureContract),
    `missing extracted 17B-2 contract: ${extractedClosureContract}`
  );
}

console.log("LessonJournalDetail roadmap 17 inventory boundary passed");
