import { useState } from "react";

export function createLessonJournalOverlayInitialState() {
  return {
    commentModal: null,
    editingMemoKey: "",
    prepMemoModal: null,
    previousLessonSourceByStudent: {},
    studentPreviewId: ""
  };
}

export function useLessonJournalOverlayState() {
  const initialState = createLessonJournalOverlayInitialState();
  const [commentModal, setCommentModal] = useState(initialState.commentModal);
  const [prepMemoModal, setPrepMemoModal] = useState(initialState.prepMemoModal);
  const [editingMemoKey, setEditingMemoKey] = useState(initialState.editingMemoKey);
  const [previousLessonSourceByStudent, setPreviousLessonSourceByStudent] = useState(initialState.previousLessonSourceByStudent);
  const [studentPreviewId, setStudentPreviewId] = useState(initialState.studentPreviewId);

  function setPreviousLessonSourceForStudent(studentId, mode) {
    setPreviousLessonSourceByStudent((current) => ({ ...current, [studentId]: mode }));
  }

  return {
    commentModal,
    editingMemoKey,
    prepMemoModal,
    previousLessonSourceByStudent,
    setCommentModal,
    setEditingMemoKey,
    setPrepMemoModal,
    setPreviousLessonSourceForStudent,
    setStudentPreviewId,
    studentPreviewId
  };
}
