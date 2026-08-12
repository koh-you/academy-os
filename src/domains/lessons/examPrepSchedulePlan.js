import { normalizeTimeInput } from "./attendance.js";

function unique(values = []) {
  return [...new Set(values.filter(Boolean))];
}

function getTargetStudentIds({ lesson = {}, mode = "school", selectedKeys = [], students = [] }) {
  const roster = new Set(lesson.studentIds ?? []);
  const keys = new Set(selectedKeys);
  return unique(students
    .filter((student) => roster.has(student.studentId))
    .filter((student) => {
      if (mode === "class") return keys.has(student.defaultClassTemplateId || "class_unassigned");
      if (mode === "student") return keys.has(student.studentId);
      return keys.has(student.schoolName || "학교 미입력");
    })
    .map((student) => student.studentId));
}

export function createExamPrepScheduleGroups({ lesson = {}, mode = "school", students = [], templates = [] }) {
  const roster = new Set(lesson.studentIds ?? []);
  const templateNames = new Map(templates.map((template) => [template.classTemplateId, template.className || template.name]));
  const groups = new Map();
  students.filter((student) => roster.has(student.studentId)).forEach((student) => {
    const key = mode === "class"
      ? student.defaultClassTemplateId || "class_unassigned"
      : mode === "student"
        ? student.studentId
        : student.schoolName || "학교 미입력";
    const label = mode === "class"
      ? templateNames.get(student.defaultClassTemplateId) || "반 미지정"
      : mode === "student"
        ? `${student.name || "이름 미입력"} · ${student.schoolName || "학교 미입력"}`
        : key;
    if (!groups.has(key)) groups.set(key, { key, label, studentIds: [] });
    groups.get(key).studentIds.push(student.studentId);
  });
  return [...groups.values()].sort((left, right) => left.label.localeCompare(right.label, "ko", { numeric: true }));
}

export function createExamPrepScheduleSavePlan({
  lessons = [],
  mode = "school",
  persistedLessons = [],
  selectedKeys = [],
  sourceLesson = {},
  startTime = "",
  endTime = "",
  students = []
} = {}) {
  const normalizedStart = normalizeTimeInput(startTime);
  const normalizedEnd = normalizeTimeInput(endTime);
  if (!normalizedStart || !normalizedEnd || normalizedEnd <= normalizedStart) {
    throw new Error("시작 시간보다 늦은 종료 시간을 입력해 주세요.");
  }
  const targetStudentIds = getTargetStudentIds({ lesson: sourceLesson, mode, selectedKeys, students });
  if (!targetStudentIds.length) throw new Error("일정을 적용할 반·학교·학생을 선택해 주세요.");
  const targets = new Set(targetStudentIds);
  const persistedById = new Map(persistedLessons.map((lesson) => [lesson.lessonId, lesson]));
  const changes = lessons
    .filter((lesson) => lesson.lessonType === "examPrep" && lesson.date >= sourceLesson.date)
    .sort((left, right) => left.date.localeCompare(right.date))
    .flatMap((lesson) => {
      const lessonTargets = (lesson.studentIds ?? []).filter((studentId) => targets.has(studentId));
      if (!lessonTargets.length) return [];
      const targetSet = new Set(lessonTargets);
      const schedules = (lesson.specialLectureStudentSchedules ?? [])
        .filter((schedule) => !targetSet.has(schedule.studentId));
      lessonTargets.forEach((studentId) => schedules.push({
        endTime: normalizedEnd,
        overrideReason: "시험대비 일정 수정",
        scheduleType: "adjusted",
        startTime: normalizedStart,
        studentId
      }));
      const before = persistedById.get(lesson.lessonId) ?? null;
      const after = { ...lesson, specialLectureStudentSchedules: schedules };
      return [{ after, before }];
    });
  return {
    changes,
    endTime: normalizedEnd,
    sourceDate: sourceLesson.date,
    startTime: normalizedStart,
    targetStudentIds
  };
}

export function getExamPrepLessonContent(lesson = {}) {
  const content = String(lesson.lessonTopic || "").trim();
  return content === "시험대비" ? "" : content;
}

export function createExamPrepContentSavePlan({
  content = "",
  persistedLessons = [],
  sourceLesson = {}
} = {}) {
  if (!sourceLesson.lessonId || sourceLesson.lessonType !== "examPrep") {
    throw new Error("진행 내용을 저장할 시험대비 수업을 찾지 못했습니다.");
  }
  const before = persistedLessons.find((lesson) => lesson.lessonId === sourceLesson.lessonId) ?? null;
  const baseLesson = before ?? sourceLesson;
  const lessonTopic = String(content || "").trim() || "시험대비";
  if (String(baseLesson.lessonTopic || "시험대비").trim() === lessonTopic) {
    return { changes: [], content: getExamPrepLessonContent(baseLesson), lessonId: sourceLesson.lessonId };
  }
  return {
    changes: [{ before, after: { ...baseLesson, lessonTopic } }],
    content: getExamPrepLessonContent({ lessonTopic }),
    lessonId: sourceLesson.lessonId
  };
}
