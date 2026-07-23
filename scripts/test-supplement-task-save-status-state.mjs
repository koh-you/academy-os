import assert from "node:assert/strict";
import {
  getSupplementTaskSaveStatus
} from "../src/domains/supplements/useSupplementTaskSaveStatusState.js";

const source = {
  "task-a": {
    lesson: "saved",
    makeupTask: "changed",
    notificationDraft: "saved"
  }
};

assert.deepEqual(getSupplementTaskSaveStatus(source, "task-a"), {
  lesson: "saved",
  makeupTask: "changed",
  notificationDraft: "saved"
});
assert.deepEqual(getSupplementTaskSaveStatus(source, "task-missing"), {});
assert.deepEqual(source, {
  "task-a": {
    lesson: "saved",
    makeupTask: "changed",
    notificationDraft: "saved"
  }
});

console.log("supplement task save status state: deterministic contract passed");
