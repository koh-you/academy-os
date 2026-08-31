import { LessonJournalEditableMemoCard } from "./LessonJournalEditableMemoCard.jsx";
import { LessonJournalPreviousLessonSourceToggle } from "./LessonJournalPreviousLessonSourceToggle.jsx";
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
  previousLessonSourceToggleProps,
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
      {fields.map((field) => {
        const showSourceToggle = field.field === "previous" && Boolean(previousLessonSourceToggleProps);
        const card = (
          <LessonJournalEditableMemoCard
            ariaLabel={field.ariaLabel}
            disabled={!journalEditMode}
            editKey={field.editKey}
            editingKey={editingMemoKey}
            key={showSourceToggle ? undefined : field.editKey}
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
        );
        if (!showSourceToggle) return card;
        return (
          <div className="journalPreviousHomeworkCell" key={field.editKey}>
            {card}
            <LessonJournalPreviousLessonSourceToggle {...previousLessonSourceToggleProps} />
          </div>
        );
      })}
    </>
  );
}
