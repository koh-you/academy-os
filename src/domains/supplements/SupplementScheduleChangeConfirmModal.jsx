import { useState } from "react";
import { Modal } from "../../shared/components/Modal.jsx";
import {
  createSupplementScheduleChangeDraft,
  createSupplementScheduleChangePatch,
  getSupplementScheduleTargetLabel
} from "./supplementScheduleChangeDraft.js";

export function SupplementScheduleChangeConfirmModal({
  getDetailSeed,
  getTypeLabel,
  isBusy = false,
  onCancel,
  onConfirmWithReminder,
  onConfirmWithoutReminder,
  studentName,
  task
}) {
  const targetLabel = getSupplementScheduleTargetLabel(task);
  const [noticeDraft, setNoticeDraft] = useState(() => createSupplementScheduleChangeDraft({ getDetailSeed, task }));
  const buildNoticePatch = () => createSupplementScheduleChangePatch(noticeDraft);

  return (
    <Modal
      className="supplementPassConfirmModal supplementScheduleConfirmModal"
      title="보충 일정 변경 저장"
      subtitle="기존 보충 일정을 바꾸면 다음 정각 안내 예약과 당일 11시 예약 갱신을 함께 선택합니다."
      onClose={onCancel}
    >
      <div className="supplementPassConfirmBody">
        <p>
          <strong>{studentName}</strong> 학생의 보충 일정을 저장할까요?
        </p>
        <dl className="supplementPassConfirmSummary">
          <div>
            <dt>구분</dt>
            <dd>{getTypeLabel(task.taskType)}</dd>
          </div>
          <div>
            <dt>항목</dt>
            <dd>{targetLabel}</dd>
          </div>
          <div>
            <dt>변경 일정</dt>
            <dd>{task.scheduledDate || "미확정"} {task.scheduledTime || ""}</dd>
          </div>
        </dl>
        <div className="supplementScheduleChangeFields">
          <label>
            <strong>보충 내역</strong>
            <textarea
              value={noticeDraft.scheduleChangeDetail}
              onChange={(event) => setNoticeDraft((current) => ({ ...current, scheduleChangeDetail: event.target.value }))}
              placeholder="예: 쎈 C단계, 지난 숙제 확인, 결석 수업 보강 범위"
            />
          </label>
          <label>
            <strong>변경 사유</strong>
            <textarea
              value={noticeDraft.scheduleChangeReason}
              onChange={(event) => setNoticeDraft((current) => ({ ...current, scheduleChangeReason: event.target.value }))}
              placeholder="예: 학생 요청, 수업 시간 조정, 개인 일정 변경"
            />
          </label>
        </div>
        <p className="supplementScheduleConfirmNote">
          알림톡 예약을 선택하면 학생과 학부모에게 등원보충 일정 안내가 다음 정각에 예약되고, 보강 당일 오전 11시 학생 리마인더 예약도 같은 보충 항목 기준으로 갱신됩니다.
        </p>
      </div>
      <div className="modalActions confirmActions supplementScheduleConfirmActions">
        <button className="softButton subtle" disabled={isBusy} onClick={onCancel} type="button">
          취소
        </button>
        <button className="softButton" disabled={isBusy} onClick={() => onConfirmWithoutReminder(buildNoticePatch())} type="button">
          {isBusy ? "저장 중" : "일정만 저장"}
        </button>
        <button className="softButton scheduleApplyButton" disabled={isBusy} onClick={() => onConfirmWithReminder(buildNoticePatch())} type="button">
          {isBusy ? "예약/갱신 중" : "다음 정각 예약 및 11시 갱신"}
        </button>
      </div>
    </Modal>
  );
}
