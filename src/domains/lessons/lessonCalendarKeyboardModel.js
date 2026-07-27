export function isLessonCalendarEditableTarget(target) {
  const tagName = target?.tagName?.toLowerCase();
  return (
    tagName === "input" ||
    tagName === "textarea" ||
    tagName === "select" ||
    tagName === "button" ||
    tagName === "a" ||
    tagName === "summary" ||
    Boolean(target?.isContentEditable) ||
    Boolean(target?.closest?.("[role=\"button\"]"))
  );
}

export function getLessonCalendarKeyboardAction({
  event,
  isLessonJournalOpen,
  selectedLessonId
}) {
  if (
    isLessonJournalOpen ||
    isLessonCalendarEditableTarget(event?.target)
  ) {
    return null;
  }

  const key = String(event?.key ?? "").toLowerCase();
  const isControl = Boolean(event?.ctrlKey || event?.metaKey);
  if (isControl && key === "c") return { type: "copy" };
  if (isControl && key === "v") return { type: "paste" };
  if (isControl && key === "z") return { type: "undo" };
  if (event?.key === "Delete") return { type: "delete" };
  if (event?.key === "Enter" && selectedLessonId) {
    return {
      lessonId: selectedLessonId,
      type: "open"
    };
  }

  const movementMap = {
    ArrowLeft: -1,
    ArrowRight: 1,
    ArrowUp: -7,
    ArrowDown: 7
  };
  const dayOffset = movementMap[event?.key];
  return dayOffset
    ? {
        dayOffset,
        type: "move"
      }
    : null;
}
