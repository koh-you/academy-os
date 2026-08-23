import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";
import { Modal, ModalFooter } from "../../shared/components/Modal.jsx";

export function MonthlyRegularLessonOpenModal({ plan, saveStatus, onClose, onOpen }) {
  const isSaving = ["saving", "verifying"].includes(saveStatus?.state);
  const canOpen = !plan.errors?.length && plan.lessonsToCreate?.length > 0 && !isSaving;
  return (
    <Modal
      className="monthlyRegularLessonOpenModal"
      title={`${plan.monthKey || "대상 월"} 정규수업 열기`}
      subtitle={`${plan.sourceMonth || "이전 달"}의 마지막 실제 정규수업 명단과 반 시간을 기준으로, 비어 있는 회차만 추가합니다.`}
      onClose={isSaving ? () => {} : onClose}
    >
      <div className="monthlyRegularLessonOpenBody">
        {plan.errors?.length ? <p className="inlineNotice danger">{plan.errors.join(" ")}</p> : null}
        <p className="muted">기존 {plan.monthKey} 수업은 수정하지 않습니다. 출결·수업기록·숙제·알림톡은 복사하거나 예약하지 않습니다. 첫 회차의 지난 숙제는 기존 직전수업 탐색으로 {plan.sourceMonth} 마지막 수업의 다음 숙제를 이어서 표시합니다.</p>
        <div className="monthlyRegularLessonOpenSummary">
          <strong>{plan.rows?.length ?? 0}개 반</strong>
          <span>새 회차 {plan.lessonsToCreate?.length ?? 0}개</span>
        </div>
        <div className="monthlyRegularLessonOpenRows">
          {(plan.rows || []).map((row) => (
            <article key={row.classTemplateId}>
              <strong>{row.className}</strong>
              <span>{row.sourceDate} 명단 {row.studentCount}명 → 새 회차 {row.lessons.length}개</span>
              {row.existingCount ? <small>이미 열린 회차 {row.existingCount}개는 유지</small> : null}
              {row.excludedStudentCount ? <small className="dangerCopy">현재 퇴원/비활성 학생 {row.excludedStudentCount}명은 제외</small> : null}
            </article>
          ))}
        </div>
        {saveStatus?.state ? <InlineSaveStatus label="월 정규수업" saveState={saveStatus.state} /> : null}
        {saveStatus?.message ? <p className={`inlineNotice ${saveStatus.state === "failed" ? "danger" : ""}`}>{saveStatus.message}</p> : null}
        <ModalFooter>
          <button className="softButton" disabled={isSaving} onClick={onClose} type="button">닫기</button>
          <button className="primaryButton" disabled={!canOpen} onClick={onOpen} type="button">
            {isSaving ? "Supabase 반영 확인 중" : `${plan.monthKey} 정규수업 열기`}
          </button>
        </ModalFooter>
      </div>
    </Modal>
  );
}
