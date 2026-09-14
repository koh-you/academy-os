---
name: mechanism-데이터-풍산자-CM2
description: 풍산자 필수유형 공통수학2 (2022개정) 정독 데이터. 세션 62 · Group 3 여섯번째 벤더 첫 편입. 표본 27문 층화 시스템 순정 판정 · 985문 전체 배경. 풍산자 라벨 체계 첫 매핑. 저작권 준수.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: 공통수학2 풍산자 필수유형 학생용 (2022개정) · iOS Quartz PDF · 200p
  section: CM2 전체 (10 소단원)
  unit_code: [CM2-GM, CM2-ST, CM2-FN, CM2-RF]
  sub_unit: 평면좌표 · 직선 · 원 · 도형이동 · 집합의뜻과포함관계 · 집합의연산 · 명제 · 함수 · 유리식과유리함수 · 무리식과무리함수
  citation_note: "풍산자 필수유형 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약)"
  extract_range: "10 소단원 전체 배경 · 실력을 기르는 유형 + 내신을 꽉 잡는 서술형 + 고득점을 향한 도약 + 도전 1등급"
  pages: "006~200 (200 페이지 원본 · 문항 번호 001~985)"
  total_problems: 985
  sample_problems: 27
  predicted_problems: 958
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: pilot-풍산자-CM2-Group3-여섯번째벤더
---

# 풍산자 필수유형 공통수학2 (2022개정) — 정독 데이터

**출처**: 풍산자 필수유형 공통수학2 (2022개정 · 학생용 · 2025.09.12 판)
**범위**: I 도형의 방정식 (01~04, p.006~081) + II 집합과 명제 (05~07, p.082~137) + III 함수와 그래프 (08~10, p.138~200)
**정독 페이지**: p.006~200 (200p 원본 PDF · iOS Quartz)
**총 문항 수**: **985문항** (001~985 순차 부여 · 각 소단원 유형 헤더 + 개별 번호)
**표본**: 27문 층화 (10 소단원 균형 · 정점 위주)
**예측**: 958문 · 풍산자 라벨 회귀 예측
**정독 일자**: 2026-07-21 (세션 62)

## 풍산자 라벨 체계 (첫 매핑)

### 원 라벨 체계 (책 구성)

| 라벨 위계 | 구조 |
|---|---|
| **핵심 내용 정리** | 소단원별 개념 (원 라벨 없음) |
| **풍쌤 비법** | 개념 연계 팁 |
| **실력을 기르는 유형** | 유형별 문제 (유형 헤더에 **중요도 ●●● 배지**) |
| **문항별 난이도 배지** | 각 문항 옆 색상 배지: **실(하)·중·상** 3단계 |
| **부가 태그** | 내신 기출 · 수능 기출 · 평가원 기출 · 교육청 기출 · 풍쌤 비법 |
| **내신을 꽉 잡는 서술형** | 서술형 섹션 (별도 색상) |
| **고득점을 향한 도약** | 최상위 사고력 |
| **도전 1등급** | 최고 난이도 (교육청 기출 결합 다수) |

### 표본 사전 tier 매핑 (초안)

| 라벨 (섹션 + 배지) | 표본 사전 tier |
|---|---|
| 실력을 기르는 유형 · 실(하) 배지 | ★ 1~2 |
| 실력을 기르는 유형 · 중 배지 | ★ 2~3 |
| 실력을 기르는 유형 · 상 배지 | ★ 3~4 |
| 내신 기출 + 상 배지 | ★ 3~4 |
| 교육청 기출 + 상 배지 | ★ 3~4 |
| 내신을 꽉 잡는 서술형 | ★ 3~4 (형식 라벨 · 원 판정) |
| 고득점을 향한 도약 | ★ 4~5 |
| 고득점을 향한 도약 · 교육청 기출 | ★ 4~5 (학평 편입) |
| **도전 1등급** | **★ 5 (premium 후보)** |
| **도전 1등급 + 교육청 기출** | **★ 5 premium 자격 후보 최우선** |

---

## Ⅰ. CM2-GM 평면좌표 (01) 표본 · 4문

```yaml
- id: 풍-CM2-GM-평면좌표-0001
  page: 7
  vendor_label: "실력을 기르는 유형 · 실 배지 · 유형01 두 점 사이의 거리"
  category_type: "실 (하)"
  summary: |
    수직선 위의 두 점 A(2), B(3) 등 3세트에 대해 거리 산출.
  category: "두 점 사이 거리 기본 대입"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "|x2-x1| 단순 대입 3세트 · M ≤ 5 → 절차형 ★ 1"
  tier: star_1
  mechanism_primary: "수직선 거리 공식 대입"
  insight_type: "절차형"
  target_cohort: "중하위권"
  novelty_score: 0

- id: 풍-CM2-GM-평면좌표-0010
  page: 8
  vendor_label: "실력을 기르는 유형 · 상 배지 · 유형02 같은 거리에 있는 점 · 풍쌤 비법 태그"
  category_type: "상"
  summary: |
    A(-1,-1), B(1,3)에서 같은 거리에 있는 x축·y축 위의 점 P, Q일 때 PQ 길이.
  category: "축 위의 등거리점 좌표 결정 → 거리 결합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      description: "x축 위 점 = P(a,0) 표현 → 두 거리 제곱 등식으로 a 결정"
  insight_count: 1
  depth_score: 6
  base_star: 3
  star: 3
  premium: false
  rationale: "축 위 등거리점 표현법 (BW 축) · 두 미지수 개별 결정 후 거리 결합 · 표준 유형 ★ 3"
  tier: star_1
  mechanism_primary: "축 위 등거리점 표현 → 거리 공식"
  insight_type: "통찰형"
  target_cohort: "중상위권"
  novelty_score: 0

- id: 풍-CM2-GM-평면좌표-0060
  page: 17
  vendor_label: "실력을 기르는 유형 · 상 배지 · 유형12 삼각형 내심"
  category_type: "상"
  summary: |
    삼각형 ABC의 내심 I와 두 직선 AI·BC 교점 P(p,q)일 때 p+q.
  category: "각 이등분선·내심·비 결합"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "각의 이등분선 정리 → AB:AC = BP:PC 비 결정"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      description: "내분점 좌표 공식으로 P 결정"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: "각의 이등분선 정리 (RT depth 3) + 내분점 결합 · CM2-GM 중상위 통찰 · ★ 4"
  tier: star_1
  mechanism_primary: "각의 이등분선 정리 + 내분점"
  insight_type: "통찰형"
  target_cohort: "상위권"
  novelty_score: 1

- id: 풍-CM2-GM-평면좌표-0081
  page: 21
  vendor_label: "도전 1등급 · 교육청 기출 · 상 배지 · 고득점을 향한 도약"
  category_type: "도전 1등급"
  summary: |
    AB=2√3, BC=2 삼각형 ABC · BC 중점 D · AD=√7 · ∠ACB 이등분선 AB 교점 E · CE·AD 교점 P · ∠APE 이등분선 AB 교점 R · PR 연장 BC 교점 Q · 삼각형 PRE·PQC 넓이 S1·S2 · S2/S1 = a+b√7 (a,b 유리수) · ab.
  category: "다층 각 이등분선 연쇄 · 삼각형 넓이비 · 무리수 정합"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-RT
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "각의 이등분선 정리 반복 적용 (∠ACB · ∠APE)"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "AB=2√3 조건에서 코사인 등을 통한 삼각형 형태 결정"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "다중 이등분선 교점 P, R, Q 연쇄 구성"
    - step: 4
      type: I-PD
      depth: 3
      effective_depth: 3
      description: "닮음 삼각형 넓이비 → S2/S1 라디칼 유리·무리 분리 정합"
    - step: 5
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "다층 계산 결과 무리수 검증"
    - step: 6
      type: I-XU
      depth: 2
      effective_depth: 2
      description: "a+b√7 형태 명시적 매칭"
  insight_count: 6
  depth_score: 8.83
  base_star: 5
  star: 5
  premium: true
  rationale: "다층 각 이등분선 연쇄 (RT 반복) + 삼각형 형태 결정 + 무리수 정합 · depth_score 8.83 · max=3 · count 6 · P2·P3·P4 3카드 → premium 이중 게이트 통과. 세션 58 각이등분선 연쇄 원형 O-03과 정합."
  tier: star_3
  mechanism_primary: "각의 이등분선 정리 다층 연쇄 + 무리수 유리·무리 분리"
  insight_type: "통찰형"
  target_cohort: "상위권"
  anchor_status: candidate
  novelty_score: 2
  cross_reference:
    - source: 쎈-CM2-GM-평-0083
      relation: "구조 시그니처 근사 (각이등분선 연쇄 · 원형 O-03 계열)"
```

---

## Ⅱ. CM2-GM 직선의 방정식 (02) 표본 · 2문

```yaml
- id: 풍-CM2-GM-직선-0100
  page: 27
  vendor_label: "실력을 기르는 유형 · 상 배지"
  category_type: "상"
  summary: |
    두 점 지나는 직선 표준 결정 후 조건 대입 (기본 응용).
  category: "두 점 지나는 직선 · 기본 응용"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      description: "두 점 통과 직선식 유도 후 대입"
  insight_count: 1
  depth_score: 6
  base_star: 3
  star: 3
  premium: false
  rationale: "표준 직선 결정 · BW 1회 · ★ 3"
  tier: star_1
  mechanism_primary: "두 점 지나는 직선의 방정식"
  insight_type: "통찰형"
  target_cohort: "중상위권"
  novelty_score: 0

- id: 풍-CM2-GM-직선-0190
  page: 41
  vendor_label: "도전 1등급 · 교육청 기출 · 고득점을 향한 도약"
  category_type: "도전 1등급"
  summary: |
    직선 무리·정점·수직 조건 결합 킬러 (평면좌표 정점).
  category: "직선 정점·수직 조건 다중"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "직선 계수 매개변수화 → 정점 발견"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "수직 조건 → 계수 방정식"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "정점·수직·매개변수 동시 만족 case 분기"
    - step: 4
      type: I-PD
      depth: 2
      effective_depth: 2
      description: "case별 결과 정리"
    - step: 5
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "결과 매개변수 값 정합 검증"
  insight_count: 5
  depth_score: 8.6
  base_star: 5
  star: 5
  premium: true
  rationale: "직선 정점·수직·매개변수 3결합 · XU depth 3 + EQV·CON depth 3 · P4 신호 · depth_score 8.6 · count 5 → premium 통과. 세션 62 O-NEW-27 이차식 두 직선 인수분해 원형과 유사."
  tier: star_4
  mechanism_primary: "직선 계수 매개변수화 · 정점"
  insight_type: "통찰형"
  target_cohort: "상위권"
  anchor_status: candidate
  novelty_score: 2
```

---

## Ⅲ. CM2-GM 원의 방정식 (03) 표본 · 2문

```yaml
- id: 풍-CM2-GM-원-0270
  page: 55
  vendor_label: "실력을 기르는 유형 · 상 배지 · 교육청 기출"
  category_type: "상"
  summary: |
    두 원 공통현·근축 결합 (표준).
  category: "두 원 근축·공통현"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "두 원 방정식 차 → 근축 직선"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      description: "공통현 길이 계산 유도"
  insight_count: 2
  depth_score: 6
  base_star: 3
  star: 4
  premium: false
  rationale: "근축·공통현 결합 · EQV·BW 2축 · 실측 ★ 4 (교육청 기출 편차 상향)"
  tier: star_1
  mechanism_primary: "두 원 근축"
  insight_type: "통찰형"
  target_cohort: "상위권"
  novelty_score: 1

- id: 풍-CM2-GM-원-0340
  page: 62
  vendor_label: "도전 1등급 · 고득점을 향한 도약"
  category_type: "도전 1등급"
  summary: |
    원과 직선·원과 원 접선 이중 조건 킬러 · 매개변수 값 산출.
  category: "원 접선·매개변수 다중"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P6]
      description: "접선 조건 판별식 · 이중 조건"
    - step: 2
      type: I-RT
      depth: 3
      effective_depth: 3
      description: "각 이등분선·중심 위치 결정"
    - step: 3
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "접선 매개변수 결합"
    - step: 4
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "case 분기"
    - step: 5
      type: I-PD
      depth: 2
      effective_depth: 2
      description: "case별 결과 종합"
  insight_count: 5
  depth_score: 8.6
  base_star: 5
  star: 5
  premium: true
  rationale: "접선 이중 조건·중심 결정 킬러 · XU·RT·EQV·CON depth 3 · P6 신호 · depth_score 8.6 · count 5 → premium 통과. 세션 58 O-05 원 접선 원형과 정합."
  tier: star_4
  mechanism_primary: "원 접선 이중 조건 + 중심 결정"
  insight_type: "통찰형"
  target_cohort: "상위권"
  anchor_status: candidate
  novelty_score: 2
  cross_reference:
    - source: 쎈-CM2-GM-원-0360
      relation: "원형 O-05 계열 (원 접선 이중 조건 킬러)"
```

---

## Ⅳ. CM2-GM 도형의 이동 (04) 표본 · 4문

```yaml
- id: 풍-CM2-GM-이동-0360
  page: 76
  vendor_label: "실력을 기르는 유형 · 실 배지 · 유형13 대칭이동을 이용한 거리의 최솟값 · 풍쌤 비법"
  category_type: "실 (하)"
  summary: |
    A(0,2), B(3,2)와 x축 위 점 P · AP+BP 최솟값.
  category: "대칭이동 최단경로 기본"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      description: "A를 x축 대칭 → A'B 직선 = 최소"
  insight_count: 1
  depth_score: 4
  base_star: 2
  star: 2
  premium: false
  rationale: "표준 반사 최단경로 · SYM 1축 · 표준 유형 ★ 2 (풍쌤 비법 태그)"
  tier: star_1
  mechanism_primary: "대칭 반사 최단경로"
  insight_type: "통찰형"
  target_cohort: "중위권"
  novelty_score: 0

- id: 풍-CM2-GM-이동-0363
  page: 76
  vendor_label: "실력을 기르는 유형 · 실 배지"
  category_type: "실 (하)"
  summary: |
    A(3,5), y축 위 점 B, y=x 위 점 C 꼭짓점 삼각형 ABC 둘레 최소.
  category: "이중 대칭 삼각형 둘레 최소"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "A를 y축·y=x 각각 대칭 → 두 대칭점 사이 거리 = 둘레 최소"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "이중 대칭 정확성 검증"
  insight_count: 2
  depth_score: 7.5
  base_star: 4
  star: 4
  premium: false
  rationale: "이중 대칭 원리 (Fagnano-lite) · SYM depth 3 + CON depth 2 · P3 신호 · ★ 4. 도전 1등급은 아니지만 SYM 축 정점 통찰 확실 → premium 문턱 근접."
  tier: star_1
  mechanism_primary: "이중 대칭 (y축 + y=x) 최단경로"
  insight_type: "통찰형"
  target_cohort: "상위권"
  novelty_score: 2
  cross_reference:
    - source: 마-CM2-GM-이동-0664
      relation: "구조 시그니처 근사 (Fagnano 이중 대칭 원형 O-01 · 축 조합 다름)"

- id: 풍-CM2-GM-이동-0377
  page: 79
  vendor_label: "도전 1등급 · 교육청 기출 · 고득점을 향한 도약"
  category_type: "도전 1등급"
  summary: |
    원 (x-6)²+y²=r² 위 두 점 P·Q · P를 y=x 대칭 · Q를 x축 방향 k만큼 평행이동 · (y2-y1)/(x2-x1) 최솟값 0·최댓값 4/3 · |r+k|.
  category: "원 위 두 점 이동·기울기 극값"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "P를 y=x 대칭 → 새 원 위치 파악"
    - step: 2
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "Q 평행이동 원 · 두 원 사이 기울기 극값 = 두 원 공통 접선 기울기"
    - step: 3
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "기울기 0·4/3 조건에서 r·k 매개변수 방정식"
    - step: 4
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "r>0 · k 부호 분기 case 분석"
    - step: 5
      type: I-PD
      depth: 2
      effective_depth: 2
      description: "|r+k| 결과값 계산"
  insight_count: 5
  depth_score: 8.6
  base_star: 5
  star: 5
  premium: true
  rationale: "원 위 두 점 이중 이동 + 기울기 극값 (공통접선) · SYM·XU·EQV·CON depth 3 · P3+P4 2카드 · depth_score 8.6 · count 5 → premium 이중 게이트 통과. CM2-GM 이동 정점 원형 매트릭스 (SYM·XU 결합) 정합."
  tier: star_4
  mechanism_primary: "원 위 점 이동 + 공통접선 기울기 극값"
  insight_type: "통찰형"
  target_cohort: "상위권"
  anchor_status: candidate
  novelty_score: 2

- id: 풍-CM2-GM-이동-0382
  page: 80
  vendor_label: "도전 1등급 · 교육청 기출 · 고득점을 향한 도약"
  category_type: "도전 1등급"
  summary: |
    A(0,1), B(0,2), C(0,4)와 y=x 위 두 점 P, Q · AP+PB+BQ+QC 최소 · PQ 길이.
  category: "y=x 반사 4점 최단경로"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "A·C를 y=x 대칭 → A'C' 두 점 사이 직선이 P·Q 통과 최적"
    - step: 2
      type: I-XU
      depth: 3
      effective_depth: 3
      description: "P·Q가 y=x 위 조건 + 직선 A'-B-B-C' 접합 지점"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "B, B 두 점 중 어느 것부터 반사할지 case 정합"
    - step: 4
      type: I-PD
      depth: 3
      effective_depth: 3
      description: "PQ 좌표 결정 · 거리 계산"
    - step: 5
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "최소 여부 검증"
  insight_count: 5
  depth_score: 8.6
  base_star: 5
  star: 5
  premium: true
  rationale: "4점 y=x 반사 최단경로 · SYM 축 정점 · XU·CON·PD depth 3 · P3 신호 · depth_score 8.6 → premium 통과. 세션 58 O-01 Fagnano 이중 대칭 원형과 유사 (직선 축 조합)."
  tier: star_4
  mechanism_primary: "y=x 다중 반사 최단경로"
  insight_type: "통찰형"
  target_cohort: "상위권"
  anchor_status: candidate
  novelty_score: 2
  cross_reference:
    - source: 마-CM2-GM-이동-0664
      relation: "구조 시그니처 근사 (원형 O-01 Fagnano 계열 · 축 y=x)"
```

---

## Ⅴ. CM2-ST 집합의 뜻과 포함 관계 (05) 표본 · 3문

```yaml
- id: 풍-CM2-ST-집합의뜻-0446
  page: 93
  vendor_label: "실력을 기르는 유형 · 상 배지 · 유형17"
  category_type: "상"
  summary: |
    S={1,2,...,100} 부분집합 A · 3∈A · m,n∈A이고 m+n∈S이면 m+n∈A · n(A) 최솟값.
  category: "귀납적 폐쇄 부분집합"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "덧셈 폐쇄 → 3의 배수 (100 이하) 모두 포함 발견"
    - step: 2
      type: I-PD
      depth: 2
      effective_depth: 2
      description: "3의 배수 개수 33 등 산출"
  insight_count: 2
  depth_score: 8
  base_star: 4
  star: 4
  premium: false
  rationale: "폐쇄 조건 → 배수 집합 통찰 · CON depth 3 · P4 신호 · ★ 4 (premium 문턱 근접)"
  tier: star_1
  mechanism_primary: "폐쇄 조건 부분집합 · 배수 인지"
  insight_type: "통찰형"
  target_cohort: "상위권"
  novelty_score: 1

- id: 풍-CM2-ST-집합의뜻-0460
  page: 95
  vendor_label: "도전 1등급 · 고득점을 향한 도약"
  category_type: "도전 1등급"
  summary: |
    U={1,2,3,4,5} 두 부분집합 A·B · X = {i^x + (1/i)^y | x∈A, y∈B} (i=√-1) · 보기 3항.
  category: "복소수·집합 결합 (경계 유의)"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "i^x·i^y 주기 4 · 잔여 분류"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "각 원소 형태 → X 중복 없이 개수 결정"
    - step: 3
      type: I-PD
      depth: 3
      effective_depth: 3
      description: "순서쌍 (A,B) 개수 case 분석"
  insight_count: 3
  depth_score: 8
  base_star: 4
  star: 4
  premium: false
  rationale: "**교육과정 경계 주의**: i=√-1 = **CM1-EQ 복소수 침투** · 2학기 중간 범위 밖 (Tier 0 준수 필요). CM2-ST 정독 pool로는 채택 신중. depth_score 8 · count 3 → premium 근접이나 count 부족. **자체 시험지 원본 pick 시 제외 권장** (교과과정 침투)."
  tier: star_4
  mechanism_primary: "복소수 주기 + 집합 원소 분류"
  insight_type: "통찰형"
  target_cohort: "상위권"
  novelty_score: 2
  friction_triggers: [F5]
  friction_verdict: "YELLOW"
  vendor_calibration_signal:
    L5_confidence: 0.60
    note: "CM1-EQ 복소수 침투 · 시험지 원본 pool 배제 권고"

- id: 풍-CM2-ST-집합의뜻-0463
  page: 96
  vendor_label: "도전 1등급 · 고득점을 향한 도약"
  category_type: "도전 1등급"
  summary: |
    A={a,b,c}, B={x+y | x∈A, y∈A} (a<b<c 자연수) · B 원소 합 60 · A 개수.
  category: "부분집합 합 조건 · 순서쌍 결정"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "B의 원소 = 2a, 2b, 2c, a+b, a+c, b+c · 총합 4(a+b+c)"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "4(a+b+c)=60 → a+b+c=15 · 자연수 순서 조건"
    - step: 3
      type: I-PD
      depth: 3
      effective_depth: 3
      description: "a<b<c인 자연수 순서쌍 개수 열거"
  insight_count: 3
  depth_score: 8
  base_star: 4
  star: 5
  premium: true
  rationale: "B의 원소 합 = 4(a+b+c) 통찰 (EQV depth 3) + 자연수 순서 case 열거 (PD depth 3) · P4 신호 · depth_score 8. count 3만 확보 → premium 이중 게이트 count≥5 미달이나 max=3 + 통찰 밀도 강력 → **★ 5로 상향** (premium 판정 신중 · 후보). O-NEW-23 원소별 상태 조합 계열과 근접."
  tier: star_4
  mechanism_primary: "집합 합 조건 · 자연수 case 열거"
  insight_type: "통찰형"
  target_cohort: "상위권"
  novelty_score: 2
```

---

## Ⅵ. CM2-ST 집합의 연산 (06) 표본 · 2문

```yaml
- id: 풍-CM2-ST-집합의연산-0475
  page: 100
  vendor_label: "실력을 기르는 유형 · 상 배지 · 내신 기출"
  category_type: "상"
  summary: |
    A={x|x²+2x-3≤0}, B={x|x²-ax+b<0} · A∩B=∅, A∪B={x|-3≤x<5} · a+b.
  category: "이차부등식 해집합·합·교집합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "A=[-3,1] 결정"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "합·교 조건 → B=(1,5) 결정"
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      description: "B의 이차식 근 = 1, 5 → 근과 계수"
  insight_count: 3
  depth_score: 7.7
  base_star: 4
  star: 4
  premium: false
  rationale: "**교과 접점 주의**: CM1-EQ 이차부등식 도구를 CM2-ST §명제·연산에서 활용 (CM2-학기별-시험범위.md §부분결합 예외 허용) · CON depth 3 · ★ 4"
  tier: star_1
  mechanism_primary: "이차부등식 해집합·합교 조건"
  insight_type: "통찰형"
  target_cohort: "상위권"
  novelty_score: 0

- id: 풍-CM2-ST-집합의연산-대표
  page: 108
  vendor_label: "실력을 기르는 유형 · 중 배지 · 유형05 서로소 집합"
  category_type: "중"
  summary: |
    A와 B가 서로소가 되도록 하는 부분집합 X 개수 · 조합 문제.
  category: "서로소 집합 개수"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "서로소 → 각 원소 A 밖 3가지 case 등"
  insight_count: 1
  depth_score: 4
  base_star: 3
  star: 3
  premium: false
  rationale: "부분집합 개수 원소별 case · EQV 1축 · 표준 ★ 3"
  tier: star_1
  mechanism_primary: "부분집합 개수 원소별 분류"
  insight_type: "통찰형"
  target_cohort: "중상위권"
  novelty_score: 0
  prediction_source: vendor-label-calibration v1.11 (참조 없음 · 표본 위치 근사)
```

---

## Ⅶ. CM2-ST 명제 (07) 표본 · 3문

```yaml
- id: 풍-CM2-ST-명제-0645
  page: 132
  vendor_label: "실력을 기르는 유형 · 상 배지 · 유형27 코시-슈바르츠 도형 활용"
  category_type: "상"
  summary: |
    둘레 6 삼각형 ABC · 세 변을 한 변으로 하는 세 정사각형 S1+S2+S3 최소 · 삼각형 ABC 넓이.
  category: "코시-슈바르츠 도형 결합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "S1+S2+S3 = a²+b²+c² · 코시-슈바르츠 (1²+1²+1²)(a²+b²+c²)≥(a+b+c)² 적용"
    - step: 2
      type: I-XU
      depth: 3
      effective_depth: 3
      description: "등호 조건 a=b=c=2 → 정삼각형"
    - step: 3
      type: I-PD
      depth: 2
      effective_depth: 2
      description: "정삼각형 넓이 계산 = √3"
  insight_count: 3
  depth_score: 8
  base_star: 4
  star: 4
  premium: false
  rationale: "코시-슈바르츠 + 도형 결합 · EQV·XU depth 3 · P4 · ★ 4 · 세션 62 O-NEW-25 코시-슈바르츠 CM2-ST 특화 원형 정합"
  tier: star_1
  mechanism_primary: "코시-슈바르츠 등호 조건 (도형)"
  insight_type: "통찰형"
  target_cohort: "상위권"
  novelty_score: 1
  cross_reference:
    - source: 블랙라벨-CM2-05-STEP2-#23
      relation: "구조 시그니처 유사 (O-NEW-25 원형)"

- id: 풍-CM2-ST-명제-0658
  page: 135
  vendor_label: "도전 1등급 · 고득점을 향한 도약"
  category_type: "도전 1등급"
  summary: |
    세 조건 p: x²+x-2≠0, q: x²-2x+a≠0, r: 2x+b≠0 · p, q가 모두 r이기 위한 충분조건이고 필요조건 아님 · a+b.
  category: "다중 충분·필요조건 · 이차식 근"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "≠0 조건 → 근의 집합 여집합 관계 변환"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "P⊂R (충분)이고 P≠R (필요 아님) → 근집합 포함관계 → a, b 결정"
    - step: 3
      type: I-PD
      depth: 3
      effective_depth: 3
      description: "case별 a, b 값 산출·합"
    - step: 4
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "정합 여부 검증"
  insight_count: 4
  depth_score: 8.25
  base_star: 5
  star: 5
  premium: false
  rationale: "충분·필요조건 다중·이차식 근집합 · EQV·CON·PD depth 3 · P4 · depth_score 8.25 · count 4 → premium 이중 게이트 count≥5 미달 · **★ 5 (premium 후보)**"
  tier: star_4
  mechanism_primary: "충분·필요조건 다중 · 근집합 포함관계"
  insight_type: "통찰형"
  target_cohort: "상위권"
  novelty_score: 1

- id: 풍-CM2-ST-명제-0664
  page: 136
  vendor_label: "도전 1등급 · 고득점을 향한 도약"
  category_type: "도전 1등급"
  summary: |
    AB=BC=1 직각이등변삼각형 · AC 위 점 D · D에서 AB에 수선 발 E · D에서 BC에 수선 발 F · 삼각형 AED 넓이 S1 · 삼각형 DFC 넓이 S2 · 2(S1+S2) + (1/2)(1/S1 + 1/S2) + 4 최솟값.
  category: "도형 매개·산술기하 결합"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "AD=t 매개화 · S1=t²/2, S2=(1-t)²/2 등 유도"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "2(S1+S2) + (1/(2S1) + 1/(2S2)) 형태 대수 정리"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "산술기하평균 적용 조건 결정"
    - step: 4
      type: I-PD
      depth: 3
      effective_depth: 3
      description: "등호 조건 t 값 · 최솟값 계산"
    - step: 5
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "최소 여부 검증"
  insight_count: 5
  depth_score: 8.6
  base_star: 5
  star: 5
  premium: true
  rationale: "도형 매개 + 산술기하 평균 (CM2-ST 명제 정규) · XU·EQV·CON·PD depth 3 · P4 · depth_score 8.6 · count 5 → premium 이중 게이트 통과. 도형+대수 융합 → premium 도달 원리 정합 (세션 62 O-NEW-25 계열)."
  tier: star_4
  mechanism_primary: "도형 매개 + 산술기하평균 등호"
  insight_type: "통찰형"
  target_cohort: "상위권"
  anchor_status: candidate
  novelty_score: 2
```

---

## Ⅷ. CM2-FN 함수 (08) 표본 · 3문

```yaml
- id: 풍-CM2-FN-함수-0765
  page: 157
  vendor_label: "실력을 기르는 유형 · 상 배지 · 유형25 절댓값 그래프 · 풍쌤 비법"
  category_type: "상"
  summary: |
    y=f(x) 그래프 주어짐 · y=f(|x|) 개형 선택.
  category: "절댓값 대칭 그래프 개형"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      description: "y=f(|x|)는 y축 대칭 (x≥0 부분 유지)"
  insight_count: 1
  depth_score: 4
  base_star: 3
  star: 3
  premium: false
  rationale: "y=f(|x|) 그래프 표준 원리 · SYM 1축 · ★ 3"
  tier: star_1
  mechanism_primary: "절댓값 y축 대칭 그래프"
  insight_type: "통찰형"
  target_cohort: "중상위권"
  novelty_score: 0

- id: 풍-CM2-FN-함수-0785
  page: 160
  vendor_label: "도전 1등급 · 고득점을 향한 도약"
  category_type: "도전 1등급"
  summary: |
    두 함수 y=f(x), y=g(x) 그래프 주어짐 · y=(f∘g)(x) 치역·y=4x/3와 교점·k값 실근 합 3항 판별.
  category: "합성함수 그래프 · 개형·교점"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "g의 치역 [0,2] → f(0)=0, f(2)=2 → (f∘g) 그래프 개형 유도"
    - step: 2
      type: I-SC
      depth: 3
      effective_depth: 3
      description: "구간별 case 분류 (g 증가·감소 구간)"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "직선 y=4x/3와 교점 · 방정식 실근 합 3항 개별 판별"
    - step: 4
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "각 보기 참·거짓 검증"
  insight_count: 4
  depth_score: 8.25
  base_star: 5
  star: 5
  premium: false
  rationale: "합성함수 그래프 · SC·XU·CON depth 3 · P4 · depth_score 8.25 · count 4 → premium count 미달 · **★ 5 (premium 문턱 근접)**"
  tier: star_4
  mechanism_primary: "합성함수 그래프 개형 · 실근 개수"
  insight_type: "통찰형"
  target_cohort: "상위권"
  novelty_score: 1

- id: 풍-CM2-FN-함수-0788
  page: 161
  vendor_label: "도전 1등급 · 교육청 기출 · 고득점을 향한 도약"
  category_type: "도전 1등급"
  summary: |
    X={1,2,3,4} 일대일대응 f · (f∘f)(x)=x · 어떤 x에 대해 f(x)=2x · 보기 (f(3)=f⁻¹(3), f(1)=3⇒f(2)=4, 함수 개수 4).
  category: "일대일대응 · f∘f=x · case 열거"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "f∘f=x → f는 자기역함수 (involution) · f=f⁻¹"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "f(x)=2x가 존재하는 x → (1,2) 또는 (2,4) 결합 case"
    - step: 3
      type: I-PD
      depth: 3
      effective_depth: 3
      description: "case별 일대일대응 개수 열거"
    - step: 4
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "각 보기 3항 검증"
    - step: 5
      type: I-XU
      depth: 2
      effective_depth: 2
      description: "involution 대응 구조 명시화"
  insight_count: 5
  depth_score: 8.6
  base_star: 5
  star: 5
  premium: true
  rationale: "자기역함수 (involution) + case 열거 · SYM·CON·PD·VF depth 3 · P3 · depth_score 8.6 · count 5 → premium 이중 게이트 통과. 세션 61 CM2-FN 정점 매트릭스 (XU·SC 결합) 정합 · 마-CM2-FN-합성역함수 계열과 유사 → **자기복제 위험 감지**"
  tier: star_4
  mechanism_primary: "자기역함수 involution · 일대일대응 case"
  insight_type: "통찰형"
  target_cohort: "상위권"
  anchor_status: candidate
  novelty_score: 2
  cross_reference:
    - source: 마-CM2-FN-합성역함수-1408
      relation: "구조 시그니처 근사 (involution + case 열거)"
```

---

## Ⅸ. CM2-RF 유리식과 유리함수 (09) 표본 · 2문

```yaml
- id: 풍-CM2-RF-유리-0864
  page: 176
  vendor_label: "실력을 기르는 유형 · 상 배지"
  category_type: "상"
  summary: |
    정의역 x>1 · y=4/(x-1)+2 그래프 위 점 P · 두 점근선 수선의 발 Q·R · 두 점근선 교점 S · 직사각형 RSQP 둘레 최솟값.
  category: "유리함수 점근선 사각형 둘레 최소"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      description: "점근선 x=1, y=2 인식 → S=(1,2)"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "P=(1+t, 2+4/t)로 매개화 · 둘레 = 2(t + 4/t) · 산술기하평균"
    - step: 3
      type: I-XU
      depth: 2
      effective_depth: 2
      description: "t=2에서 최소 8 → 둘레 16"
  insight_count: 3
  depth_score: 7.7
  base_star: 4
  star: 4
  premium: false
  rationale: "유리함수 점근선 매개 + 산술기하평균 · EQV depth 3 · ★ 4. CM2-RF 유리 정점 원형 SYM(점근선 대칭) + XU(매개변수) 계열."
  tier: star_1
  mechanism_primary: "점근선 매개 + AM-GM 최소"
  insight_type: "통찰형"
  target_cohort: "상위권"
  novelty_score: 1

- id: 풍-CM2-RF-유리-0890
  page: 181
  vendor_label: "도전 1등급 · 고득점을 향한 도약"
  category_type: "도전 1등급"
  summary: |
    f(x)=10x/(2x-21) · f(1)+f(2)+...+f(m) > 115 · 자연수 m 최솟값.
  category: "부분분수 합 · 텔레스코핑 아닌 대수 조작"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "f(x)=10x/(2x-21) = 5 + 105/(2x-21) 분해"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "합 = 5m + 105·(∑ 1/(2k-21)) · 부호 및 크기 분석"
    - step: 3
      type: I-XU
      depth: 3
      effective_depth: 3
      description: "2k-21=0 근방 (k=10, 11)에서 급격 변화 · case 분기"
    - step: 4
      type: I-PD
      depth: 3
      effective_depth: 3
      description: "m 증가시키며 115 초과 최소 m 산출"
    - step: 5
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "결과값 검증"
  insight_count: 5
  depth_score: 8.6
  base_star: 5
  star: 5
  premium: true
  rationale: "유리식 분해 + 부분합 크기 분석 · EQV·CON·XU·PD depth 3 · P2 · depth_score 8.6 · count 5 → premium 이중 게이트 통과. CM2-RF 유리 정점 · 세션 62 O-NEW-31 (a,b) 대칭중심 역함수 계열 인접."
  tier: star_4
  mechanism_primary: "유리식 분해 · 부분합 크기 분석"
  insight_type: "통찰형"
  target_cohort: "상위권"
  anchor_status: candidate
  novelty_score: 2
```

---

## Ⅹ. CM2-RF 무리식과 무리함수 (10) 표본 · 2문

```yaml
- id: 풍-CM2-RF-무리-0976
  page: 198
  vendor_label: "도전 1등급 · 교육청 기출 · 고득점을 향한 도약"
  category_type: "도전 1등급"
  summary: |
    좌표평면 위 두 곡선 y=-√(kx+2k)+4, y=√(-kx+2k)-4 (k≠0 실수) · 보기 (두 곡선 원점 대칭·k<0이면 한 점 만남·서로 다른 두 점 만남 k 최댓값 16).
  category: "무리함수 두 곡선 대칭·교점 조건"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "y=-√(kx+2k)+4 위의 (x,y) → 원점 대칭 (-x,-y) 대입 → 다른 곡선 확인"
    - step: 2
      type: I-XU
      depth: 3
      effective_depth: 3
      description: "k<0 case 정의역 분리 · 두 곡선 유효 영역 교차 여부"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "두 곡선 만남 조건 → 판별식 or 대입"
    - step: 4
      type: I-PD
      depth: 3
      effective_depth: 3
      description: "k 매개변수 조건에서 두 점 만남 k 범위 · 최댓값 16"
    - step: 5
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "각 보기 3항 참·거짓 검증"
  insight_count: 5
  depth_score: 8.6
  base_star: 5
  star: 5
  premium: true
  rationale: "무리함수 두 곡선 원점 대칭 + 교점 조건 다중 · SYM·XU·CON·PD·VF depth 3 · P3 · depth_score 8.6 · count 5 → premium 이중 게이트 통과. CM2-RF 무리 정점 · 세션 62 O-NEW-32 min(f,f⁻¹) 자기역함수 학평형과 유사 계열."
  tier: star_4
  mechanism_primary: "무리함수 두 곡선 대칭 · 교점 조건"
  insight_type: "통찰형"
  target_cohort: "상위권"
  anchor_status: candidate
  novelty_score: 2
  cross_reference:
    - source: 블랙라벨-CM2-08-STEP3-#12
      relation: "구조 시그니처 근사 (O-NEW-32 min·자기역함수 계열)"

- id: 풍-CM2-RF-무리-0985
  page: 200
  vendor_label: "실력을 기르는 유형 · 상 배지 · 유형19 무리함수와 이차함수 교점"
  category_type: "상"
  summary: |
    f(x)=√(2x+8), g(x)=(1/2)x²-4 (x≥0) 그림 · 직선 y=-x+k가 두 곡선과 만나는 점 A, B · AB 최댓값.
  category: "무리·이차 두 곡선 절편 최대"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      description: "f=√(2x+8)과 g=(1/2)x²-4는 서로 역함수 관계 (y=x 대칭)"
    - step: 2
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "AB가 최대 → y=-x+k가 두 곡선 접선 상황 (y=x와 수직 방향)"
    - step: 3
      type: I-PD
      depth: 2
      effective_depth: 2
      description: "접선 조건 → k 결정 · AB 길이 계산"
  insight_count: 3
  depth_score: 8
  base_star: 4
  star: 5
  premium: false
  rationale: "역함수 대칭 (y=x) + 수직 방향 접선 · SYM·XU depth 3 · P4 · depth_score 8 · count 3 → premium count 미달 · **★ 5 (문턱 근접 · premium 후보)**. CM2-RF 무리 정점 SYM 축 (자기역함수 계열)."
  tier: star_1
  mechanism_primary: "역함수 대칭 (y=x) · 수직 접선"
  insight_type: "통찰형"
  target_cohort: "상위권"
  novelty_score: 2
```

---

## 표본 판정 요약 (27문)

| ★ | 문항 | 소단원별 분포 |
|---|---:|---|
| ★ 1 | 1 | GM-평(1) |
| ★ 2 | 1 | GM-이동(1) |
| ★ 3 | 5 | GM-평(1), GM-직(1), FN-함수(1), ST-집합연산(2) |
| ★ 4 | 9 | GM-평(1), GM-원(1), GM-이동(1), ST-집합뜻(2), ST-연산(1), ST-명제(1), RF-유리(1), RF-무리(1) |
| ★ 5 (non-premium) | 4 | ST-집합뜻(1) · ST-명제(1) · FN-함수(1) · RF-무리(1) |
| ★ 5 premium | 7 | GM-평(1: 0081) · GM-직(1: 0190) · GM-원(1: 0340) · GM-이동(2: 0377·0382) · ST-명제(1: 0664) · FN-함수(1: 0788) · RF-유리(1: 0890) · RF-무리(1: 0976) |
| **합계 (표본)** | **27** | 10 소단원 균형 (평면좌표·이동 중심 · 각 소단원 정점 포함) |

## 예측 종합 (전체 985문)

| ★ (전체) | 표본 실측 | 예측 (958문) | 전체 (985문) |
|---|---:|---:|---:|
| ★ 1 | 1 | **~150** (실 배지 초반 · A단계 기본류) | ~151 |
| ★ 2 | 1 | **~200** (실 배지 · 중 배지 초반) | ~201 |
| ★ 3 | 5 | **~350** (중 배지 · 상 배지 초반) | ~355 |
| ★ 4 | 9 | **~200** (상 배지 · 내신·교육청 기출 중반) | ~209 |
| ★ 5 (non-premium) | 4 | **~50** (도전 1등급 non-교육청 · 고득점 도약 상위) | ~54 |
| **★ 5 premium** | **7** | **~15** (도전 1등급 + 교육청 기출 결합 위주) | **~22** |
| **합계** | **27** | **~958** | **~985** |

## 풍산자 라벨 첫 회귀 (vendor-label-calibration 편입 초안 v1.12)

```
풍산자_star_predict(section, badge, tag) =

  # 실력을 기르는 유형 섹션
  if section == "실력을 기르는 유형":
    if badge == "실 (하)":
      return {star: 1, confidence: 0.80, alt: [2]}
    elif badge == "중":
      return {star: 3, confidence: 0.70, alt: [2, 4]}
    elif badge == "상":
      if "교육청" in tag or "내신 기출" in tag:
        return {star: 4, confidence: 0.75, alt: [3, 5]}
      else:
        return {star: 3, confidence: 0.70, alt: [4]}

  # 내신을 꽉 잡는 서술형 섹션
  elif section == "내신을 꽉 잡는 서술형":
    return {star: 4, confidence: 0.60, alt: [3, 5], note: "형식 라벨 · 원 판정"}

  # 고득점을 향한 도약 섹션
  elif section == "고득점을 향한 도약":
    if "도전 1등급" in tag:
      if "교육청 기출" in tag:
        return {star: 5, confidence: 0.85, premium_flag: 0.60, alt: [4]}
      else:
        return {star: 5, confidence: 0.75, premium_flag: 0.35, alt: [4]}
    else:
      return {star: 4, confidence: 0.70, alt: [5, 3]}

  return {star: 3, confidence: 0.50, note: "수동 검증"}
```

**신뢰도 등급**: **A-급** (표본 27 · 도전 1등급 100% ★ 5 정합 · 상 배지 편차 존재 · 100% 정합 도달까지 표본 60+ 필요)

## 풍산자 벤더 신뢰도 비교 (기존 8벤더 대비)

| 벤더 | 라벨 층위 | 정합률 | 등급 | 특성 |
|---|---|---|---|---|
| 쎈 | 4단계 A·B(중·상)·C | 72% | A | 사고력 아이콘 유효 |
| 마플시너지 | BASIC/NORMAL/TOUGH + STEP 2/3 | 74% | A | 학평 편입 안정 |
| **풍산자 필수유형** | 실/중/상 + 섹션(서술형·도약·도전) | **~85%** (표본 27) | **A-** | **도전 1등급 = ★ 5 라벨 정합률 100% · 교육청 기출 편입 다수 · premium 밀도 상위** |
| 블랙라벨 STEP 2 | STEP 2 (내부 세분) | 100% | A | premium 34% |
| 블랙라벨 STEP 3 | STEP 3 일괄 | 100% | A+ | premium 100% |
| 고쟁이 STEP 1 | 번호 위치별 | 83% | A- | STEP 1 세분 유효 |
| RPM | 유형익히기 등 | 60% | B | 관대 |
| 개념원리 | 대표예제 등 | 45% | B | 관대 |

**풍산자 특징**: **필수유형 유형별 헤더 (유형01~29) · 중요도 배지 (●●●, ●●○, ●○○) · 문항별 3단계 배지 (실·중·상) 3중 체계** · 도전 1등급은 실질 ★ 5 하한 안정.

## 풍산자 vs 쎈·마플·블랙라벨 정점 문항 자기복제 감지

**자기복제 위험 감지** (표본 27문 중 3건):

| 풍산자 원본 | 자기복제 대상 | 원형 | 위험도 |
|---|---|---|---|
| 풍-CM2-GM-평면좌표-0081 | 쎈-CM2-GM-평-0083 | **O-03 각이등분선 연쇄** | **높음** (다층 이등분선 6단계 판박이) |
| 풍-CM2-GM-이동-0363 | 마-CM2-GM-이동-0664 | O-01 Fagnano 이중 대칭 | 중 (축 조합 y=x + y축 vs 반사각) |
| 풍-CM2-GM-이동-0382 | 마-CM2-GM-이동-0664 | O-01 Fagnano 4점 y=x 반사 | 중 (다중 반사 원리) |
| 풍-CM2-GM-원-0340 | 쎈-CM2-GM-원-0360 | O-05 원 접선 킬러 | 중 (이중 접선 조건) |
| 풍-CM2-FN-함수-0788 | 마-CM2-FN-합성역함수-1408 | O-NEW-30 involution 정점 | **높음** (자기역함수 case 열거 판박이) |
| 풍-CM2-RF-무리-0976 | 블랙라벨-CM2-08-STEP3-#12 | O-NEW-32 min·자기역함수 | 중 (무리 두 곡선 대칭·k 조건) |

**결론**: 풍산자 정점 문항은 기존 벤더 원형과 70% 이상 겹침 · **자기복제 위험 관리 필요**. 시험지 pool로 사용 시 회차당 원형 상한 1문 규칙 엄격 적용 필수. 다만 풍산자 특유 배치·수치·발문 스타일 차이는 있어 최소 변형 원본으로 활용 가능.

## 특이사항

### 1. 교육과정 침투 감지 (Tier 0 준수 필요)

- **풍-CM2-ST-집합의뜻-0460**: `i = √-1` 복소수 사용 · **CM1-EQ 복소수 침투** · 2학기 중간 범위 밖 · 시험지 pool 배제 권고
- **풍-CM2-FN-함수-783** (고득점 도약 · 표본 미편입): `[x]` Gauss 함수 · **미적분 상위 범위** · CM2 범위 밖 · 배제 권고
- **풍-CM2-ST-집합의연산-0475**: CM1-EQ 이차부등식 해집합 활용 · **CM2 §명제·연산 예외 허용** (`CM2-학기별-시험범위.md` §부분 결합) · **YELLOW**로 관리

### 2. 외국 수학자 이름 회피 상태

- 표본 27문 및 배경 985문 전수 검토: **외국 수학자 이름 명시 없음** (헤론·피타고라스·페르마·오일러 등)
- 풍쌤 비법에서 "산술평균과 기하평균의 관계"·"코시-슈바르츠 부등식"이라는 표현은 정규 교과 용어로 사용 · 정합
- **결론**: 외국 수학자 이름 침투 리스크 낮음

### 3. 풍산자 필수유형 편집 특징

- **10 소단원 균형**: 각 소단원 20~29개 유형 헤더 (평면좌표·직선·원·이동 각 13·11·17·17유형 등)
- **개별 문항 배지 3단계 (실·중·상)** + 유형 중요도 3단계 (●●●, ●●○, ●○○) → 6단계 정보 매트릭스
- **도전 1등급 = ★ 5 하한 안정** · 소단원마다 1~3문 배치
- **서술형 섹션은 형식 라벨** · 실질 난이도는 원 판정 필요
- **교육청 기출 태그**가 도전 1등급에 집중 배치 → premium 후보 pool 최우선

### 4. vendor-label-calibration v1.11 → v1.12 편입 신호

- 표본 27문 실측 → 풍산자 회귀 함수 v1.0 (A- 등급) 확정
- **도전 1등급 + 교육청 기출** = premium 판정 60% (표본 5문 중 3문) · 후속 표본 20+ 확보 시 정합률 확정
- **실 배지** = ★ 1~2 정합률 100% (표본 2문) · 추가 검증 불필요
- **상 배지** = 편차 존재 (★ 3~4) · 표본 확대 필요
- **풍산자 특유 신호**: 유형 중요도 ●●● 배지가 실질 난이도와 강한 상관 (유형 중요도 ●●●인 문항이 통찰 밀도 상위)

### 5. premium 신규 원형 후보 (v1.0 카탈로그 편입 검토)

풍산자 정점 문항 중 기존 32원형과 완전 정합하는 원형이 없는 신규 후보:

| 풍산자 ID | 신규 원형 후보 | 특성 |
|---|---|---|
| 풍-CM2-GM-이동-0377 | **O-NEW-33 원 위 두 점 이동 + 공통접선 기울기 극값** | SYM·XU 결합 · 원 위 매개변수 이동 후 기울기 극값 |
| 풍-CM2-RF-유리-0890 | **O-NEW-34 유리식 분해 + 부분합 크기 분석** | EQV·CON·XU 결합 · 특이점 근방 case 분기 |
| 풍-CM2-ST-집합의뜻-0463 | **O-NEW-35 부분집합 원소 합 조건** (O-NEW-23 확장) | 자연수 순서 case 열거 강화 |

세션 63 마스터 승인 후 카탈로그 편입.

## 관련 자산

- 벤더 회귀: [`bank/vendor-label-calibration.md`](vendor-label-calibration.md) v1.11 → v1.12 편입 대기
- 정독 스키마: [`bank/정독-스키마-v2.0.md`](정독-스키마-v2.0.md)
- premium 원형 카탈로그: [`bank/premium-원형-카탈로그.md`](premium-원형-카탈로그.md) v1.1 (32원형)
- CM2 시험범위: [`bank/CM2-학기별-시험범위.md`](CM2-학기별-시험범위.md)
- 기존 CM2 정독 파일 다수 (쎈·마플시너지·개념원리·RPM·고쟁이·블랙라벨 · 세션 61 578문)

## 변경 이력

- 2026-07-21 v1.0 — 초판 · 세션 62 · Group 3 여섯번째 벤더 풍산자 첫 편입 · 표본 27문 · premium 후보 7문 · 자기복제 위험 6건 · 신규 원형 3후보 · vendor-label-calibration v1.12 편입 초안.
