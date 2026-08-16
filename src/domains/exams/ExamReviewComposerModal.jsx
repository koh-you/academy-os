import { AutosaveRiskNotice } from "../../shared/components/AutosaveRiskNotice.jsx";
import { Disclosure } from "../../shared/components/Disclosure.jsx";
import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";
import { Modal } from "../../shared/components/Modal.jsx";
import { SectionHeader } from "../../shared/components/SectionHeader.jsx";
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
          <SectionHeader
            actions={<button className="softButton" onClick={polishReview} type="button">AI 수정</button>}
            density="slim"
            eyebrow="ORIGINAL"
            title="시험 후 기록지"
          />
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
          <Disclosure className="examReviewRawDraft" trigger="전체 원문 보기/직접 수정">
            <textarea
              aria-label="시험 후 기록지 전체 원문"
              className="commentComposerTextarea"
              value={reviewDraft}
              onBlur={flushPendingReviewSave}
              onChange={(event) => updateReviewDraft(event.target.value)}
              placeholder="시험 후 기록지 전체 원문"
            />
          </Disclosure>
          <small className="muted">{row.reviewAiStatus || "AI 대기"}</small>
        </section>

        <section className="commentPreviewPanel">
          <SectionHeader
            actions={(
              <button
                className="softButton"
                disabled={!String(row.revisedReview ?? "").trim()}
                onClick={copyRevisedReview}
                type="button"
              >
                수정본 복사
              </button>
            )}
            density="slim"
            eyebrow="REVISED"
            title="시험 후 총평 수정본"
          />
          <div className="examReviewBlogSource">
            <strong>블로그 발췌 재료</strong>
            <pre>{buildExamReviewBlogSourceText(reviewDraft) || "왼쪽 항목을 채우면 블로그 첫 문단, 변별 포인트, 다음 대비 문장으로 가져갈 재료가 정리됩니다."}</pre>
          </div>
          <textarea
            aria-label="시험 후 총평 수정본"
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
