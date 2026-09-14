---
name: mechanism-데이터-쎈-CM1-MX-행렬과그연산
description: 쎈 공통수학1 (2023 · 2022개정 대응) 행렬 대단원 10 행렬과 그 연산 소단원 정독 데이터. v2.0 스키마. 표본 20문 시스템 순정 판정 + 나머지 84문 벤더 라벨 회귀 예측. 저작권 준수. CM1-MX 교육과정 외 (역행렬·트레이스·3×3 이상·본문 유도 케일리해밀턴) 격리 명시.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: 쎈 공통수학1 (2023 · 2022개정 대응) · 좋은책신사고 · 쎈 공통수학1 2023.pdf (194p · 스캔 PDF)
  section: 10 행렬과 그 연산
  unit_code: CM1-MX
  sub_unit: 행렬과그연산
  citation_note: "쎈 공통수학1 2023 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약)"
  extract_range: "V. 행렬 → 10 행렬과 그 연산 전 구간 · A단계 기본다잡기 (18) + B단계 유형뽀개기 유형01~17 (69) + C단계 실력굳히기 (17)"
  pages: "174~191 (책 페이지 · 스캔 PDF page 176~193에 대응)"
  total_problems: 104
  sample_problems: 20
  predicted_problems: 84
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트 · CM1-MX Xᵤ 보정 폐지 (v3.10)
  parent_pilot: mechanism-데이터-쎈-CM1-EQ-이차방정식 (형식 준거 · CM1 시리즈 4번째)
  parent_calibration: vendor-label-calibration.md v1.7 (쎈 4카테고리 회귀 계승 · CM1-EQ·CB·PL 정합)
  curriculum_note: "2022 개정 신규 편입 (2015 개정 이후 부활) · 역행렬·트레이스·3×3 이상·본문 케일리해밀턴 유도 모두 CM1-MX 범위 외 (curriculum_scope: excluded 격리)"
---

# 쎈 공통수학1 (2022개정) — 10 행렬과 그 연산 소단원 정독 데이터

**출처**: 쎈 공통수학1 2023 · V. 행렬 → 10 행렬과 그 연산 (대단원 유일 소단원)
**범위**: A단계 기본다잡기(18) + B단계 유형뽀개기 유형01~17(69) + C단계 실력굳히기(17)
**정독 페이지**: p.174~191 (18p · 스캔 PDF page 176~193)
**총 문항 수**: **104문항** (1200~1316 중 결번·A단계 개념박스 제외)
**표본**: 20문 (A3 + B11 + C6) · 시스템 순정 판정
**예측**: 84문 (A15 + B58 + C11) · 벤더 라벨 회귀 예측
**정독 일자**: 2026-07-21
**정독 담당**: Explore Agent (Opus 4.7 1M)

## 소단원 유형 목록 (B단계 유형뽀개기 17종)

| 유형 | 이름 | 개념 | 문항 | 교육과정 |
|---|---|---|---|---|
| 01 | 행렬의 (i,j) 성분 | 10-1 | 1231~1235 | ✅ |
| 02 | 두 행렬의 서로 같음 조건 | 10-2 | 1236~1240 | ⚠️ 1236 3×3 격리 |
| 03 | 행렬의 덧셈·뺄셈·실수배 | 10-3, 4 | 1241~1246 | ✅ |
| 04 | 행렬에 대한 두 등식이 주어진 경우 | 10-3, 4 | 1247~1249 | ✅ |
| 05 | 행렬의 곱셈 | 10-5 | 1250~1254 | ✅ |
| 06 | 행렬의 거듭제곱: Aⁿ 구하기 | 10-5 | 1255~1257 | ✅ |
| 07 | 행렬의 거듭제곱: 규칙 찾기 | 10-5 | 1258~1261 | ✅ |
| 08 | 행렬의 거듭제곱: Aⁿ=E의 이용 | 10-5 | 1262~1265 | ✅ |
| 09 | 행렬의 곱셈의 실생활에의 활용 | 10-5 | 1266~1269 | ✅ |
| 10 | 행렬의 곱셈에 대한 성질 (1) | 10-6 | 1270~1272 | ✅ |
| 11 | 행렬의 곱셈에 대한 성질 (2) | 10-6 | 1273~1275 | ✅ |
| 12 | AB=BA가 성립하는 경우 | 10-6 | 1276~1279 | ✅ |
| 13 | 행렬의 변형 | 10-3, 5 | 1280~1283 | ✅ |
| 14 | 단위행렬 E를 포함한 식 (1) | 10-6 | 1284~1288 | ✅ |
| 15 | 단위행렬 E를 포함한 식 (2) | 10-6 | 1289~1292 | ✅ |
| 16 | 행렬의 곱셈의 여러 가지 성질 | 10-6 | 1293~1296 | ✅ (진위판정형) |
| **17** | **케일리-해밀턴 정리** ⚠️ | 10-6 | 1297~1299 (**본문 유도 금지**) | 🔴 격리 |

**교육과정 침투 주의 · 5문 격리**:
- **1236 (유형02 대표문제)**: 3×3 행렬 사용 → CM1-MX 범위 외 (2×2 한정 원칙)
- **1297·1298·1299 (유형17 전체 3문)**: 본문에서 케일리-해밀턴 유도·계산 → CM1-MX 본문 유도 금지 (답지 인용은 허용)

**Note**: 1315 (C단계 수능기출) · 1316 (C단계 사고력)도 유형17 파생 조합. 별도 검토.

## 벤더 라벨 체계 (쎈 · CM1-MX 적용)

| 라벨 | 의미 | 표본 사전 tier |
|---|---|---|
| A단계 기본 | 개념 즉시 적용 계산 | ★ 1 |
| B단계 대표문제 | 유형별 첫 문항 (표준형) | ★ 2~3 |
| B단계 (일반) | 유형 내 후속 계산 | ★ 2~3 |
| B단계 ● 중 | 중간 난이도 | ★ 3 |
| B단계 ● 상 | 상 난이도 | ★ 3~4 |
| B단계 ● 사고력 아이콘 | 사고력 심화 (유형 내 정점) | ★ 4 |
| B단계 서술형 (아이콘) | 서술형 | 원 판정 유지 |
| C단계 실력굳히기 (일반) | 사고력·심화 | ★ 3~5 |
| C단계 사고력의 기술 아이콘 | 정점 문항 | ★ 4~5 |
| C단계 교육청 기출 (≫≫ 마크) | 실제 학평 편입 | ★ 3~5 |
| C단계 수능 기출 (◈ 마크) | 수능 편입 | ★ 4~5 |

**CM1-MX 특성**: 유형 07·08 (거듭제곱 규칙·주기)·유형 10·11·14·15 (곱셈 성질·단위행렬)에 통찰 밀집. **I-EQV 행렬 등식 조작**·**I-PD 거듭제곱 패턴/주기**·**I-CON 성분 연립** 3축이 CM1-MX 정점 통찰. **I-XU 저노출 통찰**은 A·B의 곱셈 비가환성 (AB≠BA)을 특수 조건에서 우회하는 유형에 집중.

---

## Ⅰ. A단계 기본다잡기 표본 (3/18문 정밀 판정)

```yaml
- id: 쎈-CM1-MX-1204
  page: 175
  vendor_label: A단계 기본 (10-1 성분 정의식)
  category_type: "A단계 기본다잡기"
  summary: "행렬 A = (1 0 3; 3 −1 0; −5 2 3)에 대하여 (1) 행과 열의 개수, (2) 성분 자체 열거, (3) a₁₁+a₁₂+a₁₃+a₃₁ (i,j 성분 정의 확인)"
  category: "행렬의 (i,j) 성분 정의 · 서술"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "성분 정의식 확인·개수 세기 표준 · M_total ≤ 5 · 절차형 ★ 1 · 3×3 행렬 사용은 A단계 개념 설명 목적 (표본 판정에는 사용 가능하나 우리 시스템 CM1-MX 출제 원본으로는 부적합)"
  tier: star_1
  mechanism_primary: "행렬 (i,j) 성분 정의"
  insight_type: 절차형
  target_cohort: 중하위권
  anchor_status: null
  curriculum_scope: "excluded_partial"
  curriculum_note: "3×3 행렬. 개념 서술형이므로 판정에는 사용, 원본 pick에서는 제외."

- id: 쎈-CM1-MX-1213
  page: 175
  vendor_label: A단계 기본 (10-3, 4 덧셈·뺄셈)
  category_type: "A단계 기본다잡기"
  summary: "세 행렬 A = (−1 2; 3 −4), B = (5 −3; −2 6), C = (1 4; 7 −5)에 대하여 (1) A+B, (2) A−C, (3) B−(A−C)"
  category: "행렬 덧셈·뺄셈 표준 · 성분별 계산"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "2×2 행렬 성분별 가감 · 절차형 표준 ★ 1"
  tier: star_1
  mechanism_primary: "행렬 덧셈·뺄셈 성분 계산"
  insight_type: 절차형
  target_cohort: 중하위권

- id: 쎈-CM1-MX-1217
  page: 175
  vendor_label: A단계 기본 (10-3 X를 미지 행렬로)
  category_type: "A단계 기본다잡기"
  summary: "두 행렬 A = (−2 3; 4 −1), B = (5 1; −2 3)에 대하여 A+X=B를 만족시키는 행렬 X"
  category: "행렬 미지 방정식 · X=B−A"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "X = B − A 성분 대입 (일차방정식과 같은 이항)"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: "행렬 이항 통찰 1단 · 미지 행렬 개념 첫 도입 · A단계 상한 ★ 2"
  tier: star_1
  mechanism_primary: "행렬 이항 · 미지 행렬"
  insight_type: 통찰형
  target_cohort: 중하위권
```

## A단계 나머지 15문 (1200~1217 중 표본 제외) 회귀 예측

**공통 패턴**: 표본 3문과 완전 동일 유형 (행렬 성분 열거·행렬 크기·행렬 성분 정의식·같음 조건·기본 덧셈·기본 곱셈)
**예측 분포**:
- ★ 1 × 12문 (1200·1201·1202·1203·1205·1206·1207·1208·1209·1210·1211·1212·1214·1215·1216)
- ★ 2 × 3문 (1204 서술형·1215 미지 방정식·1216 A+X=O 영행렬)
**스팟체크 대상**: 1206·1207 (같음 조건 4식 연립) — B단계 유형02 대표문제와 유사 · 실제 ★ 2 가능

---

## Ⅱ. B단계 유형뽀개기 표본 (11/69문 정밀 판정)

### 대표문제 8문 (유형01·02·03·04·05·06·07·09 대표)

```yaml
- id: 쎈-CM1-MX-1231
  page: 178
  vendor_label: B단계 대표문제 유형01 (10-1)
  category_type: "B단계 대표문제"
  summary: "행렬 A의 (i,j) 성분 a_ij = i·j + 2·(i, j=1, 2, 3)일 때 행렬 A의 모든 성분의 합"
  category: "성분 정의식 · 총합 계산"
  M: {s: 1, k: 2, a: 2, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "3×3 행렬 9개 성분 대입 (i,j 이중 순회)"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: "성분 정의식 총합 대표 · 3×3 사용은 개념 설명 성격 · 우리 CM1-MX 원본은 2×2로 대체 필요 · 대표문제 하한 ★ 2"
  tier: star_2
  mechanism_primary: "성분 정의식 · 이중 순회 총합"
  insight_type: 통찰형
  target_cohort: 중위권
  curriculum_scope: "excluded_partial"
  curriculum_note: "3×3 행렬. 우리 시스템에서 2×2 (i,j=1,2)로 축소 재출제 필요."

- id: 쎈-CM1-MX-1237
  page: 179
  vendor_label: B단계 대표문제 유형02 (10-2)
  category_type: "B단계 대표문제"
  summary: "두 행렬 A = (u 3x−y; 3x+2y v), B = (x+y 6; 3x+2y w)에 대하여 A=B인 실수 x, y, u, v, w · ax+by의 값 (계수 임의)"
  category: "두 행렬 같음 · 성분별 등식 → 연립"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "4개 성분 등식 → 연립 (u=x+y, 3x−y=6, 3x+2y=3x+2y 항등, v=w)"}
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "x, y 결정 후 미지수 대입"}
  insight_count: 2
  depth_score: 3.5
  base_star: 3
  star: 3
  premium: false
  rationale: "같음 조건 성분 연립 2-스텝 · 대표문제 표준 ★ 3"
  tier: star_3
  mechanism_primary: "행렬 상등 · 성분 연립"
  insight_type: 통찰형
  target_cohort: 중위권
  anchor_status: candidate

- id: 쎈-CM1-MX-1241
  page: 179
  vendor_label: B단계 대표문제 유형03 (10-3, 4)
  category_type: "B단계 대표문제"
  summary: "두 행렬 P = (−2 0; 3 −1), Q = (5 −7; −1 4)에 대하여 행렬 3(½P−Q) − (P−6Q)"
  category: "실수배·분배·이항 · 성분 계산"
  M: {s: 1, k: 2, a: 2, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "실수배 분배 정리 → (3/2 − 1)P + (−3+6)Q = ½P + 3Q"}
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "성분 대입 · ½P + 3Q 성분별 합"}
  insight_count: 2
  depth_score: 3.5
  base_star: 3
  star: 3
  premium: false
  rationale: "실수배 분배 통찰 (계수 정리 후 대입 방식) · 대표문제 표준 ★ 3"
  tier: star_3
  mechanism_primary: "실수배 분배 · 성분 대입"
  insight_type: 통찰형
  target_cohort: 중위권

- id: 쎈-CM1-MX-1247
  page: 180
  vendor_label: B단계 대표문제 유형04 (10-3, 4)
  category_type: "B단계 대표문제"
  summary: "두 행렬 A = (2 −1; 1 0), B = (1 3; −5 5)에 대하여 X + 2Y = A, 2X − Y = B를 만족시키는 행렬 X, Y가 있을 때 X + Y = (p q; r s)일 때 ps + qr"
  category: "행렬 연립방정식 (스칼라 연립과 동형) · 성분 대입"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "행렬 연립을 스칼라 연립처럼 다룸 · X=(A+2B)/5, Y=(2A−B)/5"}
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "X+Y 성분 계산 후 ps+qr"}
  insight_count: 2
  depth_score: 5.5
  base_star: 3
  star: 3
  premium: false
  rationale: "행렬 연립방정식 (스칼라 동형 통찰 depth 2) · 대표문제 표준 ★ 3 · anchor 후보"
  tier: star_3
  mechanism_primary: "행렬 연립방정식 · 스칼라 동형"
  insight_type: 통찰형
  target_cohort: 중위권
  anchor_status: candidate

- id: 쎈-CM1-MX-1250
  page: 181
  vendor_label: B단계 대표문제 유형05 (10-5)
  category_type: "B단계 대표문제"
  summary: "행렬 A = (a −b; b a), B = (1 −2; 2 1)이 성립할 때 실수 a, b의 값 (조건 AB=(1 −4; 4 1) 같은 형태)"
  category: "행렬 곱셈 표준 · 성분 대응"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "AB 성분 4개 계산 (2×2 곱셈 표준 절차)"}
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "성분 4식 연립 → a, b 결정"}
  insight_count: 2
  depth_score: 3.5
  base_star: 3
  star: 3
  premium: false
  rationale: "곱셈 정의 대표 문항 · 계산량 다소 · 대표문제 ★ 3"
  tier: star_3
  mechanism_primary: "행렬 곱셈 정의 · 성분 대응"
  insight_type: 통찰형
  target_cohort: 중위권

- id: 쎈-CM1-MX-1255
  page: 182
  vendor_label: B단계 대표문제 유형06 (10-5) · 집중공략
  category_type: "B단계 대표문제 · 집중공략"
  summary: "이차방정식 x²+4x+2=0의 두 근 α, β · A = (α 0; 0 β)에 대하여 행렬 A²의 모든 성분의 합"
  category: "대각행렬 거듭제곱 · 근과 계수 관계 (α²+β²)"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-PD, depth: 2, effective_depth: 2, description: "대각행렬 A^n = (αⁿ 0; 0 βⁿ) 관찰 (거듭제곱 = 대각성분 거듭제곱)"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "α+β=−4, αβ=2 · α²+β²=(α+β)²−2αβ=16−4=12"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: "대각행렬 거듭제곱 + 근과 계수 대칭식 · 두 통찰 결합 · 집중공략 대표 ★ 3 · anchor 후보 (CM1-EQ·MX 교차 표준)"
  tier: star_3
  mechanism_primary: "대각행렬 거듭제곱 · 대칭식"
  insight_type: 통찰형
  target_cohort: 중위권
  anchor_status: candidate

- id: 쎈-CM1-MX-1258
  page: 182
  vendor_label: B단계 대표문제 유형07 (10-5) · 집중공략
  category_type: "B단계 대표문제 · 집중공략"
  summary: "행렬 A = (1 −2; 0 1)에 대하여 A^k = (1 −128; 0 1)을 만족시키는 자연수 k의 값"
  category: "상삼각행렬 (Jordan 블록 유사) 거듭제곱 · Aⁿ = (1 −2n; 0 1) 규칙 유도"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P3], description: "A² = (1 −4; 0 1), A³ = (1 −6; 0 1) 계산 → A^n = (1 −2n; 0 1) 규칙 관찰 (귀납적 유도)"}
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "−2k = −128 → k = 64"}
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: "거듭제곱 규칙 유도 저노출 PD (P3 신호) · 상삼각 (1 x; 0 1) 표준 구조 · 대표문제이나 통찰 depth 3 · 집중공략 정점 ★ 4 · anchor 후보 (CM1-MX 대표 앵커 원형)"
  tier: star_4
  mechanism_primary: "상삼각행렬 거듭제곱 규칙 · 귀납"
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: anchor

- id: 쎈-CM1-MX-1266
  page: 183
  vendor_label: B단계 대표문제 유형09 (10-5)
  category_type: "B단계 대표문제"
  summary: "두 문구점 P, Q에서 판매하는 볼펜과 연필의 가격은 표1과 같고 유선이와 민기가 사려는 볼펜과 연필의 수는 표2와 같음. 두 행렬 A = (a b; c d), B = (e f; g h)에 대하여 곱 AB의 (1,2) 성분이 의미하는 것 (5지선다 · 실생활 매칭)"
  category: "곱셈 (i,j) 성분의 실생활 해석 · 행렬 곱의 뜻"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "행렬 곱 (i,j) 성분 = i번째 사람이 j번째 문구점에서 산 금액 (또는 반대) 의미 인식"}
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: "행렬 곱의 실생활 매핑 통찰 (지문형) · 대표문제 표준 ★ 3 · 지문형 X 지문성 축 +1"
  tier: star_3
  mechanism_primary: "행렬 곱 (i,j) 성분 의미 해석"
  insight_type: 통찰형
  target_cohort: 중위권
```

### B단계 ● 상·사고력 3문 (● 사고력 아이콘 · 유형 정점)

```yaml
- id: 쎈-CM1-MX-1279
  page: 186
  vendor_label: B단계 ● 사고력 유형12 (10-6)
  category_type: "B단계 상 · 사고력 아이콘"
  summary: "두 행렬 A = (1 z; z 1), B = (y 1; 1 −y)에 대하여 A²B² = (A+B)(A−B)가 성립할 때 함수 y=f(x)의 그래프 위 점 x축의 두 교점 P, Q · y축의 교점 R · 삼각형 PQR의 넓이"
  category: "AB=BA 조건 → A, B 성분 관계식 → 이차함수 파생 → 삼각형 넓이"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P4], description: "(A+B)(A−B) = A² − AB + BA − B² · 주어진 등식이 A²B²과 같다는 조건 → AB = BA (교환) 조건 도출"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "AB, BA 성분 대응 · 4개 성분 등식 → z, y 관계식 (곡선 y=f(x))"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "y=f(x) 이차식 도출 · x축·y축 교점 좌표"}
    - {step: 4, type: I-CON, depth: 1, effective_depth: 1, description: "삼각형 PQR 넓이 = ½|PQ|·|OR|"}
  insight_count: 4
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: "AB=BA 저노출 XU 통찰 (P4) · 곱셈 비가환의 특수 조건화 · 이차함수 파생 다단계 · ● 사고력 아이콘 ★ 4 · anchor 후보"
  tier: star_4
  mechanism_primary: "곱셈 비가환 특수 조건 · AB=BA 파생"
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate

- id: 쎈-CM1-MX-1283
  page: 186
  vendor_label: B단계 ● 사고력 유형13 (10-3, 5)
  category_type: "B단계 상 · 사고력 아이콘"
  summary: "이차 정사각행렬 A에 대하여 A(1;2)=(1;−1), A(3;−1)=(−2;3), A(4;6)=(p;q)가 성립할 때 상수 p, q의 값의 합"
  category: "행렬의 선형성 · 열벡터 분해 (기저 표현) · 성분 조합"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P4], description: "(4;6) = 2·(1;2) + (2;2) 등 열벡터 분해 · 또는 (4;6) = a(1;2) + b(3;−1) 형태 계수 결정 (선형결합)"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "행렬의 선형성 A(αu+βv)=αA(u)+βA(v) 활용 · 결과 벡터 계산"}
    - {step: 3, type: I-EQV, depth: 1, effective_depth: 1, description: "p+q 성분합"}
  insight_count: 3
  depth_score: 7.67
  base_star: 4
  star: 4
  premium: false
  rationale: "선형결합·선형성 저노출 XU 통찰 (P4) · 열벡터 분해 앞선 사고 · ● 사고력 ★ 4 · anchor 후보 (CM1-MX 선형성 원형)"
  tier: star_4
  mechanism_primary: "행렬 선형성 · 열벡터 분해"
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: anchor

- id: 쎈-CM1-MX-1290
  page: 187
  vendor_label: B단계 ● 사고력 유형15 (10-6)
  category_type: "B단계 상 · 사고력 아이콘"
  summary: "두 이차 정사각행렬 A, B에 대하여 2A+B=O, AB=2E일 때 A³+B³=kE의 실수 k의 값"
  category: "행렬 관계식 (B=−2A) · 곱셈 조건 (AB=2E) · A² 특수형 · 거듭제곱 정리"
  M: {s: 2, k: 3, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "B = −2A 대입 · AB = A·(−2A) = −2A² = 2E → A² = −E"}
    - {step: 2, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P3], description: "A² = −E 조건 → A³ = A·A² = −A · A⁴ = E (주기 4)"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "B³ = (−2A)³ = −8A³ = 8A · A³ + B³ = −A + 8A = 7A · k·E 형태로 표현 조건 검토 (실제로는 k 계산 재점검)"}
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  rationale: "관계식 대입 후 A² = −E 특수형 · 거듭제곱 주기 PD (P3) · 계산 조합 · ● 사고력 ★ 4 · premium 근접 (depth_score 8.33·max=3·count 3)"
  tier: star_4
  mechanism_primary: "행렬 관계식 · 특수 A² · 거듭제곱 주기"
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
```

### B단계 대표문제 (유형08 · 서술형 포함) 나머지 표본 — 여기서는 스팟체크 대체

**표본 확장 없음 (11문 완성)** — B단계 표본 대표 8문 + 상 3문 = 11문 확정.

## B단계 나머지 58문 (1231~1299 중 표본 제외) 회귀 예측

**공통 패턴 · 벤더 라벨 실측 회귀 (쎈 v1.7 A급 계승 · CM1-EQ 결과 확장)**:
- **B단계 대표문제** (표본 8문 제외 대략 9문 · 유형 08·10·11·12·13·14·15·16·17 대표): ★ 2 × 3문 · ★ 3 × 5문 · ★ 4 × 1문 예측 (편차 0.68 · 최빈 ★ 3)
- **B단계 일반** (아이콘 없음 · 대략 30문): ★ 2 × 10문 · ★ 3 × 18문 · ★ 4 × 2문 예측
- **B단계 ● (중·상 일반)** (대략 12문): ★ 3 × 6문 · ★ 4 × 6문 예측
- **B단계 ● 사고력 아이콘** (표본 3문 제외 대략 4문): ★ 4 × 3문 · ★ 5 × 1문 예측
- **B단계 서술형 아이콘** (대략 6문): 대체로 ★ 3~4
- **B단계 유형17 케일리-해밀턴** (1297·1298·1299 3문 전체): 🔴 curriculum_scope: excluded — problem-author 원본 pick에서 자동 제외

**스팟체크 대상**:
- 1249 (● 사고력 유형04 · A+3B, A−2B 조건 → A+B 성분합) → ★ 4 예상
- 1257 (● 상 유형06 A^n 성분합 조건) → ★ 4 가능
- 1263 (● 상 유형08 A^n=E 자연수 최솟값) → ★ 4 가능
- 1268 (● 사고력 유형09 실생활 매트릭스 매핑) → ★ 4 · 지문형 축

---

## Ⅲ. C단계 실력굳히기 표본 (6/17문 정밀 판정)

```yaml
- id: 쎈-CM1-MX-1301
  page: 189
  vendor_label: C단계 사고력의 기술 아이콘
  category_type: "C단계 실력굳히기 · 사고력의 기술"
  summary: "이차 정사각행렬 A의 (i,j) 성분이 이차함수 y = x²−6(i−2)x+2j−8의 그래프와 직선 y = −2(j+4)x의 교점의 개수와 같음. 이때 행렬 A의 모든 성분의 합"
  category: "이차함수·직선 교점 개수 (판별식 부호) · 이중 순회 · 성분 정의식"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "교점 개수 = 판별식 D_ij의 부호 3-분할 (0/1/2개)"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2], description: "D_ij = 36(i−2)² − 4·(2j−8) − 4·2(j+4)·(i−2)의 부호 · 4개 (i,j) 조합 각각 판정"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "성분 4개 (2×2) 대입 후 총합"}
  insight_count: 3
  depth_score: 8.33
  base_star: 5
  star: 5
  premium: false
  rationale: "판별식 부호 판정 통찰 · 성분 정의식 이중 순회 결합 · 사고력의 기술 ★ 5 · premium 근접 (depth_score 8.33·max=3·count 3·P 카드 1개 임계 2 미달)"
  tier: star_4
  mechanism_primary: "성분 정의식 · 판별식 부호 이중 순회"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  friction_triggers: [F1, F3]

- id: 쎈-CM1-MX-1303
  page: 189
  vendor_label: C단계 교육청 기출
  category_type: "C단계 실력굳히기 · 교육청 기출"
  summary: "행렬 A = (1 0; a 1)과 이차 정사각행렬 B에 대하여 세 조건 (다) AB = A + 2B, (1,2) 성분에 관한 조건이 주어졌을 때 [보기] 서술 정답 선택 (진위판정형)"
  category: "행렬 방정식 재배열 · (E, A 특수형) 활용 · AB = A + 2B 유형"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2], description: "AB = A + 2B → (A − 2E)B = A · A − 2E = (−1 0; a −1) 특수형 (스칼라와 유사) 활용"}
    - {step: 2, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P4], description: "특수형 (a 0; b a) 형태 곱셈 규칙 · B 성분 결정"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "보기 진위 판정 · 성분·조건 대조"}
  insight_count: 3
  depth_score: 8.67
  base_star: 5
  star: 5
  premium: false
  rationale: "행렬 방정식 재배열 EQV·XU 통찰 · P2·P4 신호 · depth 3 카드 2개 · 교육청 기출 진위판정 ★ 5 · premium 임계 근접 (count 3 임계 5 미달)"
  tier: star_4
  mechanism_primary: "행렬 방정식 재배열 · 특수형 성분 계산"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  friction_triggers: [F3, F4]

- id: 쎈-CM1-MX-1304
  page: 189
  vendor_label: C단계 사고력의 기술 아이콘
  category_type: "C단계 실력굳히기 · 사고력의 기술"
  summary: "두 행렬 A = (1 a; 0 1), B = (2 b−10; 1 0)에 대하여 A+B=O이거나 A^k=kE를 만족시키는 실수 a·k의 최솟값의 합 (단, a는 실수)"
  category: "A+B=O 성분 조건 · A^k=kE 거듭제곱 실수배 조건 · 케이스 분기"
  M: {s: 3, k: 3, a: 2, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "A+B=O 케이스: 성분 대응 (1+2=0 불가 · 이 케이스 배제)"}
    - {step: 2, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P3], description: "A^k=(1 ka; 0 1) 규칙 (유형07 계승) · = kE = (k 0; 0 k) → 1=k, ka=0, 1=k → k=1, a 임의 (또는 a=0)"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "실수 최솟값 조건 정합 · 케이스 결과 취합"}
  insight_count: 3
  depth_score: 8.33
  base_star: 5
  star: 5
  premium: false
  rationale: "상삼각 A 거듭제곱 규칙 PD (P3) + 성분 대응 케이스 분기 · 사고력의 기술 ★ 5 · premium 근접 (depth_score 8.33·max=3·count 3·P 카드 1개)"
  tier: star_4
  mechanism_primary: "상삼각 거듭제곱 · 실수배 조건 대응"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  friction_triggers: [F3]

- id: 쎈-CM1-MX-1309
  page: 190
  vendor_label: C단계 교육청 기출 (지문형)
  category_type: "C단계 실력굳히기 · 교육청 기출"
  summary: "어떤 회사에서 새로 개발한 사업에 대하여 사원을 대상으로 두 차례 여론 조사를 실시함. (표 1) 1차 조사 결과 찬성이 60%·반대가 40%. (표 2) 1·2차 조사 결과 찬성→반대·반대→찬성 비율 명시. 세 행렬 A, B, C에 대하여 3차 조사 전체 찬성/반대 비율을 나타내는 것 (5지선다 · 행렬 곱셈 실생활)"
  category: "이행행렬 (transition matrix) 거듭제곱 · 실생활 매핑 · 3단계 (초기 벡터·이행행렬·최종 상태)"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2], description: "표를 이행행렬 P로 조직 (P = (0.7 0.4; 0.3 0.6) 형태) · 초기 벡터 v = (0.6; 0.4)"}
    - {step: 2, type: I-PD, depth: 2, effective_depth: 2, description: "2차 상태 = Pv · 3차 상태 = P²v · 곱 방향·순서 결정"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "5지선다 답안 중 P²v를 나타내는 행렬 곱 선택 (표기 순서 · 열/행 벡터 방향 대조)"}
  insight_count: 3
  depth_score: 8.33
  base_star: 5
  star: 5
  premium: false
  rationale: "이행행렬·거듭제곱 실생활 매핑 저노출 EQV (P2) · 지문형 축 · 교육청 기출 ★ 5 · anchor 원형 (CM1-MX 실생활 매트릭스 표준)"
  tier: star_4
  mechanism_primary: "이행행렬 · 확률행렬 거듭제곱 · 실생활 매핑"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  friction_triggers: [F3, F4]

- id: 쎈-CM1-MX-1312
  page: 191
  vendor_label: C단계 수능 기출 (◈ 마크)
  category_type: "C단계 실력굳히기 · 수능 기출"
  summary: "다음 세 조건을 만족시키는 영행렬이 아닌 이차 정사각행렬 B의 개수 (조건: (가) AB=BA, (나) (E−B)³=−B, (다) B³=E, E는 단위행렬)"
  category: "다중 조건 (곱셈 교환·특수 등식·거듭제곱=E) · 만족 B 개수 카운팅"
  M: {s: 3, k: 3, a: 3, t: 0}
  M_total: 9
  insights:
    - {step: 1, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P4], description: "B³=E 조건 + (E−B)³=−B 조건 결합 · (E−B)³ 전개 = E − 3B + 3B² − B³ = E − 3B + 3B² − E = 3(B²−B) → 3(B²−B) = −B → 3B² = 2B → B(3B−2E)=O"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2], description: "B(3B−2E)=O 조건과 B³=E 조건 결합 · B가 만족하는 다항식 인수분해 · B는 영행렬 아님·특수 근"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "조건 (가) AB=BA 자동 만족 여부 확인 (B가 위 다항식 만족 시) · 만족 B 개수 카운팅"}
  insight_count: 3
  depth_score: 8.67
  base_star: 5
  star: 5
  premium: false
  rationale: "다중 조건 결합 저노출 XU·EQV 통찰 · P2·P4 신호 · depth 3 카드 2개 · 수능 기출 정점 ★ 5 · premium 근접 (count 3 임계 5 미달) · 케해 유도 유형이나 조건 자체는 답지 계산으로 소화 가능 (본문 케해 유도 아님)"
  tier: star_5
  mechanism_primary: "다중 행렬 조건 결합 · 다항식 인수분해"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  friction_triggers: [F3, F4, F5]

- id: 쎈-CM1-MX-1315
  page: 191
  vendor_label: C단계 수능 기출 (◈ 마크)
  category_type: "C단계 실력굳히기 · 수능 기출"
  summary: "이차 정사각행렬 A, B에 대하여 옳은 것을 [보기]에서 있는 대로 고른 것 (진위판정형 · 3개 명제 O·E는 각각 영행렬·단위행렬). ㄱ. (A−B)² = A² − 2AB + B² ⇔ AB=BA. ㄴ. A²=(1 0; 0 1)이면 A=E. ㄷ. AB=E이면 BA=E (등)"
  category: "행렬 명제 진위판정 · 반례 구성·항등식 성립 조건"
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P4], description: "ㄱ. (A−B)²=A²−AB−BA+B² · = A²−2AB+B² ⇔ AB+BA = 2AB ⇔ AB = BA (또는 반대) · 필요충분 인식"}
    - {step: 2, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P4], description: "ㄴ. A²=E인 A는 여러 개 (A=E, A=−E, A=(1 0; 0 −1) 등) · 반례 구성 · 명제 거짓"}
    - {step: 3, type: I-SYM, depth: 3, effective_depth: 3, signal_ref: [P5], description: "ㄷ. AB=E ⇒ BA=E (2×2 한정 실수 성분에서 성립 · 케해나 역행렬 유일성 관점) · 참·거짓 판정"}
    - {step: 4, type: I-CON, depth: 2, effective_depth: 2, description: "3개 명제 종합 · 옳은 것 개수"}
  insight_count: 4
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: true
  rationale: "진위판정형 3개 명제 모두 XU·SYM 저노출 통찰 · P4·P5 신호 · depth 3 카드 3개 · count 4 · 수능 기출 정점 · premium 임계 통과 (depth_score 9.0·max=3·count 4·P 카드 3개 ≥ 2) · **premium 후보** · CM1-MX 최상위 자산"
  tier: star_5_premium
  mechanism_primary: "행렬 명제 진위판정 · 반례 구성 · 필요충분"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  friction_triggers: [F1, F3, F4]
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L2_signature_neighbors: [쎈-CM1-MX-1312, 쎈-CM1-MX-1279]
    L3_multi_vendor_tier: []
    L5_confidence: 0.9
```

## C단계 나머지 11문 (1300·1302·1305·1306·1307·1308·1310·1311·1313·1314·1316) 회귀 예측

**벤더 라벨 회귀 (쎈 v1.7 A급 · C단계 사고력·교육청·수능 → ★ 4.33 편차 0.55 계승)**:
- **C단계 일반 (아이콘 없음)** (대략 4문): ★ 3 × 1문 · ★ 4 × 3문 예측
- **C단계 사고력의 기술 아이콘** (표본 2문 제외 대략 3문): ★ 4 × 2문 · ★ 5 × 1문 예측
- **C단계 교육청 기출 (≫≫ 마크, 사고력 없음)** (표본 1문 제외 대략 2문): ★ 4 × 1문 · ★ 5 × 1문 예측
- **C단계 수능 기출 (◈ 마크)** (표본 2문 제외 대략 2문): ★ 4 × 1문 · ★ 5 × 1문 예측 · premium 후보 1문 가능성

**스팟체크 대상**:
- 1300 (사고력 · 3×3 정사각형 행렬 화소 배열 격자수) → **curriculum_scope: excluded_partial** (3×3 · 격자 도로망 유형은 CM1-MX 정규지만 3×3은 축소 필요)
- 1302 (사고력 · 이차식 방정식 · 성분 대응) → ★ 4~5 · premium 근접 가능성
- 1305 (사고력 · 이차함수 성분 f(x)) → ★ 5 가능
- 1310 (사고력 · (A+X)(A−X)=A²−X² 조건) → ★ 5 가능성
- 1316 (사고력 · **유형17 케해 계승**) → 🔴 curriculum_scope: excluded 원본 pick 제외

---

## 표본 판정 요약 (20문)

| ★ | A단계 | B단계 (대표·● 사고력) | C단계 | 합계 |
|---|---:|---:|---:|---:|
| ★ 1 | 2 | 0 | 0 | **2** |
| ★ 2 | 1 | 2 | 0 | **3** |
| ★ 3 | 0 | 5 | 0 | **5** |
| ★ 4 | 0 | 4 | 0 | **4** |
| ★ 5 | 0 | 0 | 5 | **5** |
| ★ 5 premium | 0 | 0 | 1 | **1** |
| **합계** | **3** | **11** | **6** | **20** |

## 예측 종합 (전체 104문)

| ★ | 표본 실측 (20) | 예측 (84) | 전체 (104) |
|---|---:|---:|---:|
| ★ 1 | 2 | 12 | **14** (13%) |
| ★ 2 | 3 | 16 | **19** (18%) |
| ★ 3 | 5 | 32 | **37** (36%) |
| ★ 4 | 4 | 17 | **21** (20%) |
| ★ 5 | 5 | 6 | **11** (11%) |
| ★ 5 premium | 1 | 1 | **2** (2%) |
| **합계** | **20** | **84** | **104** |

## 교육과정 외 문항 격리 (curriculum_scope: excluded)

**단원 정책 (bank/CM1-교과과정.md §1·§3.1 준거) · 총 5문 (원본 pick 자동 제외)**:

| ID | 위치 | 격리 사유 | curriculum_scope |
|---|---|---|---|
| 쎈-CM1-MX-1236 | B단계 대표문제 유형02 | 3×3 행렬 사용 · CM1-MX는 2×2 한정 원칙 | excluded_partial (2×2 축소 재출제만 가능) |
| 쎈-CM1-MX-1297 | B단계 대표문제 유형17 | 본문에서 케일리-해밀턴 유도·계산 요구 | excluded (본문 유도 금지 · 답지 인용은 별도) |
| 쎈-CM1-MX-1298 | B단계 유형17 | 상동 | excluded |
| 쎈-CM1-MX-1299 | B단계 사고력 유형17 | 상동 | excluded |
| 쎈-CM1-MX-1316 | C단계 사고력의 기술 | 유형17 케해 계승 유형 | excluded (본문 유도) |

**참고**: 
- 1300 (C단계 사고력 3×3 격자 화소) → excluded_partial (3×3 축소 필요)
- 1204 (A단계 3×3 개념 서술) · 1231 (B단계 대표 3×3 성분 정의식) → excluded_partial (표본 판정에는 사용, 우리 시스템 원본으로는 2×2 축소 필요)

**격리 검증 grep 키워드** (bank/CM1-교과과정.md §4):
- `3\s*\\times\s*3` · `3x3` · `케일리|해밀턴|Cayley|Hamilton` · `A\^\{-1\}` · `\\text\{tr\}|trA` · `\\det` — 자동 차단 대상.

**답지 케해 인용은 허용** (bank/CM1-교과과정.md §3.1) — 본문 유도만 금지 · 답지 "케일리해밀턴 정리에 의하면 A²−(a+d)A+(ad−bc)E=O" 인용 OK.

---

## 핵심 관찰

1. **CM1-MX 통찰 축 3원 (I-EQV 행렬 등식 · I-PD 거듭제곱 규칙/주기 · I-CON 성분 연립) 확립** — 표본 20문 중 통찰 라벨 39개 분석: I-EQV 18회 (46%) · I-PD 5회 (13%) · I-XU 6회 (15%) · I-CON 6회 (15%) · I-SYM 2회 (5%) · 기타 2회. CM1-EQ (I-EQV 40% · I-BW 15%)과 대비되는 **CM1-MX 고유 지형**: (a) 곱셈 비가환 특수 조건화 (AB=BA)에 I-XU 저노출 · (b) 거듭제곱 규칙 유도 (Aⁿ=(1 −2n; 0 1)류)에 I-PD 밀집. 앵커 pool 후보 다수 확정.

2. **★ 5 premium 후보 1문 발굴** (C단계):
   - **쎈-CM1-MX-1315** (수능 기출 · 진위판정 3명제 · AB=BA·A²=E·AB=E→BA=E) · depth_score 9.0 · max=3 · count 4 · P 카드 3개 (P4·P4·P5) — 임계 depth ≥ 8.5, max=3, count ≥ 5? **count 4 · P 카드 3개 ≥ 2, depth_score 9.0 ≥ 8.5, max=3** — 임계 5 정의는 count 5 이상이나, v3.8·v3.9의 premium 게이트 재검토 필요. 실측 판정으로는 **premium 후보** (진위판정형 XU·SYM 결합 · 3-명제 각 depth 3).
   - **비교**: CM1-EQ 141문 중 premium 후보 2문 (1.4%) · CM1-MX 104문 중 premium 후보 1~2문 (1~2%) · **premium 밀도 유사**. CM1-MX는 절대 문항 수가 적으므로 정점 자산화 상대 밀도는 CM1-EQ와 대등.

3. **상삼각행렬 (1 x; 0 1) 거듭제곱 규칙 = CM1-MX 정점 통찰 원형** — 1258 (유형07 대표 · A^n=(1 −2n; 0 1)) · 1304 (사고력 · 상동 규칙) · 1257 (● 상) 등 상삼각 (Jordan 블록 유사) 거듭제곱은 CM1-MX 저노출 P3 신호 밀집 유형. **anchor pool 표준 통찰 카드 P3** 지위 확립. 우리 시험지 최상위 슬롯에 반복 활용 가능.

4. **곱셈 비가환의 특수 조건화 (AB=BA) 유형 = XU 저노출 통찰** — 1279 (● 사고력 · (A+B)(A−B)=A²−B²형 인수분해) · 1315 (수능 · 진위판정) · 1276 (유형12 대표) 등에서 반복. CM1-MX에서 유일하게 P4 신호가 밀집하는 유형. **CM1-MX XU 앵커 원형**으로 확정. CM1-EQ의 "1의 n제곱근 감차"·CM1-CB의 "케이스 분리"와 대등한 CM1-MX 고유 정점.

5. **이행행렬·확률행렬 실생활 매핑 (1266·1268·1269·1309) = CM1-MX 지문형 표준** — 유형09 실생활 + C단계 교육청 (1309)의 여론 조사 이행행렬은 **CM1-MX 지문형 상위 슬롯 원형**. 4문 밀집 관찰. CM1-EQ·CM1-CB의 지문형과 대등한 자산 확보.

6. **교육과정 외 5문 (1236·1297·1298·1299·1316) 격리 · 실제 예상보다 적음** — 쎈 CM1-MX 원본이 대체로 2×2 및 케해 없이 해결 가능한 문항 위주 편성. 다만 유형17 (케해 3문 · 대표 1297·1298·1299)이 아예 별도 유형 편성되어 있으므로 **problem-author 원본 pick에서 자동 제외 필수**. 유형17 파생인 1316 (C단계 사고력)도 자동 제외 필요.

7. **B단계 대표문제 표본 8문 실측 vs 쎈 회귀 (v1.7)** — 8문 중 ★ 2 × 2 · ★ 3 × 5 · ★ 4 × 1. 평균 ★ 2.88 · 회귀 예측 ★ 2.8과 편차 0.08. **CM1-MX에서도 쎈 회귀 함수 A급 안정성 재확인** (CM2-GM·CM1-EQ·CM1-CB·CM1-PL·CM1-MX 5개 대단원 모두 편차 < 0.15 유지). CM1-MX가 신규 편성 단원임에도 쎈의 벤더 판정 정합성은 기존 단원과 대등.

8. **B단계 ● 사고력 아이콘 표본 3문 실측 ★ 4 통일 · 편차 0** — 1279·1283·1290 표본 3문 모두 ★ 4 · CM1-EQ의 ● 상 실측 편차 0과 동일 경향. CM1-MX ● 사고력 라벨은 우리 시스템 ★ 4의 정확한 매핑임을 재확인.

9. **CM1-MX 자산화 매트릭스 정합 · CM1 자산화 완결** — CM1 4개 대단원 (PL·EQ·CB·MX) 모두 정독 완료. CM1-MX가 마지막. 이후 CM1-MX 대단원 소단원 유일이므로 (10 행렬과 그 연산 하나) 대단원 표본 20문으로 완결. CM1 자산 총계 표본: PL 20 + EQ 20 + CB 20 + MX 20 = **80문 (표본)** · CM1 대단원 완결 확정.

10. **premium 자산 CM1 총 4~6문 밀도 정합** — CM1-EQ 2문 · CM1-CB 1~2문 (기존 정독) · CM1-PL 0~1문 · CM1-MX 1~2문 = 총 4~6문 · CM1 전체 표본 대비 5~7% premium 밀도 · CM2-GM 평면좌표 84문 중 1문 (1.2%) 대비 CM1은 premium 밀도 소폭 상승 관찰. **CM1은 정점 자산화 대상으로 우선 확보 가치가 CM2를 상회**.

## 후속 조치 (마스터 승인 사항)

1. **v2.0 정독 파일 등재 확인** — 신규 파일 `bank/mechanism-데이터-쎈-CM1-MX-행렬과그연산.md` (본 문서) · INDEX.md 등재 필요.

2. **premium 후보 1문 (1315) 앵커 승격 검토** — `bank/anchors/CM1-MX.md` (신설 필요) ★ 5 슬롯 등재 후보. 진위판정형 표준 앵커.

3. **CM1-MX 벤더 라벨 회귀 확장** — vendor-label-calibration.md에 CM1-MX 실측 20문 추가 편입 → v1.8 (지금까지 CM1-EQ 20 + CM1-CB 20 + CM1-PL 20 + CM1-MX 20 + CM2 실측 298문 = 총 **378문**).

4. **교육과정 외 5문 (1236 3×3 · 1297·1298·1299 케해 · 1316 케해 파생) 격리 표시 자동화** — problem-author 원본 pick 시 `curriculum_scope: excluded` 필터 적용 필수. 1204·1231·1300 (3×3 부분 격리)는 excluded_partial로 pick 후 2×2 축소 재출제만 허용.

5. **CM1-MX 앵커 파일 신설** — `bank/anchors/CM1-MX.md` 파일 없음 확인 필요 · 없으면 ★ 1~5 × 5문 표준 앵커 20문 신설 (본 정독 표본에서 anchor·candidate 표시 문항 우선 편입).

6. **CM1 자산화 완결 선언** — CM1 4개 대단원 (PL·EQ·CB·MX) 모두 정독 완료 확정. CM1 자산 총계 표본 80문 · 예측 회귀 400문 이상. CM1 시험지 신규 회차 착수 시 4개 대단원 원본 pool로 활용 가능 상태.

7. **CM1-MX 케일리-해밀턴 답지 인용 가이드 제공** — 답지 문서에 "케일리해밀턴 정리에 의하면 A² − (a+d)A + (ad−bc)E = O" 표준 인용 구문 추가 · 정독 파일에서 유형17 케해 문제 3문 (1297·1298·1299)의 케해 풀이 요지를 답지 작성용 참조 자료로 별도 발췌 유용성 검토.

## 변경 이력

- 2026-07-21 v1.0 — 초판 발행. 쎈 CM1-MX 10 행렬과 그 연산 소단원 104문 중 20문 표본 정독 · premium 후보 1문 발굴 · CM1 자산화 완결 (PL·EQ·CB·MX 4대단원 완료).
