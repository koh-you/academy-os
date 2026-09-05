import {
  createTestPaperStoragePath,
  createTestPaperStorageReference,
  isExternalTestPaperFileUrl,
  parseTestPaperStorageReference,
  testPaperStorageBucket,
  validateTestPaperFile
} from "./testPaperStorageModel.js";

function createStorageError(message, details = {}) {
  const error = new Error(message);
  Object.assign(error, details);
  return error;
}

function requireTestPaperStorageReference(reference) {
  if (reference && reference.bucketId !== testPaperStorageBucket) {
    throw createStorageError("허용되지 않은 시험지 Storage bucket입니다.", {
      code: "TEST_PAPER_STORAGE_REFERENCE_INVALID",
      statusCode: 400
    });
  }
  return reference;
}

/**
 * 시험지 파일을 (선택적으로 워터마크를 찍어) Storage 에 올리고 참조 문자열을 돌려준다.
 * 시험지 목록 항목 자체는 app_state 로 저장되므로 여기서는 DB row를 다루지 않는다.
 * @param {{ digest: string, file: { buffer: Buffer, fileName: string, mimeType: string, size: number }, watermark?: boolean, operations: * }} params
 */
export async function saveTestPaperFile({ digest, file, watermark = false, operations } = {}) {
  if (!digest) throw new Error("시험지 파일 다이제스트가 필요합니다.");
  const validatedFile = validateTestPaperFile(file);

  const storeBuffer = watermark ? await operations.watermark(file.buffer) : file.buffer;
  // 다이제스트는 원본(업로드된) 바이트 기준이라, 워터마크 여부에 따라 실제 저장되는 바이트가
  // 달라진다. 같은 원본을 워터마크 유무만 다르게 올릴 때 경로가 겹쳐 서로 덮어쓰지 않도록
  // 워터마크 여부를 경로에 반영한다.
  const storagePath = createTestPaperStoragePath({
    digest: watermark ? `${digest}-wm` : digest,
    fileName: validatedFile.fileName
  });
  const fileReference = createTestPaperStorageReference({ storagePath });

  await operations.upload(testPaperStorageBucket, storagePath, {
    body: storeBuffer,
    contentType: validatedFile.mimeType
  });

  return { fileName: validatedFile.fileName, fileReference, storagePath, watermarked: Boolean(watermark) };
}

/** 시험지 파일을 Storage 에서 지운다. 외부 링크(Drive 등)면 아무것도 하지 않는다. */
export async function deleteTestPaperFile({ fileUrl, operations } = {}) {
  if (!fileUrl || isExternalTestPaperFileUrl(fileUrl)) return { deleted: false };
  const reference = requireTestPaperStorageReference(parseTestPaperStorageReference(fileUrl));
  if (!reference) return { deleted: false };
  const deleted = await operations.deleteObject(reference.bucketId, reference.storagePath);
  return { deleted };
}

/** 열람용 URL을 만든다. 외부 링크는 그대로, Storage 참조는 서명 URL로 바꾼다. */
export async function resolveTestPaperOpenUrl({ fileUrl, operations } = {}) {
  if (isExternalTestPaperFileUrl(fileUrl)) return fileUrl;
  const reference = requireTestPaperStorageReference(parseTestPaperStorageReference(fileUrl));
  if (!reference) {
    throw createStorageError("열 수 있는 시험지 파일이 없습니다.", { statusCode: 404 });
  }
  return operations.createSignedUrl(reference.bucketId, reference.storagePath);
}
