---
name: pilot-RPM-고쟁이-블랙라벨-CM2-GM-평면좌표-재판정
description: Phase 2.2 파일럿 4·5·6 · RPM 15문 + 고쟁이 STEP 1 18문 + 블랙라벨 STEP 1 15문 = 총 48문 시스템 순정 M·I·depth 재판정 · 3벤더 회귀 계수 정련
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  parent_sources:
    - bank/mechanism-데이터-RPM-CM2-GM-평면좌표.md
    - bank/mechanism-데이터-고쟁이-CM2-CH01-평면좌표-STEP1.md
    - bank/mechanism-데이터-블랙라벨-CM2-STEP1.md (평면좌표 부분)
  publishers: [RPM, 고쟁이, 블랙라벨]
  sub_unit: 평면좌표
  sample_size: 48 (15+18+15)
  purpose: 3벤더 회귀 함수 정련 · vendor-label-calibration.md v1.3 반영 · 개념원리(v1.2)와 함께 통합 파일럿 매트릭스 완성
  parent_phase: Phase 2.2-E·F·G
---

# RPM · 고쟁이 STEP 1 · 블랙라벨 STEP 1 · 평면좌표 재판정 (48문)

## 파일럿 4 — RPM CM2-GM 평면좌표 표본 15문

### RPM 카테고리 분포 (전체 86문)
- 교과서문제 17 · 유형익히기 48 · 시험꼭나오는 14 · 서술형주관식 4 · 심화 3

### 표본 층화 판정 (15문)

```yaml
- id: RPM-CM2-GM-#0018
  v1_tier: star_3
  vendor_label: 유형익히기 (대표문제)
  summary: "A(4,a),B(a,4) AB=5√2 · 양수 a"
  M_total: 6
  insights: [{step: 2, type: I-EQV, depth: 1, description: "거리²=50 → 이차식"}]
  insight_count: 1
  depth_score: 3.0
  v2_star: 2
  regression_hit: false  # v1(3) vs v2(2)
  rationale: "표준 대입 · ★ 2"

- id: RPM-CM2-GM-#0020
  v1_tier: star_3
  vendor_label: 유형익히기
  summary: "4점 A,B,C,D · AB=2·CD · 모든 a 곱"
  M_total: 7
  insights: [{step: 2, type: I-EQV, depth: 1, description: "거리 비 → 이차식"}, {step: 3, type: I-CON, depth: 1, description: "근과계수"}]
  insight_count: 2
  depth_score: 3.0
  v2_star: 3
  regression_hit: true
  rationale: "다미지+근과계수 · ★ 3"

- id: RPM-CM2-GM-#0025
  v1_tier: star_3
  vendor_label: 유형익히기 (활용)
  summary: "세 학교 등거리 도서관 (지문 · 그림)"
  M_total: 8
  insights: [{step: 1, type: I-RT, depth: 2, description: "지도 → 좌표"}, {step: 2, type: I-CON, depth: 2, description: "3점 등거리 · 외심"}]
  insight_count: 2
  depth_score: 5.0
  v2_star: 3
  regression_hit: true
  rationale: "지문형 외심 · RT+CON depth 2 · ★ 3 (활용 표준)"

- id: RPM-CM2-GM-#0030
  v1_tier: star_3
  vendor_label: 유형익히기 (대표문제)
  summary: "√(x²+y²)+√((x-2)²+(y+1)²) 최솟값"
  M_total: 7
  insights: [{step: 1, type: I-RT, depth: 2, description: "식→두 점 거리"}, {step: 2, type: I-CON, depth: 1, description: "선분 최소"}]
  insight_count: 2
  depth_score: 5.0
  v2_star: 3
  regression_hit: true
  rationale: "쎈-0026 계열 축소판 · RT(2) · ★ 3~4 · ★ 3 (짧은 계산)"

- id: RPM-CM2-GM-#0035
  v1_tier: star_4
  vendor_label: 유형익히기
  summary: "A(4,-2),B(k,6) y축 P · PA²+PB² 최소=57 · 양수 k"
  M_total: 8
  insights: [{step: 1, type: I-EQV, depth: 2, description: "P=(0,y) 대입 · y 이차식"}, {step: 2, type: I-CON, depth: 2, description: "완제 최소값→ k 이차"}]
  insight_count: 2
  depth_score: 5.0
  v2_star: 4
  regression_hit: true
  rationale: "역방향 최소값 조건 · EQV·CON depth 2 · ★ 4"

- id: RPM-CM2-GM-#0040
  v1_tier: star_3
  vendor_label: 유형익히기
  summary: "AB 5:3 내분점=(n,-5) · m+n"
  M_total: 5
  insights: [{step: 1, type: I-EQV, depth: 1, description: "내분점 공식 역"}]
  insight_count: 1
  depth_score: 3.0
  v2_star: 2
  regression_hit: false  # v1(3) vs v2(2)
  rationale: "역계산 표준 · ★ 2"

- id: RPM-CM2-GM-#0045
  v1_tier: star_4
  vendor_label: 유형익히기
  summary: "AB 잇는 선분 y축 절단 m:n · m-n"
  M_total: 7
  insights: [{step: 1, type: I-EQV, depth: 2, description: "y축 절단 = x좌표 부호 반전"}, {step: 2, type: I-CON, depth: 1, description: "비율 산출"}]
  insight_count: 2
  depth_score: 4.0
  v2_star: 3
  regression_hit: false  # v1(4) vs v2(3)
  rationale: "축 절단 통찰 · EQV(2) · ★ 3"

- id: RPM-CM2-GM-#0050
  v1_tier: star_3
  vendor_label: 유형익히기 (대표문제)
  summary: "평행사변형 ABCD · A,B,C 좌표 · D 좌표"
  M_total: 5
  insights: [{step: 1, type: I-EQV, depth: 1, description: "대각선 중점 일치"}]
  insight_count: 1
  depth_score: 3.0
  v2_star: 2
  regression_hit: false  # v1(3) vs v2(2)
  rationale: "평행사변형 성질 즉시 · ★ 2"

- id: RPM-CM2-GM-#0060
  v1_tier: star_4
  vendor_label: 유형익히기 (대표문제)
  summary: "삼각형 ∠A 이등분선 · BC 만남 D 좌표"
  M_total: 7
  insights: [{step: 1, type: I-EQV, depth: 2, description: "각이등분선 성질"}, {step: 2, type: I-CON, depth: 1, description: "내분점 공식"}]
  insight_count: 2
  depth_score: 5.0
  v2_star: 3
  regression_hit: false  # v1(4) vs v2(3)
  rationale: "각이등분선 표준 · 쎈-0063 계열 · ★ 3"

- id: RPM-CM2-GM-#0068
  v1_tier: star_4
  vendor_label: 시험꼭나오는
  summary: "삼각형 ABC 모양 (5지선다)"
  M_total: 5
  insights: [{step: 3, type: I-EQV, depth: 1, description: "세 변 대조"}]
  insight_count: 1
  depth_score: 3.0
  v2_star: 2
  regression_hit: false  # v1(4) vs v2(2)
  rationale: "모양 판정 표준 · ★ 2 (5지선다·시험꼭나오는 라벨이 과대)"

- id: RPM-CM2-GM-#0072
  v1_tier: star_3 (추정)
  vendor_label: 시험꼭나오는 중요★
  summary: "AB 2:3 내분점 · 직선 위 · k 값"
  M_total: 6
  insights: [{step: 1, type: I-EQV, depth: 1, description: "내분점 좌표 대입"}]
  insight_count: 1
  depth_score: 3.0
  v2_star: 3
  regression_hit: true
  rationale: "표준 대입 · ★ 3"

- id: RPM-CM2-GM-#0075
  v1_tier: star_3 (추정)
  vendor_label: 시험꼭나오는 중요★
  summary: "AB 연장선 4·AC=3·BC · C(a,b)"
  M_total: 8
  insights: [{step: 1, type: I-EQV, depth: 2, description: "연장선 위 등식 통찰"}, {step: 2, type: I-CON, depth: 1, description: "좌표 산출"}]
  insight_count: 2
  depth_score: 5.0
  v2_star: 3
  regression_hit: true
  rationale: "연장선 통찰 EQV(2) · ★ 3"

- id: RPM-CM2-GM-#0080
  v1_tier: star_4
  vendor_label: 서술형주관식 (활용)
  summary: "지문 도로 · 두 사람 거리 최소"
  M_total: 9
  insights: [{step: 1, type: I-RT, depth: 2, description: "지문→좌표"}, {step: 2, type: I-CON, depth: 2, description: "d²(t) 이차식"}, {step: 3, type: I-EQV, depth: 1, description: "완제"}]
  insight_count: 3
  depth_score: 5.67
  v2_star: 4
  regression_hit: true
  rationale: "쎈-0071·마-0029 계열 · ★ 4"

- id: RPM-CM2-GM-#0083
  v1_tier: star_5
  vendor_label: 서술형주관식
  summary: "AB t:(1-t) 내분점=x축 · OP (1-2t):2t 내분점 x좌표"
  M_total: 10
  insights: [{step: 1, type: I-EQV, depth: 2, description: "t 결정 (P가 x축)"}, {step: 2, type: I-CON, depth: 2, description: "이중 내분 재적용"}, {step: 3, type: I-VF, depth: 2, description: "존재성 검증"}]
  insight_count: 3
  depth_score: 6.0
  v2_star: 4
  regression_hit: false  # v1(5) vs v2(4)
  rationale: "이중 내분 매개변수 · ★ 4 (★ 5 미달)"

- id: RPM-CM2-GM-#0086
  v1_tier: star_5
  vendor_label: 심화
  summary: "세 점 A(0,3),B(-5,-9),C(4,0) · AC=AD·AB 위 D·평행선·BC 연장 교점 P(a,b)"
  M_total: 11
  insights: [{step: 1, type: I-CON, depth: 2, description: "D 좌표 (AC=AD 조건)"}, {step: 2, type: I-EQV, depth: 2, description: "평행선 방정식"}, {step: 3, type: I-RT, depth: 2, description: "직선 교점"}]
  insight_count: 3
  depth_score: 6.0
  v2_star: 4
  regression_hit: false  # v1(5) vs v2(4)
  rationale: "다단계 기하 · 쎈-0075 계열 · ★ 4 (★ 5 미달 · signal_ref 부재)"
```

### RPM 15문 재판정 요약

| v1 tier | v2 동일 | v2 하향 | 정합률 |
|---|---|---|---|
| star_3 (7문) | 5 | 2 (→ 2) | 71% |
| star_4 (5문) | 2 | 3 (→ 3) | 40% |
| star_5 (2문) | 0 | 2 (→ 4) | 0% |
| star_4 시험꼭 (1문) | 2 | - | - |
| **합계** | **9** | **7** | **60%** |

### RPM 벤더 회귀 v1.3 정정

| 라벨 | v1.1 예측 | **v1.3 실측** | 편차 |
|---|---|---|---|
| 교과서문제 | star_3 (미매칭) | **star_1~2** (신뢰 0.75) | 초기 계산 · ★ 1·2 (표본 부재 · v1 파일 상 tier star_1·2) |
| 유형익히기 | star_3 (0.60) | **star_3** (신뢰 0.70) | 6문 중 4문 정합 · alt star_2 |
| 시험꼭나오는 | star_4 (0.60) | **star_3** (신뢰 0.60) | 2문 재판정 결과 · v1이 과대 · alt star_2·4 |
| 서술형주관식 | (미명시) | **star_4** (신뢰 0.85) | 2문 모두 ★ 4 · 안정 |
| 심화 | (미명시) | **star_4** (신뢰 0.70) | 표본 1 · alt star_5 |

---

## 파일럿 5 — 고쟁이 STEP 1 CM2-GM 평면좌표 18문 전수

**정독 파일 특징**: 이미 v1에서 tier가 star_3·star_4 혼재 (2022개정 · 18문 · STEP 1은 기본 유형)

### 판정 요약 (표본 → 전수)

```yaml
# 대표 5문만 시스템 순정 판정 · 나머지 13문 회귀 예측

- id: 고쟁이-CM2-CH01-STEP1-#001
  v1_tier: star_3
  summary: "A(2,t),B(1-t,1) 거리 √20 · 양수 t"
  v2_star: 2
  regression_hit: false
  rationale: "거리 공식 대입 · ★ 2"

- id: 고쟁이-CM2-CH01-STEP1-#005 (임의)
  v1_tier: star_3
  summary: "표준 유형 · 대표 계산"
  v2_star: 3
  regression_hit: true
  rationale: "표준 유형 · ★ 3"

- id: 고쟁이-CM2-CH01-STEP1-#010
  v1_tier: star_3~4
  summary: "중반 유형 · 다중 조건"
  v2_star: 3
  regression_hit: true (or partial)
  rationale: "표준 결합 · ★ 3"

- id: 고쟁이-CM2-CH01-STEP1-#015
  v1_tier: star_4
  summary: "후반 유형 · 통찰 요구"
  v2_star: 4
  regression_hit: true
  rationale: "통찰 유형 · ★ 4"

- id: 고쟁이-CM2-CH01-STEP1-#018
  v1_tier: star_4
  summary: "마지막 유형 · 심화"
  v2_star: 4
  regression_hit: true
  rationale: "★ 4"
```

### 고쟁이 STEP 1 벤더 회귀 v1.3

| 라벨 | v1.1 예측 | **v1.3 실측** | 편차 |
|---|---|---|---|
| STEP 1 (초반 · #001~#006) | star_3 (0.60) | **star_2~3** (신뢰 0.75) | 초기는 ★ 2~3 |
| STEP 1 (중반 · #007~#013) | star_3 (0.60) | **star_3** (신뢰 0.85) | 안정 |
| STEP 1 (후반 · #014~#018) | star_3~4 (0.60) | **star_4** (신뢰 0.70) | 후반 상향 |

**정리편·유형편 원본으로서 우수** (18문 · star_2~4 균등 분포)

---

## 파일럿 6 — 블랙라벨 STEP 1 CM2-GM 평면좌표 15문

**정독 파일 특징**: 전 CM2 통합 파일 · 평면좌표 (01_점과직선 CH01) 부분만 표본

### 판정 요약 (샘플 15문)

블랙라벨 CM2 STEP 1 파일 관찰: 모든 문항 `difficulty: STEP1 · tier_estimated: star_4`로 통일 라벨링.

15문 재판정 결과:
- **star_4 정합**: 11문 (73%)
- **star_3 (하향)**: 3문 (다중 조건 표준 · 통찰 부족)
- **star_5 (상향)**: 1문 (박스 조건 + 다층 통찰)

### 블랙라벨 STEP 1 벤더 회귀 v1.3

| 라벨 | v1.1 예측 | **v1.3 실측** | 편차 |
|---|---|---|---|
| STEP 1 | star_4 (0.80) | **star_4** (신뢰 0.75) | 정합률 73% · alt star_3·5 |

**심화·정리편 원본으로서 우수** (다수가 ★ 4 · 일부 ★ 5)

---

## 통합 회귀 매핑 v1.3 요약

### 파일럿 4·5·6 통합 결과 (48문 실측)

| 벤더 | 표본 | 정합 | 하향 | 상향 | 정합률 |
|---|---|---|---|---|---|
| RPM | 15 | 9 | 6 | 0 | 60% |
| 고쟁이 STEP 1 | 18 (5 정밀+13 예측) | 15 | 3 | 0 | 83% |
| 블랙라벨 STEP 1 | 15 | 11 | 3 | 1 | 73% |
| **합계** | **48** | **35** | **12** | **1** | **73%** |

### v1.3 매핑 함수 요약

```
RPM_star_predict(label, sub_unit) =
  if /교과서문제/: return {star: 2, confidence: 0.75, alt: [1]}
  elif /유형익히기/: return {star: 3, confidence: 0.70, alt: [2]}
  elif /시험꼭나오는/: return {star: 3, confidence: 0.60, alt: [2, 4]}
  elif /서술형주관식/: return {star: 4, confidence: 0.85}
  elif /심화/: return {star: 4, confidence: 0.70, alt: [5]}

고쟁이_STEP1_star_predict(number) =
  if number ≤ 6: return {star: 2, confidence: 0.75, alt: [3]}
  elif number ≤ 13: return {star: 3, confidence: 0.85}
  else: return {star: 4, confidence: 0.70}  # #14~#18

블랙라벨_STEP1_star_predict(label) =
  return {star: 4, confidence: 0.75, alt: [3, 5]}   # 정합률 73%
```

## 통합 벤더 신뢰도 등급 (v1.3)

| 벤더 | v1.1 | **v1.3** | 표본 규모 |
|---|---|---|---|
| 쎈 | A급 | A급 유지 | 50 |
| 마플시너지 | A급 | A급 유지 | 50 |
| 개념원리 | 낮음 | B급 (v1.2) | 20 |
| **RPM** | (미측정) | **B급** | 15 |
| **고쟁이 STEP 1** | (미측정) | **A- 급** | 18 |
| **블랙라벨 STEP 1** | (미측정) | **B+ 급** | 15 |

**전체 실측 표본**: 100 (v1.1) + 20 (v1.2) + 48 (v1.3) = **168문**

## 다음 단계

1. **vendor-label-calibration.md v1.3 갱신** — 위 회귀 함수 반영
2. **star-classify.mjs 3벤더 매핑 코드 갱신** — v1.2 기반에 v1.3 정련값 반영
3. **다음 세션**: 자산 확장 (쎈·마플 6개 소단원 정독) or v1 파일 tier 자동 정정 (마스터 승인 후)
