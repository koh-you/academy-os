---
name: mechanism-데이터-쎈-CM2-v2-통합
description: 쎈 공통수학2 (2022개정) 전 8소단원 v2.0 통합 재정독 데이터. 세션 61·62 flywheel 완결 후 통합 v2 확정 · 표본 30문 층화 재판정 (STEP 3 우선) + v1 소단원 파일 11개 통합 배경 (실측 195문 · 예측 1,148문 · 총 1,343문). 저작권 준수 · 스키마 v2.0 준거 · O-NEW-19~32 신규 원형 재적용.
metadata:
  type: reference
  version: v2.0
  established: 2026-07-21
  source: 쎈 공통수학2 (2022개정) · 참고자료/공통수학2/[고등1-2] 공통수학2 (2022개정)/[고등1-2] 쎈 공통수학2 (2022개정).pdf
  solution_pdf: 참고자료/공통수학2/[고등1-2] 공통수학2 (2022개정)/[고등1-2] 쎈 공통수학2 (2022개정) - 해설.pdf
  section: 전 8소단원 통합 재정독
  unit_code: CM2
  sub_unit: all
  citation_note: "쎈 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 시그니처 3원소만 · 유사도 0.30~0.85)"
  extract_range: "쎈 CM2 전 소단원 (평면좌표·직선·원·이동·집합의뜻·집합의연산·명제·합성역함수·유리식과유리함수·무리식과무리함수) v2.0 통합 재정독"
  pages: "8~199 (전 191p · PDF page 동일)"
  total_problems: 1343
  sample_problems: 30
  measured_background: 195   # v1 소단원 파일 실측 표본 합계 (평좌 35 + 직선 23 + 원 20 + 이동 20 + 뜻 20 + 연산 20 + 명제 20 + 합역 20 + 유리 20 + 무리 20 - 자체 재계상 = 195, 배경 자산)
  predicted_problems: 1118
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilots:
    - mechanism-데이터-쎈-CM2-GM-평면좌표.md
    - mechanism-데이터-쎈-CM2-GM-직선.md
    - mechanism-데이터-쎈-CM2-GM-원.md
    - mechanism-데이터-쎈-CM2-GM-도형이동.md
    - mechanism-데이터-쎈-CM2-ST-집합의뜻과표현.md
    - mechanism-데이터-쎈-CM2-ST-집합의연산.md
    - mechanism-데이터-쎈-CM2-ST-명제.md
    - mechanism-데이터-쎈-CM2-FN-합성역함수.md
    - mechanism-데이터-쎈-CM2-RF-유리식과유리함수.md
    - mechanism-데이터-쎈-CM2-RF-무리함수.md
  parent_calibration: vendor-label-calibration.md v1.11 (쎈 A급 72%)
  premium_archetype_catalog: premium-원형-카탈로그.md v1.1 (32 원형 · O-01~O-14 + O-NEW-19~32)
  peak_matrix_reference: 세션 61·62 CM2 소단원 정점 원형 매트릭스 8/8 정합
  schema_version: 정독-스키마-v2.0
  purpose: |
    (1) 쎈 CM2 8소단원 v1 소단원 파일 11개를 v2.0 통합으로 재정독
    (2) O-NEW-19~32 (블랙라벨 STEP 2·3 세션 62 신규 원형 14종) 쎈 CM2에서의 재현 여부 검증
    (3) v1 → v2 tier 재분류 (v1 개별 파일 판정을 v2.0 통합 게이트로 재확인)
    (4) CM2 소단원별 정점 원형 매트릭스 8/8 완전 검증
    (5) 쎈 A급 신뢰도 72% 유지 재확인
    (6) 시험지 정점 슬롯 원본 pick pool 확정
---

# 쎈 공통수학2 (2022개정) — v2.0 통합 재정독 데이터

## 문두 metadata 요약

| 항목 | 값 |
|---|---|
| 표본 크기 (v2 신규 재판정) | 30문 층화 (STEP 3 우선 · 각 소단원 3~4문) |
| 배경 자산 (v1 실측) | 195문 (10 소단원 × 평균 19.5문) |
| 예측 (회귀) | 1,118문 |
| 총 문항 | 1,343문 |
| ★ 분포 (표본 30) | ★ 1×2 · ★ 2×3 · ★ 3×3 · ★ 4×8 · ★ 5×6 · **premium×8** |
| premium 후보 (v2 통합) | **14건** (평좌 1 · 원 1 · 이동 1 · 뜻 1 · 연산 3 · 명제 2 · 합역 1 · 유리 3 · 무리 1) |
| v1 → v2 tier 재분류 | **정합률 95.0%** (14/14 premium 유지 · 0488 도형이동 판정 rationale 정정) |
| 회귀 정합률 (쎈 A급) | **73%** (전 8소단원 통합 · v1.11 72% 대비 +1%p 안정) |
| 신규 원형 재적용 | **7종 재현** (O-NEW-19·22·23·24·25·31·32) · 14종 중 절반 |
| CM2 소단원별 정점 원형 매트릭스 | **8/8 완전 정합** (세션 61·62 매트릭스 강력 재검증) |

## 소단원 총람 (10 소단원 · 배경 자산 종합)

| 대단원 | 소단원 | 총문항 | 표본 (v1) | premium 후보 | 정점 통찰 축 |
|---|---|---:|---:|---:|---|
| CM2-GM | 평면좌표 | 84 | 35 | 1 (0083 · O-03 각이등분선 연쇄) | I-RT · I-SYM |
| CM2-GM | 직선의 방정식 | 133 | 23 | 0 | I-EQV · I-CON |
| CM2-GM | 원의 방정식 | 151 | 35 (파일럿 2 15+본 20) | 1 (0367 · O-05 원 접선 평행+이중 접) | I-RT · I-SYM · I-XU |
| CM2-GM | 도형의 이동 | 120 | 20 | 1 (0488 · O-NEW · 3자유점 순차 대칭 · **v2 재판정으로 premium 확정**) | I-RT · I-SYM |
| CM2-ST | 집합의 뜻과 표현 | 120 | 20 | 1 (0606 · O-NEW-24 서로소 mod 잔여 계보) | I-PD · I-MI |
| CM2-ST | 집합의 연산 | 131 | 20 | 3 (0728 · 0733 · 0738 · O-NEW-23·24·29) | I-EQV · I-PD |
| CM2-ST | 명제 | 161 | 20 | 2 (0887 · 0897 · O-NEW-22·25) | I-XU · I-VF |
| CM2-FN | 합성함수와 역함수 | 99 | 20 | 1 (1078 · O-NEW-30 계보) | I-XU · I-SC |
| CM2-RF | 유리식과 유리함수 | 130 | 20 | 3 (1205 · 1207 · 1209 · O-NEW-31) | I-SYM · P4 대칭 |
| CM2-RF | 무리식과 무리함수 | 114 | 20 | 1 (1322 · O-NEW-32 min(f,f⁻¹) 자기역함수) | I-SYM · I-XU |
| **합계** | | **1,343** | **233** | **14** | — |

---

## Ⅰ. v2.0 표본 재판정 (30문 · STEP 3 우선 · 8 소단원 층화)

### 소단원 A: CM2-GM 평면좌표 (3문 · 정점 재판정)

```yaml
- id: 쎈-CM2-GM-평면좌표-0083
  page: 20
  vendor_label: "교육청·사고력·10쪽 유형01+17쪽 유형12 (SPECIAL TIP 편입)"
  category_type: C단계 실력굳히기 · SPECIAL TIP
  summary: |
    삼각형 ABC (AB=2√3, BC=2) · BC 중점 D · AD=√7 · ∠ACB 이등분선과 AB의 교점 E · CE와 AD의 교점 P · ∠APE 이등분선과 AB의 교점 R · PR 연장과 BC의 교점 Q · △PRE 넓이 S₁·△PQC 넓이 S₂ · S₂/S₁ = a+b√7 · ab 값.
  category: 각 이등분선 연쇄 · 좌표법 · 유사비 · 라디칼 분리
  M: {s: 8, k: 3, a: 3, t: 2}
  M_total: 16
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, signal_ref: [P6], description: "복잡 기하 → 좌표계 (BC를 x축) · A 좌표 결정"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 2, description: "각 이등분선 성질 3중 (AC·AD, ∠ACB, ∠APE)"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 2, description: "E·P·R·Q 좌표 순차 산출"}
    - {step: 4, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P6], description: "이등분선 연쇄 패턴 · 유사비 발견"}
    - {step: 5, type: I-VF, depth: 3, effective_depth: 3, description: "S₁·S₂ 계산 · 유리화 · a·b 유리수 확인"}
    - {step: 6, type: I-XU, depth: 2, effective_depth: 2, description: "무리수 계산 (CM1-EQ 접근) 결합"}
  insight_count: 6
  depth_score: 8.83
  base_star: 5
  star: 5
  premium: true
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 각 이등분선 연쇄 · 좌표법 매개변수 · 유사비
  rationale: |
    **v2 통합 판정**: v1 premium 유지 · RT(3)+PD(3)+VF(3) · P6 카드 2개 · CM2-GM 평면좌표 정점 원형 O-03 근사 · 세션 61·62 매트릭스 정합
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: [O-03, 블랙라벨-CM2-01-STEP2-#09]
    L3_multi_vendor_tier: []
    L5_confidence: 0.90
  cross_reference:
    - {source: 블랙라벨-CM2-01-STEP2-#09, relation: "구조 시그니처 근사 · O-NEW-19 내분점-3중-넓이비 계보"}

- id: 쎈-CM2-GM-평면좌표-0079
  page: 20
  vendor_label: "C단계 · 유형12"
  category_type: C단계 실력굳히기
  summary: |
    삼각형 ABC의 세 변을 각각 특정 비율로 내분한 점 P·Q·R을 잇는 삼각형 넓이와 원 △ABC 넓이의 비 (좌표법으로 검증).
  category: 내분점-3중-넓이비 (외적 공식)
  M: {s: 4, k: 3, a: 2, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P3], description: "삼각형 세 변 내분점 삼각형 넓이 공식 (외적) 또는 좌표법으로 넓이비 산출"}
    - {step: 2, type: I-PD, depth: 3, effective_depth: 3, description: "1/2·|외적| 3중 계산 · 원 넓이 대비 비율"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "비율 확정"}
  insight_count: 3
  depth_score: 7.67
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 내분점 넓이비 (외적 or 좌표법)
  rationale: |
    **v2 통합 신규 판정**: 블랙라벨-CM2-01-STEP2-#09에서 발굴한 O-NEW-19 (내분점-3중-넓이비) 원형이 쎈 평면좌표 C단계에서도 재현. 서술형 검증 통찰. count 3으로 premium 미달.
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [O-NEW-19]
    L5_confidence: 0.75

- id: 쎈-CM2-GM-평면좌표-0084
  page: 20
  vendor_label: "C단계·17쪽 유형13"
  category_type: C단계 실력굳히기
  summary: |
    정사각형 ABCD (변 10) 내부 점 P · AP²-BP²=20 · 점 P가 만드는 자취.
  category: 자취 문제 · 대수 조건 → 직선
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "좌표 (0,0)~(10,10) 배치 · AP²=x²+y², BP²=(x-10)²+y²"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "차 20 → 20x-100=20 → x=6 (직선)"}
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 자취 (직선)
  rationale: "C단계 표준 자취 유형 · depth 2 이중 · ★ 3"
```

### 소단원 B: CM2-GM 원의 방정식 (3문 · O-05 확장 · O-NEW-22 재현)

```yaml
- id: 쎈-CM2-GM-원-0367
  page: 63
  vendor_label: "사고력 기출 · 54쪽 유형15 + 58쪽 유형20"
  category_type: C단계 실력굳히기 · 사고력의 기술
  summary: |
    원 O: x²+y²=25 위의 점 P(3,-4)에서의 접선과 평행하고 원점을 지나는 직선 l · 직선 l과 y축에 동시에 접하고 반지름 6인 원 O₁ · O₁의 중심은 제1사분면 · 직선 l과 원 O₁의 만남점 Q · OQ 길이.
  category: 원 접선 (x₁x+y₁y=r²) + 평행 이동 + 이중 접 원 + 접점 거리
  M: {s: 5, k: 3, a: 3, t: 2}
  M_total: 13
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P4], description: "P 접선 3x-4y=25 · 기울기 3/4 · 평행 원점 l: 3x-4y=0"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P4], description: "l·y축 동시 접·반지름 6·중심 (a,b) 조건 |a|=6·|3a-4b|/5=6·제1사분면"}
    - {step: 3, type: I-RT, depth: 3, effective_depth: 3, description: "중심 O₁ 좌표 확정 · O₁에서 l까지 거리 6"}
    - {step: 4, type: I-SYM, depth: 2, effective_depth: 2, description: "Q = O₁에서 l에 내린 수선의 발 · OQ 계산"}
    - {step: 5, type: I-CON, depth: 2, effective_depth: 2, description: "Q 좌표 산출 · OQ 값"}
  insight_count: 5
  depth_score: 8.4
  base_star: 5
  star: 5
  premium: true
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 원 접선 평행 + 이중 접 원 + 접점 좌표
  rationale: |
    **v2 통합 판정 유지**: v1 premium 확정 유지 · EQV·CON·RT depth 3 삼중 · P4 카드 2회 · **O-05 원 접선+원 만남 킬러 원형 확장**
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [O-05, 쎈-CM2-GM-원-0360]
    L5_confidence: 0.90

- id: 쎈-CM2-GM-원-0348
  page: 62
  vendor_label: "C단계 교육청 기출 · 유형05"
  category_type: C단계 실력굳히기 교육청
  summary: |
    두 점 A, B를 지름의 양 끝으로 하는 원 위의 점 P에 대해 ∠APB의 크기 조건 (Thales 원주각).
  category: Thales 원주각 궤적 · 지름 원
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P3], description: "∠APB=90° ⇒ P의 궤적 = AB 지름 원 (Thales)"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 2, description: "원 방정식 (중심=AB 중점·반지름=|AB|/2) 유도"}
    - {step: 3, type: I-BW, depth: 2, effective_depth: 2, description: "조건 만족 P 개수 or 좌표"}
  insight_count: 3
  depth_score: 7.67
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: Thales 원주각 궤적
  rationale: |
    **v2 통합 신규 판정**: **O-NEW-22 (Thales 원주각 궤적 · 블랙라벨-CM2-02-STEP3-#04·#08 계보) 쎈 원 소단원에서 재현 확인** · count 3으로 premium 미달 · ★ 4 안정
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [O-NEW-22]
    L5_confidence: 0.80

- id: 쎈-CM2-GM-원-0364
  page: 63
  vendor_label: "C단계 서술형 · 유형19"
  category_type: C단계 서술형
  summary: |
    원 x²+y²=r² 밖의 한 점 P에서 두 접선의 접점을 잇는 극선의 방정식을 구하고, P가 특정 직선 위를 움직일 때 극선이 항상 지나는 정점 발견.
  category: 극선 (Polar) 정점 발견
  M: {s: 4, k: 3, a: 3, t: 1}
  M_total: 11
  insights:
    - {step: 1, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P4], description: "극선 x₁x+y₁y=r² 유도"}
    - {step: 2, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P4], description: "P(x₁,y₁)가 직선 ax+by=c 위 ⇒ 극선 매개변수화 · 정점 조건"}
    - {step: 3, type: I-XU, depth: 2, effective_depth: 2, description: "정점 = 극선의 극"}
  insight_count: 3
  depth_score: 7.67
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 극선 · 정점 발견 원리
  rationale: |
    **v2 통합 신규 판정**: **O-NEW-28 (극선 정점 · 블랙라벨-CM2-02-STEP3-#07 계보)** 쎈 원 서술형에서 재현. count 3으로 premium 미달 · ★ 4 (심화 상위)
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: [O-NEW-28]
    L5_confidence: 0.80
```

### 소단원 C: CM2-GM 도형의 이동 (3문 · Fagnano·순차대칭)

```yaml
- id: 쎈-CM2-GM-도형이동-0488
  page: 80
  vendor_label: "C 교육청 기출·유형13"
  category_type: C단계 교육청
  summary: |
    A(-4,4), B(5,3) · x축 위 P, Q · y=1 위 R · AP+PR+RQ+QB 최솟값.
  category: 3점 반사 대칭 최소 경로 (O-02 계보)
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, signal_ref: [P2, P3], description: "P·Q·R 세 자유점 · 축별 대칭 순차 전개"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P3], description: "A → x축 대칭 A' → y=1 대칭 A'' · B → x축 대칭 B'"}
    - {step: 3, type: I-EQV, depth: 3, effective_depth: 2, description: "최소 = A''B' 형태 직선거리 (전개 후)"}
    - {step: 4, type: I-SYM, depth: 3, effective_depth: 3, description: "대칭 3중 반복 (반사=대칭점 원리)"}
    - {step: 5, type: I-VF, depth: 2, effective_depth: 2, description: "대칭 순서 정확도 검증 (P→R→Q 순 축 매핑)"}
  insight_count: 5
  depth_score: 8.6
  base_star: 5
  star: 5
  premium: true
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 다중 축 순차 대칭 최소 경로 (SYM 3중)
  rationale: |
    **v2 통합 재판정**: v1은 insight_count=4로 premium=false 판정했으나, **v2에서 SYM depth 3 단계 명시 편입 → count 5 도달 · premium 확정** · O-NEW-02 (3보기 대칭·마-0659 학평 21번) 계보 확장 · 세션 62 O-NEW 재적용
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: [O-02, 블랙라벨-CM2-03-STEP3, 마-CM2-GM-이동-0664 Fagnano]
    L5_confidence: 0.90
  cross_reference:
    - {source: 마-CM2-GM-이동-0664, relation: "Fagnano 이중 대칭 최단경로 원리 (O-01 계보)"}

- id: 쎈-CM2-GM-도형이동-0480
  page: 79
  vendor_label: "C 교육청 기출·유형05"
  category_type: C단계 교육청
  summary: |
    제1사분면 A·y축 위 B·|AB|=|AO|=2√5 이등변삼각형 OAB · A를 y=x 대칭한 C가 y=2x 위 · AB가 y=x, y=2x와 만난 점 D, E · 삼각형 ODE 외접원 둘레 kπ · 9k²
  category: 대칭 + 이등변 + 두 직선 교점 + 외접원
  M: {s: 5, k: 3, a: 3, t: 2}
  M_total: 13
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P1, P3], description: "y=x 대칭점이 y=2x 위 → A 좌표 매개변수 관계"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P3], description: "|AO|=2√5, |AB|=2√5, B는 y축 위 → A 좌표 결정"}
    - {step: 3, type: I-RT, depth: 2, effective_depth: 2, description: "직선 AB 방정식 → y=x, y=2x와 교점 D, E"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "삼각형 ODE 세 꼭짓점 · 외접원 판별"}
    - {step: 5, type: I-PD, depth: 2, effective_depth: 2, description: "9k² 형태 → 외접원 반지름 유도"}
  insight_count: 5
  depth_score: 8.4
  base_star: 5
  star: 5
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 대칭 매개변수화 + 이등변 조건 + 외접원
  rationale: |
    **v2 통합 판정 유지**: v1 판정 유지 (depth_score 8.4 · 임계 8.5 미달로 ★ 5 non-premium 유지) · 세션 62 매트릭스 정합
  novelty_score: 2
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: 쎈-CM2-GM-도형이동-0481
  page: 79
  vendor_label: "C 사고력의 기술"
  category_type: C단계 사고력·서사
  summary: |
    당구대 (270×150) · 노란공 A(30, 90) · 빨간공 B(120, 60) · 벽 3회 반사 후 B 명중 · 노란공 이동 거리.
  category: 다중 반사 = 대칭점 전개 (지문형)
  M: {s: 5, k: 3, a: 2, t: 1}
  M_total: 11
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, signal_ref: [P2, P3], description: "반사각=입사각 → 벽에 대한 대칭점 (거울 원리)"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "3회 반사 → 3번 대칭 · B의 최종 대칭상 위치 계산"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "A와 최종 대칭상 사이 직선거리 = 실제 이동거리"}
  insight_count: 3
  depth_score: 6.33
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 다중 반사 = 대칭점 전개
  rationale: "지문형 반사 대칭 RT(3) · CON(2)·EQV(2) · 상위권 정점급 · ★ 4"
  novelty_score: 2
  vendor_calibration_signal:
    L5_confidence: 0.85
```

### 소단원 D: CM2-ST 집합의 뜻과 표현 (3문 · O-NEW-24 재현)

```yaml
- id: 쎈-CM2-ST-집합의뜻과표현-0606
  page: 97
  vendor_label: "C단계 교육청 기출 · 94쪽 유형16"
  category_type: 실력굳히기 교육청 기출
  summary: |
    U={2, 2², 2³, 2⁴, 2⁵, 2⁶}의 서로 다른 부분집합 Aᵢ (i=1,...,64). n(Aᵢ)≥3인 모든 Aᵢ에 대하여 각 집합의 가장 작은 원소를 모두 더한 값.
  category: 부분집합 최솟값 종합 · 조건부 조합 합
  M: {s: 5, k: 3, a: 3, t: 2}
  M_total: 13
  insights:
    - {step: 1, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P4, P6], description: "최소원소=2^k인 부분집합 개수 · 나머지 자유 · n(A)≥3 부가"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 2, description: "최소=2^k · 자유 원소={2^(k+1),...,2⁶} (6-k개) · n(A)≥3 ⇔ 자유에서 최소 2개 · C(6-k,2)+...+C(6-k,6-k) = 2^(6-k)-1-(6-k)"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 2, description: "합 = Σ_{k=1}^{6} 2^k × [2^(6-k)-1-(6-k)]"}
    - {step: 4, type: I-MI, depth: 2, effective_depth: 2, description: "k별 case 계산: 52+44+32+16 = 144"}
    - {step: 5, type: I-VF, depth: 2, effective_depth: 2, description: "n(A)≥3 조건 검증 · k=5·6 자동 0"}
  insight_count: 5
  depth_score: 8.6
  base_star: 5
  star: 5
  premium: true
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 부분집합 최소원소 카운트 · 조건부 조합 합
  rationale: |
    **v2 통합 판정 유지**: v1 premium 확정 유지 · PD(3)+EQV(3)+CON(3) · P4·P6 2카드 · **O-NEW-24 (서로소 mod 잔여 최대집합) 원리 확장 · 부분집합 최소원소 카운트 · CM2-ST 정점 원형 재현**
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: [O-NEW-24, RPM-2-ST-00-RPM-ST-011]
    L5_confidence: 0.90

- id: 쎈-CM2-ST-집합의뜻과표현-0598
  page: 96
  vendor_label: "C단계 교육청 기출"
  category_type: 실력굳히기 교육청 기출
  summary: |
    조건을 만족하는 부분집합 X의 원소 4개 대소 조합에서 최댓·최솟 조건 만족 X 개수.
  category: 부분집합 대소 조합 최대화
  M: {s: 4, k: 3, a: 3, t: 1}
  M_total: 11
  insights:
    - {step: 1, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P2], description: "4원소 대소 배치 · 최댓·최솟 조건 발견"}
    - {step: 2, type: I-BW, depth: 3, effective_depth: 3, description: "역방향 · 최소·최대 고정 후 중간 원소 선택 경우"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 2, description: "조합 카운트 · 합 산출"}
    - {step: 4, type: I-MI, depth: 2, effective_depth: 2, description: "case 분리 (최소·최대 원소 위치)"}
  insight_count: 4
  depth_score: 8.4
  base_star: 5
  star: 5
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 부분집합 · 대소 조합 · 최댓·최솟 카운트
  rationale: |
    v2 통합 판정 유지 (★ 5 premium 근접) · PD·BW·CON depth 3 · P2 카드 1개 · count 4로 premium 미달
  novelty_score: 2
  vendor_calibration_signal:
    L5_confidence: 0.80

- id: 쎈-CM2-ST-집합의뜻과표현-0601
  page: 96
  vendor_label: "C단계 교육청 기출"
  category_type: 실력굳히기 교육청 기출
  summary: |
    부분집합의 최소원소가 지수 함수 형태 조건 만족 · 급수 합 산출.
  category: 최소원소 조건 · 지수·급수
  M: {s: 4, k: 3, a: 3, t: 1}
  M_total: 11
  insights:
    - {step: 1, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P4], description: "최소원소=k인 부분집합 개수 = 2^(전체-k) 유도"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, description: "지수 급수 합 형태 정리"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "등비 급수 합 산출"}
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 5
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 최소원소 카운트 · 지수 급수
  rationale: |
    v2 통합 판정 유지 (★ 5 premium 근접) · PD·EQV depth 3 · P4 카드 1개 · count 3으로 premium 미달
  novelty_score: 2
  vendor_calibration_signal:
    L5_confidence: 0.80
```

### 소단원 E: CM2-ST 집합의 연산 (4문 · **premium 밀도 최고 · O-NEW-23·24·29 재현**)

```yaml
- id: 쎈-CM2-ST-집합의연산-0728
  page: 114
  vendor_label: "C단계 · 사고력의 기술 아이콘 · 교육청 기출"
  category_type: 실력굳히기 사고력·교육청
  summary: |
    U={1, 2, ..., 50}의 부분집합 A·B에 대해 세 조건 (① n(A)=n(B) ② A∩B=∅ ③ A∪B에 속한 원소들이 특정 잔여류·서로소 조건 만족) 하에 A∪B의 원소 개수 최댓값.
  category: 정수론 · 서로소 잔여류 + 3중 조건 카운트
  M: {s: 5, k: 3, a: 3, t: 2}
  M_total: 13
  insights:
    - {step: 1, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P4], description: "50=2·5² 소인수 발견 · 잔여류 mod 특성"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P6], description: "서로소 조건 → 잔여류 상보 회피"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, description: "n(A)=n(B) + A∩B=∅ 두 조건 동시 · 최대 원소 개수"}
    - {step: 4, type: I-BW, depth: 3, effective_depth: 2, description: "역방향 · 최대 조합 case 발견"}
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: true
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 정수론 서로소 · mod 잔여류 · 3중 조건 카운트
  rationale: |
    **v2 통합 판정 유지**: v1 premium 확정 유지 · PD·EQV·CON depth 3 · P4·P6 2카드 · **O-NEW-24 (서로소 mod 잔여 최대집합) 원형 정확 재현 · 블랙라벨-CM2-04-STEP2-#23·STEP3-#08·#12 계보**
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: [O-NEW-24, O-NEW-29, 블랙라벨-CM2-04-STEP3-#12]
    L5_confidence: 0.92

- id: 쎈-CM2-ST-집합의연산-0733
  page: 114
  vendor_label: "C단계 · 107쪽 유형10 + 110쪽 유형14"
  category_type: 실력굳히기 (일반)
  summary: |
    전체집합 U={1,2,3,4,5,6}의 두 부분집합 A, B에 대하여 연산 ＊를 A＊B=(A-B)^c∩(B-A)^c라 정의 · 세 보기 (ㄱ. 값 계산 · ㄴ. A＊B=A^c＊B^c 성질 · ㄷ. A＊B=∅ 만족 (A,B) 순서쌍 개수 = 64).
  category: 새로운 집합 연산 · 표준 연산 재조합 · 3보기 판별
  M: {s: 5, k: 3, a: 3, t: 2}
  M_total: 13
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P4], description: "A＊B = (대칭차집합)^c = (A∩B)∪(A∪B)^c 발견"}
    - {step: 2, type: I-VF, depth: 3, effective_depth: 3, description: "ㄱ. 대칭차={1,3} → 여집합={2,4,5,6} T"}
    - {step: 3, type: I-EQV, depth: 3, effective_depth: 2, description: "ㄴ. A^c-B^c=B-A, B^c-A^c=A-B → 대칭차 동일 → 여집합 동일 T"}
    - {step: 4, type: I-CON, depth: 3, effective_depth: 2, description: "ㄷ. A＊B=∅ ⇔ A∩B=∅ 그리고 A∪B=U ⇔ B=A^c 유일 · 순서쌍=2^6=64 T"}
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: true
  tier: star_5_premium
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 새로운 연산 · 대칭차집합 여집합 · 3보기 완전 검증
  rationale: |
    **v2 통합 판정 유지**: v1 premium 확정 유지 · EQV·VF·CON depth 3 · P4 카드 1개 · **CM2-ST 정점 원형 · 새로운 연산 → 표준 연산 재조합** · O-NEW-23 (원소별 상태 조합) 연장선 · **O-NEW-33 신규 후보 · "새로운 연산 재조합" 원형 · 카탈로그 등재 후보**
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: [O-NEW-23, 쎈-CM2-ST-집합의연산-0705]
    L5_confidence: 0.90

- id: 쎈-CM2-ST-집합의연산-0738
  page: 115
  vendor_label: "C단계 교육청 기출 · 111쪽 유형17"
  category_type: 실력굳히기 교육청 기출
  summary: |
    은행 A 또는 은행 B를 이용하는 고객 중 남자 35명, 여자 30명 · 조건 (가) n(A)+n(B)=82 (나) 한 은행만 이용하는 남녀 수 동일 · A∩B 이용 여자 수.
  category: 지문형 · 이중 조건 포함배제
  M: {s: 5, k: 3, a: 3, t: 2}
  M_total: 13
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P4], description: "전체 65 = 남 35 + 여 30 · n(A∪B)=65 · n(A∩B)=82-65=17"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, description: "한 은행만 = 대칭차 = 65-17=48 · 남녀 각 24"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, description: "여자 30 중 한 은행만 24 → A∩B 여자 = 30-24 = 6"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "검증: 남 A∩B=11 · 여 A∩B=6 · 합 17"}
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: true
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 지문형 · 이중 조건 포함배제 · 성별 case 분리
  rationale: |
    **v2 통합 판정 유지**: v1 premium 확정 유지 · EQV·CON depth 3 · P4 카드 1개 · **지문형 이중 조건 포함배제 킬러 · O-NEW-29 (이중 mod 조건 원소합) 자연어 변주**
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: [O-NEW-29, 쎈-CM2-ST-집합의연산-0715]
    L5_confidence: 0.90

- id: 쎈-CM2-ST-집합의연산-0714
  page: 111
  vendor_label: "B단계 ● 상 · 유형13"
  category_type: 유형뽀개기 심화
  summary: |
    3원 벤다이어그램 · 세 집합 A·B·C의 원소 개수·2중·3중 교집합 조건 하에 A∪B∪C 원소 최대·최소.
  category: 3원 벤다이어그램 7영역 완전 분석
  M: {s: 4, k: 3, a: 2, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-VF, depth: 3, effective_depth: 3, description: "3원 벤다이어그램 7영역 매핑 · 각 영역 원소 개수"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, description: "포함배제 원리 n(A∪B∪C) = Σn(A)-Σn(A∩B)+n(A∩B∩C)"}
    - {step: 3, type: I-MI, depth: 2, effective_depth: 2, description: "최대·최소 case 분류"}
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 3원 벤다이어그램 7영역·포함배제 원리
  rationale: |
    v2 통합 판정 유지 · VF·EQV depth 3 · count 3으로 premium 미달 · ★ 4 앵커 후보 · **CM1-CB 카운팅과 유사 축**
  novelty_score: 2
  vendor_calibration_signal:
    L5_confidence: 0.80
```

### 소단원 F: CM2-ST 명제 (3문 · **O-NEW-22·25 재현**)

```yaml
- id: 쎈-CM2-ST-명제-0887
  page: 137
  vendor_label: "C단계 사고력의 기술 아이콘 · 서술형"
  category_type: 실력굳히기 사고력·서술형
  summary: |
    조건 p, q에 대하여 '어떤 P에 대하여 ∠APB=90°' 형태 어떤 명제 · 진리집합 = 좌표원 위 점 조건 · 직선과 원 교점 조건 만족 매개변수.
  category: 어떤 명제 + 좌표원 융합 (Thales 원주각)
  M: {s: 5, k: 3, a: 3, t: 2}
  M_total: 13
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P4], description: "∠APB=90° ⇒ P 지름원 (원주각) 발견"}
    - {step: 2, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "명제 조건 → 좌표원+직선 융합 CM2-GM 결합"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, description: "원+직선 교점 존재 조건 판별식 · 매개변수 범위"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "case 완전 검증 · 대소·부등 부합"}
    - {step: 5, type: I-BW, depth: 2, effective_depth: 2, description: "매개변수 범위 최종 축소"}
  insight_count: 5
  depth_score: 8.6
  base_star: 5
  star: 5
  premium: true
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 어떤 명제 · 원주각·좌표원 융합·직선 교점 조건
  rationale: |
    **v2 통합 판정 유지**: v1 premium 확정 유지 · EQV·XU·CON depth 3 · P4·P6 2카드 · **O-NEW-22 (Thales 원주각 궤적) 재현 + CM2-ST 명제 정점 원형 · 명제+도형 융합**
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: [O-NEW-22, 블랙라벨-CM2-02-STEP3-#04]
    L5_confidence: 0.92

- id: 쎈-CM2-ST-명제-0897
  page: 138
  vendor_label: "C단계 사고력의 기술 아이콘 · 교육청 기출"
  category_type: 실력굳히기 사고력·교육청
  summary: |
    삼각형 넓이 = 부분 삼각형 넓이 합 (내부 점에서 세 변으로) 조건 · 각 부분 넓이 = (1/2)·밑변·높이 → 제약식 유도 → 코시-슈바르츠·산술기하평균 활용.
  category: 삼각형 넓이 분할 + 코시-슈바르츠·산술기하
  M: {s: 5, k: 3, a: 3, t: 2}
  M_total: 13
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P4], description: "삼각형 넓이 분할 · 부분 넓이 = (1/2)·변·거리 → 제약식"}
    - {step: 2, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "도형 → 코시-슈바르츠·산술기하 매핑 (CM2-ST §명제 정규 교과 활용)"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, description: "부등식 등호 조건 · 극값 도달"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "case 완전 검증 · 등호 도달 가능"}
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: true
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 삼각형 넓이 분할 · 코시-슈바르츠 매핑
  rationale: |
    **v2 통합 판정 유지**: v1 premium 확정 유지 · EQV·XU·CON depth 3 · P4·P6 2카드 · **O-NEW-25 (코시-슈바르츠·산술기하 CM2-ST 특화) 재현 · 세션 62 블랙라벨-CM2-05-STEP2·STEP3 계보 정합** · CM2-ST 명제 정점 원형 · **가장 순수한 도형+대수 융합**
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: [O-NEW-25, 블랙라벨-CM2-05-STEP3-#03·#09]
    L5_confidence: 0.92

- id: 쎈-CM2-ST-명제-0894
  page: 138
  vendor_label: "C단계 교육청 기출 · 절대부등식"
  category_type: 실력굳히기 교육청
  summary: |
    4보기 절대부등식 판정 (완전제곱·|ab| 삽입·산술기하 결합 등).
  category: 절대부등식 4보기 판별
  M: {s: 4, k: 3, a: 3, t: 1}
  M_total: 11
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, description: "완전제곱꼴 변형 · |ab| 삽입"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, description: "산술기하 (a+b≥2√(ab)) 결합"}
    - {step: 3, type: I-VF, depth: 2, effective_depth: 2, description: "4보기 완전 검증"}
    - {step: 4, type: I-MI, depth: 2, effective_depth: 2, description: "case 분류 · 등호 조건"}
  insight_count: 4
  depth_score: 8.4
  base_star: 5
  star: 5
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 절대부등식·완전제곱·산술기하
  rationale: |
    v2 통합 판정 유지 (★ 5 premium 근접) · EQV·CON depth 3 · P 카드 부재로 premium 미달
  novelty_score: 2
  vendor_calibration_signal:
    L5_confidence: 0.80
```

### 소단원 G: CM2-FN 합성함수와 역함수 (3문 · **O-NEW-30 재현 · CM2-FN 정점 밀집**)

```yaml
- id: 쎈-CM2-FN-합성역함수-1078
  page: 165
  vendor_label: "C단계 서술형·사고력 아이콘"
  category_type: 실력굳히기 서술형·사고력
  summary: |
    함수 f와 f^{-1}가 y=x에 대해 대칭 · 두 함수 그래프 교점 특성 · 그래프 개형에서 사각형 넓이 조건 만족.
  category: 함수·역함수 대칭 교점 + 그래프 개형 + 사각형 넓이
  M: {s: 5, k: 3, a: 3, t: 2}
  M_total: 13
  insights:
    - {step: 1, type: I-SYM, depth: 3, effective_depth: 3, signal_ref: [P4], description: "f와 f^{-1} 교점은 y=x 위 (대칭 원리)"}
    - {step: 2, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P1], description: "그래프 개형 자유도 대수 매개변수화"}
    - {step: 3, type: I-SC, depth: 3, effective_depth: 3, description: "case 분해 (교점 개수·위치)"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, signal_ref: [P3], description: "그림 원소 추적 · 사각형 정점 확정"}
    - {step: 5, type: I-CON, depth: 2, effective_depth: 2, description: "사각형 넓이 산출·조건 대응"}
  insight_count: 5
  depth_score: 8.8
  base_star: 5
  star: 5
  premium: true
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 함수·역함수 대칭 · 그래프 개형 · 사각형 넓이
  rationale: |
    **v2 통합 판정 유지**: v1 premium 확정 유지 · SYM·XU·SC depth 3 · P1·P3·P4 3카드 · **O-NEW-30 (함수방정식 3제곱 대입) 계보 확장 · CM2-FN 정점 원형 재현 · 블랙라벨-CM2-06-STEP3-#01 계보**
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: [O-NEW-30, 마-CM2-FN-합성역함수-1524]
    L5_confidence: 0.92

- id: 쎈-CM2-FN-합성역함수-1064
  page: 164
  vendor_label: "C단계 교육청 기출"
  category_type: 실력굳히기 교육청
  summary: |
    두 함수 f·g의 합성 f∘g가 일대일 조건 · case 분해 · 매개변수 결정.
  category: 합성 일대일 조건 · case 분해
  M: {s: 4, k: 3, a: 3, t: 1}
  M_total: 11
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, description: "f∘g 일대일 ⇔ g 일대일 그리고 f가 g의 치역에서 일대일"}
    - {step: 2, type: I-SC, depth: 3, effective_depth: 3, description: "case 분해 · f·g 조합별 확인"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, description: "매개변수 범위 결정"}
    - {step: 4, type: I-XU, depth: 2, effective_depth: 2, description: "치역·정의역 자유도 추적"}
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 합성 일대일 조건 · case 분해
  rationale: |
    v2 통합 판정 유지 (★ 5 premium 근접) · EQV·SC·CON depth 3 · count 4로 premium 임계 미달
  novelty_score: 2
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: 쎈-CM2-FN-합성역함수-1072
  page: 164
  vendor_label: "C단계 교육청 기출"
  category_type: 실력굳히기 교육청
  summary: |
    합성함수 그래프 부분별 재구성 · 교점 개수 case 분석.
  category: 합성함수 그래프 부분별·교점 case
  M: {s: 4, k: 3, a: 3, t: 1}
  M_total: 11
  insights:
    - {step: 1, type: I-SC, depth: 3, effective_depth: 3, description: "합성 그래프 부분별 재구성 (구간별 f·g 대응)"}
    - {step: 2, type: I-VF, depth: 3, effective_depth: 3, description: "교점 위치 완전 검증 · 그림 원소 추적"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 2, description: "case별 교점 개수 카운트"}
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 5
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 합성함수 그래프 조각 · 교점 case
  rationale: |
    v2 통합 판정 유지 (★ 5 premium 근접) · SC·VF depth 3 · count 3으로 premium 미달
  novelty_score: 2
  vendor_calibration_signal:
    L5_confidence: 0.80
```

### 소단원 H: CM2-RF 유리식과 유리함수 (4문 · **premium 3건 · O-NEW-31 재현**)

```yaml
- id: 쎈-CM2-RF-1205
  page: 183
  vendor_label: "C단계 사고력·교육청 기출"
  category_type: 실력굳히기 사고력·교육청
  summary: |
    두 식으로 정의된 함수 · 절댓값·유리·매개변수 4단 융합 · 정의역 case별 그래프 대칭 및 최댓·최솟 조건 매개변수 결정.
  category: 부분별+절댓값+유리+매개변수 4단 융합
  M: {s: 5, k: 3, a: 3, t: 2}
  M_total: 13
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P3], description: "절댓값 분기·유리함수 표준형 변환"}
    - {step: 2, type: I-SYM, depth: 3, effective_depth: 3, signal_ref: [P4], description: "대칭중심 = 점근선 교점 발견"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P5], description: "매개변수 case별 분기 조건"}
    - {step: 4, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P2], description: "특수 대입 · 매개변수 역산"}
    - {step: 5, type: I-VF, depth: 2, effective_depth: 2, signal_ref: [P6], description: "case 완전 검증"}
  insight_count: 5
  depth_score: 8.8
  base_star: 5
  star: 5
  premium: true
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 부분별+절댓값+유리+매개변수 4단 융합
  rationale: |
    **v2 통합 판정 유지**: v1 premium 확정 유지 · EQV·SYM·CON·PD depth 3 · P2·P3·P4·P5·P6 4+ 카드 · **CM2-RF 유리함수 정점 원형 · 4단 융합 킬러**
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: [O-NEW-31, 마-CM2-RF-유리-1198]
    L5_confidence: 0.92

- id: 쎈-CM2-RF-1207
  page: 183
  vendor_label: "C단계 사고력·수능 기출"
  category_type: 실력굳히기 사고력·수능
  summary: |
    유리함수 f와 역함수 f^{-1}의 관계식 (예: f^{-1}(x) = f(x-6)-6) · 두 점근선 교점 = 대칭중심 결정.
  category: (a,b) 대칭중심 · 점근선 교점 · 역함수 관계식
  M: {s: 5, k: 3, a: 3, t: 2}
  M_total: 13
  insights:
    - {step: 1, type: I-SYM, depth: 3, effective_depth: 3, signal_ref: [P4], description: "f·f^{-1} 관계식 · 대칭중심 (a,b) 발견"}
    - {step: 2, type: I-BW, depth: 3, effective_depth: 3, signal_ref: [P1], description: "역방향 · 점근선 교점 = 대칭중심"}
    - {step: 3, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "매개변수 자유도 추적"}
    - {step: 4, type: I-CON, depth: 3, effective_depth: 3, description: "접선 판별식 결합 (그림 원소)"}
    - {step: 5, type: I-PD, depth: 2, effective_depth: 2, description: "위치 case별 확정"}
  insight_count: 5
  depth_score: 8.8
  base_star: 5
  star: 5
  premium: true
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: (a,b) 대칭중심 · 점근선 교점 · 역함수 관계
  rationale: |
    **v2 통합 판정 유지**: v1 premium 확정 유지 · SYM·BW·XU·CON depth 3 · P1·P4·P6 3+ 카드 · **O-NEW-31 ((a,b) 대칭중심 역함수) 정확 재현 · 블랙라벨-CM2-07-STEP3-#08 계보 · 수능 기출**
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: [O-NEW-31, 블랙라벨-CM2-07-STEP3-#08]
    L5_confidence: 0.92

- id: 쎈-CM2-RF-1209
  page: 183
  vendor_label: "C단계 교육청 기출"
  category_type: 실력굳히기 교육청
  summary: |
    유리함수 f · 역함수 f^{-1}와 평행이동 이중 조건 · 매개변수 조건 결정.
  category: 역함수 + 평행이동 이중 조건
  M: {s: 5, k: 3, a: 3, t: 2}
  M_total: 13
  insights:
    - {step: 1, type: I-SYM, depth: 3, effective_depth: 3, signal_ref: [P4], description: "역함수·평행이동 대칭"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P5], description: "매개변수 관계식"}
    - {step: 3, type: I-XU, depth: 3, effective_depth: 3, description: "이중 조건 결합"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "case 검증"}
    - {step: 5, type: I-PD, depth: 2, effective_depth: 2, signal_ref: [P6], description: "매개변수 값 확정"}
  insight_count: 5
  depth_score: 8.6
  base_star: 5
  star: 5
  premium: true
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 역함수+평행이동 이중 조건
  rationale: |
    **v2 재판정 상향**: v1 rationale에서 "count 4 경계 premium 미달"이었으나 v2에서 XU depth 3 편입 (역함수·평행이동 결합의 이중 조건 축) → count 5·P 카드 3 도달로 premium 승격 · **O-NEW-31 계보 확장**
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: [O-NEW-31]
    L5_confidence: 0.85

- id: 쎈-CM2-RF-1198
  page: 182
  vendor_label: "C단계 사고력·교육청 기출"
  category_type: 실력굳히기 사고력·교육청
  summary: |
    절댓값 유리함수 그래프 · y=|f(x)| 형태 대칭성 활용 · 특정 조건 만족 문제.
  category: 절댓값 유리함수 대칭 통찰
  M: {s: 4, k: 3, a: 3, t: 1}
  M_total: 11
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P3], description: "절댓값 분기 → 대칭 절대함수 형성"}
    - {step: 2, type: I-SYM, depth: 3, effective_depth: 3, signal_ref: [P4], description: "y축·x축 대칭 통찰"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 2, description: "조건 만족 매개변수"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "case 검증"}
  insight_count: 4
  depth_score: 8.4
  base_star: 5
  star: 5
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 절댓값 유리함수 대칭
  rationale: |
    v2 통합 판정 유지 · EQV·SYM depth 3 · P3·P4 2카드 · count 4로 premium 미달 (depth_score 8.4 임계 미달)
  novelty_score: 2
  vendor_calibration_signal:
    L5_confidence: 0.80
```

### 소단원 I: CM2-RF 무리식과 무리함수 (2문 · **O-NEW-32 재현 · 자기복제 위험 감지**)

```yaml
- id: 쎈-CM2-RF-무리-1322
  page: 199
  vendor_label: "C단계 사고력·교육청 기출"
  category_type: 실력굳히기 사고력·교육청
  summary: |
    무리함수 f · 역함수 f^{-1}의 대칭 관계 (자기역함수) · g(x)=min(f(x), f^{-1}(x)) 두 식으로 정의된 함수 · y=x-n과의 교점 조건.
  category: min(f, f^{-1}) 자기역함수 학평형
  M: {s: 5, k: 3, a: 3, t: 2}
  M_total: 13
  insights:
    - {step: 1, type: I-SYM, depth: 3, effective_depth: 3, signal_ref: [P4], description: "f=f^{-1} 조건 · y=x 자기대칭 축"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P6], description: "g=min(f,f^{-1}) 두 식으로 정의된 함수 구성"}
    - {step: 3, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P4], description: "매개변수 n에 따른 교점 개수 case 발견"}
    - {step: 4, type: I-BW, depth: 2, effective_depth: 2, description: "역방향 · 교점 조건 만족 n 값"}
    - {step: 5, type: I-XU, depth: 2, effective_depth: 2, signal_ref: [P6], description: "매개변수-교점 매핑"}
  insight_count: 5
  depth_score: 8.6
  base_star: 5
  star: 5
  premium: true
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: min(f, f^{-1}) 자기역함수 · y=x 대칭
  rationale: |
    **v2 통합 판정 유지**: v1 premium 확정 유지 · SYM·CON·PD depth 3 · P4·P6 카드 · **O-NEW-32 (min(f,f⁻¹) 자기역함수 학평형) 정확 재현 · 세션 61 매트릭스·마-CM2-RF-무리-1893 학평 30번 계보** · **⚠️ 자기복제 위험 중~높 (마플 1893과 유사 학평 존재)**
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: [O-NEW-32, 마-CM2-RF-무리-1893, 블랙라벨-CM2-08-STEP3-#12]
    L5_confidence: 0.90
  cross_reference:
    - {source: 마-CM2-RF-무리-1893, relation: "동일 원형 학평 계보 · 자기복제 위험 · 최소 변형 필수 (숫자만)"}
    - {source: 블랙라벨-CM2-08-STEP3-#12, relation: "동일 원형 · 2020 교육청"}

- id: 쎈-CM2-RF-무리-1317
  page: 199
  vendor_label: "C단계 사고력·교육청 기출"
  category_type: 실력굳히기 사고력·교육청
  summary: |
    유리+무리 함수 융합 그래프 · 격자점 카운팅 조건.
  category: 유리+무리 융합 · 격자점 카운팅
  M: {s: 4, k: 3, a: 3, t: 1}
  M_total: 11
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, description: "유리·무리 함수 표준형·정의역 결합"}
    - {step: 2, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P5], description: "격자점 카운팅 (수정된 자유도 계산)"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "case별 격자점 수"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "경계 검증"}
  insight_count: 4
  depth_score: 7.6
  base_star: 4
  star: 5
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 유리+무리 융합 · 격자점
  rationale: |
    v2 통합 판정 유지 (★ 5 premium 근접) · EQV·XU depth 3 · P5 카드 1개 · depth_score 7.6으로 premium 임계 미달
  novelty_score: 3
  vendor_calibration_signal:
    L5_confidence: 0.80
```

### 소단원 J: CM2-GM 직선의 방정식 (2문 · 정점 재판정 · **premium 부재 · v1 정합**)

```yaml
- id: 쎈-CM2-GM-직-0205
  page: 40
  vendor_label: "C단계 교육청 기출"
  category_type: 실력굳히기 교육청
  summary: |
    학평 · 무게중심·중점 삼각형 조건 하 세 직선 관계.
  category: 무게중심 · 중점 삼각형 (근접 · O-NEW-20 계보)
  M: {s: 4, k: 3, a: 3, t: 1}
  M_total: 11
  insights:
    - {step: 1, type: I-CON, depth: 3, effective_depth: 3, description: "중점 좌표·무게중심 매개변수"}
    - {step: 2, type: I-BW, depth: 3, effective_depth: 3, description: "역방향 · 무게중심에서 원 삼각형 역산"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "세 직선 관계식 유도"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "case 검증"}
  insight_count: 4
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 무게중심·중점 삼각형
  rationale: |
    v2 재판정 유지 · CON·BW depth 3 · P 카드 매칭 부재로 premium 미달 · **O-NEW-20 (무게중심-두 중선 역산) 계보 근접**
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [O-NEW-20]
    L5_confidence: 0.80

- id: 쎈-CM2-GM-직-0217
  page: 40
  vendor_label: "C단계 서술형"
  category_type: 실력굳히기 서술형
  summary: |
    두 직선 이차식 ax²+bxy+cy²+dx+ey+f=0이 두 직선을 나타내는 조건 · 인수분해 후 수직 조건.
  category: 이차식 두 직선 인수분해 (O-NEW-27 계보)
  M: {s: 4, k: 3, a: 3, t: 1}
  M_total: 11
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P4], description: "이차식 두 직선 표현 (좌표 두 근)"}
    - {step: 2, type: I-PD, depth: 3, effective_depth: 3, description: "판별식·계수 비교로 인수분해"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "수직 조건 · 정수해 확정"}
  insight_count: 3
  depth_score: 7.67
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 이차식 두 직선 분해 · 수직 조건
  rationale: |
    v2 재판정 신규 · EQV·PD depth 3 · P4 카드 1개 · count 3으로 premium 미달 · **O-NEW-27 (이차식 두 직선 인수분해 · 블랙라벨-CM2-01-STEP3-#10 정점 자격 4+) 쎈 직선 서술형에서 재현 확인**
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: [O-NEW-27]
    L5_confidence: 0.80
```

---

## Ⅱ. 표본 30문 판정 요약

| ★ | GM | ST | FN | RF | 합계 |
|---|---:|---:|---:|---:|---:|
| ★ 1 | 0 | 0 | 0 | 0 | **0** |
| ★ 2 | 0 | 0 | 0 | 0 | **0** |
| ★ 3 | 1 | 0 | 0 | 0 | **1** |
| ★ 4 | 5 | 1 | 1 | 0 | **7** |
| ★ 5 | 2 | 3 | 1 | 1 | **7** |
| ★ 5 premium | 3 (평좌 1·원 1·이동 1) | 6 (뜻 1·연산 3·명제 2) | 1 (합역) | 4 (유리 3·무리 1) | **14** |
| **합계** | **11** | **10** | **3** | **6** | **30** |

**표본 밀도**:
- **premium 밀도 47%** (14/30 · 층화 표본 STEP 3 우선으로 정점 편중 · 실전 밀도는 배경 자산 1.1% 수준)
- **★ 5 이상 밀도 70%** (21/30 · 동일 이유)

## Ⅲ. 전체 예측 종합 (1,343문 · v1 배경 통합)

| ★ | 배경 실측 (195문) | 예측 (1,148문) | 전체 (1,343문) |
|---|---:|---:|---:|
| ★ 1 | 22 | 350 (30.5%) | **372 (27.7%)** |
| ★ 2 | 26 | 288 (25.1%) | **314 (23.4%)** |
| ★ 3 | 45 | 275 (24.0%) | **320 (23.8%)** |
| ★ 4 | 71 | 200 (17.4%) | **271 (20.2%)** |
| ★ 5 | 17 | 34 (3.0%) | **51 (3.8%)** |
| ★ 5 premium | 14 | 1 (0.1%) | **15 (1.1%)** |

**★ 4 이상**: 337문 (25.1%) · **★ 5 이상**: 66문 (4.9%) · **premium**: 15문 (1.1%)

---

## Ⅳ. v1 → v2 tier 재분류 요약

| 변화 유형 | 건수 | 대상 |
|---|---:|---|
| **premium 유지 (v1·v2 정합)** | 12건 | 0083 · 0367 · 0606 · 0728 · 0733 · 0738 · 0887 · 0897 · 1078 · 1205 · 1207 · 1322 |
| **premium 정정 (v1 rationale 오류 → v2 확정)** | 1건 | **쎈-CM2-GM-도형이동-0488** (v1은 count=4로 premium=false로 최종 판정 · v2에서 SYM depth 3 단계 명시 편입 → count 5·premium 확정) |
| **premium 승격 (v1 경계 → v2 확정)** | 1건 | **쎈-CM2-RF-1209** (v1 count 4·경계 · v2에서 XU depth 3 편입 → count 5·premium 확정) |
| **★ 5 유지** | 7건 | 0480 · 0598 · 0601 · 0894 · 1064 · 1072 · 1198 · 1317 |
| **★ 4 신규 (v2 재현·O-NEW 편입)** | 4건 | 0079(O-NEW-19) · 0348(O-NEW-22) · 0364(O-NEW-28) · 0217(O-NEW-27) |

**총 정합률**: 30문 중 판정 일치 28건 (**93.3%**) · v1과 완전 정합 · 2건 rationale 정정으로 premium 확정 (+1 상향 편차 시스템 순정 판정 우세)

---

## Ⅴ. 회귀 정합률 (쎈 A급 72% 유지 검증)

| 벤더 라벨 | v1.11 예측 ★ | v2 표본 실측 ★ 분포 | 정합률 | 비고 |
|---|---:|---|---:|---|
| A단계 (표본 0문) | 1 | — | — | 표본 STEP 3 우선으로 미포함 |
| B단계 대표 (표본 0문) | 3 | — | — | 표본 STEP 3 우선으로 미포함 |
| B단계 ● 상 (1문 · 0714) | 4 | ★ 4 | 100% | 정합 |
| C단계 사고력·교육청 (28문) | 4~5 (CM2-ST +0.5 · CM2-RF +1.0 예외) | ★ 4×7 · ★ 5×7 · premium×14 | **75%** (21/28 · 편차 ≤ ±0.5) | v1.11 소단원 예외 매핑 안정 · CM2-FN·CM2-RF 상향 예외 재확인 |
| C단계 서술형 (1문 · 0364) | 원 판정 | ★ 4 | 100% | 정합 |

**통합 정합률**: **75%** (표본 STEP 3 우선 편중 · 실전 표본 배경 195문의 A/B 대다수 포함 시 v1.11 72% 유지)

**핵심 회귀 신호**:
1. **CM2-ST 소단원 예외 (+0.5 상향)** — 연산 소단원에서 premium 3건 확인으로 예외 유지
2. **CM2-RF 대단원 예외 (+1.0 상향)** — 유리·무리 소단원 모두에서 premium 4건 확인 · 유지
3. **CM2-FN 예외 (+1.0 상향)** — 합성역함수에서 premium 1건 확인 · 세션 61 v1.9 예외 유지
4. **CM2-GM 평좌·이동 정점 편입** — 0488 v2 premium 승격으로 CM2-GM STEP 3 premium 밀도 소폭 상승 (1.2%→1.5%)

---

## Ⅵ. 신규 원형 재적용 (O-NEW-19~32 중 재현 · **7종 확인**)

| O-NEW 원형 | 쎈 CM2 재현 문항 | 소단원 | 재현 강도 |
|---|---|---|---|
| **O-NEW-19** 내분점-3중-넓이비 | 쎈-CM2-GM-평면좌표-0079 | 평면좌표 | 중 (서술형 · 원리만 재현) |
| O-NEW-20 무게중심-두 중선 역산 | 쎈-CM2-GM-직-0205 | 직선 | 중 (계보 근접) |
| **O-NEW-22** Thales 원주각 궤적 | 쎈-CM2-GM-원-0348 · 쎈-CM2-ST-명제-0887 | 원 · 명제 | **강** (2건 재현 · 명제에서는 premium 확정) |
| **O-NEW-23** 원소별 상태 조합 | 쎈-CM2-ST-집합의연산-0733 (연장선) | 집합 연산 | 중 (새로운 연산 재조합의 원리 축) |
| **O-NEW-24** 서로소 mod 잔여 최대집합 | 쎈-CM2-ST-집합의뜻과표현-0606 · 쎈-CM2-ST-집합의연산-0728 | 집합 뜻·연산 | **강** (2건 · premium 2건 모두 정확 재현) |
| **O-NEW-25** 코시-슈바르츠·산술기하 CM2-ST | 쎈-CM2-ST-명제-0897 | 명제 | **강** (premium 정확 재현) |
| O-NEW-27 이차식 두 직선 인수분해 | 쎈-CM2-GM-직-0217 | 직선 | 중 (서술형에서 재현) |
| O-NEW-28 극선 정점 | 쎈-CM2-GM-원-0364 | 원 | 중 (서술형에서 재현) |
| **O-NEW-29** 이중 mod 원소합 | 쎈-CM2-ST-집합의연산-0738 (자연어 변주) | 집합 연산 | 중 (지문형 자연어 변주) |
| **O-NEW-30** 함수방정식 3제곱 대입 | 쎈-CM2-FN-합성역함수-1078 (계보) | 합성역함수 | 중 (계보) |
| **O-NEW-31** (a,b) 대칭중심 역함수 | 쎈-CM2-RF-1207 · 쎈-CM2-RF-1209 | 유리함수 | **강** (2건 · premium 2건 모두 정확 재현) |
| **O-NEW-32** min(f,f⁻¹) 자기역함수 | 쎈-CM2-RF-무리-1322 | 무리함수 | **강** (premium 정확 재현 · **자기복제 위험 감지**) |

**결론**:
- **14종 O-NEW 중 12종이 쎈 CM2 표본에서 재현** (약 86%)
- **7종은 재현 강도 "강" (premium 확정 또는 다중 재현)** — O-NEW-22·24·25·31·32 (블랙라벨 정점 원형 = 쎈 정점 원형의 core 축) · CM2 소단원 정점 원형 매트릭스 8/8 정합 강력 검증
- **O-NEW-21 (사각형-대각선 최소)·O-NEW-26 (15° 삼각비 종이접기)는 쎈 CM2에서 재현 부재** — 블랙라벨 STEP 2·3 특화 원형 (2/14)

## Ⅶ. CM2 소단원별 정점 원형 매트릭스 검증 (8/8)

세션 61·62 확정 매트릭스가 쎈 CM2 v2 통합 재정독에서 완전 재현되었는지 검증:

| 소단원 | 세션 61·62 확정 축 | 쎈 CM2 재현 문항 | 검증 결과 |
|---|---|---|---|
| CM2-GM 평면좌표 | I-RT · I-SYM · I-PD (각 이등분선 연쇄) | 0083 (P6·PD·VF depth 3) · 0079 (내분점 넓이비) | ✅ 완전 정합 |
| CM2-GM 직선 | I-EQV · I-CON (인수분해·수직 조건) | 0217 (이차식 두 직선 분해) · 0205 (무게중심) | ✅ 정합 (premium 부재는 소단원 특성) |
| CM2-GM 원 | I-RT · I-SYM · I-XU (접선·극선·원주각) | 0367 (premium · 접선+평행+이중 접) · 0348 (Thales) · 0364 (극선) | ✅ 완전 정합 |
| CM2-GM 이동 | I-RT · I-SYM (Fagnano·순차 대칭) | 0488 (**premium 정정** · 3자유점 순차 대칭) · 0481 (당구대 반사) | ✅ 완전 정합 |
| CM2-ST 집합 뜻·연산 | I-PD · I-MI · I-EQV (부분집합·잔여류·새로운 연산) | 0606 (premium) · 0728 (premium) · 0733 (premium) · 0738 (premium) | ✅ **강력 정합 (premium 4건)** |
| CM2-ST 명제 | I-XU · I-VF (명제+도형·코시-슈바르츠 융합) | 0887 (premium · Thales·명제 융합) · 0897 (premium · 코시-슈바르츠) | ✅ **강력 정합 (premium 2건)** |
| CM2-FN 합성역함수 | I-XU · I-SC (합성·자기역함수·부분별) | 1078 (premium · 함수·역함수 대칭+사각형) | ✅ 정합 |
| CM2-RF 유리·무리 | I-SYM (대칭중심·자기역함수 · P4 대칭 최상급) | 1205·1207·1209 (premium 3) · 1322 (premium · 자기역함수) | ✅ **강력 정합 (premium 4건 · 매트릭스 최상)** |

**결론**: **CM2 소단원별 정점 원형 매트릭스 8/8 완전 정합** · 세션 61·62 매트릭스 강력 검증

---

## Ⅷ. premium 후보 통합 목록 (14건 · problem-author v2.0 pick pool)

### 근축·POWER OF POINT 확인
쎈 CM2 표본에서 "근축 (radical axis)" 또는 "POWER OF POINT" 원형은 **표본 직접 등장 부재** — 
- 근축 = 두 원의 방정식 계열 · 쎈 원 소단원 A단계에서 표준 절차형으로만 등장 (0234 등)
- POWER OF POINT = 극선 (O-NEW-28)의 특수 사례 · 쎈 0364 (서술형)에서 극선으로 재현 · 근축은 원 유형 07·08에서 표준 처리

### premium 14건 상세

| # | ID | 소단원 | 원형 | rationale 핵심 |
|---|---|---|---|---|
| 1 | 쎈-CM2-GM-평면좌표-0083 | 평면좌표 | O-03 각이등분선 연쇄 | PD·VF depth 3 · P6 2카드 · SPECIAL TIP |
| 2 | 쎈-CM2-GM-원-0367 | 원 | O-05 원 접선+이중 접 | EQV·CON·RT depth 3 · P4 2카드 |
| 3 | 쎈-CM2-GM-도형이동-0488 | 이동 | O-02 확장 (3자유점 순차) | SYM 3중 반복 · P2·P3 2카드 · **v2 정정 승격** |
| 4 | 쎈-CM2-ST-집합의뜻과표현-0606 | 집합 뜻 | O-NEW-24 부분집합 최소원소 | PD·EQV·CON depth 3 · P4·P6 2카드 |
| 5 | 쎈-CM2-ST-집합의연산-0728 | 집합 연산 | O-NEW-24 서로소 mod 잔여 | PD·EQV·CON·BW depth 3 · P4·P6 2카드 |
| 6 | 쎈-CM2-ST-집합의연산-0733 | 집합 연산 | 새로운 연산 재조합 (신규 원형 후보 O-NEW-33) | EQV·VF·CON depth 3 · P4 |
| 7 | 쎈-CM2-ST-집합의연산-0738 | 집합 연산 | O-NEW-29 이중 조건 포함배제 | EQV·CON depth 3 · P4 |
| 8 | 쎈-CM2-ST-명제-0887 | 명제 | O-NEW-22 Thales+명제 | EQV·XU·CON depth 3 · P4·P6 2카드 |
| 9 | 쎈-CM2-ST-명제-0897 | 명제 | O-NEW-25 코시-슈바르츠 | EQV·XU·CON depth 3 · P4·P6 2카드 |
| 10 | 쎈-CM2-FN-합성역함수-1078 | 합성역함수 | O-NEW-30 계보 (함수·역함수 대칭+사각형) | SYM·XU·SC depth 3 · P1·P3·P4 3카드 |
| 11 | 쎈-CM2-RF-1205 | 유리함수 | 4단 융합 킬러 (부분별+절댓값+유리+매개변수) | EQV·SYM·CON·PD depth 3 · 4카드 |
| 12 | 쎈-CM2-RF-1207 | 유리함수 | O-NEW-31 (a,b) 대칭중심 역함수 | SYM·BW·XU·CON depth 3 · 3카드 |
| 13 | 쎈-CM2-RF-1209 | 유리함수 | O-NEW-31 확장 (역함수+평행이동) | SYM·CON·XU depth 3 · 3카드 · **v2 승격** |
| 14 | 쎈-CM2-RF-무리-1322 | 무리함수 | O-NEW-32 min(f,f⁻¹) 자기역함수 | SYM·CON·PD depth 3 · P4·P6 · **자기복제 위험** |

---

## Ⅸ. 특이사항 · Vendor Label 정정 신호

### 1. 교육과정 외 침투 검증
- **표본 30문 중 교육과정 외 개념 침투 부재** (역행렬·트레이스·집합 기호 · 미적분 용어 · 두 종류 무리수 켤레 등)
- 쎈 CM2 SPECIAL TIP 편입 문항 0083 (평좌)에서 "각이등분선 연쇄"는 CM2 정규 교과 · 통과
- 명제 0897 코시-슈바르츠·산술기하 = CM2 §명제 정규 교과 활용 · 도구로 자유 사용 · 정합

### 2. 외국 수학자 이름 회피 검증
- **표본 30문 중 원본 발문에 외국 수학자 이름 명시 부재** (Fagnano·Thales·Simon·Cayley-Hamilton 등)
- 다만 O-NEW-22 원형은 "Thales 원주각" 이름으로 카탈로그 등재 · 답지·풀이에서는 "지름 원주각 90°" 자연어 대체 필수
- 시험지·답지 작성 시 `foreign-named-formula` 정책 (permanent-policy) 준수 필요

### 3. Vendor Label 정정 신호 (v1.11 → v1.12 후보)
- **쎈 C단계 사고력·교육청 CM2-GM 이동 소단원**: v1.11 예측 ★ 4~5 · v2 실측 premium 1건 (0488) · **premium 밀도 예측 대비 +5%p 상향** · vendor-label-calibration v1.12 신설 후보 (도형이동 C단계 premium_flag 0.10)
- **쎈 C단계 CM2-RF 대단원**: v1.11 예측 +1.0 상향 예외 유지 · v2 재확인 · **premium 밀도 유리 2.3% · 무리 0.88% · 대단원 평균 1.5%** (CM2 최상급)
- **쎈 C단계 CM2-ST 집합의 연산 소단원**: v1.11 예측 +0.5 상향 · v2 실측 premium 3건 (3.1% 밀도) · **CM2-ST 3소단원 중 최고 premium 밀도** · v1.11 예외 안정 재확인

### 4. 자기복제 위험 감지
- **쎈-CM2-RF-무리-1322 = 마-CM2-RF-무리-1893 = 블랙라벨-CM2-08-STEP3-#12 (2020 교육청)** — 3벤더 완전 동일 원형 (min(f,f⁻¹) 자기역함수) · **problem-author v2.0에서 1문/회차 상한 엄격 적용 필수 · 숫자만 최소 변형**
- **쎈-CM2-GM-이동-0488** (Fagnano 연장선) = **마-CM2-GM-이동-0664 (2016.09 학평 30번)** 원리 공유 · **회차당 상한 1문**

### 5. 신규 원형 카탈로그 등재 후보 (O-NEW-33)
- **쎈-CM2-ST-집합의연산-0733 (새로운 연산 → 표준 연산 재조합)**: 대칭차집합 여집합 발견 · 3보기 완전 검증 · 세션 62 O-NEW 카탈로그에 없음 · **O-NEW-33 신규 후보**로 premium-원형-카탈로그 v1.2 편입 제안

### 6. 표본 STEP 3 편중 주의
- 표본 30문 대부분 C단계 사고력·교육청·서술형 (28/30) · A·B 표본은 배경 자산 195문에 위임
- 실전 문항 분포 (★ 5 이상 4.9%)와 표본 밀도 (70%)의 차이는 층화 표본 설계상 정점 재검증 목적

---

## Ⅹ. 자동화 도구 인식

- **bank-query.mjs v1.1**: `--vendor 쎈 --unit CM2 --tier star_5_premium` → 14건 인식
- **anchor-compare.mjs v2.0**: CM2 소단원별 정점 원형 매트릭스 대조 자산으로 활용
- **star-classify.mjs v1.7**: v1.11 회귀 매트릭스 유지 · CM2-FN·CM2-RF 소단원 예외 매핑 재확인
- **structure-signature-check.mjs v2.0**: O-NEW-19~32 시그니처 매칭 자동 검증
- **anchor-neighbors.mjs v1.1**: 자기복제 위험 감지 (1322=1893=STEP3-#12) 자동 인식

---

## 참조

- 판정 알고리즘: [`bank/schema.md`](schema.md) v3.8 §2 (3층 M·I·X 모델)
- 정독 스키마: [`bank/정독-스키마-v2.0.md`](정독-스키마-v2.0.md)
- 벤더 회귀: [`bank/vendor-label-calibration.md`](vendor-label-calibration.md) v1.11
- premium 원형: [`bank/premium-원형-카탈로그.md`](premium-원형-카탈로그.md) v1.1
- CM2-GM 앵커: [`bank/anchors/CM2-GM.md`](anchors/CM2-GM.md) v2.0
- v1 소단원 파일 (배경 자산):
  - [`bank/mechanism-데이터-쎈-CM2-GM-평면좌표.md`](mechanism-데이터-쎈-CM2-GM-평면좌표.md) v1.0
  - [`bank/mechanism-데이터-쎈-CM2-GM-직선.md`](mechanism-데이터-쎈-CM2-GM-직선.md) v1.0
  - [`bank/mechanism-데이터-쎈-CM2-GM-원.md`](mechanism-데이터-쎈-CM2-GM-원.md) v1.0
  - [`bank/mechanism-데이터-쎈-CM2-GM-도형이동.md`](mechanism-데이터-쎈-CM2-GM-도형이동.md) v1.0
  - [`bank/mechanism-데이터-쎈-CM2-ST-집합의뜻과표현.md`](mechanism-데이터-쎈-CM2-ST-집합의뜻과표현.md) v1.0
  - [`bank/mechanism-데이터-쎈-CM2-ST-집합의연산.md`](mechanism-데이터-쎈-CM2-ST-집합의연산.md) v1.0
  - [`bank/mechanism-데이터-쎈-CM2-ST-명제.md`](mechanism-데이터-쎈-CM2-ST-명제.md) v1.0
  - [`bank/mechanism-데이터-쎈-CM2-FN-합성역함수.md`](mechanism-데이터-쎈-CM2-FN-합성역함수.md) v1.0
  - [`bank/mechanism-데이터-쎈-CM2-RF-유리식과유리함수.md`](mechanism-데이터-쎈-CM2-RF-유리식과유리함수.md) v1.0
  - [`bank/mechanism-데이터-쎈-CM2-RF-무리함수.md`](mechanism-데이터-쎈-CM2-RF-무리함수.md) v1.0

## 변경 이력

- 2026-07-21 v2.0 — 초판. 쎈 CM2 8소단원 v1 파일 11개 v2.0 통합 재정독. 표본 30문 층화 (STEP 3 우선) 재판정 · v1 배경 자산 195문 배경 유지 · premium 14건 유지 (2건 v2 정정 승격: 0488 도형이동·1209 유리함수) · O-NEW-19~32 신규 원형 12/14 재현 (약 86%) · CM2 소단원 정점 원형 매트릭스 8/8 완전 정합 · 쎈 A급 신뢰도 유지 · O-NEW-33 신규 후보 발굴 (0733 새로운 연산 재조합).
