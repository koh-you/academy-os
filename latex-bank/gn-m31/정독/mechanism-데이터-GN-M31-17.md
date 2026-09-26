---
name: mechanism-데이터-GN-M31-17
description: 개념원리 중학 3-1 17 이차함수(1/1 · 164~169쪽 25문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-1 · 전사본 latex-bank/gn-m31
  section: 17 이차함수
  unit_code: "17"
  part: "1/1"
  extract_range: "164~169쪽 · 164-01~169-05"
  total_problems: 25
  unit_total: 25
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m31/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m31/items/<id>.tex
  image_source: latex-bank/gn-m31/figures/ (그림 문항 4문)
---

# 개념원리 중학 3-1 · 17 이차함수 (1/1) 정독 데이터 (v1.0)

이 파일은 164~169쪽 25문항 전수를 다룬다. 구역은 「개념원리 확인하기」 4문 · 「핵심문제 익히기」 16문(핵심문제 `쪽-hN` 7문 + 확인문제 `쪽-cN` 9문) · 「이런 문제가 시험에 나온다」 5문이다. 개념원리 중학은 별도 난이도(level) 표기가 없고 **구역 자체가 난이도 층**이며, 이 범위에는 태그가 하나도 없다. 그림 문항은 4문(`fig-164-03-2` · `fig-168-h7` · `fig-168-c9` · `fig-169-02`)이고, 그중 골조에 실제로 영향을 주는 것은 세 포물선의 폭 순서를 읽어야 하는 `169-02` 하나뿐이다.

이 단원은 이차함수의 **도입부**라서 도구가 아주 좁다. 25문 전체가 사실상 네 가지 골조 — ⑴ 식을 전개·정리해 x² 계수가 0이 아닌지 보는 「이차함수의 뜻」, ⑵ x 를 대입하는 「함숫값」, ⑶ y=ax² 에서 a 의 부호(볼록 방향)·절댓값(폭)·부호 반전(x축 대칭)을 읽는 「그래프의 성질」, ⑷ 그래프 위의 점을 대입해 a 나 다른 좌표를 얻는 「미정계수」 — 안에 들어간다. 그래서 통찰(I) 라벨이 붙은 문항이 4문뿐이고 모두 I-RT(식 ↔ 포물선 개형) 한 종류이며, ★ 차이는 대부분 **조건을 몇 겹 걸러야 하는가**와 **부호·차수 함정이 있는가**에서 나온다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M31-164-01
  page: 164
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑷ 네 식이 $y$ 가 $x$ 에 대한 이차함수인지 ○× 로 판정. ⑷ 는 $y=x^2-x(x+1)$.
  category: "우변 전개·정리 → x² 계수가 0이 아닌지 확인"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수의 뜻 — 식이 이차함수인지 판정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴⑵⑶ 은 정리할 것 없이 차수만 보면 되고, ⑷ 만 전개해야 이차항이 지워지는 것이 보인다.
    확인하기 구역 ★1 출발 · 통찰 0 · M_total 4 → ★1 유지. 함정은 「x² 이 보이면 이차함수」라는 겉보기 판단(T-표기) 하나.
  tier: star_1
  mechanism_primary: "각 식을 전개·이항해 y=ax²+bx+c 꼴로 정리 → a≠0 이면 이차함수"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\bigcirc$ ⑵ $\times$ ⑶ $\bigcirc$ ⑷ $\times$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/164-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 식의 계수 전부. 제약: 전개해야 이차항이 소거되는 식(⑷ 유형)이 적어도 하나, 전개 없이 판정되는 일차식이 하나 들어갈 것. 분모에 x 가 오는 식은 이 확인하기 단계에서는 넣지 않는다(165-h1 담당)."
    creative: "(1) ○× 대신 이차함수인 것만 모두 고르기로 바꾸기(★1 유지) (2) ⑷ 를 y=x²-x(x+a) 로 두고 이차함수가 아니게 되는 a 묻기(★2 · 165-c3 골조) (3) 각 식의 x² 계수를 쓰게 하면 볼록 방향까지 묻는 다음 절과 연결(★2)."
```

```yaml
- id: GN-M31-164-02
  page: 164
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑷ 이차함수 $f(x)=x^2-5x+3$ 의 $f(0)$, $f(3)$, $f(-1)$, $f\left(\dfrac{1}{2}\right)$ 구하기.
  category: "x 값 대입 → 함숫값 계산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수의 함숫값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 번 대입이 전부다. ⑶ 에서 -5x 의 부호, ⑷ 에서 분수의 제곱 두 군데만 조심하면 된다.
    확인하기 구역 ★1 · 통찰 0 · M_total 4 → ★1. 함숫값 표기 f(a) 를 처음 쓰는 자리라 계산보다 표기 익히기가 목적이다.
  tier: star_1
  mechanism_primary: "f(x) 의 x 자리에 주어진 수를 대입 → 제곱·곱·합 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $3$ ⑵ $-3$ ⑶ $9$ ⑷ $\dfrac{3}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/164-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(x) 의 세 계수와 대입할 네 수. 제약: 음수 하나·분수 하나를 반드시 포함하고, 분수를 넣었을 때 답이 기약분수로 떨어질 것."
    creative: "(1) f(a)=k 를 주고 a 를 거꾸로 묻기(★2 · 이차방정식 복습) (2) f(0)+f(1)+f(-1) 처럼 합을 묻기(★1~2 · 166-h2 골조) (3) 계수 하나를 미지수로 두고 f(2) 값으로 결정하기(★2 · 166-c4 골조)."
```

```yaml
- id: GN-M31-164-03
  page: 164
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴ $y=\dfrac{3}{2}x^2$ 와 $y=-\dfrac{3}{2}x^2$ 의 대응표를 완성하고 ⑵ 그것을 이용해 정의역이 실수 전체일 때의 두 그래프를 좌표평면에 그리기.
  category: "표에 x 대입 → 점 찍기 → 매끄러운 포물선으로 연결"
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "y=ax² 의 그래프 그리기(대응표 → 포물선)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표를 채우는 대입이 여러 번이라 Mₖ 만 2 이고 나머지는 최저다. 표 → 점 → 곡선은 발문이 순서를 지정해 준 절차라 표현 전환 통찰로 세지 않았다.
    확인하기 구역 ★1 · 통찰 0 → ★1. 두 식의 계수가 부호만 다른 짝이라 x축 대칭(167 절)의 밑그림 역할을 한다.
  tier: star_1
  mechanism_primary: "표의 각 x 에 대응하는 y 계산 → 좌표평면에 점 찍기 → 원점을 꼭짓점으로 하는 포물선으로 연결"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑴ 풀이 참조 ⑵ 풀이 참조"
  answer_source: "답지"
  figure: crop:fig-164-03-2.png
  latex: latex-bank/gn-m31/items/164-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 3/2 와 표의 x 범위. 제약: 표의 x 를 정수로 두었을 때 y 가 눈금 위에 떨어지는 계수여야 하고, 두 식은 부호만 반대인 짝으로 유지한다(⑵ 의 대칭 관찰이 이 문제의 목적)."
    creative: "(1) 한쪽 그래프만 주고 다른 쪽을 대칭으로 그리게 하기(★1~2) (2) 표의 일부 칸을 비우고 y 값에서 x 를 역으로 묻기(★2 · T-부호 두 해) (3) 계수가 다른 세 그래프를 한 평면에 그려 폭을 비교하게 하면 169-02 골조로 올라감(★2~3)."
```

```yaml
- id: GN-M31-164-04
  page: 164
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    보기의 네 이차함수 $y=3x^2$, $y=-5x^2$, $y=-\dfrac{1}{3}x^2$, $y=5x^2$ 에 대하여 ⑴ 아래로 볼록한 것 ⑵ 폭이 가장 넓은 것 ⑶ $x$축에 대하여 대칭인 짝 고르기.
  category: "a의 부호 → 볼록 방향 · |a| 크기 → 폭 · a와 -a → x축 대칭"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "y=ax² 의 그래프의 성질(볼록 방향·폭·x축 대칭)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y=ax² 의 세 가지 읽기(부호·절댓값·부호 반전)를 한 문제에서 한 번씩 확인시키는 구성이다. 각 소문항은 보기를 훑는 한 단계뿐이다.
    확인하기 구역 ★1 · 통찰 0 · M_total 4 → ★1. 함정은 ⑵ 에서 음수 계수를 「작으니까 넓다」로 보지 않고 절댓값으로 봐야 한다는 점(T-부호).
  tier: star_1
  mechanism_primary: "a>0 인 것을 고르기 → |a| 최소인 것 고르기 → 절댓값이 같고 부호가 반대인 짝 찾기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑴ ㄱ, ㄹ ⑵ ㄷ ⑶ ㄴ과 ㄹ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/164-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 계수. 제약: 절댓값이 같고 부호가 반대인 짝이 정확히 하나 있을 것, |a| 최소가 유일할 것, 아래로 볼록한 것이 둘 이상일 것."
    creative: "(1) ⑶ 을 「y축에 가장 가까운 것」으로 바꾸면 폭 판정을 뒤집어 묻게 됨(★1~2) (2) 보기에 y=ax² 를 하나 섞고 조건을 만족하는 a 의 범위를 묻기(★3 · 169-02 골조) (3) 네 그래프를 한 평면에 그린 그림만 주고 식을 짝짓게 하면 I-RT 가 붙어 ★2~3."
```

### 핵심문제 익히기

```yaml
- id: GN-M31-165-h1
  page: 165
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    다섯 식 중 $y$ 가 $x$ 에 대한 이차함수인 것 고르기. 분모에 $x^2$ 이 있는 식·삼차식·전개하면 차수가 달라지는 식이 섞인 5지선다.
  category: "각 선택지 전개·정리 → x² 항이 남고 계수 ≠ 0 인 것 선택"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수의 뜻 — 식이 이차함수인지 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    164-01 과 골조는 같지만 선택지 다섯을 전부 정리해야 하고, 「분모에 x² 이 있으면 이차함수가 아니다」·「전개하면 이차항이 남는가/지워지는가」 두 갈래 함정이 동시에 들어간다.
    특히 ④ 와 ⑤ 는 둘 다 괄호 제곱을 전개해야 갈리므로 도중에 멈추면 못 고른다. 핵심문제 구역 ★2 출발 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "선택지를 전개해 y=ax²+bx+c 꼴로 정리 → 분수식·삼차식 제외 → x² 계수 ≠0 인 것 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/165-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다섯 선택지의 계수와 괄호 형태. 제약: 전개 후 이차항이 살아남는 것이 정확히 하나, 전개 후 이차항이 지워지는 오답이 하나, 분수식·삼차식 오답이 각각 하나 들어갈 것."
    creative: "(1) 「이차함수가 아닌 것」으로 뒤집기(★2 유지) (2) 정답 2개 고르기로 바꾸기(★2 · 165-c2 형식) (3) 한 선택지의 계수를 a 로 두고 이차함수가 되는 a 의 조건을 함께 묻기(★3 · I-EQV 추가)."
```

```yaml
- id: GN-M31-165-c1
  page: 165
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    보기 ㄱ~ㄹ($y=2$, $y=x(5-x)$, $y=x^2-(3x-x^2)$, $y=4x^2-(2x+1)^2$) 중 $y$ 가 $x$ 에 대한 이차함수인 것 모두 고르기.
  category: "각 보기 전개·정리 → x² 계수 ≠ 0 확인"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수의 뜻 — 식이 이차함수인지 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    165-h1 의 확인문제. ㄱ 상수함수, ㄹ 은 전개하면 이차항이 상쇄돼 일차가 되는 곱셈 공식 함정이고 ㄷ 은 같은 부호로 합쳐져 이차항이 커지는 반대 사례다.
    네 개를 모두 정리해야 답이 나오므로 Mₖ 2. 핵심문제 구역 ★2 출발 · 통찰 0 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "괄호를 전개해 동류항 정리 → x² 계수가 남는 보기만 고르기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄴ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/165-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 보기의 계수. 제약: 이차항이 상쇄되는 보기(ㄹ)의 두 x² 계수가 정확히 같아야 하고, 정답 보기는 두 개로 유지한다."
    creative: "(1) 이차함수가 아닌 것의 개수를 묻기(★1~2) (2) 각 보기를 y=ax²+bx+c 로 정리해 a 를 쓰게 하기(★2) (3) ㄹ 의 4 를 문자로 두고 이차함수가 되는 조건을 묻기(★2~3 · 165-c3 골조)."
```

```yaml
- id: GN-M31-165-c2
  page: 165
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    다섯 상황(정삼각형의 둘레 · 연속한 두 자연수의 곱 · 등속 주행 거리 · 정육면체의 부피 · 원의 넓이) 중 $y$ 가 $x$ 에 대한 이차함수인 것 2개 고르기.
  category: "상황 → 식으로 옮기기 → 차수 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "실생활 상황에서 이차함수 찾기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계산은 없고 다섯 상황을 각각 식으로 옮기는 단계가 부담이라 Mₛ 2 · Mₖ 1 이다. 도형 공식(둘레·부피·넓이)은 이미 아는 것을 꺼내 쓰는 것이라 표현 전환 통찰로는 세지 않았다.
    함정은 정육면체의 부피가 삼차식이라는 차수 혼동(T-단위) 하나. 핵심문제 구역 ★2 · 통찰 0 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "각 상황의 y 를 x 의 식으로 세우기 → x 의 차수가 2 인 것 고르기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②, ⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/165-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 상황의 상수(정삼각형 → 정n각형, 시속 60 km, 반지름 x 의 원 → 지름 x 의 원). 제약: 상수를 바꿔도 차수는 그대로여야 하고, 정답은 이차 두 개·오답은 일차 둘·삼차 하나 구성을 유지한다."
    creative: "(1) 이차함수인 것의 개수를 묻기(★2) (2) 정답 상황의 식을 실제로 세워 x=3 일 때의 값까지 묻기(★2 · 함숫값 결합) (3) 정육면체의 겉넓이·부피를 나란히 넣어 차수 구별을 정면으로 묻기(★2~3 · 169-01 골조)."
```

```yaml
- id: GN-M31-165-c3
  page: 165
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    $y=2x^2-x(ax+5)+8$ 이 $x$ 에 대한 이차함수가 되기 위한 상수 $a$ 의 조건 고르기(5지선다).
  category: "전개·정리 → x² 계수 (2-a) ≠ 0"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수가 되기 위한 계수 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「이차함수이다 → x² 계수가 0이 아니다」는 정의를 그대로 적용하는 표준 절차라 I-EQV 로 세지 않았다. 문자 계수가 들어가 Mₐ 가 2 로 올라간 것이 164-01 과의 유일한 차이다.
    함정은 정리하지 않고 2x² 만 보고 「항상 이차함수」라고 판단하는 것(T-표기). 핵심문제 구역 ★2 · 통찰 0 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "괄호 전개 → x² 항을 (2-a)x² 로 묶기 → 2-a≠0"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/165-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "앞의 x² 계수 2, 괄호 안의 5, 상수항 8. 제약: 정리 후 x² 계수가 a 의 일차식이어야 하고 답이 a≠(정수) 로 떨어질 것. 선택지는 그 정수 주변 값으로 채운다."
    creative: "(1) 「이차함수가 아니게 되는 a」를 묻기(★1~2 · 답이 등식) (2) 이차함수이면서 그래프가 위로 볼록할 조건을 묻기(★3 · 부등식 · T-부호) (3) x² 계수와 x 계수가 동시에 0이 되지 않을 조건처럼 두 겹으로 묻기(★3 · I-CON)."
```

```yaml
- id: GN-M31-166-h2
  page: 166
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    이차함수 $f(x)=2x^2-3x+5$ 에서 $f(-1)+f(1)$ 의 값 구하기.
  category: "두 값 대입 → 함숫값 더하기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수의 함숫값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    대입 두 번과 덧셈이 전부다. 일차항이 상쇄돼 짝수 차수 항만 두 배로 남는 대칭을 쓰면 더 빠르지만, 중3 단계에서는 직접 대입이 표준이라 통찰로 세지 않았다.
    핵심문제 구역 ★2 출발이나 통찰 0 · M_total 4 → −1 → ★1. 함정은 f(-1) 에서 -3x 의 부호뿐.
  tier: star_1
  mechanism_primary: "x=-1, x=1 을 각각 대입 → 두 함숫값의 합"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$14$"
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/166-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 계수와 대입할 두 수. 제약: 부호가 반대인 두 수를 넣어 일차항 상쇄 구조를 유지하면 대칭 풀이가 살아 있고, 서로 무관한 두 수로 바꾸면 단순 대입 두 번이 된다."
    creative: "(1) f(-1)-f(1) 로 바꾸면 짝수 차수 항이 상쇄돼 일차항만 남음(★2 · I-SYM d1 후보) (2) f(a)+f(-a) 를 a 의 식으로 나타내기(★3 · Mₐ 상승) (3) 계수 하나를 미지수로 두고 f(-1)+f(1) 값을 조건으로 주기(★2 · 166-c4 결합)."
```

```yaml
- id: GN-M31-166-c4
  page: 166
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    이차함수 $f(x)=-3x^2+ax-7$ 에서 $f(2)=-11$ 일 때 상수 $a$ 의 값 구하기.
  category: "f(2) 를 a 의 식으로 쓰기 → 일차방정식 풀기"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함숫값 조건으로 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    함숫값 조건에서 미정계수를 되찾는 표준 절차. 결과 조건이 먼저 주어지지만 스키마에서 「f(1)=0 으로부터 a」류의 단순 미정계수 대입은 I-BW 로 인정하지 않으므로 통찰 0.
    음수 이차항과 음수 상수항이 겹쳐 부호 실수(T-부호)가 유일한 함정이다. 핵심문제 구역 ★2 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "x=2 대입해 a 의 일차식 만들기 → f(2)=-11 과 등식 → a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/166-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항 계수 -3, 상수항 -7, 대입값 2, 함숫값 -11. 제약: a 가 정수로 떨어지도록 (f(2)+3·4+7) 이 2 의 배수일 것."
    creative: "(1) 미지수를 상수항 쪽에 두기(★2 · 같은 골조) (2) 조건을 f(1)=f(-1) 처럼 두 함숫값의 관계로 주기(★3 · I-EQV) (3) 계수 두 개를 미지수로 두고 함숫값 두 개를 주어 연립하기(★3)."
```

```yaml
- id: GN-M31-166-h3
  page: 166
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    다섯 이차함수 $y=ax^2$ 중 그래프가 아래로 볼록하면서 폭이 가장 넓은 것 고르기(5지선다).
  category: "a>0 인 것만 거르기 → 그중 |a| 최소"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "y=ax² 의 그래프 — 볼록 방향과 폭 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 조건을 순서대로 걸러야 하는 것이 요점이다. 음수 계수를 먼저 버리지 않고 절댓값만 비교하면 |a| 가 가장 작은 ② 를 고르게 되는 함정이 정면으로 설계돼 있다(T-부호).
    M_total 4 지만 조건이 두 겹이고 오답 설계가 분명해 −1 을 적용하지 않고 핵심문제 구역 출발점 ★2 를 유지했다. [분류 이슈] M_total 4·통찰 0 만 보면 ★1 도 가능.
  tier: star_2
  mechanism_primary: "a>0 인 선택지만 남기기 → 남은 것 중 |a| 가 가장 작은 것"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/166-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다섯 계수. 제약: 음수 중에 |a| 가 전체 최소인 것을 반드시 넣어 필터 순서를 검증할 것, 양수 쪽 정답이 유일할 것."
    creative: "(1) 「위로 볼록하면서 폭이 가장 좁은 것」으로 뒤집기(★2 유지) (2) 다섯을 폭 순서로 나열하게 하기(★2 · 166-c5) (3) 선택지에 y=ax² 를 섞어 조건을 만족하는 a 의 범위를 묻기(★3 · I-RT)."
```

```yaml
- id: GN-M31-166-c5
  page: 166
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    보기의 다섯 이차함수 $y=ax^2$ 를 그래프의 폭이 좁은 것부터 차례대로 나열하기.
  category: "|a| 비교 → 큰 것부터 나열"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "y=ax² 의 그래프 — 볼록 방향과 폭 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    166-h3 의 확인문제인데 고르기가 아니라 다섯을 전부 줄 세우는 것이라 분수 절댓값 비교가 여러 번 필요해 Mₖ 2.
    음수와 분수가 섞여 있어 「작은 수 = 넓다」로 처리하면 순서가 통째로 뒤집힌다(T-부호). 핵심문제 구역 ★2 · 통찰 0 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "각 계수의 절댓값을 통분·비교 → 절댓값이 큰 것부터 나열"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄹ, ㄱ, ㄷ, ㄴ, ㅁ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/166-c5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다섯 계수. 제약: 절댓값이 모두 달라 순서가 유일할 것, 음수와 분수를 섞어 둘 것, 절댓값이 같은 짝을 넣으려면 「폭이 같은 것끼리 짝 지으시오」로 발문을 바꿔야 함."
    creative: "(1) 넓은 것부터로 뒤집기(★2 유지) (2) 아래로 볼록한 것만 골라 나열하기(★2 · 두 조건 결합) (3) 다섯 그래프를 한 평면에 그린 그림을 주고 식을 짝짓게 하기(★3 · I-RT)."
```

```yaml
- id: GN-M31-167-h4
  page: 167
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    이차함수 $y=\dfrac{4}{5}x^2$ 의 그래프와 $x$축에 대하여 대칭인 그래프의 식 고르기(5지선다).
  category: "x축 대칭 → x² 계수의 부호만 반대"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "y=ax² 와 y=-ax² — x축 대칭"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    부호만 뒤집으면 끝나는 한 단계 문제다. 선택지에 역수를 취한 -5/4 를 넣어 「대칭 = 뒤집기」를 분수 뒤집기로 오해하는지 보는 함정이 하나 있다(T-표기).
    핵심문제 구역 ★2 출발이나 통찰 0 · M_total 4 → −1 → ★1.
  tier: star_1
  mechanism_primary: "x축 대칭 ↔ y 대신 -y → 계수의 부호만 반대인 식 선택"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/167-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 계수 4/5. 제약: 분수로 두어야 역수 오답 선택지를 만들 수 있고, 정수로 바꾸면 함정이 사라져 더 쉬워진다."
    creative: "(1) y축 대칭·원점 대칭과 섞어 묻기(★2~3 · y=ax² 는 y축 대칭이 자기 자신) (2) 대칭인 두 식의 계수의 합·곱을 묻기(★2 · 167-c6 골조) (3) 그림으로 두 포물선을 주고 한쪽 식만 제시하기(★2 · I-RT)."
```

```yaml
- id: GN-M31-167-c6
  page: 167
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    $y=ax^2$ 의 그래프가 $y=-6x^2$ 과, $y=bx^2$ 의 그래프가 $y=\dfrac{5}{2}x^2$ 과 각각 $x$축에 대하여 대칭일 때 $ab$ 의 값 구하기.
  category: "각각 부호 반대로 a, b 결정 → 곱하기"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "y=ax² 와 y=-ax² — x축 대칭"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    167-h4 의 부호 반전을 두 번 하고 곱하는 구성. 두 문자 계수가 들어가 Mₐ 2, 마지막 곱에서 부호를 한 번 더 확인해야 한다(T-부호).
    도구는 하나뿐이라 통찰 0. 핵심문제 구역 ★2 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "x축 대칭 → a 는 6, b 는 -5/2 로 부호 반전 → 두 값을 곱하기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-15$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/167-c6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 계수 -6 과 5/2. 제약: 부호가 서로 반대인 짝으로 두어 곱이 음수가 되게 하면 부호 점검이 살아 있고, 곱이 정수로 떨어지도록 분모와 상대 계수를 약분되게 맞출 것."
    creative: "(1) ab 대신 a+b 를 묻기(★2 · 분수 덧셈으로 Mₖ 상승) (2) 한쪽 조건을 「폭이 같고 위로 볼록」처럼 말로 주기(★3 · I-EQV) (3) 세 번째 대칭 관계를 추가해 abc 를 묻기(★3)."
```

```yaml
- id: GN-M31-167-h5
  page: 167
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    이차함수 $y=3x^2$ 의 그래프에 대한 설명(꼭짓점·축의 방정식·볼록 방향·폭 비교·$x<0$ 에서의 증가·감소) 중 옳지 않은 것 고르기.
  category: "식 → 포물선 개형 → 보기마다 개형에서 읽어 판정"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights:
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "식 y=3x² 를 포물선 개형으로 옮겨야 x<0 구간의 증가·감소를 판정할 수 있음(식만 보고는 판정 불가)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "y=ax² 의 그래프의 성질"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ①~④ 는 외운 성질을 그대로 대조하면 되지만 ⑤ 만 개형을 떠올려 축 왼쪽 구간을 따라가야 판정된다 — 이 단계가 식↔그래프 표현 전환(I-RT d1)이다.
    함정이 두 갈래(구간이 x<0 로 한정된 것 · 「아래로 볼록이니 항상 증가」라는 부호 착각)라 Mₜ 2. 핵심문제 구역 ★2 · 통찰 1개 depth 1 → 조정 없이 ★2.
  tier: star_2
  mechanism_primary: "꼭짓점·축은 식에서 바로 읽기 → 개형을 그려 축 왼쪽·오른쪽의 증가·감소 확인 → 어긋나는 보기 선택"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/167-h5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 계수 3 과 폭 비교 대상 y=x². 제약: 계수를 음수로 바꾸면 ③④⑤ 가 동시에 뒤집히므로 보기 전체를 다시 맞춰야 하고, 1 과 0 사이 분수로 바꾸면 ④ 의 부등호가 반대가 된다."
    creative: "(1) 「옳은 것」으로 뒤집기(★2 유지) (2) 계수를 -1/2 로 바꿔 위로 볼록 버전으로 묻기(★2 · 167-c7) (3) 계수를 a 로 두고 a 의 부호에 따라 갈리는 설명을 고르게 하기(★3 · 169-03 골조)."
```

```yaml
- id: GN-M31-167-c7
  page: 167
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    이차함수 $y=-\dfrac{1}{2}x^2$ 의 그래프에 대한 보기 ㄱ~ㄹ(볼록 방향 · $y=-x^2$ 과의 폭 비교 · 지나는 사분면 · $x>0$ 에서의 증가·감소) 중 옳은 것 모두 고르기.
  category: "개형(위로 볼록·y=-x² 보다 넓음) → 사분면·증가·감소 판정"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "식을 개형으로 옮겨 그래프가 지나는 사분면과 축 오른쪽의 증가·감소를 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "y=ax² 의 그래프의 성질"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 보기가 각각 다른 성질을 묻고 그중 둘(ㄷ 사분면 · ㄹ 증가·감소)은 개형을 그려야만 판정되므로 Mₛ 2 · I-RT d1.
    ㄴ 은 음수끼리의 폭 비교라 절댓값으로 봐야 하고(T-부호), ㄷ 은 위로 볼록인데 제1·2사분면이라고 적어 둔 정면 함정(T-범위)이다. 핵심문제 구역 ★2 · 통찰 1 → ★2.
    [분류 이슈] M_total 6·보기 네 갈래로 보면 ★3 도 가능하나 통찰이 depth 1 하나뿐이라 +1 을 적용하지 않았다.
  tier: star_2
  mechanism_primary: "계수의 부호로 볼록 방향 → 절댓값으로 폭 비교 → 개형에서 지나는 사분면과 x>0 구간의 증가·감소 판정"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "ㄴ, ㄹ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/167-c7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 계수 -1/2 과 비교 대상 -1. 제약: 비교 대상과 부호를 같게 두어야 절댓값 비교 함정이 살아 있고, 기준 계수의 절댓값이 1 보다 작아야 ㄴ 이 참이 된다."
    creative: "(1) 옳지 않은 것의 개수를 묻기(★2) (2) 보기에 꼭짓점·축의 방정식을 추가해 다섯 갈래로 늘리기(★3) (3) 그래프 그림만 주고 식의 계수 범위를 고르게 하기(★3 · I-RT d2)."
```

```yaml
- id: GN-M31-168-h6
  page: 168
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    이차함수 $y=ax^2$ 의 그래프가 두 점 $(2,\,-8)$, $(-1,\,b)$ 를 지날 때 $a+b$ 의 값 구하기($a$ 는 상수).
  category: "첫 점 대입 → a 결정 → 둘째 점 대입 → b → 합"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "y=ax² 의 그래프 위의 점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「그래프가 점을 지난다 → 좌표를 식에 대입하면 등식」이라는 이 단원의 기본 도구를 두 번 쓰는 구성이다. 순서가 고정돼 있어(a 를 먼저 구해야 b 가 나온다) 전략 분기는 없다.
    미지수 둘이라 Mₐ 2, x 가 음수인 점에서 제곱의 부호를 혼동하는 함정이 하나(T-부호). 핵심문제 구역 ★2 · 통찰 0 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "(2,-8) 대입 → a → 그 식에 (-1,b) 대입 → b → a+b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-4$"
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/168-h6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표. 제약: 첫 점에서 a 가 정수나 간단한 분수로 떨어져야 하고(x좌표의 제곱이 y좌표를 나눌 것), 둘째 점의 x 는 음수로 두어 제곱 부호 점검을 남길 것."
    creative: "(1) a-b 나 ab 를 묻기(★2 유지) (2) 둘째 점을 (b, -2) 처럼 x좌표 쪽을 미지수로 두기(★3 · 제곱근 두 해 · I-MI) (3) 두 점만 주고 식을 구하게 하기(★2 · 168-h7 골조)."
```

```yaml
- id: GN-M31-168-c8
  page: 168
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    이차함수 $y=\dfrac{1}{3}x^2$ 의 그래프가 두 점 $(-3,\,a)$, $(6,\,b)$ 를 지날 때 $b-a$ 의 값 구하기.
  category: "두 점의 x좌표를 각각 대입 → a, b → 차"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "y=ax² 의 그래프 위의 점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    168-h6 과 달리 계수가 이미 주어져 대입 두 번이면 끝난다. 다만 분수 계수라 제곱 후 약분이 두 번 들어가고, 음수 x좌표의 제곱을 음수로 두는 실수(T-부호)가 함정이다.
    미지수 둘이라 Mₐ 2. 핵심문제 구역 ★2 · 통찰 0 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "x=-3, x=6 을 각각 대입 → a, b → b-a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$9$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/168-c8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 1/3 과 두 x좌표. 제약: 두 x좌표의 제곱이 모두 분모의 배수여서 a, b 가 정수로 떨어질 것, 한쪽은 음수로 둘 것."
    creative: "(1) a+b 나 b:a 를 묻기(★2 유지) (2) 두 점의 y좌표를 주고 x좌표를 묻기(★3 · 제곱근 두 해 · I-MI) (3) 계수를 미지수로 두고 b-a 값을 조건으로 주어 역으로 계수를 구하기(★3 · I-BW)."
```

```yaml
- id: GN-M31-168-h7
  page: 168
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    원점을 꼭짓점으로 하고 점 $(-1,\,-3)$ 을 지나는 포물선을 그래프로 하는 이차함수의 식 구하기(그림 제시).
  category: "원점 꼭짓점 → y=ax² 로 놓기 → 점 대입 → a"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프에서 y=ax² 의 식 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    「원점이 꼭짓점인 포물선」을 y=ax² 로 놓는 번역은 이 절에서 이미 반복된 약속이라 통찰로 세지 않았고, 그 뒤는 대입 한 번이다.
    그림은 포물선이 아래로 볼록인지 위로 볼록인지를 눈으로 확인시켜 줄 뿐 좌표가 발문에 그대로 있어 골조에 영향이 없다. 핵심문제 구역 ★2 출발이나 통찰 0 · M_total 4 → −1 → ★1.
  tier: star_1
  mechanism_primary: "y=ax² 로 놓기 → (-1,-3) 대입 → a → 식 쓰기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y=-3x^2$"
  answer_source: "본문 답"
  figure: crop:fig-168-h7.png
  latex: latex-bank/gn-m31/items/168-h7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점의 좌표. 제약: x좌표의 제곱이 y좌표를 나누어 a 가 간단한 수로 떨어질 것, 그림의 볼록 방향과 y좌표의 부호가 일치해야 함(그림 라벨 고정)."
    creative: "(1) 점을 그림에만 표시하고 발문에서 빼기(★2 · I-RT) (2) 「y=x² 의 그래프와 x축에 대하여 대칭이고 …」처럼 조건을 말로 주기(★2~3) (3) 지나는 점 대신 「점 (1,k) 를 지난다」를 덧붙여 k 까지 묻기(★2)."
```

```yaml
- id: GN-M31-168-c9
  page: 168
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    원점을 꼭짓점으로 하고 점 $(2,\,3)$ 을 지나는 포물선을 그래프로 하는 이차함수의 식 구하기(그림 제시).
  category: "원점 꼭짓점 → y=ax² 로 놓기 → 점 대입 → a"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프에서 y=ax² 의 식 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    168-h7 과 같은 골조이고 a 가 분수로 나온다는 점만 다르다. 답을 기약분수 계수로 쓰는 표기가 유일한 확인 지점이다.
    그림은 아래로 볼록한 개형 확인용이고 좌표는 발문에 있다. 핵심문제 구역 ★2 출발 · 통찰 0 · M_total 4 → −1 → ★1.
  tier: star_1
  mechanism_primary: "y=ax² 로 놓기 → (2,3) 대입 → a → 식 쓰기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=\dfrac{3}{4}x^2$'
  answer_source: "답지"
  figure: crop:fig-168-c9.png
  latex: latex-bank/gn-m31/items/168-c9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점의 좌표. 제약: 계수가 분수로 나오도록 x좌표의 제곱이 y좌표를 나누지 않게 두되 기약분수로 떨어질 것, 그림이 아래로 볼록이므로 y좌표는 양수로 유지."
    creative: "(1) 점을 제2사분면에 두어 부호 확인을 추가(★1~2) (2) 이 그래프와 x축에 대하여 대칭인 식까지 묻기(★2 · 167 절 결합) (3) 같은 그림에 y=x² 를 겹쳐 그려 폭을 비교하게 하기(★3 · 169-02 골조)."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M31-169-01
  page: 169
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    보기 세 상황(한 개 $x$ 원인 사탕 $(x+10)$ 개의 가격 · 반지름 $x\,\mathrm{cm}$ 인 구의 부피 · 한 모서리 $x\,\mathrm{cm}$ 인 정육면체의 겉넓이) 중 $y$ 가 $x$ 에 대한 이차함수인 것 모두 고르기.
  category: "상황 → 식으로 옮기기 → 차수 판정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "실생활 상황에서 이차함수 찾기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    165-c2 와 같은 골조지만 보기가 셋뿐이라 Mₛ 가 1 로 내려간다. 대신 구의 부피(삼차)와 정육면체의 겉넓이(이차)를 나란히 놓아 차수 혼동(T-단위)을 정면으로 묻는다.
    ㄱ 은 가격 = 개당 값 × 개수로 옮기면 곱이 이차가 되는 문장제 한 줄. 시험 구역 ★2~3 출발 · 통찰 0 · M_total 4 → ★2.
  tier: star_2
  mechanism_primary: "각 상황의 y 를 x 의 식으로 세우기 → 정리 후 x 의 차수가 2 인 것 고르기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/169-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "사탕 개수의 +10, 도형의 종류(구 → 원기둥, 정육면체 → 직육면체). 제약: 이차·삼차·일차가 한 번씩 나오는 구성을 유지하고, 부피와 겉넓이를 짝으로 넣어 차수 대비를 남길 것."
    creative: "(1) 이차함수인 것의 개수를 묻기(★2 유지) (2) 이차인 상황의 식을 세우고 특정 x 에서의 값까지 묻기(★2~3 · 함숫값 결합) (3) 넓이가 일정한 직사각형의 둘레처럼 이차가 아닌 반례를 섞기(★3 · I-EQV)."
```

```yaml
- id: GN-M31-169-02
  page: 169
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    세 이차함수 $y=x^2$, $y=ax^2$, $y=\dfrac{1}{4}x^2$ 의 그래프가 그림과 같을 때 상수 $a$ 의 값이 될 수 있는 것 2개 고르기.
  category: "그림의 폭 순서 → 계수의 대소 부등식 → 선택지 거르기"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그림에서 세 포물선의 폭 순서를 읽어 계수의 대소 부등식으로 옮김(그림 없이는 a 의 범위가 정해지지 않음)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프의 폭 비교로 계수의 범위 정하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    그림에서 y=ax² 가 y=x² 보다 넓고 y=(1/4)x² 보다 좁으므로 계수는 1/4 과 1 사이 — 그림 → 부등식 전환이 이 문제의 전부이자 유일한 난점(I-RT d1)이다.
    세 그래프가 모두 아래로 볼록이라 부호 판정은 필요 없고, 마지막에 범위 안의 선택지를 빠짐없이 둘 다 고르는 것이 남는다. 시험 구역 ★2~3 출발 + 통찰 1 → ★3.
  tier: star_3
  mechanism_primary: "그림의 폭 순서 → 1/4 < a < 1 → 범위에 드는 선택지 모두 고르기"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②, ③"
  answer_source: "답지"
  figure: crop:fig-169-02.png
  latex: latex-bank/gn-m31/items/169-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 기준 계수(1 과 1/4)와 다섯 선택지. 제약: 그림의 폭 순서가 유지되도록 두 기준 사이에 정답 선택지가 정확히 둘 들어가고 나머지는 범위 바깥일 것. 그림의 라벨(y=x², y=1/4x²)은 기준 계수를 바꾸면 함께 고쳐야 함."
    creative: "(1) a 의 값의 범위를 부등식으로 쓰게 하기(★2~3) (2) 세 그래프를 모두 위로 볼록으로 바꿔 절댓값 비교로 만들기(★3 · T-부호 추가) (3) 그림 없이 「y=x² 보다 넓고 y=(1/4)x² 보다 좁다」를 문장으로 주면 I-RT 가 사라져 ★2."
```

```yaml
- id: GN-M31-169-03
  page: 169
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    이차함수 $y=ax^2$ 의 그래프에 대한 설명(꼭짓점 · $|a|$ 가 클수록 $y$축에 가까워짐 · $y=-ax^2$ 과 $x$축 대칭 · $a$ 의 부호와 볼록 방향 · $a<0$, $x>0$ 에서의 증가·감소) 중 옳지 않은 것 고르기($a$ 는 상수).
  category: "a 를 문자로 둔 채 두 개형 → 보기마다 a 의 부호·절댓값으로 판정"
  M: {s: 1, k: 1, a: 2, t: 2}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "계수가 문자이므로 a>0·a<0 두 개형을 떠올려야 ⑤ 의 증가·감소가 판정됨(식만으로는 갈림)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "y=ax² 의 그래프의 성질"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    167-h5 의 문자 계수 버전이다. 계수가 수치가 아니라 a 라서 개형이 두 갈래로 갈리고 보기마다 필요한 갈래가 달라 Mₐ 2.
    ⑤ 는 위로 볼록한 개형에서 축 오른쪽을 따라가야 틀림이 보이고(T-부호), ② 는 「y축에 가까워진다」라는 말이 폭이 좁아진다는 뜻임을 알아야 한다(T-표기) — 함정 두 갈래로 Mₜ 2. 시험 구역 ★2~3 + 통찰 1 → ★3.
  tier: star_3
  mechanism_primary: "a 의 부호별 두 개형을 세우기 → 각 보기를 해당 개형에서 판정 → 어긋나는 것 선택"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/169-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이 문항은 계수가 전부 문자라 바꿀 수치가 사실상 없다. ⑤ 의 조건(a<0, x>0)을 다른 조합(a>0, x<0 등)으로 바꿀 때 참·거짓이 뒤집히는지 확인해야 한다."
    creative: "(1) 「옳은 것」으로 뒤집으면 네 보기를 모두 검증해야 해 Mₛ 상승(★3 유지) (2) a 의 범위를 -1<a<0 처럼 좁혀 폭 비교 보기를 추가하기(★3~4) (3) 두 이차함수 y=ax², y=bx² 의 그래프 그림을 주고 a, b 의 대소를 묻기(★3 · 169-02 결합)."
```

```yaml
- id: GN-M31-169-04
  page: 169
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    이차함수 $y=ax^2$ 의 그래프가 $y=\dfrac{1}{4}x^2$ 의 그래프와 $x$축에 대하여 대칭이고 점 $(6,\,b)$ 를 지날 때 $4ab$ 의 값 구하기($a$ 는 상수).
  category: "x축 대칭 → a 결정 → 점 대입 → b → 4ab"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x축 대칭과 그래프 위의 점 결합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    이 절의 두 도구(167 절 x축 대칭 · 168 절 그래프 위의 점)를 이어 붙인 문항이다. 대칭에서 a 를 음수로 얻고 그 식에 점을 넣어야 b 도 음수로 나오는데, 부호를 한 번 놓치면 끝까지 틀린다(T-부호).
    도구가 둘 다 표준이라 통찰 라벨은 붙이지 않았다. 시험 구역 ★2~3 · M_total 6 · 두 개념 결합 → ★3.
    [분류 이슈] 통찰 0 이므로 ★2 로 볼 수도 있다 — 결합 단계와 부호 함정을 보고 ★3 으로 두었다.
  tier: star_3
  mechanism_primary: "x축 대칭 → a 는 1/4 의 부호 반전 → 그 식에 (6,b) 대입 → b → 4ab"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$9$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/169-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 계수 1/4, 점의 x좌표 6, 앞에 붙은 계수 4. 제약: x좌표의 제곱이 분모의 배수여서 b 가 정수로 떨어질 것, 마지막 계수는 ab 의 분모를 지우도록 맞출 것."
    creative: "(1) 4ab 대신 a+b 를 묻기(★3 유지 · 분수 덧셈) (2) 대칭 조건을 「y=x² 보다 넓고 위로 볼록」처럼 범위로 주기(★4 · I-RT+I-MI) (3) 점의 y좌표를 주고 x좌표를 묻기(★3~4 · 제곱근 두 해 · I-MI)."
```

```yaml
- id: GN-M31-169-05
  page: 169
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    원점을 꼭짓점으로 하는 포물선이 두 점 $(-2,\,6)$, $(4,\,k)$ 를 지날 때 $k$ 의 값 구하기.
  category: "원점 꼭짓점 → y=ax² → 첫 점으로 a → 둘째 점으로 k"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프에서 y=ax² 의 식 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    168-h7 의 식 세우기와 168-h6 의 점 대입을 한 줄로 이은 문항인데 그림이 없어 「원점을 꼭짓점으로 하는 포물선」이라는 말을 스스로 y=ax² 로 옮겨야 한다. 이 절에서 세 번째 반복되는 번역이라 통찰로는 세지 않았다.
    a 가 분수로 나와 둘째 대입에서 약분이 한 번 들어가고, 음수 x좌표의 제곱이 함정이다(T-부호). 시험 구역 ★2~3 · 통찰 0 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "y=ax² 로 놓기 → (-2,6) 으로 a → 그 식에 x=4 대입 → k"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$24$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/169-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표. 제약: 첫 점에서 a 가 간단한 분수나 정수로 떨어지고 둘째 점에서 k 가 정수가 될 것. 둘째 x좌표를 첫 x좌표의 배수로 두면 k 가 제곱배로 커지는 관계를 쓸 수 있다."
    creative: "(1) 두 x좌표의 비만 주고 두 y좌표의 비를 묻기(★3 · 제곱비 · I-EQV) (2) 「원점을 꼭짓점으로 한다」를 빼고 그림으로 주기(★2 · I-RT) (3) k 를 조건으로 주고 지나는 점의 x좌표를 묻기(★3 · 두 해 · I-MI)."
```

## 표본 판정 요약 (25문)

- ★ 분포: ★1 8 · ★2 14 · ★3 3 · ★4 0 · ★5 0
- 구역별: 개념원리 확인하기 4문(전부 ★1) · 핵심문제 익히기 16문(★1 4 · ★2 12) · 이런 문제가 시험에 나온다 5문(★2 2 · ★3 3)
- 통찰형 4(167-h5 · 167-c7 · 169-02 · 169-03) · 절차형 21 · premium 0. 통찰 유형은 전부 I-RT depth 1(식 ↔ 포물선 개형)이고 SC/VF/SYM/XU 는 한 건도 없다 — 도입 단원이라 ★4 이상이 나올 구조가 아니다.
- 대상층: 하위권 8 · 중하위권 12 · 중위권 5
- type_hint 상위 5: 「이차함수의 뜻 — 식이 이차함수인지 판정」 3 · 「y=ax² 의 그래프의 성질」 3 · 「그래프에서 y=ax² 의 식 구하기」 3 · 「y=ax² 의 그래프 위의 점」 2 · 「y=ax² 와 y=-ax² — x축 대칭」 2 (그 밖에 「이차함수의 함숫값」 2 · 「실생활 상황에서 이차함수 찾기」 2 · 「y=ax² 의 그래프 — 볼록 방향과 폭 비교」 2)
- 그림: 4문(`crop:fig-164-03-2.png` · `crop:fig-168-h7.png` · `crop:fig-168-c9.png` · `crop:fig-169-02.png`). 이 중 골조에 영향을 주는 것은 169-02 하나이고, 나머지 셋은 좌표·표가 발문에 그대로 있어 확인용이다.
- 함정 분포: T-부호 11문(음수 계수의 폭 비교 · 음수 x좌표의 제곱 · 볼록 방향) · T-단위(차수 혼동) 2문(165-c2 · 169-01) · T-표기 4문 · T-범위 2문(167-h5 · 167-c7).

## 분류 이슈 목록

판정이 애매해 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M31-166-h3 | M_total 4·통찰 0 이면 −1 규칙상 ★1 이지만, 「아래로 볼록」과 「폭이 가장 넓다」를 순서대로 걸러야 하고 음수 계수 함정이 정면 설계라 ★2 유지 | ★1 / ★2 |
| GN-M31-167-c7 | 보기 네 갈래·M_total 6 으로는 ★3 도 가능하나 통찰이 I-RT depth 1 하나뿐이라 +1 을 적용하지 않음 | ★2 / ★3 |
| GN-M31-169-04 | 통찰 0 이라 산식상 ★2 이지만 x축 대칭과 그래프 위의 점을 잇는 결합 단계와 부호 함정을 보고 ★3 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ⑴ 「이차함수의 뜻 — 식 판정」(164-01 · 165-h1 · 165-c1)과 ⑵ 「이차함수가 되기 위한 계수 조건」(165-c3)은 골조가 같아 보이지만 후자는 문자 계수의 조건을 답으로 내므로 base ★ 가 한 단 높다. ⑶ 「실생활 상황에서 이차함수 찾기」(165-c2 · 169-01)는 식 판정과 달리 상황 → 식 세우기가 주 부담이라 별도 유형이 맞다. ⑷ 「그래프의 폭 비교로 계수의 범위 정하기」(169-02)는 이 범위에서 유일하게 그림이 골조에 들어가는 유형이라 단독으로 세워야 한다.
- **통합해도 될 유형**: 「y=ax² 의 그래프 — 볼록 방향과 폭 비교」(166-h3 · 166-c5)와 「y=ax² 의 그래프의 성질」(164-04 · 167-h5 · 167-c7 · 169-03)은 묻는 방식(고르기 / 나열 / 옳고 그름)만 다르고 도구가 같아 한 유형의 하위 변형으로 묶을 수 있다. 「y=ax² 의 그래프 위의 점」(168-h6 · 168-c8)과 「그래프에서 y=ax² 의 식 구하기」(168-h7 · 168-c9 · 169-05)도 대입 방향만 반대라 한 유형의 두 방향으로 두는 편이 낫다.
- **★ 상한 메모**: 이 범위의 도구로는 통찰이 I-RT 한 종류뿐이라 v3.8 §2.13 기준(★5 는 SC/VF/SYM/XU 필요)에 걸려 ★4 이상 슬롯을 만들 수 없다. 이 단원에서 ★4 를 내려면 다음 단원(이차함수의 그래프 평행이동)과 결합하거나 제곱근의 두 해(I-MI)를 끌어와야 한다.
