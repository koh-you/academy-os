export function createStudentEffectAdapter({ actions = {} } = {}) {
  return Object.freeze({
    draft: Object.freeze({
      onUpdateStudent: actions.handleUpdateStudent
    }),
    persistence: Object.freeze({
      onSaveAcademyReminder: actions.handleSaveAcademyReminder,
      onSaveAcademyTest: actions.handleSaveAcademyTest,
      onSaveScore: actions.handleSaveScoreRecord,
      onSaveStudent: actions.handleSaveStudent,
      onSaveStudentConsultation: actions.handleSaveStudentConsultation,
      onSaveStudentProfile: actions.handleSaveStudentProfile,
      onSaveTeacherOperatingMemo: actions.handleSaveTeacherOperatingMemo
    }),
    deletion: Object.freeze({
      onDeleteAcademyReminder: actions.handleDeleteAcademyReminder,
      onDeleteAcademyTest: actions.handleDeleteAcademyTest,
      onDeleteScore: actions.handleDeleteScoreRecord,
      onDeleteStudentConsultation: actions.handleDeleteStudentConsultation,
      onPermanentlyDeleteWithdrawnStudent: actions.handlePermanentlyDeleteWithdrawnStudent
    }),
    lifecycle: Object.freeze({
      onDeleteStudent: actions.handleDeleteStudent,
      onRestoreStudent: actions.handleRestoreStudent,
    }),
    audit: Object.freeze({
      onAuditWithdrawnStudentDeletion: actions.handleAuditWithdrawnStudentDeletion
    })
  });
}
