import { useEffect, useState } from "react";
import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { FilterBar } from "../../shared/components/FilterBar.jsx";
import { MetricCard } from "../../shared/components/MetricCard.jsx";
import { Modal } from "../../shared/components/Modal.jsx";
import { NavigationHeader } from "../../shared/components/NavigationHeader.jsx";
import { PageHeader } from "../../shared/components/PageHeader.jsx";
import { SectionHeader } from "../../shared/components/SectionHeader.jsx";
import { SelectableCard } from "../../shared/components/SelectableCard.jsx";
import {
  formatCalendarEventLabel,
  formatCalendarSummaryLabel,
  formatPeriodSummaryLabel as formatCalendarPeriodSummaryLabel,
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
    <PageHeader
      actions={(
        <FilterBar
          actions={<button className="primaryButton" onClick={() => onOpenEventForm?.(selectedDate)} type="button">+ 일정 등록</button>}
          className="schoolCalendarHeaderFilter"
          label="학사일정 학교 필터와 일정 등록"
        >
          <label className="filterBarField">
            <span>학교</span>
            <select aria-label="학사일정 학교 필터" value={schoolFilter} onChange={(event) => onSchoolFilterChange?.(event.target.value)}>
              <option value="전체 학교">전체 학교</option>
              {schools.map((school) => (
                <option key={school} value={school}>{school}</option>
              ))}
            </select>
          </label>
        </FilterBar>
      )}
      actionsClassName="schoolCalendarHeaderActions"
      className="schoolCalendarHeader"
      description="학교별 시험기간, 수학시험 날짜, 방학/개학 같은 학사 원본 일정을 관리합니다."
      title="학사일정"
    />
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
      <SectionHeader
        density="slim"
        description="학교별 전체 시험기간은 카드와 달력 띠로 보고, 기간 안의 수학시험 날짜는 달력에서 더 진하게 확인합니다."
        title="월간 학사 개요"
      />
      <div className="schoolAcademicStatsGrid">
        <MetricCard density="compact" label="시험기간" value={examPeriodCards.length} />
        <MetricCard density="compact" label="수학시험 날짜" value={monthMathExamEvents.length} />
        <MetricCard density="compact" label="방학/개학·학교행사" value={monthAcademicEvents.length} />
      </div>
      {examPeriodCards.length === 0 ? (
        <div className="emptyHomeworkBox">이 달에 표시할 시험기간 카드가 없습니다.</div>
      ) : (
        <div className="examPeriodGallery">
          {examPeriodCards.map((event) => (
            <SelectableCard
              aria-label={`${formatPeriodSummaryLabel?.(event)} 시험기간 상세 열기`}
              className="examPeriodOverviewCard"
              density="default"
              key={event.eventId}
              onClick={() => onOpenEventEditForm?.(event)}
              style={{ "--school-color": getSchoolCalendarEventColor?.(event) }}
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
            </SelectableCard>
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
    <FilterBar className="schoolCalendarFilterBar" label="학사일정 표시 항목">
      {filters.map((filter) => (
        <button
          aria-pressed={calendarFilter === filter.id}
          className={`filterBarOption schoolCalendarFilterButton${calendarFilter === filter.id ? " active" : ""}`}
          key={filter.id}
          onClick={() => onChange?.(filter.id)}
          type="button"
        >
          {filter.label}
        </button>
      ))}
    </FilterBar>
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
    <NavigationHeader
      actions={(
        <button className="primaryButton compact schoolMonthAddButton" onClick={() => onOpenEventForm?.(selectedDate)} type="button">
          + 일정 등록
        </button>
      )}
      className="schoolMonthHeader"
      leading={<button aria-label="이전 달" className="iconButton" onClick={() => onShiftMonth?.(-1)} type="button">‹</button>}
      title={formatMonthTitle?.(selectedMonth)}
      titleAs="h2"
      trailing={<button aria-label="다음 달" className="iconButton" onClick={() => onShiftMonth?.(1)} type="button">›</button>}
    />
  );
}

export function SchoolMonthGrid({
  calendarDisplayEvents = [],
  monthDays = [],
  onOpenDateModal,
  selectedDate = ""
}) {
  return (
    <section aria-label="학사일정 월간 달력" className="schoolMonthGridShell" role="region" tabIndex={0}>
      <div aria-label="학사일정 달력 범례" className="schoolMonthLegend" role="group">
        <span><i className="examPeriod" />학교색 띠 · 전체 시험기간</span>
        <span><i className="mathExam" />진한 탭 · 수학시험 날짜</span>
        <span><i className="academicEvent" />방학·학교행사</span>
      </div>
      <div aria-label="학사일정 월간 일정" className="calendarGrid teacherCalendarGrid schoolMonthGrid" role="grid">
        {["일", "월", "화", "수", "목", "금", "토"].map((label) => (
          <div className="weekday" key={label} role="columnheader">{label}</div>
        ))}
        {monthDays.map((day) => {
          const eventPriority = { examPeriod: 0, mathExam: 1, vacation: 2, schoolEvent: 3, custom: 4 };
          const dayEvents = calendarDisplayEvents
            .filter((event) => isDateWithinEvent(day.date, event))
            .sort((eventA, eventB) => (
              (eventPriority[eventA.type] ?? 4) - (eventPriority[eventB.type] ?? 4)
              || formatCalendarEventLabel(eventA).localeCompare(formatCalendarEventLabel(eventB))
            ));
          const { academicEvents, examPeriodEvents, hiddenCount, mathExamEvents } = getMonthCellDisplayEvents(dayEvents);
          return (
            <button
              aria-label={`${day.date} · ${dayEvents.length ? `${dayEvents.length}개 일정` : "일정 없음"}`}
              aria-selected={selectedDate === day.date}
              className={[
                "monthCell",
                "teacherMonthCell",
                "schoolMonthCell",
                day.inMonth ? "" : "outside",
                selectedDate === day.date ? "selected" : ""
              ].join(" ")}
              key={day.date}
              onClick={() => onOpenDateModal?.(day.date)}
              role="gridcell"
              type="button"
            >
              <span className="dayNumber">{day.dayNumber}</span>
              <span className="lessonPills">
                <span className="schoolExamPeriodLayer">
                  {examPeriodEvents.map((event) => {
                    const periodLabel = `${formatCalendarPeriodSummaryLabel(event)} 시험기간`;
                    const periodEndDate = event.endDate || event.date;
                    const periodPosition = event.date === periodEndDate
                      ? "singleDay"
                      : day.date === event.date
                        ? "periodStart"
                        : day.date === periodEndDate
                          ? "periodEnd"
                          : "periodMiddle";
                    return (
                      <span
                        className={`schoolEventPill event-examPeriod examPeriodBand ${periodPosition}`}
                        key={event.eventId}
                        style={{ "--event-color": getSchoolCalendarEventColor(event) }}
                        title={`${periodLabel} · ${event.date} ~ ${periodEndDate}`}
                      >
                        {periodLabel}
                      </span>
                    );
                  })}
                </span>
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
    </section>
  );
}

export function SchoolDateScheduleModal({
  busy = false,
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
    <Modal className="schoolDateScheduleModal" closeDisabled={busy} title={`${selectedDate} 일정`} subtitle="일정 내용과 색상을 확인하고 수정합니다." onClose={onClose} scrollable>
      <fieldset aria-busy={busy} className="schoolDateModalContent" disabled={busy}>
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
      </fieldset>
    </Modal>
  );
}

export function SchoolEventFormModal({
  busy = false,
  eventColorOptions = [],
  eventTypeLabels = {},
  examCycleLabel,
  gradeOptions = [],
  isEditingDerivedEvent = false,
  isEditingEvent = false,
  mathSubjectOptions = [],
  newEvent = {},
  onAddMathExamItem,
  onChangeExamCycle,
  onChangeEventType,
  onClose,
  onDeleteEditingEvent,
  onRemoveMathExamItem,
  onSubmit,
  onUpdateEventDraft,
  onUpdateMathExamItem,
  safeExamCycleOptions = [],
  schools = []
}) {
  const mathExamItems = Array.isArray(newEvent.mathExamItems) ? newEvent.mathExamItems : [];

  return (
    <Modal
      className="schoolEventFormModal"
      closeDisabled={busy}
      title={isEditingEvent ? "일정 수정" : "일정 등록"}
      subtitle={isEditingEvent ? "변경할 항목을 확인한 뒤 저장합니다." : "입력 유형을 먼저 고른 뒤 필요한 정보만 입력합니다."}
      onClose={onClose}
      scrollable
    >
      <fieldset aria-busy={busy} className="schoolEventFormPanel modalForm" disabled={busy}>
        <label className="inputTypeField">
          입력 유형
          <select disabled={isEditingDerivedEvent} value={newEvent.type} onChange={(event) => onChangeEventType?.(event.target.value)}>
            {Object.entries(eventTypeLabels).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </label>
        <label>
          학교
          <select
            disabled={isEditingDerivedEvent}
            value={newEvent.schoolName}
            onChange={(event) => {
              const schoolName = event.target.value;
              onUpdateEventDraft?.((current) => ({
                ...current,
                schoolName,
                grade: "",
                color: getSchoolCalendarSchoolColor(schoolName)
              }));
            }}
          >
            <option value="">학교 선택</option>
            {schools.map((school) => (
              <option key={school} value={school}>{school}</option>
            ))}
          </select>
        </label>
        {["examPeriod", "mathExam"].includes(newEvent.type) ? (
          <label>
            시험 구분
            <select disabled={isEditingDerivedEvent} value={newEvent.examCycle} onChange={(event) => onChangeExamCycle?.(event.target.value)}>
              {safeExamCycleOptions.map((cycle) => (
                <option key={cycle} value={cycle}>{examCycleLabel?.(cycle)}</option>
              ))}
            </select>
          </label>
        ) : null}
        {newEvent.type === "mathExam" ? (
          <>
            <label>
              학년
              <select value={newEvent.grade} onChange={(event) => onUpdateEventDraft?.((current) => ({ ...current, grade: event.target.value }))}>
                <option value="">전체 학년</option>
                {gradeOptions.map((grade) => (
                  <option key={grade} value={grade}>{grade}</option>
                ))}
              </select>
            </label>
          </>
        ) : null}
        <label>
          일정명
          <input value={newEvent.title} onChange={(event) => onUpdateEventDraft?.((current) => ({ ...current, title: event.target.value }))} placeholder="예: 1학기 기말고사" />
        </label>
        <label>
          일정 색상
          <div className="calendarColorPicker">
            {eventColorOptions.map((color) => (
              <button
                aria-label={`색상 ${color}`}
                className={newEvent.color === color ? "active" : ""}
                disabled={isEditingDerivedEvent}
                key={color}
                onClick={() => onUpdateEventDraft?.((current) => ({ ...current, color }))}
                style={{ backgroundColor: color }}
                type="button"
              />
            ))}
          </div>
        </label>
        {newEvent.type === "examPeriod" ? (
          <>
            <div className="calendarDateGrid">
              <label>
                시작일
                <input type="date" value={newEvent.date} onChange={(event) => onUpdateEventDraft?.((current) => ({ ...current, date: event.target.value }))} />
              </label>
              <label>
                종료일
                <input type="date" value={newEvent.endDate} onChange={(event) => onUpdateEventDraft?.((current) => ({ ...current, endDate: event.target.value }))} />
              </label>
            </div>
            {!isEditingEvent ? (
              <div className="examSubjectBox schoolExamBundleBox">
                <SectionHeader
                  actions={<button className="softButton small" onClick={onAddMathExamItem} type="button">+ 수학시험 추가</button>}
                  density="slim"
                  title="수학시험 날짜"
                  titleAs="strong"
                />
                <div className="mathExamItemStack">
                  {mathExamItems.map((item, index) => (
                    <div className="mathExamItemRow" key={item.id}>
                      <label>
                        학년
                        <select value={item.grade} onChange={(event) => onUpdateMathExamItem?.(item.id, "grade", event.target.value)}>
                          <option value="">학년 선택</option>
                          {gradeOptions.map((grade) => (
                            <option key={grade} value={grade}>{grade}</option>
                          ))}
                        </select>
                      </label>
                      <label>
                        과목
                        <select value={item.subject} onChange={(event) => onUpdateMathExamItem?.(item.id, "subject", event.target.value)}>
                          {mathSubjectOptions.map((subject) => (
                            <option key={subject} value={subject}>{subject}</option>
                          ))}
                        </select>
                      </label>
                      <label>
                        시험 날짜
                        <input type="date" value={item.date} onChange={(event) => onUpdateMathExamItem?.(item.id, "date", event.target.value)} />
                      </label>
                      <button aria-label={`${index + 1}번째 수학시험 삭제`} className="iconButton" disabled={mathExamItems.length === 1} onClick={() => onRemoveMathExamItem?.(item.id)} type="button">
                        ×
                      </button>
                      <label className="mathExamItemMemo">
                        메모
                        <input value={item.memo} onChange={(event) => onUpdateMathExamItem?.(item.id, "memo", event.target.value)} placeholder={`${index + 1}번째 수학시험 메모`} />
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </>
        ) : newEvent.type === "mathExam" ? (
          <div className="examSubjectBox">
            <SectionHeader density="slim" title="수학시험 날짜" titleAs="strong" />
            <div className="examSubjectRow singleDate">
              <label>
                시험 날짜
                <input type="date" value={newEvent.date} onChange={(event) => onUpdateEventDraft?.((current) => ({ ...current, date: event.target.value, endDate: event.target.value }))} />
              </label>
              <label>
                과목
                <input value={newEvent.examSubject} onChange={(event) => onUpdateEventDraft?.((current) => ({ ...current, examSubject: event.target.value }))} placeholder="예: 수학" />
              </label>
            </div>
          </div>
        ) : (
          <div className="calendarDateGrid">
            <label>
              시작일
              <input type="date" value={newEvent.date} onChange={(event) => onUpdateEventDraft?.((current) => ({ ...current, date: event.target.value }))} />
            </label>
            <label>
              종료일
              <input type="date" value={newEvent.endDate || newEvent.date} onChange={(event) => onUpdateEventDraft?.((current) => ({ ...current, endDate: event.target.value }))} />
            </label>
          </div>
        )}
        <label>
          메모
          <textarea value={newEvent.memo} onChange={(event) => onUpdateEventDraft?.((current) => ({ ...current, memo: event.target.value }))} placeholder="필요한 메모" rows="4" />
        </label>
        <div className="schoolEventFormActions">
          {isEditingEvent ? (
            <button className="dangerSoftButton" onClick={onDeleteEditingEvent} type="button">
              {newEvent.type === "examPeriod" ? "시험기간 삭제" : "일정 삭제"}
            </button>
          ) : null}
          <button className="primaryButton" onClick={onSubmit} type="button">
            {isEditingEvent ? "변경 저장" : newEvent.type === "examPeriod" ? "시험일정 묶음 등록" : "일정 등록"}
          </button>
        </div>
      </fieldset>
    </Modal>
  );
}
