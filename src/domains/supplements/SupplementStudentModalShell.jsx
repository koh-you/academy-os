import { Modal } from "../../shared/components/Modal.jsx";

export function SupplementStudentModalShell({
  children,
  feedback,
  isEmpty,
  onClose,
  onDismissFeedback,
  overlays,
  studentGrade,
  studentName,
  studentSchool,
  tabTitle
}) {
  return (
    <Modal
      className="supplementStudentModal"
      title={`${studentName} ${tabTitle}`}
      subtitle={`${studentGrade ?? "-"} · ${studentSchool ?? "학교 미입력"}`}
      onClose={onClose}
    >
      {feedback ? (
        <div className={`supplementFeedbackPopup ${feedback.tone || "success"}`} role="status" aria-live="polite">
          <div>
            <strong>{feedback.title}</strong>
            <p>{feedback.message}</p>
          </div>
          <button className="iconButton" onClick={onDismissFeedback} type="button">×</button>
        </div>
      ) : null}
      <div className="supplementModalLayout single">
        <section className="supplementModalMain">
          {isEmpty ? (
            <div className="emptyHomeworkBox">아직 생성된 보충관리 항목이 없습니다.</div>
          ) : null}
          <div className="taskStack">{children}</div>
        </section>
      </div>
      {overlays}
    </Modal>
  );
}
