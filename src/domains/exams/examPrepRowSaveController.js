function patchExamPrepRowSaveStates(current, rowIds, nextState, isCurrentRequest = () => true) {
  const next = { ...current };
  rowIds.forEach((rowId) => {
    if (isCurrentRequest(rowId)) next[rowId] = nextState;
  });
  return next;
}

export function persistExamPrepRowsWithState({
  onError = () => {},
  request,
  requestIdsByRow,
  rowsToPersist = [],
  setSaveStates
}) {
  const changedRows = rowsToPersist.filter(Boolean);
  if (changedRows.length === 0) return Promise.resolve();

  const rowIds = [...new Set(changedRows.map((row) => row.examPrepId).filter(Boolean))];
  const requestIds = rowIds.reduce((acc, rowId) => {
    const requestId = (requestIdsByRow[rowId] ?? 0) + 1;
    requestIdsByRow[rowId] = requestId;
    acc[rowId] = requestId;
    return acc;
  }, {});

  setSaveStates((current) => patchExamPrepRowSaveStates(current, rowIds, "saving"));

  return request(changedRows)
    .then(() => {
      setSaveStates((current) => patchExamPrepRowSaveStates(
        current,
        rowIds,
        "saved",
        (rowId) => requestIdsByRow[rowId] === requestIds[rowId]
      ));
    })
    .catch((error) => {
      onError(error);
      setSaveStates((current) => patchExamPrepRowSaveStates(
        current,
        rowIds,
        "failed",
        (rowId) => requestIdsByRow[rowId] === requestIds[rowId]
      ));
    });
}
