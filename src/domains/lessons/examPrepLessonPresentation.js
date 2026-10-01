function compareKoreanText(left = "", right = "") {
  return String(left).localeCompare(String(right), "ko", {
    numeric: true,
    sensitivity: "base"
  });
}

export function getExamPrepSourceItems(lesson = {}) {
  return String(lesson.sourceLabel || "")
    .split("·")
    .map((label) => label.trim())
    .filter(Boolean);
}

export function findExamPrepStudentRecord(records = [], lessonId = "", studentId = "") {
  if (!lessonId || !studentId) return null;
  return records.find((record) => record?.lessonId === lessonId && record?.studentId === studentId) ?? null;
}

export function createExamPrepStudentRows(lesson = {}, students = [], records = []) {
  const studentById = new Map(students.map((student) => [student.studentId, student]));
  const scheduleByStudentId = new Map(
    (Array.isArray(lesson.specialLectureStudentSchedules) ? lesson.specialLectureStudentSchedules : [])
      .filter((schedule) => schedule?.studentId)
      .map((schedule) => [schedule.studentId, schedule])
  );

  return [...new Set(Array.isArray(lesson.studentIds) ? lesson.studentIds : [])]
    .map((studentId) => {
      const student = studentById.get(studentId) || {};
      const schedule = scheduleByStudentId.get(studentId) || {};
      const startTime = schedule.startTime || lesson.startTime || "";
      const endTime = schedule.endTime || lesson.endTime || "";
      return {
        endTime,
        hasIndividualTime: Boolean(schedule.startTime && schedule.endTime),
        name: student.name || studentId || "학생 미입력",
        record: findExamPrepStudentRecord(records, lesson.lessonId, studentId),
        schoolName: student.schoolName || "학교 미입력",
        startTime,
        studentId,
        timeLabel: startTime && endTime ? `${startTime}-${endTime}` : "시간 미정"
      };
    })
    .sort((left, right) => {
      const leftTime = left.startTime || "99:99";
      const rightTime = right.startTime || "99:99";
      return leftTime.localeCompare(rightTime) ||
        compareKoreanText(left.schoolName, right.schoolName) ||
        compareKoreanText(left.name, right.name);
    });
}

export function groupExamPrepStudentsByTime(rows = []) {
  const groups = new Map();
  rows.forEach((row) => {
    const key = row.startTime && row.endTime ? row.timeLabel : "시간 미정";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(row);
  });
  return [...groups.entries()].map(([label, students]) => ({ label, students }));
}

export function groupExamPrepStudentsBySchool(rows = []) {
  const groups = new Map();
  rows.forEach((row) => {
    if (!groups.has(row.schoolName)) groups.set(row.schoolName, []);
    groups.get(row.schoolName).push(row);
  });
  return [...groups.entries()]
    .sort(([left], [right]) => compareKoreanText(left, right))
    .map(([label, students]) => ({ label, students }));
}

/**
 * 2026-10-01 · 학교별 참여·시간 패널의 행. 학생 행을 학교로 묶고, 그 학교 학생이 모두 같은
 * 시간이면 그 시간을, 섞여 있으면 빈 값과 isMixedTime 을 준다 — 섞인 걸 한 시간으로 보여
 * 주면 "시간 저장" 이 모르는 사이에 나머지 학생 시간을 덮어쓴다.
 */
export function createExamPrepSchoolPlanRows(rows = []) {
  const groups = new Map();
  rows.forEach((row) => {
    const schoolName = row.schoolName || "학교 미입력";
    if (!groups.has(schoolName)) {
      groups.set(schoolName, { schoolName, startTimes: new Set(), endTimes: new Set(), studentIds: [] });
    }
    const group = groups.get(schoolName);
    group.studentIds.push(row.studentId);
    group.startTimes.add(row.startTime || "");
    group.endTimes.add(row.endTime || "");
  });
  return [...groups.values()]
    .sort((left, right) => compareKoreanText(left.schoolName, right.schoolName))
    .map((group) => {
      const isMixedTime = group.startTimes.size > 1 || group.endTimes.size > 1;
      return {
        endTime: isMixedTime ? "" : [...group.endTimes][0] ?? "",
        isMixedTime,
        schoolName: group.schoolName,
        startTime: isMixedTime ? "" : [...group.startTimes][0] ?? "",
        studentIds: group.studentIds
      };
    });
}

export function createExamPrepAttendanceSummary(rows = []) {
  const counts = rows.reduce((totals, row) => {
    const record = row?.record ?? null;
    const status = record?.attendanceStatus ?? "";
    if (["absent", "excused"].includes(status)) return { ...totals, absent: totals.absent + 1 };
    const hasArrival = Boolean(record?.checkInAt || record?.checkInTime) || ["present", "late", "checkin"].includes(status);
    const hasCheckout = Boolean(record?.checkOutAt || record?.checkOutTime);
    if (hasCheckout) return { ...totals, arrived: totals.arrived + 1, checkedOut: totals.checkedOut + 1 };
    if (hasArrival) return { ...totals, arrived: totals.arrived + 1 };
    return { ...totals, pending: totals.pending + 1 };
  }, { absent: 0, arrived: 0, checkedOut: 0, pending: 0 });
  return { ...counts, total: rows.length };
}
