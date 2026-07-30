import { createSidebarMenuGroups } from "./sidebarMenuModel.js";

export function Sidebar({
  academyBrandName,
  activeView,
  isCollapsed,
  isMobileNavigationOpen = false,
  onChangeView,
  onLogout,
  onToggle,
  onToggleMobileNavigation,
  supplementAttention = null,
  today
}) {
  const menuGroups = createSidebarMenuGroups(supplementAttention);
  const activeMenuItem = menuGroups
    .flatMap((group) => group.items)
    .find((item) => item.id === activeView);

  return (
    <aside aria-label="Academy OS 교사 메뉴" className={isCollapsed ? "sidebar collapsed" : "sidebar"}>
      <div className="brandBlock">
        <div className="brandHeader">
          <button
            aria-controls="academy-primary-navigation"
            aria-expanded={!isCollapsed}
            aria-label={isCollapsed ? "좌측 메뉴 펼치기" : "좌측 메뉴 접기"}
            className="sidebarToggle"
            onClick={onToggle}
            type="button"
          >
            {isCollapsed ? "›" : "‹"}
          </button>
        </div>
        <strong>{academyBrandName}</strong>
        <span>고태영T Lesson OS</span>
      </div>
      <button
        aria-controls="academy-primary-navigation"
        aria-expanded={isMobileNavigationOpen}
        className="mobileNavigationToggle"
        onClick={onToggleMobileNavigation}
        type="button"
      >
        <span>현재 화면 · {activeMenuItem?.label || "Academy OS"}</span>
        <b>{isMobileNavigationOpen ? "메뉴 닫기" : "전체 메뉴"}</b>
      </button>
      <nav
        aria-label="주요 화면"
        className={isMobileNavigationOpen ? "sideNav mobileNavigationOpen" : "sideNav"}
        id="academy-primary-navigation"
      >
        {menuGroups.map((group) => (
          <div className="sideGroup" key={group.title}>
            <p>{group.title}</p>
            {group.items.map((item) => (
              <button
                aria-current={activeView === item.id ? "page" : undefined}
                className={activeView === item.id ? "active" : ""}
                key={item.id}
                onClick={() => onChangeView(item.id)}
                title={isCollapsed ? item.label : undefined}
                type="button"
              >
                <span>{item.icon}</span>
                <b>{item.label}</b>
                {item.badge ? <i className="navBadge" title={item.badgeTitle}>{item.badge}</i> : null}
              </button>
            ))}
          </div>
        ))}
      </nav>
      <div className={isMobileNavigationOpen ? "sideStatus mobileNavigationOpen" : "sideStatus"}>
        <span>접속 중 1명</span>
        <strong>{today}</strong>
        <button className="logoutButton" onClick={onLogout} type="button">로그아웃</button>
      </div>
    </aside>
  );
}
