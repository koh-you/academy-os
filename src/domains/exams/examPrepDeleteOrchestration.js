function uniqueIds(values = []) {
  return [...new Set(values.filter(Boolean).map((value) => String(value)))];
}

function rowIds(rows = []) {
  return uniqueIds(rows.map((row) => row?.examPrepId));
}

function lessonIds(lessons = []) {
  return uniqueIds(lessons.map((lesson) => lesson?.lessonId));
}

function getAffectedLessonSnapshots(originalLessons = [], plan = {}) {
  const affectedIds = new Set([
    ...(plan.lessonIdsToDelete ?? []),
    ...(plan.lessonsToSave ?? []).map((lesson) => lesson.lessonId)
  ]);
  return originalLessons.filter((lesson) => affectedIds.has(lesson.lessonId));
}

function verifySuccessState({
  examPrepId,
  originalLessons,
  originalRows,
  plan,
  state
}) {
  const currentRowIds = new Set(rowIds(state.examPrepRows));
  const currentLessonIds = new Set(lessonIds(state.lessons));
  const deletedLessonIds = new Set(plan.lessonIdsToDelete ?? []);
  const missingControlRowIds = rowIds(originalRows)
    .filter((id) => id !== examPrepId && !currentRowIds.has(id));
  const missingPreservedLessonIds = lessonIds(originalLessons)
    .filter((id) => !deletedLessonIds.has(id) && !currentLessonIds.has(id));
  const remainingDeletedLessonIds = [...deletedLessonIds].filter((id) => currentLessonIds.has(id));
  const missingSavedLessonIds = (plan.lessonsToSave ?? [])
    .map((lesson) => lesson.lessonId)
    .filter((id) => !currentLessonIds.has(id));
  return {
    ok: (
      !currentRowIds.has(examPrepId) &&
      missingControlRowIds.length === 0 &&
      missingPreservedLessonIds.length === 0 &&
      remainingDeletedLessonIds.length === 0 &&
      missingSavedLessonIds.length === 0
    ),
    targetRowPresent: currentRowIds.has(examPrepId),
    missingControlRowIds,
    missingPreservedLessonIds,
    remainingDeletedLessonIds,
    missingSavedLessonIds
  };
}

function verifyRollbackState({ originalLessons, originalRows, state }) {
  const currentRowIds = new Set(rowIds(state.examPrepRows));
  const currentLessonIds = new Set(lessonIds(state.lessons));
  const missingRowIds = rowIds(originalRows).filter((id) => !currentRowIds.has(id));
  const missingLessonIds = lessonIds(originalLessons).filter((id) => !currentLessonIds.has(id));
  return {
    ok: missingRowIds.length === 0 && missingLessonIds.length === 0,
    missingRowIds,
    missingLessonIds
  };
}

export function createExamPrepDeleteAuditId(examPrepId, now = Date.now(), randomValue = Math.random()) {
  const suffix = Math.floor(Math.abs(Number(randomValue) || 0) * 0xFFFFFF)
    .toString(36)
    .padStart(5, "0");
  return `exam-prep-delete-${now}-${suffix}-${String(examPrepId || "").length}`;
}

export async function executeExamPrepDeleteOrchestration({
  applyLessonPlan,
  auditId,
  deleteRow,
  examPrepId,
  originalLessons = [],
  originalRows = [],
  plan = {},
  readState,
  restoreLessons,
  restoreRows
}) {
  if (!examPrepId) throw new Error("삭제할 시험정보 ID가 필요합니다.");
  const adapters = [applyLessonPlan, deleteRow, readState, restoreLessons, restoreRows];
  if (adapters.some((adapter) => typeof adapter !== "function")) {
    throw new Error("시험정보 삭제 orchestration adapter가 필요합니다.");
  }

  const affectedLessons = getAffectedLessonSnapshots(originalLessons, plan);
  const audit = {
    auditId,
    operation: "delete_exam_prep_row_and_lessons",
    targetExamPrepId: examPrepId,
    beforeRowIds: rowIds(originalRows),
    affectedLessonIds: lessonIds(affectedLessons),
    lessonIdsToDelete: uniqueIds(plan.lessonIdsToDelete ?? []),
    lessonIdsToSave: lessonIds(plan.lessonsToSave ?? []),
    stage: "delete-row",
    failureStage: "",
    afterRowIds: [],
    afterLessonIds: [],
    rollback: {
      attempted: false,
      restoredRowIds: [],
      restoredLessonIds: [],
      verified: false
    }
  };
  let lessonMutationStarted = false;

  try {
    const deleteResult = await deleteRow({ auditId, examPrepId });
    const deletedRowIds = uniqueIds(deleteResult?.deletedExamPrepRowIds ?? []);
    if (deletedRowIds.length !== 1 || deletedRowIds[0] !== String(examPrepId)) {
      throw new Error("시험정보 삭제 응답이 단일 대상과 일치하지 않습니다.");
    }

    audit.stage = "apply-lessons";
    lessonMutationStarted = true;
    await applyLessonPlan({ auditId, plan });

    audit.stage = "verify";
    const state = await readState();
    audit.afterRowIds = rowIds(state.examPrepRows);
    audit.afterLessonIds = lessonIds(state.lessons);
    const verification = verifySuccessState({
      examPrepId,
      originalLessons,
      originalRows,
      plan,
      state
    });
    if (!verification.ok) {
      const error = new Error("시험정보 삭제 후 원천 재조회 결과가 계획과 일치하지 않습니다.");
      error.verification = verification;
      throw error;
    }

    audit.stage = "completed";
    audit.rollback.verified = true;
    return { audit, state, verification };
  } catch (error) {
    audit.failureStage = audit.stage;
    audit.stage = "rollback-read";
    audit.rollback.attempted = true;
    try {
      const currentState = await readState();
      const currentRowIds = new Set(rowIds(currentState.examPrepRows));
      const missingRows = originalRows.filter((row) => !currentRowIds.has(row.examPrepId));
      if (missingRows.length > 0) {
        audit.stage = "rollback-rows";
        await restoreRows(missingRows);
        audit.rollback.restoredRowIds = rowIds(missingRows);
      }
      const currentLessonIds = new Set(lessonIds(currentState.lessons));
      const missingOriginalLessons = lessonMutationStarted
        ? originalLessons.filter((lesson) => !currentLessonIds.has(lesson.lessonId))
        : [];
      const lessonsToRestore = lessonMutationStarted
        ? [...new Map(
            [...affectedLessons, ...missingOriginalLessons]
              .map((lesson) => [lesson.lessonId, lesson])
          ).values()]
        : [];
      if (lessonsToRestore.length > 0) {
        audit.stage = "rollback-lessons";
        await restoreLessons(lessonsToRestore);
        audit.rollback.restoredLessonIds = lessonIds(lessonsToRestore);
      }
      audit.stage = "rollback-verify";
      const rollbackState = await readState();
      const rollbackVerification = verifyRollbackState({
        originalLessons,
        originalRows,
        state: rollbackState
      });
      audit.rollback.verified = rollbackVerification.ok;
      audit.rollback.missingRowIds = rollbackVerification.missingRowIds;
      audit.rollback.missingLessonIds = rollbackVerification.missingLessonIds;
      audit.afterRowIds = rowIds(rollbackState.examPrepRows);
      audit.afterLessonIds = lessonIds(rollbackState.lessons);
    } catch (rollbackError) {
      audit.rollback.error = rollbackError.message;
      audit.rollback.verified = false;
    }
    error.audit = audit;
    throw error;
  }
}
