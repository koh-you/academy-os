import { getJsonWithTimeout, postJson } from "../../shared/utils/apiClient.js";
import { canCancelNotificationJob } from "../notifications/notificationJobSelectors.js";
import { createPersistableSupplementTask } from "./supplementTaskDraft.js";
import {
  createCanceledAbsenceMakeupTask,
  createCanceledSupplementLesson,
  getAbsenceSourcePreservationSnapshot,
  getCanceledAbsenceMakeupSaveSnapshot
} from "./supplementCancellation.js";
import { getLessonModalSaveSnapshot } from "../lessons/lessonModalSaveSnapshot.js";

/**
 * Cancels an absence-makeup task by reverting the source attendance record
 * to "pending" and verifying via re-read. `isAbsenceLikeAttendanceStatus` is
 * injected — it's a shared App.jsx helper used by several unrelated
 * handlers, not owned by this action.
 *
 * @returns {Promise<{ changed: boolean, record: * }>} `changed: false` means
 *   the source record wasn't in an absence-like state, so nothing was saved
 *   and the caller shouldn't update any local state either.
 */
export async function cancelAbsenceMakeupSourceAction(task, sourceRecord, { isAbsenceLikeAttendanceStatus }) {
  if (task?.taskType !== "absence_makeup") throw new Error("결석보강 항목만 결석 처리를 취소할 수 있습니다.");
  if (!sourceRecord) throw new Error("원 수업일지 출결 기록을 찾지 못했습니다.");
  if (!isAbsenceLikeAttendanceStatus(sourceRecord.attendanceStatus)) {
    return { changed: false, record: sourceRecord };
  }
  const now = new Date().toISOString();
  const nextRecord = {
    ...sourceRecord,
    attendanceReason: "",
    attendanceStatus: "pending",
    checkInAt: "",
    checkInTime: "",
    checkOutAt: "",
    checkOutTime: "",
    lateMinutes: "",
    updatedAt: now,
    updatedBy: "manual_attendance_cancel"
  };
  const saveResult = await postJson("/api/lesson-records", { record: nextRecord });
  if (saveResult.source !== "supabase") {
    throw new Error("결석 기록 취소가 Supabase 원천에 저장되지 않았습니다.");
  }
  const verification = await getJsonWithTimeout(
    `/api/lesson-records?verify=cancel-absence-source-${encodeURIComponent(task.sourceId)}-${Date.now()}`,
    12000,
    "결석 기록 취소 후 Supabase 재확인이 지연되고 있습니다."
  );
  if (verification.source !== "supabase") {
    throw new Error("결석 기록 취소 결과를 Supabase에서 다시 확인하지 못했습니다.");
  }
  const verifiedRecord = (verification.records ?? []).find(
    (record) => record.lessonStudentRecordId === task.sourceId
  );
  if (
    !verifiedRecord ||
    verifiedRecord.attendanceStatus !== "pending" ||
    verifiedRecord.attendanceReason ||
    verifiedRecord.checkInAt ||
    verifiedRecord.checkInTime ||
    verifiedRecord.checkOutAt ||
    verifiedRecord.checkOutTime
  ) {
    throw new Error("Supabase 재조회 값이 결석 기록 취소 결과와 다릅니다.");
  }
  return { changed: true, record: verifiedRecord };
}

/**
 * Cancels an absence-makeup task while preserving the original absence
 * record (rather than reverting it). Cancels the makeup task, optionally
 * cancels its linked lesson, cancels related notification job reservations,
 * then verifies all three sources with one parallel re-read.
 *
 * `lessons` and `notificationJobs` are read-only component-state snapshots
 * (the linked-lesson lookup and notification-job filtering only ever read
 * them). `cancelNotificationJob` is App.jsx's existing
 * `handleCancelNotificationJob` — reused as-is rather than reimplemented,
 * since it already owns the notification-job state update
 * (`upsertNotificationJobState`) this action has no business owning.
 */
export async function cancelAbsenceMakeupKeepSourceAction(task, {
  cancelNotificationJob,
  isAbsenceLikeAttendanceStatus,
  lessons,
  notificationJobs,
  sourceRecord
}) {
  if (task?.taskType !== "absence_makeup") {
    throw new Error("결석보강 항목만 결석기록 유지 방식으로 취소할 수 있습니다.");
  }
  if (!task.makeupTaskId) {
    throw new Error("취소할 결석보강 ID가 없습니다.");
  }
  if (!sourceRecord) throw new Error("유지할 원 결석 수업일지 기록을 찾지 못했습니다.");
  if (!isAbsenceLikeAttendanceStatus(sourceRecord.attendanceStatus)) {
    throw new Error("원 수업일지의 현재 출결이 결석 상태가 아니어서 보강만 취소할 수 없습니다.");
  }

  const canceledAt = new Date().toISOString();
  const sourceRecordSnapshot = getAbsenceSourcePreservationSnapshot(sourceRecord);
  const requestedTask = createCanceledAbsenceMakeupTask(
    createPersistableSupplementTask(task),
    canceledAt
  );
  const taskSaveResult = await postJson("/api/makeup-tasks", { makeupTask: requestedTask });
  if (taskSaveResult.source !== "supabase") {
    throw new Error("보강 취소가 Supabase 보충 원천에 저장되지 않았습니다.");
  }

  let requestedCanceledLesson = null;
  if (requestedTask.linkedLessonId) {
    let linkedLesson = lessons.find(
      (lesson) => lesson.lessonId === requestedTask.linkedLessonId
    );
    if (!linkedLesson) {
      const currentLessonResult = await getJsonWithTimeout(
        `/api/lessons?verify=cancel-makeup-source-${Date.now()}`,
        12000,
        "연결 보강 수업일지를 확인하는 데 시간이 걸리고 있습니다."
      );
      linkedLesson = (currentLessonResult.lessons ?? []).find(
        (lesson) => lesson.lessonId === requestedTask.linkedLessonId
      );
    }
    if (linkedLesson) {
      requestedCanceledLesson = createCanceledSupplementLesson(linkedLesson, canceledAt);
      const lessonSaveResult = await postJson("/api/lessons", {
        lesson: requestedCanceledLesson
      });
      if (lessonSaveResult.source !== "supabase") {
        throw new Error("보강 항목은 취소됐지만 연결 수업일지를 취소하지 못했습니다. 다시 확인해 주세요.");
      }
    }
  }

  const relatedActiveNotificationJobs = notificationJobs.filter((job) => {
    const payload = job.payload ?? {};
    const result = job.result && typeof job.result === "object" ? job.result : {};
    const jobMakeupTaskId = payload.makeupTaskId || result.makeupTaskId || "";
    const belongsToTask = jobMakeupTaskId === requestedTask.makeupTaskId;
    const belongsToLesson = Boolean(
      requestedTask.linkedLessonId &&
      job.lessonId === requestedTask.linkedLessonId
    );
    return (belongsToTask || belongsToLesson) && canCancelNotificationJob(job);
  });
  try {
    await Promise.all(
      relatedActiveNotificationJobs.map((job) =>
        cancelNotificationJob(job, "보강 취소 · 원 결석기록 유지")
      )
    );
  } catch (error) {
    throw new Error(
      `보강과 연결 수업일지는 취소됐지만 알림톡 예약 취소 확인에 실패했습니다: ${error?.message || "알 수 없는 오류"}`
    );
  }

  const [taskVerification, lessonVerification, recordVerification] = await Promise.all([
    getJsonWithTimeout(
      `/api/makeup-tasks?verify=cancel-makeup-task-${encodeURIComponent(requestedTask.makeupTaskId)}-${Date.now()}`,
      12000,
      "보강 취소 후 보충 원천 재확인이 지연되고 있습니다."
    ),
    requestedCanceledLesson
      ? getJsonWithTimeout(
          `/api/lessons?includeCanceled=true&verify=cancel-makeup-lesson-${encodeURIComponent(requestedCanceledLesson.lessonId)}-${Date.now()}`,
          12000,
          "보강 취소 후 연결 수업일지 재확인이 지연되고 있습니다."
        )
      : Promise.resolve({ lessons }),
    getJsonWithTimeout(
      `/api/lesson-records?verify=preserve-absence-${encodeURIComponent(sourceRecord.lessonStudentRecordId)}-${Date.now()}`,
      12000,
      "보강 취소 후 원 결석기록 보존 여부를 확인하는 데 시간이 걸리고 있습니다."
    )
  ]);
  if (taskVerification.source !== "supabase" || recordVerification.source !== "supabase") {
    throw new Error("보강 취소 결과와 원 결석기록을 Supabase에서 다시 확인하지 못했습니다.");
  }
  if (requestedCanceledLesson && lessonVerification.source !== "supabase") {
    throw new Error("취소한 연결 수업일지를 Supabase에서 다시 확인하지 못했습니다.");
  }

  const verifiedTask = (taskVerification.makeupTasks ?? []).find(
    (item) => item.makeupTaskId === requestedTask.makeupTaskId
  );
  if (
    !verifiedTask ||
    getCanceledAbsenceMakeupSaveSnapshot(verifiedTask) !==
      getCanceledAbsenceMakeupSaveSnapshot(requestedTask)
  ) {
    throw new Error("Supabase 재조회 값이 보강 취소 원천과 다릅니다.");
  }

  const verifiedSourceRecord = (recordVerification.records ?? []).find(
    (record) => record.lessonStudentRecordId === sourceRecord.lessonStudentRecordId
  );
  if (
    !verifiedSourceRecord ||
    getAbsenceSourcePreservationSnapshot(verifiedSourceRecord) !== sourceRecordSnapshot
  ) {
    throw new Error("보강 취소 과정에서 원 결석기록이 달라졌습니다. 완료로 처리하지 않았습니다.");
  }

  const persistedLessons = Array.isArray(lessonVerification.lessons)
    ? lessonVerification.lessons
    : lessons;
  if (requestedCanceledLesson) {
    const verifiedCanceledLesson = persistedLessons.find(
      (lesson) => lesson.lessonId === requestedCanceledLesson.lessonId
    );
    if (
      !verifiedCanceledLesson ||
      getLessonModalSaveSnapshot(verifiedCanceledLesson) !==
        getLessonModalSaveSnapshot(requestedCanceledLesson)
    ) {
      throw new Error("Supabase 재조회 값이 취소한 보강 수업일지와 다릅니다.");
    }
  }

  return {
    canceledNotificationJobCount: relatedActiveNotificationJobs.length,
    hasCanceledLesson: Boolean(requestedCanceledLesson),
    makeupTask: verifiedTask,
    persistedLessons,
    sourceRecord: verifiedSourceRecord
  };
}
