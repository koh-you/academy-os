import { createLessonJournalAssignmentStatusCellModel } from "./lessonJournalAssignmentStatusCellModel.js";
import "./lessonJournalAssignmentStatusCell.css";

export function LessonJournalAssignmentStatusCell({
  assignmentStatusAriaLabel,
  assignmentStatusOptions,
  assignmentStatusValue,
  homeworkFollowupOptions,
  journalEditMode,
  onApplyHomeworkFollowupMethod,
  onAssignmentStatusChange,
  previousHomeworkTitle,
  selectedHomeworkFollowupMethod
}) {
  const model = createLessonJournalAssignmentStatusCellModel({
    assignmentStatusOptions,
    assignmentStatusValue,
    homeworkFollowupOptions,
    journalEditMode,
    previousHomeworkTitle,
    selectedHomeworkFollowupMethod
  });

  // 읽기 모드에서는 비활성 select 를 행마다 깔지 않고 값을 글자로만 보여준다(docs/ui-row-actions.md R1).
  return (
    <div className="assignmentStatusCell">
      {journalEditMode ? (
        <select
          aria-label={assignmentStatusAriaLabel}
          className="assignmentStatusSelect"
          value={assignmentStatusValue}
          onChange={(event) => onAssignmentStatusChange(event.target.value)}
        >
          {assignmentStatusOptions.map((option) => (
            <option key={option.value || "empty"} value={option.value}>{option.label}</option>
          ))}
        </select>
      ) : (
        <div
          aria-label={assignmentStatusAriaLabel}
          className={assignmentStatusValue ? "assignmentStatusReadValue" : "assignmentStatusReadValue empty"}
        >
          {model.readLabel}
        </div>
      )}
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
    </div>
  );
}
