export function SupplementNotificationDraftWorkspace({
  configs,
  hasUnsavedChanges,
  isBusy,
  onChangeDraft,
  onOpenControl,
  onSave,
  shouldLinkStudentDraft
}) {
  return (
    <section className="supplementNotificationDraftWorkspace">
      <div className="supplementNotificationDraftHeader">
        <div>
          <strong>알림톡 문구 편집</strong>
          <span>학생·학부모·당일 학생 문구 3종을 한 화면에서 확인하고 저장합니다.</span>
        </div>
        <small>{shouldLinkStudentDraft ? "학생 문구 수정 시 3종에 연동되고 최종본으로 고정됩니다." : "각 수정본은 서로 덮어쓰지 않습니다."}</small>
      </div>
      <div className="supplementNotificationDraftEditors">
        {configs.map((config) => (
          <label className="notificationDraftField supplementReadableField" key={config.field}>
            <span className="supplementNotificationDraftEditorTitle">
              <strong>{config.label} 문구</strong>
              <span className={`supplementNotificationControlState ${config.display.tone}`}>
                <i aria-hidden="true" />
                {config.display.label}
              </span>
            </span>
            <span>
              {config.controlType === "studentReminder"
                ? "보강 당일 오전 11시에 학생에게 예약할 문구입니다."
                : `${config.label}으로 다음 정각에 예약할 일정 안내 문구입니다.`}
            </span>
            {config.isTeacherFinal ? (
              <small className="supplementTeacherFinalNotice">선생님 수정본 · 자동 초안이 다시 덮어쓰지 않습니다.</small>
            ) : (
              <small className="supplementNotificationAutoDraftNotice">자동 초안 · 수정하면 선생님 최종본으로 저장됩니다.</small>
            )}
            <textarea value={config.draft} onChange={(event) => onChangeDraft(config.field, event.target.value)} />
          </label>
        ))}
      </div>
      <div className="supplementNotificationDraftActions">
        <button
          className="softButton"
          disabled={isBusy || !hasUnsavedChanges}
          onClick={onSave}
          type="button"
        >
          {isBusy ? "저장 중" : "알림톡 3종 일괄 저장"}
        </button>
        <button
          className="softButton"
          disabled={isBusy || hasUnsavedChanges}
          onClick={onOpenControl}
          type="button"
        >
          {hasUnsavedChanges ? "수정본 저장 후 확인" : "Solapi 예약·취소 3종 확인"}
        </button>
      </div>
    </section>
  );
}
