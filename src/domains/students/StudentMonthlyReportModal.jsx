import { useMemo, useState } from "react";
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

export function StudentMonthlyReportModal({
  lessons = [],
  ModalComponent,
  monthKey,
  onClose,
  records = [],
  student
}) {
  const [audience, setAudience] = useState("parent");
  const [note, setNote] = useState("");
  const [actionStatus, setActionStatus] = useState("");
  const model = useMemo(() => buildStudentMonthlyReportModel({ lessons, monthKey, records, student }), [lessons, monthKey, records, student]);

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
      openStudentMonthlyReportPdf(model, { audience, note });
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
      <div className="studentMonthlyReportAudience" role="group" aria-label="제출 대상">
        <button aria-pressed={audience === "parent"} className={audience === "parent" ? "active" : ""} onClick={() => { setAudience("parent"); setActionStatus(""); }} type="button">학부모용 간단본</button>
        <button aria-pressed={audience === "director"} className={audience === "director" ? "active" : ""} onClick={() => { setAudience("director"); setActionStatus(""); }} type="button">원장님용 상세본</button>
      </div>

      <section className="studentMonthlyReportPreview" aria-label={`${student.name} ${model.monthLabel} ${audience === "parent" ? "학부모용" : "원장님용"} 미리보기`}>
        <header>
          <div>
            <span>{audience === "parent" ? "학부모용 간단본" : "원장님용 상세본"}</span>
            <h3>{student.name} {model.monthLabel} 수업 안내</h3>
            <p>{[student.schoolName, student.grade].filter(Boolean).join(" · ") || "학교·학년 미입력"}</p>
          </div>
          {audience === "director" ? <small>개별 스케줄 · {model.student.schedule}</small> : null}
        </header>
        <div className="studentMonthlyReportSummary">
          <div><strong>{model.summary.planned}회</strong><span>예정 수업</span></div>
          <div><strong>{model.summary.actual}회</strong><span>출결 확인</span></div>
          <div><strong>{model.summary.changes}건</strong><span>변동사항</span></div>
        </div>
        {audience === "director" ? (
          <p className="studentMonthlyReportAttendanceCounts">
            출석 {model.attendance.present} · 지각 {model.attendance.late} · 결석 {model.attendance.absent} · 미입력 {model.attendance.pending}
          </p>
        ) : null}
        <section>
          <h4>예정 수업</h4>
          <ReportRows detailed={audience === "director"} emptyText="예정된 수업이 없습니다." rows={model.plannedRows} showAttendance={audience === "director"} />
        </section>
        <section>
          <h4>실제 출결</h4>
          <ReportRows detailed={audience === "director"} emptyText="확인할 출결이 없습니다." rows={model.actualRows} showAttendance />
        </section>
        <section>
          <h4>변동사항</h4>
          <ReportRows detailed={audience === "director"} emptyText="별도 변동사항이 없습니다." rows={model.changeRows} showReason />
        </section>
        <label className="studentMonthlyReportNote">
          <span>{audience === "director" ? "원장님 공유 메모" : "안내 메모"} <small>이번 미리보기와 출력에만 포함 · 저장 안 됨</small></span>
          <textarea onChange={(event) => { setNote(event.target.value); setActionStatus(""); }} placeholder={audience === "director" ? "예) 8월 마지막 주부터 월수금으로 전환 예정" : "예) 일정 변동이 있어 확인 부탁드립니다."} rows="4" value={note} />
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
