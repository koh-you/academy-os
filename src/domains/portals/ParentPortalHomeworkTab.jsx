export function ParentPortalHomeworkTab({
  getStatusLabel,
  getStatusTone,
  homeworks = [],
  isOverdue,
  overdueCount = 0,
  records = []
}) {
  return (
    <div className="studentAllPanel">
      <div>
        <h2>숙제 현황</h2>
        <p className="muted">학부모 화면은 열람 전용입니다. 숙제 수정과 삭제는 선생님 화면에서만 가능합니다.</p>
      </div>
      {homeworks.length === 0 ? <div className="emptyPortalPanel">등록된 숙제가 없습니다.</div> : null}
      {homeworks.map((homework) => (
        <article className="studentHomeworkCard" key={homework.homeworkId}>
          <div className="homeworkCardTop">
            <div>
              <strong>{homework.title}</strong>
              <span>{homework.subject ?? "공통수학1"}</span>
              <span className={isOverdue(homework) ? "statusRed" : "statusBlue"}>
                {isOverdue(homework) ? "밀림" : "진행"}
              </span>
            </div>
            <strong className={`homeworkStatusBadge ${getStatusTone(homework, records)}`}>
              {getStatusLabel(homework, records)}
            </strong>
          </div>
          <p>{homework.assignedDate} ~ {homework.dueDate}</p>
        </article>
      ))}
      {overdueCount ? <div className="warningBand">밀린 숙제 {overdueCount}개가 있습니다.</div> : null}
    </div>
  );
}
