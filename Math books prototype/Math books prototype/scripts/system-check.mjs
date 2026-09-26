#!/usr/bin/env node
/**
 * system-check.mjs — 통합관리 시스템 착수 게이트
 *
 * 단일 출처: bank/통합관리-시스템-v1.md
 *
 * 왜 있는가 — 「도돌이표」를 기계로 막는다.
 * 세션 107 에서 이런 일이 있었다:
 *   · 정독 파일의 `citation_note` 한 줄을 보고 **저작권 제약을 발명**해
 *     「학평 앵커를 발췌본으로 못 만든다」고 단정 → 판정자에게 원문 PDF 를 열게 함 → 맹검 누수
 *   · 실제로는 `templates/style.sty` 에 `\probsource` 매크로가 있고 산출물에 이미 싣고 있었다
 *   · 즉 **완성된 시스템을 확인하지 않고 재해석**한 것이다
 *
 * 사용: node scripts/system-check.mjs [--verbose]
 * 종료코드: RED 가 있으면 1
 */

import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const R = (p) => path.join(ROOT, p);
const read = (p) => { try { return fs.readFileSync(R(p), 'utf8'); } catch { return null; } };
const VERBOSE = process.argv.includes('--verbose');

const issues = [];
const ok = [];
const RED = (c, m, f) => issues.push({ level: 'RED', c, m, f });
const AMBER = (c, m, f) => issues.push({ level: 'AMBER', c, m, f });

// ── 1. 통합관리 시스템 존재·배선 ─────────────────────────────────────────
const HUB = 'bank/통합관리-시스템-v1.md';
const hub = read(HUB);
if (!hub) RED('H0', `통합관리 시스템 파일 없음 — ${HUB}`, '모든 작업의 유일한 진입점이다. 복원하라');
else {
  ok.push('통합관리 시스템 존재');
  const claude = read('CLAUDE.md') || '';
  if (!claude.includes('통합관리-시스템')) {
    RED('H1', 'CLAUDE.md 가 통합관리 시스템을 가리키지 않는다',
      '배선이 없으면 시행되지 않는다. CLAUDE.md 최상단에 진입점을 건다');
  } else ok.push('CLAUDE.md 배선 있음');
  for (const key of ['재론 금지', '영역별 상태']) {
    if (!hub.includes(key)) AMBER('H2', `통합관리 시스템에 「${key}」 절이 안 보인다`, '§1·§2 를 확인하라');
  }
}

// ── 2. 🔴 재론 금지 위반 — 확정 사항을 뒤집는 서술이 있는가 ──────────────
// 도돌이표는 「완성된 것을 다시 제약으로 재해석」할 때 난다. 그 문장을 잡는다.
/**
 * 🔴 본문 문장을 정규식으로 판별하려던 첫 설계는 폐기했다.
 *
 * 실패 기록 — 같은 검사기가 양방향으로 다 틀렸다:
 *   · 1차: 「문번으로 평가하는 건 이미 다 삭제했다」처럼 **규칙을 바로 말하는 줄 4건을 위반으로 오탐**
 *   · 2차: 부정어 필터를 넓혔더니 「실을 수 **없다**」의 '없다'를 정답 표지로 읽어
 *          **주입한 진짜 위반을 놓쳤다**
 *
 * 한국어 산문의 긍정/부정을 키워드로 가르는 것은 불가능하다.
 * → **확정 사항이 「선언돼 있는가」를 확인하는 긍정 검사**로 바꾼다.
 *   문장이 사라지거나 뒤집히면 잡히고, 정상 서술을 오탐하지 않는다.
 */
const ASSERTIONS = [
  {
    c: 'F1', label: '교육청 기출 = 공개 자료 · 배포물 수록',
    file: 'bank/통합관리-시스템-v1.md',
    must: [/공개 자료/, /배포물에 싣는다|배포물.*싣/, /probsource/],
    fix: '통합관리 §2-A. 이 선언이 사라지면 다음 세션이 저작권 제약을 다시 발명한다',
  },
  {
    c: 'F2', label: '정답표 = 앵커 사다리',
    file: 'bank/앵커시스템-SSOT-v1.md',
    must: [/정답표는 사다리다/, /약한 사전분포/],
    fix: '앵커 SSOT §1·§4. 문번을 정답표로 되살리지 않기 위한 선언이다',
  },
  {
    c: 'F3', label: '완성/미완성 영역 구분',
    file: 'bank/통합관리-시스템-v1.md',
    must: [/조판/, /저작권/, /문항 난이도/, /재론 금지/, /마스터 확정/, /작업 규율/],
    fix: '통합관리 §1·§2. 무엇을 적용만 하고 무엇을 작업하는지 갈라야 도돌이표가 멈춘다',
  },
];
for (const a of ASSERTIONS) {
  const t = read(a.file);
  if (!t) { RED(a.c, `${a.file} 없음 — 「${a.label}」 선언을 확인할 수 없다`, a.fix); continue; }
  const miss = a.must.filter((re) => !re.test(t));
  if (miss.length) {
    RED(a.c, `${a.file} — 「${a.label}」 선언이 빠졌다 (${miss.length}/${a.must.length}개 표지 없음)`, a.fix);
  } else ok.push(`선언 확인: ${a.label}`);
}

// ── 3. 완성 영역 자산이 실재하는가 ───────────────────────────────────────
const ASSETS = [
  ['조판', 'templates/style.sty', /\\newcommand\{\\probsource\}/, '기출 출처 배지 매크로'],
  ['저작권', 'bank/이미지-저작권-정책.md', /1순위|우선순위/, '이미지 저작권 정책'],
  ['난이도', 'bank/앵커시스템-SSOT-v1.md', /동결 상수/, '앵커 시스템 SSOT'],
];
for (const [area, file, re, label] of ASSETS) {
  const t = read(file);
  if (!t) RED('A0', `${area} 영역 자산 없음 — ${file}`, `${label} 이 사라졌다. 복원하라`);
  else if (!re.test(t)) AMBER('A1', `${file} 에서 「${label}」 표지를 못 찾음`, '파일이 바뀌었는지 확인하라');
  else ok.push(`${area}: ${file}`);
}

// ── 4. 하위 검사 위임 — 앵커 시스템 불변식 ───────────────────────────────
let anchorOut = '';
try {
  anchorOut = execSync('node scripts/anchor-system-check.mjs', { cwd: ROOT, encoding: 'utf8' });
  ok.push('앵커 시스템 불변식 RED 0');
} catch (e) {
  anchorOut = (e.stdout || '') + (e.stderr || '');
  RED('X1', '앵커 시스템 불변식 검사 실패',
    'node scripts/anchor-system-check.mjs 를 따로 돌려 상세를 보라');
}

// ── 5. 하위 검사 위임 — 용어 (알아들을 수 있는 말로 쓰고 있는가) ─────────
// 🔴 마스터가 「코드명 쓰지 마라」를 여러 번 말했는데도 반복됐다.
//    까닭 — 규칙을 「남이 지킬 것」으로 설치했고, 설치한 행위가 지킨 것처럼 느껴졌다.
//    그래서 다짐이 아니라 검사로 옮긴다. 단일 출처: bank/용어-사전.md
try {
  execSync('node scripts/용어-검사.mjs', { cwd: ROOT, encoding: 'utf8' });
  ok.push('용어 검사 통과 — 쓰지 않기로 한 낱말 0곳');
} catch {
  AMBER('X2', '쓰지 않기로 한 낱말이 정본·도구 화면에 살아 있다',
    'node scripts/용어-검사.mjs 를 따로 돌려 상세를 보라. 단일 출처: bank/용어-사전.md');
}

// ── 출력 ─────────────────────────────────────────────────────────────────
const reds = issues.filter((i) => i.level === 'RED');
const ambers = issues.filter((i) => i.level === 'AMBER');

console.log('\n통합관리 시스템 — 착수 게이트');
console.log('단일 출처: ' + HUB);
console.log('='.repeat(76));
if (VERBOSE) { for (const o of ok) console.log(`  ✅ ${o}`); console.log('-'.repeat(76)); }
for (const i of [...reds, ...ambers]) {
  console.log(`\n${i.level === 'RED' ? '🔴 RED' : '🟠 AMBER'} [${i.c}] ${i.m}`);
  console.log(`   → ${i.f}`);
}
if (VERBOSE && anchorOut) {
  console.log('\n--- 앵커 시스템 검사 ---');
  console.log(anchorOut.split('\n').filter((l) => /통과|RED|✅|🔴/.test(l)).join('\n'));
}
console.log('\n' + '='.repeat(76));
console.log(`  통과 ${ok.length} · 🔴 RED ${reds.length} · 🟠 AMBER ${ambers.length}`);
if (!reds.length) {
  console.log('  ✅ 착수 가능.');
  console.log('  🔴 착수 전 확인: 내 작업이 §1 의 완성 영역인가 미완성 영역인가?');
  console.log('     완성 영역이면 판단하지 말고 단일 출처를 그대로 적용한다.');
  console.log('     제약이 있다고 느껴지면 §2 를 먼저 보고, 없으면 마스터에게 묻는다.');
} else {
  console.log('  🔴 RED 를 먼저 고친다. 작업에 착수하지 마라.');
}
console.log();
process.exit(reds.length ? 1 : 0);
