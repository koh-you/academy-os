import { ListCard, ListCardBody, ListCardHeader } from "../../shared/components/ListCard.jsx";

export function StudentPrepNotices({ notices = [] }) {
  if (!notices.length) return null;

  return (
    <div className="portalNoticeStack">
      <h2>수업 준비 안내</h2>
      {notices.slice(0, 3).map((notice) => (
        <ListCard className="portalNoticeCard" key={`prep_${notice.lessonStudentRecordId}`}>
          <ListCardHeader as="strong">{notice.lesson?.date ?? "수업"} · {notice.lesson?.className ?? "수업 준비"}</ListCardHeader>
          <ListCardBody as="p">{notice.prepStudentNotice}</ListCardBody>
        </ListCard>
      ))}
    </div>
  );
}
