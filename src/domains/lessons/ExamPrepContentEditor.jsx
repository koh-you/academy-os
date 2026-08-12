import { useEffect, useState } from "react";
import { createExamPrepContentSavePlan, getExamPrepLessonContent } from "./examPrepSchedulePlan.js";

export function ExamPrepContentEditor({ lesson, onSave, persistedLessons = [] }) {
  const [draft, setDraft] = useState(() => getExamPrepLessonContent(lesson));
  const [saveState, setSaveState] = useState({ state: "idle", message: "" });
  const isDirty = draft.trim() !== getExamPrepLessonContent(lesson);

  useEffect(() => {
    setDraft(getExamPrepLessonContent(lesson));
    setSaveState({ state: "idle", message: "" });
  }, [lesson.lessonId]);

  async function save() {
    const plan = createExamPrepContentSavePlan({ content: draft, persistedLessons, sourceLesson: lesson });
    if (!plan.changes.length) return;
    setSaveState({ state: "saving", message: "Supabase 저장·재조회 확인 중" });
    try {
      await onSave(plan);
      setDraft(plan.content);
      setSaveState({ state: "saved", message: "저장 완료 · 이 날짜 시험대비에만 반영" });
    } catch (error) {
      setSaveState({ state: "failed", message: error.message || "진행 내용 저장에 실패했습니다." });
    }
  }

  return (
    <div className="examPrepLessonContentEditor">
      <label htmlFor={`exam-prep-content-${lesson.lessonId}`}>
        오늘 진행한 내용
        <textarea
          id={`exam-prep-content-${lesson.lessonId}`}
          maxLength={1000}
          onChange={(event) => {
            setDraft(event.target.value);
            setSaveState({ state: "dirty", message: "저장 전 변경" });
          }}
          placeholder="예: 안전고 고1 함수 단원 오답 정리 / 김OO 경우의 수 보충"
          value={draft}
        />
      </label>
      <div className="examPrepLessonContentFooter">
        <span>이 날짜 시험대비에만 저장됩니다. 학생별 차이는 이름과 함께 짧게 적어 주세요.</span>
        <button className="primaryButton" disabled={!isDirty || saveState.state === "saving"} onClick={save} type="button">
          {saveState.state === "saving" ? "저장 확인 중" : "진행 내용 저장"}
        </button>
      </div>
      {saveState.message ? <p className={`inlineNotice ${saveState.state === "failed" ? "danger" : ""}`} role="status">{saveState.message}</p> : null}
    </div>
  );
}
