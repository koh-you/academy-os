#!/usr/bin/env node
// 통찰 조합 참신도 스코어 (v2.1, schema v3.10 §2.14) — origin_verified 세이프가드
// 2026-07-06 마스터 확립 (v4) — 학교 자체 완성도 검증 오리지널 감점 완화
//
// v2.1 변경 (v2.0 → v2.1):
//   - 슬롯 .tex 내 `% origin_verified: X` 주석 파싱
//   - school_original 시 count=0이어도 novelty_score = 2 (경고 아닌 경계 인정)
//   - commercial_source: 기본 U자 판정
//   - unverified: v2.0 판정 그대로 (count=0 → -1 RED)
//   - `% signal_ref: [P5, P2]` 주석도 파싱 (선택)
//
// v2.0 변경 (v1.0 → v2.0):
//   - count=0 (시판 표본 어디에도 없는 오리지널) → 🔴 -1점 (RED 위험)
//   - 스위트 스팟 = count 3~9 (시판 정점·킬러) → 4점
//   - count 10~29 (준정점) → 3점
//   - "시판·기출에 실재하는 조합만 이식" 원칙
//
// 사용법: node scripts/insight-novelty-check.mjs <test.tex> [--unit CM1-EQ]
//
// 참신도 곡선 U자 (v3.9):
//   ≥ 100문 → 0 (흔함)
//   30~99   → 1 (중간)
//   10~29   → 3 (참신 준정점)
//   3~9     → 4 (스위트 스팟)
//   1~2     → 3 (경계, 이식 or 검토)
//   0       → -1 🔴 (오리지널 위험 = 시험 대비 무관)
//
// 회차 목표 (25문 시험지):
//   최소: novelty_total ≥ 30 / 권장: ≥ 45 / 정점: ≥ 60
//   ★ 5 슬롯 novelty_score < 0 → RED
//   novelty_score < 0 슬롯 회차당 ≤ 1
//
// 주의: 본 도구는 *휴리스틱*이며 정밀 판정은 problem-review v3.9 에이전트 호출 필수.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.join(__dirname, '..');
const COMBO_DB = path.join(PROJECT_ROOT, 'data', 'insight-combo-frequency.json');

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Usage: node scripts/insight-novelty-check.mjs <test.tex> [--unit CM1-EQ]');
  process.exit(2);
}

const file = args[0];
const unitFlag = args.find(a => a.startsWith('--unit='))?.split('=')[1] ||
                 (args.includes('--unit') ? args[args.indexOf('--unit') + 1] : null);

if (!fs.existsSync(file)) {
  console.error(`⚠️  파일 없음: ${file}`);
  process.exit(2);
}
if (!fs.existsSync(COMBO_DB)) {
  console.error(`⚠️  조합 DB 없음: ${COMBO_DB}. 먼저 아래 명령 실행:`);
  console.error(`   node -e "const j=JSON.parse(require('fs').readFileSync('data/all-premium-samples.json'));..."`);
  process.exit(2);
}

const content = fs.readFileSync(file, 'utf8');
const comboDB = JSON.parse(fs.readFileSync(COMBO_DB, 'utf8'));

// 파일명에서 단원 추론
function inferUnit(p) {
  if (unitFlag) return unitFlag;
  const s = p.replace(/\\/g, '/');
  if (/CM1[-_]?PL|다항식/.test(s)) return 'CM1-PL';
  if (/CM1[-_]?EQ|방정식|부등식/.test(s)) return 'CM1-EQ';
  if (/CM1[-_]?CB|경우의수|순열|조합/.test(s)) return 'CM1-CB';
  if (/CM1[-_]?MX|행렬/.test(s)) return 'CM1-MX';
  if (/CM2[-_]?GM|도형/.test(s)) return 'CM2-GM';
  if (/CM2[-_]?ST|집합|명제/.test(s)) return 'CM2-ST';
  if (/CM2[-_]?FN|함수/.test(s)) return 'CM2-FN';
  if (/CM2[-_]?RF|유리|무리/.test(s)) return 'CM2-RF';
  return null;
}

const unitCode = inferUnit(file);
if (!unitCode) {
  console.error(`⚠️  단원 추론 실패. --unit CM1-EQ 명시 요망.`);
  process.exit(2);
}

const unitCombos = comboDB.combos[unitCode] || {};

// 통찰 유형 신호 (insight-depth-check와 동일 세트)
const INSIGHT_TYPE_SIGNALS = [
  { types: ['SYM', 'MI', 'BW'], pattern: /자기참조|self-?reference|\bf\([^)]*\)\s*=\s*[a-z]\b|매개변수.*다층|매개변수.*동시.*등장/i },
  { types: ['XU'], pattern: /도형.*↔.*대수|행렬.*수열|단원 결합|I-XU|cross[- ]?unit|두 단원/i },
  { types: ['MI', 'CON'], pattern: /격자점|격자\s*위|분할.*카운트|정수.*자유도/i },
  { types: ['RT'], pattern: /반례|counter[- ]?example/i },
  { types: ['CON'], pattern: /세 조건.*모두.*만족|조건.*동시.*만족.*개수|3 ?조건.*결합/i },
  { types: ['BW'], pattern: /역방향.*추적|결과.*조건.*역추적|결과.*원인/i },
  { types: ['XU'], pattern: /라틴 ?사각|3차원 ?격자|군론/i },
  { types: ['EQV', 'CON'], pattern: /항등식.*제곱|완전제곱.*강제/i },
  { types: ['MI', 'CON', 'EQV'], pattern: /반복 나눗셈|다층 나눗셈/i },
  { types: ['CON', 'EQV', 'MI', 'BW'], pattern: /다중 ?다항식.*동시|미지 ?다항식.*동시.*결정/i },
  // depth 2 신호
  { types: ['MI'], pattern: /\|.*\|\s*=.*?케이스|절댓값.*분기|두 ?경우.*분기/i },
  { types: ['RT'], pattern: /도형.*그래프.*변환|식.*도형.*환원|기하.*대수/i },
  { types: ['RT'], pattern: /합성식|치환.*t\s*=/i },
  { types: ['EQV'], pattern: /케일리.?해밀턴|cayley|hamilton/i },
  { types: ['PD'], pattern: /주기.*발견|cycle.*detect|A\^?\{?n\}?.*?주기/i },
  { types: ['EQV'], pattern: /근과 ?계수.*부호|판별식.*분기/i },
  { types: ['CON'], pattern: /조건.*두 ?개.*만족|2 ?조건.*결합/i },
];

function extractSlots(text) {
  const slots = [];
  const problemRegex = /\\begin\{problem\}\{(\d+)\}\{s\}([\s\S]*?)\\end\{problem\}/g;
  for (const m of text.matchAll(problemRegex)) {
    const body = m[2];
    const pointMatch = body.match(/\\pointbadge\{([\d.]+)\}/);
    // v2.1: slot-level metadata 주석 파싱
    const originMatch = body.match(/%\s*origin_verified\s*:\s*(unverified|commercial_source|school_original)/);
    const signalRefMatch = body.match(/%\s*signal_ref\s*:\s*\[([^\]]+)\]/);
    slots.push({
      num: parseInt(m[1]),
      body,
      point: pointMatch ? parseFloat(pointMatch[1]) : 0,
      origin_verified: originMatch ? originMatch[1] : 'unverified',
      signal_ref: signalRefMatch
        ? signalRefMatch[1].split(',').map(s => s.trim().replace(/['"]/g, ''))
        : [],
    });
  }
  return slots;
}

const slots = extractSlots(content);
if (slots.length === 0) {
  console.error('⚠️  problem 환경 발견 0개');
  process.exit(2);
}

function extractTypes(body) {
  const types = new Set();
  for (const sig of INSIGHT_TYPE_SIGNALS) {
    if (sig.pattern.test(body)) {
      for (const t of sig.types) types.add(t);
    }
  }
  return [...types].sort();
}

function noveltyFromCount(count) {
  // v2.0 U자 곡선 (schema v3.9 §2.14)
  if (count >= 100) return { score: 0, label: '흔함' };
  if (count >= 30) return { score: 1, label: '중간' };
  if (count >= 10) return { score: 3, label: '참신 준정점' };
  if (count >= 3) return { score: 4, label: '스위트 스팟' };
  if (count >= 1) return { score: 3, label: '경계 (극희귀)' };
  return { score: -1, label: '🔴 오리지널 위험' };  // count=0
}

function analyzeSlot(slot) {
  const types = extractTypes(slot.body);
  const combo = types.join('·');
  if (types.length === 0) {
    return { types, combo: '', count: null, score: null, label: '통찰 미검출', origin: slot.origin_verified };
  }
  const count = unitCombos[combo] || 0;
  let noveltyInfo = noveltyFromCount(count);

  // v3.10 §2.14 origin_verified 세이프가드
  if (count === 0 && slot.origin_verified === 'school_original') {
    noveltyInfo = { score: 2, label: '학교 자체 검증 (경계)' };
  }

  return {
    types, combo, count, ...noveltyInfo,
    origin: slot.origin_verified,
    signal_ref: slot.signal_ref,
  };
}

console.log(`🌱 통찰 조합 참신도 스코어 (v2.1 — schema v3.10 §2.14 + origin_verified)`);
console.log(`📄 ${file}: ${slots.length}문`);
console.log(`🎯 단원: ${unitCode} | 시판 표본 조합 DB: ${Object.keys(unitCombos).length}개 조합`);
console.log(`📐 U자 곡선: ≥100→0 · 30~99→1 · 10~29→3 · 3~9→4(스위트) · 1~2→3 · 0→-1 (오리지널)`);
console.log(`🏫 origin_verified: [SO]=school_original (count=0 시 2점 완화) · [CS]=commercial_source · 미표시=unverified\n`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('#  | 배점 | 통찰 조합               | 시판 매칭 | score | 판정 | 원본 | 세이프');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

let noveltyTotal = 0;
let noveltyCount = 0;
let star5Red = [];
let originalRisk = [];
let schoolOriginalSlots = [];   // v3.10: school_original 인정 슬롯
let insightUndetected = [];

for (const slot of slots) {
  const r = analyzeSlot(slot);
  const numStr = String(slot.num).padStart(2);
  const ptStr = slot.point ? String(slot.point).padEnd(4) : '  - ';
  const comboStr = (r.combo || '(통찰 미검출)').padEnd(22);
  const countStr = r.count === null ? '  -' : String(r.count).padStart(4);
  const scoreStr = r.score === null ? ' -' : (r.score >= 0 ? ` ${r.score}` : String(r.score));
  const labelStr = r.label.padEnd(14);
  const originTag = r.origin === 'school_original' ? '[SO]' :
                    r.origin === 'commercial_source' ? '[CS]' : '    ';
  const isStar5 = slot.point >= 4.6;
  const isStar4Plus = slot.point >= 4.0;
  let flag = '';

  if (r.score === null) {
    if (isStar4Plus) {
      flag = ' 🟡 통찰 미검출';
      insightUndetected.push({ num: slot.num, point: slot.point });
    }
  } else if (r.origin === 'school_original' && r.count === 0) {
    // v3.10: 학교 자체 검증 완화 통과
    flag = ' ✅ SO 검증';
    schoolOriginalSlots.push({ num: slot.num, combo: r.combo });
  } else if (r.score < 0) {
    flag = isStar5 ? ' 🔴 RED (★ 5 오리지널 위험)' : ' 🟡 오리지널 (회차 세이프가드 카운트)';
    originalRisk.push({ num: slot.num, combo: r.combo, isStar5 });
    if (isStar5) star5Red.push({ num: slot.num, combo: r.combo, count: r.count, reason: '오리지널' });
  } else if (isStar5 && r.score <= 1) {
    flag = ' 🔴 RED (★ 5 조합 흔함)';
    star5Red.push({ num: slot.num, combo: r.combo, count: r.count, reason: '흔함' });
  } else if (r.score >= 3) {
    flag = ' ✨';
  }

  console.log(`${numStr} | ${ptStr}| ${comboStr}| ${countStr}     | ${scoreStr}    | ${labelStr}${originTag}${flag}`);

  if (r.score !== null) {
    noveltyTotal += r.score;
    noveltyCount++;
  }
}

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

console.log(`📈 회차 종합 (v3.10 §2.14 U자 곡선 + origin_verified):`);
console.log(`   통찰 검출 슬롯: ${noveltyCount} / ${slots.length}`);
console.log(`   novelty_total = ${noveltyTotal} (검출된 ${noveltyCount}슬롯 합계)`);
console.log(`   최소 목표 (≥ 30): ${noveltyTotal >= 30 ? '✅ 통과' : '🔴 미달'}`);
console.log(`   권장 목표 (≥ 45): ${noveltyTotal >= 45 ? '✅ 통과' : '🟡 미달'}`);
console.log(`   정점 목표 (≥ 60): ${noveltyTotal >= 60 ? '✅ 통과' : '⭐ 미달'}`);
console.log(`   오리지널 위험 슬롯: ${originalRisk.length} (회차 세이프가드 ≤ 1, 초과 시 RED)`);
console.log(`   [SO] 학교 자체 검증 슬롯: ${schoolOriginalSlots.length} (회차 세이프가드 ≤ 2, 초과 시 RED)`);

if (schoolOriginalSlots.length > 2) {
  console.log(`\n🔴 RED: school_original 슬롯 ${schoolOriginalSlots.length}문 > 2 (회차 세이프가드 초과):`);
  console.log(`   오리지널 비중 과다. 시판·기출 이식 슬롯 비중 확대 필요.`);
}

if (originalRisk.length > 1) {
  console.log(`\n🔴 RED: 오리지널 위험 슬롯 ${originalRisk.length}문 (회차 세이프가드 초과):`);
  console.log(`   시판·기출·수능에 없는 조합. 시험 대비 훈련 교재 목적 이탈.`);
  for (const s of originalRisk) {
    const tag = s.isStar5 ? ' ★ 5' : '';
    console.log(`   #${s.num}${tag}: 조합 [${s.combo}] = 시판 표본 0문 (이식 원본 확보 필요)`);
  }
}

if (insightUndetected.length > 0) {
  console.log(`\n🟡 통찰 미검출된 ★ 4·5 슬롯 (${insightUndetected.length}문):`);
  console.log(`   본문에 통찰 신호가 명시적으로 드러나지 않음. 라벨링 재검토 or 발문 명시화 필요.`);
  for (const s of insightUndetected.slice(0, 10)) {
    console.log(`   #${s.num} (${s.point}점)`);
  }
}

if (star5Red.length > 0) {
  console.log(`\n🔴 RED: ★ 5 슬롯 참신도 조건 위반 (§2.14):`);
  for (const s of star5Red) {
    console.log(`   #${s.num}: 조합 [${s.combo}] = ${s.count}문 · 사유: ${s.reason}`);
  }
  console.log(`   → 시판·기출 상위권 정점 문항의 조합(count 3~30 스위트 스팟) 이식 필요`);
}

console.log(`\n=== 단일 출처 ===`);
console.log(`schema.md v3.10 §2.14 통찰 조합 참신도 + origin_verified 세이프가드`);
console.log(`데이터: data/insight-combo-frequency.json (1,326문 시판 표본 기반)`);
console.log(`v3.10 변경: school_original 예외 (count=0이어도 완성도 검증 시 2점 완화)`);
console.log(`주의: 본 도구는 휴리스틱이며 정밀 판정은 problem-review v3.10 에이전트 호출`);

process.exit(
  noveltyTotal < 30 ||
  star5Red.length > 0 ||
  originalRisk.length > 1 ||
  schoolOriginalSlots.length > 2 ||
  insightUndetected.length >= 5 ? 2 : 0
);
