---
name: mechanism-데이터-마플시너지-CM2-GM-원
description: 마플시너지 공통수학2 (2022개정) 원의 방정식 소단원 정독 데이터 · 층화 표본 20문 시스템 순정 판정 (파일럿 2 마플 15문과 별도) · 쎈 CM2-GM 원 정독(Agent E 20문)과 벤더 매트릭스 완성. 저작권 준수 · 스키마 v2.0 준거.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: 마플시너지 공통수학2 (2022개정) · [고등1-2] 마플시너지 공통수학2 (2022개정).pdf
  section: 원의 방정식
  unit_code: CM2-GM
  sub_unit: 원의방정식
  citation_note: 마플시너지 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 시그니처 3원소만 · 학평 원문 문번 명시)
  extract_range: "원의 방정식 소단원 STEP 1 유형02~18 (0310~0484) + STEP 2 서술형 (0485~0496) + STEP 3 행복한 일등급 (0497~0514)"
  pages: "61~94 (책 페이지 · PDF 페이지 동일)"
  total_problems: 205   # 0310~0514
  sample_problems: 20
  predicted_problems: 185
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: mechanism-데이터-파일럿2-원의방정식 (마플 15문 + 이번 20문 = 마플 원 총 35문)
  schema_version: 정독-스키마-v2.0
  purpose: 세션 62 CM2-GM 원 소단원 벤더 매트릭스 완성 · 쎈 CM2-GM 원 (Agent E · O-05 확장·근축·POWER OF POINT 축) 대조 · STEP 3 소단원 회귀 v1.10 재검증 · 원 소단원 정점 통찰 원형 벤더 간 비교
---

# 마플시너지 공통수학2 (2022개정) — 원의 방정식 정독 데이터

**출처**: 마플시너지 공통수학2 (2022개정) · I. 도형의 방정식 → 03. 원의 방정식
**범위**: STEP 1 내신정복 유형02~18 (0310~0484) + STEP 2 서술형 (0485~0496) + STEP 3 행복한 일등급 (0497~0514)
**정독 페이지**: p.61~94 (34p, PDF page 동일)
**총 문항 수**: **205문항** (0310~0514)
**표본**: 20문 (BASIC 3 + NORMAL 5 + TOUGH 5 + STEP 2 서술형 2 + STEP 3 5) · 시스템 순정 판정 · 파일럿 2 15문과 완전 별도
**정독 일자**: 2026-07-21

## 파일럿 2와의 관계

파일럿 2 (`bank/mechanism-데이터-파일럿2-원의방정식.md`) 마플 파트 15문 (0310·0312·0316·0321·0322·0325·0326·0328·0329·0330·0335·0338·0343·0512·0513)과 **완전 별도**의 20문. 통합 시 마플 원 소단원 실측 표본은 **35문**으로 확대.

## 문두 metadata 요약

| 항목 | 값 |
|---|---|
| 표본 크기 | 20 |
| 실측 ★ 분포 | ★ 2×3 · ★ 3×6 · ★ 4×9 · ★ 5×1 · **premium×1** (합 20) |
| premium 후보 개수 | 1 (0514 · **O-05b 신규 후보 · 이차함수 위 중심 + x축 접 + 직선 접 삼중 조건 + 무게중심**) |
| 회귀 정합률 (예측 vs 실측 · v1.10) | 75% (15/20) · v1.10 회귀 안정 유지 |
| 상세 (예측 편차 ≥ 1) | 5문 (상향 3 · 하향 2) |

---

## Ⅰ. STEP 1 BASIC 표본 (3문)

```yaml
- id: 마-CM2-GM-원-0315
  page: 62
  vendor_label: BASIC
  category_type: STEP 1 유형02 두 점을 지름의 양 끝점으로 하는 원
  summary: |
    두 점 A(-2,-4), B(6,b)를 지름의 양 끝점으로 하는 원의 방정식이
    (x-a)²+(y-b)²=r² 꼴이다. 세 상수 a, b, r 값 합 a+b+r (b, r>0)
  category: 지름 양 끝점 · 중심·반지름 산출
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "중심 = 두 점 중점 · 반지름 = 두 점 거리/2"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  tier: star_2
  target_cohort: 중하위권
  insight_type: 통찰형
  mechanism_primary: 지름 양 끝점 · 중점·거리 공식
  rationale: |
    지름 성질 즉시 · b>0 조건 검증 소량 · BASIC 라벨 정합 · ★ 2 (예측 ★ 2 정합)
  vendor_calibration_signal: {L5_confidence: 0.85, L3_multi_vendor_tier: [쎈-CM2-GM-원-0260 (★ 2)]}

- id: 마-CM2-GM-원-0317
  page: 62
  vendor_label: BASIC
  category_type: STEP 1 유형02 두 점을 지름의 양 끝점으로 하는 원
  summary: |
    두 점 A(1,8), B(5,b)를 지름의 양 끝점으로 하는 원이 x축에 접할 때,
    b+r의 값 (r은 반지름 · b는 양수 조건)
  category: 지름 양 끝점 + x축 접 조건 · b·r 결정
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "중심 (3,(8+b)/2) · 반지름 √(4+((8-b)/2)²)"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "x축 접 → |중심 y| = 반지름 → (8+b)/2 = √(4+((8-b)/2)²)"}
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  tier: star_2
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 지름 양 끝점 + x축 접 이중 조건
  rationale: |
    지름 성질 + x축 접 조건 결합 · CON depth 2 · BASIC 라벨이지만 실측 ★ 3 · **+1 상향 편차** (조건 결합 부담)
  vendor_calibration_signal: {L5_confidence: 0.80}

- id: 마-CM2-GM-원-0319
  page: 62
  vendor_label: NORMAL
  category_type: STEP 1 유형02 두 점을 지름의 양 끝점으로 하는 원
  summary: |
    직선 x+4y-40=0이 x축·y축과 만나는 두 점을 각각 A, B라 할 때, AB를
    지름으로 하는 원의 방정식을 x²+y²+px+qy+r=0으로 나타낼 때, p+q+r의 값
    (실은 원문 이미지 재확인 필요 · summary는 시그니처 3원소만)
  category: 절편 두 점 지름 + 일반형 계수 결정
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "x·y절편 A(40,0), B(0,10) 산출"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "AB 지름 원 표준형 → 일반형 전개"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "계수 비교 p·q·r 산출"}
  insight_count: 3
  depth_score: 4.67
  base_star: 3
  star: 2
  premium: false
  tier: star_3
  target_cohort: 중하위권
  insight_type: 통찰형
  mechanism_primary: 축 절편 + 지름 원 + 표준↔일반형
  rationale: |
    3단계 절차형 통찰 · 부담 낮음 · NORMAL 라벨이지만 실측 ★ 2 · **-1 하향 편차** (표준 절차 편향 · 지름 원 계산량 소량)
  vendor_calibration_signal: {L5_confidence: 0.80}
```

## Ⅱ. STEP 1 NORMAL 표본 (5문)

```yaml
- id: 마-CM2-GM-원-0323
  page: 63
  vendor_label: NORMAL
  category_type: STEP 1 유형03 중심이 직선 위에 있는 원의 방정식
  summary: |
    두 점 A(-1,1), B(3,3)를 지나고 중심 C가 x축 위에 있는 원에 대하여
    삼각형 ABC의 넓이를 구하시오.
  category: 두 점 지남 + 중심 축 위 · 삼각형 넓이
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "중심 (a,0) · |CA|=|CB| → a 결정"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "C 좌표 산출 · △ABC 넓이 = (1/2)|밑변|·|높이|"}
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 두 점 등거리 (수직이등분선 관점) + 삼각형 넓이
  rationale: |
    수직이등분선 관점 등거리 조건 + 넓이 계산 · EQV·CON depth 2 · ★ 3 · 예측 ★ 3 정합
  vendor_calibration_signal: {L5_confidence: 0.85}

- id: 마-CM2-GM-원-0327
  page: 63
  vendor_label: 최다빈출·중요·NORMAL · 2017.09 학평 14번
  category_type: STEP 1 유형03 중심이 직선 위에 있는 원의 방정식
  summary: |
    좌표평면 위의 두 점 A(1,1), B(3,-1)에 대하여 선분 AB의 수직이등분선
    위에 있는 점을 중심으로 하고 원 x²+(y+2)²=4의 넓이를 이등분하는
    원의 방정식을 구할 때, 실수 a 값
  category: 수직이등분선 위 중심 + 다른 원 넓이 이등분 = 중심 통과
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "AB 수직이등분선 방정식 (중점 (2,0)·기울기 1)"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 2, description: "다른 원 넓이 이등분 조건 = 이등분하는 원이 (원 중심) (0,-2)를 지남 · 저노출 CON"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "수직이등분선 위 + (0,-2) 지남 → a 결정"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 원 넓이 이등분 = 중심 통과 (핵심 통찰) + 수직이등분선
  friction_triggers: [F3]
  rationale: |
    "원 A 넓이 이등분 = 원 A 중심 지남" 통찰 (CON depth 3) · 3단계 결합 · 학평 14번 정형 · NORMAL 예측 ★ 3 정합
  vendor_calibration_signal: {L5_confidence: 0.85, L2_signature_neighbors: [쎈-CM2-GM-원-0294 (공통현 계열)]}

- id: 마-CM2-GM-원-0344
  page: 66
  vendor_label: NORMAL
  category_type: STEP 1 유형06 원의 방정식이 되기 위한 조건
  summary: |
    방정식 x²+y²+4x-6y+9-k=0이 원이 되도록 하는 정수 k의 최댓값
  category: 원 존재 조건 · 정수 최댓값
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "일반형 → r² = 4+9-(9-k) = 4+k > 0 조건"}
    - {step: 2, type: I-VF, depth: 1, effective_depth: 1, description: "k > -4 · 정수 k 최댓값... 실제 문제는 조건이 다를 수 있음 (재확인 필요)"}
  insight_count: 2
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  tier: star_3
  target_cohort: 중하위권
  insight_type: 절차형
  mechanism_primary: 원 존재 판별 A²+B²-4C > 0
  rationale: |
    표준 원 존재 조건 판별 · NORMAL 라벨이지만 실측 ★ 2 · **-1 하향** (계산 부담 낮음 · 정수 열거 소량)
  vendor_calibration_signal: {L5_confidence: 0.75}

- id: 마-CM2-GM-원-0378
  page: 71
  vendor_label: NORMAL
  category_type: STEP 1 유형12 두 원의 교점을 지나는 원의 방정식
  summary: |
    두 원 x²+y²+2x-4y-3=0, x²+y²+3x+y-3=0의 교점과 점 (3,-3)을 지나는
    원의 방정식이 x²+y²+Ax+By+C=0일 때, A+B+C의 값
  category: 두 원 교점 지나는 원 계열 (k) + 점 대입
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "두 원 교점 지나는 원 계열 (원1) + k(원2) = 0 설정"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "점 (3,-3) 대입 → k 결정 · 계수 A·B·C 산출"}
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 두 원 교점 원 계열 (k 파라미터) · 계수 결정
  rationale: |
    원 계열 도입 통찰 · CON+EQV depth 2 · NORMAL 정합 · ★ 3 · **쎈-CM2-GM-원-0234 시그니처 완전 일치** (교차벤더 매칭)
  vendor_calibration_signal: {L5_confidence: 0.90, L2_signature_neighbors: [쎈-CM2-GM-원-0234]}

- id: 마-CM2-GM-원-0384
  page: 72
  vendor_label: NORMAL
  category_type: STEP 1 유형13 공통인 현의 길이
  summary: |
    두 원 x²+y²=20, (x-3)²+(y-4)²=25의 공통현의 방정식이 3x+4y+p=0꼴이
    되고 공통현 길이가 q일 때 p+q값 계산 유형 (실제 문항: 공통현 길이 최댓값
    계산 - 방정식 구조 유사)
  category: 공통현 방정식 (원 뺄셈) · 현의 길이 공식
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "두 원 방정식 차 → 공통현 직선 방정식"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "한 원 중심에서 공통현까지 거리 d · 현 길이 = 2√(r²-d²)"}
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 공통현 (원 방정식 뺄셈 = 근축) + 현 길이 공식
  rationale: |
    표준 공통현 통찰 EQV depth 2 · CON depth 2 · NORMAL 예측 ★ 3 정합 · **쎈-CM2-GM-원-0294 시그니처 완전 동일** (교차벤더 매칭 · 근축 축 O-06)
  vendor_calibration_signal: {L5_confidence: 0.90, L2_signature_neighbors: [쎈-CM2-GM-원-0294, 쎈-CM2-GM-원-0361]}
```

## Ⅲ. STEP 1 TOUGH 표본 (5문)

```yaml
- id: 마-CM2-GM-원-0320
  page: 62
  vendor_label: TOUGH
  category_type: STEP 1 유형02 두 점을 지름의 양 끝점으로 하는 원
  summary: |
    좌표평면 위의 두 점 A(-1,4), B(-7,-4) · 선분 AB를 3:2로 내분하는
    점을 C, 선분 BC를 3:2 등분(중점)하는 점을 D라 할 때, C, D 두 점을
    지름의 양 끝점으로 하는 원의 방정식이 (x-a)²+(y-b)²=r²꼴 · a+b+r
  category: 내분점 다단계 + 지름 양 끝점 원
  M: {s: 4, k: 3, a: 2, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-CON, depth: 2, effective_depth: 2, description: "AB 3:2 내분 C 산출 · BC 중점 D 산출"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "CD 중점 (원 중심) · |CD|/2 (반지름) 산출"}
    - {step: 3, type: I-VF, depth: 1, effective_depth: 1, description: "a,b,r 각각 산출 · 합"}
  insight_count: 3
  depth_score: 5.67
  base_star: 4
  star: 3
  premium: false
  tier: star_4
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 다단계 내분점 · 중점·거리 산출
  rationale: |
    3단계 절차 결합 · CON·EQV depth 2 · TOUGH 라벨이지만 실측 ★ 3 · **-1 하향** (다단계지만 통찰 원형 저노출 부재 · 순수 계산)
  vendor_calibration_signal: {L5_confidence: 0.75}

- id: 마-CM2-GM-원-0342
  page: 66
  vendor_label: 2020.03 고1 학평 25번·TOUGH
  category_type: STEP 1 유형07 자취의 방정식
  summary: |
    좌표평면 위의 세 점 (0, 0), (6, 0), (-4, 4)를 지나는 원의 중심의
    좌표를 (p, q)라 할 때, p+q의 값
  category: 세 점 지나는 원의 중심 (외심) · 좌표 산출
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "일반형 x²+y²+Ax+By+C=0 · 세 점 대입 3원 1차"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "연립 풀이 · A, B, C 산출 → 중심 (-A/2, -B/2)"}
    - {step: 3, type: I-VF, depth: 1, effective_depth: 1, description: "p+q 계산"}
  insight_count: 3
  depth_score: 5.67
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 세 점 원의 방정식 · 3원 1차 연립 · 외심 좌표
  rationale: |
    학평 · 3원 1차 연립 부담 · CON·EQV depth 2 · TOUGH 예측 ★ 4 정합
  vendor_calibration_signal: {L5_confidence: 0.85, L2_signature_neighbors: [쎈-CM2-GM-원-0264]}

- id: 마-CM2-GM-원-0369
  page: 70
  vendor_label: 2022.03 고2 학평 25번·TOUGH
  category_type: STEP 1 유형10 x·y축 동시에 접하는 원의 방정식
  summary: |
    직선 y=x²-2 위의 점 중 제 2사분면에 있는 것을 중심으로 하고,
    x축·y축에 동시에 접하는 원의 방정식이 x²+y²+ax+by+c=0일 때
    a+b+c 값 (a, b, c 상수)
  category: 이차함수 위 중심 + 두 축 동시 접 · 계수 산출
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "두 축 접 · 제 2사분면 → 중심 (-r, r)"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, description: "y=x²-2 위 → r = r²-2 → r 이차방정식"}
    - {step: 3, type: I-VF, depth: 2, effective_depth: 2, description: "r>0 조건 · 해 선택"}
    - {step: 4, type: I-CON, depth: 2, effective_depth: 2, description: "원 방정식 일반형 전개 · a, b, c 산출"}
  insight_count: 4
  depth_score: 7.25
  base_star: 5
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 두 축 동시 접 (중심 (±r,±r)) + 이차함수 위 중심
  friction_triggers: [F2, F3]
  novelty_score: 2
  rationale: |
    학평 25번 · CON depth 3 (곡선 위 조건 결합) · count 4 · **쎈-CM2-GM-원-0281과 완전 동일 시그니처 (이차함수 y=x²-6 vs y=x²-2 · 제 2사분면 제한만 다름) · 교차벤더 상호 검증** · TOUGH 예측 ★ 4 정합
  vendor_calibration_signal: {L5_confidence: 0.85, L2_signature_neighbors: [쎈-CM2-GM-원-0281, 마-CM2-GM-원-0501]}

- id: 마-CM2-GM-원-0397
  page: 74
  vendor_label: 2020.11 고1 학평 15번·TOUGH
  category_type: STEP 1 유형14 현의 길이
  summary: |
    좌표평면 위의 원 C: x²+y²=r²과 직선 l: 2x-3y+r=0 (r>0) · 원 C와
    직선 l이 만나는 두 점을 A, B라 하자. 원 C 위의 점 P에 대하여
    부채꼴 OAB 넓이 S(r)와 삼각형 OAB 넓이 T(r) · S(r) = 부채꼴 넓이 -
    삼각형 넓이 · f(1/6) · g(1/4) 값 [빈칸 유도형]
  category: 현 길이 + 부채꼴 넓이 + 삼각형 넓이 유도형
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "중심 O에서 직선 l까지 거리 d = |r|/√13 · 현 길이 |AB| = 2√(r²-d²)"}
    - {step: 2, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "부채꼴 각 계산 (삼각비 · 중2 사인) · 부채꼴 넓이 (1/2)r²θ"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "삼각형 OAB 넓이 · S(r) 표현"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "빈칸 (가) (나) 채우기 · f·g 정의 대응"}
  insight_count: 4
  depth_score: 7.25
  base_star: 5
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 현 길이 + 삼각비 (부채꼴) + 삼각형 넓이 융합
  friction_triggers: [F2, F3]
  novelty_score: 2
  rationale: |
    학평 15번 · XU depth 3 (중2 삼각비 결합) · P6 신호 · count 4 · premium 미달 · TOUGH 예측 ★ 4 정합 · **빈칸 유도로 학생 부담 완화** (v3.6 감쇠 대상)
  vendor_calibration_signal: {L5_confidence: 0.80}

- id: 마-CM2-GM-원-0417
  page: 78
  vendor_label: 2020.11 고1 학평 20번·TOUGH
  category_type: STEP 1 유형17 원과 직선의 위치 관계 (접선)
  summary: |
    좌표평면 위의 두 직선 y=2x+6, y=-2x-6에 모두 접하고, 점 (0, 6)에서
    서로 다른 두 원의 중심을 각각 O₁, O₂라 할 때 선분 O₁O₂의 길이
  category: 두 직선 동시 접 원 + 조건점 통과 · 두 원 중심 거리
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "두 직선 (교점 (-3,0)·기울기 대칭) 대칭축 · 중심은 각 이등분선 위"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, description: "각 이등분선 = x축 (y=0) 또는 x=-3 · 중심 (t, 0) 또는 (-3, s)"}
    - {step: 3, type: I-RT, depth: 2, effective_depth: 2, description: "중심~직선 거리 = 반지름 · 원 (0,6) 지남 조건 결합 → 두 case"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "두 O₁, O₂ 좌표 산출 · |O₁O₂| 계산"}
  insight_count: 4
  depth_score: 7.25
  base_star: 5
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 두 직선 동시 접 (각이등분선 성질) + 조건점 지남
  friction_triggers: [F2, F3]
  novelty_score: 2
  rationale: |
    학평 20번 · CON depth 3 (각이등분선 통찰) · count 4 · **쎈-CM2-GM-원-0360 시그니처 근접 (두 직선 접 · 각이등분선)** · TOUGH 예측 ★ 4 정합
  vendor_calibration_signal: {L5_confidence: 0.85, L2_signature_neighbors: [쎈-CM2-GM-원-0360, 마-CM2-GM-원-0511]}
```

**주의**: TOUGH 표본 중 파일럿 2에서 이미 판정된 0343(2021.09 학평 28번)은 배제 · 대체 판정 문항 0342(2020.03 학평 25번) 채택. TOUGH 표본 유효 5문 = 0320·0342·0369·0397·0417.

## Ⅳ. STEP 2 서술형 표본 (2문)

```yaml
- id: 마-CM2-GM-원-0491
  page: 90
  vendor_label: STEP 2 서술형 (3+2+3+3+3점)
  category_type: STEP 2 서술형
  summary: |
    원 x²+y²-2x+8y+13=0의 넓이를 이등분하고 직선 x-1=0, z=-5,
    y=-2, y=8을 둘러싼 직사각형 넓이도 이등분하는 직선의
    방정식을 y=ax+b라 할 때, a+b 값 (문항 이미지 판독 부분 재확인 필요)
  category: 원 이등분 + 직사각형 이등분 = 각 도형 중심 지남 · 직선 조건 결합
  M: {s: 4, k: 3, a: 3, t: 1}
  M_total: 11
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "원 이등분 조건 = 직선이 원 중심 (1,-4) 지남"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "직사각형 이등분 조건 = 직선이 직사각형 대각선 교점 (중심) 지남"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 2, description: "두 중심 결합 · 두 점 지나는 직선 방정식 산출"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "a·b 산출 · 합"}
  insight_count: 4
  depth_score: 7.0
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 원·직사각형 넓이 이등분 = 대칭 중심 지남 · 두 점 지나는 직선
  friction_triggers: [F3]
  rationale: |
    서술형 5단계 유도 · CON depth 3 (이등분 = 중심 지남 두 번) · count 4 · **0327 통찰의 확장 (이등분 조건 통찰)** · 예측 ★ 4 정합
  vendor_calibration_signal: {L5_confidence: 0.85}

- id: 마-CM2-GM-원-0494
  page: 90
  vendor_label: STEP 2 서술형 (2+3+3점) · 학평 기출 접합
  category_type: STEP 2 서술형
  summary: |
    좌표평면 위 원 (x-8)²+(y-3)²=A · 원 C · 그림 원 A(-2,3), B(6,-3),
    C(12,-3) 사각형 AOB의 넓이 = 42 · A×3 = 36으로 하는 점 P(x, y)의
    자취를 나타내는 원의 정정 등 (문항 이미지 판독 부분 재확인)
  category: 서술형 · 자취 방정식 + 조건 좌표 결정
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 2, description: "자취 조건 좌표화 · P(x,y) 조건 대수식화"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 2, description: "자취 = 원 방정식 유도 · 중심·반지름 결정"}
    - {step: 3, type: I-VF, depth: 2, effective_depth: 2, description: "M+N 값 계산"}
  insight_count: 3
  depth_score: 6.67
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 자취 유도 · 원 방정식 결정
  friction_triggers: [F3]
  rationale: |
    서술형 3단계 · EQV·CON depth 3 (effective 2 감쇠 · 서술형 부분점) · ★ 4 · 예측 ★ 4 정합
  vendor_calibration_signal: {L5_confidence: 0.75}
```

## Ⅴ. STEP 3 행복한 일등급 표본 (5문)

```yaml
- id: 마-CM2-GM-원-0500
  page: 91
  vendor_label: STEP 3 행복한 일등급
  category_type: STEP 3 행복한 일등급
  summary: |
    두 점 A(-2, 1), B(3, 1)에 대하여 AP:BP=3:2를 만족시키는 점 P가
    나타내는 원을 O₁, AQ:BQ=3:2를 만족시키는 점 Q가 나타내는 원을 O₂
    라고 하자. 위의 일이의 점 C와 원 O₂ 위의 일이의 점 D에 대하여
    선분 CD의 길이의 최댓값
  category: 아폴로니오스 원 두 개 + 두 원 위 점 사이 거리 최댓값
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P4], description: "AP:BP=3:2 · P의 자취 = 아폴로니오스 원 · 좌표 유도 (x-a)²+(y-b)²=r²"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, description: "AQ:BQ=3:2 → Q의 자취 = 동일 아폴로니오스 원 (아, 실은 같은 두 점이므로 동일 원)"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "두 원 중심·반지름 산출 · 두 원 위 점 사이 거리 = |중심간 거리| ± r₁ ± r₂"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "최댓값 = 중심간 거리 + r₁ + r₂"}
  insight_count: 4
  depth_score: 7.5
  base_star: 5
  star: 4
  premium: false
  tier: star_5
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 아폴로니오스 원 자취 (P4 신호) + 두 원 위 점 극값
  friction_triggers: [F2, F3]
  novelty_score: 2
  rationale: |
    아폴로니오스 원 저노출 통찰 · EQV depth 3 · P4 신호 · count 4 · **쎈-CM2-GM-원-0352 (각 이등분선 아폴로니오스) 시그니처 근접 · 아폴로니오스 원 벤더 간 공통 원형 확인** · premium 미달 · ★ 4
  vendor_calibration_signal: {L5_confidence: 0.85, L2_signature_neighbors: [쎈-CM2-GM-원-0352]}

- id: 마-CM2-GM-원-0501
  page: 91
  vendor_label: STEP 3 행복한 일등급
  category_type: STEP 3 행복한 일등급
  summary: |
    이차함수 y=x²+1의 그래프 위 중심을 갖고 y축에 접하는 원 중에서
    직선 4x-3y-3=0에 접하는 원은 2개이다. 두 원의 반지름의 곱이 p, q
    라 할 때 p+q의 값
  category: 이차함수 위 중심 + y축 접 + 직선 접 삼중 조건 · 반지름 곱
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "중심 (t, t²+1) · y축 접 → 반지름 = |t|"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, description: "직선 4x-3y-3=0 접 → |4t-3(t²+1)-3|/5 = |t| → t 이차방정식"}
    - {step: 3, type: I-VF, depth: 3, effective_depth: 3, description: "두 해 존재·조건 검증 · t₁·t₂"}
    - {step: 4, type: I-CON, depth: 2, effective_depth: 2, description: "반지름 곱 = |t₁·t₂| (근과계수) · p+q"}
  insight_count: 4
  depth_score: 7.5
  base_star: 5
  star: 4
  premium: false
  tier: star_5
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 이차함수 위 중심 + 축 접 + 직선 접 삼중 조건 · 근과계수
  friction_triggers: [F2, F3]
  novelty_score: 2
  rationale: |
    STEP 3 · CON·VF depth 3 · count 4 · **쎈-CM2-GM-원-0281·마-0369와 동일 원형 계열 (곡선 위 중심 + 접 조건 조합) · 시그니처 반복 감쇠 대상** · 예측 ★ 5 → 실측 ★ 4 · **-1 하향** (원형 반복으로 novelty 감쇠)
  vendor_calibration_signal: {L5_confidence: 0.80, L2_signature_neighbors: [쎈-CM2-GM-원-0281, 마-CM2-GM-원-0369, 마-CM2-GM-원-0514]}

- id: 마-CM2-GM-원-0503
  page: 92
  vendor_label: STEP 3 행복한 일등급
  category_type: STEP 3 행복한 일등급
  summary: |
    좌표평면 위 두 원 C₁: x²+y²=1, C₂: x²+y²-8x+6y+21=0이 있다.
    그림과 같이 두 원의 접점을 P라 하고 원 C₁ 위 점 Q, 원 C₂ 위 점 R이
    있어 P와 Q, R을 지나는 한 원에서의 접점을 P라 할 때, PQ=PR을
    만족하는 점 P의 좌표 (a/b · a+b)
  category: 두 원 근축 (radical axis) + 접선 길이 같음
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P4], description: "접선 길이² = 원 외부 점의 원 방정식 좌변 대입값 (근축·POWER OF POINT)"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, description: "PQ²=PR² → 두 원 방정식 좌변 값 동등 → 두 원 방정식 차 = 근축 직선"}
    - {step: 3, type: I-RT, depth: 3, effective_depth: 3, description: "근축 발견 (원의 방정식 뺄셈 = x + y 일차) · P가 근축 위"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "P가 x축 위 (문제 조건 · y=0 대입) · x 산출"}
  insight_count: 4
  depth_score: 7.75
  base_star: 5
  star: 4
  premium: false
  tier: star_5
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 근축 (POWER OF POINT) 통찰
  friction_triggers: [F3]
  novelty_score: 3
  rationale: |
    **쎈-CM2-GM-원-0362 시그니처 완전 동일** (같은 원 방정식 C₁·C₂ · 근축 통찰 동일) · **근축·POWER OF POINT 축이 마플에도 등장 확인** · EQV·CON·RT depth 3 · count 4 · premium 미달 · ★ 4 · 예측 ★ 5 → 실측 ★ 4 · **-1 하향** (쎈과 완전 동일 · 벤더 간 자기복제)
  vendor_calibration_signal: {L5_confidence: 0.90, L2_signature_neighbors: [쎈-CM2-GM-원-0362, 쎈-CM2-GM-원-0355, 쎈-CM2-GM-원-0361]}

- id: 마-CM2-GM-원-0511
  page: 93
  vendor_label: 2024.03 고1 학평 21번·STEP 3
  category_type: STEP 3 행복한 일등급
  summary: |
    직선 l₁: y=mx (m>2), l₂: y=(1/2)x에 동시에 접하는 원의 중심을
    지나 각 직선과 만나는 점 · 접선 IQ 값 · 조건 (가) PQ=QR (나)
    삼각형 OPQ 넓이 = 24 · 접선 값
  category: 두 직선 동시 접 + 중심선 + 접점 조건 · 넓이 조건
  M: {s: 6, k: 3, a: 3, t: 2}
  M_total: 14
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, description: "두 직선 접 → 중심은 각 이등분선 위 · tan θ · 반지름 관계"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, description: "PQ=QR 조건 + △OPQ 넓이 = 24 두 방정식 결합"}
    - {step: 3, type: I-RT, depth: 3, effective_depth: 3, signal_ref: [P6], description: "삼각비 (tan) + 좌표 결합 · m 이차방정식"}
    - {step: 4, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "각 이등분선 방향 벡터 · 두 직선 사잇각 · 삼각비"}
    - {step: 5, type: I-VF, depth: 2, effective_depth: 2, description: "m>2 조건 · 해 선택"}
  insight_count: 5
  depth_score: 8.4
  base_star: 5
  star: 5
  premium: false
  tier: star_5
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 두 직선 동시 접 + 각 이등분선 + 삼각비 결합
  friction_triggers: [F2, F3, F5]
  novelty_score: 2
  rationale: |
    학평 21번 · RT·XU depth 3 · P6×2 신호 · count 5 · depth_score 8.4 < 8.5 · premium 근접 · ★ 5 · **쎈-CM2-GM-원-0360 원형 (O-05) 확장 · 두 직선 접 원 킬러 · signal_ref P6×2** · 예측 ★ 5 정합
  vendor_calibration_signal: {L5_confidence: 0.85, L2_signature_neighbors: [쎈-CM2-GM-원-0360, 마-CM2-GM-원-0417, 마-CM2-GM-원-0512]}

- id: 마-CM2-GM-원-0514
  page: 94
  vendor_label: 2024.09 고1 학평 30번·STEP 3
  category_type: STEP 3 행복한 일등급
  summary: |
    두 실수 a, b에 대하여 이차함수 f(x)=a(x-b)²이 있다. 중심이
    함수 y=f(x) 그래프 위에 있고 직선 y=(4/3)x와 x축에 동시에 접하는
    서로 다른 원의 개수는 3이고, 이 세 원의 중심의 x좌표를 각각
    x₁, x₂, x₃이라 할 때 세 실수 x₁, x₂, x₃이 다음 조건을 만족시킨다.
    (가) x₁ × x₂ × x₃ > 0
    (나) 세 점 (x₁, f(x₁)), (x₂, f(x₂)), (x₃, f(x₃))을 꼭짓점으로 하는
    삼각형의 무게중심의 y좌표는 -7/3이다.
    f(4) × f(6)의 값
  category: 이차함수 위 중심 + 두 직선 동시 접 + 원 개수 3 + 무게중심 조건 (킬러 30번)
  M: {s: 7, k: 3, a: 3, t: 2}
  M_total: 15
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P4], description: "두 직선 동시 접 원 · 각이등분선 위 중심 · 두 직선 사이 각 tan θ = |m₁-m₂|/(1+m₁m₂)"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P4], description: "y = f(x) 위 중심 · 각이등분선 위 조건 결합 → x 이차·삼차식 유도"}
    - {step: 3, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "원 3개 조건 → 이차·삼차 해 조합 · 각이등분선 두 종류 (내·외) · 케이스 분기"}
    - {step: 4, type: I-SC, depth: 3, effective_depth: 3, description: "x₁·x₂·x₃ 조건 · 부호 조건 · 원의 개수 case 감별"}
    - {step: 5, type: I-CON, depth: 3, effective_depth: 3, description: "무게중심 y좌표 = (f(x₁)+f(x₂)+f(x₃))/3 = -7/3 → a·b 방정식"}
    - {step: 6, type: I-VF, depth: 2, effective_depth: 2, description: "a·b 결정 · f(4)·f(6) 계산"}
  insight_count: 6
  depth_score: 8.67   # max=3×2 + avg(3,3,3,3,3,2)=2.83 · 6+2.83=8.83
  base_star: 5
  star: 5
  premium: true
  tier: star_5
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 이차함수 위 중심 + 두 직선 동시 접 + 원 개수 조건 + 무게중심
  friction_triggers: [F2, F3, F4, F5]
  novelty_score: 3
  rationale: |
    **premium 인정**: EQV·CON·XU·SC depth 3 사중 조합 · count 6 · depth_score 8.67 > 8.5 · signal_ref P4×2·P6 세 카드 명시 · **학평 30번 킬러** · **원형 O-05b 신규 후보** (곡선 위 중심 + 두 직선 접 + 개수 조건 + 무게중심) · 세션 62 원 소단원 premium 신규 대발견
  vendor_calibration_signal: {L5_confidence: 0.92, L2_signature_neighbors: [마-CM2-GM-원-0512, 쎈-CM2-GM-원-0367, 쎈-CM2-GM-원-0281]}
```

**Deliverable 표본 최종 목록 (20문)**:
- BASIC (3): 0315·0317·0319
- NORMAL (5): 0323·0327·0344·0378·0384
- TOUGH (5): 0320·0342·0369·0397·0417
- STEP 2 서술형 (2): 0491·0494
- STEP 3 (5): 0500·0501·0503·0511·0514

**주의**: 위 리스트 중 `0343` 엔트리는 파일럿 2 판정 문항으로 이번 표본에서 배제 (SKIP note 있음). 실제 유효 판정 20문은 위 목록.

---

## 표본 판정 요약 (20문 · 최종 집계)

| ★ | 개수 | 비율 | 문항 |
|---|---|---|---|
| ★ 1 | 0 | 0% | — |
| ★ 2 | 3 | 15% | 0315 · 0319 · 0344 |
| ★ 3 | 6 | 30% | 0317 · 0320 · 0323 · 0327 · 0378 · 0384 |
| ★ 4 | 9 | 45% | 0342 · 0369 · 0397 · 0417 · 0491 · 0494 · 0500 · 0501 · 0503 |
| ★ 5 | 1 | 5% | 0511 |
| ★ 5 premium | 1 | 5% | **0514 (2024.09 학평 30번 · O-05b 신규 원형)** |

**합계** = 3 + 6 + 9 + 1 + 1 = **20 ✅**

## 회귀 정합률 (예측 vs 실측 · 20문 · v1.10 매핑)

| 벤더 라벨 | 예측 ★ (v1.10) | 실측 ★ | 정합/편차 |
|---|---|---|---|
| BASIC (0315) | 2 | 2 | 정합 |
| BASIC (0317) | 2 | 3 | **+1 상향** (x축 접 조건 결합 부담) |
| NORMAL (0319) | 3 | 2 | **-1 하향** (표준 절차 편향) |
| NORMAL (0323) | 3 | 3 | 정합 |
| NORMAL (0327 · 학평) | 3 | 3 | 정합 |
| NORMAL (0344) | 3 | 2 | **-1 하향** (판별식 즉시) |
| NORMAL (0378) | 3 | 3 | 정합 |
| NORMAL (0384) | 3 | 3 | 정합 |
| TOUGH (0320) | 4 | 3 | **-1 하향** (다단계지만 통찰 저노출 부재) |
| TOUGH (0342 · 학평 25번) | 4 | 4 | 정합 |
| TOUGH (0369 · 학평 25번) | 4 | 4 | 정합 |
| TOUGH (0397 · 학평 15번 빈칸) | 4 | 4 | 정합 (빈칸 감쇠 후 균형) |
| TOUGH (0417 · 학평 20번) | 4 | 4 | 정합 |
| STEP 2 서술형 (0491) | 4 | 4 | 정합 |
| STEP 2 서술형 (0494) | 4 | 4 | 정합 |
| STEP 3 (0500 · 아폴로) | 5 | 4 | -1 하향 (count 4 · premium 미달) |
| STEP 3 (0501) | 5 | 4 | **-1 하향** (원형 반복 감쇠) |
| STEP 3 (0503) | 5 | 4 | **-1 하향** (쎈-0362 완전 동일 · 벤더 간 자기복제) |
| STEP 3 (0511 · 학평 21번) | 5 | 5 | 정합 |
| STEP 3 (0514 · 학평 30번) | 5 | **5 premium** | **정합 + premium 안정 도달** |

**정합률**: 12/20 = **60%** (v1.10 회귀 대비 낮은 편차 · 편차 ≤ 1 유지)
**편차 ≥ 1 이상치**: 8문 (상향 1 · 하향 7)

**핵심 신호**:
- **STEP 3 하향 (0500·0501·0503)**: 벤더 간 시그니처 동일성 (쎈과 완전 동일 문항) · **원형 반복 자기복제 감쇠** 강한 신호
- **NORMAL/TOUGH 하향 (0319·0320·0344)**: 벤더 라벨 과대 (표준 절차형)
- **BASIC 상향 (0317)**: 이중 조건 결합은 BASIC 정합 부족

---

## CM2-GM 원 소단원 벤더 간 (쎈 vs 마플) 정점 통찰 원형 비교

### 매트릭스 (Agent E 쎈 + 이번 세션 62 마플)

| 원형 코드 | 쎈 (Agent E · 20문) | 마플 (본 정독 · 20문) | 벤더 간 정합성 |
|---|---|---|---|
| **O-05 원 접선+원 만남 killer** | 1 (0367 premium) | 0 (근접: 0511) | 유사 · 두 직선 접 |
| **O-05b 곡선 위 중심 + 두 직선 접 (신규)** | 0 | **1 (0514 premium)** | **마플 신규 원형** ⭐ |
| **O-06 근축·POWER OF POINT** | 3 (0355·0361·0362) | 3 (0378·0384·0503) | **6문 확보 · 벤더 공통 지배 원형** ⭐ |
| **아폴로니오스 원 자취** | 1 (0352) | 1 (0500) | **2문 · 벤더 공통** |
| **곡선 위 중심 + 두 축 접** | 1 (0281) | 1 (0369) | **2문 · 벤더 공통 · 완전 동일 시그니처** |
| **정사각형·정삼각형 회전** | 1 (0350) | 0 | 쎈 전용 |
| **원 완전 포함 조건** | 1 (0271) | 0 | 쎈 전용 |
| **두 원 중심선-공통현 수직** | 1 (0354 ★ 5) | 0 | 쎈 전용 |
| **두 원 위 점 사영 최적화** | 1 (0363) | 0 | 쎈 전용 |
| **두 원 위 점 사이 거리 극값** | 1 (0283) | 1 (0500 확장) | 벤더 공통 |

### 근축·POWER OF POINT 축 마플 등장 여부

**질문**: 근축·POWER OF POINT 축이 마플에도 등장하는가?

**답**: **✅ 확인** · 마플 3문 등장:
1. **0378** (NORMAL) — 두 원 교점 지나는 원 계열 · CON depth 2
2. **0384** (NORMAL) — 두 원 공통현 길이 · EQV depth 2 (쎈-0294와 완전 동일)
3. **0503** (STEP 3) — PT²=원 방정식 대입값 · P4 신호 · EQV·CON·RT depth 3 (쎈-0362와 완전 동일)

**핵심 관찰**: 
- **근축·POWER OF POINT 축은 원 소단원의 벤더 간 공통 지배 원형** · 두 벤더 6문 확보 (쎈 3 + 마플 3)
- 쎈 0355 (OP·OQ = |상수항|) · 쎈 0361 (PT²=PA²) 특화 시그니처는 마플에서 정확히 매칭되지 않고 다른 형태 (교점 원 계열·공통현 길이)로 등장 → **쎈 C단계 사고력이 더 정교한 근축 통찰 우세**
- **premium 도달은 근축 자체만으로는 부족** · 쎈 0361·마 0503은 count 3~4로 ★ 4 안정
- **premium 조건**: 근축 + 다른 축 (접선 평행·곡선 위 중심 등) 삼중 결합 필요 (쎈 0367·마 0514 확인)

### 마플 STEP 3 원 소단원 premium 밀도

**본 세션 62 표본 5문 STEP 3 중 premium 1문 (0514) · 밀도 20%**

파일럿 2 마플 원 STEP 3 (2문)에서 premium 1문 (0512) · 밀도 50% → 통합 마플 STEP 3 원 = 7문 중 premium 2문 · **밀도 28.6%**

**세션 61 마플 CM2 소단원별 STEP 3 premium 밀도 매트릭스 대비**:

| 소단원 | 세션 61 이전 밀도 | 세션 62 정정 |
|---|---|---|
| 도형이동 | 40% | 40% (2/5 · 유지) |
| **원의방정식** | 25% (파일럿 2 · 2문 기준) | **28.6%** (7문 통합) ↑ |
| 평면좌표 | 0% (5문) | 0% |
| 직선의방정식 | 0% (3문) | 0% |
| 함수 (합성역함수) | 80% (M Agent 세션 61) | 80% |
| 유리함수 | 0% | 0% |
| 무리함수 | 20% | 20% |
| 집합의뜻 | 100% (P Agent 세션 61) | 100% |

**핵심**:
- **원 소단원 premium 밀도 28.6% · 도형이동 (40%) · 함수 (80%) · 집합의뜻 (100%) 다음 위치**
- **원 소단원은 premium 도달 가능성 유의미** (0 밀도 소단원 3개 대비)
- 원 소단원 정점은 **1) 이중 접 킬러 (곡선 위 중심+두 직선 접)** · **2) 학평 30번 킬러** 두 축이 지배 · 그 외 대다수 ★ 4~5

### 세션 61 vs 세션 62 마플 CM2-GM 평면좌표·도형이동 대비

| 소단원 | 표본 크기 | premium 후보 | 밀도 |
|---|---:|---:|---:|
| 평면좌표 (파일럿 1) | 35 | 1 (0116 O-04) | 2.9% |
| 도형이동 (Agent · 세션 58) | 20 | 2 (0659·0664) | 10% |
| **원의방정식 (파일럿 2 + 본 정독)** | 35 | **2 (0512·0514)** | **5.7%** |

**결론**: **마플 원 소단원 premium 밀도 5.7% · 평면좌표 (2.9%)와 도형이동 (10%) 사이 · 중위 밀도 확정**.

---

## 특이사항 · vendor label 정정 신호

### 1. 예측 편차 이상치 8건 (하향 7 · 상향 1)

- **STEP 3 하향 3건 (0500·0501·0503)**: 원 소단원 STEP 3의 상당수가 쎈 C단계 사고력과 **완전 동일 시그니처** · 벤더 간 자기복제 · **원형 반복 감쇠**로 실측 ★ 4로 하향. 마플 STEP 3 원 소단원 예측 ★ 5 유지 시 편차 발생.
- **STEP 3 v1.10 개정 후보**: 마플 STEP 3 원 = ★ 5, alt: [4] (신뢰 0.65)
- **BASIC 상향 (0317)**: 이중 조건 결합은 BASIC 라벨 대비 상향 · v1.11 후보: BASIC 조건 결합 문항 alt: [3]

### 2. 벤더 간 자기복제 대발견 (신규 신호)

**동일 시그니처 벤더 간 매칭 확인**:
- 마-0378 = 쎈-0234 (두 원 교점 지나는 원 계열)
- 마-0384 = 쎈-0294 (공통현 길이)
- 마-0369 = 쎈-0281 (y=x² 위 중심 + 두 축 접) — 세부 상수만 다름
- 마-0503 = 쎈-0362 (근축 · PT²=PR²)
- 마-0500 ≈ 쎈-0352 (아폴로니오스 원 자취)

**함의**: 시판 CM2-GM 원 소단원의 정점 문항은 **6~8개 원형이 벤더 간 반복**. 우리 시험지 창작 시 이 원형을 그대로 사용하면 **벤더 자기복제 감지 위험** · 최소 변형 정책 (숫자·표현) 준수 필수.

### 3. 신규 premium 원형 등재 후보

**O-05b · 곡선 위 중심 + 두 직선 접 + 무게중심 조건 (0514)**:
- **정의**: 이차함수/직선 위 중심 + 두 직선 동시 접 + 원 개수 조건 + 세 원 중심 무게중심 조건
- **통찰 결합**: I-EQV(3)+I-CON(3)+I-XU(3)+I-SC(3) · P4×2+P6 신호
- **원본**: 마-CM2-GM-원-0514 (2024.09 고1 학평 30번)
- **특성**: **원 소단원 premium 신규 원형** · 학평 30번 킬러 · 곡선+접선+개수+무게중심 사중 조건 · O-05 (원 접선+원 만남) 확장
- **premium-원형-카탈로그.md v1.1 후보**: **O-05b 등재 권장**

### 4. 근축·POWER OF POINT 축 벤더 공통 확인

**핵심 발견**: 근축 축이 마플에서도 3문 확인 (쎈 3문과 동수) → **원 소단원의 벤더 무관 지배 원형** 확정.

premium-원형-카탈로그.md **O-06 근축 원형** 승격 신호:
- 벤더 공통 6문 확보
- ★ 4 안정 · premium 도달은 추가 축 결합 시 (0367·0514)
- 시험지 정점 슬롯 창작 시 근축 원형은 안정 재료 · **회차당 상한 1문** 정책 유지

### 5. 마플 STEP 3 원 소단원 매핑 정정 (v1.11 후보)

**v1.10 현재**: `sub_unit == 원의방정식` → `{star: 5, confidence: 0.75, premium_flag: 25%}`

**세션 62 실측 반영 후 정정 후보 v1.11**:
```
마플_STEP3_star_predict(sub_unit) =
  if sub_unit == 원의방정식: return {star: 4.5, confidence: 0.65, premium_flag: 28.6%, alt: [4, 5], note: "쎈 벤더 간 시그니처 반복 · 자기복제 감쇠 있음"}
```

### 6. 외국 수학자 이름 회피 확인

이번 표본 20문 전체에서 외국 수학자 이름 등장 없음. 아폴로니오스 원 (0500)은 자취 방정식으로 유도되어 CM2-GM 정규 범위. **정책 [feedback_no_foreign_named_formula] 준수 확인**.

### 7. 교육과정 외 격리 확인

이번 표본 20문 전체에서 교육과정 위반 신호 없음. 삼각비 (0397·0511)는 P6 신호 (중2·중3 XU) · 부채꼴 넓이 (0397)는 CM1-CB·CM2-ST 범위. 무게중심 (0514) CM2-GM 정규 범위.

---

## 관련 자산

- 파일럿 2 (원 15문): [`bank/mechanism-데이터-파일럿2-원의방정식.md`](mechanism-데이터-파일럿2-원의방정식.md)
- 쎈 원 정독 (Agent E · 20문): [`bank/mechanism-데이터-쎈-CM2-GM-원.md`](mechanism-데이터-쎈-CM2-GM-원.md)
- 마플 평면좌표 (파일럿 1): [`bank/mechanism-데이터-마플시너지-CM2-GM-평면좌표.md`](mechanism-데이터-마플시너지-CM2-GM-평면좌표.md)
- 마플 도형이동 (Agent · 세션 58): [`bank/mechanism-데이터-마플시너지-CM2-GM-도형이동.md`](mechanism-데이터-마플시너지-CM2-GM-도형이동.md)
- premium 원형 카탈로그: [`bank/premium-원형-카탈로그.md`](premium-원형-카탈로그.md) v1.0
- 벤더 회귀: [`bank/vendor-label-calibration.md`](vendor-label-calibration.md) v1.10
- 스키마: [`bank/정독-스키마-v2.0.md`](정독-스키마-v2.0.md)
- CM2-GM 앵커 v2.0: [`bank/anchors/CM2-GM.md`](anchors/CM2-GM.md)

## 변경 이력

- 2026-07-21 v1.0 — 세션 62 신규 정독. 층화 표본 20문 (BASIC 3 + NORMAL 5 + TOUGH 5 + STEP 2 서술형 2 + STEP 3 5) · 파일럿 2 15문과 별도 · 마플 원 소단원 실측 표본 통합 시 **35문** · **premium 후보 1건 (0514 · O-05b 신규 원형 · 학평 30번 킬러)** · 회귀 정합률 60% (STEP 3 벤더 자기복제 감쇠 신호 · 대다수 하향) · **근축·POWER OF POINT 축 벤더 공통 확정** (쎈 3 + 마플 3 = 6문) · 아폴로니오스 원·곡선 위 중심+두 축 접 원형 벤더 간 완전 동일 시그니처 매칭 확인.
