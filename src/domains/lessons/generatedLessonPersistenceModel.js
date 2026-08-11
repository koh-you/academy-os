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
  const sameStudentIds = (
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
  if (!sameStudentIds) return false;
  const normalizeSchedules = (values = []) => [...values]
    .map((value) => ({
      endTime: normalizeTimeInput(value?.endTime ?? ""),
      scheduleType: String(value?.scheduleType ?? ""),
      startTime: normalizeTimeInput(value?.startTime ?? ""),
      studentId: String(value?.studentId ?? "")
    }))
    .sort((left, right) => JSON.stringify(left).localeCompare(JSON.stringify(right)));
  return JSON.stringify(normalizeSchedules(candidate.specialLectureStudentSchedules ?? [])) ===
    JSON.stringify(normalizeSchedules(existing.specialLectureStudentSchedules ?? []));
}
