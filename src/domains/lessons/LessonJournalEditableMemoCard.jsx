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

  // 읽기 모드(disabled)는 값만 보여주는 카드다. 눌러도 아무 일도 없는 button 을 학생 수만큼 깔지 않는다
  // (docs/ui-row-actions.md R1). 편집은 하단바 [편집] 으로 들어간다.
  return (
    <div aria-label={ariaLabel} className={model.readClassName}>
      {model.displayText}
    </div>
  );
}
