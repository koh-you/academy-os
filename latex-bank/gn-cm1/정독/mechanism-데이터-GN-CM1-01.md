---
name: mechanism-데이터-GN-CM1-01
description: 개념원리 공통수학1 01 다항식의 덧셈과 뺄셈(1/1 · 12~13쪽 8문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1 · 전사본 latex-bank/gn-cm1
  section: 01 다항식의 덧셈과 뺄셈
  unit_code: GN-CM1-01
  part: "1/1"
  extract_range: "12~13쪽 · 12-1~13-6"
  total_problems: 8
  unit_total: 8
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (이 범위에는 그림 문항 없음)
---

# 개념원리 공통수학1 · 01 다항식의 덧셈과 뺄셈 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학1 12~13쪽, 단원 01 「다항식의 덧셈과 뺄셈」의 8문항 전수를 다룬다. 구역은 「개념원리 익히기」 3문(12-1~12-3)과 「필수·발전 예제」 5문(필수 예제 13-e1·13-e2 + 확인체크 13-4·13-5·13-6)이다. 개념원리 고등의 난이도 신호는 구역과 예제 태그다 — 「개념원리 익히기」와 tag 「확인체크」는 개념 확인(★1 출발), tag 「필수」는 ★2, 「발전」·「특강」은 ★3 출발이며, 이 범위에는 연습문제 STEP·실력 UP 구역이 없다. 단원 위치가 교과서 도입부라 통찰 요구가 낮고, 8문항 중 6문항이 절차형으로 나왔다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(유형 코드·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다. 공통수학1은 유형 카탈로그가 없으므로 `type_id`·`base_star` 는 null 이고 `type_hint` 에 유형명을 제안했으며 `effective_star` 는 잠정적으로 `star` 와 같다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM1-12-1
  page: 12
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑵ 세 문자로 된 다항식 하나를 x 에 대한 내림차순, y 에 대한 오름차순으로 정리.
  category: '한 문자에 대한 정리 → 나머지 문자를 상수로 보고 차수 순 배열'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항식을 한 문자에 대한 내림차순·오름차순으로 정리하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    기준 문자 외의 문자를 상수로 보고 같은 차수끼리 묶어 계수를 만든 뒤 차수 순으로 배열하면 끝난다.
    정의 확인 한 단계라 통찰 없음·M_total 4. 개념원리 익히기 구역 출발점 ★1 유지.
    함정은 내림차순/오름차순 표기 혼동(T-표기) 하나뿐이다.
  tier: star_1
  mechanism_primary: "기준 문자 외 문자를 상수화 → 같은 차수 항 묶어 계수 만들기 → 차수 순 배열"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $-3x^3+3x^2+(-2y+z^2)x+4y^2z$ ⑵ $3x^2+xz^2-3x^3-2xy+4zy^2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/12-1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 항의 계수와 문자 조합(3x^2 → 5x^2, 4y^2z → 2y^2z)을 바꿀 수 있음. 제약: 기준 문자에 대한 차수가 서로 다른 항이 최소 세 종류 남아야 '정리' 가 의미를 갖고, $(-2y+z^2)x$ 처럼 괄호 계수가 한 번은 생기도록 같은 차수 항을 둘 이상 둔다."
    creative: "(1) 기준 문자를 z 로 바꿔 묻기(★1 유지) (2) 정리한 식에서 특정 차수의 계수만 묻기(★1~2) (3) 두 다항식의 합을 한 문자에 대해 정리시키면 12-2 골조와 결합해 ★2."
```

```yaml
- id: GN-CM1-12-2
  page: 12
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 삼차다항식 A, B 가 주어졌을 때 A+2B, B-2A, 3B-(A-B), 2(2A-B)-A 를 각각 계산.
  category: '다항식의 덧셈·뺄셈 → 괄호 정리로 일차결합 축약 → 대입 후 동류항 정리'
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "주어진 두 다항식의 일차결합 계산(동류항 정리)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 소문항 모두 괄호를 먼저 풀어 A, B 의 일차결합으로 줄인 뒤 대입·동류항 정리로 끝난다.
    ⑶ 은 4B-A, ⑷ 는 3A-2B 로 축약하면 대입이 한 번이다. 통찰은 없고 소문항 수 때문에 계산만 중간(Mₖ 2).
    통찰 0·M_total 5 로 −1 후보지만 ★1 이 하한이라 개념원리 익히기 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: "괄호 정리로 A, B 의 일차결합 축약 → 대입 → 동류항 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $3x^3-8x^2+16x-7$ ⑵ $4x^3-9x^2-2x+9$ ⑶ $9x^3-22x^2+20x+1$ ⑷ $-7x^3+16x^2-13$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/12-2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 의 계수와 일차결합의 계수(2, -2, 3 …)를 바꿀 수 있음. 제약: 답의 계수가 정수로 떨어지게 두고, 최고차항이 소거되는 조합(예: 2A+B 에서 x^3 소거)을 쓸지 의도적으로 정한다 — 소거되면 답의 차수가 낮아져 체감이 달라진다."
    creative: "(1) 소문항 하나를 '최고차항이 사라지게 하는 상수 k' 로 바꾸면 역추적이 생겨 ★2(I-BW) (2) A, B 를 이변수 다항식으로 올리면 13-e1 골조(★2) (3) 결과의 특정 항 계수만 묻기(계산량 ↓ ★1)."
```

```yaml
- id: GN-CM1-12-3
  page: 12
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    다항식 덧셈의 계산 과정 세 줄 ㈎·㈏·㈐ 에 각각 쓰인 연산법칙 이름 구하기.
  category: '덧셈의 교환·결합법칙 → 각 줄이 순서 변경인지 묶음 변경인지 판별'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항식 덧셈의 연산법칙(교환법칙·결합법칙) 식별"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각 줄에서 항의 '순서' 가 바뀌었는지 '묶음' 이 바뀌었는지만 보면 된다.
    괄호 위치가 옮겨간 줄은 결합법칙, 괄호 안 두 항의 자리가 뒤바뀐 줄은 교환법칙.
    계산이 없고 용어 확인 한 단계라 통찰 0·M_total 4 → ★1. 함정은 두 법칙 명칭 혼동(T-표기).
  tier: star_1
  mechanism_primary: "각 줄의 변화가 순서 변경인지 묶음 변경인지 판별 → 교환법칙 / 결합법칙"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '㈎ 결합법칙 ㈏ 교환법칙 ㈐ 결합법칙'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/12-3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "예시 다항식의 항·차수·항의 개수를 바꿀 수 있음. 제약: 한 줄에 두 변화를 동시에 넣지 않아 각 줄이 교환·결합 중 정확히 하나에만 대응하게 둔다."
    creative: "(1) 분배법칙까지 섞어 세 법칙 중 고르게 하기(★1~2) (2) 곱셈의 교환·결합·분배로 옮기면 02단원 골조 (3) '법칙이 잘못 적용된 줄 찾기' 로 뒤집으면 사후 검증이 생겨 ★2(I-VF)."
```

### 필수·발전 예제

```yaml
- id: GN-CM1-13-e1
  page: 13
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 이변수 다항식 A, B, C 가 주어졌을 때 A-(2B-C), -A+B-3(2B-4C) 를 각각 계산.
  category: '괄호 분배 → A, B, C 의 일차결합으로 축약 → 대입 후 동류항 정리'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항식의 덧셈과 뺄셈 (1) — 세 다항식의 일차결합 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 A-2B+C, ⑵ 는 -A-5B+12C 로 먼저 줄인 뒤 한 번만 대입하면 동류항 정리로 끝난다.
    음수 계수의 분배에서 부호가 유일한 함정(T-부호). 통찰 없는 절차형이지만 이변수·세 식이라 M_total 6.
    필수 예제 구역 출발점 ★2 유지(±1 조정 조건 없음).
  tier: star_2
  mechanism_primary: "괄호 분배로 A, B, C 일차결합 축약 → 대입 → x^3·x^2y·xy^2·y^3 동류항 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-x^3+3x^2y+2xy^2-y^3$ ⑵ $13x^3+4x^2y+5xy^2+14y^3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/13-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B, C 의 계수와 바깥 계수(2, 3, 4)를 바꿀 수 있음. 제약: 축약 후 세 식의 계수가 모두 0 이 아니어야 하고(하나라도 0 이면 문항이 13-e1 이 아닌 12-2 골조가 됨), 답에 네 동류항(x^3, x^2y, xy^2, y^3)이 모두 남게 둔다."
    creative: "(1) 답을 주고 빠진 계수 하나를 되묻기(역추적 ★3 · I-BW) (2) 세 식 중 하나를 미지 다항식으로 바꾸면 13-5 골조(★2) (3) 삼변수로 올리는 변형은 계산 마찰만 키워 질이 떨어지므로 피한다(★ 변동 없음)."
```

```yaml
- id: GN-CM1-13-e2
  page: 13
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    두 다항식 A, B 의 합 A+B 와 차 A-B 가 이변수 이차식으로 주어졌을 때 A-4B 를 계산.
  category: '합·차 조건 연립 → A, B 복원 → 목표 일차결합에 대입'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "A, B 가 직접 주어지지 않아 조건을 그대로 쓸 수 없음 — 두 식을 변끼리 더하고 빼 2A, 2B 로 옮겨야 목표식에 대입 가능"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "다항식의 덧셈과 뺄셈 (2) — 합·차가 주어진 두 다항식에서 다른 일차결합 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 식을 변끼리 더해 2A, 빼서 2B 를 얻어 A, B 를 복원한 뒤 A-4B 에 대입하는 것이 표준 골조다
    (목표식을 (A+B), (A-B) 의 일차결합으로 계수비교하는 갈래도 있다). 조건을 그대로 쓸 수 없어 동치 변환 한 단계(EQV d1)가 필요하지만 얕은 통찰이라 필수 예제 출발점 ★2 유지.
    [분류 이슈] 유형을 배운 뒤에는 순수 절차가 되는 경계 통찰 — 카탈로그 설계 때 통찰 인정 여부 재확인.
  tier: star_2
  mechanism_primary: "(A+B)+(A-B)=2A, (A+B)-(A-B)=2B → A, B 복원 → A-4B 에 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2xy-13y^2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/13-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 조건식의 계수와 목표 조합(A-4B, 2A+3B …)을 바꿀 수 있음. 제약: 2A, 2B 를 2 로 나눌 때 계수가 정수로 떨어지도록 두 조건식의 같은 항 계수를 같은 홀짝으로 맞추고, 목표식 계수도 분수로 튀지 않게 둔다."
    creative: "(1) 조건을 A+2B, A-B 처럼 비대칭으로 주면 소거 계수를 학생이 정해야 해 13-6 골조(★2 · EQV 유지) (2) 목표식을 조건식의 일차결합으로 계수비교하도록 유도하면 해법이 두 갈래가 되어 ★3(I-SC) (3) 'A 의 계수가 모두 자연수' 같은 사후 조건을 붙이면 ★3(I-VF)."
```

```yaml
- id: GN-CM1-13-4
  page: 13
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    사차 다항식 A, B, C 가 주어졌을 때 7A-3{B+(2A-C)}-4C 를 계산.
  category: '중첩 괄호 전개 → A, B, C 의 일차결합으로 축약 → 대입'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "괄호가 중첩된 다항식 일차결합의 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    안쪽 소괄호부터 풀어 A-3B-C 로 줄인 뒤 한 번만 대입하면 된다. 축약하지 않고 대입하면 사차 다항식 세 개를 두 번 정리하게 돼 계산이 불어난다.
    통찰 없음·M_total 6(중괄호 분배의 부호가 함정).
    [분류 이슈] tag 「확인체크」는 ★1 신호이고 구역 「필수·발전 예제」는 ★2 신호로 엇갈린다 — 중첩 괄호와 사차 계산량을 근거로 ★2 채택.
  tier: star_2
  mechanism_primary: "중괄호 → 소괄호 순 전개로 A-3B-C 축약 → 대입 → 동류항 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-16x^4-21x^3+21x^2-3x+2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/13-4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바깥 계수(7, 3, 2, 4)와 A, B, C 의 계수를 바꿀 수 있음. 제약: 축약식의 세 계수가 모두 0 이 아닌 정수여야 하고, 각 식에 빠진 차수(B 에 x^4 항 없음 등)를 유지해 차수 정렬 함정을 살린다."
    creative: "(1) 축약식만 묻고 대입은 생략(계산 제거 · ★1) (2) 바깥 계수 하나를 미지수로 두고 x^4 항이 사라지게 하는 값을 묻기(★3 · I-BW) (3) 중괄호 안에 미지 다항식 X 를 넣으면 13-5 골조와 결합해 ★2~3."
```

```yaml
- id: GN-CM1-13-5
  page: 13
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    이변수 다항식 A, B 가 주어졌을 때 2A-X=3(A-B) 를 만족시키는 다항식 X 구하기.
  category: '미지 다항식에 대한 등식 → X 에 대해 이항 → 대입'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항식 등식에서 미지 다항식 X 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    X 를 수처럼 다루어 X=2A-3(A-B)=-A+3B 로 이항한 뒤 대입한다. 이항할 때 우변 전체의 부호가 유일한 함정(T-부호).
    통찰 0·M_total 5 라 −1 후보였으나, 대입 전에 미지항을 정리해야 하는 만큼 12-2 보다 한 단계 위라 ★2 유지.
    [분류 이슈] 확인체크 태그(★1 신호)와 구역 「필수·발전 예제」(★2 신호)가 엇갈리는 문항.
  tier: star_2
  mechanism_primary: "X 에 대해 이항 → X=-A+3B → 대입 → 동류항 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5x^2+2xy-6y^2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/13-5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 의 계수와 등식의 계수(2, 3)를 바꿀 수 있음. 제약: X 의 계수가 ±1 이 되도록 두어(2X 꼴이면 마지막에 나눗셈이 추가돼 골조가 달라짐) 답이 정수 계수로 남게 하고, 이항으로 부호가 바뀌는 항이 반드시 생기게 한다."
    creative: "(1) X 를 양변에 모두 두어 이항 방향을 학생이 정하게 하면 해법이 갈라져 ★3(I-SC) (2) X 의 특정 항 계수만 묻기(★1) (3) X 의 계수를 2 로 만드는 변형은 계산만 늘어 질이 떨어지므로 피한다(★2 유지)."
```

```yaml
- id: GN-CM1-13-6
  page: 13
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 다항식 A, B 에 대하여 A-B 와 A+2B 가 이차식으로 주어졌을 때 3A-2B 를 계산.
  category: '비대칭 두 조건 연립 → A, B 복원 → 목표 일차결합에 대입'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "조건이 A-B, A+2B 로 비대칭이라 어느 쪽을 어떤 배수로 소거할지 정해 두 조건을 A, B 로 동치 변환해야 목표식에 대입 가능"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "합·차꼴 조건에서 다른 일차결합 구하기(비대칭 계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    13-e2 와 같은 골조지만 조건이 대칭이 아니라 두 식의 차로 3B 를, 적절한 배수 합으로 3A 를 만들어야 한다.
    A, B 를 복원한 뒤 3A-2B 에 대입. 동치 변환 한 단계(EQV d1)·M_total 7 이나 +1 조건(통찰 2개 이상 또는 depth 3)은 아니라 구역 출발점 ★2 유지.
    [분류 이슈] 확인체크 태그(★1 신호)와 구역(★2 신호)이 엇갈리고, M_total 7 로 ★3 여지도 있어 기록만 함.
  tier: star_2
  mechanism_primary: "(A+2B)-(A-B)=3B → B 복원 → A 복원 → 3A-2B 에 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$7x^2+6x-10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/13-6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건식의 B 계수(-1, +2)와 목표 조합(3A-2B)을 바꿀 수 있음. 제약: 소거 후 나오는 계수(여기서는 3)로 두 조건식의 결합이 나누어떨어져 A, B 가 정수 계수로 복원되어야 하고, 목표식도 정수 계수로 남게 둔다."
    creative: "(1) 목표식을 조건식의 일차결합으로 바로 표현하게 유도하면(계수비교) 해법이 두 갈래가 되어 ★3(I-SC) (2) 조건을 세 개로 늘려 남는 조건을 검증에 쓰게 하면 ★3(I-VF) (3) A, B 를 이변수 다항식으로 올리면 계산만 늘어 ★2 유지."
```

## 표본 판정 요약 (8문)

- ★ 분포: ★1 3 · ★2 5 · ★3 0 · ★4 0 · ★5 0
- 통찰형 2 · 절차형 6 · premium 0
- 통찰 유형: I-EQV 2건(각 depth 1 · 13-e2 · 13-6). 그 외 유형 0건 — 교과서 도입 단원이라 ★3 이상 변별 통찰(SC·VF·SYM·XU)은 나타나지 않는다.
- M_total 분포: 4 → 2문 · 5 → 2문 · 6 → 3문 · 7 → 1문 (평균 5.4)
- type_hint 상위: 「다항식의 일차결합 계산(괄호 정리 후 대입)」 3(12-2 · 13-e1 · 13-4) · 「합·차꼴 조건에서 다른 일차결합 구하기」 2(13-e2 · 13-6) · 「한 문자에 대한 내림차순·오름차순 정리」 1 · 「덧셈의 연산법칙 식별」 1 · 「등식에서 미지 다항식 X 구하기」 1
- 대상층: 하위권 3 · 중하위권 3 · 중위권 2
- 그림: 0문 (이 범위에는 figure 가 있는 문항이 없다)

## 분류 이슈 목록

판정이 애매하거나 벤더 신호끼리 엇갈려 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-13-e2 | 합·차 조건을 연립해 A, B 를 복원하는 단계를 통찰(I-EQV d1)로 볼지 표준 절차로 볼지 경계. 유형 학습 전 첫 노출 기준으로 통찰 인정 쪽을 채택 | ★2 |
| GN-CM1-13-4 | tag 「확인체크」(★1 신호)와 구역 「필수·발전 예제」(★2 신호) 충돌. 중첩 괄호·사차 계산량을 근거로 ★2 채택 | ★1 / ★2 |
| GN-CM1-13-5 | 같은 태그·구역 신호 충돌. 통찰 0·M_total 5 로 −1 후보였으나 미지항 이항 단계를 근거로 ★2 유지 | ★1 / ★2 |
| GN-CM1-13-6 | 같은 태그·구역 신호 충돌 + I-EQV 인정 시 M_total 7 로 ★3 여지. 통찰 1개·depth 1 이라 +1 조건 미충족으로 ★2 유지 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **통합해도 되는 유형**: 12-2 · 13-e1 · 13-4 는 모두 「주어진 다항식들의 일차결합을 괄호 정리 후 대입해 계산」 하나의 유형이다. 차이는 식의 개수(2 vs 3) · 변수 수(일변수 vs 이변수) · 괄호 중첩 여부뿐이라 카탈로그에서는 단일 유형 + 난이도 변수(중첩 괄호 · 이변수)로 두는 편이 낫다. base ★ 후보 2(중첩 없는 일변수는 1).
- **따로 세워야 할 유형**: 13-e2 · 13-6 의 「합·차꼴 조건에서 다른 일차결합 구하기」는 위 유형과 골조가 다르다(대입이 아니라 조건 연립·복원). 개념원리 필수예제도 (1)/(2) 로 나눠 두었다. base ★ 후보 2, 조건이 비대칭이면 2~3.
- **따로 세워야 할 유형**: 13-5 의 「등식에서 미지 다항식 X 구하기」도 별도 유형. 이항이라는 별도 단계가 있고, 이후 02단원의 곱셈 등식·나눗셈 등식으로 확장되는 축이다. base ★ 후보 2.
- **카탈로그에 넣을지 판단 필요**: 12-1(한 문자에 대한 정리) · 12-3(연산법칙 식별)은 출제 슬롯보다 개념 확인 성격이 강하다. 유형으로 세우되 base ★ 1 로 두고 변별 슬롯에서는 제외하는 편이 낫다.
- 이 단원 범위에서는 SC/VF/SYM/XU 통찰이 한 건도 없어 ★4~5 슬롯을 만들 재료가 없다. ★3 이상은 `variation_notes.creative` 에 적어 둔 역추적(I-BW) · 계수비교 갈래(I-SC) · 사후 조건(I-VF) 변형으로만 만들 수 있다.
