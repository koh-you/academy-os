// 텍스트 PDF(벡터 교재)의 문항 경계를 글자 좌표만으로 정한다. 비전 AI 를 부르지 않는다.
//
// 입력은 pdf.js 의 텍스트 항목을 뷰포트 좌표(좌상단 원점, pt)로 바꾼 것이고, 출력은
// 페이지·컬럼별로 「번호 배지에서 다음 배지 직전까지」 세그먼트다. 실제 하단은 렌더 이미지의
// 잉크 투영으로 CLI 가 다시 조인다(그림이 마지막 글줄보다 아래로 내려오는 경우 대비).
//
// 순수 함수만 둔다. 노드 API·pdf.js 를 여기서 부르지 않아 단위 테스트가 픽스처로 돈다.

/**
 * @typedef {Object} TextToken
 * @property {string} str
 * @property {number} x   좌상단 원점 기준 왼쪽 (pt)
 * @property {number} y   좌상단 원점 기준 위 (pt) — 글줄의 baseline 근처
 * @property {number} w
 * @property {number} h
 * @property {string} [fontName]
 */

const NUMBER_RUN_PATTERN = /^\d{3,4}$/;
const TYPE_HEADER_WORD = "유형";
const KNOWN_TAGS = ["대표문제", "서술형", "중요", "빈출", "신유형", "고난도", "교과서", "기출"];

function roundTo(value, digits = 1) {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

/**
 * 같은 글줄에서 잘게 쪼개진 숫자 토큰("00" + "66")을 하나로 합친다.
 * 빈 토큰(w=0)과 공백 토큰은 버린다.
 * @param {TextToken[]} tokens
 * @returns {TextToken[]}
 */
export function mergeNumberRuns(tokens) {
  const digitTokens = tokens
    .filter((token) => /^\d+$/.test(token.str.trim()) && token.w > 0)
    .sort((a, b) => a.y - b.y || a.x - b.x);
  const runs = [];
  for (const token of digitTokens) {
    const last = runs[runs.length - 1];
    const sameLine = last && Math.abs(last.y - token.y) < 0.8 && Math.abs(last.h - token.h) < 0.8;
    const adjacent = sameLine && token.x - (last.x + last.w) < 2.5 && token.x >= last.x;
    if (adjacent) {
      last.str += token.str.trim();
      last.w = token.x + token.w - last.x;
      continue;
    }
    runs.push({ ...token, str: token.str.trim() });
  }
  return runs;
}

/**
 * 교재 전체에서 번호 배지의 글자 높이를 정한다 — 4자리 숫자 런 가운데 가장 흔한 높이.
 * @param {TextToken[][]} pagesTokens
 * @returns {number} 0 이면 못 찾은 것
 */
export function detectBadgeHeight(pagesTokens) {
  const counts = new Map();
  for (const tokens of pagesTokens) {
    for (const run of mergeNumberRuns(tokens)) {
      if (!/^\d{4}$/.test(run.str)) continue;
      const key = roundTo(run.h, 0);
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
  }
  let best = 0;
  let bestCount = 0;
  for (const [height, count] of counts) {
    // 본문 숫자(예: 2020) 도 4자리일 수 있다. 배지는 본문보다 크므로 동률이면 큰 쪽.
    if (count > bestCount || (count === bestCount && height > best)) {
      best = height;
      bestCount = count;
    }
  }
  return best;
}

/**
 * 한 페이지의 번호 배지를 찾는다.
 * @param {TextToken[]} tokens
 * @param {{ badgeHeight: number, pageWidth: number }} options
 */
export function findBadges(tokens, { badgeHeight, pageWidth, pageHeight = Infinity }) {
  if (!badgeHeight) return [];
  return mergeNumberRuns(tokens)
    .filter((run) => NUMBER_RUN_PATTERN.test(run.str) && Math.abs(run.h - badgeHeight) <= 1.0)
    // 페이지 좌우 가장자리(측면 탭)와 바닥글(쪽번호는 배지와 같은 크기다)은 배지가 아니다.
    .filter((run) => run.x > pageWidth * 0.05 && run.x < pageWidth * 0.9 && run.y < pageHeight * 0.93)
    .map((run) => ({ number: run.str, x: run.x, y: run.y, w: run.w, h: run.h }))
    .sort((a, b) => a.x - b.x || a.y - b.y);
}

/**
 * 배지 x 좌표를 두 묶음으로 나눠 컬럼을 정한다. 배지가 한 묶음뿐이면 단일 컬럼.
 * @param {{ x: number }[]} badges
 * @param {number} pageWidth
 * @returns {{ left: number, right: number }[]}  각 컬럼의 시작 x 와 끝 x
 */
export function inferColumns(badges, pageWidth) {
  if (badges.length === 0) return [];
  const xs = [...new Set(badges.map((badge) => roundTo(badge.x, 0)))].sort((a, b) => a - b);
  const gapIndex = xs.findIndex((x, index) => index > 0 && x - xs[index - 1] > pageWidth * 0.2);
  if (gapIndex === -1) {
    return [{ left: xs[0], right: pageWidth }];
  }
  const leftStart = xs[0];
  const rightStart = xs[gapIndex];
  return [
    { left: leftStart, right: rightStart },
    { left: rightStart, right: pageWidth }
  ];
}

function columnIndexOf(columns, x) {
  for (let index = columns.length - 1; index >= 0; index -= 1) {
    if (x >= columns[index].left - 4) return index;
  }
  return 0;
}

/**
 * 「유형 | 02 | 제목」 헤더를 찾는다. 배지보다 작은 글자의 "유형" 낱말이 컬럼 왼쪽에 있으면 헤더다.
 * @param {TextToken[]} tokens
 * @param {{ badgeHeight: number, columns: { left: number, right: number }[] }} options
 */
export function findTypeHeaders(tokens, { badgeHeight, columns }) {
  const headers = [];
  for (const token of tokens) {
    if (token.str.trim() !== TYPE_HEADER_WORD) continue;
    if (token.h >= badgeHeight) continue;
    const column = columnIndexOf(columns, token.x);
    const columnLeft = columns[column]?.left ?? 0;
    if (Math.abs(token.x - columnLeft) > 30) continue;
    const titleTokens = tokens
      .filter((candidate) =>
        candidate !== token
        && candidate.str.trim()
        && !/^\d{1,2}$/.test(candidate.str.trim())
        && candidate.x > token.x + 40
        && candidate.x < (columns[column]?.right ?? Infinity)
        && candidate.y >= token.y - 6
        && candidate.y <= token.y + 22)
      .sort((a, b) => a.y - b.y || a.x - b.x);
    headers.push({
      column,
      x: token.x,
      y: token.y,
      title: titleTokens.map((candidate) => candidate.str.trim()).join(" ").replace(/\s+/g, " ").trim()
    });
  }
  return headers.sort((a, b) => a.column - b.column || a.y - b.y);
}

/**
 * 배지 오른쪽 같은 글줄의 배지 라벨(대표문제·서술형 …)을 읽는다.
 */
export function readBadgeTags(tokens, badge) {
  const tags = new Set();
  for (const token of tokens) {
    const text = token.str.trim();
    if (!text) continue;
    if (Math.abs(token.y - badge.y) > 6) continue;
    if (token.x < badge.x + badge.w - 1 || token.x > badge.x + badge.w + 140) continue;
    for (const tag of KNOWN_TAGS) {
      if (text.includes(tag)) tags.add(tag);
    }
  }
  return [...tags];
}

/**
 * 페이지 바닥글에서 「01. 삼각비」(소단원) 또는 「I. 삼각비」(대단원) 라벨을 읽는다.
 * 쪽번호는 배지와 같은 큰 글자라 제외한다. 없으면 빈 문자열.
 * @param {TextToken[]} tokens
 * @param {number} pageHeight
 * @param {number} [badgeHeight]
 */
export function readFooterUnit(tokens, pageHeight, badgeHeight = Infinity) {
  const footer = tokens
    .filter((token) => token.y > pageHeight * 0.94 && token.str.trim() && token.h < badgeHeight - 1)
    .sort((a, b) => a.x - b.x);
  for (let index = 0; index < footer.length; index += 1) {
    const code = footer[index].str.trim().replace(/\.$/, "");
    const isUnit = /^\d{2}$/.test(code);
    const isChapter = /^[IVXⅠⅡⅢⅣⅤ]{1,4}$/.test(code);
    if (!isUnit && !isChapter) continue;
    const parts = [];
    let cursor = footer[index].x + footer[index].w;
    for (let next = index + 1; next < footer.length; next += 1) {
      const candidate = footer[next];
      const text = candidate.str.trim();
      if (candidate.x - cursor > 12) break;
      cursor = candidate.x + candidate.w;
      if (text === ".") continue;
      if (/^\d+$/.test(text)) break; // 쪽번호
      parts.push(text);
    }
    const title = parts.join(" ").replace(/\s+/g, " ").trim();
    if (title) return { code, title, level: isUnit ? "unit" : "chapter" };
  }
  return { code: "", title: "", level: "" };
}

const SUB_HEADER_PATTERN = /^\d{2}-\d{1,2}$/;
const RANGE_LABEL_PATTERN = /\[\s*(\d{4})\s*~\s*(\d{4})\s*\]/;

/**
 * 「05-1 대푯값」 같은 소단원 헤더(노란 상자). 작은 글자의 "NN-N" 이 컬럼 왼쪽에 있으면 헤더다.
 */
export function findSubHeaders(tokens, { badgeHeight, columns }) {
  const headers = [];
  const sorted = [...tokens].filter((token) => token.str.trim()).sort((a, b) => a.y - b.y || a.x - b.x);
  for (const token of sorted) {
    const text = token.str.trim();
    let code = "";
    let end = token.x + token.w;
    if (SUB_HEADER_PATTERN.test(text) && token.h < badgeHeight) {
      code = text;
    } else if (/^\d{2}$/.test(text)) {
      // 「01」(큰 글자) + 「-3」(작은 글자) 로 쪼개진 형태.
      const suffix = sorted.find((candidate) =>
        candidate !== token
        && /^-\d{1,2}$/.test(candidate.str.trim())
        && Math.abs(candidate.y - token.y) <= 4
        && candidate.x >= token.x + token.w - 2
        && candidate.x <= token.x + token.w + 8);
      if (!suffix) continue;
      code = `${text}${suffix.str.trim()}`;
      end = suffix.x + suffix.w;
    } else {
      continue;
    }
    const column = columnIndexOf(columns, token.x);
    const columnLeft = columns[column]?.left ?? 0;
    if (Math.abs(token.x - columnLeft) > 40) continue;
    const titleTokens = sorted
      .filter((candidate) =>
        candidate.x > end + 2
        && candidate.x < (columns[column]?.right ?? Infinity)
        && Math.abs(candidate.y - token.y) <= 4
        && !/^-?\d{1,2}$/.test(candidate.str.trim()))
      .sort((a, b) => a.x - b.x);
    headers.push({
      column,
      x: token.x,
      y: token.y,
      h: token.h,
      code,
      title: titleTokens.map((candidate) => candidate.str.trim()).join(" ").replace(/\s+/g, " ").trim()
    });
  }
  return headers.sort((a, b) => a.column - b.column || a.y - b.y);
}

/**
 * 「[0522~0524] 다음 자료의 평균을 구하시오.」 같은 공통 지시문 줄을 찾는다.
 * 같은 글줄의 토큰을 이어 붙여 대괄호 범위를 읽는다.
 */
export function findRangeLabels(tokens, { badgeHeight, columns }) {
  const lines = new Map();
  for (const token of tokens) {
    const text = token.str.trim();
    if (!text || token.h >= badgeHeight) continue;
    const column = columnIndexOf(columns, token.x);
    const key = `${column}:${Math.round(token.y)}`;
    if (!lines.has(key)) lines.set(key, { column, y: token.y, h: token.h, x: token.x, tokens: [] });
    const line = lines.get(key);
    line.tokens.push(token);
    line.x = Math.min(line.x, token.x);
    line.h = Math.max(line.h, token.h);
  }
  const labels = [];
  for (const line of lines.values()) {
    const text = line.tokens.sort((a, b) => a.x - b.x).map((token) => token.str.trim()).join("");
    const match = text.match(RANGE_LABEL_PATTERN);
    if (!match) continue;
    labels.push({ column: line.column, x: line.x, y: line.y, h: line.h, from: match[1], to: match[2] });
  }
  return labels.sort((a, b) => a.column - b.column || a.y - b.y);
}

/**
 * 한 페이지의 세그먼트(문항 후보)를 만든다.
 *
 * 하단은 같은 컬럼 안에서 「다음 배지」·「다음 유형 헤더」·「다음 소단원 헤더」·「다음 공통 지시문」·
 * 본문 하한 가운데 가장 위인 것이다. 실제 잉크 하단은 CLI 가 렌더 이미지로 다시 조인다.
 *
 * - 같은 글줄에 배지가 둘이면(0045 sin48° 0046 cos51°) 가로로 나눈다.
 * - 「[0025~0029] 지시문」이 있으면 지시문 줄부터 마지막 문항 끝까지를 group 으로 묶어
 *   그 범위의 문항마다 공통 지문(passage)으로 붙인다.
 *
 * @param {TextToken[]} tokens
 * @param {{ badgeHeight: number, pageWidth: number, pageHeight: number, bodyBottom?: number, topPad?: number }} options
 */
export function segmentPage(tokens, { badgeHeight, pageWidth, pageHeight, bodyBottom, topPad = 4 }) {
  const badges = findBadges(tokens, { badgeHeight, pageWidth, pageHeight });
  if (badges.length === 0) return { badges: [], columns: [], headers: [], groups: [], segments: [] };
  const columns = inferColumns(badges, pageWidth);
  const typeHeaders = findTypeHeaders(tokens, { badgeHeight, columns });
  const subHeaders = findSubHeaders(tokens, { badgeHeight, columns });
  const rangeLabels = findRangeLabels(tokens, { badgeHeight, columns });
  const bottomLimit = bodyBottom ?? pageHeight * 0.925; // 바닥글(쪽번호·단원명) 위

  const segments = [];
  const groups = [];
  columns.forEach((column, columnIndex) => {
    const columnBadges = badges
      .filter((badge) => columnIndexOf(columns, badge.x) === columnIndex)
      .sort((a, b) => a.y - b.y || a.x - b.x);
    // 자르는 자리: 헤더 상자 위 여백까지 포함해 넉넉히 위에서 자른다.
    const cuts = [
      ...typeHeaders.filter((header) => header.column === columnIndex).map((header) => ({ y: header.y - 24, kind: "type", title: header.title })),
      ...subHeaders.filter((header) => header.column === columnIndex).map((header) => ({ y: header.y - header.h - 8, kind: "sub", title: header.title, code: header.code })),
      ...rangeLabels.filter((label) => label.column === columnIndex).map((label) => ({ y: label.y - label.h - 3, kind: "range", from: label.from, to: label.to }))
    ].sort((a, b) => a.y - b.y);

    // 같은 글줄의 배지를 한 행으로 묶는다.
    const rows = [];
    for (const badge of columnBadges) {
      const row = rows[rows.length - 1];
      if (row && Math.abs(row.y - badge.y) < 2) {
        row.badges.push(badge);
      } else {
        rows.push({ y: badge.y, h: badge.h, badges: [badge] });
      }
    }

    const columnX0 = column.left - 6;
    const columnX1 = column.right - (columnIndex === columns.length - 1 ? 0 : 6);
    rows.forEach((row, rowIndex) => {
      const top = row.y - row.h - topPad;
      const nextRow = rows[rowIndex + 1];
      const nextCut = cuts.find((cut) => cut.y > row.y);
      const candidates = [bottomLimit];
      if (nextRow) candidates.push(nextRow.y - nextRow.h - topPad);
      if (nextCut) candidates.push(nextCut.y);
      const bottom = Math.min(...candidates);
      const ownType = [...typeHeaders].reverse().find((header) => header.column === columnIndex && header.y < row.y);
      const ownSub = [...subHeaders].reverse().find((header) => header.column === columnIndex && header.y < row.y);
      const typeTitle = ownType?.title || (ownSub ? `${ownSub.code} ${ownSub.title}`.trim() : "");
      const ownRange = [...rangeLabels].reverse().find((label) => label.column === columnIndex && label.y < row.y);
      row.badges.sort((a, b) => a.x - b.x).forEach((badge, badgeIndex) => {
        const nextBadge = row.badges[badgeIndex + 1];
        const inRange = ownRange
          && Number.parseInt(badge.number, 10) >= Number.parseInt(ownRange.from, 10)
          && Number.parseInt(badge.number, 10) <= Number.parseInt(ownRange.to, 10);
        segments.push({
          number: badge.number,
          column: columnIndex,
          x0: badgeIndex === 0 ? columnX0 : badge.x - 6,
          x1: nextBadge ? nextBadge.x - 6 : columnX1,
          y0: roundTo(Math.max(0, top)),
          y1: roundTo(bottom),
          badge,
          tags: readBadgeTags(tokens, badge),
          typeTitle,
          groupKey: inRange ? `${ownRange.from}-${ownRange.to}` : ""
        });
      });
    });

    // 공통 지시문 그룹: 지시문 줄 위부터, 범위 안 마지막 문항 행의 하단까지.
    for (const label of rangeLabels.filter((item) => item.column === columnIndex)) {
      const members = segments.filter((segment) => segment.column === columnIndex && segment.groupKey === `${label.from}-${label.to}`);
      if (members.length === 0) continue;
      groups.push({
        key: `${label.from}-${label.to}`,
        column: columnIndex,
        from: label.from,
        to: label.to,
        x0: columnX0,
        x1: columnX1,
        y0: roundTo(Math.max(0, label.y - label.h - 3)),
        y1: roundTo(Math.max(...members.map((segment) => segment.y1))),
        memberNumbers: members.map((segment) => segment.number)
      });
    }
  });
  return { badges, columns, headers: [...typeHeaders, ...subHeaders], groups, segments };
}

/**
 * 교재 전체 번호가 빠짐없이 이어지는지 검사한다.
 * @param {string[]} numbers 번호 라벨 (읽는 순서)
 */
export function checkNumberContinuity(numbers) {
  const parsed = numbers.map((label) => Number.parseInt(label, 10)).filter((value) => Number.isFinite(value));
  const gaps = [];
  const duplicates = [];
  const seen = new Set();
  for (const value of parsed) {
    if (seen.has(value)) duplicates.push(value);
    seen.add(value);
  }
  const sorted = [...seen].sort((a, b) => a - b);
  for (let index = 1; index < sorted.length; index += 1) {
    if (sorted[index] !== sorted[index - 1] + 1) {
      gaps.push({ after: sorted[index - 1], before: sorted[index] });
    }
  }
  return { first: sorted[0] ?? null, last: sorted[sorted.length - 1] ?? null, count: sorted.length, gaps, duplicates };
}
