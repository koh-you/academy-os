import { useMemo, useState } from "react";
import { Modal } from "../../shared/components/Modal.jsx";
import { createExamPrepScheduleGroups, createExamPrepScheduleSavePlan } from "./examPrepSchedulePlan.js";

const modes = [
  { id: "class", label: "반별" },
  { id: "school", label: "학교별" },
  { id: "student", label: "학생별" }
];

export function ExamPrepScheduleModal({ lessons, onClose, onSave, persistedLessons, sourceLesson, students, templates }) {
  const [mode, setMode] = useState("school");
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [startTime, setStartTime] = useState(sourceLesson.startTime || "13:00");
  const [endTime, setEndTime] = useState(sourceLesson.endTime || "18:00");
  const [saveState, setSaveState] = useState({ state: "idle", message: "" });
  const groups = useMemo(
    () => createExamPrepScheduleGroups({ lesson: sourceLesson, mode, students, templates }),
    [mode, sourceLesson, students, templates]
  );
  const preview = useMemo(() => {
    try {
      return createExamPrepScheduleSavePlan({ lessons, mode, persistedLessons, selectedKeys, sourceLesson, startTime, endTime, students });
    } catch (error) {
      return { changes: [], targetStudentIds: [], error: error.message };
    }
  }, [endTime, lessons, mode, persistedLessons, selectedKeys, sourceLesson, startTime, students]);

  function changeMode(nextMode) {
    setMode(nextMode);
    setSelectedKeys([]);
    setSaveState({ state: "idle", message: "" });
  }

  function toggleKey(key) {
    setSelectedKeys((current) => current.includes(key) ? current.filter((item) => item !== key) : [...current, key]);
    setSaveState({ state: "dirty", message: "저장 전 변경" });
  }

  async function handleSave() {
    if (preview.error || !preview.changes.length) {
      setSaveState({ state: "failed", message: preview.error || "변경할 시험대비 일정이 없습니다." });
      return;
    }
    setSaveState({ state: "saving", message: "Supabase 저장·재조회 확인 중" });
    try {
      await onSave(preview);
      setSaveState({ state: "saved", message: "저장 완료 · 서버 재조회 일치" });
      onClose();
    } catch (error) {
      setSaveState({ state: "failed", message: error.message || "시험대비 일정 저장에 실패했습니다." });
    }
  }

  return (
    <Modal className="examPrepScheduleEditModal" title="시험대비 일정 수정" subtitle={`${sourceLesson.date}부터 이후 시험대비에 적용합니다.`} onClose={onClose}>
      <div className="examPrepScheduleEditor">
        <div className="examPrepScheduleMode" role="tablist" aria-label="일정 대상 선택 방식">
          {modes.map((item) => (
            <button aria-selected={mode === item.id} className={mode === item.id ? "active" : ""} key={item.id} onClick={() => changeMode(item.id)} role="tab" type="button">{item.label}</button>
          ))}
        </div>
        <p className="examPrepScheduleRule"><strong>{sourceLesson.date}부터</strong> 선택 학생의 시험대비 마지막 일정까지 같은 시간을 적용합니다. 이전 날짜는 유지됩니다.</p>
        <div className="examPrepScheduleGroupList">
          {groups.map((group) => (
            <label className={selectedKeys.includes(group.key) ? "selected" : ""} key={group.key}>
              <input checked={selectedKeys.includes(group.key)} onChange={() => toggleKey(group.key)} type="checkbox" />
              <span><strong>{group.label}</strong><small>{group.studentIds.length}명</small></span>
            </label>
          ))}
        </div>
        <div className="examPrepScheduleTimes">
          <label>시작 시간<input onChange={(event) => setStartTime(event.target.value)} type="time" value={startTime} /></label>
          <label>종료 시간<input onChange={(event) => setEndTime(event.target.value)} type="time" value={endTime} /></label>
        </div>
        <div className="examPrepSchedulePreview" aria-live="polite">
          {preview.error ? preview.error : `${preview.targetStudentIds.length}명 · ${preview.changes.length}개 일정에 적용`}
        </div>
        {saveState.message ? <p className={`inlineNotice ${saveState.state === "failed" ? "danger" : ""}`}>{saveState.message}</p> : null}
        <div className="modalFooter">
          <button className="softButton" disabled={saveState.state === "saving"} onClick={onClose} type="button">닫기</button>
          <button className="primaryButton" disabled={saveState.state === "saving" || Boolean(preview.error)} onClick={handleSave} type="button">{saveState.state === "saving" ? "저장 확인 중" : "이후 일정에 저장"}</button>
        </div>
      </div>
    </Modal>
  );
}
