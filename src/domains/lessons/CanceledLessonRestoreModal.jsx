import { Modal, ModalFooter } from "../../shared/components/Modal.jsx";
import { getCanceledLessonRemainingDays } from "./recentCanceledLessons.js";

export function CanceledLessonRestoreModal({
  error = "",
  isLoading = false,
  lessons = [],
  onClose,
  onRestore,
  restoringLessonId = ""
}) {
  const isBusy = isLoading || Boolean(restoringLessonId);
  return (
    <Modal
      className="lessonModal"
      closeDisabled={isBusy}
      onClose={onClose}
      scrollable
      subtitle="취소 처리된 수업은 7일 안에 Supabase 원천에서 복구할 수 있습니다."
      title="삭제한 수업 복구"
    >
      {isLoading ? <p role="status">삭제한 수업을 확인하는 중입니다.</p> : null}
      {error ? <p className="saveStatus failed" role="alert">{error}</p> : null}
      {!isLoading && !error && lessons.length === 0 ? (
        <div className="emptyState">최근 7일 안에 취소한 수업이 없습니다.</div>
      ) : null}
      {lessons.length ? (
        <div className="listStack">
          {lessons.map((lesson) => (
            <article className="summaryCard" key={lesson.lessonId}>
              <div>
                <strong>{lesson.date} · {lesson.startTime || "시간 미정"}–{lesson.endTime || "시간 미정"}</strong>
                <p>{lesson.className || "수업"}{lesson.sourceLabel ? ` · ${lesson.sourceLabel}` : ""}</p>
                <p className="muted">
                  학생 {(lesson.studentIds || []).length}명 · {lesson.restoreMode === "visibility" ? "달력 표시 복구 필요" : `복구 가능 ${getCanceledLessonRemainingDays(lesson)}일 남음`}
                </p>
              </div>
              <button
                className="softButton"
                disabled={isBusy}
                onClick={() => onRestore(lesson)}
                type="button"
              >
                {restoringLessonId === lesson.lessonId ? "복구 중" : lesson.restoreMode === "visibility" ? "달력 표시 복구" : "이 수업 복구"}
              </button>
            </article>
          ))}
        </div>
      ) : null}
      <ModalFooter>
        <button className="softButton" disabled={isBusy} onClick={onClose} type="button">닫기</button>
      </ModalFooter>
    </Modal>
  );
}
