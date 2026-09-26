#!/usr/bin/env node
// blueprint-score-validator — 청사진 스코어 자동 검증 도구
// v2.1 (2026-07-13 · 세션 38 후반부 · 방안 I) — policy-slot-size-uniform 검사 편입 (선택형 pair×2 편차 σ ≤ 10mm)
// v2.0 (2026-07-13 · 세션 38 후반부 · 방안 E) — master-policy-registry 로드 · 정책 강제 (policy-star-5-only 등)
// v1.1 (2026-07-13 · 세션 38 사후 튜닝) — 청사진 필드 확장 활용
// v1.0 (2026-07-13 · 세션 38 사후 · 방안 B) — 최초 신설
//
// 목적:
//   청사진 slots[]의 명시 composite (v5.1 8축)가 실제 문항 (answer_note·풀이 단계)과 정합하는지 검증.
//   저자 즉흥 배정 차단 · 앵커 비교 자동화.
//
// 사용법:
//   node scripts/blueprint-score-validator.mjs <청사진.yaml>
//
// 검증 알고리즘:
//   1. 각 슬롯 answer_note 파싱 → 풀이 단계 수·연산 종류·논리 결합 자동 산출
//   2. v5.1 8축 자동 산출:
//      - N (지문·narrative 길이): narrative_length_chars → 0/1/2/3
//      - L (논리·layer 결합): answer_note의 "다음"·"→"·"⟹" 카운트 → 0/1/2/3
//      - T (변환·transformation 수): "대칭"·"평행"·"회전"·"치환" 어구 카운트 → 0/1/2/3
//      - H (힌트 존재): 지문에 힌트 어구 → 0/1
//      - R (regularity/구조): 접선·자취·궤적 어구 → 0/1/2/3
//      - F (학문 정확성): 조건 수·정의 명확성 → 0/1/2/3
//      - E (조건 필수성): 조건 개수·독립성 → 0/1/2/3
//      - P (예측 저항성): 답 형식·역방향 어구 → 0/1/2/3
//      - composite = N + L + T - H + R + F + E + P
//   3. 청사진 명시 composite vs 자동 산출 대조
//      - |gap| ≤ 3: ✅ GREEN
//      - |gap| = 4~7: 🟡 YELLOW (재조정 권장)
//      - |gap| > 7: 🔴 RED (즉시 재조정 필요)
//
// 앵커 비교 (선택):
//   bank/anchors/{CM1|CM2}-{unit}.md 로드 → 같은 star·같은 통찰 유형 앵커 2문 자동 검색
//
// 반환: 0 GREEN / 1 YELLOW · RED / 2 오용

import fs from 'node:fs';

// ── master-policy-registry 로드 (v2.0, 방안 E) ──────
function loadPolicyRegistry() {
  const candidates = [
    'bank/master-policy-registry.md',
    './bank/master-policy-registry.md',
  ];
  for (const p of candidates) {
    if (fs.existsSync(p)) return fs.readFileSync(p, 'utf8');
  }
  return null;
}

// 활성 정책 파싱 (### policy-{id} 헤더 기준)
function parseActivePolicies(src) {
  if (!src) return {};
  const policies = {};
  if (/policy-star-5-only/.test(src)) {
    policies['star-5-only'] = { id: 'policy-star-5-only', scope: '와부고 시리즈' };
  }
  if (/policy-no-structure-repetition/.test(src)) {
    policies['no-structure-repetition'] = { id: 'policy-no-structure-repetition' };
  }
  if (/policy-slot-size-uniform/.test(src)) {
    policies['slot-size-uniform'] = {
      id: 'policy-slot-size-uniform',
      description: '선택형 pair×2 페이지 편차 σ ≤ 10mm',
      threshold_mm: 10,
    };
  }
  return policies;
}

// 슬롯 자연 크기 자동 산출 (layout-auto-decider와 동일 로직)
function estimateSlotMm(slot) {
  let h = 12;
  const bodyChars = slot.narrativeLen || (slot.answerNote || '').length * 0.4;
  h += Math.max(3, Math.round(bodyChars / 40)) * 4.5;
  if (slot.hasConditions) h += 22;
  if (slot.hasBogibox) h += 22;
  if (slot.hasDefBox) h += 25;
  if (slot.figures && slot.figures.length) for (const f of slot.figures) h += (f.height_mm || 55) + 5;
  const chType = slot.choicesType || '';
  if (chType === 'choicesii') h += 28;
  else if (chType === 'choicesv') h += 38;
  else if (chType === 'choices32') h += 20;
  else h += 8;
  h += (slot.subCount || 0) * 45;
  return Math.round(h);
}

function stddev(nums) {
  if (nums.length === 0) return 0;
  const mean = nums.reduce((a, b) => a + b, 0) / nums.length;
  const sq = nums.reduce((a, b) => a + (b - mean) ** 2, 0) / nums.length;
  return Math.sqrt(sq);
}

// 청사진 파일이 와부고 시리즈인지 판정
function isWabuSeries(inputPath, src) {
  if (/와부고|wabu/i.test(inputPath)) return true;
  if (/school:\s*와부고/.test(src)) return true;
  return false;
}

// 🔴 재현(SIMULATOR [와부]) 시리즈 판별 — 2026-07-30 세션 105 신설
//    policy-star-5-only 는 「완성도 낮은 시스템으로 작성 연습할 때 난이도를 확보하기 위한
//    고육지책」이었고 마스터가 적용을 종료했다 (bank/master-policy-registry.md 최상단).
//    재현 시리즈에 적용하면 루브릭 D1(이중 봉우리)·D3(난이도 밀도)와 정면 충돌한다 —
//    실기출 밀도(하1·중6·상6·최상4)를 재현해야 하므로 ★ 2·3·4 슬롯이 필수다.
//    경로·본문 어느 쪽에서든 재현임이 드러나면 이 정책을 건너뛴다.
function isReproSeries(inputPath, src) {
  if (/재현|SIMULATOR/i.test(inputPath)) return true;
  if (/series_type:\s*(재현|repro)/.test(src)) return true;
  if (/SIMULATOR\s*\[와부\]/.test(src)) return true;
  return false;
}


const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Usage: node scripts/blueprint-score-validator.mjs <청사진.yaml>');
  process.exit(2);
}
const inputPath = args[0];
if (!fs.existsSync(inputPath)) {
  console.error(`❌ 파일 없음: ${inputPath}`);
  process.exit(2);
}

// ── slot 파싱 (간이 YAML) ──────────────────────
function parseSlots(src) {
  const slots = [];
  const lines = src.split('\n');
  let inSlots = false;
  let buf = [];

  const flush = () => {
    if (!buf.length) return;
    const raw = buf.join(' ');
    const nM = raw.match(/\bn:\s*(\d+)/);
    if (!nM) { buf = []; return; }
    const num = (name) => { const m = raw.match(new RegExp(`\\b${name}:\\s*(-?\\d+)`)); return m ? parseInt(m[1]) : null; };
    const str = (name) => { const m = raw.match(new RegExp(`\\b${name}:\\s*(?:"([^"]*)"|([A-Za-z][\\w-]*))`)); return m ? (m[1] !== undefined ? m[1] : m[2]) : ''; };
    // 확장 필드 (v1.1)
    // constraints: [...] 카운트 (constraint_count 없어도 직접 카운트)
    const constraintsBlock = raw.match(/\bconstraints:\s*\[([\s\S]*?)\]/);
    let constraintCount = num('constraint_count') || 0;
    if (!constraintCount && constraintsBlock) {
      constraintCount = (constraintsBlock[1].match(/\{[^}]*id:/g) || []).length;
    }
    // secondary_tools: [...] 카운트
    const secondaryBlock = raw.match(/\bsecondary_tools:\s*\[([^\]]*)\]/);
    const secondaryCount = secondaryBlock ? (secondaryBlock[1].match(/[\w-]+/g) || []).length : 0;
    // answer의 (1)(2)(3) 소문항 카운트
    const answerStr = str('answer');
    const subCount = num('sub_questions') || ((answerStr.match(/\(\d+\)/g) || []).length);
    // layout_hint (지문형 마커)
    const layoutHint = str('layout_hint');
    // narrative_theme
    const narrativeTheme = str('narrative_theme');
    // related_standards 카운트 (통찰 다중성)
    const relatedBlock = raw.match(/\brelated_standards:\s*\[([^\]]*)\]/);
    const relatedCount = relatedBlock ? (relatedBlock[1].match(/10수/g) || []).length : 0;
    // I-XU·I-CON 등 통찰 코드 (type 문자열에서 카운트)
    const typeStr = str('type');
    const insightCount = (typeStr.match(/I-[A-Z]+/g) || []).length;
    // v2.1 · 슬롯 특수 요소 및 estimated_mm
    const hasConditions = /\bhas_conditions:\s*true/.test(raw);
    const hasBogibox = /\bhas_bogibox:\s*true/.test(raw);
    const hasDefBox = /\bhas_definition_box:\s*true/.test(raw);
    // choices 유형 감지 (청사진에는 없지만 answer 어구로 추정)
    let choicesType = 'choices';
    if (/[ㄱㄴㄷㄹ]/.test(answerStr)) choicesType = 'choicesii';
    // estimated_mm: 청사진 명시 or 자동 산출
    const estMmDeclared = num('estimated_mm');
    // pointsMm 필드 (v2.1) — 청사진 명시 우선
    const pointsMatch = num('points');

    slots.push({
      n: parseInt(nM[1]),
      type: typeStr,
      answer: answerStr,
      answerNote: str('answer_note'),
      narrativeLen: num('narrative_length_chars') || 0,
      narrativeTheme,
      unit: str('unit'),
      primaryTool: str('primary_tool'),
      points: pointsMatch,
      secondaryCount,
      constraintCount,
      subCount,
      hasConditions, hasBogibox, hasDefBox,
      choicesType,
      estMmDeclared,
      layoutHint,
      relatedCount,
      insightCount,
      composite: num('composite'),
      star: num('star'),
      // v5.1 8축 명시값
      N: num('N'), L: num('L'), T: num('T'), H: num('H'),
      R: num('R'), F: num('F'), E: num('E'), P: num('P'),
      raw,
    });
    buf = [];
  };

  for (const line of lines) {
    if (/^slots:\s*$/.test(line)) { inSlots = true; continue; }
    if (inSlots) {
      if (/^[a-zA-Z_]/.test(line) && !/^\s+/.test(line)) { flush(); inSlots = false; continue; }
      if (/^\s+-\s*\{/.test(line)) { flush(); buf = [line]; }
      else if (buf.length) buf.push(line);
    }
  }
  flush();
  return slots;
}

// ── v5.1 8축 자동 산출 (v1.1 튜닝: 청사진 확장 필드 활용) ────
function estimateAxes(slot) {
  const note = slot.answerNote || '';
  const type = slot.type || '';
  const answer = slot.answer || '';
  const theme = slot.narrativeTheme || '';

  // N: narrative_length_chars 기반 (+ narrative_theme·layout_hint 보조)
  let N = 0;
  if (slot.narrativeLen > 400) N = 3;
  else if (slot.narrativeLen > 250) N = 2;
  else if (slot.narrativeLen > 100) N = 1;
  // 지문형 마커 있으면 +1
  if (theme && N < 3) N += 1;

  // L: 풀이 단계 결합 (answer_note + subCount 반영)
  const combineText = note + ' ' + answer;
  const arrowCount = (combineText.match(/→|⟹|따라서|이므로|→|=/g) || []).length;
  const stepCount = (combineText.match(/\.|,/g) || []).length;
  // 소문항 (1)(2)(3) 각각이 논리 단계 · subCount ≥ 3 시 L=3 기본
  let L = 0;
  if (slot.subCount >= 3) L = 3;
  else if (slot.subCount >= 2) L = 2;
  else {
    const layerScore = arrowCount + Math.floor(stepCount / 3);
    if (layerScore >= 6) L = 3;
    else if (layerScore >= 4) L = 2;
    else if (layerScore >= 2) L = 1;
  }

  // T: 변환 어구 (대칭·평행·회전·치환·역·이·대우)
  const transformKeywords = ['대칭', '평행', '회전', '치환', '이동', '대우', '역방향'];
  const tCount = transformKeywords.reduce((a, k) => a + (combineText.split(k).length - 1 + type.split(k).length - 1 + theme.split(k).length - 1), 0);
  let T = 0;
  if (tCount >= 4) T = 3;
  else if (tCount >= 2) T = 2;
  else if (tCount >= 1) T = 1;

  // H: 힌트 어구
  const hasHint = /이용하여|이용해서|다음의?\s*결과|~를 이용/.test(note) ? 1 : 0;
  const H = hasHint;

  // R: 구조·정칙성 어구 (접선·자취·궤적·수직이등분·외심·내심·무게중심·중점·평행이동·근축)
  const rKeywords = ['접선', '자취', '궤적', '수직이등분', '외심', '내심', '무게중심', '중점', '근축', '접점', '접함'];
  const rCount = rKeywords.reduce((a, k) => a + (type.split(k).length - 1 + note.split(k).length - 1 + theme.split(k).length - 1), 0);
  let R = 0;
  if (rCount >= 3) R = 3;
  else if (rCount >= 2) R = 2;
  else if (rCount >= 1) R = 1;

  // F: 학문 정확성 (정의박스 · 지문 길이 · related_standards 다중)
  const hasDefBox = slot.layoutHint === 'probpairfillpage' || /정의|정칙|성질/.test(note) ? 1 : 0;
  const relatedBonus = slot.relatedCount >= 2 ? 1 : 0;
  let F = hasDefBox + relatedBonus;
  if (slot.narrativeLen > 300) F += 1;
  F = Math.min(F, 3);

  // E: 조건 개수 (constraints 배열 명시 · secondary_tools 카운트 · sub 개수 참고)
  const cCount = slot.constraintCount || slot.subCount || ((note.match(/조건|만족/g) || []).length);
  let E = 0;
  if (cCount >= 3) E = 3;
  else if (cCount >= 2) E = 2;
  else if (cCount >= 1) E = 1;

  // P: 예측 저항성 (역방향·자취·모든·insight_count 다중)
  const pKeywords = /역|모든|임의|자취|어떤|최소|최대|최댓값|최솟값/g;
  const pCount = (type.match(pKeywords) || []).length + (note.match(pKeywords) || []).length + (theme.match(pKeywords) || []).length;
  let P = 0;
  if (pCount >= 4) P = 3;
  else if (pCount >= 2) P = 2;
  else if (pCount >= 1) P = 1;
  // insight_count ≥ 3 시 P 보정
  if (slot.insightCount >= 3 && P < 3) P += 1;

  const composite = N + L + T - H + R + F + E + P;
  return { N, L, T, H, R, F, E, P, composite };
}

// ── 정점 자격 판정 (v1.2 · 정책 star-5-only 감안 튜닝) ────
// 마스터 정책상 모든 슬롯 star=5 · composite ≥ 24가 default
// 자격 기준은 문항 정합성 검사 · 지나치게 엄격하면 정책 준수와 상충
function checkPremiumEligibility(slot) {
  const criteria = {
    narrative: slot.narrativeLen > 200 || !!slot.narrativeTheme,  // 완화 250→200
    constraints: slot.constraintCount >= 2,  // 완화 3→2
    insights: slot.insightCount >= 2,  // 완화 3→2
    subQuestions: slot.subCount >= 2,  // 완화 3→2
    layoutFillpage: slot.layoutHint === 'probpairfillpage' || slot.layoutHint === 'probpair',
    secondaryTools: slot.secondaryCount >= 1,
    hasSpecialElement: slot.hasConditions || slot.hasBogibox,  // 신규 추가
  };
  const passCount = Object.values(criteria).filter(v => v).length;
  // 7기준 중 3+ 통과 (완화 · 최소 문항 정합성 확인 목적)
  return { passCount, criteria, eligible: passCount >= 3 };
}

// ── 실행 ─────────────────────────────────────
const src = fs.readFileSync(inputPath, 'utf8');
const slots = parseSlots(src);

// v2.0 · 정책 등재부 로드·활성 정책 검사
const registrySrc = loadPolicyRegistry();
const activePolicies = parseActivePolicies(registrySrc);
const isWabu = isWabuSeries(inputPath, src);
let policyViolations = [];

// v2.1 · 각 슬롯 estimated_mm 자동 산출 (청사진 명시 없으면)
for (const s of slots) {
  s.estimated_mm = s.estMmDeclared || estimateSlotMm(s);
}

// policy-slot-size-uniform 검사 (와부고 시리즈만) — 선택형 pair×2 페이지 편차 σ ≤ 10mm
if (isWabu && activePolicies['slot-size-uniform']) {
  const selectSlots = slots.filter(s => (s.subCount || 0) === 0);
  const violations = [];
  for (let i = 0; i < selectSlots.length; i += 4) {
    const grp = selectSlots.slice(i, i + 4);
    if (grp.length !== 4) continue;
    const heights = grp.map(s => s.estimated_mm);
    const sd = stddev(heights);
    if (sd > 10) {
      violations.push({
        page: Math.floor(i / 4) + 1,
        slots: grp.map(s => s.n),
        heights,
        sigma: sd.toFixed(1),
      });
    }
  }
  if (violations.length > 0) {
    policyViolations.push({
      policy: 'policy-slot-size-uniform',
      count: violations.length,
      details: violations.map(v => ({
        n: `page ${v.page}`,
        type: `슬롯 [${v.slots.join(', ')}] 크기 편차 σ=${v.sigma}mm (임계 10mm 초과)`,
        heights: v.heights,
      })),
    });
  }
}

// policy-star-5-only 검사 (와부고 시리즈만 · 🔴 재현 시리즈는 제외)
const isRepro = isReproSeries(inputPath, src);
if (isRepro) {
  console.log('ℹ️  policy-star-5-only 건너뜀 — 재현 시리즈');
  console.log('   사유: 이 정책은 완성도 낮던 시절 난이도 확보용 고육지책이며 2026-07-30 적용 종료.');
  console.log('   재현은 실기출 난이도 밀도(하1·중6·상6·최상4)와 이중 봉우리를 재현해야 하므로');
  console.log('   ★ 2·3·4 슬롯이 필수다. 난이도는 8축 composite·축 M·루브릭 D1·D3 이 강제한다.');
  console.log('   단일 출처: bank/master-policy-registry.md 최상단\n');
}
if (isWabu && !isRepro && activePolicies['star-5-only']) {
  const violations = [];
  for (const s of slots) {
    if (s.star !== null && s.star < 5) {
      violations.push({ n: s.n, star: s.star, type: s.type });
    }
    // 배점 검사
    const pointsMatch = s.raw.match(/points:\s*(\d+)/);
    if (pointsMatch) {
      const pts = parseInt(pointsMatch[1]);
      if (pts < 5) {
        violations.push({ n: s.n, points: pts, type: s.type, reason: '배점 5 미만' });
      }
    }
  }
  if (violations.length > 0) {
    policyViolations.push({
      policy: 'policy-star-5-only',
      count: violations.length,
      details: violations,
    });
  }
}


console.log('🔍 blueprint-score-validator v1.0');
console.log(`   입력: ${inputPath}`);
console.log(`   슬롯: ${slots.length}개\n`);
console.log('📊 청사진 vs 자동 산출 대조');
console.log('   #  | 청사진 | 자동 | gap  | 판정  | 유형');
console.log('   ───┼────────┼──────┼──────┼───────┼──────');

let redCount = 0, yellowCount = 0;
let premiumEligible = 0, premiumClaimed = 0;
// 🔴 v2.1 (2026-07-31) — 대조한 슬롯만 센다.
//   종전에는 declared 가 없어 건너뛴 슬롯이 요약에서 GREEN 으로 집계되었다
//   (GREEN = slots.length − red − yellow). 그 결과 대조 행이 0 개인데 「GREEN 17건 · ALL GREEN」
//   이 찍혔다 — 검사하지 않은 것을 통과로 보고하는 공허한 GREEN.
const skipped = [];
let comparedCount = 0;
for (const s of slots) {
  const est = estimateAxes(s);
  const declared = s.composite;
  if (declared === null) { skipped.push(s.n); continue; }
  comparedCount++;
  const gap = declared - est.composite;
  const absGap = Math.abs(gap);

  // 정점 자격 판정 (declared ≥ 24 슬롯만)
  // v1.5 · 유형·답변방식별 상한 폐기 · 문항 심층은 청사진 declared 신뢰
  // (마스터 지시 2026-07-13 · 자격 6기준은 청사진 필드 감지 · 실제 심층은 별도 K3)
  let verdict = '✅ GREEN';
  if (declared >= 24) {
    premiumClaimed++;
    // v1.5 · declared ≥ 24 자체를 정점 인정 · 자격 판정 폐기
    // (자격 6기준은 지문형·서술형 편향 · 마스터 지시 원칙 위배)
    premiumEligible++;
    verdict = '✅ GREEN 🌟';  // premium declared 인정
  } else {
    // 일반 슬롯: gap 임계 판정 (v1.1 완화 · validator 자동 산출 알고리즘 한계 감안)
    // > 15 RED · 8~15 YELLOW · ≤ 7 GREEN
    if (absGap > 15) { verdict = '🔴 RED'; redCount++; }
    else if (absGap >= 8) { verdict = '🟡 YELLOW'; yellowCount++; }
  }
  const gapStr = gap > 0 ? `+${gap}` : `${gap}`;
  console.log(`   ${String(s.n).padStart(2)} | ${String(declared).padStart(6)} | ${String(est.composite).padStart(4)} | ${gapStr.padStart(4)} | ${verdict.padEnd(22)} | ${(s.type || '').slice(0, 40)}`);
}

console.log('\n=== 자동 산출 상세 (정점 슬롯 · composite ≥ 24) ===');
console.log('   #  | 청사진 (N·L·T·H·R·F·E·P) | 자동 (N·L·T·H·R·F·E·P)');
console.log('   ───┼──────────────────────────┼──────────────────────');
for (const s of slots) {
  if ((s.composite || 0) < 24) continue;
  const est = estimateAxes(s);
  const decl = [s.N, s.L, s.T, s.H, s.R, s.F, s.E, s.P].map(v => v === null ? '?' : v).join('·');
  const auto = [est.N, est.L, est.T, est.H, est.R, est.F, est.E, est.P].join('·');
  console.log(`   ${String(s.n).padStart(2)} | ${decl.padEnd(24)} | ${auto}`);
}

// v2.0 · 정책 위반 리포트
if (policyViolations.length > 0) {
  console.log('\n=== 🚨 마스터 정책 위반 검출 ===');
  for (const v of policyViolations) {
    console.log(`\n🔴 [${v.policy}] · 위반 ${v.count}건`);
    console.log('   상세:');
    for (const d of v.details.slice(0, 15)) {
      if (d.heights !== undefined) {
        // policy-slot-size-uniform 위반
        console.log(`     ${d.n} · ${d.type} · 크기 [${d.heights.join(', ')}]mm`);
      } else if (d.star !== undefined) {
        console.log(`     #${d.n}: star=${d.star} · ${(d.type || '').slice(0, 40)}`);
      } else {
        console.log(`     #${d.n}: ${d.reason} (points=${d.points}) · ${(d.type || '').slice(0, 40)}`);
      }
    }
    if (v.details.length > 15) console.log(`     ... 및 ${v.details.length - 15}건 추가`);
  }
  console.log('\n   📚 정책 원본: bank/master-policy-registry.md');
  console.log('   🔒 정책 위반은 청사진 확정 차단 사유 · 소급 정정 필요');
}

console.log('\n=== 요약 ===');
console.log(`   대조: ${comparedCount}/${slots.length}건${skipped.length ? ` · ⚠️ 미대조 ${skipped.length}건 (composite 미기입: ${skipped.join(', ')})` : ''}`);
console.log(`   ✅ GREEN: ${comparedCount - redCount - yellowCount}건 · 🟡 YELLOW: ${yellowCount}건 · 🔴 RED: ${redCount}건`);
console.log(`   정점 슬롯 (declared ≥ 24): ${premiumClaimed}건 중 자격 통과 ${premiumEligible}건`);
console.log(`   임계 · 일반 슬롯: |gap| ≤ 7 GREEN · 8~15 YELLOW · > 15 RED (v1.1 완화 · 자동 산출 한계 감안)`);
console.log(`   임계 · 정점 슬롯 (declared ≥ 24): 자격 통과 GREEN · 미달 RED`);
console.log(`   정점 자격 6기준: narrative(≥250자 or theme) · constraints(≥3) · insights(≥3) · subQuestions(≥3) · layout(probpairfillpage) · secondaryTools(≥1) → 4+ 통과`);

console.log('\n=== 관련 자원 ===');
console.log('   schema.md v5.1 §2.16 · bank/anchors/{CM1|CM2}-{unit}.md');
console.log('   CLAUDE.md 단계 3.3 (청사진 작성 직후 실행 강제)');
console.log('   Gate 4.5 v3.10 편입');

// 🔴 v2.1 자기 방어 — 아무것도 대조하지 못했으면 통과가 아니라 미시행이다.
//   「검사했는데 문제 없음」과 「검사하지 못함」을 같은 출구로 내보내면 게이트가 무력화된다.
if (comparedCount === 0) {
  console.log(`\n❌ 대조 0건 — 청사진 ${slots.length}개 슬롯에 composite(v5_scores) 가 하나도 없다 (exit 2)`);
  console.log('   이 도구는 「청사진 declared ↔ 자동 산출」 대조가 본체다. 대조할 것이 없으면 판정도 없다.');
  console.log('   → 청사진 slots[].v5_scores 를 채운 뒤 다시 실행할 것.');
  process.exit(2);
}
if (skipped.length > 0) {
  console.log(`\n🟡 미대조 ${skipped.length}건 — 슬롯 ${skipped.join(', ')} 에 composite 가 없어 판정에서 빠졌다.`);
}

// v2.0 · 정책 위반 있으면 최우선 exit 3 (RED보다 심각)
if (policyViolations.length > 0) {
  console.log('\n❌ 마스터 정책 위반 · 청사진 확정 차단 (exit 3)');
  process.exit(3);
}
if (redCount > 0) {
  console.log('\n❌ RED 발견 · 청사진 스코어 재조정 필요 (exit 2)');
  process.exit(2);
}
if (yellowCount > 0) {
  console.log('\n🟡 YELLOW 발견 · 스코어 재검토 권장 · 자동 산출 알고리즘 한계 감안 시 정합 판정');
  process.exit(0);
}
console.log('\n✅ 청사진 스코어 정합 · ALL GREEN · 정책 준수');
process.exit(0);
