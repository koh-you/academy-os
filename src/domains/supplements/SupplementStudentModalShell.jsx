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
      scrollable
    >
      {feedback ? (
        <div className={`supplementFeedbackPopup ${feedback.tone || "success"}`} role="status" aria-live="polite">
          <div>
            <strong>{feedback.title}</strong>
            <p>{feedback.message}</p>
          </div>
          <div className="supplementFeedbackActions">
            {feedback.reloadRequired ? (
              <button className="softButton mini" onClick={() => window.location.reload()} type="button">
                최신 화면으로 새로고침
              </button>
            ) : null}
            <button aria-label="완료 알림 닫기" className="iconButton" onClick={onDismissFeedback} type="button">×</button>
          </div>
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
