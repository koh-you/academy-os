#!/usr/bin/env node
// source-id-format-check.mjs — 청사진.yaml source_id 원본 번호 필수 검증
// 2026-07-21 세션 63 신설 · Gate 5.0 G3-a
//
// 배경 (12회 gap · 세션 63):
//   와부고 12회 청사진 slots #1~14 중 11문이 source_id에 원본 번호 없이
//   "개념원리-표준유형" 형태로 처리됨 (v1.7 방안 F 원칙 부분 위반)
//   Y 방안 사후 정합화 (문항별 실 원본 번호 매핑) 완료
//   미래 회차 강제 위해 이 도구 신설
//
// 검증 규칙:
//   ✅ 원본 번호 있는 source_id:
//     - 고쟁이-CM2-CH01-STEP1-#014
//     - 개념원리-CM2-GM-원-연습-212
//     - RPM-CM2-GM-#0060
//     - 마-CM2-GM-원-0512
//     - 블랙라벨-CM2-04-STEP3-#08
//   ❌ 참조 문구만 (RED):
//     - "개념원리-CM2-GM-표준유형 (거리·정삼각형)"
//     - "RPM-CM2-ST-명제 유사 (진리집합·부분집합)"
//     - "표준 유형" 등
//
// 정규식 기반 판정:
//   원본 번호 있음: (#\d+|-\d{3,5})$
//   RED 키워드: 표준유형|유사|표준
//
// 예외:
//   개념 슬롯 (slot_type: 개념·개념정리): source_id 없어도 통과
//   대표예제·확인·Level·실전 슬롯 등은 필수
//
// 사용법:
//   node scripts/source-id-format-check.mjs output/공통수학2/2026-2학기-와부고-예상-중간-12회/청사진.yaml
//   node scripts/source-id-format-check.mjs <파일...> [--csv out.csv] [--json out.json]
//
// 반환 코드: 0 = 통과 · 1 = RED · 2 = 오용

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
  node scripts/source-id-format-check.mjs <청사진.yaml...> [--csv out.csv] [--json out.json]
검증: 각 slot source_id에 원본 번호 (#숫자 or -0000) 필수 · "표준유형·유사" RED
예외: slot_type 개념·개념정리는 source_id 없어도 OK
반환: 0=통과 · 1=RED · 2=오용
    `.trim());
    process.exit(0);
  } else {
    inputs.push(a);
  }
}

if (inputs.length === 0) {
  console.error('❌ 대상 파일 없음. 청사진.yaml 경로 지정');
  process.exit(2);
}

// 원본 번호 정규식 (충분히 관대 · 여러 벤더 대응)
// 종료가 다음 중 하나: #\d+ or -\d{3,5} or 문자열 끝에 4~5자리 숫자
const HAS_NUMBER = /(#\d+|-\d{3,5})(?:\s|$|\))/;

// RED 키워드 (참조 문구)
const RED_KEYWORDS = [
  /표준\s*유형/,
  /표준\s*형/,
  /유사(?![도가])/,
  /참조(?![부됨])/,
  /계열$/,
  /형태$/,
];

// slot_type 개념 (source 없이도 OK)
const CONCEPT_TYPES = /^(개념|개념정리|정의|공식)$/;

// 각 청사진 파일 스캔
const findings = [];  // { file, slot_line, slot_id, source_id, level, reason }

for (const file of inputs) {
  if (!fs.existsSync(file)) {
    console.error(`  ⚠ 파일 없음: ${file}`);
    continue;
  }
  const raw = fs.readFileSync(file, 'utf8');
  const lines = raw.split('\n');

  // slot 블록별 파싱 (YAML block-level · - n: 또는 - slot_id: 기준)
  let curSlot = null;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // slot 시작 감지
    const slotStart = line.match(/^\s*-\s*(?:n|slot_id):\s*(\d+)/);
    if (slotStart) {
      // 이전 slot 마무리 (source_id 검증)
      if (curSlot) processSlot(curSlot, file, findings);
      curSlot = {
        slot_id: parseInt(slotStart[1], 10),
        line_start: i + 1,
        source_id: null,
        slot_type: null,
      };
      continue;
    }

    if (curSlot) {
      const src = line.match(/^\s+source(?:_id)?:\s*(.+?)\s*$/);
      if (src) {
        curSlot.source_id = src[1].trim().replace(/^["']|["']$/g, '');
        curSlot.source_line = i + 1;
      }
      const typ = line.match(/^\s+slot_type:\s*(.+?)\s*$/);
      if (typ) {
        curSlot.slot_type = typ[1].trim().replace(/^["']|["']$/g, '');
      }
    }
  }
  if (curSlot) processSlot(curSlot, file, findings);
}

function processSlot(slot, file, findings) {
  // 개념 슬롯 예외
  if (slot.slot_type && CONCEPT_TYPES.test(slot.slot_type)) return;
  if (!slot.source_id) {
    findings.push({
      file: path.relative(ROOT, file).replace(/\\/g, '/'),
      slot_id: slot.slot_id,
      slot_line: slot.line_start,
      source_line: null,
      source_id: '(없음)',
      level: 'RED',
      reason: 'source_id 필드 부재 (개념 슬롯 아님)',
    });
    return;
  }
  // RED 키워드 감지
  for (const re of RED_KEYWORDS) {
    if (re.test(slot.source_id)) {
      findings.push({
        file: path.relative(ROOT, file).replace(/\\/g, '/'),
        slot_id: slot.slot_id,
        slot_line: slot.line_start,
        source_line: slot.source_line,
        source_id: slot.source_id.slice(0, 80),
        level: 'RED',
        reason: `참조 문구 감지 (${re.source})`,
      });
      return;
    }
  }
  // 원본 번호 검증
  if (!HAS_NUMBER.test(slot.source_id)) {
    findings.push({
      file: path.relative(ROOT, file).replace(/\\/g, '/'),
      slot_id: slot.slot_id,
      slot_line: slot.line_start,
      source_line: slot.source_line,
      source_id: slot.source_id.slice(0, 80),
      level: 'RED',
      reason: '원본 번호 부재 (#숫자 or -0000 형식 필수)',
    });
    return;
  }
  // 통과
}

// 출력
const redCnt = findings.filter(f => f.level === 'RED').length;
console.log(`\n=== source-id-format-check (Gate 5.0 G3-a · 세션 63) ===`);
console.log(`대상 파일: ${inputs.length}개 · 감지 RED: ${redCnt}건\n`);

if (redCnt === 0) {
  console.log('  ✓ 모든 slot source_id가 원본 번호 형식 준수 (Gate G3-a GREEN)');
} else {
  const byFile = new Map();
  for (const f of findings) {
    if (!byFile.has(f.file)) byFile.set(f.file, []);
    byFile.get(f.file).push(f);
  }
  for (const [file, fs2] of byFile) {
    console.log(`── ${file} (RED ${fs2.length}건)`);
    for (const f of fs2) {
      console.log(`  🔴 slot #${f.slot_id} L${f.slot_line}${f.source_line ? '~' + f.source_line : ''}`);
      console.log(`     source_id: ${f.source_id}`);
      console.log(`     이유: ${f.reason}`);
    }
    console.log();
  }
}

if (csvOut) {
  const header = 'file,slot_id,slot_line,source_line,source_id,level,reason\n';
  const rows = findings.map(f =>
    `"${f.file}",${f.slot_id},${f.slot_line},${f.source_line || ''},"${f.source_id.replace(/"/g, "'")}",${f.level},"${f.reason.replace(/"/g, "'")}"`
  ).join('\n');
  fs.writeFileSync(csvOut, header + rows + '\n', 'utf8');
  console.log(`CSV 출력: ${csvOut} (${findings.length}건)`);
}
if (jsonOut) {
  fs.writeFileSync(jsonOut, JSON.stringify(findings, null, 2), 'utf8');
  console.log(`JSON 출력: ${jsonOut}`);
}

process.exit(redCnt > 0 ? 1 : 0);
