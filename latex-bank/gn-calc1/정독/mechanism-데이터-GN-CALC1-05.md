---
name: mechanism-데이터-GN-CALC1-05
description: 개념원리 미적분Ⅰ 05 함수의 연속(1/1 · 42~50쪽 · 30문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅰ · 전사본 latex-bank/gn-calc1
  section: 05 함수의 연속
  unit_code: CALC1-05
  part: "1/1"
  extract_range: "42~50쪽 · 42-60~50-84"
  total_problems: 30
  unit_total: 30
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·level·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc1/items/<id>.tex
  image_source: latex-bank/gn-calc1/figures/ (crops.json)
---

# 개념원리 미적분Ⅰ · 05 함수의 연속 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅰ 42~50쪽, 「05 함수의 연속」 단원 30문항 전수를 다룬다. 구역은 전사본 group 순서대로 「개념원리 익히기」 4문 · 「필수·발전 예제」 12문(필수 예제 5 + 확인체크 7) · 「연습문제 STEP 1」 6문 · 「연습문제 STEP 2」 5문 · 「연습문제 실력 UP」 3문이다.

개념원리 고등 교재의 난이도 신호는 구역과 예제 태그로 드러난다. 「개념원리 익히기」의 통번호 문항은 정의를 되읽는 개념 확인(★1 출발), 「필수 예제」와 그 직후의 「확인체크」 유제는 단원 표준 유형(★2 출발), 연습문제는 STEP 1 → ★2, STEP 2 → ★3, 실력 UP → ★4 출발이다. 여기에 「평가원 기출」·「교육청 기출」 태그가 +0~1 신호를 준다. 출발점에서 M_total 과 통찰 라벨로 ±1 조정했고, 라벨을 억지로 맞추지 않고 어긋난 곳은 파일 끝 「분류 이슈 목록」에 기록만 했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다. 이 단원의 골조는 크게 다섯 갈래다 — ① 연속의 정의 3조건 판정, ② 그래프에서 극한·연속 읽기와 곱·합성함수, ③ 분수꼴 함수의 미정계수(분모→0 이면 분자→0), ④ `(x-a)f(x)=g(x)` 꼴에서 인수 강제, ⑤ 조각함수·주기함수의 경계 연속 조건.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CALC1-42-60
  page: 42
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 그림으로 주어진 세 함수가 각각 x=1 에서 불연속인 이유를 설명.
  category: "연속의 세 조건(함숫값 존재·극한값 존재·두 값 일치) 중 깨진 것 지목"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 연속·불연속 판정(정의 3조건)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    그래프에서 f(1) 이 정의되는지 → 좌우극한이 같은지 → 두 값이 일치하는지를 순서대로 읽으면 끝난다.
    세 소문항이 각각 세 조건 하나씩을 담당하도록 설계된 정의 확인 문항이다.
    개념원리 익히기 구역 출발 ★1 · 통찰 0 · M_total 5 → ★1 유지.
  tier: star_1
  mechanism_primary: "그래프 읽기 → f(1) 존재? → lim 존재? → 두 값 일치? 순으로 깨진 조건 하나 지목"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $f(1)$의 값이 존재하지 않는다. ⑵ $\displaystyle\lim_{x\to 1}f(x)$의 값이 존재하지 않는다. ⑶ $\displaystyle\lim_{x\to 1}f(x)\ne f(1)$'
  answer_source: "답지"
  figure: "crop:fig-42-60.png"
  latex: latex-bank/gn-calc1/items/42-60.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "불연속점 x=1 을 다른 값(x=-2, x=3)으로, 그래프의 함숫값·좌우극한 높이를 바꿀 수 있음. 제약: 세 소문항이 세 조건을 하나씩 담당하도록 그림(빈 점·채운 점)을 반드시 함께 바꿔야 함."
    creative: "(1) 그래프 대신 조각함수 식으로 같은 세 경우를 제시(★1 유지) (2) 세 그래프를 하나로 합쳐 「불연속인 x 를 모두 구하고 이유를 쓰시오」(★2) (3) 「불연속이지만 극한값은 존재하는 것」만 고르게 하면 조건 분리 판단이 들어가 ★2."
```

```yaml
- id: GN-CALC1-42-61
  page: 42
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴ f(x)=x-2 ⑵ f(x)=1/(x-2) 가 x=2 에서 연속인지 불연속인지 조사.
  category: "정의역 포함 여부 → 연속의 정의 적용"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 연속·불연속 판정(정의 3조건)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 다항함수라 f(2)=0 이고 극한도 0 → 연속. ⑵ x=2 가 정의역에 없으므로 f(2) 자체가 없어 불연속.
    「함숫값이 정의되는가」가 첫 관문임을 보여 주는 개념 확인 한 단계.
    개념원리 익히기 출발 ★1 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x=2 가 정의역에 있는가 → 있으면 lim 과 f(2) 비교 → 없으면 즉시 불연속"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑴ 연속 ⑵ 불연속"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/42-61.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조사점 x=2 와 분모의 영점을 다른 값으로. 제약: ⑵ 는 조사점이 분모의 영점과 일치해야 「정의되지 않아 불연속」이 성립."
    creative: "(1) 분모를 x^2-4 로 바꿔 불연속점이 둘이 되게 하기(★1) (2) 조사점을 분모의 영점이 아닌 곳(x=0)으로 옮겨 연속임을 확인시키기(★1) (3) 유리식에 x≠2 일 때만 정의된 약분 가능 식을 주어 「극한은 있으나 함숫값이 없다」를 묻기(★2 · I-EQV d1)."
```

```yaml
- id: GN-CALC1-42-62
  page: 42
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑹ 부등식으로 주어진 여섯 집합을 구간의 기호로 나타내기(무한구간 포함).
  category: "부등호의 포함·미포함 → 대괄호·소괄호 대응"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간의 기호와 정의역"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    등호 포함이면 대괄호, 미포함이면 소괄호, ±∞ 쪽은 항상 소괄호라는 표기 규칙 한 겹.
    T-경계(≤ 와 < 구분)가 유일한 함정이고 계산이 없다.
    개념원리 익히기 출발 ★1 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "각 부등호의 등호 유무 확인 → [ ] 와 ( ) 대응 → 무한 쪽은 ( ) 고정"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $[-2,\,1]$ ⑵ $(-1,\,2)$ ⑶ $[0,\,2)$ ⑷ $(1,\,3]$ ⑸ $(-\infty,\,-2)$ ⑹ $[3,\,\infty)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/42-62.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "경계값 -2, 1, 2, 3 을 임의의 정수·유리수로. 제약: 여섯 소문항이 닫힌·열린·반열린·반닫힌·아래무한·위무한 여섯 꼴을 빠짐없이 덮어야 교육 목적이 유지됨."
    creative: "(1) 역방향으로 구간 기호를 주고 부등식으로 쓰게 하기(★1) (2) 두 구간의 교집합·합집합을 구간 기호로 쓰게 하기(★2) (3) 「구간이면서 원소가 유한개인 집합」처럼 경계 개념을 되묻기(★2 · I-EQV d1)."
```

```yaml
- id: GN-CALC1-42-63
  page: 42
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴ f(x)=x^2+x ⑵ f(x)=√(x-1) 의 정의역을 구간의 기호로 나타내기.
  category: "함수꼴별 정의역 조건 → 구간 기호로 변환"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간의 기호와 정의역"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    다항함수는 모든 실수, 근호는 근호 안 ≥ 0 이라는 두 규칙을 적용한 뒤 42-62 의 표기 규칙을 한 번 더 쓴다.
    등호가 포함되므로 [1, ∞) 처럼 왼쪽만 대괄호가 되는 T-경계 한 가지.
    개념원리 익히기 출발 ★1 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "함수꼴 판별(다항/근호) → 정의역 부등식 → 구간 기호"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $(-\infty,\,\infty)$ ⑵ $[1,\,\infty)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/42-63.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안을 x-1 대신 2x+6, 3-x 등으로. 제약: 3-x 처럼 x 계수가 음수면 부등호 방향이 뒤집혀 답이 (-∞, 3] 이 되므로 부호를 의도적으로 고를 것."
    creative: "(1) 분수꼴 1/(x-1) 을 넣어 정의역이 두 구간의 합집합이 되게 하기(★2) (2) 근호와 분모를 겹친 1/√(x-1) 로 등호가 빠지게 하기(★2 · T-경계) (3) 정의역을 주고 그런 함수를 만들게 하는 역방향(★3 · I-BW d2)."
```

### 필수·발전 예제

```yaml
- id: GN-CALC1-43-e1
  page: 43
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 조각함수(x≥1 일 때 2x^2-1, x<1 일 때 x) ⑵ x≠1 에서 (x^2+2x-3)/(x-1), x=1 에서 2 인 함수가 x=1 에서 연속인지 조사.
  category: "좌극한·우극한·함숫값 세 값 비교"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 연속·불연속 판정(정의 3조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 경계 좌우의 식에 1 을 대입해 두 값과 f(1) 을 비교하고, ⑵ 는 약분해 극한을 구한 뒤 주어진 함숫값 2 와 대조한다.
    약분 가능한 유리식의 극한이 함숫값과 다를 수 있다는 것이 이 예제의 요지다.
    필수 예제 출발 ★2 · 통찰 0 · M_total 5 이나 경계 좌우를 따로 계산하는 표준 대표 골조라 ★2 유지.
  tier: star_2
  mechanism_primary: "x=1 좌극한·우극한 계산 → f(1) 확인 → 세 값 일치 여부로 연속 판정"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑴ 연속 ⑵ 불연속"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/43-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 두 조각의 계수(2x^2-1 → ax^2+b, x → cx)와 경계 x=1 을 바꿀 수 있음. 제약: 연속이 되게 하려면 경계에서 두 식의 값이 같아야 하므로 계수를 먼저 정하고 상수항을 맞출 것. ⑵ 분자는 반드시 (x-1) 을 인수로 갖게 하고, 지정 함숫값은 약분 후 극한값과 다르게 둘 것."
    creative: "(1) 두 소문항의 답을 뒤집어 ⑴ 불연속 ⑵ 연속으로 설계(★2) (2) 지정 함숫값을 미지수 k 로 바꿔 연속이 되게 하는 k 를 묻기(★2 · I-EQV d2 · 46-e4 골조로 이동) (3) 좌극한만 존재하는 근호 조각을 넣어 정의역 경계를 함께 따지게 하기(★3)."
```

```yaml
- id: GN-CALC1-43-64
  page: 43
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ |x-2| ⑵ (x^2+x-6)/(x-2) ⑶ x≠2 에서 (x^2-3x+2)/(x-2), x=2 에서 1 ⑷ x≥2 에서 √(x-2), x<2 에서 -1 인 네 함수가 x=2 에서 연속인지 조사.
  category: "절댓값·유리식·조각함수 네 꼴에 연속의 정의 반복 적용"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 연속·불연속 판정(정의 3조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 꼴 각각에서 f(2) 존재 여부 → 좌우극한 → 일치 여부를 반복한다.
    ⑵ 는 정의역에서 x=2 가 빠져 불연속, ⑶ 은 약분 극한 -1 이 아니라 지정값 1 과 비교해야 하고, ⑷ 는 좌우 조각 값이 어긋난다.
    판정 자체는 절차지만 네 가지 표현(절댓값·유리식·지정 함숫값·근호 조각)을 모두 다뤄 M_total 7 → 필수 예제 유제 ★2.
  tier: star_2
  mechanism_primary: "각 소문항에서 f(2) 존재 확인 → 좌우극한 계산(약분·절댓값 분해) → 세 값 비교"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑴ 연속 ⑵ 불연속 ⑶ 연속 ⑷ 불연속"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/43-64.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조사점 x=2 와 각 분자의 인수(x-2 를 포함하는 이차식)를 바꿀 수 있음. 제약: ⑶ 은 지정 함숫값이 약분 후 극한값과 같아야 「연속」이라는 답이 유지되므로 분자를 바꾸면 지정값도 함께 계산해 맞출 것."
    creative: "(1) 네 소문항을 5지선다 「연속인 것만 고르시오」로 재포장(★2 · 48-71 골조) (2) ⑷ 의 -1 을 미지수로 두어 연속이 되게 하는 값을 묻기(★2 · I-EQV d2) (3) 「연속인 것의 개수」를 묻되 절댓값·가우스 기호를 섞으면 T-경계가 늘어 ★3."
```

```yaml
- id: GN-CALC1-44-e2
  page: 44
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    열린구간 (-1, 4) 에서 정의된 y=f(x) 의 그래프에서 극한값이 존재하지 않는 x 의 개수 a, 불연속인 x 의 개수 b 에 대하여 a+b.
  category: "그래프의 끊긴 점 분류 → 극한 존재 개수와 연속 여부 개수를 따로 세기"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프에서 극한·연속 개수 세기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    끊긴 점마다 좌우극한이 같은지(→ a) 와 극한값이 f 값과 같은지(→ b) 를 나눠 세는 것이 전부다.
    「극한값이 없으면 반드시 불연속이지만 그 역은 아니다」는 포함관계가 함정(T-범위·T-경계)이어서 a ≤ b 가 되도록 세야 한다.
    필수 예제 출발 ★2 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "그래프의 각 끊김점에서 좌우극한 비교 → 극한 없는 점 수 a → 극한≠함숫값 포함해 불연속점 수 b → a+b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "본문 풀이"
  figure: "crop:fig-44-e2.png"
  latex: latex-bank/gn-calc1/items/44-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의구간 (-1, 4) 와 끊김점의 위치·개수를 바꿀 수 있음. 제약: 그림의 빈 점·채운 점 배치가 a 와 b 를 동시에 결정하므로 수치만 바꾸지 말고 그림 라벨을 함께 고칠 것. 구간 끝점은 열린구간이라 개수에서 제외해야 함."
    creative: "(1) a+b 대신 ab 또는 b-a 를 묻기(★2 · 44-65 골조) (2) 「좌극한만 존재하는 x 의 개수」를 추가해 한쪽 극한 개념을 분리(★3) (3) 그래프 대신 조각함수 식 3개를 주고 같은 개수를 세게 하면 Mₐ 상승 ★3."
```

```yaml
- id: GN-CALC1-44-65
  page: 44
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    열린구간 (0, 4) 에서 정의된 y=f(x) 의 그래프에서 극한값이 존재하지 않는 x 의 개수 a, 불연속인 x 의 개수 b 에 대하여 ab.
  category: "그래프의 끊긴 점 분류 → 두 개수를 따로 세어 곱"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프에서 극한·연속 개수 세기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    44-e2 와 같은 골조이며 마지막 결합만 합에서 곱으로 바뀐다.
    곱이라서 a 가 0 이면 답이 0 이 되는 점 때문에 극한이 없는 점과 함숫값만 어긋난 점을 더 엄격히 구분해야 한다.
    필수 예제 유제 출발 ★2 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "그래프 끊김점별 좌우극한 비교 → a(극한 없음) 와 b(불연속) 를 따로 세기 → ab"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: "crop:fig-44-65.png"
  latex: latex-bank/gn-calc1/items/44-65.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의구간과 끊김점 위치·형태(점프/구멍/구멍+다른 함숫값)를 바꿀 수 있음. 제약: 결합이 곱이므로 a=0 이 되는 그림(모든 끊김이 구멍뿐)을 의도하지 않는 한 점프를 최소 하나 남길 것."
    creative: "(1) a, b 를 각각 묻는 서술형으로 분해(★1~2) (2) 「f(x) 가 연속이 되도록 몇 개의 점의 함숫값을 고치면 되는가」로 재해석(★3 · I-EQV d2) (3) 같은 그래프로 |f(x)| 의 불연속점을 묻기(★3 · 49-77 골조)."
```

```yaml
- id: GN-CALC1-45-e3
  page: 45
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    그림으로 주어진 y=f(x), y=g(x) (둘 다 x=2 에서 불연속) 에 대하여 ㄱ. f(x)g(x) ㄴ. g(f(x)) ㄷ. f(g(x)) 중 x=2 에서 연속인 것을 모두 고르기.
  category: "불연속 두 함수의 곱·합성이 연속이 될 조건 판정"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그래프의 빈 점·채운 점을 좌우극한과 함숫값이라는 식 정보로 옮겨 읽음"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "합성함수의 극한에서 안쪽 함수가 경계값에 「접근만 하는지, 정확히 그 값을 갖는지」에 따라 경우가 갈려 둘 다 따져야 함"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "그래프로 주어진 두 함수의 곱·합성의 연속"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㄱ 은 좌우극한의 곱과 f(2)g(2) 를 비교하면 되지만, ㄴ·ㄷ 은 안쪽 함수의 치역이 바깥 함수의 불연속점에 어떻게 다가가는지를 따져야 한다.
    「두 함수가 각각 불연속이어도 곱·합성은 연속일 수 있다」가 이 예제의 요지이고, 합성의 극한에서 접근 방식이 갈리는 지점이 학생이 가장 많이 틀리는 곳이다.
    필수 예제 출발 ★2 이나 통찰 2개(RT d1 · MI d2) → +1 → ★3. [분류 이슈] 벤더 신호(필수 ★2)와 1단 차.
  tier: star_3
  mechanism_primary: "그래프에서 f, g 의 x=2 좌우극한·함숫값 읽기 → 곱은 극한의 곱과 함숫값 비교 → 합성은 안쪽 치역이 바깥 불연속점에 닿는 방식으로 경우 나눠 비교"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "ㄱ, ㄴ"
  answer_source: "본문 풀이"
  figure: "crop:fig-45-e3.png"
  latex: latex-bank/gn-calc1/items/45-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조사점 x=2 와 두 그래프의 꼭짓점 높이(2), 빈 점·채운 점의 값을 바꿀 수 있음. 제약: 곱이 연속이 되려면 한쪽의 점프 크기와 다른 쪽의 함숫값이 상쇄되도록 수치를 설계해야 하고, 합성의 답은 안쪽 함수의 치역이 바깥 불연속점을 지나는지에 전적으로 의존하므로 그림 라벨을 임의로 바꾸면 답이 무너짐."
    creative: "(1) 보기에 f(x)+g(x) 를 추가해 합의 연속까지 묻기(★3 · 45-66 골조) (2) 「x=2 에서 불연속인 것」으로 뒤집어 묻기(★3 유지) (3) 합성 f(g(x)) 의 좌우극한 값을 각각 계산하게 하면 검증 부담이 붙어 ★4(I-VF 추가)."
```

```yaml
- id: GN-CALC1-45-66
  page: 45
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    그림으로 주어진 계단꼴 y=f(x), y=g(x) (둘 다 x=0 에서 불연속) 에 대하여 ㄱ. f+g ㄴ. fg ㄷ. g(f(x)) ㄹ. f(g(x)) 중 x=0 에서 연속인 것을 모두 고르기.
  category: "계단꼴 불연속 두 함수의 합·곱·합성의 연속 판정"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 계단 그래프의 빈 점·채운 점을 좌우극한과 함숫값으로 옮겨 읽음"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "합성에서 안쪽 함수의 값이 상수 구간이라 바깥 함수의 불연속점에 정확히 놓이는 경우와 비켜 가는 경우를 나눠 따져야 함"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "그래프로 주어진 두 함수의 곱·합성의 연속"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f 의 점프(-1 → 1)와 g 의 점프(1 → -1)가 서로 반대라서 합 f+g 만 좌우극한과 함숫값이 맞아떨어진다.
    ㄷ·ㄹ 은 안쪽 함수가 좌우에서 서로 다른 상수값을 취하므로 바깥 함수의 그 지점 함숫값을 각각 대입해 비교해야 한다.
    보기가 넷이라 45-e3 보다 판정이 하나 더 늘어난다. 유제 출발 ★2 · 통찰 2개 → +1 → ★3.
  tier: star_3
  mechanism_primary: "f, g 의 x=0 좌우극한·함숫값 읽기 → 합·곱은 극한 연산 후 함숫값 비교 → 합성은 안쪽 상수값을 바깥에 대입해 좌우 비교"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "ㄱ"
  answer_source: "답지"
  figure: "crop:fig-45-66.png"
  latex: latex-bank/gn-calc1/items/45-66.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계단의 높이(1, 1/2, -1, -1/2)를 바꿀 수 있음. 제약: 합이 연속이 되려면 두 함수의 점프 방향과 크기가 정확히 상쇄되고 x=0 의 함숫값 합도 같아야 하므로 네 수치를 한 묶음으로 설계할 것."
    creative: "(1) 상쇄를 깨서 정답이 「없다」가 되게 하기(★3) (2) 보기에 f(x)-g(x), f(x)/g(x) 를 넣어 분모 0 처리까지 묻기(★4) (3) 한쪽 그래프를 미지수 상수 k 가 든 계단으로 바꿔 fg 가 연속이 되는 k 를 구하게 하기(★3 · I-BW d2)."
```

```yaml
- id: GN-CALC1-46-e4
  page: 46
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    x≠-2 에서 (x^2+ax+b)/(x+2), x=-2 에서 5 인 함수가 x=-2 에서 연속이 되도록 하는 상수 a, b 구하기.
  category: "분모→0 이면 분자→0 → 인수분해 후 극한 = 지정 함숫값"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「x=-2 에서 연속」을 「분모가 0 이 되는 점에서 분자도 0 이어야 극한이 존재」라는 계수 조건으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "미정계수 결정 — 분수꼴 함수가 연속일 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    극한이 존재해야 한다는 조건에서 분자에 (x+2) 가 인수로 들어가야 함을 먼저 끌어내고, 약분한 식의 x=-2 값이 5 가 되게 두 번째 식을 세운다.
    미정계수를 바로 대입하는 문제와 달리 「존재」 조건을 계수 조건으로 번역하는 한 겹이 있다.
    필수 예제 출발 ★2 · 통찰 1개(EQV d2) · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "연속 → 극한 존재 → 분자에 (x+2) 인수 강제로 첫 식 → 약분 후 x=-2 대입 = 5 로 둘째 식 → a, b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a=9$, $b=14$'
  answer_source: "본문 풀이"
  figure: "none"
  latex: latex-bank/gn-calc1/items/46-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 영점 -2 와 지정 함숫값 5 를 바꿀 수 있음. 제약: 분자 = (x+2)(x+k) 로 두면 지정 함숫값이 -2+k 이므로 k 를 먼저 고르면 a=k+2, b=2k 가 자동으로 정수로 떨어짐. 지정값을 임의로 주면 a, b 가 정수가 아닐 수 있음."
    creative: "(1) a, b 대신 a+b 나 ab 를 묻기(★2 · 46-67 골조) (2) 분자를 근호식으로 바꿔 유리화 단계를 추가(★2~3 · 46-68 골조) (3) 분모를 (x+2)^2 으로 올려 분자가 중근을 가져야 하게 만들면 조건이 둘로 늘어 ★3(49-79 골조)."
```

```yaml
- id: GN-CALC1-46-67
  page: 46
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    x≠-1 에서 (x^2+2ax+3)/(x+1), x=-1 에서 b 인 함수가 x=-1 에서 연속이 되도록 하는 상수 a, b 에 대하여 a+b.
  category: "분모→0 이면 분자→0 → 약분 후 극한 = b"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "연속 조건을 「x=-1 에서 분자도 0」이라는 a 에 대한 방정식으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "미정계수 결정 — 분수꼴 함수가 연속일 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    46-e4 와 같은 골조로, 분자에 x=-1 을 대입해 0 으로 두면 a 가 먼저 정해지고 약분한 식의 값이 b 가 된다.
    미지수가 분자 계수와 지정 함숫값에 하나씩 나뉘어 있어 순서를 지켜야 한다.
    필수 예제 유제 출발 ★2 · 통찰 1개(EQV d2) · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "분자에 x=-1 대입 = 0 → a 결정 → 인수분해·약분 → x=-1 극한값 = b → a+b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: "none"
  latex: latex-bank/gn-calc1/items/46-67.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 영점 -1 과 분자의 상수항 3 을 바꿀 수 있음. 제약: 분자 x^2+2ax+c 가 (x+1) 을 인수로 가지려면 1-2a+c=0 이어야 하므로 c 를 홀수로 골라 a 가 정수가 되게 할 것."
    creative: "(1) a, b 를 각각 구하게 하는 서술형(★2) (2) 분자를 삼차식으로 올려 조립제법을 쓰게 하기(★3) (3) 「연속이 되도록 하는 a 가 존재하지 않는 상수항」을 묻는 역방향(★3 · I-BW d2)."
```

```yaml
- id: GN-CALC1-46-68
  page: 46
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    x≠1 에서 (a√(x^2+8)-b)/(x-1), x=1 에서 (a-1)/2 인 함수가 모든 실수에서 연속이 되도록 하는 상수 a, b 에 대하여 b-a.
  category: "분자→0 조건 → 근호 유리화 → 극한 = 지정 함숫값"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "연속 조건을 「x=1 에서 분자 3a-b=0」으로 옮긴 뒤 근호를 유리화해야 극한이 계산 가능한 꼴이 됨"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "미정계수 결정 — 분수꼴 함수가 연속일 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자에 x=1 을 넣어 b=3a 를 얻고, 근호를 유리화하면 (x+1)/(√(x^2+8)+3) 꼴이 남아 극한이 a/3 이 된다.
    이를 지정 함숫값 (a-1)/2 와 같게 두면 a 가 정해진다.
    골조는 46-e4 와 같고 유리화 계산만 얹혔다. v3.8 은 계산 마찰로 ★ 을 올리지 않으므로 유제 출발 ★2 유지. [분류 이슈] 계산량만 보면 ★3 후보.
  tier: star_2
  mechanism_primary: "분자에 x=1 대입 = 0 → b=3a → 유리화로 (x-1) 약분 → 극한 a/3 = (a-1)/2 → a, b → b-a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: "답지"
  figure: "none"
  latex: latex-bank/gn-calc1/items/46-68.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안의 상수 8 과 조사점 x=1, 지정 함숫값 (a-1)/2 를 바꿀 수 있음. 제약: 근호 안이 조사점에서 완전제곱수가 되어야 분자가 유리수로 0 이 되고, 유리화 뒤 약분이 성립하려면 근호 안이 (x-1) 을 인수로 갖는 차이식을 만들어야 함."
    creative: "(1) 지정 함숫값을 단순 상수로 바꿔 a, b 를 각각 묻기(★2) (2) 근호를 두 개(√(x+3)-√(5-x))로 늘려 유리화를 두 번 하게 하기(★3) (3) 「모든 실수에서 연속」을 「x>0 에서 연속」으로 바꿔 정의역 경계까지 따지게 하기(★3 · T-범위)."
```

```yaml
- id: GN-CALC1-47-e5
  page: 47
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    모든 실수에서 연속인 f(x) 가 (x-2)f(x)=x^2+ax-12 를 만족시킬 때 상수 a 와 f(2).
  category: "양변에 x=2 대입 → 우변 = 0 강제 → 인수분해 후 f(x) 복원"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「f 가 x=2 에서 연속」을 「우변이 (x-2) 를 인수로 가져야 한다」는 계수 조건으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "(x-a)f(x)=g(x) 꼴의 함수의 연속"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x≠2 에서 f(x)=(x^2+ax-12)/(x-2) 이므로 x=2 에서 극한이 존재하려면 우변이 x=2 에서 0 이어야 하고, 여기서 a 가 먼저 정해진다.
    인수분해해 약분하면 f(x)=x+6 이 되고 연속성으로 f(2) 가 극한값과 같다고 둔다.
    이 단원에서 가장 많이 재등장하는 골조다. 필수 예제 출발 ★2 · 통찰 1개(EQV d2) → ★2.
  tier: star_2
  mechanism_primary: "x=2 대입으로 우변 0 → a 결정 → 우변 인수분해 → f(x)=x+6 → 연속성으로 f(2)=8"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a=4$, $f(2)=8$'
  answer_source: "본문 풀이"
  figure: "none"
  latex: latex-bank/gn-calc1/items/47-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌변의 인수 (x-2) 와 우변의 상수항 -12 를 바꿀 수 있음. 제약: 우변 = (x-2)(x+k) 로 설계하면 a=k-2, 상수항 = -2k 가 되어 정수로 떨어짐. 상수항을 먼저 고르면 k 가 유리수가 될 수 있으니 k 부터 고를 것."
    creative: "(1) 우변을 근호식으로 바꿔 유리화를 넣기(★2 · 47-69 골조) (2) 좌변을 이차식 (x^2-x-2) 로 올려 조건이 둘이 되게 하기(★3 · 47-70 골조) (3) f(2) 값을 주고 a 를 역으로 묻기(★2 · 50-81 골조 · I-BW d2)."
```

```yaml
- id: GN-CALC1-47-69
  page: 47
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    x≥-15 인 모든 실수에서 연속인 f(x) 가 (x-1)f(x)=√(x+15)-4 를 만족시킬 때 f(1).
  category: "우변의 근호 유리화 → (x-1) 약분 → 연속성으로 f(1) = 극한값"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "연속 조건을 「우변이 x=1 에서 0 이 되고 (x-1) 로 약분되어야 한다」로 옮긴 뒤 유리화로 그 인수를 드러냄"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "(x-a)f(x)=g(x) 꼴의 함수의 연속"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x≠1 에서 f(x)=(√(x+15)-4)/(x-1) 이고, 유리화하면 분자에 (x-1) 이 나와 1/(√(x+15)+4) 로 정리된다.
    f 가 x=1 에서 연속이므로 f(1) 은 그 극한값이다. 미정계수 없이 유리화 한 단계만 얹힌 형태다.
    필수 예제 유제 출발 ★2 · 통찰 1개(EQV d2) · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "우변 유리화 → 분자 (x-1) 약분 → f(x)=1/(√(x+15)+4) → 연속성으로 f(1) 은 극한값"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{8}$'
  answer_source: "답지"
  figure: "none"
  latex: latex-bank/gn-calc1/items/47-69.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안의 상수 15 와 빼는 수 4, 좌변 인수 (x-1) 을 바꿀 수 있음. 제약: 조사점에서 근호값이 정확히 빼는 수와 같아야(여기서는 √16=4) 분자가 0 이 되고, 정의역 조건 x≥-15 도 함께 고쳐야 함."
    creative: "(1) 좌변을 (x-1)^2 으로 올려 극한이 발산하지 않도록 우변을 설계하면 ★4 (2) 우변을 √(x+15)-a 로 두고 f(1) 값을 주어 a 를 묻기(★3 · I-BW d2) (3) 근호 두 개의 차로 바꿔 유리화를 두 번 하게 하기(★3)."
```

```yaml
- id: GN-CALC1-47-70
  page: 47
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    모든 실수에서 연속인 f(x) 가 (x^2-x-2)f(x)=x^4+ax+b 를 만족시킬 때 f(2). (a, b 는 상수)
  category: "좌변 이차식의 두 영점에서 우변 = 0 → 계수 연립 → 인수분해로 f 복원"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "연속 조건을 「우변이 (x-2)(x+1) 을 인수로 가져야 한다」는 두 개의 계수 방정식으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "(x-a)f(x)=g(x) 꼴의 함수의 연속"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    좌변을 (x-2)(x+1) 로 인수분해하면 영점이 둘이라 우변에 x=2, x=-1 을 각각 대입해 a, b 를 연립으로 정한다.
    그 다음 사차식을 이차식으로 나눠 f(x) 를 복원하고 연속성으로 f(2) 를 극한값으로 읽는다.
    47-e5 보다 조건이 하나 늘고 고차식 나눗셈이 붙어 M_total 8 → 유제 출발 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "좌변 인수분해 → x=2, x=-1 대입으로 a, b 연립 → 우변을 (x^2-x-2) 로 나눠 f(x) → f(2)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$9$'
  answer_source: "답지"
  figure: "none"
  latex: latex-bank/gn-calc1/items/47-70.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌변 이차식의 두 영점과 우변의 최고차항 x^4 를 바꿀 수 있음. 제약: 우변의 미지 계수 개수가 좌변 영점 개수와 같아야 연립이 결정되고, 나눗셈이 나누어떨어져야 f 가 다항함수로 복원됨."
    creative: "(1) f(2) 대신 f(-1) 이나 f(2)+f(-1) 을 묻기(★3 · 49-76 골조) (2) 좌변을 (x-1)^3 처럼 중복 인수로 만들어 미분 없이 계수 비교를 강제(★4) (3) f 의 최고차항 계수를 조건으로 주고 a, b 를 역으로 묻기(★3 · I-BW d2)."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC1-48-71
  page: 48
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    ① x|x| ② x[x] ③ x≠0 에서 |x|/x, x=0 에서 1 ④ x≠0 에서 x^2+1, x=0 에서 1 ⑤ x≠0 에서 (x^2-3x)/(x^2-x), x=0 에서 3 중 x=0 에서 불연속인 것을 고르는 5지선다. ([x] 는 가우스 기호)
  category: "다섯 표현에 연속의 정의를 반복 적용해 깨지는 하나 찾기"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 연속·불연속 판정(정의 3조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    절댓값·가우스·유리식·지정 함숫값이 섞여 있지만 각 선택지에서 좌극한·우극한·f(0) 세 값을 비교하는 절차는 같다.
    ③ 만 좌극한 -1 과 우극한 1 이 달라 극한 자체가 없고, ②·④·⑤ 는 극한이 함숫값과 맞는다.
    T-부호(|x|/x)와 T-경계(가우스)가 함정 두 가지. STEP 1 출발 ★2 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "선택지별로 x=0 좌우극한 계산(절댓값·가우스는 부호로 분해) → f(0) 과 비교 → 어긋나는 하나 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: "none"
  latex: latex-bank/gn-calc1/items/48-71.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조사점 x=0 과 각 선택지의 지정 함숫값(1, 1, 3)을 바꿀 수 있음. 제약: 정답이 하나가 되도록 나머지 넷은 지정 함숫값을 약분 후 극한값과 반드시 일치시킬 것. ⑤ 의 3 은 (x-3)/(x-1) 의 x=0 값이므로 분자·분모를 바꾸면 함께 계산해 고칠 것."
    creative: "(1) 「연속인 것의 개수」를 묻는 형태로(★2) (2) 가우스 기호 선택지를 x[x] 대신 [x]/x 로 바꿔 정답을 둘로 만들고 「모두 고르시오」(★3) (3) 조사점을 x=1 처럼 가우스 기호가 튀는 정수로 옮기면 T-경계가 강해져 ★3."
```

```yaml
- id: GN-CALC1-48-72
  page: 48
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    실수 전체에서 연속인 f(x) 가 lim(x→1) (x^3-1)f(x)/(x-1) = 12 를 만족시킬 때 f(1).
  category: "분자 인수분해로 (x-1) 약분 → 연속성으로 극한 안의 f(x) 를 f(1) 로 교체"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x^3-1=(x-1)(x^2+x+1) 로 약분한 뒤 f 의 연속성을 근거로 극한을 3f(1) 로 바꿔 쓸 수 있음을 인식"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "(x-a)f(x)=g(x) 꼴의 함수의 연속"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자의 x^3-1 을 인수분해해 (x-1) 을 지우면 lim (x^2+x+1)f(x) 만 남는다.
    f 가 연속이라는 전제가 있어야 이 극한을 3·f(1) 로 대체할 수 있고, 그래서 12=3f(1) 이 된다.
    연속성을 「극한과 함숫값을 바꿔 쓸 권한」으로 쓰는 것이 요지. STEP 1 출발 ★2 · 통찰 1개(EQV d2) → ★2.
  tier: star_2
  mechanism_primary: "분자 인수분해 → (x-1) 약분 → 연속성으로 lim f(x)=f(1) → 3f(1)=12"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: "none"
  latex: latex-bank/gn-calc1/items/48-72.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x^3-1 의 차수와 극한값 12 를 바꿀 수 있음. 제약: 약분 후 남는 인수의 x=1 값(여기서는 3)이 극한값의 약수가 되어야 f(1) 이 정수로 떨어짐."
    creative: "(1) 분모를 (x-1)^2 으로 올려 분자에 (x-1)^2 이 들어가야 함을 강제(★3) (2) 조건을 등식 (x-1)f(x)=x^3-1 꼴로 바꾸면 47-e5 골조(★2) (3) f(1) 대신 f 의 식 자체를 구하게 하면 Mₐ 상승 ★3."
```

```yaml
- id: GN-CALC1-48-73
  page: 48
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    x>-1 일 때 x^3+bx+2, x=-1 일 때 2, x<-1 일 때 -x^2+x+a 인 함수가 모든 실수에서 연속이 되도록 하는 상수 a, b 에 대하여 ab.
  category: "경계 x=-1 에서 우극한 = 함숫값 = 좌극한 두 방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조각함수가 모든 실수에서 연속일 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 조각 모두 다항함수라 경계 아닌 곳은 자동으로 연속이고, x=-1 에서 우극한·좌극한을 각각 지정 함숫값 2 와 같게 두면 b, a 가 하나씩 정해진다.
    두 방정식이 서로 얽히지 않아 연립이 필요 없다.
    STEP 1 출발 ★2 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "x=-1 우극한 = 2 → b → 좌극한 = 2 → a → ab"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-4$'
  answer_source: "답지"
  figure: "none"
  latex: latex-bank/gn-calc1/items/48-73.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "경계 x=-1 과 지정 함숫값 2, 두 조각의 계수를 바꿀 수 있음. 제약: 지정 함숫값을 먼저 고르고 각 조각의 상수항을 그 값에 맞춰 역산해야 a, b 가 정수로 떨어짐."
    creative: "(1) 답을 a+b 나 a-b 로 바꾸기(★2) (2) 가운데 지정 함숫값을 없애고 두 조각만 이어 붙여 조건이 하나가 되게 하기(★2) (3) 경계 자체를 미지수 a 로 두면 방정식이 이차가 되어 ★3(48-75 골조)."
```

```yaml
- id: GN-CALC1-48-74
  page: 48
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    x≠0 에서 (√(1+x)-√(1-x))/x, x=0 에서 a 인 함수가 x=0 에서 연속이 되도록 하는 상수 a.
  category: "0/0 꼴 무리식 유리화 → 극한값을 지정 함숫값으로"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미정계수 결정 — 분수꼴 함수가 연속일 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자에 켤레식을 곱하면 (1+x)-(1-x)=2x 가 나와 x 가 약분되고 2/(√(1+x)+√(1-x)) 만 남는다.
    연속 조건은 그 극한값을 a 로 두는 한 줄이라 판단할 것이 없다.
    유리화는 이 단원에서 이미 반복된 표준 절차라 통찰로 세지 않았다. STEP 1 출발 ★2 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "분자 유리화 → 2x/x 약분 → 극한 2/(√(1+x)+√(1-x)) 의 x=0 값 = a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: "none"
  latex: latex-bank/gn-calc1/items/48-74.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안의 계수(1±x → 1±2x, 4±x)와 분모 x 를 바꿀 수 있음. 제약: 두 근호가 조사점에서 같은 값이 되어야 0/0 꼴이 되고, 유리화 뒤 분자의 차수가 분모와 같아야 극한이 유한하게 남음."
    creative: "(1) 분모를 x^2 으로 올려 극한이 발산하게 만든 뒤 「연속이 되게 하는 a 가 없음」을 보이기(★3) (2) 근호 하나를 상수로 바꿔 유리화 후 남는 식이 x 를 포함하게 하기(★2) (3) 조사점을 근호 안이 0 이 되는 끝점으로 옮겨 한쪽 극한만 따지게 하기(★3 · T-범위)."
```

```yaml
- id: GN-CALC1-48-75
  page: 48
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제 STEP 1"
  summary: |
    x≤a 일 때 -2x+a, x>a 일 때 ax-6 인 함수가 실수 전체에서 연속이 되도록 하는 모든 상수 a 의 값의 합. 5지선다.
  category: "경계가 미지수 자체 → 연속 조건이 a 의 이차방정식 → 근의 합"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "경계점이 상수 a 자체라서 연속 조건이 a 에 대한 이차방정식이 되고, 개별 근을 구하지 않고 근과 계수의 관계로 합만 읽으면 됨"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "조각함수가 모든 실수에서 연속일 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    경계가 고정된 수가 아니라 미지수 a 라서 좌변에도 우변에도 a 가 들어가고, 연속 조건이 a 의 이차방정식으로 바뀐다.
    「모든 a 의 값의 합」이므로 두 근을 따로 구할 필요 없이 근과 계수의 관계만 쓰면 된다.
    STEP 1 출발 ★2 · 평가원 기출 +0~1 · 통찰 1개(EQV d2) · M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "x=a 에서 좌식 값 = 우식 극한 → a 의 이차방정식 → 근과 계수의 관계로 근의 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: "none"
  latex: latex-bank/gn-calc1/items/48-75.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 조각의 계수(-2, -6)를 바꿀 수 있음. 제약: 연속 조건이 a 의 이차방정식이 되도록 한쪽 조각에 ax 꼴이 남아야 하고, 판별식이 양수여야 「모든 a 의 합」이 의미를 가짐. 선택지가 정수가 되려면 근의 합이 정수여야 함."
    creative: "(1) 합 대신 곱이나 최댓값을 묻기(★3) (2) 경계 부등호를 x<a, x≥a 로 뒤집어 함숫값이 어느 쪽에 붙는지 확인하게 하기(★3 · T-경계) (3) 조각을 이차식으로 올려 연속 조건이 삼차방정식이 되게 하면 ★4."
```

```yaml
- id: GN-CALC1-49-76
  page: 49
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    모든 실수에서 연속인 f(x) 가 (x^2-1)f(x)=x^4-2x^3-9x^2+2x+8 을 만족시킬 때 f(-1)f(1).
  category: "우변이 (x^2-1) 로 나누어떨어져야 함 → 몫이 f(x) → 두 값의 곱"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「x=±1 에서도 연속」을 「사차식이 (x^2-1) 로 나누어떨어진다」로 옮겨 나눗셈의 몫이 곧 f(x) 임을 인식"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "(x-a)f(x)=g(x) 꼴의 함수의 연속"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    미정계수가 없어 47-70 보다 단순하다. 우변을 x^2-1 로 나누면 나머지가 0 이고 몫이 f(x) 다.
    x=±1 두 점의 함숫값은 연속성 덕분에 그 몫에 그대로 대입해 얻는다.
    STEP 1 출발 ★2 · 통찰 1개(EQV d2) · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "우변을 (x^2-1) 로 나눠 몫 구하기 → f(x) = 몫 → f(-1), f(1) 대입 → 곱"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$45$'
  answer_source: "답지"
  figure: "none"
  latex: latex-bank/gn-calc1/items/49-76.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌변 (x^2-1) 과 몫이 될 이차식을 바꿀 수 있음. 제약: 우변은 (좌변)×(원하는 몫)을 전개해서 만들어야 나누어떨어짐. 우변 계수를 임의로 건드리면 f 가 다항함수로 복원되지 않는다."
    creative: "(1) f(-1)+f(1) 이나 f(0) 을 묻기(★2) (2) 우변에 미정계수 a, b 를 넣어 조건을 두 개로 만들기(★3 · 47-70 골조) (3) 좌변을 (x^2+1) 처럼 실근이 없는 인수로 바꿔 연속 조건이 아무 제약도 주지 않음을 깨닫게 하기(★3 · I-BW d2)."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC1-49-77
  page: 49
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    열린구간 (-2, 2) 에서 정의된 y=f(x) 의 그래프가 그림과 같을 때, 같은 구간에서 |f(x)| 가 불연속인 x 의 값을 모두 구하기.
  category: "f 의 불연속점 각각에서 좌우극한의 절댓값이 일치하는지 재판정"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「|f| 가 연속」을 「f 의 좌우극한과 함숫값의 절댓값이 같다」로 옮겨, 부호만 다른 점프는 절댓값을 취하면 메워짐을 인식"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f 의 불연속점 후보를 모두 모은 뒤 각각을 절댓값 조건에 재대입해 일부를 기각(x=1 은 |f| 에서 연속이 되어 탈락)"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "절댓값·곱함수의 연속 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    그래프에서 f 는 x=-1 과 x=1 두 곳에서 끊기지만, x=1 은 좌극한과 우극한이 부호만 반대여서 절댓값을 취하면 둘 다 같은 값이 되어 연속으로 바뀐다.
    x=-1 은 절댓값을 취해도 두 값이 달라 그대로 불연속이다. 불연속점 후보를 세운 뒤 걸러 내는 구조라 사후 검증이 풀이의 본질이다.
    STEP 2 출발 ★3 · 통찰 2개(EQV d2 · VF d2) → ★3 유지.
  tier: star_3
  mechanism_primary: "그래프에서 f 의 불연속점 후보 나열 → 각 점에서 좌우극한·함숫값의 절댓값 비교 → 여전히 어긋나는 점만 남기기"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-1$'
  answer_source: "답지"
  figure: "crop:fig-49-77.png"
  latex: latex-bank/gn-calc1/items/49-77.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그래프의 점프 높이(1, ±2)와 불연속점 위치를 바꿀 수 있음. 제약: 답이 「일부만 남는다」가 되려면 최소 한 점은 좌우극한이 부호만 반대·크기 같게, 다른 한 점은 크기까지 다르게 설계해야 함. 빈 점·채운 점 라벨이 답을 직접 결정하므로 고정한 채 수치만 바꾸지 말 것."
    creative: "(1) |f(x)| 대신 f(|x|) 나 {f(x)}^2 의 불연속점을 묻기(★4) (2) 「|f(x)| 가 연속이 되도록 f 의 한 점 함숫값을 고치면?」 역방향(★4 · I-BW d2) (3) 불연속점의 개수만 묻는 객관식으로 낮추기(★2~3)."
```

```yaml
- id: GN-CALC1-49-78
  page: 49
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    x=1 에서 점프 불연속인 y=f(x) 의 그래프가 주어질 때 f(x)g(x) 가 x=1 에서 연속이 되도록 하는 g 를 보기 ㄱ. x^2 ㄴ. |x|-1 ㄷ. |x-1| 에서 모두 고르기.
  category: "좌우극한이 다른 f 에 곱해 연속으로 만들려면 g(1)=0 이 필요 → 보기 대입"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「fg 가 연속이 되도록 하는 g」에서 출발해 좌극한·우극한·함숫값 세 식을 g(1) 에 대한 조건으로 역추적하면 g(1)=0 이라는 필요충분조건이 나옴"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "절댓값·곱함수의 연속 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f 의 좌극한·우극한·함숫값이 서로 다르므로 g 가 연속이라면 세 값에 각각 g(1) 이 곱해진다.
    세 결과가 같아지려면 g(1)=0 밖에 없고, 그 다음은 보기 셋에 1 을 대입하는 확인뿐이다.
    「곱해서 불연속을 지운다」는 역방향 착안이 전부이고 계산은 거의 없다. STEP 2 출발 ★3 · 통찰 1개(BW d2) → ★3.
  tier: star_3
  mechanism_primary: "f 의 x=1 좌우극한·함숫값 읽기 → 세 값에 g(1) 을 곱해 일치 조건 → g(1)=0 → 보기 대입"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "ㄴ, ㄷ"
  answer_source: "답지"
  figure: "crop:fig-49-78.png"
  latex: latex-bank/gn-calc1/items/49-78.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그래프의 좌우극한 값(1, -1)과 f(1)=0, 조사점 x=1 을 바꿀 수 있음. 제약: 세 값이 서로 달라야 g(1)=0 이 유일한 조건이 된다. 둘이 우연히 같아지면 조건이 느슨해져 보기 답이 달라짐."
    creative: "(1) f(1) 을 0 이 아닌 값으로 바꿔 g(1)=0 이 오히려 답을 깨뜨리게 설계(★4) (2) g 를 조각함수 보기로 주어 g 자체의 연속성까지 따지게 하기(★4) (3) 「f(x)+g(x) 가 연속이 되게 하는 g」로 바꾸면 g 도 점프를 가져야 해서 보기가 상수함수로는 불가능해짐(★4 · I-EQV d2)."
```

```yaml
- id: GN-CALC1-49-79
  page: 49
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    x≠1 에서 (x^3+ax+b)/(x-1)^2, x=1 에서 c 인 함수가 x=1 에서 연속이 되도록 하는 상수 a, b, c 에 대하여 abc.
  category: "분모가 중근 → 분자가 (x-1)^2 을 인수로 가져야 함 → 몫의 x=1 값이 c"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분모가 (x-1)^2 이므로 극한이 존재하려면 분자가 단순히 0 이 되는 것으로는 부족하고 (x-1)^2 을 인수로 가져야 한다는 데까지 조건을 강화해야 함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "미정계수 결정 — 분수꼴 함수가 연속일 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    46-e4 와 골조는 같지만 분모가 제곱이라 「분자도 0」 한 번으로 끝나지 않는다.
    분자를 (x-1)^2(x+k) 로 놓고 전개해 계수를 비교하면 a, b 가 동시에 정해지고, 약분한 일차식의 x=1 값이 c 가 된다.
    분자에 중복 인수가 필요하다는 판단이 이 문항의 분기점이다. STEP 2 출발 ★3 · 통찰 1개(EQV d2) · M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "분자 = (x-1)^2(x+k) 로 놓고 계수 비교 → a, b 결정 → 약분 후 x=1 값 = c → abc"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-18$'
  answer_source: "답지"
  figure: "none"
  latex: latex-bank/gn-calc1/items/49-79.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 영점 1 과 분자의 최고차항 x^3 을 바꿀 수 있음. 제약: 분자가 삼차이고 분모가 이차라 몫이 일차식이 되어야 c 가 유한하다. 분자에 x^2 항이 없다는 조건(여기서는 계수 0)이 k 를 결정하므로 임의로 항을 추가하면 문제가 과결정됨."
    creative: "(1) 분모를 (x-1)^3 으로 올리고 분자를 사차로 맞추기(★4) (2) abc 대신 a+b+c 를 묻기(★3) (3) 「연속이 되게 하는 a, b 가 존재하지 않는 분자 형태」를 고르는 객관식(★4 · I-BW d3)."
```

```yaml
- id: GN-CALC1-49-80
  page: 49
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    x≤-1 또는 x≥2 일 때 ax+1, -1<x<2 일 때 x^2-2x+b 인 함수가 구간 (-∞, ∞) 에서 연속이 되도록 하는 상수 a, b 에 대하여 2a+b.
  category: "경계 두 곳에서 각각 연속 조건 → a, b 연립"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조각함수가 모든 실수에서 연속일 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    바깥 조각이 x≤-1 과 x≥2 두 군데로 나뉘어 있어 경계가 둘이고, 두 경계 모두에서 두 식의 값을 같게 두면 a, b 에 대한 연립일차방정식이 된다.
    48-73 처럼 한쪽씩 풀리지 않고 두 식이 얽혀 있다는 점만 다르다.
    판단 요소 없이 조건 두 개를 세워 푸는 절차형이고 M_total 8 → STEP 2 출발 ★3 유지. [분류 이슈] 통찰 0 이라 ★2 후보.
  tier: star_3
  mechanism_primary: "x=-1 에서 두 식 값 일치 → 식 ① → x=2 에서 일치 → 식 ② → 연립으로 a, b → 2a+b"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-3$'
  answer_source: "답지"
  figure: "none"
  latex: latex-bank/gn-calc1/items/49-80.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 경계 -1, 2 와 가운데 조각의 이차식 계수를 바꿀 수 있음. 제약: 미지수가 둘이므로 경계도 정확히 둘이어야 연립이 결정된다. 경계를 대칭으로 잡으면(축이 두 경계의 중점) a=0 이 되어 문제가 시시해지므로 비대칭으로 둘 것."
    creative: "(1) 가운데 조각을 |x-1| 꼴로 바꿔 경계 안쪽에도 꺾인점을 만들기(★3) (2) 바깥 조각을 서로 다른 두 식으로 나눠 미지수를 셋으로 늘리기(★4) (3) 「연속이 되게 하는 a 의 값이 존재하지 않는 b 의 범위」를 묻는 역방향(★4 · I-BW d2)."
```

```yaml
- id: GN-CALC1-50-81
  page: 50
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    모든 실수에서 연속인 f(x) 가 (x+2)f(x)=ax^2-bx 와 f(-2)=2 를 만족시킬 때 상수 a, b 에 대하여 a+b.
  category: "우변에 (x+2) 인수 강제 → f 복원 → 주어진 함숫값으로 계수 확정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "연속 조건을 「우변이 x=-2 에서 0」으로 옮겨 a, b 사이의 관계를 먼저 얻고, 남은 자유도를 f(-2)=2 로 메움"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "(x-a)f(x)=g(x) 꼴의 함수의 연속"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    47-e5 골조에 미지수가 하나 더 붙은 형태로, 연속 조건 하나만으로는 a, b 가 정해지지 않는다.
    우변을 인수분해해 f(x) 를 a 의 식으로 복원한 뒤 f(-2)=2 를 대입해야 비로소 두 값이 확정된다.
    조건 두 개의 역할이 서로 달라 순서를 바꾸면 막힌다. STEP 2 출발 ★3 · 통찰 1개(EQV d2) → ★3.
  tier: star_3
  mechanism_primary: "x=-2 에서 우변 0 → b 를 a 로 표현 → 우변 인수분해해 f(x)=ax → f(-2)=2 로 a, b 확정 → a+b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: "none"
  latex: latex-bank/gn-calc1/items/50-81.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌변의 인수 (x+2) 와 f(-2)=2 의 값을 바꿀 수 있음. 제약: 우변이 ax^2-bx 처럼 상수항이 없어야 인수 하나가 x 로 고정되어 f 가 일차식으로 떨어진다. 상수항을 넣으면 f 가 복원되지 않을 수 있음."
    creative: "(1) f(-2) 대신 f(1) 값을 주어 대입점을 옮기기(★3) (2) 우변을 삼차식으로 올려 f 가 이차함수가 되게 하기(★3~4) (3) 「f(-2) 가 될 수 있는 값의 범위」를 묻는 역방향(★4 · I-BW d2)."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC1-50-82
  page: 50
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    그림으로 주어진 y=f(x), y=g(x) 에 대하여 ㄱ. lim(x→1-) f(g(x))=1 ㄴ. f(x)g(x) 는 x=1 에서 불연속 ㄷ. g(f(x)) 는 x=0 에서 연속, 중 옳은 것을 모두 고르기.
  category: "합성함수의 극한(안쪽 접근 방식 분기)과 곱함수의 연속을 한 그림에서 판정"
  M: {s: 3, k: 1, a: 3, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 그래프의 빈 점·채운 점 배치를 좌우극한·함숫값 정보로 옮기고, 안쪽 함수의 치역이 바깥 함수의 정의역 어디로 가는지를 그림 위에서 추적"
    - step: 2
      type: I-MI
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "합성의 극한에서 안쪽 함수 값이 경계에 「아래에서 접근하는 경우·정확히 그 값인 경우」로 갈리고, ㄱ 과 ㄷ 에서 서로 다른 갈래가 답을 좌우함"
  insight_count: 2
  depth_score: 2.50
  type_id: null
  type_hint: "그래프로 주어진 두 함수의 곱·합성의 연속"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    ㄱ 은 x→1- 일 때 g(x) 가 1 에 아래에서 접근하므로 f 의 직선 부분을 따라가 극한이 1 이 된다.
    ㄴ 은 좌우에서 f·g 의 극한 곱이 달라 불연속이고, ㄷ 은 x→0- 에서 f 가 정확히 1 이라 g(1) 값이, x→0+ 에서는 g 의 0 근방 값이 나와 어긋난다.
    같은 그림에서 세 종류(합성의 극한·곱의 연속·합성의 연속)를 모두 판정해야 하고 접근 방식 분기가 depth 3 이다. 실력 UP 출발 ★4 · 통찰 2개(RT d2 · MI d3) → ★4.
  tier: star_4
  mechanism_primary: "그림에서 f, g 의 좌우극한·함숫값 읽기 → 합성은 안쪽 치역의 접근 방향으로 경우 나눠 극한 → 곱은 좌우 극한 곱과 함숫값 비교 → 보기별 참·거짓"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "ㄱ, ㄴ"
  answer_source: "답지"
  figure: "crop:fig-50-82.png"
  latex: latex-bank/gn-calc1/items/50-82.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 그래프의 계단 높이(±1)와 조사점 x=1, x=0 을 바꿀 수 있음. 제약: 답이 「ㄱ, ㄴ」으로 유지되려면 안쪽 함수가 경계에 접근하는 방향(아래/위)과 채운 점 위치를 함께 설계해야 하고, 그림 라벨을 고정한 채 수치만 바꾸면 세 보기의 진위가 모두 흔들림."
    creative: "(1) 보기에 lim(x→1+) f(g(x)) 를 추가해 좌우 비교를 시키기(★4) (2) g 를 미지의 연속함수로 두고 조건을 만족시키는 g 의 성질을 묻기(★5 후보 · I-SC 추가 필요) (3) 세 보기를 참·거짓 서술형으로 바꿔 근거를 쓰게 하기(★4 · I-VF 추가)."
```

```yaml
- id: GN-CALC1-50-83
  page: 50
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    구간 [0, 4] 에서 0≤x<2 일 때 2x-4, 2≤x≤4 일 때 x^2+ax+b 로 정의되고 f(x)=f(x+4) 를 만족시키는 함수가 실수 전체에서 연속일 때 f(11). (a, b 는 상수)
  category: "주기 4 → 구간 안 경계와 구간 끝 이음매 두 조건 → 계수 결정 후 주기로 환원"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「실수 전체에서 연속」을 뒤집어 읽어 기본구간 안의 경계 x=2 뿐 아니라 주기가 이어 붙는 이음매(x=4 와 x=0)에서도 값이 같아야 한다는 숨은 조건을 끌어냄"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "조각함수가 모든 실수에서 연속일 조건"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    x=2 에서 두 조각을 잇는 조건 하나만 쓰면 미지수 둘을 정할 수 없다.
    주기함수이므로 x=4 의 값이 x=0 의 값과 같아야 한다는 이음매 조건이 두 번째 식이 되고, 이 숨은 조건을 놓치면 문제가 풀리지 않는다.
    계수를 정한 뒤 f(11)=f(3) 으로 내리는 것은 절차다. 실력 UP 출발 ★4 · 통찰 1개(BW d2) → ★4. [분류 이슈] 통찰 1개뿐이라 ★3 후보.
  tier: star_4
  mechanism_primary: "x=2 에서 두 조각 값 일치 → 식 ① → 주기로 f(4)=f(0) → 식 ② → a, b → f(11)=f(3) 대입"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-3$'
  answer_source: "답지"
  figure: "none"
  latex: latex-bank/gn-calc1/items/50-83.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주기 4 와 기본구간의 분기점 2, 앞 조각 2x-4, 묻는 값 11 을 바꿀 수 있음. 제약: 미지수가 둘이므로 조건도 둘(내부 경계 + 이음매)이어야 하고, 묻는 점은 주기를 빼서 기본구간 안으로 들어오는 값이어야 함."
    creative: "(1) f(11) 대신 한 주기 구간에서 f 의 최댓값을 묻기(★4) (2) 주기를 미지수 p 로 두고 연속이 되게 하는 p 를 구하게 하기(★5 후보 · I-SC 필요) (3) 앞 조각을 이차, 뒤 조각을 일차로 바꿔 이음매 조건이 부등식 제약을 낳게 하기(★4 · I-VF 추가)."
```

```yaml
- id: GN-CALC1-50-84
  page: 50
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    a>2 이고 x≤2 일 때 x^2-4x+3, x>2 일 때 -x^2+ax 인 f(x) 와 최고차항 계수 1 인 삼차함수 g(x) 에 대하여, x≠1, x≠a 에서 h(x)=g(x)/f(x) 이고 h(1)=h(a) 인 연속함수 h 가 있을 때 h(1)+h(3). 5지선다.
  category: "분모의 영점마다 분자가 같은 인수를 가져야 함 + 조각 경계에서도 연속 → 삼차함수와 a 결정"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "「h 가 실수 전체에서 연속」을 「f 의 영점 x=1, x=a 를 g 가 모두 인수로 가져야 한다」로 옮겨 g 를 (x-1)(x-a)(x-k) 로 고정"
    - step: 2
      type: I-BW
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "f 가 조각함수라 분모가 0 이 아닌 x=2 에서도 좌우의 f 값이 달라 h 가 끊길 수 있음을 역추적해 g(2)=0 이라는 숨은 인수 조건을 얻음"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 극한값 h(1), h(a) 를 각각 약분해 계산한 뒤 조건 ㈏ 와 결합해 남은 미지수 a 를 하나의 식으로 확정"
  insight_count: 3
  depth_score: 2.67
  type_id: null
  type_hint: "분모가 0 이 되는 점에서 유리함수꼴 h=g/f 가 연속일 조건(삼차함수 결정)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    f 의 영점이 조각별로 x=1 과 x=a 이므로 g 는 두 인수를 반드시 갖고, 최고차항 계수가 1 인 삼차라서 남은 인수는 (x-k) 하나다.
    여기에 조각 경계 x=2 에서 좌우의 f 값이 달라 g(2)=0 이 아니면 h 가 끊긴다는 숨은 조건이 k 를 정하고, 조건 ㈏ 가 a 를 정한다.
    조건이 세 겹으로 쌓이고 그중 하나가 문제에 드러나 있지 않아 실력 UP 중에서도 무겁다. 교육청 기출 · 통찰 3개(depth 3 둘) · M_total 11 → ★4.
    ★5 는 SC/VF/SYM/XU 중 하나가 필요한데 여기에는 없어 ★4 로 둔다.
  tier: star_4
  mechanism_primary: "f 의 영점 x=1, x=a → g=(x-1)(x-a)(x-k) → 조각 경계 x=2 연속에서 g(2)=0 → k=2 → 조건 h(1)=h(a) 로 a 확정 → h(1)+h(3)"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "③"
  answer_source: "답지"
  figure: "none"
  latex: latex-bank/gn-calc1/items/50-84.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 두 조각(x^2-4x+3, -x^2+ax)과 조각 경계 2, 묻는 점 3 을 바꿀 수 있음. 제약: 경계에서 좌우 f 값이 서로 달라야 g(2)=0 이 강제되고(같으면 숨은 조건이 사라져 문제가 무너짐), 조건 ㈏ 가 a 의 일차방정식이 되도록 g 의 차수를 3 으로 유지할 것. a>2 라는 범위 조건이 근 선택에 쓰이므로 함께 조정."
    creative: "(1) g 의 최고차항 계수를 미지수로 두고 조건을 하나 더 주기(★5 후보 · I-VF 추가) (2) h(1)=h(a) 대신 h 의 최솟값 조건으로 바꾸기(★5 후보) (3) 조각 경계에서 f 의 좌우 값이 같아지게 설계해 숨은 조건을 없애면 표준 유형으로 내려와 ★3."
```

## 표본 판정 요약 (30문)

- ★ 분포: ★1 4 · ★2 14 · ★3 9 · ★4 3 · ★5 0
- 통찰형 18 · 절차형 12 · premium 0
- 통찰 라벨 24개 분포: I-EQV 13 · I-RT 3 · I-MI 3 · I-BW 3 · I-VF 1 · I-CON 1 (I-XU·I-PD·I-SYM·I-SC 0)
- type_hint 상위 5: 「(x-a)f(x)=g(x) 꼴의 함수의 연속」 6 · 「미정계수 결정 — 분수꼴 함수가 연속일 조건」 5 · 「함수의 연속·불연속 판정(정의 3조건)」 5 · 「조각함수가 모든 실수에서 연속일 조건」 4 · 「그래프로 주어진 두 함수의 곱·합성의 연속」 3
- 나머지 type_hint: 「구간의 기호와 정의역」 2 · 「그래프에서 극한·연속 개수 세기」 2 · 「절댓값·곱함수의 연속 조건」 2 · 「분모가 0 이 되는 점에서 유리함수꼴 h=g/f 가 연속일 조건(삼차함수 결정)」 1
- 대상층: 하위권 4 · 중하위권 7 · 중위권 12 · 중상위권 6 · 상위권 1
- 그림: 8문(`crop:fig-42-60.png` · `crop:fig-44-e2.png` · `crop:fig-44-65.png` · `crop:fig-45-e3.png` · `crop:fig-45-66.png` · `crop:fig-49-77.png` · `crop:fig-49-78.png` · `crop:fig-50-82.png`)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 이 범위에서 2단 이상 어긋난 문항은 없었다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC1-45-e3 | 벤더는 「필수」 예제(★2 출발)이나 합성함수 극한의 접근 방식 분기 통찰 2개 → ★3 판정. 라벨을 ★3 으로 둠 | ★2 / ★3 |
| GN-CALC1-45-66 | 위와 같은 골조의 확인체크(★2 출발). 보기가 넷이라 판정이 하나 더 늘어 ★3 | ★2 / ★3 |
| GN-CALC1-46-68 | 유리화 계산량만 보면 ★3 이나 v3.8 §2.11(계산 마찰로 ★ 상승 금지)에 따라 골조가 같은 46-e4 와 같은 ★2 로 둠 | ★2 / ★3 |
| GN-CALC1-47-70 | 확인체크(★2 출발)이나 조건 2개 + 고차식 나눗셈으로 M_total 8 → ★3 | ★2 / ★3 |
| GN-CALC1-49-80 | STEP 2(★3 출발)인데 통찰 0 인 절차형. 두 경계 연립의 노동량(M_total 8)만으로 ★3 을 유지했으나 체감은 ★2 | ★2 / ★3 |
| GN-CALC1-50-83 | 실력 UP(★4 출발)이나 통찰은 「주기 이음매도 연속」 하나(BW d2). 저노출 유형 요건은 BW 로 충족하지만 ★3 후보 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형** — ① 「(x-a)f(x)=g(x) 꼴의 함수의 연속」(6문, 이 단원 최다). 좌변 인수가 일차인 경우(47-e5·47-69·48-72·50-81)와 이차 이상이라 조건이 둘 이상인 경우(47-70·49-76)는 학생 체감이 달라 base ★ 를 2 와 3 으로 갈라 둘 만하다. ② 「미정계수 결정 — 분수꼴 함수가 연속일 조건」(5문)도 분모가 일차(46-e4·46-67·46-68·48-74, ★2)인지 중근(49-79, ★3)인지로 갈린다. ③ 「그래프로 주어진 두 함수의 곱·합성의 연속」(3문)은 합성함수 극한의 접근 방식 분기(I-MI)가 본질이라 곱만 묻는 문항과 분리하는 편이 낫다.
- **통합해도 될 유형** — 「함수의 연속·불연속 판정(정의 3조건)」(5문)과 「구간의 기호와 정의역」(2문)은 모두 정의 확인 ★1~2 층이라 하나의 개념 확인 유형으로 묶어도 된다. 「그래프에서 극한·연속 개수 세기」(44-e2·44-65)도 결합 연산(합/곱)만 다른 같은 유형이다.
- **단원 특성** — 이 범위의 통찰 라벨 24개 중 13개가 I-EQV 로, 「연속 조건을 계수 조건으로 번역」이 단원의 지배적 통찰이다. 카탈로그를 만들 때 이 단원의 I-EQV 는 §2.9 학습 자산화(감쇠) 상위 후보로 보아야 하고, 반대로 I-SC·I-VF·I-SYM·I-XU 는 이 범위에 거의 없어 ★5 슬롯을 만들려면 다른 단원과 결합하는 문항을 새로 설계해야 한다.
