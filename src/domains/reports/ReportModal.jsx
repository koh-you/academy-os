import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";
import { Modal } from "../../shared/components/Modal.jsx";

export function ReportModal({ onClose, onMockSend, onSaveSnapshot, report }) {
  const saveState = report.snapshotSaveState ?? { message: "", state: "idle" };
  const isSaving = saveState.state === "saving";
  return (
    <Modal
      closeDisabled={isSaving}
      onClose={onClose}
      subtitle="현재는 실제 AI API/발송 대신 모의 초안과 모의 발송 상태로 검수합니다."
      title="AI 데일리 리포트"
    >
      <div className="reportMeta">
        <span>{report.lesson.date}</span>
        <span>{report.lesson.className}</span>
        <span>{report.student.name}</span>
        <span>{report.sendStatus}</span>
      </div>
      <label>
        AI API 입력 데이터
        <textarea
          readOnly
          rows="6"
          value={JSON.stringify(
            {
              student: {
                name: report.student.name,
                schoolName: report.student.schoolName,
                grade: report.student.grade,
                textbook: report.student.textbook,
                specialNote: report.student.specialNote
              },
              lesson: report.lesson,
              record: report.record,
              homework: report.homeworkBundle
            },
            null,
            2
          )}
        />
      </label>
      <label>
        보고서 초안
        <textarea readOnly rows="8" value={report.body} />
      </label>
      <div className="modalActions">
        <button className="softButton" disabled={isSaving} onClick={() => onSaveSnapshot(report)} type="button">
          {isSaving ? "저장 확인 중" : "스냅샷 저장"}
        </button>
        <button className="sendButton" disabled={isSaving} onClick={() => onMockSend(report)} type="button">
          {isSaving ? "저장 확인 중" : "모의 발송"}
        </button>
      </div>
      {saveState.state !== "idle" ? (
        <div className={`reportSnapshotSaveFeedback ${saveState.state}`} aria-live="polite" role="status">
          <InlineSaveStatus label="보고서" saveState={saveState.state} />
          {saveState.message ? <span>{saveState.message}</span> : null}
        </div>
      ) : null}
    </Modal>
  );
}
