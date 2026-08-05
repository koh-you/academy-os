import React from "react";

export function LessonModalNewStudentMakeupPanel({
  isFormLocked,
  notificationAudiences,
  notificationEnabled,
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
      <strong>신입생 보강 등록</strong>
      <p className="muted">
        아래 명단에서 학생을 직접 선택합니다. 저장된 수업은 기존 8월 신입생 보강과 같은 보강 수업으로 표시됩니다.
      </p>
      <label className="checkRow">
        <input
          checked={notificationEnabled}
          disabled={isFormLocked}
          onChange={(event) => onNotificationEnabledChange(event.target.checked)}
          type="checkbox"
        />
        수업 저장 후 알림톡을 다음 정각에 예약
      </label>
      {notificationEnabled ? (
        <div className="lessonModalNotificationAudience">
          <span className="muted">대상 학생 {selectedStudentCount}명 · 받을 대상</span>
          <label className="checkRow">
            <input
              checked={notificationAudiences.includes("parent")}
              disabled={isFormLocked}
              onChange={() => toggleAudience("parent")}
              type="checkbox"
            />
            학부모
          </label>
          <label className="checkRow">
            <input
              checked={notificationAudiences.includes("student")}
              disabled={isFormLocked}
              onChange={() => toggleAudience("student")}
              type="checkbox"
            />
            학생
          </label>
          <small className="muted">
            수업 저장과 서버 재확인이 끝난 뒤에만 예약합니다. 같은 수업·학생·대상은 재시도해도 중복 생성하지 않습니다.
          </small>
        </div>
      ) : (
        <small className="muted">수업만 저장하며 알림톡은 만들지 않습니다.</small>
      )}
    </div>
  );
}
