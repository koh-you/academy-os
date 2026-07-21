import { Modal } from "../../shared/components/Modal.jsx";
import { createSupplementHistoryItems } from "./supplementHistory.js";

export function SupplementHistoryModal({ getMethodLabel, getTypeLabel, onChangeQuery, onClose, onUndoPassTask, query, students, tasks }) {
  const historyItems = createSupplementHistoryItems({ getMethodLabel, getTypeLabel, query, students, tasks });
  return (
    <Modal
      className="supplementHistoryModal"
      title="최근 한 달 보충관리 내역"
      subtitle="보충 완료, 일정 확정, 진행 중 항목을 학생별로 확인합니다."
      onClose={onClose}
    >
      <div className="supplementHistoryToolbar">
        <label>
          학생/학교/항목 검색
          <input
            autoFocus
            value={query}
            onChange={(event) => onChangeQuery(event.target.value)}
            placeholder="예: 최선호, 창동고, 숙제보충"
          />
        </label>
        <span className="countBadge">{historyItems.length}건</span>
      </div>

      {historyItems.length === 0 ? (
        <div className="emptyHomeworkBox">조건에 맞는 보충관리 내역이 없습니다.</div>
      ) : (
        <div className="supplementHistoryList">
          {historyItems.map(({ historyDate, sourceLabel, status, student, task, typeLabel }) => (
            <article className="supplementHistoryItem" key={task.makeupTaskId}>
              <div>
                <strong>{student?.name ?? "미등록 학생"}</strong>
                <span>{student?.schoolName || "학교 미입력"} · {student?.grade || "-"}</span>
              </div>
              <div>
                <b>{typeLabel}</b>
                <span>{sourceLabel}</span>
              </div>
              <div>
                <span>{historyDate}</span>
                <small>{task.scheduledDate || "-"} {task.scheduledTime || ""}</small>
              </div>
              <span className={`supplementProgressBadge ${status.tone}`}>{status.label}</span>
              <div className="supplementHistoryActions">
                {task.status === "done" ? (
                  <button className="softButton subtle" onClick={() => onUndoPassTask(task)} type="button">
                    보충관리로 복귀
                  </button>
                ) : (
                  <span className="historyActionHint">관리 중</span>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </Modal>
  );
}
