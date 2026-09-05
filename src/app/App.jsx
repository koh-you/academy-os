import { lazy, Suspense, useEffect, useMemo, useRef, useState } from "react";
import { createAppViewChangePlan } from "./appViewChangePlan.js";
import { selectAppSessionSurface } from "./appSessionSurfaceSelector.js";
import { createTeacherViewAdapters, TeacherViewOutlet } from "./TeacherViewOutlet.js";
import { lazyTeacherViewComponents } from "./lazyTeacherViewComponents.js";
import { useAppSession } from "./useAppSession.js";
import { RoleLoginScreen } from "./RoleLoginScreen.jsx";
import { Sidebar } from "./Sidebar.jsx";
import { isViewAllowedForRole } from "./sidebarMenuModel.js";
import { EvaluationCenter } from "../domains/teacher/EvaluationCenter.jsx";

const lessonJournalRowsSaveActionModulePromise = import(
  "../domains/lessons/lessonJournalRowsSaveAction.js"
);
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
import { applyExamPrepDraftToLogicalGroup } from "../domains/exams/examPrepDraft.js";
import { normalizeExamPrepRowReviewDraft } from "../domains/exams/examReviewDraft.js";
import { createStudentExamPrepRow } from "../domains/exams/studentExamPrepRow.js";
import { createExamPrepCalendarCluster } from "../domains/exams/examPrepCalendarCluster.js";
import { createWithdrawalStudentMutation } from "../domains/students/withdrawalLessonBoundary.js";
import { getRosterEffectiveFromDate } from "../domains/students/rosterEffectiveDate.js";
import {
  compareStudentsByName,
  getActiveLessonStudents,
  getActiveStudentIdsFromSelection,
  getLessonJournalStudents,
  getLessonStudentIds,
  isActiveStudent,
  isWithdrawnStudent,
  sortStudentsByName
} from "../domains/students/lessonRosterSelectors.js";
import {
  getTallyStudentReplacementChanges,
  mergeTallyStudentValues,
  replaceTallyStudentValues,
  specialLectureTallyStudentFields
} from "../domains/students/tallyStudentMerge.js";
import { saveStudentIntakeApplicantRequest } from "../domains/students/studentIntakeApplicantApi.js";
import { createStudentIntakeApplicantSaveController } from "../domains/students/studentIntakeApplicantSaveController.js";
import { saveStudentRequest } from "../domains/students/studentApi.js";
import { StudentModal } from "../domains/students/StudentModal.jsx";
import {
  resolveStudentRowSaveSuccess,
  verifyReplacedTallyStudent,
  verifyRestoredStudent
} from "../domains/students/studentPersistence.js";
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
  isLessonCommentNotificationJob,
  isLessonRecordNotificationMuted,
  selectLessonStudentRecord
} from "../domains/lessons/lessonNotificationJobSelectors.js";
import { createLessonNotificationJob } from "../domains/lessons/lessonNotificationJobBuilder.js";
import { createLessonNotificationJobBatch } from "../domains/lessons/lessonNotificationJobBatch.js";
import { createLessonNotificationRecordStatusPayload } from "../domains/lessons/lessonNotificationRecordStatusPayload.js";
import { createLessonNotificationRecordStatusRows } from "../domains/lessons/lessonNotificationRecordStatusRows.js";
import { createLessonRetestStatusPayload } from "../domains/lessons/lessonRetestStatusPayload.js";
import { getExamPrepIdFromDerivedMathEvent } from "../domains/lessons/derivedMathEventExamPrepIdSelector.js";
import { createExamPeriodSundayDateSelector } from "../domains/lessons/examPeriodSundayDateSelector.js";
import { createExamPrepLessonCandidateBuilder } from "../domains/lessons/examPrepLessonCandidateBuilder.js";
import { filterStaleGeneratedExamPrepLessons } from "../domains/lessons/examPrepGeneratedLessonSourceFilter.js";
import { saveExamPrepSchedulePlanRequest } from "../domains/lessons/examPrepScheduleApi.js";
import { ExamPrepLessonDetail } from "../domains/lessons/ExamPrepLessonDetail.jsx";
import { LessonJournalFallback } from "../domains/lessons/LessonJournalFallback.jsx";
import { MonthlyRegularLessonOpenModal } from "../domains/lessons/MonthlyRegularLessonOpenModal.jsx";
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
  createFailedNotificationJob,
  persistFailedNotificationJobRequest,
  persistNotificationJobRequest,
  reserveNotificationJobRequest
} from "../domains/notifications/notificationJobApi.js";
import {
  getNotificationJobLabel,
  resolveNotificationJobStatusClass
} from "../domains/notifications/notificationCenterConfig.js";
import {
  defaultNotificationTemplates,
  normalizeNotificationTemplates,
  renderNotificationTemplate
} from "../domains/notifications/notificationTemplateCatalog.js";
import {
  buildAttendanceBody,
  buildLessonNotificationBody,
  compactDuplicateNotificationBlocks,
  createNotificationMessageBlock as createMessageBlock,
  createNotificationMessageLine as createMessageLine,
  formatLessonNotificationAttendance as formatAttendanceForMessage,
  getNotificationTextKey,
  joinNotificationMessageBlocks as joinMessageBlocks,
  normalizeNotificationText as normalizeMessageText,
  notificationTextIncludesBlock
} from "../domains/notifications/notificationMessageRenderer.js";
import {
  getLessonPreparationNotice,
  parseHomeworkFollowupMemoLine,
  removeHomeworkFollowupMemoLines
} from "../domains/notifications/lessonPreparationNotice.js";
import { isSupplementScheduleForLessonComment } from "../domains/notifications/supplementSchedule.js";
import { saveLessonRecordAction } from "../domains/lessons/lessonRecordSaveApi.js";
import { findSupplementTaskForCandidate } from "../domains/supplements/supplementCenterSelectionModel.js";
import {
  createSupplementTaskDraft as createSupplementTaskDraftModel,
  getSupplementHomeworkNoteValue,
  getSupplementNotificationDraftFieldForControl,
  getSupplementPersistedEditFingerprint,
  getSupplementTaskDraftDiff as getSupplementTaskDraftDiffModel,
  isSupplementTeacherEditedField
} from "../domains/supplements/supplementTaskDraft.js";
import {
  followUpTypeLabel,
  formatSupplementHomeworkCheckSentence,
  getAbsenceMakeupHomeworkText,
  getSupplementTaskSourceLabel,
  normalizeSupplementMethodForTask,
  supplementDefaultMethod,
  supplementMethodLabel,
  supplementMethodOptions,
  supplementMethodsByType
} from "../domains/supplements/supplementMethodLabel.js";
import { getSupplementNotificationControlDisplay } from "../domains/supplements/supplementStatus.js";
import { SpecialLectureApplicationPanel } from "../domains/specialLectures/SpecialLectureApplicationPanel.jsx";
import {
  createTestAttemptId,
  createTestSessionIdForPaper,
  getTestPaperKindLabel
} from "../domains/tests/testManagerUtils.js";
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
  normalizeGradeLabel,
  normalizeSchoolName,
  parseDateRangeText,
  schoolNamesMatch,
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
  getHomeworkAssignmentStatus,
  getHomeworkStatusFromAssignmentStatus,
  isAssignmentStatusHomeworkMakeupCandidate,
  isAssignmentStatusUnrecorded,
  normalizeAssignmentStatusValue
} from "../domains/lessons/assignmentStatus.js";
import { buildMonthlyRegularLessonOpenPlan } from "../domains/lessons/monthlyRegularLessonOpen.js";
import { openMonthlyRegularLessonsAction } from "../domains/lessons/monthlyRegularLessonOpenApi.js";
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
  mergeLatestLessonJournalHomeworkConflict,
  mergeVerifiedLessonJournalHomeworks,
  mergeVerifiedLessonJournalMakeupTasks,
  mergeVerifiedLessonJournalRecords
} from "../domains/lessons/lessonJournalDraftPersistenceState.js";
import { createLessonJournalRecordFieldPatch } from "../domains/lessons/lessonJournalRecordDraft.js";
import { createLessonJournalDraftSaveRequest } from "../domains/lessons/lessonJournalDraftSaveRequest.js";
import {
  createLessonJournalHomeworkDraft,
  createLessonJournalHomeworkDraftKey,
  getLessonJournalHomeworkDraftTitle
} from "../domains/lessons/lessonJournalHomeworkDraft.js";
import { createLessonJournalHomeworkFollowupPlan } from "../domains/lessons/lessonJournalHomeworkFollowupPlan.js";
import {
  createLinkedPreviousHomework,
  findNextLessonForStudent,
  findPreviousLessonsForStudent,
  getLessonSortValue,
  isSpecialLectureLesson,
  selectLinkedPreviousHomework
} from "../domains/lessons/lessonHomeworkContinuity.js";
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
import { createLessonJournalMakeupTaskRequests } from "../domains/lessons/lessonJournalMakeupTaskRequest.js";
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
import { getLessonsForDate, shiftLessonCalendarMonth } from "../domains/lessons/lessonCalendarModel.js";
import {
  buildNewLessonModalLessons,
  buildUpdatedLessonModalLessons
} from "../domains/lessons/lessonModalPayloadBuilders.js";
import { saveLessonModalLessonsWithVerification } from "../domains/lessons/lessonModalSaveController.js";
const LessonModal = lazy(() => import("../domains/lessons/LessonModal.jsx").then((module) => ({ default: module.LessonModal })));
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
  getSpecialLectureCalculatedFields,
  getSpecialLectureGuideSlug,
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
import {
  cancelAbsenceMakeupKeepSourceAction,
  cancelAbsenceMakeupSourceAction
} from "../domains/supplements/absenceMakeupCancelApi.js";
import {
  requestCommentAlimtalk,
  requestCommentPolish
} from "../domains/lessons/lessonCommentApi.js";
import { copyTextToClipboard } from "../domains/exams/outputPreview.js";
import {
  createDefaultMonthlySettlementState,
  monthlySettlementStateKey,
  normalizeMonthlySettlementState
} from "../domains/settlements/monthlySettlement.js";
import { saveMonthlySettlementMonthAction } from "../domains/settlements/monthlySettlementMonthSaveApi.js";
import {
  createDefaultSpecialLectureSettlementState,
  normalizeSpecialLectureSettlementState,
  specialLectureSettlementStateKey
} from "../domains/settlements/specialLectureSettlement.js";
import { AsyncOperationStatus } from "../shared/components/AsyncOperationStatus.jsx";
import { AutosaveRiskNotice } from "../shared/components/AutosaveRiskNotice.jsx";
import { DataTableShell } from "../shared/components/DataTableShell.jsx";
import { FilterBar } from "../shared/components/FilterBar.jsx";
import {
  getAggregateSaveState,
  normalizeSaveState
} from "../shared/components/InlineSaveStatus.jsx";
import { Modal, ModalFooter } from "../shared/components/Modal.jsx";
import { PageHeader } from "../shared/components/PageHeader.jsx";
import { SearchField } from "../shared/components/SearchField.jsx";
import { SelectionToolbar } from "../shared/components/SelectionToolbar.jsx";
import { StickySaveBar } from "../shared/components/StickySaveBar.jsx";
import { sampleData } from "../shared/data/sampleData.js";
import {
  apiFetch,
  apiUrl,
  deleteJsonWithTimeout,
  fetchWithAuth,
  getJsonWithTimeout,
  postJson,
  postJsonWithHeaders,
  postJsonWithTimeout,
  setApiAuthToken
} from "../shared/utils/apiClient.js";
import { safeIdPart } from "../shared/utils/id.js";
import { getKoreaDateString } from "../shared/utils/koreaDate.js";
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

const ReportModal = lazy(async () => ({
  default: (await import("../domains/reports/ReportModal.jsx")).ReportModal
}));

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

function getHomeworkFollowupNoticeForTarget(record = {}, target = "parent", notificationTemplates = {}) {
  return formatHomeworkFollowupForNotice(record, notificationTemplates);
}

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

function buildCommentPreviewText({ audience, comment, lesson, nextHomework, notificationTemplates = {}, previousHomework, record, student, supplementSchedules = [], testResultLines = [] }) {
  const isParent = audience === "parent";
  const assignmentStatus = getAssignmentStatusForMessage(record, previousHomework);
  const omitPreviousHomework = isAssignmentStatusUnrecorded(assignmentStatus);
  const homeworkFollowupNotice = omitPreviousHomework ? "" : getHomeworkFollowupNoticeForTarget(record, audience, notificationTemplates);
  const previewBody = buildLessonNotificationBody({
    attendanceReason: record?.attendanceReason ?? "",
    attendanceStatus: record?.attendanceStatus ?? "pending",
    checkInTime: record?.checkInTime ?? "",
    checkedAt: record?.checkInAt || record?.checkOutAt || "",
    assignmentStatus: getAssignmentStatusMessage(audience, assignmentStatus),
    homeworkFollowupNotice,
    lessonContent: getLessonContent(record),
    lessonMaterial: getLessonMaterial(record, student),
    nextHomework: nextHomework?.title ?? "",
    omitPreviousHomework,
    previousHomework: omitPreviousHomework ? "" : previousHomework?.title ?? "",
    supplementSchedule: supplementSchedules.join("\n"),
    teacherComment: comment,
    testResult: testResultLines.join("\n")
  });

  return joinMessageBlocks([
    `#{학원명}: ${academyBrandName}`,
    `#{학생명}: ${student.name}`,
    isParent ? `#{수업일}: ${lesson.date}` : `#{수업명}: ${lesson.className}`,
    isParent ? "#{리포트본문}:" : "#{코멘트}:",
    previewBody || "왼쪽에 작성한 내용이 받는 사람 화면에 이렇게 표시됩니다."
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
  const passSuffix = attempt.passStatus === "failed"
    ? " · 재시험"
    : attempt.passStatus === "passed"
      ? " · 통과"
      : "";
  return `${title} · ${hasCorrect ? `${total}${attempt.correctCount}문항 정답` : "응시"}${passSuffix}`;
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
  const commentText = compactDuplicateNotificationBlocks(existingComment);
  const prepMemo = getLessonPreparationNotice(record, audience);
  const shouldAddPrepMemo = prepMemo && !notificationTextIncludesBlock(commentText, prepMemo);

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
  title: "시험 후 기록지 입력 저장",
  storage: "Supabase exam_prep_rows: 시험 후 기록지는 같은 브라우저에서 직렬 저장하고, updated_at CAS와 서버 재조회로 완료를 확인합니다.",
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
    compactMessage: compactDuplicateNotificationBlocks,
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
      buildAttendanceBody({
        ...attendanceSample,
        lessonName: base.lessonName
      })
    ]);
  }

  const commonBody = buildLessonNotificationBody({
    attendanceStatus: base.attendanceStatus,
    assignmentStatus: getAssignmentStatusMessage(type, base.assignmentStatus),
    checkedAt: base.checkedAt,
    lessonContent: base.lessonContent,
    lessonMaterial: base.lessonMaterial,
    nextHomework: base.nextHomework,
    previousHomework: base.previousHomework,
    teacherComment: base.message
  });

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

function loadSpecialLectureApi() {
  return import("../domains/specialLectures/specialLectureApi.js");
}

function postAcademyReminder(academyReminder) {
  return postJson("/api/academy-reminders", { academyReminder });
}

function deleteAcademyReminderFromApi(reminderId) {
  return apiFetch(`/api/academy-reminders?id=${encodeURIComponent(reminderId)}`, { method: "DELETE" })
    .then(async (response) => {
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.error || "운영 알림 삭제 실패");
      return result;
    });
}

async function postMakeupTasks(makeupTasks) {
  const { createLessonJournalMakeupTasksRequestPayload } = await import(
    "../domains/lessons/lessonJournalMakeupTaskBulkApi.js"
  );
  return postJsonWithTimeout(
    "/api/lesson-journal/makeup-tasks/save",
    createLessonJournalMakeupTasksRequestPayload(makeupTasks),
    30000
  );
}

function deleteExamAnalysisRunRequest(analysisRunId) {
  return apiFetch(`/api/exam-analysis-runs?id=${encodeURIComponent(analysisRunId)}`, { method: "DELETE" })
    .then(async (response) => {
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.error || "시험분석 삭제 실패");
      return result;
    });
}

function deleteExamAnalysisSourceRequest(sourceId) {
  return apiFetch(`/api/exam-analysis-source-files?id=${encodeURIComponent(sourceId)}`, { method: "DELETE" })
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

function loadExamAnalysisRunApi() {
  return import("../domains/exams/examAnalysisRunApi.js");
}

async function confirmExamAnalysisQuestionCountRequest(payload) {
  return (await loadExamAnalysisRunApi()).confirmExamQuestionCount(
    postJsonWithTimeout,
    payload
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

async function saveExamAnalysisQuestionReviewsRequest(payload) {
  return (await loadExamAnalysisRunApi()).saveExamQuestionReviews(
    postJsonWithTimeout,
    payload
  );
}

async function saveExamAnalysisOutputDraftsRequest(payload) {
  return (await loadExamAnalysisRunApi()).saveExamOutputDrafts(
    postJsonWithTimeout,
    payload
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

function patchLessonRecordRetestStatusRequest(record) {
  return postJson("/api/lesson-records/retest-status", { record });
}

function postSchoolEvents(schoolEvents) {
  return postJson("/api/school-events/bulk", { schoolEvents });
}

async function createAppStateWritePayload(states, { expectedUpdatedAt = null } = {}) {
  const { parseVersionedWriteRequest } = await import("../shared/contracts/versionedWriteRouteContracts.js");
  return parseVersionedWriteRequest("POST", "/api/app-state", {
    states,
    ...(expectedUpdatedAt ? { expectedUpdatedAt } : {})
  });
}

async function postAppState(states, options = {}) {
  const { parseVersionedWriteResponse } = await import("../shared/contracts/versionedWriteRouteContracts.js");
  const payload = await createAppStateWritePayload(states, options);
  const result = await postJson("/api/app-state", payload);
  parseVersionedWriteResponse("POST", "/api/app-state", result);
  return result;
}

async function postAppStateWithTimeout(states, timeoutMs, timeoutMessage, options = {}) {
  const { parseVersionedWriteResponse } = await import("../shared/contracts/versionedWriteRouteContracts.js");
  const payload = await createAppStateWritePayload(states, options);
  const result = await postJsonWithTimeout("/api/app-state", payload, timeoutMs, timeoutMessage);
  parseVersionedWriteResponse("POST", "/api/app-state", result);
  return result;
}

function postTestSession(testSession, testAttempts = []) {
  return postJson("/api/test-sessions", { testSession, testAttempts });
}

function deleteTestSessionFromApi(testSessionId) {
  return apiFetch(`/api/test-sessions?testSessionId=${encodeURIComponent(testSessionId)}`, { method: "DELETE" })
    .then((response) => response.json())
    .then((result) => {
      if (!result.ok) throw new Error(result.error || "테스트 응시 기록 삭제 실패");
      return result;
    });
}

async function fetchPortalData(sessionToken) {
  const response = await apiFetch("/api/portal-data", {
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

const {
  buildExamCalendarEvents,
  buildExamPrepRowsFromStudents,
  chooseRepresentativeExamPrepRow,
  createDefaultSchoolEvents,
  createMathExamEntry,
  createSchoolCalendarPeriodCards,
  createSchoolEventFromExamPrepRow,
  currentExamCycle,
  dedupeExamPrepRowsForDisplay,
  examCycleLabel,
  examCycleTermKey,
  examPrepTextbookBySchoolGrade,
  examPublisherLinkKey,
  eventIntersectsDateRange,
  eventIntersectsMonth,
  findLinkedPublisher,
  getDefaultExamCycleForDate,
  getDefaultExamPeriodRange,
  getDefaultExamPeriodText,
  getDefaultMathExamDate,
  getExamPeriodGroupKey,
  getExamPrepLogicalKey,
  getExamPrepRowCompleteness,
  getExamPrepSchoolGradeKey,
  getMonthDateRange,
  getSchoolCalendarTargetRows,
  getSchoolGradeKey,
  getStudentSchoolGradeKey,
  getTextbookFromExamPrep,
  groupExamPeriodEventsForMonth,
  inferExamCycleFromPrepId,
  isExamLinkedCalendarEvent,
  isPlaceholderExamPrepRow,
  normalizeExamPrepRowCycle,
  normalizeExamPrepRows,
  normalizeMathExamEntries,
  normalizeMathSubject,
  syncPrimaryMathExamDate,
  syncPublisherAcrossExamTerm,
  upsertMathExamEntryFromSchoolEvent,
  formatMathExamEntryLabel,
  formatShortDate
} = createExamPrepCalendarCluster(today);

function createParentLoginId(student) {
  return `parent-${student.loginId}`;
}

function getDemoStudent(students) {
  return students.find((student) => student.studentId === "student_mwf710_001") ?? students[0];
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
  postJson
});

const learningSupportRuntime = Object.freeze({
  StudentPortalV2,
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
  today,
  upsertMathExamEntryFromSchoolEvent
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

function loadLessonJournalReservationAudit({ lessonId }) {
  // lessonId alone is a precise, sufficient scope for this per-lesson audit — a date range would
  // miss reservations scheduled outside the lesson's own calendar day (e.g. "다음날 11시" mode
  // schedules into the next day, and "manual" mode can schedule to any future date/time).
  const path = `/api/notification-jobs?lessonId=${encodeURIComponent(lessonId)}&limit=500`;
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
  getHomeworkFollowupPatch,
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
  findPreviousLessonsForStudent,
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
  // 로그인 세션 토큰을 모든 API 요청 헤더에 싣는다(로그인·복원·로그아웃 모두 반영).
  useEffect(() => {
    setApiAuthToken(session?.sessionToken || "");
  }, [session?.sessionToken]);
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedLessonId, setSelectedLessonId] = useState("");
  const [lessonClipboard, setLessonClipboard] = useState(null);
  const [lessonUndoStack, setLessonUndoStack] = useState([]);
  const lessonHistoryActionRequestRef = useRef(null);
  const [lessonHistoryActionState, setLessonHistoryActionState] = useState({ message: "", state: "idle" });
  const [deletedLessonBundles, setDeletedLessonBundles] = useStoredState(storageKeys.deletedLessonBundles, []);
  const [classTemplates, setClassTemplates] = useStoredState(storageKeys.classTemplates, sampleData.classTemplates);
  const [students, setStudents] = useStoredState(storageKeys.students, sampleData.students);
  const [studentIntakeApplicants, setStudentIntakeApplicants] = useStoredState(storageKeys.studentIntakeApplicants, []);
  const studentIntakeApplicantsRef = useRef(studentIntakeApplicants);
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
  const [testPaperLibrary, setTestPaperLibrary] = useStoredState(storageKeys.testPaperLibrary, []);
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
  const resourceMaterialsRef = useRef(resourceMaterials);
  const resourceMaterialMutationRef = useRef(false);
  const [resourceMaterialBusy, setResourceMaterialBusy] = useState(false);
  const [resourceMaterialSaveState, setResourceMaterialSaveState] = useState({ message: "", state: "idle" });
  const [resourceMaterialDeleteStates, setResourceMaterialDeleteStates] = useState({});
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
  const [lessonResearchSaveState, setLessonResearchSaveState] = useState("idle");
  const [lessonResearchSaveBusy, setLessonResearchSaveBusy] = useState(false);
  const [wrongProblemSaveState, setWrongProblemSaveState] = useState("idle");
  const [wrongProblemSaveBusy, setWrongProblemSaveBusy] = useState(false);
  const [problemBookSaveState, setProblemBookSaveState] = useState("idle");
  const [testPaperLibrarySaveState, setTestPaperLibrarySaveState] = useState("idle");
  const [testResultSaveState, setTestResultSaveState] = useState("idle");
  const [scoreRecordSaveState, setScoreRecordSaveState] = useState("idle");
  const [academyTestSaveState, setAcademyTestSaveState] = useState("idle");
  const [studentConsultationSaveState, setStudentConsultationSaveState] = useState("idle");
  const [specialLectureGuideSaveState, setSpecialLectureGuideSaveState] = useState("idle");
  const [monthlySettlementSaveState, setMonthlySettlementSaveState] = useState("idle");
  const [specialLectureSettlementSaveState, setSpecialLectureSettlementSaveState] = useState("idle");
  const [studentHomeworkSaveStates, setStudentHomeworkSaveStates] = useState({});
  const studentHomeworkSavingIdsRef = useRef(new Set());
  const [teacherHomeworkSaveStates, setTeacherHomeworkSaveStates] = useState({});
  const teacherHomeworkSavingIdsRef = useRef(new Set());
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
  const reportSnapshotMutationRef = useRef(new Map());
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
  const testPaperLibrarySaveRequestRef = useRef(0);
  const scoreRecordSaveRequestRef = useRef(0);
  const academyTestSaveRequestRef = useRef(0);
  const studentConsultationSaveRequestRef = useRef(0);
  const examPrepRowSaveControllerRef = useRef(null);
  const examPrepDeleteRequestIdsRef = useRef(new Set());
  const studentProfileSaveRequestRef = useRef({});
  const teacherOperatingMemoSaveRequestRef = useRef({});
  const studentIntakeSaveControllerRef = useRef(null);
  const isApplyingRemoteAppStateRef = useRef(false);
  const appStatePersistenceControllerRef = useRef(null);
  const lessonResearchPersistenceControllerRef = useRef(null);
  const lessonResearchSaveRevisionRef = useRef(0);
  const wrongProblemPersistenceControllerRef = useRef(null);
  const wrongProblemSaveRevisionRef = useRef(0);
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

  useEffect(() => {
    studentIntakeApplicantsRef.current = studentIntakeApplicants;
  }, [studentIntakeApplicants]);

  useEffect(() => {
    resourceMaterialsRef.current = resourceMaterials;
  }, [resourceMaterials]);

  const sharedAppState = useMemo(() => ({
    aiSettings,
    attendanceSettings,
    deletedLessonBundles,
    generatedLessonControls,
    lessonNotificationPlans,
    notificationLogs,
    examPostTargetStudentIds,
    tallySubmissions,
    tallySummaries
  }), [
    aiSettings,
    attendanceSettings,
    deletedLessonBundles,
    generatedLessonControls,
    lessonNotificationPlans,
    notificationLogs,
    examPostTargetStudentIds,
    tallySubmissions,
    tallySummaries
  ]);
  const initialSharedAppStateRef = useRef(sharedAppState);
  const initialLessonResearchItemsRef = useRef(lessonResearchItems);
  const initialWrongProblemsRef = useRef(wrongProblems);
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

  function getWrongProblemPersistenceController() {
    if (!wrongProblemPersistenceControllerRef.current) {
      wrongProblemPersistenceControllerRef.current = createAppStatePersistenceController({
        onError: (error) => console.error(error),
        onState: setWrongProblemSaveState,
        read: () => getJsonWithTimeout(
          `/api/app-state?includeRows=true&verify=wrong-problems-${Date.now()}`,
          15000,
          "학생별 오답 저장 확인이 15초를 넘었습니다. 현재 입력을 유지한 채 잠시 뒤 다시 확인해 주세요."
        ),
        write: ({ expectedUpdatedAt, states }) => postAppState(states, { expectedUpdatedAt })
      });
    }
    return wrongProblemPersistenceControllerRef.current;
  }

  function getLessonResearchPersistenceController() {
    if (!lessonResearchPersistenceControllerRef.current) {
      lessonResearchPersistenceControllerRef.current = createAppStatePersistenceController({
        onError: (error) => console.error(error),
        onState: setLessonResearchSaveState,
        read: () => getJsonWithTimeout(
          `/api/app-state?includeRows=true&verify=lesson-research-${Date.now()}`,
          15000,
          "수업연구 저장 확인이 15초를 넘었습니다. 현재 입력을 유지한 채 잠시 뒤 다시 확인해 주세요."
        ),
        write: ({ expectedUpdatedAt, states }) => postAppState(states, { expectedUpdatedAt })
      });
    }
    return lessonResearchPersistenceControllerRef.current;
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
            apiFetch("/api/students"),
            apiFetch(`/api/lessons?date=${encodeURIComponent(attendanceDate)}`),
            apiFetch(`/api/lesson-records?date=${encodeURIComponent(attendanceDate)}`)
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
          apiFetch("/api/students"),
          apiFetch("/api/student-intake-applicants"),
          apiFetch("/api/special-lecture-applications"),
          apiFetch("/api/special-lecture-enrollments", { cache: "no-store" }),
          apiFetch("/api/classes"),
          apiFetch("/api/lessons"),
          apiFetch("/api/lesson-records"),
          apiFetch("/api/homeworks"),
          apiFetch("/api/makeup-tasks"),
          apiFetch("/api/academy-reminders"),
          apiFetch("/api/exam-prep-rows"),
          apiFetch("/api/school-events"),
          apiFetch("/api/test-sessions"),
          apiFetch("/api/test-attempts"),
          apiFetch("/api/app-state?includeRows=true", { cache: "no-store" }),
          apiFetch("/api/resource-materials")
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
          const persistedLessonResearchItems = Array.isArray(states.lessonResearchItems)
            ? normalizeLessonResearchItems(states.lessonResearchItems)
            : initialLessonResearchItemsRef.current;
          getLessonResearchPersistenceController().setSnapshot({
            keys: ["lessonResearchItems"],
            stateRows: appStateResult.stateRows ?? [],
            states: { lessonResearchItems: persistedLessonResearchItems }
          });
          setLessonResearchSaveState("saved");
          const persistedWrongProblems = Array.isArray(states.wrongProblems)
            ? states.wrongProblems
            : initialWrongProblemsRef.current;
          getWrongProblemPersistenceController().setSnapshot({
            keys: ["wrongProblems"],
            stateRows: appStateResult.stateRows ?? [],
            states: { wrongProblems: persistedWrongProblems }
          });
          setWrongProblemSaveState("saved");
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
          if (Array.isArray(states.testPaperLibrary)) setTestPaperLibrary(states.testPaperLibrary);
          setReportSnapshots(Array.isArray(states.reportSnapshots) ? states.reportSnapshots : []);
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
          setReportSnapshots([]);
          persistedSharedAppStateRef.current = initialSharedAppStateRef.current;
          const initialAppState = {
            ...initialSharedAppStateRef.current,
            lessonResearchItems: initialLessonResearchItemsRef.current,
            wrongProblems: initialWrongProblemsRef.current
          };
          const seededResult = await postAppState(initialAppState);
          if (!isMounted) return;
          getAppStatePersistenceController().setSnapshot({
            keys: Object.keys(initialSharedAppStateRef.current),
            stateRows: seededResult.stateRows ?? [],
            states: initialSharedAppStateRef.current
          });
          getWrongProblemPersistenceController().setSnapshot({
            keys: ["wrongProblems"],
            stateRows: seededResult.stateRows ?? [],
            states: { wrongProblems: initialWrongProblemsRef.current }
          });
          getLessonResearchPersistenceController().setSnapshot({
            keys: ["lessonResearchItems"],
            stateRows: seededResult.stateRows ?? [],
            states: { lessonResearchItems: initialLessonResearchItemsRef.current }
          });
          setLessonResearchSaveState("saved");
          setWrongProblemSaveState("saved");
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
    lessonResearchPersistenceControllerRef.current?.dispose();
    lessonResearchPersistenceControllerRef.current = null;
    wrongProblemPersistenceControllerRef.current?.dispose();
    wrongProblemPersistenceControllerRef.current = null;
  }, [session?.role]);

  useEffect(() => () => {
    if (problemBookSaveTimerRef.current) window.clearTimeout(problemBookSaveTimerRef.current);
  }, []);

  // 시험지 라이브러리 저장. 정규화(normalizeTestPaperLibrary)는 호출 측(시험지 목록 화면)이
  // 저장 전에 적용하고, 여기서는 problemBooks 와 같은 요청 경쟁 방지·상태 전이만 담당한다.
  function handleSaveTestPaperLibrary(nextLibrary) {
    const library = Array.isArray(nextLibrary) ? nextLibrary : [];
    const requestId = testPaperLibrarySaveRequestRef.current + 1;
    testPaperLibrarySaveRequestRef.current = requestId;
    setTestPaperLibrarySaveState("saving");
    return postAppState({ testPaperLibrary: library })
      .then(() => {
        if (testPaperLibrarySaveRequestRef.current === requestId) {
          setTestPaperLibrary(library);
          setTestPaperLibrarySaveState("saved");
        }
        return library;
      })
      .catch((error) => {
        console.error(error);
        if (testPaperLibrarySaveRequestRef.current === requestId) setTestPaperLibrarySaveState("failed");
        throw error;
      });
  }

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
      const { persistedMonth, persistedState } = await saveMonthlySettlementMonthAction(month, { postAppState });
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
      const { saveSpecialLectureSettlementStateAction } = await loadSpecialLectureApi();
      const persistedState = await saveSpecialLectureSettlementStateAction(draftState, { postAppState });
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
    return loadSpecialLectureApi()
      .then(({ updateSpecialLectureApplicationAction }) => updateSpecialLectureApplicationAction(nextApplication))
      .then((savedApplication) => {
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
    const { deleteSpecialLectureApplicationAction } = await loadSpecialLectureApi();
    const persistedApplications = await deleteSpecialLectureApplicationAction(applicationId);
    setSpecialLectureApplications(persistedApplications);
    return String(applicationId ?? "").trim();
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
    const savedStudent = await saveStudentRequest({
      createOnly: true,
      request: postJsonWithTimeout,
      student,
      timeoutMessage: "특강 전용 학생 저장이 15초를 넘었습니다. 중복 등록하지 말고 서버 상태를 확인해 주세요."
    });
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

    await saveStudentRequest({
      request: postJsonWithTimeout,
      student: nextStudent,
      timeoutMessage: "Tally 학생정보 저장이 15초를 넘었습니다. 중복 실행하지 말고 상태를 다시 확인해 주세요."
    });
    const studentsAfterResult = await getJsonWithTimeout(
      "/api/students",
      15000,
      "Tally 학생정보 저장 확인이 15초를 넘었습니다. 다시 실행하지 말고 잠시 뒤 새로고침해 주세요."
    );
    const savedStudent = verifyReplacedTallyStudent({
      expectedStudent: nextStudent,
      studentId: normalizedStudentId,
      studentsAfterResult,
      verificationFields: [
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
      ]
    });
    setStudents(studentsAfterResult.students ?? []);
    return savedStudent;
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
    try {
      const { saveSpecialLectureEnrollmentAction } = await loadSpecialLectureApi();
      const { persistedEnrollment, persistedEnrollments } = await saveSpecialLectureEnrollmentAction(nextEnrollment);
      setSpecialLectureEnrollments(persistedEnrollments);
      return persistedEnrollment;
    } catch (error) {
      if (!error?.specialLectureEnrollmentPostSucceeded) {
        setSpecialLectureEnrollments(previousEnrollments);
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
    return loadSpecialLectureApi()
      .then(({ saveSpecialLectureEnrollmentsAction }) => saveSpecialLectureEnrollmentsAction(nextEnrollments))
      .then((savedEnrollments) => {
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

  async function handleCreateSpecialLectureLessons(lessonDrafts = [], { openFirstLesson = true } = {}) {
    const { createSpecialLectureLessonsAction } = await loadSpecialLectureApi();
    const { persistedLessons, verifiedLessons } = await createSpecialLectureLessonsAction(lessonDrafts, {
      normalizeLesson: (lesson) => ({
        ...lesson,
        color: getStandardLessonColor(lesson),
        status: lesson.status ?? "scheduled"
      })
    });
    setLessons(filterActiveLessons(persistedLessons));
    const firstLesson = [...verifiedLessons].sort(sortByTime)[0];
    if (openFirstLesson && firstLesson?.lessonId) openSpecialLectureLesson(firstLesson);
    return verifiedLessons;
  }

  async function handleSyncSpecialLectureStudentSchedules(syncRequests = []) {
    const { syncSpecialLectureStudentSchedulesAction } = await loadSpecialLectureApi();
    const { persistedLessons, verifiedLessons } = await syncSpecialLectureStudentSchedulesAction(syncRequests);
    if (persistedLessons.length) setLessons(filterActiveLessons(persistedLessons));
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

  async function handleSaveExamPrepSchedule(plan) {
    const result = await saveExamPrepSchedulePlanRequest({
      auditId: `exam-prep-schedule-${Date.now()}`,
      changes: plan.changes,
      request: postJsonWithTimeout
    });
    if (result?.source !== "supabase" || result?.verified !== true || !Array.isArray(result.lessons)) {
      throw new Error("시험대비 일정의 Supabase 저장·재조회 결과를 확인하지 못했습니다.");
    }
    mergeGeneratedLessonsIntoState(result.lessons);
    result.lessons.forEach((lesson) => clearGeneratedLessonManualOverride(getGeneratedLessonKey(lesson)));
    return result;
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
        const response = await apiFetch("/api/integrations/status");
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

  const autoGeneratedDisplayLessons = useMemo(
    () => selectAutoGeneratedDisplayLessons(generatedLessonPlan),
    [generatedLessonPlan]
  );
  const currentGeneratedLessonSourceLessons = useMemo(
    () => filterStaleGeneratedExamPrepLessons(lessons, generatedLessonPlan, generatedLessonControls),
    [generatedLessonControls, generatedLessonPlan, lessons]
  );
  const calendarLessons = useMemo(
    () => mergeGeneratedCalendarLessons({
      autoGeneratedDisplayLessons,
      getIdentityKeys: getGeneratedLessonIdentityKeys,
      isLegacyLesson: isLegacyExamPrepLesson,
      lessons: currentGeneratedLessonSourceLessons
    }),
    [autoGeneratedDisplayLessons, currentGeneratedLessonSourceLessons]
  );
  const examPrepScheduleLessons = useMemo(
    () => calendarLessons.flatMap((lesson) => lesson.lessonType === "examPrep" ? [lesson] : []),
    [calendarLessons]
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
    () => getLessonsForDate(calendarLessons, selectedDate, sortByTime),
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
        openMaterial={openResourceMaterial}
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
        openMaterial={openResourceMaterial}
      />
    );
  }

  function handleDateSelect(date) {
    const nextLessons = getLessonsForDate(calendarLessons, date, sortByTime);
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
    if (lessonHistoryActionRequestRef.current) return;
    const lesson = lessons.find((item) => item.lessonId === selectedLessonId);
    if (!lesson) return;
    setLessonClipboard({ ...lesson });
    setLessonHistoryActionState({ message: `${lesson.className} · 복사 준비 완료`, state: "saved" });
  }

  async function runLessonJournalHistoryAction({
    action,
    afterLesson = null,
    beforeLesson = null,
    copyTarget = null,
    homeworks: actionHomeworks = []
  }) {
    if (lessonHistoryActionRequestRef.current) return lessonHistoryActionRequestRef.current;
    const requestPromise = import("../domains/lessons/lessonJournalHistoryAction.js")
      .then(({ saveLessonJournalHistoryAction }) => saveLessonJournalHistoryAction({
        action,
        afterLesson,
        beforeLesson,
        copyTarget,
        homeworks: actionHomeworks,
        onStateChange: setLessonHistoryActionState,
        request: postJsonWithTimeout
      }));
    lessonHistoryActionRequestRef.current = requestPromise;
    return requestPromise.finally(() => {
      if (lessonHistoryActionRequestRef.current === requestPromise) {
        lessonHistoryActionRequestRef.current = null;
      }
    });
  }

  async function handlePasteLessonToSelectedDate() {
    if (!lessonClipboard || lessonHistoryActionRequestRef.current) return;
    try {
      const result = await runLessonJournalHistoryAction({
        action: "copy",
        copyTarget: {
          date: selectedDate,
          dayOfWeek: getDayKey(selectedDate),
          findPreviousLesson: findPreviousLessonForStudent,
          homeworks: homeworksRef.current,
          lessons,
          sourceLesson: lessonClipboard
        }
      });
      const persistedLesson = result.lesson;
      const persistedHomeworks = result.homeworks ?? [];
      setLessonUndoStack((current) => [{
        bundle: { homeworks: persistedHomeworks, lesson: persistedLesson },
        type: "copy"
      }, ...current].slice(0, 20));
      setLessons((current) => upsertById(current, persistedLesson, "lessonId"));
      setHomeworks((current) => persistedHomeworks.reduce(
        (next, homework) => upsertById(next, homework, "homeworkId"),
        current
      ));
      setSelectedLessonId(persistedLesson.lessonId);
    } catch {
      // The clipboard and selected date stay intact for an explicit retry.
    }
  }

  async function handleUndoLessonAction(canceledLesson = null) {
    if (lessonHistoryActionRequestRef.current) return;
    const [latestAction, ...restActions] = canceledLesson
      ? [{ bundle: { lesson: canceledLesson }, canceledLesson, type: "cancel" }, ...lessonUndoStack]
      : lessonUndoStack;
    if (!latestAction) return;
    const bundle = latestAction.bundle ?? {};
    try {
      if (canceledLesson?.restoreMode === "visibility") {
        unsuppressGeneratedLessonKey(canceledLesson.restoreGeneratedKey);
        markGeneratedLessonManualOverride(canceledLesson);
        return;
      }
      if (latestAction.type === "copy") {
        await runLessonJournalHistoryAction({
          action: "undo_copy",
          beforeLesson: bundle.lesson,
          homeworks: bundle.homeworks ?? []
        });
        setLessons((current) => current.filter((lesson) => lesson.lessonId !== bundle.lesson.lessonId));
        setHomeworks((current) => current.filter((homework) => (
          !(bundle.homeworks ?? []).some((item) => item.homeworkId === homework.homeworkId)
        )));
        setSelectedLessonId("");
      }
      if (latestAction.type === "cancel") {
        const restoredLessonDraft = {
          ...bundle.lesson,
          status: ["canceled", "deleted"].includes(bundle.lesson.status) ? "scheduled" : (bundle.lesson.status ?? "scheduled")
        };
        const result = await runLessonJournalHistoryAction({
          action: "undo_cancel",
          afterLesson: restoredLessonDraft,
          beforeLesson: latestAction.canceledLesson
        });
        const restoredLesson = result.lesson;
        unsuppressGeneratedLessonKey(getGeneratedLessonKey(restoredLesson));
        markGeneratedLessonManualOverride(restoredLesson);
        setLessons((current) => upsertById(current, restoredLesson, "lessonId"));
        setRecords((current) => [...result.relatedRecords, ...current.filter((record) => record.lessonId !== bundle.lesson.lessonId)]);
        setHomeworks((current) => [...result.relatedHomeworks, ...current.filter((homework) => homework.lessonId !== bundle.lesson.lessonId)]);
        setDeletedLessonBundles((current) => current.filter((item) => item.lesson?.lessonId !== bundle.lesson.lessonId));
        setSelectedDate(restoredLesson.date);
        setSelectedLessonId(restoredLesson.lessonId);
      }
      if (!canceledLesson) setLessonUndoStack(restActions);
    } catch {
      // Keep the undo entry and local source bundle for an explicit retry.
    }
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

  async function confirmDeleteLesson(lessonId) {
    if (lessonHistoryActionRequestRef.current) return;
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
    try {
      const result = await runLessonJournalHistoryAction({
        action: "cancel",
        afterLesson: canceledLesson,
        beforeLesson: lesson
      });
      setDeletedLessonBundles((current) => pruneExpiredLessonDeletes([bundle, ...current]));
      setLessonUndoStack((current) => [{
        bundle,
        canceledLesson: result.lesson,
        type: "cancel"
      }, ...current].slice(0, 20));
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
    } catch {
      // Keep the confirmation modal and source bundle intact for retry.
    }
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
    const { rawPersistedLessons } = await openMonthlyRegularLessonsAction(plan, {
      onStatus: setMonthlyRegularLessonOpenStatus
    });
    setLessons(filterActiveLessons(normalizeLessonCalendarRules(rawPersistedLessons, makeupTasks, classTemplates)));
  }

  async function reserveNewStudentMakeupNotices({ formValues, lesson }) {
    if (!formValues.notificationEnabled) return " · 알림톡 없음";
    const { buildNewStudentMakeupNotificationJobs, formatNewStudentMakeupReservationSummary } = await import(
      "../domains/lessons/newStudentMakeupNotification.js"
    );
    const notificationJobsToReserve = buildNewStudentMakeupNotificationJobs({
      academyName: academyBrandName,
      audiences: formValues.notificationAudiences,
      lesson,
      students
    });
    if (!notificationJobsToReserve.length) return " · 알림톡 대상 없음";
    const reservedJobs = await reserveLessonNotificationJobs(
      notificationJobsToReserve,
      "신입생 보강 일정 알림톡 예약"
    );
    return formatNewStudentMakeupReservationSummary(reservedJobs);
  }

  async function reserveClosureMakeupNotices({ formValues, lesson }) {
    if (formValues.lessonType !== "closureMakeup" || !formValues.notificationEnabled) return " · 알림톡 없음";
    const { reserveClosureMakeupNoticesAction } = await import(
      "../domains/notifications/closureMakeupNotification.js"
    );
    return reserveClosureMakeupNoticesAction({
      academyName: academyBrandName,
      formValues,
      lesson,
      reserveJobs: (jobs) => reserveLessonNotificationJobs(jobs, "휴강 보충 알림 예약"),
      students
    });
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
    const notificationResult = await reserveNewStudentMakeupNotices({
      formValues,
      lesson: verifiedLessons[0]
    });
    const closureMakeupNotificationResult = await reserveClosureMakeupNotices({
      formValues,
      lesson: verifiedLessons[0]
    });
    setSelectedDate(lesson.date);
    setSelectedLessonId(lesson.lessonId);
    return {
      lessons: verifiedLessons,
      message: closureMakeupLessonId
        ? "휴강과 연결 보충 수업일지 저장 완료"
        : formValues.lessonType === "closure"
          ? "휴강 수업일지 저장 완료"
          : formValues.lessonType === "newStudentMakeup"
            ? `신입생 보강 수업일지 저장 완료${notificationResult}`
            : formValues.lessonType === "closureMakeup"
              ? `휴강 보충 수업일지 저장 완료${closureMakeupNotificationResult}`
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
    const notificationResult = await reserveNewStudentMakeupNotices({
      formValues,
      lesson: persistedLesson
    });
    const closureMakeupNotificationResult = await reserveClosureMakeupNotices({
      formValues,
      lesson: persistedLesson
    });
    markGeneratedLessonManualOverride(editingLesson);
    setSelectedDate(lesson.date);
    setSelectedLessonId(lesson.lessonId);
    return {
      lessons: [persistedLesson],
      message: closureMakeupLessonId
        ? "수업을 휴강으로 전환하고 연결 보충 수업일지까지 저장 완료"
        : formValues.lessonType === "closure" && editingLesson?.lessonType !== "closure"
          ? "수업을 휴강으로 전환 저장 완료 · 기존 명단·수업기록 보존"
          : formValues.lessonType === "newStudentMakeup"
            ? `신입생 보강 수정 저장 완료${notificationResult}`
            : formValues.lessonType === "closureMakeup"
              ? `휴강 보충 수정 저장 완료${closureMakeupNotificationResult}`
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

  function applyVerifiedClassRosterSources(plan, sourceStudents = [], sourceLessons = [], options = {}) {
    const affectedStudentIds = new Set(plan.studentChanges.map(({ after }) => after.studentId));
    const affectedLessonIds = new Set(plan.lessonChanges.map((change) => change.lessonId));
    const sourceStudentsById = new Map(sourceStudents.map((student) => [student.studentId, student]));
    const sourceLessonsById = new Map(sourceLessons.map((lesson) => [lesson.lessonId, lesson]));
    setStudents((current) => {
      const merged = current
        .filter((student) => !affectedStudentIds.has(student.studentId) || sourceStudentsById.has(student.studentId))
        .map((student) => affectedStudentIds.has(student.studentId)
          ? options.mergeStudent?.(
              student,
              sourceStudentsById.get(student.studentId),
              plan.studentChanges.find(({ after }) => after.studentId === student.studentId)
            ) ?? sourceStudentsById.get(student.studentId)
          : student);
      sourceStudents.forEach((student) => {
        if (affectedStudentIds.has(student.studentId) && !merged.some((item) => item.studentId === student.studentId)) {
          merged.push(student);
        }
      });
      return merged;
    });
    setLessons((current) => current.map((lesson) => (
      affectedLessonIds.has(lesson.lessonId) && sourceLessonsById.has(lesson.lessonId)
        ? sourceLessonsById.get(lesson.lessonId)
        : lesson
    )));
  }

  async function readClassRosterSources() {
    const [studentResult, lessonResult] = await Promise.all([
      getJsonWithTimeout(
        "/api/students",
        20000,
        "학생 반 배정 재조회가 20초를 넘었습니다. 현재 입력을 유지한 채 다시 확인해 주세요."
      ),
      getJsonWithTimeout(
        "/api/lessons?includeCanceled=true",
        20000,
        "미래 수업 명단 재조회가 20초를 넘었습니다. 현재 입력을 유지한 채 다시 확인해 주세요."
      )
    ]);
    if (studentResult.source !== "supabase" || lessonResult.source !== "supabase") {
      throw new Error("학생 반 배정과 미래 수업 명단을 Supabase에서 재조회하지 못했습니다.");
    }
    return {
      lessons: lessonResult.lessons ?? [],
      students: studentResult.students ?? []
    };
  }

  async function persistClassRosterMutation({
    fromDate = today,
    mergeStudent,
    nextStudents,
    previousStudents,
    reconcileStudentIds = [],
    timeoutMessage
  }) {
    const [{ saveClassRosterRequest }, { createClassRosterSavePlan, verifyClassRosterSavePlan }] = await Promise.all([
      import("../domains/students/classRosterApi.js"),
      import("../domains/students/classRosterPersistence.js")
    ]);
    const lessonSource = await getJsonWithTimeout(
      "/api/lessons?includeCanceled=true",
      20000,
      "미래 수업 명단 원천 확인이 20초를 넘었습니다. 저장하지 않고 현재 입력을 유지합니다."
    );
    if (lessonSource.source !== "supabase") {
      throw new Error("미래 수업 명단 원천을 Supabase에서 확인하지 못해 저장을 중단했습니다.");
    }
    const plan = createClassRosterSavePlan({
      fromDate,
      lessons: lessonSource.lessons ?? [],
      nextStudents,
      previousStudents,
      reconcileStudentIds
    });
    if (plan.studentChanges.length === 0 && plan.lessonChanges.length === 0) {
      return { lessons: lessonSource.lessons ?? [], plan, students: previousStudents };
    }
    try {
      await saveClassRosterRequest({
        lessonChanges: plan.lessonChanges,
        request: postJsonWithTimeout,
        studentChanges: plan.studentChanges,
        timeoutMessage
      });
      const sources = await readClassRosterSources();
      const verification = verifyClassRosterSavePlan(plan, sources);
      if (!verification.verified) {
        const mismatches = [
          ...verification.studentMismatches.map((id) => `학생:${id}`),
          ...verification.lessonMismatches.map((id) => `수업:${id}`)
        ];
        throw new Error(`반 명단 저장 뒤 Supabase 재조회 값이 다릅니다: ${mismatches.join(", ")}`);
      }
      applyVerifiedClassRosterSources(plan, sources.students, sources.lessons, { mergeStudent });
      return { ...sources, plan };
    } catch (error) {
      try {
        const recoverySources = await readClassRosterSources();
        error.classRosterRecovery = verifyClassRosterSavePlan(plan, recoverySources);
      } catch (recoveryError) {
        error.recoveryError = recoveryError;
      }
      throw error;
    }
  }

  async function handleAddStudent(formValues) {
    const student = createStudentFromFormValues(formValues);
    const nextStudents = [...students, student];
    const result = await persistClassRosterMutation({
      fromDate: today,
      nextStudents,
      previousStudents: students,
      timeoutMessage: "신규 학생과 미래 수업 명단 저장이 30초를 넘었습니다. 중복 등록하지 말고 현재 입력을 유지한 채 서버 상태를 확인해 주세요."
    });
    const savedStudent = result.students.find((item) => item.studentId === student.studentId);
    if (!savedStudent) throw new Error("신규 학생 저장 뒤 Supabase 재조회에서 학생을 찾지 못했습니다.");
    setIsStudentModalOpen(false);
    return savedStudent;
  }

  function getStudentIntakeApplicantSaveController() {
    if (!studentIntakeSaveControllerRef.current) {
      studentIntakeSaveControllerRef.current = createStudentIntakeApplicantSaveController({
        onError: console.error,
        onPersisted: ({ applicant, hasPendingChanges, pendingApplicant }) => {
          const nextApplicant = hasPendingChanges ? pendingApplicant : applicant;
          const nextApplicants = studentIntakeApplicantsRef.current.map((currentApplicant) => (
            currentApplicant.applicantId === applicant.applicantId ? nextApplicant : currentApplicant
          ));
          studentIntakeApplicantsRef.current = nextApplicants;
          setStudentIntakeApplicants(nextApplicants);
        },
        request: (applicant) => saveStudentIntakeApplicantRequest({
          applicant,
          request: postJsonWithTimeout
        }),
        setSaveStates: setStudentIntakeSaveStates
      });
    }
    return studentIntakeSaveControllerRef.current;
  }

  function handleUpdateStudentIntakeApplicant(applicantId, updates) {
    if (studentIntakeRegistrationStates[applicantId] === "saving") return;
    const currentApplicant = studentIntakeApplicantsRef.current
      .find((applicant) => applicant.applicantId === applicantId);
    if (!currentApplicant?.applicantId) return;
    const nextApplicant = { ...currentApplicant, ...updates };
    const nextApplicants = studentIntakeApplicantsRef.current.map((applicant) => (
      applicant.applicantId === applicantId ? nextApplicant : applicant
    ));
    studentIntakeApplicantsRef.current = nextApplicants;
    setStudentIntakeApplicants(nextApplicants);
    getStudentIntakeApplicantSaveController().save(nextApplicant);
  }

  async function handleRegisterStudentIntakeApplicant(applicantId, values, options = {}) {
    if (studentIntakeRegistrationStates[applicantId] === "saving") return;
    const targetStudentId = String(options.targetStudentId ?? "").trim();

    setStudentIntakeRegistrationStates((current) => ({ ...current, [applicantId]: "saving" }));
    setStudentIntakeRegistrationMessages((current) => ({ ...current, [applicantId]: "Tally 후보 입력 저장 확인 중" }));

    try {
      const pendingSaveResult = await getStudentIntakeApplicantSaveController().waitForIdle(applicantId);
      if (!pendingSaveResult.ok) {
        throw pendingSaveResult.error || new Error("Tally 후보 입력 저장을 확인하지 못했습니다.");
      }
      const applicant = studentIntakeApplicantsRef.current
        .find((item) => item.applicantId === applicantId);
      if (!applicant) throw new Error("등록할 Tally 후보를 찾지 못했습니다.");
      setStudentIntakeRegistrationMessages((current) => ({ ...current, [applicantId]: "학생 원천 저장 중" }));
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
      const nextStudents = existingStudent
        ? persistedStudentsBefore.map((student) => student.studentId === studentDraft.studentId ? studentDraft : student)
        : [...persistedStudentsBefore, studentDraft];
      const rosterResult = await persistClassRosterMutation({
        fromDate: today,
        nextStudents,
        previousStudents: persistedStudentsBefore,
        timeoutMessage: "학생과 미래 수업 명단 저장이 30초를 넘었습니다. 중복 등록하지 말고 저장 상태를 다시 확인해 주세요."
      });
      const savedStudentId = studentDraft.studentId;

      setStudentIntakeRegistrationMessages((current) => ({ ...current, [applicantId]: "학생 원천 반영 확인 중" }));
      const savedStudent = rosterResult.students.find((item) => item.studentId === savedStudentId);
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
        memo: registeredApplicantMemo
      };
      await saveStudentIntakeApplicantRequest({
        applicant: registeredApplicant,
        request: postJsonWithTimeout,
        timeoutMessage: "Tally 후보 완료 상태 저장이 15초를 넘었습니다. 학생 원천은 이미 저장됐을 수 있습니다."
      });
      const applicantsAfterResult = await getJsonWithTimeout(
        "/api/student-intake-applicants",
        15000,
        "Tally 후보 완료 상태 확인이 15초를 넘었습니다."
      );
      const verifiedApplicant = (applicantsAfterResult.applicants ?? []).find((item) => item.applicantId === applicantId);
      if (verifiedApplicant?.status !== "registered" || !String(verifiedApplicant.memo ?? "").includes(savedStudent.studentId)) {
        throw new Error("학생은 저장됐지만 Tally 후보의 등록완료 상태가 재조회와 일치하지 않습니다.");
      }
      const verifiedApplicants = applicantsAfterResult.applicants ?? [];
      studentIntakeApplicantsRef.current = verifiedApplicants;
      setStudentIntakeApplicants(verifiedApplicants);
      setStudentIntakeRegistrationStates((current) => ({ ...current, [applicantId]: "saved" }));
      setStudentIntakeRegistrationMessages((current) => ({
        ...current,
        [applicantId]: targetStudentId
          ? replaceExisting
            ? savedStudent.defaultClassTemplateId
              ? "Tally 내용으로 기본정보 교체 및 미래 수업 명단 반영 완료"
              : "Tally 내용으로 기본정보 교체 완료 · 정규반 미배정"
            : savedStudent.defaultClassTemplateId
              ? "기존 정보에 Tally 내용 추가 및 미래 수업 명단 반영 완료"
              : "기존 정보에 Tally 내용 추가 완료 · 정규반 미배정"
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

  function handleUpdateStudent(studentId, field, value) {
    setStudents((current) =>
      current.map((student) => (student.studentId === studentId ? { ...student, [field]: value } : student))
    );
  }

  async function handleSaveStudent(studentId, options = {}) {
    const student = students.find((item) => item.studentId === studentId);
    if (!student) throw new Error("저장할 학생을 찾지 못했습니다.");
    if (
      Object.prototype.hasOwnProperty.call(options, "previousClassTemplateId") &&
      options.previousClassTemplateId !== student.defaultClassTemplateId
    ) {
      const previousStudents = students.map((currentStudent) => currentStudent.studentId === studentId
        ? { ...currentStudent, defaultClassTemplateId: options.previousClassTemplateId }
        : currentStudent);
      const result = await persistClassRosterMutation({
        fromDate: getRosterEffectiveFromDate({ mode: options.rosterEffectiveMode, today }),
        mergeStudent: (currentStudent, persistedStudent, change) => resolveStudentRowSaveSuccess({
          currentStudent,
          persistedStudent,
          requestedStudent: change.after
        }).student,
        nextStudents: students,
        previousStudents,
        timeoutMessage: "학생 정보와 미래 수업 명단 저장이 30초를 넘었습니다. 현재 입력을 유지한 채 서버 상태를 확인해 주세요."
      });
      const savedStudent = result.students.find((item) => item.studentId === studentId);
      if (!savedStudent) throw new Error("학생 반 변경 저장 뒤 Supabase 재조회에서 학생을 찾지 못했습니다.");
      return savedStudent;
    }
    const savedStudent = await saveStudentRequest({
      request: postJsonWithTimeout,
      student,
      timeoutMessage: "학생 목록 저장이 15초를 넘었습니다. 현재 입력을 유지한 채 서버 상태를 확인해 주세요."
    });
    setStudents((current) => current.map((currentStudent) => (
      currentStudent.studentId === studentId
        ? resolveStudentRowSaveSuccess({
            currentStudent,
            persistedStudent: savedStudent,
            requestedStudent: student
          }).student
        : currentStudent
    )));
    return savedStudent;
  }

  async function handleSaveStudentProfile(studentDraft, options = {}) {
    if (!studentDraft?.studentId) throw new Error("저장할 학생을 찾지 못했습니다.");
    const currentStudent = students.find((item) => item.studentId === studentDraft.studentId);
    const nextStudent = { ...(currentStudent ?? {}), ...studentDraft };
    const requestId = (studentProfileSaveRequestRef.current[nextStudent.studentId] ?? 0) + 1;
    studentProfileSaveRequestRef.current[nextStudent.studentId] = requestId;
    setStudentProfileSaveStates((current) => ({ ...current, [nextStudent.studentId]: "saving" }));
    try {
      let savedStudent;
      if (
        options.forceRosterReconcile === true ||
        (currentStudent?.defaultClassTemplateId ?? "") !== (nextStudent.defaultClassTemplateId ?? "") ||
        (currentStudent?.scheduleOverride ?? "") !== (nextStudent.scheduleOverride ?? "")
      ) {
        const nextStudents = students.map((student) => student.studentId === nextStudent.studentId ? nextStudent : student);
        const result = await persistClassRosterMutation({
          fromDate: getRosterEffectiveFromDate({ mode: options.rosterEffectiveMode, today }),
          nextStudents,
          previousStudents: students,
          reconcileStudentIds: options.forceRosterReconcile === true ? [nextStudent.studentId] : [],
          timeoutMessage: "학생 기본정보와 개별 스케줄·미래 수업 명단 저장이 30초를 넘었습니다. 현재 입력을 유지한 채 서버 상태를 확인해 주세요."
        });
        savedStudent = result.students.find((student) => student.studentId === nextStudent.studentId);
        if (!savedStudent) throw new Error("학생 프로필 스케줄 저장 뒤 Supabase 재조회에서 학생을 찾지 못했습니다.");
      } else {
        savedStudent = await saveStudentRequest({
          request: postJsonWithTimeout,
          student: nextStudent,
          timeoutMessage: "학생 기본정보 저장 요청이 15초를 넘었습니다. 현재 입력을 유지한 채 서버 상태를 확인해 주세요."
        });
        setStudents((current) => current.map((student) => (
          student.studentId === savedStudent.studentId ? savedStudent : student
        )));
      }
      if (studentProfileSaveRequestRef.current[nextStudent.studentId] === requestId) {
        setStudentProfileSaveStates((current) => ({ ...current, [nextStudent.studentId]: "saved" }));
      }
      return savedStudent;
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
      await postAppStateWithTimeout(
        { teacherOperatingMemos: nextMemos },
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

  function getLessonsMatchingTestSession(session, studentId) {
    return lessons.filter((lesson) =>
      lesson.date === session.testDate &&
      (!session.classTemplateId || lesson.classTemplateId === session.classTemplateId) &&
      (lesson.studentIds ?? []).includes(studentId)
    );
  }

  async function syncRetestFlagsForTestSession(savedSession, savedAttempts) {
    const retestUpdates = [];
    for (const attempt of savedAttempts) {
      if (attempt.status !== "taken") continue;
      const desiredNeedsRetest = attempt.passStatus === "failed";
      const student = students.find((item) => item.studentId === attempt.studentId);
      if (!student) continue;
      for (const lesson of getLessonsMatchingTestSession(savedSession, attempt.studentId)) {
        const existingRecord = findLessonStudentRecord(recordsRef.current, lesson, student);
        if (Boolean(existingRecord?.needsRetest) === desiredNeedsRetest) continue;
        retestUpdates.push({
          ...(existingRecord ?? createEmptyRecord(lesson, student)),
          needsRetest: desiredNeedsRetest,
          updatedBy: "instructor_owner_001"
        });
      }
    }
    if (!retestUpdates.length) return;
    const nextRecords = retestUpdates.reduce(
      (currentRecords, record) => upsertLessonStudentRecord(currentRecords, record),
      recordsRef.current
    );
    recordsRef.current = nextRecords;
    setRecords(nextRecords);
    await Promise.all(retestUpdates.map((record) =>
      patchLessonRecordRetestStatusRequest(createLessonRetestStatusPayload(record)).catch((error) => console.error(error))
    ));
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
      await syncRetestFlagsForTestSession(savedSession, savedAttempts);
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

  function handleSaveExamPrepRowDraft(draftRow) {
    const existingExamRow = examPrepRows.find((row) => row.examPrepId === draftRow?.examPrepId);
    if (!existingExamRow) {
      return Promise.resolve({ ok: false, error: new Error("저장할 시험정보를 찾지 못했습니다.") });
    }
    const updatedRows = applyExamPrepDraftToLogicalGroup({
      draftRow,
      getLogicalKey: getExamPrepLogicalKey,
      rows: examPrepRows
    });
    const updatedExamRow = updatedRows.find((row) => row.examPrepId === existingExamRow.examPrepId);
    const nextRows = syncPublisherAcrossExamTerm(updatedRows, updatedExamRow);
    const changedRows = nextRows.filter((row) => {
      const previousRow = examPrepRows.find((item) => item.examPrepId === row.examPrepId);
      return previousRow && JSON.stringify(previousRow) !== JSON.stringify(row);
    });
    if (changedRows.length === 0) return Promise.resolve({ ok: true });
    return persistExamPrepRows(changedRows);
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
        fetchImpl: fetchWithAuth,
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
            fetchImpl: fetchWithAuth,
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
          saveExamPrepLessonsRequest({ lessons: lessonsToRestore, request: postJson })
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

  async function handleSaveDerivedSchoolCalendar({ eventChanges = [], nextRows = [] } = {}) {
    const { saveDerivedSchoolCalendarAction } = await import("../domains/schoolCalendar/derivedSchoolCalendarAction.js");
    const result = await saveDerivedSchoolCalendarAction({
      controls: generatedLessonControls,
      eventChanges,
      lessons,
      nextRows,
      previousRows: examPrepRows,
      request: postJsonWithTimeout,
      students
    }, {
      createPreExamLessonFromSchoolEvent,
      getGeneratedLessonIdentityKeys,
      getGeneratedLessonKey,
      normalizeGeneratedLessonControls
    });
    const savedRowsById = new Map((result.examPrepRows ?? []).map((row) => [row.examPrepId, row]));
    const deletedLessonIds = new Set(result.lessonIdsToDelete ?? []);
    setExamPrepRows((current) => current.map((row) => savedRowsById.get(row.examPrepId) ?? row));
    setLessons((current) => mergeGeneratedLessonLists(
      current.filter((lesson) => !deletedLessonIds.has(lesson.lessonId)),
      result.lessons ?? []
    ));
    return result;
  }

  async function handleUpdateClassRoster(classTemplateId, nextStudentIds) {
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
    const changedStudents = nextStudents.filter((student) => {
      const previousStudent = previousStudents.find((item) => item.studentId === student.studentId);
      return previousStudent && previousStudent.defaultClassTemplateId !== student.defaultClassTemplateId;
    });
    if (changedStudents.length === 0) return { changedStudentCount: 0 };
    await persistClassRosterMutation({
      fromDate: today,
      nextStudents,
      previousStudents,
      timeoutMessage: "반 배정과 미래 수업 명단 저장이 30초를 넘었습니다. 모달 입력을 유지한 채 서버 상태를 확인해 주세요."
    });
    return { changedStudentCount: changedStudents.length };
  }

  async function handleDeleteStudent(studentId, withdrawalInfo = {}) {
    const sourceBefore = await readClassRosterSources();
    const { alreadyWithdrawn, nextStudents, pausedStudent } = createWithdrawalStudentMutation({
      studentId,
      students: sourceBefore.students,
      withdrawalInfo,
      withdrawnAt: new Date().toISOString()
    });
    if (alreadyWithdrawn) {
      applyVerifiedClassRosterSources({
        lessonChanges: [],
        studentChanges: [{ after: pausedStudent, before: students.find((student) => student.studentId === studentId) ?? null }]
      }, sourceBefore.students, sourceBefore.lessons);
      return pausedStudent;
    }
    const withdrawalDate = getKoreaDateString(new Date(pausedStudent.withdrawnAt));
    const rosterEffectiveFromDate = getRosterEffectiveFromDate({
      mode: withdrawalInfo.rosterEffectiveMode ?? "tomorrow",
      today: withdrawalDate
    });
    await persistClassRosterMutation({
      fromDate: rosterEffectiveFromDate,
      nextStudents,
      previousStudents: sourceBefore.students,
      timeoutMessage: "퇴원 처리와 미래 수업 명단 저장이 30초를 넘었습니다. 입력을 유지한 채 서버 상태를 확인해 주세요."
    });
    return pausedStudent;
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
    await saveStudentRequest({
      request: postJsonWithTimeout,
      student: restoredStudent,
      timeoutMessage: "퇴원 취소 저장이 15초를 넘었습니다. 중복 실행하지 말고 상태를 다시 확인해 주세요."
    });

    const studentsAfterResult = await getJsonWithTimeout(
      "/api/students",
      15000,
      "퇴원 취소 저장 확인이 15초를 넘었습니다. 다시 실행하지 말고 잠시 뒤 새로고침해 주세요."
    );
    const persistedStudent = verifyRestoredStudent({ studentId, studentsAfterResult });

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
      ...createLessonJournalRecordFieldPatch({ field, value }),
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
    const previousHomework = getLessonHomework(homeworks, lesson, student, "previous", lessons, recordsRef.current);
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
    const lessonStudentsForRecords = getLessonJournalStudents(lesson, students);
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
      const { reserveNotificationJobsContractRequest } = await import("../domains/notifications/notificationJobContractApi.js");
      const { notificationJobs: reservedJobs } = await reserveNotificationJobsContractRequest({
        concurrency: 4,
        notificationJobs: notificationJobsToReserve,
        reason,
        request: postJson
      });
      mergeNotificationJobsIntoState(reservedJobs);
      return reservedJobs;
    } catch (error) {
      const failedJobs = notificationJobsToReserve.map((notificationJob) => createFailedNotificationJob({
        errorMessage: `Solapi 일괄 예약 확인 실패: ${error.message}`,
        notificationJob
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
      persistNotificationJobRequest({ notificationJob: fallbackJob, request: postJson })
        .catch((persistError) => console.error(persistError));
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
    const delayMinutes = planMode === "delay30" ? 30 : planMode === "nextDay11am" ? "nextDay11am" : 0;
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
      .filter(isLessonCommentNotificationJob)
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
    const lessonStudents = getLessonJournalStudents(lesson, students);
    if (lessonStudents.length === 0) {
      cancelActiveLessonNotificationJobs(lesson, "수업 학생 없음");
      return { ok: true, canceledCount: 0, reservedCount: 0 };
    }
    if (effectiveMode === "none") {
      const canceledJobs = notificationJobs
        .filter((job) => job.lessonId === lesson.lessonId)
        .filter(isLessonCommentNotificationJob)
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

    const delayMinutes = effectiveMode === "delay30" ? 30 : effectiveMode === "nextDay11am" ? "nextDay11am" : 0;
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
      .filter(isLessonCommentNotificationJob)
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
    const lessonStudents = getLessonJournalStudents(lesson, students);
    if (lessonStudents.length === 0) {
      cancelActiveLessonNotificationJobs(lesson, "수업 학생 없음");
      return;
    }
    const nextJobs = buildLessonNotificationJobs(lesson, lessonStudents, scheduledDate, mode);
    const nextJobIds = new Set(nextJobs.map((job) => job.notificationJobId));
    const canceledJobs = notificationJobs
      .filter((job) => job.lessonId === lesson.lessonId && !nextJobIds.has(job.notificationJobId))
      .filter(isLessonCommentNotificationJob)
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
      const previousHomework = getLessonHomework(current, lesson, student, "previous", lessons, recordsRef.current);
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
      records: recordsRef.current,
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
      persistJournalRows: async () => {
        const { saveLessonJournalRowsAction } = await lessonJournalRowsSaveActionModulePromise;
        const result = await saveLessonJournalRowsAction({
          changedHomeworks: persistencePlan.changedHomeworks,
          currentHomeworks: homeworksRef.current,
          currentRecords: recordsRef.current,
          recordsToSave,
          request: postJsonWithTimeout
        });
        const verifiedHomeworks = result.homeworks ?? [];
        if (verifiedHomeworks.length) {
          nextHomeworks = mergeVerifiedLessonJournalHomeworks({
            plannedHomeworks: nextHomeworks,
            verifiedHomeworks
          });
          homeworksRef.current = nextHomeworks;
          setHomeworks(nextHomeworks);
        }
        const verifiedRecords = result.records ?? [];
        if (verifiedRecords.length) {
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
        }
        return {
          homeworkCount: verifiedHomeworks.length,
          recordCount: verifiedRecords.length
        };
      },
      persistMakeupTasks: async () => {
        const { saveLessonJournalMakeupTasksWithVerification } = await import(
          "../domains/lessons/lessonJournalMakeupTaskBulkApi.js"
        );
        const requestedTasks = createLessonJournalMakeupTaskRequests({
          currentTasks: makeupTasks,
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
      onFailure: (error, { journalRowsCompleted } = {}) => {
        console.error(error);
        const homeworkConflict = mergeLatestLessonJournalHomeworkConflict({
          conflictHomework: error?.result?.currentHomework,
          currentHomeworks: homeworksRef.current
        });
        if (!journalRowsCompleted && homeworkConflict.recovered) {
          homeworksRef.current = homeworkConflict.homeworks;
          setHomeworks(homeworkConflict.homeworks);
          error.message = "숙제가 다른 화면에서 변경되어 최신 원천을 불러왔습니다. 입력은 유지되었습니다. 변경 저장을 다시 눌러 주세요.";
        }
        const failedStates = createLessonJournalRecordSaveStates(recordsToSave, "failed");
        if (recordsToSave.length && !journalRowsCompleted) {
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

      const { savedRecord, verifiedHomeworks } = await saveLessonRecordAction({ record, relatedHomeworks, recordId, verifyFields });
      const latestRecord = findMatchingLessonStudentRecord(recordsRef.current, record);
      const latestTime = latestRecord?.updatedAt ? Date.parse(latestRecord.updatedAt) : 0;
      const savedTime = record.updatedAt ? Date.parse(record.updatedAt) : Date.now();
      const isLatestRecord = !recordOverride || !latestRecord || !latestTime || !savedTime || latestTime <= savedTime;
      if (isLatestRecord) {
        const nextRecords = upsertLessonStudentRecord(recordsRef.current, savedRecord);
        recordsRef.current = nextRecords;
        setRecords(nextRecords);
      }
      if (verifiedHomeworks?.length) {
        const nextHomeworks = mergeVerifiedLessonJournalHomeworks({
          plannedHomeworks: homeworksRef.current,
          verifiedHomeworks
        });
        homeworksRef.current = nextHomeworks;
        setHomeworks(nextHomeworks);
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

  function handleSaveReportSnapshot(report, status = "snapshot_saved") {
    return import("../domains/reports/reportSnapshotAction.js").then(({ saveReportSnapshotAction }) => (
      saveReportSnapshotAction({
        mutationMap: reportSnapshotMutationRef.current,
        onApply: setReportSnapshots,
        onState: (snapshotSaveState, savedStatus) => setReportModal((current) => current ? {
          ...current,
          ...(savedStatus ? { sendStatus: savedStatus } : {}),
          snapshotSaveState
        } : current),
        report,
        sessionToken: session?.sessionToken,
        status
      })
    )).catch((error) => {
      setReportModal((current) => current ? {
        ...current,
        snapshotSaveState: {
          message: error.message || "보고서 저장 기능을 불러오지 못했습니다. 다시 시도해 주세요.",
          state: "failed"
        }
      } : current);
      return { error, ok: false };
    });
  }

  function handleChangeView(nextView) {
    const plan = createAppViewChangePlan(nextView);
    // 협력 교사(assistant)는 허용된 화면 밖으로 이동 불가.
    if (!isViewAllowedForRole(plan.activeView, session?.teacherRole)) return;
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
    const { saveAndVerifySchoolEvent } = await import("../domains/schoolCalendar/schoolEventApi.js");
    const result = await saveAndVerifySchoolEvent({
      event,
      read: getJsonWithTimeout,
      request: postJsonWithTimeout
    });
    setSchoolEvents(result.schoolEvents);
    return result.schoolEvent;
  }

  async function handleDeleteSchoolEvent(eventId) {
    const { deleteAndVerifySchoolEvent } = await import("../domains/schoolCalendar/schoolEventApi.js");
    const currentEvent = schoolEvents.find((event) => event.eventId === eventId);
    const result = await deleteAndVerifySchoolEvent({
      event: currentEvent,
      fetchImpl: fetchWithAuth,
      read: getJsonWithTimeout,
      resolveApiUrl: apiUrl
    });
    setSchoolEvents(result.schoolEvents);
    return eventId;
  }

  function handleAddLessonResearchItem(subject, typeInfo) {
    lessonResearchSaveRevisionRef.current += 1;
    setLessonResearchSaveState("dirty");
    setLessonResearchItems((current) => [createLessonResearchItem(subject, typeInfo), ...current]);
  }

  function handleDeleteLessonResearchItem(researchItemId) {
    lessonResearchSaveRevisionRef.current += 1;
    setLessonResearchSaveState("dirty");
    setLessonResearchItems((current) => current.filter((item) => item.researchItemId !== researchItemId));
  }

  function handleUpdateLessonResearchItem(researchItemId, field, value) {
    lessonResearchSaveRevisionRef.current += 1;
    setLessonResearchSaveState("dirty");
    setLessonResearchItems((current) => current.map((item) => (
      item.researchItemId === researchItemId ? { ...item, [field]: value, updatedAt: today } : item
    )));
  }

  async function handleSaveLessonResearchItems() {
    if (lessonResearchSaveBusy) return { ok: false };
    const requestedRevision = lessonResearchSaveRevisionRef.current;
    setLessonResearchSaveBusy(true);
    try {
      const result = await getLessonResearchPersistenceController().save({ lessonResearchItems });
      if (result?.ok && requestedRevision !== lessonResearchSaveRevisionRef.current) {
        setLessonResearchSaveState("dirty");
      }
      return result;
    } finally {
      setLessonResearchSaveBusy(false);
    }
  }

  function handleRefreshNotificationHistory({ date = "" } = {}) {
    return refreshNotificationJobs({ date, scope: "history" });
  }

  function handleRefreshActiveNotificationJobs() {
    return refreshNotificationJobs({ scope: "active" });
  }

  function handleAddWrongProblem(studentId) {
    wrongProblemSaveRevisionRef.current += 1;
    setWrongProblemSaveState("dirty");
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
    wrongProblemSaveRevisionRef.current += 1;
    setWrongProblemSaveState("dirty");
    setWrongProblems((current) => current.map((item) => (
      item.wrongProblemId === wrongProblemId ? { ...item, [field]: value } : item
    )));
  }

  async function handleSaveWrongProblems() {
    if (wrongProblemSaveBusy) return { ok: false };
    const requestedRevision = wrongProblemSaveRevisionRef.current;
    setWrongProblemSaveBusy(true);
    try {
      const result = await getWrongProblemPersistenceController().save({ wrongProblems });
      if (result?.ok && requestedRevision !== wrongProblemSaveRevisionRef.current) {
        setWrongProblemSaveState("dirty");
      }
      return result;
    } finally {
      setWrongProblemSaveBusy(false);
    }
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
      examPrepScheduleLessons,
      homeworks,
      integrationStatus,
      isLessonJournalOpen,
      isMonthlyRegularLessonOpened,
      lessonClipboard,
      lessonHistoryActionState,
      lessonNotificationPlans,
      lessonResearchItems,
      lessonResearchSaveBusy,
      lessonResearchSaveState,
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
      resourceMaterialBusy,
      resourceMaterialDeleteStates,
      resourceMaterialSaveState,
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
      today,
      supplementCenterDependencies,
      tallySubmissions,
      tallySummaries,
      teacherAccountSettings,
      teacherHomeworkSaveStates,
      teacherOperatingMemos,
      teacherOperatingMemoSaveStates,
      testAttempts,
      testPaperLibrary,
      testPaperLibrarySaveState,
      testResultSaveState,
      testSessions,
      wrongProblems,
      wrongProblemSaveBusy,
      wrongProblemSaveState
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
      openResourceMaterial,
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
      handleSaveLessonResearchItems,
      handleSaveMakeupTask,
      handleSaveMonthlySettlementMonth,
      handleSaveRecord,
      handleSaveSchoolEvent,
      handleSaveScoreRecord,
      handleSaveWrongProblems,
      handleSaveSpecialLectureEnrollment,
      handleSaveSpecialLectureEnrollments,
      handleSaveSpecialLectureGuides,
      handleSaveSpecialLectureSettlementState,
      handleSaveStudent,
      handleSaveStudentConsultation,
      handleSaveStudentProfile,
      handleSaveTeacherOperatingMemo,
      handleSaveTestPaperLibrary,
      handleSaveTestSession,
      handleScheduleLessonNotificationsAt,
      handleScheduleSupplementTask,
      handleSendLessonComment,
      handleSaveDerivedSchoolCalendar,
      handleSaveExamPrepSchedule,
      handleSyncSpecialLectureStudentSchedules,
      handleTeacherVerifyHomework,
      handleToggleStudentNotificationMute,
      handleUndoLessonAction,
      handleUndoPassSupplementTask,
      handleUpdateClassRoster,
      handleSaveExamPrepRowDraft,
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
        teacherRole={session?.teacherRole}
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
            openMaterial={openResourceMaterial}
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
        <Suspense fallback={<div className="modalLoadingState" role="status">수업 등록 화면을 불러오는 중입니다.</div>}>
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
        </Suspense>
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
          inferGradeFromBirthYear={inferGradeFromBirthYear}
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
        <Suspense fallback={<div className="modalLoadingState" role="status">보고서 화면을 불러오는 중입니다.</div>}>
          <ReportModal
            report={reportModal}
            onClose={() => setReportModal(null)}
            onMockSend={(report) => handleSaveReportSnapshot(report, "mock_sent")}
            onSaveSnapshot={handleSaveReportSnapshot}
          />
        </Suspense>
      ) : null}

      {pendingDeleteLesson ? (
        <Modal
          className="studentDeleteModal"
          closeDisabled={lessonHistoryActionState.state === "saving"}
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
            <button className="softButton" disabled={lessonHistoryActionState.state === "saving"} onClick={() => setLessonDeleteModalId("")} type="button">취소</button>
            <button className="dangerSoftButton" disabled={lessonHistoryActionState.state === "saving"} onClick={() => confirmDeleteLesson(pendingDeleteLesson.lessonId)} type="button">
              {lessonHistoryActionState.state === "saving" ? "취소 저장 중" : "수업 취소 처리"}
            </button>
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
      sendStatus: "draft",
      snapshotSaveState: { message: "", state: "idle" }
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
      const polishResult = await requestCommentPolish({
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
      });
      if (!shouldPersist) {
        return {
          ok: true,
          polishedText: polishResult.polishedText,
          provider: polishResult.provider
        };
      }

      const nextRecord = {
        ...createEmptyRecord(lesson, student),
        ...(record ?? {}),
        lessonStudentRecordId: recordId,
        lessonId: lesson.lessonId,
        studentId: student.studentId,
        [sourceField]: polishResult.polishedText,
        [statusField]: `완료 · ${polishResult.provider}`,
        updatedBy: "instructor_owner_001",
        updatedAt: new Date().toISOString()
      };
      const nextRecords = upsertLessonStudentRecord(recordsRef.current, nextRecord);
      recordsRef.current = nextRecords;
      setRecords(nextRecords);
      await handleSaveRecord(recordId, lesson, student, nextRecord);
      return { ok: true, polishedText: polishResult.polishedText, provider: polishResult.provider };
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
      const previousHomework = getLessonHomework(homeworks, lesson, student, "previous", lessons, recordsRef.current);
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
      const result = await requestCommentAlimtalk(notificationPayload);

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
      persistNotificationJobRequest({ notificationJob, request: postJson })
        .catch((error) => console.error(error));
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
      persistNotificationJobRequest({ notificationJob: failedJob, request: postJson })
        .catch((persistError) => console.error(persistError));
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

  async function handleTeacherVerifyHomework(homeworkId, teacherStatus) {
    if (teacherHomeworkSavingIdsRef.current.has(homeworkId)) return { ok: false };
    const targetHomework = homeworksRef.current.find((homework) => homework.homeworkId === homeworkId);
    if (!targetHomework) {
      setTeacherHomeworkSaveStates((current) => ({
        ...current,
        [homeworkId]: { message: "저장할 숙제 원천을 찾지 못했습니다.", state: "failed" }
      }));
      return { ok: false };
    }

    teacherHomeworkSavingIdsRef.current.add(homeworkId);
    setTeacherHomeworkSaveStates((current) => ({
      ...current,
      [homeworkId]: { message: "Supabase에 저장하고 다시 확인하는 중입니다.", state: "saving" }
    }));
    try {
      const { saveTeacherHomeworkStatusAction } = await import(
        "../domains/lessons/teacherHomeworkStatusSave.js"
      );
      const savedHomework = await saveTeacherHomeworkStatusAction({
        homework: targetHomework,
        request: postJsonWithTimeout,
        teacherStatus
      });
      const nextHomeworks = homeworksRef.current.map((homework) =>
        homework.homeworkId === savedHomework.homeworkId ? savedHomework : homework
      );
      homeworksRef.current = nextHomeworks;
      setHomeworks(nextHomeworks);
      setTeacherHomeworkSaveStates((current) => ({
        ...current,
        [homeworkId]: { message: "Supabase 저장 및 재조회 확인 완료", state: "saved" }
      }));
      return { homework: savedHomework, ok: true };
    } catch (error) {
      setTeacherHomeworkSaveStates((current) => ({
        ...current,
        [homeworkId]: { message: error.message || "교사 숙제 확인 저장에 실패했습니다.", state: "failed" }
      }));
      return { error, ok: false };
    } finally {
      teacherHomeworkSavingIdsRef.current.delete(homeworkId);
    }
  }

  async function handleAddResourceMaterial(material, file = null) {
    if (resourceMaterialMutationRef.current) return { ok: false };
    resourceMaterialMutationRef.current = true;
    setResourceMaterialBusy(true);
    try {
      return (await import("../domains/resources/resourceMaterialAction.js")).saveResourceMaterialAction({
        file,
        material,
        onApply: (materials) => {
          resourceMaterialsRef.current = materials;
          setResourceMaterials(materials);
        },
        onState: setResourceMaterialSaveState,
        read: getJsonWithTimeout,
        request: postJsonWithTimeout,
        sessionToken: session?.sessionToken
      });
    } catch (error) {
      setResourceMaterialSaveState({ message: error.message || "자료 등록 실패", state: "failed" });
      return { error, ok: false };
    } finally {
      resourceMaterialMutationRef.current = false;
      setResourceMaterialBusy(false);
    }
  }

  async function handleDeleteResourceMaterial(materialId) {
    if (resourceMaterialMutationRef.current) return { ok: false };
    const material = resourceMaterialsRef.current.find((item) => item.materialId === materialId);
    if (!material) return { ok: false };
    resourceMaterialMutationRef.current = true;
    setResourceMaterialBusy(true);
    try {
      return (await import("../domains/resources/resourceMaterialAction.js")).deleteResourceMaterialAction({
        material,
        onApply: (materials) => {
          resourceMaterialsRef.current = materials;
          setResourceMaterials(materials);
        },
        onState: (state) => setResourceMaterialDeleteStates((current) => ({ ...current, [materialId]: state })),
        read: getJsonWithTimeout,
        sessionToken: session?.sessionToken
      });
    } catch (error) {
      setResourceMaterialDeleteStates((current) => ({
        ...current,
        [materialId]: { message: error.message || "자료 삭제 실패", state: "failed" }
      }));
      return { error, ok: false };
    } finally {
      resourceMaterialMutationRef.current = false;
      setResourceMaterialBusy(false);
    }
  }

  function openResourceMaterial(material) {
    const popup = window.open();
    import("../domains/resources/resourceMaterialFileApi.js").then((api) =>
      api.openResourceMaterialWindow({ materialId: material.materialId, popup, sessionToken: session.sessionToken })
    );
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
    const sourceRecord = recordsRef.current.find((record) => record.lessonStudentRecordId === task.sourceId);
    const { changed, record } = await cancelAbsenceMakeupSourceAction(task, sourceRecord, {
      isAbsenceLikeAttendanceStatus
    });
    if (changed) {
      const nextRecords = upsertLessonStudentRecord(recordsRef.current, record);
      recordsRef.current = nextRecords;
      setRecords(nextRecords);
    }
    return record;
  }

  async function handleCancelAbsenceMakeupKeepSource(task) {
    const sourceRecord = recordsRef.current.find(
      (record) => record.lessonStudentRecordId === task.sourceId
    );
    const {
      canceledNotificationJobCount,
      hasCanceledLesson,
      makeupTask: verifiedTask,
      persistedLessons,
      sourceRecord: verifiedSourceRecord
    } = await cancelAbsenceMakeupKeepSourceAction(task, {
      cancelNotificationJob: handleCancelNotificationJob,
      isAbsenceLikeAttendanceStatus,
      lessons,
      notificationJobs,
      sourceRecord
    });

    setMakeupTasks((current) => upsertById(current, verifiedTask, "makeupTaskId"));
    if (hasCanceledLesson) {
      setLessons(filterActiveLessons(persistedLessons));
    }
    const nextRecords = upsertLessonStudentRecord(
      recordsRef.current,
      verifiedSourceRecord
    );
    recordsRef.current = nextRecords;
    setRecords(nextRecords);

    return {
      canceledNotificationJobCount,
      makeupTask: verifiedTask,
      sourceRecord: verifiedSourceRecord
    };
  }

  async function handleScheduleSupplementTask(task) {
    const { saveSupplementScheduleSource } = await import("../domains/supplements/supplementSchedulePersistence.js");
    const { applySupplementScheduleNotificationsRequest } = await import("../domains/notifications/supplementScheduleNotificationApply.js");
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
    const saveResult = await saveSupplementScheduleSource({
      dependencies: {
        addMinutes: addMinutesToTime,
        createLessonId: createSupplementLessonId,
        createLessonName: createSupplementLessonName,
        followUpTypeLabel,
        getDayKey,
        getLessonColor: getSupplementLessonColor,
        getLessonStudentIds,
        normalizeTime: normalizeTimeInput
      },
      lessons,
      makeupTasks,
      notificationJobs,
      request: postJsonWithTimeout,
      students,
      task: taskForSchedule
    });
    const savedLesson = saveResult.lesson;
    const savedTask = saveResult.makeupTask;
    const { student } = saveResult;

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
      sourceSaved: true,
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
  openMaterial,
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
      openMaterial={openMaterial}
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

function findPreviousLessonForStudent(lessons, lesson, studentId, options = {}) {
  return findPreviousLessonsForStudent(lessons, lesson, studentId, options)[0];
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
    getExamPrepSchoolGradeKey,
    getStandardLessonColor,
    getStudentSchoolGradeKey,
    getSundayDatesForExamPeriod,
    isActiveStudent,
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
  if (delayMinutes === "nextDay11am") {
    const nextDate = addDaysInKorea(lesson?.date ?? getKoreaDateString(), 1);
    return new Date(`${nextDate}T11:00:00+09:00`);
  }
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
    const fallbackMinutes = delayMinutes === "nextDay11am" ? 24 * 60 : delayMinutes;
    baseDate.setTime(now.getTime() + Math.max(1, fallbackMinutes) * 60 * 1000);
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

function getLessonHomework(homeworks, lesson, student, homeworkType, lessons = [], records = null, { onlyRegularLessons = false } = {}) {
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

  const previousLessons = findPreviousLessonsForStudent(
    lessons,
    lesson,
    student.studentId,
    { onlyRegularLessons, records }
  );

  return selectLinkedPreviousHomework({
    homeworks,
    previousLessons,
    records,
    studentId: student.studentId
  });
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

function getHomeworkMakeupHomeworkText(task = {}) {
  const homeworkText = normalizeMessageText(getSupplementHomeworkNoteValue(task, task.sourceLabel || task.reason || ""))
    .replace(/\s+/g, " ")
    .trim();
  const homeworkDate = formatSupplementShortDate(task.sourceDueDate || task.sourceDate || task.lessonDate || "");
  const homeworkDateText = homeworkDate ? `${homeworkDate} 숙제` : "";
  return [homeworkDateText, homeworkText || "숙제 보충"].filter(Boolean).join(" · ");
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

  const noticeLabel = task.taskType === "manual_makeup" ? "보충" : followUpTypeLabel(task.taskType);
  return `${studentName} 학생 ${noticeLabel} 안내입니다.\n\n${scheduleText}\n${sourceText} 일정을 진행합니다.${progressMemoBlock}`;
}

function getSupplementStudentReminderTitle(task = {}) {
  const methodId = task.supplementMethod || supplementDefaultMethod(task.taskType);
  const taskLabel = task.taskType === "manual_makeup"
    ? "수동 보충"
    : task.taskType === "absence_makeup"
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
  const isManualMakeup = task.taskType === "manual_makeup";
  const title = `${studentName} 학생 ${isManualMakeup ? "보충" : isAbsenceMakeup ? "결석 보강" : "숙제 보충"} 안내입니다.`;
  const scheduleLine = `일시: ${formatSupplementScheduleDateTime(task)}`;
  const makeupTargetLine = isManualMakeup
    ? formatTemplateLine("보충 내용", task.reason || task.sourceLabel)
    : isAbsenceMakeup
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

function getHomeworkAction(homework) {
  if (isHomeworkResolved(homework)) return "해결됨";
  if (isHomeworkOverdue(homework)) return "숙제보충 필요";
  return "학생 체크 대기";
}
