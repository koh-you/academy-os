import {
  parseVersionedWriteRequest,
  parseVersionedWriteResponse
} from "../../shared/contracts/versionedWriteRouteContracts.js";

const lessonJournalMakeupTasksMethod = "POST";
const lessonJournalMakeupTasksPath = "/api/lesson-journal/makeup-tasks/save";

export const lessonJournalMakeupTaskIdentityFields = [
  "studentId",
  "sourceId",
  "sourceHomeworkId",
  "taskType",
  "supplementMethod",
  "supplementHomeworkNote"
];

export function createLessonJournalMakeupTasksRequestPayload(makeupTasks = []) {
  return parseVersionedWriteRequest(
    lessonJournalMakeupTasksMethod,
    lessonJournalMakeupTasksPath,
    { makeupTasks }
  );
}

export async function saveLessonJournalMakeupTasksWithVerification({
  requestedTasks = [],
  request
} = {}) {
  if (!requestedTasks.length) return [];

  const verification = await request(requestedTasks);
  parseVersionedWriteResponse(
    lessonJournalMakeupTasksMethod,
    lessonJournalMakeupTasksPath,
    verification
  );
  if (verification.source !== "supabase" || verification.verified !== true) {
    throw new Error("등원보충을 Supabase에서 다시 확인하지 못했습니다.");
  }

  const verifiedById = new Map(
    (verification.makeupTasks ?? []).map((task) => [task.makeupTaskId, task])
  );
  return requestedTasks.map((requestedTask) => {
    const verifiedTask = verifiedById.get(requestedTask.makeupTaskId);
    const mismatch = lessonJournalMakeupTaskIdentityFields.find(
      (field) =>
        String(verifiedTask?.[field] ?? "") !==
        String(requestedTask[field] ?? "")
    );
    if (!verifiedTask || mismatch) {
      throw new Error(
        `등원보충 저장 후 Supabase 재조회 값이 일치하지 않습니다: ${
          mismatch || requestedTask.makeupTaskId
        }`
      );
    }
    return verifiedTask;
  });
}
