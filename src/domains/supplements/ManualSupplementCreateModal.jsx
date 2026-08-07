import { useState } from "react";
import { Modal, ModalFooter } from "../../shared/components/Modal.jsx";

export function ManualSupplementCreateModal({ onClose, onCreate, students = [], today = "" }) {
  const [draft, setDraft] = useState({
    reason: "",
    scheduledDate: today,
    scheduledTime: "",
    studentId: "",
    title: ""
  });
  const [errorMessage, setErrorMessage] = useState("");
  const availableStudents = students.filter((student) => student.status === "active" && !student.withdrawnAt);

  function updateDraft(field, value) {
    setDraft((current) => ({ ...current, [field]: value }));
    setErrorMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    try {
      onCreate(draft);
    } catch (error) {
      setErrorMessage(error?.message || "수동 보충 입력을 확인해 주세요.");
    }
  }

  return (
    <Modal
      className="manualSupplementCreateModal"
      title="수동 보충 작성"
      subtitle="자동 후보가 아닌 보충을 직접 작성해 수업일지와 알림톡에 연결합니다."
      onClose={onClose}
    >
      <form className="manualSupplementCreateForm" onSubmit={handleSubmit}>
        <div className="fieldGrid two">
          <label>
            <strong>학생</strong>
            <select
              aria-label="수동 보충 학생"
              onChange={(event) => updateDraft("studentId", event.target.value)}
              value={draft.studentId}
            >
              <option value="">학생 선택</option>
              {availableStudents.map((student) => (
                <option key={student.studentId} value={student.studentId}>
                  {student.name} · {student.grade || "학년 미입력"}
                </option>
              ))}
            </select>
          </label>
          <label>
            <strong>보충 제목</strong>
            <input
              aria-label="수동 보충 제목"
              onChange={(event) => updateDraft("title", event.target.value)}
              placeholder="예: 함수 단원 개별 보충"
              value={draft.title}
            />
          </label>
        </div>
        <label>
          <strong>보충 사유·내용</strong>
          <textarea
            aria-label="수동 보충 사유와 내용"
            onChange={(event) => updateDraft("reason", event.target.value)}
            placeholder="보충이 필요한 이유와 진행할 내용을 입력해 주세요."
            value={draft.reason}
          />
        </label>
        <div className="fieldGrid two">
          <label>
            <strong>수업일지 날짜</strong>
            <input
              aria-label="수동 보충 날짜"
              onChange={(event) => updateDraft("scheduledDate", event.target.value)}
              type="date"
              value={draft.scheduledDate}
            />
          </label>
          <label>
            <strong>시작 시간</strong>
            <input
              aria-label="수동 보충 시작 시간"
              onChange={(event) => updateDraft("scheduledTime", event.target.value)}
              type="time"
              value={draft.scheduledTime}
            />
          </label>
        </div>
        <p className="muted">
          다음 화면에서 알림 문구를 확인하고 `수업일지 일정 만들기`를 누르면 학생·학부모 다음 정각 안내와 당일 11시 학생 알림도 함께 예약됩니다.
        </p>
        {errorMessage ? <p className="inlineError" role="alert">{errorMessage}</p> : null}
        <ModalFooter>
          <button className="softButton subtle" onClick={onClose} type="button">취소</button>
          <button className="primaryButton" type="submit">수업일지 등록 계속</button>
        </ModalFooter>
      </form>
    </Modal>
  );
}
