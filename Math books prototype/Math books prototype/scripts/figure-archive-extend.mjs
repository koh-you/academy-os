#!/usr/bin/env node
// 그림 archive 자동 확장 v1.0 — Layer 4 · Learning
// 2026-07-17 세션 47 종료 · 세션 48 신설
//
// 목적:
//   bank/그림-도입-로그.md에서 will_be_archived=true, archived_as=null 엔트리 감지.
//   해당 tex 파일에서 TikZ 블록 추출 → bank/도해-카탈로그.md M-N 자동 등재.
//   로그 파일의 archived_as 필드 자동 갱신.
//
// 사용:
//   node scripts/figure-archive-extend.mjs              # 미등재 승인 엔트리 일괄 처리
//   node scripts/figure-archive-extend.mjs --log-id LOG-...  # 단일 엔트리만
//   node scripts/figure-archive-extend.mjs --dry-run
//
// 단일 출처: bank/그림-도입-로그.md v1.0 · bank/도해-카탈로그.md M-01~M-N

import fs from 'node:fs';

const args = {};
const argv = process.argv.slice(2);
for (let i = 0; i < argv.length; i++) {
  const key = argv[i];
  if (key.startsWith('--')) {
    if (['dry-run'].includes(key.slice(2))) args[key.slice(2)] = true;
    else args[key.slice(2)] = argv[++i];
  }
}

const logPath = 'bank/그림-도입-로그.md';
const catalogPath = 'bank/도해-카탈로그.md';

if (!fs.existsSync(logPath)) {
  console.error(`❌ 로그 파일 없음: ${logPath}`);
  process.exit(2);
}
if (!fs.existsSync(catalogPath)) {
  console.error(`❌ 카탈로그 없음: ${catalogPath}`);
  process.exit(2);
}

const logContent = fs.readFileSync(logPath, 'utf8');
const catalogContent = fs.readFileSync(catalogPath, 'utf8');

// ── YAML 엔트리 파싱 ─────────────────────
function parseEntries(text) {
  const entries = [];
  const re = /^- log_id:\s*(\S+)\s*$/gm;
  const matches = [...text.matchAll(re)];

  for (let i = 0; i < matches.length; i++) {
    const start = matches[i].index;
    const end = i + 1 < matches.length ? matches[i + 1].index : text.length;
    const block = text.slice(start, end);
    const entry = { log_id: matches[i][1], _block: block, _start: start, _end: end };
    const lines = block.split('\n');
    for (const line of lines) {
      const m = line.match(/^\s{2}(\w+):\s*(.*)$/);
      if (m) {
        let val = m[2].trim();
        if (val === 'null') val = null;
        else if (val === 'true') val = true;
        else if (val === 'false') val = false;
        else if (/^\d+$/.test(val)) val = parseInt(val);
        else if (/^".*"$/.test(val)) val = val.slice(1, -1);
        entry[m[1]] = val;
      }
    }
    entries.push(entry);
  }
  return entries;
}

// ── 다음 archive 코드 산출 (M-06 등) ─────────────────────
function nextArchiveCode(catalog) {
  const existing = [...catalog.matchAll(/^## M-(\d+)\s+/gm)].map(m => parseInt(m[1]));
  const max = existing.length > 0 ? Math.max(...existing) : 0;
  return `M-${String(max + 1).padStart(2, '0')}`;
}

// ── TikZ 블록 추출 (tex 파일 → 슬롯 → tikzpicture) ─────────────────────
function extractTikzFromFile(filePath, slotN) {
  if (!fs.existsSync(filePath)) return null;
  const text = fs.readFileSync(filePath, 'utf8');
  // 슬롯 블록 찾기
  const startRe = new RegExp(`\\\\begin\\{problem\\}\\{${slotN}\\}`);
  const startMatch = text.match(startRe);
  let searchText;
  if (startMatch) {
    const startIdx = startMatch.index;
    const endRe = /\\end\{problem\}/g;
    endRe.lastIndex = startIdx;
    const endMatch = endRe.exec(text);
    searchText = text.slice(startIdx, endMatch ? endMatch.index : text.length);
  } else {
    // soltitle (답지)
    const solRe = new RegExp(`\\\\soltitle\\{${slotN}\\}\\{[^}]*\\}\\{[^}]*\\}([\\s\\S]*?)(?=\\\\soltitle\\{|\\\\end\\{multicols\\})`);
    const solMatch = text.match(solRe);
    if (!solMatch) return null;
    searchText = solMatch[1];
  }

  // 첫 tikzpicture (overlay 아닌)
  const re = /\\begin\{tikzpicture\}(?:\[[^\]]*\])?[\s\S]*?\\end\{tikzpicture\}/g;
  let m;
  while ((m = re.exec(searchText)) !== null) {
    if (!/overlay,\s*remember picture/.test(m[0])) return m[0];
  }
  return null;
}

// ── 카탈로그에 archive 등재 ─────────────────────
function buildArchiveSection(code, entry, tikzCode) {
  return `\n---\n\n## ${code} ${entry.mechanism_primary || '(mechanism)'}\n\n**Mechanism**: ${entry.mechanism_primary || '(미기재)'}\n**적용 문항**: ${entry.round} #${entry.slot} (${entry.date} · 세션 ${entry.session})\n**소스**: ${entry.figure_source || '(미기재)'} · **유형**: ${entry.figure_type || '(미기재)'}\n**R 예측**: ${entry.R_predicted ?? '?'} (${entry.R_level_predicted || '?'}) · **실측 iteration**: ${entry.iterations_actual ?? '?'}\n**승인 이유**: ${entry.reason || ''}\n\n### 표준 TikZ 코드 (승인 형태)\n\n\`\`\`latex\n${tikzCode || '(TikZ 블록 추출 실패 · 수동 등재 필요)'}\n\`\`\`\n\n**로그 참조**: ${entry.log_id}\n`;
}

// ── 메인 ─────────────────────
const entries = parseEntries(logContent);
const targets = entries.filter(e => {
  if (args['log-id']) return e.log_id === args['log-id'];
  return e.will_be_archived === true && (e.archived_as === null || e.archived_as === undefined);
});

console.log(`🔍 그림 archive 자동 확장 v1.0 · Layer 4`);
console.log(`   로그: ${logPath} (${entries.length}건)`);
console.log(`   카탈로그: ${catalogPath}`);
console.log(`   등재 대상: ${targets.length}건`);
console.log('');

if (targets.length === 0) {
  console.log('✅ 등재 대상 없음 · 종료');
  process.exit(0);
}

let updatedLog = logContent;
let updatedCatalog = catalogContent;
const registered = [];

for (const entry of targets) {
  const nextCode = nextArchiveCode(updatedCatalog);
  console.log(`처리: ${entry.log_id} → ${nextCode}`);
  console.log(`   mechanism: ${entry.mechanism_primary || '(미기재)'}`);
  console.log(`   유형/소스: ${entry.figure_type || '?'} / ${entry.figure_source || '?'}`);

  // TikZ 블록 추출
  let tikzCode = null;
  if (entry.file_ref) {
    const filePath = entry.file_ref.replace(/#L\d+$/, '');
    tikzCode = extractTikzFromFile(filePath, entry.slot);
    if (tikzCode) console.log(`   ✅ TikZ 블록 추출 성공 (${tikzCode.length}자)`);
    else console.log(`   ⚠️  TikZ 블록 추출 실패 · 수동 등재 필요`);
  }

  // 카탈로그에 append
  const archiveSection = buildArchiveSection(nextCode, entry, tikzCode);
  updatedCatalog += archiveSection;

  // 로그 엔트리의 archived_as 필드 갱신
  const oldLine = 'archived_as: null';
  const newLine = `archived_as: ${nextCode}`;
  // 해당 엔트리 블록 안에서만 치환
  const blockStart = updatedLog.indexOf(`- log_id: ${entry.log_id}`);
  if (blockStart >= 0) {
    const nextEntryStart = updatedLog.indexOf('\n- log_id:', blockStart + 1);
    const blockEnd = nextEntryStart >= 0 ? nextEntryStart : updatedLog.length;
    const block = updatedLog.slice(blockStart, blockEnd);
    const newBlock = block.replace(oldLine, newLine);
    updatedLog = updatedLog.slice(0, blockStart) + newBlock + updatedLog.slice(blockEnd);
  }

  registered.push({ log_id: entry.log_id, code: nextCode });
  console.log('');
}

if (args['dry-run']) {
  console.log('✅ dry-run · 실제 저장 안 함');
  console.log('');
  console.log('등재 예정:');
  registered.forEach(r => console.log(`   ${r.code} ← ${r.log_id}`));
  process.exit(0);
}

fs.writeFileSync(catalogPath, updatedCatalog, 'utf8');
fs.writeFileSync(logPath, updatedLog, 'utf8');

console.log('✅ 등재 완료');
registered.forEach(r => console.log(`   ${r.code} ← ${r.log_id}`));
