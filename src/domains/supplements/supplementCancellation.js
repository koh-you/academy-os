export const keepSourceAbsenceCancellationMode = "keep_source_absence";

function normalizeText(value = "") {
  return String(value ?? "");
}

export function getAbsenceSourcePreservationSnapshot(record = {}) {
  return JSON.stringify({
    attendanceReason: normalizeText(record.attendanceReason),
    attendanceStatus: normalizeText(record.attendanceStatus),
    checkInAt: normalizeText(record.checkInAt),
    checkInTime: normalizeText(record.checkInTime),
    checkOutAt: normalizeText(record.checkOutAt),
    checkOutTime: normalizeText(record.checkOutTime),
    lessonId: normalizeText(record.lessonId),
    lessonStudentRecordId: normalizeText(record.lessonStudentRecordId),
    studentId: normalizeText(record.studentId)
  });
}

export function createCanceledAbsenceMakeupTask(task = {}, canceledAt = new Date().toISOString()) {
  if (task.taskType !== "absence_makeup") {
    throw new Error("결석보강 항목만 결석기록 유지 방식으로 취소할 수 있습니다.");
  }
  if (!task.makeupTaskId) {
    throw new Error("취소할 결석보강 ID가 없습니다.");
  }
  return {
    ...task,
    canceledAt,
    cancellationMode: keepSourceAbsenceCancellationMode,
    cancellationReason: "선생님 보강 취소 · 원 결석기록 유지",
    sourceAttendancePreserved: true,
    status: "canceled",
    updatedAt: canceledAt
  };
}

export function getCanceledAbsenceMakeupSaveSnapshot(task = {}) {
  return JSON.stringify({
    canceledAt: normalizeText(task.canceledAt),
    cancellationMode: normalizeText(task.cancellationMode),
    linkedLessonId: normalizeText(task.linkedLessonId),
    makeupTaskId: normalizeText(task.makeupTaskId),
    sourceAttendancePreserved: Boolean(task.sourceAttendancePreserved),
    sourceId: normalizeText(task.sourceId),
    sourceLessonId: normalizeText(task.sourceLessonId),
    status: normalizeText(task.status),
    studentId: normalizeText(task.studentId),
    taskType: normalizeText(task.taskType)
  });
}

export function createCanceledSupplementLesson(lesson = {}, canceledAt = new Date().toISOString()) {
  if (!lesson.lessonId) throw new Error("취소할 보강 수업일지 ID가 없습니다.");
  return {
    ...lesson,
    status: "canceled",
    updatedAt: canceledAt
  };
}
