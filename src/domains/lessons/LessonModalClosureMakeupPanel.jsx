import React from "react";
import { Modal, ModalFooter } from "../../shared/components/Modal.jsx";

export function LessonModalClosureMakeupPanel({
  isFormLocked,
  onOpenNotificationModal,
  selectedStudentCount
}) {
  return (
    <div className="modalSection lessonModalSection lessonModalNewStudentMakeupPanel">
      <strong>별도 휴강 보충 등록</strong>
      <p className="muted">반 명단에서 이번 시간에 참석할 학생만 선택합니다. 한 수업에 선택한 학생 전체의 안내를 일괄 예약할 수 있습니다.</p>
      <button className="softButton" disabled={isFormLocked || selectedStudentCount === 0} onClick={onOpenNotificationModal} type="button">
        휴강 보충 알림 관리
      </button>
      <small className="muted">대상 학생 {selectedStudentCount}명 · 버튼을 누르면 별도 알림관리 모달에서 수신 대상과 당일 알림을 확인합니다.</small>
    </div>
  );
}

export function LessonModalClosureMakeupNotificationModal({
  includeStudentReminder,
  isSaving,
  notificationDrafts,
  notificationAudiences,
  onClose,
  onConfirm,
  onIncludeStudentReminderChange,
  onNotificationDraftChange,
  onNotificationAudienceChange,
  selectedStudentCount
}) {
  function toggleAudience(audience) {
    onNotificationAudienceChange(
      notificationAudiences.includes(audience)
        ? notificationAudiences.filter((item) => item !== audience)
        : [...notificationAudiences, audience]
    );
  }
  const draftConfigs = [
    {
      checked: notificationAudiences.includes("student"),
      description: "학생에게 다음 정각에 예약할 일정 안내 문구입니다.",
      field: "studentScheduleNotificationDraft",
      label: "학생 알림톡",
      onToggle: () => toggleAudience("student")
    },
    {
      checked: notificationAudiences.includes("parent"),
      description: "학부모에게 다음 정각에 예약할 일정 안내 문구입니다.",
      field: "parentScheduleNotificationDraft",
      label: "학부모 알림톡",
      onToggle: () => toggleAudience("parent")
    },
    {
      checked: includeStudentReminder,
      description: "보충 당일 오전 11시에 학생에게 예약할 문구입니다.",
      field: "studentReminderNotificationDraft",
      label: "당일 학생 11시 알림톡",
      onToggle: () => onIncludeStudentReminderChange(!includeStudentReminder)
    }
  ];
  const enabledDraftsHaveText = draftConfigs.every((config) => (
    !config.checked || String(notificationDrafts?.[config.field] || "").trim()
  ));
  return (
    <Modal className="supplementNotificationControlModal wide closureMakeupNotificationModal" onClose={isSaving ? () => {} : onClose} scrollable title="휴강 보충 알림 관리">
      <p className="muted">선택 학생 {selectedStudentCount}명의 수업을 먼저 저장·재확인한 뒤 알림을 예약합니다.</p>
      <section className="supplementNotificationDraftWorkspace">
        <div className="supplementNotificationDraftHeader">
          <div>
            <strong>알림톡 문구 편집</strong>
            <span>학생·학부모·당일 학생 문구 3종을 한 화면에서 확인하고 수정합니다.</span>
          </div>
          <small><code>{"{{학생명}}"}</code>은 선택한 각 학생 이름으로 자동 치환됩니다.</small>
        </div>
        <div className="supplementNotificationDraftEditors">
          {draftConfigs.map((config) => (
            <label className="notificationDraftField supplementReadableField" key={config.field}>
              <span className="supplementNotificationDraftEditorTitle">
                <strong>{config.label} 문구</strong>
                <span className={`supplementNotificationControlState ${config.checked ? "on" : "off"}`}>
                  <input aria-label={`${config.label} 예약`} checked={config.checked} disabled={isSaving} onChange={config.onToggle} type="checkbox" />
                  {config.checked ? "예약" : "예약 없음"}
                </span>
              </span>
              <span>{config.description}</span>
              <small className="supplementTeacherFinalNotice">수정한 문구 그대로 학생별 예약에 사용됩니다.</small>
              <textarea
                aria-label={`${config.label} 문구`}
                disabled={isSaving || !config.checked}
                onChange={(event) => onNotificationDraftChange(config.field, event.target.value)}
                value={notificationDrafts?.[config.field] || ""}
              />
            </label>
          ))}
        </div>
      </section>
      <div className="supplementNotificationSaveGuide saved">
        <strong>수업 저장·재확인 후 예약</strong>
        <span>선택한 문구만 예약하며 같은 수업·학생·대상은 다시 시도해도 중복 생성하지 않습니다.</span>
      </div>
      <ModalFooter>
        <button className="primaryButton" disabled={isSaving || (notificationAudiences.length === 0 && !includeStudentReminder) || !enabledDraftsHaveText} onClick={onConfirm} type="button">
          {isSaving ? "저장·예약 중" : "일정 저장 후 알림 예약"}
        </button>
        <button className="softButton" disabled={isSaving} onClick={onClose} type="button">취소</button>
      </ModalFooter>
    </Modal>
  );
}
