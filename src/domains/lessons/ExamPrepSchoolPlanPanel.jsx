import { useEffect, useState } from "react";
import { HelpTip } from "../../shared/components/HelpTip.jsx";
import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";
import { normalizeTimeInput } from "./attendance.js";

/**
 * 2026-10-01 · 날짜 하나에서 학교 단위로 "이번엔 안 한다" 와 "이 학교만 이 시간" 을 정하는 자리.
 *
 * 그전에는 수업을 지우면 그날 모든 학교가 사라졌고, 학교를 빼려면 시험정보에서 그 학교의
 * 일요대비 4회를 통째로 빼야 했다. 수업은 날짜당 한 개를 유지하면서 그날 누가 오고 몇 시에
 * 오는지만 학교 단위로 고른다.
 *
 * 저장 경계: 시간은 화면 초안 -> "시간 저장" -> 기존 시험대비 일정 저장(CAS·서버 재조회),
 * 제외는 누르는 즉시 생성 제어에 남고 저장된 수업이면 같은 저장 경로로 명단까지 맞춘다.
 * 그래서 시간 칸은 입력만으로 저장되지 않고, 제외는 되돌릴 수 있는 토글이다.
 */
export function ExamPrepSchoolPlanPanel({
  excludedSchools = [],
  lesson = {},
  onExcludeSchool,
  onIncludeSchool,
  onSaveSchoolTime,
  schoolRows = []
}) {
  const [timeDrafts, setTimeDrafts] = useState({});
  const [rowStates, setRowStates] = useState({});
  const [includeState, setIncludeState] = useState({ message: "", state: "idle" });

  // 다른 수업으로 넘어갈 때만 비운다.
  //
  // 처음에는 명단·시간이 달라지면(rosterKey) 같이 비웠는데, 저장이 성공하면 바로 그 시간이
  // 달라지므로 "서버 재조회 일치" 가 뜨자마자 지워졌다 — 원장님이 저장됐는지 볼 수 없었다.
  // 저장 성공 뒤에는 그 학교의 초안만 지워 서버 값을 따라가게 한다(아래 runRowAction).
  useEffect(() => {
    setTimeDrafts({});
    setRowStates({});
    setIncludeState({ message: "", state: "idle" });
  }, [lesson.lessonId]);

  function getDraft(row, field) {
    return timeDrafts[row.schoolName]?.[field] ?? row[field] ?? "";
  }

  function updateDraft(row, field, value) {
    setTimeDrafts((current) => ({
      ...current,
      [row.schoolName]: { ...current[row.schoolName], [field]: value }
    }));
    setRowStates((current) => ({ ...current, [row.schoolName]: { message: "", state: "dirty" } }));
  }

  function isRowDirty(row) {
    const startTime = normalizeTimeInput(getDraft(row, "startTime"));
    const endTime = normalizeTimeInput(getDraft(row, "endTime"));
    return startTime !== normalizeTimeInput(row.startTime) || endTime !== normalizeTimeInput(row.endTime);
  }

  async function runRowAction(schoolName, action, savingMessage) {
    setRowStates((current) => ({ ...current, [schoolName]: { message: savingMessage, state: "saving" } }));
    try {
      await action();
      // 초안을 비워 이 행이 서버가 돌려준 값을 그대로 보여주게 한다(저장 표시는 남는다).
      setTimeDrafts((current) => {
        const next = { ...current };
        delete next[schoolName];
        return next;
      });
      setRowStates((current) => ({ ...current, [schoolName]: { message: "서버 재조회 일치", state: "saved" } }));
    } catch (error) {
      setRowStates((current) => ({
        ...current,
        [schoolName]: { message: error.message || "저장에 실패했습니다.", state: "failed" }
      }));
    }
  }

  function saveTime(row) {
    return runRowAction(
      row.schoolName,
      () => onSaveSchoolTime({
        endTime: normalizeTimeInput(getDraft(row, "endTime")),
        schoolName: row.schoolName,
        startTime: normalizeTimeInput(getDraft(row, "startTime"))
      }),
      "Supabase 저장·재조회 확인 중"
    );
  }

  function excludeSchool(row) {
    return runRowAction(
      row.schoolName,
      () => onExcludeSchool({ schoolName: row.schoolName }),
      "명단에서 제외하는 중"
    );
  }

  async function includeSchool(schoolName) {
    setIncludeState({ message: "", state: "saving" });
    try {
      await onIncludeSchool({ schoolName });
      setIncludeState({ message: "", state: "idle" });
    } catch (error) {
      setIncludeState({ message: error.message || "다시 포함에 실패했습니다.", state: "failed" });
    }
  }

  const canExclude = schoolRows.length > 1;

  return (
    <section className="panel examPrepSchoolPlanPanel">
      <div className="examPrepSchoolPlanHeader">
        <div>
          <span className="eyebrow">{lesson.date} 학교별 참여</span>
          <div className="helpTipTitleRow">
            <h3>학교별 참여 · 시간</h3>
            <HelpTip
              label="학교별 참여 · 시간"
              text="이 날짜만 학교 단위로 조정합니다. 제외는 재생성해도 유지되고, 시간은 이 날짜의 그 학교 학생에게만 적용됩니다. 다른 회차는 그대로입니다."
            />
          </div>
        </div>
      </div>

      {schoolRows.length ? (
        <ul className="examPrepSchoolPlanList">
          {schoolRows.map((row) => {
            const rowState = rowStates[row.schoolName] ?? { message: "", state: "idle" };
            const isSaving = rowState.state === "saving";
            return (
              <li className="examPrepSchoolPlanRow" key={row.schoolName}>
                <div className="examPrepSchoolPlanIdentity">
                  <strong>{row.schoolName}</strong>
                  <small>{row.studentIds.length}명{row.isMixedTime ? " · 학생별 시간 다름" : ""}</small>
                </div>
                <div className="examPrepSchoolPlanTimes">
                  <label>
                    <span>시작</span>
                    <input
                      aria-label={`${row.schoolName} 시작 시간`}
                      disabled={isSaving}
                      onChange={(event) => updateDraft(row, "startTime", event.target.value)}
                      type="time"
                      value={getDraft(row, "startTime")}
                    />
                  </label>
                  <label>
                    <span>종료</span>
                    <input
                      aria-label={`${row.schoolName} 종료 시간`}
                      disabled={isSaving}
                      onChange={(event) => updateDraft(row, "endTime", event.target.value)}
                      type="time"
                      value={getDraft(row, "endTime")}
                    />
                  </label>
                </div>
                <div className="examPrepSchoolPlanRowActions">
                  <button
                    className="softButton compact"
                    disabled={isSaving || !isRowDirty(row)}
                    onClick={() => saveTime(row)}
                    type="button"
                  >
                    시간 저장
                  </button>
                  {canExclude ? (
                    <button
                      className="dangerSoftButton compact"
                      disabled={isSaving}
                      onClick={() => excludeSchool(row)}
                      type="button"
                    >
                      이 날짜 제외
                    </button>
                  ) : null}
                </div>
                {rowState.state === "idle" ? null : (
                  <div aria-label={`${row.schoolName} 저장 상태`} className="examPrepSchoolPlanRowStatus" role="status">
                    <InlineSaveStatus label={row.schoolName} saveState={rowState.state} />
                    {rowState.message ? <span>{rowState.message}</span> : null}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="inlineNotice">이 날짜에 참여하는 학교가 없습니다.</p>
      )}

      {/* 제외한 학교는 명단에서 사라져 위 목록에 나오지 않는다. 다시 포함할 자리가 없으면
          되돌릴 수 없으므로 따로 남겨 둔다. */}
      {excludedSchools.length ? (
        <div className="examPrepSchoolPlanExcluded">
          <span>이 날짜에서 제외한 학교</span>
          <ul>
            {excludedSchools.map((entry) => (
              <li key={entry.schoolKey}>
                <strong>{entry.schoolName}</strong>
                <button
                  className="softButton compact"
                  disabled={includeState.state === "saving"}
                  onClick={() => includeSchool(entry.schoolName)}
                  type="button"
                >
                  다시 포함
                </button>
              </li>
            ))}
          </ul>
          {includeState.state === "failed" ? (
            <p className="inlineNotice danger" role="status">{includeState.message}</p>
          ) : null}
        </div>
      ) : null}

      {canExclude ? null : (
        <small className="muted" role="note">
          남은 학교가 하나뿐입니다. 이 날짜를 아예 하지 않으려면 아래 일정 삭제를 쓰세요.
        </small>
      )}
    </section>
  );
}
