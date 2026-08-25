import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import postcss from "postcss";

const [appCss, componentSource, domainCss] = await Promise.all([
  readFile(new URL("../src/app/App.css", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/students/StudentModal.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/students/studentModal.css", import.meta.url), "utf8")
]);

assert.ok(componentSource.includes('import "./studentModal.css";'));

const safeClasses = new Set([
  "birthYearWithGrade", "intakeEndpointBox", "studentAddGrid", "studentAddSubmit",
  "studentBulkPlaceholder", "studentIntakeActionButtons", "studentIntakeActions",
  "studentIntakeAnswerList", "studentIntakeCard", "studentIntakeCardHeader",
  "studentIntakeGrid", "studentIntakeList", "studentIntakeMergeTarget",
  "studentIntakePanel", "studentIntakeRegisteredList",
  "studentIntakeRegistrationRecovery", "studentIntakeRegistrationStatus",
  "studentIntakeSummary"
]);

function isStudentModalSelector(selector) {
  const leftmost = selector.trim().split(/\s|>|\+|~/)[0];
  if (leftmost.includes(".studentAddModal")) return true;
  if (leftmost.includes(".studentAddSubmit")) return true;
  const match = leftmost.match(/^\.([A-Za-z0-9_-]+)/);
  return Boolean(match && safeClasses.has(match[1]));
}

const domainRoot = postcss.parse(domainCss);
const domainSelectors = [];
domainRoot.walkRules((rule) => {
  for (const selector of rule.selectors ?? [rule.selector]) {
    domainSelectors.push(selector);
    assert.ok(isStudentModalSelector(selector), `unexpected student modal selector: ${selector}`);
  }
});
assert.equal(domainSelectors.length, 61);

const appSelectors = [];
postcss.parse(appCss).walkRules((rule) => {
  appSelectors.push(...(rule.selectors ?? [rule.selector]));
});
assert.deepEqual(domainSelectors.filter((selector) => appSelectors.includes(selector)), []);
assert.ok(appSelectors.includes(".classRosterList:focus-visible"), "shared class roster focus rule must remain in App.css");

console.log("student modal CSS domain split passed · 61 selectors moved · shared class roster rule preserved");
