---
name: mechanism-데이터-RPM-PROB-05-p2
description: RPM 확률과 통계 05 확률분포 (2)(2/3 · 유형 03~10) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: RPM 확률과 통계 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-prob
  section: 05 확률분포 (2)
  unit_code: PROB-05
  part: "2/3"
  extract_range: "73~78쪽 · 0438~0471"
  total_problems: 34
  unit_total: 101
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 확률과 통계는 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-prob/items/<id>.tex
  image_source: latex-bank/rpm-prob/figures/ (crops.json)
---

# RPM 확률과 통계 · 05 확률분포 (2) (2/3) 정독 데이터 (v1.0)

이 파일은 73~78쪽 · 0438~0471 의 34문항을 다룬다. 구역은 「유형 03 정규분포곡선의 성질」부터 「유형 10 이항분포와 정규분포의 관계」까지 여덟 개이며, 모두 유형별 기본 문제 구역이다. RPM 의 벤더 난이도 신호는 구역 종류(교과서 / 유형 / 유형 UP / 시험에 꼭 나오는 문제 / 서술형 주관식 / 실력 Up), 문항별 난이도 표시(하·중하·중·상중·상), 태그(대표문제·중요·서술형·기출) 세 가지다. 이 범위는 전부 「유형 NN」 구역이므로 난이도 표시가 없는 대표문제는 ★2, 「중하」는 ★1~2, 「중」은 ★2, 「상중」은 ★3 을 출발점으로 두고 M_total·통찰로 ±1 조정했다.

이 단원은 정규분포 한 도구를 반복해서 쓰므로 골조가 「표준화 → 표준정규분포표 조회 → 답」으로 수렴한다. 그래서 변별은 확률을 주고 경계값을 거꾸로 찾는가(역방향), 대칭을 써서 구간을 접는가, 문맥(인원수·시각·기준 무게)을 확률 조건으로 옮기는가에서 생긴다. 표준정규분포표 크롭은 조회용 자료라 골조에 영향이 없어 열지 않았고, 곡선 모양이 판정에 직접 쓰이는 0438·0439 두 문항만 그림을 확인했다.

이 자산의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 풀이 골조 한 줄(`mechanism_primary`), 단계별 통찰 라벨(`insights[]`), 변형 제약(`variation_notes.numeric` / `variation_notes.creative`)을 채웠다. 답은 전사·검수 단계에서 답지와 대조가 끝난 값을 그대로 옮겼고 여기서 재검산하지 않았다.

## 문항 데이터

### 유형 03 정규분포곡선의 성질

```yaml
- id: RPM-PROB-0438
  page: 73
  vendor_label: "유형 03 정규분포곡선의 성질"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    두 정규분포의 확률밀도함수 그래프(평균 x1 < x2 · f 가 낮고 넓음)를 보고
    ㄱ~ㄹ 네 명제(꼬리 확률 비교 · 평균 비교 · 표준편차 비교 · 최댓값 비교)의 참거짓. 5지선다.
  category: "그래프 모양 → 평균·표준편차·최댓값 읽기 → 보기 판정"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "곡선의 중심·퍼짐·봉우리 높이를 평균·표준편차·f(m) 이라는 모수 언어로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정규분포곡선의 성질 — 그래프 비교로 평균·표준편차·최댓값 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ은 양쪽 모두 중심에서 자른 확률이라 값이 같다는 것(대칭)을 알면 부등호가 깨진다. ㄴ은 중심 위치, ㄷ은 퍼짐(f 가 넓으므로 반대), ㄹ은 봉우리 높이가 표준편차에 반비례한다는 성질.
    계산은 없고 그래프를 모수로 옮기는 RT d1 한 단계뿐이며, 대칭으로 0.5 를 읽는 것은 이 단원의 표준 절차라 통찰로 세지 않았다.
    유형 구역 대표문제 출발점 ★2 · M_total 7 로 유지.
  tier: star_2
  mechanism_primary: "그래프 중심·퍼짐·봉우리 높이 → 평균·표준편차·최댓값 비교 → 보기 네 개 판정"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: crop:fig-0438.png
  latex: latex-bank/rpm-prob/items/0438.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림의 두 중심 위치와 봉우리 높낮이 관계만 바꾸면 된다. 제약: 높이와 퍼짐은 반비례로 묶여 있으므로 낮은 곡선을 좁게 그리면 모순이 생긴다. 라벨 x1, x2 는 고정."
    creative: "(1) ㄱ을 P(X1 ≥ x1) 와 P(X2 ≥ x2) 비교로 바꾸면 대칭만 묻는 ★1 (2) 두 곡선의 평균은 같고 퍼짐만 다르게 그려 특정 구간 확률 대소를 묻기(★2 · I-SYM) (3) 면적이 1 이라는 조건으로 봉우리 높이 대소를 역추적시키면 ★3."
```

```yaml
- id: RPM-PROB-0439
  page: 73
  vendor_label: "유형 03 정규분포곡선의 성질"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    네 학교 A~D 의 수학 성적 분포 곡선 그림에서 평균이 가장 높은 학교와 표준편차가 가장 큰 학교 찾기.
  category: "곡선 중심 → 평균 / 곡선 퍼짐 → 표준편차"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정규분포곡선의 성질 — 여러 곡선에서 평균·표준편차 비교"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    가장 오른쪽 중심이 평균 최대, 가장 낮고 넓게 퍼진 곡선이 표준편차 최대. 성질 두 개를 한 번씩 적용하고 끝난다.
    통찰 없음 · M_total 4 로 −1 조정하여 벤더 「중하」 출발점에서 ★1.
  tier: star_1
  mechanism_primary: "중심이 가장 오른쪽인 곡선 → 평균 최대 / 가장 넓고 낮은 곡선 → 표준편차 최대"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "B, C"
  answer_source: "답지"
  figure: crop:fig-0439.png
  latex: latex-bank/rpm-prob/items/0439.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선 개수(3~5개)와 라벨 순서만 바꾼다. 제약: 평균 최대와 표준편차 최대가 서로 다른 곡선이어야 문항이 성립한다."
    creative: "(1) 평균이 가장 낮은 학교·표준편차가 가장 작은 학교로 방향을 뒤집기(★1) (2) 특정 점수 이상인 학생 비율이 가장 큰 학교를 묻기(평균·표준편차를 함께 봐야 해 ★2) (3) 곡선에 축 눈금을 넣어 실제 표준편차 값을 추정시키면 ★2."
```

```yaml
- id: RPM-PROB-0440
  page: 73
  vendor_label: "유형 03 정규분포곡선의 성질"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    X 가 N(m, σ²) 를 따를 때 ㄱ~ㄷ(중심 기준 양쪽 확률 · P(X ≤ m+a) > 0.5 · P(X ≤ a)+P(X ≥ a)=1)
    중 항상 옳은 것. a 는 상수. 5지선다.
  category: "정규분포의 대칭성·연속확률변수 성질 → 항상 성립 여부 판정"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a 의 부호가 정해져 있지 않으므로 a < 0 인 경우를 따로 떠올려 ㄴ의 반례를 만듦"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정규분포곡선의 성질 — 항상 옳은 명제 고르기(대칭성·연속확률변수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ은 평균 기준 대칭이라 참, ㄷ은 연속확률변수에서 한 점의 확률이 0 이라 경계를 겹쳐 세도 합이 1 이라 참.
    ㄴ만 a 의 부호가 미정이라는 점을 잡아 반례를 세워야 한다. 「항상」이라는 한정어가 함정(T-부호·T-경계).
    분기 판단 MI d1 한 단계 · M_total 7 → 벤더 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "대칭성으로 ㄱ 확인 → a 부호 분기로 ㄴ 반례 → 연속확률변수 P(X=a)=0 으로 ㄷ 확인"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0440.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기 안의 기준점을 m+a, m−a, 2m−a 등으로 바꾼다. 제약: 참인 보기와 거짓인 보기가 섞여야 하고, 거짓 보기는 부호나 경계 하나 때문에 깨지도록 설계한다."
    creative: "(1) a > 0 이라는 조건을 붙이면 ㄴ이 참이 되어 답만 바뀌는 ★2 (2) 보기를 두 확률변수 비교로 바꾸면 표준화가 필요해 ★3 (3) 「항상」을 빼고 반례를 직접 제시하라고 하면 서술형 ★3."
```

```yaml
- id: RPM-PROB-0441
  page: 73
  vendor_label: "유형 03 정규분포곡선의 성질"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    X 가 N(44, 5²) 를 따를 때 P(t−3 ≤ X ≤ t+2) 가 최대가 되게 하는 실수 t. 5지선다.
  category: "길이가 고정된 구간 → 구간의 중점이 평균일 때 확률 최대"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구간 길이가 5 로 고정이라는 점을 보고, 확률(넓이) 최대 조건을 구간의 중점이 평균과 일치하는 것으로 바꿈"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정규분포곡선의 대칭성 — 고정 길이 구간의 확률 최대 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t 를 움직여도 구간 길이가 5 로 변하지 않는다는 것을 먼저 보아야 한다. 그러면 곡선이 가장 높은 곳을 구간 한가운데에 두는 배치가 최대이므로 중점 = 평균 한 줄로 끝난다.
    표준화를 시도하면 오히려 길을 잃는 문항이라 대칭 활용 SYM d2 로 라벨링했다. 벤더 「중」 출발점 ★2 유지(통찰 1개는 +1 조건 미달).
  tier: star_2
  mechanism_primary: "구간 길이 고정 확인 → 중점 (2t−1)/2 = 평균 44 → t"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0441.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평균(44)과 좌우 폭(−3, +2)을 바꿀 수 있다. 제약: 좌우 폭이 서로 달라야 t 가 평균과 어긋나 선택지가 갈리고, 답 t = 평균 + (좌폭−우폭)/2 가 선택지에 들어갈 꼴(정수나 간단한 분수)이어야 한다. 표준편차는 답에 영향이 없다."
    creative: "(1) 좌우 폭을 같게 하면 t = 평균이 되는 ★1 (2) 구간을 [t, t+k] 로 두고 최대 확률값까지 표로 구하게 하면 ★3 (3) 두 확률변수에서 각각 최대가 되는 t 를 구해 비교하면 ★3 · I-SYM 유지."
```

```yaml
- id: RPM-PROB-0442
  page: 73
  vendor_label: "유형 03 정규분포곡선의 성질"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    N(a, b²) 를 따르는 X 가 ㈎ P(X ≤ −2) = P(X ≥ 12), ㈏ V(X/2) = 1 을 만족시킬 때 a+b (b > 0).
  category: "두 확률이 같음 → 평균은 두 값의 중점 / 분산의 일차변환 → 표준편차"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "양쪽 꼬리 확률이 같다는 조건을 −2 와 12 가 평균에 대해 대칭이라는 조건으로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정규분포의 대칭성과 분산 성질로 평균·표준편차 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㈎는 대칭축이 두 점의 중점이라는 성질 한 줄, ㈏는 V(kX) = k²V(X) 공식 한 줄이라 두 조건이 독립적으로 a 와 b 를 하나씩 준다.
    b > 0 단서가 표준편차의 부호 함정을 막아 준다. 통찰 SYM d1 1개 · M_total 6 → 벤더 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "P(X ≤ −2) = P(X ≥ 12) → a = 중점 / V(X/2) = V(X)/4 = 1 → b → a+b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0442.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대칭인 두 점(−2, 12)과 일차변환 계수(1/2), 분산값(1)을 바꾼다. 제약: 두 점의 중점이 정수여야 하고 V(kX) = k²V(X) 로 얻는 b² 가 완전제곱이어야 b 가 유리수로 떨어진다."
    creative: "(1) ㈏를 E(2X+1) 로 바꾸면 평균 쪽이 겹쳐 조건이 충돌하므로 불가(설계 주의) (2) ㈏를 σ(3X) = 6 처럼 표준편차 일차변환으로 바꾸면 같은 ★2 (3) ㈎를 P(X ≤ −2) = P(X ≥ 12) 대신 P(X ≤ k) = 0.5 로 주면 ★1 로 내려간다."
```

### 유형 04 정규분포에서 확률 구하기

```yaml
- id: RPM-PROB-0443
  page: 74
  vendor_label: "유형 04 정규분포에서 확률 구하기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    P(m ≤ X ≤ x) 표가 주어질 때 N(20, 4²) 에서 P(12 ≤ X ≤ 28).
  category: "구간 끝을 m ± kσ 꼴로 읽기 → 표 조회 → 대칭으로 2배"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "m ± kσ 구간의 확률(표 이용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    12 와 28 이 평균 20 에서 각각 2σ 떨어져 있음을 확인하고 표의 2σ 값을 두 배 하면 끝난다. 표준화 계산도 필요 없다.
    통찰 없음 · M_total 5 로 −1 후보지만, 이 유형의 대표문제이고 표 읽는 절차 자체가 처음 나오는 자리라 ★2 로 둔다.
  tier: star_2
  mechanism_primary: "12, 28 = 20 ∓ 2σ 확인 → 표에서 2σ 확률 조회 → 대칭으로 2배"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0.9544$'
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0443.png
  latex: latex-bank/rpm-prob/items/0443.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평균·표준편차와 구간 끝을 바꾸되 끝점이 표에 있는 σ 의 정수·반정수 배가 되게 한다. 제약: 표에 없는 배수를 쓰면 풀 수 없다."
    creative: "(1) 구간을 한쪽만 주어 비대칭으로 만들면 두 값을 더하거나 빼야 하는 ★2 (2) 확률을 주고 구간 끝을 묻는 역방향으로 바꾸면 ★2 · I-BW (3) 표 대신 68-95-99.7 값을 조건으로 주면 ★1."
```

```yaml
- id: RPM-PROB-0444
  page: 74
  vendor_label: "유형 04 정규분포에서 확률 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    P(m−σ ≤ X ≤ m+σ) = a, P(m−2σ ≤ X ≤ m+2σ) = b 일 때 P(m−σ ≤ X ≤ m+2σ) 를 a, b 로 나타내기. 5지선다.
  category: "평균 기준으로 구간 분할 → 대칭으로 각각 절반 → 합"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "비대칭 구간을 평균에서 잘라 [m−σ, m] 과 [m, m+2σ] 로 나누고, 대칭이므로 각각 a/2, b/2 임을 사용"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "주어진 확률을 대칭 분할로 조합해 다른 구간의 확률 나타내기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수치가 하나도 없고 a, b 라는 문자만 있어 표현 추상도가 높다(Mₐ 3). 핵심은 구하려는 구간이 좌우 폭이 다르다는 것을 보고 평균에서 잘라 절반씩 쓰는 것.
    b−a 같은 오답은 구간을 겹치거나 빼는 착각에서 나온다. SYM d2 1개 · M_total 7 → 벤더 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "구간을 평균에서 분할 → 대칭으로 a/2 + b/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0444.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "σ 의 배수 조합(1σ·2σ·3σ)을 바꾼다. 제약: 구하는 구간의 두 끝이 서로 다른 배수여야 분할 통찰이 살아 있고, 같은 배수면 ★1 로 떨어진다."
    creative: "(1) P(m+σ ≤ X ≤ m+2σ) 를 묻게 하면 뺄셈 조합이 되는 같은 ★2 (2) a, b 에 구체 수치를 주면 ★1 (3) 세 개의 확률을 주고 한 구간을 두 가지 경로로 나타내 같음을 보이게 하면 서술형 ★3."
```

```yaml
- id: RPM-PROB-0445
  page: 74
  vendor_label: "유형 04 정규분포에서 확률 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    P(m ≤ X ≤ x) 표가 주어질 때 N(48, 3²) 에서 P(X ≤ k) = 0.0013 을 만족시키는 상수 k.
  category: "꼬리 확률 → 0.5 − 표값 → 평균에서 몇 σ 인지 역추적 → 경계값"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "확률이 먼저 주어졌으므로 표를 거꾸로 읽어 평균에서 떨어진 거리를 먼저 찾고 경계값을 만든다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "확률이 주어질 때 경계값 구하기(표 역방향 조회)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    0.0013 이 왼쪽 꼬리이므로 0.5 − 0.4987 로 표값을 만들고 그 자리가 3σ 임을 읽은 뒤, 평균보다 작은 쪽이므로 빼야 한다.
    부호(왼쪽/오른쪽)와 0.5 에서 빼는 처리가 함정 두 개(T-부호·T-경계). BW d1 1개 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "0.0013 = 0.5 − 표값 → 표에서 3σ → k = 48 − 3σ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$39$'
  answer_source: "답지"
  figure: crop:fig-0445.png
  latex: latex-bank/rpm-prob/items/0445.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평균·표준편차와 꼬리 확률을 바꾼다. 제약: 0.5 − 확률 값이 표에 실제로 있는 값이어야 하고, 그 자리가 σ 의 정수·반정수 배여야 k 가 깔끔하게 떨어진다."
    creative: "(1) P(X ≥ k) 로 방향을 바꾸면 부호만 반대인 ★2 (2) P(k ≤ X ≤ 평균) 처럼 안쪽 구간으로 주면 표값을 직접 써 ★1 (3) k 대신 σ 를 묻게 하면 미지수가 분모로 가 ★3."
```

### 유형 05 정규분포의 표준화

```yaml
- id: RPM-PROB-0446
  page: 74
  vendor_label: "유형 05 정규분포의 표준화"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    X ~ N(10, 2²), Y ~ N(20, 3²) 이고 P(10 ≤ X ≤ 14) = P(20 ≤ Y ≤ k) 일 때 상수 k. 5지선다.
  category: "양변을 각각 표준화 → 같은 Z 구간 → k"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 정규분포의 확률이 같을 때 표준화로 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 구간 모두 왼쪽 끝이 각자의 평균이라 표준화하면 0 부터 시작하는 Z 구간이 되고, 오른쪽 끝의 z 값이 같다고 놓으면 끝난다.
    표준화 자체가 이 유형의 표준 절차라 통찰로 세지 않았다. 통찰 없음 · M_total 5 로 −1 후보지만 대표문제라 ★2 유지.
  tier: star_2
  mechanism_primary: "(14−10)/2 = (k−20)/3 → k"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0446.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 분포의 평균·표준편차와 한쪽 구간 끝을 바꾼다. 제약: (끝−평균)/σ 가 같은 값이 되도록 두 표준편차의 비에 맞춰야 k 가 정수로 떨어진다."
    creative: "(1) 한쪽 구간의 왼쪽 끝을 평균이 아닌 값으로 주면 대칭·뺄셈이 더해져 ★3 (2) P(X ≥ a) = P(Y ≤ b) 로 방향을 반대로 두면 부호가 뒤집히는 ★3 (3) k 대신 Y 의 표준편차를 묻게 하면 ★2."
```

```yaml
- id: RPM-PROB-0447
  page: 74
  vendor_label: "유형 05 정규분포의 표준화"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    X ~ N(17, σ²) 에서 Z = (X−m)/6 이 표준정규분포를 따를 때 m−σ (σ > 0).
  category: "표준화 공식과 주어진 식을 비교 → m, σ 확정"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표준화 식의 정의 확인(평균·표준편차 읽기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표준화는 (X − 평균)/표준편차 이므로 주어진 식과 계수를 맞추면 m = 17, σ = 6 이 바로 나온다. 식 변형이 사실상 없다.
    통찰 없음 · M_total 5 → −1 조정으로 벤더 「중하」 출발점에서 ★1.
  tier: star_1
  mechanism_primary: "(X−m)/6 = (X−17)/σ → m = 17, σ = 6 → m−σ"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0447.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평균과 분모 값을 바꾼다. 제약: σ > 0 단서를 유지하고, 묻는 식(m−σ, mσ, m+2σ 등)이 정수로 떨어지게 한다."
    creative: "(1) Z = (X+3)/2 처럼 부호를 바꿔 m 을 음수로 만들면 같은 ★1 (2) Z 가 아니라 X 의 확률을 함께 묻게 하면 표 조회가 붙어 ★2 (3) Y = aX+b 를 표준화해 a, b 를 구하게 하면 ★3."
```

```yaml
- id: RPM-PROB-0448
  page: 74
  vendor_label: "유형 05 정규분포의 표준화"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    X ~ N(4, 1²), Y ~ N(m, 2²) 이고 P(1 ≤ X ≤ 7) = 2P(m ≤ Y ≤ 2m+3) 일 때 상수 m.
  category: "양변 표준화 → 대칭으로 좌변을 2배 꼴로 → z 값 비교"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "좌변 P(−3 ≤ Z ≤ 3) 을 대칭으로 2P(0 ≤ Z ≤ 3) 으로 바꿔야 우변의 계수 2 와 맞아떨어진다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "양변 표준화 + 대칭 활용으로 미지수 구하기(서술형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌변은 평균 기준 ±3σ 라 대칭으로 두 배 꼴이 되고, 우변은 왼쪽 끝이 평균 m 이라 0 부터 시작하는 Z 구간이 된다. 계수 2 를 어느 쪽에 붙이느냐가 이 문항의 전부.
    2m+3 이 m 보다 커야 구간이 성립한다는 점이 함정(T-범위). EQV d2 1개 · M_total 7 → 벤더 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "좌변 = 2P(0 ≤ Z ≤ 3) → 우변 = 2P(0 ≤ Z ≤ (m+3)/2) → (m+3)/2 = 3 → m"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0448.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌변 구간의 σ 배수와 우변 계수(2), Y 의 표준편차를 바꾼다. 제약: 좌변이 평균 대칭이라야 2배 처리가 되고, 우변 식 (2m+3−m)/σ 가 그 배수와 같아지는 m 이 유일한 양수로 나와야 한다."
    creative: "(1) 계수 2 를 빼면 좌우가 바로 같아져 ★2 미만 (2) 좌변을 비대칭 구간으로 두면 표 조회가 필요해 ★3 (3) 우변 구간의 왼쪽 끝을 m 이 아닌 값으로 주면 미지수가 두 군데에 들어가 ★4 후보."
```

```yaml
- id: RPM-PROB-0449
  page: 74
  vendor_label: "유형 05 정규분포의 표준화"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    X 는 평균 a·표준편차 3, Y 는 평균 a+7·표준편차 4 인 정규분포를 따르고 P(X ≥ b) = P(Y ≤ b) 일 때 a−b.
  category: "양쪽 꼬리 확률이 같음 → 표준화 값이 절댓값 같고 부호 반대 → b−a 를 한 덩어리로"
  M: {s: 2, k: 2, a: 3, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "한쪽은 오른쪽 꼬리, 다른 쪽은 왼쪽 꼬리이므로 두 z 값이 부호만 반대여야 한다는 관계로 옮기고, a 와 b 를 따로 구하지 않고 b−a 를 한 문자로 묶는다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "서로 다른 두 정규분포의 꼬리 확률이 같을 때 미지수 관계 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    표만 없고 문자만 있어 표준화 결과가 (b−a)/3 과 (b−a−7)/4 로 남는다. 두 확률이 서로 반대 방향 꼬리라 z 값의 부호가 반대라는 것을 잡아야 식이 하나로 닫힌다.
    a, b 를 개별로 구하려 들면 미지수 2개·식 1개라 막히고, b−a 를 한 덩어리로 보는 것이 열쇠. SYM d2 · M_total 9 → 벤더 「상중」 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "P(X ≥ b) = P(Y ≤ b) → (b−a)/3 = −(b−a−7)/4 → b−a → a−b"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0449.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 표준편차(3, 4)와 평균 차(7)를 바꾼다. 제약: 두 표준편차의 합이 평균 차를 나누어떨어지게 해야 b−a 가 정수로 나온다(σ1+σ2 가 평균 차의 약수 배). 부등호 방향은 서로 반대로 고정."
    creative: "(1) 부등호를 같은 방향으로 두면 표준화 값이 같아져 ★2 로 내려간다 (2) 평균 차를 문자 k 로 주고 b 를 k 로 나타내게 하면 ★4 (3) 세 번째 확률변수를 더해 연립으로 만들면 ★4 · I-CON."
```

### 유형 06 정규분포의 표준화; 확률 구하기

```yaml
- id: RPM-PROB-0450
  page: 75
  vendor_label: "유형 06 정규분포의 표준화; 확률 구하기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    X ~ N(25, 8²) 에서 표준정규분포표를 이용하여 P(|X−23| ≤ 10). 5지선다.
  category: "절댓값 부등식 → 구간 → 표준화 → 표 두 값 더하기"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값 부등식 구간의 확률(표준화·표 이용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    절댓값을 풀어 13 ≤ X ≤ 33 으로 바꾼 뒤 표준화하면 z 가 −1.5 와 1 로 평균을 사이에 끼므로 표의 두 값을 더한다.
    절댓값의 중심 23 이 평균 25 와 다르다는 점이 함정이다(T-경계·T-표기 — 대칭이라 착각하면 두 배로 계산한다). 절댓값 구간 분할은 표준 절차라 통찰로 세지 않았다. 대표문제 ★2.
  tier: star_2
  mechanism_primary: "|X−23| ≤ 10 → 13 ≤ X ≤ 33 → z = −1.5, 1 → 표값 두 개 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: crop:fig-0450.png
  latex: latex-bank/rpm-prob/items/0450.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평균·표준편차·절댓값 중심·반지름을 바꾼다. 제약: 두 끝의 z 값이 모두 표에 있는 값(0.5 단위 등)이어야 하고, 중심을 평균과 다르게 두어야 함정이 살아 있다."
    creative: "(1) 절댓값 중심을 평균과 같게 하면 대칭 2배로 ★1~2 (2) 확률을 주고 반지름을 묻게 하면 역방향 ★3 (3) |X−m| ≥ k 꼴 여사건으로 바꾸면 ★2 · 꼬리 두 개 합."
```

```yaml
- id: RPM-PROB-0451
  page: 75
  vendor_label: "유형 06 정규분포의 표준화; 확률 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    X ~ N(12, 6²) 이고 P(0 ≤ Z ≤ 1) = 0.3413, P(0 ≤ Z ≤ 2) = 0.4772 가 주어질 때
    다섯 개 확률값 주장 중 옳은 것 고르기. 5지선다.
  category: "선택지마다 표준화 → 주어진 두 표값으로 판정"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표준화 결과 판정형(선택지별 확률 계산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    선택지 다섯 개가 각각 꼬리·중심·양쪽 구간이라 표준화를 다섯 번 반복한다. 평균이 12 라 P(X ≥ 12) = 0.5, P(X ≤ 18) = 0.8413 처럼 0.5 와 0.3413 을 헷갈리게 배치한 것이 함정.
    새 통찰은 없고 같은 절차의 반복이라 노동량만 크다(M_total 8). [분류 이슈] 계산 마찰형 — 통찰 없이 반복 계산으로만 무거워 ★2 로 두고 기록.
  tier: star_2
  mechanism_primary: "선택지별 구간 → 표준화 → 0.5 ± 표값 조합으로 참거짓 판정"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0451.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평균·표준편차와 선택지의 구간 끝을 바꾼다. 제약: 모든 끝점의 z 가 주어진 표값(1, 2)으로만 나오게 해야 하고, 참인 선택지가 정확히 하나여야 한다."
    creative: "(1) 선택지 수를 셋으로 줄이고 보기(ㄱㄴㄷ) 꼴로 바꾸면 ★2 유지·부담 감소 (2) 틀린 선택지를 바르게 고치라고 하면 서술형 ★3 (3) 표값을 주지 않고 대소 비교만 묻게 하면 계산이 사라지고 대칭 통찰만 남아 ★2 · I-SYM."
```

```yaml
- id: RPM-PROB-0452
  page: 75
  vendor_label: "유형 06 정규분포의 표준화; 확률 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    X ~ N(25, 10²) 이고 Y = 2X+4 일 때 표준정규분포표를 이용하여 P(Y ≤ 94).
  category: "일차변환의 평균·표준편차 → 표준화 → 표 조회"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "Y 의 평균·표준편차를 새로 계산하거나, Y ≤ 94 를 X ≤ 45 로 되돌리거나 — 어느 쪽이든 같은 z 가 나온다는 것을 쓴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "일차변환된 확률변수의 확률(표준화·표 이용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    일차변환해도 정규분포를 따른다는 사실 위에서 E(Y) = 54, σ(Y) = 20 을 구하면 z = 2 한 줄이다. 표준편차에 |2| 를 곱한다는 점(4 는 영향 없음)이 함정.
    X 쪽으로 되돌려 P(X ≤ 45) 로 풀어도 같은 z 가 나오므로 두 경로가 동치다. EQV d1 1개 · M_total 6 → 벤더 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "Y ~ N(54, 20²) → z = (94−54)/20 = 2 → 0.5 + 표값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0.9772$'
  answer_source: "답지"
  figure: crop:fig-0452.png
  latex: latex-bank/rpm-prob/items/0452.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차변환 계수(2, 4)와 원 분포의 평균·표준편차, 경계값을 바꾼다. 제약: 최종 z 가 표에 있는 값이어야 하고, 계수를 음수로 두면 부등호가 뒤집히므로 발문도 함께 바꿔야 한다."
    creative: "(1) 계수를 음수(Y = −2X+4)로 두면 부등호 반전 함정이 추가되어 ★3 (2) Y 의 확률을 주고 계수를 묻게 하면 역방향 ★3 (3) Y = 2X+4 와 W = X/2 두 변환을 비교시키면 ★3 · I-SYM."
```

### 유형 07 정규분포의 표준화; 미지수의 값 구하기

```yaml
- id: RPM-PROB-0453
  page: 75
  vendor_label: "유형 07 정규분포의 표준화; 미지수의 값 구하기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    X ~ N(50, 5²) 에서 표준정규분포표를 이용하여 P(40 ≤ X ≤ a) = 0.8185 를 만족시키는 상수 a.
  category: "왼쪽 끝을 표준화해 표값 확보 → 전체에서 빼 남은 조각 → 표 역조회 → a"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "확률이 먼저 주어졌으므로 알고 있는 왼쪽 조각을 떼어 내고 남은 확률로 표를 거꾸로 읽어 z 를 찾는다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "확률이 주어진 구간에서 경계값 구하기(표 역조회)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    40 은 평균보다 2σ 작으므로 그 조각 확률을 표에서 읽고, 0.8185 에서 빼면 평균 오른쪽 조각이 남는다. 그 값을 표에서 거꾸로 찾아 z 를 얻고 a 를 만든다.
    a 가 평균보다 큰지 작은지를 먼저 가늠하지 않으면 부호를 놓친다(T-부호). BW d1 1개 · M_total 7 → 유형 대표문제 ★2.
  tier: star_2
  mechanism_primary: "P(40 ≤ X ≤ 50) 을 표에서 → 0.8185 − 그 값 → 표 역조회로 z → a = 50 + 5z"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$55$'
  answer_source: "답지"
  figure: crop:fig-0453.png
  latex: latex-bank/rpm-prob/items/0453.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평균·표준편차·왼쪽 끝·전체 확률을 바꾼다. 제약: 왼쪽 조각과 남은 조각이 모두 표에 있는 값이어야 하고, 두 값의 합이 주어진 전체 확률과 정확히 맞아야 한다."
    creative: "(1) a 가 평균보다 작게 나오도록 확률을 작게 주면 부호 함정이 커져 ★3 (2) 양 끝을 모두 미지수로 두고 대칭 조건을 붙이면 ★3 (3) 표준편차를 미지수로 두면 분모에 미지수가 들어가 ★3."
```

```yaml
- id: RPM-PROB-0454
  page: 75
  vendor_label: "유형 07 정규분포의 표준화; 미지수의 값 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    X ~ N(m, σ²) 에서 표준정규분포표를 이용하여 P(|X−m| ≤ kσ) = 0.9544 를 만족시키는 양수 k.
  category: "절댓값 구간을 표준화하면 m·σ 가 소거 → 대칭으로 절반 → 표 역조회"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "m, σ 가 구체값 없이 문자인데도 표준화하면 그대로 약분되어 P(|Z| ≤ k) 만 남는다는 것을 본다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "m ± kσ 구간의 확률에서 k 구하기(모수 소거)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    문자만 있어 당황할 수 있으나 표준화하면 m 과 σ 가 사라지고 표준정규분포의 대칭 구간만 남는다. 0.9544 의 절반을 표에서 거꾸로 읽으면 k 가 나온다.
    2배·절반 처리를 빠뜨리는 것이 유일한 함정. EQV d1 1개 · M_total 6 → 벤더 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "P(|Z| ≤ k) = 2P(0 ≤ Z ≤ k) = 0.9544 → 표 역조회 → k"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: crop:fig-0454.png
  latex: latex-bank/rpm-prob/items/0454.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 확률(0.9544 → 0.6826, 0.9974 등)만 바꾸면 된다. 제약: 확률의 절반이 표에 있는 값이어야 k 가 깔끔하게 나온다."
    creative: "(1) P(|X−m| ≥ kσ) 여사건으로 주면 한 단계 늘어 ★2 (2) k 를 주고 확률을 묻는 정방향으로 뒤집으면 ★1 (3) 비대칭 구간 P(m−aσ ≤ X ≤ m+bσ) 로 두고 a, b 관계를 묻게 하면 ★3."
```

```yaml
- id: RPM-PROB-0455
  page: 75
  vendor_label: "유형 07 정규분포의 표준화; 미지수의 값 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    X ~ N(m, 4) 에서 P(X ≥ 24) = 0.3085 를 만족시키는 상수 m (P(0 ≤ Z ≤ 0.5) = 0.1915 주어짐).
  category: "꼬리 확률 → 0.5 − 표값 → z 확정 → 평균 역산"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "확률에서 z 를 거꾸로 읽고, 표준화 식의 분자에 있는 미지수 m 을 역산한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "꼬리 확률이 주어질 때 평균 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    N(m, 4) 의 4 가 분산이므로 표준편차는 2 라는 점이 이 문항의 핵심 함정이다(T-표기). 0.3085 = 0.5 − 0.1915 에서 z = 0.5 를 읽고 (24−m)/2 = 0.5 로 m 을 얻는다.
    확률이 0.5 보다 작으므로 24 가 평균 오른쪽이라는 방향 판단도 필요하다(T-부호). BW d1 1개 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "0.3085 = 0.5 − 0.1915 → z = 0.5 → (24−m)/2 = 0.5 → m"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$23$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0455.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분산값과 경계값, 꼬리 확률을 바꾼다. 제약: 분산 표기(N(m, 4))를 유지하려면 분산이 완전제곱이어야 하고, 0.5 − 확률이 주어진 표값과 일치해야 한다."
    creative: "(1) N(m, σ²) 표기로 바꾸면 함정이 사라져 ★1~2 (2) 확률을 0.5 보다 크게 주면 평균이 경계 오른쪽이 되어 부호가 반대인 ★2 (3) 평균 대신 분산을 묻게 하면 미지수가 분모로 가 ★3."
```

```yaml
- id: RPM-PROB-0456
  page: 75
  vendor_label: "유형 07 정규분포의 표준화; 미지수의 값 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    X ~ N(20, 3²) 에서 표준정규분포표를 이용하여 P(X ≤ k) = 0.9332 를 만족시키는 상수 k.
  category: "누적 확률 − 0.5 → 표 역조회 → 경계값"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "확률에서 0.5 를 떼어 표에 있는 형태로 만든 뒤 z 를 거꾸로 읽는다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "누적 확률이 주어질 때 경계값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    0.9332 가 0.5 보다 크므로 k 는 평균보다 크다. 0.9332 − 0.5 를 표에서 거꾸로 읽어 z 를 얻고 k = 20 + 3z.
    0453 과 골조가 같고 왼쪽 조각이 0.5 로 이미 알려져 있어 한 단계 짧다. BW d1 1개 · M_total 5 → 벤더 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "0.9332 − 0.5 = 0.4332 → 표 역조회로 z = 1.5 → k = 20 + 3z"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$24.5$'
  answer_source: "답지"
  figure: crop:fig-0456.png
  latex: latex-bank/rpm-prob/items/0456.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평균·표준편차와 누적 확률을 바꾼다. 제약: 확률 − 0.5 가 표에 있는 값이어야 하고, 0.5 보다 작은 확률을 주면 z 가 음수가 되어 부호 처리가 추가된다."
    creative: "(1) 0.5 보다 작은 확률로 바꿔 k 가 평균보다 작게 만들면 ★2 · 부호 함정 추가 (2) P(X ≥ k) 꼴로 주면 여사건 한 단계 추가 ★2 (3) k 를 두 개 두고 P(k1 ≤ X ≤ k2) 대칭 조건을 붙이면 ★3."
```

### 유형 08 정규분포의 활용; 확률 구하기

```yaml
- id: RPM-PROB-0457
  page: 76
  vendor_label: "유형 08 정규분포의 활용; 확률 구하기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    사과 한 개의 무게가 평균 250 g · 표준편차 15 g 인 정규분포를 따를 때
    임의로 택한 사과의 무게가 220 g 이상 265 g 이하일 확률. 5지선다.
  category: "실생활 조건 → 정규분포 구간 → 표준화 → 표 두 값 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정규분포의 활용 — 주어진 구간의 확률(표 이용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    문맥은 포장일 뿐 골조는 구간 확률 계산이다. 220 과 265 를 표준화하면 z 가 평균을 사이에 끼므로 표의 두 값을 더한다.
    통찰 없음 · M_total 6 · 유형 대표문제 → ★2.
  tier: star_2
  mechanism_primary: "220, 265 표준화 → z = −2, 1 → 표값 두 개 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: crop:fig-0457.png
  latex: latex-bank/rpm-prob/items/0457.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평균·표준편차와 구간 양 끝을 바꾼다. 제약: 두 끝의 z 가 모두 표에 있는 값이어야 하고, 선택지가 소수 둘째 자리에서 구별되도록 간격을 둔다."
    creative: "(1) 구간을 한쪽 꼬리로 바꾸면 ★1~2 (2) 사과 1000개 중 해당 개수를 묻게 하면 도수 환산이 붙어 ★2 (3) 기준 무게에서 벗어난 것을 불량으로 보는 양쪽 꼬리로 바꾸면 ★3."
```

```yaml
- id: RPM-PROB-0458
  page: 76
  vendor_label: "유형 08 정규분포의 활용; 확률 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    과자 길이가 평균 13 cm · 표준편차 2 cm 인 정규분포를 따를 때 길이가 15 cm 이상일 확률
    (P(0 ≤ Z ≤ 1) = 0.3413 주어짐).
  category: "한쪽 꼬리 → 표준화 → 0.5 − 표값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정규분포의 활용 — 한쪽 꼬리 확률"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    z = 1 한 번 구하고 0.5 에서 표값을 빼면 끝나는 단일 단계 문항이다. 함정은 0.5 − 인지 0.5 + 인지 뿐.
    통찰 없음 · M_total 4 로 −1 조정. [분류 이슈] 벤더 「중」과 1단 차이로 ★1 로 기록.
  tier: star_1
  mechanism_primary: "z = (15−13)/2 = 1 → 0.5 − 0.3413"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0.1587$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0458.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평균·표준편차·경계값을 바꾼다. 제약: z 가 주어진 표값의 인수와 일치해야 하고(여기서는 1), 조건으로 주는 표값도 함께 바꿔야 한다."
    creative: "(1) 경계를 평균보다 작게 두면 0.5 + 표값이 되는 같은 ★1 (2) 두 경계를 주어 구간으로 만들면 ★2 (3) 확률을 주고 경계를 묻게 하면 역방향 ★2."
```

```yaml
- id: RPM-PROB-0459
  page: 76
  vendor_label: "유형 08 정규분포의 활용; 확률 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    수학 점수가 평균 57점 · 표준편차 8점인 정규분포를 따르고 45점 이하가 보충 수업 대상일 때
    임의로 택한 학생이 보충 수업을 받을 확률. 5지선다.
  category: "문맥 조건 → 점수 구간 → 표준화 → 0.5 − 표값"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정규분포의 활용 — 기준 이하일 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「보충 수업을 받는다」를 45점 이하로 옮기는 한 단계가 앞에 붙을 뿐 나머지는 왼쪽 꼬리 계산이다. z 가 음수라 대칭으로 부호를 옮기는 처리가 필요하다.
    통찰 없음 · M_total 5 · 벤더 「중」 → ★2 유지(문맥 해석 한 단계가 0458 보다 한 겹 많다).
  tier: star_2
  mechanism_primary: "보충 대상 = X ≤ 45 → z = −1.5 → 0.5 − 표값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: crop:fig-0459.png
  latex: latex-bank/rpm-prob/items/0459.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평균·표준편차·기준 점수를 바꾼다. 제약: z 가 표에 있는 값(0.5 단위)이어야 하고, 선택지를 소수 둘째 자리로 반올림해 두면 표값 선택이 자유로워진다."
    creative: "(1) 상위 기준(몇 점 이상 심화반)으로 바꾸면 오른쪽 꼬리 ★2 (2) 학생 수를 주고 보충 대상 인원을 묻게 하면 ★2 · 도수 환산 (3) 보충 대상 비율을 주고 기준 점수를 묻게 하면 역방향 ★2~3."
```

```yaml
- id: RPM-PROB-0460
  page: 76
  vendor_label: "유형 08 정규분포의 활용; 확률 구하기"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    신입생 1000명의 키가 평균 165 cm · 표준편차 5.5 cm 인 정규분포를 따를 때
    키가 176 cm 이상인 학생 수 (P(0 ≤ Z ≤ 2) = 0.48 주어짐).
  category: "꼬리 확률 → 전체 인원 곱 → 학생 수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정규분포의 활용 — 확률을 인원수로 환산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    z = 2 를 얻어 0.5 − 0.48 = 0.02 를 구한 뒤 1000 을 곱해 인원으로 바꾼다. 확률에서 도수로 넘어가는 마지막 곱셈이 이 유형의 표시 특징이다.
    서술형 태그지만 구역이 「유형」이라 출발점은 ★2 이고 통찰이 없어 그대로 유지.
  tier: star_2
  mechanism_primary: "z = (176−165)/5.5 = 2 → 0.5 − 0.48 = 0.02 → 1000 × 0.02"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$20$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0460.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 인원·평균·표준편차·경계 키를 바꾼다. 제약: (경계−평균)/σ 가 주어진 표값의 z 와 같아야 하고, 최종 인원이 정수로 떨어지도록 전체 인원을 확률의 분모에 맞춘다."
    creative: "(1) 두 경계 사이 인원으로 바꾸면 표값 두 개 합 ★2 (2) 인원 수를 주고 경계 키를 묻게 하면 역방향 ★2~3(유형 09 골조) (3) 두 학교 인원을 비교시키면 ★3 · I-EQV."
```

```yaml
- id: RPM-PROB-0461
  page: 76
  vendor_label: "유형 08 정규분포의 활용; 확률 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    등교 소요 시간이 평균 35분 · 표준편차 5분인 정규분포를 따르고 8시 20분까지 등교, 출발 시각이 7시 43분일 때
    지각하지 않을 확률 (P(0 ≤ Z ≤ 0.4) = 0.1554 주어짐).
  category: "시각 조건 → 허용 소요 시간으로 변환 → 표준화 → 0.5 + 표값"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「지각하지 않는다」를 두 시각의 차인 37분 이내로 옮겨야 확률변수의 구간이 생긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정규분포의 활용 — 시각 조건을 소요 시간 구간으로 바꾸기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계산 자체는 z = 0.4 한 줄이지만, 7시 43분과 8시 20분의 차 37분을 만들어 내는 앞 단계가 이 문항의 실제 관문이다(T-단위 — 분 단위 환산).
    지각하지 않을 확률은 X ≤ 37 이므로 0.5 + 표값. EQV d1 1개 · M_total 6 → 벤더 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "허용 시간 37분 → z = (37−35)/5 = 0.4 → 0.5 + 0.1554"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0.6554$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0461.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "출발 시각·등교 시각·평균·표준편차를 바꾼다. 제약: 두 시각의 차에서 평균을 뺀 값이 표준편차의 배수(표에 있는 z)여야 하고, 시각은 분 단위로 떨어지게 둔다."
    creative: "(1) 지각할 확률로 뒤집으면 여사건 한 단계 추가 ★2 (2) 지각 확률을 0.1 이하로 만들려면 몇 시에 출발해야 하는지 묻게 하면 역방향 ★3 (3) 버스·도보 두 경로의 분포를 비교시키면 ★3 · I-SC."
```

```yaml
- id: RPM-PROB-0462
  page: 76
  vendor_label: "유형 08 정규분포의 활용; 확률 구하기"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    기준 무게 46 g 과 1 g 이상 차이 나면 불량이고 골프공 무게가 평균 45.5 g · 표준편차 0.5 g 인 정규분포를 따를 때
    임의로 택한 골프공이 불량품일 확률. 5지선다.
  category: "기준과의 차 조건 → 양쪽 꼬리 두 개 → 각각 표준화 → 합"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "불량 조건이 기준보다 가벼운 쪽과 무거운 쪽 두 갈래인데 기준 46 이 평균 45.5 와 달라 두 꼬리가 비대칭이므로 각각 따로 계산해야 한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정규분포의 활용 — 기준과의 차 조건(비대칭 양쪽 꼬리)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    |X − 46| ≥ 1 을 X ≤ 45 또는 X ≥ 47 로 풀면 z 가 −1 과 3 으로 크게 다르다. 평균이 기준과 어긋나 있으므로 대칭으로 2배 하는 습관이 그대로 오답이 된다(T-경계·T-부호).
    오른쪽 꼬리가 아주 작은 값이라 무시하면 선택지 ①과 ②가 갈린다. MI d2 1개 · M_total 8 → 벤더 「상중」 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "|X−46| ≥ 1 → X ≤ 45 또는 X ≥ 47 → z = −1, 3 → 두 꼬리 확률 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지"
  figure: crop:fig-0462.png
  latex: latex-bank/rpm-prob/items/0462.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 무게·허용 오차·평균·표준편차를 바꾼다. 제약: 기준과 평균을 반드시 다르게 두어야 비대칭 통찰이 살아 있고, 두 꼬리의 z 가 모두 표에 있어야 한다. 선택지에는 대칭으로 착각했을 때 나오는 값을 오답으로 넣는다."
    creative: "(1) 기준과 평균을 같게 하면 대칭 2배로 ★2 로 내려간다 (2) 불량률을 주고 허용 오차를 묻게 하면 역방향 ★4 후보 (3) 합격품(여사건) 확률로 바꾸면 같은 ★3."
```

### 유형 09 정규분포의 활용; 미지수의 값 구하기

```yaml
- id: RPM-PROB-0463
  page: 77
  vendor_label: "유형 09 정규분포의 활용; 미지수의 값 구하기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    모집 정원 360명인 시험에 4500명이 응시하고 점수가 N(58, 10²) 를 따를 때 합격자의 최저 점수. 5지선다.
  category: "정원 비율 → 상위 확률 → 표 역조회 → 최저 점수"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "인원 비율 360/4500 을 상위 확률로 바꾼 뒤 표를 거꾸로 읽어 경계 점수를 역추적한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "상위 몇 %의 최저 점수 구하기(비율 → 표 역조회)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    360/4500 = 0.08 을 만들고 0.5 − 0.42 = 0.08 에서 z = 1.4 를 읽어 58 + 14 로 끝난다. 비율을 만드는 나눗셈 한 단계가 앞에 붙은 표 역조회형.
    합격선은 상위 쪽이므로 평균에 더해야 한다는 방향 판단만 확인하면 된다. BW d1 1개 · M_total 6 · 유형 대표문제 → ★2.
  tier: star_2
  mechanism_primary: "360/4500 = 0.08 → 0.5 − 0.42 → z = 1.4 → 58 + 10 × 1.4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0463.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정원·응시자 수·평균·표준편차를 바꾼다. 제약: 정원/응시자 비율이 0.5 − 표값 과 정확히 일치해야 하고, 최저 점수가 선택지에 들어갈 정수로 떨어지게 평균·표준편차를 맞춘다."
    creative: "(1) 하위 몇 명이 탈락인지로 바꾸면 왼쪽 꼬리 ★2 (2) 합격선을 주고 정원을 묻는 정방향으로 뒤집으면 ★2 (3) 두 해의 분포를 비교해 합격선 변화를 묻게 하면 ★3~4."
```

```yaml
- id: RPM-PROB-0464
  page: 77
  vendor_label: "유형 09 정규분포의 활용; 미지수의 값 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    수학 성적이 평균 80점 · 표준편차 10점인 정규분포를 따를 때 상위 11 % 이내에 드는 학생의 최저 점수(표 이용).
  category: "상위 비율 → 0.5 − 비율 → 표 역조회 → 최저 점수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "상위 비율을 오른쪽 꼬리 확률로 보고 표를 거꾸로 읽어 z 를 찾는다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "상위 몇 %의 최저 점수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    0.5 − 0.11 = 0.39 를 표에서 거꾸로 찾아 z 를 얻고 80 + 10z. 0463 에서 비율 계산 단계만 빠진 형태다.
    소수 둘째 자리 z 를 표에서 읽는 부담만 있고 통찰은 BW d1 하나. 벤더 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "0.5 − 0.11 = 0.39 → 표 역조회로 z → 80 + 10z"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$92.3$점'
  answer_source: "답지"
  figure: crop:fig-0464.png
  latex: latex-bank/rpm-prob/items/0464.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평균·표준편차·상위 비율을 바꾼다. 제약: 0.5 − 비율 이 표에 있는 값이어야 z 가 확정된다. 답은 소수 첫째 자리까지 떨어지게 표준편차를 조정한다."
    creative: "(1) 하위 몇 % 의 최고 점수로 바꾸면 부호가 반대인 ★2 (2) 등급 경계 두 개를 묻게 하면 ★3 (3) 학생 수를 주고 해당 인원까지 묻게 하면 ★2 · 도수 환산 추가."
```

```yaml
- id: RPM-PROB-0465
  page: 77
  vendor_label: "유형 09 정규분포의 활용; 미지수의 값 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    오렌지 당도가 평균 14 Brix · 표준편차 2 Brix 인 정규분포를 따르고 2000개 중 a Brix 이하가 320개일 때 상수 a(표 이용).
  category: "개수 → 비율 → 왼쪽 꼬리 확률 → 표 역조회 → 경계값"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "개수 320/2000 을 확률로 되돌린 뒤 표를 거꾸로 읽어 경계값을 역추적한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "주어진 개수에 해당하는 경계값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    320/2000 = 0.16 은 0.5 보다 작으므로 a 는 평균보다 작다. 0.5 − 0.16 = 0.34 를 표에서 거꾸로 읽어 z 를 얻고 14 − 2z 꼴로 빼야 한다(T-부호).
    0463 과 같은 골조이며 방향만 왼쪽이다. BW d1 1개 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "320/2000 = 0.16 → 0.5 − 0.16 = 0.34 → z = 1 → a = 14 − 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$12$'
  answer_source: "답지"
  figure: crop:fig-0465.png
  latex: latex-bank/rpm-prob/items/0465.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 개수·해당 개수·평균·표준편차를 바꾼다. 제약: 개수 비율이 0.5 − 표값 과 일치해야 하고, 비율이 0.5 를 넘으면 경계가 평균 오른쪽으로 옮겨가 부호가 바뀐다."
    creative: "(1) a Brix 이상이 몇 개인지 묻는 정방향으로 뒤집으면 ★2 (2) 상·하위 경계 두 개를 잡아 중간 등급 개수를 묻게 하면 ★3 (3) 표준편차를 미지수로 두면 ★3."
```

```yaml
- id: RPM-PROB-0466
  page: 77
  vendor_label: "유형 09 정규분포의 활용; 미지수의 값 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    400명이 응시한 경시대회 점수가 평균 87.4점 · 표준편차 2.5점인 정규분포를 따를 때
    상위 5명을 뽑았을 때 대표로 뽑힌 학생의 최저 점수(표 이용).
  category: "상위 인원 → 비율 → 표 역조회 → 최저 점수"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "뽑히는 인원 5/400 을 상위 확률로 바꾼 뒤 표를 거꾸로 읽는다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "상위 몇 명의 최저 점수 구하기(인원 → 비율 → 표 역조회)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    5/400 = 0.0125 로 비율이 아주 작아 z 가 2 를 넘는 자리에서 읽힌다. 0.5 − 0.0125 = 0.4875 를 표에서 거꾸로 찾는 것이 핵심 단계.
    비율이 소수 넷째 자리까지 내려가 표 읽기 부담이 0463 보다 크지만 골조는 같다. BW d1 1개 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "5/400 = 0.0125 → 0.5 − 0.0125 = 0.4875 → z → 87.4 + 2.5z"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$93$점'
  answer_source: "답지"
  figure: crop:fig-0466.png
  latex: latex-bank/rpm-prob/items/0466.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "응시 인원·선발 인원·평균·표준편차를 바꾼다. 제약: 선발 비율이 0.5 − 표값 과 정확히 맞아야 하고, 최저 점수가 정수나 소수 첫째 자리로 떨어지게 표준편차를 맞춘다."
    creative: "(1) 선발 인원을 늘려 z 를 1 근처로 낮추면 ★2 유지·부담 감소 (2) 최저 점수를 주고 선발 인원을 묻는 정방향이면 ★2 (3) 두 학교에서 각각 뽑을 때의 커트라인을 비교하면 ★3~4(0468 골조)."
```

```yaml
- id: RPM-PROB-0467
  page: 77
  vendor_label: "유형 09 정규분포의 활용; 미지수의 값 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    제품 무게가 평균 12.25 kg · 표준편차 0.1 kg 인 정규분포를 따르고 a kg 이하이면 가동을 멈출 때
    조사에 들어갈 확률이 0.0228 이 되는 상수 a. 5지선다.
  category: "왼쪽 꼬리 확률 → 0.5 − 확률 → 표 역조회 → 경계값"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "조사 확률을 왼쪽 꼬리로 보고 표를 거꾸로 읽어 평균에서 뺄 거리를 찾는다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "꼬리 확률이 주어질 때 기준값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    0.5 − 0.0228 = 0.4772 에서 z = 2 를 읽고 평균보다 작은 쪽이므로 12.25 − 0.2 로 빼야 한다. 표준편차가 0.1 이라 소수 자리 실수가 함정(T-단위).
    골조는 0465 와 같고 비율 환산 단계만 없다. BW d1 1개 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "0.5 − 0.0228 = 0.4772 → z = 2 → a = 12.25 − 0.1 × 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: crop:fig-0467.png
  latex: latex-bank/rpm-prob/items/0467.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평균·표준편차·조사 확률을 바꾼다. 제약: 0.5 − 확률이 표에 있어야 하고, 선택지 간격이 표준편차의 절반 정도여야 오답이 구별된다."
    creative: "(1) 기준을 상한으로 두어 a 이상이면 조사하는 것으로 바꾸면 오른쪽 꼬리 ★2 (2) 상·하한 두 기준으로 불량 판정하면 ★3(0462 골조) (3) 확률 대신 하루 생산량 중 개수를 주면 비율 환산이 추가되어 ★2."
```

```yaml
- id: RPM-PROB-0468
  page: 77
  vendor_label: "유형 09 정규분포의 활용; 미지수의 값 구하기"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    A 반은 평균 57.3 kg · 표준편차 7 kg, B 반은 평균 60.1 kg · 표준편차 5 kg 인 정규분포를 따르고 두 반 학생 수가 같을 때
    A 반에서 65 kg 이상인 학생 수가 B 반에서 k kg 이상인 학생 수의 1/2 배가 되는 상수 k.
  category: "학생 수 같음 → 인원 비를 확률 비로 → A 쪽 확률 계산 → B 쪽 역조회"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 반의 학생 수가 같다는 조건 덕분에 인원수 비가 그대로 확률 비가 되어 미지의 학생 수가 사라진다"
    - step: 3
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "B 반 쪽은 확률이 먼저 정해지므로 표를 거꾸로 읽어 k 를 역추적한다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "두 정규분포의 인원 비 조건으로 기준값 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A 반 확률을 먼저 구한 뒤 1/2 배 관계를 뒤집어 B 반 확률을 2배로 키우는 방향(어느 쪽이 큰지)을 놓치면 바로 틀린다. 학생 수가 문자로도 주어지지 않아 「같다」는 조건을 확률 비로 옮기는 것이 첫 관문.
    그 뒤는 표 역조회 한 번. 통찰 2개지만 각 단계가 유형 08·09 의 표준 절차라 +1 하지 않고 벤더 「상중」 출발점 ★3 을 유지했다. [분류 이슈] 로 기록.
  tier: star_3
  mechanism_primary: "P_A(X ≥ 65) 계산 → 학생 수 같음 → P_B(Y ≥ k) = 2 × P_A → 표 역조회 → k"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$63$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0468.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 반의 평균·표준편차와 배수(1/2)를 바꾼다. 제약: A 쪽 z 와 B 쪽 z 가 모두 조건으로 주는 표값과 일치해야 하고, 배수를 곱한 확률이 0.5 를 넘지 않아야 한다. k 는 정수로 떨어지게 맞춘다."
    creative: "(1) 두 반의 학생 수를 다르게 주면 비례 계산이 한 겹 늘어 ★4 (2) 배수 대신 두 인원이 같다고 하면 ★3 유지·계산 감소 (3) k 를 주고 배수를 묻는 정방향이면 ★2~3."
```

### 유형 10 이항분포와 정규분포의 관계

```yaml
- id: RPM-PROB-0469
  page: 78
  vendor_label: "유형 10 이항분포와 정규분포의 관계"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    X 가 이항분포 B(150, 3/5) 를 따를 때 표준정규분포표를 이용하여 P(96 ≤ X ≤ 105). 5지선다.
  category: "이항분포의 평균·분산 → 정규분포 근사 → 표준화 → 표 두 값 차"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "이항분포를 평균 np·분산 npq 인 정규분포로 바꿔 표를 쓸 수 있는 표현으로 옮긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이항분포의 정규분포 근사로 확률 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    np = 90, npq = 36 에서 표준편차 6 을 얻고 두 끝을 표준화하면 z 가 1 과 2.5 로 둘 다 평균 오른쪽이라 표값을 빼야 한다(더하면 오답).
    근사 전환 RT d1 1개 · M_total 6 · 유형 대표문제 → ★2.
  tier: star_2
  mechanism_primary: "B(150, 3/5) → N(90, 6²) → z = 1, 2.5 → 표값 차"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: crop:fig-0469.png
  latex: latex-bank/rpm-prob/items/0469.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n 과 p, 구간 양 끝을 바꾼다. 제약: npq 가 완전제곱이어야 표준편차가 정수로 나오고, 두 끝의 z 가 표에 있는 값이어야 한다. n 은 충분히 커야 근사가 정당하다."
    creative: "(1) 구간이 평균을 사이에 끼게 두면 표값 합이 되는 같은 ★2 (2) 확률을 주고 구간 끝을 묻게 하면 역방향 ★3 (3) 확률질량함수 꼴로 n, p 를 숨기면 ★2~3(0471 골조)."
```

```yaml
- id: RPM-PROB-0470
  page: 78
  vendor_label: "유형 10 이항분포와 정규분포의 관계"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    X 가 B(225, 4/5) 를 따를 때 근사적으로 N(a, b) 를 따르고 P(168 ≤ X ≤ 180) = P(0 ≤ Z ≤ c) 일 때 a+b+c.
  category: "이항 → 정규 근사로 a, b → 구간 표준화 → 대칭으로 c → 합"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "이항분포를 평균 np·분산 npq 인 정규분포로 옮겨 a, b 를 확정한다"
    - step: 3
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "표준화한 구간이 음수에서 0 까지이므로 대칭을 써서 0 부터 c 까지로 접어 c 를 읽는다"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "이항분포의 정규근사에서 모수와 표준화 값 구하기(서술형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    N(a, b) 표기에서 b 가 분산이라는 점이 함정이다(T-표기 — 표준편차로 착각하면 a+b 가 어긋난다). np = 180 이 마침 구간의 오른쪽 끝이라 표준화하면 −2 에서 0 까지가 되고, 대칭으로 접으면 c = 2.
    근사 RT d1 과 대칭 SYM d1 둘 다 이 유형의 표준 도구라 +1 하지 않고 벤더 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "a = np = 180, b = npq = 36 → z = −2 ~ 0 → 대칭으로 c = 2 → a+b+c"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$218$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0470.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n, p 와 구간 양 끝을 바꾼다. 제약: npq 가 완전제곱이라야 z 가 깔끔하고, 구간의 한쪽 끝을 평균에 맞춰 두어야 c 가 하나로 정해진다."
    creative: "(1) 구간을 평균 오른쪽으로 두면 대칭 단계가 빠져 ★2 미만 (2) N(a, b) 를 N(a, b²) 표기로 바꾸면 함정이 사라져 ★1~2 (3) c 를 주고 n 을 묻게 하면 역방향 ★3~4."
```

```yaml
- id: RPM-PROB-0471
  page: 78
  vendor_label: "유형 10 이항분포와 정규분포의 관계"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    확률질량함수가 180Cx (5/6)^x (1/6)^(180−x) 꼴로 주어진 X 에 대하여 P(X ≥ 160)
    (P(0 ≤ Z ≤ 2) = 0.4772 주어짐).
  category: "확률질량함수 → 이항분포 모수 식별 → 정규근사 → 꼬리 확률"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "확률질량함수의 꼴에서 n = 180, p = 5/6 을 읽어 이항분포로 옮기고 다시 정규분포로 근사한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "확률질량함수로 주어진 이항분포의 정규근사"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    지수 x 에 붙은 것이 5/6 이므로 p = 5/6 (1/6 로 잘못 읽으면 평균이 30 이 되어 완전히 어긋난다 — T-표기 함정).
    np = 150, npq = 25 에서 표준편차 5 를 얻고 z = 2 로 0.5 − 0.4772. 모수 식별 RT d1 1개 · M_total 7 → 벤더 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "확률질량함수 → B(180, 5/6) → N(150, 5²) → z = 2 → 0.5 − 0.4772"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0.0228$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0471.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n 과 p, 경계값을 바꾼다. 제약: npq 가 완전제곱이어야 하고(180·5/6·1/6 = 25 처럼), 경계의 z 가 조건으로 주는 표값과 맞아야 한다."
    creative: "(1) P(X ≤ k) 꼴로 바꾸면 0.5 + 표값이 되는 같은 ★2 (2) 여사건 P(X < 160) 으로 물으면 한 단계 추가 ★2 (3) 확률을 주고 경계를 묻게 하면 역방향 ★3."
```

## 표본 판정 요약 (34문)

- ★ 분포: ★1 3 · ★2 28 · ★3 3 · ★4 0 · ★5 0
- 통찰형 6(0441 · 0444 · 0448 · 0449 · 0462 · 0468) · 절차형 28 · premium 0
- 통찰 유형 분포: I-BW 9 · I-SYM 5 · I-RT 4 · I-EQV 4 · I-MI 2 (통찰 없음 7문)
- type_hint 상위: 「확률이 주어질 때 경계값·기준값 구하기(표 역조회)」 7 · 「정규분포의 활용 — 구간·꼬리 확률」 5 · 「정규분포곡선의 성질(그래프·대칭)」 5 · 「표준화로 미지수 구하기」 4 · 「이항분포의 정규근사」 3
- 그림: 13문(0438 · 0439 는 분포곡선, 나머지 11문은 표준정규분포표 또는 P(m ≤ X ≤ x) 표 크롭)
- 대상층: 하위권 3 · 중하위권 25 · 중위권 3 · 중상위권 3

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-PROB-0451 | 통찰 없이 선택지 5개 표준화 반복으로만 무거움(M_total 8 · 계산 마찰형) — v3.8 §2.11 의 질 저하 경고 방향에 해당. 라벨은 벤더 「중」대로 ★2 | ★2 |
| RPM-PROB-0458 | 단일 단계(표준화 1회 + 0.5 − 표값) · M_total 4 로 ★1 판정했으나 벤더는 「중」 — 1단 차이 | ★1 / ★2 |
| RPM-PROB-0468 | 통찰 2개(EQV d2 + BW d1)로 +1 후보(★4)였으나 각 단계가 유형 08·09 의 표준 절차라 벤더 「상중」 출발점 ★3 유지 | ★3 / ★4 |
| RPM-PROB-0470 | 통찰 2개(RT + SYM)지만 둘 다 이 유형의 기본 도구라 +1 하지 않음. 분산 표기 함정만 남아 ★2 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 압도적으로 반복된 골조는 **표 역조회(확률 → z → 경계값)** 다. 유형 07(0453~0456)과 유형 09(0463~0467)가 사실상 같은 골조이며 차이는 「인원/개수 → 비율」 환산 단계가 앞에 붙느냐뿐이다. 카탈로그에서는 「경계값 역산」 하나를 세우고 「비율 환산이 선행하는 활용형」을 하위 변형으로 두는 편이 낫다.
- 유형 06(0450~0452)과 유형 08(0457~0462)도 「구간 → 표준화 → 표 조회」로 동일하다. 문맥(실생활) 유무는 난이도를 바꾸지 않으므로 별도 유형으로 세울 필요가 없고, 대신 **기준점이 평균과 어긋난 비대칭 양쪽 꼬리**(0462)는 통찰이 다르므로 따로 세운다.
- 따로 세워야 할 유형: ① 고정 길이 구간의 확률 최대(0441 · I-SYM) ② 대칭 분할로 확률 조합(0444) ③ 두 분포의 꼬리 확률이 같을 때 미지수 관계(0449) ④ 인원 비 조건으로 기준값 구하기(0468) ⑤ 이항분포의 정규근사(0469~0471).
- 통합해도 될 유형: 유형 03 의 그래프 성질(0438~0440)은 「정규분포곡선의 성질 판정」 하나로 묶고 그림 유무만 변형 축으로 둔다.
