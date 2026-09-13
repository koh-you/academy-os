// 오답지 PPT 내보내기. pptxgenjs 는 무거워서(약 2.5MB) 버튼을 눌렀을 때만 동적으로 불러온다.
//
// 슬라이드 구성 (16:9)
// - 문항마다 1장: 출처 줄(교재 · 단원 · 번호) + 큰 번호 + 문항 이미지(공통 지시문 문항은 지시문 블록과 강조 상자) + 워터마크
// - 「해설 포함」이면 그 뒤에 해설 슬라이드 1장(해설 이미지, 답 줄 이미지가 있으면 오른쪽 아래)
// 이미지는 서명 URL 을 받아 data URL 로 바꿔 넣는다(pptxgenjs 가 직접 받으면 CORS 에 걸릴 수 있다).

const SLIDE_W = 10;
const SLIDE_H = 5.625;
const MARGIN = 0.4;
const HEADER_H = 0.75;

async function toDataUrl(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`이미지를 받지 못했습니다 (${response.status})`);
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error ?? new Error("이미지를 읽지 못했습니다."));
    reader.readAsDataURL(blob);
  });
}

function imageSize(dataUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve({ width: image.naturalWidth, height: image.naturalHeight });
    image.onerror = () => reject(new Error("이미지 크기를 읽지 못했습니다."));
    image.src = dataUrl;
  });
}

/** 상자(inch) 안에 비율을 지키며 맞춘 위치·크기. 원본이 작으면 최대 scale 배까지만 키운다. */
function fitInBox(size, box, maxScale = 1.6) {
  const pxPerInch = 96;
  const naturalW = size.width / pxPerInch;
  const naturalH = size.height / pxPerInch;
  const scale = Math.min(box.w / naturalW, box.h / naturalH, maxScale);
  const w = naturalW * scale;
  const h = naturalH * scale;
  return { x: box.x + (box.w - w) / 2, y: box.y, w, h };
}

async function loadImage(url, cache) {
  if (!url) return null;
  if (cache.has(url)) return cache.get(url);
  const promise = toDataUrl(url).then(async (dataUrl) => ({ dataUrl, size: await imageSize(dataUrl) }));
  cache.set(url, promise);
  return promise;
}

/**
 * @param {Object} options
 * @param {string} options.title 파일·표지 제목
 * @param {string} options.subtitle
 * @param {Array} options.entries buildPrintEntries 결과
 * @param {boolean} options.includeSolutions 해설 슬라이드 포함
 * @param {string} options.watermarkUrl 학원 로고(번들 자산 URL)
 * @param {(done: number, total: number) => void} [options.onProgress]
 * @returns {Promise<{ fileName: string, slideCount: number }>}
 */
export async function exportWrongAnswerPptx({ title, subtitle, entries, includeSolutions, watermarkUrl, onProgress }) {
  const { default: PptxGenJS } = await import("pptxgenjs");
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_16x9";
  pptx.title = title;
  const cache = new Map();
  const watermark = watermarkUrl ? await loadImage(watermarkUrl, cache).catch(() => null) : null;
  const contentBox = { x: MARGIN, y: MARGIN + HEADER_H, w: SLIDE_W - MARGIN * 2, h: SLIDE_H - MARGIN * 2 - HEADER_H };

  function decorate(slide, sourceLine, number, typeLabel) {
    if (watermark) {
      const wm = fitInBox(watermark.size, { x: 2.5, y: 1.6, w: 5, h: 2.6 }, 10);
      slide.addImage({ data: watermark.dataUrl, ...wm, transparency: 88 });
    }
    slide.addText(sourceLine, { x: MARGIN, y: 0.2, w: 7, h: 0.35, fontSize: 11, color: "444444", fontFace: "Malgun Gothic" });
    if (typeLabel) slide.addText(typeLabel, { x: 6.2, y: 0.2, w: 3.4, h: 0.35, fontSize: 11, color: "444444", align: "right", fontFace: "Malgun Gothic" });
    slide.addText(number, { x: MARGIN, y: 0.55, w: 2, h: 0.5, fontSize: 24, bold: true, color: "111111", fontFace: "Malgun Gothic" });
  }

  const cover = pptx.addSlide();
  cover.addText(title, { x: 0.6, y: 1.8, w: 8.8, h: 1, fontSize: 32, bold: true, color: "111111", fontFace: "Malgun Gothic" });
  cover.addText(subtitle, { x: 0.6, y: 2.9, w: 8.8, h: 0.6, fontSize: 16, color: "444444", fontFace: "Malgun Gothic" });
  if (watermark) cover.addImage({ data: watermark.dataUrl, ...fitInBox(watermark.size, { x: 6.8, y: 4.2, w: 2.6, h: 1.1 }, 10), transparency: 30 });

  let slideCount = 1;
  const total = entries.length;
  for (const [index, entry] of entries.entries()) {
    const number = String(index + 1).padStart(2, "0");
    const slide = pptx.addSlide();
    decorate(slide, entry.sourceLine, number, entry.typeLabel);
    slideCount += 1;
    if (entry.kind === "group") {
      const passage = await loadImage(entry.passageUrl, cache);
      if (passage) {
        const box = fitInBox(passage.size, contentBox);
        slide.addImage({ data: passage.dataUrl, ...box });
        for (const member of entry.members) {
          if (!member.highlight) continue;
          slide.addShape(pptx.ShapeType.rect, {
            x: box.x + (member.highlight.left / 100) * box.w,
            y: box.y + (member.highlight.top / 100) * box.h,
            w: (member.highlight.width / 100) * box.w,
            h: (member.highlight.height / 100) * box.h,
            line: { color: "111111", width: 1.5 },
            fill: { type: "none" }
          });
        }
      }
    } else {
      const body = await loadImage(entry.bodyUrl, cache);
      if (body) slide.addImage({ data: body.dataUrl, ...fitInBox(body.size, contentBox) });
      else slide.addText(`${entry.item.numberLabel}번 이미지가 없습니다.`, { x: MARGIN, y: 2, w: 9, h: 0.5, fontSize: 14, fontFace: "Malgun Gothic" });
    }

    if (includeSolutions) {
      const rows = entry.kind === "group" ? entry.members : [entry];
      for (const row of rows) {
        if (!row.solutionUrl) continue;
        const solutionSlide = pptx.addSlide();
        decorate(solutionSlide, `${entry.sourceLine} · 해설`, `${number} 해설${entry.kind === "group" ? ` (${row.item.numberLabel}번)` : ""}`, "");
        slideCount += 1;
        const solution = await loadImage(row.solutionUrl, cache);
        if (solution) solutionSlide.addImage({ data: solution.dataUrl, ...fitInBox(solution.size, { ...contentBox, w: contentBox.w - 2.2 }, 1.3) });
        const answer = await loadImage(row.answerUrl, cache).catch(() => null);
        if (answer) solutionSlide.addImage({ data: answer.dataUrl, ...fitInBox(answer.size, { x: SLIDE_W - MARGIN - 2, y: SLIDE_H - MARGIN - 1.2, w: 2, h: 1.2 }, 1) });
      }
    }
    onProgress?.(index + 1, total);
  }

  const fileName = `${title.replace(/[\\/:*?"<>|]+/g, " ").trim()}.pptx`;
  await pptx.writeFile({ fileName });
  return { fileName, slideCount };
}
