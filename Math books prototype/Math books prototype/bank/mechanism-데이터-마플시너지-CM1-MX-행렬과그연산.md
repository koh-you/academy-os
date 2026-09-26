---
name: mechanism-데이터-마플시너지-CM1-MX-행렬과그연산
description: 마플시너지 공통수학1 (2022개정 · 2025판) 행렬 대단원 · 01 행렬과 그 연산 소단원 정독 데이터. v2.0 통합 자산 스키마 · 표본 20문 시스템 순정 판정 + 나머지 130문 벤더 라벨 회귀 예측. 저작권 준수.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: 마플시너지 공통수학1 (2022개정 · 2025판) · 참고자료/공통수학 1/마플시너지 공통수학1 2025/마플시너지 공통수학1 2025.pdf
  section: 행렬과 그 연산
  unit_code: CM1-MX
  sub_unit: 행렬과그연산
  citation_note: "마플시너지 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약)"
  extract_range: "IV. 행렬 → 01 행렬과 그 연산 · STEP 1 내신정복 기출유형 (유형 01~25 · #1734~1867) + STEP 2 서술형 (#1868~1873) + STEP 3 행복한 일등급 (#1874~1883)"
  pages: "296~321 (책 페이지 · PDF 페이지와 동일)"
  total_problems: 150
  sample_problems: 20
  predicted_problems: 130
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: mechanism-데이터-마플시너지-CM1-CB-순열 (형식 준거)
  parent_calibration: vendor-label-calibration.md v1.5 (마플 라벨 회귀 매핑 적용)
  curriculum_notes: |
    CM1-MX 교과과정 준수 (bank/CM1-교과과정.md):
    - 역행렬(A^{-1})·트레이스(tr A)·행렬식(det A) 문항 즉시 격리 (curriculum_scope: excluded)
    - 케일리-해밀턴 정리 (유형 24 전체 · #1859~1861 등): 시중 옵션 도구 · 답지 인용 허용, 발문 유도는 신중 · 표본에서는 curriculum_scope: cayley_hamilton_boundary 표시
    - 회전행렬·3×3 이상 일반형 문항 격리
    - Xᵤ CM1-MX +1.0 폐지 (v3.10) 미적용
---

# 마플시너지 공통수학1 (2022개정 · 2025판) — 01 행렬과 그 연산 소단원 정독 데이터

**출처**: 마플시너지 공통수학1 (2022개정 · 2025판) · IV. 행렬 → 01 행렬과 그 연산
**범위**: STEP 1 내신정복 기출유형 유형 01~25 (#1734~1867, 134문) + STEP 2 서술형 (#1868~1873, 6문) + STEP 3 행복한 일등급 (#1874~1883, 10문)
**정독 페이지**: p.296~321 (26p, PDF page 동일)
**총 문항 수**: **150문항** (#1734~1883)
**표본**: 20문 (STEP1 BASIC 3 + NORMAL 5 + TOUGH 5 · STEP2 서술형 2 · STEP3 행복한 일등급 5) · 시스템 순정 판정
**예측**: 130문 · 벤더 라벨 회귀 예측 (vendor-label-calibration v1.5 적용)
**정독 일자**: 2026-07-21

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

## 유형 라벨 구성 (마플시너지 CM1-MX-행렬과그연산 · STEP 1 유형 25개)

| 유형 | 이름 | 대표 문항 범위 | 교과과정 |
|---|---|---|---|
| 유형 01 | 행렬의 뜻 | #1734~1738 | ✅ 정규 |
| 유형 02 | 행렬의 성분 | #1739~1746 | ✅ 정규 |
| 유형 03 | 서로 같은 행렬 | #1747~1753 | ✅ 정규 |
| 유형 04 | 행렬의 덧셈과 뺄셈, 실수배 (1) | #1754~1758 | ✅ 정규 |
| 유형 05 | 행렬의 덧셈과 뺄셈, 실수배 (2) | #1759~1762 | ✅ 정규 |
| 유형 06 | 행렬의 연립 | #1763~1766 | ✅ 정규 |
| 유형 07 | 행렬의 곱셈 | #1767~1773 | ✅ 정규 |
| 유형 08 | 행렬의 곱셈 — AB=O | #1774~1776 | ✅ 정규 |
| 유형 09 | 행렬의 거듭제곱 — A² 구하기 | #1777~1783 | ✅ 정규 |
| 유형 10 | 행렬의 곱셈 — 분배법칙 | #1784~1790 | ✅ 정규 |
| 유형 11 | 행렬의 곱셈 — 두 등식의 연립 | #1787~1790 | ✅ 정규 |
| 유형 12 | 행렬의 곱셈 — 단위행렬 | #1791~1796 | ✅ 정규 |
| 유형 13 | 행렬의 곱셈 — 이차방정식의 근과 계수의 관계 | #1797~1800 | ✅ 정규 |
| 유형 14 | 행렬의 곱셈 — 이차함수의 최대·최소 | #1801~1803 | ✅ 정규 |
| 유형 15 | 행렬의 곱셈이 성립하기 위한 조건 | #1804~1806 | ✅ 정규 |
| 유형 16 | 행렬의 거듭제곱 — Aⁿ의 추정 (행렬의 규칙 찾기) | #1807~1814 | ✅ 정규 |
| 유형 17 | 행렬의 거듭제곱 — Aⁿ=kE의 추정 | #1815~1821 | ✅ 정규 |
| 유형 18 | 행렬의 거듭제곱 — Aⁿ=kE의 활용 | #1822~1828 | ✅ 정규 |
| 유형 19 | 행렬의 곱셈의 분배법칙의 변형 | #1829~1831 | ✅ 정규 |
| 유형 20 | 행렬의 곱셈에 관한 성질 | #1832~1842 | ✅ 정규 |
| 유형 21 | 행렬의 곱셈에 대한 성립 — AB=BA인 경우 | #1839~1842 | ✅ 정규 |
| 유형 22 | 단위행렬 E를 포함한 식의 전개 | #1843~1848 | ✅ 정규 |
| 유형 23 | 영인자를 이용한 곱셈에 대한 진위판단 | #1849~1858 | ✅ 정규 |
| 유형 24 | **케일리-해밀턴 정리** (교육과정 外) | #1859~1861 | 🟡 boundary (답지 인용 허용) |
| 유형 25 | 행렬의 곱셈과 실생활 활용 | #1862~1867 | ✅ 정규 |

**교과과정 특기**: 유형 24는 마플시너지 자체에서 *"교육과정 外"* 명시. 케일리-해밀턴 정리 관련 3문 (#1859·1860·1861). 본 프로젝트 정책 (2026-06-24 마스터 확립): 답지 인용 허용, 발문 유도 신중. `curriculum_scope: cayley_hamilton_boundary`로 표시.

---

## Ⅰ. STEP 1 BASIC 표본 (3/약 15문 정밀 판정)

```yaml
- id: 마-CM1-MX-행렬과그연산-1754
  page: 299
  vendor_label: BASIC
  category_type: STEP 1 BASIC
  summary: "두 행렬 A=[[1,2],[2,0]], B=[[2,-1],[1,-1]] · A+2B의 모든 성분의 합"
  category: 행렬의 덧셈·실수배 (기본)
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "성분별 A+2B 직접 계산 · 완전 절차형 · ★ 1"
  tier: star_2
  mechanism_primary: 행렬 덧셈·실수배 성분 계산
  insight_type: 절차형
  target_cohort: 중하위권
  anchor_status: null
  novelty_score: 0
  curriculum_scope: included
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L3_multi_vendor_tier: []
    L5_confidence: 0.95

- id: 마-CM1-MX-행렬과그연산-1755
  page: 299
  vendor_label: BASIC
  category_type: STEP 1 BASIC
  summary: "두 행렬 A, B에 대하여 A-2B=[[-7,0],[6,2]], B=[[2,-1],[-3,1]]일 때 행렬 A의 모든 성분의 합"
  category: 행렬 방정식 · A 역산
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "A = (A-2B) + 2B로 즉시 치환"}
  insight_count: 1
  depth_score: 3.0
  base_star: 1
  star: 1
  premium: false
  rationale: "A = (A-2B) + 2B 대입만 · ★ 1"
  tier: star_2
  mechanism_primary: 행렬 방정식 이항 · 성분 계산
  insight_type: 통찰형 (얕음)
  target_cohort: 중하위권
  anchor_status: null
  novelty_score: 0
  curriculum_scope: included
  vendor_calibration_signal:
    L5_confidence: 0.90

- id: 마-CM1-MX-행렬과그연산-1768
  page: 301
  vendor_label: BASIC
  category_type: STEP 1 BASIC
  summary: "두 행렬 A=[[1,0],[1,-1]], B=[[1,0],[-1,1]] · 행렬 A(A+B)의 모든 성분의 합"
  category: 행렬 곱셈 기본 (분배 or 직접)
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "A(A+B) = A²+AB 분배 or A+B 먼저 계산 후 A 곱"}
  insight_count: 1
  depth_score: 3.0
  base_star: 1
  star: 2
  premium: false
  rationale: "곱셈 성분 계산 두 단계 · ★ 2 (수행 시간)"
  tier: star_2
  mechanism_primary: 행렬 곱셈 · 분배법칙
  insight_type: 통찰형 (얕음)
  target_cohort: 중하위권
  anchor_status: null
  novelty_score: 0
  curriculum_scope: included
  vendor_calibration_signal:
    L5_confidence: 0.85
```

---

## Ⅱ. STEP 1 NORMAL 표본 (5/약 55문 정밀 판정)

```yaml
- id: 마-CM1-MX-행렬과그연산-1741
  page: 297
  vendor_label: NORMAL
  category_type: STEP 1 NORMAL
  summary: "이차정사각행렬 A의 (i,j) 성분 a_ij = (-2)^i + kj · 모든 성분의 합 34일 때 실수 k"
  category: 성분 정의식 (지수·선형 혼합) · 합 조건 → k 결정
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "(i,j)에 1·2 대입하여 4성분 명시 (2i부호 케이스)"}
    - {step: 2, type: I-RT, depth: 2, effective_depth: 2, description: "합 식 정리 → k에 대한 일차방정식 역산"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: "지수 성분 계산 케이스 + 선형 역산 · NORMAL 표준 ★ 3"
  tier: star_3
  mechanism_primary: 성분 정의식 · 4성분 대입 후 합 방정식
  insight_type: 통찰형
  target_cohort: 중위권
  anchor_status: null
  novelty_score: 1
  curriculum_scope: included
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: 마-CM1-MX-행렬과그연산-1757
  page: 300
  vendor_label: NORMAL
  category_type: STEP 1 NORMAL
  summary: "이차정사각행렬 A의 모든 성분의 합 12일 때 · 3(X+A) = 4A를 만족시키는 X의 모든 성분의 합"
  category: 행렬 방정식 · 성분합 활용
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "3X = A 이항 → X = (1/3)A · 성분합 스칼라배 성질"}
    - {step: 2, type: I-BW, depth: 2, effective_depth: 2, description: "성분별 합의 스칼라 배는 스칼라 × 성분합 · 12·(1/3)=4"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: "실수배 성분합 성질 관찰 (성분 몰라도 합만으로 결정) · NORMAL ★ 3"
  tier: star_3
  mechanism_primary: 행렬 방정식 · 성분합의 실수배 성질
  insight_type: 통찰형
  target_cohort: 중위권
  anchor_status: null
  novelty_score: 1
  curriculum_scope: included
  vendor_calibration_signal:
    L5_confidence: 0.88

- id: 마-CM1-MX-행렬과그연산-1769
  page: 301
  vendor_label: NORMAL
  category_type: STEP 1 NORMAL
  summary: "두 행렬 A=[[-1,0],[-2,1]], B=[[-1,1],[1,-1]] · 2AB-3BA의 모든 성분의 합"
  category: 행렬 곱셈 · 비가환 인지 (AB ≠ BA)
  M: {s: 3, k: 1, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-CON, depth: 2, effective_depth: 2, description: "AB · BA 각각 성분 계산 (교환법칙 안 됨)"}
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "2AB - 3BA 성분별 결합 · 합 계산"}
  insight_count: 2
  depth_score: 5.5
  base_star: 3
  star: 3
  premium: false
  rationale: "AB·BA 각각 계산 (수행 부담) · 표준 NORMAL ★ 3"
  tier: star_3
  mechanism_primary: 행렬 곱셈 · 비가환성 (AB ≠ BA)
  insight_type: 통찰형
  target_cohort: 중위권
  anchor_status: null
  novelty_score: 0
  curriculum_scope: included
  vendor_calibration_signal:
    L5_confidence: 0.90

- id: 마-CM1-MX-행렬과그연산-1808
  page: 307
  vendor_label: NORMAL
  category_type: STEP 1 NORMAL · 최다빈출·중요
  summary: "행렬 A=[[1,1],[0,1]] · Aⁿ의 모든 성분의 합 100일 때 자연수 n"
  category: 거듭제곱 규칙 · [[1,n],[0,1]] 형 패턴 인식
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - {step: 1, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P4], description: "A²·A³ 계산으로 Aⁿ=[[1,n],[0,1]] 패턴 귀납적 추정"}
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "1+n+0+1 = 100 → n=98"}
  insight_count: 2
  depth_score: 8.0
  base_star: 3
  star: 3
  premium: false
  rationale: "I-PD 거듭제곱 패턴 = CM1-MX 특성 통찰 · 표준 유형 · NORMAL ★ 3"
  tier: star_3
  mechanism_primary: 상삼각행렬 거듭제곱 규칙 · 귀납적 발견
  insight_type: 통찰형
  target_cohort: 중위권
  anchor_status: candidate
  novelty_score: 0
  curriculum_scope: included
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM1-MX-행렬과그연산-1810]
    L5_confidence: 0.88

- id: 마-CM1-MX-행렬과그연산-1839
  page: 312
  vendor_label: NORMAL · 학교기출·빈출
  category_type: STEP 1 NORMAL
  summary: "두 행렬 A=[[2,a],[1,-1]], B=[[b,-1],[1,3]] · (A+B)² = A²+2AB+B² 성립할 때 a+b"
  category: 곱셈 공식 성립 조건 → AB=BA 조건 → 성분 연립
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights:
    - {step: 1, type: I-CON, depth: 2, effective_depth: 2, description: "(A+B)² = A²+2AB+B² ⇔ AB = BA 등가 관찰"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "AB=BA 성분 비교 → a·b에 대한 연립"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: "곱셈 공식 등가 조건 → AB=BA → 연립 · 표준 통찰 · NORMAL ★ 3"
  tier: star_3
  mechanism_primary: 곱셈 공식 조건 → AB=BA → 연립
  insight_type: 통찰형
  target_cohort: 중위권
  anchor_status: candidate
  novelty_score: 0
  curriculum_scope: included
  vendor_calibration_signal:
    L5_confidence: 0.90
```

---

## Ⅲ. STEP 1 TOUGH 표본 (5/약 45문 정밀 판정)

```yaml
- id: 마-CM1-MX-행렬과그연산-1745
  page: 298
  vendor_label: TOUGH · 최다빈출·중요
  category_type: STEP 1 TOUGH
  summary: "이차정사각행렬 A의 (i,j) 성분 = (다항식 x³-ix+j를 x-j로 나눈 나머지) · 모든 성분의 합 (i,j=1,2)"
  category: 성분 정의 · 다항식 나머지정리 융합 (PL·MX)
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "나머지정리로 각 (i,j) 성분 = j³-ij+j 계산 (4케이스)"}
    - {step: 2, type: I-RT, depth: 2, effective_depth: 2, description: "4성분 합 = Σ(j³-ij+j) 정리"}
  insight_count: 2
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: "MX 성분 정의 + CM1-PL 나머지정리 결합 · TOUGH ★ 4"
  tier: star_4
  mechanism_primary: 성분 정의 (다항식 나머지) · 4성분 대입
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  novelty_score: 1
  curriculum_scope: included
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM1-MX-행렬과그연산-1780, 마-CM1-MX-행렬과그연산-1781]
    L5_confidence: 0.85

- id: 마-CM1-MX-행렬과그연산-1747
  page: 298
  vendor_label: TOUGH · 최다빈출·중요
  category_type: STEP 1 TOUGH
  summary: "세 지점 ①②③ 사이 일방통행로 도해 · a_ij = (i→j 직접 가는 길 있을 때 1, 없을 때 0) · A=(a_ij)의 2행·3행 모든 성분의 합"
  category: 성분 정의 · 그래프 인접행렬 (실생활 도해)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P2], description: "도해 → 인접행렬 성분 6개 (2행 3개 + 3행 3개) 판독"}
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "0·1 성분 합산"}
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: "도해 → 인접행렬 성분 판독 (I-XU 저노출) · TOUGH ★ 4"
  tier: star_4
  mechanism_primary: 인접행렬 · 도해 판독
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  novelty_score: 2
  curriculum_scope: included
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: 마-CM1-MX-행렬과그연산-1794
  page: 305
  vendor_label: TOUGH · 최다빈출·중요
  category_type: STEP 1 TOUGH
  summary: "행렬 A=[[a,-1],[3,b]] · A³=A, A⁴=E 성립할 때 두 실수 a,b의 곱 ab"
  category: 거듭제곱 조건식 · A²·A³ 성분 비교
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-BW, depth: 3, effective_depth: 3, signal_ref: [P4], description: "A³=A, A⁴=E ⇒ A⁴ = A·A³ = A² = E · 순환 관찰"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "A²=E 성분 비교 → a·b·(-1) 조건 연립"}
    - {step: 3, type: I-RT, depth: 2, effective_depth: 2, description: "a²+bc=1·a-b=0·... 연립 해"}
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  rationale: "거듭제곱 순환 관찰 (A²=E 유도) + 연립 · TOUGH ★ 4"
  tier: star_4
  mechanism_primary: 거듭제곱 순환 관찰 · A²=E 성분 연립
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 1
  curriculum_scope: included
  vendor_calibration_signal:
    L5_confidence: 0.82

- id: 마-CM1-MX-행렬과그연산-1817
  page: 309
  vendor_label: NORMAL · 최다빈출·중요
  category_type: STEP 1 (NORMAL 등급이나 TOUGH급 지수)
  summary: "행렬 A=[[1,2],[-1,-1]] · A^2025 + A^2026 + A^2027 + A^2028의 모든 성분의 합"
  category: 거듭제곱 주기 · Aⁿ=kE의 활용
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - {step: 1, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P4], description: "A²=-E 관찰 (또는 A⁴=E) → 주기 4"}
    - {step: 2, type: I-BW, depth: 2, effective_depth: 2, description: "2025~2028 = 한 주기 → A²⁰²⁵ + A²⁰²⁶ + A²⁰²⁷ + A²⁰²⁸ = A+A²+A³+A⁴ = O"}
    - {step: 3, type: I-EQV, depth: 1, effective_depth: 1, description: "성분합 = 0"}
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: "주기 관찰 + 4연속항 소거 · TOUGH급 통찰 · ★ 4 (라벨은 NORMAL이나 시스템 상향)"
  tier: star_3
  mechanism_primary: 거듭제곱 주기 (A⁴=E) · 4연속항 합 소거
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  novelty_score: 1
  curriculum_scope: included
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM1-MX-행렬과그연산-1820, 마-CM1-MX-행렬과그연산-1816]
    L3_multi_vendor_tier: []
    L5_confidence: 0.82

- id: 마-CM1-MX-행렬과그연산-1841
  page: 313
  vendor_label: TOUGH
  category_type: STEP 1 TOUGH
  summary: "두 행렬 A=[[2x,-1],[1,1]], B=[[-1,1],[-1,y]] · (A+B)(A-B) = A²-B² 성립 · (x,y) 나타내는 도형과 x축·y축으로 둘러싸인 부분의 넓이"
  category: 곱셈 공식 조건 → AB=BA → x·y 관계식 (좌표 도형)
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-CON, depth: 2, effective_depth: 2, description: "(A+B)(A-B) = A²-B² ⇔ AB = BA 등가 관찰"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "AB=BA 성분 비교 → x·y 관계식 (일차방정식 등)"}
    - {step: 3, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P2], description: "관계식이 좌표평면 도형 → x·y 절편 → 넓이 계산 (CM2-GM 지식 침투 주의)"}
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 5
  premium: false
  rationale: "곱셈 공식 조건 + 좌표 도형 융합 (MX + 좌표) · ★ 5 하위 · 도형 융합으로 premium 후보 아님"
  tier: star_4
  mechanism_primary: 곱셈 공식 조건 (AB=BA) → 좌표 도형 넓이
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  curriculum_scope: included
  vendor_calibration_signal:
    L5_confidence: 0.75
```

---

## Ⅳ. STEP 2 서술형 표본 (2/6문 정밀 판정)

```yaml
- id: 마-CM1-MX-행렬과그연산-1870
  page: 319
  vendor_label: 서술형 · 최다빈출·중요
  category_type: STEP 2 서술형
  summary: "이차정사각행렬 A · A[[1],[0]]=[[1],[2]], A[[0],[1]]=[[3],[4]] · 행렬 A[[-2],[3]]의 모든 성분의 합"
  category: 행렬 곱 · 표준기저 벡터 판독 → 성분 결정 → 선형결합
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - {step: 1, type: I-BW, depth: 2, effective_depth: 2, description: "A[[1],[0]]=1열 · A[[0],[1]]=2열 (표준기저 관찰)"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "A[[-2],[3]] = -2·1열 + 3·2열 = 성분별 선형결합"}
    - {step: 3, type: I-RT, depth: 1, effective_depth: 1, description: "성분합 계산"}
  insight_count: 3
  depth_score: 7.66
  base_star: 4
  star: 4
  premium: false
  rationale: "표준기저 판독 (I-BW · CM1-MX 특성) + 선형결합 · 서술형 ★ 4"
  tier: star_4
  mechanism_primary: 표준기저 판독 · 행렬-벡터 곱 선형성
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  novelty_score: 1
  curriculum_scope: included
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: 마-CM1-MX-행렬과그연산-1871
  page: 319
  vendor_label: 서술형
  category_type: STEP 2 서술형
  summary: "이차정사각행렬 A의 (i,j) 성분 a_ij · x²+2ix+j=0의 판별식으로 정의 (실근 2 → -1, 중근 → 0, 허근 → 1) · 1단계 A 구하기 · 2단계 Aⁿ=E 자연수 n의 최솟값 · 3단계 A^10[[a],[b]]=[[a],[b]] 자연수 a·b"
  category: 판별식 조건 → 성분 결정 → 거듭제곱 주기 → 고정벡터
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "판별식 D=4i²-4j 부호 분류 → 4성분 배정"}
    - {step: 2, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P4], description: "A²·A³ 계산 → Aⁿ=E 최소 n (주기 관찰)"}
    - {step: 3, type: I-BW, depth: 3, effective_depth: 3, signal_ref: [P4], description: "A¹⁰ = A^(10 mod n) 계산 → 고정벡터 조건"}
    - {step: 4, type: I-CON, depth: 2, effective_depth: 2, description: "고정벡터 성분 방정식 해석"}
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: "판별식+거듭제곱+주기+고정벡터 4통찰 융합 · ★ 5 서술형 (premium 조건 count≥5 미달)"
  tier: star_4
  mechanism_primary: 판별식 성분 정의 · 거듭제곱 주기 · 고정벡터
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  curriculum_scope: included
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM1-MX-행렬과그연산-1878]
    L5_confidence: 0.78
```

---

## Ⅴ. STEP 3 행복한 일등급 표본 (5/10문 정밀 판정) — ★ 5 premium 후보 우선

```yaml
- id: 마-CM1-MX-행렬과그연산-1875
  page: 320
  vendor_label: STEP 3 행복한 일등급
  category_type: STEP 3 고난도
  summary: "두 행렬의 곱 (n-1, 12-4n)·[[n²-4n+4],[n-1]] · 성분이 소수가 되도록 하는 자연수 n의 값"
  category: 행 벡터 · 열 벡터 곱 (스칼라) · 소수 판별 (정수론 융합)
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "행-열 벡터 곱 = 스칼라: (n-1)(n²-4n+4) + (12-4n)(n-1)"}
    - {step: 2, type: I-BW, depth: 3, effective_depth: 3, signal_ref: [P3], description: "(n-1)로 인수분해 · (n-1){(n²-4n+4) + (12-4n)} = (n-1)(n²-8n+16) = (n-1)(n-4)²"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P3], description: "(n-1)(n-4)²이 소수 = ± 소수 케이스 분류 · (n-4)²이 완전제곱 소수 인수분해 관찰 → n-4 = ±1 · n-1 = 소수 등"}
    - {step: 4, type: I-CON, depth: 2, effective_depth: 2, description: "케이스 유효 자연수 n 판정"}
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: "인수분해 + 소수 케이스 분리 · ★ 5 (count≥5 미달로 premium 후보 아님)"
  tier: star_5
  mechanism_primary: 행렬-스칼라 곱 · 인수분해 · 소수 판별
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  curriculum_scope: included
  vendor_calibration_signal:
    L5_confidence: 0.80

- id: 마-CM1-MX-행렬과그연산-1876
  page: 320
  vendor_label: STEP 3 행복한 일등급 · 대비출·중요
  category_type: STEP 3 고난도
  summary: "좌표평면 두 점 A(a,b), B(c,d) · 이차정사각행렬 X=[[a,b],[c,d]]와 삼각형 OAB 넓이 S(X) · 이차정사각행렬 T=[[2,0],[1,p]] · S(T²)=S(4T) 만족 양수 p"
  category: 삼각형 넓이 함수 · 행렬 거듭제곱 · 넓이 스케일링 관찰
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P2], description: "T² 성분 계산 (a,b,c,d 형태로) · T²의 성분에서 좌표 판독"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P3], description: "S(X) = (1/2)|ad-bc| (좌표평면 삼각형 넓이 공식 · CM2-GM 지식 · 원 (0,0), (a,b), (c,d))"}
    - {step: 3, type: I-BW, depth: 3, effective_depth: 3, signal_ref: [P4], description: "S(T²) 계산 · S(4T) = 4²·S(T) = 16·S(T) 스케일링"}
    - {step: 4, type: I-EQV, depth: 2, effective_depth: 2, description: "S(T²) = 16·S(T) 방정식 → p 결정"}
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: false
  rationale: "행렬-도형 융합·거듭제곱·스케일링 · ★ 5 (도형 융합 · count≥5 미달)"
  tier: star_5
  mechanism_primary: 행렬 거듭제곱 · 넓이 함수 스케일링
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  curriculum_scope: included
  vendor_calibration_signal:
    L5_confidence: 0.75

- id: 마-CM1-MX-행렬과그연산-1878
  page: 320
  vendor_label: STEP 3 행복한 일등급
  category_type: STEP 3 고난도
  summary: "행렬 A=[[a,b],[c,d]] · a·d는 x²+x-2=0의 두 근 · b·c는 x²-4x-3=0의 두 근 · A+A²+...+A^10의 모든 성분의 합"
  category: 근과 계수의 관계 (a+d, ad, b+c, bc) + Aⁿ 무한급수 (거듭제곱 주기 or 관찰)
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "근과 계수: a+d = -1, ad = -2, b+c = 4, bc = -3 (CM1-EQ 근계관 도구)"}
    - {step: 2, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P4], description: "A²의 4성분 = a²+bc, b(a+d), c(a+d), d²+bc → tr(A²) = a²+d² +2bc = (a+d)²-2ad+2bc"}
    - {step: 3, type: I-BW, depth: 3, effective_depth: 3, signal_ref: [P3], description: "Aⁿ의 성분합 = tr(Aⁿ) + 여백 성분 (b+c)·f(n) · 반복 관찰"}
    - {step: 4, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P4], description: "케일리해밀턴 A² = (a+d)A - (ad-bc)E 활용 (답지 인용 가능) · 점화식으로 Aⁿ 성분합 계산"}
    - {step: 5, type: I-RT, depth: 2, effective_depth: 2, description: "n=1~10 합 = 등비/점화식 합"}
  insight_count: 5
  depth_score: 8.8
  base_star: 5
  star: 5
  premium: true
  rationale: "근계관 + 거듭제곱 + 성분합 점화 + 케해 인용 = 5통찰 융합 · depth_score 8.8 · max=3 · count=5 → **premium 조건 all-satisfied**"
  tier: star_5_premium
  mechanism_primary: 근과 계수의 관계 · 케일리해밀턴 · 성분합 점화
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 3
  curriculum_scope: cayley_hamilton_boundary
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM1-MX-행렬과그연산-1861]
    L5_confidence: 0.72

- id: 마-CM1-MX-행렬과그연산-1881
  page: 321
  vendor_label: STEP 3 행복한 일등급
  category_type: STEP 3 고난도
  summary: "행렬 A=[[1,1],[a,a]]와 이차정사각행렬 B가 (가) B[[1],[-1]] = [[0],[0]] (나) AB = 3A, BA = 6B · A+B의 (1,2)+(2,1)"
  category: 조건박스 (가)(나) · 열벡터 소거 조건 + 이중 곱 관계
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-BW, depth: 3, effective_depth: 3, signal_ref: [P4], description: "(가) B[[1],[-1]]=[[0],[0]] → B의 1열 = B의 2열 (같은 열)"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P3], description: "AB=3A 성분 비교 → A의 rank·B의 열 구조 활용 (열벡터 소거)"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "BA=6B 결합 · a 결정 → A·B 성분 확정"}
    - {step: 4, type: I-RT, depth: 2, effective_depth: 2, description: "A+B의 (1,2)와 (2,1) 성분합"}
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: "조건박스 (가)(나) + 열벡터 구조 · ★ 5 (count 5 미달 · signal 3 미달로 premium 후보 아님)"
  tier: star_5
  mechanism_primary: 열벡터 소거 조건 · 이중 곱 관계
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  curriculum_scope: included
  vendor_calibration_signal:
    L5_confidence: 0.75

- id: 마-CM1-MX-행렬과그연산-1883
  page: 321
  vendor_label: STEP 3 행복한 일등급 · 2010년 03월 고3 학평 나형 24번
  category_type: STEP 3 고난도 (학평 편입)
  summary: "행렬 A=[[0,1],[-1,0]] · (가) A^m = A^n (나) m,n은 100 이하 서로 다른 자연수 · |m-n|의 최댓값 p, 최솟값 q일 때 p+q"
  category: 거듭제곱 주기 (A⁴=E) · 100 이하 서로 다른 자연수 정합
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P4], description: "A² = -E · A⁴ = E · 주기 4 인식"}
    - {step: 2, type: I-BW, depth: 3, effective_depth: 3, signal_ref: [P4], description: "A^m = A^n ⇔ m ≡ n (mod 4)"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P3], description: "100 이하 자연수 · m,n ∈ {1,...,100} · m ≡ n (mod 4) · m≠n"}
    - {step: 4, type: I-RT, depth: 2, effective_depth: 2, description: "|m-n| 최댓값 = 최대 격차 (같은 잔여류 안에서 최대·최소 · 예: (1,97) or (4,100)) · 최솟값 = 4 (같은 잔여류 이웃)"}
    - {step: 5, type: I-EQV, depth: 2, effective_depth: 2, description: "p+q 계산"}
  insight_count: 5
  depth_score: 8.8
  base_star: 5
  star: 5
  premium: true
  rationale: "회전유형 거듭제곱 (A⁴=E) + 합동식 관찰 + 정합 · depth_score 8.8 · max=3 · count=5 → **premium 조건 all-satisfied** · 학평 원본 (희소)"
  tier: star_5_premium
  mechanism_primary: 거듭제곱 주기 · 합동식 정합 (mod 4)
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 3
  curriculum_scope: included
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM1-MX-행렬과그연산-1815, 마-CM1-MX-행렬과그연산-1822]
    L3_multi_vendor_tier: ["학평 2010-03 나 24"]
    L5_confidence: 0.85
```

---

## 표본 판정 요약 (20문)

| ★ | STEP 1 BASIC (3) | STEP 1 NORMAL (5) | STEP 1 TOUGH (5) | STEP 2 서술형 (2) | STEP 3 행복한 일등급 (5) | 합계 |
|---|---|---|---|---|---|---|
| ★ 1 | 1754, 1755 (2) | - | - | - | - | 2 |
| ★ 2 | 1768 (1) | - | - | - | - | 1 |
| ★ 3 | - | 1741, 1757, 1769, 1808, 1839 (5) | - | - | - | 5 |
| ★ 4 | - | - | 1745, 1747, 1794, 1817 (4) | 1870 (1) | - | 5 |
| ★ 5 | - | - | 1841 (1) | 1871 (1) | 1875, 1876, 1881 (3) | 5 |
| ★ 5 premium | - | - | - | - | 1878, 1883 (2) | 2 |
| **합계** | **3** | **5** | **5** | **2** | **5** | **20** |

## STEP 3 행복한 일등급 5문 실측 ★ 분포 (원 요청 핵심 실측 데이터)

| ★ | 문항 | 비율 |
|---|---|---|
| ★ 4 | - | 0% |
| ★ 5 | #1875, #1876, #1881 | **60%** |
| ★ 5 premium | #1878, #1883 | **40%** |
| **premium 후보** | **2문 / 5문** | **40%** |

### 다른 단원 STEP 3 실측 대조 (원 지시 비교)

| 단원 | STEP 3 실측 ★ 분포 | premium 비율 | 비고 |
|---|---|---|---|
| CM2-GM 도형이동 | ★ 4 60% / ★ 5 40% | ~ | 도형이동 |
| CM1-CB 순열 | ★ 4 80% / ★ 5 20% | 20% | 순열 |
| CM1-PL 인수분해 | ★ 4 40% / ★ 5 60% | ~ | 인수분해 |
| CM1-EQ 이차 | ★ 4 40% / ★ 5 60% | ~ | 이차 |
| **CM1-MX 행렬과그연산 (본 정독)** | **★ 5 60% / ★ 5 premium 40%** | **40%** | **가장 강한 킬러 밀도** |

**관찰**: CM1-MX STEP 3 5문 중 **★ 5 이상 100%** · **premium 40%** — 본 정독 표본 기준 마플시너지 STEP 3 중 **가장 킬러 밀도가 높은 단원**. 근과 계수의 관계 (CM1-EQ) 융합 (#1878), 회전 유형 A⁴=E 주기 활용 (#1883)이 결정적 요인.

## 교육과정 격리 문항 (curriculum_scope: excluded/boundary)

| 문항 | 유형 | 격리 사유 | 조치 |
|---|---|---|---|
| **#1859, #1860, #1861** | 유형 24 케일리-해밀턴 정리 | 마플 자체 *"교육과정 外"* 명시 · 정책상 답지 인용은 허용, 발문 유도는 신중 | `curriculum_scope: cayley_hamilton_boundary` · 시험지 발문 대상 제외, 답지 인용 가능 |
| **#1878** (표본) | STEP 3 행복한 일등급 | 케일리해밀턴 활용이 자연스러운 풀이 경로 · 발문 자체는 근계관 + 성분합 (교과 내) | `curriculum_scope: cayley_hamilton_boundary` · 발문은 정규, 답지 케해 인용 OK |

**격리 표본 수**: **1문** (`#1878`) · 예측 격리 (전체 130문 예측 대상 중): 유형 24의 나머지 2문 (#1859, #1860) → 총 **3문**을 `excluded/boundary`로 관리 예상.

**즉시 거부 (curriculum_scope: excluded) 문항**: **0문** — 마플시너지 CM1-MX는 2022개정 교과 스코프에 매우 잘 정렬됨. 역행렬·트레이스·det 노출은 (표본 검토 범위에서) 유형 24 케해 정리 4성질 계산 외에는 발견되지 않음.

## CM1-MX 특성 관찰

### 1. I-PD (Pattern Discovery · 거듭제곱 패턴) 등장 빈도 매우 높음

- STEP 1 유형 16·17·18 (Aⁿ 추정 · Aⁿ=kE) = **총 20문 이상** (약 15% of 소단원)
- 표본 20문 중 I-PD 단계 등장: **6문** (#1808, #1817, #1871, #1878, #1883 + 다수)
- CM1-MX의 대표 통찰 유형 = I-PD **확정**
- 표본 관찰: A² 계산 → 규칙 귀납 → n 결정 (100 이하 자연수 개수 유형 다수 존재)

### 2. AB=BA 조건 관련 곱셈 공식 유형 표준화

- 유형 20·21·22 (곱셈 공식 성립 / AB=BA / E 포함 전개) = **총 20문**
- 표본: #1839 (NORMAL) · #1841 (TOUGH) · #1849 · #1851 등에서 `(A+B)²=A²+2AB+B²` ↔ `AB=BA` 등가 관찰이 표준 통찰
- 이 유형이 CM1-MX만의 특수한 개념 (수·다항식과 대비되는 비가환성 인지) — 앵커 pool 후보로 특히 유의

### 3. 성분 정의식 (i,j) → 다른 단원 융합

- 유형 02 (성분 정의) = 7문 · 다항식 나머지 (#1745, #1780, #1781) · 판별식 (#1871) · 이차함수 넓이 (#1746) · 조립제법 (#1781)
- CM1-PL · CM1-EQ와 자연스러운 융합 접점 = **CM1-MX만의 강점**
- 앵커 pool 후보: #1745 (나머지정리) · #1871 (판별식)

### 4. STEP 3에서 근과 계수의 관계 (CM1-EQ) 융합

- #1878 = 근계관 + 케해 · #1876 = 좌표 삼각형 넓이 + 행렬 스케일링 (CM2-GM 침투 주의)
- CM1-MX 킬러 = *다른 단원 도구 융합*이 최상위 통찰 패턴

### 5. 회전행렬 미노출 (교과 준수)

- A=[[0,1],[-1,0]] 사용 (#1883)이 있으나 발문은 순수 *거듭제곱 주기*만 요구
- "회전"·"각"·"회전행렬" 용어 노출 없음 = 교과 준수
- 학평 원본 (2010-03 나 24)이 이 형태 표준 뿌리

### 6. Xᵤ CM1-MX +1.0 폐지 준수 (v3.10)

- 본 정독 표본 판정에는 Xᵤ 친숙도 보정 미적용
- 절차형 (★ 1~2) 3문 · 통찰형 (★ 3~5) 17문 · 순정 판정만으로 자연스러운 분포

## 예측 종합 (전체 150문)

| ★ | 표본 실측 (20문) | 예측 (130문) | 전체 (150문) 추정 | 비율 |
|---|---|---|---|---|
| ★ 1 | 2 | ~12 | ~14 | 9% |
| ★ 2 | 1 | ~26 | ~27 | 18% |
| ★ 3 | 5 | ~55 | ~60 | 40% |
| ★ 4 | 5 | ~30 | ~35 | 23% |
| ★ 5 | 5 | ~5 | ~10 | 7% |
| ★ 5 premium | 2 | ~2 | ~4 | 3% |

**예측 근거**: 마플시너지 벤더 라벨 회귀 (vendor-label-calibration v1.5) · BASIC ≈ ★ 1.5 · NORMAL ≈ ★ 3.0 · TOUGH ≈ ★ 4.2 · 서술형 ★ 4.0 · STEP 3 ≈ ★ 5.2 (본 소단원은 STEP 3 킬러 밀도가 유난히 높으므로 상향 조정).

## Premium 후보 (전체 정독 기준)

| 문항 | 라벨 | 판정 근거 | 시스템 우선순위 |
|---|---|---|---|
| **#1878** | STEP 3 행복한 일등급 | 근계관 + 성분합 점화 + 케해 인용 · 5통찰 · depth 8.8 | **최우선 premium 앵커** (CM1-MX + CM1-EQ 융합 · curriculum_scope: cayley_hamilton_boundary) |
| **#1883** | STEP 3 · 2010-03 학평 나 24 | A⁴=E 주기 + 합동식 정합 · 5통찰 · depth 8.8 | **premium 앵커 · 학평 원본** (curriculum_scope: included · 순수 교과) |
| **#1871** | STEP 2 서술형 | 판별식+거듭제곱+주기+고정벡터 · 4통찰 · depth 8.5 | 서술형 ★ 5 앵커 후보 (count 미달로 premium 아님 · 표준 ★ 5) |
| **#1875** | STEP 3 | 인수분해 + 소수 판별 · CM1-PL 융합 · depth 8.5 | ★ 5 앵커 후보 |
| **#1876** | STEP 3 | 행렬 넓이 스케일링 · CM2-GM 침투 주의 · depth 8.75 | ★ 5 앵커 후보 (CM1-MX 순수만 원할 경우 대체) |
| **#1881** | STEP 3 | 조건박스 (가)(나) · 열벡터 소거 · depth 8.5 | ★ 5 조건박스형 앵커 |

**최우선 premium 2문 확정**: **#1878** (융합형 · cayley boundary), **#1883** (학평 · 순수 교과) — 2문 모두 CM1-MX 시험지·유형편 premium 앵커 pool 등록 강력 권고.

## 핵심 관찰 종합

1. **CM1-MX STEP 3 킬러 밀도 최상 (60% ★ 5 + 40% premium)** — 마플시너지 4개 단원 중 가장 킬러 비율이 높은 소단원
2. **I-PD (거듭제곱 패턴)이 CM1-MX 대표 통찰** — 다른 단원엔 없는 특성. 유형 16·17·18로 20문 이상 편성
3. **AB=BA 등가 관찰이 표준 통찰** — CM1-MX만의 비가환성 인지 유형 (유형 20·21·22)
4. **성분 정의식이 CM1-PL·CM1-EQ 융합 접점** — #1745 (나머지) · #1871 (판별식) · #1878 (근계관)
5. **케일리-해밀턴은 유형 24 (교육과정 外)로 마플이 스스로 분리** — 답지 인용 정책과 완벽 정합, 격리 명확
6. **회전행렬 표기 미노출** (실제 회전 형태는 사용하되 용어는 감춤) — 교과 준수
7. **총 150문 중 3문만 curriculum boundary** — 매우 정합적인 교재
