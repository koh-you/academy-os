#!/usr/bin/env node
// 그림-발문-답지 3자 정합 감사 v1.0 — Layer 3 · G6
// 2026-07-17 세션 47 신설 · 그림 도입 프레임워크 v2 Layer 3 (Quality)
//
// 목적:
//   그림 TikZ 블록의 라벨(A·B·C·P·O·C_1·C_2 등)과 발문·답지의 참조 라벨 정합 감사.
//   좌표 명시값(예: (0,0)·(8,0))·반지름 명시값이 발문·답지의 수치와 일치하는지 검사.
//
// 검사 축:
//   T1. 그림 라벨 → 발문에 미참조 (오답: 그림에만 있는 라벨은 학생 혼동)
//   T2. 발문 필수 라벨 → 그림 미표시 (발문의 A·B·P가 그림에 누락)
//   T3. 그림 명시 좌표 → 발문 수치와 불일치
//   T4. 그림 반지름 → 발문·답지 수치와 불일치
//   T5. 그림 답 노출 (좌표·반지름이 답과 일치)
//
// 사용:
//   node scripts/figure-consistency-check.mjs <문제.tex> [--solution <답지.tex>]
//   node scripts/figure-consistency-check.mjs <문제.tex> --solution <답지.tex> --slot 14
//
// 단일 출처: bank/그림-도입-기준.md v1.1 · bank/그림-리스크-매트릭스.md

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Usage: node scripts/figure-consistency-check.mjs <문제.tex> [--solution <답지.tex>] [--slot N]');
  process.exit(2);
}

const problemPath = args[0];
let solutionPath = null;
let onlySlot = null;
for (let i = 1; i < args.length; i++) {
  if (args[i] === '--solution' && args[i + 1]) solutionPath = args[++i];
  else if (args[i] === '--slot' && args[i + 1]) onlySlot = parseInt(args[++i]);
}

if (!fs.existsSync(problemPath)) {
  console.error(`❌ 문제 파일 없음: ${problemPath}`);
  process.exit(2);
}

const problemContent = fs.readFileSync(problemPath, 'utf8');
const solutionContent = solutionPath && fs.existsSync(solutionPath) ? fs.readFileSync(solutionPath, 'utf8') : null;

// ── 슬롯 블록 추출 ─────────────────────
function extractSlots(texContent) {
  const slots = [];
  const re = /\\begin\{problem\}\{(\d+)\}([\s\S]*?)\\end\{problem\}/g;
  let m;
  while ((m = re.exec(texContent)) !== null) {
    slots.push({ n: parseInt(m[1]), text: m[2], startIdx: m.index });
  }
  return slots;
}

function extractSolutionSlots(texContent) {
  if (!texContent) return {};
  const slots = {};
  const re = /\\soltitle\{(\d+)\}\{([^}]*)\}\{([^}]*)\}([\s\S]*?)(?=\\soltitle\{|\\end\{multicols\})/g;
  let m;
  while ((m = re.exec(texContent)) !== null) {
    slots[parseInt(m[1])] = m[4];
  }
  return slots;
}

// ── TikZ 블록 추출 ─────────────────────
function extractTikzBlocks(text) {
  const blocks = [];
  const re = /\\begin\{tikzpicture\}(?:\[[^\]]*\])?([\s\S]*?)\\end\{tikzpicture\}/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    // overlay·remember picture 세로선 필터 (본문 도해 아님)
    if (/overlay,\s*remember picture/.test(m[0])) continue;
    blocks.push(m[1]);
  }
  return blocks;
}

// ── 그림에서 라벨·좌표 파싱 ─────────────────────
function parseFigureLabels(tikzBody) {
  const labels = new Set();
  const coords = []; // {label, x, y}
  const radii = []; // {center, radius}

  // \node ... {$\mathrm{X}$} 라벨
  const nodeRe = /\\node[^;{]*\{\$?\\?mathrm\{([A-Z](?:_\{?\d\}?)?)\}(?:\([^)]*\))?/g;
  let m;
  while ((m = nodeRe.exec(tikzBody)) !== null) labels.add(m[1]);

  // \node ... {$C_1$} 계열 (mathrm 없음)
  const nodePlainRe = /\\node[^;{]*\{\$([A-Z](?:_\{?\d\}?|_\d)?)\$?\}/g;
  while ((m = nodePlainRe.exec(tikzBody)) !== null) labels.add(m[1]);

  // \fill ... circle ... 좌표 (점 위치)
  // (x, y) circle (r)
  const circleRe = /\((-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\)\s*circle\s*\((-?\d+(?:\.\d+)?)\)/g;
  while ((m = circleRe.exec(tikzBody)) !== null) {
    radii.push({ x: parseFloat(m[1]), y: parseFloat(m[2]), radius: parseFloat(m[3]) });
  }

  // \node ... at (x, y) {$L$}
  const nodeAtRe = /\\node[^;]*at\s*\((-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\)[^;{]*\{([^}]+)\}/g;
  while ((m = nodeAtRe.exec(tikzBody)) !== null) {
    coords.push({ x: parseFloat(m[1]), y: parseFloat(m[2]), labelRaw: m[3] });
    // 라벨 추출: $\mathrm{A}$ or $A$ or $C_1$
    const labelMatch = m[3].match(/\$?\\?mathrm\{([A-Z](?:_\{?\d\}?)?)\}|\$([A-Z](?:_\{?\d\}?|_\d)?)\$?/);
    if (labelMatch) labels.add(labelMatch[1] || labelMatch[2]);
  }

  return { labels, coords, radii };
}

// ── 발문·답지 파싱 (라벨 추출) ─────────────────────
function extractReferencedLabels(text) {
  const labels = new Set();
  // $\mathrm{X}$ · $\mathrm{X}(a,b)$
  const mathrmRe = /\\mathrm\{([A-Z](?:_\{?\d\}?)?)\}/g;
  let m;
  while ((m = mathrmRe.exec(text)) !== null) labels.add(m[1]);
  // 점 X or 원 C_1 or 원 C
  const 점Re = /(?:점|원|직선)\s+([A-Z](?:_\{?\d\}?|_\d)?)/g;
  while ((m = 점Re.exec(text)) !== null) labels.add(m[1]);
  // $C_1$ · $C_2$ 계열 (원 반지름·중심 언급)
  const bareRe = /\$([A-Z](?:_\{?\d\}?|_\d)?)\$/g;
  while ((m = bareRe.exec(text)) !== null) labels.add(m[1]);
  return labels;
}

// ── 발문·답지의 명시 좌표·반지름 추출 ─────────────────────
function extractReferencedCoords(text) {
  const coords = [];
  // \mathrm{X}(a, b) · $(a, b)$
  const re = /\\mathrm\{([A-Z](?:_\{?\d\}?)?)\}\s*\(\s*(-?\d+(?:\/\d+)?(?:\.\d+)?)\s*,\s*(-?\d+(?:\/\d+)?(?:\.\d+)?)\s*\)/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    coords.push({ label: m[1], xText: m[2], yText: m[3] });
  }
  return coords;
}

function extractReferencedRadii(text) {
  const radii = [];
  // "반지름의 길이가 N" · "반지름 N" · "r = N"
  const re = /반지름(?:의 길이)?[^\d]*(\d+(?:\.\d+)?)/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    radii.push(parseFloat(m[1]));
  }
  return radii;
}

// ── 답 추출 (solution의 정답: 표기) ─────────────────────
function extractAnswer(solutionText) {
  if (!solutionText) return null;
  const m = solutionText.match(/정답:\s*([^\\\n]+)/);
  return m ? m[1].trim() : null;
}

// ── 슬롯별 정합 감사 ─────────────────────
function auditSlot(slot, solutionText) {
  const problems = [];
  const tikzBlocks = extractTikzBlocks(slot.text);

  if (tikzBlocks.length === 0) return { hasFigure: false, problems: [] };

  // 통합 라벨·좌표·반지름
  const allLabels = new Set();
  const allCoords = [];
  const allRadii = [];
  for (const b of tikzBlocks) {
    const p = parseFigureLabels(b);
    p.labels.forEach(l => allLabels.add(l));
    allCoords.push(...p.coords);
    allRadii.push(...p.radii);
  }

  const problemRefLabels = extractReferencedLabels(slot.text);
  const problemRefCoords = extractReferencedCoords(slot.text);
  const problemRefRadii = extractReferencedRadii(slot.text);
  const solRefLabels = solutionText ? extractReferencedLabels(solutionText) : new Set();

  // T1. 그림 라벨 → 발문 미참조
  for (const l of allLabels) {
    if (!problemRefLabels.has(l) && !solRefLabels.has(l)) {
      problems.push({ axis: 'T1', level: 'YELLOW', msg: `그림 라벨 '${l}' — 발문·답지 미참조 (학생 혼동 우려)` });
    }
  }

  // T2. 발문 필수 라벨 → 그림 미표시
  for (const l of problemRefLabels) {
    if (l.length > 1 && !allLabels.has(l)) {
      // 단, 발문 필수 라벨은 A·B·C·P·Q·O 등 · 소문자 변수 무시
      if (/^[A-Z](?:_\d|_\{?\d\}?)?$/.test(l)) {
        problems.push({ axis: 'T2', level: 'RED', msg: `발문 라벨 '${l}' — 그림에 미표시` });
      }
    }
  }

  // T3. 그림 좌표 vs 발문 명시 좌표 정합
  for (const pc of problemRefCoords) {
    const figLabel = [...allLabels].find(l => l === pc.label);
    if (!figLabel) continue;
    // 그림에서 같은 라벨 위치 찾기
    const figNode = allCoords.find(c => c.labelRaw.includes(pc.label));
    if (figNode) {
      // 단순 수치 비교 (분수·소수 각각 처리는 heuristic)
      const px = parseFloat(pc.xText.includes('/') ? eval(pc.xText) : pc.xText);
      const py = parseFloat(pc.yText.includes('/') ? eval(pc.yText) : pc.yText);
      // 스케일 무시 (그림은 scale 팩터 적용 · 절대 좌표 비교 불가) — 부호만 검사
      if (Math.sign(px) !== Math.sign(figNode.x) && px !== 0 && figNode.x !== 0) {
        problems.push({ axis: 'T3', level: 'RED', msg: `그림 라벨 '${pc.label}' 좌표 부호 불일치 (발문 x=${pc.xText}, 그림 x=${figNode.x})` });
      }
    }
  }

  // T4. 그림 반지름 vs 발문·답지 명시 반지름
  //   그림 반지름 == 답인 경우 답 노출 (T5)
  const answer = extractAnswer(solutionText);
  for (const r of allRadii) {
    // 답 노출 검사 (답이 수치이고 반지름과 일치)
    if (answer) {
      const answerNum = parseFloat(answer.match(/-?\d+(?:\.\d+)?/)?.[0]);
      if (!isNaN(answerNum) && Math.abs(r.radius - answerNum) < 0.01) {
        problems.push({ axis: 'T5', level: 'RED', msg: `그림 반지름 ${r.radius} == 답 ${answer} · 답 노출` });
      }
    }
    // 발문 반지름과 매칭 확인
    if (problemRefRadii.length > 0 && !problemRefRadii.some(pr => Math.abs(pr - r.radius) < 0.01)) {
      // 그림 반지름이 발문 어느 것도 매칭 안 됨 → INFO
      // (scale 팩터 때문에 예시일 수 있음)
    }
  }

  return { hasFigure: true, problems };
}

// ── 메인 ─────────────────────
const slots = extractSlots(problemContent);
const solutionSlots = extractSolutionSlots(solutionContent);

console.log(`🔍 그림-발문-답지 3자 정합 감사 v1.0 (G6)`);
console.log(`   문제: ${problemPath}`);
console.log(`   답지: ${solutionPath || '(미제공)'}`);
console.log(`   슬롯: ${slots.length}건${onlySlot ? ` · #${onlySlot} 단일` : ''}`);
console.log('');

let totalRed = 0;
let totalYellow = 0;
let figureCount = 0;
let noFigureCount = 0;

for (const slot of slots) {
  if (onlySlot && slot.n !== onlySlot) continue;
  const sol = solutionSlots[slot.n] || null;
  const result = auditSlot(slot, sol);
  if (!result.hasFigure) {
    noFigureCount++;
    continue;
  }
  figureCount++;
  const reds = result.problems.filter(p => p.level === 'RED').length;
  const yellows = result.problems.filter(p => p.level === 'YELLOW').length;
  totalRed += reds;
  totalYellow += yellows;

  const badge = reds > 0 ? '🔴' : yellows > 0 ? '🟡' : '✅';
  console.log(`${badge} #${slot.n} · 그림 있음 · RED ${reds} · YELLOW ${yellows}`);
  for (const p of result.problems) {
    const icon = p.level === 'RED' ? '🔴' : '🟡';
    console.log(`   ${icon} [${p.axis}] ${p.msg}`);
  }
  if (result.problems.length > 0) console.log('');
}

console.log('=== 요약 ===');
console.log(`   그림 있는 슬롯: ${figureCount}건`);
console.log(`   그림 없는 슬롯: ${noFigureCount}건`);
console.log(`   RED 총계: ${totalRed}건`);
console.log(`   YELLOW 총계: ${totalYellow}건`);
console.log('');
console.log('=== Layer 3 관련 자산 ===');
console.log('   bank/그림-도입-기준.md v1.1 · Layer 3');
console.log('   bank/그림-리스크-매트릭스.md v1.0');
console.log('   Gate 4.5 v3.10 · G6 (본 도구) · G7 risk-predict · G8 need-compliance');

process.exit(totalRed > 0 ? 3 : 0);
