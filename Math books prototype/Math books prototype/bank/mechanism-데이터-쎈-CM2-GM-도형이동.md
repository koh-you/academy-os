---
name: mechanism-데이터-쎈-CM2-GM-도형이동
description: 쎈 공통수학2 (2022개정) 도형의 이동 소단원 정독 데이터. v2.0 표준 · 표본 20문 시스템 순정 판정. 저작권 준수.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: 쎈 공통수학2 (2022개정) · [고등1-2] 쎈 공통수학2 (2022개정).pdf
  section: 도형의 이동
  unit_code: CM2-GM
  sub_unit: 도형이동
  citation_note: 쎈 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약)
  extract_range: "도형의 이동 소단원 전체 · A단계 기본다잡기 (0369~0404) + B단계 유형뽀개기 유형01~13 (0405~0472) + C단계 실력굳히기 (0473~0488)"
  pages: "64~80 (책 페이지 · PDF 페이지와 동일)"
  total_problems: 120
  sample_problems: 20
  predicted_problems: 100
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: pilot-쎈-CM2-GM-평면좌표 형식 준거
---

# 쎈 공통수학2 (2022개정) — 도형의 이동 소단원 정독 데이터

**출처**: 쎈 공통수학2 (2022개정) · I. 도형의 방정식 → 04. 도형의 이동
**범위**: A단계 기본다잡기 (0369~0404, 36문) + B단계 유형뽀개기 유형01~13 (0405~0472, 68문) + C단계 실력굳히기 (0473~0488, 16문)
**정독 페이지**: p.64~80 (17p, PDF page 동일)
**총 문항 수**: **120문항** (0369~0488)
**표본**: 20문 (A3 + B대표8 + B●상3 + C6) · 시스템 순정 판정
**정독 일자**: 2026-07-21

## 벤더 라벨 체계 (쎈 도형이동)

| 라벨 | 의미 | 표본 사전 tier |
|---|---|---|
| A단계 기본다잡기 | 개념 즉시 적용 계산 | ★ 1~2 |
| B단계 대표문제 | 유형별 첫 문항 (표준형) | ★ 2~3 |
| B단계 ● 중 | 표준 결합 | ★ 2~3 |
| B단계 ● 상 | 상 난이도 | ★ 3~4 |
| C단계 실력굳히기 | 사고력·심화 | ★ 3~5 |
| C단계 사고력 (아이콘) | 정점 문항 | ★ 4~5 |
| 교육청 기출 (C단계) | 실제 학평 편입 | ★ 4~5 |
| 서술형 (태그) | 서술형 (난이도 독립) | 원 판정 유지 |

---

## Ⅰ. A단계 기본다잡기 표본 (3/36문)

```yaml
- id: 쎈-CM2-GM-도형이동-0369
  page: 65
  vendor_label: A단계 기본
  category_type: 기본다잡기·04-1 점의 평행이동
  summary: "점 (-5,1)을 x축 +3, y축 +2 평행이동한 점의 좌표"
  category: 점의 평행이동 대입
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "평행이동 정의 1회 대입 · M_total ≤ 5 · 절차형 ★ 1"
  tier: star_1
  mechanism_primary: 점의 평행이동 (x+a, y+b)
  insight_type: 절차형
  target_cohort: 중하위권
  anchor_status: null
  novelty_score: 0

- id: 쎈-CM2-GM-도형이동-0380
  page: 65
  vendor_label: A단계 기본
  category_type: 기본다잡기·04-2 도형의 평행이동
  summary: "직선 3x-2y-4=0을 (x,y)→(x+6, y-2)로 옮긴 직선의 방정식"
  category: 도형의 평행이동 대입
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "x→x-6, y→y+2 대입 · 절차형 ★ 1"
  tier: star_1
  mechanism_primary: 도형 평행이동 f(x-a, y-b)=0
  insight_type: 절차형
  target_cohort: 중하위권
  anchor_status: null
  novelty_score: 0

- id: 쎈-CM2-GM-도형이동-0397
  page: 67
  vendor_label: A단계 기본
  category_type: 기본다잡기·04-4 도형의 대칭이동 (y=x)
  summary: "y=-2x+3을 직선 y=x에 대칭이동한 도형의 방정식"
  category: 도형의 대칭이동 (y=x)
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "x↔y 치환 대입 · 절차형 ★ 1"
  tier: star_1
  mechanism_primary: y=x 대칭이동 (x↔y)
  insight_type: 절차형
  target_cohort: 중하위권
  anchor_status: null
  novelty_score: 0
```

**A단계 나머지 33문 (0370~0379·0381~0396·0398~0404) 회귀 예측**: 표본 3문과 동질 유형 (평행이동/대칭이동 정의 1~2회 대입) → 대부분 ★ 1, 0403·0404 등 2단 유도만 ★ 2.

---

## Ⅱ. B단계 유형뽀개기 표본 (11/68문)

### 대표문제 8문

```yaml
- id: 쎈-CM2-GM-도형이동-0405
  page: 68
  vendor_label: B단계 대표문제 유형01 (점의 평행이동)
  category_type: 유형01 대표
  summary: "(a,b)를 (+3,-5) 평행이동한 점이 (4,2)일 때 a-b"
  category: 점의 평행이동 역산
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 2
  star: 2
  premium: false
  rationale: "역방향 대입 (a+3=4, b-5=2) 후 계산 · 절차형 ★ 2"
  tier: star_2
  mechanism_primary: 점의 평행이동 역산
  insight_type: 절차형
  target_cohort: 중위권
  anchor_status: null
  novelty_score: 0

- id: 쎈-CM2-GM-도형이동-0412
  page: 69
  vendor_label: B단계 대표문제 유형02 (도형 평행이동·직선)
  category_type: 유형02 대표
  summary: "직선 x+3y=-4를 (+a, -a) 평행이동한 직선이 원 (x-2)²+(y+4)²=25의 넓이를 이등분할 때 a"
  category: 평행이동한 직선의 원 중심 통과
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "넓이 이등분 → 직선이 원의 중심 통과"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "평행이동식에 중심 좌표 대입 → a"}
  insight_count: 2
  depth_score: 5.5
  base_star: 4
  star: 3
  premium: false
  rationale: "넓이 이등분 조건 → 중심 통과 EQV(2) 통찰이 있지만 표준 유형 · 대표문제라 -1 · ★ 3"
  tier: star_3
  mechanism_primary: 넓이 이등분 = 중심 통과 조건
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  novelty_score: 1

- id: 쎈-CM2-GM-도형이동-0418
  page: 69
  vendor_label: B단계 대표문제 유형03 (도형 평행이동·원)
  category_type: 유형03 대표
  summary: "원 x²+y²-10x+4y+4=0을 (+a, +b) 평행이동한 원의 중심이 원점일 때 a+b"
  category: 원 표준형 변환 → 평행이동 역산
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "원 표준형으로 변환하여 중심 (5,-2) 파악"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: "완전제곱 변환 + 부호 반대 이동 · 표준 계산 · ★ 2"
  tier: star_2
  mechanism_primary: 원 표준형 완성 + 평행이동
  insight_type: 통찰형
  target_cohort: 중위권
  anchor_status: null
  novelty_score: 0

- id: 쎈-CM2-GM-도형이동-0424
  page: 70
  vendor_label: B단계 대표문제 유형04 (도형 평행이동·포물선)
  category_type: 유형04 대표
  summary: "포물선 y=x²+4x-5를 (-3, +1) 평행이동한 포물선의 꼭짓점 (a,b) · ab"
  category: 포물선 표준형 → 꼭짓점 평행이동
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "꼭짓점 (-2, -9) 파악 → 평행이동"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: "꼭짓점 이동 표준 절차 · ★ 2"
  tier: star_2
  mechanism_primary: 포물선 꼭짓점 이동
  insight_type: 통찰형
  target_cohort: 중위권
  anchor_status: null
  novelty_score: 0

- id: 쎈-CM2-GM-도형이동-0428
  page: 71
  vendor_label: B단계 대표문제 유형05 (점의 대칭이동)
  category_type: 유형05 대표
  summary: "P(3,2)를 x축 대칭 Q · y=x 대칭 R · 삼각형 PQR 무게중심 좌표"
  category: 점 대칭이동 조합 + 무게중심
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "x축 대칭 Q=(3,-2), y=x 대칭 R=(2,3)"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "세 점 무게중심 = ((3+3+2)/3, (2-2+3)/3)"}
  insight_count: 2
  depth_score: 3.0
  base_star: 3
  star: 2
  premium: false
  rationale: "각 축·직선 대칭 정의 반복 + 무게중심 공식 · 통찰 depth 1 · ★ 2"
  tier: star_2
  mechanism_primary: 대칭이동 조합 + 무게중심
  insight_type: 통찰형
  target_cohort: 중위권
  anchor_status: null
  novelty_score: 0

- id: 쎈-CM2-GM-도형이동-0434
  page: 72
  vendor_label: B단계 대표문제 유형06 (도형 대칭이동·직선)
  category_type: 유형06 대표
  summary: "직선 ax+y-4=0을 x축 대칭 → 원점 대칭 → 점 (3,-5) 통과 · a"
  category: 두 번 대칭 (x축 → 원점) 합성
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "x축 대칭 (y→-y) → 원점 대칭 (x→-x, y→-y) 합성 = y축 대칭"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "변환된 식에 (3,-5) 대입"}
  insight_count: 2
  depth_score: 5.5
  base_star: 4
  star: 3
  premium: false
  rationale: "두 대칭 합성 EQV(2) · 대표문제 -1 · ★ 3"
  tier: star_3
  mechanism_primary: 대칭이동 합성
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  novelty_score: 1

- id: 쎈-CM2-GM-도형이동-0439
  page: 73
  vendor_label: B단계 대표문제 유형07 (도형 대칭이동·원)
  category_type: 유형07 대표
  summary: "원 x²+y²-6x+8y-16=0을 y=x 대칭한 원이 y축과 서로 다른 두 점에서 만날 때 두 점 사이의 거리"
  category: 대칭이동한 원 + 축 교점 현 길이
  M: {s: 4, k: 2, a: 2, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "y=x 대칭 → 중심 (-4,3) 반지름 √41"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "y축 교점 → x=0 대입 이차식"}
    - {step: 3, type: I-EQV, depth: 1, effective_depth: 1, description: "두 근 y₁,y₂ · |y₁-y₂|=√(D)/|a|"}
  insight_count: 3
  depth_score: 5.33
  base_star: 4
  star: 3
  premium: false
  rationale: "대칭 + 축 교점 + 근차 · CON(2) · 대표문제라 ★ 3"
  tier: star_3
  mechanism_primary: 대칭원 + y축 절편 현 길이
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  novelty_score: 1

- id: 쎈-CM2-GM-도형이동-0448
  page: 74
  vendor_label: B단계 대표문제 유형09 (점과 도형의 평행+대칭 조합)
  category_type: 유형09 대표
  summary: "(-6,3) 통과 직선 l을 y축 -4 평행이동 후 원점 대칭 → (9,-5) 통과 · l의 기울기"
  category: 직선 평행+대칭 합성 역산
  M: {s: 4, k: 2, a: 2, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "y축 -4 → (x,y)→(x,y-4) · 원점 대칭 → 최종 (x,y)→(-x,-y+4)"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "역변환: 최종 통과점 (9,-5) → 원 직선의 점 (-9, 9) 대응"}
    - {step: 3, type: I-EQV, depth: 1, effective_depth: 1, description: "l이 (-6,3), (-9,9) 통과 → 기울기 = (9-3)/(-9+6)"}
  insight_count: 3
  depth_score: 5.67
  base_star: 4
  star: 3
  premium: false
  rationale: "평행+대칭 합성 EQV(2)·CON(2) · 대표문제 -1 · ★ 3"
  tier: star_3
  mechanism_primary: 이동 합성 + 역변환
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  novelty_score: 1
```

### B단계 ● 상 3문

```yaml
- id: 쎈-CM2-GM-도형이동-0433
  page: 72
  vendor_label: B단계 ●● 상 (유형06)
  category_type: 유형06 상
  summary: "직선 y=x+2 위 점 A → y=x 대칭 B → 원점 대칭 C · 삼각형 ABC 넓이 16 · A 좌표 (제1사분면)"
  category: 대칭이동 조합 + 삼각형 넓이 역산
  M: {s: 4, k: 3, a: 2, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "A=(a,a+2), B=(a+2,a), C=(-a-2,-a) 좌표화"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "삼각형 넓이 공식 → a 이차식"}
    - {step: 3, type: I-VF, depth: 1, effective_depth: 1, description: "제1사분면 조건 → 양의 해 선택"}
  insight_count: 3
  depth_score: 5.67
  base_star: 4
  star: 4
  premium: false
  rationale: "대칭 좌표화 + 넓이 계산 + 조건 필터 · EQV(2)·CON(2) · ★ 4"
  tier: star_4
  mechanism_primary: 대칭 좌표화 + 삼각형 넓이 역산
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  novelty_score: 1

- id: 쎈-CM2-GM-도형이동-0443
  page: 73
  vendor_label: B단계 ●● 상 (유형07)
  category_type: 유형07 상
  summary: "원 (x+1)²+(y+1)²=2의 x≤0, y≤0 부분을 x축·y축·원점 대칭 → 폐곡선 넓이"
  category: 원 호의 다중 대칭 + 폐곡선 넓이
  M: {s: 4, k: 3, a: 2, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 2, signal_ref: [P3], description: "1/4 원호 3회 대칭 → 4개 원호 폐곡선 형태 시각화"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "각 대칭 원 중심 (±1, ±1) 배치 · 4원 조합"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "겹치는 정사각형 (2×2) - 4 × (원 밖 볼록 부분) 넓이 조합"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: "다중 대칭 도형 시각화 + 조합 넓이 · RT(3→2 감쇠) · 자산화 유형 · ★ 4"
  tier: star_4
  mechanism_primary: 다중 대칭 도형 + 조합 넓이
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2

- id: 쎈-CM2-GM-도형이동-0449
  page: 74
  vendor_label: B단계 ●●● 상 (유형09)
  category_type: 유형09 상
  summary: "(a,-5) → y=-x 대칭 → x축 -1, y축 +2 평행이동 = (4,b) · a+b"
  category: 대칭 + 평행 합성 역산
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "y=-x 대칭: (a,-5)→(5,-a)"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "평행이동: (5-1, -a+2)=(4, -a+2) → a, b 결정"}
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  rationale: "y=-x 대칭 (덜 익숙) + 합성 · EQV·CON depth 2 · ● 3 라벨이지만 실제 ★ 3 · 상위권 실수 트리거"
  tier: star_4
  mechanism_primary: y=-x 대칭 + 평행 합성
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: null
  novelty_score: 1
```

---

## Ⅲ. C단계 실력굳히기 표본 (6/16문)

```yaml
- id: 쎈-CM2-GM-도형이동-0474
  page: 78
  vendor_label: C단계 사고력의 기술 · 교육청 기출
  category_type: C 사고력·교육청
  summary: "삼각형 OAB (O·A(0,1)·B(-1,0))를 x축 +t 평행 (T₁) · 삼각형 OCD (O·C(0,-1)·D(1,0))를 y축 +2t 평행 (T₂) · T₁∩T₂가 육각형인 t 범위 (1/3, a) · 육각형 최대 넓이 M · a+M"
  category: 두 삼각형 평행이동 교집합 육각형 넓이 최대
  M: {s: 5, k: 3, a: 3, t: 2}
  M_total: 13
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, signal_ref: [P2, P3], description: "삼각형 두 개가 이동하며 겹치는 영역 시각화 · 육각형이 되는 임계 t 관찰"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "육각형 = 두 삼각형 - 3개 잘린 삼각형 넓이 조합"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "각 잘린 삼각형 넓이를 t의 함수로 · 각각 상사비 활용"}
    - {step: 4, type: I-VF, depth: 3, effective_depth: 2, signal_ref: [P4], description: "육각형 넓이 t 함수 극대값 (t=a에서 붕괴) · 완전제곱"}
    - {step: 5, type: I-PD, depth: 2, effective_depth: 2, description: "정점 임계값 a=1 관찰 (경계 조건)"}
  insight_count: 5
  depth_score: 8.4
  base_star: 5
  star: 4
  premium: false
  rationale: "다층 시각화 RT(3)·VF(3→2 감쇠) · 5통찰 depth_score 8.4 · premium 임계 (8.5) 근접 미달 · ★ 4"
  tier: star_4
  mechanism_primary: 삼각형 평행이동 교집합 넓이 최대
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  friction_triggers: [F2, F4]
  friction_verdict: "OK"

- id: 쎈-CM2-GM-도형이동-0476
  page: 78
  vendor_label: C 서술형·유형01+03
  category_type: C 서술형
  summary: "삼각형 OAB (O·A(a,0)·B(0,4))를 평행이동한 O'A'B'의 내접원이 x²+y²-10x-12y+60=0일 때 A' 좌표 (a>0)"
  category: 평행이동한 삼각형의 내접원 조건 역산
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "내접원 표준형 → 중심 (5,6) 반지름 1"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 2, signal_ref: [P1], description: "직각삼각형 (∠O=90°) 내접원 반지름 = (a+4-빗변)/2 = 1 → a"}
    - {step: 3, type: I-RT, depth: 2, effective_depth: 2, description: "내접원 중심 = (r, r) 상대 위치 → 평행이동 벡터 (dx,dy) 결정"}
    - {step: 4, type: I-EQV, depth: 1, effective_depth: 1, description: "A' = A + (dx,dy) 계산"}
  insight_count: 4
  depth_score: 5.75
  base_star: 4
  star: 4
  premium: false
  rationale: "내접원 성질 + 평행이동 벡터 역산 · CON(3→2 감쇠) · ★ 4"
  tier: star_4
  mechanism_primary: 내접원 반지름 공식 + 평행이동 역산
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2

- id: 쎈-CM2-GM-도형이동-0479
  page: 79
  vendor_label: C 서술형·유형03+05
  category_type: C 서술형
  summary: "원 O: x²+(y-1)²=1을 (-1,+1) 평행이동한 O'. O∩O' = {A, B}. (6,2)를 직선 AB에 대칭이동한 좌표 (a,b) · a+b"
  category: 두 원 근축(공통현) + 직선 대칭이동
  M: {s: 4, k: 3, a: 3, t: 1}
  M_total: 11
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "O'의 방정식 유도 · 두 원 방정식 차 → 공통현 (직선 AB)"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "직선 AB 기울기·절편 · 수직/중점 조건 세우기"}
    - {step: 3, type: I-EQV, depth: 3, effective_depth: 2, signal_ref: [P1], description: "직선 대칭 표준 절차 (2조건 · 대칭점 좌표)"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: "근축 EQV(2) + 직선 대칭 EQV(3→2 감쇠 자산화) · ★ 4"
  tier: star_4
  mechanism_primary: 두 원 공통현 + 직선 대칭이동
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2

- id: 쎈-CM2-GM-도형이동-0480
  page: 79
  vendor_label: C 교육청 기출·유형05
  category_type: C 교육청
  summary: "제1사분면 A·y축 위 B·|AB|=|AO|=2√5 이등변삼각형 OAB · A를 y=x 대칭한 C가 y=2x 위 · AB가 y=x, y=2x와 만난 점 D, E · 삼각형 ODE 외접원 둘레 kπ · 9k² "
  category: 대칭 + 이등변 + 두 직선 교점 + 외접원
  M: {s: 5, k: 3, a: 3, t: 2}
  M_total: 13
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P1, P3], description: "y=x 대칭점이 y=2x 위 → A의 좌표 매개변수 관계"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P3], description: "|AO|=2√5, |AB|=2√5, B는 y축 위 → A 좌표 결정 (다중 조건 결합)"}
    - {step: 3, type: I-RT, depth: 2, effective_depth: 2, description: "직선 AB 방정식 → y=x, y=2x와 교점 D, E"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "삼각형 ODE 세 꼭짓점 좌표 · 외접원 지름 = 대변/sin(원주각) or 세 점 원"}
    - {step: 5, type: I-PD, depth: 2, effective_depth: 2, description: "9k² 형태 → 외접원 반지름의 제곱 유도"}
  insight_count: 5
  depth_score: 8.4
  base_star: 5
  star: 5
  premium: false
  rationale: "학평 정점 · EQV(3)·CON(3) 진짜 depth 3 · 저노출 PD 포함 · 5통찰 · depth_score 8.4 · premium 임계 8.5 근접 미달 · 통상 ★ 5"
  tier: star_4
  mechanism_primary: 대칭 매개변수화 + 이등변 조건 + 외접원
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  friction_triggers: [F1, F3, F4]
  friction_verdict: "OK"

- id: 쎈-CM2-GM-도형이동-0481
  page: 79
  vendor_label: C 사고력의 기술
  category_type: C 사고력·서사
  summary: "당구대 (270×150) · 노란공 A(30, 90) · 빨간공 B(120, 60) · 벽 3회 반사 후 B 명중 · 노란공 이동 거리"
  category: 반사 = 대칭 · 여러 벽 반사 최단 거리
  M: {s: 5, k: 3, a: 2, t: 1}
  M_total: 11
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, signal_ref: [P2, P3], description: "반사각=입사각 → 벽에 대한 대칭점 사용 (거울 원리)"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "3회 반사 → 3번 대칭 · B의 최종 대칭상 위치 계산"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "A와 최종 대칭상 사이 직선거리 = 실제 이동거리"}
  insight_count: 3
  depth_score: 6.33
  base_star: 4
  star: 4
  premium: false
  rationale: "지문형 반사 대칭 RT(3) · CON(2)·EQV(2) · 상위권 정점급 · ★ 4"
  tier: star_4
  mechanism_primary: 다중 반사 = 대칭점 전개
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  friction_triggers: [F2]
  friction_verdict: "OK"

- id: 쎈-CM2-GM-도형이동-0488
  page: 80
  vendor_label: C 교육청 기출·유형13
  category_type: C 교육청
  summary: "A(-4,4), B(5,3) · x축 위 P, Q · y=1 위 R · AP+PR+RQ+QB 최솟값"
  category: 3점 반사 대칭 최소 경로
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, signal_ref: [P2, P3], description: "P·Q·R 세 자유점 최소 경로 → 각 축에 대한 반복 대칭"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P3], description: "A를 x축 대칭 A' → A'를 y=1 대칭 A'' 순차 · B를 x축 대칭 B'"
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "최소 = A''B'' 형태 직선거리 (전개 후)"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "대칭 순서 정확도 검증 (P→R→Q 순 축 매핑)"}
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: true
  rationale: "3자유점 순차 대칭 → 학평 정점 · RT(3)·CON(3) 진짜 depth 3 · P2·P3 신호 카드 2개 · depth_score 8.5 임계 도달 · 4통찰 (5 임계 미달)이나 depth 조건은 만족 → ★ 5 premium 후보. 단 premium 4조건 중 insight_count ≥ 5 미달로 최종 premium = false 판정 (엄격 적용). 판정: ★ 5 (premium false)."
  tier: star_4
  mechanism_primary: 다중 축 순차 대칭 최소 경로
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 3
  friction_triggers: [F1, F2, F3]
  friction_verdict: "OK"
```

**주**: 0488의 premium 판정 재확인 — schema.md §2.12 premium 4조건 (depth_score ≥ 8.5 + max=3 + insight_count ≥ 5 + P 카드 ≥ 2) 중 insight_count=4로 1조건 미달 → premium=false 최종 판정. star=5는 유지 (base 판정 기준).

---

## 표본 판정 요약 (20문)

| ★ | A단계 | B대표 | B ●상 | C사고력·교육청 | 합계 |
|---|---|---|---|---|---|
| ★ 1 | 3 | 0 | 0 | 0 | 3 |
| ★ 2 | 0 | 4 | 0 | 0 | 4 |
| ★ 3 | 0 | 4 | 1 | 0 | 5 |
| ★ 4 | 0 | 0 | 2 | 4 | 6 |
| ★ 5 | 0 | 0 | 0 | 2 | 2 |
| ★ 5 premium | 0 | 0 | 0 | 0 | 0 |
| **합계** | **3** | **8** | **3** | **6** | **20** |

**★ 5 후보 지목**: 
- 쎈-CM2-GM-도형이동-0480 (교육청 기출·이등변 삼각형 + 대칭 + 외접원) — depth_score 8.4로 premium 임계 근접 미달
- 쎈-CM2-GM-도형이동-0488 (교육청 기출·3자유점 순차 대칭 최소경로) — depth_score 8.5 도달, 4통찰 (5 미달)로 premium 최종 미부여

## 예측 종합 (전체 120문 요약 · 벤더 라벨 회귀)

| 구간 | 라벨 | 문항 수 | 예측 ★ 분포 |
|---|---|---|---|
| A단계 (0369~0404) | 기본다잡기 | 36 | ★ 1 × 33, ★ 2 × 3 |
| B단계 대표문제 (13문) | 유형01~13 대표 | 13 | ★ 2 × 6, ★ 3 × 7 |
| B단계 ● 중 (~40문) | 표준·중 | ~40 | ★ 2 × 15, ★ 3 × 25 |
| B단계 ● 상 (~10문) | 상 | ~10 | ★ 3 × 4, ★ 4 × 6 |
| B단계 서술형 (~5문) | 서술형 | ~5 | ★ 3 원 판정 |
| C단계 사고력 (~4문) | 사고력 아이콘 | 4 | ★ 4 × 3, ★ 5 × 1 |
| C단계 교육청 기출 (~4문) | 학평 기출 | 4 | ★ 4 × 2, ★ 5 × 2 |
| C단계 기타 (~8문) | 서술형·심화 | 8 | ★ 3 × 3, ★ 4 × 4, ★ 5 × 1 |

## 핵심 관찰

1. **자산화 유형 (대칭이동) 대량 반복** — B단계 유형05·06·07·08 (총 27문)이 x·y·원점·y=x·y=-x 대칭 반복 대입. depth 3 통찰이 있어도 유형이 자산화되어 effective_depth 2로 감쇠 → 시판 노출도 높은 star 2~3 대량 배출.
2. **평면좌표 대비 정점 문항 밀도 유사** — C단계 사고력·교육청 3~4문이 진성 ★ 5 후보. 도형이동은 특히 "대칭 = 반사 = 최단 경로" 자산화 유형이 강함 (0481·0488 등).
3. **★ 5 premium 임계 문항 부재** — 0488이 premium 4조건 중 3조건 (depth_score·max·P 카드) 만족하나 insight_count = 4로 5 임계 미달. 순수 도형이동 단원은 premium 배출 어려움 확인.
4. **저노출 유형 게이트 (v3.9)** — 표본 20문 중 XU/SYM/PD 매칭은 0474·0480 (PD)뿐. 도형이동 단독으로는 XU·SYM 자연 배출이 드물어 별도 문제 설계에서 다른 소단원 결합 유도 필요.
5. **친숙도 (X 축)** — 반사·대칭 시각화는 상위권도 실수 트리거 (F2·F3). 이동 조합 (0448·0449·0464)에서 부호·순서 실수 함정 유의.
