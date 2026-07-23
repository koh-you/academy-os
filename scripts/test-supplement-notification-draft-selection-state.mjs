import assert from "node:assert/strict";
import {
  getActiveSupplementNotificationDraftField,
  selectSupplementNotificationDraftField
} from "../src/domains/supplements/useSupplementNotificationDraftSelectionState.js";

const source = {
  "task-a": "notificationDraft",
  "task-b": "studentScheduleNotice"
};

assert.equal(
  getActiveSupplementNotificationDraftField(source, "task-a", "parentScheduleNotice"),
  "notificationDraft"
);
assert.equal(
  getActiveSupplementNotificationDraftField(source, "task-c", "parentScheduleNotice"),
  "parentScheduleNotice"
);

assert.deepEqual(
  selectSupplementNotificationDraftField(source, "task-a", "parentScheduleNotice"),
  {
    "task-a": "parentScheduleNotice",
    "task-b": "studentScheduleNotice"
  }
);
assert.deepEqual(source, {
  "task-a": "notificationDraft",
  "task-b": "studentScheduleNotice"
});

console.log("supplement notification draft selection state: deterministic contract passed");
