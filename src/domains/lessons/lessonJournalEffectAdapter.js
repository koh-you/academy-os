export function createLessonJournalEffectAdapter({ actions = {}, transport = {} } = {}) {
  return Object.freeze({
    persistence: Object.freeze({
      onChangeRecord: actions.handleChangeRecord,
      onDeleteLesson: actions.handleDeleteLesson,
      onPassMakeupTask: actions.handlePassSupplementTask,
      onSaveLessonJournalDrafts: actions.handleSaveLessonJournalDrafts,
      onSaveRecord: actions.handleSaveRecord,
      onScheduleMakeupTask: actions.handleScheduleSupplementTask,
      onToggleStudentNotificationMute: actions.handleToggleStudentNotificationMute,
      onUpdateHomework: actions.handleUpdateHomework,
      onUpdateLessonNotificationPlan: actions.handleUpdateLessonNotificationPlan,
      onUpdateMakeupTask: actions.handleUpdateMakeupTask
    }),
    provider: Object.freeze({
      loadLessonJournalReservationAudit: transport.loadLessonJournalReservationAudit,
      onApplyLessonNotificationPlan: actions.handleApplyLessonNotificationPlan,
      onCancelNotificationJob: actions.handleCancelNotificationJob,
      onPolishComment: actions.handlePolishLessonComment,
      onReconcileSolapiNotificationResults: actions.handleReconcileSolapiNotificationResults,
      onScheduleLessonNotificationsAt: actions.handleScheduleLessonNotificationsAt,
      onSendComment: actions.handleSendLessonComment
    })
  });
}
