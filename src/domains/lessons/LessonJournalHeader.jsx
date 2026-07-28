import { NavigationHeader } from "../../shared/components/NavigationHeader.jsx";
import { createLessonJournalHeaderModel } from "./lessonJournalHeaderModel.js";

export function LessonJournalHeader({
  formatLessonTimeRange,
  lesson,
  onBack,
  onDeleteLesson,
  onEditLesson,
  onOpenExamPrep,
  studentCount
}) {
  const model = createLessonJournalHeaderModel({
    formatLessonTimeRange,
    lesson,
    studentCount
  });

  return (
    <NavigationHeader
      actions={(
        <>
          <button className="softButton" onClick={() => onEditLesson(lesson)} type="button">수업 수정</button>
          <button className="dangerButton" onClick={() => onDeleteLesson(lesson.lessonId)} type="button">수업 취소 처리</button>
        </>
      )}
      className="lessonJournalHeader"
      context={<span className="shortcutHint">{model.topic}</span>}
      description={model.metaText}
      leading={<button aria-label="수업 목록으로 돌아가기" className="iconButton" onClick={onBack} type="button">‹</button>}
      titleNode={<button className="linkTitleButton" onClick={onOpenExamPrep} type="button">{model.className}</button>}
    />
  );
}
