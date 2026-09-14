#!/usr/bin/env node
// 시험범위 외 키워드 자동 차단 검사
// 2026-06-25 v1.0 마스터 확립 — 7회차 시험범위 위반 7건 사건 계기
// 단일 출처: bank/시험범위/{시리즈명}.yaml (마스터 명시 시험범위 명세)
//
// 사용법:
//   node scripts/exam-scope-check.mjs <scope.yaml> <exam.tex> [exam2.tex ...]
// 예:
//   node scripts/exam-scope-check.mjs bank/시험범위/동화고-1학기기말-예상.yaml output/공통수학1/동화고-1학기기말-예상/7회차-문제.tex

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: node scripts/exam-scope-check.mjs <scope.yaml> <exam.tex> [more.tex ...]');
  console.error('       반환 코드: 0 = 위반 없음 / 1 = 위반 있음');
  process.exit(2);
}

const scopeFile = args[0];
const examFiles = args.slice(1);

if (!fs.existsSync(scopeFile)) {
  console.error(`⚠️  시험범위 YAML 없음: ${scopeFile}`);
  process.exit(2);
}

// 간단한 YAML 파서 (forbidden_keywords 블록만 추출)
// 의존성 없이 동작 — js-yaml 미사용
function parseForbiddenKeywords(yamlText) {
  const lines = yamlText.split(/\r?\n/);
  const items = [];
  let inBlock = false;
  let current = null;
  let inNote = false;
  let noteIndent = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^forbidden_keywords\s*:/.test(line)) { inBlock = true; continue; }
    if (inBlock) {
      // 새 최상위 키 만나면 블록 종료
      if (/^[a-zA-Z_]+\s*:/.test(line) && !/^\s/.test(line)) { inBlock = false; if (current) items.push(current); current = null; continue; }
      // - pattern: 시작 = 새 아이템
      const itemStart = line.match(/^\s*-\s*pattern:\s*['"](.+?)['"]\s*$/);
      if (itemStart) {
        if (current) items.push(current);
        current = { pattern: itemStart[1], name: '', severity: 'RED', note: '' };
        inNote = false;
        continue;
      }
      const nameLine = line.match(/^\s*name:\s*['"](.+?)['"]\s*$/);
      if (nameLine && current) { current.name = nameLine[1]; continue; }
      const sevLine = line.match(/^\s*severity:\s*(\w+)\s*$/);
      if (sevLine && current) { current.severity = sevLine[1]; continue; }
      const noteLine = line.match(/^\s*note:\s*(.*)$/);
      if (noteLine && current) {
        if (noteLine[1].trim() === '|') { inNote = true; noteIndent = -1; current.note = ''; }
        else current.note = noteLine[1].trim();
        continue;
      }
      if (inNote && current) {
        if (noteIndent < 0 && line.trim()) noteIndent = line.length - line.trimStart().length;
        if (line.trim() && line.length - line.trimStart().length >= noteIndent) {
          current.note += (current.note ? ' ' : '') + line.trim();
        } else if (line.trim() === '') {
          // continue
        } else {
          inNote = false;
        }
      }
    }
  }
  if (current) items.push(current);
  return items;
}

const yamlText = fs.readFileSync(scopeFile, 'utf8');
const forbidden = parseForbiddenKeywords(yamlText);

if (forbidden.length === 0) {
  console.error(`⚠️  forbidden_keywords 블록을 ${scopeFile}에서 찾지 못함`);
  process.exit(2);
}

console.log(`📋 시험범위 명세: ${path.basename(scopeFile)}`);
console.log(`   금지 키워드 ${forbidden.length}종 로드\n`);

let totalRed = 0;
let totalYellow = 0;
const reports = [];

for (const file of examFiles) {
  if (!fs.existsSync(file)) {
    console.error(`⚠️  파일 없음: ${file}`);
    continue;
  }
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);

  for (const rule of forbidden) {
    // YAML 파서가 백슬래시 이스케이프를 한 번 처리한 상태 — \\\\sqrt → \\sqrt
    // regex로 변환 시 한 번 더 unescape 필요
    let patSrc;
    try {
      patSrc = rule.pattern.replace(/\\\\/g, '\\');
      new RegExp(patSrc);
    } catch (e) {
      console.error(`⚠️  잘못된 정규식: ${rule.pattern} — 건너뜀`);
      continue;
    }
    const re = new RegExp(patSrc, 'g');

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      re.lastIndex = 0;
      const matches = [...line.matchAll(re)];
      if (matches.length > 0) {
        for (const m of matches) {
          reports.push({
            file: path.basename(file),
            line: i + 1,
            level: rule.severity,
            name: rule.name,
            match: m[0],
            note: rule.note,
            context: line.trim().slice(0, 140),
          });
          if (rule.severity === 'RED') totalRed++;
          else totalYellow++;
        }
      }
    }
  }
}

if (reports.length === 0) {
  console.log('✅ 시험범위 위반 0건. 통과.');
  process.exit(0);
}

console.log(`\n🔴 RED ${totalRed}건 / 🟡 YELLOW ${totalYellow}건\n`);
console.log('=== 시험범위 외 키워드 검출 ===');
for (const r of reports) {
  const icon = r.level === 'RED' ? '🔴' : '🟡';
  console.log(`${icon} ${r.file}:${r.line}  [${r.name}]  "${r.match}"`);
  console.log(`    context: ${r.context}`);
  if (r.note) console.log(`    note: ${r.note}`);
  console.log();
}

console.log('=== 단일 출처 ===');
console.log(`${scopeFile} (마스터 명시 시험범위 정밀 명세)`);
console.log('bank/출제메커니즘-v2.0.md §3.1 게이트 G4');

if (totalRed > 0) {
  console.error(`\n❌ 빌드 차단: 🔴 시험범위 외 ${totalRed}건. 슬롯 청사진부터 재셀렉 필요.`);
  process.exit(1);
}
console.log('\n⚠️  YELLOW 검토 권장. 슬롯 청사진 section과 대조하여 허용 여부 결정.');
process.exit(0);
