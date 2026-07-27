import React from "react";

export function LessonModalClosurePanel({
  blockingNotificationJobCount,
  closureMakeupDate,
  closureMakeupEnabled,
  closureMakeupEndTime,
  closureMakeupStartTime,
  closureRecordCount,
  initialStudentCount,
  isClosureConversion,
  isFormLocked,
  isPersistedClosure,
  onClosureMakeupDateChange,
  onClosureMakeupEnabledChange,
  onClosureMakeupEndTimeChange,
  onClosureMakeupStartTimeChange
}) {
  return (
    <div className="modalSection lessonModalSection closureMakeupPanel">
      <div>
        <strong>휴강 보충이 있나요?</strong>
        <p className="muted">휴강은 수업일지에 남지만 실제 수업 횟수와 급여 정산에는 포함되지 않습니다.</p>
        {isClosureConversion ? (
          <div className="closureMakeupEditNotice">
            <strong>날짜와 관계없이 상황에 따라 휴강으로 전환할 수 있습니다.</strong>
            <span>기존 명단 {initialStudentCount}명·수업기록 {closureRecordCount}건·특강 회차 연결은 삭제하지 않고 보존합니다.</span>
            <span>보존된 출결은 학생 출결 통계와 결석보강 후보에서 제외되고, 저장 직전 Supabase 최신 상태를 다시 확인합니다.</span>
            {blockingNotificationJobCount ? (
              <span className="warningText">현재 화면 기준 확인 필요한 알림 {blockingNotificationJobCount}건 · 수업일지의 예약 확인에서 정리 후 저장</span>
            ) : (
              <span>현재 화면 기준 발송 가능한 예약 없음 · 저장할 때 서버에서 다시 확인</span>
            )}
          </div>
        ) : null}
      </div>
      {isPersistedClosure ? (
        <div className="closureMakeupEditNotice">
          기존 휴강을 수정할 때는 연결 보충을 중복 생성하지 않습니다. 새 보충이 필요하면 수업 등록에서 보강을 별도로 추가해 주세요.
        </div>
      ) : (
        <>
          <div className="closureMakeupChoices" role="group" aria-label="휴강 보충 생성 여부">
            <button
              className={!closureMakeupEnabled ? "active" : ""}
              disabled={isFormLocked}
              onClick={() => onClosureMakeupEnabledChange(false)}
              type="button"
            >
              보충 없음
            </button>
            <button
              className={closureMakeupEnabled ? "active" : ""}
              disabled={isFormLocked}
              onClick={() => onClosureMakeupEnabledChange(true)}
              type="button"
            >
              보충 수업일지 함께 생성
            </button>
          </div>
          {closureMakeupEnabled ? (
            <div className="fieldGrid three closureMakeupFields">
              <label>
                보충 날짜
                <input
                  disabled={isFormLocked}
                  type="date"
                  value={closureMakeupDate}
                  onChange={(event) => onClosureMakeupDateChange(event.target.value)}
                />
              </label>
              <label>
                보충 시작
                <input
                  disabled={isFormLocked}
                  type="time"
                  value={closureMakeupStartTime}
                  onChange={(event) => onClosureMakeupStartTimeChange(event.target.value)}
                />
              </label>
              <label>
                보충 종료
                <input
                  disabled={isFormLocked}
                  type="time"
                  value={closureMakeupEndTime}
                  onChange={(event) => onClosureMakeupEndTimeChange(event.target.value)}
                />
              </label>
            </div>
          ) : null}
          <small>알림톡·문자는 자동 발송하거나 예약하지 않습니다.</small>
        </>
      )}
    </div>
  );
}
