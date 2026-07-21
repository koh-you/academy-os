export function SupplementTaskScheduleEditor({ methodOptions, onChange, scheduledDate, scheduledTime, selectedMethod, showMethodOptions }) {
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
          <input type="time" value={scheduledTime} onChange={(event) => onChange("scheduledTime", event.target.value)} />
        </label>
      </div>
    </div>
  );
}
