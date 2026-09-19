#!/usr/bin/env node
// CM1 교과과정 위반 자동 grep 차단 검사
// 2026-06-24 v1.2 마스터 확립 — CLAUDE.md §"CM1 교과과정 단일출처 표"의 단일 출처
// v1.2: 2022 개정 과목 체계 정정 (수학 I → 대수, 산술기하평균 → 공통수학2 §명제, 미적분 → 미적분Ⅰ)
// v1.9: 2026-07-21 세션 57 2차 재검수 · CM2_NATIVE_RULES 4규칙 추가 (사건·평균·집합카드·두 무리수)
// v1.10: 2026-07-22 세션 69 · **신발끈 공식 3 룰 추가** (CM2 스코프 밖 좌표 넓이 공식 · A=문자열 · B=삼항 시그니처 · C=원점 축약 형태) · policy: [[feedback_shoelace_main_forbidden]]
// v1.8: 2026-07-21 세션 57 · **unit-aware 개선**
//   - 파일 경로·헤더에서 unit_scope 자동 감지 (CM1 or CM2+)
//   - CM2 이상 파일에서는 CM2 정규 도구 규칙 (집합기호·산술기하·치역/정의역·구간 등) 자동 skip
//   - RULES에 unit_min 필드 (기본 'CM1', CM2 정규 도구는 'CM2')
//   - 이번 세션 solution-review 8건 false positive 100+건 감소 기대

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Usage: node scripts/cm1-curriculum-check.mjs <file1.tex> [file2.tex ...]');
  console.error('       반환 코드: 0 = 위반 없음 / 1 = 위반 있음');
  process.exit(2);
}

// 위반 패턴 표 (CLAUDE.md §"CM1 교과과정 단일출처 표" v1.2)
// 2022 개정 교육과정 과목 체계 기준 분류:
//   - 공통수학1 (CM1) — 본 시험지 출제 범위
//   - 공통수학2 (CM2) — 별도 과목 (§집합과 명제 절대부등식 포함)
//   - 일반선택: 대수 (구 "수학 I") / 미적분Ⅰ (구 "수학 II") / 확률과 통계
//   - 진로선택: 미적분Ⅱ / 기하 등
const RULES = [
  // 🔴 CM1 행렬 단원 외 도구
  { level: 'RED', pattern: /A\^\{-1\}|A\^-1/g, name: '역행렬', alt: '행렬 직접 계산. 발문 식이 $A+A^{-1}=4E$라면 $A^2+E=4A$ 변형으로만 사용' },
  { level: 'RED', pattern: /\\text\{tr\}|\\mathrm\{tr\}|tr\\,A|trA(?![a-zA-Z])/g, name: '트레이스', alt: '"두 대각 성분의 합" 풀어쓰기' },
  { level: 'RED', pattern: /\\det\s*A|\\det\s*B|행렬식/g, name: '행렬식', alt: '"두 대각곱의 차" 풀어쓰기' },
  // 2026-06-24 마스터 확립: 케일리해밀턴 정리 허용 (시중 교재 옵션 수준 도구로 답지·풀이 인용 가능)
  // 단, 발문에 "케해를 유도하라"는 강요는 신중. 본 검출은 *비활성*.

  // 🔴 CM1 EQ 단원 외 (CM2 무리식 이상)
  { level: 'RED', pattern: /\\sqrt\{[0-9]+\}\s*[+\-]\s*\\sqrt\{[0-9]+\}/g, name: '두 종류 무리수 켤레 (CM2 무리식 이상)', alt: 'CM1은 $a+b\\sqrt c$ 단일 무리수만. 두 종류는 CM2 무리식 단원' },

  // 🔴 집합·구간 (CM2 §집합과 명제 이전 금지)
  { level: 'RED', pattern: /\\cup|\\cap|\\setminus|\\subseteq|\\subset|\\supset|\\emptyset|\\notin|\\varnothing|\\bigcup|\\bigcap/g, name: '집합 기호 (CM2 §집합과 명제 이후만 허용)', alt: '"또는"·"그리고"·"공통 범위"·"빈 집합"·"속하지 않음"' },
  // 2026-07-01 v1.4 마스터 지적 — 집합 검출 보강 (답지 9건 미검출 사건)
  { level: 'RED', pattern: /\\in\s*\\\{|\\in\s*\\?\{(?![a-zA-Z]+\})/g, name: '집합 원소 표기 $\\in \\{...\\}$ (CM2 §집합)', alt: '"$x$는 $\\{1,2,3\\}$ 중 하나" → "$x$는 $1,\\,2,\\,3$ 중 하나" 자연어 나열' },
  { level: 'RED', pattern: /\$\\\{[^}$]{3,}\\\}\$|\\\[\s*[^\]]*\\\{[0-9\-,\s.]+\\\}/g, name: '수식 내 중괄호 집합 표기 $\\{a,b,c,...\\}$', alt: '집합 표기 폐기 — "값은 $a,\\,b,\\,c$ 중 하나" 또는 "보기 ①$a$, ②$b$, ③$c$"로 나열' },
  { level: 'RED', pattern: /n\(A_\d|n\(E_\d|n\(A\\cap|n\(E\\cap|n\(A_i\)|n\(E_i\)/g, name: '사건 집합 표기 $n(A_i)$', alt: '"$A_i$가 일어나는 경우의 수" 자연어' },
  { level: 'RED', pattern: /\\lvert\s*[A-Z]\s*\\rvert/g, name: '집합 카드 |X| (절댓값 아닌 곳)', alt: '"원소의 개수"·"권수" 자연어' },
  // 한국어 집합 용어 — CM2 §집합과 명제 이전 금지
  { level: 'RED', pattern: /(?<![가-힣])공통부분(?![가-힣])|(?<![가-힣])교집합(?![가-힣])|(?<![가-힣])합집합(?![가-힣])|(?<![가-힣])차집합(?![가-힣])|(?<![가-힣])여집합(?![가-힣])|(?<![가-힣])공집합(?![가-힣])|(?<![가-힣])부분집합(?![가-힣])|(?<![가-힣])진부분집합(?![가-힣])|(?<![가-힣])벤다이어그램(?![가-힣])|(?<![가-힣])벤\s*다이어그램(?![가-힣])/g, name: '한국어 집합 용어 (CM2 §집합과 명제 이후만)', alt: '"공통 범위"·"두 조건 모두 만족"·"두 조건 중 적어도 하나"·"비어 있지 않다" 자연어' },
  { level: 'YELLOW', pattern: /(?<![가-힣])집합(?![가-힣])|(?<![가-힣])원소(?![가-힣])/g, name: '"집합"·"원소" (CM2 §집합과 명제 용어)', alt: 'CM1 답지·발문 사용 자제. "값들의 모임"·"값" 자연어. 예외: "해집합" → "해의 모임"' },

  // 🔴 미적분·해석 기호 (전 단원 금지)
  { level: 'RED', pattern: /\\sum|\\prod|\\int|\\lim|\\partial|\\nabla/g, name: '미적분·해석 기호', alt: '풀어쓰기 또는 미사용' },

  // 🔴 벡터·수 체계 기호
  { level: 'RED', pattern: /\\vec\{|\\overrightarrow\{/g, name: '벡터 기호', alt: 'CM 모든 단원 거부' },
  { level: 'RED', pattern: /\\mathbb\{[NZRQC]\}/g, name: '수 체계 기호 ℕ·ℤ·ℝ·ℚ·ℂ', alt: '자연어 "자연수"·"정수"·"실수"·"유리수"·"복소수"' },

  // 🟡 자연어 풀어쓰기 권장 (CM1 표준 외 한자식 압축·옛 용어)
  { level: 'YELLOW', pattern: /단조증가|단조감소|단조\s*증가|단조\s*감소/g, name: '"단조증가/감소" (미적분Ⅰ 용어)', alt: '"$x$가 커질수록 값이 커진다/작아진다"' },
  // 2026-06-27 v1.3 마스터 지적 — 답지 비교과 용어 검출 보강
  { level: 'YELLOW', pattern: /위로\s*볼록|아래로\s*볼록|위\s*볼록|아래\s*볼록/g, name: '"위로 볼록/아래로 볼록" (미적분Ⅰ 정식 용어)', alt: 'CM1 직관 표현은 "최고차항의 계수가 양수/음수" 또는 "그래프가 위로/아래로 열린 포물선"' },
  { level: 'RED', pattern: /(?<![가-힣])자유도(?![가-힣])/g, name: '"자유도" (통계·미적분 용어)', alt: '"미정계수의 개수"·"미지수의 개수"' },
  { level: 'YELLOW', pattern: /(?<![가-힣])치역(?![가-힣])|(?<![가-힣])정의역(?![가-힣])|(?<![가-힣])공역(?![가-힣])/g, name: '"치역·정의역·공역" (CM2 함수 단원 용어)', alt: 'CM1은 "함숫값의 범위"·"$x$의 범위"' },
  { level: 'YELLOW', pattern: /(?<![가-힣])단사(?![가-힣])|(?<![가-힣])전사(?![가-힣])|일대일\s*대응|일대일\s*함수/g, name: '"단사/전사/일대일" (CM2 함수 단원 용어)', alt: 'CM1 외' },
  { level: 'RED', pattern: /(?<![가-힣])수렴(?![가-힣])|(?<![가-힣])발산(?![가-힣])|수렴하|발산하/g, name: '"수렴/발산" (미적분Ⅰ 용어)', alt: 'CM1 외 도구' },
  { level: 'RED', pattern: /(?<![가-힣])극한(?![가-힣])|극한값|극한식/g, name: '"극한" (미적분Ⅰ 용어)', alt: 'CM1 외 도구' },
  { level: 'RED', pattern: /(?<![가-힣])근방(?![가-힣])/g, name: '"근방" (미적분Ⅰ 용어)', alt: '"근처"·"가까이"' },
  { level: 'YELLOW', pattern: /(?<![가-힣])함숫값(?![가-힣])|(?<![가-힣])함수값(?![가-힣])/g, name: '"함숫값" (CM2 함수 단원 용어)', alt: 'CM1은 "$f(x)$의 값"' },
  { level: 'YELLOW', pattern: /비이웃|비분기/g, name: '"비이웃"·"비분기" 압축 신조어', alt: '"이웃하지 않는"·"경우 나누기"' },
  { level: 'YELLOW', pattern: /(?<![가-힣])구간(?![가-힣])/g, name: '"구간" (CM2 §집합과 명제 이후 용어)', alt: '"범위"·"부등식의 해"·"근 사이 영역"' },
  { level: 'YELLOW', pattern: /매개변수|parameter/g, name: '"매개변수" (CM2/미적분 용어)', alt: '"미지수"·"상수"' },
  { level: 'YELLOW', pattern: /Viète|Cauchy|Lagrange|Bayes|Hilbert/g, name: '외국 수학자 이름 직접', alt: '한글 정리명' },

  // 🔴 확률과 통계 단원 (CM1 외 — 2022 개정 일반선택 별도 과목)
  // 2026-07-23 v1.11: 중복조합 nHr에 _ 접두 요구 (H₁·H₂ 점 라벨 false positive 방지)
  { level: 'RED', pattern: /중복조합|중복\s*조합|_\\mathrm\{H\}_\{?[0-9a-zA-Z]+\}?|\{?_[0-9a-zA-Z]+\}?\s*\\mathrm\{H\}_/g, name: '중복조합 nHr (확률과 통계)', alt: 'CM1 외 — 기본 조합 nCr만 사용' },
  { level: 'RED', pattern: /중복순열|중복\s*순열|중복\s*있는\s*순열/g, name: '중복순열 (확률과 통계)', alt: 'CM1 외 — 기본 순열 nPr만' },
  { level: 'RED', pattern: /원순열|원형\s*순열|원\s*탁|원탁/g, name: '원순열 (확률과 통계)', alt: 'CM1 외 — 일렬 순열만 사용' },
  { level: 'RED', pattern: /같은\s*것이?\s*있는\s*순열|같은\s*것\s*있는\s*순열/g, name: '같은 것이 있는 순열 (확률과 통계)', alt: 'CM1 외 단원' },
  { level: 'RED', pattern: /이항정리|이항\s*정리|\\binom\{n\}\{k\}.*전개/g, name: '이항정리 (확률과 통계)', alt: 'CM1 외 단원' },
  { level: 'RED', pattern: /(?<![가-힣])확률(?![가-힣])|조건부\s*확률|독립\s*시행|독립\s*사건|배반\s*사건|여\s*사건의\s*확률/g, name: '확률 (확률과 통계)', alt: 'CM1은 "경우의 수"까지만' },
  // 2026-07-02 v1.5 마스터 지적 — "여사건" 표현 삭제 (확률과 통계 §확률 용어)
  { level: 'RED', pattern: /(?<![가-힣])여사건(?![가-힣])|(?<![가-힣])여\s*사건(?![가-힣])/g, name: '"여사건" (확률과 통계 §확률 용어)', alt: 'CM1은 "경우의 수"까지 — "전체에서 [조건 어긋난 경우]를 빼서"·"이웃한 경우를 빼서" 자연어' },
  { level: 'RED', pattern: /나쁜\s*경우의?\s*수|나쁜\s*경우\s*수/g, name: '"나쁜 경우의 수" (비수학 표현)', alt: '"조건에 어긋난 경우의 수"·"조건 밖 경우의 수"' },
  { level: 'RED', pattern: /(?<![산술])(?<![ -])평균(?!\s*값\s*정리)(?![가-힣])|기댓값|분산|표준편차|이산확률변수|연속확률변수|정규분포|이항분포/g, name: '평균·통계 용어 (확률과 통계)', alt: 'CM1 외 — "합 ÷ 개수"로 풀어쓰기' },

  // 🔴 공통수학2 §집합과 명제 — 절대부등식 (CM1 부등식 단원과 다른 단원)
  { level: 'RED', pattern: /산술평균|기하평균|산술\s*기하\s*평균|AM[-\s]?GM|코시\s*슈바르츠/g, name: '산술평균·기하평균 부등식 (공통수학2 §집합과 명제)', alt: 'CM1 외 — CM2 *명제·절대부등식* 단원. CM1 부등식 단원에서 사용 금지' },

  // 🔴 미적분Ⅰ (일반선택, 구 "수학 II" — CM1 외 별도 과목)
  { level: 'RED', pattern: /도함수|미분계수|미분\s*가능|순간변화율|평균변화율/g, name: '미분 (미적분Ⅰ)', alt: 'CM1 외 단원' },
  { level: 'RED', pattern: /부정적분|정적분|적분\s*상수|넓이\s*적분|\\int|\bint\s/g, name: '적분 (미적분Ⅰ)', alt: 'CM1 외 단원' },
  { level: 'RED', pattern: /극댓값|극솟값|극값|극대|극소|변곡점/g, name: '극값·변곡점 (미적분Ⅰ)', alt: 'CM1 외 — "최댓값/최솟값"만 사용 (이차함수까지)' },
  { level: 'RED', pattern: /접선의?\s*방정식|접선의?\s*기울기|접점/g, name: '접선 (미적분Ⅰ)', alt: 'CM1 외 단원' },
  { level: 'RED', pattern: /삼차함수의?\s*그래프|사차함수의?\s*그래프|오차함수의?\s*그래프|고차함수의?\s*그래프/g, name: '삼차·사차·고차 함수 그래프 (미적분Ⅰ)', alt: 'CM1은 *방정식·부등식 인수분해*까지만. *함수 그래프* 표현 금지' },
  { level: 'RED', pattern: /(?<![이])차함수\s*그래프|\bn\s*차함수의?\s*그래프|\b3\s*차함수|\b4\s*차함수|\b5\s*차함수/g, name: '고차 함수 그래프 (미적분Ⅰ)', alt: 'CM1은 이차함수까지만' },
  { level: 'RED', pattern: /함수의?\s*극한|함수의?\s*연속/g, name: '함수의 극한·연속 (미적분Ⅰ)', alt: 'CM1 외 단원' },

  // 🔴 대수 (일반선택, 구 "수학 I" — CM1 외 별도 과목)
  { level: 'RED', pattern: /수열의?\s*합|시그마|\\sum|일반항\s*공식|등차수열|등비수열|점화식(?!.*행렬)|수열의?\s*극한/g, name: '수열 (대수, 구 "수학 I")', alt: 'CM1 외 단원 — 본 프로젝트 *대수 라인*에서만 출제' },
  // 2026-07-23 v1.11: sin·cos·tan에 word boundary 추가 (rec**tan**gle 등 false positive 방지)
  { level: 'RED', pattern: /로그함수|지수함수|삼각함수|\bsin\b|\bcos\b|\btan\b|\\log|\\ln|\\sin|\\cos|\\tan/g, name: '지수·로그·삼각함수 (대수, 구 "수학 I")', alt: 'CM1 외 단원' },

  // 🟡 옛 용어 (현 교과서 표준 용어 사용)
  { level: 'YELLOW', pattern: /(?<![분가-힣])실수부(?![분가-힣])|(?<![분가-힣])허수부(?![분가-힣])/g, name: '"실수부"·"허수부" 옛 용어', alt: '현 표준 "실수부분"·"허수부분"' },

  // 🔴 가우스 기호 (CM1 외 — 학평 별도 도구, 미적분Ⅰ 또는 정수론 외부 도구)
  // 2026-06-25 마스터 확립 — 7회차 #18 가우스 기호 누락 사건 계기 추가
  { level: 'RED', pattern: /\\lfloor|\\rfloor|⌊|⌋/g, name: '가우스 기호 ⌊x⌋·\\lfloor (CM1 외)', alt: 'CM1 외 도구. 학평·수능 외부 표기. CM1 시험지에 출제 금지' },
  { level: 'RED', pattern: /가우스\s*기호|가우스\s*\[|x\s*보다\s*크지\s*않은\s*최대\s*정수/g, name: '가우스 기호 정의/언급 (CM1 외)', alt: 'CM1 외 도구' },

  // 🔴 이항계수 \binom — 고등수학 표준 표기 아님 (CM1·CM2 모두 ${}_n\mathrm{C}_r$ 표준)
  // 2026-07-01 마스터 확립 — 1학기 기말 예상 1회 #16 답지 풀이에서 \binom 사용 적발
  { level: 'RED', pattern: /\\binom\{|\\dbinom\{|\\tbinom\{/g, name: '이항계수 \\binom (고등수학 비표준 표기)', alt: '고등수학 표준 표기 ${}_n\\mathrm{C}_r$ 사용. 조합은 ${}_n\\mathrm{C}_r$, 순열은 ${}_n\\mathrm{P}_r$. 조합·순열 구분 의무' },

  // 🔴 회전행렬·회전변환 — 고등수학 외 용어 (선형대수/대수 일반선택)
  // 2026-07-01 마스터 확립 — 1학기 기말 예상 1회 #24 \solnote에서 "회전" 표현 적발
  { level: 'RED', pattern: /회전\s*행렬|회전\s*변환|평면\s*회전|원점을?\s*중심으로?\s*[0-9]+\s*[°˚]\s*회전|[0-9]+\s*[°˚]\s*회전\s*시키는|회전\s*각도/g, name: '"회전행렬"·"회전변환"·"$N°$ 회전" (CM1 외 — 일반선택 대수/기하 용어)', alt: 'CM1에서는 행렬을 행렬 자체로만 다룸. 주기성·거듭제곱 관계로만 풀어쓰기. 예: "$A^4 = E$가 성립하므로 주기 $4$를 갖는다"' },

  // 🔴 대학 용어·CS 은어·압축 신조어·CLAUDE.md 금지어
  // 2026-07-01 v1.7 마스터 확립 — 답지 통찰노트에 7건 반복 유출 사건 계기
  // 검사 zone 확장: 본문뿐 아니라 [출제의도]·\solnote·quickgrid·헤더 등 학생 노출 텍스트 *전체*
  { level: 'RED', pattern: /비가환(성|이|을|은|은)?/g, name: '"비가환·비가환성" (대학 선형대수 용어 noncommutativity)', alt: '"행렬 곱셈의 순서에 따른 성분 차이"·"교환법칙이 성립하지 않는 곱셈"' },
  { level: 'RED', pattern: /멱등(성|행렬)?/g, name: '"멱등·멱등성·멱등행렬" (대학 대수 용어 idempotent)', alt: '"$X^2 = X$를 만족시키는 행렬"·"$X$를 여러 번 곱해도 $X$ 자신이 되는 성질"' },
  { level: 'YELLOW', pattern: /(?<![가-힣])분기(?![가-힣점])/g, name: '"분기" (CS 은어 branching, 학생용 답지 부적합)', alt: '"경우를 나누다"·"여러 경우로 갈리다". 예외: "분기점"은 허용' },
  { level: 'RED', pattern: /닫힌\s*범위|열린\s*범위|닫힌\s*구간|열린\s*구간|폐구간|개구간/g, name: '"닫힌/열린 범위·구간" (CM2 §집합과 명제 이후 구간 개념)', alt: 'CM1은 부등식으로만 표현. 예: "$\\alpha \\le x \\le \\beta$ 꼴"·"부등식의 해가 $\\alpha < x < \\beta$인 경우"' },
  { level: 'RED', pattern: /이미\s*분리된|이미\s*분해된/g, name: '"이미 분리된" (압축 신조어)', alt: '"인수분해된 일차식의 근"·"$x = c$"로 구체적으로 지칭' },
  { level: 'RED', pattern: /중근\s*인접|근\s*인접|근이\s*겹치는(?!\s*경우)/g, name: '"중근 인접·근 인접" (압축 신조어)', alt: '"이차식의 두 근 중 하나가 $x = c$와 겹쳐 중근이 되는 경우" 풀어쓰기' },
  { level: 'RED', pattern: /(?<![가-힣])정합(?![가-힣])/g, name: '"정합" (CLAUDE.md §"용어 제약" 금지 예시)', alt: '"대입 확인"·"조건과 일치"·"모순 여부 점검"' },
  // ─── CM2 범위 밖 어구 (v1.6, 2026-07-13 세션 35 마스터 지적) ───
  // 원인: 와부고 CM2 1회 답지·문제·Critical Point에서 "극선"·"삼각부등식" 사용 → CM2 도형의 방정식 밖 용어
  { level: 'RED', pattern: /(?<![가-힣])극선(?![가-힣])/g, name: '"극선" (polar line — CM 범위 밖 · 대학 사영기하)', alt: '"두 접점을 지나는 직선" 자연어. 문제·답지·CP 모두 폐기' },
  { level: 'RED', pattern: /(?<![가-힣])극점(?![가-힣])/g, name: '"극점" (pole — 사영기하 용어)', alt: '"원 외부의 점"·"극선의 대응 점" 자연어' },
  { level: 'RED', pattern: /삼각\s*부등식/g, name: '"삼각부등식" (triangle inequality — 정식 명칭은 대학·기하 이상)', alt: 'CM에서는 "두 원의 위치 관계"·"두 변의 합·차의 조건" 조건 직접 서술' },
  // ─── 신발끈 공식 (v1.10, 2026-07-22 세션 69 마스터 지적) ───
  // 원인: CM2 정리편 답지 8건 전수 검사 무통과 · 좌표 삼각형 넓이 정석 (밑변×높이/2) 벗어난 공식
  { level: 'RED', pattern: /(?<![가-힣])(신발끈|shoelace|surveyor|surveyor's)(?![가-힣])/gi, name: '"신발끈 공식" (shoelace / surveyor\'s · CM2 스코프 밖)', alt: 'CM2 정석: 밑변×높이/2 (점과 직선 사이 거리로 높이). 좌표 넓이 공식은 \\dmothersolution 부기만 허용' },
  { level: 'RED', pattern: /x_?\{?[A-Za-z]\}?\s*\(\s*y_?\{?[A-Za-z]\}?\s*[-−]\s*y_?\{?[A-Za-z]\}?\s*\)\s*\+\s*x_?\{?[A-Za-z]\}?\s*\(\s*y_?\{?[A-Za-z]\}?\s*[-−]\s*y_?\{?[A-Za-z]\}?\s*\)/g, name: '좌표 넓이 공식 시그니처 (신발끈 형태)', alt: '좌표평면 삼각형 넓이는 CM2 정석 밑변×높이/2로만 계산 (다른 풀이는 \\dmothersolution 부기)' },
  // v1.12 (2026-07-23 세션 75): 07 RF01 R-2·R-3 shoelace 잔여 감지 실패 후 감도 강화
  // R-2 스타일: 좌표값 (수식/치환된 상수) 대입 후 shoelace 다항식 · "좌표를 이용한 공식" 우회 문구도 감지
  { level: 'RED', pattern: /좌표를?\s*이용한?\s*공식|좌표\s*공식으로?\s*계산|좌표\s*공식을?\s*이용/g, name: '"좌표를 이용한 공식" (신발끈 우회 표현 · CM2 스코프 밖)', alt: 'CM2 정석 밑변×높이/2 · 대각선으로 이분해 삼각형 합 서술. \\dmothersolution 부기만 허용' },
  // R-3 스타일 : 원점 축약 shoelace `x_P y_Q - x_Q y_P` (곱셈 형태 · 차감형)
  { level: 'RED', pattern: /x_[A-Za-z_{}]{1,8}\s*\\?,?\s*y_[A-Za-z_{}]{1,8}\s*[-−]\s*x_[A-Za-z_{}]{1,8}\s*\\?,?\s*y_[A-Za-z_{}]{1,8}/g, name: '원점 축약 좌표 넓이 곱꼴 시그니처 |x_P y_Q - x_Q y_P|', alt: 'CM2 정석 밑변 √(x²+y²), 높이 점과 직선 거리로 재구성. \\dmothersolution 부기만 허용' },
  // \cdot 명시적 곱 형태 · 07 R-3 원본 스타일
  { level: 'RED', pattern: /[a-zA-Z_0-9()\\{},]+\s*\\cdot\s*\\?d?frac\{[^{}]*\}\{[^{}]*\}\s*[-−]\s*[a-zA-Z_0-9()\\{},]+\s*\\cdot\s*\\?d?frac\{[^{}]*\}\{[^{}]*\}/g, name: '차감형 좌표 넓이 (분수 형태 · x_P·y_Q - x_Q·y_P)', alt: 'CM2 정석 밑변×높이/2 재구성. \\dmothersolution 부기만 허용' },
  { level: 'YELLOW', pattern: /\\bigl\|\s*[a-zA-Z0-9()\-\s\\,]*\\cdot\s*[a-zA-Z0-9()\-\s\\,]*\s*[-−]\s*[a-zA-Z0-9()\-\s\\,]*\\cdot\s*[a-zA-Z0-9()\-\s\\,]*\s*\\bigr\|/g, name: '원점 포함 축약 좌표 넓이 형태 |x_A·y_B - x_B·y_A|', alt: '원점 포함 삼각형도 CM2 정석 밑변×높이/2 (밑변 길이 √(x²+y²), 높이 점과 직선 거리) 로. \\dmothersolution 부기만 허용' },
  // ─── 답지 표기 규약 (v1.7, 2026-07-18 세션 48 마스터 지적) ───
  // 원인: DeeP Red 2회 답지 #3 gcd 함수 · #13 원소-구간 혼용 · #16 "도치" 비표준 용어
  { level: 'YELLOW', pattern: /\\gcd\s*\(/g, name: '\\gcd(...) 함수 표기 (고등수학 표준 아님)', alt: '"최대공약수"로 풀어쓰기. 예: "18과 12의 최대공약수는 6이다"' },
  { level: 'YELLOW', pattern: /(?<![가-힣])도치(?![가-힣])/g, name: '"도치" (표준 수학 용어 아님)', alt: '"역함수의 관점에서"·"거꾸로 대응시키면"·"$A$와 $B$의 역할을 바꾸어" 자연어' },
  { level: 'YELLOW', pattern: /\\in\s*\\?\[[^\]]*,[^\]]*\\?\]/g, name: '$\\in [a, b]$ 원소-구간 표기 (수-구간 혼용)', alt: '학평 표준 부등식 표기 "$a \\le x \\le b$" 형태. 예: "$40 - n(A \\cup B) \\in [10, 23]$" → "$10 \\le 40 - n(A \\cup B) \\le 23$"' },
  // 별점 노출·내부 시스템 필드는 scripts/master-feedback-check.mjs가 frontmatter로 자동 처리
  // (bank/마스터-지적/2026-07-01-학생자료-별점노출-금지.md)
];

// v1.8 · unit_scope 자동 감지 (파일 경로·헤더에서 CM1 or CM2+ 판정)
function detectUnitScope(filePath, content) {
  // 절대경로로 resolve해서 상위 폴더까지 확인
  const absPath = path.resolve(filePath);
  if (/공통수학2|\bCM2\b/i.test(absPath)) return 'CM2';
  if (/공통수학1|\bCM1\b/i.test(absPath)) return 'CM1';
  // 파일 헤더 (상단 100줄) 안 unit_code 주석 또는 CM2/CM1 언급
  const head = content.split(/\r?\n/).slice(0, 100).join('\n');
  const m = head.match(/unit[_-]?code\s*[:=]\s*['"]?(CM[12]|CM2-[A-Z]+)['"]?/i);
  if (m) return m[1].startsWith('CM2') ? 'CM2' : 'CM1';
  // 파일 헤더 주석에 "CM2" 명시 (deep-math 정리편 관례)
  if (/CM2[-\s]|공통수학2/i.test(head)) return 'CM2';
  // \dmchapter{NN} — CM2 시리즈는 05~10 사용 관례
  const chap = head.match(/\\dmchapter\{(\d+)\}/);
  if (chap) {
    const n = parseInt(chap[1], 10);
    if (n >= 5) return 'CM2';  // CM2 정리편 05~08 · CM1은 통상 01~04
  }
  return 'CM1';  // default 안전 (엄격)
}

// v1.9 · CM2 정규 도구로 skip할 rule 이름 (unit_min == 'CM2')
const CM2_NATIVE_RULES = new Set([
  '집합 기호 (CM2 §집합과 명제 이후만 허용)',
  '집합 원소 표기 $\\in \\{...\\}$ (CM2 §집합)',
  '수식 내 중괄호 집합 표기 $\\{a,b,c,...\\}$',
  '한국어 집합 용어 (CM2 §집합과 명제 이후만)',
  '"집합"·"원소" (CM2 §집합과 명제 용어)',
  '"치역·정의역·공역" (CM2 함수 단원 용어)',
  '"단사/전사/일대일" (CM2 함수 단원 용어)',
  '"함숫값" (CM2 함수 단원 용어)',
  '"구간" (CM2 §집합과 명제 이후 용어)',
  '"닫힌/열린 범위·구간" (CM2 §집합과 명제 이후 구간 개념)',
  '산술평균·기하평균 부등식 (공통수학2 §집합과 명제)',
  '접선 (미적분Ⅰ)',  // CM2 §원의 접선·§유리무리함수의 점근선 정규 도구
  '"매개변수" (CM2/미적분 용어)',  // CM2 §RF에서도 사용 관례 (자연어화 정책은 별도 handling)
  // v1.9 신규 (2026-07-21 세션 57 2차 재검수)
  '사건 집합 표기 $n(A_i)$',  // CM2-ST에서 n(A∩B)·n((A∪B)ᶜ) 정규 사용
  '평균·통계 용어 (확률과 통계)',  // CM2 명제 §산술평균·기하평균 정규
  '집합 카드 |X| (절댓값 아닌 곳)',  // CM2에서 n(A) 표기로 대체됨
  '두 종류 무리수 켤레 (CM2 무리식 이상)',  // CM2-RF §무리식·무리함수 정규 도구
]);

let totalRed = 0;
let totalYellow = 0;
let totalSkipped = 0;
const reports = [];

for (const file of args) {
  if (!fs.existsSync(file)) {
    console.error(`⚠️  파일 없음: ${file}`);
    continue;
  }
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);
  const unitScope = detectUnitScope(file, content);

  for (const rule of RULES) {
    // v1.8 · CM2 정규 도구는 CM2 이상 파일에서 skip
    if (unitScope === 'CM2' && CM2_NATIVE_RULES.has(rule.name)) {
      totalSkipped++;
      continue;
    }
    for (let i = 0; i < lines.length; i++) {
      const rawLine = lines[i];
      // v1.9 · LaTeX 주석 (%로 시작) 제외 · 학생 미노출 텍스트
      const commentIdx = rawLine.search(/(?<!\\)%/);
      const line = commentIdx >= 0 ? rawLine.slice(0, commentIdx) : rawLine;
      if (!line.trim()) continue;
      rule.pattern.lastIndex = 0; // reset regex state
      const matches = [...line.matchAll(rule.pattern)];
      if (matches.length > 0) {
        for (const m of matches) {
          reports.push({
            file: path.basename(file),
            line: i + 1,
            level: rule.level,
            name: rule.name,
            match: m[0],
            alt: rule.alt,
            context: line.trim().slice(0, 120),
            unitScope,
          });
          if (rule.level === 'RED') totalRed++;
          else totalYellow++;
        }
      }
    }
  }
}

// 출력
if (reports.length === 0) {
  console.log('✅ CM1 교과과정 위반 0건. 통과.');
  process.exit(0);
}

console.log(`\n🔴 RED 위반 ${totalRed}건 / 🟡 YELLOW 권장 ${totalYellow}건\n`);
console.log('=== 위반 위치 ===');
for (const r of reports) {
  const icon = r.level === 'RED' ? '🔴' : '🟡';
  console.log(`${icon} ${r.file}:${r.line}  [${r.name}]  "${r.match}"`);
  console.log(`    context: ${r.context}`);
  console.log(`    대안: ${r.alt}`);
  console.log();
}

console.log('=== 단일 출처 ===');
console.log('CLAUDE.md §"CM1 교과과정 단일출처 표" v1.2 (2026-06-24)');
console.log('2022 개정 과목 체계: 공통수학1·2 / 대수 / 미적분Ⅰ·Ⅱ / 확률과 통계 / 기하');
console.log();

// RED 있으면 exit 1 (CI/hook이 차단)
if (totalRed > 0) {
  console.error(`❌ 빌드 차단: 🔴 위반 ${totalRed}건. 수정 후 재시도.`);
  process.exit(1);
}
console.log('⚠️  YELLOW 권장 사항 있음. 검토 권장 (빌드는 통과).');
process.exit(0);
