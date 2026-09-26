#!/usr/bin/env node
// 그림 archive 재사용률 추적 v1.0 — Layer 4 · Learning
// 2026-07-17 세션 47 종료 · 세션 48 신설
//
// 목적:
//   bank/도해-카탈로그.md의 M-01~M-N 재사용 빈도 집계.
//   미사용·과사용 archive 감지 · 신규 mechanism 후보 리포트.
//   결과를 bank/그림-도입-로그.md §5 자동 append.
//
// 사용:
//   node scripts/figure-reuse-stats.mjs                    # 통계 리포트만
//   node scripts/figure-reuse-stats.mjs --update            # 로그 파일 §5 갱신
//
// 단일 출처: bank/도해-카탈로그.md · bank/그림-도입-로그.md v1.0

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
const catalogPath = 'bank/도해-카탈로그.md';

if (!fs.existsSync(catalogPath)) {
  console.error(`❌ 카탈로그 없음: ${catalogPath}`);
  process.exit(2);
}
if (!fs.existsSync(logPath)) {
  console.error(`❌ 로그 없음: ${logPath}`);
  process.exit(2);
}

const catalog = fs.readFileSync(catalogPath, 'utf8');
const logContent = fs.readFileSync(logPath, 'utf8');

// ── 카탈로그에서 M-01~M-N 추출 ─────────────────────
function extractArchives(text) {
  const archives = [];
  const re = /^## (M-\d+)\s+(.+?)$/gm;
  let m;
  while ((m = re.exec(text)) !== null) {
    archives.push({ code: m[1], name: m[2].trim() });
  }
  return archives;
}

// ── 로그에서 재사용 카운트 ─────────────────────
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
        if (val === 'null') val = null;
        else if (val === 'true') val = true;
        else if (val === 'false') val = false;
        entry[m[1]] = val;
      }
    }
    entries.push(entry);
  }
  return entries;
}

function countReuse(archives, entries) {
  const counts = {};
  const detailUse = {};
  for (const a of archives) {
    counts[a.code] = { registered: 0, reused: 0 };
    detailUse[a.code] = [];
  }
  for (const e of entries) {
    // archived_as = 최초 등재
    if (e.archived_as && counts[e.archived_as]) {
      counts[e.archived_as].registered++;
    }
    // archive_ref or reused_from = 재사용
    if (e.archive_ref && counts[e.archive_ref]) {
      counts[e.archive_ref].reused++;
      detailUse[e.archive_ref].push(e.log_id);
    }
  }
  return { counts, detailUse };
}

// ── 메인 ─────────────────────
const archives = extractArchives(catalog);
const entries = parseEntries(logContent);
const { counts, detailUse } = countReuse(archives, entries);

console.log(`🔍 그림 archive 재사용률 v1.0 · Layer 4`);
console.log(`   카탈로그: ${catalogPath} · archive ${archives.length}건`);
console.log(`   로그: ${logPath} · 엔트리 ${entries.length}건`);
console.log('');

console.log('=== M-N별 재사용 빈도 ===');
let unused = 0, overused = 0;
for (const a of archives) {
  const c = counts[a.code];
  const flag = c.reused === 0 ? '📥' : c.reused >= 5 ? '🔥' : '·';
  console.log(`${flag} ${a.code} ${a.name}: 재사용 ${c.reused}회 (최초 등재 ${c.registered}회)`);
  if (c.reused === 0) unused++;
  if (c.reused >= 5) overused++;
}
console.log('');

console.log('=== 요약 ===');
console.log(`   미사용 (재사용 0회): ${unused}건`);
console.log(`   과사용 (재사용 5회+): ${overused}건`);
console.log('');

if (unused > 0) {
  console.log('📥 미사용 archive → 재사용 검토 or 카탈로그에서 archive 이관 검토');
}
if (overused > 0) {
  console.log('🔥 과사용 archive → 하위 유형 세분화 or 신규 variant 신설 검토');
}
console.log('');

// --update 옵션
if (args.update) {
  const lines = ['<!-- REUSE_STATS_START -->'];
  for (const a of archives) {
    const c = counts[a.code];
    lines.push(`- ${a.code} ${a.name}: 재사용 ${c.reused}회 (최초 등재 ${c.registered}회)`);
  }
  lines.push(`- 갱신: ${new Date().toISOString().slice(0, 10)}`);
  lines.push('<!-- REUSE_STATS_END -->');

  const newBlock = lines.join('\n');
  const newLog = logContent.replace(/<!-- REUSE_STATS_START -->[\s\S]*?<!-- REUSE_STATS_END -->/, newBlock);
  fs.writeFileSync(logPath, newLog, 'utf8');
  console.log(`✅ ${logPath} §5 재사용 카운트 갱신 완료`);
}
