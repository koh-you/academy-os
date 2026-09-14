#!/usr/bin/env node
/**
 * graph-position-audit.mjs (v1.1 · 2026-08-03 세션 110)
 *
 * 🔴 정정 이력 (2026-08-03 세션 110) — 오탐을 고쳤다.
 *    증상: 재현-1회-문제.tex 17번 그림이 RED. 그런데 그림 바로 앞이 조건 상자다.
 *    까닭: **앞뒤 창을 원문에서 잡고 주석을 나중에 털었다.** 순서가 뒤집혀 있었다.
 *          그림 위에 붙은 설명 주석 여섯 줄(약 330자)이 400자 창을 다 먹어,
 *          실제 본문은 「형을 이룬다.」 열일곱 자만 남았다. 기준이 20자 초과라 RED 였다.
 *          주석을 먼저 털고 창을 잡으면 90자가 남아 통과한다.
 *    고침: 파일을 읽자마자 주석을 턴다. 줄바꿈은 남겨 줄 번호가 안 밀린다.
 *          `\%` (인쇄되는 퍼센트) 는 주석이 아니므로 살린다.
 *    🔴 남은 것 — **이 도구의 스코프는 답지다** (아래 「목적」이 그렇게 적고 있고,
 *       허용 위치 셋이 전부 풀이 흐름의 말이다). 문제지 삽화는 판정 대상이 아니다.
 *       훅이 문제지에도 돌리고 있다. 배선 문제이므로 여기서 고치지 않았다 — 마스터 확인 대기.
 *
 * 목적 : 답지 내 tikzpicture 위치 감사 (S7).
 *        허용 위치 : (a) 조건 정리 직후 (b) 케이스 분할 직전 (c) 결론 직전.
 *        비허용 위치 : 슬롯 최상단·최말단·랜덤 중간 등.
 *
 * 판정 규칙 (자동 감지 근사):
 *   RED    · tikzpicture 앞 문단이 매크로만 (본문 없음 · 최상단) → 위치 (a)/(b)/(c) 아님
 *   YELLOW · tikzpicture 뒤 문단이 매크로만 (다음 스텝 없음 · 최말단) → 위치 (c) 아님
 *   GREEN  · 앞 · 뒤 모두 한글 서술 존재 → 자연 배치
 *
 * 사용 :
 *   node scripts/graph-position-audit.mjs <file.tex> [<file.tex> ...]
 */
import { readFileSync } from 'node:fs';
import { basename } from 'node:path';

const TIKZ_RE = /\\begin\{tikzpicture\}[\s\S]*?\\end\{tikzpicture\}/g;

// 레이아웃 장식 tikz — S7(풀이 그래프 3위치) 대상이 아니므로 감사에서 제외.
// 헤더 세로 분할선·배경 로고 등은 [overlay,remember picture] 로 절대 배치되며
// 앞뒤에 본문 문단이 없는 것이 정상이다. 제외하지 않으면 전량 오탐이 되고,
// 오탐은 경보 피로를 만들어 게이트 자체를 무력화한다. (2026-07-30 세션 104)
const DECORATIVE_RE = /^\\begin\{tikzpicture\}\s*\[[^\]]*\b(overlay|remember\s+picture)\b/;

function hasHangulProse(text) {
  const clean = text
    .replace(/%[^\n]*/g, '')
    .replace(/\\[a-zA-Z]+\*?(\{[^{}]*\})*/g, '')
    .replace(/\$[^$]+\$/g, '')
    .trim();
  return /[가-힣]{2,}/.test(clean) && clean.length > 20;
}

/**
 * 주석을 턴다. 줄바꿈은 남긴다 — 줄 번호가 밀리면 안 된다.
 * `\%` 는 인쇄되는 퍼센트라 주석이 아니다.
 * 🔴 앞뒤 창을 잡기 **전에** 털어야 한다. 순서가 뒤집히면 주석이 창을 먹는다 (v1.1 정정).
 */
function 주석턴다(text) {
  return text.replace(/(?<!\\)%[^\n]*/g, '');
}

function scanFile(file) {
  const text = 주석턴다(readFileSync(file, 'utf-8'));
  const results = [];
  let m;
  TIKZ_RE.lastIndex = 0;
  while ((m = TIKZ_RE.exec(text)) !== null) {
    if (DECORATIVE_RE.test(m[0])) continue;   // 레이아웃 장식 — 감사 제외
    const start = m.index;
    const end = start + m[0].length;
    const lineNo = text.slice(0, start).split('\n').length;

    // 앞 300자 · 뒤 300자 컨텍스트
    const before = text.slice(Math.max(0, start - 400), start);
    const after = text.slice(end, Math.min(text.length, end + 400));

    const beforeHasProse = hasHangulProse(before);
    const afterHasProse = hasHangulProse(after);

    let verdict = 'GREEN';
    let reason = '앞뒤 본문 존재 · 자연 배치';
    if (!beforeHasProse) {
      verdict = 'RED';
      reason = '앞 문단 본문 부족 · 슬롯 최상단·랜덤 배치 의심';
    } else if (!afterHasProse) {
      verdict = 'YELLOW';
      reason = '뒤 문단 본문 부족 · 슬롯 최말단 (결론 직전으로 위치 (c) 인지 확인 요)';
    }
    results.push({ lineNo, verdict, reason });
  }
  return results;
}

async function main() {
    const args = process.argv.slice(2);
  const softMode = args.includes('--soft');
  const dirIdx = args.indexOf('--dir');
  let files;
  if (dirIdx >= 0) {
    const dir = args[dirIdx + 1];
    const fs = await import('node:fs');
    const path = await import('node:path');
    files = fs.readdirSync(dir).filter(f => /\.tex$/.test(f) && !f.includes('smoke')).map(f => path.join(dir, f));
  } else {
    files = args.filter(a => !a.startsWith('--'));
  }
  if (files.length === 0) {
    console.error('쓰기: node graph-position-audit.mjs <파일.tex> [...]');
    process.exit(2);
  }
  let redCount = 0, yellowCount = 0, greenCount = 0;
  console.log('🔍 그래프 위치 감사 (v1.0 · S7 정합)');
  for (const f of files) {
    const results = scanFile(f);
    if (results.length === 0) continue;
    console.log(`\n── ${basename(f)} (${results.length}건) ──`);
    for (const r of results) {
      const icon = r.verdict === 'RED' ? '🔴' : r.verdict === 'YELLOW' ? '🟡' : '✓';
      console.log(`  ${icon} L${r.lineNo} · ${r.reason}`);
      if (r.verdict === 'RED') redCount++;
      else if (r.verdict === 'YELLOW') yellowCount++;
      else greenCount++;
    }
  }
  console.log(`\n📊 요약: RED ${redCount} · YELLOW ${yellowCount} · GREEN ${greenCount}`);
  if (redCount > 0 && !softMode) process.exit(1);
}

main();
