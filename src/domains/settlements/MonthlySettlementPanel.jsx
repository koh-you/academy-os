import { useEffect, useMemo, useState } from "react";
import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";
import { MetricCard } from "../../shared/components/MetricCard.jsx";
import { Modal } from "../../shared/components/Modal.jsx";
import { StickySaveBar } from "../../shared/components/StickySaveBar.jsx";
import {
  buildMonthlySettlementSummary,
  buildStudentSettlementRow,
  formatSettlementHours,
  formatSettlementPercent,
  formatSettlementWon,
  getCurrentKoreaMonthKey,
  getDateDayKey,
  getFixedAmountAfterScheduleChange,
  getMonthlySettlementRateLabel,
  getMonthRange,
  getMonthlySettlementStudents,
  getSettlementAttendanceLabel,
  listMonthDates,
  monthlySettlementFactor,
  normalizeMonthlySettlementStudentSetting,
  scheduleTextFromRules
} from "./monthlySettlement.js";
import "./monthlySettlement.css";

const settlementModeOptions = [
  { label: "재원생 · 월정액", value: "fixed" },
  { label: "신입생 · 회차/시수", value: "new" },
  { label: "퇴원생 · 회차/시수", value: "withdrawn" }
];
const calendarDayLabels = ["일", "월", "화", "수", "목", "금", "토"];
const localDraftPrefix = "academy-os.monthlyInstructorSettlementDraft.v1";

function getLocalDraftKey(monthKey) {
  return `${localDraftPrefix}.${monthKey}`;
}

function readLocalDraft(monthKey, savedUpdatedAt = "") {
  try {
    const stored = JSON.parse(window.localStorage.getItem(getLocalDraftKey(monthKey)) || "null");
    if (!stored || stored.baseUpdatedAt !== savedUpdatedAt || stored.month?.monthKey !== monthKey) return null;
    return stored.month;
  } catch {
    return null;
  }
}

function writeLocalDraft(month, baseUpdatedAt = "") {
  try {
    window.localStorage.setItem(getLocalDraftKey(month.monthKey), JSON.stringify({
      baseUpdatedAt,
      month
    }));
  } catch {
    // localStorage is a recovery aid; explicit Supabase save remains authoritative.
  }
}

function clearLocalDraft(monthKey) {
  try {
    window.localStorage.removeItem(getLocalDraftKey(monthKey));
  } catch {
    // Ignore unavailable localStorage.
  }
}

function createMonthDraft({
  classTemplates,
  lessons,
  monthKey,
  savedMonth,
  students
}) {
  const sourceSettings = savedMonth?.studentSettings && typeof savedMonth.studentSettings === "object"
    ? savedMonth.studentSettings
    : {};
  const visibleStudents = getMonthlySettlementStudents({
    lessons,
    monthKey,
    students
  });
  return {
    monthKey,
    studentSettings: {
      ...sourceSettings,
      ...Object.fromEntries(visibleStudents.map((student) => [
        student.studentId,
        normalizeMonthlySettlementStudentSetting(sourceSettings[student.studentId], {
          classTemplates,
          monthKey,
          student
        })
      ]))
    },
    updatedAt: savedMonth?.updatedAt || ""
  };
}

function MonthlySettlementCalendar({ monthKey, onClose, row }) {
  const eventsByDate = useMemo(() => {
    const grouped = new Map();
    [
      ...row.regularEvents,
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
      subtitle={`${monthKey} 수업일지 기준 · 정규 ${row.regularCount}회 ${formatSettlementHours(row.regularHours)} · 보충 ${row.makeupCount}회`}
      title={`${row.student.name} 월별 출결·수업`}
    >
      <div className="monthlySettlementCalendarLegend">
        <span><i className="regular" />정규</span>
        <span><i className="makeup" />보충 · 계산 제외</span>
        <span><i className="special" />특강 · 별도 정산</span>
      </div>
      <div className="monthlySettlementCalendar" role="grid">
        {calendarDayLabels.map((label) => (
          <strong className="monthlySettlementCalendarDayLabel" key={label}>{label}</strong>
        ))}
        {Array.from({ length: leadingBlankCount }, (_, index) => (
          <span className="monthlySettlementCalendarBlank" key={`blank_${index}`} />
        ))}
        {monthDates.map((date) => {
          const events = eventsByDate.get(date) ?? [];
          return (
            <article className="monthlySettlementCalendarDate" key={date}>
              <b>{Number(date.slice(-2))}</b>
              <div>
                {events.map((event) => (
                  <span
                    className={`monthlySettlementCalendarEvent ${event.eventType} ${event.isForecast ? "forecast" : ""}`}
                    key={event.eventId}
                    title={`${event.startTime}-${event.endTime} · ${event.className || event.label}`}
                  >
                    {event.eventType === "regular"
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
      <div className="monthlySettlementCalendarSummary">
        <span>정산 인정: {row.recognizedRegularCount}회 · {formatSettlementHours(row.recognizedRegularHours)}</span>
        <span>출석 {row.actualStatusCounts.present ?? 0} · 지각 {row.actualStatusCounts.late ?? 0} · 대기 {row.actualStatusCounts.pending ?? 0} · 결석 {(row.actualStatusCounts.absent ?? 0) + (row.actualStatusCounts.excused ?? 0)}</span>
        <span>보충: {row.makeupCount}회 · {formatSettlementHours(row.makeupHours)} · 정규 금액에는 추가하지 않음</span>
      </div>
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
  const [selectedMonth, setSelectedMonth] = useState(getCurrentKoreaMonthKey);
  const [draftMonth, setDraftMonth] = useState(null);
  const [isDirty, setIsDirty] = useState(false);
  const [selectedCalendarStudentId, setSelectedCalendarStudentId] = useState("");
  const [saveMessage, setSaveMessage] = useState("");
  const savedMonth = settlementState?.months?.[selectedMonth] ?? null;
  const savedUpdatedAt = savedMonth?.updatedAt || "";

  useEffect(() => {
    const baseDraft = createMonthDraft({
      classTemplates,
      lessons,
      monthKey: selectedMonth,
      savedMonth,
      students
    });
    const recoveredDraft = typeof window !== "undefined"
      ? readLocalDraft(selectedMonth, savedUpdatedAt)
      : null;
    const hasNewStudents = Object.keys(baseDraft.studentSettings).some(
      (studentId) => !savedMonth?.studentSettings?.[studentId]
    );
    setDraftMonth(recoveredDraft ?? baseDraft);
    setIsDirty(Boolean(recoveredDraft || !savedMonth || hasNewStudents));
    setSaveMessage(
      recoveredDraft
        ? "저장하지 않은 월별 정산 작업을 복구했습니다."
        : !savedMonth
          ? "이 달의 기본 정산 스냅샷을 확인한 뒤 저장해 주세요."
          : hasNewStudents ? "이 달의 기존 스냅샷에 새 학생이 추가되었습니다. 확인 후 저장해 주세요." : ""
    );
    setSelectedCalendarStudentId("");
  }, [classTemplates, lessons, savedMonth, savedUpdatedAt, selectedMonth, students]);

  const visibleStudents = useMemo(
    () => getMonthlySettlementStudents({
      lessons,
      monthKey: selectedMonth,
      students
    }),
    [lessons, selectedMonth, students]
  );
  const rows = useMemo(() => visibleStudents.map((student) => buildStudentSettlementRow({
    classTemplates,
    lessons,
    monthKey: selectedMonth,
    records,
    setting: draftMonth?.studentSettings?.[student.studentId],
    student
  })), [classTemplates, draftMonth, lessons, records, selectedMonth, visibleStudents]);
  const summary = useMemo(() => buildMonthlySettlementSummary(rows), [rows]);
  const selectedCalendarRow = rows.find((row) => row.student.studentId === selectedCalendarStudentId) ?? null;
  const effectiveSaveState = saveState === "saving"
    ? "saving"
    : saveState === "failed"
      ? "failed"
      : isDirty
        ? "dirty"
        : saveState === "saved" ? "saved" : "idle";

  function updateStudentSetting(studentId, field, value) {
    setDraftMonth((current) => {
      if (!current) return current;
      const student = students.find((item) => item.studentId === studentId) ?? {};
      const currentSetting = normalizeMonthlySettlementStudentSetting(
        current.studentSettings?.[studentId],
        { classTemplates, monthKey: selectedMonth, student }
      );
      const nextSetting = {
        ...currentSetting,
        [field]: value
      };
      if (field === "scheduleText") {
        nextSetting.fixedAmount = getFixedAmountAfterScheduleChange({
          classTemplates,
          currentFixedAmount: currentSetting.fixedAmount,
          nextScheduleText: value,
          previousScheduleText: currentSetting.scheduleText,
          student
        });
      }
      const nextMonth = {
        ...current,
        studentSettings: {
          ...current.studentSettings,
          [studentId]: nextSetting
        }
      };
      writeLocalDraft(nextMonth, savedUpdatedAt);
      return nextMonth;
    });
    setIsDirty(true);
    setSaveMessage("변경사항이 있습니다. 월별 스냅샷으로 저장해 주세요.");
  }

  function handleModeChange(row, mode) {
    updateStudentSetting(row.student.studentId, "mode", mode);
    if (mode === "new" && !row.setting.startDate) {
      updateStudentSetting(
        row.student.studentId,
        "startDate",
        row.firstEverRegularDate || row.firstActualRegularDate || getMonthRange(selectedMonth).startDate
      );
    }
    if (mode === "withdrawn") {
      updateStudentSetting(
        row.student.studentId,
        "endDate",
        String(row.student.withdrawnAt || row.lastActualRegularDate || getMonthRange(selectedMonth).endDate).slice(0, 10)
      );
    }
  }

  async function handleSave() {
    if (!draftMonth || !onSaveMonth || saveState === "saving") return;
    const normalizedStudentSettings = {
      ...draftMonth.studentSettings,
      ...Object.fromEntries(visibleStudents.map((student) => [
        student.studentId,
        normalizeMonthlySettlementStudentSetting(
          draftMonth.studentSettings?.[student.studentId],
          { classTemplates, monthKey: selectedMonth, student }
        )
      ]))
    };
    const nextMonth = {
      ...draftMonth,
      studentSettings: normalizedStudentSettings,
      updatedAt: new Date().toISOString()
    };
    setSaveMessage("Supabase 저장 후 같은 월을 다시 조회해 확인하고 있습니다.");
    try {
      const persistedMonth = await onSaveMonth(nextMonth);
      clearLocalDraft(selectedMonth);
      setDraftMonth(persistedMonth);
      setIsDirty(false);
      setSaveMessage("Supabase 재조회 값이 현재 월별 정산과 일치합니다.");
    } catch (error) {
      writeLocalDraft(nextMonth, savedUpdatedAt);
      setIsDirty(true);
      setSaveMessage(error?.message || "저장에 실패했습니다. 작업 내용은 이 기기의 임시 초안에 남아 있습니다.");
    }
  }

  return (
    <section className="panel fullPanel monthlySettlementPanel">
      <div className="sectionHeader monthlySettlementHeader">
        <div>
          <span className="eyebrow">운영</span>
          <h1>월별 수업 정산</h1>
          <p className="muted">
            선택한 달의 수업일지 명단을 정산 원천으로 봅니다. 재원생은 수업 횟수·시수와 무관하게 월 고정금액,
            신입·퇴원생만 수업일지의 인정 기간 회차·시수 비율로 계산합니다.
          </p>
        </div>
        <div className="monthlySettlementMonthControl">
          <label>
            정산월
            <input type="month" value={selectedMonth} onChange={(event) => setSelectedMonth(event.target.value)} />
          </label>
          <InlineSaveStatus label="월별 정산" saveState={effectiveSaveState} />
        </div>
      </div>

      <div className="monthlySettlementRuleNotice">
        <strong>계산 기준</strong>
        <span>학생 상태 필터 없이 해당 월 수업일지 명단을 그대로 표시합니다.</span>
        <span>12회 또는 4.2주 환산을 사용하지 않습니다.</span>
        <span>출석·지각·대기는 정산 포함, 결석도 별도 차감 요청이 없으면 자동 차감하지 않습니다.</span>
        <span>보충은 달력에 별도로 남기되 정규 금액을 추가하지 않습니다.</span>
        <span>정산 제외는 학생·수업일지를 삭제하지 않고 이 달 합계에서만 0원 처리합니다.</span>
        <span>중등 기본 420,000원 · 중등 주 6시간 308,000원 · 고등 주 6시간 341,000원 · 고등 기본 450,000원</span>
      </div>

      <div className="metricGrid monthlySettlementMetrics">
        <MetricCard
          hint="학생별 월정액·부분월 금액·수동 조정 합계"
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
          hint="학생별 별도 입력한 특강 기준 총액"
          icon="+"
          label="특강 기준 총액"
          value={formatSettlementWon(summary.specialGrossAmount)}
        />
        <MetricCard
          hint="비율 50% · 원천징수 3.3% · 카드수수료 1.5%"
          icon="✓"
          label="특강 예상 수령액"
          tone="blue"
          value={formatSettlementWon(summary.specialNetAmount)}
        />
        <MetricCard
          hint={`고정 상수 ${formatSettlementPercent(monthlySettlementFactor)}`}
          icon="="
          label="이번 달 총 예상 수령액"
          tone="green"
          value={formatSettlementWon(summary.totalNetAmount)}
        />
      </div>

      {summary.unsetRateCount > 0 ? (
        <div className="monthlySettlementRateWarning">
          단가 미설정 학생 {summary.unsetRateCount}명은 총액에서 0원으로 표시됩니다. 시수별 단가표를 받은 뒤 학생별 고정금액을 입력해 주세요.
        </div>
      ) : null}
      {summary.excludedStudentCount > 0 ? (
        <div className="monthlySettlementExcludedNotice">
          정산 제외 {summary.excludedStudentCount}명은 정규·특강·조정 합계에서 0원 처리됩니다. 행의 정산 복원으로 언제든 되돌릴 수 있습니다.
        </div>
      ) : null}

      <div className="monthlySettlementTableWrap">
        <table className="monthlySettlementTable">
          <thead>
            <tr>
              <th>학생</th>
              <th>계산 방식</th>
              <th>월 고정금액</th>
              <th>월별 스케줄</th>
              <th>인정 기간</th>
              <th>횟수·시수 참고</th>
              <th>정규 적용금액</th>
              <th>특강 총액</th>
              <th>조정</th>
              <th>메모</th>
              <th>정산 처리</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const setting = row.setting;
              const parsedScheduleText = scheduleTextFromRules(setting.scheduleText);
              return (
                <tr
                  className={setting.excluded ? "monthlySettlementRowExcluded" : ""}
                  key={row.student.studentId}
                >
                  <td className="monthlySettlementStudentCell">
                    <strong>{row.student.name}</strong>
                    <span>{row.student.grade || "학년 미입력"} · {row.student.schoolName || "학교 미입력"}</span>
                    {row.isNewCandidate && setting.mode === "fixed" ? <em>이번 달 최초 수업 · 신입 여부 확인</em> : null}
                    {row.student.withdrawnAt ? <em>퇴원일 {String(row.student.withdrawnAt).slice(0, 10)}</em> : null}
                  </td>
                  <td>
                    <select
                      disabled={setting.excluded}
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
                        : `기간 비율 ${formatSettlementPercent(row.partialRatio)}`}
                    </small>
                  </td>
                  <td>
                    <div className="monthlySettlementMoneyInput">
                      <input
                        disabled={setting.excluded}
                        min="0"
                        placeholder="단가 미설정"
                        type="number"
                        value={setting.fixedAmount}
                        onChange={(event) => updateStudentSetting(row.student.studentId, "fixedAmount", event.target.value)}
                      />
                      <span>원</span>
                    </div>
                    <small>
                      {setting.fixedAmount === ""
                        ? "단가 미설정"
                        : `${getMonthlySettlementRateLabel(row.student, setting.scheduleText)} · 학생별 수정 가능`}
                    </small>
                  </td>
                  <td className="monthlySettlementScheduleCell">
                    <input
                      disabled={setting.excluded}
                      placeholder="예: 월수금 19:00-22:00"
                      value={setting.scheduleText}
                      onChange={(event) => updateStudentSetting(row.student.studentId, "scheduleText", event.target.value)}
                    />
                    <small>
                      {parsedScheduleText || "요일·시간 형식을 확인해 주세요."}
                      {row.weeklyScheduleHours > 0 ? ` · 주 ${formatSettlementHours(row.weeklyScheduleHours)}` : ""}
                    </small>
                  </td>
                  <td>
                    {setting.mode === "fixed" ? (
                      <span className="monthlySettlementFixedPeriod">{getMonthRange(selectedMonth).startDate}<br />~ {getMonthRange(selectedMonth).endDate}</span>
                    ) : (
                      <div className="monthlySettlementPeriodInputs">
                        <input
                          disabled={setting.excluded}
                          max={getMonthRange(selectedMonth).endDate}
                          min={getMonthRange(selectedMonth).startDate}
                          type="date"
                          value={setting.startDate}
                          onChange={(event) => updateStudentSetting(row.student.studentId, "startDate", event.target.value)}
                        />
                        <input
                          disabled={setting.excluded}
                          max={getMonthRange(selectedMonth).endDate}
                          min={getMonthRange(selectedMonth).startDate}
                          type="date"
                          value={setting.endDate}
                          onChange={(event) => updateStudentSetting(row.student.studentId, "endDate", event.target.value)}
                        />
                      </div>
                    )}
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
                      인정 {row.recognizedRegularCount}회 · {formatSettlementHours(row.recognizedRegularHours)}
                    </small>
                    <small>보충 {row.makeupCount}회 · {formatSettlementHours(row.makeupHours)}</small>
                  </td>
                  <td className="monthlySettlementAmountCell">
                    <strong>
                      {setting.excluded
                        ? "정산 제외"
                        : row.hasFixedAmount ? formatSettlementWon(row.regularGrossAmount) : "단가 미설정"}
                    </strong>
                    <span>
                      {setting.excluded
                        ? "이 달 합계 0원"
                        : !row.hasRegularJournal
                          ? "정규 수업일지 없음 · 0원"
                          : setting.mode === "fixed" ? "월정액 전액" : `${formatSettlementWon(row.baseAmount)} + 조정`}
                    </span>
                  </td>
                  <td>
                    <div className="monthlySettlementMoneyInput">
                      <input
                        disabled={setting.excluded}
                        min="0"
                        type="number"
                        value={setting.specialGrossAmount}
                        onChange={(event) => updateStudentSetting(row.student.studentId, "specialGrossAmount", event.target.value)}
                      />
                      <span>원</span>
                    </div>
                    <small>정규와 별도 집계</small>
                  </td>
                  <td>
                    <div className="monthlySettlementMoneyInput signed">
                      <input
                        disabled={setting.excluded}
                        placeholder="+/-"
                        type="number"
                        value={setting.adjustmentAmount}
                        onChange={(event) => updateStudentSetting(row.student.studentId, "adjustmentAmount", event.target.value)}
                      />
                      <span>원</span>
                    </div>
                    <small>요청 차감·추가만 입력</small>
                  </td>
                  <td>
                    <textarea
                      disabled={setting.excluded}
                      placeholder="차감 사유·확인 메모"
                      rows="2"
                      value={setting.note}
                      onChange={(event) => updateStudentSetting(row.student.studentId, "note", event.target.value)}
                    />
                  </td>
                  <td className="monthlySettlementExclusionCell">
                    <button
                      aria-pressed={setting.excluded}
                      className={setting.excluded ? "monthlySettlementRestoreButton" : "monthlySettlementExcludeButton"}
                      onClick={() => updateStudentSetting(row.student.studentId, "excluded", !setting.excluded)}
                      type="button"
                    >
                      {setting.excluded ? "정산 복원" : "정산 제외"}
                    </button>
                    <small>
                      {setting.excluded
                        ? "학생·수업일지는 유지됨"
                        : "이 달 정산에서만 제외"}
                    </small>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {!rows.length ? (
        <div className="monthlySettlementEmpty">이 달에 표시할 재원·수업 학생이 없습니다.</div>
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
          monthKey={selectedMonth}
          onClose={() => setSelectedCalendarStudentId("")}
          row={selectedCalendarRow}
        />
      ) : null}
    </section>
  );
}
