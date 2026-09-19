import { useEffect, useState } from "react";
import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { FilterBar } from "../../shared/components/FilterBar.jsx";
import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";
import { MetricCard } from "../../shared/components/MetricCard.jsx";
import { Modal, ModalFooter } from "../../shared/components/Modal.jsx";
import { NavigationHeader } from "../../shared/components/NavigationHeader.jsx";
import { PageHeader } from "../../shared/components/PageHeader.jsx";
import { SectionHeader } from "../../shared/components/SectionHeader.jsx";
import { OverflowMenu } from "../../shared/components/OverflowMenu.jsx";
import { SelectableCard } from "../../shared/components/SelectableCard.jsx";
import { StickySaveBar } from "../../shared/components/StickySaveBar.jsx";
import {
  formatCalendarEventLabel,
  formatCalendarSummaryLabel,
  formatPeriodSummaryLabel as formatCalendarPeriodSummaryLabel,
  getMonthCellDisplayEvents,
  getSchoolCalendarEditableFields,
  getSchoolCalendarEventColor,
  getSchoolCalendarSchoolColor,
  isDateWithinEvent,
  isSchoolCalendarEventDirty
} from "./schoolCalendarUtils.js";
import "./schoolCalendarDateModal.css";
import "./schoolEventFormModal.css";

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
        <EmptyState title="이 달에 표시할 시험기간 카드가 없습니다." />
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
        // 페이지 헤더의 '+ 일정 등록' 이 이 화면의 유일한 primary 다. 월 헤더의 같은 진입점은 soft 로 둔다(2026-09-19 U9).
        <button className="softButton compact" onClick={() => onOpenEventForm?.(selectedDate)} type="button">
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
  saveMessage = "",
  saveState = "idle",
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
  // saveState/saveMessage 는 페이지 공용 상태라 이 모달을 열기 전의 실패 사유가 남아 있을 수 있다.
  // 실패 사유는 이 모달에서 저장·삭제를 시도한 뒤에만 저장 바에 보여 준다(2026-09-19 U9 · exams-18).
  const [hasRequestedSave, setHasRequestedSave] = useState(false);

  // events 는 부모에서 filter 로 만들어져 렌더마다 새 배열이다. 참조에 의존하면 부모가
  // 한 번 리렌더될 때마다 입력 중이던 초안이 원본으로 되돌아가므로, 실제 내용이 바뀔 때만 초기화한다.
  const eventsSignature = JSON.stringify(
    events.map((event) => [event.eventId, ...getSchoolCalendarEditableFields(event).map((field) => event[field] ?? "")])
  );

  useEffect(() => {
    setDraftEvents(Object.fromEntries(events.map((event) => [event.eventId, { ...event }])));
  }, [eventsSignature]);

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

  const dirtyEvents = events.filter((event) => isSchoolCalendarEventDirty(event, draftEvents[event.eventId]));

  async function saveDirtyEvents() {
    setHasRequestedSave(true);
    for (const event of dirtyEvents) await onSaveEvent?.(event, getDraftEvent(event));
  }

  function revertDirtyEvents() {
    setDraftEvents((current) => {
      const next = { ...current };
      for (const event of dirtyEvents) next[event.eventId] = { ...event };
      return next;
    });
  }

  // 이 모달이 언마운트되면 draftEvents 가 사라진다. ×/Esc 나 '이 날짜에 일정 등록'(폼 모달로 전환) 앞에서
  // 저장하지 않은 초안이 있으면 한 번 묻는다(2026-09-19 U9). 저장 중에는 Modal 의 closeDisabled 가 막는다.
  function confirmDiscardDirtyEvents() {
    if (dirtyEvents.length === 0) return true;
    return typeof window === "undefined" || window.confirm("저장하지 않은 변경이 있습니다. 닫을까요?");
  }

  function requestClose() {
    if (confirmDiscardDirtyEvents()) onClose?.();
  }

  function requestCreateEvent() {
    if (confirmDiscardDirtyEvents()) onCreateEvent?.(selectedDate);
  }

  return (
    <Modal className="schoolDateScheduleModal" closeDisabled={busy} title={`${selectedDate} 일정`} subtitle="일정 내용과 색상을 확인하고 수정합니다." onClose={requestClose} scrollable>
      <fieldset aria-busy={busy} className="schoolDateModalContent" disabled={busy}>
      <div className="schoolDateModalToolbar">
        {/* 이 모달의 primary 는 하단 저장 바의 '변경 저장' 하나다. 등록 진입점은 soft 로 둔다(2026-09-19 U9). */}
        <button className="softButton compact" onClick={requestCreateEvent} type="button">
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
                const isDirtyEvent = isSchoolCalendarEventDirty(event, draftEvents[event.eventId]);
                const eventLabel = formatCalendarSummaryLabel(draftEvent);
                return (
                  <article
                    className={isDirtyEvent ? "schoolDateEventEditor dirtySchoolDateEvent" : "schoolDateEventEditor"}
                    key={event.eventId}
                    style={{ "--school-color": eventColor }}
                  >
                    <div className="schoolDateEventEditorTop">
                      <div>
                        <strong>{eventLabel}</strong>
                        <span>{event.type === "examPeriod" ? `${draftEvent.date} ~ ${draftEvent.endDate || draftEvent.date}` : draftEvent.date}</span>
                      </div>
                      <div className="schoolDateEventActions">
                        {isReadonlyEvent ? <span>읽기 전용 일정</span> : event.derived ? <span>시험관리 연동</span> : null}
                        {isDirtyEvent ? <span className="schoolDateEventDirtyMark">변경됨</span> : null}
                        <OverflowMenu
                          items={canEditEventDetails
                            ? [{
                                key: "delete",
                                label: "일정 삭제",
                                // 폼 모달의 deleteEditingAcademicEvent 와 같은 확인 문구를 거친다(2026-09-19 U9 · exams-19).
                                onSelect: () => {
                                  if (typeof window !== "undefined" && !window.confirm(`${formatCalendarEventLabel(event)}을 삭제할까요?`)) return;
                                  setHasRequestedSave(true);
                                  onDeleteEvent?.(event.eventId);
                                },
                                tone: "danger"
                              }]
                            : []}
                          label={`${eventLabel} 추가 작업`}
                        />
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
      {dirtyEvents.length > 0 || (saveState !== "idle" && events.length > 0) ? (
        <StickySaveBar
          className="schoolDateStickySaveBar"
          label="학사일정"
          message={hasRequestedSave && saveState === "failed" && saveMessage
            ? saveMessage
            : dirtyEvents.length > 0 ? `${dirtyEvents.length}개 일정 변경됨` : ""}
          saveState={hasRequestedSave && saveState === "failed"
            ? "failed"
            : dirtyEvents.length > 0 && saveState !== "saving" ? "dirty" : saveState}
        >
          <button className="softButton compact" disabled={busy || dirtyEvents.length === 0} onClick={revertDirtyEvents} type="button">
            되돌리기
          </button>
          <button className="primaryButton compact" disabled={busy || dirtyEvents.length === 0} onClick={saveDirtyEvents} type="button">
            변경 저장
          </button>
        </StickySaveBar>
      ) : null}
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
  saveState = {},
  schools = []
}) {
  const mathExamItems = Array.isArray(newEvent.mathExamItems) ? newEvent.mathExamItems : [];
  // saveState 는 페이지 공용 schoolCalendarSaveState 객체 그대로다. 모달을 열기 전의 '저장 완료/실패' 가
  // 새 등록 화면에 그대로 보이면 오해를 부르므로, 열 때의 객체와 같으면 아직 시도 전(idle)으로 본다.
  // 저장 함수는 매번 새 객체를 set 하므로 이 모달에서 시도한 뒤에는 항상 달라진다(2026-09-19 U9 · exams-18).
  const [openedSaveState] = useState(saveState);
  const modalSaveState = saveState === openedSaveState ? { state: "idle", message: "" } : saveState;
  const modalSaveStatus = modalSaveState.state || "idle";
  const hasDate = Boolean(newEvent.date);
  const requiredDateHint = newEvent.type === "mathExam" ? "시험 날짜를 입력하세요" : "시작일을 입력하세요";
  // label 은 grid 라 텍스트와 표식을 한 span 에 묶어야 같은 줄에 남는다. 표식은 aria-hidden 이라 접근 가능한 이름은 그대로다.
  const requiredLabel = (text) => (
    <span>{text}<span aria-hidden="true" className="schoolEventRequiredMark"> *</span></span>
  );

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
                {requiredLabel("시작일")}
                <input aria-required="true" type="date" value={newEvent.date} onChange={(event) => onUpdateEventDraft?.((current) => ({ ...current, date: event.target.value }))} />
              </label>
              <label>
                종료일
                <input type="date" value={newEvent.endDate} onChange={(event) => onUpdateEventDraft?.((current) => ({ ...current, endDate: event.target.value }))} />
              </label>
            </div>
            {!isEditingEvent ? (
              <div className="examSubjectBox schoolExamBundleBox">
                <SectionHeader
                  actions={<button className="softButton compact" onClick={onAddMathExamItem} type="button">+ 수학시험 추가</button>}
                  density="slim"
                  title="수학시험 날짜"
                  titleAs="strong"
                />
                {/* 행 순서·라벨은 시험정보 수정 모달(ExamPrepEditModal)의 리피터와 같다: 날짜 → 학년 → 과목 → 메모 → ×.
                    마지막 한 행의 × 는 비활성으로 두지 않고 렌더하지 않는다(docs/ui-row-actions.md R1·R4, 2026-09-19 U9). */}
                <div className="mathExamItemStack">
                  {mathExamItems.map((item, index) => (
                    <div className="mathExamItemRow" key={item.id}>
                      <label>
                        수학시험 날짜
                        <input type="date" value={item.date} onChange={(event) => onUpdateMathExamItem?.(item.id, "date", event.target.value)} />
                      </label>
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
                      <label className="mathExamItemMemo">
                        메모
                        <input value={item.memo} onChange={(event) => onUpdateMathExamItem?.(item.id, "memo", event.target.value)} placeholder={`${index + 1}번째 수학시험 메모`} />
                      </label>
                      {mathExamItems.length > 1 ? (
                        <button aria-label={`${index + 1}번째 수학시험 삭제`} className="iconButton" onClick={() => onRemoveMathExamItem?.(item.id)} type="button">
                          ×
                        </button>
                      ) : null}
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
                {requiredLabel("시험 날짜")}
                <input aria-required="true" type="date" value={newEvent.date} onChange={(event) => onUpdateEventDraft?.((current) => ({ ...current, date: event.target.value, endDate: event.target.value }))} />
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
              {requiredLabel("시작일")}
              <input aria-required="true" type="date" value={newEvent.date} onChange={(event) => onUpdateEventDraft?.((current) => ({ ...current, date: event.target.value }))} />
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
        {/* 저장 상태와 실패 사유를 모달 안(푸터 위)에 그린다. 페이지의 SchoolCalendarSaveNotice 는 백드롭 뒤라
            모달이 열린 동안 보이지 않는다(2026-09-19 U9 · exams-18/modals-04). 상태 전이는 부모 그대로다. */}
        {modalSaveStatus !== "idle" ? (
          <div className="schoolEventFormStatus">
            <InlineSaveStatus label="학사일정" saveState={modalSaveStatus} />
            {modalSaveStatus === "failed" && modalSaveState.message ? (
              <p className="schoolEventFormSaveError" role="alert">{modalSaveState.message}</p>
            ) : null}
          </div>
        ) : null}
        <ModalFooter className="schoolEventFormFooter">
          {isEditingEvent ? (
            <button className="dangerSoftButton" onClick={onDeleteEditingEvent} type="button">
              {newEvent.type === "examPeriod" ? "시험기간 삭제" : "일정 삭제"}
            </button>
          ) : null}
          <div className="schoolEventFormFooterActions">
            <button className="softButton" onClick={onClose} type="button">취소</button>
            <button className="primaryButton" disabled={busy || !hasDate} onClick={onSubmit} type="button">
              {isEditingEvent ? "변경 저장" : newEvent.type === "examPeriod" ? "시험일정 묶음 등록" : "일정 등록"}
            </button>
          </div>
          {!hasDate ? <small className="schoolEventFormRequiredHint" role="alert">{requiredDateHint}</small> : null}
        </ModalFooter>
      </fieldset>
    </Modal>
  );
}
