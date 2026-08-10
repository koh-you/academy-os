import { Suspense, createElement } from "react";
import { TeacherViewLoadBoundary, TeacherViewLoadingState } from "./TeacherViewLoadBoundary.js";
import { createLessonJournalEffectAdapter } from "../domains/lessons/lessonJournalEffectAdapter.js";
import { createNotificationEffectAdapter } from "../domains/notifications/notificationEffectAdapter.js";
import { createStudentEffectAdapter } from "../domains/students/studentEffectAdapter.js";
import { createSupplementEffectAdapter } from "../domains/supplements/supplementEffectAdapter.js";

const teacherViewContractDefinitions = [
  { id: "lessons", componentName: "TeacherLessonHubV2", effectKinds: ["save", "delete", "reserve", "cancel", "send", "reconcile"] },
  { id: "specialLectureManagement", componentName: "NotificationCenter", effectKinds: ["save", "delete", "reserve", "reconcile"] },
  { id: "overdue", componentName: "OverdueHomework", effectKinds: ["save"] },
  { id: "followups", componentName: "FollowUpCenter", effectKinds: ["save"] },
  { id: "supplements", componentName: "SupplementCenter", effectKinds: ["save", "reserve", "cancel"] },
  { id: "materials", componentName: "MaterialManager", effectKinds: ["save", "delete"] },
  { id: "resources", componentName: "ResourceLibraryCenter", effectKinds: ["save", "delete"] },
  { id: "students", componentName: "StudentManager", effectKinds: ["save", "delete"] },
  { id: "classes", componentName: "ClassManager", effectKinds: ["save"] },
  { id: "examPrep", componentName: "ExamPrepCenter", effectKinds: ["save", "delete"] },
  { id: "examAnalysisPipeline", componentName: "ExamAnalysisPipelineCenter", effectKinds: [] },
  { id: "schoolCalendar", componentName: "SchoolCalendarCenter", effectKinds: ["save", "delete"] },
  { id: "lessonResearch", componentName: "LessonResearchCenter", effectKinds: ["save", "delete"] },
  { id: "aiVariants", componentName: "AIVariantProblemCenter", effectKinds: [] },
  { id: "settlements", componentName: "SettlementWorkspace", effectKinds: ["save"] },
  { id: "notifications", componentName: "NotificationCenter", effectKinds: ["save", "reserve", "cancel", "reconcile"] },
  { id: "settings", componentName: "SettingsCenter", effectKinds: ["save"] }
];

export const teacherViewContracts = Object.freeze(teacherViewContractDefinitions.map((contract) => Object.freeze({
  ...contract,
  effectKinds: Object.freeze([...contract.effectKinds])
})));

export const teacherViewIds = Object.freeze(teacherViewContracts.map(({ id }) => id));

export function createTeacherViewAdapters({ actions, components, models, runtimeBindings = {} }) {
  const lessonJournalEffects = createLessonJournalEffectAdapter({
    actions,
    transport: runtimeBindings.lessonJournalTransport
  });
  const notificationEffects = createNotificationEffectAdapter({
    actions,
    onRefresh: actions.handleRefreshNotificationHistory
  });
  const specialLectureNotificationEffects = createNotificationEffectAdapter({
    actions,
    onRefresh: actions.handleRefreshActiveNotificationJobs
  });
  const studentEffects = createStudentEffectAdapter({ actions });
  const supplementEffects = createSupplementEffectAdapter({ actions });
  return {
    lessons: {
      Component: components.TeacherLessonHubV2,
      props: {
        academyReminders: models.academyReminders,
        academyTests: models.academyTests,
        aiSettings: models.aiSettings,
        allRecords: models.records,
        attendanceSettings: models.attendanceSettings,
        attendanceSyncStatus: models.attendanceSyncStatus,
        generatedLessonSaveStatus: models.generatedLessonSaveStatus,
        integrationStatus: models.integrationStatus,
        lessonJournalEffects,
        lessonNotificationPlans: models.lessonNotificationPlans,
        notificationJobs: models.notificationJobs,
        runtime: runtimeBindings.teacherLessonHub,
        lessons: models.calendarLessons,
        lessonsForDate: models.lessonsForDate,
        makeupTasks: models.makeupTasks,
        materials: models.resourceMaterials,
        records: models.records,
        saveStates: models.saveStates,
        selectedDate: models.selectedDate,
        selectedLesson: models.selectedLesson,
        selectedLessonId: models.selectedLessonId,
        students: models.students,
        templates: models.classTemplates,
        monthlyRegularLessonOpenPlan: models.monthlyRegularLessonOpenPlan,
        isMonthlyRegularLessonOpened: models.isMonthlyRegularLessonOpened,
        testAttempts: models.testAttempts,
        testSessions: models.testSessions,
        homeworks: models.homeworks,
        clipboardCount: models.lessonClipboard ? 1 : 0,
        lessonHistoryActionState: models.lessonHistoryActionState,
        undoCount: models.lessonUndoStack.length,
        onAddLesson: actions.handleOpenAddLesson,
        onOpenMonthlyRegularLessons: actions.handleOpenMonthlyRegularLessonModal,
        onCopyLesson: actions.handleCopySelectedLesson,
        onDateSelect: actions.handleDateSelect,
        onDeleteLesson: actions.handleDeleteLesson,
        onDeleteAcademyReminder: actions.handleDeleteAcademyReminder,
        onDeleteSelectedLesson: actions.handleDeleteSelectedLessonFromCalendar,
        onEditLesson: actions.handleEditLesson,
        onBackToCalendar: actions.handleBackToCalendar,
        onMoveDate: actions.handleCalendarMove,
        onShiftMonth: actions.handleCalendarMonthShift,
        onOpenAttendance: actions.setAttendanceModal,
        onOpenExamPrep: actions.handleOpenExamPrepView,
        onOpenLessonJournal: actions.handleOpenLessonJournal,
        onPasteLesson: actions.handlePasteLessonToSelectedDate,
        onOpenReport: actions.handleOpenReport,
        onPassMakeupTask: actions.handlePassSupplementTask,
        onRetryGeneratedLessonSave: actions.handleRetryGeneratedLessonSave,
        onScheduleMakeupTask: actions.handleScheduleSupplementTask,
        onSaveAcademyReminder: actions.handleSaveAcademyReminder,
        onSelectLesson: actions.setSelectedLessonId,
        onUndoLessonAction: actions.handleUndoLessonAction,
        onUpdateMakeupTask: actions.handleUpdateMakeupTask,
        isLessonJournalOpen: models.isLessonJournalOpen
      }
    },
    specialLectureManagement: {
      Component: components.NotificationCenter,
      props: {
        aiSettings: models.aiSettings,
        classTemplates: models.classTemplates,
        compactPageHeader: true,
        effects: specialLectureNotificationEffects,
        hideNotificationSectionTabs: true,
        initialNotificationTab: "specialLecture",
        integrationStatus: models.integrationStatus,
        lessons: models.calendarLessons,
        notificationJobs: models.notificationJobs,
        notificationJobsStatus: models.notificationJobsStatus,
        notificationLogs: models.notificationLogs,
        runtime: runtimeBindings.notificationCenter,
        SpecialLectureNoticePanel: runtimeBindings.SpecialLectureNoticePanel,
        pageTitle: "특강관리",
        specialLectureApplications: models.specialLectureApplications,
        specialLectureEnrollments: models.specialLectureEnrollments,
        specialLectureGuides: models.specialLectureGuides,
        specialLectureGuideSaveState: models.specialLectureGuideSaveState,
        onScheduleLessonNotificationsAt: actions.handleScheduleLessonNotificationsAt,
        onUpdateLessonNotificationPlan: actions.handleUpdateLessonNotificationPlan,
        records: models.records,
        students: models.students
      }
    },
    overdue: {
      Component: components.OverdueHomework,
      props: {
        runtime: runtimeBindings.learningSupport,
        homeworks: models.homeworks,
        lessons: models.lessons,
        materials: models.resourceMaterials,
        makeupTasks: models.makeupTasks,
        records: models.records,
        reportSnapshots: models.reportSnapshots,
        scoreRecords: models.scoreRecords,
        students: models.students,
        teacherHomeworkSaveStates: models.teacherHomeworkSaveStates,
        onTeacherVerifyHomework: actions.handleTeacherVerifyHomework
      }
    },
    followups: {
      Component: components.FollowUpCenter,
      props: {
        homeworks: models.homeworks,
        lessons: models.lessons,
        notificationLogs: models.notificationLogs,
        problemBooks: models.problemBooks,
        records: models.records,
        students: models.students,
        tasks: models.makeupTasks,
        wrongProblems: models.wrongProblems,
        wrongProblemSaveBusy: models.wrongProblemSaveBusy,
        wrongProblemSaveState: models.wrongProblemSaveState,
        onAddProblemBook: actions.handleAddProblemBookFromFile,
        onAddWrongProblem: actions.handleAddWrongProblem,
        onAssignHomework: actions.handleAssignHomeworkFromTask,
        onCreateTask: actions.handleCreateMakeupTask,
        onLogNotification: actions.handleLogNotification,
        onSaveWrongProblems: actions.handleSaveWrongProblems,
        onUpdateProblemBook: actions.handleUpdateProblemBook,
        onUpdateProblemMeta: actions.handleUpdateProblemMeta,
        onUpdateTask: actions.handleUpdateMakeupTask,
        onUpdateWrongProblem: actions.handleUpdateWrongProblem
      }
    },
    supplements: {
      Component: components.SupplementCenter,
      props: {
        dependencies: models.supplementCenterDependencies,
        homeworks: models.homeworks,
        lessons: models.lessons,
        notificationTemplates: models.aiSettings.notificationTemplates,
        notificationJobs: models.notificationJobs,
        records: models.records,
        students: models.students,
        tasks: models.makeupTasks,
        effects: supplementEffects
      }
    },
    materials: {
      Component: components.MaterialManager,
      props: {
        runtime: runtimeBindings.learningSupport,
        students: models.students,
        testAttempts: models.testAttempts,
        testResultSaveState: models.testResultSaveState,
        testSessions: models.testSessions,
        templates: models.classTemplates,
        onDeleteTestSession: actions.handleDeleteTestSession,
        onSaveTestSession: actions.handleSaveTestSession
      }
    },
    resources: {
      Component: components.ResourceLibraryCenter,
      props: {
        materials: models.resourceMaterials,
        resourceMaterialBusy: models.resourceMaterialBusy,
        resourceMaterialDeleteStates: models.resourceMaterialDeleteStates,
        resourceMaterialSaveState: models.resourceMaterialSaveState,
        students: models.students,
        templates: models.classTemplates,
        onAddMaterial: actions.handleAddResourceMaterial,
        onDeleteMaterial: actions.handleDeleteResourceMaterial,
        openMaterial: actions.openResourceMaterial
      }
    },
    students: {
      Component: components.StudentManager,
      props: {
        academyReminders: models.academyReminders,
        academyTests: models.academyTests,
        academyTestSaveState: models.academyTestSaveState,
        homeworks: models.homeworks,
        intakeApplicants: models.studentIntakeApplicants,
        lessons: models.lessons,
        ModalComponent: components.Modal,
        records: models.records,
        scoreRecords: models.scoreRecords,
        scoreRecordSaveState: models.scoreRecordSaveState,
        studentConsultationSaveState: models.studentConsultationSaveState,
        studentConsultations: models.studentConsultations,
        studentProfileSaveStates: models.studentProfileSaveStates,
        teacherOperatingMemos: models.teacherOperatingMemos,
        teacherOperatingMemoSaveStates: models.teacherOperatingMemoSaveStates,
        students: models.students,
        today: models.today,
        specialLectureApplications: models.specialLectureApplications,
        templates: models.classTemplates,
        effects: studentEffects,
        onAddStudent: actions.handleOpenAddStudent
      }
    },
    classes: {
      Component: components.ClassManager,
      props: {
        runtime: runtimeBindings.planningTools,
        students: models.students,
        templates: models.classTemplates,
        onUpdateClassRoster: actions.handleUpdateClassRoster
      }
    },
    examPrep: {
      Component: components.ExamPrepCenter,
      props: {
        runtime: runtimeBindings.examPrepCenter,
        aiSettings: models.aiSettings,
        examPostConfirmSaveStates: models.examPostConfirmSaveStates,
        examPostSubmissions: models.examPostSubmissions,
        examPostTargetStudentIds: models.examPostTargetStudentIds,
        rowSaveStates: models.examPrepRowSaveStates,
        tallySubmissions: models.tallySubmissions,
        tallySummaries: models.tallySummaries,
        templates: models.classTemplates,
        rows: models.examPrepRows,
        students: models.students,
        onConfirmExamPostSubmission: actions.handleConfirmExamPostSubmission,
        onOpenExamPostFile: actions.handleOpenExamPostSubmissionFile,
        onEnsureExamCycleRows: actions.handleEnsureExamCycleRows,
        onSetTallySubmissions: actions.setTallySubmissions,
        onSetTallySummaries: actions.setTallySummaries,
        onSetExamPostTargetStudentIds: actions.setExamPostTargetStudentIds,
        onSaveRow: actions.handleSaveExamPrepRowDraft,
        onUpdateRow: actions.handleUpdateExamPrepRow,
        onDeleteRow: actions.handleDeleteExamPrepRow
      }
    },
    examAnalysisPipeline: {
      Component: components.ExamAnalysisPipelineCenter,
      props: {
        examPrepRows: models.examPrepRows.filter((row) => !row.isExcluded),
        runtime: runtimeBindings.examAnalysisPipeline
      }
    },
    schoolCalendar: {
      Component: components.SchoolCalendarCenter,
      props: {
        runtime: runtimeBindings.planningTools,
        events: models.schoolEvents,
        rows: models.examPrepRows,
        onSaveEvent: actions.handleSaveSchoolEvent,
        onDeleteEvent: actions.handleDeleteSchoolEvent,
        onSaveDerivedEvent: actions.handleSaveDerivedSchoolCalendar
      }
    },
    lessonResearch: {
      Component: components.LessonResearchCenter,
      props: {
        runtime: runtimeBindings.planningTools,
        items: models.lessonResearchItems,
        lessonResearchSaveBusy: models.lessonResearchSaveBusy,
        lessonResearchSaveState: models.lessonResearchSaveState,
        onAddItem: actions.handleAddLessonResearchItem,
        onDeleteItem: actions.handleDeleteLessonResearchItem,
        onSaveItems: actions.handleSaveLessonResearchItems,
        onUpdateItem: actions.handleUpdateLessonResearchItem
      }
    },
    aiVariants: {
      Component: components.AIVariantProblemCenter,
      props: { aiSettings: models.aiSettings, runtime: runtimeBindings.planningTools, students: models.students }
    },
    settlements: {
      Component: components.SettlementWorkspace,
      props: {
        classTemplates: models.classTemplates,
        lessons: models.lessons,
        monthlySaveState: models.monthlySettlementSaveState,
        monthlySettlementState: models.monthlyInstructorSettlements,
        onSaveMonthlySettlement: actions.handleSaveMonthlySettlementMonth,
        onSaveSpecialLectureSettlement: actions.handleSaveSpecialLectureSettlementState,
        records: models.records,
        specialLectureEnrollments: models.specialLectureEnrollments,
        specialLectureGuides: models.specialLectureGuides,
        specialLectureSaveState: models.specialLectureSettlementSaveState,
        specialLectureSettlementState: models.specialLectureInstructorSettlements,
        students: models.students
      }
    },
    notifications: {
      Component: components.NotificationCenter,
      props: {
        aiSettings: models.aiSettings,
        classTemplates: models.classTemplates,
        effects: notificationEffects,
        integrationStatus: models.integrationStatus,
        lessons: models.calendarLessons,
        notificationJobs: models.notificationJobs,
        notificationJobsStatus: models.notificationJobsStatus,
        notificationLogs: models.notificationLogs,
        runtime: runtimeBindings.notificationCenter,
        SpecialLectureNoticePanel: runtimeBindings.SpecialLectureNoticePanel,
        specialLectureGuides: models.specialLectureGuides,
        specialLectureGuideSaveState: models.specialLectureGuideSaveState,
        showSpecialLectureTab: false,
        onScheduleLessonNotificationsAt: actions.handleScheduleLessonNotificationsAt,
        onUpdateLessonNotificationPlan: actions.handleUpdateLessonNotificationPlan,
        students: models.students
      }
    },
    settings: {
      Component: components.SettingsCenter,
      props: {
        runtime: runtimeBindings.settingsCenter,
        aiSettings: models.aiSettings,
        appStateSaveState: models.appStateSaveState,
        attendanceSettings: models.attendanceSettings,
        integrationStatus: models.integrationStatus,
        onUpdateAiSettings: actions.setAiSettings,
        onUpdateAttendanceSettings: actions.setAttendanceSettings,
        teacherAccountSettings: models.teacherAccountSettings,
        onUpdateTeacherAccountSettings: actions.setTeacherAccountSettings
      }
    }
  };
}

export function TeacherViewOutlet({ activeView, adapters }) {
  const adapter = adapters[activeView];
  if (!adapter) return null;
  return createElement(
    TeacherViewLoadBoundary,
    { activeView, key: activeView },
    createElement(
      Suspense,
      { fallback: createElement(TeacherViewLoadingState) },
      createElement(adapter.Component, adapter.props)
    )
  );
}
