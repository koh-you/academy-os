import { createElement } from "react";

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

export function createTeacherViewAdapters({ actions, components, models }) {
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
        lessonNotificationPlans: models.lessonNotificationPlans,
        notificationJobs: models.notificationJobs,
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
        undoCount: models.lessonUndoStack.length,
        onAddLesson: actions.handleOpenAddLesson,
        onOpenMonthlyRegularLessons: actions.handleOpenMonthlyRegularLessonModal,
        onChangeRecord: actions.handleChangeRecord,
        onCopyLesson: actions.handleCopySelectedLesson,
        onDateSelect: actions.handleDateSelect,
        onDeleteLesson: actions.handleDeleteLesson,
        onDeleteAcademyReminder: actions.handleDeleteAcademyReminder,
        onDeleteSelectedLesson: actions.handleDeleteSelectedLessonFromCalendar,
        onEditLesson: actions.handleEditLesson,
        onBackToCalendar: actions.handleBackToCalendar,
        onCancelNotificationJob: actions.handleCancelNotificationJob,
        onMoveDate: actions.handleCalendarMove,
        onShiftMonth: actions.handleCalendarMonthShift,
        onOpenAttendance: actions.setAttendanceModal,
        onOpenExamPrep: actions.handleOpenExamPrepView,
        onOpenLessonJournal: actions.handleOpenLessonJournal,
        onPasteLesson: actions.handlePasteLessonToSelectedDate,
        onOpenReport: actions.handleOpenReport,
        onPolishComment: actions.handlePolishLessonComment,
        onPassMakeupTask: actions.handlePassSupplementTask,
        onReconcileSolapiNotificationResults: actions.handleReconcileSolapiNotificationResults,
        onRetryGeneratedLessonSave: actions.handleRetryGeneratedLessonSave,
        onScheduleMakeupTask: actions.handleScheduleSupplementTask,
        onSaveRecord: actions.handleSaveRecord,
        onSaveLessonJournalDrafts: actions.handleSaveLessonJournalDrafts,
        onSaveAcademyReminder: actions.handleSaveAcademyReminder,
        onApplyLessonNotificationPlan: actions.handleApplyLessonNotificationPlan,
        onSendComment: actions.handleSendLessonComment,
        onSelectLesson: actions.setSelectedLessonId,
        onScheduleLessonNotificationsAt: actions.handleScheduleLessonNotificationsAt,
        onUndoLessonAction: actions.handleUndoLessonAction,
        onUpdateHomework: actions.handleUpdateHomework,
        onUpdateLessonNotificationPlan: actions.handleUpdateLessonNotificationPlan,
        onUpdateMakeupTask: actions.handleUpdateMakeupTask,
        onToggleStudentNotificationMute: actions.handleToggleStudentNotificationMute,
        isLessonJournalOpen: models.isLessonJournalOpen
      }
    },
    specialLectureManagement: {
      Component: components.NotificationCenter,
      props: {
        aiSettings: models.aiSettings,
        classTemplates: models.classTemplates,
        compactPageHeader: true,
        hideNotificationSectionTabs: true,
        initialNotificationTab: "specialLecture",
        integrationStatus: models.integrationStatus,
        lessons: models.calendarLessons,
        notificationJobs: models.notificationJobs,
        notificationJobsStatus: models.notificationJobsStatus,
        notificationLogs: models.notificationLogs,
        pageTitle: "특강관리",
        specialLectureApplications: models.specialLectureApplications,
        specialLectureEnrollments: models.specialLectureEnrollments,
        specialLectureGuides: models.specialLectureGuides,
        specialLectureGuideSaveState: models.specialLectureGuideSaveState,
        onCreateSpecialLectureStudent: actions.handleCreateSpecialLectureStudent,
        onDeleteSpecialLectureApplication: actions.handleDeleteSpecialLectureApplication,
        onCreateSpecialLectureLessons: actions.handleCreateSpecialLectureLessons,
        onReplaceSpecialLectureStudent: actions.handleReplaceSpecialLectureStudent,
        onOpenSpecialLectureLesson: actions.openSpecialLectureLesson,
        onScheduleLessonNotificationsAt: actions.handleScheduleLessonNotificationsAt,
        onReconcileSolapiNotificationResults: actions.handleReconcileSolapiNotificationResults,
        onSaveSpecialLectureEnrollment: actions.handleSaveSpecialLectureEnrollment,
        onSaveSpecialLectureEnrollments: actions.handleSaveSpecialLectureEnrollments,
        onSaveSpecialLectureGuides: actions.handleSaveSpecialLectureGuides,
        onSyncSpecialLectureStudentSchedules: actions.handleSyncSpecialLectureStudentSchedules,
        onUpdateLessonNotificationPlan: actions.handleUpdateLessonNotificationPlan,
        onUpdateSpecialLectureApplication: actions.handleUpdateSpecialLectureApplication,
        records: models.records,
        students: models.students,
        onRefresh: actions.handleRefreshActiveNotificationJobs
      }
    },
    overdue: {
      Component: components.OverdueHomework,
      props: {
        homeworks: models.homeworks,
        lessons: models.lessons,
        materials: models.resourceMaterials,
        makeupTasks: models.makeupTasks,
        records: models.records,
        reportSnapshots: models.reportSnapshots,
        scoreRecords: models.scoreRecords,
        students: models.students,
        onTeacherVerifyHomework: actions.handleTeacherVerifyHomework
      }
    },
    followups: {
      Component: components.FollowUpCenter,
      props: {
        appStateSaveState: models.appStateSaveState,
        homeworks: models.homeworks,
        lessons: models.lessons,
        notificationLogs: models.notificationLogs,
        problemBooks: models.problemBooks,
        records: models.records,
        students: models.students,
        tasks: models.makeupTasks,
        wrongProblems: models.wrongProblems,
        onAddProblemBook: actions.handleAddProblemBookFromFile,
        onAddWrongProblem: actions.handleAddWrongProblem,
        onAssignHomework: actions.handleAssignHomeworkFromTask,
        onCreateTask: actions.handleCreateMakeupTask,
        onLogNotification: actions.handleLogNotification,
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
        onCancelAbsenceMakeup: actions.handleCancelAbsenceMakeupKeepSource,
        onCancelAbsenceSource: actions.handleCancelAbsenceMakeupSource,
        onCancelNotification: actions.handleCancelSupplementNotificationControl,
        onPassTask: actions.handlePassSupplementTask,
        onReserveNotification: actions.handleReserveSupplementNotificationControl,
        onSaveTask: actions.handleSaveMakeupTask,
        onScheduleTask: actions.handleScheduleSupplementTask,
        onUndoPassTask: actions.handleUndoPassSupplementTask
      }
    },
    materials: {
      Component: components.MaterialManager,
      props: {
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
        students: models.students,
        templates: models.classTemplates,
        onAddMaterial: actions.handleAddResourceMaterial,
        onDeleteMaterial: actions.handleDeleteResourceMaterial
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
        specialLectureApplications: models.specialLectureApplications,
        templates: models.classTemplates,
        onAddStudent: actions.handleOpenAddStudent,
        onDeleteAcademyTest: actions.handleDeleteAcademyTest,
        onDeleteAcademyReminder: actions.handleDeleteAcademyReminder,
        onDeleteScore: actions.handleDeleteScoreRecord,
        onDeleteStudentConsultation: actions.handleDeleteStudentConsultation,
        onSaveAcademyTest: actions.handleSaveAcademyTest,
        onSaveAcademyReminder: actions.handleSaveAcademyReminder,
        onSaveScore: actions.handleSaveScoreRecord,
        onSaveStudentProfile: actions.handleSaveStudentProfile,
        onSaveTeacherOperatingMemo: actions.handleSaveTeacherOperatingMemo,
        onSaveStudentConsultation: actions.handleSaveStudentConsultation,
        onDeleteStudent: actions.handleDeleteStudent,
        onAuditWithdrawnStudentDeletion: actions.handleAuditWithdrawnStudentDeletion,
        onPermanentlyDeleteWithdrawnStudent: actions.handlePermanentlyDeleteWithdrawnStudent,
        onRestoreStudent: actions.handleRestoreStudent,
        onSaveStudent: actions.handleSaveStudent,
        onUpdateStudent: actions.handleUpdateStudent
      }
    },
    classes: {
      Component: components.ClassManager,
      props: {
        students: models.students,
        templates: models.classTemplates,
        onUpdateClassRoster: actions.handleUpdateClassRoster
      }
    },
    examPrep: {
      Component: components.ExamPrepCenter,
      props: {
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
        onUpdateRow: actions.handleUpdateExamPrepRow,
        onDeleteRow: actions.handleDeleteExamPrepRow
      }
    },
    examAnalysisPipeline: {
      Component: components.ExamAnalysisPipelineCenter,
      props: { examPrepRows: models.examPrepRows }
    },
    schoolCalendar: {
      Component: components.SchoolCalendarCenter,
      props: {
        events: models.schoolEvents,
        rowSaveStates: models.examPrepRowSaveStates,
        rows: models.examPrepRows,
        onSaveEvent: actions.handleSaveSchoolEvent,
        onDeleteEvent: actions.handleDeleteSchoolEvent,
        onSyncPreExamLesson: actions.handleSyncPreExamLessonFromSchoolEvent,
        onUpdateExamPrepRow: actions.handleUpdateExamPrepRow
      }
    },
    lessonResearch: {
      Component: components.LessonResearchCenter,
      props: {
        appStateSaveState: models.appStateSaveState,
        items: models.lessonResearchItems,
        onAddItem: actions.handleAddLessonResearchItem,
        onDeleteItem: actions.handleDeleteLessonResearchItem,
        onUpdateItem: actions.handleUpdateLessonResearchItem
      }
    },
    aiVariants: {
      Component: components.AIVariantProblemCenter,
      props: { aiSettings: models.aiSettings, students: models.students }
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
        integrationStatus: models.integrationStatus,
        lessons: models.calendarLessons,
        notificationJobs: models.notificationJobs,
        notificationJobsStatus: models.notificationJobsStatus,
        notificationLogs: models.notificationLogs,
        onCancelNotificationJob: actions.handleCancelNotificationJob,
        specialLectureGuides: models.specialLectureGuides,
        specialLectureGuideSaveState: models.specialLectureGuideSaveState,
        showSpecialLectureTab: false,
        onScheduleLessonNotificationsAt: actions.handleScheduleLessonNotificationsAt,
        onReconcileSolapiNotificationResults: actions.handleReconcileSolapiNotificationResults,
        onSaveSpecialLectureGuides: actions.handleSaveSpecialLectureGuides,
        onUpdateLessonNotificationPlan: actions.handleUpdateLessonNotificationPlan,
        students: models.students,
        onRefresh: actions.handleRefreshNotificationHistory
      }
    },
    settings: {
      Component: components.SettingsCenter,
      props: {
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
  return adapter ? createElement(adapter.Component, adapter.props) : null;
}
