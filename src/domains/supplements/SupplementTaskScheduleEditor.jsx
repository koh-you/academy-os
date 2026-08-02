import {
  splitSupplementTime,
  supplementHourOptions,
  supplementMinuteOptions,
  updateSupplementTimePart
} from "./supplementTimeInputModel.js";

export function SupplementTaskScheduleEditor({ methodOptions, onChange, scheduledDate, scheduledTime, selectedMethod, showMethodOptions }) {
  const { hour, minute } = splitSupplementTime(scheduledTime);
  const minuteOptions = supplementMinuteOptions.includes(minute)
    ? supplementMinuteOptions
    : [minute, ...supplementMinuteOptions].sort();

  return (
    <div className="supplementSchedulePanel">
      {showMethodOptions ? (
        <label className="taskOptionBlock">
          <strong>보충을 어떻게 처리할까요?</strong>
          <div className="taskChoiceGrid">
            {methodOptions.map((option) => (
              <button
                className={selectedMethod === option.id ? "active" : ""}
                key={option.id}
                onClick={() => onChange("supplementMethod", option.id)}
                type="button"
              >
                {option.label}
              </button>
            ))}
          </div>
        </label>
      ) : null}
      <div className="fieldGrid two supplementDateGrid">
        <label>
          <strong>배정일</strong>
          <input type="date" value={scheduledDate} onChange={(event) => onChange("scheduledDate", event.target.value)} />
        </label>
        <label>
          <strong>시간</strong>
          <span className="supplementTimeSelects">
            <select
              aria-label="보충 시간 시"
              onChange={(event) => onChange("scheduledTime", updateSupplementTimePart(scheduledTime, "hour", event.target.value))}
              value={hour}
            >
              <option value="">시 선택</option>
              {supplementHourOptions.map((option) => <option key={option} value={option}>{option}시</option>)}
            </select>
            <select
              aria-label="보충 시간 분"
              disabled={!hour}
              onChange={(event) => onChange("scheduledTime", updateSupplementTimePart(scheduledTime, "minute", event.target.value))}
              value={minute}
            >
              {minuteOptions.map((option) => <option key={option} value={option}>{option}분</option>)}
            </select>
          </span>
          <small>시를 고르면 분은 00분으로 시작합니다.</small>
        </label>
      </div>
    </div>
  );
}
