export function createLessonJournalClosureNoticeModel({
  formatLessonTimeRange,
  isClosureLesson,
  isClosureMakeupLesson,
  linkedClosureLesson,
  linkedClosureMakeupLesson
}) {
  if (!isClosureLesson && !isClosureMakeupLesson) return null;

  let linkText = "원 휴강 연결 확인 필요";
  if (isClosureLesson) {
    linkText = linkedClosureMakeupLesson
      ? `연결 보충 · ${linkedClosureMakeupLesson.date} ${formatLessonTimeRange(linkedClosureMakeupLesson)}`
      : "연결 보충 없음";
  } else if (linkedClosureLesson) {
    linkText = `원 휴강 · ${linkedClosureLesson.date} ${linkedClosureLesson.className}`;
  }

  return {
    className: `panel closureJournalNotice ${isClosureMakeupLesson ? "makeup" : ""}`,
    description: isClosureMakeupLesson
      ? "휴강과 연결해 생성한 실제 보충 수업입니다. 보충 횟수에는 표시되지만 정규 월 고정금액은 바꾸지 않습니다."
      : "실제 수업을 진행하지 않은 일정입니다. 학생 명단과 휴강 기록은 보존되며 수업 횟수·시수·급여 정산에서는 제외됩니다.",
    linkText,
    title: isClosureMakeupLesson ? "휴강 보충 수업일지" : "휴강 수업일지"
  };
}
