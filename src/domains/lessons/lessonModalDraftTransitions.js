import { addMinutesToAttendanceTime, normalizeTimeInput } from "./attendance.js";

// 2026-09-26 · 사용자가 시작 시간을 직접 바꿀 때 종료 시간이 따라가는 기본 수업 길이.
export const lessonModalDefaultLessonMinutes = 180;

// 시작 시간에서 파생되는 종료 시간. 그날 자정을 넘기면 23:59 로 묶는다.
// 저장 계약(getLessonModalValidationError)은 endTime > startTime 을 요구하므로 다음 날 시각을 그대로 두면
// 사용자가 고칠 수 없는 저장 실패가 된다. 하루를 넘는 수업은 종료를 사람이 직접 정한다.
export function getLessonModalFollowedEndTime(
  startTime,
  lessonMinutes = lessonModalDefaultLessonMinutes
) {
  const normalizedStartTime = normalizeTimeInput(startTime);
  if (!normalizedStartTime) return "";
  const [startHour, startMinute] = normalizedStartTime.split(":").map(Number);
  const endMinutes = startHour * 60 + startMinute + lessonMinutes;
  return endMinutes >= 24 * 60
    ? "23:59"
    : addMinutesToAttendanceTime(normalizedStartTime, lessonMinutes);
}

// 시작 시간 변경 패치.
// 2026-09-26(검증 반영) · 신규 등록과 기존 수업 편집의 규칙을 나눈다.
//   신규 등록: 시작을 바꾸면 종료는 항상 시작+3시간.
//   기존 수업 편집: 종료가 "직전 시작+3시간" 과 같을 때만 따라 움직인다. 사람이 16:00-17:45 로 저장해 둔 수업의
//     시작만 16:30 으로 옮겼는데 종료가 19:30 이 되던(1시간 45분 -> 3시간) 조용한 덮어쓰기를 막는다.
// 어느 쪽이든 클램프 결과가 시작보다 같거나 작으면(23:59 경계) 종료를 건드리지 않는다 —
// 종료 상한이 23:59 라 사용자가 고칠 방법이 없는 저장 실패가 되기 때문이다.
export function createLessonModalStartTimeChangePatch({
  currentEndTime = "",
  isEditingExistingLesson = false,
  lessonMinutes = lessonModalDefaultLessonMinutes,
  nextStartTime,
  previousStartTime = ""
}) {
  const normalizedStartTime = normalizeTimeInput(nextStartTime);
  if (!normalizedStartTime) return { startTime: nextStartTime };

  if (isEditingExistingLesson) {
    const followedPreviousEndTime = getLessonModalFollowedEndTime(previousStartTime, lessonMinutes);
    const normalizedCurrentEndTime = normalizeTimeInput(currentEndTime);
    if (!followedPreviousEndTime || normalizedCurrentEndTime !== followedPreviousEndTime) {
      return { startTime: nextStartTime };
    }
  }

  const endTime = getLessonModalFollowedEndTime(normalizedStartTime, lessonMinutes);
  if (!endTime || endTime <= normalizedStartTime) return { startTime: nextStartTime };
  return { endTime, startTime: nextStartTime };
}

export function createLessonModalColorOptions({
  getRegularLessonColor,
  lessonCalendarColors,
  templates
}) {
  return [
    ...templates.map((template) => ({
      id: `class-${template.classTemplateId}`,
      label: template.name,
      lessonType: "class",
      classTemplateId: template.classTemplateId,
      color: getRegularLessonColor(template)
    })),
    { id: "preExam", label: "직전수업", lessonType: "preExam", color: lessonCalendarColors.preExam },
    { id: "closure", label: "휴강", lessonType: "closure", color: lessonCalendarColors.closure },
    { id: "makeup", label: "보충수업", lessonType: "makeup", color: lessonCalendarColors.makeup },
    { id: "examPrep", label: "시험대비", lessonType: "examPrep", color: lessonCalendarColors.examPrep },
    { id: "exam", label: "평가", lessonType: "exam", color: lessonCalendarColors.exam }
  ];
}

export function createLessonModalTemplateChangePatch({
  activeStudents,
  date,
  getStandardLessonColor,
  getTemplateLessonTimes,
  nextLessonType,
  nextTemplateId,
  templates
}) {
  const template = templates.find((item) => item.classTemplateId === nextTemplateId);
  if (!template) {
    return {
      classTemplateId: nextTemplateId,
      hasTemplate: false
    };
  }

  const templateTimes = getTemplateLessonTimes(template, date);
  return {
    classTemplateId: nextTemplateId,
    color: getStandardLessonColor({
      lessonType: nextLessonType,
      classTemplateId: nextTemplateId,
      className: template.name
    }),
    endTime: templateTimes.endTime,
    hasTemplate: true,
    name: template.name,
    startTime: templateTimes.startTime,
    studentIds: activeStudents
      .filter((student) => student.defaultClassTemplateId === nextTemplateId)
      .map((student) => student.studentId)
  };
}

export function createLessonModalTypeChangePatch({
  classTemplateId,
  getStandardLessonColor,
  name,
  nextLessonType
}) {
  if (nextLessonType === "closureMakeup") {
    const baseName = String(name || "").replace(/\s*·?\s*휴강 보충\s*$/, "").trim();
    return {
      color: getStandardLessonColor({
        lessonType: "makeup",
        classTemplateId,
        className: `${baseName || "별도"} · 휴강 보충`
      }),
      lessonType: nextLessonType,
      name: `${baseName || "별도"} · 휴강 보충`,
      studentIds: []
    };
  }
  if (nextLessonType === "newStudentMakeup") {
    return {
      classTemplateId: "",
      color: getStandardLessonColor({
        lessonType: "makeup",
        classTemplateId: "",
        className: "신입생 보강"
      }),
      lessonType: nextLessonType,
      name: "신입생 보강",
      studentIds: []
    };
  }
  return {
    color: getStandardLessonColor({
      lessonType: nextLessonType,
      classTemplateId,
      className: name
    }),
    lessonType: nextLessonType
  };
}

export function createLessonModalDateChangePatch({
  activeTemplate,
  addDaysInKorea,
  closureMakeupDateTouched,
  getTemplateLessonTimes,
  nextDate
}) {
  const templateTimes = getTemplateLessonTimes(activeTemplate, nextDate);
  const patch = {
    date: nextDate,
    endTime: templateTimes.endTime,
    startTime: templateTimes.startTime
  };
  if (!closureMakeupDateTouched) {
    patch.closureMakeupDate = addDaysInKorea(nextDate, 7);
  }
  return patch;
}
