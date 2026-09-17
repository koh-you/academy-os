import { useState } from "react";
import { Modal } from "../../shared/components/Modal.jsx";
import {
  CLASS_DAY_KEYS,
  CLASS_DAY_LABELS,
  getClassTemplateScheduleRules
} from "../../shared/utils/classTemplateSchedule.js";
import "./classTemplateEditorModal.css";

// 반 개설·수정 모달. 반관리 화면에서 연다.
//
// 2026-09-16 까지 반은 DB 에 손으로 넣은 4개뿐이라 협력 교사 tenant 는 반이 0개로
// 시작했고, 학생을 배정할 곳이 없었다. 저장은 부모(App)가 POST /api/classes 로 한다.
//
// 시간표는 "요일 묶음 → 시간" 줄을 여러 개 둘 수 있다(2026-09-17). "화목 4-7 / 토 11-14"
// 처럼 요일마다 시간이 다른 반을 어느 tenant 든 만들 수 있다. 한 줄이면 예전과 같다.

export const classTemplateDayOptions = Object.freeze(CLASS_DAY_KEYS.map((dayKey) => [dayKey, CLASS_DAY_LABELS[dayKey]]));

export const classTemplateColorOptions = Object.freeze([
  "#c7d2fe", "#bfdbfe", "#a7f3d0", "#fde68a", "#fecaca", "#fbcfe8", "#ddd6fe", "#e5e7eb"
]);

function createEmptyRule() {
  return { days: [], startTime: "19:00", endTime: "22:00" };
}

function createDraft(template) {
  const rules = template ? getClassTemplateScheduleRules(template) : [];
  return {
    classTemplateId: template?.classTemplateId ?? "",
    name: template?.name ?? "",
    scheduleRules: rules.length > 0 ? rules.map((rule) => ({ ...rule, days: [...rule.days] })) : [createEmptyRule()],
    color: template?.color ?? classTemplateColorOptions[0]
  };
}

export function ClassTemplateEditorModal({ template = null, onClose, onSave }) {
  const [draft, setDraft] = useState(() => createDraft(template));
  const [saveState, setSaveState] = useState("idle");
  const [saveError, setSaveError] = useState("");
  const isEdit = Boolean(template?.classTemplateId);
  const isSaving = saveState === "saving";
  // 다른 줄에 이미 들어간 요일은 이 줄에서 고를 수 없다 — 한 요일은 한 시간표에만.
  const dayOwnerByKey = new Map(draft.scheduleRules.flatMap((rule, index) => rule.days.map((day) => [day, index])));

  function updateDraft(patch) {
    setDraft((current) => ({ ...current, ...patch }));
  }

  function updateRule(index, patch) {
    setDraft((current) => ({
      ...current,
      scheduleRules: current.scheduleRules.map((rule, ruleIndex) => (ruleIndex === index ? { ...rule, ...patch } : rule))
    }));
  }

  function toggleRuleDay(index, dayKey) {
    setDraft((current) => ({
      ...current,
      scheduleRules: current.scheduleRules.map((rule, ruleIndex) => {
        if (ruleIndex !== index) return rule;
        const days = rule.days.includes(dayKey) ? rule.days.filter((day) => day !== dayKey) : [...rule.days, dayKey];
        return { ...rule, days: CLASS_DAY_KEYS.filter((day) => days.includes(day)) };
      })
    }));
  }

  function addRule() {
    setDraft((current) => ({ ...current, scheduleRules: [...current.scheduleRules, createEmptyRule()] }));
  }

  function removeRule(index) {
    setDraft((current) => ({
      ...current,
      scheduleRules: current.scheduleRules.length > 1
        ? current.scheduleRules.filter((_, ruleIndex) => ruleIndex !== index)
        : current.scheduleRules
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
      subtitle="요일과 시간은 이 반의 정규 수업 기본값입니다. 요일마다 시간이 다르면 시간표를 줄로 나눠 적습니다. 학생 배정은 저장 후 명단 수정에서 합니다."
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
      </div>
      <div className="modalSection lessonModalSection">
        <label>시간표</label>
        {draft.scheduleRules.map((rule, index) => (
          <div aria-label={`${index + 1}번째 시간표`} className="classTemplateScheduleRule" key={index} role="group">
            <div aria-label={`${index + 1}번째 시간표 요일`} className="typeTabs classTemplateDayTabs" role="group">
              {classTemplateDayOptions.map(([dayKey, label]) => {
                const owner = dayOwnerByKey.get(dayKey);
                const isTakenElsewhere = owner !== undefined && owner !== index;
                return (
                  <button
                    aria-pressed={rule.days.includes(dayKey)}
                    className={rule.days.includes(dayKey) ? "active" : ""}
                    disabled={isSaving || isTakenElsewhere}
                    key={dayKey}
                    onClick={() => toggleRuleDay(index, dayKey)}
                    title={isTakenElsewhere ? `${label}요일은 ${owner + 1}번째 시간표에 있습니다.` : undefined}
                    type="button"
                  >
                    {label}
                  </button>
                );
              })}
            </div>
            <div className="classTemplateScheduleRuleTimes">
              <label>
                시작
                <input disabled={isSaving} onChange={(event) => updateRule(index, { startTime: event.target.value })} type="time" value={rule.startTime} />
              </label>
              <label>
                종료
                <input disabled={isSaving} onChange={(event) => updateRule(index, { endTime: event.target.value })} type="time" value={rule.endTime} />
              </label>
              <button
                aria-label={`${index + 1}번째 시간표 삭제`}
                className="ghostButton dangerText compact"
                disabled={isSaving || draft.scheduleRules.length === 1}
                onClick={() => removeRule(index)}
                type="button"
              >
                줄 삭제
              </button>
            </div>
          </div>
        ))}
        <button className="softButton compact" disabled={isSaving} onClick={addRule} type="button">
          + 시간이 다른 요일 추가
        </button>
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
