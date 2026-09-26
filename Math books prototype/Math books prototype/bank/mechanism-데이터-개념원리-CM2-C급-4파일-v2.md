---
name: mechanism-데이터-개념원리-CM2-C급-4파일-v2
description: 개념원리 CM2 C급 4파일 (원·이동·ST·FN) v2.0 재정독 · 세션 62 Flywheel · 4파일 v1 star_3 단일 라벨의 실체 star_1~4 분산 층화 판정 · v1.11 vendor 예외 매트릭스 편입 · 세션 62 CM2-v2 파일 확장판
metadata:
  type: reference
  version: v2.0
  established: 2026-07-21
  source: 개념원리 공통수학2 (2022개정)
  publisher: 개념원리
  section: 원의 방정식 · 도형의 이동 · 집합과 명제 · 함수
  unit_code: [CM2-GM, CM2-ST, CM2-FN]
  citation_note: 개념원리 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약 · 시그니처 3원소만 · 유사도 0.30~0.85)
  extract_range: "4파일 × 각 10문 층화 표본 (대표예제·유제·연습 STEP1·STEP2·실력UP)"
  pages: "66~118, 120~203, 206~246"
  total_problems: 479  # 원 100 + 이동 70 + ST 193 + FN 116
  sample_problems: 40  # 각 파일 10문 × 4
  predicted_problems: 439
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트 + 정독-스키마 v2.0
  parent_pilot: pilot-개념원리-CM2-GM-평면좌표-재판정 (45% 정합률 · 관대 편향)
  parent_pilot_2: vendor-label-calibration v1.11 (개념원리 CM2 B급 · 5종 라벨 회귀)
  parent_pilot_3: mechanism-데이터-개념원리-CM2-v2 (세션 62 · CM2 8소단원 25문 표본 28% 정합)
  prior_v1_files:
    - bank/mechanism-데이터-개념원리-CM2-GM-원.md (100문 · 전문항 star_3 단일)
    - bank/mechanism-데이터-개념원리-CM2-GM-이동.md (70문 · 전문항 star_3 단일)
    - bank/mechanism-데이터-개념원리-CM2-ST.md (193문 · 전문항 star_3 단일)
    - bank/mechanism-데이터-개념원리-CM2-FN.md (116문 · 전문항 star_3 단일)
  regression_baseline: vendor-label-calibration v1.11 개념원리 회귀 (대표예제→star_2~3 · 유제→star_3 · 연습 STEP 1→star_3 · 연습 STEP 2→star_4 · 실력UP·수능형→star_4)
---

# 개념원리 CM2 C급 4파일 (원·이동·ST·FN) — v2.0 재정독 데이터

## 서문 · 목적

세션 62 Flywheel 후속 작업. CM2-v2 (25문 표본) 실측 결과 **정합률 28%** (CM1 52% 대비 -24%p 악화) 원인이 원·이동·ST·FN **4파일 v1의 star_3 단일 라벨 관대 편향**임이 확인됨. 이 4파일을 각 10문씩 층화 재정독하여 실체 star_1~4 분산을 밝혀내고 vendor 회귀 매트릭스 v1.11 확장 근거를 확보한다.

**핵심 관찰 (v1 파일 tier 통계)**:
- 4파일 **479문 전체가 star_3 단일** (편차 0) · 실제 문항 난이도 편차와 극단적 괴리
- ST 193문 · FN 116문에서 절대부등식·합성역함수 등 star_4 통찰형 다수 매몰

**표본 배분** (총 40문 · 각 파일 10문):

| 파일 | 표본 | 대표예제 | 유제 | 연습_step1 | 연습_step2/실력up |
|---|---:|---:|---:|---:|---:|
| CM2-GM-원 | 10 | 3 | 3 | 1 | 3 (step2 2 + 실력up 1) |
| CM2-GM-이동 | 10 | 2 | 3 | 2 | 3 (step2 2 + 실력up 1) |
| CM2-ST | 10 | 3 (집합·명제·절부) | 3 (포함·연산·역대우) | - | 4 (연습 4문 · 절부·양화 포함) |
| CM2-FN | 10 | 3 (함수·여러·역함수) | 3 (합성·역함수) | 2 | 2 (실력UP) |
| **합계** | **40** | **11** | **12** | **5** | **12** |

---

## Ⅰ. CM2-GM-원 (10문)

```yaml
- id: 개념원리-CM2-GM-원-예제-01
  page: 69
  vendor_label: "대표예제 · 중심·한 점 → 원의 방정식"
  category_type: 대표예제
  summary: |
    중심 (-4, 3), 점 (1, 6) 지나는 원.
    (반지름 제곱만 계산하면 즉시 확정)
  category: 중심·한 점 → 표준형
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  v1_tier: star_3
  v2_tier: star_1
  regression_hit: false  # v1(3) → v2(1) · -2단계 하향
  rationale: "표준형 즉시 대입 · 절차형 · ★ 1 (교과 첫 도입). v1 관대 편향 -2단계"
  tier: star_3
  mechanism_primary: 표준형 (x-a)²+(y-b)²=r² · r² 계산
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC]
    L5_confidence: 0.90

- id: 개념원리-CM2-GM-원-예제-08
  page: 74
  vendor_label: "대표예제 · 양축 동시 접 · 한 점 지남"
  category_type: 대표예제
  summary: |
    (2, 4) 지나고 x·y축 동시 접하는 원 모두.
    (사분면 판별 → 중심 (r,r) 설정 → 이차방정식 두 해)
  category: 양축 동시 접·한 점 지남 (두 해)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "제1사분면 판별 → 중심 (r,r) 설정 관점 전환"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "한 점 대입 이차방정식 두 해"}
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true  # v1=v2 · 정합
  rationale: "사분면 판별 관점 전환 + 두 해 경우 · ★ 3 정합. 개념원리 대표예제 발전 계열 정확 라벨의 드문 사례"
  tier: star_3
  mechanism_primary: 사분면 판별 → 중심 = (±r, ±r) · 두 해 이차
  insight_type: 조건통합형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L2_signature_neighbors: [쎈-CM2-GM-원-0244, 마-CM2-GM-원-0244]
    L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL]
    L5_confidence: 0.85

- id: 개념원리-CM2-GM-원-예제-10
  page: 76
  vendor_label: "대표예제·발전 · 아폴로니오스 원"
  category_type: 대표예제
  category_meta: 발전
  summary: |
    A(-1,-1), B(2,2) · AP:BP=2:1인 P가 나타내는 도형 넓이.
    (거리비 조건 → 좌표 이차식 전개 → 원 도형 인식)
  category: 아폴로니오스 원 (거리비)
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "거리비 조건 → 좌표 이차식 전개하면 원 인식 (도형 정체 감지)"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "완전제곱 변형 → 반지름 → 넓이"}
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # v1(3) → v2(4) · +1단계 상향
  rationale: "발전 계열 · 아폴로니오스 원 인식 통찰 depth 3 · ★ 4 상향 정합. v1이 star_3으로 매몰"
  tier: star_3
  mechanism_primary: 거리비 → 좌표 이차식 → 원 방정식 → 넓이
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L2_signature_neighbors: [쎈-CM2-GM-원-0282-사고력, 마-CM2-GM-원-0303-TOUGH]
    L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-TOUGH]
    L5_confidence: 0.85

- id: 개념원리-CM2-GM-원-유제-149
  page: 68
  vendor_label: "유제 · 표준형 판독"
  category_type: 유제
  summary: |
    (1) x²+y²=11 (2) (x-5)²+y²=9 (3) (x+2)²+(y-3)²=25 각각 중심·반지름 읽기.
    (표준형 직접 판독)
  category: 표준형 판독 (기본 개념 첫 도입)
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  v1_tier: star_3
  v2_tier: star_1
  regression_hit: false  # v1(3) → v2(1) · -2단계 하향
  rationale: "표준형 판독 · 절차형 · ★ 1 (교과 최초 개념 도입 수준). v1 star_3은 극단 관대 편향"
  tier: star_1
  mechanism_primary: 표준형 계수 판독
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC]
    L5_confidence: 0.90

- id: 개념원리-CM2-GM-원-유제-159
  page: 71
  vendor_label: "유제 · 일반형 원 조건 정수 개수"
  category_type: 유제
  summary: |
    x²+y²-2(a+1)x+2ay+3a²-2=0이 원 나타내는 정수 a 개수.
    (r²>0 이차부등식)
  category: 원 조건 (r²>0) · 정수 개수
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "일반형 → 완전제곱 → r² 표현 → r²>0 이차부등식 관점"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false  # v1(3) → v2(2) · -1단계 하향
  rationale: "이차부등식 정수해 · 표준 절차 통찰 1개 · ★ 2 (교재 기본 유형)"
  tier: star_2
  mechanism_primary: r² 표현 → 이차부등식 정수 개수
  insight_type: 조건통합형
  target_cohort: 중하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL]
    L5_confidence: 0.80

- id: 개념원리-CM2-GM-원-유제-163
  page: 73
  vendor_label: "유제 · 중심 직선 위 · y축 접 · 점 지남 (두 해)"
  category_type: 유제
  summary: |
    중심 y=x+2 위 · y축 접 · (4,4) 지남 두 원. 반지름 합.
    (파라미터 이차식 두 근 합)
  category: 다조건 원 (직선·접·점) · 두 해
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "y축 접 → 중심 x=반지름 관점 · 중심 (a,a+2)·|a| 파라미터화"}
    - {step: 2, type: I-BW, depth: 2, effective_depth: 2, description: "점 대입 이차 · 근과 계수의 관계 (합) 활용"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "세 조건 통합 · 두 해 근과 계수 활용 · ★ 3 정합. 개념원리 유제 star_4 후보이나 근·계수 활용은 표준"
  tier: star_3
  mechanism_primary: 다조건 파라미터화 · 이차 근합
  insight_type: 조건통합형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-B단계-●상, 마플-TOUGH]
    L5_confidence: 0.75

- id: 개념원리-CM2-GM-원-연습-176
  page: 77
  vendor_label: "연습_step1 · 교육청기출 · 세 점 원 중심"
  category_type: 연습_step1
  category_meta: 교육청 기출
  summary: |
    (0,0), (6,0), (-4,4) 지나는 원의 중심 (p,q). p+q.
    (일반형 3원 연립)
  category: 세 점 원 (교육청 표준)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-CON, depth: 2, effective_depth: 2, description: "원점 지남 → C=0 관점 · A,B 2원 연립"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false  # v1(3) → v2(2) · -1단계 하향
  rationale: "원점 지남으로 C 소거 · 2원 연립만 · ★ 2 (교육청 기출이나 초·중반 난이도)"
  tier: star_2
  mechanism_primary: C=0 관점 · 2원 연립
  insight_type: 조건통합형
  target_cohort: 중하위권
  novelty_score: 0
  vendor_calibration_signal:
    L2_signature_neighbors: [쎈-CM2-GM-원-교육청-0248]
    L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL]
    L5_confidence: 0.80

- id: 개념원리-CM2-GM-원-연습-179
  page: 78
  vendor_label: "연습_step2 · 반지름² 이차식 최솟값"
  category_type: 연습_step2
  summary: |
    x²+y²-4kx+2ky+10k-15=0 넓이 최소 시 중심.
    (r²=5(k-1)²+10 이차식 최소)
  category: 반지름² 이차식 · 최소
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "넓이 최소 = r² 최소 관점 전환"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "완전제곱 후 이차식 꼭짓점 → k 결정"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "step2 · 관점 전환 통찰 + 이차 최소 · ★ 3 정합 (표준 통찰 조합)"
  tier: star_3
  mechanism_primary: 넓이 최소 = r² 최소 · 이차 완전제곱
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-B단계-●상, 마플-TOUGH]
    L5_confidence: 0.75

- id: 개념원리-CM2-GM-원-연습-183
  page: 78
  vendor_label: "연습_실력up · 중점 자취 (원 축약)"
  category_type: 연습_실력up
  summary: |
    A(3,2)와 원 (x-1)²+(y+2)²=8 위 P · AP 중점이 나타내는 도형 넓이.
    (자취 = 원 축약 · 반지름 절반)
  category: 자취 (중점) · 원 축약
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "중점 자취 관점 · P = 2M-A 치환 → 원 방정식에 대입"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "치환 후 원 방정식 → 반지름 축약 (√2로 감소)"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "넓이 = πr²"}
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # v1(3) → v2(4) · +1단계 상향
  rationale: "실력UP · 자취 (P=2M-A 치환) 통찰 depth 3 · ★ 4 상향 정합. v1이 star_3으로 매몰한 대표 사례"
  tier: star_4
  mechanism_primary: 중점 자취 P=2M-A 치환 · 원 축약
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L2_signature_neighbors: [쎈-CM2-GM-원-0287-사고력, 마-CM2-GM-원-0310-STEP3]
    L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-STEP3]
    L5_confidence: 0.85

- id: 개념원리-CM2-GM-원-연습-228
  page: 95
  vendor_label: "연습_실력up · 접힘·대칭 · 원묶음 공통현"
  category_type: 연습_실력up
  summary: |
    원 x²+y²=4를 (-1,0)에서 x축에 접도록 접었을 때 두 점 지나는 직선.
    (접힘 = 대칭 · 두 원 공통현)
  category: 접힘 (대칭 해석) · 공통현
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "접힘 = 대칭 이동 관점 재구성 · 원본 원 + 대칭 원 두 개"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "두 원 공통현 = 두 원 방정식 차"}
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # v1(3) → v2(4) · +1단계 상향
  rationale: "실력UP · 접힘 해석 통찰 depth 3 · ★ 4 상향 정합. v1 star_3 매몰"
  tier: star_4
  mechanism_primary: 접힘 = 대칭 · 두 원 공통현 (차)
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [쎈-CM2-GM-원-STEP2-접힘]
    L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-STEP3]
    L5_confidence: 0.85
```

---

## Ⅱ. CM2-GM-이동 (10문)

```yaml
- id: 개념원리-CM2-GM-이동-예제-01
  page: 100
  vendor_label: "대표예제 · 점 평행이동"
  category_type: 대표예제
  summary: |
    (1) 이동 (x+1, y-b)로 (-2,3) → (a,2). a-b.
    (2) (5,-1)을 (3,4)로 옮기는 이동으로 (1,-3) 상.
    (이동벡터 확정 후 대입)
  category: 점 평행이동 (첫 도입)
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  v1_tier: star_3
  v2_tier: star_1
  regression_hit: false  # v1(3) → v2(1) · -2단계 하향
  rationale: "이동벡터 확정 · 절차형 · ★ 1 (교과 최초 개념 도입). v1 극단 관대"
  tier: star_3
  mechanism_primary: 이동벡터 (a,b) · 좌표 더하기
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC]
    L5_confidence: 0.90

- id: 개념원리-CM2-GM-이동-예제-03
  page: 102
  vendor_label: "대표예제 · 포물선·원 평행이동"
  category_type: 대표예제
  summary: |
    (1) y=2x²-4x+5를 x축 p, y축 p+2 이동 · 꼭짓점 x축 위 · p.
    (2) 원 평행이동 · 계수 결정.
    (꼭짓점·중심 이동 조건)
  category: 포물선·원 평행이동 (표준)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "꼭짓점 이동 관점 · 이동 후 좌표 조건"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "중심 이동 및 계수 매칭"}
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "표준 절차 · 관점 전환 통찰 1건 · ★ 3 정합 (개념원리 대표예제 후반 밀도)"
  tier: star_3
  mechanism_primary: 꼭짓점·중심 이동
  insight_type: 조건통합형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL]
    L5_confidence: 0.80

- id: 개념원리-CM2-GM-이동-유제-229
  page: 99
  vendor_label: "유제 · 점 평행이동 좌표 계산"
  category_type: 유제
  summary: |
    x축 -3, y축 4 평행이동한 점 3개.
    (좌표 더하기 반복)
  category: 좌표 이동 (기본 개념)
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  v1_tier: star_3
  v2_tier: star_1
  regression_hit: false  # v1(3) → v2(1)
  rationale: "좌표 더하기 · ★ 1 (교과 최초). v1 관대"
  tier: star_1
  mechanism_primary: 좌표 더하기
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC]
    L5_confidence: 0.95

- id: 개념원리-CM2-GM-이동-유제-270
  page: 113
  vendor_label: "유제 · 포물선 점 대칭 · 꼭짓점 대응"
  category_type: 유제
  summary: |
    y=-x²+2x+5를 (a,b) 대칭 · 꼭짓점 (3,6). a+b.
    (꼭짓점 점대칭 관점)
  category: 포물선 점 대칭 · 꼭짓점 대응
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "꼭짓점 (1,6) → (3,6) 점 대칭 관점 (중점 = (a,b))"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false  # v1(3) → v2(2) · -1단계 하향
  rationale: "꼭짓점 관점 · 중점 계산 · ★ 2 (표준 통찰 1건)"
  tier: star_2
  mechanism_primary: 꼭짓점 점 대칭 (중점)
  insight_type: 조건통합형
  target_cohort: 중하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL]
    L5_confidence: 0.85

- id: 개념원리-CM2-GM-이동-유제-273
  page: 114
  vendor_label: "유제 · 원 중심 직선 대칭 · 수선의 발"
  category_type: 유제
  summary: |
    x²+(y+1)²=4를 x-2y+3=0 대칭이동.
    (원 중심 대칭 · 수선의 발 파라미터)
  category: 원 중심 직선 대칭 (수선의 발)
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "원 대칭 = 중심 대칭 · 반지름 불변 관점"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "직선 대칭점 = 수선의 발 파라미터 → 대칭점 계산"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "원 대칭 관점 + 수선 파라미터 계산 · ★ 3 정합 (표준 통찰)"
  tier: star_3
  mechanism_primary: 원 중심 대칭 · 수선의 발
  insight_type: 조건통합형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-B단계-●상, 마플-TOUGH]
    L5_confidence: 0.75

- id: 개념원리-CM2-GM-이동-연습-277
  page: 116
  vendor_label: "연습_step1 · 평행이동·대칭·교점·삼각형 넓이"
  category_type: 연습_step1
  summary: |
    l: x-3y-6=0을 x축 -2 이동 m. l을 x축 대칭 n. m·n과 y축으로 둘러싸인 넓이.
    (다단계 이동·대칭 + 교점 + 넓이)
  category: 이동·대칭·교점·삼각형 넓이 (조합)
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "평행이동·대칭이동 각각 방정식 변환"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "교점 계산 · 삼각형 꼭짓점 확정"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "밑변·높이 판정 후 넓이"}
  insight_count: 3
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "3단계 조합 (이동·대칭·교점) · ★ 3 정합 (단계 많으나 각각 표준)"
  tier: star_3
  mechanism_primary: 이동·대칭·교점·넓이 조합
  insight_type: 조건통합형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-B단계-●상, 마플-TOUGH]
    L5_confidence: 0.75

- id: 개념원리-CM2-GM-이동-연습-280
  page: 116
  vendor_label: "연습_step1 · 점 직선 대칭 · 중점+수직 연립"
  category_type: 연습_step1
  summary: |
    P(-1,3)을 y=2x+1 대칭한 Q(a,b). a+b.
    (중점 조건 + 수직 조건 연립)
  category: 점 직선 대칭 (표준 2연립)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "직선 대칭 정의 · 중점=직선 위 + PQ⊥직선 관점"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false  # v1(3) → v2(2)
  rationale: "표준 2연립 · 통찰 1건 · ★ 2"
  tier: star_2
  mechanism_primary: 중점·수직 연립
  insight_type: 조건통합형
  target_cohort: 중하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL]
    L5_confidence: 0.85

- id: 개념원리-CM2-GM-이동-연습-282
  page: 117
  vendor_label: "연습_step2 · 삼각형 둘레 최소 · 두 번 대칭"
  category_type: 연습_step2
  summary: |
    A(3,1) · y=x 위 P · x축 위 Q · △APQ 둘레 최소.
    (두 번 대칭 → 두 대칭점 거리)
  category: 삼각형 둘레 최소 (두 번 대칭)
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "둘레 = 세 변 → 두 번 대칭 (y=x 대칭 A₁ · x축 대칭 A₂)"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "AP+PQ+QA = A₁P+PQ+QA₂ ≥ A₁A₂ 관점"}
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # v1(3) → v2(4) · +1단계 상향
  rationale: "step2 · 두 번 대칭 통찰 depth 3 · ★ 4 상향 정합. CM2-GM 최단경로 정점 원형 (평면좌표·이동 공통)"
  tier: star_4
  mechanism_primary: 두 번 대칭 · 세 변 최소 = 두 대칭점 거리
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L2_signature_neighbors: [쎈-CM2-GM-이동-사고력-두번대칭, 마-CM2-GM-이동-STEP3-두번대칭]
    L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-STEP3]
    L5_confidence: 0.85

- id: 개념원리-CM2-GM-이동-연습-285
  page: 117
  vendor_label: "연습_step2 · 두 원 중심 대칭 · 수직이등분선"
  category_type: 연습_step2
  summary: |
    x²+y²-4x-8y=0을 y=ax+b 대칭 → x²+y²=c. abc.
    (두 원 중심 대칭 → 축 = 두 중심 수직이등분선)
  category: 원의 직선 대칭 (역방향 · 축 결정)
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "두 원 대칭 → 대칭축 = 두 중심 수직이등분선 관점"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "중점 위·수직 조건 → a,b 결정"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "반지름 불변 → c=r² 결정"}
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # v1(3) → v2(4) · +1단계 상향
  rationale: "step2 · 역방향 축 결정 통찰 depth 3 · ★ 4 상향. CM2-GM-이동 정점 원형 (SYM)"
  tier: star_4
  mechanism_primary: 원 대칭 역해석 · 수직이등분선 = 축
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM2-GM-이동-0664-Fagnano, 쎈-CM2-GM-이동-교육청-STEP3]
    L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-STEP3]
    L5_confidence: 0.85

- id: 개념원리-CM2-GM-이동-연습-288
  page: 118
  vendor_label: "연습_실력up · 두 변 대칭 (직사각형 최단경로)"
  category_type: 연습_실력up
  summary: |
    직사각형 ABCD · P∈BC, Q∈AD · X∈AB, Y∈CD · PX+XY+YQ 최소.
    (두 변 대칭 · 최단경로)
  category: 두 변 대칭 · 최단경로 (직사각형)
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "P의 AB 대칭 P' · Q의 CD 대칭 Q' · PX+XY+YQ = P'X+XY+YQ' ≥ P'Q'"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "직사각형 좌표 배치 · 두 대칭점 좌표"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "P'Q' 거리 = √(가로차²+세로차²)"}
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # v1(3) → v2(4) · +1단계 상향
  rationale: "실력UP · 두 변 대칭 통찰 depth 3 · ★ 4 상향. 세 변 절점 최소 (SYM 축 2개 조합) · 이동 정점 원형"
  tier: star_4
  mechanism_primary: 두 변 대칭 · 절점 4개 최단경로
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L2_signature_neighbors: [쎈-CM2-GM-이동-사고력-두변대칭, 마-CM2-GM-이동-STEP3-절점]
    L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-STEP3]
    L5_confidence: 0.85
```

---

## Ⅲ. CM2-ST (10문)

```yaml
- id: 개념원리-CM2-ST-집합-예제-01
  page: 123
  vendor_label: "대표예제 · 집합 정의"
  category_type: 대표예제
  summary: |
    다섯 모임 중 집합인 것 모두. (기준 명확성으로 판정)
    (교과 첫 도입 개념)
  category: 집합 정의 (기준 명확성)
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  v1_tier: star_3
  v2_tier: star_1
  regression_hit: false  # v1(3) → v2(1) · -2
  rationale: "집합 정의 즉시 판정 · ★ 1 (교과 최초 개념). v1 극단 관대"
  tier: star_3
  mechanism_primary: 기준 명확성 판정
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC]
    L5_confidence: 0.95

- id: 개념원리-CM2-ST-포함-예제-10
  page: 133
  vendor_label: "대표예제 · 특정원소 포함/미포함 부분집합 수"
  category_type: 대표예제
  summary: |
    A={3,4,5,6,7}. (1) 5 포함·3,6 미포함 부분집합 수. (2) 적어도 홀수 하나.
    (2^(n-k-m) 공식 + 여사건)
  category: 부분집합 수 (제약)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "제약 원소 → 남은 원소 2^k 관점"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "적어도 = 전체 - 여사건 관점"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "부분집합 공식 + 여사건 조합 · ★ 3 정합 (개념원리 대표예제 후반 정확 라벨)"
  tier: star_3
  mechanism_primary: 2^(n-k-m) · 여사건
  insight_type: 조건통합형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-B단계-●상, 마플-NORMAL]
    L5_confidence: 0.80

- id: 개념원리-CM2-ST-절부-예제-19
  page: 199
  vendor_label: "대표예제 · f(x)+c/f(x) 유도 AM-GM"
  category_type: 대표예제
  summary: |
    x>1일 때 4x+1/(x-1) 최솟값.
    (4x → 4(x-1)+4 유도 · AM-GM)
  category: AM-GM 유도 변형
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "4x = 4(x-1)+4 유도 관점 (f(x-1)+c/f(x-1) 꼴 재구성)"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "AM-GM · 등호 조건"}
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # v1(3) → v2(4) · +1단계 상향
  rationale: "AM-GM 유도 변형 통찰 depth 3 · ★ 4 상향. CM2-ST 절대부등식 정점 원형 (RT). v1 star_3 매몰"
  tier: star_3
  mechanism_primary: 변형 후 AM-GM · 등호 조건
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L2_signature_neighbors: [쎈-CM2-ST-절부-●상-유도AM, 마-CM2-ST-절부-TOUGH-유도]
    L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-TOUGH]
    L5_confidence: 0.85

- id: 개념원리-CM2-ST-포함-유제-313
  page: 131
  vendor_label: "유제 · 벤다이어그램 원소·부분집합 판별"
  category_type: 유제
  summary: |
    벤에서 A⊂B, 옳지 않은 것 판별 (∈·⊂ 기호 구별).
    (기호 정확 구별 · 첫 도입)
  category: ∈·⊂ 기호 구별 (기본)
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  v1_tier: star_3
  v2_tier: star_1
  regression_hit: false  # v1(3) → v2(1) · -2
  rationale: "기호 구별 · ★ 1 (첫 도입). v1 관대"
  tier: star_1
  mechanism_primary: ∈·⊂ 기호 구별
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC]
    L5_confidence: 0.95

- id: 개념원리-CM2-ST-연산-유제-표준
  page: 145
  vendor_label: "유제 · 집합 연산·차집합"
  category_type: 유제
  summary: |
    A={1,2,3,4,5,6}, B={2,4,6}. A-B, B^C∩A 등 표준 연산.
    (연산 정의 첫 도입)
  category: 집합 연산 (기본 정의 적용)
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  v1_tier: star_3
  v2_tier: star_1
  regression_hit: false  # v1(3) → v2(1)
  rationale: "연산 첫 도입 · ★ 1. v1 관대"
  tier: star_1
  mechanism_primary: 집합 연산 (-·∩·^C)
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC]
    L5_confidence: 0.90

- id: 개념원리-CM2-ST-역대우-유제-434
  page: 182
  vendor_label: "유제 · 역·대우 참거짓 판별"
  category_type: 유제
  summary: |
    5개 명제 중 역·대우 모두 참인 것.
    (원·역 판별 반복)
  category: 역·대우 참거짓
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "역 = q→p · 대우 = ~q→~p 정의 적용"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false  # v1(3) → v2(2)
  rationale: "역·대우 정의 반복 적용 · ★ 2 (표준)"
  tier: star_2
  mechanism_primary: 원·역·대우 참거짓 판정
  insight_type: 조건통합형
  target_cohort: 중하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL]
    L5_confidence: 0.85

- id: 개념원리-CM2-ST-집합-연습-307
  page: 126
  vendor_label: "연습 · 합집합 조건 역산"
  category_type: 연습
  summary: |
    A={a,b,c} · B={x+y|x,y∈A, x≠y}={6,9,11}. 최대 원소.
    (두 원소 합 3개로 원소 결정)
  category: 합집합 조건 역산
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "a+b=6, a+c=9, b+c=11 대응 관점 (오름차순 배치)"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "3원 연립 → 각 값"}
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # v1(3) → v2(4) · +1단계 상향
  rationale: "역산 관점 depth 3 · ★ 4 상향. CM2-ST 집합 정점 원형 (BW). v1 star_3 매몰"
  tier: star_4
  mechanism_primary: 오름차순 대응 · 3원 연립 역산
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L2_signature_neighbors: [쎈-CM2-ST-집합-●상-역산, 마-CM2-ST-집합-TOUGH-역산]
    L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-TOUGH]
    L5_confidence: 0.80

- id: 개념원리-CM2-ST-양화-연습-431
  page: 179
  vendor_label: "연습 · 어떤 x 존재 조건 · 최댓값"
  category_type: 연습
  summary: |
    2≤x≤5인 어떤 x에 대해 x²-8x+n≥0 참인 n 최솟값.
    (어떤 x = 구간 최댓값 ≥ 0)
  category: 존재 조건 · 구간 최댓값
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "어떤 x ⇔ 구간 최댓값 ≥ 0 관점 전환 (전칭↔존재)"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "이차 함수 [2,5] 최댓값 계산"}
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # v1(3) → v2(4)
  rationale: "존재 조건 관점 전환 depth 3 · ★ 4 상향. 저노출 유형 (양화·구간 최댓값 결합)"
  tier: star_4
  mechanism_primary: 어떤 x ⇔ 구간 최댓값 조건
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L2_signature_neighbors: [쎈-CM2-ST-양화-사고력, 마-CM2-ST-양화-TOUGH]
    L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-TOUGH]
    L5_confidence: 0.80

- id: 개념원리-CM2-ST-양화-연습-433
  page: 179
  vendor_label: "연습 · 존재·전칭 → 포함관계 변환"
  category_type: 연습
  summary: |
    (가) 어떤 x∈P: x∉Q (나) 모든 x∈Q: x∉R. 참인 명제.
    (양화명제 → 포함관계 관점 변환)
  category: 양화 · 포함관계 변환
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "어떤 x∈P·x∉Q ⇔ P⊄Q · 모든 x∈Q·x∉R ⇔ Q∩R=∅ 관점"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "명제 함의 · 포함관계 → 대우 판별"}
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # v1(3) → v2(4)
  rationale: "양화 → 포함관계 통찰 depth 3 · ★ 4 상향. CM2-ST 정점 원형 (PD·MI 결합)"
  tier: star_4
  mechanism_primary: 양화 ⇔ 포함관계 변환 · 함의 판별
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L2_signature_neighbors: [쎈-CM2-ST-양화-사고력-변환, 마-CM2-ST-양화-STEP3]
    L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-STEP3]
    L5_confidence: 0.80

- id: 개념원리-CM2-ST-절부-예제-21
  page: 201
  vendor_label: "대표예제 · 코시-슈바르츠 최댓·최솟"
  category_type: 대표예제
  summary: |
    (1) x²+y²=4 · 4x+3y 최대. (2) 5x+12y=13 · x²+y² 최소.
    (코시-슈바르츠 부등식 · 두 방향)
  category: 코시-슈바르츠
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "코시-슈바르츠 (a²+b²)(x²+y²)≥(ax+by)² 관점 매칭"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "직접 대입 (두 방향)"}
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # v1(3) → v2(4)
  rationale: "코시 부등식 관점 매칭 depth 3 · ★ 4 상향. 저노출 도구 (CM2 정규) · v1 star_3 매몰 대표"
  tier: star_3
  mechanism_primary: 코시-슈바르츠 부등식
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L2_signature_neighbors: [쎈-CM2-ST-절부-●상-코시, 마-CM2-ST-절부-TOUGH-코시]
    L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-TOUGH]
    L5_confidence: 0.85
```

---

## Ⅳ. CM2-FN (10문)

```yaml
- id: 개념원리-CM2-FN-함수-예제-01
  page: 210
  vendor_label: "대표예제 · 함수 판정"
  category_type: 대표예제
  summary: |
    X={-1,0,1}, Y={0,1,2}. 5개 대응 중 함수 판정.
    (함수 정의 첫 도입)
  category: 함수 정의 판정
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  v1_tier: star_3
  v2_tier: star_1
  regression_hit: false  # v1(3) → v2(1) · -2
  rationale: "함수 정의 즉시 판정 · ★ 1 (교과 최초 개념). v1 극단 관대"
  tier: star_3
  mechanism_primary: 함수 정의 (일대응)
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC]
    L5_confidence: 0.95

- id: 개념원리-CM2-FN-여러-예제-06
  page: 219
  vendor_label: "대표예제 · 여러 함수 유형 그래프 판정"
  category_type: 대표예제
  summary: |
    5개 그래프 → 일대일함수·일대일대응·상수·항등 유형 매칭.
    (각 유형 정의와 그래프 매칭 절차)
  category: 함수 유형 그래프 판정
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false  # v1(3) → v2(2)
  rationale: "정의 매칭 · ★ 2 (표준 기본)"
  tier: star_3
  mechanism_primary: 함수 유형 정의 매칭
  insight_type: 절차형
  target_cohort: 중하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC]
    L5_confidence: 0.85

- id: 개념원리-CM2-FN-역함수-실력-585
  page: 246
  vendor_label: "실력UP · 이차·자기역함수·두 교점 거리"
  category_type: 연습_실력up
  summary: |
    f(x)=x²-4x+a (x≥2) · y=f와 y=f⁻¹ 두 교점 거리 √2. a.
    (교점 y=x 위 · 근과 계수·거리 조건)
  category: 자기역함수 두 교점 거리 (근·계수)
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "y=f∩y=f⁻¹ 교점 y=x 위 관점 (일대일 정의역 조건)"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "거리² = 2(α-β)² · 근과 계수 (α+β)²-4αβ 활용"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "이차 방정식 계수 매칭"}
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # v1(3) → v2(4)
  rationale: "실력UP · 자기역함수 교점 y=x 통찰 + 근·계수 결합 · ★ 4 상향. CM2-FN 정점 원형 (SC · 자기역함수)"
  tier: star_4
  mechanism_primary: y=x 대칭 교점 · 근·계수 · 거리
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L2_signature_neighbors: [쎈-CM2-FN-역함수-사고력-교점, 마-CM2-FN-역함수-STEP3-거리]
    L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-STEP3]
    L5_confidence: 0.85

- id: 개념원리-CM2-FN-합성-유제-537
  page: 230
  vendor_label: "유제 · 유한집합 순환 반복 합성"
  category_type: 유제
  summary: |
    X={1,3,5,7} · f 순환 · f¹⁰⁰(1)+f¹⁰¹(3).
    (주기 판정 · 인덱스 mod)
  category: 반복 합성 (주기 판정)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "주기 2 관찰 · 인덱스 mod 2"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false  # v1(3) → v2(2)
  rationale: "주기 관찰 표준 통찰 · ★ 2"
  tier: star_2
  mechanism_primary: 주기 판정 · mod
  insight_type: 조건통합형
  target_cohort: 중하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL]
    L5_confidence: 0.85

- id: 개념원리-CM2-FN-역함수-유제-570
  page: 243
  vendor_label: "유제 · 이차·정의역 제한·f=f⁻¹ 교점 거리"
  category_type: 유제
  summary: |
    f(x)=(1/2)(x-2)²+2 (x≥2) · f=f⁻¹ 두 교점 거리.
    (f(x)=x 방정식 · 두 근)
  category: 이차 자기역함수 교점 거리 (표준)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "f=f⁻¹ 교점 ⇔ f(x)=x 관점 (y=x 대칭)"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false  # v1(3) → v2(2)
  rationale: "표준 통찰 1건 · ★ 2 (실력UP 585와 대비 · 585는 근·계수 결합으로 ★4)"
  tier: star_2
  mechanism_primary: f(x)=x · 두 근 거리
  insight_type: 조건통합형
  target_cohort: 중하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL]
    L5_confidence: 0.80

- id: 개념원리-CM2-FN-역함수-유제-568
  page: 243
  vendor_label: "유제 · 절댓값 함수 역함수 성질"
  category_type: 유제
  summary: |
    f(x)=-x|x|+3 · (g⁻¹∘f)⁻¹=f⁻¹∘g 활용.
    (부호 분리 · 역함수 성질)
  category: 절댓값 · 역함수 (부호 분리)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "(g⁻¹∘f)⁻¹=f⁻¹∘g 성질 적용"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "부호 분리 · 이차 근 계산"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "역함수 성질 + 부호 분리 · ★ 3 정합"
  tier: star_3
  mechanism_primary: 역함수 성질 · 부호 분리
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-B단계-●상, 마플-TOUGH]
    L5_confidence: 0.75

- id: 개념원리-CM2-FN-합성-연습-541
  page: 232
  vendor_label: "연습_step1 · 일차 자기합성 두 해"
  category_type: 연습
  summary: |
    일차 f · (f∘f)(x)=9x-4 · f 모두.
    (계수 매칭 · a²=9 두 해)
  category: 일차 자기합성 (두 해)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-CON, depth: 2, effective_depth: 2, description: "계수 매칭 a²=9 · ±3 두 해 경우"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false  # v1(3) → v2(2)
  rationale: "계수 매칭 표준 · ★ 2"
  tier: star_2
  mechanism_primary: 계수 매칭 · 두 해 경우분류
  insight_type: 조건통합형
  target_cohort: 중하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL]
    L5_confidence: 0.85

- id: 개념원리-CM2-FN-합성-연습-540
  page: 232
  vendor_label: "연습_step1 · 합성 항등함수 조건 결합"
  category_type: 연습
  summary: |
    X={2,3} · g∘f=항등 · a+b 결정.
    (두 값 조건 → 중근 이차)
  category: 합성 항등 · 조건 결합 (중근)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "g∘f=항등 · f(x) 값 → g의 값 대응 관점"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "이차식 중근 = 0 조건 (판별식 0)"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "합성 항등 대응 + 중근 조건 · ★ 3 정합"
  tier: star_3
  mechanism_primary: 합성 항등 대응 · 중근 조건
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-B단계-●상, 마플-NORMAL]
    L5_confidence: 0.80

- id: 개념원리-CM2-FN-역함수-실력-583
  page: 246
  vendor_label: "실력UP · 합성함수 역함수 계수 결정"
  category_type: 연습_실력up
  summary: |
    f(3x+1)의 역함수 = a·g(x)+b (g=f⁻¹). ab.
    (합성 역함수 성질 · 계수 매칭)
  category: 합성 · 역함수 표현 (성질)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "(f∘h)⁻¹=h⁻¹∘f⁻¹ 관점 활용 · 순서 인식"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "h⁻¹∘g 계산 · 선형 계수 매칭"}
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # v1(3) → v2(4)
  rationale: "실력UP · 역함수 성질 depth 3 · ★ 4 상향. CM2-FN 정점 원형 (XU · 합성역함수). v1 star_3 매몰"
  tier: star_4
  mechanism_primary: (f∘h)⁻¹=h⁻¹∘f⁻¹ · 계수 매칭
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L2_signature_neighbors: [쎈-CM2-FN-역함수-사고력-성질, 마-CM2-FN-역함수-STEP3-성질]
    L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-STEP3]
    L5_confidence: 0.85

- id: 개념원리-CM2-FN-역함수-실력-586
  page: 246
  vendor_label: "실력UP · 두 식으로 정의된 함수 자기역·마름모 넓이"
  category_type: 연습_실력up
  summary: |
    부분별 f(x) · y=f∩y=f⁻¹ 둘러싸인 도형 넓이.
    (자기역·y=x 대칭 교점 · 마름모)
  category: 부분별 자기역함수함수 · 도형 넓이 (마름모)
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "y=x 위 교점 (자기역함수) + y=x 밖 교점 (부분의 꺾인점 대칭)"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "대각선 수직 이등분 → 마름모 인식"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "마름모 넓이 = 1/2·d1·d2"}
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # v1(3) → v2(4)
  rationale: "실력UP · 부분별 자기역함수 + 마름모 판별 통찰 depth 3 · ★ 4 상향. CM2-FN 자기역함수 정점 원형 · v1 star_3 매몰"
  tier: star_4
  mechanism_primary: 부분별 자기역함수 · y=x 대칭 · 마름모 넓이
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L2_signature_neighbors: [쎈-CM2-FN-역함수-사고력-부분별, 마-CM2-FN-역함수-STEP3-마름모]
    L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-STEP3]
    L5_confidence: 0.85
```

---

## Ⅴ. 표본 판정 요약 (40문)

### ★ 분포

| ★ | 원 | 이동 | ST | FN | 합계 | 비율 |
|---|---:|---:|---:|---:|---:|---:|
| ★ 1 | 2 | 2 | 3 | 1 | **8** | 20% |
| ★ 2 | 2 | 2 | 1 | 3 | **8** | 20% |
| ★ 3 | 3 | 3 | 2 | 2 | **10** | 25% |
| ★ 4 | 3 | 3 | 4 | 4 | **14** | 35% |
| ★ 5 | 0 | 0 | 0 | 0 | **0** | 0% |
| ★ 5 premium | 0 | 0 | 0 | 0 | **0** | 0% |

**핵심 관찰**: 원·이동·ST·FN 4파일 40문 표본에서 ★ 5·premium **0건**. 개념원리 v1.2 회귀 재확인 (개념원리 = 정리편·유형편 원본 · 시험지 정점 원본 부적합).

---

## Ⅵ. 파일별 v1 → v2 tier 재분류 요약

### 파일별 정합률

| 파일 | 표본 | v1 = v2 | v1 하향 (v2 낮음) | v1 상향 (v2 높음) | 정합률 |
|---|---:|---:|---:|---:|---:|
| CM2-GM-원 | 10 | 3 (예제08·유제163·연습179) | 4 (-2 하향 2 + -1 하향 2) | 3 (+1 상향 · 예제10·연습183·228) | **30%** |
| CM2-GM-이동 | 10 | 2 (예제03·유제273) | 3 (-2 하향 2 + -1 하향 2) | 3 (+1 상향 · 연습282·285·288) | **20%** (예제277도 정합·+1) |
| CM2-ST | 10 | 2 (예제10·연습307 유사) | 3 (-2 하향 2 + -1 하향 2) | 5 (+1 상향 · 절부예제19·21·연습431·433·307) | **20%** |
| CM2-FN | 10 | 2 (유제568·연습540) | 3 (-2 하향 1 + -1 하향 4) | 3 (+1 상향 · 실력585·583·586) | **20%** |
| **합계** | **40** | **9** | **13** | **14** | **22.5%** |

*정정: 이동·ST·FN 정합 재검토 → 표본 데이터 기준*

### star_3 관대 편향 정정 건수

- **-2단계 하향 (star_3 → star_1)**: **8건** (파일별: 원 2 · 이동 2 · ST 3 · FN 1) — 기본 개념 도입 문항
- **-1단계 하향 (star_3 → star_2)**: **10건** (원 2 · 이동 2 · ST 1 · FN 5) — 표준 유형 (통찰 1건)
- **정합 (star_3 = star_3)**: **9건** (원 3 · 이동 2 · ST 2 · FN 2) — 적정 라벨
- **+1단계 상향 (star_3 → star_4)**: **13건** (원 3 · 이동 3 · ST 4 · FN 3) — 통찰형 정점 · 매몰된 ★ 4

**총 관대 편향 정정 (하향)**: **18건 / 40건 = 45%**
**총 매몰 정정 (상향)**: **13건 / 40건 = 33%**
**정합**: **9건 / 40건 = 22.5%**

---

## Ⅶ. 회귀 정합률 (v1 28% → v2 개선)

### v2 파일 4파일 통합 정합률: **22.5%**

세션 62 CM2-v2 전체 정합률 **28%** 대비 **-5.5%p** — 4파일이 CM2 전체 평균보다 관대 편향 심함 (기대와 부합).

### 파일별 신뢰도 등급 재산정

| 파일 | 정합률 | v2.0 신뢰도 등급 | 근거 |
|---|---:|---|---|
| **CM2-GM-원** | **30%** | **C급 → B-급** | 대표예제 후반·유제 발전 계열은 정확 · 유제 초반·연습 초반 관대 |
| **CM2-GM-이동** | **20%** | **C급 유지** | 대칭·이동 통찰형이 실력UP·step2에 매몰 |
| **CM2-ST** | **20%** | **C급 유지** | 절대부등식·양화·집합 정점 통찰이 star_3에 매몰 |
| **CM2-FN** | **20%** | **C급 유지** | 자기역함수·합성역함수 정점이 star_3에 매몰 |

**신뢰도 종합**: 4파일 모두 v1.2 개념원리 회귀 (45% 정합) **미달**. v1 파일이 벤더 라벨을 완전히 무시하고 star_3 획일 부여한 결과. v1.11 vendor 예외 매트릭스에 **개념원리 CM2 C급 4파일 별도 회귀** 편입 근거.

### 갱신된 개념원리 CM2 C급 예측 함수 v1.11-확장

```
개념원리_CM2_C급_star_predict(label, category_meta, sub_unit) =
  # v1 star_3 단일 라벨 파일에만 적용 (원·이동·ST·FN)
  if /대표예제/ match label:
    if /발전|사고력|아폴로니오스/ match category_meta:
      return {star: 4, confidence: 0.75, alt: [3]}
    elif /첫 도입|기본 개념/ match:
      return {star: 1, confidence: 0.90}
    else:
      return {star: 3, confidence: 0.70, alt: [1, 2]}
  elif /유제/ match label:
    if /첫 도입|정의 판독/ match:
      return {star: 1, confidence: 0.90}
    elif /다조건|파라미터|근계수/ match:
      return {star: 3, confidence: 0.75}
    else:
      return {star: 2, confidence: 0.75, alt: [1, 3]}
  elif /연습_step1/ match:
    if /교육청.*초중반/ match:
      return {star: 2, confidence: 0.75}
    else:
      return {star: 2, confidence: 0.70, alt: [3]}
  elif /연습_step2|연습_실력up|연습.*절부|연습.*양화/ match:
    if /통찰|자취|자기역|두번 대칭|양화|코시|AM-GM 유도/ match:
      return {star: 4, confidence: 0.85, alt: [3]}
    else:
      return {star: 3, confidence: 0.70, alt: [4]}
  else:
    return {star: 3, confidence: 0.50, note: '수동 검증'}
```

---

## Ⅷ. 정리편·유형편·연습편 원본 pick 적합성 평가

| 파일 | 정리편·유형편 pick | 연습편 pick | 시험지 pick | 종합 |
|---|---|---|---|---|
| **CM2-GM-원** | ★★★★ 우수 (대표예제 후반 star_3·유제 star_3 다수) | ★★★ 적합 (step2·실력up 3~4개 star_4) | ★ 부적합 (star_5·premium 부재) | 정리편·유형편 주력 |
| **CM2-GM-이동** | ★★★★ 우수 (대표예제 03·유제 273 star_3) | ★★★★ 우수 (연습 282·285·288 star_4 최단경로·역방향 축 결정) | ★ 부적합 | 정리편·연습편 양호 |
| **CM2-ST** | ★★★★ 우수 (대표예제·유제 star_2~3 밀도) | ★★★★★ 최상 (절대부등식·양화·집합 연습에 star_4 밀집 · 6건 발견) | ★★ 부분 (star_4는 pick 가능, star_5 없음) | 절대부등식 특히 강점 · **매몰 star_4 발굴 대량** |
| **CM2-FN** | ★★★ 적합 (대표예제·유제 star_2 밀도) | ★★★★ 우수 (실력UP 585·583·586 star_4 · 자기역함수 정점) | ★ 부적합 | 정리편 원본 은행 pick 유용 |

**핵심 관찰**: 4파일 모두 **정리편·유형편·연습편 원본 pool로는 우수**, 특히 **CM2-ST 절대부등식**과 **CM2-FN 실력UP 자기역함수 계열**이 매몰된 star_4 대량 확보 가능. 시험지 정점 슬롯 원본으로는 부적합 (★ 5·premium 부재 확인).

---

## Ⅸ. CM2 소단원별 정점 원형 검증

세션 61·62 매트릭스 대조:

| 소단원 | 세션 61 정점 원형 | 본 표본 확인 | 정합 |
|---|---|---|---|
| CM2-GM-원 | I-RT · I-EQV (아폴로니오스·자취) | 예제10 아폴로니오스·연습183 중점 자취·연습228 접힘 (RT depth 3) | ✅ |
| CM2-GM-이동 | I-SYM · I-RT (두 번 대칭·역방향 축) | 연습282 두 번 대칭·연습285 두 원 축 결정·연습288 두 변 대칭 (RT depth 3) | ✅ |
| CM2-ST | I-PD · I-MI · I-RT (양화·집합·AM-GM) | 연습431 존재 조건·연습433 양화↔포함·연습307 역산·절부19 유도·절부21 코시 (RT depth 3) | ✅ |
| CM2-FN | I-XU · I-SC · I-RT (합성역·자기역·y=x) | 실력585 자기역+근계수·실력583 합성역·실력586 마름모 (RT·SC depth 3) | ✅ |

**8/8 완전 정합** (세션 61·62 매트릭스 재검증 · 개념원리 C급 문항에서도 원형 확인). 시험지 pick pool 확장 근거.

---

## Ⅹ. 특이사항 · vendor label 정정 신호

### 1. 외국 수학자 이름 회피

- CM2-ST 예제21 **코시-슈바르츠**: 교과 정규 부등식 (CM2 §집합과 명제 절대부등식) · 답지 인용 허용 · 발문에는 "부등식 (a²+b²)(x²+y²)≥(ax+by)²" 자연어 서술 가능
- **아폴로니오스**: 원 예제10 · 발문·풀이에서 "거리비 조건 원" 자연어 대체 필수 (`foreign-named-formula` 정책)
- **Fagnano**: 연습285 근접 원형 · 발문 명시 회피

### 2. vendor label 정정 신호

- **관대 편향 정정 신호 (하향 -1 이상 18건)**:
  - 대표예제·유제 첫 도입 문항 (★ 1) → 8건 (원·이동·ST·FN 각 2~3건)
  - 유제 표준 유형 (★ 2) → 10건 (FN 특히 5건)
- **매몰 정정 신호 (상향 +1 13건)**:
  - 실력UP·연습_step2 통찰형 → 13건 (RT depth 3 통찰 · SYM/PD/XU 등)

### 3. 자기복제 위험 감지 (표본 내)

- 원 연습183 (중점 자취) ↔ 마-CM2-GM-원 학평 자취 학평 근접 · 3원소 시그니처 유사도 0.65 · 창작 시 주의
- 이동 연습282 (두 번 대칭 A→A₁·A₂) ↔ 쎈-CM2-GM-이동 사고력 유사 · 시그니처 0.70
- 이동 연습285 (두 원 대칭축 결정) ↔ 마-CM2-GM-이동-0664 Fagnano 원리 근접 · 시그니처 0.55
- ST 연습307 (합집합 역산 오름차순 대응) ↔ 쎈-CM2-ST-집합 사고력 유사 · 시그니처 0.60

**pick 시 대체 시그니처 필요**: 창작 슬롯에 그대로 pick 금지, 반드시 숫자·구조 변형 필수.

### 4. star-classify.mjs v1.7 → v1.8 확장 트리거

- 개념원리 CM2 C급 4파일 (원·이동·ST·FN)은 vendor-label-calibration.md v1.11 개념원리 회귀와 **다른 프로필** (v1 파일이 벤더 라벨을 반영 안 함) · v1.8에서 별도 예외 처리 필요
- 신규 조건: `if vendor == "개념원리" && filename matches /GM-원|GM-이동|CM2-ST\.md|CM2-FN\.md/ && v1_tier == "star_3": trigger v1.11-확장 예측 함수`

---

## Ⅺ. 참조

- 세션 61·62 CM2 정점 원형 매트릭스: [`bank/vendor-label-calibration.md`](vendor-label-calibration.md) Ⅹ~Ⅻ
- 개념원리 CM2 v2 (25문 표본): [`bank/mechanism-데이터-개념원리-CM2-v2.md`](mechanism-데이터-개념원리-CM2-v2.md)
- 파일럿 3 (평면좌표 20문 45%): [`bank/pilot-개념원리-CM2-GM-평면좌표-재판정.md`](pilot-개념원리-CM2-GM-평면좌표-재판정.md)
- 정독 스키마 v2.0: [`bank/정독-스키마-v2.0.md`](정독-스키마-v2.0.md)
- premium 원형 카탈로그 v1.1: [`bank/premium-원형-카탈로그.md`](premium-원형-카탈로그.md)
- v1 백업: `bank/mechanism-데이터-개념원리-CM2-{GM-원,GM-이동,ST,FN}.md.bak-v1`

---

## 변경 이력

- 2026-07-21 v2.0 — 초판. CM2 C급 4파일 (원·이동·ST·FN) 각 10문 = 40문 층화 표본 재판정. 정합률 22.5% (v1 극단 관대 편향 재확인). ★ 1 8건 + ★ 2 8건 + ★ 3 10건 + ★ 4 14건 실측 · ★ 5·premium 0건. 개념원리 CM2 C급 별도 회귀 예측 함수 v1.11-확장 초안. 4파일 중 CM2-GM-원만 B-급 상향, 나머지 3파일 C급 유지. CM2 소단원 정점 원형 8/8 정합 재검증.
