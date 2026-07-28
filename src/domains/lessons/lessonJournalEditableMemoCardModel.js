export function createLessonJournalEditableMemoCardModel({
  className = "",
  disabled = false,
  editKey = "",
  editingKey = "",
  placeholder = "",
  value = ""
}) {
  const isEditable = !disabled;
  const displayValue = value?.trim() ? value : "";

  return {
    displayText: displayValue || placeholder,
    inputClassName: `journalMemoCardInput ${className}`.trim(),
    isEditable,
    readClassName: `journalMemoCardRead ${displayValue ? "" : "empty"} ${disabled ? "locked" : ""} ${className}`.trim(),
    shouldFocus: isEditable && editingKey === editKey
  };
}
