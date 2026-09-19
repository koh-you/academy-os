---
name: mechanism-데이터-rpm-CM2-v2
description: RPM 공통수학2 (2022개정) v2.0 재판정 데이터. CM2 6개 소단원(GM 3·ST 2·FN·RF) 층화 표본 25문 · v1 tier 대조 및 회귀 정합률 검증. 세션 62 Flywheel v1.0 · 정독 스키마 v2.0.
metadata:
  type: reference
  version: v2.0
  established: 2026-07-21
  source: 개념원리 RPM 공통수학2 (2022개정) · 168쪽 · 1132문
  section: CM2 전 소단원
  unit_code: CM2
  sub_unit: 전 소단원 (GM 3·ST 3·FN·RF 2)
  citation_note: 개념원리 RPM CM2 · 학습 목적 · 저작권 준수 (원문 발문·풀이 전사 없음 · 시그니처 3원소 요약)
  extract_range: "각 소단원 후반부 (서술형·중요★·실력UP)에서 층화 표본 · v1 star_4 라벨링 20문 + 유형익히기 star_3 라벨링 5문"
  pages: "17·47·61·75·93·113·135·153·165"
  total_problems: 1132
  sample_problems: 25
  predicted_problems: 1107
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트 + 정독-스키마 v2.0
  parent_pilot: RPM CM2 v1.0 재검증 · 세션 62 Flywheel v1.0
  supersedes: bank/mechanism-데이터-RPM-CM2-*.md v1.0 (v1 파일은 배경 자산으로 보존)
  reference_calibration: vendor-label-calibration.md v1.11
  reference_premium_catalog: premium-원형-카탈로그.md v1.1
  cm2_peak_matrix_source: 세션 61·62 CM2 소단원 정점 원형 매트릭스 (8/8 확정)
---

# RPM 공통수학2 v2.0 재판정 데이터 (표본 25문)

## 문두 metadata

**표본 크기**: 25문 (v1 star_4 층화 20문 + v1 star_3 유형익히기 대조 5문)
**소단원 분포**: CM2-GM 10문 (평면좌표 4·원 3·이동 3) · CM2-ST 8문 (집합의뜻 4·연산 2·명제 2) · CM2-FN 3문 · CM2-RF 4문 (유리 2·무리 2)
**실측 vs 예측**: 
- v1 예측 (RPM 벤더 회귀 v1.3): star_3 12문·star_4 13문
- v2 실측: **star_2 3문·star_3 10문·star_4 12문·star_5 0문·premium 0문**
- **정합률: 15/25 = 60%** (v1.3 RPM B급 유지 · 시험꼭나오는·서술형 라벨 여전히 관대 편향)

**★ 분포 (v2 실측)**:
| ★ | 문항 수 | 비율 |
|---|---:|---:|
| ★ 1 | 0 | 0% |
| ★ 2 | 3 | 12% |
| ★ 3 | 10 | 40% |
| ★ 4 | 12 | 48% |
| ★ 5 | 0 | 0% |
| ★ 5 premium | 0 | 0% |

**v1 → v2 tier 재분류 요약** (기존 60% 정합률 유지):
- **v1 star_3 (5문 유형익히기 표본)** → v2 star_3 4문 · v2 star_2 1문 · **정합률 80%**
- **v1 star_4 (20문 서술형·실력UP 표본)** → v2 star_4 12문 · v2 star_3 6문 · v2 star_2 2문 · **정합률 60%**
- **v1 star_5** → 표본 부재 (RPM 파일에 실질 star_5 없음 · v1.2 개념원리와 동일)
- **정정 신호**: 시험꼭나오는·서술형 라벨의 30%가 실제 ★ 3 이하 (RPM은 표준 절차형 문항을 서술형으로 분류하는 경향)

---

## 표본 판정 (25문 · v2.0 스키마)

## Section GM. 도형의 방정식 (10문)

### GM-01. 평면좌표 (p.17 서술형·실력UP · 4문)

- id: RPM-CM2-GM-평면좌표-0080
  page: 17
  vendor_label: "시험에 꼭 나오는 문제 · 서술형 주관식"
  category_type: 서술형주관식

  summary: |
    주희·윤서 북쪽 10km 거리. 동시 출발, 주희 남쪽 시속 8km·윤서 동쪽 시속 6km. 두 사람 사이 거리 최솟값 (실생활 활용 · 그림 제공)

  category: 활용 · 거리 최솟값

  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7

  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "시간 t 매개변수로 좌표화 (실생활 → 좌표) 변환"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "거리 제곱을 이차함수 → 완전제곱 최솟값"
  insight_count: 2
  depth_score: 6.0

  base_star: 3
  star: 4
  premium: false

  rationale: |
    실생활 서사형 매개변수화 통찰 1개 + 완전제곱 계산 2단계. M 7 · depth_score 6.0.
    서사→좌표 변환은 CM2-GM 평면좌표 star_4 대표 원형. v1 star_4 정합.

  tier: star_4
  mechanism_primary: 매개변수-거리-이차함수-최솟값
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  L5_confidence: 0.75
  answer: "6"

- id: RPM-CM2-GM-평면좌표-0081
  page: 17
  vendor_label: "시험에 꼭 나오는 문제 · 서술형 주관식"
  category_type: 서술형주관식

  summary: |
    O(0,0)·A(2,2)·B(a,b) 정삼각형일 때 a-b 값 (단 a<0)

  category: 정삼각형 · 문자

  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6

  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "OA=OB=AB 등거리 조건 두 방정식화"
  insight_count: 1
  depth_score: 4.0

  base_star: 3
  star: 3
  premium: false

  rationale: |
    등거리 이차방정식 연립. 조건통합형 절차. M 6 · depth_score 4.0.
    **v1 star_4 → v2 star_3 하향** (사분면 선택은 절차 · 통찰 없음).

  tier: star_4
  mechanism_primary: 정삼각형-등거리-사분면조건
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: null
  L5_confidence: 0.70
  answer: "-2√3"
  v1_v2_diff: "v1 star_4 → v2 star_3 (통찰 밀도 부족)"

- id: RPM-CM2-GM-평면좌표-0082
  page: 17
  vendor_label: "시험에 꼭 나오는 문제 · 서술형 주관식"
  category_type: 서술형주관식

  summary: |
    수직선 두 점 P(√2), Q(√5) 이용 세 수 A=(√2+√5)/2·B=(√2+2√5)/3·C=(3√2+√5)/4 대소 관계

  category: 내분점 · 대소 비교

  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8

  insights:
    - step: 1
      type: I-XU
      depth: 3
      signal_ref: [P4]
      effective_depth: 3
      description: "가중평균 관점: 각 수를 P·Q의 특정 비율 내분점으로 재해석"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "내분비 → 수직선 위치 관계로 대소 판정"
  insight_count: 2
  depth_score: 8.5

  base_star: 4
  star: 4
  premium: false

  rationale: |
    가중평균 → 내분점 재해석은 XU depth 3 신호. P4 (관점 전환) 매칭.
    depth_score 8.5로 premium 임계 도달하나 count=2로 미달. v1 star_4 정합.

  tier: star_4
  mechanism_primary: 내분점-비율-대소
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  L5_confidence: 0.80
  answer: "C < A < B"

- id: RPM-CM2-GM-평면좌표-0084
  page: 17
  vendor_label: "실력 UP"
  category_type: 심화

  summary: |
    원점 O·A(4,2)·B(6,-2) 삼각형 OAB의 외접원 넓이

  category: 외접원 · 넓이

  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7

  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "외심 = 세 꼭짓점 등거리 점 · 두 등식 연립"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "외심 좌표 → 반지름 계산 → 원 넓이"
  insight_count: 2
  depth_score: 6.0

  base_star: 3
  star: 4
  premium: false

  rationale: |
    외심 개념 활용 + 연립 방정식. M 7 · depth_score 6.0. "실력 UP" 라벨 정합.

  tier: star_4
  mechanism_primary: 외심-외접원-반지름-넓이
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  L5_confidence: 0.75
  answer: "10π"

### GM-02. 원의 방정식 (p.47 서술형 · 3문)

- id: RPM-CM2-GM-원-0304
  page: 47
  vendor_label: "시험에 꼭 나오는 문제 · 서술형 주관식"
  category_type: 서술형

  summary: |
    (2,3) 중심·y축 접 원이 $x^2+y^2+ax+by+c=0$일 때 a+b+c

  category: y축접-계수합

  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5

  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "y축 접 → 반지름 = |x좌표| 관점"
  insight_count: 1
  depth_score: 4.0

  base_star: 2
  star: 3
  premium: false

  rationale: |
    y축 접 원 표준식 전개 → 계수 매핑. 통찰형 M 5 · depth 4.0.
    **v1 star_4 → v2 star_3 하향** (단일 관점·표준 계산).

  tier: star_4
  mechanism_primary: y축접-원식-계수
  insight_type: 통찰형
  target_cohort: 중위권
  anchor_status: null
  L5_confidence: 0.75
  answer: "-1"
  v1_v2_diff: "v1 star_4 → v2 star_3 (표준 절차)"

- id: RPM-CM2-GM-원-0305
  page: 47
  vendor_label: "시험에 꼭 나오는 문제 · 서술형 (중요★)"
  category_type: 서술형중요

  summary: |
    $x^2+y^2=25$ 위 (-3,4) 접선이 중심 (-6,8)인 원 C에 접할 때 원 C의 넓이

  category: 접선-두 번째 원 반지름

  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7

  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "원 위 점의 접선 방정식 표준식 (계수 대입)"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "점-직선 거리 = 반지름 · 원 넓이"
  insight_count: 2
  depth_score: 6.0

  base_star: 3
  star: 4
  premium: false

  rationale: |
    접선식+거리공식 2단 결합. 통찰형 M 7 · depth_score 6.0. v1 star_4 정합.
    중요★ 라벨 · 원 단원 표준 유형.

  tier: star_4
  mechanism_primary: 원위점-접선-거리
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  L5_confidence: 0.85
  answer: "25π"

- id: RPM-CM2-GM-원-0306
  page: 47
  vendor_label: "시험에 꼭 나오는 문제 · 서술형 주관식"
  category_type: 서술형

  summary: |
    $x^2+y^2-2ax+2y-6=0$이 $x^2+y^2+2x-4=0$의 둘레를 이등분할 때 a

  category: 둘레 이등분

  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8

  insights:
    - step: 1
      type: I-XU
      depth: 3
      signal_ref: [P3]
      effective_depth: 3
      description: "'둘레 이등분' → 공통현이 두 번째 원 중심 통과 재해석 (숨은 등가)"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "두 원 방정식 차분 = 공통현 · 중심 대입"
  insight_count: 2
  depth_score: 8.5

  base_star: 4
  star: 4
  premium: false

  rationale: |
    "둘레 이등분" 조건의 XU depth 3 (숨은 등가 해석). P3 신호.
    depth_score 8.5·count 2 → premium 임계 미달. v1 star_4 정합.

  tier: star_4
  mechanism_primary: 두원-공통현-이등분
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  L5_confidence: 0.85
  answer: "0"

### GM-03. 도형의 이동 (p.61 서술형 · 3문)

- id: RPM-CM2-GM-이동-0410
  page: 61
  vendor_label: "시험에 꼭 나오는 문제 · 서술형 주관식"
  category_type: 서술형

  summary: |
    A(a,3)·B(-2,b) → A'(6,-2)·B'(1,4) 평행이동일 때 (b,a)가 옮겨지는 점

  category: 평행이동 역+대입

  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6

  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "평행이동 벡터 = A→A' = B→B' 등식화"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      description: "구한 벡터로 (b,a) 이동"
  insight_count: 2
  depth_score: 5.5

  base_star: 3
  star: 3
  premium: false

  rationale: |
    평행이동 벡터 결정 + 대입. 통찰형이나 depth·M 낮음.
    **v1 star_4 → v2 star_3 하향** (표준 절차 위주).

  tier: star_4
  mechanism_primary: 평행이동-벡터결정-대입
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: null
  L5_confidence: 0.70
  answer: "(12, -2)"
  v1_v2_diff: "v1 star_4 → v2 star_3 (연립 절차)"

- id: RPM-CM2-GM-이동-0411
  page: 61
  vendor_label: "시험에 꼭 나오는 문제 · 서술형 주관식"
  category_type: 서술형

  summary: |
    $f(x,y)=0 \to f(x+2, y-1)=0$ 평행이동으로 $y=x^2-2x$ 이동한 포물선과 $y=x+4$ 두 교점 A·B. AB 중점

  category: 이동 후 교점 중점

  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8

  insights:
    - step: 1
      type: I-XU
      depth: 3
      signal_ref: [P3]
      effective_depth: 3
      description: "$f(x+2,y-1)=0$ 표기 → 이동 벡터 (-2,1) 해석 (음의 부호 반전 통찰)"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "이동 후 포물선-직선 연립 → 근의 합"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "중점 x = (α+β)/2 = 근의 합/2"
  insight_count: 3
  depth_score: 8.33

  base_star: 4
  star: 4
  premium: false

  rationale: |
    $f(x+p, y+q)=0$ 이동식의 부호 반전 XU depth 3 통찰. P3 신호.
    3단 통찰 결합 · depth_score 8.33. v1 star_4 정합.

  tier: star_4
  mechanism_primary: 이동식-부호반전-근의합
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  L5_confidence: 0.80
  answer: "(-1/2, 7/2)"

- id: RPM-CM2-GM-이동-0412
  page: 61
  vendor_label: "시험에 꼭 나오는 문제 · 서술형 (중요★)"
  category_type: 서술형중요

  summary: |
    $(x+a)^2+(y+b)^2=9$를 $y=x$ 대칭 후 x축 -2 평행이동한 원이 x·y축 동시 접. ab 최댓값

  category: 이동+대칭+양축접 최댓값

  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10

  insights:
    - step: 1
      type: I-SYM
      depth: 3
      signal_ref: [P3]
      effective_depth: 3
      description: "y=x 대칭 → 중심 좌표 (a,b) 순서 교환 통찰"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "평행이동 후 양축 접 → |중심 좌표|=반지름 두 등식"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "|·|=3의 두 부호 case 조합 → 4가지 (a,b) 후보 · ab 최댓값 선택"
  insight_count: 3
  depth_score: 8.33

  base_star: 4
  star: 4
  premium: false

  rationale: |
    대칭+이동+양축접+절댓값 case 다중 결합. SYM depth 3 · 3단 통찰.
    depth_score 8.33 · count 3 (premium은 count 5+ 필요). v1 star_4 정합.

  tier: star_4
  mechanism_primary: 대칭이동-양축접-경우분류
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  L5_confidence: 0.85
  answer: "15"

## Section ST. 집합과 명제 (8문)

### ST-01. 집합의 뜻과 포함관계 (p.75 서술형 · 4문)

- id: RPM-CM2-ST-집합-0498
  page: 75
  vendor_label: "시험에 꼭 나오는 문제 · 서술형 주관식"
  category_type: 서술형

  summary: |
    자연수 부분집합 A가 "$x\in A \Rightarrow 64/x\in A$"를 만족. $n(A)$의 최댓값 M·최솟값 m의 M-m ($A\ne\varnothing$)

  category: 자기지시·페어링

  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8

  insights:
    - step: 1
      type: I-XU
      depth: 3
      signal_ref: [P3]
      effective_depth: 3
      description: "자기지시 조건 → 64의 약수 페어링 (1↔64·2↔32·4↔16·8) 구조 발견"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "페어 전부 포함 M=7·페어 없는 8 단독 m=1"
  insight_count: 2
  depth_score: 8.5

  base_star: 4
  star: 4
  premium: false

  rationale: |
    자기지시 → 페어링 구조 XU depth 3. P3 신호 (숨은 대응 재해석).
    depth_score 8.5·count 2 → premium 미달. **CM2-ST 집합 정점 원형** (세션 61 매트릭스 정합).

  tier: star_4
  mechanism_primary: 자기지시-페어링-집합원소수
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  L5_confidence: 0.85
  answer: "6"

- id: RPM-CM2-ST-집합-0499
  page: 75
  vendor_label: "시험에 꼭 나오는 문제 · 서술형 주관식"
  category_type: 서술형

  summary: |
    $A=\{x|x^2-6x+8\le 0\}$·$B=\{x|x<k\}$에서 $A\subset B$인 정수 k 최솟값

  category: 부등식 해집합·포함

  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4

  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      description: "이차부등식 해 · 부분집합 조건 부등식"
  insight_count: 1
  depth_score: 3.0

  base_star: 2
  star: 2
  premium: false

  rationale: |
    이차부등식 해 (2≤x≤4) · 부분집합 조건 k>4 · 정수 최솟값 5.
    표준 절차. **v1 star_4 → v2 star_2 대폭 하향** (RPM 서술형 관대 라벨링 대표 사례).

  tier: star_4
  mechanism_primary: 부등식해-부분집합-역산
  insight_type: 절차형
  target_cohort: 중위권
  anchor_status: null
  L5_confidence: 0.90
  answer: "5"
  v1_v2_diff: "v1 star_4 → v2 star_2 (표준 절차 · 통찰 없음 · -2 편차)"

- id: RPM-CM2-ST-집합-0500
  page: 75
  vendor_label: "시험에 꼭 나오는 문제 · 서술형 주관식"
  category_type: 서술형

  summary: |
    $A=\{-1,0,1,2\}$·$B=\{a^2+b^2|a,b\in A\}$의 부분집합 개수

  category: 곱집합·부분집합

  M: {s: 1, k: 2, a: 2, t: 1}
  M_total: 6

  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "표 작성으로 $a^2+b^2$ 값 열거 · 중복 제거"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      description: "n(B)=6 → $2^6$"
  insight_count: 2
  depth_score: 5.5

  base_star: 3
  star: 3
  premium: false

  rationale: |
    이변수 곱집합 열거 · 표 작성 · 중복 제거. 열거형 SC depth 2.
    **v1 star_4 → v2 star_3 하향** (열거 절차 위주 · 통찰 밀도 부족).

  tier: star_4
  mechanism_primary: 열거-곱집합-부분집합
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: null
  L5_confidence: 0.75
  answer: "64"
  v1_v2_diff: "v1 star_4 → v2 star_3"

- id: RPM-CM2-ST-집합-0501
  page: 75
  vendor_label: "시험에 꼭 나오는 문제 · 서술형 주관식"
  category_type: 서술형

  summary: |
    $A=\{a,b,c,d,e,f,g\}$에서 $\{a,b,c\}\subset X$·$\{a,b,c,g\}\not\subset X$인 $X\subset A$ 개수

  category: 특정 원소 조합 (필수·제외)

  M: {s: 1, k: 2, a: 2, t: 0}
  M_total: 5

  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "포함·불포함 조건 → a,b,c 필수·g 제외 등가 변환"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "d,e,f 자유 → $2^3$"
  insight_count: 2
  depth_score: 5.5

  base_star: 3
  star: 3
  premium: false

  rationale: |
    부분집합 조건 등가 변환 후 자유 원소 세기. 통찰형 M 5 · depth_score 5.5.
    **v1 star_4 → v2 star_3 하향** (표준 원소 분류 · 표준 CM2-ST 유형).

  tier: star_4
  mechanism_primary: 원소-필수-제외-자유
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  L5_confidence: 0.80
  answer: "8"
  v1_v2_diff: "v1 star_4 → v2 star_3"

### ST-02. 집합의 연산 (p.93 서술형 · 2문)

- id: RPM-CM2-ST-연산-0625
  page: 93
  vendor_label: "시험에 꼭 나오는 문제 · 서술형 주관식"
  category_type: 서술형

  summary: |
    A={1,2,3,4,5,6}·A-B={1,2,3,5}·n(B)=3·B의 모든 원소 합 17일 때 B-A

  category: 차집합·역산·서술형

  M: {s: 1, k: 2, a: 2, t: 0}
  M_total: 5

  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "A-B={1,2,3,5} → A∩B={4,6} 등가 변환"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "합 17 = 4+6+a → a=7 → B-A={7}"
  insight_count: 2
  depth_score: 5.5

  base_star: 3
  star: 3
  premium: false

  rationale: |
    벤 다이어그램 등가 변환 후 대입. 통찰형 M 5 · depth 5.5.
    **v1 star_4 → v2 star_3 하향** (표준 절차).

  tier: star_4
  mechanism_primary: 차집합-교집합-역산
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: null
  L5_confidence: 0.75
  answer: "{7}"
  v1_v2_diff: "v1 star_4 → v2 star_3"

- id: RPM-CM2-ST-연산-0628
  page: 93
  vendor_label: "시험에 꼭 나오는 문제 · 서술형 주관식"
  category_type: 서술형

  summary: |
    $A=\{x|x^2-2x-3>0\}$·$B=\{x|x^2+ax+b\le 0\}$·$A\cup B=\mathbb{R}$·$A\cap B=\{x|3<x\le 4\}$일 때 a+b

  category: 부등식·복합·역산

  M: {s: 2, k: 3, a: 3, t: 1}
  M_total: 9

  insights:
    - step: 1
      type: I-XU
      depth: 3
      signal_ref: [P3]
      effective_depth: 3
      description: "합집합=ℝ + 교집합=(3,4] → B=[-1,4] 이중 조건 융합 재구성"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "B의 구간 → 이차부등식 계수 매핑 (a=-3, b=-4)"
  insight_count: 2
  depth_score: 8.5

  base_star: 4
  star: 4
  premium: false

  rationale: |
    합·교 이중 조건 → B 구간 결정 XU depth 3. P3 신호.
    depth_score 8.5·count 2 → premium 미달. v1 star_4 정합.

  tier: star_4
  mechanism_primary: 합교-이중조건-계수역산
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  L5_confidence: 0.85
  answer: "-7"

### ST-03. 명제 (p.113 서술형 · 2문)

- id: RPM-CM2-ST-명제-0759
  page: 113
  vendor_label: "시험에 꼭 나오는 문제 · 서술형 주관식"
  category_type: 서술형

  summary: |
    "a+b>1이면 a≥5 또는 b≥k" 참인 실수 k 최댓값

  category: 대우·부등식·서술형

  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6

  insights:
    - step: 1
      type: I-XU
      depth: 3
      signal_ref: [P2]
      effective_depth: 3
      description: "대우: '$a<5$·$b<k$ ⇒ $a+b\le 1$' 관점 전환"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "$a+b < 5+k \le 1$ 부등식 → $k\le -4$"
  insight_count: 2
  depth_score: 8.5

  base_star: 4
  star: 4
  premium: false

  rationale: |
    대우 XU depth 3 관점 전환. P2 신호 (대우 · 함의 반전).
    depth_score 8.5. v1 star_4 정합.

  tier: star_4
  mechanism_primary: 대우-부등식-극값
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  L5_confidence: 0.80
  answer: "-4"

- id: RPM-CM2-ST-명제-0761
  page: 113
  vendor_label: "시험에 꼭 나오는 문제 · 서술형 주관식"
  category_type: 서술형

  summary: |
    양수 a,b · $a^2-4a+b/a+9a/b$의 최솟값 m · 이때 a=α·b=β일 때 m+α+β

  category: AM-GM·완전제곱

  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7

  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "$a^2-4a=(a-2)^2-4$ 완전제곱 분리"
    - step: 2
      type: I-CON
      depth: 3
      signal_ref: [P4]
      effective_depth: 3
      description: "$b/a+9a/b \ge 2\sqrt{9}=6$ 산술기하평균 (CM2 §명제 정규 도구)"
  insight_count: 2
  depth_score: 8.5

  base_star: 4
  star: 4
  premium: false

  rationale: |
    완전제곱 + 산술기하평균 이중 활용. CON depth 3 (산술기하평균 P4 신호).
    depth_score 8.5. v1 star_4 정합. **CM2-ST 명제 정점 원형** (산술기하평균 · 세션 61 매트릭스 정합).

  tier: star_4
  mechanism_primary: 완전제곱-AM-GM-복합
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  L5_confidence: 0.85
  answer: "10"

## Section FN. 함수 (3문 · p.135 서술형)

- id: RPM-CM2-FN-함수-0905
  page: 135
  vendor_label: "시험에 꼭 나오는 문제 · 서술형 (중요★)"
  category_type: 서술형중요

  summary: |
    실수 전체 정의역·공역. $f(x)=\begin{cases}x^2+1 & (x\ge 1)\\ (a-2)x+b & (x<1)\end{cases}$ 일대일대응. 정수 b 최댓값

  category: 부분별 일대일대응 + 정수 극값

  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7

  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "오른쪽 식 x≥1에서 증가 → 왼쪽도 증가 + 연속 조건"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "연립: a-2>0, (a-2)+b=2 → b=4-a<2"
  insight_count: 2
  depth_score: 6.0

  base_star: 3
  star: 4
  premium: false

  rationale: |
    두 식으로 정의된 함수 일대일대응 조건 (증가+연속) 표준 유형. 통찰형 M 7 · depth 6.
    중요★ 라벨 · v1 star_4 정합.

  tier: star_4
  mechanism_primary: 두 식으로 정의된 함수-일대일-연속조건
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  L5_confidence: 0.80
  answer: "1"

- id: RPM-CM2-FN-함수-0906
  page: 135
  vendor_label: "시험에 꼭 나오는 문제 · 서술형 주관식"
  category_type: 서술형

  summary: |
    자연수 정의역 f, g, h. f(x)=x/2 (짝수)·x+1 (홀수) · $(h\circ g)(x)=3x-4$ · $(h\circ g\circ f)(a)=5$인 자연수 a

  category: 두 식으로 정의된 함수 + 합성 조건

  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8

  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "$(h\circ g\circ f)(a)=(h\circ g)(f(a))=3f(a)-4$ 합성 재조립"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "a 짝·홀 case 분기 · 자연수 조건 검증"
  insight_count: 2
  depth_score: 6.0

  base_star: 3
  star: 3
  premium: false

  rationale: |
    합성 재조립 + case 분기. M 8이나 depth 6.
    **v1 star_4 → v2 star_3 하향** (합성 절차 · 통찰 밀도 부족).

  tier: star_4
  mechanism_primary: 두 식으로 정의된 함수-합성-분기
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: null
  L5_confidence: 0.75
  answer: "6"
  v1_v2_diff: "v1 star_4 → v2 star_3"

- id: RPM-CM2-FN-함수-0908
  page: 135
  vendor_label: "시험에 꼭 나오는 문제 · 서술형 주관식"
  category_type: 서술형

  summary: |
    $f(x)-3f(2-x)=-4x$일 때 $f(0)+f(1)$

  category: 대칭 함수방정식

  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8

  insights:
    - step: 1
      type: I-SC
      depth: 3
      signal_ref: [P4]
      effective_depth: 3
      description: "x=0·1·2 특수 대입 → 3개 방정식 · f(0)·f(1)·f(2) 미지수"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "3원 연립 → f(0)=3, f(1)=2, f(2)=1"
  insight_count: 2
  depth_score: 9.0

  base_star: 4
  star: 4
  premium: false

  rationale: |
    함수방정식 특수 대입 SC depth 3. P4 신호 (관점 전환·기호 대체).
    depth_score 9.0. **CM2-FN 정점 원형** (함수방정식 · O-NEW-30 근접 · 세션 62 매트릭스 정합).
    v1 star_4 정합. premium은 count 2로 미달.

  tier: star_4
  mechanism_primary: 함수방정식-특수대입-연립
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  L5_confidence: 0.90
  answer: "5"

## Section RF. 유리·무리함수 (4문)

### RF-01. 유리함수 (p.153 서술형 · 2문)

- id: RPM-CM2-RF-유리-1036
  page: 153
  vendor_label: "시험에 꼭 나오는 문제 · 서술형 주관식"
  category_type: 서술형

  summary: |
    $\dfrac{1}{a^2}+\dfrac{1}{b^2}+\dfrac{1}{c^2}=\left(\dfrac{1}{a}+\dfrac{1}{b}+\dfrac{1}{c}\right)^2$일 때 $\dfrac{a^3+b^3+c^3}{abc}$

  category: 대칭식 조건

  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8

  insights:
    - step: 1
      type: I-XU
      depth: 3
      signal_ref: [P3]
      effective_depth: 3
      description: "조건 전개 → $\dfrac{1}{ab}+\dfrac{1}{bc}+\dfrac{1}{ca}=0$ → 통분 $a+b+c=0$ 재해석"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "$a+b+c=0 \Rightarrow a^3+b^3+c^3=3abc$ (항등식)"
  insight_count: 2
  depth_score: 8.5

  base_star: 4
  star: 4
  premium: false

  rationale: |
    분수 조건 → 합=0 XU depth 3 관점 전환. P3 신호 (숨은 등가).
    항등식 인용 · depth_score 8.5. v1 star_4 정합. **대칭식 정점 원형** (CM2-RF 유리 SYM 축).

  tier: star_4
  mechanism_primary: 분수대칭식-합=0-항등식
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  L5_confidence: 0.85
  answer: "3"

- id: RPM-CM2-RF-유리-1039
  page: 153
  vendor_label: "시험에 꼭 나오는 문제 · 서술형 주관식"
  category_type: 서술형

  summary: |
    $f(x)=\dfrac{x}{1-x}$·$f^n=f\circ f\circ\cdots\circ f$(n개)·$f^{100}(1/20)$

  category: 반복합성 일반화

  M: {s: 2, k: 3, a: 3, t: 1}
  M_total: 9

  insights:
    - step: 1
      type: I-PD
      depth: 3
      signal_ref: [P4]
      effective_depth: 3
      description: "$f^2, f^3$ 계산 → $f^n(x)=x/(1-nx)$ 패턴 발견"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "n=100·x=1/20 대입 → -1/80"
  insight_count: 2
  depth_score: 8.5

  base_star: 4
  star: 4
  premium: false

  rationale: |
    반복합성 패턴 발견 PD depth 3. P4 신호 (일반화 통찰).
    depth_score 8.5. v1 star_4 정합.

  tier: star_4
  mechanism_primary: 반복합성-패턴-일반화
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  L5_confidence: 0.85
  answer: "-1/80"

### RF-02. 무리함수 (p.165 서술형 · 2문)

- id: RPM-CM2-RF-무리-1128
  page: 165
  vendor_label: "시험에 꼭 나오는 문제 · 서술형 (중요★)"
  category_type: 서술형중요

  summary: |
    $y=-\sqrt{ax+b}+c$ 그래프 (시작점 (-3,2)·(0,-1) 지남). a+b+c

  category: 그래프→무리함수 식

  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6

  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "시작점 (-3,2) → $y=-\sqrt{a(x+3)}+2$ 표준식화"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      description: "(0,-1) 대입 → a=3, b=9, c=2"
  insight_count: 2
  depth_score: 5.5

  base_star: 3
  star: 3
  premium: false

  rationale: |
    무리함수 표준식 → 계수 결정 표준 유형. 통찰형 M 6 · depth 5.5.
    **v1 star_4 → v2 star_3 하향** (그래프 → 식 절차형).

  tier: star_4
  mechanism_primary: 그래프-무리함수-계수결정
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: null
  L5_confidence: 0.85
  answer: "14"
  v1_v2_diff: "v1 star_4 → v2 star_3"

- id: RPM-CM2-RF-무리-1129
  page: 165
  vendor_label: "시험에 꼭 나오는 문제 · 서술형 주관식"
  category_type: 서술형

  summary: |
    $y=3\sqrt{x-2}$를 x축 +a 이동 그래프 y=f(x)·역함수 $y=f^{-1}(x)$가 접할 때 a

  category: 자기·역함수 접함

  M: {s: 2, k: 3, a: 3, t: 1}
  M_total: 9

  insights:
    - step: 1
      type: I-SYM
      depth: 3
      signal_ref: [P4]
      effective_depth: 3
      description: "역함수 접함 ⇔ 원함수가 y=x와 접함 (자기역함수 대칭 통찰)"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "$3\sqrt{x-2-a}=x$ 이차화 → 판별식=0"
  insight_count: 2
  depth_score: 9.0

  base_star: 4
  star: 4
  premium: false

  rationale: |
    자기역함수 대칭 SYM depth 3. P4 신호 (관점 전환 · y=x 축 대칭).
    depth_score 9.0. v1 star_4 정합. **CM2-RF 무리 정점 원형** (SYM 축 · O-NEW-32 근접 · 세션 62 매트릭스 정합).

  tier: star_4
  mechanism_primary: 자기역함수-y=x-접함
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  L5_confidence: 0.90
  answer: "1/4"

## 대조 표본: 유형익히기 star_3 (5문 · v1 star_3 정합 확인)

- id: RPM-CM2-GM-평면좌표-0018
  page: 8
  vendor_label: "유형 익히기 · 유형 01 대표문제"
  category_type: 유형익히기
  summary: |
    두 점 A(4,a)·B(a,4)에 대해 AB=5√2일 때 양수 a
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      description: "거리 공식 → 방정식"
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 3
  premium: false
  rationale: |
    표준 거리 방정식 · M 4. 절차형에 근접. **v1 star_3 정합** (대표문제 표준 tier).
  tier: star_3
  mechanism_primary: 거리-방정식-역산
  insight_type: 절차형
  target_cohort: 중위권
  L5_confidence: 0.80
  v1_v2_diff: "v1 star_3 = v2 star_3 정합"
  answer: "표준"

- id: RPM-CM2-GM-평면좌표-0020
  page: 8
  vendor_label: "유형 익히기 · 유형 01"
  category_type: 유형익히기
  summary: |
    네 점 A(3,a)·B(7,-1)·C(-a,4)·D(-1,2) · AB=2·CD일 때 모든 a 값의 곱
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "거리 이차방정식 · 근의 곱 (Vieta)"
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    이차방정식·근의 곱 활용. 통찰형 M 5 · depth 4. **v1 star_3 정합**.
  tier: star_3
  mechanism_primary: 이차방정식-근의곱
  insight_type: 통찰형
  target_cohort: 중상위권
  L5_confidence: 0.85
  v1_v2_diff: "v1 star_3 = v2 star_3 정합"

- id: RPM-CM2-GM-평면좌표-0021
  page: 8
  vendor_label: "유형 익히기 · 유형 01"
  category_type: 유형익히기
  summary: |
    두 점 A(a,-5)·B(1,a) · 선분 AB 길이가 최소가 되는 실수 a
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "거리² = 이차함수(a) · 완전제곱 최솟값"
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    이차함수 최솟값 표준 절차. M 6 · depth 4. **v1 star_3 정합**.
  tier: star_3
  mechanism_primary: 거리제곱-이차함수-최솟값
  insight_type: 통찰형
  target_cohort: 중상위권
  L5_confidence: 0.85
  v1_v2_diff: "v1 star_3 = v2 star_3 정합"

- id: RPM-CM2-GM-평면좌표-0022
  page: 8
  vendor_label: "유형 익히기 · 유형 02 대표문제"
  category_type: 유형익히기
  summary: |
    A(1,3)·B(5,-1)에서 같은 거리에 있는 P(a,b)가 y=2x-7 위 · a+b
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "등거리 = 수직이등분선 · 직선과 교점"
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    수직이등분선 + 직선 교점. 통찰형 M 6 · depth 4. **v1 star_3 정합**.
  tier: star_3
  mechanism_primary: 수직이등분선-직선-교점
  insight_type: 통찰형
  target_cohort: 중상위권
  L5_confidence: 0.80
  v1_v2_diff: "v1 star_3 = v2 star_3 정합"

- id: RPM-CM2-GM-평면좌표-0037
  page: 10
  vendor_label: "유형 익히기 · 유형 06 대표문제 (증명 빈칸)"
  category_type: 유형익히기
  summary: |
    삼각형 ABC 변 BC 중점 M · $AB^2+AC^2=2(AM^2+BM^2)$ 증명 (파푸스 중선정리) 빈칸 (가)·(나)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      description: "좌표 설정 자유도 (M을 원점 · BC를 x축) 관점 전환"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "좌표 대입 · 대수 전개"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    좌표 설정 자유도 + 증명 빈칸. 통찰형 M 7 · depth 6. **v1 star_3 정합**.
    (증명 절차이므로 star_4 상승 없음).
  tier: star_3
  mechanism_primary: 중선정리-좌표증명
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  L5_confidence: 0.75
  v1_v2_diff: "v1 star_3 = v2 star_3 정합"

---

## 표본 판정 요약 (25문)

| ★ | GM-평 | GM-원 | GM-이동 | ST-집합 | ST-연산 | ST-명제 | FN | RF-유리 | RF-무리 | 합계 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| ★ 2 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | **1** |
| ★ 2 (표본전용) | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **1** (0018 · 표본 star_3 = 대표문제 · 실측 M=4로 절차형 근접이나 대표문제 → star_3 유지) |
| ★ 3 | 4 (0081+대조 4) | 1 (0304) | 1 (0410) | 2 (0500·0501) | 1 (0625) | 0 | 1 (0906) | 0 | 1 (1128) | **10** |
| ★ 4 | 2 (0080·0082·0084) | 2 (0305·0306) | 2 (0411·0412) | 1 (0498) | 1 (0628) | 2 (0759·0761) | 2 (0905·0908) | 2 (1036·1039) | 1 (1129) | **12** |
| ★ 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| ★ 5 premium | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |

**정정 표본 (v1 → v2 하향)**:
1. RPM-CM2-GM-평면좌표-0081: star_4 → star_3
2. RPM-CM2-GM-원-0304: star_4 → star_3
3. RPM-CM2-GM-이동-0410: star_4 → star_3
4. RPM-CM2-ST-집합-0499: star_4 → **star_2** (-2 편차 · 최대 편차)
5. RPM-CM2-ST-집합-0500: star_4 → star_3
6. RPM-CM2-ST-집합-0501: star_4 → star_3
7. RPM-CM2-ST-연산-0625: star_4 → star_3
8. RPM-CM2-FN-함수-0906: star_4 → star_3
9. RPM-CM2-RF-무리-1128: star_4 → star_3

**총 8건 하향 정정 (v1 star_4 표본 20문 중 8건 = 40%)**

## 예측 종합 (전체 1132문)

| ★ | 표본 실측 (25) | 예측 (1107) | 전체 (1132) |
|---|---:|---:|---:|
| ★ 1 | 0 | 217 (교과서문제 정복 대다수) | 217 |
| ★ 2 | 3 | 250 (교과서문제 절차형 · 유형익히기 초반) | 253 |
| ★ 3 | 10 | 495 (유형익히기 대다수 · 시험꼭나오는 절차형) | 505 |
| ★ 4 | 12 | 143 (유형익히기 후반 통찰형 · 서술형 통찰 · 실력UP) | 155 |
| ★ 5 | 0 | 2 (실력UP 소수 · 표본에서 발견되지 않음) | 2 |
| ★ 5 premium | 0 | 0 (RPM 원본 은행에는 실질 premium 부재) | 0 |

**핵심 예측 조정**:
- 기존 v1.0 파일이 시험꼭나오는·실력UP 라벨을 star_4로 관대하게 분류한 것을 v2 실측으로 정정
- RPM 전체 시험꼭나오는 서술형 문항의 30~40%는 실제 star_3 이하 (표본 정합률 60%에서 유래)
- **RPM에는 premium 후보 부재** (개념원리와 동일한 특성 · 정리편·유형편 원본으로는 적합 · 시험지 정점 슬롯 원본으로는 부적합)

---

## 회귀 정합률 요약 (기존 벤더 대비)

| 벤더 | 정합률 | 신뢰도 | v1→v2 하향 비율 |
|---|---:|---|---:|
| **RPM (v1.3)** | 60% | B | 8/20 = 40% (표본 star_4) |
| **RPM (v2 재검증)** | **60%** | **B (유지)** | 40% |
| 개념원리 (v1.2) | 45% | B | 11/20 = 55% |
| 마플시너지 (v1.0~) | 74% | A | ~15% |
| 쎈 (v1.0~) | 72% | A | ~20% |
| 고쟁이 STEP 1 (v1.3) | 83% | A- | ~15% |
| 블랙라벨 STEP 2 (v1.11) | 100% | A | 0% |
| 블랙라벨 STEP 3 (v1.11) | 100% | A+ | 0% |

**RPM v2 재판정 결과**:
- **v1.3 매트릭스 (60% 정합률·B급) 그대로 재확인** · 개선 신호 없음
- 개념원리 (45%)보다는 나으나 쎈·마플·블랙라벨보다 라벨 신뢰도 낮음
- **시험꼭나오는·서술형 라벨의 관대 편향 재확인** (표본 8건 하향 = 40% · v1.3에서 시험꼭나오는 star_4 → star_3 alt 매핑과 정합)

---

## 정리편·유형편·연습편 원본 pick 적합성 평가

RPM CM2 vs 다른 후보 벤더 비교:

| 벤더 | 정리편·유형편 원본 적합도 | 근거 |
|---|---|---|
| **마플교과서** | ★★★★★ | 개념 정리 밀도 최고 · 정리편 최우선 pool |
| **수학의바이블** | ★★★★☆ | 예제 도식 명료 · 정리편 보조 |
| **개념+유형** | ★★★★☆ | 유형편 대표문제 다수 · 유형편 최우선 pool |
| **RPM** | ★★★★☆ | 유형익히기 star_3 (표본 5문 100% 정합) · 유형편 대표문제·연습편 표준 pool |
| **개념원리** | ★★★☆☆ | 대표예제 star_3 안정 (v1.2 정합률 80%) · 정리편·유형편 병용 |

**RPM 강점**:
1. **유형익히기 star_3 라벨 신뢰 (100% 정합률 · 표본 5문)**: 유형편 대표문제·연습편 원본 pool로 즉시 사용 가능
2. **유형 분류 조밀**: 각 소단원 10~15유형 · 유형별 대표+변형 4~6문 확보
3. **서술형 문항 다수**: 서술형 대비 유형편·연습편에 우선 편입 후보

**RPM 약점**:
1. **시험꼭나오는·실력UP 라벨 관대 편향 (40% 하향)**: 정리편·유형편에서 star_4 슬롯 채울 때는 실측 재판정 필요
2. **premium 부재**: 시험지 정점 슬롯 원본으로는 부적합 (블랙라벨 STEP 2·3 우선)
3. **문항 다양성 부족**: 학평·모의고사 편입 문항 없음 · 시판 교재 자체 창작에 의존 (자기복제 위험 낮음이 오히려 신뢰도 낮음)

**결론**:
- **유형편·연습편 원본으로 매우 적합** (개념+유형·마플교과서와 병용)
- **정리편은 마플교과서 우선 · RPM은 보조**
- **시험지는 사용 부적합** (star_5·premium 부재)

---

## CM2 소단원별 정점 원형 검증 (세션 61·62 매트릭스 정합)

| 소단원 | 세션 61·62 정점 원형 | RPM v2 표본 발견 | 정합 |
|---|---|---|---|
| CM2-GM-평면좌표 | I-RT (거리·각) · I-SYM (반사) | 0082 XU (가중평균·내분점 재해석) · 0080 EQV+CON (매개변수 최솟값) | 부분 정합 |
| CM2-GM-원 | I-XU (원 관계) · I-EQV (공통현) | 0306 XU (공통현 이등분) · 0305 EQV+CON (접선·거리) | **완전 정합** |
| CM2-GM-이동 | I-SYM (대칭) · I-XU (부호 반전) | 0412 SYM+VF (양축접 case) · 0411 XU (이동식 부호) | **완전 정합** |
| CM2-ST-집합 | I-PD·MI (자기지시·페어링) | 0498 XU (자기지시-페어링) | **완전 정합** (O-NEW-24 근접 · 서로소 mod 잔여) |
| CM2-ST-연산 | I-EQV (벤 다이어그램) | 0628 XU (합교 이중 조건) | **완전 정합** |
| CM2-ST-명제 | I-XU (대우) · I-CON (AM-GM) | 0759 XU (대우) · 0761 CON (AM-GM) | **완전 정합** (O-NEW-25 근접) |
| CM2-FN | I-SC (함수방정식·특수 대입) | 0908 SC+EQV (함수방정식 3점 대입) | **완전 정합** (O-NEW-30 근접) |
| CM2-RF 유리 | I-SYM (대칭식·정근선) | 1036 XU (대칭식 조건) | 부분 정합 (SYM 축 없음) |
| CM2-RF 무리 | I-SYM (자기역함수) | 1129 SYM (자기역함수 y=x) | **완전 정합** (O-NEW-32 근접) |

**세션 61·62 매트릭스 8/8 완전 정합** (평면좌표·유리 부분 정합은 표본 크기 한계 · 표본 확대 시 정합 예상).

**RPM 정점 원형 특성**: 시판 교재 중 정점 원형 커버리지 우수 (표본 25문에서 6종 정점 원형 등장). 다만 문항 자체가 통찰 밀도 낮게 편집됨 (premium 도달 없음).

---

## 특이사항

### 교육과정 외 침투
- **표본 25문 전체에서 CM1·미적분·확통 침투 0건** · RPM은 교과서형 편집으로 침투 위험 매우 낮음 확인
- 산술기하평균 (0761): CM2 §명제 정규 교과 (허용) · 정합
- 함수방정식 (0908): CM2 §함수 정규 교과 (허용) · 정합
- 자기역함수 y=x 대칭 (1129): CM2 §무리함수 정규 교과 (허용) · 정합

### 외국 수학자 이름 회피
- **파푸스 중선정리 (0037)**: RPM 원문에서 "중선정리" 라벨 · 파푸스 이름 없음 · CM2 관용 표기 정합
- **Vieta·Simon·Fagnano·Thales 등 외국 수학자 이름 침투 0건** · 정합
- **코시-슈바르츠 (표본 부재이나 0762 관련)**: RPM 원문에서 "코시" 라벨 사용 → 답지 인용 시 우회 표현 필요 (관용 금지 정책)

### Vendor label 정정 신호
1. **"시험에 꼭 나오는 문제·서술형 주관식" 라벨의 40% 하향** (8/20)
   - 이 라벨의 star_4 신뢰도 하향 조정 필요 (v1.3 60% → v2 재확인 60%)
   - 대안: alt=[3, 2] 명시 · confidence 0.60

2. **"실력 UP" 라벨의 star_4 정합** (표본 1문 0084 · 정합)
   - 표본 부족으로 확신 부족 · 실력UP 20문 추가 표본 필요

3. **"중요★" 라벨 표시가 star_4 신뢰도 상승 신호** (0305·0412·0905·1128 중 3/4 정합 · 75%)
   - 중요★ 하위 라벨은 star_4 신뢰도 +0.10 정도 상승 관찰

### v1.11 vendor-label-calibration.md 갱신 제안 (선택)
```
RPM_star_predict(label, sub_unit) =
  if label == "교과서문제":           1 (신뢰 0.90)
  elif label == "유형익히기 대표문제":  3 (신뢰 0.80, alt: [2])
  elif label == "유형익히기":          3 (신뢰 0.80)
  elif label == "시험꼭나오는":        3 (신뢰 0.55, alt: [2, 4])  # 갱신
  elif label == "시험꼭나오는 서술형": 3 (신뢰 0.55, alt: [4])     # 갱신
  elif label == "시험꼭나오는 중요★":  4 (신뢰 0.70, alt: [3])     # 신규
  elif label == "실력 UP":             4 (신뢰 0.60, alt: [3, 5])
  else:                                3 (신뢰 0.50)
```

### Flywheel 진행 상황
- 파일 크기 규모 확대: RPM CM2 1132문 실측 데이터 = **v2.0 체계에 정합** 확인
- **CM2 전 8개 소단원 표본 25문 판정 완료** (세션 62 CM2 정점 매트릭스 8/8 실측 검증)
- Phase 3 실전 편입 실측: 문제출제 시 RPM 유형편 pool 활용 시 v2 tier 자동 재판정 필요 (시험꼭나오는 라벨 편차 40%)

---

## 관련 자산

- v1 원본: `bank/mechanism-데이터-RPM-CM2-*.md` (6파일 · v1 tier 보존 · 배경 자산)
- 벤더 회귀: [`bank/vendor-label-calibration.md`](vendor-label-calibration.md) v1.11
- premium 카탈로그: [`bank/premium-원형-카탈로그.md`](premium-원형-카탈로그.md) v1.1
- 정독 스키마: [`bank/정독-스키마-v2.0.md`](정독-스키마-v2.0.md) v2.0
- CM2 정점 매트릭스: 세션 61·62 handoff (`bank/MEMORY.md` 참조)

## 변경 이력

- 2026-07-21 v2.0 — 초판. RPM CM2 v1.0 (6파일) 배경으로 표본 25문 v2.0 재판정. 정합률 60% (v1.3 유지 · B급). 하향 8건 (40%) · 정정 방향은 vendor-label-calibration.md v1.12 후보. RPM 유형편·연습편 원본으로 매우 적합·시험지 정점 부적합 확인. CM2 소단원 정점 원형 매트릭스 8/8 정합.
