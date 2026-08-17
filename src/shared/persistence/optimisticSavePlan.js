export async function upsertWithOptimisticConcurrency(requested, {
  entityId,
  getCurrent,
  toRow,
  createNextUpdatedAt,
  areEqual,
  areTimestampsEqual,
  isInsertConflictError,
  insertRow,
  patchRow,
  verify,
  throwConflict,
  missingIdMessage
}) {
  if (!entityId) throw new Error(missingIdMessage);

  const current = await getCurrent(entityId);

  if (!current) {
    if (requested.updatedAt) throwConflict(entityId, null, "deleted");
    const dbRow = toRow(requested);
    dbRow.updated_at = createNextUpdatedAt();
    try {
      await insertRow(dbRow);
    } catch (error) {
      if (isInsertConflictError(error)) {
        const concurrent = await getCurrent(entityId);
        if (concurrent && areEqual(requested, concurrent)) {
          return { entity: concurrent, mutated: false };
        }
        throwConflict(entityId, concurrent, "duplicate");
      }
      throw error;
    }
    const verified = await verify(requested, dbRow.updated_at);
    return { entity: verified, mutated: true };
  }

  if (areEqual(requested, current)) {
    return { entity: current, mutated: false };
  }
  if (!requested.updatedAt) throwConflict(entityId, current, "duplicate");
  if (!areTimestampsEqual(current.updatedAt, requested.updatedAt)) {
    throwConflict(entityId, current);
  }

  const dbRow = toRow(requested);
  dbRow.updated_at = createNextUpdatedAt(current.updatedAt);
  const savedRows = await patchRow(entityId, current.updatedAt, dbRow);
  if (!savedRows.length) throwConflict(entityId, await getCurrent(entityId));
  const verified = await verify(requested, dbRow.updated_at);
  return { entity: verified, mutated: true };
}

export async function deleteWithOptimisticConcurrency(entityId, expectedUpdatedAt, {
  getCurrent,
  areTimestampsEqual,
  deleteRow,
  throwConflict,
  missingIdMessage,
  missingVersionMessage,
  verifyGoneErrorMessage,
  verifyGoneErrorCode
}) {
  if (!entityId) throw new Error(missingIdMessage);
  if (!expectedUpdatedAt) throw new Error(missingVersionMessage);
  const current = await getCurrent(entityId);
  if (!current) throwConflict(entityId, null, "deleted");
  if (!areTimestampsEqual(current.updatedAt, expectedUpdatedAt)) {
    throwConflict(entityId, current);
  }
  const deletedRows = await deleteRow(entityId, current.updatedAt);
  if (deletedRows.length !== 1) throwConflict(entityId, await getCurrent(entityId));
  const stillExists = await getCurrent(entityId);
  if (stillExists) {
    const error = new Error(verifyGoneErrorMessage);
    error.code = verifyGoneErrorCode;
    throw error;
  }
  return { verified: true };
}
