import { getSupplementSaveStatusLabel } from "./supplementStatus.js";

function SupplementSaveStatusPill({ label, status }) {
  const state = status || "idle";
  return (
    <span className={`supplementSaveStatusPill ${state}`}>
      <b>{label}</b>
      {getSupplementSaveStatusLabel(state)}
    </span>
  );
}

export function SupplementTaskSaveSummary({ draftDiff, lessonStatus, makeupStatus, notificationStatus }) {
  return (
    <>
      {draftDiff.length ? (
        <div className="supplementDraftDiff" data-state="dirty">
          <strong>저장하면 바뀌는 내용</strong>
          <ul>
            {draftDiff.map((item) => (
              <li key={item.field}>
                <b>{item.label}</b>
                <span>{item.before}</span>
                <em>→</em>
                <span>{item.after}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="supplementSaveStatusGrid">
        <SupplementSaveStatusPill label="보충 내용" status={makeupStatus} />
        <SupplementSaveStatusPill label="수업일지 일정" status={lessonStatus} />
        <SupplementSaveStatusPill label="알림톡 문구 3종" status={notificationStatus} />
      </div>
    </>
  );
}

export function SupplementTaskScheduleGateNote({ body, isScheduleChangeMode, title }) {
  return (
    <div className={`supplementSendGateNote ${isScheduleChangeMode ? "changeNotice" : "confirmNotice"}`}>
      <strong>{title}</strong>
      <span>보충 내용 저장: 원 숙제 카드와 알림톡 문구 3종을 저장하고, 발송/예약은 만들지 않습니다.</span>
      <span>{isScheduleChangeMode ? "수업일지 일정 변경" : "수업일지 일정 만들기"}: {body}</span>
    </div>
  );
}
