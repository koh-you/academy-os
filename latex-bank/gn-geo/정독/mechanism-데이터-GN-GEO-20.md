---
name: mechanism-데이터-GN-GEO-20
description: 개념원리 기하 20 벡터의 실수배(1/1 · 158~166쪽 · 35문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 기하 (22개정 · 학생용) · 전사본 latex-bank/gn-geo
  section: 20 벡터의 실수배
  unit_code: GEO-20
  part: "1/1"
  extract_range: "158~166쪽 · 158-314~166-343"
  total_problems: 35
  unit_total: 35
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·level·tag)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-geo/items/<id>.tex
  image_source: latex-bank/gn-geo/figures/ (crops.json)
---

# 개념원리 기하 · 20 벡터의 실수배 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 기하 20단원 「벡터의 실수배」 158~166쪽 35문항 전수를 다룬다. 구역은 전사본 group 순서대로 개념원리 익히기(3) · 필수·발전 예제(17) · 연습문제 STEP 1(5) · STEP 2(6) · 실력 UP(4) 이다.

벤더 난이도 신호는 구역·tag·level 로 읽었다. 익히기와 tag 「확인체크」 중 개념 확인 수준은 ★1~2, tag 「필수」 예제와 그에 딸린 확인체크는 ★2, STEP 1 은 ★2, STEP 2 는 ★3, 실력 UP 은 ★4 를 출발점으로 삼고 M_total·통찰로 ±1 조정했다(통찰 0·M_total ≤ 5 → −1 · 통찰 2개 이상이거나 depth 2 이상 통찰이 골조의 핵심이거나 M_total ≥ 8 → +1). ★5 는 통찰 3개 이상 + SC/VF/SYM/XU 가 있을 때만 주는데, 이 범위에서는 novelty_score 를 평가하지 않으므로(전 블록 0) ★5 를 부여하지 않았다.

이 단원은 도구가 셋뿐이다 — ⑴ 실수배의 분배법칙으로 식을 정리하기 ⑵ 서로 평행하지 않은 두 벡터를 기저로 삼아 계수비교하기 ⑶ 평행·일직선 조건을 「실수배가 존재한다」로 옮기기. 그래서 문항 사이의 차이는 대부분 **어떤 도형에서 기저를 잡느냐**에서 생긴다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-GEO-158-314
  page: 158
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "익히기"
  summary: |
    모눈 위에 두 벡터 a, b 가 주어졌을 때 ⑴ 2a ⑵ 3b ⑶ 2a+3b ⑷ -2a+3b 를 각각 모눈에 작도하기.
  category: "실수배 작도 → 삼각형법으로 합 작도"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 실수배와 합을 모눈에 작도하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    모눈에서 a, b 의 가로·세로 칸수를 읽어 실수배만큼 늘이고, 음수배는 방향을 뒤집는다. 합은 두 화살표를 이어 붙이면 끝난다.
    네 소문항이 모두 같은 절차의 반복이라 Mₛ 만 2. 익히기 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "모눈에서 a, b 의 칸수 읽기 → 실수배로 길이·방향 조정 → 이어 붙여 합 작도"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 (모눈 위에 ⑴ $2\vec{a}$: 오른쪽 2칸 ⑵ $3\vec{b}$: 오른쪽 3칸·위 3칸 ⑶ $2\vec{a}+3\vec{b}$: 오른쪽 5칸·위 3칸 ⑷ $-2\vec{a}+3\vec{b}$: 오른쪽 1칸·위 3칸 화살표를 그린 그림 — 답지 참조)'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-158-314.png"
  latex: latex-bank/gn-geo/items/158-314.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "실수배 계수(2, 3)와 부호 조합을 바꿀 수 있다. 제약: a, b 의 칸수가 정수이므로 결과 화살표의 끝점도 격자점에 떨어져야 하고, 주어진 모눈 크기(5×4 · 7×5) 안에 들어가야 한다."
    creative: "⑴ 1/2 a 처럼 분수배를 섞어 격자 반칸을 쓰게 하기(★1 유지) ⑵ 작도 대신 '2a+3b 와 같은 벡터를 그림에서 고르기'로 역방향 전환(★2 · I-BW d1) ⑶ a, b 를 격자가 아니라 크기와 사잇각으로 주면 Mₐ 가 올라 ★2."
```

```yaml
- id: GN-GEO-158-315
  page: 158
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "익히기"
  summary: |
    ⑴ 3(2a+b-3c)-(6a+5b-c) ⑵ (1/2)(a+2b-3c)-(3/2)(a-2b+c) 를 간단히 하기.
  category: "실수배의 분배법칙 → 동류 벡터끼리 정리"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터 실수배의 분배법칙으로 식 간단히 하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    다항식 정리와 완전히 같은 절차다. 괄호를 풀고 a, b, c 의 계수를 각각 더한다.
    ⑵ 의 분수 계수 때문에 Mₖ 만 2. 익히기·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "분배법칙으로 괄호 풀기 → a, b, c 계수별로 합산"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $-2\vec{b}-8\vec{c}$ ⑵ $-\vec{a}+4\vec{b}-3\vec{c}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/158-315.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바깥 계수(3, -1, 1/2, -3/2)와 안쪽 계수를 자유롭게 바꿀 수 있다. 제약: 한 문자의 계수가 0 으로 떨어져야 '간단히'의 맛이 살고, 분수 계수는 결과가 정수나 간단한 기약분수로 남게 잡는다."
    creative: "⑴ 결과를 주고 빈 계수를 찾게 하면 역방향(★2 · I-BW d1) ⑵ c = a+2b 처럼 한 벡터를 다른 둘로 바꿔 답이 a, b 만으로 나오게 하면 ★2 ⑶ '간단히 한 식이 영벡터가 되도록 하는 계수'를 물으면 계수비교가 붙어 ★2."
```

```yaml
- id: GN-GEO-158-316
  page: 158
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "익히기"
  summary: |
    격자 위 네 벡터 a, b, c, d 중 벡터 p 와 평행한 것을 모두 고르기.
  category: "평행 판정 → 실수배로 나타나는지 확인"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 평행 판정(실수배로 나타나는지 확인)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    격자에서 각 벡터의 가로·세로 칸수를 읽고 p 의 칸수와 비례하는지만 본다.
    방향이 반대인 음수배도 평행이라는 점이 유일한 함정(T-부호). 익히기·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "격자에서 각 벡터의 성분 읽기 → p 의 실수배인지 비례 확인(음수배 포함)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\vec{b}$, $\vec{c}$'
  answer_source: "답지"
  figure: "crop:fig-158-316.png"
  latex: latex-bank/gn-geo/items/158-316.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 벡터의 격자 성분을 바꿀 수 있다. 제약: 평행한 것과 아닌 것이 섞여야 하고, 반대 방향(음수배) 후보가 적어도 하나 있어야 함정이 살아난다. 그림 라벨 a~d, p 는 고정."
    creative: "⑴ '크기가 p 의 2배인 벡터'를 고르게 하면 크기 계산이 붙어 ★2 ⑵ 평행한 것의 개수를 세게 하면 ★1 유지 ⑶ 좌표 없이 벡터식으로만 주고(예: p=a+2b) 평행 여부를 계수비교로 따지게 하면 ★2."
```

### 필수·발전 예제

```yaml
- id: GN-GEO-159-e4
  page: 159
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 2(a+x)-3(2b-a)=x 를 만족시키는 x 를 a, b 로 나타내기 ⑵ 2x+3y=5a, 3x+4y=6a 일 때 x, y 를 a 로 나타내기.
  category: "벡터를 미지수처럼 → 이항·소거로 풀기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터 방정식·연립 벡터방정식 풀기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    벡터를 문자처럼 다루면 일차방정식·연립일차방정식과 같은 절차다. ⑴ 은 x 를 한쪽으로 모으고, ⑵ 는 계수를 맞춰 소거한다.
    새로 배우는 것은 '실수배가 분배·결합법칙을 따른다'는 보증뿐이라 통찰 카운트는 0. 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "괄호 풀기 → x(또는 x, y)를 한쪽으로 모으기 → 계수로 나누거나 소거 → a, b 로 표현"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\vec{x}=-5\vec{a}+6\vec{b}$ ⑵ $\vec{x}=-2\vec{a}$, $\vec{y}=3\vec{a}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/159-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 바깥 계수와 ⑵ 의 연립 계수행렬을 바꿀 수 있다. 제약: ⑴ 은 x 의 계수가 0 이 되면 안 되고, ⑵ 는 2·4-3·3 처럼 행렬식이 0 이 아니어야 유일해가 나온다. 답이 정수 계수로 떨어지게 잡는다."
    creative: "⑴ x 의 계수가 0 이 되도록 만들어 '해가 없거나 무수히 많다'를 따지게 하면 ★3(I-MI d2) ⑵ 우변을 5a 가 아니라 a+b 로 바꾸면 기저가 둘이 되어 계수비교가 붙는다(★2 유지) ⑶ x, y 를 다 구하지 않고 x+2y 같은 조합만 묻게 하면 일차결합 갈래가 생겨 ★3(I-SC d1)."
```

```yaml
- id: GN-GEO-159-317
  page: 159
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ 3(a+b+x)=2(3b-2a)+2x ⑵ 4(x-a+2b)=3(2a-(2/3)b)-x 를 만족시키는 x 를 a, b 로 나타내기.
  category: "괄호 풀기 → x 항 이항 → 계수로 나누기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터 방정식을 풀어 x 를 두 기본 벡터로 나타내기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    159-e4 ⑴ 의 확인체크. 양변에 x 가 있으므로 x 항을 한쪽에 모으고 나머지를 반대쪽으로 넘긴다.
    ⑵ 는 분수 계수와 -x 이항에서 부호가 갈리는 정도. 통찰 없음·M_total 6 → 필수 예제와 같은 ★2.
  tier: star_2
  mechanism_primary: "분배법칙으로 괄호 풀기 → 양변의 x 를 한쪽으로 모으기 → 남은 계수로 나누어 x 를 a, b 로"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\vec{x}=-7\vec{a}+3\vec{b}$ ⑵ $\vec{x}=2\vec{a}-2\vec{b}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/159-317.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양변의 x 계수(3 과 2 · 4 와 -1)와 a, b 계수를 바꿀 수 있다. 제약: 좌우 x 계수가 달라야 하고(같으면 x 가 소거된다) 나눈 뒤 계수가 정수로 떨어지게 잡는다."
    creative: "⑴ 좌우 x 계수를 같게 만들어 '이를 만족시키는 x 가 존재하지 않음'을 보이게 하면 ★3 ⑵ 세 번째 벡터 c 를 넣어 x 를 a, b, c 로 나타내게 하면 ★2 유지 ⑶ x 대신 |x| 나 x 의 방향을 묻게 하면 크기 계산이 붙어 ★3."
```

```yaml
- id: GN-GEO-159-318
  page: 159
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    2x-y=-a, -3x+2y=-b 일 때 두 벡터 x, y 를 a, b 로 나타내기.
  category: "연립 벡터방정식 → 소거 → 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "연립 벡터방정식을 소거법으로 풀기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    159-e4 ⑵ 의 확인체크. 계수를 맞춰 y 를 소거하고 x 를 구한 뒤 되대입한다.
    우변이 -a, -b 로 부호가 붙어 있어 T-부호 실수가 잦다. 통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "두 식의 계수를 맞춰 한 벡터 소거 → x 를 a, b 로 → 되대입해 y"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\vec{x}=-2\vec{a}-\vec{b}$, $\vec{y}=-3\vec{a}-2\vec{b}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/159-318.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수행렬 (2, -1 / -3, 2) 과 우변 (-a, -b) 를 바꿀 수 있다. 제약: 행렬식이 0 이 아니어야 하고(2·2-(-1)(-3)=1) 행렬식이 ±1 이면 답이 정수 계수로 깔끔하다."
    creative: "⑴ 행렬식이 0 이 되게 만들어 해의 존재를 따지게 하면 ★3(I-MI d2) ⑵ x, y 를 다 구하지 말고 x-y 만 묻게 하면 일차결합 갈래가 생겨 ★2~3(I-SC d1) ⑶ 우변을 a, b 가 아니라 OA, OB 로 주고 답을 점의 위치로 해석하게 하면 ★3."
```

```yaml
- id: GN-GEO-159-319
  page: 159
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    2x-3y=a, 3x-5y=b 일 때 벡터 x-3y 를 a, b 로 나타내기.
  category: "연립 → x, y 를 구하거나 두 식의 일차결합으로 직행"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x, y 를 각각 구하는 갈래 대신 두 식에 적당한 실수배를 곱해 더하면 x-3y 가 바로 나오는 갈래를 선택"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "연립 벡터방정식에서 주어진 일차결합의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표준 갈래는 연립을 풀어 x, y 를 구한 뒤 x-3y 에 대입하는 것이고, 빠른 갈래는 두 식을 α배·β배 해서 x 계수 1, y 계수 -3 이 되게 맞추는 것이다.
    두 갈래 모두 계수가 정수로 떨어져 난이도 차가 크지 않아 I-SC 는 depth 1. 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "두 식의 일차결합으로 x-3y 만들기(또는 연립을 풀어 x, y 구한 뒤 대입) → a, b 로 표현"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$-4\vec{a}+3\vec{b}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/159-319.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수행렬 (2, -3 / 3, -5) 과 묻는 조합 x-3y 를 바꿀 수 있다. 제약: 행렬식이 0 이 아니어야 하고(2·(-5)-(-3)·3=-1), 묻는 조합의 결합계수 α, β 가 정수가 되게 잡으면 빠른 갈래가 살아난다."
    creative: "⑴ 묻는 조합을 연립의 두 식과 일차종속이 되게 잡으면 한 식만으로 답이 나와 ★1 ⑵ x, y 를 구하면 분수가 나오도록 계수를 잡으면 일차결합 갈래의 이득이 커져 ★3(I-SC d2) ⑶ 'x-3y 의 크기'를 물으면 기저의 크기·사잇각 조건이 필요해 ★3."
```

```yaml
- id: GN-GEO-160-e5
  page: 160
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    정육각형 ABCDEF 에서 세 대각선 AD, BE, CF 의 교점을 O 라 하고 AB=a, BC=b 일 때 ⑴ BO ⑵ AE ⑶ CE ⑷ EB 를 a, b 로 나타내기.
  category: "정육각형의 평행 관계 읽기 → 경로를 변벡터의 합으로 분해"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정육각형의 배치에서 AO=BC, OB=-AB 같은 평행·합동 관계를 읽어 기하 그림을 벡터 등식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정다각형에서 변·대각선 벡터를 두 기본 벡터로 나타내기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정육각형은 중심 O 를 지나는 세 대각선이 각 변과 평행한 조각으로 쪼개진다. AO=BC=b, OB=-a 를 잡으면 나머지는 경로를 이어 붙이는 덧셈이다.
    네 소문항이 모두 같은 도구라 Mₛ 2. 기하 배치를 벡터로 옮기는 I-RT 1개(d1) · M_total 6 → 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "정육각형에서 AO=b, OB=-a 파악 → 목표 벡터를 O 를 거치는 경로로 분해 → a, b 의 합으로"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '⑴ $-\vec{a}+\vec{b}$ ⑵ $-\vec{a}+2\vec{b}$ ⑶ $-2\vec{a}+\vec{b}$ ⑷ $2\vec{a}-2\vec{b}$'
  answer_source: "본문 풀이"
  figure: "crop:fig-160-e5.png"
  latex: latex-bank/gn-geo/items/160-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "묻는 벡터를 다른 꼭짓점 쌍(AF, DF, FC 등)으로 바꿀 수 있다. 제약: 기저를 AB=a, BC=b 로 고정하면 모든 변·대각선이 정수 계수로 나오므로 그림의 꼭짓점 라벨 순서(ABCDEF 반시계)를 바꾸지 않는다."
    creative: "⑴ 기저를 AB, AF 로 바꾸면 계수 부호가 달라져 같은 골조로 새 문항(★2) ⑵ 정육각형 대신 정팔각형으로 바꾸면 변 벡터가 두 기본 벡터로 안 떨어져 ★4 이상 ⑶ 답으로 나온 벡터들의 합이 영벡터임을 보이게 하면 대칭 활용이 붙어 ★3(I-SYM d2)."
```

```yaml
- id: GN-GEO-160-320
  page: 160
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    평행사변형 ABCD 의 두 대각선 교점을 O 라 하고 OD=a, OC=b 일 때 BA+CA 를 a, b 로 나타내기.
  category: "대각선이 서로 이등분 → 반대 방향 벡터로 바꾸기 → 차로 표현"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'두 대각선의 교점' 이라는 기하 조건을 OA=-OC, OB=-OD 라는 벡터 등식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "평행사변형의 대각선 교점을 기준점으로 한 벡터 표현"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    O 가 두 대각선의 중점이므로 OA=-b, OB=-a 로 바꾼 뒤 BA=OA-OB, CA=OA-OC 로 옮기면 끝난다.
    통찰 0·M_total ≤ 5 의 -1 후보였으나 중점 조건을 벡터로 옮기는 단계가 골조의 핵심이라 I-EQV 1개로 세고 ★2 유지.
  tier: star_2
  mechanism_primary: "대각선 교점 → OA=-OC, OB=-OD → BA=OA-OB, CA=OA-OC → a, b 로 정리"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$\vec{a}-3\vec{b}$'
  answer_source: "답지"
  figure: "crop:fig-160-320.png"
  latex: latex-bank/gn-geo/items/160-320.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "묻는 조합을 BA+CA 대신 AB+AD, BD+CA 등으로 바꿀 수 있다. 제약: 기저를 OD=a, OC=b 로 고정하면 모든 변·대각선이 ±a, ±b 의 정수 결합이므로 그림의 꼭짓점 순서(ABCD)는 고정."
    creative: "⑴ 평행사변형을 사다리꼴로 바꾸면 대각선이 이등분되지 않아 비율 조건이 필요해 ★4 ⑵ 기저를 OA, OB 로 주면 부호만 달라진 같은 골조(★2) ⑶ '교점 O 가 AC 를 m:n 으로 나눈다'를 조건으로 주면 내분 표현이 붙어 ★3."
```

```yaml
- id: GN-GEO-160-321
  page: 160
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    정사면체에서 모서리 CD 의 중점을 M 이라 하고 AM=a, CD=b, AB=c 일 때 BC=pa+qb+rc 를 만족시키는 실수 p, q, r 에 대하여 p+q+r 의 값.
  category: "공간 경로 분해 → 중점 조건으로 CD 의 절반 만들기 → 계수 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "공간도형의 배치를 BC=AC-AB 로 옮기고 다시 AC=AM+MC=a-(1/2)b 로 중점을 거쳐 분해"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "공간도형에서 한 벡터를 세 기본 벡터로 분해하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    기저가 a, b, c 로 셋이고, 그중 b=CD 는 중점 M 을 거쳐야 쓰인다. BC=AC-AB, AC=AM+MC 두 번의 분해가 필요하다.
    MC 가 CD 의 -1/2 배라는 부호가 최대 함정(T-부호). 핵심 통찰 depth 2 · M_total 7 → 확인체크 출발점 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "BC=AC-AB → AC=AM+MC=a-(1/2)b → BC=a-(1/2)b-c → p+q+r"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{1}{2}$'
  answer_source: "답지"
  figure: "crop:fig-160-321.png"
  latex: latex-bank/gn-geo/items/160-321.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "묻는 벡터를 BD, BM, DB 등으로 바꾸거나 p+q+r 대신 pqr, p-q+r 로 바꿀 수 있다. 제약: M 이 중점이라 b 의 계수는 항상 ±1/2 이므로 답이 분수로 나오는 것을 감안한다. 정사면체라는 조건 자체는 분해에 쓰이지 않으므로 삼각뿔로 바꿔도 된다."
    creative: "⑴ M 을 CD 의 1:2 내분점으로 바꾸면 계수가 -1/3 이 되어 같은 골조·★3 유지 ⑵ 기저를 AB, AC, AD 로 주면 분해가 한 단계로 줄어 ★2 ⑶ 정사면체의 모서리 길이를 주고 |BC| 를 묻게 하면 크기 계산이 붙어 ★4."
```

```yaml
- id: GN-GEO-161-e6
  page: 161
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    영벡터가 아니고 서로 평행하지 않은 a, b 에 대하여 (4m-3n)a+(2m+3n)b = a+2b 를 만족시키는 실수 m, n 의 값.
  category: "계수비교 → m, n 연립"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 벡터가 서로 같을 조건(계수비교)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a, b 가 영벡터가 아니고 평행하지 않다는 전제 덕분에 좌우변의 a 계수끼리, b 계수끼리 같다고 놓을 수 있다.
    그 다음은 4m-3n=1, 2m+3n=2 를 푸는 실수 연립일 뿐이다. 계수비교는 이 단원의 정리 그 자체라 통찰 카운트 0 · M_total 7 → 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "a, b 가 평행하지 않음 → 양변 계수비교 → m, n 연립을 풀기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$m=\dfrac{1}{2}$, $n=\dfrac{1}{3}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/161-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "m, n 의 계수(4, -3, 2, 3)와 우변(1, 2)을 바꿀 수 있다. 제약: 연립의 행렬식 4·3-(-3)·2=18 이 0 이 아니어야 하고, 답이 지나치게 지저분한 분수가 되지 않게 우변을 고른다."
    creative: "⑴ 행렬식을 0 으로 만들어 '만족시키는 m, n 이 존재하지 않음'이나 '무수히 많음'을 따지게 하면 ★3(I-MI d2) ⑵ '평행하지 않다'는 전제를 빼고 왜 필요한지 서술하게 하면 ★3 ⑶ 우변을 영벡터로 두고 m, n 이 0 뿐임을 보이게 하면 일차독립의 정의로 직결(★2)."
```

```yaml
- id: GN-GEO-161-322
  page: 161
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    서로 평행하지 않고 영벡터가 아닌 a, b 에 대하여 (3x+y-7)a+(2x-y-8)b = 0 이 성립할 때 x+y 의 값.
  category: "일차독립 → 각 계수 = 0 → 연립"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일차독립인 두 벡터의 결합이 영벡터일 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    우변이 영벡터이므로 두 계수가 각각 0 이다. 3x+y=7, 2x-y=8 을 더하면 x 가 바로 나온다.
    161-e6 과 같은 도구이고 계산은 더 가볍다. 통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "a, b 일차독립 → 두 계수를 각각 0 으로 → x, y 연립 → x+y"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/161-322.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 (3, 1, -7 / 2, -1, -8) 과 묻는 조합(x+y)을 바꿀 수 있다. 제약: 행렬식 3·(-1)-1·2=-5 가 0 이 아니어야 유일해가 나오고, 상수항을 고르면 x, y 가 정수로 떨어지게 맞춘다."
    creative: "⑴ 우변을 영벡터 대신 a-b 로 바꾸면 161-e6 형태(★2 유지) ⑵ 계수에 x², xy 를 넣어 연립이 이차가 되게 하면 해의 개수 분기가 생겨 ★4(I-MI d2) ⑶ a, b 가 평행한 경우를 따로 묻게 하면 ★3."
```

```yaml
- id: GN-GEO-161-323
  page: 161
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    영벡터가 아니고 서로 평행하지 않은 a, b 에 대하여 (3k+2l)a+(k-l-2)b = (k-l)a+(l+5)b 를 만족시키는 실수 k, l 에 대하여 k-l 의 값.
  category: "양변 계수비교 → k, l 연립 → 차 구하기"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 벡터가 서로 같을 조건(양변 계수비교)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌우 양변 모두 a, b 의 결합이므로 a 계수끼리·b 계수끼리 같다고 놓아 2k+3l=0, k-2l=7 을 얻는다.
    161-e6·322 와 같은 도구이고 이항 정리가 한 겹 더 있을 뿐이다. 통찰 0·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "양변 계수비교 → 이항해 k, l 연립 → 풀어서 k-l"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/161-323.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양변 네 계수식과 묻는 조합(k-l)을 바꿀 수 있다. 제약: 이항해서 얻은 연립의 행렬식이 0 이 아니어야 하고, k, l 이 정수로 떨어지게 상수항을 고른다."
    creative: "⑴ 묻는 것을 k, l 각각이 아니라 k/l 이나 kl 로 바꾸면 ★2 유지 ⑵ 계수에 매개변수 t 를 하나 더 넣고 해가 존재할 t 를 묻게 하면 ★4(I-BW d2) ⑶ 세 벡터 a, b, c 의 결합으로 늘리면 계수비교가 세 줄이 되어 ★3."
```

```yaml
- id: GN-GEO-161-324
  page: 161
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    네 점 O, A, B, C 에 대하여 OA=a, OB=b, OC=2a+kb 이고 4BC = mBA 일 때 실수 k, m 에 대하여 mk 의 값. (a, b 는 영벡터가 아니고 서로 평행하지 않다.)
  category: "점 벡터의 차로 BC, BA 표현 → 계수비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "BC, BA 를 기준점 O 에서 본 벡터의 차(OC-OB, OA-OB)로 옮겨야 계수비교가 가능해짐"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "기준점을 바꾼 벡터의 차 + 계수비교로 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    BC=OC-OB=2a+(k-1)b, BA=OA-OB=a-b 로 옮긴 뒤 4BC=mBA 의 계수를 비교하면 m 이 먼저 정해지고 k 가 따라온다.
    점 표기를 벡터 차로 바꾸는 단계가 추가됐을 뿐 도구는 계수비교 하나. 통찰 1개(d1)·M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "BC=OC-OB, BA=OA-OB → 4BC=mBA 계수비교 → m, k → mk"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$-8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/161-324.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "OC 의 계수(2, k)와 등식의 배수(4)를 바꿀 수 있다. 제약: a 의 계수비교에서 m 이 먼저 정해지므로 OC 의 a 계수와 배수가 정수로 나누어떨어지게 잡는다."
    creative: "⑴ 4BC=mBA 를 'B, A, C 가 한 직선 위'로 바꾸면 163-e8 유형과 합류(★2) ⑵ OC 를 2a+kb 대신 ka+kb 로 두면 미지수가 하나로 줄어 ★2 ⑶ m 의 부호로 C 가 선분 BA 의 안·밖 어디인지까지 묻게 하면 ★3(I-MI d2)."
```

```yaml
- id: GN-GEO-162-e7
  page: 162
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    서로 평행하지 않고 영벡터가 아닌 a, b 에 대하여 p=2a+b, q=a-2b, r=ka-5b 일 때 q-r 와 p+q 가 서로 평행하도록 하는 실수 k 의 값.
  category: "두 합성벡터를 a, b 로 정리 → 실수배 조건 → 계수비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 벡터가 서로 평행할 조건(실수배 존재 → 계수비교)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    q-r=(1-k)a+3b, p+q=3a-b 로 각각 정리한 뒤 q-r = t(p+q) 로 놓고 계수비교하면 t 가 먼저, 이어 k 가 나온다.
    '평행 = 실수배가 존재' 는 이 유형의 정의라 통찰 카운트 0. M_total 7 · 필수 예제 → ★2.
  tier: star_2
  mechanism_primary: "q-r, p+q 를 a, b 로 정리 → q-r=t(p+q) 로 놓고 계수비교 → t → k"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$10$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/162-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "p, q, r 의 계수와 조합(q-r, p+q)을 바꿀 수 있다. 제약: 두 합성벡터 중 어느 쪽도 영벡터가 되면 안 되고, 비례식 계수가 0 이 되는 자리를 피해야 k 가 유일하게 정해진다."
    creative: "⑴ '평행' 대신 '서로 같다'로 바꾸면 미지수 두 개 연립(★2) ⑵ r 의 두 계수를 모두 미지수로 두고 평행이 되는 (k, l) 관계식을 묻게 하면 ★3(Mₐ 상승) ⑶ 평행 조건을 만족시키는 k 가 존재하지 않도록 계수를 설계해 이유를 쓰게 하면 ★4(I-BW d2)."
```

```yaml
- id: GN-GEO-162-325
  page: 162
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    p=4a-6b, q=2a+kb 가 서로 평행할 때 실수 k 의 값. (a, b 는 영벡터가 아니고 서로 평행하지 않다.)
  category: "평행 → 계수 비례 → k"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 벡터가 서로 평행할 조건(계수 비례)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    이미 a, b 로 정리된 두 벡터라 4:2 = -6:k 한 줄이면 끝난다(또는 p=2q 를 보고 즉시).
    통찰 없음·M_total 5 로 -1 조정. 확인체크 출발점 ★2 에서 1단 내려 ★1 — 익히기 문항과 체감이 같다.
  tier: star_1
  mechanism_primary: "p=tq 로 놓고 a, b 계수비교 → t → k(또는 계수 비례식 한 줄)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/162-325.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "p, q 의 계수(4, -6, 2)를 바꿀 수 있다. 제약: a 계수끼리 나누어떨어지게 잡으면 k 가 정수로 나오고, a 계수가 0 이 되면 비례식이 무너지므로 피한다."
    creative: "⑴ 계수에 미지수를 두 개 넣어 관계식을 묻게 하면 ★2 ⑵ p, q 를 정리되지 않은 합성벡터(p+q, q-r 꼴)로 주면 162-e7·326 수준(★2) ⑶ '평행하지 않도록 하는 k 의 범위'로 뒤집으면 ★2(I-BW d1)."
```

```yaml
- id: GN-GEO-162-326
  page: 162
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    서로 평행하지 않고 영벡터가 아닌 a, b 에 대하여 p=9a-3b, q=2a+kb, r=-8a+2b 일 때 p-q 와 q+r 가 서로 평행하도록 하는 실수 k 의 값.
  category: "두 합성벡터 정리 → 평행 → 계수 비례(k 가 양쪽에 등장)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 벡터가 서로 평행할 조건(미지수가 양쪽에 있는 경우)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    p-q=7a-(3+k)b, q+r=-6a+(k+2)b 로 정리하면 k 가 양쪽 b 계수에 모두 들어 있어 비례식이 k 에 대한 일차방정식이 된다.
    162-e7 보다 한 겹 복잡하지만 도구는 같다. 통찰 0·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "p-q, q+r 를 a, b 로 정리 → 계수 비례식 세우기 → k 에 대한 일차방정식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/162-326.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "p, q, r 의 계수를 바꿀 수 있다. 제약: 두 합성벡터의 a 계수가 0 이 아니어야 비례식이 서고, k 가 양쪽에 남아야 이 문항의 성격이 유지된다. 비례식이 k 의 이차식이 되면 난이도가 달라진다."
    creative: "⑴ 계수를 조정해 비례식이 k 의 이차방정식이 되게 하면 해가 둘이라 ★4(I-MI d2) ⑵ q+r 대신 p+q+r 를 쓰면 같은 골조·★2 유지 ⑶ '어떤 k 에 대해서도 평행하지 않음'을 보이게 하면 ★4(I-BW d2)."
```

```yaml
- id: GN-GEO-163-e8
  page: 163
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    서로 다른 네 점 O, A, B, C 에 대하여 OA=2a+b, OB=a-b, OC=4a+mb 일 때 세 점 A, B, C 가 한 직선 위에 있도록 하는 실수 m 의 값. (a, b 는 영벡터가 아니고 서로 평행하지 않다.)
  category: "일직선 조건 → AB, AC 를 구해 실수배 → 계수비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'세 점이 한 직선 위에 있다'를 'AC=tAB 인 실수 t 가 존재한다'로 옮겨야 계수비교를 쓸 수 있음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "세 점이 한 직선 위에 있을 조건(AC=tAB)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB=OB-OA=-a-2b, AC=OC-OA=2a+(m-1)b 로 옮긴 뒤 AC=tAB 의 a 계수에서 t 가 정해지고 b 계수에서 m 이 따라온다.
    기준점 O 를 A 로 바꾸는 한 단계가 이 유형의 전부다. 통찰 1개(d1)·M_total 7 → 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "AB=OB-OA, AC=OC-OA → AC=tAB 로 놓고 계수비교 → t → m"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/163-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "OA, OB, OC 의 계수를 바꿀 수 있다. 제약: AB 가 영벡터가 되면 안 되고(A≠B), AB 의 a 계수가 0 이 아니어야 t 가 한 번에 정해진다. t 가 정수가 되게 잡으면 m 도 정수."
    creative: "⑴ 미지수를 OC 의 a 계수에도 넣어 (k, m) 관계식을 묻게 하면 ★3 ⑵ '한 직선 위에 있지 않도록 하는 m 의 값'으로 뒤집으면 여집합 판단이 붙어 ★3(I-BW d1) ⑶ OC 를 sOA+tOB 로 두고 s+t=1 임을 유도하게 하면 165-338 골조와 합류(★3 · I-EQV d2)."
```

```yaml
- id: GN-GEO-163-327
  page: 163
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    서로 다른 네 점 O, A, B, C 에 대하여 OA=a, OB=b, OC=3a+mb 일 때 세 점 A, B, C 가 한 직선 위에 있도록 하는 실수 m 의 값. (a, b 는 서로 평행하지 않다.)
  category: "일직선 조건 → AB, AC → 실수배 계수비교"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "일직선 조건을 AC=tAB 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "세 점이 한 직선 위에 있을 조건(AC=tAB)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    163-e8 의 확인체크. OA, OB 가 바로 a, b 라서 AB=-a+b, AC=2a+mb 로 즉시 나오고 계수비교 두 줄이면 끝난다.
    통찰 1개(d1)·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "AB=b-a, AC=2a+mb → AC=tAB 계수비교 → t=-2 → m"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/163-327.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "OC 의 a 계수(3)를 바꿀 수 있다. 제약: AC 의 a 계수가 AB 의 a 계수(-1)로 나누어떨어지면 t 와 m 이 정수로 나온다. OA=a, OB=b 를 유지하면 계산이 가장 가볍다."
    creative: "⑴ OC=3a+mb 대신 OC=ka+3b 로 미지수 자리를 옮기면 같은 골조(★2) ⑵ 'C 가 선분 AB 위(내분)에 있도록'으로 바꾸면 t 의 범위 조건이 붙어 ★3(I-MI d2) ⑶ 네 점이 한 평면 위 조건(공간)으로 확장하면 ★4."
```

```yaml
- id: GN-GEO-163-328
  page: 163
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    서로 다른 네 점 O, A, B, C 에 대하여 OC=3OA-2OB 일 때 세 점 A, B, C 가 한 직선 위에 있음을 보이기(증명형).
  category: "AC 를 계산해 AB 의 실수배임을 보이기"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "결론 '한 직선 위'를 'AC 가 AB 의 실수배'로 바꿔 놓고, 그 실수배를 실제로 만들어 보이는 역순 서술"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "세 점이 한 직선 위에 있음을 벡터로 증명하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AC=OC-OA=2OA-2OB=-2(OB-OA)=-2AB 한 줄이면 끝난다. 계수 합 3-2=1 을 알아채면 더 빠르다.
    답을 구하는 문항이 아니라 서술이라 Mₛ 에 증명 정리 부담을 포함. 통찰 1개(d1)·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "AC=OC-OA 계산 → 2(OA-OB)=-2AB 로 정리 → 실수배이므로 A, B, C 는 한 직선 위"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '풀이 참조 ($\overrightarrow{\pt{AC}}=\overrightarrow{\pt{OC}}-\overrightarrow{\pt{OA}}=2\overrightarrow{\pt{OA}}-2\overrightarrow{\pt{OB}}$, 즉 $\overrightarrow{\pt{AC}}=-2\overrightarrow{\pt{AB}}$이므로 세 점~$\pt{A}$, $\pt{B}$, $\pt{C}$는 한 직선 위에 있다.)'
  answer_source: "계산(답지 「풀이 72쪽」)"
  figure: none
  latex: latex-bank/gn-geo/items/163-328.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "OC 의 계수 (3, -2) 를 합이 1 인 다른 쌍(4, -3 / -1, 2)으로 바꿀 수 있다. 제약: 두 계수의 합이 1 이어야 결론이 성립하므로 합 1 을 깨면 문항이 거짓이 된다."
    creative: "⑴ 계수 합이 1 이 아닌 경우를 주고 '한 직선 위에 있지 않음'을 보이게 하면 ★3(I-BW d2) ⑵ OC=pOA+qOB 에서 p+q=1 이 필요충분임을 증명하게 하면 ★4 ⑶ C 가 선분 AB 를 몇 대 몇으로 외분하는지까지 묻게 하면 ★3."
```

### 연습문제 STEP 1

```yaml
- id: GN-GEO-164-329
  page: 164
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "STEP 1"
  summary: |
    3x+2y=2a-5b, 2x+4y=3a+5b 일 때 x+6y=ma+nb 를 만족시키는 실수 m, n 에 대하여 m+n 의 값.
  category: "연립에서 주어진 일차결합만 만들기 → 계수 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x, y 를 각각 구하면 분수가 생기므로, 두 식에 -1배·2배를 곱해 더해 x+6y 를 바로 만드는 갈래가 훨씬 빠름"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "연립 벡터방정식에서 주어진 일차결합의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 식을 그대로 풀면 x 가 분수 계수로 나오지만, (첫 식)×(-1)+(둘째 식)×2 를 하면 x+6y 가 한 번에 나온다.
    159-319 와 같은 골조이고 수가 커졌을 뿐이다. 통찰 1개(I-SC d1)·M_total 7 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "두 식의 일차결합으로 x+6y 만들기 → a, b 계수 읽기 → m+n"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$19$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/164-329.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수행렬 (3, 2 / 2, 4) 와 묻는 조합 x+6y 를 바꿀 수 있다. 제약: 행렬식 3·4-2·2=8 이 0 이 아니어야 하고, 묻는 조합의 결합계수가 정수여야 빠른 갈래가 살아난다. 정답이 m+n 이므로 a, b 계수가 정수로 떨어지게."
    creative: "⑴ 묻는 조합을 x, y 각각으로 바꾸면 분수 계산이 강제되어 Mₖ 상승·★3 ⑵ 세 개의 벡터 미지수 x, y, z 로 늘리면 ★3 ⑶ m+n 대신 |x+6y| 를 물으면 기저의 크기·사잇각 조건이 필요해 ★4."
```

```yaml
- id: GN-GEO-164-330
  page: 164
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "STEP 1"
  summary: |
    한 변의 길이가 1 인 정사각형 ABCD 에서 AB=a, BC=b 일 때 |3a-4b| 의 값.
  category: "수직인 두 단위벡터 → 직각삼각형 빗변"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a, b 가 서로 수직인 단위벡터임을 읽고 3a-4b 를 직각을 낀 두 변이 3, 4 인 직각삼각형의 빗변으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "서로 수직인 두 단위벡터의 결합의 크기(피타고라스)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정사각형이므로 |a|=|b|=1 이고 a⊥b. 3a 와 -4b 를 이어 붙이면 직각삼각형이 되어 크기는 5.
    내적을 배우기 전이라 피타고라스로 처리하는 것이 이 단원의 표준 골조다. 통찰 1개(d1)·M_total 5 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "정사각형 → a⊥b, |a|=|b|=1 → 3a 와 -4b 를 직각 두 변으로 → 빗변 5"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: "crop:fig-164-330.png"
  latex: latex-bank/gn-geo/items/164-330.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 (3, -4) 와 정사각형 한 변의 길이를 바꿀 수 있다. 제약: 내적을 쓰지 않으려면 두 계수가 피타고라스 수 쌍(3,4 / 5,12 / 6,8)이어야 답이 정수로 떨어진다. 한 변의 길이 s 는 답 전체에 s 배로 곱해진다."
    creative: "⑴ 정사각형을 직사각형(가로 2·세로 1)으로 바꾸면 |a|≠|b| 가 되어 ★3 ⑵ 정삼각형으로 바꾸면 사잇각 60도라 코사인법칙이 필요해 ★4 ⑶ |3a-kb|=5 가 되는 k 를 묻는 역방향으로 바꾸면 ★3(I-BW d1)."
```

```yaml
- id: GN-GEO-164-331
  page: 164
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "STEP 1"
  summary: |
    정육각형 ABCDEF 의 세 대각선 AD, BE, CF 의 교점을 O 라 하고 AB=a, BC=b 일 때 OF, AC, BE, CE, EA 를 a, b 로 나타낸 5지선다에서 옳지 않은 것 고르기.
  category: "정육각형 벡터 표현 5개를 각각 검산해 틀린 것 찾기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정육각형의 평행 관계(AO=BC, OB=-AB)를 읽어 각 선택지의 기하 표현을 a, b 의 결합으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정다각형에서 변·대각선 벡터를 두 기본 벡터로 나타내기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    160-e5 와 같은 도구를 다섯 번 반복한다. BE=2BO=2(-a+b)=-2a+2b 이므로 부호가 뒤집힌 선택지가 답이다.
    선택지 하나하나는 가볍지만 다섯 번 검산해야 해 Mₛ·Mₖ 가 2. 통찰 1개(d1)·M_total 6 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "AO=b, OB=-a 파악 → 각 선택지를 O 를 거치는 경로로 분해 → a, b 계수 대조"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-164-331.png"
  latex: latex-bank/gn-geo/items/164-331.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "선택지에 쓰인 꼭짓점 쌍과 오답 자리를 바꿀 수 있다. 제약: 오답은 부호나 계수 하나만 틀리게 만들어야 변별이 되고(여기서는 BE 의 부호), 나머지 넷은 참이어야 한다. 그림의 라벨 순서(ABCDEF 반시계)는 고정."
    creative: "⑴ '옳은 것을 모두 고르시오'로 바꾸면 다섯 개를 전부 확정해야 해 ★3 ⑵ 기저를 AB, AF 로 바꾸면 모든 선택지 계수가 달라진 새 문항(★2) ⑶ 정육각형을 정팔각형으로 바꾸면 두 기본 벡터로 안 떨어져 ★4 이상."
```

```yaml
- id: GN-GEO-164-332
  page: 164
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "STEP 1"
  summary: |
    서로 평행하지 않고 영벡터가 아닌 a, b 에 대하여 p=a-b, q=ma+3b, r=2a-5b 일 때 p+q 와 q-r 가 서로 평행하도록 하는 실수 m 의 값.
  category: "두 합성벡터 정리 → 평행 → 계수 비례(m 이 양쪽에 등장)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 벡터가 서로 평행할 조건(미지수가 양쪽에 있는 경우)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    p+q=(1+m)a+2b, q-r=(m-2)a+8b 로 정리한 뒤 계수 비례식을 세우면 m 에 대한 일차방정식이 된다.
    162-326 과 동일한 골조이고 수만 다르다. 통찰 0·M_total 7 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "p+q, q-r 를 a, b 로 정리 → 계수 비례식 → m 일차방정식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/164-332.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "p, q, r 의 계수를 바꿀 수 있다. 제약: 두 합성벡터의 b 계수(2, 8)가 0 이 아니어야 비례식이 서고, m 이 정수로 떨어지게 잡는다. 두 b 계수의 비가 간단하면 계산이 가볍다."
    creative: "⑴ 조합을 p+q 와 p-r 처럼 바꾸면 m 이 한쪽에만 남아 ★2 이하 ⑵ 계수를 조정해 m 의 이차방정식이 되게 하면 ★4(I-MI d2) ⑶ '평행하도록 하는 m 이 존재하지 않음'을 보이게 설계하면 ★4(I-BW d2)."
```

```yaml
- id: GN-GEO-164-333
  page: 164
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "STEP 1"
  summary: |
    서로 다른 네 점 O, A, B, C 에 대하여 OA=-a+2b, OB=2a-b, OC=b 일 때 세 점 A, B, C 가 한 직선 위에 있음을 보이기(증명형).
  category: "AB, AC 계산 → 실수배 관계 제시"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "결론 '한 직선 위'를 'AB 가 AC 의 실수배'로 바꿔 놓고 두 벡터를 실제로 계산해 배수 관계를 보임"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "세 점이 한 직선 위에 있음을 벡터로 증명하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB=OB-OA=3a-3b, AC=OC-OA=a-b 를 각각 구하면 AB=3AC 가 바로 보인다.
    163-328 과 같은 골조이고 기준점이 O 로 주어져 계산이 더 단순하다. 통찰 1개(d1)·M_total 6 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "AB=OB-OA, AC=OC-OA 계산 → AB=3AC → 실수배이므로 한 직선 위"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '풀이 참조 ($\overrightarrow{\pt{AB}}=\overrightarrow{\pt{OB}}-\overrightarrow{\pt{OA}}=3\vec{a}-3\vec{b}$, $\overrightarrow{\pt{AC}}=\overrightarrow{\pt{OC}}-\overrightarrow{\pt{OA}}=\vec{a}-\vec{b}$이므로 $\overrightarrow{\pt{AB}}=3\overrightarrow{\pt{AC}}$. 따라서 세 점~$\pt{A}$, $\pt{B}$, $\pt{C}$는 한 직선 위에 있다.)'
  answer_source: "계산(답지 「풀이 73쪽」)"
  figure: none
  latex: latex-bank/gn-geo/items/164-333.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "OA, OB, OC 의 계수를 바꿀 수 있다. 제약: AB 와 AC 가 반드시 평행이 되도록(두 벡터의 a, b 계수가 비례하도록) 설계해야 명제가 참이다. 배수가 정수면 서술이 깔끔하다."
    creative: "⑴ 'C 가 선분 AB 를 몇 대 몇으로 나누는지'까지 묻게 하면 ★3 ⑵ OC 에 미지수를 넣어 한 직선 위가 되는 값을 구하게 하면 163-327 형태(★2) ⑶ 네 점 중 하나를 공간의 점으로 바꿔 세 점이 한 평면 위임을 보이게 하면 ★4."
```

### 연습문제 STEP 2

```yaml
- id: GN-GEO-165-334
  page: 165
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "STEP 2"
  summary: |
    합동인 두 정육각형이 한 변을 공유하는 그림에서 OA=a, OB=b 일 때 오른쪽 육각형의 먼 꼭짓점 C 에 대하여 OC 를 a, b 로 나타내기.
  category: "육각형의 대각선·변 관계 → 경로 분해 → 분수 계수"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "a=OA 는 변, b=OB 는 짧은 대각선이라는 점을 읽고, 왼쪽 육각형의 긴 대각선 OQ=a+b, 변 AP=(a+b)/2 로 그림을 벡터 등식으로 옮김"
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 육각형이 합동이라 왼쪽에서 얻은 변·대각선 벡터가 오른쪽에서 그대로 반복됨을 이용해 OC=OP+OQ 로 마무리"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "합동인 두 정다각형이 붙은 도형에서 벡터를 두 기본 벡터로 나타내기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    기저가 변(a)과 짧은 대각선(b)으로 서로 성격이 달라, 육각형의 어떤 선분이 a, b 의 어떤 결합인지 먼저 정리해야 한다.
    공유 변의 두 끝점을 P, Q 라 하면 OQ=a+b, OP=a+(a+b)/2 이고 OPCQ 가 평행사변형이라 OC=OP+OQ. 계수가 분수로 나오는 것이 이 문항의 체감 난도다.
    통찰 2개(RT d2 · SYM d2)·M_total 7 → STEP 2 출발점 ★3 에서 +1 → ★4.
  tier: star_4
  mechanism_primary: "육각형의 긴 대각선 OQ=a+b · 변 AP=(a+b)/2 로 OP 구하기 → OC=OP+OQ"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{5}{2}\vec{a}+\dfrac{3}{2}\vec{b}$'
  answer_source: "답지"
  figure: "crop:fig-165-334.png"
  latex: latex-bank/gn-geo/items/165-334.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "묻는 점 C 를 오른쪽 육각형의 다른 꼭짓점이나 중심으로 바꿀 수 있다. 제약: 기저 OA(변), OB(짧은 대각선)를 고정하면 모든 꼭짓점이 1/2 단위 계수로 표현되므로 그림의 O, A, B 위치는 바꾸지 않는다."
    creative: "⑴ 육각형을 셋 이어 붙이면 같은 골조로 계수만 커져 ★4 유지 ⑵ 기저를 OA 와 그 옆 변으로 주면 모든 계수가 정수가 되어 ★3 ⑶ 정육각형 대신 정삼각형 격자로 바꾸면 성분 읽기가 쉬워져 ★3 ⑷ |OC| 를 물으면 사잇각과 코사인법칙이 필요해 ★5 급."
```

```yaml
- id: GN-GEO-165-335
  page: 165
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "STEP 2"
  summary: |
    한 모서리의 길이가 1 인 정육면체에서 AB=a, AD=b, AE=c 일 때 3(a-b+c)-(a-2b+2c) 의 크기.
  category: "식 정리 → 서로 수직인 세 단위벡터의 성분 크기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a, b, c 가 서로 수직인 단위벡터임을 읽고 2a-b+c 를 직육면체의 대각선으로 옮겨 크기를 성분 제곱합의 제곱근으로 계산"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정육면체의 세 모서리 벡터를 기저로 한 벡터의 크기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    먼저 분배법칙으로 2a-b+c 까지 줄이고, 그 다음 세 모서리 벡터가 직교하는 단위벡터임을 써서 크기를 구한다.
    두 도구(실수배 정리 + 공간 대각선 길이)가 이어져 있어 STEP 2 출발점을 유지. 통찰 1개(d1)·M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "괄호 풀어 2a-b+c 로 정리 → a, b, c 직교 단위벡터 → 크기는 성분 제곱합의 제곱근"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\sqrt{6}$'
  answer_source: "답지"
  figure: "crop:fig-165-335.png"
  latex: latex-bank/gn-geo/items/165-335.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바깥 계수(3, -1)와 안쪽 계수를 바꿀 수 있다. 제약: 정리된 결과의 성분 제곱합이 너무 지저분하지 않게 잡고, 한 성분이 0 이 되면 평면 문제로 내려간다. 모서리 길이 s 는 답 전체에 s 배."
    creative: "⑴ 정육면체를 직육면체(가로 1·세로 2·높이 3)로 바꾸면 성분마다 길이가 달라 ★4 ⑵ 크기 대신 '이 벡터와 평행한 모서리·대각선'을 묻게 하면 ★3 유지 ⑶ 결과가 주어진 크기가 되도록 하는 계수를 찾게 하면 역방향 ★4(I-BW d2)."
```

```yaml
- id: GN-GEO-165-336
  page: 165
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "STEP 2"
  summary: |
    일정한 간격의 평행선으로 이루어진 격자 위의 네 점 A, B, C, D 에 대하여 AC=mAB+nAD 를 만족시키는 실수 m, n 에 대하여 m-n 의 값.
  category: "격자의 두 기본 방향으로 성분 읽기 → 계수비교 연립"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "격자의 두 방향을 기본 벡터로 잡아 AB, AD, AC 를 정수 성분으로 읽어내는 전환(그림에서 칸 수를 세는 것이 풀이의 출발점)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "평행선 격자에서 벡터를 두 기준 벡터의 결합으로 나타내기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    격자의 두 방향을 e1, e2 로 두면 AB, AD, AC 가 모두 정수 성분으로 읽힌다. 그 뒤 AC=mAB+nAD 를 e1, e2 계수로 갈라 연립을 풀면 m, n 이 분수로 나온다.
    AB, AD 자체가 기저가 아니라는 점(한 번 더 갈아타야 함)이 핵심이라 I-RT depth 2. M_total 7 → STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "격자의 두 방향 e1, e2 로 AB, AD, AC 의 성분 읽기 → e1, e2 계수비교 → m, n 연립 → m-n"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: "crop:fig-165-336.png"
  latex: latex-bank/gn-geo/items/165-336.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 점의 격자 위치와 묻는 조합(m-n)을 바꿀 수 있다. 제약: AB 와 AD 가 평행하면 안 되고(연립의 행렬식이 0), 네 점이 그림의 4×4 격자 안에 있어야 한다. 격자 칸 수가 바뀌면 그림을 다시 그려야 하므로 그림 라벨 A, B, C, D 는 고정."
    creative: "⑴ 격자를 직사각형 모눈으로 바꾸면 성분 읽기가 쉬워져 ★2 ⑵ AC 대신 격자 밖의 점을 묻게 하면 외분이 되어 ★4 ⑶ m, n 이 모두 양수가 되는 점의 영역을 묻게 하면 ★4(I-MI d2)."
```

```yaml
- id: GN-GEO-165-337
  page: 165
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "STEP 2"
  summary: |
    서로 평행하지 않고 영벡터가 아닌 a, b 에 대하여 c=a+2b 일 때 a+b 와 평행한 벡터를 보기 ㄱ. a-c ㄴ. a+c ㄷ. b-c ㄹ. b+c 에서 모두 고르기.
  category: "c 를 소거해 a, b 로 환원 → 각 보기가 a+b 의 실수배인지 확인"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "보기의 벡터를 두 기본 벡터로 환원해 평행 여부 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    c=a+2b 를 네 보기에 대입해 a, b 만의 식으로 바꾸면 -2b, 2(a+b), -(a+b), a+3b 가 된다. a+b 의 실수배인 것만 고르면 끝.
    네 번의 판정이 모두 한 줄이고 새 도구가 없다. 통찰 0·M_total 6 으로 STEP 2 출발점에서 1단 하향 → ★2.
  tier: star_2
  mechanism_primary: "각 보기에 c=a+2b 대입 → a, b 계수 정리 → a+b 의 실수배인지 확인"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄴ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/165-337.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "c 의 정의(a+2b)와 네 보기의 조합을 바꿀 수 있다. 제약: 정답이 되는 보기가 둘 이상 나오게 설계하고(모두 고르기 문항), 음수배로 평행한 보기를 하나 넣어야 부호 함정이 살아난다."
    creative: "⑴ 기준을 a+b 대신 a-b 로 바꾸면 정답 보기가 달라진 같은 골조(★2) ⑵ c 를 미지수 계수 ka+lb 로 주고 어떤 보기가 평행해지는 (k, l) 을 묻게 하면 ★4 ⑶ '평행한 것의 개수'를 묻고 c 에 매개변수를 넣으면 경우 분기가 생겨 ★4(I-MI d2)."
```

```yaml
- id: GN-GEO-165-338
  page: 165
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "STEP 2"
  summary: |
    OA=a, OB=b 일 때 OP=4a-5b, OQ=-2a+3b, OR=2a-b 를 만족시키는 세 점 P, Q, R 중 직선 AB 위에 있는 점을 모두 구하기. (a, b 는 서로 평행하지 않다.)
  category: "직선 AB 위 조건 → OX=sOA+tOB 의 계수 합이 1"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'직선 AB 위의 점'을 'OX=sa+tb 에서 s+t=1'로 옮기는 동치 변환(또는 AX=kAB 로 환원)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "주어진 점이 두 점을 지나는 직선 위에 있을 조건(계수의 합이 1)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    조건을 계수 합 1 로 옮기면 4-5=-1, -2+3=1, 2-1=1 을 확인하는 것만 남는다. 옮기지 못하면 세 점마다 AP=kAB 를 따로 계산해야 한다.
    동치 변환이 골조의 전부이고 이후 판정은 기계적이다. 통찰 1개(EQV d2)·M_total 6 → STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "직선 AB 위 ⇔ OX=sa+tb 에서 s+t=1 → 세 점의 계수 합 확인"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\pt{Q}$, $\pt{R}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/165-338.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점의 계수 쌍을 바꿀 수 있다. 제약: 합이 1 인 것과 아닌 것이 섞여야 하고, 합이 1 인 점 중에 계수가 음수인 것(선분 AB 의 연장 위)을 넣으면 내분·외분 함정이 생긴다."
    creative: "⑴ '선분 AB 위의 점'으로 좁히면 0≤s≤1 조건이 붙어 사후 검증이 강제된다(★4 · I-VF d2) ⑵ 계수에 미지수를 넣어 직선 위에 있게 하는 값을 구하게 하면 163-327 형태(★2) ⑶ 세 점이 이루는 삼각형의 넓이를 묻게 하면 ★4 이상."
```

```yaml
- id: GN-GEO-166-339
  page: 166
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "STEP 2"
  summary: |
    각 C 가 90도인 직각삼각형 ABC 에서 AB=4, BC=2 이다. 점 P 가 PA+3PC=0 을 만족시킬 때 |BP| 의 값.
  category: "벡터 조건으로 P 의 위치 확정 → 직각삼각형에서 길이"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "PA+3PC=0 을 '4CP=CA', 즉 P 가 선분 CA 를 1:3 으로 나누는 점이라는 위치 정보로 옮김"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "위치가 정해진 P 를 다시 직각삼각형 BCP 로 옮겨 피타고라스로 |BP| 계산"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "벡터 조건으로 점의 위치를 정하고 길이 구하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    PA+3PC=0 을 그대로 두면 아무것도 못 한다. 한 점(C)을 기준으로 다시 쓰면 CP=CA/4 가 되어 P 가 CA 위의 점으로 확정된다.
    그 다음 각 C 가 직각이므로 BP 는 BC 와 CP 를 직각 두 변으로 하는 삼각형의 빗변. CA 는 피타고라스로 먼저 구한다.
    통찰 2개(EQV d2 · RT d1)·M_total 7 → STEP 2 출발점 ★3 에서 +1 → ★4.
  tier: star_4
  mechanism_primary: "PA+3PC=0 → CP=(1/4)CA → CA 를 피타고라스로 구하기 → 직각삼각형 BCP 에서 |BP|"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{\sqrt{19}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/166-339.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "변의 길이(4, 2)와 벡터 조건의 계수(1, 3)를 바꿀 수 있다. 제약: 직각삼각형이 성립하려면 빗변이 가장 길어야 하고, 두 계수의 합이 0 이 아니어야 P 가 유일하게 정해진다. 계수 합으로 나눈 비가 간단해야 계산이 깔끔하다."
    creative: "⑴ PA+3PC 를 PA+2PB+3PC=0 으로 늘리면 무게중심형 내분이 되어 ★5 급 ⑵ 직각 위치를 B 로 옮기면 피타고라스를 두 번 써야 해 ★4 유지 ⑶ |BP| 가 최소가 되는 계수를 묻게 하면 ★5 급(I-BW d3) ⑷ 각 C 를 60도로 바꾸면 코사인법칙이 필요해 ★4."
```

### 연습문제 실력 UP

```yaml
- id: GN-GEO-166-340
  page: 166
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "실력 UP"
  summary: |
    원 (x-2)^2+y^2=1 위를 움직이는 점 P 에 대하여 OQ=OP/|OP| 일 때(O 는 원점) 점 Q 가 나타내는 도형의 길이.
  category: "단위벡터의 자취 → 접선이 이루는 각 → 호의 길이"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "OP/|OP| 가 OP 방향의 단위벡터임을 읽어 Q 가 원점 중심 반지름 1 인 원 위의 점이라는 기하 정보로 전환"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "Q 가 움직이는 범위를 'OP 가 이룰 수 있는 방향각의 범위', 즉 원점에서 원에 그은 두 접선 사이의 각으로 옮김"
    - step: 3
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "원의 방정식·접선(도형의 방정식)과 호의 길이 공식을 벡터 자취 문제에 결합"
  insight_count: 3
  depth_score: 2.00
  type_id: null
  type_hint: "단위벡터가 나타내는 자취와 그 길이"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    Q 는 항상 단위원 위에 있으므로 자취는 호이고, 남는 문제는 '몇 도짜리 호인가'다. 중심 (2,0)·반지름 1 인 원은 원점에서 볼 때 sin(각)=1/2, 즉 반각 30도 안에 들어온다.
    따라서 중심각 60도, 호의 길이는 반지름 1 곱하기 라디안 값. 접점 포함 여부와 P 가 원 전체를 도는지(T-범위·T-경계)가 함정이다.
    통찰 3개·M_total 9 로 ★5 자격 문턱(SC/VF/SYM/XU 포함)에 닿지만, 이 파일은 novelty_score 를 평가하지 않아(0) v3.8 §2.14 게이트를 통과시키지 않았다. 실력 UP 출발점 그대로 ★4.
    [분류 이슈] 통찰 3개 + I-XU 보유로 ★5 후보이나 참신도 미평가 때문에 ★4 로 기록.
  tier: star_4
  mechanism_primary: "OQ 는 단위벡터 → Q 는 단위원 위 → OP 방향각 범위 = 원점에서 그은 두 접선 사이 각(60도) → 호의 길이"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{\pi}{3}$'
  answer_source: "답지"
  figure: "crop:fig-166-340.png"
  latex: latex-bank/gn-geo/items/166-340.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원의 중심 거리(2)와 반지름(1)을 바꿀 수 있다. 제약: 원이 원점을 포함하지 않아야 방향각이 제한되고(중심 거리 > 반지름), sin 값이 특수각(1/2, √2/2, √3/2)이 되게 잡아야 호의 길이가 깔끔한 π 배수로 나온다."
    creative: "⑴ 원이 원점을 지나게 하면 방향각이 반원 전체가 되어 ★4 유지·답만 바뀜 ⑵ OQ=2·OP/|OP| 로 두면 반지름 2 인 호가 되어 길이가 2배(★4) ⑶ 자취의 길이 대신 자취가 지나는 영역의 넓이를 묻게 하면 ★5 급 ⑷ P 가 원이 아니라 선분 위를 움직이게 하면 방향각 범위 계산이 달라져 ★4."
```

```yaml
- id: GN-GEO-166-341
  page: 166
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "실력 UP"
  summary: |
    정육면체에서 AG+BH+CE+DF=m·CG 를 만족시키는 실수 m 의 값.
  category: "네 대각선 벡터를 세 모서리 기저로 펴기 → 수평 성분 상쇄"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "네 대각선을 한 꼭짓점 기준의 세 모서리 벡터로 펴면 밑면 방향 성분이 서로 지워지고 높이 방향만 4배로 남는 대칭 구조를 이용"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정육면체의 대각선 벡터 합(대칭 상쇄)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    AB=p, AD=q, AE=r 로 두면 AG=p+q+r, BH=-p+q+r, CE=-p-q+r, DF=p-q+r 이다. 더하면 p, q 가 모두 지워지고 4r 만 남는다.
    CG=r 이므로 m 은 바로 나온다. 계산 자체는 가볍지만 '네 대각선의 밑면 성분이 상쇄된다'를 보지 못하면 길을 잃는다.
    통찰 1개(SYM d2)·M_total 6 → 실력 UP 출발점 ★4 유지(계산량이 적어 +1 은 하지 않음).
  tier: star_4
  mechanism_primary: "한 꼭짓점 기준 세 모서리 벡터로 네 대각선 펴기 → 밑면 성분 상쇄 → 4·CG"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4$'
  answer_source: "답지"
  figure: "crop:fig-166-341.png"
  latex: latex-bank/gn-geo/items/166-341.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "더하는 대각선의 조합과 우변의 기준 벡터(CG)를 바꿀 수 있다. 제약: 네 대각선이 모두 '아랫면 꼭짓점 → 윗면 대각 꼭짓점' 이어야 상쇄가 일어나 m 이 정수로 나온다. 정육면체를 직육면체로 바꿔도 결과는 같다."
    creative: "⑴ 대각선 네 개 중 셋만 더하면 상쇄가 불완전해 결과가 세 벡터의 결합이 되어 ★4 유지 ⑵ 우변을 AE 대신 AG 로 두면 계수비교가 필요해 ★4 ⑶ |AG+BH+CE+DF| 를 모서리 길이로 묻게 하면 크기 계산이 붙어 ★4 ⑷ 정육면체를 정팔면체로 바꾸면 대칭 구조를 새로 찾아야 해 ★5 급."
```

```yaml
- id: GN-GEO-166-342
  page: 166
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "실력 UP"
  summary: |
    반지름 2 인 원 O 에 내접하는 정오각형 ABCDE 에서 OA+OB+OC+OD+OE=0 일 때 AB+AC+AD+AE 의 크기.
  category: "기준점을 O 로 옮기기 → 주어진 합 0 으로 대체 → 크기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "AX 를 모두 OX-OA 로 바꿔 기준점을 A 에서 원의 중심 O 로 옮김"
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "주어진 다섯 벡터의 합이 0 이라는 대칭 조건에서 OB+OC+OD+OE=-OA 를 끌어내 식 전체를 -5OA 로 축약"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "정다각형의 중심을 기준점으로 한 벡터 합(대칭 상쇄)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    네 벡터를 각각 계산하려 들면 정오각형의 사잇각 72도 때문에 막힌다. 기준점을 중심 O 로 옮기면 OB+OC+OD+OE 가 통째로 -OA 로 바뀐다.
    그러면 전체가 -OA-4OA=-5OA 이고 크기는 반지름의 5배. 계산량은 거의 없고 전부 대칭 인식이다.
    통찰 2개(EQV d1 · SYM d2)·M_total 5 → 실력 UP ★4 유지.
  tier: star_4
  mechanism_primary: "AX=OX-OA 로 기준점 이동 → OB+OC+OD+OE=-OA → 합 = -5OA → 크기 = 5×반지름"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$10$'
  answer_source: "답지"
  figure: "crop:fig-166-342.png"
  latex: latex-bank/gn-geo/items/166-342.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름(2)과 정다각형의 변 수(5)를 바꿀 수 있다. 제약: 정n각형이면 중심에서 꼭짓점으로 가는 벡터의 합이 항상 0 이므로 답은 n×반지름 꼴로 일반화된다. 기준 꼭짓점을 A 로 고정하면 계수가 -n 으로 깔끔하다."
    creative: "⑴ 기준점을 꼭짓점이 아니라 변의 중점으로 바꾸면 축약이 한 겹 더 필요해 ★5 급 ⑵ 정육각형으로 바꾸면 대칭이 더 보여 ★3 ⑶ 합이 0 이라는 조건을 주지 않고 스스로 증명하게 하면 ★5 급(I-SYM d3) ⑷ 일부 항만 더한 AB+AC 의 크기를 물으면 사잇각 계산이 필요해 ★5 급."
```

```yaml
- id: GN-GEO-166-343
  page: 166
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "실력 UP"
  summary: |
    사각형 ABCD 의 두 대각선 AC, BD 의 교점을 O 라 할 때 2OA-OB=2OD-OC 가 성립한다. OB=k·OD 를 만족시키는 실수 k 의 값.
  category: "대각선 위 조건으로 방향 두 개만 남기기 → 일차독립 계수비교"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "O 가 두 대각선의 교점이라는 조건을 'OA 와 OC 는 한 직선 방향, OB 와 OD 는 다른 한 직선 방향'으로 옮겨 모든 벡터를 두 방향의 실수배로 표현"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 대각선 방향이 서로 평행하지 않으므로 등식을 두 방향 성분으로 갈라 각 계수가 0 이라는 하나의 조건으로 결합"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "대각선 위의 점 조건 + 일차독립 계수비교로 비율 구하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    주어진 등식만으로는 미지수가 넷이지만, O 가 대각선의 교점이라는 점에서 OA, OC 는 한 방향(반대 부호), OB, OD 는 다른 한 방향으로 묶인다.
    두 방향이 평행하지 않으므로 각 방향의 계수가 따로 0 이 되어 OB 와 OD 의 비가 결정된다. 부호(O 가 두 대각선 사이에 있어 반대 방향)가 최대 함정.
    통찰 2개(EQV d2 · CON d2)·M_total 9 → 실력 UP ★4 유지.
  tier: star_4
  mechanism_primary: "OA, OC 는 한 방향 / OB, OD 는 다른 방향 → 등식을 두 방향 성분으로 분리 → 계수 0 → OB=kOD"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$-2$'
  answer_source: "답지"
  figure: "crop:fig-166-343.png"
  latex: latex-bank/gn-geo/items/166-343.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "등식의 계수(2, -1, 2, -1)를 바꿀 수 있다. 제약: 좌우변을 정리했을 때 대각선 AC 방향 계수와 BD 방향 계수가 각각 0 이 되어야 하고, 그 결과 k 가 유일하게 정해지도록 계수를 잡는다. 사각형은 볼록이어야 O 가 내부 교점."
    creative: "⑴ OA=k·OC 도 함께 묻게 하면 두 비를 모두 구해야 해 ★4 유지 ⑵ 등식을 세 대각선(사각뿔)으로 확장하면 공간 문제 ★5 급 ⑶ k 의 값에서 두 대각선의 길이 비와 삼각형 넓이 비까지 묻게 하면 ★5 급 ⑷ '이런 사각형이 평행사변형인지 판정'으로 뒤집으면 ★4(I-BW d2)."
```

## 표본 판정 요약 (35문)

- ★ 분포: ★1 4 · ★2 21 · ★3 4 · ★4 6 · ★5 0
- 통찰형 21 · 절차형 14 · premium 0
- 통찰 유형 분포: I-EQV 9 · I-RT 8 · I-SYM 3 · I-SC 2 · I-XU 1 · I-CON 1 (I-BW·I-MI·I-PD·I-VF 는 이 범위 원본에 없음 — 전부 `variation_notes.creative` 의 변형 제안으로만 등장)
- type_hint 상위: 「도형에서 벡터를 기본 벡터로 분해」 9 · 「두 벡터가 평행할 조건」 6 · 「세 점이 한 직선 위에 있을 조건」 5 · 「벡터 방정식·연립」 5 · 「두 벡터가 같을 조건(계수비교)」 4
- 그림: 14문(158-314 · 158-316 · 160-e5 · 160-320 · 160-321 · 164-330 · 164-331 · 165-334 · 165-335 · 165-336 · 166-340 · 166-341 · 166-342 · 166-343)
- 구역별 ★ 중앙값: 익히기 ★1 · 필수·발전 예제 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 — 벤더 신호와 판정이 대체로 일치한다.
- 이 단원의 도구는 ⑴ 분배법칙 정리 ⑵ 일차독립 기저의 계수비교 ⑶ 평행·일직선을 실수배 존재로 옮기기 셋뿐이라, ★2 가 21문으로 몰린 것이 정상 분포다. ★4 6문은 모두 도형의 대칭이나 위치 조건을 벡터로 옮기는 단계가 추가된 문항이다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-GEO-166-340 | 통찰 3개 + I-XU 보유로 v3.8 §2.13 의 ★5 자격 문턱에 닿지만, 이 파일은 novelty_score 를 평가하지 않아(전 블록 0) §2.14 게이트를 통과시키지 못함. 실력 UP 출발점 그대로 ★4 로 기록 | ★4 / ★5 |
| GN-GEO-162-325 | 벤더는 필수 예제(162-e7)에 딸린 확인체크(★2 출발)이나 이미 a, b 로 정리된 두 벡터의 계수 비례 한 줄 — 통찰 0·M_total 5 로 1단 하향 ★1. 익히기 158-316 과 체감이 같음 | ★1 / ★2 |
| GN-GEO-165-337 | 벤더 STEP 2(★3 출발)이나 c 를 대입해 a, b 로 환원한 뒤 실수배 확인 네 번이 전부 — 통찰 0·M_total 6 으로 1단 하향 ★2 | ★2 / ★3 |
| GN-GEO-158-314 · 163-328 · 164-333 | 답이 「풀이 참조」인 작도형·증명형. 답 대조로는 정오를 가릴 수 없어 ★ 산정과 변형 설계를 서술 요구량 기준으로 했다. 유형 카탈로그를 만들 때 증명형을 별도 슬롯으로 둘지 결정 필요 | ★1~★2 |
| GN-GEO-165-334 | 기저 두 개가 변(a)과 짧은 대각선(b)으로 성격이 달라 계수가 분수로 나온다. 같은 「도형 분해」 type_hint 안에서도 난도 폭이 큰 사례(★2~★4)라 카탈로그에서 세분이 필요할 수 있음 | ★3 / ★4 |

**카탈로그 차원 메모**(나중에 유형 카탈로그를 만들 때 참고)

- 이 범위에서 반복된 type_hint 는 다섯 갈래다: ⑴ 벡터 방정식·연립(5문) ⑵ 두 벡터가 같을 조건 = 계수비교(4문) ⑶ 두 벡터가 평행할 조건(6문) ⑷ 세 점이 한 직선 위에 있을 조건(5문) ⑸ 도형에서 기본 벡터로 분해(9문). 나머지는 실수배 계산·작도(2문)와 크기 계산(4문).
- **따로 세워야 할 유형**: ⑸ 「도형에서 기본 벡터로 분해」는 ★2(평행사변형·정육각형 · 160-320 · 160-e5 · 164-331)부터 ★4(붙은 두 육각형·격자·정육면체 대각선 합 · 165-334 · 165-336 · 166-341 · 166-343)까지 폭이 너무 넓다. 「표준 도형(평행사변형·정육각형)에서의 분해」와 「비표준 배치·격자에서의 분해」를 별도 유형으로 두는 편이 base ★ 를 단일하게 잡기 좋다. 「크기 계산」(164-330 · 165-335 · 166-339 · 166-342)도 내적 이전 단계에서 피타고라스·대칭만으로 처리하는 유형이라 별도 슬롯이 맞다.
- **통합해도 될 유형**: ⑵ 와 ⑶ 은 결국 같은 도구(일차독립 기저의 계수비교)이고 발문만 「같다/평행하다」로 갈린다. ⑷ 도 「AC=tAB」로 옮기면 ⑶ 과 같은 계산이다. 카탈로그에서는 「일차독립 계수비교」 하나를 두고 같음·평행·일직선을 하위 변종으로 다는 편이 base ★ 를 일관되게 유지한다.
- ★5 슬롯 후보는 이 범위에 원본으로는 없다. 166-340(자취·접선), 166-342(대칭 상쇄), 166-343(이중 방향 분리)의 `variation_notes.creative` 에 적은 확장(자취의 넓이 · 기준점을 변의 중점으로 · 공간 확장)이 ★5 설계의 출발점이다.
