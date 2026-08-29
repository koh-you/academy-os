import React from "react";

export function LessonModalClosureMakeupPanel({
  includeStudentReminder,
  isFormLocked,
  notificationAudiences,
  notificationEnabled,
  onIncludeStudentReminderChange,
  onNotificationAudienceChange,
  onNotificationEnabledChange,
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
    <div className="modalSection lessonModalSection lessonModalNewStudentMakeupPanel">
      <strong>별도 휴강 보충 등록</strong>
      <p className="muted">반 명단에서 이번 시간에 참석할 학생만 선택합니다. 한 수업에 선택한 학생 전체의 안내를 일괄 예약할 수 있습니다.</p>
      <label className="checkRow">
        <input checked={notificationEnabled} disabled={isFormLocked} onChange={(event) => onNotificationEnabledChange(event.target.checked)} type="checkbox" />
        휴강 보충 알림 예약
      </label>
      {notificationEnabled ? (
        <div className="lessonModalNotificationAudience">
          <span className="muted">대상 학생 {selectedStudentCount}명 · 다음 정각 일정 안내</span>
          <label className="checkRow"><input checked={notificationAudiences.includes("parent")} disabled={isFormLocked} onChange={() => toggleAudience("parent")} type="checkbox" />학부모</label>
          <label className="checkRow"><input checked={notificationAudiences.includes("student")} disabled={isFormLocked} onChange={() => toggleAudience("student")} type="checkbox" />학생</label>
          <label className="checkRow"><input checked={includeStudentReminder} disabled={isFormLocked} onChange={(event) => onIncludeStudentReminderChange(event.target.checked)} type="checkbox" />보충 당일 오전 11시 학생 알림</label>
          <small className="muted">수업 저장과 서버 재확인이 끝난 뒤 예약합니다. 같은 수업·학생·대상은 다시 저장해도 중복 생성하지 않습니다.</small>
        </div>
      ) : <small className="muted">수업만 저장하며 알림톡은 만들지 않습니다.</small>}
    </div>
  );
}
