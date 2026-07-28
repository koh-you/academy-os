import { SectionHeader } from "../../shared/components/SectionHeader.jsx";
import { createLessonJournalReminderPanelModel } from "./lessonJournalReminderPanelModel.js";

export function LessonJournalReminderPanel({ children, reminderCount }) {
  const model = createLessonJournalReminderPanelModel(reminderCount);
  if (!model.isVisible) return null;

  return (
    <section className="panel lessonReminderPanel">
      <SectionHeader
        density="slim"
        description="대시보드 원본 알림 중 오늘 수업 학생과 연결된 항목입니다."
        meta={<span className="countBadge">{model.countLabel}</span>}
        title="수업 관련 운영 알림"
        titleAs="strong"
      />
      {children}
    </section>
  );
}
