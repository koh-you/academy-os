import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";
import { KakaoAlimtalkPreview } from "../../shared/components/KakaoAlimtalkPreview.jsx";
import { Modal } from "../../shared/components/Modal.jsx";
import { SectionHeader } from "../../shared/components/SectionHeader.jsx";

export function LessonJournalCommentComposerView({
  draftComment,
  draftSaveState,
  generatedPreviewText,
  hasUnsavedDraft,
  isSourceOpen,
  lesson,
  localAiStatus,
  model,
  onChangeDraft,
  onClose,
  onPolish,
  onSave,
  onSend,
  onToggleSource,
  sourceText
}) {
  const {
    actionLabel,
    isLessonNotificationOff,
    isNotificationMuted,
    isParent,
    previewTitle,
    title,
    visibleDraftSaveState
  } = model;

  return (
    <Modal
      className="commentComposerModal"
      title={title}
      subtitle={`${lesson.date} · ${lesson.className}`}
      onClose={onClose}
    >
      <div className="commentComposerGrid">
        <section className="commentDraftPanel">
          <SectionHeader
            density="slim"
            eyebrow="FINAL"
            meta={<span className="countBadge">{isParent ? "학부모용" : "학생용"}</span>}
            title="최종 알림톡 문구"
          />
          <div className="commentSourceToggle">
            <button
              aria-controls="comment-source-preview"
              aria-expanded={isSourceOpen}
              className="softButton mini"
              onClick={onToggleSource}
              type="button"
            >
              {isSourceOpen ? "원본 메모 접기" : "원본 메모 보기"}
            </button>
            <span>수업메모와 일정 정보는 AI 수정 참고용으로 보관됩니다.</span>
          </div>
          {isSourceOpen ? (
            <pre className="templatePreviewText commentSourcePreview" id="comment-source-preview">{sourceText}</pre>
          ) : null}
          <textarea
            aria-label={isParent ? "학부모 최종 알림톡 문구" : "학생 최종 알림톡 문구"}
            className="commentComposerTextarea"
            value={draftComment}
            onChange={(event) => onChangeDraft(event.target.value)}
            placeholder={isParent ? "학부모님께 실제로 보낼 최종 문구를 적어주세요." : "학생에게 실제로 보낼 최종 문구를 적어주세요."}
          />
          <div className="commentComposerStatusRow">
            <InlineSaveStatus label="최종 문구" saveState={visibleDraftSaveState} />
            <small className="muted">{localAiStatus}</small>
          </div>
          <div className="commentComposerActions">
            <button
              className="softButton"
              disabled={localAiStatus === "AI 수정 중"}
              onClick={onPolish}
              type="button"
            >
              {localAiStatus === "AI 수정 중" ? "AI 수정 중..." : "AI 수정"}
            </button>
            <button
              className="softButton"
              disabled={!hasUnsavedDraft || draftSaveState === "saving"}
              onClick={onSave}
              type="button"
            >
              {draftSaveState === "saving" ? "저장 중" : "최종 문구 저장"}
            </button>
            <button
              className="primaryButton"
              disabled={hasUnsavedDraft || isNotificationMuted || isLessonNotificationOff}
              onClick={onSend}
              title={hasUnsavedDraft ? "최종 문구 저장 후 발송할 수 있습니다." : ""}
              type="button"
            >
              {hasUnsavedDraft ? "저장 후 가능" : actionLabel}
            </button>
          </div>
        </section>

        <section className="commentPreviewPanel">
          <SectionHeader density="slim" eyebrow="PREVIEW" title={previewTitle} />
          <div className="templatePreviewText commentTemplatePreview">
            <KakaoAlimtalkPreview text={generatedPreviewText} />
          </div>
        </section>
      </div>
    </Modal>
  );
}
