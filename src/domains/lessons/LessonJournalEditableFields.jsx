import { LessonJournalEditableMemoCard } from "./LessonJournalEditableMemoCard.jsx";
import { createLessonJournalEditableFieldsModel } from "./lessonJournalEditableFieldsModel.js";

export function LessonJournalEditableFields({
  editingMemoKey,
  journalEditMode,
  nextHomeworkTitle,
  onEdit,
  onUpdateHomeworkDraft,
  onUpdateRecordDraft,
  previousHomeworkTitle,
  previousLessonContent,
  previousLessonMaterial,
  record,
  recordId,
  student
}) {
  const fields = createLessonJournalEditableFieldsModel({
    nextHomeworkTitle,
    previousHomeworkTitle,
    previousLessonContent,
    previousLessonMaterial,
    record,
    recordId,
    student
  });

  return (
    <>
      {fields.map((field) => (
        <LessonJournalEditableMemoCard
          ariaLabel={field.ariaLabel}
          disabled={!journalEditMode}
          editKey={field.editKey}
          editingKey={editingMemoKey}
          key={field.editKey}
          onChange={(value) => {
            if (field.source === "record") {
              onUpdateRecordDraft(field.field, value);
              return;
            }
            onUpdateHomeworkDraft(field.field, value);
          }}
          onEdit={onEdit}
          placeholder={field.placeholder}
          value={field.value}
        />
      ))}
    </>
  );
}
