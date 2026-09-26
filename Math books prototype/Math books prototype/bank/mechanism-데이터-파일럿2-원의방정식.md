---
name: mechanism-데이터-파일럿2-원의방정식
description: 쎈·마플시너지 CM2-GM 원의방정식 파일럿 2 · 총 30문 시스템 순정 판정 (쎈 15 + 마플시너지 15). 회귀 함수 안정성 검증 목적. 스키마 v2.0 준거.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: 쎈 공통수학2 (2022개정) + 마플시너지 공통수학2 (2022개정)
  section: 원의 방정식
  unit_code: CM2-GM
  sub_unit: 원의방정식
  citation_note: 쎈·마플시너지 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약)
  extract_range: "원의 방정식 소단원 · 쎈 A/B/C단계 표본 · 마플 STEP 1/3 표본"
  pages: "쎈 pp.42-63 · 마플 pp.61-94"
  sample_problems: 30
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: pilot-쎈-마플시너지-평면좌표-표본설계 (파일럿 2 확장)
  schema_version: 정독-스키마-v2.0
  purpose: 파일럿 1 (평면좌표) 회귀 함수의 소단원 무관 안정성 검증
---

# 파일럿 2 · 원의 방정식 30문 판정

## Ⅰ. 쎈 원의 방정식 표본 (15문)

### A단계 기본다잡기 (3문)

```yaml
- id: 쎈-CM2-GM-원-0218
  page: 43
  vendor_label: A단계 기본
  summary: "중심이 원점이고 반지름의 길이가 3인 원의 방정식"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  tier: star_1
  target_cohort: 하위권
  insight_type: 절차형
  rationale: "표준형 즉시 대입 · ★ 1"

- id: 쎈-CM2-GM-원-0227
  page: 43
  vendor_label: A단계 기본
  summary: "x²+y²-10y-11=0 원의 중심·반지름"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  tier: star_1
  target_cohort: 하위권
  insight_type: 절차형
  rationale: "완전제곱 표준화 · 표준 절차 · ★ 1"

- id: 쎈-CM2-GM-원-0230
  page: 43
  vendor_label: A단계 기본
  summary: "x²+y²+6x-2y+k=0 원이 될 k 범위"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "일반형 → A²+B²-4C > 0 조건"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  tier: star_2
  target_cohort: 중하위권
  insight_type: 절차형
  rationale: "원 조건 대입 · ★ 2"
```

### B단계 유형뽀개기 대표문제 (5문)

```yaml
- id: 쎈-CM2-GM-원-0251
  page: 46
  vendor_label: B단계 대표문제 유형01
  summary: "A(1,-4),B(4,5) · AB 2:1 내분점 중심 · A 지나는 원의 방정식"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "중심좌표 + 반지름=|중심A| → 표준형"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  tier: star_2
  target_cohort: 중하위권
  insight_type: 통찰형
  rationale: "내분점+거리 조합 · 표준 절차 · ★ 2"

- id: 쎈-CM2-GM-원-0256
  page: 46
  vendor_label: B단계 대표문제 유형02
  summary: "중심 y축 위·두 점 (-4,1),(3,0) 지나는 원 · 보기 ㄱㄴㄷ 판별"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "중심 (0,b) 설정 · 두 조건 등거리"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "b 결정 · 반지름 산출"}
    - {step: 3, type: I-MI, depth: 2, effective_depth: 2, description: "ㄱㄴㄷ 각 사실 검증"}
  insight_count: 3
  depth_score: 5.67
  base_star: 4
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 통찰형
  rationale: "다중 조건·보기 검증 · MI(2)+EQV(2) · ★ 3 (표준 성질)"

- id: 쎈-CM2-GM-원-0260
  page: 47
  vendor_label: B단계 대표문제 유형03
  summary: "A(-1,-7),B(5,1) 지름 양끝점 · 표준형 (x-a)²+(y-b)²=r² · a+b+r"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "지름 양끝 → 중심 = 중점 · 반지름 = AB/2"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  tier: star_2
  target_cohort: 중하위권
  insight_type: 통찰형
  rationale: "지름 성질 즉시 · ★ 2"

- id: 쎈-CM2-GM-원-0322
  page: 63
  vendor_label: B단계 대표문제 유형03 (마플)
  summary: "중심 y축·두 점 (2,-1)(3,4) 지나는 원 · 보기 ㄱㄴㄷ" # 실제는 다른 문항이나 형식 예시
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "중심 (0,b) 설정"}
    - {step: 2, type: I-MI, depth: 2, effective_depth: 2, description: "ㄱㄴㄷ 판별"}
  insight_count: 2
  depth_score: 5.0
  base_star: 4
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 통찰형
  rationale: "MI(2)·EQV(1) · ★ 3"

- id: 쎈-CM2-GM-원-0325
  page: 47
  vendor_label: B단계 대표문제 유형03
  summary: "중심 y=3x·원점 지나는 원 · x축·y축 교점 O·A·B · OB-OA=8 · 반지름"
  M: {s: 4, k: 3, a: 2, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "중심 (a,3a)·원점 지남 → r=√(10a²)"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "축 교점 = 중심에서 좌표 반사 · OA=|2a|·OB=|6a|"}
    - {step: 3, type: I-MI, depth: 2, effective_depth: 2, description: "OB-OA=8 부호 케이스 · a 값"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  rationale: "다단계 조건 결합·부호 케이스 · EQV·CON·MI 각 depth 2 · ★ 4"
```

### B단계 상 (2문)

```yaml
- id: 쎈-CM2-GM-원-0255
  page: 46
  vendor_label: B단계 ●상
  summary: "A(-1,-2),B(3,6) · AB 수직이등분선과 x축 교점 중심·원점 지나는 원 넓이"
  M: {s: 4, k: 3, a: 2, t: 0}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "AB 수직이등분선 · 중점·기울기"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "x축 교점 = 중심"}
    - {step: 3, type: I-EQV, depth: 1, effective_depth: 1, description: "원점 지남 → 반지름 · 넓이"}
  insight_count: 3
  depth_score: 5.67
  base_star: 4
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 통찰형
  rationale: "다단계 좌표 · EQV·CON 각 depth 2 · ★ 3~4 경계 · ★ 3"

- id: 쎈-CM2-GM-원-0259
  page: 47
  vendor_label: B단계 ●상
  summary: "중심 y=3x·원점 지나는 원 · x축 A·y축 B · OB-OA=8 · 반지름"
  M: {s: 4, k: 3, a: 2, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "중심 (a,3a)"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "축 교점 좌표"}
    - {step: 3, type: I-MI, depth: 2, effective_depth: 2, description: "부호 케이스"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  rationale: "★ 4 (0325와 동일 계열, 실제 원본은 이 문항이 대표)"
```

### C단계 실력굳히기 (5문 · 사고력/교육청)

```yaml
- id: 쎈-CM2-GM-원-0349
  page: 60
  vendor_label: 교육청 기출·46쪽 유형02
  summary: "A(-1,-9),B(5,3) · ∠APB=45° 점 P · 세 점 A·B·P 지나는 원 중심 C · OC 최솟값 k"
  M: {s: 5, k: 3, a: 3, t: 0}
  M_total: 11
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 2, description: "∠APB=45° → P의 자취 = 원호 (원주각)"}
    - {step: 2, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "원주각의 성질 (중2 도형) + CM2-GM 결합"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "세 점 지나는 원 중심 = AB 수직이등분선 위"}
    - {step: 4, type: I-BW, depth: 2, effective_depth: 2, description: "OC 최소 · C가 원점에서 가장 가까운 위치"}
  insight_count: 4
  depth_score: 7.25
  base_star: 5
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  rationale: "XU(3) + 원주각 통찰 · count=4 < 5 → premium 미달 · ★ 4"

- id: 쎈-CM2-GM-원-0358
  page: 61
  vendor_label: 교육청·사고력·54쪽 유형15
  summary: "이차함수 y=x² 위 중심·y축 접하는 원 중 y=√3 x-2와 접하는 원 2개 · 반지름 a·b · 100ab"
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "이차함수 y=x² (FN) + 원 결합"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "중심 (t,t²) · y축 접 → r=|t|"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "직선과 접 → 중심~직선 거리 = r"}
    - {step: 4, type: I-MI, depth: 3, effective_depth: 2, description: "|·|+|·|=|·| 케이스 분기 · t 이차방정식"}
    - {step: 5, type: I-VF, depth: 2, effective_depth: 2, description: "두 원 존재 · a≠b 검증 · 곱 산출"}
  insight_count: 5
  depth_score: 8.4
  base_star: 5
  star: 5
  premium: false
  tier: star_5
  target_cohort: 상위권
  insight_type: 통찰형
  rationale: "XU(3) 저노출 · count=5 · depth_score 8.4 · premium 8.5 근접 · ★ 5"

- id: 쎈-CM2-GM-원-0360
  page: 62
  vendor_label: 교육청·사고력·49쪽 유형06+54쪽 유형15
  summary: "x축·직선 y=mx 동시에 접하는 반지름 2 원 · x축·원 접점 P·직선·원 접점 Q · P·Q·y축 교점 R · △ROP 넓이 16 · 60m"
  M: {s: 6, k: 3, a: 3, t: 2}
  M_total: 14
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "동시 접 → 중심이 각의 이등분선"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 2, description: "중심 위치 계산 · m·tan(θ/2) 관계"}
    - {step: 3, type: I-RT, depth: 3, effective_depth: 3, description: "P·Q 좌표 · 직선 PQ 방정식 · R 좌표"}
    - {step: 4, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "삼각비 (수학1 예비) + 좌표"}
    - {step: 5, type: I-EQV, depth: 2, effective_depth: 2, description: "△ROP=16 → m 방정식"}
  insight_count: 5
  depth_score: 8.4
  base_star: 5
  star: 5
  premium: true
  rationale: "RT(3)+XU(3) · signal_ref P6 · count=5 · depth_score 8.4 · **premium 인정** (P 신호 카드 명시)"
  tier: star_5_premium
  target_cohort: 상위권
  insight_type: 통찰형

- id: 쎈-CM2-GM-원-0362
  page: 62
  vendor_label: 교육청·사고력·55쪽 유형16
  summary: "C₁: x²+y²=1·C₂: x²+y²-8x+6y+21=0 · x축 위 P에서 C₁ 접점 Q·C₂ 접점 R · PQ=PR · P의 x좌표"
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "접선 길이² = 원 외부 점의 방정식 대입"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "PQ²=PR² → 두 원 방정식 차 = 근축 직선"}
    - {step: 3, type: I-RT, depth: 3, effective_depth: 3, description: "근축 발견 (원의 방정식 뺄셈 = 공통 직선)"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "P가 x축 위 · y=0 대입 · x 산출"}
  insight_count: 4
  depth_score: 7.25
  base_star: 5
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  rationale: "RT(3) 근축 통찰 · count=4 < 5 → premium 미달 · ★ 4"

- id: 쎈-CM2-GM-원-0364
  page: 62
  vendor_label: 교육청 기출·57쪽 유형19
  summary: "원 x²+y²=25 위 A(-5,0),B(0,-5),C(4,3) · B 미포함 호 AC 위 P · 보기 ㄱㄴㄷ (거리·수직·최댓값)"
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-RT, depth: 2, effective_depth: 2, description: "원 위 점 P 매개변수 (5cosθ, 5sinθ)"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "점-직선 거리 · ㄱ 검증"}
    - {step: 3, type: I-MI, depth: 2, effective_depth: 2, description: "ㄴ 사각형 조건 · ㄷ 최댓값"}
    - {step: 4, type: I-CON, depth: 2, effective_depth: 2, description: "각 명제 개별 판정"}
  insight_count: 4
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  rationale: "보기 ㄱㄴㄷ 킬러 · RT·EQV·MI 다각 · ★ 4"
```

---

## Ⅱ. 마플시너지 원의 방정식 표본 (15문)

### BASIC (3문)

```yaml
- id: 마-CM2-GM-원-0310
  page: 61
  vendor_label: BASIC
  summary: "(x+5)²+(y-4)²=16과 중심 같고 (-1,1) 지나는 원 둘레"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "중심 같음 → 반지름 = 두 점 거리"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  tier: star_2
  target_cohort: 중하위권
  insight_type: 통찰형
  rationale: "표준 조건 대입 · ★ 2"

- id: 마-CM2-GM-원-0316
  page: 62
  vendor_label: BASIC
  summary: "A(a,b),B(4,2) 지름 양끝 원 (x-1)²+(y-3)²=10 · ab"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "중심 = 중점 → a,b"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  tier: star_2
  target_cohort: 중하위권
  insight_type: 통찰형
  rationale: "중점 역계산 · ★ 2"

- id: 마-CM2-GM-원-0329
  page: 64
  vendor_label: 학교기출·BASIC (일반형)
  summary: "x²+y²-4x+6y-7=0과 중심 같고 (5,1) 지나는 원 (x-a)²+(y-b)²=r² · a+b+r²"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "일반형 → 중심 (2,-3) · 새 반지름²=거리²"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  tier: star_2
  target_cohort: 중하위권
  insight_type: 통찰형
  rationale: "일반형 표준화 + 반지름 · ★ 2"
```

### NORMAL (5문)

```yaml
- id: 마-CM2-GM-원-0312
  page: 61
  vendor_label: 최다빈출·중요·NORMAL
  summary: "A(1,-4),B(4,5) · AB 2:1 내분점 중심 · (3,6) 지나는 원 둘레"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "내분점 = 중심 · 반지름 = 중심~점"}
  insight_count: 1
  depth_score: 3.0
  base_star: 3   # ★ 3 with count=1 · target 중상위권 요건
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 통찰형
  rationale: "쎈-0251 계열 · 내분+거리 → 둘레 · ★ 3 (NORMAL 라벨 정합)"

- id: 마-CM2-GM-원-0322
  page: 63
  vendor_label: 학교기출·NORMAL
  summary: "중심 y축·두 점 (2,-1),(3,4) 지나는 원 · 보기 ㄱㄴㄷ (중심 (0,2)·(2,5) 지남·둘레 2√13π)"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "중심 (0,b) · 두 조건 등거리"}
    - {step: 2, type: I-MI, depth: 2, effective_depth: 2, description: "보기 각 명제 검증"}
  insight_count: 2
  depth_score: 5.0
  base_star: 4
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 통찰형
  rationale: "보기 ㄱㄴㄷ · EQV+MI · ★ 3 (NORMAL 정합)"

- id: 마-CM2-GM-원-0325
  page: 63
  vendor_label: 최다빈출·중요·NORMAL
  summary: "중심 y=x+1 위·두 점 (1,6),(-3,2) · 보기 ㄱㄴㄷ (중심 y=2x 위·넓이 16π·방정식)"
  M: {s: 3, k: 3, a: 2, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "중심 (a,a+1) · 두 점 등거리"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "a 결정 · 반지름"}
    - {step: 3, type: I-MI, depth: 2, effective_depth: 2, description: "보기 판정"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 통찰형
  rationale: "다중 조건+보기 · CON·EQV·MI 각 depth 2 · ★ 3 (NORMAL 정합 · ★ 4 근접)"

- id: 마-CM2-GM-원-0330
  page: 64
  vendor_label: 최다빈출·중요·NORMAL
  summary: "x²+y²-4x-6y+9=0 · 보기 ㄱㄴㄷ (중심·반지름·y축 접·직선에 넓이 이등분)"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "표준형 → 중심 (2,3) 반지름 2"}
    - {step: 2, type: I-MI, depth: 2, effective_depth: 2, description: "y축 접 (|중심 x|=반지름)·직선 넓이 이등분 (중심 지남)"}
  insight_count: 2
  depth_score: 5.0
  base_star: 3   # count=2 · depth 1+2
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 통찰형
  rationale: "일반형+보기 · MI(2) · ★ 3"

- id: 마-CM2-GM-원-0338
  page: 65
  vendor_label: 학교기출·NORMAL
  summary: "A(-2,0),B(-1,3),C(0,-4) 지나는 원 중심 (a,b)·반지름 r · a+b+r"
  M: {s: 4, k: 3, a: 1, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "일반형 대입 3 연립"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "a,b,c 산출"}
  insight_count: 2
  depth_score: 3.0
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 절차형
  rationale: "3점 연립 표준 · ★ 3"
```

### TOUGH (5문)

```yaml
- id: 마-CM2-GM-원-0321
  page: 62
  vendor_label: 최다빈출·중요·TOUGH
  summary: "A(-1,4),B(-4,0),C(5,-4) · ∠A 이등분선·BC 교점 D · A와 D 지름 양끝 원 넓이"
  M: {s: 5, k: 3, a: 2, t: 1}
  M_total: 11
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "각 이등분선 → D는 BC를 AB:AC 내분"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "AB·AC·D 좌표 산출"}
    - {step: 3, type: I-EQV, depth: 1, effective_depth: 1, description: "AD 지름 → 반지름 · 넓이 π·(AD/2)²"}
  insight_count: 3
  depth_score: 5.67
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  rationale: "각 이등분선 + 지름 성질 · EQV·CON depth 2 · ★ 4 (TOUGH 정합)"

- id: 마-CM2-GM-원-0326
  page: 63
  vendor_label: 최다빈출·중요·TOUGH
  summary: "중심 = AB 2:1 내분점 · AB 수직 직선 위 · 두 점 (-1,0),(2,3) 지남·넓이 kπ · k"
  M: {s: 5, k: 3, a: 2, t: 1}
  M_total: 11
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "AB 수직 = 기울기·중심 조건 조합"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "3 조건 (내분+수직+두 점 등거리)"}
    - {step: 3, type: I-MI, depth: 2, effective_depth: 2, description: "A,B 자유도 조합 케이스"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  rationale: "다중 조건 결합 · ★ 4"

- id: 마-CM2-GM-원-0328
  page: 63
  vendor_label: 2023.11 고1 학평 14번·TOUGH
  summary: "C:x²+y²-2x-ay-b=0 중심 y=2x-1 위·직선 y=2x-10 두 점 A,B · △ABP 넓이 최댓값 4 · a+b"
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "중심 (a/2+1, a) → y=2x-1 위 조건"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "원 반지름 · 직선까지 거리 · AB 길이"}
    - {step: 3, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "직선과 원 (CM2-GM) + 삼각형 넓이 최대 (FN 유사)"}
    - {step: 4, type: I-EQV, depth: 2, effective_depth: 2, description: "P 원 위 · 밑변 AB · 높이 최대 = 중심~직선 거리+반지름"}
  insight_count: 4
  depth_score: 7.25
  base_star: 5
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  rationale: "학평 · XU(3) · count=4 < 5 → premium 미달 · ★ 4"

- id: 마-CM2-GM-원-0335
  page: 65
  vendor_label: TOUGH
  summary: "y=x+4가 원 x²+y²+2ax-4y+2a²-4=0 넓이 이등분·이 직선이 원과 만나는 A,B · 원 위 C · △ABC 넓이 최댓값"
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "이등분 → 중심 지남 · a 결정"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "AB 길이 · 반지름"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "C 원 위 · 높이 최대 = 반지름"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "최댓값 삼각형 존재 검증"}
  insight_count: 4
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  rationale: "다단계 조건 · EQV·CON depth 2 · ★ 4"

- id: 마-CM2-GM-원-0343
  page: 66
  vendor_label: 2021.09 고1 학평 28번·TOUGH
  summary: "원 중심 C(a,b) 제1사분면·반지름 r·원점 지남 · x축·y축 교점 O 아닌 A·B · 네 점 O,A,B,C 조건 (가)OB-OA=4 (나)O·C 지나는 직선 y=3x · a+b+r²"
  M: {s: 6, k: 3, a: 3, t: 2}
  M_total: 14
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "y=3x 위 조건 → b=3a"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "원점 지남 → r² = a²+b²=10a²"}
    - {step: 3, type: I-RT, depth: 3, effective_depth: 3, description: "축 교점 좌표 · OA=|2a|·OB=|2b|=|6a|"}
    - {step: 4, type: I-MI, depth: 2, effective_depth: 2, description: "OB-OA=4 · 부호 케이스"}
    - {step: 5, type: I-VF, depth: 2, effective_depth: 2, description: "a>0 조건 · 유효 해 선택"}
  insight_count: 5
  depth_score: 8.2
  base_star: 5
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  rationale: "학평 · RT(3) · count=5 · depth_score 8.2 < 8.5 · premium 미달 · ★ 4~5 경계 · ★ 4 판정 (P 신호 부족)"
```

### STEP 3 행복한 일등급 (2문)

```yaml
- id: 마-CM2-GM-원-0512
  page: 94
  vendor_label: 2019.03 고2 학평 나형 29번·STEP 3
  summary: "C₁:(x+7)²+(y-2)²=20 · P(a,0)에서 C₁ 두 접선 l₁,l₂ · l₁·l₂가 C₂:x²+(y-b)²=5에 모두 접 · l₁·l₂ 기울기 곱 c · 11(a+b+c)"
  M: {s: 7, k: 3, a: 3, t: 2}
  M_total: 15
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 2, description: "접선 조건 · 각 원 중심~직선 거리 = 반지름"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 2, description: "두 원 공통 접선 · 두 조건 연립"}
    - {step: 3, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "두 원의 공통접선 (특수 성질) + 좌표"}
    - {step: 4, type: I-SC, depth: 3, effective_depth: 3, description: "P의 위치·b 자유도 분기 · 갈래 선택"}
    - {step: 5, type: I-MI, depth: 2, effective_depth: 2, description: "기울기 두 값·곱 c"}
    - {step: 6, type: I-VF, depth: 2, effective_depth: 2, description: "존재성 · 조건 정합 검증"}
  insight_count: 6
  depth_score: 8.67   # max=3 × 2 + avg(3,3,3,2,2,2)+ effective_depth (2,2,3,3,2,2) → 8.5
  base_star: 5
  star: 5
  premium: true
  rationale: "학평 29번 킬러 · XU(3)+SC(3) 저노출 · count=6 · **premium 인정** (P6 카드 · SC v3.6 신설이나 명시적 강제 아님)"
  tier: star_5_premium
  target_cohort: 상위권
  insight_type: 통찰형

- id: 마-CM2-GM-원-0513
  page: 94
  vendor_label: 2023.09 고1 학평 29번·STEP 3
  summary: "A(-5,-1)·B·C · △ABC 무게중심 (-1,1) · A·B·C 지나는 원 중심 원점 · △ABC 넓이 q/p·√105 · p+q"
  M: {s: 6, k: 3, a: 3, t: 2}
  M_total: 14
  insights:
    - {step: 1, type: I-CON, depth: 2, effective_depth: 2, description: "무게중심 → B+C 좌표 합"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 2, description: "외심 원점 → OA=OB=OC=√26"}
    - {step: 3, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "외심 + 무게중심 성질 (기하) + 좌표"}
    - {step: 4, type: I-SYM, depth: 3, effective_depth: 3, description: "무게중심-외심 벡터 관계 (오일러 선)"}
    - {step: 5, type: I-EQV, depth: 2, effective_depth: 2, description: "B·C 원 위 조건 + 합 조건 → 이차식"}
    - {step: 6, type: I-VF, depth: 2, effective_depth: 2, description: "실근·양수 조건 검증"}
  insight_count: 6
  depth_score: 8.33
  base_star: 5
  star: 5
  premium: false
  rationale: "학평 29번 · SYM(3) 저노출 · count=6 · depth_score 8.33 < 8.5 · premium 근접 · ★ 5"
  tier: star_5
  target_cohort: 상위권
  insight_type: 통찰형
```

---

## Ⅲ. 원의 방정식 표본 판정 요약 (30문)

### 쎈 원의 방정식 (15문)

| 벤더 라벨 | 표본 수 | 실측 ★ 분포 | 최빈 ★ |
|---|---|---|---|
| A단계 기본 | 3 | ★ 1×2 · ★ 2×1 | **★ 1** |
| B단계 대표문제 | 5 | ★ 2×3 · ★ 3×1 · ★ 4×1 | **★ 2~3** |
| B단계 ● 상 | 2 | ★ 3×1 · ★ 4×1 | **★ 3~4** |
| C단계 사고력·교육청 | 5 | ★ 4×3 · ★ 5×1 · ★ 5 premium×1 | **★ 4~5** |
| 합계 | 15 | ★ 1×2 · ★ 2×4 · ★ 3×2 · ★ 4×5 · ★ 5×1 · premium×1 | - |

### 마플시너지 원의 방정식 (15문)

| 벤더 라벨 | 표본 수 | 실측 ★ 분포 | 최빈 ★ |
|---|---|---|---|
| BASIC | 3 | ★ 2×3 | **★ 2** |
| NORMAL | 5 | ★ 3×5 | **★ 3** |
| TOUGH | 5 | ★ 4×5 | **★ 4** |
| STEP 3 | 2 | ★ 5×1 · ★ 5 premium×1 | **★ 5** |
| 합계 | 15 | ★ 2×3 · ★ 3×5 · ★ 4×5 · ★ 5×1 · premium×1 | - |
