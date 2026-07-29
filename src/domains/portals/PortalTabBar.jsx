export const studentPortalTabs = [
  ["today", "오늘"],
  ["all", "전체"],
  ["materials", "자료함"],
  ["evaluation", "평가"],
  ["mypage", "마이 페이지"],
  ["curriculum", "커리큘럼"]
];

export const parentPortalTabs = [
  ["reports", "보고서"],
  ["homework", "숙제"],
  ["materials", "자료함"],
  ["attendance", "출결"],
  ["curriculum", "커리큘럼"]
];

export function PortalTabBar({ activeTab, className = "", onChange, tabs }) {
  return (
    <WorkspaceTabs
      className={["portalTabs", className].filter(Boolean).join(" ")}
      label="포털 메뉴"
      variant="secondary"
    >
      {tabs.map(([id, label]) => (
        <button
          aria-selected={activeTab === id}
          className={activeTab === id ? "active" : ""}
          key={id}
          onClick={() => onChange(id)}
          role="tab"
          type="button"
        >
          {label}
        </button>
      ))}
    </WorkspaceTabs>
  );
}
import { WorkspaceTabs } from "../../shared/components/WorkspaceTabs.jsx";
