#!/usr/bin/env node
// scripts/recommend-slots.mjs
//
// bank/problems/*.md → data/slot-recommendations.json + bank/슬롯-추천.md
//
// 우리 책 슬롯 추천 알고리즘:
// 1. 같은 (unit, type) 그룹화
// 2. frequency=3 (5+회 출제) 패턴 = 필수 슬롯
// 3. 각 패턴의 상대 ★ 분포 분석 → 우리 책 ★별 슬롯 추천
// 4. 정답률 평균이 평균에 가까운 문항 1개 = 대표 문항

import { readFile, writeFile, readdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');

const BANK_DIR = join(PROJECT_ROOT, 'bank', 'problems');
const JSON_OUTPUT = join(PROJECT_ROOT, 'data', 'slot-recommendations.json');
const MD_OUTPUT = join(PROJECT_ROOT, 'bank', '슬롯-추천.md');

function parseFrontmatter(md) {
  const m = md.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/);
  if (!m) return null;
  try {
    return yaml.load(m[1]);
  } catch (e) {
    return null;
  }
}

function median(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}

async function main() {
  const files = (await readdir(BANK_DIR)).filter(f => f.endsWith('.md'));
  console.log(`Scanning ${files.length} files in ${BANK_DIR}`);

  // 데이터 수집
  const groups = {}; // key = unit|type → { problems: [], rates: [], stars: [], cohorts: Set }

  for (const f of files) {
    const path = join(BANK_DIR, f);
    const md = await readFile(path, 'utf-8');
    const fm = parseFrontmatter(md);
    if (!fm || !fm.unit || !fm.type) continue;
    const key = `${fm.unit}|${fm.type}`;
    if (!groups[key]) {
      groups[key] = {
        unit: fm.unit, type: fm.type, type_in_source_examples: new Set(),
        problems: [], rates: [], stars: [], cohorts: new Set(),
        frequency: fm.frequency
      };
    }
    const ext = (fm.external_labels && fm.external_labels[0]) || {};
    groups[key].type_in_source_examples.add(fm.type_in_source);
    groups[key].problems.push({ id: fm.id, rate: ext.actual_correct_rate, star: ext.cohort_normalized_star });
    if (ext.actual_correct_rate != null) groups[key].rates.push(ext.actual_correct_rate);
    if (ext.cohort_normalized_star != null) groups[key].stars.push(ext.cohort_normalized_star);
    if (ext.cohort_unit) groups[key].cohorts.add(ext.cohort_unit);
  }

  // 각 그룹의 통계 계산
  const groupStats = Object.values(groups).map(g => {
    const meanRate = g.rates.length ? g.rates.reduce((a, b) => a + b, 0) / g.rates.length : null;
    const medRate = g.rates.length ? median(g.rates) : null;
    const starHist = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    g.stars.forEach(s => starHist[s]++);
    const dominant = Object.entries(starHist).sort((a, b) => b[1] - a[1])[0];
    return {
      unit: g.unit,
      type: g.type,
      type_examples: [...g.type_in_source_examples].slice(0, 3),
      total_count: g.problems.length,
      frequency: g.frequency,
      cohort_spread: g.cohorts.size,
      mean_correct_rate: meanRate,
      median_correct_rate: medRate,
      star_histogram: starHist,
      dominant_star: parseInt(dominant[0]),
      problems_by_star: {
        1: g.problems.filter(p => p.star === 1),
        2: g.problems.filter(p => p.star === 2),
        3: g.problems.filter(p => p.star === 3),
        4: g.problems.filter(p => p.star === 4),
        5: g.problems.filter(p => p.star === 5)
      }
    };
  });

  // 단원별 그룹화 + 정렬 (frequency·count 내림차순)
  const byUnit = {};
  for (const g of groupStats) {
    if (!byUnit[g.unit]) byUnit[g.unit] = [];
    byUnit[g.unit].push(g);
  }
  for (const unit of Object.keys(byUnit)) {
    byUnit[unit].sort((a, b) => (b.frequency || 0) - (a.frequency || 0) || b.total_count - a.total_count);
  }

  // ===== 추천 알고리즘 =====
  // 필수 슬롯 후보 = frequency=3 그룹
  // 빈출 슬롯 후보 = frequency=2 그룹
  // 단원별 ★ 분포 권장: ★1=10%, ★2=20%, ★3=30%, ★4=25%, ★5=15%
  const stdStarDist = { 1: 10, 2: 20, 3: 30, 4: 25, 5: 15 };

  const recommendations = {
    summary: {
      total_files: files.length,
      total_groups: groupStats.length,
      essential_groups: groupStats.filter(g => g.frequency === 3).length,
      frequent_groups: groupStats.filter(g => g.frequency === 2).length,
      rare_groups: groupStats.filter(g => g.frequency === 1).length
    },
    standard_star_distribution: stdStarDist,
    by_unit: byUnit
  };

  await writeFile(JSON_OUTPUT, JSON.stringify(recommendations, null, 2), 'utf-8');
  console.log(`JSON output: ${JSON_OUTPUT}`);

  // ===== Markdown 보고서 생성 =====
  let md = `# 우리 책 슬롯 추천 보고서 (자동 생성)

> **생성일**: 2026-06-14 (recommend-slots.mjs v0.1)
> **데이터**: \`bank/problems/*.md\` ${files.length}개 (깊이와통찰 14개 PDF 자동 추출 기반)
> **목적**: 우리 책 출제 슬롯 결정을 위한 패턴 우선순위 보고. frequency=3 (5+회 출제) = 필수 / frequency=2 (2~4회) = 빈출 / frequency=1 = 희귀.

---

## 1. 종합 요약

| 항목 | 값 |
|---|---:|
| 분석 문항 수 | ${files.length} |
| Unique (단원×유형) 그룹 | ${groupStats.length} |
| **필수 그룹 (frequency=3, 5+회)** | **${recommendations.summary.essential_groups}** |
| 빈출 그룹 (frequency=2, 2~4회) | ${recommendations.summary.frequent_groups} |
| 희귀 그룹 (frequency=1, 1회) | ${recommendations.summary.rare_groups} |

**권장 ★ 분포** (단원당): ★1 10% · ★2 20% · ★3 30% · ★4 25% · ★5 15%

---

## 2. 단원별 필수 출제 패턴 (frequency=3, 우선순위 순)

`;

  const unitOrder = ['CM1-PL', 'CM1-EQ', 'CM1-CB', 'CM1-MX', 'CM2-GM', 'CM2-ST', 'CM2-FN', 'CM2-RF'];
  for (const unit of unitOrder) {
    if (!byUnit[unit]) continue;
    const essential = byUnit[unit].filter(g => g.frequency === 3);
    if (essential.length === 0) continue;

    md += `### ${unit} — 필수 패턴 ${essential.length}개\n\n`;
    md += `| T-code | 유형 예시 | 출제 횟수 | 평균 정답률 | 우세 ★ | ★1 | ★2 | ★3 | ★4 | ★5 |\n`;
    md += `|---|---|---:|---:|---:|---:|---:|---:|---:|---:|\n`;

    for (const g of essential) {
      const ratePct = g.mean_correct_rate != null ? `${(g.mean_correct_rate * 100).toFixed(0)}%` : '—';
      const h = g.star_histogram;
      const typeName = g.type_examples[0] || '';
      const typeNameShort = typeName.length > 35 ? typeName.substring(0, 35) + '…' : typeName;
      md += `| ${g.type} | ${typeNameShort} | ${g.total_count} | ${ratePct} | ★${g.dominant_star} | ${h[1]} | ${h[2]} | ${h[3]} | ${h[4]} | ${h[5]} |\n`;
    }
    md += `\n`;
  }

  md += `---

## 3. 단원별 빈출 패턴 (frequency=2)

`;

  for (const unit of unitOrder) {
    if (!byUnit[unit]) continue;
    const frequent = byUnit[unit].filter(g => g.frequency === 2);
    if (frequent.length === 0) continue;

    md += `### ${unit} — 빈출 패턴 ${frequent.length}개\n\n`;
    md += `| T-code | 유형 예시 | 출제 횟수 | 평균 정답률 | 우세 ★ |\n`;
    md += `|---|---|---:|---:|---:|\n`;

    for (const g of frequent) {
      const ratePct = g.mean_correct_rate != null ? `${(g.mean_correct_rate * 100).toFixed(0)}%` : '—';
      const typeName = g.type_examples[0] || '';
      const typeNameShort = typeName.length > 35 ? typeName.substring(0, 35) + '…' : typeName;
      md += `| ${g.type} | ${typeNameShort} | ${g.total_count} | ${ratePct} | ★${g.dominant_star} |\n`;
    }
    md += `\n`;
  }

  md += `---

## 4. 우리 책 슬롯 결정 가이드

### 책 단원당 권장 총 문항 수
- **공수1 단원당** (PL/EQ/CB/MX): 약 50~80 문항 (단원 분량에 따라)
- **공수2 단원당** (GM/ST/FN/RF): 약 50~80 문항

### 슬롯 분배 가이드 (한 단원 60문항 예시)
| ★ | 권장 비율 | 60문항 시 | 출처 |
|---|---|---:|---|
| ★1 | 10% | 6 | 도입부 — 단순 적용 |
| ★2 | 20% | 12 | 기본 변형 |
| ★3 | 30% | **18** | 중급 응용 — **frequency=3 우선** |
| ★4 | 25% | 15 | 고난도 — frequency=3 + 고난도 풀 |
| ★5 | 15% | 9 | 최고난도 — 블랙라벨·일등급수학·절대등급 활용 |

### 우리 책 슬롯 채우기 우선순위
1. **frequency=3 + 우세 ★3·★4 그룹** = 슬롯 1순위. 22년간 5회+ 출제된 필수 패턴
2. **frequency=2 + 우세 ★4·★5 그룹** = 슬롯 2순위. 변별력 있는 빈출 패턴
3. **블랙라벨/일등급수학/절대등급 STEP 3** = ★5 앵커 후보
4. **frequency=1** = 희귀 패턴, 본문 등록 후순위

### 깊이와통찰 자료 활용법
- 각 필수 그룹의 **DI-*.md** 파일에서 정답률·z-score·★ 확인
- 우리 책 변형 출제 시 유사 출처(라이트쎈·고쟁이·EBS 등) PDF에서 참고 가능
- 자세한 매핑은 \`bank/깊이와통찰-수능모의-매핑.md\` v0.5 참조

---

## 변경 이력

- 2026-06-14 v0.1 — 초안. ${recommendations.summary.essential_groups}개 필수 패턴 + ${recommendations.summary.frequent_groups}개 빈출 패턴 추출. 8개 단원에 걸쳐 우선순위 정렬.
`;

  await writeFile(MD_OUTPUT, md, 'utf-8');
  console.log(`Markdown report: ${MD_OUTPUT}`);

  console.log('');
  console.log('===== Summary =====');
  console.log(`Total groups: ${groupStats.length}`);
  console.log(`Essential (freq=3): ${recommendations.summary.essential_groups}`);
  console.log(`Frequent (freq=2):  ${recommendations.summary.frequent_groups}`);
  console.log(`Rare (freq=1):      ${recommendations.summary.rare_groups}`);
}

main().catch(e => {
  console.error('FATAL:', e);
  process.exit(1);
});
