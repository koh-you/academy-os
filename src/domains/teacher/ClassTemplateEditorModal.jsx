import { useState } from "react";
import { Modal } from "../../shared/components/Modal.jsx";
import "./classTemplateEditorModal.css";

// 반 개설·수정 모달. 반관리 화면에서 연다.
//
// 2026-09-16 까지 반은 DB 에 손으로 넣은 4개뿐이라 협력 교사 tenant 는 반이 0개로
// 시작했고, 학생을 배정할 곳이 없었다. 저장은 부모(App)가 POST /api/classes 로 한다.

export const classTemplateDayOptions = Object.freeze([
  ["mon", "월"], ["tue", "화"], ["wed", "수"], ["thu", "목"], ["fri", "금"], ["sat", "토"], ["sun", "일"]
]);

export const classTemplateColorOptions = Object.freeze([
  "#c7d2fe", "#bfdbfe", "#a7f3d0", "#fde68a", "#fecaca", "#fbcfe8", "#ddd6fe", "#e5e7eb"
]);

function createDraft(template) {
  return {
    classTemplateId: template?.classTemplateId ?? "",
    name: template?.name ?? "",
    days: Array.isArray(template?.days) ? [...template.days] : [],
    startTime: template?.startTime ?? "19:00",
    endTime: template?.endTime ?? "22:00",
    color: template?.color ?? classTemplateColorOptions[0]
  };
}

export function ClassTemplateEditorModal({ template = null, onClose, onSave }) {
  const [draft, setDraft] = useState(() => createDraft(template));
  const [saveState, setSaveState] = useState("idle");
  const [saveError, setSaveError] = useState("");
  const isEdit = Boolean(template?.classTemplateId);
  const isSaving = saveState === "saving";

  function updateDraft(patch) {
    setDraft((current) => ({ ...current, ...patch }));
  }

  function toggleDay(dayKey) {
    setDraft((current) => ({
      ...current,
      days: current.days.includes(dayKey) ? current.days.filter((day) => day !== dayKey) : [...current.days, dayKey]
    }));
  }

  async function handleSave() {
    setSaveError("");
    setSaveState("saving");
    try {
      await onSave(draft);
      setSaveState("saved");
      onClose();
    } catch (error) {
      console.error(error);
      setSaveError(error.message || "반 저장에 실패했습니다.");
      setSaveState("failed");
    }
  }

  return (
    <Modal
      className="classTemplateEditorModal"
      closeDisabled={isSaving}
      onClose={() => {
        if (!isSaving) onClose();
      }}
      subtitle="요일과 시간은 이 반의 정규 수업 기본값입니다. 학생 배정은 저장 후 명단 수정에서 합니다."
      title={isEdit ? `${template.name} 반 수정` : "반 개설"}
    >
      <div className="fieldGrid two lessonModalFields">
        <label>
          반 이름
          <input
            autoFocus
            disabled={isSaving}
            onChange={(event) => updateDraft({ name: event.target.value })}
            placeholder="예: 화목 5-7반"
            value={draft.name}
          />
        </label>
        <label>
          시작
          <input disabled={isSaving} onChange={(event) => updateDraft({ startTime: event.target.value })} type="time" value={draft.startTime} />
        </label>
        <label>
          종료
          <input disabled={isSaving} onChange={(event) => updateDraft({ endTime: event.target.value })} type="time" value={draft.endTime} />
        </label>
      </div>
      <div className="modalSection lessonModalSection">
        <label>수업 요일</label>
        <div className="typeTabs classTemplateDayTabs" role="group" aria-label="수업 요일 선택">
          {classTemplateDayOptions.map(([dayKey, label]) => (
            <button
              aria-pressed={draft.days.includes(dayKey)}
              className={draft.days.includes(dayKey) ? "active" : ""}
              disabled={isSaving}
              key={dayKey}
              onClick={() => toggleDay(dayKey)}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="modalSection lessonModalSection">
        <label>달력 색상</label>
        <div className="lessonColorPalette">
          {classTemplateColorOptions.map((color) => (
            <button
              aria-label={`${color} 색상`}
              className={draft.color.toLowerCase() === color ? "active" : ""}
              disabled={isSaving}
              key={color}
              onClick={() => updateDraft({ color })}
              style={{ background: color }}
              type="button"
            />
          ))}
        </div>
      </div>
      {saveState === "failed" ? <p className="errorText" role="alert">{saveError}</p> : null}
      <div className="deleteConfirmActions">
        <button className="softButton" disabled={isSaving} onClick={onClose} type="button">취소</button>
        <button className="primaryButton" disabled={isSaving} onClick={handleSave} type="button">
          {isSaving ? "저장 중" : saveState === "failed" ? "다시 저장" : isEdit ? "반 저장" : "반 개설"}
        </button>
      </div>
    </Modal>
  );
}
