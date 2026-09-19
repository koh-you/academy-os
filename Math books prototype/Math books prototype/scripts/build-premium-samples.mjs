#!/usr/bin/env node
// build-premium-samples.mjs (v1.1, 2026-06-24)
// 카탈로그 14·17번에서 라벨링된 ★ 표본을 단일 JSON으로 추출
// → data/cm1-premium-samples.json
//
// 처리 흐름:
// 1. 카탈로그 마크다운 파일을 줄 단위로 스캔
// 2. 섹션 헤더(### / ####)에서 출처·단원·소단원·페이지 메타 추출
// 3. 마크다운 표 헤더를 만나면 컬럼 매핑을 동적으로 결정
// 4. 데이터 줄을 표본 슬롯으로 파싱 → samples 배열에 누적
// 5. JSON 직렬화
//
// 사용법: node scripts/build-premium-samples.mjs [--out <path>] [--verbose]

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const outFlag = args.indexOf('--out');
const OUT_FILE = outFlag >= 0 ? args[outFlag + 1] : 'data/cm1-premium-samples.json';
const VERBOSE = args.includes('--verbose');

const FILES = [
  { path: 'bank/4점-패턴-카탈로그/14-CM1-시판-진정변별.md', label: 'commercial', defaultSource: null, parser: 'table' },
  { path: 'bank/4점-패턴-카탈로그/17-EBS-CM1-교차검증.md', label: 'ebs-olympos', defaultSource: '올림포스', parser: 'table' },
  { path: 'bank/4점-패턴-카탈로그/11-S5-진정변별-후보.md', label: 'mothertongue', defaultSource: '마더텅', parser: 'narrative' },
  { path: 'bank/4점-패턴-카탈로그/13-CM2-진정변별-후보.md', label: 'cm2-commercial', defaultSource: null, parser: 'table' },
  { path: 'bank/4점-패턴-카탈로그/16-수능평가원-본기출.md', label: 'exam-archive', defaultSource: '깊이와통찰', parser: 'table' },
];

const samples = [];
const errors = [];

// 출처 이름 → 단축 코드 (id prefix)
const SOURCE_PREFIX = {
  '블랙라벨': 'BL',
  '1등급마스터': 'IM',
  '일품': 'IP',
  '절대등급': 'AB',
  '고쟁이': 'GJ',
  '플래티넘': 'PT',
  '일등급만들기': 'IGM',
  '일등급수학': 'IGS',
  '일등급 수학': 'IGS',
  '올림포스': 'OL',
  'EBS': 'OL',  // EBS 올림포스 alias
  '마더텅': 'MS',
  '깊이와통찰': 'DI',  // 16번 학평 압축본 — external_id (DI-FN-NNN)을 그대로 사용
  // v3.10 Tier A 추가 (2026-07-06)
  '쎈': 'SN',
  'RPM': 'RPM',
  '마플시너지': 'MPS',
};

// 단원 직접 코드 매칭 (헤더에 'CM2-GM', 'CM1-PL' 등 명시된 경우)
const UNIT_DIRECT_CODES = [
  { re: /CM2[-\s]?GM/i, code: 'CM2-GM' },
  { re: /CM2[-\s]?ST/i, code: 'CM2-ST' },
  { re: /CM2[-\s]?FN/i, code: 'CM2-FN' },
  { re: /CM2[-\s]?RF/i, code: 'CM2-RF' },
  { re: /CM1[-\s]?PL/i, code: 'CM1-PL' },
  { re: /CM1[-\s]?EQ/i, code: 'CM1-EQ' },
  { re: /CM1[-\s]?CB/i, code: 'CM1-CB' },
  { re: /CM1[-\s]?MX/i, code: 'CM1-MX' },
];

// 단원 keyword → unit code (우선순위 순)
// 책마다 단원 번호 ≠ unit code 이므로 키워드 매칭 우선
// CM2 키워드를 CM1 키워드보다 먼저 검사
const UNIT_BY_KEYWORD = [
  // CM2 우선
  { re: /도형의 방정식|평면좌표|직선의 방정식|원의 방정식|도형의 이동/, code: 'CM2-GM' },
  { re: /집합과 명제|집합의 (?:뜻|연산|표현)|명제(?!\s*의)/, code: 'CM2-ST' },
  { re: /유리식|유리함수|무리식|무리함수/, code: 'CM2-RF' },
  { re: /함수의 뜻|합성함수|역함수|함수의 그래프|^\s*함수\s*$|FN\s+\d{2}\s+함수/, code: 'CM2-FN' },
  // CM1
  { re: /행렬/, code: 'CM1-MX' },
  { re: /경우의 수|순열|조합|순열과 조합/, code: 'CM1-CB' },
  { re: /복소수|이차방정식|이차함수|판별식|근과|여러 가지 방정식|여러방정식|연립방정식|부등식|연립일차부등식|이차부등식|연립이차부등식/, code: 'CM1-EQ' },
  { re: /다항식|항등식|나머지정리|인수분해/, code: 'CM1-PL' },
];

function resolveUnit(headerText, fallback) {
  for (const { re, code } of UNIT_DIRECT_CODES) {
    if (re.test(headerText)) return code;
  }
  for (const { re, code } of UNIT_BY_KEYWORD) {
    if (re.test(headerText)) return code;
  }
  return fallback;
}

function resolveSource(headerText) {
  for (const [name, prefix] of Object.entries(SOURCE_PREFIX)) {
    if (headerText.includes(name)) return { name, prefix };
  }
  return null;
}

// 통찰 문자열 파싱
// 예: "EQV(3)·CON(2)·MI(2)·PD(2)" 또는 "EQV×2(3,3)·CON(2)·MI(2)" 또는 "EQV(3)·CON×2(2,2)·MI(2)·BW(2)·RT(2)"
function parseInsights(s) {
  if (!s) return [];
  const insights = [];
  // 정규식: TYPE [×N] (D[,D...])
  const re = /([A-Z]+)\s*(?:×\s*(\d+))?\s*\(\s*(\d+(?:\s*,\s*\d+)*)\s*\)/g;
  let m;
  while ((m = re.exec(s)) !== null) {
    const type = m[1];
    const xn = m[2] ? parseInt(m[2]) : null;
    const depths = m[3].split(',').map(d => parseInt(d.trim()));
    if (xn) {
      // ×N과 함께 명시된 depths를 채우고 모자라면 마지막 depth로 보충
      for (let i = 0; i < xn; i++) {
        insights.push({ type, depth: depths[i] ?? depths[depths.length - 1] });
      }
    } else {
      for (const d of depths) {
        insights.push({ type, depth: d });
      }
    }
  }
  return insights;
}

function cleanCell(s) {
  if (!s) return '';
  return s.replace(/\*\*/g, '').trim();
}

function parseFloatLoose(s) {
  if (!s) return null;
  const cleaned = s.replace(/[\*\s]/g, '');
  const v = parseFloat(cleaned);
  return Number.isFinite(v) ? v : null;
}

function parseIntLoose(s) {
  if (!s) return null;
  const cleaned = s.replace(/[\*\s]/g, '');
  const v = parseInt(cleaned, 10);
  return Number.isFinite(v) ? v : null;
}

// 헤더 줄에서 컬럼 인덱스 추출
function buildColumnMap(headerCells) {
  const map = { '#': -1, 'ID': -1, '출처': -1, '발문': -1, '통찰': -1, 'max': -1, 'avg': -1, 'count': -1, 'score': -1, '등급': -1 };
  headerCells.forEach((c, i) => {
    const cell = c.toLowerCase();
    if (c === '#') map['#'] = i;
    else if (cell === 'id') map['ID'] = i;
    else if (c.includes('출처')) map['출처'] = i;
    else if (c.includes('발문')) map['발문'] = i;
    else if (c.includes('통찰')) map['통찰'] = i;
    else if (cell === 'max') map['max'] = i;
    else if (cell === 'avg') map['avg'] = i;
    else if (cell === 'count') map['count'] = i;
    else if (cell === 'score') map['score'] = i;
    else if (c.includes('등급')) map['등급'] = i;
  });
  return map;
}

function splitRow(line) {
  if (!line.startsWith('|')) return null;
  return line.split('|').slice(1, -1).map(c => c.trim());
}

// 발문에 LaTeX 절댓값 |x| 같은 escape되지 않은 | 가 들어가면 cells 수가 헤더보다 많아짐.
// 통찰 패턴(EQV(N)·CON(N) 등)을 기준으로 #·발문 셀을 재구성.
function reconstructCells(cells, columnMap) {
  if (!cells || !columnMap) return cells;
  const insightCol = columnMap['통찰'];
  if (insightCol < 0) return cells;
  // 헤더 길이 = columnMap에서 max(인덱스) + 1
  const headerLen = Math.max(...Object.values(columnMap)) + 1;
  if (cells.length === headerLen) return cells;
  if (cells.length < headerLen) return cells; // 부족 — 처리 불가, 원본 그대로
  // 통찰 셀 패턴: TYPE(D) 또는 TYPE×N(D,D,...)
  const insightPattern = /[A-Z]+\s*(?:×\s*\d+)?\s*\(\s*\d+/;
  let insightIdx = -1;
  for (let i = 0; i < cells.length; i++) {
    const c = cells[i].replace(/\*\*/g, '').trim();
    if (insightPattern.test(c) && /[·×]|^[A-Z]+\(/.test(c)) {
      insightIdx = i;
      break;
    }
  }
  if (insightIdx < 0) return cells; // 통찰 셀 못 찾음
  // # 컬럼은 cells[0]
  const numCell = cells[0];
  // ID 컬럼이 있으면 cells[1] = ID. 발문/출처는 그 다음부터 결합
  const hasIdCol = columnMap['ID'] >= 0;
  const idCell = hasIdCol && cells.length > 1 ? cells[1] : '';
  const startIdx = hasIdCol ? 2 : 1;
  const probCell = cells.slice(startIdx, insightIdx).join('|');
  // 통찰 이후 컬럼들
  const tail = cells.slice(insightIdx);
  // 재구성: # · (ID) · 발문/출처 · 통찰 · (max·avg·count·score·등급)
  const out = new Array(headerLen).fill('');
  out[columnMap['#']] = numCell;
  if (hasIdCol) out[columnMap['ID']] = idCell;
  if (columnMap['발문'] >= 0) out[columnMap['발문']] = probCell;
  else if (columnMap['출처'] >= 0) out[columnMap['출처']] = probCell;
  // tail을 통찰 컬럼부터 순서대로 매핑
  for (let i = 0; i < tail.length && insightCol + i < headerLen; i++) {
    out[insightCol + i] = tail[i];
  }
  return out;
}

function isHeaderSep(line) {
  return /^\|\s*[-:]+/.test(line);
}

// 마더텅 11번 카탈로그 파서 (narrative 형식, v3.0 카운트 라벨링)
// #### NNN  ★★★★ — {year} {round}
// - **출처**: 마더텅 문제편 p{XX}
// - **통찰 라벨**: I-XX × N · I-YY × M — **insight_score = N**
// - **발문 요지**: ...
// - **우리 앵커 활용**: ★ N
function parseNarrativeFile(filePath, defaultSource, label) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/);

  // 단원 식별: ## 3. PL — / ## 4. EQ — / ## 5. CB — / ## 6. MX —
  const UNIT_MAJOR = [
    { re: /^##\s+3\.\s*PL/, code: 'CM1-PL' },
    { re: /^##\s+4\.\s*EQ/, code: 'CM1-EQ' },
    { re: /^##\s+5\.\s*CB/, code: 'CM1-CB' },
    { re: /^##\s+6\.\s*MX/, code: 'CM1-MX' },
  ];

  let currentUnit = null;
  let currentSubsection = null;
  let cur = null; // 현재 슬롯

  function flush() {
    if (!cur) return;
    if (!cur.insights || cur.insights.length === 0) {
      cur = null;
      return;
    }
    samples.push(cur);
    cur = null;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // 단원 헤더 (##)
    for (const { re, code } of UNIT_MAJOR) {
      if (re.test(line)) {
        flush();
        currentUnit = code;
        currentSubsection = line.replace(/^##\s+/, '').trim();
        break;
      }
    }
    // 소단원 (###)
    if (line.startsWith('### ')) {
      currentSubsection = line.replace(/^###\s+/, '').replace(/\s*\(.*\)\s*$/, '').trim();
      continue;
    }
    // 문항 헤더 (####)
    const headMatch = line.match(/^####\s+(\d+)\s+(★+)\s*(?:—|–|-)\s*(.+)$/);
    if (headMatch) {
      flush();
      const num = headMatch[1];
      const starsRaw = headMatch[2];
      const meta = headMatch[3].trim();
      cur = {
        id: `MT-${currentUnit ? currentUnit.replace('CM1-', '') : '??'}-${num}`,
        source: defaultSource,
        source_book: '마더텅 2025 전국연합학력평가 [고1-1] 공통수학1',
        unit: currentUnit,
        unit_sub: currentSubsection,
        sub_section: currentSubsection,
        page: null,
        problem_num: num,
        발문요지: '',
        insights: [],
        max_depth: null,
        avg_depth: null,
        insight_count: 0,
        score: null,
        insight_score_v3_0: null,
        grade_label: starsRaw,
        labeling_version: 'v3.0',
        is_strict: false,
        is_premium: false,
        is_top: false,
        source_file: label,
        exam_meta: meta,
      };
      continue;
    }
    if (!cur) continue;

    // - **출처**: 마더텅 문제편 p25 (PL 풀 형식)
    const pageM = line.match(/^-\s+\*\*출처\*\*\s*:\s*(.+)$/);
    if (pageM) {
      const text = pageM[1];
      const pMatch = text.match(/p\.?(\d+(?:[~-]\d+)?)/i);
      if (pMatch) cur.page = `p.${pMatch[1]}`;
      continue;
    }
    // 압축 형식: "- p105 / EQ-T07 / **발문**: ..." 한 줄에 page + 발문
    const compactPageProbM = line.match(/^-\s+p(\d+(?:[~-]\d+)?)\s*\/.*\*\*발문\*\*\s*:\s*(.+)$/);
    if (compactPageProbM) {
      cur.page = `p.${compactPageProbM[1]}`;
      cur.발문요지 = compactPageProbM[2].trim();
      continue;
    }
    // - **발문 요지**: ... (PL 풀 형식)
    const probM = line.match(/^-\s+\*\*발문\s*요지\*\*\s*:\s*(.+)$/);
    if (probM) {
      cur.발문요지 = probM[1].trim();
      continue;
    }
    // - **발문**: ... (압축 형식, 개별 줄)
    const probM2 = line.match(/^-\s+\*\*발문\*\*\s*:\s*(.+)$/);
    if (probM2 && !cur.발문요지) {
      cur.발문요지 = probM2[1].trim();
      continue;
    }
    // - **통찰 라벨**: ... (PL 풀 형식)  또는  - **통찰**: ... (압축 형식)
    const insM = line.match(/^-\s+\*\*통찰(?:\s*라벨)?\*\*\s*:\s*(.+)$/);
    if (insM) {
      const text = insM[1];
      // I-{TYPE} × {COUNT} 형식
      const re = /I[-‐_]\s*([A-Z]+)\s*[×x]\s*(\d+)/g;
      let m;
      while ((m = re.exec(text)) !== null) {
        const type = m[1];
        const cnt = parseInt(m[2]);
        for (let k = 0; k < cnt; k++) {
          cur.insights.push({ type, depth: null });
        }
      }
      // insight_score = N (PL 풀 형식) 또는 insight = N (EQ·CB·MX 압축 형식)
      const scoreM = text.match(/insight(?:_score)?\s*=\s*(\d+)/);
      if (scoreM) {
        cur.insight_score_v3_0 = parseInt(scoreM[1]);
      }
      cur.insight_count = cur.insights.length;
      // 압축 형식은 grade 라벨도 통찰 줄 끝에 통합 (예: "... — **insight = 5** — **★ 5 최상위**")
      if (text.includes('★ 5') || text.includes('★5')) {
        cur.grade_label = '★ 5';
        if (text.includes('최상위')) cur.is_premium = true;
      } else if (text.includes('★ 4') || text.includes('★4')) {
        cur.grade_label = '★ 4';
      } else if (text.includes('★ 3') || text.includes('★3')) {
        cur.grade_label = '★ 3';
      }
      continue;
    }
    // - **우리 앵커 활용**: ★ N  또는  - **앵커**: ★ N
    const gradeM = line.match(/^-\s+\*\*(?:우리\s*앵커\s*활용|앵커)\*\*\s*:\s*(.+)$/);
    if (gradeM) {
      const text = gradeM[1];
      if (text.includes('★ 5') || text.includes('★5')) cur.grade_label = '★ 5';
      else if (text.includes('★ 4') || text.includes('★4')) cur.grade_label = '★ 4';
      else if (text.includes('★ 3') || text.includes('★3')) cur.grade_label = '★ 3';
      if (text.includes('최상위')) cur.is_premium = true;
      continue;
    }
  }
  flush();

  // insight_score ≥ 5 → ★ 5 최상위 (마더텅 §8.1 기준)
  for (const s of samples) {
    if (s.source_file !== label) continue;
    if ((s.insight_score_v3_0 ?? 0) >= 5) s.is_premium = true;
  }
}

// 메인 파싱
for (const { path: filePath, label, defaultSource, parser } of FILES) {
  if (parser === 'narrative') {
    if (!fs.existsSync(filePath)) { errors.push(`파일 없음: ${filePath}`); continue; }
    parseNarrativeFile(filePath, defaultSource, label);
    continue;
  }
  if (!fs.existsSync(filePath)) {
    errors.push(`파일 없음: ${filePath}`);
    continue;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/);

  let currentSource = defaultSource;
  let currentBook = null;
  let currentUnit = null;
  let currentUnitSub = null;
  let currentSubsection = null;
  let currentPage = null;
  let columnMap = null;
  let inTable = false;
  let sectionCounter = {};

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // 섹션 헤더 (## · ### · ####)
    if (line.startsWith('## ') || line.startsWith('### ') || line.startsWith('#### ')) {
      const text = line.replace(/^#+\s+/, '').trim();
      // 출처
      const src = resolveSource(text);
      if (src) {
        currentSource = src.name;
        currentBook = text;
      }
      // 단원
      const unit = resolveUnit(text, null);
      if (unit) {
        currentUnit = unit;
        const subMatch = text.match(/단원\s*(\d+)/);
        if (subMatch) currentUnitSub = subMatch[1];
      }
      // 페이지
      const pageMatch = text.match(/책?\s*p\.?(\d+(?:[~-]\d+)?)/i);
      if (pageMatch) currentPage = `p.${pageMatch[1]}`;
      // 소단원 (STEP 3, C STEP, 사고력, 실전 마무리 등)
      if (text.includes('STEP 3') || text.includes('C STEP') ||
          text.includes('사고력') || text.includes('실전 마무리') ||
          text.includes('1등급') || text.includes('도전') || text.includes('마스터')) {
        currentSubsection = text.replace(/^[0-9.\s]+/, '').replace(/\(.*?\)$/, '').trim();
      }
      inTable = false;
      columnMap = null;
      continue;
    }

    // 표 헤더 감지: |로 시작, 그 다음 줄이 ---
    if (line.startsWith('|') && !isHeaderSep(line)) {
      const cells = splitRow(line);
      if (cells && i + 1 < lines.length && isHeaderSep(lines[i + 1])) {
        // 헤더 — 컬럼 매핑
        columnMap = buildColumnMap(cells.map(cleanCell));
        if (columnMap['#'] >= 0 && columnMap['통찰'] >= 0 && columnMap['score'] >= 0) {
          inTable = true;
          if (VERBOSE) console.error(`헤더: ${filePath}:${i+1} ${cells.join(' | ')}`);
        }
        i++; // skip separator
        continue;
      }
    }

    // 표 데이터 줄
    if (inTable && line.startsWith('|') && !isHeaderSep(line)) {
      let cells = splitRow(line);
      if (!cells || !columnMap) continue;
      // LaTeX 절댓값 |x| 등으로 cells가 헤더보다 많을 때 통찰 패턴으로 재구성
      cells = reconstructCells(cells, columnMap);
      const numStr = cleanCell(cells[columnMap['#']] || '');
      const insightStr = cleanCell(cells[columnMap['통찰']] || '');
      const scoreStr = columnMap['score'] >= 0 ? cells[columnMap['score']] : null;
      const gradeStr = columnMap['등급'] >= 0 ? cleanCell(cells[columnMap['등급']]) : '';
      if (!numStr || !insightStr) continue;
      // 슬롯 생성
      const insights = parseInsights(insightStr);
      if (insights.length === 0) continue;
      const score = parseFloatLoose(scoreStr);
      const maxD = columnMap['max'] >= 0 ? parseIntLoose(cells[columnMap['max']]) : Math.max(...insights.map(it => it.depth));
      const cnt = columnMap['count'] >= 0 ? parseIntLoose(cells[columnMap['count']]) : insights.length;
      const avgD = columnMap['avg'] >= 0 ? parseFloatLoose(cells[columnMap['avg']]) : insights.reduce((a, b) => a + b.depth, 0) / insights.length;
      const externalId = columnMap['ID'] >= 0 ? cleanCell(cells[columnMap['ID']] || '') : null;
      const sourceEvent = columnMap['출처'] >= 0 ? cleanCell(cells[columnMap['출처']] || '') : null;
      // 발문 fallback: 발문 컬럼 없으면 출처 컬럼 (16번처럼 발문 없이 ID/출처/통찰 표 양식)
      const 발문 = columnMap['발문'] >= 0
        ? cleanCell(cells[columnMap['발문']] || '')
        : (sourceEvent || '');

      // 등급 정규화
      let isStrict = false, isTop = false, isPremium = false;
      if (gradeStr.includes('9.00 TOP') || score === 9.00) isTop = true;
      if (gradeStr.includes('strict')) isStrict = true;
      if (gradeStr.includes('★ 5 최상위') || gradeStr.includes('★5 최상위') || isTop) isPremium = true;
      // broad premium: ★ 5 (score≥8.5) 자동 마킹
      if (gradeStr.includes('★ 5') || (score !== null && score >= 8.5)) isPremium = true;
      // 일관성: score≥8.5 + max=3 + count≥5 → strict
      if (score !== null && score >= 8.5 && maxD === 3 && cnt >= 5) isStrict = true;

      // id 생성: external_id 우선 (DI-* 같은 외부 ID는 그대로 사용 → bank/problems와 1:1 매칭)
      let id;
      if (externalId && /^[A-Z]+-[A-Z0-9-]+$/.test(externalId)) {
        id = externalId;
        sectionCounter[id] = (sectionCounter[id] || 0) + 1;
        if (sectionCounter[id] > 1) id = `${id}#${sectionCounter[id]}`;
      } else {
        const prefix = currentSource ? (SOURCE_PREFIX[currentSource] || 'UN') : 'UN';
        const unitShort = currentUnit ? currentUnit.replace('CM1-', '').replace('CM2-', '2-') : '??';
        const sub = currentUnitSub || '00';
        const cleanedNum = numStr.replace(/^[*\[\]]+|[*\[\]]+$/g, '').split(/\s/)[0];
        const key = `${prefix}-${unitShort}-${sub}-${cleanedNum}`;
        sectionCounter[key] = (sectionCounter[key] || 0) + 1;
        id = sectionCounter[key] > 1 ? `${key}-${sectionCounter[key]}` : key;
      }

      // 행별 unit 추출 (출처·발문 셀에 CM1-EQ·CM2-ST 등 단원 키워드 있으면 override)
      let rowUnit = currentUnit;
      const probeText = `${sourceEvent || ''} ${발문 || ''}`;
      const ru = resolveUnit(probeText, null);
      if (ru) rowUnit = ru;

      samples.push({
        id,
        source: currentSource,
        source_book: currentBook,
        unit: rowUnit,
        unit_sub: currentUnitSub,
        sub_section: currentSubsection,
        page: currentPage,
        problem_num: numStr,
        external_id: externalId,
        source_event: sourceEvent,
        발문요지: 발문,
        insights,
        max_depth: maxD,
        avg_depth: avgD,
        insight_count: cnt,
        score,
        grade_label: gradeStr,
        is_strict: isStrict,
        is_premium: isPremium,
        is_top: isTop,
        source_file: label,
      });
      continue;
    }

    // 표 종료
    if (inTable && !line.startsWith('|')) {
      inTable = false;
      columnMap = null;
    }
  }
}

// 출력 폴더 보장
const outDir = path.dirname(OUT_FILE);
if (outDir && !fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function buildResult(version, samplesArr) {
  const stats = {
    total: samplesArr.length,
    premium: samplesArr.filter(s => s.is_premium).length,
    strict: samplesArr.filter(s => s.is_strict).length,
    top_9: samplesArr.filter(s => s.is_top).length,
    by_unit: {},
    by_source: {},
  };
  for (const s of samplesArr) {
    const u = s.unit || 'unknown';
    stats.by_unit[u] = (stats.by_unit[u] || 0) + 1;
    const src = s.source || 'unknown';
    stats.by_source[src] = (stats.by_source[src] || 0) + 1;
  }
  return {
    version,
    generated: new Date().toISOString().slice(0, 10),
    source_catalogs: FILES.map(f => f.path),
    stats,
    samples: samplesArr,
    errors,
  };
}

// CM1·CM2 자동 split 출력
const cm1Samples = samples.filter(s => s.unit && s.unit.startsWith('CM1'));
const cm2Samples = samples.filter(s => s.unit && s.unit.startsWith('CM2'));
const otherSamples = samples.filter(s => !s.unit || (!s.unit.startsWith('CM1') && !s.unit.startsWith('CM2')));

const cm1Result = buildResult('1.3', cm1Samples);
const cm2Result = buildResult('1.0', cm2Samples);
const allResult = buildResult('1.0', samples);

// out path: 기본은 cm1, all/cm2는 자동 파생 경로
const baseOut = OUT_FILE;
const cm2Out = baseOut.replace(/cm1[-_]?/i, 'cm2-').replace(/^([^.]+)$/, '$1').replace(/^(.+)\.json$/, '$1').replace(/cm1/i, 'cm2') + '.json';
const cm2OutPath = baseOut.includes('cm1') ? baseOut.replace(/cm1/gi, 'cm2') : path.join(path.dirname(baseOut), 'cm2-premium-samples.json');
const allOutPath = path.join(path.dirname(baseOut), 'all-premium-samples.json');

fs.writeFileSync(baseOut, JSON.stringify(cm1Result, null, 2), 'utf8');
fs.writeFileSync(cm2OutPath, JSON.stringify(cm2Result, null, 2), 'utf8');
fs.writeFileSync(allOutPath, JSON.stringify(allResult, null, 2), 'utf8');

function reportFile(file, r) {
  console.log(`✓ ${file} — ${r.stats.total}문 (premium ${r.stats.premium} · strict ${r.stats.strict} · 9.00 TOP ${r.stats.top_9})`);
  console.log(`  단원별: ${JSON.stringify(r.stats.by_unit)}`);
}
reportFile(baseOut, cm1Result);
reportFile(cm2OutPath, cm2Result);
reportFile(allOutPath, allResult);

if (otherSamples.length > 0) {
  console.warn(`⚠️  unit 코드 없는 슬롯 ${otherSamples.length}문 (all-premium-samples.json 에만 포함)`);
}
if (errors.length) {
  console.error(`⚠️  에러 ${errors.length}건:`);
  errors.forEach(e => console.error(`  - ${e}`));
}
