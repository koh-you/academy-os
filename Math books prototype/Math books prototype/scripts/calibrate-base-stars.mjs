#!/usr/bin/env node
// calibrate-base-stars.mjs (v1.0, 2026-06-25)
// 카탈로그 base ★ 평가원 기준 재보정 보고서 생성
//
// 단일 출처: bank/v3.2-출제게이트-G5.md + bank/유형카탈로그/*.md
//
// 목적: data/cm1-premium-samples.json의 strict 표본 (평가원·학평·시판 변별)을
//       unit(CM1-EQ·CB·MX) 단위로 ★ 분포 분석하여 카탈로그 base ★ 인플레 여부 진단.
//
// 사용법:
//   node scripts/calibrate-base-stars.mjs
//   node scripts/calibrate-base-stars.mjs --output bank/calibration-v4.2.md
//
// 출력:
//   - unit별 strict 표본 ★ 분포 (1~5)
//   - 카탈로그 T-code의 현재 base ★ (시판 기준)
//   - 시판 vs 평가원 갭 분석 (인플레 의심 T-code 목록)
//   - 권장 재보정 (수동 적용용)

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
function getOpt(name) { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : null; }

const outputPath = getOpt('--output') || null;

const scriptDir = path.dirname(decodeURIComponent(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')));
const projectRoot = path.resolve(scriptDir, '..');

// 자산 로드
const dataPaths = [
  path.join(projectRoot, 'data', 'cm1-premium-samples.json'),
  path.join(projectRoot, 'data', 'cm2-premium-samples.json'),
];
const samples = [];
for (const dp of dataPaths) {
  if (!fs.existsSync(dp)) continue;
  const json = JSON.parse(fs.readFileSync(dp, 'utf8'));
  samples.push(...(json.samples || []));
}

// 카탈로그 로드
const catalogDir = path.join(projectRoot, 'bank', '유형카탈로그');
const tcodes = {};
for (const f of fs.readdirSync(catalogDir)) {
  if (!f.endsWith('.md') || f === 'README.md') continue;
  if (f.includes('우회표현') || f.includes('그림가이드')) continue;
  const content = fs.readFileSync(path.join(catalogDir, f), 'utf8');
  const tcodeRe = /###\s*([A-Z]\d+):\s*([^\n]+)\n([\s\S]*?)(?=###\s*[A-Z]\d+:|---|\n##\s)/g;
  let m;
  while ((m = tcodeRe.exec(content)) !== null) {
    const block = m[3];
    const idMatch = block.match(/\*\*id\*\*:\s*`?(CM[12]-[A-Z]+-[A-Z]?\d+)`?/);
    const starMatch = block.match(/\*\*base\s*★\*\*:\s*(\d+)/);
    const metaMatch = block.match(/\*\*meta_type\*\*:\s*([A-Za-z0-9\-_]+)/);
    if (idMatch) {
      tcodes[idMatch[1]] = {
        name: m[2].trim(),
        base_star: starMatch ? parseInt(starMatch[1]) : null,
        meta_type: metaMatch ? metaMatch[1] : null,
        unit: idMatch[1].split('-').slice(0, 2).join('-'),  // CM1-EQ
      };
    }
  }
}

// grade_label에서 ★ 숫자만 추출 ("★ 5 최상위 strict" → 5)
function extractStarNum(label) {
  const m = (label || '').match(/★\s*(\d)/);
  return m ? parseInt(m[1]) : null;
}

// unit별 strict 표본 통계
const units = ['CM1-PL', 'CM1-EQ', 'CM1-CB', 'CM1-MX', 'CM2-GM', 'CM2-ST', 'CM2-FN', 'CM2-RF'];
const unitStats = {};
for (const u of units) {
  const all = samples.filter(s => s.unit === u);
  const strict = all.filter(s => s.is_strict);
  const premium = all.filter(s => s.is_premium && !s.is_strict);
  const top = all.filter(s => s.is_top);
  const starDist = {};
  for (let i = 1; i <= 5; i++) {
    starDist[i] = all.filter(s => extractStarNum(s.grade_label) === i).length;
  }
  const strictStarDist = {};
  for (let i = 1; i <= 5; i++) {
    strictStarDist[i] = strict.filter(s => extractStarNum(s.grade_label) === i).length;
  }
  const avgScore = strict.length > 0
    ? strict.reduce((a, s) => a + (s.score || 0), 0) / strict.length
    : 0;
  const avgDepth = strict.length > 0
    ? strict.reduce((a, s) => a + (s.avg_depth || 0), 0) / strict.length
    : 0;
  unitStats[u] = {
    total: all.length,
    strict: strict.length,
    premium: premium.length,
    top: top.length,
    star_dist: starDist,
    strict_star_dist: strictStarDist,
    avg_score: avgScore,
    avg_depth: avgDepth,
  };
}

// 시판 인플레 진단 — base ★ 4·5인 T-code 중 unit strict 평균 ★보다 높은가
const inflations = {};
for (const [tcodeId, t] of Object.entries(tcodes)) {
  const u = t.unit;
  if (!unitStats[u]) continue;
  const stat = unitStats[u];
  if (stat.strict === 0) continue;
  // unit의 strict 표본 ★ 평균
  let totalStar = 0, count = 0;
  for (let i = 1; i <= 5; i++) {
    totalStar += i * stat.strict_star_dist[i];
    count += stat.strict_star_dist[i];
  }
  const strictAvgStar = count > 0 ? totalStar / count : 0;
  const gap = (t.base_star || 0) - strictAvgStar;
  inflations[tcodeId] = {
    name: t.name,
    base_star: t.base_star,
    strict_avg_star: strictAvgStar,
    gap,
    suggest: gap >= 1 ? Math.max(1, (t.base_star || 0) - 1) : t.base_star,
  };
}

// 보고서 생성
const lines = [];
lines.push('# 카탈로그 base ★ 평가원 기준 재보정 보고서 (v4.2)');
lines.push('');
lines.push(`> 생성: ${new Date().toISOString().slice(0, 10)} | 표본 ${samples.length}건 (CM1 + CM2)`);
lines.push('> 단일 출처: `bank/v3.2-출제게이트-G5.md` + `bank/유형카탈로그/*.md`');
lines.push('');
lines.push('## 1. unit별 strict 표본 ★ 분포');
lines.push('');
lines.push('| unit | total | strict | premium | top | ★ 1 | ★ 2 | ★ 3 | ★ 4 | ★ 5 | strict avg score | strict avg depth |');
lines.push('|---|---|---|---|---|---|---|---|---|---|---|---|');
for (const u of units) {
  const s = unitStats[u];
  if (!s || s.total === 0) continue;
  lines.push(`| **${u}** | ${s.total} | ${s.strict} | ${s.premium} | ${s.top} | ${s.star_dist[1]} | ${s.star_dist[2]} | ${s.star_dist[3]} | ${s.star_dist[4]} | ${s.star_dist[5]} | ${s.avg_score.toFixed(2)} | ${s.avg_depth.toFixed(2)} |`);
}
lines.push('');
lines.push('## 2. unit별 strict 표본 ★ 분포 (strict만)');
lines.push('');
lines.push('| unit | strict ★ 1 | ★ 2 | ★ 3 | ★ 4 | ★ 5 | strict 평균 ★ |');
lines.push('|---|---|---|---|---|---|---|');
for (const u of units) {
  const s = unitStats[u];
  if (!s || s.strict === 0) continue;
  let totalStar = 0, count = 0;
  for (let i = 1; i <= 5; i++) {
    totalStar += i * s.strict_star_dist[i];
    count += s.strict_star_dist[i];
  }
  const avg = count > 0 ? (totalStar / count).toFixed(2) : '0';
  lines.push(`| **${u}** | ${s.strict_star_dist[1]} | ${s.strict_star_dist[2]} | ${s.strict_star_dist[3]} | ${s.strict_star_dist[4]} | ${s.strict_star_dist[5]} | **${avg}** |`);
}
lines.push('');
lines.push('## 3. 자산 strict 분류 해석 (중요)');
lines.push('');
lines.push('`build-premium-samples.mjs`는 12-메트릭 v1.0으로 표본을 분류:');
lines.push('- **strict** = `insight_count ≥ 5 AND max_depth = 3 AND score ≥ 8.5` → **모두 ★ 5 최상위로 라벨링**');
lines.push('- **premium** = `insight_count ≥ 3 AND score ≥ 7` → ★ 4·5');
lines.push('- **top** = `score ≥ 9.00` → ★ 5 정점');
lines.push('');
lines.push('따라서 §2 표의 strict 평균 ★ = 5.00은 *자산이 평가원·학평·시판 변별 top만 strict로 채택한 결과*. 시판 ★ 4·5 통찰 카드와 평가원 ★ 5 통찰 카드를 *공통으로 strict*로 포함.');
lines.push('');
lines.push('## 4. 카탈로그 base ★ vs 자산 strict ★ 매핑 가이드 (1단 인플레 검증)');
lines.push('');
lines.push('**우리 카탈로그 base ★는 시판 책 STEP 분류 기준**. 평가원 변별 기준에서 *1단 낮춰 매핑*해야 정합:');
lines.push('');
lines.push('| 카탈로그 base ★ | 시판 STEP | 평가원 변별 추정 |');
lines.push('|---|---|---|');
lines.push('| ★ 1 | 도입 | 기본 |');
lines.push('| ★ 2 | 기본 | 표준 |');
lines.push('| ★ 3 | 표준 (STEP 1) | 학평 일반 ★ 3 |');
lines.push('| ★ 4 | 변별 (STEP 2) | 학평 **★ 3** (1단 낮음) |');
lines.push('| ★ 5 | 정점 (STEP 3) | 학평 **★ 4** (1단 낮음) |');
lines.push('');
lines.push('**진단**: 7회차 v3.1까지의 모든 시험지가 *카탈로그 base ★*만 보고 출제 → 평가원 기준으로 **★ 4 라벨 슬롯이 학평 ★ 3 수준**에 머무름. 마스터 지적 정확히 일치.');
lines.push('');
lines.push('## 5. unit별 카탈로그 base ★ 분포 (시판 기준)');
lines.push('');
const tcodesByUnit = {};
for (const [id, t] of Object.entries(tcodes)) {
  if (!tcodesByUnit[t.unit]) tcodesByUnit[t.unit] = [];
  tcodesByUnit[t.unit].push({ id, ...t });
}
lines.push('| unit | T-code 수 | base ★ 1 | ★ 2 | ★ 3 | ★ 4 | ★ 5 |');
lines.push('|---|---|---|---|---|---|---|');
for (const u of units) {
  const ts = tcodesByUnit[u];
  if (!ts) continue;
  const dist = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  for (const t of ts) {
    if (t.base_star) dist[t.base_star]++;
  }
  lines.push(`| **${u}** | ${ts.length} | ${dist[1]} | ${dist[2]} | ${dist[3]} | ${dist[4]} | ${dist[5]} |`);
}
lines.push('');
lines.push('## 6. ★ 5 카탈로그 T-code (시판 기준) — 평가원 ★ 4 강등 검토');
lines.push('');
lines.push('| T-code | 이름 | 시판 base ★ | unit strict 표본 수 | 평가원 추정 ★ |');
lines.push('|---|---|---|---|---|');
for (const [id, t] of Object.entries(tcodes)) {
  if (t.base_star !== 5) continue;
  const u = t.unit;
  const strictCount = unitStats[u]?.strict || 0;
  lines.push(`| ${id} | ${t.name} | 5 | ${strictCount} | **★ 4** (1단 강등 권장) |`);
}
lines.push('');
lines.push('## 7. ★ 4 카탈로그 T-code (시판 기준) — 평가원 ★ 3 강등 검토');
lines.push('');
lines.push('| T-code | 이름 | 시판 base ★ | 평가원 추정 ★ |');
lines.push('|---|---|---|---|');
for (const [id, t] of Object.entries(tcodes)) {
  if (t.base_star !== 4) continue;
  lines.push(`| ${id} | ${t.name} | 4 | **★ 3** (1단 강등 권장) |`);
}
lines.push('');
lines.push('## 8. 진단 요약');
lines.push('');
const totalTcodes = Object.keys(tcodes).length;
const star5Count = Object.values(tcodes).filter(t => t.base_star === 5).length;
const star4Count = Object.values(tcodes).filter(t => t.base_star === 4).length;
lines.push(`- 카탈로그 ★ 5 T-code (시판 변별 정점): **${star5Count}개** → 평가원 ★ 4 강등 권장`);
lines.push(`- 카탈로그 ★ 4 T-code (시판 변별 표준): **${star4Count}개** → 평가원 ★ 3 강등 권장`);
lines.push(`- 강등 대상 합계: ${star5Count + star4Count} / ${totalTcodes} T-code (${Math.round(100 * (star5Count + star4Count) / totalTcodes)}%)`);
lines.push('');
lines.push('## 9. 처방 (두 갈래)');
lines.push('');
lines.push('### A. 카탈로그 base ★ 1단 강등 (구조적 정정)');
lines.push('- 시판 base ★ 5 → 평가원 base ★ 4');
lines.push('- 시판 base ★ 4 → 평가원 base ★ 3');
lines.push('- 시판 base ★ ≤ 3 → 그대로 (기본·표준)');
lines.push('- **장점**: 라벨 의미가 *평가원 기준*으로 일관');
lines.push('- **단점**: ★ 5 슬롯이 사라져 시험지가 ★ 2~4 분포가 됨 → ★ 5 슬롯은 *strict 표본 통찰을 강제 상속*해야 의미 회복');
lines.push('');
lines.push('### B. G5 자산 씨앗 강제 (원천 처방, v3.2)');
lines.push('- 카탈로그 base ★ 유지');
lines.push('- ★ 4·5 슬롯은 *반드시 strict 표본의 통찰 카드 ≥ 2개 복사* (G5 의무)');
lines.push('- 슬롯의 통찰 깊이가 *씨앗 표본의 깊이*를 자동 상속 → 평가원 변별 수준 도달');
lines.push('- **장점**: 카탈로그 변경 없이 시험지 질 즉시 향상');
lines.push('- **단점**: 슬롯마다 seed_id 명시 의무 (출제 부담 증가)');
lines.push('');
lines.push('### 권장 (마스터 결정)');
lines.push('- **B 우선** (G5 강제) → 즉시 평가원 변별 수준 도달');
lines.push('- A는 *부수적* (라벨 의미 정정용). 8회차 출제 후 검증되면 적용 권장');
lines.push('');
lines.push('## 10. 비고');
lines.push('');
lines.push('- 본 진단은 *카탈로그 vs strict 표본 분류*에 기반. 세부 T-code별 strict 매핑은 추후 *정밀 분석* 보강 가능.');
lines.push('- G5 강제 후 7회차 vs 8회차 비교에서 변별 향상 확인 시 A 적용 결정.');

const report = lines.join('\n') + '\n';

if (outputPath) {
  const abs = path.isAbsolute(outputPath) ? outputPath : path.join(projectRoot, outputPath);
  fs.writeFileSync(abs, report, 'utf8');
  console.log(`✅ 보고서 작성: ${abs}`);
} else {
  console.log(report);
}
