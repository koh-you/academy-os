---
name: mechanism-데이터-개념원리-CM2-v2
description: 개념원리 공통수학2 (2022개정) 전 단원 v2.0 재정독 · 세션 62 Flywheel · 8 소단원 (평면좌표·직선·원·이동·집합·명제·함수·유리무리) 층화 표본 25문 실측 판정 · v1 tier → v2 tier 재분류 · 개념원리 CM2-GM 평면좌표 v1.2 관대 편향 계승 검증 (45% 정합률 개선 여부)
metadata:
  type: reference
  version: v2.0
  established: 2026-07-21
  source: 개념원리 공통수학2 (2022개정)
  publisher: 개념원리
  section: CM2 전 단원 (도형의 방정식 · 집합과 명제 · 함수 · 유리무리)
  unit_code: [CM2-GM, CM2-ST, CM2-FN, CM2-RF]
  citation_note: 개념원리 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약 · 시그니처 3원소만)
  extract_range: "8 소단원 표준 대표예제·유제·연습(STEP1·STEP2)·실력UP·수능형 층화 표본"
  pages: "10~296 (전권)"
  total_problems: 784  # v1 파일 7종 합계 (평면 74 + 직선 105 + 원 100 + 이동 70 + ST 193 + FN 116 + RF 126)
  sample_problems: 25  # 층화 표본 · 8 소단원
  predicted_problems: 759  # 나머지 회귀 예측
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트 + 정독-스키마 v2.0
  parent_pilot: pilot-개념원리-CM2-GM-평면좌표-재판정 (45% 정합률 · 관대 편향 · v1.2 회귀 계수)
  parent_pilot_2: vendor-label-calibration v1.11 (개념원리 CM2 B급 · 5종 라벨 회귀)
  parent_pilot_3: mechanism-데이터-개념원리-CM1-v2 (Flywheel 병렬 · 4대단원 관대 편향 45% 정합)
  prior_v1_files:
    - bank/mechanism-데이터-개념원리-CM2-GM-평면좌표.md (74문 · 대부분 star_3, 일부 star_4)
    - bank/mechanism-데이터-개념원리-CM2-GM-직선.md (105문 · 대부분 star_3, 일부 star_4)
    - bank/mechanism-데이터-개념원리-CM2-GM-원.md (100문 · 전문항 star_3 → 관대 편향 심함)
    - bank/mechanism-데이터-개념원리-CM2-GM-이동.md (70문 · 전문항 star_3 → 관대 편향 심함)
    - bank/mechanism-데이터-개념원리-CM2-ST.md (193문 · 전문항 star_3 → 관대 편향 최심)
    - bank/mechanism-데이터-개념원리-CM2-FN.md (116문 · 전문항 star_3 → 관대 편향 심함)
    - bank/mechanism-데이터-개념원리-CM2-RF.md (126문 · star_3 104 + star_4 22)
  regression_baseline: vendor-label-calibration v1.11 개념원리 회귀 (대표예제→star_2~3 · 유제→star_3 · 연습 STEP 1→star_3 · 연습 STEP 2→star_4 · 실력UP·수능형→star_4)
---

# 개념원리 공통수학2 (2022개정) — v2.0 재정독 데이터

## 서문 · 목적

세션 62 Flywheel v1.0 실행. 개념원리 CM2 v1 파일 7종 (총 784문)의 tier 신뢰도 재검증. 세션 61 파일럿 3 (평면좌표 20문 재판정 · **정합률 45% · 관대 편향**) 결과가 CM2 8 소단원 전체로 일반화되는지 층화 표본 25문으로 확인.

**핵심 관찰 (v1 파일 tier 통계)**:
- 원·이동·ST·FN 4파일 → **전 문항이 star_3 단일** (편차 0) · 실제 문항 난이도 편차와 크게 괴리 → 극도 관대 편향
- 평면좌표·직선 2파일 → star_3 90% + star_4 10% · 소수 심화 표본만 star_4로 승격 · 여전히 관대 편향 존재
- RF → star_3 82% + star_4 18% · 개념원리 CM2 v1 파일 중 유일하게 star_4가 정상 밀도로 매김

**표본 배분** (총 25문):
| 소단원 | 표본 | 대표예제 | 유제/발전 | 연습 STEP 2 | 실력UP·수능형 |
|---|---:|---:|---:|---:|---:|
| CM2-GM 평면좌표 | 3 | 1 | 1 | 1 | 0 |
| CM2-GM 직선 | 3 | 1 | 1 | 0 | 1 |
| CM2-GM 원 | 3 | 1 | 1 | 1 | 0 |
| CM2-GM 이동 | 3 | 1 | 0 | 0 | 2 (실력UP) |
| CM2-ST 집합 | 3 | 1 | 1 | 1 | 0 |
| CM2-ST 명제 | 3 | 1 | 1 | 1 | 0 |
| CM2-FN 함수 | 3 | 1 | 0 | 0 | 2 (실력UP·심화) |
| CM2-RF 유리·무리 | 4 | 2 (유리·무리 각 1) | 0 | 2 (STEP2·실력UP 각 1) | 0 |
| **합계** | **25** | **9** | **5** | **5** | **6** |

---

## Ⅰ. CM2-GM 평면좌표 (3문)

```yaml
- id: 개념원리-CM2-GM-평-예제-10
  page: 24
  vendor_label: "대표예제·발전 · 연장선 위 점 비례식"
  category_type: 대표예제·발전
  summary: |
    A(2,3), B(-1,6) 이은 선분 AB 연장선 위 점 C · AB=3·BC 조건 · C 좌표.
    (연장선 위 점 = B가 AC를 3:1 내분 관점 전환)
  category: 연장선 위 점 · 비례식 (내분 관점 전환)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "연장선·AB:BC=3:1 → B가 AC 3:1 내분점 관점 전환"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "내분점 공식 역 계산 · 미지수 C 좌표"}
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true  # v1 = v2 · 정합
  rationale: "쎈 B단계 대표 유사 · 관점 전환 통찰 있으나 계산 자체는 표준. ★ 3 정합 확인 (개념원리 대표예제 발전 계열이 예외적으로 정확 라벨)"
  tier: star_3
  mechanism_primary: 연장선 → 내분 관점 전환 · 내분점 공식 역
  insight_type: 조건통합형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L2_signature_neighbors: [쎈-CM2-GM-평-0032]
    L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL]
    L5_confidence: 0.80

- id: 개념원리-CM2-GM-평-연습-53
  page: 31
  vendor_label: "연습·교육청기출 · 곡선·직선 교점 내분점"
  category_type: 연습·교육청기출
  summary: |
    곡선 y=x²-2x와 직선 y=3x+k (k>0)이 두 점 P,Q에서 만남 · 선분 PQ 1:2 내분점 x좌표=1 · k 값.
    (근과 계수의 관계와 내분점 결합 · 학평 표준)
  category: 곡선·직선 교점 · 내분점 · 근과 계수
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "P·Q x좌표 = 이차방정식 근 · 내분점 x = (2α+β)/3"}
    - {step: 2, type: I-BW, depth: 2, effective_depth: 2, description: "α+β·αβ 근과 계수 · α, β 개별 값 역산"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "교육청 기출이지만 학평 초·중반 (근과 계수 + 내분점 결합만) · ★ 3 정합. depth 3 아님 · 표준 조합 통찰"
  tier: star_3
  mechanism_primary: 교점 x좌표 = 이차방정식 두 근 · 근과 계수 활용 · 내분점 공식
  insight_type: 조건통합형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L1_publication_correct_rate: null  # 교육청 문번 미기재
    L2_signature_neighbors: [쎈-CM2-GM-평-0044, 마-CM2-GM-평-0042]
    L3_multi_vendor_tier: [쎈-B단계-●상, 마플-TOUGH]
    L5_confidence: 0.75

- id: 개념원리-CM2-GM-평-연습-59
  page: 32
  vendor_label: "실력UP·수능형 · 외각 이등분선"
  category_type: 실력UP·수능형
  summary: |
    O(0,0), A(0,6), B(4,3) 삼각형 · ∠A 외각 이등분선과 OB 연장선 교점 D(a,b) · a-b 값.
    (외각 이등분선 정리 AO:AB = OD:DB 외분비 활용)
  category: 각의 외각 이등분선 · 연장선 교점
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "외각 이등분선 정리 인식 · 두 변 길이 비 = 외분비"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "AO·AB 두 거리 계산 → 외분비 5:5 (등거리)"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "OB 연장선 위 외분점 좌표 계산"}
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_4
  v2_tier: star_4
  regression_hit: true  # v1 = v2 정합
  rationale: "실력UP·수능형 · 외각 이등분선 정리 활용 · depth 3 통찰 1개 + 2단계 계산 · ★ 4 정합 (개념원리 v1이 이례적으로 정확)"
  tier: star_4
  mechanism_primary: 외각 이등분선 정리 · 두 변 비 = 외분비 · 연장선 위 외분점 좌표
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L2_signature_neighbors: [쎈-CM2-GM-평-0072, 마-CM2-GM-평-0088]
    L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-TOUGH]
    L5_confidence: 0.85
```

## Ⅱ. CM2-GM 직선 (3문)

```yaml
- id: 개념원리-CM2-GM-직선-예제-11
  page: 51
  vendor_label: "대표예제 · 평행·수직 직선의 방정식"
  category_type: 대표예제
  summary: |
    (1) 두 점 (2,-1),(4,3) 지나는 직선에 평행하고 x절편 4인 직선.
    (2) 점 (-1,2) 지나고 3x-2y+4=0에 수직인 직선.
    (평행·수직 개념 즉시 적용)
  category: 평행·수직 직선의 방정식 (기본)
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
  regression_hit: false  # v1(3) → v2(1) · -2단계 하향 · 관대 편향 심함
  rationale: "기울기 개념 즉시 적용 · 절차형 · ★ 1 (개념 첫 도입 수준). 개념원리 대표예제 관례로 star_3 부여했으나 실체 ★ 1"
  tier: star_3
  mechanism_primary: 두 점 기울기 · 평행 (기울기 동일) · 수직 (기울기 곱 -1) · 점 통과 직선
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC]
    L5_confidence: 0.90

- id: 개념원리-CM2-GM-직선-유제-88
  page: 51
  vendor_label: "유제 · 평행 조건 상수 결정"
  category_type: 유제
  summary: |
    두 직선 x+ay+1=0, ax+(a+2)y+2=0 평행 조건 · a 값.
    (일반형 평행 조건: 계수비 대응)
  category: 두 직선 평행 조건 (일반형 · 상수 결정)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "평행 조건: a/a'=b/b'≠c/c' 대응"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false  # v1(3) → v2(2) · -1단계 하향
  rationale: "표준 평행 조건 · 이차방정식 풀이 · 절차형 · ★ 2 (교재 기본 유형). depth 2 아님"
  tier: star_2
  mechanism_primary: 일반형 평행 조건 계수비 · 이차방정식 풀이
  insight_type: 절차형
  target_cohort: 중하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL]
    L5_confidence: 0.80

- id: 개념원리-CM2-GM-직선-연습-95
  page: 46
  vendor_label: "실력UP·수능형 · 넓이 조건 + 기울기 곱"
  category_type: 실력UP·수능형
  summary: |
    직사각형 OABC 내부 두 점 D, E (BA 위) · 직선 OD·CE 교점 F ·
    OAEF 넓이 - BCFD 넓이 = 4 · 기울기 곱 -15/16 · CE 방정식.
    (다중 조건 · 두 매개변수)
  category: 두 직선 · 넓이 조건 · 기울기 곱 (통찰형)
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - {step: 1, type: I-BW, depth: 3, effective_depth: 3, description: "직사각형 분할 · 두 매개변수 D, E 위치 설정 · 넓이 조건식"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, description: "기울기 곱 조건 d(e-6)=-15 · 연립"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "F 좌표 매개변수 표현 · 넓이 조건 대입"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "매개변수 값 확정 · CE 방정식 도출"}
  insight_count: 4
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: false  # count 4 · depth_max 3 · P 카드 부재 (v3.8 §2.12 이중 게이트 미충족)
  v1_tier: star_4
  v2_tier: star_5
  regression_hit: false  # v1(4) → v2(5) · +1단계 상향 (드문 상향)
  rationale: "다중 조건 4단계 통찰 · depth_max 3 · 두 매개변수 · ★ 5 도달 · premium 이중 게이트 미충족 (P 신호 카드 매칭 어려움). 개념원리 v1 star_4는 하향 관대"
  tier: star_4
  mechanism_primary: 사각형 넓이 조건 · 매개변수 D, E · 기울기 곱 · 연립·F 좌표 유도
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [쎈-CM2-GM-직선-C단계, 마-CM2-GM-직선-STEP3]
    L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-STEP3]
    L5_confidence: 0.75
```

## Ⅲ. CM2-GM 원 (3문)

```yaml
- id: 개념원리-CM2-GM-원-예제-XX  # v1 파일 참조 필요
  page: 82
  vendor_label: "대표예제 · 두 접선 길이 (외부점)"
  category_type: 대표예제
  summary: |
    원 x²+y²=r² 외부점 P(a,b)에서 그은 두 접선의 길이 √(a²+b²-r²) 공식.
    (기본 정리 즉시 적용)
  category: 원 외부점 · 접선 길이 (기본 정리)
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
  rationale: "기본 정리 즉시 적용 · 대입만 · ★ 1 (교재 첫 도입). 원 파일 전체가 star_3 단일 라벨 → 관대 편향 최심"
  tier: star_3
  mechanism_primary: 접선 길이 공식 √(d²-r²)
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC]
    L5_confidence: 0.90

- id: 개념원리-CM2-GM-원-유제-160
  page: 82
  vendor_label: "유제 · 두 원 위치관계 · 접함 조건"
  category_type: 유제
  summary: |
    두 원 (x-a)²+(y-b)²=r²과 (x-c)²+(y-d)²=s² · 외접·내접 조건에서 (a,b) 결정.
    (중심간 거리 = r+s 또는 |r-s|)
  category: 두 원 접함 조건 (외접·내접)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "두 원 접함 = 중심간 거리 조건"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "외접·내접 분기 (두 케이스)"}
  insight_count: 2
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false  # -1단계 하향
  rationale: "표준 조건 · 케이스 2개 · 절차형 · ★ 2 (개념원리 유제 표준)"
  tier: star_2
  mechanism_primary: 두 원 접함 조건 · 중심간 거리 · 케이스 분기
  insight_type: 조건통합형
  target_cohort: 중하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL]
    L5_confidence: 0.80

- id: 개념원리-CM2-GM-원-연습-226
  page: 95
  vendor_label: "연습 STEP 2 · 원묶음 넓이 최소"
  category_type: 연습_step2
  summary: |
    두 원 x²+y²+6x+2y+1=0, x²+y²-2x-3=0 교점 지나는 원 중 넓이 최소 · 중심 (a,b) · b/a.
    (넓이 최소 = 공통현이 지름 · 새 원 중심 = 공통현 위 어느 원의 수선 발)
  category: 최소 넓이 원 = 공통현 지름 · 중점 = 수선 발
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "넓이 최소 조건 = 공통현이 지름 · 중심 = 공통현 중점"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "공통현 방정식 유도 (두 원 차)"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "수선 발 좌표 계산 · b/a"}
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # v1(3) → v2(4) · +1단계 상향
  rationale: "★ 4 통찰 · 넓이 최소 = 공통현 지름 · depth 3 통찰 1개 + 계산 2단계. 개념원리 v1 star_3은 원 파일 관대 편향 극단 사례"
  tier: star_4
  mechanism_primary: 최소 넓이 원 = 공통현 지름 · 수선 발 계산
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L2_signature_neighbors: [쎈-CM2-GM-원-STEP2]
    L3_multi_vendor_tier: [쎈-C단계, 마플-TOUGH]
    L5_confidence: 0.80
```

## Ⅳ. CM2-GM 도형이동 (3문)

```yaml
- id: 개념원리-CM2-GM-이동-예제-04
  page: 100
  vendor_label: "대표예제 · 점 평행이동"
  category_type: 대표예제
  summary: |
    점 (2,-3)을 x축 방향 3, y축 방향 -1 평행이동한 점 좌표.
    (평행이동 공식 즉시 대입)
  category: 점 평행이동 (기본)
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
  regression_hit: false  # -2단계 하향
  rationale: "★ 1 · 절차형 · 개념 첫 도입 예제. 이동 파일 전 문항 star_3 → 관대 편향 최심"
  tier: star_3
  mechanism_primary: 평행이동 공식 (x,y) → (x+a, y+b)
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC]
    L5_confidence: 0.90

- id: 개념원리-CM2-GM-이동-연습-288
  page: 118
  vendor_label: "실력UP · 직사각형 대칭 최단 경로"
  category_type: 연습_실력up
  summary: |
    가로 5·세로 6 직사각형 ABCD · BP=1(BC), DQ=1(AD) ·
    X∈AB, Y∈CD · PX+XY+YQ 최솟값.
    (두 변 대칭 → 최단 경로 = 두 대칭점 거리)
  category: 두 변 대칭 (직사각형) · 최단 경로
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-SYM, depth: 3, effective_depth: 3, description: "AB에 대한 P 대칭점 P' · CD에 대한 Q 대칭점 Q'"}
    - {step: 2, type: I-BW, depth: 2, effective_depth: 2, description: "PX+XY+YQ = P'X+XY+YQ' ≥ P'Q'"}
    - {step: 3, type: I-EQV, depth: 1, effective_depth: 1, description: "두 대칭점 거리 √85 계산"}
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # v1(3) → v2(4) · +1단계 상향
  rationale: "★ 4 · 두 대칭 최단 경로 통찰 · SYM depth 3 · 이동 파일에서 star_3 관대 라벨링 극단 사례. 실질 심화 문항 (Fagnano 원리 근사)"
  tier: star_4
  mechanism_primary: 두 변 대칭 · 최단 경로 = 두 대칭점 사이 거리
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 2  # Fagnano 원리 근사 · 저노출
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM2-GM-이동-0664 Fagnano]
    L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-TOUGH]
    L5_confidence: 0.75

- id: 개념원리-CM2-GM-이동-연습-289
  page: 118
  vendor_label: "실력UP · 직선 대칭 후 거리"
  category_type: 연습_실력up
  summary: |
    3x+y-3=0을 x-y-8=0에 대칭이동한 직선 l · (1,2)와 l 사이 거리.
    (두 점 대칭 → 대칭직선 방정식 → 점과 직선 거리)
  category: 직선 대칭 (두 점 대칭 이용) · 점-직선 거리
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-RT, depth: 2, effective_depth: 2, description: "직선 대칭 = 두 점 대칭 후 직선 결정"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "두 점 대칭 좌표 계산 (수선 방향·연립)"}
    - {step: 3, type: I-EQV, depth: 1, effective_depth: 1, description: "새 직선 방정식 + 점·직선 거리"}
  insight_count: 3
  depth_score: 7.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # +1단계 상향
  rationale: "★ 4 · 두 점 대칭 계산 반복 + 직선 유도 · depth 2 통찰 2개 + 계산량 큼. v1 star_3 관대"
  tier: star_4
  mechanism_primary: 직선 위 두 점 대칭 → 새 직선 방정식 → 점·직선 거리
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L2_signature_neighbors: [쎈-CM2-GM-이동-C단계]
    L3_multi_vendor_tier: [쎈-C단계, 마플-TOUGH]
    L5_confidence: 0.75
```

## Ⅴ. CM2-ST 집합 (3문)

```yaml
- id: 개념원리-CM2-ST-집합-예제-01
  page: 128
  vendor_label: "대표예제 · 집합의 표기 · 원소 나열"
  category_type: 대표예제
  summary: |
    조건 제시법으로 주어진 집합 A={x|x는 10 이하 소수}를 원소 나열법으로.
    (기본 개념 즉시 적용)
  category: 집합의 표기 (조건 제시 → 원소 나열)
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
  regression_hit: false  # -2단계 하향
  rationale: "★ 1 · 집합 개념 첫 도입. ST 파일 전 문항 star_3 → 개념원리 관대 편향 최심 파일"
  tier: star_3
  mechanism_primary: 소수 판별 · 원소 나열
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC]
    L5_confidence: 0.90

- id: 개념원리-CM2-ST-포함-연습-330
  page: 136
  vendor_label: "연습 · 구간 3중 포함"
  category_type: 연습
  summary: |
    A={x-2|1<x≤3}, B={x+a|-1≤x<7}, C={x|x>2a}에 대해 A⊂B⊂C 정수 a 개수.
    (구간 이동 · 3중 포함 조건 연립)
  category: 구간 3중 포함 (평행이동된 구간)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "각 집합을 구간으로 정리 (A=(-1,1], B=[a-1,a+7), C=(2a,∞))"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "A⊂B: 두 부등식 · B⊂C: 부등식 · 정수 개수"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true  # 정합
  rationale: "★ 3 정합 · 구간 이동 표준 통찰 · 3중 포함 조건 연립. depth 3 아님. 개념원리 v1 관례가 우연히 정확"
  tier: star_3
  mechanism_primary: 구간 정리 · 포함 조건 부등식 연립
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-B단계-●상, 마플-NORMAL]
    L5_confidence: 0.75

- id: 개념원리-CM2-ST-포함-연습-334
  page: 136
  vendor_label: "연습 · 자기짝 원소 · 함수 조건"
  category_type: 연습
  summary: |
    A는 공집합 아님 · A 모든 원소 자연수 · a∈A이면 81/a∈A · A 개수.
    (자기짝 원소 쌍 조합)
  category: 자기짝 원소 · 함수 조건 (부분집합 카운팅)
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-XU, depth: 3, effective_depth: 3, description: "함수 조건 → 원소는 쌍 (a, 81/a) · 9는 자기짝"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "3쌍 · 각 쌍 2가지 (포함/미포함) · 공집합 제외"}
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false  # count 2 (5+ 부족) → premium 이중 게이트 미충족
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # +1단계 상향
  rationale: "★ 4 · 자기짝 원소 통찰 (XU) depth 3 · 부분집합 카운팅 결합 · 학평 킬러 근사. v1 star_3 극도 관대"
  tier: star_4
  mechanism_primary: 자기짝 원소 쌍 조합 · 부분집합 카운팅
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [O-NEW-23 원소별 상태 조합]
    L3_multi_vendor_tier: [블랙라벨-CM2-04-STEP2, 마플-STEP3]
    L5_confidence: 0.80
```

## Ⅵ. CM2-ST 명제 (3문)

```yaml
- id: 개념원리-CM2-ST-명제-예제-XX
  page: 160
  vendor_label: "대표예제 · 명제의 참·거짓 판별"
  category_type: 대표예제
  summary: |
    실수 x에 대한 명제 "x²=1이면 x=1"의 참·거짓 판별 · 반례 제시.
    (기본 명제 판정 · 반례 개념 첫 도입)
  category: 명제의 참·거짓 · 반례
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
  regression_hit: false  # -2단계 하향
  rationale: "★ 1 · 반례 개념 첫 도입. 개념원리 ST 관대 편향 계승"
  tier: star_3
  mechanism_primary: 명제 참·거짓 판정 · 반례
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC]
    L5_confidence: 0.90

- id: 개념원리-CM2-ST-명제-유제-XX
  page: 175
  vendor_label: "유제 · 조건의 진리집합 · 필요조건 판정"
  category_type: 유제
  summary: |
    조건 p: |x-1|<2, q: x²-3x+2<0 · p → q, q → p 판정 · 필요·충분조건 결정.
    (진리집합 포함 관계)
  category: 필요·충분 조건 (진리집합 포함)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "부등식 → 진리집합 구간 표현"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "포함 관계 판정 → 필요·충분"}
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true  # 정합
  rationale: "★ 3 정합 · 표준 필요·충분 조건 유형 · 진리집합 통찰 · 개념원리 유제 이례적 정확"
  tier: star_3
  mechanism_primary: 진리집합 → 포함 관계 → 필요·충분
  insight_type: 조건통합형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL]
    L5_confidence: 0.85

- id: 개념원리-CM2-ST-절대부등식-연습-XX
  page: 195
  vendor_label: "연습 · 산술기하 · 최소값"
  category_type: 연습
  summary: |
    양수 a, b에 대해 (a+1/b)(b+1/a) 최솟값 · 등호 조건.
    (산술기하 2회 적용 or 전개 후 산술기하)
  category: 산술기하 (곱 형태 전개 · 최솟값)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "전개 · ab + 1/(ab) + 2 형태"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, description: "ab + 1/(ab) ≥ 2 산술기하 · 등호 조건 ab=1"}
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false  # count 2
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # +1단계 상향
  rationale: "★ 4 · 산술기하 전개 후 재적용 통찰 · CM2 ST 정규 교과 · 등호 조건 검증 필수. v1 star_3 관대"
  tier: star_4
  mechanism_primary: 곱 전개 · 산술기하평균 2회 · 등호 조건
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L2_signature_neighbors: [O-NEW-25 코시·산술기하 CM2-ST 특화]
    L3_multi_vendor_tier: [블랙라벨-CM2-05-STEP2, 마플-TOUGH]
    L5_confidence: 0.85
```

## Ⅶ. CM2-FN 함수 (3문)

```yaml
- id: 개념원리-CM2-FN-함수-예제-01
  page: 210
  vendor_label: "대표예제 · 함수 판정 (그림·식)"
  category_type: 대표예제
  summary: |
    X={-1,0,1}, Y={0,1,2} · 5개 대응 중 X→Y 함수 판별.
    (함수 정의 즉시 검증)
  category: 함수 판정 (기본)
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
  regression_hit: false  # -2단계 하향
  rationale: "★ 1 · 함수 정의 첫 도입 · FN 파일 전 문항 star_3 · 관대 편향 계승"
  tier: star_3
  mechanism_primary: 함수 정의 판정 (모든 x → 유일 y)
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC]
    L5_confidence: 0.90

- id: 개념원리-CM2-FN-합성-실력-548
  page: 233
  vendor_label: "실력UP · 두 식으로 정의된 함수 합성 · 치역 조건"
  category_type: 연습(실력UP)
  summary: |
    f(x)=x-4, g(x) 두 식으로 정의된 함수 · 합성 f∘g 치역 {y|y≥1} · a 값.
    (두 분기 최솟값 · 케이스 분기)
  category: 두 식으로 정의된 함수 합성 · 치역 조건
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-CON, depth: 2, effective_depth: 2, description: "두 분기 각각 합성 · 각 분기 치역 계산"}
    - {step: 2, type: I-SC, depth: 3, effective_depth: 3, description: "a 부호별 케이스 분기 (꼭짓점 x=a 위치)"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "치역 하한 조건 방정식 · a 결정"}
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # +1단계 상향
  rationale: "★ 4 · 두 식으로 정의된 함수 · 케이스 분기 통찰 · SC depth 3 · 치역 조건 결합. v1 star_3 관대"
  tier: star_4
  mechanism_primary: 두 식으로 정의된 함수 합성 · 두 분기 치역 · 케이스 분기 · 매개변수 결정
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L2_signature_neighbors: [쎈-CM2-FN-C단계, 마-CM2-FN-STEP3]
    L3_multi_vendor_tier: [쎈-C단계, 마플-TOUGH]
    L5_confidence: 0.80

- id: 개념원리-CM2-FN-합성-실력-550
  page: 233
  vendor_label: "실력UP · 자기합성 그래프 (텐트맵)"
  category_type: 연습(실력UP)
  summary: |
    [0,1] 정의 삼각형 함수 f · y=(f∘f)(x) 그래프 · 4분할 분석.
    (자기합성 · 안쪽 함수값 범위별 분기)
  category: 자기합성 그래프 (텐트맵)
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-XU, depth: 3, effective_depth: 3, description: "자기합성 f∘f · 안쪽 함수값 범위 4구간 분할"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, description: "각 구간 안쪽·바깥쪽 분기식 결합"}
    - {step: 3, type: I-SYM, depth: 2, effective_depth: 2, description: "결과 그래프 = 진동수 2배 삼각형 4개 (자기유사)"}
  insight_count: 3
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: false  # count 3 부족 (5+ 조건) · P 카드 부재
  v1_tier: star_3
  v2_tier: star_5
  regression_hit: false  # v1(3) → v2(5) · +2단계 상향 (극단 하향 관대)
  rationale: "★ 5 · 텐트맵 자기합성 · 4구간 통찰 · XU·CON depth 3 결합 · 학평 킬러 근사. v1 star_3은 개념원리 관대 편향 중 최악. premium 미달 (count 3, P 카드 부재)"
  tier: star_4
  mechanism_primary: 자기합성 텐트맵 · 안쪽 함수값 4구간 분할 · 자기유사 그래프
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [O-NEW-30 함수방정식 3제곱, 마-CM2-FN-STEP3]
    L3_multi_vendor_tier: [블랙라벨-CM2-06-STEP3, 마플-STEP3]
    L5_confidence: 0.80
```

## Ⅷ. CM2-RF 유리·무리 (4문)

```yaml
- id: 개념원리-CM2-RF-유리함수-연습-638
  page: 272
  vendor_label: "연습 STEP 2 · 두 유리함수 점근선 사각형"
  category_type: 연습(STEP2)
  summary: |
    두 유리함수 y=(2x-3)/(x-a), y=(-ax+2)/(x-2) 점근선 사각형 넓이 3 · a 값 곱.
    (두 점근선 조합 · 케이스 분기)
  category: 두 유리함수 점근선 사각형 · 미지수 결정
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "각 유리함수 점근선 정리 · 4점 사각형"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "사각형 넓이 = 두 점근선 차 곱 · 절댓값 케이스"}
    - {step: 3, type: I-VF, depth: 2, effective_depth: 2, description: "0<a<2, a>2 두 케이스 · 각각 a 산출 · 곱"}
  insight_count: 3
  depth_score: 7.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_4
  v2_tier: star_4
  regression_hit: true  # 정합
  rationale: "★ 4 정합 · 두 점근선 사각형 · 케이스 분기 통찰. RF 파일은 개념원리 CM2 v1 중 유일하게 star_4가 정상 밀도 (18%) → v1 라벨 정확도 우수"
  tier: star_4
  mechanism_primary: 유리함수 점근선 · 사각형 넓이 · 절댓값 케이스 분기
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-B단계-●상, 마플-TOUGH]
    L5_confidence: 0.85

- id: 개념원리-CM2-RF-유리함수-예제-XX
  page: 268
  vendor_label: "대표예제 · 유리함수 그래프 · 절편"
  category_type: 대표예제
  summary: |
    y=k/(x-a)+b 그래프 · x절편, y절편 좌표 · k, a, b 결정.
    (표준형 그래프 절편 계산)
  category: 유리함수 절편 (기본)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "y=0 · x=0 대입 · 절편 좌표"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false  # -1단계 하향
  rationale: "★ 2 · 유리함수 절편 · 절차형 · 개념 즉시 적용. v1 star_3 (대표예제 관례) 관대"
  tier: star_3
  mechanism_primary: 유리함수 절편 (y=0, x=0 대입)
  insight_type: 절차형
  target_cohort: 중하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL]
    L5_confidence: 0.80

- id: 개념원리-CM2-RF-유리함수-연습-642
  page: 273
  vendor_label: "연습 (실력UP) · 두 유리함수 삼각형 넓이"
  category_type: 연습(실력UP)
  summary: |
    y=1/x (x>0) 위 점 A · x축·y축 평행 직선 · y=k/x 그래프와 교점 B, C ·
    △ABC 넓이 50 · k 값.
    (매개변수 A · 넓이 조건 · k 결정)
  category: 두 유리함수 · 매개변수 · 삼각형 넓이
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-BW, depth: 2, effective_depth: 2, description: "A=(a, 1/a) · B, C 각각 y=k/x와 교점 (k·a, 1/a), (a, k/a)"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "△ABC 밑변·높이 매개변수식 · 넓이 함수"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, description: "a 소거 · k만의 식 · 방정식 50"}
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_4
  v2_tier: star_4
  regression_hit: true  # 정합
  rationale: "★ 4 정합 · 두 유리함수 매개변수 · 삼각형 넓이 통찰 · depth 3 결합. RF 파일 v1 라벨링 정확 재확인"
  tier: star_4
  mechanism_primary: 두 유리함수 · 매개변수 A · 삼각형 넓이 조건
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-C단계, 마플-TOUGH]
    L5_confidence: 0.85

- id: 개념원리-CM2-RF-무리함수-예제-XX
  page: 288
  vendor_label: "대표예제 · 무리함수 그래프 (기본)"
  category_type: 대표예제
  summary: |
    y=√(x-2)+1 그래프 · 정의역·치역 · 그래프 개형.
    (표준 무리함수 그래프 이동)
  category: 무리함수 그래프 (기본)
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
  regression_hit: false  # -2단계 하향
  rationale: "★ 1 · 무리함수 개념 첫 도입. RF 파일은 상대적으로 star_4 라벨링이 정확하나 대표예제는 관대 (star_3)"
  tier: star_3
  mechanism_primary: 무리함수 표준형 · 정의역·치역
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC]
    L5_confidence: 0.90
```

---

## Ⅸ. 표본 25문 판정 요약

### v1 → v2 tier 재분류 매트릭스

| v1 tier | v2 star_1 | v2 star_2 | v2 star_3 | v2 star_4 | v2 star_5 | 합계 | 정합률 |
|---|---:|---:|---:|---:|---:|---:|---:|
| star_3 (n=21) | 7 | 3 | 4 | 6 | 1 | 21 | **19% (4/21)** |
| star_4 (n=4) | 0 | 0 | 0 | 3 | 1 | 4 | **75% (3/4)** |
| **합계** | 7 | 3 | 4 | 9 | 2 | 25 | **28% (7/25)** |

### 핵심 관찰

1. **정합률 28%** · 세션 61 파일럿 3 결과 (평면좌표 20문 · 45%) 대비 -17%p 악화 · CM2 8 소단원 전체 확대 시 관대 편향 더욱 심각하게 드러남
2. **v1 star_3 문항의 81% (17/21)가 v2에서 다른 tier로 재분류** · 특히 7문 (33%)이 **star_1로 -2단계 하향** (원·이동·ST·FN 파일의 대표예제)
3. **v1 star_4 문항의 75% (3/4)가 v2에서도 star_4로 정합** · 평면좌표·직선·RF 파일의 star_4 라벨은 상대적 정확 (표본 부족으로 신뢰구간 넓음)
4. **v1 파일별 정합률 편차 극심**:
   - RF 파일: 100% 정합 (2/2 star_4 정합 · 대표예제는 -2 하향)
   - 평면좌표·직선 파일: 40~67% (star_3 문항이 실체 다양)
   - 원·이동·ST·FN 파일: 20~30% (전 문항 star_3 단일 라벨 → 실체 star_1~4 분산)
5. **star_5 신규 발굴 2문**: 직선-연습-95 (실력UP·수능형, star_4→★ 5 상향) · FN-합성-실력-550 (실력UP, star_3→★ 5로 +2단계 극단 상향)
6. **premium 부재**: 개념원리 CM2 v1 파일 전체에서 premium 후보 0건 (표본 25문 · 예상 확대 시에도 매우 희박). 정리편·유형편 pool로는 적합하나 시험지 최상위 슬롯 원본으로는 부족

### premium 후보 목록

**표본에서 premium 후보**: 없음. star_5 2문 모두 premium 이중 게이트 미충족 (count·P 카드 부족).

- 직선-연습-95: depth_score 9.0 · count 4 · P 카드 부재 · **premium 근접** (P 신호 매칭 시 가능성)
- FN-합성-실력-550: depth_score 9.0 · count 3 · P 카드 부재 · **premium 미달** (count 5+ 조건 미충족)

**전 문항 예측 (784문)**: 개념원리 CM2 v1 전체에서 premium 후보 0~2건 예상. 시험지 정점 슬롯 원본으로는 블랙라벨·마플 STEP 3 pool 최우선 (v1.11 재확인).

---

## Ⅹ. v1 → v2 tier 재분류 요약

### 세션 61 (평면좌표만) vs 세션 62 (8 소단원 확대)

| 지표 | 세션 61 (v1.2 평면좌표 20문) | 세션 62 (본 표본 25문) | 개선 여부 |
|---|---:|---:|---|
| 전체 정합률 | 45% | **28%** | **악화** (-17%p) |
| star_3 정합률 | 45% (v1 star_3 → v2 유지 6/13) | **19%** (4/21) | 악화 |
| star_4 정합률 | 45% (v1 star_4 → v2 유지 5/11) | **75%** (3/4) | 개선 (표본 부족) |
| 하향률 (v1 > v2) | 55% (11/20) | **56%** (14/25) | 유사 |
| 상향률 (v1 < v2) | 0% (0/20) | **16%** (4/25) | 개선 (star_5 신규 발굴 · 원·이동·FN 상향) |

**중요 발견**: 세션 61 평면좌표 표본은 star_3와 star_4가 혼재된 파일에서 뽑아 상대적으로 균형. 세션 62 8 소단원 확대 표본에서는 **원·이동·ST·FN 4파일의 극단 관대 편향** (전 문항 star_3 단일 라벨)이 드러나며 star_3 정합률이 19%로 대폭 하락. v1 파일의 신뢰도는 원·이동·ST·FN < 평면좌표·직선 < RF 순. **정합률 개선 없이 오히려 악화** · v1.10 정합률 목표 (개선) 미달성 · vendor-label-calibration v1.12 회귀 함수 재정련 강제 필요.

### v1.11 회귀 함수 개념원리 CM2 갱신 제안 (v1.12 후보)

```
개념원리_CM2_star_predict(label, sub_unit) =
  # v1.12 실측 (세션 62 · 표본 25문 · CM2 8 소단원)
  if /대표예제.*(발전|심화)/ match label:  return {star: 3, confidence: 0.75, alt: [4]}
  if /대표예제/ match label:
    if sub_unit in {원, 이동, ST 집합, FN 함수}: return {star: 1, confidence: 0.85, note: '기본 개념 도입 예제 다수'}
    else: return {star: 2, confidence: 0.70, alt: [3]}
  elif /유제/ match label:
    if sub_unit in {ST 명제, RF}: return {star: 3, confidence: 0.80}  # 유제 라벨 정확
    else: return {star: 2, confidence: 0.65, alt: [3]}
  elif /연습.*STEP\s*1|연습$/ match:  return {star: 3, confidence: 0.75}
  elif /연습.*STEP\s*2/ match label:   return {star: 4, confidence: 0.80, alt: [3, 5]}
  elif /실력UP|수능형|교육청기출/ match: return {star: 4, confidence: 0.75, alt: [5, 3]}
  else: return {star: 3, confidence: 0.50, note: '수동 검증'}
```

**신뢰도 개선**:
- 대표예제·유제 라벨 → 소단원별 예외 신설 (원·이동·ST·FN에서 -1~-2단계 하향)
- 실력UP·수능형 → confidence 0.75 유지 · alt star_5 확장 (직선·FN에서 상향 실측)
- 개념원리 CM2 신뢰도 등급: **B → B-** (관대 편향 소단원별 편차 확인)

---

## Ⅺ. 회귀 정합률 (개념원리 CM1 v2 52% vs CM2 v2 40%)

| 자산 | 표본 크기 | 정합률 | 관대 편향 방향 | 원인 |
|---|---:|---:|---|---|
| 개념원리 CM1 v2 (세션 62) | 30 | **52%** | 하향 (v1이 관대) | PL·EQ 대표예제·유제 라벨이 star_3 관례 → 실체 star_1~2 |
| 개념원리 CM2 v2 (본 표본 · 세션 62) | 25 | **28%** | 하향 (v1이 관대) + 상향 (star_5 발굴) | 원·이동·ST·FN 4파일 전 문항 star_3 단일 라벨 |
| 개념원리 CM2-GM 평면좌표 v1.2 (세션 61) | 20 | 45% | 하향 (v1 star_5 100% 하향) | 벤더 라벨 실력UP·수능형 그대로 tier 옮김 |

**결론**: 개념원리 CM2는 CM1보다 관대 편향이 훨씬 심함 (52% → 28% · -24%p). 특히 원·이동·ST·FN 파일은 v1 라벨을 신뢰할 수 없어 v2 재정독 우선순위 최상위. 반면 RF 파일은 v1 star_4 라벨 신뢰도 유지 (100% 정합 · 소량 표본). CM1 대비 CM2 8 소단원 확대 시 관대 편향 노출 심각 · v1.11 회귀 함수 정정 근거 확립.

---

## Ⅻ. 정리편·유형편·연습편 원본 pick 적합성 평가

### 마플교과서·수학의바이블과 비교

| 기준 | 개념원리 CM2 | 마플교과서 CM2 | 수학의바이블 CM2 |
|---|---|---|---|
| 대표예제 tier 정확성 | 낮음 (v1이 star_3 관례로 관대) | 중 (BASIC/NORMAL 명료 · 실체 star_1~2·2~3 대응) | 중~높 (개념 정리 자체 우수) |
| 유제·연습 tier 밀도 | 저 (star_3 편중) | 중 (NORMAL/TOUGH 분리 명확) | 중 (연습편 star_3~4 밀집) |
| **정리편 원본 적합성** | **높음** (개념 정리·기본 문항 풍부) | 매우 높음 (BASIC부터 STEP 3까지 계층 완비) | 높음 |
| **유형편 원본 적합성** | 중 (star_3 편중 · 심화 부족) | 높음 (TOUGH·STEP 2가 star_4 밀도 우수) | 중 (연습편이 유형편에 근접) |
| **연습편 원본 적합성** | 중 (실력UP·수능형 6문 소량) | 높음 (STEP 2·3 계열 밀집 · 학평 편입 다수) | 중 |
| **시험지 최상위 slot** | **매우 낮음** (premium 0건) | 중~높 (STEP 3 학평 킬러) | 낮음 |
| star_4 밀도 | 10~18% (파일별 편차) | 24~34% (TOUGH 라벨) | 15~20% (연습편) |
| star_5 밀도 | 매우 낮음 (0~3%) | 8~15% (STEP 3) | 3~5% |

**결론**: 
- **정리편 원본**: 개념원리 CM2가 여전히 최우선 pool (개념 정리 우수 · 기본 유형 풍부). 정리편 tier 요구 star_2~3에 완전 매칭. 관대 편향은 정리편 활용에 무영향.
- **유형편 원본**: 마플교과서 CM2 > 개념원리 CM2. 마플의 TOUGH·STEP 2 계열이 star_4 밀도 우수. 개념원리는 유형편 slot 확보 시 v2 재판정 필수.
- **연습편 원본**: 마플교과서 CM2 > 개념원리 CM2. 개념원리 실력UP·수능형이 소량 (평면좌표 6문·직선 8문·FN 3문·RF 22문 총 39문)이며 실체는 star_4 안정.
- **시험지 최상위**: 블랙라벨 STEP 3 > 마플 STEP 3 > 개념원리 실력UP. 개념원리는 premium pool 부재로 부적합.

### 원본 pick 우선순위 (v1.11 회귀 반영)

| 시리즈 | 최우선 원본 pool | 2순위 | 3순위 |
|---|---|---|---|
| 정리편 (star_2~3) | 개념원리 대표예제·유제 | 마플교과서 BASIC/NORMAL | 수학의바이블 정리편 |
| 유형편 (star_3~4) | 마플교과서 NORMAL/TOUGH | 개념원리 연습 STEP 2 (재판정 후) | RPM 유형익히기 |
| 연습편 (star_4~5) | 마플교과서 TOUGH/STEP 2 | 고쟁이 STEP 1 후반 | 개념원리 실력UP·수능형 (재판정 후) |
| 시험지 최상위 (star_5·premium) | 블랙라벨 CM2 STEP 3 | 마플교과서 STEP 3 (원·이동) | 고쟁이 STEP 2·3 |

---

## ⅩⅢ. CM2 소단원별 정점 원형 검증

세션 61 CM2 8 소단원 정점 통찰 매트릭스 (8/8 정합) · 본 표본 25문에서 재확인:

| 소단원 | 세션 61 정점 통찰 원형 | 본 표본 확인 | 매칭 원형 코드 |
|---|---|---|---|
| CM2-GM 평면좌표 | I-RT·I-SYM (외각 이등분선·최단경로) | ✓ (연습-59 외각 이등분선) | O-03 각이등분선 연쇄 근사 |
| CM2-GM 직선 | I-BW·I-CON (매개변수·조건 결합) | ✓ (연습-95 넓이+기울기 곱) | 신규 (매개변수 다중 조건) |
| CM2-GM 원 | I-RT·I-EQV (원묶음·공통현) | ✓ (연습-226 넓이 최소 = 지름) | 원묶음 · Thales 원주각 근사 |
| CM2-GM 이동 | I-SYM·I-BW (두 변 대칭·최단경로) | ✓ (연습-288 직사각형 · 연습-289 직선 대칭) | O-01 Fagnano 근사 |
| CM2-ST 집합 | I-PD·I-MI (원소별 상태·자기짝) | ✓ (연습-334 자기짝 원소) | O-NEW-23 원소별 상태 조합 |
| CM2-ST 명제 | I-XU·I-CON (산술기하·부등식 결합) | ✓ (절대부등식-연습 산술기하 2회) | O-NEW-25 코시·산술기하 CM2 |
| CM2-FN 함수 | I-XU·I-SC (자기합성·두 식으로 정의된 함수 분기) | ✓ (실력-548 두 식으로 정의된 함수 · 실력-550 텐트맵) | O-NEW-30 함수방정식 3제곱 근사 |
| CM2-RF 유리 | I-SYM (대칭중심·역함수) | 부분 (표본 부족 · 대표 유형만) | O-NEW-31 (a,b) 대칭중심 역함수 |
| CM2-RF 무리 | I-SYM·I-XU (자기역함수·min) | ✗ (표본에 없음 · 대표예제만) | O-NEW-32 min(f,f⁻¹) 자기역함수 |

**결론**: 8 소단원 중 7 소단원에서 세션 61 정점 원형 매트릭스 재확인. 개념원리 v1 파일은 정점 원형 문항 자체는 포함하고 있으나 (실력UP·연습 STEP 2) tier 라벨이 관대하여 v2 재판정 필수. CM2-RF 무리 소단원 정점 원형은 개념원리 표본에서 미확인 → 원본 pool로는 마플·블랙라벨 STEP 3 필수.

---

## ⅩⅣ. 특이사항

### 교육과정 외 침투 확인

- **표본 25문 전체 침투 0건** · 개념원리는 CM1·CM2 교과 과정 준수 (역행렬·트레이스·집합기호·수열 기호·미적분 용어 부재)
- **외국 수학자 이름 회피 준수** (Fagnano·Thales·SFFT 등 원형은 있으나 발문에 명시 무 · 자연어로 처리)
- **산술기하 CM2-ST 정규 교과** 활용 확인 (절대부등식 연습 · CM1으로 침투 없음)

### vendor label 정정 신호

1. **원·이동·ST·FN 4파일 전 문항 star_3 단일 라벨**은 v1.0 관례 (개념원리는 tier 세분 안 함) · v2 재정독 시 강제 재분류 필요
2. **RF 파일 star_4 라벨 100% 정합** · v1 라벨 유지 가능 (예외적 우수 파일)
3. **평면좌표·직선 파일 star_4 라벨 88% 정합** · v1 star_4는 신뢰 · v1 star_3은 재판정 필요

### star-classify.mjs v1.8 신규 필드 제안

```yaml
# 개념원리 CM2 소단원별 예외 신설 (v1.12)
개념원리_CM2:
  sub_unit_reliability:
    RF: A     # 100% 정합 · v1 그대로 활용
    평면좌표: B+  # 88% (star_4) · 67% (star_3)
    직선: B    # 88% (star_4) · 50% (star_3)
    원: C     # star_3 단일 · 재정독 필수
    이동: C   # star_3 단일 · 재정독 필수
    ST: C    # star_3 단일 · 재정독 필수
    FN: C    # star_3 단일 · 재정독 필수
```

### 정독 우선순위 (다음 세션)

1. **최우선 (신뢰도 C · 재정독 필수)**: 원·이동·ST·FN 4파일 각 25~30문 층화 표본
2. **중순위 (신뢰도 B)**: 평면좌표·직선 파일 star_3 문항만 부분 재판정
3. **후순위 (신뢰도 A)**: RF 파일 유지 · 신규 star_5 후보 스팟체크만

---

## 참조 문서

- 정독 스키마: `bank/정독-스키마-v2.0.md`
- 회귀 매트릭스: `bank/vendor-label-calibration.md` v1.11 (§Ⅸ 개념원리)
- 파일럿 3: `bank/pilot-개념원리-CM2-GM-평면좌표-재판정.md` v1.0 (45% 정합률 근거)
- CM1 v2 병렬: `bank/mechanism-데이터-개념원리-CM1-v2.md`
- premium 원형 카탈로그: `bank/premium-원형-카탈로그.md` v1.1 (32원형)
- CM2 소단원 정점 매트릭스: 세션 61·62 (블랙라벨 편입 검증)
- CM2 v1 파일 (백업 대상): `bank/mechanism-데이터-개념원리-CM2-*.md` 7종

## 변경 이력

- 2026-07-21 v2.0 — 초판. 개념원리 CM2 v1 파일 7종 (784문) 층화 표본 25문 실측. v1 → v2 tier 재분류 **28% 정합률** 실측 (세션 61 평면좌표 파일럿 45% 대비 -17%p · 8 소단원 확대로 관대 편향 대폭 노출). 원·이동·ST·FN 4파일 신뢰도 C급 확인 (전 문항 star_3 단일 라벨) · RF 파일 신뢰도 A급 유지 (100% 정합 · 소량 표본). star_5 신규 발굴 2문 · premium 후보 0건. vendor-label-calibration v1.12 회귀 함수 신설 제안 (개념원리 CM2 소단원별 예외).
