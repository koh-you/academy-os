---
name: mechanism-데이터-GN-CM1-04
description: 개념원리 공통수학1 04 곱셈 공식의 변형(1/1 · 23~26쪽 19문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1 (22개정) · 전사본 latex-bank/gn-cm1
  section: 04 곱셈 공식의 변형
  unit_code: GN-CM1-04
  part: "1/1"
  extract_range: "23~26쪽 · 23-20~26-33"
  total_problems: 19
  unit_total: 19
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 가 비어 있으면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (crops.json) — 이 범위는 그림 문항 3(26-e11 · 26-32 · 26-33)
---

# 개념원리 공통수학1 · 04 곱셈 공식의 변형 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학1 **04 곱셈 공식의 변형** 23~26쪽의 19문항 전수를 다룬다. 구역은 「개념원리 익히기」 5문(23-20~23-24 · 통번호)과 「필수·발전 예제」 14문(필수 예제 24-e7 · 24-e8 · 25-e9 · 26-e11, 발전 예제 25-e10, 그리고 각 예제 뒤의 확인체크 9문)이다. 단원 전체가 하나의 골조 — **주어진 기본 대칭식(합·곱)으로 다른 대칭식의 값을 나타내기** — 를 문자 2개 → $x\pm\dfrac{1}{x}$ 꼴 → 문자 3개 → 도형 활용으로 확장하는 구성이라, 문항 사이의 거리는 「어떤 항등식을 떠올리는가」와 「조건을 그 항등식이 먹는 꼴로 바꾸는 한 단계가 있는가」로만 벌어진다. 그림 문항은 26쪽의 도형 활용 3문이다(직육면체 2 · 원에 내접한 직사각형 1).

벤더 난이도 신호는 개념원리 고등의 구역·태그다. 「개념원리 익히기」(통번호 · tag 「확인체크」 포함)는 개념 확인이라 ★1 출발, 「필수」 예제는 ★2, 「발전」 예제는 ★3 출발이며, 여기서 M_total·통찰로 ±1 조정했다. 확인체크 9문은 바로 앞 예제의 기법을 한 단계 적용하는 문항이라 대부분 ★1 출발에서 +1 해 ★2 로 뒀다(1단 조정이므로 분류 이슈 아님). 다만 26쪽 도형 확인체크 2문(26-32 · 26-33)은 기하 조건을 대칭식으로 번역하는 통찰이 진입 장벽이라 ★3 으로 뒀고, 벤더 신호와 2단 차이라 분류 이슈로 기록했다.

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(유형·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 창의 변형)를 채웠다. 이 단원은 숫자 변형에서 **실수 조건**(두 수의 합·곱이 실제 실수 쌍에서 나오는가) 과 **부호 조건**(제곱근을 취할 때 어느 쪽인가) 이 거의 모든 문항의 제약이므로 `numeric` 에 그 경계를 적었다. 답은 전사·검수 단계에서 답지와 대조가 끝난 값을 그대로 옮겼다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM1-23-20
  page: 23
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ $a+b=-2$, $ab=1$ 일 때 $a^2+b^2$ · $(a-b)^2$ · $a^3+b^3$ 의 값.
    합과 곱이 직접 주어진 가장 기본형.
  category: "두 문자 대칭식 항등식 → 합·곱 그대로 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식의 변형 — 두 수의 합과 곱이 주어진 대칭식의 값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    세 소문항 모두 항등식 한 개씩을 그대로 쓰는 대입이다. 변환 단계가 없고 계산도 한 줄이다.
    개념원리 익히기 구역 ★1 출발, 통찰 0 · M_total 5 → ★1 유지.
  tier: star_1
  mechanism_primary: "a+b, ab 대입 → a^2+b^2=(a+b)^2-2ab → (a-b)^2=(a+b)^2-4ab → a^3+b^3=(a+b)^3-3ab(a+b)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $2$ ⑵ $0$ ⑶ $-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/23-20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a+b 와 ab 값을 바꿀 수 있음. 제약: 실수 a, b 가 존재하려면 (a+b)^2-4ab ≥ 0 이어야 하고(여기는 0 이라 a=b=-1), 세제곱 값이 정수로 떨어지게 두 수를 작게 잡는다."
    creative: "(1) $(a-b)^2$ 대신 a-b 자체를 물으면 부호 결정이 붙어 ★2 (2) a^4+b^4 를 추가하면 (a^2+b^2)^2-2(ab)^2 로 2단 중첩 ★2 (3) 1/a+1/b · 1/a^2+1/b^2 로 바꾸면 (a+b)/ab 환원 한 단계만 늘어 ★1 유지."
```

```yaml
- id: GN-CM1-23-21
  page: 23
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ $a-b=4$, $ab=-3$ 일 때 $a^2+b^2$ · $(a+b)^2$ · $a^3-b^3$ 의 값.
    23-20 의 합·차를 맞바꾼 짝 문항.
  category: "두 문자 대칭식 항등식 → 차와 곱 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식의 변형 — 두 수의 차와 곱이 주어진 대칭식의 값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a^2+b^2=(a-b)^2+2ab, (a+b)^2=(a-b)^2+4ab, a^3-b^3=(a-b)^3+3ab(a-b) 를 차례로 대입.
    ab 가 음수라 부호 실수(T-부호)만 함정이다. 익히기 ★1 출발, 통찰 0 → ★1 유지.
  tier: star_1
  mechanism_primary: "a-b, ab 대입 → a^2+b^2=(a-b)^2+2ab → (a+b)^2=(a-b)^2+4ab → a^3-b^3=(a-b)^3+3ab(a-b)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $10$ ⑵ $4$ ⑶ $28$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/23-21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a-b 와 ab 값을 바꿀 수 있음. 제약: (a-b)^2+4ab ≥ 0 이어야 (a+b)^2 이 음이 아니고, ab 를 음수로 두어야 +2ab·+4ab 의 부호 함정이 살아난다."
    creative: "(1) (a+b)^2 대신 a+b 를 물으면 ±2 두 값 → I-MI d1 · ★2 (2) a^3+b^3 을 물으면 a+b 를 먼저 구해야 해 부호 분기가 생겨 ★2~3 (3) a-b 와 a^2+b^2 을 주고 ab 를 역산하게 하면 24-25 골조."
```

```yaml
- id: GN-CM1-23-22
  page: 23
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ $x+\dfrac{1}{x}=5$ 일 때 $x^2+\dfrac{1}{x^2}$ · $\left(x-\dfrac{1}{x}\right)^2$ · $x^3+\dfrac{1}{x^3}$ 의 값.
  category: "x 와 1/x 의 곱이 1 임을 이용한 대칭식 항등식 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식의 변형 — x±1/x 꼴의 대칭식 값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    23-20 에서 ab=1 로 고정한 특수형이라 -2ab·-4ab 가 상수 -2·-4 로 굳는다.
    학생이 할 일은 곱이 1 임을 알아채는 것 하나뿐. 익히기 ★1 출발, 통찰 0 → ★1.
  tier: star_1
  mechanism_primary: "x·(1/x)=1 → x^2+1/x^2=(x+1/x)^2-2 → (x-1/x)^2=(x+1/x)^2-4 → x^3+1/x^3=(x+1/x)^3-3(x+1/x)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $23$ ⑵ $21$ ⑶ $110$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/23-22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x+1/x 값을 바꿀 수 있음. 제약: 실수 x 가 존재하려면 |x+1/x| ≥ 2 여야 하고(값 1 이나 0 은 불가), 정수로 두면 세 답이 모두 정수로 떨어진다."
    creative: "(1) x^4+1/x^4 를 추가하면 (x^2+1/x^2)^2-2 로 한 단 더 ★2 (2) x-1/x 자체를 물으면 ±√21 부호 분기 → ★2 (3) 조건을 x^2+1/x^2 으로 주고 x+1/x 를 역산하게 하면 24-e8⑴ 골조(부호 조건 필요)."
```

```yaml
- id: GN-CM1-23-23
  page: 23
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ $x-\dfrac{1}{x}=2$ 일 때 $x^2+\dfrac{1}{x^2}$ · $\left(x+\dfrac{1}{x}\right)^2$ · $x^3-\dfrac{1}{x^3}$ 의 값.
    23-22 의 부호를 뒤집은 짝 문항.
  category: "x-1/x 조건 → +2·+4·+3 으로 부호가 뒤집힌 항등식 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식의 변형 — x±1/x 꼴의 대칭식 값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x^2+1/x^2=(x-1/x)^2+2, (x+1/x)^2=(x-1/x)^2+4, x^3-1/x^3=(x-1/x)^3+3(x-1/x).
    23-22 와 같은 골조이고 부호만 반대다(T-부호). 익히기 ★1 출발, 통찰 0 → ★1.
  tier: star_1
  mechanism_primary: "x^2+1/x^2=(x-1/x)^2+2 → (x+1/x)^2=(x-1/x)^2+4 → x^3-1/x^3=(x-1/x)^3+3(x-1/x)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $6$ ⑵ $8$ ⑶ $14$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/23-23.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x-1/x 값은 제한 없이 아무 실수나 가능(x-1/x 는 모든 실수를 취함). 제약: 정수로 두면 세제곱까지 정수로 떨어지고, 0 으로 두면 x=±1 로 문제가 무의미해진다."
    creative: "(1) x+1/x 자체를 물으면 ±2√2 분기 → ★2 (2) x^2-1/x^2 을 물으면 (x+1/x)(x-1/x) 로 두 조건을 잇는 24-27 골조 (3) x-1/x 대신 x^2-1/x^2 을 주고 거꾸로 x-1/x 를 구하게 하면 I-BW ★3."
```

```yaml
- id: GN-CM1-23-24
  page: 23
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    $a+b+c=1$, $ab+bc+ca=-2$ 일 때 $a^2+b^2+c^2$ 의 값.
  category: "세 문자 기본 대칭식 → 제곱 합 항등식 한 번 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식의 변형 — 문자가 3개(제곱 합을 기본 대칭식으로)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (a+b+c)^2=a^2+b^2+c^2+2(ab+bc+ca) 한 줄 이항. 문자가 셋일 뿐 단계는 하나다.
    익히기 ★1 출발, 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a^2+b^2+c^2=(a+b+c)^2-2(ab+bc+ca) 에 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/23-24.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a+b+c 와 ab+bc+ca 값을 바꿀 수 있음. 제약: 결과 (a+b+c)^2-2(ab+bc+ca) 는 제곱 합이므로 0 이상이어야 하고, ab+bc+ca 를 음수로 두면 -2 곱하기 부호 함정이 살아난다."
    creative: "(1) 거꾸로 a^2+b^2+c^2 과 a+b+c 를 주고 ab+bc+ca 를 묻기(25-29 전반부 골조 ★2) (2) (a-b)^2+(b-c)^2+(c-a)^2 로 바꾸면 25-e9 골조 ★2 (3) abc 를 추가해 a^3+b^3+c^3 까지 가면 25-31 골조 ★2."
```

### 필수·발전 예제

```yaml
- id: GN-CM1-24-e7
  page: 24
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $x+y=2$, $x^3+y^3=14$ 일 때 $x^2+y^2$ 의 값.
    세제곱 합이 조건으로 주어진 역방향 기본형.
  category: "세제곱 합 항등식으로 xy 역산 → 제곱 합 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식의 변형 — 문자가 2개(합과 세제곱 합에서 곱 역산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x^3+y^3=(x+y)^3-3xy(x+y) 에 넣으면 8-6xy=14 라는 xy 에 대한 일차식이고, 그 다음은 표준 대입이다.
    조건이 결과 쪽(세제곱 합)에서 오지만 미지수 하나를 푸는 표준 절차라 I-BW 인정 기준(답이 갖춰야 할 성질 분석)에 못 미쳐 통찰 0 으로 뒀다.
    필수 예제 ★2 출발, M_total 6 이라 -1 조건(통찰 0 이고 M_total ≤ 5)에도 걸리지 않아 ★2 유지. [분류 이슈] 역방향을 I-BW d1 으로 볼 여지 있음.
  tier: star_2
  mechanism_primary: "(x+y)^3-3xy(x+y)=x^3+y^3 에서 xy 역산 → x^2+y^2=(x+y)^2-2xy"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/24-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x+y 와 x^3+y^3 값을 바꿀 수 있음. 제약: x+y ≠ 0 이어야 xy 가 결정되고(0 이면 xy 가 소거됨), 3xy(x+y) 에서 xy 가 유리수로 떨어지게, (x+y)^2-4xy ≥ 0 이어야 실수 x, y 가 존재한다."
    creative: "(1) 조건을 x^2+y^2 로 주고 x^3+y^3 을 물으면 정방향 ★1~2 (2) 같은 조건에서 x-y 를 물으면 제곱근 부호 조건이 붙어 ★3 (3) x^3+y^3 대신 x^4+y^4 를 주면 xy 가 이차방정식의 근이 되어 유효 근 검증 → I-VF d2 · ★3."
```

```yaml
- id: GN-CM1-24-e8
  page: 24
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ $x^2+\dfrac{1}{x^2}=3$, $x>0$ 일 때 $x^3+\dfrac{1}{x^3}$ 의 값.
    ⑵ $x^2-3x+1=0$ 일 때 $x^2+\dfrac{1}{x^2}$ 의 값.
  category: "제곱 합에서 x+1/x 역산(부호 조건) · 이차방정식을 x 로 나눠 x+1/x 유도"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑵ 에서 x^2-3x+1=0 의 양변을 x 로 나눠 x+1/x=3 이라는 대칭식 조건으로 옮겨야 곱셈 공식 골조에 들어간다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곱셈 공식의 변형 — x±1/x 꼴(제곱 합에서 합 역산 · 이차방정식에서 x+1/x 유도)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 (x+1/x)^2=x^2+1/x^2+2=5 에서 제곱근을 취하는데 x>0 이 양의 근을 고정한다(T-부호). 이후 세제곱 공식 한 줄.
    ⑵ 는 x=0 이 근이 아님을 확인하고 x 로 나누는 동치 변환이 핵심이며, 이를 못 보면 근의 공식으로 무리수를 직접 대입하게 된다(EQV d2).
    필수 예제 ★2 출발, 통찰 1개(d2)로 +1 조건(2개 이상 또는 depth 3)에 미달 → ★2 유지.
  tier: star_2
  mechanism_primary: "⑴ (x+1/x)^2=5, x>0 로 양의 근 → x^3+1/x^3=(x+1/x)^3-3(x+1/x) / ⑵ x^2-3x+1=0 을 x 로 나눠 x+1/x=3 → x^2+1/x^2=(x+1/x)^2-2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $2\sqrt{5}$ ⑵ $7$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/24-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 은 x^2+1/x^2 값을, ⑵ 는 이차방정식의 일차항 계수를 바꿀 수 있음. 제약: ⑴ 은 (값+2) 가 제곱수여야 답이 유리수, 값 ≥ 2 여야 실수 x 존재. ⑵ 는 이차항 계수와 상수항이 모두 1 이어야 x 로 나눴을 때 x+1/x 꼴이 되고, 상수항이 -1 이면 x-1/x 꼴로 바뀐다."
    creative: "(1) ⑴ 의 x>0 조건을 빼면 답이 ±2√5 두 갈래 → I-MI d1 · ★3 (2) ⑵ 의 상수항을 -1 로 바꾸면 24-28 골조(x-1/x) (3) ⑵ 에서 x^4+1/x^4 까지 물으면 제곱을 두 번 중첩 → ★3."
```

```yaml
- id: GN-CM1-24-25
  page: 24
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $a+b=6$, $a^2+b^2=32$, $a>b$ 일 때 $a-b$ 의 값.
  category: "합과 제곱 합 → 차의 제곱 → 부호 조건으로 제곱근 결정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식의 변형 — 합과 제곱 합에서 차 구하기(부호 판정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (a-b)^2=2(a^2+b^2)-(a+b)^2=28 로 한 줄이고, 남는 판단은 a>b 로 양의 제곱근을 고르는 것뿐이다(T-부호).
    확인체크 ★1 출발이지만 제곱근 처리와 무리수 답이 붙어 +1 → ★2.
  tier: star_2
  mechanism_primary: "(a-b)^2=2(a^2+b^2)-(a+b)^2=28 → a>b 로 양의 제곱근 2√7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\sqrt{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/24-25.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a+b 와 a^2+b^2 값을 바꿀 수 있음. 제약: 2(a^2+b^2)-(a+b)^2 > 0 이어야 a ≠ b 인 실수 쌍이 있고, 그 값이 완전제곱이면 답이 유리수·아니면 무리수가 된다. (a+b)^2 ≤ 2(a^2+b^2) 는 항상 성립하므로 값만 정수로 맞추면 된다."
    creative: "(1) a>b 조건을 빼면 ±2√7 두 값 → I-MI d1 · ★2~3 (2) a-b 대신 a^3-b^3 을 물으면 ab 까지 필요해 단계 +1 · ★3 (3) a^2+b^2 대신 ab 를 주면 23-20 골조로 내려가 ★1."
```

```yaml
- id: GN-CM1-24-26
  page: 24
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $x=\sqrt{2}+1$, $y=\sqrt{2}-1$ 일 때 $x^4y-xy^4$ 의 값.
  category: "공통인수 xy 로 묶고 세제곱 차 인수분해 → 켤레 무리수의 합·차·곱 대입"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "무리수를 네제곱까지 직접 대입하는 대신 x^4y-xy^4=xy(x-y)(x^2+xy+y^2) 로 인수분해해 x+y·x-y·xy 만으로 계산되는 꼴로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곱셈 공식의 변형 — 켤레 무리수의 합·곱을 이용한 식의 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x+y=2√2, x-y=2, xy=1 을 먼저 만들어 두는 것이 이 유형의 표준이고, 식을 xy(x^3-y^3) 로 묶어 보는 한 단계가 진짜 관문이다(EQV d2).
    묶지 않고 (√2+1)^4 을 전개하면 계산이 폭발한다.
    확인체크 ★1 출발 +1 → ★2. 통찰 1개(d2)라 +1 조건에는 미달.
  tier: star_2
  mechanism_primary: "x^4y-xy^4=xy(x-y)(x^2+xy+y^2) → x+y=2√2, x-y=2, xy=1 로 x^2+xy+y^2=(x+y)^2-xy=7 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$14$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/24-26.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "√2 를 √3·√5 로, ±1 을 ±2 로 바꿀 수 있음(x=√3+2, y=√3-2 등). 제약: 두 수가 켤레 꼴이어야 x+y 가 무리수·x-y 와 xy 가 유리수로 깔끔히 떨어지고, xy=a^2-b^2 이 0 이 되지 않아야 한다."
    creative: "(1) x^3+y^3 이나 1/x^3+1/y^3 으로 바꾸면 같은 골조 ★2 (2) x=1/(√2-1) 처럼 주면 유리화 단계가 앞에 붙어 ★3 (3) x^5y-xy^5 로 올리면 x^4+x^3y+… 대칭식 전개가 필요해 ★3."
```

```yaml
- id: GN-CM1-24-27
  page: 24
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $x-\dfrac{1}{x}=2\sqrt{3}$, $x^2-\dfrac{1}{x^2}=8\sqrt{3}$ 일 때 $x^3+\dfrac{1}{x^3}$ 의 값.
  category: "두 조건을 인수분해로 연결해 x+1/x 를 얻고 세제곱 공식 적용"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x^2-1/x^2=(x+1/x)(x-1/x) 로 쪼개 두 조건을 나눗셈으로 이으면 구하지 못하던 x+1/x 가 바로 나온다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곱셈 공식의 변형 — 두 조건을 인수분해로 연결해 x+1/x 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x-1/x 만으로는 x^3+1/x^3 에 닿지 않는다. 두 번째 조건을 곱의 꼴로 인수분해해 x+1/x=4 를 얻는 연결이 이 문항의 전부다(EQV d2).
    그 뒤는 (x+1/x)^3-3(x+1/x) 한 줄. 확인체크 ★1 출발 +1 → ★2.
    조건끼리도 (x+1/x)^2-(x-1/x)^2=4 를 만족해 정합하다.
  tier: star_2
  mechanism_primary: "x^2-1/x^2=(x+1/x)(x-1/x) → x+1/x=4 → x^3+1/x^3=(x+1/x)^3-3(x+1/x)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$52$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/24-27.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x-1/x 와 x^2-1/x^2 값의 쌍을 바꿀 수 있음. 제약: 두 값의 비가 x+1/x 이므로 나누어떨어져야 하고, 그 몫 s 와 x-1/x=d 는 항등식 s^2-d^2=4 를 반드시 만족해야 한다(여기 16-12=4). 이를 어기면 조건이 모순이 된다."
    creative: "(1) 두 번째 조건을 x^4-1/x^4 으로 주면 (x^2+1/x^2)(x^2-1/x^2) 로 한 단계 더 → ★3 (2) 답을 x+1/x 로 끝내면 ★1~2 로 내려간다 (3) 두 조건의 정합성(s^2-d^2=4)을 학생이 검증하게 하면 I-VF d2 · ★3."
```

```yaml
- id: GN-CM1-24-28
  page: 24
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $x^2-\sqrt{6}x-1=0$ 일 때 $x^3-\dfrac{1}{x^3}$ 의 값.
  category: "이차방정식을 x 로 나눠 x-1/x 유도 → 세제곱 차 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x ≠ 0 을 확인하고 양변을 x 로 나눠 x-1/x=√6 으로 옮겨야 곱셈 공식이 먹는다(상수항 -1 이라 차 꼴)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곱셈 공식의 변형 — 이차방정식에서 x±1/x 를 유도해 세제곱 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    24-e8⑵ 와 같은 골조이고, 상수항이 +1 이 아니라 -1 이라 x+1/x 가 아니라 x-1/x 가 나온다(T-부호).
    나눈 뒤에는 x^3-1/x^3=(x-1/x)^3+3(x-1/x) 한 줄.
    확인체크 ★1 출발 +1 → ★2. 통찰 1개(d2)라 +1 조건 미달.
  tier: star_2
  mechanism_primary: "x^2-√6x-1=0 을 x 로 나눠 x-1/x=√6 → x^3-1/x^3=(x-1/x)^3+3(x-1/x)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$9\sqrt{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/24-28.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수 √6 을 √2·2·3 등으로 바꿀 수 있음. 제약: 이차항 계수는 1, 상수항은 -1(x-1/x 꼴) 또는 +1(x+1/x 꼴) 로 고정해야 나눈 뒤 꼴이 유지된다. 상수항이 +1 이면 실수 근 조건으로 일차항 계수의 절댓값이 2 이상이어야 한다."
    creative: "(1) 상수항을 +1 로 바꾸면 24-e8⑵ 골조(x+1/x) (2) x^4+1/x^4 을 물으면 제곱 두 번 중첩 → ★3 (3) 계수를 미지수 k 로 두고 x^3-1/x^3 을 k 의 식으로 나타내게 하면 Ma 상승 · ★3."
```

```yaml
- id: GN-CM1-25-e9
  page: 25
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $a+b+c=8$, $ab+bc+ca=17$ 일 때 $(a-b)^2+(b-c)^2+(c-a)^2$ 의 값.
  category: "차의 제곱 합 전개 → 제곱 합과 기본 대칭식으로 환원"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식의 변형 — 문자가 3개(차의 제곱 합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전개하면 2(a^2+b^2+c^2)-2(ab+bc+ca) 이고, a^2+b^2+c^2 은 23-24 와 같은 한 줄 환원이다.
    단계는 둘이지만 둘 다 이 구역의 표준 항등식이라 변환 착안이 필요하지 않다 → 통찰 0.
    필수 예제 ★2 출발, M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "(a-b)^2+(b-c)^2+(c-a)^2=2(a^2+b^2+c^2)-2(ab+bc+ca), a^2+b^2+c^2=(a+b+c)^2-2(ab+bc+ca)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$26$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/25-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a+b+c 와 ab+bc+ca 값을 바꿀 수 있음. 제약: 결과가 제곱들의 합이므로 (a+b+c)^2 ≥ 3(ab+bc+ca) 여야 하고, 0 이 되면 a=b=c 인 특수 상황이 된다."
    creative: "(1) 값을 주고 ab+bc+ca 를 역으로 묻기 → I-BW d2 · ★3 (2) (a-b)^2+(b-c)^2+(c-a)^2=0 을 조건으로 주고 a=b=c 를 끌어내면 I-EQV d2 · ★3 (3) abc 를 추가해 a^3+b^3+c^3 까지 확장하면 25-31 골조."
```

```yaml
- id: GN-CM1-25-e10
  page: 25
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    ⑴ $a-b=4-\sqrt{2}$, $b-c=4+\sqrt{2}$ 일 때 $a^2+b^2+c^2-ab-bc-ca$ 의 값.
    ⑵ $a+b+c=2$, $a^2+b^2+c^2=6$, $abc=-2$ 일 때 $a^3+b^3+c^3$ 의 값.
  category: "차의 제곱 합 항등식 · 세 문자 세제곱 합 인수분해 항등식"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑴ 에서 a^2+b^2+c^2-ab-bc-ca 를 ½[(a-b)^2+(b-c)^2+(c-a)^2] 로 바꿔야 개별 문자 없이 주어진 차 조건만으로 계산된다(c-a 는 두 차의 합으로 조립)"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑵ 에서 a^3+b^3+c^3-3abc=(a+b+c)(a^2+b^2+c^2-ab-bc-ca) 를 쓰려고 ab+bc+ca 를 (a+b+c)^2-(a^2+b^2+c^2) 에서 역산"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "복잡한 곱셈 공식의 변형 — 차의 제곱 합 항등식과 세 문자 세제곱 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 문자 값을 하나도 구할 수 없고 차만 주어지므로, 목표식을 차의 제곱 합으로 바꾸는 것이 유일한 길이다. 켤레 무리수라 제곱하면 무리수가 상쇄된다.
    ⑵ 는 인수분해 항등식을 먼저 정하고 빠진 조각(ab+bc+ca)을 역산하는 두 방향 조립이다.
    발전 예제 ★3 출발, 통찰 2개(d2)로 유지 → ★3.
  tier: star_3
  mechanism_primary: "⑴ 목표식=½[(a-b)^2+(b-c)^2+(c-a)^2], c-a=-(a-b)-(b-c) / ⑵ ab+bc+ca 역산 → a^3+b^3+c^3=(a+b+c)(a^2+b^2+c^2-ab-bc-ca)+3abc"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $50$ ⑵ $8$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/25-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 은 켤레 쌍 4±√2 를 3±√5 등으로, ⑵ 는 세 조건값을 바꿀 수 있음. 제약: ⑴ 은 두 차가 켤레라야 합 c-a 가 유리수가 되고 제곱 합에서 무리수가 상쇄된다. ⑵ 는 ab+bc+ca=½[(a+b+c)^2-(a^2+b^2+c^2)] 가 정수여야 하고 (a+b+c)^2 ≤ 3(a^2+b^2+c^2) 를 지켜야 실수 세 쌍이 존재한다."
    creative: "(1) ⑴ 에서 a-c 를 직접 주면 통찰이 사라져 ★2 (2) ⑵ 의 abc 대신 1/a+1/b+1/c 를 주면 25-29 골조와 합성돼 ★3 (3) a^3+b^3+c^3=3abc 를 조건으로 주고 a+b+c=0 또는 a=b=c 를 끌어내게 하면 I-MI d2 · ★4."
```

```yaml
- id: GN-CM1-25-29
  page: 25
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $a+b+c=2$, $a^2+b^2+c^2=8$, $abc=-2$ 일 때 $\dfrac{1}{a}+\dfrac{1}{b}+\dfrac{1}{c}$ 의 값.
  category: "역수 합을 통분해 기본 대칭식 비로 환원 → ab+bc+ca 역산"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "1/a+1/b+1/c 를 (ab+bc+ca)/abc 로 통분해, 개별 문자 대신 기본 대칭식만 필요한 문제로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곱셈 공식의 변형 — 문자가 3개(역수 합을 기본 대칭식 비로)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    통분해서 분자가 ab+bc+ca 라는 것만 보면, ab+bc+ca=½[(a+b+c)^2-(a^2+b^2+c^2)] 로 한 줄이고 abc 는 이미 주어져 있다.
    통분 착안은 표준에 가까워 depth 1 로 뒀다. 확인체크 ★1 출발 +1 → ★2.
  tier: star_2
  mechanism_primary: "1/a+1/b+1/c=(ab+bc+ca)/abc, ab+bc+ca=½[(a+b+c)^2-(a^2+b^2+c^2)] 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/25-29.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 조건값을 바꿀 수 있음. 제약: abc ≠ 0 이어야 역수가 정의되고, ½[(a+b+c)^2-(a^2+b^2+c^2)] 가 정수여야 답이 간단한 유리수가 된다. 분모·분자가 같은 부호면 답이 양수다."
    creative: "(1) 1/(ab)+1/(bc)+1/(ca)=(a+b+c)/abc 로 바꾸면 통분 한 번뿐이라 ★1~2 (2) 1/a^2+1/b^2+1/c^2 로 올리면 (ab+bc+ca)^2-2abc(a+b+c) 가 필요해 ★3 (3) a, b, c 를 어떤 삼차방정식의 세 근으로 주면 근과 계수의 관계가 붙어 I-XU d2 · ★4."
```

```yaml
- id: GN-CM1-25-30
  page: 25
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $x-y=2+\sqrt{3}$, $y-z=2-\sqrt{3}$ 일 때 $x^2+y^2+z^2-xy-yz-zx$ 의 값.
  category: "목표식을 차의 제곱 합의 절반으로 변환 → 켤레 무리수 상쇄"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x^2+y^2+z^2-xy-yz-zx=½[(x-y)^2+(y-z)^2+(z-x)^2] 로 옮기고 z-x=-(x-y)-(y-z) 로 세 번째 차를 조립"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "복잡한 곱셈 공식의 변형 — 차의 제곱 합 항등식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    25-e10⑴ 과 같은 골조다. x, y, z 를 개별로 구할 수 없으므로 목표식을 차만으로 쓰는 꼴로 바꾸는 것이 전부이고(EQV d2), 켤레라 제곱 합에서 무리수가 상쇄된다.
    확인체크 ★1 출발 +1 → ★2. 통찰 1개(d2)라 +1 조건 미달.
  tier: star_2
  mechanism_primary: "목표식=½[(x-y)^2+(y-z)^2+(z-x)^2], z-x=-4 → ½(7+4√3+7-4√3+16)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$15$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/25-30.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "켤레 쌍 2±√3 을 3±√2·1±√5 등으로 바꿀 수 있음. 제약: 두 차가 켤레여야 합(z-x)이 유리수이고 제곱 합에서 무리수가 사라진다. 켤레가 아니면 답에 무리수가 남는다."
    creative: "(1) x-z 를 직접 주면 변환 없이 대입이라 ★1 (2) x+y+z 를 함께 줘서 x^2+y^2+z^2 까지 묻게 하면 단계 +1 · ★3 (3) 목표식 값이 0 이 되게 설정해 x=y=z 를 끌어내게 하면 I-EQV d3 · ★3."
```

```yaml
- id: GN-CM1-25-31
  page: 25
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $a+b+c=4$, $ab+bc+ca=2$, $abc=-3$ 일 때 $a^3+b^3+c^3$ 의 값.
  category: "세 기본 대칭식 → 세제곱 합 항등식 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식의 변형 — 문자가 3개(기본 대칭식에서 세제곱 합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 기본 대칭식이 모두 주어져 a^3+b^3+c^3=(a+b+c)^3-3(a+b+c)(ab+bc+ca)+3abc 에 그대로 넣으면 끝난다.
    a^2+b^2+c^2 을 거쳐 인수분해 항등식으로 가도 같은 결과라 전략 선택의 부담이 없다(I-SC 아님) → 통찰 0.
    확인체크 ★1 출발이나 공식 자체가 무겁고 부호가 셋 섞여 +1 → ★2.
  tier: star_2
  mechanism_primary: "a^3+b^3+c^3=(a+b+c)^3-3(a+b+c)(ab+bc+ca)+3abc 에 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$31$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/25-31.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 기본 대칭식 값을 바꿀 수 있음. 제약: 실제 실수 a, b, c 를 요구한다면 삼차방정식 t^3-(a+b+c)t^2+(ab+bc+ca)t-abc=0 이 실근 셋을 가져야 하지만, 값만 묻는 문항이라 형식 제약은 약하다. abc 부호를 음수로 두면 +3abc 의 부호 함정이 살아난다."
    creative: "(1) a^3+b^3+c^3 을 주고 abc 를 역으로 묻기 → I-BW d2 · ★3 (2) ab+bc+ca 대신 a^2+b^2+c^2 을 주면 25-e10⑵ 골조 (3) a^4+b^4+c^4 으로 올리면 (a^2+b^2+c^2)^2-2(ab+bc+ca)^2+… 중첩이 필요해 ★4."
```

```yaml
- id: GN-CM1-26-e11
  page: 26
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    직육면체 상자의 겉넓이가 $90$, 모든 모서리의 길이의 합이 $48$ 일 때 대각선의 길이.
    (그림: 세 모서리를 표시한 직육면체)
  category: "도형 조건을 세 모서리의 기본 대칭식으로 번역 → 제곱 합 → 대각선"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "겉넓이·모서리 합·대각선을 각각 2(ab+bc+ca)·4(a+b+c)·√(a^2+b^2+c^2) 라는 대수 대칭식으로 옮겨야 곱셈 공식 골조가 보인다(기하→대수 표현 전환)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곱셈 공식의 활용 — 직육면체(겉넓이·모서리 합·대각선)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세 모서리 a, b, c 를 개별로 구할 수 없고 구할 필요도 없다는 것을 알아야 한다. 번역만 끝나면 (a+b+c)^2-2(ab+bc+ca) 한 줄이다.
    번역이 세 군데(겉넓이·모서리 합·대각선)에서 동시에 필요하고 M_total 8 이라, 필수 예제 ★2 출발에서 +1 → ★3(1단 조정).
  tier: star_3
  mechanism_primary: "4(a+b+c)=48, 2(ab+bc+ca)=90 → 대각선=√(a^2+b^2+c^2)=√((a+b+c)^2-2(ab+bc+ca))"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3\sqrt{6}$'
  answer_source: "본문 풀이"
  figure: "crop:fig-26-e11.png"
  latex: latex-bank/gn-cm1/items/26-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "겉넓이 S 와 모서리 합 L 을 바꿀 수 있음. 제약: (L/4)^2-S/2 > 0 이어야 대각선이 실수이고, 그 값이 간단한 꼴이어야 근호가 정리된다. 실제 직육면체가 존재하려면 세 양수 해가 있어야 하므로 S 를 (L/4)^2 에 너무 가깝게 잡지 않는다. 그림의 모서리 라벨(a, b, c)은 고정한다."
    creative: "(1) 대각선과 겉넓이를 주고 모서리 합을 묻게 하면 26-33 골조(I-BW) (2) 부피를 함께 주어 세 모서리 자체를 구하게 하면 삼차방정식이 필요해 I-XU d2 · ★4 (3) 정육면체로 특수화하면 조건 하나로 충분해 ★1."
```

```yaml
- id: GN-CM1-26-32
  page: 26
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    반지름의 길이가 $5$ 인 원에 둘레의 길이가 $28$ 인 직사각형이 내접할 때 이 직사각형의 넓이.
    (그림: 원에 내접한 직사각형)
  category: "내접 직사각형의 대각선=지름 → 제곱 합과 합에서 곱 구하기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "원에 내접한 직사각형의 대각선이 지름(=10)이라는 기하 사실을 a^2+b^2=100 이라는 대수 조건으로 옮기는 것이 유일한 진입로"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곱셈 공식의 활용 — 원에 내접하는 직사각형(대각선=지름)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    대각선=지름 을 떠올리지 못하면 조건이 하나(둘레)뿐이라 아예 손을 못 댄다. 떠올리면 ab=½[(a+b)^2-(a^2+b^2)] 한 줄이다.
    확인체크 ★1 출발 대비 2단 위라 [분류 이슈] 로 기록했다. 진입 장벽이 통찰 하나에 몰려 있어 체감은 ★3 쪽이다.
  tier: star_3
  mechanism_primary: "대각선=지름 10 → a^2+b^2=100, a+b=14 → ab=½[(a+b)^2-(a^2+b^2)]"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$48$'
  answer_source: "답지"
  figure: "crop:fig-26-32.png"
  latex: latex-bank/gn-cm1/items/26-32.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 r 과 둘레를 바꿀 수 있음. 제약: 둘레의 절반 p 와 지름 d=2r 사이에 d < p ≤ √2·d 여야 실제 직사각형이 존재한다(여기 10 < 14 ≤ 14.14 로 거의 정사각형). p 를 d 에 가깝게 잡으면 매우 납작한 직사각형이 된다."
    creative: "(1) 넓이를 주고 둘레를 묻게 하면 역방향 ★3 (2) 직사각형 대신 원에 내접한 직각삼각형의 빗변·둘레를 주고 넓이를 묻기(같은 골조 ★3) (3) 대각선 길이를 직접 주면 기하 번역이 사라져 24-25 류 절차형 ★2."
```

```yaml
- id: GN-CM1-26-33
  page: 26
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    직육면체의 겉넓이가 $100$, 삼각형 $\pt{BGD}$ 의 세 변의 길이의 제곱의 합이 $138$ 일 때 모든 모서리의 길이의 합.
    (그림: 꼭짓점이 표시된 직육면체와 삼각형 BGD)
  category: "면 대각선 제곱 합 → 제곱 합 조건 → 합의 제곱으로 모서리 합 역산"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "삼각형 BGD 의 세 변이 모두 서로 다른 면의 대각선임을 보고 제곱 합을 2(a^2+b^2+c^2)=138 이라는 대수 조건으로 옮김"
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구하는 값 4(a+b+c) 에서 거꾸로 (a+b+c)^2=(a^2+b^2+c^2)+2(ab+bc+ca) 를 조립해 두 조건을 합쳐 쓴다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "곱셈 공식의 활용 — 직육면체(면 대각선 제곱 합·겉넓이에서 모서리 합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    26-e11 의 역방향이다. 먼저 삼각형 BGD 의 세 변이 면 대각선이라는 것을 읽어야 제곱 합 조건이 대수로 바뀌고(RT d2), 그 다음 구하는 것이 a+b+c 라는 점에서 거꾸로 (a+b+c)^2 을 만들어야 한다(BW d1).
    확인체크 ★1 출발 대비 2단 위라 [분류 이슈] 로 기록했다. 통찰 2개지만 각 단계가 짧아 ★4 까지는 올리지 않았다.
  tier: star_3
  mechanism_primary: "BD^2+DG^2+GB^2=2(a^2+b^2+c^2)=138, 2(ab+bc+ca)=100 → (a+b+c)^2=169 → 모서리 합 4(a+b+c)=52"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$52$'
  answer_source: "답지"
  figure: "crop:fig-26-33.png"
  latex: latex-bank/gn-cm1/items/26-33.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "겉넓이 S 와 면 대각선 제곱 합 T 를 바꿀 수 있음. 제약: (T/2)+S 가 완전제곱이어야 a+b+c 가 유리수로 떨어지고, T/2 ≥ S/2 즉 a^2+b^2+c^2 ≥ ab+bc+ca 는 항상 성립하므로 값만 정수로 맞추면 된다. 그림의 꼭짓점 라벨(A~H)과 삼각형 BGD 는 고정한다."
    creative: "(1) 모서리 합을 주고 삼각형 BGD 의 변 제곱 합을 묻게 하면 정방향 ★2 (2) 삼각형 BGD 의 넓이를 묻게 하면 정삼각형 여부·헤론이 붙어 I-XU d2 · ★4 (3) 세 면 대각선을 개별로 주면 연립 절차만 남아 ★2."
```

## 표본 판정 요약 (19문)

- ★ 분포: ★1 5 · ★2 10 · ★3 4 · ★4 0 · ★5 0
- 통찰형 10 · 절차형 9 · premium 0
- 통찰 유형 분포(라벨 12개): I-EQV 8 · I-RT 3 · I-BW 1. depth 3 없음, SC/VF/SYM/XU 없음 → ★4 이상 슬롯 없음(단원 성격상 자연스러움)
- type_hint 상위: 「x±1/x 꼴 대칭식」 5(23-22 · 23-23 · 24-e8 · 24-27 · 24-28) · 「두 문자 합·곱 대칭식」 5(23-20 · 23-21 · 24-e7 · 24-25 · 24-26) · 「문자가 3개인 기본 대칭식」 4(23-24 · 25-e9 · 25-29 · 25-31) · 「곱셈 공식의 활용 — 도형」 3(26-e11 · 26-32 · 26-33) · 「차의 제곱 합 항등식」 2(25-e10 · 25-30)
- 대상층: 하위권 5 · 중하위권 4 · 중위권 7 · 중상위권 3
- 그림: 3문(`crop:fig-26-e11.png` · `crop:fig-26-32.png` · `crop:fig-26-33.png`) · 소문항 묶음 요약: 23-20(3) · 23-21(3) · 23-22(3) · 23-23(3) · 24-e8(2) · 25-e10(2)
- 이 범위의 ★ 를 가르는 것은 계산량이 아니라 **조건을 항등식이 먹는 꼴로 바꾸는 단계가 있는가**다. 그 단계가 없으면 ★1~2(대입만), 대수 안에서 한 번 있으면 ★2(EQV d2), 기하→대수 번역이면 ★3(RT d2).

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-24-e7 | 세제곱 합 조건에서 xy 를 역산하는 것을 I-BW d1 으로 볼지 미지수 하나를 푸는 표준 절차로 볼지 애매. 후자로 처리해 절차형(★ 는 어느 쪽이든 ★2) | ★2 |
| GN-CM1-24-26 | 무리수 직접 대입 대신 인수분해로 대칭식 꼴로 옮기는 착안을 I-EQV(동치 변환)로 뒀으나, 형식 견본(RPM-ALG-0041)은 같은 종류의 인수분해 착안을 I-RT 로 라벨했다. 코드 선택은 카탈로그 설계 때 통일 필요 | ★2 |
| GN-CM1-26-32 | 벤더 확인체크(★1 출발) 대비 판정 ★3 으로 2단 차이. 「대각선=지름」 하나에 진입 장벽이 몰려 있어 통찰 기준으로는 ★3, 계산량 기준으로는 ★2 | ★2 / ★3 |
| GN-CM1-26-33 | 벤더 확인체크(★1 출발) 대비 판정 ★3 으로 2단 차이. 통찰 2개(RT d2 + BW d1)라 +1 조건에는 걸리나 각 단계가 짧아 ★4 로는 올리지 않음 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 단원은 겉보기로는 한 유형(「곱셈 공식의 변형」)이지만, **조건이 들어오는 경로**로 최소 다섯 유형을 세워야 base ★ 가 갈린다: ⑴ 합·곱 직접 제시(23-20 · 23-21 · ★1) ⑵ x·1/x=1 특수형(23-22 · 23-23 · ★1, 단 이차방정식에서 유도하는 24-e8⑵ · 24-28 은 EQV 가 붙어 ★2 로 분리) ⑶ 결과 쪽 값에서 곱 역산(24-e7 · 24-25 · ★2) ⑷ 문자 3개 기본 대칭식(23-24 ★1 / 25-e9 · 25-29 · 25-31 ★2) ⑸ 도형 활용(26-e11 · 26-32 · 26-33 · ★3).
- 「차의 제곱 합 항등식」(25-e10⑴ · 25-30)은 ⑷의 하위 변형으로 묶어도 되지만, 개별 문자를 못 구하고 **차만으로 목표식을 다시 쓰는** 고유 통찰이 있으므로 소유형 표시를 남긴다. 켤레 무리수 조건은 이 소유형의 고정 장치다.
- 도형 활용 3문은 번역 대상이 서로 다르므로(직육면체 겉넓이·모서리 합 / 원의 지름 / 면 대각선) 카탈로그에서는 「곱셈 공식의 도형 활용」 한 유형 아래 소유형 셋으로 두는 것이 적절하다. 이 셋은 이 단원에서 유일하게 I-RT 가 붙는 자리라 ★3 슬롯 공급원이 된다.
- 이 범위에는 I-SC · I-VF · I-SYM · I-XU 가 한 건도 없다. ★4~5 슬롯이 필요하면 24-27 의 조건 정합성 검증(I-VF)이나 25-31 · 25-29 의 삼차방정식 근과 계수 결합(I-XU) 방향으로 창의 변형을 만들어야 한다.
