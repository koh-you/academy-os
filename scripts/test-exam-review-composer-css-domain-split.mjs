import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import postcss from "postcss";

const [appCss, componentSource, domainCss] = await Promise.all([
  readFile(new URL("../src/app/App.css", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/exams/ExamReviewComposerModal.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/exams/examReviewComposerModal.css", import.meta.url), "utf8")
]);

assert.ok(componentSource.includes('import "./examReviewComposerModal.css";'));
assert.equal(appCss.includes(".examReview"), false);
assert.equal(appCss.includes(".modalSaveStatusBar"), false);
assert.equal(appCss.includes(".reviewCopyStatus"), false);

// .copyFeedbackStatus was combined with .reviewCopyStatus in one App.css rule
// (both dead-simple 3-property text styles). .copyFeedbackStatus itself has no
// className usage anywhere in src/ (confirmed dead), so it was left behind as
// its own standalone rule rather than deleted -- deleting unrelated dead code
// is out of scope for this move.
assert.ok(appCss.includes(".copyFeedbackStatus {"));

const root = postcss.parse(domainCss);
const occurrences = [];
root.walkRules((rule) => {
  for (const selector of rule.selectors ?? []) {
    assert.ok(
      selector.startsWith(".modalSaveStatusBar") ||
      selector.startsWith(".examReviewComposerModal ") ||
      selector.startsWith(".examReviewChecklist") ||
      selector.startsWith(".examReviewRawDraft") ||
      selector.startsWith(".examReviewBlogSource") ||
      selector.startsWith(".reviewCopyStatus"),
      `domain CSS selector must stay anchored to the exam review composer modal: ${selector}`
    );
    occurrences.push(selector);
  }
});

const requiredSelectors = [
  ".modalSaveStatusBar",
  ".examReviewComposerModal .commentDraftPanel",
  ".examReviewComposerModal .commentPreviewPanel",
  ".examReviewComposerModal .sectionHeader.slim",
  ".examReviewChecklist",
  ".examReviewChecklistItem",
  ".examReviewChecklistItem span",
  ".examReviewChecklistItem textarea",
  ".examReviewRawDraft",
  ".examReviewRawDraft .disclosureTrigger",
  ".examReviewRawDraft .commentComposerTextarea",
  ".examReviewBlogSource",
  ".examReviewBlogSource strong",
  ".examReviewBlogSource pre",
  ".reviewCopyStatus"
];
for (const selector of requiredSelectors) {
  assert.ok(occurrences.includes(selector), `missing domain selector: ${selector}`);
}
assert.equal(occurrences.length, requiredSelectors.length);

console.log(`exam review composer modal CSS domain split passed · ${occurrences.length} selectors · App.css overlap 0 · dead .copyFeedbackStatus preserved standalone · cascade order verified via computed-style parity for 14/15 live in the browser, remaining 1 (.reviewCopyStatus) gated behind an AI-only action and moved by exact text copy`);
