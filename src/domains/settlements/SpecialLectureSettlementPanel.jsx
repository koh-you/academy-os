import { useEffect, useMemo, useState } from "react";
import { DataTableShell } from "../../shared/components/DataTableShell.jsx";
import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";
import { MetricCard } from "../../shared/components/MetricCard.jsx";
import { SectionHeader } from "../../shared/components/SectionHeader.jsx";
import { StickySaveBar } from "../../shared/components/StickySaveBar.jsx";
import {
  formatSettlementHours,
  formatSettlementPercent,
  formatSettlementWon,
  monthlySettlementFactor
} from "./monthlySettlement.js";
import {
  buildSpecialLectureSettlementRows,
  buildSpecialLectureSettlementSummary,
  createDefaultSpecialLectureSettlementState,
  normalizeSpecialLectureSettlementSetting,
  normalizeSpecialLectureSettlementState
} from "./specialLectureSettlement.js";
import { buildSpecialLectureAttendanceSummary } from "./settlementAttendance.js";
import "./specialLectureSettlement.css";

const localDraftKey = "academy-os.specialLectureInstructorSettlementDraft.v1";
const settlementModeOptions = [
  { label: "선택 회차 자동", value: "auto" },
  { label: "유료 회차 조정", value: "sessionCount" },
  { label: "금액 직접 입력", value: "fixedAmount" }
];

function readLocalDraft(savedUpdatedAt = "") {
  try {
    const stored = JSON.parse(window.localStorage.getItem(localDraftKey) || "null");
    if (!stored || stored.baseUpdatedAt !== savedUpdatedAt) return null;
    return stored.state;
  } catch {
    return null;
  }
}

function writeLocalDraft(state, baseUpdatedAt = "") {
  try {
    window.localStorage.setItem(localDraftKey, JSON.stringify({
      baseUpdatedAt,
      state
    }));
  } catch {
    // localStorage is only a recovery aid; explicit Supabase save remains authoritative.
  }
}

function clearLocalDraft() {
  try {
    window.localStorage.removeItem(localDraftKey);
  } catch {
    // Ignore unavailable localStorage.
  }
}

function getGuideLabel(guide = {}) {
  return guide.shortTitle || guide.title || "특강명 미입력";
}

export function SpecialLectureSettlementPanel({
  lessons = [],
  onSaveState,
  records = [],
  saveState = "idle",
  settlementState,
  specialLectureEnrollments = [],
  specialLectureGuides = [],
  students = []
}) {
  const normalizedSavedState = useMemo(
    () => normalizeSpecialLectureSettlementState(
      settlementState || createDefaultSpecialLectureSettlementState()
    ),
    [settlementState]
  );
  const savedUpdatedAt = normalizedSavedState.updatedAt;
  const [draftState, setDraftState] = useState(normalizedSavedState);
  const [isDirty, setIsDirty] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  useEffect(() => {
    const recoveredDraft = typeof window !== "undefined"
      ? readLocalDraft(savedUpdatedAt)
      : null;
    setDraftState(normalizeSpecialLectureSettlementState(recoveredDraft ?? normalizedSavedState));
    setIsDirty(Boolean(recoveredDraft));
    setSaveMessage(recoveredDraft ? "저장하지 않은 특강 정산 작업을 복구했습니다." : "");
  }, [normalizedSavedState, savedUpdatedAt]);

  const rows = useMemo(
    () => buildSpecialLectureSettlementRows({
      settlementState: draftState,
      specialLectureEnrollments,
      specialLectureGuides,
      students
    }).map((row) => ({
      ...row,
      attendance: buildSpecialLectureAttendanceSummary({
        guideId: row.guide.specialLectureGuideId,
        lessons,
        records,
        sessions: row.sessions,
        studentId: row.student.studentId
      })
    })),
    [
      draftState,
      lessons,
      records,
      specialLectureEnrollments,
      specialLectureGuides,
      students
    ]
  );
  const groupedRows = useMemo(() => {
    const groups = new Map();
    rows.forEach((row) => {
      const guideId = row.guide.specialLectureGuideId;
      groups.set(guideId, [...(groups.get(guideId) ?? []), row]);
    });
    return [...groups.entries()].map(([guideId, guideRows]) => ({
      guide: guideRows[0].guide,
      guideId,
      rows: guideRows
    }));
  }, [rows]);
  const summary = useMemo(() => buildSpecialLectureSettlementSummary(rows), [rows]);
  const effectiveSaveState = saveState === "saving"
    ? "saving"
    : saveState === "failed"
      ? "failed"
      : isDirty
        ? "dirty"
        : saveState === "saved" ? "saved" : "idle";

  function updateSetting(row, field, value) {
    setDraftState((current) => {
      const normalized = normalizeSpecialLectureSettlementState(current);
      const guideId = row.guide.specialLectureGuideId;
      const studentId = row.student.studentId;
      const currentSetting = normalizeSpecialLectureSettlementSetting(
        normalized.guideSettings?.[guideId]?.studentSettings?.[studentId]
      );
      const nextState = {
        ...normalized,
        guideSettings: {
          ...normalized.guideSettings,
          [guideId]: {
            studentSettings: {
              ...(normalized.guideSettings?.[guideId]?.studentSettings ?? {}),
              [studentId]: {
                ...currentSetting,
                [field]: value
              }
            }
          }
        }
      };
      writeLocalDraft(nextState, savedUpdatedAt);
      return nextState;
    });
    setIsDirty(true);
    setSaveMessage("변경사항이 있습니다. 특강 정산 원천으로 저장해 주세요.");
  }

  async function handleSave() {
    if (!onSaveState || !isDirty || saveState === "saving") return;
    const missingReasonRows = rows.filter((row) => row.hasMissingReason);
    if (missingReasonRows.length) {
      setSaveMessage(
        `직접 조정한 ${missingReasonRows.map((row) => row.student.name).join(", ")} 학생의 조정 사유를 입력해 주세요.`
      );
      return;
    }
    const nextState = {
      ...draftState,
      updatedAt: new Date().toISOString()
    };
    setSaveMessage("Supabase 저장 후 특강 정산 원천을 다시 조회해 확인하고 있습니다.");
    try {
      const persistedState = await onSaveState(nextState);
      clearLocalDraft();
      setDraftState(persistedState);
      setIsDirty(false);
      setSaveMessage("Supabase 재조회 값이 현재 특강 정산과 일치합니다.");
    } catch (error) {
      writeLocalDraft(nextState, savedUpdatedAt);
      setIsDirty(true);
      setSaveMessage(error?.message || "저장에 실패했습니다. 작업 내용은 이 기기의 임시 초안에 남아 있습니다.");
    }
  }

  return (
    <section className="panel fullPanel specialLectureSettlementPanel">
      <SectionHeader
        className="specialLectureSettlementHeader"
        descriptionNode={(
          <p className="muted">
            월별 정규 급여와 분리해 특강 전체 과정의 확정 수강 회차를 계산합니다.
            실제 수강 회차는 특강관리 원천을 보존하고, 유료 적용 회차나 직접 확정금액만 이 화면에서 조정합니다.
          </p>
        )}
        eyebrow="운영"
        meta={<InlineSaveStatus label="특강 정산" saveState={effectiveSaveState} />}
        title="특강 정산"
      />

      <div className="specialLectureSettlementRuleNotice">
        <strong>별도 계산 원칙</strong>
        <span>7월·8월처럼 여러 달에 걸쳐도 특강 전체 회차를 한 번에 계산합니다.</span>
        <span>정규 보강 대체는 실제 회차를 삭제하지 않고 유료 회차만 줄입니다.</span>
        <span>별도 합의금액은 금액 직접 입력과 사유를 함께 저장합니다.</span>
        <span>수업일지·출결·특강 명단은 이 화면에서 변경하지 않습니다.</span>
      </div>

      <div className="metricGrid specialLectureSettlementMetrics">
        <MetricCard
          hint={`확정 ${summary.confirmedStudentCount}명 · 미확정 ${summary.pendingStudentCount}명`}
          icon="👥"
          label="특강 정산 대상"
          value={`${rows.length}명`}
        />
        <MetricCard
          hint="특강 전체 과정 · 학생별 조정 반영"
          icon="₩"
          label="특강 기준 총액"
          value={formatSettlementWon(summary.grossAmount)}
        />
        <MetricCard
          hint={`고정 상수 ${formatSettlementPercent(monthlySettlementFactor)}`}
          icon="✓"
          label="특강 예상 수령액"
          tone="green"
          value={formatSettlementWon(summary.netAmount)}
        />
        <MetricCard
          hint={summary.missingReasonCount ? `사유 미입력 ${summary.missingReasonCount}명` : "모든 조정 사유 확인됨"}
          icon="✎"
          label="수동 조정"
          tone={summary.missingReasonCount ? "warning" : "blue"}
          value={`${summary.manualOverrideCount}명`}
        />
      </div>

      {summary.pendingStudentCount ? (
        <div className="monthlySettlementRateWarning">
          회차 계획 미확정 {summary.pendingStudentCount}명은 특강관리에서 확정하기 전까지 0원입니다.
        </div>
      ) : null}
      {summary.missingReasonCount ? (
        <div className="monthlySettlementRateWarning">
          수동 조정 {summary.missingReasonCount}명의 사유가 비어 있어 저장할 수 없습니다.
        </div>
      ) : null}

      {groupedRows.map((group) => (
        <section className="specialLectureSettlementGroup" key={group.guideId}>
          <div className="monthlySettlementSubsectionHeader">
            <div>
              <h2>{getGuideLabel(group.guide)}</h2>
              <p>
                전체 {group.guide.sessions?.length ?? 0}회 ·
                {group.guide.pricingMode === "perHour"
                  ? ` ${formatSettlementWon(group.guide.pricePerHour)}/시간`
                  : ` ${formatSettlementWon(group.guide.pricePerSession)}/회`}
              </p>
            </div>
            <span>특강관리 원천</span>
          </div>
          <DataTableShell className="monthlySettlementTableWrap" label={`${getGuideLabel(group.guide)} 특강 정산`}>
            <table className="specialLectureSettlementTable">
              <thead>
                <tr>
                  <th>학생</th>
                  <th>실제 수강 계획</th>
                  <th>특강 출결</th>
                  <th>정산 방식</th>
                  <th>유료 적용</th>
                  <th>특강 적용금액</th>
                  <th>조정 사유</th>
                </tr>
              </thead>
              <tbody>
                {group.rows.map((row) => {
                  const reasonErrorId = `special-lecture-settlement-reason-${group.guideId}-${row.student.studentId}`;
                  return (
                    <tr
                      className={row.hasMissingReason ? "specialLectureSettlementWarningRow" : undefined}
                      key={`${group.guideId}_${row.student.studentId}`}
                    >
                    <td>
                      <strong>{row.student.name}</strong>
                      <small>{row.student.grade || "학년 미입력"} · {row.student.schoolName || "학교 미입력"}</small>
                      <small>{row.isConfirmed ? "회차 계획 확정" : "회차 계획 미확정"}</small>
                    </td>
                    <td>
                      <strong>{row.sessionCount}회 · {formatSettlementHours(row.totalHours)}</strong>
                      <small>
                        {row.sessions.map((session) =>
                          `${Number(session.dateKey.slice(5, 7))}/${Number(session.dateKey.slice(8, 10))}`
                        ).join(" · ")}
                      </small>
                    </td>
                    <td className="specialLectureAttendanceCell">
                      <strong>일지 {row.attendance.journalCount}/{row.attendance.plannedCount}회</strong>
                      <small>
                        출석 {row.attendance.present} · 지각 {row.attendance.late} ·
                        결석 {row.attendance.absent + row.attendance.excused} · 대기 {row.attendance.pending}
                      </small>
                      {row.attendance.journalMissingCount > 0 ? (
                        <small className="specialLectureAttendanceWarning">
                          수업일지 없음 {row.attendance.journalMissingCount}회
                        </small>
                      ) : null}
                    </td>
                    <td>
                      <select
                        aria-label={`${row.student.name} 특강 정산 방식`}
                        onChange={(event) => updateSetting(row, "mode", event.target.value)}
                        value={row.setting.mode}
                      >
                        {settlementModeOptions.map((option) => (
                          <option
                            disabled={option.value === "sessionCount" && row.guide.pricingMode !== "perSession"}
                            key={option.value}
                            value={option.value}
                          >
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <small>
                        {row.setting.mode === "auto"
                          ? "선택한 전체 회차 자동 계산"
                          : row.setting.mode === "sessionCount"
                            ? "실제 수강 계획은 유지하고 유료 회차만 조정"
                            : "합의한 특강비를 직접 확정"}
                      </small>
                    </td>
                    <td>
                      {row.setting.mode === "sessionCount" ? (
                        <label className="specialLectureSettlementCountInput">
                          <input
                            max={row.sessionCount}
                            min="0"
                            onChange={(event) => updateSetting(row, "billableSessionCount", event.target.value)}
                            type="number"
                            value={row.setting.billableSessionCount}
                          />
                          <span>/ {row.sessionCount}회</span>
                        </label>
                      ) : (
                        <strong>{row.billableSessionCount}회</strong>
                      )}
                      <small>실제 수강 {row.sessionCount}회는 그대로 보존</small>
                    </td>
                    <td>
                      {row.setting.mode === "fixedAmount" ? (
                        <label className="specialLectureSettlementMoneyInput">
                          <input
                            min="0"
                            onChange={(event) => updateSetting(row, "fixedAmount", event.target.value)}
                            type="number"
                            value={row.setting.fixedAmount}
                          />
                          <span>원</span>
                        </label>
                      ) : (
                        <strong>{formatSettlementWon(row.grossAmount)}</strong>
                      )}
                      <small>기본 자동금액 {formatSettlementWon(row.autoAmount)}</small>
                    </td>
                    <td>
                      <textarea
                        aria-describedby={row.hasMissingReason ? reasonErrorId : undefined}
                        aria-invalid={row.hasMissingReason || undefined}
                        aria-label={`${row.student.name} 특강 정산 조정 사유`}
                        className={row.hasMissingReason ? "warning" : undefined}
                        disabled={row.setting.mode === "auto"}
                        onChange={(event) => updateSetting(row, "note", event.target.value)}
                        placeholder={row.setting.mode === "auto" ? "자동 계산" : "조정 사유 필수"}
                        rows="2"
                        value={row.setting.note}
                      />
                      {row.hasMissingReason ? <small className="specialLectureSettlementReasonWarning" id={reasonErrorId}>조정 사유를 입력해 주세요.</small> : null}
                    </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </DataTableShell>
        </section>
      ))}

      {!rows.length ? (
        <div className="monthlySettlementEmpty">
          특강관리에서 확정하거나 검토할 수강 계획이 없습니다.
        </div>
      ) : null}

      <StickySaveBar
        className="specialLectureSettlementSaveBar"
        label="특강 전체과정 정산"
        message={saveMessage || "조정값은 특강 수업일지와 분리된 정산 원천으로 저장됩니다."}
        saveState={effectiveSaveState}
      >
        <button
          className="primaryButton"
          disabled={!isDirty || saveState === "saving" || summary.missingReasonCount > 0}
          onClick={handleSave}
          type="button"
        >
          {saveState === "saving" ? "저장 및 확인 중" : "특강 정산 저장"}
        </button>
      </StickySaveBar>
    </section>
  );
}
