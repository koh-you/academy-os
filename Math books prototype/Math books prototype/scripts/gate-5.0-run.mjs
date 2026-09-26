#!/usr/bin/env node
// gate-5.0-run.mjs — Gate 5.0 통합 실행 스크립트
// 2026-07-28 세션 96 신설 · feedback loop P0-1 (~40% → +6%p)
//
// 단일 출처: bank/Gate-5.0-명세.md v5.3 §1·§2 (필수 16 + 시리즈 확장 3~5)
//
// 목적:
//   기존: 마스터가 15+ 도구를 각각 수동 호출 → gate 통과 확인
//   신설: --series-type 하나로 자동 dispatch · 통합 리포트 (MD/JSON) · exit 코드
//
// 사용법:
//   node scripts/gate-5.0-run.mjs \
//     --blueprint <청사진.yaml> \
//     --problem <문제.tex> \
//     --solution <답지.tex> \
//     --series-type <exam|jeongribyeon|yuhyeongpyeon|yeonseubpyeon|testpaper> \
//     [--scope <시험범위.yaml>] \
//     [--parallel] \
//     [--report <출력경로>] \
//     [--format <md|json>]
//
// 반환 코드: 0 = 전체 GREEN · 1 = RED 존재 · 2 = 오용

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

// ── 인자 파싱 ─────────────────────────────────────────────
const args = process.argv.slice(2);
const opt = {
  blueprint: null,
  problem: null,
  solution: null,
  scope: null,
  seriesType: null,
  parallel: false,
  report: null,
  format: 'md',
};

for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--blueprint') opt.blueprint = args[++i];
  else if (a === '--problem') opt.problem = args[++i];
  else if (a === '--solution') opt.solution = args[++i];
  else if (a === '--scope') opt.scope = args[++i];
  else if (a === '--series-type') opt.seriesType = args[++i];
  else if (a === '--parallel') opt.parallel = true;
  else if (a === '--report') opt.report = args[++i];
  else if (a === '--format') opt.format = args[++i];
  else if (a === '--help' || a === '-h') {
    console.log(`
Gate 5.0 통합 실행 스크립트 (필수 16 + 시리즈 확장)

사용법:
  node scripts/gate-5.0-run.mjs \\
    --blueprint <청사진.yaml> \\
    --problem <문제.tex> \\
    --solution <답지.tex> \\
    --series-type <exam|jeongribyeon|yuhyeongpyeon|yeonseubpyeon|testpaper>

선택:
  --scope <시험범위.yaml>   G1 blueprint-validate에 필수
  --parallel               도구 병렬 실행 (기본 순차)
  --report <경로>          리포트 파일 경로 (기본 stdout)
  --format <md|json>       리포트 형식 (기본 md)

반환 코드: 0 = 전체 GREEN · 1 = RED 존재 · 2 = 오용

단일 출처: bank/Gate-5.0-명세.md v5.3
`);
    process.exit(0);
  }
}

if (!opt.blueprint) {
  console.error('❌ --blueprint 필수');
  process.exit(2);
}

// ── series-type 자동 감지 ─────────────────────────────────
function autoDetectSeriesType(blueprintPath) {
  if (!fs.existsSync(blueprintPath)) return null;
  const text = fs.readFileSync(blueprintPath, 'utf-8');
  const m = text.match(/^series_type:\s*(\S+)/m);
  return m ? m[1].trim() : null;
}

if (!opt.seriesType) {
  opt.seriesType = autoDetectSeriesType(opt.blueprint);
  if (!opt.seriesType) {
    console.error('❌ --series-type 지정 필요 (청사진 series_type 필드 없음)');
    process.exit(2);
  }
  console.error(`ℹ️  series_type 자동 감지: ${opt.seriesType}`);
}

const VALID_SERIES = ['exam', 'jeongribyeon', 'yuhyeongpyeon', 'yeonseubpyeon', 'testpaper'];
if (!VALID_SERIES.includes(opt.seriesType)) {
  console.error(`❌ series-type 오용: ${opt.seriesType} (${VALID_SERIES.join('|')})`);
  process.exit(2);
}

// ── CM1/CM2 감지 (G6·G15 dispatch) ────────────────────────
function detectSubject(blueprintPath) {
  const text = fs.readFileSync(blueprintPath, 'utf-8');
  if (/unit:\s*CM1-/.test(text) || /subject:\s*CM1/.test(text) || /공통수학1/.test(text)) return 'CM1';
  if (/unit:\s*CM2-/.test(text) || /subject:\s*CM2/.test(text) || /공통수학2/.test(text)) return 'CM2';
  return 'UNKNOWN';
}
const subject = detectSubject(opt.blueprint);

// ── 게이트 레지스트리 (Gate 5.0 명세 §1·§2 매핑) ──────────
// 각 gate: { id, name, tool, buildArgs, requires, seriesOnly, subjectOnly, exceptCondition }
const GATES = [
  // §1. 필수 게이트 (시리즈 무관 16 도구)
  {
    id: 'G1', name: 'blueprint-validate', tool: 'blueprint-validate.mjs',
    buildArgs: (o) => o.scope ? [o.blueprint, o.scope] : [o.blueprint],
    requires: ['blueprint'],
    note: 'scope 없으면 skip',
    skipIf: (o) => !o.scope,
  },
  {
    id: 'G2', name: 'blueprint-score-validator', tool: 'blueprint-score-validator.mjs',
    buildArgs: (o) => [o.blueprint],
    requires: ['blueprint'],
  },
  {
    id: 'G3', name: 'source-filter --verify', tool: 'source-filter.mjs',
    buildArgs: (o) => ['--verify', o.blueprint],
    requires: ['blueprint'],
  },
  {
    id: 'G3-a', name: 'source-id-format-check', tool: 'source-id-format-check.mjs',
    buildArgs: (o) => [o.blueprint],
    requires: ['blueprint'],
  },
  {
    id: 'G4', name: 'copyright-similarity-check', tool: 'copyright-similarity-check.mjs',
    // 실제 CLI: --variant <path> --slot N --source <id> (per-slot 도구)
    // Gate 5.0 통합 실행에서는 whole-file 실행 불가 → 수동 per-slot 호출로 우회
    buildArgs: () => [],
    requires: [],
    skipIf: () => true,
    note: 'per-slot 도구 · 수동 호출 필요',
  },
  {
    id: 'G5', name: 'master-feedback-check', tool: 'master-feedback-check.mjs',
    buildArgs: (o) => [o.problem, o.solution].filter(Boolean),
    requires: ['problem'],
  },
  {
    id: 'G6', name: 'cm1-curriculum-check', tool: 'cm1-curriculum-check.mjs',
    buildArgs: (o) => [o.problem, o.solution].filter(Boolean),
    requires: ['problem'],
    subjectOnly: 'CM1',
  },
  {
    id: 'G7', name: 'standard-check', tool: 'standard-check.mjs',
    // 실제 CLI: <청사진.yaml> · slots 배열 필요 (정리편 청사진에는 없음)
    buildArgs: (o) => [o.blueprint],
    requires: ['blueprint'],
    seriesOnly: ['exam', 'testpaper'],
  },
  {
    id: 'G8', name: 'overfull-check', tool: 'overfull-check.mjs',
    buildArgs: (o) => [o.problem],
    requires: ['problem'],
    note: '.log 파일 필요 (빌드 후 실행)',
    skipIf: (o) => !o.problem || !fs.existsSync(o.problem.replace(/\.tex$/, '.log')),
  },
  {
    id: 'G9', name: 'choices-width-check', tool: 'choices-width-check.mjs',
    buildArgs: (o) => [o.problem],
    requires: ['problem'],
  },
  {
    id: 'G10', name: 'figure-need-compliance', tool: 'figure-need-compliance.mjs',
    // 실제 CLI: <blueprint> --problem <p> [--solution <s>]
    buildArgs: (o) => {
      const a = [o.blueprint, '--problem', o.problem];
      if (o.solution) a.push('--solution', o.solution);
      return a;
    },
    requires: ['blueprint', 'problem'],
  },
  {
    id: 'G11', name: 'figure-answer-leakage-check', tool: 'figure-answer-leakage-check.mjs',
    buildArgs: (o) => [o.problem, o.solution].filter(Boolean),
    requires: ['problem'],
  },
  {
    id: 'G12', name: 'figure-tikz-label-check', tool: 'figure-tikz-label-check.mjs',
    // 실제 CLI: <파일.tex> (단일 파일 · 여러 파일 지원 X)
    buildArgs: (o) => [o.problem],
    requires: ['problem'],
  },
  {
    id: 'G13', name: 'insight-depth-check', tool: 'insight-depth-check.mjs',
    // 실제 CLI: <test.tex> · \begin{problem} 환경 파싱 (정리편 dmproblem/dmexample 미지원)
    buildArgs: (o) => [o.problem],
    requires: ['problem'],
    seriesOnly: ['exam', 'testpaper'],
  },
  {
    id: 'G14', name: 'structure-signature-check', tool: 'structure-signature-check.mjs',
    buildArgs: (o) => [o.blueprint],
    requires: ['blueprint'],
  },
  {
    id: 'G15', name: 'cm1-vendor-out-of-scope', tool: 'cm1-vendor-out-of-scope.mjs',
    buildArgs: (o) => ['--summary'],
    requires: [],
    subjectOnly: 'CM1',
    seriesOnly: ['exam', 'testpaper'],
  },

  // §2. 시리즈 확장 · 시험지 (exam)
  {
    id: 'GX1', name: 'total-score-check', tool: 'total-score-check.mjs',
    buildArgs: (o) => [o.blueprint],
    requires: ['blueprint'],
    seriesOnly: ['exam', 'testpaper'],
  },
  {
    id: 'GX2', name: 'exam-layout-analyzer', tool: 'exam-layout-analyzer.mjs',
    buildArgs: (o) => [o.problem],
    requires: ['problem'],
    seriesOnly: ['exam'],
  },
  {
    id: 'GX3', name: 'cross-round-insight-check', tool: 'cross-round-insight-check.mjs',
    buildArgs: (o) => [o.blueprint],
    requires: ['blueprint'],
    seriesOnly: ['exam'],
  },

  // §2. 시리즈 확장 · 정리편·유형편·연습편
  {
    id: 'GJ1', name: 'cplabel-style-check', tool: 'cplabel-style-check.mjs',
    buildArgs: (o) => [o.solution].filter(Boolean),
    requires: ['solution'],
    seriesOnly: ['jeongribyeon', 'yuhyeongpyeon', 'yeonseubpyeon'],
  },
  {
    id: 'GJ3', name: 'dmsolution-hangindent-check', tool: 'dmsolution-hangindent-check.mjs',
    buildArgs: (o) => [o.solution].filter(Boolean),
    requires: ['solution'],
    seriesOnly: ['jeongribyeon', 'yuhyeongpyeon', 'yeonseubpyeon'],
  },
  {
    id: 'GJ4', name: 'l3-pool-strictness-check', tool: 'l3-pool-strictness-check.mjs',
    buildArgs: (o) => [o.blueprint],
    requires: ['blueprint'],
    seriesOnly: ['jeongribyeon', 'yuhyeongpyeon', 'yeonseubpyeon'],
  },

  // §2. 시리즈 확장 · 테스트지
  {
    id: 'GT2', name: 'star-consistency-check', tool: 'star-consistency-check.mjs',
    buildArgs: (o) => [o.blueprint],
    requires: ['blueprint'],
    seriesOnly: ['testpaper'],
  },
];

// ── 게이트 필터링 ─────────────────────────────────────────
function shouldRunGate(gate, opt, subject) {
  if (gate.seriesOnly && !gate.seriesOnly.includes(opt.seriesType)) return { run: false, reason: `series ${opt.seriesType} 제외` };
  if (gate.subjectOnly && gate.subjectOnly !== subject) return { run: false, reason: `subject ${subject} 제외` };
  if (gate.skipIf && gate.skipIf(opt)) return { run: false, reason: gate.note || 'skipIf true' };
  for (const req of (gate.requires || [])) {
    if (!opt[req]) return { run: false, reason: `--${req} 미제공` };
  }
  // 파일 존재 확인
  for (const req of (gate.requires || [])) {
    if (opt[req] && !fs.existsSync(opt[req])) return { run: false, reason: `파일 없음: ${opt[req]}` };
  }
  return { run: true };
}

// ── 도구 실행 ─────────────────────────────────────────────
function runGate(gate, opt) {
  return new Promise((resolve) => {
    const toolPath = path.join(ROOT, 'scripts', gate.tool);
    if (!fs.existsSync(toolPath)) {
      resolve({
        id: gate.id, name: gate.name, status: 'SKIP',
        reason: `도구 파일 없음: scripts/${gate.tool}`,
        exitCode: null, stdout: '', stderr: '', duration_ms: 0,
      });
      return;
    }
    const startTime = Date.now();
    const cmdArgs = ['scripts/' + gate.tool, ...gate.buildArgs(opt)];
    const proc = spawn('node', cmdArgs, { cwd: ROOT, shell: false });
    let stdout = '';
    let stderr = '';
    proc.stdout.on('data', (d) => { stdout += d.toString(); });
    proc.stderr.on('data', (d) => { stderr += d.toString(); });
    proc.on('close', (code) => {
      const duration_ms = Date.now() - startTime;
      // exit code 판정: 0=GREEN·YELLOW · 2=오용/ERROR · 그 외(1·3·...)=RED
      // (일부 도구는 비표준 exit 3 사용 · e.g. figure-tikz-label-check)
      let status;
      if (code === 0) status = 'GREEN';
      else if (code === 2) status = 'ERROR';
      else status = 'RED';
      // stdout에 YELLOW/WARN 언급이 많은 경우 GREEN → YELLOW 힌트
      if (status === 'GREEN' && /YELLOW|⚠️|경고|WARN/i.test(stdout + stderr)) {
        status = 'YELLOW';
      }
      resolve({
        id: gate.id, name: gate.name, status,
        exitCode: code, stdout, stderr, duration_ms,
      });
    });
    proc.on('error', (err) => {
      resolve({
        id: gate.id, name: gate.name, status: 'ERROR',
        reason: err.message,
        exitCode: null, stdout: '', stderr: err.message, duration_ms: Date.now() - startTime,
      });
    });
  });
}

// ── 실행 ─────────────────────────────────────────────────
(async () => {
  const runList = [];
  const skipList = [];
  for (const gate of GATES) {
    const decision = shouldRunGate(gate, opt, subject);
    if (decision.run) runList.push(gate);
    else skipList.push({ id: gate.id, name: gate.name, reason: decision.reason });
  }

  console.error(`\n▶ Gate 5.0 실행 시작 — series=${opt.seriesType} subject=${subject}`);
  console.error(`   실행: ${runList.length}개 · 스킵: ${skipList.length}개 · 모드: ${opt.parallel ? 'parallel' : 'sequential'}\n`);

  const startTime = Date.now();
  let results;
  if (opt.parallel) {
    results = await Promise.all(runList.map((g) => runGate(g, opt)));
  } else {
    results = [];
    for (const g of runList) {
      process.stderr.write(`  ▸ ${g.id} ${g.name} ... `);
      const r = await runGate(g, opt);
      results.push(r);
      const badge = r.status === 'GREEN' ? '✓' : r.status === 'YELLOW' ? '⚠' : r.status === 'RED' ? '✗' : '?';
      console.error(`${badge} ${r.status} (${r.duration_ms}ms)`);
    }
  }
  const totalDuration = Date.now() - startTime;

  // ── 집계 ─────────────────────────────────────────────
  const summary = {
    total: results.length,
    GREEN: results.filter((r) => r.status === 'GREEN').length,
    YELLOW: results.filter((r) => r.status === 'YELLOW').length,
    RED: results.filter((r) => r.status === 'RED').length,
    ERROR: results.filter((r) => r.status === 'ERROR').length,
    SKIP: skipList.length,
    duration_ms: totalDuration,
  };

  // ── 리포트 ───────────────────────────────────────────
  let report;
  if (opt.format === 'json') {
    report = JSON.stringify({
      meta: {
        blueprint: opt.blueprint, problem: opt.problem, solution: opt.solution,
        seriesType: opt.seriesType, subject, parallel: opt.parallel,
        timestamp: new Date().toISOString(),
      },
      summary, results, skipped: skipList,
    }, null, 2);
  } else {
    const lines = [];
    lines.push(`# Gate 5.0 통합 실행 리포트`);
    lines.push('');
    lines.push(`- **시각**: ${new Date().toISOString()}`);
    lines.push(`- **series_type**: ${opt.seriesType} · **subject**: ${subject}`);
    lines.push(`- **blueprint**: \`${opt.blueprint}\``);
    if (opt.problem) lines.push(`- **problem**: \`${opt.problem}\``);
    if (opt.solution) lines.push(`- **solution**: \`${opt.solution}\``);
    lines.push(`- **모드**: ${opt.parallel ? 'parallel' : 'sequential'} · 총 소요 ${totalDuration}ms`);
    lines.push('');
    lines.push(`## 요약`);
    lines.push('');
    lines.push(`| 상태 | 개수 |`);
    lines.push(`|---|---:|`);
    lines.push(`| ✓ GREEN | ${summary.GREEN} |`);
    lines.push(`| ⚠ YELLOW | ${summary.YELLOW} |`);
    lines.push(`| ✗ RED | ${summary.RED} |`);
    lines.push(`| ? ERROR | ${summary.ERROR} |`);
    lines.push(`| — SKIP | ${summary.SKIP} |`);
    lines.push(`| **총** | **${summary.total + summary.SKIP}** |`);
    lines.push('');
    lines.push(`## 게이트별 결과`);
    lines.push('');
    lines.push(`| ID | 이름 | 상태 | 소요(ms) | exit |`);
    lines.push(`|---|---|:---:|---:|---:|`);
    for (const r of results) {
      const badge = r.status === 'GREEN' ? '✓' : r.status === 'YELLOW' ? '⚠' : r.status === 'RED' ? '✗' : '?';
      lines.push(`| ${r.id} | ${r.name} | ${badge} ${r.status} | ${r.duration_ms} | ${r.exitCode} |`);
    }
    if (skipList.length > 0) {
      lines.push('');
      lines.push(`## 스킵된 게이트`);
      lines.push('');
      lines.push(`| ID | 이름 | 사유 |`);
      lines.push(`|---|---|---|`);
      for (const s of skipList) {
        lines.push(`| ${s.id} | ${s.name} | ${s.reason} |`);
      }
    }
    const reds = results.filter((r) => r.status === 'RED' || r.status === 'ERROR');
    if (reds.length > 0) {
      lines.push('');
      lines.push(`## RED / ERROR 상세`);
      for (const r of reds) {
        lines.push('');
        lines.push(`### ${r.id} ${r.name}`);
        lines.push('');
        lines.push('```');
        const combined = ((r.stdout || '') + '\n' + (r.stderr || '')).trim();
        lines.push(combined.slice(0, 4000));
        lines.push('```');
      }
    }
    report = lines.join('\n');
  }

  if (opt.report) {
    fs.mkdirSync(path.dirname(opt.report), { recursive: true });
    fs.writeFileSync(opt.report, report, 'utf-8');
    console.error(`\n📄 리포트 저장: ${opt.report}`);
  } else {
    console.log(report);
  }

  // ── 종료 ───────────────────────────────────────────
  console.error(`\n결과: GREEN=${summary.GREEN} · YELLOW=${summary.YELLOW} · RED=${summary.RED} · ERROR=${summary.ERROR} · SKIP=${summary.SKIP}`);
  if (summary.RED > 0 || summary.ERROR > 0) process.exit(1);
  process.exit(0);
})().catch((err) => {
  console.error('FATAL:', err);
  process.exit(2);
});
