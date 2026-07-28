import { useEffect } from "react";
import { getLessonCalendarKeyboardAction } from "./lessonCalendarKeyboardModel.js";

export function dispatchLessonCalendarKeyboardAction(action, {
  onCopyLesson,
  onDeleteSelectedLesson,
  onMoveDate,
  onOpenLessonJournal,
  onPasteLesson,
  onUndoLessonAction
}) {
  if (!action) return false;
  if (action.type === "copy") onCopyLesson();
  if (action.type === "paste") onPasteLesson();
  if (action.type === "undo") onUndoLessonAction();
  if (action.type === "delete") onDeleteSelectedLesson();
  if (action.type === "open") onOpenLessonJournal(action.lessonId);
  if (action.type === "move") onMoveDate(action.dayOffset);
  return true;
}

export function useLessonCalendarKeyboardNavigation({
  isLessonJournalOpen,
  onCopyLesson,
  onDeleteSelectedLesson,
  onMoveDate,
  onOpenLessonJournal,
  onPasteLesson,
  onUndoLessonAction,
  selectedLessonId
}) {
  useEffect(() => {
    function handleKeyDown(event) {
      const action = getLessonCalendarKeyboardAction({
        event,
        isLessonJournalOpen,
        selectedLessonId
      });
      if (!action) return;
      event.preventDefault();
      dispatchLessonCalendarKeyboardAction(action, {
        onCopyLesson,
        onDeleteSelectedLesson,
        onMoveDate,
        onOpenLessonJournal,
        onPasteLesson,
        onUndoLessonAction
      });
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    isLessonJournalOpen,
    onCopyLesson,
    onDeleteSelectedLesson,
    onMoveDate,
    onOpenLessonJournal,
    onPasteLesson,
    onUndoLessonAction,
    selectedLessonId
  ]);
}
