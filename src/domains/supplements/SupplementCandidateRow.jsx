export function SupplementCandidateRow({
  existingTask,
  isPassBusy,
  item,
  onOpen,
  onPass,
  rowAction,
  studentName,
  taskProgress
}) {
  return (
    <article className={item.isFutureDeferred ? "candidateItem supplementRowItem futureDeferred" : "candidateItem supplementRowItem"}>
      <div>
        <button className="textLinkButton" onClick={onOpen} type="button">
          {studentName}
        </button>
        <span>{item.title}</span>
        <small>{item.meta}</small>
        {item.futureMeta ? <small className="supplementFutureHint">{item.futureMeta}</small> : null}
        {existingTask ? (
          <span className={`supplementProgressBadge ${taskProgress.tone}`}>
            {taskProgress.label}
            {taskProgress.detail ? <b>{taskProgress.detail}</b> : null}
          </span>
        ) : null}
        {existingTask?.supplementProgressMemo?.trim() ? (
          <small className="supplementMemoPreview">메모: {existingTask.supplementProgressMemo}</small>
        ) : null}
        {rowAction?.message ? (
          <small className={`supplementRowActionState ${rowAction.state}`}>{rowAction.message}</small>
        ) : null}
      </div>
      <button className={existingTask ? "softButton subtle" : "softButton"} onClick={onOpen} type="button">
        {existingTask ? "상세 검토" : "보충 생성"}
      </button>
      {existingTask ? (
        <button
          className="passButton"
          disabled={isPassBusy}
          onClick={onPass}
          title="보충 완료 처리"
          type="button"
        >
          보충 완료 처리
        </button>
      ) : null}
    </article>
  );
}
