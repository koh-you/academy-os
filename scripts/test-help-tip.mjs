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
assert.ok(
  modalSource.includes('document.querySelector(".overflowMenuList, .helpTipBubble-open")'),
  "common Modal must let an open help tip take Escape first"
);

// 트리거는 공용 iconButton 을 재사용한다(새 base 버튼 클래스를 만들지 않는다).
assert.ok(helpTipSource.includes('["iconButton", "helpTipTrigger", triggerClassName]'), "trigger must reuse iconButton");
assert.equal(/class(Name)?="[^"]*\b(primaryButton|softButton|ghostButton|dangerButton|dangerSoftButton)\b/.test(helpTipSource), false);

// ── CSS 규칙을 선택자 단위로 읽어서 계약을 구조로 확인한다(문자열 한 줄 대조가 아니라). ──
// 주석 안에도 중괄호 예시가 있어서 먼저 지운다.
const cssWithoutComments = helpTipCss.replace(/\/\*[\s\S]*?\*\//g, "");
const cssRules = cssWithoutComments
  .split("{")
  .slice(0, -1)
  .map((chunk, index, chunks) => ({
    selector: chunk.split("}").pop().replace(/\s+/g, " ").trim(),
    body: (chunks[index + 1] ?? "").split("}")[0]
  }))
  .filter((rule) => rule.selector && !rule.selector.startsWith("@"));

function ruleBody(selector) {
  const rule = cssRules.find((candidate) => candidate.selector === selector);
  assert.ok(rule, `help tip css must define ${selector}`);
  return rule.body;
}

// 2026-09-25 · 특이도 계약. 화면 css 에 흔한 `.someCard span`(0,1,1) 포괄 규칙이 `.helpTipBubble`(0,1,0)
// 을 이기는 바람에 화면마다 열림/닫힘 상태 기계를 복제하는 되돌리기 패치가 붙었다.
// 말풍선·트리거 규칙은 전부 `.helpTip > …`(0,2,0) 이상으로 두어 화면별 패치 없이 이긴다.
const scopedTargets = cssRules.filter((rule) => /helpTipBubble|helpTipTrigger/.test(rule.selector));
assert.ok(scopedTargets.length >= 4, "help tip css must still style the bubble and the trigger");
for (const rule of scopedTargets) {
  assert.ok(
    rule.selector.startsWith(".helpTip > ."),
    `help tip rule must stay a direct-child selector so screen css cannot win: ${rule.selector}`
  );
}

// 닫혀 있어도 설명은 DOM 에 남는다 — aria-describedby 가 항상 유효해야 한다.
// 표시/숨김 축은 display 가 아니라 visibility 다. display 로 두면 화면 css 의
// `display: grid|flex|block` 포괄 규칙 하나로 닫힘 상태가 깨진다.
const bubbleBody = ruleBody(".helpTip > .helpTipBubble");
assert.ok(/\bvisibility: hidden;/.test(bubbleBody), "closed help tip must stay in the DOM and hide via visibility");
assert.ok(
  /\bvisibility: visible;/.test(ruleBody(".helpTip > .helpTipBubble.helpTipBubble-open")),
  "open help tip must become visible"
);
for (const rule of scopedTargets.filter((candidate) => candidate.selector.includes("helpTipBubble"))) {
  assert.equal(
    /\bdisplay:/.test(rule.body),
    false,
    `help tip open/closed state must not depend on display: ${rule.selector}`
  );
}

// 잘림 계약: 말풍선은 fixed 로 띄워 `overflow: clip|hidden|auto` 조상을 벗어난다.
// absolute 로 되돌리면 시험분석 프롬프트 카드처럼 좁은 클리핑 조상 안에서 다시 잘린다.
assert.ok(/\bposition: fixed;/.test(bubbleBody), "help tip bubble must escape clipping ancestors with position: fixed");
assert.equal(/\bposition: absolute;/.test(bubbleBody), false, "help tip bubble must not go back to absolute");

// 좁은 화면·모달에서 잘리지 않게 폭을 제한하고 줄바꿈을 허용한다.
assert.ok(bubbleBody.includes("max-width: min(320px, calc(100vw - 32px))"));
assert.ok(bubbleBody.includes("white-space: normal"));

// 위치는 추측하지 않고 열릴 때마다 트리거 사각형을 재서 좌우·상하 모두 뷰포트 안으로 넣는다.
for (const placementContract of [
  // 레이아웃 뷰포트 기준(innerWidth 는 스크롤바를 포함한다).
  "document.documentElement.clientWidth || window.innerWidth",
  "document.documentElement.clientHeight || window.innerHeight",
  "const anchor = trigger.getBoundingClientRect();",
  // transform·filter 조상이 fixed 의 containing block 이 될 수 있어 원점을 재서 보정한다.
  "const origin = bubble.getBoundingClientRect();",
  "left = viewportWidth - VIEWPORT_MARGIN - bubbleWidth",
  "if (left < VIEWPORT_MARGIN) left = VIEWPORT_MARGIN;",
  // 아래 공간이 모자라면 트리거 위로 뒤집는다.
  "const flippedTop = anchor.top - BUBBLE_GAP - bubbleHeight;",
  "top = flippedTop",
  "if (top < VIEWPORT_MARGIN) top = VIEWPORT_MARGIN;",
  "bubble.style.left = `${Math.round(left - origin.left)}px`;",
  "bubble.style.top = `${Math.round(top - origin.top)}px`;"
]) {
  assert.ok(helpTipSource.includes(placementContract), `help tip must keep ${placementContract}`);
}

// fixed 는 스크롤을 따라오지 않으므로 열려 있는 동안 다시 계산한다.
// 안쪽 스크롤 컨테이너(모달 본문·표)의 scroll 은 버블링하지 않아 capture 로 받아야 한다.
for (const reflowContract of [
  'window.addEventListener("scroll", handleReflow, true)',
  'window.addEventListener("resize", handleReflow)',
  'window.removeEventListener("scroll", handleReflow, true)',
  'window.removeEventListener("resize", handleReflow)'
]) {
  assert.ok(helpTipSource.includes(reflowContract), `help tip must keep ${reflowContract}`);
}

// 터치 타깃은 보이는 원(24px)보다 넓게 ::before 로 확보한다.
assert.ok(helpTipCss.includes("var(--academy-touch-target, 44px)"));
// 2026-09-25 · App.css 의 640px 이하 전역 min-height 44px !important 가 트리거를 늘리지 않게 되돌린다.
assert.ok(
  /@media \(max-width: 640px\)[\s\S]*?\.helpTip > \.helpTipTrigger \{[\s\S]*?min-height: 24px !important;/.test(helpTipCss),
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
