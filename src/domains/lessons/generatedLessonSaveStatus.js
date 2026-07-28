export function createGeneratedLessonSavingStatus(lessons = []) {
  return {
    lessons,
    message: `자동 수업 ${lessons.length}건 저장 중...`,
    state: "saving"
  };
}

export function createGeneratedLessonSavedStatus(lessons = []) {
  return {
    lessons: [],
    message: `자동 수업 ${lessons.length}건 저장 완료`,
    state: "saved"
  };
}

export function createGeneratedLessonFailedStatus(
  lessons = [],
  errorMessage = ""
) {
  return {
    lessons,
    message: `자동 수업 저장 실패 · ${errorMessage}`,
    state: "failed"
  };
}
