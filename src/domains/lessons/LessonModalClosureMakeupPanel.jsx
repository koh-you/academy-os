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
  notificationAudiences,
  onClose,
  onConfirm,
  onIncludeStudentReminderChange,
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
  return (
    <Modal className="supplementNotificationControlModal" onClose={isSaving ? () => {} : onClose} title="휴강 보충 알림 관리">
      <p className="muted">선택 학생 {selectedStudentCount}명의 수업을 먼저 저장·재확인한 뒤 알림을 예약합니다.</p>
      <div className="lessonModalNotificationAudience">
        <strong>다음 정각 일정 안내</strong>
        <label className="checkRow"><input checked={notificationAudiences.includes("parent")} disabled={isSaving} onChange={() => toggleAudience("parent")} type="checkbox" />학부모</label>
        <label className="checkRow"><input checked={notificationAudiences.includes("student")} disabled={isSaving} onChange={() => toggleAudience("student")} type="checkbox" />학생</label>
        <label className="checkRow"><input checked={includeStudentReminder} disabled={isSaving} onChange={(event) => onIncludeStudentReminderChange(event.target.checked)} type="checkbox" />보충 당일 오전 11시 학생 알림</label>
      </div>
      <small className="muted">같은 수업·학생·대상은 다시 시도해도 중복 생성하지 않습니다.</small>
      <ModalFooter>
        <button className="primaryButton" disabled={isSaving || notificationAudiences.length === 0} onClick={onConfirm} type="button">
          {isSaving ? "저장·예약 중" : "일정 저장 후 알림 예약"}
        </button>
        <button className="softButton" disabled={isSaving} onClick={onClose} type="button">취소</button>
      </ModalFooter>
    </Modal>
  );
}
