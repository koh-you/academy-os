function uniqueIds(values = []) {
  return [...new Set(values.filter(Boolean).map((value) => String(value)))];
}

function getRowId(row = {}) {
  return String(row.exam_prep_id ?? row.examPrepId ?? "");
}

function createAuditError(message, audit, cause) {
  const error = new Error(message, cause ? { cause } : undefined);
  error.audit = audit;
  return error;
}

async function readRowsForAudit(listRows, audit, stage) {
  audit.stage = stage;
  const rows = await listRows();
  if (!Array.isArray(rows)) {
    throw createAuditError("시험정보 삭제 audit 조회 결과가 올바르지 않습니다.", audit);
  }
  return rows;
}

async function compensateMissingRows({
  audit,
  beforeRows,
  listRows,
  restoreRows
}) {
  audit.stage = "rollback-read";
  const currentRows = await listRows();
  const currentIds = new Set(currentRows.map(getRowId).filter(Boolean));
  const missingRows = beforeRows.filter((row) => !currentIds.has(getRowId(row)));
  audit.rollback = {
    attempted: missingRows.length > 0,
    missingRowIds: uniqueIds(missingRows.map(getRowId)),
    restoredRowIds: [],
    verified: missingRows.length === 0
  };

  if (missingRows.length > 0) {
    audit.stage = "rollback-restore";
    const restoredRows = await restoreRows(missingRows);
    audit.rollback.restoredRowIds = uniqueIds((restoredRows ?? missingRows).map(getRowId));
    audit.stage = "rollback-verify";
    const verifiedRows = await listRows();
    const verifiedIds = new Set(verifiedRows.map(getRowId).filter(Boolean));
    audit.rollback.verified = beforeRows.every((row) => verifiedIds.has(getRowId(row)));
  }

  return audit.rollback;
}

export async function deleteExamPrepRowWithAudit({
  auditId,
  deleteTargetRow,
  examPrepId,
  listRows,
  restoreRows
}) {
  if (!examPrepId) throw new Error("삭제할 시험정보 ID가 필요합니다.");
  if (typeof listRows !== "function" || typeof deleteTargetRow !== "function" || typeof restoreRows !== "function") {
    throw new Error("시험정보 삭제 audit adapter가 필요합니다.");
  }

  const audit = {
    auditId: String(auditId || ""),
    operation: "delete_exam_prep_row",
    targetExamPrepId: String(examPrepId),
    stage: "before-read",
    beforeRowIds: [],
    deleteResponseRowIds: [],
    afterRowIds: [],
    deletedRowIds: [],
    failureStage: "",
    rollback: {
      attempted: false,
      missingRowIds: [],
      restoredRowIds: [],
      verified: false
    }
  };
  let beforeRows = [];

  try {
    beforeRows = await readRowsForAudit(listRows, audit, "before-read");
    audit.beforeRowIds = uniqueIds(beforeRows.map(getRowId));
    if (!audit.beforeRowIds.includes(String(examPrepId))) {
      throw createAuditError("삭제할 시험정보를 Supabase에서 찾지 못했습니다.", audit);
    }

    audit.stage = "delete-target";
    const deletedRows = await deleteTargetRow(examPrepId);
    audit.deleteResponseRowIds = uniqueIds((deletedRows ?? []).map(getRowId));

    const afterRows = await readRowsForAudit(listRows, audit, "after-read");
    audit.afterRowIds = uniqueIds(afterRows.map(getRowId));
    const afterIds = new Set(audit.afterRowIds);
    audit.deletedRowIds = audit.beforeRowIds.filter((id) => !afterIds.has(id));
    const exactTargetDeleted = (
      !afterIds.has(String(examPrepId)) &&
      audit.deletedRowIds.length === 1 &&
      audit.deletedRowIds[0] === String(examPrepId)
    );
    if (!exactTargetDeleted) {
      audit.failureStage = "after-read";
      await compensateMissingRows({ audit, beforeRows, listRows, restoreRows });
      throw createAuditError("시험정보 단일 삭제 범위가 일치하지 않아 원래 원천으로 복구했습니다.", audit);
    }

    audit.stage = "completed";
    audit.rollback.verified = true;
    return {
      deletedExamPrepRowIds: [String(examPrepId)],
      audit
    };
  } catch (error) {
    if (!audit.failureStage) audit.failureStage = audit.stage;
    if (beforeRows.length > 0 && !audit.rollback.attempted && audit.stage !== "completed") {
      try {
        await compensateMissingRows({ audit, beforeRows, listRows, restoreRows });
      } catch (rollbackError) {
        audit.rollback.error = rollbackError.message;
        audit.rollback.verified = false;
      }
    }
    if (error?.audit === audit) throw error;
    throw createAuditError(error.message || "시험정보 삭제에 실패했습니다.", audit, error);
  }
}
