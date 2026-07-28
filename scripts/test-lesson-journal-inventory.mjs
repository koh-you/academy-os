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
const reminderPanelSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalReminderPanel.jsx", import.meta.url),
  "utf8"
);
const reminderPanelModelSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalReminderPanelModel.js", import.meta.url),
  "utf8"
);
const notificationBarSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalNotificationBar.jsx", import.meta.url),
  "utf8"
);
const notificationBarModelSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalNotificationBarModel.js", import.meta.url),
  "utf8"
);
const reservationModalSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalReservationModal.jsx", import.meta.url),
  "utf8"
);
const reservationModalModelSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalReservationModalModel.js", import.meta.url),
  "utf8"
);
const memoIndicatorModelSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalMemoIndicatorModel.js", import.meta.url),
  "utf8"
);
const studentIdentitySource = await readFile(
  new URL("../src/domains/lessons/LessonJournalStudentIdentity.jsx", import.meta.url),
  "utf8"
);
const studentIdentityModelSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalStudentIdentityModel.js", import.meta.url),
  "utf8"
);
const attendanceButtonSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalAttendanceButton.jsx", import.meta.url),
  "utf8"
);
const attendanceButtonModelSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalAttendanceButtonModel.js", import.meta.url),
  "utf8"
);
const editableMemoCardSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalEditableMemoCard.jsx", import.meta.url),
  "utf8"
);
const editableMemoCardModelSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalEditableMemoCardModel.js", import.meta.url),
  "utf8"
);
const editableFieldsSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalEditableFields.jsx", import.meta.url),
  "utf8"
);
const editableFieldsModelSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalEditableFieldsModel.js", import.meta.url),
  "utf8"
);
const assignmentStatusCellSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalAssignmentStatusCell.jsx", import.meta.url),
  "utf8"
);
const assignmentStatusCellModelSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalAssignmentStatusCellModel.js", import.meta.url),
  "utf8"
);
const notificationCommentCellSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalNotificationCommentCell.jsx", import.meta.url),
  "utf8"
);
const notificationCommentCellModelSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalNotificationCommentCellModel.js", import.meta.url),
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
assert.ok(
  journalSource.includes("<LessonJournalReminderPanel"),
  "LessonJournalDetail must compose the extracted reminder panel"
);
assert.ok(
  !journalSource.includes('<section className="panel lessonReminderPanel">'),
  "LessonJournalDetail must not retain the reminder panel shell"
);
for (const extractedReminderContract of [
  "createLessonJournalReminderPanelModel",
  "수업 관련 운영 알림",
  "대시보드 원본 알림 중 오늘 수업 학생과 연결된 항목입니다.",
  "{children}"
]) {
  assert.ok(
    `${reminderPanelSource}\n${reminderPanelModelSource}`.includes(extractedReminderContract),
    `missing extracted 17B-3 contract: ${extractedReminderContract}`
  );
}
assert.ok(
  journalSource.includes("<LessonJournalNotificationBar"),
  "LessonJournalDetail must compose the extracted notification bar"
);
assert.ok(
  !journalSource.includes('<section className="panel lessonSaveSummary"'),
  "LessonJournalDetail must not retain the notification bar markup"
);
for (const extractedNotificationBarContract of [
  "createLessonJournalNotificationBarModel",
  "onUpdateLessonNotificationPlan?.(lessonId, event.target.value)",
  "onClick={onOpenReservationAudit}",
  "onClick={onRefreshSolapiSendResults}",
  "onClick={onApplySolapiReservationPlan}",
  "disabled={!canApplySolapiReservation}"
]) {
  assert.ok(
    `${notificationBarSource}\n${notificationBarModelSource}`.includes(extractedNotificationBarContract),
    `missing extracted 17B-4 contract: ${extractedNotificationBarContract}`
  );
}
assert.ok(
  journalSource.includes("<LessonJournalReservationModal"),
  "LessonJournalDetail must compose the extracted reservation modal"
);
assert.ok(
  !journalSource.includes('className="reservationSummaryGrid"'),
  "LessonJournalDetail must not retain the reservation modal markup"
);
for (const extractedReservationModalContract of [
  "createLessonJournalReservationModalModel",
  "onCancelReservationJob(job)",
  "onClick={onRefreshReservationAudit}",
  "onClick={onRefreshSolapiSendResults}",
  "onClick={onScheduleTodayTwoPm}",
  "DataTableShell"
]) {
  assert.ok(
    `${reservationModalSource}\n${reservationModalModelSource}`.includes(extractedReservationModalContract),
    `missing extracted 17B-5 contract: ${extractedReservationModalContract}`
  );
}
for (const removedRawSolapiContract of ["onCancelSolapiGroup", "solapiGroups", "solapiMessages"]) {
  assert.ok(
    !reservationModalSource.includes(removedRawSolapiContract),
    `17B-5 must not restore raw Solapi audit: ${removedRawSolapiContract}`
  );
}
assert.ok(
  journalSource.includes("createLessonJournalMemoIndicatorModel({"),
  "LessonJournalDetail must compose the extracted memo indicator model"
);
for (const extractedMemoIndicatorContract of [
  "hasCurrentMemo",
  "priorMemoNeedsAttention",
  "현재 메모 작성됨",
  "이전 메모 확인 완료",
  "학생·학부모 작성창으로 가져오기"
]) {
  assert.ok(
    memoIndicatorModelSource.includes(extractedMemoIndicatorContract),
    `missing extracted 17C-1 contract: ${extractedMemoIndicatorContract}`
  );
}
assert.ok(
  journalSource.includes("<LessonJournalStudentIdentity"),
  "LessonJournalDetail must compose the extracted student identity"
);
assert.ok(
  !journalSource.includes('className="studentCell compact"'),
  "LessonJournalDetail must not retain the student identity markup"
);
for (const extractedStudentIdentityContract of [
  "createLessonJournalStudentIdentityModel",
  "studentPortalPreviewButton",
  "onOpenStudentPreview(student.studentId)",
  "specialLectureStudentTime",
  "studentScheduleType"
]) {
  assert.ok(
    `${studentIdentitySource}\n${studentIdentityModelSource}`.includes(extractedStudentIdentityContract),
    `missing extracted 17C-2 contract: ${extractedStudentIdentityContract}`
  );
}
assert.ok(
  journalSource.includes("<LessonJournalAttendanceButton"),
  "LessonJournalDetail must compose the extracted attendance button"
);
assert.ok(
  !journalSource.includes('className={`attendanceBadge attendance-'),
  "LessonJournalDetail must not retain the attendance button markup"
);
for (const extractedAttendanceButtonContract of [
  "createLessonJournalAttendanceButtonModel",
  "onOpenAttendance({ lesson: attendanceLesson, record, student })",
  "attendanceMismatchText",
  "checkoutMissingText",
  "disabled={model.disabled}"
]) {
  assert.ok(
    `${attendanceButtonSource}\n${attendanceButtonModelSource}`.includes(extractedAttendanceButtonContract),
    `missing extracted 17C-3 contract: ${extractedAttendanceButtonContract}`
  );
}
assert.ok(
  !appSource.includes("function EditableMemoCard("),
  "App must not retain the editable memo card implementation"
);
for (const extractedEditableMemoCardContract of [
  "createLessonJournalEditableMemoCardModel",
  "textarea.scrollHeight",
  "if (model.shouldFocus) textarea.focus()",
  "event.key === \"Escape\"",
  "event.ctrlKey || event.metaKey",
  "onFocus={() => onEdit(editKey)}"
]) {
  assert.ok(
    `${editableMemoCardSource}\n${editableMemoCardModelSource}`.includes(extractedEditableMemoCardContract),
    `missing extracted 17C-4 contract: ${extractedEditableMemoCardContract}`
  );
}
assert.ok(
  journalSource.includes("<LessonJournalEditableFields"),
  "LessonJournalDetail must compose the extracted editable fields"
);
assert.equal(
  (journalSource.match(/<LessonJournalEditableMemoCard/g) ?? []).length,
  0,
  "LessonJournalDetail must not compose the four memo cards directly"
);
for (const extractedEditableFieldsContract of [
  "createLessonJournalEditableFieldsModel",
  "<LessonJournalEditableMemoCard",
  "field.source === \"record\"",
  "onUpdateRecordDraft(field.field, value)",
  "onUpdateHomeworkDraft(field.field, value)",
  "previousLessonMaterial || student.textbook || student.currentTextbook || \"강의 교재\""
]) {
  assert.ok(
    `${editableFieldsSource}\n${editableFieldsModelSource}`.includes(extractedEditableFieldsContract),
    `missing extracted 17C-5 contract: ${extractedEditableFieldsContract}`
  );
}
assert.ok(
  journalSource.includes("<LessonJournalAssignmentStatusCell"),
  "LessonJournalDetail must compose the extracted assignment status cell"
);
assert.ok(
  !journalSource.includes('className="assignmentStatusCell"'),
  "LessonJournalDetail must not retain the assignment status cell markup"
);
for (const extractedAssignmentStatusContract of [
  "createLessonJournalAssignmentStatusCellModel",
  "onAssignmentStatusChange(event.target.value)",
  "onApplyHomeworkFollowupMethod(method.id)",
  "showHomeworkFollowupActions",
  "pendingHomeworkFollowupText"
]) {
  assert.ok(
    `${assignmentStatusCellSource}\n${assignmentStatusCellModelSource}`.includes(extractedAssignmentStatusContract),
    `missing extracted 17C-6 contract: ${extractedAssignmentStatusContract}`
  );
}
assert.equal(
  (journalSource.match(/<LessonJournalNotificationCommentCell/g) ?? []).length,
  2,
  "LessonJournalDetail must compose parent and student notification comment cells"
);
assert.ok(
  !journalSource.includes('className="journalCommentCell"'),
  "LessonJournalDetail must not retain notification comment cell markup"
);
for (const extractedNotificationCommentContract of [
  "createLessonJournalNotificationCommentCellModel",
  "onClick={onOpen}",
  "onClick={onToggleMute}",
  "muteButtonClassName",
  "openButtonClassName",
  "statusClassName"
]) {
  assert.ok(
    `${notificationCommentCellSource}\n${notificationCommentCellModelSource}`.includes(
      extractedNotificationCommentContract
    ),
    `missing extracted 17C-7 contract: ${extractedNotificationCommentContract}`
  );
}

console.log("LessonJournalDetail roadmap 17 inventory boundary passed");
