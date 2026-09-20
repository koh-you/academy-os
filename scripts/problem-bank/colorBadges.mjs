// 윤곽선 PDF(글자 레이어 없음)에서 색 글자 배지(문항 번호 · 예제 번호 · 빠른 정답 번호)를 찾는다.
// 전체 쪽 OCR 은 배지 그림과 붙거나(「$02」「O11」) 작은 색 숫자를 빠뜨리는 일이 잦아, 색 픽셀 덩어리를 먼저 잡고 덩어리만 크게 키워
// tesseract(psm 7 · 숫자만)로 읽는다. 개념원리 고등 22개정: 통번호 파랑 (43,110,171) · 연습문제 통번호 자주 (149,104,158) ·
// 예제 필수 청록 (42,130,152) · 발전 자주빨강 (136,64,91) · 특강 초록 (90,120,93).
import { writeFile } from "node:fs/promises";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { createCanvas } from "@napi-rs/canvas";
import { parseTesseractTsv } from "../../src/domains/problems/scanPdfSegmenter.js";

const execFileAsync = promisify(execFile);

export const BADGE_COLORS = {
  blue: { kind: "", test: (r, g, b) => b - r >= 70 && b - g >= 35 && r < 120 },
  purple: { kind: "", test: (r, g, b) => r >= 115 && b >= 125 && g <= 125 && r - g >= 25 && b - g >= 30 },
  teal: { kind: "e", exKind: "필수", test: (r, g, b) => g - r >= 55 && b - r >= 65 && b - g < 40 && r < 100 },
  red: { kind: "e", exKind: "발전", test: (r, g, b) => r - g >= 50 && r - b >= 25 && r >= 110 && g < 110 },
  green: { kind: "e", exKind: "특강", test: (r, g, b) => g - r >= 18 && g - b >= 15 && g >= 95 && r < 125 && b < 125 }
};

/**
 * @param canvas 렌더 캔버스(@napi-rs/canvas) · imageData 그 픽셀 · scale 렌더 배율(px/pt)
 * @param region 쪽 pt 좌표 { x0, x1, y0, y1 } 검색 범위
 * @param classes BADGE_COLORS 의 부분집합 { name: { kind, exKind?, test, h: [min,max] pt, w: [min,max] pt } }
 * @returns [{ kind, exKind, color, n, conf, raw, x, y(아래), h, w }] — y 위로 정렬. 같은 자리 겹침은 하나만.
 */
export async function detectColorBadges(canvas, imageData, scale, region, classes, { tesseract, tmpPath, debug = false } = {}) {
  const width = canvas.width;
  const x0 = Math.max(0, Math.round(region.x0 * scale)), x1 = Math.min(width, Math.round(region.x1 * scale));
  const y0 = Math.max(0, Math.round(region.y0 * scale)), y1 = Math.min(canvas.height, Math.round(region.y1 * scale));
  const badges = [];
  for (const [name, cls] of Object.entries(classes)) {
    const [hMin, hMax] = cls.h, [wMin, wMax] = cls.w ?? [3.5, 34];
    const rows = new Int32Array(y1 - y0);
    for (let y = y0; y < y1; y += 1) {
      let count = 0;
      for (let x = x0; x < x1; x += 1) { const o = (y * width + x) * 4; if (cls.test(imageData[o], imageData[o + 1], imageData[o + 2])) count += 1; }
      rows[y - y0] = count;
    }
    // 연속 행 구간(빈 행 2px 까지 허용). 같은 줄의 라벨 상자가 함께 들어오므로 높이는 x 덩어리별로 다시 잰다.
    let start = -1, gap = 0;
    const runs = [];
    for (let i = 0; i <= rows.length; i += 1) {
      const on = i < rows.length && rows[i] >= 2;
      if (on) { if (start < 0) start = i; gap = 0; }
      else if (start >= 0) { gap += 1; if (gap > 2 || i === rows.length) { runs.push([start, i - gap]); start = -1; gap = 0; } }
    }
    for (const [ra, rb] of runs) {
      const hPt = (rb - ra) / scale;
      if (hPt < hMin * 0.9 || hPt > 40) continue;
      const cols = new Int32Array(x1 - x0);
      for (let y = y0 + ra; y < y0 + rb; y += 1) for (let x = x0; x < x1; x += 1) { const o = (y * width + x) * 4; if (cls.test(imageData[o], imageData[o + 1], imageData[o + 2])) cols[x - x0] += 1; }
      // x 덩어리(3.5pt 이상 빈 열이면 나눔) → 「11」처럼 갈라진 좁은 글자는 다시 붙임(둘 다 9pt 이하 · 간격 6pt 이하)
      const clusters = [];
      let cs = -1, cgap = 0;
      const gapLimit = Math.round(3.5 * scale);
      for (let i = 0; i <= cols.length; i += 1) {
        const on = i < cols.length && cols[i] > 0;
        if (on) { if (cs < 0) cs = i; cgap = 0; }
        else if (cs >= 0) { cgap += 1; if (cgap > gapLimit || i === cols.length) { clusters.push([cs, i - cgap]); cs = -1; cgap = 0; } }
      }
      for (let i = clusters.length - 2; i >= 0; i -= 1) {
        const [a0, a1] = clusters[i], [b0, b1] = clusters[i + 1];
        if ((b0 - a1) / scale <= 6 && (a1 - a0) / scale <= 9 && (b1 - b0) / scale <= 9) clusters.splice(i, 2, [a0, b1]);
      }
      if (debug) console.log(`    [${name}] run y ${((y0 + ra) / scale).toFixed(1)}~${((y0 + rb) / scale).toFixed(1)} clusters ${clusters.map(([a, b]) => `${((x0 + a) / scale).toFixed(0)}-${((x0 + b) / scale).toFixed(0)}`).join(" ")}`);
      for (const [ca, cb] of clusters) {
        const wPt = (cb - ca) / scale;
        if (wPt < wMin || wPt > wMax) continue;
        let top = rb, bottom = ra, ink = 0, fullRows = 0;
        for (let y = ra; y < rb; y += 1) {
          let c = 0;
          for (let x = ca; x < cb; x += 1) { const o = ((y0 + y) * width + (x0 + x)) * 4; if (cls.test(imageData[o], imageData[o + 1], imageData[o + 2])) { c += 1; if (y < top) top = y; if (y + 1 > bottom) bottom = y + 1; } }
          ink += c;
          if (c >= (cb - ca) * 0.85) fullRows += 1;
        }
        const bh = (bottom - top) / scale;
        if (bh < hMin || bh > hMax) continue;
        const fill = ink / Math.max(1, (cb - ca) * (bottom - top));
        // 색 채움 상자(확인체크·필수·STEP 라벨 · 개념 머리띠 숫자 상자)는 잉크 비율이 높거나 꽉 찬 행이 많다. 숫자 글자는 획이 가늘다.
        const boxLike = fill > 0.7 || (wPt >= 10 && fullRows / Math.max(1, bottom - top) >= 0.4);
        if (debug) console.log(`      [${name}] x ${((x0 + ca) / scale).toFixed(1)} w${wPt.toFixed(1)} bh${bh.toFixed(1)} fill${fill.toFixed(2)} full${(fullRows / Math.max(1, bottom - top)).toFixed(2)}${boxLike ? " box" : ""}`);
        if (fill < 0.12 || boxLike) continue;
        const box = { x0: (x0 + ca) / scale, x1: (x0 + cb) / scale, y0: (y0 + top) / scale, y1: (y0 + bottom) / scale };
        const read = tesseract ? await ocrDigits(canvas, scale, box, tesseract, tmpPath) : { n: null, conf: 0, raw: "" };
        if (debug) console.log(`      → OCR 「${read.raw}」 conf ${Math.round(read.conf)}`);
        if (read.n == null && cls.kind === "e") continue;
        badges.push({ kind: cls.kind, exKind: cls.exKind, color: name, n: read.n, conf: read.conf, raw: read.raw, x: box.x0, y: box.y1, h: box.y1 - box.y0, w: box.x1 - box.x0 });
      }
    }
  }
  badges.sort((a, b) => a.y - b.y || a.x - b.x);
  for (let i = badges.length - 1; i > 0; i -= 1) {
    const a = badges[i], b = badges[i - 1];
    if (Math.abs(a.y - b.y) < 6 && Math.abs(a.x - b.x) < 12) badges.splice(i, 1);
  }
  return badges;
}

/** 캔버스의 상자를 3배로 키워 tesseract 로 숫자만 읽는다. */
export async function ocrDigits(canvas, scale, box, tesseract, tmpPath) {
  const pad = 3;
  const sx = Math.max(0, Math.round((box.x0 - pad) * scale)), sy = Math.max(0, Math.round((box.y0 - pad) * scale));
  const sw = Math.min(canvas.width - sx, Math.round((box.x1 - box.x0 + pad * 2) * scale)), sh = Math.min(canvas.height - sy, Math.round((box.y1 - box.y0 + pad * 2) * scale));
  const zoom = 3;
  const crop = createCanvas(sw * zoom, sh * zoom);
  const context = crop.getContext("2d");
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, crop.width, crop.height);
  context.drawImage(canvas, sx, sy, sw, sh, 0, 0, sw * zoom, sh * zoom);
  await writeFile(tmpPath, await crop.encode("png"));
  try {
    const { stdout } = await execFileAsync(tesseract, [tmpPath, "-", "-l", "eng", "--psm", "7", "-c", "tessedit_char_whitelist=0123456789", "-c", "tessedit_create_tsv=1", "-c", "tessedit_create_txt=0"], { maxBuffer: 8 * 1024 * 1024, windowsHide: true });
    const tokens = parseTesseractTsv(stdout, 1).filter((t) => /^\d+$/.test(t.text));
    const raw = tokens.map((t) => t.text).join("");
    const conf = tokens.length ? Math.min(...tokens.map((t) => t.conf)) : 0;
    return { n: raw ? Number(raw) : null, conf, raw };
  } catch {
    return { n: null, conf: 0, raw: "" };
  }
}
