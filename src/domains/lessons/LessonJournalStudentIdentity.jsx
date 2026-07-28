import { createLessonJournalStudentIdentityModel } from "./lessonJournalStudentIdentityModel.js";

export function LessonJournalStudentIdentity({ attendanceLesson, onOpenStudentPreview, student }) {
  const model = createLessonJournalStudentIdentityModel({ attendanceLesson, student });

  return (
    <span className="studentCell compact">
      <span className="journalStudentTopLine">
        <strong>{student.name}</strong>
        <button
          aria-label={`${student.name} 학생 화면 보기`}
          className="studentPortalPreviewButton"
          onClick={() => onOpenStudentPreview(student.studentId)}
          type="button"
        >
          👤
        </button>
      </span>
      <small>{model.gradeSchoolLabel}</small>
      {model.showScheduleTime ? (
        <small className={model.scheduleTimeClassName}>
          {model.scheduleTimeLabel}
        </small>
      ) : null}
    </span>
  );
}
