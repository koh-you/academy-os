#!/usr/bin/env node
// v5.1 8축 통합 정밀 스코어 검증기 (schema.md §2.16)
// 2026-07-11 신설 — v5.1 8축 (N·L·T·H·R·F·E·P) composite 자동 산출
//
// 사용법:
//   node scripts/v51-composite-check.mjs <문제.tex> [--답지 <답지.tex>] [--json]
//   node scripts/v51-composite-check.mjs <문제.tex> --slot 16 [--답지 <답지.tex>]
//
// 출력:
//   슬롯별 N/L/T/H/R/F/E/P 스코어 + composite + 등급 + 인간 검토 플래그
//
// 주의: 본 도구는 *휴리스틱* 우선 채점기.
//   - 정확 채점(T·F·P 특히)은 problem-review v5.1 에이전트 호출 필수
//   - 도구가 YELLOW 플래그 표시하는 항목은 인간 검토 대상
//   - schema.md §2.16 단일 출처 준수

import fs from 'node:fs';
import path from 'node:path';

// ═══════════════════════════════════════════════════════════════════
// 인자 파싱
// ═══════════════════════════════════════════════════════════════════

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Usage: node scripts/v51-composite-check.mjs <문제.tex> [--답지 <답지.tex>] [--slot N] [--json]');
  process.exit(2);
}

const problemFile = args[0];
const answerIdx = args.findIndex(a => a === '--답지' || a === '--answer');
const answerFile = answerIdx > -1 ? args[answerIdx + 1] : null;
const slotIdx = args.findIndex(a => a === '--slot');
const targetSlot = slotIdx > -1 ? parseInt(args[slotIdx + 1]) : null;
const jsonOut = args.includes('--json');
const axisIdx = args.findIndex(a => a === '--axis');
const targetAxis = axisIdx > -1 ? args[axisIdx + 1].toUpperCase() : null;
const validAxes = ['N', 'L', 'T', 'H', 'R', 'F', 'E', 'P', 'COMPOSITE'];
if (targetAxis && !validAxes.includes(targetAxis)) {
  console.error(`⚠️  --axis 값 오류: ${targetAxis} (허용: ${validAxes.join('/')})`);
  process.exit(2);
}

if (!fs.existsSync(problemFile)) {
  console.error(`⚠️  문제 파일 없음: ${problemFile}`);
  process.exit(2);
}

const problemContent = fs.readFileSync(problemFile, 'utf8');
const answerContent = answerFile && fs.existsSync(answerFile)
  ? fs.readFileSync(answerFile, 'utf8')
  : null;

// ═══════════════════════════════════════════════════════════════════
// 슬롯 파싱
// ═══════════════════════════════════════════════════════════════════

// 🔴 2026-07-30 세션 104 결함 수정 — 소문항 구조적 미검출
//
// 종전: /\\begin\{problem\}...\\end\{problem\}/ 로 **환경 안만** 잘라냈다.
// 그런데 시험지 레이아웃(딥매쓰 A형 골든 포함)은 서술형 소문항
// `\textbf{(1)}(2)(3)` 을 **problem 환경 밖**(probpair 컬럼)에 둔다:
//
//     \begin{problem}{17}{s}
//     ... 지문 · 발문 ... \pts{12}
//     \end{problem}          ← 여기서 닫힘
//
//     \textbf{(1)} ...       ← 환경 밖 · 종전 파서는 못 봄
//
// 결과: 축 L(소문항 종속성)이 **모든 서술형에서 항상 0**, 축 T·E도 과소평가.
//       계단식 킬러일수록 더 크게 깎이는 방향의 편향이었다.
// 🔴 이 파서로 산출된 과거 composite 수치는 서술형이 과소평가되어 있다.
//
// 수정: 슬롯 본문을 `\begin{problem}{N}` 부터 **다음 슬롯 시작 직전까지**로 잡는다.
//       종전 본문을 완전히 포함하므로 선택형 결과는 불변이고,
//       서술형만 소문항이 추가로 보이게 된다.
function extractSlots(content) {
  const slots = [];
  const starts = [...content.matchAll(/\\begin\{problem\}\{(\d+)\}\{s\}/g)];
  for (let i = 0; i < starts.length; i++) {
    const num = parseInt(starts[i][1]);
    const from = starts[i].index + starts[i][0].length;
    const to = i + 1 < starts.length ? starts[i + 1].index : content.length;
    const body = content.slice(from, to);
    const pointMatch = body.match(/\\(?:pointbadge|pts)\{(\d+(?:\.\d+)?)\}/);
    const point = pointMatch ? parseFloat(pointMatch[1]) : 0;
    slots.push({ num, body, point });
  }
  return slots;
}

const slots = extractSlots(problemContent);
if (slots.length === 0) {
  console.error('⚠️  problem 환경 발견 0개 — tex 구조 확인 필요');
  process.exit(2);
}

// 답 값 추출 (H 축용)
const answerValues = answerContent ? extractAnswerValues(answerContent) : new Map();

function extractAnswerValues(content) {
  const values = new Map();  // slotNum → Set of numeric strings appearing in soltitle 정답 인자
  // \soltitle{N}{정답}{점수} pattern
  // 🔴 2026-07-30 세션 104 — 딥매쓰 시리즈 매크로 미대응 결함 수정.
  //    답지 실제 매크로는 \dmsoltitle·\dmquick 인데 종전 정규식은 \soltitle·\quick 만
  //    찾아 **아무것도 읽지 못했다** → 축 H(답 노출)·R(엄밀성)이 항상 0.
  //    L 축 미검출과 같은 종류(파서가 현행 레이아웃·매크로를 못 봄)의 결함이다.
  const soltitleRe = /\\(?:dm)?soltitle\{(\d+)\}\{([^}]+)\}\{([^}]+)\}/g;
  for (const m of content.matchAll(soltitleRe)) {
    const num = parseInt(m[1]);
    // 🔴 2026-07-30 (세션 105) — 소문항 라벨 (1)(2)(3) 제거. 좌표 (3,0) 은 보존.
    const ans = m[2].replace(/\((\d)\)\s+/g, ' ');
    // 숫자·좌표·표현 추출
    const nums = ans.match(/-?\d+(?:\.\d+)?/g) || [];
    if (!values.has(num)) values.set(num, new Set());
    for (const n of nums) values.get(num).add(n);
  }
  // quickgrid \quick{N}{ans} pattern
  const quickRe = /\\(?:dm)?quick\{(\d+)\}\{([^}]+)\}/g;
  for (const m of content.matchAll(quickRe)) {
    const num = parseInt(m[1]);
    // 🔴 2026-07-30 (세션 105) — 소문항 라벨 (1)(2)(3) 제거. 좌표 (3,0) 은 보존.
    const ans = m[2].replace(/\((\d)\)\s+/g, ' ');
    const nums = ans.match(/-?\d+(?:\.\d+)?/g) || [];
    if (!values.has(num)) values.set(num, new Set());
    for (const n of nums) values.get(num).add(n);
  }
  return values;
}

// ═══════════════════════════════════════════════════════════════════
// 축 N (Narrative Depth 0~4)
// ═══════════════════════════════════════════════════════════════════

// 학문 용어 후보 (도메인 별 확장)
// v5.1 튜닝 (2026-07-11): 평가원 국어 비문학·과학탐구 지문 수준 감지를 위한 대규모 확장
const ACADEMIC_TERMS = [
  // 물리 (역학)
  '고전역학', '뉴턴', '만유인력', '중력', '가속도', '관성', '운동량', '충격량', '탄성', '마찰',
  '진자', '진동', '주기', '주파수', '파장', '파동', '공명',
  // 물리 (광학)
  '광원', '광선', '반사광', '입사광', '굴절', '반사판', '거울', '오목', '볼록', '초점',
  '개기월식', '월식', '일식', '개기식', '본그림자', '반그림자',
  // 물리 (전자기·양자)
  '전자기', '자기장', '자기력', '전기장', '전위', '광자', '입자', '전자', '양자',
  // 천문·지구과학
  '천문학', '천문', '지구', '태양', '달', '행성', '위성', '궤도', '편심률', '자전', '공전',
  '케플러', '태양계', '항성', '천체', '초점', '근일점', '원일점', '기상', '지질', '지각',
  // 화학
  '반응', '촉매', '평형', '농도', '용액', '용매', '용질', '이온', '분자', '원자', '결합',
  '산성', '염기성', '전기음성도', '주기율표',
  // 생물
  '세포', '조직', '기관', '유전자', 'DNA', 'RNA', '단백질', '효소', '호르몬', '항체',
  '대사', '진화', '개체군', '생태계', '삼림', '광합성', '호흡',
  // 공학·기계·정보
  '기지국', '수신기', '레이더', '스캔', '해상도', '픽셀', '알고리즘', '데이터',
  '로봇', '관절', '자유도', '기구학', '아크', '피벗', '메커니즘',
  '사도기', '평행사변형', '링크', '팬터그래프',
  '삼각측량', '측량', 'GPS', 'GNSS', '좌표계', '아핀', '변환',
  // 사회·경제·인문
  '거시', '미시', '통화', '금리', '경기', '수요', '공급', '균형', '한계', '효용',
  '민주주의', '입헌', '주권', '제도', '규범', '사회', '문화',
  '상대성이론', '관계', '정의', '개념', '이념', '이론', '가설', '검증',
  // 수학 mechanism 특수 용어
  '가우스', '오일러', '데카르트', '피타고라스', '유클리드', '아르키메데스',
  '아이젠슈타인', '체비셰프', '함수 그래프', '점근선', '변곡점',
  // 이번 세션 27 반려본 관련 (교훈)
  '관측 영역', '관측 가능', '동시 관측', '전 궤도', '기지국', '수신기', '삼각측량',
  '전자석', '자기장', '진자',
];

const REFERENCE_PHRASES = [
  // 기본
  '지문의', '지문에서', '지문에 따라', '앞의 정의에 따라', '앞의 조건에 따라',
  '앞에서 정의한', 'mechanism에 의하여', '원리에 따라', '원리에 의하여',
  '앞의 설명', '위의 설명', '위 정의', '지문에서 정의한', '지문에서 서술한',
  '조건에 따라', '정의에 따라',
  // 실제 서술형 문항 스타일
  '앞에서 구한', '위에서 구한', '앞의 결과', '앞의 방정식', '앞의 부등식',
  '앞의 조건', '앞의 방법', '앞의 유도', '위의 유도', '위 방법',
  '(1)의 결과', '(1)에서 구한', '(2)의 결과', '(2)에서 구한',
  '이 원리', '이 정의', '이 조건',
];

// v5.1 튜닝: 지문 텍스트 추출 정확화
// 🔴 2026-07-30 (세션 105) 수정 — 종전에는 \pts{ 에서도 잘랐다.
//    그런데 대발문을 지문 박스보다 앞에 두는 조판(실기출 #16·#17 형식)에서는
//    \pts 가 첫 줄에 오므로 stem 이 첫 줄만 남고 **지문이 통째로 사라진다.**
//    실측: #17 이 회전교차로 지문을 갖고 있는데 축 N 이 3 → 0 으로 떨어졌다.
//    지문을 발문 앞에 두든 뒤에 두든 난이도는 같다 → 자르는 기준을 소문항 시작으로 통일한다.
function extractStem(body) {
  // 소문항 \textbf{(1)} 이 나오기 전까지가 지문 + 발문이다.
  const cut = body.search(/\\textbf\{\(1\)\}/);
  return cut > -1 ? body.slice(0, cut) : body;
}

function scoreN(slot) {
  const body = slot.body;
  const stem = extractStem(body);

  // 문장 수 카운트 (한국어)
  // 종결어미: -다, -이다, -있다, -하다, -된다, -한다 + 종결부호
  const sentenceMatches = stem.match(/(?:[.!?]|[가-힣]다[.]|[가-힣]이다[.]|[가-힣]인다[.]|[가-힣]한다[.]|[가-힣]된다[.]|[가-힣]있다[.]|[가-힣]없다[.]|답하시오|하시오|구하시오|나타내시오|서술하시오|논술하시오|증명하시오)/g);
  const sentenceCount = sentenceMatches ? sentenceMatches.length : 0;

  // 학문 용어 카운트
  const termsFound = new Set();
  for (const t of ACADEMIC_TERMS) {
    if (stem.includes(t)) termsFound.add(t);
  }
  const termCount = termsFound.size;

  // 소문항의 지문 참조 어구
  const refCount = REFERENCE_PHRASES.filter(p => body.includes(p)).length;

  // N 채점 (v5.1 튜닝)
  let N = 0;
  if (stem.length < 100) N = 0;  // 짧은 발문만
  else if (sentenceCount <= 2 && termCount === 0) N = 0;
  else if (sentenceCount <= 3 && termCount <= 1) N = 1;
  else if (sentenceCount <= 6 && termCount <= 3) N = 2;
  else if (sentenceCount >= 7 || termCount >= 4) N = 3;
  else N = 2;

  // 부스트: 참조 어구 or 정의 박스 있으면 mechanism-driven 신호
  const hasDefinitionBox = /\\begin\{tcolorbox\}[\s\S]*?정의/i.test(body);
  if ((refCount >= 2 || hasDefinitionBox) && N < 4) N++;

  return {
    score: Math.min(N, 4),
    detail: `문장 ${sentenceCount} · 학문용어 ${termCount} · 지문참조 ${refCount} · 정의박스 ${hasDefinitionBox ? 'O' : 'X'}`,
    flag: N === 4 ? 'SEMANTIC_JUDGE' : null,
  };
}

// ═══════════════════════════════════════════════════════════════════
// 축 L (Layer Coupling 0~3)
// ═══════════════════════════════════════════════════════════════════

// v5.1 튜닝: 소문항 참조 어구 사전 대폭 확장 (실제 어구 감지)
// 핵심: (1)·(2)의 뒤에 오는 명사를 폭넓게 매칭
const REFERENCE_TO_PREV = [
  // (1)의 XXX (모든 뒷 명사 포괄)
  /\(1\)\s*의\s*[가-힣A-Za-z]+/,
  // (2)의 XXX
  /\(2\)\s*의\s*[가-힣A-Za-z]+/,
  // (1)에서 구한 / 유도한 / 보인
  /\(1\)\s*에서\s*(?:구한|유도한|보인|얻은|주어진)/,
  /\(2\)\s*에서\s*(?:구한|유도한|보인|얻은|주어진)/,
  // (1)을 / (1)를 이용·활용·적용
  /\(1\)\s*(?:을|를)\s*(?:이용|활용|적용|사용)/,
  /\(2\)\s*(?:을|를)\s*(?:이용|활용|적용|사용)/,
  // (1)로부터·(2)로부터
  /\(1\)\s*로부터|\(2\)\s*로부터/,
  // 앞에서·위에서 참조
  /앞에서\s*(?:구한|유도한|보인|얻은|주어진|정의한)/,
  /위에서\s*(?:구한|유도한|보인|얻은|주어진|정의한)/,
  /앞의?\s*(?:결과|방정식|부등식|조건|값|방법|식|정의|논증|풀이|자취|관계식)/,
  // 조건 (가)(나)(다) 참조
  /조건\s*\((?:가|나|다|라|마)\)/,
];

function scoreL(slot) {
  const body = slot.body;
  // 소문항 순차 매칭 — (1) 첫 등장 → 그 뒤 (2) 첫 등장 → 그 뒤 (3) 첫 등장
  // (2)(3) 이후 나오는 \textbf{(1)}·\textbf{(2)}는 참조이지 delimiter 아님
  const findFirst = (num, after = -1) => {
    const re = new RegExp(`\\\\textbf\\{\\(${num}\\)\\}`, 'g');
    for (const m of body.matchAll(re)) {
      if (m.index > after) return m.index;
    }
    return -1;
  };
  const p1 = findFirst(1);
  if (p1 === -1) {
    return { score: 0, detail: '소문항 (1) 미검출', flag: null };
  }
  const p2 = findFirst(2, p1);
  const p3 = findFirst(3, p2);
  const subParts = [];
  if (p1 !== -1) subParts.push(body.substring(p1, p2 !== -1 ? p2 : body.length));
  if (p2 !== -1) subParts.push(body.substring(p2, p3 !== -1 ? p3 : body.length));
  if (p3 !== -1) subParts.push(body.substring(p3));

  if (subParts.length < 2) {
    return { score: 0, detail: '소문항 (1)(2)(3) 미검출', flag: null };
  }

  // (2), (3) 발문에서 앞 소문항 참조 어구 카운트
  let refCount = 0;
  let structRefCount = 0;
  for (let i = 1; i < subParts.length; i++) {
    const sub = subParts[i];
    // \textbf{(1)} 참조 (본문에 앞 소문항 인용)
    const textbfRefs = sub.match(/\\textbf\{\(\d+\)\}/g) || [];
    refCount += textbfRefs.length;
    // (1)의 XXX / (2)를 이용 등 (delimiter 없는 참조)
    for (const ref of REFERENCE_TO_PREV) {
      if (ref.test(sub)) refCount++;
    }
    // 구조적 재사용 명시
    if (/방정식|부등식|공통 ?현|좌표|자취|조건|값|개수|결과/i.test(sub) && textbfRefs.length > 0) {
      structRefCount++;
    }
  }

  // L 채점 (v5.1 튜닝)
  let L = 0;
  if (subParts.length <= 1) L = 0;
  else if (refCount === 0 && structRefCount === 0) L = 0;
  else if (refCount === 1 && structRefCount === 0) L = 1;
  else if (refCount >= 2 && structRefCount === 0) L = 2;
  else if (structRefCount >= 2) L = 3;
  else L = 2;

  return {
    score: L,
    detail: `소문항 ${subParts.length} · 참조 ${refCount} · 구조 재사용 ${structRefCount}`,
    flag: null,
  };
}

// ═══════════════════════════════════════════════════════════════════
// 축 T (Translation Insight 0~3) — 반자동 (semantic 요구)
// ═══════════════════════════════════════════════════════════════════

// v5.1 튜닝: 표준 공식 · mechanism 신호 대폭 확장
const STANDARD_FORMULA_SIGNALS = [
  /원의? ?방정식/, /표준형/, /거리 ?공식/, /기울기/, /직선의? ?방정식/,
  /중점 ?공식/, /내분점 ?공식/, /외분점 ?공식/, /근의? ?공식/,
  /점과 ?직선 ?사이 ?거리/, /평행이동/, /대칭이동/,
  /합집합/, /교집합/, /차집합/, /여집합/, /부분집합/,
  /필요조건/, /충분조건/, /필요충분/,
];

const MECHANISM_TRANSLATION_SIGNALS = [
  // 물리 mechanism → 수학
  /닮음.*좌표|평행사변형.*링크|비율.*좌표 ?대응|사도기.*좌표|팬터그래프/,
  /반사.*법선|입사각.*반사각.*좌표|거울.*좌표|반사판.*좌표/,
  /굴절.*좌표|굴절률.*좌표/,
  /공통현.*좌표.*유도|공통외접선.*좌표.*유도|공통내접선.*좌표.*유도/,
  // 공학 mechanism
  /관절.*좌표|forward.*kinematics|inverse.*kinematics|자유도.*좌표/,
  /기지국.*원|수신기.*원.*교점|삼각측량.*좌표/,
  // 천문 mechanism
  /케플러.*원|궤도.*방정식|위성.*궤도.*좌표/,
  /태양.*지구.*달.*좌표|개기월식.*좌표|일식.*좌표/,
  // 수학적 mechanism 통찰
  /초점.*접선.*자취|directrix|preimage.*자취/,
  /envelope|포락선|contact/,
  /매개변수.*소거.*자취|자취.*방정식.*유도/,
  // 좌표 대응 유도 서술
  /좌표.*대응.*유도|좌표.*변환.*유도|정의.*방정식.*유도/,
];

function scoreT(slot) {
  const body = slot.body;
  // 표준 공식 시그널
  const stdCount = STANDARD_FORMULA_SIGNALS.filter(re => re.test(body)).length;
  // Mechanism 번역 시그널
  const transCount = MECHANISM_TRANSLATION_SIGNALS.filter(re => re.test(body)).length;

  let T = 0;
  if (transCount >= 2) T = 3;
  else if (transCount >= 1) T = 2;
  else if (stdCount >= 2) T = 1;
  else T = 0;

  return {
    score: T,
    detail: `표준 공식 시그널 ${stdCount} · 번역 시그널 ${transCount}`,
    flag: 'SEMANTIC_JUDGE',  // T는 정규식 판정 불가 — 의미를 읽고 판정해야 하는 축
  };
}

// ═══════════════════════════════════════════════════════════════════
// 축 H (Hint Exposure Penalty 0~3)
// ═══════════════════════════════════════════════════════════════════

function scoreH(slot, answerValues) {
  const body = slot.body;
  // 그림 tex 안의 숫자 라벨·좌표 추출
  // TikZ 좌표: (숫자, 숫자) 패턴
  const tikzMatch = body.match(/\\begin\{tikzpicture\}[\s\S]*?\\end\{tikzpicture\}/g) || [];
  const figureNumbers = new Set();
  const figureCoords = new Set();

  for (const tikz of tikzMatch) {
    // \node ... at (x, y) {label} — 라벨 추출
    const nodeMatches = tikz.matchAll(/\\node[^{]*at\s*\(([^)]+)\)\s*\{([^}]*)\}/g);
    for (const n of nodeMatches) {
      const coordText = n[1];
      const labelText = n[2];
      // 좌표 (숫자, 숫자)
      const coordMatch = coordText.match(/(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)/);
      if (coordMatch) figureCoords.add(`(${coordMatch[1]},${coordMatch[2]})`);
      // 라벨 안의 숫자
      const labelNums = labelText.match(/-?\d+(?:\.\d+)?/g) || [];
      for (const n of labelNums) figureNumbers.add(n);
    }
    // \draw ... circle (r) — 반지름
    const circleMatches = tikz.matchAll(/circle\s*\((\d+(?:\.\d+)?)\)/g);
    for (const c of circleMatches) figureNumbers.add(c[1]);
  }

  // 답 값과의 교집합
  const slotAns = answerValues.get(slot.num) || new Set();
  const overlapNums = [...figureNumbers].filter(n => slotAns.has(n));

  // 특정 좌표 라벨 (정답 좌표 형태) 노출 여부
  const coordLabelExposed = figureCoords.size > 0 && slotAns.size > 0;

  let H = 0;
  if (overlapNums.length >= 2) H = 3;
  else if (overlapNums.length === 1 && coordLabelExposed) H = 3;
  else if (overlapNums.length === 1) H = 2;
  else if (figureCoords.size >= 2) H = 1;
  else H = 0;

  return {
    score: H,
    detail: `그림 숫자 라벨 ${figureNumbers.size}개 · 좌표 라벨 ${figureCoords.size}개 · 답값 중복 ${overlapNums.length}개`,
    flag: H >= 2 ? 'RED' : (H === 1 ? 'YELLOW' : null),
  };
}

// ═══════════════════════════════════════════════════════════════════
// 축 R (Rigor 0~5) — 5 서브축
// ═══════════════════════════════════════════════════════════════════

// 🔴 2026-07-30 세션 104 — 서술 규약과의 충돌 해소
//
// 종전 패턴은 `필요충분`·`유일성`·`판정`·`MECE` 같은 **한자어 formal 어구**를 찾았다.
// 그런데 우리 답지 정책([[feedback_no_formal_soltitle_terms]]·[[feedback_solution_writing_principles]])은
// 바로 그 어구를 **RED 로 금지**하고 "책 말투의 자연 한국어"를 강제한다.
// 결과: **서술 규약을 지킬수록 R 이 0 이 되는** 정면 충돌이었다.
//   실측 — 답지 전체에서 `유일` 0회 · `경우로 나` 0회. #10(케이스 3분류)·#17(부호 논증) 모두 R=0.
//
// 수정: 자연 한국어 register 로 신호를 재작성한다.
//       느슨하게 만들어 항상 걸리면(거짓 GREEN) 반대 방향 실패이므로, 논증 어구에 한정한다.
// 또한 R 은 본질적으로 의미 축이므로 청사진 semantic_judge 로 덮어쓸 수 있다(아래 applyJudge).
const RIGOR_SIGNALS = {
  exist: [/존재(?:한다|하는|하지|함|조건)|있음을|생기지 ?않|나타나지 ?않|이 ?아니므로|되지 ?않는다/],
  unique: [/유일|오직|하나뿐|서로 ?다르|모두 ?다르|중복.*없|겹치지 ?않/],
  iff: [/필요충분|대우|역(?:이|은|도).*(?:참|거짓|성립)|때에만|경우에만|⟺|⇔|와 ?같다\./],
  boundary: [/경계|제외|배제|포함되지 ?않|포함하지 ?않|등호.*(?:성립|포함|제외)|안에 ?있|위에 ?있다/],
  case: [/경우.*(?:나누|분류|생각|따져)|\(i\)|\(ii\)|[두세네] ?가지 ?경우|각각의 ?경우|[두세네] ?경우/],
};

function scoreR(slot, answerBody) {
  const body = slot.body + (answerBody || '');
  const subScores = {};
  for (const [sub, patterns] of Object.entries(RIGOR_SIGNALS)) {
    subScores[sub] = patterns.some(re => re.test(body)) ? 1 : 0;
  }
  const R_total = Object.values(subScores).reduce((a, b) => a + b, 0);

  return {
    score: R_total,
    subs: subScores,
    detail: `exist ${subScores.exist} · unique ${subScores.unique} · iff ${subScores.iff} · boundary ${subScores.boundary} · case ${subScores.case}`,
    flag: null,
  };
}

// ═══════════════════════════════════════════════════════════════════
// 축 F (Faithfulness 0~3) — 학문적 정확성 (인간 검토 필수)
// ═══════════════════════════════════════════════════════════════════

// v5.1 튜닝: 학문 정확성 신호 확장
const APPROXIMATION_MARKERS = [
  /근사할 ?수 ?있|근사한다|이상적 ?조건|이상적인|단순화|편의상|가정하|가정한다/,
  /간주한다|간주하자|여긴다|여기자|본다|보자/,
  /무시한다|무시할 ?수 ?있/,
];

// mechanism 정의·서술이 정확·상세한 지문 신호
const MECHANISM_DETAIL_MARKERS = [
  /원리에 ?의하여|원리로부터|원리에 ?따라|정리에 ?의하여/,
  /즉,\s*[^.]{20,}\.\s/,  // "즉, ~ 이다." 형태의 정의 서술
  /만족시킨다|만족시키면|성립한다|성립하면/,
  /정의된다|정의한다/,
];

// 🔴 축 F 재정의 v5.3 (2026-07-30 세션 105) — **감점 전용**
//
//   왜 바꾸는가 (실측): 청사진 semantic_judge 에서 F 가 #1~#16 전부 2, #17 만 3 이었다.
//     why 의 근거도 전부 같은 문구("발문 일의적"·"서술 정확") — 즉 「결함 없음 = 2」 기본값이었다.
//     폐해 두 가지:
//       (a) 변별력 0 — 16슬롯이 같은 값이면 그 축은 슬롯을 구별하지 못한다
//       (b) 밴드 숨은 하향 — 전 슬롯에 +2 를 균등 가산하므로 밴드 6/12/18/24/30 이
//           실질 4/10/16/22/28 로 내려간 것과 같다
//
//   근본 원인: 「발문이 정확하고 일의적이다」는 **모든 정상 문항의 기본 요건**이다.
//     기본 요건에 가점을 주면 전 슬롯이 같은 값을 받는다. 축 설계 오류다.
//
//   재정의: **F = 감점 크기** (0 = 정확·정상 · 1~3 = 결함 크기). composite 에서 뺀다.
//     이 설계가 종전 마스터 기각 사유 두 건을 동시에 해소한다 —
//       ✗ "무지문 F=0" → 무지문이 항상 쉽다는 함의 : F 가 가점이 아니므로 불리해지지 않는다
//       ✗ "축에서 제외" → 기준 2원화 : 지문/무지문 구분 없이 「정확성」 단일 기준이다
//     지문형의 「학문적 충실 + 새 원리 학습」은 F 가 아니라 축 N(Narrative Depth) 이 담당한다.
//
//   🔴 「부정확함」을 정규식으로 판정할 수 없다. 기본값 0 을 두고 결함이 있을 때만
//      semantic_judge 로 감점을 기록한다 (why 필수).
function scoreF(slot) {
  const body = slot.body;
  const hasApprox = APPROXIMATION_MARKERS.some(re => re.test(body));
  const detailCount = MECHANISM_DETAIL_MARKERS.filter(re => re.test(body)).length;
  const termCount = ACADEMIC_TERMS.filter(t => body.includes(t)).length;

  return {
    score: 0,   // 감점 없음이 기본. 결함은 semantic_judge 로만 기록한다
    detail: `감점 없음 (기본) · 참고: 학문용어 ${termCount} · 근사명시 ${hasApprox ? 'O' : 'X'} · 상세서술 ${detailCount}`,
    flag: 'PENALTY_AXIS',
  };
}

// ═══════════════════════════════════════════════════════════════════
// 축 E (Efficient Constraints 0~3)
// ═══════════════════════════════════════════════════════════════════

function scoreE(slot) {
  const body = slot.body;
  // 조건 카운트: (가)(나)(다) 조건 + \begin{conditions} 안의 항목
  const abcMatch = body.match(/\((?:가|나|다|라|마)\)/g) || [];
  const condCount = abcMatch.length;

  // 조건 재사용: 소문항 (2)(3)에서 조건 언급 횟수
  const parts = body.split(/\\textbf\{\((\d+)\)\}/);
  let condReuseCount = 0;
  for (let i = 3; i < parts.length; i += 2) {  // subParts 인덱스 1 이상 (즉 (2), (3))
    const sub = parts[i + 1] || '';
    if (/조건 ?\((?:가|나|다|라)\)|조건.*이용|조건.*따라/.test(sub)) condReuseCount++;
  }

  let E = 0;
  if (condCount === 0) E = 0;
  else if (condCount >= 3 && condReuseCount >= 2) E = 3;
  else if (condCount >= 2 && condReuseCount >= 1) E = 2;
  else if (condCount >= 2) E = 1;
  else E = 0;

  return {
    score: E,
    detail: `조건 ${condCount}개 · 재사용 언급 ${condReuseCount}회`,
    flag: null,
  };
}

// ═══════════════════════════════════════════════════════════════════
// 축 P (Predictive Resistance 0~3) — 예측 저항성
// ═══════════════════════════════════════════════════════════════════

// v5.1 튜닝: 표준 유형 신호 대폭 확장 (bank/유형카탈로그 반영)
const STANDARD_TYPE_SIGNALS = [
  // GM 표준
  /두 ?원.*교점/, /두 ?원.*만나/, /공통현/, /공통(?:내|외)접선/,
  /원과 ?직선.*접|접선의? ?기울기|접점/,
  /무게중심/, /내분점|외분점/,
  /최대.*최소|최댓값.*최솟값|둘레.*최소|거리.*최소|거리.*최대/,
  /넓이의? ?최댓값|넓이의? ?최솟값/,
  /평행이동/, /대칭이동/, /y=x.*대칭|x축.*대칭|y축.*대칭/,
  /수직인 ?직선|평행한 ?직선/,
  // ST 표준
  /집합.*원소 ?합/, /부분집합.*개수/, /여집합/, /교집합|합집합|차집합/,
  /명제.*참|명제.*거짓|명제.*역|명제.*이|명제.*대우/,
  /벤 ?다이어그램/,
  // 발문 어구
  /값을?\s*구하시오/, /개수를?\s*구하시오/, /방정식을?\s*구하시오/,
  /범위를?\s*구하시오/, /좌표를?\s*구하시오/,
];

// 재구조화 시그널 (문제 구조 재구축 필요)
const RESTRUCTURING_SIGNALS = [
  /좌표화/, /좌표평면.*모델링/, /수학.*번역/, /좌표.*대응.*유도/,
  /새로운.*정의|낯선.*정의|낯선 ?용어/,
  /직접.*정의한|본 ?문제.*정의|이 ?문제에서.*정의|위와 ?같이 ?정의/,
  // mechanism 이해 요구
  /원리를?\s*이용|정의를?\s*이용|정리를?\s*이용/,
  /닮음.*이용|비율.*이용/,
  // 정의 박스 언어
  /``.*''.*이라 ?한다|.*''라 ?한다|정의한다/,
  // 지문에서 새 개념 도입
  /A_\{[^}]+\}|A_?\(\d/,  // A_(a,b) 같은 첨자 정의
  /X\s*=\s*\{|Y\s*=\s*\{/,  // X, Y 새 집합 정의
];

function scoreP(slot) {
  const body = slot.body;
  const stdCount = STANDARD_TYPE_SIGNALS.filter(re => re.test(body)).length;
  const restrCount = RESTRUCTURING_SIGNALS.filter(re => re.test(body)).length;

  let P;
  if (restrCount >= 2) P = 3;
  else if (restrCount >= 1 && stdCount <= 1) P = 2;
  else if (stdCount === 0) P = 2;  // 표준 유형 신호 없음 = 낯선 유형
  else if (stdCount === 1) P = 1;
  else P = 0;  // 표준 유형 시그널 2개 이상 = 즉시 식별

  return {
    score: P,
    detail: `표준 유형 시그널 ${stdCount} · 재구조화 시그널 ${restrCount}`,
    flag: 'SEMANTIC_JUDGE',
  };
}

// ═══════════════════════════════════════════════════════════════════
// depth_score (기존 v3.4 산식, 단순화 버전)
// ═══════════════════════════════════════════════════════════════════

function estimateDepthScore(slot) {
  // 소문항 개수 × 배점 대비 대략 산정 (휴리스틱)
  // 실제는 insight-depth-check.mjs 결과 활용
  const point = slot.point;
  const partCount = (slot.body.match(/\\textbf\{\(\d+\)\}/g) || []).length;
  if (partCount >= 3 && point >= 7) return 8;
  if (partCount >= 3 && point >= 5) return 7;
  if (partCount === 2) return 6;
  if (point >= 6) return 6;
  if (point >= 4) return 5;
  return 4;
}

// ═══════════════════════════════════════════════════════════════════
// composite 계산 + 등급
// ═══════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════
// 의미 축 판정값 로딩 (청사진.yaml · 2026-07-30 세션 104 신설)
// ═══════════════════════════════════════════════════════════════════
//
// T·F·P 는 정규식 판정이 불가능한 의미 축이다. 도구의 휴리스틱 값은 **하한선**일 뿐
// composite 를 확정할 수 없다. 그렇다고 매번 사람이 표를 다시 만들면 기록이 남지 않고
// 회차 간 비교도 불가능해진다.
//
// 그래서 판정값을 청사진.yaml 에 적고 도구가 읽게 한다:
//
//   semantic_judge:
//     judged_by: claude
//     judged_at: 2026-07-30
//     slots:
//       16: {T: 3, F: 2, P: 3, why: "장치 mechanism → 닮음변환 좌표 대응 재구조화"}
//
// 판정값이 있으면 그 값이 우선하고 flag 는 JUDGED 로 바뀐다.
// 없으면 종전처럼 휴리스틱 + SEMANTIC_JUDGE 플래그가 유지된다.
//
// 🔴 `why` 없이 숫자만 적는 것을 금지한다 — 근거 없는 판정은 재검토가 불가능하다.
const judgeIdx = args.findIndex(a => a === '--청사진' || a === '--blueprint');
let blueprintFile = judgeIdx > -1 ? args[judgeIdx + 1] : null;

// 🔴 자동 탐색 (2026-07-30 세션 105) — 묵시적 열화 차단
//    종전: --청사진 을 빠뜨리면 판정값 없이 휴리스틱만으로 그럴듯한 composite 를 내고
//    경고가 없었다. 실측에서 #16 이 판정 포함 36 → 판정 누락 22 로 나왔는데도 조용했다.
//    이제 문제 파일 옆의 청사진.yaml 을 자동으로 찾고, 그래도 없으면 크게 경고한다.
if (!blueprintFile) {
  const sib = path.join(path.dirname(problemFile), '청사진.yaml');
  if (fs.existsSync(sib)) blueprintFile = sib;
}
const JUDGE = loadSemanticJudge(blueprintFile);
const JUDGE_MISSING = JUDGE.size === 0;

function loadSemanticJudge(file) {
  const map = new Map();
  if (!file || !fs.existsSync(file)) return map;
  const text = fs.readFileSync(file, 'utf8');

  // 라인 단위로 semantic_judge 블록을 잘라낸다.
  // (정규식 lookahead 로 블록 끝을 잡으려다 JS 에 없는 \Z 를 써서 실패한 적 있음 — 2026-07-30)
  const lines = text.split(/\r?\n/);
  const start = lines.findIndex(l => /^semantic_judge:/.test(l));
  if (start === -1) return map;
  const collected = [];
  for (let i = start + 1; i < lines.length; i++) {
    const l = lines[i];
    if (l.trim() === '' || /^\s/.test(l) || /^\s*#/.test(l)) { collected.push(l); continue; }
    break;   // 들여쓰기 없는 새 최상위 키 → 블록 끝
  }
  const block = [null, collected.join('\n')];

  // slots: 아래 "  16: {T: 3, F: 2, P: 3, why: "..."}" 형태를 읽는다
  const re = /^\s+(\d+):\s*\{([^}]*)\}/gm;
  for (const m of block[1].matchAll(re)) {
    const num = parseInt(m[1], 10);
    const inner = m[2];
    const pick = (k) => {
      const mm = inner.match(new RegExp(`\\b${k}\\s*:\\s*(\\d+)`));
      return mm ? parseInt(mm[1], 10) : null;
    };
    const why = (inner.match(/why\s*:\s*["']([^"']*)["']/) || [])[1] || '';
    // R·E 도 판정 대상이다 (R 은 신호 검출기가 있으나 하한선일 뿐, E 는 조건-소문항
    // 매핑이 필요해 정규식으로 불가). 적지 않으면 휴리스틱 값이 그대로 쓰인다.
    // 🔴 축 M (수학적 깊이) — v5.4. 휴리스틱이 없다. 판정 전용.
    //    지문·소문항·조건박스·계단식을 전부 벗겨낸 뒤 남는 수학의 실체
    //    🔴 v5.4 (2026-07-31) — 0~3 → **0~5** 로 확장 (가중 ×2 유지).
    //       0~2 는 도구 수준, 3~5 는 **구성 겹수**(자리를 몇 겹 세워야 셈이 시작되는가)로 가른다.
    //       종전 3(정점)이 세 요건을 묶어 놓고 세는 법이 없어 상단 54%가 3에 몰렸다.
    //    🔴 채점은 3인 평균. 채점자 간 흔들림 ±1 칸이 밴드 간격보다 크다.
    //    미판정이면 composite 에서 제외하고 M_UNJUDGED 로 표시한다 (0 으로 가정하지 않는다).
    map.set(num, { T: pick('T'), F: pick('F'), P: pick('P'), R: pick('R'), E: pick('E'), M: pick('M'), why });
  }
  return map;
}

function applyJudge(slotNum, axis, heuristic) {
  const j = JUDGE.get(slotNum);
  if (!j || j[axis] === null || j[axis] === undefined) return heuristic;
  if (!j.why) {
    // 근거 없는 판정은 채택하지 않는다
    return { ...heuristic, flag: 'JUDGE_NO_REASON' };
  }
  return { score: j[axis], detail: `판정: ${j.why}`, flag: 'JUDGED' };
}

// ── v5.4 상수 (bank/schema.md §2.16.2b) ────────────────────────────
// 🔴 v5.4 (2026-07-31 세션 106) — N·L·H·F 가 composite 에서 빠졌다. 아래 두 상수의 의미가 바뀐다.
const STRUCTURAL_CAP = 6;   // ⚠️ 사문화. N+2L 이 composite 밖이라 상한을 걸 대상이 없다 (기술자용 계산만 잔존)
// 🔴 M_PREMIUM_MIN 재보정 필요 — M 이 0~3 에서 0~5 로 바뀌었으므로 하한 2 의 뜻이 달라졌다.
//    구 척도의 2(심화)는 신 척도로 대략 2~3 에 해당한다. 새 표본 채점 전까지는 2 를 유지하되
//    이 값으로 premium 을 박탈·부여한 판정은 잠정으로 본다.
const M_PREMIUM_MIN = 2;    // premium 하한. M ≤ 1 이면 composite 무관하게 박탈
// 🔴 판정 축 비중 상한 — 2026-07-30 (세션 105) 재보정
//   종전 0.40 은 구조를 확인하지 않고 정한 값이었고 실측에서 17슬롯 중 13슬롯이 발동했다.
//   76% 에서 울리는 경고는 신호가 아니다. 회차 전체 실측:
//     측정축(depth + min(N+2L,6) + R − H) 합계 150 · 판정축(2T + E + 2P) 합계 133
//     → 구조적 판정 비중 47.0%
//   즉 40% 는 현행 축 구성으로 **도달 불가능한 값**이었다. 판정을 억지로 낮추지 않는 한
//   만족시킬 수 없으므로, 그 상한은 오히려 점수 맞추기를 유도한다.
//   → 0.60 (판정이 측정의 1.5배를 넘는 지점) 으로 올린다.
//   🔴 근본 해법은 상한 조정이 아니라 **측정 축 강화**다. 수학을 재는 축이
//      depth(라벨 기반)와 R(키워드)뿐이고 둘 다 내용을 보지 않는다. 별도 과제.
const JUDGE_SHARE_MAX = 0.60;

// 🔴 밴드 재보정 대기 (2026-07-30 세션 105)
//    이 밴드의 유일한 캘리브레이션 근거였던 bank/anchors/v51-anchor-WBG-2025M.md 가
//    (1) 삭제된 파생 폴더 파생 = 1차 소스 위반 (2) 마스터 미승인 으로 무효 판정되었다.
//    원본 PDF 재채점으로 신규 앵커를 도출하기 전까지 절대 등급 판정은 유보한다.
//    유효한 것은 ① 슬롯 간 상대 순위 ② 축 M 게이트 뿐이다.
// 🔴🔴 v5.4 (2026-07-31 세션 106) — 등급 임계값이 **두 번째 이유로도 무효**가 됐다.
//    아래 임계표는 구 공식(N+2L+F+H 포함 · M 0~3)의 값 분포로 잡힌 것이다.
//    v5.4 는 4축을 빼고 M 을 0~5 로 늘렸으므로 composite 의 눈금 자체가 달라졌다.
//    → 새 표본 채점으로 분포를 다시 얻기 전까지 **절대 등급을 읽지 마라. 상대 순위만 쓴다.**
const BANDS_PROVISIONAL = true;
const BANDS = [
  { min: 30, grade: '★ 5 최상위', star: 5, premium: true },
  { min: 24, grade: '★ 5', star: 5, premium: false },
  { min: 18, grade: '★ 4', star: 4, premium: false },
  { min: 12, grade: '★ 3', star: 3, premium: false },
  { min: 6, grade: '★ 2', star: 2, premium: false },
  { min: -Infinity, grade: '★ 1', star: 1, premium: false },
];

function computeComposite(scores) {
  const { depth, N, L, T, H, R, F, E, P, M } = scores;

  // 🔴🔴 v5.4 (2026-07-31 세션 106 · 마스터 확정) — 포장 축 4개를 composite 에서 제외한다.
  //   마스터: "소문항·지문 밀도 이런 게 수학적 깊이랑 상관이 있을 리가 없어."
  //   이는 축 M 신설 근거와 같다 — "지문 있음 → N, 3소문항 → 2L → 9점 자동.
  //   내용이 중학 수준이어도 이 구조만 갖추면 점수가 나온다." 그 포장이 정확히 N·L 이다.
  //   실측: 우리 시험지 34슬롯에서 L 만 척도 전 구간이 작동했는데, 잘 작동한 것이 아니라
  //   소문항을 세 개 달면 값이 오르기 때문이었다. H 는 34/34 전량 0 (게이트가 이미 차단).
  //   🔴 폐기가 아니라 자리 이동 — N·L 은 문항 형식 기술자, H·F 는 검사 항목으로 계속 쓴다.
  const structuralRaw = N + 2 * L;   // 기술자용으로 계산만 유지 (composite 에는 넣지 않는다)

  // 축 M (수학적 깊이) — v5.4 에서 0~5 로 확장. 미판정이면 0 으로 가정하지 않고 항에서 제외한다
  const mTerm = (M === null || M === undefined) ? 0 : 2 * M;

  const composite = depth + 2 * T + R + E + 2 * P + mTerm;
  return {
    composite,
    structuralCapped: false,   // v5.4 — 상한 대상 자체가 composite 밖으로 나갔다
    structuralRaw,
    // 포장·메타 판정 축의 기여 비중 (M 제외 — M 은 수학 실체에 대한 판정이므로 지배 허용)
    // 포장·메타 판정 축의 기여 비중 — F 는 감점 축이므로 분자에서 제외 (v5.3),
    //   M 도 제외 (수학 실체에 대한 판정이므로 지배 허용)
    judgeShare: composite > 0 ? (2 * T + E + 2 * P) / composite : 0,
  };
}

function gradeComposite(composite, M) {
  const band = BANDS.find(b => composite >= b.min);
  const mKnown = M !== null && M !== undefined;
  // 🔴 축 M veto — 단조 강화 전용. premium 을 뺏을 뿐 주지 않는다
  const mVeto = band.premium && (!mKnown || M < M_PREMIUM_MIN);
  return {
    grade: mVeto ? `★ 5 (premium 박탈 · M=${mKnown ? M : '미판정'})` : band.grade,
    star: band.star,
    premium: band.premium && !mVeto,
    mVeto,
    provisional: BANDS_PROVISIONAL,
  };
}

// ═══════════════════════════════════════════════════════════════════
// 슬롯 분석
// ═══════════════════════════════════════════════════════════════════

function analyzeSlot(slot) {
  // 답지에서 해당 슬롯 풀이 추출 (R 축용)
  let answerSlotBody = '';
  if (answerContent) {
    const re = new RegExp(`\\\\(?:dm)?soltitle\\{${slot.num}\\}([\\s\\S]*?)(?=\\\\(?:dm)?soltitle\\{|\\\\end\\{document\\})`);
    const m = answerContent.match(re);
    if (m) answerSlotBody = m[1];
  }

  const N = scoreN(slot);
  const L = scoreL(slot);
  const H = scoreH(slot, answerValues);
  const R = scoreR(slot, answerSlotBody);
  const E = scoreE(slot);

  // ── 의미 축 T·F·P ────────────────────────────────────────────────────
  // 정규식으로 판정 불가한 축. 휴리스틱 값은 하한선일 뿐이므로,
  // 청사진.yaml 의 semantic_judge 블록에 판정값이 있으면 **그 값이 우선**한다.
  // (2026-07-30 세션 104 신설 — 판정을 기록으로 남겨 재계산을 자동화)
  const T = applyJudge(slot.num, 'T', scoreT(slot));
  const F = applyJudge(slot.num, 'F', scoreF(slot));
  const P = applyJudge(slot.num, 'P', scoreP(slot));
  // R 도 본질적으로 의미 축이다(논증의 엄밀성). 자연 한국어 신호로 하한선을 잡되,
  // 청사진에 판정값이 있으면 그것이 우선한다. E 도 조건 매핑이 필요해 판정 대상에 둔다.
  const Rj = applyJudge(slot.num, 'R', R);
  const Ej = applyJudge(slot.num, 'E', E);
  // 축 M — 판정 전용 (휴리스틱 없음)
  const j = JUDGE.get(slot.num);
  const Mj = (j && j.M !== null && j.M !== undefined && j.why)
    ? { score: j.M, detail: `판정: ${j.why}`, flag: 'JUDGED' }
    : { score: null, detail: '미판정 — 「벗겨보기」 절차 필요', flag: 'M_UNJUDGED' };

  const depth = estimateDepthScore(slot);

  const comp = computeComposite({
    depth,
    N: N.score, L: L.score, T: T.score, H: H.score, R: Rj.score,
    F: F.score, E: Ej.score, P: P.score, M: Mj.score,
  });
  const composite = comp.composite;

  const grade = gradeComposite(composite, Mj.score);

  return {
    num: slot.num,
    point: slot.point,
    depth,
    N, L, T, H, R: Rj, F, E: Ej, P, M: Mj,
    composite,
    structuralRaw: comp.structuralRaw,
    structuralCapped: comp.structuralCapped,
    judgeShare: comp.judgeShare,
    grade,
    flags: [
      Mj.flag === 'M_UNJUDGED' && 'M:M_UNJUDGED',
      grade.mVeto && 'M:PREMIUM_VETO',
      comp.structuralCapped && `STRUCT:CAPPED(${comp.structuralRaw}→${STRUCTURAL_CAP})`,
      comp.judgeShare > JUDGE_SHARE_MAX && `JUDGE_SHARE:${(comp.judgeShare * 100).toFixed(0)}%`,
      N.flag && `N:${N.flag}`,
      L.flag && `L:${L.flag}`,
      T.flag && `T:${T.flag}`,
      H.flag && `H:${H.flag}`,
      Rj.flag && `R:${Rj.flag}`,
      F.flag && `F:${F.flag}`,
      Ej.flag && `E:${Ej.flag}`,
      P.flag && `P:${P.flag}`,
    ].filter(Boolean),
  };
}

// ═══════════════════════════════════════════════════════════════════
// 실행
// ═══════════════════════════════════════════════════════════════════

const results = slots
  .filter(s => targetSlot === null || s.num === targetSlot)
  .map(analyzeSlot);

if (jsonOut) {
  console.log(JSON.stringify(results, null, 2));
  process.exit(0);
}

// --axis 모드: 단일 축만 표시
if (targetAxis && targetAxis !== 'COMPOSITE') {
  const axisNames = {
    N: 'Narrative Depth', L: 'Layer Coupling', T: 'Translation Insight',
    H: 'Hint Exposure Penalty', R: 'Rigor', F: 'Faithfulness',
    E: 'Efficient Constraints', P: 'Predictive Resistance',
  };
  console.log(`\n📊 축 ${targetAxis} (${axisNames[targetAxis]}) 채점 결과`);
  console.log(`   파일: ${path.basename(problemFile)}\n`);
  console.log(`슬롯  ${targetAxis}   detail`);
  console.log('─'.repeat(80));
  for (const r of results) {
    const ax = r[targetAxis];
    console.log(`${String(r.num).padEnd(4)}  ${String(ax.score).padEnd(3)} ${ax.detail}${ax.flag ? ` [${ax.flag}]` : ''}`);
  }
  process.exit(0);
}

// 콘솔 출력
console.log(`\n📊 v5.1 8축 정밀 스코어 검증 결과`);
console.log(`   문제 파일: ${path.basename(problemFile)}`);
if (answerFile) console.log(`   답지 파일: ${path.basename(answerFile)}`);
console.log(`   슬롯 수: ${results.length}\n`);

console.log(`${'슬롯'.padEnd(4)} ${'점'.padEnd(3)} ${'depth'.padEnd(6)} ${'N'.padEnd(2)} ${'L'.padEnd(2)} ${'T'.padEnd(2)} ${'H'.padEnd(2)} ${'R'.padEnd(2)} ${'F'.padEnd(2)} ${'E'.padEnd(2)} ${'P'.padEnd(2)} ${'comp'.padEnd(4)} ${'등급'.padEnd(10)} flags`);
console.log('─'.repeat(90));

let redCount = 0, yellowCount = 0, humanCount = 0;

for (const r of results) {
  const flagsStr = r.flags.length ? r.flags.join(',') : '';
  if (r.flags.some(f => f.includes('RED'))) redCount++;
  if (r.flags.some(f => f.includes('YELLOW'))) yellowCount++;
  if (r.flags.some(f => f.includes('SEMANTIC_JUDGE'))) humanCount++;

  console.log(
    `${String(r.num).padEnd(4)} ${String(r.point).padEnd(3)} ${String(r.depth).padEnd(6)} ${String(r.N.score).padEnd(2)} ${String(r.L.score).padEnd(2)} ${String(r.T.score).padEnd(2)} ${String(r.H.score).padEnd(2)} ${String(r.R.score).padEnd(2)} ${String(r.F.score).padEnd(2)} ${String(r.E.score).padEnd(2)} ${String(r.P.score).padEnd(2)} ${String(r.composite).padEnd(4)} ${r.grade.grade.padEnd(10)} ${flagsStr}`
  );
}

console.log('─'.repeat(90));

// 요약
const premiumCount = results.filter(r => r.grade.premium).length;
const star5Count = results.filter(r => r.grade.star === 5).length;
const star4Count = results.filter(r => r.grade.star === 4).length;
const avgComp = (results.reduce((s, r) => s + r.composite, 0) / results.length).toFixed(1);

console.log(`\n📈 요약`);
console.log(`   ★ 5 최상위 (composite ≥ 30): ${premiumCount}슬롯`);
console.log(`   ★ 5 슬롯: ${star5Count}슬롯`);
console.log(`   ★ 4 슬롯: ${star4Count}슬롯`);
console.log(`   평균 composite: ${avgComp}`);

if (redCount || yellowCount || humanCount) {
  console.log(`\n🚦 플래그`);
  if (redCount) console.log(`   🔴 RED: ${redCount}슬롯 (답 노출 등)`);
  if (yellowCount) console.log(`   🟡 YELLOW: ${yellowCount}슬롯`);
  if (humanCount) console.log(`   🔵 SEMANTIC_JUDGE: ${humanCount}슬롯 (T·F·P — 정규식 판정 불가 · 의미 판정 필요)`);
}

// 세부 detail (--verbose 시)
if (args.includes('--verbose') || args.includes('-v')) {
  console.log(`\n🔬 슬롯별 세부 채점`);
  for (const r of results) {
    console.log(`\n[슬롯 ${r.num}] composite = ${r.composite} → ${r.grade.grade}`);
    console.log(`   depth: ${r.depth}`);
    console.log(`   N (${r.N.score}): ${r.N.detail}`);
    console.log(`   L (${r.L.score}): ${r.L.detail}`);
    console.log(`   T (${r.T.score}): ${r.T.detail}`);
    console.log(`   H (${r.H.score}): ${r.H.detail}`);
    console.log(`   R (${r.R.score}): ${r.R.detail}`);
    console.log(`   F (${r.F.score}): ${r.F.detail}`);
    console.log(`   E (${r.E.score}): ${r.E.detail}`);
    console.log(`   P (${r.P.score}): ${r.P.detail}`);
    if (r.flags.length) console.log(`   플래그: ${r.flags.join(', ')}`);
  }
}

process.exit(redCount > 0 ? 1 : 0);
