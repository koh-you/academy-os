#!/usr/bin/env node
// scripts/extract-deepinsight.mjs
//
// 깊이와통찰 수능모의 공통 변형 모음 PDF 14개 → data/deepinsight-raw.json
// 명세: scripts/정답률-수집-설계.md §4
//
// 사용:
//   node scripts/extract-deepinsight.mjs              # 메인 파일만 시범
//   node scripts/extract-deepinsight.mjs --all        # 14개 전체
//   node scripts/extract-deepinsight.mjs --file <N>   # (N)번 파일만

import { readFile, readdir, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');

const PDF_DIR = join(PROJECT_ROOT, '참고자료', '고1 모의고사 변형 모음');
const DATA_DIR = join(PROJECT_ROOT, 'data');
const OUTPUT = join(DATA_DIR, 'deepinsight-raw.json');
const ERRORS = join(DATA_DIR, 'deepinsight-errors.json');
const WARNINGS = join(DATA_DIR, 'deepinsight-warnings.json');

// ---------------------------------------------------------------------------
// 정규식 패턴
// ---------------------------------------------------------------------------

const PATTERNS = {
  // | 유형명 | 정답률 NN%  (유형명에 |x|, |ax+b| 같은 절댓값 표기 가능 → lazy . 사용)
  typeAndRate: /\|\s*(.+?)\s*\|\s*정답률\s*(\d{1,3})\s*%/,
  // [유사] 책 - 단원, NNp NN  또는  NNp NN.(N)
  similar:     /\[유사\]\s*([^-\n]+?)\s*-\s*([^,\n]+?)\s*,\s*(\d+)p\s*([\d.()]+)/,
  // [YYYY년 M월 고N NN번/N점]
  examMeta:    /\[\s*(\d{4})\s*년\s*(\d+)\s*월\s*고\s*(\d)\s*(\d+)\s*번\s*\/\s*(\d+)\s*점\s*\]/,
  // 문항 번호 (01, 02, ..., 99)
  problemNo:   /(?:^|\s)(\d{2})(?:\s|$)/
};

// ---------------------------------------------------------------------------
// 책 이름 정규화 (typename-to-tcode.json의 _book_aliases 사용)
// ---------------------------------------------------------------------------

let aliasMap = {};

async function loadAliases() {
  try {
    const tcMap = JSON.parse(
      await readFile(join(PROJECT_ROOT, 'scripts', 'typename-to-tcode.json'), 'utf-8')
    );
    aliasMap = tcMap._book_aliases || {};
    // _description 키 제거
    delete aliasMap._description;
  } catch (e) {
    console.warn('Could not load aliases:', e.message);
  }
}

function normalizeBook(book) {
  const trimmed = book.trim();
  return aliasMap[trimmed] || trimmed;
}

// ---------------------------------------------------------------------------
// 페이지 추출
// ---------------------------------------------------------------------------

const errors = [];
const warnings = [];

async function extractPage(page, fileName, pageNum) {
  const textContent = await page.getTextContent();
  const viewport = page.getViewport({ scale: 1 });
  const midX = viewport.width / 2;

  const leftItems = [];
  const rightItems = [];

  for (const item of textContent.items) {
    const x = item.transform[4];
    const y = item.transform[5];
    if (!item.str || item.str.trim() === '') continue;
    (x < midX ? leftItems : rightItems).push({ x, y, str: item.str });
  }

  // y는 PDF 좌표계에서 bottom-up. top→bottom 순서 = y desc
  leftItems.sort((a, b) => b.y - a.y || a.x - b.x);
  rightItems.sort((a, b) => b.y - a.y || a.x - b.x);

  const results = [];
  for (const [items, column] of [[leftItems, 'left'], [rightItems, 'right']]) {
    const p = parseColumn(items, fileName, pageNum, column);
    if (p) results.push(p);
  }
  return results;
}

function groupByLine(items, yTolerance = 3) {
  // 같은 y(±tolerance) 안의 텍스트 아이템을 한 줄로 묶음
  const lines = [];
  let current = null;
  for (const item of items) {
    if (current && Math.abs(current.y - item.y) < yTolerance) {
      current.text += item.str;
    } else {
      if (current) lines.push(current);
      current = { y: item.y, text: item.str };
    }
  }
  if (current) lines.push(current);
  return lines;
}

function parseColumn(items, fileName, pageNum, column) {
  if (items.length === 0) return null;
  const lines = groupByLine(items);
  const fullText = lines.map(l => l.text).join('\n');

  // 유형명 + 정답률
  const typeRateMatch = fullText.match(PATTERNS.typeAndRate);
  if (!typeRateMatch) {
    // 첫 페이지의 제목 영역 등은 매치 실패 가능 — silently skip
    return null;
  }

  const typeName = typeRateMatch[1].trim();
  const correctRate = parseInt(typeRateMatch[2]) / 100;

  // 학평 회차
  const examMatch = fullText.match(PATTERNS.examMeta);

  // 유사 출처 (여러 개)
  const similarSources = [];
  const similarRegex = new RegExp(PATTERNS.similar.source, 'g');
  let m;
  while ((m = similarRegex.exec(fullText)) !== null) {
    similarSources.push({
      book: normalizeBook(m[1]),
      subject: m[2].trim(),
      page: parseInt(m[3]),
      no: m[4].trim()
    });
  }

  // 문항 번호 — 줄 단위로 큰 글자(NN)가 표시되는 듯
  // 첫 부분에서 \d{2} 패턴 추출
  let problemNo = null;
  for (const line of lines) {
    const trimmed = line.text.trim();
    if (/^\d{2}$/.test(trimmed)) {
      problemNo = trimmed;
      break;
    }
  }

  // 정답률 sanity check
  if (correctRate * 100 < 5 || correctRate * 100 > 99) {
    warnings.push({
      file: fileName, page: pageNum, column,
      reason: 'unusual correct rate',
      value: correctRate, typeName
    });
  }

  const result = {
    file: fileName,
    page: pageNum,
    column,
    problem_no: problemNo,
    type_name_raw: typeName,
    correct_rate: correctRate,
    similar_sources: similarSources
  };

  if (examMatch) {
    result.exam_year = parseInt(examMatch[1]);
    result.exam_month = parseInt(examMatch[2]);
    result.exam_grade = `고${examMatch[3]}`;
    result.exam_number = parseInt(examMatch[4]);
    result.score_points = parseInt(examMatch[5]);
  } else {
    errors.push({
      file: fileName, page: pageNum, column, problem_no: problemNo,
      reason: 'exam meta not matched', typeName
    });
  }

  return result;
}

// ---------------------------------------------------------------------------
// PDF 처리
// ---------------------------------------------------------------------------

async function processPdf(pdfPath, fileName) {
  console.log(`  loading ${fileName}...`);
  const data = new Uint8Array(await readFile(pdfPath));
  const doc = await pdfjsLib.getDocument({
    data,
    standardFontDataUrl: null,
    disableFontFace: true,
    useSystemFonts: false
  }).promise;

  console.log(`  ${fileName}: ${doc.numPages} pages`);
  const problems = [];

  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const pageProblems = await extractPage(page, fileName, i);
    problems.push(...pageProblems);
    page.cleanup();
  }

  await doc.destroy();
  return problems;
}

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------

async function main() {
  await mkdir(DATA_DIR, { recursive: true });
  await loadAliases();

  const args = process.argv.slice(2);
  const allMode = args.includes('--all');
  const fileArg = args.find(a => a.startsWith('--file'));
  const fileNum = fileArg ? fileArg.split('=')[1] || args[args.indexOf(fileArg) + 1] : null;

  const files = (await readdir(PDF_DIR)).filter(f => f.endsWith('.pdf'));
  console.log(`Found ${files.length} PDFs in ${PDF_DIR}`);

  let toProcess = [];
  if (allMode) {
    toProcess = files;
  } else if (fileNum) {
    const target = files.find(f => f.includes(`(${fileNum})`));
    if (!target) { console.error(`File (${fileNum}) not found`); process.exit(1); }
    toProcess = [target];
  } else {
    // 메인 파일 (괄호 없는 것)
    const main = files.find(f => !f.match(/\(\d+\)/));
    if (!main) { console.error('Main file not found'); process.exit(1); }
    toProcess = [main];
  }

  console.log(`Processing ${toProcess.length} file(s):`);
  const allProblems = [];
  for (const f of toProcess) {
    const problems = await processPdf(join(PDF_DIR, f), f);
    console.log(`  ${f}: extracted ${problems.length} problems`);
    allProblems.push(...problems);
  }

  await writeFile(OUTPUT, JSON.stringify(allProblems, null, 2), 'utf-8');
  await writeFile(ERRORS, JSON.stringify(errors, null, 2), 'utf-8');
  await writeFile(WARNINGS, JSON.stringify(warnings, null, 2), 'utf-8');

  // 통계
  const rates = allProblems.filter(p => p.correct_rate != null).map(p => p.correct_rate);
  if (rates.length > 0) {
    const mean = rates.reduce((a, b) => a + b, 0) / rates.length;
    const variance = rates.reduce((a, b) => a + (b - mean) ** 2, 0) / rates.length;
    const std = Math.sqrt(variance);
    console.log('');
    console.log('===== Stats =====');
    console.log(`Total problems: ${allProblems.length}`);
    console.log(`Mean correct rate: ${(mean * 100).toFixed(1)}%`);
    console.log(`Std deviation:     ${(std * 100).toFixed(1)}%`);
    console.log(`Min: ${(Math.min(...rates) * 100).toFixed(0)}% / Max: ${(Math.max(...rates) * 100).toFixed(0)}%`);
    console.log(`Errors: ${errors.length}, Warnings: ${warnings.length}`);
    console.log('');
    console.log(`Output: ${OUTPUT}`);
    console.log(`Errors: ${ERRORS}`);
    console.log(`Warnings: ${WARNINGS}`);
  }
}

main().catch(e => {
  console.error('FATAL:', e);
  process.exit(1);
});
