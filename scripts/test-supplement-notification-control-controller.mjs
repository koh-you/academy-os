import assert from "node:assert/strict";
import { createSupplementNotificationControlActionHandler } from "../src/domains/supplements/supplementNotificationControlController.js";

function createHarness(overrides = {}) {
  const events = [];
  const notificationControlTask = { makeupTaskId: "task-1" };
  const notificationControlJob = { notificationJobId: "job-1", status: "scheduled" };
  const handleNotificationControlAction = createSupplementNotificationControlActionHandler({
    notificationControl: { controlType: "studentSchedule" },
    notificationControlBusy: false,
    notificationControlConfig: { statusField: "studentChangeNotice" },
    notificationControlJob,
    notificationControlTask,
    onCancelNotification: async (job) => {
      events.push(["cancel", job]);
      return { message: "예약 취소 완료", status: "canceled" };
    },
    onReserveNotification: async (task, controlType) => {
      events.push(["reserve", task, controlType]);
      return { message: "예약 생성 완료", status: "scheduled" };
    },
    setNotificationControlBusy: (value) => events.push(["busy", value]),
    setNotificationControlFeedback: (value) => events.push(["feedback", value]),
    setTaskSaveStatusPatch: (taskId, patch) => events.push(["status", taskId, patch]),
    ...overrides
  });
  return {
    events,
    handleNotificationControlAction,
    notificationControlJob,
    notificationControlTask
  };
}

const reserve = createHarness();
const reserveResult = await reserve.handleNotificationControlAction("reserve");
assert.equal(reserveResult.status, "scheduled");
assert.deepEqual(reserve.events.map(([type]) => type), [
  "busy",
  "feedback",
  "reserve",
  "status",
  "feedback",
  "busy"
]);
assert.deepEqual(reserve.events[0], ["busy", true]);
assert.deepEqual(reserve.events[2], ["reserve", reserve.notificationControlTask, "studentSchedule"]);
assert.deepEqual(reserve.events[3], ["status", "task-1", { studentChangeNotice: "scheduled" }]);
assert.deepEqual(reserve.events.at(-1), ["busy", false]);

const cancel = createHarness();
const cancelResult = await cancel.handleNotificationControlAction("cancel");
assert.equal(cancelResult.status, "canceled");
assert.deepEqual(cancel.events.map(([type]) => type), [
  "busy",
  "feedback",
  "cancel",
  "status",
  "feedback",
  "busy"
]);
assert.equal(cancel.events[2][1], cancel.notificationControlJob);
assert.deepEqual(cancel.events[3], ["status", "task-1", { studentChangeNotice: "canceled" }]);

for (const overrides of [
  { notificationControl: null },
  { notificationControlBusy: true },
  { notificationControlTask: null }
]) {
  const guarded = createHarness(overrides);
  assert.equal(await guarded.handleNotificationControlAction("reserve"), undefined);
  assert.deepEqual(guarded.events, []);
}

const failed = createHarness({
  onReserveNotification: async () => {
    throw new Error("Solapi 예약 실패");
  }
});
assert.equal(await failed.handleNotificationControlAction("reserve"), null);
assert.deepEqual(failed.events.map(([type]) => type), ["busy", "feedback", "feedback", "busy"]);
assert.equal(failed.events[2][1].tone, "failed");
assert.deepEqual(failed.events.at(-1), ["busy", false]);

console.log("supplement notification control controller fixture passed");
