#!/usr/bin/env node
// 청사진 배치 정합 검사 — v2.0 (옵션 A 세로 우선 검사 편입 · p6 단독 파서 개선)
// 2026-07-26 세션 93 신설 v1.0 · v2.0 확장 (재구축 C 후속)
//
// v1.0 → v2.0 확장:
//   1. 옵션 A 세로 컬럼 우선 배치 검사 (좌측 컬럼 = 낮은 두 번호 · 우측 = 높은 두 번호)
//   2. p6 단독 배치 파서 개선 (pagepair 밖 minipage 단독 문항 인식)
//   3. 청사진 layout 필드 (좌상·좌하·우상·우하) 파싱 확장
//
// 배경:
//   세션 93 Task #16 · Q19 임의 CHECKLIST 페어링 (청사진 §8 위반) 감지 계기
//   세션 93 마스터 확정: 옵션 A 세로 컬럼 우선 (Q1좌상·Q2좌하·Q3우상·Q4우하)
//
// 단일 출처: bank/청사진-스키마-v6.1.md §8 · bank/시리즈-조판-지침-매핑.md §6 옵션 A
//
// 사용법:
//   node scripts/blueprint-layout-consistency-check.mjs <청사진.yaml> <문제.tex>
// 반환 코드: 0 = GREEN / 1 = RED / 2 = 오용

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length !== 2) {
  console.error('Usage: node scripts/blueprint-layout-consistency-check.mjs <청사진.yaml> <문제.tex>');
  console.error('  반환 코드: 0 = GREEN / 1 = RED / 2 = 오용');
  process.exit(2);
}

const [yamlPath, texPath] = args;
if (!fs.existsSync(yamlPath)) {
  console.error(`❌ 청사진 없음: ${yamlPath}`);
  process.exit(2);
}
if (!fs.existsSync(texPath)) {
  console.error(`❌ tex 파일 없음: ${texPath}`);
  process.exit(2);
}

// 청사진 §8 파싱
const yamlRaw = fs.readFileSync(yamlPath, 'utf8');

function parseBlueprintLayout(yamlRaw) {
  const layoutMatch = yamlRaw.match(/\npage_layout:\s*\n([\s\S]*?)(?=\n[a-z_]+:|\n#{2,}|\n$)/);
  if (!layoutMatch) return null;

  const layoutBlock = layoutMatch[1];
  const pages = {};

  // p1: {header: ..., content: [Q01, Q02, ...], layout: {좌상: Q01, ...}, type: ...}
  const pageRegex = /^\s+(p\d+):\s*\{([^}]*(?:\{[^}]*\}[^}]*)*)\}/gm;
  let m;
  while ((m = pageRegex.exec(layoutBlock)) !== null) {
    const pageKey = m[1];
    const props = m[2];

    // content: [...]
    const contentMatch = props.match(/content:\s*\[([^\]]+)\]/);
    let content = [];
    if (contentMatch) {
      content = contentMatch[1].split(',').map((s) => s.trim()).filter(Boolean);
    }

    // layout: {좌상: Q01, 좌하: Q02, 우상: Q03, 우하: Q04}
    const layoutMatch = props.match(/layout:\s*\{([^}]+)\}/);
    let cellLayout = null;
    if (layoutMatch) {
      cellLayout = {};
      const cells = layoutMatch[1].split(',').map((s) => s.trim());
      for (const cell of cells) {
        const [key, val] = cell.split(':').map((s) => s.trim());
        cellLayout[key] = val;
      }
    }

    pages[pageKey] = { content, cellLayout };
  }

  return pages;
}

// tex 파일 파싱 · pagepair 블록 및 pagepair 밖 minipage 단독 문항 감지
function parseTexLayout(texRaw) {
  const stripped = texRaw
    .split('\n')
    .map((line) => {
      const idx = line.indexOf('%');
      if (idx === -1) return line;
      if (idx > 0 && line[idx - 1] === '\\') return line;
      return line.slice(0, idx);
    })
    .join('\n');

  const docStart = stripped.indexOf('\\begin{document}');
  const body = docStart === -1 ? stripped : stripped.slice(docStart);

  // 각 문항의 위치·컨텍스트 추출
  // \probpair{좌}{우} 구조에서 좌·우 문항 번호 감지
  // 페이지 경계: \examheader (p1 시작) · \begin{pagepair} · \newpage · \clearpage · 파일 끝

  const pageContents = {};   // pN: [Q01, Q02, ...] (등장 순서)
  const pagepairs = {};      // pN: [[좌, 우], [좌, 우], ...]  (각 probpair의 좌·우)

  let currentPageIdx = 1;
  let inPagepair = false;
  let currentPagepair = null;

  // 이벤트 순차 파싱
  const tokenRegex = /\\begin\{pagepair\}|\\end\{pagepair\}|\\probpair\s*\{|\\begin\{problem\}\{(\d+)\}\{[a-z]\}|\\newpage|\\clearpage|\\examheader/g;
  let m;
  let pos = 0;
  let inProbpair = false;
  let probpairArgIdx = 0;   // 0 = 좌, 1 = 우
  let probpairBraceDepth = 0;
  let currentProbpair = [null, null];

  // 단순 파서: 각 \begin{problem}{N} 을 순차적으로 페이지에 배정
  // pagepair 블록 안의 첫 문항 = 좌상 or 좌 · 다음 = 우상 or 우 · 등등
  //
  // 정확한 좌/우/상/하 판정을 위해서는 \probpair{...}{...} 구조를 파악해야 함.
  // \probpair{  \begin{problem}{1}{s}  ...  \end{problem}  }{  \begin{problem}{3}{s}  ...  \end{problem}  }
  //
  // brace 카운트로 첫 인자·둘째 인자 판정.

  // 파싱 재구현: \probpair 블록별로 첫·둘째 인자 안의 문항 번호 감지
  const probpairRegex = /\\probpair\s*\{/g;
  const problemInArg = /\\begin\{problem\}\{(\d+)\}\{[a-z]\}/g;

  // 각 페이지의 probpair 리스트 · 각 probpair 의 좌·우 문항 번호
  const perPageEvents = {};  // pN: [{type: 'probpair', left: N, right: N} | {type: 'solo', num: N}]
  let pageIdx = 1;
  perPageEvents[`p${pageIdx}`] = [];

  // 순차 스캔
  let i = 0;
  while (i < body.length) {
    // \examheader → 페이지 1 시작
    if (body.slice(i).startsWith('\\examheader')) {
      // 페이지 1은 이미 시작됨
      i += '\\examheader'.length;
      continue;
    }
    // \newpage · \clearpage → 다음 페이지
    // 단, 직전 \end{pagepair}가 이미 페이지를 증가시켰으면 (현재 페이지가 이벤트 0건이면) 스킵
    // pagepair 환경은 style.sty에서 종료 시 자동 \clearpage 호출
    if (body.slice(i).startsWith('\\newpage') || body.slice(i).startsWith('\\clearpage')) {
      const isNewpage = body.slice(i).startsWith('\\newpage');
      const tokenLen = isNewpage ? '\\newpage'.length : '\\clearpage'.length;
      const currentPageEmpty = (perPageEvents[`p${pageIdx}`] || []).length === 0;
      if (currentPageEmpty) {
        // 직전 \end{pagepair}가 이미 증가시킨 페이지가 비어있음 → 이중 clearpage 방지 · 스킵
        i += tokenLen;
        continue;
      }
      pageIdx++;
      perPageEvents[`p${pageIdx}`] = [];
      i += tokenLen;
      continue;
    }
    // \begin{pagepair}
    if (body.slice(i).startsWith('\\begin{pagepair}')) {
      i += '\\begin{pagepair}'.length;
      continue;
    }
    // \end{pagepair} → 자동 페이지 경계 (style.sty pagepair 환경은 clearpage 자동)
    if (body.slice(i).startsWith('\\end{pagepair}')) {
      i += '\\end{pagepair}'.length;
      pageIdx++;
      perPageEvents[`p${pageIdx}`] = [];
      continue;
    }
    // \probpair{...}{...}
    if (body.slice(i).startsWith('\\probpair')) {
      const startPos = i;
      i += '\\probpair'.length;
      // 공백 스킵
      while (i < body.length && /\s/.test(body[i])) i++;
      // 첫 { 찾기
      if (body[i] !== '{') {
        continue;
      }
      // 첫 인자
      let depth = 0;
      let arg1Start = i + 1;
      let arg1End = -1;
      while (i < body.length) {
        if (body[i] === '{') depth++;
        else if (body[i] === '}') {
          depth--;
          if (depth === 0) {
            arg1End = i;
            i++;
            break;
          }
        }
        i++;
      }
      // 둘째 인자
      while (i < body.length && /\s/.test(body[i])) i++;
      if (body[i] !== '{') {
        // 둘째 인자 없음 (구조 오류)
        continue;
      }
      let arg2Start = i + 1;
      let arg2End = -1;
      depth = 0;
      while (i < body.length) {
        if (body[i] === '{') depth++;
        else if (body[i] === '}') {
          depth--;
          if (depth === 0) {
            arg2End = i;
            i++;
            break;
          }
        }
        i++;
      }
      // 두 인자 안의 problem 번호 감지
      const arg1Content = body.slice(arg1Start, arg1End);
      const arg2Content = body.slice(arg2Start, arg2End);
      const arg1Match = arg1Content.match(/\\begin\{problem\}\{(\d+)\}\{[a-z]\}/);
      const arg2Match = arg2Content.match(/\\begin\{problem\}\{(\d+)\}\{[a-z]\}/);
      const leftNum = arg1Match ? parseInt(arg1Match[1]) : null;
      const rightNum = arg2Match ? parseInt(arg2Match[1]) : null;
      perPageEvents[`p${pageIdx}`].push({
        type: 'probpair',
        left: leftNum,
        right: rightNum,
      });
      continue;
    }
    // 그 외: \begin{problem}{...} 단독 (pagepair 밖 · minipage 형태)
    const soloMatch = body.slice(i, i + 30).match(/^\\begin\{problem\}\{(\d+)\}\{[a-z]\}/);
    if (soloMatch) {
      // 이 문항이 앞선 probpair 이벤트에 이미 포함됐는지 확인
      const alreadyCounted = perPageEvents[`p${pageIdx}`].some(
        (e) => e.type === 'probpair' && (e.left === parseInt(soloMatch[1]) || e.right === parseInt(soloMatch[1]))
      );
      if (!alreadyCounted) {
        perPageEvents[`p${pageIdx}`].push({
          type: 'solo',
          num: parseInt(soloMatch[1]),
        });
      }
      i += soloMatch[0].length;
      continue;
    }
    i++;
  }

  return perPageEvents;
}

const blueprintLayout = parseBlueprintLayout(yamlRaw);
if (!blueprintLayout) {
  console.error(`❌ 청사진에 page_layout 섹션 없음: ${yamlPath}`);
  process.exit(2);
}

const texRaw = fs.readFileSync(texPath, 'utf8');
const texEvents = parseTexLayout(texRaw);

console.log(`\n📋 청사진 배치 정합 검사 v2.0 (옵션 A 세로 우선)`);
console.log(`   청사진: ${yamlPath}`);
console.log(`   tex   : ${texPath}\n`);

const bpPages = Object.keys(blueprintLayout).sort();
const txPages = Object.keys(texEvents).sort();
const allPages = new Set([...bpPages, ...txPages]);

let redCount = 0;
let yellowCount = 0;

for (const page of Array.from(allPages).sort()) {
  const bp = blueprintLayout[page];
  const events = texEvents[page] || [];

  const bpContent = bp?.content || [];
  const bpLayout = bp?.cellLayout;

  // tex에서 감지된 문항 순서
  const txContent = [];
  const txPairs = [];
  for (const e of events) {
    if (e.type === 'probpair') {
      if (e.left !== null) txContent.push(`Q${String(e.left).padStart(2, '0')}`);
      if (e.right !== null) txContent.push(`Q${String(e.right).padStart(2, '0')}`);
      txPairs.push([e.left, e.right]);
    } else if (e.type === 'solo') {
      txContent.push(`Q${String(e.num).padStart(2, '0')}`);
    }
  }

  // 청사진 slot 존재 검증
  if (bpContent.length === 0 && txContent.length === 0) continue;

  const bpSet = new Set(bpContent);
  const txSet = new Set(txContent);
  const missing = bpContent.filter((q) => !txSet.has(q));
  const extra = txContent.filter((q) => !bpSet.has(q));

  const slotOk = missing.length === 0 && extra.length === 0;

  // 옵션 A 세로 우선 검사 (probpair 2쌍이 있는 페이지만)
  let optionAOk = true;
  let optionAMsg = '';
  if (txPairs.length === 2) {
    const [pair1, pair2] = txPairs;
    // 옵션 A: pair1 = {좌상, 우상} · pair2 = {좌하, 우하}
    // 좌측 컬럼 = pair1.left, pair2.left = 낮은 두 번호 · 우측 컬럼 = pair1.right, pair2.right = 높은 두 번호
    // 즉 max(pair1.left, pair2.left) < min(pair1.right, pair2.right) 여야 함
    if (pair1.left !== null && pair1.right !== null && pair2.left !== null && pair2.right !== null) {
      const leftCol = [pair1.left, pair2.left].sort((a, b) => a - b);
      const rightCol = [pair1.right, pair2.right].sort((a, b) => a - b);
      const leftMax = leftCol[1];
      const rightMin = rightCol[0];
      if (leftMax > rightMin) {
        optionAOk = false;
        optionAMsg = `좌측 컬럼 [Q${pair1.left}, Q${pair2.left}] vs 우측 컬럼 [Q${pair1.right}, Q${pair2.right}] · 옵션 A 위반 (좌측 컬럼 = 낮은 두 번호 필수)`;
      }
    }
  } else if (txPairs.length === 1 && events.filter((e) => e.type === 'probpair').length === 1) {
    // 3문 페이지 (예: Q17, Q18, Q19 · pair1 + solo)
    // 옵션 A: pair1 = {좌상, 우상} · solo = 좌하 · 우하 빈
    // 이 케이스도 추후 확장 가능 · 지금은 slot 대조만
  }

  // 청사진 layout 필드가 있으면 세로 위치 대조
  let layoutOk = true;
  let layoutMsg = '';
  if (bpLayout && txPairs.length >= 1) {
    const bpLeftTop = bpLayout['좌상'];
    const bpRightTop = bpLayout['우상'];
    const bpLeftBottom = bpLayout['좌하'];
    const bpRightBottom = bpLayout['우하'];
    const pair1 = txPairs[0];
    const pair2 = txPairs[1] || [null, null];

    const txLeftTop = pair1.left !== null ? `Q${String(pair1.left).padStart(2, '0')}` : null;
    const txRightTop = pair1.right !== null ? `Q${String(pair1.right).padStart(2, '0')}` : null;
    const txLeftBottom = pair2.left !== null ? `Q${String(pair2.left).padStart(2, '0')}` : null;
    const txRightBottom = pair2.right !== null ? `Q${String(pair2.right).padStart(2, '0')}` : null;

    const mismatches = [];
    if (bpLeftTop && bpLeftTop !== '빈공간' && bpLeftTop !== txLeftTop) mismatches.push(`좌상: 청사진=${bpLeftTop} vs tex=${txLeftTop}`);
    if (bpRightTop && bpRightTop !== '빈공간' && bpRightTop !== txRightTop) mismatches.push(`우상: 청사진=${bpRightTop} vs tex=${txRightTop}`);
    if (bpLeftBottom && bpLeftBottom !== '빈공간' && bpLeftBottom !== txLeftBottom) mismatches.push(`좌하: 청사진=${bpLeftBottom} vs tex=${txLeftBottom}`);
    if (bpRightBottom && bpRightBottom !== '빈공간' && bpRightBottom !== txRightBottom) mismatches.push(`우하: 청사진=${bpRightBottom} vs tex=${txRightBottom}`);
    if (mismatches.length > 0) {
      layoutOk = false;
      layoutMsg = mismatches.join(' · ');
    }
  }

  // 결과 출력
  if (slotOk && optionAOk && layoutOk) {
    console.log(`✅ ${page} · 완전 정합 (slot·옵션 A·세로 위치)`);
    continue;
  }

  console.log(`🔴 ${page} · 위반 감지`);
  console.log(`   청사진 content: [${bpContent.join(', ')}]`);
  console.log(`   tex content   : [${txContent.join(', ')}]`);
  if (!slotOk) {
    if (missing.length > 0) console.log(`   누락: ${missing.join(', ')}`);
    if (extra.length > 0) console.log(`   임의 추가 (RED): ${extra.join(', ')}`);
  }
  if (!optionAOk) {
    console.log(`   🔴 옵션 A 세로 우선 위반: ${optionAMsg}`);
    console.log(`      정정: probpair 인자 재조합 · 좌측 컬럼 = 낮은 두 번호 (Q1좌상·Q2좌하) · 우측 = 높은 두 (Q3우상·Q4우하)`);
  }
  if (!layoutOk) {
    console.log(`   🔴 세로 위치 불일치: ${layoutMsg}`);
  }
  redCount++;
}

console.log('');
if (redCount === 0) {
  console.log('✅ GREEN — 청사진 §8 완전 정합 (slot·옵션 A 세로 우선·세로 위치 모두)');
  console.log('   단일 출처: bank/시리즈-조판-지침-매핑.md §6 옵션 A');
  process.exit(0);
}

console.log(`🔴 RED — ${redCount}건 위반 · 정정 필수`);
console.log('   단일 출처: bank/청사진-스키마-v6.1.md §8 · bank/시리즈-조판-지침-매핑.md §6 옵션 A 세로 우선');
console.log('   옵션 A: 좌측 컬럼 완결 (Q1좌상→Q2좌하) 후 우측 (Q3우상→Q4우하) · 신문 컬럼 스타일');
process.exit(1);
