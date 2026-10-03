import { answerCellBox, ANSWER_SHEET_SIZE } from "./answerSheetPilotModel.js";

// 화면에 띄울 사본의 긴 변. A4 비율 캔버스에 맞춰 담으므로 answerCellBox 의 정규화 좌표가 그대로 들어맞는다.
const DISPLAY_LONG_EDGE = 1800;
const A4_RATIO = 297 / 210;
// 서버는 base64 12MB 까지 받는다. 원본 그대로 보내다 넘치면 화면 사본으로 되돌린다.
const RECOGNITION_BASE64_LIMIT = 11 * 1024 * 1024;

export function downloadPilotBlob(blob, name) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url; link.download = name; link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/**
 * 이미지를 PDF 한 쪽으로 감싼다. **원본 비율을 지킨다** — 예전에는 A4(595×842)에 늘려 넣어서
 * 4:3 사진의 손글씨가 눌린 채로 판독기에 갔다.
 */
export async function imageToPilotPdf(image) {
  const { PDFDocument } = await import("pdf-lib");
  const pdf = await PDFDocument.create();
  const embedded = image.startsWith("data:image/jpeg") ? await pdf.embedJpg(image) : await pdf.embedPng(image);
  const page = pdf.addPage([embedded.width, embedded.height]);
  page.drawImage(embedded, { x: 0, y: 0, width: embedded.width, height: embedded.height });
  return pdf.saveAsBase64();
}

/**
 * 판독기로 보낼 한 쪽을 만든다. **다시 래스터화하지 않는 길을 먼저 쓴다.**
 *
 * 화면용 사본은 긴 변 1800px JPEG 으로 줄여 둔 것이라, 그걸 그대로 보내면 스캐너 JPEG → 우리 JPEG →
 * 판독기 래스터화로 손실이 세 번 겹친다. 연필처럼 얇은 획이 먼저 뭉개진다.
 * 그래서 이번 세션에 올린 원본이 남아 있으면:
 *   - PDF 는 원본에서 그 쪽만 그대로 떼어낸다(재압축 0회).
 *   - JPG·PNG 는 원본 바이트를 그대로 PDF 에 담는다(재압축 0회).
 * 실험 파일에서 복원한 쪽은 원본이 없으므로 화면 사본을 쓴다(비율은 지킨다).
 *
 * 해상도를 더 올리지는 않는다 — 판독기가 쪽을 긴 변 1568px 안팎으로 다시 줄여 보기 때문에 그 위로는 효과가 없다.
 */
export async function pilotRecognitionPdf(page) {
  const source = page?.source;
  try {
    if (source?.kind === "pdf") {
      const { PDFDocument } = await import("pdf-lib");
      const src = await PDFDocument.load(await source.file.arrayBuffer(), { ignoreEncryption: true });
      const out = await PDFDocument.create();
      const [copied] = await out.copyPages(src, [source.pageIndex]);
      out.addPage(copied);
      const base64 = await out.saveAsBase64();
      if (base64.length <= RECOGNITION_BASE64_LIMIT) return base64;
    } else if (source?.kind === "image") {
      const { PDFDocument } = await import("pdf-lib");
      const bytes = new Uint8Array(await source.file.arrayBuffer());
      const pdf = await PDFDocument.create();
      const embedded = source.file.type === "image/png" ? await pdf.embedPng(bytes) : await pdf.embedJpg(bytes);
      pdf.addPage([embedded.width, embedded.height]).drawImage(embedded, { x: 0, y: 0, width: embedded.width, height: embedded.height });
      const base64 = await pdf.saveAsBase64();
      if (base64.length <= RECOGNITION_BASE64_LIMIT) return base64;
    }
  } catch {
    // 원본을 못 읽으면(암호 PDF·깨진 파일) 아래 화면 사본으로 간다.
  }
  return imageToPilotPdf(page.image);
}

export async function downloadBlankAnswerSheet() {
  await document.fonts.ready;
  const canvas = document.createElement("canvas");
  canvas.width = 1654; canvas.height = 2339;
  const c = canvas.getContext("2d");
  c.fillStyle = "white"; c.fillRect(0, 0, canvas.width, canvas.height);
  c.fillStyle = "#17212b";
  c.font = "bold 42px sans-serif"; c.fillText("으뜸수학 고태영T", 108, 115);
  c.font = "bold 60px sans-serif"; c.fillText("공통 답안지", 108, 200);
  c.font = "28px sans-serif";
  c.fillText("시험명 ________________________   이름 ______________", 108, 285);
  c.fillText("객관식은 번호만 · 단답형은 최종 답만 · 사용하지 않는 칸은 비워두세요.", 108, 352);
  c.fillText("정답지와 학생 답안지에 같은 양식을 사용합니다.  /  20문항", 108, 402);
  for (let no = 1; no <= ANSWER_SHEET_SIZE; no++) {
    const box = answerCellBox(no);
    const x = box.x * canvas.width, y = box.y * canvas.height;
    c.strokeStyle = "#65717e"; c.lineWidth = 2;
    c.strokeRect(x, y, box.width * canvas.width, box.height * canvas.height);
    c.font = "bold 28px sans-serif"; c.fillText(String(no), x + 14, y + 37);
  }
  c.font = "23px sans-serif";
  c.fillText("공통 답안지 v1  ·  원본 크기(A4)로 출력  ·  1 / 1", 108, 2240);
  const base64 = await imageToPilotPdf(canvas.toDataURL("image/png"));
  downloadPilotBlob(new Blob([Uint8Array.from(atob(base64), (v) => v.charCodeAt(0))], { type: "application/pdf" }), "공통답안지-20문항.pdf");
}

/** 원본을 A4 비율 캔버스 가운데에 담는다(넘치지 않게 축소 · 남는 자리는 흰색). 늘리지 않으므로 글씨가 눌리지 않고,
 *  칸 위치(answerCellBox)가 A4 기준이라 확대 보기도 맞는다. 사진에 여백이 많으면 여전히 어긋나므로 종이만 꽉 채워 찍는다. */
function drawOnA4(source, width, height) {
  const canvas = document.createElement("canvas");
  canvas.height = DISPLAY_LONG_EDGE;
  canvas.width = Math.round(DISPLAY_LONG_EDGE / A4_RATIO);
  const c = canvas.getContext("2d");
  c.fillStyle = "white"; c.fillRect(0, 0, canvas.width, canvas.height);
  const scale = Math.min(canvas.width / width, canvas.height / height);
  const drawWidth = width * scale, drawHeight = height * scale;
  c.drawImage(source, (canvas.width - drawWidth) / 2, (canvas.height - drawHeight) / 2, drawWidth, drawHeight);
  return canvas.toDataURL("image/jpeg", 0.92);
}

export async function loadPilotPages(file) {
  if (file.size > 15 * 1024 * 1024) throw new Error("파일은 15MB 이하로 올려 주세요.");
  if (file.type === "application/pdf" || /\.pdf$/i.test(file.name)) {
    const pdfjs = await import("pdfjs-dist");
    const worker = await import("pdfjs-dist/build/pdf.worker.min.mjs?url");
    pdfjs.GlobalWorkerOptions.workerSrc = worker.default;
    const pdf = await pdfjs.getDocument({ data: new Uint8Array(await file.arrayBuffer()) }).promise;
    try {
      if (pdf.numPages > 10) throw new Error("실험에서는 PDF 한 파일당 최대 10쪽까지 올려 주세요.");
      const pages = [];
      for (let index = 1; index <= pdf.numPages; index++) {
        const page = await pdf.getPage(index);
        const initial = page.getViewport({ scale: 1 });
        const viewport = page.getViewport({ scale: DISPLAY_LONG_EDGE / Math.max(initial.width, initial.height) });
        const canvas = document.createElement("canvas");
        canvas.width = viewport.width; canvas.height = viewport.height;
        await page.render({ canvasContext: canvas.getContext("2d"), viewport }).promise;
        pages.push({
          name: `${file.name} · ${index}쪽`,
          image: drawOnA4(canvas, canvas.width, canvas.height),
          // 판독은 원본에서 이 쪽을 그대로 떼어 쓴다. File 은 참조라 들고 있어도 메모리를 복사하지 않는다.
          source: { kind: "pdf", file, pageIndex: index - 1 }
        });
      }
      return pages;
    } finally { await pdf.destroy(); }
  }
  if (!["image/jpeg", "image/png"].includes(file.type)) throw new Error("PDF, JPG, PNG 파일을 올려 주세요.");
  const bitmap = await createImageBitmap(file, { imageOrientation: "from-image" });
  try {
    return [{ name: file.name, image: drawOnA4(bitmap, bitmap.width, bitmap.height), source: { kind: "image", file } }];
  } finally { bitmap.close(); }
}
