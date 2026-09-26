#!/usr/bin/env node
// blind-twin-evaluate.mjs — CFES Layer A 3축 통합 판정
// 2026-07-28 세션 97 신설 · CFES Phase A-1
//
// 목적 (기획안 v1.1 §3.1.1):
//   창작 문항 X (as P) vs 원본 anchor Y (as Q) 를 blind pair로 3축 판정.
//   A1 자동 도구 · A2 에이전트 · A3 LLM Pairwise 통합 → WIN/LOSS/PENDING
//
// 3축 :
//   A1 자동 도구 : master-feedback-check + standard-check + cm1-curriculum (P·Q 각각 실행 · 위반 수 비교)
//   A2 에이전트  : problem-review · solution-review (매뉴얼 실행 · --a2-results 옵션으로 결과 전달)
//   A3 LLM Pairwise : llm-pairwise-rank.mjs (자동)
//
// 승리 조건 (P를 창작 · Q를 원본으로 가정) :
//   - A1 : P의 위반 수 ≤ Q + 2 (관대 · 창작은 원본만큼만 결점 있어도 OK)
//   - A2 : 지정 시 P의 등급 ≥ Q · 미지정 시 PENDING
//   - A3 : forward 판정 winner ∈ [a_over_b · equal] + confidence ≥ 0.6
//
// 사용법 :
//   node scripts/blind-twin-evaluate.mjs \
//     --creation <창작.tex> \
//     --anchor <원본.tex> \
//     --unit CM2-GM-원 \
//     --insight I-EQV \
//     --star 5 \
//     [--a3-mode dry-run|prompt-only|api]     # 기본 prompt-only
//     [--a2-results <경로.yaml>]              # 매뉴얼 A2 결과 (선택)
//     [--report <경로.md>]
//
// 반환 : 0 = WIN · 1 = LOSS · 2 = PENDING (마스터 개입 대기) · 3 = 오용

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { runA1 as runA1Lib } from './lib/cfes-a1.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

// ── 인자 파싱 ─────────────────────────────────────────────
const args = process.argv.slice(2);
const opt = {
  creation: null, anchor: null,
  unit: null, insight: null, star: null,
  a3Mode: 'prompt-only',
  a2Results: null,
  report: null,
};
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--creation') opt.creation = args[++i];
  else if (a === '--anchor') opt.anchor = args[++i];
  else if (a === '--unit') opt.unit = args[++i];
  else if (a === '--insight') opt.insight = args[++i];
  else if (a === '--star') opt.star = args[++i];
  else if (a === '--a3-mode') opt.a3Mode = args[++i];
  else if (a === '--a2-results') opt.a2Results = args[++i];
  else if (a === '--report') opt.report = args[++i];
  else if (a === '--help' || a === '-h') {
    console.log(`
blind-twin-evaluate.mjs — CFES Layer A 3축 통합

사용법 :
  node scripts/blind-twin-evaluate.mjs \\
    --creation <창작.tex> --anchor <원본.tex> \\
    --unit <소단원> --insight <통찰> --star <등급> \\
    [--a3-mode dry-run|prompt-only|api] \\
    [--a2-results <경로>] [--report <경로>]

반환 : 0 = WIN · 1 = LOSS · 2 = PENDING · 3 = 오용
`);
    process.exit(0);
  }
}

if (!opt.creation || !opt.anchor) { console.error('❌ --creation 과 --anchor 필수'); process.exit(3); }
if (!fs.existsSync(opt.creation)) { console.error(`❌ 창작 파일 없음 : ${opt.creation}`); process.exit(3); }
if (!fs.existsSync(opt.anchor)) { console.error(`❌ 원본 파일 없음 : ${opt.anchor}`); process.exit(3); }

// ── kill switch 체크 ────────────────────────────────────
const KILL_SWITCH_FILE = path.join(ROOT, 'bank', 'creation-freedom-lock.md');
if (fs.existsSync(KILL_SWITCH_FILE)) {
  console.error(`🛑 CFES kill switch 활성 : ${KILL_SWITCH_FILE}`);
  console.error(`   blind-twin-evaluate 실행 차단`);
  process.exit(3);
}

console.error(`\n▶ Blind Twin Evaluate 시작`);
console.error(`  창작 (P) : ${opt.creation}`);
console.error(`  원본 (Q) : ${opt.anchor}`);
console.error(`  판정 대상 : unit=${opt.unit || '?'} · insight=${opt.insight || '?'} · star=${opt.star || '?'}\n`);

// 보조 도구 실행 (A3용)
function runTool(toolPath, args) {
  const result = spawnSync('node', [toolPath, ...args], { cwd: ROOT, encoding: 'utf-8' });
  return { exitCode: result.status, stdout: result.stdout || '', stderr: result.stderr || '' };
}

// ── A1 축 : cfes-a1 lib (cm1-curriculum·master-feedback exit-code) ──
// (구 countViolations 토큰 휴리스틱 폐기 · 세션 102 발견 1 대응)
console.error(`▸ A1 축 : 자동 도구 (hard-violation exit-code · P vs Q)`);
const a1 = runA1Lib(opt.creation, opt.anchor, ROOT);
const a1PTotal = a1.itemHard;
const a1QTotal = a1.anchorHard;
const a1Result = a1.result;
const a1PScores = a1.detail.map(d => ({ tool: d.tool, violations: d.item }));
const a1QScores = a1.detail.map(d => ({ tool: d.tool, violations: d.anchor }));
for (const d of a1.detail) console.error(`   ${d.tool} : P=${d.item} · Q=${d.anchor}`);
console.error(`   → A1 hard violation : P=${a1PTotal} · Q=${a1QTotal} → ${a1Result}\n`);

// ── A2 축 : 에이전트 (매뉴얼) ────────────────────────────
console.error(`▸ A2 축 : 에이전트 (problem-review · solution-review)`);
let a2Result = 'PENDING';
let a2Detail = null;
if (opt.a2Results && fs.existsSync(opt.a2Results)) {
  const a2Text = fs.readFileSync(opt.a2Results, 'utf-8');
  // 기대 YAML : p_grade · q_grade · winner
  const pMatch = a2Text.match(/p_grade:\s*(\S+)/);
  const qMatch = a2Text.match(/q_grade:\s*(\S+)/);
  const winMatch = a2Text.match(/winner:\s*(\S+)/);
  a2Detail = {
    p_grade: pMatch ? pMatch[1] : '?',
    q_grade: qMatch ? qMatch[1] : '?',
    winner: winMatch ? winMatch[1] : '?',
  };
  const winner = a2Detail.winner;
  a2Result = (winner === 'P' || winner === 'equal' || winner === 'p_ok') ? 'PASS' : 'FAIL';
  console.error(`   결과 로드 : P=${a2Detail.p_grade} · Q=${a2Detail.q_grade} · winner=${winner} → ${a2Result}`);
} else {
  console.error(`   ⚠️  --a2-results 미지정 · problem-review·solution-review 에이전트 매뉴얼 실행 필요`);
  console.error(`   결과를 YAML로 저장 후 --a2-results 로 재실행`);
}
console.error('');

// ── A3 축 : LLM Pairwise ─────────────────────────────────
console.error(`▸ A3 축 : LLM Pairwise (llm-pairwise-rank.mjs)`);
const a3OutFile = path.join(ROOT, '_scratch', `a3-${Date.now()}.yaml`);
const a3Result = runTool(path.join(ROOT, 'scripts', 'llm-pairwise-rank.mjs'), [
  '--p', opt.creation,
  '--q', opt.anchor,
  '--dimension', 'composite',
  '--mode', opt.a3Mode,
  '--reverse-check',
  '--output', a3OutFile,
]);
let a3Winner = 'PENDING';
let a3Confidence = 0;
let a3ReverseConsistent = null;
if (fs.existsSync(a3OutFile)) {
  const a3Text = fs.readFileSync(a3OutFile, 'utf-8');
  const winMatch = a3Text.match(/forward:\s*[\s\S]*?winner:\s*(\S+)/);
  const confMatch = a3Text.match(/forward:\s*[\s\S]*?avg_confidence:\s*([\d.]+)/);
  const revMatch = a3Text.match(/reverse_consistent:\s*(\S+)/);
  a3Winner = winMatch ? winMatch[1] : '?';
  a3Confidence = confMatch ? parseFloat(confMatch[1]) : 0;
  a3ReverseConsistent = revMatch ? revMatch[1] === 'true' : null;
  console.error(`   A3 : winner=${a3Winner} · confidence=${a3Confidence.toFixed(2)} · reverse_consistent=${a3ReverseConsistent}`);
} else if (opt.a3Mode === 'prompt-only') {
  console.error(`   ⚠️  prompt-only 모드 · _scratch/llm-prompts/에 프롬프트 저장됨`);
  console.error(`   매뉴얼 판정 후 --a3-mode dry-run 또는 --a3-mode api 로 재실행`);
} else {
  console.error(`   ❌ A3 실행 실패 (exit ${a3Result.exitCode})`);
}

let a3PassFail = 'PENDING';
if (a3Winner !== 'PENDING' && a3Winner !== '?') {
  // WIN 조건 : winner=a_over_b (P 우세) OR equal · confidence ≥ 0.6
  const winnerPass = ['a_over_b', 'equal'].includes(a3Winner);
  a3PassFail = (winnerPass && a3Confidence >= 0.6) ? 'PASS' : 'FAIL';
}
console.error(`   → A3 판정 : ${a3PassFail}\n`);

// ── 최종 통합 ─────────────────────────────────────────
const axisResults = { A1: a1Result, A2: a2Result, A3: a3PassFail };
const hasFail = Object.values(axisResults).includes('FAIL');
const hasPending = Object.values(axisResults).includes('PENDING');
let final;
if (hasFail) final = 'LOSS';
else if (hasPending) final = 'PENDING';
else final = 'WIN';

console.error(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
console.error(`  A1 : ${a1Result} · A2 : ${a2Result} · A3 : ${a3PassFail}`);
console.error(`  최종 : ${final}`);
console.error(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);

// ── 리포트 ────────────────────────────────────────────
if (opt.report) {
  const lines = [];
  lines.push(`# Blind Twin Evaluate 리포트`);
  lines.push('');
  lines.push(`- **일자** : ${new Date().toISOString()}`);
  lines.push(`- **창작 (P)** : \`${opt.creation}\``);
  lines.push(`- **원본 (Q)** : \`${opt.anchor}\``);
  lines.push(`- **셀** : unit=${opt.unit || '?'} · insight=${opt.insight || '?'} · star=${opt.star || '?'}`);
  lines.push(`- **A3 모드** : ${opt.a3Mode}`);
  lines.push('');
  lines.push(`## 최종 판정 : **${final}**`);
  lines.push('');
  lines.push(`| 축 | 판정 | 세부 |`);
  lines.push(`|---|:---:|---|`);
  lines.push(`| A1 자동 도구 | ${a1Result} | P 위반 ${a1PTotal} · Q 위반 ${a1QTotal} |`);
  lines.push(`| A2 에이전트 | ${a2Result} | ${a2Detail ? `P=${a2Detail.p_grade} · Q=${a2Detail.q_grade} · winner=${a2Detail.winner}` : '매뉴얼 실행 대기'} |`);
  lines.push(`| A3 LLM Pairwise | ${a3PassFail} | winner=${a3Winner} · confidence=${a3Confidence.toFixed(2)} · reverse_consistent=${a3ReverseConsistent} |`);
  lines.push('');
  if (a1PScores.length > 0) {
    lines.push(`## A1 상세`);
    lines.push('');
    lines.push(`| 도구 | P 위반 | Q 위반 |`);
    lines.push(`|---|---:|---:|`);
    for (let i = 0; i < a1PScores.length; i++) {
      lines.push(`| ${a1PScores[i].tool} | ${a1PScores[i].violations} | ${a1QScores[i].violations} |`);
    }
    lines.push('');
  }
  lines.push(`## 다음 스텝`);
  if (final === 'PENDING') {
    lines.push(`- A2 매뉴얼 실행 (problem-review·solution-review) 후 결과 YAML 저장 · \`--a2-results\` 재실행`);
    lines.push(`- A3 prompt-only 시 : 프롬프트 매뉴얼 판정 후 결과 append · dry-run 또는 api 모드로 재실행`);
  } else if (final === 'WIN') {
    lines.push(`- 창작 편입 승인 · Freedom Gauge 셀 성공 기록 (WIN)`);
    lines.push(`- 승격 조건 충족 시 자유도 등급 상향 검토`);
  } else {
    lines.push(`- 창작 편입 기각 · Freedom Gauge 셀 실패 기록 (LOSS)`);
    lines.push(`- retrospective-learner 호출 · 원인 분류 · Layer D rollback 트리거 여부 확인`);
  }
  fs.mkdirSync(path.dirname(opt.report), { recursive: true });
  fs.writeFileSync(opt.report, lines.join('\n'), 'utf-8');
  console.error(`📄 리포트 : ${path.relative(ROOT, opt.report)}`);
}

if (final === 'WIN') process.exit(0);
if (final === 'LOSS') process.exit(1);
process.exit(2);
