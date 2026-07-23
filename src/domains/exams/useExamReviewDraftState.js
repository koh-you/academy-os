import { useEffect, useRef, useState } from "react";
import {
  createExamReviewDraft,
  normalizeExamReviewDraftText,
  setExamReviewSectionValue
} from "./examReviewDraft.js";
import { createExamReviewDraftSaveController } from "./examReviewDraftSaveController.js";

export function useExamReviewDraftState({ onUpdateRow, row }) {
  const reviewDraftSaveControllerRef = useRef(null);
  if (!reviewDraftSaveControllerRef.current) {
    reviewDraftSaveControllerRef.current = createExamReviewDraftSaveController();
  }
  const [reviewDraft, setReviewDraft] = useState(() => {
    const currentReview = String(row.review ?? "");
    const initialReview = currentReview.trim() ? normalizeExamReviewDraftText(currentReview, row) : createExamReviewDraft(row);
    reviewDraftSaveControllerRef.current.setLatestValue(initialReview);
    return initialReview;
  });

  useEffect(() => {
    if (!row.examPrepId) return;
    const currentReview = String(row.review ?? "");
    const nextReview = currentReview.trim() ? normalizeExamReviewDraftText(currentReview, row) : createExamReviewDraft(row);
    reviewDraftSaveControllerRef.current.setLatestValue(nextReview);
    setReviewDraft(nextReview);
    if (nextReview === currentReview) return;
    onUpdateRow(row.examPrepId, "review", nextReview);
  }, [row.examPrepId]);

  useEffect(() => () => {
    reviewDraftSaveControllerRef.current?.cancel();
  }, []);

  function flushPendingReviewSave() {
    reviewDraftSaveControllerRef.current.flush((value) => {
      onUpdateRow(row.examPrepId, "review", value);
    });
  }

  function scheduleReviewDraftSave(value) {
    reviewDraftSaveControllerRef.current.schedule(value, (latestValue) => {
      onUpdateRow(row.examPrepId, "review", latestValue);
    });
  }

  function updateReviewDraft(value) {
    setReviewDraft(value);
    scheduleReviewDraftSave(value);
  }

  function updateReviewSection(section, value) {
    const nextReview = setExamReviewSectionValue(reviewDraft, section, value);
    updateReviewDraft(nextReview);
  }

  return {
    flushPendingReviewSave,
    reviewDraft,
    updateReviewDraft,
    updateReviewSection
  };
}
