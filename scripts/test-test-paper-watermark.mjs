import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { PDFDocument } from "pdf-lib";
import {
  addCenteredDiagonalWatermark,
  centeredRotatedOrigin,
  defaultWatermarkLogoPath,
  defaultWatermarkOptions,
  watermarkTestPaperFile
} from "../src/shared/server/testPaperWatermark.js";

// --- 기본값 ---
assert.deepEqual(defaultWatermarkOptions, { opacity: 0.1, rotationDegrees: 45, widthRatio: 0.5 });
assert.ok(existsSync(defaultWatermarkLogoPath), `기본 로고 파일이 없습니다: ${defaultWatermarkLogoPath}`);

// --- centeredRotatedOrigin: 회전 없음이면 단순 중앙 정렬과 같다 ---
const noRotation = centeredRotatedOrigin({
  pageWidth: 600,
  pageHeight: 800,
  width: 200,
  height: 100,
  rotationDegrees: 0
});
assert.ok(Math.abs(noRotation.x - (300 - 100)) < 1e-9);
assert.ok(Math.abs(noRotation.y - (400 - 50)) < 1e-9);

// --- centeredRotatedOrigin: 45도 회전 — 독립적으로 계산한 기대값과 대조 ---
const rotated = centeredRotatedOrigin({
  pageWidth: 600,
  pageHeight: 800,
  width: 200,
  height: 100,
  rotationDegrees: 45
});
const theta = (45 * Math.PI) / 180;
const expectedX = 300 - (100 * Math.cos(theta) - 50 * Math.sin(theta));
const expectedY = 400 - (100 * Math.sin(theta) + 50 * Math.cos(theta));
assert.ok(Math.abs(rotated.x - expectedX) < 1e-9);
assert.ok(Math.abs(rotated.y - expectedY) < 1e-9);

// --- addCenteredDiagonalWatermark: 페이지 수 유지, 페이지마다 이미지 XObject 삽입 ---
const sourceDoc = await PDFDocument.create();
const pageA4 = sourceDoc.addPage([595.28, 841.89]);
pageA4.drawText("Question 1.");
const pageCustom = sourceDoc.addPage([400, 600]);
pageCustom.drawText("Question 2.");
const sourcePdfBytes = await sourceDoc.save();
const logoBytes = await readFile(defaultWatermarkLogoPath);

const watermarkedBytes = await addCenteredDiagonalWatermark(sourcePdfBytes, logoBytes);
assert.ok(watermarkedBytes.length > sourcePdfBytes.length, "이미지가 삽입되면 파일 크기가 커져야 한다");

const reloaded = await PDFDocument.load(watermarkedBytes);
assert.equal(reloaded.getPageCount(), 2, "페이지 수는 그대로여야 한다");

const watermarkedText = Buffer.from(watermarkedBytes).toString("latin1");
assert.ok(watermarkedText.includes("/XObject"), "이미지 XObject 리소스가 있어야 한다");
assert.ok(watermarkedText.includes("/Image"), "이미지 Subtype 이 있어야 한다");

// --- 옵션을 바꾸면 결과가 달라진다(같은 입력을 그대로 반환하지 않는다) ---
const customBytes = await addCenteredDiagonalWatermark(sourcePdfBytes, logoBytes, {
  opacity: 0.25,
  widthRatio: 0.3,
  rotationDegrees: 20
});
assert.notEqual(Buffer.compare(Buffer.from(customBytes), Buffer.from(watermarkedBytes)), 0);

// --- watermarkTestPaperFile: 파일 경로 기반 헬퍼 ---
const tempDir = await mkdtemp(join(tmpdir(), "academy-os-watermark-test-"));
const tempPdfPath = join(tempDir, "source.pdf");
await writeFile(tempPdfPath, sourcePdfBytes);
try {
  const fileWatermarked = await watermarkTestPaperFile(tempPdfPath);
  const fileReloaded = await PDFDocument.load(fileWatermarked);
  assert.equal(fileReloaded.getPageCount(), 2);
} finally {
  await rm(tempDir, { recursive: true, force: true });
}

console.log("test-paper-watermark: 모든 assertion 통과");
