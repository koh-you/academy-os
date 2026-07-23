import { useEffect, useRef, useState } from "react";
import { apiUrl } from "../../shared/utils/apiClient.js";
import { copyTextToClipboard } from "./outputPreview.js";
import {
  buildExamReviewPolishPayload,
  polishExamReviewRequest
} from "./examReviewApi.js";

export function useExamReviewComposerActions({
  aiModel,
  aiPrompt,
  aiProvider,
  currentDate,
  onUpdateRow,
  reviewDraft,
  row
}) {
  const copyStatusTimerRef = useRef(null);
  const [reviewCopyStatus, setReviewCopyStatus] = useState("");

  useEffect(() => () => {
    if (copyStatusTimerRef.current) clearTimeout(copyStatusTimerRef.current);
  }, []);

  async function copyRevisedReview() {
    const copied = await copyTextToClipboard(row.revisedReview ?? "");
    setReviewCopyStatus(copied ? "복사되었습니다." : "복사할 내용을 확인해 주세요.");
    if (copyStatusTimerRef.current) clearTimeout(copyStatusTimerRef.current);
    copyStatusTimerRef.current = setTimeout(() => {
      copyStatusTimerRef.current = null;
      setReviewCopyStatus("");
    }, 1800);
  }

  function updateRevisedReview(value) {
    setReviewCopyStatus("");
    onUpdateRow(row.examPrepId, "revisedReview", value);
  }

  async function polishReview() {
    onUpdateRow(row.examPrepId, "reviewAiStatus", "AI 수정 중");
    try {
      const result = await polishExamReviewRequest({
        fetchImpl: fetch,
        resolveApiUrl: apiUrl,
        payload: buildExamReviewPolishPayload({
          aiProvider,
          aiModel,
          aiPrompt,
          grade: row.grade,
          lessonDate: row.mathExamDate || row.examPeriod || currentDate,
          lessonName: `${row.schoolName} ${row.subject} 시험 총평`,
          rawText: reviewDraft,
          schoolName: row.schoolName
        })
      });
      onUpdateRow(row.examPrepId, "revisedReview", result.polishedText);
      onUpdateRow(row.examPrepId, "reviewAiStatus", `완료 · ${result.provider}`);
    } catch (error) {
      onUpdateRow(row.examPrepId, "reviewAiStatus", `실패 · ${error.message}`);
    }
  }

  return {
    copyRevisedReview,
    polishReview,
    reviewCopyStatus,
    updateRevisedReview
  };
}
