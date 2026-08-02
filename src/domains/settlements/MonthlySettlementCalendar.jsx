import { useMemo } from "react";
import { Modal } from "../../shared/components/Modal.jsx";
import { StickySaveBar } from "../../shared/components/StickySaveBar.jsx";
import {
  formatSettlementHours,
  getDateDayKey,
  getSettlementAttendanceLabel,
  getSettlementAttendanceTone,
  listMonthDates
} from "./monthlySettlement.js";

const calendarDayLabels = ["일", "월", "화", "수", "목", "금", "토"];

export function MonthlySettlementCalendar({
  isDirty,
  monthKey,
  onClose,
  onRegularCountChange,
  onSave,
  row,
  saveMessage,
  saveState
}) {
  const eventsByDate = useMemo(() => {
    const grouped = new Map();
    [
      ...row.regularEvents,
      ...row.closureReplacementEvents,
      ...row.makeupEvents,
      ...row.specialEvents
    ].forEach((event) => {
      grouped.set(event.date, [...(grouped.get(event.date) ?? []), event]);
    });
    return grouped;
  }, [row]);
  const monthDates = listMonthDates(monthKey);
  const leadingBlankCount = monthDates.length
    ? ["sun", "mon", "tue", "wed", "thu", "fri", "sat"].indexOf(getDateDayKey(monthDates[0]))
    : 0;
  return (
    <Modal
      className="monthlySettlementCalendarModal"
      onClose={onClose}
      scrollable
      subtitle={`${monthKey} 수업일지 기준 · 정규 ${row.regularCount}회 ${formatSettlementHours(row.regularHours)} · 보충 ${row.makeupCount}회`}
      title={`${row.student.name} 월별 출결·수업`}
    >
      <div className="monthlySettlementCalendarLegend">
        <span><i className="attendance-present" />출석</span>
        <span><i className="attendance-absent" />결석</span>
        <span><i className="attendance-late" />지각</span>
        <span><i className="attendance-pending" />대기</span>
        <span><i className="regularClosure" />휴강 · 회차 포함</span>
        <span><i className="makeup" />보충 · 계산 제외</span>
        <span><i className="special" />특강 · 별도 정산</span>
      </div>
      <section
        aria-label={`${row.student.name} ${monthKey} 월별 출결·수업 달력`}
        className="monthlySettlementCalendarShell"
        role="region"
        tabIndex={0}
      >
        <div aria-label="월별 출결·수업 일정" className="monthlySettlementCalendar" role="grid">
          {calendarDayLabels.map((label) => (
            <strong className="monthlySettlementCalendarDayLabel" key={label} role="columnheader">{label}</strong>
          ))}
          {Array.from({ length: leadingBlankCount }, (_, index) => (
            <span className="monthlySettlementCalendarBlank" key={`blank_${index}`} />
          ))}
          {monthDates.map((date) => {
            const events = eventsByDate.get(date) ?? [];
            return (
              <article
                aria-label={`${date} · ${events.length ? `${events.length}개 수업` : "수업 없음"}`}
                className="monthlySettlementCalendarDate"
                key={date}
                role="gridcell"
              >
                <b>{Number(date.slice(-2))}</b>
                <div>
                  {events.map((event) => (
                    <span
                      className={`monthlySettlementCalendarEvent ${event.eventType} attendance-${getSettlementAttendanceTone(event.attendanceStatus)} ${event.isForecast ? "forecast" : ""}`}
                      key={event.eventId}
                      title={`${event.startTime}-${event.endTime} · ${event.className || event.label}`}
                    >
                      {event.eventType === "regularClosure"
                        ? "휴강 · 보강 예정"
                        : event.eventType === "regularReplacement"
                        ? `휴강 보충 · ${getSettlementAttendanceLabel(event.attendanceStatus)}`
                        : event.eventType === "regular"
                          ? event.isForecast ? "정규 예정" : getSettlementAttendanceLabel(event.attendanceStatus)
                        : event.eventType === "makeup" ? "보충" : "특강"}
                      {event.startTime ? ` ${event.startTime}` : ""}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <div className="monthlySettlementCalendarSummary">
        <span>
          {row.hasRegularCountOverride
            ? `교사 확정 최종 정규 횟수: ${row.prorationCount}회`
            : row.setting.mode === "fixed"
            ? `시스템 정규 횟수: ${row.systemProrationCount}회`
            : row.setting.mode === "new"
            ? `${row.isNewWithdrawnPeriod ? "신입·퇴원" : "신입"} 정산 횟수: ${row.prorationCount}회`
            : `정산 기준 횟수: ${row.prorationCount}/${row.monthlyScheduleCount}회`}
          {" · "}기간 내 수업일지 {row.recognizedRegularCount}회
        </span>
        <span>출석 {row.actualStatusCounts.present ?? 0} · 지각 {row.actualStatusCounts.late ?? 0} · 대기 {row.actualStatusCounts.pending ?? 0} · 결석 {(row.actualStatusCounts.absent ?? 0) + (row.actualStatusCounts.excused ?? 0)}</span>
        {row.closureCount > 0 ? <span>휴강 {row.closureCount}회 · 정규 회차 포함</span> : null}
        {row.closureReplacementCount > 0 ? <span>연결 보강 {row.closureReplacementCount}회 · 추가 계산 없음</span> : null}
        {(row.actualStatusCounts.pending ?? 0) > 0 ? <span>대기 {row.actualStatusCounts.pending}회 · 수업일지는 있으나 출결 미확정</span> : null}
        <span>보충: {row.makeupCount}회 · {formatSettlementHours(row.makeupHours)} · 정규 금액에는 추가하지 않음</span>
      </div>
      <section className="monthlySettlementFinalCountEditor">
        <div>
          <strong>시스템 계산 횟수</strong>
          <span>{row.systemProrationCount}회</span>
          <small>수업일지·휴강·정산 기간·월별 스케줄 규칙으로 계산</small>
        </div>
        <label>
          <span>최종 정규 횟수</span>
          <input
            aria-label={`${row.student.name} 최종 정규 횟수`}
            min="0"
            onChange={(event) => onRegularCountChange(event.target.value)}
            placeholder={`${row.systemProrationCount}`}
            type="number"
            value={row.setting.regularCountOverride}
          />
          <small>입력하면 이 횟수가 최종 정산과 PDF에 반영됩니다.</small>
        </label>
        {row.hasRegularCountOverride ? (
          <button className="softButton compact" onClick={() => onRegularCountChange("")} type="button">
            시스템 계산 사용
          </button>
        ) : null}
      </section>
      <StickySaveBar
        className="monthlySettlementCalendarSaveBar"
        label={`${row.student.name} 최종 정규 횟수`}
        message={saveMessage || "저장하면 Supabase 재조회 값과 일치하는지 확인합니다."}
        saveState={saveState}
      >
        <button
          className="primaryButton"
          disabled={!isDirty || saveState === "saving"}
          onClick={onSave}
          type="button"
        >
          {saveState === "saving" ? "저장 및 확인 중" : "최종 정규 횟수 저장 및 확인"}
        </button>
      </StickySaveBar>
    </Modal>
  );
}
