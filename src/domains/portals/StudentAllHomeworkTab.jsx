export function StudentAllHomeworkTab({
  getStatusLabel,
  getStatusTone,
  homeworks,
  isCompleted,
  isOverdue,
  records = []
}) {
  const sortedHomeworks = [...homeworks].sort((a, b) => b.assignedDate.localeCompare(a.assignedDate));

  return (
    <div className="studentAllPanel">
      <div>
        <h2>등록된 숙제 전체</h2>
        <p className="muted">선생님이 등록한 숙제를 확인합니다. 수정과 삭제는 선생님 화면에서만 가능합니다.</p>
      </div>
      {sortedHomeworks.length === 0 ? <div className="emptyHomeworkBox">등록된 숙제가 없습니다.</div> : null}
      {sortedHomeworks.map((homework) => {
        const completed = isCompleted(homework) ? 1 : 0;
        const totalDays = Math.max(1, isOverdue(homework) ? 5 : 2);
        const progress = Math.round((completed / totalDays) * 100);
        return (
          <article className="studentHomeworkCard" key={homework.homeworkId}>
            <div className="homeworkCardTop">
              <div>
                <strong>{homework.title}</strong>
                <span>{homework.subject ?? "공통수학1"}</span>
                <span className={isOverdue(homework) ? "statusRed" : "statusBlue"}>
                  {isOverdue(homework) ? "밀림" : "현행"}
                </span>
              </div>
            </div>
            <p>{homework.assignedDate} ~ {homework.dueDate} · 총 {homework.totalProblems ?? "-"}문제</p>
            <div className={`homeworkStatusBadge ${getStatusTone(homework, records)}`}>
              {getStatusLabel(homework, records)}
            </div>
            <div className="progressRail"><span style={{ width: `${progress}%` }} /></div>
            <small>{completed}/{totalDays}일 완료 ({progress}%)</small>
            <div className={`dateStrip ${isOverdue(homework) ? "danger" : "safe"}`}>
              <span>{homework.dueDate}</span>
              <b>{getStatusLabel(homework, records)}</b>
            </div>
          </article>
        );
      })}
    </div>
  );
}
