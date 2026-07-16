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
