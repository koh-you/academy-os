#!/usr/bin/env node
// scripts/gate.mjs — 게이트 단일 진입점 (v1.0 · 2026-07-30 세션 104 신설)
//
// ══════════════════════════════════════════════════════════════════════════
// 왜 만들었는가
// ══════════════════════════════════════════════════════════════════════════
// 사건: 와부고 재현-1회 답지의 TikZ 4블록 전부가 scale 규약을 위반(RED 12건)했다.
//
// 실패 사슬:
//   ① 지시자가 에이전트 프롬프트에 검증 도구를 **손으로 나열** → 그래프 2종 누락
//   ② 에이전트가 자기 정의(solution-author.md:229)에 적힌 도구를 안 돌림
//   ③ 에이전트가 **자기가 돌린 것만** 보고 (안 돌린 것은 보고서에 없음)
//   ④ 지시자가 **에이전트 보고서를 기준으로** 재검증 — 감사 범위를 피감사자가 결정
//   ⑤ 마스터가 발견
//
// 근본 원인: `scripts/` 에 게이트급 도구가 **83종** 있는데 SSOT 등재는 15종 남짓이고,
//            매번 사람이 그중 몇 개를 골라 나열했다. **고르는 순간이 빠뜨리는 순간이다.**
//
// 대책: 명령 하나로 통일한다. 도구 선택 재량을 없앤다.
//       돌린 것뿐 아니라 **건너뛴 것·미분류 고아 도구까지 전부 출력**한다.
//       침묵 실패를 침묵으로 남기지 않는 것이 이 스크립트의 존재 이유다.
//
// 사용:
//   node scripts/gate.mjs <파일.tex|.pdf|.yaml> [...파일]
//
// 종료 코드: RED 1건 이상 → 2 · 그 외 → 0
// 관련: [[feedback_ssot_routing_gap]] · [[feedback_pre_task_policy_gate]]
// ══════════════════════════════════════════════════════════════════════════

import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const scriptDir = path.dirname(decodeURIComponent(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')));
const projectRoot = path.resolve(scriptDir, '..');

// ── 파일 종류 판정 (master-feedback-check.mjs 의 classifyFile 과 동일 규약) ──
function classify(fp) {
  const base = path.basename(fp).toLowerCase();
  if (base.endsWith('.pdf')) return 'pdf';
  if (base.endsWith('.yaml') || base.endsWith('.yml')) return '청사진';
  if (base.includes('답지') || base.includes('solution')) return '답지';
  if (base.endsWith('.tex')) return '본문';
  return '기타';
}

// ── 매니페스트 ──────────────────────────────────────────────────────────────
// kinds : 이 도구를 적용할 파일 종류
// needs : 'tikz' → 파일에 그림이 있을 때만 실행
// runner: 'node' | 'python'
//
// 🔴 여기에 없는 게이트급 도구는 "미분류"로 출력된다. 미분류를 0으로 만드는 것이
//    이 매니페스트의 목표다. 새 도구를 만들면 반드시 여기에 등재하라.
// ── 🔴 다인자 도구 지원 (2026-07-30 세션 105 신설) ──────────────────────────
//   일부 도구는 <문제.tex> <답지.tex> 처럼 2인자를 요구한다. 종전 게이트는 단일 인자만
//   넘겨 「인자형 불일치」로 건너뛰었고, 그 축은 자동 검사에서 통째로 빠졌다.
//   (실측: figure-answer-leakage-check — 답 노출 축이 한 번도 돌지 않았다)
//   이제 매니페스트 항목에 argv(target) 를 두면 게이트가 그 인자 목록으로 호출한다.
//   argv 가 null 을 포함하면(형제 파일 부재) 건너뛰고 사유를 남긴다.
function siblingByRole(target, role) {
  const dir = path.dirname(target);
  const base = path.basename(target);
  // 회차 파일 관례: <회차>-문제.tex · <회차>-답지.tex · 청사진.yaml
  if (role === '답지') {
    const direct = path.join(dir, base.replace(/-문제\.tex$/, '-답지.tex'));
    if (fs.existsSync(direct)) return direct;
    const found = fs.readdirSync(dir).find(f => /답지.*\.tex$/.test(f));
    return found ? path.join(dir, found) : null;
  }
  if (role === '문제') {
    const direct = path.join(dir, base.replace(/-답지\.tex$/, '-문제.tex'));
    if (fs.existsSync(direct)) return direct;
    const found = fs.readdirSync(dir).find(f => /문제.*\.tex$/.test(f));
    return found ? path.join(dir, found) : null;
  }
  if (role === '청사진') {
    const c = path.join(dir, '청사진.yaml');
    return fs.existsSync(c) ? c : null;
  }
  return null;
}

const MANIFEST = [
  // ── 공통 (전 파일) ──
  { tool: 'master-feedback-check.mjs',   kinds: ['본문', '답지', '청사진'], runner: 'node' },
  { tool: 'permanent-policy-check.mjs',  kinds: ['본문', '답지', '청사진'], runner: 'node' },

  // ── tex 공통 ──
  { tool: 'overfull-check.mjs',          kinds: ['본문', '답지'], runner: 'node' },
  { tool: 'wording-check.mjs',           kinds: ['본문', '답지'], runner: 'node' },
  // curriculum-scope-check.mjs 는 <청사진.yaml> <문제.tex> 2인자를 요구 → 단일 인자 호출 불가.
  // 청사진 대조가 필요하므로 회차 단위로 따로 호출한다 (2026-07-30 실측 확인).

  // ── 🔴 그래프·도해 (SSOT §2b · 그림 있을 때만) ──
  { tool: 'figure-effective-check.mjs',  kinds: ['본문', '답지'], needs: 'tikz', runner: 'node' },
  { tool: 'graph-position-audit.mjs',    kinds: ['본문', '답지'], needs: 'tikz', runner: 'node' },
  { tool: 'figure-check.mjs',            kinds: ['본문', '답지'], needs: 'tikz', runner: 'node' },
  { tool: 'tikz-overlap-check.mjs',      kinds: ['본문', '답지'], needs: 'tikz', runner: 'node' },
  // 🔴 2인자 <문제.tex> <답지.tex>. 2026-07-30 파서 수리(\dmsoltitle + dmanswerbox)와
  //    함께 게이트에 정식 편입 — 종전에는 「인자형 불일치」로 한 번도 돌지 않았다.
  { tool: 'figure-answer-leakage-check.mjs', kinds: ['본문'], needs: 'tikz', runner: 'node',
    argv: (tgt) => [tgt, siblingByRole(tgt, '답지')] },

  // ── 본문(시험지) 전용 ──
  { tool: 'choices-width-check.mjs',            kinds: ['본문'], runner: 'node' },
  { tool: 'choices-macro-selection-check.mjs',  kinds: ['본문'], runner: 'node' },
  // exam-scope-check.mjs 는 <scope.yaml> <exam.tex> 2인자를 요구한다. 그런데
  //   ① 회차 폴더에 scope.yaml 이 없고
  //   ② 마스터 확정(2026-07-30)으로 **시험 범위 표기를 하지 않는다** (헤더 TARGET 칸으로 대체)
  // → 이 도구는 본 시리즈에 적용 대상이 아니다. 매니페스트에서 제외한다.
  { tool: 'total-score-check.mjs',              kinds: ['본문'], runner: 'node' },
  { tool: 'exam-color-check.mjs',               kinds: ['본문'], runner: 'node' },

  // ── 답지 전용 ──
  { tool: 'dmanswer-lint.py',            kinds: ['답지'], runner: 'python' },
  { tool: 'dmcplabel-lint.py',           kinds: ['답지'], runner: 'python' },
  // 🔴 2026-07-30 수리 후 편입 — 종전에는 DIR·FILES·BASE·PAIRS 하드코딩으로 인자를 무시하고
  //    정리편 8권을 스캔했다. sys.argv 우선 + \dmsoltitle 슬롯 폴백을 넣어 회차 답지에 적용된다.
  //    이로써 CP 상한(multi-cp-detect)·하한(no-cp-slot-check) 이 자동 검증에 들어온다.
  { tool: 'multi-cp-detect.py',          kinds: ['답지'], runner: 'python' },
  { tool: 'no-cp-slot-check.py',         kinds: ['답지'], runner: 'python',
    argv: (tgt) => [tgt, siblingByRole(tgt, '청사진')].filter(Boolean) },
  { tool: 'answer-sheet-structure-check.mjs', kinds: ['답지'], runner: 'node' },
  { tool: 'cplabel-style-check.mjs',     kinds: ['답지'], runner: 'node' },
  { tool: 'solution-verbose-check.py',   kinds: ['답지'], runner: 'python' },

  // ── 🔴 청사진 전용 (2026-07-31 세션 105 편입) ──
  //   5종 모두 <청사진.yaml> 단일 인자를 받는데 매니페스트에 없어 **한 번도 게이트에서 돌지 않았다**.
  //   exam-review 는 이것을 「필드 미기입으로 도구 무력화」로 보고했으나, 실제 원인은
  //   ① standard·primary_tool·cm2_scope 는 이미 17/17 채워져 있었고 (지적이 stale)
  //   ② 남은 무력화는 전부 v5_scores 미기입 하나에 걸려 있으며
  //   ③ 애초에 **게이트가 이 도구들을 부르지 않았다**.
  //   🔴 배선 누락은 규칙 부재와 구별되지 않는다 (feedback_ssot_routing_gap).
  { tool: 'standard-check.mjs',             kinds: ['청사진'], runner: 'node' },
  { tool: 'tool-diversity-check.mjs',       kinds: ['청사진'], runner: 'node' },
  { tool: 'composite-distribution-check.mjs', kinds: ['청사진'], runner: 'node' },
  { tool: 'structure-signature-check.mjs',  kinds: ['청사진'], runner: 'node' },
  { tool: 'blueprint-score-validator.mjs',  kinds: ['청사진'], runner: 'node' },

  // ── 🔴 그림 도구 추가 등재 3종 (2026-07-31 세션 105 · 미분류 판정) ──
  //   기등재 6종(figure-effective · graph-position-audit · figure-check · tikz-overlap ·
  //   figure-answer-leakage · pdf-label-overlap) 외에 실검사가 확인된 것만 올린다.
  { tool: 'figure-consistency-check.mjs', kinds: ['본문'], needs: 'tikz', runner: 'node',
    argv: (tgt) => { const a = siblingByRole(tgt, '답지'); return a ? [tgt, '--solution', a] : [tgt]; } },
  // 🔴 advisory 강등 (2026-07-31 세션 106 · 마스터 확정)
  //   이 도구는 TikZ 좌표로 라벨 bbox 를 **추정**해 겹침을 판정한다. 같은 대상을
  //   pdf-label-overlap-check 는 **300 DPI 픽셀로 실측**한다. 두 도구가 상충하면 실측이 정본이다.
  //   실사례: #11 라벨 O 를 이 도구는 RED 2, 픽셀 실측은 GREEN 45 · RED 0 으로 판정했다.
  //   🔴 등재를 유지하는 이유 — 이 도구는 빌드 전에 돈다. 사전 경고로서의 값은 남는다.
  { tool: 'figure-tikz-label-check.mjs',  kinds: ['본문', '답지'], needs: 'tikz', runner: 'node',
    advisory: true, supersededBy: 'pdf-label-overlap-check.mjs' },
  { tool: 'tikz-graph-quality-check.mjs', kinds: ['답지'], needs: 'tikz', runner: 'node' },

  // ── 🔴 그림 도구 미등재 판정 5종 — 적용 대상이 아니다 (같은 실측) ──
  //   figure-completeness-check : **Asymptote 전용**. 우리 그림은 TikZ 라 WARN 3건이 전부 오탐이다
  //     (C1 arrowstyle 패턴 부재 · C5 DPI 미명시 · C6 Malgun Gothic 미지정 — 셋 다 asy 관용).
  //   figure-tip-boundary-check : `draw_pen()` 호출이 있어야 검사한다 → Asymptote 전용. 스스로 「검사 대상 아님」 출력
  //   figure-need-check         : 청사진을 줘도 「슬롯 총계 0건」. 우리 청사진 스키마와 어긋남
  //   coordinate-diff-check     : `--blueprint <yaml>` 필요하나 우리 청사진에 좌표 필드가 없어 「슬롯 없음」
  //   function-graph-check      : 함수그래프 추론 슬롯을 요구 — **CM2-FN 회차용**.
  //     이 회차 범위는 GM·ST 라 0건이 정상인데 YELLOW 를 낸다. 범위별 적용이 필요하므로 무조건 등재 금지
  //
  //   🔴 이 5종은 「고장」이 아니라 **다른 대상을 위한 도구**다. 등재하면 정상 상태에 경고가 붙는다.

  // ── 🔴 난이도 축 도구 10종 — 적용 대상 판정 결과 : 전부 미등재 (2026-07-31 세션 105) ──
  //
  //   태스크 #20 이 「우선 등재 후보」로 지목한 10종을 실측한 결과 **하나도 등재 대상이 아니다**.
  //   일괄 등재했다면 게이트에 10개의 독립 검사가 늘어난 것처럼 보였겠지만 전부 헛것이다.
  //
  //   (A) v51-composite-check.mjs 의 **얇은 별칭 7종** (각 500~600 bytes · `--axis X` 를 붙여 재호출할 뿐)
  //       narrative-depth-check(N) · layer-coupling-check(L) · rigor-check(R)
  //       predictive-resistance-check(P) · translation-insight-check(T) · faithfulness-check(F)
  //       constraint-efficiency-check(E) · hint-exposure-check(H)
  //       → 등재하면 같은 도구를 8번 돌린다. 게이트 표에 8줄이 ✅ 로 늘어나 **잘못된 안심**을 준다.
  //         단일 축만 출력하고 RED 판정도 없다. 난이도 검사는 `--phase 난이도` 경로 하나로 충분하다.
  //
  //   (B) insight-depth-check.mjs — **우리 시리즈에 무력**. 두 겹으로 실패한다:
  //       ① 배점 매크로 불일치 — 도구는 `\pointbadge{}` 를 찾는데 우리 시험지는 `\pts{}` 를 쓴다
  //          → pointStar 가 전 슬롯 미정 → **17슬롯 전부 「★ 1~2」**
  //       ② 키워드 사전이 우리 발문 관용과 어긋남 (`/세 조건.*모두.*만족.*카운트/` 류 정규식)
  //          → **17슬롯 전부 「절차형 · 통찰 0」**. composite 34 인 #15 까지 그렇다.
  //       🔴 exit 0 으로 조용히 통과한다. 파싱 0건 자기 방어가 없다.
  //       이것은 곧 **판정 축을 키워드로 대신하려는 접근의 한계**이고,
  //       `bank/풀이실행-측정축-v1.md` 의 SE 축이 대체하려는 대상이다.
  //
  //   🔴 교훈: 도구가 **돌아간다는 것**과 **적용 대상이라는 것**은 다르다.
  //      태스크 #20 이 「일괄 등재하지 않는다」고 못박은 이유가 이것이다.

  // ── PDF 실측 라벨 겹침 ──
  // 🔴 이 도구는 `.pdf` 가 아니라 `<file.tex>` 를 받는다 (내부에서 렌더링해 실측).
  //    종전에 kinds:['pdf'] 로 분류해 **단 한 번도 실행되지 않았다** — PDF 실측 축이
  //    통째로 무방비였다. (2026-07-30 세션 104 · solution-author 가 검출)
  { tool: 'pdf-label-overlap-check.mjs', kinds: ['본문', '답지'], needs: 'tikz', runner: 'node' },
];

// ── 게이트급 도구 자동 발견 (미분류 검출용) ─────────────────────────────────
function discoverGateTools() {
  return fs.readdirSync(path.join(projectRoot, 'scripts'))
    .filter(f => /-(check|audit|lint)\.(mjs|py)$/.test(f))
    .sort();
}

// ── 출력 파싱 (도구별 형식 차이 흡수) ───────────────────────────────────────
//   "🔴 RED 3건" · "RED 12건 · YELLOW 1" · "RED 0 · YELLOW 0 · GREEN 4"
function parseCounts(out) {
  const red = out.match(/RED[\s:]*(\d+)/);
  const yellow = out.match(/YELLOW[\s:]*(\d+)/);
  return {
    red: red ? parseInt(red[1], 10) : null,
    yellow: yellow ? parseInt(yellow[1], 10) : null,
  };
}

function hasFigure(fp) {
  try {
    return /\\begin\{tikzpicture\}|\\includegraphics/.test(fs.readFileSync(fp, 'utf-8'));
  } catch { return false; }
}

// ── 실행 ────────────────────────────────────────────────────────────────────
const argv = process.argv.slice(2);

// ── --phase 난이도 : 8축 composite 게이트 ──────────────────────────────────
// 조판 게이트와 입력·시점이 다르므로 별도 phase 로 둔다.
// 문제.tex 만 주면 같은 폴더의 답지·청사진을 자동으로 찾아 붙인다
// (도구 인자를 사람이 나열하는 순간이 곧 빠뜨리는 순간이므로 자동 탐색한다).
const phaseIdx = argv.findIndex(a => a === '--phase');
const phase = phaseIdx > -1 ? argv[phaseIdx + 1] : null;
if (phase === '난이도') {
  const t = argv.filter((a, i) => i !== phaseIdx && i !== phaseIdx + 1)[0];
  if (!t || !fs.existsSync(t)) {
    console.error('사용: node scripts/gate.mjs --phase 난이도 <문제.tex>');
    process.exit(2);
  }
  const dir = path.dirname(t);
  const siblings = fs.readdirSync(dir);
  const answer = siblings.find(f => /답지\.tex$|solution\.tex$/.test(f));
  const bp = siblings.find(f => /^청사진\.ya?ml$/.test(f));
  const a = [path.join(projectRoot, 'scripts', 'v51-composite-check.mjs'), t];
  if (answer) a.push('--답지', path.join(dir, answer));
  if (bp) a.push('--청사진', path.join(dir, bp));
  console.log('🚪 게이트 · phase=난이도 (v5.1 8축 composite)');
  console.log(`   답지: ${answer || '(없음)'} · 청사진: ${bp || '(없음)'}\n`);
  const r = spawnSync('node', a, { encoding: 'utf-8', cwd: projectRoot });
  process.stdout.write((r.stdout || '') + (r.stderr || ''));
  console.log('\n🔎 판정 안내');
  console.log('   T·F·P 가 SEMANTIC_JUDGE 로 남아 있으면 아직 의미 판정이 기록되지 않은 것이다.');
  console.log('   청사진.yaml 의 semantic_judge 블록에 {T,F,P,why} 를 적으면 JUDGED 로 바뀐다.');
  process.exit(r.status ?? 0);
}

// 🔴 phaseIdx === -1 일 때 `i !== phaseIdx + 1` 이 `i !== 0` 이 되어
//    **대상 파일(argv[0])이 통째로 버려지던** 버그. 단일 파일 호출이 100% usage 로 빠졌다.
//    (2026-07-30 세션 104 · solution-review 가 검출. 그 전까지 "게이트 통과" 보고가 무효였다.)
const targets = phaseIdx > -1
  ? argv.filter((a, i) => i !== phaseIdx && i !== phaseIdx + 1)
  : argv;
if (targets.length === 0) {
  console.error('사용: node scripts/gate.mjs <파일.tex|.pdf|.yaml> [...]');
  console.error('      node scripts/gate.mjs --phase 난이도 <문제.tex>');
  process.exit(2);
}

console.log('🚪 게이트 단일 진입점 (gate.mjs v1.0)');
console.log('   도구를 손으로 고르지 않는다 — 매니페스트가 정본이다.\n');

let grandRed = 0;
const usedTools = new Set();

for (const targetArg of targets) {
  // 🔴 검사 도구는 cwd: projectRoot 로 실행된다. 회차 폴더에서 파일명만 넘기면
  //    전 도구가 파일을 못 찾아 **거짓 RED** 가 무더기로 난다.
  //    → 어디서 호출하든 동작하도록 인자를 절대경로로 정규화한다.
  //    (2026-07-30 세션 104 · problem-author 가 거짓 RED 10건으로 검출)
  const target = path.isAbsolute(targetArg) ? targetArg : path.resolve(process.cwd(), targetArg);
  if (!fs.existsSync(target)) {
    console.log(`❌ 파일 없음: ${target}\n`);
    grandRed++;
    continue;
  }

  const kind = classify(target);
  const fig = kind === 'pdf' ? false : hasFigure(target);

  console.log('═'.repeat(74));
  console.log(`📄 ${path.basename(target)}   [종류: ${kind}${fig ? ' · 그림 있음' : ''}]`);
  console.log('═'.repeat(74));

  const rows = [];

  for (const m of MANIFEST) {
    const applies = m.kinds.includes(kind);
    const toolPath = path.join(projectRoot, 'scripts', m.tool);

    if (!applies) continue;                       // 종류 불일치 — 조용히 제외
    usedTools.add(m.tool);

    if (!fs.existsSync(toolPath)) {
      rows.push({ tool: m.tool, status: '❌ 도구없음', note: '매니페스트에 있으나 파일 부재 (죽은 링크)' });
      grandRed++;
      continue;
    }
    if (m.needs === 'tikz' && !fig) {
      rows.push({ tool: m.tool, status: '⏭️  건너뜀', note: '이 파일에 그림 없음' });
      continue;
    }

    const cmd = m.runner === 'python' ? 'python' : 'node';
    // 다인자 도구: argv(target) 이 인자 목록을 만든다. null 이 섞이면 형제 파일이 없다는 뜻.
    let callArgs = [target];
    if (typeof m.argv === 'function') {
      const built = m.argv(target);
      if (!built || built.some(a => !a)) {
        rows.push({ tool: m.tool, status: '⏭️  건너뜀', note: '짝 파일 부재 (답지·청사진) — 회차 폴더 확인' });
        continue;
      }
      callArgs = built;
    }
    // 🔴 PYTHONIOENCODING — Windows 기본 stdout 이 cp949 라 한글 파일명이 깨져 나오고,
    //    아래 자기 방어(대상 불일치 판정)가 자기 출력을 못 알아보고 오판한다. 전 python 도구 공통.
    const res = spawnSync(cmd, [toolPath, ...callArgs], {
      encoding: 'utf-8', cwd: projectRoot,
      env: { ...process.env, PYTHONIOENCODING: 'utf-8', PYTHONUTF8: '1' },
    });

    if (res.error) {
      rows.push({ tool: m.tool, status: '⚠️  실행실패', note: String(res.error.message).slice(0, 50) });
      continue;
    }

    const out = (res.stdout || '') + (res.stderr || '');

    // ── 자기 방어 ①: 인자형 불일치 ────────────────────────────────────────
    // 매니페스트는 사람이 손으로 분류한다 → 반드시 틀린다.
    // 도구가 usage를 뱉으면 인자 개수·형태가 안 맞는 것이므로 RED로 세면 거짓 경보다.
    // (실제 사례: curriculum-scope-check.mjs 는 <청사진.yaml> <문제.tex> 2개를 요구)
    if (/(^|\n)\s*(Usage:|사용:|usage:)/.test(out)) {
      rows.push({ tool: m.tool, status: '⚠️  인자형 불일치', note: '이 도구는 다른 인자 형태를 요구 — 매니페스트 정정 필요' });
      continue;
    }

    // ── 자기 방어 ②: 대상 불일치 ──────────────────────────────────────────
    // 인자를 무시하고 고정 경로를 스캔하는 도구가 있다. 그 결과를 이 파일의 결함으로
    // 세면 거짓 경보이며, 거짓 경보는 게이트를 죽인다.
    // (실제 사례: no-cp-slot-check.py 는 인자를 무시하고 정리편 Review Note 를 스캔)
    const targetBase = path.basename(target);
    const mentionsSomeTex = /[^\s/\\]+\.(tex|pdf|yaml)/i.test(out);
    if (mentionsSomeTex && !out.includes(targetBase)) {
      rows.push({ tool: m.tool, status: '⚠️  대상 불일치', note: '인자를 무시하고 다른 파일을 검사 — 매니페스트 정정 필요' });
      continue;
    }

    const { red, yellow } = parseCounts(out);

    if (red === null && yellow === null) {
      // 건수를 못 읽음 — exit code로 판정 (보수적으로 통과 처리하되 표시)
      const ok = (res.status ?? 0) === 0;
      rows.push({ tool: m.tool, status: ok ? '✅ 통과' : '🔴 RED', note: ok ? '(건수 미출력·exit 0)' : '(건수 미출력·exit≠0)' });
      if (!ok) grandRed++;
      continue;
    }

    const r = red ?? 0, y = yellow ?? 0;
    const code = res.status ?? 0;

    // 🔴 advisory (2026-07-31 세션 106 · 마스터 확정) — 「사전 경고」 등급.
    //   상위 판정 도구가 같은 대상을 더 정확한 방법으로 재는 경우, 하위 도구의 RED 는
    //   차단이 아니라 경고다. 실측이 정적 추정을 이긴다.
    //   현재 유일 사례: figure-tikz-label-check(좌표 bbox 추정) ↔ pdf-label-overlap-check(300 DPI 픽셀 실측).
    //   🔴 advisory 는 「무시」가 아니다. 표에 🟠 로 남고 상위 도구가 GREEN 인지 반드시 함께 본다.
    if (m.advisory && (r > 0 || (r === 0 && code !== 0))) {
      rows.push({ tool: m.tool, status: `🟠 사전경고 ${r || ''}`.trim(),
                  note: `advisory · 정본은 ${m.supersededBy ?? '상위 실측 도구'}` });
      continue;
    }

    if (r > 0) { grandRed += r; rows.push({ tool: m.tool, status: `🔴 RED ${r}`, note: y ? `YELLOW ${y}` : '' }); }
    // 🔴 자기 방어 ③ (2026-07-31) — 건수가 0인데 exit≠0 이면 도구가 「셀 수 없었다」고 말한 것이다.
    //   종전에는 건수를 읽는 데 성공하면 exit code 를 통째로 무시했다. 그래서
    //   요약에 "RED: 0건" 을 찍고 exit 2 로 죽는 도구(대조 0건 자기 방어 등)가 ✅ 통과로 보고됐다.
    //   "검사해서 문제 없음"과 "검사하지 못함"은 같은 출구를 쓰면 안 된다.
    else if (code !== 0) {
      grandRed++;
      rows.push({ tool: m.tool, status: '🔴 RED', note: `건수 0인데 exit ${code} — 검사 미시행(입력 미비·자기 방어) 가능` });
    }
    else if (y > 0) { rows.push({ tool: m.tool, status: `🟡 YELLOW ${y}`, note: '' }); }
    else { rows.push({ tool: m.tool, status: '✅ 통과', note: '' }); }
  }

  const w = Math.max(...rows.map(r => r.tool.length), 10);
  for (const r of rows) {
    console.log(`  ${r.tool.padEnd(w)}  ${r.status}${r.note ? '  · ' + r.note : ''}`);
  }
  console.log('');
}

// ── M5. 침묵 실패 노출 — 마스터 지적 등재 vs 실제 작동 ──────────────────────
const fbDir = path.join(projectRoot, 'bank', '마스터-지적');
if (fs.existsSync(fbDir)) {
  const files = fs.readdirSync(fbDir).filter(f => f.endsWith('.md') && f !== 'INDEX.md' && f !== 'README.md');
  let active = 0;
  for (const f of files) {
    const c = fs.readFileSync(path.join(fbDir, f), 'utf-8');
    const fm = c.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (fm && /forbidden_keywords:\s*\n(?:\s*-\s*.+\n?)+/.test(fm[1])) active++;
  }
  const silent = files.length - active;
  console.log('─'.repeat(74));
  console.log(`📋 마스터 지적: 등재 ${files.length} / 자동차단 작동 ${active} / 🔇 침묵 ${silent}`);
  if (silent > 0) {
    console.log(`   ⚠️  ${silent}건은 등재만 되고 차단 키워드가 없어 작동하지 않는다.`);
    console.log(`      (의미 판정이 필요해 grep 부적합한 건도 포함 — 검수 에이전트가 육안 확인해야 함)`);
  }
}

// ── 미분류 고아 도구 노출 ───────────────────────────────────────────────────
const all = discoverGateTools();
const manifested = new Set(MANIFEST.map(m => m.tool));
const orphans = all.filter(t => !manifested.has(t));
console.log('─'.repeat(74));
console.log(`🧰 게이트급 도구: 전체 ${all.length} / 매니페스트 등재 ${manifested.size} / 🔶 미분류 ${orphans.length}`);
if (orphans.length > 0) {
  console.log(`   ⚠️  미분류 도구는 이 게이트가 절대 호출하지 않는다. 이번 사건의 그래프 도구 2종이`);
  console.log(`      정확히 이 상태였다. 적용 대상을 판정해 MANIFEST에 등재하라.`);
  const cols = 2, pad = Math.max(...orphans.map(o => o.length)) + 2;
  for (let i = 0; i < orphans.length; i += cols) {
    console.log('      ' + orphans.slice(i, i + cols).map(o => o.padEnd(pad)).join(''));
  }
}

console.log('─'.repeat(74));
if (grandRed > 0) {
  console.log(`\n🔴 RED 합계 ${grandRed}건 — RED 0 도달까지 다음 단계 금지.\n`);
  process.exit(2);
}
console.log('\n✅ 게이트 통과 (RED 0).\n');
process.exit(0);
