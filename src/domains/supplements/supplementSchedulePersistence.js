import {
  areLessonJournalHistoryLessonsEqual,
  areLessonJournalHistoryTimestampsEqual
} from "../lessons/lessonJournalHistoryPersistence.js";
import { createLessonJournalMakeupTaskPersistenceSnapshot } from "../lessons/lessonJournalMakeupTaskPersistence.js";
import { createSupplementSchedulePersistencePlan } from "./supplementSchedulePlan.js";
import { createSupplementSourceReconcileModel } from "./supplementSourceReconcileModel.js";
import { createPersistableSupplementTask } from "./supplementTaskDraft.js";

let pendingScheduleRequests = new Map();

function createSupplementScheduleTaskSnapshot(task = {}) {
  const snapshot = createLessonJournalMakeupTaskPersistenceSnapshot(task);
  delete snapshot.dueDate;
  delete snapshot.title;
  delete snapshot.type;
  if (!snapshot.sourceHomeworkId) delete snapshot.sourceHomeworkId;
  if (!snapshot.sourceLessonId) delete snapshot.sourceLessonId;
  return snapshot;
}

export function areSupplementScheduleTasksEqual(left = {}, right = {}) {
  return JSON.stringify(createSupplementScheduleTaskSnapshot(left)) ===
    JSON.stringify(createSupplementScheduleTaskSnapshot(right));
}

export function createSupplementScheduleAuditId(now = Date.now()) {
  const suffix = globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2, 10);
  return `supplement-schedule-${now}-${suffix}`;
}

export function createSupplementScheduleRequestKey(task = {}) {
  return [
    task.makeupTaskId,
    task.linkedLessonId
  ].map((value) => String(value ?? "").trim()).join(":");
}

export function createSupplementScheduleSavePlan({
  afterLesson = null,
  afterTask = null,
  beforeLesson = null,
  beforeTask = null
} = {}) {
  if (!afterLesson?.lessonId || !afterTask?.makeupTaskId) {
    throw new Error("보충 일정 저장에 수업일지와 보충관리 ID가 필요합니다.");
  }
  if (
    afterTask.linkedLessonId !== afterLesson.lessonId ||
    afterLesson.sourceMakeupTaskId !== afterTask.makeupTaskId
  ) {
    throw new Error("보충 항목과 수업일지의 양방향 연결이 일치하지 않습니다.");
  }
  if (
    afterTask.scheduledDate !== afterLesson.date ||
    String(afterTask.scheduledTime ?? "").slice(0, 5) !== String(afterLesson.startTime ?? "").slice(0, 5) ||
    afterTask.linkedLessonDate !== afterLesson.date ||
    String(afterTask.linkedLessonTime ?? "").slice(0, 5) !== String(afterLesson.startTime ?? "").slice(0, 5)
  ) {
    throw new Error("보충 항목의 실제·연결 일정과 수업일지 일정이 일치하지 않습니다.");
  }
  if (beforeLesson && beforeLesson.lessonId !== afterLesson.lessonId) {
    throw new Error("변경 전후 수업일지 ID가 다릅니다.");
  }
  if (beforeTask && beforeTask.makeupTaskId !== afterTask.makeupTaskId) {
    throw new Error("변경 전후 보충관리 ID가 다릅니다.");
  }
  if (
    beforeLesson &&
    beforeTask &&
    (
      beforeTask.linkedLessonId !== beforeLesson.lessonId ||
      (beforeLesson.sourceMakeupTaskId && beforeLesson.sourceMakeupTaskId !== beforeTask.makeupTaskId)
    )
  ) {
    throw new Error("변경 전 보충 항목과 수업일지 원천 연결이 일치하지 않습니다.");
  }
  return {
    lessonChange: { after: afterLesson, before: beforeLesson },
    taskChange: { after: afterTask, before: beforeTask }
  };
}

export function verifySupplementScheduleSavePlan({ lessonChange = {}, taskChange = {} } = {}, {
  lesson = null,
  makeupTask = null
} = {}) {
  return {
    lessonVerified: areLessonJournalHistoryLessonsEqual(lessonChange.after ?? {}, lesson ?? {}),
    taskVerified: areSupplementScheduleTasksEqual(taskChange.after ?? {}, makeupTask ?? {}),
    verified:
      areLessonJournalHistoryLessonsEqual(lessonChange.after ?? {}, lesson ?? {}) &&
      areSupplementScheduleTasksEqual(taskChange.after ?? {}, makeupTask ?? {})
  };
}

export function areSupplementScheduleVersionsEqual(left = "", right = "") {
  return areLessonJournalHistoryTimestampsEqual(left, right);
}

function createRebasedSupplementScheduleSavePlan(plan, result) {
  return createSupplementScheduleSavePlan({
    afterLesson: {
      ...plan.lessonChange.after,
      updatedAt: result.lesson.updatedAt
    },
    afterTask: {
      ...plan.taskChange.after,
      updatedAt: result.makeupTask.updatedAt
    },
    beforeLesson: result.lesson,
    beforeTask: result.makeupTask
  });
}

async function requestSupplementScheduleSave({ pending, request }) {
  const result = await request(
    "/api/supplement-schedules/save",
    { auditId: pending.auditId, ...pending.plan },
    30000,
    "보충 일정 저장이 30초를 넘었습니다. 입력을 유지한 채 같은 일정으로 다시 시도해 주세요."
  );
  if (
    result?.source !== "supabase" ||
    result?.verified !== true ||
    result?.auditId !== pending.auditId ||
    !verifySupplementScheduleSavePlan(pending.plan, result).verified
  ) {
    const error = new Error("보충 일정 저장 결과를 Supabase 재조회로 확인하지 못했습니다.");
    error.responseReceived = true;
    throw error;
  }
  return result;
}

export async function saveSupplementScheduleAction({
  onStateChange = () => {},
  plan,
  request,
  requestKey = ""
} = {}) {
  if (typeof request !== "function") throw new Error("보충 일정 저장 request가 필요합니다.");
  const normalizedKey = String(requestKey || "").trim();
  if (!normalizedKey) throw new Error("보충 일정 저장 요청 key가 필요합니다.");
  const pending = pendingScheduleRequests.get(normalizedKey) ?? {
    auditId: createSupplementScheduleAuditId(),
    plan
  };
  pendingScheduleRequests.set(normalizedKey, pending);
  onStateChange({ message: "수업일지와 보충 원천을 함께 저장하고 다시 확인하는 중입니다.", state: "saving" });

  try {
    let result = await requestSupplementScheduleSave({ pending, request });
    if (!verifySupplementScheduleSavePlan(plan, result).verified) {
      const rebasedPending = {
        auditId: createSupplementScheduleAuditId(),
        plan: createRebasedSupplementScheduleSavePlan(plan, result)
      };
      pendingScheduleRequests.set(normalizedKey, rebasedPending);
      onStateChange({
        message: "이전 저장 결과를 확인했습니다. 이후 변경을 최신 버전에 이어서 저장하고 있습니다.",
        state: "saving"
      });
      result = await requestSupplementScheduleSave({ pending: rebasedPending, request });
    }
    pendingScheduleRequests.delete(normalizedKey);
    onStateChange({ message: "수업일지 · 보충 원천 저장 완료", state: "saved" });
    return result;
  } catch (error) {
    if (error?.statusCode || error?.responseReceived || error?.code) {
      pendingScheduleRequests.delete(normalizedKey);
    }
    onStateChange({ message: error.message || "보충 일정 저장에 실패했습니다.", state: "failed" });
    throw error;
  }
}

export function saveSupplementScheduleSource({
  dependencies = {},
  lessons = [],
  makeupTasks = [],
  notificationJobs = [],
  request,
  students = [],
  task
} = {}) {
  const sourceReconcile = createSupplementSourceReconcileModel({
    lessons,
    notificationJobs,
    task
  });
  if (!sourceReconcile.canApplySchedule) {
    throw new Error(sourceReconcile.scheduleBlockReason || "보충 항목과 연결 수업일지 원천을 먼저 확인해 주세요.");
  }
  const { lesson, nextTask, student } = createSupplementSchedulePersistencePlan({
    ...dependencies,
    lessons,
    students,
    task
  });
  const persistableTask = createPersistableSupplementTask(nextTask);
  const plan = createSupplementScheduleSavePlan({
    afterLesson: lesson,
    afterTask: persistableTask,
    beforeLesson: lessons.find((item) => item.lessonId === lesson.lessonId) ?? null,
    beforeTask: makeupTasks.find((item) => item.makeupTaskId === persistableTask.makeupTaskId) ?? null
  });
  return saveSupplementScheduleAction({
    plan,
    request,
    requestKey: createSupplementScheduleRequestKey(persistableTask)
  }).then((result) => ({ ...result, student }));
}

export function resetSupplementSchedulePendingRequestsForTests() {
  pendingScheduleRequests = new Map();
}
