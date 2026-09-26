#!/usr/bin/env node
// usage-diversity-check.mjs — 회차 간 원형/원본 편중 감지 (Gate 5.0 G16 후보)
// 2026-07-28 세션 96 신설 · feedback loop P0-4 (~40% → +3%p)
//
// 배경:
//   bank/usage-log.md v2 스키마 (회차별 슬롯 사용 이력)에 데이터가 누적되고 있으나
//   회차 간 source_id·origin_pattern·소단원 편중을 자동 감지하는 도구 부재.
//   → 자기복제 자동 경고 · 다양성 강제.
//
// 사용법:
//   node scripts/usage-diversity-check.mjs \
//     [--usage-log bank/usage-log.md] \
//     [--recent 3]                     # 최근 3회차만 (기본: 전체)
//     [--group-by source_id]           # source_id | origin_pattern | unit
//     [--warn-threshold 2]             # N회 이상 반복 시 경고
//     [--format md|json]               # 기본 md
//     [--report <경로>]                # 기본 stdout
//
// 반환 코드: 0 = 편중 없음 · 1 = 경고 발생 · 2 = 오용

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const DEFAULT_LOG = path.join(ROOT, 'bank', 'usage-log.md');

// ── 인자 파싱 ─────────────────────────────────────────────
const args = process.argv.slice(2);
const opt = {
  usageLog: DEFAULT_LOG,
  recent: null,
  groupBy: 'source_id',
  warnThreshold: 2,
  format: 'md',
  report: null,
};
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--usage-log') opt.usageLog = args[++i];
  else if (a === '--recent') opt.recent = parseInt(args[++i]);
  else if (a === '--group-by') opt.groupBy = args[++i];
  else if (a === '--warn-threshold') opt.warnThreshold = parseInt(args[++i]);
  else if (a === '--format') opt.format = args[++i];
  else if (a === '--report') opt.report = args[++i];
  else if (a === '--help' || a === '-h') {
    console.log(`
usage-diversity-check.mjs

사용법:
  node scripts/usage-diversity-check.mjs \\
    [--usage-log <path>] \\
    [--recent N] \\
    [--group-by source_id|origin_pattern|unit] \\
    [--warn-threshold N] \\
    [--format md|json] [--report <path>]
`);
    process.exit(0);
  }
}

if (!fs.existsSync(opt.usageLog)) {
  console.error(`❌ usage-log 없음: ${opt.usageLog}`);
  process.exit(2);
}
if (!['source_id', 'origin_pattern', 'unit'].includes(opt.groupBy)) {
  console.error(`❌ --group-by 오용: ${opt.groupBy}`);
  process.exit(2);
}

// ── usage-log 파싱 ────────────────────────────────────────
// 회차 섹션: "### <이름>" · 그 아래 슬롯 표 or 라인 형식 지원
//   (A) 라인 형식 (v2 기본):
//       - source_id | round | #slot | outcome | rating | rejection_reason
//   (B) 표 형식 (absorb-completed-round이 삽입):
//       | 슬롯 | 단원 | source | outcome | rating | rejection |
// 회차 헤더 판정: "N회차" · "N회" · "DeeP-Red-N" · "M-학기-...-N회" 등
function isRoundHeader(title) {
  if (/\d+\s*회차\b/.test(title)) return true;
  if (/DeeP[-\s]?Red[-\s]?\d+/i.test(title)) return true;
  if (/\d+회(?!\S)/.test(title) && (/학기|예상|기말|중간|모의/.test(title))) return true;
  if (/^\d{4}-\S+회$/.test(title)) return true;
  return false;
}

function parseUsageLog(text) {
  const rounds = [];
  const lines = text.split(/\r?\n/);
  let cur = null;
  for (const line of lines) {
    const h = line.match(/^###\s+(.+?)\s*$/);
    if (h) {
      const rawTitle = h[1];
      const title = rawTitle.split('(')[0].split('·')[0].trim();
      if (isRoundHeader(rawTitle) || isRoundHeader(title)) {
        if (cur) rounds.push(cur);
        cur = { title, entries: [] };
      } else {
        // 회차 헤더가 아니면 현재 cur 유지 (하위 섹션 취급) — entries 계속 수집
      }
      continue;
    }
    if (!cur) continue;

    // (A) 라인: - `source` | round | #slot | outcome | rating | rejection
    // 또는:    - source_id | round | slot | outcome | rating
    const lineForm = line.match(/^-\s+`?([^`|]+)`?\s*\|\s*([^|]+?)\s*\|\s*#?(\S+)\s*\|\s*(\S+)/);
    if (lineForm) {
      cur.entries.push({
        source_id: lineForm[1].trim(),
        round: lineForm[2].trim(),
        slot: lineForm[3].trim(),
        outcome: lineForm[4].trim(),
        unit: null,
        origin_pattern: null,
      });
      continue;
    }

    // (B) 표 행 (헤더/구분자 스킵)
    const rowForm = line.match(/^\|\s*(\d+|\?)?\s*\|\s*([^|]*?)\s*\|\s*([^|]*?)\s*\|\s*([^|]*?)\s*\|\s*([^|]*?)\s*\|\s*([^|]*?)\s*\|/);
    if (rowForm) {
      const [, slot, unit, source, outcome, rating] = rowForm;
      if (slot === undefined || slot === '슬롯' || slot === '---:' || slot === '---') continue;
      cur.entries.push({
        source_id: (source || '').trim(),
        round: cur.title,
        slot: slot ? slot.trim() : '?',
        outcome: (outcome || '').trim(),
        unit: (unit || '').trim() || null,
        origin_pattern: null,
      });
    }
  }
  if (cur) rounds.push(cur);
  return rounds.filter((r) => r.entries.length > 0);
}

const logText = fs.readFileSync(opt.usageLog, 'utf-8');
let rounds = parseUsageLog(logText);
console.error(`ℹ️  usage-log 파싱: ${rounds.length} 회차 · 총 ${rounds.reduce((s, r) => s + r.entries.length, 0)} 슬롯`);

if (opt.recent && opt.recent > 0 && opt.recent < rounds.length) {
  rounds = rounds.slice(-opt.recent);
  console.error(`ℹ️  최근 ${opt.recent} 회차만: ${rounds.map((r) => r.title).join(', ')}`);
}

// ── 그룹핑 ────────────────────────────────────────────────
const counter = {};       // key → count
const keyRounds = {};     // key → Set(round titles)
for (const round of rounds) {
  for (const entry of round.entries) {
    let key = entry[opt.groupBy];
    if (!key || key === '(없음)' || key === 'null') continue;
    counter[key] = (counter[key] || 0) + 1;
    keyRounds[key] = keyRounds[key] || new Set();
    keyRounds[key].add(round.title);
  }
}

const sorted = Object.entries(counter).sort((a, b) => b[1] - a[1]);
const warns = sorted.filter(([, cnt]) => cnt >= opt.warnThreshold);

// ── 리포트 ───────────────────────────────────────────────
if (opt.format === 'json') {
  const output = JSON.stringify({
    meta: {
      usageLog: opt.usageLog, recent: opt.recent,
      groupBy: opt.groupBy, warnThreshold: opt.warnThreshold,
      roundCount: rounds.length,
    },
    warnings: warns.map(([k, cnt]) => ({ key: k, count: cnt, rounds: [...keyRounds[k]] })),
    all: sorted.map(([k, cnt]) => ({ key: k, count: cnt, rounds: [...keyRounds[k]] })),
  }, null, 2);
  if (opt.report) {
    fs.mkdirSync(path.dirname(opt.report), { recursive: true });
    fs.writeFileSync(opt.report, output, 'utf-8');
  } else {
    console.log(output);
  }
} else {
  const lines = [];
  lines.push(`# Usage Diversity Check 리포트`);
  lines.push('');
  lines.push(`- **일자**: ${new Date().toISOString()}`);
  lines.push(`- **usage-log**: \`${path.relative(ROOT, opt.usageLog)}\``);
  lines.push(`- **group-by**: \`${opt.groupBy}\` · **warn-threshold**: ${opt.warnThreshold}`);
  lines.push(`- **범위**: ${opt.recent ? `최근 ${opt.recent} 회차` : '전체'} (${rounds.length} 회차 · ${rounds.reduce((s, r) => s + r.entries.length, 0)} 슬롯)`);
  if (opt.recent) lines.push(`- **회차**: ${rounds.map((r) => r.title).join(' · ')}`);
  lines.push('');

  lines.push(`## 요약`);
  lines.push('');
  lines.push(`- 고유 ${opt.groupBy}: **${sorted.length}개**`);
  lines.push(`- 반복 (≥${opt.warnThreshold}) 경고: **${warns.length}개**`);
  lines.push('');

  if (warns.length > 0) {
    lines.push(`## ⚠️ 편중 경고 (≥${opt.warnThreshold}회 반복)`);
    lines.push('');
    lines.push(`| ${opt.groupBy} | 반복 | 회차 |`);
    lines.push(`|---|---:|---|`);
    for (const [k, cnt] of warns) {
      lines.push(`| ${k} | ${cnt} | ${[...keyRounds[k]].join(', ')} |`);
    }
    lines.push('');
  }

  lines.push(`## Top ${Math.min(20, sorted.length)} 빈도`);
  lines.push('');
  lines.push(`| # | ${opt.groupBy} | 반복 | 회차 수 |`);
  lines.push(`|---:|---|---:|---:|`);
  sorted.slice(0, 20).forEach(([k, cnt], i) => {
    lines.push(`| ${i + 1} | ${k} | ${cnt} | ${keyRounds[k].size} |`);
  });

  const out = lines.join('\n');
  if (opt.report) {
    fs.mkdirSync(path.dirname(opt.report), { recursive: true });
    fs.writeFileSync(opt.report, out, 'utf-8');
    console.error(`📄 리포트 저장: ${opt.report}`);
  } else {
    console.log(out);
  }
}

console.error(`\n결과: 고유=${sorted.length} · 경고=${warns.length}`);
process.exit(warns.length > 0 ? 1 : 0);
