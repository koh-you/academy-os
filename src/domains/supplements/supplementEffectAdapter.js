export function createSupplementEffectAdapter({ actions = {} } = {}) {
  return Object.freeze({
    persistence: Object.freeze({
      onCancelAbsenceSource: actions.handleCancelAbsenceMakeupSource,
      onSaveTask: actions.handleSaveMakeupTask,
      onUndoPassTask: actions.handleUndoPassSupplementTask
    }),
    provider: Object.freeze({
      onCancelNotification: actions.handleCancelSupplementNotificationControl,
      onReserveNotification: actions.handleReserveSupplementNotificationControl
    }),
    orchestration: Object.freeze({
      onCancelAbsenceMakeup: actions.handleCancelAbsenceMakeupKeepSource,
      onPassTask: actions.handlePassSupplementTask,
      onScheduleTask: actions.handleScheduleSupplementTask
    })
  });
}
