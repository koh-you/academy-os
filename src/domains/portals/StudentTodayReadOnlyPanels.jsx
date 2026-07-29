import { ListCard, ListCardBody, ListCardHeader } from "../../shared/components/ListCard.jsx";

export function StudentTopNotice({ notice }) {
  if (!notice) return null;

  return (
    <div className={`studentTopNotice ${notice.tone}`}>
      <strong>{notice.title}</strong>
      <span>{notice.detail}</span>
    </div>
  );
}

export function StudentSupplementSchedules({ getTypeLabel, schedules = [] }) {
  if (!schedules.length) return null;

  return (
    <section className="studentSpecialSchedule">
      <h2>보충/재시험 일정</h2>
      <div className="studentSpecialList">
        {schedules.slice(0, 3).map((task) => (
          <ListCard density="compact" key={task.makeupTaskId}>
            <ListCardHeader as="strong">{getTypeLabel(task.taskType)}</ListCardHeader>
            <ListCardBody>
              <span>{task.scheduledDate || "일정 미정"} {task.scheduledTime || ""}</span>
              <small>{task.sourceLabel || task.reason || "선생님과 확인 예정"}</small>
              {task.linkedLessonId ? <em>수업일지 일정 반영됨</em> : null}
            </ListCardBody>
          </ListCard>
        ))}
      </div>
    </section>
  );
}
