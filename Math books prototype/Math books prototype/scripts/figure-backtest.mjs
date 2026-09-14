#!/usr/bin/env node
// 그림 R 예측 vs 실측 iteration back-test v1.0 — Layer 4 · Learning
// 2026-07-17 세션 47 종료 · 세션 48 신설
//
// 목적:
//   bank/그림-도입-로그.md 파싱 · R 예측 vs 실측 iteration 상관 분석 ·
//   판정 등급 (GREEN/YELLOW/RED/CRITICAL) 정확도 · 임계값 재캘리브레이션 권고.
//
// 사용:
//   node scripts/figure-backtest.mjs                     # 전체 로그
//   node scripts/figure-backtest.mjs --round DeeP-Red-2회 # 회차 필터
//   node scripts/figure-backtest.mjs --since 2026-07-01   # 날짜 이후
//   node scripts/figure-backtest.mjs --update              # 결과를 로그 파일 §6에 append
//
// 단일 출처: bank/그림-도입-로그.md v1.0

import fs from 'node:fs';

const args = {};
const argv = process.argv.slice(2);
for (let i = 0; i < argv.length; i++) {
  const key = argv[i];
  if (key.startsWith('--')) {
    if (['update'].includes(key.slice(2))) args[key.slice(2)] = true;
    else args[key.slice(2)] = argv[++i];
  }
}

const logPath = 'bank/그림-도입-로그.md';
if (!fs.existsSync(logPath)) {
  console.error(`❌ 로그 파일 없음: ${logPath}`);
  process.exit(2);
}

const content = fs.readFileSync(logPath, 'utf8');

// ── YAML 엔트리 파싱 (간이 파서) ─────────────────────
function parseEntries(text) {
  const entries = [];
  const re = /^- log_id:\s*(\S+)\s*$/gm;
  const matches = [...text.matchAll(re)];

  for (let i = 0; i < matches.length; i++) {
    const start = matches[i].index;
    const end = i + 1 < matches.length ? matches[i + 1].index : text.length;
    const block = text.slice(start, end);
    const entry = { log_id: matches[i][1] };
    const lines = block.split('\n');
    for (const line of lines) {
      const m = line.match(/^\s{2}(\w+):\s*(.*)$/);
      if (m) {
        let val = m[2].trim();
        // null·true·false·숫자 변환
        if (val === 'null') val = null;
        else if (val === 'true') val = true;
        else if (val === 'false') val = false;
        else if (/^\d+$/.test(val)) val = parseInt(val);
        else if (/^".*"$/.test(val)) val = val.slice(1, -1);
        else if (/^\{.*\}$/.test(val)) {
          // 인라인 객체 파싱 (C, V, S)
          try { val = eval('(' + val + ')'); } catch { /* ignore */ }
        }
        entry[m[1]] = val;
      }
    }
    entries.push(entry);
  }
  return entries;
}

// ── 필터 ─────────────────────
function filterEntries(entries) {
  return entries.filter(e => {
    if (args.round && e.round !== args.round) return false;
    if (args.since && e.date < args.since) return false;
    return true;
  });
}

// ── 상관 분석 ─────────────────────
function correlation(xs, ys) {
  const n = xs.length;
  if (n < 2) return null;
  const mx = xs.reduce((a, b) => a + b) / n;
  const my = ys.reduce((a, b) => a + b) / n;
  let num = 0, dx2 = 0, dy2 = 0;
  for (let i = 0; i < n; i++) {
    num += (xs[i] - mx) * (ys[i] - my);
    dx2 += (xs[i] - mx) ** 2;
    dy2 += (ys[i] - my) ** 2;
  }
  const denom = Math.sqrt(dx2 * dy2);
  if (denom === 0) return null;
  return num / denom;
}

function mae(xs, ys) {
  const n = xs.length;
  if (n === 0) return null;
  let s = 0;
  for (let i = 0; i < n; i++) s += Math.abs(xs[i] - ys[i]);
  return s / n;
}

// ── 판정 등급 정확도 ─────────────────────
function rLevel(r) {
  if (r <= 2) return 'GREEN';
  if (r <= 4) return 'YELLOW';
  if (r <= 7) return 'RED';
  return 'CRITICAL';
}

function verdictAlignment(predicted_level, master_verdict, iterations) {
  // GREEN 예측 → approved 첫 시도 (1회) 기대
  // RED·CRITICAL 예측 → rejected or revised (2+회) 기대
  if (predicted_level === 'GREEN' && master_verdict === 'approved' && iterations === 1) return 'match';
  if (predicted_level === 'GREEN' && (master_verdict === 'rejected' || iterations > 1)) return 'over-optimistic';
  if ((predicted_level === 'RED' || predicted_level === 'CRITICAL') && master_verdict === 'rejected') return 'match';
  if ((predicted_level === 'RED' || predicted_level === 'CRITICAL') && master_verdict === 'approved' && iterations === 1) return 'over-pessimistic';
  if (predicted_level === 'YELLOW') return 'match'; // 관대
  return 'partial';
}

// ── 메인 ─────────────────────
const allEntries = parseEntries(content);
const entries = filterEntries(allEntries);

console.log(`🔍 그림 R 예측 back-test v1.0 · Layer 4`);
console.log(`   로그: ${logPath}`);
console.log(`   필터: round=${args.round || '전체'} · since=${args.since || '전체'}`);
console.log(`   엔트리: ${entries.length}건 (전체 ${allEntries.length}건 중)`);
console.log('');

// 실측 데이터 있는 엔트리만 분석
const analyzed = entries.filter(e => e.iterations_actual != null && e.R_predicted != null);
console.log(`실측 데이터 있음: ${analyzed.length}건`);
console.log('');

if (analyzed.length === 0) {
  console.log('⚠️  실측 데이터 부족 · 상관 분석 불가');
  console.log('   회차 완료 후 --iterations 필드로 로그 append 필요');
  process.exit(0);
}

// R 예측 vs 실측 iteration
const Rs = analyzed.map(e => e.R_predicted);
const Its = analyzed.map(e => e.iterations_actual);
const r = correlation(Rs, Its);
const maeVal = mae(Rs, Its);

console.log('=== R 예측 vs 실측 iteration ===');
console.log(`   Pearson r: ${r != null ? r.toFixed(3) : 'n/a (수렴)'}`);
console.log(`   MAE: ${maeVal != null ? maeVal.toFixed(2) : 'n/a'}`);
console.log('');

// 판정 등급 정확도
let match = 0, overOpt = 0, overPess = 0, partial = 0;
for (const e of analyzed) {
  const align = verdictAlignment(e.R_level_predicted, e.master_verdict, e.iterations_actual);
  if (align === 'match') match++;
  else if (align === 'over-optimistic') overOpt++;
  else if (align === 'over-pessimistic') overPess++;
  else partial++;
}
const accuracy = (match / analyzed.length * 100).toFixed(1);

console.log('=== 판정 등급 정확도 ===');
console.log(`   일치: ${match}/${analyzed.length} (${accuracy}%)`);
console.log(`   over-optimistic (GREEN 예측인데 실패): ${overOpt}건`);
console.log(`   over-pessimistic (RED 예측인데 승인): ${overPess}건`);
console.log(`   partial: ${partial}건`);
console.log('');

// 회차별 요약
console.log('=== 회차별 실측 요약 ===');
const byRound = {};
for (const e of analyzed) {
  byRound[e.round] = byRound[e.round] || { total: 0, iter_sum: 0 };
  byRound[e.round].total++;
  byRound[e.round].iter_sum += e.iterations_actual;
}
for (const [round, s] of Object.entries(byRound)) {
  console.log(`   ${round}: ${s.total}건 · 평균 iteration ${(s.iter_sum / s.total).toFixed(1)}회`);
}
console.log('');

// 캘리브레이션 권고
console.log('=== 캘리브레이션 권고 ===');
if (analyzed.length < 10) {
  console.log('   ⚠️  데이터 부족 (< 10건) · 임계값 유지 · 회차 축적 후 재분석');
} else if (parseFloat(accuracy) < 70) {
  console.log('   🔴 정확도 < 70% · 리스크 매트릭스 축 재검토 필요');
  console.log('   → over-optimistic 높으면 R_novelty·R_precision 배점 상향');
  console.log('   → over-pessimistic 높으면 R_mitigation 배점 상향');
} else if (parseFloat(accuracy) < 85) {
  console.log('   🟡 정확도 70~85% · 미세 조정 검토');
} else {
  console.log('   ✅ 정확도 ≥ 85% · 현재 임계값 유지');
}

// --update 옵션: 로그 파일 §6 append
if (args.update) {
  const reportLines = [
    `### ${new Date().toISOString().slice(0, 10)} back-test 결과`,
    '',
    `- 필터: round=${args.round || '전체'} · since=${args.since || '전체'}`,
    `- 실측 데이터: ${analyzed.length}건`,
    `- Pearson r: ${r != null ? r.toFixed(3) : 'n/a'}`,
    `- MAE: ${maeVal != null ? maeVal.toFixed(2) : 'n/a'}`,
    `- 판정 정확도: ${accuracy}% (일치 ${match} · over-opt ${overOpt} · over-pess ${overPess})`,
    '',
  ];
  const report = reportLines.join('\n');
  const marker = '<!-- CALIBRATION_END -->';
  const newContent = content.replace(marker, report + '\n' + marker);
  fs.writeFileSync(logPath, newContent, 'utf8');
  console.log('');
  console.log(`✅ ${logPath} §6 캘리브레이션 이력에 append 완료`);
}
