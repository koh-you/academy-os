import {
  safeIdPart,
  shortStableHash
} from "../../shared/utils/id.js";

const volatileMakeupTaskFields = new Set([
  "createdAt",
  "touchedAt",
  "updatedAt"
]);

function sortPersistenceValue(value) {
  if (Array.isArray(value)) return value.map(sortPersistenceValue);
  if (!value || typeof value !== "object") return value;
  return Object.fromEntries(
    Object.entries(value)
      .filter(([key]) => !volatileMakeupTaskFields.has(key))
      .sort(([left], [right]) => left.localeCompare(right))
      .map(([key, entryValue]) => [key, sortPersistenceValue(entryValue)])
  );
}

export function createLessonJournalMakeupTaskId(task = {}) {
  const studentId = String(task.studentId ?? "").trim();
  const sourceId = String(task.sourceId ?? task.sourceHomeworkId ?? "").trim();
  const taskType = String(task.taskType ?? "homework_makeup").trim();
  if (!studentId || !sourceId) {
    throw new Error("등원보충 요청 ID를 만들 학생·원 숙제 정보가 필요합니다.");
  }
  const identity = `${studentId}|${sourceId}|${taskType}`;
  return [
    "makeup_lesson_journal",
    safeIdPart(sourceId) || "source",
    safeIdPart(studentId) || "student",
    shortStableHash(identity)
  ].join("_");
}

export function createLessonJournalMakeupTaskPersistenceSnapshot(task = {}) {
  return sortPersistenceValue({
    ...task,
    scheduledDate: task.scheduledDate ?? task.dueDate ?? "",
    scheduledTime: task.scheduledTime ?? "",
    sourceId: task.sourceId ?? task.sourceHomeworkId ?? task.sourceLessonId ?? "",
    sourceLabel: task.sourceLabel ?? task.title ?? "",
    status: task.status ?? "draft",
    taskType: task.taskType ?? task.type ?? "homework_makeup"
  });
}

export function areLessonJournalMakeupTasksEqual(left = {}, right = {}) {
  return JSON.stringify(createLessonJournalMakeupTaskPersistenceSnapshot(left)) ===
    JSON.stringify(createLessonJournalMakeupTaskPersistenceSnapshot(right));
}

export function createNextLessonJournalMakeupTaskUpdatedAt(previousUpdatedAt = "", now = Date.now()) {
  const previousTime = Date.parse(previousUpdatedAt);
  const nextTime = Math.max(
    Number.isFinite(previousTime) ? previousTime + 1 : 0,
    Number(now) || 0
  );
  return new Date(nextTime).toISOString();
}
