---
name: mechanism-데이터-GN-CM1-02
description: 개념원리 공통수학1 02 다항식의 곱셈(1/1 · 15~16쪽 7문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1 (22개정) · 전사본 latex-bank/gn-cm1
  section: 02 다항식의 곱셈
  unit_code: GN-CM1-02
  part: "1/1"
  extract_range: "15~16쪽 · 15-7~16-12"
  total_problems: 7
  unit_total: 7
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 가 비어 있으면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (crops.json) — 이 범위는 그림 문항 0
---

# 개념원리 공통수학1 · 02 다항식의 곱셈 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학1 **02 다항식의 곱셈** 15~16쪽의 7문항 전수를 다룬다. 구역은 「개념원리 익히기」 3문(15-7~15-9 · 통번호)과 「필수·발전 예제」 4문(필수 예제 16-e3 + 그 뒤의 확인체크 16-10~16-12)으로, 단원 도입부라 지수법칙·분배법칙 전개 같은 기초 절차가 절반, 전개식의 계수를 뽑아내는 표준 기법이 나머지다. 그림 문항은 없다.

벤더 난이도 신호는 개념원리 고등의 구역·태그다. 「개념원리 익히기」(통번호 · tag 「확인체크」 포함)는 개념 확인이라 ★1 출발, 「필수」 예제는 ★2 출발이며, 여기서 M_total·통찰로 ±1 조정했다. 이 범위의 확인체크 3문(16-10~16-12)은 바로 앞 필수 예제의 기법을 미정계수·제곱식으로 한 단계 올린 적용 문항이라 출발점 ★1 에서 +1 해 ★2 로 뒀다(1단 조정이므로 분류 이슈 아님).

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(유형·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 창의 변형)를 채웠다. 답은 전사·검수 단계에서 답지와 대조가 끝난 값을 그대로 옮겼다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM1-15-7
  page: 15
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 지수법칙으로 단항식의 곱셈·나눗셈을 간단히 하기.
    거듭제곱의 거듭제곱·분수 계수·나눗셈이 섞인 네 식.
  category: "지수법칙(거듭제곱의 거듭제곱·곱·나눗셈) → 계수와 문자 분리 계산"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수법칙을 이용한 단항식의 곱셈·나눗셈"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각 소문항은 괄호를 먼저 거듭제곱해 계수와 문자를 분리한 뒤 지수를 더하고 빼면 끝난다.
    ⑶⑷는 세 항의 곱·나눗셈이 섞여 계산량만 조금 늘 뿐 도구는 같다(Mk 2).
    함정은 계수의 부호와 분수 계수 세제곱 정도(Mt 1). 익히기 구역·통찰 0 → ★1.
  tier: star_1
  mechanism_primary: "괄호의 거듭제곱 전개 → 계수끼리·문자끼리 분리 → 지수 덧셈·뺄셈 → 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $-4a^4b^5$ ⑵ $16x^7$ ⑶ $a^2b^{12}c^5$ ⑷ $-\dfrac{1}{27}b^7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/15-7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(2·4·2/3·1/2)와 지수(괄호 밖 2·3, 안쪽 1~3)를 바꿀 수 있음. 제약: 나눗셈 결과의 지수가 음이 되지 않게 분자 쪽 지수를 크게 잡고, 분수 계수는 세제곱해도 약분되는 값(1/2·2/3·3/4)으로 두어 답이 기약분수 한 개로 떨어지게 한다."
    creative: "(1) 나눗셈을 곱셈의 역수 꼴로 바꿔 쓰게 하기(★1 유지) (2) 답을 주고 빠진 지수를 찾게 하는 역문제(I-BW d1 · ★2) (3) 음수 밑의 홀·짝 거듭제곱을 섞어 부호 함정을 늘리면 Mt 2 로 ★2 후보."
```

```yaml
- id: GN-CM1-15-8
  page: 15
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑹ 다항식을 전개하기. 단항식×다항식, 일차식끼리,
    일차식×이차식, 두 문자가 섞인 식, 삼항식×삼항식까지 차례로 올라간다.
  category: "분배법칙 → 항별 곱 → 동류항 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분배법칙을 이용한 다항식의 전개"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    도구는 여섯 소문항 모두 분배법칙 하나이고, ⑸⑹만 항 수가 늘어 곱의 개수가 6~9개가 된다(Ms 2).
    실수 지점은 동류항 묶기와 부호이며 전략 선택이나 표현 전환은 없다(통찰 0).
    익히기 구역 ★1 출발, M_total 6 이라 −1 조정 없이 ★1.
  tier: star_1
  mechanism_primary: "각 항을 빠짐없이 곱함(분배법칙) → 동류항끼리 묶기 → 차수 내림차순 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $2x^3y-2x^2y^2+6xy^3$ ⑵ $2x^2-3x-5$ ⑶ $x^3-x^2+2x-8$ ⑷ $x^3-4x^2y+4xy^2+3xy-6y^2$ ⑸ $6x^4-3x^3+5x^2+2x-6$ ⑹ $2x^2-xy-3x-3y^2+7y-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/15-8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 인수의 계수·상수항을 바꿀 수 있음. 제약: 두 문자 식(⑷⑹)은 차수별 동류항이 실제로 합쳐지도록 계수를 잡아야 정리 단계가 살아 있고, 전개 결과의 항 수가 5~7개를 넘지 않게 한다."
    creative: "(1) 전개식을 주고 원래 두 인수를 찾게 하기(I-BW d1 · ★2) (2) 특정 항의 계수만 묻는 꼴로 바꾸면 16-e3 골조로 이동(★2) (3) 곱셈 공식((a+b)^2·(a+b)(a-b))으로 처리할 수 있는 배치를 섞어 전개 vs 공식 선택을 만들면 I-SC d1 · ★2."
```

```yaml
- id: GN-CM1-15-9
  page: 15
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    $(x+m)(x+n)$ 을 전개하는 네 단계 ㄱ~ㄹ 이 제시되고,
    그중 분배법칙이 사용된 곳을 모두 고르는 문항.
  category: "전개 과정의 각 단계 ↔ 연산 법칙(분배·교환·결합) 대응시키기"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "전개 과정에서 사용된 연산 법칙 찾기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각 줄에서 무엇이 바뀌었는지만 보면 된다. ㄱ은 괄호를 풀어 곱을 나눠 쓴 분배,
    ㄴ은 묶음 바꾸기(결합), ㄷ은 자리 바꾸기(교환), ㄹ은 공통인수로 묶는 역방향 분배다.
    ㄹ 을 분배법칙으로 인식하는 것이 유일한 걸림돌이고 계산은 없다(Mk 1 · 문자 계수라 Ma 2).
    [분류 이슈] 법칙 식별(메타) 문항이라 통찰 10유형에 대응 코드가 없어 절차형으로 기록.
  tier: star_1
  mechanism_primary: "각 단계의 변화(괄호 풀기 / 묶음 / 자리 / 공통인수 묶기) 확인 → 분배법칙인 ㄱ·ㄹ 선택"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "ㄱ, ㄹ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/15-9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바꿀 수치가 사실상 없는 문항(문자 m·n 과 단계 구성이 골조). 숫자 변형 대신 전개 대상 식을 $(x+m)(x+n)$ → $(ax+b)(cx+d)$ 나 $(x+m)(x^2+n)$ 으로 바꿔 단계 수를 조정한다. 제약: 단계별로 사용 법칙이 하나씩만 대응되도록 쪼개 써야 정답이 유일해진다."
    creative: "(1) 교환법칙·결합법칙이 쓰인 곳을 묻기(골조 동일 ★1) (2) 각 단계에 법칙 이름을 모두 붙이게 하는 서술형(★2) (3) 일부러 틀린 단계를 한 줄 끼워 넣고 오류 단계를 찾게 하면 검증이 의무가 되어 I-VF d1 · ★3 후보."
```

### 필수·발전 예제

```yaml
- id: GN-CM1-16-e3
  page: 16
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 삼차식 두 개의 곱에서 $x^3$ 의 계수 구하기.
    ⑵ 두 다항식의 곱에서 상수항을 포함한 모든 항의 계수들의 총합 구하기.
  category: "필요한 차수만 선택 전개 → 계수 합산 / 계수 총합은 $x=1$ 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'모든 항의 계수들의 총합'을 '전개식에 x=1 을 대입한 값'이라는 동치 조건으로 옮겨 전개 자체를 생략"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "다항식의 전개식에서 계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴은 전개를 다 하지 않고 차수의 합이 3 이 되는 항 짝만 골라 곱해 더하는 표준 기법(절차).
    ⑵는 계수 총합을 x=1 대입으로 바꿔 읽는 것이 핵심이고, 이를 못 보면 전개를 전부 해야 한다(EQV d2).
    필수 예제 ★2 출발, 통찰 1개(d2)로 +1 조건(2개 이상 또는 depth 3)에 못 미쳐 ★2 유지.
  tier: star_2
  mechanism_primary: "⑴ 차수 합이 3 인 항 짝만 골라 곱해 더하기 → ⑵ 계수 총합 = f(1)g(1) 로 치환해 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $33$ ⑵ $20$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/16-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 인수의 계수와 목표 차수(x^2·x^3·x^4)를 바꿀 수 있음. 제약: ⑴은 목표 차수를 만드는 항 짝이 3~4개가 되도록 차수를 잡아야 '전부 전개'와 '골라 곱하기'의 차이가 드러나고, ⑵는 x=1 대입값이 정수로 떨어지게 계수 합을 잡는다."
    creative: "(1) ⑵를 '짝수 차수 항 계수의 합'으로 바꾸면 x=1·x=-1 두 번 대입 → I-EQV d3 · ★3 (2) 계수 총합을 주고 미정계수를 찾게 하면 16-12 골조(★2) (3) ⑴을 세 다항식의 곱으로 늘리면 항 짝 세기가 조합으로 확장돼 Ms 3 · ★3."
```

```yaml
- id: GN-CM1-16-10
  page: 16
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $(1+x-3x^2+x^3)^2$ 의 전개식에서 $x^4$ 의 계수를 $a$,
    $x^5$ 의 계수를 $b$ 라 할 때 $a-b$ 의 값.
  category: "제곱식의 선택 전개 → 차수 합이 맞는 항 짝(교차항은 2배) 합산"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "전개식에서 특정 항의 계수 구하기(제곱식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    같은 사차식 두 개의 곱으로 보고 차수 합이 4·5 가 되는 항 짝만 고른다.
    서로 다른 두 항의 곱은 두 번 나오므로 2배, 같은 항끼리의 곱은 한 번이라는 것이 유일한 함정(Mt 1).
    도구는 16-e3 ⑴과 동일한 선택 전개라 통찰로 따로 세지 않았다.
    [분류 이슈] 교차항 ×2 인식을 I-SYM 으로 볼 수도 있으나 제곱 전개의 표준 절차로 처리.
  tier: star_2
  mechanism_primary: "제곱을 같은 식 두 개의 곱으로 보기 → x^4·x^5 를 만드는 항 짝 나열(교차항 ×2) → a, b 계산 후 a−b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$17$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/16-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 안 계수(1·1·-3·1)와 묻는 차수(x^3·x^4·x^5)를 바꿀 수 있음. 제약: 목표 차수를 만드는 항 짝이 교차항과 제곱항을 모두 포함해야 ×2 함정이 살아 있고, a−b 가 정수 한 자리~두 자리로 떨어지게 계수를 잡는다."
    creative: "(1) 세제곱 $(\\cdots)^3$ 으로 올리면 항 짝이 조합 세기로 바뀌어 Ms 3 · ★3 (2) x^4 계수가 주어진 값이 되도록 괄호 안 계수를 정하게 하면 역추적 ★3 (3) 두 계수의 비·합 조건을 함께 주면 조건 통합이 생겨 ★3."
```

```yaml
- id: GN-CM1-16-11
  page: 16
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $(x^3+ax^2+b)(2x^2-3bx+4)$ 의 전개식에서 $x^4$ 의 계수와 $x^2$ 의 계수가
    모두 $8$ 일 때, 상수 $a$, $b$ 에 대한 $a+b$ 의 값.
  category: "미지수가 섞인 계수의 선택 전개 → 두 계수 조건을 연립방정식으로 → a, b"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "전개식의 계수 조건으로 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x^4 항은 x^3·(-3bx) 와 ax^2·2x^2 에서, x^2 항은 ax^2·4 와 b·2x^2 에서만 나온다.
    b 가 두 인수에 모두 등장해 두 조건이 a·b 로 엮인 연립이 되는 것이 계산 포인트(Ma 2).
    미정계수 연립은 스키마상 표준 절차라 통찰로 세지 않았고, 확인체크 ★1 출발에서 M_total 7 로 +1 해 ★2.
    [분류 이슈] 두 계수 조건의 결합을 I-CON 으로 볼 여지가 있으나 CM1 보수 정책에 따라 절차로 처리.
  tier: star_2
  mechanism_primary: "x^4·x^2 를 만드는 항 짝만 골라 계수식 세우기 → 2a−3b=8, 4a+2b=8 연립 → a+b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/16-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 계수 조건의 목표값(8, 8)과 고정 계수(2·4·-3)를 바꿀 수 있음. 제약: 연립의 해가 유일하도록 두 식이 서로 상수배가 아니어야 하고, a·b 가 정수나 간단한 분수로 떨어지게 목표값을 고른다(현재 답 3/2)."
    creative: "(1) 같은 미지수 b 를 한쪽 인수에만 두면 조건이 분리돼 ★1~2 로 내려감 (2) 조건을 '모든 계수의 총합'으로 바꾸면 x=1 대입 골조(★2 · EQV d2) (3) 조건 하나를 부등식(x^4 계수가 x^2 계수보다 크다)으로 바꾸면 범위 판정이 붙어 ★3."
```

```yaml
- id: GN-CM1-16-12
  page: 16
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $(3x-1)(x^2-kx-4k)$ 의 전개식에서 상수항을 포함한 모든 항의 계수들의 총합이
    $-18$ 일 때 상수 $k$ 의 값.
  category: "계수 총합 = $x=1$ 대입 → $k$ 에 대한 일차방정식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'모든 항의 계수들의 총합 = -18' 조건을 '두 인수에 x=1 을 대입한 곱 = -18' 로 바꿔 전개 없이 k 방정식으로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "계수의 총합 조건으로 미정계수 구하기(x=1 대입)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=1 대입으로 보면 $2(1-5k)=-18$ 한 줄이고, 못 보면 k 가 섞인 전개를 전부 한 뒤 계수를 더해야 한다(EQV d2).
    계산 자체는 일차방정식 하나라 가볍고(Mk 1), 미지수 k 가 두 항에 들어가 Ma 2.
    확인체크 ★1 출발이나 동치 변환 통찰 d2 와 M_total 6 으로 +1 해 ★2.
  tier: star_2
  mechanism_primary: "계수 총합 조건 → x=1 대입 → 2(1−5k)=−18 → k"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/16-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "총합 목표값(-18)과 두 인수의 계수(3·-1·-k·-4k)를 바꿀 수 있음. 제약: x=1 대입 결과가 k 에 대한 일차식이어야 답이 하나로 떨어지고, 목표값은 첫 인수의 f(1) 로 나누어떨어지게 잡아 k 가 정수가 되게 한다."
    creative: "(1) k 를 이차로 넣어(kx^2) x=1 대입이 이차방정식이 되게 하면 근 두 개 중 조건 검증이 붙어 I-VF d2 · ★3 (2) '짝수 차수 계수의 합'으로 바꾸면 x=1·x=-1 두 번 대입 → ★3 (3) 총합 대신 특정 항의 계수를 주면 16-11 골조(절차형 ★2)."
```

## 표본 판정 요약 (7문)

- ★ 분포: ★1 3 · ★2 4 · ★3 0 · ★4 0 · ★5 0
- 통찰형 2(16-e3 · 16-12 · 둘 다 I-EQV d2) · 절차형 5 · premium 0
- 통찰 유형 분포: I-EQV 2 · 그 외 0. depth 3 · SC/VF/SYM/XU 없음 → ★4 이상 슬롯 없음(단원 도입부라 자연스러움)
- type_hint 상위: 「전개식에서 계수 구하기」 계열 4(16-e3 · 16-10 · 16-11 · 16-12) · 「분배법칙 전개」 1 · 「지수법칙 단항식 계산」 1 · 「연산 법칙 찾기」 1
- 대상층: 하위권 3 · 중하위권 2 · 중위권 2
- 그림: 0문 · 소문항 묶음 요약: 15-7(4) · 15-8(6) · 16-e3(2)

## 분류 이슈 목록

판정이 애매하거나 통찰 10유형에 깔끔히 대응되지 않아 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-15-9 | 전개 단계에 쓰인 법칙을 식별하는 메타 문항 — 학생이 조건을 변환하는 것이 아니라 주어진 변형을 분류하므로 통찰 10유형에 대응 코드가 없음. 절차형 ★1 로 기록 | ★1 / ★2 |
| GN-CM1-16-10 | 제곱 전개에서 교차항을 2배로 세는 인식을 I-SYM(배치 대칭)으로 볼지 제곱 전개의 표준 절차로 볼지 애매. 후자로 처리해 절차형 | ★2 / ★3 |
| GN-CM1-16-11 | b 가 두 인수에 모두 등장해 두 계수 조건이 하나의 연립으로 엮이는 것을 I-CON 으로 볼 여지가 있으나, CM1 에서는 I-CON 을 보수적으로 인정하는 정책에 따라 절차로 처리 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 압도적으로 반복된 골조는 **「전개식에서 계수 구하기」 4문**이다. 다만 내부 기법이 갈리므로 카탈로그에서는 최소 세 유형으로 나누는 것이 맞다: ⑴ 특정 차수 계수 뽑기(선택 전개 · 16-e3⑴ · 16-10) ⑵ 계수의 총합 = $x=1$ 대입(16-e3⑵ · 16-12) ⑶ 계수 조건으로 미정계수 역추적(16-11). ⑵만 동치 변환 통찰이 있고 ⑴⑶은 절차라 base ★ 가 달라진다.
- 제곱식 전개(16-10)는 ⑴의 하위 변형으로 묶어도 되지만 교차항 ×2 함정이 고유하므로 소유형 표시를 남긴다.
- 15-7(지수법칙 단항식 계산)·15-8(분배법칙 전개)은 단원 도입 기초 유형 2개로 그대로 세운다. 15-9(연산 법칙 찾기)는 계산형이 아니라 개념 식별형이라 별도 소유형으로 두거나 카탈로그 밖 「개념 확인」 분류가 필요하다.
