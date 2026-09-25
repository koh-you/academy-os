import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [helpTipSource, helpTipCss, modalSource] = await Promise.all([
  readFile(new URL("../src/shared/components/HelpTip.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/components/HelpTip.css", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/components/Modal.jsx", import.meta.url), "utf8")
]);

// 2026-09-25 · 접근성 계약: 설명 풍선은 role="tooltip" 이고 트리거가 aria-describedby 로 가리킨다.
// label 은 필수 prop 이고 "<무엇> 설명" 으로 읽힌다 — "도움말" 같은 뭉뚱그린 라벨을 쓰지 않는다.
for (const ariaContract of [
  'role="tooltip"',
  "aria-describedby={tooltipId}",
  "aria-expanded={open}",
  "aria-label={`${label} 설명`}",
  "id={tooltipId}",
  '<span aria-hidden="true">?</span>',
  'type="button"'
]) {
  assert.ok(helpTipSource.includes(ariaContract), `help tip must keep ${ariaContract}`);
}

// label 은 기본값 없는 필수 prop 이다(빠지면 스크린리더가 무엇에 대한 설명인지 알 수 없다).
assert.ok(/\{\s*className = "",\s*label,/.test(helpTipSource), "label must stay a required prop without a default");

// 여는 경로 3가지: 마우스 hover, 키보드 focus, 터치/클릭 토글.
for (const openContract of [
  "onMouseEnter={revealFromHoverOrFocus}",
  "onMouseLeave={hideFromHoverOrFocus}",
  "onFocus={revealFromHoverOrFocus}",
  // 2026-09-25 · 포커스가 떠나면 클릭으로 고정한 설명도 닫는다(Tab 으로 넘어갔는데 말풍선이 남아 내용을 가리지 않게).
  "onBlur={hideFromBlur}",
  "onClick={toggleFromClick}"
]) {
  assert.ok(helpTipSource.includes(openContract), `help tip must keep ${openContract}`);
}

// 클릭으로 고정(pin)한 뒤에는 hover·blur 로 닫히지 않고, 같은 버튼을 다시 누르면 닫힌다.
assert.ok(helpTipSource.includes("function hideFromHoverOrFocus() {\r\n    if (pinned) return;") ||
  helpTipSource.includes("function hideFromHoverOrFocus() {\n    if (pinned) return;"),
"pinned help tip must ignore hover/blur close");
assert.ok(helpTipSource.includes("function toggleFromClick()"), "click must toggle the pinned help tip");
assert.ok(
  /function hideFromBlur\(\) \{\s*setPinned\(false\);/.test(helpTipSource),
  "blur must unpin so a click-opened tip closes when focus leaves"
);

// Esc 와 바깥 클릭으로 닫는다. 리스너는 열렸을 때만 붙였다가 정리한다.
for (const closeContract of [
  'event.key !== "Escape"',
  'window.addEventListener("keydown", handleKeyDown, true)',
  'window.removeEventListener("keydown", handleKeyDown, true)',
  'document.addEventListener("mousedown", handlePointerDown)',
  'document.removeEventListener("mousedown", handlePointerDown)',
  "containerRef.current?.contains(event.target)"
]) {
  assert.ok(helpTipSource.includes(closeContract), `help tip must keep ${closeContract}`);
}

// 모달 안에서 열린 설명의 Esc 는 설명만 닫아야 한다(모달까지 닫히면 안 된다).
assert.ok(helpTipSource.includes("event.stopImmediatePropagation()"), "Escape must not reach the surrounding modal");
// 2026-09-25 · 다만 Esc 를 삼키는 것은 이 설명이 정말 열린 가장 안쪽 레이어일 때뿐이다.
// hover 로만 떠 있는 설명까지 Esc 를 가로채면 Esc 로 닫는 다른 화면(인쇄 미리보기 등)이 멈춘다.
assert.ok(
  helpTipSource.includes("const ownsEscape = pinned || containerRef.current?.contains(document.activeElement);") &&
    helpTipSource.includes("if (!ownsEscape) return;"),
  "Escape may only be consumed by the tip that owns focus or is pinned"
);
// 잘림 보정은 스크롤바를 뺀 레이아웃 뷰포트를 기준으로 한다.
assert.ok(
  helpTipSource.includes("document.documentElement.clientWidth || window.innerWidth"),
  "overflow clamp must measure the layout viewport"
);
assert.ok(
  modalSource.includes('document.querySelector(".overflowMenuList, .helpTipBubble-open")'),
  "common Modal must let an open help tip take Escape first"
);

// 트리거는 공용 iconButton 을 재사용한다(새 base 버튼 클래스를 만들지 않는다).
assert.ok(helpTipSource.includes('["iconButton", "helpTipTrigger", triggerClassName]'), "trigger must reuse iconButton");
assert.equal(/class(Name)?="[^"]*\b(primaryButton|softButton|ghostButton|dangerButton|dangerSoftButton)\b/.test(helpTipSource), false);

// 닫혀 있어도 설명은 DOM 에 남는다(display:none) — aria-describedby 가 항상 유효해야 한다.
assert.ok(helpTipCss.includes(".helpTipBubble {"));
assert.ok(/\.helpTipBubble \{[^}]*display: none;/s.test(helpTipCss), "closed help tip must stay in the DOM via display:none");
assert.ok(/\.helpTipBubble-open \{[^}]*display: block;/s.test(helpTipCss), "open help tip must render");

// 좁은 화면·모달에서 잘리지 않게 폭을 제한하고 줄바꿈을 허용한다.
// 가로 위치는 추측하지 않고 실제 사각형을 재서 넘치는 만큼만 민다(양쪽 모두).
assert.ok(helpTipCss.includes("max-width: min(320px, calc(100vw - 32px))"));
assert.ok(helpTipCss.includes("white-space: normal"));
for (const clampContract of [
  "const bounds = bubble.getBoundingClientRect();",
  "bounds.right > viewportWidth - margin",
  "bounds.left + nextShift < margin",
  "setShift(Math.round(nextShift));",
  "style={shift ? { marginLeft: `${shift}px` } : undefined}"
]) {
  assert.ok(helpTipSource.includes(clampContract), `help tip must keep ${clampContract}`);
}

// 터치 타깃은 보이는 원(24px)보다 넓게 ::before 로 확보한다.
assert.ok(helpTipCss.includes("var(--academy-touch-target, 44px)"));
// 2026-09-25 · App.css 의 640px 이하 전역 min-height 44px !important 가 트리거를 늘리지 않게 되돌린다.
assert.ok(
  /@media \(max-width: 640px\)[\s\S]*?\.helpTip \.helpTipTrigger \{[\s\S]*?min-height: 24px !important;/.test(helpTipCss),
  "mobile must keep the 24px trigger despite the global touch-target rule"
);

// 애니메이션은 prefers-reduced-motion 을 존중한다.
assert.ok(helpTipCss.includes("@media (prefers-reduced-motion: no-preference)"));

// 헤드리스 계약: 상태·ARIA 만 소유하고 저장·API·저장소는 건드리지 않는다.
for (const banned of ["fetch(", "postJson", "/api/", "localStorage"]) {
  assert.equal(helpTipSource.includes(banned), false, `help tip must not own ${banned}`);
}

// 색은 토큰만 쓴다(하드코딩 리터럴은 var() 폴백 안에서만 허용).
const cssColorLiterals = helpTipCss
  .split(/\r?\n/)
  .filter((line) => /#[0-9a-f]{3,8}|rgba?\(/i.test(line))
  .filter((line) => !line.includes("var(--"));
assert.deepEqual(cssColorLiterals, [], "help tip css must only use design tokens");

// 공용 제목 줄(제목 + 물음표)은 공용 컴포넌트가 titleAdornment 로 받는다.
for (const [name, source] of Object.entries({
  Modal: modalSource,
  PageHeader: await readFile(new URL("../src/shared/components/PageHeader.jsx", import.meta.url), "utf8"),
  SectionHeader: await readFile(new URL("../src/shared/components/SectionHeader.jsx", import.meta.url), "utf8")
})) {
  assert.ok(source.includes("titleAdornment"), `${name} must accept titleAdornment`);
  assert.ok(source.includes('className="helpTipTitleRow"'), `${name} must lay the adornment out in helpTipTitleRow`);
}
assert.ok(helpTipCss.includes(".helpTipTitleRow {"));

console.log("help tip aria, keyboard, hover/click, flip, and token fixtures passed");
