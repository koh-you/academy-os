import { useEffect, useMemo, useState } from "react";
import { HelpTip } from "../../shared/components/HelpTip.jsx";
import {
  createExamPrepStudentContentDrafts,
  createExamPrepStudentContentSaveItems,
  examPrepStudentContentFields,
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
        verifyFields: item.changedFields
      });
      if (!saved) {
        setSaveState({ state: "failed", message: `${item.student.name} 기록 저장에 실패했습니다. 입력은 유지됩니다.` });
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
        <div className="helpTipTitleRow">
          <strong>학생별 기록 · 알림톡</strong>
          <HelpTip
            label="학생별 기록 · 알림톡"
            text="수업일지와 같은 칸입니다. 강의 내용은 알림톡의 🧭 강의 내용, 코멘트는 💬 코멘트로 그대로 나갑니다. 학부모 코멘트와 학생 코멘트는 받는 사람이 다릅니다. 여기서 저장해도 알림톡이 나가지는 않습니다 — 예약은 위 알림톡 줄에서 따로 누릅니다."
          />
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
          <div className="examPrepStudentContentRow" key={student.studentId}>
            <span className="examPrepStudentContentIdentity">
              <strong>{student.name}</strong>
              <small>{student.schoolName} · {student.timeLabel}</small>
            </span>
            <div className="examPrepStudentContentFields">
              {examPrepStudentContentFields.map((entry) => {
                const fieldId = `exam-prep-${entry.field}-${lesson.lessonId}-${student.studentId}`;
                return (
                  <label htmlFor={fieldId} key={entry.field}>
                    <span>{entry.ariaSuffix}</span>
                    <textarea
                      aria-label={`${student.name} ${entry.ariaSuffix}`}
                      id={fieldId}
                      maxLength={1000}
                      onChange={(event) => {
                        const value = event.target.value;
                        setDrafts((current) => ({
                          ...current,
                          [student.studentId]: { ...current[student.studentId], [entry.field]: value }
                        }));
                        setSaveState({ state: "dirty", message: "저장 전 변경" });
                      }}
                      rows={2}
                      value={drafts[student.studentId]?.[entry.field] ?? ""}
                    />
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="examPrepLessonContentFooter">
        <span>변경한 칸만 저장합니다. 저장은 알림톡을 보내지 않습니다.</span>
        <button className="primaryButton" disabled={!saveItems.length || saveState.state === "saving"} onClick={save} type="button">
          {saveState.state === "saving" ? "저장 확인 중" : `학생별 기록 저장${saveItems.length ? ` (${saveItems.length}명)` : ""}`}
        </button>
      </div>
      {saveState.message ? <p className={`inlineNotice ${saveState.state === "failed" ? "danger" : ""}`} role="status">{saveState.message}</p> : null}
    </div>
  );
}
