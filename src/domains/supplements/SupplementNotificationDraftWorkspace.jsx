export function SupplementNotificationDraftWorkspace({
  activeConfig,
  activeDisplay,
  activeDraft,
  activeField,
  configs,
  hasUnsavedChanges,
  isBusy,
  isTeacherFinal,
  onChangeDraft,
  onOpenControl,
  onSelectField
}) {
  return (
    <section className="supplementNotificationDraftWorkspace">
      <div className="supplementNotificationDraftHeader">
        <div>
          <strong>알림톡 문구 편집</strong>
          <span>버튼을 순서대로 눌러 학생·학부모·당일 학생 문구를 각각 확인하고 수정합니다.</span>
        </div>
        <small>각 수정본은 서로 덮어쓰지 않습니다.</small>
      </div>
      <div className="supplementNotificationDraftTabs" role="tablist" aria-label="보충 알림톡 문구 선택">
        {configs.map((config) => (
          <button
            aria-selected={activeField === config.field}
            className={`supplementNotificationDraftTab ${config.display.tone} ${activeField === config.field ? "active" : ""}`}
            key={config.field}
            onClick={() => onSelectField(config.field)}
            role="tab"
            type="button"
          >
            <span className="supplementNotificationControlLight" aria-hidden="true" />
            <b>{config.label}</b>
            <span>{config.display.label}</span>
          </button>
        ))}
      </div>
      <label className="notificationDraftField supplementReadableField">
        <strong>{activeConfig.label} 문구</strong>
        <span>
          {activeConfig.controlType === "studentReminder"
            ? "보강 당일 오전 11시에 학생에게 예약할 문구입니다."
            : `${activeConfig.label} 버튼으로 다음 정각에 예약할 일정 안내 문구입니다.`}
        </span>
        {isTeacherFinal ? (
          <small className="supplementTeacherFinalNotice">선생님 수정본 · 자동 초안이 다시 덮어쓰지 않습니다.</small>
        ) : (
          <small className="supplementNotificationAutoDraftNotice">자동 초안 · 수정하면 선생님 최종본으로 저장됩니다.</small>
        )}
        <textarea value={activeDraft} onChange={(event) => onChangeDraft(event.target.value)} />
      </label>
      <div className="supplementNotificationDraftActions">
        <span className={`supplementNotificationControlState ${activeDisplay.tone}`}>
          <i aria-hidden="true" />
          {activeDisplay.label}
        </span>
        <button
          className="softButton"
          disabled={isBusy || hasUnsavedChanges}
          onClick={() => onOpenControl(activeConfig.controlType)}
          type="button"
        >
          {hasUnsavedChanges ? "수정본 저장 후 예약 확인" : "Solapi 예약·취소 확인"}
        </button>
      </div>
    </section>
  );
}
