import { DataTableShell } from "../../shared/components/DataTableShell.jsx";
import {
  formatSettlementHours,
  formatSettlementPercent,
  formatSettlementWon,
  getMonthlySettlementRateLabel,
  getMonthRange,
  getNewStudentSessionRateLabel
} from "./monthlySettlement.js";

const settlementModeOptions = [
  { label: "재원생 · 월정액", value: "fixed" },
  { label: "신입생 · 첫 수업~말일/퇴원일", value: "new" },
  { label: "퇴원생 · 1일~마지막 수업", value: "withdrawn" }
];

export function MonthlySettlementRegularTable({
  activeRows = [],
  excludedRows = [],
  handleModeChange,
  rows = [],
  selectedMonth,
  setSelectedCalendarStudentId,
  updateStudentSetting
}) {
  return (
    <>
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
    </>
  );
}
