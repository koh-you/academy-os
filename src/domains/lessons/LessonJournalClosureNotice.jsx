import { createLessonJournalClosureNoticeModel } from "./lessonJournalClosureNoticeModel.js";

export function LessonJournalClosureNotice(props) {
  const model = createLessonJournalClosureNoticeModel(props);
  if (!model) return null;

  return (
    <section className={model.className}>
      <div>
        <strong>{model.title}</strong>
        <p>{model.description}</p>
      </div>
      <span>{model.linkText}</span>
      <small>이 일정 생성만으로 알림톡·문자는 발송되거나 예약되지 않습니다.</small>
    </section>
  );
}
