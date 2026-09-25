import { useState } from "react";
import { HelpTip } from "../../shared/components/HelpTip.jsx";
import { PageHeader } from "../../shared/components/PageHeader.jsx";
import { WorkspaceTabs } from "../../shared/components/WorkspaceTabs.jsx";
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
      {/* 2026-09-26 · 바로 아래 탭이 '월별 정산 / 특강 정산' 이라 상시 노출할 이유가 없다. 계산 단위는 각 탭의
          계산 기준 상자와 저장 바가 그대로 보여 주므로 설명만 제목 옆 물음표로 옮겼다. */}
      <PageHeader
        title="정산"
        titleAdornment={(
          <HelpTip
            label="정산"
            text="정규 수업은 월별로, 특강은 전체 과정 단위로 계산하고 저장 상태를 확인합니다."
          />
        )}
      />

      <WorkspaceTabs className="settlementWorkspaceTabs" label="정산 구분">
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
      </WorkspaceTabs>

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
            lessons={lessons}
            records={records}
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
