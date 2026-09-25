---
name: mechanism-데이터-GN-CALC2-15
description: 개념원리 미적분Ⅱ 15 함수의 몫의 미분법(1/1 · 129~131쪽) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ · 전사본 latex-bank/gn-calc2
  section: 15 함수의 몫의 미분법
  unit_code: CALC2-15
  part: "1/1"
  extract_range: "129~131쪽 · 129-e1~131-261"
  total_problems: 9
  unit_total: 9
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (이 범위에는 그림 문항 없음)
---

# 개념원리 미적분Ⅱ · 15 함수의 몫의 미분법 (1/1) 정독 데이터 (v1.0)

이 파일은 129~131쪽 「필수·발전 예제」 구역 9문항 전수를 다룬다. 구역은 하나이고, 안쪽은 필수 예제 3개(`129-e1` 몫의 미분법 · `130-e2` $y=x^n$($n$은 정수)의 도함수 · `131-e3` 삼각함수의 도함수)와 각 예제에 딸린 확인체크 6개가 번갈아 배치된 구조다. 벤더 난이도 신호는 구역과 태그뿐이며(level 필드 없음 · 기출 태그 없음), 문항 성격은 전부 「주어진 함수를 미분하라」 또는 「미분한 뒤 한 점의 값을 구하라」인 계산 숙달형이다.

★ 출발점은 태그로 잡았다. 필수 예제는 ★2 에서 출발했고, 확인체크는 원 규칙의 ★1(개념 확인)이 아니라 **바로 앞 필수 예제의 유제**라는 배치 사실을 근거로 ★2 에서 출발시킨 뒤 M_total·통찰로 ±1 조정했다. 이 읽기 차이 때문에 원 규칙(★1 출발) 기준으로 2단 어긋나는 `130-259` · `131-261` 은 파일 끝 분류 이슈 표에 기록해 두었다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 이 범위에는 그림 문항이 없다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CALC2-129-e1
  page: 129
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 몫 꼴 함수 세 개를 미분한다: $y=\dfrac{1}{3x+1}$ · $y=\dfrac{2-3x}{x^2+1}$ · $y=\dfrac{e^x-1}{e^x+1}$.
  category: "몫의 미분법 공식 적용 → 분자 전개·정리"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 몫의 미분법 기본 적용(유리식·지수식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    몫의 미분법을 처음 쓰는 필수 예제. ⑴은 분자가 상수라 $-g'/g^2$ 한 줄, ⑵는 분자 전개·동류항 정리, ⑶은 $(e^x)'=e^x$ 결합이 추가된다.
    세 소문항 모두 공식 대입 → 전개 → 정리의 같은 골조이고 분기·역추적이 없어 통찰 0.
    M_total 5 로 −1 후보이지만 소문항 3개·함수 종류 2종(유리·지수)의 실제 작업량을 인정해 필수 예제 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "$(f/g)'=(f'g-fg')/g^2$ 대입 → 분자만 전개·정리 → 분모는 $g^2$ 그대로 둔다"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $y''=-\dfrac{3}{(3x+1)^2}$ ⑵ $y''=\dfrac{3x^2-4x-3}{(x^2+1)^2}$ ⑶ $y''=\dfrac{2e^x}{(e^x+1)^2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/129-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴의 일차식 계수(3x+1 → 2x-5), ⑵의 분자 일차식·분모 이차식 계수, ⑶의 지수 밑($e^x$ → $2^x$ · 그때 분자에 $\\ln 2$ 가 남음)을 바꿀 수 있다. 제약: 분모가 0이 되지 않아야 하고, ⑵는 분자 전개 뒤 계수가 정수로 떨어지게 이차항 계수를 잡는다."
    creative: "(1) 분모를 $(3x+1)^2$ 처럼 제곱으로 올려 합성함수 미분과 겹치기(★2 유지) (2) ⑶을 $\\dfrac{e^x-e^{-x}}{e^x+e^{-x}}$ 로 바꿔 약분·대칭 정리를 요구하면 I-RT 1개 추가 ★3 (3) 미분 결과가 항상 양수임을 보이라고 물으면 부호 판정이 붙어 ★3."
```

```yaml
- id: GN-CALC2-129-256
  page: 129
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 몫 꼴 함수 네 개를 미분한다: $\dfrac{2}{x^2+3x+1}$ · $\dfrac{x^3-2x+3}{x+1}$ · $\dfrac{3^x}{x+2}$ · $\dfrac{x}{\ln x}$.
  category: "몫의 미분법 + 지수·로그 도함수 결합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 몫의 미분법 기본 적용(유리식·지수식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 필수 예제의 유제이나 소문항이 4개이고 ⑶ $(3^x)'=3^x\ln 3$, ⑷ $(\ln x)'=1/x$ 가 몫의 미분법과 동시에 걸린다.
    ⑶은 분자에서 $3^x$ 를 공통인수로 묶어야 답 모양이 나오고, ⑷는 정의역 $x>0,\ x\ne1$ 의 T-범위 함정이 붙어 $M_t=1$.
    골조는 여전히 공식 대입 한 종류라 통찰 0 · M_total 6 → 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "각 항의 도함수($3^x\\ln 3$ · $1/x$)를 먼저 확보 → 몫의 미분법 대입 → 분자에서 공통인수 묶기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $y''=-\dfrac{2(2x+3)}{(x^2+3x+1)^2}$ ⑵ $y''=\dfrac{2x^3+3x^2-5}{(x+1)^2}$ ⑶ $y''=\dfrac{3^x(x\ln 3+2\ln 3-1)}{(x+2)^2}$ ⑷ $y''=\dfrac{\ln x-1}{(\ln x)^2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/129-256.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 이차식 계수, ⑵의 삼차 분자 계수, ⑶의 밑($3^x$ → $2^x$·$5^x$)과 분모 일차식 상수를 바꿀 수 있다. 제약: ⑵는 분자 전개 뒤 $(x+1)^2$ 분모와 약분되지 않도록 상수항을 잡고, ⑷ 계열은 정의역($x>0$, 분모 $\\ne0$)을 깨지 않는 조합만 쓴다."
    creative: "(1) ⑵를 다항식 나눗셈으로 먼저 정리해 몫의 미분법 없이 풀 수 있게 만들면 전략 갈래가 생겨 I-SC 1개 ★3 (2) ⑶을 $\\dfrac{x+2}{3^x}$ 로 뒤집어 분모 지수 처리를 묻기(★2 유지) (3) ⑷에서 $y'=0$ 이 되는 $x$ 를 묻는 문제로 바꾸면 역방향 요구가 붙어 ★3."
```

```yaml
- id: GN-CALC2-129-257
  page: 129
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=\dfrac{x^3-x^2+1}{x^2-1}$ 일 때 $f'(\sqrt{2})$ 의 값.
  category: "몫의 미분법 → 무리수 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "몫의 미분법 → 특정 값에서의 미분계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    도함수를 공식대로 구한 뒤 $x=\sqrt{2}$ 를 넣는 두 단계. 전개하지 않고 $x^2=2$ 를 이용해 대입하면 분모가 1이 되어 계산이 짧아지지만, 전개 후 대입해도 같은 값에 도달하므로 통찰로 카운트하지 않았다.
    무리수 대입에서 부호·유리화 실수가 나기 쉬워 $M_t=1$.
    통찰 0 · M_total 6 → 확인체크(유제) 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "몫의 미분법으로 $f'$ 를 분수 한 덩어리로 두고 → $x=\\sqrt{2}$ 를 $x^2=2$ 로 치환 대입 → 분모 $(x^2-1)^2=1$"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/129-257.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 삼차식 계수와 대입값($\\sqrt{2}$ → $\\sqrt{3}$ · $\\sqrt{5}$)을 함께 바꾼다. 제약: 분모 $x^2-k$ 와 대입값 $\\sqrt{k}$ 를 맞춰 분모가 깔끔한 수가 되게 하고, 대입값이 정의역에서 빠지지 않아야 한다(분모 $\\ne0$)."
    creative: "(1) $f'(\\sqrt{2})$ 대신 $f'(a)=0$ 인 $a$ 를 묻기(역방향 요구 · ★3) (2) 분자를 분모로 나눠 $f(x)=x-1+\\dfrac{x}{x^2-1}$ 꼴로 정리한 뒤 미분하게 하면 전략 갈래가 생겨 I-SC 1개 ★3 (3) 접선의 기울기·접선의 방정식으로 물으면 단원 결합이 붙어 ★3."
```

```yaml
- id: GN-CALC2-130-e2
  page: 130
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 음의 정수 지수가 나오는 함수를 미분한다: $y=x^{-4}$ · $y=\dfrac{2x^5-3x^3+1}{x^3}$ · $y=\dfrac{x^2+3x-2}{x^4}$.
  category: "$y=x^n$($n$은 정수)의 도함수 → 항별 분리 후 적용"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수 $y=x^n$ ($n$은 정수)의 도함수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    몫의 미분법을 그대로 쓰지 않고 분모의 단항식으로 항별로 나눠 $x^{-n}$ 꼴로 만든 뒤 $nx^{n-1}$ 을 적용하는 것이 이 예제의 핵심 절차다.
    다만 어느 도구를 쓸지는 구역 제목이 이미 지정하므로 전략 선택으로 보지 않았다(통찰 0).
    음의 지수에서 지수를 1 줄일 때 부호·차수가 엇갈리는 T-부호 함정이 있어 $M_t=1$. M_total 6 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "분모 단항식으로 항별 분리 → 각 항을 $x^{정수}$ 꼴로 → $(x^n)'=nx^{n-1}$ 을 항별 적용"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $y''=-4x^{-5}$ ⑵ $y''=4x-\dfrac{3}{x^4}$ ⑶ $y''=-\dfrac{2}{x^3}-\dfrac{9}{x^4}+\dfrac{8}{x^5}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/130-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴의 지수($-4$ → $-6$), ⑵⑶ 분자 계수와 분모 차수($x^3$ → $x^2$·$x^5$)를 바꿀 수 있다. 제약: 분리 후 각 항의 지수가 정수로 남아야 하고, 분자 차수 − 분모 차수가 0이 되는 상수항이 생기면 그 항의 도함수가 0이 되는 점을 의도한 경우에만 쓴다."
    creative: "(1) 분리하지 않고 몫의 미분법으로도 풀리게 분자를 인수분해 불가 다항식으로 두어 두 갈래를 비교시키면 I-SC 1개 ★3 (2) $y'$ 가 0이 되는 $x$ 나 $y'<0$ 인 구간을 묻기(★3) (3) $x^{-n}$ 을 $\\dfrac{1}{x^n}$ 로만 제시해 표기 전환을 요구하면 ★2 유지."
```

```yaml
- id: GN-CALC2-130-258
  page: 130
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 음의 정수 지수 함수를 미분한다: $y=3x^{-2}$ · $y=3x^2-\dfrac{2}{x^3}$ · $y=\dfrac{x^3-2x^2+3}{x^5}$.
  category: "$y=x^n$($n$은 정수)의 도함수 → 항별 적용"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수 $y=x^n$ ($n$은 정수)의 도함수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    앞 예제의 직후 유제이고 세 소문항 모두 항별로 $x^{-n}$ 으로 고쳐 공식 한 번씩 쓰면 끝난다. 전개·약분 같은 추가 처리가 없어 $M_k=1$.
    부호 실수 가능성만 남아 $M_t=1$, 통찰 0 · M_total 5 → v3.8 −1 규칙(절차형·저 노동)을 적용해 ★2 출발점에서 ★1 로 내렸다.
    이 범위에서 가장 가벼운 문항이다.
  tier: star_1
  mechanism_primary: "각 항을 $ax^{정수}$ 로 고친 뒤 $(x^n)'=nx^{n-1}$ 항별 적용 → 음의 지수를 분수 꼴로 복원"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $y''=-6x^{-3}$ ⑵ $y''=6x+\dfrac{6}{x^4}$ ⑶ $y''=-\dfrac{2}{x^3}+\dfrac{6}{x^4}-\dfrac{15}{x^6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/130-258.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(3·2)와 지수($-2$·$-3$), ⑶의 분모 차수 $x^5$ 를 바꿀 수 있다. 제약: 분리 후 지수가 정수로 유지되어야 하고, 답의 분수 항이 셋을 넘지 않게 분자 항 수를 3개 이하로 둔다."
    creative: "(1) $f'(1)$ 이나 $f'(-1)$ 값을 묻는 수치형으로 바꾸기(★2) (2) 분자를 $x^5$ 보다 높은 차수로 만들어 양의 지수 항과 음의 지수 항이 섞이게 하기(★2) (3) 항 수를 $n$ 개로 일반화하면 패턴 발견이 필요해져 ★3(130-259 유형)."
```

```yaml
- id: GN-CALC2-130-259
  page: 130
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=\dfrac{1}{x}+\dfrac{2}{x^2}+\dfrac{3}{x^3}+\cdots+\dfrac{9}{x^9}$ 일 때 $f'(1)$ 의 값.
  category: "일반항 미분 → $x=1$ 대입 → 제곱수 합"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "9개 항을 일반항 $kx^{-k}$ 로 보고 미분하면 $x=1$ 에서 각 항이 $-k^2$ 이 된다는 규칙을 발견해 제곱수 합으로 묶음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "$x^{-k}$ 항의 합의 미분계수(일반항 + 제곱수 합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    아홉 항을 하나씩 미분해 대입해도 풀리지만, 일반항 $kx^{-k}$ 의 도함수가 $-k^2x^{-k-1}$ 이고 $x=1$ 에서 $-k^2$ 이라는 규칙을 잡으면 $-\sum_{k=1}^{9}k^2$ 한 줄로 끝난다.
    문제에 규칙이 명시돼 있지 않고 학생이 스스로 일반항을 세워야 해 I-PD d2, 표현이 $\cdots$ 로 주어져 $M_a=2$.
    확인체크 태그지만 통찰 1개(d2)와 제곱수 합 결합을 인정해 출발점 ★2 에서 +1 한 ★3. [분류 이슈] 원 규칙의 확인체크 ★1 출발 기준으로는 2단 차이.
  tier: star_3
  mechanism_primary: "$f(x)=\\sum_{k=1}^{9}kx^{-k}$ 로 일반항화 → 항별 미분 $-k^2x^{-k-1}$ → $x=1$ 대입 → $-\\sum k^2$ 공식"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-285$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/130-259.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항의 개수(9 → 6·10·$n$)와 대입점($x=1$ → $x=-1$)을 바꿀 수 있다. 제약: $x=1$ 이 아니면 $x^{-k-1}$ 이 남아 제곱수 합으로 묶이지 않으므로, 다른 대입점을 쓰려면 $x=-1$ 처럼 부호만 갈리는 값으로 한정하고 그때는 홀짝 부호 분리가 추가된다."
    creative: "(1) 분자 계수를 $k$ 대신 $k^2$ 로 두어 $-\\sum k^3$ 이 필요하게 만들기(★3 유지 · 세제곱 합 공식) (2) 항 수를 $n$ 으로 일반화해 $f'(1)$ 을 $n$ 의 식으로 답하게 하면 $M_a$ 상승 ★4 (3) $f'(1)$ 이 특정 값이 되는 항 수 $n$ 을 묻는 역방향으로 바꾸면 I-BW 추가 ★4 (4) 대입점을 $x=1$ 로 고정하는 문구를 빼면 골조가 무너져 난도만 올라가므로 피한다."
```

```yaml
- id: GN-CALC2-131-e3
  page: 131
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑷ 삼각함수가 든 함수를 미분한다: $y=x\cot x$ · $y=x^2\tan x$ · $y=\sec x\csc x$ · $y=\dfrac{\cos x}{1+\tan x}$.
  category: "$\\tan\\cot\\sec\\csc$ 도함수 + 곱·몫의 미분법"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 도함수(곱·몫의 미분법 결합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $(\tan x)'=\sec^2x$, $(\cot x)'=-\csc^2x$, $(\sec x)'=\sec x\tan x$, $(\csc x)'=-\csc x\cot x$ 네 공식을 곱·몫의 미분법에 얹는 표준 절차.
    ⑶은 곱의 미분 뒤 $\sec x\csc x(\tan x-\cot x)$ 를 $\sec^2x-\csc^2x$ 로 정리하는 삼각 항등 정리가, ⑷는 분자를 $\cos x$ 로 통분해 정리하는 처리가 붙어 $M_k=2$·$M_t=1$(정의역·표기).
    공식 적용 골조가 하나뿐이라 통찰 0 · 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "네 삼각함수 도함수 공식 확보 → 곱·몫의 미분법 대입 → $\\sin\\cos$ 로 통분·항등식 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $y''=\cot x-x\csc^2 x$ ⑵ $y''=2x\tan x+x^2\sec^2 x$ ⑶ $y''=\sec^2 x-\csc^2 x$ ⑷ $y''=-\dfrac{\sin x\cos x+\sin^2 x+1}{\cos x(1+\tan x)^2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/131-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴⑵의 다항식 인자 차수($x$ → $x^2$·$x^3$)와 계수만 자유롭게 바꿀 수 있다. 제약: 삼각함수 쪽은 수치가 아니라 함수 조합이므로 $\\tan\\leftrightarrow\\cot$, $\\sec\\leftrightarrow\\csc$ 교체로만 변형하고, 교체하면 도함수 부호가 뒤집히는 점을 답에 반영한다."
    creative: "(1) ⑶을 $\\dfrac{1}{\\sin x\\cos x}$ 로 제시해 정리 후 미분하게 하면 I-RT 1개 ★3 (2) ⑷의 분모를 $1+\\cot x$ 로 바꿔 대칭 구조를 만들기(★2 유지) (3) 특정 각에서의 미분계수를 묻는 형태로 바꾸면 131-261 유형이 되어 ★3."
```

```yaml
- id: GN-CALC2-131-260
  page: 131
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 삼각함수가 든 함수를 미분한다: $y=\sec x-\sqrt{5}\csc x$ · $y=5e^x\tan x$ · $y=\sec x\tan x$ · $y=\dfrac{1-\tan x}{1+\tan x}$.
  category: "삼각함수 도함수 + 곱·몫의 미분법"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 도함수(곱·몫의 미분법 결합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 예제의 유제. ⑵는 지수함수와의 곱, ⑶은 $\sec x$ 를 공통인수로 묶어 $\sec x(\tan^2x+\sec^2x)$ 로 정리하는 단계, ⑷는 분자·분모에 $\sec^2x$ 가 남아 약분되는 몫의 미분이 붙는다.
    네 소문항 모두 공식 대입 → 인수 묶기의 같은 골조이고 새로운 착안이 없어 통찰 0.
    부호($\csc$·$\cot$ 도함수의 음부호) 함정으로 $M_t=1$ · M_total 6 → 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "삼각함수 도함수 공식 대입 → 공통인수($\\sec x$·$e^x$·$\\sec^2x$)로 묶기 → 약분·정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $y''=\sec x\tan x+\sqrt{5}\csc x\cot x$ ⑵ $y''=5e^x(\tan x+\sec^2 x)$ ⑶ $y''=\sec x(\tan^2 x+\sec^2 x)$ ⑷ $y''=-\dfrac{2\sec^2 x}{(1+\tan x)^2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/131-260.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴의 계수 $\\sqrt{5}$ 와 ⑵의 계수 5 는 도함수에 그대로 따라가므로 임의의 상수로 교체 가능하다. 제약: 무리수 계수를 쓰면 답에도 그대로 남으므로 답 모양이 지저분해지지 않는 값만 쓴다."
    creative: "(1) ⑷를 $\\dfrac{1+\\tan x}{1-\\tan x}$ 로 뒤집어 부호 변화를 확인시키기(★2 유지) (2) ⑷가 $\\tan(\\frac{\\pi}{4}-x)$ 임을 이용해 합성함수로 풀게 하면 I-RT 1개 ★3 (3) ⑵를 $\\dfrac{e^x}{\\tan x}$ 로 바꿔 몫 꼴로 만들기(★2 유지)."
```

```yaml
- id: GN-CALC2-131-261
  page: 131
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=\dfrac{1+\sec x}{\tan x}$ 일 때 $f'\left(\dfrac{\pi}{3}\right)$ 의 값.
  category: "$\\sec\\tan$ 정리 → 약분 → 특수각 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$\\sec x$·$\\tan x$ 를 $\\sin x$·$\\cos x$ 로 옮겨 $f(x)=\\dfrac{1+\\cos x}{\\sin x}$ 로 만들면 미분 후 $1-\\cos^2x$ 와 약분되어 $f'=-\\dfrac{1}{1-\\cos x}$ 한 줄로 줄어듦"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각함수 몫의 미분계수(sec·tan → sin·cos 정리 후 약분)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $\sec$·$\tan$ 그대로 몫의 미분법을 써서 $x=\frac{\pi}{3}$ 의 값을 대입해도 풀리지만, $\sin$·$\cos$ 로 표현을 옮기면 분자 $-(1+\cos x)$ 와 분모 $1-\cos^2x$ 가 약분돼 $-\dfrac{1}{1-\cos x}$ 로 정리된다.
    이 표현 전환이 계산량을 크게 가르므로 I-RT d2 로 1개 카운트했고, 특수각 값과 정의역 제약이 붙어 $M_t=1$.
    통찰 1개(d2) + 특수각 대입으로 출발점 ★2 에서 +1 한 ★3. [분류 이슈] 원 규칙의 확인체크 ★1 출발 기준으로는 2단 차이.
  tier: star_3
  mechanism_primary: "$\\sec\\tan$ → $\\sin\\cos$ 로 표현 전환 → 미분 후 약분해 $-\\dfrac{1}{1-\\cos x}$ → $x=\\frac{\\pi}{3}$ 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/131-261.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대입 각을 $\\frac{\\pi}{3}$ → $\\frac{\\pi}{4}$·$\\frac{\\pi}{6}$ 로 바꿀 수 있다. 제약: 정리된 식이 $-\\dfrac{1}{1-\\cos x}$ 이므로 $\\cos$ 값이 유리수인 특수각($\\frac{\\pi}{3}$)이어야 답이 정수로 떨어지고, $\\frac{\\pi}{4}$·$\\frac{\\pi}{6}$ 를 쓰면 답에 무리수가 남는다. $\\tan x=0$ 인 각은 정의역에서 제외."
    creative: "(1) 분자를 $1-\\sec x$ 로 바꾸면 $\\dfrac{\\cos x-1}{\\sin x}$ 로 정리되어 부호만 달라진 같은 골조(★3 유지) (2) $f(x)$ 를 간단히 한 뒤 $f'(x)<0$ 임을 보이라고 하면 부호 판정이 추가돼 ★4 (3) 정리 없이 $\\sec$·$\\tan$ 도함수만으로 풀게 유도하는 소문항을 함께 두면 두 갈래 비교가 되어 I-SC 추가 ★4 (4) 표현 전환을 문제에서 미리 해 주면 통찰이 사라져 ★2 로 내려간다."
```

## 표본 판정 요약 (9문)

- ★ 분포: ★1 1 · ★2 6 · ★3 2 · ★4 0 · ★5 0
- 통찰형 2(`130-259` I-PD d2 · `131-261` I-RT d2) · 절차형 7 · premium 0
- type_hint 상위: 「함수의 몫의 미분법 기본 적용(유리식·지수식)」 2 · 「함수 $y=x^n$ ($n$은 정수)의 도함수」 2 · 「삼각함수의 도함수(곱·몫의 미분법 결합)」 2 · 「몫의 미분법 → 특정 값에서의 미분계수」 1 · 「$x^{-k}$ 항의 합의 미분계수(일반항 + 제곱수 합)」 1 (그 밖에 「삼각함수 몫의 미분계수(sec·tan → sin·cos 정리 후 약분)」 1)
- 그림: 0문 (이 범위에는 그림 문항 없음)
- 대상층: 하위권 1 · 중하위권 6 · 중위권 1 · 중상위권 1

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC2-130-259 | 벤더 태그는 확인체크(원 규칙 ★1 출발)이나 일반항 발견 + 제곱수 합 결합으로 I-PD d2 → ★3. 확인체크를 「필수 예제의 유제(★2 출발)」로 읽어 +1 한 결과이며, 원 규칙 기준으로는 2단 차이 | ★2 / ★3 |
| GN-CALC2-131-261 | 같은 확인체크 태그이나 sec·tan → sin·cos 표현 전환으로 계산량이 갈려 I-RT d2 → ★3. 전환 없이도 풀리므로 통찰을 0으로 보면 ★2 | ★2 / ★3 |
| GN-CALC2-130-258 | 필수 예제(★2)의 직후 유제이지만 M_total 5·절차형이라 v3.8 −1 규칙으로 ★1 로 내림. 유제를 예제와 같은 층으로 두는 관례를 쓰면 ★2 | ★1 / ★2 |
| GN-CALC2-130-e2 | 「몫의 미분법 대신 항별 분리」가 I-SC(전략 선택)인지 논란. 구역 제목이 도구를 지정하므로 통찰 0 으로 처리했으나, 구역 정보를 지운 변형에서는 I-SC 1개가 살아난다 | ★2 / ★3 |

카탈로그 차원 메모: 이 범위에서 반복된 type_hint 는 세 축(「몫의 미분법 기본 적용」 · 「$y=x^n$($n$은 정수)의 도함수」 · 「삼각함수의 도함수」)이고, 각 축마다 「예제 + 확인체크 유제 + 미분계수 값 구하기」 3문 세트가 그대로 반복된다. 카탈로그를 만들 때는 (1) 「몫의 미분법 계산」과 「$x^n$($n$ 정수) 항별 분리」는 도구가 달라 따로 세우고, (2) 「삼각함수의 도함수」는 곱의 미분법과 몫의 미분법 사례가 한 유형 안에 섞여 있으므로 하위 구분(곱 결합 / 몫 결합)을 두는 편이 낫다. 반대로 「몫의 미분법 기본 적용(예제)」과 그 확인체크 유제는 골조가 완전히 같아 **한 유형으로 통합**해도 된다. 「특정 값에서의 미분계수」(`129-257` · `130-259` · `131-261`)는 미분 도구가 아니라 대입·정리 방식으로 난도가 갈리므로 별도 유형으로 세우고 base ★ 를 2~3 으로 나누는 것을 권한다.
