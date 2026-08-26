const dayKeys = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

function toMonthKey(value = "") {
  return /^\d{4}-\d{2}$/.test(String(value)) ? String(value) : "";
}

function previousMonthKey(monthKey) {
  const [year, month] = monthKey.split("-").map(Number);
  const previous = new Date(Date.UTC(year, month - 2, 1));
  return `${previous.getUTCFullYear()}-${String(previous.getUTCMonth() + 1).padStart(2, "0")}`;
}

function getDayKey(date) {
  return dayKeys[new Date(`${date}T00:00:00Z`).getUTCDay()];
}

function monthDates(monthKey) {
  const [year, month] = monthKey.split("-").map(Number);
  const lastDay = new Date(Date.UTC(year, month, 0)).getUTCDate();
  return Array.from({ length: lastDay }, (_, index) => `${monthKey}-${String(index + 1).padStart(2, "0")}`);
}

function sourceKey(lesson = {}) {
  return String(lesson.classTemplateId || "").trim();
}

function stableLessonId(date, classTemplateId) {
  return `lesson_regular_${date}_${String(classTemplateId).replace(/[^a-zA-Z0-9_-]/g, "-")}`;
}

function isRegularLesson(lesson = {}) {
  return lesson.lessonType === "class" && !["canceled", "deleted"].includes(lesson.status || "scheduled") && Boolean(sourceKey(lesson));
}

function isActiveStudent(student = {}) {
  return student && (student.status || "active") === "active" && !student.withdrawnAt;
}

/**
 * Builds an additive monthly opening plan. It deliberately carries only the
 * regular class schedule and roster; journal, attendance, homework and notice
 * fields are never copied into a new month.
 */
export function buildMonthlyRegularLessonOpenPlan({ lessons = [], monthKey = "", students = [], templates = [] } = {}) {
  const targetMonth = toMonthKey(monthKey);
  if (!targetMonth) return { errors: ["대상 월 형식이 올바르지 않습니다."], monthKey: "", rows: [], lessonsToCreate: [] };
  const sourceMonth = previousMonthKey(targetMonth);
  const activeStudents = new Set(students.filter(isActiveStudent).map((student) => student.studentId));
  const templateById = new Map(templates.map((template) => [template.classTemplateId, template]));
  const sourceLessons = lessons
    .filter((lesson) => isRegularLesson(lesson) && String(lesson.date || "").startsWith(`${sourceMonth}-`))
    .sort((left, right) => `${right.date}|${right.startTime || ""}`.localeCompare(`${left.date}|${left.startTime || ""}`));
  const latestByTemplate = new Map();
  sourceLessons.forEach((lesson) => {
    const key = sourceKey(lesson);
    if (!latestByTemplate.has(key)) latestByTemplate.set(key, lesson);
  });
  const sourceDaysByTemplate = new Map();
  const latestByTemplateDay = new Map();
  sourceLessons.forEach((lesson) => {
    const key = sourceKey(lesson);
    const dayKey = lesson.dayOfWeek || getDayKey(lesson.date);
    const values = sourceDaysByTemplate.get(key) || new Set();
    values.add(dayKey);
    sourceDaysByTemplate.set(key, values);
    if (!latestByTemplateDay.has(`${key}|${dayKey}`)) latestByTemplateDay.set(`${key}|${dayKey}`, lesson);
  });
  const existingByDateTemplate = new Set(
    lessons.filter(isRegularLesson).map((lesson) => `${lesson.date}|${sourceKey(lesson)}`)
  );
  const rows = [...latestByTemplate.entries()].map(([classTemplateId, sourceLesson]) => {
    const template = templateById.get(classTemplateId) || {};
    const days = Array.isArray(template.days) && template.days.length
      ? template.days
      : [...(sourceDaysByTemplate.get(classTemplateId) || [])];
    const templateStudentIds = [...new Set((sourceLesson.studentIds || []).filter((studentId) => activeStudents.has(studentId)))];
    const excludedStudentCount = (sourceLesson.studentIds || []).length - templateStudentIds.length;
    const candidates = monthDates(targetMonth).filter((date) => days.includes(getDayKey(date)));
    const lessonRows = candidates
      .filter((date) => !existingByDateTemplate.has(`${date}|${classTemplateId}`))
      .map((date) => {
        const dateDayKey = getDayKey(date);
        const daySource = latestByTemplateDay.get(`${classTemplateId}|${dateDayKey}`) || sourceLesson;
        const dayStudentIds = [...new Set((daySource.studentIds || []).filter((studentId) => activeStudents.has(studentId)))];
        const saturdayTimes = dateDayKey === "sat" && template.saturdayStartTime && template.saturdayEndTime
          ? { endTime: template.saturdayEndTime, startTime: template.saturdayStartTime }
          : null;
        return ({
        className: template.name || sourceLesson.className,
        classTemplateId,
        color: template.color || sourceLesson.color || "#bfdbfe",
        date,
        dayOfWeek: dateDayKey,
        endTime: saturdayTimes?.endTime || daySource.endTime,
        lessonId: stableLessonId(date, classTemplateId),
        lessonType: "class",
        sourceLabel: `월 오픈 · ${sourceMonth} 실제 명단 연장`,
        startTime: saturdayTimes?.startTime || daySource.startTime,
        status: "scheduled",
        studentIds: dayStudentIds,
        teacherId: sourceLesson.teacherId || "instructor_owner_001"
        });
      });
    const studentCount = new Set(lessonRows.flatMap((row) => row.studentIds)).size;
    return {
      className: template.name || sourceLesson.className,
      classTemplateId,
      excludedStudentCount,
      existingCount: candidates.length - lessonRows.length,
      sourceDate: sourceLesson.date,
      studentCount: lessonRows.length ? studentCount : templateStudentIds.length,
      lessons: lessonRows
    };
  }).sort((left, right) => left.className.localeCompare(right.className, "ko"));
  const expectedTemplateIds = templates.map((template) => String(template.classTemplateId || "").trim()).filter(Boolean);
  const missingTemplateIds = expectedTemplateIds.filter((classTemplateId) => !latestByTemplate.has(classTemplateId));
  return {
    errors: !rows.length
      ? [`${sourceMonth} 정규수업 원천을 찾지 못했습니다.`]
      : missingTemplateIds.length
        ? [`${sourceMonth}에 마지막 실제 수업이 없는 반 ${missingTemplateIds.length}개가 있습니다. 명단을 확인한 뒤 다시 열어 주세요.`]
        : [],
    lessonsToCreate: rows.flatMap((row) => row.lessons),
    monthKey: targetMonth,
    rows,
    sourceMonth
  };
}

export function getMonthlyRegularLessonOpenSnapshot(lesson = {}) {
  return JSON.stringify({
    classTemplateId: lesson.classTemplateId || "",
    date: lesson.date || "",
    endTime: lesson.endTime || "",
    lessonId: lesson.lessonId || "",
    lessonType: lesson.lessonType || "",
    startTime: lesson.startTime || "",
    status: lesson.status || "",
    studentIds: [...new Set(lesson.studentIds || [])].sort()
  });
}
