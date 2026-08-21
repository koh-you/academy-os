import assert from "node:assert/strict";
import { createExamPrepCalendarCluster } from "../src/domains/exams/examPrepCalendarCluster.js";
import { getDefaultExamCycleForDate as serverGetDefaultExamCycleForDate } from "../src/shared/persistence/learningCalendarRowMappers.js";

const clientCluster = createExamPrepCalendarCluster("2026-01-01");
const clientGetDefaultExamCycleForDate = clientCluster.getDefaultExamCycleForDate;

const cases = [
  ["2026-01-15", "2026-1-mid"],
  ["2026-05-31", "2026-1-mid"],
  ["2026-06-01", "2026-1-final"],
  ["2026-07-31", "2026-1-final"],
  ["2026-08-01", "2026-2-mid"],
  ["2026-10-31", "2026-2-mid"],
  ["2026-11-01", "2026-2-final"],
  ["2026-12-31", "2026-2-final"],
  ["2027-03-10", "2027-1-mid"],
  ["2030-09-05", "2030-2-mid"]
];

for (const [dateString, expected] of cases) {
  const clientResult = clientGetDefaultExamCycleForDate(dateString);
  const serverResult = serverGetDefaultExamCycleForDate(dateString);
  assert.equal(clientResult, expected, `client getDefaultExamCycleForDate(${dateString}) expected ${expected}, got ${clientResult}`);
  assert.equal(serverResult, expected, `server getDefaultExamCycleForDate(${dateString}) expected ${expected}, got ${serverResult}`);
  assert.equal(
    clientResult,
    serverResult,
    `client/server getDefaultExamCycleForDate disagree for ${dateString}: client=${clientResult} server=${serverResult}`
  );
}

console.log(`exam cycle default parity passed · ${cases.length} dates across seasons and years · client (examPrepCalendarCluster.js) and server (learningCalendarRowMappers.js) implementations agree`);
