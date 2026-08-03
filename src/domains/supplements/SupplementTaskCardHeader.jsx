export function SupplementTaskCardHeader({ hasSavedNotificationDrafts, sourceStatus = null, task, taskMeta, typeLabel }) {
  return (
    <div className="taskCardTop">
      <div>
        <strong>{typeLabel}</strong>
        <small>{taskMeta}</small>
        {sourceStatus ? (
          <>
            <span className={`taskLinkedLesson ${sourceStatus.tone || ""}`}>{sourceStatus.label}</span>
            {sourceStatus.detail ? <small className="taskSourceReconcileDetail">{sourceStatus.detail}</small> : null}
            {sourceStatus.tone === "draft" && hasSavedNotificationDrafts ? (
              <span className="taskLinkedLesson draftReady">알림톡 문구 3종 저장 완료</span>
            ) : null}
          </>
        ) : task.linkedLessonId ? (
          <span className="taskLinkedLesson">수업일지에 반영되었습니다.</span>
        ) : (
          <>
            <span className="taskLinkedLesson draftMode">수정 중</span>
            {hasSavedNotificationDrafts ? (
              <span className="taskLinkedLesson draftReady">알림톡 문구 3종 저장 완료</span>
            ) : null}
            {task.taskType === "absence_makeup" ? (
              <small className="taskReasonLine">결석사유: {task.absenceReason || "사유 미입력"}</small>
            ) : null}
            {task.lastHomeworkId ? <small>최근 보충 숙제: {task.lastHomeworkId}</small> : null}
          </>
        )}
      </div>
    </div>
  );
}
