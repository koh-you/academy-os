#!/usr/bin/env node
// figure-completeness-check — Figure 완성도 다축 감사
// 2026-07-14 세션 37 Phase 1 · feedback_figure_design_system 10 규약 자동 감사
//
// 검사 축:
//   C1. 좌표축 진하기 (matplotlib linewidth ≥ 1.5)
//   C2. 눈금 표시 감지 (ax.set_xticks·ax.plot([...],[...tick]) 있으면 RED)
//   C3. 부수 라벨 감지 ("고정"·"공선"·"참고" 등)
//   C4. 라벨 배경 white bbox 유무 (원 라벨의 실선 겹침 방지)
//   C5. matplotlib DPI (< 150 → WARN)
//   C6. Korean font 설정 (Malgun Gothic 명시)
//
// 사용법:
//   node scripts/figure-completeness-check.mjs <figure.py> [...]
//
// 반환: 0 GREEN / 1 RED / 2 오용

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Usage: node scripts/figure-completeness-check.mjs <figure.py> [...]');
  process.exit(2);
}

let totalRed = 0;
let totalWarn = 0;

for (const file of args) {
  if (!fs.existsSync(file)) {
    console.error(`❌ 파일 없음: ${file}`);
    process.exit(2);
  }
  const src = fs.readFileSync(file, 'utf8');
  console.log(`\n🔍 ${file}`);

  const issues = { red: [], warn: [] };

  // ── C1. 좌표축 진하기 ────
  //   matplotlib axes: ax.annotate('', xy=..., arrowprops=dict(..., linewidth=X))
  //   또는 ax.plot([...],[...], linewidth=X)
  const axesLinewidthRe = /arrowstyle=['"]-?>['"][^)]*linewidth=([\d.]+)/g;
  let axisLwFound = [];
  let m;
  while ((m = axesLinewidthRe.exec(src)) !== null) {
    axisLwFound.push(parseFloat(m[1]));
  }
  if (axisLwFound.length > 0) {
    // MAX 사용: 축 arrows는 굵고 · 장식 arrows는 얇을 수 있음
    const maxLw = Math.max(...axisLwFound);
    if (maxLw < 1.5) {
      issues.red.push(`C1 좌표축 linewidth ${maxLw} < 1.5 (모든 arrow 진함 부족)`);
    } else {
      console.log(`   ✅ C1 좌표축 linewidth ${maxLw} ≥ 1.5 (max)`);
    }
  } else {
    issues.warn.push('C1 좌표축 linewidth 감지 불가 (arrowstyle 패턴 부재)');
  }

  // ── C2. 눈금 표시 감지 ────
  //   ax.set_xticks(...) with non-empty list → RED
  //   ax.plot([xt, xt], [-0.15, 0.15], ...) 눈금 마킹 감지
  const setTicksRe = /ax\.set_(x|y)ticks\(\s*\[([^\]]+)\]\s*\)/g;
  let hasEmptyTicks = /ax\.set_(x|y)ticks\(\s*\[\s*\]\s*\)/g.test(src);
  let tickCallsWithContent = 0;
  while ((m = setTicksRe.exec(src)) !== null) {
    if (m[2].trim() !== '') tickCallsWithContent++;
  }
  const manualTickRe = /ax\.plot\(\[\s*\w+\s*,\s*\w+\s*\]\s*,\s*\[-?[\d.]+\s*,\s*[\d.]+\]\s*,\s*color=axis_color/g;
  const manualTickCount = (src.match(manualTickRe) || []).length;

  if (tickCallsWithContent > 0 || manualTickCount > 0) {
    issues.red.push(`C2 눈금 표시 발견 (set_ticks 콘텐츠: ${tickCallsWithContent}, 수동 눈금: ${manualTickCount})`);
  } else {
    console.log(`   ✅ C2 눈금 표시 없음`);
  }

  // ── C3. 부수 라벨 감지 ("고정"·"공선"·"참고"·"tip"·"note") ────
  const nagLabels = ['고정', '공선', '참고', '주의', '노트', 'note', 'tip'];
  const foundNag = [];
  for (const label of nagLabels) {
    const re = new RegExp(`ax\\.text\\([^)]*['"](${label})['"]`, 'g');
    if (re.test(src)) {
      foundNag.push(label);
    }
  }
  if (foundNag.length > 0) {
    issues.warn.push(`C3 부수 라벨: ${foundNag.join(', ')} (제거 권장)`);
  } else {
    console.log(`   ✅ C3 부수 라벨 없음`);
  }

  // ── C4. 원 라벨 배경 white bbox 유무 ────
  //   $C_1$·$C_2$ 등 원 라벨에 bbox 있는지
  const circleLabelRe = /ax\.text\([^)]*['"](\\?\$?C_?\d\\?\$?)['"][^)]*\)/g;
  const circleLabelsWithBbox = [];
  const circleLabelsWithoutBbox = [];
  while ((m = circleLabelRe.exec(src)) !== null) {
    const fullMatch = m[0];
    if (fullMatch.includes('bbox=')) {
      circleLabelsWithBbox.push(m[1]);
    } else {
      circleLabelsWithoutBbox.push(m[1]);
    }
  }
  if (circleLabelsWithoutBbox.length > 0) {
    issues.red.push(`C4 원 라벨 배경 없음: ${circleLabelsWithoutBbox.join(', ')} → white bbox 필수`);
  } else if (circleLabelsWithBbox.length > 0) {
    console.log(`   ✅ C4 원 라벨 white bbox 있음: ${circleLabelsWithBbox.join(', ')}`);
  }

  // ── C5. DPI 확인 ────
  const dpiRe = /dpi\s*=\s*(\d+)/;
  const dpiMatch = src.match(dpiRe);
  if (dpiMatch) {
    const dpi = parseInt(dpiMatch[1]);
    if (dpi < 150) {
      issues.warn.push(`C5 DPI ${dpi} < 150 (선명도 부족)`);
    } else {
      console.log(`   ✅ C5 DPI ${dpi} ≥ 150`);
    }
  } else {
    issues.warn.push('C5 DPI 명시 없음');
  }

  // ── C6. Korean font ────
  if (src.includes("'Malgun Gothic'") || src.includes('"Malgun Gothic"')) {
    console.log(`   ✅ C6 Malgun Gothic 폰트 명시`);
  } else if (/한글|위성|모사펜|연필|고정|축/.test(src)) {
    issues.warn.push('C6 한글 사용 감지 · Malgun Gothic 폰트 미지정');
  }

  // Report
  for (const w of issues.warn) console.log(`   ⚠️  ${w}`);
  for (const r of issues.red) console.log(`   🔴 ${r}`);
  totalRed += issues.red.length;
  totalWarn += issues.warn.length;
}

console.log('\n=== 요약 ===');
console.log(`   RED: ${totalRed} · WARN: ${totalWarn}`);
console.log('\n=== 관련 자원 ===');
console.log('feedback_figure_design_system 10 규약 §1, 3, 5 자동 검증');

if (totalRed > 0) {
  console.log('\n❌ 빌드 차단: figure 완성도 정정 필요');
  process.exit(1);
}
process.exit(0);
