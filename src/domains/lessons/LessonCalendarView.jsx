import React from "react";
import { FilterBar } from "../../shared/components/FilterBar.jsx";
import { NavigationHeader } from "../../shared/components/NavigationHeader.jsx";

export function LessonCalendarView({
  attendanceSyncLabel,
  attendanceSyncStatus,
  lessonTypeFilter,
  monthlyRegularLessonOpenLabel,
  monthTitle,
  onAddLesson,
  onDateSelect,
  onLessonTypeFilterChange,
  onMoveDate,
  onOpenMonthlyRegularLessons,
  onOpenLessonJournal,
  onShiftMonth,
  selectedCalendarDayRef,
  showMonthlyRegularLessonOpen,
  viewModel
}) {
  return (
    <>
      <NavigationHeader
        actions={(
          <>
            <button className="primaryButton" onClick={onAddLesson} type="button">+ 수업 등록</button>
            {showMonthlyRegularLessonOpen ? (
              <button className="softButton" onClick={onOpenMonthlyRegularLessons} type="button">
                {monthlyRegularLessonOpenLabel}
              </button>
            ) : null}
          </>
        )}
        className="teacherCalendarTop"
        context={(
          <>
            <FilterBar
              className="lessonTypeFilterBar"
              label="수업일지 일정 종류 필터"
              result={<span>{viewModel.visibleLessonCount}개</span>}
            >
              {viewModel.filterOptions.map((option) => (
                <button
                  aria-pressed={lessonTypeFilter === option.id}
                  className={`filterBarOption${lessonTypeFilter === option.id ? " active" : ""}`}
                  key={option.id}
                  onClick={() => onLessonTypeFilterChange(option.id)}
                  type="button"
                >
                  {option.label}
                </button>
              ))}
            </FilterBar>
            <span
              className={`attendanceSyncPill ${attendanceSyncStatus.state}`}
              title={attendanceSyncStatus.message}
            >
              {attendanceSyncLabel}
            </span>
          </>
        )}
        title={monthTitle}
      />

      <nav aria-label="수업일지 달력 월 이동" className="lessonCalendarMonthNavigation">
        <button aria-label="이전 달" className="iconButton" onClick={() => onShiftMonth(-1)} type="button">‹</button>
        <h2 aria-live="polite">{monthTitle}</h2>
        <button aria-label="다음 달" className="iconButton" onClick={() => onShiftMonth(1)} type="button">›</button>
      </nav>

      <section
        aria-label={`${monthTitle} 수업 달력`}
        className="calendarShell teacherCalendarShell"
        role="region"
        tabIndex={0}
      >
        <div aria-label="월간 수업 일정" className="calendarGrid teacherCalendarGrid" role="grid">
          {["일", "월", "화", "수", "목", "금", "토"].map((label) => (
            <div className="weekday" key={label} role="columnheader">{label}</div>
          ))}
          {viewModel.calendarDays.map((day) => (
            <div
              aria-label={`${day.date} · ${day.lessons.length ? `${day.lessons.length}개 수업` : "수업 없음"}`}
              aria-selected={day.isSelected}
              className={[
                "monthCell",
                "teacherMonthCell",
                day.inMonth ? "" : "outside",
                day.isSelected ? "selected" : ""
              ].join(" ")}
              key={day.date}
              onClick={() => onDateSelect(day.date)}
              onKeyDown={(event) => {
                if (event.target !== event.currentTarget || !["Enter", " "].includes(event.key)) return;
                event.preventDefault();
                event.stopPropagation();
                onDateSelect(day.date);
              }}
              ref={day.isSelected ? selectedCalendarDayRef : null}
              role="gridcell"
              tabIndex={day.isSelected ? 0 : -1}
            >
              <span className="dayNumber">{day.dayNumber}</span>
              <span className="cellPlus">+</span>
              <span className="lessonPills">
                {day.lessons.map((pill) => (
                  <button
                    className={pill.className}
                    key={pill.lesson.lessonId}
                    onClick={(event) => {
                      event.stopPropagation();
                      onOpenLessonJournal(pill.lesson.lessonId);
                    }}
                    style={{ background: pill.lesson.color }}
                    type="button"
                  >
                    {pill.label}
                  </button>
                ))}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
