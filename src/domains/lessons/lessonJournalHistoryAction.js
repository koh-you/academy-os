import { createLessonJournalHistoryPlan } from "./lessonJournalHistoryPersistence.js";
import {
  parseVersionedWriteRequest,
  parseVersionedWriteResponse
} from "../../shared/contracts/versionedWriteRouteContracts.js";

const lessonJournalHistoryMethod = "POST";
const lessonJournalHistoryPath = "/api/lesson-journal/history-action";

const actionMessages = Object.freeze({
  cancel: {
    saving: "수업 취소를 Supabase에 저장하고 다시 확인하는 중입니다.",
    saved: "수업 취소 저장 완료 · 7일 안에 되돌릴 수 있습니다."
  },
  copy: {
    saving: "수업과 이어받은 숙제를 함께 복사하는 중입니다.",
    saved: "수업 · 이어받은 숙제 복사 완료"
  },
  undo_cancel: {
    saving: "취소한 수업을 Supabase 원천에서 복구하는 중입니다.",
    saved: "취소한 수업 복구 완료"
  },
  undo_copy: {
    saving: "복사한 수업과 숙제를 함께 되돌리는 중입니다.",
    saved: "복사한 수업 · 숙제 되돌리기 완료"
  }
});
let pendingCopyRequest = null;

export function createLessonJournalHistoryAuditId(now = Date.now()) {
  const suffix = globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2, 10);
  return `lesson-journal-history-${now}-${suffix}`;
}

export function createPreviousHomeworksFromPriorLesson({
  findPreviousLesson,
  homeworks = [],
  lesson,
  lessons = []
} = {}) {
  return (lesson?.studentIds ?? []).flatMap((studentId) => {
    const previousLesson = findPreviousLesson?.(lessons, lesson, studentId);
    if (!previousLesson) return [];
    const sourceHomework = homeworks.find((homework) => (
      homework.lessonId === previousLesson.lessonId &&
      homework.studentId === studentId &&
      homework.homeworkType === "next"
    ));
    if (!sourceHomework?.title?.trim()) return [];
    const existing = homeworks.find((homework) => (
      homework.lessonId === lesson.lessonId &&
      homework.studentId === studentId &&
      homework.homeworkType === "previous"
    ));
    return [{
      ...(existing ?? {}),
      assignedDate: previousLesson.date,
      dueDate: existing?.dueDate ?? lesson.date,
      homeworkId: existing?.homeworkId ?? `homework_previous_${lesson.date}_${studentId}`,
      homeworkType: "previous",
      lessonId: lesson.lessonId,
      linkedFromDate: previousLesson.date,
      linkedFromLessonId: previousLesson.lessonId,
      status: existing?.status ?? "verified",
      studentId,
      studentStatus: existing?.studentStatus ?? "not_started",
      subject: existing?.subject ?? sourceHomework.subject ?? "노션 수업 DB",
      teacherStatus: existing?.teacherStatus ?? "unverified",
      title: sourceHomework.title,
      totalProblems: existing?.totalProblems ?? sourceHomework.totalProblems ?? null,
      updatedAt: ""
    }];
  });
}

export async function saveLessonJournalHistoryAction({
  action,
  afterLesson = null,
  beforeLesson = null,
  copyTarget = null,
  homeworks = [],
  onStateChange = () => {},
  plan,
  request,
  timeoutMessage = "수업 복사·되돌리기 저장이 30초를 넘었습니다. 화면 입력을 유지한 채 서버 상태를 확인해 주세요."
} = {}) {
  if (typeof request !== "function") throw new Error("수업 복사·되돌리기 request가 필요합니다.");
  const messages = actionMessages[action] ?? actionMessages.copy;
  onStateChange({ message: messages.saving, state: "saving" });
  const auditId = createLessonJournalHistoryAuditId();
  const copyKey = copyTarget ? `${copyTarget.sourceLesson?.lessonId}:${copyTarget.date}` : "";
  if (copyTarget && pendingCopyRequest?.key !== copyKey) {
    const lesson = {
      ...copyTarget.sourceLesson,
      color: copyTarget.sourceLesson.color ?? "#17213a",
      date: copyTarget.date,
      dayOfWeek: copyTarget.dayOfWeek,
      lessonId: `lesson_${copyTarget.date}_${copyTarget.sourceLesson.className.replaceAll(" ", "-").replaceAll("/", "-")}_${Date.now()}`,
      status: "scheduled",
      updatedAt: ""
    };
    pendingCopyRequest = {
      afterLesson: lesson,
      homeworks: createPreviousHomeworksFromPriorLesson({ ...copyTarget, lesson }),
      key: copyKey
    };
  }
  const resolvedAfterLesson = pendingCopyRequest?.key === copyKey ? pendingCopyRequest.afterLesson : afterLesson;
  const actionHomeworks = pendingCopyRequest?.key === copyKey ? pendingCopyRequest.homeworks : homeworks;
  const requestPlan = plan ?? createLessonJournalHistoryPlan({
    action,
    afterLesson: resolvedAfterLesson,
    beforeLesson,
    homeworks: actionHomeworks
  });
  try {
    const requestPayload = parseVersionedWriteRequest(
      lessonJournalHistoryMethod,
      lessonJournalHistoryPath,
      { auditId, ...requestPlan }
    );
    const result = await request(
      lessonJournalHistoryPath,
      requestPayload,
      30000,
      timeoutMessage
    );
    parseVersionedWriteResponse(
      lessonJournalHistoryMethod,
      lessonJournalHistoryPath,
      result
    );
    if (result?.source !== "supabase" || result?.verified !== true || result?.auditId !== auditId) {
      throw new Error("수업 복사·되돌리기 결과를 Supabase 재조회로 확인하지 못했습니다.");
    }
    if (action === "copy") pendingCopyRequest = null;
    onStateChange({ message: messages.saved, state: "saved" });
    return result;
  } catch (error) {
    console.error(error);
    onStateChange({
      message: error.message || "수업 복사·되돌리기 저장에 실패했습니다.",
      state: "failed"
    });
    throw error;
  }
}

export function listCanceledLessons({ request }) {
  return request("/api/lessons?includeCanceled=true", 15000, "삭제한 수업 조회가 15초를 넘었습니다.");
}
