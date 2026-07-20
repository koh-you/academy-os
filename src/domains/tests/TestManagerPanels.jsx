import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";

export function TestManagerTabs({ activeTab = "attempts", onChange }) {
  return (
    <div className="localTabs materialTabs">
      <button className={activeTab === "attempts" ? "active" : ""} onClick={() => onChange?.("attempts")} type="button">
        응시 기록
      </button>
      <button className={activeTab === "history" ? "active" : ""} onClick={() => onChange?.("history")} type="button">
        학생 이력
      </button>
    </div>
  );
}

export function TestAttemptPanelHeader({ testResultSaveState = "idle" }) {
  return (
    <div className="sectionHeader">
      <div>
        <h1>응시 기록</h1>
        <p className="muted">오늘 본 데일리/단원/누적 테스트와 학생별 결과만 기록합니다. 저장된 결과는 같은 날짜 수업 알림톡에 반영됩니다.</p>
      </div>
      <InlineSaveStatus label="응시 기록" saveState={testResultSaveState} />
    </div>
  );
}

export function TestAttemptFormGrid({
  attemptClassTemplateId = "all",
  attemptDate = "",
  attemptMemo = "",
  attemptSubject = "",
  attemptTestKind = "",
  attemptTitle = "",
  attemptTotalQuestions = "",
  attemptUnit = "",
  onAttemptClassTemplateIdChange,
  onAttemptDateChange,
  onAttemptMemoChange,
  onAttemptSubjectChange,
  onAttemptTestKindChange,
  onAttemptTitleChange,
  onAttemptTotalQuestionsChange,
  onAttemptUnitChange,
  subjectOptions = [],
  templates = [],
  testKindOptions = []
}) {
  return (
    <div className="testAttemptFormGrid">
      <label>
        응시일
        <input type="date" value={attemptDate} onChange={(event) => onAttemptDateChange?.(event.target.value)} />
      </label>
      <label>
        대상 반
        <select value={attemptClassTemplateId} onChange={(event) => onAttemptClassTemplateIdChange?.(event.target.value)}>
          <option value="all">전체 학생</option>
          {templates.map((template) => (
            <option key={template.classTemplateId} value={template.classTemplateId}>{template.name}</option>
          ))}
        </select>
      </label>
      <label>
        테스트 종류
        <select value={attemptTestKind} onChange={(event) => onAttemptTestKindChange?.(event.target.value)}>
          {testKindOptions.map((option) => <option key={option.id} value={option.id}>{option.label}</option>)}
        </select>
      </label>
      <label>
        테스트명
        <input value={attemptTitle} onChange={(event) => onAttemptTitleChange?.(event.target.value)} placeholder="예: 평면좌표 데일리 01" />
      </label>
      <label>
        과목
        <select value={attemptSubject} onChange={(event) => onAttemptSubjectChange?.(event.target.value)}>
          {subjectOptions.map((subject) => <option key={subject} value={subject}>{subject}</option>)}
        </select>
      </label>
      <label>
        범위/단원
        <input value={attemptUnit} onChange={(event) => onAttemptUnitChange?.(event.target.value)} placeholder="예: 평면좌표" />
      </label>
      <label>
        총 문항 수
        <input min="1" type="number" value={attemptTotalQuestions} onChange={(event) => onAttemptTotalQuestionsChange?.(event.target.value)} placeholder="예: 20" />
      </label>
      <label>
        회차 메모
        <input value={attemptMemo} onChange={(event) => onAttemptMemoChange?.(event.target.value)} placeholder="선택 입력" />
      </label>
    </div>
  );
}

export function TestAttemptMeta({
  isEditing = false,
  kindLabel = "",
  subject = "",
  totalQuestions = ""
}) {
  return (
    <div className="testAttemptMeta">
      <span>{kindLabel}</span>
      <span>{subject}</span>
      <span>{totalQuestions || "-"}문항</span>
      {isEditing ? <span>기존 기록 수정 중</span> : <span>새 응시 회차</span>}
    </div>
  );
}

export function TestAttemptTable({
  attemptDrafts = {},
  onUpdateAttemptDraft,
  statusOptions = [],
  students = []
}) {
  if (!students.length) {
    return (
      <EmptyState className="examPrepEmptyState">
        <strong>대상 학생이 없습니다.</strong>
        <span>반 선택 또는 학생관리의 기본 반 배정을 확인해 주세요.</span>
      </EmptyState>
    );
  }

  return (
    <div className="testAttemptTable">
      <div className="testAttemptRow head">
        <span>학생</span>
        <span>응시 상태</span>
        <span>정답 수</span>
        <span>미응시 사유</span>
      </div>
      {students.map((student) => {
        const draft = attemptDrafts[student.studentId] ?? {};
        return (
          <div className="testAttemptRow" key={student.studentId}>
            <strong>{student.name}</strong>
            <select value={draft.status ?? ""} onChange={(event) => onUpdateAttemptDraft?.(student.studentId, "status", event.target.value)}>
              {statusOptions.map((option) => <option key={option.id || "blank"} value={option.id}>{option.label}</option>)}
            </select>
            <input
              disabled={draft.status === "not_taken"}
              min="0"
              type="number"
              value={draft.correctCount ?? ""}
              onChange={(event) => onUpdateAttemptDraft?.(student.studentId, "correctCount", event.target.value)}
              placeholder="정답"
            />
            <input
              disabled={draft.status === "taken"}
              value={draft.notTakenReason ?? ""}
              onChange={(event) => onUpdateAttemptDraft?.(student.studentId, "notTakenReason", event.target.value)}
              placeholder="예: 결석, 다음 시간 응시"
            />
          </div>
        );
      })}
    </div>
  );
}

export function TestAttemptActions({
  attemptError = "",
  canSave = false,
  currentTestSession = null,
  isSaving = false,
  onDeleteTestSession,
  onResetAttemptForm,
  onSaveAttemptSession
}) {
  return (
    <div className="testAttemptActions">
      {attemptError ? <span className="saveState save-failed">{attemptError}</span> : null}
      <button className="softButton" onClick={onResetAttemptForm} type="button">새 회차 입력</button>
      {currentTestSession ? (
        <button className="dangerSoftButton" onClick={() => onDeleteTestSession?.(currentTestSession.testSessionId)} type="button">
          이 회차 삭제
        </button>
      ) : null}
      <button className="saveDraftButton" disabled={!canSave || isSaving} onClick={onSaveAttemptSession} type="button">
        {isSaving ? "저장 중" : "응시 기록 저장"}
      </button>
    </div>
  );
}

export function RecentTestSessionList({
  getKindLabel,
  onOpenSession,
  sessions = [],
  totalCount = 0
}) {
  return (
    <section className="testSessionList">
      <div className="sectionHeader slim">
        <div>
          <h2>최근 응시 회차</h2>
          <p className="muted">수업일지 알림톡은 같은 날짜와 학생의 기록을 자동으로 읽습니다.</p>
        </div>
        <span className="countBadge">{totalCount}건</span>
      </div>
      {sessions.slice(0, 12).map((session) => (
        <button
          className="testSessionItem"
          key={session.testSessionId}
          onClick={() => onOpenSession?.(session)}
          type="button"
        >
          <strong>{session.testDate} · {session.testTitle}</strong>
          <span>{session.className || "전체 학생"} · {getKindLabel?.(session.testKind)} · {session.totalQuestions || "-"}문항</span>
        </button>
      ))}
      {!totalCount ? <EmptyState className="emptyState compact">저장된 응시 회차가 없습니다.</EmptyState> : null}
    </section>
  );
}

export function StudentTestHistoryPanel({
  getKindLabel,
  onStudentChange,
  rows = [],
  selectedStudentId = "",
  students = []
}) {
  return (
    <section className="panel materialPanel testHistoryPanel">
      <div className="sectionHeader">
        <div>
          <h1>학생별 테스트 이력</h1>
          <p className="muted">학생이 지금까지 본 데일리/단원/누적 테스트 결과를 한곳에서 확인합니다.</p>
        </div>
        <select value={selectedStudentId} onChange={(event) => onStudentChange?.(event.target.value)}>
          {students.map((student) => (
            <option key={student.studentId} value={student.studentId}>{student.name}</option>
          ))}
        </select>
      </div>
      <div className="testHistoryList">
        {rows.map(({ session, attempt }) => (
          <article className="testHistoryItem" key={attempt.testAttemptId}>
            <div>
              <strong>{session.testDate} · {session.testTitle}</strong>
              <span>{session.className || "전체 학생"} · {getKindLabel?.(session.testKind)} · {session.totalQuestions || "-"}문항</span>
            </div>
            <div>
              <b>{attempt.status === "not_taken" ? "미응시" : `${session.totalQuestions || "-"}문항 중 ${attempt.correctCount || "-"}문항 정답`}</b>
              <small>{attempt.status === "not_taken" ? (attempt.notTakenReason || "사유 미입력") : (session.unit || session.subject || "범위 미입력")}</small>
            </div>
          </article>
        ))}
        {!rows.length ? (
          <EmptyState className="examPrepEmptyState">
            <strong>테스트 이력이 없습니다.</strong>
            <span>응시 기록 탭에서 학생별 결과를 저장하면 여기에 누적됩니다.</span>
          </EmptyState>
        ) : null}
      </div>
    </section>
  );
}
