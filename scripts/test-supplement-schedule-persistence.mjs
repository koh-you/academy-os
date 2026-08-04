import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
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
const firstSavedAt = "2026-08-05T06:30:00.000Z";
const latestSavedAt = "2026-08-05T06:31:00.000Z";
const request = async (path, body) => {
  assert.equal(path, "/api/supplement-schedules/save");
  requestBodies.push(structuredClone(body));
  if (requestBodies.length === 1) {
    throw new TypeError("response lost after commit");
  }
  const savedAt = requestBodies.length === 2 ? firstSavedAt : latestSavedAt;
  return {
    auditId: body.auditId,
    lesson: { ...body.lessonChange.after, updatedAt: savedAt },
    makeupTask: { ...body.taskChange.after, updatedAt: savedAt },
    source: "supabase",
    verified: true
  };
};

await assert.rejects(
  saveSupplementScheduleAction({ plan, request, requestKey }),
  /response lost/
);
const latestPlan = createSupplementScheduleSavePlan({
  afterLesson: {
    ...afterLesson,
    date: "2026-08-06",
    endTime: "17:00",
    lessonTopic: "사용자가 응답 대기 중 수정한 보충 일정",
    startTime: "16:00"
  },
  afterTask: {
    ...afterTask,
    linkedLessonDate: "2026-08-06",
    linkedLessonTime: "16:00",
    notificationDraft: "응답 대기 중 수정한 최신 알림 초안",
    scheduleChangeDetail: "최신 일정과 메모를 함께 보존",
    scheduledDate: "2026-08-06",
    scheduledTime: "16:00"
  }
});
assert.equal(
  createSupplementScheduleRequestKey(latestPlan.taskChange.after),
  requestKey,
  "날짜·시간 변경은 같은 logical task의 응답 불명 audit를 먼저 회수해야 합니다."
);
const retryResult = await saveSupplementScheduleAction({
  plan: latestPlan,
  request,
  requestKey
});
assert.equal(retryResult.verified, true);
assert.equal(retryResult.makeupTask.notificationDraft, "응답 대기 중 수정한 최신 알림 초안");
assert.equal(requestBodies.length, 3);
assert.equal(requestBodies[0].auditId, requestBodies[1].auditId);
assert.notEqual(requestBodies[1].auditId, requestBodies[2].auditId);
assert.deepEqual(requestBodies[0].lessonChange, requestBodies[1].lessonChange);
assert.deepEqual(requestBodies[0].taskChange, requestBodies[1].taskChange);
assert.deepEqual(requestBodies[2].lessonChange.before, {
  ...afterLesson,
  updatedAt: firstSavedAt
});
assert.deepEqual(requestBodies[2].taskChange.before, {
  ...afterTask,
  updatedAt: firstSavedAt
});
assert.equal(requestBodies[2].lessonChange.after.lessonTopic, "사용자가 응답 대기 중 수정한 보충 일정");
assert.equal(requestBodies[2].lessonChange.after.date, "2026-08-06");
assert.equal(requestBodies[2].lessonChange.after.startTime, "16:00");
assert.equal(requestBodies[2].lessonChange.after.updatedAt, firstSavedAt);
assert.equal(requestBodies[2].taskChange.after.scheduleChangeDetail, "최신 일정과 메모를 함께 보존");
assert.equal(requestBodies[2].taskChange.after.scheduledDate, "2026-08-06");
assert.equal(requestBodies[2].taskChange.after.scheduledTime, "16:00");
assert.equal(requestBodies[2].taskChange.after.updatedAt, firstSavedAt);

assert.deepEqual(Object.keys(requestBodies[2]).sort(), ["auditId", "lessonChange", "taskChange"]);

resetSupplementSchedulePendingRequestsForTests();
const responseStates = [];
await assert.rejects(
  saveSupplementScheduleAction({
    onStateChange: (state) => responseStates.push(state),
    plan,
    request: async (_path, body) => ({
      auditId: body.auditId,
      lesson: body.lessonChange.after,
      makeupTask: body.taskChange.after,
      source: "supabase",
      verified: "true"
    }),
    requestKey
  }),
  (error) => error.code === "INVALID_API_PAYLOAD" && error.field === "verified"
);
assert.equal(responseStates.at(-1)?.state, "failed");

const serverSource = await readFile(new URL("../api/server.js", import.meta.url), "utf8");
const routeStart = serverSource.indexOf('requestUrl.pathname === "/api/supplement-schedules/save"');
const routeEnd = serverSource.indexOf('requestUrl.pathname === "/api/makeup-tasks"', routeStart);
const supplementScheduleRouteSource = serverSource.slice(routeStart, routeEnd);
assert.ok(routeStart >= 0 && routeEnd > routeStart);
assert.match(supplementScheduleRouteSource, /parseVersionedWriteRequest\(/);
assert.match(supplementScheduleRouteSource, /error\.field \? \{ field: error\.field \}/);

console.log("supplement schedule plan validation and unknown-result latest-draft retry fixture passed");
