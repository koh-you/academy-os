
export function LessonModalBasics({
  children,
  color,
  date,
  endTime,
  isEditingExistingLesson = false,
  isFormLocked,
  isLessonTypeChoiceDisabled,
  lessonColorOptions,
  lessonType,
  name,
  onColorOptionClick,
  onDateChange,
  onEndTimeChange,
  onLessonTypeChange,
  onNameChange,
  onStartTimeChange,
  startTime
}) {
  return (
    <>
      <div className="modalSection lessonModalSection">
        <label>수업 유형</label>
        <div className="typeTabs">
          {[
            ["class", "🏹 수업"],
            ["preExam", "📌 직전수업"],
            ["exam", "📝 평가"],
            ["makeup", "🔧 보강"],
            ["closureMakeup", "🔁 휴강 보충"],
            ["newStudentMakeup", "🌱 신입생 보강"],
            ["examPrep", "🗓 시험대비"],
            ["closure", "⏸ 휴강"]
          ].map(([value, label]) => (
            <button
              className={lessonType === value ? "active" : ""}
              disabled={isLessonTypeChoiceDisabled(value)}
              key={value}
              onClick={() => onLessonTypeChange(value)}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {children}

      <div className="modalSection lessonModalSection">
        <label>달력 색상</label>
        <div className="lessonColorPalette">
          {lessonColorOptions.map((item) => (
            <button
              aria-label={`${item.label} 색상 미리보기`}
              className={
                color.toLowerCase() === item.color.toLowerCase() ? "active" : ""
              }
              disabled={isLessonTypeChoiceDisabled(item.lessonType)}
              key={item.id}
              onClick={() => onColorOptionClick(item)}
              style={{ background: item.color }}
              type="button"
              title={item.label}
            />
          ))}
        </div>
      </div>

      <div className="fieldGrid two lessonModalFields">
        <label>
          수업명
          <input
            disabled={isFormLocked}
            value={name}
            onChange={(event) => onNameChange(event.target.value)}
            placeholder="예: 수학 특강"
          />
        </label>
        <label>
          날짜
          <input
            disabled={isFormLocked}
            type="date"
            value={date}
            onChange={(event) => onDateChange(event.target.value)}
          />
        </label>
        <label>
          시작
          <input
            disabled={isFormLocked}
            type="time"
            value={startTime}
            onChange={(event) => onStartTimeChange(event.target.value)}
          />
        </label>
        <label>
          종료
          <input
            disabled={isFormLocked}
            type="time"
            value={endTime}
            onChange={(event) => onEndTimeChange(event.target.value)}
          />
        </label>
      </div>
      {/* 2026-09-26(검증 반영) · 힌트를 실제 동작과 맞춘다.
          신규 등록은 시작을 바꿀 때마다 종료를 +3시간으로 다시 맞추고,
          기존 수업 편집은 사람이 정해 둔 종료를 덮지 않는다. */}
      <small className="muted lessonModalFieldHint">
        {isEditingExistingLesson
          ? "시작 시간을 바꾸면 3시간짜리 수업일 때만 종료가 따라 움직입니다. 직접 정해 둔 종료 시간은 그대로 둡니다."
          : "시작 시간을 바꾸면 종료 시간이 3시간 뒤로 맞추어집니다. 종료 시간은 직접 고칠 수 있습니다."}
      </small>
    </>
  );
}
