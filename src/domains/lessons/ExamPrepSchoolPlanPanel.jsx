import { useEffect, useMemo, useState } from "react";
import { HelpTip } from "../../shared/components/HelpTip.jsx";
import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";
import {
  createExamPrepSchoolPlanDraft,
  getExamPrepSchoolPlanChanges,
  getExamPrepSchoolPlanValidationError,
  hasExamPrepSchoolPlanChanges,
  setExamPrepSchoolPlanDraftField,
  setExamPrepSchoolPlanDraftStudentTime
} from "./examPrepSchoolPlanDraft.js";

/**
 * 2026-10-01 · 날짜 하나에서 학교 단위로 "이번엔 안 한다" 와 "이 학교만 이 시간" 을 정하는 자리.
 *
 * 버튼 체계는 수업일지를 따른다 — 평소에는 읽기 전용이고, `수정` 을 누르면 칸이 열리며,
 * `저장` 하나가 시간·참여를 한 번에 서버로 보낸다. 처음에는 행마다 [시간 저장][이 날짜 제외]
 * 를 달았는데 학교가 다섯이면 버튼이 열 개라 화면이 버튼으로 덮였고, 제외하면 그 행이 사라져
 * 저장 표시도 같이 사라져서 저장이 됐는지 알 수 없었다(2026-10-01 보고).
 *
 * 제외한 학교도 같은 목록에 "이 날짜 제외" 로 남는다. 따로 칩으로 빼 두면 어디서 되돌리는지
 * 찾기 어렵고 줄이 하나 더 생긴다.
 */
export function ExamPrepSchoolPlanPanel({
  excludedSchools = [],
  lesson = {},
  onSavePlan,
  schoolRows = [],
  studentRows = []
}) {
  const initialDraft = useMemo(
    () => createExamPrepSchoolPlanDraft({ excludedSchools, schoolRows, studentRows }),
    [excludedSchools, schoolRows, studentRows]
  );
  const [draft, setDraft] = useState(initialDraft);
  const [isEditing, setIsEditing] = useState(false);
  const [expandedSchoolKey, setExpandedSchoolKey] = useState("");
  const [saveState, setSaveState] = useState({ message: "", state: "idle" });

  // 저장 성공으로 서버 값이 바뀌면 초안이 그 값을 따라간다. 편집 중에는 사람이 입력하던 값을
  // 지키려고 건드리지 않는다 — 저장은 명시적인 `저장` 버튼에서만 일어난다.
  useEffect(() => {
    if (isEditing) return;
    setDraft(initialDraft);
  }, [initialDraft, isEditing]);

  useEffect(() => {
    setIsEditing(false);
    setExpandedSchoolKey("");
    setSaveState({ message: "", state: "idle" });
  }, [lesson.lessonId]);

  const changes = getExamPrepSchoolPlanChanges(draft, initialDraft);
  const isDirty = hasExamPrepSchoolPlanChanges(changes);
  const validationError = isDirty ? getExamPrepSchoolPlanValidationError(draft, changes) : "";
  const isSaving = saveState.state === "saving";
  const studentRowsBySchoolKey = useMemo(() => {
    const map = new Map();
    draft.schools.forEach((school) => {
      map.set(
        school.schoolKey,
        studentRows.filter((row) => school.studentIds.includes(row.studentId))
      );
    });
    return map;
  }, [draft.schools, studentRows]);

  function updateSchool(schoolKey, field, value) {
    setDraft((current) => setExamPrepSchoolPlanDraftField(current, schoolKey, field, value));
    setSaveState({ message: "", state: "dirty" });
  }

  function updateStudentTime(studentId, field, value) {
    setDraft((current) => setExamPrepSchoolPlanDraftStudentTime(current, studentId, field, value));
    setSaveState({ message: "", state: "dirty" });
  }

  function startEditing() {
    setDraft(initialDraft);
    setIsEditing(true);
    setSaveState({ message: "", state: "idle" });
  }

  function cancelEditing() {
    setDraft(initialDraft);
    setIsEditing(false);
    setExpandedSchoolKey("");
    setSaveState({ message: "", state: "idle" });
  }

  async function save() {
    if (validationError) {
      setSaveState({ message: validationError, state: "failed" });
      return;
    }
    setSaveState({ message: "Supabase 저장·재조회 확인 중", state: "saving" });
    try {
      await onSavePlan(changes);
      setIsEditing(false);
      setExpandedSchoolKey("");
      setSaveState({ message: describeSavedChanges(changes), state: "saved" });
    } catch (error) {
      setSaveState({ message: error.message || "저장에 실패했습니다. 입력은 유지됩니다.", state: "failed" });
    }
  }

  return (
    <section className="panel examPrepSchoolPlanPanel">
      <div className="examPrepSchoolPlanHeader">
        <div>
          <span className="eyebrow">{lesson.date} 학교별 참여</span>
          <div className="helpTipTitleRow">
            <h3>학교별 참여 · 시간</h3>
            <HelpTip
              label="학교별 참여 · 시간"
              text="이 날짜만 학교 단위로 조정합니다. 체크를 풀면 그 학교는 이 날짜에서 빠지고 재생성해도 유지됩니다. 시간은 이 날짜의 그 학교 학생에게만 적용되고 다른 회차는 그대로입니다."
            />
          </div>
        </div>
        <div className="examPrepSchoolPlanHeaderActions">
          {isEditing ? (
            <>
              <button className="softButton compact" disabled={isSaving} onClick={cancelEditing} type="button">취소</button>
              <button className="primaryButton compact" disabled={isSaving || !isDirty} onClick={save} type="button">
                {isSaving ? "저장 중" : "저장"}
              </button>
            </>
          ) : (
            <button className="softButton compact" onClick={startEditing} type="button">수정</button>
          )}
        </div>
      </div>

      <ul className="examPrepSchoolPlanList">
        {draft.schools.map((school) => {
          const schoolStudentRows = studentRowsBySchoolKey.get(school.schoolKey) ?? [];
          const isExpanded = expandedSchoolKey === school.schoolKey;
          return (
            <li
              className={`examPrepSchoolPlanRow${school.isIncluded ? "" : " excluded"}`}
              key={school.schoolKey}
            >
              {/* 2026-10-02 · 학교 줄과 학생 줄이 같은 3열 격자를 쓴다(이름 / 시간 / 작업).
                  전에는 학교 줄만 끝에 버튼이 있어 학생 줄의 시간 칸이 더 오른쪽으로 밀렸다. */}
              <div className="examPrepSchoolPlanRowMain">
                <div className="examPrepSchoolPlanIdentity">
                  {isEditing ? (
                    <label className="examPrepSchoolPlanInclude">
                      <input
                        aria-label={`${school.schoolName} 이 날짜 참여`}
                        checked={school.isIncluded}
                        disabled={isSaving}
                        onChange={(event) => updateSchool(school.schoolKey, "isIncluded", event.target.checked)}
                        type="checkbox"
                      />
                      <strong>{school.schoolName}</strong>
                    </label>
                  ) : (
                    <strong className="examPrepSchoolPlanName">{school.schoolName}</strong>
                  )}
                  <span className="examPrepSchoolPlanMeta">
                    {school.isIncluded ? `${school.studentIds.length}명` : "이 날짜 제외"}
                  </span>
                </div>
                <div className="examPrepSchoolPlanTimes">
                  {school.isIncluded ? (
                    isEditing ? (
                      <>
                        <input
                          aria-label={`${school.schoolName} 시작 시간`}
                          disabled={isSaving}
                          onChange={(event) => updateSchool(school.schoolKey, "startTime", event.target.value)}
                          type="time"
                          value={school.startTime}
                        />
                        <span aria-hidden="true">~</span>
                        <input
                          aria-label={`${school.schoolName} 종료 시간`}
                          disabled={isSaving}
                          onChange={(event) => updateSchool(school.schoolKey, "endTime", event.target.value)}
                          type="time"
                          value={school.endTime}
                        />
                      </>
                    ) : (
                      <span className="examPrepSchoolPlanTimeLabel">
                        {school.isMixedTime
                          ? "학생별 시간 다름"
                          : school.startTime && school.endTime
                            ? `${school.startTime}-${school.endTime}`
                            : "시간 미정"}
                      </span>
                    )
                  ) : null}
                </div>
                <div className="examPrepSchoolPlanRowAction">
                  {/* 학생별로 시간이 다른 학교는 학교 한 줄로는 못 고친다. 그 학교만 펼쳐
                      학생 칸을 열다(2026-10-01 요청). 저장은 같은 저장 버튼 하나가 맡는다. */}
                  {isEditing && school.isIncluded && schoolStudentRows.length > 1 ? (
                    <button
                      aria-expanded={isExpanded}
                      className="softButton compact examPrepSchoolPlanExpandButton"
                      disabled={isSaving}
                      onClick={() => setExpandedSchoolKey(isExpanded ? "" : school.schoolKey)}
                      type="button"
                    >
                      학생별 시간
                    </button>
                  ) : null}
                </div>
              </div>

              {isEditing && isExpanded ? (
                <ul className="examPrepSchoolPlanStudentList">
                  {schoolStudentRows.map((studentRow) => (
                    <li key={studentRow.studentId}>
                      <div className="examPrepSchoolPlanIdentity">
                        <span className="examPrepSchoolPlanStudentName">{studentRow.name}</span>
                      </div>
                      <div className="examPrepSchoolPlanTimes">
                        <input
                          aria-label={`${studentRow.name} 시작 시간`}
                          disabled={isSaving}
                          onChange={(event) => updateStudentTime(studentRow.studentId, "startTime", event.target.value)}
                          type="time"
                          value={draft.studentTimes[studentRow.studentId]?.startTime ?? ""}
                        />
                        <span aria-hidden="true">~</span>
                        <input
                          aria-label={`${studentRow.name} 종료 시간`}
                          disabled={isSaving}
                          onChange={(event) => updateStudentTime(studentRow.studentId, "endTime", event.target.value)}
                          type="time"
                          value={draft.studentTimes[studentRow.studentId]?.endTime ?? ""}
                        />
                      </div>
                      <div className="examPrepSchoolPlanRowAction" />
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>

      {isEditing && expandedSchoolKey ? (
        <small className="muted" role="note">
          학생별 시간을 고치면 그 학교의 시작·종료 입력은 무시됩니다.
        </small>
      ) : null}

      {saveState.state === "idle" ? null : (
        <div aria-label="학교별 참여 저장 상태" className="examPrepSchoolPlanStatus" role="status">
          <InlineSaveStatus label="학교별 참여" saveState={saveState.state} />
          {saveState.message ? <span>{saveState.message}</span> : null}
        </div>
      )}
    </section>
  );
}

// 저장 뒤에 무엇이 반영됐는지 한 줄로 남긴다 — 제외한 행은 목록에서 "이 날짜 제외" 로만
// 바뀌어 저장이 됐는지 알기 어려웠다(2026-10-01 보고).
function describeSavedChanges(changes = {}) {
  const parts = [];
  if (changes.toExclude?.length) parts.push(`제외 ${changes.toExclude.map((entry) => entry.schoolName).join(", ")}`);
  if (changes.toInclude?.length) parts.push(`다시 포함 ${changes.toInclude.map((entry) => entry.schoolName).join(", ")}`);
  if (changes.schoolTimes?.length) parts.push(`학교 시간 ${changes.schoolTimes.length}곳`);
  if (changes.studentTimes?.length) parts.push(`학생 시간 ${changes.studentTimes.length}명`);
  return `${parts.join(" · ")} 저장 완료 · 서버 재조회 일치`;
}
