import assert from "node:assert/strict";

import { defineApiPayloadContract } from "../src/shared/contracts/apiPayloadContract.js";
import {
  getVersionedWriteRouteContract,
  parseVersionedWriteRequest,
  parseVersionedWriteResponse,
  versionedWriteRouteContracts
} from "../src/shared/contracts/versionedWriteRouteContracts.js";

assert.equal(versionedWriteRouteContracts.length, 6);
assert.equal(new Set(versionedWriteRouteContracts.map(({ key }) => key)).size, 6);
assert.equal(new Set(versionedWriteRouteContracts.map(({ method, path }) => `${method} ${path}`)).size, 6);
assert.equal(versionedWriteRouteContracts.every(Object.isFrozen), true);
assert.equal(versionedWriteRouteContracts.every(({ request, response, sources }) => (
  Object.isFrozen(request) && Object.isFrozen(response) && Object.isFrozen(sources)
)), true);

const rowsPayload = parseVersionedWriteRequest("post", "/api/lesson-journal/rows/save", {
  auditId: "  lesson-rows-audit  ",
  homeworkChanges: [{ after: { homeworkId: "homework-1" }, before: null }],
  recordChanges: [{ after: { lessonStudentRecordId: "record-1" }, before: null }]
});
assert.equal(rowsPayload.auditId, "lesson-rows-audit");
assert.equal(rowsPayload.homeworkChanges.length, 1);
assert.equal(rowsPayload.recordChanges.length, 1);

const legacyMakeupPayload = parseVersionedWriteRequest("POST", "/api/lesson-journal/makeup-tasks/save", {
  tasks: [{ makeupTaskId: "task-legacy" }]
});
assert.deepEqual(legacyMakeupPayload, {
  auditId: "",
  makeupTasks: [{ makeupTaskId: "task-legacy" }]
});

const rosterPayload = parseVersionedWriteRequest("POST", "/api/class-rosters/save", {
  auditId: "class-roster-audit"
});
assert.deepEqual(rosterPayload.lessonChanges, []);
assert.deepEqual(rosterPayload.studentChanges, []);
assert.notEqual(rosterPayload.lessonChanges, rosterPayload.studentChanges);

const response = parseVersionedWriteResponse("POST", "/api/supplement-schedules/save", {
  auditId: "supplement-audit",
  lesson: { lessonId: "lesson-1" },
  makeupTask: { makeupTaskId: "task-1" },
  source: "supabase",
  verified: true
});
assert.deepEqual(response, {
  auditId: "supplement-audit",
  source: "supabase",
  verified: true
});

assert.equal(
  getVersionedWriteRouteContract("POST", "/api/school-calendar/derived-save")?.domain,
  "schoolCalendar"
);
assert.equal(getVersionedWriteRouteContract("GET", "/api/lesson-journal/rows/save"), null);

for (const [payload, expectedField] of [
  [null, ""],
  [{ auditId: "audit", recordChanges: {} }, "recordChanges"],
  [{ auditId: "audit", recordChanges: [], unexpected: true }, "unexpected"]
]) {
  assert.throws(
    () => parseVersionedWriteRequest("POST", "/api/lesson-journal/rows/save", payload),
    (error) => (
      error.name === "ApiPayloadContractError" &&
      error.code === "INVALID_API_PAYLOAD" &&
      error.statusCode === 400 &&
      error.field === expectedField
    )
  );
}

assert.throws(
  () => parseVersionedWriteRequest("POST", "/api/supplement-schedules/save", {
    auditId: "",
    lessonChange: {},
    taskChange: {}
  }),
  (error) => error.field === "auditId" && error.statusCode === 400
);
assert.throws(
  () => parseVersionedWriteResponse("POST", "/api/class-rosters/save", {
    source: "supabase",
    verified: "true"
  }),
  (error) => error.field === "verified" && error.statusCode === 400
);
assert.throws(
  () => parseVersionedWriteRequest("POST", "/api/not-in-inventory", {}),
  /등록되지 않은 versioned write route/
);
assert.throws(
  () => parseVersionedWriteRequest("POST", "/api/lesson-journal/makeup-tasks/save", {
    makeupTasks: [],
    tasks: []
  }),
  (error) => error.field === "makeupTasks" && error.statusCode === 400
);
assert.throws(
  () => defineApiPayloadContract({
    fields: {
      canonical: { aliases: ["shared"], type: "string" },
      other: { aliases: ["shared"], type: "string" }
    },
    name: "duplicate alias"
  }),
  /field\/alias가 중복/
);

console.log("versioned write route contracts passed · 6 routes · canonical keys and declared legacy alias only");
