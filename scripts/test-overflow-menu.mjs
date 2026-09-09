import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [menuSource, menuCss] = await Promise.all([
  readFile(new URL("../src/shared/components/OverflowMenu.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/components/OverflowMenu.css", import.meta.url), "utf8")
]);

// 접근성 계약: 메뉴 버튼 패턴(WAI-ARIA)의 필수 속성과 역할.
for (const ariaContract of [
  'aria-haspopup="menu"',
  "aria-expanded={open}",
  "aria-controls={open ? menuId : undefined}",
  "aria-label={label}",
  'role="menu"',
  'role="menuitem"',
  "tabIndex={index === activeIndex ? 0 : -1}"
]) {
  assert.ok(menuSource.includes(ariaContract), `overflow menu must keep ${ariaContract}`);
}

// 키보드 계약: Esc 닫기, 화살표 이동(순환), Home/End, Tab 이탈, 트리거에서 화살표로 열기.
for (const keyboardContract of [
  'event.key === "Escape"',
  'event.key === "Tab"',
  'event.key === "ArrowDown"',
  'event.key === "ArrowUp"',
  'event.key === "Home"',
  'event.key === "End"',
  "(current + 1) % items.length",
  "(current - 1 + items.length) % items.length",
  "itemRefs.current[activeIndex]?.focus()",
  "triggerRef.current?.focus()"
]) {
  assert.ok(menuSource.includes(keyboardContract), `overflow menu must keep ${keyboardContract}`);
}

// 모달 안에서 열린 메뉴의 Esc 는 메뉴만 닫아야 한다(모달까지 닫히면 안 된다).
assert.ok(menuSource.includes("event.stopPropagation()"), "Escape must not bubble to the surrounding modal");

// 바깥 클릭으로 닫히고, 리스너는 열렸을 때만 붙였다가 정리한다.
assert.ok(menuSource.includes('document.addEventListener("mousedown", handlePointerDown)'));
assert.ok(menuSource.includes('document.removeEventListener("mousedown", handlePointerDown)'));
assert.ok(menuSource.includes("!containerRef.current?.contains(event.target)"));

// 파괴적 항목은 톤으로 구분하고, 빈 목록이면 트리거 자체를 렌더하지 않는다(R1).
assert.ok(menuSource.includes('item.tone === "danger" ? "overflowMenuItem-danger" : ""'));
assert.ok(menuSource.includes("if (items.length === 0) return null;"));

// 트리거는 공용 iconButton 을 재사용해 --academy-touch-target(44px)을 상속한다.
assert.ok(menuSource.includes('"iconButton", "overflowMenuTrigger"'));
assert.ok(menuCss.includes("min-height: var(--academy-touch-target, 44px)"));

// 헤드리스 계약: 상태·ARIA 는 컴포넌트가 소유하고 스타일은 className 으로 주입한다.
for (const banned of ["fetch(", "postJson", "/api/", "localStorage"]) {
  assert.equal(menuSource.includes(banned), false, `overflow menu must not own ${banned}`);
}

// 색상은 토큰만 쓴다(하드코딩 리터럴은 var() 폴백 안에서만 허용).
const cssColorLiterals = menuCss
  .split(/\r?\n/)
  .filter((line) => /#[0-9a-f]{3,8}|rgba?\(/i.test(line))
  .filter((line) => !line.includes("var(--"));
assert.deepEqual(cssColorLiterals, [], "overflow menu css must only use design tokens");

console.log("overflow menu accessibility, keyboard, and token fixtures passed");
