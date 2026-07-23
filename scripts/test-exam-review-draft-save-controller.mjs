import assert from "node:assert/strict";
import { createExamReviewDraftSaveController } from "../src/domains/exams/examReviewDraftSaveController.js";

let nextTimerId = 0;
const timers = new Map();
const clearedTimerIds = [];
const scheduledDelays = [];
const savedValues = [];

const controller = createExamReviewDraftSaveController({
  clearTimer(timerId) {
    clearedTimerIds.push(timerId);
    timers.delete(timerId);
  },
  delayMs: 500,
  setTimer(callback, delayMs) {
    nextTimerId += 1;
    scheduledDelays.push(delayMs);
    timers.set(nextTimerId, callback);
    return nextTimerId;
  }
});

controller.setLatestValue("초기값");
controller.schedule("첫 수정", (value) => savedValues.push(value));
const firstTimerId = nextTimerId;
controller.schedule("최신 수정", (value) => savedValues.push(value));
const latestTimerId = nextTimerId;

assert.deepEqual(scheduledDelays, [500, 500]);
assert.deepEqual(clearedTimerIds, [firstTimerId]);
assert.equal(timers.has(firstTimerId), false);
assert.equal(timers.has(latestTimerId), true);

timers.get(latestTimerId)();
assert.deepEqual(savedValues, ["최신 수정"]);

controller.schedule("blur 직전", (value) => savedValues.push(`timer:${value}`));
const blurTimerId = nextTimerId;
controller.flush((value) => savedValues.push(`flush:${value}`));
assert.equal(timers.has(blurTimerId), false);
assert.deepEqual(savedValues, ["최신 수정", "flush:blur 직전"]);

controller.flush((value) => savedValues.push(`close:${value}`));
assert.deepEqual(savedValues, ["최신 수정", "flush:blur 직전", "close:blur 직전"]);

controller.schedule("unmount 직전", (value) => savedValues.push(`canceled:${value}`));
const canceledTimerId = nextTimerId;
controller.cancel();
assert.equal(timers.has(canceledTimerId), false);
assert.equal(savedValues.some((value) => value.startsWith("canceled:")), false);

console.log("exam review draft save controller fixtures passed");
