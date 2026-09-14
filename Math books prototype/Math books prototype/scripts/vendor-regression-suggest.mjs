#!/usr/bin/env node
// vendor-regression-suggest.mjs — 마스터 지적 → 벤더 회귀 정정 제안
// 2026-07-28 세션 96 신설 · feedback loop P1-2 (~61% → +4%p)
//
// 배경:
//   마스터가 "이 회귀 계수 잘못됐다" · "이 벤더 tier 하향" 지적 시
//   memory·bank/마스터-지적/에 저장은 자동이나
//   star-classify.mjs / vendor-label-calibration.md 회귀 정정은 마스터 수동 편집.
//
// 목적:
//   1. bank/마스터-지적/*.md 스캔 → 벤더·별점·tier 관련 지적 추출
//   2. bank/vendor-label-calibration*.md 로드 → 영향 매핑
//   3. star-classify.mjs 매칭 패턴에 대한 diff 제안 리포트
//   4. 마스터 승인 (PR-style) → 매뉴얼 커밋
//
// 안전 원칙: 자동 코드 편집 없음 · 제안 리포트만.
//
// 사용법:
//   node scripts/vendor-regression-suggest.mjs \
//     [--feedback-dir bank/마스터-지적] \
//     [--calibration bank/vendor-label-calibration-v1.12.md] \
//     [--star-classify scripts/star-classify.mjs] \
//     [--since YYYY-MM-DD]                  # 이후 지적만
//     [--report <경로>]
//
// 반환 코드: 0=정상 · 1=벤더 관련 지적 감지 (제안 발생) · 2=오용

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const DEFAULT_FEEDBACK_DIR = path.join(ROOT, 'bank', '마스터-지적');

// ── 인자 파싱 ─────────────────────────────────────────────
const args = process.argv.slice(2);
const opt = {
  feedbackDir: DEFAULT_FEEDBACK_DIR,
  calibration: null,
  starClassify: path.join(ROOT, 'scripts', 'star-classify.mjs'),
  since: null,
  report: null,
};
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--feedback-dir') opt.feedbackDir = args[++i];
  else if (a === '--calibration') opt.calibration = args[++i];
  else if (a === '--star-classify') opt.starClassify = args[++i];
  else if (a === '--since') opt.since = args[++i];
  else if (a === '--report') opt.report = args[++i];
  else if (a === '--help' || a === '-h') {
    console.log(`
vendor-regression-suggest.mjs

사용법:
  node scripts/vendor-regression-suggest.mjs \\
    [--feedback-dir bank/마스터-지적] \\
    [--calibration bank/vendor-label-calibration-v1.12.md] \\
    [--since 2026-07-01] \\
    [--report <경로>]

반환: 0=정상 · 1=벤더 관련 지적 감지 · 2=오용
`);
    process.exit(0);
  }
}

// 캘리브레이션 파일 자동 감지 (최신 v)
if (!opt.calibration) {
  const candidates = fs.readdirSync(path.join(ROOT, 'bank'))
    .filter((f) => /^vendor-label-calibration.*\.md$/.test(f))
    .sort();
  if (candidates.length > 0) {
    opt.calibration = path.join(ROOT, 'bank', candidates[candidates.length - 1]);
    console.error(`ℹ️  캘리브레이션 자동 감지: bank/${path.basename(opt.calibration)}`);
  }
}

if (!fs.existsSync(opt.feedbackDir)) {
  console.error(`❌ feedback-dir 없음: ${opt.feedbackDir}`);
  process.exit(2);
}

// ── 벤더/별점 관련 키워드 ─────────────────────────────────
// 실측 벤더 이름 + tier·label 지시어
const VENDOR_KEYWORDS = [
  '마플', '쎈', '블랙라벨', '개념원리', 'RPM', '고쟁이', '올림포스', '수학의신',
  '플래티넘', '1등급마스터', '아샘', '수능특강', '수능완성', '자이', 'EBS',
  '마더텅', '완자', '완쏠', '풍산자', '절대등급', '일등급', '수학의 정석',
  '수학의완성', '유형온', '유형ZIP', '유형만렙', '바이블', '개념유형', '짱중요',
];
const TIER_KEYWORDS = [
  'TOUGH', 'STEP', 'premium', 'star', 'tier', 'label', '난이도',
  '★', '별\\s*[1-5]', '베이스', 'base', 'A\\+', 'B\\+', '하향', '상향', '재분류', '회귀',
];

const VENDOR_RE = new RegExp(VENDOR_KEYWORDS.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'g');
const TIER_RE = new RegExp(TIER_KEYWORDS.join('|'), 'g');

// ── 지적 파일 스캔 ────────────────────────────────────────
function parseFeedbackFile(filepath) {
  const text = fs.readFileSync(filepath, 'utf-8');
  const fmMatch = text.match(/^---\r?\n([\s\S]*?)\r?\n---([\s\S]*)$/);
  if (!fmMatch) return null;
  const fm = fmMatch[1];
  const body = fmMatch[2];
  const dateMatch = fm.match(/^date:\s*(.+?)$/m);
  const severityMatch = fm.match(/^severity:\s*(\w+)/m);
  const quoteMatch = fm.match(/^master_quote:\s*"([^"]+)"/m);
  return {
    filepath, filename: path.basename(filepath),
    date: dateMatch ? dateMatch[1].trim() : null,
    severity: severityMatch ? severityMatch[1].trim() : 'RED',
    master_quote: quoteMatch ? quoteMatch[1] : '',
    frontmatter: fm, body,
  };
}

const feedbackFiles = fs.readdirSync(opt.feedbackDir)
  .filter((f) => f.endsWith('.md') && f !== 'INDEX.md' && f !== 'README.md')
  .map((f) => path.join(opt.feedbackDir, f));

const feedbacks = feedbackFiles.map(parseFeedbackFile).filter(Boolean);
console.error(`ℹ️  지적 파일 로드: ${feedbacks.length}건`);

// ── 벤더/tier 관련 지적 필터 ──────────────────────────────
const relevant = [];
for (const fb of feedbacks) {
  if (opt.since && fb.date && fb.date < opt.since) continue;
  const combined = fb.master_quote + '\n' + fb.body;
  const vendors = new Set();
  const tiers = new Set();
  let m;
  VENDOR_RE.lastIndex = 0;
  while ((m = VENDOR_RE.exec(combined)) !== null) vendors.add(m[0]);
  TIER_RE.lastIndex = 0;
  while ((m = TIER_RE.exec(combined)) !== null) tiers.add(m[0]);
  if (vendors.size > 0 && tiers.size > 0) {
    // 인용 스니펫 추출 (첫 벤더 언급 주변)
    const idx = combined.search(VENDOR_RE);
    const snippet = idx >= 0 ? combined.slice(Math.max(0, idx - 60), idx + 220).replace(/\s+/g, ' ') : '';
    relevant.push({
      ...fb,
      vendors: [...vendors],
      tiers: [...tiers],
      snippet,
    });
  }
}

console.error(`ℹ️  벤더+tier 관련 지적: ${relevant.length}건`);

// ── 캘리브레이션 파일 벤더 인덱스 ─────────────────────────
let calibrationVendors = new Set();
if (opt.calibration && fs.existsSync(opt.calibration)) {
  const calText = fs.readFileSync(opt.calibration, 'utf-8');
  for (const v of VENDOR_KEYWORDS) {
    if (calText.includes(v)) calibrationVendors.add(v);
  }
}

// star-classify.mjs 벤더 패턴 grep
let starClassifyVendorPatterns = [];
if (fs.existsSync(opt.starClassify)) {
  const scText = fs.readFileSync(opt.starClassify, 'utf-8');
  // if (/마플|쎈|.../ 같은 벤더 매칭 패턴 라인 감지 (heuristic)
  const patternRe = /['"`]([^'"`\n]{2,20})['"`]/g;
  const scLines = scText.split(/\r?\n/);
  scLines.forEach((line, i) => {
    for (const v of VENDOR_KEYWORDS) {
      if (line.includes(v)) {
        starClassifyVendorPatterns.push({ line: i + 1, vendor: v, snippet: line.trim().slice(0, 120) });
      }
    }
  });
}

// ── 리포트 생성 ───────────────────────────────────────────
const lines = [];
lines.push(`# Vendor Regression Suggest 리포트`);
lines.push('');
lines.push(`- **일자**: ${new Date().toISOString()}`);
lines.push(`- **feedback-dir**: \`${path.relative(ROOT, opt.feedbackDir)}\` (${feedbacks.length}건)`);
if (opt.calibration) lines.push(`- **calibration**: \`${path.relative(ROOT, opt.calibration)}\``);
lines.push(`- **star-classify**: \`${path.relative(ROOT, opt.starClassify)}\``);
if (opt.since) lines.push(`- **since**: ${opt.since}`);
lines.push('');
lines.push(`## 요약`);
lines.push('');
lines.push(`| 지표 | 값 |`);
lines.push(`|---|---:|`);
lines.push(`| 지적 총 건수 | ${feedbacks.length} |`);
lines.push(`| 벤더+tier 관련 후보 | ${relevant.length} |`);
lines.push(`| star-classify.mjs 벤더 패턴 라인 | ${starClassifyVendorPatterns.length} |`);
lines.push(`| calibration 등장 벤더 수 | ${calibrationVendors.size} |`);
lines.push('');

if (relevant.length > 0) {
  lines.push(`## 🎯 벤더 회귀 정정 후보`);
  lines.push('');
  lines.push(`> 자동 편집 아님 · 각 후보 검토 후 star-classify.mjs·vendor-label-calibration.md 수동 정정`);
  lines.push('');
  for (const r of relevant) {
    lines.push(`### ${r.filename}`);
    lines.push('');
    lines.push(`- **date**: ${r.date} · **severity**: ${r.severity}`);
    lines.push(`- **감지 벤더**: ${r.vendors.join(', ')}`);
    lines.push(`- **감지 tier 지시어**: ${r.tiers.join(', ')}`);
    if (r.master_quote) lines.push(`- **인용**: > ${r.master_quote}`);
    lines.push(`- **스니펫**: _${r.snippet}_`);
    // star-classify 관련 라인 매핑
    const affectedLines = starClassifyVendorPatterns.filter((p) => r.vendors.includes(p.vendor));
    if (affectedLines.length > 0) {
      lines.push(`- **star-classify.mjs 관련 라인** (검토 대상):`);
      for (const al of affectedLines.slice(0, 5)) {
        lines.push(`  - L${al.line}: \`${al.snippet}\``);
      }
    }
    lines.push('');
  }
} else {
  lines.push(`## ✓ 벤더 회귀 관련 지적 없음`);
  lines.push('');
  lines.push(`현재 등록된 지적 (${feedbacks.length}건) 중 벤더·별점·tier 회귀에 영향을 주는 항목 감지 안 됨.`);
  lines.push('');
}

if (starClassifyVendorPatterns.length > 0) {
  lines.push(`## star-classify.mjs 벤더 패턴 인벤토리 (참고)`);
  lines.push('');
  lines.push(`| 라인 | 벤더 | 코드 스니펫 |`);
  lines.push(`|---:|---|---|`);
  for (const p of starClassifyVendorPatterns.slice(0, 30)) {
    lines.push(`| ${p.line} | ${p.vendor} | \`${p.snippet.slice(0, 80).replace(/\|/g, '\\|')}\` |`);
  }
  if (starClassifyVendorPatterns.length > 30) {
    lines.push(`| ... | | (총 ${starClassifyVendorPatterns.length}건 · 30개만 표시) |`);
  }
  lines.push('');
}

lines.push(`## 정정 절차 (매뉴얼)`);
lines.push('');
lines.push(`1. 각 후보의 인용·스니펫 확인`);
lines.push(`2. \`scripts/star-classify.mjs\`의 \`classifyByVendorLabel\` 함수에서 관련 매칭 패턴 검토`);
lines.push(`3. \`bank/vendor-label-calibration-*.md\` 벤더 tier 매핑 재판정`);
lines.push(`4. \`node scripts/star-classify.mjs --dry-run --report\` 재실행으로 dist·conflict 확인`);
lines.push(`5. 마스터 승인 후 코드 커밋 + 회귀 로그 append`);

const reportText = lines.join('\n');
if (opt.report) {
  fs.mkdirSync(path.dirname(opt.report), { recursive: true });
  fs.writeFileSync(opt.report, reportText, 'utf-8');
  console.error(`📄 리포트 저장: ${opt.report}`);
} else {
  console.log(reportText);
}

console.error(`\n결과: 지적=${feedbacks.length} · 벤더관련=${relevant.length} · sc패턴=${starClassifyVendorPatterns.length}`);
process.exit(relevant.length > 0 ? 1 : 0);
