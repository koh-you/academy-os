---
name: mechanism-데이터-개념원리-CM2-4파일-확대-v2
description: 개념원리 CM2 C급 4파일 (원·이동·ST·FN) v2.0 확대 재정독 · 세션 63 P3 Flywheel · 각 파일 25문 = 100문 층화 표본으로 star_3 단일 라벨의 실체 star_1~4 분산 재검증 · 파일별 신뢰도 C → B 상향 목표 · v1.12 vendor 매트릭스 편입 근거 확보
metadata:
  type: reference
  version: v2.0
  established: 2026-07-21
  source: 개념원리 공통수학2 (2022개정)
  publisher: 개념원리
  section: 원의 방정식 · 도형의 이동 · 집합과 명제 · 함수
  unit_code: [CM2-GM, CM2-ST, CM2-FN]
  citation_note: "개념원리 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약 · 시그니처 3원소만 · 유사도 0.30~0.85)"
  extract_range: "4파일 × 각 25문 = 100문 층화 확대 표본 (대표예제·유제·연습 STEP1·STEP2·실력UP)"
  pages: "66~118, 120~203, 206~246"
  total_problems: 479  # 원 100 + 이동 70 + ST 193 + FN 116
  sample_problems: 100  # 각 파일 25문 × 4
  predicted_problems: 379
  judgment_protocol: "정독-스키마 v2.0 (3층 M·I·X + v3.9 저노출 게이트) · vendor-label-calibration-v1.12 회귀"
  parent_pilot: "mechanism-데이터-개념원리-CM2-C급-4파일-v2.md (40문 표본 · 22.5% 정합) · 세션 62"
  parent_pilot_2: "vendor-label-calibration v1.12 (개념원리 CM2 B급 · 6단계 신뢰도 매트릭스)"
  prior_v1_files:
    - bank/mechanism-데이터-개념원리-CM2-GM-원.md (100문 · 전문항 star_3 단일)
    - bank/mechanism-데이터-개념원리-CM2-GM-이동.md (70문 · 전문항 star_3 단일)
    - bank/mechanism-데이터-개념원리-CM2-ST.md (193문 · 전문항 star_3 단일)
    - bank/mechanism-데이터-개념원리-CM2-FN.md (116문 · 전문항 star_3 단일)
  regression_baseline: "v1.12 개념원리 회귀 (대표예제→star_1~4 분산 · 유제→star_1~3 · 연습_step1→star_2~3 · 연습_step2·실력up→star_3~4)"
  supersedes: "mechanism-데이터-개념원리-CM2-C급-4파일-v2.md (40문판 · 신뢰도 판정 근거 확대)"
---

# 개념원리 CM2 C급 4파일 (원·이동·ST·FN) — v2.0 확대 재정독 (100문)

## 서문 · 목적

세션 62 40문 표본 (정합률 22.5%) 결과로 v1 4파일이 **star_3 단일 라벨**이 실체 star_1~4로 분산됨을 확인함. 세션 63 P3 Flywheel에서 각 파일 **25문 = 총 100문**으로 표본 확대하여:

1. 파일별 신뢰도 등급 재산정 (C급 → B급 상향 여부 판정)
2. category_type × sub_unit 매트릭스로 소단원별 예외 회귀 함수 도출
3. vendor-label-calibration v1.13 편입 초안 확보
4. CM2 소단원별 정점 원형 매트릭스 8/8 재검증 (세션 61·62 계승)

**표본 배분 (100문 · 각 파일 25문)**:

| 파일 | 표본 | 대표예제 | 유제 | 연습_step1 | 연습_step2 | 연습_실력up |
|---|---:|---:|---:|---:|---:|---:|
| CM2-GM-원 | 25 | 7 | 8 | 4 | 4 | 2 |
| CM2-GM-이동 | 25 | 5 | 8 | 4 | 5 | 3 |
| CM2-ST | 25 | 8 (소단원 균등) | 10 | 3 | 3 | 1 |
| CM2-FN | 25 | 7 | 9 | - (구분 없음) | 5 (연습) | 4 (실력) |
| **합계** | **100** | **27** | **35** | **11** | **17** | **10** |

---

## Ⅰ. CM2-GM-원 (25문)

```yaml
- id: 개념원리-CM2-GM-원-예제-01
  page: 69
  vendor_label: "대표예제 · 중심·한 점 → 원 방정식"
  category_type: 대표예제
  sub_unit: 원의 방정식 (기본)
  summary: "중심 (-4,3), 점 (1,6) 지나는 원 · r² = 34 계산."
  category: 표준형 즉시 대입 (첫 도입)
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
  regression_hit: false  # -2 하향
  rationale: "표준형 즉시 대입 · 절차형 · ★ 1 (교과 최초 도입)"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC], L5_confidence: 0.92}

- id: 개념원리-CM2-GM-원-예제-02
  page: 69
  vendor_label: "대표예제 · 지름 양 끝점 → 원"
  category_type: 대표예제
  sub_unit: 원의 방정식 (기본)
  summary: "A(0,3), B(4,1) 지름 양 끝점 · 중심 = 중점 · 반지름 = |AB|/2."
  category: 지름 양 끝점 (중점·거리 결합)
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
  regression_hit: false
  rationale: "지름 정의 즉시 · ★ 1"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC], L5_confidence: 0.92}

- id: 개념원리-CM2-GM-원-예제-05
  page: 71
  vendor_label: "대표예제 · 원이 되기 위한 조건 (r²>0)"
  category_type: 대표예제
  sub_unit: 원의 방정식 (일반형)
  summary: "일반형 원 조건 · r² > 0 판별 후 상수 범위."
  category: r²>0 부등식 (표준)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "일반형 → 완전제곱 → r²>0 관점"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false  # -1 하향
  rationale: "완전제곱 표준 · ★ 2"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.85}

- id: 개념원리-CM2-GM-원-예제-06
  page: 72
  vendor_label: "대표예제 · 세 점 지나는 원 (일반형 3원 연립)"
  category_type: 대표예제
  sub_unit: 원의 방정식 (일반형)
  summary: "세 점 (0,0), (3,-3), (-2,2) 지나는 원 방정식."
  category: 세 점 원 (3원 연립)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-CON, depth: 2, effective_depth: 2, description: "원점 지남 → C=0 관점 · 2원 연립 단순화"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "원점 → C=0 단순화 · ★ 2 표준 유형"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.82}

- id: 개념원리-CM2-GM-원-예제-08
  page: 74
  vendor_label: "대표예제 · 양축 동시 접 · 한 점 지남 (두 해)"
  category_type: 대표예제
  sub_unit: 원의 방정식 (제약원)
  summary: "(2,4) 지나고 x·y축 동시 접 · 사분면 판별 → 중심 (r,r) 이차 두 해."
  category: 양축 동시 접·한 점 (두 해)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "제1사분면 판별 → 중심 (r,r) 관점"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "한 점 대입 이차 두 해"}
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "사분면 판별 + 두 해 · ★ 3 정합"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.85}

- id: 개념원리-CM2-GM-원-예제-09
  page: 75
  vendor_label: "대표예제 · 원 밖 점~원 위 점 거리 최대·최소"
  category_type: 대표예제
  sub_unit: 원 위 점 거리
  summary: "원 밖 점 P · 원 위 점 Q · |PQ| 최대·최소 = |PC|±r."
  category: 원 밖 점~원 위 점 거리 (표준 도구)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "최대·최소 = |PC|±r 관점 (중심 관통)"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "표준 도구 · ★ 2"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.85}

- id: 개념원리-CM2-GM-원-예제-10
  page: 76
  vendor_label: "대표예제·발전 · 아폴로니오스 원"
  category_type: 대표예제
  category_meta: 발전
  sub_unit: 원의 방정식 (자취)
  summary: "A(-1,-1), B(2,2), AP:BP=2:1 · P의 자취 도형 넓이."
  category: 아폴로니오스 원 (거리비)
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "거리비 → 이차식 전개 → 원 도형 인식"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "완전제곱 → 반지름 → 넓이"}
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # +1 상향
  rationale: "발전 · 자취 원 인식 depth 3 · ★ 4"
  vendor_calibration_signal: {L2_signature_neighbors: [쎈-C단계-사고력, 마플-TOUGH], L5_confidence: 0.85}

- id: 개념원리-CM2-GM-원-유제-149
  page: 68
  vendor_label: "유제 · 표준형 판독 3문항"
  category_type: 유제
  sub_unit: 원의 방정식 (기본)
  summary: "3개 표준형 중심·반지름 직접 판독."
  category: 표준형 판독 (첫 도입)
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
  regression_hit: false
  rationale: "표준형 판독 · ★ 1"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC], L5_confidence: 0.95}

- id: 개념원리-CM2-GM-원-유제-155
  page: 70
  vendor_label: "유제 · 중심 직선 위·두 점 지남"
  category_type: 유제
  sub_unit: 원의 방정식 (제약)
  summary: "중심 y=x+1 위 · 두 점 지남 · 원."
  category: 중심 직선 위 조건 (표준)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-CON, depth: 2, effective_depth: 2, description: "중심 파라미터 (a,a+1) · 거리 등식"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "1파라미터 표준 · ★ 2"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.85}

- id: 개념원리-CM2-GM-원-유제-159
  page: 71
  vendor_label: "유제 · 일반형 원 조건 정수 개수"
  category_type: 유제
  sub_unit: 원의 방정식 (일반형)
  summary: "일반형 계수 조건 · r²>0 이차부등식 · 정수해 개수."
  category: r²>0 이차부등식 정수 개수
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "일반형 → r² 표현 → 이차부등식"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "표준 절차 · ★ 2"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.80}

- id: 개념원리-CM2-GM-원-유제-163
  page: 73
  vendor_label: "유제 · 중심 직선·y축 접·점 지남 (두 해)"
  category_type: 유제
  sub_unit: 원의 방정식 (다조건)
  summary: "중심 y=x+2 위 · y축 접 · (4,4) 지남 두 원 · 반지름 합."
  category: 다조건 원 (두 해·근 계수)
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "y축 접 → 중심 x=r 관점"}
    - {step: 2, type: I-BW, depth: 2, effective_depth: 2, description: "이차 근·계수 (합)"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "3조건 통합 + 근·계수 · ★ 3 정합"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-●상, 마플-TOUGH], L5_confidence: 0.75}

- id: 개념원리-CM2-GM-원-유제-167
  page: 75
  vendor_label: "유제 · 원점~원 위 점 거리 최대·최소"
  category_type: 유제
  sub_unit: 원 위 점 거리
  summary: "원 (x-3)²+(y-4)²=4 · 원점~원 위 점 거리 최대·최소."
  category: 원점~원 거리 (표준)
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "|OC|±r 관점"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "표준 도구 · ★ 2"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC], L5_confidence: 0.90}

- id: 개념원리-CM2-GM-원-유제-170
  page: 76
  vendor_label: "유제 · 아폴로니오스 (거리비 1:3) · 둘레"
  category_type: 유제
  sub_unit: 원의 방정식 (자취)
  summary: "A, B · AP:BP=1:3 · P의 자취 · 둘레."
  category: 아폴로니오스 원 (유제)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "거리비 → 원 자취 인식"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "반지름 → 둘레 2πr"}
  insight_count: 2
  depth_score: 7.5
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "예제 10 훈련 반복 유제 · depth 3 통찰 훈련 · ★ 3 정합 (첫 노출 유제이므로 base 3)"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-●상, 마플-TOUGH], L5_confidence: 0.75}

- id: 개념원리-CM2-GM-원-유제-171
  page: 76
  vendor_label: "유제 · 아폴로니오스 · 삼각형 넓이 최댓값"
  category_type: 유제
  sub_unit: 원의 방정식 (자취·최댓값)
  summary: "거리비 P 자취 원 · 삼각형 넓이 최댓값."
  category: 자취 원 + 넓이 최댓값 (결합)
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "자취 원 인식 (거리비)"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "밑변 고정 → 높이 최대 = r (수직 지름)"}
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # +1 상향
  rationale: "자취 + 넓이 결합 depth 3 · ★ 4 상향 (v1 매몰)"
  vendor_calibration_signal: {L2_signature_neighbors: [쎈-C단계-사고력, 마플-TOUGH], L5_confidence: 0.82}

- id: 개념원리-CM2-GM-원-유제-184
  page: 82
  vendor_label: "유제 · 원-직선 위치 관계 판별식"
  category_type: 유제
  sub_unit: 원과 직선
  summary: "원-직선 위치 관계 (판별식 or 거리)."
  category: 위치 관계 판별 (기본)
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
  regression_hit: false
  rationale: "판별식·거리 즉시 · ★ 1"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC], L5_confidence: 0.90}

- id: 개념원리-CM2-GM-원-연습-176
  page: 77
  vendor_label: "연습_step1 · 교육청 · 세 점 원 중심"
  category_type: 연습_step1
  category_meta: 교육청 기출
  sub_unit: 원의 방정식 (일반형)
  summary: "세 점 (0,0), (6,0), (-4,4) 지나는 원 · 중심 (p,q) · p+q."
  category: 세 점 원 (교육청)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-CON, depth: 2, effective_depth: 2, description: "원점 지남 C=0 → 2원 연립"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "교육청 초·중반 · ★ 2"
  vendor_calibration_signal: {L2_signature_neighbors: [쎈-교육청-CM2-원], L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.80}

- id: 개념원리-CM2-GM-원-연습-179
  page: 78
  vendor_label: "연습_step2 · 반지름² 이차식 최소"
  category_type: 연습_step2
  sub_unit: 원의 방정식 (최소)
  summary: "일반형 k 파라미터 · 넓이 최소 시 중심."
  category: r² 이차식 최소 · 중심
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "넓이 최소 = r² 최소 관점"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "완전제곱 → k 결정"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "step2 표준 통찰 조합 · ★ 3 정합"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-●상, 마플-TOUGH], L5_confidence: 0.75}

- id: 개념원리-CM2-GM-원-연습-181
  page: 78
  vendor_label: "연습_step2 · 원 중심 축 대칭·거리 조건"
  category_type: 연습_step2
  sub_unit: 원의 방정식 (조합)
  summary: "원 중심이 특정 조건 · 거리 조합 최적화."
  category: 원 중심 위치 + 거리 결합
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "중심 조건 관점"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "거리 조합 최적"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "step2 · ★ 3 정합"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-●상, 마플-TOUGH], L5_confidence: 0.75}

- id: 개념원리-CM2-GM-원-연습-183
  page: 78
  vendor_label: "연습_실력up · 중점 자취 (원 축약)"
  category_type: 연습_실력up
  sub_unit: 원의 방정식 (자취)
  summary: "A(3,2), 원 위 P · AP 중점 자취 도형 넓이."
  category: 중점 자취 (P=2M-A 치환·원 축약)
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "P=2M-A 치환 → 원 방정식 대입"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "치환 → 반지름 축약 (√2)"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "넓이 πr²"}
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # +1 상향
  rationale: "실력UP · 중점 자취 depth 3 · ★ 4 (v1 매몰 대표)"
  vendor_calibration_signal: {L2_signature_neighbors: [쎈-C단계-사고력, 마플-STEP3], L5_confidence: 0.85}

- id: 개념원리-CM2-GM-원-연습-198
  page: 84
  vendor_label: "연습_step1 · 접선 길이 · 표준"
  category_type: 연습_step1
  sub_unit: 원과 직선 (접선)
  summary: "원 밖 점 P → 접선 길이 계산."
  category: 접선 길이 (표준)
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "l² = |PC|² - r² 관점"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "표준 도구 · ★ 2"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC], L5_confidence: 0.88}

- id: 개념원리-CM2-GM-원-연습-201
  page: 87
  vendor_label: "연습_step2 · 현 길이 · 조건 결합"
  category_type: 연습_step2
  sub_unit: 원과 직선 (현)
  summary: "원-직선 · 현 길이 특정 값 · 상수 결정."
  category: 현 길이 조건 · 상수
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "현²/4 + d² = r² 관점"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "거리 공식 후 대입"}
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "step2 표준 · ★ 3 정합"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-●상, 마플-NORMAL], L5_confidence: 0.80}

- id: 개념원리-CM2-GM-원-연습-205
  page: 88
  vendor_label: "연습_실력up · 원-직선 조건 · 최댓값 결합"
  category_type: 연습_실력up
  sub_unit: 원과 직선 (최댓값)
  summary: "원-직선 관계 조건 · 목표 함수 최댓·최솟값."
  category: 원-직선 조건 + 최댓값
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "조건 = 판별식 접근 → 관계식 유도"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "최적화 관점 (이차 완전제곱)"}
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # +1 상향
  rationale: "실력UP · depth 3 · ★ 4"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-STEP3], L5_confidence: 0.82}

- id: 개념원리-CM2-GM-원-연습-215
  page: 92
  vendor_label: "연습_step2 · 접선 방정식·기울기 조건"
  category_type: 연습_step2
  sub_unit: 원과 직선 (접선)
  summary: "원 밖 점 접선 기울기 · 두 접선 방정식."
  category: 원 밖 점 접선 (두 해)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "점-직선 거리 = r 관점"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "이차 두 기울기 근"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "step2 표준 · ★ 3 정합"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-●상, 마플-NORMAL], L5_confidence: 0.80}

- id: 개념원리-CM2-GM-원-연습-217
  page: 93
  vendor_label: "연습_실력up · 접선·기하 조건"
  category_type: 연습_실력up
  sub_unit: 원과 직선 (접선·조건)
  summary: "원 접선 + 기하 조건 · 계수 결정."
  category: 접선 + 기하 결합
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "접선 조건 + 기하 결합 관점"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "연립 후 근·계수"}
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # +1 상향
  rationale: "실력UP · depth 3 · ★ 4"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-STEP3], L5_confidence: 0.80}

- id: 개념원리-CM2-GM-원-연습-228
  page: 95
  vendor_label: "연습_실력up · 접힘 (대칭)·공통현"
  category_type: 연습_실력up
  sub_unit: 두 원 교점
  summary: "원 접힘 (-1,0)에서 x축 접 · 두 점 지나는 직선."
  category: 접힘 = 대칭 · 공통현
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "접힘 = 대칭 이동 관점 (원본 + 대칭 원)"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "공통현 = 두 원 방정식 차"}
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # +1 상향
  rationale: "실력UP · 접힘 해석 depth 3 · ★ 4 (v1 매몰 대표)"
  vendor_calibration_signal: {L2_signature_neighbors: [쎈-C단계-사고력-접힘], L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-STEP3], L5_confidence: 0.85}
```

---

## Ⅱ. CM2-GM-이동 (25문)

```yaml
- id: 개념원리-CM2-GM-이동-예제-01
  page: 100
  vendor_label: "대표예제 · 점 평행이동"
  category_type: 대표예제
  sub_unit: 평행이동
  summary: "이동벡터 확정 후 좌표 대입."
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
  regression_hit: false
  rationale: "이동벡터 즉시 · ★ 1"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC], L5_confidence: 0.95}

- id: 개념원리-CM2-GM-이동-예제-02
  page: 101
  vendor_label: "대표예제 · 직선 평행이동"
  category_type: 대표예제
  sub_unit: 평행이동
  summary: "직선 y=2x+3 · 평행이동 · 새 직선 방정식."
  category: 직선 평행이동 (x→x-a·y→y-b 치환)
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "x→x-a·y→y-b 치환 관점"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "표준 치환 · ★ 2"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC], L5_confidence: 0.90}

- id: 개념원리-CM2-GM-이동-예제-03
  page: 102
  vendor_label: "대표예제 · 포물선·원 평행이동 조건"
  category_type: 대표예제
  sub_unit: 평행이동
  summary: "포물선 꼭짓점 x축 위 · p 결정 · 원 중심 이동 조건."
  category: 도형 이동 조건 (표준 통찰)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "꼭짓점/중심 이동 관점"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "좌표 조건 대입"}
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "표준 유형 · ★ 3 정합"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.80}

- id: 개념원리-CM2-GM-이동-예제-06
  page: 108
  vendor_label: "대표예제 · 평행·대칭이동 연속"
  category_type: 대표예제
  sub_unit: 대칭이동
  summary: "도형 평행이동 후 대칭이동 (또는 반대)."
  category: 이동·대칭 연속 (조합)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "각 이동 방정식 변환 (순서)"}
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "순서 통찰 · ★ 3 정합"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.80}

- id: 개념원리-CM2-GM-이동-예제-07
  page: 109
  vendor_label: "대표예제 · 선분 길이 합 최소 (대칭)"
  category_type: 대표예제
  sub_unit: 대칭이동
  summary: "A · 직선 위 P · B · AP+PB 최소 (한 번 대칭)."
  category: 대칭 최단경로 (한 번 대칭 · 표준)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "대칭점 A' → AP+PB = A'P+PB ≥ A'B 관점"}
  insight_count: 1
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "대표예제 정점 통찰 · ★ 3 정합 (한 번 대칭)"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.85}

- id: 개념원리-CM2-GM-이동-유제-229
  page: 99
  vendor_label: "유제 · 점 평행이동 좌표"
  category_type: 유제
  sub_unit: 평행이동
  summary: "x축 -3, y축 4 평행이동한 세 점."
  category: 좌표 더하기 (기본)
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
  regression_hit: false
  rationale: "★ 1"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC], L5_confidence: 0.95}

- id: 개념원리-CM2-GM-이동-유제-234
  page: 102
  vendor_label: "유제 · 원 평행이동 계수"
  category_type: 유제
  sub_unit: 평행이동
  summary: "원 방정식 평행이동 · 계수 결정."
  category: 원 이동 · 계수 결정
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "중심 이동 관점 · 반지름 불변"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "표준 · ★ 2"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.85}

- id: 개념원리-CM2-GM-이동-유제-240
  page: 103
  vendor_label: "유제 · 평행이동 조건 결합"
  category_type: 유제
  sub_unit: 평행이동
  summary: "평행이동 후 도형 조건 · 상수 결정."
  category: 이동 조건 결합
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-CON, depth: 2, effective_depth: 2, description: "이동 후 조건 매칭 (좌표)"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "★ 2"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.80}

- id: 개념원리-CM2-GM-이동-유제-253
  page: 107
  vendor_label: "유제 · 도형 대칭이동 기본"
  category_type: 유제
  sub_unit: 대칭이동
  summary: "도형 x축·y축·y=x 대칭 방정식."
  category: 대칭 방정식 (표준)
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "x→-x, y→-y, x↔y 치환 관점"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "★ 2"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC], L5_confidence: 0.90}

- id: 개념원리-CM2-GM-이동-유제-259
  page: 109
  vendor_label: "유제 · 선분 길이 최소 (한 번 대칭)"
  category_type: 유제
  sub_unit: 대칭이동
  summary: "A, B · 직선 위 P · AP+PB 최소."
  category: 한 번 대칭 최단 (유제 반복)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "대칭점 관점 (예제7 반복)"}
  insight_count: 1
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "★ 3 정합 (반복 훈련)"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.80}

- id: 개념원리-CM2-GM-이동-유제-268
  page: 111
  vendor_label: "유제 · 대칭이동 후 원 방정식"
  category_type: 유제
  sub_unit: 대칭이동
  summary: "원 y=x 대칭 · 방정식."
  category: 원 대칭 (표준)
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
  regression_hit: false
  rationale: "★ 1"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC], L5_confidence: 0.90}

- id: 개념원리-CM2-GM-이동-유제-270
  page: 113
  vendor_label: "유제 · 포물선 점 대칭 · 꼭짓점"
  category_type: 유제
  sub_unit: 점·직선 대칭
  summary: "포물선 (a,b) 대칭 · 꼭짓점 대응 · a+b."
  category: 포물선 점 대칭 (중점)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "꼭짓점 대응 · 중점 = (a,b)"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "★ 2"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.85}

- id: 개념원리-CM2-GM-이동-유제-273
  page: 114
  vendor_label: "유제 · 원 중심 직선 대칭 · 수선의 발"
  category_type: 유제
  sub_unit: 점·직선 대칭
  summary: "원 중심 직선 대칭 · 반지름 불변."
  category: 원 대칭 · 수선의 발 파라미터
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "원 대칭 = 중심 대칭 · 반지름 불변"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "수선의 발 파라미터 계산"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "★ 3 정합"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-●상, 마플-TOUGH], L5_confidence: 0.75}

- id: 개념원리-CM2-GM-이동-연습-277
  page: 116
  vendor_label: "연습_step1 · 이동·대칭·교점·삼각형 넓이"
  category_type: 연습_step1
  sub_unit: 이동 종합
  summary: "직선 이동·대칭·y축 조합 · 삼각형 넓이."
  category: 3단계 조합 (표준)
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "이동·대칭 각각 변환"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "교점·꼭짓점"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "밑변·높이"}
  insight_count: 3
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "★ 3 정합"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-●상, 마플-TOUGH], L5_confidence: 0.75}

- id: 개념원리-CM2-GM-이동-연습-280
  page: 116
  vendor_label: "연습_step1 · 점 직선 대칭 (2연립)"
  category_type: 연습_step1
  sub_unit: 점·직선 대칭
  summary: "점 대칭 · 중점 + 수직 조건 연립."
  category: 점 직선 대칭 (표준 2연립)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "중점·수직 관점"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "★ 2"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.85}

- id: 개념원리-CM2-GM-이동-연습-278
  page: 116
  vendor_label: "연습_step1 · 도형 대칭이동 방정식"
  category_type: 연습_step1
  sub_unit: 대칭이동
  summary: "도형 y=x 대칭 · 방정식."
  category: 도형 대칭 (표준)
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
  regression_hit: false
  rationale: "★ 1"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC], L5_confidence: 0.88}

- id: 개념원리-CM2-GM-이동-연습-281
  page: 117
  vendor_label: "연습_step2 · 이동 후 도형 조건"
  category_type: 연습_step2
  sub_unit: 이동 결합
  summary: "이동 조합 · 도형 조건 · 상수 결정."
  category: 이동 조합·조건
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "이동 방정식 변환"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "조건 매칭"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "★ 3 정합"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-●상, 마플-TOUGH], L5_confidence: 0.75}

- id: 개념원리-CM2-GM-이동-연습-282
  page: 117
  vendor_label: "연습_step2 · 삼각형 둘레 최소 (두 번 대칭)"
  category_type: 연습_step2
  sub_unit: 대칭·최단
  summary: "A · y=x 위 P · x축 위 Q · △APQ 둘레 최소."
  category: 두 번 대칭 최단 (SYM 정점)
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "두 번 대칭 A₁·A₂ 관점"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "AP+PQ+QA ≥ A₁A₂"}
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # +1 상향
  rationale: "step2 · CM2-GM 최단 정점 (SYM) · ★ 4"
  vendor_calibration_signal: {L2_signature_neighbors: [쎈-C단계-사고력-두번대칭], L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-STEP3], L5_confidence: 0.85}

- id: 개념원리-CM2-GM-이동-연습-283
  page: 117
  vendor_label: "연습_step2 · 이동 조건 상수 결정"
  category_type: 연습_step2
  sub_unit: 이동 결합
  summary: "이동 조건 조합 · 계수 결정."
  category: 이동 결합 조건
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "이동 변환 매칭"}
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "★ 3 정합"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-●상, 마플-NORMAL], L5_confidence: 0.75}

- id: 개념원리-CM2-GM-이동-연습-285
  page: 117
  vendor_label: "연습_step2 · 두 원 대칭 · 축 결정"
  category_type: 연습_step2
  sub_unit: 대칭·역방향
  summary: "두 원 대칭 축 y=ax+b · 두 중심 수직이등분선."
  category: 원 대칭 역해석 (수직이등분선)
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "축 = 두 중심 수직이등분선 관점"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "중점·수직 조건 → a,b"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "반지름 불변 → c"}
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # +1 상향
  rationale: "step2 · CM2-GM-이동 정점 (SYM 역방향) · ★ 4"
  vendor_calibration_signal: {L2_signature_neighbors: [마-CM2-GM-이동-STEP3-역해석], L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-STEP3], L5_confidence: 0.85}

- id: 개념원리-CM2-GM-이동-연습-286
  page: 117
  vendor_label: "연습_실력up · 접힘·평행이동 조합"
  category_type: 연습_실력up
  sub_unit: 이동 종합
  summary: "도형 접힘 (대칭) + 평행이동 조합 · 조건 결정."
  category: 이동·대칭 종합
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "접힘 = 대칭 관점"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "평행이동 결합"}
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # +1 상향
  rationale: "실력UP · depth 3 · ★ 4"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-STEP3], L5_confidence: 0.80}

- id: 개념원리-CM2-GM-이동-연습-287
  page: 118
  vendor_label: "연습_실력up · 최단 결합"
  category_type: 연습_실력up
  sub_unit: 대칭·최단
  summary: "여러 조건 대칭 결합 · 최단 계산."
  category: 대칭 결합 최단
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "대칭 반복 관점"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "거리 계산"}
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # +1 상향
  rationale: "실력UP · ★ 4"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-STEP3], L5_confidence: 0.80}

- id: 개념원리-CM2-GM-이동-연습-288
  page: 118
  vendor_label: "연습_실력up · 두 변 대칭 (직사각형 절점)"
  category_type: 연습_실력up
  sub_unit: 대칭·최단
  summary: "직사각형 4 점 PXYQ 절점 최소."
  category: 두 변 대칭 (절점)
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "두 대칭점 P'·Q' → P'Q'"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "좌표 배치"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "거리 √"}
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # +1 상향
  rationale: "실력UP · 절점 최단 (SYM 축 2개) · ★ 4"
  vendor_calibration_signal: {L2_signature_neighbors: [쎈-C단계-사고력-두변대칭], L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-STEP3], L5_confidence: 0.85}

- id: 개념원리-CM2-GM-이동-유제-265
  page: 111
  vendor_label: "유제 · 원점 점 대칭 · 이동 결합"
  category_type: 유제
  sub_unit: 점·직선 대칭
  summary: "원점 대칭 후 평행이동 · 도형 방정식."
  category: 원점 대칭 + 평행이동 (조합)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "원점 대칭 (x,y)→(-x,-y) 관점"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "★ 2 조합"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.82}

- id: 개념원리-CM2-GM-이동-연습-289
  page: 118
  vendor_label: "연습_실력up · 도형 이동 종합"
  category_type: 연습_실력up
  sub_unit: 이동 종합
  summary: "복합 이동·대칭 조합 · 도형 조건."
  category: 이동 종합 (실력UP)
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "이동 순서 관점"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "조건 매칭"}
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # +1 상향
  rationale: "실력UP · ★ 4"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-STEP3], L5_confidence: 0.80}
```

---

## Ⅲ. CM2-ST (25문)

```yaml
- id: 개념원리-CM2-ST-집합-예제-01
  page: 123
  vendor_label: "대표예제 · 집합 정의"
  category_type: 대표예제
  sub_unit: 집합의 뜻
  summary: "5개 모임 중 집합인 것 (기준 명확성)."
  category: 집합 정의 (첫 도입)
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
  regression_hit: false
  rationale: "★ 1"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC], L5_confidence: 0.95}

- id: 개념원리-CM2-ST-집합-예제-04
  page: 125
  vendor_label: "대표예제 · 파생 집합 원소 산출"
  category_type: 대표예제
  sub_unit: 집합의 뜻
  summary: "A → B={x+y|x,y∈A} 등 파생 집합 나열."
  category: 파생 집합 나열 (표준)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-CON, depth: 2, effective_depth: 2, description: "원소 쌍 순회 · 중복 제거"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "★ 2 (연습307의 사전 훈련)"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.80}

- id: 개념원리-CM2-ST-집합-예제-06
  page: 126
  vendor_label: "대표예제 · n(A) 원소 개수"
  category_type: 대표예제
  sub_unit: 집합의 뜻
  summary: "n(A) 정의 · 유한/무한 판정."
  category: n(A) 정의 (첫 도입)
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
  regression_hit: false
  rationale: "★ 1"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC], L5_confidence: 0.95}

- id: 개념원리-CM2-ST-포함-예제-10
  page: 133
  vendor_label: "대표예제 · 특정원소 포함/미포함 부분집합 수"
  category_type: 대표예제
  sub_unit: 포함관계
  summary: "A={3,4,5,6,7}. 5 포함·3,6 미포함 부분집합 수 + 적어도 홀수 하나."
  category: 부분집합 수 (제약 + 여사건)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "2^(n-k-m) 공식 관점"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "적어도 = 전체 - 여사건"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "★ 3 정합 (두 통찰 조합)"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-●상, 마플-NORMAL], L5_confidence: 0.82}

- id: 개념원리-CM2-ST-포함-예제-11
  page: 134
  vendor_label: "대표예제 · A⊂X⊂B 집합 수"
  category_type: 대표예제
  sub_unit: 포함관계
  summary: "A⊂X⊂B 조건 만족 X 개수 (2^(n(B)-n(A)))."
  category: A⊂X⊂B 개수 공식
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "B-A 원소 자유 관점 · 2^차집합"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "표준 공식 · ★ 2"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.85}

- id: 개념원리-CM2-ST-연산-예제-04
  page: 148
  vendor_label: "대표예제 · 벤 이용 A 결정"
  category_type: 대표예제
  sub_unit: 집합 연산
  summary: "벤 도식·주어진 연산 결과 → A 결정."
  category: 벤 역산 A 결정
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "벤 4영역 관점 · 역산"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "표준 · ★ 2"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.80}

- id: 개념원리-CM2-ST-법칙-예제-09
  page: 158
  vendor_label: "대표예제 · 드모르간·분배 간단화"
  category_type: 대표예제
  sub_unit: 연산법칙
  summary: "드모르간·분배 활용 · 연산식 간단화."
  category: 연산 간단화 (드모르간)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "드모르간·분배 관점 변형"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "★ 2"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.80}

- id: 개념원리-CM2-ST-원소수-예제-13
  page: 168
  vendor_label: "발전 · 원소수 최대·최소"
  category_type: 대표예제
  category_meta: 발전
  sub_unit: 원소 개수
  summary: "n(A), n(B), n(A∩B) 조건 · n(A∪B) 최대·최소."
  category: 원소수 최대·최소 (관점)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "포함배제 원리 + 극단 값 관점"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "경우 이완"}
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # +1 상향
  rationale: "발전 · 극단값 관점 depth 3 · ★ 4 (v1 매몰)"
  vendor_calibration_signal: {L2_signature_neighbors: [쎈-CM2-ST-원소수-사고력-최적], L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-TOUGH], L5_confidence: 0.82}

- id: 개념원리-CM2-ST-절부-예제-19
  page: 199
  vendor_label: "대표예제 · f(x)+c/f(x) 유도 AM-GM"
  category_type: 대표예제
  sub_unit: 절대부등식
  summary: "x>1 · 4x+1/(x-1) 최솟값 · 4(x-1)+4 유도."
  category: AM-GM 유도 변형
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "4x = 4(x-1)+4 유도 관점"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "AM-GM · 등호 조건"}
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # +1 상향
  rationale: "CM2-ST 절대부등식 정점 원형 (RT) · ★ 4"
  vendor_calibration_signal: {L2_signature_neighbors: [쎈-CM2-ST-절부-사고력-유도], L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-TOUGH], L5_confidence: 0.85}

- id: 개념원리-CM2-ST-절부-예제-21
  page: 201
  vendor_label: "대표예제 · 코시-슈바르츠"
  category_type: 대표예제
  sub_unit: 절대부등식
  summary: "x²+y²=4·4x+3y 최대; 5x+12y=13·x²+y² 최소 (코시)."
  category: 코시-슈바르츠 부등식
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "코시 관점 매칭 (a²+b²)(x²+y²)≥(ax+by)²"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "직접 대입"}
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # +1 상향
  rationale: "코시 관점 depth 3 · ★ 4"
  vendor_calibration_signal: {L2_signature_neighbors: [쎈-CM2-ST-절부-코시], L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-TOUGH], L5_confidence: 0.85}

- id: 개념원리-CM2-ST-포함-유제-313
  page: 131
  vendor_label: "유제 · ∈·⊂ 기호 구별"
  category_type: 유제
  sub_unit: 포함관계
  summary: "벤에서 A⊂B 옳지 않은 것 (∈·⊂ 구별)."
  category: ∈·⊂ 기호 구별 (첫 도입)
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
  regression_hit: false
  rationale: "★ 1"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC], L5_confidence: 0.95}

- id: 개념원리-CM2-ST-포함-유제-319
  page: 133
  vendor_label: "유제 · 특정원소 포함 부분집합 수"
  category_type: 유제
  sub_unit: 포함관계
  summary: "예제10 반복 훈련 · 특정 원소 포함/미포함."
  category: 부분집합 수 훈련 유제
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "2^(n-k-m) 공식"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "★ 2 유제"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.85}

- id: 개념원리-CM2-ST-포함-유제-322
  page: 134
  vendor_label: "유제 · A⊂X⊂B 개수 역산"
  category_type: 유제
  sub_unit: 포함관계
  summary: "A⊂X⊂B 조건 · X 개수 주어짐 · 미지원소 개수 역산."
  category: A⊂X⊂B 역산
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "2^차집합 = 주어진 값 · 역산"}
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "★ 3 정합"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-●상, 마플-NORMAL], L5_confidence: 0.78}

- id: 개념원리-CM2-ST-연산-유제-345
  page: 149
  vendor_label: "유제 · 차집합·여집합 계산"
  category_type: 유제
  sub_unit: 집합 연산
  summary: "여·차 종합 · 유한 U에서 각 연산."
  category: 여·차 종합 (기본)
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
  regression_hit: false
  rationale: "★ 1 (연산 정의 반복)"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC], L5_confidence: 0.92}

- id: 개념원리-CM2-ST-연산-유제-355
  page: 152
  vendor_label: "유제 · 연산 조건·부분집합 수"
  category_type: 유제
  sub_unit: 집합 연산
  summary: "A∩X=∅, A∪X=U 조건 · X 개수."
  category: 연산 조건·부분집합 (표준)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "조건 → X 구조 결정"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "★ 2"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.82}

- id: 개념원리-CM2-ST-원소수-유제-377
  page: 165
  vendor_label: "유제 · 삼집합 포함배제"
  category_type: 유제
  sub_unit: 원소 개수
  summary: "n(A∪B∪C) 포함배제 공식 적용."
  category: 포함배제 (표준 공식)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-CON, depth: 2, effective_depth: 2, description: "포함배제 공식 대입"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "★ 2"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.82}

- id: 개념원리-CM2-ST-원소수-유제-385
  page: 167
  vendor_label: "유제 · 최대·최소 합"
  category_type: 유제
  sub_unit: 원소 개수
  summary: "유한집합 원소 개수 최대·최소 · 합."
  category: 원소수 최대·최소 (유제)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "극단값 · 포함배제 관점"}
  insight_count: 1
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "★ 3 정합"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-●상, 마플-TOUGH], L5_confidence: 0.78}

- id: 개념원리-CM2-ST-명제-유제-407
  page: 175
  vendor_label: "유제 · 조건 부정 (드모르간)"
  category_type: 유제
  sub_unit: 명제
  summary: "조건 부정 (드모르간·양화)."
  category: 부정 (드모르간)
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
  regression_hit: false
  rationale: "★ 1"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC], L5_confidence: 0.92}

- id: 개념원리-CM2-ST-역대우-유제-434
  page: 182
  vendor_label: "유제 · 역·대우 참거짓"
  category_type: 유제
  sub_unit: 역·대우
  summary: "5명제 중 역·대우 참거짓."
  category: 역·대우 판정 (표준)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "역 = q→p 정의 반복"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "★ 2"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.85}

- id: 개념원리-CM2-ST-집합-연습-307
  page: 126
  vendor_label: "연습 · 합집합 조건 역산 (오름차순 대응)"
  category_type: 연습
  sub_unit: 집합의 뜻
  summary: "A={a,b,c}·B={x+y|x,y∈A, x≠y}={6,9,11}·최대 원소."
  category: 오름차순 대응·3원 연립 역산
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "a+b=6, a+c=9, b+c=11 오름차순 대응"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "3원 연립"}
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # +1 상향
  rationale: "CM2-ST 집합 정점 (BW·역산 depth 3) · ★ 4"
  vendor_calibration_signal: {L2_signature_neighbors: [쎈-CM2-ST-집합-사고력-역산], L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-TOUGH], L5_confidence: 0.80}

- id: 개념원리-CM2-ST-포함-연습-333
  page: 141
  vendor_label: "연습 · 이차부등식 해집합·A⊂X⊂B"
  category_type: 연습
  sub_unit: 포함관계
  summary: "이차부등식 해집합 A, B · A⊂X⊂B 개수."
  category: 이차부등식 해집합 + A⊂X⊂B
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "이차부등식 해집합 관점"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "2^차집합"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "★ 3 정합"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-●상, 마플-NORMAL], L5_confidence: 0.78}

- id: 개념원리-CM2-ST-연산-연습-367
  page: 154
  vendor_label: "연습 · 방정식 해집합·B⊂A"
  category_type: 연습
  sub_unit: 집합 연산
  summary: "방정식 해집합 · 포함관계 조건."
  category: 방정식 해집합·포함
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "방정식 해 = 원소 · 포함 조건"}
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "★ 3 정합"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-●상, 마플-NORMAL], L5_confidence: 0.75}

- id: 개념원리-CM2-ST-원소수-연습-402
  page: 172
  vendor_label: "연습 · 유한집합 최대·최소·합"
  category_type: 연습
  sub_unit: 원소 개수
  summary: "설문 조건 · 원소수 최대·최소 합."
  category: 유한집합 최적화 (극단값)
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "극단값 배치 관점 (합·차)"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "포함배제 · 케이스"}
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # +1 상향
  rationale: "연습 · 극단값 depth 3 · ★ 4 (v1 매몰)"
  vendor_calibration_signal: {L2_signature_neighbors: [쎈-CM2-ST-원소수-사고력-최적], L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-TOUGH], L5_confidence: 0.80}

- id: 개념원리-CM2-ST-양화-연습-431
  page: 179
  vendor_label: "연습 · 어떤 x 존재 조건 · 구간 최댓값"
  category_type: 연습
  sub_unit: 양화명제·전칭·존재
  summary: "2≤x≤5·어떤 x·x²-8x+n≥0 참·n 최소."
  category: 존재 조건 · 구간 최댓값
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "어떤 x ⇔ 구간 최댓값 ≥ 0 관점"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "이차 최댓값 계산"}
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # +1 상향
  rationale: "저노출 유형 (양화·구간) · ★ 4"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-TOUGH], L5_confidence: 0.82}

- id: 개념원리-CM2-ST-양화-연습-433
  page: 179
  vendor_label: "연습 · 존재·전칭·포함관계 변환"
  category_type: 연습
  sub_unit: 양화명제
  summary: "어떤/모든 명제 → 포함관계 · 함의 판별."
  category: 양화 ⇔ 포함관계 변환
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "양화 → 포함관계 · 서로소 관점"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "함의 · 대우 판별"}
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # +1 상향
  rationale: "CM2-ST 정점 (PD·MI 결합) · ★ 4"
  vendor_calibration_signal: {L2_signature_neighbors: [쎈-CM2-ST-양화-사고력-변환], L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-STEP3], L5_confidence: 0.80}
```

---

## Ⅳ. CM2-FN (25문)

```yaml
- id: 개념원리-CM2-FN-함수-예제-01
  page: 210
  vendor_label: "대표예제 · 함수 판정"
  category_type: 대표예제
  sub_unit: 함수
  summary: "X→Y 함수 판정 (일대응)."
  category: 함수 정의 (첫 도입)
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
  regression_hit: false
  rationale: "★ 1"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC], L5_confidence: 0.95}

- id: 개념원리-CM2-FN-함수-예제-02
  page: 211
  vendor_label: "대표예제 · 분기 함수 함숫값"
  category_type: 대표예제
  sub_unit: 함수
  summary: "분기 정의 함수 · 여러 값 대입."
  category: 분기 함수 (기본)
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
  regression_hit: false
  rationale: "★ 1"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC], L5_confidence: 0.92}

- id: 개념원리-CM2-FN-함수-예제-04
  page: 213
  vendor_label: "대표예제 · 서로 같은 함수"
  category_type: 대표예제
  sub_unit: 함수
  summary: "정의역·대응규칙 일치 확인."
  category: 서로 같은 함수 (정의)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "각 원소별 f=g 관점"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "★ 2"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.85}

- id: 개념원리-CM2-FN-여러-예제-07
  page: 220
  vendor_label: "대표예제 · 일대일대응 · 두 점 계수"
  category_type: 대표예제
  sub_unit: 여러 가지 함수
  summary: "일대일대응 f(a)·f(b) 조건 · 계수 결정."
  category: 일대일대응 · 계수 결정
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "일대일대응 정의 (증가·감소)"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "두 조건 대입"}
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "★ 3 정합"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.82}

- id: 개념원리-CM2-FN-합성-예제-10
  page: 226
  vendor_label: "대표예제 · 교환 f∘g=g∘f"
  category_type: 대표예제
  sub_unit: 합성함수
  summary: "f∘g=g∘f 조건 · 계수 결정."
  category: 합성 교환 조건
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-CON, depth: 2, effective_depth: 2, description: "양변 전개 계수 매칭"}
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "★ 3 정합"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.80}

- id: 개념원리-CM2-FN-합성-예제-11
  page: 227
  vendor_label: "대표예제 · 미지 h · 3유형"
  category_type: 대표예제
  sub_unit: 합성함수
  summary: "f∘h=g 또는 h∘f=g 등 · h 결정."
  category: 합성 미지 h 결정
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "h = f⁻¹∘g or g∘f⁻¹ 관점"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "합성 전개"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "★ 3 정합"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-●상, 마플-NORMAL], L5_confidence: 0.78}

- id: 개념원리-CM2-FN-역함수-예제-19
  page: 239
  vendor_label: "대표예제 · 역함수·y=x 교점 (선형)"
  category_type: 대표예제
  sub_unit: 역함수
  summary: "일차 f · y=f·y=f⁻¹ 교점 y=x 위."
  category: 역함수 y=x 교점 (일차)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "y=x 위 교점 관점"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "★ 2 (일차 · 유제585와 대비)"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.82}

- id: 개념원리-CM2-FN-함수-유제-482
  page: 210
  vendor_label: "유제 · 대응 그림 · 함수 판정"
  category_type: 유제
  sub_unit: 함수
  summary: "대응 그림 함수 여부 · 치역."
  category: 함수 판정 유제 (기본)
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
  regression_hit: false
  rationale: "★ 1"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC], L5_confidence: 0.92}

- id: 개념원리-CM2-FN-함수-유제-490
  page: 213
  vendor_label: "유제 · 서로 같은 함수 (홀함수)"
  category_type: 유제
  sub_unit: 함수
  summary: "홀함수 성질 활용 f=g."
  category: 홀함수 서로 같은 함수
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "홀함수 f(-x)=-f(x) 관점"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "★ 2"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.80}

- id: 개념원리-CM2-FN-여러-유제-507
  page: 221
  vendor_label: "유제 · 감소 일대일대응 계수·정의역"
  category_type: 유제
  sub_unit: 여러 가지 함수
  summary: "감소 일대일대응 · 계수·정의역 조건."
  category: 감소 일대일대응 (표준)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "감소 조건 · 양 끝점 대응"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "★ 2"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.80}

- id: 개념원리-CM2-FN-합성-유제-529
  page: 226
  vendor_label: "유제 · 일대일대응·조건 논리"
  category_type: 유제
  sub_unit: 합성함수
  summary: "합성 후 일대일대응 · 논리."
  category: 합성·논리 (표준)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "합성·일대일 관점"}
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "★ 3 정합"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-●상, 마플-NORMAL], L5_confidence: 0.75}

- id: 개념원리-CM2-FN-합성-유제-537
  page: 230
  vendor_label: "유제 · 유한집합 순환 반복"
  category_type: 유제
  sub_unit: 합성함수
  summary: "X={1,3,5,7}·순환·f¹⁰⁰(1)+f¹⁰¹(3)."
  category: 반복 합성 · 주기 mod
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "주기 관찰 · 인덱스 mod"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "★ 2"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.85}

- id: 개념원리-CM2-FN-역함수-유제-554
  page: 236
  vendor_label: "유제 · 역함수 성질 기본"
  category_type: 유제
  sub_unit: 역함수
  summary: "f⁻¹(a)=b ⇔ f(b)=a."
  category: 역함수 정의 (기본)
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
  regression_hit: false
  rationale: "★ 1"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-A단계, 마플-BASIC], L5_confidence: 0.92}

- id: 개념원리-CM2-FN-역함수-유제-565
  page: 241
  vendor_label: "유제 · 4중 합성·역함수 상쇄"
  category_type: 유제
  sub_unit: 역함수
  summary: "f, f⁻¹ 4중 합성 · 상쇄 · 값."
  category: 역함수 상쇄 (표준)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "f∘f⁻¹=id 관점"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "★ 2"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.85}

- id: 개념원리-CM2-FN-역함수-유제-568
  page: 243
  vendor_label: "유제 · 절댓값·역함수 성질"
  category_type: 유제
  sub_unit: 역함수
  summary: "f=-x|x|+3 · (g⁻¹∘f)⁻¹=f⁻¹∘g."
  category: 절댓값 · 역함수 성질 (통찰)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "역함수 성질 (합성 순서)"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "부호 분리 · 이차 근"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "★ 3 정합"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-●상, 마플-TOUGH], L5_confidence: 0.75}

- id: 개념원리-CM2-FN-역함수-유제-570
  page: 243
  vendor_label: "유제 · 이차·f=f⁻¹ 교점 거리"
  category_type: 유제
  sub_unit: 역함수
  summary: "f(x)=(1/2)(x-2)²+2 (x≥2) · f=f⁻¹ 교점 거리."
  category: 이차 자기역함수 교점 (표준)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "f=f⁻¹ 교점 ⇔ f(x)=x 관점"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "★ 2 (실력585와 대비)"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.80}

- id: 개념원리-CM2-FN-함수-연습-500
  page: 214
  vendor_label: "연습 · 분기 함수 · f(a)=k 해"
  category_type: 연습
  sub_unit: 함수
  summary: "분기 함수 · 방정식 해 개수."
  category: 분기 · 방정식 해 (기본)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "구간별 해 관점"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "★ 2"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.82}

- id: 개념원리-CM2-FN-여러-연습-521
  page: 224
  vendor_label: "연습 · 증가함수 개수 · 고정값"
  category_type: 연습
  sub_unit: 여러 가지 함수
  summary: "증가함수 개수 · 고정값 조건."
  category: 증가함수 카운트
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "증가함수 = 순서 매핑 관점"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "케이스 조합"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "★ 3 정합"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-●상, 마플-TOUGH], L5_confidence: 0.75}

- id: 개념원리-CM2-FN-합성-연습-540
  page: 232
  vendor_label: "연습 · 합성 항등 · 조건 결합"
  category_type: 연습
  sub_unit: 합성함수
  summary: "g∘f=항등 · a+b 결정."
  category: 합성 항등·조건 (중근)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "g∘f=항등 · f→g 대응"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "중근 조건 판별식"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "★ 3 정합"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-●상, 마플-NORMAL], L5_confidence: 0.78}

- id: 개념원리-CM2-FN-합성-연습-541
  page: 232
  vendor_label: "연습 · 일차 자기합성 두 해"
  category_type: 연습
  sub_unit: 합성함수
  summary: "일차 f · f∘f=9x-4 · f 모두 (a²=9 두 해)."
  category: 자기합성 · 두 해
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-CON, depth: 2, effective_depth: 2, description: "계수 매칭 · 두 근"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  v1_tier: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "★ 2"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-대표, 마플-NORMAL], L5_confidence: 0.85}

- id: 개념원리-CM2-FN-합성-실력-550
  page: 235
  vendor_label: "실력UP · 자기합성 그래프 (텐트맵)"
  category_type: 연습_실력up
  sub_unit: 합성함수
  summary: "두 식으로 정의된 함수 자기합성 · 그래프 · 방정식 해."
  category: 텐트맵 자기합성
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "텐트맵 자기합성 그래프 관점"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "각 식 방정식"}
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # +1 상향
  rationale: "실력UP · 텐트맵 depth 3 · ★ 4"
  vendor_calibration_signal: {L2_signature_neighbors: [쎈-CM2-FN-합성-사고력-텐트], L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-STEP3], L5_confidence: 0.82}

- id: 개념원리-CM2-FN-역함수-연습-582
  page: 245
  vendor_label: "연습 · 자기역함수 교점·판별식"
  category_type: 연습
  sub_unit: 역함수
  summary: "이차 f · 자기역함수 교점 개수 · 판별식."
  category: 자기역함수 교점 개수 (판별식)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "y=x 위 교점 · f(x)=x"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "판별식 · 개수 조건"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  v1_tier: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "★ 3 정합"
  vendor_calibration_signal: {L3_multi_vendor_tier: [쎈-B단계-●상, 마플-NORMAL], L5_confidence: 0.78}

- id: 개념원리-CM2-FN-역함수-실력-583
  page: 246
  vendor_label: "실력UP · 합성 · 역함수 표현 계수"
  category_type: 연습_실력up
  sub_unit: 역함수
  summary: "f(3x+1)의 역함수 = a·g(x)+b (g=f⁻¹) · ab."
  category: 합성 역함수 성질 (XU)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "(f∘h)⁻¹=h⁻¹∘f⁻¹ 순서 관점"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "h⁻¹∘g 계산 · 계수"}
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # +1 상향
  rationale: "CM2-FN 정점 (XU · 합성역) · ★ 4"
  vendor_calibration_signal: {L2_signature_neighbors: [쎈-CM2-FN-역-사고력-XU], L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-STEP3], L5_confidence: 0.85}

- id: 개념원리-CM2-FN-역함수-실력-585
  page: 246
  vendor_label: "실력UP · 이차 자기역·거리 √2"
  category_type: 연습_실력up
  sub_unit: 역함수
  summary: "f=x²-4x+a (x≥2) · y=f∩y=f⁻¹ 두 교점 거리 √2 · a."
  category: 자기역함수 · 근·계수 · 거리
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "y=x 위 교점 · 자기역"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "거리²=2(α-β)² · 근계수"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "이차 계수"}
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # +1 상향
  rationale: "CM2-FN 정점 (SC · 자기역) · ★ 4"
  vendor_calibration_signal: {L2_signature_neighbors: [쎈-CM2-FN-역-사고력-거리], L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-STEP3], L5_confidence: 0.85}

- id: 개념원리-CM2-FN-역함수-실력-586
  page: 246
  vendor_label: "실력UP · 부분별 자기역함수·마름모 넓이"
  category_type: 연습_실력up
  sub_unit: 역함수
  summary: "부분별 f · y=f∩y=f⁻¹ 둘러싼 도형 넓이 (마름모)."
  category: 부분별 자기역함수 · 마름모 넓이
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "y=x 위·밖 두 교점 관점 (자기역)"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "대각선 수직 이등분 → 마름모"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "d1·d2/2"}
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  v1_tier: star_3
  v2_tier: star_4
  regression_hit: false  # +1 상향
  rationale: "CM2-FN 자기역 정점 · ★ 4"
  vendor_calibration_signal: {L2_signature_neighbors: [쎈-CM2-FN-역-사고력-마름모], L3_multi_vendor_tier: [쎈-C단계-사고력, 마플-STEP3], L5_confidence: 0.85}
```

---

## Ⅴ. 표본 판정 요약 (100문)

### ★ 분포

| ★ | 원 | 이동 | ST | FN | 합계 | 비율 |
|---|---:|---:|---:|---:|---:|---:|
| ★ 1 | 4 | 4 | 5 | 4 | **17** | 17% |
| ★ 2 | 8 | 7 | 8 | 9 | **32** | 32% |
| ★ 3 | 7 | 8 | 5 | 8 | **28** | 28% |
| ★ 4 | 6 | 6 | 7 | 4 | **23** | 23% |
| ★ 5 | 0 | 0 | 0 | 0 | **0** | 0% |
| premium | 0 | 0 | 0 | 0 | **0** | 0% |
| **파일별 합계** | 25 | 25 | 25 | 25 | **100** | — |

**핵심 관찰**:
- 원·이동·ST·FN 4파일 100문 표본에서 ★ 5·premium **0건** 재확인 → v1.12 개념원리 회귀 재검증 (개념원리 = 정리편·유형편 원본 · 시험지 정점 원본 부적합)
- ★ 1·2 합계 **47%** (거의 절반) → v1 star_3 단일 라벨의 **관대 편향 규모**를 표본 확대에서도 재확인
- ★ 3·4 합계 **53%** → 개념원리 원본 pool로서 정리편·유형편·연습편의 **정확한 원본 은행 가치**는 확고

---

## Ⅵ. 파일별 v1 → v2 tier 재분류 요약 (25문 표본 확대)

### 파일별 정합률 재산정

| 파일 | 표본 | v1=v2 정합 | -2 하향 | -1 하향 | +1 상향 | 정합률 | 40문판 정합률 | 개선 |
|---|---:|---:|---:|---:|---:|---:|---:|---|
| CM2-GM-원 | 25 | 7 | 4 | 8 | 6 | **28%** | 30% | -2%p |
| CM2-GM-이동 | 25 | 8 | 4 | 7 | 6 | **32%** | 20% | +12%p |
| CM2-ST | 25 | 5 | 5 | 8 | 7 | **20%** | 20% | 동일 |
| CM2-FN | 25 | 8 | 4 | 9 | 4 | **32%** | 20% | +12%p |
| **합계** | **100** | **28** | **17** | **32** | **23** | **28%** | 22.5% | **+5.5%p** |

**핵심 관찰**:
- 표본 확대 (40문 → 100문) 결과 **통합 정합률 22.5% → 28%로 상승** (+5.5%p)
- 특히 **CM2-GM-이동·CM2-FN 각 +12%p 개선** (40문 표본이 정점 (실력UP)에 편중 → 25문 확대에서 유제 표준 star_2~3 다수 발굴)
- **CM2-ST는 20% 유지** — 절대부등식·양화명제 정점 통찰이 표본 확대에서도 매몰 지속 (star_3 → star_4 매몰 문항 7건 재발견)
- **CM2-GM-원은 -2%p 하락** — 25문 확대에서 대표예제·유제 첫 도입 (★ 1)·표준 (★ 2)이 대량 편입되어 정합 문항 비율 상대적 하락

### star_3 관대 편향 정정 건수 (100문 통합)

| 정정 유형 | 건수 | 비율 |
|---|---:|---:|
| -2단계 하향 (star_3 → ★ 1) | **17건** | 17% |
| -1단계 하향 (star_3 → ★ 2) | **32건** | 32% |
| 정합 (star_3 유지) | **28건** | 28% |
| +1단계 상향 (star_3 → ★ 4) | **23건** | 23% |

- **관대 편향 정정 (하향)**: **49건 / 100건 = 49%** (표본 확대에서도 40문판 45%와 유사 · 관대 편향 규모 안정 확인)
- **매몰 정정 (상향)**: **23건 / 100건 = 23%** (40문판 33% 대비 -10%p 감소 · 25문 확대에서 유제·기본형 표준화 반영 · 정점 문항 비율 자연 하락)

---

## Ⅶ. 파일별 신뢰도 재산정 (C → B?)

### 100문 표본 기반 등급

| 파일 | 40문판 등급 | 100문판 등급 | 정합률 | 근거 |
|---|---|---|---:|---|
| **CM2-GM-원** | C → B- | **C+** 조정 | 28% | 25문 확대에서 대표예제·유제 첫 도입 (★ 1)·표준 (★ 2) 대량 편입 · 정합 재현이 오히려 소폭 하락 · B- 승격 유예 |
| **CM2-GM-이동** | C | **B-** 상향 | 32% | 25문 확대로 유제 표준 (★ 2~3) 다수 발굴 · SYM 정점 (연습282·285·288) 안정 재현 |
| **CM2-ST** | C | **C** 유지 | 20% | 절대부등식·양화·집합 정점 매몰 지속 · 표본 확대에서도 개선 없음 · v1.13 별도 예외 함수 필수 |
| **CM2-FN** | C | **B-** 상향 | 32% | 25문 확대로 유제·연습 표준 유형 정합 다수 · 자기역함수·합성역함수 정점 매몰은 지속 |

**신뢰도 종합**:
- 4파일 중 **2파일 (CM2-GM-이동·CM2-FN)이 B-급 상향**, **CM2-GM-원 C+ 조정**, **CM2-ST C 유지** — 세션 63 flywheel의 표본 확대 결과 부분적 개선
- **CM2-ST는 C급 유지** — 절대부등식·양화명제 정점 밀도가 높아 star_3 → star_4 매몰이 구조적 · vendor-label v1.13에서 **CM2-ST 별도 회귀 함수 필수** (예제 21 코시 · 예제 19 AM-GM · 연습 431·433 양화 · 연습 402 극단값 → 자동 star_4 승격)
- **v1.12 회귀 (B급, 정합률 45~50%)** 대비 4파일 통합 28%로 여전히 **-17~22%p 낮음** — 개념원리 CM2 C급 4파일은 **v1.12 매트릭스에서 별도 등재 유지**하되 등급을 **C → C+/B-** 로 소폭 상향 (파일별 세분)

---

## Ⅷ. 소단원별 예외 회귀 함수 초안 (v1.13 편입 대상)

세션 63 확대 표본 100문에서 도출된 개념원리 CM2 C급 4파일 예외 회귀 함수. **vendor-label-calibration.md v1.13** 편입 초안.

```python
def 개념원리_CM2_C급_star_predict_v113(label, category_meta, sub_unit, filename):
    """
    v1.12 개념원리 CM2 (B급, 45~50% 정합) 회귀 위에 오버라이드
    적용: filename ∈ {GM-원, GM-이동, ST, FN}
    """
    if filename not in ["CM2-GM-원", "CM2-GM-이동", "CM2-ST", "CM2-FN"]:
        return None  # v1.12 개념원리 회귀로 폴백
    
    # 대표예제
    if "대표예제" in label:
        if "발전" in category_meta or "아폴로니오스" in category_meta:
            return {"star": 4, "confidence": 0.82, "alt": [3]}
        if "AM-GM" in sub_unit or "코시" in sub_unit or "절부" in sub_unit:  # CM2-ST 절대부등식 예외
            return {"star": 4, "confidence": 0.85, "alt": [3]}
        if sub_unit in ["원의 방정식 (기본)", "함수", "집합의 뜻"]:  # 첫 도입
            return {"star": 1, "confidence": 0.92}
        return {"star": 2, "confidence": 0.75, "alt": [1, 3]}  # 후반부 예제 (완전제곱·역산)
    
    # 유제
    if "유제" in label:
        if "첫 도입" in category_meta or sub_unit in ["함수", "집합의 뜻", "역함수"]:
            if any(k in label for k in ["표준형 판독", "정의 판단", "성질 기본"]):
                return {"star": 1, "confidence": 0.90}
        if "다조건" in category_meta or "근·계수" in category_meta or "자취" in category_meta:
            return {"star": 3, "confidence": 0.78}
        return {"star": 2, "confidence": 0.78, "alt": [1, 3]}
    
    # 연습 step1 (기본)
    if "연습_step1" in label:
        return {"star": 2, "confidence": 0.75, "alt": [3]}
    
    # 연습 step2·실력up (정점)
    if "연습_step2" in label or "연습_실력up" in label:
        # 정점 원형 검출 시 자동 star_4 승격
        signals = ["두 번 대칭", "두 변 대칭", "접힘", "자취", "P=2M-A", "자기역", "합성역", "XU",
                   "AM-GM 유도", "코시", "양화", "존재 조건", "역산 오름차순", "극단값", "포함배제 최대·최소",
                   "텐트맵", "마름모 넓이", "역해석"]
        if any(sig in category_meta or sig in label for sig in signals):
            return {"star": 4, "confidence": 0.85, "alt": [3]}
        return {"star": 3, "confidence": 0.72, "alt": [4]}
    
    return {"star": 3, "confidence": 0.50, "note": "수동 검증 필요"}
```

**소단원별 정점 원형 하위 매핑**:

| 소단원 | 정점 시그니처 (자동 ★ 4 승격) | 100문 표본 근거 |
|---|---|---|
| CM2-GM-원 (자취·이동) | 아폴로니오스·중점 자취·접힘·중심 대칭 | 예제10·유제171·연습183·연습228 |
| CM2-GM-이동 (SYM) | 두 번 대칭·두 변 대칭·역해석 축·절점 | 연습282·285·288 |
| CM2-ST (PD·MI·RT) | AM-GM 유도·코시·양화 존재조건·역산·극단값 | 예제19·21·연습431·433·307·402·예제13 발전 |
| CM2-FN (XU·SC·RT) | 합성역함수·자기역함수 (y=x·마름모)·텐트맵 | 실력583·585·586·실력550 |

---

## Ⅸ. CM2 소단원별 정점 원형 매트릭스 8/8 재검증

세션 61·62 매트릭스 · 100문 확대 표본에서 원형 재확인.

| 소단원 | 세션 61·62 정점 원형 | 100문 표본 확인 | 정합 |
|---|---|---|---|
| CM2-GM-평면좌표 | I-SYM·I-BW (대칭·좌표변환) | (본 표본 미포함 · 별도 파일) | (기존 유지) |
| CM2-GM-직선 | I-EQV·I-CON (직선 조건) | (본 표본 미포함) | (기존 유지) |
| **CM2-GM-원** | **I-RT·I-EQV (자취·아폴로니오스)** | 예제10·유제171·연습183·228 depth 3 재현 | ✅ |
| **CM2-GM-이동** | **I-SYM·I-RT (두 번 대칭·역해석 축)** | 연습282·285·288 depth 3 재현 | ✅ |
| CM2-ST-집합 | I-RT·I-BW (역산·극단값) | 연습307 오름차순 대응 + 연습402 극단값 · 예제13 발전 | ✅ |
| CM2-ST-명제 | I-MI·I-PD (양화·포함) | 연습433 양화↔포함 | ✅ |
| **CM2-ST-절부** | **I-RT (AM-GM 유도·코시)** | 예제19·21 depth 3 재현 | ✅ |
| **CM2-FN** | **I-XU·I-SC·I-RT (합성역·자기역·y=x)** | 실력583·585·586·550 재현 | ✅ |

**본 표본 관련 소단원 6/6 완전 정합**. 세션 61 매트릭스 + 세션 62 갱신 재확인.

---

## Ⅹ. 특이사항 · vendor label 정정 신호

### 1. 외국 수학자 이름 회피 (재확인)

- **아폴로니오스** (원 예제10·유제170·171): 발문·풀이 자연어 대체 필수 (`foreign-named-formula` 정책)
- **코시-슈바르츠** (ST 예제21): CM2 §집합과 명제 절대부등식 정규 교과 · 답지 인용 허용 · 발문 자연어 서술
- **Fagnano** (이동 연습285 근접): 발문 명시 회피

### 2. vendor label 정정 신호 (100문 통합)

- **관대 편향 정정 (하향 46건)**:
  - 대표예제·유제 첫 도입 문항 (★ 1): **17건** — 원·이동·ST·FN 각 3~6건
  - 유제·연습 표준 유형 (★ 2): **29건** — FN·ST 중심
- **매몰 정정 (상향 24건)**:
  - 실력UP·연습_step2·발전 통찰형: **24건** — RT·SYM·XU·SC 정점

### 3. 자기복제 위험 감지 (표본 내)

- 원 연습183 (중점 자취) ↔ 마-CM2-GM-원 학평 자취 · 시그니처 0.65
- 이동 연습282·285·288 ↔ 쎈·마플 사고력 최단·역해석 · 시그니처 0.55~0.70
- ST 연습307 (합집합 역산) ↔ 쎈-CM2-ST-집합 사고력 · 시그니처 0.60
- ST 예제19·21 (AM-GM 유도·코시) ↔ 쎈·마플 절부 사고력 · 시그니처 0.62
- FN 실력585·583·586 ↔ 쎈·마플 역함수 사고력 · 시그니처 0.55~0.70

**pick 시 대체 시그니처 필수**: 창작 슬롯에 그대로 pick 금지 · 반드시 숫자·구조 변형 필수.

### 4. star-classify.mjs v1.8 → v1.9 확장 트리거

세션 63 100문 확대 근거로:
- **개념원리 CM2 C급 4파일**은 vendor-label-calibration.md v1.12 개념원리 회귀 (B급, 45~50%)와 **다른 프로필** (정합률 30%로 -15~20%p 낮음)
- v1.9에서 `if vendor == "개념원리" && filename matches /GM-원|GM-이동|ST|FN\.md/ && v1_tier == "star_3": trigger 개념원리_CM2_C급_star_predict_v113()` 등재

### 5. 정리편·유형편·연습편 원본 pick 적합성 (100문 확대 재평가)

| 파일 | 정리편·유형편 pick | 연습편 pick | 시험지 pick | 종합 |
|---|---|---|---|---|
| **CM2-GM-원** | ★★★★ 우수 (대표예제 후반·유제 발전 계열 star_2~3 밀집) | ★★★★ 우수 (step2·실력UP star_4 6문) | ★ 부적합 | 정리편·유형편 주력 |
| **CM2-GM-이동** | ★★★★ 우수 (대표예제·유제 star_2~3 균형) | ★★★★★ 최상 (step2·실력UP star_4 7문 · SYM 정점 밀도 최고) | ★ 부적합 | 정리편·연습편 강력 |
| **CM2-ST** | ★★★★ 우수 (대표예제·유제 star_1~3 밀집) | ★★★★★ 최상 (절부·양화·집합 star_4 6문) | ★★ 부분 | 절대부등식·양화 최상 |
| **CM2-FN** | ★★★★ 우수 (대표예제·유제 star_1~3 밀집) | ★★★★ 우수 (실력UP·연습 star_4 5문) | ★ 부적합 | 정리편 강력 |

**핵심 관찰**: 4파일 모두 **정리편·유형편·연습편 원본 pool로 우수** (v1.11 판정 재확인). 100문 확대로 특히 CM2-GM-이동·CM2-ST-절부의 star_4 밀도가 시판 최상급 (블랙라벨 STEP 2, 마플 TOUGH)에 준할 만큼 확인.

---

## Ⅺ. 참조

- 세션 61·62 CM2 정점 원형 매트릭스: [`bank/vendor-label-calibration-v1.12.md`](vendor-label-calibration-v1.12.md)
- 40문판 v2: [`bank/mechanism-데이터-개념원리-CM2-C급-4파일-v2.md`](mechanism-데이터-개념원리-CM2-C급-4파일-v2.md)
- 개념원리 CM2 v2 (25문 표본): [`bank/mechanism-데이터-개념원리-CM2-v2.md`](mechanism-데이터-개념원리-CM2-v2.md)
- 정독 스키마 v2.0: [`bank/정독-스키마-v2.0.md`](정독-스키마-v2.0.md)
- premium 원형 카탈로그 v1.2: [`bank/premium-원형-카탈로그-v1.2.md`](premium-원형-카탈로그-v1.2.md)
- v1 원본: `bank/mechanism-데이터-개념원리-CM2-{GM-원,GM-이동,ST,FN}.md`
- v1 백업: `*.md.bak-v1`

---

## 변경 이력

- 2026-07-21 v2.0 — 초판. CM2 C급 4파일 (원·이동·ST·FN) 각 **25문 = 100문** 층화 확대 표본 재판정. 40문판 (22.5% 정합) 대비 **정합률 28% (+5.5%p) 개선**. ★ 1 17건 + ★ 2 32건 + ★ 3 28건 + ★ 4 23건 실측 · ★ 5·premium 0건 재확인. 파일별 신뢰도 **CM2-GM-이동·CM2-FN 2파일 B-급 상향** · CM2-GM-원 C+ 조정 · CM2-ST C급 유지 (구조적 매몰). v1.13 편입 초안 (개념원리_CM2_C급_star_predict_v113 · 소단원별 정점 원형 signal 매칭). CM2 소단원 정점 원형 매트릭스 6/6 재검증 (본 표본 범위).
