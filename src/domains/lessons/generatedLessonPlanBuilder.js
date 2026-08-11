export function buildGeneratedLessonPlan({ rows = [], lessons = [], students = [], controls = {} }, {
  normalizeGeneratedLessonControls,
  buildExamCalendarEvents,
  createPreExamLessonFromSchoolEvent,
  createPreExamGeneratedKey,
  buildExamPrepLessonCandidates,
  getGeneratedLessonIdentityKeys,
  areGeneratedLessonPersistedFieldsEqual
}) {
  const safeControls = normalizeGeneratedLessonControls(controls);
  const candidates = [];
  buildExamCalendarEvents(rows)
    .filter((event) => event.type === "mathExam")
    .forEach((event) => {
      const lesson = createPreExamLessonFromSchoolEvent(event, students);
      if (!lesson) return;
      const generatedKey = createPreExamGeneratedKey(event);
      candidates.push({
        generatedKey,
        label: `${event.schoolName || "학교 미입력"} ${event.grade || ""} ${event.examSubject || "수학"} 직전수업`,
        reason: `${event.date} 수학시험 전날`,
        lesson: { ...lesson, generatedKey }
      });
    });
  candidates.push(...buildExamPrepLessonCandidates(rows, students));

  return candidates.map((candidate) => {
    const candidateKeys = new Set([candidate.generatedKey, ...getGeneratedLessonIdentityKeys(candidate.lesson)].filter(Boolean));
    const existing = lessons.find((lesson) =>
      getGeneratedLessonIdentityKeys(lesson).some((key) => candidateKeys.has(key)) ||
        lesson.sourceSchoolEventId === candidate.lesson.sourceSchoolEventId ||
        lesson.lessonId === candidate.lesson.lessonId
    );
    const controlKeys = [candidate.generatedKey, ...candidateKeys].filter(Boolean);
    const suppressed = controlKeys.some((key) => safeControls.suppressedKeys.includes(key));
    const isExamPrep = candidate.lesson.lessonType === "examPrep";
    const retainedSchedules = isExamPrep && existing
      ? (existing.specialLectureStudentSchedules ?? []).filter((schedule) =>
          candidate.lesson.studentIds.includes(schedule.studentId)
        )
      : candidate.lesson.specialLectureStudentSchedules;
    const authoritativeLesson = isExamPrep
      ? { ...candidate.lesson, specialLectureStudentSchedules: retainedSchedules ?? [] }
      : candidate.lesson;
    const manualOverride = existing && !isExamPrep && controlKeys.some((key) => safeControls.manualOverrideKeys.includes(key));
    const needsUpdate = existing && !areGeneratedLessonPersistedFieldsEqual(authoritativeLesson, existing);
    const status = suppressed ? "skipped" : manualOverride ? "protected" : !existing ? "create" : needsUpdate ? "update" : "synced";
    return {
      ...candidate,
      existingLesson: existing,
      status,
      lesson: existing && status === "update"
        ? {
            ...authoritativeLesson,
            lessonId: existing.lessonId
          }
        : authoritativeLesson
    };
  });
}
