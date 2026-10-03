import { answerCellBox, ANSWER_SHEET_SIZE } from "./answerSheetPilotModel.js";

export function downloadPilotBlob(blob, name) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url; link.download = name; link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export async function imageToPilotPdf(image) {
  const { PDFDocument } = await import("pdf-lib");
  const pdf = await PDFDocument.create();
  const embedded = image.startsWith("data:image/jpeg") ? await pdf.embedJpg(image) : await pdf.embedPng(image);
  const page = pdf.addPage([595.28, 841.89]);
  page.drawImage(embedded, { x: 0, y: 0, width: 595.28, height: 841.89 });
  return pdf.saveAsBase64();
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
        const viewport = page.getViewport({ scale: 1800 / Math.max(initial.width, initial.height) });
        const canvas = document.createElement("canvas");
        canvas.width = viewport.width; canvas.height = viewport.height;
        await page.render({ canvasContext: canvas.getContext("2d"), viewport }).promise;
        pages.push({ name: `${file.name} · ${index}쪽`, image: canvas.toDataURL("image/jpeg", 0.92) });
      }
      return pages;
    } finally { await pdf.destroy(); }
  }
  if (!["image/jpeg", "image/png"].includes(file.type)) throw new Error("PDF, JPG, PNG 파일을 올려 주세요.");
  const bitmap = await createImageBitmap(file, { imageOrientation: "from-image" });
  try {
    const scale = Math.min(1, 1800 / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement("canvas");
    canvas.width = bitmap.width * scale; canvas.height = bitmap.height * scale;
    const c = canvas.getContext("2d"); c.fillStyle = "white"; c.fillRect(0, 0, canvas.width, canvas.height);
    c.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    return [{ name: file.name, image: canvas.toDataURL("image/jpeg", 0.92) }];
  } finally { bitmap.close(); }
}
