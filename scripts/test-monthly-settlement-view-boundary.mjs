import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [appSource, calendarSource, panelSource, tableSource] = await Promise.all([
  readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/settlements/MonthlySettlementCalendar.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/settlements/MonthlySettlementPanel.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/settlements/MonthlySettlementRegularTable.jsx", import.meta.url), "utf8")
]);

function getOpeningTagProps(source, componentName) {
  const match = source.match(new RegExp(`<${componentName}\\s+([\\s\\S]*?)/>`));
  assert.ok(match, `missing ${componentName} opening tag`);
  return [...match[1].matchAll(/\b([A-Za-z][A-Za-z0-9]*)=/g)].map((item) => item[1]).sort();
}

assert.deepEqual(
  getOpeningTagProps(panelSource, "MonthlySettlementRegularTable"),
  [
    "activeRows",
    "excludedRows",
    "handleModeChange",
    "rows",
    "selectedMonth",
    "setSelectedCalendarStudentId",
    "updateStudentSetting"
  ]
);
assert.deepEqual(
  getOpeningTagProps(panelSource, "MonthlySettlementCalendar"),
  [
    "isDirty",
    "monthKey",
    "onClose",
    "onRegularCountChange",
    "onSave",
    "row",
    "saveMessage",
    "saveState"
  ]
);

for (const contract of [
  "activeRows={activeRows}",
  "excludedRows={excludedRows}",
  "handleModeChange={handleModeChange}",
  "rows={rows}",
  "selectedMonth={selectedMonth}",
  "setSelectedCalendarStudentId={setSelectedCalendarStudentId}",
  "updateStudentSetting={updateStudentSetting}",
  "onSave={handleSave}",
  "row={selectedCalendarRow}",
  '"regularCountOverride"'
]) {
  assert.ok(panelSource.includes(contract), `missing direct view binding: ${contract}`);
}

for (const contract of [
  "export function MonthlySettlementRegularTable({",
  "activeRows.map((row)",
  "handleModeChange(row, event.target.value)",
  "setSelectedCalendarStudentId(row.student.studentId)",
  'updateStudentSetting(row.student.studentId, "excluded", false)',
  "label=\"월별 정규 수업 정산\""
]) {
  assert.ok(tableSource.includes(contract), `missing regular table contract: ${contract}`);
}
for (const contract of [
  "export function MonthlySettlementCalendar({",
  "row.regularEvents",
  "row.closureReplacementEvents",
  "row.makeupEvents",
  "row.specialEvents",
  "onRegularCountChange(event.target.value)",
  "disabled={!isDirty || saveState === \"saving\"}",
  "onClick={onSave}"
]) {
  assert.ok(calendarSource.includes(contract), `missing calendar contract: ${contract}`);
}

for (const [name, source] of [
  ["calendar", calendarSource],
  ["regular table", tableSource]
]) {
  for (const forbidden of [
    "useState(",
    "useEffect(",
    "fetch(",
    "localStorage",
    "postAppState",
    "/api/",
    "notification_jobs",
    "Solapi"
  ]) {
    assert.equal(source.includes(forbidden), false, `${name} must not own ${forbidden}`);
  }
}

assert.ok(appSource.includes("async function handleSaveMonthlySettlementMonth(month)"));
assert.ok(appSource.includes("getMonthlySettlementMonthSaveSnapshot(persistedMonth)"));
assert.ok(appSource.includes("setMonthlyInstructorSettlements(persistedState)"));

console.log("monthly settlement view boundary fixtures passed");
