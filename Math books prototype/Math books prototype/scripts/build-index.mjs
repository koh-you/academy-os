#!/usr/bin/env node
// scripts/build-index.mjs
//
// bank/problems/*.md + bank/anchors/*.md 스캔 → bank/INDEX.md 자동 갱신
// 단원별 등록·앵커·시판 책 사용 빈도 통계 통합

import { readFile, readdir, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');
const BANK_DIR = join(PROJECT_ROOT, 'bank', 'problems');
const ANCHORS_DIR = join(PROJECT_ROOT, 'bank', 'anchors');
const INDEX_PATH = join(PROJECT_ROOT, 'bank', 'INDEX.md');

const UNIT_NAMES = {
  'CM1-PL': '다항식', 'CM1-EQ': '방정식과 부등식',
  'CM1-CB': '경우의 수', 'CM1-MX': '행렬과 그 연산',
  'CM2-GM': '도형의 방정식', 'CM2-ST': '집합과 명제',
  'CM2-FN': '함수', 'CM2-RF': '유리·무리함수'
};

function parseFrontmatter(md) {
  const m = md.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/);
  if (!m) return null;
  try { return yaml.load(m[1]); } catch (e) { return null; }
}

async function main() {
  const files = (await readdir(BANK_DIR)).filter(f => f.endsWith('.md'));
  console.log(`Scanning ${files.length} problem files`);

  // 단원별 분류 (v3.1: DI·OUT·MS·SRC·EX 5종 prefix)
  const byUnit = {};
  let diCount = 0, outCount = 0, msCount = 0, srcCount = 0, exCount = 0, otherCount = 0;
  for (const f of files) {
    const fm = parseFrontmatter(await readFile(join(BANK_DIR, f), 'utf-8'));
    if (!fm || !fm.unit) continue;
    if (!byUnit[fm.unit]) byUnit[fm.unit] = { di: 0, out: 0, ms: 0, src: 0, ex: 0, other: 0, byStar: {1:0,2:0,3:0,4:0,5:0} };
    if (f.startsWith('DI-')) { byUnit[fm.unit].di++; diCount++; }
    else if (f.startsWith('OUT-')) { byUnit[fm.unit].out++; outCount++; }
    else if (f.startsWith('MS-')) { byUnit[fm.unit].ms++; msCount++; }
    else if (f.startsWith('SRC-')) { byUnit[fm.unit].src++; srcCount++; }
    else if (f.startsWith('EX-')) { byUnit[fm.unit].ex++; exCount++; }
    else { byUnit[fm.unit].other++; otherCount++; }
    const ext = (fm.external_labels && fm.external_labels[0]) || {};
    const star = ext.cohort_normalized_star || fm.dot_star;
    if (star) byUnit[fm.unit].byStar[star]++;
  }

  // 앵커 보유 (build-anchors 결과 활용 — anchors/{unit}.md에서 ★별 카운트 추출)
  const anchorsByUnit = {};
  for (const unit of Object.keys(UNIT_NAMES)) {
    const path = join(ANCHORS_DIR, `${unit}.md`);
    let md;
    try { md = await readFile(path, 'utf-8'); } catch (e) { anchorsByUnit[unit] = {1:0,2:0,3:0,4:0,5:0}; continue; }
    const counts = {1:0,2:0,3:0,4:0,5:0};
    for (const s of [1,2,3,4,5]) {
      const m = md.match(new RegExp(`## ★${s} 앵커 \\((\\d+)문\\)`));
      if (m) counts[s] = parseInt(m[1]);
    }
    anchorsByUnit[unit] = counts;
  }

  // INDEX.md 생성
  const lines = [];
  lines.push('# 통합 문제은행 마스터 인덱스');
  lines.push('');
  lines.push('> 본 인덱스는 `bank/problems/*.md`의 모든 등록 문제를 한눈에 검색하기 위한 **자동 갱신** 테이블이다. 등록 절차·점수 체계·대상층 정의는 [`schema.md`](schema.md) 참조.');
  lines.push('');
  lines.push(`> **자동 갱신** (v2.5 — \`scripts/build-index.mjs\`): 마지막 갱신 ${new Date().toISOString().slice(0, 10)}`);
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## 코드 체계 요약 (v3.1, 5종 prefix)');
  lines.push('');
  lines.push('- 문제: `{과목}-{단원}-{일련번호}` (예: `CM2-FN-001`)');
  lines.push('- **DI-***: 깊이와통찰 학원 표본 (status: meta_only) — 1:1 문항');
  lines.push('- **OUT-***: 우리 책 출제 (status: approved) — 1:1 문항 + 본문 등록');
  lines.push('- **MS-***: 마플시너지 유형 카탈로그 (status: type_meta_only) — n:1 유형');
  lines.push('- **SRC-***: 시판 책 정점 표본 (status: meta_only) — 1:1 문항');
  lines.push('- **EX-***: 학평·평가원·EBS·수능 본기출 (status: meta_only) — 1:1 문항');
  lines.push('- 앵커: `bank/anchors/{과목}-{단원}.md` (단원당 ★ 1~5 × 5문 = 25문)');
  lines.push('- 과목: `CM1`(공통수학1) · `CM2`(공통수학2)');
  lines.push('');
  lines.push('### 단원 약자');
  lines.push('');
  lines.push('| 과목 | 단원 | 약자 | 앵커 파일 |');
  lines.push('|---|---|---|---|');
  for (const [code, name] of Object.entries(UNIT_NAMES)) {
    const [subject, unit] = code.split('-');
    const subjectName = subject === 'CM1' ? '공통수학1' : '공통수학2';
    lines.push(`| ${subjectName} | ${name} | ${unit} | \`anchors/${code}.md\` |`);
  }
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push(`## 등록 문항 통계 (총 ${files.length})`);
  lines.push('');
  lines.push(`- DI-* (깊이와통찰, meta_only): ${diCount}`);
  lines.push(`- OUT-* (우리 책, approved): ${outCount}`);
  lines.push(`- MS-* (마플시너지 유형, type_meta_only): ${msCount}`);
  lines.push(`- SRC-* (시판 책, meta_only): ${srcCount}`);
  lines.push(`- EX-* (학평·평가원·EBS, meta_only): ${exCount}`);
  if (otherCount > 0) lines.push(`- 기타 (legacy): ${otherCount}`);
  lines.push('');
  lines.push('### 단원별 분포');
  lines.push('');
  lines.push('| 단원 | DI | OUT | MS | SRC | EX | 합계 | ★ 1 | ★ 2 | ★ 3 | ★ 4 | ★ 5 |');
  lines.push('|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|');
  for (const code of Object.keys(UNIT_NAMES)) {
    const v = byUnit[code] || { di: 0, out: 0, ms: 0, src: 0, ex: 0, other: 0, byStar: {1:0,2:0,3:0,4:0,5:0} };
    const total = v.di + v.out + v.ms + v.src + v.ex + v.other;
    const s = v.byStar;
    lines.push(`| ${code} | ${v.di} | ${v.out} | ${v.ms} | ${v.src} | ${v.ex} | **${total}** | ${s[1]} | ${s[2]} | ${s[3]} | ${s[4]} | ${s[5]} |`);
  }
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push(`## 앵커 보유 현황 (v2.5 build-anchors.mjs 자동 생성)`);
  lines.push('');
  lines.push('| 단원 | ★ 1 | ★ 2 | ★ 3 | ★ 4 | ★ 5 | 합계 |');
  lines.push('|---|---:|---:|---:|---:|---:|---:|');
  let totalAnchors = 0;
  for (const code of Object.keys(UNIT_NAMES)) {
    const a = anchorsByUnit[code] || {1:0,2:0,3:0,4:0,5:0};
    const sum = a[1]+a[2]+a[3]+a[4]+a[5];
    totalAnchors += sum;
    const flag = sum === 25 ? ' ✅' : (sum >= 20 ? '' : ' ⚠');
    lines.push(`| ${code} | ${a[1]} | ${a[2]} | ${a[3]} | ${a[4]} | ${a[5]} | **${sum}/25**${flag} |`);
  }
  lines.push(`| **합계** | | | | | | **${totalAnchors}/200 (${(totalAnchors/200*100).toFixed(0)}%)** |`);
  lines.push('');
  lines.push('**목표**: 단원당 ★ 1~5 × 5문 = 25문. 상위권만 다룰 단원은 ★ 3~5만 우선 채워도 됨.');
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## 자동화 도구 (v2.5 시점)');
  lines.push('');
  lines.push('| 도구 | 용도 |');
  lines.push('|---|---|');
  lines.push('| `scripts/build-index.mjs` | 본 INDEX.md 자동 갱신 |');
  lines.push('| `scripts/build-anchors.mjs` | bank/anchors/* 자동 생성 |');
  lines.push('| `scripts/anchor-compare.mjs` | 신규 문제 → 앵커 비교 (scores·★ fallback) |');
  lines.push('| `scripts/bank-query.mjs` | 다중 조건 검색 + CSV export |');
  lines.push('| `scripts/recommend-slots-by-book.mjs` | book.yaml → 맞춤 슬롯 추천 |');
  lines.push('| `scripts/calibration-report.mjs` | calibration v0.3 (v2.0 정합) |');
  lines.push('| `scripts/source-usage-stats.mjs` | 시판 책 사용 빈도 통계 |');
  lines.push('| `scripts/extract-tex-to-bank.mjs` | output/*.tex → OUT-*.md 일괄 |');
  lines.push('| `scripts/extract-deepinsight.mjs` | 깊이와통찰 PDF → DI-*.md |');
  lines.push('| `scripts/normalize-deepinsight-cohort.mjs` | cohort z-score 정규화 |');
  lines.push('| `scripts/map-deepinsight-types.mjs` | T-code 매핑 |');
  lines.push('| `scripts/register-deepinsight-bank.mjs` | DI-*.md 일괄 등록 |');
  lines.push('| `scripts/bank-frequency.mjs` | frequency 필드 자동 갱신 |');
  lines.push('');
  lines.push('자세한 사용법은 `CLAUDE.md`의 「자동화 파이프라인」 절 참조.');
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## 관련 문서');
  lines.push('');
  lines.push('- [`schema.md`](schema.md) — 7축 루브릭(v2.0)·임계값·대상층·앵커 규약 정의서');
  lines.push('- [`anchors/`](anchors/) — 단원별 표준 앵커 풀 (자동 생성)');
  lines.push('- [`problems/`](problems/) — 등록된 문제 (각 1파일)');
  lines.push('- [`깊이와통찰-수능모의-매핑.md`](깊이와통찰-수능모의-매핑.md) — 깊이와통찰 매핑 인덱스');
  lines.push('- [`calibration-log.md`](calibration-log.md) — calibration 보고서 v0.3');
  lines.push('- [`슬롯-추천.md`](슬롯-추천.md) — 단원별 필수 패턴 추천');
  lines.push('- [`완성본-대상층별-비교.md`](완성본-대상층별-비교.md) — 마스터 책 대상층별 비교');
  lines.push('- [`시판책-사용빈도.md`](시판책-사용빈도.md) — 시판 책 출처 빈도');
  lines.push('- `output/book-yaml-guide.md` — book.yaml 표준 양식');

  await writeFile(INDEX_PATH, lines.join('\n') + '\n', 'utf-8');
  console.log(`INDEX.md updated: ${files.length} files / ${totalAnchors} anchors`);
}

main().catch(e => { console.error('FATAL:', e); process.exit(1); });
