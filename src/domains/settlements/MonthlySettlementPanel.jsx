import { useEffect, useMemo, useState } from "react";
import { DataTableShell } from "../../shared/components/DataTableShell.jsx";
import { FilterBar } from "../../shared/components/FilterBar.jsx";
import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";
import { MetricCard } from "../../shared/components/MetricCard.jsx";
import { Modal } from "../../shared/components/Modal.jsx";
import { SectionHeader } from "../../shared/components/SectionHeader.jsx";
import { StickySaveBar } from "../../shared/components/StickySaveBar.jsx";
import {
  applyMonthlySettlementJournalMode,
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
  getNewStudentSessionRateLabel,
  getSettlementAttendanceLabel,
  listMonthDates,
  monthlySettlementFactor,
  normalizeMonthlySettlementStudentSetting,
  scheduleTextFromRules
} from "./monthlySettlement.js";
import "./monthlySettlement.css";

const settlementModeOptions = [
  { label: "재원생 · 월정액", value: "fixed" },
  { label: "신입생 · 첫 수업~말일/퇴원일", value: "new" },
  { label: "퇴원생 · 1일~마지막 수업", value: "withdrawn" }
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
        applyMonthlySettlementJournalMode(sourceSettings[student.studentId], {
          classTemplates,
          lessons,
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
      scrollable
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
        <span>
          {row.setting.mode === "new"
            ? `${row.isNewWithdrawnPeriod ? "신입·퇴원" : "신입"} 정산 횟수: ${row.prorationCount}회`
            : `정산 기준 횟수: ${row.prorationCount}/${row.monthlyScheduleCount}회`}
          {" · "}기간 내 수업일지 {row.recognizedRegularCount}회
        </span>
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
    const resolvedDraft = recoveredDraft
      ? createMonthDraft({
          classTemplates,
          lessons,
          monthKey: selectedMonth,
          savedMonth: recoveredDraft,
          students
        })
      : baseDraft;
    const hasNewStudents = Object.keys(baseDraft.studentSettings).some(
      (studentId) => !savedMonth?.studentSettings?.[studentId]
    );
    const hasJournalAutoModeChanges = Object.entries(resolvedDraft.studentSettings).some(
      ([studentId, setting]) =>
        setting.modeSource === "lesson_journal" &&
        (
          savedMonth?.studentSettings?.[studentId]?.mode !== "new" ||
          savedMonth?.studentSettings?.[studentId]?.modeSource !== "lesson_journal"
        )
    );
    setDraftMonth(resolvedDraft);
    setIsDirty(Boolean(recoveredDraft || !savedMonth || hasNewStudents || hasJournalAutoModeChanges));
    setSaveMessage(
      recoveredDraft
        ? hasJournalAutoModeChanges
          ? "저장하지 않은 월별 정산 작업을 복구하고, 수업일지 최초 수업 기준 신입생 계산을 자동 반영했습니다."
          : "저장하지 않은 월별 정산 작업을 복구했습니다."
        : hasJournalAutoModeChanges
          ? "수업일지에서 이번 달 최초 정규수업이 확인된 학생을 신입생 회당 계산으로 자동 반영했습니다. 확인 후 저장해 주세요."
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
  const activeRows = useMemo(
    () => rows.filter((row) => !row.setting.excluded),
    [rows]
  );
  const excludedRows = useMemo(
    () => rows.filter((row) => row.setting.excluded),
    [rows]
  );
  const summary = useMemo(
    () => buildMonthlySettlementSummary(rows),
    [rows]
  );
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
      if (field === "mode") {
        nextSetting.modeSource = "teacher";
      }
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
  }

  async function handleSave() {
    if (!draftMonth || !onSaveMonth || saveState === "saving") return;
    const rowByStudentId = new Map(rows.map((row) => [row.student.studentId, row]));
    const monthRange = getMonthRange(selectedMonth);
    const normalizedStudentSettings = {
      ...draftMonth.studentSettings,
      ...Object.fromEntries(visibleStudents.map((student) => [
        student.studentId,
        (() => {
          const normalizedSetting = normalizeMonthlySettlementStudentSetting(
            draftMonth.studentSettings?.[student.studentId],
            { classTemplates, monthKey: selectedMonth, student }
          );
          const row = rowByStudentId.get(student.studentId);
          return {
            ...normalizedSetting,
            endDate: normalizedSetting.mode === "withdrawn" ||
              (normalizedSetting.mode === "new" && row?.isNewWithdrawnPeriod)
              ? row?.periodEnd || ""
              : monthRange.endDate,
            startDate: normalizedSetting.mode === "new"
              ? row?.periodStart || ""
              : monthRange.startDate
          };
        })()
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
      <SectionHeader
        actions={(
          <FilterBar
            className="monthlySettlementMonthControl"
            label="월별 정산 대상 월"
            result={<InlineSaveStatus label="월별 정산" saveState={effectiveSaveState} />}
          >
            <label className="filterBarField">
              <span>정산월</span>
              <input type="month" value={selectedMonth} onChange={(event) => setSelectedMonth(event.target.value)} />
            </label>
          </FilterBar>
        )}
        className="monthlySettlementHeader"
        descriptionNode={(
          <p className="muted">
            선택한 달의 수업일지 명단을 정산 원천으로 봅니다. 재원생은 수업 횟수·시수와 무관하게 월 고정금액,
            신입생은 첫 수업부터 말일까지의 수업 횟수에 회당 단가를 곱하고, 퇴원생은 1일부터 마지막 수업까지의 월별 스케줄 횟수 비율로 계산합니다.
            같은 달에 첫 수업과 퇴원이 모두 있으면 첫 수업일부터 퇴원일까지의 수업 횟수만 계산합니다.
          </p>
        )}
        eyebrow="운영"
        title="월별 수업 정산"
      />

      <div className="monthlySettlementRuleNotice">
        <strong>계산 기준</strong>
        <span>학생 상태 필터 없이 해당 월 수업일지 명단을 그대로 표시합니다.</span>
        <span>12회 또는 4.2주 환산을 사용하지 않습니다.</span>
        <span>신입생은 월 전체 횟수로 나누지 않고 첫 수업~말일 횟수 × 회당 단가로 계산합니다.</span>
        <span>신입생이 같은 달에 퇴원하면 첫 수업일~퇴원일 사이의 월별 스케줄 횟수 × 회당 단가로 계산합니다.</span>
        <span>신입 시작일과 기존 퇴원생 마지막 수업일은 수업일지로 정하고, 같은 달 신입·퇴원생의 종료일은 학생 퇴원일을 사용합니다.</span>
        <span>출석·지각·대기는 정산 포함, 결석도 별도 차감 요청이 없으면 자동 차감하지 않습니다.</span>
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
              <th>월별 스케줄</th>
              <th>자동 정산 기간</th>
              <th>횟수·시수 참고</th>
              <th>정규 적용금액</th>
              <th>조정</th>
              <th>메모</th>
              <th>정산 처리</th>
            </tr>
          </thead>
          <tbody>
            {activeRows.map((row) => {
              const setting = row.setting;
              const isNewMode = setting.mode === "new";
              const isNewWithdrawnMode = isNewMode && row.isNewWithdrawnPeriod;
              const parsedScheduleText = scheduleTextFromRules(setting.scheduleText);
              const hasScheduleWarning =
                setting.mode !== "fixed" &&
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
                      <em className="monthlySettlementRowWarning">스케줄 수정 필요</em>
                    ) : null}
                    {row.isJournalAutoNew ? (
                      <em className="monthlySettlementAutoMode">
                        수업일지 자동 · {row.firstEverRegularDate} 첫 수업
                      </em>
                    ) : null}
                    {row.isNewCandidate && setting.mode === "fixed" ? (
                      <em>수업일지 최초 수업 · 월정액 수기 적용</em>
                    ) : null}
                    {row.student.withdrawnAt ? <em>퇴원일 {String(row.student.withdrawnAt).slice(0, 10)}</em> : null}
                  </td>
                  <td>
                    <select
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
                        : isNewMode && row.monthlyScheduleCount > 0
                          ? `${row.prorationCount}회 × ${formatSettlementWon(setting.newStudentSessionAmount)}`
                          : row.monthlyScheduleCount > 0
                          ? `횟수 비율 ${formatSettlementPercent(row.partialRatio)} · ${row.prorationCount}/${row.monthlyScheduleCount}회`
                          : "월별 스케줄 확인 필요"}
                    </small>
                  </td>
                  <td>
                    <div className="monthlySettlementMoneyInput">
                      <input
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
                  <td className="monthlySettlementScheduleCell">
                    <input
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
                      {isNewMode && row.monthlyScheduleCount > 0
                        ? `${isNewWithdrawnMode ? "신입·퇴원" : "신입"} 정산 ${row.prorationCount}회`
                        : row.monthlyScheduleCount > 0
                        ? `정산 기준 ${row.prorationCount}/${row.monthlyScheduleCount}회`
                        : "정산 기준 횟수 계산 불가"}
                    </small>
                    <small>기간 내 수업일지 {row.recognizedRegularCount}회 · {formatSettlementHours(row.recognizedRegularHours)}</small>
                    <small>보충 {row.makeupCount}회 · {formatSettlementHours(row.makeupHours)}</small>
                  </td>
                  <td className="monthlySettlementAmountCell">
                    <strong>
                      {row.hasApplicableRate ? formatSettlementWon(row.regularGrossAmount) : "단가 미설정"}
                    </strong>
                    <span>
                      {!row.hasRegularJournal
                        ? "정규 수업일지 없음 · 0원"
                        : setting.mode === "fixed"
                          ? "월정액 전액"
                          : isNewMode && row.monthlyScheduleCount > 0
                            ? `${row.prorationCount}회 × ${formatSettlementWon(setting.newStudentSessionAmount)} + 조정`
                          : row.monthlyScheduleCount > 0
                            ? `${formatSettlementWon(row.baseAmount)} + 조정`
                            : "월별 스케줄 형식 확인 필요 · 0원"}
                    </span>
                  </td>
                  <td>
                    <div className="monthlySettlementMoneyInput signed">
                      <input
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
                      placeholder="차감 사유·확인 메모"
                      rows="2"
                      value={setting.note}
                      onChange={(event) => updateStudentSetting(row.student.studentId, "note", event.target.value)}
                    />
                  </td>
                  <td className="monthlySettlementExclusionCell">
                    <button
                      className="monthlySettlementExcludeButton"
                      onClick={() => updateStudentSetting(row.student.studentId, "excluded", true)}
                      type="button"
                    >
                      정산 제외
                    </button>
                    <small>이 달 정산표에서 숨김</small>
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
          monthKey={selectedMonth}
          onClose={() => setSelectedCalendarStudentId("")}
          row={selectedCalendarRow}
        />
      ) : null}
    </section>
  );
}
