#!/usr/bin/env node
// 그림 도입 로그 append CLI v1.0 — Layer 4 · Learning
// 2026-07-17 세션 47 종료 · 세션 48 신설
//
// 목적:
//   마스터 리뷰 후 결과를 bank/그림-도입-로그.md에 append.
//   YAML 엔트리 자동 생성 · log_id 자동 산출 · 하단 append.
//
// 사용:
//   node scripts/figure-log-append.mjs \
//     --round "DeeP-Red-3회" --slot 14 --tier star_5_premium \
//     --figure-type 유형2 --figure-source tikz-inline \
//     --mechanism "두 원 접선" \
//     --layer1-verdict REQUIRED --r-predicted 1 --iterations 1 \
//     --master-verdict approved --reason "좌표평면 대응 · 답 노출 없음" \
//     [--session 48] [--archived-as M-06] [--reused-from LOG-...] [--dry-run]
//
// 단일 출처: bank/그림-도입-로그.md v1.0

import fs from 'node:fs';
import path from 'node:path';

const argv = process.argv.slice(2);
const args = {};
for (let i = 0; i < argv.length; i++) {
  const key = argv[i];
  if (key.startsWith('--')) {
    const name = key.slice(2);
    if (name === 'dry-run') { args[name] = true; continue; }
    args[name] = argv[++i];
  }
}

// 필수 필드 검증
const required = ['round', 'slot', 'tier', 'layer1-verdict', 'master-verdict'];
const missing = required.filter(k => !args[k]);
if (missing.length > 0) {
  console.error(`❌ 필수 필드 누락: ${missing.join(', ')}`);
  console.error('');
  console.error('필수: --round --slot --tier --layer1-verdict --master-verdict');
  console.error('선택: --session --figure-type --figure-source --mechanism --r-predicted --iterations');
  console.error('     --reason --archived-as --reused-from --file-ref --notes --dry-run');
  process.exit(2);
}

// 오늘 날짜·log_id 자동 생성
const now = new Date();
const yyyymmdd = now.toISOString().slice(0, 10).replace(/-/g, '');
const roundShort = args.round.match(/(\d+)회$/) ? `${args.round.match(/^([^\d\-]+)/)[1]}${args.round.match(/(\d+)회/)[1]}` : args.round;
// DeeP-Red-3회 → DR3
const roundCode = args.round.replace(/DeeP-Red-(\d+)회/, 'DR$1').replace(/[^A-Za-z0-9]/g, '');
const logId = `LOG-${yyyymmdd}-${roundCode}-${args.slot}${args.iteration ? '-v' + args.iteration : ''}`;

// R 레벨 자동 산출
function rLevel(r) {
  const n = parseInt(r);
  if (isNaN(n)) return null;
  if (n <= 2) return 'GREEN';
  if (n <= 4) return 'YELLOW';
  if (n <= 7) return 'RED';
  return 'CRITICAL';
}

// YAML 엔트리 생성
const entry = [
  `- log_id: ${logId}`,
  `  date: ${now.toISOString().slice(0, 10)}`,
  `  session: ${args.session || 'unknown'}`,
  `  round: ${args.round}`,
  `  slot: ${args.slot}`,
  `  tier: ${args.tier}`,
  args.mechanism ? `  mechanism_primary: ${args.mechanism}` : `  mechanism_primary: null`,
  args['figure-type'] ? `  figure_type: ${args['figure-type']}` : `  figure_type: null`,
  args['figure-source'] ? `  figure_source: ${args['figure-source']}` : `  figure_source: null`,
  `  archive_ref: ${args['archive-ref'] || 'null'}`,
  `  layer1_verdict: ${args['layer1-verdict']}`,
  args['r-predicted'] ? `  R_predicted: ${args['r-predicted']}` : `  R_predicted: null`,
  args['r-predicted'] ? `  R_level_predicted: ${rLevel(args['r-predicted'])}` : `  R_level_predicted: null`,
  args.iterations ? `  iterations_actual: ${args.iterations}` : `  iterations_actual: null`,
  `  master_verdict: ${args['master-verdict']}`,
  `  reason: ${args.reason ? JSON.stringify(args.reason) : '""'}`,
  args['file-ref'] ? `  file_ref: ${JSON.stringify(args['file-ref'])}` : `  file_ref: null`,
  args['reused-from'] ? `  reused_from: ${args['reused-from']}` : `  reused_from: null`,
  `  will_be_archived: ${args['master-verdict'] === 'approved' && args['archived-as'] ? 'true' : 'false'}`,
  args['archived-as'] ? `  archived_as: ${args['archived-as']}` : `  archived_as: null`,
  `  notes: ${args.notes ? JSON.stringify(args.notes) : '""'}`,
  '',
].join('\n');

console.log('=== 생성할 엔트리 ===');
console.log(entry);

if (args['dry-run']) {
  console.log('✅ dry-run · append 안 함');
  process.exit(0);
}

const logPath = path.resolve('bank', '그림-도입-로그.md');
if (!fs.existsSync(logPath)) {
  console.error(`❌ 로그 파일 없음: ${logPath}`);
  process.exit(2);
}

const content = fs.readFileSync(logPath, 'utf8');

// section 4 (소급 seed) 하단에 append · section 5 (재사용 카운트) 위
const insertMarker = '## 5. archive M-01~M-N 재사용 카운트';
const idx = content.indexOf(insertMarker);
if (idx < 0) {
  console.error(`❌ append 위치 마커 없음: ${insertMarker}`);
  process.exit(2);
}

// 마커 앞에 blank·entry·blank 삽입
const before = content.slice(0, idx).trimEnd();
const after = content.slice(idx);
const newContent = `${before}\n\n${entry}\n---\n\n${after}`;

fs.writeFileSync(logPath, newContent, 'utf8');
console.log(`✅ ${logPath} 에 엔트리 append 완료`);
console.log(`   log_id: ${logId}`);
