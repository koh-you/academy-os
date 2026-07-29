import { useLayoutEffect, useRef } from "react";
import "./WorkspaceTabs.css";

export function WorkspaceTabs({
  as: Component = "div",
  children,
  className = "",
  label,
  variant = "primary"
}) {
  const tabListRef = useRef(null);
  const tabListClassName = [
    "workspaceTabs",
    variant === "primary" ? "" : `workspaceTabs-${variant}`,
    className
  ].filter(Boolean).join(" ");

  useLayoutEffect(() => {
    const tabList = tabListRef.current;
    if (!tabList || tabList.scrollWidth <= tabList.clientWidth) return;

    const selectedTab = Array.from(tabList.children).find((child) => (
      child.matches?.('button[aria-selected="true"], button.active')
    ));
    if (!selectedTab) return;

    const edgeInset = 6;
    const selectedStart = selectedTab.offsetLeft;
    const selectedEnd = selectedStart + selectedTab.offsetWidth;
    const visibleStart = tabList.scrollLeft;
    const visibleEnd = visibleStart + tabList.clientWidth;

    if (selectedStart < visibleStart + edgeInset) {
      tabList.scrollLeft = Math.max(0, selectedStart - edgeInset);
    } else if (selectedEnd > visibleEnd - edgeInset) {
      tabList.scrollLeft = Math.max(0, selectedEnd - tabList.clientWidth + edgeInset);
    }
  });

  return (
    <Component
      aria-label={label}
      aria-orientation="horizontal"
      className={tabListClassName}
      ref={tabListRef}
      role="tablist"
    >
      {children}
    </Component>
  );
}
