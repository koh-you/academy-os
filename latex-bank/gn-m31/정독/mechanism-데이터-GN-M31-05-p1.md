---
name: mechanism-데이터-GN-M31-05-p1
description: 개념원리 중학 3-1 05 제곱근의 덧셈과 뺄셈(1/2 · 47~53쪽) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id·base_star null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-1 · 전사본 latex-bank/gn-m31
  section: 05 제곱근의 덧셈과 뺄셈
  unit_code: "05"
  part: "1/2"
  extract_range: "47~53쪽 · 47-01~53-06"
  total_problems: 33
  unit_total: 65
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 중3-1 은 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 구역 신호를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m31/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m31/items/<id>.tex
  image_source: latex-bank/gn-m31/figures/ (crops.json)
---

# 개념원리 중학 3-1 · 05 제곱근의 덧셈과 뺄셈 (1/2) 정독 데이터 (v1.0)

이 파일은 47~53쪽 네 구역 33문항을 다룬다. 「개념원리 확인하기」 5문 · 「핵심문제 익히기」 16문(핵심문제 hN 8 + 확인문제 cN 8) · 「계산력 강화하기」 6문 · 「이런 문제가 시험에 나온다」 6문이다. 개념원리 중학은 문항별 난이도 표시(level)나 태그가 없고 **구역 자체가 난이도 층**이라, ★ 출발점은 구역 신호(확인하기·계산력 ★1 · 핵심문제 ★2 · 시험에 나온다 ★2~3)에서 잡고 M_total·통찰로 ±1 조정했다.

이 단원은 계산 단원이라 도구가 네 개(동류 근호 정리 · √a²b=a√b 정리 · 분배법칙 전개 · 분모의 유리화)로 좁고, 대부분의 문항이 그 조합이다. 그래서 절차형이 압도적이며(29/33), 통찰은 「계산 결과가 유리수가 될 조건 → 무리수 항의 계수 = 0」이라는 동치 변환(I-EQV)과 「계수를 근호 안으로 되돌려 대소를 비교」하는 한 갈래에만 나타난다.

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이다. 그래서 모든 블록에 `mechanism_primary`(골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M31-47-01
  page: 47
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴~⑷ 같은 근호끼리 묶어 계수를 더하고 빼는 기본 계산. ⑷ 는 √7 과 √10 두 종류가 섞여 있다.
  category: "동류 근호 정리 → 계수 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 덧셈과 뺄셈(동류 근호 계수 정리)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    근호를 문자처럼 보고 계수만 더하는 한 단계. ⑷ 에서 근호가 두 종류로 갈릴 뿐 도구는 같다.
    확인하기 구역 출발점 ★1 · 통찰 없음 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "같은 근호를 동류항으로 보고 계수만 더한다 → 근호별로 묶기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $11\sqrt{2}$ ⑵ $-2\sqrt{5}$ ⑶ $-\sqrt{3}$ ⑷ $6\sqrt{7}-4\sqrt{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/47-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수와 근호 안의 수(2·5·3·7·10)는 자유롭게. 제약: 같은 근호끼리만 합쳐지므로 동류·비동류 구성을 유지해야 하고, 근호 안 수에 제곱 인수를 넣으면 47-02 골조로 바뀐다. 답이 음수여도 무방."
    creative: "(1) 계수를 분수로 두면 통분이 붙어 48-h1 골조(★2) (2) 근호 안을 √8·√18 로 두어 먼저 정리해야 동류가 되게(★1) (3) 결과를 a√2+b√5 꼴로 두고 a+b 를 묻게 바꾸면 계수 비교가 붙어 ★2."
```

```yaml
- id: GN-M31-47-02
  page: 47
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴~⑷ 근호 안의 제곱 인수를 밖으로 꺼내 간단히 한 뒤 동류 근호끼리 정리.
  category: "근호 간단히 → 동류 근호 정리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "√a²b=a√b 를 이용한 제곱근의 덧셈과 뺄셈"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    √28=2√7 처럼 정리하는 전처리 한 단계가 붙을 뿐 뒤는 47-01 과 같다.
    통찰 없음 · M_total 5 → 확인하기 구역 ★1.
  tier: star_1
  mechanism_primary: "√(a²b)=a√b 로 각 항을 정리 → 같은 근호 계수 합"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $5\sqrt{7}$ ⑵ $-3\sqrt{3}$ ⑶ $\sqrt{5}$ ⑷ $-\sqrt{6}+2\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/47-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 수를 제곱 인수를 갖는 다른 수(48·75·98·242)로. 제약: 정리한 뒤 같은 근호가 남아야 합쳐지므로 제곱 인수를 뺀 나머지를 맞출 것. ⑷ 처럼 두 종류가 남게 하려면 나머지를 두 가지로."
    creative: "(1) 정리 후 세 종류 근호가 남게(★1) (2) 계수를 문자로 두고 결과가 0 이 될 조건(★2) (3) 넓이가 주어진 정사각형들의 변의 길이 합으로 옮기면 도형 활용 ★2."
```

```yaml
- id: GN-M31-47-03
  page: 47
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴~⑷ 분배법칙으로 근호를 괄호 안에 곱하거나 괄호 전체를 근호로 나눈 뒤 정리.
  category: "분배법칙 전개 → 근호의 곱·나눗셈 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분배법칙을 이용한 근호를 포함한 식의 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    √a(√b+√c)=√(ab)+√(ac) 로 전개하고 ⑶ 처럼 곱한 결과에 제곱 인수가 남으면 한 번 더 정리한다.
    도구 한 개 · 통찰 없음 · M_total 4 → 확인하기 ★1.
  tier: star_1
  mechanism_primary: "괄호를 분배법칙으로 전개 → 각 항의 근호를 a√b 꼴로 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\sqrt{10}+\sqrt{15}$ ⑵ $2\sqrt{5}-2$ ⑶ $3\sqrt{2}+3\sqrt{6}$ ⑷ $\sqrt{5}-\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/47-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 안팎의 근호 안 수를 바꿀 수 있다. 제약: 곱한 결과에 제곱 인수가 남으면 정리 단계가 한 번 더 생기므로 난도 조절 손잡이로 쓴다. ⑵ 처럼 유리수 항이 나오게 하려면 같은 수의 근호를 짝지을 것."
    creative: "(1) 나눗셈을 분수꼴로 바꿔 유리화까지 요구(★1~2) (2) 괄호를 둘로 늘려 (√a+√b)(√c+√d) 전개(★2) (3) 결과가 유리수가 되도록 계수를 미지수로 두면 50-h6 골조(★2 · I-EQV)."
```

```yaml
- id: GN-M31-47-04
  page: 47
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴~⑷ 분자가 두 항인 분수의 분모를 유리화. ⑶ 은 분모에 계수가, ⑷ 는 분모에 제곱 인수(√45)가 있다.
  category: "분모 유리화 → 분자 분배 → 약분"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분모의 유리화(분자가 두 항인 경우)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분모의 근호를 분자·분모에 곱하는 정해진 절차. ⑷ 는 √45=3√5 로 먼저 줄이면 계산이 짧아진다.
    통찰 없음 · M_total 5 → 확인하기 ★1.
  tier: star_1
  mechanism_primary: "분모의 근호를 분자·분모에 곱해 유리화 → 분자 전개 → 약분"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{\sqrt{6}+\sqrt{30}}{6}$ ⑵ $\dfrac{\sqrt{10}-4}{2}$ ⑶ $\dfrac{1+3\sqrt{6}}{2}$ ⑷ $\dfrac{5\sqrt{2}-3\sqrt{5}}{15}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/47-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 근호·계수와 분자의 두 항. 제약: 유리화 뒤 분모의 유리수와 분자 계수가 약분되는지 확인해야 답 꼴이 깔끔하다. 분모에 제곱 인수(√45·√8)를 넣으면 전처리 단계가 하나 늘어난다."
    creative: "(1) 분모를 2√3 처럼 계수 있는 꼴로(★1) (2) 분모를 √a+√b 로 두면 켤레 유리화가 되어 단원을 넘고 ★3 (3) 유리화 결과를 a√2+b√5 꼴로 두고 계수를 묻기(★2)."
```

```yaml
- id: GN-M31-47-05
  page: 47
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴⑵ 곱셈·나눗셈·유리화가 한 식에 섞인 혼합 계산.
  category: "곱셈·나눗셈 처리 → 유리화 → 동류 근호 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근호를 포함한 식의 혼합 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    앞의 세 도구(분배·나눗셈·유리화)를 한 식에서 순서대로 쓰는 조합 문제. 새 도구는 없다.
    통찰 없음 · M_total 6 → 확인하기 구역 ★1(계산량만 늘어난 조합형).
  tier: star_1
  mechanism_primary: "각 항을 분배·나눗셈으로 근호 하나로 만든다 → 유리화 → 동류끼리 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $3\sqrt{3}-3$ ⑵ $\sqrt{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/47-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 항의 근호와 계수. 제약: 나눗셈 결과와 곱셈 결과가 같은 근호로 만나야 동류항 정리가 일어난다. 유리수 항과 무리수 항이 함께 남도록 배치."
    creative: "(1) 항을 하나 더 늘려 세 도구를 모두 쓰게(★2) (2) 결과가 유리수가 될 조건으로 바꾸면 ★2 통찰형(I-EQV) (3) 계산 결과 두 개를 대소 비교하게 이어 붙이면 ★2."
```

### 핵심문제 익히기

```yaml
- id: GN-M31-48-h1
  page: 48
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴ 분수 계수가 붙은 √3 항의 정리 ⑵ √5 와 √7 두 종류가 섞인 네 항의 정리.
  category: "분수 계수 통분 → 동류 근호 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 덧셈과 뺄셈(동류 근호 계수 정리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    47-01 과 같은 골조에 분수 계수 통분이 얹혔다. 근호를 문자처럼 두는 관점만 유지하면 된다.
    통찰 없음이나 M_total 6 이라 −1 조정 조건(M_total ≤ 5)에 걸리지 않아 핵심문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "근호를 문자처럼 두고 계수를 통분해 더한다 → 근호별로 묶기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-6\sqrt{3}$ ⑵ $13\sqrt{5}-8\sqrt{7}$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/48-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분수 계수의 분모(2·3·4)와 근호 안 수. 제약: 통분 뒤 계수가 정수나 간단한 분수로 떨어지게. 정수 항을 섞어 계수 부호가 뒤집히도록 두면 함정이 생긴다."
    creative: "(1) 근호를 세 종류로 늘리기(★2) (2) 계수 하나를 문자로 두고 결과가 정수가 될 조건을 묻기(★3) (3) 결과를 a√5+b√7 계수 문제로 바꾸면 48-c1 골조(★2)."
```

```yaml
- id: GN-M31-48-c1
  page: 48
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    분수 계수가 붙은 √2·√6 식을 a√2+b√6 꼴로 정리했을 때, 유리수 a, b 에 대한 b−a 의 값.
  category: "동류 근호 정리 → 무리수의 상등으로 계수 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a√m+b√n 꼴로 정리한 뒤 계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정리는 48-h1 과 같고 마지막에 무리수의 상등으로 계수를 읽는 한 단계가 붙는다.
    계수 비교는 교재가 직접 제시하는 표준 절차라 통찰로 세지 않았다. M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "근호별로 계수를 통분해 정리 → a√2+b√6 과 계수 비교 → b−a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/48-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분수 계수와 두 근호(2·6). 제약: 정리 결과의 계수가 유리수여야 하고 b−a 가 간단한 값으로 떨어지도록 분모를 맞춘다."
    creative: "(1) 묻는 값을 ab·a+b·a²+b² 로 바꾸기(★2) (2) a, b 가 정수라는 조건을 붙여 항 계수를 역으로 정하게(★3 · I-BW) (3) 미지수를 식 안에 넣고 b−a 값을 주면 역방향 ★3."
```

```yaml
- id: GN-M31-48-h2
  page: 48
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴ 근호를 간단히 한 뒤 정리 ⑵ 근호의 나눗셈과 유리화가 섞인 네 항의 정리.
  category: "근호 간단히·유리화 → 동류 근호 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "√a²b=a√b 를 이용한 제곱근의 덧셈과 뺄셈"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑵ 의 √10/√2=√5, 7/√7=√7 처럼 각 항을 같은 근호로 맞추는 전처리가 핵심이다.
    전처리 도구가 두 가지로 늘었을 뿐 표준 절차이고 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "각 항을 √(a²b)=a√b 와 유리화로 최소 꼴로 만든다 → 동류끼리 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-\sqrt{3}-4\sqrt{2}$ ⑵ $2\sqrt{5}-\sqrt{7}$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/48-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 수와 나눗셈·분수꼴 항. 제약: 전처리 뒤 같은 근호가 나와야 합쳐진다. 7/√7 꼴은 분자를 근호 안 수의 배수로 두어야 정수 계수가 남는다."
    creative: "(1) 항을 늘려 세 종류 근호가 남게(★2) (2) 결과를 a√5+b√7 계수 문제로(★2) (3) 전처리 결과가 모두 상쇄되어 0 이 되게 설계하면 서술형 소재(★2)."
```

```yaml
- id: GN-M31-48-c2
  page: 48
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    √75−√90+3√40−5√12 를 a√3+b√10 꼴로 정리했을 때, 유리수 a, b 에 대한 a+b 의 값.
  category: "근호 간단히 → 동류 정리 → 계수 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a√m+b√n 꼴로 정리한 뒤 계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    48-h2 의 전처리와 48-c1 의 계수 비교가 붙은 결합형. 새 도구는 없다.
    통찰 없음 · M_total 6 → 핵심문제 ★2.
  tier: star_2
  mechanism_primary: "각 근호를 a√b 로 정리 → √3·√10 별로 묶기 → 계수 비교 → a+b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/48-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 항의 근호 안 수와 계수. 제약: 제곱 인수를 빼면 두 종류 근호만 남도록 조합하고, a+b 가 작은 정수가 되도록 계수를 맞춘다."
    creative: "(1) 근호를 세 종류로 늘려 한 종류가 소거되게(★2) (2) a+b 대신 ab·a−b 를 묻기(★2) (3) 계수 하나를 문자로 두고 a+b 값을 지정해 역추적시키면 ★3(I-BW)."
```

```yaml
- id: GN-M31-49-h3
  page: 49
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴⑵ 분배법칙으로 전개한 뒤 근호를 정리해 합치는 계산. ⑵ 는 전개한 네 항이 모두 짝을 이뤄 상쇄된다.
  category: "분배법칙 전개 → 근호 정리 → 동류항 소거"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분배법칙을 이용한 근호를 포함한 식의 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전개한 뒤 √24=2√6, √45=3√5 처럼 정리해야 비로소 동류가 보인다는 점이 47-03 과의 차이.
    ⑵ 의 상쇄는 정리 후 드러나는 계산 결과일 뿐 따로 착안할 통찰은 아니다. M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "괄호를 분배법칙으로 전개 → 각 항 근호 정리 → 같은 근호끼리 합·소거"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-\sqrt{6}-2$ ⑵ $0$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/49-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 안팎의 근호와 계수. 제약: 전개 결과에 제곱 인수가 남아야 정리 단계가 살아 있다. 상쇄시키려면 두 곱의 값과 부호가 짝을 이루도록 맞출 것."
    creative: "(1) 괄호를 두 개로 늘려 네 항 전개(★2) (2) 결과가 0 임을 보이는 서술형(★2) (3) 괄호 안 한 항을 문자로 두고 결과가 유리수가 될 조건(★3 · I-EQV)."
```

```yaml
- id: GN-M31-49-c3
  page: 49
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    ⑴⑵ 분배법칙 전개 후 정리. ⑵ 는 (1−√18)√6 처럼 괄호가 뒤에 곱해지고 앞에 빼기가 붙는다.
  category: "분배법칙 전개 → 근호 정리 → 동류항 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분배법칙을 이용한 근호를 포함한 식의 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    49-h3 과 같은 골조에 빼기 괄호의 부호 처리(T-부호)가 얹혔다.
    통찰 없음 · M_total 6 → 핵심문제 ★2.
  tier: star_2
  mechanism_primary: "각 곱을 분배법칙으로 전개 → √(ab) 를 a√b 로 정리 → 동류끼리 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $6$ ⑵ $8\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/49-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 안팎 근호와 앞의 부호. 제약: 전개 결과가 한 종류 근호로 모이게 하려면 곱의 값이 같은 수의 제곱 인수를 갖도록 배치. 유리수 항만 남기려면 같은 근호끼리 곱할 것."
    creative: "(1) 빼기 괄호를 두 개로 늘려 부호 함정을 키우기(★2) (2) 결과가 유리수가 되게 미지수를 넣기(★3) (3) 직사각형 넓이의 차로 옮기면 도형 활용 ★2."
```

```yaml
- id: GN-M31-49-h4
  page: 49
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴⑵ 분자가 두 항인 분수를 항별로 나누거나 유리화해 정리. ⑵ 는 두 분수의 차.
  category: "분배법칙을 이용한 유리화 → 동류 근호 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분모의 유리화(분자가 두 항인 경우)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분수를 항별로 쪼개 나누면 유리화가 한 번에 끝난다는 점이 47-04 보다 한 단계 위.
    표준 절차이고 통찰 없음 · M_total 6 → 핵심문제 ★2.
  tier: star_2
  mechanism_primary: "분자 각 항을 분모 근호로 나눈다(또는 유리화) → 근호 정리 → 동류끼리 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $3$ ⑵ $-\sqrt{5}+\sqrt{2}$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/49-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 두 항과 분모의 근호. 제약: 분자의 한 항이 분모 근호의 배수면 유리수가 남아 답 꼴이 깔끔해진다. 두 분수의 차로 둘 때 같은 근호가 남아 소거되게 맞출 것."
    creative: "(1) 분수를 세 개로 늘리기(★2) (2) 분모를 2√3 처럼 계수 있는 꼴로(★2) (3) 결과를 a+b√10 계수 문제로 만들면 53-03 골조(★2)."
```

```yaml
- id: GN-M31-49-c4
  page: 49
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    ⑴ 정수에서 분수꼴 항을 빼는 유리화 계산 ⑵ 두 분수꼴 항의 합.
  category: "항별 유리화 → 동류 근호 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분모의 유리화(분자가 두 항인 경우)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    49-h4 와 같은 골조. ⑴ 은 뺄셈 괄호의 부호, ⑵ 는 두 분수를 각각 유리화한 뒤 합치는 순서만 지키면 된다.
    통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "각 분수를 항별로 유리화 → 근호 정리 → 동류끼리 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\sqrt{5}+2$ ⑵ $2\sqrt{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/49-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 두 항과 분모 근호. 제약: 두 분수의 유리화 결과가 같은 근호로 만나야 합쳐진다. 상쇄시켜 한 항만 남기려면 계수를 맞출 것."
    creative: "(1) 분수를 세 개로 늘려 두 항이 상쇄되게(★2) (2) 결과가 정수가 되게 계수를 설계(★2) (3) 분모를 √a+√b 로 두면 켤레 유리화로 단원을 넘고 ★3."
```

```yaml
- id: GN-M31-50-h5
  page: 50
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴⑵ 곱셈·나눗셈·유리화가 섞인 혼합 계산. ⑴ 에는 9÷(√3/3) 처럼 분수로 나누는 항이 있다.
  category: "나눗셈을 역수 곱으로 → 전개·유리화 → 동류 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근호를 포함한 식의 혼합 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분수로 나누는 항을 역수 곱으로 고치는 처리와 유리화가 한 식에 함께 들어간다.
    계산 순서만 지키면 되는 절차형이고 통찰 없음 · M_total 6 → 핵심문제 ★2.
  tier: star_2
  mechanism_primary: "÷(√3/3) 을 ×(3/√3) 로 바꿔 유리화 → 분배 전개 → 동류 근호 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-7\sqrt{3}+\sqrt{10}$ ⑵ $8-3\sqrt{6}$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/50-h5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "나누는 분수의 분자·분모와 괄호 안 근호. 제약: 역수를 곱한 뒤 유리화가 한 번 필요하도록 분모에 근호를 남길 것. 전개 결과가 두 종류 근호로 갈리게 배치."
    creative: "(1) 나눗셈을 두 번 넣어 순서 함정을 키우기(★2) (2) 결과가 유리수가 될 조건으로 바꾸면 50-h6 골조(★2 · I-EQV) (3) 도형의 넓이÷길이 맥락으로 옮기면 ★2."
```

```yaml
- id: GN-M31-50-c5
  page: 50
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    ⑴⑵ 분배·나눗셈·유리화가 섞인 혼합 계산. ⑵ 는 (10−2√5)÷√5 처럼 괄호를 근호로 나눈다.
  category: "전개·나눗셈·유리화 → 동류 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근호를 포함한 식의 혼합 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    50-h5 와 같은 골조. 괄호를 근호로 나누는 항을 항별로 쪼개면 유리화가 한 번에 끝난다.
    통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "각 항을 전개·나눗셈으로 근호 하나로 만든다 → 유리화 → 동류끼리 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $7$ ⑵ $-2+3\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/50-c5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 안 두 항과 나누는 근호. 제약: 나눈 결과 중 하나가 유리수가 되도록 분자를 근호 안 수의 배수로. 남는 무리수 항이 서로 상쇄되면 답이 정수로 떨어진다."
    creative: "(1) 결과가 정수가 되도록 계수를 설계해 검산형으로(★2) (2) 미지수를 넣어 유리수 조건 문제로(★2 · I-EQV) (3) 세 항으로 늘려 두 종류 근호가 남게(★2)."
```

```yaml
- id: GN-M31-50-h6
  page: 50
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    √10(2√10+5)−a(4+√10) 을 계산한 결과가 유리수가 되도록 하는 유리수 a 의 값.
  category: "전개 → 무리수 항의 계수 0 조건 → a"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「결과가 유리수」라는 말뜻 조건을 「정리한 식에서 √10 의 계수가 0」이라는 식 조건으로 옮겨 읽는다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "제곱근의 계산 결과가 유리수가 될 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전개 자체는 한 줄이고, 「유리수가 된다」를 「무리수 항의 계수가 0」으로 바꾸는 동치 변환이 문제의 전부다(I-EQV d1).
    미지수가 들어가 Mₐ 2. 통찰 1개는 +1 조건(2개 이상 또는 depth 3)에 못 미쳐 핵심문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "전개해 유리수 항과 √10 항으로 분리 → √10 의 계수=0 → a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/50-h6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 수(10)와 계수(2·5·4). 제약: a 가 유리수로 하나 정해지려면 무리수 항의 계수가 a 의 일차식이어야 한다. 전개에서 √10·√10=10 처럼 유리수가 되는 항을 반드시 남길 것."
    creative: "(1) 조건과 그때의 값을 함께 묻기(53-04 골조 ★3) (2) 미지수를 a, b 두 개로 늘려 연립(★3) (3) 「무리수가 되도록」으로 뒤집으면 a 의 제외 조건을 따져야 해 ★3(I-EQV+I-MI)."
```

```yaml
- id: GN-M31-50-c6
  page: 50
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    √24(1/√3−√6) 에서 (a/√2)(√32−2) 를 뺀 식의 계산 결과가 유리수가 되도록 하는 유리수 a 의 값.
  category: "전개·유리화 → 무리수 항의 계수 0 조건 → a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「유리수가 된다」를 정리 후 남는 √2 항의 계수가 0 이라는 식 조건으로 옮긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "제곱근의 계산 결과가 유리수가 될 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    50-h6 과 같은 동치 변환(I-EQV d1)이지만 전개 과정에 나눗셈과 유리화가 끼어 항 정리 단계가 늘었다.
    무리수 항이 √2 하나로 모이는지 확인하는 것이 관건. M_total 7 · 통찰 1개 → +1 조건 미달로 ★2 유지.
  tier: star_2
  mechanism_primary: "각 곱을 전개·유리화해 유리수 항과 √2 항으로 분리 → √2 의 계수=0 → a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/50-c6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 안 근호와 계수, 나누는 근호(√2·√3). 제약: 전개 결과의 무리수 항이 한 종류로 모여야 계수=0 조건이 일차식 하나가 된다. 유리수 항은 √144 처럼 완전제곱이 되게 짝지을 것."
    creative: "(1) 무리수 항을 두 종류로 남겨 a, b 연립으로(★3) (2) a 를 분수로 두어 통분 부담을 얹기(★2, 질 저하 주의) (3) 「결과가 정수」로 좁히면 사후 검증이 붙어 ★3(I-VF)."
```

```yaml
- id: GN-M31-51-h7
  page: 51
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    윗변 (√2+√3) cm, 아랫변 (3√2+√3) cm, 높이 2√2 cm 인 사다리꼴의 넓이.
  category: "사다리꼴 넓이 공식 → 근호식 전개 → 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 덧셈과 뺄셈의 도형에의 활용(넓이)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    그림에서 두 밑변과 높이(직각 표시된 왼쪽 변)를 읽어 공식에 넣고 분배법칙으로 전개하는 절차.
    두 밑변의 합에서 √3 이 먼저 정리되면 계산이 짧아진다. 통찰 없음 · M_total 6 → 핵심문제 ★2.
  tier: star_2
  mechanism_primary: "½×(윗변+아랫변)×높이 에 근호식 대입 → 분배 전개 → 동류 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(8+2\sqrt{6}\,)\,\mathrm{cm}^2$'
  answer_source: "본문 답"
  figure: crop:fig-51-h7.png
  latex: latex-bank/gn-m31/items/51-h7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 근호 길이의 계수와 근호 안 수. 제약: 그림 라벨의 위치(윗변·아랫변·왼쪽 높이와 두 직각 표시)는 고정하고 값만 바꾼다. 높이의 계수를 짝수로 두면 ½ 이 약분되고, 두 밑변의 합에 같은 근호가 있어야 전개가 유리수+무리수 꼴로 깔끔히 떨어진다."
    creative: "(1) 넓이를 주고 윗변을 역으로 묻기(★3 · I-BW) (2) 사다리꼴을 삼각형·평행사변형으로 바꾸기(★2) (3) 둘레와 넓이를 함께 묻거나 두 도형의 넓이 차를 묻기(★3)."
```

```yaml
- id: GN-M31-51-c7
  page: 51
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    세 모서리가 (√3+√5) cm, √3 cm, √5 cm 인 직육면체의 겉넓이.
  category: "겉넓이 2(ab+bc+ca) → 근호 곱 전개 → 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 계산의 입체도형에의 활용(겉넓이)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    겉넓이 공식에 세 모서리를 넣고 √3·√5=√15, √5·√5=5 같은 곱을 정리하면 끝난다.
    서로 다른 세 면을 빠뜨리지 않는 것이 유일한 주의점이고 통찰은 없다. M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "세 면의 넓이 ab·bc·ca 를 근호 곱으로 구한다 → 합의 2배 → 동류 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(16+6\sqrt{15}\,)\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: crop:fig-51-c7.png
  latex: latex-bank/gn-m31/items/51-c7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 모서리의 근호. 제약: 그림의 모서리 라벨 위치(가로·세로·높이)는 고정. 가로를 √a+√b 꼴로 두고 나머지 둘을 √a, √b 로 두면 유리수 항과 √ab 항이 함께 남아 답 꼴이 이 문제와 같아진다."
    creative: "(1) 부피를 묻기(근호 곱만 남아 ★1~2) (2) 겉넓이를 주고 한 모서리를 역으로 묻기(★3 · I-BW) (3) 정육면체·직육면체 두 입체의 겉넓이 비교로 대소 관계와 엮기(★3)."
```

```yaml
- id: GN-M31-51-h8
  page: 51
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    다섯 선지 중 두 실수의 대소 관계가 옳은 것 고르기(5지선다).
  category: "두 수의 차 → 부호 판정"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "실수의 대소 관계(차의 부호)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    선지마다 (좌변)−(우변) 을 만들어 부호를 보는 교재 표준 절차를 다섯 번 반복한다.
    √28=2√7 처럼 근호를 밖으로 빼는 정방향 정리가 들어가지만 단원 도구 그대로라 통찰로 세지 않았다.
    선지 반복으로 Mₛ 3 · M_total 7 · 통찰 없음 → 핵심문제 ★2.
    [분류 이슈] 근호를 같은 꼴로 맞추는 단계를 I-EQV 로 세면 ★3 후보 — 기록만 함.
  tier: star_2
  mechanism_primary: "각 선지에서 (좌변)−(우변) 을 근호식으로 정리 → 부호 판정 → 옳은 선지"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑤'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/51-h8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 선지의 두 수(근호와 상수항). 제약: 차가 0 에 가깝게 두어야 어림으로 못 풀고 차의 부호 판정이 필요해진다. 정답 선지 외에는 부등호 방향이 분명히 틀리게 둘 것."
    creative: "(1) 「옳지 않은 것」으로 뒤집기(51-c8 ★2) (2) 세 수의 대소로 늘리면 53-06 골조(★3) (3) 수직선 위 점의 위치로 묻기(★3 · I-RT)."
```

```yaml
- id: GN-M31-51-c8
  page: 51
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    다섯 선지 중 두 실수의 대소 관계가 옳지 않은 것 고르기(5지선다).
  category: "두 수의 차 → 부호 판정 → 어긋나는 선지"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "실수의 대소 관계(차의 부호)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    51-h8 과 같은 절차에 부정 발문이 붙어 다섯 선지를 모두 확인해야 한다.
    √12=2√3, √24−√18 처럼 근호를 맞추는 전처리가 반복되지만 표준 도구다.
    통찰 없음 · M_total 7 → ★2. [분류 이슈] 51-h8 과 같은 사유로 ★3 후보 — 기록만 함.
  tier: star_2
  mechanism_primary: "각 선지의 차를 정리해 부호 판정 → 부등호가 어긋나는 선지 고르기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/51-c8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 선지의 두 수. 제약: 오답 선지 네 개는 부등호가 맞아야 하므로 차의 부호를 하나씩 확인해 설계할 것. 근호 안 수에 제곱 인수를 넣어 전처리를 유도."
    creative: "(1) 「옳은 것」으로 되돌리기(★2) (2) 선지를 ㄱㄴㄷ 보기로 바꿔 모두 고르게(★3 · I-MI) (3) 두 수 사이의 수를 묻기(★3)."
```

### 계산력 강화하기

```yaml
- id: GN-M31-52-01
  page: 52
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력"
  summary: |
    ⑴~⑷ 같은 근호끼리 계수를 더하고 빼는 반복 연습. ⑶ 은 두 종류, ⑷ 는 분수 계수.
  category: "동류 근호 정리 → 계수 합"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 덧셈과 뺄셈(동류 근호 계수 정리)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    47-01·48-h1 과 같은 골조의 숙달용 반복. ⑷ 의 분수 계수 통분이 유일한 추가 부담이다.
    계산력 강화 구역 출발점 ★1 · 통찰 없음 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "같은 근호를 동류항으로 보고 계수를 더한다 → 근호별로 묶기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $2\sqrt{2}$ ⑵ $-4\sqrt{5}$ ⑶ $-5\sqrt{3}+7\sqrt{7}$ ⑷ $3\sqrt{6}-\sqrt{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/52-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수와 근호 안 수. 제약: 동류·비동류 구성을 유지하고, 분수 계수는 통분 뒤 정수나 간단한 분수가 되게 분모를 맞춘다."
    creative: "(1) 항 수를 늘려 세 종류 근호가 남게(★1) (2) 결과를 a√6+b√10 계수 문제로(★2) (3) 빈칸 채우기·오류 찾기 형태로 바꾸면 53-01 골조(★2)."
```

```yaml
- id: GN-M31-52-02
  page: 52
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력"
  summary: |
    ⑴~⑷ 근호 안의 제곱 인수를 꺼내 간단히 한 뒤 동류끼리 정리하는 반복 연습.
  category: "근호 간단히 → 동류 근호 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "√a²b=a√b 를 이용한 제곱근의 덧셈과 뺄셈"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    47-02·48-h2 와 같은 골조. 항이 네 개로 늘고 √98·√72 처럼 큰 수가 들어와 정리 부담만 커졌다.
    계산 마찰만 늘어난 반복 연습이라 ★ 을 올리지 않는다(v3.8 §2.11). 계산력 구역 ★1.
  tier: star_1
  mechanism_primary: "√(a²b)=a√b 로 각 항 정리 → 같은 근호 계수 합"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $5\sqrt{3}$ ⑵ $-3\sqrt{2}$ ⑶ $-2\sqrt{2}-\sqrt{6}$ ⑷ $-\sqrt{5}+4\sqrt{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/52-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 수(제곱 인수를 갖는 수)와 계수. 제약: 정리 뒤 같은 근호가 남아야 합쳐진다. 큰 수를 쓰면 마찰만 커지므로 200 이하로 제한하는 편이 낫다."
    creative: "(1) 두 종류가 남되 하나가 0 이 되게 설계(★1) (2) 계수를 문자로 두고 결과가 0 일 조건(★2) (3) 정사각형 넓이가 주어진 도형의 변의 길이 합으로(★2)."
```

```yaml
- id: GN-M31-52-03
  page: 52
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력"
  summary: |
    ⑴~⑶ 분모에 근호가 있는 항을 유리화한 뒤 동류끼리 정리.
  category: "유리화·근호 간단히 → 동류 근호 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분모의 유리화(분자가 두 항인 경우)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    4/√2=2√2, 15/√5=3√5 처럼 유리화로 항을 같은 근호에 맞춘 뒤 합치는 반복 연습.
    도구는 47-04·49-h4 와 같고 통찰 없음 · M_total 6 → 계산력 구역 ★1.
  tier: star_1
  mechanism_primary: "분모의 근호를 유리화해 a√b 꼴로 맞춘다 → 동류끼리 계수 합"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $5\sqrt{2}$ ⑵ $-\sqrt{5}$ ⑶ $\sqrt{2}+\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/52-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 유리수와 분모의 근호. 제약: 분자를 근호 안 수의 배수로 두어야 유리화 뒤 정수 계수가 남는다. 근호 안에 제곱 인수를 넣으면 전처리가 한 단계 늘어난다."
    creative: "(1) 분수 항을 늘려 두 종류 근호가 남게(★1) (2) 결과가 0 이 되게 설계(★1) (3) 분자를 두 항으로 늘리면 49-h4 골조(★2)."
```

```yaml
- id: GN-M31-52-04
  page: 52
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력"
  summary: |
    ⑴~⑷ 분배법칙으로 전개한 뒤 근호를 정리해 합치는 반복 연습. ⑶ 은 결과가 유리수로 떨어진다.
  category: "분배법칙 전개 → 근호 정리 → 동류항 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분배법칙을 이용한 근호를 포함한 식의 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    47-03·49-h3 과 같은 골조. 괄호 앞 부호와 전개 후 √125=5√5 같은 정리만 지키면 된다.
    통찰 없음 · M_total 6 → 계산력 구역 ★1.
  tier: star_1
  mechanism_primary: "괄호를 분배법칙으로 전개 → 각 항 근호 정리 → 동류끼리 합"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $5\sqrt{2}-2\sqrt{10}$ ⑵ $5\sqrt{3}-6$ ⑶ $-10$ ⑷ $-2\sqrt{3}+2\sqrt{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/52-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 안팎 근호와 앞의 부호. 제약: 전개 결과가 유리수로 떨어지게 하려면 같은 근호끼리 곱해지도록 배치. 무리수 항을 남기려면 서로 다른 근호를 섞는다."
    creative: "(1) 결과가 정수가 되게 설계해 검산형으로(★1) (2) 괄호 두 개의 곱으로 늘리기(★2) (3) 미지수를 넣어 유리수 조건 문제로(★2 · I-EQV)."
```

```yaml
- id: GN-M31-52-05
  page: 52
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력"
  summary: |
    ⑴~⑷ 분자가 두 항인 분수의 유리화. ⑶⑷ 는 유리화 뒤 동류항 정리까지 이어진다.
  category: "분모 유리화 → 분자 분배 → 동류 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분모의 유리화(분자가 두 항인 경우)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    47-04·49-c4 와 같은 골조. ⑵ 의 √24=2√6 처럼 분모를 먼저 줄이면 약분이 쉬워진다.
    통찰 없음 · M_total 6 → 계산력 구역 ★1.
  tier: star_1
  mechanism_primary: "분모의 근호를 유리화 → 분자 각 항 정리 → 약분·동류 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{\sqrt{14}+\sqrt{35}}{7}$ ⑵ $\dfrac{\sqrt{2}-\sqrt{6}}{4}$ ⑶ $\sqrt{2}$ ⑷ $-\sqrt{3}+4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/52-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 두 항과 분모의 근호·계수. 제약: 유리화 뒤 분자·분모가 약분되는지 확인. 분모에 제곱 인수(√24·√45)를 넣으면 전처리 단계가 하나 늘어난다."
    creative: "(1) 두 분수의 차로 두어 상쇄가 일어나게(★2) (2) 결과를 a+b√10 계수 문제로(★2) (3) 분모를 √a+√b 로 두면 켤레 유리화로 단원을 넘고 ★3."
```

```yaml
- id: GN-M31-52-06
  page: 52
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력"
  summary: |
    ⑴~⑷ 곱셈·나눗셈·유리화·전개가 섞인 혼합 계산 반복 연습.
  category: "전개·나눗셈·유리화 → 동류 근호 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근호를 포함한 식의 혼합 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    47-05·50-h5 와 같은 혼합 계산 골조이며 항만 늘었다. 계산 순서를 지키는 것이 전부다.
    통찰 없음 · M_total 6 → 계산력 구역 ★1.
    [분류 이슈] 골조가 핵심문제 50-h5(★2)와 같은데 구역 신호만으로 ★1 이 된다 — 기록만 함.
  tier: star_1
  mechanism_primary: "각 항을 전개·나눗셈·유리화로 근호 하나로 만든다 → 동류끼리 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\sqrt{14}$ ⑵ $3\sqrt{2}+\sqrt{3}$ ⑶ $8-7\sqrt{3}$ ⑷ $5\sqrt{3}-\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/52-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 항의 근호와 계수, 나누는 근호. 제약: 서로 다른 처리를 거친 항들이 같은 근호로 만나야 정리가 일어난다. 유리수 항이 함께 남도록 짝지을 것."
    creative: "(1) 결과가 한 항만 남게 설계(★1) (2) 미지수를 넣어 유리수 조건 문제로(★2 · I-EQV) (3) 계산 결과 두 개의 대소를 비교하게 이어 붙이기(★3)."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M31-53-01
  page: 53
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험출제"
  summary: |
    다섯 개의 제곱근 계산식 중 결과가 옳지 않은 것 고르기(5지선다).
  category: "선지별 계산 → 결과 대조 → 어긋나는 선지"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 덧셈·뺄셈 계산 결과의 진위 판별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 구역의 계산(동류 정리·근호 간단히·유리화)을 다섯 번 반복해 제시된 답과 대조하는 형태다.
    개별 계산은 ★1 수준이고 선지 반복으로 Mₛ 만 3 이 되었다. 통찰 없음 → 시험 구역 하단 ★2.
  tier: star_2
  mechanism_primary: "선지마다 좌변을 근호 정리·유리화로 계산 → 우변과 대조 → 어긋나는 것"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/53-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 선지 식의 근호와 계수. 제약: 오답 선지 네 개는 실제로 옳아야 하므로 하나씩 계산해 확인할 것. 정답 선지는 계수 하나만 틀리게 두어 어림으로 못 걸러지게."
    creative: "(1) 「옳은 것」으로 뒤집기(★2) (2) 틀린 곳을 찾아 바르게 고치는 서술형(★3) (3) ㄱㄴㄷ 보기로 바꿔 옳은 것을 모두 고르게(★3 · I-MI)."
```

```yaml
- id: GN-M31-53-02
  page: 53
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험출제"
  summary: |
    a=√3+2√2, b=3√2−√3 일 때 √2·a+√3·b 의 값.
  category: "대입 → 분배 전개 → 동류 근호 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무리수를 대입한 식의 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    문자에 무리수를 대입한 뒤 전개하면 √6 항이 모이고 유리수 항이 남는다.
    대입·전개·정리의 표준 3단계이며 문자는 껍데기라 Mₐ 1. 통찰 없음 · M_total 6 → 시험 구역 하단 ★2.
  tier: star_2
  mechanism_primary: "a·b 를 대입 → 분배 전개 → √6 항과 유리수 항으로 묶기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4\sqrt{6}+1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/53-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a·b 의 근호와 계수, 곱하는 근호(√2·√3). 제약: 대입 후 같은 근호(√6)로 만나야 정리가 되고, 유리수 항이 남도록 같은 근호끼리 곱해지는 짝을 하나 둘 것."
    creative: "(1) 계수를 문자로 두고 결과가 유리수가 될 조건(★3 · I-EQV) (2) ab 나 a²+b² 처럼 곱셈 공식이 필요한 식으로(★3 · 단원 확장) (3) a, b 의 대소 비교를 덧붙이기(★3)."
```

```yaml
- id: GN-M31-53-03
  page: 53
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험출제"
  summary: |
    분모에 근호가 있는 두 분수의 차를 a+b√10 꼴로 정리했을 때, 유리수 a, b 에 대한 b−a 의 값.
  category: "두 분수 유리화 → 유리수·무리수 항 분리 → 계수 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a√m+b√n 꼴로 정리한 뒤 계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    유리화를 두 번 하고 분수 계수를 합친 뒤 무리수의 상등으로 계수를 읽는다. 48-c1 골조에 계산량만 얹혔다.
    통찰이 없고 늘어난 것이 계산 마찰뿐이라 ★3 으로 올리지 않았다(v3.8 §2.11 질 저하 경고 방향).
    M_total 6 → 시험 구역 하단 ★2. [분류 이슈] 구역 신호 상단으로 보면 ★3 후보 — 기록만 함.
  tier: star_2
  mechanism_primary: "두 분수를 각각 유리화 → 유리수 항과 √10 항으로 분리 → 계수 비교 → b−a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/53-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 두 항과 분모의 근호·계수. 제약: 두 분수의 유리화 결과가 같은 근호(√10)로 만나야 a+b√10 꼴이 된다. b−a 가 간단한 값이 되도록 분모 계수를 맞출 것."
    creative: "(1) 묻는 값을 ab·a+b 로 바꾸기(★2) (2) 분수를 세 개로 늘려 한 항이 소거되게(★2) (3) b−a 값을 주고 식 안의 계수를 역으로 묻기(★3 · I-BW)."
```

```yaml
- id: GN-M31-53-04
  page: 53
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험출제"
  summary: |
    A=3(1+k√7)−2k+12√7 이 유리수가 되도록 하는 유리수 k 의 값과 그때의 A 의 값.
  category: "전개 → 무리수 항의 계수 0 조건 → k → A"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「A 가 유리수」를 「정리한 식에서 √7 의 계수가 0」이라는 k 의 일차방정식으로 옮긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "계산 결과가 유리수가 될 조건과 그때의 값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    50-h6 과 같은 동치 변환(I-EQV d1)에 「그때의 A」를 구하는 대입 단계가 하나 더 붙는다.
    미지수가 유리수 항과 무리수 항에 모두 들어 있어 분리를 정확히 해야 하고 Mₐ 2.
    시험 구역 출발점 ★2~3 중 통찰 1개와 두 값 요구로 상단 ★3.
  tier: star_3
  mechanism_primary: "전개해 유리수 항과 √7 항으로 분리 → √7 의 계수=0 → k → 유리수 항에 대입해 A"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$k=-4$, $A=11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/53-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "k 의 계수(3·12)와 근호(7), 유리수 항의 계수(3·−2). 제약: √ 항 계수가 k 의 일차식이어야 k 가 하나로 정해지고, A 가 정수로 떨어지도록 유리수 항 계수를 맞춘다."
    creative: "(1) A 값을 주고 k 를 역으로 묻기(★3 · I-BW) (2) 미지수를 두 개 넣어 연립(★3~4) (3) 「A 가 자연수」로 좁히면 후보 기각이 붙어 ★4(I-VF)."
```

```yaml
- id: GN-M31-53-05
  page: 53
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험출제"
  summary: |
    밑변이 (√5+√8) cm, 그 밑변에 내린 높이가 √20 cm 인 삼각형의 넓이.
  category: "삼각형 넓이 공식 → 근호 정리 → 전개"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 덧셈과 뺄셈의 도형에의 활용(넓이)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    √20=2√5 로 고치면 ½ 이 약분되어 (√5+2√2)×√5 한 줄로 끝난다.
    그림에서 높이가 밑변에 내린 수선임을 읽는 것 외에 특별한 처리는 없다.
    통찰 없음 · M_total 6 → 시험 구역 하단 ★2.
  tier: star_2
  mechanism_primary: "½×밑변×높이 에 대입 → √20=2√5 정리 → 분배 전개 → 동류 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(5+2\sqrt{10}\,)\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: crop:fig-53-05.png
  latex: latex-bank/gn-m31/items/53-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑변의 두 근호와 높이. 제약: 그림의 수선 표시와 라벨 위치는 고정. 높이에 제곱 인수를 남겨 √20→2√5 정리 단계를 살리고, 계수를 짝수로 두어 ½ 이 약분되게 한다."
    creative: "(1) 넓이를 주고 높이를 역으로 묻기(★3 · I-BW) (2) 삼각형을 사다리꼴·마름모로 바꾸기(★2) (3) 두 도형의 넓이 차를 묻기(★3)."
```

```yaml
- id: GN-M31-53-06
  page: 53
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험출제"
  summary: |
    세 수 a=2√2−1, b=4−2√2, c=4−√10 의 대소 관계를 부등호로 나타내기.
  category: "두 쌍의 차 → 부호 판정 → 추이성으로 정렬"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "b−c 를 볼 때 2√2 를 √8 로 되돌려 √10 과 같은 근호 꼴로 맞춰야 부호가 보인다(계수를 근호 안으로 넣는 역방향 정리)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "세 실수의 대소 관계(차의 부호·근호 꼴 맞추기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세 수를 두 쌍으로 나눠 차의 부호를 보고 추이성으로 잇는다. 어느 쌍을 비교할지 고르는 판단이 먼저 필요하다.
    b−c 에서 계수를 근호 안으로 되돌려(2√2=√8) √10 과 같은 꼴로 맞추는 역방향 정리가 핵심이라 I-EQV d1 으로 셌다.
    51-h8 의 정방향 정리(√28=2√7)와 달리 학생이 잘 떠올리지 못하는 방향. 통찰 1개 · M_total 7 → 시험 구역 상단 ★3.
  tier: star_3
  mechanism_primary: "a−b 의 부호 판정 → b−c 에서 2√2=√8 로 맞춰 부호 판정 → 추이성으로 a>b>c"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a>b>c$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/53-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 수의 근호와 상수항. 제약: 세 값이 서로 가깝게 두어야 어림이 아니라 차의 부호 판정이 필요해진다. 비교할 두 무리수는 계수를 근호 안에 넣어 같은 꼴로 만들 수 있게 고를 것."
    creative: "(1) 네 수로 늘려 정렬시키기(★3) (2) 대소 관계를 주고 미지수 범위를 역으로 묻기(★4 · I-BW) (3) 수직선 위 네 점 중 위치를 고르게 하면 표현 전환이 붙어 ★3(I-RT)."
```

## 표본 판정 요약 (33문)

- ★ 분포: ★1 11 · ★2 20 · ★3 2 · ★4 0 · ★5 0
- 통찰형 4(50-h6 · 50-c6 · 53-04 · 53-06 — 모두 I-EQV depth 1) · 절차형 29 · premium 0
- M_total 분포: 4 → 2문 · 5 → 4문 · 6 → 21문 · 7 → 6문 (평균 약 6.0 · 계산 단원이라 Mₐ 는 미지수 문항 3개만 2)
- type_hint 상위: 「분모의 유리화(분자가 두 항)」 5 · 「분배법칙을 이용한 근호식 계산」 4 · 「근호를 포함한 식의 혼합 계산」 4 · 「동류 근호 계수 정리」 3 · 「√a²b=a√b 정리」 3 · 「a√m+b√n 계수 구하기」 3
- 대상층: 하위권 11 · 중하위권 18 · 중위권 4
- 그림: 3문(`crop:fig-51-h7.png` · `crop:fig-51-c7.png` · `crop:fig-53-05.png`) — 모두 도형 넓이·겉넓이 활용
- 구역별 ★: 개념원리 확인하기 5문 모두 ★1 · 핵심문제 익히기 16문 모두 ★2 · 계산력 강화하기 6문 모두 ★1 · 이런 문제가 시험에 나온다 ★2 4 + ★3 2

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M31-51-h8 · GN-M31-51-c8 | 「실수의 대소 관계」에서 근호를 같은 꼴로 맞추는 단계(√28=2√7)를 I-EQV 로 세면 통찰형 ★3 이 된다. 단원 표준 도구의 정방향 정리라 절차형 ★2 로 두었으나, 53-06 의 역방향 정리와의 경계는 카탈로그 설계 때 확정 필요 | ★2 / ★3 |
| GN-M31-52-06 | 골조가 핵심문제 50-h5(★2)와 동일한 혼합 계산인데 「계산력 강화하기」 구역 신호만으로 ★1 이 되었다. 구역이 난이도 층인 개념원리 구조상 같은 골조가 구역에 따라 1단 갈리는 사례 | ★1 / ★2 |
| GN-M31-53-03 | 「이런 문제가 시험에 나온다」 구역 상단(★3)으로 보면 ★3 후보지만, 48-c1 대비 늘어난 것이 유리화 2회라는 계산 마찰뿐이라 ★2 로 두었다(v3.8 §2.11 방향) | ★2 / ★3 |

카탈로그 차원 메모(나중에 중3-1 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 type_hint 는 계산 도구 네 갈래다 — 「동류 근호 계수 정리」 · 「√a²b=a√b 정리 후 덧셈·뺄셈」 · 「분배법칙 전개」 · 「분모의 유리화」. 이 넷은 **따로 세우되 base ★ 는 모두 1** 로 두는 것이 실태에 맞는다. 같은 골조가 확인하기(★1) · 핵심문제(★2) · 계산력(★1) 세 구역에 그대로 반복되기 때문이다.
- 「근호를 포함한 식의 혼합 계산」은 위 넷의 조합일 뿐 새 도구가 없다. **별도 유형으로 세우지 말고** 조합 슬롯(항 수·도구 수로 난이도 조절)으로 처리하는 편이 낫다.
- 「a√m+b√n 꼴로 정리 후 계수 구하기」(48-c1 · 48-c2 · 53-03)는 계산 유형에 「무리수의 상등」 한 단계가 붙은 것이어서 **base ★ 2 의 독립 유형**으로 세울 만하다.
- 「계산 결과가 유리수가 될 조건」(50-h6 · 50-c6 · 53-04)은 이 단원에서 유일하게 통찰(I-EQV)이 필수인 갈래다. **base ★ 2 로 세우고, 「그때의 값까지 요구」·「미지수 2개」·「자연수 조건」 변형을 ★3~4 상위 슬롯으로 둘 것.**
- 「실수의 대소 관계」는 두 수(51-h8 · 51-c8)와 세 수(53-06)를 **하나의 유형으로 통합**하고 비교 대상 수로 base ★ 를 2↔3 나누는 것이 자연스럽다.
- 도형 활용(51-h7 · 51-c7 · 53-05)은 평면(넓이)과 입체(겉넓이)를 **통합해 한 유형**으로 두어도 된다. 근호 계산은 같고 공식만 다르다. 다만 「넓이를 주고 변을 역으로」 변형은 I-BW 가 붙어 별도 상위 슬롯이 필요하다.
