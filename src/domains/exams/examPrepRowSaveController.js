function areExamPrepRowsEqual(left, right) {
  return JSON.stringify(left) === JSON.stringify(right);
}

function patchExamPrepRowSaveStates(current, rowIds, nextState, shouldPatch = () => true) {
  const next = { ...current };
  rowIds.forEach((rowId) => {
    if (shouldPatch(rowId)) next[rowId] = nextState;
  });
  return next;
}

export function createExamPrepRowSaveController({
  onError = () => {},
  request,
  setSaveStates
}) {
  if (typeof request !== "function") {
    throw new Error("시험정보 저장 request가 필요합니다.");
  }
  if (typeof setSaveStates !== "function") {
    throw new Error("시험정보 저장 상태 updater가 필요합니다.");
  }

  const activeByRowId = new Map();
  const persistedByRowId = new Map();
  let inFlight = null;
  let pendingByRowId = new Map();

  async function drain() {
    let lastError = null;
    while (pendingByRowId.size > 0) {
      const entries = [...pendingByRowId.entries()];
      pendingByRowId = new Map();
      const rows = entries.map(([, row]) => row);
      const rowIds = entries.map(([rowId]) => rowId);
      entries.forEach(([rowId, row]) => activeByRowId.set(rowId, row));

      try {
        await request(rows);
        entries.forEach(([rowId, row]) => persistedByRowId.set(rowId, row));
        setSaveStates((current) => patchExamPrepRowSaveStates(
          current,
          rowIds,
          "saved",
          (rowId) => !pendingByRowId.has(rowId)
        ));
      } catch (error) {
        lastError = error;
        onError(error);
        setSaveStates((current) => patchExamPrepRowSaveStates(
          current,
          rowIds,
          "failed",
          (rowId) => !pendingByRowId.has(rowId)
        ));
      } finally {
        rowIds.forEach((rowId) => activeByRowId.delete(rowId));
      }
    }
    return lastError ? { error: lastError, ok: false } : { ok: true };
  }

  function startDrain() {
    if (inFlight || pendingByRowId.size === 0) return inFlight;
    const currentDrain = drain().finally(() => {
      if (inFlight === currentDrain) inFlight = null;
    });
    inFlight = currentDrain;
    return currentDrain;
  }

  function save(rowsToPersist = []) {
    const changedRows = rowsToPersist.filter((row) => row?.examPrepId);
    const requestedRowIds = new Set();
    changedRows.forEach((row) => {
      const rowId = row.examPrepId;
      requestedRowIds.add(rowId);
      const pendingRow = pendingByRowId.get(rowId);
      if (pendingRow && areExamPrepRowsEqual(pendingRow, row)) return;
      const activeRow = activeByRowId.get(rowId);
      if (!pendingRow && activeRow && areExamPrepRowsEqual(activeRow, row)) return;
      const persistedRow = persistedByRowId.get(rowId);
      if (!pendingRow && !activeRow && persistedRow && areExamPrepRowsEqual(persistedRow, row)) return;
      pendingByRowId.set(rowId, row);
    });

    if (pendingByRowId.size > 0) {
      setSaveStates((current) => patchExamPrepRowSaveStates(
        current,
        [...requestedRowIds],
        "saving"
      ));
    }
    return startDrain() ?? Promise.resolve({ ok: true });
  }

  return { save };
}
