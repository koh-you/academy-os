#!/usr/bin/env node
// 인라인수식-줄바꿈-검사.mjs — 좁은 컬럼에서 줄이 끊길 위험이 있는 인라인 수식을 소스에서 찾는다.
//
// 왜 만들었나 (2026-08-04 세션 111 · 마스터 지시 「응 만들어. 오탐 안 나게 좁혀서」)
//   마스터 지적 — 「답지 5번 풀이에 수식이 중간에 줄바꿈이 일어나. 2/a = 3/b = 1/2 에서 말야.」
//   실제로 $\dfrac{2}{a}=\dfrac{3}{b}=\dfrac{1}{2}$ 가 인라인이라 두 번째 등호 뒤에서 끊기고
//   1/2 만 다음 줄로 넘어갔다.
//
//   🔴 그런데 빌드 로그는 Overfull·Underfull 이 0건이었다.
//      scripts/check-display-math.mjs 는 로그만 읽으므로 이 결함을 구조적으로 못 본다.
//      규칙 2 (인라인에 관계기호 2개↑ → 디스플레이 분리) 는 **소스를 봐야 하는데** 보는 도구가 없었다.
//      이 도구가 그 자리를 메운다.
//
// 규칙 단일 출처: CLAUDE.md §수학 표기 · memory/feedback_display_math_layout.md
//
// 🔴 이 도구는 「위험하다」고 말할 뿐 「깨졌다」고 말하지 않는다.
//    깨졌는지는 PDF 를 눈으로 봐야 안다 (규칙 3). 이 도구는 **어디를 볼지** 골라 줄 뿐이다.
//
// 사용:
//   node scripts/인라인수식-줄바꿈-검사.mjs <파일.tex> [...]
//   --width <n>   폭 임계 (기본 11.0)
//   --all         걸러낸 것도 까닭과 함께 모두 보여 준다 (임계 조정용)
//
// 반환: 0 = 위험 없음 · 1 = 위험 있음 · 2 = 오용

import fs from 'node:fs';

const argv = process.argv.slice(2);
if (argv.length < 1) {
  console.error('사용: node scripts/인라인수식-줄바꿈-검사.mjs <파일.tex> [...] [--width <n>] [--all]');
  process.exit(2);
}

let WIDTH_MIN = 11.0;
// 🟠 「넘칠 만함」 경계 — 2026-08-04 세션 111 실측으로 정했다. 어림이 아니다.
//    dm-answer-classic.sty 에 \relpenalty·\binoppenalty 를 걸자 종전에 몰래 끊기던 수식이
//    Overfull 로 드러났다. 그 넘침 크기와 이 폭 값을 맞대어 보면 —
//      Overfull 131.4pt → 폭 34 (Review Note 08-RF02-무리함수-답지:1109 · 등호 셋)
//      Overfull  33.0pt → 폭 32 (Review Note 04-이동-답지:534)
//      Overfull  20.6pt → 폭 24 (Review Note 05-ST-집합명제-답지:387)
//    🔴 이 경계는 **한쪽으로만** 믿을 수 있다.
//      · 폭 20 아래에서는 실제 넘침이 하나도 안 나왔다 — **안전하다는 쪽은 믿어도 된다**
//      · 폭 20 위라고 반드시 넘치지는 않는다 — 정리편 8권에서 폭 20↑ 이 75건인데
//        실제 Overfull 은 20건이었다. 수식이 줄의 어디에 놓이느냐에 달렸다
//    그래서 「넘칠 만함」이지 「넘친다」가 아니다.
const WIDTH_SEVERE = 20.0;
let SHOW_ALL = false;
const files = [];
for (let i = 0; i < argv.length; i++) {
  if (argv[i] === '--width') { WIDTH_MIN = parseFloat(argv[++i]); continue; }
  if (argv[i] === '--all') { SHOW_ALL = true; continue; }
  files.push(argv[i]);
}

// ── 관계기호 ────────────────────────────────────────────────────────────────
// 🔴 \subset·\subseteq 는 세지 않는다. 포함 관계 사슬은 짧고 관용이라 안 끊긴다
//    (실측 — $A\cap B\subset A\cup B\subset C$ 가 한 줄에 잘 들어갔다).
const REL_RE = /\\ne\b|\\neq\b|\\le\b|\\leq\b|\\ge\b|\\geq\b|\\equiv\b|\\approx\b|=|<|>/g;
const EQ_RE = /(?<![<>!])=(?!=)/g;

// ── 폭 어림 ─────────────────────────────────────────────────────────────────
// 글자 하나를 1 로 두고 렌더된 가로 길이를 어림한다.
// 🔴 \overline·\mathrm 은 폭을 안 늘린다 (위에 줄이 붙거나 서체만 바뀐다).
//    \dfrac 은 분자·분모가 위아래로 쌓이므로 **둘 중 긴 쪽 + 분수선 여백** 만 센다.
function estimateWidth(src) {
  let s = src;
  // \dfrac{A}{B} · \frac{A}{B} → max(w(A), w(B)) + 2
  const fracRe = /\\d?frac\s*\{((?:[^{}]|\{[^{}]*\})*)\}\s*\{((?:[^{}]|\{[^{}]*\})*)\}/;
  for (let guard = 0; guard < 40 && fracRe.test(s); guard++) {
    s = s.replace(fracRe, (_, a, b) => ''.repeat(Math.round(Math.max(estimateWidth(a), estimateWidth(b)) + 2)));
  }
  // \sqrt{A} → w(A) + 2 (근호 기호 + 덮개)
  const sqrtRe = /\\sqrt\s*(?:\[[^\]]*\])?\s*\{((?:[^{}]|\{[^{}]*\})*)\}/;
  for (let guard = 0; guard < 40 && sqrtRe.test(s); guard++) {
    s = s.replace(sqrtRe, (_, a) => ''.repeat(Math.round(estimateWidth(a) + 2)));
  }
  // 위첨자·아래첨자 → 작게 그려지므로 0.7 배
  const scriptRe = /[\^_]\s*\{((?:[^{}]|\{[^{}]*\})*)\}/;
  for (let guard = 0; guard < 40 && scriptRe.test(s); guard++) {
    s = s.replace(scriptRe, (_, a) => ''.repeat(Math.max(1, Math.round(estimateWidth(a) * 0.7))));
  }
  s = s.replace(/[\^_]\s*\\?\w/g, '');       // 중괄호 없는 첨자
  // 폭을 안 늘리는 꾸밈
  s = s.replace(/\\(?:overline|mathrm|mathbf|text|left|right|displaystyle|,|;|!|quad|qquad)\b/g, '');
  // 남은 제어열 → 기호 하나로 본다 (\cap · \le · \times …)
  s = s.replace(/\\[a-zA-Z]+/g, '');
  s = s.replace(/[{}\s\\]/g, '');
  return s.length;
}

// 🔴 조건제시법 집합 — $\{x \mid a\le x\le b\}$ 는 통째로 집합 하나의 이름이다.
//    인라인이 정상이고 안 끊긴다. 관계기호가 셋이어도 걸지 않는다.
const SETBUILDER_RE = /\\\{[^]*?(?:\\mid|\\vert|\|)[^]*?\\\}/;

let totalHit = 0;
let totalScanned = 0;

for (const file of files) {
  let text;
  try { text = fs.readFileSync(file, 'utf8'); }
  catch { console.error(`읽지 못함: ${file}`); process.exitCode = 2; continue; }

  const lines = text.split(/\r?\n/);
  const hits = [];
  const skipped = [];

  lines.forEach((raw, idx) => {
    if (/^\s*%/.test(raw)) return;                    // 주석 줄
    const line = raw.replace(/\$\$[^$]*\$\$/g, ' ');  // 디스플레이는 대상이 아니다
    const inlineRe = /(?<!\$)\$(?!\$)((?:[^$\\]|\\.)*)\$(?!\$)/g;
    let m;
    while ((m = inlineRe.exec(line)) !== null) {
      const body = m[1];
      totalScanned++;
      const at = { file, line: idx + 1, body };

      // 관문 ① 조건제시법 집합은 통째로 넘어간다
      if (SETBUILDER_RE.test(body)) { skipped.push({ ...at, why: '조건제시법 집합' }); continue; }

      // 관문 ② 관계기호가 둘 미만이면 끊길 자리가 없다
      const rels = body.match(REL_RE) || [];
      if (rels.length < 2) { skipped.push({ ...at, why: `관계기호 ${rels.length}개` }); continue; }

      // 관문 ③ 등호가 없으면 범위 표기다 ($-2<a<3$ · $0\le j\le 5$) — 정상이다
      const eqs = body.match(EQ_RE) || [];
      if (eqs.length === 0) { skipped.push({ ...at, why: '범위 표기 (등호 없음)' }); continue; }

      // 관문 ④ 좁으면 한 줄에 들어간다
      const w = estimateWidth(body);
      if (w < WIDTH_MIN) { skipped.push({ ...at, why: `폭 ${w.toFixed(0)} < ${WIDTH_MIN}` }); continue; }

      hits.push({ ...at, rels: rels.length, w });
    }
  });

  console.log(`\n── ${file} ──`);
  if (hits.length === 0) {
    console.log('  ✅ 줄이 끊길 위험이 있는 인라인 수식 없음');
  } else {
    // 🔴 넓은 것부터 보여 준다. 폭이 클수록 실제로 더 크게 넘친다 (아래 실측).
    hits.sort((a, b) => b.w - a.w);
    for (const h of hits) {
      const band = h.w >= WIDTH_SEVERE ? '🟠 넘칠 만함' : '🟡 위험';
      console.log(`  ${band} ${file}:${h.line}  관계기호 ${h.rels}개 · 폭 ${h.w.toFixed(0)}`);
      console.log(`      $${h.body}$`);
    }
  }
  if (SHOW_ALL && skipped.length) {
    console.log(`  〔걸러낸 것 ${skipped.length}건〕`);
    for (const s of skipped) console.log(`      ${s.line}  (${s.why})  $${s.body}$`);
  }
  totalHit += hits.length;
}

// 🔴 요약 줄의 꼴을 훅이 읽는 형식에 맞춘다 (scripts/hooks/post-tool-check.mjs:148 parseCounts).
//    RED 는 언제나 0 이다 — 이 도구는 어림이라 빌드를 막지 않는다.
console.log(`\n📊 요약: RED 0 · YELLOW ${totalHit} (인라인 수식 ${totalScanned}개 · 폭 임계 ${WIDTH_MIN})`);
if (totalHit > 0) {
  console.log('   → 디스플레이로 분리한다. 디스플레이는 문장 끝에 두고 마침표를 찍는다.');
  console.log('   🔴 이 도구는 「위험하다」고만 말한다. 실제로 끊겼는지는 PDF 를 눈으로 본다 (규칙 3).');
  console.log('   단일 출처: CLAUDE.md §수학 표기 · memory/feedback_display_math_layout.md');
  process.exit(1);
}
process.exit(0);
