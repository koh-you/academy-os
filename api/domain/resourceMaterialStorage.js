import {
  areResourceMaterialTimestampsEqual,
  isSameResourceMaterialDraft
} from "../../src/domains/resources/resourceMaterialPersistence.js";
import {
  createResourceMaterialStoragePath,
  createResourceMaterialStorageReference,
  parseResourceMaterialStorageReference,
  resourceMaterialStorageBucket,
  validateResourceMaterialFile
} from "../../src/domains/resources/resourceMaterialStorageModel.js";

function createStorageError(message, details = {}) {
  const error = new Error(message);
  Object.assign(error, details);
  return error;
}

function requireResourceMaterialStorageReference(reference) {
  if (reference && reference.bucketId !== resourceMaterialStorageBucket) {
    throw createStorageError("허용되지 않은 자료 Storage bucket입니다.", {
      code: "RESOURCE_MATERIAL_STORAGE_REFERENCE_INVALID",
      statusCode: 400
    });
  }
  return reference;
}

export async function saveResourceMaterialFile({
  digest,
  file,
  material,
  operations
} = {}) {
  if (!material?.materialId || !material?.createdAt) throw new Error("자료 초안 ID와 생성 토큰이 필요합니다.");
  const validatedFile = validateResourceMaterialFile(file);
  const currentMaterial = await operations.getMaterial(material.materialId);
  if (currentMaterial && !isSameResourceMaterialDraft(material, currentMaterial)) {
    throw createStorageError("같은 자료 ID가 다른 초안으로 먼저 저장되었습니다. 현재 입력을 유지합니다.", {
      code: "RESOURCE_MATERIAL_CONFLICT",
      currentMaterial,
      statusCode: 409
    });
  }

  const storagePath = createResourceMaterialStoragePath({
    createdAt: material.createdAt,
    digest,
    fileName: validatedFile.fileName,
    materialId: material.materialId
  });
  const fileReference = createResourceMaterialStorageReference({ storagePath });
  const previousReference = requireResourceMaterialStorageReference(
    parseResourceMaterialStorageReference(currentMaterial?.fileUrl)
  );
  const sameStoredFile = currentMaterial?.fileUrl === fileReference;

  if (!sameStoredFile) {
    await operations.upload(resourceMaterialStorageBucket, storagePath, {
      body: file.buffer,
      contentType: validatedFile.mimeType
    });
  }

  let saved;
  try {
    saved = await operations.saveMaterial({
      ...material,
      fileName: validatedFile.fileName,
      fileUrl: fileReference,
      materialType: "file"
    });
  } catch (error) {
    if (!sameStoredFile) {
      try {
        await operations.deleteObject(resourceMaterialStorageBucket, storagePath);
      } catch (cleanupError) {
        throw createStorageError(
          `파일 업로드 뒤 자료 저장에 실패했고 새 파일 정리도 실패했습니다. 자동 재시도하지 말고 관리자에게 알려주세요. (${error.message})`,
          {
            cause: error,
            cleanupError,
            code: "RESOURCE_MATERIAL_UPLOAD_ROLLBACK_FAILED",
            statusCode: 500,
            storagePath
          }
        );
      }
    }
    throw error;
  }

  let previousFileCleanupFailed = false;
  if (previousReference && currentMaterial.fileUrl !== fileReference) {
    try {
      await operations.deleteObject(previousReference.bucketId, previousReference.storagePath);
    } catch {
      previousFileCleanupFailed = true;
    }
  }

  return {
    ...saved,
    fileReference,
    previousFileCleanupFailed,
    storagePath
  };
}

export async function deleteResourceMaterialWithFile({ material, operations } = {}) {
  if (!material?.materialId || !material?.updatedAt) throw new Error("삭제할 자료 ID와 서버 버전이 필요합니다.");
  const currentMaterial = await operations.getMaterial(material.materialId);
  const requestedReference = requireResourceMaterialStorageReference(
    parseResourceMaterialStorageReference(material.fileUrl)
  );

  if (!currentMaterial) {
    if (requestedReference) await operations.deleteObject(requestedReference.bucketId, requestedReference.storagePath);
    return operations.deleteMaterial(material.materialId, { expectedUpdatedAt: material.updatedAt });
  }
  if (!areResourceMaterialTimestampsEqual(currentMaterial.updatedAt, material.updatedAt)) {
    throw createStorageError("자료가 다른 화면에서 먼저 변경되었습니다. 목록과 파일은 유지합니다.", {
      code: "RESOURCE_MATERIAL_CONFLICT",
      currentMaterial,
      statusCode: 409
    });
  }

  const currentReference = requireResourceMaterialStorageReference(
    parseResourceMaterialStorageReference(currentMaterial.fileUrl)
  );
  if (!currentReference) {
    return operations.deleteMaterial(material.materialId, { expectedUpdatedAt: material.updatedAt });
  }

  let backup = null;
  try {
    backup = await operations.download(currentReference.bucketId, currentReference.storagePath);
  } catch (error) {
    if (error?.statusCode !== 404) throw error;
  }
  const storageDeleted = await operations.deleteObject(currentReference.bucketId, currentReference.storagePath);

  try {
    return {
      ...(await operations.deleteMaterial(material.materialId, { expectedUpdatedAt: material.updatedAt })),
      storageDeleted
    };
  } catch (error) {
    if (storageDeleted && backup?.buffer) {
      try {
        await operations.upload(currentReference.bucketId, currentReference.storagePath, {
          body: backup.buffer,
          contentType: backup.contentType || "application/octet-stream"
        });
      } catch (rollbackError) {
        throw createStorageError(
          `자료 row 삭제 실패 뒤 파일 복구에도 실패했습니다. 자료 ${material.materialId}의 Storage 상태를 관리자 확인해야 합니다.`,
          {
            cause: error,
            code: "RESOURCE_MATERIAL_DELETE_ROLLBACK_FAILED",
            rollbackError,
            statusCode: 500
          }
        );
      }
    }
    throw error;
  }
}
