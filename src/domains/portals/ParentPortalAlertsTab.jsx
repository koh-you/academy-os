import { ListCard, ListCardBody, ListCardHeader } from "../../shared/components/ListCard.jsx";

export function ParentPortalAlertsTab({ notices = [] }) {
  return (
    <div className="portalNoticeStack">
      {notices.length === 0 ? <div className="emptyPortalPanel">아직 새 알림이 없습니다.</div> : null}
      {notices.map((notice) => (
        <ListCard className="portalNoticeCard" key={`parent_prep_${notice.lessonStudentRecordId}`}>
          <ListCardHeader as="strong">{notice.lesson?.date ?? "수업"} · {notice.lesson?.className ?? "수업 준비"}</ListCardHeader>
          <ListCardBody as="p">{notice.prepParentNotice}</ListCardBody>
        </ListCard>
      ))}
    </div>
  );
}
