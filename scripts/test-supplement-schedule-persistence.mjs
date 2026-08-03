import assert from "node:assert/strict";
import {
  createSupplementScheduleRequestKey,
  createSupplementScheduleSavePlan,
  resetSupplementSchedulePendingRequestsForTests,
  saveSupplementScheduleAction,
  verifySupplementScheduleSavePlan
} from "../src/domains/supplements/supplementSchedulePersistence.js";

const afterLesson = {
  className: "안전 보충",
  date: "2026-08-05",
  endTime: "16:30",
  lessonId: "safe-supplement-lesson",
  lessonType: "makeup",
  sourceMakeupTaskId: "safe-supplement-task",
  startTime: "15:30",
  status: "scheduled",
  studentIds: ["safe-student"]
};
const afterTask = {
  linkedLessonDate: "2026-08-05",
  linkedLessonId: "safe-supplement-lesson",
  linkedLessonTime: "15:30",
  makeupTaskId: "safe-supplement-task",
  scheduledDate: "2026-08-05",
  scheduledTime: "15:30",
  sourceId: "safe-source",
  status: "scheduled",
  studentId: "safe-student",
  taskType: "absence_makeup"
};

const plan = createSupplementScheduleSavePlan({ afterLesson, afterTask });
assert.deepEqual(plan.lessonChange, { after: afterLesson, before: null });
assert.deepEqual(plan.taskChange, { after: afterTask, before: null });
assert.equal(verifySupplementScheduleSavePlan(plan, { lesson: afterLesson, makeupTask: afterTask }).verified, true);
assert.throws(
  () => createSupplementScheduleSavePlan({
    afterLesson,
    afterTask: { ...afterTask, linkedLessonId: "wrong-lesson" }
  }),
  /양방향 연결/
);
assert.throws(
  () => createSupplementScheduleSavePlan({
    afterLesson,
    afterTask: { ...afterTask, linkedLessonTime: "16:00" }
  }),
  /실제·연결 일정/
);

resetSupplementSchedulePendingRequestsForTests();
const requestBodies = [];
const requestKey = createSupplementScheduleRequestKey(afterTask);
let firstRequest = true;
const request = async (path, body) => {
  assert.equal(path, "/api/supplement-schedules/save");
  requestBodies.push(structuredClone(body));
  if (firstRequest) {
    firstRequest = false;
    throw new TypeError("response lost after commit");
  }
  return {
    auditId: body.auditId,
    lesson: { ...body.lessonChange.after, updatedAt: "2026-08-05T06:30:00.000Z" },
    makeupTask: { ...body.taskChange.after, updatedAt: "2026-08-05T06:30:00.001Z" },
    source: "supabase",
    verified: true
  };
};

await assert.rejects(
  saveSupplementScheduleAction({ plan, request, requestKey }),
  /response lost/
);
const retryResult = await saveSupplementScheduleAction({
  plan: createSupplementScheduleSavePlan({
    afterLesson: { ...afterLesson, startTime: "16:00" },
    afterTask: { ...afterTask, linkedLessonTime: "16:00", scheduledTime: "16:00" }
  }),
  request,
  requestKey
});
assert.equal(retryResult.verified, true);
assert.equal(requestBodies.length, 2);
assert.equal(requestBodies[0].auditId, requestBodies[1].auditId);
assert.deepEqual(requestBodies[0].lessonChange, requestBodies[1].lessonChange);
assert.deepEqual(requestBodies[0].taskChange, requestBodies[1].taskChange);

console.log("supplement schedule plan validation and unknown-result retry fixture passed");
