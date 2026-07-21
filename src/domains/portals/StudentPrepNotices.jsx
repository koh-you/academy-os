export function StudentPrepNotices({ notices = [] }) {
  if (!notices.length) return null;

  return (
    <div className="portalNoticeStack">
      <h2>수업 준비 안내</h2>
      {notices.slice(0, 3).map((notice) => (
        <article className="portalNoticeCard" key={`prep_${notice.lessonStudentRecordId}`}>
          <strong>{notice.lesson?.date ?? "수업"} · {notice.lesson?.className ?? "수업 준비"}</strong>
          <p>{notice.prepStudentNotice}</p>
        </article>
      ))}
    </div>
  );
}
