import { useMemo, useState } from "react";
import { DataTableShell } from "../../shared/components/DataTableShell.jsx";
import { ModalFooter } from "../../shared/components/Modal.jsx";
import {
  buildStudentMonthlyReportModel,
  buildStudentMonthlyReportText,
  openStudentMonthlyReportPdf
} from "./studentMonthlyReport.js";

function ReportRows({ detailed = false, emptyText, rows = [], showAttendance = false, showReason = false }) {
  if (!rows.length) return <p className="studentMonthlyReportEmpty">{emptyText}</p>;
  return (
    <div className="studentMonthlyReportRows">
      {rows.map((row) => (
        <article className="studentMonthlyReportRow" key={`${row.lessonId}_${showReason ? "change" : "lesson"}`}>
          <div>
            <strong>{row.dateLabel}</strong>
            <span>{row.timeLabel}</span>
          </div>
          <div>
            <strong>{row.typeLabel}</strong>
            {detailed && row.className !== row.typeLabel ? <span>{row.className}</span> : null}
          </div>
          {showAttendance ? <b className={`studentMonthlyReportStatus status-${row.attendance === "출석" ? "present" : row.attendance === "출결 미입력" ? "pending" : "attention"}`}>{row.attendance}</b> : null}
          {showReason ? <b className="studentMonthlyReportChangeReason">{row.changeReason}</b> : null}
        </article>
      ))}
    </div>
  );
}

function ReportCalendar({ detailed = false, weeks = [] }) {
  return (
    <div className="studentMonthlyReportCalendar" role="grid" aria-label="월간 수업 달력">
      {["일", "월", "화", "수", "목", "금", "토"].map((label) => <b className="studentMonthlyReportCalendarWeekday" key={label} role="columnheader">{label}</b>)}
      {weeks.flat().map((cell, index) => cell ? (
        <div className="studentMonthlyReportCalendarDay" key={cell.date} role="gridcell">
          <strong>{cell.day}</strong>
          {cell.rows.map((row) => (
            <div className={`studentMonthlyReportCalendarLesson${row.isCanceled ? " canceled" : ""}`} key={row.lessonId}>
              <span>{row.startTime || "--:--"} · {row.typeLabel}</span>
              {detailed && row.className !== row.typeLabel ? <small>{row.className}</small> : null}
              <small>{row.attendance}{row.changeReason ? ` · ${row.changeReason}` : ""}</small>
            </div>
          ))}
        </div>
      ) : <div aria-hidden="true" className="studentMonthlyReportCalendarDay outside" key={`outside-${index}`} />)}
    </div>
  );
}

function ReportTable({ detailed = false, rows = [] }) {
  return (
    <DataTableShell className="studentMonthlyReportTableWrap" label="월간 수업·출결 표">
      <table className="studentMonthlyReportTable">
        <thead><tr><th>날짜</th><th>시간</th><th>수업</th><th>출결</th><th>변동</th></tr></thead>
        <tbody>
          {rows.length ? rows.map((row) => (
            <tr key={row.lessonId}>
              <td>{row.dateLabel}</td>
              <td>{row.timeLabel}</td>
              <td>{row.typeLabel}{detailed && row.className !== row.typeLabel ? <small>{row.className}</small> : null}</td>
              <td><b className={`studentMonthlyReportStatus status-${row.attendance === "출석" ? "present" : row.attendance === "출결 미입력" ? "pending" : "attention"}`}>{row.attendance}</b></td>
              <td>{row.changeReason || "-"}</td>
            </tr>
          )) : <tr><td colSpan="5">표시할 수업이 없습니다.</td></tr>}
        </tbody>
      </table>
    </DataTableShell>
  );
}

export function StudentMonthlyReportModal({
  lessons = [],
  ModalComponent,
  monthKey,
  onClose,
  records = [],
  student
}) {
  const [detailed, setDetailed] = useState(false);
  const [note, setNote] = useState("");
  const [actionStatus, setActionStatus] = useState("");
  const [pdfSections, setPdfSections] = useState({ calendar: true, changes: true, table: true });
  const model = useMemo(() => buildStudentMonthlyReportModel({ lessons, monthKey, records, student }), [lessons, monthKey, records, student]);
  const audience = detailed ? "director" : "parent";

  function togglePdfSection(key) {
    setPdfSections((current) => ({ ...current, [key]: !current[key] }));
    setActionStatus("");
  }

  async function copyReportText() {
    setActionStatus("");
    try {
      await navigator.clipboard.writeText(buildStudentMonthlyReportText(model, { audience, note }));
      setActionStatus("내용을 복사했습니다. 카카오톡 등 원하는 곳에 붙여넣으세요.");
    } catch (error) {
      setActionStatus(`복사 실패 · ${error?.message || "브라우저의 클립보드 권한을 확인해 주세요."}`);
    }
  }

  function printReport() {
    setActionStatus("");
    try {
      openStudentMonthlyReportPdf(model, { audience, note, sections: pdfSections });
    } catch (error) {
      setActionStatus(`PDF 인쇄 실패 · ${error?.message || "팝업 차단을 확인해 주세요."}`);
    }
  }

  return (
    <ModalComponent
      className="studentMonthlyReportModal"
      onClose={onClose}
      scrollable
      subtitle="화면에서 내용을 확인한 뒤 복사하거나 PDF로 인쇄합니다. 운영 데이터와 알림은 변경하지 않습니다."
      title={`${student.name} ${model.monthLabel} 월간 제출 미리보기`}
    >
      <div className="studentMonthlyReportControls">
        <label><input checked={detailed} onChange={(event) => { setDetailed(event.target.checked); setActionStatus(""); }} type="checkbox" /> 상세 정보 표시</label>
        <fieldset>
          <legend>PDF 포함 항목</legend>
          <label><input checked={pdfSections.calendar} onChange={() => togglePdfSection("calendar")} type="checkbox" /> 달력</label>
          <label><input checked={pdfSections.table} onChange={() => togglePdfSection("table")} type="checkbox" /> 표</label>
          <label><input checked={pdfSections.changes} onChange={() => togglePdfSection("changes")} type="checkbox" /> 변동사항</label>
        </fieldset>
      </div>

      <section className="studentMonthlyReportPreview" aria-label={`${student.name} ${model.monthLabel} 월간 제출 미리보기`}>
        <header>
          <div>
            <h3>{student.name} {model.monthLabel} 수업 안내</h3>
            <p>{[student.schoolName, student.grade].filter(Boolean).join(" · ") || "학교·학년 미입력"}</p>
          </div>
          {detailed ? <small>개별 스케줄 · {model.student.schedule}</small> : null}
        </header>
        <div className="studentMonthlyReportSummary">
          <div><strong>{model.summary.planned}회</strong><span>예정 수업</span></div>
          <div><strong>{model.summary.actual}회</strong><span>출결 확인</span></div>
          <div><strong>{model.summary.changes}건</strong><span>변동사항</span></div>
        </div>
        {detailed ? (
          <p className="studentMonthlyReportAttendanceCounts">
            출석 {model.attendance.present} · 지각 {model.attendance.late} · 결석 {model.attendance.absent} · 미입력 {model.attendance.pending}
          </p>
        ) : null}
        <section>
          <h4>월간 달력</h4>
          <ReportCalendar detailed={detailed} weeks={model.calendarWeeks} />
        </section>
        <section>
          <h4>수업·출결 표</h4>
          <ReportTable detailed={detailed} rows={model.rows} />
        </section>
        <section>
          <h4>변동사항</h4>
          <ReportRows detailed={detailed} emptyText="별도 변동사항이 없습니다." rows={model.changeRows} showReason />
        </section>
        <label className="studentMonthlyReportNote">
          <span>{detailed ? "공유 메모" : "안내 메모"} <small>이번 미리보기와 출력에만 포함 · 저장 안 됨</small></span>
          <textarea onChange={(event) => { setNote(event.target.value); setActionStatus(""); }} placeholder={detailed ? "예) 8월 마지막 주부터 월수금으로 전환 예정" : "예) 일정 변동이 있어 확인 부탁드립니다."} rows="4" value={note} />
        </label>
      </section>

      {actionStatus ? <p className="studentMonthlyReportActionStatus" role="status">{actionStatus}</p> : null}
      <ModalFooter>
        <button className="softButton" onClick={onClose} type="button">닫기</button>
        <button className="softButton" onClick={copyReportText} type="button">제출 내용 복사</button>
        <button className="primaryButton" onClick={printReport} type="button">PDF 인쇄</button>
      </ModalFooter>
    </ModalComponent>
  );
}
