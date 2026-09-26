---
name: mechanism-데이터-GN-CALC1-18
description: 개념원리 미적분Ⅰ 18 부정적분(1/1 · 156~159쪽 14문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅰ · 전사본 latex-bank/gn-calc1
  section: 18 부정적분
  unit_code: GN-CALC1-18
  part: "1/1"
  extract_range: "156~159쪽 · 156-312~159-322"
  total_problems: 14
  unit_total: 14
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc1/items/<id>.tex
  image_source: latex-bank/gn-calc1/figures/ (이 범위 그림 없음)
---

# 개념원리 미적분Ⅰ · 18 부정적분 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅰ 18단원 「부정적분」 156~159쪽 14문항 전수를 다룬다. 구역은 「개념원리 익히기」(156-312~156-315 · 4문)와 「필수·발전 예제」(157-e1~159-322 · 필수 예제 3문 + 확인체크 7문)의 둘뿐이고 연습문제 구역은 이 범위에 없다. 벤더 난이도 신호는 구역과 태그로 나타난다 — 개념원리 익히기와 tag 「확인체크」는 개념 확인이라 ★1, tag 「필수」 예제는 ★2 가 출발점이고, 여기서 M_total·통찰로 ±1 조정했다. 확인체크는 바로 앞 필수 예제의 쌍둥이라, 골조가 같으면 그 예제의 ★ 를 따라가게 두었다.

이 범위의 골조는 셋으로 갈린다. (가) **부정적분의 정의를 양변 미분으로 되돌리는 절차형** — ∫f dx 가 주어지면 우변을 미분해 f 를 얻고 계수를 비교한다(156-312 · 156-313 · 156-314 · 157-e1 · 157-316 · 157-318). (나) **d/dx∫f dx = f 와 ∫(d/dx f)dx = f + C 를 구분하는 적분상수형**(156-315 · 158-e2 · 158-319 · 158-320). (다) **f+g · f−g · fg 같은 결합 조건을 각각 적분한 뒤 f, g 를 분리하는 연립형**(159-e3 · 159-321 · 159-322). 이 단원의 실질 변별점은 오직 **적분상수 C 를 언제 붙이고 무엇으로 결정하는가**여서, 그 판단이 들어간 문항에만 통찰 라벨을 붙였다. (가) 의 「양변 미분 후 계수 비교」는 단원 표준 절차로 보고 통찰로 세지 않았고, 우변 도함수를 인수분해해 주어진 일차식을 약분하는 단계(157-e1⑵ · 157-317)만 I-EQV d1 로 인정했다.

소문항(⑴~⑷)이 있는 문항의 Mₛ 는 소문항 수가 아니라 **서로 다른 골조 단계 수**로 셌다. 같은 골조의 반복(차수만 다른 부정적분 네 개)은 1단계로 본다. Mₐ 는 구체 수치만 나오면 1, 미정상수나 미지 다항함수가 하나 끼면 2 로 두었다(이 범위에는 완전 일반 함수 조건만 주어지는 문항이 없어 3 은 쓰지 않았다). Mₜ 는 이 단원에서 사실상 T-표기(적분상수 C 의 유무) 한 카테고리라 대부분 1 이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CALC1-156-312
  page: 156
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    $5x^4$ 의 부정적분인 것을 보기 ㄱ~ㄹ($x^5$ · $-x^5$ · $x^5+100$ · $x^5+x$)에서 있는 대로 고르기.
  category: "부정적분의 정의 → 미분해서 원래 함수가 되는 것 고르기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부정적분의 정의 — F'(x)=f(x) 인 F 고르기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    보기를 하나씩 미분해 5x^4 이 되는지 확인하면 끝난다. 상수항이 붙어도 도함수가 같다는 것(ㄷ)과 일차항이 붙으면 달라진다는 것(ㄹ)이 유일한 판단점이다(T-표기). 단원 도입의 개념 확인이라 통찰 라벨이 붙는 단계가 없고 M_total 4 → 개념원리 익히기 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: "보기를 각각 미분 → 5x^4 이 되는 것만 선택 → 상수항은 적분상수라 허용·일차항은 불가"
  insight_type: 절차형
  target_cohort: 하위권
  answer: 'ㄱ, ㄷ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/156-312.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수의 차수·계수(5x^4 → 4x^3 · 3x^2 등)와 보기 ㄷ 의 상수항 값을 바꿀 수 있음. 제약: 보기 안에 「상수항만 다른 것」과 「일차항이 붙은 것」이 각각 최소 하나씩 있어야 적분상수의 의미를 묻는 학습 목표가 남는다."
    creative: "(1) 부정적분이 아닌 것을 고르게 뒤집기(★1 유지) (2) 보기에 (x^5+C 꼴이 아닌) 2x^5/2 처럼 계수가 틀린 것을 섞기(★1 유지) (3) 「F(0)=100 인 부정적분」처럼 조건을 하나 붙여 상수를 결정하게 하면 → ★2."
```

```yaml
- id: GN-CALC1-156-313
  page: 156
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ $\int 7\,dx$ · $\int 6x\,dx$ · $\int 3x^2\,dx$ · $\int (-4x^3)\,dx$ 를 각각 구하기.
  category: "x^n 의 부정적분 공식 → 네 개 직접 계산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항함수의 부정적분 직접 계산(x^n 공식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 ∫x^n dx = x^(n+1)/(n+1) + C 를 네 번 적용하는 반복 연습. 소문항이 넷이지만 골조는 하나라 Mₛ 1 로 셌고, 적분상수 C 를 빠뜨리지 않는 것만 유일한 함정이다(T-표기). 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "각 항에 ∫x^n dx = x^(n+1)/(n+1) + C 적용 → 계수 정리 → C 붙이기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $7x+C$ ⑵ $3x^2+C$ ⑶ $x^3+C$ ⑷ $-x^4+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/156-313.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 소문항의 차수와 계수를 자유롭게 바꿀 수 있음. 제약: 나눈 뒤 계수가 정수나 간단한 분수로 떨어지도록 계수를 차수+1 의 배수로 잡는 것이 개념 익히기 단계에 맞다(6x → 3x^2 처럼)."
    creative: "(1) 상수함수 ∫a dx 를 하나 남겨 「상수도 적분 대상」임을 묻기(★1 유지) (2) 소문항을 다항식 하나로 합쳐 항별 적분을 묻기(★1 유지) (3) 피적분함수를 (x+1)(x-2) 처럼 전개가 필요한 곱으로 주면 Mₖ 상승 → ★2."
```

```yaml
- id: GN-CALC1-156-314
  page: 156
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ $\int f(x)\,dx$ 가 각각 $2x+C$ · $3x^2+x+C$ · $4x^3-5x^2+11x+C$ 일 때 $f(x)$ 구하기.
  category: "부정적분의 정의 → 양변을 미분해 피적분함수 복원"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∫f(x)dx 가 주어졌을 때 f(x) 구하기(양변 미분)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    313 의 역방향 연습. 양변을 x 로 미분하면 좌변이 f(x) 가 되고 우변에서 C 가 사라진다는 한 단계뿐이다. 소문항 셋의 골조가 같아 Mₛ 1, 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "양변을 x 로 미분 → 좌변은 f(x) · 우변은 도함수(C 는 소거) → f(x) 확정"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $f(x)=2$ ⑵ $f(x)=6x+1$ ⑶ $f(x)=12x^2-10x+11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/156-314.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 다항식의 차수와 계수를 바꿀 수 있음. 제약: 우변 끝에 +C 가 반드시 남아 있어야 「미분하면 C 가 사라진다」는 확인 지점이 유지된다. 상수항을 C 대신 구체 수로 주면 다른 학습 목표가 된다."
    creative: "(1) f(x) 대신 f(2) 같은 함숫값을 묻기(★1 유지) (2) 우변에 미정계수를 넣어 계수 비교까지 시키면 → ★2(157-e1⑴ 골조) (3) 좌변을 ∫(x-1)f(x)dx 로 바꾸면 약분 단계가 생겨 → ★2(157-317 골조)."
```

```yaml
- id: GN-CALC1-156-315
  page: 156
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑵ $\frac{d}{dx}\left\{\int (5x^2+x)\,dx\right\}$ 와 $\int \left\{\frac{d}{dx}(5x^2+x)\right\}dx$ 를 각각 계산.
  category: "미분과 적분의 순서 구분 → 적분상수 유무 판정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부정적분과 미분의 관계 — 두 연산 순서 구분(적분상수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    이 단원의 핵심 개념을 공식 두 줄로 확인하는 문항. 적분 후 미분이면 원래 함수 그대로, 미분 후 적분이면 +C 가 붙는다는 차이 하나가 전부다(T-표기). 계산량이 없고 통찰 라벨이 붙는 단계도 없어 ★1 이지만, 단원의 나머지 문항(158-e2 · 158-319 · 158-320)이 전부 이 한 줄을 변주한 것이라 변형 원본으로서의 비중은 크다.
  tier: star_1
  mechanism_primary: "d/dx∫f dx = f · ∫(d/dx f)dx = f + C 두 공식을 그대로 적용"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $5x^2+x$ ⑵ $5x^2+x+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/156-315.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "안쪽 다항식 5x^2+x 의 차수·계수만 바꾸면 된다. 제약: 두 소문항이 같은 함수여야 「+C 하나만 다르다」는 대비가 살아난다. 상수항이 있는 함수를 쓰면 ⑵ 에서 원래 상수항과 C 가 섞여 대비가 흐려진다."
    creative: "(1) 두 식의 차를 묻기(답이 −C · ★2) (2) 안쪽을 ∫(d/dx f)dx 꼴로 두고 f(0) 조건을 붙여 C 를 결정하게 하면 → ★2(158-e2⑵ 골조) (3) 함수를 미지 다항함수 f 로 추상화하면 Mₐ 상승 → ★2."
```

### 필수·발전 예제

```yaml
- id: GN-CALC1-157-e1
  page: 157
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ $\int (6x^2+6x+a)\,dx=bx^3+cx^2+6x+C$ 를 만족시키는 상수 $a$, $b$, $c$ 에 대하여 $a+b+c$. ⑵ $\int (x-1)f(x)\,dx=x^3-2x^2+x+C$ 를 만족시키는 다항함수 $f(x)$.
  category: "양변 미분 → 계수 비교(⑴) · 인수분해 후 약분(⑵)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑵ 에서 우변 도함수 3x^2-4x+1 을 (x-1)(3x-1) 로 인수분해해 좌변의 (x-1) 과 맞추면 f 가 바로 분리된다는 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "부정적분의 정의 — 양변 미분 후 계수 비교로 미정상수·f(x) 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 소문항 모두 양변을 미분해 피적분함수끼리 비교하는 같은 출발점을 쓴다. ⑴ 은 6x^2+6x+a = 3bx^2+2cx+6 의 계수 비교로 끝나는 표준 절차. ⑵ 는 (x-1)f(x) = 3x^2-4x+1 에서 우변을 인수분해해 (x-1) 을 약분해야 f 가 나오는데, 미정계수 f(x)=px+q 로 두는 길도 있어 변환을 알면 한 줄이 줄어든다(EQV d1). 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "양변을 x 로 미분 → ⑴ 계수 비교로 a·b·c → ⑵ 우변 인수분해 후 (x-1) 약분으로 f(x)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $11$ ⑵ $f(x)=3x-1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/157-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 은 좌변 6x^2+6x 의 계수와 우변 일차항 계수 6 을, ⑵ 는 우변 삼차식의 계수를 바꿀 수 있음. 제약: ⑴ 은 미분한 우변의 계수가 좌변과 정수로 맞아야 하고(3b·2c 가 정수), ⑵ 는 우변의 도함수가 반드시 좌변의 일차식 (x-1) 을 인수로 가져야 f 가 다항함수로 떨어진다."
    creative: "(1) ⑴ 에서 a+b+c 대신 abc 를 묻기(★2 유지 · 157-316 과 같은 변형) (2) ⑵ 의 좌변 일차식을 분수 계수(x/2-1)로 바꾸면 약분에 분수 처리가 붙어 → ★2 상단(157-317) (3) ⑵ 에서 f 를 이차식이 되게 우변을 사차식으로 올리면 계수 비교량이 늘어 → ★3."
```

```yaml
- id: GN-CALC1-157-316
  page: 157
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $8x^3+ax^2-2x+1$ 의 부정적분 중 하나가 $bx^4+2x^3+cx^2+x$ 일 때 상수 $a$, $b$, $c$ 에 대하여 $abc$.
  category: "원시함수를 미분 → 계수 비교로 세 상수 결정"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부정적분의 정의 — 양변 미분 후 계수 비교로 미정상수·f(x) 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e1⑴ 의 쌍둥이. 「부정적분 중 하나」라는 표현이 적분상수 C=0 인 원시함수를 뜻한다는 것만 읽어내면(T-표기) 우변을 미분해 4bx^3+6x^2+2cx+1 과 좌변의 계수를 차례로 맞추는 절차다. 통찰 라벨이 붙는 단계가 없고 M_total 5 라 확인체크 출발점 ★1 에서 한 단 올릴 근거는 약하지만, 미정상수가 셋이고 골조가 직전 필수 예제와 같아 ★2 로 맞췄다.
  tier: star_2
  mechanism_primary: "우변(원시함수)을 미분 → 좌변 피적분함수와 계수 비교 → a·b·c → 곱"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/157-316.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌변의 x^3 계수와 우변의 x^3 계수(=4b 를 결정), 좌변 일차항·상수항을 바꿀 수 있음. 제약: 미분한 우변의 계수가 좌변과 정수로 맞아야 하고 abc 가 지저분한 분수가 되지 않도록 b 를 정수로 떨어지게 잡는다."
    creative: "(1) abc 대신 a+b+c 를 묻기(★2 유지) (2) 우변 상수항을 남겨 「부정적분 중 하나」 조건을 없애면 C 처리 함정이 사라져 → ★1 (3) 우변 일부 계수를 가리고 f(1) 값을 추가 조건으로 주면 연립이 생겨 → ★3."
```

```yaml
- id: GN-CALC1-157-317
  page: 157
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    다항함수 $f(x)$ 에 대하여 $\int \left(\frac{1}{2}x-1\right)f(x)\,dx=\frac{1}{3}x^3-\frac{1}{4}x^2-3x+C$ 일 때 $f(2)$.
  category: "양변 미분 → 우변 인수분해로 일차식 약분 → 함숫값"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "우변 도함수 x^2-x/2-3 을 (x-2)(2x+3)/2 로 인수분해해 좌변의 (x/2-1)=(x-2)/2 와 약분하면 f 가 분리된다는 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "∫(일차식)f(x)dx 가 주어졌을 때 f(x) 구하기(인수분해 약분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e1⑵ 의 분수 계수판. 양변을 미분하면 (x/2-1)f(x) = x^2-x/2-3 이고, 여기서 우변을 인수분해해 (x-2) 를 약분해야 f 가 나온다(EQV d1). x=2 를 그냥 대입하면 좌변이 0 이 되어 f(2) 를 바로 얻을 수 없다는 것이 이 문항의 진짜 함정이고, 분수 계수 정리로 Mₖ 가 한 단 올라간다. 확인체크 ★1 출발 + 통찰 1개 → ★2.
  tier: star_2
  mechanism_primary: "양변 미분 → 우변 인수분해 → 좌변 일차식 약분으로 f(x) → x=2 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/157-317.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌변 일차식의 계수(x/2-1 → x/3-1 등)와 우변 삼차식의 계수를 바꿀 수 있음. 제약: 우변의 도함수가 좌변 일차식을 인수로 가져야 하고, 묻는 함숫값 지점은 일차식의 근(여기서는 x=2)과 달라도 되지만 근으로 잡으면 약분 없이는 절대 못 푸는 형태가 된다. f 의 계수가 정수로 떨어지게 우변 계수를 잡는다."
    creative: "(1) f(2) 대신 f 의 모든 계수의 합 f(1) 을 묻기(★2 유지) (2) 좌변 일차식을 이차식 (x^2-1) 로 올려 우변을 사차식으로 주면 약분이 두 단계 → ★3 (3) f 를 미지 일차함수 px+q 로 두고 전개·계수 비교로 푸는 길을 막도록 f 의 차수를 알려주지 않으면 전략 분기(I-SC)가 생겨 → ★3."
```

```yaml
- id: GN-CALC1-157-318
  page: 157
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=x^2+1$, $g(x)=x^3-2$ 에 대하여 $\int h(x)\,dx=f(x)g(x)$ 를 만족시키는 $h(x)$.
  category: "양변 미분 → 곱의 미분법으로 피적분함수 복원"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∫h(x)dx=f(x)g(x) 에서 h 구하기(곱의 미분법)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양변을 미분하면 h=(fg)' 이므로 곱의 미분법 한 번으로 끝난다. f'g+fg' = 2x(x^3-2)+(x^2+1)·3x^2 을 전개·정리하는 계산이 이 범위에서는 가장 무거운 편이라 Mₖ 2 를 주었다(전개 실수 = 오답). 통찰 라벨이 붙는 단계는 없고, 먼저 fg 를 전개한 뒤 미분해도 같은 답이라 전략 분기로도 보지 않았다. 확인체크 ★1 출발이지만 앞의 정의형 예제들과 같은 골조라 ★2.
  tier: star_2
  mechanism_primary: "양변 미분 → h=(fg)' → 곱의 미분법 f'g+fg' 전개·정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$h(x)=5x^4+3x^2-4x$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/157-318.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f, g 의 차수와 계수를 바꿀 수 있음. 제약: 두 함수의 차수 합이 5 를 넘으면 전개량만 늘고 학습 목표는 그대로라 4~5 차에서 멈추는 것이 좋다. 상수항을 0 으로 두면 곱의 미분법 두 항 중 하나가 사라져 확인 지점이 약해진다."
    creative: "(1) h(x) 대신 h(1) 같은 함숫값을 묻기(★2 유지) (2) f 만 주고 ∫h dx=f(x)g(x), h 를 준 뒤 g 를 역으로 묻기(역방향 I-BW 추가 → ★3) (3) 우변을 몫 f/g 로 바꾸면 몫의 미분법 단원과 묶여 → ★3."
```

```yaml
- id: GN-CALC1-158-e2
  page: 158
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 다항함수 $f(x)$ 에 대하여 $\frac{d}{dx}\left\{\int xf(x)\,dx\right\}=5x^2-2x$ 일 때 $f(2)$. ⑵ $f(x)=\int \left\{\frac{d}{dx}(x^3-3x^2+2x)\right\}dx$ 이고 $f(0)=1$ 일 때 $f(1)$.
  category: "두 연산 순서 구분 → ⑴ 그대로 등식 · ⑵ +C 후 초기조건"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부정적분과 미분의 관계 — 두 연산 순서 구분(적분상수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    156-315 의 두 공식을 각각 한 문항으로 벌려 놓은 필수 예제. ⑴ 은 적분 후 미분이라 xf(x)=5x^2-2x 가 그대로 성립하고 x 로 나누면 f(x)=5x-2. ⑵ 는 미분 후 적분이라 f(x)=x^3-3x^2+2x+C 로 +C 가 반드시 붙고, f(0)=1 로 C 를 정한다. 두 소문항의 차이가 C 하나뿐이라는 것이 학습 목표이고 그 이상의 변환 단계가 없어 절차형으로 두었다(T-표기). 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "⑴ d/dx∫ 는 그대로 → xf(x)=5x^2-2x 에서 f → 대입 · ⑵ ∫(d/dx) 는 +C → f(0) 으로 C 결정 → f(1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $8$ ⑵ $1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/158-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 우변 5x^2-2x 와 묻는 지점, ⑵ 의 삼차식 계수·f(0) 값을 바꿀 수 있음. 제약: ⑴ 은 우변이 x 로 나누어떨어져야 f 가 다항함수로 남고, ⑵ 는 f(0) 조건이 있어야 C 가 결정되므로 초기조건 지점을 상수항이 드러나는 x=0 으로 두는 편이 깔끔하다."
    creative: "(1) ⑴ 에서 xf(x) 대신 (x-1)f(x) 로 바꿔 약분 지점을 옮기기(★2 유지 · 단 묻는 값이 x=1 이면 불가) (2) ⑵ 에서 f(0) 대신 f 의 최솟값을 주면 조건 동치 변환이 붙어 → ★2 상단(158-320) (3) ⑴⑵ 를 한 식에 겹쳐 ∫{d/dx ∫ f dx}dx 꼴로 주면 C 가 두 번 등장 → ★3."
```

```yaml
- id: GN-CALC1-158-319
  page: 158
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    모든 실수 $x$ 에 대하여 $\frac{d}{dx}\int (x^2+ax-1)\,dx=bx^2+2x+c$ 일 때 상수 $a$, $b$, $c$ 에 대하여 $a+b+c$.
  category: "d/dx∫f dx = f → 좌우 계수 비교"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부정적분과 미분의 관계 — 두 연산 순서 구분(적분상수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e2⑴ 의 최소판. 좌변이 적분 후 미분이라 그대로 x^2+ax-1 이 되고, 우변과 항별로 맞추면 b=1, a=2, c=-1 이 한 줄에 나온다. 좌변에 C 가 남는다고 착각해 상수항을 어긋나게 맞추는 것이 유일한 함정이다(T-표기). 통찰 0 · M_total 5 지만 미정상수가 셋이라 확인체크 출발점에서 한 단 올려 ★2.
  tier: star_2
  mechanism_primary: "좌변 = 피적분함수 그대로 → 우변과 계수 비교 → a·b·c → 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/158-319.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌변 이차식과 우변의 대응 계수를 함께 바꿀 수 있음. 제약: 좌변 최고차 계수와 우변 b 가 같아야 하고 세 상수가 모두 결정되도록 미지수를 서로 다른 항에 흩어 놓아야 한다."
    creative: "(1) 두 변의 순서를 ∫(d/dx …)dx 로 뒤집어 우변에 +C 가 필요하게 만들기(★2 유지 · 함정은 더 선명) (2) a+b+c 대신 abc 를 묻기(★2 유지) (3) 좌변을 d/dx∫(x^2+ax-1)dx, 우변을 f(x) 로 두고 f 의 최솟값을 묻기 → ★3."
```

```yaml
- id: GN-CALC1-158-320
  page: 158
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=\int \left\{\frac{d}{dx}(x^2+6x)\right\}dx$ 의 최솟값이 $-4$ 일 때 $f(2)$.
  category: "∫(d/dx f)dx = f + C → 최솟값 조건으로 C 결정 → 함숫값"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「최솟값이 -4」를 완전제곱 (x+3)^2-9+C 의 꼭짓점 y좌표 C-9=-4 라는 등식으로 옮기는 조건 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "∫(d/dx f)dx = f+C 에서 적분상수를 조건(최솟값)으로 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e2⑵ 의 변형인데 C 를 결정하는 조건이 함숫값이 아니라 최솟값이다. f(x)=x^2+6x+C 까지는 공식 한 줄이고, 그 다음 완전제곱으로 최솟값을 C-9 로 쓰는 조건 변환이 핵심이다(EQV d1). +C 를 빠뜨리면 최솟값이 -9 로 고정돼 조건 자체가 성립하지 않으므로, 이 단원의 적분상수 함정이 가장 선명하게 드러나는 문항이다. 확인체크 ★1 출발 + 통찰 1개 → ★2.
  tier: star_2
  mechanism_primary: "∫(d/dx f)dx = x^2+6x+C → 완전제곱으로 최솟값 C-9 → C-9=-4 로 C=5 → f(2)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$21$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/158-320.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "안쪽 이차식 x^2+6x 의 계수와 주어진 최솟값, 묻는 지점 x=2 를 바꿀 수 있음. 제약: 일차항 계수를 짝수로 두어야 꼭짓점이 정수에서 잡히고, 최고차 계수가 양수여야 「최솟값」 조건이 성립한다(음수로 바꾸면 최댓값으로 문구도 함께 뒤집어야 한다)."
    creative: "(1) 최솟값 대신 f(0)=k 로 조건을 바꾸면 변환이 사라져 → ★1~2(e2⑵ 골조) (2) 최고차 계수를 음수로 바꿔 최댓값 조건으로 뒤집기(T-부호 추가 · ★2 유지) (3) 안쪽을 삼차식으로 올려 극솟값 조건으로 주면 도함수 부호표가 필요해 → ★3."
```

```yaml
- id: GN-CALC1-159-e3
  page: 159
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    두 다항함수 $f$, $g$ 가 $\frac{d}{dx}\{f(x)+g(x)\}=3$, $\frac{d}{dx}\{f(x)-g(x)\}=4x$ 를 만족시키고 $f(0)=1$, $g(0)=-2$ 일 때 $f(2)+g(4)$.
  category: "합·차를 각각 적분 → 초기조건으로 C 결정 → 연립해 f, g 분리"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f, g 를 각각 구하려 하지 않고 f+g 와 f-g 자체를 하나의 함수로 보아 적분하고, 적분상수를 f(0)+g(0) · f(0)-g(0) 으로 결정하는 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "f+g, f-g 의 도함수 조건으로 두 함수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 도함수 조건을 각각 적분하면 f+g=3x+C₁, f-g=2x²+C₂ 이고 x=0 을 넣어 C₁=-1, C₂=3 을 얻는다. 여기까지가 통찰 단계(EQV d2)이고, 묻는 값이 f(2)+g(2) 가 아니라 f(2)+g(4) 로 **지점이 서로 달라** 합·차를 다시 연립해 f, g 를 개별 함수로 분리해야 한다는 점이 이 문항의 설계 포인트다. 적분 2회 + 상수 결정 2회 + 연립 + 대입으로 M_total 7, 필수 예제 ★2 출발 + depth 2 통찰 → ★3.
  tier: star_3
  mechanism_primary: "f+g · f-g 각각 부정적분 → x=0 대입으로 두 적분상수 → 연립해 f, g 분리 → f(2)+g(4)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/159-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 도함수 3 · 4x 의 계수와 f(0), g(0), 묻는 두 지점을 바꿀 수 있음. 제약: f-g 의 도함수를 짝수 계수로 두어야 연립 후 1/2 배에서 분수가 남지 않고, 묻는 두 지점이 서로 달라야 「f, g 를 따로 구해야 한다」는 요구가 유지된다(같게 두면 f+g 한 줄로 끝나 ★2)."
    creative: "(1) 묻는 값을 f(2)+g(2) 로 바꾸면 분리가 불필요해져 → ★2 (2) 조건 하나를 도함수 대신 f+g=… 완성형으로 주면 적분 횟수가 줄어 → ★2~3(159-321) (3) 차 조건을 곱 조건 (fg)' 로 바꾸면 근과 계수 관계가 필요해 → ★3 상단(159-322)."
```

```yaml
- id: GN-CALC1-159-321
  page: 159
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 다항함수 $f$, $g$ 가 $f(x)+g(x)=x^2-x-1$, $\frac{d}{dx}\{f(x)-g(x)\}=-5$ 를 만족시키고 $f(1)=0$ 일 때 $f(3)+g(-1)$.
  category: "차를 적분 → f(1) 로 C 결정 → 합·차 연립 → 서로 다른 지점 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "초기조건이 f(1) 하나뿐이라 f(1)+g(1) 을 주어진 합 식에서 먼저 읽어 g(1) 을 만들고, 그것으로 f-g 의 적분상수를 결정하는 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "f+g, f-g 의 도함수 조건으로 두 함수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    e3 와 같은 합·차 골조지만 초기조건이 f(1) 하나만 주어진 점이 다르다. f-g=-5x+C 를 쓴 뒤 상수를 정하려면 f(1)-g(1) 이 필요하고, g(1) 은 주어진 합 식에 x=1 을 넣어 f(1)+g(1)=-1 에서 얻어야 한다 — 이 한 번 돌아가는 단계가 통찰이다(EQV d2). 묻는 값도 f(3)+g(-1) 로 지점이 달라 f, g 분리가 필수다. [분류 이슈] 벤더 신호는 확인체크(★1 출발)이지만 골조·노동량이 필수 예제 e3 와 같아 ★3 으로 두었다 — 2단 차이라 기록만 한다.
  tier: star_3
  mechanism_primary: "f-g 적분 → 합 식에 x=1 대입해 g(1) → 적분상수 결정 → 합·차 연립으로 f, g → f(3)+g(-1)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/159-321.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합 식의 이차식 계수, 차의 도함수 -5, 초기조건 지점·값, 묻는 두 지점을 바꿀 수 있음. 제약: 차의 도함수 상수와 합 식 계수의 홀짝을 맞춰야 연립에서 1/2 배가 정수로 떨어지고, 초기조건 지점은 합 식에 대입해 g 값을 만들 수 있는 아무 수나 가능하다."
    creative: "(1) 초기조건을 f(1), g(1) 둘 다 주면 돌아가는 단계가 사라져 → ★2 (2) 합 식도 도함수로 주면 적분이 두 번이 되어 e3 와 같아짐(★3 유지) (3) f, g 의 차수를 지정하고 f-g 조건을 빼는 대신 f(x)g(x) 조건을 주면 → ★3 상단."
```

```yaml
- id: GN-CALC1-159-322
  page: 159
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 일차함수 $f$, $g$ 가 $\frac{d}{dx}\{f(x)+g(x)\}=2$, $\frac{d}{dx}\{f(x)g(x)\}=2x$ 를 만족시키고 $f(0)=3$, $g(0)=-3$ 일 때 $f(4)-g(3)$.
  category: "합·곱을 각각 적분 → 초기값으로 C 결정 → 합과 곱에서 두 일차함수 확정"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "적분으로 얻은 f+g=2x 와 fg=x^2-9 두 조건을 한꺼번에 써서, fg 를 (x+3)(x-3) 으로 인수분해하고 합 조건과 f(0)=3 으로 어느 쪽이 f 인지 확정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "f+g 와 (fg)' 조건으로 두 일차함수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    e3·321 의 합·차 골조를 합·곱으로 올린 단원 마지막 문항. 두 조건을 적분해 f+g=2x+C₁, fg=x²+C₂ 를 얻고 x=0 에서 C₁=0, C₂=-9 를 정하는 데까지가 앞 문항들과 같다. 그다음 fg=x²-9=(x+3)(x-3) 과 f+g=2x 를 함께 만족하는 일차함수 쌍을 찾는 단계가 새로운데, 인수분해로 바로 읽거나 f=ax+3, g=bx-3 으로 두고 a+b=2, ab=1 을 연립하는 두 길이 있고 어느 쪽이든 두 조건을 동시에 써야 한다(CON d2). [분류 이슈] 확인체크(★1 출발)이지만 조건 결합 단계가 하나 더 있어 ★3 으로 두었다 — 2단 차이라 기록만 한다.
  tier: star_3
  mechanism_primary: "합·곱을 각각 적분 → x=0 으로 두 적분상수 → fg=x²-9 인수분해와 f+g=2x 결합 → f(0)=3 으로 f, g 확정 → f(4)-g(3)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/159-322.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(f+g)' 의 값 2, (fg)' 의 2x, f(0)·g(0) 과 묻는 두 지점을 바꿀 수 있음. 제약: fg 가 일차식 둘의 곱으로 인수분해돼야 하므로 적분 결과가 x²-(상수²) 꼴이나 판별식이 완전제곱이 되는 이차식이어야 하고, f(0)·g(0) 의 곱이 그 이차식의 상수항과 반드시 일치해야 조건이 모순되지 않는다."
    creative: "(1) 「두 일차함수」 조건을 빼면 차수 분기가 생겨 케이스 판정이 붙고 → ★4 (2) f(0), g(0) 대신 f(1)+g(1) 만 주면 어느 쪽이 f 인지 가리는 검증 단계가 필요해 I-VF 추가 → ★4 (3) 곱 조건을 몫 (f/g)' 로 바꾸면 분모 조건까지 따져야 해 → ★4."
```

## 표본 판정 요약 (14문)

- ★ 분포: ★1 4 · ★2 7 · ★3 3 · ★4 0 · ★5 0
- 통찰형 6(157-e1 · 157-317 · 158-320 · 159-e3 · 159-321 · 159-322) · 절차형 8 · premium 0
- 통찰 유형 분포: I-EQV 5(d1 3 · d2 2) · I-CON 1(d2) — I-XU·I-SC·I-VF·I-SYM 은 이 범위에 없음(그래서 ★4 이상 없음)
- type_hint 상위: 「부정적분의 정의 — 양변 미분 후 계수 비교」 2 · 「부정적분과 미분의 관계 — 두 연산 순서 구분」 3 · 「f+g, f-g 의 도함수 조건으로 두 함수 구하기」 2 · 「∫f(x)dx 가 주어졌을 때 f(x) 구하기」 1 · 「적분상수를 조건(최솟값)으로 결정」 1
- 구역별: 개념원리 익히기 4문(전부 ★1) · 필수 예제 3문(★2 2 · ★3 1) · 확인체크 7문(★2 5 · ★3 2)
- 그림: 0문(이 범위에 figure 있는 문항 없음)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC1-159-321 | 벤더 신호는 확인체크(★1 출발)이나 골조·노동량이 필수 예제 e3 와 같음 → ★3 으로 두고 2단 차이 기록 | ★3 |
| GN-CALC1-159-322 | 같은 확인체크지만 합·곱 조건 결합 단계가 하나 더 있어 ★3. 「두 일차함수」라는 단서가 없었다면 ★4 후보 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 type_hint 는 실질적으로 **세 갈래**뿐이다 — (가) 부정적분의 정의(양변 미분 + 계수 비교), (나) 부정적분과 미분의 관계(두 연산 순서·적분상수), (다) 합·차·곱 조건으로 두 함수 구하기.
- 따로 세워야 할 유형: **(다) 결합 조건형**(159-e3 · 159-321 · 159-322). 합·차 연립과 합·곱(근과 계수 관계)은 요구 도구가 달라 카탈로그에서도 두 하위 유형으로 나누는 편이 낫다. base ★ 는 각각 3 · 3(단서 없으면 4) 후보.
- 통합해도 될 유형: (가) 안의 「미정상수 계수 비교」(157-e1⑴ · 157-316 · 158-319)는 조건이 상수냐 함수냐만 다를 뿐 골조가 같아 한 유형으로 묶어도 된다. 「∫(일차식)f(x)dx → f」(157-e1⑵ · 157-317)는 약분 단계가 추가되므로 같은 유형의 상위 난이도 슬롯으로 두는 것이 좋다.
- (나) 는 156-315 · 158-e2 · 158-319 · 158-320 이 모두 같은 두 공식의 변주라 한 유형 + 「적분상수를 무엇으로 결정하는가」(함숫값 / 최솟값 / 없음)라는 파라미터로 다루면 충분하다.
