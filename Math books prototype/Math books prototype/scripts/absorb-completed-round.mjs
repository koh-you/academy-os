#!/usr/bin/env node
// absorb-completed-round.mjs — 완성 회차 → 자산 은행 재유입
// 2026-07-28 세션 96 신설 · feedback loop P0-2 (~40% → +8%p)
//
// 배경: 완성 시험지·정리편 회차의 슬롯이 자산으로 재편입되지 않음.
//       usage-log는 append만 (마스터 수동) · anchor 승격은 마스터 수동.
//
// 목적:
//   1. 청사진.yaml 파싱 → 슬롯의 source_id·origin_pattern·star_premium·rating 추출
//   2. bank/usage-log.md 새 회차 섹션 자동 append (v2 스키마)
//   3. 앵커 승격 후보 자동 추천 (star_premium OR rating ≥ 4)
//   4. 원형 사용 이력 append 후보 (origin_pattern 필드 있으면)
//   5. 회차 다양성 리포트: 소단원 분포·원형 반복·자기복제 위험·premium 밀도
//
// 사용법:
//   node scripts/absorb-completed-round.mjs \
//     --round <청사진.yaml> \
//     --round-id <이름 · 예: DeeP-Red-2> \
//     [--update-usage-log]           usage-log.md 실제 append (기본 dry-run)
//     [--report <출력경로.md>]
//     [--suggest-anchor-promotion]   앵커 후보 리포트 포함
//
// 반환 코드: 0 = 정상 · 1 = 회차 이미 등록됨 (중복) · 2 = 오용

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

// ── 인자 파싱 ─────────────────────────────────────────────
const args = process.argv.slice(2);
const opt = {
  round: null,
  roundId: null,
  updateUsageLog: false,
  suggestAnchor: false,
  report: null,
};
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--round') opt.round = args[++i];
  else if (a === '--round-id') opt.roundId = args[++i];
  else if (a === '--update-usage-log') opt.updateUsageLog = true;
  else if (a === '--suggest-anchor-promotion') opt.suggestAnchor = true;
  else if (a === '--report') opt.report = args[++i];
  else if (a === '--help' || a === '-h') {
    console.log(`
absorb-completed-round.mjs — 완성 회차 자산 재유입

사용법:
  node scripts/absorb-completed-round.mjs \\
    --round <청사진.yaml> \\
    --round-id <이름 · 예: DeeP-Red-2> \\
    [--update-usage-log]
    [--suggest-anchor-promotion]
    [--report <출력경로.md>]

반환: 0=정상 · 1=중복 회차 · 2=오용
`);
    process.exit(0);
  }
}

if (!opt.round) { console.error('❌ --round 필수'); process.exit(2); }
if (!opt.roundId) {
  // 청사진 파일이 있는 폴더 이름을 fallback
  opt.roundId = path.basename(path.dirname(path.resolve(opt.round)));
  console.error(`ℹ️  --round-id 자동 감지: ${opt.roundId}`);
}
if (!fs.existsSync(opt.round)) { console.error(`❌ 청사진 없음: ${opt.round}`); process.exit(2); }

// ── 청사진 파싱 (경량 YAML · slots 배열 추출) ─────────────
function parseSlots(yamlText) {
  const slots = [];
  const lines = yamlText.split(/\r?\n/);
  let inSlots = false;
  for (const line of lines) {
    if (/^slots\s*:/.test(line)) { inSlots = true; continue; }
    if (inSlots) {
      // top-level 필드 만나면 종료
      if (/^[A-Za-z_]/.test(line) && !line.startsWith(' ') && !line.startsWith('-')) break;
      // - {n: 1, unit: ..., source: ...} 형식
      const invMatch = line.match(/^\s*-\s*\{(.+)\}\s*$/);
      if (invMatch) {
        const fields = {};
        const body = invMatch[1];
        // 콤마 분리 (문자열 내 콤마 없다고 가정 · 단순 파서)
        for (const pair of body.split(/,\s*/)) {
          const m = pair.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*:\s*(.+?)$/);
          if (!m) continue;
          const k = m[1].trim();
          let v = m[2].trim();
          // "quoted" 제거
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

function parseTopField(yamlText, key) {
  const re = new RegExp(`^${key}\\s*:\\s*(.+)$`, 'm');
  const m = yamlText.match(re);
  if (!m) return null;
  let v = m[1].trim();
  if (/^".*"$/.test(v) || /^'.*'$/.test(v)) v = v.slice(1, -1);
  return v;
}

const yamlText = fs.readFileSync(opt.round, 'utf-8');
const slots = parseSlots(yamlText);
const seriesType = parseTopField(yamlText, 'series_type');
const unitCode = parseTopField(yamlText, 'unit_code');
const subject = parseTopField(yamlText, 'subject');

if (slots.length === 0) {
  console.error('❌ slots 배열 없음 (또는 파싱 실패 · 정리편 청사진은 지원 안 함)');
  process.exit(2);
}

console.error(`\n▶ 회차 흡수 시작 — ${opt.roundId} · 슬롯 ${slots.length}개`);

// ── 회차 중복 확인 ────────────────────────────────────────
const USAGE_LOG = path.join(ROOT, 'bank', 'usage-log.md');
const existingLog = fs.existsSync(USAGE_LOG) ? fs.readFileSync(USAGE_LOG, 'utf-8') : '';
const roundHeaderRe = new RegExp(`###\\s+${opt.roundId.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\$&')}\\b`);
const alreadyLogged = roundHeaderRe.test(existingLog);
if (alreadyLogged && opt.updateUsageLog) {
  console.error(`⚠️  회차 "${opt.roundId}" 이미 usage-log에 등록됨. --update-usage-log 무시하고 dry-run으로 진행.`);
}

// ── 슬롯별 분석 ───────────────────────────────────────────
const analysis = {
  totalSlots: slots.length,
  withSource: 0,
  withoutSource: 0,
  starPremiumCount: 0,
  originPatternCounts: {},
  unitCounts: {},
  sourceDuplicates: {},
  anchorCandidates: [],
};

for (const s of slots) {
  const source = s.source || s.source_id;
  if (source) {
    analysis.withSource++;
    analysis.sourceDuplicates[source] = (analysis.sourceDuplicates[source] || 0) + 1;
  } else {
    analysis.withoutSource++;
  }
  if (s.star_premium === true) analysis.starPremiumCount++;
  if (s.origin_pattern) {
    analysis.originPatternCounts[s.origin_pattern] = (analysis.originPatternCounts[s.origin_pattern] || 0) + 1;
  }
  if (s.unit) analysis.unitCounts[s.unit] = (analysis.unitCounts[s.unit] || 0) + 1;

  // 앵커 후보 조건: star_premium OR rating≥4 OR (source 있음 AND !variation_type=new)
  const isAnchorCandidate = s.star_premium === true || (s.rating !== undefined && s.rating >= 4);
  if (isAnchorCandidate) {
    analysis.anchorCandidates.push({ n: s.n, unit: s.unit, source, type: s.type, star_premium: s.star_premium });
  }
}

// 중복 사용 (2회 이상) source_id 필터
const duplicateSources = Object.entries(analysis.sourceDuplicates)
  .filter(([, count]) => count > 1)
  .map(([source, count]) => ({ source, count }));

// 원형 다양성 지수 (unique / total · 없으면 undefined)
const originPatternDiversity = Object.keys(analysis.originPatternCounts).length > 0
  ? Object.keys(analysis.originPatternCounts).length / slots.length
  : null;

// 소단원 커버리지
const unitDiversity = Object.keys(analysis.unitCounts).length;

// ── usage-log append ─────────────────────────────────────
function buildUsageLogAppend() {
  const lines = [];
  lines.push('');
  lines.push(`### ${opt.roundId}${seriesType ? ` (${seriesType})` : ''}${unitCode ? ` · ${unitCode}` : ''}`);
  lines.push('');
  lines.push(`- **회차 흡수 일자**: ${new Date().toISOString().slice(0, 10)}`);
  lines.push(`- **series_type**: ${seriesType || '(미지정)'}`);
  lines.push(`- **총 슬롯**: ${slots.length} · **source 있음**: ${analysis.withSource} · **없음**: ${analysis.withoutSource}`);
  lines.push(`- **star_premium**: ${analysis.starPremiumCount}건`);
  lines.push('');
  lines.push('| 슬롯 | 단원 | source | outcome | rating | rejection |');
  lines.push('|---:|---|---|---|---:|---|');
  for (const s of slots) {
    const source = s.source || s.source_id || '(없음)';
    const outcome = s.outcome || 'pending';
    const rating = s.rating !== undefined ? s.rating : '';
    const rej = s.rejection_reason || '';
    lines.push(`| ${s.n || '?'} | ${s.unit || '?'} | ${source} | ${outcome} | ${rating} | ${rej} |`);
  }
  return lines.join('\n');
}

const usageLogAppend = buildUsageLogAppend();

if (opt.updateUsageLog && !alreadyLogged) {
  fs.writeFileSync(USAGE_LOG, existingLog + usageLogAppend + '\n', 'utf-8');
  console.error(`✓ usage-log.md 업데이트: ${USAGE_LOG}`);
} else if (!alreadyLogged) {
  console.error(`ℹ️  dry-run: --update-usage-log 미지정 · usage-log 미변경`);
}

// ── 리포트 생성 ───────────────────────────────────────────
const report = [];
report.push(`# 회차 흡수 리포트 — ${opt.roundId}`);
report.push('');
report.push(`- **일자**: ${new Date().toISOString()}`);
report.push(`- **청사진**: \`${opt.round}\``);
report.push(`- **series_type**: ${seriesType || '(미지정)'} · **unit_code**: ${unitCode || '(미지정)'}`);
report.push('');
report.push(`## 요약`);
report.push('');
report.push(`| 지표 | 값 |`);
report.push(`|---|---:|`);
report.push(`| 총 슬롯 | ${slots.length} |`);
report.push(`| source 있음 | ${analysis.withSource} |`);
report.push(`| source 없음 | ${analysis.withoutSource} |`);
report.push(`| star_premium | ${analysis.starPremiumCount} |`);
report.push(`| 소단원 다양성 | ${unitDiversity}개 |`);
report.push(`| 원형 다양성 지수 | ${originPatternDiversity !== null ? originPatternDiversity.toFixed(2) : 'N/A (origin_pattern 없음)'} |`);
report.push('');
report.push(`## 소단원 분포`);
report.push('');
report.push(`| 단원 | 슬롯 수 |`);
report.push(`|---|---:|`);
for (const [unit, cnt] of Object.entries(analysis.unitCounts).sort((a, b) => b[1] - a[1])) {
  report.push(`| ${unit} | ${cnt} |`);
}

if (Object.keys(analysis.originPatternCounts).length > 0) {
  report.push('');
  report.push(`## 원형(origin_pattern) 사용`);
  report.push('');
  report.push(`| 원형 | 회수 |`);
  report.push(`|---|---:|`);
  for (const [op, cnt] of Object.entries(analysis.originPatternCounts).sort((a, b) => b[1] - a[1])) {
    report.push(`| ${op} | ${cnt} |`);
  }
}

if (duplicateSources.length > 0) {
  report.push('');
  report.push(`## ⚠️ 자기복제 위험 — 회차 내 source_id 중복`);
  report.push('');
  report.push(`| source | 반복 |`);
  report.push(`|---|---:|`);
  for (const d of duplicateSources) report.push(`| ${d.source} | ${d.count} |`);
}

if (opt.suggestAnchor && analysis.anchorCandidates.length > 0) {
  report.push('');
  report.push(`## 앵커 승격 후보`);
  report.push('');
  report.push(`_star_premium OR rating≥4 조건 · 마스터 승인 후 \`bank/anchors/{subject}-{unit}.md\` append_`);
  report.push('');
  report.push(`| 슬롯 | 단원 | source | 유형 | premium |`);
  report.push(`|---:|---|---|---|:---:|`);
  for (const c of analysis.anchorCandidates) {
    report.push(`| ${c.n} | ${c.unit} | ${c.source || '(없음)'} | ${c.type || ''} | ${c.star_premium ? '✓' : ''} |`);
  }
}

report.push('');
report.push(`## usage-log 삽입 미리보기`);
report.push('');
report.push('```markdown');
report.push(usageLogAppend);
report.push('```');
report.push('');

if (alreadyLogged) {
  report.push(`> ⚠️  이 회차 (\`${opt.roundId}\`)는 이미 \`bank/usage-log.md\`에 등록되어 있어 append 스킵됨.`);
} else if (opt.updateUsageLog) {
  report.push(`> ✓ \`bank/usage-log.md\`에 append 완료.`);
} else {
  report.push(`> ℹ️  dry-run: \`--update-usage-log\` 지정 시 실제 append.`);
}

const reportText = report.join('\n');
if (opt.report) {
  fs.mkdirSync(path.dirname(opt.report), { recursive: true });
  fs.writeFileSync(opt.report, reportText, 'utf-8');
  console.error(`📄 리포트 저장: ${opt.report}`);
} else {
  console.log(reportText);
}

// ── 종료 ─────────────────────────────────────────────────
console.error(`\n결과: slots=${slots.length} · premium=${analysis.starPremiumCount} · unit=${unitDiversity} · dup=${duplicateSources.length}`);
process.exit(alreadyLogged && opt.updateUsageLog ? 1 : 0);
