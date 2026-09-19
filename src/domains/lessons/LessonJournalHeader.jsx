import { NavigationHeader } from "../../shared/components/NavigationHeader.jsx";
import { createLessonJournalHeaderModel } from "./lessonJournalHeaderModel.js";

export function LessonJournalHeader({
  formatLessonTimeRange,
  lesson,
  onBack,
  onOpenExamPrep,
  onReturnToExamPrepRoster,
  statusPills = null,
  studentCount
}) {
  const model = createLessonJournalHeaderModel({
    formatLessonTimeRange,
    lesson,
    studentCount
  });

  // 우상단: 저장·발송 상태 pill 묶음(+ 시험대비 명단으로 돌아가기). 조작 버튼은 하단 고정바에 있다.
  return (
    <NavigationHeader
      actions={statusPills || onReturnToExamPrepRoster ? (
        <>
          {statusPills}
          {onReturnToExamPrepRoster ? (
            <button className="softButton" onClick={onReturnToExamPrepRoster} type="button">시험대비 명단 화면</button>
          ) : null}
        </>
      ) : null}
      className="lessonJournalHeader"
      context={model.topic ? <span className="shortcutHint">{model.topic}</span> : null}
      description={model.metaText}
      leading={<button aria-label="수업 목록으로 돌아가기" className="iconButton" onClick={onBack} type="button">‹</button>}
      titleNode={<h1><button className="ghostButton link" onClick={onOpenExamPrep} type="button">{model.className}</button></h1>}
    />
  );
}
