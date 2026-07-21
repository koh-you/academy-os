import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { ListCard, ListCardActions } from "../../shared/components/ListCard.jsx";
import { Modal } from "../../shared/components/Modal.jsx";
import { SearchField } from "../../shared/components/SearchField.jsx";
import { createSupplementHistoryItems } from "./supplementHistory.js";

export function SupplementHistoryModal({ getMethodLabel, getTypeLabel, onChangeQuery, onClose, onUndoPassTask, query, students, tasks }) {
  const historyItems = createSupplementHistoryItems({ getMethodLabel, getTypeLabel, query, students, tasks });
  return (
    <Modal
      className="supplementHistoryModal"
      title="최근 한 달 보충관리 내역"
      subtitle="보충 완료, 보강 취소, 일정 확정, 진행 중 항목을 학생별로 확인합니다."
      onClose={onClose}
      scrollable
    >
      <div className="supplementHistoryToolbar">
        <SearchField
          autoFocus
          label="학생/학교/항목 검색"
          onChange={onChangeQuery}
          placeholder="예: 최선호, 창동고, 숙제보충"
          result={`${historyItems.length}건`}
          value={query}
        />
      </div>

      {historyItems.length === 0 ? (
        <EmptyState
          action={query.trim() ? (
            <button className="softButton compact" onClick={() => onChangeQuery?.("")} type="button">검색어 지우기</button>
          ) : null}
          className="emptyHomeworkBox"
          description={query.trim() ? "학생명·학교·보충 항목을 다시 확인하세요." : "보충 완료·취소·일정 확정 이력이 생기면 여기에 표시됩니다."}
          title={query.trim() ? "검색 결과가 없습니다." : "최근 한 달 보충관리 내역이 없습니다."}
        />
      ) : (
        <div className="supplementHistoryList">
          {historyItems.map(({ historyDate, sourceLabel, status, student, task, typeLabel }) => (
            <ListCard className="supplementHistoryItem" density="compact" key={task.makeupTaskId}>
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
              <ListCardActions className="supplementHistoryActions">
                {task.status === "done" ? (
                  <button className="softButton subtle" onClick={() => onUndoPassTask(task)} type="button">
                    보충관리로 복귀
                  </button>
                ) : task.status === "canceled" ? (
                  <span className="historyActionHint">
                    {task.cancellationMode === "keep_source_absence" ? "원 결석기록 유지" : "취소 내역 보존"}
                  </span>
                ) : (
                  <span className="historyActionHint">관리 중</span>
                )}
              </ListCardActions>
            </ListCard>
          ))}
        </div>
      )}
    </Modal>
  );
}
