export function ParentPortalAlertsTab({ notices = [] }) {
  return (
    <div className="portalNoticeStack">
      {notices.length === 0 ? <div className="emptyPortalPanel">아직 새 알림이 없습니다.</div> : null}
      {notices.map((notice) => (
        <article className="portalNoticeCard" key={`parent_prep_${notice.lessonStudentRecordId}`}>
          <strong>{notice.lesson?.date ?? "수업"} · {notice.lesson?.className ?? "수업 준비"}</strong>
          <p>{notice.prepParentNotice}</p>
        </article>
      ))}
    </div>
  );
}
