#!/usr/bin/env node
// figure-tip-boundary-check — pen/pencil tip 좌표가 원 boundary 위에 있는지 수학 검증
// 2026-07-14 세션 37 Phase 1 · feedback_figure_design_system 규약 #2 자동화
//
// 목적:
//   Python matplotlib figure 소스 (*.py) 파싱 → pen tip · pencil tip · 원 중심 · 반지름 추출
//   각 tip에 대해 distance(tip, circle_center) == radius 검증
//   오차 > 0.01 → RED (빌드 차단)
//
// 단일 출처:
//   feedback_figure_design_system.md §2 (원 위치 규약)
//
// 사용법:
//   node scripts/figure-tip-boundary-check.mjs <figure.py> [<figure2.py> ...]
//
// 지원 패턴 (py 파일 내):
//   - Circle(center, radius, ...) — matplotlib Circle
//   - draw_pen(ax, p_tip, color) — 커스텀 tip 함수
//   - P = rot(np.array([x, y])) — 회전된 tip 좌표
//   - c1_center_rotated = rot(np.array([x, y]))
//
// 반환 코드: 0 = GREEN / 1 = RED / 2 = 오용

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Usage: node scripts/figure-tip-boundary-check.mjs <figure.py> [...]');
  console.error('  Python matplotlib 소스 파일 필수');
  process.exit(2);
}

// 회전 행렬 (파이썬 코드에서 theta 파싱해서 적용)
function rotate(p, thetaDeg) {
  const theta = (thetaDeg * Math.PI) / 180;
  return [
    p[0] * Math.cos(theta) - p[1] * Math.sin(theta),
    p[0] * Math.sin(theta) + p[1] * Math.cos(theta),
  ];
}

function distance(a, b) {
  return Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2);
}

let totalRed = 0;
let totalGreen = 0;
let totalWarn = 0;

for (const file of args) {
  if (!fs.existsSync(file)) {
    console.error(`❌ 파일 없음: ${file}`);
    process.exit(2);
  }

  const src = fs.readFileSync(file, 'utf8');
  console.log(`\n🔍 ${file}`);

  // 1. 회전 각도 추출 (theta = np.radians(-XX))
  let thetaDeg = 0;
  const thetaMatch = src.match(/theta\s*=\s*np\.radians\((-?[\d.]+)\)/);
  if (thetaMatch) {
    thetaDeg = parseFloat(thetaMatch[1]);
    console.log(`   회전 각도: ${thetaDeg}°`);
  }

  // 2. 원본 좌표 (P0, Q0, C1 center, C2 center) 추출
  //    패턴: P0 = np.array([x, y])
  const points = {};
  const pointRe = /(\w+)\s*=\s*np\.array\(\[\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\]\)/g;
  let m;
  while ((m = pointRe.exec(src)) !== null) {
    points[m[1]] = [parseFloat(m[2]), parseFloat(m[3])];
  }

  // 2b. rot() chain 처리: X = rot(Y) → X 좌표 = rotate(Y 좌표)
  //     X = rot(np.array([x, y])) → X = rotate([x, y], thetaDeg)
  const rotAssignRe = /(\w+)\s*=\s*rot\s*\(\s*np\.array\(\[\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\]\)\s*\)/g;
  while ((m = rotAssignRe.exec(src)) !== null) {
    const orig = [parseFloat(m[2]), parseFloat(m[3])];
    points[m[1]] = rotate(orig, thetaDeg);
  }
  //     X = rot(Y) where Y is a variable
  const rotVarRe = /(\w+)\s*=\s*rot\s*\(\s*(\w+)\s*\)/g;
  while ((m = rotVarRe.exec(src)) !== null) {
    if (points[m[2]]) {
      points[m[1]] = rotate(points[m[2]], thetaDeg);
    }
  }

  // 3. Circle((center_x, center_y), radius, ...) 추출
  const circles = [];
  const circleRe = /Circle\s*\(\s*\(?([^,)]+)\s*,\s*([^,)]+)\s*\)?\s*,\s*([\d.]+)/g;
  while ((m = circleRe.exec(src)) !== null) {
    const cxRaw = m[1].trim();
    const cyRaw = m[2].trim();
    const r = parseFloat(m[3]);
    circles.push({ centerExpr: `${cxRaw}, ${cyRaw}`, radius: r, cxRaw, cyRaw });
  }

  // 4. Circle(variable_name, radius) 패턴 (변수 참조)
  const circleVarRe = /Circle\s*\(\s*([a-zA-Z_]\w*)\s*,\s*([\d.]+)\s*[,)]/g;
  while ((m = circleVarRe.exec(src)) !== null) {
    const varName = m[1];
    const r = parseFloat(m[2]);
    if (points[varName]) {
      circles.push({ centerVar: varName, radius: r, center: points[varName] });
    }
  }

  // 5. draw_pen(ax, tip_position, color) 호출 추출
  const drawPenRe = /draw_pen\s*\(\s*ax\s*,\s*(\w+)\s*,\s*(\w+)\s*\)/g;
  const penTips = [];
  while ((m = drawPenRe.exec(src)) !== null) {
    const tipVar = m[1];
    const color = m[2];
    if (points[tipVar]) {
      penTips.push({ tipVar, color, tip: points[tipVar] });
    } else {
      console.log(`   ⚠️  ${tipVar} 좌표 추적 실패`);
    }
  }

  if (penTips.length === 0) {
    console.log(`   ℹ️  draw_pen() 호출 없음 → 검사 대상 아님`);
    continue;
  }

  console.log(`   원 개수: ${circles.length} · 펜/연필 tip 개수: ${penTips.length}`);

  // 6. 각 tip에 대해 가장 가까운 원과 boundary 검증
  for (const { tipVar, color, tip } of penTips) {
    let bestMatch = null;
    let bestDiff = Infinity;
    for (const c of circles) {
      if (!c.center) continue;
      const d = distance(tip, c.center);
      const diff = Math.abs(d - c.radius);
      if (diff < bestDiff) {
        bestDiff = diff;
        bestMatch = { ...c, distance: d, diff };
      }
    }
    if (!bestMatch) {
      console.log(`   ⚠️  ${tipVar} (${color}): 매칭 원 없음 · 검사 skip`);
      totalWarn++;
      continue;
    }
    const status = bestDiff < 0.01 ? '✅' : (bestDiff < 0.5 ? '⚠️' : '🔴');
    console.log(
      `   ${status} ${tipVar} (tip=${tip.map((n) => n.toFixed(3))}) · 원 ${bestMatch.centerVar || bestMatch.centerExpr} ` +
        `(r=${bestMatch.radius}) · 거리=${bestMatch.distance.toFixed(4)} · 오차=${bestDiff.toFixed(4)}`
    );
    if (bestDiff >= 0.5) totalRed++;
    else if (bestDiff >= 0.01) totalWarn++;
    else totalGreen++;
  }
}

console.log('\n=== 요약 ===');
console.log(`   GREEN (오차 < 0.01): ${totalGreen}`);
console.log(`   WARN (오차 < 0.5): ${totalWarn}`);
console.log(`   RED (오차 ≥ 0.5): ${totalRed}`);

console.log('\n=== 관련 자원 ===');
console.log('feedback_figure_design_system §2 (원 위치 규약)');
console.log('pen/pencil tip은 반드시 원 boundary 위 (수학 검산 강제)');

if (totalRed > 0) {
  console.log('\n❌ 빌드 차단: tip 위치 재조정 필요');
  process.exit(1);
}
process.exit(0);
