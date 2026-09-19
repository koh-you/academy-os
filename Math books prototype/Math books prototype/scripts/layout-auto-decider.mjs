#!/usr/bin/env node
// layout-auto-decider — 시험지 layout 자동 결정 도구
// v3.1 (2026-07-13 · 세션 38 후반부 · 방안 J) — 슬롯 편차 σ > 10mm 시 pair 재배치 자동 시도 or grid 전환
// v3.0 (2026-07-13 · 세션 38 사후) — golden-layout-registry 1순위 통합 (골든 관행 우선)
// v2.0 (2026-07-14 · 세션 38) — figures 필드 · 특수 요소 · 선택형 layout 분기 개선
// v1.0 (2026-07-14 · 세션 37) — 최초 구현
//
// 목적:
//   청사진 YAML slots[]의 문항 정보 (유형·choices·특수 요소·figures·sub_questions)에서
//   각 문항 자연 크기 예측 → 페이지별 배치 결정 → probpair 계열 macro 선택 →
//   서답형 sub vspace 자동 계산 (마스터 공식 X = (H_L - H_R) / (N_R - N_L))
//
// 사용법:
//   node scripts/layout-auto-decider.mjs <청사진.yaml>              # dry-run 리포트
//   node scripts/layout-auto-decider.mjs <청사진.yaml> --write      # 파일 갱신
//   node scripts/layout-auto-decider.mjs <문제.tex> --from-tex      # tex 역분석
//
// v2.0 청사진 슬롯 지원 필드 (선택 사항):
//   figures: [{type: tikz|includegraphics, height_mm: N, source?: str}]
//   has_conditions: true         # \begin{conditions} 박스
//   has_bogibox: true            # \begin{bogibox}
//   has_definition_box: true     # tcolorbox [정의 · ...]
//   narrative_length_chars: N    # 지문형 발문 char 수 (긴 소재 설명)
//   sub_questions: N             # 서답형 sub 개수 (미명시 시 answer/type에서 (1)(2)(3) 카운트)
//   layout_hint: probpair|probpairfillpage|probgridfour  # 저자 강제 오버라이드
//
//   top-level figures: [{slot: N, ...}]는 하위 호환 (slots[]에 병합 처리)
//
// 반환: 0 GREEN / 1 RED / 2 오용
//
// 관련: feedback_layout_auto_decider · feedback_probpair_balance_algorithm
//       exam-layout-analyzer.mjs (사후 감사) · style.sty §probpair

import fs from 'node:fs';
import path from 'node:path';

// ── golden-layout-registry 로드 (v3.0, 1순위 참조) ─────
function loadGoldenRegistry() {
  const candidates = [
    'bank/golden-layout-registry.yaml',
    './bank/golden-layout-registry.yaml',
    path.join(process.cwd(), 'bank/golden-layout-registry.yaml'),
  ];
  for (const p of candidates) {
    if (fs.existsSync(p)) {
      const src = fs.readFileSync(p, 'utf8');
      return parseGoldenRegistry(src);
    }
  }
  return null;
}

function parseGoldenRegistry(src) {
  // 간이 YAML 파서 (관행 6종 · CM1·CM2 각 선택형 page_1~3)
  const registry = { CM1: { 선택형: {} }, CM2: { 선택형: {} } };
  const lines = src.split('\n');
  let currentSubject = null;
  let currentSection = null;
  for (const line of lines) {
    const subjectMatch = line.match(/^(CM[12]):/);
    if (subjectMatch) { currentSubject = subjectMatch[1]; currentSection = null; continue; }
    if (!currentSubject) continue;
    const sectionMatch = line.match(/^  (선택형|서술형):/);
    if (sectionMatch) { currentSection = sectionMatch[1]; continue; }
    if (!currentSection) continue;
    const pageMatch = line.match(/^    (page_[123]):\s*(.+)$/);
    if (pageMatch && !line.includes('override')) {
      registry[currentSubject][currentSection][pageMatch[1]] = pageMatch[2].trim().replace(/#.*$/, '').trim();
    }
  }
  return registry;
}

// registry lookup: 과목·페이지 번호로 golden macro 조회
// override 조건: special_element_count · stddev_mm
function goldenLookup(registry, subject, section, pageN, specialCount, stddev) {
  if (!registry || !registry[subject] || !registry[subject][section]) return null;
  const key = `page_${pageN}`;
  const base = registry[subject][section][key];
  if (!base) return null;
  // page_3 override: 특수요소 ≥ 2 or 편차 > 15
  if (pageN === 3 && section === '선택형') {
    if (specialCount >= 2 || stddev > 15) {
      return { macro: 'probpair×2 + \\vfill', reason: 'page_3 override (특수요소·편차)' };
    }
  }
  return { macro: base, reason: 'registry 관행' };
}

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Usage: node scripts/layout-auto-decider.mjs <청사진.yaml|문제.tex> [--write] [--from-tex]');
  process.exit(2);
}
const inputPath = args[0];
const writeMode = args.includes('--write');
const fromTex = args.includes('--from-tex') || /\.tex$/i.test(inputPath);

if (!fs.existsSync(inputPath)) {
  console.error(`❌ 파일 없음: ${inputPath}`);
  process.exit(2);
}

// ── 페이지 크기 상수 ─────────────────────────────────────
const PAGE_USABLE = 215;    // B5 pagepair 최대 세로 usable (mm)
const SPLIT_THRESH = 200;   // 서답형 단독 판정: 자연 크기가 이 값 초과 시 pair 불가
                            // (한 컬럼 최대 215mm 안에 다른 슬롯도 담을 수 있어야 pair)
const SELECT_GRID_STDDEV_MAX = 8;  // 선택형 grid 판정 최대 편차 (mm)
const SELECT_SPECIAL_MAX = 0;      // grid 허용 특수 요소 개수

// ── 1. YAML 파싱 (slots[] 다중 줄 지원 + 필드별 안전 파서) ────
function parseYamlStructure(src) {
  const selectMatch = src.match(/section:\s*선택형[^}]*slots:\s*(\d+)/);
  const essayMatch = src.match(/section:\s*(서술형|서답형)[^}]*slots:\s*(\d+)/);
  return {
    selectCount: selectMatch ? parseInt(selectMatch[1]) : 0,
    essayCount: essayMatch ? parseInt(essayMatch[2]) : 0,
  };
}

function extractFieldNum(raw, name) {
  const m = raw.match(new RegExp(`\\b${name}:\\s*(\\d+)`));
  return m ? parseInt(m[1]) : null;
}
function extractFieldBool(raw, name) {
  const m = raw.match(new RegExp(`\\b${name}:\\s*(true|false)`));
  return m ? m[1] === 'true' : false;
}
function extractFieldStr(raw, name) {
  // 값 지원: "quoted string" · unquoted identifier · empty
  const m = raw.match(new RegExp(`\\b${name}:\\s*(?:"([^"]*)"|([A-Za-z][A-Za-z0-9_-]*))`));
  if (!m) return '';
  return m[1] !== undefined ? m[1] : (m[2] || '');
}

function parseYamlSlots(src) {
  const slots = [];
  const lines = src.split('\n');
  let inSlots = false;
  let bufferLines = [];

  const flush = () => {
    if (bufferLines.length === 0) return;
    const raw = bufferLines.join(' ');
    const n = extractFieldNum(raw, 'n');
    if (n === null) { bufferLines = []; return; }
    const type = extractFieldStr(raw, 'type');
    const answer = extractFieldStr(raw, 'answer');
    const answerNote = extractFieldStr(raw, 'answer_note');
    const narrativeLen = extractFieldNum(raw, 'narrative_length_chars');
    const subDeclared = extractFieldNum(raw, 'sub_questions');
    const hasConditions = extractFieldBool(raw, 'has_conditions');
    const hasBogibox = extractFieldBool(raw, 'has_bogibox');
    const hasDefBox = extractFieldBool(raw, 'has_definition_box');
    const layoutHint = extractFieldStr(raw, 'layout_hint');
    const composite = extractFieldNum(raw, 'composite');
    const star = extractFieldNum(raw, 'star');
    // figures: [{type: tikz, height_mm: 55}, ...] 간이 파서 (JSON-like 인라인)
    const figures = [];
    const figuresBlock = raw.match(/\bfigures:\s*\[([^\]]*)\]/);
    if (figuresBlock) {
      const items = figuresBlock[1].match(/\{[^}]*\}/g) || [];
      for (const it of items) {
        const h = extractFieldNum(it, 'height_mm');
        const t = extractFieldStr(it, 'type');
        if (h) figures.push({ type: t || 'includegraphics', height_mm: h });
      }
    }
    // sub 개수: 명시 없으면 answer 문자열에서 "(1)"·"(2)" 등 카운트
    let subCount = subDeclared;
    if (subCount === null) {
      const subMatches = [...(answer || type || '').matchAll(/\((\d+)\)/g)];
      subCount = subMatches.length;
    }

    slots.push({
      n,
      type, answer, answerNote,
      narrativeLen: narrativeLen || 0,
      subCount: subCount || 0,
      hasConditions, hasBogibox, hasDefBox,
      figures,
      layoutHint,
      composite, star,
      raw,
    });
    bufferLines = [];
  };

  for (const line of lines) {
    if (/^slots:\s*$/.test(line)) { inSlots = true; continue; }
    if (inSlots) {
      // 다음 top-level section 시작 시 종료
      if (/^[a-zA-Z_]/.test(line) && !/^\s+/.test(line)) {
        flush();
        inSlots = false;
        continue;
      }
      // 새 슬롯 시작: `  - {n: N, ...`  (계속 라인 포함)
      if (/^\s+-\s*\{/.test(line)) {
        flush();
        bufferLines = [line];
      } else if (bufferLines.length > 0) {
        bufferLines.push(line);
      }
    }
  }
  flush();
  return slots;
}

// top-level figures: [{slot: N, ...}] 병합 (하위 호환)
function mergeTopLevelFigures(src, slots) {
  // top-level figures 블록만 (indented `-` 시작으로 시작하는 리스트) 추출
  const topFigMatch = src.match(/^figures:\s*\n((?:\s+-\s+\{[^\n]*\n)+)/m);
  if (!topFigMatch) return;
  const block = topFigMatch[1];
  const items = block.split(/\n\s+-\s+/).filter(Boolean);
  for (const it of items) {
    const slotN = extractFieldNum(it, 'slot');
    const h = extractFieldNum(it, 'height_mm');
    if (slotN === null) continue;
    const target = slots.find(s => s.n === slotN);
    if (target) {
      target.figures.push({ type: 'includegraphics', height_mm: h || 55 });
    }
  }
}

// ── 2. tex 역분석 (문제.tex → slot 정보) ────
// slot 경계: \begin{problem}{N}{s} 시작 → 다음 \begin{problem} 또는 \clearpage/\end{document} 종료
// (v2.0 수정: probpairfillpage 매크로 안에서 소문항이 \end{problem} 뒤에 오는 패턴 대응)
function parseTex(src) {
  const lines = src.split('\n');
  const slots = [];
  let current = null;

  const closeCurrent = () => {
    if (!current) return;
    const text = current.body.join(' ').replace(/\\[a-zA-Z]+/g, ' ').replace(/\{[^{}]*\}/g, ' ');
    current.narrativeLen = text.replace(/\s+/g, '').length;
    slots.push(current);
    current = null;
  };

  for (let ln = 0; ln < lines.length; ln++) {
    const line = lines[ln];
    // \begin{problem}{N}{s|f|blank}
    const probStart = line.match(/\\begin\{problem\}\{(\d+)\}\{([^}]*)\}/);
    if (probStart) {
      closeCurrent();
      current = {
        n: parseInt(probStart[1]),
        secondArg: probStart[2],
        isEssay: probStart[2] === 's',
        body: [],
        hasConditions: false,
        hasBogibox: false,
        hasDefBox: false,
        choicesType: null,
        subCount: 0,
        subVspaces: [],
        subVspaceElastic: [],
        points: null,
        figures: [],
        narrativeLen: 0,
      };
    }
    if (current) {
      current.body.push(line);
      if (line.includes('\\begin{conditions}')) current.hasConditions = true;
      if (line.includes('\\begin{bogibox}')) current.hasBogibox = true;
      if (line.includes('\\begin{tcolorbox}') || /\[정의/.test(line)) current.hasDefBox = true;
      const chMatch = line.match(/\\begin\{(choices\w*)\}/);
      if (chMatch) current.choicesType = chMatch[1];
      const chSingleMatch = line.match(/\\begin\{(choicesii|choices32|choicesv)\}\{/);
      if (chSingleMatch) current.choicesType = chSingleMatch[1];
      const ptsMatch = line.match(/\\pts\{(\d+)\}/);
      if (ptsMatch) current.points = parseInt(ptsMatch[1]);
      const subMatch = line.match(/\\textbf\{\((\d+)\)\}/);
      if (subMatch) current.subCount++;
      const vsMatch = line.match(/\\vspace\*?\{(\d+)mm(\s+plus\s+\d*fill)?/);
      if (vsMatch && current.subCount > current.subVspaces.length) {
        current.subVspaces.push(parseInt(vsMatch[1]));
        current.subVspaceElastic.push(!!vsMatch[2]);
      }
      const incMatch = line.match(/\\includegraphics\[([^\]]*)\]\{([^}]+)\}/);
      if (incMatch) {
        const opts = incMatch[1];
        let h = 55;
        const wMatch = opts.match(/width=(\d*\.?\d+)\\linewidth/);
        if (wMatch) h = Math.round(parseFloat(wMatch[1]) * 55);
        current.figures.push({ type: 'includegraphics', height_mm: h, file: incMatch[2] });
      }
      if (line.includes('\\begin{tikzpicture}')) {
        current.figures.push({ type: 'tikz', height_mm: 45 });
      }
    }
    // slot 경계: 다음 \begin{problem}·\clearpage·\end{pagepair}·\end{document}
    if (current && (line.includes('\\clearpage') || line.includes('\\end{document}'))) {
      closeCurrent();
    }
  }
  closeCurrent();
  return slots;
}

// ── 3. 자연 크기 예측 (mm) ─────────────────────────────
function estimateHeightSlot(slot) {
  let h = 12; // 헤더·번호

  // 본문 텍스트: narrativeLen 우선, 아니면 answer_note 길이 활용
  const bodyChars = slot.narrativeLen || (slot.answerNote || slot.raw || '').length * 0.4;
  const cols = 40;  // 좁은 컬럼 40자
  h += Math.max(3, Math.round(bodyChars / cols)) * 4.5;

  if (slot.hasConditions) h += 22;
  if (slot.hasBogibox) h += 22;
  if (slot.hasDefBox) h += 25;

  // figures
  if (slot.figures && slot.figures.length) {
    for (const f of slot.figures) h += f.height_mm + 5;  // caption 여백
  }

  const chType = slot.choicesType;
  if (chType === 'choices') h += 8;
  else if (chType === 'choices32') h += 20;
  else if (chType === 'choicesii') h += 28;
  else if (chType === 'choicesv') h += 38;

  // 서답형 sub: (1)(2)(3) 각 답안 공간 ≈ 40~55mm
  h += (slot.subCount || 0) * 45;

  return Math.round(h);
}

function classify(h) {
  if (h < 90) return 'SMALL';
  if (h < 150) return 'MEDIUM';
  if (h < PAGE_USABLE) return 'LARGE';
  return 'XL';
}

function stddev(nums) {
  if (nums.length === 0) return 0;
  const mean = nums.reduce((a, b) => a + b, 0) / nums.length;
  const sq = nums.reduce((a, b) => a + (b - mean) ** 2, 0) / nums.length;
  return Math.sqrt(sq);
}

// ── 4. 페이지 배치·layout 결정 ────────────────────────
function decideLayouts(slots, subject = 'CM2') {
  const pages = [];
  const registry = loadGoldenRegistry();

  // 서답형 판정: subCount ≥ 1 → 서답형
  const selectSlots = slots.filter(s => (s.subCount || 0) === 0);
  const essaySlots = slots.filter(s => (s.subCount || 0) > 0);

  // ── 선택형: registry 1순위, 알고리즘 fallback ──
  // v3.1 · 편차 σ > 10mm 시 pair 조합 최적화 시도 (파트너 편차 최소화)
  for (let i = 0; i < selectSlots.length; i += 4) {
    const grp = selectSlots.slice(i, i + 4);
    let heights = grp.map(estimateHeightSlot);
    let sd = stddev(heights);
    const specialCount = grp.filter(s => s.hasConditions || s.hasBogibox || s.hasDefBox || s.figures.length).length;
    const pageN = pages.length + 1;
    const forceHint = grp.find(s => s.layoutHint === 'probgridfour') ? 'probgridfour'
                    : grp.find(s => s.layoutHint === 'probpair') ? 'probpair×2'
                    : null;

    // v3.1 · 편차 σ > 10mm 시 4문 재배치 최적화 (pair 편차 최소 조합 탐색)
    let optimizedOrder = null;
    if (sd > 10 && grp.length === 4 && !forceHint) {
      // 3 가지 pair 조합: (0,1)(2,3) · (0,2)(1,3) · (0,3)(1,2)
      const combos = [
        [[0, 1], [2, 3]],
        [[0, 2], [1, 3]],
        [[0, 3], [1, 2]],
      ];
      let bestCombo = null, bestPairMaxDiff = Infinity;
      for (const combo of combos) {
        const pairDiffs = combo.map(([a, b]) => Math.abs(heights[a] - heights[b]));
        const maxDiff = Math.max(...pairDiffs);
        if (maxDiff < bestPairMaxDiff) { bestPairMaxDiff = maxDiff; bestCombo = combo; }
      }
      // 원 순서와 다르면 재배치 · pairs 편차 개선 시 채택
      if (bestPairMaxDiff <= 15) {
        // 재배치 순서로 grp 재정렬 (문항 번호는 유지, 시각 배치만 조정)
        optimizedOrder = [
          bestCombo[0][0], bestCombo[0][1],
          bestCombo[1][0], bestCombo[1][1],
        ];
      }
    }

    let layout, notes;
    if (grp.length !== 4) {
      layout = grp.length === 2 ? '\\probpair' : 'single';
      notes = `선택형 ${grp.length}문 잔여 · 마지막 페이지 하단`;
    } else if (forceHint) {
      layout = forceHint === 'probgridfour' ? '\\probgridfour' : '\\probpair×2 + \\vfill';
      notes = `layout_hint 오버라이드 · 편차 σ=${sd.toFixed(1)}mm · 특수요소 ${specialCount}`;
    } else {
      // 🌟 1순위: golden-layout-registry 조회
      const goldenPreset = goldenLookup(registry, subject, '선택형', pageN, specialCount, sd);
      if (goldenPreset) {
        layout = goldenPreset.macro;
        notes = `🌟 golden-registry [${subject}/선택형/page_${pageN}] · ${goldenPreset.reason} · σ=${sd.toFixed(1)}mm · 특수요소 ${specialCount}`;
        // v3.1 · 편차 σ > 10mm 시 정책 위반 경고 및 재배치 or grid 전환 안내
        if (sd > 10 && layout.includes('probpair×2')) {
          // 원 순서 pair 편차
          const origPairDiff = Math.max(Math.abs(heights[0] - heights[1]), Math.abs(heights[2] - heights[3]));
          if (optimizedOrder) {
            const newOrder = optimizedOrder.map(idx => grp[idx].n);
            const newHeights = optimizedOrder.map(idx => heights[idx]);
            const newPairDiff = Math.max(Math.abs(newHeights[0] - newHeights[1]), Math.abs(newHeights[2] - newHeights[3]));
            if (newPairDiff < origPairDiff) {
              notes += `\n      ⚠️ policy-slot-size-uniform 위반 (σ ${sd.toFixed(1)}mm > 10). 원 pair 편차 ${origPairDiff}mm → 재배치 제안 [${newOrder.join(', ')}] pair 편차 ${newPairDiff}mm`;
            } else {
              notes += `\n      ⚠️ policy-slot-size-uniform 위반 (σ ${sd.toFixed(1)}mm > 10). 재배치 개선 없음 · 문항 크기 조정 or grid 강제 필요`;
            }
          } else {
            notes += `\n      ⚠️ policy-slot-size-uniform 위반 (σ ${sd.toFixed(1)}mm > 10). 재배치 불가 · 문항 크기 조정 or grid 강제 필요`;
          }
        }
      } else if (sd <= SELECT_GRID_STDDEV_MAX && specialCount <= SELECT_SPECIAL_MAX) {
        layout = '\\probgridfour';
        notes = `⚙️ 알고리즘 fallback · 균등 grid · σ=${sd.toFixed(1)}mm ≤ ${SELECT_GRID_STDDEV_MAX}`;
      } else {
        layout = '\\probpair×2 + \\vfill';
        notes = `⚙️ 알고리즘 fallback · 편차 큼/특수요소 · σ=${sd.toFixed(1)}mm, 슬롯 ${specialCount}개`;
      }
    }

    pages.push({
      page_n: pageN,
      type: '선택형',
      slots: grp.map(s => s.n),
      layout_macro: layout,
      notes,
      heights,
    });
  }

  // ── 서답형: 크기 기반 페어링 vs 단독 페이지 분할 ──
  const essayQueue = [...essaySlots];
  while (essayQueue.length > 0) {
    const left = essayQueue.shift();
    const leftH = estimateHeightSlot(left);

    // 단독 판정: 크기 초과 OR figures 있음 OR 지문 길이 큼 OR layoutHint 강제
    const forceSingle = left.layoutHint === 'probpairfillpage'
      || leftH > SPLIT_THRESH
      || left.figures.length > 0
      || left.hasDefBox
      || left.narrativeLen > 250;

    if (forceSingle) {
      // 단독 페이지 · 좌(intro+conditions/figures)/우(sub) 분할
      pages.push({
        page_n: pages.length + 1,
        type: '서답형',
        slots: [left.n],
        layout_macro: '\\probpairfillpage',
        notes: `${left.n}번 ${leftH}mm 단독 · 좌(intro+정의/조건/그림) · 우(sub ${left.subCount}개, \\vfill 균등)` +
               (left.figures.length ? ` · 그림 ${left.figures.reduce((a, f) => a + f.height_mm, 0)}mm` : '') +
               (left.hasDefBox ? ' · 정의박스' : '') +
               (left.narrativeLen > 250 ? ` · 지문 ${left.narrativeLen}자` : ''),
        left_slot: left.n,
        right_slot: null,
      });
    } else {
      // 다음 슬롯이 forceSingle 조건이면 pair 안 하고 left 단독
      const nextSlot = essayQueue[0];
      if (nextSlot) {
        const nextH = estimateHeightSlot(nextSlot);
        const nextForceSingle = nextSlot.layoutHint === 'probpairfillpage'
          || nextH > SPLIT_THRESH
          || nextSlot.figures.length > 0
          || nextSlot.hasDefBox
          || nextSlot.narrativeLen > 250;
        if (nextForceSingle) {
          // left는 단독, next는 다음 iteration에서 처리
          pages.push({
            page_n: pages.length + 1,
            type: '서답형',
            slots: [left.n],
            layout_macro: '\\probpairfillpage',
            notes: `${left.n}번 ${leftH}mm 단독 · 파트너 슬롯 ${nextSlot.n}이 forceSingle → 페어 취소`,
            left_slot: left.n,
            right_slot: null,
          });
          continue;
        }
      }
      const right = essayQueue.shift();
      if (right) {
        const rightH = estimateHeightSlot(right);
        const diff = Math.abs(leftH - rightH);
        const N_L = left.subCount || 0;
        const N_R = right.subCount || 0;
        let macro = '\\probpair';
        let sub_vspace = null;

        if (N_L !== N_R && (N_R - N_L) !== 0) {
          const X = Math.round((leftH - rightH) / (N_R - N_L));
          if (X > 0 && X < 80) {
            macro = '\\probpairtight';
            sub_vspace = X;
          }
        }
        if (diff > 30 && sub_vspace === null) {
          macro = '\\probpairequal';
        }
        pages.push({
          page_n: pages.length + 1,
          type: '서답형',
          slots: [left.n, right.n],
          layout_macro: macro,
          notes: `좌 ${left.n}번 ${leftH}mm (sub ${N_L}) · 우 ${right.n}번 ${rightH}mm (sub ${N_R})` +
                 (sub_vspace ? ` · vspace X=${sub_vspace}mm (균등 공식)` : ''),
          left_slot: left.n,
          right_slot: right.n,
          sub_vspace,
        });
      } else {
        pages.push({
          page_n: pages.length + 1,
          type: '서답형',
          slots: [left.n],
          layout_macro: '\\probpairfillpage',
          notes: `${left.n}번 단독 (마지막 서답형)`,
        });
      }
    }
  }
  return pages;
}

// ── 5. 실행 ─────────────────────────────────────
const src = fs.readFileSync(inputPath, 'utf8');
let slots;
if (fromTex) {
  slots = parseTex(src);
} else {
  slots = parseYamlSlots(src);
  mergeTopLevelFigures(src, slots);

  const structure = parseYamlStructure(src);
  const selectN = structure.selectCount || Math.floor(slots.length * 0.7);
  for (const s of slots) {
    if (s.n <= selectN) {
      s.subCount = 0;
      if (!s.choicesType) {
        s.choicesType = 'choices';
        if (/ㄱ.*ㄴ.*ㄷ/.test(s.type)) s.choicesType = 'choicesii';
      }
    } else if (s.subCount === 0) {
      // 서답형인데 sub 필드 없으면 기본 3
      s.subCount = 3;
    }
  }
}

console.log('🎯 layout-auto-decider v2.0');
console.log(`   입력: ${inputPath}`);
console.log(`   모드: ${fromTex ? 'tex 역분석' : 'YAML 청사진'}`);
console.log(`   슬롯: ${slots.length}개\n`);

console.log('📊 슬롯 자연 크기 예측');
console.log('   #  | 예상 | 분류    | 요소                                       | 유형');
console.log('   ───┼──────┼─────────┼────────────────────────────────────────────┼──────');
for (const s of slots) {
  const h = estimateHeightSlot(s);
  const elements = [];
  if (s.hasConditions) elements.push('cond');
  if (s.hasBogibox) elements.push('bogi');
  if (s.hasDefBox) elements.push('def');
  if (s.figures.length) elements.push(`fig×${s.figures.length}(${s.figures.reduce((a, f) => a + f.height_mm, 0)}mm)`);
  if (s.subCount) elements.push(`sub×${s.subCount}`);
  if (s.narrativeLen) elements.push(`narr${s.narrativeLen}`);
  const elStr = elements.join(',').padEnd(42);
  console.log(`   ${String(s.n).padStart(2)} | ${String(h).padStart(4)}mm | ${classify(h).padEnd(7)} | ${elStr.slice(0, 42)} | ${(s.type || '').slice(0, 30)}`);
}

// 과목 판정: 청사진 range.units에서 CM1/CM2 추출 (fromTex 시 파일 경로에서 판정)
const subject = (() => {
  if (fromTex) return /공통수학1|CM1/.test(inputPath) ? 'CM1' : 'CM2';
  const m = src.match(/units:\s*\[([^\]]+)\]/);
  if (m) return /CM1/.test(m[1]) ? 'CM1' : 'CM2';
  return 'CM2';
})();

const pages = decideLayouts(slots, subject);
console.log('\n📖 페이지별 layout 권장');
for (const p of pages) {
  console.log(`   [Page ${p.page_n}] ${p.type} · ${p.layout_macro} · slots [${p.slots.join(', ')}]`);
  console.log(`      ${p.notes}`);
}

if (writeMode && !fromTex) {
  console.log('\n⚠️  --write 모드: 청사진 slots[]에 layout·page·partner·sub_vspace 필드 삽입 안내');
  console.log('   YAML in-place 갱신은 파괴적 편집 위험 → 현재는 dry-run 리포트만 제공.');
  for (const p of pages) {
    if (p.slots.length === 2 && p.layout_macro.includes('probpair')) {
      console.log(`     → slot ${p.slots[0]}: {layout: "${p.layout_macro}", page: ${p.page_n}, partner: ${p.slots[1]}${p.sub_vspace ? `, sub_vspace: ${p.sub_vspace}` : ''}}`);
      console.log(`     → slot ${p.slots[1]}: {layout: "${p.layout_macro}", page: ${p.page_n}, partner: ${p.slots[0]}}`);
    } else if (p.slots.length === 4) {
      for (const s of p.slots) console.log(`     → slot ${s}: {layout: "${p.layout_macro}", page: ${p.page_n}}`);
    } else {
      console.log(`     → slot ${p.slots[0]}: {layout: "${p.layout_macro}", page: ${p.page_n}}`);
    }
  }
}

console.log('\n=== 요약 ===');
const gridPages = pages.filter(p => p.layout_macro === '\\probgridfour').length;
const pairX2Pages = pages.filter(p => p.layout_macro.includes('probpair×2')).length;
const pairFillPages = pages.filter(p => p.layout_macro.includes('probpairfillpage')).length;
const pairPages = pages.filter(p => p.layout_macro === '\\probpair' || p.layout_macro === '\\probpairtight' || p.layout_macro === '\\probpairequal').length;
console.log(`   페이지 ${pages.length}쪽 · grid ${gridPages} · pair×2 ${pairX2Pages} · pair(서답형) ${pairPages} · fillpage(단독) ${pairFillPages}`);
console.log(`   layout macros: ${[...new Set(pages.map(p => p.layout_macro))].join(', ')}`);

console.log('\n=== 관련 자원 ===');
console.log('   exam-layout-analyzer.mjs (사후 감사) · style.sty §probpair 계열 8종');
console.log('   feedback_probpair_balance_algorithm (마스터 공식 X = (H_L - H_R) / (N_R - N_L))');
console.log('   feedback_layout_auto_decider v2.0');

process.exit(0);
