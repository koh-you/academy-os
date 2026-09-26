import { getLessonModalUiType } from "./newStudentMakeup.js";

export function createLessonModalInitialDraft({
  activeStudents,
  activeTemplate,
  addDaysInKorea,
  getActiveStudentIdsFromSelection,
  getStandardLessonColor,
  getTemplateLessonTimes,
  initialLesson,
  normalizeTimeInput,
  today
}) {
  const initialDate = initialLesson?.date ?? today;
  const initialTemplateTimes = getTemplateLessonTimes(activeTemplate, initialDate);
  // 2026-09-26 · 신규 등록은 아무도 선택되지 않은 상태로 시작한다(전원 선택 시드 제거).
  // 기존 수업 편집은 그 수업의 명단을 그대로 유지한다.
  const initialStudentIds = initialLesson?.studentIds ?? [];

  return {
    closureMakeupDate: addDaysInKorea(initialDate, 7),
    closureMakeupEndTime:
      normalizeTimeInput(initialLesson?.endTime) || initialTemplateTimes.endTime,
    closureMakeupStartTime:
      normalizeTimeInput(initialLesson?.startTime) || initialTemplateTimes.startTime,
    color: getStandardLessonColor(
      initialLesson ?? {
        lessonType: "class",
        classTemplateId: activeTemplate.classTemplateId,
        className: activeTemplate.name
      }
    ),
    date: initialDate,
    endTime:
      normalizeTimeInput(initialLesson?.endTime) || initialTemplateTimes.endTime,
    lessonType: initialLesson ? getLessonModalUiType(initialLesson) : "class",
    name: initialLesson?.className ?? activeTemplate.name,
    startTime:
      normalizeTimeInput(initialLesson?.startTime) || initialTemplateTimes.startTime,
    studentIds: getActiveStudentIdsFromSelection(initialStudentIds, activeStudents)
  };
}

export function createLessonModalDraftLessonId({
  activeTemplate,
  createLessonId,
  initialDraft,
  initialLesson
}) {
  return (
    initialLesson?.lessonId ||
    createLessonId(
      initialDraft.date,
      initialLesson?.className || activeTemplate.name || "수업"
    )
  );
}

export function createLessonModalClosureMakeupLessonId({
  activeTemplate,
  createLessonId,
  initialDraft,
  initialLesson
}) {
  return createLessonId(
    initialDraft.closureMakeupDate,
    `${initialLesson?.className || activeTemplate.name || "수업"}-휴강-보충`
  );
}
