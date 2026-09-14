#!/usr/bin/env node
// scripts/extract-tex-to-bank.mjs
//
// output/공통수학*/*.tex → bank/problems/OUT-*.md
//
// LaTeX의 \begin{prob}[\dotX...]...\end{prob} 블록을 추출하여 status: approved로 등록.
// 우리 책에 이미 들어간 검수 완료 문제 — calibration에서 ground truth로 사용.

import { readFile, writeFile, readdir, mkdir } from 'node:fs/promises';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');

const OUTPUT_DIRS = [
  join(PROJECT_ROOT, 'output', '공통수학1'),
  join(PROJECT_ROOT, 'output', '공통수학2'),
  join(PROJECT_ROOT, 'output', '공통수학1', '완성본', '유형요약편'),
  join(PROJECT_ROOT, 'output', '공통수학1', '완성본', '2026 기말대비', '공통수학1', '마플시너지 정리')
];
const BANK_DIR = join(PROJECT_ROOT, 'bank', 'problems');

// \dotX → ★ 환산 (mathbook-problems.sty 정의)
const DOT_STAR = {
  '\\dota': 1, '\\dotb': 2, '\\dotc': 3, '\\dotd': 4, '\\dote': 5
};

// 파일명 + book.yaml의 subject·unit → 우리 단원 코드 추정
function inferUnit(fileName, dirName, bookYaml) {
  // v0.2: book.yaml에 subject·unit 있으면 최우선 사용
  if (bookYaml && bookYaml.subject && bookYaml.unit) {
    return `${bookYaml.subject}-${bookYaml.unit}`;
  }
  const lower = fileName.toLowerCase();
  const isCM2 = dirName.includes('공통수학2');
  const cm = isCM2 ? 'CM2' : 'CM1';

  // 공수2 단원 (먼저 체크)
  if (lower.includes('유리함수') || lower.includes('무리함수')) return 'CM2-RF';
  if (lower.includes('도형의이동') || lower.includes('도형의 이동') || lower.includes('도형방정식')) return 'CM2-GM';
  if (lower.includes('집합') || lower.includes('명제')) return 'CM2-ST';
  if (isCM2 && lower.includes('함수')) return 'CM2-FN';
  // 공수1 단원
  if (lower.includes('부등식') || lower.includes('방정식')) return 'CM1-EQ';
  if (lower.includes('다항식')) return 'CM1-PL';
  if (lower.includes('경우') || lower.includes('순열') || lower.includes('조합')) return 'CM1-CB';
  if (lower.includes('행렬')) return 'CM1-MX';
  return `${cm}-?`;
}

// .tex 파일 옆의 .book.yaml을 자동 발견·읽기
async function loadBookYamlForTex(filePath, fileName) {
  // 답지 파일이면 본문 파일의 yaml 사용
  const stemFile = fileName.replace(/-답지\.tex$/, '.tex');
  const stemPath = stemFile === fileName ? filePath : filePath.replace(fileName, stemFile);
  const yamlPath = stemPath.replace(/\.tex$/, '.book.yaml');
  try {
    const txt = await readFile(yamlPath, 'utf-8');
    return yaml.load(txt);
  } catch (e) {
    return null;
  }
}

// {} 균형을 따져 \begin{prob}[...] 블록 안의 옵션과 본문 추출
function extractProbBlocks(tex) {
  const blocks = [];
  const beginRegex = /\\begin\{(prob|repprob)\}\s*(?:\[((?:[^\]\[]|\[[^\]]*\])*)\])?/g;
  let m;
  while ((m = beginRegex.exec(tex)) !== null) {
    const start = m.index;
    const headerEnd = beginRegex.lastIndex;
    const env = m[1];
    const options = m[2] || '';
    // 매칭되는 \end{env} 위치 찾기 (단순 — 중첩 prob 없다고 가정)
    const endRegex = new RegExp(`\\\\end\\{${env}\\}`);
    const tail = tex.substring(headerEnd);
    const endMatch = tail.match(endRegex);
    if (!endMatch) continue;
    const bodyEnd = headerEnd + endMatch.index;
    const body = tex.substring(headerEnd, bodyEnd).trim();
    blocks.push({ env, options, body, startLine: tex.substring(0, start).split('\n').length });
  }
  return blocks;
}

// \dotX → ★ 추출
function extractStar(options) {
  for (const [dot, star] of Object.entries(DOT_STAR)) {
    if (options.includes(dot)) return star;
  }
  return null;
}

// 태그 (\freq, \essay, \examvar) 추출
function extractTags(options) {
  const tags = [];
  if (options.includes('\\freq')) tags.push('빈출');
  if (options.includes('\\essay')) tags.push('서술형');
  if (options.includes('\\examvar')) tags.push('기출변형');
  return tags;
}

// 본문 텍스트 일부 (1~2 라인) → 미리보기
function preview(body, len = 80) {
  return body.split('\n').filter(l => l.trim()).slice(0, 3).join(' ').substring(0, len);
}

async function processFile(filePath, fileName, dirName) {
  const tex = await readFile(filePath, 'utf-8');
  const blocks = extractProbBlocks(tex);
  if (blocks.length === 0) return [];

  const fileStem = basename(fileName, '.tex');
  const isAnswer = fileStem.includes('-답지');
  if (isAnswer) return [];  // 답지는 별도 처리

  // v0.2: book.yaml 자동 발견
  const bookYaml = await loadBookYamlForTex(filePath, fileName);
  const unit = inferUnit(fileName, dirName, bookYaml);

  // 슬롯 매핑 (book.yaml의 slots 배열로 슬롯별 type·focus 추출)
  const slotsMap = {};
  if (bookYaml && Array.isArray(bookYaml.slots)) {
    for (const slot of bookYaml.slots) {
      if (slot.n != null) slotsMap[slot.n] = slot;
    }
  }

  const records = [];
  blocks.forEach((b, idx) => {
    const star = extractStar(b.options);
    const tags = extractTags(b.options);
    const slot = slotsMap[idx + 1] || null;
    records.push({
      file: fileName,
      dir: dirName.split(/[/\\]/).pop(),
      stem: fileStem,
      env: b.env,
      idx: idx + 1,
      options: b.options,
      star, tags,
      body: b.body,
      preview: preview(b.body),
      unit,
      bookYaml,
      slot
    });
  });
  return records;
}

async function main() {
  await mkdir(BANK_DIR, { recursive: true });
  let total = 0;
  const stats = { by_unit: {}, by_star: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }, by_file: {} };

  for (const dir of OUTPUT_DIRS) {
    let files;
    try { files = await readdir(dir); } catch (e) { continue; }
    for (const f of files) {
      if (!f.endsWith('.tex')) continue;
      const records = await processFile(join(dir, f), f, dir);
      stats.by_file[f] = records.length;
      for (const r of records) {
        const id = `OUT-${r.stem.replace(/[^A-Za-z0-9가-힣-]/g, '_')}-${String(r.idx).padStart(3, '0')}`;
        // v0.2: T-code는 book.yaml의 slots에서 추출
        const tcode = r.slot && r.slot.type ? r.slot.type : (r.star ? `?(★${r.star})` : '?');
        const yamlObj = {
          id,
          unit: r.unit,
          type: tcode,
          status: 'approved',
          source_origin: '깊이와통찰 — 우리 책 출제 (검수 완료)',
          original_tex_file: `output/${r.dir}/${r.file}`,
          original_env: r.env,
          original_idx_in_file: r.idx,
          dot_star: r.star,
          tags: r.tags,
          created: '2026-06-15'
        };
        // v0.2: book.yaml 메타 합산
        if (r.bookYaml) {
          yamlObj.book_meta = {
            book_title: r.bookYaml.title || null,
            audience: r.bookYaml.audience || null,
            book_total: r.bookYaml.total_problems || null
          };
          // 슬롯별 정보
          if (r.slot) {
            yamlObj.slot_meta = {
              n: r.slot.n,
              role: r.slot.role || null,
              focus: r.slot.focus || null,
              problem_id: r.slot.problem_id || null
            };
          }
        }
        // external_labels 형식 — calibration에서 ★ 사용 가능
        yamlObj.external_labels = [{
          source: '우리 책 (검수 완료)',
          cohort_type: r.bookYaml && r.bookYaml.audience ? 'editor_estimate' : null,
          label_star: r.star,
          cohort_normalized_star: r.star  // OUT-*는 dot_star를 cohort_normalized_star로 사용 (calibration 호환)
        }];
        const md = `---\n${yaml.dump(yamlObj, { lineWidth: 200, noRefs: true })}---\n\n*(status: approved — 우리 책에 이미 등록된 검수 완료 문제. status==='draft'·'meta_only' 가 아닌 ground truth 풀.)*\n\n**LaTeX 옵션**: \`${r.options}\`\n\n**본문 미리보기**: ${r.preview}\n\n## 본문 (LaTeX)\n\n\`\`\`latex\n${r.body}\n\`\`\`\n`;
        await writeFile(join(BANK_DIR, `${id}.md`), md, 'utf-8');
        stats.by_unit[r.unit] = (stats.by_unit[r.unit] || 0) + 1;
        if (r.star) stats.by_star[r.star]++;
        total++;
      }
    }
  }

  console.log('===== Extract Summary =====');
  console.log(`Total OUT-*.md registered: ${total}`);
  console.log('By file:');
  Object.entries(stats.by_file).forEach(([f, n]) => console.log(`  ${f}: ${n}`));
  console.log('By unit:');
  Object.entries(stats.by_unit).forEach(([u, n]) => console.log(`  ${u}: ${n}`));
  console.log('By ★:');
  Object.entries(stats.by_star).forEach(([s, n]) => console.log(`  ★${s}: ${n}`));
}

main().catch(e => { console.error('FATAL:', e); process.exit(1); });
