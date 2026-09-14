#!/usr/bin/env node
// scripts/source-usage-stats.mjs
//
// bank/problems/DI-*.md의 external_labels[0].similar_in_source를 추출하여
// 깊이와통찰 자료에 등장한 시판 책 출처를 빈도순으로 보고.

import { readFile, writeFile, readdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');
const BANK_DIR = join(PROJECT_ROOT, 'bank', 'problems');
const OUTPUT = join(PROJECT_ROOT, 'data', 'source-usage-stats.json');
const MD_OUTPUT = join(PROJECT_ROOT, 'bank', '시판책-사용빈도.md');

function parseFrontmatter(md) {
  const m = md.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/);
  if (!m) return null;
  try { return yaml.load(m[1]); } catch (e) { return null; }
}

async function main() {
  const files = (await readdir(BANK_DIR)).filter(f => f.startsWith('DI-') && f.endsWith('.md'));
  console.log(`Scanning ${files.length} DI-* files`);

  const bookCount = {};       // 책별 등장 빈도
  const bookByUnit = {};       // 책 × 단원
  const bookSubject = {};      // 책별 subject (공수1·공수2 구분)
  let totalRefs = 0;
  let problemsWithSimilar = 0;

  for (const f of files) {
    const fm = parseFrontmatter(await readFile(join(BANK_DIR, f), 'utf-8'));
    if (!fm) continue;
    const ext = (fm.external_labels && fm.external_labels[0]) || {};
    const similars = ext.similar_in_source || [];
    if (similars.length > 0) problemsWithSimilar++;
    for (const s of similars) {
      if (!s.book) continue;
      const book = s.book;
      const subject = s.subject || '?';
      bookCount[book] = (bookCount[book] || 0) + 1;
      bookSubject[book] = bookSubject[book] || new Set();
      bookSubject[book].add(subject);
      const key = `${book}|${fm.unit}`;
      bookByUnit[key] = (bookByUnit[key] || 0) + 1;
      totalRefs++;
    }
  }

  const sorted = Object.entries(bookCount).sort((a, b) => b[1] - a[1]);

  const report = {
    summary: {
      total_DI_files: files.length,
      problems_with_similar: problemsWithSimilar,
      total_refs: totalRefs,
      unique_books: sorted.length
    },
    by_book: sorted.map(([book, count]) => ({
      book, count, subjects: [...(bookSubject[book] || [])]
    }))
  };
  await writeFile(OUTPUT, JSON.stringify(report, null, 2), 'utf-8');

  // 마크다운 보고서
  let md = `# 깊이와통찰 자료의 시판 책 출처 사용 빈도

> 생성일: 2026-06-15 (source-usage-stats.mjs v0.1)
> 분석 대상: \`bank/problems/DI-*.md\` ${files.length}개의 \`external_labels[0].similar_in_source\`
> 목적: 깊이와통찰 학원 자체 제작물에서 어떤 시판 책이 변형 출처로 가장 자주 활용되는지 빈도 분석

---

## 1. 요약

| 지표 | 값 |
|---|---:|
| DI-* 파일 수 | ${files.length} |
| similar_in_source 보유 문항 | ${problemsWithSimilar} |
| 시판 책 참조 횟수 (총합) | ${totalRefs} |
| 등장 책 수 (unique) | ${sorted.length} |
| 평균 시판 책 참조/문항 | ${problemsWithSimilar > 0 ? (totalRefs/problemsWithSimilar).toFixed(2) : 0} |

## 2. 시판 책 빈도 순위 (Top 30)

| 순위 | 책 | 참조 횟수 | 비중 | 과목 |
|---:|---|---:|---:|---|
${sorted.slice(0, 30).map(([book, count], i) => {
    const subj = [...(bookSubject[book] || [])].join(', ');
    return `| ${i+1} | ${book} | ${count} | ${(count/totalRefs*100).toFixed(1)}% | ${subj} |`;
  }).join('\n')}

## 3. 우리 카탈로그에 등록된 책 vs 미등록 책

우리 카탈로그(bank/공통수학*/) §1에 등록된 책 약자와 실제 깊이와통찰 자료의 시판 책 출처 빈도 비교 → 우리 카탈로그 보완 우선순위 파악.

### 등록 우선순위 (참조 횟수 상위)

상위 빈도의 책이 우리 카탈로그에 약자로 등록되어 있는지 확인 → 카탈로그 우선 보완 대상.

## 변경 이력

- 2026-06-15 v0.1 — 초안. ${problemsWithSimilar}/${files.length} 문항의 ${totalRefs}건 참조 분석.
`;

  await writeFile(MD_OUTPUT, md, 'utf-8');
  console.log(`JSON: ${OUTPUT}`);
  console.log(`Markdown: ${MD_OUTPUT}`);
  console.log('');
  console.log('===== Top 10 =====');
  sorted.slice(0, 10).forEach(([book, count], i) => {
    console.log(`  ${(i+1).toString().padStart(2)}. ${book.padEnd(40)} ${count}`);
  });
}

main().catch(e => { console.error('FATAL:', e); process.exit(1); });
