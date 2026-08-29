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
