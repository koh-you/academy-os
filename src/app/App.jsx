import { useEffect, useMemo, useRef, useState } from "react";
import { createAppViewChangePlan } from "./appViewChangePlan.js";
import { selectAppSessionSurface } from "./appSessionSurfaceSelector.js";
import { createTeacherViewAdapters, TeacherViewOutlet } from "./TeacherViewOutlet.js";
import { lazyTeacherViewComponents } from "./lazyTeacherViewComponents.js";
import { useAppSession } from "./useAppSession.js";
import { RoleLoginScreen } from "./RoleLoginScreen.jsx";
import { Sidebar } from "./Sidebar.jsx";
import { EvaluationCenter } from "../domains/teacher/EvaluationCenter.jsx";
import {
  createExamPrepDeleteAuditId,
  executeExamPrepDeleteOrchestration
} from "../domains/exams/examPrepDeleteOrchestration.js";
import {
  deleteExamPrepLessonRequest,
  saveExamPrepLessonsRequest
} from "../domains/exams/examPrepLessonApi.js";
import {
  createExamPrepLessonReconcilePlan
} from "../domains/exams/examPrepLessonReconcilePlan.js";
import {
  deleteExamPrepRowRequest,
  saveExamPrepRowsRequest
} from "../domains/exams/examPrepRowsApi.js";
import { createExamPrepRowSaveController } from "../domains/exams/examPrepRowSaveController.js";
import { normalizeExamPrepRowReviewDraft } from "../domains/exams/examReviewDraft.js";
import {
  getWithdrawalDateKey,
  getWithdrawalFutureLessonStartDate,
  isStudentVisibleInLessonJournal
} from "../domains/students/withdrawalLessonBoundary.js";
import {
  getDefaultTallyStudentId,
  getTallyStudentMergeCandidates,
  getTallyStudentMergeChanges,
  getTallyStudentReplacementChanges,
  mergeTallyStudentValues,
  replaceTallyStudentValues,
  specialLectureTallyStudentFields
} from "../domains/students/tallyStudentMerge.js";
import { ParentPortal } from "../domains/portals/ParentPortal.jsx";
import { calculateAttendanceStats } from "../domains/portals/StudentMyPageTab.jsx";
import { StudentPortalShell } from "../domains/portals/StudentPortalShell.jsx";
import {
  cleanupStudentExamPostFiles,
  confirmTeacherExamPostSubmission,
  getExamPostFileOpenUrl,
  saveStudentExamPostSubmission,
  uploadStudentExamPostFile
} from "../domains/portals/examPostApi.js";
import {
  completeStudentHomework,
  createStudentQuestion,
  deleteStudentQuestion,
  updateStudentQuestion
} from "../domains/portals/studentPortalApi.js";
import { canCancelNotificationJob } from "../domains/notifications/notificationJobSelectors.js";
import {
  mergeLessonNotificationJobLists,
  mergeNotificationJobLists,
  replaceNotificationJobListRows,
  selectValidNotificationJobs,
  upsertNotificationJobList
} from "../domains/notifications/notificationJobState.js";
import { createNotificationJobsRefreshController } from "../domains/notifications/notificationJobsRefreshController.js";
import { createNotificationJobsReconcileController } from "../domains/notifications/notificationJobsReconcileController.js";
import {
  createNotificationJobReconcileSavedStates,
  mergeNotificationJobReconcileRecords
} from "../domains/notifications/notificationJobReconcileRecordState.js";
import { formatNotificationJobStatusLabel } from "../domains/notifications/notificationJobStatusFormatter.js";
import {
  canDeleteNotificationJobForDisplay,
  getNotificationJobProviderReferenceForDisplay
} from "../domains/notifications/notificationJobDisplaySelectors.js";
import { getNotificationProviderReference } from "../domains/notifications/notificationProviderReference.js";
import { createLessonReservationPayloadFingerprint } from "../domains/lessons/lessonReservationPayloadFingerprint.js";
import { createLessonReservationPayloadSnapshot } from "../domains/lessons/lessonReservationPayloadSnapshot.js";
import {
  createLessonNotificationJobId,
  isActiveNotificationJobStatus,
  isLessonRecordNotificationMuted,
  selectLessonStudentRecord
} from "../domains/lessons/lessonNotificationJobSelectors.js";
import { createLessonNotificationJob } from "../domains/lessons/lessonNotificationJobBuilder.js";
import { createLessonNotificationJobBatch } from "../domains/lessons/lessonNotificationJobBatch.js";
import { createLessonNotificationRecordStatusPayload } from "../domains/lessons/lessonNotificationRecordStatusPayload.js";
import { createLessonNotificationRecordStatusRows } from "../domains/lessons/lessonNotificationRecordStatusRows.js";
import { getExamPrepIdFromDerivedMathEvent } from "../domains/lessons/derivedMathEventExamPrepIdSelector.js";
import { createExamPeriodSundayDateSelector } from "../domains/lessons/examPeriodSundayDateSelector.js";
import { createExamPrepLessonCandidateBuilder } from "../domains/lessons/examPrepLessonCandidateBuilder.js";
import { mergeGeneratedCalendarLessons } from "../domains/lessons/generatedLessonCalendarMerge.js";
import {
  addGeneratedLessonManualOverrideKey,
  addGeneratedLessonSuppressedKey,
  normalizeGeneratedLessonControls,
  removeGeneratedLessonManualOverrideKey,
  removeGeneratedLessonSuppressedKey
} from "../domains/lessons/generatedLessonControlsModel.js";
import { getExamPrepGeneratedKeyForDate } from "../domains/lessons/generatedExamPrepKeyBuilder.js";
import { createGeneratedLessonIdentityModel } from "../domains/lessons/generatedLessonIdentityModel.js";
import { createGeneratedPreExamLessonBuilder } from "../domains/lessons/generatedPreExamLessonBuilder.js";
import { createGeneratedSchoolEventStudentSelector } from "../domains/lessons/generatedSchoolEventStudentSelector.js";
import { selectAutoGeneratedDisplayLessons } from "../domains/lessons/generatedLessonDisplaySelectors.js";
import { selectGeneratedLessonPlanRows } from "../domains/lessons/generatedLessonPlanSelectors.js";
import { buildGeneratedLessonPlan } from "../domains/lessons/generatedLessonPlanBuilder.js";
import { areGeneratedLessonPersistedFieldsEqual } from "../domains/lessons/generatedLessonPersistenceModel.js";
import { selectGeneratedPreExamLessonsToSync } from "../domains/lessons/generatedPreExamSyncSelector.js";
import { createPreExamGeneratedKey } from "../domains/lessons/generatedPreExamKeyBuilder.js";
import { createPreExamLessonId } from "../domains/lessons/generatedPreExamLessonIdBuilder.js";
import { createPersistedPreExamRowRepair } from "../domains/lessons/persistedPreExamRowRepair.js";
import { createPreExamMathLabelInference } from "../domains/lessons/preExamMathLabelInference.js";
import { selectChangedGeneratedLessonPlanRows } from "../domains/lessons/generatedLessonRepairSelectors.js";
import { selectGeneratedLessonsToSave } from "../domains/lessons/generatedLessonSaveSelector.js";
import { createAppStatePersistenceController } from "../domains/appState/appStatePersistenceController.js";
import { selectGeneratedLessonPlanItemsByKey } from "../domains/lessons/generatedLessonTargetSelector.js";
import {
  createGeneratedLessonFailedStatus,
  createGeneratedLessonSavedStatus,
  createGeneratedLessonSavingStatus
} from "../domains/lessons/generatedLessonSaveStatus.js";
import { mergeGeneratedLessonLists } from "../domains/lessons/generatedLessonState.js";
import {
  applySupplementScheduleNotificationsRequest,
  cancelActiveSupplementScheduleNoticesRequest,
  cancelSupplementNotificationControlRequest,
  cancelSupplementStudentReminderRequest,
  createSupplementScheduleNotificationPlan,
  reserveSupplementNotificationControlRequest,
  reserveSupplementScheduleNoticeJobRequest,
  reserveSupplementScheduleNoticesRequest,
  reserveSupplementStudentReminderJobRequest
} from "../domains/notifications/supplementNotificationOrchestration.js";
import {
  cancelNotificationJobRequest,
  cancelNotificationJobsRequest,
  persistFailedNotificationJobRequest,
  reserveNotificationJobRequest
} from "../domains/notifications/notificationJobApi.js";
import {
  getNotificationJobLabel,
  resolveNotificationJobStatusClass
} from "../domains/notifications/notificationCenterConfig.js";
import { isSupplementScheduleForLessonComment } from "../domains/notifications/supplementSchedule.js";
import {
  createCanceledAbsenceMakeupTask,
  createCanceledSupplementLesson,
  getAbsenceSourcePreservationSnapshot,
  getCanceledAbsenceMakeupSaveSnapshot
} from "../domains/supplements/supplementCancellation.js";
import { createSupplementSchedulePersistencePlan } from "../domains/supplements/supplementSchedulePlan.js";
import { findSupplementTaskForCandidate } from "../domains/supplements/supplementCenterSelectionModel.js";
import {
  createPersistableSupplementTask,
  createSupplementTaskDraft as createSupplementTaskDraftModel,
  getSupplementHomeworkNoteValue,
  getSupplementNotificationDraftFieldForControl,
  getSupplementPersistedEditFingerprint,
  getSupplementTaskDraftDiff as getSupplementTaskDraftDiffModel,
  isSupplementTeacherEditedField
} from "../domains/supplements/supplementTaskDraft.js";
import { getSupplementNotificationControlDisplay } from "../domains/supplements/supplementStatus.js";
import { SpecialLectureApplicationPanel } from "../domains/specialLectures/SpecialLectureApplicationPanel.jsx";
import { isSpecialLectureStudentScheduleSynced } from "../domains/specialLectures/specialLecturePlanSync.js";
import {
  createTestAttemptId,
  createTestSessionIdForPaper,
  getTestPaperKindLabel
} from "../domains/tests/testManagerUtils.js";
import {
  RecentTestSessionList,
  StudentTestHistoryPanel,
  TestAttemptActions,
  TestAttemptFormGrid,
  TestAttemptMeta,
  TestAttemptPanelHeader,
  TestAttemptTable,
  TestManagerTabs
} from "../domains/tests/TestManagerPanels.jsx";
import {
  SpecialLectureGuideBasicFields,
  SpecialLectureGuideLinkFields,
  SpecialLectureGuideSelector,
  SpecialLectureGuideTextFields,
  SpecialLectureHighlightEditor,
  SpecialLectureNoSelection,
  SpecialLectureNoticeMemoField,
  SpecialLectureScheduleCalculator,
  SpecialLectureSessionPlanEditor,
  SpecialLectureSpecialNotesField,
  SpecialLectureManagementBar
} from "../domains/specialLectures/SpecialLectureManagementPanel.jsx";
import {
  SpecialLectureNoticeActionPanel,
  SpecialLecturePreviewColumn,
  SpecialLecturePublicPage
} from "../domains/specialLectures/SpecialLecturePublicPage.jsx";
import {
  SchoolAcademicOverviewPanel,
  SchoolCalendarFilterBar,
  SchoolCalendarHeader,
  SchoolCalendarSaveNotice,
  SchoolDateScheduleModal,
  SchoolEventFormModal,
  SchoolMonthGrid,
  SchoolMonthHeader
} from "../domains/schoolCalendar/SchoolCalendarComponents.jsx";
import {
  compactCalendarLabel,
  formatCalendarEventLabel,
  formatCalendarSummaryLabel,
  formatDateRangeText,
  formatPeriodSummaryLabel,
  getSchoolCalendarEventColor,
  getSchoolCalendarFilterGroup,
  getSchoolCalendarSchoolColor,
  isDateWithinEvent,
  joinCalendarLabel,
  normalizeSchoolName,
  parseDateRangeText,
  updateDateRangeField
} from "../domains/schoolCalendar/schoolCalendarUtils.js";
import {
  assignmentStatusLabels,
  assignmentStatusOptions,
  assignmentStatusParentMessages,
  assignmentStatusStudentMessages,
  getAssignmentStatusMessage,
  getAssignmentStatusParentMessage,
  getAssignmentStatusStudentMessage,
  getHomeworkStatusFromAssignmentStatus,
  isAssignmentStatusHomeworkMakeupCandidate,
  isAssignmentStatusUnrecorded,
  normalizeAssignmentStatusValue
} from "../domains/lessons/assignmentStatus.js";
import {
  buildMonthlyRegularLessonOpenPlan,
  getMonthlyRegularLessonOpenSnapshot
} from "../domains/lessons/monthlyRegularLessonOpen.js";
import {
  clearAttendanceFields,
  formatKoreaTimeFromIso,
  formatShortDateLabel,
  getAttendanceDateMismatch,
  normalizeTimeInput
} from "../domains/lessons/attendance.js";
import {
  createAttendanceRequestBindings
} from "../domains/lessons/attendanceApi.js";
import { AttendanceKiosk } from "../domains/lessons/AttendanceKiosk.jsx";
import { checkKioskAttendanceAction } from "../domains/lessons/attendanceKioskCheckController.js";
import { previewKioskAttendanceAction } from "../domains/lessons/attendanceKioskPreviewController.js";
import { AttendanceModal } from "../domains/lessons/AttendanceModal.jsx";
import {
  defaultAttendanceSettings,
  normalizeAttendanceSettings
} from "../domains/lessons/attendanceSettings.js";
import {
  useAttendanceDateRollover,
  useAttendanceRecordSync
} from "../domains/lessons/useAttendanceRecordSync.js";
import { executeLessonJournalDraftPersistence } from "../domains/lessons/lessonJournalDraftPersistenceController.js";
import { createLessonJournalDraftPersistencePlan } from "../domains/lessons/lessonJournalDraftPersistencePlan.js";
import {
  createLessonJournalRecordSaveStates,
  mergeVerifiedLessonJournalHomeworks,
  mergeVerifiedLessonJournalMakeupTasks,
  mergeVerifiedLessonJournalRecords
} from "../domains/lessons/lessonJournalDraftPersistenceState.js";
import {
  createLessonJournalRecordDraft,
  createLessonJournalRecordFieldPatch
} from "../domains/lessons/lessonJournalRecordDraft.js";
import { createLessonJournalDraftSaveRequest } from "../domains/lessons/lessonJournalDraftSaveRequest.js";
import { saveLessonJournalHomeworksWithVerification } from "../domains/lessons/lessonJournalHomeworkBulkApi.js";
import {
  createLessonJournalHomeworkDraft,
  createLessonJournalHomeworkDraftKey,
  getLessonJournalHomeworkDraftTitle
} from "../domains/lessons/lessonJournalHomeworkDraft.js";
import { createLessonJournalHomeworkFollowupPlan } from "../domains/lessons/lessonJournalHomeworkFollowupPlan.js";
import { createLessonJournalAssignmentStatusPlan } from "../domains/lessons/lessonJournalAssignmentStatusPlan.js";
import { resolveLessonJournalEditableText } from "../domains/lessons/lessonJournalEditableFieldsModel.js";
import {
  getLessonJournalEditableRecord,
  removeLessonJournalMakeupTaskDraft
} from "../domains/lessons/lessonJournalDraftMap.js";
import { getLessonJournalEffectiveCommentSendStatus } from "../domains/lessons/lessonJournalCommentSendStatus.js";
import {
  getLessonJournalCommentButtonState,
  getLessonJournalCommentSendState,
  getLessonJournalCommentStatusLabel,
  getLessonJournalDisplayCommentSendStatus
} from "../domains/lessons/lessonJournalCommentStatusModel.js";
import { saveLessonJournalMakeupTasksWithVerification } from "../domains/lessons/lessonJournalMakeupTaskBulkApi.js";
import { createLessonJournalMakeupTaskRequests } from "../domains/lessons/lessonJournalMakeupTaskRequest.js";
import { saveLessonJournalRecordsWithVerification } from "../domains/lessons/lessonJournalRecordBulkApi.js";
import { createLessonJournalSaveViewModel } from "../domains/lessons/lessonJournalSaveViewModel.js";
import { createLessonJournalReservationAuditModel } from "../domains/lessons/lessonJournalReservationAuditModel.js";
import { createLessonJournalReservationAuditResult } from "../domains/lessons/lessonJournalReservationAuditResult.js";
import { applyCanceledLessonJournalReservationJob } from "../domains/lessons/lessonJournalReservationAuditTransitions.js";
import { createLessonJournalReservationControlModel } from "../domains/lessons/lessonJournalReservationControlModel.js";
import { createLessonJournalReservationSyncStatus } from "../domains/lessons/lessonJournalReservationSyncModel.js";
import { createLessonJournalExpectedReservationItems } from "../domains/lessons/lessonJournalExpectedReservationItems.js";
import { selectPreviousLessonMemoContext } from "../domains/lessons/lessonJournalPreviousMemoSelector.js";
import { useLessonJournalDraftLifecycle } from "../domains/lessons/useLessonJournalDraftLifecycle.js";
import { useLessonJournalOverlayState } from "../domains/lessons/useLessonJournalOverlayState.js";
import { useLessonJournalReservationState } from "../domains/lessons/useLessonJournalReservationState.js";
import { LessonJournalHeader } from "../domains/lessons/LessonJournalHeader.jsx";
import { LessonJournalClosureNotice } from "../domains/lessons/LessonJournalClosureNotice.jsx";
import { LessonJournalReminderPanel } from "../domains/lessons/LessonJournalReminderPanel.jsx";
import { LessonJournalNotificationBar } from "../domains/lessons/LessonJournalNotificationBar.jsx";
import { LessonJournalReservationModal } from "../domains/lessons/LessonJournalReservationModal.jsx";
import { LessonJournalStudentRow } from "../domains/lessons/LessonJournalStudentRow.jsx";
import { LessonJournalSaveBar } from "../domains/lessons/LessonJournalSaveBar.jsx";
import { LessonJournalTable } from "../domains/lessons/LessonJournalTable.jsx";
import { LessonJournalStudentPreviewModal } from "../domains/lessons/LessonJournalStudentPreviewModal.jsx";
import { LessonJournalCommentComposer } from "../domains/lessons/LessonJournalCommentComposer.jsx";
import { createManualAttendanceRequestPayload } from "../domains/lessons/manualAttendancePayload.js";
import { saveManualAttendanceAction } from "../domains/lessons/manualAttendanceSaveController.js";
import {
  getLessonClosureRoster,
  getLessonClosureSourceSnapshot,
  isClosureLesson as getIsClosureLesson,
  isLessonClosureConversion,
  shouldIgnoreLessonAttendance
} from "../domains/lessons/lessonClosure.js";
import { shiftLessonCalendarMonth } from "../domains/lessons/lessonCalendarModel.js";
import {
  buildNewLessonModalLessons,
  buildUpdatedLessonModalLessons
} from "../domains/lessons/lessonModalPayloadBuilders.js";
import { saveLessonModalLessonsWithVerification } from "../domains/lessons/lessonModalSaveController.js";
import { getLessonModalSaveSnapshot } from "../domains/lessons/lessonModalSaveSnapshot.js";
import { LessonModal } from "../domains/lessons/LessonModal.jsx";
import { attendanceLabels, dayLabels, homeworkLabels } from "../domains/lessons/labels.js";
import {
  buildSpecialLectureNoticeText,
  calculateSpecialLectureTuition,
  createDateFromKey,
  createNextSpecialLectureSession,
  createSpecialLectureGuideFromTemplate,
  defaultSpecialLectureGuides,
  formatCurrencyWon,
  formatSpecialLectureDateLabel,
  formatSpecialLectureDaysFromRules,
  formatSpecialLectureHours,
  formatSpecialLectureLessonCount,
  formatSpecialLectureTimeFromRules,
  generateSpecialLectureSessions,
  getDefaultSpecialLectureGuideId,
  getSpecialLectureEnrollmentSaveSnapshot,
  getSpecialLectureCalculatedFields,
  getSpecialLectureGuideSlug,
  getSpecialLectureLessonTrackId,
  getSpecialLecturePublicUrl,
  getSpecialLectureSeasonShortLabel,
  getSpecialLectureTotalHours,
  getSpecialLectureWeekdayCounts,
  getWeekdayLabel,
  isSpecialLecturePrimaryGuide,
  isSpecialLectureRoute,
  normalizeSpecialLectureApplication,
  normalizeSpecialLectureApplications,
  normalizeSpecialLectureEnrollment,
  normalizeSpecialLectureEnrollments,
  normalizeSpecialLectureGuide,
  normalizeSpecialLectureGuides,
  normalizeSpecialLectureScheduleRule,
  normalizeSpecialLectureScheduleRules,
  normalizeSpecialLectureSession,
  replaceSpecialLectureToken,
  replaceSpecialLectureYearInDateKey,
  replaceSpecialLectureYearToken,
} from "../domains/specialLectures/specialLectureGuideUtils.js";
import { copyTextToClipboard } from "../domains/exams/outputPreview.js";
import {
  createDefaultMonthlySettlementState,
  createMonthlySettlementStateWithMonth,
  getMonthlySettlementMonthSaveSnapshot,
  monthlySettlementStateKey,
  normalizeMonthlySettlementState
} from "../domains/settlements/monthlySettlement.js";
import {
  createDefaultSpecialLectureSettlementState,
  createSpecialLectureSettlementStateWithDraft,
  getSpecialLectureSettlementSaveSnapshot,
  normalizeSpecialLectureSettlementState,
  specialLectureSettlementStateKey
} from "../domains/settlements/specialLectureSettlement.js";
import { AsyncOperationStatus } from "../shared/components/AsyncOperationStatus.jsx";
import { AutosaveRiskNotice } from "../shared/components/AutosaveRiskNotice.jsx";
import { DataTableShell } from "../shared/components/DataTableShell.jsx";
import { EmptyState } from "../shared/components/EmptyState.jsx";
import { FilterBar } from "../shared/components/FilterBar.jsx";
import {
  getAggregateSaveState,
  InlineSaveStatus,
  normalizeSaveState
} from "../shared/components/InlineSaveStatus.jsx";
import { MetricCard } from "../shared/components/MetricCard.jsx";
import { Modal, ModalFooter } from "../shared/components/Modal.jsx";
import { NavigationHeader } from "../shared/components/NavigationHeader.jsx";
import { PageHeader } from "../shared/components/PageHeader.jsx";
import { SearchField } from "../shared/components/SearchField.jsx";
import { SectionHeader } from "../shared/components/SectionHeader.jsx";
import { SelectionToolbar } from "../shared/components/SelectionToolbar.jsx";
import { StickySaveBar } from "../shared/components/StickySaveBar.jsx";
import { WorkspaceTabs } from "../shared/components/WorkspaceTabs.jsx";
import { sampleData } from "../shared/data/sampleData.js";
import {
  apiUrl,
  deleteJsonWithTimeout,
  getJsonWithTimeout,
  postJson,
  postJsonWithHeaders,
  postJsonWithTimeout
} from "../shared/utils/apiClient.js";
import { safeIdPart } from "../shared/utils/id.js";
import { applyStudentScheduleToLesson } from "../shared/utils/studentSchedule.js";
import ssenTypeIndex from "../../api/data/ssenTypeIndex.json";
import {
  academyBrandName,
  academyOperationalStartDate,
  academyReminderPriorityOptions,
  academyReminderStatusLabels,
  academyReminderTypeOptions,
  classTemplateScheduleRules,
  fallbackRegularLessonColors,
  legacySensitiveStorageKeys,
  lessonCalendarColors,
  lessonDeleteRetentionMs,
  lessonResearchCategories,
  lessonResearchStatuses,
  lessonResearchSubjects,
  regularLessonClassColors,
  schoolCalendarGradeOptions,
  schoolCalendarMathSubjectOptions,
  schoolCalendarSchoolColorPalette,
  storageKeys,
  testAttemptStatusOptions,
  testPaperKindOptions,
  testPaperPreparationOptions,
  testPaperProgressOptions
} from "./appConfig.js";

const {
  checkAttendanceRequest,
  previewAttendanceRequest
} = createAttendanceRequestBindings({ request: postJsonWithTimeout });

function getAssignmentStatusForMessage(record, previousHomework) {
  const recordStatus = normalizeAssignmentStatusValue(record?.assignmentStatus ?? record?.incompleteHomework ?? "");
  if (recordStatus) return recordStatus;

  const homeworkStatus = normalizeAssignmentStatusValue(getHomeworkAssignmentStatus(previousHomework, record ? [record] : []));
  if (homeworkStatus) return homeworkStatus;

  if (previousHomework?.teacherStatus === "verified" || previousHomework?.status === "verified") return "complete_thorough";
  if (previousHomework?.teacherStatus === "missing") return "not_done";
  if (previousHomework?.teacherStatus === "unverified") return "not_checked";
  if (previousHomework?.teacherStatus === "partial") return "partial_50";
  return "";
}

function getLessonMaterial(record, student) {
  return record?.lessonMaterial?.trim() || student?.textbook?.trim() || student?.currentTextbook?.trim() || "";
}

function getLessonContent(record) {
  return record?.lessonProgress?.trim() || record?.progress?.trim() || record?.lessonContent?.trim() || "";
}

function getLessonRecordWithPreviousDefaults(record = {}, previousRecord = null) {
  const lessonMaterial = resolveLessonJournalEditableText({
    currentValues: [record?.lessonMaterial],
    fallbackValues: [previousRecord?.lessonMaterial]
  });
  const lessonContent = resolveLessonJournalEditableText({
    currentValues: [record?.lessonProgress, record?.progress, record?.lessonContent],
    fallbackValues: [previousRecord?.lessonProgress, previousRecord?.progress, previousRecord?.lessonContent]
  });
  return {
    ...record,
    lessonMaterial,
    lessonProgress: lessonContent
  };
}

function isStudentVisibleHomework(homework) {
  return homework?.homeworkType !== "previous";
}

function isHomeworkCompletedForStudent(homework) {
  return isHomeworkResolved(homework);
}

function getHomeworkStatusLabel(homework, records = []) {
  const assignmentStatus = getHomeworkAssignmentStatus(homework, records);
  const normalizedStatus = normalizeAssignmentStatusValue(assignmentStatus);
  if (assignmentStatus) return assignmentStatusLabels[normalizedStatus] ?? assignmentStatus;
  if (homework?.teacherStatus === "verified" || homework?.status === "verified") return "완료";
  if (homework?.teacherStatus === "partial") return "일부 완료";
  if (homework?.teacherStatus === "missing") return "미완료";
  if (homework?.teacherStatus === "unverified") return "미검사";
  return homeworkLabels[homework?.status] ?? "검사 전";
}

function getHomeworkStatusTone(homework, records = []) {
  const normalizedStatus = normalizeAssignmentStatusValue(getHomeworkAssignmentStatus(homework, records));
  if (normalizedStatus === "complete_thorough" || homework?.teacherStatus === "verified" || homework?.status === "verified") return "done";
  if (["partial_80", "partial_50", "known_only", "too_hard", "answer_suspected"].includes(normalizedStatus) || homework?.teacherStatus === "partial") return "partial";
  if (normalizedStatus === "not_done" || homework?.teacherStatus === "missing") return "danger";
  return "pending";
}

function getHomeworkAssignmentStatus(homework, records = []) {
  const ownStatus = homework?.assignmentStatus ?? homework?.incompleteHomework ?? "";
  if (ownStatus) return ownStatus;
  const record = records.find(
    (item) => item.lessonId === (homework?.checkedLessonId ?? homework?.lessonId) && item.studentId === homework?.studentId
  );
  return record?.assignmentStatus ?? record?.incompleteHomework ?? "";
}

function getLinkedPreviousHomework(homework, homeworks = []) {
  if (homework?.homeworkType !== "next") return null;
  return homeworks.find(
    (candidate) =>
      candidate.homeworkType === "previous" &&
      candidate.studentId === homework.studentId &&
      candidate.linkedFromLessonId === homework.lessonId &&
      String(candidate.title ?? "").trim() === String(homework.title ?? "").trim()
  ) ?? null;
}

function mergeHomeworkStatusFromLinkedPrevious(homework, homeworks = [], records = []) {
  const linkedPreviousHomework = getLinkedPreviousHomework(homework, homeworks);
  if (!linkedPreviousHomework) return homework;
  const linkedHasTeacherStatus = linkedPreviousHomework.teacherStatus && linkedPreviousHomework.teacherStatus !== "unverified";
  const linkedRecordStatus = getHomeworkAssignmentStatus(linkedPreviousHomework, records);
  const linkedHasAssignmentStatus = linkedPreviousHomework.assignmentStatus || linkedPreviousHomework.incompleteHomework || linkedRecordStatus;
  if (!linkedHasTeacherStatus && !linkedHasAssignmentStatus) return homework;
  return {
    ...homework,
    status: linkedHasTeacherStatus ? linkedPreviousHomework.status : homework.status,
    teacherStatus: linkedHasTeacherStatus ? linkedPreviousHomework.teacherStatus : homework.teacherStatus,
    checkedLessonId: linkedPreviousHomework.lessonId,
    assignmentStatus: linkedPreviousHomework.assignmentStatus ?? linkedPreviousHomework.incompleteHomework ?? linkedRecordStatus ?? homework.assignmentStatus,
    incompleteHomework: linkedPreviousHomework.incompleteHomework ?? linkedPreviousHomework.assignmentStatus ?? linkedRecordStatus ?? homework.incompleteHomework,
    verifiedAt: linkedPreviousHomework.verifiedAt ?? homework.verifiedAt,
    checkedAt: linkedPreviousHomework.checkedAt ?? homework.checkedAt
  };
}

function normalizeMessageText(value) {
  return (value ?? "")
    .toString()
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join("\n");
}

function createMessageBlock(label, value) {
  const text = normalizeMessageText(value);
  return text ? `${label}\n${text}` : "";
}

function createMessageLine(label, value) {
  const text = normalizeMessageText(value);
  return text ? `${label} : ${text}` : "";
}

function formatAttendanceMessageTime(value) {
  const text = String(value ?? "").trim();
  if (!text) return "";
  const isoTime = text.match(/T(\d{2}:\d{2})/);
  if (isoTime?.[1]) return isoTime[1];
  const koreanTime = text.match(/(오전|오후)\s*(\d{1,2}):(\d{2})/);
  if (koreanTime) {
    const period = koreanTime[1];
    let hour = Number(koreanTime[2]);
    if (period === "오후" && hour < 12) hour += 12;
    if (period === "오전" && hour === 12) hour = 0;
    return `${String(hour).padStart(2, "0")}:${koreanTime[3]}`;
  }
  const time = text.match(/(\d{1,2}:\d{2})/);
  if (time?.[1]) return time[1].padStart(5, "0");
  return text;
}

function formatLessonClockTime(value = "") {
  const match = String(value ?? "").match(/^(\d{1,2}):(\d{2})/);
  if (!match) return String(value ?? "");
  return `${String(match[1]).padStart(2, "0")}:${match[2]}`;
}

function formatLessonTimeRange(lesson = {}) {
  const start = formatLessonClockTime(lesson.startTime);
  const end = formatLessonClockTime(lesson.endTime);
  return [start, end].filter(Boolean).join("-");
}

function formatLessonDisplayName(lesson = {}) {
  return [lesson.className, formatLessonTimeRange(lesson)].filter(Boolean).join(" · ");
}

function getLessonStudentIds(lesson = {}) {
  return Array.isArray(lesson?.studentIds) ? lesson.studentIds : [];
}

function isWithdrawnStudent(student = {}) {
  return (student.status ?? "active") !== "active" || Boolean(student.withdrawnAt);
}

function isActiveStudent(student = {}) {
  return student && !isWithdrawnStudent(student);
}

function compareStudentsByName(left = {}, right = {}) {
  const nameCompare = String(left.name ?? "").localeCompare(String(right.name ?? ""), "ko", {
    numeric: true,
    sensitivity: "base"
  });
  return nameCompare || String(left.studentId ?? "").localeCompare(String(right.studentId ?? ""));
}

function sortStudentsByName(students = []) {
  return [...students].sort(compareStudentsByName);
}

function getActiveLessonStudents(lesson = {}, students = []) {
  return sortStudentsByName(getLessonStudentIds(lesson)
    .map((studentId) => students.find((student) => student.studentId === studentId))
    .filter(isActiveStudent));
}

function getLessonJournalStudents(lesson = {}, students = []) {
  return sortStudentsByName(getLessonStudentIds(lesson)
    .map((studentId) => students.find((student) => student.studentId === studentId))
    .filter((student) => student && isStudentVisibleInLessonJournal(student, lesson.date)));
}

function getActiveStudentIdsFromSelection(studentIds = [], students = []) {
  const selectedStudentIds = new Set(studentIds);
  return sortStudentsByName(students
    .filter((student) => isActiveStudent(student) && selectedStudentIds.has(student.studentId)))
    .map((student) => student.studentId);
}

function formatAttendanceForMessage(recordOrPayload = {}) {
  const attendanceStatus = recordOrPayload.attendanceStatus ?? "pending";
  const label = attendanceLabels[attendanceStatus] ?? attendanceStatus ?? "";
  if (!["지각", "결석", "인정결석"].includes(label)) return label;

  const details = [];
  const reason = normalizeMessageText(recordOrPayload.attendanceReason ?? recordOrPayload.reason ?? "");
  const time = formatAttendanceMessageTime(
    recordOrPayload.checkInTime ||
    recordOrPayload.checkedAt ||
    recordOrPayload.checkInAt
  );
  if (reason) details.push(`사유: ${reason}`);
  if (label === "지각" && time) details.push(`등원 ${time}`);
  if (label === "지각" && !time && recordOrPayload.lateMinutes) details.push(`${recordOrPayload.lateMinutes}분 지각`);
  if ((label === "결석" || label === "인정결석") && time) details.push(`처리 ${time}`);
  return details.length ? `${label} (${details.join(" · ")})` : label;
}

function formatAttendanceStatusForMessage(recordOrPayload = {}) {
  const attendanceStatus = recordOrPayload.attendanceStatus ?? "pending";
  const label = attendanceLabels[attendanceStatus] ?? attendanceStatus ?? "";
  const reason = normalizeMessageText(recordOrPayload.attendanceReason ?? recordOrPayload.reason ?? "");
  if (reason && ["지각", "결석", "인정결석"].includes(label)) {
    return `${label} (사유: ${reason})`;
  }
  return label;
}

function joinMessageBlocks(blocks) {
  return blocks.map(normalizeMessageText).filter(Boolean).join("\n\n");
}

function getMessageDedupeKey(value = "") {
  return normalizeMessageText(value).replace(/\s+/g, " ");
}

function compactDuplicateMessageBlocks(value = "") {
  const seen = new Set();
  return String(value ?? "")
    .replace(/\r\n/g, "\n")
    .split(/\n\s*\n+/g)
    .map(normalizeMessageText)
    .filter(Boolean)
    .filter((block) => {
      const key = getMessageDedupeKey(block);
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .join("\n\n");
}

function textIncludesMessageBlock(text = "", block = "") {
  const textKey = getMessageDedupeKey(text);
  const blockKey = getMessageDedupeKey(block);
  return Boolean(blockKey && textKey.includes(blockKey));
}

function textIncludesEveryLine(text = "", lines = []) {
  const textKey = getMessageDedupeKey(text);
  return lines.every((line) => {
    const lineKey = getMessageDedupeKey(line);
    return !lineKey || textKey.includes(lineKey);
  });
}

function getPreparationNoticeForTarget(record = {}, target = "parent") {
  const shouldIncludePrepMemo =
    target === "student" ? Boolean(record?.prepStudentVisible) : Boolean(record?.prepParentVisible);
  return shouldIncludePrepMemo ? removeHomeworkFollowupMemoLines(record?.preparationMemo) : "";
}

function getHomeworkFollowupNoticeForTarget(record = {}, target = "parent", notificationTemplates = {}) {
  return formatHomeworkFollowupForNotice(record, notificationTemplates);
}

const homeworkFollowupMemoPrefixes = {
  next_lesson: "다음 수업 확인",
  stay_after: "수업 후 보충"
};

const homeworkFollowupMethods = [
  { id: "stay_after", label: "남아서 하고 가기" },
  { id: "next_lesson", label: "다음시간까지" },
  { id: "arrival_makeup", label: "등원보충" }
];

function getHomeworkFollowupOptionsForAssignmentStatus(status = "") {
  const normalizedStatus = normalizeAssignmentStatusValue(status);
  if (normalizedStatus === "not_checked") {
    return homeworkFollowupMethods.filter((method) => method.id === "next_lesson");
  }
  return isAssignmentStatusHomeworkMakeupCandidate(normalizedStatus) ? homeworkFollowupMethods : [];
}

function parseHomeworkFollowupMemoLine(line = "") {
  const text = normalizeMessageText(line);
  const match = text.match(/^(다음 수업 확인|수업 후 보충)\s*:\s*(.+)$/);
  if (!match) return null;
  const method = match[1] === homeworkFollowupMemoPrefixes.next_lesson ? "next_lesson" : "stay_after";
  return { method, text: match[2].trim() };
}

function getHomeworkFollowupFromRecord(record = {}) {
  const method = normalizeMessageText(record?.homeworkFollowupMethod);
  const text = normalizeMessageText(record?.homeworkFollowupText);
  if (["next_lesson", "stay_after"].includes(method) && text) {
    return {
      method,
      sourceHomeworkId: normalizeMessageText(record?.homeworkFollowupSourceHomeworkId),
      text
    };
  }
  return normalizeMessageText(record?.preparationMemo)
    .split("\n")
    .map(parseHomeworkFollowupMemoLine)
    .find(Boolean) ?? null;
}

function formatHomeworkFollowupForNotice(record = {}, notificationTemplates = {}) {
  const followup = getHomeworkFollowupFromRecord(record);
  if (!followup) return "";
  const templates = normalizeNotificationTemplates(notificationTemplates);
  if (followup.method === "next_lesson") {
    return renderNotificationTemplate(templates.lessonNextHomeworkFollowup, { "숙제": followup.text });
  }
  if (followup.method === "stay_after") {
    return renderNotificationTemplate(templates.lessonStayAfterHomeworkFollowup, { "숙제": followup.text });
  }
  return "";
}

function removeHomeworkFollowupMemoLines(value = "") {
  return normalizeMessageText(value)
    .split("\n")
    .filter((line) => !parseHomeworkFollowupMemoLine(line))
    .join("\n")
    .trim();
}

function getHomeworkFollowupMethodFromRecord(record = {}) {
  if (record?.needsMakeup) return "arrival_makeup";
  return getHomeworkFollowupFromRecord(record)?.method || "";
}

function getHomeworkFollowupPatch(record = {}, method = "", homework = null) {
  const homeworkText = normalizeMessageText(homework?.title || homework?.sourceLabel);
  const structuredMethod = ["next_lesson", "stay_after"].includes(method) && homeworkText ? method : "";
  return {
    homeworkFollowupMethod: structuredMethod,
    homeworkFollowupSourceHomeworkId: structuredMethod ? normalizeMessageText(homework?.homeworkId) : "",
    homeworkFollowupText: structuredMethod ? homeworkText : "",
    preparationMemo: removeHomeworkFollowupMemoLines(record?.preparationMemo)
  };
}

const lessonRecordRequeryVerificationFields = [
  "homeworkFollowupMethod",
  "homeworkFollowupText",
  "homeworkFollowupSourceHomeworkId",
  "preparationMemo",
  "prepStudentVisible",
  "prepParentVisible",
  "prepMemoCheckedAt",
  "prepMemoCheckedSourceDate",
  "prepMemoCheckedSourceRecordId"
];

function normalizeLessonRecordVerificationValue(field, value) {
  if (["prepStudentVisible", "prepParentVisible"].includes(field)) {
    return Boolean(value) ? "true" : "false";
  }
  if (field === "prepMemoCheckedAt" && value) {
    const timestamp = Date.parse(value);
    if (Number.isFinite(timestamp)) return new Date(timestamp).toISOString();
  }
  return normalizeMessageText(value);
}

function hasMatchingVerifiedLessonRecordFields(expectedRecord = {}, savedRecord = {}) {
  return lessonRecordRequeryVerificationFields
    .filter((field) => Object.prototype.hasOwnProperty.call(expectedRecord, field))
    .every((field) => (
      normalizeLessonRecordVerificationValue(field, expectedRecord[field]) ===
      normalizeLessonRecordVerificationValue(field, savedRecord?.[field])
    ));
}

function buildCommentPreviewLines({ audience, comment, nextHomework, notificationTemplates = {}, previousHomework, record, student, supplementSchedules = [], testResultLines = [] }) {
  const lessonMaterial = getLessonMaterial(record, student);
  const lessonContent = getLessonContent(record);
  const assignmentStatus = getAssignmentStatusForMessage(record, previousHomework);
  const omitPreviousHomework = isAssignmentStatusUnrecorded(assignmentStatus);
  const attendance = formatAttendanceForMessage(record);
  const commentText = normalizeMessageText(comment);
  const homeworkFollowupNotice = omitPreviousHomework ? "" : getHomeworkFollowupNoticeForTarget(record, audience, notificationTemplates);
  const supplementText = supplementSchedules.length ? supplementSchedules.map((item) => `- ${item}`).join("\n") : "";
  const supplementAndFollowupText = [homeworkFollowupNotice, supplementText].filter(Boolean).join("\n");
  const testResultText = testResultLines.length ? testResultLines.map((item) => `- ${item}`).join("\n") : "";
  const commentHasSupplement =
    commentText.includes("보충/확인 안내") ||
    commentText.includes("보충일정") ||
    commentText.includes("보충 일정") ||
    supplementSchedules.some((item) => commentText.includes(item));
  const commentHasFollowup = homeworkFollowupNotice && textIncludesEveryLine(commentText, homeworkFollowupNotice.split("\n"));
  const supplementNotice = supplementAndFollowupText && (!commentHasSupplement || !commentHasFollowup)
    ? [commentHasFollowup ? "" : homeworkFollowupNotice, commentHasSupplement ? "" : supplementText].filter(Boolean).join("\n")
    : "";
  const lines = [
    createMessageLine("🏫 출결", attendance),
    assignmentStatus && !omitPreviousHomework ? createMessageLine("✅ 과제 상태", getAssignmentStatusMessage(audience, assignmentStatus)) : "",
    createMessageLine("📚 강의 교재", lessonMaterial),
    createMessageLine("🧭 강의 내용", lessonContent),
    omitPreviousHomework ? "" : createMessageLine("📘 지난 과제", previousHomework?.title),
    createMessageLine("➡️ 다음 과제", nextHomework?.title),
    testResultText ? createMessageBlock("📝 테스트", testResultText) : "",
    supplementNotice ? createMessageBlock("⭐ 보충/확인 안내", supplementNotice) : "",
    commentText ? createMessageBlock("💬 코멘트", commentText) : ""
  ];

  return lines.filter(Boolean);
}

function buildCommentPreviewText({ audience, comment, lesson, nextHomework, notificationTemplates = {}, previousHomework, record, student, supplementSchedules = [], testResultLines = [] }) {
  const isParent = audience === "parent";
  const previewLines = buildCommentPreviewLines({
    audience,
    comment,
    nextHomework,
    notificationTemplates,
    previousHomework,
    record,
    student,
    supplementSchedules,
    testResultLines
  });

  return joinMessageBlocks([
    `#{학원명}: ${academyBrandName}`,
    `#{학생명}: ${student.name}`,
    isParent ? `#{수업일}: ${lesson.date}` : `#{수업명}: ${lesson.className}`,
    isParent ? "#{리포트본문}:" : "#{코멘트}:",
    ...(previewLines.length ? previewLines : ["왼쪽에 작성한 내용이 받는 사람 화면에 이렇게 표시됩니다."])
  ]);
}

function buildCommentSourceText({ audience = "parent", lesson, nextHomework, notificationTemplates = {}, previousHomework, record, student, supplementSchedules = [], testResultLines = [] }) {
  const assignmentStatus = getAssignmentStatusForMessage(record, previousHomework);
  const omitPreviousHomework = isAssignmentStatusUnrecorded(assignmentStatus);
  const homeworkFollowupNotice = omitPreviousHomework ? "" : getHomeworkFollowupNoticeForTarget(record, audience, notificationTemplates);
  const supplementText = supplementSchedules.length ? supplementSchedules.map((item) => `- ${item}`).join("\n") : "";
  return joinMessageBlocks([
    createMessageLine("수신 학생", student.name),
    createMessageLine("수업", `${lesson.date} ${lesson.className}`),
    createMessageLine("출결", formatAttendanceForMessage(record)),
    omitPreviousHomework ? "" : createMessageLine("과제 상태", getAssignmentStatusMessage(audience, assignmentStatus)),
    createMessageLine("강의 교재", getLessonMaterial(record, student)),
    createMessageLine("강의 내용", getLessonContent(record)),
    omitPreviousHomework ? "" : createMessageLine("지난 과제", previousHomework?.title),
    createMessageLine("다음 과제", nextHomework?.title),
    testResultLines.length ? createMessageBlock("테스트", testResultLines.map((item) => `- ${item}`).join("\n")) : "",
    homeworkFollowupNotice || supplementText ? createMessageBlock("보충/확인 안내", [homeworkFollowupNotice, supplementText].filter(Boolean).join("\n")) : "",
    createMessageBlock("수업메모", record?.preparationMemo)
  ]) || "알림톡에 참고할 원본 정보가 아직 없습니다.";
}

function formatSupplementScheduleLine(task = {}) {
  const schedule = [task.scheduledDate, task.scheduledTime].filter(Boolean).join(" ");
  const method = supplementMethodLabel(task);
  const source = getSupplementTaskSourceLabel(task) || followUpTypeLabel(task.taskType);
  const homeworkCheckSentence = formatSupplementHomeworkCheckSentence(task);
  const schedulePrefix = schedule ? `${schedule}에 ` : "";

  if (task.taskType === "homework_makeup") {
    if ((task.supplementMethod || supplementDefaultMethod(task.taskType)) === "next_lesson") {
      return `다음 수업 때 ${source}를 함께 확인하겠습니다.`;
    }
    return `${schedulePrefix}${method}으로 ${source} 보충을 진행하겠습니다.`;
  }

  if (task.taskType === "absence_makeup") {
    return `${schedulePrefix}${method}으로 ${source} 결석 보강을 진행하겠습니다.${homeworkCheckSentence ? ` ${homeworkCheckSentence}` : ""}`;
  }

  if (task.taskType === "retest") {
    return `${schedulePrefix}${source} 재시험을 진행하겠습니다.`;
  }

  return `${schedulePrefix}${source} 일정을 진행하겠습니다.`;
}

function getStudentSupplementScheduleTasks(makeupTasks = [], studentId = "", options = {}) {
  const { lesson = null, mode = "all" } = options;
  return makeupTasks
    .filter((task) => task.studentId === studentId && task.status !== "done")
    .filter((task) => (mode === "lesson_comment" ? isSupplementScheduleForLessonComment(task, lesson) : true))
    .filter((task) => task.scheduledDate || task.scheduledTime || task.notificationDraft || task.supplementHomeworkNote || task.sourceLabel)
    .sort((a, b) => `${a.scheduledDate || "9999-99-99"} ${a.scheduledTime || ""}`.localeCompare(`${b.scheduledDate || "9999-99-99"} ${b.scheduledTime || ""}`));
}

function getStudentSupplementSchedules(makeupTasks = [], studentId = "", options = {}) {
  return getStudentSupplementScheduleTasks(makeupTasks, studentId, options).map(formatSupplementScheduleLine);
}

function formatTestAttemptMessageLine(session = {}, attempt = {}) {
  const title = normalizeMessageText(session.testTitle) || getTestPaperKindLabel(session.testKind);
  if (attempt.status === "not_taken") {
    const reason = normalizeMessageText(attempt.notTakenReason);
    return `${title} · 미응시${reason ? ` (사유: ${reason})` : ""}`;
  }

  const hasCorrect = attempt.correctCount !== "" && attempt.correctCount !== null && attempt.correctCount !== undefined;
  const total = session.totalQuestions !== "" && session.totalQuestions !== null && session.totalQuestions !== undefined
    ? `${session.totalQuestions}문항 중 `
    : "";
  return `${title} · ${hasCorrect ? `${total}${attempt.correctCount}문항 정답` : "응시"}`;
}

function getLessonTestResultLines(testSessions = [], testAttempts = [], lesson = {}, student = {}) {
  const sessionById = new Map(testSessions.map((session) => [session.testSessionId, session]));
  return testAttempts
    .filter((attempt) => attempt.studentId === student.studentId)
    .map((attempt) => ({ attempt, session: sessionById.get(attempt.testSessionId) }))
    .filter(({ session }) => session && session.testDate === lesson.date)
    .filter(({ session }) => !session.classTemplateId || session.classTemplateId === lesson.classTemplateId)
    .sort((a, b) => String(a.session.updatedAt || a.session.createdAt || "").localeCompare(String(b.session.updatedAt || b.session.createdAt || "")))
    .map(({ session, attempt }) => formatTestAttemptMessageLine(session, attempt));
}

function hasIncompleteLessonTestAttempt(testSessions = [], testAttempts = [], lesson = {}, student = {}) {
  const relevantSessions = testSessions.filter((session) =>
    session.testDate === lesson.date &&
    (!session.classTemplateId || session.classTemplateId === lesson.classTemplateId)
  );
  if (!relevantSessions.length) return false;
  return relevantSessions.some((session) => {
    const attempt = testAttempts.find((item) => item.testSessionId === session.testSessionId && item.studentId === student.studentId);
    if (!attempt) return true;
    if (attempt.status === "not_taken") return !normalizeMessageText(attempt.notTakenReason);
    if (attempt.status === "taken") return attempt.correctCount === "" || attempt.correctCount === null || attempt.correctCount === undefined;
    return true;
  });
}

function buildInitialCommentDraft({ audience, existingComment, record, supplementSchedules }) {
  const commentText = compactDuplicateMessageBlocks(existingComment);
  const prepMemo = getPreparationNoticeForTarget(record, audience);
  const shouldAddPrepMemo = prepMemo && !textIncludesMessageBlock(commentText, prepMemo);

  if (commentText) {
    return joinMessageBlocks([
      shouldAddPrepMemo ? prepMemo : "",
      commentText
    ]);
  }

  return joinMessageBlocks([
    shouldAddPrepMemo ? prepMemo : "",
    commentText
  ]);
}

const appStateAutosaveRisk = {
  title: "app_state key별 자동저장",
  storage: "Supabase app_state: 변경된 key만 500ms debounce 후 같은 브라우저에서 직렬 저장하고 updated_at 대조와 서버 재조회로 완료 확인",
  risk: "다른 탭이나 기기가 같은 key를 먼저 저장하면 자동 병합하지 않고 현재 탭을 저장 실패로 남깁니다. 입력값은 화면에 유지됩니다.",
  stopCondition: "저장 실패가 뜨면 반복 입력을 멈추고 새로고침으로 서버 저장본과 현재 입력을 비교합니다.",
  recommendation: "충돌한 입력은 서버 저장본을 확인한 뒤 필요한 값만 다시 반영합니다. 독립성이 큰 데이터는 계속 명시 저장 흐름으로 분리합니다."
};

const examPrepAutosaveRisk = {
  title: "시험정보/시험 후 기록지 입력 저장",
  storage: "Supabase exam_prep_rows: 입력 즉시 같은 브라우저에서 직렬 저장하고, updated_at CAS와 서버 재조회로 완료를 확인합니다.",
  risk: "다른 탭·기기나 학사일정 수정이 같은 행을 먼저 저장하면 자동 병합하지 않고 현재 입력을 저장 실패로 유지합니다.",
  stopCondition: "저장 실패가 뜨면 반복 입력을 멈추고 새로고침으로 서버 저장본과 현재 입력을 비교합니다.",
  recommendation: "충돌한 입력은 서버 저장본을 확인한 뒤 필요한 값만 다시 반영합니다."
};

const schoolCalendarAutosaveRisk = {
  title: "학사일정과 시험정보 동시 갱신",
  storage: "Supabase school_events, exam_prep_rows, lessons",
  risk: "시험기간 또는 수학시험 일정은 학사일정 화면에서 입력해도 시험정보 row와 직전수업 후보를 함께 움직일 수 있습니다.",
  stopCondition: "일정 하나를 고쳤는데 시험정보가 중복되거나 직전수업/시험대비 후보가 예상 밖으로 바뀌면 다음 저장을 멈춥니다.",
  recommendation: "시험정보 원본을 먼저 확인하고, 일정 등록과 수업 반영은 저장 결과를 화면에서 확인한 뒤 진행합니다."
};

function getSaveButtonLabel(saveState) {
  if (saveState === "saving") return "저장 중";
  if (saveState === "failed") return "다시 저장";
  if (saveState === "saved") return "저장 완료";
  return "저장";
}

const notificationScheduleGraceMs = 5 * 60 * 1000;

function isNotificationSchedulePast(value, graceMs = notificationScheduleGraceMs) {
  if (!value) return false;
  const time = value instanceof Date ? value.getTime() : new Date(value).getTime();
  return Number.isFinite(time) && Date.now() - time > graceMs;
}

function parseKoreaShortScheduleLabel(text = "") {
  const match = String(text ?? "").match(/(\d{1,2})\.\s*(\d{1,2})\.\s*(\d{1,2}):(\d{2})/);
  if (!match) return null;
  const [, month, day, hour, minute] = match;
  const year = Number(getKoreaDateString().slice(0, 4)) || new Date().getFullYear();
  return new Date(
    `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}T${hour.padStart(2, "0")}:${minute}:00+09:00`
  );
}

function getDisplayCommentSendStatus(sendStatus = "") {
  return getLessonJournalDisplayCommentSendStatus({
    isSchedulePast: isNotificationSchedulePast,
    normalizeStatus: normalizeMessageText,
    parseScheduleLabel: parseKoreaShortScheduleLabel,
    sendStatus
  });
}

function getCommentSendState(sendStatus = "") {
  return getLessonJournalCommentSendState({
    getDisplayStatus: getDisplayCommentSendStatus,
    sendStatus
  });
}

function getCommentButtonState(comment = "", sendStatus = "") {
  return getLessonJournalCommentButtonState({
    comment,
    getSendState: getCommentSendState,
    normalizeText: normalizeMessageText,
    sendStatus
  });
}

function getCommentStatusLabel(comment = "", sendStatus = "") {
  return getLessonJournalCommentStatusLabel({
    comment,
    getDisplayStatus: getDisplayCommentSendStatus,
    getSendState: getCommentSendState,
    normalizeText: normalizeMessageText,
    sendStatus
  });
}

function formatNotificationJobStatus(job) {
  return formatNotificationJobStatusLabel({
    formatTimeLabel: formatKoreaTimeLabel,
    isSchedulePast: isNotificationSchedulePast,
    job
  });
}

function canDeleteNotificationJob(job) {
  return canDeleteNotificationJobForDisplay({
    isSchedulePast: isNotificationSchedulePast,
    job
  });
}

function buildLessonReservationPayloadSnapshot({
  audience,
  lesson,
  mode,
  nextHomework,
  notificationTemplates = {},
  previousHomework,
  record,
  scheduledDate,
  student,
  supplementSchedules = [],
  testResultLines = []
}) {
  return createLessonReservationPayloadSnapshot({
    audience,
    compactMessage: compactDuplicateMessageBlocks,
    getAssignmentStatus: getAssignmentStatusForMessage,
    getHomeworkFollowupNotice: getHomeworkFollowupNoticeForTarget,
    getLessonContent,
    getLessonMaterial,
    isAssignmentStatusUnrecorded,
    lesson,
    mode,
    nextHomework,
    notificationTemplates,
    previousHomework,
    record,
    scheduledDate,
    student,
    supplementSchedules,
    testResultLines
  });
}

function getLessonReservationPayloadFingerprint(payload = {}) {
  return createLessonReservationPayloadFingerprint({
    normalizeMessage: normalizeMessageText,
    normalizePhone: normalizePhoneNumber,
    payload
  });
}

function getNotificationJobProviderReference(job = {}) {
  return getNotificationJobProviderReferenceForDisplay({
    getProviderReference: getNotificationProviderReference,
    job
  });
}

function getSolapiNotificationJobProviderReference(job = {}) {
  return job?.provider === "solapi" ? getNotificationJobProviderReference(job) : "";
}

function maskPhoneForDisplay(value = "") {
  const phone = normalizePhoneNumber(value);
  if (phone.length < 8) return value || "-";
  return `${phone.slice(0, 3)}-${"*".repeat(Math.max(3, phone.length - 7))}-${phone.slice(-4)}`;
}

function normalizePhoneNumber(value = "") {
  return String(value ?? "").replaceAll(/\D/g, "");
}

const today = getKoreaDateString();
const lessonModalRuntime = Object.freeze({
  addDaysInKorea,
  createLessonId,
  getActiveStudentIdsFromSelection,
  getLessonStudentIds,
  getRegularLessonColor,
  getStandardLessonColor,
  getTemplateLessonTimes,
  isActiveStudent,
  lessonCalendarColors,
  normalizeClassTemplates,
  normalizeTimeInput,
  today
});
const futureAbsenceMakeupVisibleDays = 7;
const appRuntimeSessionId = `runtime_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;

function getAcademyReminderTypeLabel(type = "custom") {
  return academyReminderTypeOptions.find((option) => option.value === type)?.label ?? "운영 알림";
}

function getAcademyReminderPriorityLabel(priority = "normal") {
  return academyReminderPriorityOptions.find((option) => option.value === priority)?.label ?? "일반";
}

function normalizeAcademyReminderType(type = "custom") {
  if (type === "student") return "student_consultation";
  if (type === "parent") return "parent_consultation";
  return academyReminderTypeOptions.some((option) => option.value === type) ? type : "custom";
}

function normalizeAcademyReminderStatus(status = "pending") {
  return Object.prototype.hasOwnProperty.call(academyReminderStatusLabels, status) ? status : "pending";
}

function normalizeAcademyReminderPriority(priority = "normal") {
  return academyReminderPriorityOptions.some((option) => option.value === priority) ? priority : "normal";
}

function createAcademyReminderDraft(date = today, studentId = "") {
  return {
    reminderId: "",
    reminderType: "student_consultation",
    title: "",
    reminderDate: date || today,
    reminderTime: "",
    classTemplateId: "",
    studentId,
    lessonId: "",
    schoolEventId: "",
    content: "",
    status: "pending",
    priority: "normal",
    slackNotify: true,
    source: "manual",
    sourcePayload: {}
  };
}

function getAcademyReminderSourcePayload(reminder = {}) {
  const sourcePayload = reminder.sourcePayload ?? reminder.source_payload ?? {};
  return sourcePayload && typeof sourcePayload === "object" && !Array.isArray(sourcePayload) ? sourcePayload : {};
}

function getAcademyReminderClassTemplateId(reminder = {}) {
  const sourcePayload = getAcademyReminderSourcePayload(reminder);
  return String(
    reminder.classTemplateId ??
    reminder.classId ??
    sourcePayload.classTemplateId ??
    sourcePayload.classId ??
    ""
  ).trim();
}

function getLessonClassTemplateId(lesson = {}) {
  return String(
    lesson.classTemplateId ??
    lesson.classId ??
    lesson.sourcePayload?.classTemplateId ??
    ""
  ).trim();
}

function getAcademyReminderClassName(reminder = {}, templates = []) {
  const classTemplateId = getAcademyReminderClassTemplateId(reminder);
  if (!classTemplateId) return "";
  const sourcePayload = getAcademyReminderSourcePayload(reminder);
  return templates.find((template) => template.classTemplateId === classTemplateId)?.name ??
    sourcePayload.className ??
    "";
}

function normalizeAcademyReminderDraft(reminder = {}) {
  const reminderType = normalizeAcademyReminderType(reminder.reminderType ?? reminder.type);
  const reminderDate = reminder.reminderDate || reminder.date || today;
  const title = String(reminder.title ?? "").trim() || getAcademyReminderTypeLabel(reminderType);
  const nowIso = new Date().toISOString();
  const sourcePayload = { ...getAcademyReminderSourcePayload(reminder) };
  const classTemplateId = getAcademyReminderClassTemplateId({ ...reminder, sourcePayload });
  if (classTemplateId) {
    sourcePayload.classTemplateId = classTemplateId;
  } else {
    delete sourcePayload.classTemplateId;
    delete sourcePayload.classId;
    delete sourcePayload.className;
  }
  return {
    reminderId: reminder.reminderId || reminder.id || `reminder_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    reminderType,
    title,
    reminderDate,
    date: reminderDate,
    reminderTime: normalizeTimeInput(reminder.reminderTime ?? reminder.time ?? ""),
    time: normalizeTimeInput(reminder.reminderTime ?? reminder.time ?? ""),
    classTemplateId,
    studentId: classTemplateId ? "" : reminder.studentId ?? "",
    lessonId: reminder.lessonId ?? "",
    schoolEventId: reminder.schoolEventId ?? "",
    content: String(reminder.content ?? reminder.memo ?? "").trim(),
    memo: String(reminder.content ?? reminder.memo ?? "").trim(),
    status: normalizeAcademyReminderStatus(reminder.status),
    priority: normalizeAcademyReminderPriority(reminder.priority),
    slackNotify: reminder.slackNotify !== false,
    source: reminder.source || "manual",
    sourcePayload,
    completedAt: reminder.completedAt ?? "",
    createdAt: reminder.createdAt || nowIso,
    updatedAt: nowIso
  };
}

function sortAcademyReminders(reminders = []) {
  return [...reminders].sort((left, right) => {
    const leftKey = [left.reminderDate || left.date || "", left.reminderTime || left.time || "99:99", left.title || ""].join("|");
    const rightKey = [right.reminderDate || right.date || "", right.reminderTime || right.time || "99:99", right.title || ""].join("|");
    return leftKey.localeCompare(rightKey);
  });
}

function isAcademyReminderOverdue(reminder = {}, now = new Date()) {
  if (normalizeAcademyReminderStatus(reminder.status) !== "pending") return false;
  const reminderDate = reminder.reminderDate || reminder.date || "";
  if (!reminderDate) return false;
  const todayKey = getKoreaDateString(now);
  if (reminderDate < todayKey) return true;
  if (reminderDate > todayKey) return false;
  const reminderTime = normalizeTimeInput(reminder.reminderTime ?? reminder.time ?? "");
  if (!reminderTime) return false;
  const scheduledAt = new Date(`${reminderDate}T${reminderTime}:00+09:00`);
  if (Number.isNaN(scheduledAt.getTime())) return false;
  return scheduledAt.getTime() <= now.getTime();
}

function getAcademyReminderStudentName(reminder = {}, students = []) {
  return students.find((student) => student.studentId === reminder.studentId)?.name ?? "";
}

function formatAcademyReminderDateTime(reminder = {}) {
  return [reminder.reminderDate || reminder.date || "날짜 미입력", reminder.reminderTime || reminder.time || ""]
    .filter(Boolean)
    .join(" ");
}

function getAcademyReminderSummary(reminder = {}, students = [], templates = []) {
  const studentName = getAcademyReminderStudentName(reminder, students);
  const className = getAcademyReminderClassName(reminder, templates);
  return [
    getAcademyReminderTypeLabel(reminder.reminderType ?? reminder.type),
    studentName,
    className ? `반 ${className}` : "",
    reminder.title,
    formatAcademyReminderDateTime(reminder)
  ].filter(Boolean).join(" · ");
}

function getAcademyRemindersForDate(reminders = [], date = today, { includeDone = false } = {}) {
  return sortAcademyReminders(reminders).filter((reminder) => {
    if ((reminder.reminderDate || reminder.date) !== date) return false;
    if (includeDone) return true;
    return normalizeAcademyReminderStatus(reminder.status) === "pending";
  });
}

function getAcademyRemindersForStudent(reminders = [], studentId = "") {
  if (!studentId) return [];
  return sortAcademyReminders(reminders).filter((reminder) => reminder.studentId === studentId);
}

function getAcademyRemindersForLesson(reminders = [], lesson = {}, lessonStudents = []) {
  const lessonStudentIds = new Set(lessonStudents.map((student) => student.studentId));
  const lessonClassTemplateId = getLessonClassTemplateId(lesson);
  return getAcademyRemindersForDate(reminders, lesson.date).filter((reminder) => {
    const reminderClassTemplateId = getAcademyReminderClassTemplateId(reminder);
    return (
      reminder.lessonId === lesson.lessonId ||
      (reminder.studentId && lessonStudentIds.has(reminder.studentId)) ||
      (reminderClassTemplateId && reminderClassTemplateId === lessonClassTemplateId)
    );
  });
}

function getAlimtalkSafetyTone(notificationStatus, forceDryRun = false, forceTestRecipient = false) {
  if (forceDryRun || notificationStatus?.dryRun) return "safe";
  if (forceTestRecipient) return "safe";
  if (!notificationStatus) return "warning";
  if (!notificationStatus.allowRealRecipients) return "warning";
  return "danger";
}

function getAlimtalkSafetyText(notificationStatus, forceDryRun = false, forceTestRecipient = false) {
  const testRecipient = notificationStatus?.testRecipient || "테스트 번호";
  if (forceDryRun) return "테스트 발송: 실제 번호로 보내지 않고 서버에서 dry-run으로만 기록합니다.";
  if (forceTestRecipient && notificationStatus?.liveTestSendEnabled) {
    return `테스트 실발송: 실제 Solapi로 보내되 수신번호는 ${testRecipient}로 고정합니다.`;
  }
  if (forceTestRecipient) return `테스트 발송 준비: 수신번호는 ${testRecipient}로 고정되지만, Render의 테스트 실발송 스위치가 꺼져 있으면 dry-run으로만 기록됩니다.`;
  if (!notificationStatus) return "서버 발송 설정을 확인 중입니다. 실제 발송 전 Render 환경변수를 확인하세요.";
  if (notificationStatus.dryRun) return `테스트 보호 ON: 실제 발송 없이 ${testRecipient}로만 기록됩니다.`;
  if (!notificationStatus.allowRealRecipients) return `실제 번호 잠금: 등록 번호 대신 ${testRecipient}로 전환됩니다.`;
  return "실발송 모드: 등록된 실제 번호로 발송됩니다.";
}

function getAlimtalkAudienceStatus(notificationStatus, audience = "parent") {
  const allowRealRecipients = audience === "student"
    ? Boolean(notificationStatus?.allowRealStudentRecipients)
    : Boolean(notificationStatus?.allowRealParentRecipients ?? notificationStatus?.allowRealRecipients);
  return { ...(notificationStatus ?? {}), allowRealRecipients };
}

function buildNotificationTemplatePreview(type) {
  const base = {
    academyName: academyBrandName,
    assignmentStatus: "complete_thorough",
    attendanceStatus: "present",
    checkedAt: "19:00",
    lessonContent: "개별 진도 점검",
    lessonDate: getKoreaDateString(new Date()),
    lessonMaterial: "공통수학1",
    lessonName: "월수금 7-10반",
    message: "오늘 수업에서 확인한 내용을 바탕으로 다음 과제를 안내드립니다.",
    nextHomework: "쎈 - 경우의 수",
    previousHomework: "rpm 순열과 조합",
    studentName: "테스트학생"
  };

  if (type === "specialLecture") {
    return joinMessageBlocks([
      "#{학원명} 재원생 보호자님께 드리는 특강 안내입니다.",
      "안녕하세요. #{학원명}입니다.",
      "#{학생명} 학생 보호자님께 특강 일정을 안내드립니다.",
      "특강명: #{특강명}",
      "대상: #{대상}",
      "요일: #{요일}",
      "시간: #{시간}",
      "세부 시수와 수강료, 회차별 일정은 아래 버튼에서 확인해 주세요.",
      "수강을 원하시거나 문의사항이 있으신 경우 아래 버튼을 눌러 안내문에서 신청해 주세요.",
      "버튼: 특강 안내문 보기 -> #{안내문링크}"
    ]);
  }

  if (type === "attendance") {
    const attendanceSample = {
      ...base,
      attendanceReason: "교통 지연",
      attendanceStatus: "late",
      checkInTime: "19:18"
    };
    return joinMessageBlocks([
      `#{학원명}: ${base.academyName}`,
      `#{학생명}: ${base.studentName}`,
      "#{출결본문}:",
      createMessageLine("🏫 출결", formatAttendanceStatusForMessage(attendanceSample)),
      createMessageLine("📘 수업", base.lessonName),
      createMessageLine("🕒 시간", attendanceSample.checkInTime)
    ]);
  }

  const commonBody = joinMessageBlocks([
    createMessageLine("🏫 출결", formatAttendanceForMessage(base)),
    createMessageLine("✅ 과제 상태", getAssignmentStatusMessage(type, base.assignmentStatus)),
    createMessageLine("📚 강의 교재", base.lessonMaterial),
    createMessageLine("🧭 강의 내용", base.lessonContent),
    createMessageLine("📘 지난 과제", base.previousHomework),
    createMessageLine("➡️ 다음 과제", base.nextHomework),
    createMessageBlock("💬 코멘트", base.message)
  ]);

  return joinMessageBlocks([
    `#{학원명}: ${base.academyName}`,
    `#{학생명}: ${base.studentName}`,
    `#{수업명}: ${base.lessonName}`,
    `#{수업일}: ${base.lessonDate}`,
    type === "parent" ? "#{리포트본문}:" : "#{코멘트}:",
    commonBody
  ]);
}

function isAttendanceOnlyRoute() {
  if (typeof window === "undefined") return false;
  return window.location.pathname === "/attendance" || window.location.hash === "#attendance";
}

function readStorageValue(storage, key) {
  try {
    return storage?.getItem(key) ?? "";
  } catch {
    return "";
  }
}

function writeStorageValue(storage, key, value) {
  try {
    storage?.setItem(key, value);
  } catch {
    // Ignore storage failures and keep the other persistence channels available.
  }
}

function removeStorageValue(storage, key) {
  try {
    storage?.removeItem(key);
  } catch {
    // Ignore storage failures and keep logout usable.
  }
}



function postMakeupTask(makeupTask) {
  return postJson("/api/makeup-tasks", { makeupTask });
}

function postAcademyReminder(academyReminder) {
  return postJson("/api/academy-reminders", { academyReminder });
}

function deleteAcademyReminderFromApi(reminderId) {
  return fetch(apiUrl(`/api/academy-reminders?id=${encodeURIComponent(reminderId)}`), { method: "DELETE" })
    .then(async (response) => {
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.error || "운영 알림 삭제 실패");
      return result;
    });
}

function postMakeupTasks(makeupTasks) {
  return postJson("/api/makeup-tasks/bulk", { makeupTasks });
}

function deleteExamAnalysisRunRequest(analysisRunId) {
  return fetch(apiUrl(`/api/exam-analysis-runs?id=${encodeURIComponent(analysisRunId)}`), { method: "DELETE" })
    .then(async (response) => {
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.error || "시험분석 삭제 실패");
      return result;
    });
}

function deleteExamAnalysisSourceRequest(sourceId) {
  return fetch(apiUrl(`/api/exam-analysis-source-files?id=${encodeURIComponent(sourceId)}`), { method: "DELETE" })
    .then(async (response) => {
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.error || "PDF 원본 삭제 실패");
      return result;
    });
}

function fetchExamAnalysisSsenTypesRequest(payload = {}) {
  const params = new URLSearchParams();
  if (payload.analysisRunId) params.set("analysisRunId", payload.analysisRunId);
  if (payload.subject) params.set("subject", payload.subject);
  if (payload.scope) params.set("scope", payload.scope);
  return getJsonWithTimeout(
    `/api/exam-analysis-ssen-types?${params.toString()}`,
    12000,
    "쎈 기준표 조회가 지연되고 있습니다."
  );
}

function extractExamAnalysisSourceRequest(sourceId) {
  return postJsonWithTimeout(
    "/api/exam-analysis-source-files/extract",
    { sourceId },
    90000,
    "PDF 텍스트 추출이 지연되고 있습니다."
  );
}

function verifyExamAnalysisSourceWithAiRequest(sourceId) {
  return postJsonWithTimeout(
    "/api/exam-analysis-source-files/vision-check",
    { sourceId },
    120000,
    "PDF 원본 AI 검증이 지연되고 있습니다."
  );
}

function confirmExamAnalysisQuestionCountRequest(payload) {
  return postJsonWithTimeout(
    "/api/exam-analysis-runs/confirm-question-count",
    payload,
    30000,
    "문항 수 확정 저장이 지연되고 있습니다."
  );
}

function detectExamAnalysisQuestionBoundariesRequest(payload) {
  return postJsonWithTimeout(
    "/api/exam-analysis-runs/detect-question-boundaries",
    payload,
    180000,
    "문항 경계 탐지가 지연되고 있습니다."
  );
}

function fillExamAnalysisQuestionRowsRequest(payload) {
  return postJsonWithTimeout(
    "/api/exam-analysis-runs/fill-question-rows",
    payload,
    240000,
    "AI 행 채움이 지연되고 있습니다."
  );
}

function refineExamAnalysisQuestionRowsRequest(payload) {
  return postJsonWithTimeout(
    "/api/exam-analysis-runs/refine-question-rows",
    payload,
    240000,
    "AI 2차 수정이 지연되고 있습니다."
  );
}

function saveExamAnalysisQuestionReviewsRequest(payload) {
  return postJsonWithTimeout(
    "/api/exam-analysis-runs/save-question-reviews",
    payload,
    30000,
    "문항 검수 저장이 지연되고 있습니다."
  );
}

function saveExamAnalysisOutputDraftsRequest(payload) {
  return postJsonWithTimeout(
    "/api/exam-analysis-runs/save-output-drafts",
    payload,
    30000,
    "시험분석 산출물 저장이 지연되고 있습니다."
  );
}

function generateExamAnalysisOutputDraftRequest(payload) {
  return postJsonWithTimeout(
    "/api/exam-analysis-runs/generate-output-draft",
    payload,
    120000,
    "시험분석 산출물 AI 초안 생성이 지연되고 있습니다."
  );
}

function patchLessonRecordNotificationStatusRequest(record) {
  return postJson("/api/lesson-records/notification-status", { record });
}

function postSchoolEvent(schoolEvent) {
  return postJson("/api/school-events", { schoolEvent });
}

function postSchoolEvents(schoolEvents) {
  return postJson("/api/school-events/bulk", { schoolEvents });
}

function deleteSchoolEventFromApi(eventId) {
  return fetch(apiUrl(`/api/school-events?id=${encodeURIComponent(eventId)}`), { method: "DELETE" })
    .then((response) => response.json())
    .then((result) => {
      if (!result.ok) throw new Error(result.error || "학사일정 삭제 저장 실패");
      return result;
    });
}

function postAppState(states, { expectedUpdatedAt = null } = {}) {
  return postJson("/api/app-state", {
    states,
    ...(expectedUpdatedAt ? { expectedUpdatedAt } : {})
  });
}

function postTestSession(testSession, testAttempts = []) {
  return postJson("/api/test-sessions", { testSession, testAttempts });
}

function deleteTestSessionFromApi(testSessionId) {
  return fetch(apiUrl(`/api/test-sessions?testSessionId=${encodeURIComponent(testSessionId)}`), { method: "DELETE" })
    .then((response) => response.json())
    .then((result) => {
      if (!result.ok) throw new Error(result.error || "테스트 응시 기록 삭제 실패");
      return result;
    });
}

async function fetchPortalData(sessionToken) {
  const response = await fetch(apiUrl("/api/portal-data"), {
    headers: { Authorization: `Bearer ${sessionToken}` }
  });
  const result = await response.json();
  if (!response.ok || result.ok === false) throw new Error(result.error || "학생 데이터를 불러오지 못했습니다.");
  return result;
}

const teacherAccount = {
  loginId: "teacher",
  name: "고태영",
  role: "teacher"
};

const defaultTeacherAccountSettings = {
  loginId: teacherAccount.loginId,
  name: teacherAccount.name
};

const examPrepTextbookBySchoolGrade = {
  "용화여고_고1": "천재(홍)",
  "상계고_고1": "천재(홍)",
  "자운고_고1": "미래엔",
  "정의여고_고1": "미래엔",
  "창동고_고1": "미래엔"
};

const currentExamCycle = getDefaultExamCycleForDate(today);

function inferExamCycleFromPrepId(examPrepId = "") {
  const id = String(examPrepId);
  const explicitCycle = id.match(/(20\d{2})[-_](1|2)[-_](mid|final)/);
  if (explicitCycle) return `${explicitCycle[1]}-${explicitCycle[2]}-${explicitCycle[3]}`;
  const legacyYear = id.match(/(20\d{2})/);
  const year = legacyYear?.[1] ?? String(new Date(`${today}T00:00:00+09:00`).getFullYear());
  if (id.includes("_mid_") || id.endsWith("_mid") || id.includes("_mid")) return `${year}-1-mid`;
  if (id.includes("_final_") || id.endsWith("_final") || id.includes("_final")) return `${year}-1-final`;
  return "";
}

function getDefaultExamCycleForDate(dateString = today) {
  const [yearText, monthText] = String(dateString).split("-");
  const year = Number(yearText) || new Date().getFullYear();
  const month = Number(monthText) || 1;
  if (month <= 5) return `${year}-1-mid`;
  if (month <= 7) return `${year}-1-final`;
  if (month <= 10) return `${year}-2-mid`;
  return `${year}-2-final`;
}

function normalizeExamPrepRowCycle(row = {}) {
  const inferredCycle = inferExamCycleFromPrepId(row.examPrepId);
  if (inferredCycle && row.examCycle !== inferredCycle) {
    return { ...row, examCycle: inferredCycle, examTerm: inferredCycle };
  }
  if (!row.examCycle && !row.examTerm) {
    return { ...row, examCycle: currentExamCycle, examTerm: currentExamCycle };
  }
  if (!row.examCycle && row.examTerm) return { ...row, examCycle: row.examTerm };
  if (!row.examTerm && row.examCycle) return { ...row, examTerm: row.examCycle };
  return row;
}

function normalizeExamPrepRows(rows = []) {
  return rows.map((row) => normalizeExamPrepRowReviewDraft(normalizeExamPrepRowCycle(row)));
}

function createParentLoginId(student) {
  return `parent-${student.loginId}`;
}

function getDemoStudent(students) {
  return students.find((student) => student.studentId === "student_mwf710_001") ?? students[0];
}

function examCycleLabel(examCycle) {
  const [, semester, phase] = String(examCycle).match(/^20\d{2}-(1|2)-(mid|final)$/) ?? [];
  if (!semester || !phase) return examCycle;
  return `${semester}학기 ${phase === "mid" ? "중간고사" : "기말고사"}`;
}

function getDefaultExamPeriodRange(examCycle = currentExamCycle) {
  const [yearText, semester, phase] = String(examCycle).split("-");
  const year = Number(yearText) || new Date(`${today}T00:00:00+09:00`).getFullYear();
  const ranges = {
    "1-mid": { date: `${year}-04-27`, endDate: `${year}-05-08` },
    "1-final": { date: `${year}-06-29`, endDate: `${year}-07-03` },
    "2-mid": { date: `${year}-09-28`, endDate: `${year}-10-02` },
    "2-final": { date: `${year}-12-14`, endDate: `${year}-12-24` }
  };
  return ranges[`${semester}-${phase}`] ?? { date: today, endDate: today };
}

function getDefaultExamPeriodText(examCycle = currentExamCycle) {
  const range = getDefaultExamPeriodRange(examCycle);
  return formatDateRangeText(range.date, range.endDate);
}

function normalizeGradeLabel(grade = "") {
  const value = String(grade).trim();
  if (value.includes("1")) return value.includes("중") ? "중1" : "고1";
  if (value.includes("2")) return value.includes("중") ? "중2" : "고2";
  if (value.includes("3")) return value.includes("중") ? "중3" : "고3";
  return value;
}

function schoolNamesMatch(firstSchool = "", secondSchool = "", { allowBlank = true } = {}) {
  if (!firstSchool || !secondSchool) return allowBlank;
  const firstText = normalizeSchoolName(firstSchool);
  const secondText = normalizeSchoolName(secondSchool);
  if (!firstText || !secondText) return allowBlank;
  return firstText === secondText || firstText.includes(secondText) || secondText.includes(firstText);
}

function getSchoolGradeKey(schoolName = "", grade = "") {
  const schoolKey = normalizeSchoolName(schoolName);
  const gradeKey = compactCalendarLabel(normalizeGradeLabel(grade));
  if (!schoolKey || !gradeKey) return "";
  return `${schoolKey}_${gradeKey}`;
}

function getStudentSchoolGradeKey(student = {}) {
  return getSchoolGradeKey(student.schoolName, student.grade);
}

function getExamPrepSchoolGradeKey(row = {}) {
  return getSchoolGradeKey(row.schoolName, row.grade);
}

function getTextbookFromExamPrep(student) {
  const key = `${student.schoolName || ""}_${normalizeGradeLabel(student.grade)}`;
  return examPrepTextbookBySchoolGrade[key] ?? student.textbook ?? "";
}

function getDefaultMathExamDate(row, index = 0) {
  const fallbackBySchool = {
    "용화여고": "2026-06-24",
    "정의여고": "2026-06-25",
    "자운고": "2026-06-26",
    "상계고": "2026-06-27",
    "창동고": "2026-06-29"
  };
  return row.mathExamDate || fallbackBySchool[row.schoolName] || `2026-06-${String(24 + (index % 5)).padStart(2, "0")}`;
}

function normalizeMathSubject(subject = "") {
  const value = String(subject || "").trim();
  if (!value) return "수학";
  if (value === "공통수학1" || value === "공통수학2") return "수학";
  return value;
}

function createMathExamEntry(row = {}, index = 0) {
  const baseId = safeIdPart(row.examPrepId || `${row.schoolName}_${row.grade}_${row.subject}`);
  return {
    id: `math_${baseId}_${index}`,
    date: row.mathExamDate || "",
    grade: row.grade || "",
    subject: normalizeMathSubject(row.subject),
    label: ""
  };
}

function normalizeMathExamEntries(row = {}, { includeBlank = false } = {}) {
  const entries = Array.isArray(row.mathExamDates) ? row.mathExamDates : [];
  const normalized = entries
    .map((entry, index) => ({
      id: entry.id || `math_${safeIdPart(row.examPrepId || row.schoolName || "exam")}_${index}`,
      date: entry.date || "",
      grade: entry.grade || row.grade || "",
      subject: entry.subject || normalizeMathSubject(row.subject),
      label: entry.label || "",
      sourceSchoolEventId: entry.sourceSchoolEventId || ""
    }))
    .filter((entry) => includeBlank || entry.date || entry.label);
  if (normalized.length) return normalized;
  if (row.mathExamDate) return [createMathExamEntry(row, 0)];
  return [];
}

function formatShortDate(date = "") {
  return date ? date.slice(5).replace("-", ".") : "날짜 미입력";
}

function formatMathExamEntryLabel(row = {}, entry = {}) {
  const explicitLabel = String(entry.label || "").trim();
  if (explicitLabel) return joinCalendarLabel(row.schoolName, explicitLabel);
  const subject = entry.subject || normalizeMathSubject(row.subject);
  const grade = entry.grade || row.grade || "";
  const detail = [grade, subject].filter(Boolean).join(" ").trim();
  return joinCalendarLabel(row.schoolName || "학교 미입력", detail, row.examName || "수학시험");
}

function getExamPrepLogicalKey(row = {}) {
  return [
    row.examCycle || currentExamCycle,
    normalizeSchoolName(row.schoolName || "") || compactCalendarLabel(row.schoolName || "학교 미입력"),
    compactCalendarLabel(row.grade || "학년 미입력"),
    compactCalendarLabel(row.subject || "공통수학1")
  ].join("|");
}

function getExamPrepRowCompleteness(row = {}) {
  return [
    row.publisher,
    row.examPeriod,
    row.mathExamDate,
    row.scope,
    row.subTextbook,
    row.review,
    row.revisedReview,
    row.specialNote,
    row.memo,
    ...(normalizeMathExamEntries(row).flatMap((entry) => [entry.date, entry.subject, entry.label]))
  ].filter((value) => String(value ?? "").trim()).length;
}

function isPlaceholderExamPrepRow(row = {}) {
  return String(row.examPrepId || "").endsWith("_textbook") || !String(row.publisher || "").trim();
}

function chooseRepresentativeExamPrepRow(currentRow, candidateRow) {
  const currentScore = getExamPrepRowCompleteness(currentRow);
  const candidateScore = getExamPrepRowCompleteness(candidateRow);
  if (candidateScore !== currentScore) return candidateScore > currentScore ? candidateRow : currentRow;
  const currentPlaceholder = isPlaceholderExamPrepRow(currentRow);
  const candidatePlaceholder = isPlaceholderExamPrepRow(candidateRow);
  if (currentPlaceholder !== candidatePlaceholder) return candidatePlaceholder ? currentRow : candidateRow;
  return String(candidateRow.updatedAt || "") > String(currentRow.updatedAt || "") ? candidateRow : currentRow;
}

function dedupeExamPrepRowsForDisplay(rows = []) {
  const grouped = new Map();
  rows.forEach((row) => {
    const key = getExamPrepLogicalKey(row);
    const previous = grouped.get(key);
    grouped.set(key, previous ? chooseRepresentativeExamPrepRow(previous, row) : row);
  });
  return [...grouped.values()];
}

function syncPrimaryMathExamDate(entries = []) {
  return entries.find((entry) => entry.date)?.date || "";
}

function examCycleTermKey(examCycle = "") {
  const [year, semester] = String(examCycle).split("-");
  return [year || "", semester || ""].join("-");
}

function examPublisherLinkKey(row) {
  return [
    examCycleTermKey(row.examCycle),
    normalizeSchoolName(row.schoolName || "") || "학교미입력",
    compactCalendarLabel(normalizeGradeLabel(row.grade || "")) || "학년미입력",
    compactCalendarLabel(row.subject || "공통수학1")
  ].join("_");
}

function findLinkedPublisher(existingRows, draftRow) {
  const linkKey = examPublisherLinkKey(draftRow);
  return existingRows.find((row) => examPublisherLinkKey(row) === linkKey && row.publisher)?.publisher ?? "";
}

function syncPublisherAcrossExamTerm(rows, sourceRow) {
  if (!sourceRow?.publisher) return rows;
  const linkKey = examPublisherLinkKey(sourceRow);
  return rows.map((row) =>
    row.examPrepId !== sourceRow.examPrepId && examPublisherLinkKey(row) === linkKey
      ? { ...row, publisher: sourceRow.publisher }
      : row
  );
}

function buildExamPrepRowsFromStudents(students, examCycle, classTemplateId = "", existingRows = []) {
  const classStudents = classTemplateId
    ? students.filter((student) => (student.status ?? "active") === "active" && student.defaultClassTemplateId === classTemplateId)
    : students.filter((student) => (student.status ?? "active") === "active");
  const seen = new Set();

  return classStudents
    .map((student) => {
      const schoolName = student.schoolName || "학교 미입력";
      const grade = student.grade || "학년 미입력";
      const subject = "공통수학1";
      const draftRow = { examCycle, schoolName, grade, subject };
      const key = examPublisherLinkKey(draftRow);
      if (seen.has(key)) return null;
      seen.add(key);

      return {
        examPrepId: `exam_prep_${safeIdPart(examCycle)}_${safeIdPart(schoolName)}_${safeIdPart(grade)}_${safeIdPart(subject)}`,
        examCycle,
        schoolName,
        grade,
        subject,
        publisher: findLinkedPublisher(existingRows, draftRow) || student.textbook || "",
        scope: "",
        subTextbook: "",
        examPeriod: getDefaultExamPeriodText(examCycle),
        mathExamDate: "",
        mathExamDates: [],
        review: "",
        revisedReview: "",
        memo: "",
        source: "학생DB 자동생성"
      };
    })
    .filter(Boolean);
}

function createSchoolEventFromExamPrepRow(row, index = 0) {
  const schoolName = row.schoolName || "학교 미입력";
  return {
    eventId: `event_exam_${row.examPrepId ?? index}`,
    date: getDefaultMathExamDate(row, index),
    schoolName,
    title: `${examCycleLabel(row.examCycle ?? currentExamCycle)} 수학시험`,
    type: "mathExam",
    color: getSchoolCalendarSchoolColor(schoolName)
  };
}

function createDefaultSchoolEvents(rows) {
  return rows.map((row, index) => createSchoolEventFromExamPrepRow(row, index));
}

function getSchoolCalendarTargetRows(rows = [], event = {}) {
  const eventGrade = normalizeGradeLabel(event.grade || "");
  const eventSubject = normalizeMathSubject(event.examSubject || event.subject || "");
  const hasSpecificSubject = event.type === "mathExam" && eventSubject && !["수학", "수학시험"].includes(eventSubject);
  return rows.filter((row) => {
    const rowSchool = row.schoolName || "";
    const eventSchool = event.schoolName || "";
    if ((rowSchool || eventSchool) && !schoolNamesMatch(rowSchool, eventSchool, { allowBlank: false })) return false;
    if (event.examCycle && row.examCycle !== event.examCycle) return false;
    if (!eventGrade) return true;
    if (normalizeGradeLabel(row.grade || "") !== eventGrade) return false;
    if (hasSpecificSubject && normalizeMathSubject(row.subject || "") !== eventSubject) return false;
    return true;
  });
}

function upsertMathExamEntryFromSchoolEvent(row = {}, event = {}) {
  const entries = normalizeMathExamEntries(row);
  const subject = normalizeMathSubject(event.examSubject || event.title || "수학");
  const sourceEventId = event.eventId || "";
  const existingIndex = entries.findIndex((entry) =>
    (sourceEventId && entry.sourceSchoolEventId === sourceEventId) ||
    (entry.date === event.date && normalizeMathSubject(entry.subject) === subject)
  );
  const nextEntry = {
    ...(existingIndex >= 0 ? entries[existingIndex] : {}),
    id: existingIndex >= 0
      ? entries[existingIndex].id
      : `math_${safeIdPart(row.examPrepId || row.schoolName || "exam")}_${safeIdPart(sourceEventId || event.date || "date")}`,
    date: event.date || "",
    grade: event.grade || row.grade || "",
    subject,
    label: event.examSubject || "수학시험",
    sourceSchoolEventId: sourceEventId
  };
  return existingIndex >= 0
    ? entries.map((entry, index) => (index === existingIndex ? nextEntry : entry))
    : [...entries, nextEntry];
}

function syncSchoolCalendarEventToExamPrepRows(rows = [], event = {}, onUpdateExamPrepRow) {
  if (!onUpdateExamPrepRow || !["examPeriod", "mathExam"].includes(event.type)) return;
  const targetRows = getSchoolCalendarTargetRows(rows, event);
  targetRows.forEach((row) => {
    if (event.type === "examPeriod") {
      onUpdateExamPrepRow(row.examPrepId, "examPeriod", formatDateRangeText(event.date, event.endDate || event.date));
      return;
    }
    const nextEntries = upsertMathExamEntryFromSchoolEvent(row, event);
    onUpdateExamPrepRow(row.examPrepId, "mathExamDates", nextEntries);
    onUpdateExamPrepRow(row.examPrepId, "mathExamDate", syncPrimaryMathExamDate(nextEntries));
  });
}

function isExamLinkedCalendarEvent(event = {}) {
  return event.type === "examPeriod" || event.type === "mathExam";
}

function getExamPeriodGroupKey(row = {}) {
  const period = parseDateRangeText(row.examPeriod);
  return [
    row.schoolName || "학교 미입력",
    row.examCycle || currentExamCycle,
    period?.date || "",
    period?.endDate || ""
  ].join("|");
}

function groupExamPeriodEventsForMonth(events = []) {
  const grouped = new Map();
  events.forEach((event) => {
    if (event.type !== "examPeriod") return;
    const schoolKey = normalizeSchoolName(event.schoolName || "") || "학교미입력";
    const key = [
      event.examCycle || currentExamCycle,
      schoolKey,
      event.date || "",
      event.endDate || event.date || ""
    ].join("|");
    const existing = grouped.get(key) ?? {
      ...event,
      eventId: `month_period_${safeIdPart(key)}`,
      title: "",
      color: getSchoolCalendarEventColor(event),
      schoolNames: new Set(),
      type: "examPeriod"
    };
    if (event.schoolName) existing.schoolNames.add(event.schoolName);
    existing.title = `${event.schoolName || "학교 미입력"} ${examCycleLabel(event.examCycle || currentExamCycle)} 시험기간`;
    grouped.set(key, existing);
  });
  return [...grouped.values()].map((event) => ({
    ...event,
    schoolNames: [...event.schoolNames]
  }));
}

function getMonthDateRange(monthString = today) {
  const [yearText, monthText] = String(monthString).slice(0, 7).split("-");
  const year = Number(yearText) || new Date(`${today}T00:00:00+09:00`).getFullYear();
  const month = Number(monthText) || 1;
  const start = `${year}-${String(month).padStart(2, "0")}-01`;
  const endDate = new Date(Date.UTC(year, month, 0));
  const end = `${endDate.getUTCFullYear()}-${String(endDate.getUTCMonth() + 1).padStart(2, "0")}-${String(endDate.getUTCDate()).padStart(2, "0")}`;
  return { end, start };
}

function eventIntersectsDateRange(event = {}, start = "", end = "") {
  const eventStart = event.date || "";
  const eventEnd = event.endDate || event.date || "";
  if (!eventStart || !start || !end) return false;
  return eventStart <= end && eventEnd >= start;
}

function eventIntersectsMonth(event = {}, monthString = today) {
  const range = getMonthDateRange(monthString);
  return eventIntersectsDateRange(event, range.start, range.end);
}

function createSchoolCalendarPeriodCards(periodEvents = [], mathExamEvents = [], monthString = today) {
  return groupExamPeriodEventsForMonth(periodEvents.filter((event) => eventIntersectsMonth(event, monthString)))
    .map((event) => {
      const schools = Array.isArray(event.schoolNames) && event.schoolNames.length ? event.schoolNames : [event.schoolName].filter(Boolean);
      const relatedMathExamEvents = mathExamEvents
        .filter((mathEvent) => {
          const sameSchool = schools.length === 0 || schools.some((schoolName) => schoolNamesMatch(mathEvent.schoolName, schoolName, { allowBlank: false }));
          const sameCycle = !event.examCycle || !mathEvent.examCycle || event.examCycle === mathEvent.examCycle;
          return sameSchool && sameCycle && isDateWithinEvent(mathEvent.date, event);
        })
        .sort((a, b) => String(a.date || "").localeCompare(String(b.date || "")) || formatCalendarSummaryLabel(a).localeCompare(formatCalendarSummaryLabel(b)));
      return {
        ...event,
        relatedMathExamEvents
      };
    });
}

function buildExamCalendarEvents(rows) {
  const periodKeys = new Set();
  return dedupeExamPrepRowsForDisplay(rows).flatMap((row) => {
    const schoolName = row.schoolName || "학교 미입력";
    const schoolColor = getSchoolCalendarSchoolColor(schoolName);
    const base = {
      schoolName,
      grade: row.grade || "",
      examCycle: row.examCycle || currentExamCycle,
      examSubject: "수학",
      memo: "시험관리 탭에서 연동된 일정입니다.",
      derived: true,
      examPrepId: row.examPrepId
    };
    const events = [];
    const period = parseDateRangeText(row.examPeriod);
    if (period) {
      const periodKey = getExamPeriodGroupKey(row);
      if (!periodKeys.has(periodKey)) {
        periodKeys.add(periodKey);
        events.push({
          ...base,
          eventId: `derived_period_${safeIdPart(periodKey)}`,
          examPeriodGroupKey: periodKey,
          date: period.date,
          endDate: period.endDate,
          title: `${row.schoolName || "학교 미입력"} ${row.grade || ""} ${examCycleLabel(row.examCycle ?? currentExamCycle)} 시험기간`.trim(),
          type: "examPeriod",
          color: schoolColor
        });
      }
    }
    const mathEntries = normalizeMathExamEntries(row);
    const emittedMathKeys = new Set();
    const addMathExamEvent = (entry, index) => {
      if (!entry.date) return;
      const mathKey = `${entry.date}:${compactCalendarLabel(entry.label || entry.subject || "")}`;
      if (emittedMathKeys.has(mathKey)) return;
      emittedMathKeys.add(mathKey);
      events.push({
        ...base,
        grade: entry.grade || row.grade || "",
        examSubject: entry.label || entry.subject || row.subject || "수학",
        eventId: `derived_math_${row.examPrepId}_${entry.id || index}`,
        date: entry.date,
        endDate: "",
        title: formatMathExamEntryLabel(row, entry),
        type: "mathExam",
        mathExamEntryId: entry.id,
        mathExamEntryIndex: index,
        color: schoolColor
      });
    };
    mathEntries.forEach(addMathExamEvent);
    if (!emittedMathKeys.size && row.mathExamDate) {
      addMathExamEvent(createMathExamEntry(row, 0), 0);
    }
    return events;
  });
}

function mergeById(currentItems, nextItems, idKey) {
  const existingIds = new Set(currentItems.map((item) => item[idKey]));
  return [...currentItems, ...nextItems.filter((item) => !existingIds.has(item[idKey]))];
}

function normalizeLessonResearchSubject(subject = "") {
  const compactSubject = String(subject ?? "").replace(/\s+/g, "");
  if (compactSubject === "미적분" || compactSubject === "미적분2") return "미적분1";
  if (compactSubject === "확률과통계") return "확률과 통계";
  return lessonResearchSubjects.includes(subject) ? subject : lessonResearchSubjects[0];
}

function createLessonResearchItem(subject = "공통수학1", typeInfo = {}) {
  const normalizedSubject = normalizeLessonResearchSubject(subject);
  const typeTitle = typeInfo.typeTitle || typeInfo.title || "";
  const typeNo = typeInfo.typeNo || "";
  const hasTypeLink = Boolean(typeInfo.typeId || typeInfo.id || typeTitle);
  return {
    researchItemId: typeInfo.researchItemId || `research_${Date.now()}`,
    subject: normalizedSubject,
    category: "유형별 교안",
    title: hasTypeLink ? `${typeNo ? `${typeNo}. ` : ""}${typeTitle}` : "새 교안 항목",
    source: hasTypeLink ? [typeInfo.partName, typeInfo.unitName].filter(Boolean).join(" > ") : "",
    linkedTypeId: typeInfo.typeId || typeInfo.id || "",
    linkedTypeNo: typeNo,
    linkedTypeTitle: typeTitle,
    linkedTypeUnit: typeInfo.unitName || "",
    linkedTypeChapter: typeInfo.partName || "",
    specificProblem: "",
    studentDifficulty: "",
    explanationGoal: "",
    explanationFrame: "",
    boardFlow: "",
    checkQuestions: "",
    practicePlan: "",
    problemNote: "",
    teachingNote: "",
    materialPlan: "",
    priority: "중",
    status: "수집",
    createdAt: today,
    updatedAt: today
  };
}

function normalizeLessonResearchItem(item = {}) {
  const subject = normalizeLessonResearchSubject(item.subject);
  return {
    ...createLessonResearchItem(subject),
    ...item,
    subject,
    category: item.category || "유형별 교안",
    status: item.status || "수집",
    priority: item.priority || "중",
    linkedTypeId: item.linkedTypeId || "",
    linkedTypeNo: item.linkedTypeNo || "",
    linkedTypeTitle: item.linkedTypeTitle || "",
    linkedTypeUnit: item.linkedTypeUnit || "",
    linkedTypeChapter: item.linkedTypeChapter || "",
    specificProblem: item.specificProblem || "",
    studentDifficulty: item.studentDifficulty || "",
    explanationGoal: item.explanationGoal || "",
    explanationFrame: item.explanationFrame || "",
    boardFlow: item.boardFlow || "",
    checkQuestions: item.checkQuestions || "",
    practicePlan: item.practicePlan || "",
    problemNote: item.problemNote || "",
    teachingNote: item.teachingNote || "",
    materialPlan: item.materialPlan || "",
    updatedAt: item.updatedAt || item.createdAt || today
  };
}

function normalizeLessonResearchItems(items = []) {
  return Array.isArray(items) ? items.map(normalizeLessonResearchItem) : [];
}

function createDefaultLessonResearchItems() {
  return normalizeLessonResearchItems([
    {
      ...createLessonResearchItem("공통수학1"),
      researchItemId: "research_common_math_1_quadratic_theme",
      category: "유형별 교안",
      title: "이차함수 그래프와 부등식 연결",
      source: "고1 내신 대비 수업 메모",
      problemNote: "그래프의 위치 관계를 식으로 옮기는 과정에서 학생들이 자주 멈춤.",
      teachingNote: "교점 개수, 판별식, 부호표를 한 흐름으로 설명하는 판서를 보강.",
      materialPlan: "개념 확인 3문항 + 내신형 5문항으로 교재 후보 구성",
      studentDifficulty: "그래프 조건을 식의 부호 조건으로 바꾸는 첫 단계에서 멈춘다.",
      explanationGoal: "그림-교점-판별식-부호표를 하나의 언어로 연결한다.",
      boardFlow: "1. 그래프 위치를 말로 읽기\n2. 교점 개수를 판별식으로 확인\n3. 부호표로 답의 범위를 정리",
      checkQuestions: "교점이 2개라는 말은 식에서 무엇을 보라는 뜻인가?",
      priority: "상",
      status: "교안작성"
    },
    {
      ...createLessonResearchItem("대수"),
      researchItemId: "research_algebra_sequence_note",
      category: "설명 아쉬움",
      title: "수열 점화식 풀이 도입",
      source: "학생 질문 기록",
      problemNote: "처음 보는 점화식을 등차/등비와 연결하지 못함.",
      teachingNote: "항을 직접 4개 써보고 규칙을 찾는 단계부터 다시 설계.",
      materialPlan: "대표 유형별 풀이 템플릿으로 정리",
      priority: "중",
      status: "수집"
    },
    {
      ...createLessonResearchItem("미적분1"),
      researchItemId: "research_calculus_derivative_killer",
      category: "못 푼 문제",
      title: "접선 조건이 숨어 있는 미분 문제",
      source: "기출 변형 후보",
      problemNote: "조건 해석은 됐지만 식 세팅 시간이 오래 걸림.",
      teachingNote: "접점, 기울기, 함수값 조건을 표로 먼저 분해.",
      materialPlan: "킬러문항 해설 카드로 발전",
      priority: "상",
      status: "교재후보"
    }
  ]);
}

function buildSsenTypeCatalog(rows = []) {
  const subjectMap = new Map();
  rows.forEach((row) => {
    const subject = row.subject || "과목 미지정";
    const chapterName = row.partName || "대단원 미지정";
    const unitName = row.unitName || "중단원 미지정";
    if (!subjectMap.has(subject)) subjectMap.set(subject, new Map());
    const chapterMap = subjectMap.get(subject);
    const chapterId = `${row.bookCode || subject}_${safeIdPart(chapterName)}`;
    if (!chapterMap.has(chapterName)) {
      chapterMap.set(chapterName, {
        id: chapterId,
        title: chapterName,
        units: new Map()
      });
    }
    const chapter = chapterMap.get(chapterName);
    const unitKey = `${row.unitNo || ""}_${unitName}`;
    if (!chapter.units.has(unitKey)) {
      chapter.units.set(unitKey, {
        id: `${row.bookCode || subject}_${row.unitNo || safeIdPart(unitName)}`,
        title: unitName,
        unitNo: row.unitNo || "",
        types: []
      });
    }
    chapter.units.get(unitKey).types.push({
      id: row.typeCode || `${subject}_${row.unitNo || ""}_${row.typeNo || ""}_${safeIdPart(row.typeName || "")}`,
      title: row.typeName || "유형명 미입력",
      typeNo: row.typeNo || "",
      bookTitle: row.bookTitle || "",
      partName: chapterName,
      unitName
    });
  });

  return Object.fromEntries(
    Array.from(subjectMap.entries()).map(([subject, chapterMap]) => [
      subject,
      Array.from(chapterMap.values()).map((chapter) => ({
        ...chapter,
        units: Array.from(chapter.units.values()).map((unit) => ({
          ...unit,
          types: unit.types.sort((a, b) => String(a.typeNo).localeCompare(String(b.typeNo), "ko", { numeric: true }))
        }))
      }))
    ])
  );
}

const ssenTypeCatalog = buildSsenTypeCatalog(ssenTypeIndex);
const testPaperSubjectOptions = Object.keys(ssenTypeCatalog);

function getTestPaperPreparationLabel(value = "") {
  return testPaperPreparationOptions.find((option) => option.id === value)?.label ?? "준비중";
}

function getTestPaperProgressLabel(value = "") {
  return testPaperProgressOptions.find((option) => option.id === value)?.label ?? "대기";
}

function getTestAttemptStatusLabel(value = "") {
  return testAttemptStatusOptions.find((option) => option.id === value)?.label ?? "미입력";
}

function getProblemBookTotalQuestions(book = {}) {
  const problemsCount = Array.isArray(book.problems) ? book.problems.length : 0;
  return Number(book.totalProblems || problemsCount || 0);
}

function getProblemBookPassCorrectCount(book = {}) {
  const totalQuestions = getProblemBookTotalQuestions(book);
  const passScore = Number(book.passScore || 0);
  if (!Number.isFinite(passScore) || passScore <= 0 || totalQuestions <= 0) return "";
  if (passScore <= totalQuestions) return Math.ceil(passScore);
  return Math.ceil(totalQuestions * Math.min(passScore, 100) / 100);
}

function getTestAttemptPassStatus(attempt = {}, session = {}) {
  if (attempt.status === "not_taken") return "not_taken";
  const correctCount = Number(attempt.correctCount);
  const passCorrectCount = Number(session.passCorrectCount);
  if (!Number.isFinite(correctCount) || !Number.isFinite(passCorrectCount) || passCorrectCount <= 0) return "";
  return correctCount >= passCorrectCount ? "passed" : "failed";
}

function getTestAttemptPassLabel(value = "") {
  return {
    failed: "미통과",
    not_taken: "미응시",
    passed: "통과"
  }[value] ?? "판정 전";
}

function inferTestPaperKind(book = {}) {
  if (testPaperKindOptions.some((option) => option.id === book.testKind)) return book.testKind;
  const text = `${book.title ?? ""} ${book.unit ?? ""}`.toLowerCase();
  if (text.includes("누적")) return "cumulative";
  if (text.includes("단원")) return "unit";
  return "daily";
}

function inferTestPaperSubjectFromText(text = "", fallbackSubject = testPaperSubjectOptions[0]) {
  const compactText = String(text ?? "").replace(/\s+/g, "");
  return testPaperSubjectOptions.find((subject) => compactText.includes(String(subject).replace(/\s+/g, ""))) ?? fallbackSubject ?? testPaperSubjectOptions[0];
}

function normalizeBookLinkedTypeIds(book = {}) {
  return Array.isArray(book.linkedTypeIds) ? book.linkedTypeIds.filter(Boolean) : [];
}

function typeNodeMatchesBook(book = {}, type = {}) {
  const linkedIds = normalizeBookLinkedTypeIds(book);
  if (linkedIds.includes(type.id)) return true;
  const haystack = `${book.title ?? ""} ${book.unit ?? ""} ${book.note ?? ""}`.replace(/\s+/g, "");
  return String(type.title ?? "")
    .split(/\s+|과|와|의/)
    .filter((token) => token.length >= 2)
    .some((token) => haystack.includes(token));
}

function getBooksForType(problemBooks = [], subject = "", type = {}) {
  return problemBooks.filter((book) =>
    (book.subject || "") === subject && typeNodeMatchesBook(book, type)
  );
}

function getTypeNodeStats(problemBooks = [], subject = "", type = {}) {
  const books = getBooksForType(problemBooks, subject, type);
  const registeredProblemCount = books.reduce((sum, book) => sum + Number(book.problems?.length ?? book.totalProblems ?? 0), 0);
  const recentUsedAt = books
    .map((book) => book.lastUsedAt || book.plannedDate || "")
    .filter(Boolean)
    .sort()
    .slice(-1)[0] || "";
  const kindLabels = [...new Set(books.map((book) => getTestPaperKindLabel(inferTestPaperKind(book))))];
  const preparedCount = books.filter((book) => (book.preparationStatus || "draft") === "ready").length;
  return {
    books,
    kindLabels,
    preparedCount,
    recentUsedAt,
    registeredProblemCount
  };
}

function getBookStudentProgress(book = {}, studentId = "") {
  const progress = book.studentProgress && typeof book.studentProgress === "object" ? book.studentProgress : {};
  return progress[studentId] ?? { status: "waiting", attempt: 0, score: "" };
}

function isRetiredProblemBookSeed(book = {}) {
  const problemBookId = String(book.problemBookId ?? "");
  return (
    problemBookId === "book_common_math_step01" ||
    problemBookId === "book_common_math_step02" ||
    problemBookId.startsWith("book_pagesnap_") ||
    book.sourceType === "pagesnap" ||
    String(book.sourceFileName ?? "").toLowerCase() === "pagesnap"
  );
}

function normalizeProblemBooks(problemBooks = []) {
  return problemBooks
    .filter((book) => !isRetiredProblemBookSeed(book))
    .map((book) => {
      const testKind = inferTestPaperKind(book);
      return book.testKind === testKind ? book : { ...book, testKind };
    });
}

function createDefaultProblemBooks() {
  return [];
}

function createProblemBookFromFile(fileName, testKind = "daily", fallbackSubject = testPaperSubjectOptions[0]) {
  const timestamp = Date.now();
  return {
    problemBookId: `book_uploaded_${timestamp}`,
    title: fileName.replace(/\.[^.]+$/, "") || "새 시험지",
    subject: inferTestPaperSubjectFromText(fileName, fallbackSubject),
    grade: "고1",
    unit: "단원 미지정",
    testKind: testPaperKindOptions.some((option) => option.id === testKind) ? testKind : "daily",
    preparationStatus: "draft",
    trackOrder: "",
    plannedDate: "",
    passScore: 80,
    maxRetestCount: 2,
    linkedTypeIds: [],
    sourceFileName: fileName,
    uploadedAt: today,
    totalProblems: 30,
    studentProgress: {},
    problems: Array.from({ length: 30 }, (_, index) => ({
      problemId: `problem_uploaded_${timestamp}_${index + 1}`,
      number: index + 1,
      status: "unchecked",
      cropImageUrl: "",
      text: "",
      answer: "",
      note: ""
    }))
  };
}

function createProblemBookFolder(folderName, testKind = "daily", fallbackSubject = testPaperSubjectOptions[0]) {
  const timestamp = Date.now();
  const inferredSubject = inferTestPaperSubjectFromText(folderName, fallbackSubject);
  return {
    problemBookId: `book_folder_${timestamp}`,
    title: folderName || "새 시험지",
    subject: inferredSubject,
    grade: "",
    unit: "",
    testKind: testPaperKindOptions.some((option) => option.id === testKind) ? testKind : "daily",
    preparationStatus: "draft",
    trackOrder: "",
    plannedDate: "",
    passScore: 80,
    maxRetestCount: 2,
    linkedTypeIds: [],
    sourceFileName: "",
    uploadedAt: today,
    uploadedAcademy: academyBrandName,
    numberRange: "",
    averageMinutes: "",
    totalProblems: 0,
    studentProgress: {},
    problems: []
  };
}

const defaultAiPrompts = {
  commentPolish: [
    "역할: 으뜸수학 고태영T의 수업 코멘트 편집자",
    "목표: 강사가 대강 적은 메모를 실제 발송 가능한 자연스러운 문장으로 다듬는다.",
    "작성 원칙:",
    "- 입력된 사실만 사용하고 없는 내용은 만들지 않는다.",
    "- 강사 원문의 핵심 의도와 표현의 사실은 반드시 반영한다.",
    "- 학생을 비난하거나 단정하지 않고, 다음 행동 중심으로 쓴다.",
    "- 알림톡에 바로 붙여 넣을 수 있게 최종 문장만 반환한다.",
    "- 제목, 마크다운, 구분선, 설명 문구는 쓰지 않는다.",
    "- 2~5문장 안에서 간결하게 작성한다."
  ].join("\n"),
  examReviewSpelling: [
    "역할: 시험 후 총평 맞춤법 교정자",
    "목표: 입력된 시험 후 총평의 맞춤법, 띄어쓰기, 명백한 오탈자만 고친다.",
    "작성 원칙:",
    "- 문장 구조, 어휘, 말투, 분량, 번호, 줄바꿈은 유지한다.",
    "- 사실, 날짜, 점수, 난이도, 과목명, 학교명, 교재명은 바꾸지 않는다.",
    "- 내용을 요약하거나 더 자연스럽게 다시 쓰지 않는다.",
    "- 새 문장이나 설명을 추가하지 않는다.",
    "- 수정할 곳이 없으면 원문을 그대로 반환한다.",
    "- 최종 교정문만 반환한다."
  ].join("\n"),
  noticeMessage: [
    "역할: 으뜸수학 고태영T의 알림톡 공지문 편집자",
    "목표: 강사가 입력한 교재/보강/공지 초안을 실제 발송 가능한 짧고 명료한 알림톡 문장으로 다듬는다.",
    "작성 원칙:",
    "- 입력된 사실만 사용하고 없는 날짜, 금액, 준비물, 일정은 만들지 않는다.",
    "- 학부모와 학생이 모두 읽어도 어색하지 않은 정중하고 분명한 말투를 사용한다.",
    "- 핵심 일정, 해야 할 행동, 문의가 필요한 지점을 빠르게 알 수 있게 쓴다.",
    "- 제목, 마크다운, 구분선, 설명 문구는 쓰지 않는다.",
    "- 알림톡 본문으로 바로 보낼 수 있게 최종 문장만 반환한다."
  ].join("\n")
};

const legacySupplementScheduleNotificationTemplates = {
  supplementScheduleConfirmNotice: [
    "#{일정제목} 일정이 확정되었습니다.",
    "",
    "#{보충내역}",
    "일정: #{보강일정}"
  ].join("\n"),
  supplementScheduleChangeNotice: [
    "#{일정제목} 일정이 변경되었습니다.",
    "",
    "#{보충내역}",
    "#{변경사유}",
    "#{변경전}",
    "변경 후: #{보강일정}"
  ].join("\n")
};

const defaultNotificationTemplates = {
  lessonNextHomeworkFollowup: "- 다음 수업 때 #{숙제}를 함께 확인하겠습니다.",
  lessonStayAfterHomeworkFollowup: "- 오늘 수업 후 #{숙제} 보충을 마무리합니다.",
  absenceMakeupStudentReminder: [
    "#{학생명} 학생 결석 보강 안내입니다.",
    "",
    "#{보강일정}",
    "#{보강대상}",
    "#{결석사유줄}",
    "#{확인숙제줄}",
    "#{보충메모}"
  ].join("\n"),
  homeworkMakeupStudentReminder: [
    "#{학생명} 학생 숙제 보충 안내입니다.",
    "",
    "#{보강일정}",
    "#{밀린숙제}",
    "#{보충메모}"
  ].join("\n"),
  supplementScheduleConfirmNotice: [
    "#{안내제목}",
    "",
    "#{보강일정}",
    "#{보강대상}",
    "#{결석사유줄}",
    "#{확인숙제줄}",
    "#{보충메모}"
  ].join("\n"),
  supplementScheduleChangeNotice: [
    "#{안내제목}",
    "",
    "#{보강일정}",
    "#{보강대상}",
    "#{결석사유줄}",
    "#{확인숙제줄}",
    "#{보충메모}",
    "#{변경사유}",
    "#{변경전}",
    "변경 후 일정: #{변경후일정}"
  ].join("\n")
};

const notificationTemplateRows = [
  {
    audience: "학생/학부모",
    callSite: "수업일지 과제 상태 · 다음시간까지 · 수업 알림톡 별표 블록",
    key: "lessonNextHomeworkFollowup",
    source: "Supabase app_state.aiSettings.notificationTemplates",
    title: "다음 수업 숙제 확인 안내",
    variables: "#{숙제}"
  },
  {
    audience: "학생/학부모",
    callSite: "수업일지 과제 상태 · 남아서 하고 가기 · 수업 알림톡 별표 블록",
    key: "lessonStayAfterHomeworkFollowup",
    source: "Supabase app_state.aiSettings.notificationTemplates",
    title: "수업 후 숙제 보충 안내",
    variables: "#{숙제}"
  },
  {
    audience: "학생",
    callSite: "보충관리 결석보강 · 학생 당일 11시 리마인더",
    key: "absenceMakeupStudentReminder",
    source: "Supabase app_state.aiSettings.notificationTemplates",
    title: "결석보강 학생 11시 알림톡",
    variables: "#{학생명}, #{보강일정}, #{보강대상}, #{결석사유줄}, #{확인숙제줄}, #{보충메모}"
  },
  {
    audience: "학생",
    callSite: "보충관리 숙제보충 · 학생 당일 11시 리마인더",
    key: "homeworkMakeupStudentReminder",
    source: "Supabase app_state.aiSettings.notificationTemplates",
    title: "숙제보충 학생 11시 알림톡",
    variables: "#{학생명}, #{보강일정}, #{밀린숙제}, #{보충메모}"
  },
  {
    audience: "학생/학부모",
    callSite: "보충관리 수업일지 일정 만들기 · 다음 정각 확정 안내",
    key: "supplementScheduleConfirmNotice",
    source: "Supabase app_state.aiSettings.notificationTemplates",
    title: "보충 일정 확정 안내",
    variables: "#{안내제목}, #{보강일정}, #{보강대상}, #{결석사유줄}, #{확인숙제줄}, #{보충메모}"
  },
  {
    audience: "학생/학부모",
    callSite: "보충관리 수업일지 일정 변경 · 다음 정각 변경 안내",
    key: "supplementScheduleChangeNotice",
    source: "Supabase app_state.aiSettings.notificationTemplates",
    title: "보충 일정 변경 안내",
    variables: "#{안내제목}, #{보강일정}, #{보강대상}, #{결석사유줄}, #{확인숙제줄}, #{보충메모}, #{변경사유}, #{변경전}, #{변경후일정}"
  }
];

const defaultAiSettings = {
  commentProvider: "auto",
  commentModel: "server-default",
  notificationTemplates: defaultNotificationTemplates,
  prompts: defaultAiPrompts
};

const examAnalysisPipelineRuntime = Object.freeze({
  confirmExamAnalysisQuestionCountRequest,
  deleteExamAnalysisRunRequest,
  deleteExamAnalysisSourceRequest,
  detectExamAnalysisQuestionBoundariesRequest,
  extractExamAnalysisSourceRequest,
  fetchExamAnalysisSsenTypesRequest,
  fillExamAnalysisQuestionRowsRequest,
  formatKoreaTimeLabel,
  generateExamAnalysisOutputDraftRequest,
  refineExamAnalysisQuestionRowsRequest,
  saveExamAnalysisOutputDraftsRequest,
  saveExamAnalysisQuestionReviewsRequest,
  verifyExamAnalysisSourceWithAiRequest
});

const examPrepCenterRuntime = Object.freeze({
  buildExamPostTargetsForStudent,
  buildTallySubmission,
  createMathExamEntry,
  currentExamCycle,
  dedupeExamPrepRowsForDisplay,
  defaultAiSettings,
  examCycleLabel,
  examPrepAutosaveRisk,
  formatKoreanDateTime,
  formatMathExamEntryLabel,
  formatShortDate,
  getAiPrompt,
  getExamPrepSchoolGradeKey,
  getStudentSchoolGradeKey,
  gradeMatchesStudent,
  normalizeMathExamEntries,
  parseCsvRows,
  safeIdPart,
  schoolMatchesStudent,
  summarizeTallySubmissions,
  syncPrimaryMathExamDate,
  today
});

const settingsCenterRuntime = Object.freeze({
  appStateAutosaveRisk,
  buildNotificationTemplatePreview,
  defaultAiPrompts,
  defaultAiSettings,
  defaultNotificationTemplates,
  defaultTeacherAccountSettings,
  getKoreaDateString,
  normalizeAiPrompts,
  normalizeAiSettings,
  normalizeNotificationTemplates,
  notificationTemplateRows,
  postJson
});

const learningSupportRuntime = Object.freeze({
  StudentPortalV2,
  appStateAutosaveRisk,
  dedupeActionableHomeworks,
  getHomeworkAction,
  isActiveStudent,
  isHomeworkActionRequired,
  isHomeworkMakeupCandidate,
  isHomeworkOverdue,
  testPaperSubjectOptions,
  today
});

const planningToolRuntime = Object.freeze({
  appStateAutosaveRisk,
  buildExamCalendarEvents,
  buildMonthDays,
  createMathExamEntry,
  createSchoolCalendarPeriodCards,
  currentExamCycle,
  defaultAiSettings,
  eventIntersectsMonth,
  examCycleLabel,
  formatMonthTitle,
  formatShortDate,
  getDefaultExamPeriodRange,
  getExamPeriodGroupKey,
  getSchoolCalendarTargetRows,
  isActiveStudent,
  isExamLinkedCalendarEvent,
  normalizeLessonResearchSubject,
  normalizeMathExamEntries,
  normalizeMathSubject,
  schoolCalendarAutosaveRisk,
  ssenTypeCatalog,
  syncPrimaryMathExamDate,
  syncSchoolCalendarEventToExamPrepRows,
  today
});

const notificationCenterRuntime = Object.freeze({
  canDeleteNotificationJob,
  defaultAiSettings,
  formatKoreaTimeLabel,
  formatNotificationJobStatus,
  getAiPrompt,
  getKoreaDateString,
  getNotificationJobStatusClass,
  getSolapiNotificationJobProviderReference,
  isNotificationSchedulePast,
  normalizeMessageText,
  normalizePhoneNumber,
  today
});

function loadLessonJournalReservationAudit({ date, lessonId }) {
  const path = `/api/notification-jobs?date=${encodeURIComponent(date)}&lessonId=${encodeURIComponent(lessonId)}&limit=500`;
  return getJsonWithTimeout(path, 12000, "OS 알림톡 예약 기록 조회가 12초를 넘었습니다.");
}

const lessonJournalTransport = Object.freeze({
  loadLessonJournalReservationAudit
});

const academyReminderPanelRuntime = Object.freeze({
  createAcademyReminderDraft,
  formatAcademyReminderDateTime,
  getAcademyReminderClassName,
  getAcademyReminderClassTemplateId,
  getAcademyReminderPriorityLabel,
  getAcademyReminderSourcePayload,
  getAcademyReminderStudentName,
  getAcademyReminderTypeLabel,
  getAcademyRemindersForDate,
  isAcademyReminderOverdue,
  isActiveStudent,
  normalizeAcademyReminderDraft,
  normalizeAcademyReminderStatus,
  sortAcademyReminders,
  today
});

const lessonNestedPanelRuntime = Object.freeze({
  createEmptyRecord,
  createLessonStudentRecordId,
  findLessonStudentRecord,
  followUpTypeLabel,
  formatKoreaTimeLabel,
  formatKoreanDateTime,
  getActiveLessonStudents,
  getLessonContent,
  getLessonHomework,
  getSaveButtonLabel,
  getSupplementScheduleChangeDetailSeed,
  getSupplementTaskSourceLabel,
  normalizeTimeInput
});

const lessonJournalRuntime = Object.freeze({
  AcademyReminderList: lazyTeacherViewComponents.AcademyReminderList,
  academyReminder: academyReminderPanelRuntime,
  CommentComposerModal,
  ExamPrepLessonDetail,
  PreparationMemoModal: lazyTeacherViewComponents.PreparationMemoModal,
  StudentPortalV2,
  SupplementMakeupLessonDetail: lazyTeacherViewComponents.SupplementMakeupLessonDetail,
  buildInitialCommentDraft,
  buildLessonReservationPayloadSnapshot,
  createEmptyRecord,
  createLessonStudentRecordId,
  defaultAiSettings,
  findLessonStudentRecord,
  findPreviousLessonForStudent,
  formatKoreaTimeLabel,
  formatLessonTimeRange,
  formatNotificationJobStatus,
  getAcademyRemindersForLesson,
  getCommentButtonState,
  getCommentStatusLabel,
  getDisplayCommentSendStatus,
  getHomeworkFollowupFromRecord,
  getHomeworkFollowupMethodFromRecord,
  getHomeworkFollowupOptionsForAssignmentStatus,
  getHomeworkFollowupPatch,
  getLessonAlimtalkScheduledDate,
  getLessonContent,
  getLessonHomework,
  getLessonJournalStudents,
  getLessonRecordWithPreviousDefaults,
  getLessonReservationPayloadFingerprint,
  getLessonTestResultLines,
  getNotificationJobProviderReference,
  getSolapiNotificationJobProviderReference,
  getStudentSupplementSchedules,
  isExamPrepLesson,
  isLessonAlimtalkScheduleExpired,
  isNotificationSchedulePast,
  isSameLessonGroup,
  isSpecialLectureLesson,
  isSupplementMakeupTaskLesson,
  nestedPanels: lessonNestedPanelRuntime,
  today
});

const teacherLessonHubRuntime = Object.freeze({
  AcademyReminderPanel: lazyTeacherViewComponents.AcademyReminderPanel,
  academyReminder: academyReminderPanelRuntime,
  ExamPrepLessonDetail,
  LessonJournalFallback,
  SupplementMakeupLessonDetail: lazyTeacherViewComponents.SupplementMakeupLessonDetail,
  buildMonthDays,
  followUpTypeLabel,
  formatMonthTitle,
  getLessonStudentIds,
  isExamPrepLesson,
  isLegacyExamPrepLesson,
  isSupplementMakeupTaskLesson,
  lessonJournal: lessonJournalRuntime,
  nestedPanels: lessonNestedPanelRuntime,
  sortByTime
});

function hasBrokenPromptEncoding(prompt = "") {
  const text = String(prompt ?? "");
  const replacementCount = (text.match(/\uFFFD/g) || []).length;
  return replacementCount >= 6 || /����|��/.test(text);
}

function normalizeAiPrompts(prompts = {}) {
  const sourcePrompts = prompts && typeof prompts === "object" ? prompts : {};
  const nextPrompts = Object.keys(defaultAiPrompts).reduce((normalized, promptKey) => ({
    ...normalized,
    [promptKey]: sourcePrompts[promptKey] ?? defaultAiPrompts[promptKey]
  }), {});
  return nextPrompts;
}

function normalizeNotificationTemplates(templates = {}) {
  const sourceTemplates = templates && typeof templates === "object" ? templates : {};
  return Object.keys(defaultNotificationTemplates).reduce((normalized, templateKey) => ({
    ...normalized,
    [templateKey]: sourceTemplates[templateKey] === legacySupplementScheduleNotificationTemplates[templateKey]
      ? defaultNotificationTemplates[templateKey]
      : sourceTemplates[templateKey] ?? defaultNotificationTemplates[templateKey]
  }), {});
}

function normalizeAiSettings(settings = {}) {
  return {
    ...defaultAiSettings,
    ...(settings ?? {}),
    notificationTemplates: normalizeNotificationTemplates(settings?.notificationTemplates),
    prompts: normalizeAiPrompts(settings?.prompts)
  };
}

const defaultGeneratedLessonControls = {
  manualOverrideKeys: [],
  suppressedKeys: []
};

function getAiPrompt(settings = {}, promptKey) {
  const prompts = normalizeAiPrompts(settings?.prompts);
  return prompts[promptKey] ?? defaultAiPrompts[promptKey] ?? "";
}

export function App() {
  const [activeView, setActiveView] = useState("lessons");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);
  const [teacherAccountSettings, setTeacherAccountSettings] = useState(defaultTeacherAccountSettings);
  const { login: handleLogin, logout: handleLogout, session } = useAppSession({
    documentTarget: typeof document === "undefined" ? null : document,
    onLogout: () => {
      setIsPortalDataReady(false);
      setActiveView("lessons");
    },
    onSessionAccepted: (nextSession) => {
      setIsPortalDataReady(false);
      if (nextSession.role === "teacher") setActiveView("lessons");
    },
    request: postJson,
    storageKey: storageKeys.teacherSession,
    teacherAccount: { ...defaultTeacherAccountSettings, ...teacherAccountSettings },
    windowTarget: typeof window === "undefined" ? null : window
  });
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedLessonId, setSelectedLessonId] = useState("");
  const [lessonClipboard, setLessonClipboard] = useState(null);
  const [lessonUndoStack, setLessonUndoStack] = useState([]);
  const lessonCancelRequestsRef = useRef(new Map());
  const [deletedLessonBundles, setDeletedLessonBundles] = useStoredState(storageKeys.deletedLessonBundles, []);
  const [classTemplates, setClassTemplates] = useStoredState(storageKeys.classTemplates, sampleData.classTemplates);
  const [students, setStudents] = useStoredState(storageKeys.students, sampleData.students);
  const [studentIntakeApplicants, setStudentIntakeApplicants] = useStoredState(storageKeys.studentIntakeApplicants, []);
  const [specialLectureApplications, setSpecialLectureApplications] = useStoredState(storageKeys.specialLectureApplications, []);
  const [specialLectureEnrollments, setSpecialLectureEnrollments] = useStoredState(storageKeys.specialLectureEnrollments, []);
  const [lessons, setLessons] = useStoredState(storageKeys.lessons, sampleData.lessons);
  const [records, setRecords] = useStoredState(storageKeys.records, sampleData.lessonStudentRecords);
  const [homeworks, setHomeworks] = useStoredState(storageKeys.homeworks, sampleData.homeworks);
  const [reportSnapshots, setReportSnapshots] = useStoredState(storageKeys.reportSnapshots, []);
  const [makeupTasks, setMakeupTasks] = useStoredState(storageKeys.makeupTasks, []);
  const [academyReminders, setAcademyReminders] = useStoredState(storageKeys.academyReminders, []);
  const [notificationLogs, setNotificationLogs] = useStoredState(storageKeys.notificationLogs, []);
  const [notificationJobs, setNotificationJobs] = useState([]);
  const [notificationJobsStatus, setNotificationJobsStatus] = useState({ state: "idle", message: "" });
  const [wrongProblems, setWrongProblems] = useStoredState(storageKeys.wrongProblems, sampleData.wrongProblems ?? []);
  const [problemBooks, setProblemBooks] = useStoredState(storageKeys.problemBooks, createDefaultProblemBooks());
  const [testSessions, setTestSessions] = useState([]);
  const [testAttempts, setTestAttempts] = useState([]);
  const [scoreRecords, setScoreRecords] = useStoredState(storageKeys.scoreRecords, sampleData.scoreRecords ?? []);
  const [academyTests, setAcademyTests] = useStoredState(storageKeys.academyTests, sampleData.academyTests ?? []);
  const [examPrepRows, setExamPrepRows] = useStoredState(storageKeys.examPrepRows, normalizeExamPrepRows(sampleData.examPrepRows ?? []));
  const [tallySubmissions, setTallySubmissions] = useStoredState(storageKeys.tallySubmissions, []);
  const [tallySummaries, setTallySummaries] = useStoredState(storageKeys.tallySummaries, {});
  const [studentQuestions, setStudentQuestions] = useStoredState(storageKeys.studentQuestions, []);
  const [examPostSubmissions, setExamPostSubmissions] = useStoredState(storageKeys.examPostSubmissions, []);
  const [examPostTargetStudentIds, setExamPostTargetStudentIds] = useStoredState(storageKeys.examPostTargetStudentIds, {});
  const [studentConsultations, setStudentConsultations] = useStoredState(storageKeys.studentConsultations, []);
  const [teacherOperatingMemos, setTeacherOperatingMemos] = useStoredState(storageKeys.teacherOperatingMemos, {});
  const [schoolEvents, setSchoolEvents] = useStoredState(
    storageKeys.schoolEvents,
    createDefaultSchoolEvents(sampleData.examPrepRows ?? [])
  );
  const [lessonResearchItems, setLessonResearchItems] = useStoredState(
    storageKeys.lessonResearchItems,
    createDefaultLessonResearchItems()
  );
  const [specialLectureGuides, setSpecialLectureGuides] = useStoredState(
    storageKeys.specialLectureGuides,
    defaultSpecialLectureGuides
  );
  const [resourceMaterials, setResourceMaterials] = useStoredState(storageKeys.resourceMaterials, []);
  const [aiSettings, setAiSettings] = useStoredState(storageKeys.aiSettings, defaultAiSettings);
  const [attendanceSettings, setAttendanceSettings] = useStoredState(
    storageKeys.attendanceSettings,
    defaultAttendanceSettings
  );
  const [monthlyInstructorSettlements, setMonthlyInstructorSettlements] = useStoredState(
    storageKeys.monthlyInstructorSettlements,
    createDefaultMonthlySettlementState()
  );
  const [specialLectureInstructorSettlements, setSpecialLectureInstructorSettlements] = useStoredState(
    storageKeys.specialLectureInstructorSettlements,
    createDefaultSpecialLectureSettlementState()
  );
  const [lessonNotificationPlans, setLessonNotificationPlans] = useStoredState(storageKeys.lessonNotificationPlans, {});
  const [generatedLessonControls, setGeneratedLessonControls] = useStoredState(
    "academy-os.generatedLessonControls.v1",
    defaultGeneratedLessonControls
  );
  const [generatedLessonSaveStatus, setGeneratedLessonSaveStatus] = useState({
    lessons: [],
    message: "",
    state: "idle"
  });
  const [integrationStatus, setIntegrationStatus] = useState(null);
  const [isAppStateReady, setIsAppStateReady] = useState(false);
  const [isPortalDataReady, setIsPortalDataReady] = useState(false);
  const [attendanceSyncStatus, setAttendanceSyncStatus] = useState({
    lastSyncedAt: "",
    message: "출결 서버 확인 대기",
    state: "idle"
  });
  const [saveStates, setSaveStates] = useState({});
  const [appStateSaveState, setAppStateSaveState] = useState("idle");
  const [problemBookSaveState, setProblemBookSaveState] = useState("idle");
  const [testResultSaveState, setTestResultSaveState] = useState("idle");
  const [scoreRecordSaveState, setScoreRecordSaveState] = useState("idle");
  const [academyTestSaveState, setAcademyTestSaveState] = useState("idle");
  const [studentConsultationSaveState, setStudentConsultationSaveState] = useState("idle");
  const [specialLectureGuideSaveState, setSpecialLectureGuideSaveState] = useState("idle");
  const [monthlySettlementSaveState, setMonthlySettlementSaveState] = useState("idle");
  const [specialLectureSettlementSaveState, setSpecialLectureSettlementSaveState] = useState("idle");
  const [studentHomeworkSaveStates, setStudentHomeworkSaveStates] = useState({});
  const studentHomeworkSavingIdsRef = useRef(new Set());
  const [studentQuestionSaveState, setStudentQuestionSaveState] = useState({
    action: "",
    label: "",
    message: "",
    state: "idle",
    targetId: ""
  });
  const studentQuestionMutationRef = useRef(false);
  const [studentExamPostSaveStates, setStudentExamPostSaveStates] = useState({});
  const studentExamPostMutationIdsRef = useRef(new Set());
  const [examPostConfirmSaveStates, setExamPostConfirmSaveStates] = useState({});
  const examPostConfirmMutationIdsRef = useRef(new Set());
  const [examPrepRowSaveStates, setExamPrepRowSaveStates] = useState({});
  const [studentProfileSaveStates, setStudentProfileSaveStates] = useState({});
  const [teacherOperatingMemoSaveStates, setTeacherOperatingMemoSaveStates] = useState({});
  const [studentIntakeSaveStates, setStudentIntakeSaveStates] = useState({});
  const [studentIntakeRegistrationStates, setStudentIntakeRegistrationStates] = useState({});
  const [studentIntakeRegistrationMessages, setStudentIntakeRegistrationMessages] = useState({});
  const [reportModal, setReportModal] = useState(null);
  const [isLessonModalOpen, setIsLessonModalOpen] = useState(false);
  const [isMonthlyRegularLessonOpenModal, setIsMonthlyRegularLessonOpenModal] = useState(false);
  const [monthlyRegularLessonOpenStatus, setMonthlyRegularLessonOpenStatus] = useState({ message: "", state: "idle" });
  const [editingLesson, setEditingLesson] = useState(null);
  const [isLessonJournalOpen, setIsLessonJournalOpen] = useState(false);
  const [attendanceModal, setAttendanceModal] = useState(null);
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [lessonDeleteModalId, setLessonDeleteModalId] = useState("");
  const [selectedReportLessonId, setSelectedReportLessonId] = useState("");
  const recordsRef = useRef(records);
  const homeworksRef = useRef(homeworks);
  const saveStatesRef = useRef(saveStates);
  const autoSaveTimersRef = useRef(new Map());
  const dirtyHomeworkIdsRef = useRef(new Set());
  const initialMakeupTasksRef = useRef(makeupTasks);
  const initialExamPrepRowsRef = useRef(examPrepRows);
  const initialSchoolEventsRef = useRef(schoolEvents);
  const appStateSaveTimerRef = useRef(null);
  const problemBookSaveRequestRef = useRef(0);
  const problemBookSaveTimerRef = useRef(null);
  const scoreRecordSaveRequestRef = useRef(0);
  const academyTestSaveRequestRef = useRef(0);
  const studentConsultationSaveRequestRef = useRef(0);
  const examPrepRowSaveControllerRef = useRef(null);
  const examPrepDeleteRequestIdsRef = useRef(new Set());
  const studentProfileSaveRequestRef = useRef({});
  const teacherOperatingMemoSaveRequestRef = useRef({});
  const studentIntakeSaveRequestRef = useRef({});
  const isApplyingRemoteAppStateRef = useRef(false);
  const appStatePersistenceControllerRef = useRef(null);
  const notificationJobsRefreshControllerRef = useRef(null);
  const notificationJobsReconcileControllerRef = useRef(null);
  const attendanceOnlyMode = isAttendanceOnlyRoute();
  const specialLectureOnlyMode = isSpecialLectureRoute();
  const {
    loadedDateRef: attendanceLoadedDateRef,
    markLoadedDate: markAttendanceLoadedDate,
    reloadKey: attendanceReloadKey,
    requestReload: requestAttendanceReload
  } = useAttendanceDateRollover({
    enabled: attendanceOnlyMode,
    getCurrentDate: getKoreaDateString,
    isReady: isAppStateReady,
    onReloadRequested: () => setIsAppStateReady(false)
  });

  const sharedAppState = useMemo(() => ({
    aiSettings,
    attendanceSettings,
    deletedLessonBundles,
    generatedLessonControls,
    lessonNotificationPlans,
    lessonResearchItems,
    notificationLogs,
    reportSnapshots,
    examPostTargetStudentIds,
    tallySubmissions,
    tallySummaries,
    wrongProblems
  }), [
    aiSettings,
    attendanceSettings,
    deletedLessonBundles,
    generatedLessonControls,
    lessonNotificationPlans,
    lessonResearchItems,
    notificationLogs,
    reportSnapshots,
    examPostTargetStudentIds,
    tallySubmissions,
    tallySummaries,
    wrongProblems
  ]);
  const initialSharedAppStateRef = useRef(sharedAppState);
  const persistedSharedAppStateRef = useRef({});

  function getAppStatePersistenceController() {
    if (!appStatePersistenceControllerRef.current) {
      appStatePersistenceControllerRef.current = createAppStatePersistenceController({
        onError: (error) => console.error(error),
        onPersisted: ({ key, value }) => {
          persistedSharedAppStateRef.current = {
            ...persistedSharedAppStateRef.current,
            [key]: value
          };
        },
        onState: setAppStateSaveState,
        read: () => getJsonWithTimeout(
          `/api/app-state?includeRows=true&verify=autosave-${Date.now()}`,
          15000,
          "공통 설정 저장 확인이 15초를 넘었습니다. 현재 입력을 유지한 채 잠시 뒤 다시 확인해 주세요."
        ),
        write: ({ expectedUpdatedAt, states }) => postAppState(states, { expectedUpdatedAt })
      });
    }
    return appStatePersistenceControllerRef.current;
  }

  useEffect(() => {
    let isMounted = true;

    async function loadCoreDataFromApi() {
      if (!session && !attendanceOnlyMode && !specialLectureOnlyMode) {
        setIsAppStateReady(false);
        setIsPortalDataReady(false);
        return;
      }
      if (specialLectureOnlyMode) {
        setIsAppStateReady(false);
        setIsPortalDataReady(false);
        return;
      }
      if (attendanceOnlyMode) setIsAppStateReady(false);
      try {
        if (attendanceOnlyMode) {
          const attendanceDate = getKoreaDateString();
          const [studentsResponse, lessonsResponse, recordsResponse] = await Promise.all([
            fetch(apiUrl("/api/students")),
            fetch(apiUrl(`/api/lessons?date=${encodeURIComponent(attendanceDate)}`)),
            fetch(apiUrl(`/api/lesson-records?date=${encodeURIComponent(attendanceDate)}`))
          ]);
          const [studentsResult, lessonsResult, recordsResult] = await Promise.all([
            studentsResponse.json(),
            lessonsResponse.json(),
            recordsResponse.json()
          ]);
          if (!isMounted) return;
          const nextLessons = lessonsResult.ok && Array.isArray(lessonsResult.lessons)
            ? filterActiveLessons(normalizeLessonCalendarRules(lessonsResult.lessons, [], []))
            : [];
          if (studentsResult.ok && Array.isArray(studentsResult.students)) {
            setStudents(studentsResult.students);
          }
          if (nextLessons.length > 0) {
            setLessons(nextLessons);
          }
          if (recordsResult.ok && Array.isArray(recordsResult.records)) {
            setRecords(nextLessons.length > 0 ? filterRecordsForLessons(recordsResult.records, nextLessons) : recordsResult.records);
          }
          setAttendanceSettings((current) => normalizeAttendanceSettings(current));
          markAttendanceLoadedDate(attendanceDate);
          setIsPortalDataReady(false);
          setIsAppStateReady(true);
          return;
        }
        if (session && ["student", "parent"].includes(session.role)) {
          const portalData = await fetchPortalData(session.sessionToken);
          if (!isMounted) return;
          setStudents(portalData.students ?? []);
          setLessons(portalData.lessons ?? []);
          setRecords(portalData.records ?? []);
          setHomeworks(portalData.homeworks ?? []);
          setMakeupTasks(portalData.makeupTasks ?? []);
          setExamPrepRows(portalData.examPrepRows ?? []);
          setSchoolEvents(portalData.schoolEvents ?? []);
          setResourceMaterials(portalData.materials ?? []);
          setReportSnapshots(portalData.reportSnapshots ?? []);
          setScoreRecords(portalData.scoreRecords ?? []);
          setExamPostSubmissions(portalData.examPostSubmissions ?? []);
          if (portalData.examPostTargetStudentIds && typeof portalData.examPostTargetStudentIds === "object") {
            setExamPostTargetStudentIds(portalData.examPostTargetStudentIds);
          }
          setStudentQuestions(portalData.studentQuestions ?? []);
          setIsAppStateReady(false);
          setIsPortalDataReady(true);
          return;
        }
        setIsPortalDataReady(false);
        const [
          studentsResponse,
          studentIntakeApplicantsResponse,
          specialLectureApplicationsResponse,
          specialLectureEnrollmentsResponse,
          classesResponse,
          lessonsResponse,
          recordsResponse,
          homeworksResponse,
          makeupTasksResponse,
          academyRemindersResponse,
          examPrepRowsResponse,
          schoolEventsResponse,
          testSessionsResponse,
          testAttemptsResponse,
          appStateResponse,
          resourceMaterialsResponse
        ] = await Promise.all([
          fetch(apiUrl("/api/students")),
          fetch(apiUrl("/api/student-intake-applicants")),
          fetch(apiUrl("/api/special-lecture-applications")),
          fetch(apiUrl("/api/special-lecture-enrollments"), { cache: "no-store" }),
          fetch(apiUrl("/api/classes")),
          fetch(apiUrl("/api/lessons")),
          fetch(apiUrl("/api/lesson-records")),
          fetch(apiUrl("/api/homeworks")),
          fetch(apiUrl("/api/makeup-tasks")),
          fetch(apiUrl("/api/academy-reminders")),
          fetch(apiUrl("/api/exam-prep-rows")),
          fetch(apiUrl("/api/school-events")),
          fetch(apiUrl("/api/test-sessions")),
          fetch(apiUrl("/api/test-attempts")),
          fetch(apiUrl("/api/app-state?includeRows=true"), { cache: "no-store" }),
          fetch(apiUrl("/api/resource-materials"))
        ]);
        const [
          studentsResult,
          studentIntakeApplicantsResult,
          specialLectureApplicationsResult,
          specialLectureEnrollmentsResult,
          classesResult,
          lessonsResult,
          recordsResult,
          homeworksResult,
          makeupTasksResult,
          academyRemindersResult,
          examPrepRowsResult,
          schoolEventsResult,
          testSessionsResult,
          testAttemptsResult,
          appStateResult,
          resourceMaterialsResult
        ] = await Promise.all([
          studentsResponse.json(),
          studentIntakeApplicantsResponse.json(),
          specialLectureApplicationsResponse.json(),
          specialLectureEnrollmentsResponse.json(),
          classesResponse.json(),
          lessonsResponse.json(),
          recordsResponse.json(),
          homeworksResponse.json(),
          makeupTasksResponse.json(),
          academyRemindersResponse.json(),
          examPrepRowsResponse.json(),
          schoolEventsResponse.json(),
          testSessionsResponse.json(),
          testAttemptsResponse.json(),
          appStateResponse.json(),
          resourceMaterialsResponse.json()
        ]);
        if (!isMounted) return;
        if (studentsResult.ok && Array.isArray(studentsResult.students) && studentsResult.students.length > 0) {
          setStudents(studentsResult.students);
        }
        if (studentIntakeApplicantsResult.ok && Array.isArray(studentIntakeApplicantsResult.applicants)) {
          setStudentIntakeApplicants(studentIntakeApplicantsResult.applicants);
        }
        if (specialLectureApplicationsResult.ok && Array.isArray(specialLectureApplicationsResult.applications)) {
          setSpecialLectureApplications(normalizeSpecialLectureApplications(specialLectureApplicationsResult.applications));
        }
        if (specialLectureEnrollmentsResult.ok && Array.isArray(specialLectureEnrollmentsResult.enrollments)) {
          setSpecialLectureEnrollments(normalizeSpecialLectureEnrollments(specialLectureEnrollmentsResult.enrollments));
        }
        const normalizedClassTemplates = classesResult.ok && Array.isArray(classesResult.classTemplates) && classesResult.classTemplates.length > 0
          ? normalizeClassTemplates(classesResult.classTemplates)
          : classTemplates;
        if (classesResult.ok && Array.isArray(classesResult.classTemplates) && classesResult.classTemplates.length > 0) {
          setClassTemplates(normalizedClassTemplates);
        }
        const normalizedLessons = lessonsResult.ok && Array.isArray(lessonsResult.lessons)
          ? normalizeLessonCalendarRules(lessonsResult.lessons, makeupTasksResult.makeupTasks ?? [], normalizedClassTemplates)
          : [];
        if (normalizedLessons.length > 0) {
          setLessons(filterActiveLessons(normalizedLessons));
          normalizedLessons
            .filter((lesson, index) => !areLessonCalendarRuleFieldsEqual(lesson, lessonsResult.lessons[index]))
            .forEach((lesson) => postJson("/api/lessons", { lesson }).catch((error) => console.error(error)));
        }
        if (recordsResult.ok && Array.isArray(recordsResult.records) && recordsResult.records.length > 0) {
          const sourceLessons = normalizedLessons.length > 0 ? normalizedLessons : lessons;
          setRecords(filterRecordsForLessons(recordsResult.records, sourceLessons));
        }
        if (homeworksResult.ok && Array.isArray(homeworksResult.homeworks) && homeworksResult.homeworks.length > 0) {
          const sourceLessons = normalizedLessons.length > 0 ? normalizedLessons : lessons;
          setHomeworks(filterHomeworksForLessons(homeworksResult.homeworks, sourceLessons));
        }
        if (makeupTasksResult.ok && Array.isArray(makeupTasksResult.makeupTasks)) {
          setMakeupTasks(makeupTasksResult.makeupTasks);
        }
        if (academyRemindersResult.ok && Array.isArray(academyRemindersResult.academyReminders)) {
          setAcademyReminders(sortAcademyReminders(academyRemindersResult.academyReminders));
        }
        if (examPrepRowsResult.ok && Array.isArray(examPrepRowsResult.examPrepRows)) {
          const normalizedRows = normalizeExamPrepRows(examPrepRowsResult.examPrepRows);
          const changedRows = normalizedRows.filter((row, index) => JSON.stringify(row) !== JSON.stringify(examPrepRowsResult.examPrepRows[index]));
          setExamPrepRows(normalizedRows);
          if (changedRows.length > 0) {
            persistExamPrepRows(changedRows);
          }
        }
        if (schoolEventsResult.ok && Array.isArray(schoolEventsResult.schoolEvents)) {
          setSchoolEvents(schoolEventsResult.schoolEvents);
        }
        if (testSessionsResult.ok && Array.isArray(testSessionsResult.testSessions)) {
          setTestSessions(testSessionsResult.testSessions);
        }
        if (testAttemptsResult.ok && Array.isArray(testAttemptsResult.testAttempts)) {
          setTestAttempts(testAttemptsResult.testAttempts);
        }
        if (appStateResult.ok && appStateResult.states && Object.keys(appStateResult.states).length > 0) {
          const states = appStateResult.states;
          persistedSharedAppStateRef.current = Object.fromEntries(
            Object.keys(initialSharedAppStateRef.current).map((key) => [
              key,
              Object.prototype.hasOwnProperty.call(states, key)
                ? states[key]
                : initialSharedAppStateRef.current[key]
            ])
          );
          getAppStatePersistenceController().setSnapshot({
            keys: Object.keys(initialSharedAppStateRef.current),
            stateRows: appStateResult.stateRows ?? [],
            states: persistedSharedAppStateRef.current
          });
          isApplyingRemoteAppStateRef.current = true;
          if (Array.isArray(states.academyTests)) setAcademyTests(states.academyTests);
          if (states.aiSettings) setAiSettings(states.aiSettings);
          if (states.attendanceSettings) setAttendanceSettings(normalizeAttendanceSettings(states.attendanceSettings));
          if (Array.isArray(states.deletedLessonBundles)) setDeletedLessonBundles(states.deletedLessonBundles);
          if (states.generatedLessonControls) setGeneratedLessonControls(normalizeGeneratedLessonControls(states.generatedLessonControls));
          if (states.lessonNotificationPlans && typeof states.lessonNotificationPlans === "object" && !Array.isArray(states.lessonNotificationPlans)) {
            setLessonNotificationPlans(states.lessonNotificationPlans);
          }
          if (Array.isArray(states.lessonResearchItems)) setLessonResearchItems(normalizeLessonResearchItems(states.lessonResearchItems));
          if (Array.isArray(states.notificationLogs)) setNotificationLogs(states.notificationLogs);
          if (Array.isArray(states.problemBooks)) setProblemBooks(normalizeProblemBooks(states.problemBooks));
          if (Array.isArray(states.reportSnapshots)) setReportSnapshots(states.reportSnapshots);
          if (Array.isArray(states.scoreRecords)) setScoreRecords(states.scoreRecords);
          if (Array.isArray(states.examPostSubmissions)) setExamPostSubmissions(states.examPostSubmissions);
          if (states.examPostTargetStudentIds && typeof states.examPostTargetStudentIds === "object" && !Array.isArray(states.examPostTargetStudentIds)) {
            setExamPostTargetStudentIds(states.examPostTargetStudentIds);
          }
          if (Array.isArray(states.studentQuestions)) setStudentQuestions(states.studentQuestions);
          if (Array.isArray(states.studentConsultations)) setStudentConsultations(states.studentConsultations);
          if (states.teacherOperatingMemos && typeof states.teacherOperatingMemos === "object" && !Array.isArray(states.teacherOperatingMemos)) {
            setTeacherOperatingMemos(states.teacherOperatingMemos);
          } else {
            setTeacherOperatingMemos({});
          }
          if (Array.isArray(states.specialLectureGuides)) setSpecialLectureGuides(normalizeSpecialLectureGuides(states.specialLectureGuides));
          if (states[monthlySettlementStateKey]) {
            setMonthlyInstructorSettlements(normalizeMonthlySettlementState(states[monthlySettlementStateKey]));
          } else {
            setMonthlyInstructorSettlements(createDefaultMonthlySettlementState());
          }
          if (states[specialLectureSettlementStateKey]) {
            setSpecialLectureInstructorSettlements(
              normalizeSpecialLectureSettlementState(states[specialLectureSettlementStateKey])
            );
          } else {
            setSpecialLectureInstructorSettlements(createDefaultSpecialLectureSettlementState());
          }
          if (Array.isArray(states.tallySubmissions)) setTallySubmissions(states.tallySubmissions);
          if (states.tallySummaries && typeof states.tallySummaries === "object" && !Array.isArray(states.tallySummaries)) {
            setTallySummaries(states.tallySummaries);
          }
          if (Array.isArray(states.wrongProblems)) setWrongProblems(states.wrongProblems);
          window.setTimeout(() => {
            isApplyingRemoteAppStateRef.current = false;
            setIsAppStateReady(true);
          }, 0);
        } else if (appStateResult.ok) {
          persistedSharedAppStateRef.current = initialSharedAppStateRef.current;
          const seededResult = await postAppState(initialSharedAppStateRef.current);
          if (!isMounted) return;
          getAppStatePersistenceController().setSnapshot({
            keys: Object.keys(initialSharedAppStateRef.current),
            stateRows: seededResult.stateRows ?? [],
            states: initialSharedAppStateRef.current
          });
          setIsAppStateReady(true);
        }
        if (resourceMaterialsResult.ok && Array.isArray(resourceMaterialsResult.materials)) {
          setResourceMaterials(resourceMaterialsResult.materials);
        }
      } catch (error) {
        console.info("academy-os API sync skipped:", error.message);
        if (attendanceOnlyMode) setIsAppStateReady(false);
      }
    }

    loadCoreDataFromApi();
    return () => {
      isMounted = false;
    };
  }, [
    setAcademyReminders,
    setClassTemplates,
    setAcademyTests,
    setAiSettings,
    setAttendanceSettings,
    setDeletedLessonBundles,
    setExamPrepRows,
    setGeneratedLessonControls,
    setHomeworks,
    setLessonResearchItems,
    setLessons,
    setMakeupTasks,
    setMonthlyInstructorSettlements,
    setNotificationLogs,
    setProblemBooks,
    setRecords,
    setReportSnapshots,
    setResourceMaterials,
    setScoreRecords,
    setSchoolEvents,
    setSpecialLectureApplications,
    setSpecialLectureEnrollments,
    setSpecialLectureGuides,
    setSpecialLectureInstructorSettlements,
    setStudents,
    setStudentConsultations,
    setStudentIntakeApplicants,
    setTallySubmissions,
    setTallySummaries,
    setWrongProblems,
    session,
    attendanceOnlyMode,
    specialLectureOnlyMode,
    attendanceReloadKey
  ]);

  useEffect(() => {
    if (session?.role !== "teacher" || !isAppStateReady || isApplyingRemoteAppStateRef.current) return;
    const changedStates = Object.fromEntries(
      Object.entries(sharedAppState).filter(([key, value]) => (
        JSON.stringify(persistedSharedAppStateRef.current[key]) !== JSON.stringify(value)
      ))
    );
    if (Object.keys(changedStates).length === 0) {
      setAppStateSaveState("saved");
      return;
    }
    if (appStateSaveTimerRef.current) {
      window.clearTimeout(appStateSaveTimerRef.current);
    }
    setAppStateSaveState("saving");
    appStateSaveTimerRef.current = window.setTimeout(() => {
      appStateSaveTimerRef.current = null;
      getAppStatePersistenceController().save(changedStates);
    }, 500);
    return () => {
      if (appStateSaveTimerRef.current) {
        window.clearTimeout(appStateSaveTimerRef.current);
        appStateSaveTimerRef.current = null;
      }
    };
  }, [isAppStateReady, sharedAppState, session?.role]);

  useEffect(() => () => {
    appStatePersistenceControllerRef.current?.dispose();
    appStatePersistenceControllerRef.current = null;
  }, [session?.role]);

  useEffect(() => () => {
    if (problemBookSaveTimerRef.current) window.clearTimeout(problemBookSaveTimerRef.current);
  }, []);

  function persistProblemBooksNow(nextProblemBooks) {
    const normalizedBooks = normalizeProblemBooks(nextProblemBooks);
    if (problemBookSaveTimerRef.current) {
      window.clearTimeout(problemBookSaveTimerRef.current);
      problemBookSaveTimerRef.current = null;
    }
    const requestId = problemBookSaveRequestRef.current + 1;
    problemBookSaveRequestRef.current = requestId;
    setProblemBookSaveState("saving");
    return postAppState({ problemBooks: normalizedBooks })
      .then(() => {
        if (problemBookSaveRequestRef.current === requestId) setProblemBookSaveState("saved");
        return normalizedBooks;
      })
      .catch((error) => {
        console.error(error);
        if (problemBookSaveRequestRef.current === requestId) setProblemBookSaveState("failed");
        throw error;
      });
  }

  function scheduleProblemBooksSave(nextProblemBooks) {
    const normalizedBooks = normalizeProblemBooks(nextProblemBooks);
    if (problemBookSaveTimerRef.current) window.clearTimeout(problemBookSaveTimerRef.current);
    setProblemBookSaveState("saving");
    problemBookSaveTimerRef.current = window.setTimeout(() => {
      problemBookSaveTimerRef.current = null;
      persistProblemBooksNow(normalizedBooks).catch((error) => console.error(error));
    }, 500);
  }

  function handleSaveSpecialLectureGuides(nextGuides) {
    const normalizedGuides = normalizeSpecialLectureGuides(nextGuides);
    setSpecialLectureGuideSaveState("saving");
    return postAppState({ specialLectureGuides: normalizedGuides })
      .then(() => {
        setSpecialLectureGuides(normalizedGuides);
        setSpecialLectureGuideSaveState("saved");
        return normalizedGuides;
      })
      .catch((error) => {
        console.error(error);
        setSpecialLectureGuideSaveState("failed");
        throw error;
      });
  }

  async function handleSaveMonthlySettlementMonth(month) {
    const monthKey = String(month?.monthKey ?? "").slice(0, 7);
    if (!/^\d{4}-\d{2}$/.test(monthKey)) throw new Error("저장할 정산월을 확인해 주세요.");
    setMonthlySettlementSaveState("saving");
    try {
      const currentResponse = await fetch(apiUrl("/api/app-state"), { cache: "no-store" });
      const currentResult = await currentResponse.json();
      if (!currentResponse.ok || !currentResult.ok || currentResult.source !== "supabase") {
        throw new Error(currentResult.error || "Supabase의 현재 월별 정산 원천을 불러오지 못했습니다.");
      }
      const currentState = normalizeMonthlySettlementState(
        currentResult.states?.[monthlySettlementStateKey]
      );
      const nextState = createMonthlySettlementStateWithMonth(currentState, month);
      const expectedMonth = nextState.months[monthKey];
      const saveResult = await postAppState({ [monthlySettlementStateKey]: nextState });
      if (!saveResult.ok || saveResult.source !== "supabase") {
        throw new Error(saveResult.error || "월별 정산이 Supabase에 저장되지 않았습니다.");
      }

      const verifyResponse = await fetch(apiUrl("/api/app-state"), { cache: "no-store" });
      const verifyResult = await verifyResponse.json();
      if (!verifyResponse.ok || !verifyResult.ok || verifyResult.source !== "supabase") {
        throw new Error(verifyResult.error || "월별 정산 저장 결과를 다시 확인하지 못했습니다.");
      }
      const persistedState = normalizeMonthlySettlementState(
        verifyResult.states?.[monthlySettlementStateKey]
      );
      const persistedMonth = persistedState.months[monthKey];
      if (!persistedMonth) {
        throw new Error("Supabase 재조회에서 저장한 정산월을 찾지 못했습니다.");
      }
      if (
        getMonthlySettlementMonthSaveSnapshot(persistedMonth) !==
        getMonthlySettlementMonthSaveSnapshot(expectedMonth)
      ) {
        throw new Error("Supabase 재조회 값이 수정한 월별 정산과 다릅니다. 저장 완료로 처리하지 않았습니다.");
      }
      setMonthlyInstructorSettlements(persistedState);
      setMonthlySettlementSaveState("saved");
      return persistedMonth;
    } catch (error) {
      console.error(error);
      setMonthlySettlementSaveState("failed");
      throw error;
    }
  }

  async function handleSaveSpecialLectureSettlementState(draftState) {
    setSpecialLectureSettlementSaveState("saving");
    try {
      const currentResponse = await fetch(apiUrl("/api/app-state"), { cache: "no-store" });
      const currentResult = await currentResponse.json();
      if (!currentResponse.ok || !currentResult.ok || currentResult.source !== "supabase") {
        throw new Error(currentResult.error || "Supabase의 현재 특강 정산 원천을 불러오지 못했습니다.");
      }
      const currentState = normalizeSpecialLectureSettlementState(
        currentResult.states?.[specialLectureSettlementStateKey]
      );
      const nextState = createSpecialLectureSettlementStateWithDraft(currentState, draftState);
      const saveResult = await postAppState({ [specialLectureSettlementStateKey]: nextState });
      if (!saveResult.ok || saveResult.source !== "supabase") {
        throw new Error(saveResult.error || "특강 정산이 Supabase에 저장되지 않았습니다.");
      }

      const verifyResponse = await fetch(apiUrl("/api/app-state"), { cache: "no-store" });
      const verifyResult = await verifyResponse.json();
      if (!verifyResponse.ok || !verifyResult.ok || verifyResult.source !== "supabase") {
        throw new Error(verifyResult.error || "특강 정산 저장 결과를 다시 확인하지 못했습니다.");
      }
      const persistedState = normalizeSpecialLectureSettlementState(
        verifyResult.states?.[specialLectureSettlementStateKey]
      );
      if (
        getSpecialLectureSettlementSaveSnapshot(persistedState) !==
        getSpecialLectureSettlementSaveSnapshot(nextState)
      ) {
        throw new Error("Supabase 재조회 값이 수정한 특강 정산과 다릅니다. 저장 완료로 처리하지 않았습니다.");
      }
      setSpecialLectureInstructorSettlements(persistedState);
      setSpecialLectureSettlementSaveState("saved");
      return persistedState;
    } catch (error) {
      console.error(error);
      setSpecialLectureSettlementSaveState("failed");
      throw error;
    }
  }

  function handleUpdateSpecialLectureApplication(applicationId, updates = {}) {
    const existingApplication = specialLectureApplications.find((application) => application.applicationId === applicationId);
    if (!existingApplication) return Promise.reject(new Error("특강 신청자 원본을 찾지 못했습니다."));
    const nextApplication = normalizeSpecialLectureApplication({
      ...existingApplication,
      ...updates,
      updatedAt: new Date().toISOString()
    });
    setSpecialLectureApplications((current) =>
      normalizeSpecialLectureApplications(current.map((application) =>
        application.applicationId === applicationId ? nextApplication : application
      ))
    );
    return postJson("/api/special-lecture-applications", { application: nextApplication })
      .then((result) => {
        if (!result.ok) throw new Error(result.error || "특강 신청자 저장 실패");
        const savedApplication = normalizeSpecialLectureApplication(result.application ?? nextApplication);
        setSpecialLectureApplications((current) =>
          normalizeSpecialLectureApplications(current.map((application) =>
            application.applicationId === savedApplication.applicationId ? savedApplication : application
          ))
        );
        return savedApplication;
      })
      .catch((error) => {
        setSpecialLectureApplications((current) =>
          normalizeSpecialLectureApplications(current.map((application) =>
            application.applicationId === applicationId ? existingApplication : application
          ))
        );
        throw error;
      });
  }

  async function handleDeleteSpecialLectureApplication(applicationId) {
    const normalizedApplicationId = String(applicationId ?? "").trim();
    if (!normalizedApplicationId) throw new Error("삭제할 특강 신청 원본 ID가 필요합니다.");
    const response = await fetch(apiUrl(`/api/special-lecture-applications?id=${encodeURIComponent(normalizedApplicationId)}&confirm=true`), {
      method: "DELETE"
    });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || "특강 신청 원본 삭제 실패");
    if (result.source !== "supabase" || !result.deleted) {
      throw new Error("Supabase에서 특강 신청 원본 삭제를 확인하지 못했습니다.");
    }

    const verifyResponse = await fetch(apiUrl("/api/special-lecture-applications"), { cache: "no-store" });
    const verifyResult = await verifyResponse.json();
    if (!verifyResponse.ok || !verifyResult.ok || verifyResult.source !== "supabase") {
      throw new Error(verifyResult.error || "삭제 후 특강 신청 원본을 다시 확인하지 못했습니다.");
    }
    const persistedApplications = normalizeSpecialLectureApplications(verifyResult.applications ?? []);
    if (persistedApplications.some((application) => application.applicationId === normalizedApplicationId)) {
      throw new Error("Supabase 재조회에서 삭제한 신청 원본이 남아 있습니다.");
    }
    setSpecialLectureApplications(persistedApplications);
    return normalizedApplicationId;
  }

  async function handleCreateSpecialLectureStudent(application = {}) {
    if (!String(application.studentName ?? "").trim()) throw new Error("특강생 이름이 필요합니다.");
    const applicationId = String(application.applicationId || "").trim();
    if (!applicationId) throw new Error("특강 신청 원본 ID가 필요합니다.");
    const sourceNote = `특강 전용 등록 · Tally 신청 ${applicationId}`;
    const existingStudent = students.find((student) => student.specialNote === sourceNote);
    if (existingStudent) return existingStudent;
    const sourceKey = applicationId.replace(/[^a-zA-Z0-9_-]+/g, "_").slice(-48) || Date.now().toString(36);
    const student = createStudentFromFormValues({
      studentId: `student_special_lecture_${sourceKey}`,
      loginId: `sl-${sourceKey}`,
      name: String(application.studentName).trim(),
      schoolName: application.schoolName || "",
      grade: application.grade || "",
      studentPhone: application.studentPhone || "",
      parentPhone: application.parentPhone || "",
      defaultClassTemplateId: "",
      specialNote: sourceNote
    });
    const result = await postJson("/api/students", { student });
    if (!result.ok) throw new Error(result.error || "특강 전용 학생 등록 실패");
    const savedStudent = result.student ?? student;
    setStudents((current) => current.some((item) => item.studentId === savedStudent.studentId)
      ? current.map((item) => item.studentId === savedStudent.studentId ? savedStudent : item)
      : [...current, savedStudent]);
    return savedStudent;
  }

  async function handleReplaceSpecialLectureStudent(studentId, application = {}) {
    const normalizedStudentId = String(studentId ?? "").trim();
    if (!normalizedStudentId) throw new Error("Tally 정보를 반영할 기존 학생을 선택해 주세요.");
    const studentsBeforeResult = await getJsonWithTimeout(
      "/api/students",
      15000,
      "기존 학생 확인이 15초를 넘었습니다. 중복 등록하지 말고 다시 확인해 주세요."
    );
    if (studentsBeforeResult.source !== "supabase") {
      throw new Error("기존 학생을 Supabase에서 확인하지 못해 Tally 덮어쓰기를 중단했습니다.");
    }
    const existingStudent = (studentsBeforeResult.students ?? [])
      .find((student) => student.studentId === normalizedStudentId);
    if (!existingStudent) throw new Error("선택한 기존 학생을 Supabase에서 찾지 못했습니다.");
    if (!isActiveStudent(existingStudent)) {
      throw new Error("퇴원 학생에는 Tally 정보를 덮어쓸 수 없습니다. 퇴원 취소 또는 다른 학생을 선택해 주세요.");
    }
    const nextStudent = replaceTallyStudentValues(existingStudent, application, {
      fields: specialLectureTallyStudentFields
    });
    const replacementChanges = getTallyStudentReplacementChanges(existingStudent, application, {
      fields: specialLectureTallyStudentFields
    });
    if (replacementChanges.length === 0) return existingStudent;

    const saveResult = await postJsonWithTimeout(
      "/api/students",
      { student: nextStudent },
      15000,
      "Tally 학생정보 저장이 15초를 넘었습니다. 중복 실행하지 말고 상태를 다시 확인해 주세요."
    );
    if (saveResult.source !== "supabase") {
      throw new Error("Tally 학생정보가 Supabase가 아닌 임시 원천에 저장되어 완료할 수 없습니다.");
    }
    const studentsAfterResult = await getJsonWithTimeout(
      "/api/students",
      15000,
      "Tally 학생정보 저장 확인이 15초를 넘었습니다. 다시 실행하지 말고 잠시 뒤 새로고침해 주세요."
    );
    if (studentsAfterResult.source !== "supabase") {
      throw new Error("Tally 학생정보 저장 결과를 Supabase에서 다시 확인하지 못했습니다.");
    }
    const savedStudent = (studentsAfterResult.students ?? [])
      .find((student) => student.studentId === normalizedStudentId);
    if (!savedStudent) throw new Error("저장 후 Supabase 재조회에서 기존 학생을 찾지 못했습니다.");
    const verificationFields = [
      "studentId",
      "loginId",
      "pin",
      "name",
      "birthYear",
      "schoolName",
      "grade",
      "studentPhone",
      "parentPhone",
      "textbook",
      "specialNote",
      "defaultClassTemplateId",
      "scheduleOverride",
      "status"
    ];
    const mismatchedFields = verificationFields.filter((field) =>
      String(savedStudent[field] ?? "") !== String(nextStudent[field] ?? "")
    );
    if (mismatchedFields.length > 0) {
      throw new Error(`Tally 학생정보 재조회 값이 다릅니다: ${mismatchedFields.join(", ")}`);
    }
    setStudents(studentsAfterResult.students ?? []);
    return savedStudent;
  }

  async function readPersistedSpecialLectureEnrollments() {
    const response = await fetch(apiUrl("/api/special-lecture-enrollments"), { cache: "no-store" });
    const result = await response.json();
    if (!response.ok || !result.ok) {
      throw new Error(result.error || "특강 회차 저장 결과를 다시 확인하지 못했습니다.");
    }
    if (result.source !== "supabase") {
      throw new Error("특강 회차가 Supabase가 아닌 임시 원천에 저장되어 완료할 수 없습니다.");
    }
    return normalizeSpecialLectureEnrollments(result.enrollments ?? []);
  }

  async function handleSaveSpecialLectureEnrollment(enrollment) {
    const previousEnrollments = specialLectureEnrollments;
    const nextEnrollment = normalizeSpecialLectureEnrollment({
      ...enrollment,
      updatedAt: new Date().toISOString()
    });
    setSpecialLectureEnrollments((current) =>
      normalizeSpecialLectureEnrollments(upsertById(current, nextEnrollment, "enrollmentId"))
    );
    let postSucceeded = false;
    try {
      const result = await postJson("/api/special-lecture-enrollments", { enrollment: nextEnrollment });
      if (!result.ok) throw new Error(result.error || "특강 수강명단 저장 실패");
      if (result.source !== "supabase") {
        throw new Error("특강 회차가 Supabase가 아닌 임시 원천에 저장되어 완료할 수 없습니다.");
      }
      postSucceeded = true;
      const persistedEnrollments = await readPersistedSpecialLectureEnrollments();
      const persistedEnrollment = persistedEnrollments.find((item) => item.enrollmentId === nextEnrollment.enrollmentId);
      if (!persistedEnrollment) {
        throw new Error("Supabase 재조회에서 저장한 학생의 회차 계획을 찾지 못했습니다.");
      }
      if (getSpecialLectureEnrollmentSaveSnapshot(persistedEnrollment) !== getSpecialLectureEnrollmentSaveSnapshot(nextEnrollment)) {
        throw new Error("Supabase 재조회 값이 수정한 회차 계획과 다릅니다. 저장 완료로 처리하지 않았습니다.");
      }
      setSpecialLectureEnrollments(persistedEnrollments);
      return persistedEnrollment;
    } catch (error) {
      if (!postSucceeded) {
        setSpecialLectureEnrollments(previousEnrollments);
      } else if (error && typeof error === "object") {
        error.specialLectureEnrollmentPostSucceeded = true;
      }
      throw error;
    }
  }

  function handleSaveSpecialLectureEnrollments(enrollments) {
    const previousEnrollments = specialLectureEnrollments;
    const nextEnrollments = normalizeSpecialLectureEnrollments(enrollments.map((enrollment) => ({
      ...enrollment,
      updatedAt: new Date().toISOString()
    })));
    setSpecialLectureEnrollments((current) => {
      let merged = current;
      nextEnrollments.forEach((enrollment) => {
        merged = upsertById(merged, enrollment, "enrollmentId");
      });
      return normalizeSpecialLectureEnrollments(merged);
    });
    return postJson("/api/special-lecture-enrollments/bulk", { enrollments: nextEnrollments })
      .then((result) => {
        if (!result.ok) throw new Error(result.error || "특강 수강명단 저장 실패");
        const savedEnrollments = normalizeSpecialLectureEnrollments(result.enrollments ?? nextEnrollments);
        setSpecialLectureEnrollments((current) => {
          let merged = current;
          savedEnrollments.forEach((enrollment) => {
            merged = upsertById(merged, enrollment, "enrollmentId");
          });
          return normalizeSpecialLectureEnrollments(merged);
        });
        return savedEnrollments;
      })
      .catch((error) => {
        setSpecialLectureEnrollments(previousEnrollments);
        throw error;
      });
  }

  function openSpecialLectureLesson(lesson) {
    if (!lesson?.lessonId) return;
    setActiveView("lessons");
    setSelectedDate(lesson.date);
    setSelectedLessonId(lesson.lessonId);
    setIsLessonJournalOpen(true);
  }

  function getSpecialLectureLessonSaveSnapshot(lesson = {}) {
    const schedules = (Array.isArray(lesson.specialLectureStudentSchedules) ? lesson.specialLectureStudentSchedules : [])
      .map((schedule) => ({
        endTime: schedule.endTime || "",
        overrideReason: schedule.overrideReason || "",
        scheduleType: schedule.scheduleType === "adjusted" ? "adjusted" : "official",
        startTime: schedule.startTime || "",
        studentId: schedule.studentId || ""
      }))
      .sort((left, right) => left.studentId.localeCompare(right.studentId));
    return JSON.stringify({
      date: lesson.date || "",
      endTime: lesson.endTime || "",
      lessonId: lesson.lessonId || "",
      specialLectureGuideId: lesson.specialLectureGuideId || "",
      specialLectureSessionId: lesson.specialLectureSessionId || "",
      specialLectureStudentSchedules: schedules,
      startTime: lesson.startTime || "",
      studentIds: [...new Set(lesson.studentIds ?? [])].sort()
    });
  }

  async function handleCreateSpecialLectureLessons(lessonDrafts = [], { openFirstLesson = true } = {}) {
    const normalizedLessons = lessonDrafts
      .filter((lesson) => lesson?.lessonId && lesson?.date)
      .map((lesson) => ({
        ...lesson,
        color: getStandardLessonColor(lesson),
        status: lesson.status ?? "scheduled"
      }));
    if (!normalizedLessons.length) return Promise.reject(new Error("생성할 특강 회차가 없습니다."));
    const result = await postJson("/api/lessons/bulk", { lessons: normalizedLessons });
    if (!result.ok) throw new Error(result.error || "특강 수업일지 생성 실패");
    const verificationResponse = await fetch(apiUrl(`/api/lessons?verify=special-lecture-${Date.now()}`), { cache: "no-store" });
    const verification = await verificationResponse.json();
    if (!verificationResponse.ok || !verification.ok || verification.source !== "supabase") {
      throw new Error(verification.error || "특강 수업 저장 후 Supabase 재조회에 실패했습니다. 저장됐을 수 있으므로 다시 누르기 전에 확인해 주세요.");
    }
    const persistedLessons = Array.isArray(verification.lessons) ? verification.lessons : [];
    const verifiedLessons = normalizedLessons.map((expectedLesson) => {
      const persistedLesson = persistedLessons.find((lesson) => lesson.lessonId === expectedLesson.lessonId);
      if (!persistedLesson || getSpecialLectureLessonSaveSnapshot(persistedLesson) !== getSpecialLectureLessonSaveSnapshot(expectedLesson)) {
        throw new Error(`특강 수업 저장 후 Supabase 값이 일치하지 않습니다: ${expectedLesson.lessonId}`);
      }
      return persistedLesson;
    });
    setLessons(filterActiveLessons(persistedLessons));
    const firstLesson = [...verifiedLessons].sort(sortByTime)[0];
    if (openFirstLesson && firstLesson?.lessonId) openSpecialLectureLesson(firstLesson);
    return verifiedLessons;
  }

  async function handleSyncSpecialLectureStudentSchedules(syncRequests = []) {
    const normalizedRequests = syncRequests
      .filter((request) => request?.lessonId && request?.studentId)
      .map((request) => ({
        lessonId: request.lessonId,
        studentId: request.studentId,
        expectedSchedule: request.expectedSchedule ?? null
      }));
    if (!normalizedRequests.length) return [];
    for (const request of normalizedRequests) {
      const result = await postJson("/api/lessons/special-lecture-student-schedule", request);
      if (result.source !== "supabase") {
        throw new Error("특강 학생별 시간이 Supabase가 아닌 임시 원천에 저장되어 완료할 수 없습니다.");
      }
      if (
        !result.lesson ||
        !isSpecialLectureStudentScheduleSynced({
          lesson: result.lesson,
          studentId: request.studentId,
          expectedSchedule: request.expectedSchedule
        })
      ) {
        throw new Error(`특강 학생별 시간 저장 응답이 계획과 일치하지 않습니다: ${request.lessonId}`);
      }
    }
    const verificationResponse = await fetch(
      apiUrl(`/api/lessons?verify=special-lecture-student-${Date.now()}`),
      { cache: "no-store" }
    );
    const verification = await verificationResponse.json();
    if (!verificationResponse.ok || !verification.ok || verification.source !== "supabase") {
      throw new Error(verification.error || "특강 학생별 시간 저장 후 Supabase 재조회에 실패했습니다.");
    }
    const persistedLessons = Array.isArray(verification.lessons) ? verification.lessons : [];
    const verifiedLessons = normalizedRequests.map((request) => {
      const persistedLesson = persistedLessons.find((lesson) => lesson.lessonId === request.lessonId);
      if (
        !persistedLesson ||
        !isSpecialLectureStudentScheduleSynced({
          lesson: persistedLesson,
          studentId: request.studentId,
          expectedSchedule: request.expectedSchedule
        })
      ) {
        throw new Error(`특강 학생별 시간 저장 후 Supabase 값이 계획과 일치하지 않습니다: ${request.lessonId}`);
      }
      return persistedLesson;
    });
    setLessons(filterActiveLessons(persistedLessons));
    return verifiedLessons;
  }

  async function handleAddProblemBookFolder(folderName, testKind, subject) {
    const nextBooks = normalizeProblemBooks([createProblemBookFolder(folderName, testKind, subject), ...problemBooks]);
    setProblemBooks(nextBooks);
    await persistProblemBooksNow(nextBooks);
  }

  async function handleAddProblemBookFromFile(fileName, testKind, subject) {
    const nextBooks = normalizeProblemBooks([createProblemBookFromFile(fileName, testKind, subject), ...problemBooks]);
    setProblemBooks(nextBooks);
    await persistProblemBooksNow(nextBooks);
  }

  function handleDeleteProblemBook(problemBookId) {
    const nextBooks = normalizeProblemBooks(problemBooks.filter((book) => book.problemBookId !== problemBookId));
    setProblemBooks(nextBooks);
    persistProblemBooksNow(nextBooks).catch((error) => console.error(error));
  }

  function handleUpdateProblemBook(problemBookId, field, value) {
    const nextBooks = normalizeProblemBooks(
      problemBooks.map((book) => (book.problemBookId === problemBookId ? { ...book, [field]: value } : book))
    );
    setProblemBooks(nextBooks);
    scheduleProblemBooksSave(nextBooks);
  }

  function handleUpdateProblemMeta(problemBookId, problemId, field, value) {
    const nextBooks = normalizeProblemBooks(
      problemBooks.map((book) =>
        book.problemBookId === problemBookId
          ? {
              ...book,
              problems: (book.problems ?? []).map((problem) =>
                problem.problemId === problemId ? { ...problem, [field]: value } : problem
              )
            }
          : book
      )
    );
    setProblemBooks(nextBooks);
    scheduleProblemBooksSave(nextBooks);
  }

  useEffect(() => {
    setProblemBooks((current) => {
      const normalized = normalizeProblemBooks(current);
      return JSON.stringify(normalized) === JSON.stringify(current) ? current : normalized;
    });
  }, [setProblemBooks]);

  useEffect(() => {
    setDeletedLessonBundles((current) => pruneExpiredLessonDeletes(current));
    setLessons((currentLessons) => filterActiveLessons(currentLessons));
  }, [setDeletedLessonBundles, setLessons]);

  useEffect(() => {
    setRecords((currentRecords) => filterRecordsForLessons(currentRecords, lessons));
    setHomeworks((currentHomeworks) => filterHomeworksForLessons(currentHomeworks, lessons));
  }, [lessons, setHomeworks, setRecords]);

  const generatedLessonPlanRows = useMemo(
    () => selectGeneratedLessonPlanRows(examPrepRows, currentExamCycle),
    [examPrepRows]
  );

  useEffect(() => {
    if (session?.role !== "teacher" || !isAppStateReady) return;
    setExamPrepRows((current) => {
      const repairedRows = repairExamPrepRowsFromPersistedPreExamLessons(current, lessons);
      const changedRows =
        selectChangedGeneratedLessonPlanRows(
          repairedRows,
          current
        );
      if (changedRows.length > 0) {
        persistExamPrepRows(changedRows);
      }
      return changedRows.length > 0 ? repairedRows : current;
    });
  }, [isAppStateReady, lessons, session?.role, setExamPrepRows]);

  const generatedLessonPlan = useMemo(
    () =>
      buildGeneratedLessonPlan({
        rows: generatedLessonPlanRows,
        lessons,
        students,
        controls: generatedLessonControls
      }, {
        normalizeGeneratedLessonControls,
        buildExamCalendarEvents,
        createPreExamLessonFromSchoolEvent,
        createPreExamGeneratedKey,
        buildExamPrepLessonCandidates,
        getGeneratedLessonIdentityKeys,
        areGeneratedLessonPersistedFieldsEqual
      }),
    [generatedLessonControls, generatedLessonPlanRows, lessons, students]
  );

  function updateGeneratedLessonControls(updater) {
    setGeneratedLessonControls((current) => normalizeGeneratedLessonControls(updater(normalizeGeneratedLessonControls(current))));
  }

  function markGeneratedLessonManualOverride(lesson) {
    const generatedKey = getGeneratedLessonKey(lesson);
    if (!generatedKey) return;
    updateGeneratedLessonControls((current) =>
      addGeneratedLessonManualOverrideKey(
        current,
        generatedKey
      )
    );
  }

  function suppressGeneratedLessonKey(generatedKey) {
    if (!generatedKey) return;
    updateGeneratedLessonControls((current) =>
      addGeneratedLessonSuppressedKey(current, generatedKey)
    );
  }

  function unsuppressGeneratedLessonKey(generatedKey) {
    if (!generatedKey) return;
    updateGeneratedLessonControls((current) =>
      removeGeneratedLessonSuppressedKey(
        current,
        generatedKey
      )
    );
  }

  function clearGeneratedLessonManualOverride(generatedKey) {
    if (!generatedKey) return;
    updateGeneratedLessonControls((current) =>
      removeGeneratedLessonManualOverrideKey(
        current,
        generatedKey
      )
    );
  }

  function mergeGeneratedLessonsIntoState(lessonsToSave) {
    setLessons((current) => mergeGeneratedLessonLists(current, lessonsToSave));
  }

  function saveGeneratedLessons(lessonsToSave) {
    if (lessonsToSave.length === 0) return;
    mergeGeneratedLessonsIntoState(lessonsToSave);
    setGeneratedLessonSaveStatus(
      createGeneratedLessonSavingStatus(lessonsToSave)
    );
    postJsonWithTimeout(
      "/api/lessons/bulk",
      { lessons: lessonsToSave },
      20000,
      "자동 수업 저장이 20초를 넘었습니다. 잠시 뒤 다시 시도해 주세요."
    )
      .then((result) => {
        if (Array.isArray(result.lessons) && result.lessons.length > 0) {
          mergeGeneratedLessonsIntoState(result.lessons);
        }
        setGeneratedLessonSaveStatus(
          createGeneratedLessonSavedStatus(lessonsToSave)
        );
      })
      .catch((error) => {
        console.error(error);
        setGeneratedLessonSaveStatus(
          createGeneratedLessonFailedStatus(lessonsToSave, error.message)
        );
      });
  }

  function saveGeneratedLessonsFromPlan(planItems) {
    const lessonsToSave = selectGeneratedLessonsToSave(planItems);
    saveGeneratedLessons(lessonsToSave);
  }

  function handleApplyGeneratedLessons() {
    saveGeneratedLessonsFromPlan(generatedLessonPlan);
  }

  function handleApplyGeneratedLesson(generatedKey) {
    saveGeneratedLessonsFromPlan(
      selectGeneratedLessonPlanItemsByKey(
        generatedLessonPlan,
        generatedKey
      )
    );
  }

  function handleRetryGeneratedLessonSave() {
    if (generatedLessonSaveStatus.lessons?.length) {
      saveGeneratedLessons(generatedLessonSaveStatus.lessons);
      return;
    }
    saveGeneratedLessonsFromPlan(generatedLessonPlan);
  }

  useEffect(() => {
    if (session?.role !== "teacher" || !isAppStateReady || attendanceOnlyMode) return;
    const preExamLessonsToSync =
      selectGeneratedPreExamLessonsToSync(generatedLessonPlan);
    if (preExamLessonsToSync.length === 0) return;
    saveGeneratedLessonsFromPlan(preExamLessonsToSync);
  }, [attendanceOnlyMode, generatedLessonPlan, isAppStateReady, session?.role]);

  async function refreshNotificationJobs({ date = "", lessonId = "", scope = "active", silent = false } = {}) {
    return getNotificationJobsRefreshController().refresh({
      date,
      lessonId,
      scope,
      silent
    });
  }

  function mergeNotificationJobsIntoState(nextJobs = []) {
    const validJobs = selectValidNotificationJobs(nextJobs);
    if (!validJobs.length) return;
    setNotificationJobs((current) => mergeNotificationJobLists(current, validJobs));
  }

  function getNotificationJobsRefreshController() {
    if (!notificationJobsRefreshControllerRef.current) {
      notificationJobsRefreshControllerRef.current = createNotificationJobsRefreshController({
        onError: (error) => {
          console.info("academy-os notification jobs skipped:", error.message);
        },
        onJobs: ({ notificationJobs: nextJobs, replace }) => {
          if (replace) {
            setNotificationJobs(nextJobs);
          } else {
            mergeNotificationJobsIntoState(nextJobs);
          }
        },
        onStatus: setNotificationJobsStatus,
        request: getJsonWithTimeout
      });
    }
    return notificationJobsRefreshControllerRef.current;
  }

  function applyNotificationJobsReconcileResult(result) {
    mergeNotificationJobsIntoState(result.notificationJobs ?? []);
    if (Array.isArray(result.records) && result.records.length) {
      const nextRecords = mergeNotificationJobReconcileRecords({
        currentRecords: recordsRef.current,
        records: result.records,
        upsertRecord: upsertLessonStudentRecord
      });
      recordsRef.current = nextRecords;
      setRecords(nextRecords);
      writeStorageValue(window.localStorage, storageKeys.records, JSON.stringify(nextRecords));
      const savedStates = createNotificationJobReconcileSavedStates(result.records);
      if (Object.keys(savedStates).length) {
        setSaveStates((currentStates) => ({ ...currentStates, ...savedStates }));
      }
    }
  }

  function getNotificationJobsReconcileController() {
    if (!notificationJobsReconcileControllerRef.current) {
      notificationJobsReconcileControllerRef.current = createNotificationJobsReconcileController({
        onResult: applyNotificationJobsReconcileResult,
        request: postJsonWithTimeout
      });
    }
    return notificationJobsReconcileControllerRef.current;
  }

  async function handleReconcileSolapiNotificationResults({ lessonId = "", date = "", notificationJobIds = [], scheduledFrom = "", scheduledTo = "" } = {}) {
    return getNotificationJobsReconcileController().reconcile({
      date,
      lessonId,
      notificationJobIds,
      scheduledFrom,
      scheduledTo
    });
  }

  async function handleCancelNotificationJob(notificationJob, reason = "선생님 예약 취소") {
    return cancelNotificationJobRequest({
      notificationJob,
      reason,
      onNotificationJob: upsertNotificationJobState,
      request: postJson
    });
  }

  useEffect(() => {
    let isMounted = true;

    async function loadIntegrationStatus() {
      try {
        const response = await fetch(apiUrl("/api/integrations/status"));
        const result = await response.json();
        if (isMounted && result.ok) {
          setIntegrationStatus(result.result);
        }
      } catch (error) {
        if (isMounted) setIntegrationStatus(null);
        console.info("academy-os integration status skipped:", error.message);
      }
    }

    loadIntegrationStatus();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (session?.role !== "teacher" || !isAppStateReady || attendanceOnlyMode) return;
    refreshNotificationJobs({ scope: "active" });
    return () => getNotificationJobsRefreshController().invalidate("active");
  }, [attendanceOnlyMode, isAppStateReady, session?.role]);

  useEffect(() => {
    if (session?.role !== "teacher" || !isAppStateReady || activeView !== "notifications") return;
    refreshNotificationJobs({ scope: "history" });
    return () => getNotificationJobsRefreshController().invalidate("history");
  }, [activeView, isAppStateReady, session?.role]);

  useEffect(() => {
    if (
      session?.role !== "teacher" ||
      !isAppStateReady ||
      !isLessonJournalOpen ||
      !selectedLessonId
    ) return;
    refreshNotificationJobs({ lessonId: selectedLessonId, scope: "lesson" });
    return () => getNotificationJobsRefreshController().invalidate("lesson");
  }, [isAppStateReady, isLessonJournalOpen, selectedLessonId, session?.role]);

  useEffect(() => {
    if (
      session?.role !== "teacher" ||
      !isAppStateReady ||
      (!isLessonJournalOpen && activeView !== "notifications")
    ) return undefined;

    function refreshVisibleNotificationJobs() {
      if (typeof document !== "undefined" && document.visibilityState === "hidden") return;
      if (isLessonJournalOpen && selectedLessonId) {
        refreshNotificationJobs({ lessonId: selectedLessonId, scope: "lesson", silent: true });
        return;
      }
      if (activeView === "notifications") {
        refreshNotificationJobs({ scope: "history", silent: true });
      }
    }

    const intervalId = window.setInterval(refreshVisibleNotificationJobs, 60_000);
    window.addEventListener("focus", refreshVisibleNotificationJobs);
    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener("focus", refreshVisibleNotificationJobs);
      getNotificationJobsRefreshController().invalidate(
        isLessonJournalOpen && selectedLessonId ? "lesson" : "history"
      );
    };
  }, [activeView, isAppStateReady, isLessonJournalOpen, selectedLessonId, session?.role]);

  useEffect(() => () => {
    notificationJobsRefreshControllerRef.current?.dispose();
    notificationJobsReconcileControllerRef.current?.dispose();
  }, []);

  useEffect(() => {
    recordsRef.current = records;
  }, [records]);

  useEffect(() => {
    saveStatesRef.current = saveStates;
  }, [saveStates]);

  useEffect(() => {
    homeworksRef.current = homeworks;
  }, [homeworks]);

  useEffect(() => () => {
    autoSaveTimersRef.current.forEach((timerId) => clearTimeout(timerId));
    autoSaveTimersRef.current.clear();
  }, []);

  useEffect(() => {
    setExamPrepRows((current) => {
      const normalizedRows = normalizeExamPrepRows(current);
      const changedRows = normalizedRows.filter((row, index) => JSON.stringify(row) !== JSON.stringify(current[index]));
      if (changedRows.length > 0) {
        persistExamPrepRows(changedRows);
      }
      return changedRows.length > 0 ? normalizedRows : current;
    });
  }, [setExamPrepRows]);

  useEffect(() => {
    setStudents((currentStudents) => {
      let hasChanged = false;
      const nextStudents = currentStudents.map((student) => {
        const textbook = getTextbookFromExamPrep(student);
        const normalizedGrade = normalizeGradeLabel(student.grade);
        if ((textbook && student.textbook !== textbook) || (normalizedGrade && student.grade !== normalizedGrade)) {
          hasChanged = true;
          return { ...student, grade: normalizedGrade || student.grade, textbook };
        }
        return student;
      });
      return hasChanged ? nextStudents : currentStudents;
    });
  }, [setStudents]);

  useEffect(() => {
    setExamPrepRows((current) => {
      const nextRowsToAdd = buildExamPrepRowsFromStudents(students, currentExamCycle, "template_mwf_7_10", current);
      const nextRows = mergeById(current, nextRowsToAdd, "examPrepId");
      const addedRows = nextRows.filter((row) => !current.some((item) => item.examPrepId === row.examPrepId));
      if (addedRows.length > 0) {
        persistExamPrepRows(addedRows);
      }
      return nextRows;
    });
  }, [setExamPrepRows, students]);

  useEffect(() => {
    setExamPrepRows((current) => {
      let hasChanged = false;
      const nextRows = current.map((row) => {
        if (row.examPeriod || !row.examCycle) return row;
        hasChanged = true;
        return { ...row, examPeriod: getDefaultExamPeriodText(row.examCycle) };
      });
      if (hasChanged) {
        persistExamPrepRows(nextRows.filter((row, index) => row !== current[index]));
      }
      return hasChanged ? nextRows : current;
    });
  }, [setExamPrepRows]);

  const autoGeneratedDisplayLessons = useMemo(
    () => selectAutoGeneratedDisplayLessons(generatedLessonPlan),
    [generatedLessonPlan]
  );
  const calendarLessons = useMemo(
    () => mergeGeneratedCalendarLessons({
      autoGeneratedDisplayLessons,
      getIdentityKeys: getGeneratedLessonIdentityKeys,
      isLegacyLesson: isLegacyExamPrepLesson,
      lessons
    }),
    [autoGeneratedDisplayLessons, lessons]
  );
  const monthlyRegularLessonOpenPlan = useMemo(
    () => buildMonthlyRegularLessonOpenPlan({
      lessons,
      monthKey: selectedDate.slice(0, 7),
      students,
      templates: classTemplates
    }),
    [classTemplates, lessons, selectedDate, students]
  );
  const isMonthlyRegularLessonOpened = useMemo(() => {
    const targetMonth = selectedDate.slice(0, 7);
    const openedTemplateIds = new Set(
      lessons
        .filter((lesson) => lesson.lessonType === "class")
        .filter((lesson) => lesson.date?.startsWith(`${targetMonth}-`))
        .filter((lesson) => !["canceled", "deleted"].includes(lesson.status ?? "scheduled"))
        .map((lesson) => lesson.classTemplateId)
        .filter(Boolean)
    );
    const expectedTemplateIds = monthlyRegularLessonOpenPlan.rows.map((row) => row.classTemplateId).filter(Boolean);
    return expectedTemplateIds.length > 0 && expectedTemplateIds.every((templateId) => openedTemplateIds.has(templateId));
  }, [lessons, monthlyRegularLessonOpenPlan.rows, selectedDate]);
  const lessonsForDate = useMemo(
    () => calendarLessons.filter((lesson) => lesson.date === selectedDate).sort(sortByTime),
    [calendarLessons, selectedDate]
  );
  const supplementAttention = useMemo(
    () => getSupplementAttentionSummary({ homeworks, lessons, records, students, tasks: makeupTasks }),
    [homeworks, lessons, makeupTasks, records, students]
  );

  const selectedLesson =
    calendarLessons.find((lesson) => lesson.lessonId === selectedLessonId) ?? lessonsForDate[0] ?? null;

  useEffect(() => {
    if (!selectedLessonId && lessonsForDate[0]) {
      setSelectedLessonId(lessonsForDate[0].lessonId);
    }
  }, [lessonsForDate, selectedLessonId]);

  const selectedRecords = selectedLesson
    ? records.filter((record) => record.lessonId === selectedLesson.lessonId)
    : [];

  const selectedStudents = selectedLesson
    ? getLessonJournalStudents(selectedLesson, students)
    : [];

  useEffect(() => {
    if (!isAppStateReady || session?.role !== "teacher") return;
    const withdrawalBoundaries = students
      .filter(isWithdrawnStudent)
      .map((student) => ({
        studentId: student.studentId,
        fromDate: getWithdrawalFutureLessonStartDate(getWithdrawalDateKey(student.withdrawnAt))
      }))
      .filter(({ studentId, fromDate }) => studentId && fromDate);
    if (withdrawalBoundaries.length === 0) return;
    removeWithdrawnStudentsFromFutureLessons(withdrawalBoundaries);
  }, [isAppStateReady, lessons, session?.role, students]);

  useEffect(() => {
    if (!isLessonJournalOpen || !selectedLesson?.lessonId || !isAppStateReady || session?.role !== "teacher") return;
    const currentPlan = lessonNotificationPlans[selectedLesson.lessonId];
    if (!currentPlan?.autoRebuildEnabled) return;
    const nextPlans = {
      ...lessonNotificationPlans,
      [selectedLesson.lessonId]: {
        ...currentPlan,
        autoRebuildEnabled: false,
        updatedAt: new Date().toISOString()
      }
    };
    setLessonNotificationPlans(nextPlans);
    persistLessonNotificationPlans(nextPlans);
  }, [isAppStateReady, isLessonJournalOpen, lessonNotificationPlans, selectedLesson, session?.role]);

  const reportLesson = lessons.find((lesson) => lesson.lessonId === selectedReportLessonId) ?? lessons[0];
  const reportRecords = reportLesson
    ? records.filter((record) => record.lessonId === reportLesson.lessonId)
    : [];
  const pendingDeleteLesson = lessons.find((lesson) => lesson.lessonId === lessonDeleteModalId) ?? null;
  useEffect(() => {
    legacySensitiveStorageKeys.forEach((key) => removeStorageValue(window.localStorage, key));
  }, []);

  useEffect(() => {
    if (!attendanceOnlyMode) return undefined;
    document.body.classList.add("attendanceOnlyBody");
    return () => document.body.classList.remove("attendanceOnlyBody");
  }, [attendanceOnlyMode]);

  useAttendanceRecordSync({
    enabled:
      isAppStateReady &&
      (attendanceOnlyMode || (session?.role === "teacher" && activeView === "lessons")),
    recordsRef,
    request: getJsonWithTimeout,
    saveStatesRef,
    setRecords,
    setStatus: setAttendanceSyncStatus,
    syncDate: attendanceOnlyMode ? getKoreaDateString() : selectedDate
  });

  async function handleAttendancePinPreview(phoneLast4, options = {}) {
    return previewKioskAttendanceAction({
      attendanceOnlyMode,
      currentDate: getKoreaDateString(),
      lateGraceMinutes: attendanceSettings.lateGraceMinutes,
      loadedDate: attendanceLoadedDateRef.current,
      onDateChanged: requestAttendanceReload,
      options,
      phoneLast4,
      request: previewAttendanceRequest
    });
  }

  async function handleAttendancePinCheck(phoneLast4, options = {}) {
    return checkKioskAttendanceAction({
      attendanceOnlyMode,
      currentDate: getKoreaDateString(),
      lateGraceMinutes: attendanceSettings.lateGraceMinutes,
      loadedDate: attendanceLoadedDateRef.current,
      onAttendanceEvent: (notificationLog) => {
        setNotificationLogs((current) => [notificationLog, ...current]);
      },
      onDateChanged: requestAttendanceReload,
      onLesson: (lesson) => {
        setLessons((current) => upsertById(current, lesson, "lessonId"));
      },
      onRecord: (record) => {
        const nextRecords = upsertLessonStudentRecord(recordsRef.current, record);
        recordsRef.current = nextRecords;
        setRecords(nextRecords);
      },
      options,
      phoneLast4,
      request: checkAttendanceRequest
    });
  }

  const sessionSurface = selectAppSessionSurface({
    attendanceOnlyMode,
    specialLectureOnlyMode,
    session
  });

  if (sessionSurface === "attendance") {
    return (
      <AttendanceKiosk
        isStandalone
        formatLessonDisplayName={formatLessonDisplayName}
        lessons={lessons}
        isLoading={!isAppStateReady}
        records={records}
        students={students}
        onAttendanceCheck={handleAttendancePinCheck}
        onAttendancePreview={handleAttendancePinPreview}
      />
    );
  }

  if (sessionSurface === "specialLecture") {
    return <SpecialLecturePublicPage />;
  }

  if (sessionSurface === "login") {
    return (
      <RoleLoginScreen
        academyBrandName={academyBrandName}
        onLogin={handleLogin}
      />
    );
  }

  if (sessionSurface === "student") {
    return (
      <StudentPortalV2
        examPrepRows={examPrepRows}
        examPostSaveStates={studentExamPostSaveStates}
        examPostSubmissions={examPostSubmissions}
        examPostTargetStudentIds={examPostTargetStudentIds}
        homeworks={homeworks}
        homeworkSaveStates={studentHomeworkSaveStates}
        lessons={lessons}
        materials={resourceMaterials}
        makeupTasks={makeupTasks}
        records={records}
        reportSnapshots={reportSnapshots}
        schoolEvents={schoolEvents}
        sessionStudentId={session.studentId}
        questionSaveState={studentQuestionSaveState}
        studentQuestions={studentQuestions}
        students={students.filter((student) => student.studentId === session.studentId)}
        onLogout={handleLogout}
        onStudentAddQuestion={handleStudentAddQuestion}
        onStudentCheckHomework={handleStudentCheckHomework}
        onStudentDeleteQuestion={handleStudentDeleteQuestion}
        onOpenExamPostFile={(file) => handleOpenExamPostFile(session.sessionToken, file)}
        onSubmitExamPostSubmission={handleSubmitExamPostSubmission}
        onStudentUpdateQuestion={handleStudentUpdateQuestion}
      />
    );
  }

  if (sessionSurface === "parent") {
    return (
      <ParentPortal
        homeworks={homeworks}
        academyName={academyBrandName}
        filterMaterials={filterVisibleMaterials}
        getHomeworkStatusLabel={getHomeworkStatusLabel}
        getHomeworkStatusTone={getHomeworkStatusTone}
        lessons={lessons}
        isHomeworkOverdue={isHomeworkOverdue}
        materials={resourceMaterials}
        records={records}
        reportSnapshots={reportSnapshots}
        referenceDate={today}
        sessionStudentId={session.studentId}
        students={students}
        onLogout={handleLogout}
      />
    );
  }

  function handleDateSelect(date) {
    const nextLessons = calendarLessons.filter((lesson) => lesson.date === date).sort(sortByTime);
    setSelectedDate(date);
    setSelectedLessonId(nextLessons[0]?.lessonId ?? "");
    setIsLessonJournalOpen(false);
  }

  function handleCalendarMove(dayOffset) {
    const nextDate = addDaysInKorea(selectedDate, dayOffset);
    handleDateSelect(nextDate);
  }

  function handleCalendarMonthShift(monthOffset) {
    handleDateSelect(shiftLessonCalendarMonth(selectedDate, monthOffset));
  }

  function handleCopySelectedLesson() {
    const lesson = lessons.find((item) => item.lessonId === selectedLessonId);
    if (!lesson) return;
    setLessonClipboard({ ...lesson });
  }

  function handlePasteLessonToSelectedDate() {
    if (!lessonClipboard) return;
    const pastedLesson = {
      ...lessonClipboard,
      lessonId: createLessonId(selectedDate, lessonClipboard.className),
      date: selectedDate,
      dayOfWeek: getDayKey(selectedDate),
      status: "scheduled"
    };
    setLessonUndoStack((current) => [{ type: "create", lesson: pastedLesson }, ...current].slice(0, 20));
    setLessons((current) => [...current, pastedLesson]);
    const linkedPreviousHomeworks = createPreviousHomeworksFromPriorLesson(homeworks, lessons, pastedLesson);
    if (linkedPreviousHomeworks.length > 0) {
      setHomeworks((current) => [...linkedPreviousHomeworks, ...current]);
      postJson("/api/homeworks/bulk", { homeworks: linkedPreviousHomeworks }).catch((error) => console.error(error));
    }
    setSelectedLessonId(pastedLesson.lessonId);
    postJson("/api/lessons", { lesson: pastedLesson }).catch((error) => console.error(error));
  }

  function handleUndoLessonAction() {
    const [latestAction, ...restActions] = lessonUndoStack;
    if (!latestAction) return;
    if (latestAction.type === "create") {
      setLessons((current) => current.filter((lesson) => lesson.lessonId !== latestAction.lesson.lessonId));
      setSelectedLessonId("");
    }
    if (latestAction.type === "delete") {
      const bundle = latestAction.bundle ?? { lesson: latestAction.lesson, records: [], homeworks: [] };
      if (!bundle.lesson) return;
      const restoredLesson = {
        ...bundle.lesson,
        status: ["canceled", "deleted"].includes(bundle.lesson.status) ? "scheduled" : (bundle.lesson.status ?? "scheduled")
      };
      setLessons((current) => upsertById(current, restoredLesson, "lessonId"));
      setRecords((current) => [...(bundle.records ?? []), ...current.filter((record) => record.lessonId !== bundle.lesson.lessonId)]);
      setHomeworks((current) => [...(bundle.homeworks ?? []), ...current.filter((homework) => homework.lessonId !== bundle.lesson.lessonId)]);
      setDeletedLessonBundles((current) => current.filter((item) => item.bundleId !== bundle.bundleId));
      setSelectedDate(restoredLesson.date);
      setSelectedLessonId(restoredLesson.lessonId);
      const pendingCancelRequest = lessonCancelRequestsRef.current.get(restoredLesson.lessonId) ?? Promise.resolve();
      pendingCancelRequest
        .catch(() => null)
        .then(() => postJson("/api/lessons", { lesson: restoredLesson }))
        .catch((error) => console.error(error));
      if (bundle.records?.length) {
        bundle.records.forEach((record) => postJson("/api/lesson-records", { record }).catch((error) => console.error(error)));
      }
      if (bundle.homeworks?.length) {
        postJson("/api/homeworks/bulk", { homeworks: bundle.homeworks }).catch((error) => console.error(error));
      }
    }
    setLessonUndoStack(restActions);
  }

  function handleDeleteSelectedLessonFromCalendar() {
    const lesson = calendarLessons.find((item) => item.lessonId === selectedLessonId);
    if (!lesson) return;
    if (lesson.isVirtualGeneratedLesson || lesson.isExamPrepAutoLesson) {
      const generatedKey = getGeneratedLessonKey(lesson) || lesson.generatedKey;
      suppressGeneratedLessonKey(generatedKey);
      setSelectedLessonId("");
      setIsLessonJournalOpen(false);
      return;
    }
    setLessonDeleteModalId(lesson.lessonId);
  }

  function confirmDeleteLesson(lessonId) {
    const lesson = calendarLessons.find((item) => item.lessonId === lessonId);
    if (!lesson) return;
    if (lesson.isVirtualGeneratedLesson || lesson.isExamPrepAutoLesson) {
      const generatedKey = getGeneratedLessonKey(lesson) || lesson.generatedKey;
      suppressGeneratedLessonKey(generatedKey);
      setLessonDeleteModalId("");
      setSelectedLessonId("");
      setIsLessonJournalOpen(false);
      return;
    }
    const deletedAt = new Date().toISOString();
    const bundle = {
      bundleId: `deleted_${lessonId}_${Date.now()}`,
      lesson,
      records: recordsRef.current.filter((record) => record.lessonId === lessonId),
      homeworks: homeworksRef.current.filter((homework) => homework.lessonId === lessonId),
      deletedAt,
      expiresAt: new Date(Date.now() + lessonDeleteRetentionMs).toISOString()
    };
    const canceledLesson = { ...lesson, status: "canceled" };
    setDeletedLessonBundles((current) => pruneExpiredLessonDeletes([bundle, ...current]));
    setLessonUndoStack((current) => [{ type: "delete", bundle }, ...current].slice(0, 20));
    const generatedKey = getGeneratedLessonKey(lesson);
    if (generatedKey) suppressGeneratedLessonKey(generatedKey);
    setLessons((current) => current.filter((item) => item.lessonId !== lessonId));
    setRecords((current) => current.filter((record) => record.lessonId !== lessonId));
    setHomeworks((current) => current.filter((homework) => homework.lessonId !== lessonId));
    setLessonDeleteModalId("");
    const nextLessonForDate = lessons
      .filter((item) => item.lessonId !== lessonId && item.date === lesson.date)
      .sort(sortByTime)[0];
    setSelectedLessonId(nextLessonForDate?.lessonId ?? "");
    setIsLessonJournalOpen(false);
    const cancelRequest = postJson("/api/lessons", { lesson: canceledLesson }).catch((error) => console.error(error));
    lessonCancelRequestsRef.current.set(lessonId, cancelRequest);
    cancelRequest.finally(() => lessonCancelRequestsRef.current.delete(lessonId));
  }

  function handleOpenLessonJournal(lessonId) {
    const lesson = calendarLessons.find((item) => item.lessonId === lessonId);
    if (!lesson) return;
    setSelectedDate(lesson.date);
    setSelectedLessonId(lessonId);
    setIsLessonJournalOpen(true);
  }

  async function saveLessonModalLessons(lessonDrafts = [], onProgress = null) {
    const { persistedLessons, verifiedLessons } =
      await saveLessonModalLessonsWithVerification({
        lessonDrafts,
        onProgress,
        saveLessons: (expectedLessons) => postJsonWithTimeout(
          "/api/lessons/bulk",
          { lessons: expectedLessons },
          20000,
          "수업일지 저장이 20초를 넘었습니다. 중복 등록하지 말고 잠시 뒤 달력을 확인해 주세요."
        ),
        readLessons: () => getJsonWithTimeout(
          `/api/lessons?verify=lesson-modal-${Date.now()}`,
          20000,
          "수업일지 저장 확인이 20초를 넘었습니다. 다시 누르지 말고 잠시 뒤 새로고침해 주세요."
        )
      });
    setLessons(filterActiveLessons(persistedLessons));
    return verifiedLessons;
  }

  async function handleOpenMonthlyRegularLessons() {
    const plan = monthlyRegularLessonOpenPlan;
    if (plan.errors.length) throw new Error(plan.errors.join(" "));
    if (!plan.lessonsToCreate.length) {
      setMonthlyRegularLessonOpenStatus({ message: `${plan.monthKey} 정규수업은 이미 모두 열려 있습니다.`, state: "saved" });
      return;
    }
    const verifySavedLessons = async () => {
      const verification = await getJsonWithTimeout(
        `/api/lessons?includeCanceled=true&verify=monthly-regular-open-${Date.now()}`,
        30000,
        "월 정규수업 저장 확인이 30초를 넘었습니다. 새로고침 후 달력을 먼저 확인해 주세요."
      );
      if (!verification.ok || verification.source !== "supabase" || !Array.isArray(verification.lessons)) {
        throw new Error(verification.error || "Supabase에서 월 정규수업 저장 결과를 다시 확인하지 못했습니다.");
      }
      const persistedById = new Map(verification.lessons.map((lesson) => [lesson.lessonId, lesson]));
      const missingLessons = plan.lessonsToCreate.filter((lesson) => {
        const persisted = persistedById.get(lesson.lessonId);
        return !persisted || getMonthlyRegularLessonOpenSnapshot(persisted) !== getMonthlyRegularLessonOpenSnapshot(lesson);
      });
      return { missingLessons, persistedLessons: verification.lessons };
    };
    setMonthlyRegularLessonOpenStatus({ message: `정규수업 ${plan.rows.length}개 반 · ${plan.lessonsToCreate.length}회차를 반별로 저장 중입니다.`, state: "saving" });
    try {
      for (const [index, row] of plan.rows.entries()) {
        if (!row.lessons.length) continue;
        setMonthlyRegularLessonOpenStatus({
          message: `${plan.monthKey} 정규수업 저장 중: ${index + 1}/${plan.rows.length} · ${row.className} ${row.lessons.length}회차`,
          state: "saving"
        });
        const saveResult = await postJsonWithTimeout(
          "/api/lessons/bulk",
          { lessons: row.lessons },
          45000,
          "반별 정규수업 저장이 45초를 넘었습니다. Supabase 반영 여부를 먼저 확인합니다."
        );
        if (!saveResult.ok || saveResult.source !== "supabase") {
          throw new Error(saveResult.error || `${row.className} 정규수업을 Supabase에 저장하지 못했습니다.`);
        }
      }
      setMonthlyRegularLessonOpenStatus({ message: "Supabase 저장 후 반영 내용을 다시 확인 중입니다.", state: "verifying" });
      const verification = await verifySavedLessons();
      if (verification.missingLessons.length) {
        throw new Error(`Supabase 재조회에서 ${verification.missingLessons.length}회차가 일치하지 않습니다.`);
      }
      setLessons(filterActiveLessons(normalizeLessonCalendarRules(verification.persistedLessons, makeupTasks, classTemplates)));
      setMonthlyRegularLessonOpenStatus({
        message: `${plan.monthKey} 정규수업 ${plan.rows.length}개 반 · ${plan.lessonsToCreate.length}회차를 열고 Supabase 재조회까지 확인했습니다. 알림톡·출결·숙제·수업기록은 생성하지 않았습니다.`,
        state: "saved"
      });
    } catch (error) {
      try {
        const verification = await verifySavedLessons();
        if (!verification.missingLessons.length) {
          setLessons(filterActiveLessons(normalizeLessonCalendarRules(verification.persistedLessons, makeupTasks, classTemplates)));
          setMonthlyRegularLessonOpenStatus({
            message: `${plan.monthKey} 정규수업은 응답 지연이 있었지만 Supabase 재조회에서 ${plan.lessonsToCreate.length}회차 전체 반영을 확인했습니다.`,
            state: "saved"
          });
          return;
        }
        setMonthlyRegularLessonOpenStatus({
          message: `저장 응답 지연/실패 뒤 Supabase를 확인했습니다. ${plan.lessonsToCreate.length - verification.missingLessons.length}회차는 반영됐고 ${verification.missingLessons.length}회차는 아직 없습니다. 잠시 뒤 새로고침 후 남은 회차만 다시 열어 주세요.`,
          state: "failed"
        });
      } catch (verificationError) {
        setMonthlyRegularLessonOpenStatus({ message: `월 정규수업 열기 실패: ${error.message} · 저장 결과 확인도 실패했습니다: ${verificationError.message}`, state: "failed" });
      }
      throw error;
    }
  }

  async function handleAddLesson(formValues, onProgress = null) {
    const template = classTemplates.find(
      (item) => item.classTemplateId === formValues.classTemplateId
    );
    const classTemplateId = formValues.classTemplateId && template ? template.classTemplateId : "";
    const studentIds = getActiveStudentIdsFromSelection(formValues.studentIds, students);
    const lessonId = formValues.lessonId || createLessonId(formValues.date, formValues.name);
    const closureMakeupLessonId = formValues.lessonType === "closure" && formValues.closureMakeupEnabled
      ? formValues.closureMakeupLessonId || createLessonId(formValues.closureMakeupDate, `${formValues.name}-휴강-보충`)
      : "";
    const lessonsToSave = buildNewLessonModalLessons({
      classTemplateId,
      closureMakeupLessonId,
      formValues,
      lessonId,
      resolveDayKey: getDayKey,
      resolveLessonColor: getStandardLessonColor,
      studentIds
    });
    const [lesson] = lessonsToSave;
    const verifiedLessons = await saveLessonModalLessons(lessonsToSave, onProgress);
    setSelectedDate(lesson.date);
    setSelectedLessonId(lesson.lessonId);
    return {
      lessons: verifiedLessons,
      message: closureMakeupLessonId
        ? "휴강과 연결 보충 수업일지 저장 완료"
        : formValues.lessonType === "closure"
          ? "휴강 수업일지 저장 완료"
          : "수업일지 저장 완료"
    };
  }

  async function handleUpdateLesson(formValues, onProgress = null) {
    const isClosureConversion = isLessonClosureConversion(editingLesson, formValues.lessonType);
    let latestSourceLesson = editingLesson;
    if (isClosureConversion) {
      onProgress?.("saving", "휴강 전환 전 최신 수업기록·알림 예약 확인 중");
      const preflight = await getJsonWithTimeout(
        `/api/lessons/closure-preflight?lessonId=${encodeURIComponent(editingLesson.lessonId)}&verify=${Date.now()}`,
        20000,
        "휴강 전환 사전 확인이 20초를 넘었습니다. 저장하지 말고 잠시 뒤 다시 확인해 주세요."
      );
      if (preflight.source !== "supabase") {
        throw new Error("휴강 전환 전 최신 상태를 Supabase에서 확인하지 못했습니다.");
      }
      if (preflight.lesson) {
        if (
          getLessonClosureSourceSnapshot(preflight.lesson) !==
          getLessonClosureSourceSnapshot(editingLesson)
        ) {
          throw new Error("수업을 연 뒤 명단·시간·특강 회차 정보가 변경되었습니다. 모달을 닫고 최신 수업을 다시 열어 주세요.");
        }
        latestSourceLesson = preflight.lesson;
      }
      if (!preflight.canConvert) {
        const blockingCount = preflight.blockingNotificationJobs?.length ?? 0;
        throw new Error(`발송 가능하거나 결과 확인이 필요한 알림 ${blockingCount}건이 남아 있습니다. 현재 수업일지의 예약 확인에서 정리한 뒤 다시 휴강 처리해 주세요.`);
      }
    }
    const template = classTemplates.find(
      (item) => item.classTemplateId === formValues.classTemplateId
    );
    const classTemplateId = formValues.classTemplateId && template ? template.classTemplateId : "";
    const activeStudentIds = getActiveStudentIdsFromSelection(formValues.studentIds, students);
    const preservedHistoricalStudentIds = getLessonStudentIds(latestSourceLesson)
      .filter((studentId) => !students.some((student) => student.studentId === studentId && isActiveStudent(student)));
    const editableStudentIds = [...new Set([...activeStudentIds, ...preservedHistoricalStudentIds])];
    const studentIds = isClosureConversion
      ? getLessonClosureRoster(latestSourceLesson, editableStudentIds)
      : editableStudentIds;
    const closureMakeupLessonId = formValues.lessonType === "closure" && formValues.closureMakeupEnabled
      ? formValues.closureMakeupLessonId || createLessonId(formValues.closureMakeupDate, `${formValues.name}-휴강-보충`)
      : "";
    const lessonsToSave = buildUpdatedLessonModalLessons({
      classTemplateId,
      closureMakeupLessonId,
      editingLesson,
      formValues,
      latestSourceLesson,
      resolveDayKey: getDayKey,
      resolveLessonColor: getStandardLessonColor,
      studentIds
    });
    const [lesson] = lessonsToSave;

    const [persistedLesson] = await saveLessonModalLessons(lessonsToSave, onProgress);
    markGeneratedLessonManualOverride(editingLesson);
    setSelectedDate(lesson.date);
    setSelectedLessonId(lesson.lessonId);
    return {
      lessons: [persistedLesson],
      message: closureMakeupLessonId
        ? "수업을 휴강으로 전환하고 연결 보충 수업일지까지 저장 완료"
        : formValues.lessonType === "closure" && editingLesson?.lessonType !== "closure"
          ? "수업을 휴강으로 전환 저장 완료 · 기존 명단·수업기록 보존"
          : "수업일지 수정 저장 완료"
    };
  }

  function handleDeleteLesson(lessonId) {
    const lesson = calendarLessons.find((item) => item.lessonId === lessonId);
    if (!lesson) return;
    if (lesson.isVirtualGeneratedLesson || lesson.isExamPrepAutoLesson) {
      const generatedKey = getGeneratedLessonKey(lesson) || lesson.generatedKey;
      suppressGeneratedLessonKey(generatedKey);
      setSelectedLessonId("");
      setIsLessonJournalOpen(false);
      return;
    }
    setLessonDeleteModalId(lesson.lessonId);
  }

  function createUniqueStudentLoginId(name = "") {
    const baseLoginId = `04${String(name || "student").replace(/\s+/g, "")}`;
    const existingLoginIds = new Set(students.map((student) => student.loginId).filter(Boolean));
    if (!existingLoginIds.has(baseLoginId)) return baseLoginId;
    let suffix = 2;
    while (existingLoginIds.has(`${baseLoginId}-${suffix}`)) suffix += 1;
    return `${baseLoginId}-${suffix}`;
  }

  function createStudentFromFormValues(formValues) {
    return {
      studentId: formValues.studentId || `student_${Date.now()}`,
      loginId: formValues.loginId || createUniqueStudentLoginId(formValues.name),
      name: formValues.name,
      pin: formValues.pin || "1234",
      birthYear: formValues.birthYear,
      schoolName: formValues.schoolName,
      grade: formValues.grade || inferGradeFromBirthYear(formValues.birthYear),
      studentPhone: formValues.studentPhone,
      parentPhone: formValues.parentPhone,
      textbook: formValues.textbook ?? "",
      specialNote: formValues.specialNote ?? "",
      defaultClassTemplateId: formValues.defaultClassTemplateId ?? "",
      scheduleOverride: formValues.scheduleOverride ?? "",
      status: "active"
    };
  }

  function isActiveLessonForRosterSync(lesson) {
    return (lesson.status ?? "scheduled") !== "canceled";
  }

  function applyLessonRosterChanges(changedLessons) {
    if (!changedLessons.length) return;
    const changedById = new Map(changedLessons.map((lesson) => [lesson.lessonId, lesson]));
    setLessons((current) => current.map((lesson) => changedById.get(lesson.lessonId) ?? lesson));
    postJson("/api/lessons/bulk", { lessons: changedLessons }).catch((error) => {
      console.error(error);
      window.alert(`수업 명단 저장 실패: ${error.message}`);
    });
  }

  function addStudentToFutureClassLessons(student, fromDate = today) {
    if (!isActiveStudent(student) || !student.defaultClassTemplateId) return [];
    const changedLessons = lessons
      .filter((lesson) =>
        isActiveLessonForRosterSync(lesson) &&
        lesson.classTemplateId === student.defaultClassTemplateId &&
        String(lesson.date) >= fromDate &&
        !(lesson.studentIds ?? []).includes(student.studentId)
      )
      .map((lesson) => ({
        ...lesson,
        studentIds: getActiveStudentIdsFromSelection([...(lesson.studentIds ?? []), student.studentId], students)
      }));
    applyLessonRosterChanges(changedLessons);
    return changedLessons;
  }

  function reconcileChangedStudentsFutureClassLessons(changedStudents = [], previousStudents = [], fromDate = today) {
    const changePairs = changedStudents
      .map((student) => ({
        student,
        previousStudent: previousStudents.find((item) => item.studentId === student.studentId)
      }))
      .filter(({ student, previousStudent }) => student && previousStudent);
    if (changePairs.length === 0) return [];

    const changedLessons = lessons.flatMap((lesson) => {
      if (!isActiveLessonForRosterSync(lesson) || String(lesson.date) < fromDate) return [];
      let nextStudentIds = lesson.studentIds ?? [];
      changePairs.forEach(({ student, previousStudent }) => {
        const previousClassTemplateId = previousStudent.defaultClassTemplateId ?? "";
        const nextClassTemplateId = isActiveStudent(student) ? (student.defaultClassTemplateId ?? "") : "";
        if (previousClassTemplateId && previousClassTemplateId !== nextClassTemplateId && lesson.classTemplateId === previousClassTemplateId) {
          nextStudentIds = nextStudentIds.filter((id) => id !== student.studentId);
        }
        if (nextClassTemplateId && lesson.classTemplateId === nextClassTemplateId && !nextStudentIds.includes(student.studentId)) {
          nextStudentIds = [...nextStudentIds, student.studentId];
        }
      });
      const sortedStudentIds = getActiveStudentIdsFromSelection(nextStudentIds, students);
      if (JSON.stringify(sortedStudentIds) === JSON.stringify(lesson.studentIds ?? [])) return [];
      return [{ ...lesson, studentIds: sortedStudentIds }];
    });
    applyLessonRosterChanges(changedLessons);
    return changedLessons;
  }

  function reconcileStudentFutureClassLessons(student, previousClassTemplateId = "", fromDate = today) {
    const previousStudent = {
      ...student,
      defaultClassTemplateId: previousClassTemplateId
    };
    return reconcileChangedStudentsFutureClassLessons([student], [previousStudent], fromDate);
  }

  function removeStudentsFromLessonsFromDate(studentIds = [], fromDate = today) {
    const removalStudentIds = new Set(studentIds);
    if (removalStudentIds.size === 0) return [];
    const changedLessons = lessons
      .filter((lesson) =>
        isActiveLessonForRosterSync(lesson) &&
        String(lesson.date) >= fromDate &&
        (lesson.studentIds ?? []).some((studentId) => removalStudentIds.has(studentId))
      )
      .map((lesson) => ({
        ...lesson,
        studentIds: (lesson.studentIds ?? []).filter((id) => !removalStudentIds.has(id))
      }));
    applyLessonRosterChanges(changedLessons);
    return changedLessons;
  }

  function removeStudentFromLessonsFromDate(studentId, fromDate = today) {
    return removeStudentsFromLessonsFromDate([studentId], fromDate);
  }

  function handleAddStudent(formValues) {
    const student = createStudentFromFormValues(formValues);

    setStudents((current) => [...current, student]);
    addStudentToFutureClassLessons(student, today);
    setIsStudentModalOpen(false);
    postJson("/api/students", { student }).catch((error) => console.error(error));
  }

  function handleUpdateStudentIntakeApplicant(applicantId, updates) {
    const nextApplicant = {
      ...studentIntakeApplicants.find((applicant) => applicant.applicantId === applicantId),
      ...updates,
      updatedAt: new Date().toISOString()
    };
    if (!nextApplicant.applicantId) return;
    setStudentIntakeApplicants((current) =>
      current.map((applicant) => (applicant.applicantId === applicantId ? nextApplicant : applicant))
    );
    const requestId = (studentIntakeSaveRequestRef.current[applicantId] ?? 0) + 1;
    studentIntakeSaveRequestRef.current[applicantId] = requestId;
    setStudentIntakeSaveStates((current) => ({ ...current, [applicantId]: "saving" }));
    postJson("/api/student-intake-applicants", { applicant: nextApplicant })
      .then(() => {
        if (studentIntakeSaveRequestRef.current[applicantId] === requestId) {
          setStudentIntakeSaveStates((current) => ({ ...current, [applicantId]: "saved" }));
        }
      })
      .catch((error) => {
        console.error(error);
        if (studentIntakeSaveRequestRef.current[applicantId] === requestId) {
          setStudentIntakeSaveStates((current) => ({ ...current, [applicantId]: "failed" }));
        }
      });
  }

  async function handleRegisterStudentIntakeApplicant(applicantId, values, options = {}) {
    const applicant = studentIntakeApplicants.find((item) => item.applicantId === applicantId);
    if (!applicant) throw new Error("등록할 Tally 후보를 찾지 못했습니다.");
    if (studentIntakeRegistrationStates[applicantId] === "saving") return;
    const targetStudentId = String(options.targetStudentId ?? "").trim();

    setStudentIntakeRegistrationStates((current) => ({ ...current, [applicantId]: "saving" }));
    setStudentIntakeRegistrationMessages((current) => ({ ...current, [applicantId]: "학생 원천 저장 중" }));

    try {
      const generatedStudentId = `student_intake_${safeIdPart(applicantId)}`;
      const studentsBeforeResult = await getJsonWithTimeout(
        "/api/students",
        15000,
        "학생 원천 확인이 15초를 넘었습니다. 잠시 뒤 다시 시도해 주세요."
      );
      if (studentsBeforeResult.source !== "supabase") {
        throw new Error("학생 원천을 Supabase에서 확인하지 못해 Tally 등록을 중단했습니다.");
      }
      const persistedStudentsBefore = studentsBeforeResult.students ?? [];
      const existingStudent = persistedStudentsBefore.find((item) =>
        item.studentId === (targetStudentId || generatedStudentId)
      );
      if (targetStudentId && !existingStudent) {
        throw new Error("선택한 기존 학생을 Supabase 재조회에서 찾지 못했습니다.");
      }
      if (targetStudentId && !isActiveStudent(existingStudent)) {
        throw new Error("퇴원 학생에는 Tally 정보를 덮어쓸 수 없습니다. 퇴원 취소 또는 다른 학생을 선택해 주세요.");
      }
      const tallyValues = {
        ...values,
        name: values.name || applicant.name,
        birthYear: values.birthYear || applicant.birthYear,
        grade: values.grade || applicant.grade,
        schoolName: values.schoolName || applicant.schoolName,
        studentPhone: values.studentPhone || applicant.studentPhone,
        parentPhone: values.parentPhone || applicant.parentPhone,
        specialNote: values.specialNote || applicant.specialNote || applicant.memo,
        defaultClassTemplateId: values.defaultClassTemplateId ?? applicant.defaultClassTemplateId ?? ""
      };
      const replaceExisting = Boolean(targetStudentId && options.replaceExisting);
      const studentDraft = existingStudent
        ? replaceExisting
          ? replaceTallyStudentValues(existingStudent, tallyValues)
          : mergeTallyStudentValues(existingStudent, tallyValues)
        : createStudentFromFormValues({
            ...tallyValues,
            studentId: generatedStudentId
          });
      const previousClassTemplateId = existingStudent?.defaultClassTemplateId ?? "";
      const studentSaveResult = await postJsonWithTimeout(
        "/api/students",
        { student: studentDraft },
        15000,
        "학생 저장이 15초를 넘었습니다. 중복 등록하지 말고 저장 상태를 다시 확인해 주세요."
      );
      if (studentSaveResult.source !== "supabase") {
        throw new Error("학생 정보가 Supabase가 아닌 임시 원천에 저장되어 완료할 수 없습니다.");
      }
      const savedStudentId = studentSaveResult.student?.studentId || studentDraft.studentId;

      setStudentIntakeRegistrationMessages((current) => ({ ...current, [applicantId]: "학생 원천 반영 확인 중" }));
      const studentsAfterResult = await getJsonWithTimeout(
        "/api/students",
        15000,
        "학생 저장 확인이 15초를 넘었습니다. 중복 등록하지 말고 잠시 뒤 다시 확인해 주세요."
      );
      if (studentsAfterResult.source !== "supabase") {
        throw new Error("학생 저장 결과를 Supabase에서 다시 확인하지 못했습니다.");
      }
      const savedStudent = (studentsAfterResult.students ?? []).find((item) => item.studentId === savedStudentId);
      if (!savedStudent) throw new Error("학생 저장 응답은 받았지만 Supabase 재조회에서 학생을 찾지 못했습니다.");
      const studentVerificationFields = [
        "studentId",
        "loginId",
        "pin",
        "name",
        "birthYear",
        "schoolName",
        "grade",
        "studentPhone",
        "parentPhone",
        "textbook",
        "specialNote",
        "defaultClassTemplateId",
        "scheduleOverride",
        "status"
      ];
      const mismatchedStudentFields = studentVerificationFields.filter((field) =>
        String(savedStudent[field] ?? "") !== String(studentDraft[field] ?? "")
      );
      if (mismatchedStudentFields.length > 0) {
        throw new Error(`학생 저장 재조회 값이 다릅니다: ${mismatchedStudentFields.join(", ")}`);
      }
      setStudents(studentsAfterResult.students ?? []);

      const affectedClassTemplateIds = new Set([
        previousClassTemplateId,
        savedStudent.defaultClassTemplateId
      ].filter(Boolean));
      const changedLessons = lessons
        .filter((lesson) =>
          isActiveLessonForRosterSync(lesson) &&
          affectedClassTemplateIds.has(lesson.classTemplateId) &&
          String(lesson.date) >= today
        )
        .map((lesson) => {
          const currentStudentIds = (lesson.studentIds ?? []).filter((studentId) => studentId !== savedStudent.studentId);
          const nextStudentIds = lesson.classTemplateId === savedStudent.defaultClassTemplateId
            ? [...currentStudentIds, savedStudent.studentId]
            : currentStudentIds;
          return {
            ...lesson,
            studentIds: getActiveStudentIdsFromSelection(nextStudentIds, studentsAfterResult.students ?? [])
          };
        })
        .filter((lesson) => {
          const originalLesson = lessons.find((item) => item.lessonId === lesson.lessonId);
          return [...new Set(originalLesson?.studentIds ?? [])].sort().join("|") !==
            [...new Set(lesson.studentIds ?? [])].sort().join("|");
        });

      if (changedLessons.length > 0) {
        setStudentIntakeRegistrationMessages((current) => ({ ...current, [applicantId]: "미래 수업 명단 저장 중" }));
        await postJsonWithTimeout(
          "/api/lessons/bulk",
          { lessons: changedLessons },
          20000,
          "미래 수업 명단 저장이 20초를 넘었습니다. 학생 원천은 저장됐을 수 있으니 상태를 확인해 주세요."
        );
        const lessonsAfterResult = await getJsonWithTimeout(
          "/api/lessons",
          20000,
          "미래 수업 명단 확인이 20초를 넘었습니다."
        );
        const changedLessonIds = new Set(changedLessons.map((lesson) => lesson.lessonId));
        const persistedLessonsById = new Map((lessonsAfterResult.lessons ?? [])
          .filter((lesson) => changedLessonIds.has(lesson.lessonId))
          .map((lesson) => [lesson.lessonId, lesson]));
        const unmatchedLessons = changedLessons.filter((lesson) => {
          const persistedLesson = persistedLessonsById.get(lesson.lessonId);
          return !persistedLesson ||
            [...new Set(persistedLesson.studentIds ?? [])].sort().join("|") !==
              [...new Set(lesson.studentIds ?? [])].sort().join("|");
        });
        if (unmatchedLessons.length > 0) {
          throw new Error(`학생은 저장됐지만 미래 수업 명단 ${unmatchedLessons.length}건이 재조회와 일치하지 않습니다.`);
        }
        setLessons(lessonsAfterResult.lessons ?? []);
      }

      setStudentIntakeRegistrationMessages((current) => ({ ...current, [applicantId]: "Tally 후보 완료 상태 저장 중" }));
      const registrationMemo = `정식 학생 등록: ${savedStudent.loginId} (${savedStudent.studentId})`;
      const registeredApplicantMemo = String(applicant.memo ?? "").includes(savedStudent.studentId)
        ? applicant.memo
        : [applicant.memo, registrationMemo].filter(Boolean).join("\n");
      const registeredApplicant = {
        ...applicant,
        ...values,
        defaultClassTemplateId: savedStudent.defaultClassTemplateId ?? "",
        status: "registered",
        memo: registeredApplicantMemo,
        updatedAt: new Date().toISOString()
      };
      await postJsonWithTimeout(
        "/api/student-intake-applicants",
        { applicant: registeredApplicant },
        15000,
        "Tally 후보 완료 상태 저장이 15초를 넘었습니다. 학생 원천은 이미 저장됐을 수 있습니다."
      );
      const applicantsAfterResult = await getJsonWithTimeout(
        "/api/student-intake-applicants",
        15000,
        "Tally 후보 완료 상태 확인이 15초를 넘었습니다."
      );
      const verifiedApplicant = (applicantsAfterResult.applicants ?? []).find((item) => item.applicantId === applicantId);
      if (verifiedApplicant?.status !== "registered" || !String(verifiedApplicant.memo ?? "").includes(savedStudent.studentId)) {
        throw new Error("학생은 저장됐지만 Tally 후보의 등록완료 상태가 재조회와 일치하지 않습니다.");
      }
      setStudentIntakeApplicants(applicantsAfterResult.applicants ?? []);
      setStudentIntakeRegistrationStates((current) => ({ ...current, [applicantId]: "saved" }));
      setStudentIntakeRegistrationMessages((current) => ({
        ...current,
        [applicantId]: targetStudentId
          ? replaceExisting
            ? savedStudent.defaultClassTemplateId
              ? "기존 기본정보 삭제 후 Tally 덮어쓰기와 미래 수업 명단 반영 확인 완료"
              : "기존 기본정보 삭제 후 Tally 덮어쓰기 완료 · 정규반 미배정"
            : savedStudent.defaultClassTemplateId
              ? "기존 학생 Tally 정보와 미래 수업 명단 반영 확인 완료"
              : "기존 학생 Tally 정보 반영 완료 · 정규반 미배정"
          : savedStudent.defaultClassTemplateId
            ? "학생명단과 미래 수업 명단 반영 확인 완료"
            : "학생명단 반영 완료 · 정규반 미배정"
      }));
    } catch (error) {
      console.error(error);
      setStudentIntakeRegistrationStates((current) => ({ ...current, [applicantId]: "failed" }));
      setStudentIntakeRegistrationMessages((current) => ({ ...current, [applicantId]: error.message }));
      throw error;
    }
  }

  function removeWithdrawnStudentsFromFutureLessons(withdrawalBoundaries = []) {
    const removalStartByStudentId = new Map(
      withdrawalBoundaries.map(({ studentId, fromDate }) => [studentId, fromDate])
    );
    if (removalStartByStudentId.size === 0) return [];
    const changedLessons = lessons
      .filter((lesson) =>
        isActiveLessonForRosterSync(lesson) &&
        (lesson.studentIds ?? []).some((studentId) => {
          const fromDate = removalStartByStudentId.get(studentId);
          return fromDate && String(lesson.date) >= fromDate;
        })
      )
      .map((lesson) => ({
        ...lesson,
        studentIds: (lesson.studentIds ?? []).filter((studentId) => {
          const fromDate = removalStartByStudentId.get(studentId);
          return !fromDate || String(lesson.date) < fromDate;
        })
      }));
    applyLessonRosterChanges(changedLessons);
    return changedLessons;
  }

  function handleUpdateStudent(studentId, field, value) {
    setStudents((current) =>
      current.map((student) => (student.studentId === studentId ? { ...student, [field]: value } : student))
    );
  }

  async function handleSaveStudent(studentId, options = {}) {
    const student = students.find((item) => item.studentId === studentId);
    if (!student) throw new Error("저장할 학생을 찾지 못했습니다.");
    await postJson("/api/students", { student });
    if (
      Object.prototype.hasOwnProperty.call(options, "previousClassTemplateId") &&
      options.previousClassTemplateId !== student.defaultClassTemplateId
    ) {
      reconcileStudentFutureClassLessons(student, options.previousClassTemplateId, today);
    }
  }

  async function handleSaveStudentProfile(studentDraft) {
    if (!studentDraft?.studentId) throw new Error("저장할 학생을 찾지 못했습니다.");
    const currentStudent = students.find((item) => item.studentId === studentDraft.studentId);
    const nextStudent = { ...(currentStudent ?? {}), ...studentDraft };
    const verificationFields = [
      "schoolName",
      "grade",
      "textbook",
      "studentPhone",
      "parentPhone",
      "loginId",
      "pin",
      "specialNote",
      "scheduleOverride"
    ];
    const requestId = (studentProfileSaveRequestRef.current[nextStudent.studentId] ?? 0) + 1;
    studentProfileSaveRequestRef.current[nextStudent.studentId] = requestId;
    setStudentProfileSaveStates((current) => ({ ...current, [nextStudent.studentId]: "saving" }));
    try {
      await postJsonWithTimeout(
        "/api/students",
        { student: nextStudent },
        15000,
        "학생 기본정보 저장 요청이 15초를 넘었습니다. 저장 상태를 확인한 뒤 다시 시도해 주세요."
      );
      const studentsAfterResult = await getJsonWithTimeout(
        "/api/students",
        15000,
        "학생 기본정보 저장 확인이 15초를 넘었습니다. 다시 저장하지 말고 잠시 뒤 새로고침해 주세요."
      );
      const savedStudent = (studentsAfterResult.students ?? []).find((student) => student.studentId === nextStudent.studentId);
      if (!savedStudent) throw new Error("저장 응답은 받았지만 Supabase 재조회에서 학생을 찾지 못했습니다.");
      const mismatchedFields = verificationFields.filter(
        (field) => String(savedStudent[field] ?? "") !== String(nextStudent[field] ?? "")
      );
      if (mismatchedFields.length > 0) {
        throw new Error(`Supabase 재조회 값이 저장 요청과 다릅니다: ${mismatchedFields.join(", ")}`);
      }
      setStudents(studentsAfterResult.students ?? []);
      if (studentProfileSaveRequestRef.current[nextStudent.studentId] === requestId) {
        setStudentProfileSaveStates((current) => ({ ...current, [nextStudent.studentId]: "saved" }));
      }
    } catch (error) {
      console.error(error);
      if (studentProfileSaveRequestRef.current[nextStudent.studentId] === requestId) {
        setStudentProfileSaveStates((current) => ({ ...current, [nextStudent.studentId]: "failed" }));
      }
      throw error;
    }
  }

  async function handleSaveTeacherOperatingMemo(studentId, memoDraft) {
    if (!studentId) throw new Error("저장할 학생을 찾지 못했습니다.");
    const requestId = (teacherOperatingMemoSaveRequestRef.current[studentId] ?? 0) + 1;
    teacherOperatingMemoSaveRequestRef.current[studentId] = requestId;
    setTeacherOperatingMemoSaveStates((current) => ({ ...current, [studentId]: "saving" }));
    const memo = String(memoDraft ?? "").trim();
    try {
      const currentResult = await getJsonWithTimeout(
        "/api/app-state",
        15000,
        "강사 운영 메모의 현재 저장본을 확인하지 못했습니다. 다시 저장하지 말고 잠시 뒤 새로고침해 주세요."
      );
      const currentMemos = currentResult.states?.teacherOperatingMemos;
      const nextMemos = {
        ...(currentMemos && typeof currentMemos === "object" && !Array.isArray(currentMemos) ? currentMemos : {}),
        [studentId]: memo
      };
      await postJsonWithTimeout(
        "/api/app-state",
        { states: { teacherOperatingMemos: nextMemos } },
        15000,
        "강사 운영 메모 저장 요청이 15초를 넘었습니다. 저장 상태를 확인한 뒤 다시 시도해 주세요."
      );
      const verifiedResult = await getJsonWithTimeout(
        "/api/app-state",
        15000,
        "강사 운영 메모 저장 확인이 15초를 넘었습니다. 다시 저장하지 말고 잠시 뒤 새로고침해 주세요."
      );
      const verifiedMemos = verifiedResult.states?.teacherOperatingMemos;
      if (!verifiedMemos || String(verifiedMemos[studentId] ?? "") !== memo) {
        throw new Error("Supabase 재조회 값이 저장 요청과 다릅니다: 강사 운영 메모");
      }
      setTeacherOperatingMemos(verifiedMemos);
      if (teacherOperatingMemoSaveRequestRef.current[studentId] === requestId) {
        setTeacherOperatingMemoSaveStates((current) => ({ ...current, [studentId]: "saved" }));
      }
    } catch (error) {
      console.error(error);
      if (teacherOperatingMemoSaveRequestRef.current[studentId] === requestId) {
        setTeacherOperatingMemoSaveStates((current) => ({ ...current, [studentId]: "failed" }));
      }
      throw error;
    }
  }

  function persistScoreRecords(nextScoreRecords) {
    const requestId = scoreRecordSaveRequestRef.current + 1;
    scoreRecordSaveRequestRef.current = requestId;
    setScoreRecordSaveState("saving");
    return postAppState({ scoreRecords: nextScoreRecords })
      .then(() => {
        if (scoreRecordSaveRequestRef.current === requestId) setScoreRecordSaveState("saved");
      })
      .catch((error) => {
        console.error(error);
        if (scoreRecordSaveRequestRef.current === requestId) setScoreRecordSaveState("failed");
        throw error;
      });
  }

  function handleSaveScoreRecord(scoreRecord) {
    if (!scoreRecord?.studentId) return Promise.reject(new Error("성적 기록 학생 ID가 필요합니다."));
    const existingRecord = scoreRecords.find((item) => item.scoreRecordId === scoreRecord.scoreRecordId);
    const nextRecord = {
      scoreRecordId: scoreRecord.scoreRecordId || `score_${Date.now()}_${scoreRecord.studentId}`,
      studentId: scoreRecord.studentId,
      examType: scoreRecord.examType || "내신",
      examDate: scoreRecord.examDate || today,
      subject: scoreRecord.subject || "수학",
      score: scoreRecord.score ?? "",
      grade: scoreRecord.grade ?? "",
      note: scoreRecord.note ?? "",
      createdAt: existingRecord?.createdAt || scoreRecord.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    const nextScoreRecords = upsertById(scoreRecords, nextRecord, "scoreRecordId");
    setScoreRecords(nextScoreRecords);
    return persistScoreRecords(nextScoreRecords);
  }

  function handleDeleteScoreRecord(scoreRecordId) {
    if (!scoreRecordId) return Promise.reject(new Error("삭제할 성적 기록 ID가 필요합니다."));
    if (typeof window !== "undefined" && !window.confirm("이 성적 기록을 삭제할까요?")) return Promise.resolve();
    const nextScoreRecords = scoreRecords.filter((item) => item.scoreRecordId !== scoreRecordId);
    setScoreRecords(nextScoreRecords);
    return persistScoreRecords(nextScoreRecords);
  }

  async function handleSaveTestSession(testSession, testAttemptsForSession = []) {
    setTestResultSaveState("saving");
    try {
      const result = await postTestSession(testSession, testAttemptsForSession);
      const savedSession = result.testSession ?? testSession;
      const savedAttempts = result.testAttempts ?? testAttemptsForSession;
      setTestSessions((current) => upsertById(current, savedSession, "testSessionId"));
      setTestAttempts((current) => {
        const otherAttempts = current.filter((attempt) => attempt.testSessionId !== savedSession.testSessionId);
        return [...otherAttempts, ...savedAttempts];
      });
      setTestResultSaveState("saved");
      return { ok: true, testSession: savedSession, testAttempts: savedAttempts };
    } catch (error) {
      console.error(error);
      setTestResultSaveState("failed");
      throw error;
    }
  }

  async function handleDeleteTestSession(testSessionId) {
    if (!testSessionId) return;
    if (typeof window !== "undefined" && !window.confirm("이 테스트 응시 기록을 삭제할까요? 학생별 결과도 함께 삭제됩니다.")) return;
    setTestResultSaveState("saving");
    try {
      await deleteTestSessionFromApi(testSessionId);
      setTestSessions((current) => current.filter((session) => session.testSessionId !== testSessionId));
      setTestAttempts((current) => current.filter((attempt) => attempt.testSessionId !== testSessionId));
      setTestResultSaveState("saved");
    } catch (error) {
      console.error(error);
      setTestResultSaveState("failed");
      throw error;
    }
  }

  function persistAcademyTests(nextAcademyTests) {
    const requestId = academyTestSaveRequestRef.current + 1;
    academyTestSaveRequestRef.current = requestId;
    setAcademyTestSaveState("saving");
    return postAppState({ academyTests: nextAcademyTests })
      .then(() => {
        if (academyTestSaveRequestRef.current === requestId) setAcademyTestSaveState("saved");
      })
      .catch((error) => {
        console.error(error);
        if (academyTestSaveRequestRef.current === requestId) setAcademyTestSaveState("failed");
        throw error;
      });
  }

  function handleSaveAcademyTest(academyTest) {
    if (!academyTest?.studentId) return Promise.reject(new Error("테스트 기록 학생 ID가 필요합니다."));
    const existingTest = academyTests.find((item) => item.testId === academyTest.testId);
    const nextTest = {
      testId: academyTest.testId || `academy_test_${Date.now()}_${academyTest.studentId}`,
      studentId: academyTest.studentId,
      testDate: academyTest.testDate || today,
      title: academyTest.title || "학원 테스트",
      scope: academyTest.scope ?? "",
      score: academyTest.score ?? "",
      averageScore: academyTest.averageScore ?? "",
      note: academyTest.note ?? "",
      createdAt: existingTest?.createdAt || academyTest.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    const nextAcademyTests = upsertById(academyTests, nextTest, "testId");
    setAcademyTests(nextAcademyTests);
    return persistAcademyTests(nextAcademyTests);
  }

  function handleDeleteAcademyTest(testId) {
    if (!testId) return Promise.reject(new Error("삭제할 테스트 기록 ID가 필요합니다."));
    if (typeof window !== "undefined" && !window.confirm("이 테스트 기록을 삭제할까요?")) return Promise.resolve();
    const nextAcademyTests = academyTests.filter((item) => item.testId !== testId);
    setAcademyTests(nextAcademyTests);
    return persistAcademyTests(nextAcademyTests);
  }

  function persistStudentConsultations(nextConsultations) {
    const requestId = studentConsultationSaveRequestRef.current + 1;
    studentConsultationSaveRequestRef.current = requestId;
    setStudentConsultationSaveState("saving");
    return postAppState({ studentConsultations: nextConsultations })
      .then(() => {
        if (studentConsultationSaveRequestRef.current === requestId) {
          setStudentConsultationSaveState("saved");
        }
      })
      .catch((error) => {
        console.error(error);
        if (studentConsultationSaveRequestRef.current === requestId) {
          setStudentConsultationSaveState("failed");
        }
        throw error;
      });
  }

  function handleSaveStudentConsultation(consultation) {
    if (!consultation?.studentId) return Promise.reject(new Error("상담기록 학생 ID가 필요합니다."));
    const existingConsultation = studentConsultations.find((item) => item.consultationId === consultation.consultationId);
    const nextConsultation = {
      consultationId: consultation.consultationId || `consult_${Date.now()}_${consultation.studentId}`,
      studentId: consultation.studentId,
      consultationType: consultation.consultationType || "student",
      consultationDate: consultation.consultationDate || today,
      content: String(consultation.content ?? "").trim(),
      createdAt: existingConsultation?.createdAt || consultation.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    const nextConsultations = upsertById(studentConsultations, nextConsultation, "consultationId");
    setStudentConsultations(nextConsultations);
    return persistStudentConsultations(nextConsultations);
  }

  function handleDeleteStudentConsultation(consultationId) {
    if (!consultationId) return Promise.reject(new Error("삭제할 상담기록 ID가 필요합니다."));
    if (typeof window !== "undefined" && !window.confirm("이 상담기록을 삭제할까요?")) return Promise.resolve();
    const nextConsultations = studentConsultations.filter((item) => item.consultationId !== consultationId);
    setStudentConsultations(nextConsultations);
    return persistStudentConsultations(nextConsultations);
  }

  async function handleSaveAcademyReminder(reminder) {
    const nextReminder = normalizeAcademyReminderDraft(reminder);
    const result = await postAcademyReminder(nextReminder);
    const savedReminder = result.academyReminder ?? nextReminder;
    setAcademyReminders((current) =>
      sortAcademyReminders(upsertById(current, normalizeAcademyReminderDraft(savedReminder), "reminderId"))
    );
    return savedReminder;
  }

  async function handleDeleteAcademyReminder(reminderId) {
    if (!reminderId) throw new Error("삭제할 운영 알림 ID가 필요합니다.");
    if (typeof window !== "undefined" && !window.confirm("이 운영 알림을 삭제할까요?")) return null;
    await deleteAcademyReminderFromApi(reminderId);
    setAcademyReminders((current) => current.filter((item) => item.reminderId !== reminderId));
    return reminderId;
  }

  function persistExamPrepRows(rowsToPersist) {
    if (!examPrepRowSaveControllerRef.current) {
      examPrepRowSaveControllerRef.current = createExamPrepRowSaveController({
        onError: console.error,
        onPersisted: ({ hasPendingChanges, row }) => {
          setExamPrepRows((current) => current.map((currentRow) => {
            if (currentRow.examPrepId !== row.examPrepId) return currentRow;
            return hasPendingChanges
              ? { ...currentRow, updatedAt: row.updatedAt }
              : row;
          }));
        },
        request: (changedRows) => saveExamPrepRowsRequest({
          examPrepRows: changedRows,
          request: postJson
        }),
        setSaveStates: setExamPrepRowSaveStates
      });
    }
    return examPrepRowSaveControllerRef.current.save(rowsToPersist);
  }

  function handleUpdateExamPrepRow(examPrepId, field, value) {
    setExamPrepRows((current) => {
      const existingExamRow = current.find((row) => row.examPrepId === examPrepId);
      if (!existingExamRow || existingExamRow[field] === value) return current;
      const updatedExamRow = existingExamRow ? { ...existingExamRow, [field]: value } : null;
      const shouldSyncPublisher = ["publisher", "examCycle", "schoolName", "grade", "subject"].includes(field);
      const updatedRows = current.map((row) => (row.examPrepId === examPrepId ? { ...row, [field]: value } : row));
      const nextRows = shouldSyncPublisher && updatedExamRow ? syncPublisherAcrossExamTerm(updatedRows, updatedExamRow) : updatedRows;
      const changedRows = nextRows.filter((row) => {
        const previousRow = current.find((item) => item.examPrepId === row.examPrepId);
        return previousRow && JSON.stringify(previousRow) !== JSON.stringify(row);
      });
      if (changedRows.length > 0) {
        persistExamPrepRows(changedRows);
      }
      return nextRows;
    });
  }

  function createPersistedExamPrepLessonReconcilePlan(nextExamPrepRows) {
    return createExamPrepLessonReconcilePlan({
      buildCandidates: buildExamPrepLessonCandidates,
      getIdentityKeys: getGeneratedLessonIdentityKeys,
      isExamPrepLesson,
      lessons,
      nextExamPrepRows
    });
  }

  async function readExamPrepDeleteState(auditId) {
    const [rowResult, lessonResult] = await Promise.all([
      getJsonWithTimeout(
        `/api/exam-prep-rows?verify=${encodeURIComponent(auditId)}-${Date.now()}`,
        15000,
        "시험정보 삭제 결과 확인이 15초를 넘었습니다."
      ),
      getJsonWithTimeout(
        `/api/lessons?verify=${encodeURIComponent(auditId)}-${Date.now()}`,
        15000,
        "시험대비 수업 삭제 결과 확인이 15초를 넘었습니다."
      )
    ]);
    if (!Array.isArray(rowResult.examPrepRows) || !Array.isArray(lessonResult.lessons)) {
      throw new Error("시험정보 삭제 후 Supabase 재조회 형식이 올바르지 않습니다.");
    }
    return {
      examPrepRows: normalizeExamPrepRows(rowResult.examPrepRows),
      lessons: filterActiveLessons(
        normalizeLessonCalendarRules(lessonResult.lessons, makeupTasks, classTemplates)
      )
    };
  }

  async function applyExamPrepLessonDeletePlan({ auditId, plan }) {
    if (plan.lessonsToSave.length > 0) {
      await saveExamPrepLessonsRequest({
        lessons: plan.lessonsToSave,
        request: postJson
      });
    }
    for (const lessonId of plan.lessonIdsToDelete) {
      await deleteExamPrepLessonRequest({
        auditId,
        fetchImpl: fetch,
        lessonId,
        resolveApiUrl: apiUrl
      });
    }
  }

  async function handleDeleteExamPrepRow(examPrepId) {
    const row = examPrepRows.find((item) => item.examPrepId === examPrepId);
    if (!row) return;
    if (examPrepDeleteRequestIdsRef.current.has(examPrepId)) return;
    const label = [row.schoolName, row.grade, row.subject, examCycleLabel(row.examCycle)].filter(Boolean).join(" · ");
    if (typeof window !== "undefined" && !window.confirm(`${label || "이 시험정보"} 행을 삭제할까요?`)) return;
    const nextExamPrepRows = examPrepRows.filter((item) => item.examPrepId !== examPrepId);
    const plan = createPersistedExamPrepLessonReconcilePlan(nextExamPrepRows);
    const auditId = createExamPrepDeleteAuditId(examPrepId);
    examPrepDeleteRequestIdsRef.current.add(examPrepId);
    setExamPrepRowSaveStates((current) => ({ ...current, [examPrepId]: "saving" }));

    try {
      const result = await executeExamPrepDeleteOrchestration({
        auditId,
        examPrepId,
        originalRows: examPrepRows,
        originalLessons: lessons,
        plan,
        deleteRow: ({ auditId: requestAuditId, examPrepId: targetId }) =>
          deleteExamPrepRowRequest({
            auditId: requestAuditId,
            examPrepId: targetId,
            fetchImpl: fetch,
            resolveApiUrl: apiUrl
          }),
        applyLessonPlan: applyExamPrepLessonDeletePlan,
        readState: () => readExamPrepDeleteState(auditId),
        restoreRows: (rows) =>
          saveExamPrepRowsRequest({
            allowRestore: true,
            examPrepRows: rows,
            request: postJson
          }),
        restoreLessons: (lessonsToRestore) =>
          postJson("/api/lessons/bulk", { lessons: lessonsToRestore })
      });
      setExamPrepRows(result.state.examPrepRows);
      setLessons(result.state.lessons);
      setExamPrepRowSaveStates((current) => ({ ...current, [examPrepId]: "saved" }));
      console.info("[exam-prep-delete-audit]", result.audit);
    } catch (error) {
      console.error(error);
      console.error("[exam-prep-delete-audit]", error.audit);
      try {
        const restoredState = await readExamPrepDeleteState(auditId);
        setExamPrepRows(restoredState.examPrepRows);
        setLessons(restoredState.lessons);
      } catch (readError) {
        console.error(readError);
      }
      setExamPrepRowSaveStates((current) => ({ ...current, [examPrepId]: "failed" }));
      const rollbackMessage = error.audit?.rollback?.verified
        ? "원래 시험정보와 연결 수업은 재조회로 복구 확인했습니다."
        : "복구 확인이 끝나지 않았습니다. 같은 삭제를 다시 누르지 말고 관리자에게 audit ID를 전달해 주세요.";
      if (typeof window !== "undefined") {
        window.alert(`시험정보 삭제 실패: ${error.message}\n${rollbackMessage}\naudit ID: ${auditId}`);
      }
    } finally {
      examPrepDeleteRequestIdsRef.current.delete(examPrepId);
    }
  }

  function handleSyncPreExamLessonFromSchoolEvent(event) {
    const lesson = createPreExamLessonFromSchoolEvent(event, students);
    if (!lesson) return;
    const generatedKey = getGeneratedLessonKey(lesson);
    const controls = normalizeGeneratedLessonControls(generatedLessonControls);
    if (controls.suppressedKeys.includes(generatedKey) || controls.manualOverrideKeys.includes(generatedKey)) return;
    const lessonKeys = new Set(getGeneratedLessonIdentityKeys(lesson));
    const existingLesson = lessons.find((item) =>
      item.sourceSchoolEventId === lesson.sourceSchoolEventId ||
      item.lessonId === lesson.lessonId ||
      getGeneratedLessonIdentityKeys(item).some((key) => lessonKeys.has(key))
    );
    const nextLesson = existingLesson ? { ...lesson, lessonId: existingLesson.lessonId } : lesson;
    if (existingLesson && areGeneratedLessonPersistedFieldsEqual(nextLesson, existingLesson)) return;
    setLessons((current) => upsertById(current, nextLesson, "lessonId"));
    postJson("/api/lessons", { lesson: nextLesson }).catch((error) => console.error(error));
  }

  function handleUpdateClassRoster(classTemplateId, nextStudentIds) {
    const nextStudentIdSet = new Set(nextStudentIds);
    const previousStudents = students;
    const nextStudents = previousStudents.map((student) => {
      if (!isActiveStudent(student)) {
        return student;
      }
      if (nextStudentIdSet.has(student.studentId)) {
        return { ...student, defaultClassTemplateId: classTemplateId };
      }
      if (student.defaultClassTemplateId === classTemplateId) {
        return { ...student, defaultClassTemplateId: "" };
      }
      return student;
    });
    setStudents(nextStudents);
    const changedStudents = nextStudents.filter((student) => {
      const previousStudent = previousStudents.find((item) => item.studentId === student.studentId);
      return previousStudent && previousStudent.defaultClassTemplateId !== student.defaultClassTemplateId;
    });
    reconcileChangedStudentsFutureClassLessons(changedStudents, previousStudents, today);
    if (changedStudents.length > 0) {
      postJson("/api/students/bulk", { students: changedStudents }).catch((error) => console.error(error));
    }
  }

  function handleDeleteStudent(studentId, withdrawalInfo = {}) {
    const removedStudent = students.find((student) => student.studentId === studentId);
    if (!removedStudent) return;
    const pausedStudent = {
      ...removedStudent,
      status: "paused",
      withdrawalReason: withdrawalInfo.reason || removedStudent.withdrawalReason || "other",
      withdrawalComment: withdrawalInfo.comment ?? removedStudent.withdrawalComment ?? "",
      withdrawnAt: new Date().toISOString()
    };
    const withdrawalDate = getKoreaDateString(new Date(pausedStudent.withdrawnAt));
    const futureLessonStartDate = getWithdrawalFutureLessonStartDate(withdrawalDate);
    setStudents((current) => current.map((student) => (student.studentId === studentId ? pausedStudent : student)));
    removeStudentFromLessonsFromDate(studentId, futureLessonStartDate);
    if (removedStudent) {
      postJson("/api/students", { student: pausedStudent }).catch((error) => console.error(error));
    }
  }

  async function handleRestoreStudent(studentId) {
    const withdrawnStudent = students.find((student) => student.studentId === studentId);
    if (!withdrawnStudent) throw new Error("퇴원 취소할 학생을 찾지 못했습니다.");
    if (isActiveStudent(withdrawnStudent)) {
      throw new Error("이미 재원 상태인 학생입니다. 새로고침 후 다시 확인해 주세요.");
    }

    const restoredStudent = {
      ...withdrawnStudent,
      status: "active",
      withdrawnAt: "",
      withdrawalReason: "",
      withdrawalComment: ""
    };
    const saveResult = await postJsonWithTimeout(
      "/api/students",
      { student: restoredStudent },
      15000,
      "퇴원 취소 저장이 15초를 넘었습니다. 중복 실행하지 말고 상태를 다시 확인해 주세요."
    );
    if (saveResult.source !== "supabase") {
      throw new Error("퇴원 취소가 Supabase가 아닌 임시 원천에 저장되어 완료할 수 없습니다.");
    }

    const studentsAfterResult = await getJsonWithTimeout(
      "/api/students",
      15000,
      "퇴원 취소 저장 확인이 15초를 넘었습니다. 다시 실행하지 말고 잠시 뒤 새로고침해 주세요."
    );
    if (studentsAfterResult.source !== "supabase") {
      throw new Error("퇴원 취소 결과를 Supabase에서 다시 확인하지 못했습니다.");
    }
    const persistedStudent = (studentsAfterResult.students ?? []).find((student) => student.studentId === studentId);
    if (!persistedStudent) {
      throw new Error("저장 응답은 받았지만 Supabase 재조회에서 학생을 찾지 못했습니다.");
    }
    if (
      !isActiveStudent(persistedStudent) ||
      persistedStudent.withdrawnAt ||
      persistedStudent.withdrawalReason ||
      persistedStudent.withdrawalComment
    ) {
      throw new Error("Supabase 재조회 값이 퇴원 취소 요청과 다릅니다. 완료로 처리하지 않았습니다.");
    }

    setStudents(studentsAfterResult.students ?? []);
    return persistedStudent;
  }

  async function handleAuditWithdrawnStudentDeletion(studentId) {
    const result = await getJsonWithTimeout(
      `/api/students/delete-audit?studentId=${encodeURIComponent(studentId)}`,
      20000,
      "학생 연결 기록 점검이 20초를 넘었습니다. 삭제하지 말고 잠시 뒤 다시 확인해 주세요."
    );
    if (result.audit?.source !== "supabase") {
      throw new Error("학생 연결 기록을 Supabase에서 확인하지 못해 삭제할 수 없습니다.");
    }
    return result.audit;
  }

  async function handlePermanentlyDeleteWithdrawnStudent(studentId, confirmationName, options = {}) {
    const deleteResult = await deleteJsonWithTimeout(
      "/api/students",
      {
        studentId,
        confirmationName,
        forceDeleteWithReferences: options.forceDeleteWithReferences === true,
        expectedReferenceFingerprint: options.expectedReferenceFingerprint ?? ""
      },
      20000,
      "학생 삭제가 20초를 넘었습니다. 중복 실행하지 말고 새로고침해 상태를 확인해 주세요."
    );
    if (deleteResult.source !== "supabase" || deleteResult.verified !== true) {
      throw new Error("학생 삭제를 Supabase 재조회로 확인하지 못했습니다.");
    }

    const studentsAfterResult = await getJsonWithTimeout(
      "/api/students",
      15000,
      "학생 삭제 후 목록 확인이 15초를 넘었습니다. 다시 삭제하지 말고 잠시 뒤 새로고침해 주세요."
    );
    if (studentsAfterResult.source !== "supabase") {
      throw new Error("학생 삭제 후 목록을 Supabase에서 다시 확인하지 못했습니다.");
    }
    if ((studentsAfterResult.students ?? []).some((student) => student.studentId === studentId)) {
      throw new Error("삭제 응답은 받았지만 Supabase 학생 목록에 대상이 남아 있습니다.");
    }

    setStudents(studentsAfterResult.students ?? []);
    if (options.forceDeleteWithReferences === true && options.deferReload !== true) {
      window.setTimeout(() => window.location.reload(), 1200);
    }
    return deleteResult;
  }

  function scheduleRecordAutoSave(record, lessonForRecord = null) {
    if (!record?.lessonStudentRecordId) return;
    const recordId = record.lessonStudentRecordId;
    const existingTimerId = autoSaveTimersRef.current.get(recordId);
    if (existingTimerId) clearTimeout(existingTimerId);
    autoSaveTimersRef.current.delete(recordId);
    setSaveStates((currentStates) => ({ ...currentStates, [recordId]: "dirty" }));
  }

  async function saveAttendanceRecord(lesson, student, values, updatedBy = "instructor_owner_001", options = {}) {
    const { nextAttendanceStatus, payload } = createManualAttendanceRequestPayload({
      lateGraceMinutes: attendanceSettings.lateGraceMinutes,
      lesson,
      options,
      student,
      updatedBy,
      values
    });
    return saveManualAttendanceAction({
      nextAttendanceStatus,
      onLesson: (nextLesson) => {
        setLessons((current) => upsertById(current, nextLesson, "lessonId"));
      },
      onNotificationJob: upsertNotificationJobState,
      onRecord: (nextRecord) => {
        const nextRecords = upsertLessonStudentRecord(recordsRef.current, nextRecord);
        recordsRef.current = nextRecords;
        setRecords(nextRecords);
      },
      options,
      payload,
      request: checkAttendanceRequest
    });
  }

  function handleChangeRecord(lesson, student, field, value) {
    const recordId = createLessonStudentRecordId(lesson.lessonId, student.studentId);
    const existingRecord = findLessonStudentRecord(recordsRef.current, lesson, student);
    const safeExistingRecord = getAttendanceDateMismatch(existingRecord, lesson)
      ? clearAttendanceFields(existingRecord)
      : existingRecord;
    const nextRecord = {
      lessonStudentRecordId: recordId,
      lessonId: lesson.lessonId,
      studentId: student.studentId,
      attendanceStatus: "pending",
      homeworkStatus: "not_started",
      behaviorTag: "",
      teacherComment: "",
      studentComment: "",
      needsMakeup: false,
      needsRetest: false,
      ...(safeExistingRecord ?? {}),
      [field]: value,
      ...(field === "assignmentStatus" ? { incompleteHomework: value } : {}),
      ...(field === "teacherComment" ? { teacherCommentSendStatus: "" } : {}),
      ...(field === "studentComment" ? { studentCommentSendStatus: "" } : {}),
      updatedBy: "instructor_owner_001",
      updatedAt: new Date().toISOString()
    };
    const nextRecords = upsertLessonStudentRecord(recordsRef.current, nextRecord);
    recordsRef.current = nextRecords;
    setRecords(nextRecords);

    if (field === "assignmentStatus") {
      syncPreviousHomeworkStatusFromAssignment(lesson, student, value);
    }

    scheduleRecordAutoSave(nextRecord, lesson);
  }

  async function ensurePersistedLesson(lesson, { markManualOverride = false } = {}) {
    if (!lesson?.isVirtualGeneratedLesson && !lesson?.isExamPrepAutoLesson) return lesson;
    const persistedLesson = {
      ...lesson,
      isExamPrepAutoLesson: undefined,
      isVirtualGeneratedLesson: undefined
    };
    if (markManualOverride) markGeneratedLessonManualOverride(lesson);
    setLessons((current) => upsertById(current, persistedLesson, "lessonId"));
    await postJson("/api/lessons", { lesson: persistedLesson });
    return persistedLesson;
  }

  function persistLessonNotificationPlans(nextPlans) {
    if (session?.role !== "teacher") return;
    getAppStatePersistenceController().save({
      lessonNotificationPlans: nextPlans
    });
  }

  function handleUpdateLessonNotificationPlan(lessonId, mode) {
    if (!lessonId) return;
    const lesson = lessons.find((item) => item.lessonId === lessonId);
    const nextMode = getIsClosureLesson(lesson) ? "none" : (mode || "default");
    const currentPlan = lessonNotificationPlans[lessonId];
    const nextPlans = {
      ...lessonNotificationPlans,
      [lessonId]: {
        ...(currentPlan ?? {}),
        autoRebuildEnabled: false,
        mode: nextMode,
        updatedAt: new Date().toISOString()
      }
    };
    setLessonNotificationPlans(nextPlans);
    persistLessonNotificationPlans(nextPlans);
  }

  async function handleApplyLessonNotificationPlan(lessonId) {
    const mode = lessonNotificationPlans[lessonId]?.mode || "default";
    return applyLessonNotificationPlan(lessonId, mode);
  }

  function getLessonNotificationJobId(lessonId, studentId, target) {
    return createLessonNotificationJobId(lessonId, studentId, target);
  }

  function getLessonStudentRecord(lesson, student) {
    return selectLessonStudentRecord({
      createEmptyRecord,
      findRecord: findLessonStudentRecord,
      lesson,
      records: recordsRef.current,
      student
    });
  }

  function buildLessonNotificationJob(lesson, student, target, scheduledDate, mode) {
    const recordId = createLessonStudentRecordId(lesson.lessonId, student.studentId);
    const record = getLessonStudentRecord(lesson, student);
    if (isLessonRecordNotificationMuted(record, target)) return null;
    const previousHomework = getLessonHomework(homeworks, lesson, student, "previous", lessons);
    const nextHomework = getLessonHomework(homeworks, lesson, student, "next");
    const audience = target === "student" ? "student" : "parent";
    const supplementSchedules = getStudentSupplementSchedules(makeupTasks, student.studentId, { lesson, mode: "lesson_comment" });
    const testResultLines = getLessonTestResultLines(testSessions, testAttempts, lesson, student);
    return createLessonNotificationJob({
      academyName: academyBrandName,
      audience,
      buildCommentPreview: buildCommentPreviewText,
      buildPayloadSnapshot: buildLessonReservationPayloadSnapshot,
      getAssignmentStatus: getAssignmentStatusForMessage,
      getAssignmentStatusMessage,
      getAssignmentStatusParentMessage,
      getAssignmentStatusStudentMessage,
      getJobId: getLessonNotificationJobId,
      getLessonContent,
      getLessonMaterial,
      getPayloadFingerprint: getLessonReservationPayloadFingerprint,
      lesson,
      mode,
      nextHomework,
      notificationTemplates: aiSettings.notificationTemplates,
      nowIso: new Date().toISOString(),
      previousHomework,
      record,
      recordId,
      scheduledDate,
      student,
      supplementSchedules,
      testResultLines
    });
  }

  function updateLessonNotificationRecordStatuses(lesson, statusText) {
    const lessonStudentsForRecords = getActiveLessonStudents(lesson, students);
    const updatedAt = new Date().toISOString();
    const recordsToSave = createLessonNotificationRecordStatusRows({
      createRecordId: createLessonStudentRecordId,
      getRecord: getLessonStudentRecord,
      lesson,
      statusText,
      students: lessonStudentsForRecords,
      updatedAt
    });
    if (recordsToSave.length === 0) return;
    const nextRecords = recordsToSave.reduce(
      (currentRecords, record) => upsertLessonStudentRecord(currentRecords, record),
      recordsRef.current
    );
    recordsRef.current = nextRecords;
    setRecords(nextRecords);
    const savingStates = createLessonJournalRecordSaveStates(recordsToSave, "saving");
    setSaveStates((currentStates) => ({ ...currentStates, ...savingStates }));
    Promise.all(recordsToSave.map((record) =>
      patchLessonRecordNotificationStatusRequest(createLessonNotificationRecordStatusPayload(record))
    ))
      .then(() => {
        const savedStates = createLessonJournalRecordSaveStates(recordsToSave, "saved");
        setSaveStates((currentStates) => ({ ...currentStates, ...savedStates }));
      })
      .catch((error) => {
        console.error(error);
        const failedStates = createLessonJournalRecordSaveStates(recordsToSave, "failed");
        setSaveStates((currentStates) => ({ ...currentStates, ...failedStates }));
      });
  }

  function upsertNotificationJobState(notificationJob) {
    if (!notificationJob?.notificationJobId) return;
    setNotificationJobs((current) => upsertNotificationJobList(current, notificationJob));
  }

  async function reserveNotificationJob(notificationJob, reason = "알림톡 예약") {
    return reserveNotificationJobRequest({
      notificationJob,
      reason,
      onNotificationJob: upsertNotificationJobState,
      request: postJson
    });
  }

  async function reserveLessonNotificationJob(notificationJob, reason = "수업일지 예약") {
    return reserveNotificationJob(notificationJob, reason);
  }

  async function reserveLessonNotificationJobs(notificationJobsToReserve = [], reason = "수업일지 일괄 예약") {
    if (!notificationJobsToReserve.length) return [];
    try {
      const result = await postJson("/api/notification-jobs/reserve-bulk", {
        concurrency: 4,
        notificationJobs: notificationJobsToReserve,
        reason
      });
      const reservedJobs = Array.isArray(result.notificationJobs) ? result.notificationJobs : [];
      mergeNotificationJobsIntoState(reservedJobs);
      return reservedJobs;
    } catch (error) {
      const failedJobs = notificationJobsToReserve.map((notificationJob) => ({
        ...notificationJob,
        error: `Solapi 일괄 예약 확인 실패: ${error.message}`,
        provider: "academy-os",
        status: "failed",
        updatedAt: new Date().toISOString()
      }));
      mergeNotificationJobsIntoState(failedJobs);
      return failedJobs;
    }
  }

  async function reserveSupplementStudentReminder(task) {
    const student = students.find((item) => item.studentId === task.studentId);
    return reserveSupplementStudentReminderJobRequest({
      academyName: academyBrandName,
      formatScheduledAt: formatKoreaTimeLabel,
      getScheduleTitle: getSupplementStudentReminderTitle,
      isSchedulePast: isNotificationSchedulePast,
      normalizeMessage: normalizeMessageText,
      reserveNotificationJob,
      student,
      task,
      teacherEditedDraft: isSupplementTeacherEditedField(task, "notificationDraft")
    });
  }

  async function cancelActiveSupplementScheduleNoticeJobs(task, reason = "보충 일정 안내 예약 갱신") {
    return cancelActiveSupplementScheduleNoticesRequest({
      cancelNotificationJob: handleCancelNotificationJob,
      cancelNotificationJobs: cancelNotificationJobsRequest,
      notificationJobs,
      reason,
      task
    });
  }

  async function reserveSupplementScheduleNoticeJob(notificationJob, missingMessagePrefix) {
    return reserveSupplementScheduleNoticeJobRequest({
      formatScheduledAt: formatKoreaTimeLabel,
      missingMessagePrefix,
      normalizeRecipient: normalizePhoneNumber,
      notificationJob,
      persistFailure: persistSupplementScheduleNoticeFailure,
      reserveNotificationJob
    });
  }

  async function reserveSupplementScheduleNotices(task, student, previousScheduleText = "") {
    return reserveSupplementScheduleNoticesRequest({
      academyName: academyBrandName,
      cancelActiveNotices: cancelActiveSupplementScheduleNoticeJobs,
      getNoticeDraft: getSupplementScheduleNoticeDraft,
      getScheduleTitle: getSupplementStudentReminderTitle,
      notificationTemplates: aiSettings.notificationTemplates,
      previousScheduleText,
      reserveScheduleNoticeJob: reserveSupplementScheduleNoticeJob,
      student,
      task
    });
  }

  async function handleReserveSupplementNotificationControl(task, controlType) {
    const student = students.find((item) => item.studentId === task.studentId);
    return reserveSupplementNotificationControlRequest({
      academyName: academyBrandName,
      cancelNotificationJob: handleCancelNotificationJob,
      cancelNotificationJobs: cancelNotificationJobsRequest,
      controlType,
      getDraftField: getSupplementNotificationDraftFieldForControl,
      getNoticeDraft: getSupplementScheduleNoticeDraft,
      getScheduleTitle: getSupplementStudentReminderTitle,
      isTeacherEditedField: isSupplementTeacherEditedField,
      notificationJobs,
      notificationTemplates: aiSettings.notificationTemplates,
      reserveScheduleNoticeJob: reserveSupplementScheduleNoticeJob,
      reserveStudentReminder: reserveSupplementStudentReminder,
      student,
      task
    });
  }

  async function handleCancelSupplementNotificationControl(notificationJob) {
    return cancelSupplementNotificationControlRequest({
      canCancelNotificationJob,
      cancelNotificationJob: handleCancelNotificationJob,
      notificationJob
    });
  }

  function persistSupplementScheduleNoticeFailure(notificationJob, messagePrefix, errorMessage) {
    const failedJob = persistFailedNotificationJobRequest({
      errorMessage,
      notificationJob,
      onNotificationJob: upsertNotificationJobState,
      request: postJson
    });
    return {
      notificationJob: failedJob,
      skipped: false,
      status: "failed",
      message: `${messagePrefix}: ${errorMessage}`
    };
  }

  async function cancelSupplementStudentReminder(task, reason = "보충 완료 처리") {
    return cancelSupplementStudentReminderRequest({
      cancelNotificationJob: handleCancelNotificationJob,
      isActiveNotificationJob,
      notificationJobs,
      onError: (error) => console.error("Failed to cancel supplement student reminder", error),
      reason,
      task
    });
  }

  async function persistCanceledNotificationJob(notificationJob, reason = "알림 제외") {
    if (!notificationJob?.notificationJobId) return null;
    try {
      const result = await handleCancelNotificationJob(notificationJob, reason);
      return result.notificationJob ?? notificationJob;
    } catch (error) {
      const fallbackJob = {
        ...notificationJob,
        error: reason,
        status: "canceled",
        updatedAt: new Date().toISOString()
      };
      postJson("/api/notification-jobs", { notificationJob: fallbackJob }).catch((persistError) => console.error(persistError));
      return fallbackJob;
    }
  }

  function cancelActiveLessonNotificationJobs(lesson, reason = "수업 학생 없음") {
    const canceledJobs = notificationJobs
      .filter((job) => job.lessonId === lesson.lessonId)
      .filter((job) => !["sent", "dry_run", "failed", "canceled"].includes(job.status))
      .map((job) => ({ ...job, status: "canceled", error: reason, updatedAt: new Date().toISOString() }));
    if (canceledJobs.length === 0) return [];
    setNotificationJobs((current) =>
      replaceNotificationJobListRows(current, canceledJobs)
    );
    canceledJobs.forEach((notificationJob) => {
      persistCanceledNotificationJob(notificationJob, reason).catch((error) => console.error(error));
    });
    return canceledJobs;
  }

  function refreshLessonNotificationJobsForRecord(record, lessonForRecord = null) {
    const lesson = lessonForRecord ?? lessons.find((item) => item.lessonId === record?.lessonId);
    if (!lesson?.lessonId) return;
    const planMode = lessonNotificationPlans[lesson.lessonId]?.mode || "default";
    if (planMode === "none") return;
    const currentPlan = lessonNotificationPlans[lesson.lessonId];
    const student = students.find((item) => item.studentId === record?.studentId);
    if (!student || !(lesson.studentIds ?? []).includes(student.studentId)) return;
    const delayMinutes = planMode === "delay30" ? 30 : 0;
    const scheduledDate = planMode === "manual"
      ? currentPlan?.scheduledAt
      : getLessonAlimtalkScheduledDate(lesson, delayMinutes);
    if (!scheduledDate) return;
    if (planMode === "manual") {
      if (isNotificationSchedulePast(scheduledDate, 0)) return;
    } else if (isLessonAlimtalkScheduleExpired(lesson, delayMinutes)) {
      return;
    }

    const nextJobs = buildLessonNotificationJobs(lesson, [student], scheduledDate, planMode);
    const nextJobIds = new Set(nextJobs.map((job) => job.notificationJobId));
    const canceledJobs = notificationJobs
      .filter((job) => job.lessonId === lesson.lessonId && job.studentId === student.studentId && !nextJobIds.has(job.notificationJobId))
      .filter(isActiveNotificationJob)
      .map((job) => ({ ...job, status: "canceled", error: "알림 제외", updatedAt: new Date().toISOString() }));
    setNotificationJobs((current) =>
      mergeNotificationJobLists(current, [...nextJobs, ...canceledJobs])
    );
    nextJobs.forEach((notificationJob) => {
      reserveLessonNotificationJob(notificationJob, "수업일지 학생별 예약 갱신").catch((error) => console.error(error));
    });
    canceledJobs.forEach((notificationJob) => {
      persistCanceledNotificationJob(notificationJob, "알림 제외").catch((error) => console.error(error));
    });
  }

  function cancelNotificationJobs(jobIds, reason = "알림 제외") {
    const canceledJobs = notificationJobs
      .filter((job) => jobIds.has(job.notificationJobId))
      .filter((job) => !["sent", "dry_run", "failed", "canceled"].includes(job.status))
      .map((job) => ({ ...job, status: "canceled", error: reason, updatedAt: new Date().toISOString() }));
    if (!canceledJobs.length) return [];
    setNotificationJobs((current) =>
      replaceNotificationJobListRows(current, canceledJobs)
    );
    canceledJobs.forEach((notificationJob) => {
      persistCanceledNotificationJob(notificationJob, reason).catch((error) => console.error(error));
    });
    return canceledJobs;
  }

  function isActiveNotificationJob(job = {}) {
    return isActiveNotificationJobStatus(job);
  }

  function buildLessonNotificationJobs(lesson, lessonStudents, scheduledDate, mode) {
    return createLessonNotificationJobBatch({
      buildJob: buildLessonNotificationJob,
      isClosureLesson: getIsClosureLesson,
      lesson,
      mode,
      scheduledDate,
      students: lessonStudents
    });
  }

  async function applyLessonNotificationPlan(lessonId, mode) {
    const lesson = lessons.find((item) => item.lessonId === lessonId);
    if (!lesson) return { ok: false, error: "수업을 찾지 못했습니다." };
    const effectiveMode = getIsClosureLesson(lesson) ? "none" : mode;
    const lessonStudents = getActiveLessonStudents(lesson, students);
    if (lessonStudents.length === 0) {
      cancelActiveLessonNotificationJobs(lesson, "수업 학생 없음");
      return { ok: true, canceledCount: 0, reservedCount: 0 };
    }
    if (effectiveMode === "none") {
      const canceledJobs = notificationJobs
        .filter((job) => job.lessonId === lesson.lessonId)
        .filter(isActiveNotificationJob)
        .map((job) => ({ ...job, status: "canceled", error: "", updatedAt: new Date().toISOString() }));
      if (canceledJobs.length) {
        setNotificationJobs((current) =>
          replaceNotificationJobListRows(current, canceledJobs)
        );
      }
      updateLessonNotificationRecordStatuses(lesson, "알림톡 없음");
      await Promise.all(canceledJobs.map((notificationJob) => persistCanceledNotificationJob(notificationJob, "알림톡 없음")));
      return { ok: true, canceledCount: canceledJobs.length, reservedCount: 0 };
    }

    const delayMinutes = effectiveMode === "delay30" ? 30 : 0;
    if (isLessonAlimtalkScheduleExpired(lesson, delayMinutes)) {
      updateLessonNotificationRecordStatuses(lesson, "예약 시간 지남");
      return { ok: false, error: "예약 시간이 이미 지났습니다." };
    }
    const scheduledDate = getLessonAlimtalkScheduledDate(lesson, delayMinutes);
    const scheduledLabel = formatKoreaTimeLabel(scheduledDate);
    const nextJobs = buildLessonNotificationJobs(lesson, lessonStudents, scheduledDate, effectiveMode);
    const nextJobIds = new Set(nextJobs.map((job) => job.notificationJobId));
    const canceledJobs = notificationJobs
      .filter((job) => job.lessonId === lesson.lessonId && !nextJobIds.has(job.notificationJobId))
      .filter(isActiveNotificationJob)
      .map((job) => ({ ...job, status: "canceled", error: "알림 제외", updatedAt: new Date().toISOString() }));
    setNotificationJobs((current) =>
      mergeLessonNotificationJobLists({
        canceledJobs,
        currentJobs: current,
        isActiveJob: isActiveNotificationJob,
        lessonId: lesson.lessonId,
        nextJobs
      })
    );
    updateLessonNotificationRecordStatuses(lesson, `예약 중 · ${scheduledLabel}`);
    const reservedJobs = await reserveLessonNotificationJobs(nextJobs, "수업일지 반 전체 예약");
    await Promise.all(canceledJobs.map((notificationJob) => persistCanceledNotificationJob(notificationJob, "알림 제외")));
    return {
      ok: !reservedJobs.some((job) => job?.status === "failed"),
      canceledCount: canceledJobs.length,
      reservedCount: reservedJobs.filter((job) => job?.status === "scheduled").length
    };
  }

  function scheduleLessonNotificationsAt(lesson, scheduledDate, mode = "manual") {
    if (!lesson?.lessonId || !scheduledDate) return;
    if (getIsClosureLesson(lesson)) return;
    const lessonStudents = getActiveLessonStudents(lesson, students);
    if (lessonStudents.length === 0) {
      cancelActiveLessonNotificationJobs(lesson, "수업 학생 없음");
      return;
    }
    const nextJobs = buildLessonNotificationJobs(lesson, lessonStudents, scheduledDate, mode);
    const nextJobIds = new Set(nextJobs.map((job) => job.notificationJobId));
    const canceledJobs = notificationJobs
      .filter((job) => job.lessonId === lesson.lessonId && !nextJobIds.has(job.notificationJobId))
      .filter(isActiveNotificationJob)
      .map((job) => ({ ...job, status: "canceled", error: "알림 제외", updatedAt: new Date().toISOString() }));
    const scheduledLabel = formatKoreaTimeLabel(scheduledDate);
    setNotificationJobs((current) =>
      mergeLessonNotificationJobLists({
        canceledJobs,
        currentJobs: current,
        isActiveJob: isActiveNotificationJob,
        lessonId: lesson.lessonId,
        nextJobs
      })
    );
    reserveLessonNotificationJobs(nextJobs, "수업일지 수동 시각 예약").catch((error) => console.error(error));
    canceledJobs.forEach((notificationJob) => {
      persistCanceledNotificationJob(notificationJob, "알림 제외").catch((error) => console.error(error));
    });
    updateLessonNotificationRecordStatuses(lesson, `예약 중 · ${scheduledLabel}`);
  }

  function handleScheduleLessonNotificationsAt(lessonId, scheduledDate) {
    const lesson = calendarLessons.find((item) => item.lessonId === lessonId) ?? lessons.find((item) => item.lessonId === lessonId);
    if (!lesson || getIsClosureLesson(lesson)) return;
    const nextPlans = {
      ...lessonNotificationPlans,
      [lesson.lessonId]: {
        mode: "manual",
        scheduledAt: scheduledDate,
        updatedAt: new Date().toISOString()
      }
    };
    setLessonNotificationPlans(nextPlans);
    persistLessonNotificationPlans(nextPlans);
    scheduleLessonNotificationsAt(lesson, scheduledDate, "manual");
  }

  function handleToggleStudentNotificationMute(lesson, student, target, reason = "") {
    if (!lesson?.lessonId || !student?.studentId) return;
    const recordId = createLessonStudentRecordId(lesson.lessonId, student.studentId);
    const existingRecord = getLessonStudentRecord(lesson, student);
    const field = target === "student" ? "notificationMutedStudent" : "notificationMutedParent";
    const statusField = target === "student" ? "studentCommentSendStatus" : "teacherCommentSendStatus";
    const nextMuted = !Boolean(existingRecord?.[field]);
    const nextRecord = {
      ...createEmptyRecord(lesson, student),
      ...(existingRecord ?? {}),
      lessonStudentRecordId: recordId,
      lessonId: lesson.lessonId,
      studentId: student.studentId,
      [field]: nextMuted,
      notificationMutedReason: nextMuted ? (reason || existingRecord.notificationMutedReason || "개별 알림 제외") : existingRecord.notificationMutedReason,
      [statusField]: nextMuted ? "알림 제외" : "",
      updatedBy: "instructor_owner_001",
      updatedAt: new Date().toISOString()
    };
    const nextRecords = upsertLessonStudentRecord(recordsRef.current, nextRecord);
    recordsRef.current = nextRecords;
    setRecords(nextRecords);
    handleSaveRecord(recordId, lesson, student, nextRecord, {
      skipNotificationRefresh: true,
      skipRelatedHomeworks: true
    });
  }

  function syncPreviousHomeworkStatusFromAssignment(lesson, student, assignmentStatus) {
    if (isAssignmentStatusUnrecorded(assignmentStatus)) return;
    const homeworkStatus = getHomeworkStatusFromAssignmentStatus(assignmentStatus);
    const normalizedAssignmentStatus = normalizeAssignmentStatusValue(assignmentStatus);
    setHomeworks((current) => {
      const previousHomework = getLessonHomework(current, lesson, student, "previous", lessons);
      if (!previousHomework?.homeworkId || !previousHomework.title?.trim()) return current;

      const existing = current.find((homework) => homework.homeworkId === previousHomework.homeworkId);
      if (!existing) return current;

      const checkedFields = {
        status: homeworkStatus.status,
        teacherStatus: homeworkStatus.teacherStatus,
        assignmentStatus: normalizedAssignmentStatus,
        incompleteHomework: normalizedAssignmentStatus,
        checkedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      const nextHomework = {
        ...existing,
        ...checkedFields,
        dueDate: existing.dueDate || lesson.date,
      };
      const sourceHomework = current.find(
        (homework) =>
          homework.homeworkType === "next" &&
          homework.studentId === student.studentId &&
          homework.lessonId === (existing.linkedFromLessonId || previousHomework.linkedFromLessonId) &&
          String(homework.title ?? "").trim() === String(existing.title ?? "").trim()
      );
      const updatedSourceHomework = sourceHomework
        ? {
            ...sourceHomework,
            ...checkedFields,
            dueDate: sourceHomework.dueDate || lesson.date
          }
        : null;

      const changedHomeworks = updatedSourceHomework ? [nextHomework, updatedSourceHomework] : [nextHomework];
      changedHomeworks.forEach((homework) => dirtyHomeworkIdsRef.current.add(homework.homeworkId));
      return current.map((homework) => {
        if (homework.homeworkId === nextHomework.homeworkId) return nextHomework;
        if (updatedSourceHomework && homework.homeworkId === updatedSourceHomework.homeworkId) return updatedSourceHomework;
        return homework;
      });
    });
  }

  function buildHomeworkDraftUpdate(currentHomeworks, lesson, student, homeworkType, title) {
    const existingId = `homework_${homeworkType}_${lesson.date}_${student.studentId}`;
    const existing = currentHomeworks.find(
      (homework) =>
        homework.lessonId === lesson.lessonId &&
        homework.studentId === student.studentId &&
        homework.homeworkType === homeworkType
    );
    const nextHomework = {
      ...(existing ?? {}),
      homeworkId: existing?.homeworkId ?? existingId,
      lessonId: lesson.lessonId,
      studentId: student.studentId,
      title,
      subject: existing?.subject ?? "노션 수업 DB",
      homeworkType,
      totalProblems: existing?.totalProblems ?? null,
      status: existing?.status ?? (homeworkType === "previous" ? "verified" : "assigned"),
      studentStatus: existing?.studentStatus ?? "not_started",
      teacherStatus: existing?.teacherStatus ?? "unverified",
      assignedDate: lesson.date,
      dueDate: existing?.dueDate ?? ""
    };

    const updatedHomeworks = existing
      ? currentHomeworks.map((homework) => (homework.homeworkId === existing.homeworkId ? nextHomework : homework))
      : [nextHomework, ...currentHomeworks];

    if (homeworkType !== "next") {
      return { changedHomeworks: [nextHomework], homeworks: updatedHomeworks };
    }

    const linkedPreviousHomework = createLinkedPreviousHomework(
      updatedHomeworks,
      lessons,
      lesson,
      student,
      nextHomework
    );

    if (!linkedPreviousHomework) {
      return { changedHomeworks: [nextHomework], homeworks: updatedHomeworks };
    }

    const withLinkedPrevious = updatedHomeworks.some((homework) => homework.homeworkId === linkedPreviousHomework.homeworkId)
      ? updatedHomeworks.map((homework) =>
          homework.homeworkId === linkedPreviousHomework.homeworkId ? linkedPreviousHomework : homework
        )
      : [linkedPreviousHomework, ...updatedHomeworks];

    return { changedHomeworks: [nextHomework, linkedPreviousHomework], homeworks: withLinkedPrevious };
  }

  function handleUpdateHomework(lesson, student, homeworkType, title) {
    setHomeworks((current) => {
      const result = buildHomeworkDraftUpdate(current, lesson, student, homeworkType, title);
      result.changedHomeworks.forEach((homework) => dirtyHomeworkIdsRef.current.add(homework.homeworkId));
      return result.homeworks;
    });
    const recordId = createLessonStudentRecordId(lesson.lessonId, student.studentId);
    setSaveStates((currentStates) => ({ ...currentStates, [recordId]: "dirty" }));
  }

  async function saveDirtyHomeworks() {
    const dirtyIds = Array.from(dirtyHomeworkIdsRef.current);
    if (!dirtyIds.length) return true;
    const dirtyIdSet = new Set(dirtyIds);
    const homeworksToSave = homeworksRef.current.filter((homework) => dirtyIdSet.has(homework.homeworkId));
    if (!homeworksToSave.length) {
      dirtyHomeworkIdsRef.current.clear();
      return true;
    }
    await postJson("/api/homeworks/bulk", { homeworks: homeworksToSave });
    homeworksToSave.forEach((homework) => dirtyHomeworkIdsRef.current.delete(homework.homeworkId));
    writeStorageValue(window.localStorage, storageKeys.homeworks, JSON.stringify(homeworksRef.current));
    return true;
  }

  async function handleSaveLessonJournalDrafts(lesson, recordDrafts = [], homeworkDrafts = [], makeupTaskDrafts = []) {
    if (!lesson?.lessonId) return { ok: false, message: "수업일지 · 저장 실패 · 수업 ID 없음" };
    const persistencePlan = createLessonJournalDraftPersistencePlan({
      currentHomeworks: homeworksRef.current,
      homeworkDrafts,
      lesson,
      lessons,
      recordDrafts,
      students,
      dependencies: {
        buildHomeworkDraftUpdate,
        getHomeworkStatusFromAssignmentStatus,
        getLessonHomework,
        isAssignmentStatusUnrecorded,
        normalizeAssignmentStatusValue
      }
    });
    let nextHomeworks = persistencePlan.nextHomeworks;
    const recordsToSave = persistencePlan.recordsToSave;

    const savingStates = createLessonJournalRecordSaveStates(recordsToSave, "saving");
    if (recordsToSave.length) {
      setSaveStates((currentStates) => ({ ...currentStates, ...savingStates }));
    }

    return executeLessonJournalDraftPersistence({
      hasRecords: recordsToSave.length > 0,
      persistHomeworks: async () => {
        const verifiedHomeworks = await saveLessonJournalHomeworksWithVerification({
          homeworks: persistencePlan.changedHomeworks,
          request: postJson
        });
        if (verifiedHomeworks.length) {
          nextHomeworks = mergeVerifiedLessonJournalHomeworks({
            plannedHomeworks: nextHomeworks,
            verifiedHomeworks
          });
          homeworksRef.current = nextHomeworks;
          setHomeworks(nextHomeworks);
        }
        return verifiedHomeworks.length;
      },
      persistMakeupTasks: async () => {
        const requestedTasks = createLessonJournalMakeupTaskRequests({
          currentTasks: makeupTasks,
          idSeed: Date.now(),
          taskDrafts: makeupTaskDrafts,
          timestamps: makeupTaskDrafts.map(() => new Date().toISOString()),
          today
        });
        const verifiedTasks = await saveLessonJournalMakeupTasksWithVerification({
          requestedTasks,
          request: postMakeupTasks
        });
        if (verifiedTasks.length) {
          setMakeupTasks((currentTasks) => mergeVerifiedLessonJournalMakeupTasks({
            currentTasks,
            verifiedTasks,
            upsertTask: (tasks, task) => upsertById(tasks, task, "makeupTaskId")
          }));
        }
        return verifiedTasks.length;
      },
      persistRecords: async () => {
        const verifiedRecords = await saveLessonJournalRecordsWithVerification({
          records: recordsToSave,
          request: postJson,
          matchesRecord: hasMatchingVerifiedLessonRecordFields
        });
        const nextRecords = mergeVerifiedLessonJournalRecords({
          currentRecords: recordsRef.current,
          verifiedRecords,
          upsertRecord: upsertLessonStudentRecord
        });
        recordsRef.current = nextRecords;
        setRecords(nextRecords);
        writeStorageValue(window.localStorage, storageKeys.records, JSON.stringify(nextRecords));
        const savedStates = createLessonJournalRecordSaveStates(recordsToSave, "saved");
        setSaveStates((currentStates) => ({ ...currentStates, ...savedStates }));
        return verifiedRecords.length;
      },
      onFailure: (error) => {
        console.error(error);
        const failedStates = createLessonJournalRecordSaveStates(recordsToSave, "failed");
        if (recordsToSave.length) {
          setSaveStates((currentStates) => ({ ...currentStates, ...failedStates }));
        }
      }
    });
  }

  async function handleSaveRecord(recordId, lessonForRecord = null, studentForRecord = null, recordOverride = null, options = {}) {
    const { skipNotificationRefresh = true, skipRelatedHomeworks = false, verifyFields = [] } = options;
    const existingTimerId = autoSaveTimersRef.current.get(recordId);
    if (existingTimerId) {
      clearTimeout(existingTimerId);
      autoSaveTimersRef.current.delete(recordId);
    }
    setSaveStates((currentStates) => ({ ...currentStates, [recordId]: "saving" }));

    try {
      if (lessonForRecord?.isVirtualGeneratedLesson || lessonForRecord?.isExamPrepAutoLesson) {
        await ensurePersistedLesson(lessonForRecord);
      }
      let record =
        recordOverride ??
        (lessonForRecord && studentForRecord ? findLessonStudentRecord(recordsRef.current, lessonForRecord, studentForRecord) : null) ??
        recordsRef.current.find((item) => item.lessonStudentRecordId === recordId) ??
        (lessonForRecord && studentForRecord ? createEmptyRecord(lessonForRecord, studentForRecord) : null);
      if (!record) throw new Error("저장할 수업기록을 찾지 못했습니다.");
      if (lessonForRecord && getAttendanceDateMismatch(record, lessonForRecord)) {
        record = clearAttendanceFields(record);
      }
      const relatedHomeworks = skipRelatedHomeworks
        ? []
        : homeworksRef.current.filter(
            (homework) => homework.lessonId === record.lessonId && homework.studentId === record.studentId
          );

      const saveResult = await postJson("/api/lesson-records", { record });
      let savedRecord = saveResult?.record;
      if (!savedRecord || !hasMatchingVerifiedLessonRecordFields(record, savedRecord)) {
        throw new Error("수업기록 저장 후 Supabase 재조회 값이 일치하지 않습니다.");
      }
      if (verifyFields.length > 0) {
        const recordsAfterResult = await getJsonWithTimeout(
          "/api/lesson-records",
          15000,
          "수업기록 저장 확인이 15초를 넘었습니다. 중복 저장하지 말고 잠시 뒤 다시 확인해 주세요."
        );
        const requeriedRecord = (recordsAfterResult.records ?? []).find((item) => item.lessonStudentRecordId === recordId);
        const mismatchedField = verifyFields.find((fieldKey) => (
          String(requeriedRecord?.[fieldKey] ?? "") !== String(record?.[fieldKey] ?? "")
        ));
        if (!requeriedRecord || mismatchedField) {
          throw new Error(`수업기록 저장 후 Supabase 재조회에서 ${mismatchedField || "최종 문구"} 값이 일치하지 않습니다.`);
        }
        savedRecord = requeriedRecord;
      }
      if (relatedHomeworks.length > 0) {
        await postJson("/api/homeworks/bulk", { homeworks: relatedHomeworks });
      }
      const latestRecord = findMatchingLessonStudentRecord(recordsRef.current, record);
      const latestTime = latestRecord?.updatedAt ? Date.parse(latestRecord.updatedAt) : 0;
      const savedTime = record.updatedAt ? Date.parse(record.updatedAt) : Date.now();
      const isLatestRecord = !recordOverride || !latestRecord || !latestTime || !savedTime || latestTime <= savedTime;
      if (isLatestRecord) {
        const nextRecords = upsertLessonStudentRecord(recordsRef.current, savedRecord);
        recordsRef.current = nextRecords;
        setRecords(nextRecords);
      }
      writeStorageValue(window.localStorage, storageKeys.records, JSON.stringify(recordsRef.current));
      writeStorageValue(window.localStorage, storageKeys.homeworks, JSON.stringify(homeworksRef.current));
      if (isLatestRecord) {
        setSaveStates((currentStates) => ({ ...currentStates, [recordId]: "saved" }));
      }
      if (!skipNotificationRefresh) {
        refreshLessonNotificationJobsForRecord(savedRecord, lessonForRecord);
      }
      return true;
    } catch (error) {
      console.error(error);
      setSaveStates((currentStates) => ({ ...currentStates, [recordId]: "failed" }));
      return false;
    }
  }

  function handleSaveReportSnapshot(snapshot) {
    setReportSnapshots((current) => [snapshot, ...current]);
  }

  function handleChangeView(nextView) {
    const plan = createAppViewChangePlan(nextView);
    setActiveView(plan.activeView);
    setIsMobileNavigationOpen(plan.mobileNavigationOpen);
    if (plan.shouldScrollToTop && typeof window !== "undefined") {
      window.scrollTo({ behavior: "auto", left: 0, top: 0 });
    }
    if (plan.lessonJournalOpen !== null) {
      setIsLessonJournalOpen(plan.lessonJournalOpen);
    }
  }

  function handleOpenAddLesson() {
    setIsLessonModalOpen(true);
  }

  function handleOpenMonthlyRegularLessonModal() {
    setMonthlyRegularLessonOpenStatus({ message: "", state: "idle" });
    setIsMonthlyRegularLessonOpenModal(true);
  }

  function handleEditLesson(lesson) {
    setEditingLesson(lesson);
    setIsLessonModalOpen(true);
  }

  function handleBackToCalendar() {
    setIsLessonJournalOpen(false);
  }

  function handleOpenExamPrepView() {
    handleChangeView("examPrep");
  }

  function handleOpenAddStudent() {
    setIsStudentModalOpen(true);
  }

  function handleOpenExamPostSubmissionFile(file) {
    return handleOpenExamPostFile(session?.sessionToken, file);
  }

  function handleEnsureExamCycleRows(examCycle, classTemplateId) {
    setExamPrepRows((current) => {
      const nextRowsToAdd = buildExamPrepRowsFromStudents(students, examCycle, classTemplateId, current);
      const nextRows = mergeById(current, nextRowsToAdd, "examPrepId");
      const addedRows = nextRows.filter((row) => !current.some((item) => item.examPrepId === row.examPrepId));
      if (addedRows.length > 0) persistExamPrepRows(addedRows);
      return nextRows;
    });
  }

  async function handleSaveSchoolEvent(event) {
    const nextEvent = {
      ...event,
      eventId: event.eventId || `event_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
    };
    setSchoolEvents((current) => upsertById(current, nextEvent, "eventId"));
    const result = await postSchoolEvent(nextEvent);
    const savedEvent = result.schoolEvent ?? nextEvent;
    setSchoolEvents((current) => upsertById(current, savedEvent, "eventId"));
    return savedEvent;
  }

  async function handleDeleteSchoolEvent(eventId) {
    setSchoolEvents((current) => current.filter((event) => event.eventId !== eventId));
    await deleteSchoolEventFromApi(eventId);
    return eventId;
  }

  function handleAddLessonResearchItem(subject, typeInfo) {
    setLessonResearchItems((current) => [createLessonResearchItem(subject, typeInfo), ...current]);
  }

  function handleDeleteLessonResearchItem(researchItemId) {
    setLessonResearchItems((current) => current.filter((item) => item.researchItemId !== researchItemId));
  }

  function handleUpdateLessonResearchItem(researchItemId, field, value) {
    setLessonResearchItems((current) => current.map((item) => (
      item.researchItemId === researchItemId ? { ...item, [field]: value, updatedAt: today } : item
    )));
  }

  function handleRefreshNotificationHistory({ date = "" } = {}) {
    return refreshNotificationJobs({ date, scope: "history" });
  }

  function handleRefreshActiveNotificationJobs() {
    return refreshNotificationJobs({ scope: "active" });
  }

  function handleAddWrongProblem(studentId) {
    setWrongProblems((current) => [
      {
        wrongProblemId: `wrong_${Date.now()}_${studentId}`,
        studentId,
        source: "",
        problemRange: "",
        status: "open",
        note: ""
      },
      ...current
    ]);
  }

  function handleUpdateWrongProblem(wrongProblemId, field, value) {
    setWrongProblems((current) => current.map((item) => (
      item.wrongProblemId === wrongProblemId ? { ...item, [field]: value } : item
    )));
  }

  const teacherViewAdapters = createTeacherViewAdapters({
    components: {
      ...lazyTeacherViewComponents,
      Modal,
    },
    runtimeBindings: {
      examAnalysisPipeline: examAnalysisPipelineRuntime,
      examPrepCenter: examPrepCenterRuntime,
      learningSupport: learningSupportRuntime,
      lessonJournalTransport,
      notificationCenter: notificationCenterRuntime,
      planningTools: planningToolRuntime,
      settingsCenter: settingsCenterRuntime,
      SpecialLectureNoticePanel: lazyTeacherViewComponents.SpecialLectureNoticePanel,
      teacherLessonHub: teacherLessonHubRuntime
    },
    models: {
      academyReminders,
      academyTests,
      academyTestSaveState,
      aiSettings,
      appStateSaveState,
      attendanceSettings,
      attendanceSyncStatus,
      calendarLessons,
      classTemplates,
      examPostConfirmSaveStates,
      examPostSubmissions,
      examPostTargetStudentIds,
      examPrepRows,
      examPrepRowSaveStates,
      generatedLessonSaveStatus,
      homeworks,
      integrationStatus,
      isLessonJournalOpen,
      isMonthlyRegularLessonOpened,
      lessonClipboard,
      lessonNotificationPlans,
      lessonResearchItems,
      lessons,
      lessonsForDate,
      lessonUndoStack,
      makeupTasks,
      monthlyInstructorSettlements,
      monthlyRegularLessonOpenPlan,
      monthlySettlementSaveState,
      notificationJobs,
      notificationJobsStatus,
      notificationLogs,
      problemBooks,
      records,
      reportSnapshots,
      resourceMaterials,
      saveStates,
      schoolEvents,
      scoreRecords,
      scoreRecordSaveState,
      selectedDate,
      selectedLesson,
      selectedLessonId,
      specialLectureApplications,
      specialLectureEnrollments,
      specialLectureGuides,
      specialLectureGuideSaveState,
      specialLectureInstructorSettlements,
      specialLectureSettlementSaveState,
      studentConsultations,
      studentConsultationSaveState,
      studentIntakeApplicants,
      studentProfileSaveStates,
      students,
      supplementCenterDependencies,
      tallySubmissions,
      tallySummaries,
      teacherAccountSettings,
      teacherOperatingMemos,
      teacherOperatingMemoSaveStates,
      testAttempts,
      testResultSaveState,
      testSessions,
      wrongProblems
    },
    actions: {
      handleAddLessonResearchItem,
      handleAddProblemBookFromFile,
      handleAddResourceMaterial,
      handleAddWrongProblem,
      handleApplyLessonNotificationPlan,
      handleAssignHomeworkFromTask,
      handleAuditWithdrawnStudentDeletion,
      handleBackToCalendar,
      handleCalendarMonthShift,
      handleCalendarMove,
      handleCancelAbsenceMakeupKeepSource,
      handleCancelAbsenceMakeupSource,
      handleCancelNotificationJob,
      handleCancelSupplementNotificationControl,
      handleChangeRecord,
      handleConfirmExamPostSubmission,
      handleCopySelectedLesson,
      handleCreateMakeupTask,
      handleCreateSpecialLectureLessons,
      handleCreateSpecialLectureStudent,
      handleDateSelect,
      handleDeleteAcademyReminder,
      handleDeleteAcademyTest,
      handleDeleteExamPrepRow,
      handleDeleteLesson,
      handleDeleteLessonResearchItem,
      handleDeleteResourceMaterial,
      handleDeleteSchoolEvent,
      handleDeleteScoreRecord,
      handleDeleteSelectedLessonFromCalendar,
      handleDeleteSpecialLectureApplication,
      handleDeleteStudent,
      handleDeleteStudentConsultation,
      handleDeleteTestSession,
      handleEditLesson,
      handleEnsureExamCycleRows,
      handleLogNotification,
      handleOpenAddLesson,
      handleOpenAddStudent,
      handleOpenExamPostSubmissionFile,
      handleOpenExamPrepView,
      handleOpenLessonJournal,
      handleOpenMonthlyRegularLessonModal,
      handleOpenReport,
      handlePassSupplementTask,
      handlePasteLessonToSelectedDate,
      handlePermanentlyDeleteWithdrawnStudent,
      handlePolishLessonComment,
      handleReconcileSolapiNotificationResults,
      handleRefreshActiveNotificationJobs,
      handleRefreshNotificationHistory,
      handleReplaceSpecialLectureStudent,
      handleReserveSupplementNotificationControl,
      handleRestoreStudent,
      handleRetryGeneratedLessonSave,
      handleSaveAcademyReminder,
      handleSaveAcademyTest,
      handleSaveLessonJournalDrafts,
      handleSaveMakeupTask,
      handleSaveMonthlySettlementMonth,
      handleSaveRecord,
      handleSaveSchoolEvent,
      handleSaveScoreRecord,
      handleSaveSpecialLectureEnrollment,
      handleSaveSpecialLectureEnrollments,
      handleSaveSpecialLectureGuides,
      handleSaveSpecialLectureSettlementState,
      handleSaveStudent,
      handleSaveStudentConsultation,
      handleSaveStudentProfile,
      handleSaveTeacherOperatingMemo,
      handleSaveTestSession,
      handleScheduleLessonNotificationsAt,
      handleScheduleSupplementTask,
      handleSendLessonComment,
      handleSyncPreExamLessonFromSchoolEvent,
      handleSyncSpecialLectureStudentSchedules,
      handleTeacherVerifyHomework,
      handleToggleStudentNotificationMute,
      handleUndoLessonAction,
      handleUndoPassSupplementTask,
      handleUpdateClassRoster,
      handleUpdateExamPrepRow,
      handleUpdateHomework,
      handleUpdateLessonNotificationPlan,
      handleUpdateLessonResearchItem,
      handleUpdateMakeupTask,
      handleUpdateProblemBook,
      handleUpdateProblemMeta,
      handleUpdateSpecialLectureApplication,
      handleUpdateStudent,
      handleUpdateWrongProblem,
      openSpecialLectureLesson,
      setAiSettings,
      setAttendanceModal,
      setAttendanceSettings,
      setExamPostTargetStudentIds,
      setSelectedLessonId,
      setTallySubmissions,
      setTallySummaries,
      setTeacherAccountSettings
    }
  });

  return (
    <main className={isSidebarCollapsed ? "appFrame sidebarCollapsed" : "appFrame"}>
      <Sidebar
        academyBrandName={academyBrandName}
        activeView={activeView}
        isCollapsed={isSidebarCollapsed}
        isMobileNavigationOpen={isMobileNavigationOpen}
        onChangeView={handleChangeView}
        onLogout={handleLogout}
        supplementAttention={supplementAttention}
        today={today}
        onToggle={() => setIsSidebarCollapsed((current) => !current)}
        onToggleMobileNavigation={() => setIsMobileNavigationOpen((current) => !current)}
      />

      <section className="mainPanel">
        <TeacherViewOutlet activeView={activeView} adapters={teacherViewAdapters} />


        {activeView === "studentPortal" ? (
          <StudentPortalV2
            examPrepRows={examPrepRows}
            examPostSaveStates={studentExamPostSaveStates}
            examPostSubmissions={examPostSubmissions}
            examPostTargetStudentIds={examPostTargetStudentIds}
            homeworks={homeworks}
            homeworkSaveStates={studentHomeworkSaveStates}
            lessons={lessons}
            materials={resourceMaterials}
            makeupTasks={makeupTasks}
            records={records}
            reportSnapshots={reportSnapshots}
            schoolEvents={schoolEvents}
            previewMode
            questionSaveState={studentQuestionSaveState}
            scoreRecords={scoreRecords}
            studentQuestions={studentQuestions}
            students={students}
            onStudentAddQuestion={handleStudentAddQuestion}
            onStudentCheckHomework={handleStudentCheckHomework}
            onStudentDeleteQuestion={handleStudentDeleteQuestion}
            onSubmitExamPostSubmission={handleSubmitExamPostSubmission}
            onStudentUpdateQuestion={handleStudentUpdateQuestion}
          />
        ) : null}

















        {activeView === "reports" ? (
          <EvaluationCenter
            academyTests={academyTests}
            scoreRecords={scoreRecords}
            students={students}
            wrongProblems={wrongProblems}
            onAddWrongProblem={() =>
              setWrongProblems((current) => [
                {
                  wrongProblemId: `wrong_${Date.now()}`,
                  studentId: students[0]?.studentId ?? "",
                  source: "",
                  problemRange: "",
                  status: "open",
                  note: ""
                },
                ...current
              ])
            }
            onUpdateWrongProblem={(wrongProblemId, field, value) =>
              setWrongProblems((current) =>
                current.map((item) => (item.wrongProblemId === wrongProblemId ? { ...item, [field]: value } : item))
              )
            }
          />
        ) : null}
      </section>

      {isLessonModalOpen ? (
        <LessonModal
          initialLesson={editingLesson}
          notificationJobs={notificationJobs}
          records={records}
          runtime={lessonModalRuntime}
          students={students}
          templates={classTemplates}
          onClose={() => {
            setEditingLesson(null);
            setIsLessonModalOpen(false);
          }}
          onSubmit={editingLesson ? handleUpdateLesson : handleAddLesson}
        />
      ) : null}

      {isMonthlyRegularLessonOpenModal ? (
        <MonthlyRegularLessonOpenModal
          plan={monthlyRegularLessonOpenPlan}
          saveStatus={monthlyRegularLessonOpenStatus}
          onClose={() => setIsMonthlyRegularLessonOpenModal(false)}
          onOpen={() => handleOpenMonthlyRegularLessons().catch(() => {})}
        />
      ) : null}

      {isStudentModalOpen ? (
        <StudentModal
          intakeApplicants={studentIntakeApplicants}
          applicantSaveStates={studentIntakeSaveStates}
          applicantRegistrationMessages={studentIntakeRegistrationMessages}
          applicantRegistrationStates={studentIntakeRegistrationStates}
          students={students}
          templates={classTemplates}
          onClose={() => setIsStudentModalOpen(false)}
          onRegisterApplicant={handleRegisterStudentIntakeApplicant}
          onSubmit={handleAddStudent}
          onUpdateApplicant={handleUpdateStudentIntakeApplicant}
        />
      ) : null}

      {attendanceModal ? (
        <AttendanceModal
          item={attendanceModal}
          lateGraceMinutes={attendanceSettings.lateGraceMinutes}
          onClose={() => setAttendanceModal(null)}
          onSave={async (lesson, student, values, options = {}) => {
            const { saved } = await saveAttendanceRecord(lesson, student, values, "instructor_owner_001", {
              sendAlimtalk: Boolean(options.sendAlimtalk)
            });
            if (!saved) return false;
            setAttendanceModal(null);
            return true;
          }}
        />
      ) : null}

      {reportModal ? (
        <ReportModal
          report={reportModal}
          onClose={() => setReportModal(null)}
          onMockSend={(report) => {
            setReportSnapshots((current) => [
              { ...report, reportId: `report_${Date.now()}_${report.student.studentId}`, status: "mock_sent", createdAt: new Date().toISOString() },
              ...current
            ]);
            setReportModal({ ...report, sendStatus: "mock_sent" });
          }}
          onSaveSnapshot={(report) => {
            setReportSnapshots((current) => [
              { ...report, reportId: `report_${Date.now()}_${report.student.studentId}`, status: "snapshot_saved", createdAt: new Date().toISOString() },
              ...current
            ]);
            setReportModal({ ...report, sendStatus: "snapshot_saved" });
          }}
        />
      ) : null}

      {pendingDeleteLesson ? (
        <Modal
          className="studentDeleteModal"
          onClose={() => setLessonDeleteModalId("")}
          subtitle="수업을 취소 처리하면 달력과 수업일지 목록에서는 숨겨지고, DB에는 7일 동안 취소 상태로 보관됩니다."
          title="수업 취소 확인"
        >
          <div className="deleteConfirmBody">
            <div className="deleteConfirmStudent">
              <span className="studentInitial">수</span>
              <div>
                <strong>{pendingDeleteLesson.className}</strong>
                <p className="muted">
                  {pendingDeleteLesson.date} · {pendingDeleteLesson.startTime}-{pendingDeleteLesson.endTime} · {pendingDeleteLesson.studentIds?.length ?? 0}명
                </p>
              </div>
            </div>
            <p className="dangerCopy">정말 이 수업을 취소 처리할까요? 7일 안에는 되돌릴 수 있고, 이후에는 자동 삭제됩니다.</p>
          </div>
          <ModalFooter tone="danger">
            <button className="softButton" onClick={() => setLessonDeleteModalId("")} type="button">취소</button>
            <button className="dangerButton" onClick={() => confirmDeleteLesson(pendingDeleteLesson.lessonId)} type="button">수업 취소 처리</button>
          </ModalFooter>
        </Modal>
      ) : null}
    </main>
  );

  function handleOpenReport(lesson, student, record, homeworkBundle) {
    setReportModal({
      lesson,
      student,
      record,
      homeworkBundle,
      title: `${lesson.date} ${student.name} 데일리 리포트`,
      body: createAiReportDraft(student, lesson, record, homeworkBundle),
      sendStatus: "draft"
    });
  }

  async function handlePolishLessonComment(lesson, student, record, target, aiProvider, aiModel, options = {}) {
    const recordId = createLessonStudentRecordId(lesson.lessonId, student.studentId);
    const sourceField = target === "student" ? "studentComment" : "teacherComment";
    const statusField = target === "student" ? "studentCommentAiStatus" : "teacherCommentAiStatus";
    const supplementSchedules = getStudentSupplementSchedules(makeupTasks, student.studentId, { lesson, mode: "lesson_comment" });
    const testResultLines = getLessonTestResultLines(testSessions, testAttempts, lesson, student);
    const rawTextSeed = normalizeMessageText(options.rawText);
    const shouldPersist = options.persist !== false;
    const sourceDraft = buildInitialCommentDraft({
      audience: target === "student" ? "student" : "parent",
      existingComment: record?.[sourceField] ?? "",
      record,
      supplementSchedules
    });

    if (shouldPersist) {
      setRecords((current) =>
        upsertById(
          current,
          {
            ...createEmptyRecord(lesson, student),
            ...(record ?? {}),
            lessonStudentRecordId: recordId,
            [statusField]: "AI 수정 중"
          },
          "lessonStudentRecordId"
        )
      );
    }

    try {
      const response = await fetch(apiUrl("/api/ai/comment-polish"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          aiProvider,
          aiModel,
          aiPrompt: getAiPrompt(aiSettings, "commentPolish"),
          audience: target === "student" ? "student" : "parent",
          attendanceStatus: attendanceLabels[record?.attendanceStatus ?? "pending"],
          assignmentStatus: getAssignmentStatusMessage(target === "student" ? "student" : "parent", record?.assignmentStatus ?? record?.incompleteHomework ?? ""),
          grade: student.grade,
          homeworkStatus: homeworkLabels[record?.homeworkStatus ?? "not_started"],
          lessonDate: lesson.date,
          lessonContent: getLessonContent(record),
          lessonMaterial: getLessonMaterial(record, student),
          lessonName: lesson.className,
          rawText: rawTextSeed || sourceDraft || (record?.[sourceField] ?? ""),
          schoolName: student.schoolName,
          studentName: student.name,
          supplementSchedule: supplementSchedules.join("\n"),
          testResult: testResultLines.join("\n")
        })
      });
      const result = await response.json();
      if (!response.ok || !result.ok) {
        throw new Error(result.error || "코멘트 AI 수정에 실패했습니다.");
      }
      if (!shouldPersist) {
        return {
          ok: true,
          polishedText: result.result.polishedText,
          provider: result.result.provider
        };
      }

      const nextRecord = {
        ...createEmptyRecord(lesson, student),
        ...(record ?? {}),
        lessonStudentRecordId: recordId,
        lessonId: lesson.lessonId,
        studentId: student.studentId,
        [sourceField]: result.result.polishedText,
        [statusField]: `완료 · ${result.result.provider}`,
        updatedBy: "instructor_owner_001",
        updatedAt: new Date().toISOString()
      };
      const nextRecords = upsertLessonStudentRecord(recordsRef.current, nextRecord);
      recordsRef.current = nextRecords;
      setRecords(nextRecords);
      await handleSaveRecord(recordId, lesson, student, nextRecord);
      return { ok: true, polishedText: result.result.polishedText, provider: result.result.provider };
    } catch (error) {
      if (shouldPersist) {
        setRecords((current) =>
          upsertById(
            current,
            {
              ...createEmptyRecord(lesson, student),
              ...(record ?? {}),
              lessonStudentRecordId: recordId,
              [statusField]: `실패 · ${error.message}`
            },
            "lessonStudentRecordId"
          )
        );
      }
      return { error: error.message, ok: false };
    }
  }

  async function handleSendLessonComment(lesson, student, record, target, options = {}) {
    if (options.sendTiming === "none") return;
    if (isLessonRecordNotificationMuted(record, target)) return;
    const sourceField = target === "student" ? "studentComment" : "teacherComment";
    const message = normalizeMessageText(record?.[sourceField]);
    const preparationNotice = "";
    const homeworkFollowupNotice = getHomeworkFollowupNoticeForTarget(record, target, aiSettings.notificationTemplates);
    const manualCommentBody = normalizeMessageText(options.manualCommentBody);
    const manualPreviewBody = normalizeMessageText(options.manualPreviewBody);
    const finalMessage = manualCommentBody || message;
    const hasSendContent = Boolean(finalMessage || homeworkFollowupNotice);
    const channel = target === "student" ? "student_alimtalk" : "parent_alimtalk";
    const statusField = target === "student" ? "studentCommentSendStatus" : "teacherCommentSendStatus";
    const recordId = createLessonStudentRecordId(lesson.lessonId, student.studentId);
    const scheduledDate = options.sendTiming === "now" ? "" : getLessonAlimtalkScheduledDate(lesson, options.delayMinutes ?? 0);
    const scheduledLabel = scheduledDate ? formatKoreaTimeLabel(scheduledDate) : "";
    const logBase = {
      notificationLogId: `notification_${Date.now()}_${recordId}_${target}`,
      channel,
      createdAt: new Date().toISOString(),
      lessonId: lesson.lessonId,
      message: manualPreviewBody || finalMessage || homeworkFollowupNotice || "발송할 코멘트가 없습니다.",
      provider: "solapi",
      scheduledDate,
      scheduledLabel,
      studentId: student.studentId,
      target
    };
    const applySendStatus = (statusText, { persist = false } = {}) => {
      const nextRecord = {
        ...createEmptyRecord(lesson, student),
        ...(record ?? {}),
        lessonStudentRecordId: recordId,
        lessonId: lesson.lessonId,
        studentId: student.studentId,
        [statusField]: statusText
      };
      setRecords((current) => upsertLessonStudentRecord(current, nextRecord));
      if (persist) {
        patchLessonRecordNotificationStatusRequest({
          lessonId: lesson.lessonId,
          lessonStudentRecordId: recordId,
          studentId: student.studentId,
          teacherCommentSendStatus: target === "parent" ? statusText : undefined,
          studentCommentSendStatus: target === "student" ? statusText : undefined,
          updatedBy: "instructor_owner_001"
        }).catch((error) => console.error(error));
      }
    };

    if (!hasSendContent) {
      setNotificationLogs((current) => [
        { ...logBase, status: "empty_message" },
        ...current
      ]);
      applySendStatus("내용 없음", { persist: true });
      return;
    }

    applySendStatus(scheduledDate ? `예약 중 · ${scheduledLabel}` : "알림톡 발송 중");

    try {
      const lessonMaterial = getLessonMaterial(record, student);
      const lessonContent = getLessonContent(record);
      const previousHomework = getLessonHomework(homeworks, lesson, student, "previous", lessons);
      const nextHomework = getLessonHomework(homeworks, lesson, student, "next");
      const assignmentStatus = getAssignmentStatusForMessage(record, previousHomework);
      const supplementSchedules = getStudentSupplementSchedules(makeupTasks, student.studentId, { lesson, mode: "lesson_comment" });
      const testResultLines = getLessonTestResultLines(testSessions, testAttempts, lesson, student);
      const notificationPayload = {
        academyName: academyBrandName,
        assignmentStatus,
        assignmentStatusMessage: getAssignmentStatusMessage(target === "student" ? "student" : "parent", assignmentStatus),
        assignmentStatusParentMessage: getAssignmentStatusParentMessage(assignmentStatus),
        assignmentStatusStudentMessage: getAssignmentStatusStudentMessage(assignmentStatus),
        attendanceStatus: record?.attendanceStatus ?? "pending",
        attendanceReason: record?.attendanceReason ?? "",
        checkInTime: record?.checkInTime ?? "",
        checkOutTime: record?.checkOutTime ?? "",
        checkedAt: record?.checkInAt || record?.checkOutAt || "",
        lateMinutes: record?.lateMinutes ?? "",
        lessonDate: lesson.date,
        lessonContent,
        lessonId: lesson.lessonId,
        lessonMaterial,
        lessonName: lesson.className,
        forceDryRun: Boolean(options.forceDryRun),
        forceTestRecipient: Boolean(options.forceTestRecipient),
        homeworkFollowupNotice,
        commentBodyOverride: manualCommentBody,
        manualResend: Boolean(options.resendReason),
        message: finalMessage,
        nextHomework: nextHomework?.title ?? "",
        preparationNotice,
        parentPhone: student.parentPhone,
        previousHomework: previousHomework?.title ?? "",
        resendReason: options.resendReason ?? "",
        scheduledDate,
        sendMode: options.forceDryRun || options.forceTestRecipient ? "test" : scheduledDate ? "scheduled" : "immediate",
        studentId: student.studentId,
        studentName: student.name,
        studentPhone: student.studentPhone,
        supplementSchedule: supplementSchedules.join("\n"),
        testResult: testResultLines.join("\n"),
        target
      };
      const response = await fetch(apiUrl("/api/notifications/comment-alimtalk"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(notificationPayload)
      });
      const result = await response.json();
      if (!response.ok || !result.ok) {
        throw new Error(result.error || "코멘트 알림톡 발송 실패");
      }

      const logStatus = scheduledDate ? "scheduled" : result.result?.dryRun ? "dry_run" : "sent";
      const notificationLog = { ...logBase, result, status: logStatus };
      setNotificationLogs((current) => [notificationLog, ...current]);
      const notificationJob = {
        ...notificationLog,
        notificationJobId: notificationLog.notificationLogId,
        notificationType: target === "student" ? "student_comment" : "parent_comment",
        lessonStudentRecordId: recordId,
        payload: notificationPayload,
        previewBody: logBase.message,
        providerMessageId: getNotificationProviderReference(result.result),
        recipient: target === "student" ? student.studentPhone : student.parentPhone,
        scheduledAt: scheduledDate,
        status: logStatus === "dry_run" ? "draft" : logStatus
      };
      setNotificationJobs((current) =>
        upsertNotificationJobList(current, notificationJob)
      );
      postJson("/api/notification-jobs", {
        notificationJob
      }).catch((error) => console.error(error));
      const completeStatus = scheduledDate
        ? `예약 중 · ${scheduledLabel}`
        : result.result?.dryRun
          ? "테스트 발송 기록됨"
          : "알림톡 발송 완료";
      applySendStatus(completeStatus, { persist: true });
    } catch (error) {
      const failedLog = { ...logBase, error: error.message, status: "failed" };
      setNotificationLogs((current) => [failedLog, ...current]);
      const failedJob = {
        ...failedLog,
        notificationJobId: failedLog.notificationLogId,
        notificationType: target === "student" ? "student_comment" : "parent_comment",
        lessonStudentRecordId: recordId,
        previewBody: logBase.message,
        recipient: target === "student" ? student.studentPhone : student.parentPhone,
        scheduledAt: scheduledDate
      };
      setNotificationJobs((current) =>
        upsertNotificationJobList(current, failedJob)
      );
      postJson("/api/notification-jobs", {
        notificationJob: failedJob
      }).catch((persistError) => console.error(persistError));
      applySendStatus(`실패 · ${error.message}`, { persist: true });
    }
  }

  async function handleStudentCheckHomework(homeworkId) {
    if (studentHomeworkSavingIdsRef.current.has(homeworkId)) return { ok: false };
    if (session?.role !== "student" || !session?.sessionToken) {
      setStudentHomeworkSaveStates((current) => ({
        ...current,
        [homeworkId]: { message: "실제 학생 계정으로 로그인한 화면에서만 저장할 수 있습니다.", state: "failed" }
      }));
      return { ok: false };
    }

    const targetHomework = homeworks.find((homework) => homework.homeworkId === homeworkId);
    if (!targetHomework || targetHomework.studentId !== session.studentId) {
      setStudentHomeworkSaveStates((current) => ({
        ...current,
        [homeworkId]: { message: "현재 학생의 숙제를 찾지 못했습니다.", state: "failed" }
      }));
      return { ok: false };
    }

    setStudentHomeworkSaveStates((current) => ({
      ...current,
      [homeworkId]: { message: "Supabase에 저장하고 다시 확인하는 중입니다.", state: "saving" }
    }));
    studentHomeworkSavingIdsRef.current.add(homeworkId);
    try {
      const savedHomework = await completeStudentHomework(session.sessionToken, homeworkId);
      setHomeworks((current) => current.map((homework) =>
        homework.homeworkId === savedHomework.homeworkId ? savedHomework : homework
      ));
      setStudentHomeworkSaveStates((current) => ({
        ...current,
        [homeworkId]: { message: "Supabase 저장 및 재조회 확인 완료", state: "saved" }
      }));
      return { ok: true, homework: savedHomework };
    } catch (error) {
      setStudentHomeworkSaveStates((current) => ({
        ...current,
        [homeworkId]: { message: error.message || "숙제 완료 저장에 실패했습니다.", state: "failed" }
      }));
      return { ok: false, error };
    } finally {
      studentHomeworkSavingIdsRef.current.delete(homeworkId);
    }
  }

  async function handleStudentAddQuestion(question) {
    const text = String(question?.text ?? "").trim();
    if (studentQuestionMutationRef.current) return { ok: false };
    if (session?.role !== "student" || !session?.sessionToken || question?.studentId !== session.studentId) {
      setStudentQuestionSaveState({
        action: "create",
        label: "질문 추가",
        message: "실제 학생 계정으로 로그인한 화면에서만 저장할 수 있습니다.",
        state: "failed",
        targetId: "create"
      });
      return { ok: false };
    }
    if (!text) return { ok: false };

    studentQuestionMutationRef.current = true;
    setStudentQuestionSaveState({
      action: "create",
      label: "질문 추가",
      message: "Supabase에 저장하고 다시 확인하는 중입니다.",
      state: "saving",
      targetId: "create"
    });
    try {
      const result = await createStudentQuestion(session.sessionToken, text);
      setStudentQuestions(result.questions);
      setStudentQuestionSaveState({
        action: "create",
        label: "질문 추가",
        message: "Supabase 저장 및 재조회 확인 완료",
        state: "saved",
        targetId: "create"
      });
      return { ok: true, question: result.question };
    } catch (error) {
      setStudentQuestionSaveState({
        action: "create",
        label: "질문 추가",
        message: error.message || "질문 저장에 실패했습니다.",
        state: "failed",
        targetId: "create"
      });
      return { ok: false, error };
    } finally {
      studentQuestionMutationRef.current = false;
    }
  }

  async function handleStudentUpdateQuestion(questionId, updates) {
    if (studentQuestionMutationRef.current) return { ok: false };
    const targetQuestion = studentQuestions.find((question) => question.questionId === questionId);
    if (
      session?.role !== "student" ||
      !session?.sessionToken ||
      !targetQuestion ||
      targetQuestion.studentId !== session.studentId
    ) {
      setStudentQuestionSaveState({
        action: "update",
        label: "질문 상태",
        message: "현재 학생의 질문을 찾지 못했습니다.",
        state: "failed",
        targetId: questionId
      });
      return { ok: false };
    }

    studentQuestionMutationRef.current = true;
    setStudentQuestionSaveState({
      action: "update",
      label: "질문 상태",
      message: "Supabase에 저장하고 다시 확인하는 중입니다.",
      state: "saving",
      targetId: questionId
    });
    try {
      const result = await updateStudentQuestion(session.sessionToken, questionId, updates?.status);
      setStudentQuestions(result.questions);
      setStudentQuestionSaveState({
        action: "update",
        label: "질문 상태",
        message: "Supabase 저장 및 재조회 확인 완료",
        state: "saved",
        targetId: questionId
      });
      return { ok: true, question: result.question };
    } catch (error) {
      setStudentQuestionSaveState({
        action: "update",
        label: "질문 상태",
        message: error.message || "질문 상태 저장에 실패했습니다.",
        state: "failed",
        targetId: questionId
      });
      return { ok: false, error };
    } finally {
      studentQuestionMutationRef.current = false;
    }
  }

  async function handleStudentDeleteQuestion(questionId) {
    if (studentQuestionMutationRef.current) return { ok: false };
    const targetQuestion = studentQuestions.find((question) => question.questionId === questionId);
    if (
      session?.role !== "student" ||
      !session?.sessionToken ||
      !targetQuestion ||
      targetQuestion.studentId !== session.studentId
    ) {
      setStudentQuestionSaveState({
        action: "delete",
        label: "질문 삭제",
        message: "현재 학생의 질문을 찾지 못했습니다.",
        state: "failed",
        targetId: questionId
      });
      return { ok: false };
    }

    studentQuestionMutationRef.current = true;
    setStudentQuestionSaveState({
      action: "delete",
      label: "질문 삭제",
      message: "Supabase에서 삭제하고 다시 확인하는 중입니다.",
      state: "saving",
      targetId: questionId
    });
    try {
      const result = await deleteStudentQuestion(session.sessionToken, questionId);
      setStudentQuestions(result.questions);
      setStudentQuestionSaveState({
        action: "delete",
        label: "질문 삭제",
        message: "Supabase 삭제 및 재조회 확인 완료",
        state: "saved",
        targetId: questionId
      });
      return { ok: true };
    } catch (error) {
      setStudentQuestionSaveState({
        action: "delete",
        label: "질문 삭제",
        message: error.message || "질문 삭제에 실패했습니다.",
        state: "failed",
        targetId: questionId
      });
      return { ok: false, error };
    } finally {
      studentQuestionMutationRef.current = false;
    }
  }

  async function handleSubmitExamPostSubmission(target, student, values, files = []) {
    const targetId = String(target?.targetId ?? "");
    if (studentExamPostMutationIdsRef.current.has(targetId)) return { ok: false };
    if (
      session?.role !== "student" ||
      !session?.sessionToken ||
      !targetId ||
      student?.studentId !== session.studentId ||
      target?.studentId !== session.studentId
    ) {
      setStudentExamPostSaveStates((current) => ({
        ...current,
        [targetId || "unknown"]: {
          message: "실제 학생 계정으로 로그인한 본인 제출만 저장할 수 있습니다.",
          state: "failed"
        }
      }));
      return { ok: false, message: "실제 학생 계정으로 로그인한 본인 제출만 저장할 수 있습니다." };
    }

    studentExamPostMutationIdsRef.current.add(targetId);
    let uploadedAttachments = [];
    let submissionSaveStarted = false;
    try {
      setStudentExamPostSaveStates((current) => ({
        ...current,
        [targetId]: { message: `시험지 파일 ${files.length}개를 Supabase Storage에 업로드하는 중입니다.`, state: "saving" }
      }));
      const uploadResults = await Promise.allSettled(
        files.map((file) => uploadStudentExamPostFile(session.sessionToken, file, target))
      );
      uploadedAttachments = uploadResults
        .filter((result) => result.status === "fulfilled")
        .map((result) => result.value);
      const failedUploads = uploadResults.filter((result) => result.status === "rejected");
      if (failedUploads.length) {
        throw new Error(`시험지 파일 ${failedUploads.length}개 업로드에 실패했습니다.`);
      }

      setStudentExamPostSaveStates((current) => ({
        ...current,
        [targetId]: { message: "제출 응답을 Supabase에 저장하고 다시 확인하는 중입니다.", state: "saving" }
      }));
      submissionSaveStarted = true;
      const result = await saveStudentExamPostSubmission(
        session.sessionToken,
        target,
        values,
        uploadedAttachments
      );
      setExamPostSubmissions(result.submissions);
      setStudentExamPostSaveStates((current) => ({
        ...current,
        [targetId]: { message: "Storage 업로드와 제출 row 재조회 확인 완료", state: "saved" }
      }));
      return { ok: true, submission: result.submission };
    } catch (error) {
      let cleanupMessage = "";
      if (uploadedAttachments.length && !submissionSaveStarted) {
        try {
          const cleanupResult = await cleanupStudentExamPostFiles(session.sessionToken, target, uploadedAttachments);
          cleanupMessage = cleanupResult.cleaned
            ? " 성공한 임시 업로드는 정리했습니다."
            : " 일부 임시 업로드를 정리하지 못했습니다.";
        } catch (cleanupError) {
          cleanupMessage = ` 임시 업로드 정리 실패: ${cleanupError.message}`;
        }
      } else if (uploadedAttachments.length) {
        cleanupMessage = " 저장 응답이 불명확할 수 있어 업로드 파일은 보존했습니다. 새로고침 후 제출 상태를 확인하고 다시 시도해 주세요.";
      }
      const message = `${error.message || "시험 후 제출 저장에 실패했습니다."}${cleanupMessage}`;
      setStudentExamPostSaveStates((current) => ({
        ...current,
        [targetId]: { message, state: "failed" }
      }));
      return { ok: false, error, message };
    } finally {
      studentExamPostMutationIdsRef.current.delete(targetId);
    }
  }

  async function handleConfirmExamPostSubmission(submissionId, teacherConfirmed) {
    if (examPostConfirmMutationIdsRef.current.has(submissionId)) return { ok: false };
    examPostConfirmMutationIdsRef.current.add(submissionId);
    setExamPostConfirmSaveStates((current) => ({
      ...current,
      [submissionId]: { message: "Supabase에 확인 상태를 저장하고 다시 확인하는 중입니다.", state: "saving" }
    }));
    try {
      const result = await confirmTeacherExamPostSubmission(session?.sessionToken, submissionId, teacherConfirmed);
      setExamPostSubmissions(result.submissions);
      setExamPostConfirmSaveStates((current) => ({
        ...current,
        [submissionId]: { message: "Supabase 저장 및 재조회 확인 완료", state: "saved" }
      }));
      return { ok: true, submission: result.submission };
    } catch (error) {
      setExamPostConfirmSaveStates((current) => ({
        ...current,
        [submissionId]: { message: error.message || "확인 상태 저장에 실패했습니다.", state: "failed" }
      }));
      return { ok: false, error };
    } finally {
      examPostConfirmMutationIdsRef.current.delete(submissionId);
    }
  }

  async function handleOpenExamPostFile(sessionToken, file) {
    try {
      const signedUrl = await getExamPostFileOpenUrl(sessionToken, file);
      if (!signedUrl) throw new Error("열 파일을 찾지 못했습니다.");
      window.open(signedUrl, "_blank", "noopener,noreferrer");
      return { ok: true };
    } catch (error) {
      window.alert(error.message || "시험 후 제출 파일을 열지 못했습니다.");
      return { ok: false, error };
    }
  }

  function handleTeacherVerifyHomework(homeworkId, teacherStatus) {
    setHomeworks((current) =>
      current.map((homework) => {
        if (homework.homeworkId !== homeworkId) return homework;
        const nextHomework = {
          ...homework,
          status: teacherStatus === "verified" ? "verified" : teacherStatus,
          teacherStatus,
          verifiedAt: new Date().toISOString()
        };
        postJson("/api/homeworks", { homework: nextHomework }).catch((error) => console.error(error));
        return nextHomework;
      })
    );
  }

  function handleAddResourceMaterial(material) {
    const nextMaterial = {
      materialId: `resource_${Date.now()}`,
      createdAt: new Date().toISOString(),
      title: material.title.trim(),
      description: material.description.trim(),
      fileName: material.fileName.trim(),
      fileUrl: material.fileUrl.trim(),
      visibility: material.visibility,
      classTemplateId: material.classTemplateId,
      studentIds: material.studentIds,
      notifyByAlimtalk: material.notifyByAlimtalk
    };
    setResourceMaterials((current) => [nextMaterial, ...current]);
    postJson("/api/resource-materials", { material: nextMaterial })
      .then((result) => {
        if (!result.ok || !result.material) return;
        setResourceMaterials((current) =>
          current.map((item) => (item.materialId === nextMaterial.materialId ? result.material : item))
        );
      })
      .catch((error) => console.error(error));
  }

  function handleDeleteResourceMaterial(materialId) {
    setResourceMaterials((current) => current.filter((material) => material.materialId !== materialId));
    fetch(apiUrl(`/api/resource-materials?id=${encodeURIComponent(materialId)}`), { method: "DELETE" })
      .then((response) => response.json())
      .then((result) => {
        if (!result.ok) throw new Error(result.error || "자료 삭제 저장 실패");
      })
      .catch((error) => console.error(error));
  }

  function handleCreateMakeupTask(task) {
    const taskId = `makeup_${Date.now()}_${task.studentId}`;
    setMakeupTasks((current) => {
      const existingTask = current.find(
        (item) =>
          item.studentId === task.studentId &&
          item.sourceId === task.sourceId &&
          item.taskType === task.taskType
      );

      if (existingTask) {
        const nextTask = {
          ...existingTask,
          ...task,
          makeupTaskId: existingTask.makeupTaskId,
          status: existingTask.status === "done" ? "scheduled" : existingTask.status,
          touchedAt: new Date().toISOString()
        };
        postMakeupTask(nextTask).catch((error) => console.error(error));
        return current.map((item) =>
          item.makeupTaskId === existingTask.makeupTaskId
            ? nextTask
            : item
        );
      }

      const nextTask = {
        makeupTaskId: taskId,
        status: "draft",
        scheduledDate: today,
        scheduledTime: "",
        supplementHomeworkNote: task.supplementHomeworkNote || task.sourceLabel || "",
        notificationDraft: "",
        attemptCount: 0,
        childHomeworkIds: [],
        createdAt: new Date().toISOString(),
        ...task
      };
      postMakeupTask(nextTask).catch((error) => console.error(error));
      return [nextTask, ...current];
    });
  }

  function handleAssignHomeworkFromTask(task) {
    const homeworkId = `homework_makeup_${Date.now()}_${task.studentId}`;
    const nextHomework = {
      homeworkId,
      studentId: task.studentId,
      lessonId: "",
      makeupTaskId: task.makeupTaskId,
      sourceHomeworkId: task.sourceId,
      title: `보충: ${task.sourceLabel}`,
      subject: "공통수학1",
      homeworkType: "makeup",
      totalProblems: 10,
      assignedDate: today,
      dueDate: addDaysInKorea(today, 3),
      status: "assigned",
      studentStatus: "not_started",
      teacherStatus: "unverified",
      createdByRole: "teacher",
      createdAt: new Date().toISOString()
    };

    setHomeworks((current) => [nextHomework, ...current]);
    setMakeupTasks((current) =>
      current.map((item) => {
        if (item.makeupTaskId !== task.makeupTaskId) return item;
        const nextTask = {
          ...item,
          status: "scheduled",
          lastHomeworkId: homeworkId,
          childHomeworkIds: [...(item.childHomeworkIds ?? []), homeworkId],
          attemptCount: (item.attemptCount ?? 0) + 1,
          lastAssignedAt: new Date().toISOString()
        };
        postMakeupTask(nextTask).catch((error) => console.error(error));
        return nextTask;
      })
    );
  }

  async function handleSaveMakeupTask(task) {
    if (!task?.makeupTaskId) throw new Error("보충관리 ID가 없어 저장할 수 없습니다.");
    const requestedTask = { ...task, updatedAt: new Date().toISOString() };
    await postMakeupTask(requestedTask);
    const verification = await getJsonWithTimeout(
      `/api/makeup-tasks?verify=${encodeURIComponent(requestedTask.makeupTaskId)}-${Date.now()}`,
      12000,
      "보충 내용은 저장 요청됐지만 Supabase 반영 확인이 지연되고 있습니다. 수정본을 유지한 채 다시 확인해 주세요."
    );
    const verifiedTask = (verification.makeupTasks ?? []).find(
      (item) => item.makeupTaskId === requestedTask.makeupTaskId
    );
    if (!verifiedTask) throw new Error("Supabase에서 저장한 보충 항목을 다시 찾지 못했습니다. 수정본은 화면에 유지됩니다.");
    if (getSupplementPersistedEditFingerprint(verifiedTask) !== getSupplementPersistedEditFingerprint(requestedTask)) {
      throw new Error("Supabase 재조회 값이 수정본과 다릅니다. 자동 초안으로 되돌리지 않고 수정본을 화면에 유지합니다.");
    }
    setMakeupTasks((current) => upsertById(current, verifiedTask, "makeupTaskId"));
    return verifiedTask;
  }

  async function handleCancelAbsenceMakeupSource(task) {
    if (task?.taskType !== "absence_makeup") throw new Error("결석보강 항목만 결석 처리를 취소할 수 있습니다.");
    const sourceRecord = recordsRef.current.find((record) => record.lessonStudentRecordId === task.sourceId);
    if (!sourceRecord) throw new Error("원 수업일지 출결 기록을 찾지 못했습니다.");
    if (!isAbsenceLikeAttendanceStatus(sourceRecord.attendanceStatus)) {
      return sourceRecord;
    }
    const now = new Date().toISOString();
    const nextRecord = {
      ...sourceRecord,
      attendanceReason: "",
      attendanceStatus: "pending",
      checkInAt: "",
      checkInTime: "",
      checkOutAt: "",
      checkOutTime: "",
      lateMinutes: "",
      updatedAt: now,
      updatedBy: "manual_attendance_cancel"
    };
    const cancelPayload = { record: nextRecord };
    const saveResult = await postJson("/api/lesson-records", cancelPayload);
    if (saveResult.source !== "supabase") {
      throw new Error("결석 기록 취소가 Supabase 원천에 저장되지 않았습니다.");
    }
    const verification = await getJsonWithTimeout(
      `/api/lesson-records?verify=cancel-absence-source-${encodeURIComponent(task.sourceId)}-${Date.now()}`,
      12000,
      "결석 기록 취소 후 Supabase 재확인이 지연되고 있습니다."
    );
    if (verification.source !== "supabase") {
      throw new Error("결석 기록 취소 결과를 Supabase에서 다시 확인하지 못했습니다.");
    }
    const verifiedRecord = (verification.records ?? []).find(
      (record) => record.lessonStudentRecordId === task.sourceId
    );
    if (
      !verifiedRecord ||
      verifiedRecord.attendanceStatus !== "pending" ||
      verifiedRecord.attendanceReason ||
      verifiedRecord.checkInAt ||
      verifiedRecord.checkInTime ||
      verifiedRecord.checkOutAt ||
      verifiedRecord.checkOutTime
    ) {
      throw new Error("Supabase 재조회 값이 결석 기록 취소 결과와 다릅니다.");
    }
    const nextRecords = upsertLessonStudentRecord(recordsRef.current, verifiedRecord);
    recordsRef.current = nextRecords;
    setRecords(nextRecords);
    return verifiedRecord;
  }

  async function handleCancelAbsenceMakeupKeepSource(task) {
    if (task?.taskType !== "absence_makeup") {
      throw new Error("결석보강 항목만 결석기록 유지 방식으로 취소할 수 있습니다.");
    }
    if (!task.makeupTaskId) {
      throw new Error("취소할 결석보강 ID가 없습니다.");
    }
    const sourceRecord = recordsRef.current.find(
      (record) => record.lessonStudentRecordId === task.sourceId
    );
    if (!sourceRecord) throw new Error("유지할 원 결석 수업일지 기록을 찾지 못했습니다.");
    if (!isAbsenceLikeAttendanceStatus(sourceRecord.attendanceStatus)) {
      throw new Error("원 수업일지의 현재 출결이 결석 상태가 아니어서 보강만 취소할 수 없습니다.");
    }

    const canceledAt = new Date().toISOString();
    const sourceRecordSnapshot = getAbsenceSourcePreservationSnapshot(sourceRecord);
    const requestedTask = createCanceledAbsenceMakeupTask(
      createPersistableSupplementTask(task),
      canceledAt
    );
    const taskSaveResult = await postMakeupTask(requestedTask);
    if (taskSaveResult.source !== "supabase") {
      throw new Error("보강 취소가 Supabase 보충 원천에 저장되지 않았습니다.");
    }

    let requestedCanceledLesson = null;
    if (requestedTask.linkedLessonId) {
      let linkedLesson = lessons.find(
        (lesson) => lesson.lessonId === requestedTask.linkedLessonId
      );
      if (!linkedLesson) {
        const currentLessonResult = await getJsonWithTimeout(
          `/api/lessons?verify=cancel-makeup-source-${Date.now()}`,
          12000,
          "연결 보강 수업일지를 확인하는 데 시간이 걸리고 있습니다."
        );
        linkedLesson = (currentLessonResult.lessons ?? []).find(
          (lesson) => lesson.lessonId === requestedTask.linkedLessonId
        );
      }
      if (linkedLesson) {
        requestedCanceledLesson = createCanceledSupplementLesson(linkedLesson, canceledAt);
        const lessonSaveResult = await postJson("/api/lessons", {
          lesson: requestedCanceledLesson
        });
        if (lessonSaveResult.source !== "supabase") {
          throw new Error("보강 항목은 취소됐지만 연결 수업일지를 취소하지 못했습니다. 다시 확인해 주세요.");
        }
      }
    }

    const relatedActiveNotificationJobs = notificationJobs.filter((job) => {
      const payload = job.payload ?? {};
      const result = job.result && typeof job.result === "object" ? job.result : {};
      const jobMakeupTaskId = payload.makeupTaskId || result.makeupTaskId || "";
      const belongsToTask = jobMakeupTaskId === requestedTask.makeupTaskId;
      const belongsToLesson = Boolean(
        requestedTask.linkedLessonId &&
        job.lessonId === requestedTask.linkedLessonId
      );
      return (belongsToTask || belongsToLesson) && canCancelNotificationJob(job);
    });
    try {
      await Promise.all(
        relatedActiveNotificationJobs.map((job) =>
          handleCancelNotificationJob(job, "보강 취소 · 원 결석기록 유지")
        )
      );
    } catch (error) {
      throw new Error(
        `보강과 연결 수업일지는 취소됐지만 알림톡 예약 취소 확인에 실패했습니다: ${error?.message || "알 수 없는 오류"}`
      );
    }

    const [taskVerification, lessonVerification, recordVerification] = await Promise.all([
      getJsonWithTimeout(
        `/api/makeup-tasks?verify=cancel-makeup-task-${encodeURIComponent(requestedTask.makeupTaskId)}-${Date.now()}`,
        12000,
        "보강 취소 후 보충 원천 재확인이 지연되고 있습니다."
      ),
      requestedCanceledLesson
        ? getJsonWithTimeout(
            `/api/lessons?includeCanceled=true&verify=cancel-makeup-lesson-${encodeURIComponent(requestedCanceledLesson.lessonId)}-${Date.now()}`,
            12000,
            "보강 취소 후 연결 수업일지 재확인이 지연되고 있습니다."
          )
        : Promise.resolve({ lessons }),
      getJsonWithTimeout(
        `/api/lesson-records?verify=preserve-absence-${encodeURIComponent(sourceRecord.lessonStudentRecordId)}-${Date.now()}`,
        12000,
        "보강 취소 후 원 결석기록 보존 여부를 확인하는 데 시간이 걸리고 있습니다."
      )
    ]);
    if (taskVerification.source !== "supabase" || recordVerification.source !== "supabase") {
      throw new Error("보강 취소 결과와 원 결석기록을 Supabase에서 다시 확인하지 못했습니다.");
    }
    if (requestedCanceledLesson && lessonVerification.source !== "supabase") {
      throw new Error("취소한 연결 수업일지를 Supabase에서 다시 확인하지 못했습니다.");
    }

    const verifiedTask = (taskVerification.makeupTasks ?? []).find(
      (item) => item.makeupTaskId === requestedTask.makeupTaskId
    );
    if (
      !verifiedTask ||
      getCanceledAbsenceMakeupSaveSnapshot(verifiedTask) !==
        getCanceledAbsenceMakeupSaveSnapshot(requestedTask)
    ) {
      throw new Error("Supabase 재조회 값이 보강 취소 원천과 다릅니다.");
    }

    const verifiedSourceRecord = (recordVerification.records ?? []).find(
      (record) => record.lessonStudentRecordId === sourceRecord.lessonStudentRecordId
    );
    if (
      !verifiedSourceRecord ||
      getAbsenceSourcePreservationSnapshot(verifiedSourceRecord) !== sourceRecordSnapshot
    ) {
      throw new Error("보강 취소 과정에서 원 결석기록이 달라졌습니다. 완료로 처리하지 않았습니다.");
    }

    const persistedLessons = Array.isArray(lessonVerification.lessons)
      ? lessonVerification.lessons
      : lessons;
    if (requestedCanceledLesson) {
      const verifiedCanceledLesson = persistedLessons.find(
        (lesson) => lesson.lessonId === requestedCanceledLesson.lessonId
      );
      if (
        !verifiedCanceledLesson ||
        getLessonModalSaveSnapshot(verifiedCanceledLesson) !==
          getLessonModalSaveSnapshot(requestedCanceledLesson)
      ) {
        throw new Error("Supabase 재조회 값이 취소한 보강 수업일지와 다릅니다.");
      }
    }

    setMakeupTasks((current) => upsertById(current, verifiedTask, "makeupTaskId"));
    if (requestedCanceledLesson) {
      setLessons(filterActiveLessons(persistedLessons));
    }
    const nextRecords = upsertLessonStudentRecord(
      recordsRef.current,
      verifiedSourceRecord
    );
    recordsRef.current = nextRecords;
    setRecords(nextRecords);

    return {
      canceledNotificationJobCount: relatedActiveNotificationJobs.length,
      makeupTask: verifiedTask,
      sourceRecord: verifiedSourceRecord
    };
  }

  async function handleScheduleSupplementTask(task) {
    const {
      keepLessonJournalOpen,
      previousScheduleText,
      shouldReserveScheduleNotice,
      shouldUpdateStudentReminder,
      taskForSchedule
    } = createSupplementScheduleNotificationPlan({
      formatScheduleDateTime: formatSupplementScheduleDateTime,
      normalizeTime: normalizeTimeInput,
      notificationJobs,
      task
    });
    const { lesson, nextTask, student } = createSupplementSchedulePersistencePlan({
      addMinutes: addMinutesToTime,
      createLessonId: createSupplementLessonId,
      createLessonName: createSupplementLessonName,
      followUpTypeLabel,
      getDayKey,
      getLessonColor: getSupplementLessonColor,
      getLessonStudentIds,
      lessons,
      normalizeTime: normalizeTimeInput,
      students,
      task: taskForSchedule
    });

    const lessonResult = await postJson("/api/lessons", { lesson });
    const savedLesson = lessonResult.lesson ?? lesson;
    const taskResult = await postMakeupTask(nextTask);
    const savedTask = taskResult.makeupTask ?? nextTask;

    setLessons((current) => upsertById(current, savedLesson, "lessonId"));
    setMakeupTasks((current) => upsertById(current, savedTask, "makeupTaskId"));
    setSelectedDate(savedLesson.date);
    setSelectedLessonId(savedLesson.lessonId);
    if (!keepLessonJournalOpen) {
      setIsLessonJournalOpen(false);
    }
    const notificationResult = await applySupplementScheduleNotificationsRequest({
      previousScheduleText,
      reserveScheduleNotices: reserveSupplementScheduleNotices,
      reserveStudentReminder: reserveSupplementStudentReminder,
      shouldReserveScheduleNotice,
      shouldUpdateStudentReminder,
      student,
      task: savedTask
    });
    return {
      lesson: savedLesson,
      makeupTask: savedTask,
      ...notificationResult
    };
  }

  async function handlePassSupplementTask(task) {
    if (!task?.studentId || !task?.sourceId) throw new Error("완료 처리할 보충 항목 정보가 부족합니다.");
    const completedAt = new Date().toISOString();
    const makeupTaskId = task.makeupTaskId || `makeup_pass_${Date.now()}_${task.studentId}`;
    const needsMoreSupplement = task.completionDecision === "needs_more" || task.supplementProcessStatus === "needs_more";
    const nextTask = {
      scheduledDate: task.scheduledDate || today,
      scheduledTime: task.scheduledTime || "",
      notificationDraft: task.notificationDraft || "",
      attemptCount: task.attemptCount ?? 0,
      childHomeworkIds: task.childHomeworkIds ?? [],
      createdAt: task.createdAt || completedAt,
      ...task,
      makeupTaskId,
      completedAt: needsMoreSupplement ? task.completedAt || "" : completedAt,
      passedAt: needsMoreSupplement ? task.passedAt || "" : completedAt,
      status: needsMoreSupplement ? "scheduled" : "done",
      supplementProcessStatus: needsMoreSupplement ? "needs_more" : "completed",
      touchedAt: completedAt
    };

    const taskResult = await postMakeupTask(nextTask);
    const savedTask = taskResult.makeupTask ?? nextTask;
    setMakeupTasks((current) => upsertById(current, savedTask, "makeupTaskId"));
    await cancelSupplementStudentReminder(savedTask, "보충 완료 처리로 학생 11시 알림톡 취소");

    return savedTask;
  }

  function handleUndoPassSupplementTask(task) {
    if (!task?.makeupTaskId) return;
    const updatedAt = new Date().toISOString();
    const restoredStatus = task.linkedLessonId || task.scheduledDate ? "scheduled" : "draft";
    setMakeupTasks((current) =>
      current.map((item) => {
        if (item.makeupTaskId !== task.makeupTaskId) return item;
        const nextTask = {
          ...item,
          status: restoredStatus,
          completedAt: "",
          passedAt: "",
          touchedAt: updatedAt,
          updatedAt
        };
        postMakeupTask(nextTask).catch((error) => console.error(error));
        return nextTask;
      })
    );
  }

  function handleUpdateMakeupTask(taskId, field, value) {
    setMakeupTasks((current) =>
      current.map((task) => {
        if (task.makeupTaskId !== taskId) return task;
        const nextTask = { ...task, [field]: value, updatedAt: new Date().toISOString() };
        if (
          task.linkedLessonId &&
          ((field === "scheduledDate" && value !== task.linkedLessonDate) ||
            (field === "scheduledTime" && value !== task.linkedLessonTime))
        ) {
          nextTask.needsLessonResync = true;
        }
        postMakeupTask(nextTask).catch((error) => console.error(error));
        return nextTask;
      })
    );
  }

  function handleLogNotification(task) {
    setNotificationLogs((current) => [
      {
        notificationLogId: `notification_${Date.now()}_${task.makeupTaskId}`,
        makeupTaskId: task.makeupTaskId,
        studentId: task.studentId,
        channel: "mock",
        status: "draft_logged",
        message: task.notificationDraft || createNotificationDraft(task, students, aiSettings.notificationTemplates),
        createdAt: new Date().toISOString()
      },
      ...current
    ]);
  }
}

function getNotificationJobStatusClass(job) {
  return resolveNotificationJobStatusClass(job, isNotificationSchedulePast);
}

function MonthlyRegularLessonOpenModal({ plan, saveStatus, onClose, onOpen }) {
  const isSaving = ["saving", "verifying"].includes(saveStatus?.state);
  const canOpen = !plan.errors?.length && plan.lessonsToCreate?.length > 0 && !isSaving;
  return (
    <Modal
      className="monthlyRegularLessonOpenModal"
      title={`${plan.monthKey || "대상 월"} 정규수업 열기`}
      subtitle={`${plan.sourceMonth || "이전 달"}의 마지막 실제 정규수업 명단과 반 시간을 기준으로, 비어 있는 회차만 추가합니다.`}
      onClose={isSaving ? () => {} : onClose}
    >
      <div className="monthlyRegularLessonOpenBody">
        {plan.errors?.length ? <p className="inlineNotice danger">{plan.errors.join(" ")}</p> : null}
        <p className="muted">기존 {plan.monthKey} 수업은 수정하지 않습니다. 출결·수업기록·숙제·알림톡은 복사하거나 예약하지 않습니다. 첫 회차의 지난 숙제는 기존 직전수업 탐색으로 {plan.sourceMonth} 마지막 수업의 다음 숙제를 이어서 표시합니다.</p>
        <div className="monthlyRegularLessonOpenSummary">
          <strong>{plan.rows?.length ?? 0}개 반</strong>
          <span>새 회차 {plan.lessonsToCreate?.length ?? 0}개</span>
        </div>
        <div className="monthlyRegularLessonOpenRows">
          {(plan.rows || []).map((row) => (
            <article key={row.classTemplateId}>
              <strong>{row.className}</strong>
              <span>{row.sourceDate} 명단 {row.studentCount}명 → 새 회차 {row.lessons.length}개</span>
              {row.existingCount ? <small>이미 열린 회차 {row.existingCount}개는 유지</small> : null}
              {row.excludedStudentCount ? <small className="dangerCopy">현재 퇴원/비활성 학생 {row.excludedStudentCount}명은 제외</small> : null}
            </article>
          ))}
        </div>
        {saveStatus?.state ? <InlineSaveStatus label="월 정규수업" saveState={saveStatus.state} /> : null}
        {saveStatus?.message ? <p className={`inlineNotice ${saveStatus.state === "failed" ? "danger" : ""}`}>{saveStatus.message}</p> : null}
        <div className="modalActions">
          <button className="softButton" disabled={isSaving} onClick={onClose} type="button">닫기</button>
          <button className="primaryButton" disabled={!canOpen} onClick={onOpen} type="button">
            {isSaving ? "Supabase 반영 확인 중" : `${plan.monthKey} 정규수업 열기`}
          </button>
        </div>
      </div>
    </Modal>
  );
}

function ExamPrepLessonDetail({ lesson, onDeleteLesson, onEditLesson }) {
  const sourceItems = String(lesson.sourceLabel || "")
    .split("·")
    .map((label) => label.trim())
    .filter(Boolean);
  const scheduledTime = `${lesson.date} ${lesson.startTime || "미정"}-${lesson.endTime || "미정"}`;
  const lessonStudentCount = getLessonStudentIds(lesson).length;

  return (
    <div className="examPrepLessonBody">
      <div className="examPrepSummaryGrid">
        <MetricCard density="compact" hint="시험대비" label="수업일" value={lesson.date} />
        <MetricCard density="compact" hint={lesson.status === "canceled" ? "취소됨" : "진행 예정"} label="시간" value={`${lesson.startTime || "미정"}-${lesson.endTime || "미정"}`} />
        <MetricCard density="compact" hint={sourceItems.length ? `${sourceItems.length}개 시험정보 연결` : "시험정보 연결 없음"} label="참여 학생" value={`${lessonStudentCount}명`} />
      </div>

      <section className="panel examPrepPanel">
        <SectionHeader
          actions={(
            <>
              <button className="ghostButton" onClick={() => onEditLesson(lesson)} type="button">
                일정 수정
              </button>
              <button className="dangerButton" onClick={() => onDeleteLesson(lesson.lessonId)} type="button">
                일정 삭제
              </button>
            </>
          )}
          actionsClassName="examPrepActions"
          density="slim"
          descriptionNode={(
            <p className="muted">
              저장된 실제 수업 기준으로 수업일지와 알림톡을 연결합니다. 날짜나 시간이 다르면 일정 수정에서 이 수업 자체를 조정합니다.
            </p>
          )}
          eyebrow="시험대비 수업"
          title={lesson.lessonTopic || lesson.className || "시험대비"}
          titleAs="h3"
        />

        {sourceItems.length ? (
          <div className="examPrepSourceList" aria-label="연결된 시험정보">
            {sourceItems.map((label) => (
              <div className="examPrepSourceItem" key={label}>
                <strong>{label}</strong>
                <small>{scheduledTime}</small>
              </div>
            ))}
          </div>
        ) : (
          <EmptyState as="p" className="examPrepEmptyState">연결된 시험정보가 없습니다. 필요한 경우 일정 수정에서 수업명과 학생 명단을 직접 정리하세요.</EmptyState>
        )}
      </section>
    </div>
  );
}


function LessonJournalFallback({ error, lesson, onBack, onDeleteLesson, onEditLesson, students = [] }) {
  const lessonStudents = getLessonJournalStudents(lesson, students);
  return (
    <section className="lessonJournalPage">
      <NavigationHeader
        actions={(
          <>
            <button className="softButton" onClick={() => onEditLesson?.(lesson)} type="button">수업 수정</button>
            <button className="dangerButton" onClick={() => onDeleteLesson?.(lesson.lessonId)} type="button">수업 취소 처리</button>
          </>
        )}
        className="lessonJournalHeader"
        description={`${lesson?.date || "-"} · ${lesson?.startTime || ""}-${lesson?.endTime || ""} · ${lessonStudents.length}명`}
        leading={<button aria-label="수업 목록으로 돌아가기" className="iconButton" onClick={onBack} type="button">‹</button>}
        title={lesson?.className || "수업일지"}
        titleAs="h2"
      />
      <section className="panel lessonJournalFallback">
        <strong>수업일지를 여는 중 오류가 발생했습니다.</strong>
        <p>수업 정보는 저장되어 있습니다. 수업 수정에서 학생과 시간을 확인한 뒤 다시 열어 주세요.</p>
        {lessonStudents.length > 0 ? (
          <div className="studentChips">
            {lessonStudents.map((student) => (
              <span className="lessonStudentChip selected" key={student.studentId}>{student.name}</span>
            ))}
          </div>
        ) : (
          <p className="muted">이 수업에 표시할 학생을 찾지 못했습니다.</p>
        )}
        <small>{String(error?.message ?? error ?? "알 수 없는 오류")}</small>
      </section>
    </section>
  );
}





function CommentComposerModal({ ...props }) {
  return (
    <LessonJournalCommentComposer
      {...props}
      dependencies={{
        buildPreviewText: buildCommentPreviewText,
        buildSourceText: buildCommentSourceText,
        createEmptyRecord,
        createRecordId: createLessonStudentRecordId,
        formatTimeLabel: formatKoreaTimeLabel,
        getAudienceStatus: getAlimtalkAudienceStatus,
        getDisplaySendStatus: getDisplayCommentSendStatus,
        getSafetyText: getAlimtalkSafetyText,
        getSafetyTone: getAlimtalkSafetyTone,
        getScheduledDate: getLessonAlimtalkScheduledDate,
        isLessonScheduleExpired: isLessonAlimtalkScheduleExpired,
        normalizeSaveState,
        normalizeText: normalizeMessageText
      }}
    />
  );
}

function ReportModal({ report, onClose, onMockSend, onSaveSnapshot }) {
  return (
    <Modal title="AI 데일리 리포트" subtitle="현재는 실제 AI API/발송 대신 모의 초안과 모의 발송 상태로 검수합니다." onClose={onClose}>
      <div className="reportMeta">
        <span>{report.lesson.date}</span>
        <span>{report.lesson.className}</span>
        <span>{report.student.name}</span>
        <span>{report.sendStatus}</span>
      </div>
      <label>
        AI API 입력 데이터
        <textarea
          readOnly
          rows="6"
          value={JSON.stringify(
            {
              student: {
                name: report.student.name,
                schoolName: report.student.schoolName,
                grade: report.student.grade,
                textbook: report.student.textbook,
                specialNote: report.student.specialNote
              },
              lesson: report.lesson,
              record: report.record,
              homework: report.homeworkBundle
            },
            null,
            2
          )}
        />
      </label>
      <label>
        보고서 초안
        <textarea readOnly rows="8" value={report.body} />
      </label>
      <div className="modalActions">
        <button className="softButton" onClick={() => onSaveSnapshot(report)} type="button">스냅샷 저장</button>
        <button className="sendButton" onClick={() => onMockSend(report)} type="button">모의 발송</button>
      </div>
    </Modal>
  );
}

function parseCsvRows(text) {
  const rows = [];
  let current = "";
  let row = [];
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const nextChar = text[index + 1];

    if (char === '"' && nextChar === '"' && inQuotes) {
      current += '"';
      index += 1;
      continue;
    }

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(current);
      current = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && nextChar === "\n") index += 1;
      row.push(current);
      if (row.some((cell) => cell.trim())) rows.push(row);
      row = [];
      current = "";
      continue;
    }

    current += char;
  }

  row.push(current);
  if (row.some((cell) => cell.trim())) rows.push(row);

  if (rows.length < 2) return [];
  const headers = rows[0].map((header) => header.replace(/^\uFEFF/, "").trim());
  return rows.slice(1).map((cells, index) => {
    const result = { csvRowNumber: index + 2 };
    headers.forEach((header, headerIndex) => {
      result[header] = (cells[headerIndex] ?? "").trim();
    });
    return result;
  });
}

function csvValue(row, candidates) {
  const normalizedEntries = Object.entries(row).map(([key, value]) => [key.replace(/\s+/g, "").toLowerCase(), value]);
  for (const candidate of candidates) {
    const normalizedCandidate = candidate.replace(/\s+/g, "").toLowerCase();
    const found = normalizedEntries.find(([key]) => key.includes(normalizedCandidate) || normalizedCandidate.includes(key));
    if (found?.[1]) return found[1];
  }
  return "";
}

function numberFromText(value) {
  const match = String(value ?? "").match(/\d+/);
  return match ? Number(match[0]) : null;
}

function buildTallySubmission(row, index, { examCycle, classTemplateId, students }) {
  const studentName = csvValue(row, ["학생명", "이름", "성명", "name"]) || `제출 ${index + 1}`;
  const matchedStudent = students.find((student) => student.name === studentName || student.loginId === studentName);
  return {
    submissionId: `tally_${safeIdPart(examCycle)}_${safeIdPart(studentName)}_${Date.now()}_${index}`,
    classTemplateId,
    examCycle,
    studentId: matchedStudent?.studentId ?? "",
    studentName,
    schoolName: matchedStudent?.schoolName || csvValue(row, ["학교", "학교명"]),
    grade: matchedStudent?.grade || csvValue(row, ["학년"]),
    difficulty: numberFromText(csvValue(row, ["시험 난이도", "난이도", "difficulty"])),
    preparation: numberFromText(csvValue(row, ["준비 충분도", "준비충분도", "준비", "preparation"])),
    academyHelp: csvValue(row, ["학원 도움", "도움", "academy"]),
    nextGoal: csvValue(row, ["다음 목표", "목표"]),
    goodPart: csvValue(row, ["잘 준비한 부분", "잘한 부분"]),
    regretReason: csvValue(row, ["아쉬웠던 이유", "아쉬운 이유"]),
    needMore: csvValue(row, ["더 준비할 부분", "보완할 부분"]),
    wantedHelp: csvValue(row, ["도움받고 싶은 것", "도움 받고 싶은 것"]),
    freeComment: csvValue(row, ["학생 코멘트", "하고 싶은 말", "의견", "comment"]),
    raw: row,
    importedAt: new Date().toISOString()
  };
}

function summarizeTallySubmissions(submissions) {
  if (!submissions.length) return "아직 생성된 AI 총평 초안이 없습니다.";
  const difficultyValues = submissions.map((item) => item.difficulty).filter((value) => Number.isFinite(value));
  const preparationValues = submissions.map((item) => item.preparation).filter((value) => Number.isFinite(value));
  const average = (values) => values.length ? (values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(1) : "-";
  const goals = submissions.map((item) => item.nextGoal).filter(Boolean).slice(0, 5);
  const needs = submissions.map((item) => item.needMore || item.wantedHelp).filter(Boolean).slice(0, 5);

  return [
    `제출 ${submissions.length}명 기준 요약입니다.`,
    `시험 난이도 평균: ${average(difficultyValues)}`,
    `준비 충분도 평균: ${average(preparationValues)}`,
    goals.length ? `다음 목표: ${goals.join(" / ")}` : "",
    needs.length ? `보완 필요: ${needs.join(" / ")}` : "",
    "학생별 세부 응답은 왼쪽 카드에서 확인하고, 최종 총평은 학교별 총평 모달에 반영하세요."
  ].filter(Boolean).join("\n");
}
function StudentPortalV2({
  examPrepRows = [],
  examPostSaveStates = {},
  examPostSubmissions = [],
  examPostTargetStudentIds = {},
  homeworks,
  homeworkSaveStates = {},
  lessons = [],
  materials = [],
  makeupTasks = [],
  questionSaveState = { state: "idle", targetId: "" },
  records = [],
  reportSnapshots,
  schoolEvents = [],
  scoreRecords = [],
  studentQuestions = [],
  students,
  sessionStudentId = "",
  previewMode = false,
  onLogout,
  onStudentAddQuestion,
  onStudentCheckHomework,
  onStudentDeleteQuestion,
  onOpenExamPostFile,
  onSubmitExamPostSubmission,
  onStudentUpdateQuestion,
}) {
  const [selectedStudentId, setSelectedStudentId] = useState(
    sessionStudentId || students.find((student) => student.name === "TestS12")?.studentId || students[0]?.studentId || ""
  );
  const [activeTab, setActiveTab] = useState("today");
  const [myPageTab, setMyPageTab] = useState("stats");

  const selectedStudent = students.find((student) => student.studentId === selectedStudentId) ?? students[0];
  const studentRecordsWithLessons = records
    .filter((record) => record.studentId === selectedStudent?.studentId)
    .map((record) => ({ ...record, lesson: lessons.find((lesson) => lesson.lessonId === record.lessonId) }))
    .filter((record) => record.lesson && record.lesson.status !== "canceled")
    .sort((a, b) => String(b.lesson?.date ?? "").localeCompare(String(a.lesson?.date ?? "")));
  const selectedStudentHomeworks = homeworks.filter((homework) => homework.studentId === selectedStudent?.studentId);
  const studentHomeworks = selectedStudentHomeworks
    .filter(isStudentVisibleHomework)
    .map((homework) => mergeHomeworkStatusFromLinkedPrevious(homework, selectedStudentHomeworks, studentRecordsWithLessons));
  const todayHomeworks = studentHomeworks.filter((homework) => homework.assignedDate === today);
  const overdueHomeworks = studentHomeworks.filter((homework) => isHomeworkOverdue(homework));
  const studentReports = reportSnapshots.filter((snapshot) => snapshot.studentId === selectedStudent?.studentId);
  const studentLessonComments = records
    .filter((record) => record.studentId === selectedStudent?.studentId && record.studentCommentSendStatus)
    .map((record) => ({ ...record, lesson: lessons.find((lesson) => lesson.lessonId === record.lessonId) }))
    .sort((a, b) => String(b.lesson?.date ?? "").localeCompare(String(a.lesson?.date ?? "")));
  const studentMaterials = filterVisibleMaterials(materials, selectedStudent, "student");
  const streakDays = calculateStreak(studentHomeworks);
  const stats = calculateHomeworkStats(studentHomeworks);
  const attendanceStats = calculateAttendanceStats(
    records
      .filter((record) => record.studentId === selectedStudent?.studentId)
      .map((record) => ({ ...record, lesson: lessons.find((lesson) => lesson.lessonId === record.lessonId) }))
  );
  const studentScoreRecords = scoreRecords.filter((score) => score.studentId === selectedStudent?.studentId);
  const upcomingStudentNotice = getStudentTopNotice(selectedStudent, examPrepRows, schoolEvents, makeupTasks);
  const studentSupplementScheduleTasks = getStudentSupplementScheduleTasks(makeupTasks, selectedStudent?.studentId)
    .filter((task) => task.status !== "canceled");
  const selectedStudentQuestions = studentQuestions
    .filter((question) => question.studentId === selectedStudent?.studentId)
    .sort((a, b) => String(b.updatedAt ?? b.createdAt ?? "").localeCompare(String(a.updatedAt ?? a.createdAt ?? "")));
  const examPostTargets = buildExamPostTargetsForStudent(selectedStudent, examPrepRows, examPostSubmissions, examPostTargetStudentIds);
  const studentExamPostWriteEnabled = !previewMode && Boolean(sessionStudentId);
  const studentHomeworkWriteEnabled = !previewMode && Boolean(sessionStudentId);
  const studentQuestionWriteEnabled = !previewMode && Boolean(sessionStudentId);

  useEffect(() => {
    if (sessionStudentId) setSelectedStudentId(sessionStudentId);
  }, [sessionStudentId]);

  return (
    <StudentPortalShell
      academyName={academyBrandName}
      activeTab={activeTab}
      allHomework={{
        getStatusLabel: getHomeworkStatusLabel,
        getStatusTone: getHomeworkStatusTone,
        homeworks: studentHomeworks,
        isCompleted: isHomeworkCompletedForStudent,
        isOverdue: isHomeworkOverdue,
        records: studentRecordsWithLessons
      }}
      currentDate={today}
      materials={studentMaterials}
      metrics={{
        overdueCount: overdueHomeworks.length,
        streakDays,
        todayCount: todayHomeworks.length
      }}
      myPage={{
        attendanceStats,
        myPageTab,
        onChangeTab: setMyPageTab,
        scoreRecords: studentScoreRecords,
        selectedStudent,
        stats,
        studentLessonComments
      }}
      onChangeActiveTab={setActiveTab}
      onChangeSelectedStudentId={setSelectedStudentId}
      onLogout={onLogout}
      previewMode={previewMode}
      reports={studentReports}
      selectedStudent={selectedStudent}
      students={students}
      today={{
        buildCalendarDays: buildMonthDays,
        examPostTargets: examPostTargets,
        getHomework: getLessonHomework,
        getHomeworkStatusLabel,
        getHomeworkStatusTone,
        getLessonContent,
        getLessonMaterial,
        getSupplementTypeLabel: followUpTypeLabel,
        homeworks,
        homeworkSaveStates,
        isHomeworkCompleted: isHomeworkCompletedForStudent,
        lessons,
        onAddQuestion: onStudentAddQuestion,
        onDeleteQuestion: onStudentDeleteQuestion,
        onOpenExamPostFile,
        onStudentCheckHomework,
        onSubmitExamPostSubmission,
        onUpdateQuestion: onStudentUpdateQuestion,
        overdueHomeworks,
        questionSaveState,
        questions: selectedStudentQuestions,
        recordsWithLessons: studentRecordsWithLessons,
        referenceDate: today,
        selectedStudent,
        studentExamPostSaveStates: examPostSaveStates,
        studentExamPostWriteEnabled,
        studentHomeworkWriteEnabled,
        studentNotice: upcomingStudentNotice,
        studentQuestionWriteEnabled,
        supplementSchedules: studentSupplementScheduleTasks,
        todayHomeworks
      }}
    />
  );
}

function filterVisibleMaterials(materials = [], student, audience) {
  if (!student) return [];
  return materials.filter((material) => {
    const visibility = material.visibility ?? "student";
    const audienceAllowed =
      visibility === "both" ||
      (audience === "student" && visibility === "student") ||
      (audience === "parent" && visibility === "parent");
    const studentAllowed =
      !material.studentIds?.length ||
      material.studentIds.includes(student.studentId) ||
      (material.classTemplateId && material.classTemplateId === student.defaultClassTemplateId);

    return audienceAllowed && studentAllowed;
  });
}

function createSupplementTaskDraft(task = {}, student = null, notificationTemplates = {}) {
  return createSupplementTaskDraftModel(task, student, notificationTemplates, supplementTaskDraftDependencies);
}

function getSupplementTaskDraftDiff(task = {}, draft = {}, student = null, notificationTemplates = {}) {
  return getSupplementTaskDraftDiffModel(task, draft, {
    createTaskDraft: (sourceTask) => createSupplementTaskDraft(sourceTask, student, notificationTemplates)
  });
}

const supplementTaskDraftDependencies = {
  buildScheduleNoticeBody: buildSupplementScheduleNoticeBody,
  createNotificationDraft,
  normalizeMethodForTask: normalizeSupplementMethodForTask,
  normalizeTime: normalizeTimeInput
};

const supplementStudentModalDependencies = {
  createSupplementTaskDraft,
  followUpTypeLabel,
  formatKoreaTimeLabel,
  formatNotificationJobStatus,
  formatSupplementScheduleDateTime,
  getSolapiNotificationJobProviderReference,
  getSupplementNotificationControlDisplayForApp,
  getSupplementScheduleChangeDetailSeed,
  getSupplementScheduleNoticeDraft,
  getSupplementTaskDraftDiff,
  maskPhoneForDisplay,
  normalizeMessageText,
  normalizeNotificationTemplates,
  supplementMethodLabel,
  supplementMethodOptions,
  supplementTaskDraftDependencies
};

const supplementCenterDependencies = {
  addDaysInKorea,
  followUpTypeLabel,
  formatDdayLabel,
  futureAbsenceMakeupVisibleDays,
  getAbsenceHomeworkCheckLabel,
  getAbsenceMakeupAvailability,
  getHomeworkMakeupReason,
  getLessonContent,
  getLessonHomework,
  getRecordLesson,
  getRecordLessonDate,
  getRecordPreviousHomework,
  getRecordStudent,
  getSupplementTaskProgress,
  isAbsenceLikeAttendanceStatus,
  isHomeworkMakeupCandidate,
  shouldIgnoreLessonAttendance,
  supplementMethodLabel,
  supplementStudentModalDependencies,
  today
};

const intakeStatusOptions = [
  { value: "received", label: "문의접수" },
  { value: "consulting", label: "상담중" },
  { value: "trial", label: "체험예정" },
  { value: "canceled", label: "등록취소" },
  { value: "paused", label: "보류" },
  { value: "lost", label: "연락두절" }
];

function StudentModal({
  applicantSaveStates = {},
  applicantRegistrationMessages = {},
  applicantRegistrationStates = {},
  intakeApplicants = [],
  students = [],
  templates,
  onClose,
  onRegisterApplicant,
  onSubmit,
  onUpdateApplicant
}) {
  const [mode, setMode] = useState("single");
  const [form, setForm] = useState({
    name: "",
    birthYear: "",
    schoolName: "",
    studentPhone: "",
    parentPhone: "",
    pin: "",
    grade: "고1",
    textbook: "",
    specialNote: "",
    defaultClassTemplateId: templates[0].classTemplateId,
    scheduleOverride: ""
  });
  const [applicantTargetStudentIds, setApplicantTargetStudentIds] = useState({});
  const activeApplicants = intakeApplicants.filter((applicant) => applicant.status !== "registered");
  const registeredApplicants = intakeApplicants.filter((applicant) => applicant.status === "registered");

  function update(field, value) {
    setForm((current) => {
      const next = { ...current, [field]: value };
      if (field === "birthYear") {
        next.grade = inferGradeFromBirthYear(value);
      }
      return next;
    });
  }

  function updateApplicant(applicantId, field, value) {
    onUpdateApplicant(applicantId, { [field]: value });
  }

  function getApplicantRegisterValues(applicant) {
    return {
      name: applicant.name,
      birthYear: applicant.birthYear,
      schoolName: applicant.schoolName,
      studentPhone: applicant.studentPhone,
      parentPhone: applicant.parentPhone,
      pin: applicant.pin || "1234",
      grade: applicant.grade || inferGradeFromBirthYear(applicant.birthYear),
      textbook: "",
      specialNote: applicant.specialNote || applicant.memo || "",
      defaultClassTemplateId: applicant.defaultClassTemplateId || "",
      scheduleOverride: ""
    };
  }

  function getRegisteredStudentForApplicant(applicant) {
    const linkedStudentId = String(applicant.memo ?? "")
      .match(/정식 학생 등록:[^\n]*\((student_[^)]+)\)/)?.[1] ?? "";
    if (linkedStudentId) return students.find((student) => student.studentId === linkedStudentId) ?? null;
    return students.find((student) => (
      String(student.name ?? "").trim() === String(applicant.name ?? "").trim() &&
      String(student.schoolName ?? "").trim() === String(applicant.schoolName ?? "").trim() &&
      String(student.grade ?? "").trim() === String(applicant.grade ?? "").trim()
    )) ?? null;
  }

  function getApplicantTargetStudentId(applicant) {
    if (Object.prototype.hasOwnProperty.call(applicantTargetStudentIds, applicant.applicantId)) {
      return applicantTargetStudentIds[applicant.applicantId];
    }
    return getDefaultTallyStudentId(getApplicantRegisterValues(applicant), students);
  }

  function getApplicantTargetStudent(applicant) {
    const targetStudentId = getApplicantTargetStudentId(applicant);
    return students.find((student) => student.studentId === targetStudentId) ?? null;
  }

  async function registerApplicant(applicant, options = {}) {
    const registerValues = getApplicantRegisterValues(applicant);
    const targetStudent = getApplicantTargetStudent(applicant);
    if (targetStudent) {
      const changes = options.replaceExisting
        ? getTallyStudentReplacementChanges(targetStudent, registerValues)
        : getTallyStudentMergeChanges(targetStudent, registerValues);
      const changeLabels = changes.map((change) => change.label).join(", ") || "변경할 기본정보 없음";
      const clearedLabels = changes
        .filter((change) => change.clearsExistingValue)
        .map((change) => change.label)
        .join(", ");
      const confirmed = window.confirm(
        options.replaceExisting
          ? `${targetStudent.name} 기존 기본정보를 삭제하고 Tally 원본으로 덮어쓸까요?\n\n교체 항목: ${changeLabels}\n${clearedLabels ? `Tally가 비어 있어 삭제될 항목: ${clearedLabels}\n` : ""}학생 ID, 로그인 ID, PIN, 교재, 개별 시간표와 과거 수업·출결 기록은 유지됩니다. 정규반이 비어 있으면 안전한 미래 정규 수업 명단에서도 제외됩니다.`
          : `${targetStudent.name} 기존 학생에 Tally 정보를 보강할까요?\n\n반영 항목: ${changeLabels}\n학생 ID, 로그인 ID, PIN, 교재, 개별 시간표와 기존 수업·출결 기록은 유지됩니다. Tally의 빈 값은 기존 정보를 지우지 않습니다.`
      );
      if (!confirmed) return;
    }
    try {
      await onRegisterApplicant(applicant.applicantId, registerValues, {
        replaceExisting: Boolean(targetStudent && options.replaceExisting),
        targetStudentId: targetStudent?.studentId ?? ""
      });
    } catch {
      // The parent keeps the modal open and renders the detailed failure message.
    }
  }

  function renderApplicantMergeTarget(applicant) {
    const candidates = getTallyStudentMergeCandidates(getApplicantRegisterValues(applicant), students);
    const targetStudentId = getApplicantTargetStudentId(applicant);
    const targetStudent = students.find((student) => student.studentId === targetStudentId) ?? null;
    const changes = targetStudent
      ? getTallyStudentMergeChanges(targetStudent, getApplicantRegisterValues(applicant))
      : [];
    const replacementChanges = targetStudent
      ? getTallyStudentReplacementChanges(targetStudent, getApplicantRegisterValues(applicant))
      : [];
    const clearedLabels = replacementChanges
      .filter((change) => change.clearsExistingValue)
      .map((change) => change.label);
    return (
      <div className={targetStudent ? "studentIntakeMergeTarget matched" : "studentIntakeMergeTarget"}>
        <label>
          Tally 반영 대상
          <select
            value={targetStudentId}
            onChange={(event) => setApplicantTargetStudentIds((current) => ({
              ...current,
              [applicant.applicantId]: event.target.value
            }))}
          >
            <option value="">새 학생으로 등록</option>
            {candidates.map((student) => (
              <option key={`${applicant.applicantId}_target_${student.studentId}`} value={student.studentId}>
                {student.name} · {student.schoolName || "학교 미입력"} · {student.grade || "학년 미입력"} · {
                  student.defaultClassTemplateId
                    ? templates.find((template) => template.classTemplateId === student.defaultClassTemplateId)?.name || "정규반 배정"
                    : "정규반 미배정"
                }
              </option>
            ))}
          </select>
        </label>
        {targetStudent ? (
          <div>
            <strong>기존 학생 반영 방식을 선택합니다</strong>
            <span>
              {changes.length
                ? `빈칸 보존·보강 시 변경: ${changes.map((change) => change.label).join(", ")}`
                : "학생 기본정보가 이미 Tally와 같습니다."}
            </span>
            <small>
              완전 덮어쓰기 시 Tally 빈칸으로 삭제: {clearedLabels.length ? clearedLabels.join(", ") : "없음"} · 학생 ID/로그인/PIN과 과거 수업·출결은 유지
            </small>
          </div>
        ) : (
          <div>
            <strong>새 학생 원천 생성</strong>
            <span>같은 학생이 이미 있다면 위 목록에서 먼저 선택해 중복 생성을 막아 주세요.</span>
          </div>
        )}
      </div>
    );
  }

  function renderTallyQuestionFields(applicant) {
    return (
      <>
        <label>재원생 여부<input value={applicant.enrollmentStatus ?? ""} onChange={(event) => updateApplicant(applicant.applicantId, "enrollmentStatus", event.target.value)} /></label>
        <label>현재 학습 과정<input value={applicant.currentLearningProcess ?? ""} onChange={(event) => updateApplicant(applicant.applicantId, "currentLearningProcess", event.target.value)} /></label>
        <label>직전학기 내신 성적<input value={applicant.previousSemesterScore ?? ""} onChange={(event) => updateApplicant(applicant.applicantId, "previousSemesterScore", event.target.value)} /></label>
        <label>특이사항<input value={applicant.specialNote ?? ""} onChange={(event) => updateApplicant(applicant.applicantId, "specialNote", event.target.value)} /></label>
        <label>추가 메모<input value={applicant.memo || applicant.desiredClass || ""} onChange={(event) => updateApplicant(applicant.applicantId, "memo", event.target.value)} /></label>
      </>
    );
  }

  return (
    <Modal
      className="studentAddModal"
      title="학생 추가"
      subtitle="한 명씩 등록하거나 엑셀에서 복사한 목록을 일괄 등록합니다."
      onClose={onClose}
      scrollable
    >
      <div className="studentAddTabs" role="tablist" aria-label="학생 추가 방식">
        <button className={mode === "single" ? "active" : ""} onClick={() => setMode("single")} type="button">한 명씩</button>
        <button className={mode === "bulk" ? "active" : ""} onClick={() => setMode("bulk")} type="button">엑셀 일괄 등록</button>
        <button className={mode === "intake" ? "active" : ""} onClick={() => setMode("intake")} type="button">Tally 접수</button>
      </div>

      {mode === "single" ? (
        <>
          <div className="studentAddGrid">
            <label>이름<input value={form.name} onChange={(event) => update("name", event.target.value)} placeholder="박수빈" /></label>
            <label>
              출생연도
              <div className="birthYearWithGrade">
                <input value={form.birthYear} onChange={(event) => update("birthYear", event.target.value)} placeholder="2010" />
                <span>{form.grade || "학년"}</span>
              </div>
            </label>
            <label>학교<input value={form.schoolName} onChange={(event) => update("schoolName", event.target.value)} placeholder="자운고등학교" /></label>
            <label>PIN<input value={form.pin} onChange={(event) => update("pin", event.target.value)} placeholder="1234" /></label>
            <label>학생전화번호<input inputMode="tel" value={form.studentPhone} onChange={(event) => update("studentPhone", event.target.value)} placeholder="01012345678" /></label>
            <label>학부모전화번호<input inputMode="tel" value={form.parentPhone} onChange={(event) => update("parentPhone", event.target.value)} placeholder="01012345678" /></label>
            <label>
              반
              <select value={form.defaultClassTemplateId} onChange={(event) => update("defaultClassTemplateId", event.target.value)}>
                <option value="">미배정</option>
                {templates.map((template) => (
                  <option key={template.classTemplateId} value={template.classTemplateId}>{template.name}</option>
                ))}
              </select>
            </label>
            <label>특이사항<input value={form.specialNote} onChange={(event) => update("specialNote", event.target.value)} placeholder="상담 메모 또는 주의사항" /></label>
          </div>
          <button className="primaryButton full studentAddSubmit" onClick={() => onSubmit(form)} type="button">학생 저장</button>
        </>
      ) : mode === "bulk" ? (
        <div className="studentBulkPlaceholder">
          <strong>엑셀 일괄 등록</strong>
          <p className="muted">이름, 출생연도, 학교, PIN 순서로 복사한 목록을 붙여넣는 기능으로 확장 예정입니다.</p>
          <textarea aria-label="학생 엑셀 일괄 등록 원본" placeholder={"박수빈\t2010\t자운고등학교\t1234"} rows="6" />
          <button className="primaryButton full" disabled type="button">일괄 등록 준비 중</button>
        </div>
      ) : (
        <div className="studentIntakePanel">
          <div className="intakeEndpointBox">
            <strong>Tally 웹훅 연결 주소</strong>
            <code>https://koh-you-math-academy-os-api.onrender.com/api/intake/tally</code>
            <p className="muted">Tally 제출은 정식 학생이 아니라 입학 후보로 먼저 저장됩니다. 확인 후 정식 등록하세요.</p>
          </div>
          <div className="studentIntakeSummary">
            <span>확인 필요 {activeApplicants.length}명</span>
            <span>등록 완료 {registeredApplicants.length}명</span>
          </div>
          {activeApplicants.length === 0 ? (
            <EmptyState className="emptyState">아직 확인할 Tally 접수 후보가 없습니다.</EmptyState>
          ) : null}
          <div
            aria-label="Tally 접수·등록 후보 목록"
            className="studentIntakeList"
            role="region"
            tabIndex={0}
          >
            {activeApplicants.map((applicant) => (
              <article className="studentIntakeCard" key={applicant.applicantId}>
                <div className="studentIntakeCardHeader">
                  <div>
                    <strong>{applicant.name || "이름 미입력"}</strong>
                    <span>{[applicant.grade || inferGradeFromBirthYear(applicant.birthYear), applicant.schoolName].filter(Boolean).join(" · ") || "기본 정보 미입력"}</span>
                  </div>
                  <select
                    aria-label={`${applicant.name || "이름 미입력"} Tally 접수 상태`}
                    value={applicant.status ?? "received"}
                    onChange={(event) => updateApplicant(applicant.applicantId, "status", event.target.value)}
                  >
                    {intakeStatusOptions.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
                <div className="studentIntakeGrid">
                  <label>이름<input value={applicant.name ?? ""} onChange={(event) => updateApplicant(applicant.applicantId, "name", event.target.value)} /></label>
                  <label>출생연도<input value={applicant.birthYear ?? ""} onChange={(event) => updateApplicant(applicant.applicantId, "birthYear", event.target.value)} /></label>
                  <label>학교<input value={applicant.schoolName ?? ""} onChange={(event) => updateApplicant(applicant.applicantId, "schoolName", event.target.value)} /></label>
                  <label>학년<input value={applicant.grade ?? ""} onChange={(event) => updateApplicant(applicant.applicantId, "grade", event.target.value)} /></label>
                  <label>학생전화<input value={applicant.studentPhone ?? ""} onChange={(event) => updateApplicant(applicant.applicantId, "studentPhone", event.target.value)} /></label>
                  <label>학부모전화<input value={applicant.parentPhone ?? ""} onChange={(event) => updateApplicant(applicant.applicantId, "parentPhone", event.target.value)} /></label>
                  <label>
                    배정 반
                    <select value={applicant.defaultClassTemplateId ?? ""} onChange={(event) => updateApplicant(applicant.applicantId, "defaultClassTemplateId", event.target.value)}>
                      <option value="">미배정</option>
                      {templates.map((template) => (
                        <option key={template.classTemplateId} value={template.classTemplateId}>{template.name}</option>
                      ))}
                    </select>
                  </label>
                  {renderTallyQuestionFields(applicant)}
                </div>
                {renderApplicantMergeTarget(applicant)}
                <div className="studentIntakeActions">
                  <small>{applicant.formName || "Tally"} · {applicant.createdAt ? new Date(applicant.createdAt).toLocaleString("ko-KR") : "접수일 미확인"}</small>
                  {applicantSaveStates[applicant.applicantId] ? (
                    <InlineSaveStatus label="접수정보" saveState={applicantSaveStates[applicant.applicantId]} />
                  ) : null}
                  {getApplicantTargetStudent(applicant) ? (
                    <div className="studentIntakeActionButtons">
                      <button
                        className="softButton"
                        disabled={!applicant.name || applicantRegistrationStates[applicant.applicantId] === "saving"}
                        onClick={() => registerApplicant(applicant)}
                        type="button"
                      >
                        {applicantRegistrationStates[applicant.applicantId] === "saving" ? "반영 중" : "빈칸 유지하고 보강"}
                      </button>
                      <button
                        className="dangerButton"
                        disabled={!applicant.name || applicantRegistrationStates[applicant.applicantId] === "saving"}
                        onClick={() => registerApplicant(applicant, { replaceExisting: true })}
                        type="button"
                      >
                        {applicantRegistrationStates[applicant.applicantId] === "saving" ? "덮어쓰기 중" : "기존 기본정보 삭제 후 Tally 덮어쓰기"}
                      </button>
                    </div>
                  ) : (
                    <button
                      className="primaryButton"
                      disabled={!applicant.name || applicantRegistrationStates[applicant.applicantId] === "saving"}
                      onClick={() => registerApplicant(applicant)}
                      type="button"
                    >
                      {applicantRegistrationStates[applicant.applicantId] === "saving" ? "반영 중" : "새 학생으로 등록"}
                    </button>
                  )}
                </div>
                {applicantRegistrationStates[applicant.applicantId] ? (
                  <div className={`studentIntakeRegistrationStatus ${applicantRegistrationStates[applicant.applicantId]}`}>
                    <InlineSaveStatus label="학생 등록" saveState={applicantRegistrationStates[applicant.applicantId]} />
                    <span>{applicantRegistrationMessages[applicant.applicantId]}</span>
                  </div>
                ) : null}
              </article>
            ))}
            {registeredApplicants.length > 0 ? (
              <div className="studentIntakeRegisteredList">
                <strong>등록 완료 후보</strong>
                {registeredApplicants.map((applicant) => {
                  const registeredStudent = getRegisteredStudentForApplicant(applicant);
                  const registrationState = applicantRegistrationStates[applicant.applicantId];
                  return (
                    <article className={`studentIntakeCard registered ${registeredStudent ? "linked" : "unlinked"}`} key={applicant.applicantId}>
                      <div className="studentIntakeCardHeader">
                        <div>
                          <strong>{applicant.name || "이름 미입력"}</strong>
                          <span>{[applicant.grade || inferGradeFromBirthYear(applicant.birthYear), applicant.schoolName, applicant.defaultClassTemplateId ? templates.find((template) => template.classTemplateId === applicant.defaultClassTemplateId)?.name : "미배정"].filter(Boolean).join(" · ") || "기본 정보 미입력"}</span>
                        </div>
                        <span className={`statusPill ${registeredStudent ? "status-sent" : "status-failed"}`}>
                          {registeredStudent ? "학생명단 반영 완료" : "학생명단 미반영"}
                        </span>
                      </div>
                      <div className="studentIntakeAnswerList">
                        {[
                          ["재원생 여부", applicant.enrollmentStatus],
                          ["현재 학습 과정", applicant.currentLearningProcess],
                          ["직전학기 내신 성적", applicant.previousSemesterScore],
                          ["특이사항", applicant.specialNote],
                          ["추가 메모", applicant.memo]
                        ].filter(([, value]) => value).map(([label, value]) => (
                          <span key={label}><b>{label}</b>{value}</span>
                        ))}
                      </div>
                      {!registeredStudent ? (
                        <div className="studentIntakeRegistrationRecovery">
                          <strong>등록확정 상태만 저장되고 학생 원천에는 반영되지 않았습니다.</strong>
                          <span>반을 선택하지 않은 후보는 미배정 학생으로 등록되며, 반 배정 후 미래 수업 명단에 반영됩니다.</span>
                          <label>
                            복구 배정 반
                            <select
                              value={applicant.defaultClassTemplateId ?? ""}
                              onChange={(event) => updateApplicant(applicant.applicantId, "defaultClassTemplateId", event.target.value)}
                            >
                              <option value="">미배정</option>
                              {templates.map((template) => (
                                <option key={template.classTemplateId} value={template.classTemplateId}>{template.name}</option>
                              ))}
                            </select>
                          </label>
                          <button
                            className="primaryButton"
                            disabled={registrationState === "saving"}
                            onClick={() => registerApplicant(applicant)}
                            type="button"
                          >
                            {registrationState === "saving" ? "학생명단 반영 중" : "학생명단에 반영"}
                          </button>
                        </div>
                      ) : null}
                      {registrationState ? (
                        <div className={`studentIntakeRegistrationStatus ${registrationState}`}>
                          <InlineSaveStatus label="학생 등록" saveState={registrationState} />
                          <span>{applicantRegistrationMessages[applicant.applicantId]}</span>
                        </div>
                      ) : null}
                    </article>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      )}
    </Modal>
  );
}

function inferGradeFromBirthYear(birthYear) {
  const year = Number(String(birthYear).replace(/[^0-9]/g, ""));
  if (!year) return "고1";
  const ageGrade = new Date(`${today}T00:00:00+09:00`).getFullYear() - year - 15;
  if (ageGrade <= -2) return "중1";
  if (ageGrade === -1) return "중2";
  if (ageGrade === 0) return "중3";
  if (ageGrade === 1) return "고1";
  if (ageGrade === 2) return "고2";
  return "고3";
}

function ReportCenter({ lessons, records, reportLesson, selectedReportLessonId, snapshots, students, onSaveSnapshot, onSelectLesson }) {
  const [selectedStudentId, setSelectedStudentId] = useState("");
  const lessonStudents = reportLesson
    ? getActiveLessonStudents(reportLesson, students)
    : [];
  const activeStudent = lessonStudents.find((student) => student.studentId === selectedStudentId) ?? lessonStudents[0];
  const activeRecord = activeStudent ? records.find((record) => record.studentId === activeStudent.studentId) : null;
  const reportBody = activeStudent && reportLesson
    ? createReportBody(activeStudent, reportLesson, activeRecord)
    : "";

  useEffect(() => {
    if (lessonStudents[0] && !lessonStudents.some((student) => student.studentId === selectedStudentId)) {
      setSelectedStudentId(lessonStudents[0].studentId);
    }
  }, [lessonStudents, selectedStudentId]);

  function saveSnapshot() {
    if (!activeStudent || !reportLesson) return;

    onSaveSnapshot({
      reportId: `report_${Date.now()}_${activeStudent.studentId}`,
      studentId: activeStudent.studentId,
      lessonId: reportLesson.lessonId,
      title: `${reportLesson.date} ${activeStudent.name} 리포트`,
      body: reportBody,
      status: "snapshot_saved",
      createdAt: new Date().toISOString()
    });
  }

  return (
    <section className="reportGrid">
      <div className="panel">
        <SectionHeader
          description="Day 10-12: 템플릿, 초안, 스냅샷 저장"
          title="보고서 생성"
          titleAs="h1"
        />
        <label>수업 선택
          <select value={selectedReportLessonId} onChange={(event) => onSelectLesson(event.target.value)}>
            {lessons.map((lesson) => (
              <option key={lesson.lessonId} value={lesson.lessonId}>{lesson.date} · {lesson.className}</option>
            ))}
          </select>
        </label>
        <label>학생 선택
          <select value={activeStudent?.studentId ?? ""} onChange={(event) => setSelectedStudentId(event.target.value)}>
            {lessonStudents.map((student) => <option key={student.studentId} value={student.studentId}>{student.name}</option>)}
          </select>
        </label>
        <label>리포트 템플릿
          <textarea readOnly rows="4" value={sampleData.reportTemplates[0].body} />
        </label>
      </div>

      <div className="panel">
        <SectionHeader
          actions={<button className="primaryButton" onClick={saveSnapshot} type="button">스냅샷 저장</button>}
          eyebrow="Draft"
          title="리포트 초안"
        />
        <textarea aria-label="리포트 초안" className="reportDraft" readOnly rows="12" value={reportBody} />
      </div>

      <div className="panel snapshotsPanel">
        <h2>저장된 스냅샷</h2>
        {snapshots.length === 0 ? <p className="muted">아직 저장된 스냅샷이 없습니다.</p> : null}
        {snapshots.map((snapshot) => (
          <article className="snapshotCard" key={snapshot.reportId}>
            <strong>{snapshot.title}</strong>
            <small>{snapshot.status} · {snapshot.createdAt}</small>
            <p>{snapshot.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function useStoredState(key, fallbackValue) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") return fallbackValue;
    try {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : fallbackValue;
    } catch (error) {
      return fallbackValue;
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    writeStorageValue(window.localStorage, key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function buildMonthDays(referenceDate = today) {
  const days = [];
  const [year, month] = referenceDate.split("-").map(Number);
  const firstDay = new Date(Date.UTC(year, month - 1, 1));
  const startOffset = firstDay.getUTCDay();
  const calendarStart = new Date(firstDay);
  calendarStart.setUTCDate(firstDay.getUTCDate() - startOffset);

  for (let index = 0; index < 42; index += 1) {
    const date = new Date(calendarStart);
    date.setUTCDate(calendarStart.getUTCDate() + index);
    const dateMonth = date.getUTCMonth() + 1;
    const dayNumber = String(date.getUTCDate());
    const dateString = [
      date.getUTCFullYear(),
      String(dateMonth).padStart(2, "0"),
      dayNumber.padStart(2, "0")
    ].join("-");
    days.push({
      date: dateString,
      dayNumber,
      inMonth: dateMonth === month
    });
  }
  return days;
}

function formatMonthTitle(dateString) {
  const [year, month] = dateString.split("-");
  return `${year}년 ${Number(month)}월`;
}

function sortByTime(a, b) {
  return a.startTime.localeCompare(b.startTime);
}

function isActiveLesson(lesson) {
  return (
    lesson?.date >= academyOperationalStartDate &&
    !["canceled", "deleted"].includes(lesson?.status ?? "scheduled")
  );
}

function activeLessonIdSet(lessons = []) {
  return new Set(lessons.filter(isActiveLesson).map((lesson) => lesson.lessonId));
}

function filterActiveLessons(lessons = []) {
  return lessons.filter(isActiveLesson);
}

function filterRecordsForLessons(records = [], lessons = []) {
  const lessonIds = activeLessonIdSet(lessons);
  return records.filter((record) => lessonIds.has(record.lessonId));
}

function filterHomeworksForLessons(homeworks = [], lessons = []) {
  const lessonIds = activeLessonIdSet(lessons);
  return homeworks.filter((homework) => homework.lessonId && lessonIds.has(homework.lessonId));
}

function pruneExpiredLessonDeletes(bundles = []) {
  const now = Date.now();
  return bundles.filter((bundle) => !bundle.expiresAt || Date.parse(bundle.expiresAt) > now);
}

function getLessonSortValue(lesson) {
  return `${lesson.date ?? ""}T${lesson.startTime || "00:00"}`;
}

function isSpecialLectureLesson(lesson = {}) {
  return Boolean(
    lesson.lessonType === "specialLecture" ||
    lesson.lessonTrackType === "specialLecture" ||
    lesson.specialLectureGuideId
  );
}

function getLessonContinuityKey(lesson = {}) {
  if (isSpecialLectureLesson(lesson)) {
    return lesson.lessonTrackId || (lesson.specialLectureGuideId ? getSpecialLectureLessonTrackId(lesson) : "");
  }
  if (lesson.classTemplateId) return `classTemplate:${lesson.classTemplateId}`;
  return `className:${lesson.className ?? ""}`;
}

function isSameLessonGroup(lesson, candidate) {
  const lessonIsSpecial = isSpecialLectureLesson(lesson);
  const candidateIsSpecial = isSpecialLectureLesson(candidate);
  if (lessonIsSpecial || candidateIsSpecial) {
    const lessonKey = getLessonContinuityKey(lesson);
    const candidateKey = getLessonContinuityKey(candidate);
    return Boolean(lessonIsSpecial && candidateIsSpecial && lessonKey && lessonKey === candidateKey);
  }
  return getLessonContinuityKey(lesson) === getLessonContinuityKey(candidate);
}

function findNextLessonForStudent(lessons, lesson, studentId) {
  const currentSortValue = getLessonSortValue(lesson);
  return [...lessons]
    .filter((candidate) => candidate.lessonId !== lesson.lessonId)
    .filter((candidate) => !shouldIgnoreLessonAttendance(candidate))
    .filter((candidate) => isSameLessonGroup(lesson, candidate))
    .filter((candidate) => candidate.studentIds?.includes(studentId))
    .filter((candidate) => getLessonSortValue(candidate) > currentSortValue)
    .sort((a, b) => getLessonSortValue(a).localeCompare(getLessonSortValue(b)))[0];
}

function findPreviousLessonForStudent(lessons, lesson, studentId, { allowRegularClassFallback = false } = {}) {
  const currentSortValue = getLessonSortValue(lesson);
  const previousLessons = [...lessons]
    .filter((candidate) => candidate.lessonId !== lesson.lessonId)
    .filter((candidate) => !shouldIgnoreLessonAttendance(candidate))
    .filter((candidate) => candidate.studentIds?.includes(studentId))
    .filter((candidate) => getLessonSortValue(candidate) < currentSortValue)
    .sort((a, b) => getLessonSortValue(b).localeCompare(getLessonSortValue(a)));
  const previousLessonInCurrentGroup = previousLessons.find((candidate) => isSameLessonGroup(lesson, candidate));
  if (previousLessonInCurrentGroup || !allowRegularClassFallback || isSpecialLectureLesson(lesson)) {
    return previousLessonInCurrentGroup;
  }
  return previousLessons.find((candidate) => !isSpecialLectureLesson(candidate));
}

function createLinkedPreviousHomework(homeworks, lessons, lesson, student, sourceHomework) {
  const nextLesson = findNextLessonForStudent(lessons, lesson, student.studentId);
  if (!nextLesson) return null;

  const existing = homeworks.find(
    (homework) =>
      homework.lessonId === nextLesson.lessonId &&
      homework.studentId === student.studentId &&
      homework.homeworkType === "previous"
  );
  const title = sourceHomework.title ?? "";

  if (!title.trim() && !existing) return null;

  return {
    ...(existing ?? {}),
    homeworkId: existing?.homeworkId ?? `homework_previous_${nextLesson.date}_${student.studentId}`,
    lessonId: nextLesson.lessonId,
    studentId: student.studentId,
    title,
    subject: existing?.subject ?? sourceHomework.subject ?? "노션 수업 DB",
    homeworkType: "previous",
    totalProblems: existing?.totalProblems ?? sourceHomework.totalProblems ?? null,
    status: existing?.status ?? "verified",
    studentStatus: existing?.studentStatus ?? "not_started",
    teacherStatus: existing?.teacherStatus ?? "unverified",
    assignedDate: lesson.date,
    dueDate: existing?.dueDate ?? nextLesson.date,
    linkedFromLessonId: lesson.lessonId,
    linkedFromDate: lesson.date
  };
}

function createPreviousHomeworksFromPriorLesson(homeworks, lessons, lesson) {
  return (lesson.studentIds ?? [])
    .map((studentId) => {
      const previousLesson = findPreviousLessonForStudent(lessons, lesson, studentId);
      if (!previousLesson) return null;

      const sourceHomework = homeworks.find(
        (homework) =>
          homework.lessonId === previousLesson.lessonId &&
          homework.studentId === studentId &&
          homework.homeworkType === "next"
      );
      if (!sourceHomework?.title?.trim()) return null;

      const existing = homeworks.find(
        (homework) =>
          homework.lessonId === lesson.lessonId &&
          homework.studentId === studentId &&
          homework.homeworkType === "previous"
      );

      return {
        ...(existing ?? {}),
        homeworkId: existing?.homeworkId ?? `homework_previous_${lesson.date}_${studentId}`,
        lessonId: lesson.lessonId,
        studentId,
        title: sourceHomework.title,
        subject: existing?.subject ?? sourceHomework.subject ?? "노션 수업 DB",
        homeworkType: "previous",
        totalProblems: existing?.totalProblems ?? sourceHomework.totalProblems ?? null,
        status: existing?.status ?? "verified",
        studentStatus: existing?.studentStatus ?? "not_started",
        teacherStatus: existing?.teacherStatus ?? "unverified",
        assignedDate: previousLesson.date,
        dueDate: existing?.dueDate ?? lesson.date,
        linkedFromLessonId: previousLesson.lessonId,
        linkedFromDate: previousLesson.date
      };
    })
    .filter(Boolean);
}

function createLessonId(date, name) {
  return `lesson_${date}_${name.replaceAll(" ", "-").replaceAll("/", "-")}_${Date.now()}`;
}

function createSupplementLessonId(task) {
  return `lesson_supplement_${task.makeupTaskId}`;
}

function createSupplementLessonName(task, student) {
  return `${followUpTypeLabel(task.taskType)} · ${student.name}`;
}

function getRegularLessonColorKey(lesson = {}) {
  const classTemplateId = String(lesson.classTemplateId ?? lesson.classId ?? "").trim();
  if (classTemplateId) return classTemplateId;
  return String(lesson.className ?? lesson.name ?? "").trim();
}

function getFallbackRegularLessonColor(key = "") {
  if (!key) return lessonCalendarColors.regular;
  const hash = Array.from(key).reduce((sum, character) => sum + character.charCodeAt(0), 0);
  return fallbackRegularLessonColors[hash % fallbackRegularLessonColors.length] ?? lessonCalendarColors.regular;
}

function getRegularLessonColor(lesson = {}) {
  const colorKey = getRegularLessonColorKey(lesson);
  return regularLessonClassColors[colorKey] ?? getFallbackRegularLessonColor(colorKey);
}

function getClassTemplateScheduleRule(template = {}) {
  const classTemplateId = String(template.classTemplateId ?? template.classId ?? "").trim();
  const compactName = String(template.name ?? template.className ?? "")
    .replace(/\s+/g, "")
    .replaceAll("/", "");
  if (
    classTemplateId === "template_tt_sat_front" ||
    compactName.includes("화목토앞") ||
    compactName.includes("화목4-7") ||
    compactName.includes("토10-1")
  ) {
    return classTemplateScheduleRules.template_tt_sat_front;
  }
  if (
    classTemplateId === "template_tt_sat_back" ||
    compactName.includes("화목토뒷") ||
    compactName.includes("화목7-10") ||
    compactName.includes("토1-4")
  ) {
    return classTemplateScheduleRules.template_tt_sat_back;
  }
  return null;
}

function formatClassTemplateTimeLabel(template = {}) {
  const startTime = normalizeTimeInput(template.startTime);
  const endTime = normalizeTimeInput(template.endTime);
  return startTime && endTime ? `${startTime}-${endTime}` : "";
}

function normalizeClassTemplateSchedule(template = {}) {
  const rule = getClassTemplateScheduleRule(template);
  if (!rule) {
    return {
      ...template,
      startTime: normalizeTimeInput(template.startTime) || template.startTime || "",
      endTime: normalizeTimeInput(template.endTime) || template.endTime || "",
      timeLabel: template.timeLabel || formatClassTemplateTimeLabel(template)
    };
  }
  return {
    ...template,
    days: Array.isArray(template.days) && template.days.length > 0 ? template.days : rule.days,
    endTime: rule.endTime,
    name: rule.name,
    saturdayEndTime: rule.saturdayEndTime,
    saturdayStartTime: rule.saturdayStartTime,
    startTime: rule.startTime,
    timeLabel: rule.timeLabel
  };
}

function normalizeClassTemplates(templates = []) {
  return templates.map((template) => normalizeClassTemplateSchedule(template));
}

function getSupplementLessonColor(taskType) {
  if (taskType === "homework_makeup") return lessonCalendarColors.homeworkMakeup;
  if (taskType === "retest") return lessonCalendarColors.retest;
  if (taskType === "absence_makeup") return lessonCalendarColors.absenceMakeup;
  return lessonCalendarColors.makeup;
}

function isExamPrepLesson(lesson = {}) {
  return lesson?.lessonType === "examPrep";
}

function isLegacyExamPrepLesson(lesson = {}) {
  return (
    lesson?.lessonType === "examSundayMakeup" ||
    String(lesson?.lessonId || "").startsWith("lesson_exam_sunday_makeup_") ||
    String(lesson?.sourceSchoolEventId || "").startsWith("generated:sunday_makeup:")
  );
}

function getStandardLessonColor(lesson = {}, linkedTask = null) {
  if (linkedTask?.taskType && linkedTask.linkedLessonId === lesson.lessonId) {
    return getSupplementLessonColor(linkedTask.taskType);
  }
  if (lesson.lessonType === "preExam") return lessonCalendarColors.preExam;
  if (lesson.lessonType === "exam") return lessonCalendarColors.exam;
  if (lesson.lessonType === "closure") return lessonCalendarColors.closure;
  if (isExamPrepLesson(lesson)) return lessonCalendarColors.examPrep;
  if (lesson.lessonType === "specialLecture" || lesson.lessonTrackType === "specialLecture") return lessonCalendarColors.specialLecture;
  if (lesson.lessonType === "makeup") {
    if (linkedTask?.taskType) return getSupplementLessonColor(linkedTask.taskType);
    if (lesson.lessonTopic?.includes("숙제보충") || lesson.className?.includes("숙제보충")) {
      return getSupplementLessonColor("homework_makeup");
    }
    if (lesson.lessonTopic?.includes("재시험") || lesson.className?.includes("재시험")) {
      return getSupplementLessonColor("retest");
    }
    return lessonCalendarColors.makeup;
  }
  return getRegularLessonColor(lesson);
}

function isSupplementMakeupTaskLesson(lesson, task) {
  return Boolean(
    ["homework_makeup", "absence_makeup"].includes(task?.taskType) &&
    (lesson?.lessonType === "makeup" || task.linkedLessonId === lesson?.lessonId || lesson?.sourceMakeupTaskId === task.makeupTaskId)
  );
}

function normalizeLessonCalendarColors(lessons = [], makeupTasks = []) {
  const taskByLessonId = new Map(
    makeupTasks
      .filter((task) => task.linkedLessonId)
      .map((task) => [task.linkedLessonId, task])
  );
  return lessons.map((lesson) => {
    const standardColor = getStandardLessonColor(lesson, taskByLessonId.get(lesson.lessonId));
    return lesson.color === standardColor ? lesson : { ...lesson, color: standardColor };
  });
}

function normalizeLessonTemplateTimes(lessons = [], classTemplates = []) {
  const templateById = new Map(normalizeClassTemplates(classTemplates).map((template) => [template.classTemplateId, template]));
  return lessons.map((lesson) => {
    if (!lesson || lesson.lessonType !== "class") return lesson;
    const template = templateById.get(lesson.classTemplateId) ?? normalizeClassTemplateSchedule({
      classTemplateId: lesson.classTemplateId,
      endTime: lesson.endTime,
      name: lesson.className,
      startTime: lesson.startTime
    });
    if (!getClassTemplateScheduleRule(template)) return lesson;
    const templateTimes = getTemplateLessonTimes(template, lesson.date);
    const sameStartTime = normalizeTimeInput(lesson.startTime) === templateTimes.startTime;
    const sameEndTime = normalizeTimeInput(lesson.endTime) === templateTimes.endTime;
    const nextClassName = template.name || lesson.className;
    if (sameStartTime && sameEndTime && lesson.className === nextClassName) return lesson;
    return {
      ...lesson,
      className: nextClassName,
      endTime: templateTimes.endTime,
      startTime: templateTimes.startTime
    };
  });
}

function normalizeLessonCalendarRules(lessons = [], makeupTasks = [], classTemplates = []) {
  return normalizeLessonTemplateTimes(
    normalizeLessonCalendarColors(lessons, makeupTasks),
    classTemplates
  );
}

function areLessonCalendarRuleFieldsEqual(candidate = {}, existing = {}) {
  if (!candidate || !existing) return false;
  const fields = ["className", "color"];
  const sameFields = fields.every((field) => String(candidate[field] ?? "") === String(existing[field] ?? ""));
  if (!sameFields) return false;
  return ["startTime", "endTime"].every((field) =>
    normalizeTimeInput(candidate[field] ?? "") === normalizeTimeInput(existing[field] ?? "")
  );
}

const {
  getGeneratedLessonIdentityKeys,
  getGeneratedLessonKey
} = createGeneratedLessonIdentityModel({
  addDaysInKorea,
  isExamPrepLesson,
  normalizeGradeLabel
});

const getStudentsForSchoolCalendarEvent =
  createGeneratedSchoolEventStudentSelector({
    isActiveStudent,
    normalizeGradeLabel,
    schoolNamesMatch
  });

const createPreExamLessonFromSchoolEvent =
  createGeneratedPreExamLessonBuilder({
    addDaysInKorea,
    createPreExamGeneratedKey,
    createPreExamLessonId,
    getDayKey,
    getStandardLessonColor,
    getStudentsForSchoolCalendarEvent
  });

const inferMathExamLabelFromPreExamLesson =
  createPreExamMathLabelInference({
    normalizeGradeLabel
  });

const repairExamPrepRowsFromPersistedPreExamLessons =
  createPersistedPreExamRowRepair({
    addDaysInKorea,
    getExamPrepIdFromDerivedMathEvent,
    inferMathExamLabelFromPreExamLesson,
    normalizeGradeLabel,
    normalizeMathExamEntries,
    normalizeMathSubject,
    safeIdPart,
    syncPrimaryMathExamDate
  });

const getSundayDatesForExamPeriod =
  createExamPeriodSundayDateSelector({
    toKoreaDateString
  });

const buildExamPrepLessonCandidates =
  createExamPrepLessonCandidateBuilder({
    examCycleLabel,
    getExamPrepGeneratedKeyForDate,
    getStandardLessonColor,
    getSundayDatesForExamPeriod,
    parseDateRangeText
  });

function toKoreaDateString(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function formatKoreanDateTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "확정 기록 없음";
  return date.toLocaleString("ko-KR", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function addMinutesToTime(time, minutes) {
  const [hour = "0", minute = "0"] = String(time || "00:00").split(":");
  const base = new Date(`2026-01-01T${hour.padStart(2, "0")}:${minute.padStart(2, "0")}:00+09:00`);
  base.setMinutes(base.getMinutes() + minutes);
  return `${String(base.getHours()).padStart(2, "0")}:${String(base.getMinutes()).padStart(2, "0")}`;
}

function getDayKey(date) {
  return ["sun", "mon", "tue", "wed", "thu", "fri", "sat"][new Date(`${date}T00:00:00+09:00`).getDay()];
}

function getKoreaDateString(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

function getKoreaDateTimeString(date = new Date()) {
  return new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}

function getLessonAlimtalkBaseScheduledDate(lesson, delayMinutes = 0) {
  const baseTime = getDayKey(lesson?.date) === "sat" ? "16:30" : "22:30";
  const baseDate = new Date(`${lesson?.date ?? getKoreaDateString()}T${baseTime}:00+09:00`);
  baseDate.setMinutes(baseDate.getMinutes() + delayMinutes);
  return baseDate;
}

function isLessonAlimtalkScheduleExpired(lesson, delayMinutes = 0, now = new Date()) {
  return getLessonAlimtalkBaseScheduledDate(lesson, delayMinutes).getTime() <= now.getTime();
}

function getLessonAlimtalkScheduledDate(lesson, delayMinutes = 0, options = {}) {
  const { allowPastFallback = true } = options;
  const baseDate = getLessonAlimtalkBaseScheduledDate(lesson, delayMinutes);
  const now = new Date();
  if (allowPastFallback && baseDate.getTime() <= now.getTime()) {
    baseDate.setTime(now.getTime() + Math.max(1, delayMinutes) * 60 * 1000);
  }
  return baseDate.toISOString();
}

function formatKoreaTimeLabel(dateString) {
  if (!dateString) return "";
  return new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(new Date(dateString));
}

function addDaysInKorea(dateString, days) {
  const base = new Date(`${dateString}T00:00:00+09:00`);
  base.setUTCDate(base.getUTCDate() + days);
  return getKoreaDateString(base);
}

function getDateDiffInDays(fromDate, toDate) {
  const from = new Date(`${fromDate}T00:00:00+09:00`);
  const to = new Date(`${toDate}T00:00:00+09:00`);
  return Math.ceil((to.getTime() - from.getTime()) / (24 * 60 * 60 * 1000));
}

function formatDdayLabel(days) {
  if (days === 0) return "D-Day";
  return days > 0 ? `D-${days}` : `D+${Math.abs(days)}`;
}

function gradeMatchesStudent(rowGrade = "", studentGrade = "") {
  if (!rowGrade || !studentGrade) return true;
  const rowText = String(rowGrade).replace(/\s/g, "");
  const studentText = String(studentGrade).replace(/\s/g, "");
  const rowNumber = rowText.match(/\d/)?.[0] ?? "";
  const studentNumber = studentText.match(/\d/)?.[0] ?? "";
  return rowText.includes(studentText) || (rowNumber && studentNumber && rowNumber === studentNumber);
}

function schoolMatchesStudent(rowSchool = "", studentSchool = "") {
  return schoolNamesMatch(rowSchool, studentSchool);
}

function getStudentTopNotice(student, examPrepRows = [], schoolEvents = [], makeupTasks = []) {
  if (!student) return null;
  const examCandidates = examPrepRows
    .filter((row) => row.mathExamDate)
    .filter((row) => schoolNamesMatch(row.schoolName, student.schoolName))
    .filter((row) => gradeMatchesStudent(row.grade, student.grade))
    .map((row) => ({
      date: row.mathExamDate,
      detail: [row.schoolName, row.grade, row.subject || row.examSubject, examCycleLabel(row.examCycle)].filter(Boolean).join(" · "),
      title: "내신 수학시험",
      tone: "exam"
    }))
    .filter((item) => getDateDiffInDays(today, item.date) >= 0)
    .sort((a, b) => a.date.localeCompare(b.date));

  if (examCandidates[0]) {
    const days = getDateDiffInDays(today, examCandidates[0].date);
    return {
      ...examCandidates[0],
      title: `${examCandidates[0].title} ${formatDdayLabel(days)}`,
      detail: `${examCandidates[0].detail} · ${examCandidates[0].date}`
    };
  }

  const task = makeupTasks
    .filter((item) => item.studentId === student.studentId && item.scheduledDate)
    .filter((item) => getDateDiffInDays(today, item.scheduledDate) >= 0)
    .sort((a, b) => String(a.scheduledDate).localeCompare(String(b.scheduledDate)))[0];
  if (task) {
    const days = getDateDiffInDays(today, task.scheduledDate);
    return {
      title: `${followUpTypeLabel(task.taskType)} ${formatDdayLabel(days)}`,
      detail: `${task.scheduledDate} ${task.scheduledTime || ""} · ${task.sourceLabel || task.reason || "일정 확인"}`,
      tone: "followup"
    };
  }

  const event = schoolEvents
    .filter((item) => item.date)
    .filter((item) => schoolNamesMatch(item.schoolName, student.schoolName))
    .filter((item) => getDateDiffInDays(today, item.date) >= 0)
    .sort((a, b) => String(a.date).localeCompare(String(b.date)))[0];
  if (event) {
    const days = getDateDiffInDays(today, event.date);
    const title = event.title || event.type || "다가오는 일정";
    return {
      title: `${title} ${formatDdayLabel(days)}`,
      detail: [event.schoolName, event.grade, event.date].filter(Boolean).join(" · "),
      tone: event.type === "vacation" ? "vacation" : "event"
    };
  }

  return null;
}

function buildExamPostTargetsForStudent(student, examPrepRows = [], submissions = [], examPostTargetStudentIds = {}) {
  if (!student) return [];
  return dedupeExamPrepRowsForDisplay(examPrepRows)
    .filter((row) => schoolMatchesStudent(row.schoolName, student.schoolName))
    .filter((row) => gradeMatchesStudent(row.grade, student.grade))
    .filter((row) => {
      const selectedStudentIds = examPostTargetStudentIds[row.examPrepId];
      return Array.isArray(selectedStudentIds) && selectedStudentIds.includes(student.studentId);
    })
    .map((row) => {
      const entries = normalizeMathExamEntries(row).filter((entry) => entry.date);
      const fallbackEntries = entries.length
        ? entries
        : row.mathExamDate
          ? [createMathExamEntry(row, 0)]
          : [];
      const sortedEntries = fallbackEntries.sort((a, b) => String(a.date).localeCompare(String(b.date)));
      const lastEntry = sortedEntries[sortedEntries.length - 1] ?? null;
      const firstEntry = sortedEntries[0] ?? null;
      const examDate = lastEntry?.date || row.mathExamDate || "";
      const targetId = `exam_post_${row.examPrepId}_${student.studentId}`;
      const subject = sortedEntries.length
        ? Array.from(new Set(sortedEntries.map((entry) => formatMathExamEntryLabel(row, entry)).filter(Boolean))).join(", ")
        : row.subject || "수학";
      const submission =
        submissions.find((item) => item.targetId === targetId) ??
        submissions.find((item) => item.studentId === student.studentId && item.examPrepId === row.examPrepId) ??
        null;
      const dueDate = examDate ? addDaysInKorea(examDate, 1) : "";
      const daysFromTodayToExam = examDate ? getDateDiffInDays(today, examDate) : 0;
      const isOverdue = dueDate ? getDateDiffInDays(dueDate, today) > 0 && !submission?.submittedAt : false;
      return {
        dueDate,
        daysFromTodayToExam,
        examDate,
        examPrepId: row.examPrepId,
        examCycle: row.examCycle || currentExamCycle,
        grade: firstEntry?.grade || row.grade || student.grade,
        isOverdue,
        isOpen: Boolean(examDate),
        label: examCycleLabel(row.examCycle || currentExamCycle),
        schoolName: row.schoolName || student.schoolName,
        studentId: student.studentId,
        studentName: student.name,
        subject,
        submission,
        targetId
      };
    })
    .sort((a, b) => String(a.submission?.submittedAt ? "1" : "0").localeCompare(String(b.submission?.submittedAt ? "1" : "0")) || b.examDate.localeCompare(a.examDate));
}

function getTemplateStartTime(template, date) {
  const normalizedTemplate = normalizeClassTemplateSchedule(template);
  const time = getDayKey(date) === "sat" && normalizedTemplate.saturdayStartTime
    ? normalizedTemplate.saturdayStartTime
    : normalizedTemplate.startTime;
  return normalizeTimeInput(time) || time || "";
}

function getTemplateEndTime(template, date) {
  const normalizedTemplate = normalizeClassTemplateSchedule(template);
  const time = getDayKey(date) === "sat" && normalizedTemplate.saturdayEndTime
    ? normalizedTemplate.saturdayEndTime
    : normalizedTemplate.endTime;
  return normalizeTimeInput(time) || time || "";
}

function getTemplateLessonTimes(template, date) {
  return {
    endTime: getTemplateEndTime(template, date),
    startTime: getTemplateStartTime(template, date)
  };
}

function calculateLateMinutes(lesson, now = new Date(), graceMinutes = 5) {
  if (!lesson?.date || !lesson?.startTime) return 0;
  const start = new Date(`${lesson.date}T${lesson.startTime}:00+09:00`);
  const diff = Math.floor((now.getTime() - start.getTime()) / 60000);
  const normalizedGraceMinutes = Number(graceMinutes);
  return Math.max(0, diff - (Number.isFinite(normalizedGraceMinutes) && normalizedGraceMinutes > 0 ? normalizedGraceMinutes : 5));
}

function createLessonStudentRecordId(lessonId, studentId) {
  return `lsr_${lessonId.replace("lesson_", "")}_${studentId}`;
}

function findLessonStudentRecord(records = [], lesson, student) {
  if (!lesson?.lessonId || !student?.studentId) return null;
  const recordId = createLessonStudentRecordId(lesson.lessonId, student.studentId);
  return findMatchingLessonStudentRecord(records, {
    lessonStudentRecordId: recordId,
    lessonId: lesson.lessonId,
    studentId: student.studentId
  });
}

function findMatchingLessonStudentRecord(records = [], record = {}) {
  if (!record?.lessonStudentRecordId && (!record?.lessonId || !record?.studentId)) return null;
  return (
    records.find((item) => record.lessonStudentRecordId && item.lessonStudentRecordId === record.lessonStudentRecordId) ??
    records.find((item) => item.lessonId === record.lessonId && item.studentId === record.studentId) ??
    null
  );
}

function upsertLessonStudentRecord(records = [], nextRecord = {}) {
  if (!nextRecord?.lessonStudentRecordId && (!nextRecord?.lessonId || !nextRecord?.studentId)) {
    return upsertById(records, nextRecord, "lessonStudentRecordId");
  }
  let didReplace = false;
  const nextRecords = [];
  records.forEach((record) => {
    const isSameRecord =
      (nextRecord.lessonStudentRecordId && record.lessonStudentRecordId === nextRecord.lessonStudentRecordId) ||
      (record.lessonId === nextRecord.lessonId && record.studentId === nextRecord.studentId);
    if (!isSameRecord) {
      nextRecords.push(record);
      return;
    }
    if (!didReplace) {
      nextRecords.push(nextRecord);
      didReplace = true;
    }
  });
  return didReplace ? nextRecords : [...records, nextRecord];
}

function createEmptyRecord(lesson, student) {
  return {
    lessonStudentRecordId: createLessonStudentRecordId(lesson.lessonId, student.studentId),
    lessonId: lesson.lessonId,
    studentId: student.studentId,
    attendanceStatus: "pending",
    behaviorTag: "",
    checkInAt: "",
    checkInTime: "",
    checkOutAt: "",
    checkOutTime: "",
    homeworkStatus: "not_started",
    homeworkFollowupMethod: "",
    homeworkFollowupSourceHomeworkId: "",
    homeworkFollowupText: "",
    lessonMaterial: "",
    lessonProgress: "",
    preparationMemo: "",
    prepMemoCheckedAt: "",
    prepMemoCheckedSourceDate: "",
    prepMemoCheckedSourceRecordId: "",
    prepStudentVisible: false,
    prepParentVisible: false,
    prepStudentNotice: "",
    prepParentNotice: "",
    teacherComment: "",
    studentComment: "",
    assignmentStatus: "",
    notificationMutedParent: false,
    notificationMutedStudent: false,
    notificationMutedReason: "",
    needsMakeup: false,
    needsRetest: false
  };
}

function upsertById(items, nextItem, idKey) {
  return items.some((item) => item[idKey] === nextItem[idKey])
    ? items.map((item) => (item[idKey] === nextItem[idKey] ? nextItem : item))
    : [...items, nextItem];
}

function createReportBody(student, lesson, record) {
  return sampleData.reportTemplates[0].body
    .replace("{studentName}", student.name)
    .replace("{lessonDate}", lesson.date)
    .replace("{className}", lesson.className)
    .replace("{attendance}", attendanceLabels[record?.attendanceStatus ?? "pending"])
    .replace("{homework}", homeworkLabels[record?.homeworkStatus ?? "not_started"])
    .replace("{teacherComment}", record?.teacherComment || "아직 강사 코멘트가 입력되지 않았습니다.");
}

function getHomeworkBundle(homeworks, lesson, student, lessons = []) {
  const lessonById = new Map(lessons.map((item) => [item.lessonId, item]));
  const homeworkMatchesCurrentLessonGroup = (homework = {}) => {
    if (homework.lessonId === lesson.lessonId) return true;
    const sourceLesson = lessonById.get(homework.lessonId);
    if (!sourceLesson) return !isSpecialLectureLesson(lesson);
    return isSameLessonGroup(lesson, sourceLesson);
  };
  const studentHomeworks = homeworks
    .filter((homework) => homework.studentId === student.studentId)
    .filter(homeworkMatchesCurrentLessonGroup)
    .sort((a, b) => a.assignedDate.localeCompare(b.assignedDate));

  const previous =
    getLessonHomework(homeworks, lesson, student, "previous", lessons) ??
    studentHomeworks
      .filter((homework) => homework.assignedDate < lesson.date)
      .at(-1) ?? null;
  const today =
    getLessonHomework(homeworks, lesson, student, "next", lessons) ??
    studentHomeworks.find((homework) => homework.assignedDate === lesson.date || homework.lessonId === lesson.lessonId) ??
    null;

  return { previous, today };
}

function getLessonHomework(homeworks, lesson, student, homeworkType, lessons = []) {
  const directHomework =
    homeworks.find(
      (homework) =>
        homework.lessonId === lesson.lessonId &&
        homework.studentId === student.studentId &&
        homework.homeworkType === homeworkType
    ) ?? null;

  if (directHomework || homeworkType !== "previous") {
    return directHomework;
  }

  const previousLesson = findPreviousLessonForStudent(
    lessons,
    lesson,
    student.studentId,
    { allowRegularClassFallback: true }
  );

  if (!previousLesson) return null;

  const linkedHomework =
    homeworks.find(
      (homework) =>
        homework.lessonId === previousLesson.lessonId &&
        homework.studentId === student.studentId &&
        homework.homeworkType === "next"
    ) ?? null;

  return linkedHomework
    ? {
        ...linkedHomework,
        linkedFromLessonId: previousLesson.lessonId,
        linkedFromDate: previousLesson.date,
        homeworkType: "previous"
      }
    : null;
}

function createAiReportDraft(student, lesson, record, homeworkBundle) {
  const attendance = formatAttendanceForMessage(record);
  const previousHomework = homeworkBundle.previous
    ? `${homeworkBundle.previous.title} (${homeworkLabels[homeworkBundle.previous.status] ?? homeworkBundle.previous.status})`
    : "지난 숙제 기록 없음";
  const todayHomework = homeworkBundle.today
    ? `${homeworkBundle.today.title} (${homeworkLabels[homeworkBundle.today.status] ?? homeworkBundle.today.status})`
    : "오늘 배정 숙제 없음";
  const comment = record?.teacherComment || "아직 데일리 코멘트가 입력되지 않았습니다.";

  return [
    `${student.name} 학생 데일리 리포트 초안입니다.`,
    `학교/학년: ${student.schoolName} ${student.grade}`,
    `강의 교재: ${student.textbook ?? "미지정"}`,
    `특이사항: ${student.specialNote ?? "없음"}`,
    `수업: ${lesson.date} ${lesson.className} (${lesson.startTime}-${lesson.endTime})`,
    `출결: ${attendance}`,
    `지난 숙제: ${previousHomework}`,
    `오늘 나간 숙제: ${todayHomework}`,
    `과제 상태: ${getAssignmentStatusParentMessage(record?.assignmentStatus ?? record?.incompleteHomework ?? "") || "선택 없음"}`,
    `수업 코멘트: ${comment}`,
    "위 내용은 AI API 호출을 붙이기 전의 모의 초안입니다. 실제 발송 전 원장 검수가 필요합니다."
  ].join("\n");
}

function isHomeworkOverdue(homework) {
  return (
    Boolean(homework.dueDate) &&
    homework.dueDate < today &&
    isHomeworkActionRequired(homework)
  );
}

function getHomeworkRecord(homework, records = []) {
  return records.find(
    (record) => record.lessonId === homework.lessonId && record.studentId === homework.studentId
  ) ?? null;
}

function getHomeworkLesson(homework, lessons = []) {
  return lessons.find((lesson) => lesson.lessonId === homework.lessonId && isActiveLesson(lesson)) ?? null;
}

function isHomeworkMakeupCandidate(homework, records = [], lessons = []) {
  if (!getHomeworkLesson(homework, lessons)) return false;
  if (homework.homeworkType !== "previous") return false;
  const record = getHomeworkRecord(homework, records);
  const assignmentStatus = record?.assignmentStatus ?? record?.incompleteHomework ?? "";
  const recordRequiresMakeup = assignmentStatus ? isAssignmentStatusHomeworkMakeupCandidate(assignmentStatus) : false;
  if (assignmentStatus) {
    const followupMethod = getHomeworkFollowupMethodFromRecord(record);
    if (followupMethod !== "arrival_makeup") return false;
    return isHomeworkActionRequired(homework) && recordRequiresMakeup;
  }
  return (
    isHomeworkActionRequired(homework) &&
    ["missing", "partial"].includes(homework.teacherStatus)
  );
}

function getSupplementAttentionSummary({ homeworks = [], lessons = [], records = [], students = [], tasks = [] } = {}) {
  const lessonLabel = (lessonId) => {
    const lesson = lessons.find((item) => item.lessonId === lessonId);
    return lesson ? `${lesson.date} ${lesson.className}` : "연결 수업 없음";
  };
  const unplannedCandidateCount = (items) =>
    items.filter((item) => !findSupplementTaskForCandidate(tasks, item.task)).length;
  const homeworkItems = homeworks
    .filter((homework) => isHomeworkMakeupCandidate(homework, records, lessons))
    .map((homework) => ({
      task: {
        taskType: "homework_makeup",
        studentId: homework.studentId,
        sourceId: homework.homeworkId
      }
    }));
  const absenceItems = records
    .filter((record) => isAbsenceLikeAttendanceStatus(record.attendanceStatus))
    .filter((record) => !shouldIgnoreLessonAttendance(getRecordLesson(record, lessons)))
    .filter((record) => !getAbsenceMakeupAvailability(record, lessons).isDeferred)
    .map((record) => ({
      task: {
        taskType: "absence_makeup",
        studentId: record.studentId,
        sourceId: record.lessonStudentRecordId
      },
      title: lessonLabel(record.lessonId)
    }));
  const futureAbsenceItems = records
    .filter((record) => isAbsenceLikeAttendanceStatus(record.attendanceStatus))
    .filter((record) => !shouldIgnoreLessonAttendance(getRecordLesson(record, lessons)))
    .filter((record) => getAbsenceMakeupAvailability(record, lessons).isDeferred)
    .map((record) => ({
      task: {
        taskType: "absence_makeup",
        studentId: record.studentId,
        sourceId: record.lessonStudentRecordId
      }
    }));
  const retestItems = records
    .filter((record) => record.needsRetest)
    .filter((record) => !shouldIgnoreLessonAttendance(getRecordLesson(record, lessons)))
    .map((record) => ({
      task: {
        taskType: "retest",
        studentId: record.studentId,
        sourceId: record.lessonStudentRecordId
      }
    }));
  const counts = {
    homeworkMakeup: unplannedCandidateCount(homeworkItems),
    absenceMakeup: unplannedCandidateCount(absenceItems),
    futureAbsenceMakeup: unplannedCandidateCount(futureAbsenceItems),
    retest: unplannedCandidateCount(retestItems)
  };
  const total = counts.homeworkMakeup + counts.absenceMakeup + counts.retest;
  const label = [
    counts.homeworkMakeup ? `숙제보충 ${counts.homeworkMakeup}건` : "",
    counts.absenceMakeup ? `결석보강 ${counts.absenceMakeup}건` : "",
    counts.retest ? `재시험 ${counts.retest}건` : ""
  ].filter(Boolean).join(" · ");
  return {
    ...counts,
    total,
    label: label ? `보충 생성 계획이 필요한 항목: ${label}` : ""
  };
}

function getHomeworkMakeupReason(homework, records = []) {
  const record = getHomeworkRecord(homework, records);
  const assignmentStatus = record?.assignmentStatus ?? record?.incompleteHomework ?? "";
  if (assignmentStatus) {
    const normalizedStatus = normalizeAssignmentStatusValue(assignmentStatus);
    if (normalizedStatus === "not_done") return "미완료 숙제";
    if (normalizedStatus === "not_checked") return "미검사 숙제";
    return "일부 완료 숙제";
  }
  if (homework.teacherStatus === "missing") return "미완료 숙제";
  if (homework.teacherStatus === "partial") return "일부 완료 숙제";
  return "숙제보충 필요";
}

function isHomeworkResolved(homework) {
  return (
    homework.teacherStatus === "verified" ||
    homework.status === "verified" ||
    homework.studentStatus === "checked_done"
  );
}

function isHomeworkActionRequired(homework) {
  return Boolean(homework?.title?.trim()) && !isHomeworkResolved(homework);
}

function isAbsenceLikeAttendanceStatus(status) {
  return ["absent", "excused", "unexcused"].includes(status);
}

function getRecordLessonDate(record, lessons = []) {
  return getRecordLesson(record, lessons)?.date || record?.lessonDate || record?.attendanceDate || record?.date || "";
}

function getAbsenceMakeupAvailability(record, lessons = []) {
  const lessonDate = getRecordLessonDate(record, lessons);
  const daysUntilLesson = lessonDate ? getDateDiffInDays(today, lessonDate) : 0;
  return {
    daysUntilLesson,
    isDeferred: Number.isFinite(daysUntilLesson) && daysUntilLesson > futureAbsenceMakeupVisibleDays,
    lessonDate
  };
}

function getRecordLesson(record, lessons = []) {
  return lessons.find((lesson) => lesson.lessonId === record?.lessonId) ?? null;
}

function getRecordStudent(record, students = []) {
  return students.find((student) => student.studentId === record?.studentId) ?? null;
}

function getRecordPreviousHomework(record, homeworks = [], lessons = [], students = []) {
  const lesson = getRecordLesson(record, lessons);
  const student = getRecordStudent(record, students);
  if (lesson && student) {
    const lessonHomework = getLessonHomework(homeworks, lesson, student, "previous", lessons);
    if (lessonHomework) return lessonHomework;
  }
  return homeworks.find(
    (homework) =>
      homework.lessonId === record?.lessonId &&
      homework.studentId === record?.studentId &&
      homework.homeworkType === "previous"
  ) ?? null;
}

function getAbsenceHomeworkCheckLabel(record, homeworks = [], lessons = [], students = []) {
  if (!isAbsenceLikeAttendanceStatus(record?.attendanceStatus)) return "";
  const previousHomework = getRecordPreviousHomework(record, homeworks, lessons, students);
  return normalizeMessageText(previousHomework?.title || record?.previousHomework || "").replace(/\s+/g, " ").trim();
}

function getHomeworkDedupeKey(homework) {
  return [
    homework.studentId ?? "",
    homework.assignedDate ?? "",
    String(homework.title ?? "").trim().replace(/\s+/g, " ")
  ].join("|");
}

function compareHomeworkDisplayPriority(current, candidate) {
  if (!current) return candidate;
  if (!current.dueDate && candidate.dueDate) return candidate;
  if (current.dueDate && !candidate.dueDate) return current;
  if ((candidate.dueDate ?? "") > (current.dueDate ?? "")) return candidate;
  return current;
}

function dedupeActionableHomeworks(homeworks) {
  const byKey = new Map();
  homeworks.filter(isHomeworkActionRequired).forEach((homework) => {
    const key = getHomeworkDedupeKey(homework);
    byKey.set(key, compareHomeworkDisplayPriority(byKey.get(key), homework));
  });
  return [...byKey.values()];
}

function calculateStreak(homeworks) {
  return homeworks.filter((homework) => getHomeworkCompletionCredit(homework) >= 1).length;
}

function getHomeworkCompletionCredit(homework) {
  const normalizedStatus = normalizeAssignmentStatusValue(homework?.assignmentStatus ?? homework?.incompleteHomework ?? "");
  if (normalizedStatus === "complete_thorough") return 1;
  if (normalizedStatus === "partial_80") return 0.8;
  if (normalizedStatus === "partial_50") return 0.5;
  if (["known_only", "too_hard", "answer_suspected"].includes(normalizedStatus)) return 0.5;
  if (["not_done", "not_checked"].includes(normalizedStatus)) return 0;
  if (homework?.teacherStatus === "verified" || homework?.status === "verified") return 1;
  if (homework?.teacherStatus === "partial") return 0.5;
  if (homework?.teacherStatus === "missing") return 0;
  if (homework?.studentStatus === "checked_done") return 1;
  return 0;
}

function calculateHomeworkStats(homeworks) {
  const total = homeworks.length;
  const done = homeworks.reduce((sum, homework) => sum + getHomeworkCompletionCredit(homework), 0);
  const calendarDays = {};
  homeworks.forEach((homework) => {
    const day = Number(String(homework.dueDate || homework.assignedDate || "").split("-")[2]);
    if (!day) return;
    calendarDays[day] = getHomeworkCompletionCredit(homework) > 0 ? "done" : "missed";
  });
  return {
    total,
    done,
    completionRate: total ? Math.round((done / total) * 100) : 0,
    perfectDays: homeworks.filter((homework) => getHomeworkCompletionCredit(homework) >= 1).length,
    calendarDays
  };
}

function followUpTypeLabel(taskType) {
  const labels = {
    homework_makeup: "숙제보충",
    absence_makeup: "결석 보강",
    retest: "재시험"
  };
  return labels[taskType] ?? "보충관리";
}

const supplementMethodsByType = {
  homework_makeup: [
    { id: "arrival_makeup", label: "등원보충" }
  ],
  absence_makeup: [
    { id: "recorded_lecture", label: "녹강보강" },
    { id: "onsite_makeup", label: "현장보강" }
  ],
  retest: [
    { id: "onsite_retest", label: "현장 재시험" }
  ]
};

function supplementMethodOptions(taskType) {
  return supplementMethodsByType[taskType] ?? [];
}

function supplementDefaultMethod(taskType) {
  if (taskType === "homework_makeup") return "arrival_makeup";
  if (taskType === "absence_makeup") return "onsite_makeup";
  return supplementMethodOptions(taskType)[0]?.id ?? "";
}

function normalizeSupplementMethodForTask(taskType, methodId) {
  const options = supplementMethodOptions(taskType);
  if (options.some((option) => option.id === methodId)) return methodId;
  return supplementDefaultMethod(taskType);
}

function supplementMethodLabel(task) {
  const methodId = normalizeSupplementMethodForTask(task?.taskType, task?.supplementMethod);
  return supplementMethodOptions(task?.taskType).find((option) => option.id === methodId)?.label ?? "방식 미정";
}

function renderNotificationTemplate(template = "", variables = {}) {
  const rendered = Object.entries(variables).reduce(
    (text, [key, value]) => text.replaceAll(`#{${key}}`, normalizeMessageText(value)),
    String(template ?? "")
  );
  return rendered
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function formatTemplateLine(label, value) {
  const text = normalizeMessageText(value).replace(/\s+/g, " ").trim();
  return text ? `${label}: ${text}` : "";
}

function getAbsenceMakeupSourceText(task = {}) {
  const rawSourceLabel = normalizeMessageText(task.sourceLessonLabel || task.sourceLabel || "").replace(/\s+/g, " ").trim();
  const [, dateFromLabel = ""] = rawSourceLabel.match(/^(\d{4}-\d{2}-\d{2})\s*/) ?? [];
  const sourceDate = task.sourceDate || task.lessonDate || dateFromLabel;
  const sourceDateLabel = formatSupplementShortDate(sourceDate);
  if (sourceDateLabel) return `${sourceDateLabel} 결석 수업`;
  return "결석 수업";
}

function getAbsenceMakeupHomeworkText(task = {}) {
  return normalizeMessageText(getSupplementHomeworkNoteValue(task, task.sourcePreviousHomework || ""))
    .replace(/\s+/g, " ")
    .trim();
}

function getHomeworkMakeupHomeworkText(task = {}) {
  const homeworkText = normalizeMessageText(getSupplementHomeworkNoteValue(task, task.sourceLabel || task.reason || ""))
    .replace(/\s+/g, " ")
    .trim();
  const homeworkDate = formatSupplementShortDate(task.sourceDueDate || task.sourceDate || task.lessonDate || "");
  const homeworkDateText = homeworkDate ? `${homeworkDate} 숙제` : "";
  return [homeworkDateText, homeworkText || "숙제 보충"].filter(Boolean).join(" · ");
}

function getSupplementTaskSourceLabel(task) {
  if (task?.taskType === "homework_makeup") {
    return getSupplementHomeworkNoteValue(task, task.sourceLabel || "");
  }
  return task?.sourceLabel || "";
}

function formatSupplementHomeworkCheckSentence(task = {}) {
  const homeworkText = getAbsenceMakeupHomeworkText(task);
  if (!homeworkText) return "";
  return `지난 숙제 ${homeworkText}도 함께 확인하겠습니다.`;
}

function formatSupplementDraftScheduleText(task = {}) {
  return formatSupplementDateTimeText(task.scheduledDate, task.scheduledTime);
}

function formatSupplementShortDate(dateText = "") {
  const normalizedDate = String(dateText || "").trim();
  const [, , month = "", day = ""] = normalizedDate.match(/^(\d{4})-(\d{2})-(\d{2})$/) ?? [];
  if (!month || !day) return "";
  const date = new Date(`${normalizedDate}T00:00:00+09:00`);
  const weekday = Number.isNaN(date.getTime()) ? "" : ["일", "월", "화", "수", "목", "금", "토"][date.getDay()];
  return `${Number(month)}/${Number(day)}${weekday ? `(${weekday})` : ""}`;
}

function formatSupplementTimeLabel(timeText = "") {
  const normalizedTime = String(timeText || "").trim();
  const [, hourText = "", minuteText = "00"] = normalizedTime.match(/^(\d{1,2}):(\d{2})$/) ?? [];
  if (!hourText) return normalizedTime;
  const hour = Number(hourText);
  if (!Number.isFinite(hour)) return normalizedTime;
  const period = hour < 12 ? "오전" : "오후";
  const displayHour = hour % 12 || 12;
  return `${period} ${String(displayHour).padStart(2, "0")}:${minuteText}`;
}

function formatSupplementDateTimeText(dateText = "", timeText = "") {
  const dateLabel = formatSupplementShortDate(dateText) || String(dateText || "").trim();
  const timeLabel = formatSupplementTimeLabel(timeText);
  return [dateLabel, timeLabel].filter(Boolean).join(" ");
}

function formatSupplementDraftReasonLine(task = {}) {
  const reason = normalizeMessageText(task.absenceReason || "").replace(/\s+/g, " ").trim();
  return reason ? `사유: ${reason}` : "";
}

function formatSupplementDraftHomeworkLine(task = {}) {
  const homeworkText = getAbsenceMakeupHomeworkText(task);
  return homeworkText ? `확인할 숙제: ${homeworkText}` : "";
}

function createNotificationDraft(task, students, notificationTemplates = {}) {
  const templates = normalizeNotificationTemplates(notificationTemplates);
  const student = students.find((item) => item.studentId === task.studentId);
  const studentName = student?.name ?? "학생";
  const scheduleText = formatSupplementDraftScheduleText(task);
  const sourceLabel = getSupplementTaskSourceLabel(task);
  const sourceText = sourceLabel || (task.taskType === "homework_makeup" ? "보충 과제" : followUpTypeLabel(task.taskType));
  const progressMemo = normalizeMessageText(task.supplementProgressMemo);
  const progressMemoBlock = progressMemo ? `\n\n보충 메모:\n${progressMemo}` : "";
  const methodId = task.supplementMethod || supplementDefaultMethod(task.taskType);
  const absenceReasonLine = task.taskType === "absence_makeup" ? formatSupplementDraftReasonLine(task) : "";
  const homeworkCheckLine = task.taskType === "absence_makeup" ? formatSupplementDraftHomeworkLine(task) : "";

  if (task.taskType === "homework_makeup") {
    const scheduleLine = scheduleText ? `일시: ${scheduleText}` : "";
    const homeworkLine = formatTemplateLine("밀린 숙제", getHomeworkMakeupHomeworkText(task));
    const progressMemoLine = progressMemo ? `보충 메모:\n${progressMemo}` : "";
    return renderNotificationTemplate(templates.homeworkMakeupStudentReminder, {
      "보강대상": homeworkLine,
      "보강일정": scheduleLine,
      "밀린숙제": homeworkLine,
      "보충메모": progressMemoLine,
      "보충숙제": homeworkLine,
      "학생명": studentName
    });
  }

  if (task.taskType === "absence_makeup") {
    const absenceSourceText = getAbsenceMakeupSourceText(task);
    const scheduleLine = scheduleText ? `일시: ${scheduleText}` : "";
    const progressMemoLine = progressMemo ? `보충 메모:\n${progressMemo}` : "";
    const absenceTargetLine = formatTemplateLine("보강 대상", absenceSourceText);
    return renderNotificationTemplate(templates.absenceMakeupStudentReminder, {
      "결석사유줄": absenceReasonLine,
      "보강대상": absenceTargetLine,
      "보강일정": scheduleLine,
      "보강진행문장": absenceTargetLine,
      "보충메모": progressMemoLine,
      "학생명": studentName,
      "확인숙제줄": homeworkCheckLine
    });
  }

  if (task.taskType === "retest") {
    return `${studentName} 학생 재시험 안내입니다.\n\n${scheduleText}\n${sourceText} 재시험을 진행합니다.${progressMemoBlock}`;
  }

  return `${studentName} 학생 ${followUpTypeLabel(task.taskType)} 안내입니다.\n\n${scheduleText}\n${sourceText} 일정을 진행합니다.${progressMemoBlock}`;
}

function getSupplementStudentReminderTitle(task = {}) {
  const methodId = task.supplementMethod || supplementDefaultMethod(task.taskType);
  const taskLabel = task.taskType === "absence_makeup"
    ? "결석보강"
    : methodId === "arrival_makeup"
      ? "등원보충"
      : "숙제보충";
  const source = task.taskType === "absence_makeup"
    ? getAbsenceMakeupSourceText(task)
    : normalizeMessageText(getSupplementHomeworkNoteValue(task, task.sourceLabel || task.reason || "")).replace(/\s+/g, " ").trim();
  return [taskLabel, source].filter(Boolean).join(" · ");
}

function getSupplementScheduleChangeDetailSeed(task = {}) {
  if (task.taskType === "absence_makeup") {
    return [
      formatTemplateLine("결석한 수업", getAbsenceMakeupSourceText(task)),
      formatTemplateLine("확인할 숙제", getAbsenceMakeupHomeworkText(task))
    ].filter(Boolean).join("\n");
  }
  return normalizeMessageText(getSupplementHomeworkNoteValue(task, task.sourceLabel || task.reason || "")).trim();
}

function formatSupplementScheduleDateTime(taskOrDate = {}, maybeTime = "") {
  const date = typeof taskOrDate === "object" ? taskOrDate.scheduledDate || taskOrDate.linkedLessonDate || "" : taskOrDate;
  const timeSource = typeof taskOrDate === "object" ? taskOrDate.scheduledTime || taskOrDate.linkedLessonTime || "" : maybeTime;
  const time = normalizeTimeInput(timeSource) || timeSource || "";
  return formatSupplementDateTimeText(date, time) || "미확정";
}

function buildSupplementScheduleNoticeBody(task = {}, previousScheduleText = "", notificationTemplates = {}, student = null) {
  const templates = normalizeNotificationTemplates(notificationTemplates);
  const isScheduleChange = Boolean(normalizeMessageText(previousScheduleText));
  const templateKey = isScheduleChange ? "supplementScheduleChangeNotice" : "supplementScheduleConfirmNotice";
  const studentName = student?.name || task.studentName || "학생";
  const isAbsenceMakeup = task.taskType === "absence_makeup";
  const title = `${studentName} 학생 ${isAbsenceMakeup ? "결석 보강" : "숙제 보충"} 안내입니다.`;
  const scheduleLine = `일시: ${formatSupplementScheduleDateTime(task)}`;
  const makeupTargetLine = isAbsenceMakeup
    ? formatTemplateLine("보강 대상", getAbsenceMakeupSourceText(task))
    : formatTemplateLine("밀린 숙제", getHomeworkMakeupHomeworkText(task));
  const absenceReasonLine = isAbsenceMakeup ? formatSupplementDraftReasonLine(task) : "";
  const homeworkCheckLine = isAbsenceMakeup ? formatSupplementDraftHomeworkLine(task) : "";
  const progressMemo = normalizeMessageText(task.supplementProgressMemo).trim();
  const changeReason = normalizeMessageText(task.scheduleChangeReason || "").trim();
  return renderNotificationTemplate(templates[templateKey], {
    "결석사유줄": absenceReasonLine,
    "변경사유": isScheduleChange && changeReason ? `변경 사유: ${changeReason}` : "",
    "변경전": isScheduleChange && previousScheduleText ? `변경 전 일정: ${previousScheduleText}` : "",
    "변경후일정": formatSupplementScheduleDateTime(task),
    "보강대상": makeupTargetLine,
    "보강일정": scheduleLine,
    "보충메모": progressMemo ? `보충 메모: ${progressMemo}` : "",
    "안내제목": title,
    "일정제목": getSupplementStudentReminderTitle(task) || followUpTypeLabel(task.taskType),
    "확인숙제줄": homeworkCheckLine
  });
}

function getSupplementScheduleNoticeDraft(task = {}, target = "student", previousScheduleText = "", notificationTemplates = {}, student = null) {
  const field = target === "parent" ? "parentScheduleNotificationDraft" : "studentScheduleNotificationDraft";
  if (isSupplementTeacherEditedField(task, field)) return String(task[field] ?? "");
  return buildSupplementScheduleNoticeBody(task, previousScheduleText, notificationTemplates, student);
}

const supplementStatusDisplayDependencies = {
  formatJobStatus: formatNotificationJobStatus,
  isSchedulePast: isNotificationSchedulePast
};

function getSupplementNotificationControlDisplayForApp(job) {
  return getSupplementNotificationControlDisplay(job, supplementStatusDisplayDependencies);
}

function getSupplementTaskProgress(task, lessons = []) {
  if (!task) return { label: "미생성", tone: "muted", detail: "" };
  if (task.status === "done") return { label: "보충 완료", tone: "done", detail: "" };
  if (task.status === "canceled") {
    return {
      label: task.cancellationMode === "keep_source_absence" ? "보강 취소 · 결석 유지" : "보강 취소",
      tone: "canceled",
      detail: String(task.canceledAt || "").slice(0, 10)
    };
  }
  if (task.needsLessonResync) {
    return {
      label: "수업일지 재반영 필요",
      tone: "warning",
      detail: `${task.scheduledDate || "-"} ${task.scheduledTime || ""}`.trim()
    };
  }
  if (task.linkedLessonId) {
    const linkedLesson = lessons.find((lesson) => lesson.lessonId === task.linkedLessonId);
    if (linkedLesson?.status === "completed") return { label: "보충 완료", tone: "done", detail: linkedLesson.date };
    return {
      label: "수업일지 반영 완료",
      tone: "linked",
      detail: `${task.linkedLessonDate || linkedLesson?.date || "-"} ${task.linkedLessonTime || linkedLesson?.startTime || ""}`.trim()
    };
  }
  if (task.scheduledDate && task.scheduledTime) {
    return { label: "일정 입력됨", tone: "scheduled", detail: `${task.scheduledDate} ${task.scheduledTime}` };
  }
  return { label: "일정 미확정", tone: "draft", detail: "" };
}

function createAttendanceNotificationText(payload) {
  const attendanceNotificationLabels = { ...attendanceLabels, present: "등원" };
  const status = attendanceNotificationLabels[payload.attendanceStatus] ?? payload.attendanceStatus ?? "등원";
  return joinMessageBlocks([
    `[${academyBrandName} 출결 안내]`,
    `${payload.studentName} 학생이 ${formatAttendanceForMessage(payload) || status} 처리되었습니다.`,
    `수업: ${payload.lessonName}`
  ]);
}

function getHomeworkAction(homework) {
  if (isHomeworkResolved(homework)) return "해결됨";
  if (isHomeworkOverdue(homework)) return "숙제보충 필요";
  return "학생 체크 대기";
}
