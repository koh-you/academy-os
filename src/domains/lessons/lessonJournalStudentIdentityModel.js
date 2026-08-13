const visibleScheduleTypes = new Set(["official", "adjusted", "profile"]);

export function createLessonJournalStudentIdentityModel({ attendanceLesson = {}, student = {} }) {
  const scheduleType = attendanceLesson.studentScheduleType ?? "";
  const showScheduleTime = visibleScheduleTypes.has(scheduleType);

  return {
    gradeSchoolLabel: `${student.grade || "고1"} · ${student.schoolName || "학교 미입력"}`,
    scheduleTimeAriaLabel: scheduleType === "profile" ? "개별 시간표 적용" : "",
    scheduleTimeClassName: [
      "specialLectureStudentTime",
      scheduleType === "adjusted" ? "adjusted" : "",
      scheduleType === "profile" ? "profile" : ""
    ].filter(Boolean).join(" "),
    scheduleTimeLabel: scheduleType === "profile"
      ? "개별시간표"
      : `${attendanceLesson.startTime}-${attendanceLesson.endTime}`,
    showScheduleTime
  };
}
