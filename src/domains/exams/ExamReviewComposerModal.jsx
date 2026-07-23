import { AutosaveRiskNotice } from "../../shared/components/AutosaveRiskNotice.jsx";
import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";
import { Modal } from "../../shared/components/Modal.jsx";
import {
  buildExamReviewBlogSourceText,
  examReviewChecklistSections,
  getExamReviewSectionValue
} from "./examReviewDraft.js";
import { useExamReviewComposerActions } from "./useExamReviewComposerActions.js";
import { useExamReviewDraftState } from "./useExamReviewDraftState.js";

export function ExamReviewComposerModal({
  aiModel,
  aiPrompt,
  aiProvider,
  autosaveRisk,
  currentDate,
  onClose,
  onUpdateRow,
  row,
  saveState = "idle"
}) {
  const {
    flushPendingReviewSave,
    reviewDraft,
    updateReviewDraft,
    updateReviewSection
  } = useExamReviewDraftState({ onUpdateRow, row });
  const {
    copyRevisedReview,
    polishReview,
    reviewCopyStatus,
    updateRevisedReview
  } = useExamReviewComposerActions({
    aiModel,
    aiPrompt,
    aiProvider,
    currentDate,
    onUpdateRow,
    reviewDraft,
    row
  });

  function handleClose() {
    flushPendingReviewSave();
    onClose();
  }

  return (
    <Modal
      className="commentComposerModal examReviewComposerModal"
      title={`${row.schoolName} 시험 후 총평`}
      subtitle={`${row.grade} · ${row.subject} · ${row.publisher || "출판사 미입력"}`}
      onClose={handleClose}
    >
      {saveState !== "idle" ? (
        <div className="modalSaveStatusBar">
          <InlineSaveStatus label="시험정보" saveState={saveState} />
        </div>
      ) : null}
      <AutosaveRiskNotice className="autosaveRiskNoticeInline" {...autosaveRisk} />
      <div className="commentComposerGrid">
        <section className="commentDraftPanel">
          <div className="sectionHeader slim">
            <div>
              <p className="eyebrow">ORIGINAL</p>
              <h2>시험 후 기록지</h2>
            </div>
            <button className="softButton" onClick={polishReview} type="button">AI 수정</button>
          </div>
          <div className="examReviewChecklist">
            {examReviewChecklistSections.map((section) => (
              <label className="examReviewChecklistItem" key={section.key}>
                <span>{section.number}. {section.title}</span>
                <textarea
                  value={getExamReviewSectionValue(reviewDraft, section)}
                  onBlur={flushPendingReviewSave}
                  onChange={(event) => updateReviewSection(section, event.target.value)}
                  placeholder={section.placeholder}
                />
              </label>
            ))}
          </div>
          <details className="examReviewRawDraft">
            <summary>전체 원문 보기/직접 수정</summary>
            <textarea
              className="commentComposerTextarea"
              value={reviewDraft}
              onBlur={flushPendingReviewSave}
              onChange={(event) => updateReviewDraft(event.target.value)}
              placeholder="시험 후 기록지 전체 원문"
            />
          </details>
          <small className="muted">{row.reviewAiStatus || "AI 대기"}</small>
        </section>

        <section className="commentPreviewPanel">
          <div className="sectionHeader slim">
            <div>
              <p className="eyebrow">REVISED</p>
              <h2>시험 후 총평 수정본</h2>
            </div>
            <button
              className="softButton"
              disabled={!String(row.revisedReview ?? "").trim()}
              onClick={copyRevisedReview}
              type="button"
            >
              수정본 복사
            </button>
          </div>
          <div className="examReviewBlogSource">
            <strong>블로그 발췌 재료</strong>
            <pre>{buildExamReviewBlogSourceText(reviewDraft) || "왼쪽 항목을 채우면 블로그 첫 문단, 변별 포인트, 다음 대비 문장으로 가져갈 재료가 정리됩니다."}</pre>
          </div>
          <textarea
            className="commentComposerTextarea"
            value={row.revisedReview ?? ""}
            onChange={(event) => updateRevisedReview(event.target.value)}
            placeholder="AI가 다듬은 총평 또는 강사가 최종 수정한 총평이 들어갑니다."
          />
          {reviewCopyStatus ? (
            <small className="reviewCopyStatus" role="status" aria-live="polite">{reviewCopyStatus}</small>
          ) : null}
        </section>
      </div>
    </Modal>
  );
}
