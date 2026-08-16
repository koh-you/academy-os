import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import postcss from "postcss";

const [appCss, componentSource, domainCss, mainSource, scenarioSource] = await Promise.all([
  readFile(new URL("../src/app/App.css", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/notifications/ParentResponseContextPanel.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/notifications/parentResponseContextPanel.css", import.meta.url), "utf8"),
  readFile(new URL("../src/main.jsx", import.meta.url), "utf8"),
  readFile(new URL("./scenario-tests-production.cjs", import.meta.url), "utf8")
]);

assert.ok(componentSource.includes('import "./parentResponseContextPanel.css";'));
assert.equal(appCss.includes("parentResponseContext"), false);
assert.ok(mainSource.indexOf('import "./app/App.tokens.css";') < mainSource.indexOf('import "./app/App.css";'));
assert.ok(scenarioSource.includes("parentResponseContextPanelCssPath"));
assert.ok(scenarioSource.includes("parentResponseContextPanelCssSource"));

const root = postcss.parse(domainCss);
const occurrences = [];
root.walkRules((rule) => {
  const media = rule.parent?.type === "atrule"
    ? `@${rule.parent.name} ${rule.parent.params}`
    : "root";
  for (const selector of rule.selectors ?? []) {
    assert.ok(
      selector.startsWith(".parentResponseContext"),
      `domain CSS selector must stay anchored to parent response context: ${selector}`
    );
    occurrences.push({ media, selector });
  }
});

const requiredSelectors = [
  ".parentResponseContextPanel",
  ".parentResponseContextTools",
  ".parentResponseContextList",
  ".parentResponseContextCard",
  ".parentResponseContextMeta",
  ".parentResponseContextActions",
  ".parentResponseContextBody",
  ".parentResponseContextBody:focus-visible"
];
for (const selector of requiredSelectors) {
  assert.ok(occurrences.some((entry) => entry.selector === selector), `missing domain selector: ${selector}`);
}

const counts = new Map();
for (const occurrence of occurrences) {
  const key = `${occurrence.media} :: ${occurrence.selector}`;
  counts.set(key, (counts.get(key) ?? 0) + 1);
}
const repeatedWithinSameCascadeContext = [...counts]
  .filter(([, count]) => count > 1)
  .map(([key, count]) => ({ count, key }));
assert.deepEqual(repeatedWithinSameCascadeContext, [
  { count: 2, key: "root :: .parentResponseContextActions > span" }
]);

assert.ok(domainCss.includes("@media (max-width: 720px)"));
assert.ok(domainCss.includes("@media (max-width: 640px)"));
assert.equal(occurrences.length, 31);

console.log(
  "fourth-pass CSS domain split passed · parent response 31 selectors · App.css overlap 0 · one preserved complementary base selector"
);
