import { normalizeTimeInput } from "./attendance.js";

export function normalizeGeneratedLessonStudentIds(
  studentIds = []
) {
  return [...new Set(studentIds)].sort();
}

export function areGeneratedLessonPersistedFieldsEqual(
  candidate = {},
  existing = {}
) {
  const fields = [
    "classTemplateId",
    "className",
    "lessonType",
    "lessonTopic",
    "sourceSchoolEventId",
    "sourceLabel",
    "date",
    "color",
    "status"
  ];
  const sameFields = fields.every(
    (field) =>
      String(candidate[field] ?? "") ===
      String(existing[field] ?? "")
  );
  if (!sameFields) return false;
  const sameTimes = ["startTime", "endTime"].every(
    (field) =>
      normalizeTimeInput(candidate[field] ?? "") === normalizeTimeInput(existing[field] ?? "")
  );
  if (!sameTimes) return false;
  return (
    JSON.stringify(
      normalizeGeneratedLessonStudentIds(
        candidate.studentIds ?? []
      )
    ) ===
    JSON.stringify(
      normalizeGeneratedLessonStudentIds(
        existing.studentIds ?? []
      )
    )
  );
}
