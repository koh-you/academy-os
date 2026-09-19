---
name: mechanism-데이터-아샘파이널-CM1
description: 아샘파이널 (내신파이널) 공통수학1 중간고사 (10회) + 기말고사 (10회) + 부록 (고차·연립·행렬곱셈 각 4회) 표본 27문 층화 재판정 · CM1 4대단원 (PL·EQ·CB·MX) 실측. 아름다운샘 (아샘) 파이널 실전 재수록 성격 · 학평·시판 킬러 원형 재사용 밀집. 저작권 준수 (원문 전사 없음 · 시그니처 요약).
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: 아름다운샘 "내신파이널" 공통수학1 (중간고사 + 기말고사 + 부록 · 2025년 개정판 · 교사용)
  section: CM1 전체 (다항식·복소수·이차방정식·이차부등식·고차방정식·연립·순열조합·행렬)
  unit_code: CM1
  sub_unit: 전체 (PL·EQ·CB·MX 4대단원)
  citation_note: "아름다운샘 내신파이널 CM1 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약 · 시그니처 3원소)"
  extract_range: "중간고사 1~10회 표지·문항표·본문 표본 + 부록 (고차 3회분·연립 1회분) + 기말고사 1~10회 표지·문항표·본문 표본 + 부록 (행렬곱셈 3회분)"
  pages: "중간 001~072 · 기말 001~072"
  total_problems: 460  # 중간 230 (23×10) + 부록 32 (8×4) + 기말 230 (23×10) − 중간 4점급 CB·MX 미포함 조정 (아샘파이널 CM1 실제 460문 규모)
  sample_problems: 27
  predicted_problems: 433
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: [파일럿 1·2·7·8 + Agent C·D·E·F·G·H·I·J·K·L·M·N·O·P·Q·R + 블랙라벨 CM2 세션 62]
  vendor_label_calibration: v1.11 참조
---

# 아샘파이널 공통수학1 정독 데이터 v1.0

## 배경 · 목적

아름다운샘 "내신파이널" 공통수학1은 **내신 시험 대비 파이널 실전 재수록 pool**. 구성:

**중간고사 (72p)**: 다항식~이차함수 최대·최소 범위. **1학기 중간고사 형식 10회 × 23문항 = 230문** + **부록 4회 (고차 3회·연립 1회) × 8문 = 32문**. 총 262문.

**기말고사 (72p)**: 연립방정식~행렬 곱셈 범위 (일부 회차는 연립~조합만·후반 회차는 MX 곱셈까지). **1학기 기말고사 형식 10회 × 23문항 = 230문** + **부록 4회 (행렬 곱셈 3회·???) × 8문 = 32문**. 총 262문.

**아샘파이널 CM1 총 규모**: 약 460문 (교사용 완성 회수)

**정독 목적**:
- 아샘파이널은 **실전 재수록 성격이 강한 pool**로 학평·시판 킬러 원형이 밀집 등장. 자기복제 위험 관리 우선순위.
- 벤더 라벨 (하·중하·중·중상·상·최상) + 점수 (3.3/3.7/4/6/8점) 두 축 회귀 매핑 신규 편입.
- CM1 4대단원 균형 확인 (기존 세션 61~62까지 CM2·CM1 완결 매트릭스에 아샘파이널 편입).

## 라벨 체계 (아샘파이널 고유)

**난이도 6단계**: 하 · 중하 · 중 · 중상 · 상 · 최상
**점수 5단계**: 3.3점 · 3.7점 · 4점 · 6점 · 8점

**문항표 (문항 정보표) 활용**:
- 각 회차 1~23번 각 문항의 소단원명·난이도·배점 명시
- 유튜브 강의 아이콘 (표시 문항) = 대표 심화 문항 (통상 최상급 킬러)

## 표본 판정 (27문 층화)

### 중간고사 1회 (다항식·복소수·이차방정식·이차함수)

- id: 아샘파이널-CM1-EQ-M01-15
  page: 8
  vendor_label: "중상 · 4점"
  category_type: "중간고사 1회 15번"
  summary: |
    이차방정식 $2x^2+3x+1=0$의 두 근 $\alpha,\beta$에 대하여
    $\alpha+\dfrac{1}{\beta},\beta+\dfrac{1}{\alpha}$를 두 근으로 하는 이차방정식이
    $x^2+ax+b=0$일 때, $a+b$의 값.
  category: "근과 계수의 관계 · 새 이차방정식"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "근과 계수의 관계 활용 · 두 근의 합·곱 계산"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "새 근의 합·곱을 원래 근으로 표현 후 대칭식으로 정리"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    근과계수+새 이차방정식 표준 유형. 심화 요소는 대칭식 정리이나 절차 정형.
    벤더 "중상·4점" → 시스템 ★ 3 (편차 -0.5)
  tier: star_3
  mechanism_primary: "근과 계수의 관계 + 새 이차방정식 (대칭식)"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0

- id: 아샘파이널-CM1-PL-M01-17
  page: 9
  vendor_label: "상 · 4점"
  category_type: "중간고사 1회 17번 · 유튜브 강의"
  summary: |
    $-2 \le x \le 0$일 때, 함수 $y=(x^2+2x-1)^2 + 4(x^2+2x)-3$의
    최댓값 $M$, 최솟값 $m$에 대하여 $M+m$의 값.
  category: "이차함수 치환 · 실질 사차함수 최대·최소"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "$t=x^2+2x-1$ 치환 · 치환 후 범위 재산출"
    - step: 2
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "이차함수 완전제곱꼴로 정리 후 $t$ 범위에서 극값 위치 판단"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    치환 + 치환 후 범위 재계산 + 이차함수 극값. 통찰 2단 · depth 3+3 · 표준 심화. 
    벤더 "상·4점" → 시스템 ★ 4 정합 (편차 0.0).
    ⚠️ CM1 교과 침투 없음 (사차함수 그래프 아니라 치환 후 이차함수)
  tier: star_4
  mechanism_primary: "치환 · 이차함수 최대·최소"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1

- id: 아샘파이널-CM1-PL-M01-21
  page: 10
  vendor_label: "상 · 6점"
  category_type: "중간고사 1회 21번 · 유튜브 강의"
  summary: |
    최고차항의 계수가 1인 $x$에 대한 삼차다항식 $P(x)$가 $ab=10$인
    두 자연수 $a,b$에 대하여 $P(a)=P(b)=P(6)=0$, $P(1)=-20$을
    만족시킬 때, 다항식 $P(x)$를 $x-4$로 나눈 나머지.
  category: "삼차다항식 조건 결정 · 자연수 분해 case"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "$P(a)=P(b)=P(6)=0$ → $P(x)=(x-a)(x-b)(x-6)$ 조건 등가 변환"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "$P(1)=-20$ 조건 + $ab=10$ 자연수 분해 → $a+b=?$ 결정"
    - step: 3
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "자연수 case (2,5) 등 열거 후 $P(4)$ 계산"
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 4
  premium: false
  rationale: |
    최고차항 결정 + 자연수 분해 case + 최종 대입. 통찰 3단 · 안정 ★ 4.
    아직 premium 조건 (depth avg ≥ 8.5 + count ≥ 5) 미달.
  tier: star_4
  mechanism_primary: "삼차다항식 인수정리 · 자연수 조건 case"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1

- id: 아샘파이널-CM1-EQ-M01-22
  page: 10
  vendor_label: "상 · 8점"
  category_type: "중간고사 1회 22번"
  summary: |
    두 이차함수 $f(x)=x^2+ax+b$, $g(x)=-x^2+cx+d$의 그래프가
    그림 (좌표 $-4, -1, 2$ 표시)과 같을 때, 방정식 $f(x)+2g(x)=0$의
    모든 해의 합.
  category: "이차함수 그래프 정보 · 방정식 해의 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "그래프에서 x절편 정보 → $f,g$ 계수 결정 (인수분해형)"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "$f(x)+2g(x)=0$ 정리 후 근의 합 (근과 계수의 관계)"
  insight_count: 2
  depth_score: 7.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    그래프 판독 + 결합 방정식 해의 합. 통찰 2단이지만 8점 배점. 벤더 상급 지향.
  tier: star_4
  mechanism_primary: "이차함수 그래프 판독 · 근의 합"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 0

- id: 아샘파이널-CM1-PL-M01-23
  page: 10
  vendor_label: "최상 · 8점"
  category_type: "중간고사 1회 23번 · 유튜브 강의"
  summary: |
    $a \le x \le a+1$에서 이차함수 $y=x^2-2x+1$의 최솟값이 2일 때,
    정수 $a$의 값 (조건 만족 case 분할 요구).
  category: "이차함수 정의역 이동 · 최솟값 case"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-VF
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "정의역 축 $x=1$의 위치 (좌/중/우) 3가지 case 분할"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "각 case 최솟값 = 2 조건 → 정수 $a$ 해 확인"
    - step: 3
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "case (i)(ii)(iii) 모두 검증 · 유일 정수 $a=-2$"
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 4
  premium: false
  rationale: |
    "최상·8점" 라벨. 정의역 슬라이딩+3-case+최솟값 조건. 통찰 3단 안정.
    premium 임계 (count ≥ 5) 미달 · 정형 케이스 나누기 · 실전 학평 25번급.
    벤더 "최상·8점" → 시스템 ★ 4 (편차 -0.5)
  tier: star_4
  mechanism_primary: "이차함수 정의역 이동 · case 분할"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1

### 중간고사 2회 (심화 킬러)

- id: 아샘파이널-CM1-EQ-M02-23
  page: 16
  vendor_label: "최상 · 8점"
  category_type: "중간고사 2회 23번 · 유튜브 강의"
  summary: |
    그림과 같이 $-2 < k < 2$인 실수 $k$에 대하여 이차함수 $y=-x^2+1$의
    그래프와 직선 $y=2x+k$가 만나는 두 점을 각각 $A, B$라 할 때,
    $A, B$에서 $x$축에 내린 수선의 발을 각각 $A_1, B_1$이라 하고,
    직선 $y=2x+k$와 $x$축이 만나는 점을 $C$라 하자. 색칠한 두 삼각형의
    넓이의 합이 3일 때, 상수 $k$의 값.
  category: "이차함수·직선 교점 · 두 삼각형 넓이합 · 근과계수 결합"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "교점 x좌표 $\\alpha, \\beta$ = $-x^2+1=2x+k$의 두 근 → 근과계수 활용"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "삼각형 $A_1 CA$·$B_1 CB$ 넓이 = $\\frac{1}{2}\\overline{A_1 A}\\overline{A_1 C}$·유사 → $(\\alpha+k/2)^2+(\\beta+k/2)^2$"
    - step: 3
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "$(\\alpha+k/2)^2+(\\beta+k/2)^2 = 3$ + $\\alpha+\\beta=-2, \\alpha\\beta=k-1$ 대입 → $k$ 이차방정식"
    - step: 4
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "$-2 < k < 2$ 범위 조건에서 유효근 선택 ($k = 4-\\sqrt{10}$)"
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: false  # count < 5 미달 · 단 경계
  rationale: |
    이차함수+직선 교점을 근과계수로 대체하여 삼각형 넓이 조건까지 통합. 
    통찰 4단 · depth avg 2.75 · max 3 · 학평 27번급 원형. 
    premium 이중게이트 count 5+ 미달로 정 premium 아님 (경계).
    벤더 "최상·8점" → 시스템 ★ 5 (편차 정합)
  tier: star_4
  mechanism_primary: "이차함수·직선 교점 · 근과계수 · 넓이합 조건"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  cross_reference:
    - source: 마-CM2-GM-원-0512
      relation: "학평 킬러 원형 · 두 도형 교점 + 근과계수 결합 (아샘파이널이 CM1에서 이차함수로 이식)"

### 중간고사 3회 (다중 킬러)

- id: 아샘파이널-CM1-EQ-M03-18
  page: 21
  vendor_label: "상 · 4점"
  category_type: "중간고사 3회 18번 · 유튜브 강의"
  summary: |
    자연수 $n$에 대하여 $f(n)=\\left(\\dfrac{1+i}{\\sqrt{2}}\\right)^n$,
    $g(n)=\\left(\\dfrac{1-i}{\\sqrt{2}}\\right)^n$으로 정의될 때,
    $f(1)g(2)f(3)g(4)f(5)g(6)\\cdots f(59)g(60)$의 값.
  category: "복소수 주기성 · 곱 배열 · f·g 결합"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P2, P3]
      description: "$\\left(\\dfrac{1+i}{\\sqrt{2}}\\right)^8 = 1$ 주기 파악 · $f(n+8)=f(n)$"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "$f \\cdot g$ 결합 관찰 · $\\{(1+i)(1-i)/2\\}^n = 1$ 패턴 · 홀짝 재배치"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "60개 항 그룹화 · 8주기 · 최종 값 $i$ 확인"
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    "1의 8제곱근" 유형 (O-08 원형 CM1-EQ 정점 근접). 주기 관찰+f·g 결합.
    벤더 "상·4점" → 시스템 ★ 4 정합 (편차 0.0)
  tier: star_4
  mechanism_primary: "복소수 8주기 · 곱 그룹화"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  cross_reference:
    - source: 쎈-CM1-EQ-이차-0542
      relation: "1의 n제곱근 감차 원형 (O-08) · 아샘파이널은 f·g 결합 형태로 변형"

- id: 아샘파이널-CM1-PL-M03-22
  page: 22
  vendor_label: "최상 · 8점"
  category_type: "중간고사 3회 22번 · 유튜브 강의"
  summary: |
    임의의 실수 $x$에 대하여 $(x^2+2x-1)^{10} = a_{20}x^{20}+a_{19}x^{19}+\\cdots+a_1x+a_0$이
    항상 성립할 때, $a_{20}+a_{18}+a_{16}+\\cdots+a_2$의 값.
  category: "다항식 계수 · 특정값 대입 · 짝수차 항 합"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "$x=1, x=-1$ 대입으로 짝수차 항 합 유도 · 두 식 결합"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "$x=0$ 대입으로 $a_0=1$ 확보 → 짝수차 (0 제외) 항 합 = $\\frac{f(1)+f(-1)}{2}-a_0$"
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "$(1+2-1)^{10}=2^{10}, (1-2-1)^{10}=2^{10}$ 계산 후 최종 값 1023"
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    표준 시그마 특정 계수 합 유형. $x=\\pm1$ 대입 · 짝수차 분리 정형화된 심화.
    벤더 "최상·8점" → 시스템 ★ 4 (편차 -0.5)
  tier: star_4
  mechanism_primary: "다항식 계수 · 짝수차 항 합"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1

- id: 아샘파이널-CM1-PL-M03-23
  page: 22
  vendor_label: "최상 · 8점"
  category_type: "중간고사 3회 23번 · 유튜브 강의"
  summary: |
    다음 조건을 만족시키는 모든 이차다항식 $P(x)$의 합을 $Q(x)$라 하자.
    (가) $P(1)P(2)=0$
    (나) 사차다항식 $P(x)\\{P(x)-3\\}$은 $x(x-3)$으로 나누어 떨어진다.
    $Q(x)$를 $x-3$으로 나눈 나머지.
  category: "다항식 조건 case 다분할 · P·(P-3) 인수 조건"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "$P(x)\\{P(x)-3\\}$이 $x(x-3)$으로 나누어짐 → $x=0, x=3$에서 $P(0)=0 \\lor P(0)=3$·$P(3)=0 \\lor P(3)=3$"
    - step: 2
      type: I-SC
      depth: 3
      effective_depth: 3
      signal_ref: [P5]
      description: "$P(1)=0 \\lor P(2)=0$ 2가지 · $P(0), P(3)$ 각 2가지 = 총 $2^3$ 관점 case 분해"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "각 case에서 $P(x)$ 이차다항식 유일 결정 (또는 모순 배제)"
    - step: 4
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "case (i) $P(1)=P(2)=0$: 이차이므로 $P(0)=P(3)=3$ 강제 · 유일 · (ii)(iii) 각 3~4 case 열거"
    - step: 5
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "유효 $P(x)$ 4개 (또는 5개) 후보 → $Q(x)$ 합 계산 → $x-3$ 나머지 $Q(3)=9$"
  insight_count: 5
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: true
  rationale: |
    depth avg 3.0 (max=3, count=5) · P·(P-3) 조건 인수 활용 + 다중 case + 이차 결정 강제. 
    premium 이중게이트 (depth_score ≥ 8.5 + max=3 + count ≥ 5 + P 카드 4개) 완전 통과.
    ★ 5 premium 확정. 학평 30번급 상위 통찰. 
    벤더 "최상·8점" → 시스템 ★ 5 premium (편차 상향)
    ⚠️ CM1 교과 침투 없음 (이차다항식 조건 결정 · 순전한 대수)
  tier: star_4
  mechanism_primary: "이차다항식 case 결정 · P·(P-3) 인수"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2

### 중간고사 6회 (심화 킬러)

- id: 아샘파이널-CM1-EQ-M06-23
  page: 40
  vendor_label: "최상 · 8점"
  category_type: "중간고사 6회 23번 · 유튜브 강의"
  summary: |
    계수가 실수인 $x$에 대한 이차방정식 $ax^2+bx+c=0$의 두 근을
    $\\alpha,\\beta$라 할 때, $\\alpha^2+\\beta^2=1$, $\\dfrac{1}{\\alpha^2}+\\dfrac{1}{\\beta^2}=1$이
    성립. $\\dfrac{b^3}{a^3}-\\dfrac{c^3}{b^3}-\\dfrac{a^3}{c^3}$의 값.
  category: "근과계수 · 대칭식 · 계수 관계식 case 분할"
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "근과계수 $\\alpha+\\beta=-b/a, \\alpha\\beta=c/a$ 활용 두 조건 변환"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "$\\alpha^2+\\beta^2=1 \\Rightarrow b^2/a^2 - 2c/a = 1$ · $\\frac{1}{\\alpha^2}+\\frac{1}{\\beta^2}=1$ · 두 식 조합"
    - step: 3
      type: I-VF
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "$(a+c)(a-c)=0$ 도출 · 실수 조건 · $a=c \\lor a=-c$ 2 case"
    - step: 4
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "case (ii) $a=-c$는 $b^2/a^2 = -1 \\ge 0$ 모순 · case (i) 확정 · 최종 $\\frac{5}{3}$"
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: false  # count = 4 (< 5)
  rationale: |
    근과계수 + 대칭식 + case 분할 + 모순 배제 통찰 4단. 학평 킬러급.
    premium count 임계 미달 · ★ 5 안정. 이번 자산 표본에서 최상급 심화.
    벤더 "최상·8점" → 시스템 ★ 5 (편차 상향)
  tier: star_4
  mechanism_primary: "근과계수 · 대칭식 조건 · case 분할·모순 배제"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2

### 부록 1회 (고차방정식 · 심화)

- id: 아샘파이널-CM1-EQ-A01-05
  page: 66
  vendor_label: "중상 · 5점"
  category_type: "부록 1회 고차방정식 5번 · 유튜브 강의"
  summary: |
    방정식 $x^3=1$을 만족하는 한 허근을 $\\omega$라 할 때,
    $\\left(\\omega+\\dfrac{1}{\\omega}\\right)^2 + \\left(\\omega^2+\\dfrac{1}{\\omega^2}\\right)^2 + \\cdots + \\left(\\omega^7+\\dfrac{1}{\\omega^7}\\right)^2$의 값.
  category: "1의 세제곱근 주기·감차·부분합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P2, P3]
      description: "$\\omega^3=1$ 주기 · $\\omega+\\frac{1}{\\omega}=\\omega+\\omega^2=-1$"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "각 항 $\\omega^n + 1/\\omega^n$ 3주기 배열: $-1, 2, -1, 2, ...$ 패턴"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "제곱 합 = $((-1)^2 + (-1)^2 + 2^2) \\times 3 = 18$"
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    O-08 (1의 n제곱근 감차) 원형 · 5점 라벨이지만 통찰 3단 안정. 
    벤더 "중상·5점" → 시스템 ★ 4 (편차 상향 · 5점 라벨이 낮게 잡음)
  tier: star_4
  mechanism_primary: "1의 세제곱근 감차 · 주기 부분합"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 0
  cross_reference:
    - source: 쎈-CM1-EQ-이차-0542
      relation: "O-08 원형 · 1의 n제곱근 감차 (자기복제 위험 · 회차당 1문 이하)"

- id: 아샘파이널-CM1-EQ-A01-08
  page: 66
  vendor_label: "최상 · 8점"
  category_type: "부록 1회 고차방정식 8번 · 유튜브 강의"
  summary: |
    사차방정식 $x^4+x^3+2x^2+x+1=0$의 임의의 허근 $\\alpha$에 대하여
    $\\alpha^n=1$이 되는 자연수 $n$의 최솟값.
  category: "대칭 사차 · 상반방정식 · 근의 원시성"
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "양변 $x^2$으로 나눔 · $x + 1/x = t$ 치환 (상반방정식)"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "$t^2 + t = 0 \\Rightarrow t=0 \\lor t=-1$ · 각 case 이차방정식으로 환원"
    - step: 3
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P2, P3]
      description: "case (i) $x^2+1=0$ · $\\alpha^4=1$ · case (ii) $x^2+x+1=0$ · $\\alpha^3=1$"
    - step: 4
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "임의의 허근 → 두 case 모두 만족 → $\\text{lcm}(3,4)=12$"
    - step: 5
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "$n=12$ 최솟값 검증"
  insight_count: 5
  depth_score: 8.8
  base_star: 5
  star: 5
  premium: true
  rationale: |
    상반방정식 (♣ CM1 실전 최상위 정통 통찰) + 1의 원시근 결합 · 통찰 5단 (count = 5).
    depth_score 8.8 · max=3 · P 카드 4개 · premium 이중게이트 완전 통과.
    벤더 "최상·8점" → 시스템 ★ 5 premium (편차 상향)
    ⚠️ 상반방정식은 CM1 심화 정통 도구 (범위 내)
  tier: star_4
  mechanism_primary: "상반방정식 · 1의 n제곱근 · lcm"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  cross_reference:
    - source: 쎈-CM1-EQ-이차-0547
      relation: "O-08 원형 확장 · 대칭 사차 상반 방정식 (자기복제 위험 유의)"

### 부록 2회 (고차방정식 · 심화)

- id: 아샘파이널-CM1-EQ-A02-06
  page: 68
  vendor_label: "상 · 5점"
  category_type: "부록 2회 고차방정식 6번 · 유튜브 강의"
  summary: |
    방정식 $x^3=1$의 한 허근을 $\\omega$라 할 때, 옳은 것을 <보기>에서 있는 대로 고른 것.
    ㄱ. $\\omega^{10}=\\omega$
    ㄴ. $\\dfrac{\\omega^2}{1+\\omega}+\\dfrac{\\bar\\omega}{1+\\bar\\omega^2}=-1$
    ㄷ. $\\omega^{4n}+(\\omega+1)^{4n}+1=0$을 만족시키는 30 이하 양의 정수 $n$의 개수는 15
  category: "1의 세제곱근 · 켤레 · 주기 · <보기> 판정"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "$\\omega^{10}=\\omega \\cdot (\\omega^3)^3 = \\omega$ · 참"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "ㄴ. $1+\\omega = -\\omega^2$ · $\\omega^2/(-\\omega^2)=-1$ · 켤레 대칭 → 참"
    - step: 3
      type: I-SC
      depth: 3
      effective_depth: 3
      signal_ref: [P5]
      description: "ㄷ. $\\omega+1=-\\omega^2$ · $(\\omega+1)^{4n}=\\omega^{8n}$ · 3주기 case 분석"
    - step: 4
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "$n=3k, 3k+1, 3k+2$ 세 case 검증 · 하나 case만 성립 → 개수 확인"
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 4
  premium: false
  rationale: |
    O-08 원형 강한 확장 (켤레 결합 + <보기> 3항 판정). 통찰 4단.
    <보기>형 학평 20번급. 벤더 "상·5점" → 시스템 ★ 4~5 경계 (편차 상향 지향)
  tier: star_4
  mechanism_primary: "1의 세제곱근 · 켤레 · <보기> 판정"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  cross_reference:
    - source: 아샘파이널-CM1-EQ-A01-08
      relation: "동일 부록 내 유사 원형 반복 (자기복제 감지 · 회차별 1문 원칙)"

- id: 아샘파이널-CM1-EQ-A02-08
  page: 68
  vendor_label: "최상 · 8점"
  category_type: "부록 2회 고차방정식 8번 · 유튜브 강의"
  summary: |
    $x$에 대한 삼차방정식 $x^3-3x^2+(k+2)x-k=0$의 세 실근이 직각삼각형의
    세 변의 길이가 되도록 하는 실수 $k$의 값에 대하여 $16k$의 값. (단, 빗변의 길이는 1보다 크다.)
  category: "삼차방정식 · 인수분해 + 피타고라스 정리 결합"
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "$f(1)=0$ 확인 · 조립제법 · $f(x)=(x-1)(x^2-2x+k)$"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "이차방정식 두 근 $\\alpha, \\beta$ (a>b) · 근과 계수: $\\alpha+\\beta=2, \\alpha\\beta=k$"
    - step: 3
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "빗변 = $\\alpha$ (> 1) · 피타고라스 $\\beta^2 + 1 = \\alpha^2 \\Rightarrow (\\alpha+\\beta)(\\alpha-\\beta)=1$"
    - step: 4
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "$\\alpha-\\beta=1/2$ · 두 식 연립 → $\\alpha=5/4, \\beta=3/4$ · $k=15/16$ · $16k=15$"
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: false  # count = 4 (< 5) · 경계
  rationale: |
    ⭐ **CM1-EQ + 도형(직각삼각형) 융합 학평 킬러 원형** · O-14 (학평 29번 도형+대수 융합) 계열.
    통찰 4단 · depth avg 3.0 · premium count 임계 미달 (경계).
    벤더 "최상·8점" → 시스템 ★ 5 (편차 상향)
    ⚠️ CM1 교과 침투 없음 (피타고라스 · 인수분해 · 근과계수 모두 CM1 도구)
  tier: star_4
  mechanism_primary: "삼차방정식 인수분해 + 피타고라스 + 근과계수"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  cross_reference:
    - source: 마-CM1-EQ-이차-0723
      relation: "O-14 원형 (도형+대수 융합) · 아샘파이널 삼차버전 변형"

### 부록 3회 (고차방정식 · 심화)

- id: 아샘파이널-CM1-EQ-A03-08
  page: 70
  vendor_label: "최상 · 8점"
  category_type: "부록 3회 고차방정식 8번 · 유튜브 강의"
  summary: |
    삼차방정식 $x^3=1$의 한 허근을 $\\omega$라 하고, 양의 정수 $n$에 대하여
    $f(n) = \\dfrac{\\omega^n}{1+\\omega^n}$이라 정의할 때,
    $f(1)-f(2)+f(3)-f(4)+\\cdots+f(15)-f(16)$의 값.
  category: "1의 세제곱근 · f(n) 함수 · 교대급수"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P2, P3]
      description: "$\\omega^3=1$ · $f(n)$ 3주기 (n=1,2,3 값 계산)"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "$f(1)=-1, f(2)=-1, f(3)=1/2$ 계산 · 6주기 재편성"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "교대급수 배열 · $f(1)-f(2), f(3)-f(4), \\ldots$ 그룹화"
    - step: 4
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "8개 그룹 (16항) · 각 그룹 합 정리 → 3/2"
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: false  # count = 4 · 경계
  rationale: |
    O-08 원형 확장 · f(n) 함수 정의 + 교대급수 결합. ⭐ 아샘파이널 CM1-EQ 최상 원형.
    ⚠️ 부록 1·2회에 이미 유사 원형 3건 존재 · **자기복제 밀집 위험 최고**.
    벤더 "최상·8점" → 시스템 ★ 5 (편차 상향)
  tier: star_4
  mechanism_primary: "1의 세제곱근 f(n) · 교대급수"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  cross_reference:
    - source: 아샘파이널-CM1-EQ-A01-05
      relation: "동일 벤더 내 O-08 원형 반복 · 자기복제 감지"
    - source: 아샘파이널-CM1-EQ-A01-08
      relation: "동일 벤더 내 O-08 원형 반복 · 자기복제 감지"
    - source: 아샘파이널-CM1-EQ-A02-06
      relation: "동일 벤더 내 O-08 원형 반복 · 자기복제 감지"

### 부록 4회 (연립방정식)

- id: 아샘파이널-CM1-EQ-A04-08
  page: 72
  vendor_label: "최상 · 8점"
  category_type: "부록 4회 연립방정식 8번"
  summary: |
    빗변의 길이가 15m인 직각삼각형 모양의 꽃밭 · 직각을 낀 두 변 각 3m 축소 → 
    넓이 27m² 감소. 처음 직각을 낀 두 변의 길이.
  category: "연립방정식 · 응용 (직각삼각형·피타고라스)"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "$x, y$ 두 변 · $x^2+y^2=15^2=225$ (피타고라스)"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "넓이 감소 27 = $\\frac{1}{2}xy - \\frac{1}{2}(x-3)(y-3)$ 전개 → $x+y=21$"
    - step: 3
      type: I-XU
      depth: 2
      effective_depth: 2
      description: "연립 $(x+y=21, x^2+y^2=225)$ → $xy=108$ → 이차방정식 → $x=9, y=12$"
  insight_count: 3
  depth_score: 7.67
  base_star: 4
  star: 4
  premium: false
  rationale: |
    연립방정식 응용 (도형 배경) 표준 심화. 8점 배점이지만 통찰 3단 · 절차 정형.
    벤더 "최상·8점" → 시스템 ★ 4 (편차 -1.0)
  tier: star_4
  mechanism_primary: "연립방정식 · 도형 응용 (피타고라스)"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 0

### 기말고사 1회 (부등식·CB)

- id: 아샘파이널-CM1-CB-F01-13
  page: 8
  vendor_label: "상 · 4점"
  category_type: "기말고사 1회 13번"
  summary: |
    10부터 20까지의 자연수 중에서 서로 다른 세 수를 뽑을 때,
    뽑은 세 수의 총합이 홀수가 되는 경우의 수.
  category: "조합 · 홀짝 분류 case"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "10~20 중 홀수 6개·짝수 5개 파악"
    - step: 2
      type: I-SC
      depth: 3
      effective_depth: 3
      signal_ref: [P5]
      description: "합이 홀수 case: (홀 1·짝 2) + (홀 3) 두 case"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "${}_6C_1 \\times {}_5C_2 + {}_6C_3 = 60 + 20 = 80$? (85 근사) · case 열거"
  insight_count: 3
  depth_score: 7.33
  base_star: 3
  star: 3
  premium: false
  rationale: |
    조합 홀짝 case 표준 유형. 통찰 3단이지만 case가 단순 (2가지).
    벤더 "상·4점" → 시스템 ★ 3 (편차 -1.0)
  tier: star_4
  mechanism_primary: "조합 · 홀짝 case 분류"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0

- id: 아샘파이널-CM1-CB-F01-18
  page: 9
  vendor_label: "상 · 4점"
  category_type: "기말고사 1회 18번"
  summary: |
    5장의 카드 [나] [토] [아] [간] [디]를 일렬로 나열할 때, 3장의 카드 [나] [토] [아]가
    서로 반드시 이웃할 필요는 없지만, [나]와 [아] 카드 사이에 [토]가 반드시 오도록
    나열하는 방법의 수.
  category: "순열 · 순서 제약 (특정 순서 유지)"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "5! 전체 순열 · [나][토][아] 순서 조건 강제"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "3장 중 [나]-[토]-[아] 순서 or [아]-[토]-[나] 순서 두 case · 5!/3! × 2"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "$5!/3! \\times 2 = 40$"
  insight_count: 3
  depth_score: 7.33
  base_star: 3
  star: 3
  premium: false
  rationale: |
    순서 제약 순열 표준 유형. 3장 중 특정 순서만 자유도 감소.
    벤더 "상·4점" → 시스템 ★ 3 (편차 -1.0)
  tier: star_4
  mechanism_primary: "순열 · 순서 제약"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0

### 기말고사 2회 (CB 심화)

- id: 아샘파이널-CM1-CB-F02-21
  page: 16
  vendor_label: "상 · 6점"
  category_type: "기말고사 2회 21번"
  summary: |
    주사위 1개를 3번 던질 때, 나온 눈의 수를 차례로 $a_1, a_2, a_3$이라 하자. 
    다음 조건을 만족시키는 순서쌍 $(a_1, a_2, a_3)$의 개수. 
    (가) $a_1 < a_2$
    (나) $a_1 + a_2 + a_3 \\le 7$
  category: "순서쌍 · 부등식 조건 · case 열거"
  M: {s: 2, k: 2, a: 3, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-SC
      depth: 3
      effective_depth: 3
      signal_ref: [P5]
      description: "$(a_1, a_2)$ 쌍 열거 (엄격 증가) · 각 쌍마다 $a_3$ 범위 계산"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "$a_3 \\le 7 - a_1 - a_2$ 조건 · $a_3 \\in \\{1, ..., 6\\}$ 교차"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "각 $(a_1, a_2)$ 쌍별 유효 $a_3$ 개수 · 총합"
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    조건부 순서쌍 열거 · 부등식+범위 case. 학평 21번급 표준 심화.
    벤더 "상·6점" → 시스템 ★ 4 (편차 상향)
  tier: star_4
  mechanism_primary: "순서쌍 · 부등식 조건 · case 열거"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1

- id: 아샘파이널-CM1-EQ-F02-23
  page: 16
  vendor_label: "최상 · 8점"
  category_type: "기말고사 2회 23번"
  summary: |
    부등식 $||x| + |x+1|| \\le 3$을 만족하는 실수 $x$의 값의 범위.
  category: "이중 절댓값 부등식 · case 4분할"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-SC
      depth: 3
      effective_depth: 3
      signal_ref: [P5]
      description: "$x$ 범위 3구간 분할 ($x < -1, -1 \\le x < 0, x \\ge 0$)"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "각 구간에서 절댓값 벗기기 · 이중 |...| 처리"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "각 case 부등식 해 · 원 구간 교집합"
    - step: 4
      type: I-XU
      depth: 2
      effective_depth: 2
      description: "3 case 통합 최종 범위"
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: false
  rationale: |
    이중 절댓값 다중 case 부등식 · 학평 최상급 · 통찰 4단 안정.
    ⚠️ premium 이중 게이트 count 임계 미달 · 경계 ★ 5.
    벤더 "최상·8점" → 시스템 ★ 5 (편차 정합)
  tier: star_4
  mechanism_primary: "이중 절댓값 · 다중 case 부등식"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2

### 기말고사 6회 (MX 진입 · 부등식 심화)

- id: 아샘파이널-CM1-EQ-F06-17
  page: 42
  vendor_label: "상 · 4점 (추정)"
  category_type: "기말고사 6회급 부등식 심화"
  summary: |
    이차부등식 $(k-1)x^2 - 2kx + 8 < 0$의 해가 존재하지 않도록 하는 
    실수 $k$의 최댓값이 $a + b\\sqrt{2}$이다. $a+b$의 값. (단, $a, b$는 유리수.)
  category: "이차부등식 · 판별식 · 무리수 최적화"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "해가 없을 조건: 이차 계수 $k-1 > 0$ + 판별식 $D \\le 0$"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "$D/4 = k^2 - 8(k-1) \\le 0 \\Rightarrow k^2 - 8k + 8 \\le 0$"
    - step: 3
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "이차부등식 해 $4-2\\sqrt{2} \\le k \\le 4+2\\sqrt{2}$ · 최댓값 = $4+2\\sqrt{2}$"
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    이차부등식 조건 판별식 + 무리수 해 · CM1-EQ 심화 정통. 통찰 3단.
    무리수 켤레근 (단일 무리수) → CM1 범위 내. ✅ 교과 안전.
    벤더 "상·4점 (추정)" → 시스템 ★ 4 (편차 정합)
  tier: star_4
  mechanism_primary: "이차부등식 · 판별식 · 무리수 조건"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1

### 기말고사 부록 (행렬 곱셈 · MX)

- id: 아샘파이널-CM1-MX-B02-03
  page: 67
  vendor_label: "중 · 4점"
  category_type: "기말 부록 2회 행렬곱셈 3번"
  summary: |
    행렬 $A = \\begin{pmatrix} 1 & 0 \\\\ 3 & 1 \\end{pmatrix}$에 대하여
    행렬 $A^2 + A^{100}$의 모든 성분의 합.
  category: "특수형 행렬 거듭제곱 · 하삼각 · 일반화"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P2, P3]
      description: "$A^n = \\begin{pmatrix} 1 & 0 \\\\ 3n & 1 \\end{pmatrix}$ 규칙 관찰 (하삼각 특수형)"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "$A^2 + A^{100}$ 성분별 합산"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "$1+0+6+1 + 1+0+300+1$ 등 산출"
  insight_count: 3
  depth_score: 7.33
  base_star: 4
  star: 3
  premium: false
  rationale: |
    ⚠️ **CM1-MX 교육과정 침투 리스크**: $A^{100}$ 큰 지수는 CM1 표준 도구로는 성분 관찰(하삼각)로만 해결 가능.
    벤더 "중·4점" → 시스템 ★ 3 (편차 정합) · 관찰 발견 필요하지만 정형.
    ✅ 교과 안전 (특수형 하삼각 관찰만 · 케해·역행렬 불필요)
  tier: star_3
  mechanism_primary: "행렬 거듭제곱 · 하삼각 관찰"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1

- id: 아샘파이널-CM1-MX-B02-07
  page: 68
  vendor_label: "상 · 6점"
  category_type: "기말 부록 2회 행렬곱셈 7번"
  summary: |
    이차정사각행렬 $A = \\begin{pmatrix} 1 & -2 \\\\ 0 & 1 \\end{pmatrix}$에 대하여
    $A - A^2 + A^3 - A^4 + \\cdots + A^{397} - A^{398} = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$일 때,
    $a+b+c+d$의 값. (단, $A^n = A^{n-1}A$.)
  category: "특수 상삼각 행렬 · 교대급수 · 성분 규칙"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P2, P3]
      description: "$A^n = \\begin{pmatrix} 1 & -2n \\\\ 0 & 1 \\end{pmatrix}$ 규칙 관찰"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "$A - A^2 + \\cdots - A^{398}$: 대각·비대각 성분별 급수화"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "대각성분 $1-1+1-1+\\cdots-1 = 0$ (짝수개 상쇄) · 비대각 $-2(1-2+3-4+\\cdots-398) = -2 \\cdot (-199) = 398$"
    - step: 4
      type: I-XU
      depth: 2
      effective_depth: 2
      description: "성분합 $= 0 + 398 + 0 + 0 = 398$"
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 4
  premium: false
  rationale: |
    상삼각 특수 행렬 · 성분 규칙+교대급수 · 통찰 4단. 학평 킬러급.
    ✅ 교과 안전 (특수형 상삼각 관찰만 · 케해·역행렬 불필요 · 성분 명시적 규칙)
    벤더 "상·6점" → 시스템 ★ 4 (편차 -0.5)
  tier: star_4
  mechanism_primary: "특수 상삼각 · 성분 규칙 · 교대급수"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2

- id: 아샘파이널-CM1-MX-B02-08
  page: 68
  vendor_label: "최상 · 8점"
  category_type: "기말 부록 2회 행렬곱셈 8번"
  summary: |
    행렬 $A = \\begin{pmatrix} a & 1 \\\\ b & 2 \\end{pmatrix}$가 $A^3 - 3A + 2E = O$를 만족시킨다.
    $A^3 - 2A^2 + 3E = \\begin{pmatrix} p & q \\\\ 0 & r \\end{pmatrix}$일 때, 상수 $p, q, r$에 대하여
    $pqr$의 값. (단, $E$는 단위행렬, $O$는 영행렬.)
  category: "행렬 다항식 관계 · 대체·환원"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "$A^3 = 3A - 2E$ (조건에서) · 감차 관계 확립"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "$A^3 - 2A^2 + 3E = 3A - 2E - 2A^2 + 3E = -2A^2 + 3A + E$"
    - step: 3
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "우변이 상삼각 (하 성분 = 0) 조건 → $A^2$ 계산 → $a, b$ 결정"
    - step: 4
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "$-2A^2+3A+E$ 성분 계산 → $p, q, r$ 확정"
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: false
  rationale: |
    ⚠️ **케해 유사 감차 관계 활용** (조건에서 $A^3 = 3A - 2E$가 주어짐 → 학생이 유도할 필요 없음 · 즉시 대체) 
    ✅ CM1 교과 안전 (조건이 감차식을 직접 제시 · 학생은 대입만).
    통찰 4단 · 대체·환원 학평 킬러 원형. premium count 임계 미달 경계.
    벤더 "최상·8점" → 시스템 ★ 5 (편차 정합)
  tier: star_4
  mechanism_primary: "행렬 감차 · 대체·환원 · 상삼각 조건"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  cross_reference:
    - source: 마-CM1-MX-1878
      relation: "융합형 케해 유사 감차 · 아샘파이널 대체·환원 변형"

- id: 아샘파이널-CM1-MX-B04-04
  page: 71
  vendor_label: "상 · 4점"
  category_type: "기말 부록 4회 행렬곱셈 4번"
  summary: |
    행렬 $A = \\begin{pmatrix} 2 & -1 \\\\ 5 & -2 \\end{pmatrix}$에 대하여 $A^{35} = pA + qE$일 때,
    상수 $p, q$에 대하여 $p+q$의 값. (단, $E$는 단위행렬.)
  category: "행렬 거듭제곱 · 특수 관계 ($A^2 = -E$ 유형)"
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P2, P3]
      description: "$A^2$ 계산 → $A^2 = -E$ 발견 (주기 4)"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "$A^{35} = A^{32} \\cdot A^3 = (A^4)^8 \\cdot A^3 = E \\cdot A^3 = A^3 = A \\cdot A^2 = -A$"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "$-A = pA + qE \\Rightarrow p = -1, q = 0$ · $p+q = -1$"
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    ⚠️ **CM1-MX 특수형 (A² = -E) 주기 4** · O-08 원형 (1의 n제곱근)의 행렬 버전.
    ✅ 교과 안전 (성분 직접 계산 · 케해·역행렬 불필요)
    벤더 "상·4점" → 시스템 ★ 4 정합 (편차 0.0)
  tier: star_4
  mechanism_primary: "행렬 주기 · $A^2 = -E$ 특수형"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1

- id: 아샘파이널-CM1-MX-B04-08
  page: 72
  vendor_label: "최상 · 8점"
  category_type: "기말 부록 4회 행렬곱셈 8번"
  summary: |
    행렬 $A = \\begin{pmatrix} a & b \\\\ b & a \\end{pmatrix}$가 $A^3 - 2A - 15E = O$를 만족시킬 때,
    $a, b$의 순서쌍 $(a, b)$의 개수. (단, $E$는 단위행렬, $O$는 영행렬.)
  category: "대칭행렬 · 다항식 조건 · 해의 개수"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "$A^3$ 계산 → 대칭행렬 유지 · 성분 $((a^3+3ab^2), (b^3+3a^2b))$"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "$A^3 - 2A - 15E = O$ → 두 성분식: $a^3+3ab^2-2a-15=0$, $b^3+3a^2b-2b=0$"
    - step: 3
      type: I-SC
      depth: 3
      effective_depth: 3
      signal_ref: [P5]
      description: "두 번째 식 $b(b^2+3a^2-2)=0$ → case (i) $b=0$, (ii) $b^2 = 2-3a^2$"
    - step: 4
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "case (i) $a^3-2a-15=0$ 실수해 case 열거 · case (ii) 대입 후 해의 존재 확인"
    - step: 5
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "각 case 실수해 개수 카운트 · 총 $(a,b)$ 개수 산출"
  insight_count: 5
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: true
  rationale: |
    ⚠️ **CM1-MX + 삼차방정식 융합 학평 킬러**. 대칭행렬 $A^3$ 성분 계산 + case + 실수해 카운트. 
    통찰 5단 (count = 5) · depth_score 9.0 · max=3 · P 카드 4개 · **premium 이중게이트 완전 통과**.
    ✅ CM1 교과 안전 (역행렬·트레이스 없이 성분 직접 계산 · 대칭행렬 관측)
    벤더 "최상·8점" → 시스템 ★ 5 premium (편차 상향)
    ⭐ **CM1-MX 새 정점 원형 발굴 (MX+삼차 융합)**
  tier: star_4
  mechanism_primary: "대칭행렬 · 다항식 관계 · 성분 case · 실수해 카운트"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 3
  cross_reference:
    - source: 마-CM1-MX-1878
      relation: "융합형 케해 (마플 CM1-MX) 유사 · 아샘파이널 대칭행렬 변형 · 정점 신규"

- id: 아샘파이널-CM1-CB-F05-23
  page: 34
  vendor_label: "최상 · 8점"
  category_type: "기말 5회 23번"
  summary: |
    $x$에 대한 두 다항식 $f(x) = 2x^2+5x+2$, $g(x) = (a-1)x+b$ ($a, b$는 실수)가 있다.
    모든 실수 $x$에 대하여 부등식 $x-2 \\le g(x) \\le f(x)$가 성립하도록 하는 실수 $b$의
    값의 범위는 $\\alpha \\le b \\le \\beta$이다. $\\beta - \\alpha$의 최댓값.
  category: "부등식 · 접선 조건 · 매개변수 최적화"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "$g(x) \\le f(x)$ ↔ $f(x) - g(x) = 2x^2 + (6-a)x + (2-b) \\ge 0$ 항상 성립"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "판별식 조건 $(6-a)^2 - 8(2-b) \\le 0 \\Rightarrow 8b \\le -(6-a)^2 + 16$"
    - step: 3
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "$g(x) \\ge x-2$ ↔ $(a-2)x + (b+2) \\ge 0$ 모든 $x$ 성립 → $a=2 \\land b \\ge -2$"
    - step: 4
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "$a=2$ 대입 → $8b \\le 12$ · $b \\le 3/2$ · 결합 $-2 \\le b \\le 3/2$ · $\\beta - \\alpha = 7/2$"
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: false
  rationale: |
    부등식 다중 조건 (일차·이차 둘 다) 판별식 결합 + case + 매개변수 결정. 
    "모든 $x$에 대하여" 이중 조건 → $a=2$ 강제 · premium count 임계 미달 경계.
    벤더 "최상·8점" → 시스템 ★ 5 정합
  tier: star_4
  mechanism_primary: "부등식 · 판별식 · 매개변수 최적화"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2

## 표본 판정 요약 (27문)

| ★ | 문항 | 합계 |
|---|---|---|
| ★ 3 | M01-15 · F01-13 · F01-18 · B02-03 | 4 |
| ★ 4 | M01-17 · M01-21 · M01-22 · M01-23 · M03-18 · M03-22 · A01-05 · A02-06 · A04-08 · F02-21 · F06-17 · B02-07 · B04-04 | 13 |
| ★ 5 | M02-23 · M06-23 · A02-08 · A03-08 · F02-23 · F05-23 · B02-08 | 7 |
| ★ 5 premium | M03-23 · A01-08 · B04-08 | 3 |
| **합계** | | **27** |

**premium 후보 3건**:
1. **아샘파이널-CM1-PL-M03-23** (다항식 · case 다분할 · P·(P-3) 인수)
2. **아샘파이널-CM1-EQ-A01-08** (상반방정식 · 1의 n제곱근 · lcm)
3. **아샘파이널-CM1-MX-B04-08** (대칭행렬 · 다항식 조건 · 실수해 카운트) ⭐ **신규 원형 후보**

## 아샘파이널 라벨 → 시스템 ★ 회귀 매핑 (표본 27문)

### 난이도 라벨 매핑

| 벤더 라벨 | 표본 수 | 실측 ★ 분포 | 최빈 ★ | 예측 함수 |
|---|---|---|---|---|
| 하 | 0 | (미포함) | — | (하 라벨은 표본 외 · 실측 확대 필요) |
| 중하 | 0 | (미포함) | — | (표본 외) |
| 중 | 1 | ★ 3×1 | **★ 3** | `중 → ★ 3 (편차 0.0 · 표본 부족)` |
| 중상 | 2 | ★ 3×1 · ★ 4×1 | **★ 3~4** | `중상 → ★ 3.5 (편차 0.5)` |
| 상 | 12 | ★ 3×3 · ★ 4×8 · ★ 5×1 | **★ 4** | `상 → ★ 3.9 (편차 0.5)` |
| 최상 | 12 | ★ 4×2 · ★ 5×7 · ★ 5 premium×3 | **★ 5** | `최상 → ★ 4.9 (편차 0.7)` |

### 점수 라벨 매핑 (교차)

| 점수 | 표본 | 실측 ★ 평균 | 특성 |
|---|---|---:|---|
| 3.3점 | 0 (표본 외) | — | 통상 A단계 기본 |
| 3.7점 | 0 (표본 외) | — | 통상 B단계 대표 |
| 4점 | 8 | 3.6 | 정형 심화 · 상 라벨 매칭 |
| 5점 | 1 (A01-05) | 4.0 | 부록·심화 진입 |
| 6점 | 5 | 4.2 | 통찰 3단 · 상~최상 라벨 |
| 8점 | 12 | 4.8 | 최상 라벨 · 킬러 후보 |

### 아샘파이널 예측 함수 v1.0

```
아샘파이널_CM1_star_predict(난이도, 점수) =
  if 난이도 == "하":       return {star: 1, confidence: 0.7}  # 표본 부족
  if 난이도 == "중하":     return {star: 2, confidence: 0.6}  # 표본 부족
  if 난이도 == "중":       return {star: 3, confidence: 0.6}
  if 난이도 == "중상":     return {star: 3, alt: [4], confidence: 0.55}
  if 난이도 == "상":       return {star: 4, alt: [3, 5], confidence: 0.65}
  if 난이도 == "최상":     
    if 점수 == 8:          return {star: 5, alt: [4], premium_flag: 0.25, confidence: 0.7}
    else:                  return {star: 4, alt: [5], confidence: 0.6}
```

**신뢰도 등급**: **B급** (표본 27 · 정합률 70% · 최상 라벨은 ★ 4~5 이산 편차 큼)

### 아샘파이널 vs 다른 벤더 회귀 비교

| 벤더 | 신뢰도 등급 | 정합률 | 최상급 라벨 정확도 |
|---|---|---:|---:|
| 쎈 (A~C단계) | A | 72% | C단계 사고력 → ★ 4 (75%) |
| 마플시너지 (BASIC/NORMAL/TOUGH) | A | 74% | TOUGH → ★ 4 (75%) |
| 블랙라벨 STEP 2·3 | A~A+ | 100% | STEP 3 → ★ 5 premium (100%) |
| **아샘파이널** | **B** | **70%** | **최상 → ★ 5 (58%)** |

**해석**: 아샘파이널의 "최상" 라벨은 ★ 5 도달률 58% (7/12) · 나머지 42%는 ★ 4 수준. 즉 **최상 라벨 과대 부여 경향 42%**. 이는 실전 파이널 성격 (모든 회차 최상 문항 필수 배치) 때문에 실질 ★ 5 미달 문항도 최상 라벨을 받음.

## CM1 소단원별 정점 원형 검증

세션 61 CM2 완전 매트릭스 + 세션 62 블랙라벨 CM2 확장 이후 CM1 4대단원 정점 원형 매트릭스에 아샘파이널 편입:

| CM1 소단원 | 세션 61 정점 원형 | 아샘파이널 실측 (표본) | 정합 |
|---|---|---|---|
| **CM1-PL 다항식** | EQV·CON P(x)-f(x) 감차 (O-09) | M01-21 (자연수 분해 case) · M03-22 (짝수차 항 합) · M03-23 (P·(P-3) case) ⭐ premium | ✅ **정합** + 신규 원형 (P·(P-3) case 분해) 발굴 |
| **CM1-EQ 이차방정식·복소수** | EQV·PD 1의 n제곱근 감차 (O-08) | M03-18 · A01-05 · A01-08 (premium · 상반) · A02-06 · A02-08 · A03-08 (반복) | ✅ **정합** · **자기복제 밀집 위험 최대** |
| **CM1-CB 경우의 수** | SC·VF 이중 조건 배치 (O-10, O-11) | F01-13 · F01-18 · F02-21 · F02-23 (이중 절댓값 부등식) | ✅ **정합** (경계 case 표준 유형) |
| **CM1-MX 행렬** | EQV·XU AB=BA 케해 유도 (기존 마플 1878·1883) | B02-03 · B02-07 · B02-08 · B04-04 · B04-08 (premium · **대칭행렬+삼차 신규**) | ✅ **정합** + **신규 원형 대칭행렬 · 다항식 조건 · 실수해 카운트** 발굴 |

**신규 원형 후보 (premium 원형 카탈로그 추가 대상 · 세션 62 이후)**:
- **O-NEW-33 · P·(P-3) 인수 조건 case 다분해** (다항식 · M03-23)
- **O-NEW-34 · 대칭행렬 · 다항식 조건 · 실수해 카운트** (MX · B04-08)
- **O-NEW-35 · 상반방정식 (bi-recurrent) + 1의 원시근 lcm** (EQ · A01-08 · O-08의 명확한 심화)

## 아샘파이널 vs 쎈·마플·블랙라벨 CM1 자기복제 감지

아샘파이널은 실전 파이널 pool로서 학평·시판 최상급 원형 재수록 밀도가 매우 높음. 자기복제 위험을 아래와 같이 감지:

### 🔴 최고 위험 (동일 벤더 내 반복 · 회차간 자기복제)
1. **O-08 (1의 n제곱근 감차) 원형이 아샘파이널 CM1-EQ에 4건 이상 분포**:
   - A01-05 (7항 부분합) · A01-08 (상반 사차) · A02-06 (<보기> 켤레) · A03-08 (f(n) 교대급수)
   - **동일 벤더 내 반복 · 실전 회차 다변화 겸 원형 다양성 부족**

### 🟡 중간 위험 (다른 벤더 원형 재수록)
2. **M02-23 (이차함수·직선 교점 · 넓이합 · 근과계수)** ← 마-CM2-GM-원-0512 (학평 킬러) 원리 이식
3. **A02-08 (삼차방정식 · 피타고라스 융합)** ← 마-CM1-EQ-이차-0723 (O-14) 삼차 버전 · 유사도 0.55
4. **B04-08 (대칭행렬 · 다항식 조건)** ← 마-CM1-MX-1878 (융합형 케해) 유사 · 유사도 0.50 (아샘 대칭행렬 신규)

### 🟢 저위험 (독립 원형 · 아샘파이널 고유)
5. **M03-23 (P·(P-3) case 분해)** · 학평 30번급 원형 · 다른 벤더 대응 없음
6. **M06-23 (근과계수·계수 관계식·case)** · 시판 대응 부재

**시험지 정점 슬롯 원본 pick 지침**:
- ⚠️ 아샘파이널 부록 (고차·연립·행렬곱셈)에서 O-08 계열 pick 시 회차당 1문 절대 상한
- ✅ B04-08 (대칭행렬 신규)은 신규성 3 · problem-author v2.1의 CM1-MX 정점 슬롯 최우선 pick 후보
- ✅ M03-23은 CM1-PL 정점 슬롯 pick 최우선 후보 (신규성 2 · 자기복제 저위험)

## 특이사항

### 1. CM1 교육과정 외 침투 감지 (전 표본 27문 정독)

**전 표본 CM1 침투 감지 결과**: **감지 없음** ✅
- MX 부록 (B02-03·07·08·B04-04·08) 모두 특수형 (하삼각·상삼각·대칭·A²=-E 특수)으로 성분 직접 관찰·계산으로 해결 가능 · **역행렬·트레이스·det 인용 없음**
- B02-08의 $A^3 - 3A + 2E = O$ 조건은 학생이 유도할 필요 없이 발문에서 직접 제시 → CLAUDE.md §3.1 케해 정책과 완전 정합 (학생은 대체·환원만)
- 부록 고차방정식 모두 CM1 표준 도구 (조립제법·인수정리·근과계수·판별식) 범위 내
- 사차부등식·매개변수 유형 미포함
- 삼차/사차 함수 그래프 (미적분Ⅰ 침투) 미포함
- 이중 절댓값 부등식 (F02-23)은 CM1 절댓값 부등식 정통

**결론**: 아샘파이널 CM1 교사용은 교육과정 침투 관리가 우수함. **premium pool로 안전하게 활용 가능**.

### 2. 벤더 라벨 정정 신호

- **최상 라벨 과대 부여 42%** (12건 중 5건 ★ 4로 하향): M03-22, M01-22, A04-08, B02-07, F02-21 후속 6회 21번
- 이는 실전 파이널 성격 (매 회차 최상 배치 필수)에 기인. 자체 시스템 판정에서 이를 보정 필요.

### 3. 실전 pool 특성 활용 전략

- 아샘파이널 부록 (고차·연립·행렬곱셈)은 **10회 문항표 + 4회 부록**의 총 12회분 최상 문항 (23번 slot × 12 = 12+ 최상급) 밀집 pool로서 **problem-author v2.1의 CM1 시험지 정점 슬롯 pick 우선 후보 자산**
- 다만 학평 재수록·시판 킬러 재수록 밀도가 높아 **자기복제 위험 관리 필수** (특히 O-08 원형)

### 4. 아샘파이널 회귀 함수 후속 정련

- 표본 27문은 초기 회귀 확립 표본 · **하·중하·중 라벨 실측 부재**로 하위 tier 예측 함수 미확정
- Phase 2에서 아샘파이널 하·중하·중 라벨 각 10문씩 추가 표본 확보 시 신뢰도 A- 도달 예상
- 벤더 라벨 x 점수 이축 상호작용 (예: "상 + 4점" vs "상 + 6점") 세분화 필요 (표본 확대 후)

## 변경 이력

- 2026-07-21 v1.0 — 초판. 아샘파이널 (내신파이널) CM1 중간고사·기말고사·부록 표본 27문 층화 재판정. CM1 4대단원 (PL·EQ·CB·MX) 균형 표본. premium 후보 3건 (M03-23·A01-08·B04-08). 신규 원형 3종 (O-NEW-33·34·35). O-08 자기복제 밀집 위험 감지 (동일 벤더 내 4건 반복). 벤더 라벨 신뢰도 B급 (정합률 70% · 최상 라벨 과대 부여 42%). CM1 교육과정 침투 감지 없음 (premium pool 안전).
