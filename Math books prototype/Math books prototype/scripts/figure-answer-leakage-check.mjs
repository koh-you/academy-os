#!/usr/bin/env node
// figure-answer-leakage-check — TikZ/이미지 라벨의 답 노출 자동 감지
// 2026-07-14 세션 36 · #15 Venn·#16 GPS illustration 답 노출 사건 대응
//
// 목적:
//   문제.tex의 figure (TikZ/\includegraphics) 노드 라벨을 답지의 정답 값과 대조
//   → 답 도출 힌트 자동 감지 (Venn 원소·좌표점 마킹·개수 표시 등)
//
// 단일 출처:
//   feedback_figure_authoring_protocol Step 4 (답 노출 없음 검증)
//   memory/feedback_system_first_priority v2.0
//
// 검사 축:
//   A1. 원소 나열형 (Venn·수직선·좌표 격자 위 라벨)
//     - 답지 {a, b, c} vs 그림 노드 라벨 "a"·"b"·"c" 매칭 → RED
//   A2. 좌표점 마킹
//     - 답지 P(3, 4) vs 그림 (3,4) 좌표 시각 표시 → RED
//   A3. 개수 사전 노출
//     - 답지 "N개" vs 그림에 정확 N개 후보 배치 → RED
//   A4. 반지름·각도·거리 값 노출
//     - 답지 r=5 vs 그림 circle (5) or "r=5" → RED
//
// 제외 (오탐 방지):
//   - LaTeX subscript ($C_1$·$r_A$ 등 문제 정의 변수)
//   - 좌표축 라벨 ($x$·$y$)
//   - 발문에 이미 명시된 값 (A(0,0)·B(8,0) 등)
//
// 사용법:
//   node scripts/figure-answer-leakage-check.mjs <문제.tex> <답지.tex>
//
// 반환 코드: 0 = GREEN / 1 = RED / 2 = 오용

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length !== 2) {
  console.error('Usage: node scripts/figure-answer-leakage-check.mjs <문제.tex> <답지.tex>');
  console.error('  답 노출 감지에는 답지 필수');
  process.exit(2);
}

const [texPath, ansPath] = args;
if (!fs.existsSync(texPath) || !fs.existsSync(ansPath)) {
  console.error(`❌ 파일 없음`);
  process.exit(2);
}

const texRaw = fs.readFileSync(texPath, 'utf8');
const ansRaw = fs.readFileSync(ansPath, 'utf8');

// ── 1. 답지 정답 파싱 ────
// 🔴 2026-07-30 (세션 105) 수리 — 종전에는 아래 3-인자 \soltitle 만 인식했다.
//    DM dapji 시리즈는 \dmsoltitle{N}{제목} (2-인자) + dmanswerbox 구조라
//    답지 파싱이 0 문항이 되고 A1~A4 네 축이 전부 빈 집합에서 돌아 RED 0 을 냈다.
//    즉 「답 노출」 축이 시험지 답지에 대해 한 번도 실제로 검사된 적이 없었다.
//    (solution-author·solution-review 가 각각 독립으로 같은 결함을 보고)
const answers = {};

// (a) 구 형식 : \soltitle{N}{답}{점수} — 둘째 인자가 답
const soltitleRe = /\\soltitle(?:exam)?\{(\d+)\}\{([\s\S]*?)\}\{(\d+)\}/g;
let m;
while ((m = soltitleRe.exec(ansRaw)) !== null) {
  answers[parseInt(m[1])] = m[2];
}

// (b) DM 형식 : \dmsoltitle{N}{출제의도} … \begin{dmanswerbox} 답 \end{dmanswerbox}
//     둘째 인자는 출제의도(답이 아니다) → 뒤따르는 dmanswerbox 본문을 답으로 잡는다.
//     다음 \dmsoltitle 전까지가 그 슬롯의 구간이다.
{
  const starts = [...ansRaw.matchAll(/\\dmsoltitle\{(\d+)\}/g)];
  for (let i = 0; i < starts.length; i++) {
    const n = parseInt(starts[i][1]);
    const from = starts[i].index;
    const to = i + 1 < starts.length ? starts[i + 1].index : ansRaw.length;
    const body = ansRaw.slice(from, to);
    // 슬롯 구간 안의 dmanswerbox 를 모두 모은다 (소문항이 여러 개면 여러 박스)
    const boxes = [...body.matchAll(/\\begin\{dmanswerbox\}([\s\S]*?)\\end\{dmanswerbox\}/g)]
      .map(b => b[1]);
    if (boxes.length) {
      // 구 형식이 이미 잡았다면 덮어쓰지 않는다
      if (answers[n] === undefined) answers[n] = boxes.join(' ');
    }
  }
}

if (Object.keys(answers).length === 0) {
  // 🔴 파싱 0 문항이면 이 도구의 GREEN 은 공허하다. 침묵하지 말고 알린다.
  console.log('🔴 답지에서 정답을 하나도 파싱하지 못했습니다 — 이 검사 결과는 무효입니다.');
  console.log('   지원 형식: \\soltitle{N}{답}{점수} · \\dmsoltitle{N}{...} + dmanswerbox');
  console.log('   답지의 매크로 형식을 확인하거나 이 도구의 파서를 확장하십시오.');
  process.exit(1);
}

// ── 2. 답 값 추출 함수 ────
// (a) 집합 원소: {2, 5, 6} → ['2', '5', '6']
// (b) 좌표: (3, 4) → coord (3,4) — special
// (c) 개수: "3개" or "N개"
// (d) 단일 값: √13, k, r_C
function extractAnswerValues(ansText) {
  const values = {
    setElements: new Set(),  // {2,5,6} 원소
    coords: [],              // (3,4) 좌표
    counts: [],              // "3개"
    scalars: new Set(),      // √13, 18
  };
  // 집합 { ... }
  const setRe = /\\?\{([\d,\s\\a-z]+)\\?\}/g;
  while ((m = setRe.exec(ansText)) !== null) {
    const inner = m[1];
    const els = inner.split(',').map(s => s.trim()).filter(s => /^\d+$/.test(s));
    for (const e of els) values.setElements.add(e);
  }
  // 좌표 (a, b)
  const coordRe = /\(\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*\)/g;
  while ((m = coordRe.exec(ansText)) !== null) {
    values.coords.push({ x: m[1], y: m[2] });
  }
  // 개수 "N개"
  const cntRe = /(\d+)\s*개/g;
  while ((m = cntRe.exec(ansText)) !== null) {
    values.counts.push(m[1]);
  }
  // 스칼라 값 (√N, N)
  const sqrtRe = /\\sqrt\{(\d+)\}/g;
  while ((m = sqrtRe.exec(ansText)) !== null) {
    values.scalars.add(`sqrt${m[1]}`);
  }
  // 최종 스칼라 (합 = N, 값 N)
  const equalsRe = /(?:합|값|합계)\s*[=＝:]\s*(-?\d+(?:\.\d+)?)/g;
  while ((m = equalsRe.exec(ansText)) !== null) {
    values.scalars.add(m[1]);
  }
  return values;
}

// ── 3. 문제 tex의 figure 블록 파싱 ────
const lines = texRaw.split('\n');
const problems = [];
let current = null;
let inFig = false;
let currentFig = null;

for (let ln = 0; ln < lines.length; ln++) {
  const line = lines[ln];
  const start = line.match(/\\begin\{problem\}\{(\d+)\}/);
  if (start) {
    current = { n: parseInt(start[1]), startLine: ln + 1, figures: [], subQuestions: [] };
  }
  if (current) {
    // figure 블록 감지 (TikZ or center + includegraphics)
    if (line.includes('\\begin{tikzpicture}') || line.includes('\\includegraphics')) {
      if (!inFig) {
        inFig = true;
        currentFig = { type: line.includes('tikz') ? 'tikz' : 'image', startLine: ln + 1, body: [] };
      }
      currentFig.body.push(line);
    } else if (inFig) {
      currentFig.body.push(line);
      if (line.includes('\\end{tikzpicture}')) {
        currentFig.endLine = ln + 1;
        current.figures.push(currentFig);
        inFig = false;
        currentFig = null;
      }
    }
    // \includegraphics 단독 (여러 줄 아니라 단일 줄)
    if (line.includes('\\includegraphics') && !line.includes('\\begin')) {
      current.figures.push({ type: 'includegraphics', line: ln + 1, body: [line] });
    }
    // 소문항 감지 (문제 밖 probpair 좌우 minipage 안 서답형)
    const subMatch = line.match(/\\textbf\{\((\d+)\)\}/);
    if (subMatch) {
      current.subQuestions.push({ n: parseInt(subMatch[1]) });
    }
  }
  if (line.includes('\\end{problem}') && current) {
    current.endLine = ln + 1;
    problems.push(current);
    // 다음 소문항·figure는 여전히 이 problem으로 (probpair는 \end{problem} 뒤에 소문항 있음)
    // 그러나 pagepair 끝나면 종료
  }
  if (line.includes('\\end{pagepair}') && current) {
    // 이미 push 됐으면 skip. 아니면 push.
    if (!problems.includes(current)) problems.push(current);
    current = null;
    inFig = false;
    currentFig = null;
  }
}

// ── 4. 각 figure의 라벨 검사 ────
function extractLabelsFromTikz(figBody) {
  const labels = [];
  const body = figBody.join('\n');
  // \node[...] {content}
  const nodeRe = /\\node\s*(?:\[[^\]]*\])?\s*(?:at\s*\([^)]*\)\s*)?\{([^}]+)\}/g;
  let m;
  while ((m = nodeRe.exec(body)) !== null) {
    // content 정리 (LaTeX 명령 제거 · 텍스트 추출)
    let content = m[1];
    // $...$ 안 subscript 감지: 정의 변수 (C_1·r_A 등)는 제외
    // 답 노출 후보만 남김
    labels.push(content);
  }
  // \draw ... circle (radius): 반지름 값 추출
  const circleRe = /\\draw[^;]*circle\s*\(([^)]+)\)/g;
  while ((m = circleRe.exec(body)) !== null) {
    labels.push(`radius:${m[1]}`);
  }
  // \fill (x, y) circle: 특정 좌표 마킹
  const fillRe = /\\fill[^(]*\(\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*\)/g;
  while ((m = fillRe.exec(body)) !== null) {
    labels.push(`point:${m[1]},${m[2]}`);
  }
  return labels;
}

console.log('🔍 figure 답 노출 검사');
console.log(`   문제 tex: ${texPath}`);
console.log(`   답지 tex: ${ansPath}`);
console.log(`   답지 파싱: ${Object.keys(answers).length} 문항\n`);

let redCount = 0;
for (const prob of problems) {
  if (!prob.figures.length) continue;
  const ans = answers[prob.n];
  if (!ans) continue;
  const values = extractAnswerValues(ans);

  console.log(`📌 #${prob.n}: figure ${prob.figures.length}개 · 답 [${[...values.setElements].join(',') || '없음'}] 좌표 [${values.coords.map(c=>`(${c.x},${c.y})`).join(',') || '없음'}] 개수 [${values.counts.join(',') || '없음'}]`);

  for (const fig of prob.figures) {
    if (!fig.body) continue;
    const labels = extractLabelsFromTikz(fig.body);
    const leaks = [];

    // 축 A1: 집합 원소 노출 (point/radius 마커는 A2/A4에서 처리 → 제외)
    for (const el of values.setElements) {
      for (const label of labels) {
        if (label.startsWith('point:') || label.startsWith('radius:')) continue;
        // subscript 제외 · 순수 원소 노출만 감지
        const cleanLabel = label.replace(/\$[^$]*_\{?[^}]*\}?\$?/g, ''); // subscript 제거
        const nakedRe = new RegExp(`(?<![0-9\\w])${el}(?![0-9\\w])`);
        if (nakedRe.test(cleanLabel)) {
          leaks.push({ axis: 'A1 원소 노출', value: el, label });
        }
      }
    }
    // 축 A2: 좌표점 마킹
    for (const coord of values.coords) {
      for (const label of labels) {
        if (label.startsWith('point:') && label === `point:${coord.x},${coord.y}`) {
          leaks.push({ axis: 'A2 좌표점 마킹', value: `(${coord.x},${coord.y})`, label });
        }
      }
    }
    // 축 A3: 개수 사전 노출
    // (라벨 개수 vs 답 개수)
    for (const cnt of values.counts) {
      const n = parseInt(cnt);
      // 라벨 카운트가 정확히 n이면 힌트
      const cleanLabels = labels.filter(l => !l.startsWith('point:') && !l.startsWith('radius:'));
      if (cleanLabels.length === n) {
        leaks.push({ axis: 'A3 개수 노출', value: `${n}개`, label: `총 ${cleanLabels.length}개 라벨` });
      }
    }
    // 축 A4: 반지름·스칼라 노출
    for (const val of values.scalars) {
      for (const label of labels) {
        if (label.startsWith('radius:') && label.includes(val.replace('sqrt', ''))) {
          leaks.push({ axis: 'A4 반지름 노출', value: val, label });
        }
      }
    }

    if (leaks.length > 0) {
      console.log(`   🔴 figure @ line ${fig.startLine || fig.line} · ${leaks.length} 노출`);
      for (const leak of leaks) {
        console.log(`      ${leak.axis}: 값 "${leak.value}" ↔ 라벨 "${leak.label}"`);
      }
      redCount += leaks.length;
    } else {
      console.log(`   ✅ figure @ line ${fig.startLine || fig.line} · 노출 없음`);
    }
  }
  console.log('');
}

console.log('=== 요약 ===');
console.log(`   RED (답 노출): ${redCount}건`);

console.log('\n=== 검사 축 ===');
console.log('   A1: 집합 원소 노출 · 답지 {a,b,c} ↔ 그림 라벨 "a","b","c"');
console.log('   A2: 좌표점 마킹 · 답지 P(3,4) ↔ 그림 (3,4) 원 표시');
console.log('   A3: 개수 사전 노출 · 답지 "N개" ↔ 그림 정확 N개 배치');
console.log('   A4: 반지름·거리 노출 · 답지 √13 ↔ 그림 circle(√13)');

console.log('\n=== 관련 자원 ===');
console.log('feedback_figure_authoring_protocol Step 4');
console.log('memory/feedback_system_first_priority v2.0');

if (redCount > 0) {
  console.log('\n❌ 빌드 차단: 답 노출 illustration 제거·재작성 필수.');
  process.exit(1);
}
process.exit(0);
