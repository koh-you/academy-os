// 출결 태블릿 전용 CSS 를 App.css 에서 뽑아낸다.
//
// 배경: 태블릿은 번호 4자리만 찍는 화면인데 교사용 통짜 App.css(400 KB)를 그대로 받았다.
// JS 는 PR #286 에서 진입점을 분리해 걷어냈고, 남은 절반이 이 CSS 다.
//
// 왜 스크립트인가: 손으로 복사해두면 나중에 누가 App.css 의 .primaryButton 을 고쳐도
// 태블릿 복사본은 안 따라가서 규칙이 조용히 갈라진다. 그래서 생성물을 커밋하되
// 재생성 가능한 형태로 두고, test-kiosk-css-sync.mjs 가 어긋남을 CI 에서 잡는다.
//
// 왜 줄 번호로 안 자르는가: @media 블록이 중간에 끼어 있어 범위로 자르면 규칙을 흘린다.
// postcss 로 셀렉터를 하나씩 검사해서 키오스크 DOM 에 닿는 것만 고르고, 원본 순서와
// @media 중첩은 그대로 보존한다.
import { readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const postcss = require("postcss");

export const appCssPath = new URL("../src/app/App.css", import.meta.url);
export const kioskCssPath = new URL("../src/kiosk/attendanceKiosk.css", import.meta.url);

// 키오스크 렌더 트리(kioskMain -> AttendanceKioskApp -> AttendanceKiosk -> Modal)에서
// 실제로 DOM 에 붙는 class 만 나열한다. 하나 빠지면 그 부분 스타일이 사라지므로
// 각 파일의 className 을 직접 읽어서 만들었다. 새 class 를 화면에 추가하면 여기도 추가해야 하고,
// 빠뜨리면 test-kiosk-css-sync.mjs 가 잡는다.
export const allowedClasses = new Set([
  // AttendanceKiosk.jsx
  "attendanceKioskPage", "standalone",
  "attendanceKioskCard",
  "attendanceKioskHeader",
  "attendancePinForm",
  "attendanceNumberPad", "disabled",
  "secondaryKey",
  "attendanceResultModal", "success", "error",
  "attendanceResultContent",
  "attendanceLessonChoiceGrid",
  "attendanceLessonChoiceButton", "latest",
  "attendancePreviewSummary",
  "attendanceConfirmActions", "single",
  // AttendanceKioskApp.jsx 가 document.body 에 직접 붙인다
  "attendanceOnlyBody",
  // 공용 프리미티브 (AttendanceKiosk.jsx / Modal.jsx)
  "eyebrow", "muted", "primaryButton", "iconButton",
  "modalBackdrop", "modalCard", "modalScrollable", "modalHeader", "modalScrollBody",
  "modalFooter", "align-end", "align-center", "align-start", "align-between",
  "tone-default", "tone-danger", "tone-warning"
]);

// class 가 없는 base 선택자 중 키오스크에도 적용되어야 하는 element 들.
const allowedBareSelectors = new Set([
  "*", "html", "body", "#root", ":root",
  "button", "input", "select", "textarea", "a", "summary",
  "h1", "h2", "h3", "p", "small", "strong", "b", "span", "div", "form", "section", "label"
]);

const classTokenRegex = /\.(-?[_a-zA-Z][\w-]*)/g;
const idTokenRegex = /#(-?[_a-zA-Z][\w-]*)/g;

function selectorMatchesKiosk(selector) {
  const trimmed = selector.trim();
  if (!trimmed) return false;

  const classes = [...trimmed.matchAll(classTokenRegex)].map((match) => match[1]);
  const ids = [...trimmed.matchAll(idTokenRegex)].map((match) => match[1]);

  // 키오스크 DOM 에 있는 id 는 #root 뿐이다.
  if (ids.some((id) => id !== "root")) return false;

  if (classes.length === 0) {
    // :where(input:not([type="checkbox"]), select) 처럼 중첩 pseudo·속성 선택자가 섞여 있어서
    // 단순 split 으로는 안 된다. 실제 매칭 대상 element 이름만 남기고 판단한다.
    let normalized = trimmed.replace(/\[[^\]]*\]/g, "");
    let previous;
    do {
      previous = normalized;
      normalized = normalized.replace(/:not\([^()]*\)/g, "");
    } while (normalized !== previous);
    // :where() / :is() 는 껍데기만 벗기고 안쪽 선택자는 판단 대상에 남긴다.
    normalized = normalized.replace(/::?(?:where|is|matches|any)\s*\(/g, "(");
    normalized = normalized.replace(/::?[\w-]+(?:\([^()]*\))?/g, "");

    const pieces = normalized.split(/[\s>+~,()]+/).map((piece) => piece.trim()).filter(Boolean);
    if (pieces.length === 0) return true; // ::selection 같은 pseudo 단독
    return pieces.every((piece) => allowedBareSelectors.has(piece));
  }

  // class 가 하나라도 있으면 전부 키오스크 class 여야 한다.
  // (.lessonModal .primaryButton 처럼 교사 화면 컨테이너와 묶인 규칙은 키오스크 DOM 에서
  //  어차피 매칭되지 않으므로 가져오지 않는다.)
  return classes.every((className) => allowedClasses.has(className));
}

const header = `/* 출결 태블릿(attendance.html) 전용 CSS — 자동 생성물이다. 직접 고치지 말 것.
 *
 * 생성: node scripts/build-kiosk-css.mjs
 * 검사: npm run test:kiosk-css-sync  (App.css 와 어긋나면 실패한다)
 *
 * App.css 에서 키오스크 DOM 에 실제로 닿는 규칙만 셀렉터 기준으로 골라냈다.
 * 대상: kioskMain.jsx -> AttendanceKioskApp.jsx -> AttendanceKiosk.jsx -> Modal.jsx
 *
 * 여기에 교사 화면 규칙을 직접 추가하지 말 것 — 태블릿이 다시 통짜 CSS 를 받게 된다.
 */
`;

export function buildKioskCss(source = readFileSync(appCssPath, "utf8")) {
  const root = postcss.parse(source);
  const output = postcss.root();
  const usedAnimations = new Set();

  function collectAnimations(rule) {
    rule.walkDecls((decl) => {
      if (decl.prop !== "animation" && decl.prop !== "animation-name") return;
      decl.value
        .split(",")
        .flatMap((part) => part.trim().split(/\s+/))
        .forEach((token) => usedAnimations.add(token));
    });
  }

  function filterContainer(container, target) {
    container.each((node) => {
      if (node.type === "rule") {
        const matching = (node.selectors ?? [node.selector]).filter(selectorMatchesKiosk);
        if (matching.length === 0) return;
        const clone = node.clone();
        clone.selectors = matching;
        collectAnimations(clone);
        target.append(clone);
        return;
      }
      if (node.type !== "atrule") return;
      if (node.name === "keyframes" || node.name.endsWith("keyframes")) return; // 아래 2패스에서 처리
      if (node.name === "import" || node.name === "charset") {
        target.append(node.clone());
        return;
      }
      const atClone = node.clone();
      atClone.removeAll();
      filterContainer(node, atClone);
      if (atClone.nodes?.length) target.append(atClone);
    });
  }

  filterContainer(root, output);

  // 살아남은 규칙이 실제로 참조하는 @keyframes 만 가져온다.
  root.walkAtRules((atRule) => {
    if (!(atRule.name === "keyframes" || atRule.name.endsWith("keyframes"))) return;
    if (usedAnimations.has(atRule.params.trim())) output.prepend(atRule.clone());
  });

  return `${header}${output.toString()}\n`;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const css = buildKioskCss();
  writeFileSync(kioskCssPath, css, "utf8");
  const appBytes = Buffer.byteLength(readFileSync(appCssPath, "utf8"));
  const kioskBytes = Buffer.byteLength(css);
  const saved = Math.round((1 - kioskBytes / appBytes) * 1000) / 10;
  console.log(
    `src/kiosk/attendanceKiosk.css 생성: ${kioskBytes.toLocaleString()} bytes ` +
    `(App.css ${appBytes.toLocaleString()} bytes 대비 -${saved}%)`
  );
}
