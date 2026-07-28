import { useEffect, useRef, useState } from "react";

export function createLessonJournalCommentDraftSnapshot({
  aiStatus = "",
  comment = "",
  initialCommentDraft
} = {}) {
  return {
    draftComment: initialCommentDraft ?? comment,
    draftSaveState: "idle",
    localAiStatus: aiStatus || "AI 대기"
  };
}

export function getLessonJournalCommentAiTransitionDraft({
  aiStatus = "",
  field = "",
  previousAiStatus = "",
  record = {}
} = {}) {
  if (
    previousAiStatus !== "AI 수정 중" ||
    !aiStatus ||
    aiStatus === "AI 수정 중"
  ) {
    return null;
  }
  return record?.[field] ?? "";
}

export function hasLessonJournalCommentDraftChange({
  draftComment = "",
  lastSavedDraft = ""
} = {}) {
  return draftComment !== lastSavedDraft;
}

export function useLessonJournalCommentComposerDraft({
  aiStatus = "",
  audience = "parent",
  comment = "",
  field = "",
  initialCommentDraft,
  record = {},
  studentId = ""
} = {}) {
  const initialSnapshot = createLessonJournalCommentDraftSnapshot({
    aiStatus,
    comment,
    initialCommentDraft
  });
  const [isSourceOpen, setIsSourceOpen] = useState(false);
  const [draftComment, setDraftComment] = useState(initialSnapshot.draftComment);
  const [localAiStatus, setLocalAiStatus] = useState(initialSnapshot.localAiStatus);
  const [draftSaveState, setDraftSaveState] = useState(initialSnapshot.draftSaveState);
  const lastSavedDraftRef = useRef(comment);
  const previousAiStatusRef = useRef(aiStatus);
  const hasUnsavedDraft = hasLessonJournalCommentDraftChange({
    draftComment,
    lastSavedDraft: lastSavedDraftRef.current
  });

  useEffect(() => {
    const nextComment = record?.[field] ?? "";
    const nextSnapshot = createLessonJournalCommentDraftSnapshot({
      aiStatus,
      comment: nextComment,
      initialCommentDraft
    });
    setDraftComment(nextSnapshot.draftComment);
    lastSavedDraftRef.current = nextComment;
    previousAiStatusRef.current = aiStatus;
    setDraftSaveState(nextSnapshot.draftSaveState);
    setLocalAiStatus(nextSnapshot.localAiStatus);
  }, [audience, studentId]);

  useEffect(() => {
    const nextDraft = getLessonJournalCommentAiTransitionDraft({
      aiStatus,
      field,
      previousAiStatus: previousAiStatusRef.current,
      record
    });
    previousAiStatusRef.current = aiStatus;
    if (nextDraft !== null) {
      setDraftComment(nextDraft);
    }
  }, [aiStatus, field, record]);

  function markDraftSaved(savedDraft = draftComment) {
    lastSavedDraftRef.current = savedDraft;
    setDraftSaveState("saved");
  }

  function toggleSource() {
    setIsSourceOpen((current) => !current);
  }

  return {
    draftComment,
    draftSaveState,
    hasUnsavedDraft,
    isSourceOpen,
    localAiStatus,
    markDraftSaved,
    setDraftComment,
    setDraftSaveState,
    setLocalAiStatus,
    toggleSource
  };
}
