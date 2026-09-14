import { useEffect, useId, useRef, useState } from "react";
import "./OverflowMenu.css";

// items 원소는 항목 { key, label, onSelect, tone } 이거나 그룹 { group, items } 이다.
// 그룹은 제목 아래에 항목을 묶어 보여줄 뿐, 키보드 이동은 평탄화된 항목 순서를 따른다.
function flattenMenuItems(items) {
  return items.flatMap((entry) => (Array.isArray(entry.items) ? entry.items : [entry]));
}

export function OverflowMenu({ className = "", icon = "⋯", items = [], label, placement = "bottom", triggerClassName = "" }) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const itemRefs = useRef([]);
  const menuId = useId();
  const flatItems = flattenMenuItems(items);

  useEffect(() => {
    if (!open) return undefined;
    function handlePointerDown(event) {
      if (!containerRef.current?.contains(event.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [open]);

  useEffect(() => {
    if (open) itemRefs.current[activeIndex]?.focus();
  }, [activeIndex, open]);

  if (flatItems.length === 0) return null;

  function openMenu(index) {
    setActiveIndex(index);
    setOpen(true);
  }

  function closeMenu({ restoreFocus = true } = {}) {
    setOpen(false);
    if (restoreFocus) triggerRef.current?.focus();
  }

  function handleTriggerKeyDown(event) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      openMenu(0);
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      openMenu(flatItems.length - 1);
    }
  }

  function handleMenuKeyDown(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      // 모달 안에서 열린 메뉴의 Esc 가 모달까지 닫지 않도록 여기서 멈춘다.
      event.stopPropagation();
      closeMenu();
      return;
    }
    if (event.key === "Tab") {
      closeMenu({ restoreFocus: false });
      return;
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((current) => (current + 1) % flatItems.length);
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((current) => (current - 1 + flatItems.length) % flatItems.length);
      return;
    }
    if (event.key === "Home") {
      event.preventDefault();
      setActiveIndex(0);
      return;
    }
    if (event.key === "End") {
      event.preventDefault();
      setActiveIndex(flatItems.length - 1);
    }
  }

  function selectItem(item) {
    closeMenu();
    item.onSelect?.();
  }

  function renderItem(item) {
    const index = flatItems.indexOf(item);
    return (
      <button
        className={["overflowMenuItem", item.tone === "danger" ? "overflowMenuItem-danger" : ""].filter(Boolean).join(" ")}
        key={item.key ?? item.label}
        onClick={() => selectItem(item)}
        ref={(node) => {
          itemRefs.current[index] = node;
        }}
        role="menuitem"
        tabIndex={index === activeIndex ? 0 : -1}
        type="button"
      >
        {item.label}
      </button>
    );
  }

  return (
    <div className={["overflowMenu", className].filter(Boolean).join(" ")} ref={containerRef}>
      <button
        aria-controls={open ? menuId : undefined}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={label}
        className={["iconButton", "overflowMenuTrigger", triggerClassName].filter(Boolean).join(" ")}
        onClick={() => (open ? closeMenu() : openMenu(0))}
        onKeyDown={handleTriggerKeyDown}
        ref={triggerRef}
        type="button"
      >
        <span aria-hidden="true">{icon}</span>
      </button>
      {open ? (
        <div
          aria-label={label}
          className={["overflowMenuList", placement === "top" ? "overflowMenuList-top" : ""].filter(Boolean).join(" ")}
          id={menuId}
          onKeyDown={handleMenuKeyDown}
          role="menu"
        >
          {items.map((entry) => (
            Array.isArray(entry.items) ? (
              <div aria-label={entry.group} className="overflowMenuGroup" key={`group:${entry.group}`} role="group">
                <div aria-hidden="true" className="overflowMenuGroupLabel">{entry.group}</div>
                {entry.items.map(renderItem)}
              </div>
            ) : renderItem(entry)
          ))}
        </div>
      ) : null}
    </div>
  );
}
