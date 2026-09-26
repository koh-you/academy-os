#!/usr/bin/env node
// blueprint-content-analyzer — 청사진·문항 내용 심층 감지 도구 (방안 K)
// v1.0 (2026-07-13 · 세션 39)
//
// 목적:
//   방안 A~J에도 잔존한 fake GREEN 결함 근본 대응.
//   각 슬롯 유형 자동 분류 (Basic/Standard/Applied/Deep) · star 상한 대조.
//   정의박스 위장 감지 (교과 표준 개념 회고 정의박스 = 마스터 지시 위반).
//   청사진 declared composite 부풀림 감지.
//
// 사용법:
//   node scripts/blueprint-content-analyzer.mjs <청사진.yaml> [<문제.tex>]
//
// 감지 축:
//   K1: 유형별 star 상한 (Basic ≤ 2, Standard ≤ 4, Applied ≤ 5, Deep 제한 없음)
//   K2: 정의박스 위장 (Basic·Standard·Applied 유형에 정의박스 있으면 RED)
//   K3: 교과 표준 개념 회고 감지 (정의박스 내용 키워드 스캔)
//
// 관련: bank/유형별-난이도-상한.md · policy-no-fake-premium
//
// 반환: 0 GREEN / 1 YELLOW / 2 RED / 3 오용

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Usage: node scripts/blueprint-content-analyzer.mjs <청사진.yaml> [<문제.tex>]');
  process.exit(3);
}
const [bpPath, probPath] = args;
if (!fs.existsSync(bpPath)) {
  console.error(`❌ 파일 없음: ${bpPath}`);
  process.exit(3);
}

// ── 유형 분류 키워드 사전 ─────────────────────────
const TYPE_KEYWORDS = {
  Basic: {
    keywords: [
      '거리', '중점', '내분점', '무게중심 좌표',
      '집합 연산', '여집합', '차집합', '드모르간', '부분집합의 개수',
      '단일 대칭', '단일 평행이동',
      '표준형 변환', '일반형',
      '접선의 방정식', '원 위 점 접선',
      '명제 대우', '역·이',
    ],
    max_star: 2,
  },
  Standard: {
    keywords: [
      '원의 접선', '외부 점 접선', '접선 길이',
      '평행이동+대칭이동 결합', '두 이동',
      '항상 지나는 점', '정점 통과',
      '수직이등분선',
      '부분집합 조건', '특정 원소 포함', '원소 배제',
      '진리집합', '조건의 필요', '충분조건',
    ],
    max_star: 4,
  },
  Applied: {
    keywords: [
      '두 원 만남', '정수 매개변수', '정수 개수',
      '자취', '자취의 방정식',
      '접선 다중', '기울기 조건',
      '필요·충분 다중', '다중 판정',
      '두 집합 원소 개수 최대·최소', 'M+m', 'M-m',
      '포함배제 원리',
      '다중 조건 결합',
    ],
    max_star: 5,
  },
  Deep: {
    keywords: [
      '지문형', '실생활', 'AR1', 'AR2', 'AR3',
      '다중 제약', '이중 대칭', '이중 이동',
      '역방향 결정',
      '팬터그래프', 'GPS', '삼변측량', '외심',
      '자취 결합', '위치관계 결합',
      '근축', 'radical axis',
    ],
    max_star: 5,
    can_star_premium: true,
  },
};

// ── 교과 표준 개념 회고 키워드 (정의박스 감지) ────
const TEXTBOOK_RECAP_KEYWORDS = [
  // 무게중심 관련 (확장)
  { keyword: '무게중심', reason: '무게중심 정의 · 교과 표준' },
  { keyword: '세 꼭짓점의 좌표', reason: '무게중심 공식 표현 · 교과 표준' },
  { keyword: '거리 공식', reason: '두 점 사이 거리 공식 · 교과 표준' },
  { keyword: '두 점 사이의 거리', reason: '거리 공식 정의 · 교과 표준' },
  { keyword: '내분점', reason: '내분점 공식 · 교과 표준' },
  { keyword: '외분점', reason: '외분점 공식 · 교과 표준' },
  { keyword: '중점', reason: '중점 공식 · 교과 표준' },
  // 집합 관련
  { keyword: '부분집합의 개수', reason: '부분집합 개수 2^n · 교과 표준' },
  { keyword: '부분집합의 개수', reason: '부분집합 개수 · 교과 표준' },
  { keyword: '조합의 수', reason: '조합 C(n,k) · 교과 표준' },
  { keyword: '드모르간', reason: '드모르간 법칙 · 교과 표준' },
  { keyword: '여집합의 정의', reason: '여집합 정의 · 교과 표준' },
  { keyword: '차집합의 정의', reason: '차집합 정의 · 교과 표준' },
  { keyword: '집합의 원소', reason: '집합 정의 · 교과 표준' },
  // 원 관련
  { keyword: '원 위의 점에서 접선', reason: '원 접선 공식 · 교과 표준' },
  { keyword: '접선의 조건', reason: '원-직선 접함 조건 · 교과 표준' },
  { keyword: '원과 직선의 접함', reason: '원-직선 접함 · 교과 표준' },
  { keyword: '중심에서 직선까지의 거리', reason: '점-직선 거리 공식 · 교과 표준' },
  // 명제 관련
  { keyword: '명제의 대우', reason: '명제 대우 · 교과 표준' },
  { keyword: '명제의 역', reason: '명제 역 · 교과 표준' },
  { keyword: '명제의 이', reason: '명제 이 · 교과 표준' },
  { keyword: '필요조건', reason: '필요조건 정의 · 교과 표준' },
  { keyword: '충분조건', reason: '충분조건 정의 · 교과 표준' },
  // 이동 관련
  { keyword: '대칭이동의 규칙', reason: '대칭이동 · 교과 표준' },
  { keyword: '평행이동의 규칙', reason: '평행이동 · 교과 표준' },
  { keyword: 'x축 대칭', reason: 'x축 대칭 · 교과 표준' },
  { keyword: 'y축 대칭', reason: 'y축 대칭 · 교과 표준' },
  { keyword: '원점 대칭', reason: '원점 대칭 · 교과 표준' },
  { keyword: 'y=x 대칭', reason: 'y=x 대칭 · 교과 표준' },
];

// ── 슬롯 파싱 (청사진 YAML) ──────────────────────
function parseSlots(src) {
  const slots = [];
  const lines = src.split('\n');
  let inSlots = false;
  let buf = [];

  const flush = () => {
    if (!buf.length) return;
    const raw = buf.join(' ');
    const nM = raw.match(/\bn:\s*(\d+)/);
    if (!nM) { buf = []; return; }
    const num = (name) => { const m = raw.match(new RegExp(`\\b${name}:\\s*(-?\\d+)`)); return m ? parseInt(m[1]) : null; };
    const str = (name) => { const m = raw.match(new RegExp(`\\b${name}:\\s*(?:"([^"]*)"|([A-Za-z][\\w-]*))`)); return m ? (m[1] !== undefined ? m[1] : m[2]) : ''; };
    const bool = (name) => /\bhas_definition_box:\s*true|\bhas_defbox:\s*true|\bhas_conditions:\s*true/.test(raw) && raw.match(new RegExp(`\\b${name}:\\s*(true|false)`)) && raw.match(new RegExp(`\\b${name}:\\s*(true|false)`))[1] === 'true';

    slots.push({
      n: parseInt(nM[1]),
      type: str('type'),
      answer: str('answer'),
      answerNote: str('answer_note'),
      narrativeTheme: str('narrative_theme'),
      narrativeLen: num('narrative_length_chars') || 0,
      primaryTool: str('primary_tool'),
      composite: num('composite'),
      star: num('star'),
      hasDefBox: /\bhas_definition_box:\s*true/.test(raw),
      hasConditions: /\bhas_conditions:\s*true/.test(raw),
      hasBogibox: /\bhas_bogibox:\s*true/.test(raw),
      raw,
    });
    buf = [];
  };

  for (const line of lines) {
    if (/^slots:\s*$/.test(line)) { inSlots = true; continue; }
    if (inSlots) {
      if (/^[a-zA-Z_]/.test(line) && !/^\s+/.test(line)) { flush(); inSlots = false; continue; }
      if (/^\s+-\s*\{/.test(line)) { flush(); buf = [line]; }
      else if (buf.length) buf.push(line);
    }
  }
  flush();
  return slots;
}

// ── 유형 자동 분류 ──────────────────────────────
function classifySlot(slot) {
  const text = (slot.type + ' ' + slot.answerNote + ' ' + slot.narrativeTheme).toLowerCase();
  // 우선순위: Deep > Applied > Standard > Basic
  for (const cls of ['Deep', 'Applied', 'Standard', 'Basic']) {
    const kw = TYPE_KEYWORDS[cls].keywords;
    for (const k of kw) {
      if (text.includes(k.toLowerCase())) {
        return { classification: cls, matched_keyword: k, max_star: TYPE_KEYWORDS[cls].max_star };
      }
    }
  }
  // 매칭 없으면 Standard 기본
  return { classification: 'Standard', matched_keyword: '(기본)', max_star: TYPE_KEYWORDS.Standard.max_star };
}

// ── 문제.tex에서 정의박스 내용 추출 ──────────────
function extractDefBoxContent(texSrc, slotN) {
  if (!texSrc) return null;
  const problemRegex = new RegExp(`\\\\begin\\{problem\\}\\{${slotN}\\}[\\s\\S]*?\\\\end\\{problem\\}`, 'g');
  const match = problemRegex.exec(texSrc);
  if (!match) return null;
  const problemContent = match[0];
  const defBoxRegex = /\[정의[\s\S]*?\\end\{tcolorbox\}/;
  const defBoxMatch = problemContent.match(defBoxRegex);
  return defBoxMatch ? defBoxMatch[0] : null;
}

// ── 교과 회고 감지 ──────────────────────────────
function detectTextbookRecap(defBoxContent, slot) {
  if (!defBoxContent) return null;
  // 정의박스 내용에서 회고 키워드 검색
  for (const rk of TEXTBOOK_RECAP_KEYWORDS) {
    if (defBoxContent.includes(rk.keyword) ||
        slot.type.includes(rk.keyword) ||
        slot.answerNote.includes(rk.keyword)) {
      return {
        violation: 'textbook-recap',
        keyword: rk.keyword,
        reason: rk.reason,
      };
    }
  }
  return null;
}

// ── 실행 ──────────────────────────────
const bpSrc = fs.readFileSync(bpPath, 'utf8');
const slots = parseSlots(bpSrc);
const texSrc = probPath && fs.existsSync(probPath) ? fs.readFileSync(probPath, 'utf8') : null;

console.log('🔍 blueprint-content-analyzer v1.0 (방안 K)');
console.log(`   청사진: ${bpPath}`);
if (texSrc) console.log(`   문제 tex: ${probPath}`);
console.log(`   슬롯: ${slots.length}개\n`);

const violations = [];

console.log('📊 유형 분류 + 정의박스 감지');
console.log('   #  | 유형       | 상한 | 청사진★ | defBox | 교과회고 | 판정');
console.log('   ───┼────────────┼─────┼────────┼────────┼─────────┼─────');

for (const s of slots) {
  const cls = classifySlot(s);
  const declaredStar = s.star || 0;
  const violateMax = declaredStar > cls.max_star;
  const defBoxContent = texSrc ? extractDefBoxContent(texSrc, s.n) : null;
  const recap = s.hasDefBox ? detectTextbookRecap(defBoxContent || (s.type + ' ' + s.answerNote), s) : null;
  const disguise = s.hasDefBox && cls.classification !== 'Deep';

  // v2.0 · 유형별 star 상한 폐기 (마스터 지시 2026-07-13)
  // 답변 방식별 star 상한 폐기 (동일 지시)
  // 교과 표준 개념 회고 정의박스만 RED
  let verdict = '✅';
  if (recap) {
    verdict = '🔴 교과회고';
    violations.push({ n: s.n, type: 'textbook-recap', keyword: recap.keyword, cls: cls.classification });
  }
  // disguise·violateMax 감지 폐기 (마스터 지시 원칙 반영)

  const recapMark = recap ? '🔴' : '—';
  const defBoxMark = s.hasDefBox ? 'O' : '—';
  console.log(`   ${String(s.n).padStart(2)} | ${cls.classification.padEnd(10)} | ${String(cls.max_star).padStart(3)} | ${String(declaredStar).padStart(6)} | ${defBoxMark.padEnd(6)} | ${recapMark.padEnd(7)} | ${verdict}`);
}

console.log('\n=== 감지 결과 ===');
const recapCount = violations.filter(v => v.type === 'textbook-recap').length;
console.log(`   🔴 교과 표준 개념 회고 정의박스: ${recapCount}건`);
console.log(`   (v2.0 · 유형별·답변방식별 star 상한 폐기 · 교과 회고만 감지)`);

if (violations.length > 0) {
  console.log('\n=== 정정 지시 ===');
  for (const v of violations) {
    console.log(`   #${v.n} · 교과 회고 "${v.keyword}" · 정의박스 제거 (마스터 지시)`);
  }
}

console.log('\n=== 관련 자원 ===');
console.log('   bank/문항-심층-설계-원칙.md');
console.log('   bank/세션39-6회-정밀-난이도-평가.md');
console.log('   policy-no-textbook-recap');

if (recapCount > 0) {
  console.log('\n❌ 교과 회고 정의박스 · 정정 의무 (마스터 지시)');
  process.exit(2);
}
console.log('\n✅ 정의박스 정합 · GREEN');
process.exit(0);
