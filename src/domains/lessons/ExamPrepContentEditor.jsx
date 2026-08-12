import { useEffect, useMemo, useState } from "react";
import {
  createExamPrepStudentContentDrafts,
  createExamPrepStudentContentSaveItems,
  getExamPrepLegacyCommonContent
} from "./examPrepStudentContent.js";

export function ExamPrepContentEditor({ createRecord, lesson, onSaveRecord, records = [], studentRows = [] }) {
  const rosterKey = studentRows.map((row) => row.studentId).join("|");
  const initialDrafts = useMemo(
    () => createExamPrepStudentContentDrafts({ lesson, records, studentRows }),
    [lesson.lessonId, records, rosterKey]
  );
  const [savedDrafts, setSavedDrafts] = useState(initialDrafts);
  const [drafts, setDrafts] = useState(initialDrafts);
  const [saveState, setSaveState] = useState({ state: "idle", message: "" });
  const legacyCommonContent = getExamPrepLegacyCommonContent(lesson);
  const saveItems = createExamPrepStudentContentSaveItems({ createRecord, drafts, lesson, records, savedDrafts, studentRows });

  useEffect(() => {
    setSavedDrafts(initialDrafts);
    setDrafts(initialDrafts);
    setSaveState({ state: "idle", message: "" });
  }, [lesson.lessonId, rosterKey]);

  async function save() {
    if (!saveItems.length) return;
    setSaveState({ state: "saving", message: `${saveItems.length}명 Supabase 저장·재조회 확인 중` });
    for (const item of saveItems) {
      const saved = await onSaveRecord(item.record.lessonStudentRecordId, lesson, item.student, item.record, {
        skipNotificationRefresh: true,
        skipRelatedHomeworks: true,
        verifyFields: ["lessonProgress"]
      });
      if (!saved) {
        setSaveState({ state: "failed", message: `${item.student.name} 진행 내용 저장에 실패했습니다. 입력은 유지됩니다.` });
        return;
      }
    }
    setSavedDrafts(drafts);
    setSaveState({ state: "saved", message: `저장 완료 · 학생별 ${saveItems.length}명 재조회 확인` });
  }

  if (!studentRows.length) {
    return <p className="inlineNotice">먼저 일정 수정에서 이 날짜의 시험대비 학생을 연결해 주세요.</p>;
  }

  return (
    <div className="examPrepLessonContentEditor">
      <div className="examPrepStudentContentHeading">
        <div>
          <strong>학생별 오늘 진행한 내용</strong>
          <p>학생마다 별도의 칸에 적고 각각의 수업기록으로 저장합니다.</p>
        </div>
        <span>{studentRows.length}명</span>
      </div>
      {legacyCommonContent ? (
        <div className="examPrepLegacyCommonContent">
          <span>이전 공통 기록</span>
          <p>{legacyCommonContent}</p>
        </div>
      ) : null}
      <div className="examPrepStudentContentList">
        {studentRows.map((student) => (
          <label className="examPrepStudentContentRow" htmlFor={`exam-prep-content-${lesson.lessonId}-${student.studentId}`} key={student.studentId}>
            <span className="examPrepStudentContentIdentity">
              <strong>{student.name}</strong>
              <small>{student.schoolName} · {student.timeLabel}</small>
            </span>
            <textarea
              aria-label={`${student.name} 오늘 진행한 내용`}
              id={`exam-prep-content-${lesson.lessonId}-${student.studentId}`}
              maxLength={1000}
              onChange={(event) => {
                setDrafts((current) => ({ ...current, [student.studentId]: event.target.value }));
                setSaveState({ state: "dirty", message: "저장 전 변경" });
              }}
              placeholder="예: 함수 단원 오답 정리, 경우의 수 추가 보충"
              rows={3}
              value={drafts[student.studentId] ?? ""}
            />
          </label>
        ))}
      </div>
      <div className="examPrepLessonContentFooter">
        <span>변경한 학생의 내용만 저장합니다.</span>
        <button className="primaryButton" disabled={!saveItems.length || saveState.state === "saving"} onClick={save} type="button">
          {saveState.state === "saving" ? "저장 확인 중" : `학생별 진행 내용 저장${saveItems.length ? ` (${saveItems.length}명)` : ""}`}
        </button>
      </div>
      {saveState.message ? <p className={`inlineNotice ${saveState.state === "failed" ? "danger" : ""}`} role="status">{saveState.message}</p> : null}
    </div>
  );
}
