import { useState } from "react";

export function createLessonJournalOverlayInitialState() {
  return {
    commentModal: null,
    editingMemoKey: "",
    prepMemoModal: null,
    studentPreviewId: ""
  };
}

export function useLessonJournalOverlayState() {
  const initialState = createLessonJournalOverlayInitialState();
  const [commentModal, setCommentModal] = useState(initialState.commentModal);
  const [prepMemoModal, setPrepMemoModal] = useState(initialState.prepMemoModal);
  const [editingMemoKey, setEditingMemoKey] = useState(initialState.editingMemoKey);
  const [studentPreviewId, setStudentPreviewId] = useState(initialState.studentPreviewId);

  return {
    commentModal,
    editingMemoKey,
    prepMemoModal,
    setCommentModal,
    setEditingMemoKey,
    setPrepMemoModal,
    setStudentPreviewId,
    studentPreviewId
  };
}
