const visibleScheduleTypes = new Set(["official", "adjusted", "profile"]);

function formatShortTime(value = "") {
  const match = String(value).match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return String(value);
  const hour = Number(match[1]) % 12 || 12;
  return match[2] === "00" ? String(hour) : `${hour}:${match[2]}`;
}

function formatProfileScheduleTime(attendanceLesson = {}) {
  return `${formatShortTime(attendanceLesson.startTime)}-${formatShortTime(attendanceLesson.endTime)}`;
}

export function createLessonJournalStudentIdentityModel({ attendanceLesson = {}, student = {} }) {
  const scheduleType = attendanceLesson.studentScheduleType ?? "";
  const showScheduleTime = visibleScheduleTypes.has(scheduleType);
  const profileScheduleTime = formatProfileScheduleTime(attendanceLesson);

  return {
    gradeSchoolLabel: `${student.grade || "고1"} · ${student.schoolName || "학교 미입력"}`,
    scheduleTimeAriaLabel: scheduleType === "profile" ? `개별 시간표 ${profileScheduleTime} 적용` : "",
    scheduleTimeClassName: [
      "specialLectureStudentTime",
      scheduleType === "adjusted" ? "adjusted" : "",
      scheduleType === "profile" ? "profile" : ""
    ].filter(Boolean).join(" "),
    scheduleTimeLabel: scheduleType === "profile"
      ? profileScheduleTime
      : `${attendanceLesson.startTime}-${attendanceLesson.endTime}`,
    showScheduleTime
  };
}
