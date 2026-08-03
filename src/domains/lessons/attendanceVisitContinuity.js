const defaultMaximumGapMinutes = 30;

function parseClockMinutes(value = "") {
  const match = String(value).trim().match(/^(\d{1,2}):(\d{2})/);
  if (!match) return null;
  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  if (!Number.isInteger(hours) || !Number.isInteger(minutes) || hours > 23 || minutes > 59) return null;
  return hours * 60 + minutes;
}

function isRegularLesson(lesson = {}) {
  return ["", "class", "regular"].includes(String(lesson.lessonType ?? ""));
}

function isAbsenceMakeupLesson(lesson = {}, taskById = new Map(), taskByLessonId = new Map()) {
  if (lesson.lessonType !== "makeup") return false;
  const task = taskById.get(lesson.sourceMakeupTaskId) ?? taskByLessonId.get(lesson.lessonId);
  return task?.taskType === "absence_makeup";
}

function sortByStartTime(left = {}, right = {}) {
  const leftStart = parseClockMinutes(left.startTime) ?? Number.MAX_SAFE_INTEGER;
  const rightStart = parseClockMinutes(right.startTime) ?? Number.MAX_SAFE_INTEGER;
  if (leftStart !== rightStart) return leftStart - rightStart;
  return String(left.lessonId ?? "").localeCompare(String(right.lessonId ?? ""));
}

export function findConsecutiveAbsenceMakeupVisit({
  lessons = [],
  makeupTasks = [],
  maximumGapMinutes = defaultMaximumGapMinutes,
  selectedLessonId = ""
} = {}) {
  if (!selectedLessonId) return null;
  const taskById = new Map(makeupTasks.map((task) => [task.makeupTaskId, task]));
  const taskByLessonId = new Map(
    makeupTasks
      .filter((task) => task.linkedLessonId)
      .map((task) => [task.linkedLessonId, task])
  );
  const sortedLessons = [...lessons].filter(Boolean).sort(sortByStartTime);

  for (const [entryIndex, entryLesson] of sortedLessons.entries()) {
    if (!isAbsenceMakeupLesson(entryLesson, taskById, taskByLessonId)) continue;
    const entryStart = parseClockMinutes(entryLesson.startTime);
    const entryEnd = parseClockMinutes(entryLesson.endTime);
    if (entryStart === null || entryEnd === null) continue;
    const exitLesson = sortedLessons[entryIndex + 1];
    if (!exitLesson || !isRegularLesson(exitLesson) || exitLesson.date !== entryLesson.date) continue;
    const exitStart = parseClockMinutes(exitLesson.startTime);
    if (exitStart === null || exitStart < entryEnd || exitStart - entryEnd > maximumGapMinutes) continue;
    const lessonIds = [entryLesson.lessonId, exitLesson.lessonId];
    if (!lessonIds.includes(selectedLessonId)) continue;
    return {
      entryLesson,
      exitLesson,
      gapMinutes: exitStart - entryEnd,
      lessonIds,
      lessons: [entryLesson, exitLesson],
      visitType: "absence_makeup_then_regular"
    };
  }
  return null;
}

export async function loadConsecutiveAttendanceVisit({
  lessons = [],
  listMakeupTasks,
  selectedLessonId = "",
  source = ""
} = {}) {
  if (source !== "kiosk" || !lessons.some((lesson) => lesson?.lessonType === "makeup")) return null;
  const result = await listMakeupTasks();
  return findConsecutiveAbsenceMakeupVisit({
    lessons,
    makeupTasks: result.makeupTasks ?? [],
    selectedLessonId
  });
}

export function shouldApplyConsecutiveAttendanceVisit({ eventType = "", selectedLessonId = "", visit = null } = {}) {
  if (!visit) return false;
  if (eventType === "checkin") return selectedLessonId === visit.entryLesson.lessonId;
  if (eventType === "checkout") return selectedLessonId === visit.exitLesson.lessonId;
  return false;
}

export function getConsecutiveAttendanceVisitLabel(visit = null) {
  if (!visit) return "";
  return `${visit.entryLesson.className || "결석보강"} → ${visit.exitLesson.className || "정규수업"}`;
}

export function createConsecutiveAttendanceVisitRecord({
  calculateLateMinutes,
  createAttendanceIso,
  createRecordId,
  currentTime,
  eventType,
  existingRecord = null,
  hasArrival,
  hasCheckout,
  lateGraceMinutes,
  lesson,
  nowIso,
  studentId
} = {}) {
  if (!lesson?.lessonId || !studentId) return null;
  const recordId = createRecordId(lesson.lessonId, studentId);
  if (eventType === "checkin") {
    if (hasArrival(existingRecord) || hasCheckout(existingRecord)) return null;
    const lateMinutes = calculateLateMinutes(lesson, currentTime, lateGraceMinutes);
    const attendanceStatus = Number(lateMinutes) > 0 ? "late" : "present";
    return {
      ...(existingRecord ?? {}),
      lessonStudentRecordId: recordId,
      lessonId: lesson.lessonId,
      studentId,
      attendanceStatus,
      attendanceReason: existingRecord?.attendanceReason ?? "",
      lateMinutes: attendanceStatus === "late" ? lateMinutes : "",
      checkInAt: createAttendanceIso(lesson.date, currentTime, nowIso),
      checkInTime: currentTime,
      checkOutAt: "",
      checkOutTime: "",
      updatedBy: "attendance_kiosk",
      updatedAt: nowIso
    };
  }
  if (eventType !== "checkout" || !hasArrival(existingRecord) || hasCheckout(existingRecord)) return null;
  const attendanceStatus = ["present", "late"].includes(existingRecord.attendanceStatus)
    ? existingRecord.attendanceStatus
    : "present";
  return {
    ...existingRecord,
    lessonStudentRecordId: recordId,
    lessonId: lesson.lessonId,
    studentId,
    attendanceStatus,
    checkOutAt: createAttendanceIso(lesson.date, currentTime, nowIso),
    checkOutTime: currentTime,
    updatedBy: "attendance_kiosk",
    updatedAt: nowIso
  };
}

export async function saveConsecutiveAttendanceVisitRecords({
  auditId,
  recordBeforeByLessonId = new Map(),
  records = [],
  savePlan
} = {}) {
  const recordChanges = records.map((record) => ({
    before: recordBeforeByLessonId.get(record.lessonId) ?? null,
    after: record
  }));
  const result = await savePlan({ auditId, recordChanges });
  if (result.records?.length === records.length) return result.records;
  if (result.source === "local_sample") return records;
  throw new Error("연속 수업 출결 저장 후 두 수업일지 재조회가 일치하지 않습니다.");
}
