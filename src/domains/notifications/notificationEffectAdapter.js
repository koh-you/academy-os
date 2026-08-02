export function createNotificationEffectAdapter({ actions = {}, onRefresh }) {
  return Object.freeze({
    historyProvider: Object.freeze({
      onCancelNotificationJob: actions.handleCancelNotificationJob,
      onReconcileSolapiNotificationResults: actions.handleReconcileSolapiNotificationResults
    }),
    historyTransport: Object.freeze({
      onRefresh
    }),
    specialLecturePersistence: Object.freeze({
      onCreateSpecialLectureStudent: actions.handleCreateSpecialLectureStudent,
      onReplaceSpecialLectureStudent: actions.handleReplaceSpecialLectureStudent,
      onSaveSpecialLectureEnrollment: actions.handleSaveSpecialLectureEnrollment,
      onSaveSpecialLectureEnrollments: actions.handleSaveSpecialLectureEnrollments,
      onSaveSpecialLectureGuides: actions.handleSaveSpecialLectureGuides,
      onSyncSpecialLectureStudentSchedules: actions.handleSyncSpecialLectureStudentSchedules,
      onUpdateSpecialLectureApplication: actions.handleUpdateSpecialLectureApplication
    }),
    specialLectureDeletion: Object.freeze({
      onDeleteSpecialLectureApplication: actions.handleDeleteSpecialLectureApplication
    }),
    specialLectureOrchestration: Object.freeze({
      onCreateSpecialLectureLessons: actions.handleCreateSpecialLectureLessons
    }),
    specialLectureNavigation: Object.freeze({
      onOpenSpecialLectureLesson: actions.openSpecialLectureLesson
    })
  });
}
