#!/usr/bin/env node
// discrimination-test-runner.mjs — CFES 메커니즘 C · 판별력 테스트 러너
// 2026-07-29 세션 102 신설 · CFES Phase A-2 재편 (기획안 v1.2 §5.2.2)
//
// 목적 (v1.2 §3.1.2):
//   정상군(clean) + 결함군(flawed) 을 자동 pipeline에 일괄 통과시켜
//   판별력(결함 검출율)과 오판율(정상 오검출율)을 실측 · F유형별 매트릭스·blindspot 산출.
//
//   판별력 = 결함군 중 LOSS/PENDING 으로 잡은 비율          [목표 ≥ 90%]
//   오판율 = 정상군 중 LOSS/PENDING 으로 오판한 비율         [목표 ≤ 10%]
//
// 판정 축 (v1.2 §3.1.1):
//   A1 자동 도구 : master-feedback-check (item vs anchor 위반 수 비교) — 자동·결정론
//   A2 에이전트 / A3 LLM Pairwise : --verdicts YAML 로 주입 (매뉴얼 판정 결과)
//   최종 = blind-twin 결합 (any FAIL→LOSS · else any PENDING→PENDING · else WIN)
//
// 사용법:
//   node scripts/discrimination-test-runner.mjs \
//     --clean-dir  bank/creation-archive/phase-a2/clean \
//     --flawed-dir bank/creation-archive/phase-a2/flawed \
//     --anchor-dir bank/creation-archive/phase-a2/anchors \
//     [--verdicts <verdicts.yaml>]   # A2·A3 판정 주입 (없으면 PENDING)
//     [--report <경로.md>]
//
// anchor 해석 : item 파일명 creation-0N* → anchor-0N.tex
//
// 반환 : 0 = 판별력 ≥90% & 오판율 ≤10% · 1 = 미달 · 2 = 오용

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { runA1 } from './lib/cfes-a1.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const DISC_TARGET = 0.90;  // 판별력 목표
const FP_TARGET = 0.10;    // 오판율 상한

// ── 인자 파싱 ─────────────────────────────────────────────
const opt = { cleanDir: null, flawedDir: null, anchorDir: null, verdicts: null, report: null };
const args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--clean-dir') opt.cleanDir = args[++i];
  else if (a === '--flawed-dir') opt.flawedDir = args[++i];
  else if (a === '--anchor-dir') opt.anchorDir = args[++i];
  else if (a === '--verdicts') opt.verdicts = args[++i];
  else if (a === '--report') opt.report = args[++i];
  else if (a === '--help' || a === '-h') {
    console.log('사용법: --clean-dir --flawed-dir --anchor-dir [--verdicts] [--report]');
    process.exit(0);
  }
}
if (!opt.cleanDir || !opt.flawedDir || !opt.anchorDir) {
  console.error('❌ --clean-dir · --flawed-dir · --anchor-dir 필수'); process.exit(2);
}
for (const d of [opt.cleanDir, opt.flawedDir, opt.anchorDir]) {
  if (!fs.existsSync(d)) { console.error(`❌ 디렉터리 없음 : ${d}`); process.exit(2); }
}

// ── kill switch ─────────────────────────────────────────
const KILL = path.join(ROOT, 'bank', 'creation-freedom-lock.md');
if (fs.existsSync(KILL)) { console.error(`🛑 CFES kill switch 활성 : ${KILL}`); process.exit(2); }

// ── verdicts (A2·A3 주입) 로드 ──────────────────────────
const verdictMap = {};  // basename → { a2, a3, reasoning }
if (opt.verdicts) {
  if (!fs.existsSync(opt.verdicts)) { console.error(`❌ verdicts 없음 : ${opt.verdicts}`); process.exit(2); }
  const items = parseListYaml(fs.readFileSync(opt.verdicts, 'utf-8'));
  for (const it of items) {
    if (it.item) verdictMap[it.item] = { a2: it.a2 || 'PENDING', a3: it.a3 || 'PENDING', reasoning: it.reasoning || '' };
  }
}

// ── anchor 해석 ─────────────────────────────────────────
function anchorFor(itemFile) {
  const m = path.basename(itemFile).match(/creation-(\d+)/);
  if (!m) return null;
  const p = path.join(opt.anchorDir, `anchor-${m[1]}.tex`);
  return fs.existsSync(p) ? p : null;
}

// ── A1 축 : cfes-a1 lib (cm1-curriculum·master-feedback exit-code) ──
// (구 countViolations 토큰 휴리스틱 폐기 · 세션 102 발견 1 대응)

// ── 최종 결합 (blind-twin 로직) ─────────────────────────
function combine(a1, a2, a3) {
  const axes = [a1, a2, a3];
  if (axes.includes('FAIL')) return 'LOSS';
  if (axes.includes('PENDING')) return 'PENDING';
  return 'WIN';
}

// ── 항목 평가 ───────────────────────────────────────────
function evalItem(itemFile, group) {
  const base = path.basename(itemFile);
  const anchor = anchorFor(itemFile);
  const a1 = anchor ? runA1(itemFile, anchor, ROOT) : { result: 'PENDING', itemHard: null, anchorHard: null };
  const v = verdictMap[base] || { a2: 'PENDING', a3: 'PENDING', reasoning: '' };
  const final = combine(a1.result, v.a2, v.a3);
  const caught = final === 'LOSS' || final === 'PENDING';
  // 결함 라벨 로드
  let flaw = null, expected = null;
  const labelPath = itemFile.replace(/\.tex$/, '.label.yaml');
  if (fs.existsSync(labelPath)) {
    const lt = fs.readFileSync(labelPath, 'utf-8');
    flaw = (lt.match(/flaw_type:\s*(\S+)/) || [])[1] || null;
    expected = (lt.match(/expected_verdict:\s*(\S+)/) || [])[1] || null;
  }
  return { base, group, anchor: anchor ? path.basename(anchor) : null,
    a1: a1.result, a1pv: a1.itemHard, a1qv: a1.anchorHard, a2: v.a2, a3: v.a3, final, caught, flaw, expected, reasoning: v.reasoning };
}

const cleanFiles = fs.readdirSync(opt.cleanDir).filter(f => f.endsWith('.tex')).map(f => path.join(opt.cleanDir, f));
const flawedFiles = fs.readdirSync(opt.flawedDir).filter(f => f.endsWith('.tex')).map(f => path.join(opt.flawedDir, f));

const cleanResults = cleanFiles.map(f => evalItem(f, 'clean'));
const flawedResults = flawedFiles.map(f => evalItem(f, 'flawed'));

// ── 지표 산출 ───────────────────────────────────────────
const discCaught = flawedResults.filter(r => r.caught).length;
const discrimination = flawedResults.length ? discCaught / flawedResults.length : 0;
const fpCaught = cleanResults.filter(r => r.caught).length;
const falsePositive = cleanResults.length ? fpCaught / cleanResults.length : 0;

// F유형별 매트릭스
const fMatrix = {};
for (const r of flawedResults) {
  const k = r.flaw || '?';
  if (!fMatrix[k]) fMatrix[k] = { total: 0, caught: 0 };
  fMatrix[k].total++;
  if (r.caught) fMatrix[k].caught++;
}
// blindspot = 검출 못 한 결함 유형 (F유형별 판별력 < 100%)
const blindspots = Object.entries(fMatrix).filter(([, v]) => v.caught < v.total).map(([k]) => k);

const pass = discrimination >= DISC_TARGET && falsePositive <= FP_TARGET;

// ── 콘솔 출력 ───────────────────────────────────────────
console.error(`\n━━━ CFES 판별력 테스트 (메커니즘 C) ━━━`);
console.error(`  정상군 : ${cleanResults.length} · 결함군 : ${flawedResults.length}`);
console.error(`  판별력 : ${(discrimination * 100).toFixed(1)}% (${discCaught}/${flawedResults.length}) · 목표 ≥${DISC_TARGET * 100}%`);
console.error(`  오판율 : ${(falsePositive * 100).toFixed(1)}% (${fpCaught}/${cleanResults.length}) · 상한 ≤${FP_TARGET * 100}%`);
console.error(`  blindspot : ${blindspots.length ? blindspots.join(', ') : '없음'}`);
console.error(`  → ${pass ? '✅ 통과' : '❌ 미달'}`);
console.error(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);

// ── 리포트 ─────────────────────────────────────────────
if (opt.report) {
  const L = [];
  L.push(`# CFES 판별력 테스트 리포트 (메커니즘 C · discrimination-test-runner)`);
  L.push('');
  L.push(`- **일자** : ${new Date().toISOString().slice(0, 10)}`);
  L.push(`- **정상군** : ${cleanResults.length} · **결함군** : ${flawedResults.length}`);
  L.push(`- **verdicts** : ${opt.verdicts ? path.relative(ROOT, opt.verdicts) : '(없음 · A2·A3 PENDING)'}`);
  L.push('');
  L.push(`## 판정 : ${pass ? '✅ 통과' : '❌ 미달'}`);
  L.push('');
  L.push(`| 지표 | 값 | 목표 | 판정 |`);
  L.push(`|---|---:|---:|:---:|`);
  L.push(`| 판별력 (결함 검출율) | ${(discrimination * 100).toFixed(1)}% | ≥ ${DISC_TARGET * 100}% | ${discrimination >= DISC_TARGET ? '✅' : '❌'} |`);
  L.push(`| 오판율 (정상 오검출) | ${(falsePositive * 100).toFixed(1)}% | ≤ ${FP_TARGET * 100}% | ${falsePositive <= FP_TARGET ? '✅' : '❌'} |`);
  L.push('');
  L.push(`## F유형별 판별력 매트릭스`);
  L.push('');
  L.push(`| F유형 | 검출/전체 | 판별력 |`);
  L.push(`|---|:---:|---:|`);
  for (const [k, v] of Object.entries(fMatrix).sort()) {
    L.push(`| ${k} | ${v.caught}/${v.total} | ${((v.caught / v.total) * 100).toFixed(0)}% |`);
  }
  L.push('');
  if (blindspots.length) {
    L.push(`**⚠️ blindspot** : ${blindspots.join(', ')} — 이 유형은 자동 pipeline이 완전 검출 못 함. 마스터 심층 감사(A)·도구 보강 필요.`);
    L.push('');
  }
  L.push(`## 결함군 상세`);
  L.push('');
  L.push(`| 항목 | anchor | F | A1 | A2 | A3 | 최종 | 검출 | 기대 |`);
  L.push(`|---|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|`);
  for (const r of flawedResults) {
    L.push(`| ${r.base} | ${r.anchor || '?'} | ${r.flaw || '?'} | ${r.a1}${r.a1pv != null ? `(${r.a1pv}/${r.a1qv})` : ''} | ${r.a2} | ${r.a3} | ${r.final} | ${r.caught ? '✅' : '❌ miss'} | ${r.expected || '?'} |`);
  }
  L.push('');
  L.push(`## 정상군 상세 (오판 감시)`);
  L.push('');
  L.push(`| 항목 | anchor | A1 | A2 | A3 | 최종 | 오판 |`);
  L.push(`|---|---|:--:|:--:|:--:|:--:|:--:|`);
  for (const r of cleanResults) {
    L.push(`| ${r.base} | ${r.anchor || '?'} | ${r.a1}${r.a1pv != null ? `(${r.a1pv}/${r.a1qv})` : ''} | ${r.a2} | ${r.a3} | ${r.final} | ${r.caught ? '❌ 오판' : '✅ 정상'} |`);
  }
  L.push('');
  L.push(`## 판정 로직`);
  L.push(`- A1 자동 (master-feedback-check · item 위반 ≤ anchor+2 → PASS)`);
  L.push(`- A2·A3 = verdicts 주입 (매뉴얼 · 미지정 시 PENDING)`);
  L.push(`- 최종 = any FAIL→LOSS · else any PENDING→PENDING · else WIN`);
  L.push(`- 검출(caught) = 최종 ∈ {LOSS, PENDING}`);
  fs.mkdirSync(path.dirname(opt.report), { recursive: true });
  fs.writeFileSync(opt.report, L.join('\n') + '\n', 'utf-8');
  console.error(`📄 리포트 : ${path.relative(ROOT, opt.report)}`);
}

// ── 간이 list-of-maps YAML 파서 ─────────────────────────
function parseListYaml(text) {
  const items = []; let cur = null;
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.replace(/\t/g, '  ');
    if (/^\s*#/.test(line) || line.trim() === '') continue;
    const m = line.match(/^(\s*)-\s+(\w+):\s*(.*)$/);
    if (m) { if (cur) items.push(cur); cur = {}; cur[m[2]] = coerce(m[3]); continue; }
    const kv = line.match(/^\s+(\w+):\s*(.*)$/);
    if (kv && cur) cur[kv[1]] = coerce(kv[2]);
  }
  if (cur) items.push(cur);
  return items;
}
function coerce(v) {
  v = v.trim();
  if (/^".*"$/.test(v) || /^'.*'$/.test(v)) return v.slice(1, -1);
  return v;
}

process.exit(pass ? 0 : 1);
