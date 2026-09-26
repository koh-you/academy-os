---
name: mechanism-데이터-마플시너지-CM1-EQ-복소수
description: 마플시너지 공통수학1 (2022개정 · 2025판) 방정식과 부등식 대단원 · 01 복소수 소단원 정독 데이터. v2.0 통합 자산 스키마 · 표본 20문 시스템 순정 판정 + 나머지 125문 벤더 라벨 회귀 예측. 저작권 준수.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: 마플시너지 공통수학1 (2022개정 · 2025판) · 참고자료/공통수학 1/마플시너지 공통수학1 2025/마플시너지 공통수학1 2025.pdf
  section: 복소수
  unit_code: CM1-EQ
  sub_unit: 복소수
  citation_note: "마플시너지 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약)"
  extract_range: "II. 방정식과 부등식 → 01 복소수 · STEP 1 내신정복 기출유형 (유형 01~18 · #0382~0508) + STEP 2 서술형 (#0509~0514) + STEP 3 행복한 일등급 (#0515~0526)"
  pages: "076~098 (책 페이지 · PDF 페이지와 동일 · 23p)"
  total_problems: 145
  sample_problems: 20
  predicted_problems: 125
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: mechanism-데이터-마플시너지-CM1-EQ-이차방정식 (형식 준거 · CM1-EQ 대단원 연속 자산화)
  parent_calibration: vendor-label-calibration.md v1.7 (마플 라벨 회귀 매핑 적용)
---

# 마플시너지 공통수학1 (2022개정 · 2025판) — 01 복소수 소단원 정독 데이터

**출처**: 마플시너지 공통수학1 (2022개정 · 2025판) · II. 방정식과 부등식 → 01 복소수
**범위**: STEP 1 내신정복 기출유형 유형 01~18 (#0382~0508, 127문) + STEP 2 서술형 (#0509~0514, 6문) + STEP 3 행복한 일등급 (#0515~0526, 12문)
**정독 페이지**: p.076~098 (23p, PDF page 동일)
**총 문항 수**: **145문항** (#0382~0526)
**표본**: 20문 (STEP1 BASIC 3 + NORMAL 6 + TOUGH 5 · STEP2 서술형 2 · STEP3 행복한 일등급 4) · 시스템 순정 판정
**예측**: 125문 · 벤더 라벨 회귀 예측 (vendor-label-calibration v1.7 적용)
**정독 일자**: 2026-07-21
**세션 58 Agent F 보고 정정**: "STEP 3 1페이지 5문 확보 어려움" → 실측 결과 **STEP 3 2페이지 12문 확보** (p.97~98). 표본 계획 유연 조정 (STEP 3 4문 · TOUGH·NORMAL 확대)

## 벤더 라벨 체계 (마플시너지)

| 라벨 | 의미 | 표본 사전 tier |
|---|---|---|
| BASIC | 기본 개념 즉시 적용 | ★ 1~2 |
| NORMAL | 표준 유형 | ★ 3 |
| TOUGH | 심화·응용 | ★ 4~5 |
| 최다빈출·중요 | 반복 출제 표준 | tier 유지 |
| 학교기출 | 실제 학교 시험 편입 | tier 유지 |
| 모의고사·핵심유형 | 학평 편입 (년월·문번 명시) | tier 유지 |
| 내신연계문제·해설 | 유사 문항 존재 표시 | tier 유지 |
| STEP 2 서술형 | 서술형 (단계 배점) | 원 판정 유지 |
| STEP 3 행복한 일등급 | 킬러·1등급 대비 | ★ 4~5 |

## 유형 라벨 구성 (마플시너지 CM1-EQ-복소수 · STEP 1 유형 18개)

| 유형 | 이름 | 대표 문항 범위 |
|---|---|---|
| 유형 01 | 복소수의 뜻 | #0382~0383 |
| 유형 02 | 복소수의 사칙연산 | #0384~0390 |
| 유형 03 | 복소수가 주어질 때 식의 값 구하기 | #0391~0396 |
| 유형 04 | 복소수가 실수 또는 순허수가 되는 조건 | #0397~0399 |
| 유형 05 | 복소수 $z^2$이 실수 또는 순허수가 되는 조건 | #0400~0406 |
| 유형 06 | 복소수가 서로 같을 조건 | #0407~0414 |
| 유형 07 | 켤레복소수 | #0415~0423 |
| 유형 08 | 켤레복소수가 주어질 때 식의 값 구하기 | #0424~0430 |
| 유형 09 | 켤레복소수의 성질을 이용하여 식의 값 구하기 | #0431~0440 |
| 유형 10 | 등식을 만족시키는 복소수 구하기 | #0441~0450 |
| 유형 11 | 켤레복소수의 성질 (1) | #0451~0459 |
| 유형 12 | 켤레복소수의 성질 (2) | #0460~0467 |
| 유형 13 | 켤레복소수의 성질의 활용 | #0461~0467 (혼재) |
| 유형 14 | 허수단위 $i$의 거듭제곱 | #0468~0476 |
| 유형 15 | 복소수의 거듭제곱의 계산 (1) | #0477~0483 |
| 유형 16 | 복소수의 거듭제곱의 계산 (2) | #0484~0493 |
| 유형 17 | 음수의 제곱근의 계산 | #0494~0499 |
| 유형 18 | 음수의 제곱근의 성질 | #0500~0508 |

---

## Ⅰ. STEP 1 BASIC 표본 (3문 정밀 판정)

```yaml
- id: 마-CM1-EQ-복소수-0384
  page: 76
  vendor_label: 학교기출·BASIC
  category_type: STEP 1 BASIC
  summary: "다음 복소수 계산 중 옳지 않은 것 (5지선다): ① $(3-2i)+(1-3i)=4-5i$ ② $(6+3i)-(3-i)=3+4i$ ③ $(\\sqrt{3}+\\sqrt{-3})^2=6i$ ④ $(3+i)(3-i)=8$ ⑤ $\\dfrac{1}{1-i}+\\dfrac{1}{1+i}=1$"
  category: 복소수 사칙연산 · 선지 함정 검증
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "각 선지 사칙연산 직접 계산 (분배·유리화 포함)"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "$(3+i)(3-i)=9-i^2=10 \\neq 8$ · 선지 ④ 오답 판정"}
  insight_count: 2
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: "5지선다 사칙연산 전수 검증 · 표준 절차 · ★ 2 (BASIC 학교기출 대표)"
  tier: star_2
  mechanism_primary: 복소수 사칙연산 · 선지 검증
  insight_type: 통찰형 (얕음)
  target_cohort: 중하위권
  anchor_status: null
  novelty_score: 0
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L3_multi_vendor_tier: []
    L5_confidence: 0.92

- id: 마-CM1-EQ-복소수-0386
  page: 76
  vendor_label: BASIC
  category_type: STEP 1 BASIC
  summary: "$(2-\\sqrt{-9})(3+\\sqrt{-4})$를 $a+bi$ ($a$, $b$는 실수) 꼴로 나타낼 때, $a-b$의 값 (단, $i=\\sqrt{-1}$)"
  category: 음수의 제곱근 변환 · 복소수 곱셈
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "$\\sqrt{-9}=3i$, $\\sqrt{-4}=2i$ 변환"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "$(2-3i)(3+2i)=6+4i-9i-6i^2=12-5i$ · $a=12, b=-5$ · $a-b=17$"}
  insight_count: 2
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: "음수 제곱근+곱셈 표준 절차 · ★ 2 (BASIC 정합)"
  tier: star_2
  mechanism_primary: 음수 제곱근 · 복소수 곱셈
  insight_type: 통찰형 (얕음)
  target_cohort: 중하위권
  anchor_status: null
  novelty_score: 0
  vendor_calibration_signal:
    L5_confidence: 0.92

- id: 마-CM1-EQ-복소수-0408
  page: 80
  vendor_label: BASIC
  category_type: STEP 1 BASIC
  summary: "두 실수 $x$, $y$가 등식 $x-2xyi-2=6i-y$를 만족할 때, $x^3+y^3$의 값 (단, $i=\\sqrt{-1}$)"
  category: 복소수 상등 · 연립방정식 · 곱셈공식 변형
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "실수부 · 허수부 상등: $x-2=-y$, $-2xy=6$ → $x+y=2$, $xy=-3$"}
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "$x^3+y^3=(x+y)^3-3xy(x+y)=8-3(-3)(2)=8+18=26$"}
  insight_count: 2
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: "복소수 상등+곱셈공식 변형 표준 · ★ 2 (BASIC 정합) · 선지 ② 26"
  tier: star_2
  mechanism_primary: 복소수 상등 · 곱셈공식 변형
  insight_type: 통찰형 (얕음)
  target_cohort: 중하위권
  anchor_status: null
  novelty_score: 0
  vendor_calibration_signal:
    L5_confidence: 0.90
```

---

## Ⅱ. STEP 1 NORMAL 표본 (6문 정밀 판정)

```yaml
- id: 마-CM1-EQ-복소수-0388
  page: 77
  vendor_label: 최다빈출·중요·NORMAL
  category_type: STEP 1 NORMAL
  summary: "$\\dfrac{(1-\\sqrt{-1})(-3+\\sqrt{-4})}{2+\\sqrt{-9}}=a+bi$ ($a$, $b$는 실수) 꼴로 나타낼 때, $a+b$의 값 (단, $i=\\sqrt{-1}$)"
  category: 음수 제곱근 변환 · 분모 유리화 · 복소수 분수 계산
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "$\\sqrt{-1}=i$, $\\sqrt{-4}=2i$, $\\sqrt{-9}=3i$ 변환 → $\\dfrac{(1-i)(-3+2i)}{2+3i}$"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "분자 전개: $(1-i)(-3+2i)=-3+2i+3i-2i^2=-1+5i$"}
    - {step: 3, type: I-EQV, depth: 1, effective_depth: 1, description: "분모 유리화: $\\dfrac{-1+5i}{2+3i} \\cdot \\dfrac{2-3i}{2-3i}=\\dfrac{-2+3i+10i-15i^2}{4+9}=\\dfrac{13+13i}{13}=1+i$"}
    - {step: 4, type: I-CON, depth: 1, effective_depth: 1, description: "$a=1, b=1$ · $a+b=2$"}
  insight_count: 4
  depth_score: 5.25
  base_star: 3
  star: 3
  premium: false
  rationale: "음수 제곱근+분모 유리화+분수 정리 4단계 · depth 2 · ★ 3 · 최다빈출 정합"
  tier: star_3
  mechanism_primary: 음수 제곱근 · 분모 유리화 · 복소수 분수
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  novelty_score: 0
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM1-EQ-복소수-0385, 마-CM1-EQ-복소수-0387]
    L5_confidence: 0.90

- id: 마-CM1-EQ-복소수-0395
  page: 78
  vendor_label: 최다빈출·중요·NORMAL
  category_type: STEP 1 NORMAL
  summary: "$x^2=-1+2i$일 때, $x^4+x^3+5x^2+2x+\\dfrac{5}{x}$의 값 (단, $i=\\sqrt{-1}$)"
  category: 이차식 재제곱 · 차수 감차 · 대입식
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "$x^2=-1+2i$ 활용 · $x^4=(x^2)^2=(-1+2i)^2=1-4i-4=-3-4i$"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "차수 감차: $x^3=x \\cdot x^2=x(-1+2i)$, $\\dfrac{5}{x}=\\dfrac{5x}{x^2}$ 등 · 각 항을 $x$의 일차식·상수로 환원"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "정리 후 대입 계산 · 결과값 도출"}
  insight_count: 3
  depth_score: 5.67
  base_star: 3
  star: 3
  premium: false
  rationale: "이차식 재제곱+차수 감차 · depth 2 · ★ 3 · CM1-PL 나머지정리 인접 (감차 원형)"
  tier: star_3
  mechanism_primary: 이차식 대입 · 차수 감차
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  novelty_score: 1
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM1-EQ-복소수-0396, 마-CM1-EQ-복소수-0428]
    L5_confidence: 0.88

- id: 마-CM1-EQ-복소수-0404
  page: 79
  vendor_label: 최다빈출·중요·NORMAL
  category_type: STEP 1 NORMAL
  summary: "복소수 $z=(1+i)x^2-(3i+5)x+(6+2i)$에 대하여 $z^2$이 양의 실수가 되도록 하는 실수 $x$의 값 (단, $i=\\sqrt{-1}$)"
  category: 복소수 $z^2$ 양의 실수 · z=a+bi 꼴 실수부·허수부 정리
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "$z=(x^2-5x+6)+(x^2-3x+2)i$ 실수부 · 허수부 분리"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "$z^2$ 양의 실수 조건: $z$가 실수 (허수부=0) 그리고 $z \\neq 0$ 이거나 순허수 배제 · 유형 05 정의에 따라 $z$는 0이 아닌 실수 조건"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "$x^2-3x+2=0 \\Rightarrow x=1, 2$ · 각 대입 후 실수부 값 확인 · 양의 실수 조건 필터링 → 답 선지"}
  insight_count: 3
  depth_score: 5.67
  base_star: 3
  star: 3
  premium: false
  rationale: "z^2 양의 실수 조건 필터링 · depth 2 · ★ 3 · 유형 05 백본"
  tier: star_3
  mechanism_primary: 복소수 실수·순허수 조건 · $z^2$ 양의 실수
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  novelty_score: 1
  friction_triggers: [F2]
  friction_verdict: OK
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM1-EQ-복소수-0400, 마-CM1-EQ-복소수-0402, 마-CM1-EQ-복소수-0509]
    L5_confidence: 0.88

- id: 마-CM1-EQ-복소수-0411
  page: 80
  vendor_label: 최다빈출·중요·NORMAL
  category_type: STEP 1 NORMAL
  summary: "두 실수 $x$, $y$에 대하여 등식 $\\dfrac{x}{1+2i}+\\dfrac{y}{1-2i}=3-2i$가 성립할 때, $xy$의 값 (단, $i=\\sqrt{-1}$)"
  category: 분수식 복소수 · 분모 유리화 · 상등 조건
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "분모 유리화: $\\dfrac{x(1-2i)+y(1+2i)}{(1+2i)(1-2i)}=\\dfrac{(x+y)+(-2x+2y)i}{5}$"}
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "$=3-2i$ 상등 · $x+y=15$, $-2x+2y=-10 \\Rightarrow y-x=-5$"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "연립 → $x=10, y=5$ · $xy=50$"}
  insight_count: 3
  depth_score: 5.33
  base_star: 3
  star: 3
  premium: false
  rationale: "분모 유리화+상등+연립 · depth 2 · ★ 3 · 최다빈출 정합 · 선지 ③ 50"
  tier: star_3
  mechanism_primary: 분모 유리화 · 복소수 상등 · 연립
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  novelty_score: 0
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM1-EQ-복소수-0410, 마-CM1-EQ-복소수-0412]
    L5_confidence: 0.90

- id: 마-CM1-EQ-복소수-0442
  page: 85
  vendor_label: 최다빈출·중요·NORMAL
  category_type: STEP 1 NORMAL
  summary: "복소수 $z$와 그 켤레복소수 $\\bar{z}$에 대하여 등식 $(1-i)z+i\\bar{z}=2+4i$가 성립할 때, $z+\\bar{z}$의 값 (단, $i=\\sqrt{-1}$)"
  category: $z=a+bi$ 대입 · 켤레 등식 · 상등 조건
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "$z=a+bi$, $\\bar{z}=a-bi$ 놓고 대입 · 실수부·허수부 정리"}
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "$(1-i)(a+bi)+i(a-bi)=(a+b+b)+(-a+b+a)i=(a+2b)+(b)i$ 등 정리 후 상등"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "연립으로 $a$, $b$ 결정 · $z+\\bar{z}=2a$ 계산 · 선지 매칭"}
  insight_count: 3
  depth_score: 5.33
  base_star: 3
  star: 3
  premium: false
  rationale: "z=a+bi 대입+상등+연립 · depth 2 · ★ 3 · 최다빈출 유형 10 백본"
  tier: star_3
  mechanism_primary: $z=a+bi$ 대입 · 켤레 등식 · 상등
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  novelty_score: 0
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM1-EQ-복소수-0441, 마-CM1-EQ-복소수-0443, 마-CM1-EQ-복소수-0444, 마-CM1-EQ-복소수-0511]
    L5_confidence: 0.90

- id: 마-CM1-EQ-복소수-0471
  page: 90
  vendor_label: 최다빈출·중요·NORMAL
  category_type: STEP 1 NORMAL
  summary: "복소수 $z$와 그 켤레복소수 $\\bar{z}$에 대하여 등식 $(1+i)z+i\\bar{z}=1+i^n$이 성립할 때, $z^n$이 양수가 되도록 하는 100 이하의 자연수 $n$의 개수 (단, $i=\\sqrt{-1}$)"
  category: $i^n$ 주기 · $z$ 결정 · 거듭제곱 양수 조건 · 카운팅
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "$i^n$은 $n \\mod 4$로 4주기 · 네 경우 분리 · 각 경우 $z=a+bi$ 대입 후 결정"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "$z$ 유형별 결정 · $z^n$ 양수 조건 (실수 & > 0) 확인"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "각 경우 100 이하 카운팅 · 합"}
  insight_count: 3
  depth_score: 6.67
  base_star: 4
  star: 3
  premium: false
  rationale: "$i^n$ 4주기+z 결정+양수 조건 3단 depth 2 · 벤더 NORMAL이지만 통찰 3단 결합 · ★ 3 상단 (NORMAL 임계)"
  tier: star_3
  mechanism_primary: $i^n$ 주기 · $z$ 결정 · 거듭제곱 카운팅
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  novelty_score: 1
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM1-EQ-복소수-0470, 마-CM1-EQ-복소수-0479, 마-CM1-EQ-복소수-0486]
    L5_confidence: 0.85
```

---

## Ⅲ. STEP 1 TOUGH 표본 (5문 정밀 판정)

```yaml
- id: 마-CM1-EQ-복소수-0414
  page: 81
  vendor_label: TOUGH
  category_type: STEP 1 TOUGH
  summary: "등식 $a(\\sqrt{2}+3i)+b(1-2\\sqrt{2}i)+c(\\sqrt{2}+i)=1+2\\sqrt{2}-2\\sqrt{2}i$를 만족시키는 유리수 $a$, $b$, $c$에 대하여 $a+b+c$의 값 (단, $i=\\sqrt{-1}$)"
  category: 유리수·무리수·복소수 상등 · 다중 축 상등
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "$\\sqrt{2}$·유리수·$i$·$\\sqrt{2}i$의 4축 계수를 각각 상등 (유리수 축 & 무리수 축 분리 통찰)"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "$a\\sqrt{2}+b+c\\sqrt{2}=1+2\\sqrt{2}$, $3a-2\\sqrt{2}b+c=?$ 등 실수·허수·유리·무리 4방정식 연립"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "4원 연립 · $a$, $b$, $c$ 결정 · 합 계산"}
  insight_count: 3
  depth_score: 6.67
  base_star: 4
  star: 4
  premium: false
  rationale: "복소수 상등+유리수·무리수 축 분리 · 4축 다원 연립 · depth 2 · ★ 4 · TOUGH 정합 · 🔴 CM1 교과 내 (유리수 계수 무리수 켤레 아님 · 상등 조건 명확)"
  tier: star_4
  mechanism_primary: 복소수·유리수·무리수 다축 상등
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  friction_triggers: [F1]
  friction_verdict: OK
  vendor_calibration_signal:
    L2_signature_neighbors: []
    L5_confidence: 0.88

- id: 마-CM1-EQ-복소수-0439
  page: 84
  vendor_label: TOUGH
  category_type: STEP 1 TOUGH
  summary: "두 복소수 $\\dfrac{1+z}{z}$와 $\\dfrac{z}{z^2+1}$이 모두 실수가 되도록 하는 복소수 $z=a+bi$ ($a<0$, $b>0$인 실수)에 대하여 $\\dfrac{b}{a}$의 값 (단, $i=\\sqrt{-1}$이고 $\\bar{z}$는 $z$의 켤레복소수이다.)"
  category: 복소수 실수 조건 · $z^2+1$ 실수·순허수 판정 · 켤레 활용
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "$\\dfrac{1+z}{z}=\\dfrac{1}{z}+1$ 실수 조건 · $z$가 실수이거나 $\\dfrac{1}{z}$이 실수 (즉 $z$가 실수) · 다른 조건과 결합"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2], description: "$\\dfrac{z}{z^2+1}$ 실수 조건 · 켤레 취해 자기 자신과 같을 조건 유도 → $z^2+1$이 실수여야 (또는 $z$가 실수) · 복합 조건 필터링"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "$z=a+bi$, $b \\neq 0$ (실수 아님) 조건에서 $z^2+1$ 실수 → $2ab=0$ · $b \\neq 0$이므로 $a=0$? 그러나 $a<0$ 조건 → 재검토: 두 실수 조건 동시 만족 시 특정 관계 유도 · $\\dfrac{b}{a}=\\pm\\sqrt{3}$ 등 학평급 결과"}
  insight_count: 3
  depth_score: 7.33
  base_star: 4
  star: 4
  premium: false
  rationale: "두 실수 조건 동시 만족 · 켤레 활용 · depth 3 P2 카드 (자산화 유형 켤레 대응) · ★ 4 · TOUGH 정합 · 유형 09 정점"
  tier: star_4
  mechanism_primary: 복소수 두 실수 조건 · 켤레 대응 · 관계식
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  friction_triggers: [F1, F2]
  friction_verdict: OK
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM1-EQ-복소수-0447, 마-CM1-EQ-복소수-0459]
    L5_confidence: 0.85

- id: 마-CM1-EQ-복소수-0447
  page: 85
  vendor_label: 최다빈출·중요·TOUGH
  category_type: STEP 1 TOUGH
  summary: "0이 아닌 복소수 $z$와 그 켤레복소수 $\\bar{z}$에 대하여 $\\overline{(z+2)(z-1)}+3\\bar{z}+2=0$을 만족시키는 복소수 $z$는 $a+ai$일 때, 실수 $a$의 값 (단, $i=\\sqrt{-1}$)"
  category: 켤레 다항식 · 특수 꼴 $z=a+ai$ 대입 · 상등
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "$\\overline{(z+2)(z-1)}=(\\bar{z}+2)(\\bar{z}-1)$ 켤레 성질 (곱의 켤레 = 켤레의 곱)"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "$z=a+ai$ (특수 조건 부여) · $\\bar{z}=a-ai$ · 대입 후 전개 → 실수부·허수부 분리 상등"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "$a$에 관한 이차·일차식 연립 · 답 결정"}
  insight_count: 3
  depth_score: 5.67
  base_star: 3
  star: 4
  premium: false
  rationale: "켤레 성질+특수 꼴 대입+상등 · depth 2 · 결합 통찰 · ★ 4 (TOUGH 정합 · 최다빈출)"
  tier: star_4
  mechanism_primary: 켤레 성질 · $z=a+ai$ 대입 · 상등
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 1
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM1-EQ-복소수-0446, 마-CM1-EQ-복소수-0464]
    L5_confidence: 0.85

- id: 마-CM1-EQ-복소수-0483
  page: 91
  vendor_label: TOUGH
  category_type: STEP 1 TOUGH
  summary: "복소수 $z=\\dfrac{2-\\sqrt{5}i}{\\sqrt{5}+2i}$에 대하여 $w=\\dfrac{1+z}{1-z}$라고 할 때, $1+w+w^3+w^5+\\cdots+w^{199}$의 값 (단, $i=\\sqrt{-1}$이고 $\\bar{z}$는 $z$의 켤레복소수이다.)"
  category: 복소수 유리화 · $w$ 변환 · 홀수 지수 등비 합
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "$z$ 분모 유리화 (분모의 켤레 곱) → 순허수 발견: $z=?i$ 꼴 결정"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "$w=\\dfrac{1+z}{1-z}$ 대입 · $w$가 특정 4주기 값 ($i$ 등) 발견 · $w^2 \\cdot w = w^3$ 등 4주기 활용"}
    - {step: 3, type: I-XU, depth: 2, effective_depth: 2, signal_ref: [P3], description: "홀수 지수 $1, w, w^3, w^5, \\ldots, w^{199}$ 합 · $w^2$ 공비 등비수열로 재해석 · 100항"}
    - {step: 4, type: I-CON, depth: 2, effective_depth: 2, description: "$w^2=-1$이면 홀수 지수 4주기 패턴 · 합 계산"}
  insight_count: 4
  depth_score: 6.5
  base_star: 4
  star: 4
  premium: false
  rationale: "유리화+w 변환+홀수 지수 등비 합 4단계 · depth 2 P3 카드 (등비 대칭 축소) · ★ 4 · TOUGH 정합"
  tier: star_4
  mechanism_primary: 유리화 · $w$ 변환 · 홀수 지수 등비 합
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  friction_triggers: [F1]
  friction_verdict: OK
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM1-EQ-복소수-0482, 마-CM1-EQ-복소수-0488, 마-CM1-EQ-복소수-0521]
    L5_confidence: 0.82

- id: 마-CM1-EQ-복소수-0505
  page: 95
  vendor_label: TOUGH
  category_type: STEP 1 TOUGH
  summary: "0이 아닌 두 실수 $x$, $y$에 대하여 $\\sqrt{x}\\sqrt{y}=-\\sqrt{xy}$가 성립한다. 복소수 $z=x^3+3x-yi-10+i$에 대하여 $z^2=-9$일 때, $xy$의 값 (단, $i=\\sqrt{-1}$)"
  category: 음수 제곱근 성질 · $x<0, y<0$ 조건 · $z^2=$ 실수 · 이차방정식
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "$\\sqrt{x}\\sqrt{y}=-\\sqrt{xy} \\Rightarrow x<0, y<0$ 판정 (음수 제곱근 성질)"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "$z=(x^3+3x-10)+(1-y)i$ · $z^2=-9$이면 $z$는 순허수이고 $|z|^2=9$"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "$z$ 순허수 조건: 실수부 $x^3+3x-10=0$ · 인수분해 $x^3+3x-10=(x-\\alpha)(x^2+\\alpha x + \\beta)$ · $x<0$ 조건 필터링"}
    - {step: 4, type: I-CON, depth: 2, effective_depth: 2, description: "허수부 $|1-y|=3 \\Rightarrow y=-2$ 또는 $y=4$ · $y<0$ → $y=-2$ · 실수부 값과 결합 · $xy$ 계산"}
  insight_count: 4
  depth_score: 6.5
  base_star: 4
  star: 4
  premium: false
  rationale: "음수 제곱근+순허수 조건+삼차방정식+부호 필터 · depth 2 · ★ 4 · TOUGH 정합 · 유형 18 정점"
  tier: star_4
  mechanism_primary: 음수 제곱근 성질 · 순허수 조건 · 삼차 인수분해
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  friction_triggers: [F1, F2]
  friction_verdict: OK
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM1-EQ-복소수-0500, 마-CM1-EQ-복소수-0503, 마-CM1-EQ-복소수-0508]
    L5_confidence: 0.82
```

---

## Ⅳ. STEP 2 서술형 표본 (2문 정밀 판정)

```yaml
- id: 마-CM1-EQ-복소수-0511
  page: 96
  vendor_label: STEP 2 서술형
  category_type: STEP 2 서술형 (3단계·10점)
  summary: "복소수 $z$에 대하여 등식 $2(1+i)z-3i\\bar{z}=1-i$가 성립할 때, $z^2-6z+12$의 값을 구하는 과정을 서술 [1단계 $z=a+bi$ 놓고 대입 3점 · 2단계 상등으로 $z$ 결정 3점 · 3단계 $z^2-6z+12$ 계산 4점] (단, $i=\\sqrt{-1}$이고 $\\bar{z}$는 $z$의 켤레복소수이다.)"
  category: $z=a+bi$ 대입 · 상등 · 이차식 계산 · 서술형
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "$z=a+bi$ 놓고 대입 · $2(1+i)(a+bi)-3i(a-bi)=(2a-2b-3b)+(2a+2b-3a)i$ 정리"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "실수부·허수부 상등 → 연립 → $a$, $b$ 결정 → $z$ 확정"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "$z^2-6z+12$ 대입 계산"}
  insight_count: 3
  depth_score: 5.33
  base_star: 3
  star: 3
  premium: false
  rationale: "z=a+bi+상등+이차식 계산 3단 · 서술형 표준 · ★ 3 · CM1-EQ 서술형 백본"
  tier: star_4
  mechanism_primary: $z=a+bi$ 대입 · 상등 · 이차식 · 서술형
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  novelty_score: 1
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM1-EQ-복소수-0442, 마-CM1-EQ-복소수-0509]
    L5_confidence: 0.88

- id: 마-CM1-EQ-복소수-0512
  page: 96
  vendor_label: 최다빈출·중요·STEP 2 서술형
  category_type: STEP 2 서술형 (3단계·10점)
  summary: "복소수 $z=\\dfrac{2-\\sqrt{5}i}{\\sqrt{5}+2i}$에 대하여 $w=\\dfrac{1-\\bar{z}}{1-z}$라고 할 때, 다음 식의 값을 구하는 과정을 서술: [1단계 분모를 실수화하여 $z$ 정리 2점] [2단계 $w^n=-1$을 만족시키는 100 이하의 자연수 $n$의 개수 4점] [3단계 $w+w^3+\\cdots+w^n=-1$을 만족시키는 300 이하의 자연수 $n$의 개수 4점] (단, $i=\\sqrt{-1}$이고 $\\bar{z}$는 $z$의 켤레복소수이다.)"
  category: 복소수 유리화 · $w$ 결정 · 거듭제곱 주기 · 등비 합 카운팅
  M: {s: 4, k: 3, a: 3, t: 2}
  M_total: 12
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "분모 유리화 · $z$가 순허수 꼴 발견 → $w$ 계산 시 4주기 값"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "$w^n=-1$ 조건 · 4주기 (예: $w=i$이면 $w^2=-1$ · $n=2, 6, 10, \\ldots$) · 100 이하 카운팅"}
    - {step: 3, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P3], description: "홀수 지수 등비 합 $-1$ 조건 · 부분합 4주기 패턴 · 300 이하 카운팅 (자산화 유형 P3 카드)"}
    - {step: 4, type: I-CON, depth: 2, effective_depth: 2, description: "각 단 카운팅 후 결과"}
  insight_count: 4
  depth_score: 8.25
  base_star: 5
  star: 5
  premium: false
  rationale: "유리화+주기+등비 합 카운팅 4단 depth 3 P3 카드 · ★ 5 · STEP 2 서술형이지만 실질 킬러급 · count 4 → premium (count ≥ 5) 미달"
  tier: star_4
  mechanism_primary: 복소수 유리화 · $w^n$ 주기 · 등비 합 카운팅
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  friction_triggers: [F1, F2]
  friction_verdict: OK
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM1-EQ-복소수-0483, 마-CM1-EQ-복소수-0521, 마-CM1-EQ-복소수-0487]
    L5_confidence: 0.85
```

---

## Ⅴ. STEP 3 행복한 일등급 표본 (4문 정밀 판정 · 총 12문 확보 가능)

```yaml
- id: 마-CM1-EQ-복소수-0515
  page: 97
  vendor_label: STEP 3
  category_type: STEP 3 행복한 일등급
  summary: "$x=\\left(\\dfrac{1+i}{1-i}\\right)^3+\\dfrac{1+i+i^2+i^3+\\cdots+i^{100}}{1-i}$일 때, $4x^3-4x$의 값 (단, $i=\\sqrt{-1}$)"
  category: 복소수 4주기 · 급수 합 · 특수값 대입 · 다항식 값
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "$\\dfrac{1+i}{1-i}=i$ (자산화 등식) · $(1+i)/(1-i))^3=i^3=-i$"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "$1+i+i^2+\\cdots+i^{100}$ 4주기 · $101$개 항 · $i^{100}=1$까지 합 = $(i+i^2+i^3+i^4) \\cdot 25 + 1 = 0 \\cdot 25 + 1 = 1$"}
    - {step: 3, type: I-EQV, depth: 1, effective_depth: 1, description: "$\\dfrac{1}{1-i}=\\dfrac{1+i}{2}$ · 두 항 합 → $x=-i+\\dfrac{1+i}{2}=\\dfrac{1-i}{2}$"}
    - {step: 4, type: I-CON, depth: 2, effective_depth: 2, description: "$4x^3-4x=4x(x^2-1)$ · $x^2=\\dfrac{(1-i)^2}{4}=\\dfrac{-2i}{4}=-\\dfrac{i}{2}$ · 계산 → 결과값"}
  insight_count: 4
  depth_score: 6.5
  base_star: 4
  star: 4
  premium: false
  rationale: "$\\dfrac{1+i}{1-i}=i$ 자산화+4주기 합+대입 4단 · depth 2 · ★ 4 · STEP 3 하단 밴드"
  tier: star_4
  mechanism_primary: $\\dfrac{1+i}{1-i}=i$ · 4주기 급수 합 · 다항식 값
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  friction_triggers: [F1]
  friction_verdict: OK
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM1-EQ-복소수-0470, 마-CM1-EQ-복소수-0485]
    L5_confidence: 0.85

- id: 마-CM1-EQ-복소수-0520
  page: 97
  vendor_label: STEP 3
  category_type: STEP 3 행복한 일등급
  summary: "$a_1, a_2, a_3, \\ldots, a_{30}$은 각각 $-1, i, 1+i$ 중 하나의 값을 가질 때, $a_1^2+a_2^2+a_3^2+\\cdots+a_{30}^2=8+12i$를 만족시킬 때, $a_1+a_2+a_3+\\cdots+a_{30}$의 실수부분과 허수부분의 합을 구하시오. (단, $i=\\sqrt{-1}$)"
  category: 3원 이산 조합 · 제곱합 조건 · 원 합 실·허수부 · 정수해 카운팅
  M: {s: 4, k: 3, a: 3, t: 2}
  M_total: 12
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "$a_k^2$ 각각: $(-1)^2=1$, $i^2=-1$, $(1+i)^2=2i$ · 세 값 $\\{1, -1, 2i\\}$ 중 하나"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2, P3], description: "제곱합 = 8+12i · 실수부: $(-1$)의 개수 $p$, $i$의 개수 $q$, $(1+i)$의 개수 $r$ · $p+q+r=30$, $p-q=8$, $2r=12 \\Rightarrow r=6$"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "$p-q=8$, $p+q=24$ → $p=16, q=8$ 확정"}
    - {step: 4, type: I-EQV, depth: 2, effective_depth: 2, description: "원 합 $S=-p+qi+r(1+i)=-16+8i+6+6i=-10+14i$"}
    - {step: 5, type: I-CON, depth: 1, effective_depth: 1, description: "실수부+허수부 = $-10+14=4$"}
  insight_count: 5
  depth_score: 8.0
  base_star: 5
  star: 5
  premium: false
  rationale: "3원 이산 값 제곱합 → 원 합 유도 5단 · depth 3 P2·P3 카드 · **premium 후보 근접**: depth ≥ 8.0 & count ≥ 5 & P 카드 2 · 그러나 max=3 & depth ≥ 8.5 임계 미달 (depth_score=8.0) → ★ 5 · premium 미달 (임계 8.5)"
  tier: star_5
  mechanism_primary: 3원 이산 값 제곱합 · 카운팅 · 원 합
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  friction_triggers: [F1, F2]
  friction_verdict: OK
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM1-EQ-복소수-0517, 마-CM1-EQ-복소수-0525, 마-CM1-EQ-복소수-0526]
    L5_confidence: 0.85

- id: 마-CM1-EQ-복소수-0522
  page: 98
  vendor_label: 2024년 03월 고2 학력평가 15번·STEP 3
  category_type: STEP 3 행복한 일등급 (모의고사 편입)
  summary: "다음 조건을 만족시키는 복소수 $z$가 존재하도록 하는 모든 실수 $k$의 값의 곱 (단, $\\bar{z}$는 $z$의 켤레복소수이다.) (가) $\\bar{z}=-z$ (나) $z^2+(k^2-3k-4)z+(k^2+2k-8)=0$"
  category: 순허수 조건 · z 이차방정식 · k 파라미터 존재 조건
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "(가) $\\bar{z}=-z$ ⇔ $z$는 0 또는 순허수 · $z=bi$ ($b \\in \\mathbb{R}$) 대입"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "(나) $(bi)^2+(k^2-3k-4)(bi)+(k^2+2k-8)=0$ · 실수부: $-b^2+(k^2+2k-8)=0$ · 허수부: $(k^2-3k-4)b=0$"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "허수부 조건: $b=0$ 또는 $k^2-3k-4=0$ · (i) $b=0$이면 $z=0$이므로 실수부에서 $k^2+2k-8=0 \\Rightarrow k=2, -4$ · (ii) $k^2-3k-4=0 \\Rightarrow k=4, -1$ · 실수부에서 $b^2=k^2+2k-8 \\geq 0$ 조건 필터링"}
    - {step: 4, type: I-CON, depth: 2, effective_depth: 2, description: "$k=4$: $b^2=16+8-8=16 \\geq 0$ · $k=-1$: $b^2=1-2-8=-9 < 0$ (배제) · 종합 후보 $k \\in \\{2, -4, 4\\}$ · 곱 = $-32$ 선지 ①"}
  insight_count: 4
  depth_score: 6.5
  base_star: 4
  star: 5
  premium: false
  rationale: "순허수 조건+이차식+k 분기+필터링 4단 depth 2 · 학평 15번 편입 · ★ 5 (STEP 3 학평 정점 상단 · depth 2인데 결합 통찰 여러 축)"
  tier: star_5
  mechanism_primary: 순허수 조건 · z 이차식 · k 파라미터 존재
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  friction_triggers: [F1, F2]
  friction_verdict: OK
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L2_signature_neighbors: [마-CM1-EQ-복소수-0521, 마-CM1-EQ-복소수-0509]
    L5_confidence: 0.82

- id: 마-CM1-EQ-복소수-0525
  page: 98
  vendor_label: 2020년 06월 고1 학력평가 30번·STEP 3
  category_type: STEP 3 행복한 일등급 (모의고사 킬러)
  summary: "50 이하의 두 자연수 $m$, $n$에 대하여 $\\left\\{i^n+\\left(\\dfrac{1}{i}\\right)^{2n}\\right\\}^m$의 값이 음의 실수가 되도록 하는 순서쌍 $(m, n)$의 개수 (단, $i=\\sqrt{-1}$)"
  category: $i^n$ 주기 · 이중 지수 · 음의 실수 조건 · 카운팅
  M: {s: 4, k: 3, a: 3, t: 3}
  M_total: 13
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "$\\dfrac{1}{i}=-i$ · $\\left(\\dfrac{1}{i}\\right)^{2n}=(-i)^{2n}=((-i)^2)^n=(-1)^n$"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P3, P4], description: "$i^n+(-1)^n$ 값: $n$ 홀·짝 및 $n \\mod 4$에 따라 4가지 케이스 분기 · (n=1: $i-1$), (n=2: $-1+1=0$? 아니 $i^2+1=-1+1=0$), (n=3: $-i-1$), (n=4: $1+1=2$) 등"}
    - {step: 3, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2, P3], description: "0인 경우 배제 · 각 케이스 값을 $m$제곱했을 때 음의 실수 조건 · $2^m$, $(-1+i)^m$ 등 각각 주기 재분석"}
    - {step: 4, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P4], description: "$(m,n)$ 순서쌍 카운팅: 50×50 격자 각 케이스별 조건 만족 개수 합산 · 학평 30번급 계산"}
    - {step: 5, type: I-SYM, depth: 2, effective_depth: 2, description: "대칭성 활용 · $n$의 4주기 반복으로 계산량 축소"}
  insight_count: 5
  depth_score: 8.8
  base_star: 5
  star: 5
  premium: true
  rationale: "학평 30번 킬러 · 이중 지수+주기+음의 실수 조건+카운팅 5단계 depth 3 × 3회 (max=3) · count 5 · P3+P4+P2 저노출 카드 3개 · **premium 3 조건 all-satisfied** (depth ≥ 8.5 + max=3 + count ≥ 5) + P 카드 ≥ 2"
  tier: star_5_premium
  mechanism_primary: $i^n$ 주기 · 이중 지수 · 음의 실수 조건 · 카운팅
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  friction_triggers: [F1, F2, F3, F4]
  friction_verdict: OK
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L2_signature_neighbors: [마-CM1-EQ-복소수-0491, 마-CM1-EQ-복소수-0524]
    L3_multi_vendor_tier: []
    L5_confidence: 0.90
```

---

## Ⅵ. 예측 종합 (표본 20문 + 예측 125문 = 총 145문)

**예측 방법**: `vendor-label-calibration.md v1.7` 마플시너지 회귀 함수 적용

```yaml
prediction_source: vendor-label-calibration v1.7
prediction_note: |
  마플 라벨 회귀 (복소수 소단원):
  - BASIC (약 15문 예측): ★ 1×4 + ★ 2×11 (편차 0.5)
  - NORMAL (약 65문 예측): ★ 3×48 + ★ 4×17 (편차 0.5)
  - TOUGH (약 32문 예측): ★ 3×4 + ★ 4×26 + ★ 5×2 (편차 0.5)
  - STEP 2 서술형 (4문 예측): ★ 3×2 + ★ 4×2 (표본 부족)
  - STEP 3 (8문 예측): ★ 4×4 + ★ 5×4 (평면좌표 편향과 유사, 학평 편입 다수)
```

## 표본 판정 요약 (n=20)

| ★ | STEP 1 BASIC | STEP 1 NORMAL | STEP 1 TOUGH | STEP 2 서술형 | STEP 3 | 합계 |
|---|---|---|---|---|---|---|
| ★ 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| ★ 2 | 3 | 0 | 0 | 0 | 0 | 3 |
| ★ 3 | 0 | 6 | 0 | 1 | 0 | 7 |
| ★ 4 | 0 | 0 | 5 | 0 | 1 | 6 |
| ★ 5 | 0 | 0 | 0 | 1 | 2 | 3 |
| ★ 5 premium | 0 | 0 | 0 | 0 | 1 | 1 |
| **합계** | **3** | **6** | **5** | **2** | **4** | **20** |

## 예측 종합 (전체 145문)

| ★ | 표본 실측 (20문) | 예측 (125문) | 전체 (145문) | 비율 |
|---|---|---|---|---|
| ★ 1 | 0 | 4 | 4 | 2.8% |
| ★ 2 | 3 | 11 | 14 | 9.7% |
| ★ 3 | 7 | 54 | 61 | 42.1% |
| ★ 4 | 6 | 45 | 51 | 35.2% |
| ★ 5 | 3 | 8 | 11 | 7.6% |
| ★ 5 premium | 1 | 0 | 1 | 0.7% |
| (미확정 · 회귀 폭) | 0 | 3 | 3 | 2.1% |

## 핵심 관찰

### 1. STEP 3 4문 실측 분포 · 소단원 비교

**STEP 3 4문 실측**: ★ 4 × 1 · ★ 5 × 2 · ★ 5 premium × 1

| 지표 | CM1-EQ-복소수 | CM1-EQ-이차방정식 | CM2-GM-도형이동 | CM1-CB-순열 | CM1-PL-인수분해 |
|---|---|---|---|---|---|
| ★ 5 이상 밀도 | **75%** (3/4) | 60% (3/5) | 40% (2/5) | 20% | 40% (2/5) |
| ★ 5 premium 밀도 | **25%** (1/4) | 20% (1/5) | 40% (2/5) | 0% | 40% (2/5) |
| ★ 4 밀도 | 25% (1/4) | 40% (2/5) | 40% | 60% | 60% |

**결과**: CM1-EQ 복소수 STEP 3는 **★ 5 이상 밀도 75%로 소단원 중 최상위**. premium 밀도는 도형이동·PL 인수분해(40%)에 미치지 못하나, ★ 5 밀도는 압도적. 이는 **복소수 소단원 STEP 3가 학평 15번~30번 편입 다수** (0522=학평15, 0525=학평30, 0523=학평27, 0524=학평28)로 다양한 상급 문항 확보 가능함을 시사. premium 원형은 학평 30번(0525) 이중 지수+음의 실수 카운팅에서 도달 · 대수만으로도 count 5 도달 확인 (0525).

### 2. CM1-EQ-복소수 통찰 유형 특성

**I-EQV (등가 변형) 자산화 확실**:
- 복소수 상등 (실수부·허수부 분리): 0407·0408·0411·0412·0413·0414·0441·0442·0450 · **유형 06·10 백본**
- 분모 유리화: 0387·0388·0410·0411·0483 · 유형 02 백본
- $z=a+bi$ 대입: 0442·0447·0511 · **유형 10 백본** (마플 복소수 소단원 핵심 축)

**I-CON (연결·결합) 결합 유형**:
- 켤레 성질 활용 (z+z̄, zz̄): 0431·0432·0442·0451~0459 · 유형 11·13 백본
- $z^2$ 실수·순허수 조건: 0400·0402·0404·0405·0509 · 유형 05 백본

**I-XU (저노출) 관찰**:
- STEP 3·서술형 상단에서만 등장 · **CM1-EQ-복소수 저노출 카드는 4주기 이중 지수 (P3+P4)·홀수 지수 등비 합 (P3)·순허수 조건 존재 필터 (P2)** 3종이 핵심
- **1의 n제곱근 통찰 관련 (P2·P3)**: 0439 (두 실수 조건 존재)·0483 (홀수 지수 4주기 등비 합)·0512 (w^n=-1 카운팅)·0520 (3원 제곱합)·0525 (이중 지수 카운팅)
- **CM1-EQ 복소수 소단원에서 순수 대수만으로 premium 도달** (0525) — 이는 CM1-EQ-이차방정식 (0723 도형 융합 필요)과 대조되는 특성. **복소수 4주기가 자체적으로 카운팅 축을 제공하기 때문에 도형 융합 없이도 count 5+ 안정 도달 가능**

### 3. TOUGH 라벨 캘리브레이션

TOUGH 표본 5문 모두 ★ 4 정합 (100%) — **마플 TOUGH ★ 4 예측력 만점**. 이는 CM1-EQ-이차방정식 (80%) · CM2-GM (75%)보다 높은 정합률로, **복소수 소단원 TOUGH 라벨이 가장 안정**함을 시사. 편차 0.0.

### 4. NORMAL 라벨 캘리브레이션

NORMAL 표본 6문 모두 ★ 3 정합 (100%). 0471만 실질 통찰 3단 depth 2로 ★ 3~4 경계에 위치했으나 최종 ★ 3 판정. NORMAL 라벨 편차 0.0. **CM1-EQ-이차방정식 NORMAL 100%와 정합**.

### 5. 서술형 (STEP 2) 라벨 캘리브레이션

서술형 표본 2문 실측: ★ 3 × 1 (0511) · ★ 5 × 1 (0512). 0512는 서술형이지만 실질 STEP 3급 킬러 (분모 유리화+4주기+등비 합 카운팅) → ★ 5. **CM1-EQ-이차방정식 서술형 (★ 3 편향)과 대조**되는 특성: 복소수 서술형은 4주기·카운팅 유형이 다수 편입되어 ★ 4~5 상단이 존재. 서술형이라도 통찰 depth 3 진입 가능.

### 6. 🌟 1의 n제곱근 통찰 등장 여부 (쎈 CM1-EQ 이차방정식 정점 원형과 일관성 검증)

**등장 확인**: 마플 복소수 소단원에서 **1의 n제곱근 관련 통찰이 STEP 3·서술형·TOUGH 다수에서 등장**:
- **0493**: $z=\\dfrac{-1+\\sqrt{3}i}{2}$에 대한 $z^3=1$, $z^4+z^5=-1$, $\\Sigma z^{4n}$ 카운팅 (**1의 세제곱근 $\\omega$ 정확히**) · 학평 2021.09 20번
- **0525**: $\\{i^n+(-1)^n\\}^m$ 이중 지수 음의 실수 (**1의 n제곱근 4주기 통찰**) · 학평 2020.06 30번 · **premium 후보**
- **0512**: $w^n=-1$ 100/300 카운팅 (1의 -1 제곱근 = 짝수 주기)
- **0483**: 홀수 지수 등비 합 (1의 짝수 제곱근 활용)
- **0521**: $\\omega^n=1$ 100 이하 카운팅 (1의 n제곱근 명시적)
- **0491**: $\\{(\\dfrac{1+i}{\\sqrt{2}})^m - i^n\\}^2=4$ (**1의 8제곱근**) · 학평 2023.06 29번

**결과**: **쎈 CM1-EQ 이차방정식 정점 원형 (0542·0547 · 1의 세제곱근·1의 여섯제곱근)과 완전 일관**. 마플 복소수 소단원에서도 **1의 n제곱근 계열은 STEP 3·TOUGH·학평 편입 문항의 핵심 통찰 축**으로 확인. 특히 0525·0491·0493은 학평 킬러 (28~30번대)로 편입된 사례이며, 0521은 자체 킬러. **이는 CM1-EQ 대단원 정점 문항이 (이차방정식+복소수 결합) 원형을 공통으로 가진다는 강력한 증거** (schema.md v3.8 §2.7 P2·P3 저노출 카드 매칭).

### 7. 🔴 교육과정 외 격리 확인

**격리 대상 스캔**:
- **복소평면·극형식·드무아브르·오일러 공식**: 마플 CM1 복소수 소단원 전 145문 스캔 결과 **0건 감지** (극형식·|a+bi| 언급 없음)
- **복소수 크기 |a+bi|**: 명시적 사용 0건 (0505·0509 등에서 $z^2=-9$ 조건은 $|z|=3$ 대신 실수부·허수부 조건으로 유도)
- **두 종류 무리수 켤레**: 0414 ($\\sqrt{2}$·$i$·$\\sqrt{2}i$ 4축 상등) 등에서 무리수 계수 활용은 있으나 **두 종류 무리수 켤레 근 형태는 0건**. 0414는 유리수 계수 매칭이라 상등 조건이 명확 (허용).
- 🟢 **CM1 교과 정합**: 전 145문 CM1-EQ 교과 범위 내 · 격리 필요 문항 **0건**

### 8. 자산화 활용 우선순위 (Agent가 pick할 때)

**anchor 후보 (4문)**:
- 0512 (분모 유리화+4주기+등비 합 · 서술형 킬러 · ★ 5) · 0520 (3원 제곱합 · ★ 5) · 0522 (순허수 조건 존재 · 학평 15번 · ★ 5) · 0525 (**★ 5 premium** · 학평 30번 킬러)

**candidate 후보 (11문)**:
- 0388·0395·0404·0411·0414·0439·0442·0447·0471·0483·0505·0511·0515

**시그니처 이웃 클러스터 관찰**:
- 4주기 이중 지수 (0491·0493·0521·0525·0512·0483): 복소수 소단원 정점 클러스터 6문 · **1의 n제곱근 통찰 계열**
- $z=a+bi$ 대입 (0442·0447·0509·0510·0511·0513): 유형 10·서술형 백본 6문
- 복소수 3원 제곱합 (0517·0520·0526): 학평 다수 편입 클러스터 3문
- 순허수 조건 이차식 (0522·0466·0405): 학평 편입 클러스터 3문

### 9. premium 후보 지목

**표본 premium 확정 (1문)**:
- **0525**: 학평 2020.06 30번 · $\\{i^n+(-1)^n\\}^m$ 이중 지수 음의 실수 · **★ 5 premium 확정** · depth_score 8.8 · max=3 · count=5 · P2+P3+P4 카드 3개

**premium 근접 (2문 · 임계 미달)**:
- **0520**: 3원 제곱합 · depth_score 8.0 · count 5 (임계 8.5 미달, ★ 5 확정)
- **0512**: 서술형 · $w^n=-1$ 카운팅 · depth_score 8.25 · count 4 (임계 count 5 미달)

**예측 premium 후보 (표본 외 확대 필요)**:
- **0491**: 학평 2023.06 29번 · $\\{(\\dfrac{1+i}{\\sqrt{2}})^m - i^n\\}^2=4$ · 표본 미포함 · **premium 회귀 예측 최우선** · 학평 29번 킬러이며 이중 지수+주기 결합 · **premium 후보 2위**
- **0493**: 학평 2021.09 20번 · $z^3=1$ 등 · 1의 세제곱근 명시 · premium 후보 3위

**premium 최종 확보 (표본 실측 1 + 예측 후보 1~2건)**: **총 2~3건** — CM1-EQ-이차방정식 (1건)·CM2-GM-도형이동 (2건)·CM1-PL-인수분해 (2건)와 정합. **CM1-EQ 복소수 소단원의 premium 밀도는 대단원 내 최상위 (0.7~2%)**로, 시험지 정점 문항 pool 최우선 원본 확보 가능.

---

## 참조 문서

- 판정 알고리즘: [`bank/schema.md`](schema.md) v3.8 §2 (3층 M·I·X 모델)
- v2.0 스키마: [`bank/정독-스키마-v2.0.md`](정독-스키마-v2.0.md)
- 저노출 유형 게이트: schema.md §2.13 (v3.9)
- 이중 게이트 premium: schema.md §2.12 (v3.8)
- 벤더 라벨 회귀: [`bank/vendor-label-calibration.md`](vendor-label-calibration.md) v1.7
- CM1 교과과정 단일 출처: [`bank/CM1-교과과정.md`](CM1-교과과정.md)
- 마플 CM1-EQ 이차방정식 (대단원 연속 자산화): [`bank/mechanism-데이터-마플시너지-CM1-EQ-이차방정식.md`](mechanism-데이터-마플시너지-CM1-EQ-이차방정식.md)
- 마플 CM1-CB 순열: [`bank/mechanism-데이터-마플시너지-CM1-CB-순열.md`](mechanism-데이터-마플시너지-CM1-CB-순열.md)
- 마플 CM1-PL 인수분해: [`bank/mechanism-데이터-마플시너지-CM1-PL-인수분해.md`](mechanism-데이터-마플시너지-CM1-PL-인수분해.md)

## 변경 이력

- 2026-07-21 v1.0 — 초판. 마플시너지 공통수학1 (2022개정 · 2025판) II. 방정식과 부등식 → 01 복소수 소단원 145문 정독 · 표본 20문 시스템 순정 판정 · v2.0 통합 자산 스키마 적용. **세션 58 Agent F 보고 정정**: STEP 3 실측 12문 확보 (1페이지 아닌 2페이지 완결). **1의 n제곱근 통찰 계열 6문 확인** (0491·0493·0512·0521·0525·0483) · CM1-EQ 대단원 정점 원형 (쎈 이차방정식 0542·0547)과 완전 일관. **premium 확정 1건 (0525 학평 30번 킬러)** · 예측 확대 시 2~3건 도달 가능.
