---
name: mechanism-데이터-RPM-CALC1-09-p2
description: RPM 미적분Ⅰ 09 정적분의 활용(2/3 · 유형 04~11) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅰ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc1
  section: 09 정적분의 활용
  unit_code: CALC1-09
  part: "2/3"
  extract_range: "126~130쪽 · 0830~0858"
  total_problems: 29
  unit_total: 85
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc1/items/<id>.tex
  image_source: latex-bank/rpm-calc1/figures/ (crops.json)
---

# RPM 미적분Ⅰ · 09 정적분의 활용 (2/3) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅰ 09 정적분의 활용 단원(전체 85문)의 두 번째 조각으로, 126~130쪽 유형 04(절댓값 그래프와 넓이)·05(곡선과 접선)·06(두 넓이가 같은 경우)·07(넓이 이등분)·08(넓이의 최솟값)·09(수직선 위의 점의 위치와 거리)·10(위치·거리의 활용)·11(속도 그래프)의 29문항(0830~0858)을 전수 판정했다. 이 범위는 교과서·유형 UP·시험에 꼭 나오는 문제 구역이 없고 「유형 NN」 구역만 있으며, 각 유형의 첫 문항은 「대표문제」 태그(난이도 표시 없음 → ★2 출발), 나머지는 난이도 중하·중·상중 표시(★1~2 / ★2 / ★3 출발)와 「서술형」 태그를 가진다. 그림 문항은 7문(0837·0838·0854~0858)이며 속도 그래프 5문은 꺾은선 넓이 셈이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 풀이 골조 한 줄(`mechanism_primary`), 단계별 통찰 라벨(`insights[]`), 바꿔도 되는 수와 제약(`variation_notes.numeric`), 통찰 골조를 유지한 변형과 ★ 변동 지점(`variation_notes.creative`)을 채웠다. 넓이 조건 유형(06·07)은 「넓이 조건 ⇔ 정적분 등식」 변환을 I-EQV d1 로, 최솟값 유형(08)의 미분·절대부등식 결합은 I-XU d1 로 일관되게 라벨링했고, 절댓값 구간 분할·접점 중근·|v| 분할·그래프 넓이 부호는 표준 절차(T-부호)로 보아 통찰로 세지 않았다.

## 문항 데이터

### 유형 04 절댓값 기호를 포함한 함수의 그래프와 넓이

```yaml
- id: RPM-CALC1-0830
  page: 126
  vendor_label: "유형 04 절댓값 기호를 포함한 함수의 그래프와 넓이"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    곡선 y=|x(x-1)| 과 직선 y=2 로 둘러싸인 도형의 넓이. 5지선다.
  category: "교점 → 절댓값 구간 분할 → (직선-곡선) 정적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값 기호를 포함한 함수의 그래프와 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    |x²-x|=2 는 x²-x=2 쪽만 실근이라 교점은 x=-1, 2. 넓이 = ∫_{-1}^{2}(2-|x²-x|)dx = 6-(5/6+1/6+5/6) = 25/6. 절댓값을 세 구간으로 나눠 부호를 뒤집는 표준 절차(T-부호)뿐이고 통찰 없음·M_total 6 → 유형 대표 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "|x²-x|=2 의 교점 -1, 2 → 구간별 부호 → ∫(직선-곡선) → 25/6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0830.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선 높이(2 → 6, 12)와 이차식의 근(x(x-1) → x(x-2), (x+1)(x-3))을 바꿀 수 있음. 제약: |f|=c 의 교점이 정수(f=c 가 정수근)이고, 아래쪽 f=-c 는 실근이 없어야(꼭짓점보다 위) 구간이 세 개로 유지됨. 선택지는 분모 6 유리수."
    creative: "(1) 직선을 y=x+k 로 기울이면 교점 방정식이 두 갈래 → ★3 (2) 대칭축 x=1/2 기준 대칭으로 반만 계산하게 요구(I-SYM d1 · ★2~3) (3) 넓이를 주고 직선 높이 c 를 역산하면 c 의 무리방정식 → I-BW · ★3."
```

```yaml
- id: RPM-CALC1-0831
  page: 126
  vendor_label: "유형 04 절댓값 기호를 포함한 함수의 그래프와 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    함수 y=x²-2|x|-3 의 그래프와 x축으로 둘러싸인 도형의 넓이.
  category: "우함수(y축 대칭) → x≥0 부분 정적분 × 2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값 기호를 포함한 함수의 그래프와 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    |x| 가 들어 있어 y축 대칭. x≥0 에서 x²-2x-3=(x-3)(x+1) 이므로 [0,3] 에서 x축 아래 → 넓이 = 2×(-∫_0^3(x²-2x-3)dx) = 2×9 = 18. 대칭으로 반만 계산하는 것은 이 유형의 표준 절차라 통찰로 세지 않음. M_total 5 라 ★1 후보이나 절댓값 그래프 처리와 x축 아래 부호 반전이 함께 있어 벤더 「중」 ★2 유지.
  tier: star_2
  mechanism_primary: "우함수 → x≥0 에서 근 x=3 → -∫_0^3 f × 2 → 18"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$18$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0831.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x²-2|x|-3 의 계수(-2|x| → -4|x|, 상수 -3 → -8)를 바꿀 수 있음. 제약: x≥0 에서 양의 근이 정수가 되도록 인수분해 가능하게 두고, 그래프가 x축 아래에 있는 구간이 [0, 근] 하나여야 함(상수항 음수)."
    creative: "(1) y=|x²-2x-3| 로 바꾸면 절댓값이 부호 반전용이 되어 골조가 0830 형으로 이동(★2) (2) 직선 y=k 와의 넓이로 바꾸면 교점 계산 추가 ★2~3 (3) 대칭을 못 쓰게 y=x²-2|x-1|-3 으로 축을 옮기면 구간 분할 두 번 → ★3."
```

```yaml
- id: RPM-CALC1-0832
  page: 126
  vendor_label: "유형 04 절댓값 기호를 포함한 함수의 그래프와 넓이"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=|x²-ax| 와 직선 y=ax (a>0) 로 둘러싸인 넓이가 27/8 일 때 상수 a. 5지선다.
  category: "교점(0, 2a) → 절댓값 구간 분할 → 넓이 a³ = 27/8"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값 기호를 포함한 함수의 그래프와 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    |x²-ax|=ax 는 x≥a 에서 x=2a, 0<x<a 에서는 x=2a 가 범위 밖이라 교점은 0, 2a 뿐. 넓이 = ∫_0^{2a}ax dx - ∫_0^{2a}|x²-ax|dx = 2a³-(a³/6+5a³/6) = a³ = 27/8 → a=3/2. 매개변수 a 를 끝까지 끌고 가는 구간 분할 계산(Mₐ 2·Mₖ 2)이 부담이나 조건 해석이 새로 필요하지 않은 절차형. 벤더 「상중」 ★3 출발·M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "|x²-ax|=ax 교점 0, 2a → 구간별 정적분 → 넓이 a³ → a³=27/8 → a=3/2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0832.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "넓이 값(27/8 → 8, 1/8, 64)을 완전세제곱 꼴로만 바꿈. 직선을 y=kax 로 두면 교점이 (1+k)a 가 되어 넓이는 a³ 의 상수배 — 선택지에 유리수가 나오도록 k 선택. 제약: a>0 유지, 교점이 절댓값 꺾이는 점 x=a 의 오른쪽에 하나만 생기도록."
    creative: "(1) a 를 주고 넓이를 구하게 하면 절차형 ★2 (2) 직선을 y=a²x 처럼 기울기와 곡선 계수를 분리하면 0<x<a 쪽 교점 존재 여부를 a 범위로 검토(I-VF d1) ★3~4 (3) 「넓이가 최소가 되는 a」로 바꾸면 유형 08 골조로 이동."
```

### 유형 05 곡선과 접선으로 둘러싸인 도형의 넓이

```yaml
- id: RPM-CALC1-0833
  page: 126
  vendor_label: "유형 05 곡선과 접선으로 둘러싸인 도형의 넓이"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    곡선 y=-x³ 과 이 곡선 위의 점 (-1, 1) 에서의 접선으로 둘러싸인 도형의 넓이. 5지선다.
  category: "접선 → 곡선-접선 = -(x+1)²(x-2) → 정적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 접선으로 둘러싸인 도형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y'=-3x² → 접선 y=-3x-2. -x³+3x+2 = -(x+1)²(x-2) 이므로 다른 교점 x=2, [-1,2] 에서 곡선이 접선 위. 넓이 = ∫_{-1}^{2}(-x³+3x+2)dx = 27/4 (또는 (x+1)²(x-2) 의 1/12 공식으로 3⁴/12). 접점이 중근이라는 사실은 이 유형의 표준 지식이라 통찰로 세지 않음. 유형 대표 ★2 출발·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "접선 y=-3x-2 → 차 -(x+1)²(x-2) → ∫_{-1}^{2} → 27/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0833.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점 x좌표 p(-1 → 1, 2, -2)와 곡선 계수(-x³ → x³, 2x³)를 바꿀 수 있음. 제약: 순수 삼차항 곡선이면 다른 교점은 항상 -2p 이고 넓이는 (3|p|)⁴/12 × |계수| 꼴 — 정수 접점이면 선택지 분모 4 또는 12."
    creative: "(1) 접선 대신 「접점에서의 법선」으로 바꾸면 교점 방정식이 인수분해가 안 돼 ★3~4 (2) 접선과 y축·x축으로 잘라 일부 영역만 묻기(0834 형 ★1~2) (3) 곡선 밖 한 점에서 그은 두 접선으로 바꾸면 0835 형 ★3."
```

```yaml
- id: RPM-CALC1-0834
  page: 126
  vendor_label: "유형 05 곡선과 접선으로 둘러싸인 도형의 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=x²+2 와 곡선 위의 점 (1, 3) 에서의 접선 및 y축으로 둘러싸인 도형의 넓이.
  category: "접선 → 곡선-접선 = (x-1)² → ∫_0^1"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 접선으로 둘러싸인 도형의 넓이"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    접선 y=2x+1. 곡선-접선 = (x-1)² 이고 y축(x=0)부터 접점(x=1)까지 ∫_0^1(x-1)²dx = 1/3. 접선 하나·정적분 한 줄로 끝나는 절차형·M_total 4. 벤더 「중」 ★2 출발이나 통찰 0·M_total ≤ 5 → -1 → ★1.
    [분류 이슈] 벤더 「중」 vs 판정 ★1(1단 차이 · 계산 한 줄) — 기록만.
  tier: star_1
  mechanism_primary: "접선 y=2x+1 → 차 (x-1)² → ∫_0^1 → 1/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0834.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점 x좌표 p(1 → 2, 3)와 상수항(2 → 임의)을 바꿀 수 있음(상수항은 넓이에 영향 없음 — 검산 포인트). 제약: p>0 이어야 y축과 접점 사이 영역이 생기고 넓이는 p³/3."
    creative: "(1) y축 대신 직선 x=k(접점 반대편)로 바꾸면 구간만 [k,p] 로 바뀜 ★1 (2) y축 대신 x축과 접선·곡선으로 바꾸면 접선의 x절편이 필요하고 영역이 두 조각 → ★2~3 (3) 접점을 (t, t²+2) 로 두고 넓이 최솟값을 물으면 유형 08(0844 형)."
```

```yaml
- id: RPM-CALC1-0835
  page: 126
  vendor_label: "유형 05 곡선과 접선으로 둘러싸인 도형의 넓이"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=x² 과 점 (1, -3) 에서 이 곡선에 그은 두 접선으로 둘러싸인 도형의 넓이. 5지선다.
  category: "외부점 접선 2개(접점 t=-1, 3) → 두 접선 교점 x=1 에서 분할 → 정적분 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 접선으로 둘러싸인 도형의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접점 (t, t²) 의 접선 y=2tx-t² 이 (1, -3) 을 지나면 t²-2t-3=0 → t=-1, 3. 두 접선 y=-2x-1, y=6x-9 의 교점 x=1(접점 x좌표의 중점)에서 나누면 ∫_{-1}^{1}(x+1)²dx + ∫_1^3(x-3)²dx = 8/3+8/3 = 16/3 (공식 (t₂-t₁)³/12 와 일치). 외부점 접선 세팅과 영역 분할이 이어지지만 각각은 표준 절차. 벤더 「상중」 ★3·M_total 6 → ★3 유지.
  tier: star_3
  mechanism_primary: "접선 y=2tx-t² 이 (1,-3) 통과 → t=-1, 3 → 교점 x=1 분할 → 8/3+8/3 = 16/3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0835.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "외부점 (1, -3) 을 (p, q) (q<p²) 로 바꾸면 접점은 t²-2pt+q=0 의 두 근, 넓이 = (t₂-t₁)³/12 = (2√(p²-q))³/12. 제약: p²-q 가 완전제곱수(접점 정수)·선택지 유리수. 곡선을 y=ax² 로 바꾸면 공식에 a 가 곱해짐."
    creative: "(1) 두 접선의 교점의 x좌표가 접점의 중점임을 보이고 쓰게 하면 I-SYM d1 ★3 (2) 넓이를 주고 외부점의 y좌표 q 를 역산(I-BW · 무리수 처리) ★3~4 (3) 접선 하나만 남기고 x축과의 영역으로 바꾸면 ★2."
```

### 유형 06 두 도형의 넓이가 같은 경우

```yaml
- id: RPM-CALC1-0836
  page: 127
  vendor_label: "유형 06 두 도형의 넓이가 같은 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    곡선 y=x(x-2)(x-k) (k>2) 와 x축으로 둘러싸인 두 도형의 넓이가 같을 때 상수 k.
  category: "두 넓이 같음 ⇔ ∫_0^k f dx = 0 → k 방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "위·아래 두 넓이가 같다 → 부호 붙은 정적분 ∫_0^k f dx = 0 으로 조건 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 도형의 넓이가 같은 경우(정적분 = 0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=0~2 에서 f>0, 2~k 에서 f<0. 「넓이가 같다」를 ∫_0^k x(x-2)(x-k)dx = 0 으로 바꾸는 한 단계가 이 유형의 핵심(EQV d1). 전개하면 k⁴/4-(k+2)k³/3+k³ = k³(4-k)/12 = 0 → k=4. 매개변수 k 의 사차식 정적분(Mₐ 2·Mₖ 2)이지만 조건 변환 뒤는 직진. 유형 대표 ★2 출발·통찰 1개 d1 → ★2.
  tier: star_2
  mechanism_primary: "넓이 같음 → ∫_0^k x(x-2)(x-k)dx = 0 → k³(4-k)/12 = 0 → k=4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0836.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "가운데 근(2 → 1, 3, 6)을 바꾸면 답은 항상 그 근의 2배(삼차함수 변곡점 대칭: 세 근의 평균이 가운데 근). 제약: k > 가운데 근 조건 유지. 첫 근을 0 이 아닌 곳에 두어도 되나 전개가 길어짐."
    creative: "(1) 답이 가운데 근의 2배임을 삼차함수의 변곡점 대칭으로 설명하게 하면 I-SYM d2 · ★3 (2) 곡선과 직선 y=mx 사이의 두 넓이가 같은 경우로 바꾸면 차함수 세팅이 하나 더(0837 형) (3) 「넓이의 비가 1:2」로 바꾸면 부호 붙은 정적분 하나로 안 끝나 ★3(0838 형)."
```

```yaml
- id: RPM-CALC1-0837
  page: 127
  vendor_label: "유형 06 두 도형의 넓이가 같은 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 곡선 y=x²(x-4) 와 y=ax(x-4) (0<a<4) 로 둘러싸인 두 도형(그림)의 넓이가 같을 때 상수 a.
  category: "차함수 x(x-4)(x-a) → 두 넓이 같음 ⇔ ∫_0^4 차 = 0 → a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 곡선 사이 두 넓이가 같다 → 차함수의 [0,4] 부호 붙은 정적분 = 0 으로 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 도형의 넓이가 같은 경우(정적분 = 0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    차 x²(x-4)-ax(x-4) = x(x-4)(x-a), 교점 0, a, 4. 「두 넓이 같음」 → ∫_0^4 x(x-4)(x-a)dx = 0 (EQV d1). 전개·적분하면 (32a-64)/3 = 0 → a=2. 0836 과 같은 골조에 차함수 세팅이 하나 더 있을 뿐. 벤더 「중」 ★2·통찰 1개 → ★2.
  tier: star_2
  mechanism_primary: "차 x(x-4)(x-a) → ∫_0^4 = 0 → (32a-64)/3 = 0 → a=2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: "crop:fig-0837.png"
  latex: latex-bank/rpm-calc1/items/0837.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통근 4 를 다른 양의 정수 c 로(x²(x-6), ax(x-6) → a=3). 답은 항상 c/2(차함수 근 0, a, c 의 변곡점 대칭). 제약: 0<a<c 조건, 그림의 곡선 라벨 위치가 고정이므로 어느 곡선이 아래인지가 바뀌지 않게."
    creative: "(1) 그림 없이 주면 어느 영역이 위·아래인지 학생이 판단(T-부호 추가) ★2~3 (2) 두 곡선을 y=x³-4x², y=ax²-4ax 처럼 전개해 제시하면 공통 인수 발견이 첫 단계(I-EQV d2) ★3 (3) 넓이 조건을 「한쪽이 다른 쪽의 2배」로 바꾸면 각 넓이를 따로 구해야 ★3."
```

```yaml
- id: RPM-CALC1-0838
  page: 127
  vendor_label: "유형 06 두 도형의 넓이가 같은 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=x²-2x+p (0<p<1) 가 y축·x축과 만드는 넓이 A(그림 왼쪽 위)와 x축 아래 넓이 B 에 대해 A:B=1:2 일 때 상수 p.
  category: "넓이 비 → 2A=B → ∫_0^α f + ∫_0^β f = 0 → 근과 계수 관계로 p"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A=F(α)-F(0), B=-(F(β)-F(α)) 로 놓고 2A=B ⇔ F(α)+F(β)=0 한 식으로 통합"
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "F(α)+F(β) 는 두 근의 대칭식 → α+β=2, αβ=p 로 근을 구하지 않고 정리"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "두 도형의 넓이 비 조건(정적분 등식 · 근과 계수 관계)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 근 α<β (0<α<1<β). A=F(α)-F(0), B=-(F(β)-F(α)) 에서 2A=B ⇔ F(α)+F(β)=0. F(x)=x³/3-x²+px 이므로 (α³+β³)/3-(α²+β²)+p(α+β) = (8-6p)/3-(4-2p)+2p = 2p-4/3 = 0 → p=2/3. 근을 1±√(1-p) 로 두고 밀어도 되지만 대칭식·근과 계수 관계 갈래가 훨씬 짧다. 넓이 비 조건 통합(EQV d2)+대칭식(SYM d1) 2개·M_total 9 → 벤더 「중」 ★2 에서 +1 → ★3.
    [분류 이슈] SYM 라벨(근과 계수 관계 활용)을 표준 절차로 보면 통찰 1개 ★2 — 기록만.
  tier: star_3
  mechanism_primary: "2A=B → F(α)+F(β)=0 → α+β=2, αβ=p 대입 → 2p-4/3=0 → p=2/3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지"
  figure: "crop:fig-0838.png"
  latex: latex-bank/rpm-calc1/items/0838.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비(1:2 → 1:1, 1:3)와 이차식의 일차 계수(-2x → -4x 이면 α+β=4)를 바꿀 수 있음. 제약: 0<p<(대칭축)² 이어야 y절편이 양수이고 두 근이 모두 y축 오른쪽(그림과 일치). 1:1 이면 F(β)=0 꼴로 더 단순."
    creative: "(1) 비 대신 「A=B」로 바꾸면 ∫_0^β f = 0 한 식 → EQV d1 ★2 (2) 곡선을 y=x²-2ax+p 로 두고 p 를 a 로 표현하게 하면 Mₐ 3 ★3~4 (3) y축 왼쪽까지 세 넓이로 늘리고 두 비 조건을 주면 조건 통합(I-CON) ★4."
```

### 유형 07 넓이를 이등분하는 경우

```yaml
- id: RPM-CALC1-0839
  page: 127
  vendor_label: "유형 07 넓이를 이등분하는 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    곡선 y=x²-2x 와 직선 y=mx (m>0) 로 둘러싸인 넓이가 x축에 의해 이등분될 때 (m+2)³ 의 값.
  category: "전체 넓이 (m+2)³/6 · x축 아래 조각 4/3 → 이등분 ⇔ 2×조각 = 전체"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x축이 이등분 ⇔ x축 아래 조각(곡선과 x축 사이 [0,2]) = 전체의 절반"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "넓이를 이등분하는 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    교점 x=0, m+2 → 전체 넓이 (m+2)³/6 (1/6 공식). x축이 자르는 아래 조각은 곡선과 x축 사이 [0,2] 넓이 8/6 = 4/3. 이등분 조건 4/3 = (m+2)³/12 → (m+2)³ = 16. 「x축으로 이등분」을 「아래 조각 = 절반」으로 읽는 한 단계(EQV d1)가 핵심이고 발문이 (m+2)³ 을 물어 세제곱근 처리를 면제. 유형 대표 ★2·통찰 1개 → ★2.
  tier: star_2
  mechanism_primary: "전체 (m+2)³/6 · 아래 조각 4/3 → 4/3 = (m+2)³/12 → (m+2)³=16"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0839.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선의 근 r(x²-2x → x²-4x 이면 아래 조각 64/6)을 바꾸면 (m+r)³ = 4r³ 꼴. 제약: m>0 이어야 직선이 x축 위로 올라가 영역이 x축 양쪽에 걸림. 발문을 (m+2)³ 대신 m 으로 바꾸면 무리수 답 → 선택지 필요."
    creative: "(1) 이등분선을 x축 대신 직선 y=kx 로 두면 두 조각 모두 1/6 공식 → EQV d1 유지 ★2 (2) 「x축 위 조각 : 아래 조각 = 1:3」처럼 비를 바꾸면 ★2~3 (3) 곡선을 y=x²-2ax 로 일반화해 m 을 a 로 표현 → Mₐ 3 ★3."
```

```yaml
- id: RPM-CALC1-0840
  page: 127
  vendor_label: "유형 07 넓이를 이등분하는 경우"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    곡선 y=-x²+3x 와 x축으로 둘러싸인 넓이가 직선 y=mx 에 의해 이등분될 때 m³-9m²+27m 의 값.
  category: "전체 9/2 · 직선 위쪽 조각 (3-m)³/6 → 이등분 ⇔ (3-m)³ = 27/2 → 전개"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "직선이 이등분 ⇔ 직선 위쪽 조각(곡선과 직선 사이) = 전체의 절반"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "넓이를 이등분하는 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전체 넓이 27/6 = 9/2. 직선과 곡선의 교점 x=0, 3-m 이므로 위쪽 조각은 (3-m)³/6. 이등분 ⇔ (3-m)³/6 = 9/4 → (3-m)³ = 27/2. 발문의 m³-9m²+27m = 27-(3-m)³ = 27/2. 「이등분 ⇔ 한 조각 = 절반」 변환(EQV d1)과 발문 식이 (3-m)³ 의 전개임을 알아보는 마무리. 벤더 「중」·서술형·통찰 1개 → ★2.
  tier: star_2
  mechanism_primary: "전체 9/2 → (3-m)³/6 = 9/4 → (3-m)³ = 27/2 → 27-(3-m)³ = 27/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{27}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0840.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선의 근 r(3 → 2, 4)을 바꾸면 (r-m)³ = r³/2 이고 발문 식은 r³-(r-m)³ 의 전개. 제약: 0<m<r 이어야 직선이 영역을 지남. 발문을 m 자체로 바꾸면 무리수(3-3/∛2)."
    creative: "(1) 직선을 원점을 안 지나는 y=m(x-1) 로 두면 교점이 둘 다 움직여 ★3 (2) 이등분 대신 「1:3 분할」 ★2 (3) 「이등분하는 직선이 두 개」가 되도록 곡선을 삼차로 바꾸면 케이스 분기(I-MI) ★3~4."
```

```yaml
- id: RPM-CALC1-0841
  page: 127
  vendor_label: "유형 07 넓이를 이등분하는 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=4x-x² 과 x축 사이 넓이가 곡선 y=ax² 에 의해 이등분될 때 양수 a. 5지선다.
  category: "전체 32/3 · 두 곡선 사이 조각 32/(3(1+a)²) → 이등분 ⇔ (1+a)²=2"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "곡선 y=ax² 이 이등분 ⇔ 두 곡선 사이 조각 = 전체의 절반"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "넓이를 이등분하는 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전체 64/6 = 32/3. 4x-x² = ax² 의 교점 x=0, 4/(1+a) 이고 두 곡선 사이 넓이 = ∫(4x-(1+a)x²)dx = (1+a)·(4/(1+a))³/6 = 32/(3(1+a)²). 이등분 ⇔ 이것이 16/3 → (1+a)²=2 → a=√2-1. 이등분 조건 변환(EQV d1)에 더해 (1+a) 를 묶어 1/6 공식으로 정리하는 대수 처리(Mₖ 2)가 있어 0840 보다 한 단계 무겁다. 벤더 「중」·통찰 1개·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "교점 4/(1+a) → 조각 32/(3(1+a)²) = 16/3 → (1+a)²=2 → a=√2-1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0841.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선 계수(4x-x² → 6x-x²)를 바꿔도 조각 넓이는 전체/(1+a)² 이므로 답은 항상 √2-1 — 그대로 두면 검산 포인트. 조건을 「1:3 분할」로 바꾸면 (1+a)²=4 → a=1 정수 답. 제약: a>0."
    creative: "(1) 조각 넓이가 전체×1/(1+a)² 임을 y축 방향 닮음으로 설명하게 하면 I-RT d2 ★3 (2) 이등분 곡선을 y=a(x-4)² 로 두면 대칭으로 같은 답 → I-SYM d1 ★3 (3) 곡선을 삼차로 바꾸면 1/6 공식 불가 ★3~4."
```

### 유형 08 넓이의 최솟값

```yaml
- id: RPM-CALC1-0842
  page: 128
  vendor_label: "유형 08 넓이의 최솟값"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    곡선 y=(x+1)(x-1)(x-a) (-1<a<1) 와 x축으로 둘러싸인 도형의 넓이가 최소가 되는 실수 a.
  category: "부호 판정 → 넓이 S(a) = ∫_{-1}^{a} f - ∫_a^1 f → S(a) 다항식 → 미분 최솟값"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 3
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정적분으로 만든 넓이 함수 S(a) 를 미분(극값 판정)으로 최소화 — 미분의 활용 단원 도구가 없으면 마무리 불가"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "넓이의 최솟값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    (-1,a) 에서 f>0, (a,1) 에서 f<0. S(a) = ∫_{-1}^{a} f dx - ∫_a^1 f dx 를 a 가 피적분식과 적분 구간 양쪽에 들어간 채로 계산하면 S(a) = -a⁴/6+a²+1/2. S'(a) = 2a(1-a²/3) = 0 → 구간 안에서 a=0, S''(0)>0 → 최소. S(a) 가 우함수라 a=0 을 예상할 수는 있으나 최소임은 확인해야 함. 넓이 함수를 미분으로 최적화하는 결합(XU d1)에 Mₖ 3 의 사차식 정리가 얹혀 M_total 9 → 유형 대표 ★2 에서 +1 → ★3.
    [분류 이슈] 「최솟값 → 미분」이 유형 제목이 지시하는 표준 절차라면 절차형 ★2~3 — XU 인정 범위 기록만.
  tier: star_3
  mechanism_primary: "S(a) = ∫_{-1}^{a} f - ∫_a^1 f = -a⁴/6+a²+1/2 → S'(a)=0 → a=0"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$0$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0842.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바깥 두 근(±1 → ±2)을 바꾸면 S(a) 계수만 바뀌고 답은 여전히 대칭 중심 0. 근을 (0, 2, a) 처럼 비대칭으로 두면 최소점은 가운데 1 이나 전개가 길어짐. 제약: a 가 두 근 사이에 있어야 부호 구조 유지."
    creative: "(1) 「최솟값 자체」(1/2)를 묻기 ★3 (2) 대칭 논증(S(a)=S(-a) → a=0 후보)만으로 답하게 허용하면 I-SYM d1 로 골조가 바뀜 ★2~3 (3) 직선 y=m(x-a) 와 곡선 사이로 확장하면 Mₐ 3 ★4."
```

```yaml
- id: RPM-CALC1-0843
  page: 128
  vendor_label: "유형 08 넓이의 최솟값"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    양수 k 에 대해 두 곡선 y=x³/k, y=-9kx³ 과 직선 x=1 로 둘러싸인 넓이의 최솟값.
  category: "[0,1] 에서 위-아래 = (1/k+9k)x³ → 넓이 (1/k+9k)/4 → 산술·기하평균"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "넓이 (1/k+9k)/4 의 최솟값을 절대부등식(산술·기하평균)으로 — 정적분 밖 도구"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "넓이의 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 곡선은 원점에서 만나고 0<x<1 에서 x³/k > 0 > -9kx³. 넓이 = ∫_0^1 (x³/k+9kx³)dx = (1/k+9k)/4. 1/k+9k ≥ 2·3 = 6 (등호 k=1/3) → 최솟값 3/2. 정적분은 한 줄이고 최솟값은 산술·기하평균 한 줄(XU d1) — 미분으로도 되지만 부등식이 빠름. 벤더 「중」·통찰 1개·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "∫_0^1 (x³/k+9kx³)dx = (1/k+9k)/4 → 산술·기하평균 ≥ 6/4 → 3/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0843.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 9 를 다른 완전제곱수(4, 16)로 바꾸면 최솟값 √계수/2. 적분 구간 끝(x=1 → x=2)을 바꾸면 2⁴/4 = 4 배. 제약: 곱 (1/k)(9k) 가 상수가 되도록 k 의 차수를 ±1 로 대칭 유지."
    creative: "(1) 최솟값이 되는 k 를 묻기(등호 조건 확인) ★2 (2) 두 곡선을 y=x²/k, y=-kx² 로 두면 (1/k+k)/3 → 같은 골조 ★2 (3) 구간을 x=k 까지로 바꾸면 넓이가 k 의 다항·유리식이 돼 미분 필요 ★3."
```

```yaml
- id: RPM-CALC1-0844
  page: 128
  vendor_label: "유형 08 넓이의 최솟값"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=x²-1 과 점 (t, t²-1) (0<t<1) 에서의 접선, y축, 직선 x=1 로 둘러싸인 넓이의 최솟값.
  category: "곡선-접선 = (x-t)² → S(t)=∫_0^1 (x-t)²dx = t²-t+1/3 → 이차식 최솟값"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "넓이의 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선 y=2tx-t²-1 이고 곡선-접선 = (x-t)² ≥ 0 이므로 [0,1] 전체에서 곡선이 위. S(t) = ∫_0^1 (x-t)²dx = ((1-t)³+t³)/3 = t²-t+1/3. 이차식이라 미분 없이 t=1/2 에서 최솟값 1/12. 접선 차가 완전제곱이라는 표준 사실과 이차식 꼭짓점만으로 끝나는 절차형·M_total 6. 벤더 「중」 → ★2.
  tier: star_2
  mechanism_primary: "차 (x-t)² → S(t) = t²-t+1/3 → t=1/2 → 1/12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{12}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0844.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 끝(x=1 → x=2, 0<t<2)을 바꾸면 S(t) = ((2-t)³+t³)/3, 최소는 여전히 중점 t=1. 곡선을 y=ax²+b 로 바꾸면 차가 a(x-t)² 로 a 배. 제약: 접점 t 가 구간 안에 있어야 두 조각이 다 생김."
    creative: "(1) S(t) 가 t=1/2 대칭임을 먼저 보게 하면 I-SYM d1 ★2 (2) 곡선을 삼차 y=x³ 으로 바꾸면 차가 (x-t)²(x+2t) 로 부호 변화 → 구간 분할·미분 필요 ★3~4 (3) 구간을 [-1,1] 로 하면 최솟값이 t=0 — 골조 유지 ★2."
```

### 유형 09 수직선 위의 점의 위치와 움직인 거리

```yaml
- id: RPM-CALC1-0845
  page: 128
  vendor_label: "유형 09 수직선 위의 점의 위치와 움직인 거리"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    원점 출발, v(t)=t²-7t+10 인 점 P 의 운동 방향이 두 번째로 바뀔 때의 위치. 5지선다.
  category: "v=0 부호 변화 시각 t=2, 5 → 두 번째 t=5 → 위치 ∫_0^5 v"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수직선 위의 점의 위치와 움직인 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    v=(t-2)(t-5), 부호가 바뀌는 시각 2, 5 → 두 번째는 t=5. 위치 = ∫_0^5 (t²-7t+10)dt = 125/3-175/2+50 = 25/6. 함정은 「방향 전환 = v 부호 변화」와 「위치(부호 붙은 적분) ≠ 움직인 거리」(T-부호·T-표기). 정적분 한 번의 절차형이지만 함정 두 갈래로 M_total 6 → 유형 대표 ★2 유지.
  tier: star_2
  mechanism_primary: "v=(t-2)(t-5) → 두 번째 전환 t=5 → ∫_0^5 v = 25/6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0845.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "v 의 두 근(2, 5 → 1, 4 / 3, 6)을 바꾸고 「첫 번째/두 번째」를 선택. 제약: 근이 양수·서로 다르고 정적분 값이 선택지 분모(3, 6)로 정리되게. 출발점을 원점이 아닌 x=c 로 두면 c 를 더하는 함정 추가."
    creative: "(1) 「두 번째로 방향을 바꿀 때까지 움직인 거리」로 바꾸면 |v| 분할 → ★2 (2) v 를 삼차로 두면 방향 전환이 세 번 → 부호표 ★2~3 (3) 「다시 원점을 지나는 시각」으로 바꾸면 위치=0 방정식(0847 형)."
```

```yaml
- id: RPM-CALC1-0846
  page: 128
  vendor_label: "유형 09 수직선 위의 점의 위치와 움직인 거리"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    원점 출발, 속도가 구간별 v(t)=-t²+2t (0≤t<2), t²-3t+2 (t≥2) 인 점 P 의 t=4 에서의 위치.
  category: "구간 나눠 정적분 두 개의 합 → 위치"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수직선 위의 점의 위치와 움직인 거리"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    위치 = ∫_0^2 (-t²+2t)dt + ∫_2^4 (t²-3t+2)dt = 4/3+14/3 = 6. 구간별 함수를 각 구간에 맞게 적분해 더하기만 하면 되고 부호 처리도 없다(위치를 물어 |v| 불필요). 벤더 「중하」·통찰 0·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "∫_0^2 (-t²+2t) + ∫_2^4 (t²-3t+2) = 4/3+14/3 = 6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0846.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 경계(2)와 두 식을 바꿀 수 있음 — 두 식이 경계에서 이어지게(둘 다 t=2 에서 0) 두면 자연스러움. 끝 시각(4 → 3, 5). 제약: 정적분 값이 정수 또는 간단한 분수."
    creative: "(1) 「t=4 까지 움직인 거리」로 바꾸면 두 번째 구간에서 v<0 인 (2,3) 을 다시 나눠야 → T-부호 추가 ★2 (2) 위치 함수를 구간별로 주고 속도의 연속성을 묻기 → 미분 XU ★2~3 (3) 그래프로 제시(유형 11 형)."
```

```yaml
- id: RPM-CALC1-0847
  page: 128
  vendor_label: "유형 09 수직선 위의 점의 위치와 움직인 거리"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    원점 출발, v(t)=t²-2t 인 점 P 가 출발 후 다시 원점으로 되돌아올 때까지 움직인 거리.
  category: "되돌아옴 ⇔ ∫_0^T v = 0 → T=3 → 거리 ∫_0^3 |v|"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「다시 원점으로 돌아온다」를 위치 x(T)=∫_0^T v dt = 0 (T>0) 으로 변환해 끝 시각 T 를 먼저 구함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "수직선 위의 점의 위치와 움직인 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x(t)=t³/3-t² = t²(t-3)/3 = 0 → T=3. (0,2) 에서 v<0, (2,3) 에서 v>0 이므로 거리 = -∫_0^2 v + ∫_2^3 v = 4/3+4/3 = 8/3. 「되돌아옴 ⇔ 변위 0」(EQV d1) 으로 끝 시각을 정한 뒤 |v| 분할이 이어지는 2단 구조. 함정: 위치 방정식 vs 거리(T-표기)·부호 분할(T-부호). 벤더 「중」·통찰 1개·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "x(T)=T²(T-3)/3=0 → T=3 → -∫_0^2 v + ∫_2^3 v = 8/3"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$\dfrac{8}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0847.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "v=t(t-2a) 꼴로 두면 되돌아오는 시각은 3a, 거리는 8a³/3 (a=1 → 8/3, a=2 → 64/3). 제약: 되돌아오는 시각이 정수가 되도록 근을 짝수 등으로 맞춤."
    creative: "(1) 「다시 원점을 지나는 순간의 속도」를 묻기 → v(3)=3 ★1~2 (2) 출발점을 x=c 로 두고 「원점을 지날 때까지」로 바꾸면 x(T)=-c 삼차 인수분해 ★3 (3) 두 점 P, Q 가 다시 만나는 시각으로 확장하면 상대 변위(0852 형)."
```

### 유형 10 위치와 움직인 거리의 활용

```yaml
- id: RPM-CALC1-0848
  page: 129
  vendor_label: "유형 10 위치와 움직인 거리의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    지상 90 m 에서 15 m/s 로 위로 쏘아 올린 물체(v=15-10t, 0≤t≤6)가 5초 동안 움직인 거리.
  category: "v=0 시각 3/2 → 거리 = ∫_0^{3/2} v - ∫_{3/2}^5 v"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "위치와 움직인 거리의 활용"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    v=0 은 t=3/2 (최고점). 거리 = ∫_0^{3/2}(15-10t)dt + ∫_{3/2}^5 (10t-15)dt = 45/4+245/4 = 145/2 (m). 함정은 「움직인 거리」라 |v| 로 나누는 것(T-부호)과 90 m·높이가 거리 계산에 안 들어간다는 것(T-표기). 0≤t≤6 은 t=6 에 착지한다는 뜻이라 5초는 범위 안. 유형 대표 ★2·절차형·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "v=0 → t=3/2 → ∫_0^{3/2}(15-10t) + ∫_{3/2}^5 (10t-15) = 145/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{145}{2}\,\mathrm{m}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0848.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초기 속도(15 → 20, 30)와 시각(5초 → 4초)을 바꿀 수 있음. 제약: 정지 시각 v₀/10 이 물음 시각보다 앞이어야 |v| 분할이 생기고, 착지 시각(h₀+v₀t-5t²=0 의 양근)이 물음 시각 이후여야 함 — 정의역 (0≤t≤T) 표기를 그에 맞게."
    creative: "(1) 「5초 후의 높이」로 바꾸면 90+∫_0^5 v → 부호 분할 없이 ★1 (2) 「지면에 닿을 때까지 움직인 거리」로 바꾸면 착지 시각을 높이 방정식으로 먼저 구해야(I-EQV d1) ★2~3 (3) 최고 높이와 착지 속력을 함께 묻는 서술형(0850 형)."
```

```yaml
- id: RPM-CALC1-0849
  page: 129
  vendor_label: "유형 10 위치와 움직인 거리의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    30 m/s 로 달리던 열차에 제동을 건 뒤 v(t)=30-3t 일 때, 정지할 때까지 달린 거리. 5지선다.
  category: "v=0 → t=10 → ∫_0^{10} v"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "위치와 움직인 거리의 활용"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    정지 ⇔ v=0 → t=10. 거리 = ∫_0^{10}(30-3t)dt = 300-150 = 150 (m). v 가 구간 내내 양수라 부호 분할도 없고 정적분 한 줄. 벤더 「중」 ★2 출발이나 통찰 0·M_total 4 → -1 → ★1.
    [분류 이슈] 벤더 「중」 vs 판정 ★1(1단 차이 · 부호 분할 없는 정적분 한 줄) — 기록만.
  tier: star_1
  mechanism_primary: "v=0 → t=10 → ∫_0^{10}(30-3t) = 150"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0849.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초기 속도 v₀(30)와 감속 계수 c(3)를 바꾸면 거리는 v₀²/(2c). 제약: 정지 시각 v₀/c 가 정수, 거리도 정수(선택지 10 단위)."
    creative: "(1) 「거리 150 m 안에 멈추려면 감속 계수의 최솟값」으로 뒤집으면 I-BW d1 ★2 (2) 제동 전 등속 구간을 붙여 총 거리(0853 형) ★2~3 (3) 그래프(직선)로 제시 → 삼각형 넓이 ★1."
```

```yaml
- id: RPM-CALC1-0850
  page: 129
  vendor_label: "유형 10 위치와 움직인 거리의 활용"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    지상 25 m 에서 20 m/s 로 위로 쏘아 올린 물체(v=20-10t)의 3초 후 높이 h₁ 과 최고 높이 h₂ 의 합.
  category: "h₁ = 25 + ∫_0^3 v · 최고점 ⇔ v=0 (t=2) → h₂ = 25 + ∫_0^2 v"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "위치와 움직인 거리의 활용"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    h₁ = 25+∫_0^3 (20-10t)dt = 25+15 = 40. 최고 높이는 v=0 인 t=2 에서 h₂ = 25+∫_0^2 v = 25+20 = 45. 합 85. 초기 높이 25 를 더하는 것(T-표기)과 「최고 ⇔ v=0」이 두 포인트인 절차형 서술형. 벤더 「중」·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "h₁ = 25+∫_0^3 v = 40 · v=0 → t=2 → h₂ = 25+∫_0^2 v = 45 → 85"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$85$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0850.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초기 높이(25)·초기 속도(20)·물음 시각(3초)을 바꿀 수 있음. 제약: 물음 시각이 최고점 시각(v₀/10)보다 뒤여야 부호 붙은 적분이 거리와 달라지고, 착지 전(0≤t≤5)이어야 함."
    creative: "(1) 「3초 동안 움직인 거리」를 함께 물으면 |v| 분할 추가 ★2 (2) 착지 시각을 묻게 하면 이차방정식 풀이 → I-EQV d1 ★2 (3) 최고 높이를 주고 초기 속도를 역산하면 I-BW d1 ★2~3."
```

```yaml
- id: RPM-CALC1-0851
  page: 129
  vendor_label: "유형 10 위치와 움직인 거리의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    단면 넓이 π cm² 인 수도관에서 물의 속도가 v(t)=4t-t² 일 때, 흐르기 시작해 멈출 때까지 흘러나온 물의 양.
  category: "멈춤 ⇔ v=0 (t=4) → 물기둥 길이 ∫_0^4 v → × 단면 넓이 π"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "위치와 움직인 거리의 활용"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    v=0 → t=4. ∫_0^4 (4t-t²)dt = 32-64/3 = 32/3 (cm) 는 흘러나온 물기둥의 길이이고, 부피는 단면 넓이 π 를 곱한 32π/3 (cm³). 정적분은 한 줄이지만 「속도의 적분 = 길이 → ×단면 = 부피」라는 단위 모델링(T-단위)이 핵심 포인트. M_total 5 라 ★1 후보이나 모델링 단계 때문에 벤더 「중」 ★2 유지.
  tier: star_2
  mechanism_primary: "v=0 → t=4 → ∫_0^4 (4t-t²) = 32/3 → ×π → 32π/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{32}{3}\pi\,\mathrm{cm}^3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0851.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "단면 넓이(π → 2π, 4)와 v 의 근 r(4 → 6)을 바꿀 수 있음: 물의 양 = 단면 × r³/6. 제약: 단위(cm², cm/s → cm³)를 발문에 그대로 두고, v ≥ 0 인 구간이 [0, r] 하나."
    creative: "(1) 「처음 2초 동안 흘러나온 양」처럼 구간을 잘라도 골조 동일 ★1~2 (2) 단면을 반지름 r 인 원으로 주고 물의 양에서 r 을 역산 → I-BW d1 ★2 (3) 두 수도관의 누적 유량이 같아지는 시각 → 정적분 등식 ★3."
```

```yaml
- id: RPM-CALC1-0852
  page: 129
  vendor_label: "유형 10 위치와 움직인 거리의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    B 가 A 보다 24 m 앞에서 동시에 출발, v_A=2t, v_B=t+1 일 때 두 자동차가 만나는 시각. 5지선다.
  category: "만남 ⇔ A 의 변위 - B 의 변위 = 24 → ∫_0^T (t-1)dt = 24 → T"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「만난다」를 두 위치가 같다 ⇔ 상대 속도 v_A-v_B 의 정적분 = 처음 간격 24 로 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "위치와 움직인 거리의 활용(두 물체가 만나는 시각)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    만나는 조건 ∫_0^T (2t-(t+1))dt = 24 → T²/2-T = 24 → T²-2T-48=0 → (T-8)(T+6)=0 → T=8. 두 물체 문제를 상대 변위 하나의 식으로 묶는 변환(EQV d1)이 유일한 고비이고 계산은 이차방정식. 처음에는 A 가 더 느리다(t<1)는 점은 식이 알아서 처리. 벤더 「중」·통찰 1개·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "∫_0^T (v_A-v_B) = 24 → T²/2-T = 24 → T=8"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0852.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "간격(24 → 15, 35)과 속도식을 바꿀 수 있음. 제약: T²/2-T = 간격 이 양의 정수해를 갖도록(간격 = T(T-2)/2 꼴: 15 → T=6, 35 → T=10). 선택지는 초 단위 정수."
    creative: "(1) 「만난 뒤 두 자동차 사이 거리가 최대가 되는 시각」 등 상대 위치의 극값 → 미분 XU ★3 (2) 두 물체가 마주 보고 달리면 상대 속도가 합 → 같은 골조 ★2 (3) 한 물체는 속도 그래프, 다른 물체는 등속으로 주면 유형 11 결합 ★3."
```

```yaml
- id: RPM-CALC1-0853
  page: 129
  vendor_label: "유형 10 위치와 움직인 거리의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    고속열차가 출발 후 4 km 를 달리는 동안 v(t)=(3/4)t²+(1/2)t+1/2 (km/min), 그 뒤 등속일 때 10분 동안 달린 거리.
  category: "거리 조건(4 km) → 시각 t=2 로 전환 → 이후 등속 v(2)=9/2 → 4 + 8×9/2"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구간이 「거리 4 km 까지」로 주어져 있어 s(t)=∫_0^t v = 4 를 풀어 시간 구간 [0,2] 로 바꿔야 함 — 거리 표현 → 시간 표현 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "위치와 움직인 거리의 활용(구간별 속도 모델링)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    s(t) = t³/4+t²/4+t/2 = 4 → t³+t²+2t-16=0 → (t-2)(t²+3t+8)=0 → t=2. 그 뒤 속도는 v(2)=3+1/2+1/2 = 9/2 km/min 로 일정 → 나머지 8분 동안 36 km. 총 4+36 = 40 (km). 조건이 시간이 아니라 거리로 주어진 구간 정의를 시간으로 되돌리는 전환(RT d2)이 핵심이고 삼차방정식 인수분해·km/min 단위(T-단위)가 따라옴. 벤더 「상중」 ★3·통찰 1개·M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "s(t)=4 → t=2 → v(2)=9/2 → 4+8×9/2 = 40"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$40\,\mathrm{km}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0853.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "거리 조건(4 km)과 총 시간(10분)을 바꿀 수 있음. 제약: s(t)=거리 가 정수 시각에서 풀리도록 계수를 맞출 것(현재 s(2)=4), 이후 등속은 v(전환 시각)로 자동 결정, 총 시간 > 전환 시각."
    creative: "(1) 「총 40 km 를 달리는 데 걸린 시간」으로 뒤집으면 I-BW d1 ★3 (2) 등속 구간 대신 「이후 일정한 감속으로 정지」를 붙이면 구간 3개 ★3~4 (3) 거리 조건을 시간 조건(2분 동안)으로 바꾸면 RT 가 사라져 절차형 ★2."
```

### 유형 11 속도의 그래프가 주어진 점의 위치와 움직인 거리

```yaml
- id: RPM-CALC1-0854
  page: 130
  vendor_label: "유형 11 속도의 그래프가 주어진 점의 위치와 움직인 거리"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    속도 그래프(0→1 에서 2 까지 상승, 1~2 는 2 유지, 2→6 에서 직선으로 -2 까지 감소, t=4 에서 0)가 주어진 점 P 의 t=0~6 움직인 거리.
  category: "거리 = |v| 아래 넓이 = 위쪽 사다리꼴 5 + 아래쪽 삼각형 2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "속도의 그래프가 주어진 점의 위치와 움직인 거리"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    [0,4] 위쪽: 삼각형 1+직사각형 2+삼각형 2 = 5. [4,6] 아래쪽 삼각형 2. 거리 = 5+2 = 7. 그래프 조각 넓이를 부호 없이 더하는 대표 골조(T-부호: 위치라면 5-2=3). 유형 대표 ★2 출발이나 통찰 0·M_total 4 → -1 → ★1.
    [분류 이슈] 대표문제이나 삼각형·사다리꼴 넓이 셈뿐이라 ★1 — 기록만.
  tier: star_1
  mechanism_primary: "|v| 넓이: (1+2+2)+2 = 7"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$7$'
  answer_source: "답지"
  figure: "crop:fig-0854.png"
  latex: latex-bank/rpm-calc1/items/0854.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그래프 꼭짓점 좌표(1, 2, 4, 6 과 높이 ±2)를 바꿀 수 있음 — 그림 라벨과 함께 수정. 제약: 넓이가 정수 또는 간단한 분수, 부호가 바뀌는 지점이 눈금에 있어야 함."
    creative: "(1) 「t=6 에서의 위치」로 바꾸면 5-2=3 (부호 붙은 넓이) ★1 (2) 「원점에서 가장 멀어질 때의 시각·위치」를 물으면 v 부호 변화 지점 t=4 판단 ★2 (3) 「다시 원점으로 돌아오는 시각」을 물으면 넓이 방정식 → t 의 이차식 ★2~3."
```

```yaml
- id: RPM-CALC1-0855
  page: 130
  vendor_label: "유형 11 속도의 그래프가 주어진 점의 위치와 움직인 거리"
  vendor_level: "중하"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    좌표 -3 에서 출발, 속도 그래프(t=0, 1, 2, 3, 4 에서 0, 1, 0, -1, 0 을 잇는 꺾은선)가 주어진 점 P 의 t=2 위치 a 와 t=4 위치 b 의 합.
  category: "위치 = 출발점 + 부호 붙은 넓이: a = -3+1 · b = a-1"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "속도의 그래프가 주어진 점의 위치와 움직인 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    [0,2] 위쪽 삼각형 넓이 1 → a = -3+1 = -2. [2,4] 아래쪽 삼각형 1 → b = -2-1 = -3. a+b = -5. 넓이는 삼각형 두 개뿐이지만 출발점 -3 을 더하는 것(T-표기)과 아래쪽 넓이를 빼는 것(T-부호) 두 함정이 서술형의 채점 포인트. M_total 5 라 ★1 후보이나 함정 두 갈래로 벤더 「중하」 범위의 위쪽 ★2.
  tier: star_2
  mechanism_primary: "a = -3+1 = -2 → b = -2-1 = -3 → a+b = -5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-5$'
  answer_source: "답지"
  figure: "crop:fig-0855.png"
  latex: latex-bank/rpm-calc1/items/0855.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "출발 좌표(-3 → 2, -5)와 그래프 높이(±1 → ±2)를 바꿀 수 있음(그림 라벨 수정). 제약: 두 삼각형 넓이가 같으면 b = 출발점 — 이 검산 포인트를 유지하거나 일부러 깨기."
    creative: "(1) 「t=0~4 움직인 거리」를 함께 물어 위치와 거리 차이를 대비 ★2 (2) 「점 P 가 가장 오른쪽에 있는 시각과 그때 위치」 → v 부호 변화 지점 t=2 판단 ★1~2 (3) 아래 삼각형 깊이를 미지수 k 로 두고 b 조건에서 k 역산(0856 형) ★2."
```

```yaml
- id: RPM-CALC1-0856
  page: 130
  vendor_label: "유형 11 속도의 그래프가 주어진 점의 위치와 움직인 거리"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    속도 그래프(높이 k 의 사다리꼴 [0,3] · 깊이 -2 의 삼각형 [3,5] · 높이 k 의 삼각형 [5,7])가 주어진 점 P 의 t=7 위치가 10 일 때 양수 k.
  category: "부호 붙은 넓이의 합 = 위치: 2k-2+k = 10 → k"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "속도의 그래프가 주어진 점의 위치와 움직인 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    [0,3] 사다리꼴 (1+3)k/2 = 2k, [3,5] 아래 삼각형 -2, [5,7] 삼각형 k. 위치 = 3k-2 = 10 → k=4. 그래프 넓이를 k 로 표현해 위치 조건으로 방정식을 세우는 절차형(Mₐ 2). 부호 붙은 넓이(T-부호)가 유일한 함정. 벤더 「중」·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "2k-2+k = 10 → k=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: "crop:fig-0856.png"
  latex: latex-bank/rpm-calc1/items/0856.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "위치 값(10 → 7 이면 k=3)과 아래 삼각형 깊이(-2 → -4)를 바꿀 수 있음(그림 라벨 -2 수정). 제약: 3k-(아래 넓이) = 위치 가 양의 정수 k 를 갖도록."
    creative: "(1) 「t=7 까지 움직인 거리가 14」로 바꾸면 3k+2=14 → 부호 처리가 반대 ★2 (2) 「t=7 에서 원점에 있다」로 바꾸면 3k=2 → k=2/3 (등식 골조 동일) ★2 (3) k 를 두 곳에 다르게(k, 2k) 넣고 위치·거리 두 조건으로 연립 → I-CON ★3."
```

```yaml
- id: RPM-CALC1-0857
  page: 130
  vendor_label: "유형 11 속도의 그래프가 주어진 점의 위치와 움직인 거리"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    속도 그래프(0~8, 높이 ±2 의 톱니: t=2 에서 0, t=4 에서 0 에 닿았다 다시 -2, t=6 에서 0, t=7 에서 2)가 주어진 점 P 에 대해 ㄱ(t=4 위치가 원점) · ㄴ(방향을 3번 바꿈) · ㄷ(t=1 과 t=7 의 위치가 같음)의 참·거짓. 5지선다.
  category: "ㄱ: [0,4] 부호 넓이 2-2=0 · ㄴ: t=4 는 v=0 이지만 부호 불변 → 2번 · ㄷ: 위치 1 vs -1"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "속도의 그래프가 주어진 점의 위치와 움직인 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ: ∫_0^4 v = 2-2 = 0 → 참. ㄴ: v 의 부호가 바뀌는 시각은 t=2 (+→-), t=6 (-→+) 두 번. t=4 는 v=0 에 닿을 뿐 부호가 그대로(-)라 방향 전환이 아님 → 거짓. ㄷ: t=1 위치 1, t=7 위치 = 0(t=4)-2+1 = -1 → 거짓. 답 ㄱ. 「v=0 ≠ 방향 전환」(T-경계) 함정이 ㄴ 의 핵심이고 나머지는 넓이 셈. 벤더 「중」·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "ㄱ 부호 넓이 0 참 · ㄴ 부호 변화 2회(t=4 는 접촉) 거짓 · ㄷ 1 ≠ -1 거짓 → ①"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: "crop:fig-0857.png"
  latex: latex-bank/rpm-calc1/items/0857.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "톱니 높이(±2)와 꼭짓점 시각을 바꿀 수 있음(그림 재작성 필요). 제약: t=4 에서 「닿기만 하는」 꼴을 유지해야 ㄴ 함정이 살고, ㄱ 이 참이 되려면 [0,4] 위·아래 넓이 동일."
    creative: "(1) ㄷ 을 「t=1 과 t=7 의 위치 차」처럼 수치로 바꾸면 절차형 ★2 (2) 「원점에서 가장 멀 때의 시각」 보기를 넣으면 위치 함수의 극대·극소 비교(I-MI d1) ★3 (3) 「움직인 거리가 처음으로 5 이상이 되는 시각」 보기 → 누적 넓이 ★2~3."
```

```yaml
- id: RPM-CALC1-0858
  page: 130
  vendor_label: "유형 11 속도의 그래프가 주어진 점의 위치와 움직인 거리"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    속도 그래프(0 에서 출발해 t=a 에서 최대, t=b 에서 0 을 지나 t=c 에서 음수)가 주어진 점 P 에 대한 다섯 진술(거리 = ∫_a^b v · ∫_0^c v = 0 이면 원점 · t=a 정지 · t=b 방향 전환 · 속력 최대) 중 옳지 않은 것. 5지선다(세로).
  category: "그래프의 개념 판별: v 부호(방향) · v=0(정지) · v'=0(최대 속도 ≠ 정지) · |v|(속력)"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "속도의 그래프가 주어진 점의 위치와 움직인 거리(개념 판별)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ① [a,b] 에서 v≥0 → 거리 = ∫_a^b v 참. ② 원점 출발+∫_0^c v = 0 → 원점 참. ③ t=a 는 v 가 최대(v'=0)인 순간이지 v=0 이 아니므로 「정지」가 아님 → 거짓. ④ t=b 에서 v 부호 +→- → 방향 전환 참. ⑤ 속력 |v| 의 최대는 v(a) 와 |v(c)| 중 큰 쪽 → 참. 계산 없이 속도·속력·가속도(그래프 기울기)·정지·방향 전환을 구별하는 개념 판별(Mₐ 3 · T-표기·T-부호). 벤더 「상중」 ★3·절차형이나 M_total 8 → ★3 유지.
  tier: star_3
  mechanism_primary: "각 진술을 v 부호·v=0·|v| 로 번역 → ③ (v 최대 ≠ 정지) 만 거짓"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-0858.png"
  latex: latex-bank/rpm-calc1/items/0858.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 개념 문항 — 그래프 모양(a<b<c 위치, 끝값 부호)만 바꿀 수 있음. 제약: ⑤ 의 비교 조건 |v(c)|>v(a) 가 조건문이므로 그림과 달라도 무방하나, 그림에서 |v(c)| 가 v(a) 보다 눈에 띄게 작게 그리면 혼동을 줄임."
    creative: "(1) 가속도(v 의 기울기) 진술을 추가하면 미분 개념과 결합 XU ★3 (2) 「∫_0^b v = ∫_b^c |v|」 조건을 추가하고 t=c 의 위치를 묻기 ★2 (3) 구체 함수 v=t(b-t) 로 바꾸면 계산 문항으로 내려감 ★2."
```

## 표본 판정 요약 (29문)

- ★ 분포: ★1 4 · ★2 19 · ★3 6 · ★4 0 · ★5 0
- 통찰형 11 · 절차형 18 · premium 0
- 통찰 라벨: I-EQV 9(0836·0837·0838·0839·0840·0841·0847·0852 + 0838 d2) · I-XU 2(0842·0843) · I-RT 1(0853 d2) · I-SYM 1(0838)
- type_hint 상위: 「위치와 움직인 거리의 활용」 6(그중 두 물체 만남 1 · 구간별 속도 모델링 1) · 「속도의 그래프가 주어진 점의 위치와 움직인 거리」 5(그중 개념 판별 1) · 「절댓값 기호를 포함한 함수의 그래프와 넓이」 3 · 「곡선과 접선으로 둘러싸인 도형의 넓이」 3 · 「두 도형의 넓이가 같은 경우」 3(그중 넓이 비 1) · 「넓이를 이등분하는 경우」 3 · 「넓이의 최솟값」 3 · 「수직선 위의 점의 위치와 움직인 거리」 3
- 그림: 7문(`crop:fig-0837.png` · `crop:fig-0838.png` · `crop:fig-0854.png` · `crop:fig-0855.png` · `crop:fig-0856.png` · `crop:fig-0857.png` · `crop:fig-0858.png`)
- 전사 답 확인 필요: 없음(29문 모두 재풀이 값이 전사본 answer 와 일치)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 2단 이상 어긋난 문항은 없고, 아래는 1단 차이 또는 통찰 라벨 인정 범위 이슈다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC1-0834 | 벤더 「중」이나 접선 하나·정적분 한 줄(M_total 4) 절차형 → -1 → ★1. 1단 차이 | ★1 / ★2 |
| RPM-CALC1-0838 | 넓이 비 조건 통합(EQV d2)+근과 계수 대칭식(SYM d1) 2개로 ★3. SYM 을 표준 절차로 보면 통찰 1개 ★2 | ★3 / ★2 |
| RPM-CALC1-0842 | 「넓이 함수 → 미분 최솟값」을 I-XU 로 인정(같은 과목 다른 단원 결합). 유형 제목이 지시하는 표준 절차로 보면 절차형 ★2~3 | ★3 / ★2 |
| RPM-CALC1-0843 | 산술·기하평균을 I-XU 로 인정. 절차형으로 봐도 M_total 6 ★2 동일 — ★ 변동 없음, 라벨만 이슈 | ★2 |
| RPM-CALC1-0849 | 벤더 「중」이나 부호 분할 없는 정적분 한 줄(M_total 4) → ★1. 1단 차이 | ★1 / ★2 |
| RPM-CALC1-0854 | 유형 대표문제이나 삼각형·사다리꼴 넓이 셈뿐(M_total 4) → ★1. 1단 차이 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint 는 RPM 유형 제목 8개(04~11)를 그대로 썼다. 이 범위 안에서 세 번 이상 반복된 골조는 「넓이 조건 ⇔ 정적분 등식」(06·07 합쳐 6문 · 모두 EQV d1)과 「|v| 분할·부호 붙은 넓이」(09·10·11 합쳐 14문)다.
- 통합해도 될 유형: 유형 06(두 넓이 같음)과 07(이등분)은 같은 골조(조건 → 정적분 등식 → 매개변수)이므로 카탈로그에서 「넓이 조건식(같음·이등분·비)」 하나로 두고 base ★2, 비 조건(0838 형)만 ★3 변형으로 표시하면 된다. 유형 04·05(절댓값·접선 넓이)는 「두 곡선 사이 넓이」의 하위 변형(1/6·1/12 공식 포함)으로 묶을 수 있다.
- 따로 세워야 할 유형: 유형 08 「넓이의 최솟값」은 정적분 밖 도구(미분 극값·절대부등식)가 반드시 붙는 XU 골조라 base ★3 이 자연스럽고, 0844 처럼 이차식 꼭짓점으로 끝나는 변형만 ★2 로 낮춘다. 유형 10 안의 「두 물체가 만나는 시각(상대 변위)」(0852)과 「거리 조건으로 구간이 정의된 속도 모델링」(0853 · RT d2)은 별도 하위 유형 가치가 있다. 유형 11 안의 「속도 그래프 개념 판별」(0858 · 계산 없음 · Mₐ 3)도 넓이 셈 문항과 분리해야 ★ 출발점이 맞는다.
- ★1 로 내려간 4문(0834·0846·0849·0854)은 모두 정적분 한두 줄의 절차형이라 카탈로그 base ★1 후보이며, 벤더 「중」 표시가 그대로 ★2 로 옮겨지지 않도록 M_total ≤ 5 규칙을 카탈로그에 명시하는 편이 좋다.
