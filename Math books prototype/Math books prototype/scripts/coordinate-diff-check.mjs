#!/usr/bin/env node
// scripts/coordinate-diff-check.mjs
//
// 청사진·본편 슬롯의 좌표·상수가 정독 원본과 얼마나 상이한지 검증.
// 목적: "최소 변형 정책 (숫자 교체)" 준수 확인.
//       원본 좌표를 그대로 옮긴 슬롯 (RED) 을 자동 검출.
// 세션 52 (2026-07-20) 신설 · CM2-GM-01 전 48 슬롯 원본 그대로 이식 사건 계기.
//
// 판정:
//   Jaccard(A,B) = |A∩B| / |A∪B|
//     >= 0.90 → RED    (원문 그대로 · 최소 변형 안 됨)
//     0.50~0.89 → YELLOW (부분 변형 · 검토 필요)
//     < 0.50 → GREEN   (충분 변형)
//
// 사용:
//   node scripts/coordinate-diff-check.mjs --blueprint <yaml>
//   node scripts/coordinate-diff-check.mjs --blueprint <yaml> --slot L1-1
//   node scripts/coordinate-diff-check.mjs --blueprint <yaml> --verbose
//   node scripts/coordinate-diff-check.mjs --blueprint <yaml> --json
//
// Exit code:
//   0 = 모든 슬롯 GREEN
//   1 = 사용 오류
//   2 = YELLOW 존재 (RED 없음)
//   3 = RED 존재

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.join(__dirname, '..');
const SOURCE_FILTER = path.join(__dirname, 'source-filter.mjs');

const RED_THRESHOLD = 0.90;
const YELLOW_THRESHOLD = 0.50;

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { verbose: false, json: false };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--blueprint') opts.blueprint = args[++i];
    else if (a === '--slot') opts.slot = args[++i];
    else if (a === '--verbose' || a === '-v') opts.verbose = true;
    else if (a === '--json') opts.json = true;
    else if (a === '--help' || a === '-h') { printHelp(); process.exit(0); }
  }
  return opts;
}

function printHelp() {
  console.log(`Usage: node scripts/coordinate-diff-check.mjs --blueprint <yaml>

청사진 슬롯의 좌표·상수가 정독 원본과 얼마나 상이한지 검증.

Options:
  --blueprint <path>   청사진 yaml 파일 (필수)
  --slot <slot_id>     특정 슬롯만 (예: L1-1, R-2, CHK7)
  --verbose            상세 (원본·변형 좌표 나열)
  --json               JSON 리포트
  --help               도움말

Exit code:
  0 = 모든 슬롯 GREEN (충분 변형)
  1 = 사용 오류
  2 = YELLOW 있음 (부분 변형)
  3 = RED 있음 (원문 그대로)
`);
}

// 텍스트에서 좌표 튜플 · 정수 상수 · 분수 상수 추출
function extractNumericTokens(text) {
  if (!text) return { coords: [], nums: [] };
  const coords = [];
  const nums = [];

  // 좌표 튜플: (숫자, 숫자) · (변수, 숫자) · (숫자, 변수) · 음수·분수 허용
  // 예: (2,2), (-1,3), (a,b), (1/2, -3), A(1,3)에서 (1,3) 부분
  const coordRe = /\(\s*(-?[a-zA-Z]?\d*\/?\d*)\s*,\s*(-?[a-zA-Z]?\d*\/?\d*)\s*\)/g;
  let m;
  while ((m = coordRe.exec(text)) !== null) {
    const x = m[1].trim();
    const y = m[2].trim();
    if (x || y) coords.push(`(${normalizeNum(x)},${normalizeNum(y)})`);
  }

  // 독립 숫자 (좌표 외) · "y=2x-4" 같은 계수·비율 "1:k"·"5:3" 등
  // 우선 좌표 안 숫자 제거 후 나머지 정수·분수만
  const stripped = text.replace(coordRe, ' ');
  const numRe = /-?\b\d+(?:\/\d+)?\b/g;
  while ((m = numRe.exec(stripped)) !== null) {
    const n = m[0];
    // 슬롯 ID (예: "L1-1", "R-2") 제외 · 흔한 "1개", "2문항" 자연어 제외
    // 간단화: 모두 포함하되 매우 흔한 1·2·3은 제외
    if (['1', '2', '3'].includes(n) || ['-1', '-2', '-3'].includes(n)) {
      // 흔한 소수 (1·2·3)은 잡음일 확률 높음 → 제외
      continue;
    }
    nums.push(normalizeNum(n));
  }

  return { coords, nums };
}

function normalizeNum(s) {
  if (!s) return '';
  return s.replace(/\s+/g, '').toLowerCase();
}

function jaccard(a, b) {
  const setA = new Set(a);
  const setB = new Set(b);
  if (setA.size === 0 && setB.size === 0) return 1.0;
  const inter = new Set([...setA].filter(x => setB.has(x)));
  const union = new Set([...setA, ...setB]);
  return inter.size / union.size;
}

// source_id → 정독 원본 problem_summary 조회
function getOriginalSummary(sourceId) {
  const result = spawnSync('node', [SOURCE_FILTER, '--source', sourceId], {
    encoding: 'utf8', cwd: PROJECT_ROOT
  });
  if (result.status !== 0) return null;
  try {
    const parsed = JSON.parse(result.stdout);
    const item = Array.isArray(parsed) ? parsed[0] : parsed;
    return item?.problem_summary || item?.summary || null;
  } catch {
    return null;
  }
}

// 청사진 slot 순회
function iterSlots(blueprint) {
  const slots = [];
  const push = (arr, category) => {
    if (!Array.isArray(arr)) return;
    for (const s of arr) {
      if (s && s.slot_id) slots.push({ ...s, category });
    }
  };
  push(blueprint.concept_slots, 'concept');
  push(blueprint.representative_slots, 'representative');
  push(blueprint.check_slots, 'check');
  push(blueprint.level1_slots, 'level1');
  push(blueprint.level2_slots, 'level2');
  push(blueprint.level3_slots, 'level3');
  push(blueprint.real_slots, 'real');
  return slots;
}

function classify(j) {
  if (j >= RED_THRESHOLD) return 'RED';
  if (j >= YELLOW_THRESHOLD) return 'YELLOW';
  return 'GREEN';
}

function colorize(label) {
  const colors = { RED: '\x1b[31m', YELLOW: '\x1b[33m', GREEN: '\x1b[32m', reset: '\x1b[0m' };
  return `${colors[label] || ''}${label}${colors.reset}`;
}

function main() {
  const opts = parseArgs();
  if (!opts.blueprint) { printHelp(); process.exit(1); }
  if (!fs.existsSync(opts.blueprint)) {
    console.error(`❌ 청사진 없음: ${opts.blueprint}`);
    process.exit(1);
  }

  const bp = yaml.load(fs.readFileSync(opts.blueprint, 'utf8'));
  const slots = iterSlots(bp);
  const filtered = opts.slot ? slots.filter(s => s.slot_id === opts.slot) : slots;

  if (filtered.length === 0) {
    console.error(`❌ 슬롯 없음${opts.slot ? `: ${opts.slot}` : ''}`);
    process.exit(1);
  }

  const results = [];
  for (const slot of filtered) {
    // 개념 슬롯은 원본 pick 아님 → skip
    if (slot.category === 'concept') {
      results.push({ slot_id: slot.slot_id, category: slot.category, verdict: 'SKIP', reason: 'concept slot (원본 pick 아님)' });
      continue;
    }

    const src = slot.source?.source_id;
    if (!src) {
      results.push({ slot_id: slot.slot_id, category: slot.category, verdict: 'SKIP', reason: 'source_id 없음' });
      continue;
    }

    const orig = getOriginalSummary(src);
    if (!orig) {
      results.push({ slot_id: slot.slot_id, category: slot.category, source: src, verdict: 'SKIP', reason: '원본 정독 파일에서 조회 실패' });
      continue;
    }

    const variantText = slot.problem_summary || '';
    const origTok = extractNumericTokens(orig);
    const varTok = extractNumericTokens(variantText);

    const coordJ = jaccard(origTok.coords, varTok.coords);
    const numJ = jaccard(origTok.nums, varTok.nums);
    // 좌표 우선 가중치 (70%), 상수 30%
    const combined = origTok.coords.length > 0 ? (0.7 * coordJ + 0.3 * numJ) : numJ;
    const verdict = classify(combined);

    results.push({
      slot_id: slot.slot_id, category: slot.category, source: src, verdict,
      coord_jaccard: +coordJ.toFixed(3),
      num_jaccard: +numJ.toFixed(3),
      combined: +combined.toFixed(3),
      orig_coords: origTok.coords, variant_coords: varTok.coords,
      orig_nums: origTok.nums, variant_nums: varTok.nums
    });
  }

  if (opts.json) {
    console.log(JSON.stringify(results, null, 2));
  } else {
    printReport(results, opts.verbose);
  }

  const hasRed = results.some(r => r.verdict === 'RED');
  const hasYellow = results.some(r => r.verdict === 'YELLOW');
  process.exit(hasRed ? 3 : (hasYellow ? 2 : 0));
}

function printReport(results, verbose) {
  const counts = { RED: 0, YELLOW: 0, GREEN: 0, SKIP: 0 };
  for (const r of results) counts[r.verdict]++;

  console.log(`\n좌표·상수 대조 리포트 (${results.length} 슬롯)`);
  console.log(`─────────────────────────────────────────────`);
  for (const r of results) {
    if (r.verdict === 'SKIP') {
      console.log(`  ${colorize(r.verdict).padEnd(10)} ${r.slot_id.padEnd(8)} · ${r.reason}`);
      continue;
    }
    const line = `  ${colorize(r.verdict).padEnd(10)} ${r.slot_id.padEnd(8)} ${r.category.padEnd(14)} src=${r.source}  J=${r.combined}  (좌표=${r.coord_jaccard}·상수=${r.num_jaccard})`;
    console.log(line);
    if (verbose || r.verdict === 'RED') {
      console.log(`      원본 좌표: [${r.orig_coords.join(', ') || '(없음)'}]`);
      console.log(`      변형 좌표: [${r.variant_coords.join(', ') || '(없음)'}]`);
      if (verbose) {
        console.log(`      원본 상수: [${r.orig_nums.join(', ') || '(없음)'}]`);
        console.log(`      변형 상수: [${r.variant_nums.join(', ') || '(없음)'}]`);
      }
    }
  }
  console.log(`─────────────────────────────────────────────`);
  console.log(`  ${colorize('RED')}: ${counts.RED} · ${colorize('YELLOW')}: ${counts.YELLOW} · ${colorize('GREEN')}: ${counts.GREEN} · SKIP: ${counts.SKIP}`);
  console.log(`  임계: J ≥ ${RED_THRESHOLD} = RED · ${YELLOW_THRESHOLD} ≤ J < ${RED_THRESHOLD} = YELLOW · J < ${YELLOW_THRESHOLD} = GREEN`);
}

main();
