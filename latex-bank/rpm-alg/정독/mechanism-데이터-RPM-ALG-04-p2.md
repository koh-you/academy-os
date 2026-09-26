---
name: mechanism-데이터-RPM-ALG-04-p2
description: RPM 대수 04 로그함수(2/3 · 유형 06~17) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-alg
  section: 04 로그함수
  unit_code: ALG-04
  part: "2/3"
  extract_range: "51~55쪽 · 0376~0413"
  total_problems: 38
  unit_total: 120
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-alg/items/<id>.tex
  image_source: latex-bank/rpm-alg/figures/ (crops.json)
---

# RPM 대수 · 04 로그함수 (2/3) 정독 데이터 (v1.0)

이 파일은 RPM 대수 04 로그함수의 51~55쪽, 유형 06(로그함수의 역함수)부터 유형 17($\log_a x$ 꼴이 반복되는 로그부등식)까지 12개 유형 구역 38문항을 다룬다. 이 범위는 전부 「유형 NN」 구역이라 벤더 난이도 신호는 유형 안의 위치와 난이도 표시(중하·중·상중)·태그(대표문제·서술형)로만 온다. 각 유형의 첫 문항이 「대표문제」(난이도 표시 없음)이고, 나머지는 중하~상중 사이에 분포한다. 유형 UP·시험에 꼭 나오는 문제·서술형 주관식·실력 Up 구역은 이 범위에 없다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 풀이 골조 한 줄(`mechanism_primary`), 단계별 통찰 라벨(`insights[]`), 바꿔도 되는 수와 제약(`variation_notes.numeric`), 통찰 골조를 유지한 채 설정을 바꿀 때 ★ 가 움직이는 지점(`variation_notes.creative`)을 채웠다. 이 범위의 골조는 크게 다섯 갈래다 — 역함수(그래프 대칭), 진수 이차식·$\log_a x$ 치환 이차식의 최대·최소, 지수에 로그가 있는 식의 양변 로그, 로그방정식·부등식의 밑 통일과 진수 조건, 치환 이차방정식의 근과 계수 관계.

## 문항 데이터

### 유형 06 로그함수의 역함수

```yaml
- id: RPM-ALG-0376
  page: 51
  vendor_label: "유형 06 로그함수의 역함수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    y=log_{1/2}(x+a)+b 의 역함수 f 의 그래프(점근선 y=-2 · y절편 -3/2 · 감소)가 주어질 때 상수 a, b 에 대하여 ab.
  category: "역함수 식 → 그림의 점근선·y절편 대입 → a, b"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 역함수 그래프에서 상수 결정(점근선·절편)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    역함수 f(x)=(1/2)^{x-b}-a 를 구한 뒤 그림의 점근선 y=-2 에서 a=2, y절편 f(0)=2^b-2=-3/2 에서 b=-1. 역함수 구하기·점근선·절편 대입이 모두 표준 절차. 유형 대표문제·통찰 없음·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "로그함수의 역함수(지수함수) 식 → 점근선 y=-a 로 a → y절편으로 b → ab"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: "crop:fig-0376.png"
  latex: latex-bank/rpm-alg/items/0376.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(1/2 → 1/3, 2, 3)과 점근선·절편 값을 바꿀 수 있음. 제약: 밑<1 이면 역함수가 감소이므로 그림의 개형과 일치해야 하고, y절편 조건 a^{-b}-a 가 깔끔한 거듭제곱(2^b=1/2 등)으로 풀려야 함. 그림 라벨(점근선·절편)을 같이 바꿔야 함."
    creative: "(1) 역함수 그래프 대신 원함수 그래프를 주고 역함수의 절편을 묻기(★2 유지) (2) 그림 없이 '역함수 그래프가 점 (0,-3/2) 를 지나고 점근선이 y=-2' 로 문장 조건화(★2) (3) 역함수 그래프가 두 점을 지난다는 조건에서 a, b 연립(지수 방정식 연립 · ★3)."
```

```yaml
- id: RPM-ALG-0377
  page: 51
  vendor_label: "유형 06 로그함수의 역함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    y=3^x 와 x=1·x축·y축으로 둘러싸인 넓이 A, y=log_3 x 와 x=3·x축으로 둘러싸인 넓이 B 일 때 A+B.
  category: "역함수 대칭으로 B 를 y축 쪽으로 옮김 → 직사각형 넓이"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "y=3^x 와 y=log_3 x 가 y=x 대칭임을 써서 B 를 y=3^x 와 y축·y=3 사이 영역으로 옮기면 A 와 합쳐 1×3 직사각형"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "역함수 대칭을 이용한 넓이 합(지수·로그 그래프)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    적분 없이 풀리려면 B 가 y=3^x 의 왼쪽 영역(0≤x≤1, 1≤y≤3 부분)과 합동임을 봐야 한다. 그 순간 A+B 는 가로 1·세로 3 직사각형이라 3. 계산은 없고 대칭 착안이 전부(SYM d2). 유형 난이도 중 출발 ★2 · 통찰 1개 → ★2 유지(M_total 4 로 낮지만 통찰형).
  tier: star_2
  mechanism_primary: "역함수 그래프의 y=x 대칭 → B ≅ y=3^x 왼쪽 영역 → A+B = 직사각형 1×3 → 3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3$'
  answer_source: "답지"
  figure: "crop:fig-0377.png"
  latex: latex-bank/rpm-alg/items/0377.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3 → 2, 4, 5 와 경계 x=1, x=3 → x=k, x=a^k 로. 제약: 두 직선이 서로 대응(x=k 와 x=a^k)해야 대칭 이동 후 직사각형 k×a^k 로 닫힘. 그림 라벨(1, 3, x=1, x=3)을 같이 바꿔야 함."
    creative: "(1) 경계를 x=1, x=2 에서 x=a, x=b 로 바꾸되 y=3^x 쪽을 y=1, y=3 으로 둔 세로 띠로 주기(같은 골조 ★2) (2) 두 넓이의 차 A-B 를 묻거나 세 영역으로 나누면 대칭 조각 맞추기가 늘어 ★3 (3) y=a^x 와 y=log_a x 사이 넓이를 y=x 로 나누어 같음을 논증하는 서술형(SYM d2+RT · ★3)."
```

```yaml
- id: RPM-ALG-0378
  page: 51
  vendor_label: "유형 06 로그함수의 역함수"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=log_2(x-1) 과 역함수 g 의 그래프에서 f 의 x절편 A, A 를 지나는 세로선과 g 의 교점 B, B 를 지나는 가로선과 f 의 교점 C 일 때 AB+BC.
  category: "역함수 식 → 점 A·B·C 순차 좌표 → 길이 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수와 역함수 그래프 위 점의 좌표·선분 길이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A(2,0) → g(x)=2^x+1 에서 B(2,5) → f(x)=5 인 x=33 으로 C(33,5). AB=5, BC=31. 역함수 구하기와 좌표 순차 계산뿐이며 대칭성을 쓰지 않아도 막힘이 없다. 벤더 상중(★3 출발)이나 통찰 0·M_total 5 → −1 후보 적용 ★2.
    [분류 이슈] 상중 라벨과 절차 판정(★2)이 1단 어긋남 — 그림·역함수 조합이 낯설어 벤더가 올린 것으로 보임.
  tier: star_2
  mechanism_primary: "f 의 x절편 A → 같은 x 에서 g 값으로 B → 같은 y 에서 f 역산으로 C → 길이 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$36$'
  answer_source: "답지"
  figure: "crop:fig-0378.png"
  latex: latex-bank/rpm-alg/items/0378.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(x)=log_a(x-p) 의 밑 a(2 → 3)와 평행이동 p 를 바꿀 수 있음. 제약: A 의 x좌표 p+1 을 g 에 넣은 값 a^{p+1}+p 가 정수가 되고, 다시 f 역산 a^{그 값}+p 가 너무 커지지 않게(밑 2·3, p≤2 정도). 그림 라벨 A, B, C 위치는 유지."
    creative: "(1) C 대신 C 를 지나는 세로선과 g 의 교점 D 까지 한 단계 더(★2~3) (2) B, C 의 좌표를 g(2)=f^{-1}(2) 로 대칭성으로만 읽게 하고 식을 주지 않기(SYM d1 · ★3) (3) 삼각형 ABC 의 넓이나 직선 AC 의 기울기로 바꾸면 계산만 늘어 ★2."
```

### 유형 07 로그함수의 최대·최소

```yaml
- id: RPM-ALG-0379
  page: 51
  vendor_label: "유형 07 로그함수의 최대·최소"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    정의역 2≤x≤6 에서 y=log_{1/2}(x^2-2x+8) 의 최댓값 M, 최솟값 m 일 때 M-m. 5지선다.
  category: "진수 이차식 범위 → 밑<1 감소로 최대·최소 교환 → 차"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "진수가 이차식인 로그함수의 최대·최소(정의역 제한)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    진수 (x-1)^2+7 은 [2,6] 에서 8~32. 밑 1/2 이 1보다 작으므로 진수 최소 8 에서 최댓값 -3, 진수 최대 32 에서 최솟값 -5, 차 2. 함정은 감소함수(T-부호)와 정의역 끝(T-범위) 둘. 유형 대표·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "진수 완전제곱 → 정의역에서 진수 범위 → 밑<1 감소 → M, m → 차"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0379.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수 이차식의 꼭짓점 위치·정의역·밑을 바꿀 수 있음. 제약: 정의역 양 끝과 꼭짓점에서의 진수 값이 밑의 거듭제곱(8=2^3, 32=2^5)이어야 M, m 이 정수로 나옴. 꼭짓점이 정의역 안이면 최소·최대 후보가 세 곳이 됨."
    creative: "(1) 밑을 1보다 크게 바꾸면 교환이 없어져 ★1~2 (2) 꼭짓점을 정의역 안에 두면 '진수 최솟값은 꼭짓점, 최댓값은 먼 끝' 두 판단이 필요해 ★2 유지 (3) 정의역 대신 x 의 조건을 부등식으로 주거나 밑을 매개변수 a 로 두고 a 의 범위에 따라 M, m 을 나누면 I-MI d1 · ★3."
```

```yaml
- id: RPM-ALG-0380
  page: 51
  vendor_label: "유형 07 로그함수의 최대·최소"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    y=log_2(x^2-6x+11) 이 x=a 에서 최솟값 m 을 가질 때 am.
  category: "진수 완전제곱 → 최소 진수 → 로그"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "진수가 이차식인 로그함수의 최대·최소(정의역 제한 없음)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    진수 (x-3)^2+2 의 최솟값 2 가 x=3 에서 나오고 밑 2>1 이므로 m=log_2 2=1, am=3. 완전제곱 한 줄. 벤더 중하·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "진수 완전제곱 → 최솟값 위치 a 와 진수 최솟값 → 로그 → am"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0380.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식 (x-p)^2+q 의 p, q 와 밑을 바꿀 수 있음. 제약: q 가 밑의 거듭제곱(2, 4, 8 / 3, 9)이어야 m 이 정수. q>0 필수(진수 조건)."
    creative: "(1) 밑을 1/2 로 바꾸어 최댓값을 묻기(감소 판단 한 단계 추가 · ★1~2) (2) 이차식이 위로 볼록(-x^2+…)이면 최댓값만 존재 — 존재하는 쪽을 고르게 하기(★2) (3) 최솟값 m 과 위치 a 를 주고 이차식 계수를 역산(I-BW 아님 · 미정계수 · ★2)."
```

```yaml
- id: RPM-ALG-0381
  page: 51
  vendor_label: "유형 07 로그함수의 최대·최소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    정의역 -1≤x≤2 에서 y=log_{1/2}(x+2)+k 의 최댓값이 3 일 때 최솟값. k 는 상수.
  category: "밑<1 감소 → 왼쪽 끝이 최대 → k 결정 → 오른쪽 끝이 최소"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "y=log_a(x+p)+k 의 정의역 제한 최대·최소(상수 결정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    감소함수이므로 x=-1 에서 최대 log_{1/2}1+k=k=3, x=2 에서 최소 log_{1/2}4+3=1. 감소 판단(T-부호)과 k 결정 두 단계. 벤더 중·통찰 없음·M_total 5 → −1 후보이나 매개변수 k 를 먼저 정하는 2단 구조라 ★2 유지.
  tier: star_2
  mechanism_primary: "밑<1 감소 → 정의역 왼쪽 끝이 최대 → k → 오른쪽 끝 값이 최소"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0381.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평행이동 2, 정의역, 최댓값 3 을 바꿀 수 있음. 제약: 정의역 양 끝의 진수(x+2)가 밑의 거듭제곱(1, 4)이어야 로그값이 정수. 진수 조건 x+2>0 을 정의역이 만족해야 함."
    creative: "(1) 최솟값을 주고 최댓값을 묻기(★2) (2) 밑을 a(0<a<1 또는 a>1 미정)로 두고 최댓값·최솟값 둘을 주어 a 와 k 를 동시에 결정(I-MI d1 · ★3) (3) 정의역 끝을 매개변수 t 로 두고 최댓값-최솟값=2 인 t 를 구하기(★3)."
```

```yaml
- id: RPM-ALG-0382
  page: 51
  vendor_label: "유형 07 로그함수의 최대·최소"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    y=log_a(x+1)+log_a(3-x) 의 최솟값이 -4 일 때 상수 a.
  category: "로그 합치기 → 진수 이차식 범위 (0,4] → 최솟값 존재 조건 0<a<1 → a"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 3
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "밑 a 의 범위 두 경우 중 진수가 (0,4] 이므로 a>1 이면 최솟값이 없고 0<a<1 일 때만 진수 최대 4 에서 최솟값 → 0<a<1 로 확정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "로그 합의 최대·최소에서 밑 결정(밑 범위 판별)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    진수 (x+1)(3-x)=-(x-1)^2+4 는 -1<x<3 에서 (0,4]. 최솟값 -4 가 '존재'하려면 로그가 감소여야 하므로 0<a<1 이고, 진수 최대 4 에서 log_a 4=-4 → a^4=1/4 → a=√2/2. 밑 범위를 진수 범위로부터 역으로 결정하는 단계가 통찰(MI d2). 벤더 상중·통찰 1개·M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "로그 합치기 → 진수 (0,4] → 최솟값 존재 ⟹ 0<a<1 → log_a 4=-4 → a"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{\sqrt{2}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0382.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 진수 (x+1)(3-x) 의 근 -1, 3 과 최솟값 -4 를 바꿀 수 있음. 제약: 진수 최댓값이 정수(꼭짓점 값)이고 a^{-m}=최댓값 에서 a 가 깔끔한 거듭제곱근으로 나와야 함. 진수 범위가 (0, 최대] 라 최댓값 조건으로 바꾸면 a>1 이 됨."
    creative: "(1) '최댓값이 2' 로 바꾸면 a>1 로 결정되어 골조 동일 ★3 (2) 최솟값 대신 '최댓값이 존재하지 않는 a 의 범위' 를 묻는 ㄱㄴㄷ(MI 유지 · ★3) (3) 정의역을 닫힌 구간으로 잘라 진수 최소가 0 이 아니게 하면 최대·최소가 모두 존재해 밑 판별 통찰이 사라짐 → ★2."
```

### 유형 08 $\log_a x$의 꼴이 반복되는 함수의 최대·최소

```yaml
- id: RPM-ALG-0383
  page: 52
  vendor_label: '유형 08 $\log_a x$의 꼴이 반복되는 함수의 최대·최소'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    1≤x≤8 에서 y=(log_{1/2} x)^2+4log_{1/2} x+5 의 최댓값 M, 최솟값 m 일 때 Mm.
  category: "log_{1/2} x=t 치환 → t 범위 [-3,0] → 이차함수 최대·최소"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "log_a x 치환 이차식의 최대·최소(치환 범위 제한)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t=log_{1/2} x 는 밑<1 이라 [-3,0]. y=(t+2)^2+1 이 꼭짓점 t=-2 에서 최솟값 1, 끝 t=0 에서 최댓값 5(t=-3 은 2). Mm=5. 치환 범위(T-범위)와 꼭짓점 포함 여부(T-경계)가 함정. 유형 대표·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "t=log_{1/2} x 치환·t 범위 → 완전제곱 → 꼭짓점·양 끝 비교 → Mm"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0383.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(1/2 → 1/3, 2), 정의역 끝(밑의 거듭제곱), 이차식 계수를 바꿀 수 있음. 제약: 정의역 끝이 밑의 거듭제곱이어야 t 범위가 정수 구간이고, 꼭짓점 t 값이 범위 안에 있는지 여부를 설계 단계에서 정해야 함."
    creative: "(1) 꼭짓점을 t 범위 밖에 두면 단조 구간 판단만 남아 ★1~2 (2) 정의역을 열린 구간이나 x≥1 로 주어 최댓값이 없음을 판단하게 하기(★2) (3) 이차식 계수에 매개변수를 넣고 최솟값 조건으로 계수를 결정(0386 형 · ★2~3)."
```

```yaml
- id: RPM-ALG-0384
  page: 52
  vendor_label: '유형 08 $\log_a x$의 꼴이 반복되는 함수의 최대·최소'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    1/4≤x≤2 에서 y=log_2 4x × log_2 (2/x^2) 의 최댓값과 최솟값의 합. 5지선다.
  category: "로그 성질로 (2+t)(1-2t) → t 범위 [-2,1] → 이차함수 최대·최소"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "log_a x 치환 이차식의 최대·최소(치환 범위 제한)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log_2 4x=2+t, log_2(2/x^2)=1-2t 로 y=-2t^2-3t+2, t∈[-2,1]. 꼭짓점 t=-3/4 에서 최댓값 25/8, 끝 t=1 에서 최솟값 -3, 합 1/8. 로그 분해와 분수 꼭짓점 계산(Mₖ 2)이 부담이지만 모두 절차. 벤더 중·통찰 없음·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "로그 성질로 두 인수를 t 의 일차식으로 → 곱을 이차함수 → t 범위에서 꼭짓점·끝 비교 → 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0384.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 인수 4x, 2/x^2 의 상수와 차수, 정의역을 바꿀 수 있음. 제약: 정의역 끝이 2 의 거듭제곱이어야 하고, 꼭짓점 t 가 범위 안이면 분수 계산이 생기므로 선택지가 분수형이어야 함. 이차항 계수 부호(-2)가 최대·최소 위치를 결정."
    creative: "(1) 두 인수를 log_2 8x, log_2 (x/4) 처럼 바꿔 이차항 계수를 +1 로 만들면 최솟값이 꼭짓점 → ★2 (2) 밑을 서로 다르게(log_2 · log_4) 주어 밑 변환을 한 번 더 요구(★2~3) (3) 곱 대신 몫이나 합으로 바꾸면 이차식이 아니게 되어 유형이 바뀜(주의)."
```

```yaml
- id: RPM-ALG-0385
  page: 52
  vendor_label: '유형 08 $\log_a x$의 꼴이 반복되는 함수의 최대·최소'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    y=5^{2log x}-(x^{log 5}+5^{log x})+7 이 x=a 에서 최솟값 b 를 가질 때 a+b.
  category: "x^{log 5}=5^{log x} 동치 변환 → t=5^{log x} 치환 → 이차함수 최소"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x^{log 5}=5^{log x} 와 5^{2log x}=(5^{log x})^2 로 세 항을 한 변수 t 로 통합"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "a^{log x} 꼴 치환 이차식의 최댓값·최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 항이 겉보기엔 제각각이지만 x^{log 5}=5^{log x} 를 알아채면 t=5^{log x}>0 으로 y=t^2-2t+7=(t-1)^2+6. 최솟값 6 은 t=1, 즉 log x=0 → x=1. a+b=7. 통합 착안이 핵심(EQV d1)이고 나머지는 한 줄. 벤더 중·통찰 1개 → ★2.
    [분류 이슈] a^{log b}=b^{log a} 는 03 로그의 표준 공식이라 통찰이 아니라 절차로 볼 여지 — 절차형이면 M_total 5 로 ★1~2.
  tier: star_2
  mechanism_primary: "x^{log 5}=5^{log x} → t=5^{log x} 치환 → (t-1)^2+6 → t=1 ⟺ x=1 → a+b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0385.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 5 → 2, 3, 7 과 이차식 계수·상수를 바꿀 수 있음. 제약: 꼭짓점 t 값이 양수이고 밑의 거듭제곱(t=1, 5, 25)이어야 x 가 10 의 거듭제곱으로 나옴. t>0 조건상 꼭짓점이 음수면 최솟값이 존재하지 않음."
    creative: "(1) 최댓값형(-(t-1)^2 …)이나 정의역 제한을 두어 t 범위를 만들면 ★2 유지 (2) 세 항 중 하나를 25^{log x} 나 x^{2log 5} 로 위장하면 동치 변환이 두 번 → EQV d2 · ★3 (3) 항 통합 없이 t 치환만 남기면 절차형 ★1~2."
```

```yaml
- id: RPM-ALG-0386
  page: 52
  vendor_label: '유형 08 $\log_a x$의 꼴이 반복되는 함수의 최대·최소'
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    y=(log_3 x)^2+a log_27 x^2+b 가 x=1/3 에서 최솟값 1 을 가질 때 상수 a, b 에 대하여 a+b.
  category: "밑 통일 log_27 x^2=(2/3)log_3 x → t 치환 이차식 → 꼭짓점 조건으로 a, b"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "log_a x 치환 이차식의 최대·최소(상수 결정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log_27 x^2=(2/3)t 로 y=t^2+(2a/3)t+b. x=1/3 ⟺ t=-1 이 꼭짓점이므로 -a/3=-1 → a=3, 최솟값 1-2+b=1 → b=2. 밑 통일·치환·꼭짓점 대입이 모두 표준. 벤더 중·서술형·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "밑 통일 → t=log_3 x 이차식 → 꼭짓점 t=-1 조건으로 a → 최솟값 조건으로 b → a+b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0386.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3·27 조합(2·8, 5·25), 최솟값 위치 x=1/3(밑의 거듭제곱), 최솟값 1 을 바꿀 수 있음. 제약: 밑 변환 계수(2/3)가 분수라 a 가 정수로 나오도록 꼭짓점 t 값을 3 의 배수 관계로 맞출 것."
    creative: "(1) 최솟값 대신 '최솟값이 x=1/3 에서' 만 주고 최솟값 자체를 묻기(★2) (2) 이차항 계수를 매개변수로 두어 최댓값형인지 최솟값형인지 부호 판단부터(I-MI d1 · ★3) (3) 정의역 제한을 추가해 꼭짓점이 범위 밖일 때 끝값이 최소가 되도록 하면 T-범위 함정 증가 · ★3."
```

### 유형 09 지수에 로그가 포함된 함수의 최대·최소

```yaml
- id: RPM-ALG-0387
  page: 52
  vendor_label: "유형 09 지수에 로그가 포함된 함수의 최대·최소"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    정의역 1≤x≤1000 에서 y=x^{2-log x} 의 최댓값 M, 최솟값 m 일 때 Mm.
  category: "양변 상용로그 → log y=(2-t)t → t 범위 [0,3] → 이차함수 최대·최소 → y 역산"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수에 로그가 있는 함수의 최대·최소(양변 로그)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log y=-(t-1)^2+1, t=log x∈[0,3]. 최대는 t=1 에서 log y=1 → M=10, 최소는 t=3 에서 log y=-3 → m=1/1000. Mm=1/100. 양변 로그는 유형 이름이 지시하는 표준 절차. 함정은 t 범위(T-범위)와 log y 의 최대·최소가 y 의 최대·최소로 옮겨짐(T-경계). 유형 대표·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "양변 log → t=log x 이차식 → 정의역에서 t 범위 → log y 최대·최소 → 10^ 으로 역산 → Mm"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{100}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0387.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 2-log x 의 상수와 정의역(10 의 거듭제곱 끝)을 바꿀 수 있음. 제약: 꼭짓점 t 가 범위 안·밖인지 정하고, 끝값 log y 가 정수가 되도록 정의역 끝을 10^k 로. Mm 은 10^{합} 이라 로그값 합이 정수."
    creative: "(1) 정의역 없이 최댓값만 묻기(★1~2) (2) 밑을 2 로 바꿔 y=x^{4-log_2 x} 처럼 하면 골조 동일 ★2 (3) Mm 대신 log M+log m 이나 M/m 을 묻거나 최댓값 위치를 매개변수 조건으로 역결정하면 Mₐ 상승 ★3."
```

```yaml
- id: RPM-ALG-0388
  page: 52
  vendor_label: "유형 09 지수에 로그가 포함된 함수의 최대·최소"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    y=x^8/x^{log_2 x} 이 x=a 에서 최댓값 b 를 가질 때 b/a.
  category: "지수 정리 x^{8-t} → 양변 log_2 → 이차함수 최대 → a, b 역산"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수에 로그가 있는 함수의 최대·최소(양변 로그)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y=x^{8-log_2 x} 이므로 log_2 y=(8-t)t=-(t-4)^2+16. t=4 에서 최대 → a=2^4=16, b=2^16. b/a=2^12=4096. 분수를 지수 하나로 합치는 것과 양변 로그가 전부. 벤더 상중(★3 출발)이나 통찰 0·M_total 5 → −1 후보 적용 ★2.
    [분류 이슈] 상중 라벨과 절차 판정(★2)이 1단 어긋남 — 큰 수(2^16) 처리 외에 난이도 요소가 없음.
  tier: star_2
  mechanism_primary: "x^8/x^{log_2 x}=x^{8-log_2 x} → 양변 log_2 → -(t-4)^2+16 → a=16, b=2^16 → b/a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4096$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0388.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 차수 8(→ 4, 6)과 밑 2(→ 3)를 바꿀 수 있음. 제약: 꼭짓점 t=차수/2 가 정수여야 a 가 밑의 거듭제곱이고, b=밑^{(차수/2)^2} 이 지나치게 커지지 않게 차수 ≤ 8."
    creative: "(1) 최댓값 b 대신 log_2 b 를 묻거나 정의역 제한을 넣어 끝값 최소를 함께 묻기(★2) (2) 분모·분자를 x^{log_2 x} 와 상수의 곱으로 위장하면 지수 정리 단계가 늘어 ★2~3 (3) 최댓값이 주어지고 분자 차수 n 을 역산(미정계수 · ★2)."
```

### 유형 10 산술평균과 기하평균을 이용한 로그함수의 최대·최소

```yaml
- id: RPM-ALG-0389
  page: 52
  vendor_label: "유형 10 산술평균과 기하평균을 이용한 로그함수의 최대·최소"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    x>1 일 때 y=2log_5 x+log_x 125 의 최솟값.
  category: "밑 변환 log_x 125=3/log_5 x → t>0 → 2t+3/t 산술·기하평균"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "산술·기하평균을 이용한 로그함수의 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t=log_5 x>0 으로 y=2t+3/t≥2√6, 등호 2t=3/t. x>1 이 t>0 을 보장하는 것(T-범위)을 확인해야 산술·기하평균이 성립. 유형 이름이 방법을 지시하는 표준 절차. 유형 대표·통찰 없음·M_total 5 → −1 후보이나 밑 변환·양수 확인·등호 조건의 3단 골조라 ★2 유지.
  tier: star_2
  mechanism_primary: "log_x 125=3/log_5 x 밑 변환 → t>0 확인 → 2t+3/t ≥ 2√6 → 등호 조건"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\sqrt{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0389.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2, 진수 125(=5^3), 밑 5 를 바꿀 수 있음. 제약: 곱 2t·(3/t)=6 이 완전제곱이면 최솟값이 정수(예: 3t+3/t → 6). x>1 조건은 t>0 을 위해 필수 — 0<x<1 이면 부호가 뒤집혀 최댓값 문제가 됨."
    creative: "(1) 0<x<1 로 바꿔 최댓값을 묻기(부호 반전 · T-부호 · ★2) (2) log_5 x·log_x 125 처럼 곱이 상수인 형태를 섞어 합의 최솟값(★2) (3) 등호 성립 x 의 값을 묻거나 최솟값을 주고 계수를 역산(★2~3)."
```

```yaml
- id: RPM-ALG-0390
  page: 52
  vendor_label: "유형 10 산술평균과 기하평균을 이용한 로그함수의 최대·최소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    정의역 x>1 에서 y=log_3 x+log_x k 의 최솟값이 1 일 때 상수 k(k>1)에 대하여 k^2.
  category: "밑 변환 → t+log_3 k/t → 산술·기하평균 최솟값 2√(log_3 k)=1 → k"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "산술·기하평균을 이용한 로그함수의 최솟값(상수 결정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t=log_3 x>0, c=log_3 k>0 으로 y=t+c/t≥2√c. 2√c=1 → c=1/4 → k=3^{1/4}, k^2=√3. k>1 이 c>0 을 보장. 0389 와 같은 골조에 매개변수 역산 한 단계. 벤더 중·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "밑 변환 → t+c/t ≥ 2√c (c=log_3 k) → 2√c=1 → k=3^{1/4} → k^2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0390.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3, 최솟값 1, 묻는 값 k^2 을 바꿀 수 있음. 제약: 최솟값 m 에 대해 log_3 k=m^2/4 이므로 m 이 짝수면 k 가 3 의 정수 거듭제곱(m=2 → k=3, m=4 → k=81)으로 깔끔. k>1 조건 필수(c>0)."
    creative: "(1) 최솟값 2 로 두어 k=3 을 바로 묻기(★2) (2) k 의 범위를 0<k<1 로 주면 c<0 이라 최솟값이 없고 최댓값도 없음(단조) — 존재 여부를 묻는 ㄱㄴㄷ(I-MI d1 · ★3) (3) log_3 x 와 log_x k 의 계수를 매개변수로 두고 등호 성립 x 까지 묻기(★3)."
```

### 유형 11 로그방정식

```yaml
- id: RPM-ALG-0391
  page: 53
  vendor_label: "유형 11 로그방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    log_4(x-2)+log_{1/4}(x-5)=1/2 의 해 x=α 일 때 log_4 α. 5지선다.
  category: "밑 통일 → 로그 한 개로 합치기 → (x-2)/(x-5)=2 → 진수 조건 확인"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑 통일 로그방정식(진수 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log_{1/4}(x-5)=-log_4(x-5) 로 log_4((x-2)/(x-5))=1/2 → (x-2)/(x-5)=2 → x=8, 진수 조건 x>5 만족. log_4 8=3/2. 밑 통일·합치기·일차방정식·진수 조건이 모두 표준. 유형 대표·통찰 없음·M_total 5 → −1 후보이나 밑 통일과 log_4 8 환산까지 포함해 ★2 유지.
  tier: star_2
  mechanism_primary: "log_{1/4}=−log_4 밑 통일 → 몫의 로그 → (x-2)/(x-5)=4^{1/2} → x=8 → 진수 조건 → log_4 8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0391.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수 x-2, x-5 와 우변 1/2 을 바꿀 수 있음. 제약: 우변 r 에 대해 (x-2)/(x-5)=4^r 이 일차방정식으로 정수해를 주고 그 해가 진수 조건(x>5)을 만족해야 함. 답 log_4 α 가 유리수가 되도록 α 는 2 의 거듭제곱."
    creative: "(1) 밑 1/4 을 16 이나 2 로 바꿔 밑 변환 계수를 다르게(★2) (2) 우변을 상수 대신 log_4 2 처럼 로그로 주어 한 번 더 합치기(★2) (3) 진수 조건에 걸리는 가짜 근이 생기도록 이차방정식 형태(0392 형)로 바꾸면 검증 단계 추가 · ★2."
```

```yaml
- id: RPM-ALG-0392
  page: 53
  vendor_label: "유형 11 로그방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    log_3(x+3)-log_9(x+7)=1 을 푸시오.
  category: "밑 통일 log_9=(1/2)log_3 → 2log_3(x+3)-log_3(x+7)=2 → 이차방정식 → 진수 조건으로 한 근 기각"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑 통일 로그방정식(진수 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (x+3)^2/(x+7)=9 → x^2-3x-54=0 → x=9 또는 -6. 진수 조건 x>-3 으로 -6 기각, x=9. 밑 통일과 이차방정식 정리(Mₖ 2)·진수 조건 기각은 로그방정식의 표준 절차라 통찰로 세지 않음. 벤더 중·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "log_9 → (1/2)log_3 밑 통일 → 양변 2배 → (x+3)^2/(x+7)=9 → 이차방정식 → 진수 조건 기각 → x=9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x=9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0392.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수 x+3, x+7 과 우변 1 을 바꿀 수 있음. 제약: (x+3)^2=9(x+7) 형 이차방정식이 정수근 두 개를 갖고 그중 하나만 진수 조건을 만족하도록 설계(가짜 근이 -3 이하)."
    creative: "(1) 두 근이 모두 진수 조건을 만족하게 하면 '모든 근의 합' 형(★2) (2) 밑 9 대신 밑 1/3 을 섞어 부호 반전까지 요구(★2) (3) 우변을 log_3 (x-1) 처럼 미지수 로그로 주어 세 로그를 정리(★2~3)."
```

```yaml
- id: RPM-ALG-0393
  page: 53
  vendor_label: "유형 11 로그방정식"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    log_{x^2+1}(x-1)=log_{x+7}(x-1) 의 모든 근의 합.
  category: "밑이 다른 두 로그가 같음 → 진수=1 또는 밑이 같음 두 경우 → 밑·진수 조건으로 선별"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "밑이 다른 두 로그가 같으려면 진수가 1(x=2)이거나 밑이 같아야(x^2+1=x+7 → x=3) — 두 경우를 모두 세워야 답이 완성됨"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "밑이 다른 로그방정식(진수=1 · 밑 같음 두 경우)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    조건 x>1(진수)·밑≠1. 밑 같음 x^2-x-6=0 에서 x=3(-2 는 x>1 위배로 기각), 진수 1 에서 x=2. 합 5. 진수=1 경우를 놓치면 3 만 얻으므로 두 갈래 세우기가 본질(MI d2). 함정은 진수 조건과 밑≠1(T-범위·T-경계). 벤더 상중·서술형·통찰 1개·M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "밑 다른 로그 등식 → (진수=1) ∪ (밑 같음) → 각 근을 밑·진수 조건으로 선별 → 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0393.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 x^2+1, x+7 과 진수 x-1 을 바꿀 수 있음. 제약: 밑 같음 이차방정식이 정수근을 갖고 그중 하나만 진수 조건을 통과하도록, 진수=1 인 x 도 밑 조건(양수·≠1)을 통과하도록 설계."
    creative: "(1) 진수를 x-2 로 바꾸어 진수=1 근이 3 이 되고 밑 같음 근과 겹치게 하면 중복 근 처리(I-VF d1 추가 · ★3~4) (2) 두 로그의 밑을 바꾸어 진수=1 근이 밑 조건에 걸려 기각되게 하면 VF 성격 강화 ★3 (3) 두 경우 중 하나만 살아남는 설정은 MI 가 약해져 ★2."
```

### 유형 12 $\log_a x$의 꼴이 반복되는 로그방정식

```yaml
- id: RPM-ALG-0394
  page: 53
  vendor_label: '유형 12 $\log_a x$의 꼴이 반복되는 로그방정식'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    log_3 x-log_9 x=2log_3 x × log_9 x 의 두 실근 α, β 일 때 αβ. 5지선다.
  category: "밑 통일 log_9 x=t/2 → t/2=t^2 → t=0, 1/2 → x 역산 → 곱"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "log_a x 치환 로그방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t=log_3 x 로 t-t/2=t^2 → t(2t-1)=0 → t=0, 1/2 → x=1, √3. αβ=√3. 밑 통일·치환·인수분해·역산 4단이 모두 표준. t=0 근(x=1)을 버리지 않는 것이 유일한 주의점. 유형 대표·통찰 없음·M_total 5 → ★2 유지(대표 골조).
  tier: star_2
  mechanism_primary: "log_9 x=(1/2)log_3 x 밑 통일 → t 이차방정식 → t=0, 1/2 → x=3^t → αβ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0394.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3·9 조합(2·4, 5·25)과 계수 2 를 바꿀 수 있음. 제약: t 이차방정식이 인수분해되고 근이 유리수여야 x 가 밑의 유리수 거듭제곱. 두 근의 곱을 물으므로 근 합(t)이 깔끔해야 함."
    creative: "(1) αβ 대신 근합 t 로 바로 나오는 log_3(αβ) 를 묻기(근과 계수 활용 · 0402 형 ★2) (2) 우변 상수를 넣어 t=0 근을 없애고 무리수 t 근 두 개로(★2) (3) 양변을 t 로 나누는 실수를 유도하는 설정(t=0 근 누락 함정 · T-경계 · ★2)."
```

```yaml
- id: RPM-ALG-0395
  page: 53
  vendor_label: '유형 12 $\log_a x$의 꼴이 반복되는 로그방정식'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    log_2 2x × log_2 (x/2)=3 의 모든 근의 합.
  category: "로그 성질로 (1+t)(t-1)=3 → t^2=4 → t=±2 → x=4, 1/4 → 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "log_a x 치환 로그방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log_2 2x=1+t, log_2(x/2)=t-1 → t^2-1=3 → t=±2 → x=4, 1/4, 합 17/4. 로그 분리·치환·역산 절차. 벤더 중·통찰 없음·M_total 5 → ★2(두 근 역산과 분수 합).
  tier: star_2
  mechanism_primary: "로그 성질로 두 인수를 1+t, t-1 로 → 합차 공식 → t=±2 → x=2^t → 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{17}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0395.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 인수 2x, x/2 의 상수와 우변 3 을 바꿀 수 있음. 제약: (t+p)(t+q)=r 이 정수 t 근을 갖도록 판별식이 완전제곱. 근의 합을 물으므로 x 가 분수여도 되지만 정수·분수 하나씩이 보기 좋음."
    creative: "(1) 두 인수의 밑을 2·4 로 다르게 하여 밑 통일 추가(★2) (2) 우변을 0 으로 두면 t=-1, 1 로 단순화 ★1 (3) 근의 합 대신 두 근의 곱을 묻고 t 근합으로 바로 구하게 하면 근과 계수 관계 활용(★2)."
```

```yaml
- id: RPM-ALG-0396
  page: 53
  vendor_label: '유형 12 $\log_a x$의 꼴이 반복되는 로그방정식'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    (log_2 x)^2+k log_2 x+5=0 의 한 근이 1/2 일 때 다른 한 근. k 는 상수.
  category: "x=1/2 ⟺ t=-1 대입 → k=6 → t 이차방정식의 다른 근 t=-5 → x=1/32"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "log_a x 치환 로그방정식(한 근 주어짐 · 상수 결정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t=-1 대입으로 1-k+5=0 → k=6, t^2+6t+5=(t+1)(t+5) → 다른 t 근 -5 → x=2^{-5}=1/32. 근과 계수 관계(t 곱 5)로 더 빨리 가도 되지만 필수는 아님. 매개변수 결정 후 나머지 근 역산 — 모두 표준. 벤더 중·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "주어진 근을 t 로 환산해 대입 → k → t 이차방정식 인수분해(또는 근의 곱) → 다른 t → x=2^t"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{32}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0396.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 2, 주어진 근 1/2(밑의 거듭제곱), 상수항 5 를 바꿀 수 있음. 제약: 주어진 t 근과 상수항의 몫이 다른 t 근이므로 정수 t 로 설계하면 x 가 밑의 정수 거듭제곱. k 가 정수가 되도록 t 근합을 정수로."
    creative: "(1) k 를 묻지 않고 두 근의 곱을 묻기(근의 합 -k 활용 · ★2) (2) 두 근의 비 α/β=64 같은 조건으로 k 를 역산(★2~3) (3) 한 근 대신 '두 근이 서로 역수' 조건(t 근합 0 → k=0)으로 바꾸면 I-EQV d1 · ★2~3."
```

```yaml
- id: RPM-ALG-0397
  page: 53
  vendor_label: '유형 12 $\log_a x$의 꼴이 반복되는 로그방정식'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    log_x 9-log_3 x=1 의 두 실근 α>β 일 때 α/β.
  category: "log_x 9=2/t 밑 변환 → 2/t-t=1 → t^2+t-2=0 → t=1, -2 → x=3, 1/9"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "log_a x 치환 로그방정식(역수 꼴 log_x a 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t=log_3 x(x>0, x≠1 이므로 t≠0)로 2/t-t=1 → t^2+t-2=0 → t=1, -2 → x=3, 1/9. α/β=27. 밑 변환·분모 정리·인수분해·역산의 표준 절차. 함정은 밑 조건 x≠1(t≠0, T-범위). 벤더 중·통찰 없음·M_total 5 → ★2(분수 방정식 정리 포함).
  tier: star_2
  mechanism_primary: "log_x 9=2/log_3 x 밑 변환 → t≠0 확인 → 분모 정리해 t 이차방정식 → x=3^t → α/β"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$27$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0397.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수 9(밑 3 의 거듭제곱)와 우변 1 을 바꿀 수 있음. 제약: t^2+rt-n=0 이 정수근을 갖도록 n(=log_3 9 등)과 r 을 고르고, t=0 이 근이 되지 않게(밑 조건). α/β 는 3^{t1-t2}."
    creative: "(1) α/β 대신 αβ 를 물어 t 근합으로 바로(★2) (2) 우변을 0 으로 두면 t=±√2 무리수 근 → 곱만 깔끔(★2) (3) log_x 9 와 log_3 x 의 밑을 서로 다른 소수(2·3)로 주면 밑 변환이 상수 log_3 2 를 남겨 정리가 어려워짐(유형 이탈 주의)."
```

### 유형 13 지수에 로그가 포함된 방정식

```yaml
- id: RPM-ALG-0398
  page: 54
  vendor_label: "유형 13 지수에 로그가 포함된 방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    x^{log_3 x}=(1/3)x^2 을 풀면? 5지선다.
  category: "양변 log_3 → t^2=-1+2t → (t-1)^2=0 → t=1 → x=3"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수에 로그가 있는 방정식(양변 로그)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양변에 log_3 을 취하면 t^2=2t-1 → (t-1)^2=0 → t=1 → x=3. 양변 로그는 유형 이름이 지시하는 표준 절차이고 우변 로그 분리(-1+2t)가 유일한 손질. 유형 대표·통찰 없음·M_total 5 → ★2(대표 골조 유지).
  tier: star_2
  mechanism_primary: "양변 log_3 → 좌변 t^2, 우변 -1+2t → 중근 t=1 → x=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0398.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3(→ 2, 5), 우변 상수 1/3(밑의 거듭제곱)과 차수 2 를 바꿀 수 있음. 제약: t 이차방정식 t^2-nt+c=0 이 정수근을 갖도록 c=log_3(상수) 정수. 중근이 아니면 두 근 → 선택지가 '모든 근의 곱' 형으로 바뀜."
    creative: "(1) 우변을 9x 로 바꿔 두 근(t=…)이 나오게 하고 근의 곱을 묻기(★2) (2) 밑을 10 으로 하고 상용로그로 x^{log x}=100x 형(★2) (3) 좌변에 x^{log_3 x} 와 3^{(log_3 x)^2} 이 함께 나오게 위장하면 동치 변환 필요(EQV d1 · ★3)."
```

```yaml
- id: RPM-ALG-0399
  page: 54
  vendor_label: "유형 13 지수에 로그가 포함된 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x^{1-log x}=x^2/100 의 모든 근의 곱.
  category: "양변 log → (1-t)t=2t-2 → t^2+t-2=0 → t=1, -2 → x=10, 1/100 → 곱"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수에 로그가 있는 방정식(양변 로그)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양변 상용로그: t-t^2=2t-2 → t^2+t-2=0 → t=1, -2 → x=10, 1/100. 곱 1/10(근의 합 t1+t2=-1 로 바로 10^{-1} 도 가능). 양변 로그·이차방정식·역산의 표준 절차. 벤더 중·통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "양변 log → t(1-t)=2t-2 → t 이차방정식 → 두 t 근 → 곱 = 10^{t1+t2}"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0399.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 1-log x 의 상수, 우변 차수 2 와 상수 100(10 의 거듭제곱)을 바꿀 수 있음. 제약: t 이차방정식이 정수근(또는 근합만 필요하면 무리수 가능). 근의 곱 = 10^{근합} 이므로 근합이 정수."
    creative: "(1) 근의 곱을 물으면서 t 근이 무리수가 되도록 하면 근과 계수 관계가 필수(★2~3) (2) 우변 상수를 매개변수 k 로 두고 '두 근의 곱이 1' 조건에서 k 역산(★2~3) (3) 밑을 x 가 아닌 (x/10) 같은 복합 밑으로 바꾸면 로그 분리 단계 증가 ★3."
```

### 유형 14 로그가 포함된 연립방정식

```yaml
- id: RPM-ALG-0400
  page: 54
  vendor_label: "유형 14 로그가 포함된 연립방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    log_x 4-log_y 2=2, log_x 16+log_y 8=-1 의 해 x=α, y=β 일 때 αβ.
  category: "X=log_x 2, Y=log_y 2 치환 → 일차연립 2X-Y=2, 4X+3Y=-1 → X=1/2, Y=-1 → x=4, y=1/2"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그 연립방정식(log_x a 치환 → 일차연립)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log_x 4=2X, log_x 16=4X, log_y 8=3Y 로 일차연립. X=1/2 → x^{1/2}=2 → x=4, Y=-1 → y^{-1}=2 → y=1/2. αβ=2. 치환·연립·역산 모두 표준이고 연립 계산이 Mₖ 2. 유형 대표·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "log_x 2, log_y 2 를 X, Y 로 → 진수를 2 의 거듭제곱으로 분리 → 일차연립 → X, Y → x=2^{1/X}, y=2^{1/Y} → αβ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0400.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수 4, 2, 16, 8(2 의 거듭제곱)과 우변 2, -1 을 바꿀 수 있음. 제약: 일차연립 해 X, Y 가 ±1, ±1/2 같은 단위분수여야 x=2^{1/X} 가 유리수. Y 가 음수면 y 가 진분수가 되는 점(밑 조건 0<y≠1)만 확인."
    creative: "(1) 밑을 2 로 통일한 log_2 x, log_2 y 연립으로 바꾸면 역수 관계 없이 ★1~2 (2) 한 식은 곱(log_x 2·log_y 2), 한 식은 합으로 주면 근과 계수 관계 필요(0401 형 · ★3) (3) 해 조건(x>y)으로 두 해 중 하나를 고르게 하면 검증 한 단계 추가 ★2."
```

```yaml
- id: RPM-ALG-0401
  page: 54
  vendor_label: "유형 14 로그가 포함된 연립방정식"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    log_3 x+log_2 y=4, log_2 x × log_3 y=3 의 해 x=α, y=β(0<β<α)일 때 α+β.
  category: "밑 변환으로 log_2 x·log_3 y=log_3 x·log_2 y 확인 → 합 4·곱 3 → (1,3),(3,1) → 조건으로 선택"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "밑이 엇갈린 곱 log_2 x·log_3 y 를 밑 변환하면 log_3 x·log_2 y 와 같아짐(log_2 3·log_3 2=1) — 이를 봐야 두 식이 a+b=4, ab=3 로 닫힘"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "로그 연립방정식(합·곱 → 이차방정식 근)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a=log_3 x, b=log_2 y 로 첫 식 a+b=4. 둘째 식은 log_2 x=a·log_2 3, log_3 y=b·log_3 2 라 곱이 ab=3. (a,b)=(1,3) → (x,y)=(3,8), (3,1) → (27,2). 0<β<α 로 (27,2) 만 성립, 29. 밑이 엇갈린 곱을 동치 변환하는 착안(EQV d2)이 핵심이고 조건 선택은 명시된 필터. 벤더 상중·통찰 1개·M_total 7 → ★3.
    [분류 이슈] 마지막 조건 선택을 I-VF d1 로 추가 인정하면 통찰 2개 → +1 후보 ★4. 조건이 명시돼 있어 여기서는 인정하지 않음.
  tier: star_3
  mechanism_primary: "a=log_3 x, b=log_2 y → 둘째 식 밑 변환으로 ab=3 → a+b=4 와 근과 계수 → 두 쌍 → 0<β<α 로 선택 → α+β"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$29$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0401.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 쌍 (3,2) → (2,5), (3,5), 합 4·곱 3 을 바꿀 수 있음. 제약: t^2-(합)t+곱=0 이 정수근을 갖도록 (합, 곱)=(4,3), (5,6), (6,8) 등. 두 해 쌍 중 하나만 살아남게 하는 부등식 조건을 반드시 붙일 것(없으면 두 답)."
    creative: "(1) 조건 0<β<α 를 없애고 '모든 해의 α+β 의 합'을 묻기(MI 성격 · ★3) (2) 둘째 식을 log_2 x·log_3 y 대신 log_3 x·log_2 y 로 곧게 주면 EQV 가 사라져 ★2 (3) 첫 식을 log_3 x-log_2 y=2 처럼 차로 주면 근과 계수 대신 직접 연립 → 절차형 ★2."
```

### 유형 15 $\log_a x$의 꼴이 반복되는 로그방정식의 활용

```yaml
- id: RPM-ALG-0402
  page: 54
  vendor_label: '유형 15 $\log_a x$의 꼴이 반복되는 로그방정식의 활용'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    (log_2 2x)^2-3log_2 x^2=0 의 두 근 α, β 일 때 αβ. 5지선다.
  category: "로그 성질로 (1+t)^2-6t=0 → t^2-4t+1=0 → 근합 4 = log_2(αβ) → 16"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "log_a x 치환 방정식의 근과 계수 관계(두 근의 곱)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t 이차방정식 t^2-4t+1=0 의 근이 무리수라 직접 풀지 않고 근합 log_2 α+log_2 β=4 → αβ=2^4=16. '근의 곱 = 밑^{t 근합}' 은 이 유형 이름(활용)이 지시하는 표준 골조. 유형 대표·통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "로그 성질로 t 이차방정식 → 근과 계수(t 근합) → log_2(αβ)=근합 → αβ=2^4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0402.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "log_2 2x 의 상수 2, 계수 3, 밑 2 를 바꿀 수 있음. 제약: t 이차방정식의 근합이 정수면 αβ 가 밑의 정수 거듭제곱. 근이 실수가 되도록 판별식 ≥ 0(두 근 존재)을 확인."
    creative: "(1) 두 근의 곱 대신 log_2 α·log_2 β(t 근곱)나 α^2+β^2 를 묻기(대칭식 처리 · ★2~3) (2) 계수를 매개변수 k 로 두고 근의 곱 조건에서 k 역산(0403 형 · ★2) (3) 판별식 조건(두 실근을 갖는 k 의 범위)과 결합하면 I-BW d1 · ★3."
```

```yaml
- id: RPM-ALG-0403
  page: 54
  vendor_label: '유형 15 $\log_a x$의 꼴이 반복되는 로그방정식의 활용'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    (log x)^2-k log x-5=0 의 두 근의 곱이 100 일 때 상수 k.
  category: "근의 곱 100 → log α+log β=2 → t 근합 k=2"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "log_a x 치환 방정식의 근과 계수 관계(상수 결정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    αβ=100 ⟺ log α+log β=2 이고 t 근합은 k 이므로 k=2. 0402 의 역방향이지만 '근의 곱 → t 근합' 환산 한 줄이라 절차. 벤더 중·통찰 없음·M_total 5 → ★2(매개변수 역산 골조 유지).
  tier: star_2
  mechanism_primary: "αβ=100 → log αβ=2 → t 근합 = k → k=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0403.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근의 곱 100(10 의 거듭제곱)과 상수항 -5 를 바꿀 수 있음. 제약: 상수항이 음수면 t 실근 두 개가 보장됨(판별식 확인 생략 가능). 곱이 10^n 이면 k=n."
    creative: "(1) 근의 곱 대신 두 근의 비 α/β=1000 을 주면 t 근차 → 판별식 (k^2+20)=9 형태로 k 역산(★3) (2) 상수항도 매개변수로 두고 근의 곱·합 두 조건 연립(★2~3) (3) 판별식이 필요한 양수 상수항으로 바꾸고 '두 실근을 가질 때' 조건 추가(I-BW d1 · ★3)."
```

```yaml
- id: RPM-ALG-0404
  page: 54
  vendor_label: '유형 15 $\log_a x$의 꼴이 반복되는 로그방정식의 활용'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    p(log x)^2-2p log x+1=0 의 두 근 α, β 에 대하여 log α-log β=4 일 때 상수 p.
  category: "t 근합 2·근차 4 → t1=3, t2=-1 → 근곱 -3 = 1/p → p=-1/3"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "log_a x 치환 방정식의 근과 계수 관계(상수 결정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t 이차방정식 pt^2-2pt+1=0 에서 근합 2, 근곱 1/p. 조건 log α-log β=4 는 t1-t2=4 이므로 t1=3, t2=-1 → 근곱 -3=1/p → p=-1/3. 근합·근차 연립과 근곱 대입의 표준 절차. 벤더 중·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "t 이차방정식의 근합 2 → 조건 t1-t2=4 와 연립 → t1, t2 → 근곱 = 1/p → p"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0404.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수 -2p(근합 2)와 근차 4 를 바꿀 수 있음. 제약: 근합과 근차의 합이 짝수여야 t1, t2 가 정수. p 가 이차항 계수라 p≠0 이고 근곱 부호로 p 부호가 결정됨."
    creative: "(1) 조건을 α/β=10^4 로 위장해 log 차로 옮기게 하기(같은 골조 ★2) (2) 상수항도 p 로 두어 p 의 방정식이 이차가 되게 하면 근 두 개 중 조건 선택(I-VF d1 · ★3) (3) 근차 대신 α^2β=1000 같은 비대칭 조건으로 연립(★3)."
```

```yaml
- id: RPM-ALG-0405
  page: 54
  vendor_label: '유형 15 $\log_a x$의 꼴이 반복되는 로그방정식의 활용'
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    (log_3 x)^2-6log_3 x+1=0 의 두 근 α, β 에 대하여 (log_3 x)^2+p log_3 x+q=0 의 두 근이 α^2, β^2 일 때 상수 p, q 에 대하여 pq.
  category: "첫 식 t 근합 6·근곱 1 → 둘째 식의 t 근은 2t1, 2t2 → 근합 12=-p, 근곱 4=q"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'근이 α^2, β^2' 를 log_3 α^2=2t1, log_3 β^2=2t2 로 옮겨 둘째 식의 t 근이 첫 식 t 근의 2배임을 봄 — α, β 를 구하지 않고 근과 계수만으로 닫힘"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "log_a x 치환 방정식의 근과 계수 관계(근 변환)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    첫 식에서 t1+t2=6, t1t2=1(무리수 근이라 직접 풀지 않음). 둘째 식의 근 α^2, β^2 은 t 로는 2t1, 2t2 이므로 합 12=-p, 곱 4t1t2=4=q → pq=-48. 조건 '근이 α^2, β^2' 를 t 근의 2배로 동치 변환하는 단계(EQV d1)가 핵심. 벤더 상중·서술형·통찰 1개·M_total 6 → ★3.
    [분류 이슈] 근 변환을 표준 절차로 보면 절차형 M_total 6 → ★2/★3 경계.
  tier: star_3
  mechanism_primary: "첫 식 근과 계수(t 합 6·곱 1) → 근 α^2, β^2 ⟺ t 근 2t1, 2t2 → 둘째 식 계수 p=-12, q=4 → pq"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-48$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0405.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫 식 계수(-6, 1)와 밑 3, 근 변환 지수 2 를 바꿀 수 있음. 제약: 첫 식은 실근 두 개(판별식>0)만 확보하면 무리수라도 무방. 변환 α^n → t 근 n 배, α^{-1} → t 근 부호 반전, 3α → t+1 평행이동 등 규칙이 깔끔한 것으로."
    creative: "(1) 둘째 식의 근을 1/α, 1/β 로 바꾸면 t 근 부호 반전(같은 골조 ★3) (2) 둘째 식의 근을 3α, 3β 로 두면 t 근 +1 평행이동 → 합·곱 전개가 늘어 ★3 (3) 둘째 식의 근을 αβ, α/β 로 주면 대칭식·비대칭식이 섞여 ★3~4."
```

### 유형 16 로그부등식

```yaml
- id: RPM-ALG-0406
  page: 55
  vendor_label: "유형 16 로그부등식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    log(6-x)+log(x+5)≤1 의 해가 a<x≤-4 또는 b≤x<6 일 때 a+b.
  category: "진수 조건 -5<x<6 → (6-x)(x+5)≤10 → x^2-x-20≥0 → 진수 조건과 교집합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그부등식(진수 조건 · 로그 합치기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (x-5)(x+4)≥0 → x≤-4 또는 x≥5 를 진수 조건 -5<x<6 과 겹치면 -5<x≤-4 또는 5≤x<6. 답 형식이 a, b 를 진수 조건의 끝(-5, 5)에서 읽게 되어 있어 진수 조건이 답에 직접 들어감(T-범위). 로그 합치기·이차부등식·교집합의 표준 절차. 유형 대표·통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "진수 조건 → 로그 합쳐 진수 곱 ≤ 10 → 이차부등식 → 진수 조건과 교집합 → a=-5, b=5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0406.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수 6-x, x+5 와 우변 1(10 의 거듭제곱)을 바꿀 수 있음. 제약: 이차부등식 x^2-x-20≥0 이 정수근으로 인수분해되고 그 근이 진수 조건 구간 안쪽에 있어 해가 두 구간으로 갈라지도록. 우변이 로그값 1 → 10 으로 옮겨지는 점 유지."
    creative: "(1) 부등호를 ≥ 로 바꾸면 해가 한 구간(-4≤x≤5)이 되어 ★2 유지 (2) 밑을 1/10 으로 바꿔 부등호 방향 반전(T-부호 · ★2) (3) '정수 x 의 개수'로 바꾸면 경계 처리(≤·<)가 답에 직접 영향 → T-경계 · ★2."
```

```yaml
- id: RPM-ALG-0407
  page: 55
  vendor_label: "유형 16 로그부등식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    log_{1/4}(x^2+4x-5)>log_{1/2}(x+1) 을 만족시키는 정수 x 의 개수.
  category: "진수 조건 x>1 → 밑 통일 log_{1/4}=(1/2)log_{1/2} → 밑<1 로 부등호 반전 → 1<x<3"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그부등식(밑 통일 · 밑<1 부등호 반전)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    진수 조건 (x+5)(x-1)>0, x+1>0 → x>1. 밑 통일 후 log_{1/2}(x^2+4x-5)>log_{1/2}(x+1)^2 → 밑<1 이라 x^2+4x-5<(x+1)^2 → x<3. 1<x<3 → 정수 2 하나. 밑 통일(계수 1/2 → 양변 2배)·부호 반전·진수 조건이 겹치는 표준 절차. 벤더 중·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "진수 조건 → log_{1/4}→log_{1/2} 밑 통일(우변 제곱) → 밑<1 부등호 반전 → 일차부등식 → 정수 개수"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0407.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차 진수의 인수(x+5)(x-1)와 우변 진수 x+1 을 바꿀 수 있음. 제약: 양변 진수 차가 일차식이 되도록(x^2 항이 소거) 우변 진수 제곱과 좌변 이차 진수의 이차항 계수를 맞출 것. 정수 개수가 1~3 개 정도로 나오게 구간 폭 조절."
    creative: "(1) 밑을 4·2 로 바꾸면 반전이 없어 ★2 (2) 우변 진수를 2x+1 로 두면 제곱 뒤 이차부등식이 남아 계산 증가 ★2 (3) 정수 개수 대신 '해의 최댓값·최솟값'으로 바꾸면 열린구간 처리(T-경계) ★2."
```

```yaml
- id: RPM-ALG-0408
  page: 55
  vendor_label: "유형 16 로그부등식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    log_2(x+4)+log_2(8-x)>k 의 해가 0<x<4 일 때 상수 k. 5지선다.
  category: "로그 합치기 → (x+4)(8-x)>2^k → x^2-4x+2^k-32<0 → 해 0<x<4 와 대조 → 2^k=32"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그부등식의 해가 주어질 때 상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    진수 조건 -4<x<8 은 해 0<x<4 를 포함하므로 이차부등식 x^2-4x+(2^k-32)<0 의 해가 0<x<4 → 근이 0, 4 → 2^k-32=0 → k=5. 해집합에서 이차식 근을 읽는 것은 공통수학1 표준 절차(BW 미인정). 벤더 중·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "로그 합치기 → 진수 곱 > 2^k → 이차부등식의 해 0<x<4 ⟺ 근 0, 4 → 상수항 비교 → k"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0408.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수 x+4, 8-x 와 해 구간 0<x<4 를 바꿀 수 있음. 제약: 진수 곱은 위로 볼록이라 '>' 이면 해가 한 구간, 그 구간이 진수 조건 안에 있어야 함. 2^k 가 정수 k 로 나오도록 상수항 차가 2 의 거듭제곱."
    creative: "(1) 부등호를 < 로 바꾸면 해가 두 구간이 되어 진수 조건 끝이 해에 들어감(0406 형 · ★2) (2) 밑을 매개변수 a 로 두고 a 의 범위에 따라 부등호 방향이 갈리게 하면 I-MI d1 · ★3 (3) 해가 '정수 3 개' 처럼 개수로 주어지면 k 의 범위를 구하는 I-BW d1 · ★3."
```

```yaml
- id: RPM-ALG-0409
  page: 55
  vendor_label: "유형 16 로그부등식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    log_5(log_2 x)≤1 의 해가 α<x≤β 일 때 αβ.
  category: "안쪽 진수 조건 log_2 x>0 → x>1 → log_2 x≤5 → x≤32"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이중 로그부등식(안쪽 진수 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    바깥 로그의 진수 log_2 x 가 양수 → x>1(안쪽 조건), 그리고 log_2 x≤5 → x≤32. 1<x≤32 → αβ=32. 풀이는 두 줄이지만 안쪽 진수 조건(T-범위)과 열린·닫힌 끝 구분(T-경계)이 답을 결정. 벤더 중·통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "바깥 진수 조건 log_2 x>0 → x>1 → 바깥 부등식 풀어 log_2 x≤5 → x≤32 → αβ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$32$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0409.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바깥 밑 5·우변 1 과 안쪽 밑 2 를 바꿀 수 있음. 제약: 안쪽 로그의 상한 5^1 이 정수라 x≤2^5 로 닫힘. 안쪽 밑을 1/2 로 두면 x<1 쪽 구간이 되어 부호 반전 추가."
    creative: "(1) 부등호를 ≥ 로 바꾸면 x≥32 한쪽만 남아 ★1~2 (2) 안쪽 밑을 1/2 로 두어 반전 두 번(★2) (3) 삼중 로그 log_2(log_3(log_5 x))≤0 처럼 층을 늘리면 진수 조건이 겹겹이 → Mₜ 증가 ★3."
```

### 유형 17 $\log_a x$의 꼴이 반복되는 로그부등식

```yaml
- id: RPM-ALG-0410
  page: 55
  vendor_label: '유형 17 $\log_a x$의 꼴이 반복되는 로그부등식'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    (log_{1/3} x)^2-log_{1/3} x^2≥0 을 푸시오.
  category: "t=log_{1/3} x → t^2-2t≥0 → t≤0 또는 t≥2 → 밑<1 로 역산 → 0<x≤1/9 또는 x≥1"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "log_a x 치환 로그부등식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t(t-2)≥0 → t≤0 또는 t≥2. 밑 1/3<1 이므로 t≤0 ⟺ x≥1, t≥2 ⟺ x≤1/9 로 방향이 뒤집히고(T-부호) x>0 을 붙여야 함(T-범위). 치환 이차부등식과 역산의 표준 절차. 유형 대표·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "log_{1/3} x^2=2t → t 이차부등식 → t 범위 → 밑<1 역산(방향 반전)·x>0 → 해"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0<x\le\dfrac{1}{9}$ 또는 $x\ge 1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0410.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 1/3(→ 1/2, 3)과 계수 2 를 바꿀 수 있음. 제약: t 이차부등식이 정수근으로 인수분해. 밑>1 이면 반전이 사라지고 x>0 조건은 유지."
    creative: "(1) 부등호를 ≤ 로 바꾸면 해가 한 구간 1/9≤x≤1 로 ★2 (2) 밑을 3 으로 바꾸어 반전을 없애면 ★1~2 (3) '정수 x 의 개수' 로 바꾸면 무한 구간 처리 판단이 필요 → 유형 이탈 주의."
```

```yaml
- id: RPM-ALG-0411
  page: 55
  vendor_label: '유형 17 $\log_a x$의 꼴이 반복되는 로그부등식'
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    (log_2 x)^2-log_2 x^6+8<0 의 해가 a<x<b 일 때 a-b.
  category: "t=log_2 x → t^2-6t+8<0 → 2<t<4 → 4<x<16"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "log_a x 치환 로그부등식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log_2 x^6=6t 로 (t-2)(t-4)<0 → 2<t<4 → 4<x<16 → a-b=-12. 밑 2>1 이라 방향 유지. 치환·인수분해·역산의 표준 절차. 벤더 중·서술형·통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "log_2 x^6=6t → t 이차부등식 → 2<t<4 → x=2^t 역산 → a-b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0411.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 2, 계수 6, 상수 8 을 바꿀 수 있음. 제약: t^2-6t+8 처럼 정수근 두 개로 인수분해되고 부등호 방향에 맞는 한 구간 해가 나오도록. a-b 를 물으므로 2^{t1}-2^{t2} 가 정수."
    creative: "(1) 밑을 1/2 로 바꾸면 반전(T-부호) 추가 ★2 (2) 상수를 매개변수로 두고 '해가 존재하지 않을 조건' 을 묻기(판별식 · I-BW d1 · ★3) (3) 해가 주어지고 계수를 역산(0413 형 · ★2)."
```

```yaml
- id: RPM-ALG-0412
  page: 55
  vendor_label: '유형 17 $\log_a x$의 꼴이 반복되는 로그부등식'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    log_2 4x × log_2 8x<2 의 해가 α<x<β 일 때 β/α. 5지선다.
  category: "로그 성질로 (2+t)(3+t)<2 → t^2+5t+4<0 → -4<t<-1 → 1/16<x<1/2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "log_a x 치환 로그부등식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (t+1)(t+4)<0 → -4<t<-1 → 2^{-4}<x<2^{-1} → β/α=2^3=8. 로그 분리·전개·인수분해·역산의 표준 절차이며 β/α 는 2^{t 차}. 벤더 중·통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "log_2 4x=2+t, log_2 8x=3+t → 곱의 이차부등식 → -4<t<-1 → x=2^t → β/α=2^{차}"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0412.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 인수 4x, 8x 의 상수(2 의 거듭제곱)와 우변 2 를 바꿀 수 있음. 제약: (t+p)(t+q)<r 이 정수근 이차부등식이 되도록 r 선택. β/α=2^{근차} 이므로 근차가 정수."
    creative: "(1) 두 인수의 밑을 2·4 로 다르게 하여 밑 통일 추가(★2) (2) 우변을 매개변수로 두고 '정수해가 2 개' 조건에서 범위 역산(I-BW d1 · ★3) (3) 곱 대신 log_2 4x + log_2 8x 로 바꾸면 일차부등식 ★1."
```

```yaml
- id: RPM-ALG-0413
  page: 55
  vendor_label: '유형 17 $\log_a x$의 꼴이 반복되는 로그부등식'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    (log_3 x)^2+a log_3 x+b≤0 의 해가 1/9≤x≤27 일 때 상수 a, b 에 대하여 ab.
  category: "해 1/9≤x≤27 ⟺ -2≤t≤3 → (t+2)(t-3)≤0 전개 → a=-1, b=-6"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "log_a x 치환 로그부등식의 해가 주어질 때 상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x 의 해를 t=log_3 x 의 해 -2≤t≤3 으로 옮기면 t 이차부등식의 근이 -2, 3 이므로 t^2-t-6≤0 과 계수 비교 → a=-1, b=-6, ab=6. 해집합 → 근 → 계수의 표준 역산(BW 미인정). 벤더 중·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "x 해 구간의 끝을 log_3 으로 환산 → t 이차부등식의 근 -2, 3 → 전개 계수 비교 → ab"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0413.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "해 구간 끝 1/9, 27(밑 3 의 거듭제곱)과 밑을 바꿀 수 있음. 제약: 구간 끝을 밑의 정수 거듭제곱으로 두어야 t 근이 정수. 부등호 ≤ 와 이차항 계수 +1 을 유지하면 해가 닫힌 한 구간."
    creative: "(1) 해를 열린 구간 두 개(x<1/9 또는 x>27)로 주면 부등호 방향과 계수 부호 판단 추가 ★2 (2) 밑을 1/3 로 바꾸면 t 구간이 뒤집혀 T-부호 ★2 (3) 이차항 계수도 미지수로 두고 해가 한 점(중근)이라는 조건을 주면 판별식 결합 · ★3."
```

## 표본 판정 요약 (38문)

- ★ 분포: ★1 1 · ★2 33 · ★3 4 · ★4 0 · ★5 0
- 통찰형 6 · 절차형 32 · premium 0
- 통찰 유형: I-SYM 1(0377) · I-MI 2(0382 · 0393) · I-EQV 3(0385 · 0401 · 0405)
- type_hint 상위: 「log_a x 치환 로그부등식(+해 주어짐 상수 결정)」 4 · 「log_a x 치환 방정식의 근과 계수 관계」 4 · 「log_a x 치환 로그방정식(+한 근 · 역수 꼴)」 4 · 「지수에 로그가 있는 함수·방정식(양변 로그)」 4 · 「로그부등식(진수 조건·밑 통일·해 주어짐·이중 로그)」 4 · 「log_a x 치환 이차식의 최대·최소」 3
- 벤더 신호 대비: 대표문제 12 문 전부 ★2 · 중하 1 → ★1 · 중 20 → ★2 · 상중 5 → ★3 3 · ★2 2(0378 · 0388)
- 그림: 3문(`crop:fig-0376.png` · `crop:fig-0377.png` · `crop:fig-0378.png`)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-ALG-0378 | 벤더 「상중」이나 역함수 식·좌표 순차 계산뿐(통찰 0 · M_total 5) → 절차형 ★2 로 둠 | ★2 / ★3 |
| RPM-ALG-0385 | x^{log 5}=5^{log x} 통합을 EQV d1 로 인정해 통찰형 ★2. 03 로그의 표준 공식으로 보면 절차형 M_total 5 | ★2 (통찰형 / 절차형) |
| RPM-ALG-0388 | 벤더 「상중」이나 지수 정리·양변 로그의 절차(통찰 0 · M_total 5) → ★2. 2^16 크기 처리 외 난이도 요소 없음 | ★2 / ★3 |
| RPM-ALG-0401 | 마지막 0<β<α 조건 선택을 I-VF d1 로 추가 인정하면 통찰 2 → +1 후보 ★4. 조건이 명시돼 있어 미인정 | ★3 / ★4 |
| RPM-ALG-0405 | 「근이 α², β²」 → t 근 2배 변환을 EQV d1 로 인정해 ★3. 표준 절차로 보면 절차형 M_total 6 → ★2/★3 경계 | ★3 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **반복된 골조 「log_a x 치환 → 이차식」** 이 이 범위의 절반 이상(유형 08·12·15·17 = 16문)을 차지한다. 카탈로그에서는 함수 최대·최소 / 방정식 / 방정식의 근과 계수 / 부등식 네 갈래를 **한 상위 유형(치환 이차식)** 아래 하위로 두는 편이 낫다 — 골조가 같고 차이는 t 범위 유무·근의 역산·근과 계수 관계 사용 여부뿐이다.
- **「지수에 로그」(유형 09·13)** 는 함수 최대·최소와 방정식으로 나뉘어 있지만 골조(양변 로그 → t 이차식)가 동일해 하나로 통합해도 된다. 방정식 쪽은 '근의 곱 = 밑^{t 근합}' 이 붙어 유형 15 와도 겹친다.
- **따로 세워야 할 유형**: (a) 역함수 그래프 대칭을 쓰는 넓이·길이(0377 형, I-SYM) — 유형 06 안에서 절차형(0376·0378)과 골조가 다르다. (b) 밑 범위 판별이 답을 결정하는 최대·최소(0382 형, I-MI) — 유형 07 의 절차형(0379~0381)과 분리. (c) 밑이 다른 로그 등식의 두 경우(진수=1 · 밑 같음, 0393 형, I-MI) — 유형 11 의 밑 통일 절차와 골조가 전혀 다르다. (d) 밑이 엇갈린 로그 연립(0401 형, I-EQV) — 유형 14 의 치환 일차연립(0400)과 분리.
- **통합해도 될 유형**: 유형 10(산술·기하평균) 두 문항은 골조가 같고 상수 결정 여부만 다르다. 유형 16 의 「해가 주어질 때 상수 결정」(0408)과 유형 17 의 같은 형(0413)은 로그 합치기 여부만 다르므로 「해 주어짐 → 계수 역산」 하나로 묶을 수 있다.
- 이 범위에는 ★4 이상 후보가 없다. 카탈로그 base ★ 는 대체로 2, 위 (a)~(d) 만 3 이 적당하다.
