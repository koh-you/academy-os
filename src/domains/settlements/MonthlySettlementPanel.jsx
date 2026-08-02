import { useMemo } from "react";
import { DataTableShell } from "../../shared/components/DataTableShell.jsx";
import { FilterBar } from "../../shared/components/FilterBar.jsx";
import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";
import { MetricCard } from "../../shared/components/MetricCard.jsx";
import { Modal } from "../../shared/components/Modal.jsx";
import { SectionHeader } from "../../shared/components/SectionHeader.jsx";
import { StickySaveBar } from "../../shared/components/StickySaveBar.jsx";
import {
  formatSettlementHours,
  formatSettlementPercent,
  formatSettlementWon,
  getDateDayKey,
  getMonthlySettlementRateLabel,
  getMonthRange,
  getNewStudentSessionRateLabel,
  getSettlementAttendanceLabel,
  getSettlementAttendanceTone,
  listMonthDates,
  monthlySettlementFactor
} from "./monthlySettlement.js";
import { useMonthlySettlementController } from "./useMonthlySettlementController.js";
import "./monthlySettlement.css";

const settlementModeOptions = [
  { label: "재원생 · 월정액", value: "fixed" },
  { label: "신입생 · 첫 수업~말일/퇴원일", value: "new" },
  { label: "퇴원생 · 1일~마지막 수업", value: "withdrawn" }
];
const calendarDayLabels = ["일", "월", "화", "수", "목", "금", "토"];
function MonthlySettlementCalendar({
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

export function MonthlySettlementPanel({
  classTemplates = [],
  lessons = [],
  onSaveMonth,
  records = [],
  saveState = "idle",
  settlementState,
  students = []
}) {
  const {
    activeRows,
    effectiveSaveState,
    excludedRows,
    handleModeChange,
    handleOpenReportPdf,
    handleSave,
    isDirty,
    rows,
    saveMessage,
    selectedCalendarRow,
    selectedMonth,
    setSelectedCalendarStudentId,
    setSelectedMonth,
    summary,
    updateStudentSetting
  } = useMonthlySettlementController({
    classTemplates,
    lessons,
    onSaveMonth,
    records,
    saveState,
    settlementState,
    students
  });

  return (
    <section className="panel fullPanel monthlySettlementPanel">
      <SectionHeader
        actions={(
          <div className="monthlySettlementHeaderActions">
            <FilterBar
              actions={(
                <button className="softButton monthlySettlementPdfButton" onClick={handleOpenReportPdf} type="button">
                  횟수·금액 PDF
                </button>
              )}
              className="monthlySettlementMonthControl"
              label="월별 정산 대상 월"
              result={<InlineSaveStatus label="월별 정산" saveState={effectiveSaveState} />}
            >
              <label className="filterBarField">
                <span>정산월</span>
                <input type="month" value={selectedMonth} onChange={(event) => setSelectedMonth(event.target.value)} />
              </label>
            </FilterBar>
          </div>
        )}
        className="monthlySettlementHeader"
        descriptionNode={(
          <p className="muted">
            선택한 달의 수업일지 명단을 정산 원천으로 봅니다. 재원생은 수업 횟수·시수와 무관하게 월 고정금액,
            신입생은 첫 수업부터 말일까지 정산 인정 정규 횟수에 회당 단가를 곱하고, 퇴원생은 1일부터 마지막 수업까지의 월별 스케줄 횟수 비율로 계산합니다.
            같은 달에 첫 수업과 퇴원이 모두 있으면 첫 수업일부터 퇴원일까지 정산 인정 정규 횟수만 계산합니다.
          </p>
        )}
        eyebrow="운영"
        title="월별 수업 정산"
      />

      <div className="monthlySettlementRuleNotice">
        <strong>계산 기준</strong>
        <span>학생 상태 필터 없이 해당 월 수업일지 명단을 그대로 표시합니다.</span>
        <span>12회 또는 4.2주 환산을 사용하지 않습니다.</span>
        <span>신입생은 예정 달력이 아니라 첫 수업~말일의 정산 인정 정규 횟수 × 회당 단가로 계산합니다.</span>
        <span>신입생이 같은 달에 퇴원하면 첫 수업일~퇴원일 사이의 정산 인정 정규 횟수 × 회당 단가로 계산합니다.</span>
        <span>신입 시작일과 기존 퇴원생 마지막 수업일은 수업일지로 정하고, 같은 달 신입·퇴원생의 종료일은 학생 퇴원일을 사용합니다.</span>
        <span>출석·지각·대기는 정산 포함, 결석도 별도 차감 요청이 없으면 자동 차감하지 않습니다.</span>
        <span>휴강은 보강 전에도 정규 1회로 포함하고, 연결된 휴강 보충은 추가 회차로 중복 계산하지 않습니다.</span>
        <span>보충은 달력에 별도로 남기되 정규 금액을 추가하지 않습니다.</span>
        <span>정산 제외한 행은 이 달 정산표에서 숨기며, 학생·수업일지 원천은 유지합니다.</span>
        <span>특강비는 이 월별 정산에서 제외하고 운영의 별도 특강 정산에서 전체 과정 기준으로 계산합니다.</span>
        <span>중등 기본 420,000원 · 중등 주 6시간 308,000원 · 고등 주 6시간 341,000원 · 고등 기본 450,000원</span>
        <span>신입생 3타임 회당 단가: 중등 35,000원 · 고등 37,500원</span>
      </div>

      <div className="metricGrid monthlySettlementMetrics">
        <MetricCard
          hint="학생별 월정액·신입 회당 금액·퇴원 부분월 금액·수동 조정 합계"
          icon="₩"
          label="정규 기준 총액"
          value={formatSettlementWon(summary.regularGrossAmount)}
        />
        <MetricCard
          hint="비율 50% · 원천징수 3.3% · 카드수수료 1.5%"
          icon="✓"
          label="정규 예상 수령액"
          tone="blue"
          value={formatSettlementWon(summary.regularNetAmount)}
        />
        <MetricCard
          hint={`고정 상수 ${formatSettlementPercent(monthlySettlementFactor)}`}
          icon="="
          label="이번 달 예상 수령액"
          tone="green"
          value={formatSettlementWon(summary.regularNetAmount)}
        />
      </div>

      {summary.unsetRateCount > 0 ? (
        <div className="monthlySettlementRateWarning">
          단가 미설정 학생 {summary.unsetRateCount}명은 총액에서 0원으로 표시됩니다. 시수별 단가표를 받은 뒤 학생별 고정금액을 입력해 주세요.
        </div>
      ) : null}
      {summary.prorationScheduleMissingCount > 0 ? (
        <div className="monthlySettlementRateWarning">
          신입·퇴원생 {summary.prorationScheduleMissingCount}명의 월별 스케줄 횟수를 읽을 수 없어 0원으로 멈췄습니다. 요일·시간 형식을 확인해 주세요.
        </div>
      ) : null}
      {summary.excludedStudentCount > 0 ? (
        <div className="monthlySettlementExcludedNotice">
          정산 제외 {summary.excludedStudentCount}명은 현재 표와 정규·조정 합계에서 빠졌습니다. 아래 삭제한 정산 행에서 복원할 수 있습니다.
        </div>
      ) : null}

      <div className="monthlySettlementSubsectionHeader">
        <div>
          <h2>정규 수업 정산</h2>
          <p>선택 월의 정규 수업일지 명단과 학생별 월 고정금액을 기준으로 계산합니다. 전체 수업일지에서 이번 달이 첫 정규수업인 학생은 신입생 방식으로 자동 반영하며 수기로 바꿀 수 있습니다.</p>
        </div>
      </div>
      <DataTableShell className="monthlySettlementTableWrap" label="월별 정규 수업 정산">
        <table className="monthlySettlementTable">
          <thead>
            <tr>
              <th>학생</th>
              <th>계산 방식</th>
              <th>기준 금액</th>
              <th>자동 정산 기간</th>
              <th>횟수·시수 참고</th>
              <th>정규 적용금액</th>
              <th>메모</th>
            </tr>
          </thead>
          <tbody>
            {activeRows.map((row) => {
              const setting = row.setting;
              const isNewMode = setting.mode === "new";
              const isNewWithdrawnMode = isNewMode && row.isNewWithdrawnPeriod;
              const hasScheduleWarning =
                setting.mode === "withdrawn" &&
                row.hasRegularJournal &&
                row.monthlyScheduleCount === 0;
              return (
                <tr
                  className={hasScheduleWarning ? "monthlySettlementWarningRow" : undefined}
                  key={row.student.studentId}
                >
                  <td className="monthlySettlementStudentCell">
                    <strong>{row.student.name}</strong>
                    <span>{row.student.grade || "학년 미입력"} · {row.student.schoolName || "학교 미입력"}</span>
                    {hasScheduleWarning ? (
                      <em className="monthlySettlementRowWarning">스케줄 원천 확인 필요</em>
                    ) : null}
                    {row.isJournalAutoNew ? (
                      <em className="monthlySettlementAutoMode">
                        수업일지 자동 · {row.firstEverRegularDate} 첫 수업
                      </em>
                    ) : null}
                    {setting.mode === "withdrawn" && setting.modeSource === "lesson_journal" ? (
                      <em className="monthlySettlementAutoMode">
                        학생 원천 자동 · 퇴원일 {String(row.student.withdrawnAt).slice(0, 10)}
                      </em>
                    ) : null}
                    {row.isNewCandidate && setting.mode === "fixed" ? (
                      <em>수업일지 최초 수업 · 월정액 수기 적용</em>
                    ) : null}
                    {row.student.withdrawnAt ? <em>퇴원일 {String(row.student.withdrawnAt).slice(0, 10)}</em> : null}
                  </td>
                  <td>
                    <select
                      aria-label={`${row.student.name} 정산 방식`}
                      value={setting.mode}
                      onChange={(event) => handleModeChange(row, event.target.value)}
                    >
                      {settlementModeOptions.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                    <small>
                      {setting.mode === "fixed"
                        ? "횟수와 무관하게 전액"
                        : isNewMode
                          ? `${row.prorationCount}회 × ${formatSettlementWon(setting.newStudentSessionAmount)}`
                          : row.monthlyScheduleCount > 0
                          ? `횟수 비율 ${formatSettlementPercent(row.partialRatio)} · ${row.prorationCount}/${row.monthlyScheduleCount}회`
                          : "월별 스케줄 확인 필요"}
                    </small>
                  </td>
                  <td>
                    <div className="monthlySettlementMoneyInput">
                      <input
                        aria-label={`${row.student.name} ${isNewMode ? "신입 회당 단가" : "월 고정금액"}`}
                        min="0"
                        placeholder="단가 미설정"
                        type="number"
                        value={isNewMode ? setting.newStudentSessionAmount : setting.fixedAmount}
                        onChange={(event) => updateStudentSetting(
                          row.student.studentId,
                          isNewMode ? "newStudentSessionAmount" : "fixedAmount",
                          event.target.value
                        )}
                      />
                      <span>원</span>
                    </div>
                    <small>
                      {isNewMode
                        ? setting.newStudentSessionAmount === ""
                          ? "신입 회당 단가 미설정"
                          : `${getNewStudentSessionRateLabel(row.student)} · 학생별 수정 가능`
                        : setting.fixedAmount === ""
                          ? "단가 미설정"
                          : `${getMonthlySettlementRateLabel(row.student, setting.scheduleText)} · 학생별 수정 가능`}
                    </small>
                  </td>
                  <td>
                    <span className="monthlySettlementFixedPeriod">
                      {setting.mode === "new"
                        ? (
                          <>
                            첫 수업 {row.periodStart || "수업일지 없음"}<br />
                            ~ {isNewWithdrawnMode ? "퇴원일" : "말일"} {row.periodEnd}
                          </>
                        )
                        : setting.mode === "withdrawn"
                          ? <>1일 {getMonthRange(selectedMonth).startDate}<br />~ 마지막 수업 {row.periodEnd || "수업일지 없음"}</>
                          : <>{getMonthRange(selectedMonth).startDate}<br />~ {getMonthRange(selectedMonth).endDate}</>}
                    </span>
                  </td>
                  <td>
                    <button
                      className="monthlySettlementCountButton"
                      onClick={() => setSelectedCalendarStudentId(row.student.studentId)}
                      type="button"
                    >
                      정규 {row.regularCount}회 · {formatSettlementHours(row.regularHours)}
                    </button>
                    <small>
                      {row.hasRegularCountOverride
                        ? `최종 정규 ${row.prorationCount}회 · 교사 확정`
                        : setting.mode === "fixed"
                        ? `시스템 정규 ${row.systemProrationCount}회`
                        : isNewMode
                        ? `${isNewWithdrawnMode ? "신입·퇴원" : "신입"} 정산 ${row.prorationCount}회`
                        : row.monthlyScheduleCount > 0
                        ? `정산 기준 ${row.prorationCount}/${row.monthlyScheduleCount}회`
                        : "정산 기준 횟수 계산 불가"}
                    </small>
                    <small>기간 내 수업일지 {row.recognizedRegularCount}회 · {formatSettlementHours(row.recognizedRegularHours)}</small>
                    {row.closureCount > 0 ? <small className="monthlySettlementRuleNote">휴강 {row.closureCount}회 · 정규 회차 포함</small> : null}
                    {row.closureReplacementCount > 0 ? <small className="monthlySettlementRuleNote">연결 보강 {row.closureReplacementCount}회 · 추가 계산 없음</small> : null}
                    {(row.actualStatusCounts.pending ?? 0) > 0 ? <small className="monthlySettlementRuleNote">대기 {row.actualStatusCounts.pending}회 · 출결 미확정</small> : null}
                    <small>보충 {row.makeupCount}회 · {formatSettlementHours(row.makeupHours)}</small>
                  </td>
                  <td className="monthlySettlementAmountCell">
                    <strong>
                      {row.hasApplicableRate ? formatSettlementWon(row.regularGrossAmount) : "단가 미설정"}
                    </strong>
                    <span>
                      {!row.hasRegularJournal && !row.hasRegularCountOverride
                        ? "정규 수업일지 없음 · 0원"
                        : setting.mode === "fixed"
                          ? "월정액 전액"
                          : isNewMode
                            ? `${row.prorationCount}회 × ${formatSettlementWon(setting.newStudentSessionAmount)}`
                          : row.monthlyScheduleCount > 0
                            ? formatSettlementWon(row.baseAmount)
                            : "월별 스케줄 형식 확인 필요 · 0원"}
                      {setting.adjustmentAmount ? ` · 기존 조정 ${formatSettlementWon(setting.adjustmentAmount)}` : ""}
                    </span>
                  </td>
                  <td>
                    <textarea
                      aria-label={`${row.student.name} 정산 조정 사유`}
                      placeholder="차감 사유·확인 메모"
                      rows="2"
                      value={setting.note}
                      onChange={(event) => updateStudentSetting(row.student.studentId, "note", event.target.value)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </DataTableShell>

      {!activeRows.length ? (
        <div className="monthlySettlementEmpty">
          {rows.length
            ? "이 달의 정규 정산 행이 모두 제외되었습니다."
            : "이 달에 표시할 정규 수업일지 학생이 없습니다."}
        </div>
      ) : null}

      {excludedRows.length ? (
        <details className="monthlySettlementExcludedPanel">
          <summary>삭제한 정산 행 {excludedRows.length}명 · 복원</summary>
          <div className="monthlySettlementExcludedList">
            {excludedRows.map((row) => (
              <div key={row.student.studentId}>
                <span>
                  <strong>{row.student.name}</strong>
                  <small>{row.student.grade || "학년 미입력"} · {row.student.schoolName || "학교 미입력"}</small>
                </span>
                <button
                  className="monthlySettlementRestoreButton"
                  onClick={() => updateStudentSetting(row.student.studentId, "excluded", false)}
                  type="button"
                >
                  행 복원
                </button>
              </div>
            ))}
          </div>
        </details>
      ) : null}

      <StickySaveBar
        className="monthlySettlementSaveBar"
        label={`${selectedMonth} 월별 정산`}
        message={saveMessage || "학생별 설정은 이 달의 스냅샷으로 저장됩니다."}
        saveState={effectiveSaveState}
      >
        <button
          className="primaryButton"
          disabled={!isDirty || saveState === "saving"}
          onClick={handleSave}
          type="button"
        >
          {saveState === "saving" ? "저장 및 확인 중" : "월별 정산 저장"}
        </button>
      </StickySaveBar>

      {selectedCalendarRow ? (
        <MonthlySettlementCalendar
          isDirty={isDirty}
          monthKey={selectedMonth}
          onClose={() => setSelectedCalendarStudentId("")}
          onRegularCountChange={(value) => updateStudentSetting(
            selectedCalendarRow.student.studentId,
            "regularCountOverride",
            value
          )}
          onSave={handleSave}
          row={selectedCalendarRow}
          saveMessage={saveMessage}
          saveState={effectiveSaveState}
        />
      ) : null}
    </section>
  );
}
