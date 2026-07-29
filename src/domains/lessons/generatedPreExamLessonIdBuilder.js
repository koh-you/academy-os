import {
  safeIdPart,
  shortStableHash
} from "../../shared/utils/id.js";

export function createPreExamLessonId(sourceId = "") {
  return `lesson_pre_exam_${safeIdPart(sourceId)}_${shortStableHash(sourceId)}`;
}
