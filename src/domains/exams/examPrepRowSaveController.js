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
  onPersisted = () => {},
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
        const result = await request(rows);
        const verifiedByRowId = new Map(
          (result?.examPrepRows ?? []).map((row) => [row?.examPrepId, row])
        );
        const failureByRowId = new Map(
          [...(result?.conflicts ?? []), ...(result?.failures ?? [])]
            .filter((failure) => failure?.examPrepId)
            .map((failure) => [failure.examPrepId, failure])
        );
        const savedRowIds = [];
        const failedRowIds = [];

        entries.forEach(([rowId]) => {
          const verifiedRow = verifiedByRowId.get(rowId);
          if (verifiedRow?.updatedAt) {
            persistedByRowId.set(rowId, verifiedRow);
            const pendingRow = pendingByRowId.get(rowId);
            const hasPendingChanges = Boolean(pendingRow);
            if (pendingRow) {
              pendingByRowId.set(rowId, { ...pendingRow, updatedAt: verifiedRow.updatedAt });
            }
            onPersisted({ hasPendingChanges, row: verifiedRow });
            savedRowIds.push(rowId);
            return;
          }

          const failure = failureByRowId.get(rowId) ?? {
            code: "EXAM_PREP_ROW_VERIFICATION_FAILED",
            examPrepId: rowId,
            message: `시험정보 ${rowId}의 저장 결과를 확인하지 못했습니다.`
          };
          const error = new Error(failure.message);
          error.code = failure.code;
          lastError = error;
          pendingByRowId.delete(rowId);
          failedRowIds.push(rowId);
          onError(error);
        });
        setSaveStates((current) => patchExamPrepRowSaveStates(
          current,
          savedRowIds,
          "saved",
          (rowId) => !pendingByRowId.has(rowId)
        ));
        if (failedRowIds.length > 0) {
          setSaveStates((current) => patchExamPrepRowSaveStates(
            current,
            failedRowIds,
            "failed"
          ));
        }
      } catch (error) {
        lastError = error;
        onError(error);
        rowIds.forEach((rowId) => pendingByRowId.delete(rowId));
        setSaveStates((current) => patchExamPrepRowSaveStates(
          current,
          rowIds,
          "failed"
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
