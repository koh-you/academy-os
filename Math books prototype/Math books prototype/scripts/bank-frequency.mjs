#!/usr/bin/env node
// scripts/bank-frequency.mjs
//
// bank/problems/*.md 전체 스캔 → 같은 (unit, type) 그룹화 → frequency 산정 → YAML 갱신
//
// schema §5.4 빈도 규칙:
//   1회       → frequency 1 (희귀)
//   2~4회     → frequency 2 (빈출)
//   5회 이상  → frequency 3 (필수)

import { readFile, writeFile, readdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');

const BANK_DIR = join(PROJECT_ROOT, 'bank', 'problems');
const REPORT = join(PROJECT_ROOT, 'data', 'bank-frequency-report.json');

function frequencyClass(count) {
  if (count >= 5) return 3;
  if (count >= 2) return 2;
  return 1;
}

// markdown YAML frontmatter 파싱
function parseFrontmatter(md) {
  const m = md.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/);
  if (!m) return null;
  try {
    return { yaml: yaml.load(m[1]), body: m[2] };
  } catch (e) {
    return null;
  }
}

function serializeFrontmatter(yamlObj, body) {
  const yamlStr = yaml.dump(yamlObj, { lineWidth: 200, noRefs: true });
  return `---\n${yamlStr}---\n${body}`;
}

async function main() {
  const files = (await readdir(BANK_DIR)).filter(f => f.endsWith('.md'));
  console.log(`Scanning ${files.length} files in ${BANK_DIR}`);

  // Pass 1: 그룹화
  const groupCounts = {};   // key = `${unit}|${type}`
  const fileEntries = [];

  for (const f of files) {
    const path = join(BANK_DIR, f);
    const md = await readFile(path, 'utf-8');
    const parsed = parseFrontmatter(md);
    if (!parsed) continue;
    const { unit, type } = parsed.yaml;
    if (!unit || !type) continue;
    const key = `${unit}|${type}`;
    groupCounts[key] = (groupCounts[key] || 0) + 1;
    fileEntries.push({ f, path, parsed, key });
  }

  // 통계
  const groupsByFreq = { 1: 0, 2: 0, 3: 0 };
  for (const c of Object.values(groupCounts)) {
    groupsByFreq[frequencyClass(c)]++;
  }

  console.log('');
  console.log('===== Frequency Distribution =====');
  console.log(`Total groups (unit×type): ${Object.keys(groupCounts).length}`);
  console.log(`  Frequency 1 (rare, 1회):    ${groupsByFreq[1]} groups`);
  console.log(`  Frequency 2 (frequent, 2~4): ${groupsByFreq[2]} groups`);
  console.log(`  Frequency 3 (essential, 5+): ${groupsByFreq[3]} groups`);
  console.log('');

  // Top 20 most frequent groups
  const top = Object.entries(groupCounts).sort((a, b) => b[1] - a[1]).slice(0, 20);
  console.log('Top 20 most frequent groups:');
  for (const [k, c] of top) {
    console.log(`  [${c}x] ${k}`);
  }
  console.log('');

  // Pass 2: 각 파일의 frequency 필드 갱신
  let updated = 0;
  for (const { path, parsed, key } of fileEntries) {
    const count = groupCounts[key];
    const fc = frequencyClass(count);
    if (parsed.yaml.frequency !== fc) {
      parsed.yaml.frequency = fc;
      const newMd = serializeFrontmatter(parsed.yaml, parsed.body);
      await writeFile(path, newMd, 'utf-8');
      updated++;
    }
  }

  console.log(`Updated frequency field in ${updated} files (of ${fileEntries.length})`);

  // 리포트 저장
  const reportObj = {
    summary: {
      total_files_scanned: files.length,
      files_with_valid_frontmatter: fileEntries.length,
      total_groups: Object.keys(groupCounts).length,
      frequency_distribution: groupsByFreq,
      files_updated: updated
    },
    top_50_groups: Object.entries(groupCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 50)
      .map(([key, count]) => {
        const [unit, type] = key.split('|');
        return { unit, type, count, frequency: frequencyClass(count) };
      }),
    all_groups: Object.entries(groupCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([key, count]) => {
        const [unit, type] = key.split('|');
        return { unit, type, count, frequency: frequencyClass(count) };
      })
  };
  await writeFile(REPORT, JSON.stringify(reportObj, null, 2), 'utf-8');
  console.log(`Report: ${REPORT}`);
}

main().catch(e => {
  console.error('FATAL:', e);
  process.exit(1);
});
