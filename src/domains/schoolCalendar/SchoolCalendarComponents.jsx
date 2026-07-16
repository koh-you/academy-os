export function SchoolCalendarSaveNotice({ saveState = {} }) {
  return (
    <div className={`schoolCalendarSaveNotice ${saveState.state || "idle"}`} role="status">
      <strong>학사일정 저장</strong>
      <span>{saveState.message}</span>
    </div>
  );
}
