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
