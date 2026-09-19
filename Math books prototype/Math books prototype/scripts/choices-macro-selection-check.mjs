#!/usr/bin/env node
// 보기 매크로 선택 정합 검사 — v1.0
// 2026-07-26 세션 93 신설 (재구축 C · Task #16 choicesii 남발 계기)
//
// 배경:
//   세션 93 Task #16 · 20문 중 17문이 choicesii (2-2-1 · 3줄) 사용
//   Q01 순수 숫자 5개 ({$3$}{$4$}{$5$}{$6$}{$7$}) 도 choicesii 사용 → 3줄 wrap (choices 한 줄 정답)
//   마스터 지적: "왜 다 3줄이지? 공간 제약이 있을 때만 다음 줄로"
//
// 단일 출처: bank/시리즈-조판-지침-매핑.md §3 exam 시리즈 보기 매크로 4종 선택 규칙
//   - choices    : 각 원소 char ≤ 3 · 짧은 숫자·짧은 식 · 한 줄
//   - choices32  : 각 원소 char 4~10 · 좌표·분수 · 3-2 두 줄
//   - choicesii  : 각 원소 char 11~25 · 중간~긴 · 2-2-1 (3줄)
//   - choicesv   : 각 원소 char > 25 or 폭 초과 · 긴 부등식 · 5줄 세로
//
// 원리:
//   1. \begin{choices*} 블록 검출 (choices·choices32·choicesii·choicesv)
//   2. 각 원소 char 길이 측정 (수식 문법 최소 정규화)
//   3. 실사용 매크로 vs 권장 매크로 비교
//   4. 불일치 시 RED (choicesii 남발 등)
//
// 사용법:
//   node scripts/choices-macro-selection-check.mjs <문제.tex>
// 반환 코드: 0 = GREEN / 1 = RED (오용) / 2 = 오용 (인자 오류)

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length !== 1) {
  console.error('Usage: node scripts/choices-macro-selection-check.mjs <문제.tex>');
  console.error('  반환 코드: 0 = GREEN / 1 = RED / 2 = 오용');
  process.exit(2);
}

const texPath = args[0];
if (!fs.existsSync(texPath)) {
  console.error(`❌ 파일 없음: ${texPath}`);
  process.exit(2);
}

const raw = fs.readFileSync(texPath, 'utf8');

// 원소 char 길이 측정 (수식 delimiter·명령 최소 정규화)
function measureLength(content) {
  let text = content.trim();
  // $...$ delimiter 제거
  text = text.replace(/\$([^$]*)\$/g, '$1');
  // 공백 제거
  text = text.replace(/\s+/g, '');
  // \dfrac{a}{b} · \tfrac · \frac → max(a,b) + 1
  text = text.replace(/\\(dfrac|tfrac|frac)\{([^}]*)\}\{([^}]*)\}/g, (_, __, num, den) =>
    'F'.repeat(Math.max(num.length, den.length) + 1)
  );
  // \sqrt{x} → x + 2
  text = text.replace(/\\sqrt\{([^}]*)\}/g, (_, inner) => 'S'.repeat(inner.length + 2));
  // \mathrm{X} → X (mathrm는 단순 텍스트)
  text = text.replace(/\\mathrm\{([^}]*)\}/g, '$1');
  // 남은 \명령 → 1자로 카운트 (empirical)
  text = text.replace(/\\[a-zA-Z]+/g, 'X');
  // 특수 기호 (± · \pm 같은 것 이미 X로 치환됨)
  return text.length;
}

// 권장 매크로 판정
function recommend(maxLen, sumLen, hasFrac, hasSqrt) {
  // choicesv 필수 (긴 부등식·폭 초과)
  if (maxLen > 25) return 'choicesv';
  // choicesii (중간~긴)
  if (maxLen >= 11) return 'choicesii';
  // choices32 (좌표·분수)
  if (maxLen >= 4 || hasFrac) return 'choices32';
  // choices (짧은 숫자·식)
  return 'choices';
}

// \begin{choices...} 블록 파싱
const blocks = [];
const beginRegex = /\\begin\{(choices|choices32|choicesii|choicesv)\}([\s\S]*?)\\end\{\1\}/g;
let match;
while ((match = beginRegex.exec(raw)) !== null) {
  const macroName = match[1];
  const content = match[2];
  const startIdx = match.index;
  const beforeStart = raw.slice(0, startIdx);
  const lineNum = beforeStart.split('\n').length;

  // 원소 추출: {...} 5개
  const items = [];
  let depth = 0;
  let itemStart = -1;
  for (let i = 0; i < content.length; i++) {
    const ch = content[i];
    if (ch === '{') {
      if (depth === 0) itemStart = i + 1;
      depth++;
    } else if (ch === '}') {
      depth--;
      if (depth === 0 && itemStart !== -1) {
        items.push(content.slice(itemStart, i));
        itemStart = -1;
      }
    }
  }

  if (items.length !== 5) {
    blocks.push({
      lineNum,
      macroName,
      itemCount: items.length,
      error: `보기 원소 수 ${items.length}개 (5개 필수)`,
    });
    continue;
  }

  const lengths = items.map((it) => measureLength(it));
  const maxLen = Math.max(...lengths);
  const sumLen = lengths.reduce((a, b) => a + b, 0);
  const hasFrac = items.some((it) => /\\d?frac/.test(it));
  const hasSqrt = items.some((it) => /\\sqrt/.test(it));

  const recommended = recommend(maxLen, sumLen, hasFrac, hasSqrt);

  blocks.push({
    lineNum,
    macroName,
    itemCount: 5,
    lengths,
    maxLen,
    sumLen,
    hasFrac,
    hasSqrt,
    recommended,
    match: macroName === recommended,
    items: items.map((it) => it.replace(/\s+/g, ' ').slice(0, 30)),
  });
}

// 리포트
console.log(`\n📋 보기 매크로 선택 정합 — ${texPath}`);
console.log(`   총 보기 블록: ${blocks.length}개\n`);

let redCount = 0;
let yellowCount = 0;

for (const b of blocks) {
  if (b.error) {
    console.log(`🔴 [line ${b.lineNum}] ${b.macroName} · ${b.error}`);
    redCount++;
    continue;
  }

  const status = b.match ? '✅' : '🔴';
  const arrow = b.match ? '' : ` → 권장: ${b.recommended}`;
  console.log(`${status} [line ${b.lineNum}] ${b.macroName}${arrow}`);
  console.log(`   각 원소 char: [${b.lengths.join(', ')}] · max=${b.maxLen} · sum=${b.sumLen}${b.hasFrac ? ' · frac' : ''}${b.hasSqrt ? ' · sqrt' : ''}`);

  if (!b.match) {
    console.log(`   원소 미리보기: ${b.items.map((it, i) => `${i + 1}) ${it}`).join(' · ')}`);
    // choicesii → choices : 심각 오용 (3줄 → 1줄)
    if (b.macroName === 'choicesii' && b.recommended === 'choices') {
      console.log(`   🔴 심각: 순수 숫자 5개인데 3줄 wrap · 마스터 지적 재발 (Task #16 계기)`);
      redCount++;
    } else if (b.macroName === 'choicesv' && (b.recommended === 'choices' || b.recommended === 'choices32')) {
      console.log(`   🔴 심각: 짧은 원소인데 5줄 세로 · 공간 낭비`);
      redCount++;
    } else {
      yellowCount++;
    }
  }
  console.log('');
}

// 요약
console.log('=== 요약 ===');
console.log(`전체: ${blocks.length}개 · GREEN: ${blocks.length - redCount - yellowCount}개 · YELLOW: ${yellowCount}개 · RED: ${redCount}개`);

if (redCount === 0 && yellowCount === 0) {
  console.log('✅ GREEN — 모든 보기 매크로 정합 · 청사진 §3 규정 준수');
  process.exit(0);
}

if (redCount > 0) {
  console.log('\n🔴 RED — 매크로 오용 감지 · 정정 필수');
  console.log('   단일 출처: bank/시리즈-조판-지침-매핑.md §3 exam 시리즈 보기 매크로 4종');
  console.log('   판정 우선순위: choices → choices32 → choicesii → choicesv (짧은 것 우선)');
  process.exit(1);
}

console.log('\n🟡 YELLOW — 매크로 개선 권장 · 마스터 판단');
process.exit(0);
