import { normalizeExamQuestionItems } from "./questionClassification.js";

export function canvasToVisionImageDataUrl(sourceCanvas, maxDimension = 1600) {
  if (!sourceCanvas?.width || !sourceCanvas?.height) {
    throw new Error("렌더링된 페이지 이미지를 찾지 못했습니다.");
  }
  const scale = Math.min(1, maxDimension / Math.max(sourceCanvas.width, sourceCanvas.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(sourceCanvas.width * scale));
  canvas.height = Math.max(1, Math.round(sourceCanvas.height * scale));
  const context = canvas.getContext("2d");
  context.drawImage(sourceCanvas, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL("image/jpeg", 0.86);
}

export async function renderPdfPageToVisionImageDataUrl(pdfDocument, pageNumber, scale = 1.35) {
  const page = await pdfDocument.getPage(pageNumber);
  const viewport = page.getViewport({ scale });
  const outputScale = Math.min(window.devicePixelRatio || 1, 2);
  const canvas = document.createElement("canvas");
  canvas.width = Math.floor(viewport.width * outputScale);
  canvas.height = Math.floor(viewport.height * outputScale);
  const context = canvas.getContext("2d");
  context.setTransform(outputScale, 0, 0, outputScale, 0, 0);
  const renderTask = page.render({ canvasContext: context, viewport });
  await renderTask.promise;
  const dataUrl = canvasToVisionImageDataUrl(canvas);
  canvas.width = 1;
  canvas.height = 1;
  return dataUrl;
}

export function imageElementToVisionImageDataUrl(imageElement, maxDimension = 1600) {
  const width = imageElement?.naturalWidth || imageElement?.width;
  const height = imageElement?.naturalHeight || imageElement?.height;
  if (!width || !height) {
    throw new Error("이미지 원본을 아직 불러오지 못했습니다.");
  }
  const scale = Math.min(1, maxDimension / Math.max(width, height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(width * scale));
  canvas.height = Math.max(1, Math.round(height * scale));
  const context = canvas.getContext("2d");
  context.drawImage(imageElement, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL("image/jpeg", 0.86);
}

export function imageUrlToVisionImageDataUrl(imageUrl, maxDimension = 1600) {
  return new Promise((resolve, reject) => {
    if (!imageUrl) {
      reject(new Error("이미지 원본 링크가 없습니다."));
      return;
    }
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => {
      try {
        resolve(imageElementToVisionImageDataUrl(image, maxDimension));
      } catch (error) {
        reject(error);
      }
    };
    image.onerror = () => reject(new Error("이미지 원본을 불러오지 못했습니다."));
    image.src = imageUrl;
  });
}

export function getExamAnalysisSourceFileId(file = {}, index = 0) {
  return file.storagePath || file.signedUrl || file.fileName || `source_${index}`;
}

export function isImageExamAnalysisSource(file = {}) {
  const type = String(file.fileType || "").toLowerCase();
  const name = String(file.fileName || file.storagePath || "").toLowerCase();
  return type.startsWith("image/") || /\.(png|jpe?g|webp|gif)$/i.test(name);
}

export function isPdfExamAnalysisSource(file = {}) {
  const type = String(file.fileType || "").toLowerCase();
  const name = String(file.fileName || file.storagePath || "").toLowerCase();
  return type === "application/pdf" || /\.pdf$/i.test(name);
}

export function getExamAnalysisQuestionSourceContext(analysis = {}, options = {}) {
  const getSourceRenderUrl = typeof options.getSourceRenderUrl === "function" ? options.getSourceRenderUrl : () => "";
  const renderFiles = (analysis.sourceFiles ?? []).filter((file) => isImageExamAnalysisSource(file) || isPdfExamAnalysisSource(file));
  const sourceFile = renderFiles.find((file, index) => getExamAnalysisSourceFileId(file, index) === analysis.questionSourceId) ?? renderFiles[0] ?? null;
  const sourceIndex = sourceFile ? renderFiles.indexOf(sourceFile) : 0;
  const sourceId = analysis.questionSourceId || (sourceFile ? getExamAnalysisSourceFileId(sourceFile, sourceIndex) : "");
  const sourceUrl = analysis.questionSourceUrl || (sourceFile ? getSourceRenderUrl(sourceFile) : "");
  return { sourceFile, sourceId, sourceUrl };
}

export function normalizeCropBox(box = null) {
  if (!box || typeof box !== "object") return null;
  const x = Math.max(0, Math.min(100, Number(box.x) || 0));
  const y = Math.max(0, Math.min(100, Number(box.y) || 0));
  const width = Math.max(0, Math.min(100 - x, Number(box.width) || 0));
  const height = Math.max(0, Math.min(100 - y, Number(box.height) || 0));
  return width && height ? { x, y, width, height } : null;
}

export function buildHeuristicQuestionCropBoxes(items = [], pageNumber = 1, pageCount = 1) {
  const normalizedItems = normalizeExamQuestionItems(items);
  if (!normalizedItems.length) return [];
  const safePage = Math.max(1, Number(pageNumber) || 1);
  const safePageCount = Math.max(1, Number(pageCount) || 1);
  const hasExplicitPages = normalizedItems.some((item) => Number(item.page) > 1);
  const perPage = Math.max(1, Math.ceil(normalizedItems.length / safePageCount));
  const pageItems = hasExplicitPages
    ? normalizedItems.filter((item) => Math.max(1, Number(item.page) || 1) === safePage)
    : normalizedItems.slice((safePage - 1) * perPage, safePage * perPage);
  const targetItems = pageItems.length ? pageItems : normalizedItems.slice(0, perPage);
  const columns = targetItems.length >= 4 ? 2 : 1;
  const rows = Math.max(1, Math.ceil(targetItems.length / columns));
  const gapX = 3;
  const gapY = 3;
  const marginX = 6;
  const startY = 13;
  const usableHeight = 82;
  const width = (100 - marginX * 2 - gapX * (columns - 1)) / columns;
  const height = (usableHeight - gapY * (rows - 1)) / rows;
  return targetItems.map((item, index) => {
    const column = index % columns;
    const row = Math.floor(index / columns);
    return {
      cropBox: normalizeCropBox({
        height,
        width,
        x: marginX + column * (width + gapX),
        y: startY + row * (height + gapY)
      }),
      note: "자동 배치 초안",
      page: safePage,
      questionId: item.questionId,
      questionNumber: item.number
    };
  }).filter((item) => item.cropBox);
}
