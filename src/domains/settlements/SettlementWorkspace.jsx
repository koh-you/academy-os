import { useState } from "react";
import { MonthlySettlementPanel } from "./MonthlySettlementPanel.jsx";
import { SpecialLectureSettlementPanel } from "./SpecialLectureSettlementPanel.jsx";
import "./settlementWorkspace.css";

const settlementTabs = [
  { id: "monthly", label: "월별 정산" },
  { id: "specialLecture", label: "특강 정산" }
];

export function SettlementWorkspace({
  classTemplates = [],
  lessons = [],
  monthlySaveState = "idle",
  monthlySettlementState,
  onSaveMonthlySettlement,
  onSaveSpecialLectureSettlement,
  records = [],
  specialLectureEnrollments = [],
  specialLectureGuides = [],
  specialLectureSaveState = "idle",
  specialLectureSettlementState,
  students = []
}) {
  const [activeTab, setActiveTab] = useState("monthly");

  return (
    <section className="settlementWorkspace">
      <div className="settlementWorkspaceTabs" role="tablist" aria-label="정산 구분">
        {settlementTabs.map((tab) => (
          <button
            aria-selected={activeTab === tab.id}
            className={activeTab === tab.id ? "active" : ""}
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            role="tab"
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="settlementWorkspacePanel" role="tabpanel">
        {activeTab === "monthly" ? (
          <MonthlySettlementPanel
            classTemplates={classTemplates}
            lessons={lessons}
            records={records}
            saveState={monthlySaveState}
            settlementState={monthlySettlementState}
            students={students}
            onSaveMonth={onSaveMonthlySettlement}
          />
        ) : (
          <SpecialLectureSettlementPanel
            saveState={specialLectureSaveState}
            settlementState={specialLectureSettlementState}
            specialLectureEnrollments={specialLectureEnrollments}
            specialLectureGuides={specialLectureGuides}
            students={students}
            onSaveState={onSaveSpecialLectureSettlement}
          />
        )}
      </div>
    </section>
  );
}
