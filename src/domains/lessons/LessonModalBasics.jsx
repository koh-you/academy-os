import React from "react";

export function LessonModalBasics({
  children,
  classTemplateId,
  color,
  date,
  endTime,
  isFormLocked,
  isLessonTypeChoiceDisabled,
  lessonColorOptions,
  lessonType,
  name,
  onClassTemplateChange,
  onColorOptionClick,
  onDateChange,
  onEndTimeChange,
  onLessonTypeChange,
  onNameChange,
  onStartTimeChange,
  startTime,
  templates
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
        <label>
          큰 수업 틀
          <select
            disabled={isFormLocked}
            value={classTemplateId}
            onChange={(event) => onClassTemplateChange(event.target.value)}
          >
            <option value="">직접 입력 일정</option>
            {templates.map((template) => (
              <option
                key={template.classTemplateId}
                value={template.classTemplateId}
              >
                {template.name}
              </option>
            ))}
          </select>
        </label>
      </div>

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
    </>
  );
}
