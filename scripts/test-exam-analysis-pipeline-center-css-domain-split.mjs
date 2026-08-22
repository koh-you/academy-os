import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import postcss from "postcss";

const [appCss, componentSource, domainCss] = await Promise.all([
  readFile(new URL("../src/app/App.css", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/exams/ExamAnalysisPipelineCenter.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/exams/examAnalysisPipelineCenter.css", import.meta.url), "utf8")
]);

assert.ok(componentSource.includes('import "./examAnalysisPipelineCenter.css";'));

// A selector is safe to relocate only if its leftmost compound selector
// carries an .examAnalysis*/.examPrompt* class, or one of a small set of
// manually-verified classes that are exclusively used inside this component
// tree despite not carrying the prefix (confirmed via grep across src/domains
// before the move -- see the MV-5c write-up in
// docs/app-refactor-fourth-pass-css-domain-split-baseline.md).
const extraSafeClasses = new Set([
  "confirmCell", "importantCell", "reviewStateCell", "ssenMetaCell", "span2",
  "softTinyButton", "questionRowsPreview", "questionRowsPreviewChips"
]);
function isSafeSelector(sel) {
  const leftmost = sel.trim().split(/\s|>|\+|~/)[0];
  const m = leftmost.match(/^\.([A-Za-z0-9_-]+)/);
  if (!m) return false;
  const cls = m[1];
  if (/^(examAnalysis|examPrompt)[A-Z]/.test(cls)) return true;
  return extraSafeClasses.has(cls);
}

// Two genuinely shared mega-utility rules mix .examAnalysisGrid /
// .examAnalysisFormGrid into a single declaration with dozens of unrelated
// domains' grid-layout classes. Those must stay in App.css -- confirm they
// are still there and were not accidentally duplicated into the domain file.
assert.ok(appCss.includes(".examAnalysisGrid,"), "shared examAnalysisGrid mega-rule must remain in App.css");
assert.ok(appCss.includes(".examAnalysisFormGrid,"), "shared examAnalysisFormGrid mega-rule must remain in App.css");

const domainRoot = postcss.parse(domainCss);
let domainSelectorCount = 0;
domainRoot.walkRules((rule) => {
  for (const selector of rule.selectors ?? [rule.selector]) {
    domainSelectorCount++;
    assert.ok(isSafeSelector(selector), `domain CSS selector must be examAnalysis/examPrompt-scoped or on the confirmed-exclusive list: ${selector}`);
  }
});
assert.equal(domainSelectorCount, 428);

// No selector that moved should still have a same-name rule left behind in
// App.css (the two mega-rules above are the sole, confirmed exceptions).
const appRoot = postcss.parse(appCss);
const appSelectors = new Set();
appRoot.walkRules((rule) => {
  for (const selector of rule.selectors ?? [rule.selector]) appSelectors.add(selector);
});
const domainSelectors = new Set();
domainRoot.walkRules((rule) => {
  for (const selector of rule.selectors ?? [rule.selector]) domainSelectors.add(selector);
});
// .examAnalysisGrid and .examAnalysisFormGrid each have a second, narrower
// rule (e.g. a responsive grid-template-columns override) that is exam-
// analysis-exclusive and correctly moved, while their shared mega-rule
// declaration stays in App.css -- the same selector legitimately owning two
// separate rule blocks is normal CSS, not a duplication bug.
const knownDualOwnershipSelectors = new Set([".examAnalysisGrid", ".examAnalysisFormGrid"]);
const overlap = [...domainSelectors].filter((sel) => appSelectors.has(sel) && !knownDualOwnershipSelectors.has(sel));
assert.deepEqual(overlap, [], `moved selectors must not also remain in App.css: ${overlap.join(", ")}`);

console.log(`exam analysis pipeline center CSS domain split passed · ${domainSelectorCount} selectors moved · 2 shared mega-rules correctly left behind · zero App.css overlap`);
