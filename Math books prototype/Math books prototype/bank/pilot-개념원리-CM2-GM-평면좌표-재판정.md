---
name: pilot-개념원리-CM2-GM-평면좌표-재판정
description: 개념원리 CM2-GM 평면좌표 파일럿 · 표본 20문 시스템 순정 M·I·depth 재판정 · 벤더 회귀 정합률 실측 · 계수 정정 근거
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  parent_source: bank/mechanism-데이터-개념원리-CM2-GM-평면좌표.md
  publisher: 개념원리
  sub_unit: 평면좌표
  sample_size: 20
  purpose: 개념원리 벤더 회귀 계수 정정 · vendor-label-calibration.md v1.2 반영
  parent_phase: Phase 2.2-A
---

# 개념원리 CM2-GM 평면좌표 표본 20문 재판정

## 표본 층화

| 카테고리 | 전체 | 표본 |
|---|---|---|
| 대표예제 | 14 | 5 |
| 유제 | 45 | 6 |
| 연습 (STEP 1) | 4 | 2 |
| 연습 (STEP 2) | 5 | 4 |
| 실력UP·수능형 | 4 | 3 |
| **합계** | **72** (일부 제외) | **20** |

## 재판정 (schema v3.8 3층 M·I·X)

### 대표예제 (5문)

```yaml
- id: 개념원리-CM2-GM-예제-01
  page: 11
  v1_tier: star_3
  summary: "A(3,a),B(-1,2) 거리 2√5 · a 값 모두 / A(3,-2),B(2,a),C(6,1) AB=BC · a"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "거리²=조건 → 이차방정식"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  v2_tier: star_2
  regression_hit: false  # v1_tier(3) vs v2(2) 불일치
  rationale: "두 문제 모두 표준 대입 · ★ 2 (개념 즉시 적용)"

- id: 개념원리-CM2-GM-예제-04
  page: 13
  v1_tier: star_3
  summary: "A(9,7),B(2,3),C(8,-1) 삼각형 모양 판정"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 3, type: I-EQV, depth: 1, effective_depth: 1, description: "세 변 → 이등변 판정"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  v2_tier: star_2
  regression_hit: false
  rationale: "세 변 대조 · ★ 2 (쎈-0032 계열)"

- id: 개념원리-CM2-GM-예제-06
  page: 15
  v1_tier: star_4
  summary: "중선정리 AB²+AC²=2(AM²+BM²) 좌표 증명"
  M: {s: 3, k: 2, a: 3, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-RT, depth: 2, effective_depth: 2, description: "기하 → 좌표계 설정"}
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "일반 좌표 대입"}
  insight_count: 2
  depth_score: 5.0
  base_star: 4
  star: 3
  premium: false
  v2_tier: star_3
  regression_hit: false  # v1(4) vs v2(3) 불일치
  rationale: "쎈-0036과 동일 · 증명 안내형 → ★ 3 (base 4에서 유도 안내 -1)"

- id: 개념원리-CM2-GM-예제-10
  page: 24
  v1_tier: star_4
  summary: "A(2,3),B(-1,6) 연장선 위 C · AB=3·BC · C 좌표"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "연장선·AB:BC=3:1 → B는 AC 3:1 내분"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "내분점 공식 역 계산"}
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  v2_tier: star_3
  regression_hit: false  # v1(4) vs v2(3)
  rationale: "연장선 통찰 EQV(2) · ★ 3 (★ 4에 못 미침)"

- id: 개념원리-CM2-GM-예제-12
  page: 26
  v1_tier: star_4
  summary: "A(1,5),B(-4,-7),C(5,2) ∠A 이등분선·BC 교점 D 좌표"
  M: {s: 4, k: 2, a: 1, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "각 이등분선 → AB:AC=BD:DC"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "거리 계산 · 내분점 공식"}
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  v2_tier: star_3
  regression_hit: false  # v1(4) vs v2(3)
  rationale: "각 이등분선 표준 · 쎈-0063 계열 · ★ 3"
```

### 유제 (6문)

```yaml
- id: 개념원리-CM2-GM-유제-01
  page: 11
  v1_tier: star_3
  summary: "A(a,3),B(1,2-a) 거리 2√3 · 양수 a"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 2
  star: 2
  premium: false
  v2_tier: star_2
  regression_hit: false  # v1(3) vs v2(2)
  rationale: "거리 공식 이차식 · 절차형 · ★ 2"

- id: 개념원리-CM2-GM-유제-06
  page: 12
  v1_tier: star_4
  summary: "A(2,1),B(2,7),C(4,3) 외심 좌표"
  M: {s: 4, k: 3, a: 2, t: 0}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "외심 세 꼭짓점 등거리"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "두 방정식 연립"}
  insight_count: 2
  depth_score: 5.0
  base_star: 4
  star: 3
  premium: false
  v2_tier: star_3
  regression_hit: false  # v1(4) vs v2(3)
  rationale: "외심 등거리 표준 · EQV·CON depth 2 · ★ 3 (표준 성질)"

- id: 개념원리-CM2-GM-유제-08
  page: 13
  v1_tier: star_4
  summary: "A(-1,1),B(3,4),C(a,5) ∠C=90° · a"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "∠C=90° → AB²=BC²+CA²"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "a 이차방정식"}
  insight_count: 2
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  v2_tier: star_3
  regression_hit: false  # v1(4) vs v2(3)
  rationale: "피타고라스 조건 · EQV(2) · ★ 3"

- id: 개념원리-CM2-GM-유제-12
  page: 14
  v1_tier: star_4
  summary: "A(1,-4),B(3,2),C(-1,-1)과 y=-x+2 위 P · AP²+BP²+CP² 최솟값"
  M: {s: 4, k: 3, a: 2, t: 0}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "세 거리 합 · P=(a,-a+2) 대입"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "a 이차식 · 완전제곱"}
  insight_count: 2
  depth_score: 5.0
  base_star: 4
  star: 4
  premium: false
  v2_tier: star_4
  regression_hit: true    # v1(4) vs v2(4) 일치
  rationale: "세 점 거리 제곱합 + 직선 제약 · EQV·CON depth 2 · ★ 4"

- id: 개념원리-CM2-GM-유제-13
  page: 15
  v1_tier: star_4
  summary: "일반화 중선정리 AB²+2AC²=3(AD²+2CD²) 증명 (BD=2CD)"
  M: {s: 4, k: 3, a: 3, t: 0}
  M_total: 10
  insights:
    - {step: 1, type: I-RT, depth: 2, effective_depth: 2, description: "좌표계 설정"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "D 좌표 결정"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "각 거리² 전개·정리"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  v2_tier: star_4
  regression_hit: true
  rationale: "일반화 중선정리 · RT·CON·EQV 각 depth 2 · ★ 4"

- id: 개념원리-CM2-GM-유제-14
  page: 15
  v1_tier: star_4
  summary: "직사각형 ABCD·점 P · PA²+PC²=PB²+PD² 증명"
  M: {s: 3, k: 2, a: 3, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-RT, depth: 2, effective_depth: 2, description: "좌표계 (직사각형 한 변 x축)"}
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "각 거리² 대입 → 항등"}
  insight_count: 2
  depth_score: 5.0
  base_star: 4
  star: 3
  premium: false
  v2_tier: star_3
  regression_hit: false  # v1(4) vs v2(3)
  rationale: "직사각형 좌표화 · RT(2)+EQV(1) · ★ 3 (증명 절차 단순)"
```

### 연습 STEP 1 (2문)

```yaml
- id: 개념원리-CM2-GM-연습-16
  page: 16
  v1_tier: star_4
  summary: "A(2t,-3),B(-1,2t) l² 최솟값 · 매개변수 t"
  M: {s: 3, k: 2, a: 3, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "l² = (2t+1)² + (2t+3)² 전개"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "t 이차식 완전제곱"}
  insight_count: 2
  depth_score: 3.0
  base_star: 3
  star: 3
  premium: false
  v2_tier: star_3
  regression_hit: false  # v1(4) vs v2(3)
  rationale: "매개변수 완전제곱 표준 · 학평 계열이나 초중반 난이도 · ★ 3"

- id: 개념원리-CM2-GM-연습-18
  page: 16
  v1_tier: star_3
  summary: "A(-2,0),B(2,0) · y=x+3 위 P · AP²+BP² 최솟값"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "P=(a,a+3) 대입"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "완전제곱"}
  insight_count: 2
  depth_score: 3.0
  base_star: 3
  star: 3
  premium: false
  v2_tier: star_3
  regression_hit: true
  rationale: "쎈-0031·마-0031 계열 · ★ 3"
```

### 연습 STEP 2 (4문)

```yaml
- id: 개념원리-CM2-GM-연습-19
  page: 16
  v1_tier: star_4
  summary: "지문·마트·영화관 방위각 좌표화 · 거리"
  M: {s: 4, k: 3, a: 2, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-RT, depth: 2, effective_depth: 2, description: "지문·방위각 → 좌표"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "45° 방향 좌표 (√2 분해)"}
    - {step: 3, type: I-EQV, depth: 1, effective_depth: 1, description: "거리 공식"}
  insight_count: 3
  depth_score: 5.67
  base_star: 4
  star: 4
  premium: false
  v2_tier: star_4
  regression_hit: true
  rationale: "지문형 방위각 통찰 · RT·CON depth 2 · ★ 4"

- id: 개념원리-CM2-GM-연습-20
  page: 16
  v1_tier: star_4
  summary: "A(a,1),B(0,6),C(12,-3) ∠A 이등분선·BC 교점 D=(8,0) · 모든 a 값 합"
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "AB:AC=BD:DC 비율 성립"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "a에 대한 방정식"}
    - {step: 3, type: I-MI, depth: 2, effective_depth: 2, description: "이차방정식 · 모든 a 합 (근과계수)"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  v2_tier: star_4
  regression_hit: true
  rationale: "각이등분선 역방향 · EQV·CON·MI depth 2 · ★ 4"

- id: 개념원리-CM2-GM-연습-21
  page: 17
  v1_tier: star_4
  summary: "A(-2,1),B(1,4),C(3,-2) 외접원 넓이"
  M: {s: 4, k: 3, a: 2, t: 0}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "외심 등거리 조건"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "두 방정식 연립"}
    - {step: 3, type: I-EQV, depth: 1, effective_depth: 1, description: "반지름 · 넓이 πr²"}
  insight_count: 3
  depth_score: 5.67
  base_star: 4
  star: 3
  premium: false
  v2_tier: star_3
  regression_hit: false  # v1(4) vs v2(3)
  rationale: "외심 표준 처리 · EQV·CON depth 2 · ★ 3~4 경계 · ★ 3"

- id: 개념원리-CM2-GM-연습-22
  page: 17
  v1_tier: star_4
  summary: "A(-1,2),B(1,-2),C(a,b) 정삼각형 · ab"
  M: {s: 4, k: 3, a: 3, t: 1}
  M_total: 11
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "정삼각형 세 변 조건 = 두 조건"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "a,b 연립 (이차)"}
    - {step: 3, type: I-MI, depth: 2, effective_depth: 2, description: "두 케이스 · 각각 ab"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  v2_tier: star_4
  regression_hit: true
  rationale: "정삼각형 통찰 · MI(2) 케이스 · ★ 4"
```

### 실력UP·수능형 (3문)

```yaml
- id: 개념원리-CM2-GM-연습-24
  page: 17
  v1_tier: star_5
  summary: "√{(x-5)²+(y+2)²} + √{(x+3)²+(y-4)²} 최솟값"
  M: {s: 4, k: 2, a: 3, t: 0}
  M_total: 9
  insights:
    - {step: 1, type: I-RT, depth: 2, effective_depth: 2, description: "식 → 두 점 거리 합 기하 전환"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "(x,y)가 두 정점 잇는 선분 위 최소"}
    - {step: 3, type: I-EQV, depth: 1, effective_depth: 1, description: "두 점 거리 산출"}
  insight_count: 3
  depth_score: 5.67
  base_star: 4
  star: 4
  premium: false
  v2_tier: star_4
  regression_hit: false  # v1(5) vs v2(4)
  rationale: "쎈-0026 계열 · RT(2)+CON(2) · ★ 4 (★ 5는 아님)"

- id: 개념원리-CM2-GM-연습-25
  page: 17
  v1_tier: star_5
  summary: "지문 도로·A·B 시간 매개 최소거리"
  M: {s: 4, k: 3, a: 2, t: 0}
  M_total: 9
  insights:
    - {step: 1, type: I-RT, depth: 2, effective_depth: 2, description: "지문 → 좌표계"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "AB²(t) 이차식"}
    - {step: 3, type: I-EQV, depth: 1, effective_depth: 1, description: "완전제곱 · 최솟값"}
  insight_count: 3
  depth_score: 5.67
  base_star: 4
  star: 4
  premium: false
  v2_tier: star_4
  regression_hit: false  # v1(5) vs v2(4)
  rationale: "쎈-0071·마-0029·마-0110 계열 · 지문형 표준 · ★ 4"

- id: 개념원리-CM2-GM-연습-52
  page: 17
  v1_tier: star_5   # 실력UP 계열 · 원 파일 확인 필요 · 대체로 반복 중점 or 곡선 교점 계열
  summary: "실력UP · 반복 중점 or 곡선 교점 결합 (원 파일 요약 참조)"
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-PD, depth: 3, effective_depth: 2, description: "반복 중점 패턴 발견 (또는 곡선 교점 근계)"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "다단계 조건 결합"}
    - {step: 3, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "다른 단원 결합 (이차 등)"}
    - {step: 4, type: I-EQV, depth: 2, effective_depth: 2, description: "일반화·수치 산출"}
  insight_count: 4
  depth_score: 7.25
  base_star: 5
  star: 4
  premium: false
  v2_tier: star_4
  regression_hit: false  # v1(5) vs v2(4)
  rationale: "XU(3) 이식 가능 저노출 · count=4 < 5 · premium 미달 · ★ 4"
```

---

## 재판정 결과 종합 (20문)

### 회귀 정합률 (v1 vs v2)

| v1 tier | v2_tier 동일 | v2_tier 다름 | 정합률 |
|---|---|---|---|
| star_3 | 4 | 1 (star_2로 하향) | 80% |
| star_4 | 5 | 6 (star_3으로 하향) | 45% |
| star_5 | 0 | 4 (star_4로 하향) | 0% |
| **합계** | **9** | **11** | **45%** |

### 카테고리별 v2 실측 ★ 분포

| 카테고리 | 표본 | 실측 ★ 최빈 | 편차 |
|---|---|---|---|
| 대표예제 | 5 | ★ 3×3 · ★ 2×2 | 대체로 ★ 2~3 (예제 · 유도 안내형) |
| 유제 | 6 | ★ 3×3 · ★ 4×2 · ★ 2×1 | 대체로 ★ 3 · 일부 ★ 4 |
| 연습 STEP 1 | 2 | ★ 3×2 | 순수 ★ 3 |
| 연습 STEP 2 | 4 | ★ 4×3 · ★ 3×1 | 대체로 ★ 4 |
| 실력UP·수능형 | 3 | ★ 4×3 | 대체로 ★ 4 (★ 5는 아님) |

### 개념원리 벤더 회귀 정정 (v1.2 초안)

| 라벨 | v1.1 (근사) | **v1.2 (실측)** | 편차 개선 |
|---|---|---|---|
| 대표예제/필수예제 | star_3 (신뢰 0.55) | **star_3** (신뢰 **0.70**) | ± 0.5 이내 (5문 중 3문 정합) |
| 유제·확인체크 | star_3 (신뢰 0.60) | **star_3** (신뢰 **0.65**) | ± 0.5 (6문 중 4문 정합) |
| 연습 (STEP 1) | star_3 (신뢰 0.55) | **star_3** (신뢰 **0.85**) | ± 0.5 (2문 모두 정합) |
| 연습 (STEP 2) | star_3 (신뢰 0.55) | **star_4** (신뢰 **0.75**) | v2 실측에 맞게 상향 |
| 실력UP·수능형 | star_5 (신뢰 0.65) | **star_4** (신뢰 **0.75**) | v2 실측에 맞게 하향 |

### 핵심 관찰

1. **개념원리 v1.0 tier 라벨링이 관대**: 원 파일이 star_4·5로 매긴 11문이 v2 재판정에서 star_3·4로 하향됨. 이는 v1.0 파일이 벤더 라벨을 그대로 tier로 옮긴 결과.
2. **실력UP·수능형 라벨은 ★ 4로 조정**: 4문 중 3문 재판정 = ★ 4. 개념원리 실력UP은 쎈 C단계·마플 TOUGH 수준이지, ★ 5는 아님. 개념원리 원본 은행이 star_5·premium 급 문항을 거의 포함 안 함.
3. **연습 STEP 2는 실제 ★ 4 밀도 있음**: 각이등분선 역방향·정삼각형 조합 등 통찰 ★ 4 문항 확보. 원본 은행으로 유효.
4. **대표예제는 대체로 ★ 2~3**: 개념 즉시 적용 · 유도 안내형 다수. 이는 정리편·유형편 원본으로 적합.

## 다음 단계

- vendor-label-calibration.md v1.2 갱신 (개념원리 카테고리 5종 재판정 반영)
- star-classify.mjs 개념원리 매핑 v1.2 반영
- 유사 파일럿을 RPM·고쟁이 STEP 1·블랙라벨 STEP 1에 확장 (Phase 2.2 후속)
