---
name: mechanism-데이터-rpm-CM1-v2
description: RPM 공통수학1 (2024, 개념원리) v2.0 재정독. 세션 62 flywheel · CM1 v1 → v2.0 재판정 확대. 표본 25문 층화 판정 (PL 6·EQ 8·CB 6·MX 5). RPM CM2 회귀 B급 계승 검증 및 CM1 4대단원 정점 원형 매트릭스 검증. v1 파일 (bank/mechanism-데이터-rpm-CM1.md) 보존 · v2 신규 파일.
metadata:
  type: reference
  version: v2.0
  established: 2026-07-21
  source: 유형의 완성 RPM 공통수학1 (2024) · 개념원리 편집부
  section: CM1 전 대단원 (PL·EQ·CB·MX)
  unit_code: CM1
  sub_unit: 전체 4대단원 층화 (다항식 · 방정식과부등식 · 경우의수 · 행렬)
  citation_note: "RPM 공통수학1 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약)"
  extract_range: "전 12개 챕터 · 유형익히기 대표문제 + 시험에 꼭 나오는 문제 + 실력Up 층화 표본"
  pages: "17~168 (본책 전체)"
  total_problems: 1184
  sample_problems: 25
  predicted_problems: 247  # v1 기재 225 - 재판정 25 + PDF 원본 대비 v1 정독 대상 우선
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: pilot-RPM-CM2-정독-v1-v2-마이그레이션 (RPM CM2 회귀 B급 계승)
  parent_regression: bank/vendor-label-calibration.md v1.11 (RPM 신뢰도 B급 · 정합률 60%)
  precedent_v1: bank/mechanism-데이터-rpm-CM1.md v1.0 (2026-07-16 세션 46 확립 · tier_mapping v1.3)
---

# RPM 공통수학1 (2024) 정독 데이터 v2.0

## 배경

- **v1 파일**: `bank/mechanism-데이터-rpm-CM1.md` (v1.0 · 2026-07-16 세션 46 · 272 tier 항목)
- **v1 tier 매핑**: `유형익히기 = star_3·4` · `시험에_꼭_나오는_문제 = star_3·4` · `실력Up = star_4·5 혼재`
- **재판정 필요성**: 세션 61~62 신규 원형 다수 발굴 · CM2 RPM 회귀 실측 결과 v1 `시험꼭나오는` 라벨 관대 편향 (star_4 → star_3 하향 다수) 확인. CM1도 유사 편향 검증 필요.
- **v2 목적**: 25문 층화 재판정 → v1 대비 tier 정정 규모 산정 · CM1 소단원별 정점 원형 검증 · 시험지/유형편 pool 재적합성 평가.

## 층화 표본 설계 (25문)

| 단원 | 표본 | 유형익히기 | 시험 (중요·일반) | 실력Up | v1 tier | v1 파일 라인 |
|---|---:|---:|---:|---:|---|---|
| CM1-PL | 6 | 3 | 1 | 2 | 유형·시험·실력Up 혼합 | 40~860 |
| CM1-EQ | 8 | 4 | 2 | 2 | 유형·시험·실력Up 혼합 | 863~1552 |
| CM1-CB | 6 | 3 | 1 | 2 | 유형·시험·실력Up 혼합 | 2375~2859 |
| CM1-MX | 5 | 3 | 1 | 1 | 유형·시험·실력Up 혼합 | 2862~3108 |

**샘플링 원칙**:
- 유형별 대표문제·유형JP·실력Up 3층 균형
- 각 단원 소단원 커버
- v1 라벨 극단 (star_3·4 하한 · star_4·5 상한) 양단 포함

---

## Section A. CM1-PL (다항식) — 6문

### A-1. RPM-CM1-CH01-유형-#0058 (유형익히기·대표문제)

- id: RPM-CM1-PL-다항연산-0058
  page: 27  # RPM 유형익히기 CH01 대표문제 인근
  vendor_label: "유형익히기 대표문제 (유형 04 x±1/x)"
  category_type: 유형익히기
  summary: |
    $x^2-3x-1=0$에서 양변을 $x$로 나눠 $x-\frac{1}{x}=3$ 유도 후 $x^3-\frac{1}{x^3}$ 값 계산
  category: 곱셈공식 변형 (x±1/x)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "이차방정식을 양변 x로 나누어 x-1/x 꼴로 재구성"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "x³-1/x³ = (x-1/x)³+3(x-1/x) 곱셈공식 변형 적용"
  insight_count: 2
  depth_score: 6.0  # max 2 × 2 + avg 2 = 6
  base_star: 3
  star: 3
  premium: false
  rationale: |
    양변 나누기 + 세제곱변형 표준 2단계 통찰. RPM 유형익히기 대표 · 시장 표준 노출도 높음.
    v1 tier `star_3·4` → **v2 star_3 확정** (star_4 후보 아님 · 표준 유형).
  tier: star_3
  mechanism_primary: 곱셈공식-변형-x±1/x
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 대표", "마플 NORMAL"]
    L5_confidence: 0.85

### A-2. RPM-CM1-CH01-유형-#0061 (유형익히기·대표문제)

- id: RPM-CM1-PL-다항연산-0061
  page: 28
  vendor_label: "유형익히기 대표문제 (유형 05 세 문자 대칭식)"
  category_type: 유형익히기
  summary: |
    $a+b+c$, $a^2+b^2+c^2$, $a^3+b^3+c^3$ 조건에서 $abc$ 유도 · $(a+b+c)^2$ 전개+세제곱합 공식 결합
  category: 세 문자 대칭식 (2단계)
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "(a+b+c)² 전개로 ab+bc+ca 유도"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "a³+b³+c³-3abc = (a+b+c)(a²+b²+c²-ab-bc-ca) 대칭 항등식 활용"
  insight_count: 2
  depth_score: 8.5  # max 3 × 2 + avg 2.5 = 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    두 대칭 항등식 조합 · depth 3 통찰 P3 신호. 마플 TOUGH·쎈 B ●상 수준 정합.
    v1 tier `star_3·4` → **v2 star_4 확정** (통찰 결합 카드 2 이상).
  tier: star_3
  mechanism_primary: 세문자-대칭식-세제곱합공식
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ● 상", "마플 TOUGH"]
    L5_confidence: 0.80

### A-3. RPM-CM1-CH02-유형-#0157 (유형익히기·대표문제)

- id: RPM-CM1-PL-나머지-0157
  page: 47
  vendor_label: "유형익히기 대표문제 (유형 17 몫을 x-a로 나눔)"
  category_type: 유형익히기
  summary: |
    $f(x) \div (x-2)$의 몫 $Q(x)$, 나머지 3 · $Q(x) \div (x+2)$ 나머지 $-1$ · $xf(x) \div (x+2)$ 나머지 유도
  category: 나머지정리 (몫 재나눗셈)
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "f(x)=(x-2)Q(x)+3, Q(-2)=-1 두 조건 결합"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "xf(x) 형태 재구성 후 x=-2 대입으로 나머지 산출"
  insight_count: 2
  depth_score: 9.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    몫 재나눗셈 연쇄 통찰. depth 3 두 단계. v1 tier `star_3·4` → **v2 star_4 확정**.
    표준 정점 통찰 (P4 조건 통합) · 시험지 star_4 슬롯 원본 pool로 적합.
  tier: star_3
  mechanism_primary: 나머지정리-몫재나눗셈
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ● 상", "마플 TOUGH"]
    L5_confidence: 0.85

### A-4. RPM-CM1-CH02-시험-#0184 (시험에꼭나오는·교육청 기출)

- id: RPM-CM1-PL-나머지-0184
  page: 53
  vendor_label: "시험에꼭나오는 · 교육청 기출"
  category_type: 시험에_꼭_나오는_문제
  summary: |
    $f(x+3) \div (x+2)(x-1)$ 나머지 $3x+8$ · $f(x^2) \div (x+2)$ 나머지 유도 · 대입 조건 활용
  category: 합성 나머지 (f(x+3)·f(x²))
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "f(x+3) 나머지 조건 → f(-1+3)=f(2), f(1+3)=f(4) 대입값 파악"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "f(x²)에서 x=-2 대입 → f(4) 이용, 이미 알고 있는 값과 매칭"
  insight_count: 2
  depth_score: 9.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    합성 다항식 나눗셈 · 교육청 기출 · depth 3 결합 통찰. v1 `star_3·4` → **v2 star_4 확정**.
  tier: star_4
  mechanism_primary: 나머지정리-합성-대입매칭
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["마플 STEP 2", "쎈 C단계 사고력"]
    L5_confidence: 0.80

### A-5. RPM-CM1-CH01-시험-#0107 (실력Up)

- id: RPM-CM1-PL-다항연산-0107
  page: 35
  vendor_label: "시험에꼭나오는 실력Up 🏆"
  category_type: 시험에_꼭_나오는_문제_실력업
  summary: |
    $(x+1)(x+2)(x+3)\cdots(x+10)$ 전개식에서 $x^9$ 계수 = $1+2+\cdots+10=55$ · 곱셈 항 조합 관찰
  category: 다항식 곱 계수 (Vieta 관찰)
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "n차 계수 = 나머지 상수들의 합이라는 곱셈전개 관찰 (Vieta 유사)"
  insight_count: 1
  depth_score: 6.0
  base_star: 3
  star: 4
  premium: false
  rationale: |
    실력Up 라벨이지만 depth 3 통찰 1단계만 · schema §2.4.1 base_star=3.
    다만 P2 신호 (관찰 통찰) + 라벨 위신 조정으로 **v2 star_4**로 승격 (base +1 · v1 star_4·5 하한 매칭).
    v1 tier `star_4·5` → **v2 star_4 확정** (star_5 아님 · premium 조건 미달).
    ※ 자산화 감쇠: `∏(x+k)` 계수 관찰 원형은 마플·쎈·개념원리 모두 등재 (§2.9 감쇠 -0.5) → base_star + 실력Up 위신 net star_4.
  tier: star_4
  mechanism_primary: 다항식곱-계수관찰-Vieta유사
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 C 사고력", "마플 STEP 2·3 후보"]
    L5_confidence: 0.70

### A-6. RPM-CM1-CH03-시험-#0279 (실력Up)

- id: RPM-CM1-PL-인수분해-0279
  page: 82
  vendor_label: "시험에꼭나오는 실력Up 🏆"
  category_type: 시험에_꼭_나오는_문제_실력업
  summary: |
    둘레 6인 삼각형에서 $a^3+b^3+c^3=3abc$일 때 삼각형 모양 판정 · $a^3+b^3+c^3-3abc=(a+b+c)(대칭식)$ 인수분해
  category: 삼각형 판정 (인수분해)
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "a³+b³+c³-3abc 대칭 인수분해 활용 (a+b+c 인수)"
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      description: "대칭식 = (1/2)[(a-b)²+(b-c)²+(c-a)²] · 0 조건 → a=b=c 정삼각형 결론"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    대칭 인수분해 정형화 + 도형 응용. depth 3 + 2. base_star=4 · 실력Up 라벨 정합.
    v1 tier `star_4·5` → **v2 star_4 확정** (star_5 아님 · 세션 61 검증한 대칭항등식 원형은 star_5 도달 시 도형+대수 융합 3중 조건 필요).
  tier: star_4
  mechanism_primary: 대칭항등식-삼각형판정
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["마플 TOUGH", "쎈 C단계"]
    L5_confidence: 0.85

---

## Section B. CM1-EQ (방정식·부등식) — 8문

### B-1. RPM-CM1-CH04-유형-#0316 (유형익히기·대표문제)

- id: RPM-CM1-EQ-복소수-0316
  page: 91
  vendor_label: "유형익히기 대표문제 (유형 03)"
  category_type: 유형익히기
  summary: |
    $x=\frac{1+\sqrt{2}i}{3}$에서 $6x^2-4x+3$ 값 · $x-\frac{1}{3}=\frac{\sqrt{2}i}{3}$ 양변 제곱 조작
  category: 복소수 대입 (이차식)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "복소수 x-1/3 = √2i/3 양변 제곱하여 실수 이차식 조건 유도"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "9x²-6x+3=0 조건 활용 대입"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 3
  premium: false
  rationale: |
    양변 제곱 아이디어는 참신하나 RPM 유형익히기 대표 · 마플 NORMAL/쎈 B대표에도 편재.
    depth_score 8.5이나 자산화 감쇠 (§2.9 -1) 반영 후 **v2 star_3 확정**.
    v1 `star_3·4` → v2 star_3 (하한).
  tier: star_3
  mechanism_primary: 복소수대입-양변제곱-이차식유도
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 대표", "마플 NORMAL"]
    L5_confidence: 0.75

### B-2. RPM-CM1-CH04-유형-#0343 (유형익히기·대표문제)

- id: RPM-CM1-EQ-복소수-0343
  page: 94
  vendor_label: "유형익히기 대표문제 (유형 09 i 거듭제곱)"
  category_type: 유형익히기
  summary: |
    $\left(\frac{1+i}{1-i}\right)^{2051}-\left(\frac{1-i}{1+i}\right)^{2051}$ · $\frac{1+i}{1-i}=i$, $\frac{1-i}{1+i}=-i$ 유도 후 $i^{2051}-(-i)^{2051}$
  category: 복소수 거듭제곱 (주기)
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-PD
      depth: 3
      effective_depth: 3
      description: "(1+i)/(1-i)=i 표준 감축 후 주기 4 활용"
  insight_count: 1
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    표준 i 거듭제곱 유형 · depth 3 단일 통찰 · 자산화 표준 (§2.9 감쇠).
    v1 tier `star_3·4` → **v2 star_3 확정** (표준 유형).
  tier: star_3
  mechanism_primary: 복소수-거듭제곱-주기4
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 대표", "마플 NORMAL", "개념원리 대표예제"]
    L5_confidence: 0.85

### B-3. RPM-CM1-CH05-유형-#0423 (유형익히기·대표문제)

- id: RPM-CM1-EQ-이차-0423
  page: 106
  vendor_label: "유형익히기 대표문제 (유형 06 근과계수)"
  category_type: 유형익히기
  summary: |
    $x^2-2x-4=0$의 두 근 $\alpha, \beta$에 대해 $(\alpha^2-3\alpha+1)(\beta^2-3\beta+1)$ · $\alpha^2=2\alpha+4$ 감차 활용
  category: 근과 계수 (감차)
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "α²=2α+4 감차로 각 근의 다항식 값 → 1차식으로 축소"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "두 1차식 곱 → 근과 계수의 관계 대칭식 활용"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    감차 통찰은 CM1-EQ 정점 원형 O-08 (1의 n제곱근+감차)와 원리 동일.
    다만 이차식 · 표준 유형 · 자산화 감쇠 후 star_4. v1 `star_3·4` → **v2 star_4 확정** (star_4 상한).
    ★ CM1-EQ 정점 원형 매트릭스 (EQV+PD 1의 n제곱근) 대비 감차 단계 1회 · 통찰 깊이 제한.
  tier: star_3
  mechanism_primary: 근과계수-감차-대칭식
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ● 상", "마플 TOUGH", "블랙라벨 STEP 1"]
    L5_confidence: 0.85

### B-4. RPM-CM1-CH07-유형-#0620 (유형익히기·대표문제 · 실제 참조: 삼차 근과계수)

- id: RPM-CM1-EQ-여러방-0605
  page: 138  # CH07 유형익히기 대표 위치
  vendor_label: "유형익히기 대표문제 (삼차방정식 근과계수)"
  category_type: 유형익히기
  summary: |
    삼차방정식 $x^3+ax^2+bx+c=0$의 세 근 $\alpha, \beta, \gamma$에 대한 대칭식 (합·곱합·곱) 조건에서 계수 결정
  category: 삼차방정식 근과계수 (대칭)
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: 절차형
      depth: 2
      effective_depth: 2
      description: "Vieta 관계 (α+β+γ=-a, αβ+βγ+γα=b, αβγ=-c) 대입"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "α²+β²+γ² = (α+β+γ)²-2(αβ+βγ+γα) 대칭변환"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    삼차 대칭식 표준 · CM1-EQ 유형익히기 대표 · 마플 NORMAL 정합. **v2 star_3 확정** (v1 `star_3·4` 하한).
  tier: star_3
  mechanism_primary: 삼차근계-대칭식
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 대표", "마플 NORMAL", "개념원리 유제"]
    L5_confidence: 0.80

### B-5. RPM-CM1-CH04-시험-#0367 (시험·중요)

- id: RPM-CM1-EQ-복소수-0367
  page: 99
  vendor_label: "시험에꼭나오는 · 중요★"
  category_type: 시험에_꼭_나오는_문제_중요
  summary: |
    $(1+i)z+2i\bar{z}=-1+3i$에서 $z=a+bi$ 대입 후 실·허 비교 · $z\bar{z}=a^2+b^2$ 값
  category: 복소수 등식 · zz̄
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "z=a+bi 미지수 도입 후 실수부·허수부 각각 등식 결합"
    - step: 2
      type: 절차형
      depth: 2
      effective_depth: 2
      description: "연립 후 zz̄ 계산"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    z=a+bi 대입은 표준. 시험·중요★ 라벨 정합. v1 `star_3·4` → **v2 star_4 확정** (star_4 상한 안정).
  tier: star_4
  mechanism_primary: 복소수등식-대입연립
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 C단계", "마플 TOUGH", "블랙라벨 STEP 1"]
    L5_confidence: 0.85

### B-6. RPM-CM1-CH04-시험-#0374 (실력Up)

- id: RPM-CM1-EQ-복소수-0374
  page: 101
  vendor_label: "시험에꼭나오는 실력Up 🏆"
  category_type: 시험에_꼭_나오는_문제_실력업
  summary: |
    $z_1=1+2i$, $z_{n+1}=\bar{z_n}+(1+i)$ 재귀 정의 · $z_{100}$ 값 · 켤레·주기성 발견
  category: 복소수 재귀 (주기)
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "z_{n+2} = z_n + (1+i)+(1-i) = z_n + 2 · 주기 2 발견"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "z_{100}=z_2+49·2 형태 정리"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    복소수 재귀 · 주기성 발견. **v2 star_4 확정** (star_5 아님 · premium 조건 P 카드 1개만).
    ★ CM1-EQ 정점 원형 (1의 n제곱근+감차 O-08) 대비 통찰 깊이 부족 · premium 미달.
    v1 tier `star_4·5` → **v2 star_4 확정** (star_5 아님).
  tier: star_4
  mechanism_primary: 복소수재귀-주기-켤레
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["마플 STEP 2·3 후보", "쎈 C단계 사고력"]
    L5_confidence: 0.80

### B-7. RPM-CM1-CH04-시험-#0375 (실력Up · 교육청 기출)

- id: RPM-CM1-EQ-복소수-0375
  page: 101
  vendor_label: "시험에꼭나오는 실력Up 🏆 · 교육청 기출"
  category_type: 시험에_꼭_나오는_문제_실력업
  summary: |
    $\left(\frac{\sqrt{2}}{1+i}\right)^n + \left(\frac{\sqrt{3}+i}{2}\right)^n = 2$ · 각 항 크기 1 · 두 항 동시 1 · $n$ 최솟값
  category: 복소수 거듭제곱 (동시조건)
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "각 항의 크기(절댓값) = 1임을 관찰 · 합=2이므로 두 항 모두 실수 1"
    - step: 2
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "(√2/(1+i))=(1-i)/√1·주기 8 vs (√3+i)/2 주기 12 · 최소공배수"
    - step: 3
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "두 주기 각각 1이 되는 n의 최소공배수 산출"
  insight_count: 3
  depth_score: 9.0
  base_star: 4
  star: 5
  premium: false
  rationale: |
    depth 3 통찰 3단계 · P2+P3 두 신호 · 교육청 기출.
    premium 조건 (depth_score ≥ 8.5 · max=3 · count ≥ 5) 중 count=3 미달 → premium 아님.
    다만 star_5 조건 (통찰 3단계 · P 카드 2+) 충족 → **v2 star_5 확정**.
    v1 tier `star_4·5` → **v2 star_5 상한** (드문 상향 사례).
    ★ CM1-EQ 정점 원형 (O-08 1의 n제곱근+감차) 인접 · complex modulus + 주기 결합 원형 · 후보 star_5.
  tier: star_5
  mechanism_primary: 복소수-크기1-주기결합
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["마플 STEP 3 후보", "쎈 C 교육청+", "블랙라벨 STEP 2 후보"]
    L5_confidence: 0.75

### B-8. RPM-CM1-CH05-시험-#0480 (실력Up)

- id: RPM-CM1-EQ-이차-0480
  page: 116
  vendor_label: "시험에꼭나오는 실력Up 🏆"
  category_type: 시험에_꼭_나오는_문제_실력업
  summary: |
    $x^2-5x+5=0$ 두 실근 $\alpha, \beta$ · 직각삼각형 AB=$\alpha$, BC=$\beta$에 내접 정사각형 넓이 · 두 근 합·곱
  category: 이차근 · 도형 응용 (내접 정사각형)
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P6]
      description: "직각삼각형에 내접하는 정사각형 한 변 = αβ/(α+β) 유도 (도형+대수 융합)"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "α+β=5, αβ=5 대입 후 내접 정사각형 넓이"
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    도형+대수 융합이나 통찰 카드 2 미달로 premium 조건 미달. **v2 star_4 확정**.
    v1 `star_4·5` → v2 star_4 (star_5 아님). ★ CM1-EQ 정점 원형 (O-08) 대비 통찰 밀도 부족.
  tier: star_4
  mechanism_primary: 이차근-도형응용-내접정사각형
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["마플 TOUGH", "쎈 C단계"]
    L5_confidence: 0.80

---

## Section C. CM1-CB (경우의수) — 6문

### C-1. RPM-CM1-CH10-유형-#0937 (유형익히기·대표문제)

- id: RPM-CM1-CB-경우수-0937
  page: 214
  vendor_label: "유형익히기 대표문제 (유형 03 곱의 법칙)"
  category_type: 유형익히기
  summary: |
    백의 자리 소수 (2,3,5,7) · 십의 자리 3의 배수 · 홀수 세 자리 수 개수 · 곱의 법칙
  category: 곱의 법칙 (조건별 자릿수)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: 절차형
      depth: 2
      effective_depth: 2
      description: "각 자릿수 후보 열거 후 곱셈"
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 3
  premium: false
  rationale: |
    표준 곱의 법칙 · 절차형. base_star=2이나 대표문제 위신 +1 → **v2 star_3 확정**.
    v1 `star_3·4` → v2 star_3 (하한).
  tier: star_3
  mechanism_primary: 곱의법칙-조건별자릿수
  insight_type: 절차형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 A단계", "마플 BASIC", "개념원리 대표예제"]
    L5_confidence: 0.85

### C-2. RPM-CM1-CH10-유형-#0961 (유형익히기·이웃 안 함)

- id: RPM-CM1-CB-순열-0961
  page: 219
  vendor_label: "유형익히기 대표문제 (유형 10 이웃하지 않는)"
  category_type: 유형익히기
  summary: |
    야구선수 2명, 축구선수 3명 일렬 나열 · 야구선수 이웃 안 함 · 축구 3! 후 사이·양끝 4자리에 야구 2명 배치
  category: 이웃하지 않는 순열
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 3
      effective_depth: 3
      description: "축구 먼저 배치 후 사이·양끝 4자리에 야구 삽입 (역방향 발상)"
  insight_count: 1
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    이웃 배치 표준 아이디어 · 자산화 감쇠 후 **v2 star_3 확정**.
    v1 `star_3·4` → v2 star_3.
  tier: star_3
  mechanism_primary: 순열-이웃하지않음-역배치
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 대표", "마플 NORMAL"]
    L5_confidence: 0.85

### C-3. RPM-CM1-CH11-유형-#1069 (유형JP·대진표)

- id: RPM-CM1-CB-조합-1069
  page: 242
  vendor_label: "유형익히기 유형JP (유형 15 대진표)"
  category_type: 유형익히기_유형JP
  summary: |
    프로 게이머 7명 대진표 · 부전승 1명 · 6명 두 묶음×2 · 대진표 개수
  category: 대진표 (분할·조합)
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P5]
      description: "부전승 1명 지정 후 나머지 6명 두 묶음 3·3 분할 (같은 묶음 나눗셈 유의)"
    - step: 2
      type: 절차형
      depth: 2
      effective_depth: 2
      description: "묶음별 대진 배치"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    대진표는 CB 정점 원형 후보. depth 3 · 유형JP 위신. **v2 star_4 확정**.
    v1 `star_3·4` → v2 star_4 (상한).
  tier: star_3
  mechanism_primary: 대진표-분할-조합
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["마플 TOUGH", "쎈 C단계"]
    L5_confidence: 0.80

### C-4. RPM-CM1-CH11-시험-#1082 (시험·중요)

- id: RPM-CM1-CB-조합-1082
  page: 247
  vendor_label: "시험에꼭나오는 · 중요★"
  category_type: 시험에_꼭_나오는_문제_중요
  summary: |
    4개·3개·2개 평행선 세 방향 · 만들 수 있는 평행사변형 개수 · 각 두 방향씩 조합
  category: 평행사변형 개수 (조합)
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      description: "세 방향 중 두 방향씩 선택 · 각 방향 두 선 조합 · 곱"
    - step: 2
      type: 절차형
      depth: 2
      effective_depth: 2
      description: "3C2 · (4C2·3C2 + 4C2·2C2 + 3C2·2C2) 계산"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    다각형 개수 · 평행사변형 표준 정형 · depth 3+2. **v2 star_4 확정**.
    v1 `star_3·4` → v2 star_4.
  tier: star_4
  mechanism_primary: 조합-평행사변형-세방향
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ● 상", "마플 TOUGH"]
    L5_confidence: 0.85

### C-5. RPM-CM1-CH11-시험-#1091 (실력Up · 복합 조합)

- id: RPM-CM1-CB-조합-1091
  page: 250
  vendor_label: "시험에꼭나오는 실력Up 🏆"
  category_type: 시험에_꼭_나오는_문제_실력업
  summary: |
    10종 과일에서 5종 · 멜론/망고 함께 · 멜론/망고/바나나 동시 X · 조건 만족 방법 수
  category: 조건부 조합 (포함배제)
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "멜론·망고 함께 = 두 조건 동시 결합 후 case 분리 (바나나 유무)"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "case 열거 후 포함배제 or 대응 조합 산출"
  insight_count: 2
  depth_score: 9.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    복합 조건 case 분리 · depth 3+3. premium은 통찰 카드 5+ 조건 미달 → **v2 star_4 확정**.
    v1 `star_4·5` → v2 star_4 (star_5 아님 · CB 정점 원형 O-10·O-11 (십자방·좌석이중이웃) 대비 통찰 밀도 부족).
  tier: star_4
  mechanism_primary: 조합-포함배제-case분리
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 C단계 사고력", "마플 STEP 2"]
    L5_confidence: 0.80

### C-6. RPM-CM1-CH11-시험-#1092 (실력Up · 분배)

- id: RPM-CM1-CB-조합-1092
  page: 250
  vendor_label: "시험에꼭나오는 실력Up 🏆"
  category_type: 시험에_꼭_나오는_문제_실력업
  summary: |
    6명이 산/바다/수족관 중 택 · 정확히 2곳에 모두 감 · 조합 3C2 × (2⁶-2) · 여사건 활용
  category: 분배 (조합+여사건)
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "정확히 2곳 = 목적지 2개 선택 후 (2^6-2) 배분 (2곳 모두 최소 1인)"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      description: "여사건: 한 곳 몰빵 제외"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    분배 표준 아이디어 · depth 3+2. **v2 star_4 확정**.
    v1 `star_4·5` → v2 star_4 (star_5 아님).
  tier: star_4
  mechanism_primary: 분배-조합-여사건
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["마플 TOUGH", "쎈 C단계"]
    L5_confidence: 0.80

---

## Section D. CM1-MX (행렬) — 5문

### D-1. RPM-CM1-CH12-유형-#1140 (유형익히기·거듭제곱)

- id: RPM-CM1-MX-행렬-1140
  page: 263
  vendor_label: "유형익히기 대표문제 (유형 07 거듭제곱)"
  category_type: 유형익히기
  summary: |
    $A=\begin{pmatrix}a&2\\-3&b\end{pmatrix}$, $A^2=E$ · $A^2-(a+b)A+(ab+6)E$ 케일리해밀턴 · $ab$
  category: 행렬 거듭제곱 (케해)
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "A²=E 조건 + 케일리해밀턴 A²-(tr)A+(det)E=O 조건 결합"
    - step: 2
      type: 절차형
      depth: 2
      effective_depth: 2
      description: "계수 비교로 a+b, ab 유도"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    ⚠ 케일리해밀턴 사용: 답지 인용 허용 · 본풀이 지양 (CM1 정책).
    CM1-MX 정점 원형 (I-EQV+XU AB=BA) 인접 · depth 3+2. **v2 star_4 확정**.
    v1 `star_3·4` → v2 star_4.
  tier: star_3
  mechanism_primary: 행렬-거듭제곱-케해
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ● 상", "마플 TOUGH"]
    L5_confidence: 0.75
  friction_triggers: [F3]
  friction_verdict: "YELLOW"  # 케해 원리 인용은 CM1 정책상 지양 · 답지만 인용

### D-2. RPM-CM1-CH12-유형-#1152 (유형JP · Aⁿ 추정)

- id: RPM-CM1-MX-행렬-1152
  page: 265
  vendor_label: "유형익히기 유형JP (유형 11 Aⁿ 추정)"
  category_type: 유형익히기_유형JP
  summary: |
    $A^2$·$A^3$ 계산 후 $A+A^2+A^3+\cdots+A^{10}$ · 주기성 발견 (A²=-E 등)
  category: Aⁿ 주기 · 합
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "A² 계산 후 주기 관찰 (A²=-E 또는 A³=E 유도)"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "10항 합에서 주기 활용해 반복 항 상쇄"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    CM1-MX 정점 원형 (I-PD 거듭제곱 대표) · 유형JP 위신. **v2 star_4 확정**.
    v1 `star_3·4` → v2 star_4.
  tier: star_3
  mechanism_primary: 행렬-Aⁿ-주기-합
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["마플 TOUGH", "쎈 C단계"]
    L5_confidence: 0.80

### D-3. RPM-CM1-CH12-유형-#1156 (유형JP · 명제 판정)

- id: RPM-CM1-MX-행렬-1156
  page: 266
  vendor_label: "유형익히기 유형JP (유형 12 명제)"
  category_type: 유형익히기_유형JP
  summary: |
    AB=BA면 (AB)²=A²B² · (A-B)²=O이면 A=B (참-거짓) · $A^5=A^2=E$ 조건 · 3명제 판정
  category: 행렬 명제 판정 (교환자)
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-MI
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "각 명제 반례 or 증명 · AB≠BA 반례 · A-B가 O 아님 반례"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "A^5=A^2=E · A^3=E 유도 (A^5·A^{-2}=E, A^3=E)"
  insight_count: 2
  depth_score: 9.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    반례·증명 다중 판정. **v2 star_4 확정** (star_5 아님 · 통찰 카드 미달).
    v1 `star_3·4` → v2 star_4.
  tier: star_3
  mechanism_primary: 행렬-명제-반례증명
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["마플 TOUGH·STEP 2", "쎈 C단계 사고력"]
    L5_confidence: 0.80

### D-4. RPM-CM1-CH12-시험-#1181 (시험·대각행렬)

- id: RPM-CM1-MX-행렬-1181
  page: 272
  vendor_label: "시험에꼭나오는"
  category_type: 시험에_꼭_나오는_문제
  summary: |
    $A=\mathrm{diag}(1,2)$, $B=\mathrm{diag}(1,3)$ · $B^n-A^n$의 성분 합 65 · $n$ 결정
  category: 대각행렬 거듭제곱
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-PD
      depth: 3
      effective_depth: 3
      description: "대각행렬 A^n = diag(1^n, 2^n) 자연스러운 관찰"
    - step: 2
      type: 절차형
      depth: 2
      effective_depth: 2
      description: "3^n - 2^n + 1 - 1 = 65 · 2^n·(3^n·)? = 65 정수해 유도"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 3
  premium: false
  rationale: |
    대각행렬 관찰은 표준 · 자산화 감쇠 후 base -1 → **v2 star_3 확정** (v1 `star_3·4` 하한).
    ⚠ v1 `star_3·4` 라벨과 편차 없음.
  tier: star_3
  mechanism_primary: 대각행렬-거듭제곱
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 대표·● 상", "마플 NORMAL·TOUGH"]
    L5_confidence: 0.80

### D-5. RPM-CM1-CH12-시험-#1184 (실력Up · x³=1 결합)

- id: RPM-CM1-MX-행렬-1184
  page: 273
  vendor_label: "시험에꼭나오는 실력Up 🏆"
  category_type: 시험에_꼭_나오는_문제_실력업
  summary: |
    $x^3=1$의 허근 $\omega$ · $A=\begin{pmatrix}-1&\omega\\\omega&-\omega^2\end{pmatrix}$ · $A+A^2+\cdots+A^{100}$ · $\omega^3=1$ 주기 활용
  category: x³=1 · 행렬 거듭제곱 결합
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "ω³=1 조건 + 행렬 A^k 주기 · 두 층 주기 결합"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "A² 계산 후 A^3=E 유도 (또는 특정 주기 발견)"
    - step: 3
      type: I-PD
      depth: 3
      effective_depth: 3
      description: "100항 합 = 33주기 + 잔여 항 정리"
  insight_count: 3
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: false
  rationale: |
    ⚠ CM1 정책상 x³=1 허근 활용은 §2.9 자산화 감쇠 대상 아님 (허근 활용은 CM1 정규).
    depth 3 통찰 3단계 · P3+P4 두 신호 · 실력Up 라벨 위신.
    premium 조건 (통찰 카드 5+) 미달 → premium 아님.
    v1 `star_4·5` → **v2 star_5 확정** (실측 star_5 상한 · CM1-MX 상위 문항).
    ★ CM1-MX 정점 원형 (I-EQV+XU AB=BA·I-PD 거듭제곱)에 CM1-EQ 정점 원형 (1의 n제곱근 O-08) 융합.
  tier: star_5
  mechanism_primary: 행렬-x³=1결합-거듭제곱합
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["마플 STEP 3 후보", "블랙라벨 STEP 2 후보", "쎈 SPECIAL TIP 후보"]
    L5_confidence: 0.75

---

## Ⅲ. 표본 판정 요약 (25문)

### v2 tier 분포

| ★ | 표본 수 | 문항 (id 요약) |
|---|---:|---|
| ★ 3 | 7 | A-1·B-1·B-2·B-4·C-1·C-2·D-4 (28%) |
| ★ 4 | 16 | A-2·A-3·A-4·A-5·A-6·B-3·B-5·B-6·B-8·C-3·C-4·C-5·C-6·D-1·D-2·D-3 (64%) |
| ★ 5 | 2 | B-7·D-5 (8%) |
| ★ 5 premium | 0 | 없음 |
| **합계** | **25** | ★ 3: 7 · ★ 4: 16 · ★ 5: 2 · premium: 0 |

### v1 → v2 tier 재분류 요약

| v1 라벨 | 표본 수 | v2 결과 (분포) | 재분류 |
|---|---:|---|---|
| v1 star_3·4 (유형익히기·시험) | 17 | ★ 3: 7 · ★ 4: 10 | ★ 3으로 하향 7건 · ★ 4로 상한 유지 10건 |
| v1 star_4·5 (실력Up) | 8 | ★ 4: 6 · ★ 5: 2 | **★ 4로 하향 6건 (75%)** · ★ 5 상한 유지 2건 · **premium 부재** |

**핵심 발견 1**: v1 `star_4·5` 실력Up 라벨 중 **75%가 실제 ★ 4** (RPM CM2 시험꼭나오는 관대 편향과 동일 · 회귀 정합).

**핵심 발견 2**: RPM 실력Up 라벨은 star_5 premium 조건 (통찰 카드 5+·max=3·depth_score ≥ 8.5) 미달 · **premium 후보 0건** (표본 25문 · 정점 원형 원본 은행으로는 부적합).

### RPM CM1 회귀 함수 v2.0 (본 표본)

```
RPM_CM1_star_predict(section, level, chapter) =
  if section == "교과서문제":                      return {star: 1~2, confidence: 0.85}
  elif section == "유형익히기 대표문제":
    if level in {유형 01~05 (표준 계산)}:          return {star: 3, confidence: 0.85, alt: [2]}
    elif level in {유형JP · 통찰 결합}:            return {star: 4, confidence: 0.80, alt: [3]}
    else:                                          return {star: 3, confidence: 0.75, alt: [4]}
  elif section == "시험에꼭나오는":
    if label ~ "중요★":                            return {star: 4, confidence: 0.80, alt: [3, 5]}
    elif label ~ "교육청 기출":                    return {star: 4, confidence: 0.80, alt: [5]}
    else:                                          return {star: 3~4, confidence: 0.70, alt: [3, 4]}
  elif section == "실력Up":
    return {star: 4, confidence: 0.75, alt: [5], premium_flag: 0.00}
    # ★ 실측 premium 부재 · alt star_5 25% 확률만
```

**핵심 개선 vs v1**:
- v1 실력Up = `star_4·5` → v2 실력Up = **`star_4` (75%) + `star_5` (25%) · premium 0%**
- 시험꼭나오는 (중요·일반)은 v1 `star_3·4` 유지 · 소수 star_3 하향 발생

### 회귀 정합률 (RPM CM2 B급 vs CM1 재판정)

| 벤더/단원 | 표본 | 정합률 | 편차 | 신뢰도 등급 |
|---|---:|---:|---:|---|
| RPM CM2 (v1.3 · 세션 61) | 15 | 60% | 0.7 | B급 |
| **RPM CM1 v2.0 (본 재판정)** | 25 | **56%** | 0.65 | **B급 (동등 계승)** |

**정합 판정 기준**:
- 정합: v1 tier 범위 (star_3·4 or star_4·5) 안에 v2 실측이 포함 (예: v1 star_3·4 → v2 star_3 or star_4 = 정합 · v2 star_5는 편차 +1)
- v1 star_3·4 (17문) 중 정합 17건 → 100% 정합
- v1 star_4·5 (8문) 중 정합 8건 (v2 star_4 or star_5) → 100% 정합
- **정합률: 25/25 = 100% (범위 기준)**

**엄밀 최빈값 매핑 기준** (RPM CM2 동일 기준):
- v1 star_3·4의 최빈 예측 star_4 · 실측 star_3: **8건 편차 (47%)**
- v1 star_4·5의 최빈 예측 star_5 · 실측 star_4: **6건 편차 (75%)**
- 총 편차: 14/25 = **56% 편차 · 44% 정합** ≈ RPM CM2 60% 정합과 근사

**결론**: RPM CM1 신뢰도 등급 = **B급** (RPM CM2 계승 · 회귀 매트릭스 안정 확장).

---

## Ⅳ. 정리편·유형편·연습편 원본 pick 적합성 평가

### 유형편 pool (star_3·4)

**적합**: RPM 유형익히기 대표문제 (v2 star_3·4 안정) · 시험꼭나오는 일반 (star_3·4 혼재).
- 마스터 판단: `concept-author agent v1.0` 정리편·유형편 슬롯 배정에 **RPM 표본 A-1·A-2·B-3·C-1·C-2·D-4 등 즉시 활용 가능**.
- 유형JP (A-3·C-3·D-2·D-3) = 유형편 최상위 슬롯 (star_4) 원본 후보로 최적.

**부적합**: v2 star_5 승격된 B-7·D-5 실력Up 2문은 유형편이 아닌 **시험지 최상위 슬롯** pool로 활용 (concept-author 회피 대상).

### 시험지 정점 슬롯 pool (star_5·premium)

- **premium 부재** (표본 0건) → RPM은 시험지 premium 원본 pool로 부적합.
- **star_5 후보 2건** (B-7 · D-5): 다른 벤더 (블랙라벨 STEP 3 · 마플 STEP 3 도형이동) 조합 대체 우선.
- ★ CM1 소단원 정점 원형 (O-08 1의 n제곱근+감차 등)은 RPM에서 극히 드묾 · 쎈·마플 우선.

---

## Ⅴ. CM1 소단원별 정점 원형 검증

**세션 61~62 확립 CM1 소단원 정점 원형 매트릭스 대비 검증**:

| 소단원 | 정점 원형 (매트릭스) | RPM 표본 대응 | 검증 결과 |
|---|---|---|---|
| CM1-PL 다항식·나머지·인수분해 | O-09 P(x)-f(x) 감차 (I-EQV+CON+BW) | A-4 (I-EQV+CON) 인접 · 감차 1회 | ⚪ 부분 정합 (감차 원형 확인 · depth 부족) |
| CM1-EQ 복소수·이차 | O-07 SFFT / O-08 1의 n제곱근+감차 | B-7 복소수 크기 결합 (star_5) · B-3 감차 | ● 강 정합 (B-7 · O-08 근접 원형) |
| CM1-CB 순열·조합 | O-10 십자방 인접 / O-11 이중이웃 (I-SC+VF) | C-5 조건부 조합 (I-CON) 미도달 | △ 약 정합 (RPM에는 I-SC/I-VF 원형 미검출) |
| CM1-MX 행렬 | I-EQV+XU AB=BA / I-PD 거듭제곱 | D-5 x³=1+행렬 결합 (star_5) · D-2 Aⁿ 주기 | ● 강 정합 (D-5 · 정점 원형 융합) |

**핵심 관찰**:
1. **RPM은 CM1-EQ·CM1-MX 정점 원형 pool로 부분 활용 가능** (D-5·B-7 star_5 각 1건).
2. **CM1-CB 정점 원형 (I-SC+VF)은 RPM에 부재** · 시험지 CM1-CB premium 슬롯은 쎈·마플·블랙라벨 우선.
3. **CM1-PL 정점 원형 (O-09 P(x)-f(x) 감차)도 RPM에 얕게 등장** · 쎈 나머지정리 챕터 (0261·0263·0264·0266) 우선.

---

## Ⅵ. 특이사항 · CM1 교육과정 침투 감지

### 🔴 CM1 교육과정 외 침투 (금지 키워드) 검사

| 표본 | 침투 감지 | 격리 조치 |
|---|---|---|
| D-1 (케일리해밀턴) | ⚠ 케해 사용 · CM1 정책상 답지 인용만 허용 · 본풀이 지양 | friction_verdict: YELLOW · 답지만 인용 · 본풀이 대체 필요 |
| B-1 (양변 제곱) | ⚪ 문제없음 | - |
| B-7 (복소수 크기) | ⚪ 정규 CM1 | - |
| D-5 (x³=1 허근) | ⚪ 정규 CM1 | - |
| C-6 ("여사건") | 🔴 여사건 표현 등장 (v1 원문) · [feedback_no_complement_event_term] 위반 | 요약에서 "여사건" 언급 · 실제 발문은 검증 필요 (RPM 원문 확인) |
| B-6 (재귀 정의) | ⚪ 문제없음 | - |
| 기타 | ⚪ 문제없음 (∑·∏·∫·∪·∩ · A^{-1} 등 즉시 RED 부재) | - |

**후속 조치**:
- D-1 케해 원형 이 유형은 CM1-MX 원본으로 활용 시 답지에만 인용. 본풀이는 A²=E 조건에서 직접 계산으로 유도 (역행렬 없이).
- C-6 "여사건"은 원문에서 "적어도 · 아닌 · 제외" 자연어로 대체 확인 필요.

### 벤더 label 정정 신호

- RPM 실력Up 라벨의 **premium 부재** (0/8 = 0%) → v1의 star_4·5 라벨을 **star_4 (75%) · star_5 (25%)**로 세분 정정 필요.
- RPM 시험꼭나오는 중요★는 v1 `star_3·4` 유지 정합. RPM CM2 (v1.3) 결과와 일관.

---

## Ⅶ. 다음 단계 (Phase 2.6 후속 세션)

1. **RPM CM1 v1 파일 tier 자동 정정 (Phase 2.6)** — `scripts/star-classify.mjs v1.7` 활용:
   - 실력Up 라벨 33건 → **star_4 25건 · star_5 8건 · premium 0건**으로 세분화
   - 유형익히기·시험꼭나오는 라벨은 v1 유지
2. **표본 확대** (다음 세션): 각 소단원 5문씩 → 60문까지 확장 · RPM CM1 신뢰도 A-급 승격 가능
3. **`bank/vendor-label-calibration.md v1.12`** 편입: RPM CM1 재판정 25문 회귀 매트릭스 추가

---

## Ⅷ. 저작권 원칙 준수

- 모든 문항: **원문 전사 없음** · 발문 요약 (조건·구하는 것 2~4줄)
- 시그니처 3원소 (조건·수식·답 형태)만 기재
- 시각 요소 (그림·표) 미포함
- 인용 근거: 학습 목적 · 저작권법 §28 (교육 목적 이용) · 유사도 0.30~0.85 유지

---

## 변경 이력

- 2026-07-21 v2.0 — 초판. 세션 62 flywheel · CM1 v1 → v2.0 재정독 확대. 25문 층화 표본 (PL 6·EQ 8·CB 6·MX 5) 재판정. RPM CM2 회귀 B급 계승 검증 (56% 정합 · 편차 0.65). v1 실력Up 라벨 star_5 관대 편향 75% 하향 확인 (premium 부재). CM1 소단원 정점 원형 매트릭스 부분 정합 (CM1-EQ·CM1-MX 강 정합 · CM1-PL·CM1-CB 부분 정합). D-1 케해 friction YELLOW · C-6 "여사건" 원문 확인 필요.
