import { DataTableShell } from "../../shared/components/DataTableShell.jsx";
import { createLessonJournalTableModel } from "./lessonJournalTableModel.js";

export function LessonJournalTable({ children, isEditMode }) {
  const model = createLessonJournalTableModel({ isEditMode });

  return (
    <section className="panel journalTablePanel">
      <DataTableShell className={model.className} label="수업일지 학생 기록">
        <div className="journalRow journalHead">
          {model.columns.map((column) => <span key={column}>{column}</span>)}
        </div>
        {children}
      </DataTableShell>
    </section>
  );
}
