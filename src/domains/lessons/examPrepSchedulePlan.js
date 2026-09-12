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
      const after = applyExamPrepScheduleToLesson(lesson, { endTime: normalizedEnd, startTime: normalizedStart, targets });
      if (!after) return [];
      const before = persistedById.get(lesson.lessonId) ?? null;
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

// 한 수업에 "선택한 학생들의 시간을 이걸로" 를 적용한 결과. 대상 학생이 명단에 없으면 null.
function applyExamPrepScheduleToLesson(lesson, { endTime, startTime, targets }) {
  const lessonTargets = (lesson.studentIds ?? []).filter((studentId) => targets.has(studentId));
  if (!lessonTargets.length) return null;
  const targetSet = new Set(lessonTargets);
  const schedules = (lesson.specialLectureStudentSchedules ?? [])
    .filter((schedule) => !targetSet.has(schedule.studentId));
  lessonTargets.forEach((studentId) => schedules.push({
    endTime,
    overrideReason: "시험대비 일정 수정",
    scheduleType: "adjusted",
    startTime,
    studentId
  }));
  return { ...lesson, specialLectureStudentSchedules: schedules };
}

/**
 * 서버가 "수업 원본이 다른 화면에서 먼저 변경되었습니다" 와 함께 돌려준 최신 수업 위에,
 * 같은 편집(선택 학생 · 시작/종료 시간)을 다시 얹는다.
 *
 * 편집은 수업 내용이 아니라 "이 학생들의 시간을 이걸로" 라는 의도이므로, 원본이 바뀌었어도
 * 최신 원본에 그대로 다시 적용하는 게 원장님이 저장을 한 번 더 누르는 것과 같은 결과다.
 * 화면이 옛 원본을 들고 있던 이유는 대개 태블릿 출결이 명단을 바꿨거나, 자동 생성 수업을
 * 처음 저장할 때 서버 updatedAt 을 받아두지 않아서였다(2026-09-12 보고).
 *
 * 최신 명단에 대상 학생이 하나도 없으면 null — 그 수업은 이번 저장에서 뺀다.
 */
export function rebaseExamPrepScheduleChange(change, currentLesson, { endTime, startTime, targetStudentIds } = {}) {
  const lessonId = change?.after?.lessonId;
  if (!lessonId || !currentLesson?.lessonId || currentLesson.lessonId !== lessonId) return change;
  const after = applyExamPrepScheduleToLesson(currentLesson, {
    endTime: normalizeTimeInput(endTime),
    startTime: normalizeTimeInput(startTime),
    targets: new Set(targetStudentIds ?? [])
  });
  if (!after) return null;
  return { after, before: currentLesson };
}
