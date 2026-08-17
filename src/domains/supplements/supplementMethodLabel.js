import { normalizeNotificationText } from "../notifications/notificationMessageRenderer.js";
import { getSupplementHomeworkNoteValue } from "./supplementTaskDraft.js";

export function followUpTypeLabel(taskType) {
  const labels = {
    homework_makeup: "숙제보충",
    absence_makeup: "결석 보강",
    manual_makeup: "수동 보충",
    retest: "재시험"
  };
  return labels[taskType] ?? "보충관리";
}

export const supplementMethodsByType = {
  homework_makeup: [
    { id: "arrival_makeup", label: "등원보충" }
  ],
  absence_makeup: [
    { id: "recorded_lecture", label: "녹강보강" },
    { id: "onsite_makeup", label: "현장보강" }
  ],
  manual_makeup: [
    { id: "onsite_makeup", label: "현장 보충" }
  ],
  retest: [
    { id: "onsite_retest", label: "현장 재시험" }
  ]
};

export function supplementMethodOptions(taskType) {
  return supplementMethodsByType[taskType] ?? [];
}

export function supplementDefaultMethod(taskType) {
  if (taskType === "homework_makeup") return "arrival_makeup";
  if (taskType === "absence_makeup") return "onsite_makeup";
  return supplementMethodOptions(taskType)[0]?.id ?? "";
}

export function normalizeSupplementMethodForTask(taskType, methodId) {
  const options = supplementMethodOptions(taskType);
  if (options.some((option) => option.id === methodId)) return methodId;
  return supplementDefaultMethod(taskType);
}

export function supplementMethodLabel(task) {
  const methodId = normalizeSupplementMethodForTask(task?.taskType, task?.supplementMethod);
  return supplementMethodOptions(task?.taskType).find((option) => option.id === methodId)?.label ?? "방식 미정";
}

export function getSupplementTaskSourceLabel(task) {
  if (task?.taskType === "homework_makeup") {
    return getSupplementHomeworkNoteValue(task, task.sourceLabel || "");
  }
  return task?.sourceLabel || "";
}

export function getAbsenceMakeupHomeworkText(task = {}) {
  return normalizeNotificationText(getSupplementHomeworkNoteValue(task, task.sourcePreviousHomework || ""))
    .replace(/\s+/g, " ")
    .trim();
}

export function formatSupplementHomeworkCheckSentence(task = {}) {
  const homeworkText = getAbsenceMakeupHomeworkText(task);
  if (!homeworkText) return "";
  return `지난 숙제 ${homeworkText}도 함께 확인하겠습니다.`;
}
