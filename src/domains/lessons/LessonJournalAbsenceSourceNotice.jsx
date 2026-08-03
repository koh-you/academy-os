import { createLessonJournalAbsenceSourceModel } from "./lessonJournalAbsenceSourceModel.js";

export function LessonJournalAbsenceSourceNotice({ lesson, lessons, records, task }) {
  const model = createLessonJournalAbsenceSourceModel({ lesson, lessons, records, task });

  if (!model.isVisible) return null;

  return (
    <aside aria-label="결석한 수업" className="lessonJournalAbsenceSourceNotice">
      <span>결석한 수업</span>
      <strong>{model.dateLabel} · {model.classLabel}</strong>
      {model.timeLabel ? <small>{model.timeLabel}</small> : null}
      <small>결석 사유 · {model.absenceReason}</small>
    </aside>
  );
}
