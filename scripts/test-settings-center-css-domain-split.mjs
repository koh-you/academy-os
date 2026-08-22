import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import postcss from "postcss";

const [appCss, componentSource, domainCss] = await Promise.all([
  readFile(new URL("../src/app/App.css", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/settings/SettingsCenter.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/settings/settingsCenter.css", import.meta.url), "utf8")
]);

assert.ok(componentSource.includes('import "./settingsCenter.css";'));

// Confirmed exclusive to SettingsCenter.jsx via a cross-src/domains grep
// before the move (see docs/app-refactor-fourth-pass-css-domain-split-baseline.md).
const safeClasses = new Set([
  "accountSettingsActions", "accountSettingsGrid", "aiSettingBadge", "fieldBadge",
  "integrationStatusGrid", "notificationTemplateEditor", "notificationTemplateEditorTop",
  "notificationTemplateSettingsGrid", "promptEditor", "promptMappingCard",
  "promptSettingsLayout", "promptTabList", "settingsCard", "settingsHero", "settingsPage",
  "settingsRow", "settingsRows", "settingsSectionTabs", "settingsTemplateTestGrid",
  "templateResultCard", "templateResultMeta", "templateTestGrid"
]);
function isSafeSelector(sel) {
  const leftmost = sel.trim().split(/\s|>|\+|~/)[0];
  const m = leftmost.match(/^\.([A-Za-z0-9_-]+)/);
  return Boolean(m && safeClasses.has(m[1]));
}

// .settingsPage/.settingsHero and .integrationStatusGrid/.templateTestGrid/
// .notificationTemplateSettingsGrid/.promptSettingsLayout/.accountSettingsGrid/
// .settingsRow each also appear inside shared mega-rules used by other
// domains (classManager/lessonResearch/aiVariant page shells; the generic
// grid-layout utility rule; a generic field/row-grid utility rule) -- those
// must stay in App.css.
for (const cls of [".settingsPage", ".settingsHero", ".integrationStatusGrid", ".templateTestGrid", ".notificationTemplateSettingsGrid", ".promptSettingsLayout", ".accountSettingsGrid", ".settingsRow"]) {
  assert.ok(
    appCss.includes(`${cls},`) || appCss.includes(`${cls}.`) || appCss.includes(`${cls} {`),
    `shared mega-rule selector must remain in App.css: ${cls}`
  );
}

const domainRoot = postcss.parse(domainCss);
let domainSelectorCount = 0;
const domainSelectors = new Set();
domainRoot.walkRules((rule) => {
  for (const selector of rule.selectors ?? [rule.selector]) {
    domainSelectorCount++;
    domainSelectors.add(selector);
    assert.ok(isSafeSelector(selector), `domain CSS selector must be on the confirmed-exclusive list: ${selector}`);
  }
});
assert.equal(domainSelectorCount, 47);

const appRoot = postcss.parse(appCss);
const appSelectors = new Set();
appRoot.walkRules((rule) => {
  for (const selector of rule.selectors ?? [rule.selector]) appSelectors.add(selector);
});
const knownDualOwnershipSelectors = new Set([
  ".settingsPage", ".settingsHero", ".integrationStatusGrid", ".templateTestGrid",
  ".notificationTemplateSettingsGrid", ".promptSettingsLayout", ".accountSettingsGrid", ".settingsRow"
]);
const overlap = [...domainSelectors].filter((sel) => appSelectors.has(sel) && !knownDualOwnershipSelectors.has(sel));
assert.deepEqual(overlap, [], `moved selectors must not also remain in App.css: ${overlap.join(", ")}`);

console.log(`settings center CSS domain split passed · ${domainSelectorCount} selectors moved · 8 shared mega-rule selectors correctly left behind`);
