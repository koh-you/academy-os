---
name: mechanism-데이터-GN-CM1-03
description: 개념원리 공통수학1 03 곱셈 공식(1/1 · 18~21쪽 10문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1 (22개정 · 학생용) · 전사본 latex-bank/gn-cm1
  section: 03 곱셈 공식
  unit_code: GN-CM1-03
  part: "1/1"
  extract_range: "18~21쪽 · 18-13~21-19"
  total_problems: 10
  unit_total: 10
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·예제 태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (이 범위에는 그림 문항 없음)
---

# 개념원리 공통수학1 · 03 곱셈 공식 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학1 **03 곱셈 공식** 단원 18~21쪽의 전 10문항을 다룬다. 구역은 두 개다. 「개념원리 익히기」(18-13 · 18-14)는 공식 박스 바로 뒤의 개념 확인 문항이고, 「필수·발전 예제」(19-e4 ~ 21-19)는 **필수 예제 3문(19-e4 · 20-e5 · 21-e6)과 각 예제에 딸린 확인체크 5문(19-15 · 20-16 · 21-17 · 21-18 · 21-19)**이 번갈아 배치된 구역이다. 이 단원에는 그림 문항이 없고, 문항 대부분이 소문항 묶음(최대 12개)이라 블록의 `summary` 는 「⑴~⑿ …」 형태로 묶어 요약했다.

벤더 난이도 신호는 개념원리 고등의 관례를 따랐다. 「개념원리 익히기」는 ★1 출발, 「필수」 태그 예제는 ★2 출발이다. 다만 이 단원의 **확인체크는 「개념원리 익히기」가 아니라 「필수·발전 예제」 구역 안에서 직전 예제의 쌍둥이 문제로 배치**돼 있으므로, ★1 이 아니라 직전 예제와 같은 **★2 출발**로 잡았다(파일 끝 「분류 이슈 목록」 머리말 참조). 출발점에서 M_total·통찰 수로 ±1 조정했고, 라벨을 벤더 신호에 억지로 맞추지 않았다.

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄), `insights[]`(통찰 유형·depth·근거), `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 채 바꿀 수 있는 설정)를 채웠다. 답은 전사·검수 단계에서 답지와 대조가 끝난 값을 그대로 옮겼다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM1-18-13
  page: 18
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑿ 곱셈 공식으로 전개하기. ⑴⑵ 세 일차식의 곱, ⑶⑷ (a+b+c)^2,
    ⑸~⑻ (a±b)^3, ⑼~⑿ (a±b)(a^2∓ab+b^2).
  category: "곱셈 공식 네 가지 기본형 직접 대입 → 전개"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식 기본형 전개(세 일차식 곱 · (a+b+c)^2 · (a±b)^3 · a^3±b^3)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 박스 바로 뒤 개념 확인. 어느 공식을 쓸지가 소문항 형태에서 바로 보이고
    각 소문항은 대입 한 번이면 끝난다. 부호(⑷ -3y·-z, ⑺ -2)를 놓치는 T-부호 하나만 함정.
    통찰 0 · M_total 5 → 개념원리 익히기 출발점 ★1 유지(감점 하한).
  tier: star_1
  mechanism_primary: "소문항별 해당 곱셈 공식 식별 → 계수·부호 대입 → 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x^3+9x^2+23x+15$ ⑵ $x^3-9x^2+26x-24$ ⑶ $x^2+y^2+4z^2+2xy+4yz+4zx$ ⑷ $x^2+9y^2+z^2-6xy+6yz-2zx$ ⑸ $27x^3+27x^2+9x+1$ ⑹ $8x^3+60x^2+150x+125$ ⑺ $27x^3-54x^2+36x-8$ ⑻ $x^3-12x^2y+48xy^2-64y^3$ ⑼ $x^3+1$ ⑽ $8x^3+27$ ⑾ $x^3-8$ ⑿ $8a^3-b^3$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-cm1/items/18-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 일차식의 상수항(1,3,5 → 임의 정수), (a+b+c)^2 의 계수(2z → 3z 등), 세제곱의 밑 계수(3x, 2x, x-4y)를 자유롭게. 제약: ⑼~⑿ 는 a^3±b^3 공식이 성립하도록 가운데 인수를 a^2∓ab+b^2 로 반드시 짝 맞춤(부호 하나만 틀려도 공식이 깨짐), 계수는 세제곱해도 계산이 무겁지 않게 한 자리 유지."
    creative: "(1) 전개식을 주고 원래 곱을 되묻기(역방향 → I-BW d1 · ★2) (2) 전개식의 특정 항 계수만 묻기(전개 생략 착안 → ★2) (3) ⑶⑷ 를 (a+b+c)^2 = a^2+b^2+c^2+2(ab+bc+ca) 항등식 형태로 묻기(★1 유지) (4) 문자 계수를 매개변수 k 로 바꾸면 M_a 2 로 올라 ★2."
```

```yaml
- id: GN-CM1-18-14
  page: 18
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 곱셈 공식으로 전개하기. ⑴⑵ (a+b+c)(a^2+b^2+c^2-ab-bc-ca) 꼴,
    ⑶⑷ (a^2+ab+b^2)(a^2-ab+b^2) 꼴.
  category: "세 문자 일반형 공식에 부호·계수를 역대입 → 전개"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 문자 곱셈 공식 전개(a^3+b^3+c^3-3abc · (a^2+ab+b^2)(a^2-ab+b^2))"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 c → -c, ⑵ 는 b → -2b, c → 3c 로 두어야 표준형 부호(-ab-bc-ca)와 맞는다.
    공식 자체는 주어져 있으나 주어진 식의 +bc, +ca 부호를 보고 어느 문자를 음수로 볼지
    역으로 맞춰야 해 대입이 한 겹 더 있다. ⑶⑷ 는 a^4+a^2b^2+b^4 공식 직접 대입.
    표준 공식 대입 범위라 통찰 0(절차형) · M_total 6 → 출발점 ★1 에서 +1 해 ★2. [분류 이슈] 벤더 구역 신호는 ★1.
  tier: star_2
  mechanism_primary: "주어진 가운데 인수의 부호를 보고 음수 문자 식별 → 세 문자 공식에 역대입 → a^3+b^3+c^3-3abc 로 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $a^3+b^3-c^3+3abc$ ⑵ $a^3-8b^3+27c^3+18abc$ ⑶ $x^4+x^2+1$ ⑷ $x^4+16x^2y^2+256y^4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/18-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑵ 의 계수 조합(-2b, 3c → -3b, 2c 등), ⑷ 의 b 자리 계수(4y → 2y, 5y). 제약: 가운데 인수의 세 교차항 부호가 첫 인수의 부호와 정확히 대응해야 공식이 성립하므로 계수를 바꾸면 -ab, +bc, +ca 를 전부 다시 맞춘다. ⑶⑷ 는 a^2 항 계수가 두 밑의 곱이어야 함."
    creative: "(1) a+b+c=0 조건을 붙여 a^3+b^3+c^3=3abc 를 유도하게 하기(I-EQV d2 · ★3) (2) 전개 결과에서 abc 항 계수만 묻기(★2) (3) ⑶ 을 인수분해 방향(x^4+x^2+1 을 곱으로)으로 뒤집으면 I-BW d2 · ★3 (4) 세 문자 대신 수치(a=2,b=3,c=-1)를 넣어 수의 계산으로 바꾸면 ★1."
```

### 필수·발전 예제

```yaml
- id: GN-CM1-19-e4
  page: 19
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑹ 식의 전개. ⑴ (a+b+c)^2, ⑵ (a-b)^3, ⑶ 세 일차식의 곱,
    ⑷ (a^2+ab+b^2)(a^2-ab+b^2), ⑸ 네 인수의 연쇄 곱, ⑹ (a+1)(a-1)(a^4+a^2+1).
  category: "기본 공식 대입 + ⑸⑹ 곱하는 순서 재배열 → 합차·세제곱차 연쇄"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑸⑹ 에서 앞에서부터 전개하지 않고 (x-y)(x+y) 를 먼저 묶어 x^2-y^2 → x^4-y^4 → x^8-y^8 연쇄를 만들고, ⑹ 은 (a^2-1)(a^4+a^2+1) 을 A^3-B^3 꼴로 봄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곱셈 공식을 이용한 전개(기본형 + 곱하는 순서 재배열)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴~⑷ 는 공식 식별·대입 한 번이면 끝나는 절차 구간이고, 변별은 ⑸⑹ 에 있다.
    ⑸ 는 합차 공식을 네 번 연쇄로 쓰고 ⑹ 은 (a+1)(a-1) 을 먼저 묶어 a^2 를 한 덩어리로 보는
    재배열 착안 하나(EQV d1)가 필요하다. 필수 예제 출발점 ★2 · 통찰 1개 d1 → ★2 유지.
  tier: star_2
  mechanism_primary: "공식 식별 후 대입, ⑸⑹ 은 인수를 재배열해 (a-b)(a+b) → A^3-B^3 연쇄로 묶어 전개"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $4x^2+16y^2+9-16xy-24y+12x$ ⑵ $8x^3-36x^2+54x-27$ ⑶ $x^3+2x^2-11x-12$ ⑷ $16x^4+36x^2y^2+81y^4$ ⑸ $x^8-y^8$ ⑹ $a^6-1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/19-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 계수(2x,-4y,3), ⑵ 의 밑(2x-3), ⑶ 의 세 상수(-3,1,4), ⑷ 의 계수(4x^2,6xy,9y^2). 제약: ⑷ 는 가운데 항 계수가 양 끝 밑의 곱의 2배가 아니라 1배여야 a^4+a^2b^2+b^4 공식이 성립. ⑸ 의 인수 개수를 늘리면 차수가 x^16 까지 커지므로 3~4개로 제한."
    creative: "(1) ⑸ 의 맨 앞 (x-y) 를 빼고 (x+y)(x^2+y^2)(x^4+y^4) 만 주면 (x-y) 를 스스로 곱해야 해 ★3(I-EQV d2) (2) ⑹ 의 a^4+a^2+1 을 먼저 인수분해하게 하면 I-BW d2 · ★3 (3) ⑶ 을 (x+a)(x+b)(x+c) 일반형 계수 비교로 바꾸면 M_a 2 · ★3 (4) 소문항을 ⑸⑹ 만 남기면 순수 재배열 유형 ★3."
```

```yaml
- id: GN-CM1-19-15
  page: 19
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑻ 식의 전개. ⑴ 합차, ⑵ (a+b+c)^2, ⑶ a^3-b^3, ⑷ 세 일차식의 곱,
    ⑸ a^4+a^2b^2+b^4, ⑹ 세 문자 공식, ⑺ (x-y)^3(x+y)^3, ⑻ 네 인수의 곱.
  category: "기본 공식 대입 + ⑺⑻ 곱하는 순서 재배열 → 합차·세제곱합차 연쇄"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑺ 은 각각 세제곱하지 않고 {(x-y)(x+y)}^3 = (x^2-y^2)^3 으로 묶고, ⑻ 은 인접 순서가 아니라 (a-b)(a^2+ab+b^2)·(a+b)(a^2-ab+b^2) 로 교차 짝지어 (a^3-b^3)(a^3+b^3) 로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곱셈 공식을 이용한 전개(기본형 + 곱하는 순서 재배열)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    19-e4 의 쌍둥이 확인체크. ⑴~⑹ 은 공식 식별·대입 절차 구간이고 ⑹ 만 2a,b,-c 역대입이 한 겹 더 있다.
    변별은 ⑺⑻ 의 재배열 착안 하나(EQV d1) — 특히 ⑻ 은 인접한 두 인수를 곱하면 공식이 안 맞고
    한 칸 건너뛴 짝을 지어야 a^3±b^3 가 나온다. 확인체크지만 직전 필수 예제의 쌍둥이라 출발점 ★2 · 통찰 1개 d1 → ★2.
  tier: star_2
  mechanism_primary: "공식 식별 후 대입, ⑺⑻ 은 인수를 재배열해 (x^2-y^2)^3 · (a^3-b^3)(a^3+b^3) 로 묶어 전개"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $a^4-25b^2c^2$ ⑵ $x^2+4y^2+9z^2-4xy+12yz-6zx$ ⑶ $27x^3-8y^3$ ⑷ $x^3+3x^2-18x-40$ ⑸ $81x^4+9x^2y^2+y^4$ ⑹ $8a^3+b^3-c^3+6abc$ ⑺ $x^6-3x^4y^2+3x^2y^4-y^6$ ⑻ $a^6-b^6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/19-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 5bc, ⑵ 의 계수(-x,2y,3z), ⑶ 의 3x-2y, ⑷ 의 세 상수(-4,2,5), ⑸ 의 3x,y. 제약: ⑶ 은 가운데 인수가 (3x)^2+(3x)(2y)+(2y)^2 로 정확히 맞아야 하고, ⑹ 은 2a,b,-c 대입 시 -2ab,+bc,+2ca 세 교차항 부호를 전부 다시 맞춘다. ⑺ 은 지수를 3 이상으로 올리면 계산량만 늘고 골조는 그대로."
    creative: "(1) ⑻ 에서 인수 하나를 빼고 나머지 곱을 묻기(짝이 안 맞아 스스로 보충 → I-EQV d2 · ★3) (2) ⑺ 을 전개식의 x^4y^2 계수만 묻는 형태로(이항계수 착안 ★2) (3) ⑹ 에 2a+b-c=0 조건을 붙이면 8a^3+b^3-c^3=-6abc 유도 ★3 (4) ⑷ 를 상수항·일차항 계수만 묻는 형태로 바꾸면 전개 생략 착안 ★2."
```

```yaml
- id: GN-CM1-20-e5
  page: 20
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴⑵ 식의 전개. ⑴ (x^2+x+2)(x^2+x-4), ⑵ 네 일차식의 곱 (x-1)(x-2)(x+3)(x+4).
  category: "공통부분을 만들어 한 문자로 치환 → 이차식 곱으로 전개 → 되돌리기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑴ 의 x^2+x 를 한 문자 X 로 치환해 (X+2)(X-4) 라는 이차식 곱으로 환원하고, 전개 후 X 를 되돌려 다시 전개"
    - step: 2
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑵ 는 네 일차식의 짝짓기 선택이 갈래 — 인접 순서 (x-1)(x-2)·(x+3)(x+4) 로 묶으면 공통부분이 안 생기고, 상수항 합이 같은 (x-1)(x+3)·(x-2)(x+4) 로 묶어야 공통부분 x^2+2x 가 나옴"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "공통부분이 있는 다항식의 전개(치환 · 짝짓기 선택)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 공통부분이 눈에 보여 치환만 하면 되지만, ⑵ 는 어느 두 식을 먼저 곱할지 고르는 것이 풀이의 전부다.
    짝을 잘못 고르면 공통부분이 생기지 않아 사차식 네 항 직접 전개로 빠진다.
    치환(EQV d2) + 짝짓기 선택(SC d2) 두 통찰 · M_total 6 → 필수 예제 출발점 ★2 에서 +1 해 ★3.
    [분류 이슈] 짝짓기 선택을 I-SC 로 잡았으나 「전혀 다른 도구 2개」 기준은 미달 — I-EQV 로 통합 가능.
  tier: star_3
  mechanism_primary: "상수항 합이 같도록 짝짓기 → 공통부분을 X 로 치환 → (X+p)(X+q) 전개 → X 되돌려 정리"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $x^4+2x^3-x^2-2x-8$ ⑵ $x^4+4x^3-7x^2-22x+24$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/20-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 상수항 쌍(2,-4), ⑵ 의 네 상수(-1,-2,3,4). 제약: ⑵ 는 네 상수를 두 쌍으로 나눴을 때 각 쌍의 합이 같아야 공통부분이 생긴다(-1+3 = -2+4 = 2). 이 합 조건을 깨면 문제가 성립하지 않으므로 상수를 바꿀 때 {p,q,r,s} 에서 p+r = q+s 를 먼저 고정한다. ⑴ 은 공통부분 x^2+x 의 계수를 바꿔도 골조 동일."
    creative: "(1) 전개 결과의 상수항·특정 계수만 묻기(치환 후 전개 생략 → ★3 유지) (2) ⑵ 에 +k 를 붙여 완전제곱 X^2 꼴이 되도록 k 를 구하게 하면 역방향 I-BW d2 추가 · ★4 (3) 네 일차식을 (x+a)(x+b)(x+c)(x+d) 일반형으로 주고 짝 조건을 묻기(M_a 2 · ★4) (4) 공통부분을 x^2-x 처럼 부호를 바꾸면 T-부호 하나 추가 · ★3 유지."
```

```yaml
- id: GN-CM1-20-16
  page: 20
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑸ 식의 전개. ⑴ 공통부분 x^2+5x, ⑵ (a+b-c)(a-b+c), ⑶ 공통부분 x^2-3x 에 +2,
    ⑷ (x+2)(x-2)(x+5)(x+9), ⑸ (x-4)(x-3)(x-2)(x-1).
  category: "공통부분을 만들어 치환 → 전개 → 되돌리기 (⑵ 는 합차 꼴로 재배치)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑷⑸ 에서 네 일차식의 짝을 상수항 합이 같도록 골라야 공통부분이 생김 — ⑷ 는 (x+2)(x+5)·(x-2)(x+9) 로 합 7, ⑸ 는 (x-4)(x-1)·(x-3)(x-2) 로 합 -5"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑵ 를 {a+(b-c)}{a-(b-c)} 로 재배치해 a^2-(b-c)^2 합차 꼴로 동치 변환"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "공통부분이 있는 다항식의 전개(치환 · 짝짓기 선택)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    20-e5 의 쌍둥이 확인체크지만 소문항이 5개로 늘고 유형이 세 갈래다.
    ⑴⑶ 은 공통부분이 이미 보이는 치환 절차, ⑷⑸ 는 짝짓기 선택(SC d2)이 핵심,
    ⑵ 는 b-c 를 한 덩어리로 묶는 합차 재배치(EQV d1). ⑶ 의 +2 와 ⑵ 의 -(b-c)^2 부호가 T-부호 함정.
    통찰 2개 · M_total 6 → 출발점 ★2 에서 +1 해 ★3. [분류 이슈] 확인체크가 예제와 동급 ★3.
  tier: star_3
  mechanism_primary: "상수항 합이 같도록 짝짓기 또는 덩어리 묶기 → 치환 → 이차식 곱·합차 전개 → 되돌려 정리"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $x^4+10x^3+20x^2-25x+6$ ⑵ $a^2-b^2-c^2+2bc$ ⑶ $x^4-6x^3+6x^2+9x-2$ ⑷ $x^4+14x^3+41x^2-56x-180$ ⑸ $x^4-10x^3+35x^2-50x+24$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/20-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 상수 쌍(-2,-3), ⑶ 의 상수 쌍(+1,-4)과 더하는 수 +2, ⑷⑸ 의 네 상수. 제약: ⑷⑸ 는 두 쌍의 상수항 합이 같아야 하므로(2+5 = -2+9 = 7 · -4-1 = -3-2 = -5) 네 수를 바꿀 때 이 합 조건을 먼저 맞춘다. ⑶ 의 두 상수는 공통부분 치환 후 이차식이 인수분해되는지와 무관하므로 자유."
    creative: "(1) ⑶ 을 「+k 를 더해 완전제곱이 되게 하는 k」 로 뒤집으면 I-BW d2 · ★4 (2) ⑵ 를 a^2-b^2-c^2+2bc 형태로 주고 인수분해하게 하면 역방향 ★3 (3) ⑸ 처럼 연속한 네 정수 곱 (x-1)(x-2)(x-3)(x-4) 의 최솟값을 묻기(치환 + 이차함수 → I-XU · ★4) (4) ⑷ 의 네 상수 합 조건을 깨고 「짝을 지을 수 있는가」를 묻기 ★3."
```

```yaml
- id: GN-CM1-21-e6
  page: 21
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ (3+2)(3^2+2^2)(3^4+2^4)(3^8+2^8) 을 간단히 하기.
    ⑵ 99×(10001+100) 의 값 구하기.
  category: "수를 거듭제곱 식으로 보고 곱셈 공식(합차 연쇄 · a^3-b^3) 적용"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑴ 에 3-2 = 1 을 곱해도 값이 변하지 않음을 이용해 (a-b)(a+b) 연쇄의 첫 고리를 인위적으로 만들어 3^16-2^16 으로 환원"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑵ 의 수 99, 10001+100 을 10^2-1 과 (10^2)^2+10^2+1 이라는 대수식 표현으로 옮겨 a^3-b^3 공식을 적용(수 ↔ 식 표현 전환)"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "곱셈 공식을 이용한 수의 계산"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 소문항이 서로 다른 착안을 묶고 있다. ⑴ 은 「1 을 곱해도 값이 안 변한다」를 3-2 로 읽어
    없던 인수를 끼워 넣는 착안(EQV d2), ⑵ 는 10진수를 10 의 거듭제곱 다항식으로 보는 표현 전환(RT d2)이다.
    둘 다 없으면 직접 곱셈으로 빠져 사실상 풀리지 않는다. 통찰 2개 · M_total 6 → 필수 예제 ★2 에서 +1 해 ★3.
  mechanism_primary: "값이 변하지 않는 인수(3-2 = 1)를 곱해 합차 연쇄 만들기 · 수를 10^n 다항식으로 옮겨 a^3-b^3 적용"
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $3^{16}-2^{16}$ ⑵ $999999$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/21-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 두 밑(3,2 → 4,3 · 5,4 등 차가 1 인 쌍)과 인수 개수(4개 → 3개·5개). 제약: 차가 1 인 쌍이어야 곱하는 인수가 1 이 되어 값이 보존된다. 차가 1 이 아니면 21-17 처럼 마지막에 나눠 보정해야 하므로 난이도가 한 단계 올라간다. ⑵ 는 밑 10 과 지수 구성을 바꿀 수 있으나 99·101·10001 처럼 10^n±1 로 읽히는 수여야 한다."
    creative: "(1) ⑴ 의 두 밑의 차를 2 이상으로 바꿔 나눗셈 보정을 강제하면 ★4(21-17 골조) (2) 결과를 지수 표현이 아니라 실제 자릿수·일의 자리 숫자로 묻기(모듈로 착안 추가 ★4) (3) ⑵ 를 999999 의 소인수분해로 뒤집으면 I-BW d2 · ★4 (4) 밑을 문자 a,b 로 일반화하면 수 계산이 사라져 순수 전개 ★2."
```

```yaml
- id: GN-CM1-21-17
  page: 21
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    (5+1)(5^2+1)(5^4+1)(5^8+1) 을 간단히 하기.
  category: "5-1 = 4 를 곱해 합차 연쇄를 만든 뒤 4 로 나눠 보정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "합차 연쇄의 첫 고리를 만들려면 5-1 을 곱해야 하는데 그 값이 1 이 아닌 4 이므로, 곱한 뒤 마지막에 4 로 나눠 원래 값으로 되돌리는 보정이 필요 — 예제 21-e6⑴ 의 「1 을 곱한다」와 달리 항등 조작이 아니어서 보정을 스스로 세워야 함"
  insight_count: 1
  depth_score: 3.00
  type_id: null
  type_hint: "곱셈 공식을 이용한 수의 계산((a-b) 를 곱해 합차 연쇄 만들기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    골조는 21-e6⑴ 과 같지만 두 밑의 차가 1 이 아니라 4 라 「곱한 뒤 되돌린다」는 한 겹이 더 붙는다.
    보정을 빠뜨리면 5^16-1 로 4배 틀린 답이 나오고, 이 단계가 풀이의 본질이다.
    계산량 자체는 가볍다(M_total 5). 통찰 1개지만 depth 3 → 확인체크 출발점 ★2 에서 +1 해 ★3.
    [분류 이슈] 보정을 d2 로 보면 ★2 로 내려간다.
  tier: star_3
  mechanism_primary: "(5-1) 을 곱해 5^16-1 을 만든 뒤 처음 곱한 4 로 나눠 원래 값 복원"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{4}(5^{16}-1)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/21-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 5 를 3·7·10 등으로, 인수 개수를 3~5개로. 제약: 밑이 a 일 때 답이 (a^{2^n}-1)/(a-1) 이므로 보정 나눗셈이 깔끔한 밑(3 → 2 로 나눔, 10 → 9 로 나눔)을 고른다. 밑을 2 로 하면 곱하는 수가 1 이 되어 보정이 사라지고 통찰이 한 단계 내려간다(★2)."
    creative: "(1) 답을 분수가 아닌 정수로 만들려고 처음부터 (5-1) 이 곱해진 형태로 주면 ★2 (2) 결과의 일의 자리 숫자를 묻기(주기성 I-PD 추가 · ★4) (3) 일반항 (a+1)(a^2+1)…(a^{2^{n-1}}+1) 로 문자화해 일반식을 구하게 하면 I-PD d2 추가 · ★4 (4) 두 밑이 모두 문자인 (a+b)(a^2+b^2)(a^4+b^4) 로 바꾸면 순수 전개 ★2."
```

```yaml
- id: GN-CM1-21-18
  page: 21
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    9×11×101×10001 을 간단히 하기.
  category: "각 수를 10의 거듭제곱 식으로 옮겨 합차 연쇄 적용"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "9×11 = 99 = 10^2-1 로 묶고 101 = 10^2+1, 10001 = 10^4+1 로 읽어 (10^2-1)(10^2+1)(10^4+1) 합차 연쇄로 전환(수 ↔ 거듭제곱 식 표현 전환)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곱셈 공식을 이용한 수의 계산(10의 거듭제곱 표현 전환)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    9×11 을 먼저 묶어 99 = 10^2-1 을 만드는 것만 보이면 나머지는 합차 공식 두 번으로 끝난다.
    단계 수·계산량이 모두 가볍고(M_total 4) 보정도 없어 21-17 보다 한 단계 아래다.
    표현 전환 통찰 1개 d2 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "9×11 = 10^2-1 로 묶기 → (10^2-1)(10^2+1) = 10^4-1 → ×(10^4+1) = 10^8-1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10^8-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/21-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 10 을 그대로 두고 인수를 늘리거나(×100000001 → 10^16-1) 9×11 대신 99 를 바로 주기. 제약: 첫 인수가 10^2-1 로 읽혀야 연쇄가 시작되므로 9×11 처럼 곱이 10^n-1 이 되는 쌍만 쓴다. 다른 밑(2: 1×3×5×17 = 2^8-1)으로 옮길 수도 있으나 수가 작아 직접 곱셈으로 풀려 통찰이 죽는다."
    creative: "(1) 결과를 10^8-1 이 아니라 자릿수·각 자리 숫자의 합으로 묻기(21-19 와 결합 · ★3) (2) 99999999 를 주고 네 수의 곱으로 나타내게 하면 I-BW d2 · ★3 (3) 9×11×101 까지만 주고 다음에 곱할 수를 묻기(패턴 I-PD d2 · ★3) (4) 밑을 문자 a 로 일반화하면 (a^2-1)(a^2+1)(a^4+1) 순수 전개 ★1."
```

```yaml
- id: GN-CM1-21-19
  page: 21
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    a = 199 일 때 a^3 의 각 자리의 숫자의 합 구하기.
  category: "199 = 200-1 로 옮겨 (a-b)^3 전개 → 실제 수로 되돌린 뒤 자리 숫자 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "199 를 그대로 세제곱하지 않고 200-1 로 옮겨 (a-b)^3 = a^3-3a^2b+3ab^2-b^3 으로 전개(수 ↔ 식 표현 전환), 그 뒤 8000000-120000+600-1 을 실제 수 7880599 로 되돌려야 자리 숫자를 읽을 수 있음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곱셈 공식을 이용한 수의 계산((a-b)^3 로 큰 수의 세제곱)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    199 를 200-1 로 보는 표현 전환 하나가 전부이고, 그 뒤는 세제곱 공식 대입과 덧셈이다.
    다만 전개식의 계수 8, -12, 6, -1 을 그대로 자리 숫자로 읽으면 틀리므로
    반드시 실제 수로 정리한 뒤 자리를 세야 한다(T-표기 함정). 통찰 1개 d2 · M_total 6 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "199 = 200-1 → (a-b)^3 전개 → 실제 수로 합산 → 각 자리 숫자 더하기"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$46$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/21-19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a 를 99, 201, 999, 1001 등 10^n±1 에 가까운 수로. 제약: 기준수에서의 차가 1~2 정도로 작아야 (a±b)^3 전개항이 자리 올림 없이 정리되고 계산이 가볍다. 세제곱 대신 제곱·네제곱으로 바꾸면 공식만 갈아끼우면 되고 골조는 동일."
    creative: "(1) 자리 숫자의 합 대신 일의 자리·십의 자리 숫자만 묻기(전개 항 중 일부만 필요 → ★3) (2) a^3 이 몇 자리 수인지 묻기(최고차항 크기 비교 ★2) (3) a = 199 일 때 a^3+3a^2+3a+1 = (a+1)^3 임을 이용하게 하면 I-EQV d2 추가 · ★3 (4) 199^3 과 201^3 의 합을 묻기(대칭 상쇄 I-SYM d2 · ★4)."
```

## 표본 판정 요약 (10문)

- ★ 분포: ★1 1 · ★2 5 · ★3 4 · ★4 0 · ★5 0
- 통찰형 8 · 절차형 2 · premium 0
- 통찰 유형 분포: I-EQV 5 · I-RT 3 · I-SC 2 (총 라벨 10개 · depth 1 은 3개, depth 2 는 6개, depth 3 은 1개)
- 구역별: 개념원리 익히기 2문(★1·★2 · 둘 다 절차형) · 필수 예제 3문(★2·★3·★3) · 확인체크 5문(★2·★3·★3·★2·★2)
- type_hint 상위: 「곱셈 공식을 이용한 수의 계산」 4 · 「곱셈 공식을 이용한 전개(기본형 + 곱하는 순서 재배열)」 2 · 「공통부분이 있는 다항식의 전개(치환 · 짝짓기 선택)」 2 · 「곱셈 공식 기본형 전개」 1 · 「세 문자 곱셈 공식 전개」 1
- 대상층: 하위권 1 · 중하위권 1 · 중위권 6 · 중상위권 2
- 그림: 0문(이 범위에는 그림 문항 없음) · 소문항 묶음 7문(최대 12개)
- 전사 답과 골조가 어긋난 문항: 0

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

공통 전제 하나: 이 단원의 확인체크 5문은 「개념원리 익히기」가 아니라 「필수·발전 예제」 구역 안에서 직전 필수 예제의 쌍둥이 문제로 배치돼 있다. 그래서 벤더 신호 표의 「확인체크 → ★1 출발」이 아니라 **직전 예제와 같은 ★2 출발**을 적용했다. 카탈로그를 만들 때 이 구역 관례를 명시해야 한다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-18-14 | 구역 신호는 개념원리 익히기 ★1 이나 세 문자 일반형 공식의 역방향 대입(c → -c, b → -2b)과 M_total 6 으로 ★2 로 올림. 통찰은 0(표준 공식 대입) | ★1 / ★2 |
| GN-CM1-20-e5 | ⑵ 의 짝짓기 선택을 I-SC(전략 분기)로 잡았으나 「전혀 다른 도구 2개 이상」 기준은 미달 — I-EQV 로 통합하면 통찰 1개가 되어 ★2 | ★2 / ★3 |
| GN-CM1-20-16 | 같은 I-SC / I-EQV 경계. 또 확인체크가 소문항 5개·유형 세 갈래로 직전 예제와 동급 ★3 이 됨 | ★2 / ★3 |
| GN-CM1-21-17 | 「4 를 곱한 뒤 4 로 나눠 되돌린다」를 depth 3 으로 보아 +1(★3). 항등 곱(21-e6⑴)의 변형일 뿐이라고 보면 depth 2 · ★2 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 「공통부분이 있는 다항식의 전개」(20-e5 · 20-16) — 짝짓기 조건(두 쌍의 상수항 합이 같음)이 변형의 핵심 제약이라 기본 전개와 base ★ 가 다르다. ② 「곱셈 공식을 이용한 수의 계산」(21-e6 · 21-17 · 21-18 · 21-19) — 단원 10문 중 4문으로 비중이 크고, 안에서 다시 **(a) 없는 인수를 곱해 합차 연쇄 만들기**(21-e6⑴ · 21-17)와 **(b) 수를 10^n 다항식으로 옮기기**(21-e6⑵ · 21-18 · 21-19)로 갈린다. (a) 는 보정 나눗셈 유무로 ★ 가 한 단계 갈리므로 하위 유형을 나누는 편이 좋다.
- **통합해도 될 유형**: 18-13 · 18-14 · 19-e4 · 19-15 의 기본 전개는 어느 공식을 대입하느냐만 다를 뿐 골조가 같으므로 「곱셈 공식 기본형 전개」 하나로 묶고, 소문항에 순서 재배열(⑸⑹·⑺⑻)이 섞이면 base ★ 를 +1 하는 방식이 단순하다.
- **decayed_types 후보**: 이 단원에서 I-EQV(공통부분 치환 · 순서 재배열)는 5회 반복돼 사실상 학습 자산이다. 카탈로그 작성 시 03 단원의 감쇠 대상 상위 유형으로 I-EQV 를 올려 depth 3 자동 강등 대상으로 검토한다.
