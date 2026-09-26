#!/usr/bin/env node
// RPM 표준 어구 자동 검수 — v1.2 (2026-06-29 시리즈별 분기 신설)
//
// v1.2 신규: 시리즈 분기 — 학평 30문 / 미니모의 8문 / 동화고 23문 / 유형편 (검증 skip)
//   - classifySeries() 추가: 파일명·\examheader 등에서 시리즈 자동 인식
//   - 시리즈별 슬롯 수·총점 임계값 분기 (학평 30·100, 미니모의 8·~30, 동화고 23·100)
//   - 동사 4단계 분포 검증은 학평만 적용 (다른 시리즈는 별도 캘리브 전)
//   - [출제의도] 라벨 의무는 학평만, 그 외는 권장 YELLOW
//
// 단일 출처:
//   - bank/RPM-언어사전.md (v1.4 ~225 풀이 어구)
//   - bank/발문어구사전.md (v2.6 ~260 발문 어구, 학평 14회차 검증)
//
// 본 도구는 본문·답지 .tex를 검사한다.
// v1.0 기존 기능 (유지):
//   - 단원 자동 추론 (1~12장)
//   - 단원별 절대 표준 어구 부재 → YELLOW
//   - 비표준 어구 RED (직역체·괄호 라벨)
//   - 답지 결구 부재 → YELLOW
//
// v1.1 신규 추가:
//   - 외분점 어구 RED (2022 개정 폐지)
//   - "이용하여" YELLOW (학평 표준 "활용하여" 통일)
//   - [출제의도] 라벨 부재 검사 (시험지 한정 YELLOW)
//   - [출제의도] 동사 4단계 분포 검증 (학평 14회차 평균 범위)
//   - 시험지 30문항·100점·1~21 객관식·22~30 단답형 정합 검증 (시험지 한정)
//
// 사용법:
//   node scripts/rpm-wording-check.mjs <file1.tex> [file2.tex ...]
//
// 반환 코드: 0 = 통과 또는 YELLOW만 / 1 = RED 있음 / 2 = 사용 오류

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Usage: node scripts/rpm-wording-check.mjs <file.tex> [more.tex ...]');
  console.error('       반환 코드: 0 = 통과/YELLOW만 / 1 = RED / 2 = 사용 오류');
  process.exit(2);
}

// 파일 종류 분류
function classifyFile(filepath) {
  const base = path.basename(filepath).toLowerCase();
  if (base.includes('답지') || base.includes('solution')) return '답지';
  if (base.endsWith('.yaml') || base.endsWith('.yml')) return '청사진';
  return '본문';
}

// 단원 자동 추론 — 본문 키워드 grep으로 가장 우세한 단원 결정
// RPM 단일 출처 §2.1~§2.12 매핑 (1~12장)
const CHAPTER_KEYWORDS = {
  '1-2-3': {  // 단원 1 다항식 (1장 연산·2장 항등식/나머지·3장 인수분해)
    name: '단원 1 다항식 (PL)',
    triggers: [
      /다항식/, /몫과\s*나머지/, /조립제법/, /인수분해/, /나머지정리/,
      /항등식/, /계수\s*비교/, /수치\s*대입/, /곱셈\s*공식/,
    ],
  },
  '4': {  // 4장 복소수
    name: '단원 2 / 4장 복소수',
    triggers: [
      /복소수/, /허수/, /순허수/, /켤레복소수/, /\\bar\{?z\}?/, /\\overline\{z\}/,
      /a\s*\+\s*bi/, /i\^?\{?2\}?\s*=\s*-1/,
    ],
  },
  '5': {  // 5장 이차방정식
    name: '단원 2 / 5장 이차방정식',
    triggers: [
      /이차방정식/, /판별식/, /근의\s*공식/, /근과\s*계수의\s*관계/,
      /\\alpha\s*\+\s*\\beta/, /\\alpha\\beta/,
    ],
  },
  '6': {  // 6장 이차함수
    name: '단원 2 / 6장 이차함수',
    triggers: [
      /이차함수/, /이차함수의\s*그래프/, /꼭짓점/, /축의\s*방정식/,
      /최댓값/, /최솟값/,
    ],
  },
  '7': {  // 7장 여러 방정식
    name: '단원 2 / 7장 여러 가지 방정식',
    triggers: [
      /삼차방정식/, /사차방정식/, /연립방정식/, /부정방정식/, /\\omega/,
      /세제곱근/, /1의\s*세제곱근/,
    ],
  },
  '8': {  // 8장 연립일차부등식
    name: '단원 2 / 8장 연립일차부등식',
    triggers: [
      /연립일차부등식/, /일차부등식/, /\|.*\|\s*[<>≤≥]/, /절댓값.*부등식/,
    ],
  },
  '9': {  // 9장 이차부등식
    name: '단원 2 / 9장 이차부등식',
    triggers: [
      /이차부등식/, /연립이차부등식/, /항상\s*성립/, /\b모든\s*실수\s*x에\s*대하여/,
    ],
  },
  '10': {  // 10장 경우의 수와 순열
    name: '단원 3 / 10장 경우의 수와 순열',
    triggers: [
      /경우의\s*수/, /순열/, /\b_?\{?n\}?P_?\{?r\}?/, /\bP\s*_/, /\\mathrm\{P\}/,
      /수형도/, /합의\s*법칙/, /곱의\s*법칙/,
    ],
  },
  '11': {  // 11장 조합
    name: '단원 3 / 11장 조합',
    triggers: [
      /조합/, /\b_?\{?n\}?C_?\{?r\}?/, /\bC\s*_/, /\\mathrm\{C\}/,
      /대각선/, /평행사변형/, /직선의\s*개수/,
    ],
  },
  '12': {  // 12장 행렬
    name: '단원 4 / 12장 행렬',
    triggers: [
      /행렬/, /성분/, /단위행렬/, /영행렬/, /케일리[-‒–—]?\s*해밀턴/, /케해/,
      /pmatrix/, /\\begin\{pmatrix\}/, /a_\{?ij\}?/,
    ],
  },
};

// 단원별 절대 표준 어구 (RPM 사전 v1.4 §3.6~§3.14)
// 답지에 등장해야 하는 표준 어구. 없으면 YELLOW.
const STANDARD_PHRASES = {
  '4': {
    label: '복소수 절대 표준',
    required: [
      { re: /복소수가\s*서로\s*같을\s*조건/, hint: 'R-S4-03 — "복소수가 서로 같을 조건에 의하여"' },
      { re: /라\s*하면.*a.*실수|z\s*=\s*a\s*\+\s*bi/, hint: 'R-S4-01 — "$z = a+bi$ ($a$, $b$는 실수)라 하면"' },
    ],
  },
  '5': {
    label: '이차방정식 절대 표준',
    required: [
      { re: /근과\s*계수의\s*관계/, hint: 'R-S5-01 — "이차방정식의 근과 계수의 관계에 의하여"' },
    ],
  },
  '6': {
    label: '이차함수 관계 표준',
    required: [
      { re: /이차함수.*그래프|그래프.*x[-_\s축]/, hint: 'R-S6-08·09 — "이차함수 ~의 그래프와 직선/x축"' },
    ],
  },
  '7': {
    label: '여러 방정식 절대 표준',
    required: [
      { re: /삼차방정식.*근과\s*계수|근과\s*계수.*삼차방정식|\\omega|허근.*근이|근이.*허근/, hint: 'R-S7-01/16 — 삼차 켤레근 또는 ω 도입' },
    ],
  },
  '8': {
    label: '연립일차부등식 절대 표준',
    required: [
      { re: /공통부분/, hint: 'R-S8-01·02 — "공통부분을 구하면"' },
    ],
  },
  '9': {
    label: '이차부등식 절대 표준',
    required: [
      { re: /판별식|그래프.*x[-_\s축]/, hint: 'R-S9-01/07 — "그래프가 x축보다 ~" 또는 "판별식 D"' },
    ],
  },
  '10': {
    label: '경우의 수와 순열 표준',
    required: [
      { re: /경우의\s*수|곱의\s*법칙|합의\s*법칙/, hint: 'R-S10 — "경우의 수" / "합/곱의 법칙"' },
    ],
  },
  '11': {
    label: '조합 표준',
    required: [
      { re: /_?\{?\d*n?\}?C_?\{?\d*r?\}?|조합의\s*수/, hint: 'R-S11 — "$_nC_r$" 또는 "조합의 수"' },
    ],
  },
  '12': {
    label: '행렬 절대 표준',
    required: [
      { re: /두\s*행렬이\s*서로\s*같을\s*조건|성분이\s*같으므로/, hint: 'R-S12-08 — "두 행렬이 서로 같을 조건에 의하여"' },
    ],
  },
};

// 비표준 어구 RED — 직역체·창의 표현·괄호 라벨 + 2022 개정 폐지 어구 (v1.1)
const RED_PATTERNS = [
  {
    re: /정확히\s*\d+\s*개/,
    slug: 'no-exactly-n',
    hint: '"정확히 N개" 금지 → "개수가 N인" / "오직 한 ~" (feedback_no_exactly_n)',
  },
  {
    re: /유일한\s*조합이어야/,
    slug: 'no-translation-style',
    hint: '직역체 "유일한 조합이어야 한다" → "오직 한 ~만이 ~을 만족시킨다"',
  },
  {
    re: /종합\s*\(조건\):/,
    slug: 'no-paren-label',
    hint: '괄호 라벨 "종합 (조건):" → "다음 조건을 만족시킨다."',
  },
  // v1.1 신규 — 2022 개정 폐지 어구 (외분점·다중무리수 켤레 등)
  {
    re: /외분점|외분하는\s*점|외분\s*비/,
    slug: 'no-extdiv-point',
    hint: '외분점 어구 RED — 2022 개정 폐지 (발문어구사전 §23.1). 내분점만 사용.',
  },
  {
    re: /A\^?\{?-1\}?|A의\s*역행렬|역행렬\s*A/,
    slug: 'no-inverse-matrix',
    hint: '역행렬 $A^{-1}$ 어구 RED — 2022 개정 CM1 범위 외 (feedback_cm1_curriculum_single_source)',
  },
  {
    re: /다음과\s*같이\s*정의된/,
    slug: 'verbose-definition',
    hint: '"다음과 같이 정의된" → "~라 하자." (간결)',
  },
];

// 답지 결구 어구 — 1회 이상 등장해야 함
const SOLUTION_CLOSURES = [
  /\\therefore/, /따라서/, /구하는/, /답[:：]/,
  /\\boxed/, /\\answerbox/, /\\bgreen/,
];

// v1.1 신규 — YELLOW 패턴 (학평 표준 일치도 보강)
const YELLOW_PATTERNS = [
  {
    re: /이용하여\s*문제\s*(해결|풀이)|이용하여\s*추론|이용하여\s*이해/,
    slug: 'yiyong-prefer-hwaryong',
    hint: '"이용하여" → "활용하여" 통일 권장 (학평 v2.6 §22.2 / v2.6 §26.3).',
  },
  {
    re: /다음과\s*같이\s*정의된/,
    slug: 'verbose-definition',
    hint: '"다음과 같이 정의된" → "~라 하자." (간결, RPM 표준)',
  },
];

// v1.1 신규 — 학평 14회차 평균 동사 4단계 분포 (학평 v2.6 §26.1)
// 검증 범위: [최소·최대] (시험지 한정)
const VERB_DISTRIBUTION = {
  '계산하기': { min: 3, max: 7, label: '계산하기' },
  '이해하기': { min: 9, max: 14, label: '이해하기 (최다 비중)' },
  '문제\\s*해결하기': { min: 7, max: 10, label: '문제 해결하기' },
  '해결하기': { min: 7, max: 10, label: '해결하기 (문제 해결하기 동의어)' },
  '추론하기': { min: 2, max: 5, label: '추론하기 (★ 5 정점)' },
};

// 시험지 판정 (testpaper) — 30문항 100점 정합 검증 대상
function isExamPaper(filepath, content) {
  const base = path.basename(filepath).toLowerCase();
  // 동화고·미니모의고사·연습편·testNN-*.tex·N회차-문제.tex
  if (/test\d+|회차[-_]문제|동화고|미니모의고사/.test(base)) return true;
  // \pointbadge 매크로 사용 시 시험지로 판단
  if (/\\pointbadge|\\examintent|\\examheader/.test(content)) return true;
  return false;
}

// v1.2 신규 — 시리즈 분류
// 반환: '학평' | '미니모의' | '동화고' | '유형편' | '기타'
function classifySeries(filepath, content) {
  const fullPath = filepath.replace(/\\/g, '/');
  const base = path.basename(fullPath).toLowerCase();
  // 폴더명 우선 (한글 폴더명 검사)
  if (/미니모의고사|미니모의/.test(fullPath)) return '미니모의';
  if (/동화고/.test(fullPath)) return '동화고';
  if (/학평|모의고사|평가원|수능/.test(fullPath)) return '학평';
  // 파일명
  if (/test\d+|practice\d+/.test(base)) return '유형편';
  // 본문 키워드
  if (/학평|평가원|교육청|모의평가/.test(content.slice(0, 1500))) return '학평';
  return '기타';
}

// 시리즈별 검증 임계값 (v1.2)
const SERIES_CONFIG = {
  '학평': {
    slotTarget: 30,
    slotTolerance: 0,         // 정확 30
    totalPoints: 100,
    pointTolerance: 0.5,
    intentLabelMode: 'mandatory', // 30 모두 의무
    verbDistribution: true,       // 동사 4단계 검증
  },
  '미니모의': {
    slotTarget: 8,
    slotTolerance: 2,         // ±2 (6~10 허용)
    totalPoints: null,         // 가변
    pointTolerance: null,
    intentLabelMode: 'recommended',
    verbDistribution: false,
  },
  '동화고': {
    slotTarget: 23,
    slotTolerance: 2,         // ±2
    totalPoints: 100,
    pointTolerance: 0.5,
    intentLabelMode: 'recommended',
    verbDistribution: false,
  },
  '유형편': {
    slotTarget: null,
    slotTolerance: null,
    totalPoints: null,
    pointTolerance: null,
    intentLabelMode: 'skip',
    verbDistribution: false,
  },
  '기타': {
    slotTarget: 30,           // 학평 표준 fallback
    slotTolerance: 5,
    totalPoints: 100,
    pointTolerance: 0.5,
    intentLabelMode: 'recommended',
    verbDistribution: false,
  },
};

// ---- 본 검사 시작 ----
let totalRed = 0;
let totalYellow = 0;
const reports = [];

for (const file of args) {
  if (!fs.existsSync(file)) {
    console.error(`⚠️  파일 없음: ${file}`);
    continue;
  }
  const fileKind = classifyFile(file);
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);
  const base = path.basename(file);

  // (A) 단원 추론 — 본문 키워드 점수 매겨 1·2위 단원 선정
  const scores = {};
  for (const [code, info] of Object.entries(CHAPTER_KEYWORDS)) {
    scores[code] = 0;
    for (const re of info.triggers) {
      const matches = content.match(new RegExp(re.source, 'g'));
      if (matches) scores[code] += matches.length;
    }
  }
  const detectedChapters = Object.entries(scores)
    .filter(([_, s]) => s >= 2)  // 최소 2회 등장
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)  // 상위 3개
    .map(([code]) => code);

  if (detectedChapters.length === 0) {
    reports.push({
      file: base,
      severity: 'INFO',
      slug: 'no-chapter',
      line: 0,
      match: '',
      context: '단원 추론 실패 (키워드 부족)',
      hint: '본문 키워드 검토 — RPM 1~12장 어느 단원인지 명시 권장',
    });
    continue;
  }

  // (B) RED 검사 — 모든 파일 (본문/답지) 공통
  for (const pat of RED_PATTERNS) {
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const m = line.match(pat.re);
      if (m) {
        reports.push({
          file: base,
          severity: 'RED',
          slug: pat.slug,
          line: i + 1,
          match: m[0],
          context: line.trim().slice(0, 140),
          hint: pat.hint,
        });
        totalRed++;
      }
    }
  }

  // (C) 답지 전용 — 절대 표준 어구 + 결구 검사
  if (fileKind === '답지') {
    // C-1. 단원별 절대 표준 어구 부재 검사
    for (const ch of detectedChapters) {
      const std = STANDARD_PHRASES[ch];
      if (!std) continue;
      for (const req of std.required) {
        const m = content.match(req.re);
        if (!m) {
          reports.push({
            file: base,
            severity: 'YELLOW',
            slug: `missing-std-ch${ch}`,
            line: 0,
            match: '',
            context: `${std.label}: 절대 표준 어구 부재`,
            hint: req.hint,
          });
          totalYellow++;
        }
      }
    }

    // C-2. 결구 어구 검사 (답지)
    let closureFound = false;
    for (const re of SOLUTION_CLOSURES) {
      if (re.test(content)) { closureFound = true; break; }
    }
    if (!closureFound) {
      reports.push({
        file: base,
        severity: 'YELLOW',
        slug: 'no-closure',
        line: 0,
        match: '',
        context: '답지 결구 어구 부재',
        hint: 'R-F01·R-F02·R-F03 — "$\\therefore$" / "따라서 ~" / "\\answerbox" 1회 이상 권장',
      });
      totalYellow++;
    }
  }

  // (D) v1.1 신규 — YELLOW 패턴 검사 (모든 파일)
  for (const pat of YELLOW_PATTERNS) {
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const m = line.match(pat.re);
      if (m) {
        reports.push({
          file: base,
          severity: 'YELLOW',
          slug: pat.slug,
          line: i + 1,
          match: m[0],
          context: line.trim().slice(0, 140),
          hint: pat.hint,
        });
        totalYellow++;
      }
    }
  }

  // (E) v1.2 — 시험지 한정 검사 (시리즈별 분기)
  const series = classifySeries(file, content);
  if (isExamPaper(file, content)) {
    const cfg = SERIES_CONFIG[series] || SERIES_CONFIG['기타'];

    // E-1. 슬롯 수·총점 정합 (시리즈별)
    const pointBadges = [...content.matchAll(/\\pointbadge\{(\d+(?:\.\d+)?)\}/g)];
    if (pointBadges.length > 0 && cfg.slotTarget !== null) {
      const totalPoints = pointBadges.reduce((sum, m) => sum + parseFloat(m[1]), 0);
      const slotCount = pointBadges.length;
      const slotDelta = Math.abs(slotCount - cfg.slotTarget);
      if (slotDelta > cfg.slotTolerance) {
        const isHardFail = slotDelta > cfg.slotTolerance + 3;
        reports.push({
          file: base,
          severity: isHardFail ? 'RED' : 'YELLOW',
          slug: 'slot-count',
          line: 0,
          match: '',
          context: `[${series}] 시험지 슬롯 수 ${slotCount}개 (표준 ${cfg.slotTarget} ±${cfg.slotTolerance})`,
          hint: `${series} 표준 슬롯 수 ${cfg.slotTarget}. 발문어구사전 §18.1 (학평) / 시리즈별 가변.`,
        });
        if (isHardFail) totalRed++; else totalYellow++;
      }
      // 총점 검증 (시리즈에 totalPoints 설정된 경우만)
      if (cfg.totalPoints !== null && Math.abs(totalPoints - cfg.totalPoints) > cfg.pointTolerance) {
        reports.push({
          file: base,
          severity: 'RED',
          slug: 'total-points',
          line: 0,
          match: '',
          context: `[${series}] 시험지 총점 ${totalPoints}점 (표준 ${cfg.totalPoints})`,
          hint: `${series} 표준 총점 ${cfg.totalPoints}점. 발문어구사전 §18.1`,
        });
        totalRed++;
      }
    }

    // E-2. [출제의도] 라벨 검사 (시리즈별 mandatory/recommended/skip)
    if (cfg.intentLabelMode !== 'skip') {
      const intentLabels = [...content.matchAll(/\[출제의도\]|\\examintent\{[^}]*\}/g)];
      const target = cfg.slotTarget || 30;
      if (intentLabels.length === 0) {
        reports.push({
          file: base,
          severity: cfg.intentLabelMode === 'mandatory' ? 'YELLOW' : 'YELLOW',
          slug: 'no-intent-labels',
          line: 0,
          match: '',
          context: `[${series}] [출제의도] 라벨 부재`,
          hint: cfg.intentLabelMode === 'mandatory'
            ? '학평 표준 (v2.6 §19): 모든 슬롯에 [출제의도] 라벨 의무.'
            : `${series} 표준 권장: [출제의도] 라벨 추가 권장 (학평 v2.6 §22.1 라이브러리 참조).`,
        });
        totalYellow++;
      } else if (intentLabels.length < target * 0.7) {
        reports.push({
          file: base,
          severity: 'YELLOW',
          slug: 'partial-intent-labels',
          line: 0,
          match: '',
          context: `[${series}] [출제의도] 라벨 ${intentLabels.length}/${target} 부분 적용`,
          hint: `${series} 권장: ${target} 슬롯 모두 라벨 명시 (v2.6 §22.1)`,
        });
        totalYellow++;
      }
    }
    // 동사 분포 검증 사전 변수 (E-3에서 사용)
    var _verifyVerbDist = cfg.verbDistribution;
    var _intentCntForVerb = [...content.matchAll(/\[출제의도\]|\\examintent\{[^}]*\}/g)].length;

    // E-3. 동사 4단계 분포 검증 (v2.6 §26.1 학평 14회차 평균) — 학평 시리즈만 적용 (v1.2)
    if (_verifyVerbDist) {
      const verbCounts = {};
      for (const verbPat of Object.keys(VERB_DISTRIBUTION)) {
        const re = new RegExp(verbPat, 'g');
        const matches = content.match(re);
        verbCounts[verbPat] = matches ? matches.length : 0;
      }
      const totalSolve = (verbCounts['문제\\s*해결하기'] || 0) + (verbCounts['해결하기'] || 0) - (verbCounts['문제\\s*해결하기'] || 0);
      const distrib = {
        '계산하기': verbCounts['계산하기'] || 0,
        '이해하기': verbCounts['이해하기'] || 0,
        '문제 해결하기': totalSolve,
        '추론하기': verbCounts['추론하기'] || 0,
      };
      const distribTotal = Object.values(distrib).reduce((a, b) => a + b, 0);
      if (_intentCntForVerb >= 20 && distribTotal >= 25) {
        for (const [verb, count] of Object.entries(distrib)) {
          let range;
          if (verb === '계산하기') range = VERB_DISTRIBUTION['계산하기'];
          else if (verb === '이해하기') range = VERB_DISTRIBUTION['이해하기'];
          else if (verb === '문제 해결하기') range = VERB_DISTRIBUTION['문제\\s*해결하기'];
          else if (verb === '추론하기') range = VERB_DISTRIBUTION['추론하기'];
          if (count < range.min || count > range.max) {
            reports.push({
              file: base,
              severity: 'YELLOW',
              slug: `verb-distrib-${verb}`,
              line: 0,
              match: '',
              context: `${verb} ${count}문 (학평 평균 ${range.min}~${range.max})`,
              hint: `학평 14회차 평균 (v2.6 §26.1) 범위 이탈 — ${range.label}`,
            });
            totalYellow++;
          }
        }
      }
    }
  }

  // (F) 단원 추론 결과 리포트 (정보)
  const chapterLabels = detectedChapters
    .map(c => `${CHAPTER_KEYWORDS[c].name} (${scores[c]}회)`)
    .join(' / ');
  reports.push({
    file: base,
    severity: 'INFO',
    slug: 'chapter-detected',
    line: 0,
    match: '',
    context: `[${fileKind}] 추론 단원: ${chapterLabels}`,
    hint: '',
  });
}

// ---- 결과 출력 ----
console.log('📋 RPM 표준 어구 검수 (v1.2, 시리즈별 분기 — 학평·미니모의·동화고·유형편)');
console.log(`   단일 출처: bank/RPM-언어사전.md + bank/발문어구사전.md`);
console.log();

if (reports.length === 0) {
  console.log('✅ 검사 대상 0건.');
  process.exit(0);
}

// INFO 먼저 (단원 추론 결과)
const infos = reports.filter(r => r.severity === 'INFO');
const reds = reports.filter(r => r.severity === 'RED');
const yellows = reports.filter(r => r.severity === 'YELLOW');

if (infos.length > 0) {
  console.log('--- 단원 추론 ---');
  for (const r of infos) {
    console.log(`📄 ${r.file}  ${r.context}`);
  }
  console.log();
}

if (reds.length > 0) {
  console.log(`=== 🔴 RED ${reds.length}건 ===`);
  for (const r of reds) {
    const loc = r.line > 0 ? `:${r.line}` : '';
    console.log(`🔴 ${r.file}${loc}  [${r.slug}]  "${r.match}"`);
    console.log(`   문맥: ${r.context}`);
    console.log(`   조치: ${r.hint}`);
    console.log();
  }
}

if (yellows.length > 0) {
  console.log(`=== 🟡 YELLOW ${yellows.length}건 ===`);
  for (const r of yellows) {
    const loc = r.line > 0 ? `:${r.line}` : '';
    console.log(`🟡 ${r.file}${loc}  [${r.slug}]`);
    console.log(`   문맥: ${r.context}`);
    console.log(`   조치: ${r.hint}`);
    console.log();
  }
}

console.log(`📊 요약: RED ${totalRed}건 / YELLOW ${totalYellow}건`);

if (totalRed > 0) {
  console.log('\n❌ RED 위반으로 차단 (반환 1).');
  process.exit(1);
}

if (totalYellow > 0) {
  console.log('\n⚠️  YELLOW 경고만 — 통과하지만 검토 권장.');
}

process.exit(0);
