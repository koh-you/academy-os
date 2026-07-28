import { useEffect, useRef } from "react";
import { createLessonJournalEditableMemoCardModel } from "./lessonJournalEditableMemoCardModel.js";

export function LessonJournalEditableMemoCard({
  ariaLabel,
  className = "",
  disabled = false,
  editKey,
  editingKey,
  onChange,
  onEdit,
  placeholder,
  value
}) {
  const textareaRef = useRef(null);
  const model = createLessonJournalEditableMemoCardModel({
    className,
    disabled,
    editKey,
    editingKey,
    placeholder,
    value
  });

  useEffect(() => {
    if (!model.isEditable || !textareaRef.current) return;
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
    if (model.shouldFocus) textarea.focus();
  }, [model.isEditable, model.shouldFocus, value]);

  function handleChange(event) {
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
    onChange(textarea.value);
  }

  if (model.isEditable) {
    return (
      <textarea
        aria-label={ariaLabel}
        className={model.inputClassName}
        onChange={handleChange}
        onFocus={() => onEdit(editKey)}
        onKeyDown={(event) => {
          if (event.key === "Escape" || (event.key === "Enter" && (event.ctrlKey || event.metaKey))) {
            event.currentTarget.blur();
          }
        }}
        placeholder={placeholder}
        ref={textareaRef}
        rows="1"
        value={value ?? ""}
      />
    );
  }

  return (
    <button
      className={model.readClassName}
      onClick={() => {
        if (!disabled) onEdit(editKey);
      }}
      type="button"
    >
      {model.displayText}
    </button>
  );
}
