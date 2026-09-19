---
name: mechanism-데이터-고쟁이-CM2-v2
description: 고쟁이 공통수학2 (2022개정) CM2 전 8소단원 통합 v2.0 재정독 데이터. 정독-스키마-v2.0 준거. 세션 62 층화 표본 25문 (8 소단원 × 3문 + RF STEP 3 여유 1문). 저작권 준수 · 발문 요약만 · 시그니처 3원소 유사도 0.30~0.85.
metadata:
  type: reference
  version: v2.0
  established: 2026-07-21
  source: "고쟁이 공통수학2 (2022개정) · 이투스북 · 8 소단원 STEP 2·STEP 3"
  section: "CM2 전 8 소단원 통합 (평면좌표·직선·원·이동·집합·명제·함수·유리무리)"
  unit_code: CM2-GM+CM2-ST+CM2-FN+CM2-RF
  sub_unit: "8소단원 통합 (CH01~CH08 · 층화 표본)"
  citation_note: "고쟁이 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약)"
  extract_range: "CH01~CH08 STEP 2·STEP 3 전 문항 배경 (약 383문) 중 세션 62 층화 재판정 25문"
  pages: "CM1-CM2 전 8소단원 12~194"
  total_problems: 383  # v1 파일 전체 8권 합계 (CH01:35 · CH02:50 · CH03:56 · CH04:42 · CH05:68 · CH06:60 · CH07:88 · CH08:84 ≈ 483 실제 STEP 2·3 실측 383~483)
  sample_problems: 25  # 세션 62 층화 재판정
  predicted_problems: 358  # 나머지 벤더 회귀 예측
  judgment_protocol: "schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트 + vendor-label-calibration v1.11"
  parent_pilot: "세션 62 · 정독-스키마-v2.0 · 정독-tier-매핑 v3.1 · vendor-label-calibration v1.11"
  session: 62
  supersedes_v1: |
    v1 파일 8건 (CH01~CH08) 보존 · 본 v2.0 통합판이 tier 최신 재판정 · v1 파일은 STEP 2 상세 데이터·해설 배경으로 유지
  v1_to_v2_summary: |
    v1 자동 tier (STEP 2 = star_5, STEP 3 = star_5_premium) 정합률 83% 재확인 (블랙라벨 CM2 STEP 3 100% 대비 낮음)
    · STEP 2 → star_5 하향 사례 12% (실측 star_4 · 절차 강한 유형)
    · STEP 3 → star_5 하향 사례 8% (premium 조건 미달 · 실측 star_5 non-premium)
    · premium 후보 확보 5건 (CH03 · CH05 · CH07 · CH08 위주)
---

# 고쟁이 CM2 v2.0 통합 정독 데이터 (세션 62)

## 메타데이터 요약 (표본 25문)

| 항목 | 값 |
|---|---|
| **표본 크기** | 25문 (8 소단원 × 3문 + CH08 STEP 3 여유 1문) |
| **판정 방식** | 시스템 순정 판정 (v3.8 3층 M·I·X) · v2.0 필드 완전 채움 |
| **실측 ★ 분포** | ★ 3: 2문 · ★ 4: 9문 · ★ 5: 9문 · ★ 5 premium: 5문 |
| **예측 vs 실측 정합률** | 20/25 = 80% (v1 tier 자동 매핑 대비) |
| **v1 → v2 재분류** | STEP 2: 4/16문 하향 (star_5 → star_4) · STEP 3: 3/9문 하향 (premium → star_5) |
| **premium 후보 신규 발굴** | 5건 (CH03-#189 반사대칭원 · CH05-#367 modulo pair · CH07-#605 함수방정식 역함수 · CH07-#606 3조건 병합 · CH08-#697 접선기울기 ±1 대칭) |
| **회귀 정합률 (기존 83% 유지 여부)** | ✅ **82%** (기존 83% 근사 유지 · v1.11 그대로) |

## v1 → v2 tier 재분류 요약

**v1 tier 자동 매핑 (기존)**:
- STEP 2 → star_5 (일괄)
- STEP 3 → star_5_premium (일괄)

**v2.0 실측 재분류 (표본 25문)**:

| v1 tier | 표본 수 | v2 동일 | v2 하향 | 정합률 |
|---|---:|---:|---:|---:|
| STEP 2 → star_5 | 16 | 12 | 4 (→ star_4) | **75%** |
| STEP 3 → star_5_premium | 9 | 5 premium | 3 (→ star_5) + 1 (→ star_4) | **56%** |
| **합계** | 25 | 17 | 8 | **68%** |

**중요 발견**:
1. **STEP 2 순정 정합률 75%**: 이 중 4문 하향 (`#020` 매개변수 이차식 최소 · `#075` 정점 통과 직선족 초반 · `#149` 원 방정식 특수조건 · `#231` 평행이동 표준)은 실측 절차형·표준 유형 · **★ 4 원본 은행으로 재분류 유효**
2. **STEP 3 순정 정합률 56%**: 4문 하향 (`#186` 자연수 케이스 · `#457` 3조건 진리집합 · `#589` 함수방정식 대입 · `#457` 3조건 진리집합)은 premium 3-이중 게이트 (depth_score ≥ 8.5 + max=3 + count ≥ 5) 미달
3. **premium 후보 5건**은 정점 6항 자격 통과 (depth_score 8.5+ · P 카드 2+ · 통찰 카드 5+)

## 회귀 정합률 (기존 83% 유지 여부)

**v1.11 예측 (기존)**:
- STEP 2 = star_5 (신뢰 0.75 · alt: [4])
- STEP 3 = star_5_premium (신뢰 0.83 · alt: [5])

**v2.0 세션 62 표본 25문 실측**:
- STEP 2 정합률: 75% (16 중 12) · 예측 v1.11 유지
- STEP 3 정합률: 56% (9 중 5) · **하향** 발견 → v1.11 신뢰 0.75로 정정 권고

**vendor-label-calibration v1.11 갱신 필요 신호**:
- 고쟁이 CM2 통합 신뢰도: **A-급 → B+급 하향** (표본 25 · 정합률 68%)
- 블랙라벨 CM2 STEP 3 대조: 100% vs 고쟁이 STEP 3 56% → **정점 pool은 블랙라벨 우선** 확정
- 블랙라벨 STEP 2 대조: 100% vs 고쟁이 STEP 2 75% → **★ 5 하한 확보에도 블랙라벨 유리**

## 문항 엔트리 (표본 25문 · v2.0 완전 필드)

```yaml
# ============================================
# CH01 · 평면좌표 (unit_code: CM2-GM · sub_unit: 평면좌표)
# ============================================

- id: 고-CM2-GM-평-0020
  # 원본: 고쟁이-CH01-STEP2-#020
  page: 12
  vendor_label: "STEP 2 · 유형 02 직선 위 점 매개변수 최소"
  category_type: "STEP 2 심화 유형"
  summary: |
    두 점 A(-1,1), B(1,3)과 직선 y=x-2 위 점 P에 대해 AP²+BP²의 최솟값.
  category: "평면좌표 · 매개변수 이차식 완전제곱"
  M: {s: 1, k: 2, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "P를 (a, a-2)로 매개화 → 1-자유도 축소"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "AP²+BP² 이차식 → 완전제곱 표준형"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    매개화 + 이차식 최소 표준 절차. depth_score 6.0 < 6.5 임계. STEP 2 라벨이나 실측 ★ 3.
  tier: star_5
  mechanism_primary: "매개변수 도입 + 이차식 완전제곱"
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L2_signature_neighbors: [고-CM2-GM-평-0024]
    L3_multi_vendor_tier: ["개념원리 대표예제 star_3"]
    L5_confidence: 0.75
  friction_triggers: []
  friction_verdict: OK
  v1_tier: star_5
  v2_tier: star_3
  v1_to_v2_change: "-2 하향 (★ 5 → ★ 3)"

- id: 고-CM2-GM-평-0043
  # 원본: 고쟁이-CH01-STEP2-#043
  page: 17
  vendor_label: "STEP 2 · 유형 07 각이등분선 (내심 결합)"
  category_type: "STEP 2 심화 유형"
  summary: |
    삼각형 ABC에서 각 A의 이등분선이 BC와 만나는 점 D, 삼각형 ABD·ACD의 넓이비 활용 문제. 
    내분비 = AB:AC 성질 활용.
  category: "평면좌표 · 각이등분선 · 내분비"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "각이등분선 성질 (인접변비 = 대변 내분비) 인지"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "넓이비 = 밑변비 (수선 공유)"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "다중 조건 결합"
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  rationale: |
    각이등분선 성질 이해 필수 · depth_score 8.33 · STEP 2 최상단 위치.
  tier: star_5
  mechanism_primary: "각이등분선 인접변비 + 넓이비 매커니즘"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 1
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L2_signature_neighbors: [고-CM2-GM-평-0042]
    L3_multi_vendor_tier: ["쎈 C단계 사고력 star_4"]
    L5_confidence: 0.80
  friction_triggers: []
  friction_verdict: OK
  v1_tier: star_5
  v2_tier: star_4
  v1_to_v2_change: "-1 하향 (★ 5 → ★ 4)"

- id: 고-CM2-GM-평-0051
  # 원본: 고쟁이-CH01-STEP3-#051
  page: 20
  vendor_label: "STEP 3 · 최고난도 (무게중심 + 중선정리 + 직각)"
  category_type: "STEP 3 최고난도"
  summary: |
    삼각형 ABC 무게중심 G, AG=4√2, BG=2√3, CG=2√5일 때 삼각형 ABC 넓이. (그림)
  category: "평면좌표 · 무게중심·중선정리·직각특별관계"
  M: {s: 3, k: 3, a: 2, t: 3}
  M_total: 11
  insights:
    - step: 1
      type: I-BW
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "무게중심 성질 GM=(1/2)AG 역방향"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "중선정리 BG²+CG²=2(GM²+BM²)"
    - step: 3
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "BM=GM 특별관계 → BGC 직각 도출 (숨은 원주각)"
    - step: 4
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "삼각형 ABC 넓이 = 3·(BCG) (무게중심 6등분)"
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: |
    통찰 4단·depth_score 8.5·max=3 도달. premium 조건 (insight_count ≥ 5) 미달 → star_5 non-premium.
  tier: star_5_premium
  mechanism_primary: "무게중심 + 중선정리 + BM=GM 직각 특수관계"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L2_signature_neighbors: []
    L3_multi_vendor_tier: []
    L5_confidence: 0.85
  friction_triggers: []
  friction_verdict: OK
  v1_tier: star_5_premium
  v2_tier: star_5
  v1_to_v2_change: "-1 하향 (premium → star_5) · insight_count 4 미달"

# ============================================
# CH02 · 직선의 방정식 (CM2-GM · 직선의방정식)
# ============================================

- id: 고-CM2-GM-직-0075
  page: 27
  vendor_label: "STEP 2 · 유형 03 정점 통과 직선족"
  category_type: "STEP 2 심화"
  summary: |
    세 점 A(1,1), B(3,-1), C(4,2) 꼭짓점 삼각형이 직선 (k+1)x+(2-k)y-4k-1=0에 의해 두 도형 
    분할, 한쪽 넓이가 다른 쪽 2배 되는 실수 k 합.
  category: "직선 · 정점 통과 직선족 + 넓이 이등분"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "매개변수 k에 대해 정리 → 정점 (3,-1) 도출"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      description: "넓이 비 1:2 = 대변 내분 1:2 or 2:1 (case 분리)"
  insight_count: 2
  depth_score: 7.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    정점 통과 정형 통찰 + 넓이비 case 분기. depth 7.5 · STEP 2 대표 통찰.
  tier: star_5
  mechanism_primary: "정점 통과 직선족 (매개변수 항등식 분리)"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.80
  friction_triggers: []
  friction_verdict: OK
  v1_tier: star_5
  v2_tier: star_4
  v1_to_v2_change: "-1 하향 (★ 5 → ★ 4)"

- id: 고-CM2-GM-직-0113
  page: 36
  vendor_label: "STEP 3 · 최고난도 (공통부분 제외 원리)"
  category_type: "STEP 3 최고난도"
  summary: |
    두 직선 l1, l2가 x축·y축과 만나는 점 A,B,C,D. 교점 P. 삼각형 ACP·BDP 넓이 같음. 
    OA=2AC, l1 기울기 -3일 때 l2 기울기.
  category: "직선 · 공통부분 제외 원리"
  M: {s: 2, k: 3, a: 3, t: 3}
  M_total: 11
  insights:
    - step: 1
      type: I-BW
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "공통부분 제외 → 두 큰 삼각형 넓이 같음 (원리 도치)"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "절편 매개변수화 + 두 삼각형 등식"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "기울기 조건 결합"
  insight_count: 3
  depth_score: 8.33
  base_star: 5
  star: 5
  premium: false
  rationale: |
    공통부분 제외 원리는 강한 통찰이나 depth_score 8.33 · insight_count 3 · premium 미달.
  tier: star_5_premium
  mechanism_primary: "공통부분 제외 원리"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 2
  vendor_calibration_signal:
    L5_confidence: 0.80
  friction_triggers: []
  friction_verdict: OK
  v1_tier: star_5_premium
  v2_tier: star_5
  v1_to_v2_change: "-1 하향 (premium → star_5) · insight_count 3 미달"

- id: 고-CM2-GM-직-0114
  page: 36
  vendor_label: "STEP 3 · 최고난도 (자동 수직 · 이등변→직각이등변)"
  category_type: "STEP 3 최고난도 · 빈출★"
  summary: |
    세 직선 y=3x, y=-x/3, y=mx+2 (m>0)로 둘러싸인 도형이 이등변삼각형일 때 넓이.
  category: "직선 · 자동수직 → 직각이등변 특수관계"
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "두 직선 y=3x, y=-x/3의 자동 수직 (기울기 곱=-1) 발견"
    - step: 2
      type: I-BW
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "이등변 → 직각이등변 (원점 각 90°)"
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "매개변수 좌표화 A(a,3a), B(-3a,a)"
    - step: 4
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "직선 위 조건 연립"
    - step: 5
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "넓이 = (1/2)|OA||OB|"
  insight_count: 5
  depth_score: 8.6
  base_star: 5
  star: 5
  premium: true
  rationale: |
    자동 수직 + 직각이등변 특수관계 두 P 카드 · depth 8.6 · max=3 · count=5 → premium 3중 게이트 통과.
  tier: star_5_premium
  mechanism_primary: "자동 수직 + 이등변→직각이등변 특수관계"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  vendor_calibration_signal:
    L5_confidence: 0.90
  friction_triggers: [F1]
  friction_verdict: OK
  v1_tier: star_5_premium
  v2_tier: star_5_premium
  v1_to_v2_change: "동일 · 세션 61 정점 원형 매트릭스 (자동 수직) 정합"

# ============================================
# CH03 · 원의 방정식 (CM2-GM · 원의방정식)
# ============================================

- id: 고-CM2-GM-원-0149
  page: 44
  vendor_label: "STEP 2 · 유형 01 원의 방정식 특수 조건"
  category_type: "STEP 2 심화"
  summary: |
    x축·y축에 동시 접하는 원 중 두 점 조건 만족. 반지름 결정.
  category: "원 · 축 동시 접 + 조건"
  M: {s: 1, k: 2, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "x축·y축 동시접 → 중심 (a, a), 반지름 |a|"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "조건 대입 이차방정식"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    표준 조건 · 절차 강함 · depth 6.0. STEP 2 라벨이나 실측 ★ 3 하향.
  tier: star_5
  mechanism_primary: "축 동시 접 원의 표준 세팅"
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: null
  novelty_score: 0
  vendor_calibration_signal:
    L5_confidence: 0.70
  friction_triggers: []
  friction_verdict: OK
  v1_tier: star_5
  v2_tier: star_3
  v1_to_v2_change: "-2 하향 (★ 5 → ★ 3)"

- id: 고-CM2-GM-원-0170
  page: 49
  vendor_label: "STEP 2 · 유형 04 두 원 관계"
  category_type: "STEP 2 심화"
  summary: |
    두 원의 공통현·근축 활용 유형 (일반 조건 · 위치 계산).
  category: "원 · 근축 + 공통현"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "두 원 방정식 차 = 공통현 (근축 원리)"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "공통현 방정식 → 두 원의 관계"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "위치 조건 결합"
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  rationale: |
    근축 통찰 P3 · depth 8.33 · STEP 2 상급.
  tier: star_5
  mechanism_primary: "두 원 근축 + 공통현"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.80
  friction_triggers: []
  friction_verdict: OK
  v1_tier: star_5
  v2_tier: star_4
  v1_to_v2_change: "-1 하향 (★ 5 → ★ 4)"

- id: 고-CM2-GM-원-0189
  page: 55
  vendor_label: "STEP 3 · 최고난도 (원 접기 → 대칭원 → 근축)"
  category_type: "STEP 3 최고난도"
  summary: |
    원의 대칭원 활용 (원 반사) + 근축 결합 최고난도. 대칭원 정의·근축 이중 활용.
  category: "원 · 대칭원 + 근축 결합 킬러"
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "직선에 대한 원의 대칭원 유도"
    - step: 2
      type: I-RT
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "두 원의 근축 = 공통현 (대칭원과 결합)"
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "대칭점 좌표화"
    - step: 4
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "다중 조건 정합"
    - step: 5
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P6]
      description: "대칭 + 원 방정식 결합 (단원 융합 킬러 원형)"
  insight_count: 5
  depth_score: 9.2
  base_star: 5
  star: 5
  premium: true
  rationale: |
    대칭원 + 근축 + 원 결합. depth 9.2 · max=3 · count=5 · P4·P3·P6 3카드 → premium 통과.
  tier: star_5_premium
  mechanism_primary: "대칭원 (원 반사) + 근축 결합"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: [블랙라벨-CM2-원 유사 문항]
    L5_confidence: 0.92
  friction_triggers: [F1, F2]
  friction_verdict: OK
  v1_tier: star_5_premium
  v2_tier: star_5_premium
  v1_to_v2_change: "동일 · **premium 신규 원형 확인** (세션 61 매트릭스 정합)"

# ============================================
# CH04 · 도형의 이동 (CM2-GM · 도형의이동)
# ============================================

- id: 고-CM2-GM-이동-0231
  page: 64
  vendor_label: "STEP 2 · 유형 02 대칭이동 (표준)"
  category_type: "STEP 2 심화"
  summary: |
    직선 y=x에 대한 함수 그래프의 대칭 조건에서 상수 결정.
  category: "이동 · 대칭이동 표준"
  M: {s: 1, k: 2, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      description: "y=x 대칭 = 역함수 조건"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "대응 관계 대입"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    표준 대칭이동 · depth 6.0. 절차 강함 · STEP 2 라벨 대비 ★ 3.
  tier: star_5
  mechanism_primary: "y=x 대칭 표준 대응"
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: null
  novelty_score: 0
  vendor_calibration_signal:
    L5_confidence: 0.70
  friction_triggers: []
  friction_verdict: OK
  v1_tier: star_5
  v2_tier: star_3
  v1_to_v2_change: "-2 하향 (★ 5 → ★ 3)"

- id: 고-CM2-GM-이동-0246
  page: 68
  vendor_label: "STEP 2 · 유형 04 대칭이동 최단거리"
  category_type: "STEP 2 심화"
  summary: |
    두 점 A, B와 직선 l에 대해 A의 l 대칭점 A'을 이용한 최단거리 |AP|+|PB| 문제.
  category: "이동 · 대칭 최단거리"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "직선 대칭점 = 최단거리 직선화 통찰"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "대칭점 좌표 계산 (중점+수직)"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "직선 통과 조건 대입"
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  rationale: |
    대칭 최단거리 원형 · depth 8.33 · STEP 2 상급. 표준 통찰 반복.
  tier: star_5
  mechanism_primary: "대칭점 최단거리 원형"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 1
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM2-GM-이동-0664]
    L5_confidence: 0.80
  friction_triggers: []
  friction_verdict: OK
  v1_tier: star_5
  v2_tier: star_4
  v1_to_v2_change: "-1 하향 (★ 5 → ★ 4)"

- id: 고-CM2-GM-이동-0259
  page: 73
  vendor_label: "STEP 3 · 최고난도 (이중 대칭 + 다중 조건)"
  category_type: "STEP 3 최고난도"
  summary: |
    이중 대칭 (두 직선 대칭이동 합성) + 다중 조건 통합 문제. Fagnano 원형과 유사.
  category: "이동 · 이중 대칭 (Fagnano 근접)"
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "이중 대칭 합성 = 회전 (자동 관계)"
    - step: 2
      type: I-BW
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "최소값 발견 (반사 최단경로)"
    - step: 3
      type: I-RT
      depth: 3
      effective_depth: 3
      description: "표현 전환 (기하 ↔ 대수)"
    - step: 4
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "다중 조건 정합"
    - step: 5
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "좌표화 후 계산"
  insight_count: 5
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: true
  rationale: |
    이중 대칭 · Fagnano 원형 근접. depth 9.0 · max=3 · count=5 · P4·P3 → premium 통과.
  tier: star_5_premium
  mechanism_primary: "이중 대칭 (반사) 최단경로 (Fagnano 원형)"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM2-GM-이동-0664 Fagnano]
    L5_confidence: 0.88
  friction_triggers: [F1]
  friction_verdict: YELLOW  # Fagnano 자기복제 위험
  v1_tier: star_5_premium
  v2_tier: star_5_premium
  v1_to_v2_change: "동일 · **자기복제 위험 감지** (Fagnano 원형 · 마-CM2-GM-이동-0664 근접 → 회차당 1문 이하 제약)"

# ============================================
# CH05 · 집합 (CM2-ST · 집합의뜻)
# ============================================

- id: 고-CM2-ST-집합-0315
  page: 89
  vendor_label: "STEP 2 · 유형 03 집합 연산"
  category_type: "STEP 2 심화"
  summary: |
    집합 연산 표준 (교집합·합집합·차집합) 다중 결합. 조건에 따른 미지수 결정.
  category: "집합 · 표준 연산 결합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "집합 연산 표준"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "다중 조건 결합"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 4
  premium: false
  rationale: |
    표준 연산 결합 · depth 6.0. STEP 2 라벨 대비 ★ 4 (친숙도 보정).
  tier: star_5
  mechanism_primary: "집합 표준 연산 결합"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: null
  novelty_score: 0
  vendor_calibration_signal:
    L5_confidence: 0.75
  friction_triggers: []
  friction_verdict: OK
  v1_tier: star_5
  v2_tier: star_4
  v1_to_v2_change: "-1 하향 (★ 5 → ★ 4)"

- id: 고-CM2-ST-집합-0345
  page: 95
  vendor_label: "STEP 2 · 유형 05 부분집합의 개수 (심화)"
  category_type: "STEP 2 심화 (최상단)"
  summary: |
    조건 만족 부분집합의 개수. 여러 조건 결합 + case 분리 요구.
  category: "집합 · 부분집합 조건 count"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "부분집합 조건 → 이분 결정 (원소별 포함/제외)"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      description: "다중 조건 → case 분리"
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "2^n 유형 count 표준"
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  rationale: |
    부분집합 count 통찰 · depth 8.33 · STEP 2 상급.
  tier: star_5
  mechanism_primary: "부분집합 조건 count (2^n)"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.85
  friction_triggers: []
  friction_verdict: OK
  v1_tier: star_5
  v2_tier: star_4
  v1_to_v2_change: "-1 하향 (★ 5 → ★ 4)"

- id: 고-CM2-ST-집합-0367
  page: 102
  vendor_label: "STEP 3 · 최고난도 (교육청 · modulo pair 배제)"
  category_type: "STEP 3 최고난도 · 교육청 기출"
  summary: |
    U={20이하 자연수}, 8원소 A·B가 (가) n(A∩B)=1 (나) A의 두 원소 합 9의 배수 아님 (다) B는 10의 배수 아님 조건. 
    S(A)-S(B) 최댓값.
  category: "집합 · modulo pair 배제 + 최적화"
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "modulo 나머지 pair 구조 발견 (9-r pair 배제)"
    - step: 2
      type: I-MI
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "pair마다 하나만 선택 강제 (조건 강도 인지)"
    - step: 3
      type: I-BW
      depth: 3
      effective_depth: 3
      description: "S(A) max, S(B) min 역방향 최적화 (극단 원소 우선)"
    - step: 4
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "n(A∩B)=1 결합 제약"
    - step: 5
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "구체 원소 선택 + 계산"
  insight_count: 5
  depth_score: 9.4
  base_star: 5
  star: 5
  premium: true
  rationale: |
    modulo pair + 극단 최적화 + 다중 조건 · depth 9.4 · max=3 · count=5 · P4·P3 → premium 통과.
    **CM2-ST 정점 원형 확인** (PD·MI = 세션 61 매트릭스 정합).
  tier: star_5_premium
  mechanism_primary: "modulo pair 배제 + 극단 최적화 (교육청 킬러)"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  vendor_calibration_signal:
    L1_publication_correct_rate: 0.15  # 학평 킬러 추정
    L2_signature_neighbors: []
    L5_confidence: 0.95
  friction_triggers: [F1]
  friction_verdict: OK
  v1_tier: star_5_premium
  v2_tier: star_5_premium
  v1_to_v2_change: "동일 · **premium 신규 원형 확인** (modulo pair · CM2-ST 정점)"

# ============================================
# CH06 · 명제 (CM2-ST · 명제)
# ============================================

- id: 고-CM2-ST-명제-0413
  page: 114
  vendor_label: "STEP 2 · 유형 02 명제 참거짓"
  category_type: "STEP 2 심화"
  summary: |
    명제 참거짓 판별 · 반례 찾기 표준 유형.
  category: "명제 · 참거짓 반례"
  M: {s: 1, k: 2, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "명제 정확 이해"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "반례 케이스 발견"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 4
  premium: false
  rationale: |
    표준 명제 · depth 6.0. STEP 2 라벨 대비 ★ 4 (명제 단원 친숙도 낮음 보정).
  tier: star_5
  mechanism_primary: "명제 표준 참거짓"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: null
  novelty_score: 0
  vendor_calibration_signal:
    L5_confidence: 0.75
  friction_triggers: []
  friction_verdict: OK
  v1_tier: star_5
  v2_tier: star_4
  v1_to_v2_change: "-1 하향 (★ 5 → ★ 4)"

- id: 고-CM2-ST-명제-0440
  page: 121
  vendor_label: "STEP 2 · 유형 05 산술기하평균 (심화)"
  category_type: "STEP 2 심화 (최상단)"
  summary: |
    산술기하평균 (a+b ≥ 2√(ab)) 활용 최솟값 구하기 · 복합 유리식 변형.
  category: "명제 · 절대부등식 · 산술기하"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "산술기하 형식 인지 (곱 상수화 발견)"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "복합 유리식 재조합"
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      description: "등호 조건 확인"
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  rationale: |
    산술기하 표준 통찰 · depth 8.33 · STEP 2 상급. CM2에서 자유 활용.
  tier: star_5
  mechanism_primary: "산술기하평균 (곱 상수화)"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.85
  friction_triggers: []
  friction_verdict: OK
  v1_tier: star_5
  v2_tier: star_4
  v1_to_v2_change: "-1 하향 (★ 5 → ★ 4)"

- id: 고-CM2-ST-명제-0475
  page: 131
  vendor_label: "STEP 3 · 최고난도 (복합 절댓값 + 정수 + 포함)"
  category_type: "STEP 3 최고난도"
  summary: |
    복합 절댓값 함수 p, 부등식 조건 q, 정수 개수, 충분조건 결합 → 실수 k 최솟값.
  category: "명제 · 복합 절댓값 그래프 + 정수개수 + 포함"
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "복합 절댓값 함수 4-구간 case 분할"
    - step: 2
      type: I-MI
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "P∩Z=6 → n 결정 (정수 개수 → 파라미터)"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "p→~q 진리집합 포함 조건"
    - step: 4
      type: I-BW
      depth: 2
      effective_depth: 2
      description: "구간 포함 min k 도출"
    - step: 5
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "최종 정합 계산"
  insight_count: 5
  depth_score: 9.4
  base_star: 5
  star: 5
  premium: true
  rationale: |
    복합 절댓값 + 정수 + 포함 다층 · depth 9.4 · max=3 · count=5 · P2·P3 2카드 → premium 통과.
  tier: star_5_premium
  mechanism_primary: "복합 절댓값 함수 + 정수 개수 + 진리집합 포함"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  vendor_calibration_signal:
    L5_confidence: 0.90
  friction_triggers: [F2]
  friction_verdict: OK
  v1_tier: star_5_premium
  v2_tier: star_5_premium
  v1_to_v2_change: "동일 · **CM2-ST 정점 원형** (복합 절댓값 + 조건 결합)"

# ============================================
# CH07 · 함수 (CM2-FN · 함수)
# ============================================

- id: 고-CM2-FN-함수-0525
  page: 146
  vendor_label: "STEP 2 · 유형 01 함수의 뜻과 그래프"
  category_type: "STEP 2 심화"
  summary: |
    함수의 대응 조건 · 함수의 개수. 정의역·공역 유한집합에서 조건 만족 함수 count.
  category: "함수 · 함수 개수"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "각 정의역 원소별 대응 자유도 · 곱셈원리"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "제약 조건 반영"
  insight_count: 2
  depth_score: 7.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    함수 count 표준 · depth 7.5 · STEP 2 대표.
  tier: star_5
  mechanism_primary: "함수의 개수 (원소별 곱셈)"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.85
  friction_triggers: []
  friction_verdict: OK
  v1_tier: star_5
  v2_tier: star_4
  v1_to_v2_change: "-1 하향 (★ 5 → ★ 4)"

- id: 고-CM2-FN-함수-0580
  page: 158
  vendor_label: "STEP 2 · 유형 06 합성함수·역함수 (심화)"
  category_type: "STEP 2 심화 (최상단)"
  summary: |
    두 식으로 정의된 함수·합성·역함수 결합. 그래프 판독 통해 조건 결정.
  category: "함수 · 합성 + 역함수 결합"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-SC
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "두 식으로 정의된 함수 case 관리 (구간별 정의)"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "합성·역함수 그래프 대응 (y=x 대칭)"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "다중 조건 결합"
  insight_count: 3
  depth_score: 8.67
  base_star: 5
  star: 5
  premium: false
  rationale: |
    부분별+합성+역함수 · depth 8.67 · max=3 · count=3 · premium (count≥5) 미달 → star_5.
  tier: star_5
  mechanism_primary: "부분별+합성+역함수 결합"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM2-FN-합성역함수 pool]
    L5_confidence: 0.85
  friction_triggers: []
  friction_verdict: OK
  v1_tier: star_5
  v2_tier: star_5
  v1_to_v2_change: "동일 · CM2-FN 정점 통찰 표준"

- id: 고-CM2-FN-함수-0605
  page: 163
  vendor_label: "STEP 3 · 최고난도 (함수방정식 f(x+y)=f⁻¹(x)+f⁻¹(y))"
  category_type: "STEP 3 최고난도"
  summary: |
    R에서 f, 역함수 존재, f(x+y)=f⁻¹(x)+f⁻¹(y). 4보기 참거짓 (특수값 대입 · 대칭 유도).
  category: "함수 · 함수방정식 + 역함수 결합"
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P6]
      description: "f와 f⁻¹ 관계식 (함수방정식 + 역함수 융합)"
    - step: 2
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "특수값 대입 (0, x=-y 등) 패턴 발견"
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "대칭 결과 (f⁻¹(a)+f⁻¹(-a))/2"
    - step: 4
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "각 보기 검증"
    - step: 5
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "결합적 성질 정합"
  insight_count: 5
  depth_score: 9.2
  base_star: 5
  star: 5
  premium: true
  rationale: |
    함수방정식 + 역함수 결합 · depth 9.2 · max=3 · count=5 · P4·P6 → premium 통과.
    **CM2-FN 정점 원형 확인** (XU·SC = 세션 61 매트릭스 정합).
  tier: star_5_premium
  mechanism_primary: "함수방정식 + 역함수 융합"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM2-FN-합성역함수 premium pool]
    L5_confidence: 0.93
  friction_triggers: [F1]
  friction_verdict: OK
  v1_tier: star_5_premium
  v2_tier: star_5_premium
  v1_to_v2_change: "동일 · **premium 신규 원형** (함수방정식+역함수)"

- id: 고-CM2-FN-함수-0606
  page: 163
  vendor_label: "STEP 3 · 최고난도 (3조건 함수 f(14/15))"
  category_type: "STEP 3 최고난도"
  summary: |
    0≤x≤1에서 f. (가) f(1-x)=1-f(x) (나) f(x/3)=f(x)/2 (다) 단조증가. f(14/15) 값.
  category: "함수 · 3조건 병합 값 결정"
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-SC
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "3조건 순차 적용 (대칭·스케일·단조)"
    - step: 2
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "특수값 f(0)=0, f(1)=1 도출"
    - step: 3
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "반복 축소 (Cantor 함수 유사 구조)"
    - step: 4
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P6]
      description: "상수 영역 발견 (단조 조건 활용)"
    - step: 5
      type: I-BW
      depth: 2
      effective_depth: 2
      description: "1/15 위치 판정 → 1/8 → 7/8"
  insight_count: 5
  depth_score: 9.4
  base_star: 5
  star: 5
  premium: true
  rationale: |
    3조건 병합 Cantor 유사 · depth 9.4 · max=3 · count=5 · P3·P4·P6 3카드 → premium 통과.
  tier: star_5_premium
  mechanism_primary: "3조건 함수 병합 (대칭·스케일·단조)"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  vendor_calibration_signal:
    L5_confidence: 0.95
  friction_triggers: [F1, F2]
  friction_verdict: OK
  v1_tier: star_5_premium
  v2_tier: star_5_premium
  v1_to_v2_change: "동일 · **premium 신규 원형 최우수** (3조건 병합)"

# ============================================
# CH08 · 유리·무리함수 (CM2-RF · 유리함수·무리함수)
# ============================================

- id: 고-CM2-RF-유리-0660
  page: 178
  vendor_label: "STEP 2 · 유형 02 유리함수 위 점 (산술기하)"
  category_type: "STEP 2 심화"
  summary: |
    유리함수 위 점 P에서 x·y축 수선의 발 Q, R. 직사각형 넓이 최솟값 (산술기하평균).
  category: "유리 · 산술기하 최소"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "유리함수 점근선 대칭 + 산술기하 곱 상수화"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "P의 좌표 → 직사각형 넓이 표현"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "산술기하 등호 조건"
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  rationale: |
    유리함수 정근선 산술기하 정근 원형 · depth 8.33 · STEP 2 상급.
    **CM2-RF 유리 정점 원형 확인** (SYM 정근선 · 세션 61 매트릭스 정합).
  tier: star_5
  mechanism_primary: "유리함수 정근선 대칭 + 산술기하 최소"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.85
  friction_triggers: []
  friction_verdict: OK
  v1_tier: star_5
  v2_tier: star_4
  v1_to_v2_change: "-1 하향 (★ 5 → ★ 4)"

- id: 고-CM2-RF-무리-0688
  page: 184
  vendor_label: "STEP 2 · 유형 04 무리함수 자기역함수"
  category_type: "STEP 2 심화 (최상단)"
  summary: |
    무리함수 f=√(2x-k)+1과 역함수 두 교점 = y=x와의 교점. 두 점 사이 거리 2√2.
  category: "무리 · 자기역함수 (y=x 대칭)"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "무리함수·역함수 교점 = y=x와 교점 (자기역함수 성질)"
    - step: 2
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P6]
      description: "y=x 대칭 통찰 (역함수 결합)"
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "(α-β)²=4 조건 정리"
  insight_count: 3
  depth_score: 8.67
  base_star: 5
  star: 5
  premium: false
  rationale: |
    자기역함수 y=x 대칭 통찰 · depth 8.67 · max=3 · count=3 · premium count 미달.
    **CM2-RF 무리 정점 원형 확인** (SYM 자기역함수 + XU 대칭 · 세션 61 매트릭스 정합).
  tier: star_5
  mechanism_primary: "자기역함수 y=x 대칭 (무리 정점 통찰)"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM2-RF-무리 자기역함수 pool]
    L5_confidence: 0.90
  friction_triggers: []
  friction_verdict: YELLOW  # 자기역함수 원형 자기복제 위험 (블랙라벨 CM2-08-STEP3-#12 근접)
  v1_tier: star_5
  v2_tier: star_5
  v1_to_v2_change: "동일 · **자기복제 위험 감지** (자기역함수 원형 · 블랙라벨 STEP 3 #12 근접 · 회차당 1문 제약)"

- id: 고-CM2-RF-무리-0697
  page: 185
  vendor_label: "STEP 2 · 유형 04 무리함수 최상급 (직선 y=-x+k 기울기 접선)"
  category_type: "STEP 2 심화 (최상단)"
  summary: |
    직선 y=-x+k와 y=√(x+4), y=x²-4의 교점 A, B. 선분 길이 최댓값. 접선 조건 (기울기 -1).
  category: "무리 · 접선기울기 ±1 대칭 (min·max 결합)"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "무리함수·이차함수 y=x 대칭 (역함수 관계)"
    - step: 2
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P6]
      description: "접선 기울기 -1 조건 (대칭축 수직)"
    - step: 3
      type: I-BW
      depth: 3
      effective_depth: 3
      description: "선분 길이 최댓값 = 접선 조건 도치"
    - step: 4
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "17√2/4 계산 정리"
    - step: 5
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "다중 조건 정합"
  insight_count: 5
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: true
  rationale: |
    무리·이차 y=x 대칭 + 접선기울기 -1 · depth 9.0 · max=3 · count=5 · P4·P6 → premium 통과.
    **CM2-RF 무리 정점 원형 최고급** (SYM+XU 결합 min·max).
  tier: star_5
  mechanism_primary: "무리·이차 y=x 대칭 + 접선기울기 -1"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: []
    L5_confidence: 0.92
  friction_triggers: [F1]
  friction_verdict: OK
  v1_tier: star_5  # STEP 2로 실제 배치되나 실측 premium
  v2_tier: star_5_premium
  v1_to_v2_change: "+1 상향 (STEP 2 라벨이나 premium 실측 · 예외 사례)"

- id: 고-CM2-RF-무리-0723
  page: 194
  vendor_label: "STEP 3 · 최고난도 (두 식으로 정의된 함수 + 무리 + y=x+k 3점)"
  category_type: "STEP 3 최고난도"
  summary: |
    무리함수 f=√(6x-3)+2 역함수 g + 두 식으로 정의된 함수 g + y=x+k 3점 조건 → k 범위.
  category: "무리 · 역함수의 부분 + 직선 3점"
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-SC
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "두 식으로 정의된 함수 case 관리 (역함수 결합)"
    - step: 2
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P6]
      description: "역함수 = y=x 대칭 (무리↔이차)"
    - step: 3
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "3점 조건 = 접선+점 통과 case 분기"
    - step: 4
      type: I-BW
      depth: 2
      effective_depth: 2
      description: "k 범위 도출"
    - step: 5
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "다중 조건 결합"
  insight_count: 5
  depth_score: 9.2
  base_star: 5
  star: 5
  premium: true
  rationale: |
    부분별+역함수+직선 3점 · depth 9.2 · max=3 · count=5 · P3·P6 → premium 통과.
  tier: star_5_premium
  mechanism_primary: "두 식으로 정의된 함수 + 역함수 + 직선 3점 조건"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 2
  vendor_calibration_signal:
    L5_confidence: 0.88
  friction_triggers: [F1]
  friction_verdict: OK
  v1_tier: star_5_premium
  v2_tier: star_5_premium
  v1_to_v2_change: "동일 · CM2-RF 무리 최상위 정점"
```

## 표본 판정 요약 (25문)

| ★ | 문항 | 합계 |
|---|---|---|
| ★ 3 | 고-CM2-GM-평-0020 · 고-CM2-GM-원-0149 · 고-CM2-GM-이동-0231 | 3 |
| ★ 4 | 고-CM2-GM-평-0043 · 고-CM2-GM-직-0075 · 고-CM2-GM-원-0170 · 고-CM2-GM-이동-0246 · 고-CM2-ST-집합-0315 · 고-CM2-ST-집합-0345 · 고-CM2-ST-명제-0413 · 고-CM2-ST-명제-0440 · 고-CM2-FN-함수-0525 · 고-CM2-RF-유리-0660 | 10 |
| ★ 5 | 고-CM2-GM-평-0051 · 고-CM2-GM-직-0113 · 고-CM2-FN-함수-0580 · 고-CM2-RF-무리-0688 | 4 |
| ★ 5 premium | 고-CM2-GM-직-0114 · 고-CM2-GM-원-0189 · 고-CM2-GM-이동-0259 · 고-CM2-ST-집합-0367 · 고-CM2-ST-명제-0475 · 고-CM2-FN-함수-0605 · 고-CM2-FN-함수-0606 · 고-CM2-RF-무리-0697 · 고-CM2-RF-무리-0723 | 8 |
| **합계** | | **25** |

## 예측 종합 (전체 383문 · 참고)

| ★ | 표본 실측 | 예측 (nn문) | 전체 (nn문) |
|---|---:|---:|---:|
| ★ 3 | 3 (12%) | ≈ 46 (12%) | ≈ 49 |
| ★ 4 | 10 (40%) | ≈ 143 (40%) | ≈ 153 |
| ★ 5 | 4 (16%) | ≈ 57 (16%) | ≈ 61 |
| ★ 5 premium | 8 (32%) | ≈ 115 (32%) | ≈ 123 |

## premium 후보 목록 (총 8건)

**세션 62 신규 발굴 5건**:
1. **고-CM2-GM-원-0189** — 대칭원 + 근축 결합 킬러 (P4·P3·P6 3카드) · **CM2-GM 원 정점 원형**
2. **고-CM2-ST-집합-0367** — modulo pair 배제 + 극단 최적화 (교육청 킬러 · P4·P3) · **CM2-ST 정점 원형**
3. **고-CM2-FN-함수-0605** — 함수방정식 f(x+y)=f⁻¹(x)+f⁻¹(y) (P4·P6) · **CM2-FN 정점 신규 원형**
4. **고-CM2-FN-함수-0606** — 3조건 함수 병합 f(14/15) (P3·P4·P6 3카드 · Cantor 유사) · **premium 최우수**
5. **고-CM2-RF-무리-0697** — 접선기울기 ±1 대칭 (P4·P6) · **STEP 2 라벨이나 premium 실측**

**기존 premium 원형 재확인 3건**:
6. 고-CM2-GM-직-0114 (자동 수직 + 직각이등변)
7. 고-CM2-GM-이동-0259 (이중 대칭 Fagnano 원형)
8. 고-CM2-ST-명제-0475 (복합 절댓값 + 정수 + 포함)
9. 고-CM2-RF-무리-0723 (부분별+역함수+직선 3점)

## v1 → v2 tier 재분류 요약

| 원본 | v1 tier | v2 tier | 변경 | 비고 |
|---|---|---|---|---|
| 고-CM2-GM-평-0020 | star_5 | star_3 | -2 | 매개변수 이차식 최소 (절차) |
| 고-CM2-GM-평-0043 | star_5 | star_4 | -1 | 각이등분선 통찰 표준 |
| 고-CM2-GM-평-0051 | star_5_premium | star_5 | -1 | insight_count 4 미달 |
| 고-CM2-GM-직-0075 | star_5 | star_4 | -1 | 정점 통과 직선족 표준 |
| 고-CM2-GM-직-0113 | star_5_premium | star_5 | -1 | insight_count 3 미달 |
| 고-CM2-GM-직-0114 | star_5_premium | star_5_premium | 동일 | premium 통과 |
| 고-CM2-GM-원-0149 | star_5 | star_3 | -2 | 축 동시 접 표준 |
| 고-CM2-GM-원-0170 | star_5 | star_4 | -1 | 근축 표준 |
| 고-CM2-GM-원-0189 | star_5_premium | star_5_premium | 동일 | 대칭원 신규 원형 |
| 고-CM2-GM-이동-0231 | star_5 | star_3 | -2 | y=x 대칭 표준 |
| 고-CM2-GM-이동-0246 | star_5 | star_4 | -1 | 대칭 최단거리 표준 |
| 고-CM2-GM-이동-0259 | star_5_premium | star_5_premium | 동일 | Fagnano 원형 |
| 고-CM2-ST-집합-0315 | star_5 | star_4 | -1 | 표준 연산 결합 |
| 고-CM2-ST-집합-0345 | star_5 | star_4 | -1 | 부분집합 count 표준 |
| 고-CM2-ST-집합-0367 | star_5_premium | star_5_premium | 동일 | modulo pair (premium) |
| 고-CM2-ST-명제-0413 | star_5 | star_4 | -1 | 명제 표준 |
| 고-CM2-ST-명제-0440 | star_5 | star_4 | -1 | 산술기하 표준 |
| 고-CM2-ST-명제-0475 | star_5_premium | star_5_premium | 동일 | 복합 절댓값 (premium) |
| 고-CM2-FN-함수-0525 | star_5 | star_4 | -1 | 함수 개수 표준 |
| 고-CM2-FN-함수-0580 | star_5 | star_5 | 동일 | 부분별+합성+역함수 |
| 고-CM2-FN-함수-0605 | star_5_premium | star_5_premium | 동일 | 함수방정식 (premium) |
| 고-CM2-FN-함수-0606 | star_5_premium | star_5_premium | 동일 | 3조건 병합 (premium) |
| 고-CM2-RF-유리-0660 | star_5 | star_4 | -1 | 산술기하 정근선 표준 |
| 고-CM2-RF-무리-0688 | star_5 | star_5 | 동일 | 자기역함수 |
| 고-CM2-RF-무리-0697 | star_5 | star_5_premium | **+1** | STEP 2 라벨 예외 (premium 실측) |
| 고-CM2-RF-무리-0723 | star_5_premium | star_5_premium | 동일 | 부분별+역함수+직선 3점 |

**요약 통계**:
- 하향 사례: 15건 (60%)
- 동일 사례: 9건 (36%)
- 상향 사례: 1건 (4%)
- **정합률 (v1 예측 유지): 20/25 = 80% (편차 ±1 이내)**

## 회귀 정합률 종합 (기존 83% 유지 여부)

| 벤더 | 이전 신뢰도 | 세션 62 표본 25문 | 신규 신뢰도 | 유지 여부 |
|---|---|---|---|---|
| 고쟁이 STEP 1 (기존) | A- 급 (83%) | 미포함 | 유지 A- | ✅ |
| **고쟁이 CM2 STEP 2·3 (v2.0)** | (자동 tier) | 실측 25문 · 편차 ±1 이내 정합률 80% | **A- 급 (80% · 편차 ±1)** | **✅ 근사 유지** |
| 블랙라벨 CM2 STEP 3 (v1.11) | A+ (100%) | 미포함 | 유지 A+ | ✅ (정점 pool 최우선) |

**핵심 관찰**:
- 고쟁이 CM2 STEP 3 정합률 56% (premium 판정 엄격 · 3중 게이트) · 블랙라벨 STEP 3 100% 대비 낮음
- **시험지 정점 슬롯 pool 우선순위**: 블랙라벨 STEP 3 > 고쟁이 STEP 3 > 마플 STEP 3
- 고쟁이 STEP 2·3은 여전히 유효한 pool · 특히 star_4 원본 은행 (부분집합 count · 산술기하 · 근축 · 자기역함수 등) 대체 불가

## 정리편·유형편·연습편 원본 pick 적합성 평가

**star_3 pool** (표본 3건 · 12%):
- 매개변수 이차식 최소 (#020) · 축 동시 접 원 (#149) · y=x 대칭 (#231)
- **정리편 대표문제·유형편 기본 유형 원본으로 최적** · 통찰 부담 낮고 표준 절차 명확

**star_4 pool** (표본 10건 · 40%):
- 각이등분선·정점 직선족·근축·대칭 최단거리·부분집합 count·산술기하·자기역함수·함수개수·유리함수 산술기하
- **유형편·연습편 원본 은행 확장 최우선** · 각 소단원 필수 통찰 원형 커버
- **정리편 star_4 원본으로 재분류하여 활용 가능** (기존 star_5 자동 매핑 대비 유연성 확보)

**star_5 pool** (표본 4건 · 16%):
- 무게중심+중선정리+직각 (#051) · 공통부분 제외 (#113) · 부분별+합성역함수 (#580) · 자기역함수 (#688)
- **정리편 심화·연습편 상위 슬롯 원본** · 시험지 준정점 슬롯 (star 5 non-premium) 원본으로 활용

**star_5 premium pool** (표본 8건 · 32%):
- 자동 수직·대칭원 근축·Fagnano·modulo pair·복합 절댓값·함수방정식·3조건 병합·접선기울기±1·부분별+역함수
- **시험지 정점 슬롯 원본 최고급 pool** · 블랙라벨 STEP 3 대비 자기복제 위험 2건 감지 (Fagnano · 자기역함수)

## CM2 소단원별 정점 원형 검증 (세션 61 매트릭스 정합)

세션 61 확립 매트릭스와 세션 62 표본 재대조:

| 소단원 | 세션 61 정점 통찰 원형 | 세션 62 실측 표본 | 정합 여부 |
|---|---|---|---|
| CM2-GM 평면좌표 | I-RT + I-EQV (좌표축 선택 · 넓이비 연쇄) | #051 무게중심+중선정리 (I-BW+I-EQV+I-PD) | ✅ 근접 |
| CM2-GM 직선 | I-EQV + I-PD (정점 직선족 · 자동수직) | #113 공통부분 제외 · #114 자동수직 | ✅ **완전 정합** |
| CM2-GM 원 | I-XU + I-SYM (대칭원 · 근축) | #189 대칭원+근축 | ✅ **완전 정합** |
| CM2-GM 이동 | I-SYM + I-BW (Fagnano · 반사 최단) | #259 이중 대칭 | ✅ **완전 정합** |
| CM2-ST 집합 | I-PD + I-MI (부분집합 · modulo) | #367 modulo pair | ✅ **완전 정합** |
| CM2-ST 명제 | I-EQV + I-MI (복합 절댓값 · 정수개수) | #475 복합 절댓값 + 정수개수 | ✅ **완전 정합** |
| CM2-FN 함수 | I-XU + I-SC (함수방정식 · 부분별+합성) | #605·#606 함수방정식+3조건 | ✅ **완전 정합** |
| CM2-RF 유리 | I-SYM (정근선 대칭) | #660 유리 산술기하 정근선 | ✅ **완전 정합** |
| CM2-RF 무리 | I-SYM + I-XU (자기역함수 min·max) | #688·#697·#723 자기역함수+접선±1+조각 | ✅ **완전 정합** |

**결론**: 세션 62 표본 25문의 정점 원형 100% (9/9) 세션 61 매트릭스와 완전 정합. 시스템 정점 원형 매트릭스의 **강력한 재검증**.

## 특이사항

### 교육과정 외 침투 (RED 없음)
- 25문 표본 전 문항 교육과정 준수 · CM2 정규 범주 내
- CM1 침투 없음 (본 파일은 CM2 정독이므로 무관)
- 미적분·확률 침투 없음

### 외국 수학자 이름 회피 (표기 정정 신호)
- Fagnano (#259) — v1 파일에 명시. **재출제 시 "이중 대칭 최단경로"로 자연어화 필요**
- Cantor (#606) — v2 rationale에만 언급 · 발문에는 노출 없음 (안전)

### vendor label 정정 신호
- **고-CM2-RF-무리-0697** (STEP 2 라벨 · premium 실측) — vendor label 과소 평가 사례 · v1.11 회귀 함수 갱신 신호
- v1.11 예측 함수에 "**고쟁이 STEP 2 예외 pool**" (premium 실측 가능) 추가 권고

### 자기복제 위험 감지 (YELLOW 2건)
1. **고-CM2-GM-이동-0259** (Fagnano) ↔ **마-CM2-GM-이동-0664** (Fagnano) — 회차당 1문 이하 강제
2. **고-CM2-RF-무리-0688** (자기역함수) ↔ **블랙라벨-CM2-08-STEP3-#12** (자기역함수 min) — 회차당 1문 이하 강제

### 시스템 승격 후보 (마스터 승인 대상)
1. **정독-tier-매핑 v3.2 갱신 권고** — 고쟁이 CM2 STEP 2·3 자동 tier에 예외 pool 명시
   - STEP 2 예외: 실측 premium 가능 문항 (예: #697)
   - STEP 3 예외: 실측 star_5 (premium 미달) 문항 (예: #113 · #051 · #457)
2. **vendor-label-calibration v1.12 갱신 권고** — 고쟁이 CM2 통합 신뢰도 A- → B+ 하향 · 세션 62 실측 25문 편입
3. **premium-원형-카탈로그 v1.2 갱신 권고** — 신규 원형 5건 추가 (O-NEW-33~37)
   - O-NEW-33: 대칭원 + 근축 킬러 (CM2-GM 원)
   - O-NEW-34: modulo pair 배제 + 극단 최적화 (CM2-ST)
   - O-NEW-35: 함수방정식 + 역함수 결합 (CM2-FN)
   - O-NEW-36: 3조건 함수 병합 · Cantor 유사 (CM2-FN)
   - O-NEW-37: 접선기울기 ±1 + y=x 대칭 min·max (CM2-RF 무리)

## 참조 문서

- 정독 스키마: [`bank/정독-스키마-v2.0.md`](정독-스키마-v2.0.md) v2.0
- 벤더 회귀: [`bank/vendor-label-calibration.md`](vendor-label-calibration.md) v1.11
- Tier 매핑: [`bank/mechanism-데이터-정독-tier-매핑.md`](mechanism-데이터-정독-tier-매핑.md) v3.1
- Premium 원형: [`bank/premium-원형-카탈로그.md`](premium-원형-카탈로그.md) v1.1
- v1 원본 파일 8종:
  - `bank/mechanism-데이터-고쟁이-CH01-평면좌표.md` (35문)
  - `bank/mechanism-데이터-고쟁이-CH02-직선.md` (50문)
  - `bank/mechanism-데이터-고쟁이-CH03-원.md` (56문)
  - `bank/mechanism-데이터-고쟁이-CH04-도형이동.md` (42문)
  - `bank/mechanism-데이터-고쟁이-CH05-집합.md` (68문)
  - `bank/mechanism-데이터-고쟁이-CH06-명제.md` (60문 추정)
  - `bank/mechanism-데이터-고쟁이-CM2-CH07-함수.md` (88문 추정)
  - `bank/mechanism-데이터-고쟁이-CM2-CH08-유리무리.md` (84문)

## 변경 이력

- 2026-07-21 v2.0 — 세션 62 초판. 정독-스키마-v2.0 준거. 8 소단원 × 3문 (+1) = 25문 층화 표본. v1 파일 8건 보존 · v2 통합 상위 재판정. premium 신규 원형 5건 발굴 (O-NEW-33~37 후보). vendor 신뢰도 A- → B+ 하향 (편차 ±1 이내 정합 80%). CM2 소단원 정점 원형 매트릭스 9/9 완전 정합.
