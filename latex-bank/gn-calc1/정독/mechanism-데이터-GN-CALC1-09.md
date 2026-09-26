---
name: mechanism-데이터-GN-CALC1-09
description: 개념원리 미적분Ⅰ 09 도함수(1/1 · 75~84쪽 41문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅰ · 전사본 latex-bank/gn-calc1
  section: 09 도함수
  unit_code: GN-CALC1-09
  part: "1/1"
  extract_range: "75~84쪽 · 75-123~84-156"
  total_problems: 41
  unit_total: 41
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc1/items/<id>.tex
  image_source: latex-bank/gn-calc1/figures/ (이 범위에는 그림 문항 없음)
---

# 개념원리 미적분Ⅰ · 09 도함수 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅰ 09단원 「도함수」 75~84쪽의 41문항 전수를 담는다. 구역은 개념원리 익히기 3문, 필수·발전 예제(필수 예제 7 + 딸린 확인체크 14) 21문, 연습문제 STEP 1 6문, STEP 2 7문, 실력 UP 4문이다. 이 범위에는 그림이 있는 문항이 없다.

벤더 난이도 신호는 개념원리 고등의 구역 구조를 따른다. 「개념원리 익히기」는 공식을 처음 적용하는 개념 확인(★1 출발), 「필수 예제」와 그에 딸린 「확인체크」 유제는 예제 골조의 표준 적용(★2 출발), 연습문제는 STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 출발이다. 기출 태그(교육청·평가원·수능)는 통찰이 실제로 있을 때만 +1 을 인정했다. 출발점에서의 조정은 다음 한 가지 규칙으로 통일했다. **+1** 은 통찰 2개 이상, 또는 depth 3 통찰이 있거나, 통찰 1개이면서 M_total ≥ 7 인 경우. **−1** 은 통찰 0 이면서 M_total ≤ 3 인 경우. **★5** 는 통찰 3개 이상이면서 SC·VF·SYM·XU 중 하나가 핵심 단계에 있을 때만 준다(이 규칙 때문에 통찰 3개인 84-153 은 ★4 에 머문다). 다항식의 나눗셈(공통수학1)과 미분을 함께 쓰는 문항은 I-XU 로 잡았고, 이 판정의 경계는 파일 끝 「분류 이슈 목록」에 기록했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(유형 코드와 depth) · `variation_notes`(바꿔도 되는 수와 제약, 통찰 골조를 유지한 창의 변형과 ★ 가 변하는 지점)를 채웠다. answer 는 전사본 값을 그대로 옮겼으며 이 범위에서 전사 답과 골조가 어긋나는 문항은 발견되지 않았다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CALC1-75-123
  page: 75
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "익히기"
  summary: |
    ⑴~⑶ 도함수의 정의를 이용하여 $f(x)=3$, $f(x)=x-4$, $f(x)=2x^2+x$ 의 도함수를 구하기.
  category: "도함수의 정의 → 차분몫 정리 → h→0"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도함수의 정의로 도함수 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    정의식에 대입 → 전개 → h 로 약분 → 극한. 세 소문항이 모두 같은 골조의 반복이고 상수·일차·이차로 차수만 올라간다.
    익히기 구역 출발점 ★1 · 통찰 없음 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "정의식에 대입 → f(x+h)-f(x) 전개 → h 로 약분 → h→0 극한"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑴ $f'(x)=0$ ⑵ $f'(x)=1$ ⑶ $f'(x)=4x+1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/75-123.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항·일차항 계수와 이차항 계수를 자유롭게 바꿀 수 있다. 제약은 정의식 전개 뒤 분자가 h 로 약분돼야 하므로 다항식만 쓰고, 소문항을 상수→일차→이차 순으로 배치해 난이도 계단을 유지하는 것."
    creative: "(1) 삼차 $f(x)=x^3$ 를 넣어 전개 부담만 올리기(★1 유지) (2) 정의로 $f'(a)$ 한 값만 구하게 하기(★1) (3) 정의로 구한 결과와 미분 공식의 결과를 비교해 공식을 유도시키면 ★2."
```

```yaml
- id: GN-CALC1-75-124
  page: 75
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "익히기"
  summary: |
    ⑴~⑹ $y=x^5$, $y=10$, $y=3x^8$, $y=-x^6$, $y=5x^2+1$, $y=4x^3-\dfrac{1}{2}x^2+3$ 을 미분하기.
  category: "x^n 미분 공식 → 실수배·합·차 법칙 적용"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항함수의 미분법 기본 공식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $(x^n)'=nx^{n-1}$, 상수함수의 도함수 0, 실수배·합·차 법칙을 한 줄씩 적용하는 공식 확인이다.
    익히기 구역 ★1 출발 · 통찰 0 · M_total 3 → 하한이라 ★1.
  tier: star_1
  mechanism_primary: "각 항에 x^n 미분 공식 적용 → 실수배·합·차로 합치기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑴ $y'=5x^4$ ⑵ $y'=0$ ⑶ $y'=24x^7$ ⑷ $y'=-6x^5$ ⑸ $y'=10x$ ⑹ $y'=12x^2-x$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/75-124.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수와 계수는 무엇으로 바꿔도 된다(분수 계수 한 개는 남겨 두면 약분 감각을 점검할 수 있다). 제약은 자연수 지수 다항식 범위를 벗어나지 않는 것."
    creative: "(1) 도함수 값 $f'(1)$ 까지 묻기(★1) (2) $y'$ 가 같은 두 함수를 찾게 하면 상수항의 역할을 묻는 ★2 (3) 도함수가 주어질 때 원함수의 형태를 추측하게 하면 역방향 사고가 들어가 ★3."
```

```yaml
- id: GN-CALC1-75-125
  page: 75
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "익히기"
  summary: |
    ⑴~⑹ $y=(x+5)(2x-3)$, $y=(x^3+2)(x^2-1)$, $y=x(x+2)(x-1)$, $y=(x-3)(2x+1)(3x-2)$, $y=(-3x^2+2)^2$, $y=(2x-1)^3$ 을 미분하기.
  category: "곱의 미분법 → 두 함수·세 함수·거듭제곱 꼴로 확장"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱의 미분법과 {g(x)}^n 의 미분"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 함수의 곱 → 세 함수의 곱 → 거듭제곱 꼴로 공식을 넓혀 가며 그대로 적용한다. 판단할 지점이 없고 전개·정리 부담만 늘어난다.
    익히기 구역 ★1 출발 · 통찰 0 · M_total 5 → 유지. [분류 이슈] 계산량만 보면 ★2 급이라 라벨과 체감이 1단 어긋난다.
  tier: star_1
  mechanism_primary: "곱의 미분법 공식 선택(2항·3항·거듭제곱) → 각 항 미분 → 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑴ $y'=4x+7$ ⑵ $y'=5x^4-3x^2+4x$ ⑶ $y'=3x^2+2x-2$ ⑷ $y'=18x^2-38x+1$ ⑸ $y'=-12x(-3x^2+2)$ ⑹ $y'=6(2x-1)^2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/75-125.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 인수의 계수·상수항과 거듭제곱 지수를 바꿀 수 있다. 제약은 ⑸⑹ 처럼 거듭제곱 꼴을 남겨 두어 $n\\{g(x)\\}^{n-1}g'(x)$ 를 쓰게 하고, 답이 전개형인지 인수형인지 답지 표기와 맞추는 것."
    creative: "(1) 세 인수 중 하나를 문자로 두면 미정계수 문항이 되어 ★2 (2) 전개 후 미분과 곱의 미분법을 비교하게 하면 전략 선택이 들어가 ★2~3 (3) $\\{g(x)\\}^n$ 에서 $g$ 를 미지 함수로 두면 추상도가 올라 ★3."
```

### 필수·발전 예제

```yaml
- id: GN-CALC1-76-e8
  page: 76
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $f(x)=(x+2)(x^2-3x+4)$ 일 때 $f'(1)$ 의 값.
  category: "곱의 미분법 → 도함수 → x=1 대입"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱의 미분법으로 미분계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전개하지 않고 곱의 미분법으로 $f'(x)$ 를 만든 뒤 $x=1$ 을 대입하면 한 줄로 끝난다. 판단할 갈래가 없는 공식 적용이다.
    필수 예제 ★2 출발 · 통찰 0 · M_total 4 → 감점 조건(M_total ≤ 3)에 못 미쳐 ★2 유지.
  tier: star_2
  mechanism_primary: "곱의 미분법으로 f'(x) → x=1 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-1$"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/76-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차 인수의 상수항과 이차 인수의 계수, 대입하는 $x$ 값을 바꿀 수 있다. 제약은 대입값에서 두 인수의 값이 모두 간단한 정수가 되게 해 곱의 미분법의 이점이 드러나도록 하는 것."
    creative: "(1) 이차 인수를 삼차로 올리기(★2 유지) (2) 인수 하나를 미지 함수 $g(x)$ 로 두고 $g(1)$, $g'(1)$ 을 주면 추상도가 올라 ★2 (3) $f'(a)=k$ 를 주고 인수 안의 상수를 역으로 묻기(★2~3)."
```

```yaml
- id: GN-CALC1-76-e9
  page: 76
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $f(x)=ax^3+bx+c$ 가 $f(1)=4$, $f'(0)=-1$, $f'(1)=5$ 를 만족시킬 때 $a+b-c$ 의 값.
  category: "도함수 식 세우기 → 세 조건 연립 → 계수 결정"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수 조건으로 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f'(x)=3ax^2+b$ 를 만들면 $f'(0)$ 이 곧 $b$, $f'(1)$ 이 $3a+b$ 라서 조건이 순서대로 풀린다. 나머지 조건으로 $c$ 를 얻는다.
    미정계수 직접 대입은 스키마상 표준 절차라 통찰 불인정. 필수 예제 ★2 출발 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'(x) 계산 → f'(0)=b, f'(1)=3a+b 로 a·b → f(1) 로 c → 식의 값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-2$"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/76-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 조건값과 묻는 식($a+b-c$)을 바꿀 수 있다. 제약은 $f'(0)$ 처럼 한 계수가 바로 떨어지는 조건을 하나 남겨 연립이 풀리는 순서를 보장하고, 해가 정수가 되게 조건값을 고르는 것."
    creative: "(1) $f(x)=ax^3+bx^2+c$ 로 바꿔 $f'(0)=0$ 이 되는 함정을 만들기(★2~3) (2) 조건 하나를 극한 꼴로 주면 미분계수의 정의를 거쳐야 해 ★3 (3) 조건 중 하나를 부등식으로 주면 범위 판단이 들어가 ★3."
```

```yaml
- id: GN-CALC1-76-126
  page: 76
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=(x^5-2x)^3$ 일 때 $f'(-1)$ 의 값.
  category: "거듭제곱 꼴 미분 → x=-1 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱의 미분법과 {g(x)}^n 의 미분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $g=x^5-2x$ 로 보고 $f'=3g^2g'$ 를 쓴 뒤 $x=-1$ 에서 $g$ 와 $g'$ 값을 각각 대입한다. 전개하면 15차라 거듭제곱 공식을 쓰는 것이 사실상 유일한 길이다.
    음수 대입에서 홀수 차수의 부호를 틀리기 쉬워 T-부호 1개. 확인체크 ★2 출발 · 통찰 0 → ★2.
  tier: star_2
  mechanism_primary: "g=x^5-2x 로 보고 f'=3g^2 g' → x=-1 에서 g(-1), g'(-1) 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$9$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/76-126.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "안쪽 다항식의 지수·계수와 바깥 지수, 대입값을 바꿀 수 있다. 제약은 대입값에서 $g$ 와 $g'$ 가 작은 정수가 되어야 전개 없이 답이 정수로 떨어진다는 것."
    creative: "(1) 바깥 지수를 4 로 올리기(★2 유지) (2) $f'(a)=k$ 를 주고 안쪽 계수를 역으로 묻기(★3) (3) 안쪽을 미지 함수로 두고 $g(a)$, $g'(a)$ 만 주면 추상도가 올라 ★2~3."
```

```yaml
- id: GN-CALC1-76-127
  page: 76
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    미분가능한 $f$, $g$ 가 $f(x)=(x^2+1)g(x)$ 를 만족시키고 $g(1)=-1$, $g'(1)=2$ 일 때 $f'(1)$ 의 값.
  category: "곱의 미분법 → 미지 함수의 함숫값·미분계수 대입"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱의 미분법으로 미분계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f'=2xg+(x^2+1)g'$ 를 세우고 $x=1$ 에서 주어진 두 값을 넣으면 끝난다. 미지 함수가 들어와 표현 추상도만 한 단계 높다.
    구체적인 $g$ 를 모른 채 값만 대입하는 것이 이 유형의 골조다. 확인체크 ★2 출발 · 통찰 0 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "f'=2xg(x)+(x^2+1)g'(x) → x=1 에 g(1), g'(1) 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/76-127.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "앞 인수의 계수와 $g(1)$, $g'(1)$ 값을 바꿀 수 있다. 제약은 미분가능 가정을 유지하고, 앞 인수가 대입점에서 0 이 되지 않게 해 두 항이 모두 살아 있게 하는 것."
    creative: "(1) $f=(x^2+1)g$ 를 $f=g(x)h(x)$ 로 바꿔 두 미지 함수의 곱으로 만들기(★3) (2) $f'(1)$ 을 주고 $g'(1)$ 을 역으로 묻기(★2~3) (3) 몫 대신 $f=(x^2+1)g$ 와 $f(1)$ 을 함께 주고 $g(1)$ 까지 묻기(★3)."
```

```yaml
- id: GN-CALC1-76-128
  page: 76
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=(-x^2+2)(x-3)(x+a)$ 에서 $f'(2)=20$ 일 때 상수 $a$ 의 값.
  category: "세 함수 곱의 미분법 → x=2 대입 → a 에 대한 일차방정식"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수 조건으로 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 인수의 곱의 미분법으로 세 항을 만들고 $x=2$ 를 넣으면 $a$ 의 일차식이 되어 바로 풀린다. 전개하면 $a$ 가 여러 항에 흩어져 계산이 늘어난다.
    미정계수를 역으로 구하지만 스키마상 단순 대입이라 통찰 불인정. 확인체크 ★2 출발 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "세 인수 곱의 미분법 → x=2 대입 → a 의 일차방정식 풀이"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$7$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/76-128.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 인수의 계수·상수항과 $f'(2)$ 의 값, 대입점을 바꿀 수 있다. 제약은 대입점에서 $a$ 가 있는 인수를 제외한 값들이 작은 정수여야 하고, $a$ 의 계수가 0 이 되지 않아야 해가 하나로 정해진다는 것."
    creative: "(1) $a$ 를 두 인수에 함께 넣어 이차방정식으로 만들기(★3) (2) $f'(2)=f(2)$ 처럼 조건을 관계식으로 주기(★3) (3) 인수 하나를 미지 함수로 바꿔 추상도를 올리기(★3)."
```

```yaml
- id: GN-CALC1-76-129
  page: 76
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=x^3+ax^2-3$, $g(x)=(4-x^2)f(x)$ 이고 $f'(1)=g'(1)$ 일 때 상수 $a$ 의 값.
  category: "곱의 미분법 → 조건을 f(1)=f'(1) 로 정리 → a 결정"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "g'(1)=-2f(1)+3f'(1) 을 조건에 넣으면 f'(1) 이 소거되어 f(1)=f'(1) 이라는 간단한 동치 조건이 남는 것을 본다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "미분계수 조건으로 미정계수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $g'=-2xf+(4-x^2)f'$ 에서 $g'(1)=-2f(1)+3f'(1)$ 이고, 조건 $f'(1)=g'(1)$ 에 넣으면 $f'(1)$ 이 한 개 소거되어 $f(1)=f'(1)$ 만 남는다.
    이 정리를 못 보면 $a$ 가 든 식 두 개를 그대로 연립하게 된다. 동치 변환 1개(EQV d1) · M_total 7 → 확인체크 ★2 출발에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "g'=-2xf+(4-x^2)f' → x=1 대입 → 조건이 f(1)=f'(1) 로 축약 → a 결정"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$-5$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/76-129.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$f$ 의 계수·상수항과 $g$ 의 앞 인수($4-x^2$), 대입점을 바꿀 수 있다. 제약은 대입점에서 앞 인수의 값이 1 이 아니어야 $f'(1)$ 이 소거되는 구조가 유지되고, $a$ 의 계수가 0 이 되지 않아야 한다는 것."
    creative: "(1) 조건을 $g'(1)=0$ 으로 바꾸면 소거 구조가 사라져 ★2 로 내려간다 (2) $f$ 를 미지의 다항함수로 두고 $f(1)$, $f'(1)$ 만 주면 추상도가 올라 ★3 유지 (3) 앞 인수를 $(k-x^2)$ 로 두고 $a$ 와 $k$ 를 함께 묻기(★4)."
```

```yaml
- id: GN-CALC1-77-e10
  page: 77
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $f(x)=\dfrac{1}{4}x^3-\dfrac{2}{3}x^2+5$ 에 대하여 $\lim\limits_{h\to 0}\dfrac{f(2+3h)-f(2+h)}{h}$ 의 값.
  category: "f(2) 끼워넣기 → 두 미분계수 꼴로 분해 → 계수 3, -1"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분자에 $f(2)$ 를 빼고 더해 두 개의 미분계수 꼴로 쪼개고, 각각의 증분 배수 3 과 1 을 계수로 꺼낸다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "미분계수의 정의를 이용한 극한값 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자에 두 항 모두 $f(2)$ 가 없어 정의 꼴이 아니다. $f(2)$ 를 끼워넣어 $3\cdot\dfrac{f(2+3h)-f(2)}{3h}-\dfrac{f(2+h)-f(2)}{h}$ 로 바꾸면 $3f'(2)-f'(2)=2f'(2)$ 다.
    이 끼워넣기가 유일한 판단 지점(EQV d2). 필수 예제 ★2 출발 · 통찰 1 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "분자에 f(2) 끼워넣기 → 3f'(2)-f'(2)=2f'(2) → f'(2) 계산"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/77-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$f$ 의 계수와 두 증분 배수(3 과 1), 대입점 2 를 바꿀 수 있다. 제약은 두 항의 기준점이 같아야 $f$ 의 값이 소거되고, 두 배수가 다르게 해야 문항의 취지가 남는다는 것."
    creative: "(1) 두 항의 증분 부호를 반대로($f(a+3h)-f(a-h)$) 두면 계수가 3+1 이 되어 부호 함정이 생긴다(★3) (2) 기준점을 서로 다르게 하면 소거가 안 돼 성립하지 않으므로 금지 (3) $f$ 를 미지 다항함수로 두고 $f'(a)$ 만 주면 ★2 유지."
```

```yaml
- id: GN-CALC1-77-130
  page: 77
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=x^4-2x^3+x+4$ 에 대하여 $\lim\limits_{h\to 0}\dfrac{f(1+h)-f(1-h)}{h}$ 의 값.
  category: "f(1) 끼워넣기 → f'(1)+f'(1) → 2f'(1)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분자에 $f(1)$ 을 끼워넣고 뒤쪽 항의 증분이 $-h$ 임을 반영해 부호를 뒤집어 $2f'(1)$ 로 만든다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "미분계수의 정의를 이용한 극한값 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f(1)$ 을 끼워넣어 $\dfrac{f(1+h)-f(1)}{h}+\dfrac{f(1-h)-f(1)}{-h}$ 로 보면 $2f'(1)$ 이다. 앞 문항과 같은 골조이고 증분 배수가 1, -1 로 단순하다.
    $-h$ 처리에서 부호를 틀리기 쉬워 T-부호 1개. 확인체크 ★2 출발 · 통찰 1 d1 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f(1) 끼워넣기 → 뒤쪽 항 분모를 -h 로 맞추기 → 2f'(1)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$-2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/77-130.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$f$ 의 계수와 기준점 1 을 바꿀 수 있다. 제약은 두 항의 기준점이 같아야 하고, $f'$ 가 그 점에서 간단한 정수가 되게 계수를 고르는 것."
    creative: "(1) 증분을 $2h$ 와 $-3h$ 로 비대칭으로 만들기(★2~3) (2) $f$ 대신 두 함수 $f$, $g$ 를 섞으면 두 함숫값이 같은지 먼저 확인해야 해 ★3 (3) 극한값을 주고 $f$ 의 계수를 역으로 묻기(★3)."
```

```yaml
- id: GN-CALC1-77-131
  page: 77
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=x^3-3x^2+4x+3$ 에 대하여 $\lim\limits_{x\to 2}\dfrac{f(x)-f(2)}{x^3-8}$ 의 값.
  category: "분모 인수분해 → 미분계수 꼴 분리 → f'(2)/12"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분모 $x^3-8=(x-2)(x^2+2x+4)$ 로 갈라 $\\dfrac{f(x)-f(2)}{x-2}$ 와 남은 인수의 극한으로 분리한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "미분계수의 정의를 이용한 극한값 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자는 이미 정의 꼴인데 분모가 $x-2$ 가 아니다. 세제곱 차 인수분해로 $(x-2)$ 를 떼어내면 $f'(2)\cdot\dfrac{1}{12}$ 로 정리된다.
    인수분해로 정의 꼴을 복원하는 한 단계(EQV d2). 확인체크 ★2 출발 · 통찰 1 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "x^3-8=(x-2)(x^2+2x+4) 로 분리 → f'(2) × 1/(x^2+2x+4) 의 극한"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/77-131.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$f$ 의 계수와 기준점, 분모의 인수분해 꼴($x^2-4$, $x^3-27$, $x^4-16$ 등)을 바꿀 수 있다. 제약은 분모가 기준점에서 0 이 되는 인수를 정확히 하나만 가져야 극한이 유한하게 남는다는 것."
    creative: "(1) 분모를 $\\sqrt{x}-\\sqrt{2}$ 류로 바꾸면 교육과정 밖이므로 다항식 인수분해 안에서만 변형 (2) 분자를 $f(x)-k$ 로 주고 $f(2)=k$ 임을 먼저 알아채게 하면 ★3 (3) 극한값을 주고 $f$ 의 계수를 역으로 묻기(★3)."
```

```yaml
- id: GN-CALC1-78-e11
  page: 78
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $f(x)=x^4+ax^2+bx$ 가 $\lim\limits_{x\to 2}\dfrac{f(x)-f(2)}{x-2}=14$, $\lim\limits_{x\to 1}\dfrac{f(x)-f(1)}{x^2-1}=-2$ 를 만족시킬 때 $f'(-1)$ 의 값.
  category: "두 극한을 f'(2), f'(1) 로 번역 → a·b 연립 → f'(-1)"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "둘째 극한의 분모 $x^2-1=(x-1)(x+1)$ 을 갈라 $\\dfrac{f'(1)}{2}$ 로 번역한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "극한 조건으로 주어진 미분계수와 미정계수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    첫 조건은 그대로 $f'(2)=14$ 지만 둘째는 분모가 $x^2-1$ 이라 $(x+1)$ 을 떼어 $f'(1)=-4$ 로 옮겨야 한다. 두 식으로 $a$, $b$ 를 연립한 뒤 $f'(-1)$ 을 계산한다.
    번역 한 단계(EQV d2) + 연립. 필수 예제 ★2 출발 · 통찰 1 · M_total 7 → +1 → ★3.
  tier: star_3
  mechanism_primary: "f'(2)=14 와 f'(1)/2=-2 로 번역 → 4a+b, 2a+b 연립 → f'(-1) 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$8$"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/78-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 극한값, $f$ 의 차수와 계수, 마지막에 묻는 점($-1$)을 바꿀 수 있다. 제약은 분모의 여분 인수가 기준점에서 0 이 아니어야 하고, 연립의 해가 정수로 떨어지게 극한값을 고르는 것."
    creative: "(1) 두 조건 모두 분모를 변형 꼴로 주면 번역이 두 번이라 ★3 유지~★4 (2) 조건 하나를 $\\lim\\limits_{x\\to\\infty}$ 꼴로 바꿔 차수·최고차항을 먼저 정하게 하면 ★4 (3) $f$ 의 차수를 미지로 두면 차수 결정이 추가돼 ★4."
```

```yaml
- id: GN-CALC1-78-132
  page: 78
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=x^3+ax^2+bx-b$ 에 대하여 $\lim\limits_{x\to 1}\dfrac{f(x)}{x-1}=1$ 일 때 $a-b$ 의 값.
  category: "분모→0 이므로 f(1)=0 → 극한이 f'(1) → 계수 결정"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "극한이 유한하고 분모가 0 으로 가므로 분자도 0, 즉 $f(1)=0$ 이어야 한다는 조건을 먼저 끌어낸다"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$f(1)=0$ 을 쓰면 $\\dfrac{f(x)}{x-1}=\\dfrac{f(x)-f(1)}{x-1}$ 이 되어 극한이 $f'(1)$ 임을 본다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "극한 조건으로 주어진 미분계수와 미정계수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분자에 $f(1)$ 이 보이지 않는 형태라 먼저 수렴 조건에서 $f(1)=0$ 을 얻어야 한다. 그러면 극한이 곧 $f'(1)=1$ 이 되어 두 식으로 $a$, $b$ 가 정해진다.
    수렴 조건과 정의 꼴 복원 두 단계(EQV d2, d1) → 확인체크 ★2 출발에서 +1 → ★3. 분자를 0 으로 놓는 단계를 건너뛰는 것이 전형적 함정(T-경계) 1개.
  tier: star_3
  mechanism_primary: "수렴 조건 → f(1)=0 → 극한 = f'(1)=1 → a, b 결정 → a-b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$-1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/78-132.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$f$ 의 계수 구성과 극한값, 기준점을 바꿀 수 있다. 제약은 상수항을 $-b$ 처럼 다른 계수와 묶어 두어야 $f(1)=0$ 이 한 계수를 바로 결정하고, 나머지 한 식으로 해가 유일해진다는 것."
    creative: "(1) 분모를 $x^2-1$ 로 바꾸면 인수 분리가 추가돼 ★3 유지 (2) 조건을 두 개 주고 차수를 미지로 두면 ★4 (3) $f(1)=0$ 이 아니라 $f(1)=k$ 가 되도록 분자를 $f(x)-k$ 로 주면 난도가 내려가 ★2."
```

```yaml
- id: GN-CALC1-78-133
  page: 78
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=x^3+ax^2+bx+1$ 이 $\lim\limits_{h\to 0}\dfrac{f(1+h)-f(1)}{h}=4$, $\lim\limits_{h\to 0}\dfrac{f(-2-h)-f(-2)}{h}=-1$ 을 만족시킬 때 $f(1)$ 의 값.
  category: "둘째 극한의 증분이 -h → -f'(-2) 로 번역 → 계수 연립"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "둘째 극한의 증분이 $-h$ 이므로 분모를 $-h$ 로 맞추면 값이 $-f'(-2)$ 가 되어 부호가 뒤집힌다는 것을 본다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "극한 조건으로 주어진 미분계수와 미정계수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    첫 조건은 곧바로 $f'(1)=4$ 다. 둘째는 $-h$ 증분이라 $f'(-2)=1$ 로 부호를 뒤집어야 하고, 여기서 틀리면 계수가 통째로 달라진다.
    부호 번역 한 단계(EQV d2)와 T-부호 함정 1개 · M_total 8 → 확인체크 ★2 출발에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "f'(1)=4, -f'(-2)=-1 로 번역 → 2a+b, -4a+b 연립 → f(1) 계산"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/78-133.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 극한값, 두 기준점(1 과 $-2$), $f$ 의 계수를 바꿀 수 있다. 제약은 두 기준점이 달라야 연립이 되고, $f'$ 가 이차식이므로 두 식의 계수행렬이 특이하지 않게 기준점을 고르는 것."
    creative: "(1) 두 조건 모두 증분을 $-h$, $2h$ 처럼 비틀면 번역이 두 번이라 ★3 유지 (2) 마지막에 $f'(0)$ 이나 극값을 묻기(★3) (3) $f$ 의 상수항도 미지로 두고 조건을 하나 더 주면 ★4."
```

```yaml
- id: GN-CALC1-79-e12
  page: 79
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $\lim\limits_{x\to 1}\dfrac{x^n+2x-3}{x-1}=12$ 를 만족시키는 자연수 $n$ 의 값.
  category: "분자를 f(x)-f(1) 로 보기 → 극한 = f'(1) → n 결정"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$f(x)=x^n+2x-3$ 으로 두면 $f(1)=0$ 이므로 주어진 극한이 곧 $f'(1)=n+2$ 임을 본다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "미분계수의 정의를 이용한 극한값 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $n$ 이 미지라 직접 인수분해할 수 없다. 분자를 $f(x)-f(1)$ 로 보는 순간 극한이 $f'(1)=n+2$ 가 되어 $n=10$ 이 한 줄로 나온다.
    미분계수로 환원하는 한 단계(EQV d2). 필수 예제 ★2 출발 · 통찰 1 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "f(x)=x^n+2x-3 로 두고 f(1)=0 확인 → 극한 = f'(1)=n+2 → n"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$10$"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/79-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항의 계수와 상수항, 극한값을 바꿀 수 있다. 제약은 기준점에서 분자가 반드시 0 이 되어야 하므로 상수항이 나머지 항의 값과 맞물려야 하고, $n$ 이 자연수로 떨어지게 극한값을 고르는 것."
    creative: "(1) 기준점을 $x\\to 2$ 로 옮기면 $2^n$ 항 때문에 지수 조건이 추가돼 ★3 (2) 극한값 대신 $n$ 을 주고 극한값을 묻기(★2 이하) (3) 분자를 $x^n+ax-b$ 로 두고 $n$ 과 $a$ 를 함께 묻기(★3~4)."
```

```yaml
- id: GN-CALC1-79-134
  page: 79
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $\lim\limits_{x\to 1}\dfrac{x^{10}+x-2}{x-1}$ 의 값.
  category: "분자를 f(x)-f(1) 로 보기 → f'(1)"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$f(x)=x^{10}+x-2$ 에서 $f(1)=0$ 이므로 극한이 $f'(1)$ 임을 본다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "미분계수의 정의를 이용한 극한값 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    10차라 인수분해로 밀어붙이기 어렵고, 분자를 $f(x)-f(1)$ 로 보면 $f'(1)=10+1$ 로 끝난다. 앞 예제와 같은 골조에서 지수만 구체적으로 주어졌다.
    확인체크 ★2 출발 · 통찰 1 d1 · M_total 4 → ★2.
  tier: star_2
  mechanism_primary: "f(1)=0 확인 → 극한 = f'(1)=10x^9+1 의 x=1 값"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$11$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/79-134.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수와 일차항 계수, 상수항을 바꿀 수 있다. 제약은 $x=1$ 에서 분자가 0 이 되도록 상수항을 맞추는 것 하나뿐이다."
    creative: "(1) 항을 여러 개로 늘려 $x^{10}+x^9+\\cdots$ 꼴로 만들면 계산량만 늘고 ★2 유지 (2) 기준점을 $-1$ 로 옮기면 부호 함정이 생겨 ★2~3 (3) 분모를 $x^2-1$ 로 바꾸면 인수 분리가 추가돼 ★3."
```

```yaml
- id: GN-CALC1-79-135
  page: 79
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $\lim\limits_{x\to 2}\dfrac{x^n-x^3-x-6}{x-2}=k$ 일 때 자연수 $n$ 과 상수 $k$ 에 대하여 $n+k$ 의 값.
  category: "수렴 조건으로 분자=0 → n 결정 → f'(2)=k"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "극한이 수렴하므로 $x=2$ 에서 분자가 0, 즉 $2^n=16$ 이어야 한다는 조건에서 $n$ 을 먼저 확정한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "극한 조건으로 주어진 미분계수와 미정계수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $n$ 을 모르면 미분도 못 하므로 순서가 정해져 있다. 수렴 조건에서 $2^n$ 이 나머지 항의 합과 같아져 $n$ 이 먼저 정해지고, 그다음 $k=f'(2)$ 를 계산한다.
    수렴 조건 한 단계(EQV d2) · M_total 7 → 확인체크 ★2 출발에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "수렴 조건 → 분자의 x=2 값이 0 → n 확정 → k=f'(2) → n+k"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$23$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/79-135.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준점과 나머지 항들의 계수를 바꿀 수 있다. 제약은 기준점에서 나머지 항의 합이 그 기준점의 거듭제곱과 같아져야 자연수 $n$ 이 존재하고, $n$ 이 유일하게 정해지도록 기준점을 2 이상으로 두는 것."
    creative: "(1) 기준점을 $-1$ 로 두면 $n$ 의 홀짝 분기가 생겨 다중 해석이 들어가 ★4 (2) $k$ 를 주고 $n$ 만 묻기(★3 유지) (3) 분자에 미정계수를 하나 더 넣고 조건을 하나 더 주면 ★4."
```

```yaml
- id: GN-CALC1-80-e13
  page: 80
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $f(x)=3x^2+1\ (x\ge 1)$, $ax+b\ (x<1)$ 가 $x=1$ 에서 미분가능할 때 상수 $a$, $b$ 의 값.
  category: "미분가능 → 연속 + 좌우 미분계수 일치 → 두 식 연립"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간별로 정의된 함수의 미분가능 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    미분가능하면 연속이므로 $x=1$ 에서 두 식의 값이 같고, 좌우 미분계수도 같다. 이 두 식을 세우면 $a$, $b$ 가 바로 나온다.
    이 단원의 표준 절차라 통찰 불인정. 연속 조건을 빠뜨리는 것이 대표 함정(T-경계) 1개. 필수 예제 ★2 출발 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "x=1 에서 연속 → 4=a+b · 좌우 미분계수 일치 → a=6 → b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$a=6$, $b=-2$"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/80-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 조각의 계수와 이음점 1 을 바꿀 수 있다. 제약은 미분계수 조건이 $a$ 를 먼저 확정하도록 아래쪽 조각을 일차식으로 두고, 이음점에서 값이 정수로 떨어지게 계수를 고르는 것."
    creative: "(1) 아래쪽 조각도 이차로 올리면 두 식이 모두 연립이 되어 ★3 (2) 이음점을 미지 $t$ 로 두면 조건이 하나 늘어 ★4 (3) 미분가능이 아니라 연속만 요구하면 조건이 하나 줄어 ★1~2."
```

```yaml
- id: GN-CALC1-80-136
  page: 80
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=ax^2-2\ (x\ge 2)$, $x^2+6x+b\ (x<2)$ 가 $x=2$ 에서 미분가능할 때 상수 $a$, $b$ 의 값.
  category: "좌우 미분계수 일치로 a → 연속 조건으로 b"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간별로 정의된 함수의 미분가능 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양쪽이 모두 이차식이라 미분계수 조건 $4a=10$ 에서 $a$ 가 먼저 정해지고, 연속 조건에 넣으면 $b$ 가 나온다. 순서를 반대로 잡으면 미지수 두 개가 섞인 식이 된다.
    표준 절차이므로 통찰 불인정. 확인체크 ★2 출발 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "좌우 미분계수 일치 → a=5/2 → 연속 조건 대입 → b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a=\dfrac{5}{2}$, $b=-8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/80-136.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 조각의 계수와 이음점을 바꿀 수 있다. 제약은 이 문항처럼 $a$ 가 분수로 나와도 되지만 $b$ 는 정수로 떨어지게 상수항을 맞추는 것, 그리고 이음점에서 두 조각이 서로 다른 함수여야 문제가 성립한다는 것."
    creative: "(1) 위쪽 조각을 삼차로 올리기(★2~3) (2) $a$, $b$ 를 두 조각에 섞어 넣으면 연립이 필요해 ★3 (3) 미분가능한 $a$, $b$ 의 관계식만 묻고 $ab$ 의 최댓값을 물으면 ★4."
```

```yaml
- id: GN-CALC1-80-137
  page: 80
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=x^3+ax^2+bx\ (x\ge 1)$, $2x^2+1\ (x<1)$ 이 모든 실수에서 미분가능할 때 $ab$ 의 값.
  category: "이음점 연속·미분계수 두 식 연립 → a, b → 곱"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간별로 정의된 함수의 미분가능 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 조각 모두 다항식이라 이음점 $x=1$ 밖에서는 자동으로 미분가능하고, 조건은 $x=1$ 에서만 걸린다. 연속·미분계수 두 식이 $a$, $b$ 에 대한 연립이 된다.
    「모든 실수에서」라는 표현이 이음점 한 곳으로 좁혀진다는 점만 짚으면 표준 절차다. 확인체크 ★2 출발 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "x=1 에서 연속 → 1+a+b=3 · 미분계수 일치 → 3+2a+b=4 → 연립 → ab"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/80-137.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 조각의 계수와 이음점을 바꿀 수 있다. 제약은 미지수 두 개가 한쪽 조각에만 있어야 연립이 2원 1차로 깔끔하게 떨어지고, $ab$ 가 정수가 되게 고르는 것."
    creative: "(1) 미지수를 양쪽 조각에 나눠 넣기(★3) (2) 이음점을 두 곳으로 늘려 세 조각 함수로 만들면 조건이 네 개라 ★4 (3) $a$, $b$ 의 값 대신 $a+b$ 의 최댓값을 묻고 부등식 조건을 하나 붙이면 ★4."
```

```yaml
- id: GN-CALC1-81-e14
  page: 81
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ $x^3+ax^2+b$ 가 $(x-2)^2$ 으로 나누어떨어지도록 하는 상수 $a$, $b$ ⑵ $x^{10}-1$ 을 $(x-1)^2$ 으로 나눈 나머지.
  category: "(x-a)^2 로 나눈 나눗셈식 → x=a 에서 f(a), f'(a) → 계수·나머지 결정"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "다항식의 나눗셈(공통수학1)과 미분을 결합해 $f(x)=(x-a)^2Q(x)+R(x)$ 를 미분한 뒤 $x=a$ 를 넣으면 $Q$ 가 사라진다는 구조를 쓴다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "미분을 이용한 다항식의 나눗셈"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 $f(2)=0$ 과 $f'(2)=0$ 두 식, ⑵ 는 나머지를 $px+q$ 로 두고 $f(1)=q+p$, $f'(1)=p$ 로 옮기는 같은 골조다. 나눗셈식을 미분해도 $(x-a)^2$ 의 인수 때문에 $x=a$ 에서 몫이 소거되는 것이 핵심.
    단원을 넘는 결합(XU d2) · M_total 7 → 필수 예제 ★2 출발에서 +1 → ★3. [분류 이슈] 교재 안에서는 표준 기법이라 XU 인정 여부가 경계.
  tier: star_3
  mechanism_primary: "f(x)=(x-a)^2Q+R 를 미분 → x=a 에서 몫 소거 → f(a), f'(a) 두 식"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "⑴ $a=-3$, $b=4$ ⑵ $10x-10$"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/81-e14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "나누는 중근 $a$, 피제식의 차수·계수를 바꿀 수 있다. 제약은 제수를 반드시 $(x-a)^2$ 꼴 완전제곱으로 두어야 이 기법이 성립하고, 나머지는 일차 이하여야 한다는 것."
    creative: "(1) 제수를 $(x-a)^3$ 으로 올리면 이계도함수가 필요해 교육과정 밖이므로 금지 (2) 제수를 $(x-a)^2(x-b)$ 로 두고 나머지를 이차식으로 잡으면 조건이 세 개라 ★4 (3) 나머지를 주고 피제식의 계수를 역으로 묻기(★3~4)."
```

```yaml
- id: GN-CALC1-81-138
  page: 81
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $x^{20}-ax+b$ 가 $(x-1)^2$ 으로 나누어떨어질 때 상수 $a$, $b$ 에 대하여 $a+b$ 의 값.
  category: "f(1)=0, f'(1)=0 → a, b 결정"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$(x-1)^2$ 으로 나누어떨어진다는 나눗셈 조건을 $f(1)=0$ 과 $f'(1)=0$ 두 미분 조건으로 옮긴다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "미분을 이용한 다항식의 나눗셈"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    20차라 조립제법이나 직접 나눗셈은 현실적이지 않고, 중근 조건을 미분으로 옮기는 기법이 사실상 유일한 길이다. $f'(1)=20-a=0$ 에서 $a$, $f(1)=0$ 에서 $b$ 가 순서대로 나온다.
    저노출 통찰(XU d2)이 풀이의 관문이라 확인체크 ★2 출발에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "나누어떨어짐 → f(1)=0 · f'(1)=0 → a=20, b=19 → a+b"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$39$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/81-138.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최고차 지수와 일차항·상수항의 미지 계수 배치, 중근 위치를 바꿀 수 있다. 제약은 미지수가 두 개여야 두 조건으로 유일하게 결정되고, 중근을 $-1$ 로 두면 홀짝 부호를 함께 관리해야 한다는 것."
    creative: "(1) 중근을 $-1$ 로 옮겨 부호 함정을 넣기(★3 유지) (2) 나누어떨어짐 대신 나머지를 주면 우변이 0 이 아니어서 ★4 (3) 미지수를 최고차 계수에 넣으면 조건식이 비선형이 되어 ★4."
```

```yaml
- id: GN-CALC1-81-139
  page: 81
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $x^{100}-2x^3+4$ 를 $(x+1)^2$ 으로 나누었을 때의 나머지.
  category: "나머지를 px+q 로 두기 → f(-1), f'(-1) → p, q"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "나머지를 $px+q$ 로 두고 나눗셈식을 미분해 $f'(-1)=p$, $f(-1)=-p+q$ 를 얻는 나눗셈·미분 결합 구조를 쓴다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "미분을 이용한 다항식의 나눗셈"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    100차 다항식이라 나눗셈 자체는 불가능하고 나머지를 일차식으로 두는 설정이 출발점이다. $x=-1$ 대입에서 짝수·홀수 지수의 부호를 섞어 틀리기 쉽다.
    XU d2 통찰 + T-부호 함정 1개 · M_total 8 → 확인체크 ★2 출발에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "나머지를 px+q 로 설정 → f'(-1)=p · f(-1)=-p+q → 나머지 확정"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$-106x-99$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/81-139.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최고차 지수, 중간항의 차수·계수, 상수항, 중근 위치를 바꿀 수 있다. 제약은 지수를 바꿀 때 $x=-1$ 대입 부호가 달라지므로 답의 부호를 다시 잡아야 하고, 제수는 완전제곱이어야 한다는 것."
    creative: "(1) 중근을 $x=1$ 로 옮기면 부호 함정이 사라져 ★2~3 (2) 나머지를 주고 계수를 역으로 묻기(★4) (3) 제수를 $(x+1)^2(x-1)$ 로 두면 나머지가 이차식이라 조건 세 개로 ★4."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC1-82-140
  page: 82
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    다항함수 $f$ 가 $\lim\limits_{x\to 2}\dfrac{f(x)-5}{x-2}=7$ 을 만족시킬 때 $g(x)=xf(x)$ 에 대한 $g'(2)$ 의 값.
  category: "극한 조건에서 f(2)=5, f'(2)=7 읽기 → 곱의 미분법"
  M: {s: 3, k: 1, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "극한이 수렴하므로 분자가 0 으로 가야 하고, 이는 $f(2)=5$ 를 뜻한다. 그러면 극한 자체가 $f'(2)=7$ 이 된다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "극한 조건으로 주어진 미분계수와 미정계수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $f$ 의 식이 없으므로 조건에서 $f(2)$ 와 $f'(2)$ 두 값을 모두 꺼내야 한다. 분자의 5 가 곧 $f(2)$ 라는 것을 읽으면 $g'(2)=f(2)+2f'(2)$ 로 끝난다.
    $f(2)$ 를 못 읽고 $f'(2)$ 만 쓰면 답이 나오지 않는다(T-경계). EQV d2 · M_total 8 → STEP 1 ★2 출발에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "수렴 조건 → f(2)=5 · f'(2)=7 → g'=f+xf' → g'(2)=f(2)+2f'(2)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$19$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/82-140.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 상수(5), 극한값(7), 기준점(2), $g$ 의 앞 인수를 바꿀 수 있다. 제약은 분자의 상수가 반드시 $f$(기준점)의 값이어야 수렴하고, 앞 인수가 기준점에서 0 이 아니어야 두 정보가 모두 쓰인다는 것."
    creative: "(1) $g(x)=(x^2+1)f(x)$ 로 바꾸면 계산만 늘고 ★3 유지 (2) $g(x)=f(x)^2$ 로 두면 거듭제곱 미분이 추가돼 ★3~4 (3) 조건을 두 개 주고 $g'$ 의 다른 점 값을 물으면 ★4."
```

```yaml
- id: GN-CALC1-82-141
  page: 82
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    곡선 $y=x^3+ax^2+bx$ 위의 점 $(1,\,-1)$ 에서의 접선의 기울기가 $2$ 일 때 $ab$ 의 값.
  category: "점을 지난다는 조건 + 기울기=f'(1) → 연립"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수 조건으로 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「곡선 위의 점」에서 $f(1)=-1$, 「접선의 기울기」에서 $f'(1)=2$ 를 얻어 두 일차식을 연립한다. 두 조건을 모두 써야 한다는 것만 알면 바로 풀린다.
    기울기를 미분계수로 옮기는 것은 이 단원의 기본 약속이라 통찰 불인정. STEP 1 ★2 출발 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f(1)=-1 · f'(1)=2 두 식 연립 → a, b → ab"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/82-141.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점의 좌표, 기울기 값, 곡선의 차수를 바꿀 수 있다. 제약은 미지수 개수와 조건 개수가 같아야 하고(미지수 2 · 조건 2), 연립의 해가 정수로 떨어지게 좌표를 고르는 것."
    creative: "(1) 접선의 기울기 대신 접선이 지나는 다른 점을 주면 접선의 방정식까지 세워야 해 ★3 (2) 기울기가 최소가 되는 점을 함께 물으면 ★3~4 (3) 미지수를 세 개로 늘리고 조건을 하나 더 주면 ★3."
```

```yaml
- id: GN-CALC1-82-142
  page: 82
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=x+x^2+x^3+x^4+x^5$, $g(x)=x^4+x^5+x^6+x^7+x^8$ 에 대하여 $\lim\limits_{h\to 0}\dfrac{f(1+2h)-g(1-h)}{3h}$ 의 값.
  category: "f(1)=g(1) 확인 → 공통값 끼워넣기 → (2f'(1)+g'(1))/3"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$f(1)=g(1)=5$ 임을 먼저 확인해야 공통값을 끼워넣어 두 미분계수 꼴로 쪼갤 수 있다는 것을 본다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "미분계수의 정의를 이용한 극한값 계산"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    서로 다른 두 함수가 섞여 있어 그냥은 정의 꼴이 아니다. $f(1)=g(1)$ 이라는 것을 확인해야 공통값을 끼워넣을 수 있고, 그러면 $\dfrac{2f'(1)+g'(1)}{3}$ 로 정리된다.
    두 함숫값이 같은지 점검하는 단계가 관문(EQV d2)이고 $-h$ 부호도 걸린다(T-부호). M_total 8 → STEP 1 ★2 출발에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "f(1)=g(1) 확인 → 공통값 끼워넣기 → (2f'(1)+g'(1))/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$20$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/82-142.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 함수의 항 개수와 증분 배수(2, -1), 분모의 3 을 바꿀 수 있다. 제약은 기준점에서 $f$ 와 $g$ 의 값이 반드시 같아야 극한이 수렴하므로 항 개수를 맞추는 것이 핵심이다."
    creative: "(1) $f(1)\\ne g(1)$ 이 되게 두고 수렴 조건을 묻는 문항으로 바꾸면 ★4 (2) 두 함수를 미지 다항함수로 두고 $f(1)=g(1)$ 을 조건으로 주면 추상도가 올라 ★3 유지 (3) 증분 배수를 문자로 두고 극한값이 0 이 되는 조건을 물으면 ★4."
```

```yaml
- id: GN-CALC1-82-143
  page: 82
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=x^3+ax^2+bx$ 가 $\lim\limits_{x\to 3}\dfrac{f(x)-f(3)}{x-3}=18$, $\lim\limits_{x\to 1}\dfrac{x^3-1}{f(x)-f(1)}=-\dfrac{3}{2}$ 를 만족시킬 때 $a+b$ 의 값.
  category: "역수 취하기 → x^3-1 인수분해 → f'(1) → 연립"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "둘째 극한은 분자·분모가 뒤집혀 있으므로 0 이 아닌 극한값의 역수를 취해 $\\dfrac{f(x)-f(1)}{x^3-1}$ 꼴로 바꾼다"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$x^3-1=(x-1)(x^2+x+1)$ 로 갈라 $\\dfrac{f'(1)}{3}$ 로 번역한다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "극한 조건으로 주어진 미분계수와 미정계수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    첫 조건은 그대로 $f'(3)=18$ 이지만 둘째는 역수를 취하고 분모를 인수분해해야 $f'(1)$ 이 나온다. 역수를 취할 수 있는 근거(극한값이 0 이 아님)도 함께 필요하다.
    번역 두 단계(EQV d2 ×2) → STEP 1 ★2 출발에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "f'(3)=18 · 둘째 식 역수와 인수분해로 f'(1)=-2 → 연립 → a+b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$-4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/82-143.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 기준점, 두 극한값, 뒤집힌 분모의 인수분해 꼴을 바꿀 수 있다. 제약은 역수를 취해야 하므로 둘째 극한값이 0 이 아니어야 하고, 연립의 해가 정수가 되게 값을 고르는 것."
    creative: "(1) 두 조건 모두 역수 꼴로 주면 판단이 두 번이라 ★4 (2) 둘째 조건의 극한값을 0 으로 두면 역수를 못 취해 다른 논증이 필요하고 ★4 (3) $f$ 의 차수를 미지로 두면 ★4."
```

```yaml
- id: GN-CALC1-82-144
  page: 82
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $\lim\limits_{x\to -1}\dfrac{x^{10}+x^9+x^8+x^7+x^6-1}{x+1}$ 의 값.
  category: "분자가 x=-1 에서 0 임을 확인 → f'(-1)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분자를 $f(x)$ 로 두고 $f(-1)=0$ 임을 확인하면 극한이 $f'(-1)$ 임을 본다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "미분계수의 정의를 이용한 극한값 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    10차라 인수분해는 비현실적이고, $x=-1$ 에서 분자가 0 이 되는 것을 확인한 뒤 미분계수로 옮기는 것이 골조다. 도함수 각 항의 부호가 지수의 홀짝에 따라 번갈아 바뀌는 계산이 실질적 부담이다.
    EQV d2 통찰 1개 · T-부호 1개 · M_total 6 → STEP 1 ★2 출발 유지.
  tier: star_2
  mechanism_primary: "f(-1)=0 확인 → 극한 = f'(-1) → 홀짝 부호 맞춰 합산"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$-8$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/82-144.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항의 개수와 지수 범위, 상수항을 바꿀 수 있다. 제약은 $x=-1$ 에서 분자가 0 이 되도록 상수항을 맞추는 것이고, 항 수를 홀수로 바꾸면 부호 합의 결과가 달라진다."
    creative: "(1) 기준점을 1 로 옮기면 부호 함정이 사라져 ★2 이하 (2) 상수항을 미지수로 두고 수렴 조건부터 묻기(★3) (3) 분모를 $x^2-1$ 로 바꾸면 인수 분리가 추가돼 ★3."
```

```yaml
- id: GN-CALC1-82-145
  page: 82
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    $f(x)=|x+3|$, $g(x)=2x+a$ 에 대하여 $f(x)g(x)$ 가 실수 전체에서 미분가능할 때 상수 $a$ 의 값. 5지선다.
  category: "꺾인 점 x=-3 에서 좌우 미분계수 일치 → a 결정"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "절댓값을 구간별로 풀면 $x=-3$ 이 유일한 검사점이고, 그 점에서 좌우 미분계수가 서로 부호만 다른 값이 되므로 둘이 같으려면 그 값이 0 이어야 한다는 동치 조건을 얻는다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "구간별로 정의된 함수의 미분가능 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $|x+3|$ 때문에 $x=-3$ 에서만 미분가능성이 문제 되고, 연속은 자동으로 성립한다. 좌우 미분계수가 서로 부호가 반대인 같은 크기라 일치 조건이 곧 그 값이 0, 즉 $g(-3)=0$ 이 된다.
    절댓값의 꺾인 점 처리가 관문(EQV d2)이고 좌미분계수 부호가 함정(T-부호). M_total 8 → STEP 1 ★2 출발에서 +1 → ★3(기출 태그는 통찰이 이미 반영돼 추가 가산 없음).
  tier: star_3
  mechanism_primary: "x=-3 에서 구간별로 미분 → 좌우 미분계수 일치 ⇔ g(-3)=0 → a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/82-145.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "절댓값 안의 상수($x+3$), $g$ 의 기울기와 상수항 위치를 바꿀 수 있다. 제약은 선택지가 모두 정수가 되게 기울기를 고르고, 꺾인 점이 $g$ 의 근과 일치해야 답이 존재한다는 것."
    creative: "(1) $g$ 를 이차식으로 올리면 조건이 $g(-3)=0$ 하나로 같지만 계산이 늘어 ★3 유지 (2) $f(x)=|x^2-4|$ 로 두면 꺾인 점이 두 개라 조건이 둘이고 ★4 (3) 미분가능한 $a$ 의 개수를 묻는 형태로 바꾸면 ★4."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC1-83-146
  page: 83
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=(x-1)(x-2)(x-3)\times\cdots\times(x-7)$ 에 대하여 $\dfrac{f'(1)}{f'(5)}$ 의 값.
  category: "근에서의 미분계수 → 나머지 인수들의 곱"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "곱의 미분법으로 전개한 일곱 항 중 $x$ 가 근일 때 살아남는 항이 단 하나뿐이라는 구조를 발견해 $f'(k)$ 를 나머지 여섯 인수의 곱으로 쓴다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "인수의 곱으로 주어진 함수의 근에서의 미분계수"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    일곱 인수를 전개하는 길은 사실상 막혀 있다. 곱의 미분법의 각 항에는 미분되지 않은 인수가 남아 있고, $x=1$ 을 넣으면 $(x-1)$ 이 남은 항들이 모두 0 이 되어 한 항만 살아남는다.
    이 구조를 보면 두 값 모두 정수 곱으로 즉시 나온다(PD d2). M_total 8 · 음수 인수의 부호 관리(T-부호) → STEP 2 ★3 출발에서 +1 → ★4. ★4 저노출 유형 요건은 I-PD 로 충족.
  tier: star_4
  mechanism_primary: "f'(k)= k 를 제외한 나머지 (k-j) 들의 곱 → f'(1), f'(5) 각각 계산 → 비"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$15$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/83-146.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "인수의 개수와 근의 값들, 비교하는 두 근을 바꿀 수 있다. 제약은 두 근이 모두 인수의 근이어야 이 구조가 쓰이고, 근을 등간격으로 두면 계승 꼴로 정리돼 답이 깔끔해진다는 것."
    creative: "(1) $f'(k)$ 가 최대가 되는 근을 묻기(★4 유지) (2) 근 하나를 중근으로 만들면 그 점의 미분계수가 0 이 되어 판단이 하나 늘고 ★4 (3) 인수 개수를 $n$ 으로 일반화해 비를 $n$ 의 식으로 쓰게 하면 ★5 급."
```

```yaml
- id: GN-CALC1-83-147
  page: 83
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    두 다항함수 $f$, $g$ 가 모든 실수 $x$ 에서 $f'(x)=g(x)$, $\{f(x)+g(x)\}'=x^3+3x^2+4x+5$ 를 만족시킬 때 $g'(-1)$ 의 값.
  category: "f'=g 대입 → g+g' 항등식 → 차수 결정 → 계수 비교"
  M: {s: 3, k: 3, a: 3, t: 0}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$\\{f+g\\}'=f'+g'$ 에 $f'=g$ 를 넣어 미지 함수 하나짜리 항등식 $g+g'=x^3+3x^2+4x+5$ 로 바꾼다"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$g+g'$ 가 삼차이고 $g'$ 는 $g$ 보다 차수가 낮으므로 $g$ 가 삼차여야 한다는 것을 역추적해 미정계수를 세운다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "도함수 관계식으로 다항함수 결정"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 미지 함수를 하나로 줄이는 대입이 첫 관문이고, 그다음 $g$ 의 차수를 결정해야 계수 비교를 시작할 수 있다. 계수는 최고차부터 차례로 내려오며 정해진다.
    통찰 2개(EQV d2 · BW d2) · M_total 9 → STEP 2 ★3 출발에서 +1 → ★4.
  tier: star_4
  mechanism_primary: "f'=g 대입 → g+g'=주어진 삼차식 → g 는 삼차 → 계수 비교 → g'(-1)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$7$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/83-147.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 다항식의 차수와 계수, 마지막에 묻는 점을 바꿀 수 있다. 제약은 우변의 차수가 $g$ 의 차수와 같아야 하고, 최고차 계수부터 아래로 내려가며 계수가 정수로 떨어지게 우변을 고르는 것."
    creative: "(1) 관계를 $g'=f$ 로 뒤집으면 차수 추론이 반대가 되어 ★4 유지 (2) $f-g$ 의 도함수를 함께 주면 연립 항등식이라 ★4~5 (3) $f'=g$, $g'=f$ 처럼 순환 관계를 주면 차수 모순을 따져야 해 ★5 급."
```

```yaml
- id: GN-CALC1-83-148
  page: 83
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=2x^4-3x+5$ 에 대하여 $\lim\limits_{n\to\infty}n\left\{f\left(1+\dfrac{3}{n}\right)-f\left(1-\dfrac{2}{n}\right)\right\}$ 의 값.
  category: "1/n=h 치환 → 미분계수 꼴 분해 → 5f'(1)"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$n\\to\\infty$ 인 수열 극한을 $h=\\dfrac{1}{n}\\to 0$ 인 함수 극한으로 옮겨 미분계수의 정의 꼴로 바꾼다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "미분계수의 정의를 이용한 극한값 계산"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    겉모양은 수열 극한이지만 $\dfrac{1}{n}=h$ 로 놓으면 $\dfrac{f(1+3h)-f(1-2h)}{h}$ 가 되어 앞서 다룬 끼워넣기 골조로 들어온다. 계수는 $3+2=5$.
    표현 전환 한 단계(RT d2) · M_total 5 → STEP 2 ★3 출발 유지.
  tier: star_3
  mechanism_primary: "1/n=h 치환 → f(1) 끼워넣기 → 3f'(1)+2f'(1)=5f'(1)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$25$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/83-148.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$f$ 의 계수, 기준점 1, 두 증분 배수(3 과 $-2$), 앞에 곱한 $n$ 의 배수를 바꿀 수 있다. 제약은 두 항의 기준점이 같아야 하고, 앞의 계수가 $n$ 의 일차여야 극한이 유한하게 남는다는 것."
    creative: "(1) 앞 계수를 $n^2$ 으로 올리면 발산하므로 금지 (2) 증분 부호를 같게 하면 계수가 차가 되어 $3-2=1$, ★3 유지 (3) 극한값을 주고 $f$ 의 계수를 역으로 묻기(★4)."
```

```yaml
- id: GN-CALC1-83-149
  page: 83
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제"
  summary: |
    삼차함수 $f$ 가 $\lim\limits_{x\to 0}\dfrac{f(x)}{x}=\lim\limits_{x\to 1}\dfrac{f(x)}{x-1}=1$ 을 만족시킬 때 $f(2)$ 의 값. 5지선다.
  category: "수렴 조건으로 f(0)=f(1)=0 → 인수 두 개 확보 → 미분계수 조건"
  M: {s: 3, k: 2, a: 3, t: 0}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 극한이 모두 수렴하므로 $f(0)=0$ 과 $f(1)=0$ 을 얻고, 각 극한이 $f'(0)$, $f'(1)$ 임을 본다"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 근을 인수로 옮겨 $f(x)=x(x-1)(ax+b)$ 로 표현하면 근에서의 미분계수가 남은 인수 값 하나로 계산된다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "극한 조건으로 다항함수 결정"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    미정계수 네 개를 그대로 연립하면 무겁다. 수렴 조건에서 $f$ 가 $x$ 와 $x-1$ 을 인수로 가진다는 것을 읽고 인수 표현으로 옮기면, 근에서의 미분계수가 남은 인수의 값으로 바로 계산돼 두 식으로 끝난다.
    조건 번역과 표현 전환 두 단계(EQV d2 · RT d2) → STEP 2 ★3 출발에서 +1 → ★4.
  tier: star_4
  mechanism_primary: "f(0)=f(1)=0 → f=x(x-1)(ax+b) → f'(0), f'(1) 조건 → a, b → f(2)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/83-149.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 극한값과 두 기준점, 마지막에 묻는 점을 바꿀 수 있다. 제약은 두 기준점이 달라야 인수가 두 개 확보되고, 삼차라는 차수 조건이 있어야 남은 인수가 일차로 확정된다는 것."
    creative: "(1) 극한값을 서로 다르게 주면 계산만 늘고 ★4 유지 (2) 사차함수로 올리고 조건을 하나 더 주면 ★5 급 (3) 한 조건을 $\\lim\\limits_{x\\to\\infty}$ 꼴로 바꿔 최고차항부터 정하게 하면 ★4."
```

```yaml
- id: GN-CALC1-83-150
  page: 83
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    다항함수 $f$ 가 ㈎ $\lim\limits_{x\to\infty}\dfrac{f(x)-x^3}{x^2+2}=2$ ㈏ $\lim\limits_{x\to 1}\dfrac{f(x)-f(1)}{x^2-1}=4$ ㈐ $f(0)=0$ 을 만족시킬 때 $f(1)$ 의 값.
  category: "무한대 극한으로 차수·최고차항 결정 → 미분계수·상수항 조건"
  M: {s: 3, k: 2, a: 3, t: 0}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "㈎ 에서 $f(x)-x^3$ 이 이차이고 최고차항이 $2x^2$ 이어야 한다는 것을 역추적해 $f(x)=x^3+2x^2+px+q$ 로 꼴을 확정한다"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "㈏ 의 분모 $x^2-1$ 을 갈라 $\\dfrac{f'(1)}{2}=4$ 로 번역한다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "극한 조건으로 다항함수 결정"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    조건 셋이 각각 다른 역할을 한다. ㈎ 가 차수와 위 두 항을, ㈏ 가 일차항 계수를, ㈐ 가 상수항을 정한다. ㈎ 를 「$f$ 는 삼차」로만 읽으면 계수가 하나 더 남아 풀리지 않는다.
    차수·최고차항 역추적(BW d2)과 분모 번역(EQV d2) → STEP 2 ★3 출발에서 +1 → ★4.
  tier: star_4
  mechanism_primary: "㈎ 로 f=x^3+2x^2+px+q 확정 → ㈏ 로 f'(1)=8 → p → ㈐ 로 q → f(1)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/83-150.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "㈎ 의 분모 차수와 극한값, ㈏ 의 분모 꼴과 극한값, ㈐ 의 함숫값을 바꿀 수 있다. 제약은 ㈎ 의 분자·분모 차수가 같아야 최고차항이 결정되고, 세 조건이 서로 다른 계수를 담당하게 배치하는 것."
    creative: "(1) ㈐ 를 $f(2)=0$ 으로 바꾸면 상수항이 다른 계수와 얽혀 ★4 유지 (2) ㈎ 의 극한값을 0 으로 두면 차수가 더 내려가 분기가 생기고 ★5 급 (3) 사차함수로 올리고 조건을 네 개로 늘리면 ★4~5."
```

```yaml
- id: GN-CALC1-83-151
  page: 83
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=ax^3+b^2\ (x\ge 1)$, $bx^2+ax+b\ (x<1)$ 가 $x=1$ 에서 미분가능할 때($a\ne 0$) $\lim\limits_{h\to 0}\dfrac{f(1+2h)-f(1-h)}{h}$ 의 값.
  category: "연속·미분 조건 → b 의 두 후보 중 a≠0 으로 기각 → 3f'(1)"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "연속 조건에서 $b^2=2b$ 가 되어 $b=0$ 과 $b=2$ 두 후보가 나오는데, 미분 조건이 주는 $a=b$ 와 단서 $a\\ne 0$ 을 재대입해 $b=0$ 을 기각해야 한다"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "마지막 극한에 $f(1)$ 을 끼워넣어 $2f'(1)+f'(1)=3f'(1)$ 로 분해한다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "구간별로 정의된 함수의 미분가능 조건"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    연속 조건이 이차방정식이 되어 후보가 둘 생기고, $a\ne 0$ 이라는 단서가 없으면 답이 하나로 정해지지 않는다. 후보를 따져 하나를 버리는 검증이 풀이의 필수 단계다.
    사후 검증(VF d2)과 극한 분해(EQV d1) 두 단계 → STEP 2 ★3 출발에서 +1 → ★4. ★4 저노출 유형 요건은 I-VF 로 충족.
  tier: star_4
  mechanism_primary: "연속 → b^2=2b · 미분계수 일치 → a=b → a≠0 으로 b=0 기각 → 3f'(1)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$18$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/83-151.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 조각의 계수 배치, 이음점, 마지막 극한의 증분 배수(2 와 $-1$)를 바꿀 수 있다. 제약은 연속 조건이 이차가 되도록 미지수를 제곱 꼴로 한 번 쓰고, 배제 단서($a\\ne 0$)가 후보 하나만 정확히 걸러내게 두는 것."
    creative: "(1) 배제 단서를 빼고 가능한 모든 값의 합을 묻기(★4 유지, 분기가 모두 살아 I-MI 로 바뀜) (2) $b$ 의 조건을 정수로 주면 기각 근거가 달라져 ★4 (3) 이음점을 미지로 두면 조건이 하나 늘어 ★5 급."
```

```yaml
- id: GN-CALC1-84-152
  page: 84
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $x^{10}-ax+b$ 를 $(x+1)^2$ 으로 나눈 나머지가 $3x-2$ 일 때 상수 $a$, $b$ 에 대하여 $ab$ 의 값.
  category: "나눗셈식을 미분 → f(-1), f'(-1) 를 나머지 쪽 값과 대응"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$f(x)=(x+1)^2Q(x)+3x-2$ 를 미분하면 $x=-1$ 에서 몫 항이 사라져 $f'(-1)$ 이 나머지의 도함수 값과 같아진다는 나눗셈·미분 결합 구조를 쓴다"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "나머지가 0 이 아닌 경우에도 $f(-1)$ 이 나머지의 $x=-1$ 값과 같다는 대응을 세워 두 식을 만든다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "미분을 이용한 다항식의 나눗셈"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    앞의 81-138·139 가 「나누어떨어진다」나 「나머지를 구하라」였다면 여기서는 나머지가 주어지고 계수를 역으로 묻는다. $f'(-1)=3$, $f(-1)=-5$ 두 식이 각각 $a$, $b$ 를 준다.
    XU d2 와 대응 세우기(EQV d2) 두 단계 · $x=-1$ 부호 함정 1개 → STEP 2 ★3 출발에서 +1 → ★4. ★4 저노출 유형 요건은 I-XU 로 충족.
  tier: star_4
  mechanism_primary: "나눗셈식 미분 → f'(-1)=3 으로 a · f(-1)=-5 로 b → ab"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$-91$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/84-152.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최고차 지수, 나머지 일차식의 계수, 중근 위치를 바꿀 수 있다. 제약은 미지수 두 개에 조건 두 개가 대응하도록 일차항과 상수항에 미지수를 하나씩 두고, $x=-1$ 을 쓸 때 지수의 홀짝 부호를 다시 잡는 것."
    creative: "(1) 중근을 $x=2$ 로 옮기면 $2^{10}$ 때문에 계산만 커지고 ★4 유지 (2) 나머지를 미지 일차식으로 두고 조건을 하나 더 주면 ★4~5 (3) 제수를 $(x+1)^2(x-1)$ 로 바꾸면 나머지가 이차라 조건 세 개로 ★5 급."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC1-84-153
  page: 84
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["수능 기출"]
  category_type: "연습문제"
  summary: |
    두 다항함수 $f$, $g$ 가 $\lim\limits_{x\to 0}\dfrac{f(x)+g(x)}{x}=3$, $\lim\limits_{x\to 0}\dfrac{f(x)+3}{xg(x)}=2$ 를 만족시킬 때 $h(x)=f(x)g(x)$ 에 대한 $h'(0)$ 의 값. 5지선다.
  category: "두 수렴 조건으로 f(0), g(0) 확보 → 미분계수 두 개 → 곱의 미분법"
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "둘째 식의 분모가 0 으로 가므로 분자도 0, 즉 $f(0)=-3$ 임을 먼저 얻는다"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "첫째 식에서도 같은 논리로 $f(0)+g(0)=0$ 을 얻어 $g(0)=3$ 을 확정하고 극한값이 $f'(0)+g'(0)=3$ 임을 본다"
    - step: 3
      type: I-RT
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "둘째 식을 $\\dfrac{f(x)-f(0)}{x}\\cdot\\dfrac{1}{g(x)}$ 로 갈라 $\\dfrac{f'(0)}{g(0)}=2$ 라는 관계로 옮긴다"
  insight_count: 3
  depth_score: 2.33
  type_id: null
  type_hint: "두 함수의 곱의 미분계수(극한 조건)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $h'(0)=f'(0)g(0)+f(0)g'(0)$ 에 필요한 네 값을 모두 조건에서 캐내야 한다. 두 극한의 수렴 조건이 함숫값 두 개를, 식의 분해가 미분계수 두 개를 준다.
    통찰 3개(EQV d2 ×2 · RT d3)로 +1 대상이지만 ★5 게이트의 저노출 유형(SC·VF·SYM·XU)이 없어 실력 UP ★4 출발에서 ★4 에 머문다. [분류 이슈] 체감 난도는 ★5 쪽.
  tier: star_4
  mechanism_primary: "수렴 조건 → f(0)=-3, g(0)=3 → f'(0)+g'(0)=3 과 f'(0)/g(0)=2 → h'(0)"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/84-153.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 극한값(3 과 2)과 둘째 식 분자의 상수(3)를 바꿀 수 있다. 제약은 $g(0)\\ne 0$ 이어야 둘째 식의 분해가 유효하고, 네 값이 모두 유리수로 떨어지게 극한값을 고르는 것."
    creative: "(1) $h=f/g$ 처럼 몫으로 바꾸면 교육과정 밖이므로 곱으로 유지 (2) 조건 하나를 $x\\to 1$ 로 옮겨 기준점을 다르게 하면 함숫값 대응이 늘어 ★5 급 (3) $h(x)=f(x)\\{g(x)+x\\}$ 로 두면 항이 하나 늘어 ★4 유지."
```

```yaml
- id: GN-CALC1-84-154
  page: 84
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    상수항이 정수인 다항함수 $f$ 가 모든 실수 $x$ 에서 $f'(x)\{f'(x)+2\}=8f(x)+12x^2-5$ 를 만족시킬 때 $f(x)$ 를 구하기.
  category: "차수 비교로 f 는 이차 → 항등식 계수 비교 → 두 분기 중 정수 조건으로 기각"
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "좌변은 $f$ 의 차수보다 2 작은 차수의 제곱, 우변은 $f$ 의 차수와 2 중 큰 쪽이라는 비교에서 $f$ 가 이차임을 역추적한다"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "이차·일차·상수 계수를 한꺼번에 비교해 최고차 계수의 이차방정식과 나머지 관계식을 하나의 연립으로 묶는다"
    - step: 3
      type: I-VF
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "최고차 계수의 두 근이 각각 만드는 후보 중 하나는 상수항이 정수가 아니므로, 단서를 재대입해 그 분기를 기각해야 답이 하나로 정해진다"
  insight_count: 3
  depth_score: 2.33
  type_id: null
  type_hint: "도함수 관계식으로 다항함수 결정"
  base_star: null
  effective_star: 5
  star: 5
  premium: true
  rationale: |
    $f$ 의 식이 전혀 주어지지 않아 차수부터 스스로 정해야 하고, 계수 비교에서 최고차 계수가 이차방정식의 두 근으로 갈린다. 두 분기를 모두 끝까지 밀어 본 뒤 「상수항이 정수」라는 단서로 한쪽을 버린다.
    이 단서가 없으면 답이 둘이 되므로 검증이 풀이의 본질이다. 통찰 3개(BW d2 · CON d2 · VF d3)에 저노출 유형 I-VF 포함 → 실력 UP ★4 출발에서 +1 → ★5 게이트 충족.
  tier: star_5
  mechanism_primary: "차수 비교 → f 는 이차 → 계수 비교로 최고차 계수 두 근 → 상수항 정수 조건으로 한 분기 기각"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "$f(x)=3x^2-3x+1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/84-154.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "관계식의 상수(2, 8, 12, $-5$)를 바꿀 수 있다. 제약은 최고차 계수의 이차방정식이 서로 다른 두 실근을 갖되 한쪽만 배제 단서에 걸려야 하고, 살아남는 쪽의 계수가 정수로 떨어지게 고르는 것."
    creative: "(1) 배제 단서를 「최고차 계수가 양수」로 바꾸면 기각 근거만 달라지고 ★5 유지 (2) 단서를 빼고 가능한 $f$ 를 모두 구하게 하면 분기가 모두 살아 I-MI 로 바뀌고 ★4~5 (3) 우변의 차수를 올려 $f$ 를 삼차로 만들면 계수 비교가 네 줄이라 ★5 유지."
```

```yaml
- id: GN-CALC1-84-155
  page: 84
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    $f(1)=-2$ 인 다항함수 $f$ 와 일차함수 $g$ 가 ㈎ $\lim\limits_{x\to 1}\dfrac{f(x)g(x)+4}{x-1}=8$ ㈏ $g(0)=g'(0)$ 을 만족시킬 때 $f'(1)$ 의 값. 5지선다.
  category: "수렴 조건으로 g(1) 확보 → 곱의 미분계수 전개 → g 의 계수 조건"
  M: {s: 3, k: 2, a: 3, t: 0}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "㈎ 가 수렴하므로 분자가 0, 즉 $f(1)g(1)=-4$ 이고 $f(1)=-2$ 에서 $g(1)=2$ 를 얻는다. 동시에 극한값 8 이 $\\{fg\\}'(1)$ 임을 본다"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "㈏ 는 일차함수의 상수항과 기울기가 같다는 뜻이므로 $g(x)=mx+m$ 으로 놓으면 $g(1)=2m$ 에서 $g$ 가 완전히 정해진다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "두 함수의 곱의 미분계수(극한 조건)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $f$ 의 식이 없으므로 곱의 미분법으로 $f'(1)g(1)+f(1)g'(1)=8$ 을 세우고, 필요한 $g(1)$ 과 $g'(1)$ 을 조건에서 확보한다. ㈎ 의 수렴 조건이 $g(1)$ 을, ㈏ 가 $g$ 의 형태를 준다.
    통찰 2개(EQV d2 · d1)로 +1 대상이지만 ★5 게이트의 통찰 3개 요건에 못 미쳐 실력 UP ★4 출발에서 ★4.
  tier: star_4
  mechanism_primary: "수렴 조건 → g(1)=2 · 극한값 = f'(1)g(1)+f(1)g'(1)=8 → g(0)=g'(0) 으로 g 확정 → f'(1)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/84-155.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$f(1)$ 의 값, 분자의 상수(4), 극한값(8)을 바꿀 수 있다. 제약은 분자의 상수가 $-f(1)g(1)$ 과 맞아떨어져야 수렴하고, $g(1)\\ne 0$ 이어야 $f'(1)$ 이 유일하게 정해진다는 것."
    creative: "(1) ㈏ 를 $g(2)=0$ 처럼 다른 형태로 주면 골조는 같고 ★4 유지 (2) $g$ 를 이차함수로 올리면 미지수가 하나 늘어 조건이 더 필요하고 ★5 급 (3) $f'(1)$ 대신 $f(2)$ 를 물으면 $f$ 의 형태 정보가 더 있어야 해 성립하지 않는다."
```

```yaml
- id: GN-CALC1-84-156
  page: 84
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)$ 가 $(x-1)^2$ 으로 나누어떨어지고 $x-2$ 로 나눈 나머지가 $2$ 일 때, $f(x)$ 를 $(x-1)^2(x-2)$ 로 나눈 나머지 $g(x)$ 에 대하여 $\lim\limits_{h\to 0}\dfrac{g(2+2h)-g(2-h)}{h}$ 의 값.
  category: "나머지 g 가 (x-1)^2 의 상수배임을 도출 → g(2)=2 로 확정 → 3g'(2)"
  M: {s: 3, k: 3, a: 2, t: 0}
  M_total: 8
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "$f=(x-1)^2(x-2)Q+g$ 에서 앞 항이 $(x-1)^2$ 의 배수이고 $f$ 도 그러므로 이차 이하인 $g$ 역시 $(x-1)^2$ 의 배수, 즉 $g=k(x-1)^2$ 이어야 한다는 것을 도출한다"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "마지막 극한에 $g(2)$ 를 끼워넣어 $2g'(2)+g'(2)=3g'(2)$ 로 분해한다"
  insight_count: 2
  depth_score: 2.50
  type_id: null
  type_hint: "미분을 이용한 다항식의 나눗셈"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    나머지를 $ax^2+bx+c$ 로 두고 조건을 대입하는 길도 있지만, 나머지가 통째로 $(x-1)^2$ 의 배수라는 것을 보면 미지수가 $k$ 하나로 줄고 $f(2)=2$ 에서 바로 $k=2$ 다. 뒤는 극한 분해뿐이다.
    나눗셈 구조를 미분 쪽으로 옮기는 단계가 깊다(XU d3). 통찰 2개라 ★5 게이트(3개)에는 못 미쳐 실력 UP ★4 출발에서 ★4.
  tier: star_4
  mechanism_primary: "g 는 (x-1)^2 의 상수배 → f(2)=g(2)=2 로 k 확정 → 3g'(2)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$12$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/84-156.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중근 위치(1), 또 다른 인수($x-2$), 그 나머지 값(2), 마지막 극한의 증분 배수(2 와 $-1$)를 바꿀 수 있다. 제약은 두 인수의 근이 서로 달라야 하고, 나머지의 차수가 제수보다 낮아야 한다는 것."
    creative: "(1) 「나누어떨어진다」를 「나머지가 $x-1$」로 바꾸면 $g$ 가 $(x-1)^2$ 의 배수가 아니게 되어 미지수가 둘로 늘고 ★5 급 (2) 마지막에 $g$ 자체를 구하게 하면 극한 분해가 빠져 ★3~4 (3) 제수를 $(x-1)^2(x-2)^2$ 로 올리면 나머지가 삼차라 ★5 급."
```

## 표본 판정 요약 (41문)

- ★ 분포: ★1 3 · ★2 15 · ★3 13 · ★4 9 · ★5 1
- 통찰형 29 · 절차형 12 · premium 1 (84-154)
- 통찰 유형 분포(단계 기준 총 42개): I-EQV 27 · I-XU 5 · I-RT 3 · I-BW 3 · I-VF 2 · I-PD 1 · I-CON 1
- type_hint 상위: 「미분계수의 정의를 이용한 극한값 계산」 8 · 「극한 조건으로 주어진 미분계수와 미정계수 결정」 6 · 「미분을 이용한 다항식의 나눗셈」 5 · 「구간별로 정의된 함수의 미분가능 조건」 5 · 「미분계수 조건으로 미정계수 구하기」 4
- 대상층: 하위권 2 · 중하위권 10 · 중위권 13 · 중상위권 12 · 상위권 4
- 그림: 0문 (이 범위에는 그림이 있는 문항이 없다)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC1-75-125 | 익히기 구역이라 ★1 로 두었으나 삼중곱·거듭제곱 꼴 6문항이라 계산량 체감은 ★2 급 | ★1 / ★2 |
| GN-CALC1-76-129 | 조건 $f'(1)=g'(1)$ 의 정리를 I-EQV 로 볼지 단순 식 정리(절차형)로 볼지 경계. 절차형으로 보면 ★2 | ★2 / ★3 |
| GN-CALC1-81-e14 · 81-138 · 81-139 · 84-152 · 84-156 | 「미분을 이용한 다항식의 나눗셈」을 단원 경계 결합 I-XU 로 잡았으나, 교재 안에서는 이 단원의 표준 기법이라 XU 인정 여부가 경계. 불인정하면 각각 −1 | ★2~★4 |
| GN-CALC1-83-146 | 곱의 미분법에서 한 항만 살아남는 구조 인식을 I-PD 로 잡았으나 I-RT·I-EQV 후보도 있음. 카탈로그 설계 때 통일 필요 | ★4 |
| GN-CALC1-84-153 | 통찰 3개·depth 3 이지만 저노출 유형(SC·VF·SYM·XU) 부재로 ★5 게이트 탈락 → ★4. 수능 기출 체감 난도는 ★5 쪽 | ★4 / ★5 |
| GN-CALC1-84-156 | 통찰 2개라 ★5 게이트(3개 이상)에 못 미쳐 ★4. XU d3 의 깊이만 보면 ★5 후보 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고).

- **따로 세워야 할 유형**: ① 「미분을 이용한 다항식의 나눗셈」(5문) — 공통수학1 나눗셈과 결합하는 독립 기법이고 「나누어떨어짐(중근)」·「나머지 구하기」·「나머지가 주어지고 계수 역산」 세 변형이 한 계열을 이룬다. ② 「구간별로 정의된 함수의 미분가능 조건」(5문) — 절댓값 꼴(82-145)과 분기 기각이 붙는 꼴(83-151)까지 한 유형의 난이도 계단으로 묶을 수 있다. ③ 「인수의 곱으로 주어진 함수의 근에서의 미분계수」(83-146) — 문항 수는 하나지만 골조가 완전히 독립이라 별도 유형이 맞다.
- **통합해도 될 유형**: 「미분계수의 정의를 이용한 극한값 계산」(8문)과 「극한 조건으로 주어진 미분계수와 미정계수 결정」(6문)은 모두 *분자를 $f(x)-f(a)$ 꼴로 복원한다*는 한 가지 통찰(I-EQV)에 기대고, 뒤에 미정계수 연립이 붙느냐 아니냐로만 갈린다. 상위 유형 하나에 「극한값을 묻는 꼴」·「미정계수를 묻는 꼴」 두 하위 유형을 두는 편이 낫다. 「곱의 미분법으로 미분계수 구하기」와 「미분계수 조건으로 미정계수 구하기」도 같은 관계다.
- **★ 판정 메모**: 이 단원은 I-EQV 한 유형이 통찰 단계의 64%를 차지한다. 카탈로그를 만들 때 EQV 가 이 단원의 학습 자산화 상위 유형에 해당하는지 검토하고, 해당한다면 §2.9 감쇠 규칙에 따라 EQV depth 3 을 자동 강등할지 결정해야 한다. 이 파일에서는 EQV 에 depth 3 을 준 문항이 없어 감쇠의 영향을 받지 않는다.
