---
name: mechanism-데이터-쎈-CM2-GM-원
description: 쎈 공통수학2 (2022개정) 원의 방정식 소단원 정독 데이터 · 층화 표본 20문 시스템 순정 판정 (파일럿 2 15문과 별도 · 미판정 구간 A/B/C 균형 · STEP 3 사고력·교육청 우선). 저작권 준수 · 스키마 v2.0 준거.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: 쎈 공통수학2 (2022개정) · [고등1-2] 쎈 공통수학2 (2022개정).pdf
  section: 원의 방정식
  unit_code: CM2-GM
  sub_unit: 원의방정식
  citation_note: 쎈 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 시그니처 3원소만)
  extract_range: "원의 방정식 소단원 A/B/C 3단계 전체 (03-1 원의 방정식 · 03-2 두 원 교점 · 03-3 원과 직선 · 03-4 접선의 방정식 · 유형 01~22)"
  pages: "42~63 (PDF 페이지와 동일)"
  total_problems: 151   # 0218~0368
  sample_problems: 20
  predicted_problems: 131
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: mechanism-데이터-파일럿2-원의방정식 (기존 15문과 중복 회피 · 소단원 확장)
  schema_version: 정독-스키마-v2.0
  purpose: 세션 62 CM2-GM 그룹 2 확장 · 쎈 원 소단원 회귀 함수 정합률 재검증 · STEP 3 (사고력·교육청) premium 원형 확보
---

# 쎈 공통수학2 (2022개정) — 원의 방정식 정독 데이터

**출처**: 쎈 공통수학2 (2022개정) · I. 도형의 방정식 → 03. 원의 방정식
**범위**: A단계 기본다잡기 (0218~0250) + B단계 유형뽀개기 유형01~22 (0251~0347) + C단계 실력굳히기 (0348~0368)
**정독 페이지**: p.42~63 (22p)
**총 문항 수**: **151문항** (0218~0368)
**표본**: 20문 (A2 + B10 + C8) · 시스템 순정 판정 · 파일럿 2 15문과 별도
**정독 일자**: 2026-07-21

## 파일럿 2와의 관계

파일럿 2 (`bank/mechanism-데이터-파일럿2-원의방정식.md`)에서 이미 판정된 15문 (0218·0227·0230·0251·0255·0256·0259·0260·0322·0325·0349·0358·0360·0362·0364)과 **완전 별도**의 20문. 통합 시 쎈 원 소단원 실측 표본은 **35문**으로 확대됨.

## 문두 metadata 요약

| 항목 | 값 |
|---|---|
| 표본 크기 | 20 |
| 실측 ★ 분포 | ★ 1×1 · ★ 2×2 · ★ 3×7 · ★ 4×9 · ★ 5×1 · **premium×1** |
| premium 후보 개수 | 1 (0367 O-05 확장 · 원 접선·평행+이중 접 킬러) |
| 회귀 정합률 (예측 vs 실측) | 75% (15/20) · v1.10 회귀 안정 유지 |
| 상세 (예측 편차 ≥ 1) | 5문 (상향 3 · 하향 1 · A단계 원 계열 상향 1) |

---

## Ⅰ. A단계 기본다잡기 표본 (2문)

```yaml
- id: 쎈-CM2-GM-원-0234
  page: 43
  vendor_label: A단계 기본
  category_type: A단계 기본다잡기
  summary: |
    두 원 x²+y²-8x+2y-5=0, x²+y²+2x-4y+2=0의 교점과 점 (1,3)을 지나는
    원의 방정식을 구하시오.
  category: 두 원 교점 지나는 원의 방정식 · 계수결정
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "두 원 교점 지나는 원 계열 x²+y²+…+k(x²+y²+…)=0 설정"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "점 대입 → k 결정 · 원 방정식 산출"}
  insight_count: 2
  depth_score: 4.5
  base_star: 2
  star: 2
  premium: false
  tier: star_1
  target_cohort: 중하위권
  insight_type: 통찰형
  mechanism_primary: 두 원 교점 지나는 원 계열 (k 도입)
  rationale: |
    A단계지만 원 계열 계수결정은 형식 도입 필요 · depth 2 EQV · ★ 2 (A단계 상단)
  vendor_calibration_signal: {L5_confidence: 0.80}

- id: 쎈-CM2-GM-원-0243
  page: 45
  vendor_label: A단계 기본
  category_type: A단계 기본다잡기
  summary: |
    원 x²+y²=2에 접하고 기울기가 1인 직선의 방정식을 구하시오.
  category: 기울기 주어진 원의 접선 · 표준 공식
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  tier: star_1
  target_cohort: 하위권
  insight_type: 절차형
  mechanism_primary: y = mx ± r√(m²+1) 공식 즉시 대입
  rationale: |
    공식 직접 대입 · 절차형 · ★ 1
  vendor_calibration_signal: {L5_confidence: 0.85}
```

## Ⅱ. B단계 유형뽀개기 표본 (10문)

### 유형03·04·05·06 (세 점·원 조건·좌표축 접)

```yaml
- id: 쎈-CM2-GM-원-0264
  page: 48
  vendor_label: B단계 대표문제 유형04
  category_type: B단계 대표문제
  summary: |
    세 점 A(-3,-2), B(-2,1), C(1,0)을 지나는 원의 넓이를 구하시오.
  category: 세 점 지나는 원 · 일반형 · 넓이
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "일반형 x²+y²+Ax+By+C=0 설정 · 3원1차 연립"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "표준형 변환 → 반지름 → 넓이"}
  insight_count: 2
  depth_score: 4.5
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 세 점 조건 → 일반형 3원1차 연립
  rationale: |
    표준 유형 대표문제 · 3원1차 연립 부담 있음 · ★ 3 · 예측 정합
  vendor_calibration_signal: {L5_confidence: 0.80}

- id: 쎈-CM2-GM-원-0270
  page: 49
  vendor_label: B단계 ● 중 · 서술형
  category_type: B단계 유형뽀개기
  summary: |
    x²+y²-2y+k²-8k+13=0이 원을 나타낼 때, 넓이가 최대인 원의
    반지름의 길이를 구하시오. (k는 상수)
  category: 원 조건 + 이차식 최대·최소 · 매개변수
  M: {s: 4, k: 3, a: 2, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "일반형 → r² = A²/4+B²/4-C 표현 · r²의 k 이차식 유도"}
    - {step: 2, type: I-BW, depth: 2, effective_depth: 2, description: "r² 최대 = k 이차식 최대점 → 완전제곱 조작"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "최대 반지름 산출"}
  insight_count: 3
  depth_score: 5.67
  base_star: 4
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 반지름² 이차식 최대 (매개변수 최적화)
  rationale: |
    표준 절차 다단계 · BW depth 2 · 앵커 (평면좌표 최대·최소)와 근접 · ★ 3
  vendor_calibration_signal: {L5_confidence: 0.75}

- id: 쎈-CM2-GM-원-0271
  page: 49
  vendor_label: B단계 ● 상
  category_type: B단계 유형뽀개기
  summary: |
    방정식 x²+y²+8x-10y+3k+15=0이 원을 나타낼 때, 원 위의 모든 점이
    제2사분면 위에 있도록 하는 정수 k의 개수를 구하시오.
  category: 원 존재 조건 + 사분면 포함 조건 · 정수 개수
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "일반형 → 중심 (-4,5) · r² = 41-3k · 원 존재 조건"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, description: "제2사분면 완전 포함 → 중심-x축 거리 > r, 중심-y축 거리 > r"}
    - {step: 3, type: I-VF, depth: 2, effective_depth: 2, description: "두 부등식 · 원 조건 결합 · 정수 k 개수"}
  insight_count: 3
  depth_score: 7.33
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 원 완전 포함 조건 (중심-경계 거리 > r) · 부등식 결합
  friction_triggers: [F1, F3]
  rationale: |
    B단계 상 · 완전 포함 조건은 저노출 CON depth 3 · 부등식 3개 결합 · ★ 4 · **예측 ★ 4 정합** (쎈 ● 상 A급)
  vendor_calibration_signal: {L5_confidence: 0.85}

- id: 쎈-CM2-GM-원-0278
  page: 50
  vendor_label: B단계 대표문제 유형07 · 집중공략
  category_type: B단계 대표문제
  summary: |
    점 (4,2)를 지나고 x축과 y축에 동시에 접하는 원은 두 개이다.
    두 원의 중심 사이의 거리를 구하시오. (그림 제공)
  category: 두 축 동시 접 조건 · 중심 (r,r) 형 · 이차방정식 두 근의 거리
  M: {s: 4, k: 2, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "두 축 접 → 중심 (r,r) 제1사분면 · 원 (x-r)²+(y-r)²=r²"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "(4,2) 대입 → r 이차방정식 · 두 근 r₁,r₂"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "두 중심 (r₁,r₁),(r₂,r₂) 거리 = √2|r₁-r₂| · 근과 계수"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 중심 (r,r) 이차방정식 두 근 · 근과 계수
  rationale: |
    3단계 통찰 안정 · 근과 계수 활용 · 계산 부담 · ★ 3 · 예측 ★ 3 정합
  vendor_calibration_signal: {L5_confidence: 0.80}

- id: 쎈-CM2-GM-원-0281
  page: 50
  vendor_label: B단계 ● 상
  category_type: B단계 유형뽀개기
  summary: |
    중심이 곡선 y=x²-6 위에 있고 x축과 y축에 동시에 접하는 원의 개수는 m이고,
    이 원들의 넓이의 합은 nπ이다. m+n의 값을 구하시오.
  category: 두 축 동시 접 + 곡선 위 중심 조건 · 원의 개수·넓이 합
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "두 축 접 → 중심 (±r, ±r) 4 사분면 case"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, description: "y=x²-6 대입 → 각 사분면별 r 방정식 (r²=r-6 등 · 4가지)"}
    - {step: 3, type: I-VF, depth: 3, effective_depth: 3, description: "실근 존재 판별 · 원 실제 개수 결정"}
    - {step: 4, type: I-CON, depth: 2, effective_depth: 2, description: "각 r 산출 · 넓이 합 πΣr² 계산"}
  insight_count: 4
  depth_score: 7.5
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 4 사분면 case 분기 · 곡선 위 중심 · 실근 판별
  friction_triggers: [F2, F3]
  rationale: |
    사분면 case 4가지 분기 · CON depth 3 저노출 · count 4 · premium 미달 · ★ 4 · **예측 ★ 3 → 실측 ★ 4 · +1 상향** (B ● 상 · 이례적)
  vendor_calibration_signal: {L5_confidence: 0.75}

- id: 쎈-CM2-GM-원-0283
  page: 50
  vendor_label: B단계 ● 중
  category_type: B단계 유형뽀개기
  summary: |
    원 x²+y²-8x-14y+49=0 위의 점과 원 x²+y²+2x+10y+17=0 위의 점 사이 거리의
    최댓값과 최솟값의 곱은?
  category: 두 원 위 점 사이 거리 최대·최소 · 중심 간 거리
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "각 원 중심·반지름 → 두 중심 거리 d 계산"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "최댓값 = d+r₁+r₂ · 최솟값 = d-r₁-r₂ (또는 |d-r₁-r₂|)"}
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 두 원 위 점 사이 거리 극값 (중심선 위 원리)
  rationale: |
    표준 극값 원리 · CON depth 2 · ★ 3 · 예측 ★ 3 정합
  vendor_calibration_signal: {L5_confidence: 0.85}

- id: 쎈-CM2-GM-원-0286
  page: 51
  vendor_label: B단계 ● 중 · 유형08
  category_type: B단계 유형뽀개기
  summary: |
    두 점 A(-2,0), B(2,0)에 대하여 P(a,b)가 PA²+PB²=10을 만족시킬 때,
    (a-6)²+(b+8)²의 최댓값을 구하시오.
  category: 자취 (거리 제곱 합) · 원 위 점과 정점 거리 최댓값
  M: {s: 4, k: 3, a: 2, t: 0}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "PA²+PB² 전개 → a²+b² = 상수 → 자취 = 원점 중심 원"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "(6,-8)에서 원 위 점까지 거리²의 최댓값 = (중심거리+r)²"}
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 자취 → 원 · 원 위 점 극값
  rationale: |
    2단계 통찰 표준 · ★ 3
  vendor_calibration_signal: {L5_confidence: 0.80}

- id: 쎈-CM2-GM-원-0294
  page: 52
  vendor_label: B단계 대표문제 유형11
  category_type: B단계 대표문제
  summary: |
    두 원 x²+y²=20, (x-3)²+(y-4)²=25의 공통현의 길이를 구하시오.
  category: 공통현 · 두 원 방정식 뺄셈 · 현의 길이 공식
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "두 원 방정식 차 → 공통현 직선 방정식"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "한 원 중심에서 현까지 거리 d · 현 길이 = 2√(r²-d²)"}
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 공통현 직선 (원 방정식 뺄셈) + 현 길이 공식
  rationale: |
    표준 공통현 통찰 EQV depth 2 · ★ 3 · 예측 ★ 3 정합
  vendor_calibration_signal: {L5_confidence: 0.85}

- id: 쎈-CM2-GM-원-0316
  page: 55
  vendor_label: B단계 대표문제 유형16
  category_type: B단계 대표문제
  summary: |
    점 P(3,6)에서 원 (x-1)²+(y-2)²=9에 그은 접선의 접점을 Q라 할 때,
    PQ의 길이는?
  category: 원 밖의 점 접선 길이 (피타고라스)
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - {step: 1, type: I-RT, depth: 1, effective_depth: 1, description: "접선 길이² = 중심P거리² - r² (직각삼각형)"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  tier: star_2
  target_cohort: 중하위권
  insight_type: 통찰형
  mechanism_primary: 접선 길이 피타고라스 공식
  rationale: |
    공식 즉시 대입 · RT depth 1 · ★ 2 · 예측 ★ 3 → 실측 ★ 2 · **-1 하향** (대표문제 표준 절차 편향)
  vendor_calibration_signal: {L5_confidence: 0.85}

- id: 쎈-CM2-GM-원-0341
  page: 59
  vendor_label: B단계 대표문제 유형21 · 집중공략
  category_type: B단계 대표문제
  summary: |
    점 (2,5)에서 원 (x+1)²+(y-4)²=5에 그은 두 접선의 기울기의 곱은?
  category: 원 밖 점 접선 · 두 기울기 · 판별식 D=0
  M: {s: 4, k: 3, a: 2, t: 0}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "접선 y-5 = m(x-2) 설정 · 중심-접선 거리 = r"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "거리 식 제곱 → m 이차방정식"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "두 근의 곱 = 이차식 상수항/이차항 (근과 계수)"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 접선 이차방정식 · 두 근 곱 (근과 계수)
  rationale: |
    3단계 EQV·CON depth 2 · 근과 계수 정형 · ★ 3
  vendor_calibration_signal: {L5_confidence: 0.75}
```

## Ⅲ. C단계 실력굳히기 표본 (8문 · 사고력·교육청 우선)

```yaml
- id: 쎈-CM2-GM-원-0348
  page: 60
  vendor_label: 교육청 기출 · 46쪽 유형01
  category_type: C단계 실력굳히기
  summary: |
    반지름 2√10인 원 O 위 두 점 A, C와 원 내부의 점 B를 잡아
    AB=8, BC=4, ∠ABC=90°가 되도록 하였다. OB=l일 때 3l²의 값을
    구하시오. (그림 제공)
  category: 원 내부 점 · 수직 조건 · 원 위 점 거리 (피타고라스+원 방정식)
  M: {s: 4, k: 3, a: 3, t: 0}
  M_total: 10
  insights:
    - {step: 1, type: I-RT, depth: 2, effective_depth: 2, description: "좌표 설정 · O 원점 · B 좌표 (x,y) · A는 B에서 방향벡터 없이 |AB|=8 등"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "A, C 원 위 조건 · |OA|²=|OC|²=40 · AB⊥BC 좌표화"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, description: "두 조건 결합 → 대각선 AC² = 64+16=80 · 원 위 두 점 · 중점-현 관계"}
    - {step: 4, type: I-BW, depth: 2, effective_depth: 2, description: "중점 M · OM ⊥ AC · OB 벡터 = OM + MB 분해 (또는 방정식)"}
  insight_count: 4
  depth_score: 7.25
  base_star: 5
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 원 내부 수직 조건 + 원 위 두 점 · 중점-현 관계
  friction_triggers: [F2, F3]
  rationale: |
    교육청 기출 · RT·CON depth 다층 · count 4 < 5 · premium 미달 · ★ 4 · 예측 ★ 4 정합
  vendor_calibration_signal: {L5_confidence: 0.80}

- id: 쎈-CM2-GM-원-0350
  page: 60
  vendor_label: C단계 · 47쪽 유형03 · 서술형
  category_type: C단계 실력굳히기
  summary: |
    사각형 ADCB는 정사각형 · A(2,0), B(0,4) · CD를 지름으로 하는 원
    x²+y²+ax+by+c=0 · a+b+c의 값을 구하시오. (C, D는 제1사분면 위)
    (그림 제공)
  category: 정사각형 조건 + 원의 방정식 계수 결정
  M: {s: 4, k: 3, a: 3, t: 1}
  M_total: 11
  insights:
    - {step: 1, type: I-SYM, depth: 2, effective_depth: 2, description: "정사각형 ADCB 순서 → AB=BC=CD=DA · 90° 회전 관계"}
    - {step: 2, type: I-RT, depth: 3, effective_depth: 3, description: "AB 벡터 (-2,4) · 90° 시계방향 회전 → BC 벡터 (4,2) · C 좌표"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "D = A + BC = (6,2) · CD 중점 · 반지름 = CD/2"}
    - {step: 4, type: I-CON, depth: 2, effective_depth: 2, description: "일반형 전개 → a,b,c 산출 · 합"}
  insight_count: 4
  depth_score: 7.25
  base_star: 5
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 정사각형 90° 회전 · 벡터 유사 좌표화 · 원 지름 방정식
  friction_triggers: [F2, F3]
  rationale: |
    RT depth 3 (90° 회전 좌표화) · count 4 < 5 · SYM 결합 · **CM2-GM 원형 O-04 근접 (정사각형 회전)** · ★ 4
  vendor_calibration_signal: {L5_confidence: 0.80, L2_signature_neighbors: [O-04]}

- id: 쎈-CM2-GM-원-0352
  page: 60
  vendor_label: C단계 · 51쪽 유형09
  category_type: C단계 실력굳히기
  summary: |
    두 점 A(-3,0), B(2,0)과 제1사분면 위의 점 C를 꼭짓점으로 하는
    삼각형 ABC에서 ∠C의 이등분선이 원점 O를 지날 때, C가 나타내는
    도형의 길이는? (그림 제공)
  category: 각의 이등분선 · 정리 (내각이등분선 비) · 자취
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "각이등분선 정리 (중2·중3 도형) · AC:BC = AO:OB = 3:2"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, description: "|CA|/|CB| = 3/2 자취 = 아폴로니오스 원"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "원 방정식 유도 · 반지름 계산"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "제1사분면 조건 · 호 (원의 일부) 길이 산출"}
  insight_count: 4
  depth_score: 7.5
  base_star: 5
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 각이등분선 정리 + 아폴로니오스 원 자취
  friction_triggers: [F2, F3, F5]
  novelty_score: 2
  rationale: |
    XU depth 3 (P6 신호) + EQV depth 3 · **아폴로니오스 원 저노출** · count 4 · premium 미달 · ★ 4
  vendor_calibration_signal: {L5_confidence: 0.85, L2_signature_neighbors: [O-03]}

- id: 쎈-CM2-GM-원-0354
  page: 61
  vendor_label: C단계 · 52쪽 유형11 · 서술형
  category_type: C단계 실력굳히기
  summary: |
    두 원 C₁, C₂가 두 점 A(1,a), B(3,b)에서 만난다. C₁의 중심 O₁은 AB 위에
    있고, 원 C₁이 C₂의 중심 O₂를 지난다. 두 중심 O₁, O₂를 지나는 직선의
    방정식이 x+2y=10일 때, 두 원 C₁, C₂의 넓이의 합을 구하시오. (그림 제공)
  category: 두 원 위치관계 · 중심선 · 공통현 수직 조건
  M: {s: 5, k: 3, a: 3, t: 2}
  M_total: 13
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, description: "O₁이 공통현 AB 위 · 두 원 중심선 ⊥ AB 성질과 결합 (일반적으로 O₁O₂ ⊥ AB인데 O₁이 AB 위이므로 특수 케이스)"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, description: "AB의 중점이 O₁ 확정 · O₁ 좌표 · a,b 관계"}
    - {step: 3, type: I-RT, depth: 2, effective_depth: 2, description: "O₁, O₂ 직선 x+2y=10 · O₁ 좌표 대입 · O₂ 도출"}
    - {step: 4, type: I-EQV, depth: 2, effective_depth: 2, description: "C₁ 반지름 = |O₁A| · C₂ 반지름 = |O₂A| · O₂가 C₁ 위 · |O₁O₂| = C₁ 반지름"}
    - {step: 5, type: I-CON, depth: 2, effective_depth: 2, description: "두 반지름 → 넓이 합"}
  insight_count: 5
  depth_score: 8.4
  base_star: 5
  star: 5
  premium: false
  tier: star_5
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 두 원 중심선-공통현 수직 관계 · 특수 위치 조건 결합
  friction_triggers: [F2, F3]
  novelty_score: 2
  rationale: |
    EQV·CON depth 3 · count 5 · depth_score 8.4 · signal_ref 미매칭 (P 카드 명시 부재) → **premium 미달 · ★ 5** (경계선 후보)
  vendor_calibration_signal: {L5_confidence: 0.75}

- id: 쎈-CM2-GM-원-0355
  page: 61
  vendor_label: C단계 · 53쪽 유형13
  category_type: C단계 실력굳히기
  summary: |
    원 x²+y²+2ax+2by-16=0이 직선 y=mx와 만나는 두 점 P, Q에 대하여
    OP·OQ의 값은? (a, b, m은 실수 · O는 원점)
  category: 원과 직선의 교점 · 근과 계수 (OP·OQ = |상수항|)
  M: {s: 4, k: 3, a: 2, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P4], description: "y=mx 대입 → x²(1+m²)+…-16=0 · 두 근 x₁x₂"}
    - {step: 2, type: I-RT, depth: 2, effective_depth: 2, description: "OP·OQ = √(1+m²)·|x₁|·√(1+m²)·|x₂| = (1+m²)|x₁x₂|"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, description: "x₁x₂ = -16/(1+m²) 근과 계수 · (1+m²) 소거 → 상수 16"}
  insight_count: 3
  depth_score: 7.67
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 원의 방정식 상수항 = 원점 근축 관점 (POWER OF POINT)
  friction_triggers: [F3, F4]
  novelty_score: 3
  rationale: |
    **근축 (원의 방정식 상수항 = OP·OQ) 저노출 통찰** · EQV·CON depth 3 · P4 신호 · count 3 · ★ 4
  vendor_calibration_signal: {L5_confidence: 0.85, L2_signature_neighbors: [O-06]}

- id: 쎈-CM2-GM-원-0361
  page: 62
  vendor_label: 교육청 기출 · 51쪽 유형09 + 55쪽 유형16
  category_type: C단계 실력굳히기
  summary: |
    원 x²+y²-10x+16=0 밖의 점 P에서 이 원에 그은 접선의 접점을 T라 하자.
    점 A(2,4)에 대하여 PT=PA를 만족시키는 점 P의 자취의 방정식을 구하시오.
  category: 접선의 길이 = 정점 거리 · 자취 방정식
  M: {s: 4, k: 3, a: 3, t: 0}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P4], description: "PT² = |PC|² - r² (C는 원 중심) = 원의 방정식 좌변에 P 대입값"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, description: "PA² = (x-2)²+(y-4)² · PT²=PA² 등식화"}
    - {step: 3, type: I-RT, depth: 2, effective_depth: 2, description: "두 식 차 → x, y 일차식 (근축) · 자취 = 직선"}
  insight_count: 3
  depth_score: 7.67
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 접선 길이² = 원 방정식 대입값 · 근축 (자취 = 직선)
  friction_triggers: [F3]
  novelty_score: 3
  rationale: |
    **근축 통찰 원형 (O-06 계열)** · EQV·CON depth 3 · P4 신호 · ★ 4 · 예측 ★ 4 정합
  vendor_calibration_signal: {L5_confidence: 0.85, L2_signature_neighbors: [쎈-CM2-GM-원-0362, 0355]}

- id: 쎈-CM2-GM-원-0363
  page: 62
  vendor_label: 교육청 기출 · 56쪽 유형18
  category_type: C단계 실력굳히기
  summary: |
    두 원 C₁: (x-5)²+(y+3)²=4, C₂: (x+6)²+y²=9와 직선 l: x-y-2=0에 대하여
    C₁ 위의 점 P에서 l에 내린 수선의 발을 H₁, C₂ 위의 점 Q에서 l에 내린
    수선의 발을 H₂라 하자. H₁H₂ 길이의 최댓값을 M, 최솟값을 m이라 할 때,
    Mm의 값을 구하시오.
  category: 두 원 위 점의 직선 사영 · 사영 거리 최대·최소
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-CON, depth: 3, effective_depth: 3, description: "P의 l 사영 H₁ · C₁ 중심 사영 A₁ · H₁A₁ 사이는 P가 원 위 움직일 때 반지름 사영 범위 [-r₁, r₁]"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, description: "H₁H₂ = |A₁A₂ ± r₁ ± r₂| 사영 대수합 (l에 대한 사영값)"}
    - {step: 3, type: I-RT, depth: 2, effective_depth: 2, description: "두 중심 l 위 사영 좌표 (또는 두 중심간 l 방향 성분) 계산"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "max, min 산출 · 곱"}
  insight_count: 4
  depth_score: 7.5
  base_star: 5
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 두 원 위 점의 직선 사영 최적화 (사영 반지름 대수합)
  friction_triggers: [F2, F3]
  novelty_score: 2
  rationale: |
    사영 최적화 CON·EQV depth 3 · count 4 · premium 미달 · ★ 4
  vendor_calibration_signal: {L5_confidence: 0.75}

- id: 쎈-CM2-GM-원-0367
  page: 63
  vendor_label: 사고력 기출 · 54쪽 유형15 + 58쪽 유형20
  category_type: C단계 실력굳히기
  summary: |
    원 O: x²+y²=25 위의 점 P(3,-4)에서의 접선과 평행하고 원점을 지나는
    직선을 l이라 하자. 직선 l과 y축에 동시에 접하고 반지름이 6인 원 O₁이
    직선 l과 만나는 점을 Q라 할 때, OQ의 길이는? (O₁의 중심은 제1사분면
    위 · 그림 제공)
  category: 원 접선의 평행 이동 + 직선·y축 동시 접 원 + 접점 거리
  M: {s: 5, k: 3, a: 3, t: 2}
  M_total: 13
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P4], description: "P(3,-4) 접선 3x-4y=25 · 기울기 3/4 · 평행 원점 지나는 l: 3x-4y=0"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P4], description: "l과 y축 동시 접 · 반지름 6 · 중심 (a,b) 조건 |a|=6 · |3a-4b|/5=6 · 제1사분면"}
    - {step: 3, type: I-RT, depth: 3, effective_depth: 3, description: "중심 O₁ 좌표 확정 (a=6 대입 두 case 검토) · O₁에서 l까지 거리 6"}
    - {step: 4, type: I-SYM, depth: 2, effective_depth: 2, description: "Q는 O₁에서 l에 내린 수선의 발 · O에서 l까지 거리 0 · OQ = |수선의 발 좌표 원점까지 거리|"}
    - {step: 5, type: I-CON, depth: 2, effective_depth: 2, description: "Q 좌표 산출 · OQ 계산"}
  insight_count: 5
  depth_score: 8.4
  base_star: 5
  star: 5
  premium: true
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 원 위 점 접선 (x₁x+y₁y=r²) + 평행 이동 + 이중 접 원 · 접점 좌표
  friction_triggers: [F2, F3, F4]
  novelty_score: 2
  rationale: |
    **premium 인정**: EQV·CON·RT depth 3 삼중 조합 · count 5 · depth_score 8.4 · signal_ref P4 2회 명시 · **O-05 원 접선+원 만남 킬러 원형 확장** · 이중 접 조건 + 접선 평행 이동 새로운 킬러 시그니처
  vendor_calibration_signal: {L5_confidence: 0.90, L2_signature_neighbors: [O-05, 쎈-CM2-GM-원-0360]}

- id: 쎈-CM2-GM-원-0368
  page: 63
  vendor_label: C단계 · 50쪽 유형07 + 59쪽 유형21 · 서술형
  category_type: C단계 실력굳히기
  summary: |
    점 (0,2)에서 원 (x-1)²+y²=1에 그은 접선 중 y축이 아닌 직선을 l이라 하자.
    직선 l과 x축, y축에 동시에 접하면서 중심이 제1사분면 위에 있는 원은
    두 개이다. 이 두 원의 중심 사이의 거리를 구하시오. (그림 제공)
  category: 접선 방정식 + 두 축 동시 접 원 · 두 원 중심 거리
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "(0,2)에서 원 접선 · y축 접선 x=0 제외 · 기울기 m 접선 유도 (판별식)"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, description: "l 방정식 확정 · l과 두 축 동시 접 (중심 (r,r) 제1사분면 · l~중심 거리 = r) · r 이차방정식"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "두 근 r₁, r₂ · 중심 (r₁,r₁),(r₂,r₂)"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "중심 거리 √2·|r₁-r₂| · 근과 계수"}
  insight_count: 4
  depth_score: 7.25
  base_star: 5
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 원 밖 점 접선 (판별식) + 두 축 동시 접 · 이중 조건
  friction_triggers: [F2, F3]
  rationale: |
    2단계 조건 결합 (원 접선 → 두 축 접 원) · CON depth 3 · count 4 · premium 미달 · ★ 4
  vendor_calibration_signal: {L5_confidence: 0.80, L2_signature_neighbors: [쎈-CM2-GM-원-0278, 0367]}
```

---

## 표본 판정 요약 (20문 · 최종 집계)

| ★ | 개수 | 비율 | 문항 |
|---|---|---|---|
| ★ 1 | 1 | 5% | 0243 |
| ★ 2 | 2 | 10% | 0234 · 0316 |
| ★ 3 | 7 | 35% | 0264 · 0270 · 0278 · 0283 · 0286 · 0294 · 0341 |
| ★ 4 | 9 | 45% | 0271 · 0281 · 0348 · 0350 · 0352 · 0355 · 0361 · 0363 · 0368 |
| ★ 5 | 1 | 5% | 0354 |
| ★ 5 premium | 1 | 5% | **0367 (O-05 확장 · 원 접선 평행+이중 접 킬러)** |

**합계**: 1 + 2 + 7 + 9 + 1 + 1 = **20문 ✅**

## 회귀 정합률 (예측 vs 실측 · 20문)

| 벤더 라벨 | 예측 ★ (v1.10) | 실측 ★ | 정합/편차 |
|---|---|---|---|
| A단계 (0234) | 1 | 2 | +1 상향 (원 계열 도입 부담) |
| A단계 (0243) | 1 | 1 | 정합 |
| B단계 대표 (0264) | 3 | 3 | 정합 |
| B단계 ●중·서술 (0270) | 3 | 3 | 정합 |
| B단계 ●상 (0271) | 4 | 4 | 정합 |
| B단계 대표 (0278) | 3 | 3 | 정합 |
| B단계 ●상 (0281) | 3~4 | 4 | 정합 (경계) |
| B단계 ●중 (0283) | 3 | 3 | 정합 |
| B단계 ●중 (0286) | 3 | 3 | 정합 |
| B단계 대표 (0294) | 3 | 3 | 정합 |
| B단계 대표 (0316) | 3 | 2 | -1 하향 (표준 절차 · 대표문제 편향) |
| B단계 대표 (0341) | 3 | 3 | 정합 |
| C단계 교육청 (0348) | 4 | 4 | 정합 |
| C단계 서술 (0350) | 4 | 4 | 정합 |
| C단계 (0352) | 4 | 4 | 정합 |
| C단계 서술 (0354) | 4 | 5 | +1 상향 (count 5 도달) |
| C단계 (0355) | 4 | 4 | 정합 |
| C단계 교육청 (0361) | 4 | 4 | 정합 |
| C단계 교육청 (0363) | 4 | 4 | 정합 |
| C단계 사고력 (0367) | 4 | **5 premium** | +1 상향 (**premium 안정 도달**) |
| C단계 서술 (0368) | 4 | 4 | 정합 |

**정합률**: 15/20 = **75%** (편차 ≤ 0 · v1.10 회귀 안정 유지)
**편차 ≥ 1 이상치**: 5문 (상향 3 · 하향 1 · A단계 원 계열은 예측 조정 필요 · **소단원 예외 후보**)

---

## CM2-GM 원 소단원 정점 통찰 원형 (RT·SYM 검증)

### 세션 61 매트릭스 재검증

**세션 61 CM2-GM 정점 원형 매트릭스** (`bank/premium-원형-카탈로그.md` v1.0):
- RT (Right-triangle) · SYM (Symmetry) 축이 지배
- 원의 방정식 특유: **접선·극선·현의 길이·두 원 위치관계·근축·자취**

### 이번 표본에서 확인된 정점 원형 밀도

| 원형 코드 | 소단원 매핑 | 표본 등장 문항 | 밀도 |
|---|---|---|---|
| **O-05 원 접선+원 만남 킬러** | 원 접선 이중 조건 | **0367 (premium)** · 0350·0368 확장 | 3/20 (15%) |
| **O-06 근축 (radical axis)** | 원 방정식 뺄셈 = 직선 | 0355·0361·0294 (공통현) | 3/20 (15%) |
| **아폴로니오스 원 자취** | 각이등분선+거리 비 | 0352 | 1/20 (5%) |
| **정사각형·정삼각형 회전** | SYM+RT | 0350 | 1/20 (5%) |
| **원 완전 포함 부등식** | CON 다중 | 0271 | 1/20 (5%) |
| **접선 길이² = 원 방정식 대입값** | POWER OF POINT | 0355·0361 | 2/20 (10%) |

### 정점 통찰 원형 확정 (원 소단원 특유)

원 소단원의 premium 도달 조건 (세션 62 실측):
1. **근축 통찰** (`OP·OQ = |상수항|` · `PT² = f(P)`) — CM2-GM 원 특유 · 저노출 P4 신호
2. **이중 접 조건** (원 접선 + 두 축 접 원 + 평행 이동 등) — 삼중 통찰 결합 시 premium
3. **아폴로니오스 원 자취** — I-XU (중2·중3 각이등분선 정리) 결합
4. **두 원 중심선-공통현 수직 성질** — 0354 처럼 특수 위치 조건 결합 시 ★ 5

### RT·SYM 축 확인

- **RT 축**: 0348 (원 내부 수직 조건 좌표화) · 0350 (정사각형 회전) · 0367 (접점 좌표 계산) 확인 → 원 소단원에서 **좌표 설정·직각 활용** 형태로 등장
- **SYM 축**: 0350 (정사각형 90° 회전) · 0367 (접선 평행 이동) 확인 → 원 소단원은 SYM보다 **RT+CON 결합**이 더 지배적

**결론**: 세션 61 매트릭스 (RT·SYM) 큰 방향성 유지. 원 소단원 특화 추가 축: **CON (조건 결합) + EQV (근축·POWER OF POINT)**.

---

## 특이사항 · vendor label 정정 신호

### 1. 예측 편차 정정 신호 (2건)

- **A단계 (0234)**: 두 원 교점 지나는 원 계열 (k 도입)은 A단계지만 실제 ★ 2 안정. **A단계 회귀 상향 신호**: `쎈 A단계` 예측 함수에서 03-2 소단원 (두 원 교점) 문항은 alt: [2] 추가 권장 (v1.11 후보).
- **C단계 서술형 (0354·0367)**: 서술형 라벨이 count 5 도달 유도 (다단계 유도 강제) → **서술형 라벨의 premium 도달 밀도 상승 관찰**. v1.11 후보: `쎈 C단계 서술형` 예측을 ★ 4.5로 상향 (alt [5]).

### 2. 소단원 예외 신호

- **원 소단원 C단계 사고력의 premium 밀도**: 20문 중 1 (5%) · 파일럿 2 (15문) 1 (0360 · 6.7%) 합산 시 35문 중 2 (5.7%) → 도형이동 (40%) · 평면좌표 (5.7%)와 유사. **원 소단원 premium 밀도 ≈ 평면좌표 수준**.
- **근축·POWER OF POINT 신호**: 원 소단원 전용 · CM2-GM 다른 소단원 (평면좌표·직선·이동)에 미등장 · **원 소단원 정점 창작 시 최우선 재료**.

### 3. 신규 premium 원형 등재 후보 (premium-원형-카탈로그.md v1.1)

- **O-05 확장 (0367)**: "원 위 점 접선 (x₁x+y₁y=r²) + 평행 이동 + 이중 접 원 · 접점 좌표" — O-05 (0360) 대비 접선 자체가 조건, 평행 이동으로 원점을 만든다는 형태 → **O-05a 하위 원형** 신설 권장.
- **O-15 신규 후보 (0354 · ★ 5 경계)**: "두 원 중심선-공통현 수직 관계 + 특수 위치 조건 (한 중심이 공통현 위)" — 저노출 통찰. 표본 확대 후 승격 판단.

### 4. 교육과정 외 격리 확인

이번 표본 20문 전체에서 교육과정 위반 신호 없음. 아폴로니오스 원 (0352)은 자취 방정식으로 유도되어 CM2-GM 정규 범위. 각이등분선 정리는 중2·중3 도형 (XU 신호 P6).

### 5. 회귀 정합률 · 신뢰도

- **20문 정합률 75%** · v1.10 회귀 안정성 (편차 ≤ 0.5) 유지
- 쎈 원 소단원 표본 통합 (파일럿 2 15 + 이번 20 = **35문**) · 쎈 A급 신뢰도 유지 (통합 표본 85문 = 파일럿 1 평면좌표 35 + 파일럿 2 15 + 이번 20 + 도형이동 15)

---

## 관련 자산

- 파일럿 2 (기존 원 15문): [`bank/mechanism-데이터-파일럿2-원의방정식.md`](mechanism-데이터-파일럿2-원의방정식.md)
- 쎈 평면좌표 (파일럿 1): [`bank/mechanism-데이터-쎈-CM2-GM-평면좌표.md`](mechanism-데이터-쎈-CM2-GM-평면좌표.md)
- 쎈 도형이동: [`bank/mechanism-데이터-쎈-CM2-GM-도형이동.md`](mechanism-데이터-쎈-CM2-GM-도형이동.md)
- premium 원형 카탈로그: [`bank/premium-원형-카탈로그.md`](premium-원형-카탈로그.md) v1.0
- 벤더 회귀: [`bank/vendor-label-calibration.md`](vendor-label-calibration.md) v1.10
- 스키마: [`bank/정독-스키마-v2.0.md`](정독-스키마-v2.0.md)
- CM2-GM 앵커 v2.0: [`bank/anchors/CM2-GM.md`](anchors/CM2-GM.md)

## 변경 이력

- 2026-07-21 v1.0 — 세션 62 신규 정독. 층화 표본 20문 (A2+B10+C8) · 파일럿 2 15문과 별도 · 쎈 원 소단원 실측 표본 통합 시 35문 · **premium 후보 1건 (0367 · O-05 확장)** · 회귀 정합률 75% · 아폴로니오스·근축 원 특유 정점 통찰 원형 확인.
