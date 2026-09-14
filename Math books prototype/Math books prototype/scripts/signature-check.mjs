#!/usr/bin/env node
// 발문 시그니처 검출 도구 — v3.5 게이트 G9
// 2026-06-25 마스터 명시
//
// 본문 .tex에서 슬롯별 발문 시그니처를 정규식으로 추출하고 충돌 검출.
// 단일 출처: bank/v3.5-발문시그니처-카탈로그.md
//
// 검출 결함:
//   - 같은 시그니처 ≥ 2슬롯 → RED
//   - 같은 그림 매크로 ≥ 2슬롯 → RED
//   - 같은 입력 형식이 ≥ 4슬롯 → RED (단원 편중)
//   - 같은 결과식 형식 ≥ 4슬롯 → RED
//   - 인접 시그니처 ≥ 3슬롯 → YELLOW
//
// 사용법:
//   node scripts/signature-check.mjs <본문.tex> [청사진.yaml]
//   반환 코드: 0 = 통과 / 1 = RED 차단

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Usage: node scripts/signature-check.mjs <본문.tex> [청사진.yaml]');
  console.error('       반환 코드: 0 = 통과 / 1 = 차단');
  process.exit(2);
}

const texFile = args[0];
const blueprintFile = args[1] || null;

if (!fs.existsSync(texFile)) {
  console.error(`⚠️  본문 파일 없음: ${texFile}`);
  process.exit(2);
}

// ─── 시그니처 카탈로그 (inline, 단일 출처 bank/v3.5-발문시그니처-카탈로그.md) ───

const SIGNATURES = {
  // EQ (방정식·부등식) 10종
  'EQ-S01': {
    name: '절댓값 합 부등식 + 정수해 개수',
    input: '절댓값 합',
    result: '정수해 개수',
    freedom: '자연수 자유도',
    patterns: [
      /\|\s*[^|]*\|\s*\+\s*\|\s*[^|]*\|/,           // |x|+|y|
      /정수\s*(?:해)?의?\s*개수/,
    ],
  },
  'EQ-S02': {
    name: '사차 부분식 치환 + 실근 합',
    input: '사차 부분식 (짝수차만)',
    result: '실근 합·곱',
    freedom: '치환',
    patterns: [
      /x\^?\{?4\}?|x\^4/,
      /실근.*?(?:합|곱)|근.*?(?:합|곱)/,
      // 핵심 조건: (a) "치환·놓으면" 명시 OR (b) 짝수차 패턴 (x^4 항 다음 x^2 항 + 상수, x^3·x linear 없음)
      // demoteByContent가 추가로 x^3 항 있는 경우 EQ-S02 제거
      /치환|놓으면|짝수차|x\^?\{?4\}?\s*[+\-]\s*\d*\s*x\^?\{?2\}?\s*[+\-]/,
    ],
  },
  'EQ-S03': {
    name: '모든 실수 부등식 + 판별식',
    input: '매개변수 이차부등식',
    result: '판별식·계수 범위',
    freedom: '매개변수',
    patterns: [
      /모든\s*실수/,
      // "판별식"은 발문에 잘 안 나옴. "성립" + 매개변수 정수개수면 인정.
      /성립|판별식|D\s*[<\\\\]\s*[le0]|정수\s*[a-zA-Z].*?개수/,
    ],
  },
  'EQ-S04': {
    name: '매개변수 절댓값 + 정수해 함수',
    input: '매개변수 절댓값',
    result: '정수해 개수 함수',
    freedom: '매개변수',
    patterns: [
      /\|[^|]+\|/,
      /f\s*\(/,
      /정수.*?개수/,
    ],
  },
  'EQ-S05': {
    name: '유리수계수 + 단일 켤레무리수',
    input: '유리수계수 N차',
    result: '계수 결합',
    freedom: '켤레쌍 (단일 무리수)',
    patterns: [
      /유리수.*?계수|계수.*?유리수/,
      /\\sqrt\s*\{?\d+\}?/,
    ],
  },
  'EQ-S06': {
    name: '사차 + 서로 다른 실근 개수 조건',
    input: '사차 다항식',
    result: '매개변수 결정',
    freedom: '자연수 자유도',
    patterns: [
      /x\^?\{?4\}?|사차/,
      // 중근 직접 표현 또는 "서로 다른 실근의 개수 = N" 우회 표현 (N: 2·3·4 모두 인정)
      /중근|이중근|서로\s*다른\s*(?:실|양의\s*)?근.*?(?:개수|=\s*[1-4]|이?\s*[1-4]\s*(?:일|이)?\b)/,
    ],
  },
  'EQ-S07': {
    name: '연립이차 + 매개변수 실근',
    input: '연립이차방정식',
    result: '실근 조건',
    freedom: '매개변수 분기',
    patterns: [
      /연립방정식|연립.*?이차|연립이차/,
    ],
  },
  'EQ-S08': {
    name: '매개변수 연립부등식 + 정수해 함수',
    input: '연립부등식',
    result: '정수해 개수 매개변수 함수',
    freedom: '매개변수',
    patterns: [
      /연립부등식/,
      /정수.*?(?:해|개수)/,
    ],
  },
  'EQ-S09': {
    name: 'ω(켤레허근) 활용',
    input: 'x³=1 또는 x²+x+1=0',
    result: '거듭제곱 합·곱',
    freedom: '주기',
    patterns: [
      /\\omega|ω/,
      // x³=1·x³-1=0·x³+1=0 또는 x²+x+1=0·x²-x+1=0 (1의 삼차 켤레허근 정의 형식)
      /x\^?\{?3\}?\s*=\s*1|x\^?\{?3\}?\s*[+-]\s*1\s*=\s*0|x\^?\{?2\}?\s*[+-]\s*x\s*[+-]\s*1\s*=\s*0/,
    ],
  },
  'EQ-S10': {
    name: '분수부등식 매개변수',
    input: '분수부등식',
    result: '정수해 자유도',
    freedom: '매개변수',
    patterns: [
      /\\dfrac|\\frac/,
      /\\le|\\ge|<|>/,
      /정수/,
    ],
  },

  // CB (경우의 수) 10종
  'CB-S01': {
    name: '정n각형 꼭짓점 + 도형 카운트',
    input: '정n각형 꼭짓점 (그림)',
    result: '도형(삼각형·이등변 등) 카운트',
    freedom: '꼭짓점 분류',
    patterns: [
      /\\regularPolygonNoDiag\s*\{[0-9]+\}/,
      /정[0-9일이삼사오육칠팔구십]+각형/,
      /꼭짓점/,
    ],
  },
  'CB-S02': {
    name: '자릿수 자연수 + 조건',
    input: '자릿수 자연수',
    result: '자연수 개수',
    freedom: '자릿수 자유도',
    patterns: [
      // "한 자리 자연수"가 *조건절*일 경우 오탐 차단. "자리의 수"·"자릿수"·"네 자리 정수" 등의 명시적 자릿수 키워드만 인정.
      /(?:두|세|네|다섯|여섯|일곱|여덟|아홉|열)\s*자리\s*(?:의\s*)?(?:자연수|정수)|\d+\s*자리\s*(?:의\s*)?(?:자연수|정수)|자릿수/,
      /자연수\s*(?:의\s*)?(?:개수|가짓수)|정수\s*(?:의\s*)?(?:개수|가짓수)/,
    ],
  },
  'CB-S03': {
    name: '격자 도로망 경로',
    input: '격자 도로망 (그림)',
    result: '경로 수',
    freedom: '경유점·금지점',
    patterns: [
      /\\gridPath(?:Via)?\s*\{/,
      /도로망|격자|최단\s*경로/,
    ],
  },
  'CB-S04': {
    name: 'n영역 분할 색칠',
    input: 'n영역 분할 (그림)',
    result: '색칠 가짓수',
    freedom: '인접 제약',
    patterns: [
      /\\colorRegions(?:Linear|Cycle|SquareGrid|Cross|MapStar)\s*\{/,
      /색칠|색|칠하/,
    ],
  },
  'CB-S05': {
    name: '수형도 + 부분 교란순열',
    input: '수형도·순열',
    result: '순열 카운트',
    freedom: '위치 제약',
    patterns: [
      /\\treeDiagram\s*\{|수형도/,
    ],
  },
  'CB-S06': {
    name: '정n각형 + 모든 대각선',
    input: '정n각형 + 대각선 (그림)',
    result: '교점·삼각형 카운트',
    freedom: '일반위치',
    patterns: [
      /\\regularPolygon\s*\{[0-9]+\}(?!.*NoDiag)/,
      /대각선/,
    ],
  },
  'CB-S07': {
    name: '적어도 + 짝홀 결합',
    input: '뽑기·분류',
    result: '카운트',
    freedom: '분류 자유도',
    patterns: [
      /적어도/,
      /짝수|홀수/,
    ],
  },
  'CB-S08': {
    name: '자연수 합 조건 + 순서쌍',
    input: '자연수 순서쌍',
    result: '순서쌍 개수',
    freedom: '자연수 자유도',
    patterns: [
      /순서쌍/,
      /자연수/,
      /합|=\s*\d/,
    ],
  },
  'CB-S09': {
    name: '분할·분배',
    input: '분할·분배',
    result: '분배 가짓수',
    freedom: '분배 객체 자유도',
    patterns: [
      /나누|분배|분할|넣는/,
    ],
  },
  'CB-S10': {
    name: '자연수 5의 배수 변형',
    input: '자릿수 자연수 + 모듈러',
    result: '자연수 개수',
    freedom: '자릿수 + 모듈러',
    patterns: [
      /\d+\s*자리|자릿수/,
      /\d+\s*의\s*배수/,
    ],
  },
  'CB-S11': {
    name: '순열 위치 제약 (이웃·고정·우선순위)',
    input: '순열·위치 제약',
    result: '순열 카운트',
    freedom: '묶음·고정 자유도',
    patterns: [
      /(?:이웃|붙어|연속|함께).*(?:서|배열|놓|줄)/,
      /경우의?\s*수|가짓수/,
    ],
  },

  // MX (행렬) 8종
  'MX-S01': {
    name: '2×2 행렬 + 다항식 식 → 성분합',
    input: '2×2 행렬 + 다항식',
    result: '성분의 합',
    freedom: '다항식 계수',
    patterns: [
      /A\^\s*\{?\s*\d\s*\}?/,                          // A^n (한자리 지수)
      /성분의?\s*합|모든\s*성분/,
    ],
  },
  'MX-S02': {
    name: '행렬 거듭제곱 주기 → 성분합',
    input: '2×2 행렬 거듭제곱 (큰 지수)',
    result: '성분의 합 (지정 차수)',
    freedom: '거듭제곱 주기',
    patterns: [
      /A\^\s*\{\s*\d{2,}\s*\}|A\^\d{2,}/,              // A^10, A^2026 등 두자리+
      /성분의?\s*합/,
    ],
  },
  'MX-S03': {
    name: '2×1 행렬 곱 + 미지 행렬',
    input: '2×1 행렬 곱',
    result: '미지 행렬 결정',
    freedom: '미지수 연립',
    patterns: [
      /\\begin\s*\{pmatrix\}\s*[^\\}]+?\\\\\\\\\s*[^\\}]+?\s*\\end\s*\{pmatrix\}/,
      /미지|결정|구하/,
    ],
  },
  'MX-S04a': {
    name: '행렬 ㄱㄴㄷ — 항등식·분배·곱셈정리 검증',
    input: '2×2 행렬 + 명제 3개 (항등식 형태)',
    result: '참 명제 개수·옳은 것',
    freedom: '항등식 분기',
    patterns: [
      /[ㄱㄴㄷ]\.\s*/,
      /옳은\s*것|참/,
      /\(A\s*[+\-]\s*B\)|A\^2\s*[+\-]\s*B\^2|2AB|분배/,    // 항등식 형태
    ],
  },
  'MX-S04b': {
    name: '행렬 ㄱㄴㄷ — 자기참조·멱등·영인자·가환성',
    input: '2×2 행렬 + 명제 3개 (자기참조 형태)',
    result: '참 명제 개수·옳은 것',
    freedom: '자기참조 분기',
    patterns: [
      /[ㄱㄴㄷ]\.\s*/,
      /옳은\s*것|참/,
      /A\^2\s*=\s*A|A\^2\s*=\s*O|A\^2\s*=\s*E|멱등|영인자|AB\s*=\s*BA/,    // 자기참조 형태
    ],
  },
  'MX-S05': {
    name: '자연수 행렬 + 조건 → 행렬 개수',
    input: '자연수 성분 2×2 행렬',
    result: '행렬 개수',
    freedom: '자연수 자유도',
    patterns: [
      /자연수.*?(?:성분|원소)|성분.*?자연수|원소.*?자연수/,
      /행렬.*?개수|행렬.*?가짓수|행렬\s*A의?\s*개수/,
    ],
  },
  'MX-S06': {
    name: 'A^n = E + 최소 자연수 n',
    input: '2×2 행렬',
    result: '최소 자연수 n',
    freedom: '거듭제곱 주기',
    patterns: [
      /A\^\{?[a-zA-Z]\}?\s*=\s*E/,
      /최소|가장\s*작은/,
    ],
  },
  'MX-S07': {
    name: '케일리해밀턴 인용',
    input: '2×2 행렬 + 케해',
    result: '자유도 정점',
    freedom: '케해 인용',
    patterns: [
      /케일리.*?해밀턴|케해|Cayley|Hamilton/,
    ],
  },
  'MX-S08': {
    name: '행렬 거듭제곱 역방향 카운트',
    input: '2×2 행렬 + 거듭제곱 조건',
    result: '가능한 A 개수',
    freedom: '자연수 자유도 + 분기',
    patterns: [
      /A\^?\{?\d+\}?\s*=\s*[A-Z]/,
      /가능한\s*A|A.*?개수/,
    ],
  },
  'MX-S09': {
    name: '위 삼각·거듭제곱 합 + 특정 성분',
    input: '위 삼각 행렬 + Σ A^k',
    result: '특정 성분 (성분합 아님)',
    freedom: '등차합 자유도',
    patterns: [
      // A + A^2 + ... + A^n 형식 (이상치 표기 \cdots 포함)
      /A\s*\+\s*A\^?\{?2\}?\s*\+|A\^?\{?2\}?\s*\+\s*A\^?\{?3\}?|\\cdots\s*\+\s*A\^?\{?\d+\}?/,
      // 특정 성분 (i,j) — \) 직후 LaTeX 잡문자(\,·$·공백) 허용 후 "성분" 매칭
      /\(\s*\d+\s*(?:\\,)?\s*,\s*(?:\\,)?\s*\d+\s*\)[^a-zA-Z가-힣]*성분/,
    ],
  },

  // ── v1.1 신설 시그니처 (10회차 도입) ────────────────────────────

  // EQ 신설 3종
  'EQ-INEQ-PURE-A': {
    name: '단순 연립이차부등식 + 정수해 합',
    input: '연립이차부등식',
    result: '정수해 합 (개수 아님)',
    freedom: '교집합 자유도',
    patterns: [
      /\\begin\s*\{cases\}[\s\S]*?\\end\s*\{cases\}|연립부등식/,
      /x\^?\{?2\}?/,
      /정수\s*(?:해)?의?\s*합/,
    ],
  },
  'EQ-CUBIC-FACTOR-A': {
    name: '삼차방정식 + 정수 근 + 근과 계수',
    input: '삼차방정식',
    result: '계수 결합 (a+b 등)',
    freedom: '근과 계수 대칭',
    patterns: [
      // "삼차방정식" 키워드 명시 강제 (사차방정식 본문 안의 x^3 항 오탐 차단)
      /삼차방정식/,
      /(?:정수.*?근|근.*?정수|세\s*근)/,
      /a\s*\+\s*b|두\s*근의\s*합|세\s*근/,
    ],
  },
  'EQ-ABS-SINGLE': {
    name: '단일 절댓값 + 이차식 부등식',
    input: '단일 절댓값',
    result: '정수해 합',
    freedom: '두 이차부등식 교집합',
    patterns: [
      // |x²-…| 또는 |ax²+bx+c| ≤ N 형태 (절댓값 안에 이차식 단일)
      // greedy 매칭 + \le|<|>| 표기 + LaTeX thin space \, 처리
      /\|[^|]*x\^?\{?2\}?[^|]*\|\s*\\?le|\|[^|]*x\^?\{?2\}?[^|]*\|\s*[<>]/,
      /정수\s*[a-zA-Z]?\s*의?\s*합|정수.*?합/,
    ],
  },

  // CB 신설 5종
  'CB-SELECT-INCLUDE': {
    name: '조합 (반드시 포함 + 반드시 제외)',
    input: '조합 (강제 조건)',
    result: '조합 수',
    freedom: '강제 포함·제외 자유도',
    patterns: [
      /(?:반드시\s*포함|반드시\s*뽑|포함되도록)/,
      /(?:포함되지\s*않|뽑지\s*않|제외)/,
    ],
  },
  'CB-COUNT-SYS-A': {
    name: '부정방정식 자연수 해 카운트',
    input: '부정방정식 (계수 ≥ 2)',
    result: '자연수 순서쌍 개수',
    freedom: '계수별 분기',
    patterns: [
      // ax + by + cz = N 형태 (계수 명시)
      /x\s*\+\s*\d+\s*y\s*\+\s*\d+\s*z|\d+\s*x\s*\+\s*\d+\s*y/,
      /자연수\s*순서쌍|순서쌍.*?자연수/,
    ],
  },
  'CB-MIX-PICK-ARR': {
    name: '뽑아 일렬 (단순)',
    input: '뽑기 + 일렬 (조건 없음)',
    result: 'nCr × r!',
    freedom: '단순 곱',
    patterns: [
      /(?:뽑아|중에서.*?명을\s*뽑)/,
      /일렬로\s*(?:세|배열)/,
    ],
  },
  'CB-MONEY': {
    name: '동전 지불 금액 카운트 (금액 X 방법)',
    input: '동전 (서로 다른 액면) + 지불',
    result: '금액 집합 카디널리티',
    freedom: '금액 중복 제거',
    patterns: [
      /원짜리\s*동전|동전.*?\d+\s*원/,
      /(?:지불할\s*수\s*있는|만들\s*수\s*있는).*?금액|금액의?\s*가짓수/,
    ],
  },
  'CB-DERANGE': {
    name: '완전 교란순열 D_n',
    input: 'n개 항목 + 모두 다른 자리',
    result: '교란 순열 카운트',
    freedom: '수형도 / 포함배제',
    patterns: [
      // "자기 자리/번호와 다른" 또는 "모두 자리를 바꾸어" 표현
      /(?:자기\s*자리|자기.*?번호|모두\s*다른\s*자리|자리.*?다른|i번째\s*자리.*?[학생i])/,
      /(?:다른\s*자리|바꾸|서지\s*않|있지\s*않)/,
    ],
  },

  // MX 신설 4종
  'MX-OP-LINEAR': {
    name: '행렬 연립 식 (2A+B·A-B 등) → 성분합',
    input: '행렬 연립 (두 식)',
    result: '성분의 합',
    freedom: '두 식 합·차 연립',
    patterns: [
      // 2A+B 또는 A-B 형식의 *두 식 동시 제시*
      /\d?\s*A\s*[+\-]\s*\d?\s*B\s*=\s*\\begin\s*\{pmatrix\}/,
      /성분의?\s*합/,
    ],
  },
  'MX-IDENT-FACT': {
    name: '행렬 인수 전개 (보기에서 선택)',
    input: '(A-E)(A+2E) 등 인수 형식',
    result: '전개식 (보기 ⌥)',
    freedom: 'E와의 가환·분배',
    patterns: [
      // (A ± αE)(A ± βE) 형식의 곱
      /\(\s*A\s*[+\-]\s*\d*\s*E\s*\)\s*\(\s*A\s*[+\-]\s*\d*\s*E\s*\)/,
      // 보기에서 A²±A±cE 형태 선택
      /A\^?\{?2\}?\s*[+\-]\s*A|A\^?\{?2\}?\s*[+\-]\s*\d*\s*E/,
    ],
  },
  'MX-MULT-EXPLICIT': {
    name: '2×2 + 2×1 행렬 곱 결정 → A² 단일 성분',
    input: '2×2·2×1 행렬 곱',
    result: 'A² 단일 성분',
    freedom: '행렬 곱 정의 단순',
    patterns: [
      // A * 2×1 = 2×1 형태 (열벡터 곱). \\\\는 정규식에서 \\ 두 백슬래시 매칭 (LaTeX \\)
      /A\s*\\begin\s*\{pmatrix\}\s*\d+\s*\\\\\s*\d+\s*\\end\s*\{pmatrix\}\s*=/,
      // (i,j) 성분 — \) 직후 LaTeX 잡문자(\,·$·공백) 허용
      /\(\s*\d+\s*(?:\\,)?\s*,\s*(?:\\,)?\s*\d+\s*\)[^a-zA-Z가-힣]*성분/,
    ],
  },
  'MX-CLOSE-DERIVE': {
    name: '학생이 A²=pA+qE 직접 유도 (케해 발문 회피)',
    input: '2×2 행렬 (수치 명시)',
    result: 'A^n 단일성분 또는 성분합',
    freedom: '학생 유도 (케해 발문 형식 X)',
    patterns: [
      // 행렬 A가 수치 2×2로 명시 + A^n (n≥3) 성분합/단일성분 요구
      /A\s*=\s*\\begin\s*\{pmatrix\}\s*-?\d+/,
      /A\^?\{?\d{1,3}\}?/,
      /성분의?\s*합|\(\s*\d+\s*,\s*\d+\s*\)\s*성분/,
    ],
  },
};

// 인접 시그니처 그룹 (단조 경향 판정용)
const ADJACENT_GROUPS = {
  'MX-MATRIX-FORMULA': ['MX-S01', 'MX-S02', 'MX-S06', 'MX-S08', 'MX-S09', 'MX-CLOSE-DERIVE'],   // 행렬+식→성분합 계열
  'MX-PROPOSITION': ['MX-S04a', 'MX-S04b'],
  'MX-LINEAR-IDENT': ['MX-OP-LINEAR', 'MX-IDENT-FACT', 'MX-MULT-EXPLICIT'],   // 행렬 기본 연산 카드
  'EQ-PARAM-INEQ': ['EQ-S03', 'EQ-S04', 'EQ-S08', 'EQ-S10'],       // 매개변수 부등식 계열
  'EQ-INEQ-INT-SUM': ['EQ-S01', 'EQ-ABS-SINGLE', 'EQ-INEQ-PURE-A'], // 부등식 + 정수해 합
  'EQ-QUARTIC': ['EQ-S02', 'EQ-S06'],                              // 사차 계열
  'EQ-CUBIC-N': ['EQ-CUBIC-FACTOR-A', 'EQ-S05'],                   // 삼차·사차 근과 계수
  'CB-FIGURE-COUNT': ['CB-S01', 'CB-S06'],                         // 정n각형 그림 카운트
  'CB-NUMBER-COUNT': ['CB-S02', 'CB-S08', 'CB-S10', 'CB-COUNT-SYS-A'],   // 자연수 카운트
  'CB-SELECT-ARR': ['CB-SELECT-INCLUDE', 'CB-MIX-PICK-ARR', 'CB-S11'],   // 조합·뽑아 일렬
  'CB-PERM-DERANGE': ['CB-S05', 'CB-DERANGE'],                     // 교란순열 계열
};

// 그림 매크로 목록 (G8 단계 — 카운트 ≥ 2 RED)
const FIGURE_MACROS = [
  'regularPolygonNoDiag', 'regularPolygon',
  'colorRegionsLinear', 'colorRegionsCycle', 'colorRegionsSquareGrid', 'colorRegionsCross', 'colorRegionsMapStar', 'colorRegionsMap',
  'gridPath', 'gridPathVia',
  'treeDiagram',
];

// ─── 본문 슬롯 추출 ────────────────────────────────────────────────

function extractSlots(texContent) {
  const slots = [];
  // \begin{problem}{N}{type}...\end{problem}
  const re = /\\begin\s*\{problem\}\s*\{(\d+)\}\s*\{[^}]*\}([\s\S]*?)\\end\s*\{problem\}/g;
  let m;
  while ((m = re.exec(texContent)) !== null) {
    slots.push({
      slot: parseInt(m[1]),
      content: m[2],
    });
  }
  return slots;
}

// ─── 시그니처 매칭 ───────────────────────────────────────────────

function matchSignatures(content) {
  const matched = [];
  for (const [sigId, sig] of Object.entries(SIGNATURES)) {
    let allMatch = true;
    for (const pat of sig.patterns) {
      if (!pat.test(content)) {
        allMatch = false;
        break;
      }
    }
    if (allMatch) matched.push(sigId);
  }
  // 후처리 1: MX-S02 (큰 지수)가 매칭되면 MX-S01 (작은 지수) 제외
  if (matched.includes('MX-S02') && matched.includes('MX-S01')) {
    const idx = matched.indexOf('MX-S01');
    matched.splice(idx, 1);
  }
  // 후처리 2: MX-S06 (A^n = E)이 매칭되면 MX-S01·S02 제외 (더 구체적 시그니처)
  if (matched.includes('MX-S06')) {
    for (const sub of ['MX-S01', 'MX-S02']) {
      const idx = matched.indexOf(sub);
      if (idx >= 0) matched.splice(idx, 1);
    }
  }
  // 후처리 3: MX-S07 (케해)이 매칭되면 MX-S01·S02 흡수
  if (matched.includes('MX-S07')) {
    for (const sub of ['MX-S01', 'MX-S02']) {
      const idx = matched.indexOf(sub);
      if (idx >= 0) matched.splice(idx, 1);
    }
  }
  // 후처리 4: CB-S06 (정n각형 + 모든 대각선) 매칭 시 CB-S01 흡수
  if (matched.includes('CB-S06') && matched.includes('CB-S01')) {
    const idx = matched.indexOf('CB-S01');
    matched.splice(idx, 1);
  }
  // 후처리 5 (v1.1): CB-COUNT-SYS-A가 매칭되면 CB-S08 흡수 (부정방정식이 더 구체적)
  if (matched.includes('CB-COUNT-SYS-A') && matched.includes('CB-S08')) {
    const idx = matched.indexOf('CB-S08');
    matched.splice(idx, 1);
  }
  // 후처리 6 (v1.1): EQ-INEQ-PURE-A 매칭 시 EQ-S08 흡수 (단순 연립 vs 매개변수 연립)
  if (matched.includes('EQ-INEQ-PURE-A') && matched.includes('EQ-S08')) {
    const idx = matched.indexOf('EQ-S08');
    matched.splice(idx, 1);
  }
  // 후처리 7 (v1.1): MX-OP-LINEAR 매칭 시 MX-S01 흡수 (연립이 더 구체적)
  if (matched.includes('MX-OP-LINEAR') && matched.includes('MX-S01')) {
    const idx = matched.indexOf('MX-S01');
    matched.splice(idx, 1);
  }
  // 후처리 8 (v1.1): MX-IDENT-FACT 매칭 시 MX-S01 흡수 (항등식 검증이 다른 카드)
  if (matched.includes('MX-IDENT-FACT') && matched.includes('MX-S01')) {
    const idx = matched.indexOf('MX-S01');
    matched.splice(idx, 1);
  }
  // 후처리 9 (v1.1): MX-S09 매칭 시 MX-S01·S02 흡수 (등차합이 더 구체적)
  if (matched.includes('MX-S09')) {
    for (const sub of ['MX-S01', 'MX-S02']) {
      const idx = matched.indexOf(sub);
      if (idx >= 0) matched.splice(idx, 1);
    }
  }
  // 후처리 10 (v1.1): EQ-ABS-SINGLE 매칭 시 EQ-S01 흡수 (단일 절댓값 vs 합)
  if (matched.includes('EQ-ABS-SINGLE') && matched.includes('EQ-S01')) {
    const idx = matched.indexOf('EQ-S01');
    matched.splice(idx, 1);
  }
  // 후처리 11 (v1.1): CB-DERANGE 매칭 시 CB-S05·S11 흡수 (완전 교란이 더 구체적)
  if (matched.includes('CB-DERANGE')) {
    for (const sub of ['CB-S05', 'CB-S11']) {
      const idx = matched.indexOf(sub);
      if (idx >= 0) matched.splice(idx, 1);
    }
  }
  // 후처리 12 (v1.1): CB-SELECT-INCLUDE 매칭 시 CB-S09 흡수
  if (matched.includes('CB-SELECT-INCLUDE') && matched.includes('CB-S09')) {
    const idx = matched.indexOf('CB-S09');
    matched.splice(idx, 1);
  }
  return matched;
}

// 본문 내용 기반 부가 demote (slot content 인자 받음)
function demoteByContent(matched, content) {
  // EQ-S02 demote: x^3 항이 본문에 있으면 짝수차 사차가 아니므로 EQ-S02 제거
  if (matched.includes('EQ-S02')) {
    const hasCubicTerm = /x\^?\{?3\}?(?!\s*=\s*[01])/.test(content);  // x^3 (x³=1은 ω 정의이므로 제외)
    const hasKeywordSubst = /치환|놓으면|짝수차/.test(content);
    if (hasCubicTerm && !hasKeywordSubst) {
      matched = matched.filter(m => m !== 'EQ-S02');
    }
  }
  // EQ-S06 우선 (사차 + 실근 개수 조건이면 S02 흡수)
  if (matched.includes('EQ-S06') && matched.includes('EQ-S02')) {
    matched = matched.filter(m => m !== 'EQ-S02');
  }
  // EQ-S05 우선 (유리수계수 + 켤레무리수가 명시되면 EQ-S02 흡수)
  if (matched.includes('EQ-S05') && matched.includes('EQ-S02')) {
    matched = matched.filter(m => m !== 'EQ-S02');
  }
  return matched;
}

// MX-S02 vs MX-CLOSE-DERIVE 분리: 청사진 declared 우선
// (declared가 CLOSE-DERIVE면 MX-S02 매칭을 CLOSE-DERIVE로 격상)
function resolveMxS02ToCloseDerive(matched, declared) {
  if (declared === 'MX-CLOSE-DERIVE' && matched.includes('MX-S02')) {
    matched = matched.filter(m => m !== 'MX-S02');
    if (!matched.includes('MX-CLOSE-DERIVE')) matched.push('MX-CLOSE-DERIVE');
  }
  return matched;
}

function detectFigureMacros(content) {
  const found = [];
  for (const macro of FIGURE_MACROS) {
    const re = new RegExp(`\\\\${macro}\\s*\\{`, 'g');
    if (re.test(content)) found.push(macro);
  }
  return found;
}

// ─── 청사진 declared signature 추출 (선택) ─────────────────────────

function extractDeclaredSignatures(blueprintText) {
  const declared = {}; // slot → signature_id
  const lines = blueprintText.split(/\r?\n/);
  let inSlots = false;
  let currentSlot = null;
  for (const line of lines) {
    if (/^slots\s*:/.test(line)) { inSlots = true; continue; }
    if (inSlots && /^[a-zA-Z_]+\s*:/.test(line) && !/^\s/.test(line)) { inSlots = false; continue; }
    if (!inSlots) continue;
    const slotM = line.match(/^\s*-\s*slot:\s*(\d+)/);
    if (slotM) { currentSlot = parseInt(slotM[1]); continue; }
    if (currentSlot == null) continue;
    // S 번호(EQ-S01·MX-S04b) + 신설 ID(EQ-INEQ-PURE-A·CB-COUNT-SYS-A) 모두 매칭
    // 마지막 소문자 suffix(a·b 등) 인정
    const sigM = line.match(/^\s*signature_id:\s*([A-Z][A-Z0-9\-]+[a-z]?)/);
    if (sigM) declared[currentSlot] = sigM[1];
  }
  return declared;
}

function extractSignatureExceptions(blueprintText) {
  const exceptions = new Set();
  const lines = blueprintText.split(/\r?\n/);
  let inSlots = false;
  let currentSlot = null;
  for (const line of lines) {
    if (/^slots\s*:/.test(line)) { inSlots = true; continue; }
    if (inSlots && /^[a-zA-Z_]+\s*:/.test(line) && !/^\s/.test(line)) { inSlots = false; continue; }
    if (!inSlots) continue;
    const slotM = line.match(/^\s*-\s*slot:\s*(\d+)/);
    if (slotM) { currentSlot = parseInt(slotM[1]); continue; }
    if (currentSlot == null) continue;
    if (/signature_exception:\s*true/.test(line)) exceptions.add(currentSlot);
  }
  return exceptions;
}

// ─── 메인 ────────────────────────────────────────────────────────

const texContent = fs.readFileSync(texFile, 'utf8');
const slots = extractSlots(texContent);

let declared = {};
let exceptions = new Set();
if (blueprintFile && fs.existsSync(blueprintFile)) {
  const bpText = fs.readFileSync(blueprintFile, 'utf8');
  declared = extractDeclaredSignatures(bpText);
  exceptions = extractSignatureExceptions(bpText);
}

console.log(`📋 본문: ${path.basename(texFile)}`);
console.log(`   슬롯 ${slots.length}개 추출\n`);

// 슬롯별 시그니처 매칭
const slotInfo = []; // {slot, matched, figures, declared, content}
for (const s of slots) {
  let matched = matchSignatures(s.content);
  // 본문 기반 demote (x^3 항 등)
  matched = demoteByContent(matched, s.content);
  // 청사진 declared가 MX-CLOSE-DERIVE면 MX-S02 → MX-CLOSE-DERIVE 격상
  matched = resolveMxS02ToCloseDerive(matched, declared[s.slot] || null);
  const figures = detectFigureMacros(s.content);
  slotInfo.push({
    slot: s.slot,
    matched,
    figures,
    declared: declared[s.slot] || null,
  });
}

// 슬롯별 표
console.log('=== 슬롯별 시그니처 매칭 ===');
for (const si of slotInfo) {
  const matchedStr = si.matched.length === 0 ? '(매칭 없음)' : si.matched.join(', ');
  const figStr = si.figures.length > 0 ? ` [fig: ${si.figures.join(', ')}]` : '';
  const decStr = si.declared ? ` <선언 ${si.declared}>` : '';
  const excStr = exceptions.has(si.slot) ? ' (★ 5 정점 면제)' : '';
  console.log(`  #${String(si.slot).padStart(2)}: ${matchedStr}${figStr}${decStr}${excStr}`);
}
console.log();

// ─── 충돌 검출 ───────────────────────────────────────────────────

const issues = [];

// 1. 같은 시그니처 ≥ 2슬롯 → RED
const sigCount = {}; // sigId → [slot]
for (const si of slotInfo) {
  for (const sig of si.matched) {
    if (!sigCount[sig]) sigCount[sig] = [];
    sigCount[sig].push(si.slot);
  }
}
for (const [sig, slots] of Object.entries(sigCount)) {
  const nonExempt = slots.filter(s => !exceptions.has(s));
  if (nonExempt.length >= 2) {
    issues.push({
      level: 'RED',
      type: 'SIG-DUPE',
      msg: `시그니처 ${sig} (${SIGNATURES[sig].name}) 슬롯 ${nonExempt.length}개 (#${nonExempt.join(', #')}) ≥ 2 — 학생 체감 동일 유형`,
    });
  }
}

// 2. 그림 매크로 ≥ 2슬롯 → RED (G8)
const figCount = {};
for (const si of slotInfo) {
  for (const fig of si.figures) {
    if (!figCount[fig]) figCount[fig] = [];
    figCount[fig].push(si.slot);
  }
}
for (const [fig, slots] of Object.entries(figCount)) {
  if (slots.length >= 2) {
    issues.push({
      level: 'RED',
      type: 'FIG-DUPE',
      msg: `그림 매크로 \\${fig} 슬롯 ${slots.length}개 (#${slots.join(', #')}) ≥ 2 — 동일 그림 중복`,
    });
  }
}

// 3. 입력 형식 ≥ 4슬롯 → RED (단원 편중)
const inputCount = {};
for (const si of slotInfo) {
  for (const sig of si.matched) {
    const inp = SIGNATURES[sig].input;
    if (!inputCount[inp]) inputCount[inp] = new Set();
    inputCount[inp].add(si.slot);
  }
}
for (const [inp, set] of Object.entries(inputCount)) {
  if (set.size >= 4) {
    issues.push({
      level: 'RED',
      type: 'INPUT-OVER',
      msg: `입력 형식 "${inp}" 슬롯 ${set.size}개 (#${[...set].join(', #')}) ≥ 4 — 단원·구조 편중`,
    });
  }
}

// 4. 결과식 형식 ≥ 4슬롯 → RED
const resultCount = {};
for (const si of slotInfo) {
  for (const sig of si.matched) {
    const r = SIGNATURES[sig].result;
    if (!resultCount[r]) resultCount[r] = new Set();
    resultCount[r].add(si.slot);
  }
}
for (const [r, set] of Object.entries(resultCount)) {
  if (set.size >= 4) {
    issues.push({
      level: 'RED',
      type: 'RESULT-OVER',
      msg: `결과식 형식 "${r}" 슬롯 ${set.size}개 (#${[...set].join(', #')}) ≥ 4 — 결과 구조 편중`,
    });
  }
}

// 5. 인접 시그니처 ≥ 3슬롯 → YELLOW
for (const [group, sigs] of Object.entries(ADJACENT_GROUPS)) {
  const slotsInGroup = new Set();
  for (const si of slotInfo) {
    if (si.matched.some(m => sigs.includes(m))) slotsInGroup.add(si.slot);
  }
  if (slotsInGroup.size >= 3) {
    issues.push({
      level: 'YELLOW',
      type: 'ADJ-GROUP',
      msg: `인접 시그니처 그룹 "${group}" (${sigs.join('·')}) 슬롯 ${slotsInGroup.size}개 (#${[...slotsInGroup].join(', #')}) ≥ 3 — 단조 경향`,
    });
  }
}

// 6. 청사진 declared 비교
//    (a) declared가 카탈로그 미등록 → RED (v1.1 강화)
//    (b) declared가 카탈로그 등록 + 정규식 매칭 실패 → YELLOW (정규식 보강 권장)
//    (c) declared 등록 + 매칭에 포함 → OK
for (const si of slotInfo) {
  if (!si.declared) continue;
  if (!(si.declared in SIGNATURES)) {
    issues.push({
      level: 'RED',
      type: 'SIG-UNKNOWN',
      msg: `#${si.slot}: 청사진 선언 ${si.declared} — 카탈로그(bank/v3.5-발문시그니처-카탈로그.md) 미등록. 카탈로그에 추가하거나 청사진 정정 필요`,
    });
    continue;
  }
  if (!si.matched.includes(si.declared)) {
    // 정규식이 잡지 못한 경우 — 청사진을 신뢰하여 사실상 시그니처로 처리 (매칭에 강제 추가)
    si.matched.push(si.declared);
    issues.push({
      level: 'YELLOW',
      type: 'SIG-MISMATCH',
      msg: `#${si.slot}: 청사진 선언 ${si.declared} (${SIGNATURES[si.declared].name}) — 정규식 매칭 누락. 청사진 신뢰하여 시그니처 인정. 정규식 보강 권장.`,
    });
  }
}

// 7. 청사진에 signature_id 미선언 슬롯 검출 (RED, v1.1)
//    출제 시점에 모든 슬롯이 signature_id를 선언해야 시그니처 충돌 검증이 정합
if (blueprintFile && fs.existsSync(blueprintFile)) {
  const unspecified = slotInfo.filter(si => !si.declared).map(si => si.slot);
  if (unspecified.length > 0) {
    issues.push({
      level: 'RED',
      type: 'SIG-UNDECLARED',
      msg: `청사진에 signature_id 미선언 슬롯 ${unspecified.length}개 (#${unspecified.join(', #')}) — 모든 슬롯에 signature_id 선언 의무 (v1.1)`,
    });
  }
}

// ─── 보고 ────────────────────────────────────────────────────────

const reds = issues.filter(i => i.level === 'RED');
const yellows = issues.filter(i => i.level === 'YELLOW');

console.log(`📊 시그니처 검출 완료`);
console.log(`   고유 시그니처: ${Object.keys(sigCount).length}종`);
console.log(`   그림 매크로 사용: ${Object.keys(figCount).length}종`);
console.log();

if (issues.length === 0) {
  console.log('✅ 시그니처 검출 통과. 학생 체감 동일 유형 0건.');
  process.exit(0);
}

console.log(`🔴 RED ${reds.length}건 / 🟡 YELLOW ${yellows.length}건\n`);

if (reds.length > 0) {
  console.log('=== 🔴 빌드 차단 ===');
  for (const r of reds) {
    console.log(`  [${r.type}]  ${r.msg}`);
  }
  console.log();
}
if (yellows.length > 0) {
  console.log('=== 🟡 검토 권장 ===');
  for (const y of yellows) {
    console.log(`  [${y.type}]  ${y.msg}`);
  }
  console.log();
}

console.log('=== 단일 출처 ===');
console.log('bank/v3.5-발문시그니처-카탈로그.md');

if (reds.length > 0) {
  console.error(`\n❌ 빌드 차단: 시그니처 충돌 ${reds.length}건. 본문 정정 후 재시도.`);
  process.exit(1);
}
console.log('\n⚠️  YELLOW 검토 권장. 결정 후 진입.');
process.exit(0);
