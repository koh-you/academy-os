import { useState } from "react";
import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";

function QuestionSaveFeedback({ saveState, targetId }) {
  if (!saveState || saveState.targetId !== targetId || saveState.state === "idle") return null;
  return (
    <div className={`studentQuestionSaveFeedback ${saveState.state}`} aria-live="polite" role="status">
      <InlineSaveStatus label={saveState.label || "질문"} saveState={saveState.state} />
      {saveState.message ? <span>{saveState.message}</span> : null}
    </div>
  );
}

export function StudentQuestionPanel({
  onAddQuestion,
  onDeleteQuestion,
  onUpdateQuestion,
  questions = [],
  saveState = { state: "idle", targetId: "" },
  selectedStudent,
  writeEnabled = false
}) {
  const [questionText, setQuestionText] = useState("");
  const isSaving = saveState.state === "saving";
  const hasQuestionDraft = Boolean(questionText.trim());
  const createFeedbackState = hasQuestionDraft && !(saveState.targetId === "create" && ["saving", "failed"].includes(saveState.state))
    ? {
        label: "질문 추가",
        message: "아직 Supabase에 저장되지 않았습니다.",
        state: "dirty",
        targetId: "create"
      }
    : saveState;

  async function submitQuestion(event) {
    event.preventDefault();
    const text = questionText.trim();
    if (!text || !selectedStudent || !writeEnabled || isSaving) return;
    const result = await onAddQuestion?.({ studentId: selectedStudent.studentId, text });
    if (result?.ok) setQuestionText("");
  }

  const pendingTargetVisible = questions.some((question) => question.questionId === saveState.targetId);

  return (
    <section className="studentQuestionPanel">
      <div className="sectionHeader compact">
        <div>
          <h2>수업 전에 정리할 질문</h2>
          <p className="muted">막힌 문제나 헷갈린 개념을 짧게 적어두면 수업 시작이 훨씬 빨라집니다.</p>
        </div>
      </div>
      <form className="studentQuestionForm" onSubmit={submitQuestion}>
        <input
          disabled={!writeEnabled || isSaving}
          maxLength={1000}
          value={questionText}
          onChange={(event) => setQuestionText(event.target.value)}
          placeholder="예: 2차함수 최대최소에서 범위가 있을 때가 헷갈려요"
        />
        <button className="primaryButton" disabled={!writeEnabled || isSaving || !hasQuestionDraft} type="submit">
          {saveState.targetId === "create" && isSaving ? "저장 중..." : "질문 추가"}
        </button>
      </form>
      {!writeEnabled ? (
        <p className="studentQuestionPreviewNotice">강사 미리보기에서는 질문을 변경하지 않습니다.</p>
      ) : null}
      <QuestionSaveFeedback saveState={createFeedbackState} targetId="create" />
      <div className="studentQuestionList">
        {questions.length === 0 ? <div className="emptyHomeworkBox compact">아직 정리한 질문이 없습니다.</div> : null}
        {questions.slice(0, 6).map((question) => (
          <article className={`studentQuestionItem ${question.status === "resolved" ? "resolved" : ""}`} key={question.questionId}>
            <div>
              <strong>{question.text}</strong>
              <small>{question.status === "resolved" ? "해결됨" : "수업 질문 준비"}</small>
            </div>
            <div className="studentQuestionItemActions">
              <div>
                <button
                  className="softButton"
                  disabled={!writeEnabled || isSaving}
                  onClick={() => onUpdateQuestion?.(question.questionId, { status: question.status === "resolved" ? "ready" : "resolved" })}
                  type="button"
                >
                  {saveState.targetId === question.questionId && saveState.action === "update" && isSaving
                    ? "저장 중..."
                    : question.status === "resolved" ? "다시 질문" : "해결 체크"}
                </button>
                <button
                  className="dangerSoftButton"
                  disabled={!writeEnabled || isSaving}
                  onClick={() => onDeleteQuestion?.(question.questionId)}
                  type="button"
                >
                  {saveState.targetId === question.questionId && saveState.action === "delete" && isSaving ? "삭제 중..." : "삭제"}
                </button>
              </div>
              <QuestionSaveFeedback saveState={saveState} targetId={question.questionId} />
            </div>
          </article>
        ))}
      </div>
      {saveState.targetId && saveState.targetId !== "create" && !pendingTargetVisible ? (
        <QuestionSaveFeedback saveState={saveState} targetId={saveState.targetId} />
      ) : null}
    </section>
  );
}
