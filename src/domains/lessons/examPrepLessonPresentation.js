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
