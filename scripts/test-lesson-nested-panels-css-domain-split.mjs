// LessonNestedPanels(준비 메모 모달 · 숙제/결석 보충 상세) CSS 분리 가드.
//
// 2026-09-19 App.css 에서 이 lazy 청크 전용 셀렉터 92개 규칙(106 셀렉터)을 src/domains/lessons/
// lessonNestedPanels.css 로 옮겼다. 교사 첫 로딩의 차단 CSS 가 그만큼 줄고, 이 화면을 열 때만
// 함께 내려온다. 여기서는 (1) 새 파일의 모든 셀렉터가 두 파일에서만 쓰는 클래스에만 걸리는지,
// (2) App.css 와 겹치는 셀렉터가 없는지("한 셀렉터, 한 집"), (3) 쪼갠 @media 규칙의 공용 쪽
// (.examPrepSummaryGrid)이 App.css 에 남았는지, (4) 청크 진입 파일이 import 하는지 고정한다.
//
// 2026-09-25 · 상시 설명 문구를 HelpTip 으로 옮기면서 쓸 곳이 없어진 .absenceSourceJournalBox.compact p 와
// .supplementAttendanceBox > div small 을 지웠다(106 → 104).
// 2026-09-26 · 공용 HelpTip.css 가 `.helpTip > .helpTipBubble`(0,2,0) 로 특이도를 올려 위 라벨 규칙
// `.supplementAttendanceBox > div span`(0,1,1) 을 스스로 이기므로, 화면별 되돌리기였던
// .supplementAttendanceBox > div .helpTipBubble 규칙도 지웠다.
import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import postcss from "postcss";

const root = fileURLToPath(new URL("..", import.meta.url));
const read = (path) => readFileSync(join(root, path), "utf8");
const appCss = read("src/app/App.css");
const domainCss = read("src/domains/lessons/lessonNestedPanels.css");
const chunkFiles = ["src/domains/lessons/LessonNestedPanels.jsx", "src/domains/lessons/LessonJournalPreparationMemoView.jsx"];

assert.ok(read(chunkFiles[0]).includes('import "./lessonNestedPanels.css";'), "the chunk entry must import its CSS");

// 두 파일에서만 쓰는 클래스(이동 당시 확정). 다른 화면에서 쓰게 되면 여기서 실패한다 — 그때는
// App.css 로 되돌리지 말고 그 화면 CSS 나 공용 컴포넌트 CSS 로 옮긴다.
const exclusiveClasses = new Set([
  "absenceSourceJournalBox", "absenceSourceJournalGrid", "homeworkMakeupHero", "homeworkMakeupModalActions",
  "homeworkMakeupModalBody", "homeworkMakeupNotice", "homeworkMakeupPassState", "homeworkMakeupProcess",
  "homeworkMakeupScheduleEditor", "homeworkMakeupScheduleState", "homeworkMakeupScheduleTextField",
  "homeworkMakeupSummary", "makeupLinkedBox", "makeupOriginalHomework", "makeupProcessActions",
  "makeupProcessField", "makeupProcessFormGrid", "makeupProcessStatusGrid", "modalState",
  "prepMemoAcknowledgeLine", "prepMemoCheckedState", "prepMemoColumns", "prepMemoDraft",
  "prepMemoHomeworkFollowup", "prepMemoHomeworkFollowupCheck", "prepMemoHomeworkFollowupSaved",
  "prepMemoIncludeBox", "prepMemoPrevious", "prepMemoSaveBar", "preparationMemoModal", "referenceOnly",
  "scheduleEditButton", "supplementAttendanceBox", "supplementScheduleActionHint"
]);

// (1) 소유권: 클래스가 실제로 두 파일 밖에서 쓰이지 않는지 src 전체를 다시 훑는다.
function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path, out);
    else if (/\.(jsx?|html)$/.test(name)) out.push(path);
  }
  return out;
}
const sourceFiles = [...walk(join(root, "src")), join(root, "index.html"), join(root, "attendance.html")];
const wordPattern = /[A-Za-z_][A-Za-z0-9_-]*/g;
for (const file of sourceFiles) {
  const rel = relative(root, file).split("\\").join("/");
  if (chunkFiles.includes(rel)) continue;
  const words = new Set(readFileSync(file, "utf8").match(wordPattern) || []);
  for (const cls of exclusiveClasses) {
    assert.ok(!words.has(cls), `${cls} is now used outside the LessonNestedPanels chunk (${rel}); move its CSS to that screen instead of back to App.css`);
  }
}

// (2) 새 파일의 모든 셀렉터는 전용 클래스만 참조하고, App.css 와 겹치지 않는다.
const domainRoot = postcss.parse(domainCss);
const domainSelectors = [];
domainRoot.walkRules((rule) => {
  for (const selector of rule.selectors) {
    const classes = [...selector.matchAll(/\.([A-Za-z_][A-Za-z0-9_-]*)/g)].map((match) => match[1]);
    assert.ok(classes.length > 0, `bare selector must not live in the domain CSS: ${selector}`);
    // 전용 클래스가 하나라도 있으면 이 청크의 DOM 안에서만 맞는다(.absenceSourceJournalBox.compact h4 처럼
    // 공용 modifier 가 붙어도). 전용 클래스가 하나도 없는 셀렉터는 여기 있을 수 없다.
    assert.ok(classes.some((cls) => exclusiveClasses.has(cls)), `selector without an exclusive class in lessonNestedPanels.css: ${selector}`);
    domainSelectors.push(selector);
  }
});
assert.equal(domainSelectors.length, 104, `expected 104 moved selectors, found ${domainSelectors.length}`);
const appRoot = postcss.parse(appCss);
const appSelectors = new Set();
appRoot.walkRules((rule) => {
  for (const selector of rule.selectors) appSelectors.add(selector.trim());
});
for (const selector of domainSelectors) {
  assert.ok(!appSelectors.has(selector.trim()), `selector must have one home, still in App.css too: ${selector}`);
}
for (const cls of exclusiveClasses) {
  assert.ok(!appCss.includes(`.${cls}`), `App.css must not keep any rule for the moved class .${cls}`);
}

// (3) 쪼갠 @media (max-width: 980px) 규칙: 공용 쪽은 App.css 에, 전용 쪽은 새 파일에 같은 선언으로.
let appMediaHasExamPrepSummaryGrid = false;
appRoot.walkAtRules("media", (atRule) => {
  if (!atRule.params.includes("980px")) return;
  atRule.walkRules((rule) => {
    if (rule.selectors.includes(".examPrepSummaryGrid") && rule.some((decl) => decl.prop === "grid-template-columns" && decl.value === "1fr")) {
      appMediaHasExamPrepSummaryGrid = true;
    }
  });
});
assert.ok(appMediaHasExamPrepSummaryGrid, "App.css must keep .examPrepSummaryGrid's 980px override (the shared side of the split rule)");
let domainMediaOverride = null;
domainRoot.walkAtRules("media", (atRule) => {
  if (!atRule.params.includes("980px")) return;
  atRule.walkRules((rule) => {
    if (rule.selectors.includes(".homeworkMakeupHero")) domainMediaOverride = rule;
  });
});
assert.ok(domainMediaOverride, "lessonNestedPanels.css must carry the 980px grid override for the moved grids");
assert.deepEqual(
  [...domainMediaOverride.selectors].sort(),
  [".absenceSourceJournalGrid", ".homeworkMakeupHero", ".homeworkMakeupSummary", ".makeupProcessFormGrid", ".makeupProcessStatusGrid", ".supplementAttendanceBox"]
);
assert.ok(domainMediaOverride.some((decl) => decl.prop === "grid-template-columns" && decl.value === "1fr"));

console.log(`lesson nested panels css split: ${domainSelectors.length} selectors · ${exclusiveClasses.size} exclusive classes · no App.css overlap · 980px split kept`);
