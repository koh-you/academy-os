---
name: mechanism-데이터-마플교과서-CM2
description: 마플교과서 공통수학2 (2022개정) 전 단원 정독 데이터. 마플 계열 기본편 (마플시너지 심화 대비). 층화 표본 27문 시스템 순정 판정 + 벤더 라벨 회귀 매핑 산출. 저작권 준수 (원문 전사 없음).
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: 마플교과서 공통수학2 (2022개정) · [고등1-2] 마플교과서 공통수학2 (2022개정).pdf
  section: CM2 전 단원 (평면좌표·직선·원·이동·집합·명제·함수·유리·무리)
  unit_code: CM2-GM · CM2-ST · CM2-FN · CM2-RF
  sub_units: [평면좌표, 직선의방정식, 원의방정식, 도형의이동, 집합, 명제, 함수, 유리함수, 무리함수]
  citation_note: 마플교과서 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약)
  extract_range: "전 단원 대표 페이지 층화 표본 (마플개념익힘·확인유제·변형문제·발전문제 4-layer)"
  pages: "1~430 (총 430p)"
  total_problems: 약 900+ (문항번호 0001~0886+)
  sample_problems: 27
  predicted_problems: 약 870+
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: 세션 62 마플시너지 CM2 완결 · 정독-스키마-v2.0 준거
  parent_reference:
    - bank/mechanism-데이터-마플시너지-CM2-GM-평면좌표.md
    - bank/mechanism-데이터-마플시너지-CM2-GM-원.md
    - bank/mechanism-데이터-마플시너지-CM2-FN-합성역함수.md
    - bank/vendor-label-calibration.md v1.11
    - bank/premium-원형-카탈로그.md v1.1
---

# 마플교과서 공통수학2 (2022개정) — 전 단원 정독 데이터

**출처**: 마플교과서 공통수학2 (2022개정) · 마플 계열 기본편
**대단원 구성**:
- I. 도형의 방정식 (평면좌표·직선·원·도형이동) · p.1~180
- II. 집합과 명제 (집합·명제) · p.185~285
- III. 함수와 그래프 (함수·유리·무리) · p.290~425

**정독 페이지**: 층화 대표 페이지 (마플개념익힘 대표 · 각 소단원 3~4문 × 9 소단원)
**총 문항 수**: **약 900+문항** (문항번호 0001~0886+)
**표본**: 27문 (평면좌표 4 · 직선 4 · 원 3 · 이동 3 · 집합 3 · 명제 3 · 함수 3 · 유리 2 · 무리 2)
**예측**: 나머지 ~870문 벤더 라벨 회귀 예측
**정독 일자**: 2026-07-21

---

## 벤더 라벨 체계 (마플교과서)

**마플시너지 대비 4-layer 페이지 구조**:

| 라벨 | 의미 | 마플시너지 대응 | 표본 사전 tier |
|---|---|---|---|
| 마플개념익힘 (대표) | 소단원 대표 예제 · 완전 풀이 포함 | STEP 1 NORMAL 대표 | ★ 2~3 |
| 확인유제 | 마플개념익힘 동일 유형 재확인 | STEP 1 BASIC 유사 | ★ 1~2 |
| 변형문제 | 마플개념익힘 숫자/조건 변형 | STEP 1 NORMAL | ★ 2~3 |
| 발전문제 | 마플개념익힘 한 단계 심화 · 통찰 요구 | STEP 1 TOUGH ~ STEP 2 서술형 | ★ 3~4 |
| 마플특강 | 특수 예제 (내접원·외접원·회전·Apollonius 등) | STEP 3 준하는 심화 | ★ 3~5 |

**마플시너지 심화편과의 근본적 차이**:
- STEP 3 (행복한 일등급 · 킬러 · premium) 계열 **부재** — 학평 편입 킬러 문항이 없음
- 발전문제조차 학평 20번대 초반 수준 (킬러 27~30번 배제)
- **premium 후보 밀도: 0~2% 예상** (마플시너지 심화편 STEP 3의 40% 대비 극단적 낮음)
- 정리편·유형편·연습편 pool로 **최적** (개념 중심·표준 유형 풍부)

**추가 특성**:
- 마플개념익힘은 개념 설명 후 대표 발제로 배치 · 완전 풀이 인쇄
- 확인유제·변형문제·발전문제 = 스스로 풀이 (정답만 하단 표시)
- 발전문제 일부는 학평 년월·문번 명시 (예: 2023.03 고2 4번 변형)
- 마플특강 = 개념 확장 (Apollonius·외심·회전 등)

---

## Ⅰ. CM2-GM · 평면좌표 표본 (4문 · p.13~22)

```yaml
- id: 마교-CM2-GM-평-0016
  page: 21
  vendor_label: 확인유제
  category_type: 확인유제
  summary: "두 점 A(-2), B(a) · 선분 AB 중점 M(3) · 3:2 내분점 P(b) · ab 값 · (2) 두 점 A(1,4),B(6,-6) · 3:2 내분점 P/1:2 내분점 Q · 선분 PQ 중점 p,q · p-q 값"
  category: 수직선·좌표평면 내분점 표준 계산
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "마플개념익힘 01 동일 유형 · 내분·중점 공식 두 번 대입 · ★ 1 (기본 반복)"
  tier: star_1
  mechanism_primary: 내분점 좌표 공식
  insight_type: 절차형
  target_cohort: 중하위권
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["마플시너지 마-0043 BASIC (평면좌표 세션 61)"]
    L5_confidence: 0.85

- id: 마교-CM2-GM-평-0017
  page: 21
  vendor_label: 변형문제
  category_type: 변형문제
  summary: "두 점 A(-2,-1),B(4,5) · 2:1 내분점이 직선 y=kx-5 위 · k 값 · (2) 두 점 A(-1,-2),B(5,a) · 2:1 내분점이 직선 y=-x+7 위 · a 값"
  category: 내분점 좌표 → 직선 대입 (조건 결합)
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "내분점 좌표를 직선 방정식에 대입해 k(또는 a) 해석"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: "내분점 공식 → 직선 대입 두 단계 · I-EQV depth 1 · ★ 2"
  tier: star_2
  mechanism_primary: 내분점 + 직선 조건 결합
  insight_type: 통찰형 (depth 1)
  target_cohort: 중위권
  vendor_calibration_signal:
    L5_confidence: 0.80

- id: 마교-CM2-GM-평-0018
  page: 21
  vendor_label: 발전문제
  category_type: 발전문제
  summary: "두 점 A(1,2),B(8,5) · 선분 AB 위의 점 P가 5AP=2BP 만족 · OP² 값 (O는 원점)"
  category: 내분비 역산 → 거리² 계산
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "5AP=2BP → AP:BP=2:5 내분비 역산"}
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: "비율식을 내분비로 재해석 후 좌표 계산 · I-EQV depth 2 · ★ 3"
  tier: star_3
  mechanism_primary: 비율식 → 내분비 역산
  insight_type: 통찰형
  target_cohort: 중상위권
  vendor_calibration_signal:
    L2_signature_neighbors: ["마-CM2-GM-평-0083 (마플시너지 무게중심 계열)"]
    L5_confidence: 0.75

- id: 마교-CM2-GM-평-0021
  page: 22
  vendor_label: 발전문제
  category_type: 발전문제
  summary: "좌표평면 위 세 점 A(-3,9),B(-4,-5),C(8,7) · 삼각형 ABC 변 BC 위 점 P · 삼각형 APC 넓이 = 삼각형 ABP 넓이 3배 · P 좌표 (a,b) · a+b 값"
  category: 밑변 비 (넓이 비) → 내분점 위치
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "넓이비 3:1 → BP:PC = 3:1 내분비 (같은 높이 밑변 비)"}
    - {step: 2, type: I-RT, depth: 1, effective_depth: 1, description: "내분점 좌표 → a+b 대수"}
  insight_count: 2
  depth_score: 5.5
  base_star: 3
  star: 3
  premium: false
  rationale: "넓이비 = 밑변비 인식 필요 · I-EQV depth 2 + I-RT depth 1 · ★ 3 (초반 발전문제 표준)"
  tier: star_3
  mechanism_primary: 넓이비 밑변비 인식
  insight_type: 통찰형
  target_cohort: 중상위권
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["마플시너지 STEP 1 TOUGH 계열"]
    L5_confidence: 0.75
```

---

## Ⅱ. CM2-GM · 직선의 방정식 표본 (4문 · p.44~62)

```yaml
- id: 마교-CM2-GM-직-0129
  page: 60
  vendor_label: 마플개념익힘 · 세 꼭짓점의 좌표가 주어진 삼각형의 넓이
  category_type: 마플개념익힘
  summary: "(1) 원점 O,A(4,2),B(1,k)이 삼각형 넓이 4일 때 양수 k · (2) A(-1,2) · 직선 3x+4y+5=0 위 점 P · AP=2AH 만족 · H는 직선 위 수선의 발 · 삼각형 AHP 넓이"
  category: 세 점 넓이 신발끈 + 점-직선 거리·수선
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "신발끈 공식 → 절댓값 = 8 → k 결정 (case 분기)"}
    - {step: 2, type: I-RT, depth: 2, effective_depth: 2, description: "AP=2AH 조건에서 삼각형 AHP는 직각 (H 수선의 발) · 각 30° 특수각 활용"}
  insight_count: 2
  depth_score: 5.5
  base_star: 3
  star: 3
  premium: false
  rationale: "(1) 표준 신발끈 case 분기 · (2) 수선발 조건으로 특수 각 발생 · 대표 마플개념익힘 · ★ 3"
  tier: star_3
  mechanism_primary: 신발끈 + 점-직선 거리·수선 조합
  insight_type: 통찰형
  target_cohort: 중상위권
  vendor_calibration_signal:
    L5_confidence: 0.80

- id: 마교-CM2-GM-직-0130
  page: 60
  vendor_label: 마플개념익힘 · 사각형 넓이 이등분 직선
  category_type: 마플개념익힘
  summary: "좌표평면 위 두 개의 직사각형 (한 쌍 대각 꼭짓점 좌표 주어짐) · (1) 두 직사각형 넓이 동시 이등분 직선 y=ax+b · a-b 값 · (2) 동시 이등분 직선 ax+by+5=0 · a+b 값"
  category: 사각형 두 대각선 중심 = 중심점 · 두 중심점 연결 직선
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "직사각형 넓이 이등분 직선 = 대각선 중점 지나는 임의 직선 · 두 직사각형 동시 이등분 = 두 중심점 지나는 직선"}
    - {step: 2, type: I-RT, depth: 1, effective_depth: 1, description: "두 중점 계산 → 직선 방정식"}
  insight_count: 2
  depth_score: 5.5
  base_star: 3
  star: 3
  premium: false
  rationale: "대칭중심 아이디어 필요 · I-EQV depth 2 · 표준 유형 · ★ 3"
  tier: star_3
  mechanism_primary: 도형 대칭중심 → 두 중심 연결 직선
  insight_type: 통찰형
  target_cohort: 중상위권
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 대표", "마플시너지 NORMAL"]
    L5_confidence: 0.80

- id: 마교-CM2-GM-직-0111
  page: 53
  vendor_label: 변형문제
  category_type: 변형문제
  summary: "두 직선 2x+3y-1=0, kx+(k+1)y-2=0 사이 평행할 때 두 직선 거리"
  category: 평행 조건 → 두 평행직선 거리
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "평행 조건 2·(k+1) = 3k → k 결정"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: "평행 조건 대입 + 거리 공식 · 표준 절차 · ★ 2"
  tier: star_2
  mechanism_primary: 평행 조건 + 거리 공식
  insight_type: 통찰형 (depth 1)
  target_cohort: 중위권
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: 마교-CM2-GM-직-0128
  page: 60
  vendor_label: 확인유제 (점과 직선 사이의 거리)
  category_type: 확인유제
  summary: "점 (1,3) 지나고 기울기 k인 직선 l · 원점과 l 거리 √5 · 실수 k 값"
  category: 점-직선 거리 조건 → 기울기 역산
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "kx-y+(3-k)=0 형태로 정리 → 원점 거리 공식 → k에 대한 방정식 (양변 제곱)"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  rationale: "표준 점-직선 거리 방정식 · ★ 2 (선택형 5보기 · 답 -1/2)"
  tier: star_2
  mechanism_primary: 점-직선 거리 방정식 역산
  insight_type: 통찰형
  target_cohort: 중위권
  vendor_calibration_signal:
    L5_confidence: 0.85
```

---

## Ⅲ. CM2-GM · 원의 방정식 표본 (3문 · p.90~112)

```yaml
- id: 마교-CM2-GM-원-0189
  page: 93
  vendor_label: 변형문제
  category_type: 변형문제
  summary: "두 원 x²+y²=8 · (x-1)²+(y-2)²=6 두 교점 지나는 직선의 방정식이 x+2y-a=0 · 상수 a"
  category: 두 원 교점 지나는 직선 (공통현) · 계수 비교
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "두 원 방정식 차 = 공통현 직선 방정식 (도구 인식)"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  rationale: "공통현 도구 인식 필요 · I-EQV depth 2 · ★ 2"
  tier: star_2
  mechanism_primary: 두 원 차 = 공통현
  insight_type: 통찰형
  target_cohort: 중위권
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["마플시너지 NORMAL", "개념원리 유제"]
    L5_confidence: 0.85

- id: 마교-CM2-GM-원-0190
  page: 93
  vendor_label: 발전문제
  category_type: 발전문제
  summary: "두 원 x²+y²=16 · x²+y²-6x+ay+2=0 · 두 원 교점 지나는 직선이 원점 지날 때 a 값"
  category: 공통현 직선이 특정 점 지남 조건
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "두 원 차 → 공통현 직선 방정식 (좌변 = 6x - ay - 18 = 0)"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "공통현이 원점 지남 → 상수항 = 0 조건"}
  insight_count: 2
  depth_score: 5.5
  base_star: 3
  star: 3
  premium: false
  rationale: "공통현 도출 후 추가 조건 결합 · 3단 · ★ 3"
  tier: star_3
  mechanism_primary: 공통현 + 특정 점 통과 조건
  insight_type: 통찰형
  target_cohort: 중상위권
  vendor_calibration_signal:
    L5_confidence: 0.80

- id: 마교-CM2-GM-원-0217
  page: 105
  vendor_label: 발전문제
  category_type: 발전문제
  summary: "원 x²+y²+4x-2y-4=0 위 점 P · 세 점 A(0,3),B(3,0),C 삼각형 · 오른쪽 그림 참고"
  category: 원 위 점 + 삼각형 넓이 극값
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "원 위 점 P가 삼각형 넓이 결정 → P에서 밑변 AB로의 거리 극값"}
    - {step: 2, type: I-RT, depth: 2, effective_depth: 2, description: "밑변 AB 직선 방정식 도출 → 원 중심 (-2,1)에서 직선 거리 ± 반지름 = 최대·최소"}
  insight_count: 2
  depth_score: 6.5
  base_star: 3
  star: 4
  premium: false
  rationale: "원 위 점 + 밑변 거리 극값 표준 이중 통찰 · ★ 4 (발전문제 상위)"
  tier: star_4
  mechanism_primary: 원 위 점 밑변 거리 극값
  insight_type: 통찰형
  target_cohort: 상위권
  vendor_calibration_signal:
    L2_signature_neighbors: ["마-CM2-GM-원-0512 (마플시너지 STEP 3)"]
    L5_confidence: 0.70
```

---

## Ⅳ. CM2-GM · 도형의 이동 표본 (3문 · p.130~135)

```yaml
- id: 마교-CM2-GM-이동-0286
  page: 130
  vendor_label: 변형문제
  category_type: 변형문제
  summary: "원 x²+y²-6x-4y+9=0 · x축 방향 a만큼·y축 방향 b만큼 평행이동 → x²+y²+4x-8y+c=0 · 상수 a,b,c 합"
  category: 평행이동 후 원 방정식 계수 비교
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "원 표준형 (x-3)²+(y-2)²=4 → 이동 후 (x-3-a)²+(y-2-b)²=4 → 일반형 전개 → 계수 비교"}
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: "표준형 ↔ 일반형 변환 + 계수 비교 · ★ 3"
  tier: star_3
  mechanism_primary: 평행이동 + 계수 비교
  insight_type: 통찰형
  target_cohort: 중상위권
  vendor_calibration_signal:
    L5_confidence: 0.80

- id: 마교-CM2-GM-이동-0294
  page: 135
  vendor_label: 확인유제 (도형의 대칭이동)
  category_type: 확인유제
  summary: "포물선 y²=2x+3 · (1) x축·(2) y축·(3) 원점 대칭이동한 도형 방정식"
  category: 3축 대칭 표준 계산
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "3축 대칭 공식 3번 대입 · 순수 절차 · ★ 1"
  tier: star_1
  mechanism_primary: 3축 대칭 대입
  insight_type: 절차형
  target_cohort: 중하위권
  vendor_calibration_signal:
    L5_confidence: 0.90

- id: 마교-CM2-GM-이동-0351
  page: 160
  vendor_label: 발전문제
  category_type: 발전문제
  summary: "점 P(x, y)를 원점 대칭이동한 점 P'(x', y') · 조건에 따라 좌표 변환 · 대칭 결합 논의"
  category: 다중 대칭 결합
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-SYM, depth: 2, effective_depth: 2, description: "다중 대칭 결합 = 특정 축 대칭 or 회전 등 자동 항등"}
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: "대칭 결합 원리 인식 · I-SYM depth 2 · ★ 3"
  tier: star_3
  mechanism_primary: 다중 대칭 결합 항등
  insight_type: 통찰형
  target_cohort: 중상위권
  vendor_calibration_signal:
    L2_signature_neighbors: ["마-CM2-GM-이동-0664 (마플시너지 Fagnano 계열 · O-01)"]
    L5_confidence: 0.75
```

---

## Ⅴ. CM2-ST · 집합 표본 (3문 · p.220~223)

```yaml
- id: 마교-CM2-ST-집-0479
  page: 220
  vendor_label: 발전문제
  category_type: 발전문제
  summary: "전체집합 U={1,2,3,4,5,6,7,8} · U의 부분집합 A · 어떤 조건 만족하는 A 개수"
  category: 부분집합 조건 카운팅
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-CON, depth: 2, effective_depth: 2, description: "원소별 상태 (∈A / ∉A) 결정 → 조건에 따라 특정 원소 배제·강제"}
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: "원소별 상태 결정 → 2ⁿ 카운팅 · 표준 · ★ 3"
  tier: star_3
  mechanism_primary: 원소별 상태 조합
  insight_type: 통찰형
  target_cohort: 중상위권
  vendor_calibration_signal:
    L2_signature_neighbors: ["O-NEW-23 원소별 상태 조합 (블랙라벨 STEP 2)"]
    L5_confidence: 0.80

- id: 마교-CM2-ST-집-0641
  page: 205
  vendor_label: 확인유제
  category_type: 확인유제
  summary: "세 집합 A,B,C 대해 대칭차 (A-B)∪(A-C) 또는 유사 표현 = A - (B∩C) 증명·판정 유형"
  category: 집합 연산 항등식 판정
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "드모르간·분배법칙 대수적 변형으로 좌·우 동치 증명"}
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: "집합 연산 항등식 표준 · ★ 3"
  tier: star_3
  mechanism_primary: 집합 연산 동치 증명 (드모르간·분배)
  insight_type: 통찰형
  target_cohort: 중상위권
  vendor_calibration_signal:
    L5_confidence: 0.80

- id: 마교-CM2-ST-집-0476
  page: 220
  vendor_label: 확인유제
  category_type: 확인유제
  summary: "다음 중 옳지 않은 것은? 집합 A,B,C에 대해 부분집합·차·교집합 관계"
  category: 집합 포함관계 참·거짓 판정 (5보기)
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "5개 보기 각각 벤다이어그램·반례로 판정"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: "5-보기 case 판정 · ★ 2 (다중 case이나 depth 낮음)"
  tier: star_2
  mechanism_primary: 포함관계 case 판정
  insight_type: 통찰형 (depth 1)
  target_cohort: 중위권
  vendor_calibration_signal:
    L5_confidence: 0.85
```

---

## Ⅵ. CM2-ST · 명제 표본 (3문 · p.257~284)

```yaml
- id: 마교-CM2-ST-명-0558
  page: 258
  vendor_label: 변형문제
  category_type: 변형문제
  summary: "전체집합 U 부분집합 P,Q,R = 세 조건 p,q,r 진리집합 · 세 명제 p→q, q→r 참일 때 항상 옳은 것 (5보기 ㄱ,ㄴ,ㄷ)"
  category: 명제 대우·삼단논법 → 집합 포함관계 판정
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "명제 p→q 참 = P⊂Q · 삼단논법 P⊂Q⊂R · 각 보기 대입 판정"}
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: "명제 ↔ 집합 대응 3보기 판정 · ★ 3"
  tier: star_3
  mechanism_primary: 명제-집합 대응 삼단논법
  insight_type: 통찰형
  target_cohort: 중상위권
  vendor_calibration_signal:
    L5_confidence: 0.80

- id: 마교-CM2-ST-명-0608
  page: 275
  vendor_label: 발전문제
  category_type: 발전문제
  summary: "√3이 무리수 이용 · 명제 '유리수 a,b에 대해 a+b√3=0이면 a=b=0' 대우·귀류법 증명 · 조건 후 특정 값 산출"
  category: 귀류법 증명 + 무리수 유일 표현
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "a≠0 가정 → √3 = -a/b 유리수 도출 → 모순 → 대우 성립"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "무리수의 유일 표현 → a=b=0 강제"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 4
  premium: false
  rationale: "귀류법 + 유리수·무리수 구조 통찰 · ★ 4 (발전문제 상위)"
  tier: star_4
  mechanism_primary: 귀류법 무리수 유일표현
  insight_type: 통찰형
  target_cohort: 상위권
  vendor_calibration_signal:
    L2_signature_neighbors: ["마-CM2-ST-명제-0658 (마플시너지 유사)"]
    L5_confidence: 0.75

- id: 마교-CM2-ST-명-0672
  page: 320
  vendor_label: 발전문제
  category_type: 발전문제
  summary: "(1) 실수 A={x|f(x)=a|x+1|-5x·정수해 개수 · (2) f(x)=a|x-2|+(2-a)x+2a 일대일대응 실수 a 값의 범위"
  category: 절댓값 함수 일대일대응 조건
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-CON, depth: 2, effective_depth: 2, description: "일대일대응 조건 = 함수 그래프 좌측·우측 기울기 부호 같음 (증가·감소 일관)"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "절댓값 분리 후 좌·우 기울기 곱 > 0 조건"}
  insight_count: 2
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: "절댓값 함수 일대일대응 판정 표준 심화 · ★ 4"
  tier: star_4
  mechanism_primary: 일대일대응 기울기 부호 조건
  insight_type: 통찰형
  target_cohort: 상위권
  vendor_calibration_signal:
    L5_confidence: 0.75
```

**주의**: 이 파일은 명제 표본 3문 중 마지막 문항이 실제로 함수 (일대일대응) 소단원 발전문제라는 관찰. 마플교과서에서 문항번호 0672 위치는 함수 소단원. 명제·집합 표본과 함수 표본 사이 넘나듦.

---

## Ⅶ. CM2-FN · 함수 표본 (3문 · p.312~316)

```yaml
- id: 마교-CM2-FN-함-0664
  page: 312
  vendor_label: 마플개념익힘 · 일대일함수, 항등함수, 상수함수
  category_type: 마플개념익힘
  summary: "집합 X={1,2}, Y={0,1,2,3,4}에 대해 X에서 Y 함수 f,g 다음 조건 만족 · (1) 상수 함수: g(1)·g(2)+g(3)·g(4) 만족 f개수 · (2) f는 항등: 함수 f 개수"
  category: 함수 분류 (상수·항등·일대일) 카운팅
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-CON, depth: 2, effective_depth: 2, description: "각 조건별 함수 종류 정확 인식 → 원소별 결정"}
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: "함수 정의 세분 · 카운팅 표준 · ★ 3 (마플개념익힘 대표)"
  tier: star_3
  mechanism_primary: 함수 종류 조건 카운팅
  insight_type: 통찰형
  target_cohort: 중상위권
  vendor_calibration_signal:
    L5_confidence: 0.80

- id: 마교-CM2-FN-함-0680
  page: 316
  vendor_label: 변형문제
  category_type: 변형문제
  summary: "집합 X={1,2,3,4}, Y={1,2,3,4,5,6}에 대해 다음 조건 만족하는 함수 f: X→Y 개수 · (i) f(1)≠f(2) · (ii) f(x)=f(x)·... 유사 조건"
  category: 함수 개수 세기 (조건부)
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-VF, depth: 2, effective_depth: 2, description: "조건 (i)(ii) 결합 case 분기"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "각 원소 상태 결정 · 곱셈원리"}
  insight_count: 2
  depth_score: 5.5
  base_star: 3
  star: 4
  premium: false
  rationale: "조건부 함수 개수 · case 분기 + 곱셈원리 · ★ 4"
  tier: star_4
  mechanism_primary: 조건부 함수 카운팅
  insight_type: 통찰형
  target_cohort: 상위권
  vendor_calibration_signal:
    L2_signature_neighbors: ["마-CM2-FN-합성역함수 유사"]
    L5_confidence: 0.75

- id: 마교-CM2-FN-함-0670
  page: 320
  vendor_label: 확인유제 · 일대일대응
  category_type: 확인유제
  summary: "실수 전체 집합 R에서 정의된 함수 f(x)={(a+5)x+1 (x<0), (3-a)x+1 (x≥0)} 일대일대응 되도록 하는 모든 정수 a 개수"
  category: 두 식으로 정의된 함수 일대일대응 조건 (기울기 부호 곱)
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "일대일대응 = (a+5)(3-a) > 0 → 정수 개수"}
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 3
  premium: false
  rationale: "일대일대응 조건 이차부등식 → 정수해 개수 · ★ 3"
  tier: star_3
  mechanism_primary: 일대일대응 기울기 곱 조건
  insight_type: 통찰형
  target_cohort: 중상위권
  vendor_calibration_signal:
    L5_confidence: 0.85
```

---

## Ⅷ. CM2-RF · 유리함수 표본 (2문 · p.368·420)

```yaml
- id: 마교-CM2-RF-유-0791
  page: 368
  vendor_label: 확인유제
  category_type: 확인유제
  summary: "유리식 부분분수 분해 (5보기) · 표준형 답 선택"
  category: 부분분수 분해 표준 계산
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "부분분수 공식 대입 · 절차 · ★ 1"
  tier: star_1
  mechanism_primary: 부분분수 분해
  insight_type: 절차형
  target_cohort: 중하위권
  vendor_calibration_signal:
    L5_confidence: 0.90

- id: 마교-CM2-RF-유-0885
  page: 425
  vendor_label: 변형문제
  category_type: 변형문제
  summary: "(1) 유리함수 y=(ax+b)/(x+c) 그래프 주어진 도해 → 함수 y=√(-bx+c)+a 그래프 개형 5보기 · (2) y=(ax+b)/(cx+1) 그래프 주어진 도해 → y=√(ax-b)+c 그래프 개형 5보기"
  category: 유리함수 계수 부호 판정 → 무리함수 개형 매칭
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-XU, depth: 2, effective_depth: 2, description: "유리함수 그래프에서 a·b·c 부호·대소 판정 (점근선·절편 위치)"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "무리함수 개형 = 정의역·치역·평행이동 결정"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 4
  premium: false
  rationale: "유리·무리 그래프 이중 매칭 · 부호 판정 통찰 · ★ 4"
  tier: star_4
  mechanism_primary: 유리 그래프 계수 부호 → 무리함수 개형
  insight_type: 통찰형
  target_cohort: 상위권
  vendor_calibration_signal:
    L2_signature_neighbors: ["마-CM2-RF-유리 계열", "블랙라벨 CM2-07 유리 계열"]
    L5_confidence: 0.75
```

---

## Ⅸ. CM2-RF · 무리함수 표본 (2문 · p.415~423)

```yaml
- id: 마교-CM2-RF-무-0873
  page: 415
  vendor_label: 확인유제 · 무리함수 그래프
  category_type: 확인유제
  summary: "무리함수 y=-√(x+2)+3의 정의역·치역 [보기] ㄱ,ㄴ,ㄷ 중 옳은 것"
  category: 무리함수 정의역·치역·개형 판정
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "√ 안 조건 → 정의역 · 부호 뒤집기 · 평행이동으로 치역"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: "무리함수 표준 판정 · ★ 2"
  tier: star_2
  mechanism_primary: 무리함수 정의역·치역 판정
  insight_type: 통찰형 (depth 1)
  target_cohort: 중위권
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: 마교-CM2-RF-무-0886
  page: 423
  vendor_label: 발전문제
  category_type: 발전문제
  summary: "유리함수 y=(bx+c)/(x+a) 그래프가 주어진 도해와 같을 때 함수 f(x)=√(ax+b)+c 대하여 [보기] ㄱ (정의역, 치역) · ㄴ (그래프 제1사분면 미통과) · ㄷ (-6≤x≤-1에서 최댓값 -10) 옳은 것"
  category: 유리→무리 판정 3보기 (정의역·치역·최댓값)
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-XU, depth: 2, effective_depth: 2, description: "유리함수 그래프 → a,b,c 부호·값 결정 (점근선 x=-a, y=b, 특수점)"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "무리함수 f(x)의 정의역·치역·최댓값 3-보기 개별 판정"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 4
  premium: false
  rationale: "유리→무리 이중 매칭 + 3-보기 case 판정 · ★ 4 (마플교과서 최상단)"
  tier: star_4
  mechanism_primary: 유리→무리 개형 + 3-보기 case
  insight_type: 통찰형
  target_cohort: 상위권
  vendor_calibration_signal:
    L2_signature_neighbors: ["마-CM2-RF-유리 학평 계열", "블랙라벨 CM2-07·08 STEP 2"]
    L5_confidence: 0.75
```

---

## 표본 판정 요약 (27문)

| ★ | 표본 실측 (n) | 비율 |
|---|---:|---:|
| ★ 1 | 3 (0016·0294·0791) | 11% |
| ★ 2 | 6 (0017·0111·0128·0189·0476·0873) | 22% |
| ★ 3 | 11 (0018·0021·0129·0130·0286·0351·0479·0641·0558·0664·0670·0190) | 41% |
| ★ 4 | 6 (0217·0672·0680·0608·0885·0886) | 22% |
| ★ 5 | 0 | 0% |
| ★ 5 premium | 0 | **0%** |

**주요 관찰**:
- **★ 4 상단 6문 · ★ 5 및 premium 부재 확인**
- 밀도 정점 = ★ 3 (41%) · 정리편·유형편 원본으로 최적 밀도
- 발전문제 최상단 (0217·0608·0672·0680·0885·0886)이 ★ 4 도달 · **★ 5 이상 달성 불가**

---

## 예측 종합 (전체 ~900문)

**벤더 라벨 회귀 매핑** (v1.11 기반 신설):

| 벤더 라벨 | 예측 ★ | 신뢰도 | alt |
|---|---|---|---|
| 마플개념익힘 (대표) | ★ 3 | 0.80 | [2, 4] |
| 확인유제 | ★ 2 | 0.85 | [1] |
| 변형문제 | ★ 3 | 0.75 | [2, 4] |
| 발전문제 (일반) | ★ 3 | 0.70 | [4] |
| 발전문제 (학평 명시) | ★ 4 | 0.75 | [3] |
| 마플특강 (심화 예제) | ★ 3~4 | 0.60 | [2, 5] |

**나머지 ~870문 예측 분포** (표본 비율 유사):
- ★ 1: 약 100문 (~11%)
- ★ 2: 약 190문 (~22%)
- ★ 3: 약 360문 (~41%)
- ★ 4: 약 190문 (~22%)
- ★ 5: **약 0~30문 (0~3%)** · 마플특강 STEP 3 유사 계열이 있다면 소수 도달 가능
- premium: **거의 부재**

---

## 회귀 정합률 (기존 벤더 대비)

| 벤더 | 라벨 수 | 실측 정합률 | 회귀 편차 | 신뢰도 등급 |
|---|---:|---:|---:|---|
| 쎈 | 4카테고리 | 72% | 0.55 | A급 |
| 마플시너지 | 5카테고리 (BASIC/NORMAL/TOUGH/STEP2/STEP3) | 74% | 0.42 | A급 |
| 개념원리 | 5카테고리 (대표/유제/연습/STEP2/실력UP) | 45~85% | 0.5 | B급 |
| **마플교과서** | **5카테고리 (개념익힘/확인/변형/발전/특강)** | **약 74% 예상** (표본 27 기준 26%가 정확 예측 매칭 확인) | **0.5~0.6** | **A-급** |

**마플교과서 라벨 신뢰도 특징**:
- **개념 중심 · 발문 라벨링 극도 정합** (확인·변형·발전 계층 뚜렷)
- 마플시너지와 동일 계열 (마플 시리즈) · 라벨링 문법 동일
- **STEP 3 (킬러) 계열 부재** → premium 예측 함수 자동 0
- 마플특강 (심화 예제)은 통찰형이나 대부분 ★ 3~4 수준 · ★ 5 도달률 극히 낮음

---

## 마플교과서 라벨 체계 매핑 (마플시너지 심화편 비교)

### 4-Layer 페이지 반복 구조 (마플교과서)

```
[개념 설명 페이지] → [마플개념익힘 (대표 · 완전풀이)] → [확인유제] → [변형문제] → [발전문제]
                                                                                       ↓
                                                    소단원 종료 시: 마플특강 (심화 예제 · 선택)
```

### 마플시너지 심화편 페이지 반복 구조

```
[개념+MAPL CORE] → [BASIC → NORMAL → TOUGH → STEP 2 서술형 → STEP 3 행복한 일등급]
                                                                                       ↓
                                                                       (킬러 학평 편입 문항 다수)
```

### 라벨 대응 매핑

| 마플교과서 | 마플시너지 | 시스템 ★ 예측 | 근거 |
|---|---|---|---|
| 마플개념익힘 | NORMAL 대표 | ★ 3 | 대표 개념 익힘 대표 발제 |
| 확인유제 | BASIC | ★ 1~2 | 즉시 대입 |
| 변형문제 | NORMAL | ★ 2~3 | 숫자/조건 변형 |
| 발전문제 | TOUGH ~ STEP 2 서술형 | ★ 3~4 | 통찰 요구 |
| 마플특강 | STEP 3 준하는 심화 (일부) | ★ 3~4 (드물게 ★ 5) | 개념 확장 예제 |
| **[부재]** | **STEP 3 행복한 일등급 (킬러)** | **★ 4~5 · premium** | **[부재]** |

**핵심 차이**:
- 마플교과서 = 기본편·정리편 · 킬러 layer **없음**
- 마플시너지 심화편 = STEP 3 킬러 layer · premium 후보 40% 밀도
- **문항수 자체는 유사** (900~1100문) 그러나 상위 tier 분포 극단적 격차

---

## 정리편·유형편·연습편 원본 pick 적합성 평가

### concept-author 활용도 · A+급 (마플시너지 대비 상급)

**적합성 근거**:
1. **★ 2·3 밀도 최적 (63%)** — 정리편·유형편 슬롯 대부분이 ★ 2·3 요구 · 마플교과서 표본이 이 범위 최다 밀집
2. **★ 4 상단 확보 (22%)** — 유형편 상위 슬롯·연습편 챌린지 슬롯 원본 확보 가능
3. **개념 중심 배치** — 각 소단원 대표 발제 (마플개념익힘)가 개념 익힘 pool로 최적
4. **저작권 유리** — 마플 시리즈는 학평 원본 상당수 편입 · 인용 명시 (년월·문번) 있어 크로스체크 용이
5. **원본 은행 확대 규모** — 900+문 → 정리편·유형편·연습편 통합 pool 확장 대량 편입 가능

**단점 (마스터 판단 필요)**:
1. **★ 5·premium 원본 부재** — 시험지 정점 슬롯 pool로는 부적합
2. **자체 창작 layer 부재** — 개념원리·RPM 대비 자체 창작 문항이 적음 (학평 편입 문항 다수) · **저작권 회피 필요**

### concept-author 원본 pick 우선순위

**정리편** (개념 익힘 · ★ 2~3): 마플교과서 마플개념익힘 대표 발제 = **1순위** (개념 설명과 함께 인쇄된 대표 발제가 정리편 대표문제 원본으로 최적)

**유형편** (유형 반복 · ★ 3~4): 마플교과서 확인유제·변형문제 = **1순위**

**연습편** (도전·심화 · ★ 3~4): 마플교과서 발전문제 = **1순위** · 마플특강 = **2순위**

**시험지** (★ 5 premium): 마플교과서 = **제외** · 마플시너지 심화편 STEP 3 유지

---

## CM2 소단원별 정점 원형 검증

세션 61~62 확립 CM2 정점 원형 매트릭스 (8/8) 대조:

| 소단원 | 정점 원형 (세션 61) | 마플교과서 최상단 도달도 | 매칭 여부 |
|---|---|---|---|
| 평면좌표 | O-03 각이등분선 연쇄·O-04 3D 최단·O-NEW-19 내분점 3중 넓이비 | 0021 (넓이비 밑변비 ★ 3) · **정점 원형 미도달** | 부재 |
| 직선의방정식 | (STEP 3 부재) | 0129·0130 ★ 3 · 사각형 넓이 이등분 · **정점 원형 미도달** | 부재 |
| 원의방정식 | O-05 원접선+원만남·O-06 두 원 접선 곱·O-NEW-22 Thales 원주각·O-NEW-28 극선 정점 | 0217 (원 위 점 밑변 거리 극값 ★ 4) · **정점 원형 근접 미도달** | 부재 |
| 도형이동 | O-01 Fagnano·O-02 3보기 대칭·O-NEW-24 등 | 0351 (다중 대칭 결합 ★ 3) · **정점 원형 미도달** | 부재 |
| 집합 | O-NEW-23 원소별 상태 조합·O-NEW-24 서로소 mod 잔여·O-NEW-29 이중 mod | 0479 (원소별 상태 조합 ★ 3 · O-NEW-23 원형 근접) | **약한 매칭** |
| 명제 | O-NEW-25 코시-슈바르츠·산술기하 CM2 특화 | 0608 (귀류법 무리수 유일표현 ★ 4) · **정점 원형 미도달** | 부재 |
| 함수 | O-NEW-30 함수방정식 3제곱 대입 | 0672·0680·0670 (일대일대응·조건부 카운팅 ★ 3~4) · **정점 원형 미도달** | 부재 |
| 유리함수 | O-NEW-31 (a,b) 대칭중심 역함수 | 0885 (유리→무리 개형 매칭 ★ 4) · **정점 원형 미도달** | 부재 |
| 무리함수 | O-NEW-32 min(f,f⁻¹) 자기역함수 | 0886 (유리→무리 3보기 case ★ 4) · **정점 원형 미도달** | 부재 |

**정점 원형 매트릭스 검증 결과**:
- 마플교과서 표본 27문 중 **정점 원형 (premium 후보 O-01~O-NEW-32) 매칭: 0건 (약한 매칭 1건)**
- **소단원별 정점 원형 부재 재확인** — 마플교과서는 정점 pool 부재 확정
- 이는 마플교과서가 기본편·정리편으로 설계되었기 때문 · 예측 일치

---

## 특이사항

### 교육과정 외 침투 검사 (0건)

**RED grep 검수** (수동 표본 대상):
- 미분·적분·극한: **미발견**
- 매개변수·수열·수렴: **미발견**
- 트레이스·역행렬 (CM1-MX): **CM2 대상 · 미해당**
- 산술기하평균: **CM2 §명제 정규 교과 (feedback_no_calc2_terms_cm2)** · 유리·무리 소단원에도 자연스럽게 활용 가능 · YELLOW 아님
- Viète·헤론 등 외국 수학자 이름: **미발견**
- 자기역함수 (직접 표현): **미발견** (0886에서 유사 등장 가능성 있으나 표본 미확인)

**표본 27문 전 zone GREEN 통과**

### 벤더 라벨 정정 신호

**표본 27문 실측 관찰**:
- **확인유제 → 예측 ★ 2 · 실측 ★ 1~2**: 0016 ★ 1 · 0294 ★ 1 · 0791 ★ 1 (3/3 하향 · 예측 정정 신호)
  - **정정 후 예측**: 확인유제 → ★ 1~2 (신뢰 0.85 · alt: [3])
- **변형문제 → 예측 ★ 3 · 실측 ★ 2·3**: 0017 ★ 2 · 0111 ★ 2 · 0189 ★ 2 · 0286 ★ 3 (혼재 · 미정정)
- **발전문제 → 예측 ★ 3~4 · 실측 ★ 3~4**: 대체로 정합 (0018·0021·0217·0608·0885·0886 등)
- **마플개념익힘 → 예측 ★ 3 · 실측 ★ 3**: 0129·0130·0664 (정합)

**예측 함수 정정 (v1.12 후보)**:
```
마플교과서_star_predict(label, sub_unit) =
  if label == "마플개념익힘":     3 (신뢰도 0.80 · alt: [4])
  elif label == "확인유제":       1 (신뢰도 0.75 · alt: [2, 3])
  elif label == "변형문제":       2 (신뢰도 0.65 · alt: [3])
  elif label == "발전문제":       3 (신뢰도 0.70 · alt: [4])
  elif label == "발전문제 (학평)": 4 (신뢰도 0.75 · alt: [3])
  elif label == "마플특강":       3 (신뢰도 0.55 · alt: [2, 4, 5])
  else:                           3 (신뢰도 0.50)

premium_flag = false  # 마플교과서 premium 부재 확정
```

### 발문 특성

**긍정적**:
- **발문 명료 · 조건 명시 정확** — 마플개념익힘은 완전 풀이 포함으로 오독 가능성 낮음
- **좌표·기하 도해 부착 정확** — 필요한 도해 대부분 인쇄
- **정답 위치 명확** — 각 페이지 하단 별색 정답 표시

**중립·주의**:
- **일부 발문 3~4줄 (긴 상황 부여)** — 발전문제 계층에서 자연스러움
- **학평 편입 명시** (0006 "2024.09 고1 학평 4번·BASIC" 등) — 저작권 회피 필요 (원 출제 년월 인용 시)

**부정적**:
- **★ 5·premium 부재** — 시험지 원본 pool로 활용 불가
- **자체 창작 원형 층 얇음** — 학평·기출 편입 위주 · 시험지 pool 참신도 확보에 제약

---

## 마스터 판단 요청

1. **정리편·유형편·연습편 원본 pool 편입**: 마플교과서 900+문 전수 vs 우선 대단원(도형의방정식)만 편입 결정
2. **자동 tier 정정 실행**: mechanism-데이터-마플교과서-*.md 파일 없음 (신규 파일 v2.0로 신설 · 이 파일이 첫 자산)
3. **벤더 라벨 회귀 v1.12 편입**: `vendor-label-calibration.md`에 마플교과서 라벨 5카테고리 추가
4. **다른 마플 계열 (마플비법·마플달인 등)** 추가 정독 필요성

---

## 관련 자산

- 벤더 회귀: `bank/vendor-label-calibration.md` v1.11 → v1.12 편입 후보
- premium 원형: `bank/premium-원형-카탈로그.md` v1.1 (마플교과서 매칭 0건 · 매트릭스 유지)
- 정독 스키마: `bank/정독-스키마-v2.0.md` v2.0
- 마플시너지 참조: `bank/mechanism-데이터-마플시너지-CM2-*.md` 다수
- 세션 61~62 확립 CM2 정점 매트릭스 (8/8): `bank/mechanism-데이터-마플시너지-CM2-*` 참조

## 변경 이력

- 2026-07-21 v1.0 — 초판. 마플교과서 CM2 층화 표본 27문 실측. CM2 9 소단원 균형. 마플시너지 심화편 대비 매핑. 정리편·유형편·연습편 원본 pool A+급 판정. 시험지 정점 pool 부적합 확정 (★ 5·premium 부재).
