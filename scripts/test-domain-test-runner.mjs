import assert from "node:assert/strict";
import { domainTestGroups, validateDomainTestGroups } from "./run-domain-tests.mjs";

assert.deepEqual(validateDomainTestGroups(), []);
assert.deepEqual(Object.keys(domainTestGroups), [
  "lesson",
  "supplement",
  "student",
  "notification",
  "settlement"
]);
assert.ok(Object.values(domainTestGroups).every((files) => files.length >= 5));

console.log("domain test runner contract passed");
