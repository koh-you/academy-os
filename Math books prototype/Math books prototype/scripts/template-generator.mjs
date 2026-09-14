#!/usr/bin/env node
// scripts/template-generator.mjs
//
// 신규 책 작성을 위한 book.yaml + 빈 .tex 자동 생성

import { writeFile, mkdir, access } from 'node:fs/promises';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..');

const UNIT_NAMES = {
  'PL': '다항식', 'EQ': '방정식과 부등식',
  'CB': '경우의 수', 'MX': '행렬',
  'GM': '도형의 방정식', 'ST': '집합과 명제',
  'FN': '함수', 'RF': '유리·무리함수'
};

const DEFAULT_DISTRIBUTION = {
  '상위권': { stars: [3, 4, 5], dist: { 3: 30, 4: 40, 5: 30 } },
  '중상위권': { stars: [2, 3, 4, 5], dist: { 2: 15, 3: 35, 4: 35, 5: 15 } },
  '중위권': { stars: [2, 3, 4], dist: { 2: 25, 3: 50, 4: 25 } },
  '중하위권': { stars: [1, 2, 3], dist: { 1: 30, 2: 50, 3: 20 } },
  '하위권': { stars: [1, 2, 3], dist: { 1: 50, 2: 40, 3: 10 } }
};

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { total: 32, output: 'output/' };
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--name') opts.name = args[++i];
    else if (args[i] === '--subject') opts.subject = args[++i];
    else if (args[i] === '--unit') opts.unit = args[++i];
    else if (args[i] === '--audience') opts.audience = args[++i];
    else if (args[i] === '--total') opts.total = parseInt(args[++i]);
    else if (args[i] === '--output') opts.output = args[++i];
    else if (args[i] === '--series') opts.series = true;
  }
  if (opts.series) {
    if (!opts.subject || !opts.unit) {
      console.error('Series mode requires --subject --unit (+ optional --total --output)');
      process.exit(1);
    }
    return opts;
  }
  if (!opts.name || !opts.subject || !opts.unit || !opts.audience) {
    console.error('Required: --name --subject --unit --audience  (or --series --subject X --unit Y)');
    process.exit(1);
  }
  return opts;
}

function getStarSlots(audience, total) {
  const config = DEFAULT_DISTRIBUTION[audience];
  if (!config) return [];
  const slots = [];
  let n = 0;
  for (const star of config.stars) {
    const count = Math.round(total * (config.dist[star] || 0) / 100);
    for (let i = 0; i < count; i++) {
      n++;
      slots.push({ n, type: 'T??', star, role: i === 0 ? '대표' : '연습', focus: '(작성 예정)' });
    }
  }
  while (slots.length < total) {
    slots.push({ n: slots.length + 1, type: 'T??', star: config.stars[Math.floor(config.stars.length/2)], role: '연습', focus: '(작성 예정)' });
  }
  return slots.slice(0, total);
}

async function generateOne(opts) {
  const unitName = UNIT_NAMES[opts.unit] || opts.unit;
  const config = DEFAULT_DISTRIBUTION[opts.audience];
  if (!config) { console.error(`Unknown audience: ${opts.audience}`); return; }
  const outputDir = resolve(PROJECT_ROOT, opts.output);
  await mkdir(outputDir, { recursive: true });
  const baseName = opts.name;
  const yamlPath = join(outputDir, `${baseName}.book.yaml`);
  const texPath = join(outputDir, `${baseName}.tex`);
  const yamlContent = `# ${opts.audience}-${unitName}
title: ${opts.subject === 'CM1' ? '공통수학1' : '공통수학2'} ${unitName} — ${opts.audience} 유형 요약편
subject: ${opts.subject}
unit: ${opts.unit}
audience: ${opts.audience}
allowed_stars: [${config.stars.join(', ')}]
distribution: {${Object.entries(config.dist).map(([k,v]) => `${k}: ${v}`).join(', ')}}
total_problems: ${opts.total}
notes: |
  - schema v2.0 7축 적용 — I 폐기, D DOK 1~4, T 카테고리 5종
revision_log: |
  v1.0 (${new Date().toISOString().slice(0,10)}): template-generator.mjs v0.2 자동 생성.
types:
  - {code: T??, name: (유형명), focus: (핵심 스킬)}
slots:
${getStarSlots(opts.audience, opts.total).map(s =>
  `  - {n: ${s.n}, type: ${s.type}, star: ${s.star}, role: ${s.role}, focus: "${s.focus}"}`
).join('\n')}
`;
  await writeFile(yamlPath, yamlContent, 'utf-8');
  try { await access(texPath); }
  catch {
    await writeFile(texPath, `% ${baseName}.tex (template-generator.mjs v0.2)\n\\documentclass[10pt]{mathbook}\n\\graphicspath{{../../}{./}}\n\\begin{document}\n\\stepone{${unitName}}{${opts.audience} 유형 요약편}\n% slots...\n\\end{document}\n`, 'utf-8');
  }
  console.log(`  ${opts.audience}: ${yamlPath}`);
}

async function main() {
  const opts = parseArgs();

  if (opts.series) {
    // 시리즈 5권 동시 생성: 상위권·중상위권·중위권·중하위권·하위권
    const unitName = UNIT_NAMES[opts.unit] || opts.unit;
    const baseUnit = `${opts.subject}-${opts.unit}`;
    console.log(`===== 시리즈 5권 생성: ${baseUnit} (${unitName}) =====`);
    const total = opts.total || 32;
    const output = opts.output || `output/${opts.subject === 'CM1' ? '공통수학1' : '공통수학2'}/`;
    for (const audience of ['상위권', '중상위권', '중위권', '중하위권', '하위권']) {
      await generateOne({
        name: `${audience}-${unitName.replace(/[·\s]/g, '')}`,
        subject: opts.subject, unit: opts.unit, audience, total, output
      });
    }
    console.log('');
    console.log('===== Next Steps =====');
    console.log(`각 yaml에 대해:`);
    console.log(`  node scripts/recommend-slots-by-book.mjs <yaml>`);
    return;
  }

  const unitName = UNIT_NAMES[opts.unit] || opts.unit;
  const config = DEFAULT_DISTRIBUTION[opts.audience];
  if (!config) {
    console.error(`Unknown audience: ${opts.audience}`);
    process.exit(1);
  }

  const outputDir = resolve(PROJECT_ROOT, opts.output);
  await mkdir(outputDir, { recursive: true });

  const baseName = opts.name;
  const yamlPath = join(outputDir, `${baseName}.book.yaml`);
  const texPath = join(outputDir, `${baseName}.tex`);

  const yamlContent = `# ${opts.audience}-${unitName}
title: ${opts.subject === 'CM1' ? '공통수학1' : '공통수학2'} ${unitName} — ${opts.audience} 유형 요약편
subject: ${opts.subject}
unit: ${opts.unit}
audience: ${opts.audience}
allowed_stars: [${config.stars.join(', ')}]
distribution: {${Object.entries(config.dist).map(([k,v]) => `${k}: ${v}`).join(', ')}}
total_problems: ${opts.total}

layout: |
  테스트지 디자인 채용.
  - 페이지당 2문 × ${Math.ceil(opts.total / 2)}페이지
  - 좌/우 minipage 2단 + 가운데 검정 분할선

notes: |
  - schema v2.0 7축 적용 — I 폐기, D DOK 1~4, T 카테고리 5종

revision_log: |
  v1.0 (${new Date().toISOString().slice(0,10)}): 초기 슬롯 정의 (template-generator.mjs v0.1).

types:
  - {code: T??, name: (유형명), focus: (핵심 스킬)}

slots:
${getStarSlots(opts.audience, opts.total).map(s =>
  `  - {n: ${s.n}, type: ${s.type}, star: ${s.star}, role: ${s.role}, focus: "${s.focus}"}`
).join('\n')}
`;

  await writeFile(yamlPath, yamlContent, 'utf-8');
  console.log(`book.yaml: ${yamlPath}`);

  const texContent = `% ${baseName}.tex (template-generator.mjs v0.1)
\\documentclass[10pt]{mathbook}
\\graphicspath{{../../}{./}}

\\begin{document}

\\stepone{${unitName}}{${opts.audience} 유형 요약편}

% (각 슬롯 추가 — book.yaml의 slots 순서대로)
% \\begin{prob}[\\dotX\\;\\freq]
% 본문 작성
% \\end{prob}

\\end{document}
`;

  try {
    await access(texPath);
    console.log(`SKIP: ${texPath} (이미 존재)`);
  } catch {
    await writeFile(texPath, texContent, 'utf-8');
    console.log(`.tex:      ${texPath}`);
  }

  console.log('');
  console.log('===== Next Steps =====');
  console.log(`1. ${yamlPath}의 slots[].type·focus 채우기`);
  console.log(`2. node scripts/recommend-slots-by-book.mjs ${yamlPath}`);
  console.log(`3. ${texPath}의 본문 작성`);
  console.log(`4. node scripts/refresh-all.mjs --with-extract`);
}

main().catch(e => { console.error('FATAL:', e.message); process.exit(1); });
