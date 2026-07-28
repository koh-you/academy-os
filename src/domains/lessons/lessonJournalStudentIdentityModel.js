const visibleScheduleTypes = new Set(["official", "adjusted", "profile"]);

export function createLessonJournalStudentIdentityModel({ attendanceLesson = {}, student = {} }) {
  const scheduleType = attendanceLesson.studentScheduleType ?? "";
  const showScheduleTime = visibleScheduleTypes.has(scheduleType);

  return {
    gradeSchoolLabel: `${student.grade || "고1"} · ${student.schoolName || "학교 미입력"}`,
    scheduleTimeClassName: [
      "specialLectureStudentTime",
      scheduleType === "adjusted" ? "adjusted" : "",
      scheduleType === "profile" ? "profile" : ""
    ].filter(Boolean).join(" "),
    scheduleTimeLabel: `${attendanceLesson.startTime}-${attendanceLesson.endTime}`,
    showScheduleTime
  };
}
