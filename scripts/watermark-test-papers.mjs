#!/usr/bin/env node
// 시험지 PDF에 학원 로고 워터마크(대각선·반투명·페이지 중앙)를 찍는다.
//
// 사용:
//   node scripts/watermark-test-papers.mjs "공통수학1/06. 여러 가지 방정식/난이도2 (개념원리)/문제.pdf"
//   node scripts/watermark-test-papers.mjs "D:/시험지/공통수학1" --dry-run
//   node scripts/watermark-test-papers.mjs "D:/시험지" --opacity 0.12 --width-ratio 0.45
//
// 폴더를 주면 하위의 모든 *.pdf 를 찾아 각각 옆에 <이름>_wm.pdf 를 만든다.
// 이미 만들어진 워터마크 결과(*_wm.pdf)는 다시 처리하지 않는다.
// 시험지 PDF 자체는 git 에 커밋하지 않는다(AGENTS.md).

import { readdir, mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { extname, dirname, basename, join, resolve } from "node:path";
import {
  addCenteredDiagonalWatermark,
  defaultWatermarkLogoPath,
  defaultWatermarkOptions
} from "../src/shared/server/testPaperWatermark.js";

function parseArgs(argv) {
  const args = { input: null, logo: defaultWatermarkLogoPath, out: null, dryRun: false, ...defaultWatermarkOptions };
  const rest = argv.slice(2);
  for (let i = 0; i < rest.length; i += 1) {
    const token = rest[i];
    if (token === "--dry-run") args.dryRun = true;
    else if (token === "--logo") args.logo = rest[(i += 1)];
    else if (token === "--out") args.out = rest[(i += 1)];
    else if (token === "--opacity") args.opacity = Number(rest[(i += 1)]);
    else if (token === "--width-ratio") args.widthRatio = Number(rest[(i += 1)]);
    else if (token === "--rotate") args.rotationDegrees = Number(rest[(i += 1)]);
    else if (!args.input) args.input = token;
    else throw new Error(`알 수 없는 인자: ${token}`);
  }
  if (!args.input) throw new Error("워터마크를 찍을 PDF 파일 또는 폴더 경로가 필요합니다.");
  return args;
}

async function isDirectory(path) {
  try {
    return (await stat(path)).isDirectory();
  } catch {
    return false;
  }
}

async function findPdfFiles(root) {
  const found = [];
  async function walk(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath);
      } else if (extname(entry.name).toLowerCase() === ".pdf" && !entry.name.toLowerCase().endsWith("_wm.pdf")) {
        found.push(fullPath);
      }
    }
  }
  await walk(root);
  return found;
}

function watermarkedPathFor(inputPath) {
  const ext = extname(inputPath);
  const name = basename(inputPath, ext);
  return join(dirname(inputPath), `${name}_wm${ext}`);
}

async function processOne(inputPath, outputPath, logoBytes, watermarkOptions) {
  const pdfBytes = await readFile(inputPath);
  const watermarked = await addCenteredDiagonalWatermark(pdfBytes, logoBytes, watermarkOptions);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, watermarked);
}

async function main() {
  const args = parseArgs(process.argv);
  const inputPath = resolve(args.input);
  const watermarkOptions = {
    opacity: args.opacity,
    widthRatio: args.widthRatio,
    rotationDegrees: args.rotationDegrees
  };

  const targetIsDirectory = await isDirectory(inputPath);
  const pdfFiles = targetIsDirectory ? await findPdfFiles(inputPath) : [inputPath];

  if (!pdfFiles.length) {
    process.stdout.write("워터마크를 찍을 PDF가 없습니다.\n");
    return;
  }

  if (args.dryRun) {
    for (const file of pdfFiles) process.stdout.write(`[dry-run] ${file} -> ${watermarkedPathFor(file)}\n`);
    process.stdout.write(`총 ${pdfFiles.length}개 파일 예정 (--dry-run, 실제 저장 없음)\n`);
    return;
  }

  const logoBytes = await readFile(resolve(args.logo));
  let done = 0;
  for (const file of pdfFiles) {
    const outputPath = targetIsDirectory || !args.out ? watermarkedPathFor(file) : resolve(args.out);
    await processOne(file, outputPath, logoBytes, watermarkOptions);
    done += 1;
    process.stdout.write(`워터마크 완료: ${outputPath}\n`);
  }
  process.stdout.write(`총 ${done}개 파일에 워터마크를 찍었습니다.\n`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
