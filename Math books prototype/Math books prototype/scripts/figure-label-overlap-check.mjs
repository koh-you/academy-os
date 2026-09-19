#!/usr/bin/env node
// figure-label-overlap-check — Figure 라벨 겹침 정적 감지
// 2026-07-14 세션 37 Phase 1 · feedback_figure_design_system 규약 §1 자동화
//
// 목적:
//   Python matplotlib figure 소스에서 ax.text() 라벨의 위치·크기 추정
//   원(Circle)·rod(rectangle)·다른 라벨과 근접·겹침 감지
//   원 라벨은 bbox=white 배경 필수 (§1 규약)
//
// 검사 축:
//   L1. 원 라벨 (${C_1}$·${C_2}$ 등)에 bbox=... white 배경 유무
//   L2. 두 텍스트 라벨 간 유클리드 거리 < min_separation (기본 0.4)
//   L3. 텍스트 라벨이 Circle 중심에서 반지름 이내 위치 (원 안쪽에 있으면 겹침 가능)
//
// 한계:
//   - 실제 렌더링 없이 텍스트 크기·bbox 정밀 계산 불가
//   - 근사 감지만 (heuristic)
//   - 진짜 시각 검증은 pdftoppm + 사람 확인
//
// 사용법:
//   node scripts/figure-label-overlap-check.mjs <figure.py> [...]
//
// 반환: 0 GREEN / 1 RED / 2 오용

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Usage: node scripts/figure-label-overlap-check.mjs <figure.py> [...]');
  process.exit(2);
}

const MIN_SEPARATION = 0.4;      // 두 라벨 간 최소 거리 (data units)

let totalRed = 0;
let totalWarn = 0;

for (const file of args) {
  if (!fs.existsSync(file)) {
    console.error(`❌ 파일 없음: ${file}`);
    process.exit(2);
  }
  const src = fs.readFileSync(file, 'utf8');
  console.log(`\n🔍 ${file}`);

  // ── 1. ax.text() 호출 파싱 ────
  //   패턴: ax.text(x, y, 'text', ...) or ax.text(var[0], var[1], 'text', ...)
  //   숫자 좌표만 처리 (변수 참조는 skip)
  const texts = [];
  const textRe = /ax\.text\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*,\s*['"](.*?)['"]([^)]*)\)/g;
  let m;
  while ((m = textRe.exec(src)) !== null) {
    const x = parseFloat(m[1]);
    const y = parseFloat(m[2]);
    const label = m[3];
    const rest = m[4];
    const hasBbox = rest.includes('bbox=');
    texts.push({ x, y, label, hasBbox });
  }

  // ── 2. Circle 파싱 (숫자 중심만) ────
  const circles = [];
  const circleRe = /Circle\s*\(\s*\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\)\s*,\s*([\d.]+)/g;
  while ((m = circleRe.exec(src)) !== null) {
    circles.push({ cx: parseFloat(m[1]), cy: parseFloat(m[2]), r: parseFloat(m[3]) });
  }

  console.log(`   text ${texts.length}개 · Circle (숫자 중심) ${circles.length}개`);

  // ── 3. 두 라벨 간 겹침 감지 ────
  let overlapPairs = 0;
  for (let i = 0; i < texts.length; i++) {
    for (let j = i + 1; j < texts.length; j++) {
      const dx = texts[i].x - texts[j].x;
      const dy = texts[i].y - texts[j].y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < MIN_SEPARATION) {
        console.log(
          `   ⚠️  라벨 겹침 근접: "${texts[i].label}"(${texts[i].x},${texts[i].y}) ↔ "${texts[j].label}"(${texts[j].x},${texts[j].y}) · 거리 ${d.toFixed(2)}`
        );
        overlapPairs++;
      }
    }
  }
  if (overlapPairs === 0) console.log(`   ✅ 라벨 간 겹침 없음`);
  else totalWarn += overlapPairs;

  // ── 4. 원 라벨 bbox 규약 검사 ────
  const circleLabelPattern = /\$?C_?\d\$?|C_[A-Z]/;
  let circleLabelViolations = 0;
  for (const t of texts) {
    if (circleLabelPattern.test(t.label) && !t.hasBbox) {
      console.log(`   🔴 원 라벨 "${t.label}"(${t.x},${t.y}) · bbox=white 배경 없음`);
      circleLabelViolations++;
    }
  }
  if (circleLabelViolations === 0 && texts.some((t) => circleLabelPattern.test(t.label))) {
    console.log(`   ✅ 모든 원 라벨 bbox 있음`);
  }
  totalRed += circleLabelViolations;

  // ── 5. 라벨이 원 내부에 있는지 (근사) ────
  //    라벨 위치가 Circle 중심에서 반지름 이내 → 원 안쪽 (실선 겹칠 가능성)
  let labelsInCircle = 0;
  for (const t of texts) {
    for (const c of circles) {
      const d = Math.sqrt((t.x - c.cx) ** 2 + (t.y - c.cy) ** 2);
      if (d < c.r * 0.9) {
        console.log(
          `   ⚠️  라벨 "${t.label}"(${t.x},${t.y})이 원 중심(${c.cx},${c.cy}, r=${c.r}) 근처 내부에 있음 (거리 ${d.toFixed(2)})`
        );
        labelsInCircle++;
      }
    }
  }
  totalWarn += labelsInCircle;
}

console.log('\n=== 요약 ===');
console.log(`   RED: ${totalRed} · WARN: ${totalWarn}`);
console.log('\n=== 관련 자원 ===');
console.log('feedback_figure_design_system §1 (라벨 겹침 방지)');
console.log('원 라벨은 반드시 bbox=dict(facecolor="white", ...) 배경');

if (totalRed > 0) {
  console.log('\n❌ 빌드 차단: 원 라벨 bbox 배경 추가 필요');
  process.exit(1);
}
process.exit(0);
