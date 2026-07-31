export function selectAppSessionSurface({
  attendanceOnlyMode = false,
  specialLectureOnlyMode = false,
  session = null
} = {}) {
  if (attendanceOnlyMode) return "attendance";
  if (specialLectureOnlyMode) return "specialLecture";
  if (!session) return "login";
  if (session.role === "student") return "student";
  if (session.role === "parent") return "parent";
  return "teacher";
}
