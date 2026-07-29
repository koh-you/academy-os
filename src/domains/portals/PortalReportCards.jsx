import { ListCard, ListCardBody, ListCardHeader } from "../../shared/components/ListCard.jsx";

export function PortalReportCards({ reports = [] }) {
  return reports.map((report) => (
    <ListCard className="snapshotCard" key={report.reportId}>
      <ListCardHeader as="strong">{report.title}</ListCardHeader>
      <ListCardBody as="p">{report.body}</ListCardBody>
    </ListCard>
  ));
}
