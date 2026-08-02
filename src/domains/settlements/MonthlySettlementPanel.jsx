import { FilterBar } from "../../shared/components/FilterBar.jsx";
import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";
import { MetricCard } from "../../shared/components/MetricCard.jsx";
import { SectionHeader } from "../../shared/components/SectionHeader.jsx";
import { StickySaveBar } from "../../shared/components/StickySaveBar.jsx";
import {
  formatSettlementPercent,
  formatSettlementWon,
  monthlySettlementFactor
} from "./monthlySettlement.js";
import { MonthlySettlementCalendar } from "./MonthlySettlementCalendar.jsx";
import { MonthlySettlementRegularTable } from "./MonthlySettlementRegularTable.jsx";
import { useMonthlySettlementController } from "./useMonthlySettlementController.js";
import "./monthlySettlement.css";

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

      <MonthlySettlementRegularTable
        activeRows={activeRows}
        excludedRows={excludedRows}
        handleModeChange={handleModeChange}
        rows={rows}
        selectedMonth={selectedMonth}
        setSelectedCalendarStudentId={setSelectedCalendarStudentId}
        updateStudentSetting={updateStudentSetting}
      />

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
