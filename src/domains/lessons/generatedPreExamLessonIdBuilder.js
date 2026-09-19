import {
  safeIdPart,
  shortStableHash
} from "../../shared/utils/id.js";
import { scopeDeterministicId } from "../../shared/utils/tenantIdScope.js";

export function createPreExamLessonId(sourceId = "") {
  return scopeDeterministicId(`lesson_pre_exam_${safeIdPart(sourceId)}_${shortStableHash(sourceId)}`);
}
