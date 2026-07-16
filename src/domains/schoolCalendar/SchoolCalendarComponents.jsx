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
