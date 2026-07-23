import assert from "node:assert/strict";
import {
  createSupplementTaskActionKey,
  isSupplementTaskActionBusy,
  isSupplementTaskBusy
} from "../src/domains/supplements/useSupplementTaskBusyState.js";

assert.equal(createSupplementTaskActionKey("task-a", "schedule"), "task-a:schedule");
assert.equal(isSupplementTaskActionBusy("task-a:schedule", "task-a", "schedule"), true);
assert.equal(isSupplementTaskActionBusy("task-a:content", "task-a", "schedule"), false);
assert.equal(isSupplementTaskBusy("task-a:cancelAbsence", "task-a"), true);
assert.equal(isSupplementTaskBusy("task-b:pass", "task-a"), false);
assert.equal(isSupplementTaskBusy("", "task-a"), false);

console.log("supplement task busy state: deterministic contract passed");
