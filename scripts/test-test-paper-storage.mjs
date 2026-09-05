import assert from "node:assert/strict";
import {
  deleteTestPaperFile,
  resolveTestPaperOpenUrl,
  saveTestPaperFile
} from "../src/domains/tests/testPaperStorageOperation.js";
import {
  createTestPaperStoragePath,
  createTestPaperStorageReference,
  isExternalTestPaperFileUrl,
  parseTestPaperStorageReference,
  testPaperStorageBucket,
  validateTestPaperFile
} from "../src/domains/tests/testPaperStorageModel.js";

// --- 모델: 검증·경로·참조 문자열 ---
const file = {
  buffer: Buffer.from("fixture pdf bytes"),
  fileName: "01. 다항식의 연산.pdf",
  mimeType: "application/pdf",
  size: Buffer.byteLength("fixture pdf bytes")
};
assert.equal(validateTestPaperFile(file).extension, "pdf");
assert.throws(() => validateTestPaperFile({ ...file, fileName: "answer.hwp" }), /PDF/);
assert.throws(() => validateTestPaperFile({ ...file, mimeType: "application/octet-stream" }), /형식/);
assert.throws(() => validateTestPaperFile({ ...file, size: 0 }), /비어 있는/);
assert.throws(() => validateTestPaperFile({ ...file, size: 21 * 1024 * 1024 }), /20MB/);

const digest = "digest123";
const storagePath = createTestPaperStoragePath({ digest, fileName: file.fileName });
assert.equal(storagePath, "digest123.pdf");
const reference = createTestPaperStorageReference({ storagePath });
assert.equal(reference, `test-paper-storage://${testPaperStorageBucket}/${storagePath}`);
assert.deepEqual(parseTestPaperStorageReference(reference), { bucketId: testPaperStorageBucket, storagePath });
assert.equal(parseTestPaperStorageReference("https://drive.google.com/x"), null);
assert.equal(parseTestPaperStorageReference("test-paper-storage://other-bucket/../etc"), null);
assert.equal(isExternalTestPaperFileUrl("https://drive.google.com/x"), true);
assert.equal(isExternalTestPaperFileUrl(reference), false);

// --- saveTestPaperFile: 워터마크 없이 ---
{
  const uploads = [];
  const operations = {
    upload: async (bucketId, path, options) => uploads.push({ bucketId, path, options }),
    watermark: async () => {
      throw new Error("워터마크를 요청하지 않았는데 호출됨");
    }
  };
  const result = await saveTestPaperFile({ digest, file, watermark: false, operations });
  assert.equal(uploads.length, 1);
  assert.equal(uploads[0].bucketId, testPaperStorageBucket);
  assert.equal(uploads[0].path, storagePath);
  assert.equal(uploads[0].options.body, file.buffer);
  assert.equal(result.fileReference, reference);
  assert.equal(result.watermarked, false);
}

// --- saveTestPaperFile: 워터마크 적용 시 워터마크 찍은 버퍼가 업로드된다 ---
{
  const watermarkedBuffer = Buffer.from("watermarked bytes");
  const uploads = [];
  const operations = {
    upload: async (bucketId, path, options) => uploads.push(options.body),
    watermark: async (buffer) => {
      assert.equal(buffer, file.buffer);
      return watermarkedBuffer;
    }
  };
  const result = await saveTestPaperFile({ digest, file, watermark: true, operations });
  assert.equal(uploads[0], watermarkedBuffer);
  assert.equal(result.watermarked, true);
  // 같은 원본 다이제스트라도 워터마크 유무에 따라 다른 경로에 저장돼야
  // 워터마크 있는/없는 버전이 서로 덮어쓰지 않는다.
  assert.notEqual(result.fileReference, reference);
  assert.equal(result.fileReference, createTestPaperStorageReference({
    storagePath: createTestPaperStoragePath({ digest: `${digest}-wm`, fileName: file.fileName })
  }));
}

// --- deleteTestPaperFile: Storage 참조만 지우고, 외부 링크는 건드리지 않는다 ---
{
  const deleted = [];
  const operations = { deleteObject: async (bucketId, path) => (deleted.push({ bucketId, path }), true) };
  assert.deepEqual(await deleteTestPaperFile({ fileUrl: reference, operations }), { deleted: true });
  assert.deepEqual(deleted, [{ bucketId: testPaperStorageBucket, path: storagePath }]);

  deleted.length = 0;
  assert.deepEqual(
    await deleteTestPaperFile({ fileUrl: "https://drive.google.com/x", operations }),
    { deleted: false }
  );
  assert.deepEqual(deleted, []);

  assert.deepEqual(await deleteTestPaperFile({ fileUrl: "", operations }), { deleted: false });
}

// --- resolveTestPaperOpenUrl: 외부 링크는 그대로, Storage 참조는 서명 URL ---
{
  const operations = {
    createSignedUrl: async (bucketId, path) => `https://signed.example.com/${bucketId}/${path}`
  };
  assert.equal(
    await resolveTestPaperOpenUrl({ fileUrl: "https://drive.google.com/x", operations }),
    "https://drive.google.com/x"
  );
  assert.equal(
    await resolveTestPaperOpenUrl({ fileUrl: reference, operations }),
    `https://signed.example.com/${testPaperStorageBucket}/${storagePath}`
  );
  await assert.rejects(() => resolveTestPaperOpenUrl({ fileUrl: "", operations }), /열 수 있는/);
}

console.log("test-paper-storage: 모든 assertion 통과");
