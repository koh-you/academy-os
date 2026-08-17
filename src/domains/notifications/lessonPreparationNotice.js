import { normalizeNotificationText } from "./notificationMessageRenderer.js";

const homeworkFollowupMemoPrefixes = {
  next_lesson: "다음 수업 확인",
  stay_after: "수업 후 보충"
};

export function parseHomeworkFollowupMemoLine(line = "") {
  const text = normalizeNotificationText(line);
  const match = text.match(/^(다음 수업 확인|수업 후 보충)\s*:\s*(.+)$/);
  if (!match) return null;
  const method = match[1] === homeworkFollowupMemoPrefixes.next_lesson ? "next_lesson" : "stay_after";
  return { method, text: match[2].trim() };
}

export function removeHomeworkFollowupMemoLines(value = "") {
  return normalizeNotificationText(value)
    .split("\n")
    .filter((line) => !parseHomeworkFollowupMemoLine(line))
    .join("\n")
    .trim();
}

export function getLessonPreparationNotice(record = {}, target = "parent") {
  const shouldInclude = target === "student" ? Boolean(record?.prepStudentVisible) : Boolean(record?.prepParentVisible);
  return shouldInclude ? removeHomeworkFollowupMemoLines(record?.preparationMemo) : "";
}
