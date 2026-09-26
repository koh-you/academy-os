---
name: mechanism-데이터-GN-CALC2-33
description: 개념원리 미적분Ⅱ 33 도형의 넓이(1/1 · 262~270쪽 · 34문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id·base_star null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ · 전사본 latex-bank/gn-calc2
  section: 33 도형의 넓이
  unit_code: "33"
  part: "1/1"
  extract_range: "262~270쪽 · 262-530~270-558"
  total_problems: 34
  unit_total: 34
  judgment_protocol: >
    schema.md v3.8 3층 모델(M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고
    type_hint(유형명 제안)를 적음. star 는 벤더 신호를 출발점으로 삼는다 — 개념원리 익히기 ★1 ·
    필수 예제와 그 확인체크 ★2 · 연습문제 STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4.
    여기서 ±1 조정한다. −1 후보는 통찰 0 이고 M_total ≤ 5.
    +1 후보는 통찰 2개 이상, 또는 depth 3 통찰, 또는 (통찰 1개 이상 이고 M_total ≥ 8),
    또는 SC/VF/SYM/XU 통찰이 depth 2 이상. ★5 는 통찰 3개 이상 + SC/VF/SYM/XU 가 있을 때만.
    depth_score 는 insights 의 effective_depth 평균(통찰 없으면 0.00).
    insight_type 은 insights 가 비면 절차형, 하나라도 있으면 통찰형.
    effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정).
    판정 애매 문항은 rationale 의 [분류 이슈] 와 파일 끝 표에 기록만 함(사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (crops.json)
---

# 개념원리 미적분Ⅱ · 33 도형의 넓이 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅱ 33단원 「도형의 넓이」 262~270쪽 34문항 전수를 다룬다. 구역은 개념원리 익히기 3문(빈칸 채우기 · 적분식 세우기) · 필수 예제와 그 확인체크 14문(곡선과 x축 · 곡선과 y축 · 두 곡선 사이 · 곡선과 접선 · 역함수 그래프의 다섯 필수 유형) · 연습문제 STEP 1 7문 · STEP 2 6문 · 실력 UP 4문이다. 개념원리 고등의 난이도 신호는 구역 자체와 예제 태그(필수·확인체크)·연습문제 단계(STEP 1 / STEP 2 / 실력 UP)에 들어 있고, 여기에 M_total·통찰로 ±1 을 조정해 ★ 라벨을 정했다.

이 단원은 「정적분 계산」이 아니라 **영역을 어떻게 잡고 어느 변수로 적분할지 결정하는 것**이 골조다. 그래서 반복되는 골조 축은 넷이다 — (1) 부호가 바뀌는 구간을 나눠 |f| 로 적분, (2) y축 쪽 경계면 x=g(y) 로 바꿔 dy 적분, (3) 접선·법선을 먼저 구해 두 그래프 사이로 환원, (4) 역함수 그래프는 y=x 대칭·직사각형 분할로 환원. 상위 문항은 여기에 「넓이 조건 → 미지 상수 역추적」이 한 겹 더 얹힌다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 답은 전사본 값을 그대로 옮겼고(전사·검수 단계에서 답지 대조 완료) 정독 과정에서 재검산하지 않았다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CALC2-262-530
  page: 262
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    곡선 $y=e^x$, $x$축, 두 직선 $x=-1$, $x=1$ 로 둘러싸인 넓이를 구하는 과정의 빈칸(적분 구간·부정적분·값) 채우기.
  category: "구간에서 y>0 확인 → 정적분 식 세우기 → 값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축 사이의 넓이(적분식 세우기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    구간 전체에서 곡선이 x축 위라는 확인 한 번으로 넓이 = 정적분이 그대로 성립한다. 빈칸이 구간·부정적분·값을 순서대로 유도해 주므로 판단 지점이 없다. 익히기 구역·통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "−1≤x≤1 에서 y>0 확인 → ∫_{-1}^{1} e^x dx → e − 1/e"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1$, $e^x$, $1$, $e-\dfrac{1}{e}$'
  answer_source: "답지"
  figure: crop:fig-262-530.png
  latex: latex-bank/gn-calc2/items/262-530.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "적분 구간의 두 끝(x=-1, 1 → 0, 2 / -2, 1)과 밑(e^x → 2^x, e^{2x})을 바꿀 수 있다. 제약: 구간 전체에서 곡선이 x축 위여야 빈칸 구조(절댓값 없는 정적분)가 유지된다. 그림 라벨의 x=-1, x=1 은 수치와 함께 고쳐야 한다."
    creative: "(1) 밑을 y=e^{-x} 로 바꿔도 같은 골조 ★1 (2) 곡선을 y=e^x-1 로 바꾸면 x=0 에서 부호가 바뀌어 구간 분할이 생기고 ★2 (3) 넓이를 주고 오른쪽 끝을 묻는 역추적으로 바꾸면 ★2."
```

```yaml
- id: GN-CALC2-262-531
  page: 262
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    곡선 $y=\ln x$, $y$축, 두 직선 $y=2$, $y=4$ 로 둘러싸인 넓이를 구하는 과정의 빈칸($x$ 를 $y$ 로 나타내기·피적분함수·값) 채우기.
  category: "x=g(y) 로 바꾸기 → y에 대한 정적분 → 값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 y축 사이의 넓이(x=g(y) 로 바꿔 y에 대해 적분)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y축 쪽 경계이므로 x=e^y 로 바꿔 dy 로 적분한다는 이 단원의 두 번째 표준 골조. 빈칸이 변환·피적분함수·값을 차례로 지시해 판단 지점이 없다. 익히기·통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y=ln x → x=e^y → ∫_{2}^{4} e^y dy → e^4 − e^2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$e^y$, $e^y$, $e^y$, $e^4-e^2$'
  answer_source: "답지"
  figure: crop:fig-262-531.png
  latex: latex-bank/gn-calc2/items/262-531.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "y의 두 끝(2, 4 → 0, 3 / 1, 2)과 곡선(ln x → log_2 x, ln 2x)을 바꿀 수 있다. 제약: 구간에서 x>0 이어야 절댓값 없이 적분되고, 지수로 되돌린 값이 정리되는 끝값을 고른다."
    creative: "(1) y=e^x 를 주고 x=ln y 로 바꾸는 반대 방향(★1) (2) 구간을 y=-1~1 로 잡아 x 의 부호가 바뀌게 하면 분할이 생겨 ★2 (3) 같은 영역을 x 에 대한 적분(직사각형에서 빼기)으로 구하게 하면 I-RT 가 붙어 ★2."
```

```yaml
- id: GN-CALC2-262-532
  page: 262
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    곡선 $y=\dfrac{2}{x}$ 와 직선 $y=-x+3$ 으로 둘러싸인 넓이를 구하는 과정의 빈칸(교점의 $x$좌표·위쪽 함수·부정적분·값) 채우기.
  category: "교점 구하기 → (위 − 아래) 정적분 → 값"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 곡선(곡선과 직선) 사이의 넓이"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2/x = -x+3 에서 교점 1, 2 를 얻고 구간에서 직선이 위라는 판정 뒤 (직선 − 곡선)을 적분한다. 빈칸이 교점과 위쪽 함수를 지정해 주어 판단 부담이 빠졌다. 익히기 출발점 ★1 유지. [분류 이슈] 빈칸이 없는 독립 문항이면 교점·위아래 판정·로그 적분으로 ★2 가 맞다.
  tier: star_1
  mechanism_primary: "2/x = −x+3 → 교점 1, 2 → ∫_{1}^{2}{(−x+3) − 2/x} dx → 3/2 − 2ln2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1$, $1$, $-x+3$, $-\dfrac{1}{2}x^2+3x-2\ln|x|$, $1$, $\dfrac{3}{2}-2\ln 2$'
  answer_source: "답지"
  figure: crop:fig-262-532.png
  latex: latex-bank/gn-calc2/items/262-532.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자(2 → 3, 4)와 직선(−x+3 → −x+4, −2x+5)을 바꿀 수 있다. 제약: 교점의 x좌표가 유리수로 떨어지도록 k/x = −x+c 의 판별식 c²−4k 가 완전제곱이어야 하고, 두 교점이 모두 양수여야 로그값이 정리된다."
    creative: "(1) 곡선을 y=1/x, 직선을 y=−x+5/2 로 바꿔 같은 골조 ★1~2 (2) 둘러싸인 넓이를 주고 직선의 절편을 묻는 역추적 ★3 (3) 곡선을 y=2/x 그대로 두고 직선을 y=x 로 바꾸면 교점이 무리수가 되어 계산 부담만 올라가므로 피한다."
```

### 필수·발전 예제

```yaml
- id: GN-CALC2-263-e4
  page: 263
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 곡선과 $x$축(및 직선)으로 둘러싸인 넓이 — ⑴ $y=\sin x\ (0\le x\le 2\pi)$ 와 $x$축, ⑵ $y=\dfrac{8}{x+2}-2$ 와 $x$축, $x=0$, $x=4$.
  category: "x축과의 교점에서 부호 분할 → 구간별 |f| 정적분 합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축 사이의 넓이 — 부호가 바뀌는 구간 분할"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 소문항 모두 구간 안에서 곡선이 x축을 가로지른다(⑴ x=π, ⑵ x=2). 넓이 = ∫|f| 라는 정의를 쓰려면 교점을 먼저 찾아 구간을 나눠야 한다는 것이 이 예제의 요지다. 절댓값 구간 분할은 표준 분기라 통찰로 세지 않고 T-부호·T-경계 함정 2개로 처리했다. 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "f(x)=0 인 x 찾기 → 부호가 바뀌는 지점에서 구간 분할 → 구간별 ∫|f| 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $4$ ⑵ $8\ln\dfrac{4}{3}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/263-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 구간을 0~3π 로 늘리면 2 → 3 배, 진폭·주기(sin 2x)도 가능. ⑵ 분자 8 과 상수 −2 와 오른쪽 끝 4 를 바꿀 수 있다. 제약: x축과 만나는 점이 구간 내부에 있어야 분할이 생기고, 그 교점(⑵는 x=(분자/상수)−2)이 정수로 떨어지게 잡는다."
    creative: "(1) 곡선이 구간 안에서 x축을 두 번 가로지르게 하면 3구간 분할 ★3 (2) 넓이만 주고 오른쪽 끝을 묻는 역추적 ★3 (3) 구간을 통째로 x축 아래로 옮기면 부호 하나만 다루므로 ★2 아래로 내려간다."
```

```yaml
- id: GN-CALC2-263-533
  page: 263
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 곡선과 $x$축(및 세로 직선)으로 둘러싸인 넓이 — $y=\sqrt{1-x}$ 와 $x=-3$, $y=\ln(x+1)$ 과 $x=2$, $y=e^x-1$ 과 $x=-1$, $x=1$, $y=\cos x$ 와 $0\le x\le\pi$.
  category: "x절편 찾기 → 부호에 따라 구간 분할 → 구간별 |f| 정적분 합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축 사이의 넓이 — 부호가 바뀌는 구간 분할"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    필수 예제 e4 와 같은 골조를 네 함수(무리·로그·지수·삼각)로 반복한다. ⑴⑵는 한 구간, ⑶은 x=0, ⑷는 x=π/2 에서 부호가 바뀌어 분할이 필요하다. 각 소문항의 적분 자체는 기본 공식 한 줄이라 통찰 0·M_total 7 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "각 곡선의 x절편 확인 → 부호 바뀌면 분할 → 구간별 ∫|f| 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{16}{3}$ ⑵ $3\ln 3-2$ ⑶ $e+\dfrac{1}{e}-2$ ⑷ $2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/263-533.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 소문항의 세로 직선 위치(−3, 2, ±1, π)와 함수의 평행이동 상수를 바꿀 수 있다. 제약: ⑴은 근호 안이 0 이상인 범위 안에 끝점을 두고, ⑶⑷처럼 부호가 바뀌는 문항은 교점이 구간 내부에 남도록 끝점을 고른다."
    creative: "(1) 각 함수를 x축 대칭(−f)으로 뒤집어도 넓이가 같음을 묻기(★2) (2) ⑵를 y축 쪽 경계로 바꿔 dy 적분으로 풀게 하면 ★2~3 (3) 네 문항 중 부호가 바뀌는 것만 고르게 하는 판별형으로 바꾸면 ★2."
```

```yaml
- id: GN-CALC2-263-534
  page: 263
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 $y=\sqrt{x}$, $x$축, 직선 $x=4$ 로 둘러싸인 넓이가 직선 $x=a$ 로 이등분될 때 양수 $a$.
  category: "이등분 조건 → 부분 넓이 = 전체의 절반 방정식 → a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「이등분된다」를 ∫_0^a √x dx = (1/2)∫_0^4 √x dx 라는 적분 등식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "넓이를 이등분하는 세로 직선 x=a 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전체 넓이 (2/3)·8 을 먼저 구하고 왼쪽 조각 (2/3)a^{3/2} 를 그 절반과 같다고 놓으면 a^{3/2}=4 한 줄이다. 조건을 적분 등식으로 옮기는 동치 변환 1개(EQV d1), 나머지는 거듭제곱근 정리. 확인체크 ★2 에서 +1 조건(통찰 2개·depth 3·M_total 8)을 넘지 않아 ★2 유지.
  tier: star_2
  mechanism_primary: "전체 넓이 계산 → ∫_0^a √x dx = 절반 방정식 → a^{3/2}=4 → a=16^{1/3}"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\sqrt[3]{16}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/263-534.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "오른쪽 끝 4 와 곡선의 지수(√x → x^{1/3}, x^{2/3})를 바꿀 수 있다. 제약: 답이 거듭제곱근 한 개로 떨어지도록 (2/3)a^{3/2} = (1/2)(2/3)b^{3/2} 꼴을 유지하고, a 가 구간 (0,b) 안에 들어가는지 확인한다."
    creative: "(1) 가로 직선 y=k 로 이등분하게 바꾸면 dy 적분이 되어 ★3 (2) 1:2 로 나누게 하면 같은 골조·계수만 변경 ★2 (3) 곡선을 y=e^x 로 바꾸면 지수방정식이 되어 ★2~3(268-544 와 같은 골조)."
```

```yaml
- id: GN-CALC2-264-e5
  page: 264
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 곡선과 $y$축(및 가로 직선)으로 둘러싸인 넓이 — ⑴ $y=\sqrt{2x}$ 와 $y$축, $y=2$, ⑵ $y=-\dfrac{1}{x}$ 와 $y$축, $y=1$, $y=e$.
  category: "x=g(y) 로 바꾸기 → y에 대한 정적분(|x| 주의)"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 y축 사이의 넓이(x=g(y) 로 바꿔 y에 대해 적분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    경계가 y축과 가로 직선이면 x 를 y 의 식으로 풀어 dy 로 적분한다는 이 단원 두 번째 표준 골조를 세우는 예제다. ⑵는 x=-1/y 로 x 가 음수라 넓이에서 |x| 를 써야 하는 것이 함정(T-부호). 표준 절차라 통찰 0, 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "y 에 대해 x 풀기 → ∫|x| dy → 값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{4}{3}$ ⑵ $1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/264-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 근호 안 계수 2 와 위쪽 끝 y=2, ⑵ 두 끝 1, e 를 바꿀 수 있다. 제약: x=g(y) 가 구간에서 부호를 유지하도록 끝값을 잡고, ⑴처럼 y^2 꼴이 되면 적분값이 유리수로 떨어지는 끝값을 고른다."
    creative: "(1) 같은 영역을 x 에 대한 적분(직사각형 − 곡선 아래)으로 구하게 하면 I-RT 가 붙어 ★3 (2) 아래 끝을 y=−1 로 내려 x 의 부호가 바뀌게 하면 분할이 생겨 ★3(268-545 골조) (3) 넓이를 주고 위쪽 끝을 묻는 역추적 ★3."
```

```yaml
- id: GN-CALC2-264-535
  page: 264
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 곡선과 $y$축(및 가로 직선)으로 둘러싸인 넓이 — $y=\dfrac{1}{x}$ 와 $y=2$, $y=3$; $y=\ln(x+1)-1$ 과 $y=1$; $y=e^x$ 와 $y=2$, $y=3$; $y=\sqrt{x+1}-1$ 과 $y=-1$, $y=1$.
  category: "x=g(y) 로 바꾸기 → y에 대한 정적분 → 부호 바뀌면 분할"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 y축 사이의 넓이(x=g(y) 로 바꿔 y에 대해 적분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    필수 예제 e5 의 골조를 네 함수로 반복한다. ⑴⑵⑶은 x=g(y) 가 구간에서 양수라 그대로 적분되지만 ⑷ x=(y+1)^2-1 은 y=0 에서 부호가 바뀌어 두 구간으로 나눠야 한다(T-부호·T-경계). 변환 자체는 표준이라 통찰 0, 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "각 식을 x=g(y) 로 풀기 → 구간에서 x 의 부호 확인 → ∫|x| dy"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\ln\dfrac{3}{2}$ ⑵ $e^2-3$ ⑶ $\ln\dfrac{27}{4}-1$ ⑷ $2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/264-535.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 소문항의 가로 직선 두 끝을 바꿀 수 있다. 제약: ⑴은 두 끝이 모두 양수여야 로그값이 정리되고, ⑶은 ln 끝값이 정수배로 떨어지게, ⑷는 부호가 바뀌는 y=0 이 구간 내부에 남도록 잡는다."
    creative: "(1) ⑷만 따로 떼어 부호 분할을 주제로 삼으면 ★3 (2) 각 문항을 x 적분으로 바꿔 직사각형에서 빼게 하면 I-RT ★3 (3) ⑵를 넓이 조건 → 상수 k 역추적으로 바꾸면 264-536 이 된다(★2~3)."
```

```yaml
- id: GN-CALC2-264-536
  page: 264
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 $y=\ln(x+k)$ 와 $x$축, $y$축으로 둘러싸인 넓이가 $1$ 일 때 상수 $k$ ($k>1$).
  category: "두 절편으로 영역 잡기 → k를 담은 적분 → 방정식 풀이"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "넓이 조건에서 미지 상수 구하기(곡선과 두 축)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x절편 x=1−k(음수)와 y절편 ln k 로 영역이 결정되고, 그 구간에서 로그값이 양수임을 확인한 뒤 ln 의 부정적분으로 넓이를 k 의 식 k ln k − k + 1 로 만든다. 이 식을 1 과 같다고 놓으면 ln k=1. 미지 상수를 담은 표준 적분이라 통찰로 세지 않았고(T-범위·T-부호 2개), 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "x절편 1−k · y절편 ln k → ∫_{1-k}^{0} ln(x+k) dx = k ln k − k + 1 = 1 → k=e"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$e$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/264-536.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "넓이 조건값 1 과 곡선(ln(x+k) → ln(x+k)−1, 2ln(x+k))을 바꿀 수 있다. 제약: k>1 조건이 있어야 두 절편이 각각 음·양으로 잡히고, 방정식이 ln k 에 대해 일차가 되도록 상수를 고른다."
    creative: "(1) 곡선을 y=e^x−k 로 바꿔 같은 골조를 지수로 옮기면 ★2 (2) 넓이를 묻고 k 를 주는 정방향이면 ★2 아래 (3) 조건을 「y축과 x축으로 둘러싸인 넓이가 곡선 y=x 로 이등분」으로 겹치면 ★4(270-556 골조)."
```

```yaml
- id: GN-CALC2-265-e6
  page: 265
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 두 곡선 사이의 넓이 — ⑴ $y=\dfrac{1}{4}x^2$ 과 $y=2\sqrt{x}$, ⑵ $0\le x\le\pi$ 에서 $y=\sin x$, $y=\cos x$ 및 $x=0$, $x=\pi$.
  category: "교점 구하기 → 위아래 판정(바뀌면 분할) → (위 − 아래) 적분 합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 곡선 사이의 넓이(교점 분할·위아래 판정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 곡선 사이 넓이의 표준 골조를 세우는 예제다. ⑴은 교점 0, 4 사이에서 위아래가 일정하지만 ⑵는 x=π/4 에서 두 곡선이 교차해 구간을 둘로 나눠야 한다(T-경계·T-부호). 교차점 분할은 표준 분기라 통찰로 세지 않고 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "두 식을 같게 놓아 교점 → 각 구간에서 위쪽 함수 판정 → ∫(위 − 아래) 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{16}{3}$ ⑵ $2\sqrt{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/265-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 계수 1/4 과 2(교점이 x=4 에서 생기도록 짝지어짐), ⑵ 구간 끝 π 를 바꿀 수 있다. 제약: ⑴은 x^2/a = b√x 의 교점 x=(ab)^{2/3} 가 정수가 되게 a, b 를 짝짓고, ⑵는 교차점 π/4 가 구간 내부에 남아야 분할이 유지된다."
    creative: "(1) ⑵의 구간을 0~2π 로 늘리면 교차가 두 번이라 3구간 ★3 (2) ⑴을 y 에 대한 적분으로 풀게 하면 같은 값·다른 경로(I-SC 후보 ★3) (3) 두 곡선을 서로 역함수 쌍(y=x^2/4, y=2√x)으로 본다고 명시하면 y=x 대칭 골조가 되어 267-e8 로 연결된다."
```

```yaml
- id: GN-CALC2-265-537
  page: 265
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 두 곡선 사이의 넓이 — $y=e^x$ 와 $y=e^{-x}$ ($x=\pm1$), $y=\dfrac{1}{x}$ 와 $y=\sqrt{x}$ ($x=\dfrac14$, $4$), $y=2\sin x$ 와 $y=\sin 2x$ ($0\le x\le2\pi$), $y=\ln x$ 와 $y=x$ 및 $y=1$, $y=2$.
  category: "교점 분할 → (위 − 아래) 적분, ⑷는 y에 대한 적분"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 4
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑷는 경계가 가로 직선 y=1, y=2 이므로 x=e^y, x=y 로 보고 y 에 대해 적분해야 한 번에 끝남"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 곡선 사이의 넓이(교점 분할·위아래 판정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴⑵⑶은 교점(x=0, x=1, x=0·π·2π)에서 위아래가 바뀌므로 분할 후 적분하는 e6 의 반복이다. ⑷만 경계가 가로 직선이라 x 적분으로는 영역이 세 조각이 되고 y 적분으로 바꾸면 한 조각이다(RT d1). 통찰 1개·M_total 7 → 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "교점에서 구간 분할 → ∫(위 − 아래) · ⑷는 x=e^y, x=y 로 바꿔 ∫_1^2 (e^y − y) dy"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $2\left(e+\dfrac{1}{e}-2\right)$ ⑵ $\dfrac{49}{12}$ ⑶ $8$ ⑷ $e^2-e-\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/265-537.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 소문항의 구간 끝(±1, 1/4~4, 2π, 1~2)을 바꿀 수 있다. 제약: ⑴은 x=0 대칭이 유지되도록 끝을 ±a 로 두고, ⑵는 교점 x=1 이 구간 내부에 있어야 분할이 생기며, ⑶은 주기 경계에 끝을 맞춘다."
    creative: "(1) ⑴에서 대칭을 이용해 2∫_0^1 로 줄이게 하면 I-SYM 이 붙어 ★3 (2) ⑷의 가로 직선을 세로 직선으로 바꾸면 RT 가 사라져 ★2 (3) ⑶의 진폭을 미지수 a 로 두고 넓이를 주면 역추적 ★3~4."
```

```yaml
- id: GN-CALC2-266-e7
  page: 266
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    곡선 $y=e^x-1$ 과 그 위의 점 $(1,\,e-1)$ 에서의 접선 및 $y$축으로 둘러싸인 넓이.
  category: "접선 방정식 → 곡선과 직선 사이 넓이로 환원 → 정적분"
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
    접점이 주어져 있어 미분 → 접선 y=ex−1 을 바로 얻고, 접점과 y축 사이 0≤x≤1 에서 곡선이 접선 위임을 확인해 (곡선 − 접선)을 적분하면 끝난다. 접선을 구하는 것은 표준 절차이고 영역도 한 조각이라 통찰 0·M_total 6 → 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "y'=e^x → 접선 y=ex−1 → ∫_0^1 {(e^x−1) − (ex−1)} dx → e/2 − 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{2}e-1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/266-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점의 x좌표(1 → 2, −1)와 곡선의 상수항(−1 → 0, +1)을 바꿀 수 있다. 제약: 접점과 y축 사이가 영역이 되므로 접점의 x좌표는 0 이 아니어야 하고, 접선의 y절편이 정리되는 값을 고른다."
    creative: "(1) 접선 대신 그 점에서의 법선으로 바꾸면 교점을 새로 구해야 해 ★3 (2) y축 대신 x축을 경계로 바꾸면 절편 계산이 한 겹 늘어 ★3(266-538) (3) 접점을 주지 않고 원점을 지나는 접선으로 바꾸면 접점 역추적이 생겨 ★3(266-539)."
```

```yaml
- id: GN-CALC2-266-538
  page: 266
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 $y=\ln x$ 와 그 위의 점 $(e,\,1)$ 에서의 접선 및 $x$축으로 둘러싸인 넓이.
  category: "접선 방정식 → 영역 잡기 → y에 대한 적분으로 정리"
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
    y'=1/x 로 접선 y=x/e 를 얻고, 이 직선이 원점을 지나므로 영역은 0≤y≤1 에서 두 그래프 사이 한 조각이다. x=e^y 와 x=ey 로 바꿔 dy 로 적분하면 한 줄이라 e7 과 같은 난이도. 통찰 0·M_total 6 → 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "y'=1/x → 접선 y=x/e → ∫_0^1 (e^y − ey) dy → e/2 − 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{2}e-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/266-538.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점의 x좌표(e → e^2, 1)와 로그의 밑·계수를 바꿀 수 있다. 제약: 접점의 x좌표를 e^k 로 잡아야 접선의 기울기와 절편이 정리되고, x=1 로 잡으면 접선이 x축과 만나는 점이 원점이 아니게 되어 영역 모양이 달라진다."
    creative: "(1) 266-e7 과 짝지어 y=e^x−1 의 그림을 y=x 에 대칭시키면 같은 값임을 보이게 하면 I-SYM 이 붙어 ★3 (2) 경계를 x축 대신 직선 x=e 로 바꾸면 삼각형 빼기로 ★2 (3) 접점을 미지수로 두고 넓이를 주면 역추적 ★3~4."
```

```yaml
- id: GN-CALC2-266-539
  page: 266
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 $y=\sqrt{x-1}$ 과 원점에서 이 곡선에 그은 접선 및 $x$축으로 둘러싸인 넓이.
  category: "접점을 미지수로 두고 접선 조건 → 접선 확정 → y에 대한 적분"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「원점을 지나는 접선」이라는 결과 조건에서 접점 (t, √(t−1)) 을 미지수로 두고 기울기 일치 조건으로 t 를 역추적"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곡선 밖의 점에서 그은 접선과 곡선 사이의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접점이 주어지지 않아 e7·538 과 갈린다. 접점을 미지수로 두고 「접선의 기울기 = 도함수값」과 「원점을 지난다」를 함께 써야 접점 (2,1) 과 접선 y=x/2 가 나온다(BW d2). 이후 영역은 x=y^2+1 과 x=2y 사이라 dy 적분 한 줄. 확인체크 ★2 출발이지만 통찰 1개·M_total 8 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: "접점 (t,√(t−1)) 가정 → 기울기 조건으로 t=2 → 접선 y=x/2 → ∫_0^1 {(y^2+1) − 2y} dy → 1/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/266-539.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선의 평행이동 상수(x−1 → x−4)와 접선을 긋는 점(원점 → (0,k))을 바꿀 수 있다. 제약: 접점의 x좌표가 유리수로 떨어지려면 √(x−a) 에 대해 외부 점이 (0,0) 일 때 접점 x=2a 가 되므로 a 를 정수로 두고, 접선이 실제로 존재하는 위치(곡선 아래쪽)에서 긋는다."
    creative: "(1) 곡선을 y=ln x, 외부 점을 원점으로 바꾸면 접점 (e,1) 이 되어 266-538 과 연결 ★3 (2) 접선을 두 개 그을 수 있는 곡선(포물선)으로 바꾸면 케이스 분기가 생겨 ★4 (3) 넓이를 주고 곡선의 평행이동 상수를 묻는 이중 역추적이면 ★4."
```

```yaml
- id: GN-CALC2-267-e8
  page: 267
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ $f(x)=\sqrt{5x-6}$ 의 역함수 $g$ 에 대해 두 곡선 $y=f(x)$, $y=g(x)$ 로 둘러싸인 넓이. ⑵ $f(x)=\ln x$ 의 역함수 $g$ 에 대해 $\displaystyle\int_1^e f(x)dx+\int_0^1 g(x)dx$.
  category: "역함수 그래프의 y=x 대칭 → ⑴ 한쪽의 2배 · ⑵ 직사각형 분할"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑴ y=f(x) 와 y=g(x) 는 y=x 에 대칭이므로 둘러싸인 넓이는 곡선과 y=x 사이 한쪽 넓이의 2배"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑵ 두 정적분을 각각 계산하지 않고 x축·y축 쪽 두 넓이를 합치면 직사각형이 된다는 기하적 해석으로 환원"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "역함수의 그래프와 넓이(y=x 대칭 · 직사각형 분할)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴은 f 와 g 의 교점을 f(x)=x 로 줄여 x=2, 3 을 얻고 대칭으로 2∫(f−x) 로 바꾼다(SYM d2). ⑵는 적분 두 개를 따로 계산하면 부분적분 두 번이지만, 두 넓이가 가로 e·세로 1 의 직사각형을 채운다는 해석이면 답이 곧바로 e 다(RT d2). 통찰 2개 → 필수 예제 ★2 에서 +1 하여 ★3.
  insight_type: 통찰형
  tier: star_3
  mechanism_primary: "역함수 ↔ y=x 대칭 → ⑴ 교점을 f(x)=x 로 구해 2∫(f−x) · ⑵ ∫f+∫g = b·f(b) − a·f(a)"
  target_cohort: 중상위권
  answer: '⑴ $\dfrac{1}{15}$ ⑵ $e$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/267-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 근호 안 계수·상수(5x−6 → 4x−3, 3x−2), ⑵ 적분 구간의 두 끝을 바꿀 수 있다. 제약: ⑴은 ax−b=x^2 의 두 근이 유리수여야 하므로 a^2−4b 가 완전제곱, ⑵는 두 적분의 구간이 f 로 대응되는 짝(a~b 와 f(a)~f(b))이어야 직사각형 해석이 성립한다."
    creative: "(1) ⑵에서 구간 한쪽을 어긋나게 주면 직사각형 해석이 깨지고 부분적분이 필요해 ★4 (2) ⑴에서 f 와 g 가 접하도록 계수를 맞추면 넓이가 0 이 되는 경계 조건을 묻는 문제 ★4 (3) 넓이를 주고 계수를 묻는 역추적이면 270-554 ★3."
```

```yaml
- id: GN-CALC2-267-540
  page: 267
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=\sqrt{4x-3}$ 의 역함수를 $g$ 라 할 때 두 곡선 $y=f(x)$, $y=g(x)$ 로 둘러싸인 넓이.
  category: "y=x 대칭 → 교점을 f(x)=x 로 → 한쪽 넓이의 2배"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "역함수 그래프의 y=x 대칭으로 두 곡선의 교점을 f(x)=x 로 줄이고 넓이를 2∫(f−x) 로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "역함수 그래프와 둘러싸인 넓이(y=x 대칭)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e8⑴ 을 계수만 바꿔 반복한다. 4x−3=x^2 에서 교점 1, 3 을 얻고 2∫_1^3 (√(4x−3) − x) dx 를 계산하면 끝. 대칭 착안 1개(SYM d2)뿐이고 계산량도 작아(M_total 6) 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "f(x)=x 로 교점 1, 3 → 2∫_1^3 {√(4x−3) − x} dx → 2/3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/267-540.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안의 계수·상수 (4,3) 을 (6,5)·(5,6) 등으로 바꿀 수 있다. 제약: ax−b=x^2 의 판별식 a^2−4b 가 완전제곱이어야 교점이 유리수로 떨어지고, 두 근이 모두 정의역(ax−b≥0) 안에 있어야 한다."
    creative: "(1) f 를 지수함수로 바꾸면 교점이 초월방정식이 되어 대칭 골조는 유지되나 수치 답이 안 나오므로 피한다 (2) 넓이를 주고 계수를 묻는 역추적 ★3(270-554) (3) 두 곡선과 y=x 로 둘러싸인 조각 하나만 묻게 하면 ★2."
```

```yaml
- id: GN-CALC2-267-541
  page: 267
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=e^x+1$ 의 역함수를 $g$ 라 할 때 $\displaystyle\int_0^1 f(x)dx+\int_2^{e+1} g(x)dx$ 의 값.
  category: "두 정적분을 직사각형 넓이로 합치기"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "적분을 계산하지 않고 x축 쪽·y축 쪽 두 넓이가 직사각형을 채운다는 기하 해석으로 환원(∫f+∫g = b f(b) − a f(a))"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "∫f + ∫g 형 역함수 정적분(직사각형 분할)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(0)=2, f(1)=e+1 이라 두 적분 구간이 정확히 대응하는 짝이므로 합이 1·(e+1) − 0·2 = e+1 이다. 직접 계산해도 ∫(e^x+1) 과 ∫ln(x−1) 로 풀리지만 직사각형 해석이 본 골조(RT d2). 통찰 1개·M_total 6 → 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "f(0)=2, f(1)=e+1 확인 → 두 넓이 합 = 1·f(1) − 0·f(0) → e+1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$e+1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/267-541.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 상수항(+1 → +2)과 적분 구간의 두 끝(0~1 → 0~2)을 바꿀 수 있다. 제약: 두 번째 적분의 구간이 반드시 f(a)~f(b) 여야 직사각형 해석이 성립한다 — 이 대응이 깨지면 답이 달라진다."
    creative: "(1) 구간을 일부러 어긋나게 주고 보정항을 찾게 하면 ★4 (2) f 를 tan 으로 바꾸면 269-548 ★2 (3) 두 적분의 합이 주어졌을 때 f 의 상수항을 묻는 역추적이면 ★3."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC2-268-542
  page: 268
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    곡선 $y=-\ln(x+2)$ 와 $x$축 및 직선 $x=e-2$ 로 둘러싸인 넓이.
  category: "x절편 찾기 → 곡선이 x축 아래임을 확인 → ∫|f|"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선이 x축 아래일 때의 넓이(로그함수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x절편이 x=−1 이고 −1≤x≤e−2 에서 ln(x+2)>0 이므로 곡선은 x축 아래다. 넓이는 ∫ln(x+2)dx 로 부호를 뒤집어 계산하며, ln 의 부정적분 (x+2)ln(x+2)−(x+2) 만 알면 한 줄이다. 부호·구간 함정 2개, 통찰 0 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "x절편 −1 → 구간에서 y<0 → ∫_{-1}^{e-2} ln(x+2) dx → 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/268-542.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평행이동 상수 2 와 오른쪽 끝 e−2 를 바꿀 수 있다. 제약: 오른쪽 끝을 e^k−c 꼴로 잡아야 ln 의 부정적분 값이 정수로 떨어지고, x절편 1−c 가 구간 왼쪽 끝이 되도록 맞춘다."
    creative: "(1) 부호를 뒤집어 y=ln(x+2) 로 두면 함정이 사라져 ★2 아래 (2) 오른쪽 끝을 미지수 k 로 두고 넓이를 주면 역추적 ★2~3(268-543 골조) (3) 경계에 y축을 추가해 x절편 양쪽으로 부호가 갈리게 하면 분할이 생겨 ★3."
```

```yaml
- id: GN-CALC2-268-543
  page: 268
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    곡선 $y=\sqrt{x-1}$ 과 $x$축 및 직선 $x=k$ 로 둘러싸인 넓이가 $\dfrac{16}{3}$ 일 때 상수 $k$ ($k>1$).
  category: "k를 담은 정적분 → 넓이 방정식 → k"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "넓이 조건에서 미지 상수 구하기(곡선과 x축·x=k)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x절편 1 에서 x=k 까지 ∫√(x−1)dx = (2/3)(k−1)^{3/2} 로 넓이를 k 의 식으로 쓰고 16/3 과 같다고 놓으면 (k−1)^{3/2}=8. 미정계수를 방정식으로 옮기는 표준 절차라 통찰로 세지 않았다. STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "∫_1^k √(x−1) dx = (2/3)(k−1)^{3/2} = 16/3 → k−1=4 → k=5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/268-543.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "넓이 조건값(16/3)과 평행이동 상수(x−1)를 바꿀 수 있다. 제약: (k−1)^{3/2} 가 정수가 되도록 넓이를 (2/3)·(완전세제곱) 꼴로 주고, k>1 조건으로 근호 정의역을 지킨다."
    creative: "(1) 곡선을 y=x^{1/3} 으로 바꾸면 지수만 달라진 같은 골조 ★2 (2) 넓이를 이등분하는 x=k 로 바꾸면 조건 동치 변환이 붙어 ★2(268-544) (3) 경계를 y축 쪽으로 옮겨 dy 적분으로 만들면 ★3."
```

```yaml
- id: GN-CALC2-268-544
  page: 268
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    곡선 $y=e^x$ 과 $x$축, $y$축 및 직선 $x=\ln 3$ 으로 둘러싸인 넓이가 직선 $x=k$ 로 이등분될 때 상수 $k$.
  category: "이등분 조건 → 부분 넓이 = 전체의 절반 → 지수방정식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「이등분」을 ∫_0^k e^x dx = (1/2)∫_0^{ln3} e^x dx 라는 적분 등식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "넓이를 이등분하는 세로 직선 x=k 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전체 넓이가 3−1=2 이므로 왼쪽 조각 e^k−1 을 1 과 같다고 놓으면 e^k=2. 263-534 와 같은 골조를 지수함수로 옮긴 문항이고 계산은 한 줄이다(M_total 6). 통찰 1개로 +1 조건에 못 미쳐 STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "전체 넓이 2 → e^k − 1 = 1 → k = ln 2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\ln 2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/268-544.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "오른쪽 끝(ln3 → ln5, ln9)과 밑(e^x → 2^x)을 바꿀 수 있다. 제약: 전체 넓이의 절반이 e^k−1 과 같아지도록 오른쪽 끝을 ln(2m−1) 꼴로 잡아야 k 가 로그 한 개로 떨어진다."
    creative: "(1) 가로 직선 y=k 로 이등분하면 dy 적분이 되어 ★3 (2) 1:3 으로 나누게 하면 계수만 바뀌는 ★2 (3) 이등분하는 것이 직선이 아니라 다른 곡선이면 ★4(270-556)."
```

```yaml
- id: GN-CALC2-268-545
  page: 268
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    곡선 $y=(x+2)^2\ (x\ge-2)$ 와 $x$축, $y$축 및 직선 $y=9$ 로 둘러싸인 넓이.
  category: "x=g(y) 로 바꾸기 → y=4 에서 x의 부호 분할 → 두 적분 합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "경계가 y축·y=9 이므로 x=√y−2 로 바꿔 dy 로 적분하고, 곡선이 y축을 지나는 y=4 에서 영역이 두 조각으로 갈림을 파악"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곡선과 y축 사이의 넓이(x=g(y) · 부호 분할)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=√y−2 는 0≤y<4 에서 음수, 4<y≤9 에서 양수라 영역이 (0,4) 에서 맞닿은 두 조각이 된다. 각각 ∫(2−√y)dy 와 ∫(√y−2)dy 를 더해야 하며 이 부호 분할이 이 문항의 함정이다(T-부호·T-경계). 통찰 1개·M_total 7 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "x=√y−2 → y=4 기준 부호 분할 → ∫_0^4(2−√y)dy + ∫_4^9(√y−2)dy → 16/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{16}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/268-545.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평행이동 상수 2 와 위쪽 끝 9 를 바꿀 수 있다. 제약: 위쪽 끝이 (상수)^2 보다 커야 두 조각 구조가 유지되고, 끝값을 완전제곱으로 잡아야 √y 적분이 유리수로 떨어진다."
    creative: "(1) 위쪽 끝을 y=4 이하로 낮추면 한 조각뿐이라 ★2 아래 (2) 곡선을 y=(x+2)^3 으로 바꾸면 부호 분할이 그대로 유지되며 계산만 달라짐 ★2 (3) 넓이를 주고 위쪽 끝을 묻는 역추적이면 두 조각 각각을 식으로 써야 해 ★3."
```

```yaml
- id: GN-CALC2-268-546
  page: 268
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    곡선 $y=\dfrac{1}{x}\ (x>0)$ 과 두 직선 $y=2x$, $y=\dfrac{1}{2}x$ 로 둘러싸인 넓이(그림 제시).
  category: "세 교점 찾기 → x=1/√2 에서 위쪽 경계가 바뀜 → 두 적분 합"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "y=1/x 와 두 직선 y=2x, y=x/2 가 모두 y=x 에 대해 대칭이라 영역이 y=x 대칭임을 쓰면 한쪽 계산의 2배로 줄일 수 있음(선택적 단축)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곡선과 두 직선으로 둘러싸인 넓이(교점 분할·대칭)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    원점과 두 교점 (1/√2, √2), (√2, √2/2) 로 영역이 정해지고 x=1/√2 를 경계로 위쪽 경계가 y=2x 에서 y=1/x 로 바뀐다. 두 적분 ∫(2x−x/2) 와 ∫(1/x−x/2) 를 더하면 된다. 대칭 단축은 필수가 아니라 선택이라 depth 1 로 두었다. STEP 1 ★2 유지. [분류 이슈] 대칭을 요구 사항으로 보면 SYM d2 가 되어 ★3.
  tier: star_2
  mechanism_primary: "교점 1/√2, √2 → x=1/√2 에서 위쪽 경계 전환 → ∫_0^{1/√2}(2x−x/2)dx + ∫_{1/√2}^{√2}(1/x−x/2)dx → ln 2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\ln 2$'
  answer_source: "답지"
  figure: crop:fig-268-546.png
  latex: latex-bank/gn-calc2/items/268-546.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선의 분자(1 → k)와 두 직선의 기울기 쌍(2 와 1/2 → 3 과 1/3)을 바꿀 수 있다. 제약: 두 기울기를 서로 역수로 유지해야 y=x 대칭이 살아 있고, 그림 라벨의 직선 식도 함께 고쳐야 한다. 기울기를 역수 쌍이 아니게 두면 답에 로그 두 개가 남는다."
    creative: "(1) 기울기를 2 와 1/3 처럼 비대칭으로 바꾸면 대칭 단축이 사라져 ★3 (2) 곡선을 y=k/x 로 두고 넓이를 주어 k 를 묻는 역추적 ★3 (3) 영역을 y 에 대한 적분으로 구하게 하면 같은 값·다른 경로(I-SC 후보) ★3."
```

```yaml
- id: GN-CALC2-268-547
  page: 268
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    곡선 $y=\dfrac{1}{x+1}$ 과 그 위의 점 $(0,\,1)$ 에서의 접선 및 직선 $x=3$ 으로 둘러싸인 넓이.
  category: "접선 방정식 → (곡선 − 접선) 정적분"
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
    y'=−1/(x+1)^2 에서 접선 y=−x+1 을 얻고, 0<x≤3 에서 곡선이 접선 위(아래로 볼록)이므로 ∫_0^3 {1/(x+1) − (1−x)} dx 한 조각이다. 접점이 주어져 있고 분할도 없어 통찰 0·M_total 6 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "접선 y=−x+1 → ∫_0^3 {1/(x+1) − (−x+1)} dx → ln4 + 3/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\ln 4+\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/268-547.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "오른쪽 끝 3 과 곡선의 평행이동 상수(x+1 → x+2)를 바꿀 수 있다. 제약: 접점이 구간 왼쪽 끝이 되도록 잡고, 오른쪽 끝을 e^k−1 이나 정수로 두어 ln 값이 정리되게 한다."
    creative: "(1) 접점을 x=1 로 옮기면 영역이 접점 양쪽으로 갈려 두 조각 ★3 (2) 직선 x=3 대신 x축을 경계로 하면 접선의 x절편이 필요해 ★3 (3) 접선 대신 법선으로 바꾸면 교점 계산이 붙어 ★3~4(269-552)."
```

```yaml
- id: GN-CALC2-269-548
  page: 269
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $f(x)=\tan x\ \left(-\dfrac{\pi}{2}<x<\dfrac{\pi}{2}\right)$ 의 역함수를 $g$ 라 할 때 $\displaystyle\int_0^{\frac{\pi}{4}} f(x)dx+\int_0^1 g(x)dx$ 의 값.
  category: "두 정적분을 직사각형 넓이로 합치기"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "역함수 정적분을 계산하지 않고 두 넓이가 가로 π/4·세로 1 의 직사각형을 채운다는 기하 해석으로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "∫f + ∫g 형 역함수 정적분(직사각형 분할)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(0)=0, f(π/4)=1 이라 두 구간이 정확히 대응하므로 합은 (π/4)·1 − 0 = π/4 다. 직접 계산하면 ∫tan = −ln|cos| 와 역탄젠트의 부분적분이라 교과 범위 밖 부담이 생기고, 직사각형 해석이 유일하게 깔끔한 경로다(RT d2). 267-541 과 같은 골조·M_total 6 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "f(0)=0, f(π/4)=1 확인 → ∫f + ∫g = (π/4)·1 − 0·0 → π/4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{\pi}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/269-548.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "윗끝을 π/3(그때 g 의 적분 윗끝은 √3)로 바꿀 수 있다. 제약: 두 적분의 구간이 a~b 와 f(a)~f(b) 로 대응해야 하고, tan 의 특수각에서만 대응 끝값이 유리수·무리수로 떨어진다."
    creative: "(1) 아래끝을 0 이 아닌 값으로 옮겨 a·f(a) 항이 살아 있게 하면 ★3 (2) f 를 sin(정의역 제한)으로 바꾸면 같은 골조 ★2 (3) 두 적분의 합을 주고 윗끝을 묻는 역추적이면 ★3."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC2-269-549
  page: 269
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    곡선 $y=x\ln(x^2+1)$ 과 $x$축 및 직선 $x=1$ 로 둘러싸인 넓이(5지선다).
  category: "구간에서 y≥0 확인 → 치환 → 로그의 부분적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환·부분적분이 필요한 곡선과 x축 사이의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    0≤x≤1 에서 피적분함수가 0 이상이라 넓이 = ∫_0^1 x ln(x^2+1) dx 로 바로 놓이고, x^2+1=t 치환 뒤 (1/2)∫_1^2 ln t dt 의 부분적분으로 끝난다. 영역 판단은 없고 적분 기술만 요구된다. [분류 이슈] 통찰 0·M_total 6 이라 절차형 ★2 후보이나 STEP 2·평가원 기출 신호를 존중해 ★3 라벨을 유지한다.
  tier: star_3
  mechanism_primary: "구간에서 y≥0 → x^2+1=t 치환 → (1/2)∫_1^2 ln t dt → ln2 − 1/2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/269-549.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "오른쪽 끝 1 과 로그 안의 상수(x^2+1 → x^2+3)를 바꿀 수 있다. 제약: 치환 후 구간 끝이 정수라야 ln 값이 선택지로 정리되고, 선택지 다섯 개가 ln2 − (단위분수) 꼴로 촘촘히 배치되어 있으므로 함께 고쳐야 한다."
    creative: "(1) 곡선을 y=x ln x 로 바꾸면 치환 없이 부분적분만이라 ★2 (2) 구간을 −1~1 로 넓히면 기함수 대칭으로 부호가 갈려 ★3~4 (3) 넓이를 주고 오른쪽 끝을 묻는 역추적이면 초월방정식이 되므로 피한다."
```

```yaml
- id: GN-CALC2-269-550
  page: 269
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    곡선 $y=e^{2x}$ 과 $y$축, 직선 $y=-x+k$ 로 둘러싸인 넓이를 $S_1$, 곡선과 직선 $y=-x+k$, $x=1$ 로 둘러싸인 넓이를 $S_2$ 라 할 때 $S_1=S_2$ 인 상수 $k$ ($1<k<e^2$) (그림 제시).
  category: "S1=S2 → 0~1 전체에서 (직선 − 곡선)의 정적분이 0 → k"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "S1=S2 를 「0≤x≤1 에서 직선과 곡선의 부호 있는 차의 정적분 = 0」으로 옮겨 교점을 구하지 않고 끝냄"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 넓이가 같을 조건(S1=S2)에서 상수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    직선과 곡선의 교점 x좌표는 e^{2x}=−x+k 라 초월방정식이어서 구할 수 없다. S1 은 직선이 위, S2 는 곡선이 위인 조각이므로 S1−S2=0 은 ∫_0^1 {(−x+k) − e^{2x}} dx = 0 과 같고, 이 한 줄이 골조다(EQV d2). 통찰 1개·M_total 7 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "S1 − S2 = ∫_0^1 {(−x+k) − e^{2x}} dx = 0 → k − 1/2 = (e^2−1)/2 → k = e^2/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{2}e^2$'
  answer_source: "답지"
  figure: crop:fig-269-550.png
  latex: latex-bank/gn-calc2/items/269-550.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선의 지수 계수(e^{2x} → e^{3x}), 오른쪽 끝 x=1, 직선의 기울기(−1 → −2)를 바꿀 수 있다. 제약: 1<k<e^2 처럼 직선이 구간 안에서 곡선을 한 번만 가로지르는 k 범위를 함께 조정해야 하고, 그림의 S1·S2 라벨 위치는 고정이다."
    creative: "(1) S1=2S2 로 바꾸면 같은 골조에 계수만 붙어 ★3 (2) 직선을 수평선 y=k 로 바꾸면 교점을 구할 수 있어 오히려 ★2~3 (3) 곡선을 y=ln x 로 두고 y축 쪽 조각과 비교하게 하면 dy 적분이 겹쳐 ★4."
```

```yaml
- id: GN-CALC2-269-551
  page: 269
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $0\le x\le\dfrac{\pi}{2}$ 에서 곡선 $y=\cos x$ 와 두 축으로 둘러싸인 도형이 곡선 $y=\sqrt{3}\sin x$ 로 나뉜 두 부분의 넓이를 $S_1$, $S_2$ 라 할 때 $S_2-S_1$ (그림 제시).
  category: "교점 x=π/6 → 한 조각만 적분 → S2−S1 = (S1+S2) − 2S1"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "S2 를 따로 적분하지 않고 S1+S2 = ∫_0^{π/2} cos x dx = 1 을 써서 S2−S1 = 1 − 2S1 로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곡선이 나눈 두 넓이의 차(S2 − S1)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    √3 sin x = cos x 에서 tan x = 1/√3, 즉 교점 x=π/6 을 얻는다. 위쪽 조각 S1 = ∫_0^{π/6}(cos x − √3 sin x)dx 는 한 줄이고, 전체가 1 임을 쓰면 S2 를 적분하지 않아도 된다(EQV d2). 교점·위아래 판정 함정 2개, 통찰 1개·M_total 7 → STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "교점 x=π/6 → S1=∫_0^{π/6}(cos x − √3 sin x)dx → S2−S1 = 1 − 2S1 → 2√3 − 3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2\sqrt{3}-3$'
  answer_source: "답지"
  figure: crop:fig-269-551.png
  latex: latex-bank/gn-calc2/items/269-551.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "나누는 곡선의 계수 √3(→ 1, 1/√3)을 바꿀 수 있다. 제약: 계수를 tan 의 특수각 값(1/√3, 1, √3)으로 두어야 교점이 π/6·π/4·π/3 로 떨어지고, 그림의 S1·S2 위치도 교점 이동에 맞춰야 한다."
    creative: "(1) S1:S2 비를 주고 계수를 묻는 역추적이면 ★4 (2) S1+S2 를 묻게 하면 나누는 곡선이 무의미해져 ★1~2 (3) 구간을 0~π 로 넓히면 교점이 둘이 되어 분할이 늘고 ★4."
```

```yaml
- id: GN-CALC2-269-552
  page: 269
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    곡선 $y=e^x$ 과 점 $(1,\,e)$ 에서의 접선 및 그 접선에 수직이고 점 $\left(-1,\,\dfrac{1}{e}\right)$ 을 지나는 직선으로 둘러싸인 넓이.
  category: "접선·법선 구하기 → 두 직선이 원점에서 만남 → x=0 기준 두 조각 적분"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "수직 조건을 기울기 −1/e 로 옮기면 두 직선이 모두 원점을 지나고 둘째 직선은 곡선과 (−1, 1/e) 에서 만난다는 것이 드러나, 영역이 x=0 을 경계로 한 두 조각임을 확정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곡선과 접선·법선으로 둘러싸인 도형의 넓이"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    접선은 y=ex, 수직 직선은 y=−x/e 로 둘 다 원점을 지난다. 두 직선의 교점이 원점이고 곡선과의 접점·교점이 x=1, x=−1 이므로 영역은 −1≤x≤0 과 0≤x≤1 의 두 조각이며 각각 위쪽 경계가 다르다. 경계 세 개를 모두 세워야 영역이 확정되는 것이 부담(M_total 8). 통찰 1개 + M_total 8 → STEP 2 ★3 에서 +1 하여 ★4.
  tier: star_4
  mechanism_primary: "접선 y=ex · 법선 y=−x/e (둘 다 원점 통과) → ∫_{-1}^{0}(e^x + x/e)dx + ∫_0^1(e^x − ex)dx → (e^2−3)/(2e)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{e^2-3}{2e}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/269-552.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점의 x좌표 1 과 둘째 직선이 지나는 점 (−1, 1/e) 을 바꿀 수 있다. 제약: 둘째 직선이 지나는 점을 곡선 위의 점으로 두어야 교점 계산이 생략되고, 접점을 x=a 로 옮기면 접선 y=e^a x 와 법선 기울기 −e^{-a} 가 원점에서 만나는 구조가 유지되는지 확인해야 한다."
    creative: "(1) 둘째 직선을 곡선 위가 아닌 점을 지나게 두면 교점을 초월방정식으로 구해야 하므로 피한다 (2) 수직 조건을 빼고 평행 조건으로 바꾸면 조각이 하나라 ★3 (3) 둘러싸인 넓이를 주고 접점을 묻는 역추적이면 ★5 근접."
```

```yaml
- id: GN-CALC2-270-553
  page: 270
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    양수 $k$ 에 대해 곡선 $y=k\ln x$ 와 직선 $y=\dfrac{1}{2}x$ 가 접할 때, 곡선과 $x$축 및 그 직선으로 둘러싸인 넓이.
  category: "접할 조건(값·기울기)에서 k 결정 → y에 대한 적분으로 넓이"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「접한다」는 결과 조건에서 접점 x=t 를 미지수로 두고 함숫값 일치와 기울기 일치 두 식을 연립해 k=e/2, 접점 x=e 를 역추적"
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "영역의 경계가 x축·직선·곡선이라 x 적분은 두 조각이지만 x=e^{2y/e}, x=2y 로 보고 dy 적분하면 한 조각"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "접할 조건에서 상수 결정 후 넓이(곡선·x축·직선)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    앞 단계(접할 조건 → k)와 뒤 단계(영역 → 적분)가 독립적으로 각각 한 겹씩 있다. k/t=1/2 과 k ln t = t/2 를 연립하면 ln(2k)=1 로 k=e/2, 접점 (e, e/2) 가 나오고, 그 뒤 y 에 대한 적분으로 ∫_0^{e/2}(e^{2y/e} − 2y)dy 를 계산한다. 통찰 2개 → STEP 2 ★3 에서 +1 하여 ★4.
  tier: star_4
  mechanism_primary: "접점 t 가정 → k/t=1/2, k ln t=t/2 연립 → k=e/2 · 접점 (e,e/2) → ∫_0^{e/2}(e^{2y/e} − 2y)dy → (e^2−2e)/4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{e^2-2e}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/270-553.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 기울기 1/2(→ 1/3, 2)을 바꿀 수 있다. 제약: 기울기를 m 으로 두면 k=1/(me) 꼴이 아니라 접점 x=e, k=1/(m)·… 처럼 e 한 개로 정리되는지 확인해야 하며, 곡선의 x절편이 1 로 고정되므로 영역이 비지 않게 k>0 을 지킨다."
    creative: "(1) 직선을 y=mx+n 으로 두고 접할 조건을 주면 미지수 두 개라 ★5 근접 (2) 곡선을 y=k e^x 로 바꾸면 같은 골조를 지수로 옮긴 ★4 (3) k 를 주고 넓이만 묻게 하면 앞 단계가 사라져 ★3."
```

```yaml
- id: GN-CALC2-270-554
  page: 270
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $f(x)=\sqrt{ax}$ 의 그래프와 역함수 $y=f^{-1}(x)$ 의 그래프로 둘러싸인 넓이가 $\dfrac{25}{3}$ 일 때 양수 $a$.
  category: "y=x 대칭 → 넓이를 a의 식으로 → 방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "역함수 그래프의 y=x 대칭으로 교점을 f(x)=x 로 줄이고(0 과 a) 넓이를 2∫_0^a(√(ax) − x)dx 로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "역함수 그래프와 둘러싸인 넓이 조건에서 상수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    267-e8⑴·540 의 대칭 골조에 미지 계수를 얹은 형태다. 교점은 ax=x^2 에서 0, a 이고 넓이가 a^2/3 으로 깔끔하게 정리되어 a^2/3 = 25/3 한 줄로 끝난다. 뒤의 방정식 풀이는 단순 미정계수라 통찰로 세지 않았다(통찰 1개·M_total 7) → STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "교점 0, a → 넓이 2∫_0^a(√(ax) − x)dx = a^2/3 → a^2/3 = 25/3 → a=5"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/270-554.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "넓이 조건값 25/3 을 바꿀 수 있다. 제약: 넓이가 a^2/3 이므로 조건값을 (완전제곱)/3 으로 주어야 a 가 정수로 떨어진다. f 를 √(ax+b) 로 바꾸면 교점이 이차방정식이 되어 판별식 조건이 추가된다."
    creative: "(1) f(x)=x^2/a (x≥0) 로 두면 같은 대칭 골조 ★3 (2) 넓이 대신 두 교점 사이 거리를 주면 ★2 (3) f 와 f^{-1} 가 접하는 a 를 묻는 경계 문제로 바꾸면 ★4~5."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC2-270-555
  page: 270
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    자연수 $n$ 에 대해 구간 $[(n-1)\pi,\,n\pi]$ 에서 곡선 $y=\left(\dfrac{1}{2}\right)^n\sin x$ 와 $x$축으로 둘러싸인 넓이를 $S_n$ 이라 할 때 $\displaystyle\sum_{n=1}^{\infty} S_n$.
  category: "구간별 |sin| 적분이 2로 일정 → Sn 일반항 → 무한등비급수"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구간 [(n−1)π, nπ] 에서 |sin x| 의 정적분이 n 에 관계없이 2 임을 알아내 S_n = 2·(1/2)^n 일반항을 세움"
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정적분으로 얻은 일반항을 수열의 극한·급수 단원의 무한등비급수 공식으로 합산"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "구간마다의 넓이 Sn 일반항과 무한급수"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    각 구간에서 sin x 의 부호는 n 의 홀짝으로 바뀌지만 절댓값을 씌운 넓이는 항상 2 이고, 계수 (1/2)^n 만 남아 S_n = 2(1/2)^n 이 된다. 이 일정성 발견(PD d2)과 급수 단원 결합(XU d1)이 골조다. 통찰 2개 → 실력 UP ★4 유지(★5 는 통찰 3개 이상 필요).
  tier: star_4
  mechanism_primary: "∫_{(n-1)π}^{nπ}|sin x|dx = 2 → S_n = 2(1/2)^n → 등비급수 합 = 2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/270-555.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수의 공비 1/2(→ 1/3, 2/3)과 sin 의 주기(sin 2x 로 바꾸면 구간도 π/2 배)를 바꿀 수 있다. 제약: 공비의 절댓값이 1 보다 작아야 급수가 수렴하고, 구간 길이는 반주기와 정확히 맞아야 |sin| 적분이 상수 2 로 고정된다."
    creative: "(1) 부호를 살려 Σ(−1)^n S_n 을 묻게 하면 교대급수라 ★4 (2) 곡선을 y=(1/2)^n cos x 로 바꾸면 구간 안에서 부호가 갈려 일반항 계산이 한 겹 늘어 ★4~5 (3) 급수의 합을 주고 공비를 묻는 역추적이면 ★4."
```

```yaml
- id: GN-CALC2-270-556
  page: 270
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    $0\le x\le\dfrac{\pi}{2}$ 에서 곡선 $y=a\cos x$ 와 두 축으로 둘러싸인 도형의 넓이가 곡선 $y=\sin x$ 로 이등분될 때 양수 $a$.
  category: "교점을 tan x=a 로 → 위 조각 넓이를 a의 식으로 → 이등분 방정식"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "교점 조건 tan x0 = a 에서 sin x0 = a/√(a^2+1), cos x0 = 1/√(a^2+1) 로 옮겨 조각의 넓이를 a 만의 식 √(a^2+1) − 1 로 만듦"
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「이등분」을 전체 넓이 a 의 절반과 같다는 무리방정식 √(a^2+1) − 1 = a/2 로 옮김"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "다른 곡선이 넓이를 이등분할 조건에서 상수 구하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    전체 넓이는 a 로 간단하지만 교점 x0 가 a 로 표현되지 않는 각이라 삼각비를 직각삼각형으로 옮겨야 조각 넓이가 닫힌 식이 된다(RT d2). 그 뒤 이등분 조건을 무리방정식으로 바꾸고 제곱해 a 를 얻는다(EQV d2). 통찰 2개·M_total 9 → 실력 UP ★4 유지.
  tier: star_4
  mechanism_primary: "tan x0 = a → 위 조각 = √(a^2+1) − 1 → √(a^2+1) − 1 = a/2 → a = 4/3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{4}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/270-556.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이등분 대신 1:2, 1:3 으로 나누는 비를 바꿀 수 있다. 제약: 제곱 후 a 에 대한 이차방정식이 유리근을 갖도록 비를 고르고, 나누는 비가 커지면 a 가 음수 해로 빠지므로 양수 조건을 확인해야 한다."
    creative: "(1) 나누는 곡선을 y=k sin x 로 두고 k 를 묻게 하면 미지수 위치만 바뀐 ★4 (2) 이등분선을 직선 y=mx 로 바꾸면 교점이 초월방정식이라 피한다 (3) a 를 주고 나뉜 두 넓이의 비를 묻게 하면 역추적이 사라져 ★3."
```

```yaml
- id: GN-CALC2-270-557
  page: 270
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    양수 $a$ 에 대해 $f(x)=\displaystyle\int_0^x (a-t)e^t\,dt$ 의 최댓값이 $20$ 일 때, 곡선 $y=2e^x$ 과 두 직선 $x=a$, $y=2$ 로 둘러싸인 넓이.
  category: "f'(x)=(a−x)e^x → 최댓값 f(a) → 넓이가 2f(a)임을 알아보기"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "최댓값 조건을 f'(x)=(a−x)e^x 의 부호 변화로 옮겨 x=a 에서 최대임을 확정하고 최댓값을 부분적분으로 e^a − a − 1 로 정리"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "a 를 구하지 않고, 넓이 ∫_0^a(2e^x − 2)dx = 2(e^a − a − 1) 이 최댓값 조건식의 2배임을 알아보고 그대로 대입"
  insight_count: 2
  depth_score: 2.50
  type_id: null
  type_hint: "정적분으로 정의된 함수의 최댓값 조건 → 넓이"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    e^a − a − 1 = 20 은 a 에 대해 풀리지 않는 초월방정식이라, a 를 구하려 들면 막힌다. 넓이 식을 정리했을 때 같은 덩어리가 통째로 나타나는 것을 알아보고 2×20 으로 끝내는 것이 이 문항의 전부다(CON d3). [분류 이슈] depth 3 통찰로 +1(★5) 후보이나 통찰이 2개이고 SC/VF/SYM/XU 가 없어 실력 UP ★4 를 유지했다.
  tier: star_4
  mechanism_primary: "f'(x)=(a−x)e^x → x=a 최대 → f(a)=e^a−a−1=20 → 넓이 = 2(e^a−a−1) = 40"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$40$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/270-557.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최댓값 조건 20 과 곡선의 계수 2(y=2e^x, y=2)를 바꿀 수 있다. 제약: 곡선의 계수와 가로 직선의 높이가 같아야 넓이가 계수×(e^a−a−1) 로 딱 떨어져 a 를 구하지 않아도 되고, 계수를 어긋나게 두면 a 가 필요해져 문제가 성립하지 않는다."
    creative: "(1) 피적분함수를 (a−t)e^{-t} 로 바꾸면 같은 골조·부호만 다름 ★4 (2) 넓이를 주고 최댓값을 묻는 반대 방향 ★4 (3) 곡선의 계수를 3 으로 두고 가로 직선을 y=2 로 어긋나게 하면 a 가 필요해지므로 피한다 — 이 지점이 ★ 가 아니라 성립 여부를 가르는 경계다."
```

```yaml
- id: GN-CALC2-270-558
  page: 270
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    두 곡선 $y=e^{x-1}$ 과 $y=\ln x+1$ 이 접할 때, 이 두 곡선과 $x$축, $y$축으로 둘러싸인 넓이.
  category: "두 곡선이 서로 역함수(y=x 대칭) → 접점은 y=x 위 (1,1) → 두 적분 차"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "y=e^{x−1} 과 y=ln x+1 이 서로 역함수라 y=x 에 대칭임을 알아보고, 접점이 y=x 위에 있어야 한다는 것으로 접점 (1,1) 을 즉시 확정"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「접한다」를 e^{x−1}=x 의 중근(함숫값·기울기 동시 일치)으로 옮겨 x=1 을 확인"
    - step: 3
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 곡선과 두 축으로 둘러싸인 영역을 조각별로 나누지 않고 ∫_0^1 e^{x−1}dx − ∫_{1/e}^{1}(\\ln x+1)dx 의 차로 환원"
  insight_count: 3
  depth_score: 2.33
  type_id: null
  type_hint: "서로 역함수인 두 곡선이 접할 때 두 축과 둘러싸인 넓이"
  base_star: null
  effective_star: 5
  star: 5
  premium: false
  rationale: |
    두 곡선이 서로의 역함수임을 알아채지 못하면 접점을 e^{x−1}=ln x+1 에서 찾아야 해 막힌다. 대칭을 보면 접점이 y=x 위 (1,1) 로 한 줄에 나오고, 영역도 y=x 대칭이라 두 적분의 차로 정리된다(SYM d3). 통찰 3개 + I-SYM 으로 v3.8 §2.13 저노출 게이트를 통과해 실력 UP ★4 에서 +1 하여 ★5. [분류 이슈] novelty_score 는 아직 0(참신도 미측정)이라 §2.14 관점에서는 ★4 로 내릴 여지가 있다.
  tier: star_5
  mechanism_primary: "두 곡선이 역함수 관계 → 접점은 y=x 위 (1,1) → ∫_0^1 e^{x−1}dx − ∫_{1/e}^1(ln x+1)dx → 1 − 2/e"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$1-\dfrac{2}{e}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/270-558.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평행이동 상수 1(y=e^{x−c} 와 y=ln x+c)을 바꿀 수 있다. 제약: 두 곡선이 서로 역함수가 되려면 상수가 같은 값이어야 하고, 접하려면 그 값이 1 이어야 한다 — 즉 수치 변형의 자유도가 거의 없는 문항이다. 대신 밑을 바꿔 y=a^{x−1} 과 log_a x + 1 로 두면 접할 조건이 a 에 대한 방정식이 된다."
    creative: "(1) 접하지 않고 두 점에서 만나게 상수를 어긋내면 교점을 구할 수 없어 성립하지 않는다 — 대칭이 성립 조건 자체다 (2) 두 곡선 사이 넓이만 묻게 하면 0 이 되므로 두 축 경계가 필수 (3) 밑을 미지수로 두고 접할 a 를 묻는 문제로 바꾸면 ★5 유지·계산 부담만 증가."
```

## 표본 판정 요약 (34문)

- ★ 분포: ★1 3 · ★2 19 · ★3 6 · ★4 5 · ★5 1
- 통찰형 19 · 절차형 15 · premium 0
- 통찰 유형 분포(연 24회): I-EQV 7 · I-RT 7 · I-SYM 4 · I-BW 2 · I-PD 1 · I-XU 1 · I-CON 1 · I-MI 0 · I-SC 0 · I-VF 0
- 대상층: 하위권 3 · 중하위권 12 · 중위권 9 · 중상위권 9 · 상위권 1
- type_hint 묶음: 넓이 조건에서 상수 결정·이등분 7 · 역함수 그래프와 넓이 6 · 곡선과 x축 사이의 넓이 5 · 곡선과 접선(법선) 사이의 넓이 5 · 곡선과 y축 사이의 넓이 4 · 두 곡선 사이의 넓이 4 · 기타(넓이의 차·급수·최댓값 조건) 3
- 그림: 6문(`crop:fig-262-530.png` · `crop:fig-262-531.png` · `crop:fig-262-532.png` · `crop:fig-268-546.png` · `crop:fig-269-550.png` · `crop:fig-269-551.png`)
- 구역별 ★ 중앙값: 개념원리 익히기 ★1 · 필수 예제와 확인체크 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4

## 분류 이슈 목록

판정이 애매하거나 벤더 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC2-262-532 | 빈칸이 교점·위쪽 함수를 지정해 주어 ★1 로 두었으나, 빈칸을 없앤 독립 문항이면 교점·위아래 판정·로그 적분으로 M_total 6 → ★2 | ★1 / ★2 |
| GN-CALC2-268-546 | y=x 대칭 단축이 필수가 아니라 선택(두 번 적분으로도 풀림)이라 I-SYM depth 를 1 로 둠. 필수로 보면 SYM d2 → +1 | ★2 / ★3 |
| GN-CALC2-269-549 | STEP 2·평가원 기출이지만 통찰 0·M_total 6 의 순수 계산(치환+부분적분). 벤더 신호를 존중해 ★3 라벨 유지 | ★2 / ★3 |
| GN-CALC2-270-557 | I-CON depth 3(“a 를 구하지 않는다”)로 +1 → ★5 후보이나, 통찰 2개이고 SC/VF/SYM/XU 가 없어 §2.13 ★5 게이트 미통과 → ★4 유지 | ★4 / ★5 |
| GN-CALC2-270-558 | 통찰 3개 + I-SYM d3 으로 ★5 게이트는 통과하나 novelty_score 가 아직 0(§2.14 는 ★5 에 참신도 > 0 요구) — 카탈로그·참신도 측정 전이라 ★5 로 두고 기록 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **반복된 type_hint**: 「곡선과 x축 사이의 넓이(부호 분할)」5회, 「곡선과 y축 사이의 넓이(x=g(y))」4회, 「두 곡선 사이의 넓이」4회, 「곡선과 접선 사이의 넓이」5회, 「역함수 그래프와 넓이」6회, 「넓이 조건에서 상수 결정」7회. 이 여섯 축이 33단원 카탈로그의 뼈대가 된다.
- **따로 세워야 할 유형**: ① 「∫f + ∫g 직사각형 분할」(267-541 · 269-548)은 「역함수 그래프로 둘러싸인 넓이」(267-e8⑴ · 540 · 554)와 골조가 다르다 — 전자는 적분값 합, 후자는 y=x 대칭 넓이이므로 base ★ 도 갈라야 한다. ② 「곡선 밖의 점에서 그은 접선」(266-539)은 접점이 주어진 「곡선과 접선」(e7 · 538 · 547)과 통찰(BW) 유무가 달라 별도 유형. ③ 「두 넓이가 같을/비를 이룰 조건」(269-550 · 551 · 556)은 이등분(534 · 544)보다 한 단계 위로 두어야 한다.
- **통합해도 될 유형**: 「x축 사이 넓이」와 「y축 사이 넓이」는 적분변수만 다른 한 유형의 두 변형으로 묶고 소분류로 두는 편이 슬롯 관리에 낫다. 「접할 조건에서 상수 결정」(270-553)과 「접선과 곡선 사이 넓이」도 앞 단계 유무로 나뉘는 같은 계열이다.
- **비어 있는 통찰 축**: 이 범위에는 I-SC·I-VF·I-MI 가 하나도 없다. ★5 슬롯을 늘리려면 전략 분기(x 적분 vs y 적분 중 택일이 실제로 갈리는 문항)나 사후 검증(부호·정의역으로 일부 후보 기각)이 필요한 변형을 새로 설계해야 한다.
