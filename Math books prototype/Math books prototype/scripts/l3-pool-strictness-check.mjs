#!/usr/bin/env node
// l3-pool-strictness-check.mjs — 정리편 Level 3 슬롯 pool 강제 검증
// 2026-07-21 세션 63 신설 · Gate 5.0 GJ4 (정리편 확장)
//
// 배경 (세션 63 DeeP Math 8권 전수 평가):
//   L3 자체창작 하향 33% (24건 중 8건) · 실측 star_3~4 (목표 star_5·premium)
//   무리·유리·이동·ST L3 집중 · concept-author v1.0/v1.1 원형 카탈로그 미참조
//   마스터 승인 개선 방안: L3 pool 강제 우선순위 (블랙라벨 STEP 3·마플 STEP 3·학평 27~29번)
//
// 검증 규칙:
//   ✅ 강제 pool (A+·A 신뢰 · v1.12 회귀 기반):
//     - 블랙라벨 CM2 STEP 3 (100% premium)
//     - 마플 STEP 3 (모든 소단원)
//     - EBS 학평기출 (문번 27·28·29·30 킬러)
//     - 1등급마스터 STEP 3·1등급++
//     - 플래티넘 STEP 3
//     - EBS 올림포스 고난도 band 4
//   ❌ 자체창작 (RED · concept-author v1.1 이전):
//     - source_id 없음
//     - source_id "자체창작"·"신규"·"design" 등 표시
//     - variation_type: new
//
// 사용법:
//   node scripts/l3-pool-strictness-check.mjs <청사진.yaml or tex...>
//   node scripts/l3-pool-strictness-check.mjs bank/deep-math-source-mapping-v1.md
//   node scripts/l3-pool-strictness-check.mjs --csv out.csv
//
// 반환 코드: 0 = 통과 · 1 = RED (L3 자체창작 감지) · 2 = 오용

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const args = process.argv.slice(2);
let csvOut = null;
let jsonOut = null;
const inputs = [];
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--csv') csvOut = args[++i];
  else if (a === '--json') jsonOut = args[++i];
  else if (a === '--help' || a === '-h') {
    console.log(`
사용법:
  node scripts/l3-pool-strictness-check.mjs <파일...> [--csv out.csv] [--json out.json]
검증: 정리편 L3 슬롯 원본 pool이 강제 tier (A+·A · star_5·premium)에 부합하는지
강제 pool: 블랙라벨 STEP 3·마플 STEP 3·EBS 학평기출·1등급마스터·플래티넘·EBS 고난도 band 4
반환: 0=통과 · 1=RED (L3 자체창작) · 2=오용
    `.trim());
    process.exit(0);
  } else {
    inputs.push(a);
  }
}

if (inputs.length === 0) {
  console.error('❌ 대상 파일 없음');
  process.exit(2);
}

// 강제 pool (RegExp)
const STRICT_POOL = [
  /블랙라벨.*STEP\s*3/i,
  /마플(시너지)?.*STEP\s*3/i,
  /EBS.*학평기출/i,
  /전국연합/i,
  /학평.*(27|28|29|30)번/,
  /1등급MASTER.*STEP\s*3|1등급마스터.*STEP\s*3|1등급\+\+/i,
  /플래티넘.*STEP\s*3/i,
  /EBS.*올림포스.*고난도.*band\s*4|올림포스\s*고난도.*band\s*4/i,
  /수학의신.*STEP\s*3/i,
  /고쟁이.*STEP\s*3/i,
];

// 자체창작 RED 키워드
const RED_KEYWORDS = [
  /자체\s*창작/,
  /신규\s*창작/,
  /design(ed)?/i,
  /variation_type:\s*new/,
];

// tex 파일에서 L3 슬롯 추출
// 패턴: \dmlevel{3} 다음 \dmpnum{N}{...} 문항들 (다음 \dmlevel or \dmrealtype or \end{document}까지)
function extractL3Items(text, filepath) {
  const lines = text.split('\n');
  const items = [];
  let inL3 = false;
  let currentPnum = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // L3 시작
    if (/\\dmlevel\{3\}/.test(line)) {
      inL3 = true;
      continue;
    }
    // L3 종료 (다른 dmlevel or dmrealtype or newpage 감지)
    if (inL3 && (/\\dmrealtype/.test(line) || /\\dmlevel\{[^3]\}/.test(line))) {
      inL3 = false;
      continue;
    }

    if (inL3) {
      // dmpnum 시작
      const pnumM = line.match(/\\dmpnum\{(\d+)\}/);
      if (pnumM) {
        if (currentPnum) items.push(currentPnum);
        currentPnum = {
          slot: parseInt(pnumM[1], 10),
          line_start: i + 1,
          content: [line],
          source: null,
        };
        continue;
      }
      if (currentPnum) {
        currentPnum.content.push(line);
        // source: 감지 (comment 형식 or 별도 metadata)
        const srcM = line.match(/%\s*source(?:_id)?:\s*(.+?)$/);
        if (srcM) currentPnum.source = srcM[1].trim();
      }
    }
  }
  if (currentPnum && inL3) items.push(currentPnum);
  return items;
}

// mapping 파일 (deep-math-source-mapping-v1.md 등) 파싱
function extractFromMappingFile(text) {
  const items = [];
  const lines = text.split('\n');
  // 예: "책 08 L3 #1 → 블랙라벨-CM2-08-STEP3-#12" or table row
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const m = line.match(/L3.*?[\|→]\s*(.+?)(?:\||$)/);
    if (m) {
      items.push({
        slot: null,
        line_start: i + 1,
        source: m[1].trim(),
      });
    }
  }
  return items;
}

// 판정
function judgeSlot(source) {
  if (!source) return { level: 'RED', reason: 'source_id 없음 (자체창작 의심)' };
  // RED 키워드
  for (const re of RED_KEYWORDS) {
    if (re.test(source)) return { level: 'RED', reason: `RED 키워드 (${re.source})` };
  }
  // 강제 pool
  for (const re of STRICT_POOL) {
    if (re.test(source)) return { level: 'GREEN', reason: `강제 pool 매치 (${re.source})` };
  }
  return { level: 'YELLOW', reason: '강제 pool 미매치 (수동 확인)' };
}

// 실행
const allFindings = [];
let totalScanned = 0;

for (const file of inputs) {
  if (!fs.existsSync(file)) {
    console.error(`  ⚠ 파일 없음: ${file}`);
    continue;
  }
  totalScanned++;
  const raw = fs.readFileSync(file, 'utf8');
  const isMapping = file.endsWith('.md');
  const items = isMapping ? extractFromMappingFile(raw) : extractL3Items(raw, file);

  for (const it of items) {
    const v = judgeSlot(it.source);
    allFindings.push({
      file: path.relative(ROOT, file).replace(/\\/g, '/'),
      slot: it.slot,
      line_start: it.line_start,
      source: it.source || '(없음)',
      level: v.level,
      reason: v.reason,
    });
  }
}

const counts = { GREEN: 0, YELLOW: 0, RED: 0 };
for (const f of allFindings) counts[f.level]++;

console.log(`\n=== l3-pool-strictness-check (Gate 5.0 GJ4 · 세션 63) ===`);
console.log(`대상 파일: ${totalScanned}개 · L3 슬롯: ${allFindings.length}건`);
console.log(`판정: GREEN=${counts.GREEN} · YELLOW=${counts.YELLOW} · RED=${counts.RED}\n`);

if (allFindings.length === 0) {
  console.log('  ℹ L3 슬롯 없음');
} else {
  const byFile = new Map();
  for (const f of allFindings) {
    if (!byFile.has(f.file)) byFile.set(f.file, []);
    byFile.get(f.file).push(f);
  }
  for (const [file, fs2] of byFile) {
    const s = { GREEN: 0, YELLOW: 0, RED: 0 };
    fs2.forEach(f => s[f.level]++);
    console.log(`── ${file} (${fs2.length}건 · G=${s.GREEN}·Y=${s.YELLOW}·R=${s.RED})`);
    for (const f of fs2) {
      const tag = f.level === 'GREEN' ? '✓' : f.level === 'YELLOW' ? '⚠' : '🔴';
      console.log(`  ${tag} ${f.level.padEnd(6)} L${f.line_start}${f.slot ? ' #' + f.slot : ''}`);
      console.log(`     source: ${f.source.slice(0, 80)}`);
      console.log(`     이유: ${f.reason}`);
    }
    console.log();
  }
}

if (csvOut) {
  const header = 'file,slot,line_start,source,level,reason\n';
  const rows = allFindings.map(f =>
    `"${f.file}",${f.slot || ''},${f.line_start},"${f.source.replace(/"/g, "'")}",${f.level},"${f.reason.replace(/"/g, "'")}"`
  ).join('\n');
  fs.writeFileSync(csvOut, header + rows + '\n', 'utf8');
  console.log(`CSV 출력: ${csvOut}`);
}
if (jsonOut) {
  fs.writeFileSync(jsonOut, JSON.stringify(allFindings, null, 2), 'utf8');
  console.log(`JSON 출력: ${jsonOut}`);
}

process.exit(counts.RED > 0 ? 1 : 0);
