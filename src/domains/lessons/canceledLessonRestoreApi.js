import { getJsonWithTimeout } from "../../shared/utils/apiClient.js";

export function loadCanceledLessonRestoreCandidates() {
  return getJsonWithTimeout(
    "/api/lessons?includeCanceled=true",
    15000,
    "삭제 수업 조회 시간이 초과됐습니다."
  );
}
