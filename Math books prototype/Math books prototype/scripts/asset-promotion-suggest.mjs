#!/usr/bin/env node
// asset-promotion-suggest.mjs — 검수 통과 슬롯 → 앵커/자산 승격 후보 제안
// 2026-07-28 세션 96 신설 · feedback loop P1-1 (~61% → +3%p)
//
// 배경:
//   완성 회차의 검수 4종 통과 슬롯 (rating≥4 or star_premium)이
//   자산 은행 (bank/anchors/{과목}-{단원}.md · bank/problems/*.md)에 자동 반영되지 않음.
//   → 마스터가 수동으로 anchor 파일에 추가.
//
// 목적:
//   1. 회차 청사진에서 승격 후보 슬롯 자동 추출
//   2. 해당 소단원 anchor 파일 로드 후 중복 확인
//   3. 앵커 신규 append diff 제안 (실제 write는 마스터 승인 후)
//
// 사용법:
//   node scripts/asset-promotion-suggest.mjs \
//     --round <청사진.yaml> \
//     [--subject CM1|CM2] \
//     [--min-rating 4] \
//     [--anchor-dir bank/anchors] \
//     [--report <경로>]
//
// 반환 코드: 0=정상 · 2=오용

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const DEFAULT_ANCHOR_DIR = path.join(ROOT, 'bank', 'anchors');

// ── 인자 파싱 ─────────────────────────────────────────────
const args = process.argv.slice(2);
const opt = {
  round: null,
  subject: null,
  minRating: 4,
  anchorDir: DEFAULT_ANCHOR_DIR,
  report: null,
};
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--round') opt.round = args[++i];
  else if (a === '--subject') opt.subject = args[++i];
  else if (a === '--min-rating') opt.minRating = parseInt(args[++i]);
  else if (a === '--anchor-dir') opt.anchorDir = args[++i];
  else if (a === '--report') opt.report = args[++i];
  else if (a === '--help' || a === '-h') {
    console.log(`
asset-promotion-suggest.mjs

사용법:
  node scripts/asset-promotion-suggest.mjs \\
    --round <청사진.yaml> \\
    [--subject CM1|CM2] \\
    [--min-rating 4] \\
    [--anchor-dir bank/anchors] \\
    [--report <경로>]
`);
    process.exit(0);
  }
}

if (!opt.round) { console.error('❌ --round 필수'); process.exit(2); }
if (!fs.existsSync(opt.round)) { console.error(`❌ 청사진 없음: ${opt.round}`); process.exit(2); }
if (!fs.existsSync(opt.anchorDir)) { console.error(`❌ anchor-dir 없음: ${opt.anchorDir}`); process.exit(2); }

// ── 청사진 파싱 (재사용) ──────────────────────────────────
function parseSlots(yamlText) {
  const slots = [];
  const lines = yamlText.split(/\r?\n/);
  let inSlots = false;
  for (const line of lines) {
    if (/^slots\s*:/.test(line)) { inSlots = true; continue; }
    if (inSlots) {
      if (/^[A-Za-z_]/.test(line) && !line.startsWith(' ') && !line.startsWith('-')) break;
      const inv = line.match(/^\s*-\s*\{(.+)\}\s*$/);
      if (inv) {
        const fields = {};
        for (const pair of inv[1].split(/,\s*/)) {
          const m = pair.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*:\s*(.+?)$/);
          if (!m) continue;
          const k = m[1].trim();
          let v = m[2].trim();
          if (/^".*"$/.test(v) || /^'.*'$/.test(v)) v = v.slice(1, -1);
          if (v === 'true') v = true;
          else if (v === 'false') v = false;
          else if (/^-?\d+(\.\d+)?$/.test(v)) v = parseFloat(v);
          fields[k] = v;
        }
        slots.push(fields);
      }
    }
  }
  return slots;
}

const yamlText = fs.readFileSync(opt.round, 'utf-8');
const slots = parseSlots(yamlText);
if (slots.length === 0) { console.error('❌ slots 배열 없음'); process.exit(2); }

// subject 자동 감지
if (!opt.subject) {
  if (/CM1[-\s]|공통수학1/i.test(yamlText)) opt.subject = 'CM1';
  else if (/CM2[-\s]|공통수학2/i.test(yamlText)) opt.subject = 'CM2';
  else {
    console.error('⚠️  subject 자동 감지 실패 · --subject 지정 필요');
    process.exit(2);
  }
  console.error(`ℹ️  subject 자동 감지: ${opt.subject}`);
}

// ── 승격 후보 추출 ────────────────────────────────────────
const candidates = [];
for (const s of slots) {
  const isPremium = s.star_premium === true;
  const meetsRating = s.rating !== undefined && s.rating >= opt.minRating;
  const hasSource = s.source && !/자체창작|신규|design|new/i.test(String(s.source));
  if ((isPremium || meetsRating) && hasSource) {
    candidates.push(s);
  }
}

console.error(`ℹ️  청사진 ${slots.length} 슬롯 · 승격 후보 ${candidates.length}건 (min-rating=${opt.minRating})`);

// ── anchor 파일 로드 (unit별) ─────────────────────────────
function loadAnchorIds(subject, unit) {
  const filename = `${subject}-${unit}.md`;
  const filepath = path.join(opt.anchorDir, filename);
  if (!fs.existsSync(filepath)) return { exists: false, filepath, ids: new Set() };
  const text = fs.readFileSync(filepath, 'utf-8');
  const ids = new Set();
  // 표 행에서 ID 열 추출 (2번째 컬럼)
  const rowRe = /^\|\s*[A-Z]?\d+\s*\|\s*([^|]+?)\s*\|/gm;
  let m;
  while ((m = rowRe.exec(text)) !== null) {
    const id = m[1].trim();
    if (id) ids.add(id);
  }
  return { exists: true, filepath, ids, text };
}

// ── 슬롯별 승격 분석 ──────────────────────────────────────
const proposals = [];
const anchorCache = {};

for (const s of candidates) {
  const rawUnit = String(s.unit || '').split('+')[0].trim(); // "MX+EQ" → "MX"
  if (!rawUnit) continue;
  const cacheKey = `${opt.subject}-${rawUnit}`;
  if (!anchorCache[cacheKey]) anchorCache[cacheKey] = loadAnchorIds(opt.subject, rawUnit);
  const anchor = anchorCache[cacheKey];
  const source = String(s.source);
  const alreadyAnchor = anchor.exists && anchor.ids.has(source);
  proposals.push({
    slot: s,
    anchorFile: path.relative(ROOT, anchor.filepath),
    anchorExists: anchor.exists,
    alreadyAnchor,
    reason: s.star_premium ? 'star_premium' : `rating=${s.rating}`,
  });
}

const newPromotions = proposals.filter((p) => !p.alreadyAnchor);
const already = proposals.filter((p) => p.alreadyAnchor);

// ── 리포트 ────────────────────────────────────────────────
const lines = [];
lines.push(`# Asset Promotion Suggest 리포트`);
lines.push('');
lines.push(`- **일자**: ${new Date().toISOString()}`);
lines.push(`- **청사진**: \`${opt.round}\``);
lines.push(`- **subject**: ${opt.subject} · **min-rating**: ${opt.minRating}`);
lines.push(`- **anchor-dir**: \`${path.relative(ROOT, opt.anchorDir)}\``);
lines.push('');

lines.push(`## 요약`);
lines.push('');
lines.push(`| 지표 | 값 |`);
lines.push(`|---|---:|`);
lines.push(`| 청사진 총 슬롯 | ${slots.length} |`);
lines.push(`| 승격 후보 (premium OR rating≥${opt.minRating}) | ${candidates.length} |`);
lines.push(`| **신규 앵커 후보** | **${newPromotions.length}** |`);
lines.push(`| 이미 앵커 등재 | ${already.length} |`);
lines.push('');

if (newPromotions.length > 0) {
  lines.push(`## 🎯 신규 앵커 승격 후보`);
  lines.push('');
  lines.push(`> 마스터 승인 후 각 anchor 파일에 append 필요`);
  lines.push('');
  lines.push(`| 슬롯 | 단원 | source | 유형 | 사유 | 대상 anchor 파일 | 상태 |`);
  lines.push(`|---:|---|---|---|---|---|:---:|`);
  for (const p of newPromotions) {
    const status = p.anchorExists ? '📄 파일 있음' : '⚠️ 파일 없음';
    lines.push(`| ${p.slot.n || '?'} | ${p.slot.unit || '?'} | ${p.slot.source} | ${p.slot.type || ''} | ${p.reason} | \`${p.anchorFile}\` | ${status} |`);
  }
  lines.push('');

  // append 미리보기 (파일별 그룹)
  const byFile = {};
  for (const p of newPromotions) {
    if (!p.anchorExists) continue;
    byFile[p.anchorFile] = byFile[p.anchorFile] || [];
    byFile[p.anchorFile].push(p);
  }
  if (Object.keys(byFile).length > 0) {
    lines.push(`### Anchor 파일별 append 미리보기`);
    lines.push('');
    for (const [file, arr] of Object.entries(byFile)) {
      lines.push(`#### \`${file}\``);
      lines.push('');
      lines.push('```markdown');
      for (const p of arr) {
        const s = p.slot;
        lines.push(`| ANEW | ${s.source} | (T-code 미지정) | (정답률 미측) | ${s.rating || ''} | pending_review | ${s.type || ''} |`);
      }
      lines.push('```');
      lines.push('');
    }
  }
}

if (already.length > 0) {
  lines.push(`## ✓ 이미 앵커 등재됨`);
  lines.push('');
  lines.push(`| 슬롯 | 단원 | source | 상태 |`);
  lines.push(`|---:|---|---|---|`);
  for (const p of already) {
    lines.push(`| ${p.slot.n || '?'} | ${p.slot.unit || '?'} | ${p.slot.source} | 재사용 확인 |`);
  }
  lines.push('');
}

lines.push(`## 관련 도구`);
lines.push(`- \`bank/anchors/{subject}-{unit}.md\` · anchor 표준 저장소`);
lines.push(`- \`scripts/anchor-compare.mjs\` · 신규 문항 vs 앵커 비교`);
lines.push(`- \`scripts/absorb-completed-round.mjs\` · usage-log 재유입 chain`);

const reportText = lines.join('\n');
if (opt.report) {
  fs.mkdirSync(path.dirname(opt.report), { recursive: true });
  fs.writeFileSync(opt.report, reportText, 'utf-8');
  console.error(`📄 리포트 저장: ${opt.report}`);
} else {
  console.log(reportText);
}

console.error(`\n결과: 후보=${candidates.length} · 신규승격=${newPromotions.length} · 기존앵커=${already.length}`);
process.exit(0);
