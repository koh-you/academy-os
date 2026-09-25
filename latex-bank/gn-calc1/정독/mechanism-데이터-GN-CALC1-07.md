---
name: mechanism-데이터-GN-CALC1-07
description: 개념원리 미적분Ⅰ 07 미분계수(1/1 · 61~65쪽 · 14문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅰ · 전사본 latex-bank/gn-calc1
  section: 07 미분계수
  unit_code: CALC1-07
  part: "1/1"
  extract_range: "61~65쪽 · 61-e1~65-104"
  total_problems: 14
  unit_total: 14
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc1/items/<id>.tex
  image_source: latex-bank/gn-calc1/figures/ (crops.json)
---

# 개념원리 미적분Ⅰ · 07 미분계수 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅰ 61~65쪽 「07 미분계수」 전 범위 14문항(필수 예제 5 + 확인체크 9)을 다룬다. 전사본의 group section 이 「필수·발전 예제」 하나뿐이라 본문 절도 하나이며, 문항 순서는 전사본 번호 순(61-e1 … 65-104)이다.

벤더 난이도 신호는 두 가지다. 상자 발문으로 실린 **필수 예제**(id `쪽-eN` · tag 「필수」)는 ★2 출발, 각 예제 바로 뒤에 붙는 **확인체크** 통번호 문항(96~104)은 개념 확인용이라 ★1 출발로 두고, M_total 과 통찰 유무로 ±1 조정했다. 이 단원에는 STEP 연습문제·기출 태그·발전/특강 문항이 없어 ★4 이상은 나오지 않는다.

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다. 이 단원의 통찰은 대부분 **미분계수 정의 꼴로 맞추는 동치 변형(I-EQV)** 과 **기울기로 옮겨 읽는 표현 전환(I-RT)** 두 갈래로 모인다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CALC1-61-e1
  page: 61
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    f(x)=x^3-1 에서 x 가 1 에서 4 까지 변할 때의 평균변화율과 x=a 에서의 미분계수가 같을 때, 양수 a 의 값.
  category: "평균변화율 계산 → 도함수 대입 → 이차방정식 → 양수근 선택"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평균변화율과 미분계수를 같게 하는 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평균변화율 (f(4)-f(1))/3 = 21 과 f'(a)=3a^2 을 같게 놓는 두 정의 결합. 통찰 없는 표준 절차이고 M_total 4 로 -1 후보였으나, 단원의 두 정의를 방정식으로 잇고 양수 조건으로 근을 고르는 대표 절차라 필수 예제 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "평균변화율 (f(4)-f(1))/(4-1) → f'(a)=3a^2 → 3a^2 = 평균변화율 → 양수근 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{7}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/61-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 양 끝(1, 4)과 f 의 상수항을 바꿀 수 있음. 제약: 삼차함수에서 구간 [p, q] 의 평균변화율은 p^2+pq+q^2 이므로 3a^2 = p^2+pq+q^2 이 되고, a 가 유리수로 떨어지려면 p^2+pq+q^2 이 3 의 배수이면서 몫이 제곱수여야 한다. 양수 a 하나만 답이 되도록 구간 길이는 0 이 아니어야 한다."
    creative: "(1) 양수 조건을 빼고 모든 a 를 묻게 하면 부호 함정이 하나 늘어 ★2 유지 (2) 계수를 미지수로 두고 a 가 주어진 값이 되도록 하는 계수를 역산하면 I-BW 추가 ★3 (3) '구간 안에서 평균변화율과 같은 미분계수를 갖는 점이 반드시 존재한다'를 그래프로 설명하게 하면 평균값 정리 직관이 들어가 ★3."
```

```yaml
- id: GN-CALC1-61-96
  page: 61
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x)=x^2-(√a)x+4 에서 x 가 2 에서 4 까지 변할 때의 평균변화율이 1 일 때, 상수 a 의 값.
  category: "평균변화율 정의 대입 → √a 에 대한 일차방정식 → 제곱"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평균변화율 조건으로 미정계수 결정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    평균변화율 정의에 그대로 대입하면 이차항이 정리돼 √a 에 대한 일차식만 남는다. 마지막에 √a 의 값을 제곱해 a 를 얻을 때 √a 가 음수가 될 수 없다는 점만 확인하면 끝. 확인체크 출발점 ★1 · 통찰 0 · M_total 5 로 그대로 ★1.
  tier: star_1
  mechanism_primary: "(f(4)-f(2))/2 를 정리 → √a 에 대한 일차방정식 → √a 값을 제곱해 a"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$25$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/61-96.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [2, 4] 의 양 끝, 상수항 4, 평균변화율 값 1 을 바꿀 수 있음. 제약: 평균변화율이 √a 에 대한 일차식이 되도록 계수 자리를 유지하고, √a 가 양수로 나오게 우변을 잡아야 한다(상수항 4 는 평균변화율에서 소거되므로 난이도에 영향이 없다)."
    creative: "(1) √a 를 |a| 나 a^2 으로 바꾸면 답이 두 개가 되어 I-MI·T-부호 추가 ★2 (2) 평균변화율을 미지수로 두고 a 의 범위를 묻기 ★2 (3) 같은 함수에서 x=3 의 미분계수까지 이어 묻는 2단 구성 ★2."
```

```yaml
- id: GN-CALC1-61-97
  page: 61
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x)=x^2+x+1 에서 x 가 1 에서 a 까지 변할 때의 평균변화율과 x=2 에서의 미분계수가 같을 때, 상수 a 의 값.
  category: "평균변화율 약분 → 미분계수와 등식 → 일차방정식"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평균변화율과 미분계수를 같게 하는 값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분자 a^2+a-2 가 (a-1)(a+2) 로 인수분해돼 약분되면 평균변화율은 a+2 한 항. f'(2) 와 같게 두면 일차방정식 한 줄이다. 확인체크 출발점 ★1 · 통찰 0 · M_total 5 → ★1. 61-e1 과 같은 골조이지만 근 선택이 없어 한 단계 아래다.
  tier: star_1
  mechanism_primary: "(f(a)-f(1))/(a-1) 을 약분해 a+2 → f'(2) 와 같게 → a"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/61-97.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 왼쪽 끝 1, 미분계수를 재는 점 2, 이차·일차항 계수를 바꿀 수 있음. 제약: 분자가 (a-1) 로 약분되도록 왼쪽 끝을 f 의 값이 계산되는 정수로 두고, a≠1(구간 길이 0 금지) 이어야 한다."
    creative: "(1) 미분계수를 재는 점을 미지수로 두고 '그 점이 구간의 중점'임을 보이게 하면 ★2 (2) 삼차함수로 바꾸면 등식이 이차방정식이 되어 근 선택(T-범위) 추가 ★2 (3) 평균값 정리의 c 를 구하는 형태로 물으면 ★3."
```

```yaml
- id: GN-CALC1-62-e2
  page: 62
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    다항함수 f 에 대하여 f'(a)=1 일 때 h→0 극한값 세 개. ⑴ 분자 증분이 2h ⑵ 증분이 h^3 ⑶ (f(a+3h)-f(a-2h))/h.
  category: "분모를 증분에 맞춰 보정 → 미분계수 정의 꼴 → 계수배의 합"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑶ 의 분자에 f(a) 를 빼고 더해 두 개의 미분계수 정의 꼴로 분해"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "미분계수를 이용한 극한값의 계산 — h→0 꼴"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 소문항 모두 분모를 분자의 증분과 같게 만들어 f'(a) 꼴을 드러내는 한 골조. ⑵ 는 분모를 h^3 으로 맞추고 남은 h^2 이 0 으로 가는 것이, ⑶ 은 f(a) 를 삽입해 3f'(a)+2f'(a) 로 쪼개는 동치 변형(EQV d1)이 핵심이다. 필수 예제 ★2 출발 · 통찰 1개(d1) → ★2 유지.
  tier: star_2
  mechanism_primary: "각 분자의 증분 확인 → 분모를 그 증분으로 보정(남는 h 의 거듭제곱은 0) → ⑶ 은 f(a) 삽입 후 두 미분계수의 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑴ $2$ ⑵ $0$ ⑶ $5$"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/62-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f'(a) 의 값과 각 소문항의 증분 계수(2h · 3h · -2h), 증분의 차수(h^2 · h^3)를 바꿀 수 있음. 제약: 증분 차수가 2 이상이면 답은 항상 0 이고 차수가 1 이면 계수배가 그대로 답이므로, ⑶ 의 합·차 구조를 살리려면 두 증분의 부호를 반대로 둔다."
    creative: "(1) 극한값을 주고 증분 계수를 역산하게 하면 I-BW 추가 ★3 (2) f'(a) 대신 f(a) 만 주고 극한이 존재할 조건을 묻기 ★3 (3) 분모를 h^2 으로 바꿔 극한이 발산하는 경우를 판별하게 하면 T-범위 추가 ★3."
```

```yaml
- id: GN-CALC1-62-98
  page: 62
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    다항함수 f 에 대하여 f'(a)=2 일 때 h→0 극한값 네 개. ⑴ 증분 -4h ⑵ 증분 h^2 ⑶ 대칭차분 (f(a+h)-f(a-h))/(2h) ⑷ (f(a+5h)-f(a+h))/h.
  category: "분모를 증분에 맞춰 보정 → f(a) 삽입 분해 → 계수배의 합·차"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑶⑷ 에서 분자에 f(a) 를 빼고 더해 두 미분계수 정의 꼴의 합·차로 분해"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "미분계수를 이용한 극한값의 계산 — h→0 꼴"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 증분 -4h 라 -4f'(a), ⑵ 는 증분이 h^2 이라 남는 h 가 0 으로 가 값이 0. ⑶ 대칭차분과 ⑷ 는 f(a) 를 삽입해 두 정의 꼴로 쪼개는 동치 변형(EQV d1)이 필요하다. 확인체크 출발점 ★1 에 통찰 1 · M_total 7 로 +1 하여 ★2. 62-e2 의 확인체크 짝이며 소문항이 하나 더 많을 뿐 골조는 같다.
  tier: star_2
  mechanism_primary: "증분 확인 → 분모 보정 → ⑶⑷ 는 f(a) 삽입으로 두 미분계수의 합·차"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑴ $-8$ ⑵ $0$ ⑶ $2$ ⑷ $8$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/62-98.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f'(a) 값과 증분 계수(-4h · 5h · h), 대칭차분의 분모 계수 2 를 바꿀 수 있음. 제약: ⑶ 의 답이 f'(a) 그대로 나오려면 분모 계수가 두 증분 계수의 합과 같아야 하고, ⑷ 처럼 두 증분이 모두 a 근방이면 답은 계수의 차배가 된다."
    creative: "(1) 대칭차분에서 분모 계수만 다르게 주어 '왜 2h 인가'를 설명하게 하면 ★2 (2) ⑷ 의 두 계수를 같게 만들어 극한이 0 이 되는 경우를 섞으면 I-VF 성격의 확인이 붙어 ★3 (3) f 가 미분가능하지 않은 점을 섞어 정의 꼴이 성립하지 않는 경우를 판별하게 하면 ★3."
```

```yaml
- id: GN-CALC1-62-99
  page: 62
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    미분가능한 f 에 대하여 h→0 에서 (f(1-2h)-f(1+h))/h 의 극한이 9 일 때 f'(1) 의 값.
  category: "f(1) 삽입 분해 → f'(1) 의 계수배 등식 → 역산"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분자에 f(1) 을 빼고 더해 증분이 -2h 인 항과 +h 인 항의 두 미분계수로 분해"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "극한 조건에서 f'(a) 역산 — h→0 꼴"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 항 모두 1 근방의 증분이므로 f(1) 을 삽입하면 -2f'(1) 과 -f'(1) 의 합, 즉 f'(1) 의 계수배가 된다(EQV d1). 증분 -2h 쪽 계수의 부호가 유일한 함정이고 나머지는 일차방정식 역산. 확인체크 ★1 출발에 통찰 1 · M_total 6 로 +1 → ★2.
  tier: star_2
  mechanism_primary: "분자에 f(1) 삽입 → (-2-1)f'(1) 꼴로 정리 → 주어진 극한값으로 f'(1) 역산"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$-3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/62-99.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 증분 계수(-2h · +h)와 우변 9, 기준점 1 을 바꿀 수 있음. 제약: 두 계수의 차가 0 이면 f'(1) 이 소거돼 조건이 무의미해지므로 계수 합이 0 이 아니어야 하고, 우변을 그 계수로 나눈 값이 정수가 되게 고른다."
    creative: "(1) f'(1) 을 주고 극한값을 묻는 정방향으로 뒤집으면 ★1~2 (2) 한 증분을 h^2 으로 바꿔 항 하나가 소거되게 하면 ★2 (3) f(1) 의 값까지 함께 묻거나 f 가 미분가능할 조건을 묻는 형태로 확장하면 ★3."
```

```yaml
- id: GN-CALC1-63-e3
  page: 63
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    다항함수 f 에 f(1)=2, f'(1)=3 일 때 x→1 극한값 세 개. ⑴ (f(x^3)-f(1))/(x-1) ⑵ (x^2-1)/(f(x)-f(1)) ⑶ (x^2 f(1)-f(x^2))/(x-1).
  category: "분모를 증분으로 갈라 f'(1) 인자와 다항 인자의 곱 → ⑶ 은 f(1) 삽입 후 분리"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "(f(x^3)-f(1))/(x^3-1) 과 (x^3-1)/(x-1) 의 곱으로 갈라 정의 꼴을 만든다"
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑶ 의 분자에 f(1) 을 삽입해 미분계수 항 -(f(x^2)-f(1))/(x-1) 과 평균변화율 항 f(1)(x^2-1)/(x-1) 로 분리"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "미분계수를 이용한 극한값의 계산 — x→a 꼴"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴⑵ 는 분모를 증분(x^3-1 · x-1)과 같게 만든 뒤 남는 다항식의 극한을 곱하거나 나누는 표준 골조(EQV d1). ⑶ 은 분자가 x^2 f(1)-f(x^2) 여서 f(1) 을 삽입해 두 덩어리로 갈라야 하고, f(x^2) 와 x^2 f(1) 의 표기를 혼동하기 쉬워 한 단계 깊다(EQV d2). 통찰 2 · M_total 8 → 필수 예제 ★2 출발에서 +1 로 ★3.
  tier: star_3
  mechanism_primary: "분모를 합성 증분에 맞춰 갈라 f'(1)·(다항 극한) 으로 → ⑵ 는 역수 → ⑶ 은 f(1) 삽입 후 두 극한의 차"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $9$ ⑵ $\dfrac{2}{3}$ ⑶ $-2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/63-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(1) · f'(1) 의 값, 합성 지수(x^3 · x^2), 분자·분모의 다항 인자를 바꿀 수 있음. 제약: 합성 인자 x^n-1 이 (x-1) 로 약분돼야 하므로 지수는 자연수여야 하고, ⑵ 처럼 f(x)-f(1) 이 분모에 오면 f'(1)≠0 이어야 극한이 존재한다."
    creative: "(1) x→1 을 x→a 로 일반화하면 Mₐ 가 올라 ★3 유지~상승 (2) ⑶ 에서 f(1) 을 미지수로 두고 극한값을 주어 역산시키면 I-BW 추가 ★4 후보 (3) f'(1)=0 인 경우를 섞어 극한의 존재 여부부터 판정하게 하면 I-VF 성격이 붙어 ★4."
```

```yaml
- id: GN-CALC1-63-100
  page: 63
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    다항함수 f 에 f(2)=3, f'(2)=1/2 일 때 x→2 극한값 세 개. ⑴ (f(x)-f(2))/(x^2-4) ⑵ (x^3-8)/(f(x)-f(2)) ⑶ (2f(x)-x f(2))/(x-2).
  category: "분모를 (x-2) 인자로 갈라 f'(2) 꼴 → ⑶ 은 f(2) 삽입 후 분리"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분모 x^2-4 · x^3-8 을 (x-2) 인자로 분해해 미분계수 정의 꼴과 다항 극한의 곱으로 만든다"
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑶ 의 분자에 2f(2) 를 빼고 더해 2(f(x)-f(2))/(x-2) 와 -f(2)(x-2)/(x-2) 로 분리"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "미분계수를 이용한 극한값의 계산 — x→a 꼴"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴⑵ 는 분모의 인수분해로 (x-2) 를 드러내 f'(2) 꼴과 남은 다항 극한의 곱·역수로 정리하는 표준 골조(EQV d1). ⑶ 은 2f(x)-x f(2) 에 2f(2) 를 삽입해 미분계수 항과 상수 항으로 갈라야 해서 한 단계 깊다(EQV d2). [분류 이슈] 확인체크(★1 출발)와 2단 차이지만 ⑶ 의 골조가 필수 예제 63-e3 와 동일해 ★3 으로 기록한다.
  tier: star_3
  mechanism_primary: "분모를 (x-2) 인자로 분해 → f'(2)·(남은 극한) → ⑶ 은 2f(2) 삽입 후 두 항의 차"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $\dfrac{1}{8}$ ⑵ $24$ ⑶ $-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/63-100.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(2) · f'(2) 의 값과 분모의 거듭제곱 차수(x^2-4 · x^3-8), ⑶ 의 계수 2 를 바꿀 수 있음. 제약: 분모가 (x-2) 로 약분되도록 기준점과 상수를 짝지어야 하고(x^n - 2^n 꼴), ⑵ 처럼 f(x)-f(2) 가 분모면 f'(2)≠0 이어야 한다."
    creative: "(1) ⑶ 의 계수 2 와 x 의 자리를 바꿔 (x f(x)-2f(2))/(x-2) 로 두면 곱의 미분 직관이 필요해 ★3 (2) f'(2) 를 미지수로 두고 극한값을 주어 역산하면 I-BW 추가 ★3~4 (3) 기준점을 문자 a 로 일반화하면 Mₐ 상승 ★3."
```

```yaml
- id: GN-CALC1-64-e4
  page: 64
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    미분가능한 f 가 모든 실수 x, y 에 대해 f(x+y)=f(x)+f(y) 를 만족시키고 f'(0)=4 일 때 f'(2) 의 값.
  category: "관계식에 0 대입 → f(0) 확정 → 미분계수 정의 분자를 관계식으로 치환 → f'(0) 으로 환원"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x=y=0 을 대입해 f(0)=0 을 먼저 끌어낸다(이 값이 있어야 f(h)/h 가 미분계수가 된다)"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f'(2) 의 정의 분자 f(2+h)-f(2) 에 관계식을 적용해 f(h) 로 줄이고 f'(0) 의 정의 꼴로 환원"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "관계식이 주어진 경우의 미분계수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    관계식을 미분계수 정의의 분자에 그대로 대입해 f(2+h)-f(2)=f(h) 로 줄이는 것이 골조이고, 그 f(h)/h 가 f'(0) 이 되려면 f(0)=0 이 먼저 확정돼야 한다. 두 단계 모두 조건의 동치 변환(EQV d1·d2)이며 계산은 거의 없다. 필수 예제 ★2 출발 · 통찰 2 → +1 로 ★3.
  tier: star_3
  mechanism_primary: "x=y=0 → f(0)=0 → f'(2)=lim f(h)/h = lim (f(h)-f(0))/h = f'(0)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$4$"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/64-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f'(0) 의 값과 묻는 지점 2 를 바꿔도 가법 관계식에서는 f'(x) 가 상수라 답이 늘 f'(0) 이다. 제약: 숫자만 바꾸면 난이도가 오르지 않으므로 관계식의 추가항(상수 · xy)을 건드려야 한다."
    creative: "(1) 우변에 상수항이나 xy 항을 더하면 f(0) 값과 f'(x) 의 x 의존이 생긴다(64-101 · 64-102 가 그 변형) (2) f(x+y)=f(x)f(y) 꼴 곱셈형이면 f(0)=1 과 지수함수 직관이 필요해 ★4 (3) f'(2) 대신 f(2) 를 묻고 f(1) 을 주면 관계식 반복 적용이 들어가 ★3."
```

```yaml
- id: GN-CALC1-64-101
  page: 64
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    미분가능한 f 가 모든 실수 x, y 에 대해 f(x+y)=f(x)+f(y)+1 을 만족시키고 f'(4)=1 일 때 f'(0) 의 값.
  category: "관계식에 0 대입 → f(0) 확정 → f'(4) 의 정의 분자를 f(h)+1 로 치환 → f'(0) 과 동일"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x=y=0 대입으로 f(0)=-1 을 얻는다(상수항 때문에 f(0)≠0)"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f'(4) 의 분자 f(4+h)-f(4)=f(h)+1 이 f(h)-f(0) 과 같음을 보고 f'(0) 으로 옮긴다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "관계식이 주어진 경우의 미분계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    상수항 +1 때문에 f(0)=-1 이 되고, f'(4) 의 정의 분자 f(h)+1 이 곧 f(h)-f(0) 이라 두 미분계수가 같아진다(EQV d1·d2). 64-e4 와 같은 골조에 상수항 처리만 추가된 한 번의 환원이라 확인체크 ★1 출발에서 +1 로 ★2.
  tier: star_2
  mechanism_primary: "x=y=0 → f(0)=-1 → f'(4)=lim (f(h)+1)/h = lim (f(h)-f(0))/h = f'(0)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/64-101.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항 +1 과 f'(4) 의 값, 묻는 지점을 바꿀 수 있음. 제약: 상수항이 c 이면 f(0)=-c 이고 f'(x) 는 여전히 상수이므로 답은 주어진 미분계수와 같다 — 숫자를 바꿔도 구조가 유지된다는 점을 문제 의도로 삼아야 한다."
    creative: "(1) f(0) 자체를 묻게 하면 관계식 대입 한 단계짜리 ★1 (2) 상수항 대신 x+y 항을 더하면 f'(x) 가 상수로 남지 않아 ★3 (3) f(1) 값을 추가로 주고 f(3) 을 묻는 관계식 반복 적용 ★3."
```

```yaml
- id: GN-CALC1-64-102
  page: 64
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    미분가능한 f 가 모든 실수 x, y 에 대해 f(x+y)=f(x)+f(y)+xy 를 만족시키고 f'(1)=3 일 때 f'(3) 의 값.
  category: "관계식에 0 대입 → f(0) 확정 → 정의 분자에 xy 항이 남아 f'(t)=f'(0)+t → 두 번 환원"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x=y=0 대입으로 f(0)=0 을 확정한다"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(t+h)-f(t)=f(h)+th 이므로 f'(t)=f'(0)+t 라는 구조를 끌어내고, f'(1) 로 f'(0) 을 먼저 구한 뒤 f'(3) 으로 옮긴다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "관계식이 주어진 경우의 미분계수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    xy 항 때문에 증분이 f(h)+th 가 되어 f'(t)=f'(0)+t 라는 x 의존 구조가 생긴다. 그래서 f'(1) 로 f'(0) 을 먼저 얻고 다시 f'(3) 으로 옮기는 2단 환원이 필요해 64-e4 · 64-101 보다 한 단계 깊다. [분류 이슈] 확인체크(★1 출발)와 2단 차이지만 필수 예제 64-e4 와 같은 골조에 환원이 한 번 더 있어 ★3 으로 기록한다.
  tier: star_3
  mechanism_primary: "x=y=0 → f(0)=0 → f'(t)=lim (f(h)+th)/h = f'(0)+t → f'(1) 로 f'(0) → f'(3)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$5$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/64-102.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "xy 의 계수, f'(1) 의 값, 묻는 지점 3 을 바꿀 수 있음. 제약: 계수가 k 이면 f'(t)=f'(0)+kt 이므로 두 지점의 차이가 답에 그대로 반영된다 — 주어진 지점과 묻는 지점을 다르게 두어야 2단 환원이 살아난다."
    creative: "(1) f'(0) 을 묻게 하면 환원이 한 번으로 줄어 ★2 (2) xy 대신 x^2 y^2 이나 x y(x+y) 를 넣으면 증분 차수가 올라가 일부 항이 0 이 되는 판별이 추가돼 ★3~4 (3) f(x) 의 식을 직접 구하게 하면(f(x)=x^2/2+cx) 관계식에서 함수 복원이라 ★4."
```

```yaml
- id: GN-CALC1-65-e5
  page: 65
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    증가하면서 위로 볼록한 y=f(x) 의 그래프(그림)에서 평균변화율 (f(b)-f(a))/(b-a) 와 f'(a), f'(b) 의 대소 비교.
  category: "미분계수 = 접선 기울기 · 평균변화율 = 할선 기울기로 옮겨 그림에서 기울기 비교"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세 값을 모두 기울기(접선 두 개 · 할선 하나)로 옮겨 그래프의 볼록성에서 대소를 읽는다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "미분계수의 기하적 의미 — 접선과 할선의 기울기 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계산이 전혀 없고 대수 표현을 기하 표현으로 옮기는 표현 전환(RT d2) 한 번이 전부다. 그래프가 증가하면서 위로 볼록해 x 가 커질수록 접선 기울기가 작아지고, 할선 기울기는 두 접선 기울기 사이에 놓인다. 필수 예제 ★2 출발 · 통찰 1개(d2, 2개 미만) → ★2 유지.
  tier: star_2
  mechanism_primary: "f'(a) · f'(b) = 각 점의 접선 기울기, 평균변화율 = 두 점을 잇는 할선 기울기 → 위로 볼록이라 기울기가 감소 → f'(b) < 할선 < f'(a)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$f''(b)<\dfrac{f(b)-f(a)}{b-a}<f''(a)$'
  answer_source: "본문 풀이"
  figure: "crop:fig-65-e5.png"
  latex: latex-bank/gn-calc1/items/65-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림 속 a, b 의 위치와 곡선의 볼록 방향만 바꿀 수 있고 숫자 변형 대상은 아니다. 제약: 라벨 a · b · y=f(x) 가 crop 이미지에 고정돼 있어 문자 이름을 바꾸려면 그림을 새로 만들어야 하고, 아래로 볼록으로 바꾸면 부등호가 모두 뒤집힌다."
    creative: "(1) 아래로 볼록 그래프로 바꿔 부등호를 뒤집기(★2 유지) (2) 구간 안의 한 점에서 접선 기울기가 할선 기울기와 같아짐(평균값 정리)까지 묻기 ★3 (3) 변곡점이 있는 그래프로 바꿔 구간을 나눠 비교하게 하면 I-MI 추가 ★3."
```

```yaml
- id: GN-CALC1-65-103
  page: 65
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 y=f(x) 위의 점 (2, f(2)) 에서의 접선의 기울기가 10 일 때, h→0 에서 (f(2+h)-f(2))/(5h) 의 값.
  category: "접선의 기울기 = 미분계수 → 분모의 상수를 극한 밖으로"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선의 기울기와 미분계수의 정의"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    접선의 기울기가 곧 미분계수라는 정의 확인과 분모의 상수 5 를 극한 밖으로 빼는 한 줄이 전부다. 통찰 없음 · M_total 6 이고 확인체크 출발점 ★1 을 그대로 둔다. 65-e5 의 확인체크 짝이지만 그림 해석이 없어 훨씬 가볍다.
  tier: star_1
  mechanism_primary: "접선의 기울기 = f'(2) → 분모의 5 를 밖으로 빼서 f'(2)/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/65-103.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접선 기울기 10, 접점의 x 좌표 2, 분모 상수 5 를 바꿀 수 있음. 제약: 답이 정수로 떨어지려면 기울기가 분모 상수의 배수여야 한다."
    creative: "(1) 분자를 f(2+3h)-f(2) 로 바꿔 증분 보정을 추가하면 ★2 (2) 접선의 방정식을 주고 기울기를 읽게 하면 단계가 하나 늘어 ★2 (3) 두 점의 접선 기울기를 주고 그 사이 평균변화율과 비교하게 하면 기하 해석이 들어가 ★2~3."
```

```yaml
- id: GN-CALC1-65-104
  page: 65
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    미분가능한 y=f(x) 의 그래프(그림 · 극대 · 극소가 있는 곡선)에서 f'(a), f'(c), f'(d) 와 두 평균변화율(a→b, b→c) 중 값이 가장 큰 것을 고르는 5지선다.
  category: "다섯 값을 모두 기울기로 옮겨 그림에서 부호와 크기 비교 → 최댓값 선택"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "미분계수는 접선 기울기, 평균변화율은 두 점을 잇는 할선 기울기로 옮겨 그림에서 다섯 값을 한 자에 놓고 비교"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "미분계수의 기하적 의미 — 접선과 할선의 기울기 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    다섯 후보를 모두 기울기로 바꿔 크기를 비교하는 표현 전환(RT d2) 한 번이 골조. x=a 는 극대점이라 접선이 수평이고 a→b 할선은 음의 기울기, b→c 할선은 완만한 양의 기울기, f'(c) 보다 곡선이 가파르게 치솟는 x=d 쪽 접선이 가장 크다. 확인체크 ★1 출발에 통찰 1 · M_total 7 로 +1 하여 ★2.
  tier: star_2
  mechanism_primary: "f'(a)=0(극대) · a→b 할선 음 · b→c 할선 완만한 양 · f'(c) 는 중간 기울기 · f'(d) 는 가장 가파른 접선 → 최댓값 f'(d)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-65-104.png"
  latex: latex-bank/gn-calc1/items/65-104.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림 속 a~d 의 위치만 옮길 수 있고 숫자 변형 대상은 아니다. 제약: crop 이미지의 라벨과 곡선 모양이 고정이라 선택지 구성(접선 기울기 3 개 + 할선 2 개)을 바꾸는 쪽이 현실적이며, 극대점 a 를 옮기면 f'(a)=0 이라는 기준점이 사라진다."
    creative: "(1) '가장 작은 것'으로 뒤집기(★2 유지) (2) f'(b) 와 a→d 평균변화율을 선택지에 추가해 부호가 같은 값끼리 비교하게 하면 ★3 (3) 원함수 대신 도함수 그래프를 주고 원함수의 평균변화율을 묻는 역방향이면 I-BW 추가 ★3~4."
```

## 표본 판정 요약 (14문)

- ★ 분포: ★1 3 · ★2 7 · ★3 4 · ★4 0 · ★5 0
- 통찰형 10 · 절차형 4 · premium 0
- 통찰 유형 분포(총 15개 라벨): I-EQV 13 · I-RT 2. depth 1 이 8 · depth 2 가 7, depth 3 은 없음
- type_hint 상위: 「관계식이 주어진 경우의 미분계수」 3 · 「미분계수를 이용한 극한값의 계산 — h→0 꼴」 2 · 「— x→a 꼴」 2 · 「미분계수의 기하적 의미 — 접선과 할선의 기울기 비교」 2 · 「평균변화율과 미분계수를 같게 하는 값 구하기」 2 (나머지 3개는 1문씩)
- 그림: 2문(`crop:fig-65-e5.png` · `crop:fig-65-104.png`)
- 벤더 구성상 STEP 연습문제·기출 태그·발전/특강이 없어 ★4 이상 후보가 나오지 않았고, ★5 조건(통찰 3개 + SC/VF/SYM/XU)에 닿는 문항도 없다

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC1-63-100 | 확인체크(★1 출발)이나 ⑶ 의 f(2) 삽입 분리 골조가 필수 예제 63-e3 와 같고 통찰 2 · M_total 8 → ★3 으로 둠(벤더 신호와 2단 차이) | ★2 / ★3 |
| GN-CALC1-64-102 | 확인체크(★1 출발)이나 f'(0) 을 매개로 한 2단 환원이라 필수 예제 64-e4(★3)와 같은 층 → ★3 으로 둠(벤더 신호와 2단 차이) | ★2 / ★3 |
| GN-CALC1-61-e1 | 필수 예제지만 통찰 0 · M_total 4 로 -1 후보. 두 정의를 방정식으로 잇는 대표 절차라 ★2 유지(1단 차이라 표에는 참고로만) | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 「미분계수를 이용한 극한값의 계산」은 **h→0 꼴**과 **x→a 꼴**을 따로 세우는 편이 낫다. 앞은 분모를 증분 계수에 맞추는 보정이 전부지만, 뒤는 x^n - a^n 인수분해와 f(a) 삽입이 더해져 base ★ 가 한 단계 높다.
- 「관계식이 주어진 경우의 미분계수」는 한 유형으로 묶되 **가법형(f(0)=0) · 상수항형(f(0)=-c) · xy 항형(f'(t)=f'(0)+kt)** 세 변형을 하위 갈래로 두고, xy 항형만 base ★ 를 +1 한다. 이 범위 3문이 정확히 그 세 갈래다.
- 「평균변화율과 미분계수를 같게 하는 값 구하기」와 「평균변화율 조건으로 미정계수 결정」은 평균변화율 식을 세워 미정계수를 푸는 같은 골조라 통합 가능하다.
- 「미분계수의 기하적 의미」는 접선·할선 기울기 비교 한 유형이면 충분하다(65-e5 와 65-104 가 같은 골조, 그림만 다름). 「접선의 기울기와 미분계수의 정의」는 별도 유형까지는 필요 없고 정의 확인 슬롯으로 흡수해도 된다.
- 이 단원의 **확인체크 문항은 바로 앞 필수 예제와 골조가 같다**. 카탈로그에서는 같은 type_id 로 묶고 base ★ 만 달리 보는 구조(예제 = 기준, 확인체크 = -1 또는 동급)가 자연스럽다. 다만 63-100 · 64-102 처럼 확인체크가 예제와 같거나 더 깊은 경우가 있어 -1 을 기계적으로 적용하면 안 된다.
