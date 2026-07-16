import { useEffect, useState } from "react";
import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { Modal } from "../../shared/components/Modal.jsx";
import {
  formatCalendarEventLabel,
  formatCalendarSummaryLabel,
  getMonthCellDisplayEvents,
  getSchoolCalendarEventColor,
  getSchoolCalendarSchoolColor,
  isDateWithinEvent
} from "./schoolCalendarUtils.js";

export function SchoolCalendarSaveNotice({ saveState = {} }) {
  return (
    <div className={`schoolCalendarSaveNotice ${saveState.state || "idle"}`} role="status">
      <strong>학사일정 저장</strong>
      <span>{saveState.message}</span>
    </div>
  );
}

export function SchoolCalendarHeader({
  onOpenEventForm,
  onSchoolFilterChange,
  schoolFilter = "전체 학교",
  schools = [],
  selectedDate = ""
}) {
  return (
    <header className="schoolCalendarHeader">
      <div>
        <h1>학사일정</h1>
        <p className="muted">학교별 시험기간, 수학시험 날짜, 방학/개학 같은 학사 원본 일정을 관리합니다.</p>
      </div>
      <div className="schoolCalendarHeaderActions">
        <select value={schoolFilter} onChange={(event) => onSchoolFilterChange?.(event.target.value)}>
          <option value="전체 학교">전체 학교</option>
          {schools.map((school) => (
            <option key={school} value={school}>{school}</option>
          ))}
        </select>
        <button className="primaryButton" onClick={() => onOpenEventForm?.(selectedDate)} type="button">+ 일정 등록</button>
      </div>
    </header>
  );
}

export function SchoolAcademicOverviewPanel({
  currentExamCycle = "",
  examCycleLabel,
  examPeriodCards = [],
  formatPeriodSummaryLabel,
  formatShortDate,
  getSchoolCalendarEventColor,
  monthAcademicEvents = [],
  monthMathExamEvents = [],
  onOpenEventEditForm
}) {
  return (
    <section className="panel schoolAcademicOverviewPanel">
      <div className="sectionHeader slim">
        <div>
          <h2>월간 학사 개요</h2>
          <p className="muted">시험기간은 카드로 모아 보고, 달력에는 실제 날짜 확인이 필요한 수학시험과 학사일정만 표시합니다.</p>
        </div>
      </div>
      <div className="schoolAcademicStatsGrid">
        <article>
          <strong>{examPeriodCards.length}</strong>
          <span>시험기간</span>
        </article>
        <article>
          <strong>{monthMathExamEvents.length}</strong>
          <span>수학시험 날짜</span>
        </article>
        <article>
          <strong>{monthAcademicEvents.length}</strong>
          <span>방학/개학·학교행사</span>
        </article>
      </div>
      {examPeriodCards.length === 0 ? (
        <div className="emptyHomeworkBox">이 달에 표시할 시험기간 카드가 없습니다.</div>
      ) : (
        <div className="examPeriodGallery">
          {examPeriodCards.map((event) => (
            <button
              aria-label={`${formatPeriodSummaryLabel?.(event)} 시험기간 상세 열기`}
              className="examPeriodOverviewCard"
              key={event.eventId}
              onClick={() => onOpenEventEditForm?.(event)}
              style={{ "--school-color": getSchoolCalendarEventColor?.(event) }}
              type="button"
            >
              <div className="examPeriodOverviewCardHeader">
                <div>
                  <strong>{formatPeriodSummaryLabel?.(event)}</strong>
                  <span>{examCycleLabel?.(event.examCycle || currentExamCycle)}</span>
                </div>
              </div>
              <p>{event.date} ~ {event.endDate || event.date}</p>
              <div className="examPeriodMathChips">
                {event.relatedMathExamEvents.length ? (
                  event.relatedMathExamEvents.map((mathEvent) => (
                    <span key={mathEvent.eventId}>{formatShortDate?.(mathEvent.date)} · {mathEvent.grade || "전체"} {mathEvent.examSubject || "수학"}</span>
                  ))
                ) : (
                  <span className="mutedChip">수학시험 날짜 미입력</span>
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}

export function SchoolCalendarFilterBar({
  calendarFilter = "all",
  filters = [],
  onChange
}) {
  return (
    <div className="schoolCalendarFilterBar" aria-label="학사일정 표시 항목">
      {filters.map((filter) => (
        <button
          className={`schoolCalendarFilterButton${calendarFilter === filter.id ? " active" : ""}`}
          key={filter.id}
          onClick={() => onChange?.(filter.id)}
          type="button"
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export function SchoolMonthHeader({
  formatMonthTitle,
  onOpenEventForm,
  onShiftMonth,
  selectedDate = "",
  selectedMonth = ""
}) {
  return (
    <div className="schoolMonthHeader">
      <button className="iconButton" onClick={() => onShiftMonth?.(-1)} type="button">‹</button>
      <div className="schoolMonthTitleBlock">
        <h2>{formatMonthTitle?.(selectedMonth)}</h2>
        <button className="primaryButton compact schoolMonthAddButton" onClick={() => onOpenEventForm?.(selectedDate)} type="button">
          + 일정 등록
        </button>
      </div>
      <button className="iconButton" onClick={() => onShiftMonth?.(1)} type="button">›</button>
    </div>
  );
}

export function SchoolMonthGrid({
  calendarDisplayEvents = [],
  monthDays = [],
  onOpenDateModal,
  selectedDate = ""
}) {
  return (
    <div className="calendarGrid teacherCalendarGrid schoolMonthGrid">
      {["일", "월", "화", "수", "목", "금", "토"].map((label) => (
        <div className="weekday" key={label}>{label}</div>
      ))}
      {monthDays.map((day) => {
        const eventPriority = { mathExam: 0, vacation: 1, schoolEvent: 2, custom: 3 };
        const dayEvents = calendarDisplayEvents
          .filter((event) => isDateWithinEvent(day.date, event))
          .sort((eventA, eventB) => (
            (eventPriority[eventA.type] ?? 4) - (eventPriority[eventB.type] ?? 4)
            || formatCalendarEventLabel(eventA).localeCompare(formatCalendarEventLabel(eventB))
          ));
        const { academicEvents, hiddenCount, mathExamEvents } = getMonthCellDisplayEvents(dayEvents);
        return (
          <button
            className={[
              "monthCell",
              "teacherMonthCell",
              "schoolMonthCell",
              day.inMonth ? "" : "outside",
              selectedDate === day.date ? "selected" : ""
            ].join(" ")}
            key={day.date}
            onClick={() => onOpenDateModal?.(day.date)}
            type="button"
          >
            <span className="dayNumber">{day.dayNumber}</span>
            <span className="lessonPills">
              <span className="schoolMathExamLayer">
                {mathExamEvents.map((event, mathTabIndex) => {
                  const eventLabel = formatCalendarSummaryLabel(event);
                  const eventColor = getSchoolCalendarEventColor(event);
                  return (
                    <span
                      className={`schoolEventPill event-${event.type} mathExamTab`}
                      key={event.eventId}
                      style={{
                        "--event-color": eventColor,
                        backgroundColor: eventColor,
                        "--math-tab-index": mathTabIndex
                      }}
                      title={event.title}
                    >
                      {eventLabel}
                    </span>
                  );
                })}
              </span>
              <span className="schoolRegularEventLayer">
                {academicEvents.map((event) => {
                  const eventLabel = formatCalendarSummaryLabel(event);
                  const eventColor = getSchoolCalendarEventColor(event);
                  return (
                    <span
                      className={`schoolEventPill event-${event.type}`}
                      key={event.eventId}
                      style={{ "--event-color": eventColor, backgroundColor: eventColor }}
                      title={event.title}
                    >
                      {eventLabel}
                    </span>
                  );
                })}
                {hiddenCount > 0 ? (
                  <span className="schoolEventMorePill">+{hiddenCount}</span>
                ) : null}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

export function SchoolDateScheduleModal({
  eventColorOptions = [],
  eventTypeLabels = {},
  events = [],
  gradeOptions = [],
  mathSubjectOptions = [],
  normalizeMathSubject = (subject = "") => String(subject || "").trim() || "수학",
  onClose,
  onCreateEvent,
  onDeleteEvent,
  onSaveEvent,
  schools = [],
  selectedDate = ""
}) {
  const groupedEvents = events.reduce((groups, event) => {
    const schoolName = event.schoolName || "학교 미입력";
    const previous = groups.get(schoolName) ?? [];
    groups.set(schoolName, [...previous, event]);
    return groups;
  }, new Map());
  const groupedEventEntries = [...groupedEvents.entries()].sort(([schoolA], [schoolB]) => schoolA.localeCompare(schoolB));
  const [draftEvents, setDraftEvents] = useState({});

  useEffect(() => {
    setDraftEvents(Object.fromEntries(events.map((event) => [event.eventId, { ...event }])));
  }, [events]);

  function getDraftEvent(event) {
    return draftEvents[event.eventId] ?? event;
  }

  function updateDraftEvent(eventId, field, value) {
    setDraftEvents((current) => ({
      ...current,
      [eventId]: {
        ...(current[eventId] ?? events.find((event) => event.eventId === eventId) ?? {}),
        [field]: value
      }
    }));
  }

  return (
    <Modal className="schoolDateScheduleModal" title={`${selectedDate} 일정`} subtitle="일정 내용과 색상을 확인하고 수정합니다." onClose={onClose}>
      <div className="schoolDateModalToolbar">
        <button className="primaryButton compact" onClick={() => onCreateEvent?.(selectedDate)} type="button">
          이 날짜에 일정 등록
        </button>
      </div>
      {events.length === 0 ? (
        <EmptyState className="emptyState schoolDateEmptyState">선택한 날짜에 등록된 일정이 없습니다.</EmptyState>
      ) : (
        <div className="schoolDateEventStack">
          {groupedEventEntries.map(([schoolName, schoolEvents]) => (
            <section
              className="schoolDateGroup"
              key={schoolName}
              style={{ "--school-color": getSchoolCalendarSchoolColor(schoolName) }}
            >
              <div className="schoolDateGroupHeader">
                <strong>{schoolName}</strong>
                <span>{schoolEvents.length}건</span>
              </div>
              {schoolEvents.map((event) => {
                const draftEvent = getDraftEvent(event);
                const isReadonlyEvent = Boolean(event.readonly);
                const canEditDerivedDate = !isReadonlyEvent && event.derived && ["examPeriod", "mathExam"].includes(event.type);
                const canEditDerivedSubject = !isReadonlyEvent && event.derived && event.type === "mathExam";
                const canEditEventDetails = !event.derived && !isReadonlyEvent;
                const eventColor = getSchoolCalendarEventColor(draftEvent);
                const eventColorOptionsForDisplay = eventColorOptions.includes(eventColor)
                  ? eventColorOptions
                  : [eventColor, ...eventColorOptions];
                return (
                  <article className="schoolDateEventEditor" key={event.eventId} style={{ "--school-color": eventColor }}>
                    <div className="schoolDateEventEditorTop">
                      <div>
                        <strong>{formatCalendarSummaryLabel(draftEvent)}</strong>
                        <span>{event.type === "examPeriod" ? `${draftEvent.date} ~ ${draftEvent.endDate || draftEvent.date}` : draftEvent.date}</span>
                      </div>
                      <div className="schoolDateEventActions">
                        {isReadonlyEvent ? (
                          <span>읽기 전용 일정</span>
                        ) : event.derived ? (
                          <span>시험관리 연동</span>
                        ) : (
                          <button className="dangerSoftButton" onClick={() => onDeleteEvent?.(event.eventId)} type="button">삭제</button>
                        )}
                        {!isReadonlyEvent ? (
                          <button className="primaryButton compact" onClick={() => onSaveEvent?.(event, draftEvent)} type="button">저장</button>
                        ) : null}
                      </div>
                    </div>
                    <div className="fieldGrid two">
                      <label>
                        {event.type === "examPeriod" ? "시작일" : "날짜"}
                        <input disabled={!canEditEventDetails && !canEditDerivedDate} type="date" value={draftEvent.date} onChange={(change) => updateDraftEvent(event.eventId, "date", change.target.value)} />
                      </label>
                      {event.type === "examPeriod" ? (
                        <label>
                          종료일
                          <input disabled={!canEditEventDetails && !canEditDerivedDate} type="date" value={draftEvent.endDate ?? ""} onChange={(change) => updateDraftEvent(event.eventId, "endDate", change.target.value)} />
                        </label>
                      ) : event.type === "mathExam" ? (
                        <label>
                          과목
                          <select disabled={!canEditEventDetails && !canEditDerivedSubject} value={normalizeMathSubject(draftEvent.examSubject ?? "공통수학1")} onChange={(change) => updateDraftEvent(event.eventId, "examSubject", change.target.value)}>
                            {mathSubjectOptions.map((subject) => (
                              <option key={subject} value={subject}>{subject}</option>
                            ))}
                          </select>
                        </label>
                      ) : (
                        <label>
                          종료일
                          <input disabled={!canEditEventDetails} type="date" value={draftEvent.endDate || draftEvent.date || ""} onChange={(change) => updateDraftEvent(event.eventId, "endDate", change.target.value)} />
                        </label>
                      )}
                      <label>
                        학교
                        <select disabled={!canEditEventDetails} value={draftEvent.schoolName} onChange={(change) => updateDraftEvent(event.eventId, "schoolName", change.target.value)}>
                          {[draftEvent.schoolName, ...schools].filter(Boolean).filter((school, index, array) => array.indexOf(school) === index).map((school) => (
                            <option key={school} value={school}>{school}</option>
                          ))}
                        </select>
                      </label>
                      <label>
                        학년
                        <select disabled={!canEditEventDetails} value={draftEvent.grade ?? ""} onChange={(change) => updateDraftEvent(event.eventId, "grade", change.target.value)}>
                          <option value="">전체 학년</option>
                          {gradeOptions.map((grade) => (
                            <option key={grade} value={grade}>{grade}</option>
                          ))}
                        </select>
                      </label>
                      <label>
                        일정 종류
                        <select disabled={!canEditEventDetails} value={draftEvent.type} onChange={(change) => updateDraftEvent(event.eventId, "type", change.target.value)}>
                          {Object.entries(eventTypeLabels)
                            .filter(([value]) => !["examPeriod", "mathExam"].includes(value) || value === event.type)
                            .map(([value, label]) => (
                              <option key={value} value={value}>{label}</option>
                            ))}
                        </select>
                      </label>
                      <label>
                        일정명
                        <input disabled={!canEditEventDetails} value={draftEvent.title} onChange={(change) => updateDraftEvent(event.eventId, "title", change.target.value)} />
                      </label>
                    </div>
                    <label>
                      메모
                      <textarea disabled={!canEditEventDetails} value={draftEvent.memo ?? ""} onChange={(change) => updateDraftEvent(event.eventId, "memo", change.target.value)} rows="3" />
                    </label>
                    <label>
                      일정 색상
                      <div className="calendarColorPicker">
                        {eventColorOptionsForDisplay.map((color) => (
                          <button
                            aria-label={`색상 ${color}`}
                            className={eventColor === color ? "active" : ""}
                            disabled={!canEditEventDetails}
                            key={color}
                            onClick={() => updateDraftEvent(event.eventId, "color", color)}
                            style={{ backgroundColor: color }}
                            type="button"
                          />
                        ))}
                      </div>
                    </label>
                  </article>
                );
              })}
            </section>
          ))}
        </div>
      )}
    </Modal>
  );
}
