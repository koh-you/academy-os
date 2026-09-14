// 스캔 PDF(글자 레이어 없음)의 문항 경계를 OCR 토큰과 잉크 통계로 정한다. 비전 AI 를 부르지 않는다.
//
// EBS 올림포스처럼 문항마다 「▶ 25445-0017」 식 문항 코드가 오른쪽 위에 찍힌 교재가 대상이다.
// 코드는 책 전체에서 연속·유일하므로 번호 배지 역할을 한다(예제·예시처럼 풀이가 붙은 것은 코드가 없어
// 자동으로 빠진다). 코드의 오른쪽 끝 = 문항 오른쪽, 같은 줄의 색 배지(01·유제 3) 왼쪽 = 문항 왼쪽이라
// 2단·전폭이 섞인 쪽도 쪽 단위 규칙 없이 문항마다 폭이 정해진다.
//
// 순수 함수만 둔다. tesseract·pdf.js·캔버스는 CLI 가 부르고 여기에는 좌표와 콜백만 넘긴다.

/**
 * @typedef {Object} OcrToken
 * @property {string} text
 * @property {number} x  pt (좌상단 원점)
 * @property {number} y  pt
 * @property {number} w  pt
 * @property {number} h  pt
 * @property {number} conf 0~100
 */

export const ITEM_CODE_PATTERN = /^(\d{5})-(\d{4})$/;

/**
 * tesseract `tsv` 출력을 pt 단위 토큰으로 바꾼다.
 * @param {string} tsv
 * @param {number} scale px/pt
 * @returns {OcrToken[]}
 */
export function parseTesseractTsv(tsv, scale) {
  const lines = String(tsv).split(/\r?\n/);
  const tokens = [];
  for (const line of lines.slice(1)) {
    const cells = line.split("\t");
    if (cells.length < 12) continue;
    const text = cells[11].trim();
    if (!text) continue;
    tokens.push({
      text,
      x: Number(cells[6]) / scale,
      y: Number(cells[7]) / scale,
      w: Number(cells[8]) / scale,
      h: Number(cells[9]) / scale,
      conf: Number(cells[10])
    });
  }
  return tokens;
}

/**
 * 문항 코드 토큰만 고른다. 접두(25445)는 책마다 하나이므로 가장 흔한 접두만 남기고, 같은 코드가 두 번
 * 읽히면(OCR 이 줄을 둘로 쪼갠 경우) 신뢰도 높은 쪽만 둔다.
 * @param {OcrToken[]} tokens
 * @param {{ prefix?: string, minConf?: number }} [options]
 */
export function findItemCodes(tokens, { prefix = "", minConf = 60 } = {}) {
  const candidates = tokens
    .map((token) => ({ token, match: token.text.match(ITEM_CODE_PATTERN) }))
    .filter(({ token, match }) => match && token.conf >= minConf);
  const prefixCounts = new Map();
  for (const { match } of candidates) prefixCounts.set(match[1], (prefixCounts.get(match[1]) || 0) + 1);
  const bookPrefix = prefix || [...prefixCounts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] || "";
  // 접두 한 자리가 잘못 읽힌 것(26445)은 같은 책 코드로 본다 — 4자리 번호 쪽은 그대로 믿고 신뢰도만 낮춘다.
  const prefixDistance = (value) => [...value].reduce((count, char, index) => count + (char === bookPrefix[index] ? 0 : 1), 0);
  const codes = [];
  for (const { token, match } of candidates) {
    const distance = prefixDistance(match[1]);
    if (distance > 1) continue;
    const code = { prefix: bookPrefix, number: match[2], x: token.x, y: token.y, w: token.w, h: token.h, conf: distance ? Math.min(token.conf, 79) : token.conf };
    // 같은 자리를 두 OCR 모드가 다르게 읽으면(0198 ↔ 0108) 한 코드다 — 신뢰도 높은 쪽을 둔다.
    const samePlace = codes.find((existing) => Math.abs(existing.y - code.y) < 6 && Math.abs(existing.x - code.x) < 20);
    if (samePlace) {
      if (code.conf > samePlace.conf) Object.assign(samePlace, code);
      continue;
    }
    codes.push(code);
  }
  codes.sort((a, b) => a.y - b.y || a.x - b.x);
  return { prefix: bookPrefix, codes };
}

/**
 * 책 순서에 맞지 않는 코드(다른 자리 숫자를 잘못 읽은 0805 같은 것)를 걸러 낸다.
 * 코드는 책 앞에서 뒤로 커지므로 지금까지의 최대 번호에서 뒤로 3, 앞으로 window 안이어야 한다.
 * @returns {{ kept: any[], dropped: any[] }}
 */
export function filterPlausibleCodes(codes, lastNumber, { window = 40 } = {}) {
  if (lastNumber === null || lastNumber === undefined) return { kept: codes, dropped: [] };
  const kept = [];
  const dropped = [];
  for (const code of codes) {
    const value = Number.parseInt(code.number, 10);
    (value >= lastNumber - 3 && value <= lastNumber + window ? kept : dropped).push(code);
  }
  return { kept, dropped };
}

/**
 * 코드를 컬럼별로 묶는다 — 오른쪽 끝 x 가 columnGap 안이면 같은 컬럼. 같은 컬럼 안에서는 y 순.
 */
export function groupCodesByColumn(codes, { columnGap = 40 } = {}) {
  const columns = [];
  for (const code of [...codes].sort((a, b) => a.x + a.w - (b.x + b.w))) {
    const right = code.x + code.w;
    const column = columns.find((entry) => Math.abs(entry.right - right) <= columnGap);
    if (column) {
      column.codes.push(code);
      column.right = (column.right * (column.codes.length - 1) + right) / column.codes.length;
    } else {
      columns.push({ right, codes: [code] });
    }
  }
  columns.sort((a, b) => a.right - b.right);
  columns.forEach((column, index) => {
    column.index = index;
    column.codes.sort((a, b) => a.y - b.y);
  });
  return columns;
}

/**
 * 문항 상자를 정한다.
 *
 * - 오른쪽: 코드 오른쪽 끝 + rightPad
 * - 왼쪽: 코드 줄 띠 안에서 가장 왼쪽 색 배지(findBadgeLeft) − leftPad. 배지를 못 찾으면 같은 컬럼의
 *   다른 문항에서 찾은 왼쪽을 쓰고, 그것도 없으면 fallbackLeft(쪽 본문 왼쪽 여백).
 * - 위: 코드 위 − topPad (배지가 코드보다 크다)
 * - 아래: 같은 컬럼 다음 코드 위 − 4 를 상한으로, findContentBottom 이 준 잉크 하단.
 *
 * @param {ReturnType<typeof groupCodesByColumn>} columns
 * @param {{
 *   pageWidth: number, pageHeight: number, bodyBottom?: number,
 *   findBadgeLeft: (band: {x0:number,x1:number,y0:number,y1:number}) => number|null,
 *   findContentBottom: (box: {x0:number,x1:number,y0:number,y1:number}) => number|null,
 *   fallbackLeft: (column: {index:number,right:number}) => number,
 *   gutterX?: number, 컬럼 사이 점선 x (없으면 -1)
 *   topPad?: number, rightPad?: number, leftPad?: number, bandAbove?: number, bandBelow?: number
 * }} options
 */
export function buildItemBoxes(columns, options) {
  const {
    pageWidth,
    pageHeight,
    bodyBottom = pageHeight * 0.93,
    findBadgeLeft,
    findContentBottom,
    fallbackLeft,
    gutterX = -1,
    topPad = 8,
    rightPad = 3,
    leftPad = 4,
    bandAbove = 6,
    bandBelow = 12
  } = options;
  const boxes = [];
  for (const column of columns) {
    const lefts = [];
    // 배지를 찾는 띠의 왼쪽 한계 — 앞 컬럼의 코드 오른쪽, 또는 코드가 점선 오른쪽에 있으면 점선.
    const previous = columns[column.index - 1];
    let bandLeft = previous ? previous.right + 4 : 0;
    if (gutterX > 0 && column.right > gutterX + 20) bandLeft = Math.max(bandLeft, gutterX + 2);
    const entries = column.codes.map((code, index) => {
      const next = column.codes[index + 1];
      const right = Math.min(pageWidth, code.x + code.w + rightPad);
      const band = { x0: bandLeft, x1: code.x - 2, y0: code.y - bandAbove, y1: code.y + code.h + bandBelow };
      const badgeLeft = findBadgeLeft(band);
      if (badgeLeft !== null && badgeLeft !== undefined) lefts.push(badgeLeft);
      return { code, next, right, badgeLeft };
    });
    const columnLeft = lefts.length ? Math.min(...lefts) : null;
    for (const { code, next, right, badgeLeft } of entries) {
      const flags = [];
      let left = badgeLeft ?? columnLeft;
      if (left === null || left === undefined) {
        left = fallbackLeft(column);
        flags.push("left_fallback");
      }
      left = Math.max(0, left - leftPad);
      const top = Math.max(0, code.y - topPad);
      const limit = next ? next.y - bandAbove - 2 : bodyBottom;
      const bottom = findContentBottom({ x0: left, x1: right, y0: top, y1: limit });
      if (bottom === null || bottom === undefined) flags.push("no_ink");
      const y1 = bottom ?? limit;
      if (y1 - top < 12) flags.push("too_short");
      if (y1 - top > pageHeight * 0.8) flags.push("too_tall");
      const wide = right - left > pageWidth * 0.62;
      boxes.push({
        number: code.number,
        prefix: code.prefix,
        column: column.index,
        layout: wide ? "wide" : "column",
        x0: left,
        y0: top,
        x1: right,
        y1,
        conf: code.conf,
        flags
      });
    }
  }
  boxes.sort((a, b) => a.y0 - b.y0 || a.x0 - b.x0);
  return boxes;
}

/**
 * 헤더 OCR 텍스트에서 구역 이름을 읽는다. 없으면 빈 문자열.
 */
export function readSectionLabel(text) {
  const flat = String(text ?? "").replace(/\s+/g, "");
  if (/종합문제/.test(flat)) return "대단원 종합문제";
  if (/수행평가|행평가/.test(flat)) return "수행평가";
  if (/서술형/.test(flat)) return "서술형 연습장";
  if (/고난도/.test(flat)) return "내신·수능 고난도";
  if (/유형확인/.test(flat)) return "유형 확인";
  if (/기본유형|유형익히기/.test(flat)) return "기본 유형 익히기";
  return "";
}

const SECTION_WORDS = /종합문제|수행평가|행평가|서술형|고난도|유형확인|익히기|정답|풀이|올림포스|공통수학/;

/** 머리글 OCR 이 실패한 쪽은 첫 문항 배지 색으로 구역을 고른다 — 빨강 고난도 · 파랑 서술형 · 초록 유형(유제). */
export function sectionFromBadgeColor(color, { allWide = false, previous = "" } = {}) {
  if (!color) return "";
  const [r, g, b] = color;
  if (r > g + 40 && r > b + 40) return "내신·수능 고난도";
  if (g > r + 15 && g >= b) return allWide ? "기본 유형 익히기" : "유형 확인";
  // 파랑은 유형 확인·서술형·종합문제가 같이 쓴다. 기본 유형 다음에 오는 파랑 2단 쪽은 유형 확인이고, 나머지는 앞 쪽을 잇는다.
  if (b > r + 40 && b > g + 10 && !allWide && previous === "기본 유형 익히기") return "유형 확인";
  return "";
}

/** 단원 시작 쪽의 큰 제목(「02 나머지정리」) — 한 줄에 두 자리 번호와 한글 이름만 있는 줄. */
export function readOpenerUnit(text) {
  for (const line of String(text ?? "").split(/\r?\n/)) {
    const match = line.trim().match(/^(\d{2})\s+([가-힣][가-힣\s·]{1,24})$/);
    if (match && !SECTION_WORDS.test(match[2].replace(/\s+/g, ""))) return { code: match[1], title: match[2].trim() };
  }
  return null;
}

/**
 * 바닥글에서 소단원(「01 다항식의 연산 13」)을 읽는다. 짝수 쪽 바닥글(「10 올림포스 · 공통수학1」)은 무시한다.
 * 스캔 OCR 은 「01」을 「이」로 읽기도 하므로 앞의 한 토큰은 숫자든 한 글자든 코드 자리로 본다.
 */
export function readFooterUnit(text) {
  const flat = String(text ?? "").replace(/\s+/g, " ").trim();
  if (!flat || SECTION_WORDS.test(flat.replace(/\s+/g, ""))) return null;
  // 앞에 잡음(「나 0 2 6 2 세 22 조에 04 복소수와 …」)이 붙어도 두 자리 코드 + 한글 이름 + 쪽 번호 꼴을 찾는다.
  const match = flat.match(/^(?:(\d{2})|[가-힣])\s*([가-힣][가-힣\s·,]{1,30}?)\s*(\d{1,3})?$/)
    || flat.match(/(?:^|\s)(\d{2})\s*([가-힣]{2}[가-힣\s·,]{0,29}?)\s*(\d{1,3})?$/);
  if (!match) return null;
  const title = match[2].replace(/\s+/g, " ").trim();
  return title ? { code: match[1] || "", title } : null;
}

/** 「유형 확인」 머리글의 「01 다항식의 연산」. */
export function readHeaderUnit(text) {
  const flat = String(text ?? "").replace(/\s+/g, " ");
  const match = flat.match(/(\d{2})\s*([가-힣][가-힣\s·,]{1,30}?)\s*유형\s*확인/);
  return match ? { code: match[1], title: match[2].trim() } : null;
}

/**
 * 두 소단원 이름이 같은 것인지 — 띄어쓰기를 빼고 편집 거리 2 이하(「이치방정식」↔「이차방정식」 같은 OCR 오차).
 */
export function isSameUnitTitle(a, b) {
  const left = String(a ?? "").replace(/\s+/g, "");
  const right = String(b ?? "").replace(/\s+/g, "");
  if (left === right) return true;
  if (Math.abs(left.length - right.length) > 2 || Math.min(left.length, right.length) < 3) return false;
  const rows = Array.from({ length: left.length + 1 }, (_, i) => [i, ...new Array(right.length).fill(0)]);
  for (let j = 1; j <= right.length; j += 1) rows[0][j] = j;
  for (let i = 1; i <= left.length; i += 1) {
    for (let j = 1; j <= right.length; j += 1) {
      rows[i][j] = Math.min(rows[i - 1][j] + 1, rows[i][j - 1] + 1, rows[i - 1][j - 1] + (left[i - 1] === right[j - 1] ? 0 : 1));
    }
  }
  return rows[left.length][right.length] <= 2;
}

/** 바닥글 작은 글자에서 늘 같은 꼴로 잘못 읽히는 낱말만 고친다(「이치방정식」→「이차방정식」). */
export function normalizeUnitTitle(title) {
  return String(title ?? "").replace(/이치(방정식|함수|부등식)/g, "이차$1");
}

/** 기울기 보정으로 캔버스를 돌렸을 때 원본 좌표의 점이 가는 자리. rotateCanvas 와 같은 방향. */
export function rotatePoint(x, y, degrees, cx, cy) {
  const rad = (-degrees * Math.PI) / 180;
  const dx = x - cx;
  const dy = y - cy;
  return { x: cx + dx * Math.cos(rad) - dy * Math.sin(rad), y: cy + dx * Math.sin(rad) + dy * Math.cos(rad) };
}

/** 바닥글의 쪽 번호 — 짝수 쪽은 맨 앞, 홀수 쪽은 맨 뒤. */
export function readFooterPage(text) {
  const flat = String(text ?? "").replace(/\s+/g, " ").trim();
  const match = flat.match(/^(\d{1,3})\s+[가-힣]/) || flat.match(/[가-힣]\s+(\d{1,3})$/);
  return match ? Number(match[1]) : null;
}

/**
 * 점 목록으로 기울기(도)를 잰다 — 각도 후보마다 회전한 y 히스토그램의 분산이 가장 큰 각.
 * @param {Array<[number, number]>} points 어두운 픽셀 표본
 * @param {number} height
 * @param {{ maxDeg?: number, stepDeg?: number }} [options]
 */
export function estimateSkewDegrees(points, height, { maxDeg = 1.5, stepDeg = 0.1 } = {}) {
  if (points.length < 200) return 0;
  let bestDeg = 0;
  let bestScore = -1;
  for (let deg = -maxDeg; deg <= maxDeg + 1e-9; deg += stepDeg) {
    const rad = (deg * Math.PI) / 180;
    const sin = Math.sin(rad);
    const cos = Math.cos(rad);
    const bins = new Float64Array(height + 2);
    for (const [x, y] of points) {
      const row = Math.round(y * cos - x * sin);
      if (row >= 0 && row < bins.length) bins[row] += 1;
    }
    let sum = 0;
    let sumSq = 0;
    for (const value of bins) {
      sum += value;
      sumSq += value * value;
    }
    const mean = sum / bins.length;
    const variance = sumSq / bins.length - mean * mean;
    if (variance > bestScore) {
      bestScore = variance;
      bestDeg = deg;
    }
  }
  return Math.abs(bestDeg) < stepDeg / 2 ? 0 : Number(bestDeg.toFixed(2));
}

/** 번호(4자리) 연속성 — 빈 번호와 중복을 돌려준다. */
export function checkCodeContinuity(numbers) {
  const sorted = numbers.map((value) => Number.parseInt(value, 10)).filter(Number.isFinite).sort((a, b) => a - b);
  const gaps = [];
  const duplicates = [];
  for (let index = 1; index < sorted.length; index += 1) {
    const previous = sorted[index - 1];
    const current = sorted[index];
    if (current === previous) duplicates.push(String(current).padStart(4, "0"));
    else if (current - previous > 1) gaps.push([String(previous + 1).padStart(4, "0"), String(current - 1).padStart(4, "0")]);
  }
  return { gaps, duplicates, first: sorted[0] ?? null, last: sorted[sorted.length - 1] ?? null };
}

/**
 * 풀이 조각(읽은 번호 목록) ↔ 문항(순번 목록) 편집 거리 정렬.
 * @returns {{ cost: number, pairs: Array<[number, number|null]> }} 조각 index → 문항 index(건너뛴 조각은 null)
 */
export function alignSegmentsToItems(readNumbers, localNumbers, { unreadCost = 0.3, mismatchCost = 1, skipCost = 1.5 } = {}) {
  const n = readNumbers.length;
  const m = localNumbers.length;
  const cost = Array.from({ length: n + 1 }, () => new Float64Array(m + 1));
  const move = Array.from({ length: n + 1 }, () => new Uint8Array(m + 1));
  for (let i = 1; i <= n; i += 1) {
    cost[i][0] = i * skipCost;
    move[i][0] = 1;
  }
  for (let j = 1; j <= m; j += 1) {
    cost[0][j] = j * skipCost;
    move[0][j] = 2;
  }
  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= m; j += 1) {
      const read = readNumbers[i - 1];
      const matchCost = read === null ? unreadCost : read === localNumbers[j - 1] ? 0 : mismatchCost;
      const options = [cost[i - 1][j - 1] + matchCost, cost[i - 1][j] + skipCost, cost[i][j - 1] + skipCost];
      let best = 0;
      if (options[1] < options[best]) best = 1;
      if (options[2] < options[best]) best = 2;
      cost[i][j] = options[best];
      move[i][j] = best;
    }
  }
  // 뒤쪽 문항이 남는 것(해설 쪽 일부만 돌렸을 때)은 비용 없이 둔다 — 마지막 조각까지의 최소 비용 열에서 되짚는다.
  let endJ = m;
  for (let j = 0; j <= m; j += 1) if (cost[n][j] < cost[n][endJ]) endJ = j;
  const pairs = [];
  let i = n;
  let j = endJ;
  while (i > 0 || j > 0) {
    const step = move[i][j];
    if (i > 0 && j > 0 && step === 0) {
      pairs.push([i - 1, j - 1]);
      i -= 1;
      j -= 1;
    } else if (i > 0 && (j === 0 || step === 1)) {
      pairs.push([i - 1, null]);
      i -= 1;
    } else {
      j -= 1;
    }
  }
  pairs.reverse();
  return { cost: Number(cost[n][endJ].toFixed(2)), pairs };
}

