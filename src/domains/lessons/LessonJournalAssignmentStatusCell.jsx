import { createLessonJournalAssignmentStatusCellModel } from "./lessonJournalAssignmentStatusCellModel.js";

export function LessonJournalAssignmentStatusCell({
  assignmentStatusAriaLabel,
  assignmentStatusOptions,
  assignmentStatusValue,
  homeworkFollowupOptions,
  journalEditMode,
  onApplyHomeworkFollowupMethod,
  onAssignmentStatusChange,
  previousHomeworkFollowup,
  previousHomeworkTitle,
  selectedHomeworkFollowupMethod
}) {
  const model = createLessonJournalAssignmentStatusCellModel({
    homeworkFollowupOptions,
    journalEditMode,
    previousHomeworkFollowup,
    previousHomeworkTitle,
    selectedHomeworkFollowupMethod
  });

  return (
    <div className="assignmentStatusCell">
      <select
        aria-label={assignmentStatusAriaLabel}
        className="assignmentStatusSelect"
        disabled={!journalEditMode}
        value={assignmentStatusValue}
        onChange={(event) => onAssignmentStatusChange(event.target.value)}
      >
        {assignmentStatusOptions.map((option) => (
          <option key={option.value || "empty"} value={option.value}>{option.label}</option>
        ))}
      </select>
      {model.showHomeworkFollowupActions ? (
        <div className="homeworkFollowupActions" aria-label="숙제보충 처리 방식">
          {homeworkFollowupOptions.map((method) => (
            <button
              className={model.selectedHomeworkFollowupMethod === method.id ? "active" : ""}
              key={method.id}
              onClick={() => onApplyHomeworkFollowupMethod(method.id)}
              type="button"
            >
              {method.label}
            </button>
          ))}
        </div>
      ) : null}
      {model.pendingHomeworkFollowupText ? (
        <span className="homeworkFollowupCheck">
          확인할 숙제 · {model.pendingHomeworkFollowupText}
        </span>
      ) : null}
    </div>
  );
}
