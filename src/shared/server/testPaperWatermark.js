import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { PDFDocument, degrees } from "pdf-lib";

// 저장소 기본 워터마크 로고. src/shared/server 에서 상대 경로로 접근한다.
export const defaultWatermarkLogoPath = fileURLToPath(
  new URL("../../../assets/branding/academy-mark.png", import.meta.url)
);

export const defaultWatermarkOptions = Object.freeze({
  opacity: 0.1,
  rotationDegrees: 45,
  widthRatio: 0.5
});

/**
 * 페이지 중앙에 로고를 대각선으로 회전시켜 그릴 (x, y) 를 계산한다.
 * pdf-lib 는 (x, y) 를 이미지의 회전 전 좌하단 기준점으로 삼아 그 점을 축으로 회전시키므로,
 * 회전 후에도 이미지 중심이 페이지 중심에 오도록 역산한다.
 */
export function centeredRotatedOrigin({ pageWidth, pageHeight, width, height, rotationDegrees }) {
  const theta = (rotationDegrees * Math.PI) / 180;
  const halfW = width / 2;
  const halfH = height / 2;
  const rotatedCenterX = halfW * Math.cos(theta) - halfH * Math.sin(theta);
  const rotatedCenterY = halfW * Math.sin(theta) + halfH * Math.cos(theta);
  return {
    x: pageWidth / 2 - rotatedCenterX,
    y: pageHeight / 2 - rotatedCenterY
  };
}

/**
 * PDF 의 모든 페이지 중앙에 로고를 대각선·반투명으로 찍는다.
 * @param {Uint8Array|ArrayBuffer} pdfBytes
 * @param {Uint8Array|ArrayBuffer} logoPngBytes
 * @param {{ opacity?: number, rotationDegrees?: number, widthRatio?: number }} [options]
 * @returns {Promise<Uint8Array>} 워터마크가 찍힌 PDF bytes
 */
export async function addCenteredDiagonalWatermark(pdfBytes, logoPngBytes, options = {}) {
  const { opacity, rotationDegrees, widthRatio } = { ...defaultWatermarkOptions, ...options };

  const pdfDoc = await PDFDocument.load(pdfBytes);
  const logoImage = await pdfDoc.embedPng(logoPngBytes);
  const logoAspectRatio = logoImage.height / logoImage.width;

  for (const page of pdfDoc.getPages()) {
    const { width: pageWidth, height: pageHeight } = page.getSize();
    const width = pageWidth * widthRatio;
    const height = width * logoAspectRatio;
    const { x, y } = centeredRotatedOrigin({ pageWidth, pageHeight, width, height, rotationDegrees });

    page.drawImage(logoImage, {
      x,
      y,
      width,
      height,
      opacity,
      rotate: degrees(rotationDegrees)
    });
  }

  return pdfDoc.save();
}

/**
 * 파일 경로 기반 헬퍼. 로고 경로를 생략하면 저장소 기본 로고를 쓴다.
 * @param {string} pdfPath
 * @param {{ logoPath?: string, opacity?: number, rotationDegrees?: number, widthRatio?: number }} [options]
 */
export async function watermarkTestPaperFile(pdfPath, options = {}) {
  const { logoPath = defaultWatermarkLogoPath, ...watermarkOptions } = options;
  const [pdfBytes, logoPngBytes] = await Promise.all([readFile(pdfPath), readFile(logoPath)]);
  return addCenteredDiagonalWatermark(pdfBytes, logoPngBytes, watermarkOptions);
}
