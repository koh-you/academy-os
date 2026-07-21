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
    <div className={["portalTabs", className].filter(Boolean).join(" ")}>
      {tabs.map(([id, label]) => (
        <button className={activeTab === id ? "active" : ""} key={id} onClick={() => onChange(id)} type="button">
          {label}
        </button>
      ))}
    </div>
  );
}
