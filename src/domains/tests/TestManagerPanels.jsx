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
