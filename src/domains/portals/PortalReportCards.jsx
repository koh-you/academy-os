export function PortalReportCards({ reports = [] }) {
  return reports.map((report) => (
    <article className="snapshotCard" key={report.reportId}>
      <strong>{report.title}</strong>
      <p>{report.body}</p>
    </article>
  ));
}
