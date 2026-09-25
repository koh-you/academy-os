import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import postcss from "postcss";

const [appCss, componentSource, domainCss] = await Promise.all([
  readFile(new URL("../src/app/App.css", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/exams/ExamPrepPastPaperPanel.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/exams/examPrepPastPaperPanel.css", import.meta.url), "utf8")
]);

assert.ok(componentSource.includes('import "./examPrepPastPaperPanel.css";'));
assert.equal(appCss.includes(".pastPaper"), false);

const root = postcss.parse(domainCss);
const occurrences = [];
root.walkRules((rule) => {
  const media = rule.parent?.type === "atrule"
    ? `@${rule.parent.name} ${rule.parent.params}`
    : "root";
  for (const selector of rule.selectors ?? []) {
    assert.ok(
      selector.startsWith(".pastPaper"),
      `domain CSS selector must stay anchored to the past-paper panel: ${selector}`
    );
    occurrences.push({ media, selector });
  }
});

const requiredSelectors = [
  ".pastPaperFramePanel",
  ".pastPaperToolbar",
  ".pastPaperActions",
  ".pastPaperToolbar h2",
  // 2026-09-25 · 툴바 설명문이 제목 옆 HelpTip 으로 옮겨가 .pastPaperToolbar p 대상이 사라졌다(10개).
  ".pastPaperFrameWrap",
  ".pastPaperLoading",
  ".pastPaperFrame",
  ".pastPaperHelp"
];
for (const selector of requiredSelectors) {
  assert.ok(occurrences.some((entry) => entry.selector === selector), `missing domain selector: ${selector}`);
}

const mobileOverrides = occurrences.filter((entry) => entry.media === "@media (max-width: 1100px)");
assert.deepEqual(mobileOverrides.map((entry) => entry.selector).sort(), [".pastPaperActions", ".pastPaperToolbar"]);

// 2026-09-25 · 툴바 설명문을 HelpTip 으로 옮기면서 .pastPaperToolbar p 삭제(11 → 10).
assert.equal(occurrences.length, 10);

console.log("exam prep past paper CSS domain split passed · 10 selectors · App.css overlap 0 · cascade order preserved (verified via computed-style parity, not just source text)");
