#!/usr/bin/env node
// cross-round-text-similarity.mjs — 회차 간 텍스트 유사도 검출 v1.0 (2026-07-02)
// 마스터 지적 [[2026-06-25-자기복제-철저금지]] 보강 —
// cross-round-insight-check가 통찰 카드 태그로만 검사해서
// 문자 그대로 100% 동일 케이스(#18, #4, #19 등)를 놓친 결함 대응.
//
// 방법: 발문 텍스트 정규화 후 Jaccard(토큰) + Levenshtein(문자) 유사도 pairwise.
//       0.85+ RED / 0.60~0.85 YELLOW / <0.60 PASS.
//
// 사용법:
//   node scripts/cross-round-text-similarity.mjs <new.tex> <prev1.tex> [prev2.tex ...]
// 반환 코드: 0 = RED 없음 / 1 = RED 검출

import fs from 'fs';
import path from 'path';

// v1.1 (2026-07-02) — 임계값 엄격화 (마스터 지시). 시그니처 유사도 축까지 RED 검출.
const RED_THRESHOLD = 0.65;
const YELLOW_THRESHOLD = 0.45;

function usage() {
  console.error('사용법: node scripts/cross-round-text-similarity.mjs <new.tex> <prev1.tex> [prev2.tex ...]');
  console.error('       반환 코드: 0 = RED 없음 / 1 = RED 검출');
  process.exit(2);
}

if (process.argv.length < 4) usage();

const newFile = process.argv[2];
const prevFiles = process.argv.slice(3);

for (const f of [newFile, ...prevFiles]) {
  if (!fs.existsSync(f)) {
    console.error(`파일 없음: ${f}`);
    process.exit(2);
  }
}

// ────────── 슬롯 추출 + 텍스트 정규화 ──────────
function extractSlots(filepath) {
  const content = fs.readFileSync(filepath, 'utf8');
  const slots = new Map();

  const pattern = /\\begin\{problem\}\{(\d+)\}\{[a-z]\}([\s\S]*?)\\end\{problem\}/g;
  let m;
  while ((m = pattern.exec(content)) !== null) {
    const n = parseInt(m[1], 10);
    let text = m[2];

    // Remove pointbadge
    text = text.replace(/\\pointbadge\{[^}]*\}(\\par)?(\\smallskip)?/g, '');
    // Remove choices block
    text = text.replace(/\\begin\{choices\}[\s\S]*?\\end\{choices\}/g, '');
    // Remove center block (그림)
    text = text.replace(/\\begin\{center\}[\s\S]*?\\end\{center\}/g, '');
    // Remove tikzpicture block
    text = text.replace(/\\begin\{tikzpicture\}[\s\S]*?\\end\{tikzpicture\}/g, '');
    // Remove tabular block
    text = text.replace(/\\begin\{tabular\}[\s\S]*?\\end\{tabular\}/g, '');
    // Unwrap \cond{...} — keep content
    text = text.replace(/\\cond\{([^}]*)\}/g, '$1');
    // Unwrap \nob{...}
    text = text.replace(/\\nob\{([^}]*)\}/g, '$1');
    // Remove LaTeX comments
    text = text.replace(/%.*$/gm, '');
    // Collapse whitespace
    text = text.replace(/\s+/g, ' ').trim();

    slots.set(n, text);
  }

  return { file: path.basename(filepath), slots };
}

// ────────── 토큰화 ──────────
function tokenize(text) {
  // 한글 어절 + 숫자 + LaTeX 커맨드 + 수식 내 변수
  const tokens = [];
  // \command 패턴
  const re = /\\[a-zA-Z]+|[가-힣]+|[a-zA-Z]+|\d+|[+\-*/=<>≤≥±]/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    tokens.push(m[0]);
  }
  return tokens;
}

// ────────── Jaccard 유사도 ──────────
function jaccard(a, b) {
  const sa = new Set(a);
  const sb = new Set(b);
  const inter = new Set([...sa].filter(x => sb.has(x)));
  const union = new Set([...sa, ...sb]);
  if (union.size === 0) return 0;
  return inter.size / union.size;
}

// ────────── Levenshtein 정규화 유사도 ──────────
function levenshtein(a, b) {
  if (a === b) return 0;
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const dp = Array(b.length + 1).fill(0);
  for (let j = 0; j <= b.length; j++) dp[j] = j;
  for (let i = 1; i <= a.length; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = dp[j];
      dp[j] = a[i - 1] === b[j - 1]
        ? prev
        : 1 + Math.min(prev, dp[j], dp[j - 1]);
      prev = tmp;
    }
  }
  return dp[b.length];
}

function levSim(a, b) {
  const maxLen = Math.max(a.length, b.length);
  if (maxLen === 0) return 1;
  return 1 - levenshtein(a, b) / maxLen;
}

// ────────── 실행 ──────────
const newData = extractSlots(newFile);
const prevData = prevFiles.map(extractSlots);

console.log(`📄 신규 회차: ${newData.file} (${newData.slots.size}문)`);
for (const p of prevData) {
  console.log(`   비교 대상: ${p.file} (${p.slots.size}문)`);
}
console.log('');

const redFindings = [];
const yellowFindings = [];

for (const [n, newText] of newData.slots) {
  const newTokens = tokenize(newText);
  let bestMatch = null;
  let bestSim = 0;

  for (const p of prevData) {
    for (const [pn, prevText] of p.slots) {
      const prevTokens = tokenize(prevText);
      const jSim = jaccard(newTokens, prevTokens);
      const lSim = levSim(newText, prevText);
      const combSim = 0.5 * jSim + 0.5 * lSim;
      if (combSim > bestSim) {
        bestSim = combSim;
        bestMatch = { file: p.file, slot: pn, jaccard: jSim, lev: lSim, combined: combSim };
      }
    }
  }

  if (bestMatch && bestMatch.combined >= RED_THRESHOLD) {
    redFindings.push({ newSlot: n, ...bestMatch });
  } else if (bestMatch && bestMatch.combined >= YELLOW_THRESHOLD) {
    yellowFindings.push({ newSlot: n, ...bestMatch });
  }
}

// ────────── 보고 ──────────
if (redFindings.length > 0) {
  console.log(`🔴 강한 유사도 (자기복제) ${redFindings.length}건 (임계 ${RED_THRESHOLD})`);
  console.log('');
  for (const r of redFindings) {
    console.log(`  #${r.newSlot} ↔ ${r.file} #${r.slot}`);
    console.log(`     Jaccard: ${r.jaccard.toFixed(3)} · Levenshtein: ${r.lev.toFixed(3)} · 결합: ${r.combined.toFixed(3)}`);
  }
  console.log('');
}

if (yellowFindings.length > 0) {
  console.log(`🟡 약한 유사도 ${yellowFindings.length}건 (검토 권장, 임계 ${YELLOW_THRESHOLD}~${RED_THRESHOLD})`);
  console.log('');
  for (const y of yellowFindings) {
    console.log(`  #${y.newSlot} ↔ ${y.file} #${y.slot}`);
    console.log(`     Jaccard: ${y.jaccard.toFixed(3)} · Levenshtein: ${y.lev.toFixed(3)} · 결합: ${y.combined.toFixed(3)}`);
  }
  console.log('');
}

console.log('=== 단일 출처 ===');
console.log('bank/마스터-지적/2026-06-25-자기복제-철저금지.md');
console.log('scripts/cross-round-insight-check.mjs (통찰 카드 축)');
console.log('scripts/cross-round-text-similarity.mjs v1.0 (2026-07-02, 텍스트 유사도 축)');
console.log('');

if (redFindings.length > 0) {
  console.log(`❌ 빌드 차단: 🔴 강한 유사도 ${redFindings.length}건. 재출제 필요.`);
  process.exit(1);
} else if (yellowFindings.length > 0) {
  console.log(`⚠️  YELLOW ${yellowFindings.length}건. 검토 권장 (빌드는 통과).`);
  process.exit(0);
} else {
  console.log('✅ 텍스트 유사도 통과. 자기복제 0건.');
  process.exit(0);
}
