#!/usr/bin/env node
/**
 * anchor-system-check.mjs — 앵커 시스템 불변식 자동 검사
 *
 * 단일 출처: bank/앵커시스템-SSOT-v1.md
 *
 * 왜 있는가 — 문서만 고치고 실물이 안 따라오는 사태를 막는다.
 * 세션 107 에서 실제로 이런 일들이 있었다:
 *   · 사다리 한 파일이 「18문」·「A5 5문」·「계 19문」 세 값을 동시에 말함
 *   · MEMORY.md 는 CM2 20문, 실물은 19문
 *   · 폐기된 문번→밴드 정답표가 규약 파일에 표시 없이 살아남아 되살아남
 *   · 관측값(0.042)이 통과선으로 승격돼 기준 행세
 *   · 시판 앵커가 학평 앵커와 같은 문항인 채로 두 밴드를 겸함
 *
 * 사용: node scripts/anchor-system-check.mjs [--verbose]
 * 종료코드: RED 가 하나라도 있으면 1
 */

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const R = (p) => path.join(ROOT, p);
const read = (p) => { try { return fs.readFileSync(R(p), 'utf8'); } catch { return null; } };

const VERBOSE = process.argv.includes('--verbose');
const issues = [];
const add = (level, code, msg, fix) => issues.push({ level, code, msg, fix });
const RED = (c, m, f) => add('RED', c, m, f);
const AMBER = (c, m, f) => add('AMBER', c, m, f);
const ok = [];

// ── SSOT 선언값 (bank/앵커시스템-SSOT-v1.md §2 와 일치해야 한다) ──────────
const SSOT = {
  file: 'bank/앵커시스템-SSOT-v1.md',
  bands: ['A1', 'A2', 'A3', 'A4', 'A5'],
  bandLabels: { A1: '★ 1~2', A2: '★ 3', A3: '★ 4', A4: '★ 5', A5: '★ 5 프리미엄' },
  ladders: {
    // 🔴 2026-08-03 — 19 → 24. 판정자 넷이 신고한 세 공백을 메웠다
    //    (서술형 없음 · A5 에 집합·명제 없음 · 짧은데 깊은 문항 견줄 자리 없음).
    //    근거: bank/measurements/앵커보강-CM2-서술형-v1.md · 마스터 확정 원칙 C8
    // 🔴 2026-08-03 (같은 날 · 세션 110) — 24 → 29. 판정자 셋이 신고한 「지문형이 하나도 없다」를 메웠다.
    //    근거: bank/measurements/앵커보강-CM2-지문형-v1.md · 같은 원칙 C8
    // 🔴 2026-08-04 세션 111 — 29 → 31. 와부고 지문형 둘을 보강했다 (A4h 인공위성 · A5g 태풍).
    //    근거: 판정자 셋이 **서로 모르는 채로** 「지문형에 견줄 자리가 없다」를 신고했다.
    //    실제로 와부고 실제 시험 17번이 값 5.17 인데 칸이 한 칸 아래로 떨어졌다.
    //    🔒 마스터 확정 — 「앵커 둘 다 앉히고 낡은 앵커 금지 기재도 지워」
    //    🔴 왜 와부고에서만 나오나 — 「지문이 긴 문항은 와부고만의 시그니처」(마스터).
    //       막는 단위는 학교가 아니라 회차다. 둘 다 1학기 기말이라 재현 회차와 겹치지 않는다.
    //    근거 문서: bank/measurements/앵커보강-와부고-지문형-v1.md
    // 🔴 2026-08-04 세션 112 — 31 → 32. 서술 하나를 보강했다 (A5h · 와부고 2023 2-기말 19번).
    //    근거: 판정자 셋이 또 서로 모르는 채로 「서술형이면서 읽을 것도 많은 문항을 견줄 자리가 없다」를 신고했다.
    //    A5 의 서술은 A5e(시판)와 A5f(정답 확인 못 함) 둘뿐이었다. A5h 는 정답이 확인된 학교 기출이다.
    //    맹검 재판정에서 판정자 셋이 5.6·5.6·5.6 — 일곱 중 가장 무거웠다.
    //    근거: bank/measurements/학교서술형-재판정-봉인표-7문-v1.md:36
    //    🔒 마스터 확정 — 후보 넷 가운데 「라 하나만」
    //    🔴 이것은 지문형이 아니다. 지문이 길어서가 아니라 소문항이 다섯이라 읽을 것이 많다.
    //       「서술형이면서 지문도 긴」 자리는 아직 비어 있다.
    CM2: { file: 'bank/anchors/깊이-앵커-사다리-v1.md', total: 32, perBand: { A1: 3, A2: 6, A3: 8, A4: 8, A5: 7 } },
    // 🔴 2026-08-04 세션 111 — A4 6→5 · A5 5→6. 총수 27 은 그대로다 (한 문항이 칸을 옮겼다).
    //    2025.3 고2 #21 이 A4e 에서 A5f 로 올라갔다.
    //    🔒 마스터 확정 — 「2025 3월 고2 21번은 ★ 5 프리미엄이야」
    //    실측이 먼저 같은 방향을 가리켰다 — bank/measurements/학평최상위-정독-2차-v1.md 에서
    //    판정한 사람이 이 문항을 사다리보다 한 칸 위로 읽고 어긋난다고 스스로 신고했다.
    CM1: { file: 'bank/anchors/깊이-앵커-사다리-CM1-v1.md', total: 27, perBand: { A1: 4, A2: 5, A3: 7, A4: 5, A5: 6 } },
  },
};

// ── 1. SSOT 파일 존재 ────────────────────────────────────────────────────
const ssotText = read(SSOT.file);
if (!ssotText) {
  RED('S0', `SSOT 파일이 없다 — ${SSOT.file}`, '앵커 시스템의 단일 진입점이다. 복원하라');
} else {
  ok.push('SSOT 파일 존재');
  for (const [subj, L] of Object.entries(SSOT.ladders)) {
    if (!ssotText.includes(String(L.total))) {
      AMBER('S1', `SSOT 에 ${subj} 문항 수 ${L.total} 가 안 보인다`, 'SSOT §2 동결 상수 표를 확인하라');
    }
  }
}

// ── 2. 사다리 실물 대조 — 선언한 수와 실제 행 수가 같은가 ────────────────
const ANCHOR_ROW = /^\|\s*~{0,2}\*{0,2}(A[1-5][a-z])\*{0,2}~{0,2}\s*\|/;
// 사다리마다 밴드 머리말 수준이 다르다 (CM2 는 ###, CM1 은 ##) — 둘 다 받는다
const BAND_HEAD = /^#{2,4}\s*(A[1-5])\s*—/;

for (const [subj, L] of Object.entries(SSOT.ladders)) {
  const text = read(L.file);
  if (!text) { RED('L0', `사다리 파일 없음 — ${L.file}`, '복원하라'); continue; }

  const lines = text.split(/\r?\n/);
  const found = {};       // band → [anchor labels]
  const sources = new Map(); // 출처 문자열 → [anchor labels]
  let curBand = null;

  for (const line of lines) {
    const h = BAND_HEAD.exec(line.trim());
    if (h) { curBand = h[1]; found[curBand] = found[curBand] || []; continue; }
    const m = ANCHOR_ROW.exec(line.trim());
    if (!m || !curBand) continue;
    if (/~~/.test(line)) continue;              // 취소선 = 폐기 행
    const label = m[1];
    found[curBand].push(label);

    // 출처 식별자를 만든다.
    // 표 형태가 둘이다 — 학평 표는 「회차 | 문번」이 따로 있고(A1a | 2025.3 | 4 | …),
    // 시판이 섞인 A5 표는 출처가 한 칸이다(A5a | 학평 2026.6 #30 | …).
    // 회차만으로 묶으면 같은 회차의 다른 문항이 전부 중복으로 잡힌다 — 반드시 문번까지 합친다.
    const cells = line.split('|').map((s) => s.trim()).filter(Boolean);
    const c1 = (cells[1] || '').replace(/\*/g, '').trim();
    const c2 = (cells[2] || '').replace(/\*/g, '').trim();
    const src = /^\d{1,2}$/.test(c2) ? `${c1} #${c2}` : c1;
    if (src) {
      const key = src.replace(/\s+/g, ' ');
      if (!sources.has(key)) sources.set(key, []);
      sources.get(key).push(`${subj} ${label}`);
    }
  }

  const total = Object.values(found).reduce((s, a) => s + a.length, 0);
  if (total !== L.total) {
    RED('L1', `${subj} 사다리 실제 앵커 ${total}문 ≠ SSOT 선언 ${L.total}문`,
      `${L.file} 의 행을 세어 SSOT §2 와 맞춰라. 둘 중 무엇이 옳은지 판단해 한쪽을 고친다`);
  } else ok.push(`${subj} 사다리 ${total}문 = SSOT 선언값`);

  for (const b of SSOT.bands) {
    const n = (found[b] || []).length;
    const want = L.perBand[b];
    if (n !== want) {
      RED('L2', `${subj} ${b} 실제 ${n}문 ≠ SSOT 선언 ${want}문`,
        `SSOT §2 「사다리 실물」 표와 ${L.file} 중 한쪽이 낡았다`);
    }
  }

  // 파일 안에서 자기 문항 수를 여러 값으로 말하는가 (세션 107 M1 사고)
  const claims = new Set();
  for (const m of text.matchAll(/사다리\s*—\s*(\d+)\s*문/g)) claims.add(m[1]);
  for (const m of text.matchAll(/계\s*\*{0,2}(\d+)\s*문/g)) claims.add(m[1]);
  if (claims.size > 1) {
    RED('L3', `${subj} 사다리 파일이 문항 수를 ${[...claims].join('·')} 로 여러 값 선언`,
      '한 파일이 세 값을 말하던 사고가 있었다. 하나로 통일하라');
  }

  // 같은 출처가 두 자리에 앉아 있는가 (A5d = A4c 사고)
  for (const [src, labels] of sources) {
    if (labels.length > 1) {
      RED('L4', `${subj} 같은 출처가 두 자리 — 「${src}」 → ${labels.join(' · ')}`,
        'SSOT §3-B. 한 문항이 두 밴드의 대표일 수 없다 — 그 경계는 정의상 0 이다');
    }
  }

  // 시판 앵커 출처 표기에 교재명이 있는가
  for (const [src, labels] of sources) {
    if (/STEP\s*3|STEP3/i.test(src) && !/고쟁이|블랙라벨|일품|절대등급|1등급/.test(src)) {
      RED('L5', `${subj} 시판 앵커 출처에 교재명이 없다 — 「${src}」 (${labels.join('·')})`,
        'SSOT §3-B 출처 표기 규격. 교재명이 빠지면 검증하는 쪽이 엉뚱한 파일을 보고 「없다」고 답한다');
    }
  }
}

// ── 3. 폐기 규칙이 되살아나 있는가 ───────────────────────────────────────
const DEPRECATED = [
  {
    code: 'D1',
    label: '문번 → 밴드 정답표',
    files: ['bank/학평-공통앵커-규약-v1.md'],
    // 표가 남아 있는 건 허용(기록). 폐기 표시가 없으면 RED
    needsMarker: /폐기|deprecated|쓰지 마라/,
    msg: '문번→밴드 표에 폐기 표시가 없다',
    fix: 'SSOT §4. 표는 기록으로 남기되 반드시 폐기 표시를 단다 — 표시가 없으면 다음 세션이 정답표로 되살린다',
  },
];
for (const d of DEPRECATED) {
  for (const f of d.files) {
    const t = read(f);
    if (!t) continue;
    if (!d.needsMarker.test(t)) RED(d.code, `${f} — ${d.msg}`, d.fix);
    else ok.push(`${d.label} 폐기 표시 있음`);
  }
}

// 관측값이 통과선으로 승격돼 있는가 (0.042)
const specText = read('bank/앵커견주기-판정-명세-v1.md');
if (specText && /0\.042\s*이하/.test(specText) && !/폐기|사전 등록/.test(specText)) {
  RED('D2', '명세에 통과선 0.042 가 폐기 표시 없이 살아 있다',
    'SSOT §4. 관측값을 통과선으로 승격하지 않는다 — 실험마다 사전 등록한다');
}

// ── 4. 메모리 인덱스와 실물 대조 ─────────────────────────────────────────
const MEM = 'C:/Users/user/.claude/projects/C--Users-user-OneDrive-Cluade-Projects-Math-books/memory/MEMORY.md';
let memText = null;
try { memText = fs.readFileSync(MEM, 'utf8'); } catch { /* 메모리 없으면 건너뛴다 */ }
if (memText) {
  const m = /CM2\s*\*{0,2}(\d+)\s*문/.exec(memText);
  if (m && Number(m[1]) !== SSOT.ladders.CM2.total) {
    RED('M1', `MEMORY.md 가 CM2 ${m[1]}문 이라 하는데 실물은 ${SSOT.ladders.CM2.total}문`,
      'MEMORY.md 는 매 세션 로드된다. 여기가 틀리면 세션 시작부터 틀린 값으로 간다');
  } else if (m) ok.push('MEMORY.md CM2 문항 수 일치');
  if (/밴드는\s*6단계|6밴드/.test(memText) && !/정정|5밴드|5단계/.test(memText)) {
    RED('M2', 'MEMORY.md 가 아직 6밴드라 한다', `밴드는 ${SSOT.bands.length}개다 (SSOT §2)`);
  }
}

// ── 5. 시험 부담 사다리 셋 ───────────────────────────────────────────────
// 🔴 2026-08-02 마스터 확정으로 「실행 부담 사다리」 한 파일(34문)을 요소별로 셋으로 갈랐다.
//    재는 것은 셋이다 — 연산 부담 · 해석·독해 부담 · 얽힘.
//      · 「손 가는 양」 + 「답의 지저분함」 → 「연산 부담」 (둘을 합쳤다)
//      · 「읽을 양」 → 「해석·독해 부담」 (개명)
//      · 「얽힘」 → 그대로
//    상세: bank/실행부담-축-정의-v1.md §2 · §2-0-2
//
// 왜 있는가 — 규칙이 문서에만 적혀 있으면 다음 세션이 칸을 채우다 조용히 깨뜨린다.
const BURDEN = {
  excerpt: 'bank/anchors/실행부담-발췌본-v1.md',
  bands: ['B1', 'B2', 'B3', 'B4', 'B5'],
  // 🔴 재는 것은 셋이다 (마스터 확정 2026-08-02).
  //    종전 배열의 '서술 요구' 는 2026-08-01 폐기, '답의 지저분함' 은 2026-08-02 연산 부담에 합쳤다.
  //    '읽을 양'·'손 가는 양' 은 이름이 바뀌었다.
  // 🔴🔴 2026-08-02 세션 109 — 얽힘을 접었다 (통합관리 C30).
  //    남은 둘은 **판정용 사다리가 아니라 보기집**이다. 안이 어긋나지 않는지만 본다.
  요소: ['연산 부담', '해석·독해 부담', '얽힘'],
  // 사다리 한 파일 = 요소 하나. 파일 안의 모든 행이 그 요소여야 한다.
  사다리: [
    { file: 'bank/anchors/연산부담-사다리-v1.md', 요소: '연산 부담' },
    { file: 'bank/anchors/해석독해부담-사다리-v1.md', 요소: '해석·독해 부담' },
    // 〔폐기 2026-08-02 세션 109〕 얽힘 사다리는 판정에 쓰지 않는다. 검사 대상에서 뺀다.
    // 파일은 기록으로 남아 있고, 아래 「얽힘이 되살아났는가」가 그 상태를 지킨다.
  ],
};

const bExcerpt = read(BURDEN.excerpt);

const B_HEAD = /^##\s*(B[1-5])\s*—\s*(.+?)\s*\((\d+)문\)/;
const B_ROW = /^\|\s*\*{0,2}(B[1-5][a-z])\*{0,2}\s*\|/;

const allRows = [];      // 세 사다리를 합친 전체
let 사다리없음 = 0;

for (const L of BURDEN.사다리) {
  const text = read(L.file);
  if (!text) {
    사다리없음++;
    RED('B0', `부담 사다리가 없다 — ${L.file}`,
      `2026-08-02 확정으로 사다리는 셋이다 (연산 부담 · 해석·독해 부담 · 얽힘). 복원하라`);
    continue;
  }

  const band = {};        // B1 → { declared, rows: [...] }
  let cur = null;
  for (const line of text.split(/\r?\n/)) {
    const t = line.trim();
    const h = B_HEAD.exec(t);
    if (h) { cur = h[1]; band[cur] = { declared: Number(h[3]), rows: [] }; continue; }
    const m = B_ROW.exec(t);
    if (!m || !cur) continue;
    if (/~~/.test(t)) continue;                       // 취소선 = 폐기 행
    const cells = t.split('|').map((s) => s.trim());
    const 출처 = (cells[2] || '').replace(/\*/g, '').trim();
    const 요소raw = (cells[3] || '').trim();
    const 아는요소 = BURDEN.요소.find((g) => 요소raw.includes(`**${g}**`))
      || BURDEN.요소.find((g) => 요소raw.startsWith(g));
    // 🔴 모르는 요소를 조용히 삼키면 안 된다.
    // 오타 하나(「연산부담」)로도 유령 요소가 생긴다.
    // 실측 2026-08-01: 없는 갈래 「시간 압박」을 심었더니 RED 0 으로 통과했다.
    const 요소 = 아는요소 || 요소raw.replace(/\*/g, '').split(/\s*\(/)[0].trim();
    const 학교 = 출처.split(/\s+/)[0] || '';
    band[cur].rows.push({ label: m[1], 출처, 요소, 학교, 아는요소: !!아는요소, file: L.file });
  }

  // 다섯 칸이 다 있는가 · 다 찼는가
  for (const b of BURDEN.bands) {
    if (!band[b]) {
      RED('B1', `${L.요소} 사다리에 ${b} 칸이 없다`, `${L.file} 에 다섯 칸이 다 있어야 한다`);
    } else if (band[b].rows.length === 0) {
      RED('B1', `${L.요소} 사다리의 ${b} 칸이 비어 있다`,
        `${L.file} — 다섯 칸이 전부 차 있어야 한다. 빈 칸은 견줄 자리가 없다는 뜻이다`);
    }
  }

  let 파일합 = 0;
  for (const [b, info] of Object.entries(band)) {
    파일합 += info.rows.length;
    allRows.push(...info.rows.map((r) => ({ ...r, band: b, 사다리: L.요소 })));

    // 머리말이 선언한 수 = 실제 행 수
    if (info.declared !== info.rows.length) {
      RED('B2', `${L.요소} 사다리 ${b} 머리말은 ${info.declared}문인데 실제 행은 ${info.rows.length}문`,
        `${L.file} 의 「## ${b} — … (N문)」 을 실제와 맞춰라. 칸을 채우고 머리말을 안 고치는 사고가 잦다`);
    }

    // 🔴 〔폐기 2026-08-02〕 「같은 칸에 같은 갈래 중복」 검사 (종전 규칙 B3) — 뺐다.
    //    폐기 사유: 사다리가 요소별로 갈라져 **한 사다리 안은 전부 같은 요소**다.
    //    그러므로 「같은 칸에 같은 요소가 둘」은 정상이고, 그것을 잡으면 모든 칸이 걸린다.
    //    이 규칙이 하던 일(「한 칸이 한 방향으로만 재지 않게」)은
    //    이제 **사다리를 셋으로 나눈 것 자체**가 대신한다.
    //    🔴 이 검사가 「답의 지저분함」 갈래를 칸마다 1문씩(1·1·1·1·1) 끼워 넣게 민 장본인이다 —
    //    그 분포는 발견이 아니라 규칙을 맞추려던 결과였다 (축 정의 §2-0-2).

    // 같은 칸에 같은 학교 — 🔴 RED 아님. 마스터 확정 2026-08-01 「학교가 겹치는 건 상관없다」.
    // 알려는 주되 착수를 막지 않는다.
    const s = {};
    for (const r of info.rows) (s[r.학교] = s[r.학교] || []).push(r.label);
    for (const [k, v] of Object.entries(s)) {
      if (v.length > 1) {
        AMBER('B4', `${L.요소} 사다리 ${b} 에 같은 학교가 둘 — 「${k}」 → ${v.join(' · ')}`,
          '마스터 확정으로 허용된다. 다만 그 칸이 한 학교의 출제 습관으로만 정의되지 않는지 확인하라');
      }
    }
  }

  // 파일 안의 모든 행이 그 파일의 요소인가
  const 딴요소 = [...new Set(allRows.filter((r) => r.file === L.file && r.요소 !== L.요소).map((r) => r.요소))];
  if (딴요소.length) {
    RED('B6', `${L.요소} 사다리에 딴 요소가 섞였다 — ${딴요소.map((g) => `「${g}」`).join(' · ')}`,
      `${L.file} 은 「${L.요소}」 만 담는다. 딴 요소면 그 요소의 사다리로 옮기고 두 파일의 머리말 수를 함께 고쳐라`);
  } else if (파일합) {
    ok.push(`${L.요소} 사다리 ${파일합}문 · 다섯 칸 다 참`);
  }
}

// 아래는 세 사다리를 **합쳐서** 보는 검사다 (같은 출처 두 자리 · 학교 쏠림 · 발췌본 짝).
// 셋 다 없으면 볼 것이 없으므로 건너뛴다.
if (사다리없음 < BURDEN.사다리.length) {

  // 같은 출처가 두 자리에 (깊이 사다리 L4 와 같은 사고)
  const bySrc = new Map();
  for (const r of allRows) {
    const k = r.출처.replace(/\s+/g, ' ');
    if (!k) continue;
    if (!bySrc.has(k)) bySrc.set(k, []);
    bySrc.get(k).push(`${r.band}${r.label.slice(2)}`);
  }
  for (const [src, labels] of bySrc) {
    if (labels.length > 1) {
      RED('B5', `부담 사다리에 같은 출처가 두 자리 — 「${src}」 → ${labels.join(' · ')}`,
        '한 문항이 두 칸의 대표일 수 없다. 그 경계는 정의상 0 이다');
    }
  }

  // 🔴 정의에 없는 요소가 들어와 있는가
  // 둘 중 하나다 — ⑴ 오타 ⑵ 진짜 넷째 요소 후보(승격 절차를 밟아야 한다).
  // 어느 쪽이든 **조용히 지나가면 안 된다.** 승격 절차: bank/실행부담-축-정의-v1.md §6
  const 모르는 = allRows.filter((r) => !r.아는요소);
  if (모르는.length) {
    const 종류 = [...new Set(모르는.map((r) => r.요소))];
    RED('B10', `부담 사다리에 정의에 없는 요소 — ${종류.map((g) => `「${g}」`).join(' · ')} ` +
      `(${모르는.map((r) => r.label).join('·')})`,
      '오타면 고쳐라. 진짜 새 요소라면 bank/실행부담-축-정의-v1.md §6 의 승격 절차를 밟고, ' +
      '이 검사기의 BURDEN.요소 배열과 BURDEN.사다리 목록에 등재하라');
  } else if (allRows.length) ok.push('부담 사다리 요소가 전부 정의 안에 있다');

  // 🔴 한 학교가 사다리를 지배하는가
  // 왜 재는가 — 공정함이 아니라 **옮겨 쓸 수 있는가**의 문제다.
  //   마스터 (2026-08-02): 「하나의 학교가 앵커를 지배하면 **다른 학교에 적용시켰을 때 안 맞아.**
  //                        다수의 학교로 만드는 게 좋을 것 같아.」
  // 🔴 종전에 축 정의 §4 가 「검사기가 비율 상한으로 잡는다」고 적어 놓고
  //    실제로는 **코드가 없었다** — 문서에만 적힌 규칙은 시행되지 않는다. 그래서 여기 배선한다.
  const 학교별 = {};
  for (const r of allRows) 학교별[r.학교] = (학교별[r.학교] || 0) + 1;
  const 학교수 = Object.keys(학교별).length;
  const [으뜸학교, 으뜸수] = Object.entries(학교별).sort((a, b) => b[1] - a[1])[0] || ['', 0];
  const 으뜸비율 = allRows.length ? Math.round((으뜸수 / allRows.length) * 100) : 0;

  // 🔴 40% 는 어시스턴트가 적은 값이고 마스터가 확정한 수치가 아니다.
  //    「지배하면 안 된다」는 원칙만 마스터 확정이다 (통합관리 §2 C10).
  const 상한 = 40;
  if (으뜸비율 > 상한) {
    AMBER('B11', `부담 사다리를 한 학교가 지배한다 — 「${으뜸학교}」 ${으뜸수}/${allRows.length}문 (${으뜸비율}%)`,
      `다른 학교에 갖다 댔을 때 안 맞게 된다. 다른 학교에서 앵커를 보강하라. ` +
      `(상한 ${상한}% 는 어시스턴트가 적은 값이다 — 마스터 확정 수치가 아니다)`);
  }
  if (학교수 && 학교수 < 5) {
    AMBER('B12', `부담 사다리의 학교가 ${학교수}곳뿐이다`,
      '마스터 확정: 「다수의 학교로 만드는 게 좋다」. 학교를 늘려라');
  }
  if (allRows.length) {
    ok.push(`부담 사다리 학교 ${학교수}곳 · 최다 「${으뜸학교}」 ${으뜸비율}%`);
  }

  // 세 요소가 전부 사다리를 갖는가
  const 등장 = new Set(allRows.map((r) => r.요소));
  const 빠진 = BURDEN.요소.filter((g) => !등장.has(g));
  if (빠진.length) {
    AMBER('B13', `사다리에 앵커가 하나도 없는 요소 — ${빠진.join(' · ')}`,
      'bank/실행부담-축-정의-v1.md §2 의 세 요소다. 앵커가 없으면 그 요소로 걸리는 문항을 견줄 데가 없다');
  } else if (allRows.length) ok.push(`세 요소 모두 사다리를 갖는다`);

  // 🔴 사다리 ↔ 발췌본 짝 — 발췌본에 없으면 채점자가 원본 시험지를 열게 되고 맹검이 샌다
  if (!bExcerpt) {
    RED('B7', `부담 발췌본이 없다 — ${BURDEN.excerpt}`,
      '발췌본이 없으면 채점자가 원본 시험지를 연다. 세션 107 에서 판정자 4인 전원이 맹검 누수를 신고한 사고가 있었다');
  } else {
    const exLabels = new Set([...bExcerpt.matchAll(/^##\s*(B[1-5][a-z])\s*—/gm)].map((m) => m[1]));
    const ladLabels = new Set(allRows.map((r) => r.label));
    // 🔴 2026-08-02 세션 109 — 접은 얽힘 사다리의 앵커도 발췌본에 그대로 있다.
    //    발문 전문은 요소와 무관하므로 **지우지 않는다**. 그래서 짝 검사에서 빼 준다.
    //    (빼 주지 않으면 36문이 전부 「사다리에 없는 앵커」로 잡힌다 — 헛것이다.)
    //    🔴 「옮긴 표」(옛 이름표 → 새 이름표)의 첫 칸도 같은 꼴이라 함께 긁힌다.
    //    그래서 **칸 머리말(## B1 —) 아래의 앵커 줄만** 읽는다.
    const 접은사다리 = read('bank/anchors/얽힘-사다리-v1.md') || '';
    let 칸안 = false;
    for (const line of 접은사다리.split(/\r?\n/)) {
      const t = line.trim();
      if (/^##\s*B[1-5]\s*—/.test(t)) { 칸안 = true; continue; }
      if (/^##\s/.test(t)) { 칸안 = false; continue; }
      if (!칸안 || /~~/.test(t)) continue;
      const m = /^\|\s*\*{0,2}(B[1-5][a-z])\*{0,2}\s*\|/.exec(t);
      if (m) ladLabels.add(m[1]);
    }
    const 없는발췌 = [...ladLabels].filter((l) => !exLabels.has(l));
    const 유령발췌 = [...exLabels].filter((l) => !ladLabels.has(l));
    if (없는발췌.length) {
      RED('B8', `사다리에 있는데 발췌본에 없는 앵커 — ${없는발췌.join(' · ')}`,
        '발췌본을 함께 갱신하라. 빠지면 그 문항만 채점자가 원본을 열게 되어 맹검이 샌다');
    }
    if (유령발췌.length) {
      RED('B9', `발췌본에만 있고 사다리에 없는 앵커 — ${유령발췌.join(' · ')}`,
        '사다리에서 뺀 앵커의 발췌가 남아 있다. 폐기했으면 발췌도 지우거나 폐기 표시를 달아라');
    }
    if (!없는발췌.length && !유령발췌.length && ladLabels.size) {
      ok.push(`부담 사다리 ${ladLabels.size}문 = 발췌본 ${exLabels.size}문 (짝 완전)`);
    }
  }

  if (allRows.length) ok.push(`부담 사다리 ${allRows.length}문 파싱됨`);
}

// ── 6. 앵커와 맹검지에 같은 문항이 들어 있는가 ───────────────────────────
// 왜 보는가 — 판정자는 판정하기 전에 앵커 사다리를 읽는다.
//   맹검지에 앵커와 같은 문항이 들어 있으면, 판정자가 그 문항의 값을 미리 알고 만다.
//   재는 뜻이 없어진다.
//
// 🔴 2026-08-02 에 실제로 그런 일이 있었다.
//   맹검지를 먼저 만들고, 그 뒤에 앵커를 보강하면서 이미 맹검지에 든 문항을 앵커로 올렸다.
//   판정을 세 번 돌리는 동안 판정자 넷이 각각 그 사실을 신고했다.
//   대조는 사람이 기억해야 하는 일이었고, 그래서 빠졌다. 여기에 배선한다.
const 맹검봉인 = 'bank/measurements/부담-본검정-봉인표-20문-v1.md';
const 봉인글 = read(맹검봉인);

if (봉인글) {
  /** 「와부고 2022 1학기 기말 논술형4 (19번)」 → 학교·연도·학기·시기·번호들 */
  const 쪼개기 = (s) => {
    const 학교 = (s.match(/([가-힣]{2,4}(?:여고|고|중))/) || [])[1] || '';
    const 연도 = (s.match(/(20\d{2})/) || [])[1] || '';
    const 학기 = (s.match(/([12])학기/) || [])[1] || '';
    const 시기 = /기말/.test(s) ? '기말' : /중간/.test(s) ? '중간' : '';
    // 숫자를 전부 걷는다 — 「논술형4 (19번)」이면 4 와 19 를 둘 다 본다
    const 번호 = [...s.matchAll(/(\d{1,2})\s*번|형\s*(\d{1,2})/g)].map((m) => m[1] || m[2]).filter(Boolean);
    return { 학교, 연도, 학기, 시기, 번호: new Set(번호), 원문: s.trim() };
  };

  // 맹검지에 든 문항들 (봉인표에서 읽는다)
  const 맹검문항 = [];
  for (const line of 봉인글.split(/\r?\n/)) {
    const m = /^\|\s*(Q\d{2})\s*\|([^|]+)\|/.exec(line.trim());
    if (!m) continue;
    if (/뺐다|제외|폐기/.test(line)) continue;      // 이미 뺀 것은 넘어간다
    맹검문항.push({ 문항: m[1], ...쪼개기(m[2]) });
  }

  // 앵커 세 사다리의 출처
  const 앵커목록 = [];
  for (const L of BURDEN.사다리) {
    const t = read(L.file); if (!t) continue;
    for (const line of t.split(/\r?\n/)) {
      const m = /^\|\s*\*{0,2}(B[1-5][a-z])\*{0,2}\s*\|([^|]+)\|/.exec(line.trim());
      if (!m || /~~/.test(line)) continue;
      앵커목록.push({ 이름: m[1], ...쪼개기(m[2].replace(/\*/g, '')) });
    }
  }

  let 같은문항 = 0, 같은시험지 = 0;
  for (const b of 맹검문항) {
    for (const a of 앵커목록) {
      if (a.학교 !== b.학교 || a.연도 !== b.연도) continue;
      if (a.학기 !== b.학기 || a.시기 !== b.시기) continue;
      const 겹친번호 = [...a.번호].filter((x) => b.번호.has(x));
      if (겹친번호.length) {
        RED('B13', `맹검지 ${b.문항} 과 앵커 ${a.이름} 이 같은 문항이다 — 「${a.원문}」`,
          '판정자는 판정 전에 사다리를 읽는다. 값을 미리 알게 되므로 재는 뜻이 없다. ' +
          '맹검지에서 그 문항을 빼고 다른 것으로 갈아 끼워라');
        같은문항++;
      } else {
        AMBER('B14', `맹검지 ${b.문항} 과 앵커 ${a.이름} 이 같은 시험지다 — 「${a.원문}」`,
          '문항은 다르지만 판정자가 그 시험지의 다른 문항을 앵커로 보고 있다. 짐작이 갈 수 있다');
        같은시험지++;
      }
    }
  }
  if (맹검문항.length && !같은문항) {
    ok.push(`맹검지 ${맹검문항.length}문 가운데 앵커와 같은 문항 없음`);
  }
}

// ── 7. 접은 것이 되살아났는가 (2026-08-02 세션 109) ───────────────────────
// 🔴 왜 있는가 — 세션 106 에 접은 점수 체계가 세션 107·108 에 두 번 되살아났다.
//    문서에 「폐기」라고 적는 것만으로는 안 막힌다. 검사기가 지킨다.
{
  const 통합 = read('bank/통합관리-시스템-v1.md');
  const 사전 = read('bank/용어-사전.md');

  // (1) 판정은 하나다 — C29 가 살아 있는가
  if (통합 && !/\|\s*\*\*C29\*\*\s*\|/.test(통합)) {
    RED('E1', '통합관리에 C29(판정은 하나다)가 없다',
      '판정 질문은 「어느 앵커와 같은 급인가」 하나다. 깊이·연산 부담·해석·독해 부담 셋을 보고 하나를 정한다');
  } else if (통합) ok.push('C29 살아 있음 — 판정은 하나');

  // (2) 얽힘이 되살아났는가
  if (통합 && !/\|\s*\*\*C30\*\*\s*\|/.test(통합)) {
    RED('E2', '통합관리에 C30(얽힘·짜임은 접었다)이 없다',
      '되살리려면 실험 결과를 인용해야 한다. 그냥 지우면 다음 세션이 다시 만든다');
  }
  const 얽힘사다리 = read('bank/anchors/얽힘-사다리-v1.md');
  if (얽힘사다리 && !/폐기\s*—\s*판정에 쓰지 않는다/.test(얽힘사다리.slice(0, 1500))) {
    RED('E3', '얽힘 사다리에서 폐기 표시가 사라졌다',
      'bank/anchors/얽힘-사다리-v1.md 머리에 「폐기 — 판정에 쓰지 않는다」가 있어야 한다');
  } else if (얽힘사다리) ok.push('얽힘 사다리 폐기 표시 살아 있음');

  // (3) 네 값을 다시 매기고 있는가
  const 한눈에 = read('bank/난이도-측정-시스템-한눈에-v1.md');
  if (한눈에 && /^\s*\*\*한 문항에 네 개의 값을 매긴다/m.test(한눈에)) {
    RED('E4', '한눈에 문서가 아직 「네 개의 값」이라 한다',
      '판정자가 내놓는 값은 하나다 (C29). 셋은 왜 그렇게 보이는지 말하는 낱말이다');
  }

  // (4) 마스터가 쓰지 말라 한 낱말이 사전에 올라 있는가
  if (사전 && !/가르다|가른다/.test(사전)) {
    RED('E5', '용어 사전에 「가르다」가 등재돼 있지 않다',
      '마스터가 쓰지 말라 한 낱말은 사전 + 검사기 두 곳에 넣는다 (사전 §규칙 4)');
  } else if (사전) ok.push('쓰지 않기로 한 낱말이 사전에 등재돼 있음');
}

// ── 출력 ─────────────────────────────────────────────────────────────────
const reds = issues.filter((i) => i.level === 'RED');
const ambers = issues.filter((i) => i.level === 'AMBER');

console.log('\n앵커 시스템 불변식 검사');
console.log('단일 출처: ' + SSOT.file);
console.log('='.repeat(76));

if (VERBOSE && ok.length) {
  for (const o of ok) console.log(`  ✅ ${o}`);
  console.log('-'.repeat(76));
}

for (const i of [...reds, ...ambers]) {
  console.log(`\n${i.level === 'RED' ? '🔴 RED' : '🟠 AMBER'} [${i.code}] ${i.msg}`);
  console.log(`   → ${i.fix}`);
}

console.log('\n' + '='.repeat(76));
console.log(`  통과 ${ok.length} · 🔴 RED ${reds.length} · 🟠 AMBER ${ambers.length}`);
if (reds.length === 0) {
  console.log('  ✅ 불변식 유지됨 — 시스템이 선언한 대로 서 있다.');
} else {
  console.log('  🔴 RED 가 있으면 앵커·판정 작업에 착수하지 마라. 먼저 고친다.');
}
console.log();
process.exit(reds.length ? 1 : 0);
